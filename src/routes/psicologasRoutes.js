const express = require ('express');
const controller = require('../controller/psicologasController.js');

const router = express.Router();

router.get('/', controller.getPsicologas);
router.get('/estado', controller.getByEstado);
router.get('/cidade', controller.getByCidade);
router.get('/:id', controller.getIdPsicologa);
router.post('/add', controller.createPsicologa);
router.patch('/:id', controller.updatePsicologa);
router.delete('/:id', controller.deletePsicologas)


module.exports = router;