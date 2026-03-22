use campusMusic 

//1. ¿Cuántos estudiantes se inscribieron por sede en el último mes?

db.Inscripcion.aggregate([
  {
    $match: {
      fecha: { $gte: new Date("2025-02-01T00:00:00.000Z") }
    }
  },
  {
    $lookup: {
      from: "Curso",
      localField: "idCurso",
      foreignField: "idCurso",
      as: "curso"
    }
  },
  { $unwind: "$curso" },
  {
    $project: {
      _id: 0,
      sede: "$curso.idSede",
      fecha: 1
    }
  },
  {
    $group: {
      _id: {
        sede: "$sede",
        mes: { $month: "$fecha" }
      },
      cantidad: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id.sede",
      mes: "$_id.mes",
      inscripciones: "$cantidad"
    }
  }
]);

// 2. ¿Cuáles son los cursos más demandados en cada sede?

db.Inscripcion.aggregate([
  {
    $lookup: {
      from: "Curso",
      localField: "idCurso",
      foreignField: "idCurso",
      as: "curso"
    }
  },
  { $unwind: "$curso" },
  {
    $lookup: {
      from: "Sede",
      localField: "curso.idSede",
      foreignField: "idSede",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $group: {
      _id: { sede: "$sede.idSede", curso: "$curso.nombre" },
      totalInscritos: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.sede": 1, totalInscritos: -1 }
  },
  {
    $group: {
      _id: "$_id.sede",
      cursoMasDemandado: { $first: "$_id.curso" },
      inscripciones: { $first: "$totalInscritos" }
    }
  },
  {
    $project: {
      _id: 0,
      sede: "$_id",
      cursoMasDemandado: 1,
      inscripciones: 1
    }
  }
]);

//3. ¿Cuál es el ingreso total generado por inscripciones en cada sede?

db.Inscripcion.aggregate([
{$lookup: {
    from: "Curso",
    localField: "idCurso",
    foreignField: "idCurso",
    as: "curso"
  }},
  {$unwind: "$curso"},
  {$project: {
    _id: 0,
    sede: "$curso.idSede",
    precio:"$curso.precio",
  }},
  {
    $group: {
      _id: "$sede",
      precio: {$sum: "$precio"}
    }
  },
  {$project: {
    _id: 0,
    sede: "$_id",
    precio: 1
  }}
]);

// 4. ¿Qué profesor tiene más estudiantes asignados?

db.Grupo.aggregate([
  {
    $lookup: {
      from: "EstudianteGrupo",
      localField: "idGrupo",
      foreignField: "idGrupo",
      as: "estudiantes"
    }
  },
  {
    $group: {
      _id: "$idProfesor",
      totalEstudiantes: { $sum: { $size: "$estudiantes" } }
    }
  },
  { $sort: { totalEstudiantes: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "Profesor",
      localField: "_id",
      foreignField: "idProfesor",
      as: "profesor"
    }
  },
  { $unwind: "$profesor" },
  {
    $project: {
      _id: 0,
      nombreProfesor: "$profesor.nombreProfesor",
      totalEstudiantes: 1
    }
  }
]);

// 5. ¿Qué instrumento es el más reservado?

db.Reserva.aggregate([
  {
    $group: {
      _id: "$idInstrumento",
      totalReservas: { $sum: 1 }
    }
  },
  { $sort: { totalReservas: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "Instrumento",
      localField: "_id",
      foreignField: "idInstrumento",
      as: "instrumento"
    }
  },
  { $unwind: "$instrumento" },
  {
    $project: {
      _id: 0,
      nombreInstrumento: "$instrumento.instrumento",
      totalReservas: 1
    }
  }
]);

// 6 Historial de cursos de un estudiante

db.Inscripcion.aggregate([
  { $match: { idEstudiante: 5 } },
    {
    $lookup: {
      from: "Estudiante",
      localField: "idEstudiante",
      foreignField: "idEstudiante",
      as: "estudiante"
    }
  },
   { $unwind: "$estudiante" },
  {
    $lookup: {
      from: "Curso",
      localField: "idCurso",
      foreignField: "idCurso",
      as: "curso"
    }
  },{ $unwind: "$curso" },
  {
    $lookup: {
      from: "Sede",
      localField: "curso.idSede",
      foreignField: "idSede",
      as: "sede"
    }
  },
  { $unwind: "$sede" }, 
    {
    $lookup: {
      from: "CursoProfesor",
      localField: "idCurso",
      foreignField: "idCurso",
      as: "cursoProfesor"
    }
  },
  { $unwind: "$cursoProfesor" },
  {
    $lookup: {
      from: "Profesor",
      localField: "cursoProfesor.idProfesor",
      foreignField: "idProfesor",
      as: "profesor"
    }
  },
  { $unwind: "$profesor" },
  {
    $lookup: {
      from: "Nivel",
      localField: "curso.idNivel",
      foreignField: "idNivel",
      as: "nivel"
    }
  },
  { $unwind: "$nivel" },
    {
    $project: {
      _id: 0,
      consultaIdEstudiante: "$idEstudiante",
      estudiante: "$estudiante.nombreEstudiante",
      fechaInscripcion: "$fecha",
      sede: "$sede.direccion",
      curso: "$curso.nombre",
      profesor: "$profesor.nombreProfesor",
      nivel: "$nivel.nombreNivel",
      costo: "$curso.precio"
    }
  }
]);

// 7. Cursos actualmente en ejecución por sede

db.Duracion.aggregate([
  {
    $match: {
      fechaInicio: { $lte: new Date() },
      fechaFin: { $gte: new Date() }
    }
  },
  {
    $lookup: {
      from: "Curso",
      localField: "idCurso",
      foreignField: "idCurso",
      as: "curso"
    }
  },
  { $unwind: "$curso" },
  {
    $lookup: {
      from: "Sede",
      localField: "curso.idSede",
      foreignField: "idSede",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $group: {
      _id: "$sede.direccion",
      cursosEnEjecucion: { $addToSet: "$curso.idCurso" }
    }
  }
]);

// 8. Detectar cursos que excedieron el cupo

db.Inscripcion.aggregate([
  {
    $group: {
      _id: "$idCurso",
      inscritos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "Curso",
      localField: "_id",
      foreignField: "idCurso",
      as: "curso"
    }
  },
  { $unwind: "$curso" },
  {
    $project: {
      _id: 0,
      idCurso: "$curso.idCurso",
      cupo: "$curso.cupo",
      inscritos: 1,
      excedido: { $gt: ["$inscritos", "$curso.cupo"] }
    }
  },
  { $match: { excedido: true } }
]);

