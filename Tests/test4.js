// Open side navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

// Close side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Retrieve saved data from localStorage
function getSavedDataFromLocalStorage() {
    const dataString = localStorage.getItem('displayedQuestions');
    if (dataString) {
        return JSON.parse(dataString); // Parse the JSON string into an array
    }
    return []; // Return an empty array if no data is found
}

// Render saved data in the side navigation
function renderSavedDataList() {
    const savedDataList = document.getElementById('savedDataList');
    savedDataList.innerHTML = ''; // Clear any existing content

    const savedData = getSavedDataFromLocalStorage();

    if (savedData.length === 0) {
        savedDataList.innerHTML = '<li>No saved data found</li>';
        return;
    }

    savedData.forEach((data, index) => {
        const li = document.createElement('li');

        // Create link for each saved data item (entire test)
        const a = document.createElement('a');
        a.textContent = `Test ${index + 1}: ${data.class || "No Class"}`;
        a.href = "#";
        a.onclick = () => displayDataContent(data);

        // Create delete button
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' [Delete]';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = (e) => {
            e.stopPropagation(); // Prevent click event on the link
            deleteSavedData(index);
        };

        // Append link and delete button to list item
        li.appendChild(a);
        li.appendChild(deleteBtn);
        savedDataList.appendChild(li);
    });
}

// Display selected data in the main content
function displayDataContent(data) {
    // Update class, subject, term, and part
    document.getElementById('class-name').textContent = `Class: ${data.class || "No Class"}`;
    document.getElementById('subject').textContent = `Subject: ${data.subject || "No Subject"}`;
    document.getElementById('term').textContent = `Term: ${data.term || "No Term"}`;
    document.getElementById('part').textContent = `Part: ${data.part || "No Part"}`;
    document.getElementById('classImage').src = data.image || ''; // Set class image if available

    // Clear previous questions (if any)
    const testContainer = document.querySelector('.content-section');
    testContainer.innerHTML = ''; 

    // Load sections and their questions
    if (data.sections && data.sections.length > 0) {
        data.sections.forEach((section, sectionIndex) => {
            // Create a div for each section
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('section-item');
            sectionDiv.innerHTML = `<h3>Section ${sectionIndex + 1}: ${section.title || "No Title"}</h3>`;

            // Load questions for each section
            if (section.questions && section.questions.length > 0) {
                section.questions.forEach((question, index) => {
                    const questionDiv = document.createElement('div');
                    questionDiv.classList.add('question-item');
                    questionDiv.innerHTML = `
                        <p><strong>Question ${index + 1}:</strong> ${question.text || "No Question Text"}</p>
                        <ul>
                            ${question.options ? question.options.map((option, i) => `<li>${String.fromCharCode(65 + i)}. ${option}</li>`).join('') : '<li>No Options</li>'}
                        </ul>
                    `;
                    sectionDiv.appendChild(questionDiv);
                });
            } else {
                sectionDiv.innerHTML += '<p>No questions available in this section.</p>';
            }

            testContainer.appendChild(sectionDiv); // Append the section div to the main container
        });
    } else {
        testContainer.innerHTML = '<p>No sections available.</p>';
    }
}

// Delete saved data from localStorage
function deleteSavedData(index) {
    let savedData = getSavedDataFromLocalStorage();
    savedData.splice(index, 1); // Remove the selected item

    // Update localStorage with the new data
    localStorage.setItem('displayedQuestions', JSON.stringify(savedData));

    // Re-render the saved data list
    renderSavedDataList();
}

// Initialize the side navigation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderSavedDataList(); // Populate the saved data list
});