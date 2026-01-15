const { Router } = require('express');
const studentController = require('./student.controller');

const router = Router();

// Rotas de alunos
router.post('/', studentController.create);
router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

// Rotas para gerenciar matrículas do aluno
router.post('/:id/subjects', studentController.enrollSubject);
router.delete('/:id/subjects/:subjectId', studentController.unenrollSubject);

module.exports = router;
