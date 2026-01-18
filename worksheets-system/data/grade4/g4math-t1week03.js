// Grade 4 Math - Week 3 Data
const grade4MathWeek3 = {
    metadata: {
        grade: 4,
        subject: "Math",
        term: 1,
        week: 3,
        title: "Understanding Sets: Union and Real-World Applications",
        description: "Learning about union of sets and applying set concepts to real-life situations"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Joining Forces (Union ∪)",
        lessonContent: `
            <p>Welcome to our exploration of sets! This week we will learn about a special operation called "union" that helps us combine sets together.</p>
            <p><strong>Key Concept:</strong> The <strong>union</strong> (symbol: ∪) of two sets means we combine ALL elements from both sets into one big set.</p>
            <p><strong>The "Cup" Analogy:</strong> The ∪ symbol looks like a cup that can hold everything from both sets! Just like a cup can hold different drinks, the union can hold all items from different sets.</p>
            <p><strong>Understanding Union:</strong></p>
            <ul>
                <li>If Set A = {apples, bananas, oranges}</li>
                <li>And Set B = {carrots, broccoli, peas}</li>
                <li>Then A ∪ B (A union B) = {apples, bananas, oranges, carrots, broccoli, peas}</li>
            </ul>
            <p><strong>Important Rule:</strong> In a union, we NEVER repeat items. If something appears in both sets, we only write it once in the union.</p>
            <p><strong>Example:</strong> If we have a set of "Fruit" and a set of "Vegetables," the Union is the set of "All Produce."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group" style="color: #4A90E2;"></i> Union Example</div>
                <p>Set A = {red, blue, yellow}<br>Set B = {green, blue, purple}<br>A ∪ B = {red, blue, yellow, green, purple}<br>Notice "blue" appears only once!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot"></i> Cup Analogy</div>
                <p>Imagine two cups: one has marbles, the other has beads. If you pour both into a bigger cup (∪), you get all marbles AND beads together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Remember</div>
                <p>Union means "everything from both sets." Think of inviting everyone from two different friend groups to one big party!</p>
            </div>
        `,
        taskInstructions: "Practice finding the union of different sets by completing the following exercises.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Find the union of these sets:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Set A = {1, 3, 5, 7}</div>
                    <div>Set B = {2, 3, 4, 5}</div>
                    <div>A ∪ B = {</div>
                    <div style="margin-left: 20px; height: 30px; width: 200px; border-bottom: 1px solid #000; display: inline-block;"></div>
                    <div>}</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> If Set P = {cat, dog, bird} and Set Q = {fish, hamster, bird}, what is P ∪ Q?
                <div class="answer-space" style="height: 50px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw two circles representing sets that overlap. In the first circle write "Fruits," in the second write "Yellow Things." List what would be in the UNION of these sets:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create your own example: Write two sets and find their union:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
        `,
        homework: "Look around your home. Create two sets of items and find their union. Example: Set 1 = things in kitchen, Set 2 = things made of plastic.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Shading the Union",
        lessonContent: `
            <p>Today we will learn how to represent the union of sets visually using Venn diagrams. This helps us "see" what the union looks like.</p>
            <p><strong>Visualizing Union:</strong> In a Venn diagram with two overlapping circles:</p>
            <ul>
                <li>Each circle represents a set</li>
                <li>The overlapping middle is the <strong>intersection</strong> (things in both sets)</li>
                <li>The <strong>union</strong> is ALL of both circles - everything shaded!</li>
            </ul>
            <p><strong>How to Shade the Union:</strong></p>
            <ol>
                <li>Draw two overlapping circles</li>
                <li>Label each circle with the set name</li>
                <li>Shade ENTIRELY both circles, including the overlapping part</li>
                <li>Everything shaded represents A ∪ B</li>
            </ol>
            <p><strong>Key Difference:</strong></p>
            <ul>
                <li><strong>Intersection:</strong> Only shade the overlapping middle part</li>
                <li><strong>Union:</strong> Shade both entire circles</li>
            </ul>
            <p><strong>Example with Numbers:</strong> Let's practice with Set A = {1, 2, 3} and Set B = {3, 4, 5}. The union A ∪ B = {1, 2, 3, 4, 5}. In the Venn diagram, all numbers 1-5 would be in the shaded area.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon" style="color: #4A90E2;"></i> Visual Example</div>
                <p>Imagine two overlapping circles. Circle A has apples, bananas. Circle B has bananas, cherries. The UNION is shaded completely: apples, bananas, cherries.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shading Tip</div>
                <p>When shading union, use light coloring so you can still see the numbers or items written inside the circles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Quick Check</div>
                <p>If you shade only the left circle and the overlapping part, is that the union? NO! You must shade BOTH entire circles.</p>
            </div>
        `,
        taskInstructions: "Practice representing unions visually by completing the following Venn diagram exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw two overlapping circles. Label the left circle "Even Numbers" and the right circle "Numbers less than 10." Shade to show the UNION:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: From Numbers to Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For Set X = {2, 4, 6} and Set Y = {1, 2, 3}:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What is X ∪ Y? {</div>
                        <div style="margin-left: 20px; height: 30px; width: 150px; border-bottom: 1px solid #000; display: inline-block;"></div>
                        <div>}</div>
                        <div>b. Draw a Venn diagram showing both sets and shade the union:</div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Shading</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the three Venn diagrams below. Which one shows the union of Sets A and B?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Diagram 1: Only left circle shaded</div>
                        <div>Diagram 2: Both entire circles shaded</div>
                        <div>Diagram 3: Only overlapping part shaded</div>
                        <div>Correct answer: Diagram <div style="width: 40px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a Venn diagram for: Set M = {square, triangle, circle} and Set N = {red, blue, circle}. Shade the union:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw a Venn diagram showing your family members. Circle A = people with brown hair, Circle B = people who wear glasses. Shade the union.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Sets in Everyday Life",
        lessonContent: `
            <p>Today we'll apply our set knowledge to real-world situations! Sets are everywhere once you start looking for them.</p>
            <p><strong>Real-Life Sets:</strong></p>
            <ul>
                <li>Kitchen items</li>
                <li>School supplies</li>
                <li>Types of vehicles</li>
                <li>Favorite foods</li>
            </ul>
            <p><strong>Kitchen Example:</strong></p>
            <ul>
                <li>Set A = "Items used for eating" = {forks, spoons, knives, plates}</li>
                <li>Set B = "Items made of plastic" = {storage containers, some spoons, cups}</li>
                <li>Intersection (A ∩ B) = {plastic spoons} (items that are BOTH eating tools AND plastic)</li>
                <li>Union (A ∪ B) = {forks, spoons, knives, plates, storage containers, cups} (ALL eating tools AND ALL plastic items)</li>
            </ul>
            <p><strong>Why This Matters:</strong> Understanding sets helps us organize information, solve problems, and make decisions in daily life.</p>
            <p><strong>More Examples:</strong></p>
            <ul>
                <li>At a pet store: Set A = animals with fur, Set B = animals that can swim</li>
                <li>In your closet: Set A = blue clothes, Set B = winter clothes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #4A90E2;"></i> Home Application</div>
                <p>In your bedroom: Set A = things on your desk, Set B = things that are blue. The union = everything on your desk PLUS anything blue in your room.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Kitchen Challenge</div>
                <p>Find the intersection in the fridge: Set A = dairy products, Set B = things that need refrigeration. The intersection = dairy products that need refrigeration (like milk, cheese).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Classroom Sets</div>
                <p>In our class: Set A = students who play soccer, Set B = students who play piano. The union = all students who play soccer OR piano OR both!</p>
            </div>
        `,
        taskInstructions: "Apply set concepts to real-life situations by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In our classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set C = Students wearing sneakers today</div>
                        <div>Set D = Students wearing something red</div>
                        <div>a. What would be in C ∩ D?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. What would be in C ∪ D?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Supermarket Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Imagine you're in a supermarket:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set E = Fruits</div>
                        <div>Set F = Things that are round</div>
                        <div>List 3 items that would be in:</div>
                        <div style="margin-left: 20px;">
                            <div>a. E ∩ F (intersection):</div>
                            <div style="margin-left: 20px; height: 40px;"></div>
                            <div>b. E ∪ F (union):</div>
                            <div style="margin-left: 20px; height: 60px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Think about your favorite hobby or sport. Create two related sets and describe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My hobby/sport: _______________________</div>
                        <div>Set G: _______________________</div>
                        <div>Set H: _______________________</div>
                        <div>G ∩ H = </div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>G ∪ H = </div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Maria is packing for a trip. She needs to bring:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set P = Clothing for cold weather = {sweater, jacket, gloves}</div>
                        <div>Set Q = Clothing that is blue = {jacket, jeans, hat}</div>
                        <div>What should she pack if she needs ALL items from both sets? (Find P ∪ Q)</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look in your backpack. Create two sets of items and find both their intersection and union.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "The 'Set Master' Challenge",
        lessonContent: `
            <p>Congratulations! Today you become a "Set Master" by applying everything you've learned about sets in a fun challenge.</p>
            <p><strong>Review Key Concepts:</strong></p>
            <ul>
                <li><strong>Intersection (∩):</strong> Items that are in BOTH sets</li>
                <li><strong>Union (∪):</strong> ALL items from BOTH sets combined</li>
            </ul>
            <p><strong>The Challenge:</strong> For each scenario, you must decide: Am I looking for the intersection or the union?</p>
            <p><strong>Decision Guide:</strong></p>
            <ul>
                <li>Look for the word "BOTH" or "AND" → INTERSECTION</li>
                <li>Look for the word "EITHER" or "OR" or "ALL" → UNION</li>
            </ul>
            <p><strong>Example Scenarios:</strong></p>
            <ol>
                <li>"I want a snack that is both Crunchy AND Sweet" → INTERSECTION (crunchy ∩ sweet)</li>
                <li>"I need all books about animals OR space" → UNION (animals ∪ space)</li>
                <li>"Find students who play soccer AND basketball" → INTERSECTION</li>
                <li>"Collect all red OR blue marbles" → UNION</li>
            </ol>
            <p><strong>Today's Goal:</strong> Solve challenge problems and create your own Venn diagrams to present to the class!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy" style="color: #4A90E2;"></i> Challenge Example 1</div>
                <p>"Find pets that are fluffy AND can swim" → INTERSECTION. A fluffy dog that swims? Maybe. A fish that swims but isn't fluffy? No. So we need BOTH qualities.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Challenge Example 2</div>
                <p>"Bring all markers that are red OR blue" → UNION. You want ALL red markers plus ALL blue markers. Simple!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Word Clue</div>
                <p>The word "BOTH" is your intersection clue. The word "EITHER/OR" is your union clue. "ALL FROM BOTH" is definitely union!</p>
            </div>
        `,
        taskInstructions: "Complete the 'Set Master' challenge by solving these problems and creating your own diagram.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Intersection or Union?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each situation, write "Intersection" or "Union":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Dogs that are large AND have spots: <div style="width: 100px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>b. All students in grade 4 OR grade 5: <div style="width: 100px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>c. Numbers that are even AND divisible by 3: <div style="width: 100px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>d. Books that are mysteries OR adventures: <div style="width: 100px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Solve the Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> At the library: Set R = {books about science, books about history, books about art}, Set S = {books about art, books about music, books about dance}.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. If you want books about BOTH science AND history, which operation? <div style="width: 100px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>b. List R ∪ S: <div style="width: 200px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>c. Draw a Venn diagram showing this and shade the intersection:</div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your own "Set Master" challenge for a classmate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Write a scenario using either intersection or union:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>Draw the Venn diagram solution:</div>
                        <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Think about planning a birthday party:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set T = Friends from school</div>
                        <div>Set U = Friends from your neighborhood</div>
                        <div>If you invite ALL friends from both groups, are you finding T ∩ U or T ∪ U? <div style="width: 60px; height: 25px; border-bottom: 1px solid #000; display: inline-block;"></div></div>
                        <div>Explain why:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of sets in your daily life. For each, identify if you would use intersection or union to solve a problem with them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek3);
    console.log("grade4-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek3);
    console.log("grade4-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek3',
        metadata: grade4MathWeek3.metadata,
        days: grade4MathWeek3
    });
    console.log("grade4-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek3 = grade4MathWeek3;
console.log("grade4-math-week3.js loaded and registered successfully");