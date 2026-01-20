// Grade 5 Technology Studies - Week 5 Data
const grade5TechnologyStudiesWeek5 = {
    metadata: {
        grade: 5,
        subject: "Technology Studies",
        week: 5,
        title: "Electricity and Circuits",
        description: "Understanding circuit symbols and building series/parallel circuits"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "The Language of Electricity",
        subtopic: "Identifying and sketching circuit symbols and designing diagrams",
        lessonContent: `
            <p>Welcome to the world of electrical circuits! Today we will learn the "secret code" that engineers use to design electrical systems without drawing every detail.</p>
            <p><strong>Key Concept:</strong> Electrical circuits use standard symbols to represent different components. This allows people worldwide to understand and build the same circuit.</p>
            <p><strong>The Symbol Map:</strong></p>
            <ul>
                <li><strong>Battery/Cell:</strong> Two parallel lines (one long for positive, one short for negative)</li>
                <li><strong>Bulb/Lamp:</strong> A circle with an 'X' or a loop inside</li>
                <li><strong>Wire:</strong> A straight solid line connecting components</li>
                <li><strong>Switch:</strong> A line with a "gate" that can be up (open/off) or down (closed/on)</li>
            </ul>
            <p><strong>The Golden Rule of Circuits:</strong> A circuit must be a "closed loop" for electricity to flow. If there is a gap in the drawing (an open circuit), the bulb won't light up. When the switch closes the gap, electricity can flow.</p>
            <p><strong>Why Symbols Matter:</strong> Symbols save time, create universal understanding, and help engineers design complex systems clearly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt" style="color: #FFD700;"></i> Battery Symbol</div>
                <p>The battery symbol shows two parallel lines: one long (positive terminal) and one short (negative terminal). Multiple batteries together are shown with alternating long and short lines.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Bulb Symbol</div>
                <p>A circle with an 'X' inside represents a light bulb. The 'X' shows the filament inside that lights up when electricity flows through it.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-toggle-on"></i> Switch Symbol</div>
                <p>A switch symbol shows a break in the line with a "gate" that can connect or disconnect the circuit. Up position = open (off), down position = closed (on).</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to master circuit symbols and diagram design.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw the four main circuit symbols and label each one:
                <div class="drawing-area" style="height: 120px; margin-top: 10px;">
                    <p style="text-align: center; color: #666; padding-top: 50px;">Draw battery, bulb, wire, and switch symbols here</p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What is the difference between an "open" and "closed" circuit in a diagram?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> The Blueprint Challenge: Design a flashlight that uses two batteries and one bulb. Use only the scientific symbols:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Remember: Your circuit must be a complete loop with a switch!</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Label your diagram: Circle and label the positive terminal of the battery, the switch in "on" position, and the complete path electricity travels.
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find three electrical devices at home (flashlight, remote control, lamp). Sketch simple circuit diagrams showing how they might work using the symbols you learned.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Building Connections",
        subtopic: "Constructing physical series and parallel circuits",
        lessonContent: `
            <p>Today we move from diagrams to reality! We will build actual circuits and discover how electricity behaves in different configurations.</p>
            <p><strong>Key Question:</strong> "If we have two bulbs and one wire snaps, do we want both lights to go out, or just one?" This question guides our choice of circuit type.</p>
            <p><strong>Series Circuits:</strong></p>
            <ul>
                <li>All components are connected in a single loop</li>
                <li>Electricity has only ONE path to follow</li>
                <li>If one bulb is unscrewed or a wire breaks, the ENTIRE circuit stops working</li>
                <li>Adding more bulbs makes each one dimmer (electricity is shared)</li>
            </ul>
            <p><strong>Parallel Circuits:</strong></p>
            <ul>
                <li>Components are connected on different "branches"</li>
                <li>Electricity has MULTIPLE paths to follow</li>
                <li>If one bulb goes out, the others stay lit</li>
                <li>Bulbs maintain brightness regardless of how many are added (each gets full power)</li>
            </ul>
            <p><strong>Real-World Applications:</strong> Christmas lights can be wired in series (old style, all go out if one fails) or parallel (newer style, others stay lit). House wiring is parallel so appliances work independently.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road" style="color: #4A90E2;"></i> Series Circuit Example</div>
                <p>Old Christmas tree lights where all bulbs are connected in one long string. If one bulb burns out, the whole string goes dark because the path is broken.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Parallel Circuit Example</div>
                <p>The electrical outlets in your home. Each plug works independently - you can turn off a lamp without affecting the TV because they're on separate branches.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car-battery"></i> Car Lights Example</div>
                <p>Car headlights and taillights are wired in parallel. If one headlight burns out, the other still works so you can drive safely at night.</p>
            </div>
        `,
        taskInstructions: "Build and test series and parallel circuits to observe their different behaviors.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Series Circuit Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Build a series circuit with one battery and two bulbs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Draw your circuit using proper symbols:</div>
                        <div class="drawing-area" style="height: 100px; width: 80%; margin: 10px auto;"></div>
                        <div>B. Describe the brightness of each bulb compared to a circuit with just one bulb:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>C. Unscrew one bulb. What happens to the other bulb? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Parallel Circuit Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Build a parallel circuit with one battery and two bulbs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Draw your circuit using proper symbols:</div>
                        <div class="drawing-area" style="height: 100px; width: 80%; margin: 10px auto;"></div>
                        <div>B. Describe the brightness of each bulb compared to the series circuit:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>C. Unscrew one bulb. What happens to the other bulb? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Analysis and Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare series and parallel circuits using this table:
                    <div style="margin-top: 10px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="border: 1px solid #ddd; padding: 8px;">Feature</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Series Circuit</th>
                                <th style="border: 1px solid #ddd; padding: 8px;">Parallel Circuit</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">Number of paths for electricity</td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">What happens if one bulb fails?</td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ddd; padding: 8px;">Brightness with multiple bulbs</td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                                <td class="answer-space" style="height: 30px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Design Challenge: You're wiring a treehouse with three lights. Would you use series or parallel wiring? Explain your choice:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster comparing series and parallel circuits. Include diagrams, real-world examples, and advantages of each type.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5TechnologyStudiesWeek5);
    console.log("technology-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5TechnologyStudiesWeek5);
    console.log("technology-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5TechnologyStudiesWeek5',
        metadata: grade5TechnologyStudiesWeek5.metadata,
        days: grade5TechnologyStudiesWeek5
    });
    console.log("technology-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5TechnologyStudiesWeek5 = grade5TechnologyStudiesWeek5;
console.log("technology-week5.js loaded and registered successfully");