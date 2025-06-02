document.addEventListener("DOMContentLoaded", function () {
  const teachers = [
    {
      name: "Mrs. K. Siazyana",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts"],
      subjectPeriods: { Math: 4, Science: 3, English: 3, SDS: 2, "Expressive Arts": 2 },
      className: "Baby Sprouts",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 3, Friday: 2 },
    },
    {
      name: "Mrs. L. Muwila Reception",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts", "Literacy"],
      subjectPeriods: { Math: 4, Science: 4, English: 4, SDS: 3, "Expressive Arts": 3, Literacy: 4 },
      className: "Nestling Feathers",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
    {
      name: "Mrs. L. Muwila Feather",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts", "Literacy", "Bemba", "SP1"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 2, "Expressive Arts": 2, Literacy: 4, Bemba: 2, SP1: 1 },
      className: "Nestling Feathers",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
    {
      name: "Ms. F. Nakaonga",
      subjects: ["Math", "Science", "English", "SDS", "CTS", "Literacy", "Bemba", "SP1"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 3, CTS: 2, Literacy: 3, Bemba: 2, SP1: 1 },
      className: "Cloud Whiz",
      periodDuration: 60,
      maxPeriodsPerDay: { default: 5, Friday: 2 },
    },
    {
      name: "Mr. M. Muteba Avian",
      subjects: ["Math", "Science", "English", "SDS", "Expressive Arts", "Home Economics", "Literacy", "SP1", "Bemba", "Technology Studies"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 3, "Expressive Arts": 2, "Home Economics": 2, Literacy: 4, SP1: 1, Bemba: 2, "Technology Studies": 2 },
      className: "Avian Soarers",
      periodDuration: 50,
      maxPeriodsPerDay: { default: 6, Friday: 3 },
    },
    {
      name: "Mr. M. Muteba Soarers",
      subjects: ["Math", "Science", "English", "SDS", "Home Economics", "Literacy", "SP1", "Bemba", "Technology Studies"],
      subjectPeriods: { Math: 4, Science: 3, English: 4, SDS: 3, "Home Economics": 3, Literacy: 4, SP1: 1, Bemba: 2, "Technology Studies": 3 },
      className: "Avian Soarers",
      periodDuration: 50,
      maxPeriodsPerDay: { default: 6, Friday: 3 },
    },
    {
      name: "Mr. C. Mbaso",
      subjects: ["Math", "Science", "English", "SDS", "Home Economics", "Literacy", "SP1", "SP2", "Bemba", "Expressive Arts", "Technology Studies"],
      subjectPeriods: { Math: 5, Science: 5, English: 5, SDS: 3, "Home Economics": 3, Literacy: 3, SP1: 1, SP2: 1, Bemba: 2, "Expressive Arts": 2, "Technology Studies": 3 },
      className: "Nimbus Navigators",
      periodDuration: 40,
      maxPeriodsPerDay: { default: 7, Friday: 3 },
    },
  ];

  
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timetableData = [];
  let currentSort = { column: null, ascending: true };

  function formatTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  function generateTimetable() {
    teachers.forEach((teacher) => {
      const { name, subjects, subjectPeriods, periodDuration, className, maxPeriodsPerDay } = teacher;

      let subjectQueue = [];
      subjects.forEach((subject) => {
        for (let i = 0; i < subjectPeriods[subject]; i++) {
          subjectQueue.push(subject);
        }
      });

      subjectQueue = subjectQueue.sort(() => Math.random() - 0.5);
      const subjectPerDayMap = {};

      weekdays.forEach((day) => {
        const maxPerDay = maxPeriodsPerDay[day] || maxPeriodsPerDay.default;
        let startTime = 8 * 60;
        let periodsToday = 0;
        subjectPerDayMap[day] = new Set();

        while (periodsToday < maxPerDay && subjectQueue.length > 0) {
          let subjectIndex = subjectQueue.findIndex(sub => !subjectPerDayMap[day].has(sub));
          if (subjectIndex === -1) break;

          const subject = subjectQueue.splice(subjectIndex, 1)[0];
          subjectPerDayMap[day].add(subject);

          const endTime = startTime + periodDuration;
          const timeStr = `${formatTime(startTime)} - ${formatTime(endTime)}`;

          timetableData.push({
            time: timeStr,
            day: day,
            subject: subject,
            teacher: name,
            room: className,
          });

          startTime = endTime + 10;
          periodsToday++;
        }
      });
    });
  }

  function populateFilters() {
    const daySet = new Set();
    const subjectSet = new Set();
    const teacherSet = new Set();

    timetableData.forEach(entry => {
      daySet.add(entry.day);
      subjectSet.add(entry.subject);
      teacherSet.add(entry.teacher);
    });

    const populateSelect = (selectId, items) => {
      const select = document.getElementById(selectId);
      items.sort().forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
      });
    };

    populateSelect("dayFilter", Array.from(daySet));
    populateSelect("subjectFilter", Array.from(subjectSet));
    populateSelect("teacherFilter", Array.from(teacherSet));
  }

  function filterTable() {
    const dayVal = document.getElementById("dayFilter").value;
    const subjectVal = document.getElementById("subjectFilter").value;
    const teacherVal = document.getElementById("teacherFilter").value;

    const filtered = timetableData.filter(row => {
      return (dayVal === "all" || row.day === dayVal) &&
             (subjectVal === "all" || row.subject === subjectVal) &&
             (teacherVal === "all" || row.teacher === teacherVal);
    });

    renderTable(filtered);
  }

  function renderTable(data) {
    let sortedData = [...data];

    if (currentSort.column) {
      const { column, ascending } = currentSort;
      sortedData.sort((a, b) => {
        const valA = a[column].toUpperCase();
        const valB = b[column].toUpperCase();
        if (valA < valB) return ascending ? -1 : 1;
        if (valA > valB) return ascending ? 1 : -1;
        return 0;
      });
    }

    const tbody = document.querySelector("#timetable-table tbody");
    tbody.innerHTML = "";
    sortedData.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.time}</td>
        <td>${row.day}</td>
        <td>${row.subject}</td>
        <td>${row.teacher}</td>
        <td>${row.room}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function setupSorting() {
    const ths = document.querySelectorAll("#timetable-table th");
    const columns = ["time", "day", "subject", "teacher", "room"];

    ths.forEach((th, index) => {
      th.addEventListener("click", () => {
        const col = columns[index];

        if (currentSort.column === col) {
          currentSort.ascending = !currentSort.ascending;
        } else {
          currentSort.column = col;
          currentSort.ascending = true;
        }

        filterTable();
      });
    });
  }

  generateTimetable();
  populateFilters();
  renderTable(timetableData);
  setupSorting();

  document.getElementById("dayFilter").addEventListener("change", filterTable);
  document.getElementById("subjectFilter").addEventListener("change", filterTable);
  document.getElementById("teacherFilter").addEventListener("change", filterTable);
});