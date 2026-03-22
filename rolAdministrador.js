use campusMusic;

// 1 Creaciion de Roles Personalizados
db.createRole({
  role: "administrador",
  privileges: [
    {
      resource: { db: "campusMusic", collection: "" },
      actions: [
        "find", "insert", "update", "remove",
        "createCollection", "createIndex", "dropCollection",
        "listCollections"
      ]
    },
    {
      resource: { db: "campusMusic", collection: "" },
      actions: [
        "createUser", "dropUser",
        "grantRolesToUser", "revokeRolesFromUser",
        "createRole", "dropRole"
      ]
    }
  ],
  roles: [
    { role: "readWrite", db: "campusMusic" },  // Permisos de lectura y escritura en 'campusMusic'
    { role: "dbAdmin", db: "campusMusic" }     // Administración de la base de datos 'campusMusic'
  ]
}); 


// 2. creacion de Usuarios

//  Administrador
db.createUser({
  user: "administrador",
  pwd: "Admin123",
  roles: [{ role: "administrador", db: "campusMusic" }]
});




