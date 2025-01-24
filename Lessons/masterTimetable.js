let allTimetable = [];

// Function to generate the full timetable
function generateTimetable() {
  const teachers = [
    {
      name: "Siazyana",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts"],
      subjectPeriods: { Math: 4, Science: 3, English: 3, SDS: 2, "Expressive Arts": 2 },
      className: "Baby Sprouts",
      periodDuration: 60, // Period duration in minutes
      maxPeriodsPerDay: { default: 3, Friday: 2 }, // 5 periods Mon-Thu, 3 on Friday
    },
    {
      name: "Muwila Reception",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts", "Literacy"],
      subjectPeriods: { Math: 4, Science: 4, English: 4, SDS: 3, "Expressive Arts": 3, Literacy: 4 },
      className: "Nestling Feathers",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
      {
      name: "Muwila Feather",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts", "Literacy", "Bemba", "SP1"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 2, "Expressive Arts": 2, Literacy: 4, Bemba: 2, SP1: 1 },
      className: "Nestling Feathers",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
    {
      name: "Kaonga",
      subjects: ["Math", "Science", "English", "SDS", "CTS", "Literacy", "Bemba", "SP1"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 3, "CTS": 2, Literacy: 3, Bemba: 2, SP1: 1 },
      className: "Cloud Whiz",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
    {
      name: "Muteba",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Economics", "Literacy", "SP1", "Bemba", "Technology Studies"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 3, "Expressive Economics": 3, Literacy: 4, SP1: 1, Bemba: 2, "Technology Studies": 3 },
      className: "Avian Soarers",
      periodDuration: 50,
      maxPeriodsPerDay: { default: 6, Friday: 3 },
    },
    {
      name: "Mbaso",
      subjects: ["Math", "Science", "English", "SDS", "Home Economics", "Literacy", "SP1", "SP2", "Bemba", "Expressive Arts", "Technology Studies"],
      subjectPeriods: { Math: 5, Science: 5, English: 5, SDS: 3, "Home Economics": 2, Literacy: 3, SP1: 1, SP2: 1, Bemba: 3, "Expressive Arts": 2, "Technology Studies": 3 },
      className: "Nimbus Navigators",
      periodDuration: 40,
      maxPeriodsPerDay: { default: 7, Friday: 3 },
    },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let timetable = [];

  teachers.forEach(teacher => {
    const periodsAllocated = {}; // Track how many periods each subject has been allocated

    // Initialize periodsAllocated for each subject
    teacher.subjects.forEach(subject => {
      periodsAllocated[subject] = 0;
    });

    days.forEach(day => {
      const maxPeriodsForDay = day === "Friday" ? teacher.maxPeriodsPerDay.Friday : teacher.maxPeriodsPerDay.default;
      let periodsForDay = 0;
      const subjectsUsedToday = new Set(); // Track subjects already used today

      let startTimeInMinutes = 8 * 60; // Start the day at 8:00 AM

      while (periodsForDay < maxPeriodsForDay) {
        const availableSubjects = teacher.subjects.filter(
          subject =>
            periodsAllocated[subject] < teacher.subjectPeriods[subject] &&
            !subjectsUsedToday.has(subject) // Avoid reusing the same subject in the same day
        );

        if (availableSubjects.length === 0) break; // No more subjects available for this day

        const subject = availableSubjects[Math.floor(Math.random() * availableSubjects.length)]; // Randomly pick an available subject

        // Calculate start and end times for the current period
        const periodStartTime = formatTime(startTimeInMinutes);
        const periodEndTime = formatTime(startTimeInMinutes + teacher.periodDuration);

        timetable.push({
          day,
          period: periodsForDay + 1,
          subject,
          teacher: teacher.name,
          room: `Room ${101 + teachers.indexOf(teacher)}`,
          className: teacher.className,
          time: `${periodStartTime} - ${periodEndTime}`, // Add the time range
        });

        periodsAllocated[subject]++;
        subjectsUsedToday.add(subject); // Mark the subject as used for today
        periodsForDay++;
        startTimeInMinutes += teacher.periodDuration; // Move the start time for the next period
      }
    });
  });

  allTimetable = timetable;

  // Helper function to format time from minutes to HH:MM AM/PM
  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const isPM = hours >= 12;
    const formattedHours = isPM ? hours - 12 || 12 : hours || 12; // Convert 24-hour to 12-hour format
    const formattedMins = mins < 10 ? `0${mins}` : mins;
    const period = isPM ? "PM" : "AM";
    return `${formattedHours}:${formattedMins} ${period}`;
  }
}

// Function to display the timetable in the table
function displayTimetable(timetable) {
  const timetableTable = document.getElementById('timetable-table');
  timetableTable.innerHTML = '';

  // Create table headers
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>Day</th>
    <th>Period</th>
    <th>Class</th>
    <th>Subject</th>
    <th>Teacher</th>
    <th>Room</th>
    <th>Time</th> <!-- Added time column -->
  `;
  timetableTable.appendChild(headerRow);

  if (timetable.length === 0) {
    const noDataRow = document.createElement('tr');
    noDataRow.innerHTML = `<td colspan="7">No timetable found</td>`; <!-- Adjusted colspan for time column -->
    timetableTable.appendChild(noDataRow);
    return;
  }

  // Add each entry to the table
  timetable.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.day}</td>
      <td>${entry.period}</td>
      <td>${entry.className}</td>
      <td>${entry.subject}</td>
      <td>${entry.teacher}</td>
      <td>${entry.room}</td>
      <td>${entry.time}</td> <!-- Added time value -->
    `;
    timetableTable.appendChild(row);
  });
}

// Function to populate filters
function populateFilters(timetable) {
  const daySet = new Set();
  const subjectSet = new Set();
  const teacherSet = new Set();

  timetable.forEach(entry => {
    daySet.add(entry.day);
    subjectSet.add(entry.subject);
    teacherSet.add(entry.teacher);
  });

  const daySelect = document.getElementById('dayFilter');
  const subjectSelect = document.getElementById('subjectFilter');
  const teacherSelect = document.getElementById('teacherFilter');

  daySet.forEach(day => {
    const option = document.createElement('option');
    option.value = day;
    option.textContent = day;
    daySelect.appendChild(option);
  });

  subjectSet.forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  teacherSet.forEach(teacher => {
    const option = document.createElement('option');
    option.value = teacher;
    option.textContent = teacher;
    teacherSelect.appendChild(option);
  });

  daySelect.addEventListener('change', filterTimetable);
  subjectSelect.addEventListener('change', filterTimetable);
  teacherSelect.addEventListener('change', filterTimetable);
}

// Function to filter timetable
function filterTimetable() {
  const dayFilter = document.getElementById('dayFilter').value;
  const subjectFilter = document.getElementById('subjectFilter').value;
  const teacherFilter = document.getElementById('teacherFilter').value;

  let filteredTimetable = allTimetable.filter(entry => {
    const dayMatch = dayFilter === 'all' || entry.day === dayFilter;
    const subjectMatch = subjectFilter === 'all' || entry.subject === subjectFilter;
    const teacherMatch = teacherFilter === 'all' || entry.teacher === teacherFilter;
    return dayMatch && subjectMatch && teacherMatch;
  });

  // Adjust the times based on filtered results
  let startTime = 8; // Reset start time
  filteredTimetable = filteredTimetable.map(entry => {
    const periodStartTime = `${startTime}:00 AM`;
    const periodEndTime = `${startTime + 1}:00 AM`;

    startTime += 1; // Increment start time for the next period

    return {
      ...entry,
      time: `${periodStartTime} - ${periodEndTime}`, // Updated time for filtered entry
    };
  });

  displayTimetable(filteredTimetable);
}

// Initialize the timetable
window.onload = function () {
  generateTimetable();
  populateFilters(allTimetable);
  displayTimetable(allTimetable);
};