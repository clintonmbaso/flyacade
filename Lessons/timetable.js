// timetable.js

// Sample timetable data structure
const timetables = {
  'Nestlings Navigators': {
    'Mathematics': {
      startDate: '2024-09-09',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      lessonFrequency: 4, // 4 lessons per week
    },
    'Science': {
      startDate: '2024-09-05',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      lessonFrequency: 4, // 4 lessons per week
    },
    // Add more subjects as needed
  },
  // Add more classes as needed
};

// Function to calculate lesson dates based on the timetable for a specific subject
function generateLessonDates(className, subject, numberOfLessons) {
  const classTimetable = timetables[className];
  if (!classTimetable) {
    console.error(`Timetable not found for class: ${className}`);
    return [];
  }

  const subjectTimetable = classTimetable[subject];
  if (!subjectTimetable) {
    console.error(`Subject timetable not found for subject: ${subject}`);
    return [];
  }

  const { startDate, daysOfWeek, lessonFrequency } = subjectTimetable;
  const lessonDates = [];
  const start = new Date(startDate);
  let currentDate = new Date(start);

  // Generate lesson dates based on the subject timetable
  for (let i = 0; i < numberOfLessons; i++) {
    while (!daysOfWeek.includes(currentDate.toLocaleString('en-US', { weekday: 'long' }))) {
      currentDate.setDate(currentDate.getDate() + 1);
    }
    lessonDates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 7 / lessonFrequency);
  }

  return lessonDates.map(date => date.toISOString().split('T')[0]); // Format dates as YYYY-MM-DD
}

// Example usage
const lessonDatesMath = generateLessonDates('Nestlings Navigators', 'Math', 10); // Generate dates for 10 Math lessons
const lessonDatesScience = generateLessonDates('Nestlings Navigators', 'Science', 10); // Generate dates for 10 Science lessons
console.log('Math Lesson Dates:', lessonDatesMath);
console.log('Science Lesson Dates:', lessonDatesScience);