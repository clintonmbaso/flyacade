// Grade 3 Mathematics & Science - Term 3 Week 2 Data
const grade3MathsScienceWeek2 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 2,
        title: "Plane and Solid Shapes",
        description: "Drawing rectangles, squares, and triangles; identifying and sorting isosceles and equilateral triangles"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Plane Shapes",
        subtopic: "Drawing Rectangles and Squares",
        lessonContent: `
            <p>Welcome to our week on shapes! Today we'll learn how to draw rectangles and squares using a protractor and set square.</p>
            <p><strong>Key Question:</strong> How can we draw perfect rectangles and squares using special tools?</p>
            <p><strong>What is a Rectangle?</strong></p>
            <ul>
                <li>A rectangle has 4 straight sides</li>
                <li>Opposite sides are equal in length</li>
                <li>All 4 corners are right angles (90 degrees)</li>
            </ul>
            <p><strong>What is a Square?</strong></p>
            <ul>
                <li>A square is a special type of rectangle</li>
                <li>All 4 sides are equal in length</li>
                <li>All 4 corners are right angles (90 degrees)</li>
            </ul>
            <p><strong>Tools We Use:</strong></p>
            <ul>
                <li><strong>Set Square:</strong> A triangle-shaped tool that helps us draw right angles</li>
                <li><strong>Protractor:</strong> A tool that measures angles (we use it to make sure corners are 90 degrees)</li>
                <li><strong>Ruler:</strong> Helps us measure and draw straight lines</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Rectangles Around Us</div>
                <p>A door, a book, a phone screen - these are all rectangles! Look around your classroom. How many rectangles can you spot?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Squares Around Us</div>
                <p>A checkerboard square, a sticky note, a window pane - these are squares! Every square is a rectangle, but not every rectangle is a square.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Using a Set Square</div>
                <p>A set square has one perfect 90-degree corner. You can trace along its edges to draw right angles for your rectangles and squares!</p>
            </div>
        `,
        taskInstructions: "Draw rectangles and squares using a protractor and set square.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing a Rectangle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your ruler, set square, and protractor, draw a rectangle with these measurements:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>• Length = 8 cm</div>
                        <div>• Width = 5 cm</div>
                        <div>• All corners must be 90 degrees</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing a Square</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your tools, draw a square with these measurements:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>• All sides = 6 cm</div>
                        <div>• All corners must be 90 degrees</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Check Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use your protractor to check each corner. Are they all 90 degrees?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a rectangle and a square?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 rectangles and 3 squares at home. Draw them in your notebook and measure their sides.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Plane Shapes",
        subtopic: "Identifying Isosceles and Equilateral Triangles",
        lessonContent: `
            <p>Today we'll learn about two special types of triangles: isosceles and equilateral!</p>
            <p><strong>Key Question:</strong> How can we tell the difference between different types of triangles?</p>
            <p><strong>What is a Triangle?</strong></p>
            <ul>
                <li>A triangle has 3 straight sides</li>
                <li>It has 3 corners (called vertices)</li>
                <li>It has 3 angles</li>
            </ul>
            <p><strong>Isosceles Triangle:</strong></p>
            <ul>
                <li>Has 2 sides that are EQUAL in length</li>
                <li>Has 2 angles that are EQUAL</li>
                <li>Think: "Iso" means equal - two sides are the same!</li>
            </ul>
            <p><strong>Equilateral Triangle:</strong></p>
            <ul>
                <li>Has ALL 3 sides EQUAL in length</li>
                <li>Has ALL 3 angles EQUAL (each is 60 degrees)</li>
                <li>Think: "Equi" means equal - all sides are the same!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-roof"></i> Isosceles in Real Life</div>
                <p>The roof of a house is often an isosceles triangle! The two sloping sides are equal, and the bottom is different.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Equilateral in Real Life</div>
                <p>Yield signs on the road are equilateral triangles! All three sides are the same length, and all three corners look the same.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Triangles</div>
                <p>A slice of pizza is usually an isosceles triangle - the two sides from the crust to the tip are equal, and the crust is the bottom.</p>
            </div>
        `,
        taskInstructions: "Find and identify isosceles and equilateral triangles in objects around you.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Triangle Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom. Find 3 objects that have triangle shapes. Draw them below:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Isosceles or Equilateral?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each triangle below. Is it isosceles or equilateral?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <div style="display: inline-block; width: 100px; height: 80px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <span>Triangle A: _________</span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="display: inline-block; width: 100px; height: 80px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <span>Triangle B: _________</span>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <div style="display: inline-block; width: 100px; height: 80px; border: 1px solid #ccc; margin-right: 10px;"></div>
                            <span>Triangle C: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Describe the Difference</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How can you tell if a triangle is equilateral without measuring all three sides?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw an isosceles triangle and an equilateral triangle side by side:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Cut out triangle shapes from magazines or draw them. Label each as isosceles or equilateral. Bring them to class tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Plane Shapes",
        subtopic: "Sorting Isosceles and Equilateral Triangles",
        lessonContent: `
            <p>Today we'll practice sorting triangles! We'll use what we learned yesterday to sort isosceles and equilateral triangles.</p>
            <p><strong>Key Question:</strong> How can we group triangles by their properties?</p>
            <p><strong>Review: How to Identify Each Triangle</strong></p>
            <ul>
                <li><strong>Isosceles Triangle:</strong> 2 sides are equal, 2 angles are equal</li>
                <li><strong>Equilateral Triangle:</strong> All 3 sides are equal, all 3 angles are equal (60 degrees each)</li>
            </ul>
            <p><strong>Sorting Rules:</strong></p>
            <ul>
                <li>Count how many sides are the same length</li>
                <li>If 2 sides match → Isosceles</li>
                <li>If all 3 sides match → Equilateral</li>
                <li>Remember: Every equilateral triangle is also isosceles (because it has at least 2 equal sides), but we call it equilateral when all 3 are equal!</li>
            </ul>
            <p><strong>Let's Practice Sorting!</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Sorting Game</div>
                <p>Imagine you have 10 triangle cutouts. You can sort them into two piles: isosceles and equilateral. Which pile would a triangle with sides 5cm, 5cm, 7cm go into?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> The Special Rule</div>
                <p>An equilateral triangle is special because it has 3 equal sides. That means it also has 2 equal sides, so it COULD be called isosceles. But we save the name "equilateral" for when ALL THREE sides match!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring Helps</div>
                <p>If you're not sure what type of triangle you have, measure the sides with a ruler. That will tell you for sure!</p>
            </div>
        `,
        taskInstructions: "Sort triangles into isosceles and equilateral groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cut and Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Cut out the triangles provided by your teacher. Sort them into two groups:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="background: #e3f2fd; padding: 10px; border-radius: 8px;">
                            <strong>Isosceles Triangles</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 1px dashed #4A90E2;"></div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        </div>
                        <div style="background: #e8f5e9; padding: 10px; border-radius: 8px;">
                            <strong>Equilateral Triangles</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 1px dashed #4CAF50;"></div>
                            <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the chart by writing the number of triangles in each group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 80%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Type of Triangle</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Number of Triangles</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Isosceles</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Equilateral</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explain Your Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How did you decide which triangles were isosceles and which were equilateral?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw 3 isosceles triangles and 3 equilateral triangles of different sizes. Label each one.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Plane Shapes",
        subtopic: "Drawing Triangles Using Set Square and Protractor",
        lessonContent: `
            <p>Today we'll learn how to draw isosceles and equilateral triangles using our set square and protractor!</p>
            <p><strong>Key Question:</strong> How can we draw perfect triangles using special tools?</p>
            <p><strong>Drawing an Isosceles Triangle:</strong></p>
            <ol>
                <li>Draw the base line (bottom side) using your ruler</li>
                <li>Find the middle of the base line</li>
                <li>Draw a line straight up from the middle (this is the height)</li>
                <li>Connect the top point to both ends of the base</li>
                <li>Check that the two sloping sides are equal</li>
            </ol>
            <p><strong>Drawing an Equilateral Triangle:</strong></p>
            <ol>
                <li>Draw the base line using your ruler</li>
                <li>Use your protractor to measure a 60-degree angle at one end of the base</li>
                <li>Draw a line 5 cm long at that 60-degree angle</li>
                <li>Repeat step 2 at the other end of the base</li>
                <li>The two lines should meet at the top - all sides equal!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Tool Tips</div>
                <p>Your set square has a 60-degree angle on one corner! You can use that to draw equilateral triangles without a protractor.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Step by Step</div>
                <p>Drawing triangles takes practice. Don't worry if your first try isn't perfect - keep trying! Use light lines first, then trace over them once they're right.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Check Your Work</div>
                <p>After drawing your triangle, use your ruler to measure all sides. For equilateral, all three should be the same. For isosceles, two should match.</p>
            </div>
        `,
        taskInstructions: "Draw isosceles and equilateral triangles using a set square and protractor.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw an Isosceles Triangle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw an isosceles triangle with these measurements:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>• Base = 6 cm</div>
                        <div>• Equal sides = 5 cm each</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw an Equilateral Triangle</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw an equilateral triangle with these measurements:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>• All sides = 6 cm</div>
                        <div>• All angles = 60 degrees</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Triangle Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one more triangle of your choice. Label it as isosceles or equilateral:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What tool was most helpful for drawing your triangles? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw one isosceles triangle and one equilateral triangle with side lengths of your choice. Measure and write the side lengths on each triangle.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Plane and Solid Shapes",
        subtopic: "Activity: Constructing Shapes with Straws and Sticks",
        lessonContent: `
            <p>Today is activity day! We'll use straws, sticks, and other materials to build our own shapes!</p>
            <p><strong>Key Question:</strong> How can we build 2D shapes using everyday materials?</p>
            <p><strong>What We Will Build:</strong></p>
            <ul>
                <li>Rectangles</li>
                <li>Squares</li>
                <li>Isosceles triangles</li>
                <li>Equilateral triangles</li>
            </ul>
            <p><strong>Materials:</strong></p>
            <ul>
                <li>Straws or sticks (for sides)</li>
                <li>Clay, playdough, or tape (to connect corners)</li>
                <li>Ruler (to measure)</li>
                <li>Scissors (to cut straws/sticks to size)</li>
            </ul>
            <p><strong>Construction Tips:</strong></p>
            <ul>
                <li>Measure your straws/sticks before cutting</li>
                <li>Make sure corners are secure - press clay firmly or tape carefully</li>
                <li>For triangles, remember the side rules: isosceles needs 2 equal sides; equilateral needs all 3 equal</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-strawberry-alt"></i> Straw Architects</div>
                <p>Straws are great for building because they're lightweight and easy to cut. You can make colorful shapes and even connect them to make 3D shapes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Challenge</div>
                <p>Can you build a square and then change it into a rectangle by changing just two sides? Try it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Team Building</div>
                <p>Work with a partner! One person can hold the corners while the other connects them. Teamwork makes shape-building easier!</p>
            </div>
        `,
        taskInstructions: "Construct rectangles, squares, isosceles triangles, and equilateral triangles using straws and sticks.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build a Rectangle and a Square</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Build a rectangle using straws/sticks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Length: 10 cm</div>
                        <div>• Width: 6 cm</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Build a square using straws/sticks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• All sides: 8 cm</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build Isosceles and Equilateral Triangles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Build an isosceles triangle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Base: 8 cm</div>
                        <div>• Equal sides: 7 cm each</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Build an equilateral triangle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• All sides: 7 cm</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Show and Tell</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which shape was easiest to build? Which was hardest? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Describe one challenge you faced while building and how you solved it:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Show your shapes to a classmate. Compare your shapes. How are they similar? How are they different?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Use straws, toothpicks, or sticks at home to build one rectangle, one square, one isosceles triangle, and one equilateral triangle. Draw and label each shape in your notebook.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek2);
    console.log("grade3-maths-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek2);
    console.log("grade3-maths-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek2',
        metadata: grade3MathsScienceWeek2.metadata,
        days: grade3MathsScienceWeek2
    });
    console.log("grade3-maths-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek2 = grade3MathsScienceWeek2;
console.log("grade3-maths-science-week2.js loaded and registered successfully");