const g5matht3bgraphicalQuestions = [
{
    type: "math",
    subtype: "statistics",
    chartType: "bar-chart",
    class: "Avian Aces",
    subject: "Mathematics",
    term: "Term 3",
    part: "End Term",  
    question: "Analyze the bar chart showing the number of books read by students in each grade during the month of September.",
    chartData: {
        labels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
        values: [12, 18, 20, 15, 10] // Number of books read per grade
    }
},
{
    type: "math",
    subtype: "statistics",
    chartType: "pie-chart",
    class: "Avian Aces",
    subject: "Mathematics",
    term: "Term 3",
    part: "End Term",
    question: "What percentage of the total is represented by 'Category A'?",
        chartData: {
            labels: ["Category A", "Category B", "Category C"],
            values: [45, 25, 30], // Values for each category
        },
        choices: ["45%", "25%", "30%", "50%"],
        correctAnswer: "45%"
    
},




{
    type: "math",
    subtype: "statistics",
    chartType: "line-graph",
    class: "Avian Aces",
    subject: "Mathematics",
    term: "Term 3",
    part: "End Term",
    question: "Review the line graph showing the average temperature over the first week of June. Use the data to answer the questions.",
    chartData: {
        labels: ["June 1", "June 2", "June 3", "June 4", "June 5", "June 6", "June 7"],
        values: [22, 24, 23, 26, 25, 27, 28] // Temperatures in degrees Celsius
    }
},
{
    type: "math",
    subtype: "statistics",
    chartType: "pictograph",
    class: "Avian Aces",
    subject: "Mathematics",
    term: "Term 3",
    part: "End Term",  
    question: "Look at the pictograph showing the number of apples picked by each student. Each 🍎 represents 5 apples. Answer the questions based on the chart.",
    chartData: {
        labels: ["Alice", "Ben", "Carla", "David"],
        values: [3, 5, 2, 4] // Represents number of icons for each student
    },
    icon: "🍎", // Icon for each unit in the pictograph
    unitValue: 5 // Each icon represents 5 apples
}
];