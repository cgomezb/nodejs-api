const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

// Configuration
console.log('Application Name: ' + config.get('name'));

// app.get();
// app.post();
// app.put();
// app.delete();

const courses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) {
    res.status(404).send('The course with the given Id was not found');
  }

  res.send(course);
});

// /api/posts/2020/1
app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

app.get('/api/users', (req, res) => {
  res.send(req.query);
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.post('/api/courses', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  // console.log(result);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  // if (req.body,name || req.body.name.length < 3) {
  //   res.status(400).send('Name is required and should be minimum 3 characters');
  //   return;
  // }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  // Look up the course
  // If no exist return 404
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);
  if (!course) {
    res.status(404).send('The course with the given Id was not found');
  }

  // Validate
  // If invalid, return 400 - Bad Request
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Update course
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});

const port = process.env.PORT || 3000;
// console.log(process.env);
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
