window.registerWorkbook({
    id: 'science-grade3-term1-try',
    title: 'Science - Grade 3 Term 1',
    description: 'Introduction to Plants and Animals',
    subject: 'science',
    grade: 3,
    term: 1,
    pages: [
        {
            id: 'plants',
            title: 'All About Plants',
            questionLimit: 5, // Will show 5 random questions from this page
            exercises: [
                {
                    id: 'plant-parts',
                    title: 'Plant Parts',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which part of the plant absorbs water from the soil?',
                            options: ['Leaves', 'Stem', 'Roots', 'Flower'],
                            correctAnswer: 2,
                            explanation: 'Roots absorb water and nutrients from the soil to help the plant grow.',
                            shuffleOptions: true
                        },
                        {
                            type: 'true-false',
                            text: 'All plants have flowers.',
                            correctAnswer: false,
                            explanation: 'Many plants like ferns and mosses don\'t produce flowers.'
                        },
                        {
                            type: 'free-response',
                            text: 'Name two things plants need to grow.',
                            explanation: 'Plants need water, sunlight, air, and nutrients from soil to grow.'
                        },
                        {
                            type: 'multiple-choice',
                            text: 'What do leaves help the plant to do?',
                            options: ['Breathe', 'Make food', 'Grow taller', 'All of the above'],
                            correctAnswer: 1,
                            explanation: 'Leaves use sunlight to make food through photosynthesis.',
                            shuffleOptions: true
                        },
                        {
                            type: 'multiple-choice',
                            text: 'Which of these is NOT a plant part?',
                            options: ['Petals', 'Branches', 'Gills', 'Stem'],
                            correctAnswer: 2,
                            explanation: 'Gills are found on fish, not plants!',
                            shuffleOptions: true
                        }
                    ]
                }
            ]
        },
        {
            id: 'animals',
            title: 'Animal Characteristics',
            questionLimit: 4,
            exercises: [
                {
                    id: 'animal-groups',
                    title: 'Animal Groups',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which animal is a mammal?',
                            options: ['Eagle', 'Frog', 'Dolphin', 'Snake'],
                            correctAnswer: 2,
                            explanation: 'Dolphins are mammals that live in water.',
                            shuffleOptions: true
                        },
                        {
                            type: 'true-false',
                            text: 'All birds can fly.',
                            correctAnswer: false,
                            explanation: 'Some birds like penguins and ostriches cannot fly.'
                        }
                    ]
                }
            ]
        }
    ]
});