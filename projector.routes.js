const express = require('express');
const router = express.Router();
const projectorController = require('./projectorController');

router.get('/projectors', projectorController.getAllProjectors);
router.post('/projectors', projectorController.addProjector);
router.put('/projectors/:id', projectorController.updateProjector);
router.delete('/projectors/:id', projectorController.deleteProjector);

module.exports = router;
