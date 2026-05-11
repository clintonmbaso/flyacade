// Grade 6 Science - Term 3 Week 5 Data
const grade6ScienceWeek5 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 3,
        week: 5,
        title: "Designing Robot Prototypes",
        description: "Introduction to robotics, simple circuits, designing prototypes, and building basic robots using local materials"
    },
    
    monday: {
        subject: "Science",
        topic: "Robotics & Engineering",
        subtopic: "Introduction to Robotics",
        lessonContent: `
            <p>Welcome to the exciting world of robotics! Today we'll discover what robots are and how they help humans every day.</p>
            <p><strong>Key Question:</strong> Is a washing machine a robot? Is a remote-controlled car a robot?</p>
            <p><strong>Introduction:</strong> A <strong>robot</strong> is a machine capable of carrying out a complex series of actions automatically. <strong>Robotics</strong> is the branch of technology that deals with the design, construction, operation, and application of robots.</p>
            <p><strong>What Makes Something a Robot?</strong></p>
            <ol>
                <li><strong>Sensing:</strong> Robots use sensors to detect their environment (light, sound, touch, temperature)</li>
                <li><strong>Thinking/Processing:</strong> A computer or controller processes information and makes decisions</li>
                <li><strong>Acting:</strong> Motors, arms, wheels, or other actuators perform physical actions</li>
            </ol>
            <p><strong>Types of Robots in Our World:</strong></p>
            <ul>
                <li><strong>Industrial Robots:</strong> Factory arms that assemble cars, weld, and paint</li>
                <li><strong>Medical Robots:</strong> Surgical assistants, rehabilitation devices, pharmacy dispensers</li>
                <li><strong>Exploration Robots:</strong> Mars rovers, deep-sea submersibles, volcano explorers</li>
                <li><strong>Service Robots:</strong> Vacuum cleaners (Roomba), lawn mowers, delivery drones</li>
                <li><strong>Military Robots:</strong> Bomb disposal units, surveillance drones</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microchip"></i> The Curiosity Rover</div>
                <p>NASA's Curiosity rover has been exploring Mars since 2012. It's a robot that drills rocks, takes photos, and sends data back to Earth from millions of kilometers away!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-house-damage"></i> Search and Rescue</div>
                <p>After earthquakes, snake-like robots can crawl through rubble to find survivors in places humans can't safely reach.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-procedures"></i> da Vinci Surgical Robot</div>
                <p>This medical robot helps doctors perform delicate surgeries with tiny instruments and a 3D camera, making incisions smaller and recovery faster.</p>
            </div>
        `,
        taskInstructions: "Identify types of robots and their functions through discussion and listing activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Robot Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the images of robots provided. For each one, identify:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What task does it perform?</div>
                        <div>• Where would you find it?</div>
                        <div>• Does it help humans? How?</div>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Record your observations here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Robot Brainstorm</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three tasks that robots can do better or more safely than humans:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________________________________________</div>
                        <div>2. _________________________________________</div>
                        <div>3. _________________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List three tasks that humans can do better than robots:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________________________________________</div>
                        <div>2. _________________________________________</div>
                        <div>3. _________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Would you want a robot to help with chores at home? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What job would you like a robot to do for you? Describe your ideal helper robot:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find one example of a robot in your community (or online). Draw it and write two sentences about what it does.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Robotics & Engineering",
        subtopic: "The 'Brain' and 'Nerves' (Simple Circuits)",
        lessonContent: `
            <p>Today we'll learn about the electronic "nervous system" that makes robots work - electric circuits!</p>
            <p><strong>Key Question:</strong> How do robots receive signals and move?</p>
            <p><strong>Introduction:</strong> Just as our bodies have nerves to send signals from our brain to our muscles, robots have <strong>circuits</strong> to send electrical signals from their controller to their motors and sensors.</p>
            <p><strong>The Four Essential Components of a Simple Circuit:</strong></p>
            <ol>
                <li><strong>Power Source (Battery):</strong> Provides the energy that flows through the circuit. Like a robot's "food" or "fuel."</li>
                <li><strong>Conductors (Wires):</strong> Carry the electrical energy from one part to another. Like a robot's "nerves" or "blood vessels."</li>
                <li><strong>Output (Motor, Light, or Buzzer):</strong> Does the "work" or action. Like a robot's "muscles" or "voice."</li>
                <li><strong>Control (Switch):</strong> Turns the action on and off by opening or closing the circuit. Like a robot's "brain command."</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Closed Circuit:</strong> A complete loop where electricity flows continuously (switch ON)</li>
                <li><strong>Open Circuit:</strong> A broken loop where electricity cannot flow (switch OFF)</li>
                <li><strong>Current:</strong> The flow of electricity through a circuit</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> The Light Switch</div>
                <p>When you flip a light switch ON, you're closing the circuit. Electricity flows from the power plant, through wires, to the bulb, making it glow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car-battery"></i> Robot Energy</p>
                <p>Most small robots use batteries as their power source. The battery's positive and negative terminals must be connected correctly for electricity to flow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plug"></i> Complete the Loop</div>
                <p>Electricity always needs a complete path. If a wire is disconnected or broken, the circuit becomes "open" and nothing happens - just like a robot with a disconnected "nerve"!</p>
            </div>
        `,
        taskInstructions: "Build a simple circuit and draw a labeled diagram of its components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circuit Building Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a battery, wires, a small motor (or LED/bulb), work in your group to create a complete circuit that makes the motor spin or the light glow.
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Did your circuit work? What did you observe?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circuit Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a diagram of a simple circuit and label these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Battery (Power Source)</div>
                        <div>• Wires (Conductors)</div>
                        <div>• Motor/LED (Output)</div>
                        <div>• Switch (Control)</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circuit Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What happens when you open the switch (turn it OFF)? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen if you removed one wire from your circuit?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> In a robot, what part of the circuit would be like the "brain"? What part would be like the "muscles"?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a circuit diagram showing how a flashlight works. Label the battery, wires, bulb, and switch.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Robotics & Engineering",
        subtopic: "Designing the Prototype",
        lessonContent: `
            <p>Today we become robot designers! We'll learn what a prototype is and start planning our own robot creations.</p>
            <p><strong>Key Question:</strong> How do engineers plan and design robots before building them?</p>
            <p><strong>Introduction:</strong> A <strong>prototype</strong> is an original model on which something is patterned. It's the "first draft" or test version of a robot. Engineers always prototype before building the final product!</p>
            <p><strong>The Design Process:</strong></p>
            <ol>
                <li><strong>Identify the Problem:</strong> What job does your robot need to do?</li>
                <li><strong>Brainstorm Solutions:</strong> Sketch multiple ideas for your robot</li>
                <li><strong>Select a Design:</strong> Choose the best idea</li>
                <li><strong>Plan Materials:</strong> What will you use for the body? Where will components go?</li>
                <li><strong>Create a Prototype:</strong> Build a test version</li>
                <li><strong>Test and Improve:</strong> See what works and make it better</li>
            </ol>
            <p><strong>What to Include in Your Robot Design:</strong></p>
            <ul>
                <li><strong>The "Body":</strong> Made from local/recycled materials (cardboard, plastic bottles, bottle caps, straws, rubber bands)</li>
                <li><strong>The "Nervous System":</strong> Where will the battery sit? Where will wires run?</li>
                <li><strong>The "Muscles":</strong> Where will the motor be placed? What will it move?</li>
                <li><strong>The "Brain":</strong> Where will the switch be located for easy access?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drafting-compass"></i> Real-World Prototyping</div>
                <p>James Dyson created over 5,000 prototypes of his vacuum cleaner before getting it right! Each failure taught him something new.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Local Materials</div>
                <p>You can build amazing robots from recycled items: bottle caps become wheels, straws become arms, cardboard boxes become the body!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Start Simple</div>
                <p>Your first robot doesn't need to walk on two legs or talk. A simple robot that vibrates across a table or spins in a circle is a great start!</p>
            </div>
        `,
        taskInstructions: "Sketch a robot design, identify a problem it solves, and map out electronic components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Define Your Robot's Purpose</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What problem will your robot solve? Choose one:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <label><input type="radio" name="problem"> Sweeping dust off a desk</label><br>
                        <label><input type="radio" name="problem"> Moving a small toy across the floor</label><br>
                        <label><input type="radio" name="problem"> Waving or indicating something</label><br>
                        <label><input type="radio" name="problem"> Creating vibration to move</label><br>
                        <label><input type="radio" name="problem"> Other: _________________</label>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Robot Sketch</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a detailed sketch of your robot design. Include and label:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The body shape and materials</div>
                        <div>• Battery location</div>
                        <div>• Motor location</div>
                        <div>• Switch location</div>
                        <div>• Any moving parts (wheels, arms, legs)</div>
                    </div>
                    <div class="drawing-area" style="height: 220px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Materials List</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List the materials you will need to build your robot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Body Materials (recycled items):</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div><strong>Electronic Components:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div><strong>Tools Needed:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one challenge you might face when building your robot? How will you solve it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect recycled materials (cardboard, bottle caps, plastic containers, straws) to bring for tomorrow's build session.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Robotics & Engineering",
        subtopic: "Building and Demonstrating Robot Prototypes",
        lessonContent: `
            <p>Today we turn our sketches into reality! Let's build our robot prototypes and see them come to life.</p>
            <p><strong>Key Question:</strong> How do we build a working robot prototype using local materials?</p>
            <p><strong>Building Tips:</strong></p>
            <ul>
                <li><strong>Safety First!</strong> Always be careful with wires and connections. Ask for help if needed.</li>
                <li><strong>Start with the Circuit:</strong> Get your motor spinning before attaching it to the body.</li>
                <li><strong>Test as You Go:</strong> Don't wait until the end - test each connection.</li>
                <li><strong>Use Tape and Glue:</strong> Securely attach components to the body.</li>
                <li><strong>Be Creative:</strong> Your robot doesn't need to look perfect. Function matters most!</li>
            </ul>
            <p><strong>Robot Types You Can Build Today:</strong></p>
            <ol>
                <li><strong>Bristle-bot:</strong> A simple vibrating robot made from a toothbrush head, a small motor with an offset weight, and a coin cell battery</li>
                <li><strong>Fan-bot:</strong> A robot that moves using airflow from a small fan motor</li>
                <li><strong>Art-bot:</strong> A vibrating robot with markers for legs that creates drawings as it moves</li>
                <li><strong>Simple Car-bot:</strong> A cardboard body with a motor attached directly to a wheel</li>
            </ol>
            <p><strong>What We're Learning:</strong> Even a simple robot that just vibrates or spins demonstrates the fundamental link between energy (battery), control (switch), and motion (motor).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-toothbrush"></i> Bristle-bot Success</div>
                <p>One of the simplest robots uses just a toothbrush head, a tiny pager motor, and a watch battery. When the offset weight spins, the whole toothbrush vibrates and scoots across the table!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Art-bot Creations</div>
                <p>Attach markers to your vibrating robot and place it on paper. As it vibrates and moves, it creates amazing abstract art - each robot makes unique patterns!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Engineer Mindset</div>
                <p>If your robot doesn't work on the first try, that's okay! Real engineers test and improve. Check your connections, battery, and moving parts. Then try again!</p>
            </div>
        `,
        taskInstructions: "Build a simple robot prototype using local materials and demonstrate its function to the class.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Build Your Robot Prototype</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow your design plan to build your robot. Remember these steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Test your circuit first (battery → wires → motor)</div>
                        <div>✓ Build the robot body using recycled materials</div>
                        <div>✓ Attach the motor securely to the body</div>
                        <div>✓ Mount the battery and switch</div>
                        <div>✓ Connect all wires to complete the circuit</div>
                        <div>✓ Test your robot!</div>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Describe your building process here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Demonstration & Testing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Test your robot. What happens when you close the switch (turn it ON)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Does your robot perform the task you designed it for? If not, what improvements could you make?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Peer Evaluation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Observe another group's robot. Complete this evaluation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Robot Name/Description:</strong> _________________</div>
                        <div><strong>What does it do?</strong> _________________</div>
                        <div><strong>What works well?</strong> _________________</div>
                        <div><strong>One suggestion for improvement:</strong> _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most challenging part of building your robot? How did you overcome it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What did you learn about robotics from this hands-on activity?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a short paragraph explaining how your robot works. Describe the path of electricity from the battery to the motor.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Robotics & Engineering",
        subtopic: "Robot Showcase & Future of Robotics",
        lessonContent: `
            <p>Today we celebrate our robot prototypes and look ahead to the exciting future of robotics!</p>
            <p><strong>Key Question:</strong> What have we learned about designing robots, and what comes next?</p>
            <p><strong>Week 5 Review:</strong></p>
            <ol>
                <li><strong>What is a Robot?</strong> Machines that sense, think/process, and act</li>
                <li><strong>Simple Circuits:</strong> Power source, conductors, output, and control</li>
                <li><strong>Design Process:</strong> Problem → Brainstorm → Plan → Build → Test → Improve</li>
                <li><strong>Prototyping:</strong> Building test versions using local/recycled materials</li>
            </ol>
            <p><strong>The Future of Robotics:</strong></p>
            <ul>
                <li><strong>Artificial Intelligence (AI):</strong> Robots that learn from experience</li>
                <li><strong>Soft Robotics:</strong> Robots made from flexible materials that can squeeze through tight spaces</li>
                <li><strong>Swarm Robotics:</strong> Many small robots working together like ants or bees</li>
                <li><strong>Medical Nanobots:</strong> Microscopic robots that could travel through our blood to fight disease</li>
                <li><strong>Agricultural Robots:</strong> Robots that plant, water, and harvest crops</li>
            </ul>
            <p><strong>Careers in Robotics:</strong></p>
            <ul>
                <li>Robotics Engineer</li>
                <li>Software Programmer</li>
                <li>Electrical Engineer</li>
                <li>Mechanical Designer</li>
                <li>AI Specialist</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-robot"></i> Boston Dynamics</div>
                <p>This company creates incredibly advanced robots like Spot (a dog-like robot) and Atlas (a humanoid robot that can do backflips and parkour!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microscope"></i> The Future is Small</div>
                <p>Scientists are developing nanobots so tiny that millions could fit on a pinhead. These could one day travel through our bodies to repair cells and fight cancer.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Robots Helping Humans</div>
                <p>Prosthetic robotic arms and legs are becoming more advanced, giving people who have lost limbs the ability to move and feel again.</p>
            </div>
        `,
        taskInstructions: "Present your robot prototype, reflect on the design process, and explore future robotics applications.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Robot Showcase</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Present your robot prototype to the class. Be prepared to share:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What problem does your robot solve?</div>
                        <div>• What materials did you use?</div>
                        <div>• How does the circuit work?</div>
                        <div>• What worked well and what would you improve?</div>
                    </div>
                    <div class="presentation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Notes for your presentation:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Design Process Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this reflection on your design process:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>What I planned to build:</strong> _________________</div>
                        <div><strong>What I actually built:</strong> _________________</div>
                        <div><strong>What changed during building:</strong> _________________</div>
                        <div><strong>If I built it again, I would change:</strong> _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Future Robot Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Imagine you could build any robot with no limits on materials or budget. Design your dream robot:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most interesting thing you learned about robotics this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Would you be interested in a career involving robots? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of robotics including: what makes a robot, the four parts of a simple circuit, and a labeled drawing of your robot prototype.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek5);
    console.log("grade6-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek5);
    console.log("grade6-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek5',
        metadata: grade6ScienceWeek5.metadata,
        days: grade6ScienceWeek5
    });
    console.log("grade6-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek5 = grade6ScienceWeek5;
console.log("grade6-science-week5.js loaded and registered successfully");