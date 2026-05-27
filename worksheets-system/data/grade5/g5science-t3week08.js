// Grade 5 Science - Term 3 Week 8 Data
const grade5ScienceWeek8 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 3,
        week: 8,
        title: "Electrical Safety & Energy Storage",
        description: "Exploring electrical safety rules, earthing, insulation, electromagnetism, and building a simple DC motor"
    },
    
    monday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Electrical Safety First",
        lessonContent: `
            <p>Welcome! Today we'll learn how to stay safe around electricity and understand the safety features built into our electrical systems.</p>
            <p><strong>Key Question:</strong> How do safety features like insulation and earthing protect us from electric shocks?</p>
            <p><strong>Introduction:</strong> Electricity is powerful and useful, but it can be dangerous if not handled correctly. Understanding safety rules can prevent injuries and save lives.</p>
            <p><strong>Rules for Using Electrical Appliances Safely:</strong></p>
            <ol>
                <li><strong>Keep appliances away from water:</strong> Water conducts electricity and can cause shocks</li>
                <li><strong>Never pull the cord:</strong> Always pull the plug, not the wire</li>
                <li><strong>Unplug when not in use:</strong> Reduces risk of fire and saves energy</li>
                <li><strong>Don't overload sockets:</strong> One socket = one high-power appliance</li>
                <li><strong>Keep cords tidy:</strong> Don't run them under rugs or furniture</li>
                <li><strong>Adult supervision:</strong> Only adults should change bulbs or repair appliances</li>
                <li><strong>Look for damage:</strong> Never use appliances with frayed cords or broken plugs</li>
            </ol>
            <p><strong>Understanding Earthing:</strong></p>
            <ul>
                <li>Earthing provides a safe path for electricity to travel to the ground</li>
                <li>If a fault occurs, electricity flows through the earth wire instead of through your body</li>
                <li>The third prong on a plug (the round one) is the earth connection</li>
            </ul>
            <p><strong>Understanding Insulation:</strong></p>
            <ul>
                <li>Insulators are materials that do NOT conduct electricity (rubber, plastic, glass, wood)</li>
                <li>Wire coatings are made of plastic or rubber to prevent shocks</li>
                <li>Tool handles are often covered with rubber insulation</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shower"></i> Water Warning</div>
                <p>Never use a hair dryer or radio near a bathtub or sink. Water makes your skin a better conductor, so a small shock becomes dangerous!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plug"></i> Plug, Not Cord</div>
                <p>Pulling a plug by the cord damages the wires inside. Over time, this creates a fire hazard. Always grip the plug body firmly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Lightning Safety</div>
                <p>Lightning is a giant spark of electricity. During a storm, stay away from metal objects and don't use plugged-in electronics.</p>
            </div>
        `,
        taskInstructions: "Identify safety hazards, match safety terms, and create a safety poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hazard Spotting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each scenario. Is it safe or unsafe? Why?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> Maria uses her phone while it's charging in the bathroom.</div>
                        <div>Safe or Unsafe? _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Scenario 2:</strong> Jamal sees a frayed cord and tells an adult.</div>
                        <div>Safe or Unsafe? _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Scenario 3:</strong> Aisha uses a multi-plug adapter with five appliances plugged in.</div>
                        <div>Safe or Unsafe? _________ Why? _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Key Term Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each term to its correct description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Insulation ___</div>
                        <div>2. Earthing ___</div>
                        <div>3. Conductor ___</div>
                        <div>4. Insulator ___</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. Material that allows electricity to flow through it (e.g., metal)</div>
                        <div>B. Material that stops electricity from flowing (e.g., rubber)</div>
                        <div>C. A safe path for electricity to travel to the ground</div>
                        <div>D. Protective covering on wires to prevent shocks</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safety Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a poster titled "Electrical Safety Rules" showing at least 4 safety rules with simple drawings:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it dangerous to use a device with a damaged cord?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Check your home for 3 electrical safety hazards. Draw each hazard and write how to fix it safely.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Introduction to Electromagnetism",
        lessonContent: `
            <p>Today we'll discover the amazing connection between electricity and magnetism!</p>
            <p><strong>Key Question:</strong> How can electricity create magnetism, and how does this make motors spin?</p>
            <p><strong>Introduction:</strong> When electricity flows through a wire, it creates a magnetic field around the wire. This discovery changed the world - it led to electric motors, generators, and many machines we use daily.</p>
            <p><strong>What is Electromagnetism?</strong></p>
            <ul>
                <li>Electromagnetism is the relationship between electricity and magnetism</li>
                <li>Moving electricity (current) creates a magnetic field</li>
                <li>A moving magnetic field can create electricity</li>
                <li>This works both ways!</li>
            </ul>
            <p><strong>Components of a Simple DC Motor:</strong></p>
            <ol>
                <li><strong>Power Source (Cell/Battery):</strong> Provides electrical energy</li>
                <li><strong>Coil of Wire (Armature):</strong> Wrapped around the rotor; becomes an electromagnet when current flows</li>
                <li><strong>Permanent Magnets:</strong> Provide a fixed magnetic field</li>
                <li><strong>Commutator (Split Ring):</strong> Reverses current direction to keep the motor spinning</li>
                <li><strong>Brushes:</strong> Conduct electricity from the battery to the spinning commutator</li>
                <li><strong>Axle/Shaft:</strong> The spinning part that can turn wheels or fans</li>
            </ol>
            <p><strong>How a DC Motor Works (Simple Version):</strong></p>
            <ul>
                <li>Electricity from the battery flows through the coil of wire</li>
                <li>The coil becomes an electromagnet with a north and south pole</li>
                <li>The electromagnet is attracted and repelled by the permanent magnets</li>
                <li>This pushes the coil to spin</li>
                <li>The commutator swaps the current direction so the coil keeps spinning the same way</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Motors Everywhere</div>
                <p>Electric motors are inside: electric toothbrushes, fans, remote-control cars, elevators, washing machines, and even some cars!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magnet"></i> Try This at Home</div>
                <p>Wrap a wire around a nail and connect it to a battery. The nail becomes an electromagnet that can pick up paperclips!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sync-alt"></i> Why DC?</div>
                <p>DC stands for Direct Current - electricity flows in one direction (like from a battery). AC (Alternating Current) from wall sockets goes back and forth.</p>
            </div>
        `,
        taskInstructions: "Identify motor components, explain how a DC motor works, and build an electromagnet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Motor Component Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label the parts of this DC motor diagram:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[DC Motor Diagram - Label: Battery, Coil, Magnets, Commutator, Axle]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: How a DC Motor Works - Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put these steps in the correct order (1-5):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ The commutator reverses current direction</div>
                        <div>___ The coil becomes an electromagnet</div>
                        <div>___ Battery sends electricity through the coil</div>
                        <div>___ Electromagnet is attracted/repelled by permanent magnets</div>
                        <div>___ The coil spins continuously</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Electromagnet Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using a nail, insulated wire, and a battery, create an electromagnet. Draw your setup and record observations:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>How many paperclips could your electromagnet pick up? _________</div>
                    <div>What happened when you disconnected the battery? _________</div>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why does the commutator need to reverse the current direction?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name three devices in your home that use an electric motor.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a device at home with a motor (fan, hairdryer, toy car). Draw what you think the inside looks like and label the parts we learned about.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Physics",
        subtopic: "Engineering Challenge: Build a DC Motor",
        lessonContent: `
            <p>Today is engineering day! You'll work in teams to build a working DC motor using simple materials.</p>
            <p><strong>Key Question:</strong> Can you apply what you learned to construct a motor that actually spins?</p>
            <p><strong>Engineering Challenge Overview:</strong></p>
            <ul>
                <li>Your team will receive materials to build a simple DC motor</li>
                <li>You must follow the design steps carefully</li>
                <li>Test your motor and troubleshoot if it doesn't work</li>
                <li>Reflect on what you learned from the process</li>
            </ul>
            <p><strong>Materials (per team):</strong></p>
            <ul>
                <li>1 D-cell battery (1.5V)</li>
                <li>1 rubber band or tape (to hold battery)</li>
                <li>Enamel-coated copper wire (about 1 meter)</li>
                <li>2 large paperclips (to act as brushes/supports)</li>
                <li>1 small neodymium or ceramic magnet</li>
                <li>Sandpaper (to remove enamel from wire ends)</li>
                <li>Battery holder (optional) or tape</li>
            </ul>
            <p><strong>Step-by-Step Build Instructions:</strong></p>
            <ol>
                <li><strong>Make the Coil:</strong> Wrap the copper wire around a cylindrical object (like a marker) 5-10 times. Leave about 5cm of wire free at each end.</li>
                <li><strong>Prepare the Coil Ends:</strong> Use sandpaper to remove enamel insulation from the ends of the wires so they can conduct electricity.</li>
                <li><strong>Balance the Coil:</strong> Lightly sand ONLY the TOP half of each wire end if possible (creates a commutator effect).</li>
                <li><strong>Create Supports:</strong> Bend paperclips into loops that can hold the coil and connect to the battery.</li>
                <li><strong>Position the Magnet:</strong> Place the magnet directly under or next to where the coil will spin.</li>
                <li><strong>Connect Battery:</strong> Tape the battery and attach the paperclip supports to each terminal.</li>
                <li><strong>Test:</strong> Place the coil in the supports. Give it a gentle push to start spinning!</li>
            </ol>
            <p><strong>Troubleshooting Tips:</strong></p>
            <ul>
                <li>Coil not spinning? Check that enamel is completely removed from wire ends</li>
                <li>Still not working? Make sure the magnet is close to the coil</li>
                <li>Spins weakly? Add more wraps to the coil or use a stronger magnet</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real Engineers</div>
                <p>Real engineers test and improve their designs. Don't be discouraged if your motor doesn't work on the first try - that's part of learning!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wrench"></i> The Commutator Trick</div>
                <p>By sanding only half of each wire end, you create a simple commutator. This turns the electromagnet on and off at the right moments to keep spinning.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Speed Factors</div>
                <p>Your motor's speed depends on: number of wire coils (more = stronger magnet), magnet strength, and battery voltage.</p>
            </div>
        `,
        taskInstructions: "Build a working DC motor, document your process, and reflect on the engineering challenge.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your Motor</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the instructions to build your DC motor. Draw your final design:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Testing and Data</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Did your motor spin? If yes, describe how fast and for how long. If no, what do you think went wrong?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Record your troubleshooting steps (what did you try to fix problems?):
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Modification Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Try one modification to improve your motor (more coils, stronger magnet, different wire). What changed?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Engineering Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the hardest part of building your motor? What did you learn from the process?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> If you could redesign your motor with better materials, what would you use and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Teamwork Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> How did your team work together? What did each person contribute?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a paragraph explaining how you could use a DC motor in a useful invention. Draw a diagram of your invention.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek8);
    console.log("grade5-science-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek8);
    console.log("grade5-science-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek8',
        metadata: grade5ScienceWeek8.metadata,
        days: grade5ScienceWeek8
    });
    console.log("grade5-science-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek8 = grade5ScienceWeek8;
console.log("grade5-science-week8.js loaded and registered successfully");