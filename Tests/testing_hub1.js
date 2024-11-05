document.addEventListener("DOMContentLoaded", function() {
  const formContainer = document.getElementById("form-container");
  const toggleFormButton = document.getElementById("toggle-form");

  toggleFormButton.addEventListener("click", function() {
    formContainer.classList.toggle("show-form");
  });

  // Close form container when clicking outside of it
  document.addEventListener("click", function(event) {
    if (!formContainer.contains(event.target) && !toggleFormButton.contains(event.target)) {
      formContainer.classList.remove("show-form");
    }
  });

  // Display questions when the page loads
  displayQuestions();

  // Display the total number of questions
  const questionCountDisplay = document.getElementById("question-count");
  if (questionCountDisplay) {
    questionCountDisplay.innerHTML = `Total Questions: ${countTotalQuestions()}`;
  }

  // Event listener for button click to generate PDF
  
  
  
  // Event listener for button click to refresh questions
  document.getElementById("refresh-questions").addEventListener("click", displayQuestions);
  
  
  
  
  
  
  // Event listener for button click to search questions
  document.getElementById("search-button").addEventListener("click", function() {
    displayQuestions();
    document.getElementById("form-container").classList.remove("show-form"); // Close form container
  });
});