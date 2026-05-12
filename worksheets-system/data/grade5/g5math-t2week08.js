// Grade 5 Mathematics - Term 2 Week 8 Data
const grade5MathematicsWeek8 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 2,
        week: 8,
        title: "Advanced Angle Applications",
        description: "Understanding vertical, adjacent, and supplementary angles; solving for variables; angles in triangles; and protractor measurement"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Vertical & Adjacent Angles",
        lessonContent: `
            <p>Welcome to our study of angles created by intersecting lines! Today we'll discover the special relationships between angles when two lines cross.</p>
            <p><strong>Key Question:</strong> What happens to angles when two lines intersect like an "X"?</p>
            <p><strong>Introduction:</strong> When two straight lines cross each other, they create four angles. These angles have special relationships that help us solve geometry problems.</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Intersecting Lines:</strong> Lines that cross each other at a point</li>
                <li><strong>Vertical Angles:</strong> Angles that are opposite each other when two lines cross. They are always EQUAL!</li>
                <li><strong>Adjacent Angles:</strong> Angles that share a common side and vertex. They sit next to each other.</li>
            </ul>
            <p><strong>The Rule:</strong> When two lines intersect, vertical angles are always equal. Adjacent angles are supplementary (they add up to 180°).</p>
            <p><strong>Angle Relationships:</strong></p>
            <ol>
                <li><strong>Vertical Angles:</strong> Opposite angles are equal (they have the same measure)</li>
                <li><strong>Adjacent Angles:</strong> Next to each other, they form a straight line (sum = 180°)</li>
                <li><strong>Linear Pair:</strong> Two adjacent angles that form a straight line = 180°</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times"></i> The "X" Marks the Spot</div>
                <p>Imagine two lines crossing like an "X". If the top angle is 50°, the bottom angle is also 50° (vertical angles). The left and right angles are each 130° because 50° + 130° = 180° (adjacent).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Finding the Missing Angle</div>
                <p>If one angle is 35°, its vertical angle is also 35°. The adjacent angles are 180° - 35° = 145°.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Real-World Connection</div>
                <p>Window panes, road intersections, and ladder rungs all create intersecting lines with vertical and adjacent angles!</p>
            </div>
        `,
        taskInstructions: "Identify vertical and adjacent angles, then solve for missing measurements.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In the diagram below (two intersecting lines forming an "X"), label one angle as 40°. Identify:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Its vertical angle measure: _________ °</div>
                        <div>• Its adjacent angle measure: _________ °</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vertical Angles Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Two lines intersect. One angle measures 72°. Find the other three angles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle opposite (vertical): _________ °</div>
                        <div>Angle adjacent (left): _________ °</div>
                        <div>Angle adjacent (right): _________ °</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If a vertical angle pair is (5x)° and 120°, solve for x:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Adjacent Angles Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Two adjacent angles form a straight line. One angle is 118°. Find the other:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw intersecting lines. Color vertical angles the same color. Color adjacent angles with different colors.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of intersecting lines in your home (window frames, tiles, shelves). Draw each and label one pair of vertical angles.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Multi-Angle Calculations",
        lessonContent: `
            <p>Today we'll learn how to solve for unknown variables in complex angle diagrams!</p>
            <p><strong>Key Question:</strong> How do we find a missing angle when multiple angles share a straight line?</p>
            <p><strong>Review:</strong> Angles on a straight line always add up to 180° (supplementary angles).</p>
            <p><strong>Multi-Angle Rule:</strong> When three or more angles share a straight line, their sum is still 180°.</p>
            <p><strong>Example:</strong> 50° + 90° + x = 180°</p>
            <p>Step 1: Add the known angles: 50° + 90° = 140°<br>
            Step 2: Subtract from 180°: 180° - 140° = 40°<br>
            Step 3: Therefore, x = 40°</p>
            <p><strong>Solving with Variables:</strong> Sometimes we need to solve for x using algebra!</p>
            <p><strong>Example:</strong> x + 2x + 30° = 180°<br>
            Step 1: Combine like terms: 3x + 30° = 180°<br>
            Step 2: Subtract 30°: 3x = 150°<br>
            Step 3: Divide by 3: x = 50°</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Three on a Line</div>
                <p>On a straight line: 35° + 45° + y = 180°. So y = 180° - 80° = 100°.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Algebraic Angles</div>
                <p>Angles on a straight line: (2x)° + (3x)° + 40° = 180°. Combine: 5x + 40 = 180 → 5x = 140 → x = 28°. Then 2x = 56°, 3x = 84°.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Right Angle on a Line</div>
                <p>If a 90° angle is on a straight line with two other angles of 30° and y: 90° + 30° + y = 180°, so y = 60°.</p>
            </div>
        `,
        taskInstructions: "Solve multi-angle equations with and without variables.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Multi-Angle Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Three angles on a straight line: 25° + 65° + a = 180°. Find a.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 40° + 70° + b = 180°. Find b.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 110° + c + 20° = 180°. Find c.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Angles with Variables</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> x + 2x + 60° = 180°. Solve for x and find each angle.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> (3y)° + (y)° + 80° = 180°. Solve for y.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> On a straight line: (2z)° + 45° + (z)° = 180°. Find z and each angle.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> A straight path has three street lamps. The angles between them are (p)°, (2p)°, and 75°. What is the value of p?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own multi-angle problem with 3 angles on a straight line (include a variable). Solve it and check your answer.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Angles in Triangles",
        lessonContent: `
            <p>Today we'll discover the special relationship between supplementary angles and the interior angles of a triangle!</p>
            <p><strong>Key Question:</strong> What do all triangles have in common when we add up their angles?</p>
            <p><strong>The Triangle Angle Sum Rule:</strong> The three interior angles of ANY triangle always add up to 180°!</p>
            <p><strong>Why 180°?</strong> If you tear off the three corners of a triangle and put them together, they form a straight line (180°).</p>
            <p><strong>Finding Missing Angles in Triangles:</strong></p>
            <p>If you know two angles, subtract their sum from 180° to find the third.</p>
            <p><strong>Example:</strong> Triangle with angles 50° and 60°.<br>
            Step 1: Add known angles: 50° + 60° = 110°<br>
            Step 2: Subtract from 180°: 180° - 110° = 70°<br>
            The missing angle is 70°.</p>
            <p><strong>Special Triangles:</strong></p>
            <ul>
                <li><strong>Equilateral Triangle:</strong> All three angles are 60° (3 × 60° = 180°)</li>
                <li><strong>Right Triangle:</strong> One angle is 90°, the other two add up to 90°</li>
                <li><strong>Isosceles Triangle:</strong> Two angles are equal</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-play"></i> The Tear and Prove</div>
                <p>Tear off the corners of any triangle. When you put them together, they always form a straight line - proof that triangle angles sum to 180°!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Roof Trusses</div>
                <p>Roof trusses use triangle shapes because they're strong. Carpenters use the 180° rule to make sure roofs are built correctly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Missing Angle Detective</div>
                <p>If a triangle has angles of 35° and 85°, the missing angle is 180° - 120° = 60°. Always works!</p>
            </div>
        `,
        taskInstructions: "Calculate missing angles in triangles and identify special triangle types.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding Missing Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Triangle with angles: 45° and 55°. Find the third angle.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Triangle with angles: 30° and 100°. Find the third.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Right triangle with one angle 35°. Find the other two angles.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Algebra in Triangles</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Triangle angles: (x)°, (2x)°, and 60°. Find x and all angles.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Triangle angles: (a)°, (a + 20)°, and 50°. Find a.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Triangle Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A triangle has angles 60°, 60°, 60°. What type of triangle is this?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A triangle has angles 90°, 45°, 45°. What type is it? (Two answers: by angle AND by side)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Draw and label a triangle with angles 40°, 70°, and 70°. What special name does this triangle have?
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 triangular objects at home (pizza slice, ramp, roof shape). Estimate or measure their angles and verify they sum to 180°.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Protractor Pro",
        lessonContent: `
            <p>Today we'll become experts at measuring angles with a protractor and verifying our calculations!</p>
            <p><strong>Key Question:</strong> How do we use a protractor to measure "related angles" accurately?</p>
            <p><strong>Parts of a Protractor:</strong></p>
            <ul>
                <li><strong>Baseline:</strong> The straight edge along the bottom (0° to 180° line)</li>
                <li><strong>Center Mark:</strong> The small hole or dot at the middle</li>
                <li><strong>Inner Scale:</strong> Numbers from right to left (0° to 180°)</li>
                <li><strong>Outer Scale:</strong> Numbers from left to right (0° to 180°)</li>
            </ul>
            <p><strong>How to Measure an Angle:</strong></p>
            <ol>
                <li>Place the center mark on the vertex (corner) of the angle</li>
                <li>Align the baseline with one side of the angle</li>
                <li>Read where the other side crosses the protractor scale</li>
                <li>Use the scale that starts at 0° on your baseline side</li>
            </ol>
            <p><strong>Verifying Relationships:</strong></p>
            <ul>
                <li>Measure vertical angles - they should be EQUAL</li>
                <li>Measure adjacent angles on a line - they should ADD to 180°</li>
                <li>Measure triangle angles - they should SUM to 180°</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Reading the Right Scale</div>
                <p>If your angle opens to the right, use the inner scale (0° on the right). If it opens to the left, use the outer scale (0° on the left).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Verify Your Math</div>
                <p>If your calculation says an angle should be 35°, measure it with a protractor. If you get 35°, your math is correct! This is how engineers check their work.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Drawing Accurate Angles</div>
                <p>To draw a 75° angle: Draw a baseline, mark the vertex, place protractor, mark 75°, then connect the marks. Perfect angle every time!</p>
            </div>
        `,
        taskInstructions: "Measure angles using a protractor and verify angle relationship rules.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measuring Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a protractor, measure the angles below (teacher will provide printed angles):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle A: _________ °</div>
                        <div>Angle B: _________ °</div>
                        <div>Angle C: _________ °</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Measure</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a 45° angle using your protractor. Then measure it to check accuracy.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a 120° angle. Then draw its adjacent angle. Measure both. Do they add to 180°?
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Verification Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two intersecting lines. Measure all four angles. Record below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle 1: _________ °</div>
                        <div>Angle 2: _________ °</div>
                        <div>Angle 3: _________ °</div>
                        <div>Angle 4: _________ °</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which pairs are vertical angles? Are they equal?:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Triangle Verification</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw any triangle. Measure all three angles and add them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle A: _________ °</div>
                        <div>Angle B: _________ °</div>
                        <div>Angle C: _________ °</div>
                        <div>Sum: _________ ° (should be 180°!)</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw 5 different angles (acute, right, obtuse, straight, reflex). Measure each with a protractor and label its measurement.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Angle Mastery Quiz",
        lessonContent: `
            <p>Today we'll demonstrate everything we've learned about angles over the past two weeks!</p>
            <p><strong>Week 1 & 2 Review:</strong></p>
            <ol>
                <li><strong>Angle Basics:</strong> Acute (less than 90°), Right (90°), Obtuse (90°-180°), Straight (180°), Reflex (180°-360°)</li>
                <li><strong>Intersecting Lines:</strong> Vertical angles are EQUAL; Adjacent angles on a line sum to 180°</li>
                <li><strong>Multi-Angle Calculations:</strong> Sum of angles on a straight line = 180°</li>
                <li><strong>Triangles:</strong> Sum of three interior angles = 180°</li>
                <li><strong>Protractor Skills:</strong> Measuring and drawing angles accurately</li>
            </ol>
            <p><strong>Key Formulas to Remember:</strong></p>
            <ul>
                <li>Vertical Angles: Angle A = Angle C (opposite)</li>
                <li>Linear Pair: Angle A + Angle B = 180°</li>
                <li>Triangle Sum: ∠1 + ∠2 + ∠3 = 180°</li>
                <li>Straight Line: ∠1 + ∠2 + ∠3 + ... = 180°</li>
            </ul>
            <p><strong>Quiz Format:</strong> Multiple choice, fill-in-the-blank, diagram problems, and a word problem.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question 1</div>
                <p>Two lines intersect. One angle is 75°. What is its vertical angle?<br><strong>Answer:</strong> 75°</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question 2</div>
                <p>A triangle has angles 40° and 65°. What is the third angle?<br><strong>Answer:</strong> 180° - 105° = 75°</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Sample Quiz Question 3</div>
                <p>Angles on a straight line: x + 2x + 30° = 180°. Solve for x.<br><strong>Answer:</strong> x = 50°</p>
            </div>
        `,
        taskInstructions: "Complete the comprehensive angle mastery quiz.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiple Choice (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> An angle that measures 135° is called:
                    <div style="margin-left: 20px;">
                        <div>A. Acute</div>
                        <div>B. Right</div>
                        <div>C. Obtuse</div>
                        <div>D. Reflex</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Vertical angles are always:
                    <div style="margin-left: 20px;">
                        <div>A. Adjacent</div>
                        <div>B. Equal</div>
                        <div>C. Supplementary</div>
                        <div>D. Complementary</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> The sum of angles in any triangle is:
                    <div style="margin-left: 20px;">
                        <div>A. 90°</div>
                        <div>B. 180°</div>
                        <div>C. 270°</div>
                        <div>D. 360°</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blank (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Two adjacent angles on a straight line are called a __________ pair.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> An angle that measures exactly 180° is a __________ angle.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Angles that share a common side and vertex are called __________ angles.
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Diagram Problems (6 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Two intersecting lines: one angle is 38°. Find the other three angles.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A triangle has angles of 55° and 45°. Find the missing angle.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> On a straight line: 28° + 92° + x = 180°. Find x.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Algebra Problems (8 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> (2x)° + 50° + (x)° = 180°. Solve for x and find each angle.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> Triangle angles: (y)°, (y + 30)°, and 40°. Solve for y.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Word Problem (10 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">12</span> A triangular garden has two angles measuring 65° and 75°. What is the measure of the third angle? If the garden is expanded so the 65° angle increases by 10°, how would that affect the third angle?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Bonus - Protractor Drawing (5 extra points)</strong></p>
                <div class="task-item">
                    <span class="task-number">★</span> Using your protractor, draw an accurate 62° angle and a 148° angle. Label them.
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create a study guide or poster showing all angle rules learned this week: vertical angles, angles on a line, triangle sum, and protractor tips. Be ready to share next week!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathematicsWeek8);
    console.log("grade5-mathematics-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathematicsWeek8);
    console.log("grade5-mathematics-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathematicsWeek8',
        metadata: grade5MathematicsWeek8.metadata,
        days: grade5MathematicsWeek8
    });
    console.log("grade5-mathematics-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathematicsWeek8 = grade5MathematicsWeek8;
console.log("grade5-mathematics-week8.js loaded and registered successfully");