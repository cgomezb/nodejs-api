const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'John Smith',
    tags: ['angular', 'frontend'],
    isPublished: true
  });
  
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  // eq   (equal)
  // ne   (not equal)
  // gt   (greater than)
  // gte  (greater than or equal to)
  // lt   (less than)
  // lte  (less than or equal to)
  // in
  // nin  (not in)

  // or
  // and

  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({ author: 'John Smith', isPublished: true })
    // .find({ price: { $gte: 10, $lte: 20 } })
    // .find({ price: { $in: [10, 15, 20] } })
    // .or([ { author: 'Mosh' }, { isPublished: true } ])
    // .and([ { author: 'Mosh' }, { isPublished: true } ])

    // Starts with a specific string
    .find({ author: /^John/ })
    // Ends with a specific string (i - insensitive)
    .find({ author: /Smith$/i })
    // Contains a specific string (i - insensitive)
    .find({ author: /.*Smith*./i })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    // .select({ name: 1, tags: 1 });
    .count();

  console.log(courses);
}

async function updateCourse(id) {
  // Get course, update properties and save document
  const course = await Course.findById(id);
  if (!course) {
    return;
  }

  // First approach
  course.isPublished = true;
  course.author = 'Another Author';

  // Second approach
  // course.set({
  //   isPublished = true,
  //   author = 'Another Author'
  // });

  const result = await course.save();
  console.log(result);
}

async function removeCourse(id) {
  // const result = await Course.deleteMany({ _id: id });
  // const course = await Course.findByIdAndRemove({ _id: id });
  const result = await Course.deleteOne({ _id: id });
  console.log(result);
}
