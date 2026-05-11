// Grade 6 Technology Studies - Term 3 Week 8 Data
const grade6TechnologyWeek8 = {
    metadata: {
        grade: 6,
        subject: "Technology Studies",
        term: 3,
        week: 8,
        title: "Construction and Safety",
        description: "Learning mixing proportions, construction practice, and site safety for building projects"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Construction",
        subtopic: "Mixing Proportions",
        lessonContent: `
            <p>Welcome to our construction unit! Today we'll learn about the correct ratios of materials needed to make strong mortar and concrete.</p>
            <p><strong>Key Question:</strong> What happens if you use too much water or too little cement in a concrete mix?</p>
            <p><strong>Introduction:</strong> Mortar and concrete are essential building materials. Getting the proportions right is crucial for strength and durability. Too much of one ingredient can make the mixture weak or difficult to work with.</p>
            <p><strong>What is Mortar?</strong></p>
            <ul>
                <li>Used to bond bricks or blocks together</li>
                <li>Made from: Cement + Sand + Water</li>
                <li>Standard ratio: <strong>1 part cement : 4 parts sand</strong> (plus enough water to make a workable paste)</li>
            </ul>
            <p><strong>What is Concrete?</strong></p>
            <ul>
                <li>Used for foundations, floors, pillars, and roads</li>
                <li>Made from: Cement + Sand + Aggregate (gravel/stones) + Water</li>
                <li>Standard ratio: <strong>1 part cement : 2 parts sand : 4 parts aggregate</strong></li>
            </ul>
            <p><strong>Why Proportions Matter:</strong></p>
            <ol>
                <li><strong>Too much water:</strong> Weak mixture that cracks easily</li>
                <li><strong>Too little water:</strong> Difficult to mix and apply; doesn't bond well</li>
                <li><strong>Too much cement:</strong> Expensive and may crack as it shrinks</li>
                <li><strong>Too little cement:</strong> Weak and crumbly mixture</li>
            </ol>
            <p><strong>Key Terms:</strong></p>
            <ul>
                <li><strong>Cement:</strong> The binding powder that hardens when mixed with water</li>
                <li><strong>Aggregate:</strong> Gravel or crushed stone that gives concrete strength</li>
                <li><strong>Curing:</strong> Keeping concrete moist while it hardens to gain full strength</li>
                <li><strong>Workability:</strong> How easy the mixture is to spread and shape</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> The 1:2:4 Rule</div>
                <p>For concrete, remember "1-2-4": 1 shovel of cement, 2 shovels of sand, 4 shovels of gravel. This ratio has been used by builders for over 100 years!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> The Slump Test</div>
                <p>Builders test concrete consistency with a "slump test." They fill a cone-shaped mold with concrete, lift it, and measure how much it slumps down. Too much slump = too wet!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Real-World Connection</div>
                <p>The sidewalks you walk on, the foundation of your school, and even large dams are made from properly proportioned concrete. Getting the ratio wrong could cause dangerous failures!</p>
            </div>
        `,
        taskInstructions: "Calculate mixing proportions and complete a ratio worksheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mortar Ratio Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> If you have 2 buckets of cement, how many buckets of sand do you need for mortar?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> If you have 10 shovels of sand, how many shovels of cement do you need?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Concrete Ratio Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete this concrete mixing table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Cement (parts)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Sand (parts)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Aggregate (parts)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">1</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">12</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">20</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A builder needs to make 7 shovels of concrete. How many shovels of cement, sand, and aggregate does she need using the 1:2:4 ratio?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What could go wrong if a builder adds too much water to concrete?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixing Instructions</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write step-by-step instructions for mixing a small batch of mortar:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent or family member if they have ever mixed concrete or mortar. What ratio did they use? Write down what they share.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Construction",
        subtopic: "Construction Practice",
        lessonContent: `
            <p>Today we'll put our knowledge into practice by building a small-scale model of a wall or structure!</p>
            <p><strong>Key Question:</strong> How can we practice construction techniques safely on a small scale?</p>
            <p><strong>Introduction:</strong> Before builders construct real buildings, they often make small models or practice on sample walls. Today we'll use safe, classroom-friendly materials to practice the skills real builders use every day.</p>
            <p><strong>Construction Skills We'll Practice:</strong></p>
            <ol>
                <li><strong>Mixing:</strong> Combining materials in correct proportions</li>
                <li><strong>Applying:</strong> Spreading "mortar" evenly</li>
                <li><strong>Leveling:</strong> Making sure bricks/blocks are straight and even</li>
                <li><strong>Bonding:</strong> Staggering bricks for strength (like a brick pattern)</li>
                <li><strong>Finishing:</strong> Smoothing and cleaning excess mortar</li>
            </ol>
            <p><strong>Classroom Materials (Teacher will provide):</strong></p>
            <ul>
                <li>Small cardboard "bricks" or wooden blocks</li>
                <li>Play dough, clay, or a sand/glue mixture as "mortar"</li>
                <li>Plastic knives or popsicle sticks for spreading</li>
                <li>A small level or straight edge</li>
            </ul>
            <p><strong>The Running Bond Pattern:</strong></p>
            <p>This is the most common brick pattern. Each brick in the row above is centered over the gap between two bricks below. This makes the wall much stronger!</p>
            <p><strong>Steps to Build a Small Wall:</strong></p>
            <ul>
                <li>Step 1: Spread a layer of "mortar" on your base</li>
                <li>Step 2: Place the first row of bricks, leaving small gaps</li>
                <li>Step 3: Add mortar on top of the first row</li>
                <li>Step 4: Place the second row, staggering the bricks</li>
                <li>Step 5: Continue for 4-5 rows</li>
                <li>Step 6: Smooth the mortar joints</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> The Stagger Secret</div>
                <p>Ever wonder why brick walls have that alternating pattern? Staggering bricks (called "running bond") prevents weak vertical lines from forming. It's like how a zipper is stronger than a straight seam!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-level-alt"></i> Keeping It Level</div>
                <p>Builders use a spirit level - a tool with a bubble in liquid. When the bubble is centered between two lines, the surface is perfectly horizontal or vertical.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Scale Practice</div>
                <p>Making a small model helps you understand the real thing. If your 4-brick wall falls over, you can learn why before building a real wall!</p>
            </div>
        `,
        taskInstructions: "Build a small-scale model wall following proper construction techniques.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pre-Build Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a simple plan for your wall showing how many bricks wide and tall it will be:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List the materials you will use and their purpose:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Construction Process</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Follow the steps to build your wall. Take a photo or draw your finished wall here:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 60px;">[Draw or paste photo of your finished wall]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Construction Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of building your wall?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Did you use the "running bond" (staggered) pattern? Why is this important?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> If you built another wall, what would you do differently?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quality Check</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Rate your wall's quality (1-5) and explain your rating:
                    <div style="margin-left: 20px;">
                        <div>☐ 1 - Poor &nbsp; ☐ 2 - Fair &nbsp; ☐ 3 - Good &nbsp; ☐ 4 - Very Good &nbsp; ☐ 5 - Excellent</div>
                        <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look at a brick wall near your home or school. Draw the pattern you see. Does it use the running bond pattern? Count how many rows of bricks there are.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Technology Studies",
        topic: "Construction",
        subtopic: "Site Safety",
        lessonContent: `
            <p>Today we'll learn about the importance of protective gear and careful tool use during construction!</p>
            <p><strong>Key Question:</strong> Why do construction workers wear special clothing and equipment?</p>
            <p><strong>Introduction:</strong> Construction sites can be dangerous places. Workers use heavy tools, handle sharp objects, work at heights, and lift heavy materials. Proper safety equipment and careful habits prevent injuries and save lives.</p>
            <p><strong>Personal Protective Equipment (PPE):</strong></p>
            <ul>
                <li><strong>Hard Hat (Helmet):</strong> Protects head from falling objects and bumps</li>
                <li><strong>Safety Glasses/Goggles:</strong> Protects eyes from dust, flying debris, and chemical splashes</li>
                <li><strong>High-Visibility Vest:</strong> Makes workers easy to see, especially around vehicles</li>
                <li><strong>Steel-Toe Boots:</strong> Protects feet from falling heavy objects and punctures</li>
                <li><strong>Work Gloves:</strong> Protects hands from cuts, abrasions, and chemicals</li>
                <li><strong>Ear Protection:</strong> Reduces noise damage from loud tools (jackhammers, saws)</li>
                <li><strong>Safety Harness:</strong> Prevents falls when working at heights</li>
            </ul>
            <p><strong>Safe Tool Use:</strong></p>
            <ol>
                <li><strong>Inspect tools before use</strong> - Check for damage</li>
                <li><strong>Use the right tool for the job</strong> - Don't improvise</li>
                <li><strong>Keep tools sharp and clean</strong> - Dull tools are dangerous</li>
                <li><strong>Carry tools correctly</strong> - Sharp points facing down and away from body</li>
                <li><strong>Don't leave tools lying around</strong> - Tripping hazard and danger to others</li>
                <li><strong>Unplug power tools when not in use</strong> - Prevent accidental starting</li>
            </ol>
            <p><strong>General Construction Site Safety Rules:</strong></p>
            <ul>
                <li>Always wear your PPE</li>
                <li>Stay aware of your surroundings</li>
                <li>Communicate clearly with teammates</li>
                <li>Keep work areas clean and organized</li>
                <li>Lift heavy objects with your legs, not your back</li>
                <li>Never run or play on a construction site</li>
                <li>Report injuries or hazards immediately</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Why Hard Hats Work</div>
                <p>A hard hat has a suspension system inside that creates a gap between the shell and your head. When something hits the shell, the gap absorbs the impact before it reaches your skull!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> One Second Changes Everything</div>
                <p>It takes only one second for a tiny piece of debris to fly into an eye. Safety glasses cost less than $10, but an eye injury can cost thousands and cause permanent damage.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-first-aid"></i> The Safety Triangle</div>
                <p>Studies show that for every 600 "close calls" (almost accidents), there are 30 minor injuries, 10 serious injuries, and 1 fatality. Reporting close calls helps prevent real accidents!</p>
            </div>
        `,
        taskInstructions: "Identify safety equipment, analyze dangerous scenarios, and create a safety poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Safety Equipment Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each piece of safety gear to its purpose:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Hard Hat</div>
                                <div>• Safety Glasses</div>
                                <div>• High-Vis Vest</div>
                                <div>• Steel-Toe Boots</div>
                                <div>• Gloves</div>
                                <div>• Ear Protection</div>
                            </div>
                            <div>
                                <div>→ Be seen by drivers</div>
                                <div>→ Protect from loud noise</div>
                                <div>→ Stop falling objects from crushing feet</div>
                                <div>→ Shield eyes from flying debris</div>
                                <div>→ Prevent cuts and chemical burns</div>
                                <div>→ Protect head from impact</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Spot the Danger</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each scenario, identify what went wrong and what should have been done:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> A worker leaves a hammer on the ground near a ladder. Another worker steps on it, slips, and falls.</div>
                        <div>Problem: _________</div>
                        <div>Solution: _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> A worker carries a sharp saw pointing outward while walking through a crowded area.</div>
                        <div>Problem: _________</div>
                        <div>Solution: _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> A worker doesn't wear ear protection while using a loud concrete saw all day.</div>
                        <div>Problem: _________</div>
                        <div>Solution: _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safety Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "Construction Site Safety" poster showing 3-5 important safety rules:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a safety pledge that a construction worker might sign. Include 5 safety promises:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a cartoon showing a construction worker using proper safety gear. Add speech bubbles explaining why each piece of equipment protects them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6TechnologyWeek8);
    console.log("grade6-technology-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6TechnologyWeek8);
    console.log("grade6-technology-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6TechnologyWeek8',
        metadata: grade6TechnologyWeek8.metadata,
        days: grade6TechnologyWeek8
    });
    console.log("grade6-technology-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6TechnologyWeek8 = grade6TechnologyWeek8;
console.log("grade6-technology-week8.js loaded and registered successfully");