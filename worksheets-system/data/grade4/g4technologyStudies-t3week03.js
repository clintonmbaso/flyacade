// Grade 4 Technology Studies - Term 3 Week 3 Data
const grade4TechStudiesWeek3 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 3,
        week: 3,
        title: "Angles & Geometric Precision",
        description: "Identifying, measuring, constructing, and bisecting angles with accuracy"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Geometric Precision",
        subtopic: "Identifying & Measuring Angles",
        lessonContent: `
            <p>Welcome to our exploration of angles! Today we'll learn how to identify and measure different types of angles.</p>
            <p><strong>Key Question:</strong> How do angles change as a door opens or a clock hand moves?</p>
            <p><strong>Introduction:</strong> An angle is formed when two lines meet at a point. Think about a door opening - the angle between the door and the wall gets larger as you push it open!</p>
            <p><strong>Types of Angles:</strong></p>
            <ol>
                <li><strong>Acute Angle:</strong> Less than 90° (smaller than a corner of a book) - sharp and pointy</li>
                <li><strong>Right Angle:</strong> Exactly 90° (like the corner of a square or rectangle)</li>
                <li><strong>Obtuse Angle:</strong> Between 90° and 180° (wider than a book corner but not a straight line)</li>
                <li><strong>Reflex Angle:</strong> Between 180° and 360° (more than a straight line - the "outside" of a smaller angle)</li>
            </ol>
            <p><strong>How to Use a Protractor:</strong></p>
            <ul>
                <li>Place the center hole over the vertex (corner point)</li>
                <li>Line up the baseline with one side of the angle</li>
                <li>Read where the other side crosses the numbered scale</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Face Angles</div>
                <p>At 3:00, the clock hands form a right angle (90°). At 1:00, they form an acute angle (30°). At 5:00, they form an obtuse angle (150°)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Door Opening</div>
                <p>A door closed is 0°. Open it halfway (45°) - that's acute! Open it fully (90°) - that's a right angle. Push it past 90° - that's obtuse!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Real-World Right Angles</div>
                <p>Look around your classroom: the corner of your desk, the edge of a book, the frame of a window - all right angles!</p>
            </div>
        `,
        taskInstructions: "Draw a baseline, use a protractor to identify angle types, and match names to visual representations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw and Identify</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a baseline and use your protractor to create and label each angle type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Acute angle (less than 90°)</div>
                        <div>• Right angle (90°)</div>
                        <div>• Obtuse angle (between 90° and 180°)</div>
                        <div>• Reflex angle (between 180° and 360°)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Exercise</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each angle name to its visual representation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Acute</div>
                                <div>• Right</div>
                                <div>• Obtuse</div>
                                <div>• Reflex</div>
                            </div>
                            <div>
                                <div>→ [Visual: 90° corner]</div>
                                <div>→ [Visual: 45° sharp corner]</div>
                                <div>→ [Visual: 120° wide corner]</div>
                                <div>→ [Visual: 270° large sweep]</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measure and Classify</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use your protractor to measure each angle below. Write the measurement and classify it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle A: _____° → Type: _________</div>
                        <div>Angle B: _____° → Type: _________</div>
                        <div>Angle C: _____° → Type: _________</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Teacher-drawn angles for measurement]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find one acute angle and one obtuse angle in your classroom. Describe where you found them:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 different angles at home (in furniture, clocks, picture frames). Draw them and label whether each is acute, right, obtuse, or reflex.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Geometric Precision",
        subtopic: "Constructing & Bisecting Angles",
        lessonContent: `
            <p>Today we'll learn how to construct specific angles and how to "cut an angle in half" - that's called bisecting!</p>
            <p><strong>Key Question:</strong> How can you create an exact 60° angle, and then split it perfectly into two 30° angles?</p>
            <p><strong>Introduction:</strong> To bisect means to divide into two equal parts. When we bisect an angle, we create two smaller angles that are exactly the same size.</p>
            <p><strong>How to Construct a 90° Angle (Right Angle):</strong></p>
            <ol>
                <li>Draw a straight baseline using a ruler</li>
                <li>Mark a point (the vertex) on the baseline</li>
                <li>Place your protractor's center hole on the vertex</li>
                <li>Line up the baseline with 0° on the protractor</li>
                <li>Mark a point at 90° on the protractor scale</li>
                <li>Remove the protractor and draw a line from the vertex through your 90° mark</li>
            </ol>
            <p><strong>How to Bisect an Angle (Example: 60° into two 30° angles):</strong></p>
            <ol>
                <li>Draw your 60° angle (using the same protractor method)</li>
                <li>Place the compass point at the vertex and draw an arc that crosses both sides of the angle</li>
                <li>From where the arc crosses each side, draw two more arcs that intersect inside the angle</li>
                <li>Draw a straight line from the vertex through the intersection point</li>
                <li>This line bisects the angle - both new angles should be 30°!</li>
            </ol>
            <p><strong>Target Angles to Construct:</strong> 60°, 90°, 120°</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Bisecting in Real Life</div>
                <p>When a carpenter needs to split a corner exactly in half for a perfect joint, they use angle bisecting. It's like folding a paper angle in half!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Construction Connections</div>
                <p>Builders use 90° angles constantly - walls, floors, and roofs all depend on precise right angles for stability and safety.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> 60° in Nature</div>
                <p>Beehive honeycombs are made of perfect 60° angles! Bees build hexagon shapes because 60° angles fit together without gaps.</p>
            </div>
        `,
        taskInstructions: "Construct specific angles (60°, 90°, 120°) and practice bisecting a 60° angle into two 30° angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Construct a 90° Angle</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the step-by-step method to construct a perfect 90° angle:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">
                        <em>Check: Did your angle measure 90°? ±2° is acceptable.</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Construct a 60° Angle</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Construct a 60° angle using your protractor:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Construct a 120° Angle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Construct a 120° angle (remember: 120° is greater than 90° but less than 180°):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Bisect a 60° Angle</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Now take your 60° angle from Part B and bisect it to create two 30° angles:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> After bisecting, measure both new angles. What do you get?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Accuracy Check</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Record your measurements below. Are they within 2° of the target?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>90° angle measured: _____° (target: 90°) → Within 2°? Yes / No</div>
                        <div>60° angle measured: _____° (target: 60°) → Within 2°? Yes / No</div>
                        <div>120° angle measured: _____° (target: 120°) → Within 2°? Yes / No</div>
                        <div>Bisected angles measured: _____° and _____° (target: both 30°)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice constructing three 90° angles and three 60° angles at home. Check them with a protractor and bring your best one to class.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Geometric Precision",
        subtopic: "Angle Applications & Review",
        lessonContent: `
            <p>Today we'll see how angles are used in real-world technology and review our angle skills!</p>
            <p><strong>Key Question:</strong> Where do we use angle measurement in everyday technology and construction?</p>
            <p><strong>Real-World Angle Applications:</strong></p>
            <ul>
                <li><strong>Architecture:</strong> Roofs need specific angles for rain runoff and snow shedding</li>
                <li><strong>Furniture Making:</strong> Chair legs, table corners, picture frames - all require precise angles</li>
                <li><strong>Video Games:</strong> Character movement, camera angles, and projectile paths use angle calculations</li>
                <li><strong>Robotics:</strong> Robot arms rotate at specific angles to pick up and place objects</li>
                <li><strong>Sports:</strong> Basketball shot arcs, soccer ball trajectories, and pool/billiards all rely on angles</li>
            </ul>
            <p><strong>Angle Review:</strong></p>
            <ol>
                <li>Acute: less than 90°</li>
                <li>Right: exactly 90°</li>
                <li>Obtuse: between 90° and 180°</li>
                <li>Reflex: between 180° and 360°</li>
                <li>Bisect: to divide an angle into two equal parts</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Roof Angles</div>
                <p>Steep roofs have angles of 45° or more for snowy climates. Flat roofs (very small angle) work better in dry, warm areas.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Sports Science</div>
                <p>The perfect free throw in basketball leaves the hand at about 45° - that's the angle that gives the best chance of scoring!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Robotics Precision</div>
                <p>Factory robots must rotate to exact angles - being off by even 1° could mean missing the target entirely!</p>
            </div>
        `,
        taskInstructions: "Apply angle knowledge to real-world scenarios and complete review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Real-World Angle Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each angle scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> A roof needs to be built with a 35° slope. What type of angle is this?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> A pool player hits the ball at a 45° angle toward the wall. If the ball bounces off at the same angle (reflection), what is the total turn?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> A robot arm needs to pick up an object. It must rotate 135° from its starting position. What type of angle is 135°?</div>
                        <div>Answer: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Construct and Bisect</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Construct a 90° angle, then bisect it. What are the two resulting angles?
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Angle Identification Gallery</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Identify each angle type from the drawings your teacher shows:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle 1: _________</div>
                        <div>Angle 2: _________</div>
                        <div>Angle 3: _________</div>
                        <div>Angle 4: _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is angle precision important in technology and construction?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of a house, a piece of furniture, or a sports scene. Label at least 5 different angles you can see in your drawing.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Technology Studies",
        topic: "Geometric Precision",
        subtopic: "Angles Review & Assessment",
        lessonContent: `
            <p>Today we'll review everything we've learned about angles and demonstrate our skills!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Identifying Angles:</strong> Acute, right, obtuse, reflex</li>
                <li><strong>Measuring Angles:</strong> Using a protractor accurately</li>
                <li><strong>Constructing Angles:</strong> Creating 60°, 90°, and 120° angles</li>
                <li><strong>Bisecting Angles:</strong> Dividing an angle into two equal parts</li>
            </ol>
            <p><strong>Key Vocabulary Review:</strong></p>
            <ul>
                <li><strong>Vertex:</strong> The point where two lines meet to form an angle</li>
                <li><strong>Baseline:</strong> The starting line (usually horizontal) from which you measure</li>
                <li><strong>Protractor:</strong> The tool used to measure and construct angles</li>
                <li><strong>Bisect:</strong> To cut or divide into two equal parts</li>
            </ul>
            <p><strong>Success Criteria Checklist:</strong></p>
            <ul>
                <li>✓ I can name all four angle types</li>
                <li>✓ I can use a protractor correctly</li>
                <li>✓ I can measure angles within 2° of accuracy</li>
                <li>✓ I can construct 60°, 90°, and 120° angles</li>
                <li>✓ I can bisect an angle</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Technology Connection</div>
                <p>Engineers, architects, carpenters, and designers all use angle measurement every day. Without accurate angles, buildings would lean and machines would break!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice-d6"></i> Angle Memory Trick</div>
                <p>Remember: "Acute" sounds like "a cute" - and cute things are small! Acute angles are small angles (less than 90°).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Precision Matters</div>
                <p>A 2° margin of error means your constructed angle can be 1° above or 1° below the target. That's about the width of your pinky finger at arm's length!</p>
            </div>
        `,
        taskInstructions: "Complete review activities, a practical angle construction assessment, and reflect on your learning.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Angle Types Review</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing information:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• An angle less than 90° is called _________</div>
                        <div>• An angle of exactly 90° is called _________</div>
                        <div>• An angle between 90° and 180° is called _________</div>
                        <div>• An angle between 180° and 360° is called _________</div>
                        <div>• To divide an angle into two equal parts is to _________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practical Assessment - Construct These Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Construct the following angles. Your teacher will check accuracy (within 2°):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 60° angle</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>• 90° angle</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>• 120° angle</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Practical Assessment - Bisect an Angle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Construct a 60° angle, then bisect it. Show both steps:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Rate your confidence with each skill (1-5, where 5 is very confident):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Identifying angle types: _____</div>
                        <div>Using a protractor: _____</div>
                        <div>Measuring angles: _____</div>
                        <div>Constructing angles: _____</div>
                        <div>Bisecting angles: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most challenging part of learning about angles this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What will you remember most about angles and how they are used in technology?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page study guide about angles including: definitions of the 4 angle types, how to use a protractor, and how to bisect an angle. Bring it to class on Monday for review.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechStudiesWeek3);
    console.log("grade4-techstudies-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechStudiesWeek3);
    console.log("grade4-techstudies-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechStudiesWeek3',
        metadata: grade4TechStudiesWeek3.metadata,
        days: grade4TechStudiesWeek3
    });
    console.log("grade4-techstudies-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechStudiesWeek3 = grade4TechStudiesWeek3;
console.log("grade4-techstudies-week3.js loaded and registered successfully");