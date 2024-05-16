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
    const allLessonPlans = [...lessonPlans];//, ...lessonPlans2, ...lessonPlans3, ...lessonPlans4, ...lessonPlans5, ...lessonPlans6, ...lessonPlans7, ...lessonPlans8, ...lessonPlans9, ...lessonPlans10, ...lessonPlans11, ...lessonPlans12, ...lessonPlans13, ...lessonPlans14, ...lessonPlans15, ...lessonPlans16, ...lessonPlans17, ...lessonPlans18, ...lessonPlans19, ...lessonPlans20, ...lessonPlans21, ...lessonPlans22, ...lessonPlans23, ...lessonPlans24, ...lessonPlans25, ...lessonPlans26, ...lessonPlans27, ...lessonPlans28, ...lessonPlans29, ...lessonPlans30, ...lessonPlans31, ...lessonPlans32, ...lessonPlans33, ...lessonPlans34, ...lessonPlans35, ...lessonPlans36, ...lessonPlans37, ...lessonPlans38, ...lessonPlans39, ...lessonPlans40, ...lessonPlans41, ...lessonPlans42, ...lessonPlans43, ...lessonPlans44, ...lessonPlans45, ...lessonPlans46, ...lessonPlans47, ...lessonPlans48, ...lessonPlans49, ...lessonPlans50, ...lessonPlans51, ...lessonPlans52, ...lessonPlans53, ...lessonPlans54, ...lessonPlans55, ...lessonPlans56, ...lessonPlans57, ...lessonPlans58, ...lessonPlans59, ...lessonPlans60, ...lessonPlans61, ...lessonPlans62, ...lessonPlans63, ...lessonPlans64, ...lessonPlans65, ...lessonPlans66,];

    const filteredLessonPlans = allLessonPlans.filter(plan => {
        return plan.title.toLowerCase().includes(searchTitle) &&
            plan.subject.toLowerCase().includes(searchSubject) &&
            (searchGrade === '' || plan.grade === searchGrade) &&
            (searchTerm === '' || plan.term === searchTerm) &&
            (searchWeek === '' || plan.week === searchWeek) &&
            (searchLessonNumber === '' || plan.lessonNumber === searchLessonNumber);
    });

filteredLessonPlans.forEach(plan => {
    const gradeAbbreviation = plan.grade.split(' ').map(word => word[0].toUpperCase()).join(''); // Abbreviate plan.grade
    const titlePrefix = `${gradeAbbreviation}${plan.subject.substring(0, 3)}T${plan.term}W${plan.week}L${plan.lessonNumber}`;
    const card = document.createElement('div');
    card.classList.add('lesson-plan');
    card.innerHTML = `
        <h3 class="lessonsplan">LESSON PLAN</h3>
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

            <h4 class="titlez">Materials:</h4>
            <ul>${plan.materials.map(material => `<li>${material}</li>`).join('')}</ul>
            <h4 class="titlez">Objectives:</h4>
            <ul>${plan.objectives.map(objective => `<li>${objective}</li>`).join('')}</ul>
            <h4 class="titlez">Rationale:</h4>
            <ul>${plan.rationale.map(rationale => `<li>${rationale}</li>`).join('')}</ul>
            <h4 class="titlez">Teacher Exposition:</h4>
            <ul>${plan.exposition.map(exposition => `<li>${exposition}</li>`).join('')}</ul>

            <p class="blank">LESSON DEVELOPMENT</p>
            <h4 class="titlez now">ACTIVITIES:</h4>
            <ol>${plan.activities.map(activity => `<li>${activity}</li>`).join('')}</ol>

            <h4 class="titlez">Assessments:</h4>
            <ul>${plan.assessments.map(assessment => `<li>${assessment}</li>`).join('')}</ul>
            <h4 class="titlez">Conclusion:</h4>
            <ul>${plan.conclusion.map(conclusion => `<li>${conclusion}</li>`).join('')}</ul>



            <div class="buttons">
                <button onclick="downloadPlan('${plan.title}')">Download</button>

<div class="blogcomments">
    <a href="mailto:flyingwingsacademy7@gmail.com?subject=${titlePrefix} - ${plan.topic}&body=Dear Mr. C. Mbaso,%0D%0A%0D%0AI hope this email finds you well. I would like to provide an evaluation of the recent lesson titled "${titlePrefix} - ${plan.topic}" conducted in my class.%0D%0A%0D%0A1. **Objective Evaluation:**%0D%0A   - Were the lesson objectives clearly stated at the beginning of the lesson?%0D%0A   - Were the objectives achieved by the end of the lesson?%0D%0A   - Please provide any comments or suggestions regarding the effectiveness of the lesson objectives.%0D%0A%0D%0A2. **Content and Delivery:**%0D%0A   - Did the lesson content align with the stated objectives?%0D%0A   - How engaging was the delivery of the lesson?%0D%0A   - Were the teaching methods effective in conveying the material?%0D%0A   - Were any multimedia resources used, and if so, were they helpful?%0D%0A%0D%0A3. **Student Engagement and Participation:**%0D%0A   - How well did the students engage with the lesson material?%0D%0A   - Were there any particular activities or discussions that elicited strong participation from the students?%0D%0A   - Were there any challenges in maintaining student focus or participation?%0D%0A%0D%0A4. **Assessment and Feedback:**%0D%0A   - How were student understanding and progress assessed during the lesson?%0D%0A   - Were the assessment methods appropriate for the lesson objectives?%0D%0A   - Were students provided with timely and constructive feedback on their performance?%0D%0A%0D%0A5. **Overall Impressions:**%0D%0A   - What were the strengths of the lesson?%0D%0A   - What areas could be improved for future lessons?%0D%0A   - Any additional comments or suggestions?%0D%0A%0D%0AYour feedback on this evaluation would be greatly appreciated. Thank you for your attention to this matter.%0D%0A%0D%0ABest regards,%0D%0A[Teacher's Name]">Evaluation</a>
</div>
                <button onclick="printPlan('${plan.title}')">Print</button>
            </div>
        `;
        lessonPlansContainer.appendChild(card);
    });
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