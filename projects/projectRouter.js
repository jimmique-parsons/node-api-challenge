const express = require('express');

const Projects = require('./../data/helpers/projectModel');
const Actions = require('./../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const projects = await Projects.get();
    projects
        ? res.status(200).json(projects)
        : next({ status: 500, message: 'Error retrieving projects' });
});

module.exports = router;