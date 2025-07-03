registerWorkbook({
    id: 'math-grade1-term1',
    title: 'Mathematics - Grade 1 Term 1',
    description: 'Introduction to numbers and basic operations',
    subject: 'Mathematics',
    grade: 1,
    term: 1,
    pages: [
        {
            id: 'page1',
            title: 'Numbers 1-10',
            exercises: [
                {
                    id: 'counting',
                    title: 'Counting Practice',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'How many apples are shown in the picture?',
                            options: ['3', '5', '7', '9']
                        },
                        {
                            type: 'true-false',
                            text: 'The number 8 comes after 7.'
                        },
                        {
                            type: 'free-response',
                            text: 'Write the numbers from 1 to 10 in order.'
                        }
                    ]
                },
                {
                    id: 'number-recognition',
                    title: 'Number Recognition',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which number is shown as "five"?',
                            options: ['4', '5', '6', '7']
                        },
                        {
                            type: 'multiple-choice',
                            text: 'What is this number: 3?',
                            options: ['one', 'two', 'three', 'four']
                        }
                    ]
                }
            ]
        },
        {
            id: 'page2',
            title: 'Basic Addition',
            exercises: [
                {
                    id: 'addition1',
                    title: 'Adding Numbers',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'What is 2 + 3?',
                            options: ['4', '5', '6', '7']
                        },
                        {
                            type: 'free-response',
                            text: 'Solve: 4 + 5 = '
                        },
                        {
                            type: 'true-false',
                            text: '1 + 1 equals 3.'
                        }
                    ]
                }
            ]
        }
    ]
});