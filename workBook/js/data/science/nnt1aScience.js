window.registerWorkbook({
    id: 'reception-class-term1',
    title: 'Nestlings Navigators',
    description: 'Building foundational academic skills',
    subject: 'foundation',
    grade: 'reception',
    term: 1,
    pages: [
        {
            id: 'early-literacy',
            title: 'Early Literacy',
            questionLimit: 6,
            exercises: [
                {
                    id: 'phonics',
                    title: 'Phonics Fun',
                    questions: [
{
    type: 'listening',
    question: "What sound does this animal make?",
    image: 'images/animals/cow.png',  // Add this line for the picture
    audio: 'sounds/animals/cow-question.mp3',  // Main question audio
    options: [
        {
            text: "Moo", 
            correct: true,
            audio: 'sounds/animals/cow.mp3'  // Sound for this option
        },
        {
            text: "Baa", 
            correct: false,
            audio: 'sounds/animals/sheep.mp3'  // Sound for this option
        },
        {
            text: "Oink", 
            correct: false,
            audio: 'sounds/animals/pig.mp3'  // Sound for this option
        }
    ],
    explanation: "Cows say 'Moo'!"
},
{
    type: 'listening',
    question: "What sound does this animal make?",
    image: 'images/animals/lion.webp',  // Add this line for the picture
    options: [
        {
            text: "Moo", 
            correct: false,
            audio: 'sounds/animals/Tiger.mp3'  // Sound for this option
        },
        {
            text: "Baa", 
            correct: true,
            audio: 'sounds/animals/Lion.mp3'  // Sound for this option
        },
        {
            text: "Oink", 
            correct: false,
            audio: 'sounds/animals/African Elephant.mp3'  // Sound for this option
        }
    ],
    explanation: "Lions roar 'Moo'!"
},
                    

                    ]
                }
            ]
        }
    ]
});