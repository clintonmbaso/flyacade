// Grade 5 Math - Week 2 Data
const grade5MathWeek2 = {
    metadata: {
        grade: 5,
        subject: "Math",
        term: 1,
        week: 2,
        title: "Comparing Sets with Common Members (Intersections)",
        description: "Understanding how to represent and work with sets that share some members, focusing on intersections and Venn diagrams"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Comparing Sets with Common Members",
        subtopic: "Introduction to Overlapping Sets",
        lessonContent: `
            <p>Welcome to Week 2 of our sets exploration! This week we will learn how to work with sets that share some members—these are called overlapping sets.</p>
            <p><strong>Key Concept:</strong> When two sets have some members in common, we say they overlap. The common members belong to both sets at the same time.</p>
            <p><strong>Real-World Examples of Overlapping Sets:</strong></p>
            <ul>
                <li>Students who play soccer AND basketball</li>
                <li>Numbers that are even AND divisible by 3</li>
                <li>Foods that are sweet AND crunchy</li>
                <li>Animals that can swim AND fly</li>
            </ul>
            <p><strong>Why Study Overlapping Sets?</strong></p>
            <ul>
                <li>Helps us organize information that belongs to multiple categories</li>
                <li>Shows relationships between different groups</li>
                <li>Helps solve problems involving shared characteristics</li>
                <li>Prepares us for more complex data analysis</li>
            </ul>
            <p><strong>Remember from Last Week:</strong> The Universal Set (ξ or U) contains all elements under consideration. All our smaller sets fit inside this universal set.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4A90E2;"></i> Classroom Example</div>
                <p>In our class, Set A = {students who like math}, Set B = {students who like science}. Some students like both subjects—these are the overlapping members!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Sports Example</div>
                <p>Set A = {Soccer players}, Set B = {Basketball players}. Students who play both sports belong to the overlap between the two sets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Learning Tip</div>
                <p>To find common members, look for what appears in BOTH sets. These shared items create the "intersection."</p>
            </div>
        `,
        taskInstructions: "Practice identifying common members in overlapping sets by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Given: Set A = {2, 4, 6, 8, 10}, Set B = {5, 6, 7, 8, 9}
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. List all elements in Set A:</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. List all elements in Set B:</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. Which numbers appear in BOTH sets?</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> In our classroom, Set P = {students with pets}, Set Q = {students with siblings}. 
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. What would the common members represent?</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. Can you name 2 classmates who might be in the overlap?</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your own example of overlapping sets:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Set X: {</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>Set Y: {</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>Common members: {</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it useful to know when sets overlap in real life? Give one example:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 examples of overlapping sets in your home (e.g., foods in the refrigerator that are both fruits AND red).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Comparing Sets with Common Members",
        subtopic: "The Intersection Symbol (∩)",
        lessonContent: `
            <p>Today we will learn the special mathematical symbol for common members between sets—the intersection symbol (∩).</p>
            <p><strong>What is an Intersection?</strong></p>
            <p>The intersection of two sets contains ONLY the elements that are in BOTH sets. It's like the shared space where the two sets meet.</p>
            <p><strong>Mathematical Notation:</strong></p>
            <ul>
                <li><strong>A ∩ B</strong> reads as "A intersection B"</li>
                <li>This means "the set of elements that are in A AND in B"</li>
                <li>We write the result inside braces: A ∩ B = {common elements}</li>
            </ul>
            <p><strong>How to Find the Intersection:</strong></p>
            <ol>
                <li>List all elements in Set A</li>
                <li>List all elements in Set B</li>
                <li>Find which elements appear in BOTH lists</li>
                <li>Write these common elements inside braces</li>
            </ol>
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li>If two sets have NO common elements, their intersection is empty: A ∩ B = { } or ∅</li>
                <li>If all elements of Set A are also in Set B, then A ∩ B = A</li>
            </ul>
            <p><strong>Why Learn This Symbol?</strong> It helps mathematicians communicate clearly and efficiently about shared elements between sets.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4A90E2;"></i> Number Example</div>
                <p>If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4} because 3 and 4 appear in both sets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Word Example</div>
                <p>If F = {apple, banana, orange} and C = {apple, cherry, grape}, then F ∩ C = {apple} because only apple is in both sets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-circle"></i> Important Note</div>
                <p>Remember: The intersection symbol (∩) looks like an upside-down U. Don't confuse it with the union symbol (∪) which we'll learn later!</p>
            </div>
        `,
        taskInstructions: "Practice using the intersection symbol by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding Intersections</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find A ∩ B for these sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A = {2, 4, 6, 8}, B = {6, 7, 8, 9}</div>
                        <div style="margin-left: 20px;">A ∩ B = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>b. A = {red, blue, green}, B = {blue, yellow, purple}</div>
                        <div style="margin-left: 20px;">A ∩ B = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>c. A = {cat, dog, fish}, B = {bird, butterfly, bee}</div>
                        <div style="margin-left: 20px;">A ∩ B = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create two sets that have exactly 2 elements in their intersection:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set M = {</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Set N = {</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>M ∩ N = {</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a survey, 5 students like pizza, 4 like burgers, and 2 like both.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. If P = {pizza lovers} and B = {burger lovers}, what is P ∩ B?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. How many students like only pizza (not burgers)?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Symbol Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw the intersection symbol (∩) five times:
                    <div class="answer-space" style="height: 60px;"></div>
                    <div style="margin-top: 10px;">What does this symbol mean in your own words?</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 2 examples of intersections in your daily life and write them using the ∩ symbol.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Comparing Sets with Common Members",
        subtopic: "Venn Diagrams for Overlapping Sets",
        lessonContent: `
            <p>Today we will learn how to represent overlapping sets visually using Venn diagrams. These diagrams help us see the relationships between sets clearly.</p>
            <p><strong>What is a Venn Diagram?</strong></p>
            <p>A Venn diagram uses circles (or other shapes) inside a rectangle to show relationships between sets. The rectangle represents the Universal Set.</p>
            <p><strong>Parts of a Venn Diagram for Two Sets:</strong></p>
            <ol>
                <li><strong>Rectangle:</strong> Represents the Universal Set (ξ or U)</li>
                <li><strong>Circle A:</strong> Represents Set A</li>
                <li><strong>Circle B:</strong> Represents Set B</li>
                <li><strong>Overlap Area:</strong> Where circles intersect - shows A ∩ B</li>
                <li><strong>Non-Overlap Areas:</strong> Parts of each circle that don't overlap</li>
            </ol>
            <p><strong>How to Draw a Venn Diagram for Overlapping Sets:</strong></p>
            <ol>
                <li>Draw a rectangle and label it U (Universal Set)</li>
                <li>Draw two overlapping circles inside</li>
                <li>Label one circle A, the other B</li>
                <li>Place common elements in the overlapping section</li>
                <li>Place unique elements in the non-overlapping sections</li>
            </ol>
            <p><strong>Why Use Venn Diagrams?</strong> They help us visualize complex relationships, solve problems, and communicate ideas about sets clearly.</p>
            <p><strong>History:</strong> Venn diagrams were invented by John Venn in the 1880s and are used worldwide in mathematics, science, and logic.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Diagram Example</div>
                <p>For A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, the overlapping section contains 3 and 4, while 1 and 2 go only in A, and 5 and 6 go only in B.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Diagram</div>
                <p>For "Students with dogs" and "Students with cats," the overlap shows students who have both pets. Students with only dogs or only cats go in separate sections.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tips"></i> Drawing Tip</div>
                <p>Make sure the overlapping section is large enough to write all the common elements clearly!</p>
            </div>
        `,
        taskInstructions: "Practice creating and interpreting Venn diagrams by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Venn Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a Venn diagram for: A = {a, b, c, d}, B = {c, d, e, f}
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Label: U (Universal Set), Circle A, Circle B, and place elements correctly</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: From Diagram to Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Based on this Venn diagram:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle P contains: apple, banana, orange</div>
                        <div>Circle Q contains: orange, grape, cherry</div>
                        <div>Overlap contains: orange</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. List all elements in Set P: {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>b. List all elements in Set Q: {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>c. Find P ∩ Q: {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving with Venn Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a class of 10 students: 6 play soccer, 5 play basketball, and 3 play both.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Draw a Venn diagram showing this information</div>
                        <div style="margin-left: 20px; margin-top: 10px;">
                            <div>Label: Soccer circle, Basketball circle, Overlap = 3</div>
                        </div>
                        <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                        <div>b. How many students play only soccer?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. How many students play only basketball?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Where might you see Venn diagrams used in real life? List 2 places:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a Venn diagram comparing two of your favorite things (e.g., books vs. movies, sports vs. games).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Comparing Sets with Common Members",
        subtopic: "The Overlap Challenge - Review and Application",
        lessonContent: `
            <p>Today is our Overlap Challenge day! We'll review everything we've learned about overlapping sets and apply our knowledge to solve interesting problems.</p>
            <p><strong>Week 2 Review:</strong></p>
            <ul>
                <li><strong>Overlapping Sets:</strong> Sets that share some common members</li>
                <li><strong>Intersection (A ∩ B):</strong> The set of elements in BOTH A and B</li>
                <li><strong>Venn Diagrams:</strong> Visual representations of set relationships</li>
                <li><strong>Universal Set (U):</strong> The set containing all elements under consideration</li>
            </ul>
            <p><strong>The Overlap Challenge Activity:</strong> We'll use the example from our introduction: Set A = {1, 2, 3, 4, 5}, Set B = {4, 5, 6, 7, 8}</p>
            <p><strong>Step-by-Step Solution:</strong></p>
            <ol>
                <li>Identify all elements in Set A: {1, 2, 3, 4, 5}</li>
                <li>Identify all elements in Set B: {4, 5, 6, 7, 8}</li>
                <li>Find common elements: 4 and 5 appear in both sets</li>
                <li>Write the intersection: A ∩ B = {4, 5}</li>
                <li>Draw the Venn diagram with 4 and 5 in the overlap</li>
            </ol>
            <p><strong>Real-World Applications of Intersections:</strong></p>
            <ul>
                <li>Finding friends with common interests</li>
                <li>Identifying ingredients in multiple recipes</li>
                <li>Planning events that work for multiple schedules</li>
                <li>Solving logic puzzles and riddles</li>
            </ul>
            <p><strong>Looking Ahead:</strong> Next week we'll learn about sets that don't overlap (disjoint sets) and sets within sets (subsets)!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol" style="color: #4A90E2;"></i> Number Challenge</div>
                <p>For A = {1, 2, 3, 4, 5} and B = {4, 5, 6, 7, 8}, the common members are 4 and 5. So A ∩ B = {4, 5}.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-friends"></i> Class Survey</div>
                <p>If Set M = {students who have brothers} and Set S = {students who have sisters}, the intersection shows students who have both brothers AND sisters.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Puzzle Application</div>
                <p>Logic puzzles often use intersections. "People who like chocolate AND vanilla" is an intersection of two sets.</p>
            </div>
        `,
        taskInstructions: "Complete the Overlap Challenge and additional problems to demonstrate your understanding of intersections.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Original Overlap Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using: Set A = {1, 2, 3, 4, 5}, Set B = {4, 5, 6, 7, 8}
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Find A ∩ B:</div>
                        <div style="margin-left: 20px;">A ∩ B = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>b. Draw the Venn diagram:</div>
                        <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                        <div>c. How many elements are in A but NOT in B?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Advanced Intersections</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Given: X = {2, 4, 6, 8, 10, 12}, Y = {3, 6, 9, 12}, Z = {6, 12, 18, 24}
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Find X ∩ Y:</div>
                        <div style="margin-left: 20px;">X ∩ Y = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>b. Find Y ∩ Z:</div>
                        <div style="margin-left: 20px;">Y ∩ Z = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                        <div>c. Find X ∩ Y ∩ Z (elements in ALL THREE sets):</div>
                        <div style="margin-left: 20px;">X ∩ Y ∩ Z = {</div>
                        <div style="margin-left: 40px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problem Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In a survey of 15 students:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 8 students like chocolate ice cream</div>
                        <div>• 7 students like vanilla ice cream</div>
                        <div>• 3 students like BOTH chocolate AND vanilla</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Draw a Venn diagram:</div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                        <div>b. How many students like only chocolate?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. How many students like only vanilla?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. How many students don't like either flavor?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most interesting thing you learned about overlapping sets this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create ONE math question about intersections that would challenge a classmate:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Review all Week 2 concepts. Find one example of an intersection in a book, magazine, or website.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek2);
    console.log("grade5-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek2',
        metadata: grade5MathWeek2.metadata,
        days: grade5MathWeek2
    });
    console.log("grade5-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek2 = grade5MathWeek2;
console.log("grade5-math-week2.js loaded and registered successfully");