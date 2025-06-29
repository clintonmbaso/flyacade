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
    const allLessonPlans = [
    
    ...lessonPlans1a, ...lessonPlans1b, ...lessonPlans1c,
    ...lessonPlans2a, ...lessonPlans2b, ...lessonPlans2c,
    ...lessonPlans3a, ...lessonPlans3b, ...lessonPlans3c,
    ...lessonPlans4a, ...lessonPlans4b, ...lessonPlans4c,
    ...lessonPlans5a, ...lessonPlans5b, ...lessonPlans5c,
    ...lessonPlans6a, ...lessonPlans6b, ...lessonPlans6c,
    ...lessonPlans7a, ...lessonPlans7b, ...lessonPlans7c,
    ...lessonPlans8a, ...lessonPlans8b, ...lessonPlans8c,
    ...lessonPlans9a, ...lessonPlans9b, ...lessonPlans9c,
     ...lessonPlans10a, ...lessonPlans10b, ...lessonPlans10c,
     
    ...lessonPlans11a, ...lessonPlans11b, ...lessonPlans11c,
    ...lessonPlans12a, ...lessonPlans12b, ...lessonPlans12c,
    ...lessonPlans13a, ...lessonPlans13b, ...lessonPlans13c,
    ...lessonPlans14a, ...lessonPlans14b, ...lessonPlans14c,
    ...lessonPlans15a, ...lessonPlans15b, ...lessonPlans15c,    
    ...lessonPlans16a, ...lessonPlans16b, ...lessonPlans16c,
    ...lessonPlans17a, ...lessonPlans17b, ...lessonPlans17c,
    
    ...lessonPlans18a, ...lessonPlans18b, ...lessonPlans18c,
     
     
    ...lessonPlans19a, ...lessonPlans19b, ...lessonPlans19c,
    ...lessonPlans20a, ...lessonPlans20b, ...lessonPlans20c,
    
    ...lessonPlans21a, ...lessonPlans21b, ...lessonPlans21c,
    ...lessonPlans22a, ...lessonPlans22b, ...lessonPlans22c,
    ...lessonPlans23a, ...lessonPlans23b, ...lessonPlans23c,
    ...lessonPlans24a, ...lessonPlans24b, ...lessonPlans24c,
    ...lessonPlans25a, ...lessonPlans25b, ...lessonPlans25c,
    ...lessonPlans26a, ...lessonPlans26b, ...lessonPlans26c,
    ...lessonPlans27a, ...lessonPlans27b, ...lessonPlans27c,
    ...lessonPlans28a, ...lessonPlans28b, ...lessonPlans28c,
    ...lessonPlans29a, ...lessonPlans29b, ...lessonPlans29c,
    ...lessonPlans30a, ...lessonPlans30b, ...lessonPlans30c,
    
    ...lessonPlans31a, ...lessonPlans31b, ...lessonPlans31c,
    ...lessonPlans32a, ...lessonPlans32b, ...lessonPlans32c,
    ...lessonPlans33a, ...lessonPlans33b, ...lessonPlans33c,
    ...lessonPlans34a, ...lessonPlans34b, ...lessonPlans34c,
    ...lessonPlans35a, ...lessonPlans35b, ...lessonPlans35c,
    
    ...lessonPlans36a,  /*...lessonPlans36b, ...lessonPlan36c,
    */
     
     
     ...lessonPlans37a, ...lessonPlans37b, ...lessonPlans37c,
    ...lessonPlans38a, ...lessonPlans38b, ...lessonPlans38c,
    ...lessonPlans39a, ...lessonPlans39b, ...lessonPlans39c,
    ...lessonPlans40a, ...lessonPlans40b, ...lessonPlans40c,
    
    ...lessonPlans41a, ...lessonPlans41b, ...lessonPlans41c,
    ...lessonPlans42a, ...lessonPlans42b, ...lessonPlans42c,
    ...lessonPlans43a, ...lessonPlans43b, ...lessonPlans43c,
    ...lessonPlans44a, ...lessonPlans44b, ...lessonPlans44c,
    
    ...lessonPlans45a, 
/*      ...lessonPlans46a, 
     ...lessonPlans47a, 
    ...lessonPlans48a,
    ...lessonPlans49a,
    */
    ...lessonPlans50a, ...lessonPlans50b, /*...lessonPlans50c,
    */
    ...lessonPlans51a,
    /*
    ...lessonPlans52, ...lessonPlans53, 
     ...lessonPlans54,
    */
    ...lessonPlans55a, ...lessonPlans55b, ...lessonPlans55c,
    
    ...lessonPlans56a, ...lessonPlans56b, ...lessonPlans56c,
    ...lessonPlans57a, ...lessonPlans57b, ...lessonPlans57c,
    /*
    ...lessonPlans58a, 
    ...lessonPlans59a,
    
    */
    ...lessonPlans60a,
    
    ...lessonPlans61a, ...lessonPlans61b, ...lessonPlans61c,
    ...lessonPlans62a, ...lessonPlans62b, ...lessonPlans62c,
    ...lessonPlans63a, ...lessonPlans63b, ...lessonPlans63c,
    ...lessonPlans64a, ...lessonPlans64b, ...lessonPlans64c,
    ...lessonPlans65a, ...lessonPlans65b, ...lessonPlans65c,
    ...lessonPlans66a, ...lessonPlans66b, ...lessonPlans66c,
    ...lessonPlans67a, ...lessonPlans67b, ...lessonPlans67c,
    /*
    ...lessonPlans671a, ...lessonPlans671b, ...lessonPlans671c, 
    ...lessonPlans68b, 
    ...lessonPlans69b,
    */
    ...lessonPlans70a, ...lessonPlans70b, ...lessonPlans70c,
    ...lessonPlans71a, ...lessonPlans71b, ...lessonPlans71c,
    
    ...lessonPlans72a, ...lessonPlans72b, ...lessonPlans72c,
    ...lessonPlans73a, ...lessonPlans73b, ...lessonPlans73c,
    ...lessonPlans74a, ...lessonPlans74b, ...lessonPlans74c,
    ...lessonPlans75a, ...lessonPlans75b, ...lessonPlans75c,
    ...lessonPlans76a, ...lessonPlans76b, ...lessonPlans76c,
    ...lessonPlans77a, ...lessonPlans77b, ...lessonPlans77c,
    ...lessonPlans78a, ...lessonPlans78b, ...lessonPlans78c,
    
    ...lessonPlans79a,
    
    ...lessonPlans80a, ...lessonPlans80b, ...lessonPlans80c,
    
    ...lessonPlans81a, ...lessonPlans81b, ...lessonPlans81c,
    ...lessonPlans82a, ...lessonPlans82b, ...lessonPlans82c,
/*    ...lessonPlans83a, ...lessonPlans83b, ...lessonPlans83c,
    ...lessonPlans84a, ...lessonPlans84b, ...lessonPlans84c,
    ...lessonPlans85a, ...lessonPlans85b, ...lessonPlans85c,
    ...lessonPlans86a, ...lessonPlans86b, ...lessonPlans86c,
    ...lessonPlans87a, ...lessonPlans87b, ...lessonPlans87c,
                    
    */
        ...lessonPlans88a, ...lessonPlans88b, ...lessonPlans88c,
        ...lessonPlans89a, ...lessonPlans89b, ...lessonPlans89c,
    ];
     
     
     
     

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
    "Baby Birds": "Mrs. Kuligwa Siazyana",
    "Sky Sprouts": "Mrs. Kuligwa Siazyana",
    "Nestlings Navigators": "Mrs. Loveness Muwila",
    "Feather Flyers": "Mrs. Loveness Muwila",
    "Cloud Chicks": "Ms. Faith Nakaonga",
    "Wing Whiz": "Ms. Faith Nakaonga",
    "Sky Soarers": "Mr. Clinton Mbaso",
    "Avian Aces": "Mr. Clinton Mbaso",
    "Nimbus Navigators": "Mr. Clinton Mbaso",
    "Fledgling Falcons": "Mr. Clinton Mbaso",
    "All Classes": "All Teachers"
};

// Define a mapping of teachers name to TCZ number
const tczNumbers = {
    "Mrs. Loveness Muwila": "FS20BC0003",
    "Mrs. Kuligwa Siazyana": "FS20BC0012",
    "Ms. Faith Nakaonga": "FS20BC0011",
    "Mr. Clinton Mbaso": "19/09/0904/021725",    
    "All Teachers": "FS20BC1111",
    "Mr. Muteba Masheka": "FS20BC0013"
};
    
// Example usage in your main file
const className = 'Nestlings Navigators'; // Change as needed
const subject = 'Mathematics'; // Specify the subject
const numberOfLessons = 32; // Set the number of lessons required
const lessonDates = generateLessonDates(className, subject, numberOfLessons);

// Use lessonDates to set the accurate dates in each lesson plan
console.log('Accurate Lesson Dates:', lessonDates);
    
filteredLessonPlans.forEach(plan => {
    const gradeAbbreviation = plan.grade.split(' ').map(word => word[0].toUpperCase()).join(''); // Abbreviate plan.grade
    const titlePrefix = `${gradeAbbreviation}${plan.subject.substring(0, 3)}T${plan.term}W${plan.week}L${plan.lessonNumber}`;
    
    // Use the mapping to display the teachers name based on plan.grade
    const teacherName = teacherNames[plan.grade];
      // Use the mapping to display the TCZ number based on teacherName
    const tczNumber = tczNumbers[teacherName];
    
    
    
// Define a starting point for each term
const termStartDates = {
    1: new Date("2025-01-06"), // Example starting date for Term 1
    2: new Date("2025-05-08"), // Example starting date for Term 2
    3: new Date("2025-09-07")  // Example starting date for Term 3
};

// Function to calculate the lesson date
const getLessonDate = (lessonNumber, week, term) => {
    // Validate inputs
    if (!termStartDates[term]) {
        console.error("Invalid term entered!");
        return "Invalid Term";
    }
    if (week < 1 || week > 14) { // Assuming a term has 14 weeks
        console.error("Invalid week entered!");
        return "Invalid Week";
    }

    const startDate = new Date(termStartDates[term]);
    const lessonDate = new Date(startDate);

    // Calculate the day of the week based on lessonNumber (e.g., Mon-Fri for lessons 1-5)
    const dayOffset = (lessonNumber - 1) % 5; // Adjust for Monday to Friday

    // Add the calculated weeks and the day offset
    lessonDate.setDate(startDate.getDate() + (week - 1) * 7 + dayOffset);

    return lessonDate.toDateString(); // Return date as a human-readable string
};

    
    
    
// Modify the card rendering code to use getLessonDate
const card = document.createElement('div');
card.classList.add('lesson-plan');
card.innerHTML = `
    <h3 class="lessonsplan">LESSON PLAN</h3>
    <p><em>${titlePrefix} - ${plan.topic}</em></p>
    <p><strong>School:</strong> FLYING WINGS ACADEMY</p>
    <p><strong>Teacher:</strong> ${teacherName}</p>
    <p><strong>Date:</strong> ${getLessonDate(plan.lessonNumber, plan.week, plan.term)}</p>
            <p><strong>Teacher ID:</strong> ${tczNumber}</p>
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
      <td class="stage">Introduction<!--${plan.activities[0][0]}--></td>
      <td>${plan.activities[1][0]}</td>
    </tr>
    <!-- Second Row -->
    <tr>
      <td class="stage">Development<!--${plan.activities[0][1]}--></td>
      <td>${plan.activities[1][1]}</td>
    </tr>
    <!-- Third Row -->
    <tr>
      <td class="stage">Explanation<!--${plan.activities[0][2]}--></td>
      <td>${plan.activities[1][2]}</td>
    </tr>
    <!-- Forth Row -->
    <tr>
      <td class="stage">Synthesis<!--${plan.activities[0][3]}--></td>
      <td>${plan.activities[1][3]}</td>
    </tr>
    <!-- Fifth Row -->
    <tr>
      <td class="stage">Conclusion and Evaluation<!--${plan.activities[0][4]}--></td>
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
    <a href="mailto:flyingwingsacademy7@gmail.com?subject=${titlePrefix} - ${plan.topic}&body=Greetings Madam Bridget,%0D%0A%0D%0AI hope this email finds you well. %0D%0A%0D%0AI would like to submit the evaluation of ${titlePrefix} - ${plan.topic} lesson:%0D%0A%0D%0A-----------------%0D%0A%0D%0A%0D%0A%0D%0AWas the Lesson taught?%0D%0A%0D%0A[Yes/No]%0D%0A%0D%0AIf No, state the reason: %0D%0A%0D%0A%0D%0A%0D%0AIf Yes, then answer the following questions: %0D%0A%0D%0A%0D%0A%0D%0A 1. Where the objectives met?%0D%0A%0D%0A [Yes/No]%0D%0A%0D%0A%0D%0A%0D%0A2. How would you rate the lesson in terms of the learners' performance?%0D%0A%0D%0A [Good/Average/Not Good]%0D%0A%0D%0A%0D%0A%0D%0A3. What is your recommendation?%0D%0A%0D%0A [Proceed to the next lesson/Repeat the Lesson]%0D%0A%0D%0A%0D%0A%0D%0AIf you have any comments or recommendations, please indicate them here: %0D%0A%0D%0A%0D%0A%0D%0AEvaluation Completed.%0D%0A%0D%0A%0D%0A%0D%0ABest regards,%0D%0A${teacherName}">Evaluation</a>
</div>
<button onclick="showPopup('<h4>${plan.heading}</h4>', '<p>${plan.details}</p>', '<img src=${plan.pic}')">Details</button>
    
        `;
        lessonPlansContainer.appendChild(card);
    
    /*
    const card = document.createElement('div');
card.classList.add('lesson-plan');
card.innerHTML = `
  <h3 class="lessonsplan">LESSON PLAN</h3>
  <p><em>${titlePrefix} - ${plan.topic}</em></p>
  <p><strong>School:</strong> ${plan.school}</p>
  <p><strong>Teacher:</strong> ${plan.teacher}</p>
  <p><strong>Date:</strong> ${plan.date}</p>
  <p><strong>Teacher ID:</strong> ${plan.tcz}</p>
  <p><strong>Subject:</strong> ${plan.subject}</p>
  <p><strong>Grade:</strong> ${plan.grade}</p>
  <p><strong>Term:</strong> ${plan.term}</p>
  <p><strong>Week:</strong> ${plan.week}</p>
  <p><strong>Lesson Number:</strong> ${plan.lessonNumber}</p>
  <p><strong>Time:</strong> ${plan.time}</p>
  <p><strong>Concept:</strong> ${plan.concept}</p>
  <p><strong>Sub-Concept:</strong> ${plan.sub_concept}</p>
  <p><strong>Topic:</strong> ${plan.topic}</p>
  <p><strong>Sub-Topic:</strong> ${plan.sub_topic}</p>

  <h4 class="titlez">Lesson Goal:</h4>
  <p>${plan.lesson_goal}</p>

  <h4 class="titlez">Competences:</h4>
  <ul>
    <li><strong>Knowledge:</strong> ${plan.lesson_competences.knowledge}</li>
    <li><strong>Cognitive:</strong> ${plan.lesson_competences.cognitive}</li>
    <li><strong>Skill:</strong> ${plan.lesson_competences.skill}</li>
  </ul>

  <h4 class="titlez">Methodology:</h4>
  <p>${plan.methodology}</p>

  <h4 class="titlez">Assessment Strategies:</h4>
  <ul>
    <li><strong>Formative:</strong> ${plan.assessment_strategies.formative}</li>
    <li><strong>Summative:</strong> ${plan.assessment_strategies.summative}</li>
  </ul>

  <h4 class="titlez">Resources:</h4>
  <p>${plan.resources}</p>

  <h4 class="titlez">Learning Environment Setup:</h4>
  <ul>
    <li><strong>Natural:</strong> ${plan.learning_environment_setup.natural}</li>
    <li><strong>Artificial:</strong> ${plan.learning_environment_setup.artificial}</li>
    <li><strong>Technological:</strong> ${plan.learning_environment_setup.technological}</li>
  </ul>

  <h4 class="titlez">Prior Knowledge:</h4>
  <p>${plan.prior_knowledge}</p>

  <h4 class="titlez">Interdisciplinary Connections:</h4>
  <ul>
    <li><strong>Science:</strong> ${plan.interdisciplinary_connections.competence_1}</li>
    <li><strong>Life Skills:</strong> ${plan.interdisciplinary_connections.competence_2}</li>
    <li><strong>Language:</strong> ${plan.interdisciplinary_connections.competence_3}</li>
  </ul>

  <h4 class="titlez now">Lesson Progression:</h4>
  <table>
    <thead>
      <tr><th>Stage</th><th>Teacher Activity</th><th>Pupil Activity</th><th>Competences</th><th>Assessment</th></tr>
    </thead>

<tbody>
  <tr>
    <td class="stage">Introduction</td>
    <td>
      <strong>Teacher Activity:</strong> ${progression.introduction.teacher_activity}<br>
      <strong>Pupil Activity:</strong> ${progression.introduction.pupil_activity}<br>
      <strong>Targeted Competences:</strong> ${progression.introduction.targeted_competences}<br>
      <strong>Assessment Criteria:</strong> ${progression.introduction.assessment_criteria}
    </td>
  </tr>
  <tr>
    <td class="stage">Development</td>
    <td>
      <strong>Teacher Activity:</strong> ${progression.development.teacher_activity}<br>
      <strong>Pupil Activity:</strong> ${progression.development.pupil_activity}<br>
      <strong>Targeted Competences:</strong> ${progression.development.targeted_competences}<br>
      <strong>Assessment Criteria:</strong> ${progression.development.assessment_criteria}
    </td>
  </tr>
  <tr>
    <td class="stage">Explanation</td>
    <td>
      <strong>Teacher Activity:</strong> ${progression.explanation.teacher_activity}<br>
      <strong>Pupil Activity:</strong> ${progression.explanation.pupil_activity}<br>
      <strong>Targeted Competences:</strong> ${progression.explanation.targeted_competences}<br>
      <strong>Assessment Criteria:</strong> ${progression.explanation.assessment_criteria}
    </td>
  </tr>
  <tr>
    <td class="stage">Synthesis</td>
    <td>
      <strong>Teacher Activity:</strong> ${progression.synthesis.teacher_activity}<br>
      <strong>Pupil Activity:</strong> ${progression.synthesis.pupil_activity}<br>
      <strong>Targeted Competences:</strong> ${progression.synthesis.targeted_competences}<br>
      <strong>Assessment Criteria:</strong> ${progression.synthesis.assessment_criteria}
    </td>
  </tr>
  <tr>
    <td class="stage">Conclusion and Evaluation</td>
    <td>
      <strong>Teacher Activity:</strong> ${progression.conclusion_and_evaluation.teacher_activity}<br>
      <strong>Pupil Activity:</strong> ${progression.conclusion_and_evaluation.pupil_activity}<br>
      <strong>Targeted Competences:</strong> ${progression.conclusion_and_evaluation.targeted_competences}<br>
      <strong>Assessment Criteria:</strong> ${progression.conclusion_and_evaluation.assessment_criteria}
    </td>
  </tr>
</tbody>
  </table>

  <h4 class="titlez">Competence Continuity Strategy:</h4>
  <p>${plan.competence_continuity_and_strategy}</p>

  <h4 class="titlez">Evaluation:</h4>
  <p>${plan.evaluation}</p>

  <div class="buttons">
    <button onclick="downloadPlan('${plan.title}')">Download</button>

    <div class="blogcomments">
      <a href="mailto:flyingwingsacademy7@gmail.com?subject=${titlePrefix} - ${plan.topic}&body=Greetings Madam Bridget,%0D%0A%0D%0AI hope this email finds you well. %0D%0A%0D%0AI would like to submit the evaluation of ${titlePrefix} - ${plan.topic} lesson:%0D%0A%0D%0AWas the Lesson taught? [Yes/No]%0D%0A%0D%0AIf No, state the reason:%0D%0A%0D%0AIf Yes, then answer the following:%0D%0A1. Were the objectives met? [Yes/No]%0D%0A2. Learners' performance? [Good/Average/Not Good]%0D%0A3. Recommendation? [Proceed/Repeat]%0D%0A%0D%0AAdditional comments:%0D%0A%0D%0AEvaluation Completed.%0D%0ABest regards,%0D%0A${plan.teacher}">Evaluation</a>
    </div>
  </div>
`;

lessonPlansContainer.appendChild(card);
    
    */
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
const toggleSearchIconing = document.getElementById('toggleSearch');
toggleSearchIconing.addEventListener('click', toggleSearch);