// Grade 3 Mathematics & Science - Term 1 Week 9 Data
const grade3MathScienceWeek9 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 9,
        title: "Soil Components",
        description: "Investigating soil formation, layers, types, uses, and conducting a soil texture test"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Earth Science",
        subtopic: "Soil Formation (Agents: Wind, Trees, Water)",
        lessonContent: `
            <p>Welcome to our exploration of soil! Today we'll learn how soil is formed and what agents help create it.</p>
            <p><strong>Key Question:</strong> Where does soil come from?</p>
            <p><strong>Introduction:</strong> Soil is the thin layer of material covering the Earth's surface. It takes thousands of years to form! Soil is made from tiny pieces of rock mixed with dead plants and animals.</p>
            <p><strong>Agents of Soil Formation:</strong></p>
            <ol>
                <li><strong>Wind:</strong> Strong winds blow against rocks, wearing them down into tiny pieces over time.</li>
                <li><strong>Water:</strong> Rain and flowing rivers crash against rocks, breaking them into smaller particles.</li>
                <li><strong>Trees and Plants:</strong> Plant roots grow into cracks in rocks. As roots get bigger, they split rocks apart.</li>
                <li><strong>Temperature Changes:</strong> When water freezes in rock cracks, it expands and breaks the rock.</li>
            </ol>
            <p><strong>Fun Fact:</strong> It can take 500 years to form just 2 centimeters of topsoil!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> Wind Power</div>
                <p>Have you ever seen a smooth, round rock in a desert? Wind-blown sand acts like sandpaper, smoothing and wearing down rocks over many years.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Tree Power</div>
                <p>Have you seen a sidewalk cracked by a tree root? The same thing happens to rocks! Roots push and crack rocks apart.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Power</div>
                <p>Waterfalls crash against rocks below, breaking them into smaller pieces. Rivers carry these pieces downstream, making them smaller and smoother.</p>
            </div>
        `,
        taskInstructions: "Draw and explain how soil is formed by different agents.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weathering Agents Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture showing how WIND creates soil:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture showing how WATER creates soil:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing how TREES create soil:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Wind helps form soil by _________ against rocks.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>b. Tree roots _________ rocks apart.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>c. Water _________ rocks into smaller pieces.</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think it takes a long time for soil to form?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look for cracks in sidewalks or rocks near your home. Draw what you see and write what might have caused the crack.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Earth Science",
        subtopic: "Soil Layers (Top Soil, Sub Soil, Bedrock)",
        lessonContent: `
            <p>Today we'll dig deep into the Earth to discover the different layers of soil!</p>
            <p><strong>Key Question:</strong> What's underneath your feet when you stand on the ground?</p>
            <p><strong>Introduction:</strong> Soil is not the same all the way down. It is made of layers, like a sandwich! Each layer has different properties.</p>
            <p><strong>The 3 Main Soil Layers (from top to bottom):</strong></p>
            <ol>
                <li><strong>Topsoil (A-Horizon):</strong>
                    <ul>
                        <li>The dark, crumbly top layer (about 5-30 cm deep)</li>
                        <li>Contains humus (dead plants and animals)</li>
                        <li>Best for growing plants</li>
                        <li>Home to worms and insects</li>
                    </ul>
                </li>
                <li><strong>Subsoil (B-Horizon):</strong>
                    <ul>
                        <li>The middle layer (about 30-60 cm deep)</li>
                        <li>Lighter in color than topsoil</li>
                        <li>Contains less humus and more minerals</li>
                        <li>Tree roots often reach this layer</li>
                    </ul>
                </li>
                <li><strong>Bedrock (C-Horizon / R-Horizon):</strong>
                    <ul>
                        <li>The solid rock layer at the bottom</li>
                        <li>Very hard and impossible to dig through with a shovel</li>
                        <li>Takes thousands of years to break down into soil</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Soil Sandwich</div>
                <p>Think of soil like a sandwich: topsoil is the tasty top bread, subsoil is the filling, and bedrock is the bottom bread!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm"></i> Topsoil Life</div>
                <p>Earthworms love topsoil! They eat dead leaves and make tunnels that help air and water reach plant roots.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> Bedrock Buildings</div>
                <p>Skyscrapers are built on bedrock because it's so strong and solid. Engineers drill down until they reach bedrock before building big buildings.</p>
            </div>
        `,
        taskInstructions: "Draw and label the three soil layers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Layer Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the three soil layers (Topsoil, Subsoil, Bedrock):
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Layer Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each layer to its description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>Topsoil</div>
                                <div>Subsoil</div>
                                <div>Bedrock</div>
                            </div>
                            <div>
                                <div>→ Solid rock, deepest layer</div>
                                <div>→ Dark, crumbly, best for plants</div>
                                <div>→ Middle layer, lighter in color</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which soil layer do plants grow in? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which layer is the hardest? Why can't we easily dig through it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Dig a small hole in your garden (with permission) and observe the different colors of soil you see. Draw what you find.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Earth Science",
        subtopic: "Classify Types of Soil (Clay, Sand, Loam)",
        lessonContent: `
            <p>Today we'll learn about three main types of soil and how they are different!</p>
            <p><strong>Key Question:</strong> Why do some soils feel sticky while others feel gritty?</p>
            <p><strong>Introduction:</strong> Not all soil is the same. Soil type depends on the size of the particles (tiny pieces) it contains.</p>
            <p><strong>The 3 Main Soil Types:</strong></p>
            <ol>
                <li><strong>Sand:</strong>
                    <ul>
                        <li>Largest particles (you can see them!)</li>
                        <li>Feels gritty between your fingers</li>
                        <li>Water drains through it quickly</li>
                        <li>Does not hold nutrients well</li>
                        <li>Color: Light brown or tan</li>
                    </ul>
                </li>
                <li><strong>Clay:</strong>
                    <ul>
                        <li>Smallest particles (very tiny!)</li>
                        <li>Feels smooth and sticky when wet</li>
                        <li>Holds water for a long time</li>
                        <li>Hard when dry, can be molded when wet</li>
                        <li>Color: Red, brown, or gray</li>
                    </ul>
                </li>
                <li><strong>Loam:</strong>
                    <ul>
                        <li>A perfect mixture of sand, silt, and clay</li>
                        <li>Feels crumbly and soft</li>
                        <li>Best soil for growing plants</li>
                        <li>Holds water but also drains well</li>
                        <li>Color: Dark brown or black</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Feel the Difference</div>
                <p>Rub sand between your fingers - it feels scratchy! Rub clay between your fingers - it feels smooth like flour!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Test</div>
                <p>Pour water on sand - it disappears quickly! Pour water on clay - it sits on top like a puddle!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Garden Favorite</div>
                <p>Loam is every gardener's dream soil! It has the perfect balance - enough sand for drainage and enough clay to hold water and nutrients.</p>
            </div>
        `,
        taskInstructions: "Classify and compare different soil types using observation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Feel Test</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> If you have soil samples, feel each one. Write your observations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sand feels: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Clay feels: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>Loam feels: _________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Soil Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this chart about soil types:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Soil Type</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Particle Size</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Feels Like</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Good for Plants?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sand</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Clay</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Loam</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which soil type is best for farming? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens to clay when it dries?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Collect a small sample of soil from your yard. Describe its color, feel, and what you think it is (sand, clay, or loam).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Earth Science",
        subtopic: "Uses of Soil (Farming, Building, Molding)",
        lessonContent: `
            <p>Today we'll explore all the amazing ways people use soil in their daily lives!</p>
            <p><strong>Key Question:</strong> How do people use soil besides growing plants?</p>
            <p><strong>Introduction:</strong> Soil is one of our most important natural resources. We use it in many ways every day!</p>
            <p><strong>Main Uses of Soil:</strong></p>
            <ol>
                <li><strong>Farming and Gardening:</strong>
                    <ul>
                        <li>Growing fruits, vegetables, and grains</li>
                        <li>Growing grass for animals to eat</li>
                        <li>Growing flowers and trees</li>
                    </ul>
                </li>
                <li><strong>Building Construction:</strong>
                    <ul>
                        <li>Bricks are made from clay soil</li>
                        <li>Adobe houses use mud and straw</li>
                        <li>Foundations are built on solid soil or bedrock</li>
                    </ul>
                </li>
                <li><strong>Molding and Pottery:</strong>
                    <ul>
                        <li>Clay is used to make pots, bowls, and plates</li>
                        <li>Artists use clay for sculptures</li>
                        <li>Clay can be fired in a kiln to become hard and waterproof</li>
                    </ul>
                </li>
                <li><strong>Other Uses:</strong>
                    <ul>
                        <li>Making dams and roads</li>
                        <li>Filtering water (soil cleans water as it passes through)</li>
                        <li>Homes for animals (worms, insects, burrowing animals)</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Mud Houses</div>
                <p>In many parts of the world, people build homes from mud mixed with straw. These houses stay cool in summer and warm in winter!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Pottery Art</div>
                <p>Potters use clay soil to make beautiful bowls, vases, and sculptures. After shaping the clay, they bake it in a very hot oven called a kiln.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> Food from Soil</div>
                <p>Almost all the food we eat comes from soil - carrots, potatoes, lettuce, apples, wheat for bread, and corn for cereal!</p>
            </div>
        `,
        taskInstructions: "Identify and describe different uses of soil.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Uses of Soil Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture showing how soil is used for FARMING:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture showing how soil is used for BUILDING:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing how soil is used for MOLDING (pottery):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Farmers use soil to grow _________ for us to eat.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. _________ soil is used to make bricks and pots.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. People build _________ on solid soil or bedrock.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> List 3 foods you ate today that came from soil:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is soil important for animals too?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things in your home that come from soil (like a clay pot, brick, or food). List them and explain how soil was used to make each one.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Earth Science",
        subtopic: "Lab: Soil Texture Test (Jar Test)",
        lessonContent: `
            <p>Today we're scientists! We'll conduct a real experiment to discover what types of soil are in our samples.</p>
            <p><strong>Key Question:</strong> What is the texture of my soil sample?</p>
            <p><strong>Introduction:</strong> The jar test helps us see the different particles in soil. Larger particles (sand) sink first, and smallest particles (clay) settle last.</p>
            <p><strong>Experiment Steps - Soil Jar Test:</strong></p>
            <ol>
                <li>Fill a clear jar 1/3 full with soil</li>
                <li>Add water until the jar is almost full (leave 2 cm of air at top)</li>
                <li>Add 1 teaspoon of liquid dish soap (helps separate particles)</li>
                <li>Close the lid tightly and shake for 2 minutes</li>
                <li>Set the jar on a flat surface and let it sit for 24 hours</li>
                <li>Observe the layers that form!</li>
            </ol>
            <p><strong>What You'll See (from bottom to top):</strong></p>
            <ul>
                <li><strong>Bottom Layer:</strong> Sand (heaviest, settles first)</li>
                <li><strong>Middle Layer:</strong> Silt (medium weight)</li>
                <li><strong>Top Layer:</strong> Clay (lightest, settles last)</li>
                <li><strong>Floating on top:</strong> Organic matter (humus - dead plant pieces)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Scientist in Action</div>
                <p>Real soil scientists use tests like this to figure out what kind of soil is in different places. They call this "soil texture analysis"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Reading the Layers</div>
                <p>If your jar shows mostly sand at the bottom, you have sandy soil. If you see a thick clay layer on top, you have clay soil. Equal layers = loam!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Patience Needed</div>
                <p>Clay particles are so tiny that they can take 24 hours or more to settle! That's why we let the jar sit overnight.</p>
            </div>
        `,
        taskInstructions: "Conduct the soil jar test experiment and record observations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Experiment Setup</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow the steps to set up your soil jar test. Draw your jar BEFORE shaking:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Predict what you think will happen to the soil particles:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observations (After 24 hours)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your jar AFTER the particles have settled:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Label the layers you see (Sand, Silt, Clay, Organic matter):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which layer is thickest? What does this tell you about your soil?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Based on your jar test, what type of soil do you have (sand, clay, or loam)? How do you know?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Would this soil be good for farming? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Lab Safety Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> What safety rules did we follow during this experiment?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Continue observing your jar for another day. Has anything changed? Draw what you see and share with the class on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek9);
    console.log("grade3-mathscience-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek9);
    console.log("grade3-mathscience-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek9',
        metadata: grade3MathScienceWeek9.metadata,
        days: grade3MathScienceWeek9
    });
    console.log("grade3-mathscience-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek9 = grade3MathScienceWeek9;
console.log("grade3-mathscience-week9.js loaded and registered successfully");