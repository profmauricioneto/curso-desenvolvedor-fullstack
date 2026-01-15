const { Router } = require('express');
const subjectController = require('./subject.controller');

const router = Router();

// Rotas de disciplinas
router.post('/', subjectController.create);
router.get('/', subjectController.getAll);
router.get('/:id', subjectController.getById);
router.put('/:id', subjectController.update);
router.delete('/:id', subjectController.delete);

// Rotas para gerenciar alunos na disciplina
router.post('/:id/students', subjectController.addStudent);
router.delete('/:id/students/:studentId', subjectController.removeStudent);

module.exports = router;
