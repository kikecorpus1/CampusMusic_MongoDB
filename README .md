# 🎵 Campus Music
### Sistema de Gestión de Base de Datos NoSQL
### Escuelas de Música en Colombia

---

**Autores:**
- Enrique Carlos Corpus Bejarano
- Juan David Barrera Torres

**Instructor:** Pedro Felipe Gómez Bonilla

**CampusLands · Cajasan · Ruta Node · Bucaramanga · 2025**

---

## Tabla de Contenido

- [Introducción](#introducción)
- [Caso de Estudio](#caso-de-estudio)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Orden de Ejecución](#orden-de-ejecución)
- [Modelo de Datos](#modelo-de-datos)
  - [Modelo Conceptual](#modelo-conceptual)
  - [Modelo Lógico NoSQL](#modelo-lógico-nosql)
  - [Colecciones](#colecciones--modelo-físico)
- [Índices](#índices)
- [Validaciones JSON Schema](#validaciones-json-schema)
- [Inserción de Datos de Prueba](#inserción-de-datos-de-prueba)
- [Agregaciones Analíticas](#agregaciones-analíticas)
- [Transacción ACID](#transacción-acid--inscripción-en-curso)
- [Roles y Control de Acceso](#roles-y-control-de-acceso)
- [Conclusión y Mejoras Futuras](#conclusión-y-mejoras-futuras)
- [Referencias](#referencias)

---

## Introducción

Campus Music es un proyecto académico cuyo propósito es desarrollar un sistema de gestión de datos para escuelas de música distribuidas en varias ciudades del país.

Estas instituciones registraban información de estudiantes, profesores, cursos, inscripciones y préstamos de instrumentos de manera manual mediante hojas de cálculo, lo que generaba problemas de duplicidad, inconsistencias y dificultad para generar reportes.

La solución adoptada se basa en **MongoDB**, aprovechando su modelo NoSQL orientado a documentos, su capacidad para manejar datos flexibles y su soporte nativo para transacciones y control de acceso por roles.

---

## Caso de Estudio

Campus Music administra varias escuelas de música en distintas ciudades del país. Cada sede cuenta con su propio grupo de profesores, estudiantes, instrumentos y horarios. Los problemas detectados antes de la migración eran:

- Duplicidad de datos entre sedes.
- Errores por manejo manual en hojas de cálculo.
- Dificultad para generar reportes consolidados.
- Sin control de acceso diferenciado por rol.

La migración a MongoDB permite:

- Centralizar toda la información en un único sistema.
- Modelar datos de forma flexible mediante documentos y colecciones.
- Establecer validaciones estructuradas con `$jsonSchema`.
- Definir roles de usuario con permisos diferenciados: **administrador**, **empleado de sede** y **estudiante**.
- Ejecutar transacciones seguras para operaciones críticas como inscripciones.
- Generar consultas analíticas para medir ocupación, demanda y rendimiento por sede.

---

## Estructura del Proyecto

```
📁 campus_music
│
├── 📁 config
│   └── db_config.js            # Creación de colecciones con $jsonSchema e índices.
│
├── 📁 data
│   └── test_dataset.js         # Poblamiento de la base con datos de prueba realistas.
│
├── 📁 queries
│   └── aggregations.js         # Consultas analíticas con el framework de agregación.
│
├── 📁 roles
│   ├── rolAdministrador.js     # Rol, usuario y permisos del administrador.
│   ├── rolesEmpleadoSede.js    # Vistas, roles y usuarios de empleados por sede.
│   └── rolEstudiante.js        # Vistas, roles y usuarios de estudiantes.
│
├── 📁 transactions
│   └── transactions.js         # Transacción ACID de inscripción en curso.
│
├── 📁 docs
│   ├── modeloConceptual.svg
│   └── modeloLogico.svg
│
└── README.md
```

---

## Orden de Ejecución

> ⚠️ Respetar este orden es obligatorio. Ejecutar scripts fuera de secuencia causará errores por dependencias inexistentes.

1. `config/db_config.js` — Crea todas las colecciones e índices (**siempre primero**).
2. `data/test_dataset.js` — Inserta los datos de prueba.
3. `roles/rolAdministrador.js` — Crea el rol y usuario administrador.
4. `roles/rolesEmpleadoSede.js` — Crea vistas, roles y usuarios de empleados de sede.
5. `roles/rolEstudiante.js` — Crea vistas, roles y usuarios de estudiantes.
6. `transactions/transactions.js` — Ejecuta la transacción de prueba (requiere datos previos).
7. `queries/aggregations.js` — Ejecuta las consultas analíticas (requiere datos previos).

---

## Modelo de Datos

### Modelo Conceptual

El modelo conceptual define las entidades del mundo real, sus atributos y las relaciones entre ellas, sin entrar en detalles técnicos de implementación.

- **Entidad:** objeto o concepto del mundo real distinguible por sus propiedades (representado como rectángulo).
- **Relación:** asociación entre dos o más entidades (representada como rombo).

![Modelo Conceptual](modeloConceptual.svg)

---

### Modelo Lógico NoSQL

El modelo lógico adapta el modelo conceptual al paradigma NoSQL de MongoDB, definiendo qué relaciones se resuelven por **embedding** y cuáles por **referencia**.

- **Embebido:** datos que se consultan siempre juntos y no se reutilizan de forma independiente.
- **Referencial:** datos que se comparten entre colecciones o que crecen de forma independiente.

![Modelo Lógico](modeloLogico.svg)

---

### Colecciones — Modelo Físico

El sistema cuenta con **21 colecciones** validadas con `$jsonSchema`:

| Colección | Descripción | Campos Clave |
|-----------|-------------|--------------|
| `Departamento` | División territorial principal. | idDepartamento, departamento |
| `Ciudad` | Ciudad perteneciente a un departamento. | idCiudad, ciudad, idDepartamento |
| `Sede` | Sede física de la escuela de música. | idSede, direccion, capacidad, idCiudad |
| `Usuario` | Credenciales de acceso al sistema. | idUsuario, usuario, contrasena |
| `Administrador` | Usuario con permisos totales. | idAdministrador, nombre, documento, idUsuario |
| `Profesor` | Docente asignado a una sede. | idProfesor, nombreProfesor, documento, experiencia, idSede |
| `Especialidad` | Especialidad musical del profesor. | idEspecialidad, especialidad |
| `ProfesorEspecialidad` | Relación N:M entre profesor y especialidad. | idProfesor, idEspecialidad |
| `Estudiante` | Alumno inscrito en la institución. | idEstudiante, nombreEstudiante, documento, contacto, idNivel, idSede |
| `Nivel` | Nivel académico musical. | idNivel, nombreNivel |
| `Instrumento` | Instrumento disponible para reserva. | idInstrumento, instrumento, cantidad |
| `Curso` | Curso ofertado por la institución. | idCurso, nombre, precio, cupo, idInstrumento, idNivel, idSede |
| `CursoProfesor` | Asignación de profesor a curso. | idAsigna, idProfesor, idCurso |
| `Duracion` | Periodo de ejecución de un curso. | idDuracion, fechaInicio, fechaFin, idCurso |
| `Horario` | Horario de clase de un grupo. | idHorario, dia, horaInicio, horaFin |
| `Grupo` | Grupo de estudiantes dentro de un curso. | idGrupo, grupo, idDuracion, idProfesor, idHorario |
| `EstudianteGrupo` | Relación N:M entre estudiante y grupo. | idEstudiante, idGrupo |
| `Inscripcion` | Inscripción de un estudiante a un curso. | idInscripcion, fecha, idCurso, idEstudiante |
| `Reserva` | Reserva de instrumento por un estudiante. | idReserva, fechaInicio, fechaFin, idEstudiante, idInstrumento |
| `UsuarioSede` | Relación entre usuario y sede asignada. | idUsuario, idSede |
| `cursosDisponibles` | Disponibilidad de cursos por sede. | idSede, idCurso, disponible |

---

## Índices

Se crearon índices para garantizar rendimiento en consultas e integridad referencial:

- **Índices únicos** en cada campo `idX` para evitar documentos duplicados.
- **Índices simples** en llaves foráneas de consulta frecuente (`idCurso`, `idEstudiante`, `idSede`, etc.).
- **Índices compuestos** para garantizar unicidad en relaciones entre colecciones.

### Índices compuestos destacados

| Colección | Índice Compuesto | Propósito |
|-----------|-----------------|-----------|
| `Inscripcion` | `{ idCurso, idEstudiante }` | Evitar inscripciones duplicadas. |
| `Reserva` | `{ idEstudiante, idInstrumento, fechaInicio }` | Evitar reservas duplicadas en el mismo periodo. |
| `Horario` | `{ idGrupo, dia, horaInicio }` | Evitar colisiones de horario. |
| `EstudianteGrupo` | `{ idEstudiante, idGrupo }` | Evitar asignaciones duplicadas. |
| `CursoProfesor` | `{ idProfesor, idCurso }` | Evitar asignaciones duplicadas de profesor. |
| `cursosDisponibles` | `{ idSede, idCurso }` | Unicidad de disponibilidad por sede y curso. |

---

## Validaciones JSON Schema

Todas las colecciones tienen validadores `$jsonSchema` que garantizan la integridad de los datos antes de cualquier inserción o actualización.

### Reglas aplicadas

- **`bsonType`** en todos los campos para tipado estricto.
- **`required`** para definir los campos obligatorios de cada colección.
- **`enum`** en campos de valor fijo, por ejemplo el campo `dia` en `Horario`:

```js
dia: {
  bsonType: "string",
  enum: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
}
```

- **`pattern`** con regex para validar el formato de hora `HH:MM`:

```js
horaInicio: { bsonType: "string", pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$" },
horaFin:    { bsonType: "string", pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$" }
```

- **`minimum: 0`** en el campo `cantidad` de `Instrumento` para evitar stock negativo.

---

## Inserción de Datos de Prueba

El archivo `test_dataset.js` puebla el sistema con datos coherentes y variados usando `insertMany`. El volumen insertado es:

| Entidad | Cantidad |
|---------|----------|
| Sedes | 3 (Bogotá, Medellín, Cali) |
| Cursos | 5 por sede |
| Profesores | 10 con distintas especialidades |
| Estudiantes | 15 con distintos niveles |
| Instrumentos | 20 disponibles para préstamo |
| Inscripciones | 30 en cursos diversos |
| Reservas de instrumentos | 10 |

### Flujo de inserción

Las colecciones deben poblarse respetando sus dependencias:

1. **Colecciones maestras** (sin dependencias): `Departamento`, `Ciudad`, `Nivel`, `Instrumento`, `Especialidad`, `Horario`.
2. **Colecciones dependientes**: `Sede`, `Usuario`, `Profesor`, `Estudiante`, `Curso`.
3. **Colecciones intermedias**: `CursoProfesor`, `Duracion`, `Grupo`, `ProfesorEspecialidad`, `EstudianteGrupo`.
4. **Colecciones de hechos**: `Inscripcion`, `Reserva`, `cursosDisponibles`.

---

## Agregaciones Analíticas

El archivo `aggregations.js` resuelve 8 preguntas de negocio usando el framework de agregación de MongoDB. Cada consulta está comentada y explicada en el código.

| # | Pregunta | Técnica Principal |
|---|----------|-------------------|
| 1 | ¿Cuántos estudiantes se inscribieron por sede en el último mes? | `$match`, `$lookup`, `$group` |
| 2 | ¿Cuáles son los cursos más demandados en cada sede? | `$group`, `$sort`, `$first` |
| 3 | ¿Cuál es el ingreso total generado por inscripciones en cada sede? | `$lookup`, `$group`, `$sum` |
| 4 | ¿Qué profesor tiene más estudiantes asignados? | `$lookup`, `$group`, `$sort`, `$limit` |
| 5 | ¿Qué instrumento es el más reservado? | `$group`, `$sort`, `$limit`, `$lookup` |
| 6 | Historial de cursos de un estudiante (fecha, sede, curso, profesor, nivel, costo). | Múltiples `$lookup` encadenados |
| 7 | Cursos actualmente en ejecución por sede. | `$match` con `$lte` / `$gte` sobre fechas |
| 8 | Detectar cursos que excedieron el cupo permitido. | `$group`, `$lookup`, `$project`, `$match` |

### Descripción Técnica de Cada Agregación

**1. Inscripciones por sede en el último mes**
Filtra inscripciones desde el primer día del mes actual, hace `$lookup` con `Curso` para obtener la sede, y agrupa por sede y mes contando documentos.

**2. Cursos más demandados por sede**
Agrupa inscripciones por sede y curso, ordena descendente por inscritos, y usa `$first` dentro de un segundo `$group` para obtener el curso líder de cada sede.

**3. Ingreso total por sede**
Hace `$lookup` de `Inscripcion` con `Curso` para obtener el precio, luego agrupa por sede sumando precios con `$sum`.

**4. Profesor con más estudiantes**
Parte de `Grupo`, hace `$lookup` con `EstudianteGrupo` para contar estudiantes por grupo, agrupa por profesor, ordena y limita a 1.

**5. Instrumento más reservado**
Agrupa `Reserva` por `idInstrumento` contando ocurrencias, ordena descendente, limita a 1 y hace `$lookup` con `Instrumento` para obtener el nombre.

**6. Historial de cursos de un estudiante**
Filtra `Inscripcion` por `idEstudiante`, encadena `$lookup` con `Estudiante`, `Curso`, `Sede`, `CursoProfesor`, `Profesor` y `Nivel` para construir el historial completo.

**7. Cursos en ejecución por sede**
Filtra `Duracion` donde `fechaInicio <= hoy <= fechaFin`, hace `$lookup` con `Curso` y `Sede`, agrupa por sede listando los cursos activos.

**8. Cursos que excedieron el cupo**
Agrupa inscripciones por curso, hace `$lookup` con `Curso` para obtener el cupo máximo, y filtra aquellos donde `inscritos > cupo`.

---

## Transacción ACID — Inscripción en Curso

El archivo `transactions.js` implementa una transacción multi-colección que garantiza atomicidad en el proceso crítico de inscripción de un estudiante.

### Escenario

Inscribir un estudiante en un curso implica modificar varias colecciones de forma coordinada. Si cualquier paso falla, todas las operaciones se revierten automáticamente.

### Pasos de la transacción

1. Verificar que el curso exista y tenga cupos disponibles.
2. Insertar el documento de inscripción en `Inscripcion`.
3. Decrementar el cupo disponible en `Curso`.
4. Buscar la duración asociada al curso en `Duracion`.
5. Buscar el grupo asociado a esa duración en `Grupo`.
6. Insertar el vínculo estudiante-grupo en `EstudianteGrupo`.
7. **Si cualquier paso falla:** rollback automático con `abortTransaction()`.

### Garantías ACID

| Propiedad | Aplicación en el sistema |
|-----------|--------------------------|
| **Atomicidad** | Todas las operaciones ocurren juntas o ninguna. |
| **Consistencia** | El cupo nunca queda en estado inconsistente. |
| **Aislamiento** | `startSession()` aísla la transacción de operaciones concurrentes. |
| **Durabilidad** | `commitTransaction()` persiste los cambios de forma permanente. |

### Estructura del código

```js
const session = db.getMongo().startSession();
try {
  session.startTransaction();
  // 1. Verificar curso y cupos disponibles
  // 2. Insertar inscripción
  // 3. Decrementar cupo del curso
  // 4. Buscar duración y grupo asociado
  // 5. Insertar EstudianteGrupo
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}
```

---

## Roles y Control de Acceso

Se implementaron tres niveles de roles usando `db.createRole()`. Las **vistas de MongoDB** actúan como capa de seguridad, filtrando los datos que cada usuario puede ver según su sede o su identidad.

---

### Rol: `administrador`

Acceso total a la base de datos `campusMusic`. Puede gestionar datos, colecciones, índices, roles y usuarios.

| Recurso | Acciones Permitidas |
|---------|---------------------|
| Todas las colecciones | `find`, `insert`, `update`, `remove`, `createCollection`, `createIndex`, `dropCollection`, `listCollections` |
| Usuarios y roles | `createUser`, `dropUser`, `grantRolesToUser`, `revokeRolesFromUser`, `createRole`, `dropRole` |
| Roles heredados | `readWrite`, `dbAdmin` |

**Usuario creado:** `administrador` — Ver código: [rolAdministrador.js](roles/rolAdministrador.js)

---

### Rol: `empleado_sede_N`

Acceso restringido únicamente a los datos de su sede a través de vistas filtradas por `idSede`. Existen roles para sede 1, 2 y 3.

| Vista / Colección | Acciones |
|-------------------|----------|
| `vista_sede_N_estudiantes` | `find` |
| `vista_sede_N_profesores` | `find` |
| `vista_sede_N_cursos` | `find` |
| `vista_sede_N_inscripciones` | `find` |
| `vista_sede_N_reservas` | `find` |
| `Inscripcion` | `insert` |
| `Reserva` | `insert` |

**Usuarios creados:** `empleado_sede_1`, `empleado_sede_2`, `empleado_sede_3` — Ver código: [rolesEmpleadoSede.js](roles/rolesEmpleadoSede.js)

---

### Rol: `estudiante_N`

Cada estudiante (del 1 al 15) tiene un rol personalizado que limita el acceso exclusivamente a sus propios datos, garantizando privacidad total entre estudiantes.

| Vista / Colección | Acciones |
|-------------------|----------|
| `vista_estudiante_N_info` | `find` — información personal |
| `vista_estudiante_N_cursosDisponibles` | `find` — cursos disponibles |
| `vista_estudiante_N_inscripciones` | `find` — historial de inscripciones |
| `vista_estudiante_N_reservas` | `find` — historial de reservas |
| `Reserva` | `insert` — crear nueva reserva |

**Usuarios creados:** `estudiante1` hasta `estudiante15` — Ver código: [rolEstudiante.js](roles/rolEstudiante.js)

### Ejemplo de creación de usuario con rol asignado

```js
// Crear rol personalizado
db.createRole({
  role: "empleado_sede_1",
  privileges: [
    { resource: { db: "campusMusic", collection: "vista_sede_1_estudiantes" }, actions: ["find"] },
    { resource: { db: "campusMusic", collection: "Inscripcion" }, actions: ["insert"] }
  ],
  roles: []
});

// Crear usuario con ese rol
db.createUser({
  user: "empleado_sede_1",
  pwd: "Sede1pass",
  roles: [{ role: "empleado_sede_1", db: "campusMusic" }]
});
```

---

## Conclusión y Mejoras Futuras

Campus Music logró consolidar una base de datos funcional y segura en MongoDB, resolviendo todos los problemas originales de duplicidad, inconsistencia y falta de control de acceso. Se implementaron exitosamente validaciones con `$jsonSchema`, índices estratégicos, transacciones ACID, agregaciones analíticas y un sistema de roles granular basado en vistas.

### Mejoras Identificadas

- **Modelo Curso-Sede:** la relación podría ser N:M en lugar de 1:N, permitiendo que un mismo curso se ofrezca en varias sedes sin duplicar documentos.
- **Embedding selectivo:** aprovechar más el modelo de documentos de MongoDB embebiendo datos de consulta frecuente para reducir la cantidad de `$lookup` en las agregaciones.
- **Roles dinámicos:** el sistema actual tiene roles hardcodeados para 3 sedes y 15 estudiantes. Una mejora sería generarlos dinámicamente al registrar nuevas sedes o usuarios.
- **Seguridad en producción:** las contraseñas de prueba deben reemplazarse por credenciales seguras antes de cualquier despliegue real.
- **Change Streams:** implementar change streams de MongoDB para notificar a estudiantes cuando un cupo esté por agotarse.

---

## Referencias

- MongoDB Documentation — https://www.mongodb.com/docs/
- MongoDB University — https://learn.mongodb.com/
- OpenAI ChatGPT (apoyo en redacción y generación de ejemplos) — https://chat.openai.com/
- CampusLands / Cajasan — Material de formación Ruta Node, Bucaramanga 2025.
