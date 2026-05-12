// Grade 4 Mathematics - Term 2 Week 5 Data
const grade4MathWeek5 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 5,
        title: "Angles and Protractors",
        description: "Exploring straight angles, reflex angles, protractor use, angle drawing, and real-world angle measurement"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Straight and Reflex Angles",
        lessonContent: `
            <p>Welcome to our exploration of angles! Today we'll learn about straight lines and "wrap-around" reflex angles.</p>
            <p><strong>Key Question:</strong> What is the difference between a straight angle and a reflex angle?</p>
            <p><strong>Introduction:</strong> A straight angle looks like a line but is actually a half-turn of 180°. A reflex angle is the "big" outside part of a smaller angle - it's always greater than 180°!</p>
            <p><strong>Types of Angles We Know:</strong></p>
            <ol>
                <li><strong>Acute Angle:</strong> Less than 90° (small and sharp)</li>
                <li><strong>Right Angle:</strong> Exactly 90° (like a square corner)</li>
                <li><strong>Obtuse Angle:</strong> Between 90° and 180° (wide but not flat)</li>
                <li><strong>Straight Angle:</strong> Exactly 180° (forms a straight line)</li>
                <li><strong>Reflex Angle:</strong> Between 180° and 360° (the "big" angle)</li>
            </ol>
            <p><strong>Understanding Reflex Angles:</strong></p>
            <ul>
                <li>Think of a reflex angle as the "long way around"</li>
                <li>If you have a small angle (like 30°), the reflex angle is the remaining 330° around the circle</li>
                <li>Reflex Angle = 360° - (smaller angle)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Face Magic</div>
                <p>When a clock shows 6:00, the hands form a straight line - that's a 180° straight angle! When the clock shows 3:00, the inside is 90° (right angle), but the outside (the long way around) is a 270° reflex angle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snake"></i> Angle Snakes</div>
                <p>Take a pipe cleaner and bend it into a "V" shape. The small opening is an acute or obtuse angle, but the "back of the head" (the outside curve) is the reflex angle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> Door Angles</div>
                <p>When a door is open 30°, the reflex angle is the big space on the other side - 330°! That's how far the door would have to swing to go all the way around.</p>
            </div>
        `,
        taskInstructions: "Use paper clocks and pipe cleaners to identify and distinguish between straight and reflex angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Clock Face Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your paper clock, set the hands to each time below and identify the angle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 6:00 = Angle type: _________ (Measurement: 180°)</div>
                        <div>• 9:00 = Inside angle: _________ | Reflex angle: _________</div>
                        <div>• 4:00 = Inside angle: _________ | Reflex angle: _________</div>
                        <div>• 1:00 = Inside angle: _________ | Reflex angle: _________</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Angle Snakes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a pipe cleaner to create each shape below. Draw what you made:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. An acute angle and its reflex angle:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>B. An obtuse angle and its reflex angle:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflex Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the reflex angle for each smaller angle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• If small angle = 45°, reflex angle = _____°</div>
                        <div>• If small angle = 120°, reflex angle = _____°</div>
                        <div>• If small angle = 15°, reflex angle = _____°</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Find or draw something in the classroom that has a reflex angle:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 objects at home that have reflex angles (scissors, laptop, book, door). Draw each one and label the reflex angle.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Intro to the Protractor",
        lessonContent: `
            <p>Today we'll learn how to use a protractor - a special tool that measures angles, just like a ruler measures length!</p>
            <p><strong>Key Question:</strong> What are the three steps to correctly measure any angle with a protractor?</p>
            <p><strong>The Three Steps of Alignment:</strong></p>
            <ol>
                <li><strong>Vertex to Hole:</strong> Place the protractor's center hole (the small circle at the bottom) exactly on the point where the two lines meet (the vertex)</li>
                <li><strong>Baseline to Zero:</strong> Line up the bottom black line (0° line) of the protractor with one "leg" of the angle</li>
                <li><strong>Follow the Climb:</strong> Start at 0° and follow the numbers up to where the second leg points</li>
            </ol>
            <p><strong>Important Tips:</strong></p>
            <ul>
                <li>Protractors have two scales (inner and outer numbers)</li>
                <li>Choose the scale that starts at 0° on your baseline</li>
                <li>If the angle opens to the right, use the inner scale</li>
                <li>If the angle opens to the left, use the outer scale</li>
                <li>Always check: is your angle acute (<90°) or obtuse (>90°)? This helps you pick the right number!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Protractor = Ruler for Turns</div>
                <p>Just like a ruler measures how long a line is, a protractor measures how "wide" a turn is. A 30° angle is a small turn. A 120° angle is a bigger turn!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mask"></i> Floor Angles Activity</div>
                <p>Use masking tape to create large angles on the floor. Practice placing your protractor correctly - vertex on the hole, baseline on one line, then read where the second line points!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Human Protractors</div>
                <p>In pairs, have one student create an angle with their arms. The other student uses a large cardboard protractor to "measure" their friend's angle!</p>
            </div>
        `,
        taskInstructions: "Master the three steps of protractor alignment and practice measuring angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Protractor</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On the protractor diagram below, label: center hole, 0° line, inner scale, outer scale:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Protractor Diagram - label the parts]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measure These Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each angle shown, write the measurement in degrees:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Angle A: _____°  (What type? _________)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>Angle B: _____°  (What type? _________)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>Angle C: _____°  (What type? _________)</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Common Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at each example. What mistake did the person make?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Mistake 1: The hole is not on the vertex → Problem: _________</div>
                        <div>Mistake 2: Reading the wrong scale (40° instead of 140°) → Problem: _________</div>
                        <div>Mistake 3: The baseline is not lined up with 0° → Problem: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practice with a Partner</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, create 3 different angles using your arms. Measure each one with a protractor:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice measuring 5 different angles at home (book corners, picture frames, furniture). Record each measurement and angle type.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Drawing Angles & Artistic Geometry",
        lessonContent: `
            <p>Today we'll learn how to use a protractor and ruler to draw precise angles - just like architects and artists do!</p>
            <p><strong>Key Question:</strong> How can I draw an exact angle of 72°?</p>
            <p><strong>Steps to Draw Any Angle:</strong></p>
            <ol>
                <li><strong>Draw a baseline:</strong> Use a ruler to draw a straight line (at least 5cm long)</li>
                <li><strong>Mark the vertex:</strong> Put a dot at one end of the line - this is where the angle will start</li>
                <li><strong>Place the protractor:</strong> Center hole on the vertex, 0° line along your baseline</li>
                <li><strong>Mark the measurement:</strong> Find your desired degree (e.g., 72°) on the correct scale and make a small dot</li>
                <li><strong>Connect the dots:</strong> Remove the protractor and draw a line from the vertex through your dot</li>
                <li><strong>Label your angle:</strong> Write the measurement inside the angle</li>
            </ol>
            <p><strong>Creating a Geometric Star:</strong></p>
            <ul>
                <li>A full circle = 360°</li>
                <li>To make a 5-pointed star, you need 5 lines spaced exactly 72° apart (360° ÷ 5 = 72°)</li>
                <li>Start from a center point, draw lines at 0°, 72°, 144°, 216°, and 288°</li>
                <li>Connect the ends of these lines to create your star!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Architect's Tool</div>
                <p>Architects use protractors to draw buildings! The roof pitch (angle) must be exactly right so rain drains off properly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Star Power</div>
                <p>A perfect 5-pointed star uses 72° angles. The same math helps create stars on flags, holiday decorations, and even in nature like starfish!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Step-by-Step Success</div>
                <p>Always draw your baseline first, then place the protractor. Double-check that you're using the correct scale before making your dot!</p>
            </div>
        `,
        taskInstructions: "Use a protractor and ruler to construct precise angles and create a geometric star.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw These Angles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a ruler and protractor, draw each angle below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 45° angle (acute)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>• 120° angle (obtuse)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>• 180° angle (straight)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>• 270° angle (reflex)</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Geometric Star</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow the steps to create a 5-pointed star:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Mark a center point on your paper</div>
                        <div>Step 2: Draw 5 lines from the center, each exactly 72° apart (0°, 72°, 144°, 216°, 288°)</div>
                        <div>Step 3: Connect the ends of these lines to create your star</div>
                        <div>Step 4: Color each "angle zone" based on whether it's acute or obtuse</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Angle Drawing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label these additional angles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 30° (acute)   • 150° (obtuse)   • 210° (reflex)   • 90° (right)</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Create your own geometric design using at least 6 different angles. Label each angle with its measurement and type (acute, obtuse, right, straight, reflex).",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Geometry",
        subtopic: "Angle Master Quiz & Scavenger Hunt",
        lessonContent: `
            <p>Today we'll become angle detectives - finding and measuring angles in the world around us!</p>
            <p><strong>Key Question:</strong> Where can we find angles in everyday life?</p>
            <p><strong>Math Is Everywhere!</strong></p>
            <ul>
                <li>Angles are in the pitch of a roof (usually 30° to 45°)</li>
                <li>Angles are in tree branches and how they grow toward sunlight</li>
                <li>Angles are in the legs of a chair, a laptop screen, or open scissors</li>
                <li>Angles help architects, engineers, carpenters, and designers do their jobs</li>
            </ul>
            <p><strong>Angle Review:</strong></p>
            <ol>
                <li><strong>Acute:</strong> Less than 90° (sharp corner)</li>
                <li><strong>Right:</strong> Exactly 90° (perfect square corner)</li>
                <li><strong>Obtuse:</strong> Between 90° and 180° (wide corner)</li>
                <li><strong>Straight:</strong> Exactly 180° (flat line)</li>
                <li><strong>Reflex:</strong> Between 180° and 360° (wrap-around corner)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Building Angles</div>
                <p>Look at a house roof - the slope creates an angle! Most roofs have angles between 30° and 45° so rain and snow slide off easily.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Nature's Angles</div>
                <p>Tree branches grow at angles to reach sunlight. Dandelion seeds spread at precise angles to fly farthest in the wind!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-scissors"></i> Scissor Angles</div>
                <p>When scissors are partly open, they create an acute angle. Open them fully, and you get an obtuse angle! The reflex angle is the space outside the blades.</p>
            </div>
        `,
        taskInstructions: "Complete the quiz and participate in a scavenger hunt to find real-world angles.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Quiz - Name That Angle!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify each angle type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 35° = _________</div>
                        <div>• 180° = _________</div>
                        <div>• 92° = _________</div>
                        <div>• 270° = _________</div>
                        <div>• 90° = _________</div>
                        <div>• 150° = _________</div>
                        <div>• 200° = _________</div>
                        <div>• 45° = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Scavenger Hunt!</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With your team, find and record each item below. Sketch the object and measure the angle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>□</strong> An obtuse angle on playground equipment</div>
                        <div>Object: _________ | Measurement: _____° | Sketch:</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 10px;"><strong>□</strong> The angle of an open laptop screen</div>
                        <div>Object: _________ | Measurement: _____° | Sketch:</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 10px;"><strong>□</strong> A reflex angle on a pair of open scissors</div>
                        <div>Object: _________ | Measurement: _____° | Sketch:</div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 10px;"><strong>□</strong> Two straight angles in floor tiles or brickwork</div>
                        <div>Location 1: _________ | Location 2: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Measure</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw each angle listed below, then have a partner measure it to check:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 25° acute</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>• 110° obtuse</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                        <div>• 250° reflex</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px solid #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most interesting angle you found during the scavenger hunt? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How is learning about angles useful in real life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of your room or backyard. Find and label at least 8 different angles in your drawing, including at least one reflex angle.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek5);
    console.log("grade4-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek5);
    console.log("grade4-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek5',
        metadata: grade4MathWeek5.metadata,
        days: grade4MathWeek5
    });
    console.log("grade4-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek5 = grade4MathWeek5;
console.log("grade4-math-week2.js loaded and registered successfully");