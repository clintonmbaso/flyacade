// Grade 6 Technology Studies - Week 5 Data
const grade6TechnologyStudiesWeek5 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        week: 5,
        title: "Electrical Circuits: Switches, Design, and Safety",
        description: "Understanding switches, designing circuits, and learning electrical safety"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Understanding and Designing Switches",
        subtopic: "Types of switches and their functions",
        lessonContent: `
            <p>Welcome to our exploration of electrical control systems. Today we will learn about switches and how they allow us to control the flow of electricity in circuits.</p>
            <p><strong>Why We Need Switches:</strong> Electricity needs to be controlled for safety, convenience, and energy conservation. Switches let us turn devices on and off when we need them.</p>
            <p><strong>Everyday Examples:</strong> Light switches, toy buttons, computer power buttons, fan switches, and remote control buttons.</p>
            <p><strong>Key Concepts:</strong></p>
            <ul>
                <li><strong>SPST (Single Pole, Single Throw):</strong> A simple on/off switch with one input and one output path</li>
                <li><strong>SPDT (Single Pole, Double Throw):</strong> A switch that can select between two different paths (like a light that can be turned on from two different locations)</li>
                <li><strong>How Switches Work:</strong> Switches complete or break the electrical circuit, allowing or stopping the flow of electrons</li>
            </ul>
            <p><strong>Circuit Basics:</strong> Electricity flows in a complete loop (circuit). Switches control this flow by opening (off) or closing (on) the loop.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb" style="color: #FFD700;"></i> SPST Switch Example</div>
                <p>A basic light switch in your home is an SPST switch. It has two positions: ON (circuit closed, light on) and OFF (circuit open, light off).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> SPDT Switch Example</div>
                <p>A staircase light that can be turned on/off from both the top and bottom uses SPDT switches. This allows control from two locations.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Toy Switch Example</div>
                <p>Many toys use simple push-button switches. When you press the button, it completes the circuit and makes the toy move or make sound.</p>
            </div>
        `,
        taskInstructions: "Design and create your own simple switch using everyday materials. Then explain how it works.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Switch Types</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Explain the difference between SPST and SPDT switches:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three everyday devices that use switches and identify what type they likely are:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: DIY Switch Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design your own switch using these materials: cardboard, paperclips, brass fasteners (split pins), aluminum foil, wire.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 60px;">Draw your switch design here. Label the materials and moving parts.</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How does your switch complete (close) and break (open) a circuit?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Function Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Explain in your own words how a switch controls electricity flow:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find three different switches in your home. Draw them and write what device they control and whether they are SPST or SPDT.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Circuit Design and Logic",
        subtopic: "Drawing circuit diagrams and understanding electrical flow",
        lessonContent: `
            <p>Today we will learn to design functional circuits using standard electrical symbols and understand the logic behind electrical flow.</p>
            <p><strong>Core Components:</strong> Every basic circuit needs three essential components:</p>
            <ol>
                <li><strong>Cell/Battery:</strong> Provides the electrical energy (voltage)</li>
                <li><strong>Bulb/Lamp:</strong> Converts electrical energy to light</li>
                <li><strong>Switch:</strong> Controls the flow of electricity</li>
            </ol>
            <p><strong>Circuit Symbols:</strong> Engineers use standard symbols to represent components in diagrams:</p>
            <ul>
                <li>Cell: One long line (+) and one short line (-)</li>
                <li>Bulb: Circle with an X inside</li>
                <li>Switch: Line with a break that can be connected</li>
                <li>Wire: Straight lines connecting components</li>
            </ul>
            <p><strong>The Closed Loop Rule:</strong> Electricity only flows when there is a complete, unbroken path from the battery's positive terminal, through components, and back to the negative terminal.</p>
            <p><strong>Circuit Logic:</strong> Understanding how different arrangements affect function. For example, placing switches in different positions changes how they control the circuit.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-project-diagram" style="color: #4A90E2;"></i> Simple Circuit Example</div>
                <p>A basic circuit with one battery, one bulb, and one switch. When the switch closes, electricity flows and the bulb lights up.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sitemap"></i> Parallel Circuit Example</div>
                <p>When two bulbs are connected in parallel with one switch, both bulbs light with equal brightness, and if one bulb burns out, the other stays lit.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Series Circuit Example</div>
                <p>When two bulbs are connected in series with one switch, both bulbs light but dimmer than one bulb alone. If one bulb burns out, both go out.</p>
            </div>
        `,
        taskInstructions: "Design three different circuit diagrams using standard symbols. Ensure each has a complete path for electricity to flow.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circuit Diagrams</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a circuit with one bulb and one switch (SPST):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Use proper symbols and label all components</p>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Design a circuit where one switch controls two bulbs:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Decide if bulbs are in series or parallel and draw accordingly</p>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Create a circuit using your DIY switch design from yesterday:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Use your switch symbol and include battery and bulb</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circuit Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the "closed loop" requirement and why is it essential for electricity to flow?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> In your two-bulb circuit (question 2), what happens if one bulb burns out? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A student draws a circuit but the bulb won't light. List three possible reasons:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a symbols reference card showing the circuit symbols for: battery, bulb, SPST switch, SPDT switch, wire.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Installation and Electrical Safety",
        subtopic: "Building circuits safely and following safety rules",
        lessonContent: `
            <p>Today we transition from paper designs to physical installation. Safety is our top priority when working with electrical components.</p>
            <p><strong>From Design to Reality:</strong> A good circuit design must be built properly to work correctly and safely.</p>
            <p><strong>Proper Connections:</strong></p>
            <ul>
                <li>Wires must be stripped correctly to expose enough copper</li>
                <li>Connections must be firm and secure at terminals</li>
                <li>No bare wire should touch other bare wires except at connection points</li>
                <li>Components must be properly seated in holders</li>
            </ul>
            <p><strong>Golden Rules of Electrical Safety:</strong></p>
            <ol>
                <li><strong>Never touch bare wires</strong> when circuit is powered</li>
                <li><strong>Keep water away</strong> from all electrical components</li>
                <li><strong>Use only low-voltage batteries</strong> (1.5V-9V) for classroom experiments</li>
                <li><strong>Never use wall outlets</strong> or household electricity for these experiments</li>
                <li><strong>Check connections</strong> before turning on power</li>
                <li><strong>Turn off power</strong> when making changes to circuits</li>
                <li><strong>Report damaged equipment</strong> immediately to teacher</li>
            </ol>
            <p><strong>Why Safety Matters:</strong> Even low-voltage circuits can cause shocks, heat, or sparks if handled improperly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt" style="color: #28A745;"></i> Safe Connection Example</div>
                <p>A properly stripped wire shows just enough copper to wrap around a terminal screw tightly, with no stray strands touching other parts.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle" style="color: #DC3545;"></i> Hazard Example</div>
                <p>Using a damaged wire with exposed copper in multiple places can cause short circuits, sparks, or overheating.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Proper Installation</div>
                <p>A bulb properly installed in a holder makes contact at the base and side. A loose bulb won't light and could overheat.</p>
            </div>
        `,
        taskInstructions: "Build your designed circuits from yesterday. Follow all safety rules and ensure proper installation of components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Safety First</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the three most important safety rules when working with electrical circuits:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Why should we only use batteries (not wall outlets) for classroom experiments?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Final Installation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Build Circuit 1 (one bulb, one switch):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 40px;">Draw or describe your completed circuit. Did the bulb light?</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Build Circuit 2 (one switch controlling two bulbs):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 40px;">Draw or describe your completed circuit. Did both bulbs light?</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Build Circuit 3 (using your DIY switch):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;">
                        <p style="text-align: center; color: #666; padding-top: 50px;">Draw or describe your completed circuit. How well did your switch work?</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Troubleshooting</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> If a circuit doesn't work, what are three things you should check?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Describe one problem you encountered and how you solved it:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Write your personal electrical safety pledge:
                    <div class="answer-space" style="height: 100px; font-style: italic;"></div>
                </div>
            </div>
        `,
        homework: "Create a safety poster for the Technology Studies classroom highlighting three key electrical safety rules.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyStudiesWeek5);
    console.log("technologystudies-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyStudiesWeek5);
    console.log("technologystudies-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyStudiesWeek5',
        metadata: grade6TechnologyStudiesWeek5.metadata,
        days: grade6TechnologyStudiesWeek5
    });
    console.log("technologystudies-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyStudiesWeek5 = grade6TechnologyStudiesWeek5;
console.log("technologystudies-week5.js loaded and registered successfully");