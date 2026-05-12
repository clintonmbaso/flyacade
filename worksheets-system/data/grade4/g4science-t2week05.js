// Grade 4 Science - Term 2 Week 5 Data
const grade4ScienceWeek5 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 5,
        title: "Soil Structure",
        description: "Exploring the soil profile, classifying soil types, and understanding soil's importance for crops and livestock"
    },
    
    monday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Looking Beneath Our Feet (The Soil Profile)",
        lessonContent: `
            <p>Welcome to our exploration of soil! Today we'll discover what lies beneath our feet when we dig deep into the ground.</p>
            <p><strong>Key Question:</strong> If we dug a very deep hole, would the soil at the bottom look the same as the soil at the top?</p>
            <p><strong>Introduction:</strong> Soil is not just one material - it's made of different layers stacked on top of each other like a cake! This stack of layers is called the <strong>Soil Profile</strong>.</p>
            <p><strong>The 4 Main Layers of Soil (From Top to Bottom):</strong></p>
            <ol>
                <li><strong>Topsoil:</strong> The dark, rich top layer. Contains humus (decayed plants and animals) and is full of nutrients. Most plant roots grow here!</li>
                <li><strong>Subsoil:</strong> The layer below topsoil. Lighter in color, contains more minerals and less organic matter.</li>
                <li><strong>Weathered Rock:</strong> Broken bits of rock mixed with some soil. This is where rock slowly breaks down to form new soil.</li>
                <li><strong>Parent Rock:</strong> The solid rock bed at the very bottom. This is the original rock that slowly weathers to create the layers above.</li>
            </ol>
            <p><strong>Why This Matters:</strong> Farmers need to understand soil layers to know where to plant crops. Gardeners know that topsoil is the most valuable layer for growing food!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> The Soil Layer Cake</div>
                <p>Think of soil like a layered cake! The top (frosting) is the dark topsoil. The middle (cake) is the subsoil. The bottom (plate) is the parent rock.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Root Homes</div>
                <p>Why do most plant roots stay in the topsoil? Because that's where the food is! Topsoil contains nutrients and water that plants need to grow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Slow Formation</div>
                <p>It takes nature about 1,000 years to make just 2-3 centimeters of topsoil! That's why we need to protect our soil.</p>
            </div>
        `,
        taskInstructions: "Observe and draw a soil profile showing the four main layers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> If you have access to a soil pit or a dug-up area, observe the different layers. If not, study the diagram provided:
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Record what you see in each layer (color, texture, what's inside):</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Soil Layer Cake</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label the four main layers of the soil profile:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Layer Descriptions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each layer to its description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Topsoil ___</div>
                        <div>• Subsoil ___</div>
                        <div>• Weathered Rock ___</div>
                        <div>• Parent Rock ___</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. Solid rock at the very bottom</div>
                        <div>B. Dark layer with humus, most plant roots grow here</div>
                        <div>C. Broken rock pieces mixed with soil</div>
                        <div>D. Lighter layer with minerals, less organic matter</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do most plant roots stay in the topsoil layer?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Dig a small hole in your garden (with permission) or find a place where soil is exposed. Draw and describe the layers you can see.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Sorting the Earth (Classifying Soil Types)",
        lessonContent: `
            <p>Today we'll become soil scientists as we learn to identify different types of soil by touch and texture!</p>
            <p><strong>Key Question:</strong> Why does some soil feel gritty while other soil feels smooth and sticky?</p>
            <p><strong>The 3 Main Types of Soil:</strong></p>
            <ol>
                <li><strong>Sand:</strong> 
                    <ul>
                        <li>Feels gritty and rough</li>
                        <li>Large particles with big spaces between them</li>
                        <li>Water drains through quickly</li>
                        <li>Doesn't hold nutrients well</li>
                    </ul>
                </li>
                <li><strong>Clay:</strong> 
                    <ul>
                        <li>Feels smooth when dry, sticky when wet</li>
                        <li>Tiny particles packed tightly together</li>
                        <li>Holds water for a long time (can get waterlogged)</li>
                        <li>Can be rolled into a long ribbon</li>
                    </ul>
                </li>
                <li><strong>Loam:</strong> 
                    <ul>
                        <li>The "Goldilocks" soil - just right!</li>
                        <li>A crumbly mix of sand and clay</li>
                        <li>Holds water well but also drains properly</li>
                        <li>Best soil for growing most plants</li>
                    </ul>
                </li>
            </ol>
            <p><strong>The Sausage Test:</strong> Take damp soil and try to roll it into a long ribbon. If it holds together like a sausage, it's clay. If it falls apart immediately, it's sand. If it holds a little but crumbles, it's loam!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Water Test</div>
                <p>Pour water on sand - it disappears like magic! Pour water on clay - it sits on top like a puddle. Loam is perfect - the water soaks in but doesn't flood.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Pottery from Clay</div>
                <p>People have used clay soil for thousands of years to make pots, bricks, and dishes. That's because clay is sticky and holds its shape when dried!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Garden Gold</div>
                <p>Loam is called "garden gold" because it's perfect for growing vegetables. Most farmers dream of having loamy soil in their fields!</p>
            </div>
        `,
        taskInstructions: "Perform the Touch and Feel Lab to identify sand, clay, and loam soil samples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Touch and Feel Lab</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Examine the three soil samples. Record your observations for each:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Soil Sample</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Texture (gritty/smooth/crumbly)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What happens when wet?</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Soil Type</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample A</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample B</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample C</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 50px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Sausage Test</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Take a small amount of damp soil from each sample and try to roll it into a "sausage" or ribbon:
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Which sample rolled into the longest ribbon? Which fell apart immediately?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Soil Type Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the correct soil type (Sand, Clay, or Loam) next to each description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Feels gritty and water drains quickly: _________</div>
                        <div>• Feels sticky when wet and can be rolled into a ribbon: _________</div>
                        <div>• The best soil for growing most plants: _________</div>
                        <div>• Crumbly mix of sand and clay: _________</div>
                        <div>• Tiny particles packed tightly together: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Garden Decision</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you were starting a school garden, which soil type would you want? Explain why.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect a small soil sample from your home. Describe its texture and try the Sausage Test. What type of soil do you think it is?",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Soil and the Economy (Importance for Crops)",
        lessonContent: `
            <p>Today we'll discover why healthy soil is essential for growing our food and supporting our economy!</p>
            <p><strong>Key Question:</strong> Why does a farmer need to understand their soil before planting?</p>
            <p><strong>The Soil Connection to Food and Farming:</strong></p>
            <ul>
                <li>Soil is the foundation of all agriculture</li>
                <li>Without soil, we cannot grow crops like maize, beans, or vegetables</li>
                <li>Without crops, we cannot feed livestock like cattle, goats, or chickens</li>
                <li>Without healthy soil, farmers cannot earn income from selling their products</li>
            </ul>
            <p><strong>The Chain Reaction:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 10px; margin: 15px 0; text-align: center;">
                <div>Healthy Soil → Healthy Crops → Healthy Livestock → Food on Our Tables → Farmers' Income</div>
            </div>
            <p><strong>What Happens When Soil is Poorly Managed?</strong></p>
            <ul>
                <li><strong>Littering:</strong> Trash can poison the soil and make it unusable for growing food</li>
                <li><strong>Erosion:</strong> When soil washes or blows away, crops can't grow</li>
                <li><strong>Chemical Pollution:</strong> Too many chemicals can kill helpful soil organisms</li>
                <li><strong>Result:</strong> Less food, less income for farmers, higher food prices</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Farmer's Income</div>
                <p>A farmer with healthy loam soil can grow twice as many tomatoes as a farmer with sandy soil. That means double the income for the farmer's family!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> Soil = Jobs</div>
                <p>Millions of people depend on soil for their jobs - farmers, gardeners, fruit pickers, and even people who work in food factories.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Prevention is Better</div>
                <p>Planting trees along field edges (windbreaks) can stop soil from blowing away. This simple action protects the soil AND keeps crops growing!</p>
            </div>
        `,
        taskInstructions: "Analyze soil's importance for crops and livestock, and create a Soil Health Rulebook.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Chain</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing parts of the soil-to-food chain:
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 10px; margin-top: 10px; text-align: center;">
                        <div>Healthy Soil → _________ → Healthy Livestock → _________ → Farmers' Income</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each scenario and explain how it affects the farmer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> A farmer's soil has become sandy and cannot hold water well.</div>
                        <div>How does this affect the farmer's crops? _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> Heavy rain has washed away the topsoil from a farmer's field.</div>
                        <div>How does this affect the farmer's income? _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> A farmer has loam soil that holds water and nutrients perfectly.</div>
                        <div>What can this farmer grow successfully? _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Soil Health Rulebook</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In your group, write three rules for protecting soil. Each rule should explain why it matters:
                    <div style="margin-top: 10px;">
                        <div><strong>Rule 1:</strong> _________________________________</div>
                        <div style="margin-left: 20px; font-size: 14px; color: #666;">Why? _____________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Rule 2:</strong> _________________________________</div>
                        <div style="margin-left: 20px; font-size: 14px; color: #666;">Why? _____________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;"><strong>Rule 3:</strong> _________________________________</div>
                        <div style="margin-left: 20px; font-size: 14px; color: #666;">Why? _____________________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Give one reason why a farmer must understand their soil type before planting.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is one thing YOU can do to help protect soil in your community?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a farmer or gardener in your area. Ask: 'What type of soil do you have? How do you take care of your soil?' Write down their answers.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek5',
        metadata: grade4ScienceWeek5.metadata,
        days: grade4ScienceWeek5
    });
    console.log("grade4-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek5 = grade4ScienceWeek5;
console.log("grade4-science-week5.js loaded and registered successfully");