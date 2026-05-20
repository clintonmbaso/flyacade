// Grade 1 Mathematics & Science - Term 3 Week 4 Data
const grade1MathScienceWeek4 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 3,
        week: 4,
        title: "Advanced Addition Concepts",
        description: "Exploring addition as comparison, adding with zero, number bonds, and making tens"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Using Addition as Comparison",
        lessonContent: `
            <p>Welcome! Today we'll learn how addition can help us compare things!</p>
            <p><strong>Key Question:</strong> How many more? How many in all?</p>
            <p><strong>Introduction:</strong> Sometimes we use addition to find out how many things we have when we put groups together. Other times, we use addition to compare two groups and find out "how many more" one group has than another.</p>
            <p><strong>Comparing with Addition:</strong></p>
            <ul>
                <li><strong>How many in all?</strong> Join two groups together → add</li>
                <li><strong>How many more?</strong> Find the difference → add up from the smaller number</li>
            </ul>
            <p><strong>Example:</strong> "Maria has 5 stickers. Juan has 3 stickers. How many more stickers does Maria have than Juan?"</p>
            <p>We can add up from 3 to 5: 3 + ___ = 5. The answer is 2!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apples-alt"></i> Apple Comparison</div>
                <p>Tom has 7 apples. Anna has 4 apples. How many more apples does Tom have? 4 + 3 = 7, so Tom has 3 MORE apples.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Star Stickers</div>
                <p>Lily has 9 star stickers. Mia has 6 star stickers. 6 + 3 = 9, so Lily has 3 more stars!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Count</div>
                <p>Ben has 8 cookies. Sam has 5 cookies. How many more cookies does Ben need to give Sam so they have the same? (Find the difference first!)</p>
            </div>
        `,
        taskInstructions: "Practice using addition to compare quantities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: How Many More?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Count and compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🐶🐶🐶🐶 (4 dogs) &nbsp;&nbsp; 🐱🐱 (2 cats)</div>
                        <div>How many more dogs than cats? 2 + ___ = 4 → Answer: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📚📚📚📚📚📚 (6 books) &nbsp;&nbsp; ✏️✏️✏️ (3 pencils)</div>
                        <div>How many more books than pencils? 3 + ___ = 6 → Answer: ___</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Comparison Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> 
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Lisa has 10 crayons. Max has 7 crayons.</div>
                        <div>Lisa has ___ more crayons than Max. (7 + ___ = 10)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>There are 9 boys and 5 girls in line.</div>
                        <div>There are ___ more boys than girls. (5 + ___ = 9)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw 8 circles and 5 triangles. How many more circles than triangles?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Alex collected 12 seashells. Bella collected 8 seashells. How many more seashells does Alex have?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find two groups of toys at home (like 5 red cars and 3 blue cars). Write how many more of one group you have.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Exploring Activities Involving Zero in Addition",
        lessonContent: `
            <p>Today we'll discover the special rule about adding with ZERO!</p>
            <p><strong>Key Question:</strong> What happens when you add zero to a number?</p>
            <p><strong>Introduction:</strong> Zero means "nothing" or "none." When you add zero to any number, that number stays the same. It's like adding an empty bag to your lunch - you still have the same lunch!</p>
            <p><strong>The Zero Rule:</strong></p>
            <ul>
                <li>Any number + 0 = that same number</li>
                <li>0 + any number = that same number</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>5 + 0 = 5</li>
                <li>0 + 7 = 7</li>
                <li>10 + 0 = 10</li>
                <li>0 + 0 = 0</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie"></i> Cookie Jar</div>
                <p>You have 4 cookies in your jar. You add 0 more cookies. How many do you have now? 4 + 0 = 4! Still 4 cookies!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Tank</div>
                <p>There are 3 fish in a tank. No new fish are added. 3 + 0 = 3 fish.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Fingers Up</div>
                <p>Hold up 2 fingers. Add 0 more fingers. How many fingers are up? 2! 2 + 0 = 2.</p>
            </div>
        `,
        taskInstructions: "Practice addition facts with zero.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Solve the Zero Addition Facts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 + 0 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>0 + 6 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>8 + 0 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>0 + 1 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>0 + 0 = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Correct Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>4 + 0 = (0, 4, 5)</div>
                        <div>0 + 9 = (0, 9, 10)</div>
                        <div>7 + 0 = (0, 7, 8)</div>
                        <div>0 + 2 = (0, 2, 3)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw to Show Zero</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw 5 stars. Then draw 0 stars next to them. Write the addition sentence.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Missing Number</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ + 0 = 10</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>0 + ___ = 12</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>___ + 0 = 5</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things in your house that come in groups of zero (like 'zero bananas left'). Write a number sentence for each.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Numbers Using Composition and Decomposition (Number Bonds)",
        lessonContent: `
            <p>Today we'll learn about number bonds - a fun way to break numbers apart and put them back together!</p>
            <p><strong>Key Question:</strong> How can we break a number into smaller parts and then add them back?</p>
            <p><strong>Introduction:</strong> Number bonds show how numbers are made of smaller numbers. For example, 5 can be broken into 2 and 3, or 1 and 4. This helps us add more easily!</p>
            <p><strong>What is a Number Bond?</strong></p>
            <ul>
                <li>A number bond shows a "whole" number and its "parts"</li>
                <li>Whole = Part + Part</li>
                <li>Example: Whole = 7, Parts = 3 and 4 (because 3 + 4 = 7)</li>
            </ul>
            <p><strong>Composition:</strong> Putting parts together to make a whole (adding)</p>
            <p><strong>Decomposition:</strong> Breaking a whole into parts (subtraction or finding parts)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Puzzle Pieces</div>
                <p>Think of number bonds like puzzles! If 8 is the whole puzzle, the pieces could be 5 and 3 (5+3=8) or 6 and 2 (6+2=8).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> Train Cars</div>
                <p>A train has 10 cars total. It has 4 red cars and 6 blue cars. 10 is the whole, 4 and 6 are the parts!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-fist"></i> Finger Bonds</div>
                <p>Hold up 5 fingers. Thumb and 4 fingers: 1+4=5. Thumb and 2 fingers and 2 fingers: 1+2+2=5. Many ways to break apart 5!</p>
            </div>
        `,
        taskInstructions: "Practice creating and completing number bonds for numbers up to 15.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Number Bonds</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Whole = 6 &nbsp;&nbsp; Part = 2 &nbsp;&nbsp; Other Part = ___ (2 + ___ = 6)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Whole = 9 &nbsp;&nbsp; Part = 4 &nbsp;&nbsp; Other Part = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Whole = 10 &nbsp;&nbsp; Part = 7 &nbsp;&nbsp; Other Part = ___</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw a Number Bond</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a number bond for the number 8. Show two different ways to break it into parts.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find All the Number Bonds</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List all the number bond pairs for the number 7:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>0 + 7 = 7</div>
                        <div>1 + 6 = 7</div>
                        <div>___ + ___ = 7</div>
                        <div>___ + ___ = 7</div>
                        <div>___ + ___ = 7</div>
                        <div>6 + 1 = 7</div>
                        <div>7 + 0 = 7</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Decompose and Add</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Break 9 into two parts, then add them back to check: 4 + 5 = ___   &nbsp;&nbsp; 2 + 7 = ___
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Sam has 12 marbles. He gives 5 to his friend. How many does he have left? Use a number bond.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing number bonds for the number 10. Draw pictures (like 10 apples broken into 6 and 4).",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Numbers Using Frames of 10",
        lessonContent: `
            <p>Today we'll learn a super helpful strategy: making a ten to add more easily!</p>
            <p><strong>Key Question:</strong> How can making a group of 10 help us add faster?</p>
            <p><strong>Introduction:</strong> Ten-frames are boxes with 10 spaces that help us see numbers. When we add, we can fill up a ten-frame first, then count what's left. This makes adding bigger numbers much easier!</p>
            <p><strong>How to Use a Ten-Frame:</strong></p>
            <ul>
                <li>A ten-frame has 2 rows of 5 boxes (10 total)</li>
                <li>Fill boxes to show numbers 1-10</li>
                <li>When adding, first fill a ten-frame, then add the rest</li>
            </ul>
            <p><strong>Making 10 Strategy:</strong> If you have 8 + 5, take 2 from the 5 to make 8 into 10, then add the remaining 3: 10 + 3 = 13!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Ten-Frame Demo</div>
                <p>To show 7, fill 7 boxes: ■■■■■■■□□□</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Making 10 Magic</div>
                <p>9 + 4 = ? Take 1 from the 4 to make 9 into 10. Then 10 + 3 = 13. Much easier!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg Carton Math</div>
                <p>An egg carton is like a ten-frame (but with 12 spots!). If you have 8 eggs and add 5 more, you can fill one carton and have 3 in the next.</p>
            </div>
        `,
        taskInstructions: "Practice using ten-frames and the making 10 strategy to add numbers to 20.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw the Ten-Frame</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a ten-frame and show the number 6:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a ten-frame and show the number 9:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Making 10 Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the making 10 strategy to add:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>8 + 4 = (8 + 2 = 10, then 10 + 2 = ___)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>7 + 5 = (7 + 3 = 10, then 10 + 2 = ___)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>9 + 6 = (9 + 1 = 10, then 10 + 5 = ___)</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ten-Frame Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw ten-frames to solve 7 + 6:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems with Ten-Frames</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Maria has 8 red balloons and 5 blue balloons. How many balloons in all? Use the making 10 strategy.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> There are 9 students on the bus. 4 more students get on. How many students are on the bus now?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Explain in your own words why making a ten helps you add faster:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice making 10 with a family member. Use 10 small objects (beans, buttons, or coins) to show 8+5, 7+6, and 9+4.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek4);
    console.log("grade1-mathscience-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek4);
    console.log("grade1-mathscience-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek4',
        metadata: grade1MathScienceWeek4.metadata,
        days: grade1MathScienceWeek4
    });
    console.log("grade1-mathscience-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek4 = grade1MathScienceWeek4;
console.log("grade1-mathscience-week4.js loaded and registered successfully");