// Grade 5 Technology Studies - Term 2 Week 3 Data
const grade5TechStudiesWeek3 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        term: 2,
        week: 3,
        title: "Parallel Circuits and Evaluation",
        description: "Constructing parallel circuits and comparing performance with series circuits"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Electrical Circuits",
        subtopic: "Constructing Parallel Circuits",
        lessonContent: `
            <p>Welcome to our exploration of parallel circuits! Today we'll learn how electricity can flow through multiple paths.</p>
            <p><strong>Key Question:</strong> How is a parallel circuit different from a series circuit?</p>
            <p><strong>Introduction:</strong> In a series circuit, electricity flows along only one path. In a <strong>parallel circuit</strong>, electricity has multiple paths to travel through. This is why the lights in your house stay on even when one bulb burns out!</p>
            <p><strong>Key Features of Parallel Circuits:</strong></p>
            <ol>
                <li><strong>Multiple Paths:</strong> Electricity can flow through two or more different routes</li>
                <li><strong>Independent Components:</strong> Each component has its own direct connection to the power source</li>
                <li><strong>Constant Voltage:</strong> Each branch receives the full voltage from the battery</li>
                <li><strong>Current Divides:</strong> The total current splits between the different paths</li>
            </ol>
            <p><strong>Parallel Circuit Rules:</strong></p>
            <ul>
                <li>If one bulb burns out, the other bulbs stay lit (unlike series circuits!)</li>
                <li>Adding more bulbs creates more paths - they stay bright because each gets full voltage</li>
                <li>The total current increases as you add more branches</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Real-World Example</div>
                <p>Your home's electrical system is wired in parallel! When you turn off your bedroom light, the kitchen light stays on because electricity has multiple paths.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Multiple Paths</div>
                <p>Think of a parallel circuit like a river splitting into streams. Each stream carries water (electricity), and if one stream is blocked, the others keep flowing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-christmas-tree"></i> Holiday Lights</div>
                <p>Modern Christmas lights are wired in parallel. If one bulb goes out, the rest stay lit - much better than old series-wired lights where one bad bulb made the whole string go dark!</p>
            </div>
        `,
        taskInstructions: "Draw a parallel circuit diagram and then construct one using materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Parallel Circuit Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a diagram of a parallel circuit with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• One battery (power source)</div>
                        <div>• Two bulbs (loads) in parallel</div>
                        <div>• A switch controlling the whole circuit</div>
                        <div>• Connecting wires</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="circuit-symbols" style="margin-top: 10px; font-size: 12px; color: #666;">
                        <strong>Circuit Symbols to Use:</strong> 
                        ─││─ (battery/cell), 
                        ─●─ (bulb/lamp), 
                        ─/ ─ (switch), 
                        ─── (wire)
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Construction Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using your materials (battery, wires, two bulbs, bulb holders, switch), construct the parallel circuit you drew above:
                    <div class="construction-steps" style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <strong>Steps to follow:</strong>
                        <ul>
                            <li>Connect the positive terminal of the battery to the switch</li>
                            <li>From the switch, connect wires to both bulb holders (this creates the parallel branches)</li>
                            <li>Connect the other side of each bulb holder back to the negative terminal of the battery</li>
                            <li>Check all connections are tight and secure</li>
                        </ul>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Describe your construction process and any challenges you faced:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Observation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How does the brightness of the bulbs in your parallel circuit compare to bulbs in a series circuit?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens when you close the switch? What happens when you open it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How many different paths can electricity take in your circuit?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a diagram of a parallel circuit with three bulbs. Label the battery, wires, bulbs, and show the different paths electricity can take.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Electrical Circuits",
        subtopic: "Circuit Comparison and Troubleshooting",
        lessonContent: `
            <p>Today we'll evaluate how series and parallel circuits perform differently and learn how to troubleshoot problems!</p>
            <p><strong>Key Question:</strong> What happens to a series circuit vs. a parallel circuit when one bulb is removed?</p>
            <p><strong>Series Circuit Review:</strong></p>
            <ul>
                <li>Single path for electricity</li>
                <li>Current is the same everywhere</li>
                <li>Voltage is divided between components</li>
                <li>One break stops everything - "all or nothing"</li>
            </ul>
            <p><strong>Parallel Circuit Review:</strong></p>
            <ul>
                <li>Multiple paths for electricity</li>
                <li>Current divides between paths</li>
                <li>Voltage is the same across all branches</li>
                <li>One break doesn't stop other branches - "independent operation"</li>
            </ul>
            <p><strong>Comparison Table:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Series Circuit</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Parallel Circuit</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Number of paths</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">One</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Multiple</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Effect of one bulb breaking</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">All bulbs go out</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Other bulbs stay lit</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Bulb brightness (2 bulbs)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Dim (voltage shared)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Bright (full voltage each)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Adding more bulbs</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">All get dimmer</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Battery drains faster but brightness stays same</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> The Removal Test</div>
                <p>If you remove one bulb from a series circuit, ALL bulbs go out - the circuit is broken. If you remove one bulb from a parallel circuit, the other bulbs stay lit - electricity still flows through the other paths!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Troubleshooting Tips</div>
                <p>When a circuit doesn't work, check: (1) Are all connections tight? (2) Is the battery charged? (3) Are bulbs screwed in properly? (4) Is the switch closed? (5) Are there any broken wires?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Application</div>
                <p>In a series circuit, every bulb depends on the others. In a parallel circuit, each bulb works independently - just like how students can work independently on different tasks!</p>
            </div>
        `,
        taskInstructions: "Test series and parallel circuits, compare performance, troubleshoot issues, and ensure circuits meet expected standards.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comparison Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using your series circuit from last week and parallel circuit from yesterday, test and record what happens:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Test</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Series Circuit Result</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Parallel Circuit Result</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">All bulbs working</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Remove one bulb</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Bulb brightness compared to single bulb circuit</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Troubleshooting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Your parallel circuit isn't working. List 5 things you would check to find the problem:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If one bulb is dimmer than the others in a parallel circuit, what might be wrong?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Quality Check - Expected Standard</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use this checklist to verify your parallel circuit meets the Expected Standard:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><input type="checkbox"> ✓ All connections are secure and tight</div>
                        <div><input type="checkbox"> ✓ Wires are properly stripped and connected</div>
                        <div><input type="checkbox"> ✓ Bulbs are correctly seated in holders</div>
                        <div><input type="checkbox"> ✓ Battery is correctly oriented (+ to +, - to -)</div>
                        <div><input type="checkbox"> ✓ Switch opens and closes properly</div>
                        <div><input type="checkbox"> ✓ Both bulbs light when switch is closed</div>
                        <div><input type="checkbox"> ✓ Bulbs remain bright (not dim)</div>
                        <div><input type="checkbox"> ✓ Removing one bulb doesn't affect the other</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>If any boxes are unchecked, describe what you need to fix:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Evaluation and Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> For each situation, circle whether a series or parallel circuit would work better:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• String of holiday lights: Series / Parallel</div>
                        <div>• Lights in a house: Series / Parallel</div>
                        <div>• A simple flashlight: Series / Parallel</div>
                        <div>• School hallway lighting: Series / Parallel</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Explain why you chose Parallel for the school hallway lighting:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What is the most important difference between series and parallel circuits that you learned this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find an electrical device at home (lamp, flashlight, phone charger). Draw its circuit type (series or parallel) and explain why you think that type was chosen.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechStudiesWeek3);
    console.log("grade5-techstudies-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechStudiesWeek3);
    console.log("grade5-techstudies-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechStudiesWeek3',
        metadata: grade5TechStudiesWeek3.metadata,
        days: grade5TechStudiesWeek3
    });
    console.log("grade5-techstudies-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechStudiesWeek3 = grade5TechStudiesWeek3;
console.log("grade5-techstudies-week3.js loaded and registered successfully");