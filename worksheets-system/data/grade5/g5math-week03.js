// Grade 5 Math - Week 3 Data
const grade5MathWeek3 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        week: 3,
        title: "Understanding Sets",
        description: "Introduction to sets, notations, subsets, Venn diagrams, and set operations"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Understanding Sets",
        subtopic: "Introduction to Sets and Types of Sets",
        lessonContent: `
            <p>Welcome to the world of sets! A set is a collection of distinct objects, called elements. Sets help us organize and group things in mathematics.</p>
            <p><strong>Key Concepts:</strong></p>
            <ul>
                <li><strong>Set:</strong> A collection of distinct elements (e.g., {1, 2, 3})</li>
                <li><strong>Empty Set (∅ or {}):</strong> A set with no elements</li>
                <li><strong>Finite Set:</strong> A set with a countable number of elements</li>
                <li><strong>Infinite Set:</strong> A set with endless elements (e.g., natural numbers)</li>
            </ul>
            <p>We can represent sets in different ways: roster form (listing elements), set-builder form (describing properties), and using Venn diagrams.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Roster Form</div>
                <p>Set of primary colors: {red, yellow, blue}</p>
                <p>Set of even numbers less than 10: {2, 4, 6, 8}</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Set-Builder Form</div>
                <p>{x | x is a vowel in the English alphabet} = {a, e, i, o, u}</p>
                <p>{x | x is a whole number less than 5} = {0, 1, 2, 3, 4}</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Types of Sets</div>
                <p>Empty set: ∅ or {}</p>
                <p>Finite set: {apple, banana, orange} (3 elements)</p>
                <p>Infinite set: {1, 2, 3, 4, ...} (natural numbers)</p>
            </div>
        `,
        taskInstructions: "Identify the type of set and represent it in roster form where possible.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> The set of days in a week: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> The set of planets in our solar system: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> The set of whole numbers greater than 10: <span class="answer-space"></span> (What type of set is this?)
            </div>
            <div class="task-item">
                <span class="task-number">4</span> The set of months starting with 'J': <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Create your own finite set with 5 elements: <span class="answer-space"></span>
            </div>
        `,
        homework: "Find 3 examples of sets in your home or neighborhood. Write them in roster form and identify their type.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Notations and Symbols",
        subtopic: "Set Symbols and Terminology",
        lessonContent: `
            <p>Today we'll learn the special language of sets - the symbols and notations that mathematicians use.</p>
            <p><strong>Key Symbols:</strong></p>
            <ul>
                <li><strong>∈ (element of):</strong> Means "is an element of" or "belongs to"</li>
                <li><strong>∉ (not an element of):</strong> Means "is not an element of"</li>
                <li><strong>⊆ (subset):</strong> Means "is a subset of"</li>
                <li><strong>⊂ (proper subset):</strong> Means "is a proper subset of" (smaller than the original)</li>
                <li><strong>∅ or { } (empty set):</strong> The set with no elements</li>
                <li><strong>| (such that):</strong> Used in set-builder notation</li>
            </ul>
            <p><strong>Important:</strong> The order of elements in a set doesn't matter, and we don't repeat elements.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Element Notation</div>
                <p>If A = {1, 2, 3}, then:</p>
                <p>2 ∈ A (2 is an element of A)</p>
                <p>5 ∉ A (5 is not an element of A)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subset Notation</div>
                <p>If B = {a, b, c, d}, then:</p>
                <p>{a, b} ⊆ B ({a, b} is a subset of B)</p>
                <p>{a, b, c, d} ⊆ B (every set is a subset of itself)</p>
                <p>{a, b, c, d} ⊂ B is FALSE (not a proper subset since they're equal)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Set-Builder with Symbols</div>
                <p>{x | x ∈ ℕ and x < 5} = {1, 2, 3, 4}</p>
                <p>(The set of all x such that x is a natural number and x is less than 5)</p>
            </div>
        `,
        taskInstructions: "Use the correct symbols to complete the statements below.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> If P = {2, 4, 6, 8}, then: 4 <span class="answer-space" style="width: 50px;"></span> P
            </div>
            <div class="task-item">
                <span class="task-number">2</span> If Q = {a, e, i, o, u}, then: b <span class="answer-space" style="width: 50px;"></span> Q
            </div>
            <div class="task-item">
                <span class="task-number">3</span> If R = {1, 2, 3, 4, 5}, then: {2, 4} <span class="answer-space" style="width: 50px;"></span> R
            </div>
            <div class="task-item">
                <span class="task-number">4</span> The set of no elements is called the <span class="answer-space"></span> set.
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Write in set-builder notation: The set of all even numbers between 1 and 11.
                <div class="answer-space" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> True or False: { } ⊆ {1, 2, 3} <span class="answer-space" style="width: 50px;"></span>
            </div>
        `,
        homework: "Create 5 statements using set symbols (∈, ∉, ⊆, ∅) based on sets you find in your textbook.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Understanding Subsets", 
        subtopic: "Subsets and Proper Subsets",
        lessonContent: `
            <p>A subset is a set whose elements are all contained within another set. Today we'll explore this important relationship between sets.</p>
            <p><strong>Key Definitions:</strong></p>
            <ul>
                <li><strong>Subset (A ⊆ B):</strong> Every element of A is also in B</li>
                <li><strong>Proper Subset (A ⊂ B):</strong> A is a subset of B but A ≠ B</li>
                <li><strong>Power Set:</strong> The set of all subsets of a given set</li>
            </ul>
            <p><strong>Important Facts:</strong></p>
            <ul>
                <li>Every set is a subset of itself</li>
                <li>The empty set is a subset of every set</li>
                <li>If A has n elements, it has 2ⁿ subsets</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Finding Subsets</div>
                <p>Let S = {a, b, c}</p>
                <p>All subsets of S: ∅, {a}, {b}, {c}, {a, b}, {a, c}, {b, c}, {a, b, c}</p>
                <p>That's 2³ = 8 subsets total</p>
                <p>Proper subsets: All except {a, b, c} itself</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Subset Relationships</div>
                <p>If T = {1, 2, 3, 4, 5} and U = {2, 4}</p>
                <p>U ⊆ T (true, all elements of U are in T)</p>
                <p>U ⊂ T (true, U is a proper subset of T)</p>
                <p>{1, 3, 5} ⊆ T (true)</p>
                <p>{1, 2, 3, 4, 5} ⊆ T (true, every set is a subset of itself)</p>
            </div>
        `,
        taskInstructions: "Determine if the statements are true or false. List all subsets where asked.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> If A = {x, y, z}, is {x, y} ⊆ A? <span class="answer-space" style="width: 50px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> List all subsets of B = {1, 2}:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many subsets does C = {p, q, r, s} have? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> True or False: ∅ ⊆ {apple, banana} <span class="answer-space" style="width: 50px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> If D = {2, 4, 6, 8} and E = {4, 8}, is E ⊂ D? <span class="answer-space" style="width: 50px;"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Create a set with 3 elements, then list all its proper subsets:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find 3 examples of subset relationships in real life (e.g., types of fruit within all fruits).",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Introduction to Venn Diagrams", 
        subtopic: "Visualizing Set Relationships",
        lessonContent: `
            <p>Venn diagrams are visual tools that help us understand relationships between sets. They use circles (or other shapes) to represent sets and their overlaps.</p>
            <p><strong>How to Draw Venn Diagrams:</strong></p>
            <ol>
                <li>Draw a rectangle to represent the universal set (everything we're considering)</li>
                <li>Draw circles inside for each set</li>
                <li>Place elements in the appropriate regions</li>
                <li>Overlapping areas show elements common to multiple sets</li>
            </ol>
            <p><strong>Key Regions:</strong></p>
            <ul>
                <li><strong>Union (A ∪ B):</strong> All elements in A OR B (or both)</li>
                <li><strong>Intersection (A ∩ B):</strong> Elements in both A AND B</li>
                <li><strong>Difference (A - B):</strong> Elements in A but NOT in B</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Basic Venn Diagram</div>
                <p>Let A = {1, 2, 3, 4} and B = {3, 4, 5, 6}</p>
                <p>A ∩ B = {3, 4} (intersection - in both)</p>
                <p>A ∪ B = {1, 2, 3, 4, 5, 6} (union - in either)</p>
                <p>A - B = {1, 2} (in A but not B)</p>
                <p>Draw circles overlapping with 3,4 in the overlap, 1,2 only in A, 5,6 only in B</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Three-Set Venn Diagram</div>
                <p>For sets of students who play:</p>
                <p>F = Football, B = Basketball, T = Tennis</p>
                <p>The center overlap shows students who play all three sports</p>
                <p>Other overlaps show students who play two sports</p>
            </div>
        `,
        taskInstructions: "Draw Venn diagrams for the following situations. Shade or label the requested regions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Two-Set Diagram:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> X = {a, b, c, d}, Y = {c, d, e, f}
                    <p>Draw Venn diagram showing X ∩ Y and X ∪ Y</p>
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In a class of 30 students: 18 like math, 15 like science, 6 like both.
                    <p>Draw a Venn diagram representing this.</p>
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Operations:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If P = {1, 3, 5, 7, 9} and Q = {2, 3, 5, 7}
                    <p>P ∪ Q = <span class="answer-space" style="width: 150px;"></span></p>
                    <p>P ∩ Q = <span class="answer-space" style="width: 150px;"></span></p>
                    <p>P - Q = <span class="answer-space" style="width: 150px;"></span></p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a Venn diagram for three hobbies you and your friends enjoy:
                    <div class="drawing-area" style="height: 200px;"></div>
                </div>
            </div>
        `,
        homework: "Survey 5 family members about two activities they enjoy. Represent the data in a Venn diagram.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Review and Application",
        subtopic: "Sets Week Review",
        revisionContent: `
            <p>Congratulations! You've completed Week 3 on Sets. Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> What is a set and types of sets (empty, finite, infinite)</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Set notations and symbols (∈, ⊆, ∅, | )</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Subsets and proper subsets</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Venn diagrams for visualizing sets</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Set operations (union, intersection, difference)</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Set Vocabulary:</strong></p>
                <p><strong>Set:</strong> A collection of distinct objects</p>
                <p><strong>Element:</strong> An object in a set</p>
                <p><strong>Subset:</strong> A set whose elements are all in another set</p>
                <p><strong>Union (∪):</strong> All elements in either set</p>
                <p><strong>Intersection (∩):</strong> Elements common to both sets</p>
                <p><strong>Venn Diagram:</strong> Visual representation of set relationships</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Represent in roster form: The set of prime numbers less than 15 <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> If A = {m, n, o, p} and B = {o, p, q}, find A ∩ B <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How many subsets does a set with 5 elements have? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a Venn diagram for: Students who play Piano (P) = {Anna, Ben, Chloe} and Guitar (G) = {Ben, David, Emma}
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> True or False: {2, 4, 6} ⊆ {1, 2, 3, 4, 5, 6, 7} <span class="answer-space" style="width: 50px;"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write in set-builder notation: The set of all multiples of 3 between 10 and 25
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most interesting thing you learned about sets this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Create a poster showing different types of sets with examples from daily life.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek3);
    console.log("math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek3);
    console.log("math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek3',
        metadata: grade5MathWeek3.metadata,
        days: grade5MathWeek3
    });
    console.log("math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek3 = grade5MathWeek3;
console.log("math-week3.js loaded and registered successfully");