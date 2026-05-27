// Grade 5 Science - Term 3 Week 7 Data
const grade5ScienceWeek7 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 3,
        week: 7,
        title: "Advanced Circuits & Electric Motors",
        description: "Constructing circuits, differentiating series vs parallel circuits, and classifying conductors and insulators"
    },
    
    monday: {
        subject: "Science",
        topic: "Electricity",
        subtopic: "Constructing a Functional Simple Circuit",
        lessonContent: `
            <p>Welcome to our electricity unit! Today we'll become electrical engineers as we construct functional circuits!</p>
            <p><strong>Key Question:</strong> How can we make a light bulb light up using batteries, wires, and a switch?</p>
            <p><strong>Introduction:</strong> Electricity flows in a closed path called a circuit. For electricity to do work (like lighting a bulb), it needs a complete, unbroken path from the power source, through the device, and back.</p>
            <p><strong>Parts of a Simple Circuit:</strong></p>
            <ol>
                <li><strong>Power Source:</strong> Battery (provides electrical energy)</li>
                <li><strong>Conducting Path:</strong> Wires (carry electricity from battery to bulb and back)</li>
                <li><strong>Load:</strong> Light bulb (converts electrical energy into light and heat)</li>
                <li><strong>Switch:</strong> Controls the flow of electricity (open = off, closed = on)</li>
            </ol>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Circuit:</strong> A complete, closed path through which electricity flows</li>
                <li><strong>Closed Circuit:</strong> A complete loop that allows electricity to flow</li>
                <li><strong>Open Circuit:</strong> A broken loop that stops electricity from flowing</li>
                <li><strong>Current:</strong> The flow of electricity through a circuit</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Think Like a Scientist</div>
                <p>Electricity always needs a complete loop - like a racetrack! If there's a break anywhere, the electricity stops and the bulb won't light.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-toggle-on"></i> Switch Science</div>
                <p>A switch works by connecting or disconnecting two pieces of metal. When the switch is ON (closed), the metals touch and electricity flows. When OFF (open), they separate and electricity stops.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-battery-full"></i> Battery Basics</div>
                <p>Batteries have a positive (+) terminal and a negative (-) terminal. Electricity flows from negative to positive inside the circuit!</p>
            </div>
        `,
        taskInstructions: "Construct a functional simple circuit using batteries, wires, and a switch to power a light bulb.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circuit Construction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using the provided materials (battery, wires, light bulb, bulb holder, switch), construct a circuit that lights the bulb:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Connect one wire from the battery's positive terminal to the switch</div>
                        <div>• Connect another wire from the switch to the light bulb holder</div>
                        <div>• Connect a wire from the light bulb holder back to the battery's negative terminal</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 50px;">[Draw your circuit diagram here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Switch Testing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Test your switch in both positions and record:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Switch position ON (closed circuit): Does the bulb light? _________</div>
                        <div>• Switch position OFF (open circuit): Does the bulb light? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why does the bulb turn off when the switch is open?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Troubleshooting</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If your bulb doesn't light, check these things. Circle what you checked:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Are all connections tight?</div>
                        <div>• Is the bulb screwed in properly?</div>
                        <div>• Is the battery fresh?</div>
                        <div>• Is the switch closed (ON)?</div>
                        <div>• Is there a complete loop?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What did you learn about how electricity flows through a circuit?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple circuit diagram at home. Label the battery, wires, switch, and light bulb. Explain what happens when you close the switch.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Electricity",
        subtopic: "Series vs. Parallel Circuits",
        lessonContent: `
            <p>Today we'll explore two different ways to connect components in a circuit: series and parallel!</p>
            <p><strong>Key Question:</strong> What's the difference between connecting light bulbs in a chain vs. connecting them side by side?</p>
            <p><strong>Series Circuits:</strong></p>
            <ul>
                <li>Components are connected end-to-end in a single path</li>
                <li>Electricity flows through ONE path only</li>
                <li>If one bulb burns out, ALL bulbs go out (the circuit is broken)</li>
                <li>Adding more bulbs makes each bulb dimmer (they share the electricity)</li>
                <li>Example: Old Christmas tree lights (when one burned out, they all went dark!)</li>
            </ul>
            <p><strong>Parallel Circuits:</strong></p>
            <ul>
                <li>Components are connected on separate branches</li>
                <li>Electricity flows through MULTIPLE paths</li>
                <li>If one bulb burns out, OTHER bulbs stay lit (other paths still work)</li>
                <li>Adding more bulbs doesn't affect brightness (each gets full electricity)</li>
                <li>Example: House wiring (you can turn off one light without affecting others)</li>
            </ul>
            <p><strong>Comparing the Two:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Series Circuit</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Parallel Circuit</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Number of paths</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">One path</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Multiple paths</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">If one bulb fails...</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">All go out</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Others stay lit</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Adding more bulbs</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Gets dimmer</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Brightness stays same</td>
                </tr>
             </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Holiday Light History</div>
                <p>Old-fashioned Christmas lights were wired in series. When one bulb burned out, the whole strand went dark! Modern lights are wired in parallel, so one broken bulb doesn't ruin the whole display.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Your Home Wiring</div>
                <p>Your house uses parallel circuits. You can turn on the kitchen light, and your bedroom light still works independently. If a bulb burns out in the kitchen, the rest of your house still has power!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-charging-station"></i> Battery Life</div>
                <p>In a series circuit with two bulbs, the battery drains faster because the bulbs share the voltage but use the same current. In parallel, the battery also drains faster but bulbs stay bright!</p>
            </div>
        `,
        taskInstructions: "Differentiate between series and parallel circuits through diagramming and practical testing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Diagramming Series and Parallel Circuits</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a SERIES circuit with a battery, switch, and TWO light bulbs:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a PARALLEL circuit with a battery, switch, and TWO light bulbs:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practical Testing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Build a SERIES circuit with two bulbs. Observe and record:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How bright are the bulbs? (Very bright / Medium / Dim) _________</div>
                        <div>• What happens when you remove one bulb? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Build a PARALLEL circuit with two bulbs. Observe and record:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How bright are the bulbs? (Very bright / Medium / Dim) _________</div>
                        <div>• What happens when you remove one bulb? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the Venn Diagram comparing series and parallel circuits:
                    <div style="display: flex; justify-content: center; margin-top: 10px;">
                        <div style="border: 2px solid #ccc; border-radius: 50%; width: 200px; height: 200px; position: relative; display: flex; align-items: center; justify-content: center;">
                            <span style="position: absolute; left: -40px;">Series</span>
                            <span style="position: absolute; right: -40px;">Parallel</span>
                            <div style="width: 80px; text-align: center;">Similarities</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Application Question</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> You are designing a flashlight. Should you use a series or parallel circuit? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three devices in your home that use parallel circuits and three that use series circuits. (Hint: Think about what happens when one part fails.)",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Electricity",
        subtopic: "Conductors and Insulators",
        lessonContent: `
            <p>Today we'll discover which materials allow electricity to flow and which ones block it!</p>
            <p><strong>Key Question:</strong> Why are some materials used to make wires while others are used to cover wires?</p>
            <p><strong>Conductors:</strong></p>
            <ul>
                <li>Materials that allow electricity to flow through them easily</li>
                <li>Have loosely held electrons that can move freely</li>
                <li>Used to make wires and electrical paths</li>
                <li><strong>Common conductors:</strong> Copper, aluminum, iron, gold, silver, steel, water (with minerals)</li>
            </ul>
            <p><strong>Insulators:</strong></p>
            <ul>
                <li>Materials that do NOT allow electricity to flow through them easily</li>
                <li>Have tightly held electrons that cannot move</li>
                <li>Used to cover wires and protect us from shocks</li>
                <li><strong>Common insulators:</strong> Rubber, plastic, wood, glass, cloth, paper, air, dry cotton</li>
            </ul>
            <p><strong>Safety First!</strong></p>
            <ul>
                <li>Insulators protect us from electric shocks</li>
                <li>Wire coatings are made of plastic or rubber (insulators)</li>
                <li>Never touch electrical wires with bare hands</li>
                <li>Water is a conductor - keep electricity away from water!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plug"></i> Why Wires Have Covers</div>
                <p>The metal inside a wire (copper) is a conductor - it carries electricity. The plastic coating outside is an insulator - it keeps the electricity inside and protects you from getting shocked!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Nature's Insulators</div>
                <p>Birds can sit on power lines because they're only touching one wire (and the air around them is an insulator). If they touched two wires at once, they'd complete a circuit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Warning</div>
                <p>Pure water is actually a poor conductor, but tap water and river water have dissolved minerals that make it a good conductor. That's why using electrical devices near water is dangerous!</p>
            </div>
        `,
        taskInstructions: "Experiment with common household items to classify them into good conductors or insulators of electricity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before testing, predict which items will conduct electricity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Paper clip (metal): Conductor / Insulator (circle one)</div>
                        <div>• Rubber band: Conductor / Insulator</div>
                        <div>• Pencil lead (graphite): Conductor / Insulator</div>
                        <div>• Plastic spoon: Conductor / Insulator</div>
                        <div>• Aluminum foil: Conductor / Insulator</div>
                        <div>• Wooden toothpick: Conductor / Insulator</div>
                        <div>• Coin: Conductor / Insulator</div>
                        <div>• Glass: Conductor / Insulator</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Testing Conductivity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using a simple circuit with a bulb, test each item by placing it between two wires. Record your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Bulb Lit? (Yes/No)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Conductor or Insulator?</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Paper clip</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Rubber band</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Pencil lead</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Plastic spoon</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Aluminum foil</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Wooden toothpick</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Coin</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Glass</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List your tested items in the correct category:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 2px solid #4CAF50; padding: 10px;">
                            <strong style="color: #4CAF50;">✓ Conductors</strong>
                            <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px solid #f44336; padding: 10px;">
                            <strong style="color: #f44336;">✗ Insulators</strong>
                            <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What pattern did you notice about which materials conducted electricity?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to have insulators covering electrical wires?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Safety Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a safety poster showing one rule about conductors and insulators:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 conductors and 5 insulators in your home. List them and explain why each material is used for that purpose.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek7);
    console.log("grade5-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek7);
    console.log("grade5-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek7',
        metadata: grade5ScienceWeek7.metadata,
        days: grade5ScienceWeek7
    });
    console.log("grade5-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek7 = grade5ScienceWeek7;
console.log("grade5-science-week7.js loaded and registered successfully");