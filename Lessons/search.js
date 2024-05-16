// search.js

// Function to filter lesson plans based on search input
function searchLessonPlans(lessonPlansArray, searchCriteria) {
    console.log("Received search criteria:", searchCriteria); // Log received search criteria
    
    const { title, grade, term, week, lessonNumber, subject } = searchCriteria;
    
    const filteredLessonPlans = lessonPlansArray.flatMap(lessonPlans => {
        return lessonPlans.filter(plan => {
            return plan.title.toLowerCase().includes(title.toLowerCase()) &&
                   plan.grade.toLowerCase().includes(grade.toLowerCase()) &&
                   plan.term.toLowerCase().includes(term.toLowerCase()) &&
                   plan.week.toLowerCase().includes(week.toLowerCase()) &&
                   plan.lessonNumber.toLowerCase().includes(lessonNumber.toLowerCase()) &&
                   plan.subject.toLowerCase().includes(subject.toLowerCase());
        });
    });

    console.log("Filtered lesson plans:", filteredLessonPlans); // Log filtered lesson plans
    
    return filteredLessonPlans;
}

export default searchLessonPlans;