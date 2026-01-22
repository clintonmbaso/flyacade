// Grade 3 Mathematics & Science - Week 2 Data (Exploring Sets)
const grade3MathScienceWeek2 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        week: 2,
        title: "Exploring Our World — Understanding Sets and Groups",
        description: "Learning to define, describe, compare, and analyze sets using numbers and real-world objects"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Describing Our Groups",
        subtopic: "Introduction to Sets: Natural, Even, and Odd Numbers",
        lessonContent: `
            <p>Welcome to our exploration of groups and sets! Today we'll learn how mathematicians organize things that belong together.</p>
            <p><strong>Key Concept:</strong> A set is a collection of objects or numbers that share a common characteristic.</p>
            <p><strong>What makes a set?</strong></p>
            <ul>
                <li>Items that follow a specific rule</li>
                <li>Objects that belong together for a reason</li>
                <li>Numbers that share a pattern</li>
            </ul>
            <p><strong>Natural Numbers:</strong> These are our "counting numbers" - 1, 2, 3, 4, 5, and so on. We use them to count objects in real life!</p>
            <p><strong>Even vs. Odd Numbers:</strong></p>
            <ul>
                <li><strong>Even numbers</strong> can be paired perfectly (2, 4, 6, 8, 10...)</li>
                <li><strong>Odd numbers</strong> always have one "left out" when pairing (1, 3, 5, 7, 9...)</li>
            </ul>
            <p><strong>Think About It:</strong> Look around our classroom. What sets can you see right now? (Students wearing red, students with glasses, books on the shelf)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #2196F3;"></i> Classroom Sets</div>
                <p>"Students wearing blue shirts" - This is a set because all members share the same characteristic!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stone" style="color: #795548;"></i> Even vs. Odd with Objects</div>
                <p>Place 6 stones in pairs: ●● ●● ●● (Even - all paired). Place 7 stones: ●● ●● ●● ● (Odd - one left out)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Set Identification Game!</div>
                <p>I'll show number groups on the board. Shout "Even Set!" or "Odd Set!" when you recognize the pattern!</p>
            </div>
        `,
        taskInstructions: "Identify and describe different types of sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Natural Numbers Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the first 10 natural numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="answer-space" style="height: 30px; width: 300px;">Natural numbers: ________________________________</div>
                        <div><em>Hint: Start from 1!</em></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Even or Odd?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Test these numbers with stones or buttons. Mark even (E) or odd (O):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>8: ____ (Draw 8 stones in pairs)</div>
                        <div>5: ____ (Draw 5 stones showing the leftover)</div>
                        <div>12: ____ (Draw 12 stones in pairs)</div>
                        <div>7: ____ (Draw 7 stones showing the leftover)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Set Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at this set: {1, 3, 5, 7, 9}
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>This is a set of ________ numbers.</div>
                        <div>Circle why: ☐ They're all less than 10 ☐ They're all odd ☐ They're all even</div>
                        <div>Create your own set of even numbers: {______, ______, ______, ______}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Identify sets in our classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw a set of blue items you see: <div class="drawing-area" style="height: 80px;"></div></div>
                        <div>Name a set of round objects: ________________________</div>
                        <div>Name a set of things used for writing: ________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three sets at home. Write one example of an even number set and one example of an odd number set in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Who is in the Group?",
        subtopic: "Listing Members Using Set Notation",
        lessonContent: `
            <p>Today we learn the special language of sets! Mathematicians use specific symbols to write sets clearly.</p>
            <p><strong>Key Concept:</strong> Set notation helps us list members accurately so everyone understands exactly what's in the group.</p>
            <p><strong>Set Notation Rules:</strong></p>
            <ul>
                <li>Use curly brackets { } to show it's a set</li>
                <li>List members inside the brackets</li>
                <li>Separate items with commas</li>
                <li>Order doesn't matter: {1, 2, 3} is the same as {3, 1, 2}</li>
            </ul>
            <p><strong>Example:</strong> The set of even numbers between 1 and 11 is written as {2, 4, 6, 8, 10}</p>
            <p><strong>Science Integration:</strong> We can also describe sets in nature! The set of "Parts of a Plant" includes {roots, stem, leaves, flower, fruit}.</p>
            <p><strong>Important:</strong> Every member must fit the description perfectly! If we say "even numbers between 10 and 20," we can't include 9 or 21.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brackets-curly" style="color: #f44336;"></i> Set Notation Example</div>
                <p>Natural numbers less than 6: {1, 2, 3, 4, 5} - Notice the curly brackets and commas!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Science Set Example</div>
                <p>Domestic Animals: {dog, cat, cow, chicken, goat} - All animals commonly kept by people.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Rainbow Set Game!</div>
                <p>I'll describe a set. You write it correctly using curly brackets. First team with perfect notation wins!</p>
            </div>
        `,
        taskInstructions: "Practice writing sets correctly using proper notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Set Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these sets using proper notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Natural numbers less than 6: ____________________</div>
                        <div>Even numbers between 10 and 20: ____________________</div>
                        <div>Odd numbers between 0 and 8: ____________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Science Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List members of these science sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Colors in a rainbow: {______, ______, ______, ______, ______, ______, ______}</div>
                        <div>Basic parts of a plant: {______, ______, ______, ______}</div>
                        <div>Domestic animals you know: {______, ______, ______, ______}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Classroom Set Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create and list three classroom sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set 1 (Square objects): {___________________________}</div>
                        <div>Set 2 (Red objects): {_____________________________}</div>
                        <div>Set 3 (Things that can roll): {_____________________}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Accuracy Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the mistake in each set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Even numbers 2-10: {2, 3, 4, 6, 8, 10} Mistake: ______</div>
                        <div>Natural numbers < 5: (1, 2, 3, 4) Mistake: ______</div>
                        <div>Rainbow colors: {red, orange, purple, green} Mistake: ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create three different sets using items in your home. Write them using proper set notation { }.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Are They Identical?",
        subtopic: "Comparing Sets: Equal vs. Not Equal",
        lessonContent: `
            <p>Today we become set detectives! We'll learn how to compare sets and decide if they're identical or different.</p>
            <p><strong>Key Concept 1:</strong> Sets are EQUAL if they have exactly the same members.</p>
            <p><strong>Equal Sets Rule:</strong> Order doesn't matter! {apple, banana} equals {banana, apple}</p>
            <p><strong>Symbol for Equal:</strong> We use the equals sign = between sets: {1, 2, 3} = {3, 1, 2}</p>
            <p><strong>Key Concept 2:</strong> Sets are NOT EQUAL if they have different members.</p>
            <p><strong>Symbol for Not Equal:</strong> We use ≠ between sets: {1, 2, 3} ≠ {1, 2, 4}</p>
            <p><strong>Think Like a Detective:</strong> To compare sets, check each member carefully. Ask: "Is every item in Set A also in Set B?"</p>
            <p><strong>Important:</strong> Equal sets are identical twins. They may look different at first (different order), but they're the same!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-equals" style="color: #4CAF50;"></i> Equal Sets Example</div>
                <p>Bag A: {red pencil, blue pencil}, Bag B: {blue pencil, red pencil} = These are EQUAL!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-not-equal" style="color: #f44336;"></i> Not Equal Example</div>
                <p>Set C: {1, 3, 5}, Set D: {1, 3, 7} ≠ These are NOT EQUAL because 5 ≠ 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Set Detective Game!</div>
                <p>I'll show two sets. Hold up "=" card if equal, "≠" card if not equal. Be careful - order tricks ahead!</p>
            </div>
        `,
        taskInstructions: "Compare pairs of sets and determine if they are equal or not equal.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Equal or Not Equal?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare these sets. Write = or ≠ between them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>{2, 4, 6} ______ {4, 2, 6}</div>
                        <div>{1, 3, 5} ______ {1, 3, 7}</div>
                        <div>{apple, orange} ______ {orange, apple}</div>
                        <div>{8, 9, 10} ______ {9, 10, 11}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Difference</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For unequal sets, circle the member that makes them different:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>{cat, dog, fish} ≠ {cat, dog, bird} Different: ☐ cat ☐ dog ☐ fish/bird</div>
                        <div>{5, 10, 15} ≠ {5, 10, 20} Different: ☐ 5 ☐ 15/20 ☐ 10</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Comparisons</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your own examples:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Create two equal sets: {______, ______} = {______, ______}</div>
                        <div>Create two not equal sets: {______, ______} ≠ {______, ______}</div>
                        <div>Explain why your not equal sets are different: _________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Science Set Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare these nature sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Trees: {oak, pine, maple} ______ {maple, pine, oak}</div>
                        <div>Flowers: {rose, tulip, daisy} ______ {rose, lily, daisy}</div>
                        <div>If different, which flower doesn't match? ________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find two equal sets and two not equal sets in your home. Write them using = and ≠ symbols.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Matching Power",
        subtopic: "Understanding Equivalent Groups",
        lessonContent: `
            <p>Today we discover a special relationship between sets: EQUIVALENCE! This is different from equality.</p>
            <p><strong>Key Concept 1:</strong> Sets are EQUIVALENT if they have the same number of members.</p>
            <p><strong>Key Concept 2:</strong> EQUAL means "same members." EQUIVALENT means "same count."</p>
            <p><strong>One-to-One Correspondence:</strong> This is our detective tool! We match each item in Set A to exactly one item in Set B.</p>
            <p><strong>Visual Example:</strong> Draw a line from each apple to each orange. If every item gets a partner, the sets are equivalent!</p>
            <p><strong>Important Difference:</strong></p>
            <ul>
                <li>Equal: {apple, apple, apple} = {apple, apple, apple} (same items)</li>
                <li>Equivalent: {apple, apple, apple} ↔ {orange, orange, orange} (different items, same count)</li>
            </ul>
            <p><strong>Real World:</strong> Do we have enough chairs for students? Use one-to-one matching to find out!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #FF9800;"></i> Equivalent Sets Example</div>
                <p>3 oranges in one bowl ↔ 3 books on a desk. Different items, but same count = Equivalent!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-object-group" style="color: #2196F3;"></i> One-to-One Matching</div>
                <p>Draw 4 circles ●●●● and 4 triangles ▲▲▲▲. Draw lines connecting each ● to each ▲. All matched = Equivalent!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Partner Match Game!</div>
                <p>Student A makes a set of 7 items. Student B must make an equivalent set with DIFFERENT items. Check with one-to-one matching!</p>
            </div>
        `,
        taskInstructions: "Identify and create equivalent sets using one-to-one correspondence.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: One-to-One Matching Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match these sets. Are they equivalent?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set A: ● ● ● ● ● (5 circles)</div>
                        <div>Set B: ▲ ▲ ▲ ▲ ▲ (5 triangles)</div>
                        <div>Draw connecting lines: <div class="drawing-area" style="height: 60px;"></div></div>
                        <div>Equivalent? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Equivalent or Not?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Determine if these sets are equivalent:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>{★, ★, ★} and {□, □, □} Equivalent? ______</div>
                        <div>{1, 2, 3, 4} and {a, b, c} Equivalent? ______</div>
                        <div>{red, blue, green} and {circle, square, triangle} Equivalent? ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner: Create equivalent sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>You: Create a set of 6 stones: <div class="drawing-area" style="height: 50px;"></div></div>
                        <div>Partner: Create equivalent set with leaves: <div class="drawing-area" style="height: 50px;"></div></div>
                        <div>Check: Draw lines showing one-to-one match: <div class="drawing-area" style="height: 60px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Equivalence</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these real problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>We have 8 students and 8 chairs. Equivalent? ______</div>
                        <div>Draw students and chairs with matching lines: <div class="drawing-area" style="height: 80px;"></div></div>
                        <div>If we had 8 students and 7 chairs, would they be equivalent? ______ Why? ________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find two equivalent sets in your kitchen (example: 4 spoons and 4 forks). Draw them with matching lines.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Groups within Groups",
        subtopic: "Understanding Subsets",
        lessonContent: `
            <p>Today we explore the most fascinating set relationship: SUBSETS! These are sets inside other sets.</p>
            <p><strong>Key Concept:</strong> A subset is a set where every member also belongs to a larger set.</p>
            <p><strong>Visual Example:</strong> Think of our class. All boys are a subset of the whole class because every boy is also a student.</p>
            <p><strong>Symbol for Subset:</strong> We use ⊂ to show "is a subset of." Example: {Boys} ⊂ {Whole Class}</p>
            <p><strong>Math Example:</strong> If Set A = {1, 2, 3, 4, 5} and Set B = {2, 4}, then B ⊂ A because 2 and 4 are both in A.</p>
            <p><strong>Every Set Rules:</strong></p>
            <ul>
                <li>Every set is a subset of itself (strange but true!)</li>
                <li>The empty set { } is a subset of every set</li>
            </ul>
            <p><strong>Venn Diagram:</strong> We can draw circles inside circles to visualize subsets. A small circle (birds) inside a large circle (animals).</p>
            <p><strong>Celebration:</strong> You've now mastered the language of sets - a fundamental mathematical tool!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle" style="color: #2196F3;"></i> Subset Symbol Example</div>
                <p>{2, 4} ⊂ {1, 2, 3, 4, 5} because 2 and 4 are both in the larger set.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-venus" style="color: #E91E63;"></i> Classroom Subset</div>
                <p>{Girls in our class} ⊂ {All students in our class} because every girl is a student.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Subset Hunt Game!</div>
                <p>I'll give you a large set. Find as many subsets as you can in 2 minutes. Most subsets wins!</p>
            </div>
        `,
        taskInstructions: "Identify subsets and use the subset symbol correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Subset Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Given Set A = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle which are subsets of A:</div>
                        <div>☐ {2, 4, 6} ☐ {11, 12} ☐ {3, 7, 9} ☐ {0, 1, 2}</div>
                        <div>Write one subset you found: {______, ______, ______} ⊂ A</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Using the Subset Symbol</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these relationships using ⊂:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Set B = {a, b, c}, Set C = {a, c} ____________________</div>
                        <div>Even numbers ⊂ Natural numbers ____________________</div>
                        <div>{red, blue} ⊂ {red, blue, green, yellow} ____________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find Three Subsets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> From Natural Numbers 1-10, find three different subsets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Subset 1 (Even numbers): {______, ______, ______, ______, ______}</div>
                        <div>Subset 2 (Numbers > 7): {______, ______, ______}</div>
                        <div>Subset 3 (Your choice): {______, ______, ______}</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Venn Diagram Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a subset relationship:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Large circle: Animals {dog, cat, bird, fish, rabbit}</div>
                        <div>Small circle inside: Birds {bird} (subset of animals)</div>
                        <div>Draw your diagram: <div class="drawing-area" style="height: 150px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Set Master Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Show what you learned this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw a set with two subsets: <div class="drawing-area" style="height: 120px;"></div></div>
                        <div>Complete: This week I learned that {2, 4} ⊂ {1, 2, 3, 4, 5} because _________________________</div>
                        <div>Signature: ________________ Date: ___________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three subset relationships in your home (example: {forks} ⊂ {eating utensils}). Draw a Venn diagram showing one relationship.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek2);
    console.log("math-science-week2-sets.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek2);
    console.log("math-science-week2-sets.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek2',
        metadata: grade3MathScienceWeek2.metadata,
        days: grade3MathScienceWeek2
    });
    console.log("math-science-week2-sets.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek2 = grade3MathScienceWeek2;
console.log("math-science-week2-sets.js loaded and registered successfully");