// Grade 4 Technology Studies - Term 2 Week 7 (Combined into 2 Days - Summative Form)
const grade4TechnologyWeek7 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 7,
        title: "Structures and Innovations",
        description: "Classifying frame and shell structures, exploring reverse engineering, technological innovations, and applying knowledge through bridge design"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Types of Structures",
        subtopic: "Classifying Frame and Shell Structures",
        lessonContent: `
            <p>Welcome to Technology Studies! Today we'll explore different types of structures and how they are built.</p>
            <p><strong>Key Question:</strong> What happens if you take the "skin" off a bicycle versus taking the "skin" off a cup?</p>
            <p><strong>Introduction:</strong> Structures are all around us! A structure is something that is built to support a load or protect what's inside. Today we'll learn two main types: Frame Structures and Shell Structures.</p>
            <p><strong>Frame Structures:</strong></p>
            <ul>
                <li>Made of parts joined together to support a load</li>
                <li>Like a skeleton - if you remove the "skin," the frame is still there</li>
                <li><strong>Examples:</strong> Bicycle, bridge, house frame, crane, umbrella, chair</li>
            </ul>
            <p><strong>Shell Structures:</strong></p>
            <ul>
                <li>Hollow, curved, or solid outer layers that hold their shape</li>
                <li>If you remove the "skin," there's nothing left inside</li>
                <li>The outer surface protects what's inside</li>
                <li><strong>Examples:</strong> Cup, egg, turtle shell, football helmet, plastic bowl, dome</li>
            </ul>
            <p><strong>Bridge Design Principles:</strong></p>
            <ul>
                <li><strong>Beam Bridge:</strong> Simple horizontal beam supported at both ends</li>
                <li><strong>Truss Bridge:</strong> Uses triangles in a frame structure for extra strength</li>
                <li><strong>Arch Bridge:</strong> Uses curved shell design to push force outward to supports</li>
                <li><strong>Suspension Bridge:</strong> Uses cables and towers to span long distances</li>
            </ul>
            <p><strong>Why Triangles?</strong> Triangles are the strongest shape for frame structures because they don't bend or collapse easily. Engineers use triangles in bridges, roofs, and towers!</p>
            <p><strong>Why This Matters:</strong> Engineers and designers choose the right type of structure based on what the object needs to do. A bridge needs a strong frame to hold weight. An egg needs a shell to protect the growing chick inside!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Think About a Bicycle</div>
                <p>A bicycle is a frame structure. The metal tubes are joined together to create a strong skeleton. Even without the seat, tires, or handlebars, the frame still exists!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot"></i> Think About a Cup</div>
                <p>A cup is a shell structure. The curved walls hold the cup's shape. If you removed the outer layer, there would be nothing left - just empty space!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bridge"></i> The Triangle Secret</div>
                <p>A square can collapse into a diamond shape, but a triangle stays rigid. That's why bridges have so many triangular shapes in their design!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-archway"></i> Roman Arches</div>
                <p>Ancient Romans used arch (shell) structures in their bridges and aqueducts. Some are still standing after 2,000 years!</p>
            </div>
        `,
        taskInstructions: "Create a T-chart categorizing structures, complete a straw frame building challenge, design and sketch a bridge, and reflect on structural strength.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: T-Chart Categorization</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a T-chart showing Frame Structures and Shell Structures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Frame Structures</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Shell Structures</th>
                             </tr>
                             <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">
                                    <em>List frame structures here:</em>
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">
                                    <em>List shell structures here:</em>
                                </td>
                             </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Straw Frame Building Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using drinking straws and tape, build a simple frame structure (like a bridge or a tower):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 40px;">[Draw your straw frame structure here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What makes your structure strong? Which parts hold the most weight?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sketching Task</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one frame structure and one shell structure. Label each one:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Frame Structure Drawing:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Shell Structure Drawing:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Bridge Design Sketch</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Sketch your bridge design. Label the frame or shell parts you will use:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your bridge design here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which type of structure do you think is stronger? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> If you could rebuild your bridge to make it stronger, what would you change?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 frame structures and 3 shell structures in your home. List them and explain why each belongs in its category. Then sketch a bridge you've seen in real life and circle whether it uses frame structure, shell structure, or both.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Technological Innovations",
        subtopic: "Reverse Engineering, Innovation, and Final Design Project",
        lessonContent: `
            <p>Today we'll become engineers and inventors! We'll learn how things work by taking them apart, think about how to make them better, and review everything we've learned this week.</p>
            <p><strong>Key Question:</strong> What is an innovation, and how can we improve everyday objects?</p>
            <p><strong>What is Innovation?</strong></p>
            <ul>
                <li>An <strong>innovation</strong> is a new or improved way of doing something</li>
                <li>Innovations solve problems or make life easier</li>
                <li>Examples: The lightbulb improved how we see at night compared to candles; smartphones improved how we communicate compared to letters</li>
            </ul>
            <p><strong>What is Reverse Engineering?</strong></p>
            <ul>
                <li>Taking something apart to understand how it works</li>
                <li>Engineers "reverse engineer" products to learn from them and make better versions</li>
                <li>Steps: Observe → Take apart → Study the pieces → Put back together → Improve</li>
            </ul>
            <p><strong>Parts of a Simple Object (like a clicky pen):</strong></p>
            <ol>
                <li><strong>Barrel:</strong> The outer tube that holds everything together (shell structure!)</li>
                <li><strong>Spring:</strong> Provides the force for the "click"</li>
                <li><strong>Ink tube:</strong> Holds the ink and the writing tip</li>
                <li><strong>Cap/Button:</strong> What you press to make the tip come out</li>
                <li><strong>Cam/Mechanism:</strong> The part that makes the tip lock in place</li>
            </ol>

        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> From Candles to Lightbulbs</div>
                <p>Thomas Edison didn't invent the first light - he improved it! His innovation was a long-lasting electric lightbulb that changed how the world worked after dark.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> The Clicky Pen Innovation</div>
                <p>Before retractable pens, people used pens with caps that could get lost. The click mechanism was an innovation that solved the problem of lost caps!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Your Home</div>
                <p>Your house has both frame and shell structures! The wooden frame supports the walls, while the outer walls create a shell that protects you from weather.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Future Innovators</div>
                <p>Every great invention started with someone asking, "How does this work?" or "How can I make this better?" That's exactly what you've been doing this week!</p>
            </div>
        `,
        taskInstructions: "Reverse engineer a simple object, identify its parts, design an improved version, complete review activities, and create a final innovation project.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The "Take-Apart" Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before disassembling your object (pen, pencil sharpener, or flashlight), answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What object are you examining? _________</div>
                        <div>What does it do? _________</div>
                        <div>How many pieces do you think are inside? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Disassembly & Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Carefully take apart your object. Draw and label each piece:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw the pieces of your disassembled object here]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Count the total number of pieces: _________ 
                    <div style="margin-top: 10px;">Which part was the most important for making the object work?</div>
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reassembly Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Put your object back together so it works again. Describe the steps you took:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Was it easy or difficult to reassemble? What made it that way?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Structure Classification Review</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Classify each item as Frame or Shell structure:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Bicycle: _________</div>
                        <div>• Egg: _________</div>
                        <div>• Football helmet: _________</div>
                        <div>• House frame: _________</div>
                        <div>• Cup: _________</div>
                        <div>• Bridge: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Innovation Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Match the innovation to the problem it solved:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Lightbulb &nbsp;&nbsp;&nbsp; a. Getting lost without maps</div>
                        <div>___ Wheel &nbsp;&nbsp;&nbsp; b. Dark nights without light</div>
                        <div>___ GPS &nbsp;&nbsp;&nbsp; c. Traveling heavy loads</div>
                        <div>___ Retractable pen &nbsp;&nbsp;&nbsp; d. Losing pen caps</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Your Innovation!</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> If you could change one part of your disassembled object to make it even better, what would you do?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Draw your "Improved Innovation" and label the parts you would change:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your improved design here]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part G: Final Design Project & Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Design your own innovation! Choose an everyday object and redesign it to work better:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object I will improve: _________</div>
                        <div>What problem does it have? _________</div>
                        <div>My solution: _________</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw your improved design here with labels]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> Why do you think engineers "reverse engineer" things in the real world?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> What was the most interesting thing you learned about structures this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find an everyday object at home that you think could be improved. Draw the original and your improved version. Write one sentence explaining your innovation. Share your innovation with your family!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechnologyWeek7);
    console.log("grade4-technology-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechnologyWeek7);
    console.log("grade4-technology-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechnologyWeek7',
        metadata: grade4TechnologyWeek7.metadata,
        days: grade4TechnologyWeek7
    });
    console.log("grade4-technology-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechnologyWeek7 = grade4TechnologyWeek7;
console.log("grade4-technology-week7.js loaded and registered successfully");