use campusMusic;

for (let i = 1; i <= 15; i++) {

  // 1. CREAR VISTAS DEL ESTUDIANTE

  // Vista estudiante
  db.createCollection(`vista_estudiante_${i}_info`, {
    viewOn: "Estudiante",
    pipeline: [
      { $match: { idEstudiante: i } },
      { $project: { _id: 0, nombreEstudiante: 1, documento: 1, contacto: 1, idNivel: 1, idSede: 1 } }
    ]
  });

  // Vista cursos disponibles
  db.createCollection(`vista_estudiante_${i}_cursosDisponibles`, {
    viewOn: "cursoDisponibles",
    pipeline: [
      { $match: { disponible: true } },
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
          idCurso: 1,
          idSede: 1,
          curso: "$curso.nombre",
          precio: "$curso.precio",
          cupo: "$curso.cupo"
        }
      }
    ]
  });

  // Vista historial de inscripciones
  db.createCollection(`vista_estudiante_${i}_inscripciones`, {
    viewOn: "Inscripcion",
    pipeline: [
      { $match: { idEstudiante: i } },
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
          idInscripcion: 1,
          fecha: 1,
          curso: "$curso.nombre",
          precio: "$curso.precio"
        }
      }
    ]
  });
    // Vista historial de reserva

  db.createCollection(`vista_estudiante_${i}_reservas`, {
    viewOn: "Reserva",
    pipeline: [
      { $match: { $expr: { $eq: ["$idEstudiante", i] } } },
      {
        $lookup: {
          from: "Instrumento",
          localField: "idInstrumento",
          foreignField: "idInstrumento",
          as: "instrumento"
        }
      },
      { $unwind: "$instrumento" },
      {
        $project: {
          _id: 0,
          idReserva: 1,
          fechaInicio: 1,
          fechaFin: 1,
          instrumento: "$instrumento.instrumento"
        }
      }]
  });
}

  // 2.CREAR ROL DEL ESTUDIANTE

  for (let i = 1; i <= 15; i++) {
    db.createRole({
      role: `estudiante_${i}`,
      privileges: [
        { resource: { db: "campusMusic", collection: "" }, actions: ["listCollections"] },
        // Lectura de vistas
        { resource: { db: "campusMusic", collection: `vista_estudiante_${i}_info` }, actions: ["find"] },
        { resource: { db: "campusMusic", collection: `vista_estudiante_${i}_cursosDisponibles` }, actions: ["find"] },
        { resource: { db: "campusMusic", collection: `vista_estudiante_${i}_inscripciones` }, actions: ["find"] },
        { resource: { db: "campusMusic", collection: `vista_estudiante_${i}_reservas` }, actions: ["find"] },
        // Crear reservas
        { resource: { db: "campusMusic", collection: "Reserva" }, actions: ["insert"] }
      ],
      roles: []
    });
    
    print(`Rol estudiante creado: estudiante_${i}`);
  }
  // 3.CREAR USUARIO DEL ESTUDIANTE
  for (let i = 1; i <= 15; i++) {
  db.createUser({
    user: `estudiante${i}`,
    pwd: `clave${i}`, 
    roles: [{ role: `estudiante_${i}`, db: "campusMusic" }]
  });
  print(`Rol estudiante creado: estudiante_${i}`);
}