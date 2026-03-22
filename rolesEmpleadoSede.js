use campusMusic
// 1.Vista Por sede

// Sede 1
db.createCollection("vista_sede_1_estudiantes", {
  viewOn: "Estudiante",
  pipeline: [{ $match: { idSede: 1 } }]
});

db.createCollection("vista_sede_1_profesores", {
  viewOn: "Profesor",
  pipeline: [{ $match: { idSede: 1 } }]
});

db.createCollection("vista_sede_1_cursos", {
  viewOn: "cursoDisponibles",
  pipeline: [{ $match: { idSede: 1 } }]
});

db.createCollection("vista_sede_1_inscripciones", {
  viewOn: "Inscripcion",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 1 } },
    { $project: { est: 0 } }
  ]
});

db.createCollection("vista_sede_1_reservas", {
  viewOn: "Reserva",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 1 } },
    { $project: { est: 0 } }
  ]
});


// Sede 2 
db.createCollection("vista_sede_2_estudiantes", {
  viewOn: "Estudiante",
  pipeline: [{ $match: { idSede: 2 } }]
});

db.createCollection("vista_sede_2_profesores", {
  viewOn: "Profesor",
  pipeline: [{ $match: { idSede: 2 } }]
});

db.createCollection("vista_sede_2_cursos", {
  viewOn: "cursoDisponibles",
  pipeline: [{ $match: { idSede: 2 } }]
});

db.createCollection("vista_sede_2_inscripciones", {
  viewOn: "Inscripcion",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 2 } },
    { $project: { est: 0 } }
  ]
});

db.createCollection("vista_sede_2_reservas", {
  viewOn: "Reserva",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 2 } },
    { $project: { est: 0 } }
  ]
});


//  Sede 3
db.createCollection("vista_sede_3_estudiantes", {
  viewOn: "Estudiante",
  pipeline: [{ $match: { idSede: 3 } }]
});

db.createCollection("vista_sede_3_profesores", {
  viewOn: "Profesor",
  pipeline: [{ $match: { idSede: 3 } }]
});

db.createCollection("vista_sede_3_cursos", {
  viewOn: "cursoDisponibles",
  pipeline: [{ $match: { idSede: 3 } }]
});

db.createCollection("vista_sede_3_inscripciones", {
  viewOn: "Inscripcion",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 3 } },
    { $project: { est: 0 } }
  ]
});

db.createCollection("vista_sede_3_reservas", {
  viewOn: "Reserva",
  pipeline: [
    {
      $lookup: {
        from: "Estudiante",
        localField: "idEstudiante",
        foreignField: "idEstudiante",
        as: "est"
      }
    },
    { $unwind: "$est" },
    { $match: { "est.idSede": 3 } },
    { $project: { est: 0 } }
  ]
});

// ROLES EMPLEADOS DE SEDE

// Empleado Sede 1 
db.createRole({
  role: "empleado_sede_1",
  privileges: [
    { resource: { db: "campusMusic", collection: "" }, actions: ["listCollections"] },
    { resource: { db: "campusMusic", collection: "vista_sede_1_estudiantes" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_1_profesores" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_1_cursos" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_1_inscripciones" }, actions: ["find", ] },
    { resource: { db: "campusMusic", collection: "vista_sede_1_reservas" }, actions: ["find"] }, 
    { resource: { db: "campusMusic", collection: "Inscripcion" }, actions: ["insert"] },
    { resource: { db: "campusMusic", collection: "Reserva" }, actions: ["insert"] }
  ],
  roles: []
});

// Empleado Sede 2 
db.createRole({
  role: "empleado_sede_2",
  privileges: [
    { resource: { db: "campusMusic", collection: "" }, actions: ["listCollections"] },
    { resource: { db: "campusMusic", collection: "vista_sede_2_estudiantes" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_2_profesores" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_2_cursos" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_2_inscripciones" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_2_reservas" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "Inscripcion" }, actions: ["insert"] },
    { resource: { db: "campusMusic", collection: "Reserva" }, actions: ["insert"] }
  ],
  roles: []
});

//Empleado Sede 3 
db.createRole({
  role: "empleado_sede_3",
  privileges: [   
    
    { resource: { db: "campusMusic", collection: "" }, actions: ["listCollections"] },
    { resource: { db: "campusMusic", collection: "vista_sede_3_estudiantes" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_3_profesores" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_3_cursos" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_3_inscripciones" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "vista_sede_3_reservas" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "Inscripcion" }, actions: ["insert"] },
    { resource: { db: "campusMusic", collection: "Reserva" }, actions: ["insert"] }
  ],
  roles: []
});

//Creacion de usuario por sede 

// Empleados de sede
  db.createUser({
    user: "empleado_sede_1",
    pwd: "Sede1pass",
    roles: [{ role: "empleado_sede_1", db: "campusMusic" }]
  });

  db.createUser({
    user: "empleado_sede_2",
    pwd: "Sede2pass",
    roles: [{ role: "empleado_sede_2", db: "campusMusic" }]
  });

  db.createUser({
    user: "empleado_sede_3",
    pwd: "Sede3pass",
    roles: [{ role: "empleado_sede_3", db: "campusMusic" }]
  });