const express = require('express');
const fs = require('fs');
const path = require('path');

// Branch: div - test branch for webhook
const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(express.json());

// Helper function to read tasks
const readTasks = () => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Helper function to write tasks
const writeTasks = (tasks) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// GET all tasks
app.get('/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET task by ID
app.get('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
});

// POST new task
app.post('/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// PUT update task
app.put('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Task not found');

    tasks[index] = { ...tasks[index], ...req.body };
    writeTasks(tasks);
    res.json(tasks[index]);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const filteredTasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    if (tasks.length === filteredTasks.length) return res.status(404).send('Task not found');

    writeTasks(filteredTasks);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`API server is running on http://localhost:${PORT} (CI/CD auto-deploy)`);
});
