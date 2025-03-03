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

// Merge arrays from separate files into a single questionsBank array
const questionsBank = [
// Baby
/*
...babyengt1acoloringQuestions,
...babyengt1bcoloringQuestions,
...babyengt2acoloringQuestions,
...babyengt2bcoloringQuestions,
...babyengt3acoloringQuestions,*/
...babyengt3bcoloringQuestions,
// Identification
/*
...babyengt3bidentificationQuestions,
...babyengt3bidentificationQuestions,
...babyengt3bidentificationQuestions,
...babyengt3bidentificationQuestions,
...babyengt3bidentificationQuestions,*/
...babyengt3bidentificationQuestions,


// Math
// Coloring
/*
...babymatht1acoloringQuestions,
...babymatht1bcoloringQuestions,
...babymatht2acoloringQuestions,
...babymatht2bcoloringQuestions,
...babymatht3acoloringQuestions,*/
...babymatht3bcoloringQuestions,
// Counting
/*
...babymatht1acountingQuestions,
...babymatht1bcountingQuestions,
...babymatht2acountingQuestions,
...babymatht2bcountingQuestions,
...babymatht3acountingQuestions,*/
...babymatht3bcountingQuestions,
// Identification
/*
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,*/
...babymatht3bidentificationQuestions,
// Identity
/*
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,
...babymatht3bidentificationQuestions,*/
...babymatht3bidentityQuestions,


  // Middle
// English
// Multiple Choice
/*
...midengt3amultipleChoiceQuestions,
...midengt3bmultipleChoiceQuestions,
...midengt3amultipleChoiceQuestions,
...midengt3bmultipleChoiceQuestions,*/
...midengt3amultipleChoiceQuestions,
...midengt3bmultipleChoiceQuestions,
// True or False
/*
...midengt3atrueFalseQuestions,
...midengt3btrueFalseQuestions,
...midengt3atrueFalseQuestions,
...midengt3btrueFalseQuestions,*/
...midengt3atrueFalseQuestions,
...midengt3btrueFalseQuestions,
// Fill
/*
...midengt3afillInTheBlankQuestions,
...midengt3bfillInTheBlankQuestions,
...midengt3afillInTheBlankQuestions,
...midengt3bfillInTheBlankQuestions,*/
...midengt3afillInTheBlankQuestions,
...midengt3bfillInTheBlankQuestions,
// Matching
/*
...midengt3amatchingQuestions,
...midengt3bmatchingQuestions,
...midengt3amatchingQuestions,
...midengt3bmatchingQuestions,*/
...midengt3amatchingQuestions,
...midengt3bmatchingQuestions,


// Handwriting
/*
...midlitt3bhandwritingQuestions,
...midlitt3bhandwritingQuestions,
...midlitt3bhandwritingQuestions,
...midlitt3bhandwritingQuestions,
...midlitt3bhandwritingQuestions,*/
...midlitt3bhandwritingQuestions,

// Handwriting
/*
...midlitt3breadingQuestions,
...midlitt3breadingQuestions,
...midlitt3breadingQuestions,
...midlitt3breadingQuestions,
...midlitt3breadingQuestions,*/
...midlitt3breadingQuestions,

// Literacy
// Tracing

...midlitt1atracingQuestions,
/*...midlitt3btracingQuestions,
...midlitt3btracingQuestions,
...midlitt3btracingQuestions,
...midlitt3btracingQuestions,*/
...midlitt3btracingQuestions,
// Expressive Arts
// Tracing
...midexpt1atracingQuestions,
...midexpt1btracingQuestions,
...midexpt2atracingQuestions,
...midexpt2btracingQuestions,
...midexpt3atracingQuestions,
...midexpt3btracingQuestions,


  // Science
  ...midscit1amultipleChoiceQuestions,
  ...midscit1bmultipleChoiceQuestions,
  ...midscit2amultipleChoiceQuestions,
  ...midscit2bmultipleChoiceQuestions,
  ...midscit3amultipleChoiceQuestions,
  ...midscit3bmultipleChoiceQuestions,

  // Science
/*  ...midscit3bimageBasedQuestions,
  ...midscit3bimageBasedQuestions,
  ...midscit3bimageBasedQuestions,
  ...midscit3bimageBasedQuestions,*/
  ...midscit3aimageBasedQuestions,
  ...midscit3bimageBasedQuestions,


  // Science
  // Reception
  // Multiple Choice
  ...recscit2amultipleChoiceQuestions,
  ...recscit2bmultipleChoiceQuestions, 
  ...recscit3amultipleChoiceQuestions,
// Fill in the Blanks
...recscit3afillInTheBlankQuestions,
// True or False
...recscit3atrueFalseQuestions,
// Matching
...recscit3amatchingQuestions,

  // English
  // Multiple Choice
//  ...recengt2amultipleChoiceQuestions,
//  ...recengt2bmultipleChoiceQuestions, 
  ...recengt3amultipleChoiceQuestions,
// Fill in the Blanks
...recengt3afillInTheBlankQuestions,
// True or False
...recengt3atrueFalseQuestions,
// Matching
...recengt3amatchingQuestions,

  // Literacy
  // Multiple Choice
//  ...recengt2amultipleChoiceQuestions,
//  ...recengt2bmultipleChoiceQuestions, 
//  ...recengt3amultipleChoiceQuestions,
// Fill in the Blanks
//...recengt3afillInTheBlankQuestions,
// True or False
//...recengt3atrueFalseQuestions,
// Matching
//...recengt3amatchingQuestions,
// reading
...reclitt3breadingQuestions,



  // Social Studies
  // Multiple Choice
//  ...recengt2amultipleChoiceQuestions,
//  ...recengt2bmultipleChoiceQuestions, 
  ...recsst3amultipleChoiceQuestions,
  ...recsst3bmultipleChoiceQuestions,
// Fill in the Blanks
...recsst3afillInTheBlankQuestions,
...recsst3bfillInTheBlankQuestions,
// True or False
...recsst3atrueFalseQuestions,
...recsst3btrueFalseQuestions,
// Matching
...recsst3amatchingQuestions,
...recsst3bmatchingQuestions,

  // Expressive Arts
  // Multiple Choice
//  ...recengt2amultipleChoiceQuestions,
//  ...recengt2bmultipleChoiceQuestions, 
  ...recexpt3amultipleChoiceQuestions,
// Fill in the Blanks
...recexpt3afillInTheBlankQuestions,
// True or False
...recexpt3atrueFalseQuestions,
// Matching
...recexpt3amatchingQuestions,

  // SP2
  // Image Based
  ...recsp2t1aimageBasedQuestions,
  ...recsp2t1bimageBasedQuestions,
  ...recsp2t2aimageBasedQuestions,
  ...recsp2t2bimageBasedQuestions,
  ...recsp2t3aimageBasedQuestions,
  ...recsp2t3bimageBasedQuestions,


  // Grade 1
  // English
  ...g1engt1amultipleChoiceQuestions,
  ...g1engt1bmultipleChoiceQuestions,
  ...g1engt2amultipleChoiceQuestions,
  ...g1engt2bmultipleChoiceQuestions,
  ...g1engt3amultipleChoiceQuestions,
  ...g1engt3bmultipleChoiceQuestions,
// Fill in the Blanks
...g1engt3afillInTheBlankQuestions,
// True or False
...g1scit3atrueFalseQuestions,
// Matching
...g1scit3amatchingQuestions,
// Comprehension
...g1engt3acomprehensionQuestions,

// Literacy
...g1litt1amultipleChoiceQuestions,
...g1litt1bmultipleChoiceQuestions,
...g1litt2amultipleChoiceQuestions,
...g1litt2bmultipleChoiceQuestions,
...g1litt3amultipleChoiceQuestions,
...g1litt3bmultipleChoiceQuestions,
// Reading
/*...g1litt1areadingQuestions,
...g1litt1breadingQuestions,
...g1litt2areadingQuestions,
...g1litt2breadingQuestions,*/
//...g1litt3areadingQuestions,
...g1litt3breadingQuestions,

  // Science
  // Multiple Choice
  ...g1scit1amultipleChoiceQuestions,
  ...g1scit1bmultipleChoiceQuestions,
  ...g1scit2amultipleChoiceQuestions,
  ...g1scit2bmultipleChoiceQuestions,
  ...g1scit3amultipleChoiceQuestions,
  ...g1scit3bmultipleChoiceQuestions,
  // True or False
  ...g1scit1atrueFalseQuestions,
  ...g1scit1btrueFalseQuestions,
  ...g1scit2atrueFalseQuestions,
  ...g1scit2btrueFalseQuestions,
  ...g1scit3atrueFalseQuestions,
  ...g1scit3btrueFalseQuestions,
  // One Word Questions
  ...g1scit1aoneWordQuestions,
  ...g1scit1boneWordQuestions,
  ...g1scit2aoneWordQuestions,
  ...g1scit2boneWordQuestions,
  ...g1scit3aoneWordQuestions,
  ...g1scit3boneWordQuestions,
  // Fill in the Blank Questions
  ...g1scit1afillInTheBlankQuestions,
  ...g1scit1bfillInTheBlankQuestions,
  ...g1scit2afillInTheBlankQuestions,
  ...g1scit2bfillInTheBlankQuestions,
  ...g1scit3afillInTheBlankQuestions,
  ...g1scit3bfillInTheBlankQuestions,
  // Matching Questions
  ...g1scit1amatchingQuestions,
  ...g1scit1bmatchingQuestions,
  ...g1scit2amatchingQuestions,
  ...g1scit2bmatchingQuestions,
  ...g1scit3amatchingQuestions,
  ...g1scit3bmatchingQuestions,
// Image
  ...g1scit3bimageBasedQuestions,

// Social Studies
  // True or False
  ...g1sst1atrueFalseQuestions,
  ...g1sst1btrueFalseQuestions,
  ...g1sst2atrueFalseQuestions,
  ...g1sst2btrueFalseQuestions,
  ...g1sst3atrueFalseQuestions,
  ...g1sst3btrueFalseQuestions,
  // Fill
/*  ...g1sst1afillInTheBlankQuestions,
  ...g1sst1btrueFalseQuestions,
  ...g1sst2atrueFalseQuestions,
  ...g1sst2btrueFalseQuestions,*/
  ...g1sst3afillInTheBlankQuestions,
  ...g1sst3bfillInTheBlankQuestions,
// Matching
...g1sst3amatchingQuestions,
...g1sst3bmatchingQuestions,
// Multiple Choice
...g1sst3amultipleChoiceQuestions,
...g1sst3bmultipleChoiceQuestions,

// Math
  // True or False
  ...g1matht1atrueFalseQuestions,
  ...g1matht1btrueFalseQuestions,
  ...g1matht2atrueFalseQuestions,
  ...g1matht2btrueFalseQuestions,
  ...g1matht3atrueFalseQuestions,
  ...g1matht3atrueFalseQuestions,

  ...g1matht3amultipleChoiceQuestions,

  ...g1matht3aoneWordQuestions,


// Primary
/*
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,*/
...g1matht3bprimaryQuestions,
// Time
/*
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,
...g1matht3bprimaryQuestions,*/
...g1matht3btimeQuestions,

  // CTS
  // Multiple Choice
  ...g1ctst1amultipleChoiceQuestions,
  ...g1ctst1bmultipleChoiceQuestions,
  ...g1ctst2amultipleChoiceQuestions,
  ...g1ctst2bmultipleChoiceQuestions,
  ...g1ctst3amultipleChoiceQuestions,
  ...g1ctst3bmultipleChoiceQuestions,
  // True or False
  ...g1ctst1atrueFalseQuestions,
  ...g1ctst1btrueFalseQuestions,
  ...g1ctst2atrueFalseQuestions,
  ...g1ctst2btrueFalseQuestions,
  ...g1ctst3atrueFalseQuestions,
  ...g1ctst3btrueFalseQuestions,
  // Fill in the Blank Questions
  ...g1ctst1afillInTheBlankQuestions,
  ...g1ctst1bfillInTheBlankQuestions,
  ...g1ctst2afillInTheBlankQuestions,
  ...g1ctst2bfillInTheBlankQuestions,
  ...g1ctst3afillInTheBlankQuestions,
  ...g1ctst3bfillInTheBlankQuestions,
  // Matching Questions
  ...g1ctst1amatchingQuestions,
  ...g1ctst1bmatchingQuestions,
  ...g1ctst2amatchingQuestions,
  ...g1ctst2bmatchingQuestions,
  ...g1ctst3amatchingQuestions,
  ...g1ctst3bmatchingQuestions,

  // SP1
  // Search Word
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g1sp1t3bwordSearchQuestions,

  // SP2
  // Image Based
  ...g1sp2t1aimageBasedQuestions,
  ...g1sp2t1bimageBasedQuestions,
  ...g1sp2t2aimageBasedQuestions,
  ...g1sp2t2bimageBasedQuestions,
  ...g1sp2t3aimageBasedQuestions,
  ...g1sp2t3bimageBasedQuestions,


  // Grade 2
  // Multiple Choice
  // Math
/*  ...g2matht1amultipleChoiceQuestions,
  ...g2matht1bmultipleChoiceQuestions,
  ...g2matht2amultipleChoiceQuestions,
  ...g2matht2bmultipleChoiceQuestions,*/
  ...g2matht3amultipleChoiceQuestions,
//  ...g2matht3bmultipleChoiceQuestions,
// One Word
...g2matht3aoneWordQuestions,

// English
// Multiple Choice
/*...g2engt1amultipleChoiceQuestions,
...g2engt1bmultipleChoiceQuestions,
...g2engt2amultipleChoiceQuestions,
...g2engt2bmultipleChoiceQuestions,*/
...g2engt3amultipleChoiceQuestions,
//...g2engt3bmultipleChoiceQuestions,
// True or False
...g2engt3atrueFalseQuestions,
// Fill in the Blanks
...g2engt2afillInTheBlankQuestions,
// Matching
...g2engt3amatchingQuestions,
// Comprehension
...g2engt3acomprehensionQuestions,

// Literacy
...g2litt1amultipleChoiceQuestions,
...g2litt1bmultipleChoiceQuestions,
...g2litt2amultipleChoiceQuestions,
...g2litt2bmultipleChoiceQuestions,
...g2litt3amultipleChoiceQuestions,
...g2litt3bmultipleChoiceQuestions,


  // Science
  // Multiple Choice
  ...g2scit1amultipleChoiceQuestions,
  ...g2scit1bmultipleChoiceQuestions,
  ...g2scit2amultipleChoiceQuestions,
  ...g2scit2bmultipleChoiceQuestions,
  ...g2scit3amultipleChoiceQuestions,
  ...g2scit3bmultipleChoiceQuestions,
  // True or False
  ...g2scit1atrueFalseQuestions,
  ...g2scit1btrueFalseQuestions,
  ...g2scit2atrueFalseQuestions,
  ...g2scit2btrueFalseQuestions,
  ...g2scit3atrueFalseQuestions,
  ...g2scit3btrueFalseQuestions,
// Fill in the Blanks
/*
   ...g2scit1afillInTheBlankQuestions,
  ...g2scit1bfillInTheBlankQuestions,
  ...g2scit2afillInTheBlankQuestions,
  ...g2scit2bfillInTheBlankQuestions,
*/
  ...g2scit3afillInTheBlankQuestions,
  ...g2scit3bfillInTheBlankQuestions,
// Matching
/*
  ...g2scit1amatchingQuestions,
  ...g2scit1bmatchingQuestions,
  ...g2scit2amatchingQuestions,
  ...g2scit2bmatchingQuestions,*/
  ...g2scit3amatchingQuestions,
  ...g2scit3bmatchingQuestions,
 
  // Social Studies
  // True or False
  ...g2sst1atrueFalseQuestions,
  ...g2sst1btrueFalseQuestions,
  ...g2sst2atrueFalseQuestions,
  ...g2sst2btrueFalseQuestions,
  ...g2sst3atrueFalseQuestions,
  ...g2sst3btrueFalseQuestions,
  // Multiple Choice
/*  ...g2sst1atrueFalseQuestions,
  ...g2sst1btrueFalseQuestions,
  ...g2sst2atrueFalseQuestions,
  ...g2sst2btrueFalseQuestions,*/
  ...g2sst3amultipleChoiceQuestions,
  ...g2sst3bmultipleChoiceQuestions,
  // Fill Blanks
/*  ...g2sst1atrueFalseQuestions,
  ...g2sst1btrueFalseQuestions,
  ...g2sst2atrueFalseQuestions,
  ...g2sst2btrueFalseQuestions,*/
  ...g2sst3afillInTheBlankQuestions,
  ...g2sst3bfillInTheBlankQuestions,
  // Matching
/*  ...g2sst1atrueFalseQuestions,
  ...g2sst1btrueFalseQuestions,
  ...g2sst2atrueFalseQuestions,
  ...g2sst2btrueFalseQuestions,*/
  ...g2sst3amatchingQuestions,
  ...g2sst3bmatchingQuestions,

  // CTS
  // True or False
  ...g2ctst1atrueFalseQuestions,
  ...g2ctst1btrueFalseQuestions,
  ...g2ctst2atrueFalseQuestions,
  ...g2ctst2btrueFalseQuestions,
  ...g2ctst3atrueFalseQuestions,
  ...g2ctst3btrueFalseQuestions,
  // Multiple Choice
  ...g2ctst1amultipleChoiceQuestions,
  ...g2ctst1amultipleChoiceQuestions,
  ...g2ctst2amultipleChoiceQuestions,
  ...g2ctst2bmultipleChoiceQuestions,
  ...g2ctst3amultipleChoiceQuestions,
  ...g2ctst3bmultipleChoiceQuestions,
  // Fill
  ...g2ctst1afillInTheBlankQuestions,
  ...g2ctst1afillInTheBlankQuestions,
  ...g2ctst2afillInTheBlankQuestions,
  ...g2ctst2bfillInTheBlankQuestions,
  ...g2ctst3afillInTheBlankQuestions,
  ...g2ctst3bfillInTheBlankQuestions,
  // Matching
  ...g2ctst1amatchingQuestions,
  ...g2ctst1bmatchingQuestions,
  ...g2ctst2amatchingQuestions,
  ...g2ctst2bmatchingQuestions,
  ...g2ctst3amatchingQuestions,
  ...g2ctst3bmatchingQuestions,

  // SP1
  // Search Word
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g2sp1t3bwordSearchQuestions,
  // Fill in the Blanks
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g2sp1t3bfillInTheBlankQuestions,

  // SP2
  // Image Based
  ...g2sp2t1aimageBasedQuestions,
  ...g2sp2t1bimageBasedQuestions,
  ...g2sp2t2aimageBasedQuestions,
  ...g2sp2t2bimageBasedQuestions,
  ...g2sp2t3aimageBasedQuestions,
  ...g2sp2t3bimageBasedQuestions,


  // Grade 3
// English
// Multiple Choice
...g3engt3amultipleChoiceQuestions,
// True or False
...g3engt3atrueFalseQuestions,
// Fill
...g3engt3afillInTheBlankQuestions,
// Marching
...g3engt3amatchingQuestions,
// Comprehension
...g3engt3acomprehensionQuestions,

  // SP1
  // Multiple Choice
  ...g3sp1t1amultipleChoiceQuestions,
  ...g3sp1t1bmultipleChoiceQuestions,
  ...g3sp1t2amultipleChoiceQuestions,
  ...g3sp1t2bmultipleChoiceQuestions,
  ...g3sp1t3amultipleChoiceQuestions,
  ...g3sp1t3bmultipleChoiceQuestions,
  // SP1
  // Search Word
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g3sp1t3bwordSearchQuestions,


  // Science
  // Multiple Choice
  ...g3scit1amultipleChoiceQuestions,
  ...g3scit1bmultipleChoiceQuestions,
  ...g3scit2amultipleChoiceQuestions,
  ...g3scit2bmultipleChoiceQuestions,
  ...g3scit3amultipleChoiceQuestions,
  ...g3scit3bmultipleChoiceQuestions,
// True or False
  ...g3scit1atrueFalseQuestions,
  ...g3scit1btrueFalseQuestions,
  ...g3scit2atrueFalseQuestions,
  ...g3scit2btrueFalseQuestions,
  ...g3scit3atrueFalseQuestions,
  ...g3scit3btrueFalseQuestions,
// Fill in the Blanks
  ...g3scit3afillInTheBlankQuestions,
// Matching
  ...g3scit3amatchingQuestions,

// Social Studies
  // Multiple Choice
//  ...g3sst1amultipleChoiceQuestions,
//  ...g3sst1bmultipleChoiceQuestions,
//  ...g3sst2amultipleChoiceQuestions,
//  ...g3sst2bmultipleChoiceQuestions,
  ...g3sst3amultipleChoiceQuestions,
  ...g3sst3bmultipleChoiceQuestions,
// True or False
  ...g3sst1atrueFalseQuestions, 
...g3sst1btrueFalseQuestions, 
...g3sst2atrueFalseQuestions, 
...g3sst2btrueFalseQuestions, 
...g3sst3atrueFalseQuestions, 
...g3sst3btrueFalseQuestions,
// Fill in the Blank
...g3sst3afillInTheBlankQuestions,
...g3sst3bfillInTheBlankQuestions,
// Matching
...g3sst3amatchingQuestions,
...g3sst3bmatchingQuestions,

// CTS
  // Multiple Choice
  ...g3ctst1amultipleChoiceQuestions, 
...g3ctst1bmultipleChoiceQuestions, 
...g3ctst2amultipleChoiceQuestions, 
...g3ctst2bmultipleChoiceQuestions, 
...g3ctst3amultipleChoiceQuestions, 
...g3ctst3bmultipleChoiceQuestions,
// True or False
  ...g3ctst1atrueFalseQuestions, 
...g3ctst1btrueFalseQuestions, 
...g3ctst2atrueFalseQuestions,
...g3ctst2btrueFalseQuestions, 
...g3ctst3atrueFalseQuestions,
...g3ctst3btrueFalseQuestions,
// Fill in the Blank
...g3ctst1afillInTheBlankQuestions, 
...g3ctst1bfillInTheBlankQuestions,
...g3ctst2afillInTheBlankQuestions,
...g3ctst2bfillInTheBlankQuestions, 
...g3ctst3afillInTheBlankQuestions,
...g3ctst3bfillInTheBlankQuestions,
// Matching
...g3ctst1amatchingQuestions, 
...g3ctst1bmatchingQuestions, 
...g3ctst2amatchingQuestions, 
...g3ctst2bmatchingQuestions,
...g3ctst3amatchingQuestions, 
...g3ctst3bmatchingQuestions,

  // Math
  // Multiple Choice
/*  ...g3matht1amultipleChoiceQuestions,
  ...g3matht1bmultipleChoiceQuestions,
  ...g3matht2amultipleChoiceQuestions,
  ...g3matht2bmultipleChoiceQuestions,*/
  ...g3matht3amultipleChoiceQuestions,
//  ...g3matht3bmultipleChoiceQuestions,
// True or False
/*  ...g3sst1atrueFalseQuestions,
  ...g3sst1btrueFalseQuestions,
  ...g3sst2atrueFalseQuestions,
  ...g3sst2btrueFalseQuestions,*/
//  ...g3matht3atrueFalseQuestions,
//  ...g3sst3btrueFalseQuestions,
// Fill in the Blank
//...g3matht3afillInTheBlankQuestions,
// One Word
...g3matht3aoneWordQuestions,

  // SP1
  // Sudoku
 /*  ...g3sp1t1bsudokuQuestions, 
...g3sp1t1bsudokuQuestions,
...g3sp1t2asudokuQuestions, 
...g3sp1t2bsudokuQuestions, 
...g3sp1t3asudokuQuestions,
...g3sp1t3bsudokuQuestions,
*/
  // SP2
  // Image Based
  ...g3sp2t1aimageBasedQuestions, 
...g3sp2t1bimageBasedQuestions, 
...g3sp2t2aimageBasedQuestions, 
...g3sp2t2bimageBasedQuestions, 
...g3sp2t3aimageBasedQuestions, 
...g3sp2t3bimageBasedQuestions,


// Grade 4
// Science
  ...g4scit1amultipleChoiceQuestions, 
...g4scit1bmultipleChoiceQuestions,
...g4scit2amultipleChoiceQuestions, 
...g4scit2bmultipleChoiceQuestions, 
...g4scit3amultipleChoiceQuestions, 
...g4scit3bmultipleChoiceQuestions,
// True or False
  ...g4scit1atrueFalseQuestions,
...g4scit1btrueFalseQuestions, 
...g4scit2atrueFalseQuestions, 
...g4scit2btrueFalseQuestions, 
...g4scit3atrueFalseQuestions, 
...g4scit3btrueFalseQuestions,
// Fill in the Blanks
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4scit3afillInTheBlankQuestions,
//  ...g4scit3btrueFalseQuestions,
// Matching
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4scit3amatchingQuestions,
//  ...g4scit3btrueFalseQuestions,

// English
// Multiple Choice
/*  ...g4engt1amultipleChoiceQuestions,
  ...g4engt1bmultipleChoiceQuestions,
  ...g4engt2amultipleChoiceQuestions,
  ...g4engt2bmultipleChoiceQuestions,*/
  ...g4engt3amultipleChoiceQuestions,
//  ...g4engt3bmultipleChoiceQuestions,
// True or False
/*  ...g4scit1atrueFalseQuestions,
  ...g4scit1btrueFalseQuestions,
  ...g4scit2atrueFalseQuestions,
  ...g4scit2btrueFalseQuestions,*/
  ...g4engt3atrueFalseQuestions,
//  ...g4scit3btrueFalseQuestions,
// Fill in the Blanks
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4engt3afillInTheBlankQuestions,
//  ...g4scit3btrueFalseQuestions,
// Matching
//  ...g4scit1atrueFalseQuestions,
//  ...g4scit1btrueFalseQuestions,
//  ...g4scit2atrueFalseQuestions,
//  ...g4scit2btrueFalseQuestions,
  ...g4engt3acomprehensionQuestions,
//  ...g4scit3btrueFalseQuestions,

// Social Studies
// Multiple Choice
...g4sst3amultipleChoiceQuestions,
...g4sst3bmultipleChoiceQuestions,
// True or False
...g4sst3atrueFalseQuestions,
...g4sst3btrueFalseQuestions,
// Fill in the Blanks
...g4sst3afillInTheBlankQuestions,
...g4sst3bfillInTheBlankQuestions,
// Matching
...g4sst3amatchingQuestions,
...g4sst3bmatchingQuestions,

// CTS
// Multiple Choice
...g4ctst1amultipleChoiceQuestions,
...g4ctst1bmultipleChoiceQuestions, 
...g4ctst2amultipleChoiceQuestions,
...g4ctst2bmultipleChoiceQuestions, 
...g4ctst3amultipleChoiceQuestions, 
...g4ctst3bmultipleChoiceQuestions,
// True or False
...g4ctst1atrueFalseQuestions, 
...g4ctst1btrueFalseQuestions, 
...g4ctst2atrueFalseQuestions,
...g4ctst2btrueFalseQuestions, 
...g4ctst3atrueFalseQuestions,
...g4ctst3btrueFalseQuestions,
// Fill in the Blanks
...g4ctst1afillInTheBlankQuestions, 
...g4ctst1bfillInTheBlankQuestions, 
...g4ctst2afillInTheBlankQuestions,
...g4ctst2bfillInTheBlankQuestions, 
...g4ctst3afillInTheBlankQuestions,
...g4ctst3bfillInTheBlankQuestions,
// Matching
...g4ctst1amatchingQuestions, 
...g4ctst1bmatchingQuestions, 
...g4ctst2amatchingQuestions, 
...g4ctst2bmatchingQuestions, 
...g4ctst3amatchingQuestions, 
...g4ctst3bmatchingQuestions,

// Mathematics
// Multiple Choice
/*...g4ctst1amultipleChoiceQuestions,
...g4ctst1bmultipleChoiceQuestions,
...g4ctst2amultipleChoiceQuestions,
...g4ctst2bmultipleChoiceQuestions,*/
...g4matht3amultipleChoiceQuestions,
//...g4ctst3bmultipleChoiceQuestions,
// True or False
/*...g4ctst1atrueFalseQuestions,
...g4ctst1btrueFalseQuestions,
...g4ctst2atrueFalseQuestions,
...g4ctst2btrueFalseQuestions,*/
//...g4matht3atrueFalseQuestions,
//...g4ctst3btrueFalseQuestions,
// Fill in the Blanks
/*...g4ctst1afillInTheBlankQuestions,
...g4ctst1bfillInTheBlankQuestions,
...g4ctst2afillInTheBlankQuestions,
...g4ctst2bfillInTheBlankQuestions,*/
//...g4matht3afillInTheBlankQuestions,
//...g4ctst3bfillInTheBlankQuestions,
// Matching
/*...g4ctst1amatchingQuestions,
...g4ctst1bmatchingQuestions,
...g4ctst2amatchingQuestions,
...g4ctst2bmatchingQuestions,*/
...g4matht3aoneWordQuestions,
//...g4ctst3bmatchingQuestions,

  // SP1
  // Sudoku
 /*  ...g4sp1t1bsudokuQuestions, 
...g4sp1t1bsudokuQuestions,
...g4sp1t2asudokuQuestions, 
...g4sp1t2bsudokuQuestions, 
...g4sp1t3asudokuQuestions,
...g4sp1t3bsudokuQuestions,*/
  // SP1
  // Search Word
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g4sp1t3bwordSearchQuestions,
  // Multiple Choice
/*  ...g4sp1t3bmultipleChoiceQuestions,
  ...g4sp1t3bmultipleChoiceQuestions,
  ...g4sp1t3bmultipleChoiceQuestions,
  ...g4sp1t3bmultipleChoiceQuestions,
  ...g4sp1t3bmultipleChoiceQuestions,*/
  ...g4sp1t3bmultipleChoiceQuestions,


  // SP2
  // Image Based
  ...g4sp2t1aimageBasedQuestions, 
...g4sp2t1bimageBasedQuestions, 
...g4sp2t2aimageBasedQuestions, 
...g4sp2t2bimageBasedQuestions, 
...g4sp2t3aimageBasedQuestions,
...g4sp2t3bimageBasedQuestions,


  // Grade 5
  // Science
  // Multiple Choice
  ...g5scit1amultipleChoiceQuestions, 
...g5scit1bmultipleChoiceQuestions,
...g5scit2amultipleChoiceQuestions, 
...g5scit2bmultipleChoiceQuestions, 
...g5scit3amultipleChoiceQuestions, 
...g5scit3bmultipleChoiceQuestions,
  // One Word Questions
  ...g5scit1amatchingQuestions, 
...g5scit1bmatchingQuestions, 
...g5scit2amatchingQuestions, 
...g5scit2bmatchingQuestions, 
...g5scit3amatchingQuestions, 
...g5scit3bmatchingQuestions,
// Fill in the Blanks
/*...g5scit1afillInTheBlankQuestions,
...g5scit1bfillInTheBlankQuestions,
...g5scit2afillInTheBlankQuestions,
...g5scit2bfillInTheBlankQuestions,*/
...g5scit3afillInTheBlankQuestions,
...g5scit3bfillInTheBlankQuestions,
// True or False
/*...g5scit3atrueFalseQuestions,
...g5scit3atrueFalseQuestions,
...g5scit3atrueFalseQuestions,
...g5scit3atrueFalseQuestions,*/
...g5scit3atrueFalseQuestions,
...g5scit3btrueFalseQuestions,

  // English
  // Multiple Choice
/*  ...g5scit1amultipleChoiceQuestions,
  ...g5scit1bmultipleChoiceQuestions,
  ...g5scit2amultipleChoiceQuestions,
  ...g5scit2bmultipleChoiceQuestions,*/
  ...g5engt3amultipleChoiceQuestions,
//  ...g5scit3bmultipleChoiceQuestions,
  // One Word Questions
/*  ...g5scit1amatchingQuestions,
  ...g5scit1bmatchingQuestions,
  ...g5scit2amatchingQuestions,
  ...g5scit2bmatchingQuestions,*/
  ...g5engt3acomprehensionQuestions,
//  ...g5scit3bmatchingQuestions,
// Fill in the Blanks
...g5engt3afillInTheBlankQuestions,
// True or False
...g5engt3atrueFalseQuestions,

  // Grade 5
  // Social Studies
  // Multiple Choice
  ...g5sst1amultipleChoiceQuestions, 
...g5sst1bmultipleChoiceQuestions, 
...g5sst2amultipleChoiceQuestions, 
...g5sst2bmultipleChoiceQuestions, 
...g5sst3amultipleChoiceQuestions, 
...g5sst3bmultipleChoiceQuestions,
  // True or False
  ...g5sst1atrueFalseQuestions, 
...g5sst1btrueFalseQuestions,
...g5sst2atrueFalseQuestions, 
...g5sst2btrueFalseQuestions, 
...g5sst3atrueFalseQuestions,
...g5sst3btrueFalseQuestions,
  // Fill in the Blanks
/*  ...g5sst1afillInTheBlankQuestions,
  ...g5sst1bfillInTheBlankQuestions,
  ...g5sst2afillInTheBlankQuestions,
  ...g5sst2bfillInTheBlankQuestions,*/
  ...g5sst3afillInTheBlankQuestions,
  ...g5sst3bfillInTheBlankQuestions,
  // Matching
/*  ...g5sst1amatchingQuestions,
  ...g5sst1bmatchingQuestions,
  ...g5sst2amatchingQuestions,
  ...g5sst2bmatchingQuestions,*/
  ...g5sst3amatchingQuestions,
  ...g5sst3bmatchingQuestions,

  // Expressive Arts
  // Multiple Choice
/*  ...g5expt1amultipleChoiceQuestions,
  ...g5expt1bmultipleChoiceQuestions,
  ...g5expt2amultipleChoiceQuestions,
  ...g5expt2bmultipleChoiceQuestions,*/
  ...g5expt3amultipleChoiceQuestions,
  ...g5expt3bmultipleChoiceQuestions,
  // True or False
/*  ...g5expt1atrueFalseQuestions,
  ...g5expt1btrueFalseQuestions,
  ...g5expt2atrueFalseQuestions,
  ...g5expt2btrueFalseQuestions,*/
  ...g5expt3atrueFalseQuestions,
  ...g5expt3btrueFalseQuestions,
  // Fill in the Blanks
/*  ...g5expt1afillInTheBlankQuestions,
  ...g5expt1bfillInTheBlankQuestions,
  ...g5expt2afillInTheBlankQuestions,
  ...g5expt2bfillInTheBlankQuestions,*/
  ...g5expt3afillInTheBlankQuestions,
  ...g5expt3bfillInTheBlankQuestions,
  // Matching
/*  ...g5expt1amatchingQuestions,
  ...g5expt1bmatchingQuestions,
  ...g5expt2amatchingQuestions,
  ...g5expt2bmatchingQuestions,*/
  ...g5expt3amatchingQuestions,
  ...g5expt3bmatchingQuestions,

  // Home Economics
  // Multiple Choice
/*  ...g5expt1amultipleChoiceQuestions,
  ...g5expt1bmultipleChoiceQuestions,
  ...g5expt2amultipleChoiceQuestions,
  ...g5expt2bmultipleChoiceQuestions,*/
  ...g5het3amultipleChoiceQuestions,
  ...g5het3bmultipleChoiceQuestions,
  // True or False
/*  ...g5expt1atrueFalseQuestions,
  ...g5expt1btrueFalseQuestions,
  ...g5expt2atrueFalseQuestions,
  ...g5expt2btrueFalseQuestions,*/
  ...g5het3atrueFalseQuestions,
  ...g5het3btrueFalseQuestions,
  // Fill in the Blanks
/*  ...g5expt1afillInTheBlankQuestions,
  ...g5expt1bfillInTheBlankQuestions,
  ...g5expt2afillInTheBlankQuestions,
  ...g5expt2bfillInTheBlankQuestions,*/
  ...g5het3afillInTheBlankQuestions,
  ...g5het3bfillInTheBlankQuestions,
  // Matching
/*  ...g5expt1amatchingQuestions,
  ...g5expt1bmatchingQuestions,
  ...g5expt2amatchingQuestions,
  ...g5expt2bmatchingQuestions,*/
  ...g5het3amatchingQuestions,
  ...g5het3bmatchingQuestions,

  // Technology Studies
  // Multiple Choice
/*  ...g5expt1amultipleChoiceQuestions,
  ...g5expt1bmultipleChoiceQuestions,
  ...g5expt2amultipleChoiceQuestions,
  ...g5expt2bmultipleChoiceQuestions,*/
  ...g5tst3amultipleChoiceQuestions,
  ...g5tst3bmultipleChoiceQuestions,
  // True or False
/*  ...g5expt1atrueFalseQuestions,
  ...g5expt1btrueFalseQuestions,
  ...g5expt2atrueFalseQuestions,
  ...g5expt2btrueFalseQuestions,*/
  ...g5tst3atrueFalseQuestions,
  ...g5tst3btrueFalseQuestions,
  // Fill in the Blanks
/*  ...g5expt1afillInTheBlankQuestions,
  ...g5expt1bfillInTheBlankQuestions,
  ...g5expt2afillInTheBlankQuestions,
  ...g5expt2bfillInTheBlankQuestions,*/
  ...g5tst3afillInTheBlankQuestions,
  ...g5tst3bfillInTheBlankQuestions,
  // Matching
/*  ...g5expt1amatchingQuestions,
  ...g5expt1bmatchingQuestions,
  ...g5expt2amatchingQuestions,
  ...g5expt2bmatchingQuestions,*/
  ...g5tst3amatchingQuestions,
  ...g5tst3bmatchingQuestions,

  // Mathematics
  // Multiple Choice
/*  ...g5expt1amultipleChoiceQuestions,
  ...g5expt1bmultipleChoiceQuestions,
  ...g5expt2amultipleChoiceQuestions,
  ...g5expt2bmultipleChoiceQuestions,*/
  ...g5matht3amultipleChoiceQuestions,
  ...g5matht3bmultipleChoiceQuestions,
  // True or False
/*  ...g5expt1atrueFalseQuestions,
  ...g5expt1btrueFalseQuestions,
  ...g5expt2atrueFalseQuestions,
  ...g5expt2btrueFalseQuestions,*/
  ...g5matht3atrueFalseQuestions,
//  ...g5expt3btrueFalseQuestions,
  // Fill in the Blanks
/*  ...g5expt1afillInTheBlankQuestions,
  ...g5expt1bfillInTheBlankQuestions,
  ...g5expt2afillInTheBlankQuestions,
  ...g5expt2bfillInTheBlankQuestions,*/
  ...g5matht3afillInTheBlankQuestions,
//  ...g5expt3bfillInTheBlankQuestions,
  // Matching
/*  ...g5expt1amatchingQuestions,
  ...g5expt1bmatchingQuestions,
  ...g5expt2amatchingQuestions,
  ...g5expt2bmatchingQuestions,*/
  ...g5matht3amatchingQuestions,
//  ...g5expt3bmatchingQuestions,
  // One Word
/*  ...g5expt1amatchingQuestions,
  ...g5expt1bmatchingQuestions,
  ...g5expt2amatchingQuestions,
  ...g5expt2bmatchingQuestions,*/
  ...g5matht3aoneWordQuestions,
  ...g5matht3boneWordQuestions,
  // Graphical
/*  ...g5matht3bgraphicalQuestions,
  ...g5matht3bgraphicalQuestions,
  ...g5matht3bgraphicalQuestions,
  ...g5matht3bgraphicalQuestions,
  ...g5matht3agraphicalQuestions,
  ...g5matht3bgraphicalQuestions,*/

  // SP1
  // Search Word
/*  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,
  ...g1sp1t3bwordSearchQuestions,*/
  ...g5sp1t3bwordSearchQuestions,

  // SP2
  // Image Based
  ...g5sp2t1aimageBasedQuestions, 
...g5sp2t1bimageBasedQuestions, 
...g5sp2t2aimageBasedQuestions, 
...g5sp2t2bimageBasedQuestions, 
...g5sp2t3aimageBasedQuestions, 
...g5sp2t3bimageBasedQuestions,

  // SP1
  // Sudoku
/*  ...g5sp2t1aimageBasedQuestions,
  ...g5sp2t1bimageBasedQuestions,
  ...g5sp2t2aimageBasedQuestions,
  ...g5sp2t2bimageBasedQuestions,
  ...g5sp2t3aimageBasedQuestions,*/
  ...g5sp1t3bsudokuQuestions,

  // Crossword
/*  ...g5sp2t1aimageBasedQuestions,
  ...g5sp2t1bimageBasedQuestions,
  ...g5sp2t2aimageBasedQuestions,
  ...g5sp2t2bimageBasedQuestions,
  ...g5sp2t3aimageBasedQuestions,*/
  ...g5sp1t3bcrosswordQuestions,



// Grade 6
  // SP2
  // Image Based
  ...g6sp2t1aimageBasedQuestions, 
...g6sp2t1bimageBasedQuestions,
...g6sp2t2aimageBasedQuestions, 
...g6sp2t2bimageBasedQuestions,
...g6sp2t3aimageBasedQuestions, 
...g6sp2t3bimageBasedQuestions,

  // Special
/*  ...g6sp2t1aimageBasedQuestions,
  ...g6sp2t1bimageBasedQuestions,
  ...g6sp2t2aimageBasedQuestions,
  ...g6sp2t2bimageBasedQuestions,
  ...g6sp2t3aimageBasedQuestions,*/
  ...g6sp2t3bspecialQuestions,

  // Special2
/*  ...g6sp2t3bspecial2Questions,
  ...g6sp2t3bspecial2Questions,
  ...g6sp2t3bspecial2Questions,
  ...g6sp2t3bspecial2Questions,
  ...g6sp2t3aspecial2Questions,*/
  ...g6sp2t3bspecial2Questions,


];


// Function to count the total number of questions in the questionsBank array
function countTotalQuestions() {
  return questionsBank.length;
}

// Function to generate random questions
function generateRandomQuestions() {
  const numMultipleChoice = parseInt(document.getElementById("num-multiple-choice").value);
  const numSpecial = parseInt(document.getElementById("num-special").value);
  const numTrueFalse = parseInt(document.getElementById("num-true-false").value);
  const numFillInTheBlank = parseInt(document.getElementById("num-fill-in-the-blank").value);
  const numMatching = parseInt(document.getElementById("num-matching").value);
  const numOneWord = parseInt(document.getElementById("num-one-word").value);
  const numMath = parseInt(document.getElementById("num-math").value);
  const numComprehension = parseInt(document.getElementById("num-comprehension").value);
  const numImageBased = parseInt(document.getElementById("num-image_based").value);
  const numMaze = parseInt(document.getElementById("num-maze").value);
  const numCrossword = parseInt(document.getElementById("num-crossword").value);
  const numColoring = parseInt(document.getElementById("num-coloring").value);
  const numIdentification = parseInt(document.getElementById("num-identification").value);
  const numTracing = parseInt(document.getElementById("num-tracing").value);
  const numHandwriting = parseInt(document.getElementById("num-handwriting").value);
  const numReading = parseInt(document.getElementById("num-reading").value);
  const numSudoku = parseInt(document.getElementById("num-sudoku").value);
  const numIdentity = parseInt(document.getElementById("num-identity").value);
  const numTime = parseInt(document.getElementById("num-time").value);
  const numWordSearchPuzzle = parseInt(document.getElementById("num-wordSearchPuzzle").value);

  
  
  const selectedClass = document.getElementById("class-filter").value;
  const selectedSubject = document.getElementById("subject-filter").value;
  const selectedTerm = document.getElementById("term-filter").value;
  const selectedPart = document.getElementById("part-filter").value;

  const filteredQuestions = questionsBank.filter(question => {
    return (
      (selectedClass === "" || question.class === selectedClass) &&
      (selectedSubject === "" || question.subject === selectedSubject) &&
      (selectedTerm === "" || question.term === selectedTerm) &&
      (selectedPart === "" || question.part === selectedPart)
    );
  });

  // Shuffle the filtered questions array
  const shuffledQuestions = shuffleArray(filteredQuestions);

  // Function to shuffle an array (Fisher-Yates shuffle)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const randomQuestions = [];

  // Function to get random questions by type from shuffled array
  function getRandomQuestionsByType(type, num) {
    const questionsOfType = shuffledQuestions.filter(question => question.type === type);
    return questionsOfType.slice(0, num); // Select the first `num` questions
  }

  // Push randomly selected questions of each type to randomQuestions array
  randomQuestions.push(...getRandomQuestionsByType("multiple_choice", numMultipleChoice));
  randomQuestions.push(...getRandomQuestionsByType("special", numSpecial));
  randomQuestions.push(...getRandomQuestionsByType("true_false", numTrueFalse));
  randomQuestions.push(...getRandomQuestionsByType("fill_in_the_blank", numFillInTheBlank));
  randomQuestions.push(...getRandomQuestionsByType("matching", numMatching));
  randomQuestions.push(...getRandomQuestionsByType("one_word", numOneWord));
  randomQuestions.push(...getRandomQuestionsByType("math", numMath));
  randomQuestions.push(...getRandomQuestionsByType("comprehension", numComprehension));
  randomQuestions.push(...getRandomQuestionsByType("image_based", numImageBased));
  randomQuestions.push(...getRandomQuestionsByType("maze", numMaze));
  randomQuestions.push(...getRandomQuestionsByType("crossword", numCrossword));
  randomQuestions.push(...getRandomQuestionsByType("coloring", numColoring));
  randomQuestions.push(...getRandomQuestionsByType("identification", numIdentification));
  randomQuestions.push(...getRandomQuestionsByType("tracing", numTracing));
  randomQuestions.push(...getRandomQuestionsByType("handwriting", numHandwriting));
  randomQuestions.push(...getRandomQuestionsByType("reading", numReading));
  randomQuestions.push(...getRandomQuestionsByType("sudoku", numSudoku));
  randomQuestions.push(...getRandomQuestionsByType("identity", numIdentity));
  randomQuestions.push(...getRandomQuestionsByType("time", numTime));
  randomQuestions.push(...getRandomQuestionsByType("wordSearchPuzzle", numWordSearchPuzzle));

  
  return randomQuestions;
}

// Function to display random questions on the HTML page
function displayQuestions() {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = ""; // Clear previous questions
  const questions = generateRandomQuestions();
  
  // Track added sections to avoid duplicates
  const addedSections = {
    "multiple_choice": false,
    "special": false,    
    "true_false": false,
    "fill_in_the_blank": false,
    "matching": false,
    "one_word": false,
    "math": false,
    "comprehension": false,
    "image_based": false,
    "maze": false,
    "crossword": false,
    "coloring": false,    
    "identification": false,        
    "tracing": false,
    "handwriting": false,
    "reading": false,
    "sudoku": false,
    "identity": false,
    "time": false,
    "wordSearchPuzzle": false      

  };

  let sectionIdentifierText = "";

  questions.forEach((q, index) => {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

    // Determine section identifier based on question type and whether it has been added
    if (!addedSections[q.type]) {
      addedSections[q.type] = true;

      
      
      switch (q.type) {
        case "multiple_choice":
          sectionIdentifierText = "Multiple Choice Section";
          break;
        case "special":
          sectionIdentifierText = "Special Paper 2 Section";
          break;
        case "true_false":
          sectionIdentifierText = "True or False Section";
          break;
        case "fill_in_the_blank":
          sectionIdentifierText = "Fill in the Blanks Section";
          break;
        case "matching":
          sectionIdentifierText = "Matching Section";
          break;
        case "one_word":
          sectionIdentifierText = "Calculation Section";
          break;
        case "math":
          sectionIdentifierText = "Math Section";
          break;
        case "comprehension":
          sectionIdentifierText = "Comprehension Section";
          break;
        case "image_based":
          sectionIdentifierText = "Image Section";
          break;
        case "maze":
          sectionIdentifierText = "Maze Section";
          break;
        case "crossword":
          sectionIdentifierText = "Crossword Section";
          break;
        case "coloring":
          sectionIdentifierText = "Coloring Section";
          break;
        case "identification":
          sectionIdentifierText = "Identification Section";
          break;
        case "tracing":
          sectionIdentifierText = "Tracing Section";
          break;
        case "handwriting":
          sectionIdentifierText = "Handwriting Section";
          break;
        case "reading":
          sectionIdentifierText = "Reading Section.";
          break;
        case "sudoku":
          sectionIdentifierText = "Sudoku Section";
          break;
        case "identity":
          sectionIdentifierText = "Identity Section";
          break;
        case "time":
          sectionIdentifierText = "Time Section";
          break;
        case "wordSearchPuzzle":
          sectionIdentifierText = "Word Search Puzzle Section";
          break;
        
        
        
        default:
          sectionIdentifierText = "Section";
          break;
      }

      // Add section identifier
      const sectionIdentifier = document.createElement("div");
      sectionIdentifier.classList.add("section-identifier");
      sectionIdentifier.innerHTML = sectionIdentifierText;
      questionWrapper.appendChild(sectionIdentifier);
    }

    const questionText = document.createElement("div");
    questionText.innerHTML = `${index + 1}. ${q.question}`;
    questionWrapper.appendChild(questionText);

    switch (q.type) {
      
      
case "multiple_choice":
  const choicesContainer = document.createElement("div");
  
  // Function to generate letter labels (A, B, C, ...)
  const getLetter = (i) => String.fromCharCode(65 + i); // 65 is the char code for 'A'
  
  // Shuffle the choices array
  const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
  
  shuffledChoices.forEach((choice, i) => {
    const choiceInput = document.createElement("input");
    choiceInput.setAttribute("type", "radio");
    choiceInput.setAttribute("id", `question-${index}-choice-${i}`);
    choiceInput.setAttribute("name", `question-${index}`);
    choiceInput.setAttribute("value", choice);
    
    const choiceLabel = document.createElement("label");
    choiceLabel.setAttribute("for", `question-${index}-choice-${i}`);
    choiceLabel.innerHTML = `${getLetter(i)}. ${choice}`;
    
    choicesContainer.appendChild(choiceInput);
    choicesContainer.appendChild(choiceLabel);
    choicesContainer.appendChild(document.createElement("br"));
  });
  
  questionWrapper.appendChild(choicesContainer);
  break;
      
      
case "special":
    const specialContainer = document.createElement("div");
    specialContainer.classList.add("special-container"); // Add class for styling

    // Add an image for the question if it exists
    if (q.questionImage) {
        const questionImage = document.createElement("img");
        questionImage.setAttribute("src", q.questionImage);
        questionImage.setAttribute("alt", "Question Image");
        questionImage.classList.add("question-image"); // Add class for styling
        specialContainer.appendChild(questionImage);
        specialContainer.appendChild(document.createElement("br"));
    }

    // Loop through choices and create radio buttons with images
    q.choices.forEach((choice, i) => {
        const choiceContainer = document.createElement("div");
        choiceContainer.classList.add("choice-container"); // Add class for styling

      
        const choiceInput = document.createElement("input");
        choiceInput.setAttribute("type", "radio");
        choiceInput.setAttribute("id", `choice-${i}`);
        choiceInput.setAttribute("name", `question-${index}`);
        choiceInput.setAttribute("value", choice.value);

        const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("for", `choice-${i}`);

        // Add image for choice if it exists
        if (choice.image) {
            const choiceImage = document.createElement("img");
            choiceImage.setAttribute("src", choice.image);
            choiceImage.setAttribute("alt", `Option ${i + 1}`);
            choiceLabel.appendChild(choiceImage);
        }

        // Add text for choice if it exists
        if (choice.text) {
            const choiceText = document.createElement("span");
            choiceText.innerHTML = choice.text;
            choiceLabel.appendChild(choiceText);
        }

        choiceContainer.appendChild(choiceInput);
        choiceContainer.appendChild(choiceLabel);
        specialContainer.appendChild(choiceContainer);
    });
      

    questionWrapper.appendChild(specialContainer);
    break;
      
      
      
      case "true_false":
        const trueInput = document.createElement("input");
        trueInput.setAttribute("type", "radio");
        trueInput.setAttribute("id", `true-${index}`);
        trueInput.setAttribute("name", `question-${index}`);
        trueInput.setAttribute("value", "true");
        const trueLabel = document.createElement("label");
        trueLabel.setAttribute("for", `true-${index}`);
        trueLabel.innerHTML = "True";
        questionWrapper.appendChild(trueInput);
        questionWrapper.appendChild(trueLabel);

        const falseInput = document.createElement("input");
        falseInput.setAttribute("type", "radio");
        falseInput.setAttribute("id", `false-${index}`);
        falseInput.setAttribute("name", `question-${index}`);
        falseInput.setAttribute("value", "false");
        const falseLabel = document.createElement("label");
        falseLabel.setAttribute("for", `false-${index}`);
        falseLabel.innerHTML = "False";
        questionWrapper.appendChild(falseInput);
        questionWrapper.appendChild(falseLabel);
        questionWrapper.appendChild(document.createElement("br"));
        break;
      

      // Fill in tge Blanks html Layout
      case "fill_in_the_blank":
        const answerInput = document.createElement("input");
        answerInput.setAttribute("type", "text");
        answerInput.setAttribute("id", `answer-${index}`);
        answerInput.setAttribute("name", `question-${index}`);
        const answerLabel = document.createElement("label");
        answerLabel.innerHTML = "Answer: ";
        questionWrapper.appendChild(answerLabel);
        questionWrapper.appendChild(answerInput);
        questionWrapper.appendChild(document.createElement("br"));
        break;
      
      
      
      // Matching html Layout
      case "matching":
    const matchingContainer = document.createElement("div");

    // Prepare the first and second statements
    const firstStatements = q.pairs.map((pair, i) => `${i + 1}. ${pair.question}`);
    const secondStatements = q.pairs.map(pair => pair.answer);

    // Shuffle the second statements
    const shuffledSecondStatements = shuffleArray(secondStatements.slice());

    // Create a table for displaying the matching questions
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Match", "First Statement", "Second Statement"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.innerText = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create rows for the table
    firstStatements.forEach((statement, i) => {
        const row = document.createElement("tr");

        // Input field cell
        const inputCell = document.createElement("td");
        const matchingInput = document.createElement("input");
        matchingInput.setAttribute("type", "text");
        matchingInput.setAttribute("id", `answer-${index}-${i}`);
        matchingInput.setAttribute("name", `question-${index}-${i}`);
        matchingInput.setAttribute("placeholder", "");
        matchingInput.classList.add("matching-input"); // Add a class for styling
        inputCell.appendChild(matchingInput);
        row.appendChild(inputCell);

        // First statement cell
        const statementCell = document.createElement("td");
        statementCell.innerText = statement;
        row.appendChild(statementCell);

        // Second statement cell with letters
        const secondStatementCell = document.createElement("td");
        const shuffledIndex = i % shuffledSecondStatements.length; // Ensure options repeat if fewer than statements
        const optionElement = document.createElement("div");
        optionElement.innerText = `${String.fromCharCode(65 + shuffledIndex)}. ${shuffledSecondStatements[shuffledIndex]}`;
        secondStatementCell.appendChild(optionElement);
        row.appendChild(secondStatementCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    matchingContainer.appendChild(table);
    questionWrapper.appendChild(matchingContainer);
    break;

      // One Word html Layout
        case "one_word":
break;
      
      
      
      
      
      case "math":
    const mathContainer = document.createElement("div");
    mathContainer.classList.add("math-container"); // Add main container class for styling


    switch (q.subtype) {
case "counting":
    const countingContainer = document.createElement("div");
    countingContainer.classList.add("counting-container"); // Add a container for styling
      
    // Check if the question has an image to display multiple times
    if (q.imgSrc) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container"); // Class for styling image layout

        // Loop to add the image according to the count specified
        for (let i = 0; i < q.count; i++) {
            const imgElement = document.createElement("img");
            imgElement.setAttribute("src", q.imgSrc);
            imgElement.setAttribute("alt", "Counting Image");
            imgElement.classList.add("counting-image"); // Style for individual images
            imgContainer.appendChild(imgElement);
        }

        // Add image container to countingContainer
        countingContainer.appendChild(imgContainer);
    }

    // Append countingContainer to the main question wrapper
    questionWrapper.appendChild(countingContainer);
    break;
      
      
      /*
        case "statistics":
            // For graphical math questions like charts
            switch (q.chartType) {
                case "pie-chart":
    // Create a canvas element for Chart.js to render the chart
    const canvas = document.createElement("canvas");
    canvas.classList.add("pie-chart"); // Style for pie chart
    mathContainer.appendChild(canvas);

    // Pie chart data and configuration
    const data = {
        labels: q.chartData.labels || ["Category 1", "Category 2", "Category 3"], // Sample labels
        datasets: [{
            data: q.chartData.values || [30, 50, 20], // Sample values
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    };

    // Generate the pie chart using Chart.js
    new Chart(canvas, {
        type: "pie",
        data: data,
        options: options
    });
    break;

                case "bar-chart":
                    // Load bar chart image or generate chart dynamically
                    const barChart = document.createElement("img");
                    barChart.src = q.chartData.src || "path/to/barchart.png";
                    barChart.alt = "Bar Chart";
                    barChart.classList.add("bar-chart"); // Style for bar chart
                    mathContainer.appendChild(barChart);
                    break;

                case "line-graph":
                    // Load line graph image or generate chart dynamically
                    const lineGraph = document.createElement("img");
                    lineGraph.src = q.chartData.src || "path/to/linegraph.png";
                    lineGraph.alt = "Line Graph";
                    lineGraph.classList.add("line-graph"); // Style for line graph
                    mathContainer.appendChild(lineGraph);
                    break;

                case "pictograph":
                    // Load pictograph image or generate chart dynamically
                    const pictograph = document.createElement("img");
                    pictograph.src = q.chartData.src || "path/to/pictograph.png";
                    pictograph.alt = "Pictograph";
                    pictograph.classList.add("pictograph"); // Style for pictograph
                    mathContainer.appendChild(pictograph);
                    break;

                default:
                    const defaultGraphic = document.createElement("p");
                    defaultGraphic.textContent = "Graphical question type not specified.";
                    mathContainer.appendChild(defaultGraphic);
                    break;
            }
            break;
      
      */
      
        case "primary":
            // For primary level math (simple arithmetic)
            const primaryContent = q.mathContent || ["5 + 3 =", "7 - 2 ="];
            primaryContent.forEach(expression => {
                const expressionElement = document.createElement("p");
                expressionElement.textContent = expression;
                expressionElement.classList.add("math-primary-question"); // Style for primary-level questions
                mathContainer.appendChild(expressionElement);
            });
            break;

      
      
case "middle-school":
            // For middle school math (fractions, decimals, simple algebra)
            const middleSchoolContent = q.mathContent || ["1/2 + 1/4 =", "Solve for x: 3x + 5 = 20"];
            middleSchoolContent.forEach(problem => {
                const problemElement = document.createElement("p");
                problemElement.textContent = problem;
                problemElement.classList.add("math-middle-question"); // Style for middle school-level questions
                mathContainer.appendChild(problemElement);
            });
            break;

        case "high-school":
            // For high school math (geometry, trigonometry, calculus basics)
            const highSchoolContent = q.mathContent || ["Find the area of a circle with radius 5", "sin(45°)"];
            highSchoolContent.forEach(highSchoolProblem => {
                const highSchoolProblemElement = document.createElement("p");
                highSchoolProblemElement.textContent = highSchoolProblem;
                highSchoolProblemElement.classList.add("math-high-school-question"); // Style for high school-level questions
                mathContainer.appendChild(highSchoolProblemElement);
            });
            break;

        case "advanced":
            // For advanced level math (complex calculus, algebra, etc.)
            const advancedMathContent = q.mathContent || ["Differentiate: d/dx(x^3 + 3x^2)", "Integrate: ∫(2x dx)"];
            advancedMathContent.forEach(advancedProblem => {
                const advancedProblemElement = document.createElement("p");
                advancedProblemElement.textContent = advancedProblem;
                advancedProblemElement.classList.add("math-advanced-question"); // Style for advanced-level questions
                mathContainer.appendChild(advancedProblemElement);
            });
            break;

        default:
            // Default math question if subtype is not specified
            const defaultMathContent = document.createElement("p");
            defaultMathContent.textContent = q.mathContent || "Solve the math problem:";
            defaultMathContent.classList.add("math-question"); // General styling
            mathContainer.appendChild(defaultMathContent);
            break;
    }

    // Append the math container to the question wrapper
    questionWrapper.appendChild(mathContainer);
    break;
      
      
      
      
      
      
      
      
      // Comprehension html Layout
case "comprehension":
  // Create and display the story (no number before the story)
  const storyContainer = document.createElement("div");
  const storyParagraph = document.createElement("p");
  storyParagraph.innerHTML = q.story;  // Display the story text
  storyContainer.appendChild(storyParagraph);
  questionWrapper.appendChild(storyContainer);

  // Loop through the comprehension questions and display each multiple-choice question
  q.questions.forEach((subQuestion, subIndex) => {
    const subQuestionText = document.createElement("p");
    subQuestionText.innerHTML = `${index + 1}.${subIndex + 1} ${subQuestion.question}`;  // Display the question text
    questionWrapper.appendChild(subQuestionText);

    const subChoicesContainer = document.createElement("div");
    subQuestion.choices.forEach((choice, i) => {
      const choiceInput = document.createElement("input");
      choiceInput.setAttribute("type", "radio");
      choiceInput.setAttribute("id", `choice-${subIndex}-${i}`);
      choiceInput.setAttribute("name", `subquestion-${index}-${subIndex}`);
      choiceInput.setAttribute("value", choice);

      const choiceLabel = document.createElement("label");
      choiceLabel.setAttribute("for", `choice-${subIndex}-${i}`);
      choiceLabel.innerHTML = choice;

      subChoicesContainer.appendChild(choiceInput);
      subChoicesContainer.appendChild(choiceLabel);
      subChoicesContainer.appendChild(document.createElement("br"));
    });

    questionWrapper.appendChild(subChoicesContainer);
  });
  break;
      
      
      
case "image_based":
    // Create a container div for the image-based question
    const imageQuestionContainer = document.createElement("div");
    imageQuestionContainer.classList.add("image-based-container"); // Optional class for styling

    // Create image element
    const imgElement = document.createElement("img");

    // Check if the image source exists and log the path
    if (q.imageSrc) {
        console.log("Loading image from: " + q.imageSrc); // Log image path for debugging
        imgElement.setAttribute("src", q.imageSrc); // Set the image source dynamically
    } else {
        console.log("Image source is missing for question: ", q); // Log missing image source for debugging
    }

    imgElement.setAttribute("alt", "Question Image");
    imgElement.setAttribute("width", "100%"); // Set width as per your requirement
    imgElement.setAttribute("height", "auto"); // Set height as per your requirement
    imageQuestionContainer.appendChild(imgElement);
    imageQuestionContainer.appendChild(document.createElement("br"));

    // Add a question description below the image
    const questionDescription = document.createElement("p");
    questionDescription.innerHTML = q.description;
    imageQuestionContainer.appendChild(questionDescription);

    // Create a sub-choices container for the options or input field
    const sub1ChoicesContainer = document.createElement("div");
    sub1ChoicesContainer.classList.add("sub1-choices-container"); // Optional class for styling

    // Based on the sub-question type, we add either multiple-choice or fill-in-the-blank options
    if (q.subType === "multiple_choice") {
        q.options.forEach((option, optionIndex) => {
            const radioInput = document.createElement("input");
            radioInput.setAttribute("type", "radio");
            radioInput.setAttribute("id", `option-${index}-${optionIndex}`);
            radioInput.setAttribute("name", `question-${index}`);
            radioInput.setAttribute("value", option);

            const label = document.createElement("label");
            label.setAttribute("for", `option-${index}-${optionIndex}`);
            label.innerHTML = option;

            sub1ChoicesContainer.appendChild(radioInput);
            sub1ChoicesContainer.appendChild(label);
            sub1ChoicesContainer.appendChild(document.createElement("br"));
        });
    } else if (q.subType === "fill_in_the_blank") {
        const answerInput = document.createElement("input");
        answerInput.setAttribute("type", "text");
        answerInput.setAttribute("id", `answer-${index}`);
        answerInput.setAttribute("name", `question-${index}`);

        const answerLabel = document.createElement("label");
        answerLabel.innerHTML = "Answer: ";

        sub1ChoicesContainer.appendChild(answerLabel);
        sub1ChoicesContainer.appendChild(answerInput);
        sub1ChoicesContainer.appendChild(document.createElement("br"));
    }

    // Append the sub-choices container to the image-based question container
    imageQuestionContainer.appendChild(sub1ChoicesContainer);

    // Finally, append the image-based question container to the questionWrapper
    questionWrapper.appendChild(imageQuestionContainer);
    break;
      
      
      
case "maze":
    // Create a container for the maze-based question
    const mazeQuestionContainer = document.createElement("div");
    mazeQuestionContainer.classList.add("maze-based-container"); // Optional class for styling

    // Create a question description or instruction
    const mazeDescription = document.createElement("p");
    mazeDescription.innerHTML = q.description; // Set maze instructions
    mazeQuestionContainer.appendChild(mazeDescription);

    // Create maze image or canvas
    const mazeImg = document.createElement("img");
    mazeImg.setAttribute("src", q.puzzleSrc); // Dynamic maze image or canvas rendering
    mazeImg.setAttribute("alt", "Maze Puzzle");
    mazeImg.setAttribute("width", "100%");
    mazeImg.setAttribute("height", "auto");
    mazeQuestionContainer.appendChild(mazeImg);

    // Append the maze-based question container to the main question wrapper
    questionWrapper.appendChild(mazeQuestionContainer);
    break;
      
      
      

      
      
      
      
      
      
case "crossword":
    // Create a container for the crossword-based question
    const crosswordQuestionContainer = document.createElement("div");
    crosswordQuestionContainer.classList.add("crossword-based-container");

    // Create a question description or instruction
    const crosswordDescription = document.createElement("p");
    crosswordDescription.innerHTML = q.description;
    crosswordQuestionContainer.appendChild(crosswordDescription);

    // Create a grid for the Crossword
    const crosswordTable = document.createElement("table");
    crosswordTable.classList.add("crossword-table");

    let clueNumber = 1; // Initialize clue number counter
    const acrossCluesMap = {}; // To store across clues by number
    const downCluesMap = {}; // To store down clues by number

    for (let row = 0; row < q.puzzleData.length; row++) {
        const crosswordRow = document.createElement("tr");

        for (let col = 0; col < q.puzzleData[row].length; col++) {
            const crosswordCell = document.createElement("td");

            if (q.puzzleData[row][col] === "#") {
                // Black cell for non-playable area
                crosswordCell.classList.add("black-cell");
            } else {
                // Add input for letters
                const inputField = document.createElement("input");
                inputField.setAttribute("type", "text");
                inputField.setAttribute("maxlength", "1");
                inputField.classList.add("crossword-input");

                // Detect if this cell is the start of an "Across" word
                const isAcrossStart = (col === 0 || q.puzzleData[row][col - 1] === "#") &&
                                      (col < q.puzzleData[row].length - 1 && q.puzzleData[row][col + 1] !== "#");

                // Detect if this cell is the start of a "Down" word
                const isDownStart = (row === 0 || q.puzzleData[row - 1][col] === "#") &&
                                    (row < q.puzzleData.length - 1 && q.puzzleData[row + 1][col] !== "#");

                // Assign and display clue number if it's the start of a word
                if (isAcrossStart || isDownStart) {
                    const clueNumberSpan = document.createElement("span");
                    clueNumberSpan.classList.add("clue-number");
                    clueNumberSpan.innerText = clueNumber;
                    crosswordCell.appendChild(clueNumberSpan);

                    // Assign clues to maps
                    if (isAcrossStart && q.acrossClues.length > 0) {
                        acrossCluesMap[clueNumber] = q.acrossClues.shift();
                    }
                    if (isDownStart && q.downClues.length > 0) {
                        downCluesMap[clueNumber] = q.downClues.shift();
                    }

                    clueNumber++; // Increment the clue number
                }

                crosswordCell.appendChild(inputField);
            }

            crosswordRow.appendChild(crosswordCell);
        }

        crosswordTable.appendChild(crosswordRow);
    }

    crosswordQuestionContainer.appendChild(crosswordTable);

    // Create containers for "Across" and "Down" clues
    const cluesContainer = document.createElement("div");
    cluesContainer.classList.add("crossword-clues-container");

    const acrossCluesList = document.createElement("div");
    acrossCluesList.classList.add("across-clues");
    const acrossCluesHeading = document.createElement("h3");
    acrossCluesHeading.innerHTML = "Across";
    acrossCluesList.appendChild(acrossCluesHeading);

    Object.keys(acrossCluesMap).forEach((key) => {
        const clueItem = document.createElement("p");
        clueItem.innerHTML = `${key}. ${acrossCluesMap[key]}`;
        acrossCluesList.appendChild(clueItem);
    });

    cluesContainer.appendChild(acrossCluesList);

    const downCluesList = document.createElement("div");
    downCluesList.classList.add("down-clues");
    const downCluesHeading = document.createElement("h3");
    downCluesHeading.innerHTML = "Down";
    downCluesList.appendChild(downCluesHeading);

    Object.keys(downCluesMap).forEach((key) => {
        const clueItem = document.createElement("p");
        clueItem.innerHTML = `${key}. ${downCluesMap[key]}`;
        downCluesList.appendChild(clueItem);
    });

    cluesContainer.appendChild(downCluesList);

    crosswordQuestionContainer.appendChild(cluesContainer);

    questionWrapper.appendChild(crosswordQuestionContainer);
    break;
      
      
      
      
      
      
      

case "coloring":
    const coloringContainer = document.createElement("div");
    coloringContainer.classList.add("coloring-container");

    // Add a coloring prompt or title
    if (q.coloringPrompt) {
        const coloringPrompt = document.createElement("h3");
        coloringPrompt.innerHTML = q.coloringPrompt;
        coloringPrompt.classList.add("coloring-prompt");
        coloringContainer.appendChild(coloringPrompt);
    }

    // Create a canvas for coloring
    const coloringCanvas = document.createElement("canvas");
    coloringCanvas.setAttribute("width", "300");
    coloringCanvas.setAttribute("height", "300");
    coloringCanvas.classList.add("coloring-canvas");
    coloringContainer.appendChild(coloringCanvas);

    // Append the coloring container to the question wrapper
    questionWrapper.appendChild(coloringContainer);

    const coloringCtx = coloringCanvas.getContext("2d");

    // Set up basic brush properties for coloring
    let coloringDrawing = false;
    let currentColor = "#000000"; // Default color is black
    coloringCtx.lineWidth = 2;
    coloringCtx.lineCap = "round";

    // Add color palette for selecting different colors
    const colorPalette = document.createElement("div");
    colorPalette.classList.add("color-palette");

    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080"];
    colors.forEach(color => {
        const colorButton = document.createElement("button");
        colorButton.classList.add("color-button");
        colorButton.style.backgroundColor = color;
        colorButton.onclick = () => {
            currentColor = color;
            coloringCtx.strokeStyle = currentColor;
        };
        colorPalette.appendChild(colorButton);
    });

    coloringContainer.appendChild(colorPalette);

    // Draw dotted outlines for coloring based on type
    function drawOutline(content) {
        coloringCtx.clearRect(0, 0, coloringCanvas.width, coloringCanvas.height); // Clear canvas before drawing
        coloringCtx.setLineDash([5, 5]); // Dotted outline for guiding coloring

        if (q.coloringType === "letter") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 100, 200);
        } else if (q.coloringType === "word") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 50, 150);
        } else if (q.coloringType === "number") {
            coloringCtx.font = "200px 'Fredoka One', sans-serif";
            coloringCtx.strokeText(content, 120, 200);
        } else if (q.coloringType === "image") {
            // Sample image drawing (e.g., circle as a simple shape)
            coloringCtx.beginPath();
            coloringCtx.arc(200, 150, 100, 0, Math.PI * 2);
            coloringCtx.stroke();
        }
    }

    // Call function to draw outline based on the question content and type
    if (q.coloringContent) {
        drawOutline(q.coloringContent);
    }

    // Functions for handling drawing on the canvas
    function getTouchPos(canvas, touchEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    coloringCanvas.addEventListener("touchstart", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        const touchPos = getTouchPos(coloringCanvas, event);
        coloringDrawing = true;
        coloringCtx.beginPath();
        coloringCtx.moveTo(touchPos.x, touchPos.y);
    });

    coloringCanvas.addEventListener("touchmove", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        if (coloringDrawing) {
            const touchPos = getTouchPos(coloringCanvas, event);
            coloringCtx.lineTo(touchPos.x, touchPos.y);
            coloringCtx.strokeStyle = currentColor;
            coloringCtx.stroke();
        }
    });

    coloringCanvas.addEventListener("touchend", function() {
        coloringDrawing = false;
        coloringCtx.closePath();
    });

    coloringCanvas.addEventListener("touchleave", function() {
        coloringDrawing = false;
        coloringCtx.closePath();
    });

    break;
      
      
      
      
      
      
      
case "identification":
    const identificationContainer = document.createElement("div");
    identificationContainer.classList.add("identification-container");

    // If the item type is a number, display number with images and dots
    if (q.subtype === "number") {
        // Display number text at the bottom
        const numberText = document.createElement("p");
        numberText.classList.add("number-text");
        numberText.textContent = q.value; // E.g., "7"
        identificationContainer.appendChild(numberText);

        // Create a dot container to match the number
        const dotsContainer = document.createElement("div");
        dotsContainer.classList.add("dots-container");

        // Add dots based on the number value
        for (let i = 0; i < q.value; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot"); // Style individual dot
            dotsContainer.appendChild(dot);
        }
        identificationContainer.appendChild(dotsContainer);

        // Create an image container for repeated images matching the number
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        for (let i = 0; i < q.value; i++) {
            const imgElement = document.createElement("img");
            imgElement.src = q.imgSrc; // Image source for repeated images
            imgElement.alt = "Counting Image";
            imgElement.classList.add("identification-image");
            imageContainer.appendChild(imgElement);
        }
        identificationContainer.appendChild(imageContainer);
    }

    // If the item type is a letter, display the letter for identification
    else if (q.subtype === "letter") {
        const letterContainer = document.createElement("div");
        letterContainer.classList.add("letter-container");

        const letterText = document.createElement("p");
        letterText.classList.add("letter-text");
        letterText.textContent = q.value; // Letter, e.g., "A"

/*      const letterImage = document.createElement("img");
        letterImage.src = q.imgsSrc; // Image source for the shape
        letterImage.alt = "Letter Image";
        letterImage.classList.add("shape-image");

        letterContainer.appendChild(letterImage);*/
        letterContainer.appendChild(letterText);
        identificationContainer.appendChild(letterContainer);
    }

    // If the item type is a shape, display the shape for identification
    else if (q.subtype === "shape") {
        const shapeContainer = document.createElement("div");
        shapeContainer.classList.add("shape-container");

        const shapeImage = document.createElement("img");
        shapeImage.src = q.imgSrc; // Image source for the shape
        shapeImage.alt = "Shape Image";
        shapeImage.classList.add("shape-image");

        shapeContainer.appendChild(shapeImage);
        identificationContainer.appendChild(shapeContainer);
    }

    // Append the identification container to the main question wrapper
    questionWrapper.appendChild(identificationContainer);
    break;      
      
      
      
      
      
      
case "tracing":
    const tracingContainer = document.createElement("div");
    tracingContainer.classList.add("tracing-container");

    // Add a tracing prompt (title or instruction)
    if (q.tracingPrompt) {
        const tracingPrompt = document.createElement("h3");
        tracingPrompt.innerHTML = q.tracingPrompt;
        tracingPrompt.classList.add("tracing-prompt");
        tracingContainer.appendChild(tracingPrompt);
    }

    // Create a canvas for tracing
    const tracingCanvas = document.createElement("canvas");
    tracingCanvas.setAttribute("width", "300");  // Adjust width as needed
    tracingCanvas.setAttribute("height", "300"); // Adjust height as needed
    tracingCanvas.classList.add("tracing-canvas");
    tracingContainer.appendChild(tracingCanvas);

    // Append the tracing container to the question wrapper
    questionWrapper.appendChild(tracingContainer);

    const ctx = tracingCanvas.getContext("2d");

    // Function to draw dotted text on the canvas
    function drawDottedText(text, canvasWidth, canvasHeight) {
        const fontSize = 200; // Set the font size
        ctx.font = `${fontSize}px 'Advantage', sans-serif`; // Use Advantage font
        ctx.strokeStyle = "#000"; // Set fill color for the text
        ctx.setLineDash([5, 5]); // Set dash pattern for dotted effect

        // Measure the text width and center it horizontally
        const textMetrics = ctx.measureText(text);
        const textWidth = textMetrics.width;
        const x = (canvasWidth - textWidth) / 2; // Center horizontally

        // Center vertically by adjusting the baseline position
        const y = canvasHeight / 2 + fontSize / 3; // Adjust for vertical alignment

        // Fill the text with dotted effect (dotted fill)
        ctx.strokeText(text, x, y);
    }

          // Function to draw an image for tracing
    function drawTracingImage(imageSrc) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0, tracingCanvas.width, tracingCanvas.height); // Adjust size and positioning
            ctx.setLineDash([5, 5]); // Dotted effect over the image
        };
        img.src = imageSrc;
    }
      
      
    // Function to draw a dotted polygon
    function drawDottedPolygon(sides, x, y, radius) {
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        for (let i = 0; i <= sides; i++) {
            const angle = (2 * Math.PI * i) / sides;
            const dx = x + radius * Math.cos(angle);
            const dy = y + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(dx, dy);
            else ctx.lineTo(dx, dy);
        }
        ctx.closePath();
        ctx.stroke();
    }

    // Function to draw a dotted heart
    function drawDottedHeart(x, y, size) {
        ctx.setLineDash([5, 5]); // Dotted line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
        ctx.bezierCurveTo(x - size, y + size / 2, x, y + size, x, y + size * 1.5);
        ctx.bezierCurveTo(x, y + size, x + size, y + size / 2, x + size, y);
        ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
        ctx.stroke();
    }

    // Function to draw a dotted crescent
    function drawDottedCrescent(x, y, radius) {
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(x, y, radius, Math.PI * 0.25, Math.PI * 1.75, false);
        ctx.arc(x - radius / 2, y, radius, Math.PI * 1.75, Math.PI * 0.25, true);
        ctx.closePath();
        ctx.stroke();
    }

    // Function to draw a star
    function drawDottedStar(x, y, spikes, outerRadius, innerRadius) {
        let rot = (Math.PI / 2) * 3;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(x, y - outerRadius);
        ctx.setLineDash([5, 5]);

        for (let i = 0; i < spikes; i++) {
            let xOuter = x + Math.cos(rot) * outerRadius;
            let yOuter = y + Math.sin(rot) * outerRadius;
            ctx.lineTo(xOuter, yOuter);
            rot += step;

            let xInner = x + Math.cos(rot) * innerRadius;
            let yInner = y + Math.sin(rot) * innerRadius;
            ctx.lineTo(xInner, yInner);
            rot += step;
        }
        ctx.closePath();
        ctx.stroke();
    }

    // Check for specific shape types and draw them
    function drawShape(shapeType, canvasWidth, canvasHeight) {
        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;

        switch (shapeType.toLowerCase()) {
            case "square":
                drawDottedPolygon(4, centerX, centerY, 50); // Draw a square
                break;
            case "circle":
                drawDottedCircle(centerX, centerY, 50); // Draw a circle
                break;
            case "triangle":
                drawDottedPolygon(3, centerX, centerY, 50); // Draw a triangle
                break;
            case "rectangle":
                ctx.setLineDash([5, 5]);
                ctx.strokeRect(centerX - 75, centerY - 50, 150, 100); // Draw a rectangle
                break;
            case "pentagon":
                drawDottedPolygon(5, centerX, centerY, 50); // Draw a pentagon
                break;
            case "hexagon":
                drawDottedPolygon(6, centerX, centerY, 50); // Draw a hexagon
                break;
            case "heptagon":
                drawDottedPolygon(7, centerX, centerY, 50); // Draw a heptagon
                break;
            case "octagon":
                drawDottedPolygon(8, centerX, centerY, 50); // Draw an octagon
                break;
            case "decagon":
                drawDottedPolygon(10, centerX, centerY, 50); // Draw a decagon
                break;
            case "nonagon":
                drawDottedPolygon(9, centerX, centerY, 50); // Draw a nonagon
                break;
            case "diamond":
                drawDottedPolygon(4, centerX, centerY, 50); // Draw a diamond shape
                break;
            case "heart":
                drawDottedHeart(centerX, centerY, 50); // Draw a heart
                break;
            case "star":
                drawDottedStar(centerX, centerY, 5, 50, 25); // Draw a star
                break;
            case "crescent":
                drawDottedCrescent(centerX, centerY, 50); // Draw a crescent
                break;
            case "oval":
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.ellipse(centerX, centerY, 75, 50, 0, 0, Math.PI * 2); // Draw an oval
                ctx.stroke();
                break;
            default:
                console.warn("Unknown shape: " + shapeType);
        }
    }


          // Determine if the question is a shape, text, or image
    if (q.tracingContent) {
        const canvasWidth = tracingCanvas.width;
        const canvasHeight = tracingCanvas.height;
        
        const content = q.tracingContent.toLowerCase();

        if (q.tracingType === "image" && q.tracingImage) {
            // If the tracing content is an image, load the image
            drawTracingImage(q.tracingImage);
        } else if (["square", "circle", "triangle", "rectangle", "pentagon", "hexagon", "heptagon", "octagon", "diamond", "star", "crescent", "decagon", "nonagon", "heart", "oval"].includes(content)) {
            // Draw the specified shape
            drawShape(content, canvasWidth, canvasHeight); // Adjust x, y positioning as needed
        } else {
            // Draw text if it's not a shape or image
            const lines = q.tracingContent.split('\n'); // Split text into lines
            lines.forEach((line, index) => {
                drawDottedText(line, canvasWidth, canvasHeight); // Adjust position for each line
            });
        }
    }
      
      
      
    // Variables to track touch drawing
    let drawing = false;

    // Get the touch coordinates relative to the canvas
    function getTouchPos(canvas, touchEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    // Start drawing on touch (solid line)
    tracingCanvas.addEventListener("touchstart", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        const touchPos = getTouchPos(tracingCanvas, event);
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(touchPos.x, touchPos.y);
    });

    // Continue drawing on touch move (solid line)
    tracingCanvas.addEventListener("touchmove", function(event) {
        event.preventDefault(); // Prevent scrolling while drawing
        if (drawing) {
            const touchPos = getTouchPos(tracingCanvas, event);
            ctx.lineTo(touchPos.x, touchPos.y);
            ctx.stroke(); // Draw a solid line
        }
    });

    // Stop drawing on touch end
    tracingCanvas.addEventListener("touchend", function() {
        drawing = false;
    });

    // Stop drawing if touch is cancelled
    tracingCanvas.addEventListener("touchcancel", function() {
        drawing = false;
    });
    
    // Get the mouse coordinates relative to the canvas
    function getMousePos(canvas, mouseEvent) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
        };
    }

    // Start drawing on mouse down (solid line)
    tracingCanvas.addEventListener("mousedown", function(event) {
        const mousePos = getMousePos(tracingCanvas, event);
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(mousePos.x, mousePos.y);
    });

    // Continue drawing on mouse move (solid line)
    tracingCanvas.addEventListener("mousemove", function(event) {
        if (drawing) {
            const mousePos = getMousePos(tracingCanvas, event);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke(); // Draw a solid line
        }
    });

    // Stop drawing on mouse up
    tracingCanvas.addEventListener("mouseup", function() {
        drawing = false;
    });

    // Stop drawing on mouse out
    tracingCanvas.addEventListener("mouseout", function() {
        drawing = false;
    });
    
    break;
      
      
      
      
case "handwriting":
    const handwritingContainer = document.createElement("div");
    handwritingContainer.classList.add("handwriting-container"); // Add class for styling

    // Add a question prompt
    const handwritingPrompt = document.createElement("p");
    handwritingPrompt.innerHTML = q.prompt || "Please write your answer below:";
    handwritingContainer.appendChild(handwritingPrompt);

    // Add a reading prompt (title or introduction)
    if (q.readingPrompt) {
        const readingPrompt = document.createElement("h3");
        readingPrompt.innerHTML = q.readingPrompt;
        readingPrompt.classList.add("reading-prompt"); // Add class for styling
        readingContainer.appendChild(readingPrompt);
    }


    // Create a textarea for the user to type their handwritten response
    const handwritingTextarea = document.createElement("textarea");
    handwritingTextarea.setAttribute("rows", "5");
    handwritingTextarea.setAttribute("cols", "50");
    handwritingTextarea.setAttribute("placeholder", "Write your answer here...");
    handwritingTextarea.classList.add("handwriting-input"); // Add class for styling
    handwritingContainer.appendChild(handwritingTextarea);

    // Append the handwriting container to the question wrapper
    questionWrapper.appendChild(handwritingContainer);

    // Add the auto-resizing behavior for the textarea
    handwritingTextarea.addEventListener('input', function() {
        this.style.height = 'auto'; // Reset height
        this.style.height = (this.scrollHeight) + 'px'; // Adjust height based on content
    });
    break;
      
      
case "reading":
    const readingContainer = document.createElement("div");
    readingContainer.classList.add("reading-container"); // Add main container class for styling
      

    switch (q.subtype) {
        case "words":
            // For single words, aligned horizontally with a bigger font size
            readingContainer.classList.add("reading-words-container"); // Add specific class for styling

            // Loop through each word in readingContent and create a styled span
            q.readingContent.forEach(word => {
                const wordItem = document.createElement("span");
                wordItem.textContent = word;
                wordItem.classList.add("reading-word"); // Style for bigger font
                readingContainer.appendChild(wordItem);
            });
            break;

        case "short-sentences":
            // For shorter sentences, aligned vertically with smaller font size
            readingContainer.classList.add("reading-short-sentences-container"); // Add specific class for styling
            q.readingContent.forEach(sentence => {
                const sentenceItem = document.createElement("p");
                sentenceItem.textContent = sentence;
                sentenceItem.classList.add("reading-short-sentence"); // Style for smaller font
                readingContainer.appendChild(sentenceItem);
            });
            break;

        case "long-sentences":
            // For longer sentences, aligned vertically with normal font size
            readingContainer.classList.add("reading-long-sentences-container"); // Add specific class for styling
            q.readingContent.forEach(longSentence => {
                const longSentenceItem = document.createElement("p");
                longSentenceItem.textContent = longSentence;
                longSentenceItem.classList.add("reading-long-sentence"); // Style for normal font
                readingContainer.appendChild(longSentenceItem);
            });
            break;

        default:
            const defaultContent = document.createElement("p");
            defaultContent.innerHTML = q.readingContent || "Please read the following text:";
            defaultContent.classList.add("reading-content"); // General styling
            readingContainer.appendChild(defaultContent);
            break;
    }

    // Append the reading container to the question wrapper
    questionWrapper.appendChild(readingContainer);
    break;
      
      
case "sudoku":
    // Create a container for the sudoku-based question
    const sudokuQuestionContainer = document.createElement("div");
    sudokuQuestionContainer.classList.add("sudoku-based-container");

    // Create a question description or instruction
    const sudokuDescription = document.createElement("p");
    sudokuQuestionContainer.appendChild(sudokuDescription);

    // Dropdown to select puzzle size
    const sizeSelector = document.createElement("select");
    sizeSelector.innerHTML = `
        <option value="4">4x4 Sudoku</option>
        <option value="6">6x6 Sudoku</option>
        <option value="9" selected>9x9 Sudoku</option>
    `;
    sudokuQuestionContainer.appendChild(sizeSelector);

    // Container to display the selected Sudoku grid
    const sudokuGridContainer = document.createElement("div");
    sudokuQuestionContainer.appendChild(sudokuGridContainer);

    // Function to create a Sudoku grid based on selected size and data
function createSudokuGrid(size, maxValue, puzzleData) {
    sudokuGridContainer.innerHTML = ""; // Clear previous grid

    // Add the appropriate class based on size
    const sudokuTable = document.createElement("table");
    sudokuTable.classList.add("sudoku-table", `sudoku-table-${size}x${size}`); // Add the size-specific class

    for (let row = 0; row < size; row++) {
        const sudokuRow = document.createElement("tr");
        for (let col = 0; col < size; col++) {
            const sudokuCell = document.createElement("td");
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "number");
            inputField.setAttribute("min", "1");
            inputField.setAttribute("max", maxValue);
            inputField.classList.add("sudoku-input");

            // Set pre-filled values if present in the puzzle data
            if (puzzleData && puzzleData[row] && puzzleData[row][col] !== null) {
                inputField.value = puzzleData[row][col];
                inputField.setAttribute("readonly", true);
            }
            sudokuCell.appendChild(inputField);
            sudokuRow.appendChild(sudokuCell);
        }
        sudokuTable.appendChild(sudokuRow);
    }
    sudokuGridContainer.appendChild(sudokuTable);
}

    // Function to load the current question data into the grid
    function loadSudokuQuestion(question) {
        sudokuDescription.innerHTML = question.description; // Set the question description
        const selectedSize = parseInt(sizeSelector.value);
        const puzzleData = question.puzzleData[`${selectedSize}x${selectedSize}`];
        createSudokuGrid(selectedSize, selectedSize, puzzleData);
    }

    // Initial load of the default 9x9 Sudoku grid with the first question
    loadSudokuQuestion(q);

    // Update the grid when the selected size changes
    sizeSelector.addEventListener("change", function() {
        const selectedSize = parseInt(sizeSelector.value);
        const puzzleData = q.puzzleData[`${selectedSize}x${selectedSize}`];
        createSudokuGrid(selectedSize, selectedSize, puzzleData);
    });

    // Assume there's a refresh button that shuffles the question
    const refreshBtn = document.getElementById("refreshBtn"); // Make sure to add this button in your HTML
    refreshBtn.addEventListener("click", function() {
        // Shuffle questions and get a new question
        q = getNewShuffledQuestion(); // Assume this function shuffles and returns a new question
        loadSudokuQuestion(q); // Load the new question data into the grid
    });

    // Append the sudoku-based question container to the main question wrapper
    questionWrapper.appendChild(sudokuQuestionContainer);
    break;
      
      
      
      
case "identity":
    const identityContainer = document.createElement("div");
    identityContainer.classList.add("identity-container");

    // Add a prompt for the identity question
    const identityPrompt = document.createElement("h3");
    identityPrompt.innerHTML = q.identityPrompt;
    identityPrompt.classList.add("identity-prompt");
    identityContainer.appendChild(identityPrompt);

    // Create an array of numbers/letters
    const identityContent = q.identityContent; // Should be an array from your external file
    // Shuffle the content array
    const shuffledContent = identityContent.sort(() => Math.random() - 0.5);

    // Create a container for the identity items
    const identityContentContainer = document.createElement("div");
    identityContentContainer.classList.add("identity-content-container");

    // Generate identity items
    shuffledContent.forEach(item => {
        const identityItem = document.createElement("div");
        identityItem.classList.add("identity-item");
        identityItem.textContent = item;

        // Add click event to highlight the item
        identityItem.addEventListener("click", function() {
            this.classList.toggle("highlight"); // Toggle highlight on click
        });

        identityContentContainer.appendChild(identityItem);
    });

    // Append the content container to the identity container
    identityContainer.appendChild(identityContentContainer);

    // Append the entire identity container to the question wrapper
    questionWrapper.appendChild(identityContainer);
    break;
      
      
      
      
      
      
      
case "time":
    const timeContainer = document.createElement("div");
    timeContainer.classList.add("time-container");

    // Add time prompt
    if (q.timePrompt) {
        const timePrompt = document.createElement("h3");
        timePrompt.innerHTML = q.timePrompt;
        timePrompt.classList.add("time-prompt");
        timeContainer.appendChild(timePrompt);
    }

    // Create clock face
    const clockFace = document.createElement("div");
    clockFace.classList.add("clock-face");

    // Add hour numbers in a circular pattern
    for (let i = 1; i <= 12; i++) {
        const hourNumber = document.createElement("div");
        hourNumber.classList.add("hour-number");
        hourNumber.style.transform = `rotate(${i * 30}deg) translate(0, -80px) rotate(-${i * 30}deg)`;
        hourNumber.innerText = i;
        clockFace.appendChild(hourNumber);
    }

    // Add minute markers around the clock
    for (let i = 0; i < 60; i++) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("minute-mark");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -90px)`;
        clockFace.appendChild(minuteMark);
    }

    // Create clock hands for reading and setting modes
    const hourHand = document.createElement("div");
    hourHand.classList.add("clock-hand", "hour-hand");
    const minuteHand = document.createElement("div");
    minuteHand.classList.add("clock-hand", "minute-hand");
    clockFace.appendChild(hourHand);
    clockFace.appendChild(minuteHand);

    timeContainer.appendChild(clockFace);
    questionWrapper.appendChild(timeContainer);

    // Display time inputs for reading mode
    if (q.timeMode === "read") {
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");

        const hourInput = document.createElement("input");
        hourInput.type = "number";
        hourInput.placeholder = "Hour";
        hourInput.classList.add("time-input");
        inputContainer.appendChild(hourInput);

        const minuteInput = document.createElement("input");
        minuteInput.type = "number";
        minuteInput.placeholder = "Minute";
        minuteInput.classList.add("time-input");
        inputContainer.appendChild(minuteInput);

        timeContainer.appendChild(inputContainer);

        // Set the clock hands to the specified time
        const hourAngle = (q.displayedHour % 12) * 30 + (q.displayedMinute / 60) * 30;
        const minuteAngle = q.displayedMinute * 6;
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    } else if (q.timeMode === "set") {
        // Interactive clock for setting mode with touch support
        let isHourHandMoving = false;
        let isMinuteHandMoving = false;

        function rotateHand(e, hand, degreesPerStep) {
            const rect = clockFace.getBoundingClientRect();
            const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left - rect.width / 2;
            const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top - rect.height / 2;
            const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
            hand.style.transform = `rotate(${Math.round(angle / degreesPerStep) * degreesPerStep}deg)`;
        }

        hourHand.addEventListener("mousedown", () => { isHourHandMoving = true; });
        minuteHand.addEventListener("mousedown", () => { isMinuteHandMoving = true; });

        hourHand.addEventListener("touchstart", () => { isHourHandMoving = true; });
        minuteHand.addEventListener("touchstart", () => { isMinuteHandMoving = true; });

        document.addEventListener("mousemove", (e) => {
            if (isHourHandMoving) rotateHand(e, hourHand, 30);
            if (isMinuteHandMoving) rotateHand(e, minuteHand, 6);
        });

        document.addEventListener("touchmove", (e) => {
            if (isHourHandMoving) rotateHand(e, hourHand, 30);
            if (isMinuteHandMoving) rotateHand(e, minuteHand, 6);
        });

        document.addEventListener("mouseup", () => {
            isHourHandMoving = false;
            isMinuteHandMoving = false;
        });

        document.addEventListener("touchend", () => {
            isHourHandMoving = false;
            isMinuteHandMoving = false;
        });
    }

    break;
      
      
      
      
      
case "wordSearchPuzzle":
    const puzzleContainer = document.createElement("div");
    puzzleContainer.classList.add("puzzle-container");

    // Add puzzle prompt
    if (q.puzzlePrompt) {
        const puzzlePrompt = document.createElement("h3");
        puzzlePrompt.innerHTML = q.puzzlePrompt;
        puzzlePrompt.classList.add("puzzle-prompt");
        puzzleContainer.appendChild(puzzlePrompt);
    }

    // Puzzle grid dimensions (e.g., 10x10)
    const gridSize = q.gridSize || 10;
    const grid = [];
    const targetWords = q.targetWords || ["EXAMPLE", "WORD", "SEARCH"];
    let selectedCells = [];

    // Create the grid structure and add random letters
    for (let row = 0; row < gridSize; row++) {
        const rowElement = document.createElement("div");
        rowElement.classList.add("puzzle-row");

        const rowCells = [];
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("div");
            cell.classList.add("puzzle-cell");
            cell.innerText = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener("click", () => {
                cell.classList.toggle("highlighted");
                const cellId = `${row}-${col}`;
                if (selectedCells.includes(cellId)) {
                    selectedCells = selectedCells.filter(id => id !== cellId);
                } else {
                    selectedCells.push(cellId);
                }
                checkForWord();
            });

            rowElement.appendChild(cell);
            rowCells.push(cell);
        }

        puzzleContainer.appendChild(rowElement);
        grid.push(rowCells);
    }

    // Function to place target words in the grid
    function placeWord(word) {
        const directions = [
            { row: 0, col: 1 },  // Horizontal right
            { row: 1, col: 0 },  // Vertical down
            { row: 1, col: 1 },  // Diagonal down-right
            { row: -1, col: 1 }  // Diagonal up-right
        ];

        let placed = false;
        while (!placed) {
            const startRow = Math.floor(Math.random() * gridSize);
            const startCol = Math.floor(Math.random() * gridSize);
            const direction = directions[Math.floor(Math.random() * directions.length)];
            let canPlace = true;

            for (let i = 0; i < word.length; i++) {
                const row = startRow + i * direction.row;
                const col = startCol + i * direction.col;
                if (
                    row < 0 || row >= gridSize ||
                    col < 0 || col >= gridSize ||
                    (grid[row][col].innerText !== word[i] &&
                        grid[row][col].classList.contains("word-cell"))
                ) {
                    canPlace = false;
                    break;
                }
            }

            if (canPlace) {
                for (let i = 0; i < word.length; i++) {
                    const row = startRow + i * direction.row;
                    const col = startCol + i * direction.col;
                    grid[row][col].innerText = word[i];
                    grid[row][col].classList.add("word-cell"); // Mark as part of a word
                }
                placed = true;
            }
        }
    }

    // Place each word in the puzzle
    targetWords.forEach(placeWord);

    // Display target words below the puzzle grid
    const targetWordsContainer = document.createElement("div");
    targetWordsContainer.classList.add("target-words-container");
    targetWordsContainer.innerHTML = "<strong>Words to Find:</strong> " + targetWords.join(", ");
    puzzleContainer.appendChild(targetWordsContainer);

    // Check if selected cells form any target word
    function checkForWord() {
        const selectedWord = selectedCells
            .map(cellId => {
                const [row, col] = cellId.split("-").map(Number);
                return grid[row][col].innerText;
            })
            .join("");

        if (targetWords.includes(selectedWord)) {
            selectedCells.forEach(cellId => {
                const [row, col] = cellId.split("-").map(Number);
                grid[row][col].classList.add("found");
            });
            selectedCells = []; // Clear selection after finding a word
        }
    }

    questionWrapper.appendChild(puzzleContainer);
    break;
      
      
      
      
      
      
function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
      default:
        break;
    }
    questionsContainer.appendChild(questionWrapper);
  });

  
  localStorage.setItem('displayedQuestions', JSON.stringify(questions));
  
  // Show generate PDF button after displaying questions
  document.getElementById("generate-pdf").style.display = "block";
        }

        

// Function to generate PDF with random questions and marking key
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Title of the PDF
    doc.setFontSize(18);
    doc.text('Questions Bank', 10, 10);

    // Add questions to the PDF from the questionsBank array
    let yPosition = 20;  // Starting Y position for text in the PDF
    questionsBank.forEach((question, index) => {
        // Add each question to the PDF
        doc.setFontSize(12);
        doc.text(`${index + 1}. ${question.question}`, 10, yPosition);
        yPosition += 10;

        // Add choices if the question has them
        if (question.choices) {
            question.choices.forEach((choice, choiceIndex) => {
                doc.text(`    ${String.fromCharCode(65 + choiceIndex)}. ${choice}`, 10, yPosition);
                yPosition += 10;
            });
        }

        // Check if the Y position goes off the page, then add a new page
        if (yPosition > 270) { // Page break threshold
            doc.addPage();
            yPosition = 20; // Reset Y position on the new page
        }
    });

    // Save the PDF with a filename
    doc.save('questions_bank.pdf');
}

// Function to dynamically generate a button
function createSaveButton() {
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "💾";
    saveButton.setAttribute("id", "save-btn");
    
    // Append button to the page (you can append it anywhere appropriate)
    document.body.appendChild(saveButton);

    // Add event listener to save questions to local storage and open test.html
    saveButton.addEventListener("click", () => {
        saveQuestionsToLocalStorage();
        window.location.href = "test.html"; // Navigate to test.html
    });
}

// Function to save questions to local storage
function saveQuestionsToLocalStorage() {
    // Assuming you have an array of questions
    const question = [
        // Add your question data here, example format
        { type: "fill_in_the_blank", question: "What is 2 + 2?", answer: "4" },
        // Add more questions as needed
    ];

    // Save questions to local storage as JSON string
    localStorage.setItem("savedQuestions", JSON.stringify(question));

    console.log("Questions saved to local storage!");
}

// Assuming this code runs when questions are loaded dynamically
function loadQuestions() {
    // Your existing code to load questions dynamically goes here
    // Example question generation code (for fill-in-the-blank questions):
    const questionWrapper = document.createElement("div");
    questionWrapper.setAttribute("id", "questions");


    // Append questionWrapper to body (or another container)
    document.body.appendChild(questionWrapper);

    // After questions load, call the function to create the button
    createSaveButton();
}

// Call the function to load questions when appropriate (e.g., on page load)
window.onload = function () {
    loadQuestions();
};