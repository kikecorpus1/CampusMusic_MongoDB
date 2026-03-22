
// 1. DEPARTAMENTO
//---------------------------------------------
db.createCollection("Departamento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["departamento"],
      properties: {
        idDepartamento: { bsonType: "int" },
        departamento: { bsonType: "string" }
      }
    }
  }
});

// 2. CIUDAD
//---------------------------------------------
db.createCollection("Ciudad", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["ciudad", "idDepartamento"],
      properties: {
        idCiudad: { bsonType: "int" },
        ciudad: { bsonType: "string" },
        idDepartamento: { bsonType: "int" } 
      }
    }
  }
});

// 3. USUARIO
//---------------------------------------------
db.createCollection("Usuario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["usuario", "contrasena"],
      properties: {
        idUsuario: { bsonType: "int" },
        usuario: { bsonType: "string" },
        contrasena: { bsonType: "string" }
      }
    }
  }
});

// 4. ADMINISTRADOR
//---------------------------------------------
db.createCollection("Administrador", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "documento", "idUsuario"],
      properties: {
        idAdministrador: { bsonType: "int" },
        nombre: { bsonType: "string" },
        documento: { bsonType: "int" },
        idUsuario: { bsonType: "int" }
      }
    }
  }
});

// 5. NIVEL
//---------------------------------------------
db.createCollection("Nivel", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nivel"],
      properties: {
        idNivel: { bsonType: "int" },
        nivel: { bsonType: "string" }
      }
    }
  }
});

// 6. INSTRUMENTO
//---------------------------------------------
db.createCollection("Instrumento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["instrumento", "cantidad"],
      properties: {
        idInstrumento: { bsonType: "int" },
        instrumento: { bsonType: "string" },
        cantidad: { bsonType: "int", minimum: 0 }
      }
    }
  }
});

// 7. SEDE
//---------------------------------------------
db.createCollection("Sede", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["direccion", "capacidad", "idCiudad"],
      properties: {
        idSede: { bsonType: "int" },
        direccion: { bsonType: "string" },
        capacidad: { bsonType: "int" },
        idCiudad: { bsonType: "int" }
      }
    }
  }
});

 //USUARIO_SEDE
//---------------------------------------------
db.createCollection("UsuarioSede", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["idUsuario", "idSede"],
      properties: {
        idUsuarioSede: { bsonType: "int" },
        idUsuario: { bsonType: "int" },
        idSede: { bsonType: "int" }
      }
    }
  }
});

// 9. PROFESOR
//---------------------------------------------
db.createCollection("Profesor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombreProfesor", "documento", "contacto", "experiencia", "idUsuario", "idSede"],
      properties: {
        idProfesor: { bsonType: "int" },
        nombreProfesor: { bsonType: "string" },
        documento: { bsonType: ["int", "string"] }, 
        contacto: { bsonType: "string" },            
        experiencia: { bsonType: "string" },
        idUsuario: { bsonType: "int" },
        idSede: { bsonType: "int" }                   
      }
    }
  }
});

// 10. ESPECIALIDAD
//---------------------------------------------
db.createCollection("Especialidad", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["especialidad"],
      properties: {
        idEspecialidad: { bsonType: "int" },
        especialidad: { bsonType: "string" }
      }
    }
  }
});

// 11. PROFESOR_ESPECIALIDAD
//---------------------------------------------
db.createCollection("ProfesorEspecialidad", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["idProfesor", "idEspecialidad"],
      properties: {
        idProfesorEspecialidad: { bsonType: "int" },
        idProfesor: { bsonType: "int" },
        idEspecialidad: { bsonType: "int" }
      }
    }
  }
});

// 12. CURSO
//---------------------------------------------
db.createCollection("Curso", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre","precio", "cupo", "idInstrumento", "idNivel", "idSede"],
      properties: {
        nombre: { bsonType: "string" },
        idCurso: { bsonType: "int" },
        precio: { bsonType: "int" },
        cupo: { bsonType: "int" },
        idInstrumento: { bsonType: "int" },
        idNivel: { bsonType: "int" },
        idSede: { bsonType: "int" }
      }
    }
  }
});

// 13. CURSOPROFESOR
//---------------------------------------------
db.createCollection("CursoProfesor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["idProfesor", "idCurso"],
      properties: {
        idAsigna: { bsonType: "int" },
        idProfesor: { bsonType: "int" },
        idCurso: { bsonType: "int" }
      }
    }
  }
});

// 14. DURACION
//---------------------------------------------
db.createCollection("Duracion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fechaInicio", "fechaFin", "idCurso"],
      properties: {
        idDuracion: { bsonType: "int" },
        fechaInicio: { bsonType: "date" },
        fechaFin: { bsonType: "date" },
        idCurso: { bsonType: "int" }
      }
    }
  }
});

 //15. GRUPO
//---------------------------------------------
db.createCollection("Grupo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["grupo", "idDuracion", "idProfesor", "idHorario"],
      properties: {
        idGrupo: { bsonType: "int" },
        grupo: { bsonType: "string" },
        idDuracion: { bsonType: "int" },
        idProfesor: { bsonType: "int" },
        idHorario: { bsonType: "int" }
      }
    }
  }
});

// 16. HORARIO
//---------------------------------------------
db.createCollection("Horario", {
   validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["dia", "horaInicio", "horaFin"],
      properties: {
        idHorario: { bsonType: "int" },
        dia: {
          bsonType: "string",
          enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
        },
        horaInicio: { bsonType: "string", pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$" },
        horaFin:    { bsonType: "string", pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$" }
      }
    }
  }
});

// 17. ESTUDIANTE
//---------------------------------------------
db.createCollection("Estudiante", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombreEstudiante", "documento", "contacto", "idNivel", "idUsuario", "idSede"],
      properties: {
        idEstudiante: { bsonType: "int" },
        nombreEstudiante: { bsonType: "string" },
        documento: { bsonType: "int" },
        contacto: { bsonType: "string" },
        idNivel: { bsonType: "int" },
        idUsuario: { bsonType: "int" },
        idSede: { bsonType: "int"}
      }
    }
  }
});

// 18. ESTUDIANTEGRUPO
//---------------------------------------------
db.createCollection("EstudianteGrupo", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["idEstudiante", "idGrupo"],
      properties: {
        idEstudianteGrupo: { bsonType: "int" },
        idEstudiante: { bsonType: "int" },
        idGrupo: { bsonType: "int" }
      }
    }
  }
});

// 19. INSCRIPCION
//---------------------------------------------
db.createCollection("Inscripcion", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fecha", "idCurso", "idEstudiante"],
      properties: {
        idInscripcion: { bsonType: "int" },
        fecha: { bsonType: "date" },
        idCurso: { bsonType: "int" },
        idEstudiante: { bsonType: "int" }
      }
    }
  }
});

// 20. RESERVA
//---------------------------------------------
db.createCollection("Reserva", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fechaInicio", "fechaFin", "idEstudiante", "idInstrumento"],
      properties: {
        idReserva: { bsonType: "int" },
        fechaInicio: { bsonType: "date" },
        fechaFin: { bsonType: "date" },
        idEstudiante: { bsonType: "int" },
        idInstrumento: { bsonType: "int" }
      }
    }
  }
});


//21. Curso Disponible 
//---------------------------------------------

db.createCollection("cursosDisponibles", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["idCursoDisponible", "idSede", "idCurso", "disponible"],
      properties: {
        idCursoDisponible: { bsonType: "int" },
        idSede: { bsonType: "int" },
        idCurso: { bsonType: "int" },
        disponible: { bsonType: "bool" }
      }
    }
  }
})

//Validar o Consultar que el JSON SCHEMA.

printjson(
  db.getCollectionInfos({ name: "Colecion" })[0].options.validator.$jsonSchema
)

//inidices 

// 1. DEPARTAMENTO
db.Departamento.createIndex({ idDepartamento: 1 }, { unique: true });
db.Departamento.createIndex({ departamento: 1 }, { unique: true });

// 2. CIUDAD
db.Ciudad.createIndex({ idCiudad: 1 }, { unique: true });
db.Ciudad.createIndex({ ciudad: 1 }, { unique: true });
db.Ciudad.createIndex({ departamento: 1 });

// 3. USUARIO
db.Usuario.createIndex({ idUsuario: 1 }, { unique: true });
db.Usuario.createIndex({ usuario: 1 }, { unique: true });

// 4. ADMINISTRADOR
db.Administrador.createIndex({ idAdministrador: 1 }, { unique: true });
db.Administrador.createIndex({ documento: 1 }, { unique: true });
db.Administrador.createIndex({ idUsuario: 1 });

// 5. PROFESOR
db.Profesor.createIndex({ idProfesor: 1 }, { unique: true });
db.Profesor.createIndex({ documento: 1 }, { unique: true });
db.Profesor.createIndex({ idUsuario: 1 });

// 6. CURSOPROFESOR
db.CursoProfesor.createIndex({ idAsigna: 1 }, { unique: true });
db.CursoProfesor.createIndex({ idProfesor: 1 });
db.CursoProfesor.createIndex({ idCurso: 1 });
db.CursoProfesor.createIndex({ idProfesor: 1, idCurso: 1 }, { unique: true });

// 7. ESTUDIANTE
db.Estudiante.createIndex({ idEstudiante: 1 }, { unique: true });
db.Estudiante.createIndex({ documento: 1 }, { unique: true });
db.Estudiante.createIndex({ idNivel: 1 });
db.Estudiante.createIndex({ idUsuario: 1 });

// 8. NIVEL
db.Nivel.createIndex({ idNivel: 1 }, { unique: true });
db.Nivel.createIndex({ nivel: 1 }, { unique: true });

// 9. INSTRUMENTO
db.Instrumento.createIndex({ idInstrumento: 1 }, { unique: true });
db.Instrumento.createIndex({ instrumento: 1 }, { unique: true });

// 10. CURSO
db.Curso.createIndex({ idCurso: 1 }, { unique: true });
db.Curso.createIndex({ idInstrumento: 1 });
db.Curso.createIndex({ idNivel: 1 });
db.Curso.createIndex({ idSede: 1 });
db.Curso.createIndex({ idNivel: 1, idInstrumento: 1 });

// 11. SEDE
db.Sede.createIndex({ idSede: 1 }, { unique: true });
db.Sede.createIndex({ idCiudad: 1 });
db.Sede.createIndex({ direccion: 1 }, { unique: true });

// 12. DURACION
db.Duracion.createIndex({ idDuracion: 1 }, { unique: true });
db.Duracion.createIndex({ idCurso: 1 });

// 13. HORARIO
db.Horario.createIndex({ idHorario: 1 }, { unique: true });
db.Horario.createIndex({ idGrupo: 1 });
db.Horario.createIndex({ idGrupo: 1, dia: 1, horaInicio: 1 }, { unique: true });

// 14. GRUPO
db.Grupo.createIndex({ idGrupo: 1 }, { unique: true });
db.Grupo.createIndex({ idDuracion: 1 });
db.Grupo.createIndex({ idProfesor: 1 });
db.Grupo.createIndex({ grupo: 1, idProfesor: 1 });

// 15. ESTUDIANTEGRUPO
db.EstudianteGrupo.createIndex({ idEstudianteGrupo: 1 }, { unique: true });
db.EstudianteGrupo.createIndex({ idEstudiante: 1 });
db.EstudianteGrupo.createIndex({ idGrupo: 1 });
db.EstudianteGrupo.createIndex({ idEstudiante: 1, idGrupo: 1 }, { unique: true });

// 16. INSCRIPCION
db.Inscripcion.createIndex({ idInscripcion: 1 }, { unique: true });
db.Inscripcion.createIndex({ idCurso: 1 });
db.Inscripcion.createIndex({ idEstudiante: 1 });
db.Inscripcion.createIndex({ idCurso: 1, idEstudiante: 1 }, { unique: true });

// 17. RESERVA
db.Reserva.createIndex({ idReserva: 1 }, { unique: true });
db.Reserva.createIndex({ idEstudiante: 1 });
db.Reserva.createIndex({ idInstrumento: 1 });
db.Reserva.createIndex({ idEstudiante: 1, idInstrumento: 1, fechaInicio: 1 }, { unique: true });

// 18. USUARIO_SEDE
db.UsuarioSede.createIndex({ idUsuarioSede: 1 }, { unique: true });
db.UsuarioSede.createIndex({ idUsuario: 1 });
db.UsuarioSede.createIndex({ idSede: 1 });
db.UsuarioSede.createIndex({ idUsuario: 1, idSede: 1 }, { unique: true });

// 19. ESPECIALIDAD
db.Especialidad.createIndex({ idEspecialidad: 1 }, { unique: true });
db.Especialidad.createIndex({ especialidad: 1 }, { unique: true });

// 20. PROFESOR_ESPECIALIDAD
db.ProfesorEspecialidad.createIndex({ idProfesorEspecialidad: 1 }, { unique: true });
db.ProfesorEspecialidad.createIndex({ idProfesor: 1 });
db.ProfesorEspecialidad.createIndex({ idEspecialidad: 1 });
db.ProfesorEspecialidad.createIndex({ idProfesor: 1, idEspecialidad: 1 }, { unique: true });

//21. CursoDisponible

db.cursosDisponibles.createIndex({ idSede: 1, idCurso: 1 }, { unique: true });

db.cursosDisponibles.createIndex({ disponible: 1 });

db.cursosDisponibles.createIndex({ idCursoDisponible: 1 }, { unique: true });