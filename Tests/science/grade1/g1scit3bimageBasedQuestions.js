const g1scit3bimageBasedQuestions = [
    {
        type: "image_based", // The case that matches your switch
        class: "Feather Flyers",
        subject: "Science",
        term: "Term 3",
        part: "End Term",
        imageSrc: "images/science/grade1/mango.png", // Path to the image (e.g., map image)
        question: "Identify the fruit in the image.", // Description or prompt for the question
        subType: "multiple_choice", // Subtype can be 'multiple_choice' or 'fill_in_the_blank'
        options: ["Guava", "Mango", "Apple", "Water Melon"], // Multiple-choice options
        correctAnswer: "Mango" // Correct answer (optional, for validation)
    },
    {
        type: "image_based",
        class: "Feather Flyers",
        subject: "Science",
        term: "Term 3",
        part: "End Term",
        imageSrc: "images/science/grade1/banana.png",
        question: "Name the given fruit.",
        subType: "fill_in_the_blank", // This will generate a fill-in-the-blank input field
        correctAnswer: "banana" // Correct answer for fill-in-the-blank (optional)
    }
];