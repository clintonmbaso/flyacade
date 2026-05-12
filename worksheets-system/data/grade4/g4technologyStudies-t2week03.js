// Grade 4 Technology Studies - Term 2 Week 3 (Combined into 2 Days)
const grade4TechnologyWeek3 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 3,
        title: "Introduction to Electrical Circuits",
        description: "Identifying circuit components, sketching symbols, connecting cells in series, troubleshooting, and understanding conductors vs. insulators"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Electrical Circuits",
        subtopic: "Meeting the Circuit Components & Building Pathways",
        lessonContent: `
            <p>Welcome to our exploration of electrical circuits! Today we'll meet the special "team members" that work together to make electricity useful, and learn how to connect them properly.</p>
            <p><strong>Key Question:</strong> What is happening inside a flashlight to make the light come on?</p>
            <p><strong>Introduction:</strong> To make electricity work for us (like in a flashlight), we have to build a special path called an <strong>electrical circuit</strong>. Today, you will meet the components that work together in that circuit and learn how to build a complete path for electricity.</p>
            <p><strong>The Three Main Components:</strong></p>
            <ol>
                <li><strong>Cell (Battery):</strong> The power source or "heart" that pumps electricity. It gives the push that makes electricity flow.</li>
                <li><strong>Bulb:</strong> The "load" that does the work. It uses electricity to produce light.</li>
                <li><strong>Switch:</strong> The "gate" that controls the circuit. When closed (ON), electricity flows. When open (OFF), the path is broken.</li>
            </ol>
            <p><strong>Understanding Terminals:</strong></p>
            <ul>
                <li>Every cell has two special "doors" called <strong>terminals</strong></li>
                <li><strong>Positive (+) terminal:</strong> One end of the cell</li>
                <li><strong>Negative (-) terminal:</strong> The other end of the cell</li>
                <li>Electricity must flow from one terminal, through the components, and back to the other terminal - like a complete loop!</li>
            </ul>
            <p><strong>Connecting Cells in Series:</strong></p>
            <ul>
                <li>Sometimes one cell isn't enough power</li>
                <li>To connect cells in series: <strong>positive (+) connects to negative (-)</strong></li>
                <li>Analogy: Like a "power train" where cars hook together - positive to negative, like cars on a track!</li>
                <li>More cells in series = more "push" = brighter bulb!</li>
            </ul>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Circuit:</strong> A complete path that electricity travels through</li>
                <li><strong>Component:</strong> A single part of a circuit (like a cell, bulb, or switch)</li>
                <li><strong>Load:</strong> The part of a circuit that does work (like a bulb or motor)</li>
                <li><strong>Terminal:</strong> The connection point on a cell (positive or negative)</li>
            </ul>
            <p><strong>Safety Reminder:</strong> We never play with power outlets or big batteries. These tiny cells are safe for learning!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Flashlight Example</div>
                <p>A flashlight contains a cell (battery), a bulb, and a switch. When you flip the switch, you complete the circuit and the bulb lights up!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Finding Terminals</div>
                <p>Look closely at a AA battery. You'll see a tiny "+" symbol on one end and a "-" symbol on the other. The bumpy end is usually positive (+), and the flat end is negative (-).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> The Power Train</div>
                <p>When you connect two cells positive-to-negative, they work like a train. Each cell adds more power, just like adding more train cars adds more pulling force!</p>
            </div>
        `,
        taskInstructions: "Sort circuit components, draw and label each component, identify terminals, build circuits, and connect cells in series.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Component Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these components into the correct job category:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Components: <strong>Cell, Bulb, Switch</strong></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Provides Power</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Does Work (Load)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Controls the Path</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">&nbsp;</td>
                            </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circuit Sketchbook</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a detailed picture of each component and label it with its correct name:
                    <div style="margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <strong>Cell (Battery):</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Bulb:</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Switch:</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Terminal Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a cell (battery) and label the positive (+) and negative (-) terminals:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Complete this sentence: For a circuit to work, electricity must flow from the _____ terminal, through the components, and back to the _____ terminal.
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Build-A-Circuit Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> <strong>Challenge 1: Make it Light</strong><br>
                    Connect wires to a single cell and a bulb to make the bulb light up. Check when complete:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <input type="checkbox"> My bulb lights up!
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 1px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">Draw your working circuit here</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>Challenge 2: Control the Power</strong><br>
                    Add a switch to your circuit. Can you turn the light on and off?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <input type="checkbox"> My switch controls the bulb!
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> <strong>Challenge 3: Maximum Brightness (Advanced)</strong><br>
                    Add a second cell in series (positive to negative). Observe the bulb's brightness:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <input type="radio" name="brightness"> Bulb is dimmer than before<br>
                        <input type="radio" name="brightness"> Bulb is the same brightness<br>
                        <input type="radio" name="brightness"> Bulb is brighter than before
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Drawing Cells in Series & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Draw two cells connected correctly in series. Label the positive (+) and negative (-) terminals:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Why did the bulb get brighter when you added a second cell in series?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> What would happen if the switch was broken (stuck in the open position)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> Which component do you think is most important? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three devices at home that use cells (batteries). For each device, identify the components you would find inside (cell, bulb, switch, etc.). Draw a diagram showing how to connect two batteries in series with labels for + and - terminals.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Electrical Circuits",
        subtopic: "Circuit Troubleshooting, Conductors, Insulators & Review",
        lessonContent: `
            <p>Today we'll learn why circuits sometimes don't work, which materials allow electricity to flow, and review everything we've learned!</p>
            <p><strong>Key Question:</strong> Why doesn't my circuit work, and what materials help electricity flow?</p>
            <p><strong>Introduction:</strong> Even experienced electricians have circuits that don't work sometimes. Today you'll become a circuit detective and learn to find and fix problems!</p>
            <p><strong>Common Circuit Problems:</strong></p>
            <ol>
                <li><strong>Loose connections:</strong> Wires not touching components properly</li>
                <li><strong>Blown bulb:</strong> The filament inside the bulb is broken</li>
                <li><strong>Dead cell:</strong> The battery has no power left</li>
                <li><strong>Switch is open (OFF):</strong> The gate is blocking electricity</li>
                <li><strong>Wrong connections:</strong> Wires not connected to correct terminals</li>
            </ol>
            <p><strong>Conductors vs. Insulators:</strong></p>
            <ul>
                <li><strong>Conductors:</strong> Materials that allow electricity to flow through them (metals like copper, aluminum, iron)</li>
                <li><strong>Insulators:</strong> Materials that block electricity from flowing (plastic, rubber, wood, glass)</li>
                <li>Wire coatings are made of plastic or rubber to keep electricity safely inside!</li>
            </ul>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Components:</strong> Cell (power source), Bulb (load), Switch (control)</li>
                <li><strong>Terminals:</strong> Positive (+) and Negative (-) - electricity must flow from one to the other</li>
                <li><strong>Series Connection:</strong> Connecting cells positive-to-negative adds more power</li>
                <li><strong>Troubleshooting:</strong> Loose connections, dead cells, blown bulbs, open switches</li>
                <li><strong>Conductors vs. Insulators:</strong> Metals conduct; plastic, rubber, wood insulate</li>
            </ol>
            <p><strong>Key Takeaways:</strong></p>
            <ul>
                <li>A circuit must be COMPLETE for electricity to flow</li>
                <li>Cells in series = more power = brighter bulb</li>
                <li>Conductors allow electricity; insulators block it</li>
                <li>Always be safe around electricity!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Circuit Detective</div>
                <p>When a flashlight doesn't work, check: 1) Are the batteries fresh? 2) Are the batteries facing the right direction? 3) Is the bulb screwed in tightly? 4) Is the switch on?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Why Metal?</div>
                <p>Copper is used in most wires because it's an excellent conductor - electricity flows through it easily. That's why you see copper-colored wires inside cables!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Real-World Circuits</div>
                <p>Many holiday lights are connected in series - the electricity flows through each bulb one after another. When one bulb burns out, the path is broken and all the lights go out!</p>
            </div>
        `,
        taskInstructions: "Diagnose circuit problems, test which materials conduct electricity, and complete review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circuit Detective - Diagnose the Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each scenario and identify the problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> The bulb was working, but suddenly went out. You notice the bulb's glass is black inside.</div>
                        <div>Problem: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> Nothing happens when you flip the switch. You check and the battery is new.</div>
                        <div>Problem: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> The bulb lights, but flickers when you wiggle a wire.</div>
                        <div>Problem: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Conductors vs. Insulators</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these materials into Conductors or Insulators:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Materials: <strong>Copper, Plastic, Rubber, Iron, Wood, Aluminum, Glass, Silver</strong></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Conductors (Allow Electricity)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Insulators (Block Electricity)</th>
                             </tr>
                             <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">&nbsp;</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">&nbsp;</td>
                             </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Conductors</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the materials that would allow electricity to flow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📎 Paper clip &nbsp;&nbsp;&nbsp; ✏️ Pencil (wood) &nbsp;&nbsp;&nbsp; 🥄 Metal spoon &nbsp;&nbsp;&nbsp; 🧵 Wool sock</div>
                        <div>🔑 Key &nbsp;&nbsp;&nbsp; 🪵 Ruler (wood) &nbsp;&nbsp;&nbsp; 🥤 Plastic cup &nbsp;&nbsp;&nbsp; 🪙 Coin</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Label the Circuit Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Label the parts of this circuit (Cell, Bulb, Switch, Wires):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Circuit Diagram: Cell → Switch → Bulb → back to Cell]</p>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>Label A: _________</div>
                        <div>Label B: _________</div>
                        <div>Label C: _________</div>
                        <div>Label D: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write T (True) or F (False) for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ A circuit needs a complete path for electricity to flow</div>
                        <div>___ Rubber is a good conductor of electricity</div>
                        <div>___ Connecting cells positive-to-negative puts them in series</div>
                        <div>___ A switch controls whether a circuit is open or closed</div>
                        <div>___ The bulb is the power source in a circuit</div>
                        <div>___ Copper is a conductor because electricity flows through it easily</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Circuit Design Challenge & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a complete circuit that includes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Two cells connected in series</div>
                        <div>• One switch (in the OFF position)</div>
                        <div>• Two bulbs</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Why are electrical cords covered in plastic or rubber instead of metal?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What was the most interesting thing you learned about circuits this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Name one way you will use what you learned about circuits in your daily life.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page poster about electrical circuits. Include: a labeled diagram (cell, switch, bulb, wires), explanation of series connection (positive to negative), and three safety rules for using electricity at home.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechnologyWeek3);
    console.log("grade4-technology-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechnologyWeek3);
    console.log("grade4-technology-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechnologyWeek3',
        metadata: grade4TechnologyWeek3.metadata,
        days: grade4TechnologyWeek3
    });
    console.log("grade4-technology-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechnologyWeek3 = grade4TechnologyWeek3;
console.log("grade4-technology-week3.js loaded and registered successfully");