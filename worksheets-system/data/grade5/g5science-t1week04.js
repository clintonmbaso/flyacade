// Grade 5 Science - Term 1 Week 4 Data
const grade5ScienceWeek4 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 1,
        week: 4,
        title: "Skeletal Health & Model Making",
        description: "Investigating skeletal disorders, planning models, and constructing skeleton models using local materials"
    },
    
    monday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "Skeletal System Health & Disorders",
        lessonContent: `
            <p>Welcome back! Today we'll learn about common diseases and disorders that can affect our skeletal system, and how to keep our bones healthy.</p>
            <p><strong>Key Question:</strong> What can go wrong with the skeletal system, and how can we protect our bones?</p>
            <p><strong>Introduction:</strong> Our skeletal system is strong, but it can still be affected by diseases, injuries, and structural disorders. Understanding these problems helps us prevent them.</p>
            <p><strong>Common Skeletal Disorders & Diseases:</strong></p>
            <ol>
                <li><strong>Fractures:</strong> Broken bones caused by falls, accidents, or sports injuries
                    <ul>
                        <li>Types: Hairline fracture, simple fracture, compound fracture</li>
                        <li>Healing: Bones heal themselves by forming new bone tissue (takes weeks)</li>
                    </ul>
                </li>
                <li><strong>Osteoporosis:</strong> Bones become weak and brittle
                    <ul>
                        <li>Causes: Lack of calcium, vitamin D, and exercise</li>
                        <li>Prevention: Eat calcium-rich foods, get sunlight for vitamin D, exercise regularly</li>
                    </ul>
                </li>
                <li><strong>Scoliosis:</strong> Curved spine (sideways S or C shape)
                    <ul>
                        <li>Often discovered during childhood growth spurts</li>
                        <li>Treatment: Exercises, back brace, sometimes surgery</li>
                    </ul>
                </li>
                <li><strong>Arthritis:</strong> Inflammation of joints causing pain and stiffness
                    <ul>
                        <li>Common in older adults</li>
                        <li>Management: Exercise, healthy weight, medication</li>
                    </ul>
                </li>
                <li><strong>Rickets:</strong> Soft, weak bones in children
                    <ul>
                        <li>Causes: Severe lack of vitamin D or calcium</li>
                        <li>Prevention: Proper nutrition and sunlight exposure</li>
                    </ul>
                </li>
            </ol>
            <p><strong>How to Keep Your Skeleton Healthy:</strong></p>
            <ul>
                <li>Eat calcium-rich foods (milk, yogurt, cheese, leafy greens)</li>
                <li>Get enough vitamin D (sunlight, eggs, fish)</li>
                <li>Do weight-bearing exercises (running, jumping, dancing)</li>
                <li>Practice good posture</li>
                <li>Wear protective gear during sports (helmets, pads)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bone"></i> Bone Healing Superpower</div>
                <p>Did you know your bones are constantly remodeling? Every 10 years, you get a completely new skeleton! Broken bones can heal in about 6-8 weeks for children.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-milk"></i> Calcium Connection</div>
                <p>Your body stores 99% of its calcium in your bones! If you don't eat enough calcium, your body takes it from your bones, making them weaker.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Scoliosis Screening</div>
                <p>Many schools check for scoliosis because catching it early makes treatment easier. The "forward bend test" helps doctors see if the spine curves.</p>
            </div>
        `,
        taskInstructions: "Research skeletal disorders and complete the case study analysis.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Disorder Research Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the chart below for each skeletal disorder:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Disorder</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What Happens</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Prevention/Treatment</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Osteoporosis</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Scoliosis</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rickets</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Arthritis</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 50px;"></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Case Study - "Doctor for a Day"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each patient case and provide your diagnosis and advice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Patient 1:</strong> "I'm 72 years old and I broke my hip just by tripping on a rug. My doctor says my bones are thin."</div>
                        <div>Diagnosis: _________</div>
                        <div>Advice: _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Patient 2:</strong> "My teacher noticed one shoulder is higher than the other during the school screening."</div>
                        <div>Diagnosis: _________</div>
                        <div>Advice: _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Patient 3:</strong> "My 5-year-old son has bowed legs and complains of bone pain. We live in a house with little sunlight."</div>
                        <div>Diagnosis: _________</div>
                        <div>Advice: _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Bone Health Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List 5 things you will do this week to keep your skeleton healthy:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is childhood an important time for bone health?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member about bone health. Do they have any joint pain or bone concerns? Write down their experience and one tip they shared.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "Skeleton Model Planning & Material Selection",
        lessonContent: `
            <p>Today we'll become engineers and designers! We'll plan our skeleton models and explore locally available materials we can use.</p>
            <p><strong>Key Question:</strong> How can we build a model skeleton using materials found around us?</p>
            <p><strong>Introduction:</strong> Building a model helps us understand how bones connect and work together. Using local materials makes our project creative, affordable, and environmentally friendly!</p>
            <p><strong>Locally Available Materials Ideas:</strong></p>
            <ul>
                <li><strong>For Bones:</strong>
                    <ul>
                        <li>Cardboard tubes (paper towel rolls, toilet paper rolls)</li>
                        <li>Thick paper or cardstock rolled into tubes</li>
                        <li>Sticks or twigs from outside</li>
                        <li>Plastic bottles cut and shaped</li>
                        <li>Old newspaper rolled tightly</li>
                    </ul>
                </li>
                <li><strong>For Joints (Connections):</strong>
                    <ul>
                        <li>String or twine</li>
                        <li>Paper fasteners (brads)</li>
                        <li>Rubber bands</li>
                        <li>Wire from old hangers</li>
                        <li>Straws and pipe cleaners</li>
                    </ul>
                </li>
                <li><strong>For Assembly:</strong>
                    <ul>
                        <li>Glue (homemade flour paste or school glue)</li>
                        <li>Tape (masking tape, clear tape)</li>
                        <li>Scissors</li>
                        <li>Cardboard base for mounting</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Parts of the Skeleton to Include:</strong></p>
            <ol>
                <li>Skull (cranium)</li>
                <li>Spine (vertebral column)</li>
                <li>Rib cage (ribs and sternum)</li>
                <li>Shoulder blades (scapulae)</li>
                <li>Arm bones (humerus, radius, ulna)</li>
                <li>Hand bones (optional - can simplify)</li>
                <li>Pelvis (hip bones)</li>
                <li>Leg bones (femur, tibia, fibula)</li>
                <li>Foot bones (optional - can simplify)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Creative Upcycling</div>
                <p>Used egg cartons can make great rib bones! Cut apart the cups to create curved bone shapes. Plastic bottle caps can become joints like knees and elbows.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Scale Planning</div>
                <p>Your model doesn't need to be life-size! Plan a scale that works for your materials. A 50cm tall skeleton is easier to make than a full-size one.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Simplifying Hands & Feet</div>
                <p>Instead of making 27 tiny hand bones, you can draw the hand shape on cardboard or use a cut-out glove shape to represent the hand skeleton.</p>
            </div>
        `,
        taskInstructions: "Complete the design plan, material list, and labeled sketch for your skeleton model.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Material Selection & Sourcing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the local materials you will use for each skeleton part:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Skeleton Part</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Material(s) to Use</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Skull</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Spine</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Rib Cage</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Arms</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Legs</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Joints (connections)</td><td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 30px;"></div></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Skeleton Design Sketch</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a labeled sketch of your planned skeleton model. Label at least 8 bones:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Construction Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the steps you will follow to build your model (step-by-step):
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Team Role Assignment (if group work)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Who will do each task?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge & Solution</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What challenge might you face during construction? How will you solve it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect all your chosen materials and bring them to class on Friday. Test your materials to see if they work as planned.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Human Biology",
        subtopic: "Skeleton Model Construction & Presentation",
        lessonContent: `
            <p>Today is hands-on day! We'll build our skeleton models using the materials we collected, then present our creations to the class.</p>
            <p><strong>Key Question:</strong> Can we successfully build a model skeleton that shows the main bones and how they connect?</p>
            <p><strong>Construction Tips:</strong></p>
            <ul>
                <li><strong>Start with the spine:</strong> It's the central support for your whole skeleton</li>
                <li><strong>Attach the skull:</strong> Connect it to the top of the spine</li>
                <li><strong>Add the rib cage:</strong> Attach to the upper spine</li>
                <li><strong>Add shoulders and arms:</strong> Connect shoulders to upper spine and arms to shoulders</li>
                <li><strong>Add pelvis:</strong> Attach to lower spine</li>
                <li><strong>Add legs:</strong> Connect legs to the pelvis</li>
                <li><strong>Check proportions:</strong> Legs should be about half your skeleton's height</li>
            </ul>
            <p><strong>Presentation Requirements:</strong></p>
            <ul>
                <li>Show your completed model to the class</li>
                <li>Point to and name at least 6 different bones</li>
                <li>Explain what materials you used and why</li>
                <li>Share one interesting fact you learned about the skeletal system</li>
                <li>Describe one challenge you overcame while building</li>
            </ul>
            <p><strong>Safety Reminders:</strong></p>
            <ul>
                <li>Use scissors carefully - cut away from your body</li>
                <li>Work in a clear, organized space</li>
                <li>Ask for help if something is difficult</li>
                <li>Clean up materials when finished</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Fixes</div>
                <p>If a bone keeps falling off, try using thicker wire or adding a paper clip hook. If joints are too loose, wrap rubber bands around the connection point.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Proportion Guide</div>
                <p>Your femur (thigh bone) is about 1/4 of your height. In a 50cm model, the leg bones should be about 25cm total - half the model's height!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Presentation Prep</div>
                <p>Practice saying: "This is the humerus, the upper arm bone. It connects the shoulder to the elbow. I made it from a rolled newspaper tube."</p>
            </div>
        `,
        taskInstructions: "Build your skeleton model, then present it to the class with labeled parts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Model Construction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Build your skeleton model using your planned materials:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2; background-color: #f8f9fa;">
                        <p style="text-align: center; color: #666; padding-top: 85px;">[Place your completed skeleton model here for display]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Bone Labeling</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create labels (small paper tags) for at least 6 bones on your model:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>List the bones you labeled:</div>
                        <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Presentation Preparation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write what you will say during your presentation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• The materials I used: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• One interesting fact about the skeleton: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>• A challenge I overcame: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Peer Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Watch two classmates' presentations. Write one thing you liked about each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Classmate 1: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Classmate 2: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Self-Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Answer the following questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What part of your model are you most proud of? Why?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>If you built another skeleton model, what would you do differently?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div>What did building this model teach you about the human skeleton?</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a one-paragraph reflection about the skeleton model building process. Describe what worked well, what was difficult, and what you learned about bones.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek4);
    console.log("grade5-science-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek4);
    console.log("grade5-science-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek4',
        metadata: grade5ScienceWeek4.metadata,
        days: grade5ScienceWeek4
    });
    console.log("grade5-science-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek4 = grade5ScienceWeek4;
console.log("grade5-science-week4.js loaded and registered successfully");