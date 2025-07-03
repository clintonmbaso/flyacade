registerWorkbook({
    id: 'science-grade2-term1',
    title: 'Science - Grade 2 Term 1',
    description: 'Introduction to plants and animals',
    subject: 'science',
    grade: 2,
    term: 1,
    pages: [
        {
            id: 'page1',
            title: 'Parts of a Plant',
            exercises: [
                {
                    id: 'plant-parts',
                    title: 'Plant Parts Identification',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Which part of the plant is underground?',
                            options: ['Leaf', 'Flower', 'Root', 'Stem']
                        },
                        {
                            type: 'free-response',
                            text: 'Name three parts of a plant.'
                        }
                    ]
                }
            ]
        },
        {
            id: 'page2',
            title: 'Animal Habitats',
            exercises: [
                {
                    id: 'habitats',
                    title: 'Where Animals Live',
                    questions: [
                        {
                            type: 'multiple-choice',
                            text: 'Where does a fish live?',
                            options: ['Forest', 'Ocean', 'Desert', 'Mountain']
                        },
                        {
                            type: 'true-false',
                            text: 'All animals live in the same habitat.'
                        }
                    ]
                }
            ]
        }
    ]
});