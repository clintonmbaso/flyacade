registerWorkbook({
    id: 'english-grade3-term3',
    title: 'English - Grade 3 Term 3',
    description: 'Reading Comprehension and Grammar',
    subject: 'English',
    grade: 3,
    term: 3,
    pages: [
        {
            id: 'grammar',
            title: 'Grammar Practice',
            questionLimit: 5,
            exercises: [
                {
                    id: 'nouns-verbs',
                    title: 'Nouns and Verbs',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which word is a verb in this sentence: "The dog runs quickly"?',
                            options: ['dog', 'runs', 'quickly', 'the'],
                            correctAnswer: 1,
                            explanation: 'Verbs are action words - "runs" is the action.',
                            shuffleOptions: true
                        },
                        {
                            type: 'true-false',
                            text: '"Happiness" is a verb.',
                            correctAnswer: false,
                            explanation: '"Happiness" is a noun (a thing). Verbs show action.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'comprehension',
            title: 'Reading Comprehension',
            questionLimit: 4,
            exercises: [
                {
                    id: 'story-questions',
                    title: 'Story: The Lost Puppy',
                    content: 'Tom found a small puppy near the park. It was brown with white paws and looked scared. Tom took it home and gave it some milk.',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Where did Tom find the puppy?',
                            options: ['At school', 'Near the park', 'In his house', 'At the shop'],
                            correctAnswer: 1,
                            explanation: 'The story says "near the park".',
                            shuffleOptions: true
                        },
                        {
                            type: 'free-response',
                            text: 'What did Tom give the puppy?',
                            explanation: 'The story says Tom "gave it some milk".'
                        }
                    ]
                }
            ]
        }
    ]
});