// Grade 4 Math - Week 2 Data
const grade4MathWeek2 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 2,
        title: "Understanding Sets: Intersection and Disjoint Sets",
        description: "Exploring collections of objects, identifying common elements, and understanding when sets share no members."
    },
    
    tuesday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "What Makes a Set?",
        lessonContent: `
            <p>Welcome to our exploration of sets! This week we will learn about collections of objects that share something in common.</p>
            <p><strong>Key Concept:</strong> A set is a collection of things that follow the same rule or share a specific characteristic.</p>
            <p><strong>What Makes a Set?</strong></p>
            <ul>
                <li>All members (elements) belong together because of a rule</li>
                <li>Sets can be made of objects, numbers, people, or ideas</li>
                <li>Examples: "Set of red pencils," "Set of even numbers," "Set of students in our class"</li>
            </ul>
            <p><strong>Set Notation:</strong></p>
            <ul>
                <li>We use curly braces { } to show a set</li>
                <li>Example: {"Red pencil", "Red eraser", "Red notebook"}</li>
                <li>Each item is separated by a comma</li>
            </ul>
            <p><strong>Classroom Activity:</strong> We'll create physical sets using classroom objects. Look for items that share common characteristics like color, shape, or use.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group" style="color: #4A90E2;"></i> Set Example 1</div>
                <p>Set of Red Stationery: {"Red marker", "Red crayon", "Red pencil", "Red pen"}</p>
                <p><em>Rule: All items are red and used for writing/drawing.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Set Example 2</div>
                <p>Set of Students Wearing Sneakers: {"Alex", "Maria", "Jamal", "Sophie"}</p>
                <p><em>Rule: Students wearing sneakers today.</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Thinking Tip</div>
                <p>A good set has a clear rule that everyone can understand. If you can't explain why items belong together, it's not a proper set!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and creating sets by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Identify which of these are proper sets and which are not. Explain why:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. {"Apple", "Banana", "Carrot", "Dog"}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. {"2", "4", "6", "8"}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. {"Book", "Pencil", "Desk", "Chair"}</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Look around the classroom. Create 2 different sets based on what you see:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Set 1 (Rule: <input type="text" style="width: 200px; margin-left: 5px;">):</div>
                    <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    <div>Set 2 (Rule: <input type="text" style="width: 200px; margin-left: 5px;">):</div>
                    <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a set of 5 shapes that all share one characteristic:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <div style="margin-top: 5px;">Characteristic: <input type="text" style="width: 200px; margin-left: 5px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it important that all members of a set follow the same rule?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Create 3 different sets using items in your home. Write them using curly braces { } notation.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Meeting in the Middle (Intersection ∩)",
        lessonContent: `
            <p>Today we'll explore what happens when items belong to two sets at the same time!</p>
            <p><strong>Key Concept:</strong> The intersection of two sets contains all the elements that are in BOTH sets.</p>
            <p><strong>What is Intersection?</strong></p>
            <ul>
                <li>When sets share common members, those members are in the intersection</li>
                <li>We use the symbol ∩ to mean "intersection"</li>
                <li>Example: If Set A = {1, 2, 3} and Set B = {2, 3, 4}, then A ∩ B = {2, 3}</li>
            </ul>
            <p><strong>Visualizing Intersection:</strong></p>
            <p>Imagine two hula hoops on the floor that overlap. The overlapping middle section is where items that belong to BOTH sets would go.</p>
            <p><strong>Classroom Activity:</strong> We'll use two overlapping hoops - one for "Students wearing glasses" and one for "Students wearing sweaters." Students who meet BOTH criteria stand in the middle overlapping section!</p>
            <p><strong>Real-World Examples:</strong></p>
            <ul>
                <li>People who play soccer AND basketball</li>
                <li>Books that are mysteries AND have red covers</li>
                <li>Foods that are fruits AND are yellow</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-venus-mars" style="color: #4A90E2;"></i> Intersection Example</div>
                <p>Set A = {Students with pets}<br>
                Set B = {Students with siblings}<br>
                A ∩ B = {Students who have pets AND have siblings}</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Finding the Intersection</div>
                <p>To find A ∩ B:<br>
                1. List all items in Set A<br>
                2. List all items in Set B<br>
                3. Circle items that appear in BOTH lists</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-symbol">∩</i> Symbol Meaning</div>
                <p>The ∩ symbol is like two roads crossing. The intersection is where they meet - just like where two sets meet!</p>
            </div>
        `,
        taskInstructions: "Practice finding intersections between sets by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding Intersections</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find A ∩ B for these sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set A = {"Apple", "Banana", "Orange", "Grape"}</div>
                        <div>Set B = {"Banana", "Grape", "Pear", "Peach"}</div>
                        <div>A ∩ B = {</div>
                        <div class="answer-space" style="height: 30px; width: 200px; display: inline-block; vertical-align: middle; margin-left: 5px;"></div>
                        <div>}</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Find X ∩ Y:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set X = {2, 4, 6, 8, 10}</div>
                        <div>Set Y = {3, 6, 9, 12, 15}</div>
                        <div>X ∩ Y = {</div>
                        <div class="answer-space" style="height: 30px; width: 200px; display: inline-block; vertical-align: middle; margin-left: 5px;"></div>
                        <div>}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Intersections</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create two sets about your classmates, then find their intersection:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set 1 (Rule: <input type="text" style="width: 150px;">): {</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        <div>Set 2 (Rule: <input type="text" style="width: 150px;">): {</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        <div>Intersection: {</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Visualizing with Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two overlapping circles. Place these items in the correct sections:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle A: Things that are round</div>
                        <div>Circle B: Things you can eat</div>
                        <div>Items: Apple, Basketball, Orange, Pizza, Marble, Cookie</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">What items are in the intersection (middle section)?</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of intersections in your daily life. Describe each one.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Drawing the Intersection",
        lessonContent: `
            <p>Today we'll learn how to show sets and their intersections using special diagrams called Venn Diagrams!</p>
            <p><strong>Key Concept:</strong> Venn Diagrams use overlapping circles to show relationships between sets.</p>
            <p><strong>What is a Venn Diagram?</strong></p>
            <ul>
                <li>Each circle represents a set</li>
                <li>Overlapping areas show intersections</li>
                <li>Non-overlapping areas show items that belong to only one set</li>
            </ul>
            <p><strong>Parts of a Venn Diagram:</strong></p>
            <ol>
                <li><strong>Circles:</strong> Each represents a different set</li>
                <li><strong>Overlap (Middle):</strong> Shows A ∩ B (intersection)</li>
                <li><strong>Left Section:</strong> Shows items only in Set A</li>
                <li><strong>Right Section:</strong> Shows items only in Set B</li>
                <li><strong>Outside:</strong> Shows items not in either set</li>
            </ol>
            <p><strong>How to Draw a Venn Diagram:</strong></p>
            <ol>
                <li>Draw two overlapping circles</li>
                <li>Label each circle with a set name</li>
                <li>List all items from both sets</li>
                <li>Place items in the intersection if they belong to BOTH sets</li>
                <li>Place other items in their respective circles</li>
            </ol>
            <p><strong>Why Use Venn Diagrams?</strong> They help us visualize relationships between sets and make it easier to understand intersections.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass" style="color: #4A90E2;"></i> Venn Diagram Example</div>
                <p>Set A: Fruits = {"Apple", "Banana", "Orange"}<br>
                Set B: Yellow Things = {"Banana", "Sun", "Lemon"}<br>
                Intersection: {"Banana"} (goes in middle)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Drawing Tips</div>
                <p>1. Make circles large enough for writing<br>
                2. Label clearly outside each circle<br>
                3. Check each item - does it belong to A, B, or both?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Check</div>
                <p>If an item is in the middle section, it must belong to BOTH sets. If it's only in one circle, it belongs to just that set.</p>
            </div>
        `,
        taskInstructions: "Practice creating and interpreting Venn Diagrams by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing from Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a Venn Diagram for these sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set A: Even Numbers = {2, 4, 6, 8, 10}</div>
                        <div>Set B: Numbers less than 7 = {1, 2, 3, 4, 5, 6}</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">What is A ∩ B? {</div>
                    <div class="answer-space" style="height: 30px; width: 150px; display: inline-block; vertical-align: middle; margin-left: 5px;"></div>
                    <div>}</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Interpreting Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at this Venn Diagram and answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle P: Sports with a ball</div>
                        <div>Circle Q: Sports played on a court</div>
                        <div>Middle: {"Basketball", "Tennis"}</div>
                        <div>Only in P: {"Soccer", "Football"}</div>
                        <div>Only in Q: {"Badminton", "Volleyball"}</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What sports are in P ∩ Q?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Which sport is only in Set P?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. If "Baseball" were added, where would it go?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Creating Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a Venn Diagram about your interests:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle A: Activities you do indoors</div>
                        <div>Circle B: Activities you do with friends</div>
                        <div>Include at least 8 different activities total</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In a class of 20 students:<br>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 12 students play soccer</div>
                        <div>• 8 students play basketball</div>
                        <div>• 5 students play BOTH soccer and basketball</div>
                        <div>Draw a Venn Diagram to show this. How many students play only soccer?</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Create a Venn Diagram comparing two types of pets (like dogs and cats). Include at least 5 characteristics in each section.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding Sets",
        subtopic: "Sets with Nothing in Common (Disjoint Sets)",
        lessonContent: `
            <p>Today we'll explore what happens when sets have absolutely nothing in common!</p>
            <p><strong>Key Concept:</strong> Disjoint sets are sets that have no elements in common. Their intersection is empty.</p>
            <p><strong>What are Disjoint Sets?</strong></p>
            <ul>
                <li>Sets that share NO members</li>
                <li>Their intersection is empty: A ∩ B = { } or ∅</li>
                <li>In a Venn Diagram, the circles do NOT overlap</li>
            </ul>
            <p><strong>Examples of Disjoint Sets:</strong></p>
            <ul>
                <li>Living Things and Non-living Things</li>
                <li>Circles and Squares (as shapes)</li>
                <li>Even Numbers and Odd Numbers</li>
                <li>Things that are Red and Things that are Blue (if nothing is both)</li>
            </ul>
            <p><strong>Symbol for Empty Set:</strong> We use { } or ∅ to show a set with no elements.</p>
            <p><strong>Visualizing Disjoint Sets:</strong> In a Venn Diagram, disjoint sets are shown as separate circles that don't touch at all.</p>
            <p><strong>Important Note:</strong> Just because two sets are different doesn't mean they're disjoint. They're only disjoint if they have NO shared elements.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban" style="color: #4A90E2;"></i> Disjoint Example 1</div>
                <p>Set A = {Triangle, Square, Pentagon}<br>
                Set B = {Circle, Oval, Sphere}<br>
                A ∩ B = { } (empty set)<br>
                <em>No shape is both a polygon and a curved shape!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat"></i> Disjoint Example 2</div>
                <p>Set X = {Cat, Dog, Rabbit} (Mammals)<br>
                Set Y = {Eagle, Robin, Penguin} (Birds)<br>
                X ∩ Y = { }<br>
                <em>No animal is both a mammal and a bird!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle"></i> Diagram Difference</div>
                <p>Intersecting sets: Overlapping circles<br>
                Disjoint sets: Separate circles<br>
                The circles don't touch at all!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and working with disjoint sets by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Disjoint Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which pairs are disjoint sets? Circle YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. {1, 3, 5} and {2, 4, 6} YES / NO</div>
                        <div>b. {"Apple", "Pear"} and {"Red", "Green"} YES / NO</div>
                        <div>c. {"Book", "Pen"} and {"Pen", "Pencil"} YES / NO</div>
                        <div>d. {Monday, Tuesday} and {January, February} YES / NO</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Create your own example of disjoint sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set A: {</div>
                        <div class="answer-space" style="height: 40px; width: 200px; display: inline-block; vertical-align: middle; margin-left: 5px;"></div>
                        <div>}</div>
                        <div>Set B: {</div>
                        <div class="answer-space" style="height: 40px; width: 200px; display: inline-block; vertical-align: middle; margin-left: 5px;"></div>
                        <div>}</div>
                        <div>Why are they disjoint? </div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Disjoint Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a Venn Diagram for these disjoint sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set P: Land Vehicles = {"Car", "Bicycle", "Bus"}</div>
                        <div>Set Q: Water Vehicles = {"Boat", "Ship", "Submarine"}</div>
                        <div><em>Remember: Circles should not overlap!</em></div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Intersection vs. Disjoint</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the table:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background-color: #f0f0f0;">
                            <th style="border: 1px solid #ccc; padding: 8px;">Sets</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Intersecting or Disjoint?</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">A ∩ B</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">A = {a, b, c}, B = {c, d, e}</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">A = {1, 2, 3}, B = {4, 5, 6}</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">A = {"Red", "Blue"}, B = {"Blue", "Green"}</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><div class="answer-space" style="height: 30px;"></div></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Applications</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Think of your weekly schedule. Give an example of:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Two activities that CAN happen at the same time (intersecting):</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b. Two activities that CANNOT happen at the same time (disjoint):</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is it useful to know when sets are disjoint?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of disjoint sets in your home or neighborhood. Describe each pair and explain why they're disjoint.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek2);
    console.log("grade4-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek2);
    console.log("grade4-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek2',
        metadata: grade4MathWeek2.metadata,
        days: grade4MathWeek2
    });
    console.log("grade4-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek2 = grade4MathWeek2;
console.log("grade4-math-week2.js loaded and registered successfully");