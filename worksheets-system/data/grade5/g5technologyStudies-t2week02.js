// Grade 5 Technology Studies - Term 2 Week 2
const grade5TechWeek2 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 2,
        title: "Energy and Circuit Basics",
        description: "Introduction to electrical symbols and constructing series circuits"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Energy and Circuits",
        subtopic: "Introduction to Circuit Symbols",
        lessonContent: `
            <p>Welcome to our exploration of electrical circuits! Today we'll learn the special symbols that electricians and engineers use to draw circuits.</p>
            <p><strong>Key Question:</strong> How do we draw a circuit without drawing realistic pictures of batteries and bulbs?</p>
            <p><strong>Introduction:</strong> Imagine trying to draw a detailed picture of a battery every time you wanted to design a circuit. That would take too long! Instead, electricians use simple symbols that everyone understands. These symbols are like a special language for electricity.</p>
            <p><strong>Basic Circuit Symbols:</strong></p>
            <ol>
                <li><strong>Battery Symbol:</strong>
                    <div style="font-family: monospace; font-size: 18px; margin: 5px 0;">—∣∣—  or  —∣∣∣—</div>
                    <div>The longer line represents the positive terminal (+), and the shorter line represents the negative terminal (-).</div>
                </li>
                <li><strong>Bulb (Lamp) Symbol:</strong>
                    <div style="font-family: monospace; font-size: 18px; margin: 5px 0;">—⊙—  or  —X—</div>
                    <div>The circle with an X inside represents where light is produced when electricity flows through.</div>
                </li>
                <li><strong>Wire Symbol:</strong>
                    <div style="font-family: monospace; font-size: 18px; margin: 5px 0;">————</div>
                    <div>A simple straight line represents a wire that carries electricity from one component to another.</div>
                </li>
                <li><strong>Switch Symbol (Open/Off):</strong>
                    <div style="font-family: monospace; font-size: 18px; margin: 5px 0;">—/—  (open)</div>
                    <div>When the switch is open, the circuit is broken and electricity cannot flow.</div>
                </li>
                <li><strong>Switch Symbol (Closed/On):</strong>
                    <div style="font-family: monospace; font-size: 18px; margin: 5px 0;">——•—— (closed)</div>
                    <div>When the switch is closed, electricity can flow through the complete path.</div>
                </li>
            </ol>
            <p><strong>What Each Component Does:</strong></p>
            <ul>
                <li><strong>Battery:</strong> Provides the electrical energy (pushes electrons through the circuit)</li>
                <li><strong>Wire:</strong> Provides a path for electricity to travel</li>
                <li><strong>Bulb:</strong> Converts electrical energy into light (and heat) energy</li>
                <li><strong>Switch:</strong> Opens or closes the circuit to control whether electricity flows</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-language"></i> The Language of Circuits</div>
                <p>Circuit symbols are like emojis for electricity! Just as a smiley face means "happy" to everyone, a —∣∣— means "battery" to anyone who reads circuit diagrams.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real-World Connection</div>
                <p>When an electrician fixes the lights in your school, they look at circuit diagrams full of these symbols. Learning these symbols is the first step to becoming an electrician or engineer!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-toggle-on"></i> Switch Positions</div>
                <p>Think of a light switch in your house. Up = on (closed circuit). Down = off (open circuit). The symbol matches this idea!</p>
            </div>
        `,
        taskInstructions: "Identify, sketch, and explain basic circuit symbols in your notebook.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symbol Sketching Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In your notebook, sketch each symbol. Then draw them again here:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Battery:</strong> <span style="font-family: monospace; font-size: 18px;">—∣∣—</span></div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; margin-bottom: 15px; border: 1px dashed #ccc;"></div>
                        
                        <div><strong>Bulb (Lamp):</strong> <span style="font-family: monospace; font-size: 18px;">—⊙—</span></div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; margin-bottom: 15px; border: 1px dashed #ccc;"></div>
                        
                        <div><strong>Wire:</strong> <span style="font-family: monospace; font-size: 18px;">————</span></div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; margin-bottom: 15px; border: 1px dashed #ccc;"></div>
                        
                        <div><strong>Switch (Open/Off):</strong> <span style="font-family: monospace; font-size: 18px;">—/—</span></div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; margin-bottom: 15px; border: 1px dashed #ccc;"></div>
                        
                        <div><strong>Switch (Closed/On):</strong> <span style="font-family: monospace; font-size: 18px;">——•——</span></div>
                        <div class="drawing-area" style="height: 50px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Component Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each component to its job description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Battery → ___________</div>
                        <div>• Wire → ___________</div>
                        <div>• Bulb → ___________</div>
                        <div>• Switch → ___________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Symbol Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What component does each symbol represent?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. —∣∣— → ___________</div>
                        <div>B. —⊙— → ___________</div>
                        <div>C. —/— → ___________</div>
                        <div>D. ———— → ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think it's important for all electricians and engineers to use the same symbols?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw five circuit symbols on flashcards. On the back, write what each component does. Practice with a family member!",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Energy and Circuits",
        subtopic: "Constructing Series Circuits",
        lessonContent: `
            <p>Today we'll put our symbol knowledge to use by building real circuits!</p>
            <p><strong>Key Question:</strong> How do we connect components to make a complete circuit?</p>
            <p><strong>Introduction:</strong> A circuit is a complete path that electricity travels through. Think of it like a racetrack for electrons! If there's any break in the path, the electrons stop moving and the circuit won't work.</p>
            <p><strong>What is a Series Circuit?</strong></p>
            <ul>
                <li>A series circuit has only ONE path for electricity to flow</li>
                <li>All components are connected in a single loop, like links in a chain</li>
                <li>If one component fails or is disconnected, the ENTIRE circuit stops working</li>
                <li>Christmas tree lights are often wired in series - when one bulb burns out, they all go out!</li>
            </ul>
            <p><strong>Rules for Building a Series Circuit:</strong></p>
            <ol>
                <li>Connect the positive terminal of the battery to one end of the switch</li>
                <li>Connect the other end of the switch to the first bulb</li>
                <li>Connect the first bulb to the second bulb (if using multiple bulbs)</li>
                <li>Connect the last bulb back to the negative terminal of the battery</li>
                <li>Close the switch to complete the path and light the bulbs!</li>
            </ol>
            <p><strong>Safety First!</strong></p>
            <ul>
                <li>Always use batteries, never wall outlets for school experiments</li>
                <li>Don't let wires touch each other unless they're supposed to</li>
                <li>If a wire gets hot, disconnect the battery immediately</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Holiday Lights</div>
                <p>Traditional Christmas lights are series circuits. When one bulb burns out, the path is broken and ALL the lights go dark. That's why finding the bad bulb is like finding the broken link in a chain!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-children"></i> The Human Circuit Game</div>
                <p>Hold hands in a circle. That's a series circuit! If one person lets go (breaks the circle), the circuit is broken. Everyone holding hands = closed circuit. Someone lets go = open circuit.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> One Path Only</div>
                <p>Imagine a single-lane road with no turns. Cars (electrons) must follow the same path from start to end. That's exactly how a series circuit works!</p>
            </div>
        `,
        taskInstructions: "Draw a series circuit diagram, then build a physical series circuit using real components.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Series Circuit Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the symbols you learned on Tuesday, draw a series circuit that includes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 1 battery</div>
                        <div>• 1 switch (closed/on position)</div>
                        <div>• 2 bulbs</div>
                        <div>• Wires connecting everything</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Build a Real Circuit</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using the materials provided (wires, battery, 2 bulbs, switch), follow these steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Step 1: Connect the positive battery terminal to the switch</div>
                        <div>Step 2: Connect the switch to Bulb 1</div>
                        <div>Step 3: Connect Bulb 1 to Bulb 2</div>
                        <div>Step 4: Connect Bulb 2 back to the negative battery terminal</div>
                        <div>Step 5: Close the switch and observe!</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><strong>What happened when you closed the switch?</strong></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Investigation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions based on your circuit:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. What happened when you opened the switch? __________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div>B. What happened when you unscrewed one bulb? __________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        
                        <div>C. Did both bulbs have the same brightness? __________</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Diagram Your Real Circuit</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Now that you've built your circuit, draw the circuit diagram using symbols:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What do you think would happen if you added a third bulb to your series circuit? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is one advantage and one disadvantage of a series circuit?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find an example of a series circuit at home (flashlight, string of lights, or holiday decoration). Draw its circuit diagram using symbols and share what you learned.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechWeek2);
    console.log("grade5-tech-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechWeek2);
    console.log("grade5-tech-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechWeek2',
        metadata: grade5TechWeek2.metadata,
        days: grade5TechWeek2
    });
    console.log("grade5-tech-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechWeek2 = grade5TechWeek2;
console.log("grade5-tech-week2.js loaded and registered successfully");