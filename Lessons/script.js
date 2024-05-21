// Define the updateLessonPlanCount function
function updateLessonPlanCount(filteredLessonPlans, allLessonPlans) {
    const lessonCountElement = document.getElementById('lessonCount');
    lessonCountElement.textContent = `Lesson ${filteredLessonPlans} of ${allLessonPlans}`;
}

// Function to filter lesson plans based on search input
function searchLessonPlans(event) {
    event.preventDefault(); // Prevent form submission
    
    const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    const searchSubject = document.getElementById('searchSubject').value.toLowerCase();
    const searchGrade = document.getElementById('searchGrade').value.toString(); // Convert to string
    const searchTerm = document.getElementById('searchTerm').value;
    const searchWeek = document.getElementById('searchWeek').value;
    const searchLessonNumber = document.getElementById('searchLessonNumber').value;

    const lessonPlansContainer = document.getElementById('lesson-plans');
    lessonPlansContainer.innerHTML = ''; // Clear previous results

    // Combine lesson plans from all data files
    const allLessonPlans = [...lessonPlans, ...lessonPlans2b,/* ...lessonPlans3, */...lessonPlans4b,/* ...lessonPlans5, ...lessonPlans6, ...lessonPlans7, ...lessonPlans8, ...lessonPlans9, ...lessonPlans10, ...lessonPlans11, ...lessonPlans12, ...lessonPlans13, ...lessonPlans14, ...lessonPlans15, ...lessonPlans16, ...lessonPlans17, ...lessonPlans18, */...lessonPlans19b,/* ...lessonPlans20, ...lessonPlans21,*/ ...lessonPlans22b, ...lessonPlans23b, ...lessonPlans24b, ...lessonPlans25a, ...lessonPlans25b, ...lessonPlans25c, ...lessonPlans26a, ...lessonPlans26b, ...lessonPlans26c,/*...lessonPlans27, ...lessonPlans28, ...lessonPlans29, ...lessonPlans30,*/ ...lessonPlans31b, ...lessonPlans32b, /*...lessonPlans33, ...lessonPlans34, ...lessonPlans35, ...lessonPlans36, ...lessonPlans37, ...lessonPlans38, ...lessonPlans39,*/ ...lessonPlans40b,/* ...lessonPlans41, ...lessonPlans42, */...lessonPlans43b, /*...lessonPlans44, ...lessonPlans45, ...lessonPlans46, ...lessonPlans47, ...lessonPlans48, ...lessonPlans49, ...lessonPlans50, ...lessonPlans51, ...lessonPlans52, ...lessonPlans53, ...lessonPlans54, ...lessonPlans55, ...lessonPlans56, ...lessonPlans57, ...lessonPlans58, ...lessonPlans59, ...lessonPlans60, ...lessonPlans61, ...lessonPlans62, ...lessonPlans63, ...lessonPlans64, ...lessonPlans65, ...lessonPlans66,*/];

    const filteredLessonPlans = allLessonPlans.filter(plan => {
        return plan.title.toLowerCase().includes(searchTitle) &&
            plan.subject.toLowerCase().includes(searchSubject) &&
            (searchGrade === '' || plan.grade === searchGrade) &&
            (searchTerm === '' || plan.term === searchTerm) &&
            (searchWeek === '' || plan.week === searchWeek) &&
            (searchLessonNumber === '' || plan.lessonNumber === searchLessonNumber);
    });

// Define a mapping of grade to teacher's name
const teacherNames = {
    "Baby Birds": "Ms. Chikondi",
    "Sky Sprouts": "Ms. Chikondi",
    "Nestlings Navigators": "Ms. Maureen",
    "Feather Flyers": "Ms. Maureen",
    "Cloud Chicks": "Ms. Faith",
    "Wing Whiz": "Ms. Faith",
    "Sky Soarers": "Mr. Mbaso",
    "Avian Aces": "Mr. Mbaso",
    "Nimbus Navigators": "Mr. Mbaso"
};

// Define a mapping of teacher's name to TCZ number
const tczNumbers = {
    "Ms. Chikondi": "FS20BC0012",
    "Ms. Maureen": "FS20BC0010",
    "Ms. Faith": "FS20BC0011",
    "Mr. Mbaso": "19/09/0904/021725"
};
    
    
filteredLessonPlans.forEach(plan => {
    const gradeAbbreviation = plan.grade.split(' ').map(word => word[0].toUpperCase()).join(''); // Abbreviate plan.grade
    const titlePrefix = `${gradeAbbreviation}${plan.subject.substring(0, 3)}T${plan.term}W${plan.week}L${plan.lessonNumber}`;
    
    // Use the mapping to display the teacher's name based on plan.grade
    const teacherName = teacherNames[plan.grade];
      // Use the mapping to display the TCZ number based on teacherName
    const tczNumber = tczNumbers[teacherName];
    
    const card = document.createElement('div');
    card.classList.add('lesson-plan');
    card.innerHTML = `
        <h3 class="lessonsplan">LESSON PLAN</h3>
        <p><em>${titlePrefix} - ${plan.topic}</em></p>
        <p><strong>School:</strong> FLYING WINGS ACADEMY</p>
        <p><strong>Teacher:</strong> ${teacherName}</p>
    
    
    
    
    
    
    
            <p><strong>Date:</strong> ${plan.date}</p>

    
    
    
    
            <p><strong>TCZ Number:</strong> ${tczNumber}</p>

            <p><strong>Subject:</strong> ${plan.subject}</p>
            <p><strong>Topic:</strong> ${plan.topic}</p>
            <p><strong>Grade:</strong> ${plan.grade}</p>
            <p><strong>Term:</strong> ${plan.term}</p>
            <p><strong>Week:</strong> ${plan.week}</p>
            <p><strong>Lesson Number:</strong> ${plan.lessonNumber}</p>
            <p>${plan.description}</p>

            <h4 class="titlez">Materials:</h4>
            <ul>${plan.materials.map(material => `<li>${material}</li>`).join('')}</ul>
            <h4 class="titlez">Objectives:</h4>
            <ul>${plan.objectives.map(objective => `<li>${objective}</li>`).join('')}</ul>
            <h4 class="titlez">Rationale:</h4>
            <p>${plan.rationale}</p>
            <h4 class="titlez">Teacher Exposition:</h4>
            <p>${plan.methodology}</p>

            <p class="blank">LESSON DEVELOPMENT</p>
    
<h4 class="titlez now">ACTIVITIES:</h4>
<table>
  <thead>
    <tr>
      <th>Stage</th>
      <th>Learning Points</th>
    </tr>
  </thead>
  <tbody>
<!-- First Row -->
    <tr>
      <td>${plan.activities[0][0]}</td>
      <td>${plan.activities[1][0]}</td>
    </tr>
    <!-- Second Row -->
    <tr>
      <td>${plan.activities[0][1]}</td>
      <td>${plan.activities[1][1]}</td>
    </tr>
    <!-- Third Row -->
    <tr>
      <td>${plan.activities[0][2]}</td>
      <td>${plan.activities[1][2]}</td>
    </tr>
    <!-- Second Row -->
    <tr>
      <td>${plan.activities[0][3]}</td>
      <td>${plan.activities[1][3]}</td>
    </tr>
    <!-- Third Row -->
    <tr>
      <td>${plan.activities[0][4]}</td>
      <td>${plan.activities[1][4]}</td>
    </tr>
    <!-- Add more rows as needed -->
  </tbody>
</table>
    
            <h4 class="titlez">Assessments:</h4>
            <p>${plan.assessments}</p>
            <h4 class="titlez">Conclusion:</h4>
            <p>${plan.conclusion}</p>



            <div class="buttons">
                <button onclick="downloadPlan('${plan.title}')">Download</button>

<div class="blogcomments">
    <a href="mailto:flyingwingsacademy7@gmail.com?subject=${titlePrefix} - ${plan.topic}&body=Greetings Sir,%0D%0A%0D%0AI hope this email finds you well. %0D%0A%0D%0AI would like to submit the evaluation of the stated lesson:%0D%0A%0D%0A1. Where the objectives met?%0D%0A%0D%0A [Yes/No]%0D%0A%0D%0A%0D%0A%0D%0A2. How would you rate the lesson in terms of the learners' performance?%0D%0A%0D%0A [Good/Average/Not Good]%0D%0A%0D%0A%0D%0A%0D%0A3. What is your recommendation?%0D%0A%0D%0A [Proceed to the next lesson/Repeat the Lesson]%0D%0A%0D%0A%0D%0A%0D%0AEvaluation Completed.%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A${teacherName}">Evaluation</a>
</div>
                <button onclick="printPlan('${plan.title}')">Print</button>
            </div>
        `;
        lessonPlansContainer.appendChild(card);
    });
    
    // Call updateLessonPlanCount function after filtering
    updateLessonPlanCount(filteredLessonPlans.length, allLessonPlans.length);
}

// Add event listener to the search form
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', searchLessonPlans);

// Function to hide search input fields
function hideSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.classList.add('hidden');
    });
}

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}


// Function to show search input fields
function showSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.classList.remove('hidden');
    });
}

// Function to toggle visibility of search input fields when icon is clicked
function toggleSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.classList.toggle('hidden');
    });
}

// Add event listener to the search submit button to hide input fields
const searchSubmitButton = document.querySelector('#searchForm button[type="submit"]');
searchSubmitButton.addEventListener('click', hideSearch);

// Add event listener to the search icon to toggle input fields
const toggleSearchIcon = document.getElementById('toggleSearch');
toggleSearchIcon.addEventListener('click', toggleSearch);

 // Function to download lesson plan
function downloadPlanAsPDF(title) {
    const plan = filteredLessonPlans.find(plan => plan.title === title);
    const gradeAbbreviation = plan.grade.split(' ').map(word => word[0].toUpperCase()).join('');
    const titlePrefix = `${gradeAbbreviation}${plan.subject.substring(0, 3)}T${plan.term}W${plan.week}L${plan.lessonNumber}`;

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Define the content to be added to the PDF
    const content = `
        LESSON PLAN
        ${titlePrefix} - ${plan.topic}

        School: ${plan.school}
        Teacher: ${plan.teacher}
        Date: ${plan.date}
        TCZ Number: ${plan.tcz}

        Subject: ${plan.subject}
        Topic: ${plan.topic}
        Grade: ${plan.grade}
        Term: ${plan.term}
        Week: ${plan.week}
        Lesson Number: ${plan.lessonNumber}
        ${plan.description}

        Materials:
        ${plan.materials.join('\n')}

        Objectives:
        ${plan.objectives.join('\n')}

        Rationale:
        ${plan.rationale.join('\n')}

        Teacher Exposition:
        ${plan.exposition.join('\n')}

        LESSON DEVELOPMENT
        ACTIVITIES:
        ${plan.activities.join('\n')}

        Assessments:
        ${plan.assessments.join('\n')}

        Conclusion:
        ${plan.conclusion.join('\n')}
    `;

    // Split the content into lines
    const lines = pdf.splitTextToSize(content, pdf.internal.pageSize.width - 20);

    // Add the lines to the PDF
    pdf.text(lines, 10, 10);

    // Save the PDF as a Blob
    const blob = pdf.output('blob');

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an <a> element
    const a = document.createElement('a');

    // Set href and download attributes for the <a> element
    a.href = url;
    a.download = `${title}.pdf`;

    // Append the <a> element to the document body
    document.body.appendChild(a);

    // Programmatically trigger a click on the <a> element to initiate download
    a.click();

    // Revoke the URL to release resources
    window.URL.revokeObjectURL(url);

    // Remove the <a> element from the document body
    document.body.removeChild(a);
}

        // Function to print lesson plan
        function printPlan(title) {
            const lessonPlan = lessonPlans.find(plan => plan.title === title);
            const lessonContent = `
        <h3>LESSON PLAN</h3>
        <p><em>${titlePrefix} - ${plan.topic}</em></p>
            <p><strong>School:</strong> ${plan.school}</p>
            <p><strong>Teacher:</strong> ${plan.teacher}</p>
            <p><strong>Date:</strong> ${plan.date}</p>
            <p><strong>TCZ Number:</strong> ${plan.tcz}</p>
            <p><strong>Subject:</strong> ${plan.subject}</p>
            <p><strong>Topic:</strong> ${plan.topic}</p>
            <p><strong>Grade:</strong> ${plan.grade}</p>
            <p><strong>Term:</strong> ${plan.term}</p>
            <p><strong>Week:</strong> ${plan.week}</p>
            <p><strong>Lesson Number:</strong> ${plan.lessonNumber}</p>
            <p>${plan.description}</p>
            <h4>Materials:</h4>
            <ul>${plan.materials.map(material => `<li>${material}</li>`).join('')}</ul>
            <h4>Objectives:</h4>
            <ul>${plan.objectives.map(objective => `<li>${objective}</li>`).join('')}</ul>
            <h4>Rationale:</h4>
            <ul>${plan.rationale.map(rationale => `<li>${rationale}</li>`).join('')}</ul>
            <h4>Teacher Exposition:</h4>
            <ul>${plan.exposition.map(exposition => `<li>${exposition}</li>`).join('')}</ul>
            <p>LESSON DEVELOPMENT</p>
            <h4>ACTIVITIES:</h4>
            <ol>${plan.activities.map(activity => `<li>${activity}</li>`).join('')}</ol>
            <h4>Assessments:</h4>
            <ul>${plan.assessments.map(assessment => `<li>${assessment}</li>`).join('')}</ul>
            <h4>Conclusion:</h4>
            <ul>${plan.conclusion.map(conclusion => `<li>${conclusion}</li>`).join('')}</ul>

            `;
            const printWindow = window.open('', '_blank');
            printWindow.document.write(lessonContent);
            printWindow.document.close();
            printWindow.print();
        }
