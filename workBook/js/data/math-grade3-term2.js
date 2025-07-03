registerWorkbook({
    id: 'math-grade3-term2',
    title: 'Mathematics - Grade 3 Term 2',
    description: 'Addition, Subtraction and Basic Fractions',
    subject: 'Mathematics',
    grade: 3,
    term: 2,
    pages: [
        {
            id: 'addition-subtraction',
            title: 'Adding and Subtracting',
            questionLimit: 6,
            exercises: [
                {
                    id: 'word-problems',
                    title: 'Word Problems',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'If Sarah has 12 sweets and gives 4 to her friend, how many does she have left?',
                            options: ['16', '8', '4', '10'],
                            correctAnswer: 1,
                            explanation: '12 - 4 = 8 sweets remaining.',
                            shuffleOptions: true
                        },
                        {
                            type: 'free-response',
                            text: 'Solve: 25 + 17 =',
                            explanation: '25 + 17 = 42 (20 + 10 = 30, 5 + 7 = 12, 30 + 12 = 42)'
                        }
                    ]
                },
                {
                    id: 'fractions',
                    title: 'Simple Fractions',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which fraction shows one half?',
                            options: ['1/4', '2/2', '1/2', '3/4'],
                            correctAnswer: 2,
                            explanation: '1/2 means one part out of two equal parts.',
                            shuffleOptions: true
                        },
                        {
                            type: 'true-false',
                            text: '3/4 is greater than 1/2',
                            correctAnswer: true,
                            explanation: '1/2 equals 2/4, so 3/4 is larger.'
                        }
                    ]
                }
            ]
        }
    ]
});