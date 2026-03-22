// ==============================================
// transactions.js
// Escenario: Inscribir estudiante en un curso
// Acciones:
//   1. Verifica curso y cupos disponibles
//   2. Inserta inscripción
//   3. Decrementa cupo del curso
//   4. Busca duración del curso
//   5. Busca grupo asociado a esa duración
//   6. Inserta vínculo estudiante–grupo
// Si algo falla: rollback automático
// ==============================================

const session = db.getMongo().startSession();

try {
  // 1. Iniciar transacción
  session.startTransaction();

  // Datos de prueba (ajusta según tus documentos reales)
  const idEstudiante = 1;
  const idCurso = 4;

  // 2. Colecciones dentro de la sesión
  const dbSession = session.getDatabase("campusMusic");
  const cursosColl = dbSession.Curso;
  const inscripcionesColl = dbSession.Inscripcion;
  const duracionesColl = dbSession.Duracion;
  const gruposColl = dbSession.Grupo;
  const estudianteGrupoColl = dbSession.EstudianteGrupo;

  // 3. Verificar que el curso exista y tenga cupos
  const curso = cursosColl.findOne({ idCurso: idCurso });
  if (!curso) throw new Error("El curso no existe");
  if (curso.cupo <= 0) throw new Error("No hay cupos disponibles");

  // 4. Insertar inscripción
  inscripcionesColl.insertOne({
    idCurso: idCurso,
    idEstudiante: idEstudiante,
    fecha: new Date(),
  });

  // 5. Decrementar cupo del curso
  cursosColl.updateOne({ idCurso: idCurso }, { $inc: { cupo: -1 } });

  // 6. Buscar duración asociada al curso
  const duracion = duracionesColl.findOne({ idCurso: idCurso });
  if (!duracion) throw new Error("El curso no tiene duración asignada");

  // 7. Buscar grupo correspondiente a esa duración
  const grupo = gruposColl.findOne({ idDuracion: duracion.idDuracion });
  if (!grupo) throw new Error("No hay grupo asociado a la duración del curso");

  // 8. Insertar vínculo estudiante–grupo
  estudianteGrupoColl.insertOne({
    idEstudiante: idEstudiante,
    idGrupo: grupo.idGrupo,
  });

  // 9. Confirmar la transacción
  session.commitTransaction();
  print("Transacción completada correctamente: estudiante inscrito y asignado a grupo.");

} catch (error) {
  // 10. Revertir si algo falla
  print("Error en la transacción:", error.message);
  session.abortTransaction();
} finally {
  // 11. Finalizar sesión
  session.endSession();
}
