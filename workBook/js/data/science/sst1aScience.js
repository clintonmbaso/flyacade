window.registerWorkbook({
    id: 'middle-class-term1',
    title: 'Sky Sprouts Explorers',
    description: 'Developing early learning skills',
    subject: 'foundation',
    grade: 'middle',
    term: 1,
    pages: [
        {
            id: 'letters-and-numbers',
            title: 'Letters and Numbers',
            questionLimit: 5,
            exercises: [
                {
                    id: 'letter-tracing',
                    title: 'Letter Tracing',
                    questions: [
                        {
                            type: 'tracing',
                            item: 'Letter A',
                            image: 'images/letters/A-tracing.png',
                            explanation: "Start at the top and make two diagonal lines"
                        },
                        {
                            type: 'counting',
                            question: "How many apples are there?",
                            image: 'images/counting/apples-5.png',
                            correctAnswer: 5,
                            explanation: "Let's count together: 1, 2, 3, 4, 5!"
                        }
                    ]
                }
            ]
        }
    ]
});