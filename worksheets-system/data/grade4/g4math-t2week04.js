// Grade 4 Mathematics - Term 2 Week 4 Data
const grade4MathWeek4 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 4,
        title: "Introduction to Angles",
        description: "Understanding angles as measures of turn, identifying right angles, and classifying acute and obtuse angles"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "What is an Angle?",
        lessonContent: `
            <p>Welcome to our exploration of angles! Today we'll learn that an angle is a measure of "turn" where two lines meet.</p>
            <p><strong>Key Question:</strong> What happens when two lines share a point and one of them turns?</p>
            <p><strong>Introduction:</strong> An angle isn't just a shape - it's the amount of space between two lines that meet at a shared point. Imagine you're standing in the center of a room and pointing in one direction, then you turn to point somewhere else. The amount you turned is an angle!</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ol>
                <li><strong>Vertex:</strong> The common point where two lines meet (the "corner")</li>
                <li><strong>Ray:</strong> One of the straight lines that forms an angle</li>
                <li><strong>Angle:</strong> The measure of turn between two rays that share a vertex</li>
            </ol>
            <p><strong>Angle Facts:</strong></p>
            <ul>
                <li>Angles are everywhere! In scissors, clock hands, doors, and books</li>
                <li>When you open a door, the angle between the door and the wall gets bigger</li>
                <li>When you bend your elbow, your arm creates an angle</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> The Human Compass</div>
                <p>Stand up and point straight ahead. Now turn to point to the right. The amount you turned is an angle! Your feet are the vertex (the corner), and your arms are the rays.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Hands</div>
                <p>Look at a clock. At 3:00, the hour hand points to 3 and the minute hand points to 12. The space between them is an angle of 90 degrees!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Scissors Connection</div>
                <p>When scissors are closed, the angle between the blades is very small (almost 0). When you open them wide, the angle becomes large!</p>
            </div>
        `,
        taskInstructions: "Create a moving angle model and practice identifying angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build an Angle Model</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use two craft sticks and a brass fastener (or paperclip) to create a moveable angle:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Move the sticks to create different angles. Draw three different angles you made:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; height: 80px; text-align: center; padding-top: 30px;">Angle 1</div>
                        <div style="border: 1px solid #ccc; height: 80px; text-align: center; padding-top: 30px;">Angle 2</div>
                        <div style="border: 1px solid #ccc; height: 80px; text-align: center; padding-top: 30px;">Angle 3</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Body Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Try these body movements. Name the vertex (the corner) for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Bending your knee: Vertex = _________</div>
                        <div>• Bending your elbow: Vertex = _________</div>
                        <div>• Opening your mouth: Vertex = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In your own words, what is an angle?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find one object at home that creates an angle when it moves. What is it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home that have moving parts that create angles (scissors, book, door, laptop). Draw each object and show the angle.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Angles in Motion",
        lessonContent: `
            <p>Today we'll discover angles all around us - especially in things that move!</p>
            <p><strong>Key Question:</strong> How does an angle change when something opens or closes?</p>
            <p><strong>Introduction:</strong> Moving objects create changing angles. When you open a door, the angle between the door and the wall gets bigger. When you close it, the angle gets smaller. Let's explore angles in motion!</p>
            <p><strong>Angles We See Every Day:</strong></p>
            <ul>
                <li><strong>Door hinges:</strong> The angle changes as you open and close</li>
                <li><strong>Scissors blades:</strong> The angle between blades changes when you cut</li>
                <li><strong>Laptop screen:</strong> The angle between screen and keyboard changes as you adjust it</li>
                <li><strong>Your jaw:</strong> The angle changes when you open your mouth</li>
                <li><strong>Clock hands:</strong> The angle changes as time passes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> The Door Experiment</div>
                <p>When a door is closed, the angle between the door and the wall is 0 degrees (it's flat against the wall). When it's half open, the angle is about 90 degrees. When it's fully open, it's about 180 degrees!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Human Arm Angles</div>
                <p>Your elbow is the vertex. When your arm is straight, the angle is large (about 180 degrees). When you bend your arm to touch your shoulder, the angle becomes small (about 45 degrees).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open"></i> Book Angles</div>
                <p>Hold a book closed. Now open it halfway. The angle between the covers gets bigger as you open it. Cookbooks often lie flat at 180 degrees!</p>
            </div>
        `,
        taskInstructions: "Find and sketch moving angles in the classroom.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Angle Detectors</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With a partner, find THREE things in the classroom that move on a hinge and create angles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object 1: _________</div>
                        <div style="margin-top: 5px;">Sketch it halfway open:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">Object 2: _________</div>
                        <div style="margin-top: 5px;">Sketch it halfway open:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">Object 3: _________</div>
                        <div style="margin-top: 5px;">Sketch it halfway open:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Angle Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each object you found, does the angle get BIGGER or SMALLER when it opens?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Clock Angle Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw clock hands to show these times. Circle which has the larger angle:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <div>1:00</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="text-align: center;">
                            <div>3:00</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">Which has the larger angle? _________</div>
                </div>
            </div>
        `,
        homework: "Watch the clock at 3 different times today. Draw the clock face and estimate how the angle between the hands changes.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "The Right Angle",
        lessonContent: `
            <p>Today we'll learn about a special angle called the RIGHT ANGLE - the perfect square corner!</p>
            <p><strong>Key Question:</strong> What makes a corner "square" and how can we test for it?</p>
            <p><strong>Introduction:</strong> A right angle is exactly 90 degrees (90°). You see them everywhere - in books, windows, doors, desks, and Lego bricks! The symbol for a right angle is a small square (□) instead of a curve.</p>
            <p><strong>Properties of a Right Angle:</strong></p>
            <ul>
                <li>It measures exactly 90 degrees</li>
                <li>It looks like the corner of a square or rectangle</li>
                <li>We mark it with a small square symbol (□)</li>
                <li>It's our benchmark for comparing other angles</li>
            </ul>
            <p><strong>How to Test for a Right Angle:</strong></p>
            <ol>
                <li>Take a piece of paper or index card (its corners are right angles!)</li>
                <li>Place the corner of the paper against the corner you want to test</li>
                <li>If the edges line up perfectly, it's a RIGHT ANGLE!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-border-all"></i> Square Corners</div>
                <p>A square has 4 right angles. A rectangle also has 4 right angles. The corner of a piece of paper, a photo frame, or a tile all form right angles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Around the Room</div>
                <p>Look at the corner of your classroom where the wall meets the floor. That's a right angle! The corner of your desk, your book, and your phone screen are all right angles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chess-board"></i> Lego Test</div>
                <p>Every standard Lego brick has perfect right angles at its corners. That's why they stack so neatly!</p>
            </div>
        `,
        taskInstructions: "Use a Right Angle Tester to hunt for right angles around the room.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Make Your Right Angle Tester</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take an index card or piece of paper. Its corners are right angles! This is your Right Angle Tester.
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Right Angle Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your Right Angle Tester to find objects with perfect square corners. Find at least 5:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                        <div>4. _________</div>
                        <div>5. _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Mark Right Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a rectangle and a square. Mark their right angles with the square symbol (□):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Test These Shapes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at these shapes. Which have right angles?
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px; text-align: center;">
                        <div>
                            <div>Square</div>
                            <div class="drawing-area" style="height: 60px; border: 1px solid #ccc;"></div>
                            <div>Right angle? ___</div>
                        </div>
                        <div>
                            <div>Circle</div>
                            <div class="drawing-area" style="height: 60px; border: 1px solid #ccc;"></div>
                            <div>Right angle? ___</div>
                        </div>
                        <div>
                            <div>Triangle</div>
                            <div class="drawing-area" style="height: 60px; border: 1px solid #ccc;"></div>
                            <div>Right angle? ___</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 right angles in your home (window corners, book corners, screen corners). Draw or list where you found them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Acute & Obtuse Angles",
        lessonContent: `
            <p>Today we'll learn to classify angles as ACUTE or OBTUSE by comparing them to our right angle benchmark!</p>
            <p><strong>Key Question:</strong> How can we tell if an angle is smaller or larger than a right angle?</p>
            <p><strong>The Three Angle Families:</strong></p>
            <ol>
                <li><strong>Acute Angle:</strong> An angle that is SMALLER than a right angle (less than 90°). Think "a-cute little angle!"</li>
                <li><strong>Right Angle:</strong> An angle that is EXACTLY 90° - our square corner benchmark</li>
                <li><strong>Obtuse Angle:</strong> An angle that is LARGER than a right angle (more than 90° but less than 180°). Think "obtuse = oh-big-use!"</li>
            </ol>
            <p><strong>How to Classify Angles:</strong></p>
            <ul>
                <li>Use your Right Angle Tester (index card corner)</li>
                <li>Place the tester against the angle</li>
                <li>If the angle is hidden behind the card → ACUTE (smaller)</li>
                <li>If the angle matches the card exactly → RIGHT</li>
                <li>If the angle sticks out past the card → OBTUSE (larger)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> A-Cute Little Angle</div>
                <p>Acute angles are "cute" because they're small and sharp! Think of a slice of pizza cut very thin, or the angle when you bend your finger slightly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Obtuse = Oh-Big-Use</div>
                <p>Obtuse angles are wide and open. Think of a reclining chair, a yoga stretch, or a wide-open book lying flat (180° is a straight line, which is even bigger!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Peace Sign</div>
                <p>The peace sign ✌️ makes an acute angle between the two fingers! Your index finger and middle finger form a V shape that's less than 90°.</p>
            </div>
        `,
        taskInstructions: "Classify angles using the Right Angle Tester and complete the summary table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Paper Fan Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fold a strip of paper like an accordion fan. Open it different amounts and classify each angle:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">
                        <div>• Fan opened a little bit (small opening): _________</div>
                        <div>• Fan opened to match your index card: _________</div>
                        <div>• Fan opened wide (large opening): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Angle Sorting with Your Tester</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use your Right Angle Tester on these angles. Write Acute, Right, or Obtuse:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A slice of pizza (thin slice): _________</div>
                        <div>B. Corner of a book: _________</div>
                        <div>C. A wide-open door: _________</div>
                        <div>D. The letter "V" shape: _________</div>
                        <div>E. A reclining chair back: _________</div>
                        <div>F. The corner of a sticky note: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Classify</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw each type of angle and label it:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Acute</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span>(less than 90°)</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Right</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span>(exactly 90°)</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Obtuse</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span>(more than 90°)</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Summary Table</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete this summary table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Type of Angle</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Comparison to 90°</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Memory Trick</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Acute</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________ than 90°</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">"A-cute little angle"</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Right</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________ 90°</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Square corner (□)</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Obtuse</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________ than 90°</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">"Oh-big-use" angle</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a clock showing 10:10. The angle between the hands is acute or obtuse? How do you know?
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Draw or find 3 acute angles and 3 obtuse angles around your home. Label each one. Create your own angle classification chart.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek4);
    console.log("grade4-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek4);
    console.log("grade4-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek4',
        metadata: grade4MathWeek4.metadata,
        days: grade4MathWeek4
    });
    console.log("grade4-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek4 = grade4MathWeek4;
console.log("grade4-math-week4.js loaded and registered successfully");