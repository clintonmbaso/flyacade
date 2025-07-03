registerWorkbook({
    id: 'english-grade1-term1',
    title: 'English - Grade 1 Term 1',
    description: 'Introduction to letters and basic reading',
    subject: 'English',
    grade: 1,
    term: 1,
    pages: [
        {
            id: 'page1',
            title: 'The Alphabet',
            exercises: [
                {
                    id: 'letter-recognition',
                    title: 'Letter Recognition',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which letter comes after "A"?',
                            options: ['B', 'C', 'D', 'Z']
                        },
                        {
                            type: 'free-response',
                            text: 'Write the first five letters of the alphabet in order.'
                        }
                    ]
                },
                {
                    id: 'letter-sounds',
                    title: 'Letter Sounds',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which letter makes the "sss" sound?',
                            options: ['A', 'M', 'S', 'T']
                        }
                    ]
                }
            ]
        },
        {
            id: 'page2',
            title: 'Simple Words',
            exercises: [
                {
                    id: 'word-formation',
                    title: 'Forming Words',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which of these is a word?',
                            options: ['cat', 'xtp', 'mkl', 'qrs']
                        },
                        {
                            type: 'free-response',
                            text: 'Write a simple 3-letter word that starts with "b".'
                        }
                    ]
                }
            ]
        }
    ]
});