// Function to retrieve questions from localStorage
function getQuestionsFromLocalStorage() {
    const questionsString = localStorage.getItem('displayedQuestions');
    if (questionsString) {
        return JSON.parse(questionsString); // Parse the JSON string to an array
    }
    return null; // Return null if no data is found
}

// Helper function to check if all values in an array are the same
function checkUniformity(values) {
    return values.every(value => value === values[0]);
}

// Function to display class, subject, term, and part, and load class image
function displayTestDetails() {
    const questions = getQuestionsFromLocalStorage();
    if (questions && questions.length > 0) {
        // Collect all classes, subjects, terms, and parts from the questions
        const classes = questions.map(q => q.class);
        const subjects = questions.map(q => q.subject);
        const terms = questions.map(q => q.term);
        const parts = questions.map(q => q.part);

        // Determine what to display based on uniformity
        const className = checkUniformity(classes) ? classes[0] : "All Classes";
        const subjectName = checkUniformity(subjects) ? subjects[0] : "All Subjects";
        const termName = checkUniformity(terms) ? terms[0] : "All Terms";
        const partName = checkUniformity(parts) ? parts[0] : "All Parts";

        // Display class, subject, term, and part
        document.getElementById('class-name').innerHTML = `${className}`;
        document.getElementById('subject').innerHTML = `${subjectName}`;
        document.getElementById('term').innerHTML = `${termName}`;
        document.getElementById('part').innerHTML = `${partName}`;

        // Set the image based on the class if it's not "All Classes"
        const classImage = document.getElementById('classImage');
        if (className !== "All Classes") {
            switch (className) {
                case "Baby Birds":
                classImage.src = "../images/Classes_1.png"; // Path to Baby Birds image
                break;
            case "Sky Sprouts":
                classImage.src = "../images/Classes_2.png"; // Path to Baby Birds image
                break;
            case "Nestlings Navigators":
                classImage.src = "../images/Classes_3.png"; // Path to Baby Birds image
                break;
            case "Feather Flyers":
                classImage.src = "../images/Classes_4.png"; // Path to Baby Birds image
                break;
            case "Cloud Chicks":
                classImage.src = "../images/Classes_5.png"; // Path to Cloud Chicks image
                break;
            case "Wing Whiz":
                classImage.src = "../images/Classes_6.png"; // Path to Wing Whiz image
                break;
            case "Sky Soarers":
                classImage.src = "../images/Classes_7.png"; // Path to Baby Birds image
                break;
            case "Avian Aces":
                classImage.src = "../images/Classes_8.png"; // Path to Cloud Chicks image
                break;
            case "Nimbus Navigators":
                classImage.src = "../images/Classes_9.png"; // Path to Wing Whiz image
                break;
            // Add more cases for other classes if needed
            default:
                classImage.src = "../images/flyacade.png"; // Default image if class doesn't match
                break;
        }
        } else {
            classImage.src = "../images/flyacade.png"; // Display an image for mixed classes
        }
    } else {
        console.error('No questions data found in localStorage');
    }
}

// Call this function to display details and image when the page loads
document.addEventListener('DOMContentLoaded', displayTestDetails);