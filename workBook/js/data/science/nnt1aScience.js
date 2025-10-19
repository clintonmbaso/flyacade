window.registerWorkbook({
    id: 'nnt1aScience',
    title: 'Sound Identification',
    description: 'Mid Term',
    subject: 'Science',
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
    image: '../Tests/images/science/middle/cow.png',  // Add this line for the picture
    options: [
        {
            text: "Moo", 
            correct: true,
            audio: 'sounds/animals/cow.mp3'  // Sound for this option
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
    image: '../Tests/images/science/middle/cat.png',  // Add this line for the picture
    options: [
        {
            text: "Oink", 
            correct: false,
            audio: 'sounds/animals/pig.mp3'  // Sound for this option
        },    
        {
            text: "Mweuw", 
            correct: true,
            audio: 'sounds/animals/cat.mp3'  // Sound for this option
        }
    ],
    explanation: "Cats say 'Mweuw'!"
},
{
    type: 'listening',
    question: "What sound does this animal make?",
    image: '../Tests/images/science/middle/chicken.png',  // Add this line for the picture
    options: [
        {
            text: "kokoliko", 
            correct: true,
            audio: 'sounds/animals/chicken.mp3'  // Sound for this option
        },    
        {
            text: "Mweuw", 
            correct: false,
            audio: 'sounds/animals/cat.mp3'  // Sound for this option
        }
    ],
    explanation: "Pigs say 'Oink'!"
},
                    
/*
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
*/

                    ]
                }
            ]
        }
    ]
});