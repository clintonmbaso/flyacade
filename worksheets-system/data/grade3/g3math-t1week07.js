// Grade 3 Math - Week 7 Data
const grade3MathWeek7 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 7,
        title: "Introduction to Sets",
        description: "Learning about sets, elements, intersections, unions, subsets and supersets"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Sets",
        subtopic: "Basic elements of a set",
        lessonContent: `
            <p>Today we will learn about <strong>sets</strong>. A set is a collection of things that belong together.</p>
            <p><strong>Key Concept:</strong> A set is a group of objects, numbers, or ideas that share something in common. We usually use curly braces { } to show a set.</p>
            <p><strong>Examples of sets in real life:</strong></p>
            <ul>
                <li>A set of your favorite toys</li>
                <li>A set of fruits in a basket</li>
                <li>A set of colors in a rainbow</li>
                <li>A set of books on a shelf</li>
            </ul>
            <p><strong>Remember:</strong> A set can be any collection that makes sense together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: A set of shapes</div>
                <p>{🔺, ⬜, 🔵, 🔶} - This is a set of different shapes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: A set of numbers</div>
                <p>{1, 2, 3, 4, 5} - This is a set of counting numbers from 1 to 5.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: A set of animals</div>
                <p>{🐱, 🐶, 🐰, 🐦} - This is a set of pets.</p>
            </div>
        `,
        taskInstructions: "Identify the sets below. Draw or list items that would belong in each set.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Create a set of school supplies: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Create a set of fruits: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create a set of colors: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Look around your classroom. Name 3 sets you can see: 
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find 5 different sets in your home. Draw or list the items in each set.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Elements of a Set",
        subtopic: "Identifying and listing elements",
        lessonContent: `
            <p>Today we will learn about <strong>elements</strong> of a set. Elements are the individual items inside a set.</p>
            <p><strong>Key Concept:</strong> An element is a single member of a set. We use the symbol ∈ to show something is an element of a set.</p>
            <p><strong>How to list elements:</strong> We list elements inside curly braces, separated by commas.</p>
            <p><strong>Example:</strong> The set of primary colors = {red, yellow, blue}</p>
            <p>Here, "red" is an element, "yellow" is an element, and "blue" is an element.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Set of weekdays</div>
                <p>{Monday, Tuesday, Wednesday, Thursday, Friday}</p>
                <p>Elements: Monday, Tuesday, Wednesday, Thursday, Friday</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Set of even numbers less than 10</div>
                <p>{2, 4, 6, 8}</p>
                <p>Elements: 2, 4, 6, 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Identifying elements</div>
                <p>Is "apple" an element of {banana, orange, grape}? <strong>No</strong></p>
                <p>Is "orange" an element of {banana, orange, grape}? <strong>Yes</strong></p>
            </div>
        `,
        taskInstructions: "List all elements in each set. Then answer the questions about elements.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Set A = {a, b, c, d, e}<br>
                List the elements: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Set B = {1, 3, 5, 7, 9}<br>
                How many elements does Set B have? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Set C = {🐱, 🐶, 🐭}<br>
                Is 🐰 an element of Set C? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own set with 6 elements:<br>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Create 3 different sets with 4-5 elements each. Write them using proper set notation {}.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Intersection and Union of Sets", 
        subtopic: "Finding common elements and combining sets",
        lessonContent: `
            <p>Today we will learn about <strong>intersection</strong> and <strong>union</strong> of sets.</p>
            <p><strong>Intersection (∩):</strong> The intersection of two sets contains only the elements that are in BOTH sets.</p>
            <p><strong>Union (∪):</strong> The union of two sets contains ALL elements from BOTH sets (without repeating).</p>
            <p><strong>Visualizing with Venn diagrams:</strong> We can use overlapping circles to show how sets relate to each other.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Intersection</div>
                <p>Set A = {1, 2, 3, 4}</p>
                <p>Set B = {3, 4, 5, 6}</p>
                <p>A ∩ B = {3, 4} (only the numbers in both sets)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Union</div>
                <p>Set A = {1, 2, 3, 4}</p>
                <p>Set B = {3, 4, 5, 6}</p>
                <p>A ∪ B = {1, 2, 3, 4, 5, 6} (all numbers from both sets)</p>
            </div>
        `,
        taskInstructions: "Find the intersection and union of the following sets.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Set X = {a, b, c, d}<br>
                Set Y = {c, d, e, f}<br>
                X ∩ Y = <span class="answer-space"></span><br>
                X ∪ Y = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Set P = {red, blue, green}<br>
                Set Q = {blue, yellow, purple}<br>
                P ∩ Q = <span class="answer-space"></span><br>
                P ∪ Q = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a Venn diagram showing:<br>
                Set A = {1, 2, 3, 4}<br>
                Set B = {3, 4, 5, 6}<br>
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create two sets that have an intersection of {apple}:<br>
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find two sets in your kitchen. List their intersection and union.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Subsets and Supersets", 
        subtopic: "Identifying subsets and supersets",
        lessonContent: `
            <p>Today we will learn about <strong>subsets</strong> and <strong>supersets</strong>.</p>
            <p><strong>Subset (⊆):</strong> Set A is a subset of Set B if ALL elements of A are also in B.</p>
            <p><strong>Superset (⊇):</strong> Set B is a superset of Set A if B contains ALL elements of A (and possibly more).</p>
            <p><strong>Every set is a subset of itself!</strong> The empty set {} is a subset of every set.</p>
            <p><strong>Tip:</strong> If A is a subset of B, then B is a superset of A.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Subset</div>
                <p>Set A = {1, 2}</p>
                <p>Set B = {1, 2, 3, 4}</p>
                <p>A ⊆ B (A is a subset of B because all elements of A are in B)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: NOT a subset</div>
                <p>Set C = {1, 5}</p>
                <p>Set D = {1, 2, 3, 4}</p>
                <p>C is NOT a subset of D because 5 is not in D</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Superset</div>
                <p>Set E = {a, b, c, d, e}</p>
                <p>Set F = {a, b, c}</p>
                <p>E ⊇ F (E is a superset of F)</p>
            </div>
        `,
        taskInstructions: "Determine if the first set is a subset of the second set. Also identify supersets.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Set A = {2, 4}<br>
                Set B = {1, 2, 3, 4, 5}<br>
                Is A ⊆ B? <span class="answer-space"></span><br>
                Is B ⊇ A? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Set C = {cat, dog}<br>
                Set D = {cat, bird, fish}<br>
                Is C ⊆ D? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Set E = {red, blue}<br>
                Set F = {red, blue, green, yellow}<br>
                List all subsets of Set E: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create a set that is a superset of {apple, banana}:<br>
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 3 examples of subsets in your home (e.g., set of blue toys is a subset of all toys).",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review and Set Operations",
        subtopic: "Comprehensive review of all set concepts",
        revisionContent: `
            <p>Congratulations! You've completed Week 7 on Sets. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> What a set is and real-life examples</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Elements of a set and how to list them</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Intersection of sets (common elements)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Union of sets (combining all elements)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subsets and supersets</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Set Vocabulary:</strong></p>
                <p><strong>Set:</strong> A collection of objects, numbers, or ideas</p>
                <p><strong>Element:</strong> A single member of a set</p>
                <p><strong>Intersection (∩):</strong> Elements that are in BOTH sets</p>
                <p><strong>Union (∪):</strong> ALL elements from both sets</p>
                <p><strong>Subset (⊆):</strong> A set whose elements are all in another set</p>
                <p><strong>Superset (⊇):</strong> A set that contains all elements of another set</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the elements: {spring, summer, fall, winter}<br>
                    How many elements? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Set A = {1, 3, 5}<br>
                    Set B = {3, 5, 7}<br>
                    A ∩ B = <span class="answer-space"></span><br>
                    A ∪ B = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Is {a, b} a subset of {a, b, c, d}? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a Venn diagram for:<br>
                    Fruits = {apple, banana, orange}<br>
                    Yellow things = {banana, sun, lemon}<br>
                    <div class="drawing-area" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create a set that is a superset of {circle, square}:<br>
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was your favorite thing about learning sets?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend practice: Create a family tree as sets. Each person is an element, and families are sets.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek7);
    console.log("math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek7);
    console.log("math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek7',
        metadata: grade3MathWeek7.metadata,
        days: grade3MathWeek7
    });
    console.log("math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek7 = grade3MathWeek7;
console.log("math-week7.js loaded and registered successfully");