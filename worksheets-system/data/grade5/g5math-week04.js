// Grade 5 Math - Week 4 Data
const grade5MathWeek4 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 4,
        title: "Mapping and Relations",
        description: "Introduction to mapping, ordered pairs, and relations between sets"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Mapping",
        subtopic: "Basic concepts of mapping between sets",
        lessonContent: `
            <p>Today we will learn about mapping, which is a way to relate elements from one set to another.</p>
            <p><strong>Key Concept:</strong> A mapping shows how elements in one set are connected to elements in another set. Think of it like matching things together.</p>
            <p>We use arrows to show mappings: from the first set (input) to the second set (output).</p>
            <p><strong>Remember:</strong> You can create one-to-one mappings (each element matches to one other) or one-to-many mappings (one element matches to several).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: One-to-One Mapping</div>
                <p>Set A: {apple, banana, orange}</p>
                <p>Set B: {red, yellow, orange}</p>
                <p>Mapping: apple → red, banana → yellow, orange → orange</p>
                <p>Each fruit maps to exactly one color.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: One-to-Many Mapping</div>
                <p>Set A: {teacher}</p>
                <p>Set B: {student1, student2, student3}</p>
                <p>Mapping: teacher → student1, teacher → student2, teacher → student3</p>
                <p>One teacher maps to many students.</p>
            </div>
        `,
        taskInstructions: "Create mappings for the following sets. Draw arrows to show the connections!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Set X: {dog, cat, bird} <br>
                Set Y: {bark, meow, chirp}<br>
                Create a one-to-one mapping:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Set A: {sun} <br>
                Set B: {light, heat, energy}<br>
                Create a one-to-many mapping:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your own two sets and draw a mapping between them:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Look around your home. Find 3 examples of mappings (like light switches to lights, remote buttons to TV functions). Draw them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Mapping Techniques",
        subtopic: "Different types of mappings and their applications",
        lessonContent: `
            <p>Today we will explore different mapping techniques and their real-world applications.</p>
            <p><strong>Types of Mappings:</strong></p>
            <ul>
                <li><strong>One-to-One:</strong> Each element in Set A maps to exactly one element in Set B</li>
                <li><strong>One-to-Many:</strong> One element in Set A maps to multiple elements in Set B</li>
                <li><strong>Many-to-One:</strong> Multiple elements in Set A map to the same element in Set B</li>
                <li><strong>Many-to-Many:</strong> Multiple elements in Set A map to multiple elements in Set B</li>
            </ul>
            <p><strong>Real-World Application:</strong> Phone contacts (name → number) is one-to-one. A recipe (ingredient → measurement) is often many-to-one.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Many-to-One Mapping</div>
                <p>Set A: {cat, dog, rabbit, hamster}</p>
                <p>Set B: {pet}</p>
                <p>All animals map to "pet": cat → pet, dog → pet, rabbit → pet, hamster → pet</p>
                <p>Many animals map to one category.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Many-to-Many Mapping</div>
                <p>Set A: {students in class}</p>
                <p>Set B: {subjects they study}</p>
                <p>Each student studies multiple subjects, and each subject has multiple students.</p>
            </div>
        `,
        taskInstructions: "Identify the type of mapping in each scenario. Draw mapping diagrams or tables to represent them.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Identify: Each student has one student ID number.<br>
                Type: <span class="answer-space" style="width: 150px;"></span><br>
                Draw the mapping:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Identify: One teacher teaches multiple classes.<br>
                Type: <span class="answer-space" style="width: 150px;"></span><br>
                Draw the mapping:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create a table showing a many-to-one mapping:<br>
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Find a real-world example of many-to-many mapping in your school:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Create a mapping diagram showing how different rooms in your house map to their functions (kitchen → cooking, bedroom → sleeping, etc.).",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Introduction to Relations", 
        subtopic: "Understanding relations and ordered pairs",
        lessonContent: `
            <p>Today we will learn about relations, which are special types of mappings expressed as ordered pairs.</p>
            <p><strong>Key Concept:</strong> A relation is a set of ordered pairs that shows a relationship between two sets.</p>
            <p><strong>Ordered Pair:</strong> Written as (x, y) where x comes from the first set (domain) and y comes from the second set (range).</p>
            <p><strong>Domain:</strong> All the first elements in the ordered pairs.</p>
            <p><strong>Range:</strong> All the second elements in the ordered pairs.</p>
            <p>We can show relations using diagrams, tables, or sets of ordered pairs.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Relation</div>
                <p>Set A: {1, 2, 3}</p>
                <p>Set B: {a, b, c}</p>
                <p>Relation: {(1, a), (2, b), (3, c)}</p>
                <p><strong>Domain:</strong> {1, 2, 3}</p>
                <p><strong>Range:</strong> {a, b, c}</p>
                <p>Diagram: 1 → a, 2 → b, 3 → c</p>
            </div>
        `,
        taskInstructions: "For each relation, identify the domain and range. Draw diagrams to visualize the relations.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Relation: {(cat, meow), (dog, bark), (cow, moo)}<br>
                Domain: <span class="answer-space" style="width: 150px;"></span><br>
                Range: <span class="answer-space" style="width: 150px;"></span><br>
                Draw the relation diagram:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Create a relation between days of the week and their first letter:<br>
                Your relation (as ordered pairs): <span class="answer-space" style="width: 200px;"></span><br>
                Domain: <span class="answer-space" style="width: 150px;"></span><br>
                Range: <span class="answer-space" style="width: 150px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Make a table for this relation: {(apple, red), (banana, yellow), (grape, purple)}<br>
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own relation with at least 4 ordered pairs:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Find 5 relations in your daily life. Write them as sets of ordered pairs and identify domain and range.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Ordered Pairs and Relations", 
        subtopic: "Plotting ordered pairs on coordinate planes",
        lessonContent: `
            <p>Today we will learn to plot ordered pairs on a coordinate plane. This helps us visualize relations!</p>
            <p><strong>Coordinate Plane:</strong> Has two axes: x-axis (horizontal) and y-axis (vertical).</p>
            <p><strong>Ordered Pair (x, y):</strong> x tells how far to go right/left, y tells how far to go up/down.</p>
            <p><strong>Steps to Plot:</strong></p>
            <ol>
                <li>Start at the origin (0, 0)</li>
                <li>Move right if x is positive, left if x is negative</li>
                <li>Move up if y is positive, down if y is negative</li>
                <li>Mark the point!</li>
            </ol>
            <p><strong>Real-World Example:</strong> A treasure map uses coordinates like (3 steps east, 2 steps north).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Plotting (2, 3)</div>
                <p>1. Start at (0, 0)</p>
                <p>2. Move 2 units right (positive x)</p>
                <p>3. Move 3 units up (positive y)</p>
                <p>4. You're at point (2, 3)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Relation on Coordinate Plane</div>
                <p>Relation: {(1, 2), (2, 4), (3, 6)}</p>
                <p>When plotted, these points show a pattern: y is always 2 times x!</p>
                <p>This is y = 2x relation.</p>
            </div>
        `,
        taskInstructions: "Plot the ordered pairs on the coordinate planes (draw them below). Identify patterns in the relations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Plotting Practice:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Plot these points: (1, 1), (2, 2), (3, 3), (4, 4)<br>
                    What pattern do you see? <span class="answer-space" style="width: 200px;"></span><br>
                    Draw your coordinate plane:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Plot: (0, 0), (1, 3), (2, 6), (3, 9)<br>
                    Pattern: <span class="answer-space" style="width: 200px;"></span><br>
                    Draw:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Create Your Own:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a relation where y is always 5 more than x.<br>
                    Write 4 ordered pairs: <span class="answer-space" style="width: 250px;"></span><br>
                    Draw the points:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Real-World Application:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine a treasure at (5, 3). Draw a coordinate plane and plot the treasure. Draw your path from (0, 0) to the treasure.
                    <div class="drawing-area" style="height: 180px;"></div>
                </div>
            </div>
        `,
        homework: "Design a mini treasure map using coordinates. Include at least 5 locations as ordered pairs.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Mapping and Relations Review",
        subtopic: "Weekly summary and application",
        lessonContent: `
            <p>Congratulations! You've completed Week 4 of Mapping and Relations. Let's review everything we learned.</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Basic concepts of mapping between sets</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Different types of mappings: one-to-one, one-to-many, many-to-one, many-to-many</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Understanding relations as sets of ordered pairs</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Identifying domain and range of relations</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Plotting ordered pairs on coordinate planes</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Key Vocabulary:</strong></p>
                <p><strong>Mapping:</strong> Showing how elements from one set relate to elements in another set</p>
                <p><strong>Relation:</strong> A set of ordered pairs showing relationships</p>
                <p><strong>Ordered Pair:</strong> (x, y) where x is from domain, y is from range</p>
                <p><strong>Domain:</strong> All first elements in a relation</p>
                <p><strong>Range:</strong> All second elements in a relation</p>
                <p><strong>Coordinate Plane:</strong> Grid for plotting points with x and y axes</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What type of mapping is this?<br>
                    Person → Phone Number<br>
                    Answer: <span class="answer-space" style="width: 150px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> For the relation {(2, 4), (3, 6), (4, 8)}<br>
                    Domain: <span class="answer-space" style="width: 150px;"></span><br>
                    Range: <span class="answer-space" style="width: 150px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Plot the point (3, 5) on this grid:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Create a many-to-one mapping example:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most interesting thing you learned about mapping?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Design a relation between months and their number (Jan=1, Feb=2, etc.). Write as ordered pairs:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a 'Family Relations Map' showing how family members relate to each other using mapping concepts.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek4);
    console.log("math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek4);
    console.log("math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek4',
        metadata: grade5MathWeek4.metadata,
        days: grade5MathWeek4
    });
    console.log("math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek4 = grade5MathWeek4;
console.log("math-week4.js loaded and registered successfully");