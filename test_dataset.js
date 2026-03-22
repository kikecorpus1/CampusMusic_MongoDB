
//Seleccion de la base de datos
// use campusMusic

//Poblar Colecciones 

//1. Departamento 
db.Departamento.insertMany([
  { "idDepartamento": 1, "departamento": "Cundinamarca" },
  { "idDepartamento": 2, "departamento": "Antioquia" },
  { "idDepartamento": 3, "departamento": "Valle del Cauca" }
])

//2. Ciudad

db.Ciudad.insertMany([
  { "idCiudad": 1, "ciudad": "Bogotá", "idDepartamento": 1 },
  { "idCiudad": 2, "ciudad": "Medellín", "idDepartamento": 2 },
  { "idCiudad": 3, "ciudad": "Cali", "idDepartamento": 3 }
]);

//3. Sede

db.Sede.insertMany([
  { "idSede": 1, "direccion": "Cll 100 #10-20, Bogotá", "capacidad": 150, "idCiudad": 1 },
  { "idSede": 2, "direccion": "Cra 45 #12-34, Medellín", "capacidad": 100, "idCiudad": 2 },
  { "idSede": 3, "direccion": "Av 3 #5-67, Cali", "capacidad": 80, "idCiudad": 3 }
]);

//4. Usuario

db.Usuario.insertMany([
  // administradores
  { "idUsuario": 1,  "usuario": "admin01", "contrasena": "hash_admin01" },
  { "idUsuario": 2,  "usuario": "admin02", "contrasena": "hash_admin02" },

  // profesores (idUsuario 10..19)
  { "idUsuario": 10, "usuario": "prof_ana",    "contrasena": "hash_prof_ana" },
  { "idUsuario": 11, "usuario": "prof_luis",   "contrasena": "hash_prof_luis" },
  { "idUsuario": 12, "usuario": "prof_maria",  "contrasena": "hash_prof_maria" },
  { "idUsuario": 13, "usuario": "prof_carlos", "contrasena": "hash_prof_carlos" },
  { "idUsuario": 14, "usuario": "prof_andres", "contrasena": "hash_prof_andres" },
  { "idUsuario": 15, "usuario": "prof_laura",  "contrasena": "hash_prof_laura" },
  { "idUsuario": 16, "usuario": "prof_jorge",  "contrasena": "hash_prof_jorge" },
  { "idUsuario": 17, "usuario": "prof_sofia",  "contrasena": "hash_prof_sofia" },
  { "idUsuario": 18, "usuario": "prof_pablo",  "contrasena": "hash_prof_pablo" },
  { "idUsuario": 19, "usuario": "prof_marcos", "contrasena": "hash_prof_marcos" },

  // estudiantes (idUsuario 20..34)
  { "idUsuario": 20, "usuario": "est_juan",      "contrasena": "hash_est_juan" },
  { "idUsuario": 21, "usuario": "est_ana",       "contrasena": "hash_est_ana" },
  { "idUsuario": 22, "usuario": "est_luisa",     "contrasena": "hash_est_luisa" },
  { "idUsuario": 23, "usuario": "est_carlos",    "contrasena": "hash_est_carlos" },
  { "idUsuario": 24, "usuario": "est_maria",     "contrasena": "hash_est_maria" },
  { "idUsuario": 25, "usuario": "est_diego",     "contrasena": "hash_est_diego" },
  { "idUsuario": 26, "usuario": "est_valentina", "contrasena": "hash_est_valentina" },
  { "idUsuario": 27, "usuario": "est_andrea",    "contrasena": "hash_est_andrea" },
  { "idUsuario": 28, "usuario": "est_santiago",  "contrasena": "hash_est_santiago" },
  { "idUsuario": 29, "usuario": "est_camila",    "contrasena": "hash_est_camila" },
  { "idUsuario": 30, "usuario": "est_miguel",    "contrasena": "hash_est_miguel" },
  { "idUsuario": 31, "usuario": "est_elena",     "contrasena": "hash_est_elena" },
  { "idUsuario": 32, "usuario": "est_alejandro", "contrasena": "hash_est_alejandro" },
  { "idUsuario": 33, "usuario": "est_isabel",    "contrasena": "hash_est_isabel" },
  { "idUsuario": 34, "usuario": "est_nicolas",   "contrasena": "hash_est_nicolas" }
]);

//5. Administrador 

db.Administrador.insertMany([
  { "idAdministrador": 1, "nombre": "Pedro Romero", "documento": 10101010, "idUsuario": 1 },
  { "idAdministrador": 2, "nombre": "Laura Méndez", "documento": 20202020, "idUsuario": 2 }
]);

//6. Nivel 

db.Nivel.insertMany([
  { "idNivel": 1, "nivel": "Básico" },
  { "idNivel": 2, "nivel": "Intermedio" },
  { "idNivel": 3, "nivel": "Avanzado" }
]);

//7. Instrumento 

db.Instrumento.insertMany([
  // Bogotá (idSede:1) - 7 instrumentos
  { "idInstrumento": 1,  "instrumento": "Piano vertical",    "cantidad": 5, "idSede": 1 },
  { "idInstrumento": 2,  "instrumento": "Teclado",           "cantidad": 4, "idSede": 1 },
  { "idInstrumento": 3,  "instrumento": "Flauta",            "cantidad": 6, "idSede": 1 },
  { "idInstrumento": 4,  "instrumento": "Guitarra acústica", "cantidad": 8, "idSede": 1 },
  { "idInstrumento": 5,  "instrumento": "Violín",            "cantidad": 6, "idSede": 1 },
  { "idInstrumento": 6,  "instrumento": "Cajón",             "cantidad": 4, "idSede": 1 },
  { "idInstrumento": 7,  "instrumento": "Ukulele",           "cantidad": 5, "idSede": 1 },

  // Medellín (idSede:2) - 7 instrumentos
  { "idInstrumento": 8,  "instrumento": "Guitarra eléctrica","cantidad": 6, "idSede": 2 },
  { "idInstrumento": 9,  "instrumento": "Bajo eléctrico",    "cantidad": 5, "idSede": 2 },
  { "idInstrumento": 10, "instrumento": "Batería",           "cantidad": 4, "idSede": 2 },
  { "idInstrumento": 11, "instrumento": "Saxofón",           "cantidad": 3, "idSede": 2 },
  { "idInstrumento": 12, "instrumento": "Trompeta",          "cantidad": 3, "idSede": 2 },
  { "idInstrumento": 13, "instrumento": "Trombón",           "cantidad": 2, "idSede": 2 },
  { "idInstrumento": 14, "instrumento": "Percusión menor",   "cantidad": 6, "idSede": 2 },

  // Cali (idSede:3) - 6 instrumentos
  { "idInstrumento": 15, "instrumento": "Oboe",             "cantidad": 1, "idSede": 3 },
  { "idInstrumento": 16, "instrumento": "Clarinete",        "cantidad": 3, "idSede": 3 },
  { "idInstrumento": 17, "instrumento": "Cello",            "cantidad": 2, "idSede": 3 },
  { "idInstrumento": 18, "instrumento": "Harp",             "cantidad": 1, "idSede": 3 },
  { "idInstrumento": 19, "instrumento": "Percusión grande", "cantidad": 3, "idSede": 3 },
  { "idInstrumento": 20, "instrumento": "Flauta travesera", "cantidad": 3, "idSede": 3 }
]);

//8. Especialidd 

db.Especialidad.insertMany([
  { "idEspecialidad": 1, "especialidad": "Piano" },
  { "idEspecialidad": 2, "especialidad": "Guitarra" },
  { "idEspecialidad": 3, "especialidad": "Violín" },
  { "idEspecialidad": 4, "especialidad": "Batería" },
  { "idEspecialidad": 5, "especialidad": "Canto" },
  { "idEspecialidad": 6, "especialidad": "Saxofón" },
  { "idEspecialidad": 7, "especialidad": "Trompeta" },
  { "idEspecialidad": 8, "especialidad": "Percusión" },
  { "idEspecialidad": 9, "especialidad": "Teclado" },
  { "idEspecialidad": 10,"especialidad": "Instrumentos de cuerda" }
]);

//9. Profesor 

db.Profesor.insertMany([
  // Bogotá (idSede 1)
  { "idProfesor": 1, "nombreProfesor": "Ana Torres",    "documento": "80010011", "contacto": "ana.t@bog.edu",    "experiencia": "12 años", "idUsuario": 10, "idSede": 1 },
  { "idProfesor": 2, "nombreProfesor": "Luis Mejía",    "documento": "80010012", "contacto": "luis.m@bog.edu",   "experiencia": "8 años",  "idUsuario": 11, "idSede": 1 },
  { "idProfesor": 3, "nombreProfesor": "María Gómez",   "documento": "80010013", "contacto": "maria.g@bog.edu",  "experiencia": "10 años", "idUsuario": 12, "idSede": 1 },
  { "idProfesor": 4, "nombreProfesor": "Pablo Díaz",    "documento": "80010014", "contacto": "pablo.d@bog.edu",  "experiencia": "9 años",  "idUsuario": 13, "idSede": 1 },

  // Medellín (idSede 2)
  { "idProfesor": 5, "nombreProfesor": "Carlos Ruiz",  "documento": "80020011", "contacto": "carlos.r@med.edu", "experiencia": "11 años", "idUsuario": 14, "idSede": 2 },
  { "idProfesor": 6, "nombreProfesor": "Andrés Peña",  "documento": "80020012", "contacto": "andres.p@med.edu", "experiencia": "7 años",  "idUsuario": 15, "idSede": 2 },
  { "idProfesor": 7, "nombreProfesor": "Jorge López",  "documento": "80020013", "contacto": "jorge.l@med.edu",  "experiencia": "6 años",  "idUsuario": 16, "idSede": 2 },

  // Cali (idSede 3)
  { "idProfesor": 8,  "nombreProfesor": "Sofía Ramírez", "documento": "80030011", "contacto": "sofia.r@cali.edu",  "experiencia": "5 años",  "idUsuario": 17, "idSede": 3 },
  { "idProfesor": 9,  "nombreProfesor": "Marcos Herrera","documento": "80030012", "contacto": "marcos.h@cali.edu", "experiencia": "13 años", "idUsuario": 18, "idSede": 3 },
  { "idProfesor": 10, "nombreProfesor": "Laura Méndez",  "documento": "80030013", "contacto": "laura.m@cali.edu",  "experiencia": "9 años",  "idUsuario": 19, "idSede": 3 }
]);

// 10. ProfesorEspecialidad 

db.ProfesorEspecialidad.insertMany([
  { "idProfesorEspecialidad": 1,  "idProfesor": 1,  "idEspecialidad": 2 }, // Ana -> Guitarra
  { "idProfesorEspecialidad": 2,  "idProfesor": 2,  "idEspecialidad": 9 }, // Luis -> Teclado
  { "idProfesorEspecialidad": 3,  "idProfesor": 3,  "idEspecialidad": 1 }, // María -> Piano
  { "idProfesorEspecialidad": 4,  "idProfesor": 4,  "idEspecialidad": 10}, // Pablo -> Cuerdas
  { "idProfesorEspecialidad": 5,  "idProfesor": 5,  "idEspecialidad": 2 }, // Carlos -> Guitarra
  { "idProfesorEspecialidad": 6,  "idProfesor": 6,  "idEspecialidad": 8 }, // Andrés -> Percusión
  { "idProfesorEspecialidad": 7,  "idProfesor": 7,  "idEspecialidad": 4 }, // Jorge -> Batería
  { "idProfesorEspecialidad": 8,  "idProfesor": 8,  "idEspecialidad": 7 }, // Sofía -> Trompeta
  { "idProfesorEspecialidad": 9,  "idProfesor": 9,  "idEspecialidad": 5 }, // Marcos -> Canto
  { "idProfesorEspecialidad": 10, "idProfesor": 10, "idEspecialidad": 3 }  // Laura -> Violín
]);

// 11. Curso 

db.Curso.insertMany([
  // Bogotá (idSede:1) - cursos 1..5
  { "idCurso": 1,  "nombre": "Piano Básico",        "precio": 300000, "cupo": 15, "idInstrumento": 1,  "idNivel": 1, "idSede": 1 },
  { "idCurso": 2,  "nombre": "Piano Intermedio",    "precio": 350000, "cupo": 12, "idInstrumento": 2,  "idNivel": 2, "idSede": 1 },
  { "idCurso": 3,  "nombre": "Teclado Básico",      "precio": 320000, "cupo": 10, "idInstrumento": 2,  "idNivel": 1, "idSede": 1 },
  { "idCurso": 4,  "nombre": "Flauta para niños",   "precio": 280000, "cupo": 14, "idInstrumento": 3,  "idNivel": 1, "idSede": 1 },
  { "idCurso": 5,  "nombre": "Guitarra Avanzada",   "precio": 400000, "cupo": 8,  "idInstrumento": 4,  "idNivel": 3, "idSede": 1 },

  // Medellín (idSede:2) - cursos 6..10
  { "idCurso": 6,  "nombre": "Guitarra Básico",     "precio": 270000, "cupo": 16, "idInstrumento": 8,  "idNivel": 1, "idSede": 2 },
  { "idCurso": 7,  "nombre": "Bajo Intermedio",     "precio": 330000, "cupo": 12, "idInstrumento": 9,  "idNivel": 2, "idSede": 2 },
  { "idCurso": 8,  "nombre": "Batería Inicial",     "precio": 360000, "cupo": 10, "idInstrumento": 10, "idNivel": 1, "idSede": 2 },
  { "idCurso": 9,  "nombre": "Violín Básico",       "precio": 300000, "cupo": 12, "idInstrumento": 5,  "idNivel": 1, "idSede": 2 },
  { "idCurso": 10, "nombre": "Saxofón Avanzado",    "precio": 420000, "cupo": 6,  "idInstrumento": 11, "idNivel": 3, "idSede": 2 },

  // Cali (idSede:3) - cursos 11..15
  { "idCurso": 11, "nombre": "Ukulele Básico",      "precio": 290000, "cupo": 15, "idInstrumento": 7,  "idNivel": 1, "idSede": 3 },
  { "idCurso": 12, "nombre": "Cajón y Ritmo",       "precio": 310000, "cupo": 14, "idInstrumento": 6,  "idNivel": 1, "idSede": 3 },
  { "idCurso": 13, "nombre": "Trompeta Intermedio", "precio": 340000, "cupo": 10, "idInstrumento": 12, "idNivel": 2, "idSede": 3 },
  { "idCurso": 14, "nombre": "Oboe Avanzado",       "precio": 380000, "cupo": 8,  "idInstrumento": 15, "idNivel": 3, "idSede": 3 },
  { "idCurso": 15, "nombre": "Percusión Básica",    "precio": 260000, "cupo": 18, "idInstrumento": 19, "idNivel": 1, "idSede": 3 }
]);
//12. CursoProfesor 

db.CursoProfesor.insertMany([
  // Sede 1 (Bogotá)
  { idAsigna: 1, idProfesor: 1, idCurso: 1 },
  { idAsigna: 2, idProfesor: 1, idCurso: 2 },
  { idAsigna: 3, idProfesor: 2, idCurso: 3 },
  { idAsigna: 4, idProfesor: 3, idCurso: 4 },
  { idAsigna: 5, idProfesor: 3, idCurso: 5 },

  // Sede 2 (Medellín)
  { idAsigna: 6, idProfesor: 4, idCurso: 6 },
  { idAsigna: 7, idProfesor: 4, idCurso: 7 },
  { idAsigna: 8, idProfesor: 5, idCurso: 8 },
  { idAsigna: 9, idProfesor: 6, idCurso: 9 },
  { idAsigna: 10, idProfesor: 6, idCurso: 10 },

  // Sede 3 (Cali)
  { idAsigna: 11, idProfesor: 7, idCurso: 11 },
  { idAsigna: 12, idProfesor: 8, idCurso: 12 },
  { idAsigna: 13, idProfesor: 8, idCurso: 13 },
  { idAsigna: 14, idProfesor: 9, idCurso: 14 },
  { idAsigna: 15, idProfesor: 10, idCurso: 15 }
]);

//13. Duracion 

db.Duracion.insertMany([
  { "idDuracion": 1,  "fechaInicio": ISODate("2025-02-01T00:00:00Z"), "fechaFin": ISODate("2025-04-30T00:00:00Z"), "idCurso": 1 },
  { "idDuracion": 2,  "fechaInicio": ISODate("2025-02-10T00:00:00Z"), "fechaFin": ISODate("2025-05-10T00:00:00Z"), "idCurso": 2 },
  { "idDuracion": 3,  "fechaInicio": ISODate("2025-03-01T00:00:00Z"), "fechaFin": ISODate("2025-05-31T00:00:00Z"), "idCurso": 3 },
  { "idDuracion": 4,  "fechaInicio": ISODate("2025-01-15T00:00:00Z"), "fechaFin": ISODate("2025-04-15T00:00:00Z"), "idCurso": 4 },
  { "idDuracion": 5,  "fechaInicio": ISODate("2025-02-20T00:00:00Z"), "fechaFin": ISODate("2025-06-01T00:00:00Z"), "idCurso": 5 },

  { "idDuracion": 6,  "fechaInicio": ISODate("2025-02-01T00:00:00Z"), "fechaFin": ISODate("2025-04-30T00:00:00Z"), "idCurso": 6 },
  { "idDuracion": 7,  "fechaInicio": ISODate("2025-03-01T00:00:00Z"), "fechaFin": ISODate("2025-06-01T00:00:00Z"), "idCurso": 7 },
  { "idDuracion": 8,  "fechaInicio": ISODate("2025-03-05T00:00:00Z"), "fechaFin": ISODate("2025-06-05T00:00:00Z"), "idCurso": 8 },
  { "idDuracion": 9,  "fechaInicio": ISODate("2025-01-20T00:00:00Z"), "fechaFin": ISODate("2025-05-20T00:00:00Z"), "idCurso": 9 },
  { "idDuracion": 10, "fechaInicio": ISODate("2025-02-15T00:00:00Z"), "fechaFin": ISODate("2025-05-15T00:00:00Z"), "idCurso": 10 },

  { "idDuracion": 11, "fechaInicio": ISODate("2025-02-01T00:00:00Z"), "fechaFin": ISODate("2025-04-30T00:00:00Z"), "idCurso": 11 },
  { "idDuracion": 12, "fechaInicio": ISODate("2025-03-01T00:00:00Z"), "fechaFin": ISODate("2025-05-31T00:00:00Z"), "idCurso": 12 },
  { "idDuracion": 13, "fechaInicio": ISODate("2025-02-10T00:00:00Z"), "fechaFin": ISODate("2025-05-10T00:00:00Z"), "idCurso": 13 },
  { "idDuracion": 14, "fechaInicio": ISODate("2025-03-15T00:00:00Z"), "fechaFin": ISODate("2025-06-15T00:00:00Z"), "idCurso": 14 },
  { "idDuracion": 15, "fechaInicio": ISODate("2025-01-10T00:00:00Z"), "fechaFin": ISODate("2025-04-10T00:00:00Z"), "idCurso": 15 }
]);

//14. Horario

db.Horario.insertMany([
  { "idHorario": 1,  "dia": "Lunes",     "horaInicio": "08:00", "horaFin": "10:00" },
  { "idHorario": 2,  "dia": "Martes",    "horaInicio": "17:00", "horaFin": "19:00" },
  { "idHorario": 3,  "dia": "Miércoles", "horaInicio": "18:00", "horaFin": "20:00" },
  { "idHorario": 4,  "dia": "Jueves",    "horaInicio": "16:00", "horaFin": "18:00" },
  { "idHorario": 5,  "dia": "Viernes",   "horaInicio": "09:00", "horaFin": "11:00" },

  { "idHorario": 6,  "dia": "Lunes",     "horaInicio": "14:00", "horaFin": "16:00" },
  { "idHorario": 7,  "dia": "Martes",    "horaInicio": "08:00", "horaFin": "10:00" },
  { "idHorario": 8,  "dia": "Miércoles", "horaInicio": "10:00", "horaFin": "12:00" },
  { "idHorario": 9,  "dia": "Jueves",    "horaInicio": "18:00", "horaFin": "20:00" },
  { "idHorario": 10, "dia": "Viernes",   "horaInicio": "17:00", "horaFin": "19:00" },

  { "idHorario": 11, "dia": "Lunes",     "horaInicio": "19:00", "horaFin": "21:00" },
  { "idHorario": 12, "dia": "Martes",    "horaInicio": "15:00", "horaFin": "17:00" },
  { "idHorario": 13, "dia": "Miércoles", "horaInicio": "08:00", "horaFin": "10:00" },
  { "idHorario": 14, "dia": "Jueves",    "horaInicio": "09:00", "horaFin": "11:00" },
  { "idHorario": 15, "dia": "Sábado",    "horaInicio": "10:00", "horaFin": "12:00" }
]);

//15. Grupo
db.Grupo.insertMany([
  { "idGrupo": 1,  "grupo": "Piano B-1",    "idDuracion": 1,  "idProfesor": 1,  "idHorario": 1 },
  { "idGrupo": 2,  "grupo": "Piano I-1",    "idDuracion": 2,  "idProfesor": 3,  "idHorario": 2 },
  { "idGrupo": 3,  "grupo": "Teclado B-1",  "idDuracion": 3,  "idProfesor": 2,  "idHorario": 3 },
  { "idGrupo": 4,  "grupo": "Flauta Infantil","idDuracion": 4, "idProfesor": 1,  "idHorario": 4 },
  { "idGrupo": 5,  "grupo": "Guitarra A-1", "idDuracion": 5,  "idProfesor": 4,  "idHorario": 5 },

  { "idGrupo": 6,  "grupo": "Guitarra B-1", "idDuracion": 6,  "idProfesor": 5,  "idHorario": 6 },
  { "idGrupo": 7,  "grupo": "Bajo I-1",     "idDuracion": 7,  "idProfesor": 6,  "idHorario": 7 },
  { "idGrupo": 8,  "grupo": "Batería I-1",  "idDuracion": 8,  "idProfesor": 7,  "idHorario": 8 },
  { "idGrupo": 9,  "grupo": "Violín B-1",   "idDuracion": 9,  "idProfesor": 5,  "idHorario": 9 },
  { "idGrupo": 10, "grupo": "Sax A-1",      "idDuracion": 10, "idProfesor": 6,  "idHorario": 10 },

  { "idGrupo": 11, "grupo": "Ukulele B-1",  "idDuracion": 11, "idProfesor": 3,  "idHorario": 11 },
  { "idGrupo": 12, "grupo": "Cajón B-1",    "idDuracion": 12, "idProfesor": 4,  "idHorario": 12 },
  { "idGrupo": 13, "grupo": "Trompeta I-1", "idDuracion": 13, "idProfesor": 6,  "idHorario": 13 },
  { "idGrupo": 14, "grupo": "Oboe A-1",     "idDuracion": 14, "idProfesor": 9,  "idHorario": 14 },
  { "idGrupo": 15, "grupo": "Percusión B-1","idDuracion": 15, "idProfesor": 7,  "idHorario": 15 }
]);

//16. Estudiante

db.Estudiante.insertMany([
  // Bogotá (sede 1)
  { "idEstudiante": 1,  "nombreEstudiante": "Juan Pérez",     "documento": 11111111, "contacto": "juan@bog.com",      "idNivel": 1, "idUsuario": 20, "idSede": 1 },
  { "idEstudiante": 2,  "nombreEstudiante": "Ana López",      "documento": 22222222, "contacto": "ana@bog.com",       "idNivel": 2, "idUsuario": 21, "idSede": 1 },
  { "idEstudiante": 3,  "nombreEstudiante": "Luisa Díaz",     "documento": 33333333, "contacto": "luisa@bog.com",     "idNivel": 1, "idUsuario": 22, "idSede": 1 },
  { "idEstudiante": 4,  "nombreEstudiante": "Carlos Muñoz",   "documento": 44444444, "contacto": "carlos@bog.com",    "idNivel": 2, "idUsuario": 23, "idSede": 1 },
  { "idEstudiante": 5,  "nombreEstudiante": "María Torres",   "documento": 55555555, "contacto": "maria@bog.com",     "idNivel": 3, "idUsuario": 24, "idSede": 1 },

  // Medellín (sede 2)
  { "idEstudiante": 6,  "nombreEstudiante": "Diego Ramírez",  "documento": 66666666, "contacto": "diego@med.com",     "idNivel": 1, "idUsuario": 25, "idSede": 2 },
  { "idEstudiante": 7,  "nombreEstudiante": "Valentina Cruz", "documento": 77777777, "contacto": "valentina@med.com", "idNivel": 2, "idUsuario": 26, "idSede": 2 },
  { "idEstudiante": 8,  "nombreEstudiante": "Andrea Rios",    "documento": 88888888, "contacto": "andrea@med.com",    "idNivel": 3, "idUsuario": 27, "idSede": 2 },
  { "idEstudiante": 9,  "nombreEstudiante": "Santiago Gil",   "documento": 99999999, "contacto": "santiago@med.com",  "idNivel": 1, "idUsuario": 28, "idSede": 2 },
  { "idEstudiante": 10, "nombreEstudiante": "Camila Perez",   "documento": 10101010, "contacto": "camila@med.com",    "idNivel": 2, "idUsuario": 29, "idSede": 2 },

  // Cali (sede 3)
  { "idEstudiante": 11, "nombreEstudiante": "Miguel Suarez",  "documento": 12121212, "contacto": "miguel@cali.com",   "idNivel": 3, "idUsuario": 30, "idSede": 3 },
  { "idEstudiante": 12, "nombreEstudiante": "Elena Castro",   "documento": 13131313, "contacto": "elena@cali.com",    "idNivel": 1, "idUsuario": 31, "idSede": 3 },
  { "idEstudiante": 13, "nombreEstudiante": "Alejandro Vera", "documento": 14141414, "contacto": "alejandro@cali.com","idNivel": 2, "idUsuario": 32, "idSede": 3 },
  { "idEstudiante": 14, "nombreEstudiante": "Isabel Moreno",  "documento": 15151515, "contacto": "isabel@cali.com",   "idNivel": 1, "idUsuario": 33, "idSede": 3 },
  { "idEstudiante": 15, "nombreEstudiante": "Nicolás Peña",   "documento": 16161616, "contacto": "nicolas@cali.com",  "idNivel": 2, "idUsuario": 34, "idSede": 3 }
]);


//17. EstudianteGrupo

db.EstudianteGrupo.insertMany([
  // Bogotá students -> groups 1..5
  { "idEstudianteGrupo": 1,  "idEstudiante": 1,  "idGrupo": 1 },
  { "idEstudianteGrupo": 2,  "idEstudiante": 2,  "idGrupo": 2 },
  { "idEstudianteGrupo": 3,  "idEstudiante": 3,  "idGrupo": 3 },
  { "idEstudianteGrupo": 4,  "idEstudiante": 4,  "idGrupo": 4 },
  { "idEstudianteGrupo": 5,  "idEstudiante": 5,  "idGrupo": 5 },

  // Medellín students -> groups 6..10
  { "idEstudianteGrupo": 6,  "idEstudiante": 6,  "idGrupo": 6 },
  { "idEstudianteGrupo": 7,  "idEstudiante": 7,  "idGrupo": 7 },
  { "idEstudianteGrupo": 8,  "idEstudiante": 8,  "idGrupo": 8 },
  { "idEstudianteGrupo": 9,  "idEstudiante": 9,  "idGrupo": 9 },
  { "idEstudianteGrupo": 10, "idEstudiante": 10, "idGrupo": 10 },

  // Cali students -> groups 11..15
  { "idEstudianteGrupo": 11, "idEstudiante": 11, "idGrupo": 11 },
  { "idEstudianteGrupo": 12, "idEstudiante": 12, "idGrupo": 12 },
  { "idEstudianteGrupo": 13, "idEstudiante": 13, "idGrupo": 13 },
  { "idEstudianteGrupo": 14, "idEstudiante": 14, "idGrupo": 14 },
  { "idEstudianteGrupo": 15, "idEstudiante": 15, "idGrupo": 15 }
]);

//18. Inscripcion

db.Inscripcion.insertMany([
  // Bogotá students (1..5) enrollments (2 each)
  { "idInscripcion": 1,  "fecha": ISODate("2025-01-10T00:00:00Z"), "idCurso": 1,  "idEstudiante": 1 },
  { "idInscripcion": 2,  "fecha": ISODate("2025-01-12T00:00:00Z"), "idCurso": 3,  "idEstudiante": 1 },

  { "idInscripcion": 3,  "fecha": ISODate("2025-01-11T00:00:00Z"), "idCurso": 2,  "idEstudiante": 2 },
  { "idInscripcion": 4,  "fecha": ISODate("2025-01-13T00:00:00Z"), "idCurso": 4,  "idEstudiante": 2 },

  { "idInscripcion": 5,  "fecha": ISODate("2025-01-14T00:00:00Z"), "idCurso": 1,  "idEstudiante": 3 },
  { "idInscripcion": 6,  "fecha": ISODate("2025-01-16T00:00:00Z"), "idCurso": 5,  "idEstudiante": 3 },

  { "idInscripcion": 7,  "fecha": ISODate("2025-01-17T00:00:00Z"), "idCurso": 4,  "idEstudiante": 4 },
  { "idInscripcion": 8,  "fecha": ISODate("2025-01-19T00:00:00Z"), "idCurso": 2,  "idEstudiante": 4 },

  { "idInscripcion": 9,  "fecha": ISODate("2025-01-20T00:00:00Z"), "idCurso": 5,  "idEstudiante": 5 },
  { "idInscripcion": 10, "fecha": ISODate("2025-01-22T00:00:00Z"), "idCurso": 3,  "idEstudiante": 5 },

  // Medellín students (6..10) enrollments (2 each)
  { "idInscripcion": 11, "fecha": ISODate("2025-01-25T00:00:00Z"), "idCurso": 6,  "idEstudiante": 6 },
  { "idInscripcion": 12, "fecha": ISODate("2025-01-27T00:00:00Z"), "idCurso": 7,  "idEstudiante": 6 },

  { "idInscripcion": 13, "fecha": ISODate("2025-01-26T00:00:00Z"), "idCurso": 6,  "idEstudiante": 7 },
  { "idInscripcion": 14, "fecha": ISODate("2025-01-28T00:00:00Z"), "idCurso": 9,  "idEstudiante": 7 },

  { "idInscripcion": 15, "fecha": ISODate("2025-01-29T00:00:00Z"), "idCurso": 8,  "idEstudiante": 8 },
  { "idInscripcion": 16, "fecha": ISODate("2025-01-30T00:00:00Z"), "idCurso": 10, "idEstudiante": 8 },

  { "idInscripcion": 17, "fecha": ISODate("2025-02-01T00:00:00Z"), "idCurso": 9,  "idEstudiante": 9 },
  { "idInscripcion": 18, "fecha": ISODate("2025-02-03T00:00:00Z"), "idCurso": 7,  "idEstudiante": 9 },

  { "idInscripcion": 19, "fecha": ISODate("2025-02-04T00:00:00Z"), "idCurso": 10, "idEstudiante": 10 },
  { "idInscripcion": 20, "fecha": ISODate("2025-02-06T00:00:00Z"), "idCurso": 6,  "idEstudiante": 10 },

  // Cali students (11..15) enrollments (2 each)
  { "idInscripcion": 21, "fecha": ISODate("2025-02-10T00:00:00Z"), "idCurso": 11, "idEstudiante": 11 },
  { "idInscripcion": 22, "fecha": ISODate("2025-02-12T00:00:00Z"), "idCurso": 12, "idEstudiante": 11 },

  { "idInscripcion": 23, "fecha": ISODate("2025-02-11T00:00:00Z"), "idCurso": 13, "idEstudiante": 12 },
  { "idInscripcion": 24, "fecha": ISODate("2025-02-13T00:00:00Z"), "idCurso": 11, "idEstudiante": 12 },

  { "idInscripcion": 25, "fecha": ISODate("2025-02-14T00:00:00Z"), "idCurso": 14, "idEstudiante": 13 },
  { "idInscripcion": 26, "fecha": ISODate("2025-02-16T00:00:00Z"), "idCurso": 15, "idEstudiante": 13 },

  { "idInscripcion": 27, "fecha": ISODate("2025-02-17T00:00:00Z"), "idCurso": 12, "idEstudiante": 14 },
  { "idInscripcion": 28, "fecha": ISODate("2025-02-18T00:00:00Z"), "idCurso": 15, "idEstudiante": 14 },

  { "idInscripcion": 29, "fecha": ISODate("2025-02-19T00:00:00Z"), "idCurso": 11, "idEstudiante": 15 },
  { "idInscripcion": 30, "fecha": ISODate("2025-02-20T00:00:00Z"), "idCurso": 13, "idEstudiante": 15 }
]);

//19. Reserva

db.Reserva.insertMany([
  // Bogotá students reserving instruments located in Bogotá (idSede:1)
  { "idReserva": 1,  "fechaInicio": ISODate("2025-02-10T09:00:00Z"), "fechaFin": ISODate("2025-02-10T11:00:00Z"), "idEstudiante": 1,  "idInstrumento": 1 },
  { "idReserva": 2,  "fechaInicio": ISODate("2025-02-11T10:00:00Z"), "fechaFin": ISODate("2025-02-11T12:00:00Z"), "idEstudiante": 2,  "idInstrumento": 4 },
  { "idReserva": 3,  "fechaInicio": ISODate("2025-02-12T14:00:00Z"), "fechaFin": ISODate("2025-02-12T16:00:00Z"), "idEstudiante": 3,  "idInstrumento": 3 },

  // Medellín students reserving instruments in Medellín (idSede:2)
  { "idReserva": 4,  "fechaInicio": ISODate("2025-02-13T15:00:00Z"), "fechaFin": ISODate("2025-02-13T17:00:00Z"), "idEstudiante": 6,  "idInstrumento": 8 },
  { "idReserva": 5,  "fechaInicio": ISODate("2025-02-14T08:00:00Z"), "fechaFin": ISODate("2025-02-14T10:00:00Z"), "idEstudiante": 7,  "idInstrumento": 9 },
  { "idReserva": 6,  "fechaInicio": ISODate("2025-02-15T09:00:00Z"), "fechaFin": ISODate("2025-02-15T11:00:00Z"), "idEstudiante": 8,  "idInstrumento": 10 },

  // Cali students reserving instruments in Cali (idSede:3)
  { "idReserva": 7,  "fechaInicio": ISODate("2025-02-16T18:00:00Z"), "fechaFin": ISODate("2025-02-16T20:00:00Z"), "idEstudiante": 11, "idInstrumento": 15 },
  { "idReserva": 8,  "fechaInicio": ISODate("2025-02-17T17:00:00Z"), "fechaFin": ISODate("2025-02-17T19:00:00Z"), "idEstudiante": 12, "idInstrumento": 16 },
  { "idReserva": 9,  "fechaInicio": ISODate("2025-02-18T13:00:00Z"), "fechaFin": ISODate("2025-02-18T15:00:00Z"), "idEstudiante": 13, "idInstrumento": 17 },
  { "idReserva": 10, "fechaInicio": ISODate("2025-02-19T10:00:00Z"), "fechaFin": ISODate("2025-02-19T12:00:00Z"), "idEstudiante": 14, "idInstrumento": 19 }
]);

//20, UsuarioSede

db.UsuarioSede.insertMany([
  // Bogotá professors (users 10..13) and some students
  { "idUsuarioSede": 1,  "idUsuario": 10, "idSede": 1 },
  { "idUsuarioSede": 2,  "idUsuario": 11, "idSede": 1 },
  { "idUsuarioSede": 3,  "idUsuario": 12, "idSede": 1 },
  { "idUsuarioSede": 4,  "idUsuario": 13, "idSede": 1 },
  { "idUsuarioSede": 5,  "idUsuario": 20, "idSede": 1 },

  // Medellín professors (users 14..16) and students
  { "idUsuarioSede": 6,  "idUsuario": 14, "idSede": 2 },
  { "idUsuarioSede": 7,  "idUsuario": 15, "idSede": 2 },
  { "idUsuarioSede": 8,  "idUsuario": 16, "idSede": 2 },
  { "idUsuarioSede": 9,  "idUsuario": 25, "idSede": 2 },

  // Cali professors (users 17..19) and students
  { "idUsuarioSede": 10, "idUsuario": 17, "idSede": 3 },
  { "idUsuarioSede": 11, "idUsuario": 18, "idSede": 3 },
  { "idUsuarioSede": 12, "idUsuario": 19, "idSede": 3 },
  { "idUsuarioSede": 13, "idUsuario": 30, "idSede": 3 }
]);

//21. cursoDisponible 

db.cursoDisponible.insertMany([
  //  SEDE 1 - Ciudad A
  { idCursoDisponible: 1, idSede: 1, idCurso: 1, disponible: true },
  { idCursoDisponible: 2, idSede: 1, idCurso: 2, disponible: true },
  { idCursoDisponible: 3, idSede: 1, idCurso: 3, disponible: false },
  { idCursoDisponible: 4, idSede: 1, idCurso: 4, disponible: true },
  { idCursoDisponible: 5, idSede: 1, idCurso: 5, disponible: false },

  //  SEDE 2 - Ciudad B
  { idCursoDisponible: 6, idSede: 2, idCurso: 6, disponible: true },
  { idCursoDisponible: 7, idSede: 2, idCurso: 7, disponible: true },
  { idCursoDisponible: 8, idSede: 2, idCurso: 8, disponible: true },
  { idCursoDisponible: 9, idSede: 2, idCurso: 9, disponible: false },
  { idCursoDisponible: 10, idSede: 2, idCurso: 10, disponible: true },

  //  SEDE 3 - Ciudad C
  { idCursoDisponible: 11, idSede: 3, idCurso: 11, disponible: false },
  { idCursoDisponible: 12, idSede: 3, idCurso: 12, disponible: true },
  { idCursoDisponible: 13, idSede: 3, idCurso: 13, disponible: true },
  { idCursoDisponible: 14, idSede: 3, idCurso: 14, disponible: false },
  { idCursoDisponible: 15, idSede: 3, idCurso: 15, disponible: true }
])

