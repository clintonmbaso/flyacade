// Grade 3 Creative and Technology Studies - Term 3 Week 3 Data
const grade3CTSTerm3Week2 = {
    metadata: {
        grade: 3,
        subject: "Creative and Technology Studies",
        term: 3,
        week: 2,
        title: "Building Circuits and Isometric Fitness",
        description: "Designing low-voltage circuits and performing static strength-training exercises"
    },
    
    thursday: {
        subject: "Creative and Technology Studies",
        topic: "Basic Electricity",
        subtopic: "Building Simple Circuits",
        lessonContent: `
            <p>Welcome to our electricity exploration! Today we'll learn how to build a circuit that lights up a bulb.</p>
            <p><strong>Key Question:</strong> How can we make a bulb light up using a battery and wires?</p>
            <p><strong>Introduction:</strong> A circuit is a path that electricity flows through. For a bulb to light up, electricity must travel in a complete loop from the battery, through the wires and bulb, and back to the battery.</p>
            <p><strong>Parts of a Simple Circuit:</strong></p>
            <ol>
                <li><strong>Battery:</strong> Provides the energy (push) for electricity</li>
                <li><strong>Wires:</strong> Carry electricity from one part to another</li>
                <li><strong>Bulb (Lamp):</strong> Lights up when electricity passes through</li>
                <li><strong>Switch (optional):</strong> Opens or closes the circuit to turn it on/off</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Complete Circuit:</strong> A closed loop where electricity can flow</li>
                <li><strong>Break/Broken Circuit:</strong> A gap that stops electricity from flowing</li>
                <li><strong>Low-voltage:</strong> Safe, small amount of electricity (like from a 1.5V or 3V battery)</li>
            </ul>
            <p><strong>Safety First:</strong> Always use low-voltage batteries (never household electricity). Never put metal objects in electrical outlets.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Think of a Bicycle Chain</div>
                <p>A circuit is like a bicycle chain. If the chain is complete, the wheel turns. If the chain breaks, the wheel stops. Electricity needs a complete path too!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> The Race Track</div>
                <p>Electricity is like a race car. It needs a complete track to go around. If there's a gap in the track, the car stops. The battery gives the car its push!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plug"></i> Real-World Connection</div>
                <p>Flashlights use circuits. When you flip the switch, you complete the circuit and the light turns on. When you flip it off, you break the circuit.</p>
            </div>
        `,
        taskInstructions: "Build and test a complete circuit to light a bulb.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your Circuit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using these materials, build a circuit that lights the bulb:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <strong>Materials:</strong>
                        <ul style="margin-top: 5px;">
                            <li>1 low-voltage battery (1.5V or 3V)</li>
                            <li>2 insulated wires with ends stripped</li>
                            <li>1 small bulb (1.5V or 2.5V)</li>
                            <li>1 bulb holder (optional)</li>
                        </ul>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your circuit here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Testing Your Circuit</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Connect your circuit. Does the bulb light up? 
                    <div style="margin-top: 5px;">
                        <label><input type="radio" name="bulbLit"> Yes, the bulb lit up!</label><br>
                        <label><input type="radio" name="bulbLit"> No, it didn't work first time</label>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If it didn't light up, what did you try to fix it?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete or Broken?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at each picture. Is the circuit COMPLETE or BROKEN?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) Battery connected to bulb with one wire: _________</div>
                        <div>B) Battery connected to bulb with two wires: _________</div>
                        <div>C) Wire disconnected from battery: _________</div>
                        <div>D) Complete loop from battery (+) to bulb to battery (-): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw your successful circuit and label these parts:
                    <div style="margin-left: 20px;">
                        • Battery (label + and - ends)
                        • Wires (show the path)
                        • Bulb
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of a flashlight. Show where the battery, wires, switch, and bulb are. Explain how turning the switch ON completes the circuit.",
        homeworkDue: "Next Thursday"
    },
    
    friday: {
        subject: "Creative and Technology Studies",
        topic: "Physical Education",
        subtopic: "Isometric Fitness - Static Strength Training",
        lessonContent: `
            <p>Welcome to our fitness day! Today we'll learn about isometric exercises - a special way to build strength without moving your joints.</p>
            <p><strong>Key Question:</strong> How can you build muscle strength without moving?</p>
            <p><strong>Introduction:</strong> Isometric exercises are strength-training moves where you contract your muscles but don't move your joints. You hold a position still - like pushing against a wall that won't move!</p>
            <p><strong>What are Isometric Exercises?</strong></p>
            <ul>
                <li>"Iso" means same, "metric" means length - same length (muscles don't get shorter or longer)</li>
                <li>You push or pull against something that doesn't move</li>
                <li>You hold the position for a period of time (like 10-30 seconds)</li>
                <li>Builds strength, stability, and endurance</li>
            </ul>
            <p><strong>Simple Isometric Exercises for Grade 3:</strong></p>
            <ol>
                <li><strong>Wall Sit:</strong> Stand with back against wall, slide down as if sitting in a chair. Hold!</li>
                <li><strong>Plank:</strong> Lie on stomach, lift body on forearms and toes. Keep body straight like a board.</li>
                <li><strong>Push/Pull Against Partner:</strong> Push palms together with a partner - neither moves!</li>
                <li><strong>Superman Hold:</strong> Lie on stomach, lift arms and legs slightly off ground. Hold!</li>
                <li><strong>Chair Pose Hold:</strong> Stand as if sitting in an invisible chair. Hold!</li>
            </ol>
            <p><strong>Safety Tips:</strong></p>
            <ul>
                <li>Breathe normally - don't hold your breath!</li>
                <li>Stop if you feel pain (not just muscle tiredness)</li>
                <li>Start with short holds (5-10 seconds)</li>
                <li>Always warm up before starting</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Push Against a Wall</div>
                <p>Stand facing a wall. Place both hands on the wall and push as hard as you can. Your muscles are working, but your arms aren't moving - that's isometric!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-couch"></i> The Invisible Chair</div>
                <p>Imagine there's a chair behind you. Squat down like you're going to sit, but stop halfway and hold. Your leg muscles get very strong doing this!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table-tennis"></i> Sports Connection</div>
                <p>Gymnasts, climbers, and martial artists use isometric exercises. When a climber hangs onto a rock wall without moving, their muscles are working isometrically!</p>
            </div>
        `,
        taskInstructions: "Perform and track isometric exercises, focusing on proper form.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Warm-Up (5 minutes)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete these warm-up movements before starting:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <label><input type="checkbox"> Arm circles (10 forward, 10 backward)</label><br>
                        <label><input type="checkbox"> Neck rolls (5 each direction)</label><br>
                        <label><input type="checkbox"> Torso twists (10 total)</label><br>
                        <label><input type="checkbox"> Leg swings (10 each leg)</label><br>
                        <label><input type="checkbox"> Ankle rotations (5 each foot)</label>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Isometric Exercise Station</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Try each exercise. Record how many seconds you can hold:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A) Wall Sit: ________ seconds</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">B) Plank: ________ seconds</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">C) Partner Push (palms together): ________ seconds</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">D) Superman Hold: ________ seconds</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        
                        <div style="margin-top: 15px;">E) Chair Pose Hold: ________ seconds</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Form Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle YES or NO for each form tip during your plank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Body straight like a board: YES / NO</div>
                        <div>• Bottom not too high or too low: YES / NO</div>
                        <div>• Looking at the floor (not forward): YES / NO</div>
                        <div>• Breathing normally (not holding breath): YES / NO</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which exercise felt the most challenging? Why?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Cool Down & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete these cool-down stretches:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <label><input type="checkbox"> Reach arms overhead (hold 10 seconds)</label><br>
                        <label><input type="checkbox"> Touch toes (hold 10 seconds)</label><br>
                        <label><input type="checkbox"> Quad stretch (hold 10 seconds each leg)</label><br>
                        <label><input type="checkbox"> Deep breaths (5 slow breaths)</label>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is it important to breathe during isometric exercises?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Teach one isometric exercise to a family member. Practice holding a wall sit for 5 more seconds than you did in class. Write down your new record.",
        homeworkDue: "Next Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3CTSTerm3Week2);
    console.log("grade3-cts-term3-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3CTSTerm3Week2);
    console.log("grade3-cts-term3-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3CTSTerm3Week2',
        metadata: grade3CTSTerm3Week2.metadata,
        days: grade3CTSTerm3Week2
    });
    console.log("grade3-cts-term3-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3CTSTerm3Week2 = grade3CTSTerm3Week2;
console.log("grade3-cts-term3-week2.js loaded and registered successfully");