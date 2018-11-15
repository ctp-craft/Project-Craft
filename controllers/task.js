const express = require('express');
const models = require('../models');

const router = express.Router();
const Task = models.Task;

router.get('/', (req, res) => {
	Task.findAll().then((tasks) => {
		res.json({
			tasks
		});
	});
});

router.post('/', (req, res) => {
	Task.create({
		task_title: req.body.task_title,
		task_description: req.body.task_description,
	}).then((user) => {
		res.json({ 
			msg: "task created",
			id: req.body.id,
			task_title: req.body.task_title,
			task_description: req.body.task_description,
		});
	}).catch(() => {
		res.status(400).json({ msg: "error creating task" });
	});
});

module.exports = router;