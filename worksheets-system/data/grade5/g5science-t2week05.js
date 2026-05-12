// Grade 5 Science - Term 2 Week 5 Data
const grade5ScienceWeek5 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 5,
        title: "Soil Health",
        description: "Understanding what makes soil healthy, testing soil properties, and learning how to improve soil fertility"
    },
    
    monday: {
        subject: "Science",
        topic: "Soil Science",
        subtopic: "What Makes Soil 'Healthy'?",
        lessonContent: `
            <p>Welcome to our exploration of soil health! Today we'll discover what makes soil good for growing plants.</p>
            <p><strong>Key Question:</strong> In which soil would a maize seed grow better? Why?</p>
            <p><strong>Introduction:</strong> Soil health is the ability of soil to support plant life and provide nutrients. Not all soil is the same!</p>
            <p><strong>Characteristics of Healthy Soil:</strong></p>
            <ol>
                <li><strong>Dark Color:</strong> Rich, dark soil contains organic matter (decayed plants and animals)</li>
                <li><strong>Holds Moisture:</strong> Healthy soil stays damp but not waterlogged</li>
                <li><strong>Contains Living Things:</strong> Earthworms, insects, and microorganisms live in healthy soil</li>
                <li><strong>Good Texture:</strong> Crumbly and loose, not hard and compacted</li>
            </ol>
            <p><strong>What is Soil Fertility?</strong></p>
            <ul>
                <li>Fertility means the soil has the right "food" (nutrients) for plants</li>
                <li>Plants "eat" nutrients from the soil through their roots</li>
                <li>If soil is tired (low fertility), plants will be weak and unhealthy</li>
            </ul>
            <p><strong>Signs of Unhealthy Soil:</strong></p>
            <ul>
                <li>Light or gray color (little organic matter)</li>
                <li>Cracked, dry surface</li>
                <li>Hard and compacted (difficult to dig)</li>
                <li>No worms or insects visible</li>
                <li>Plants growing poorly or wilting</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Moisture Matters</div>
                <p>Healthy soil acts like a sponge! It holds water for plants to drink, but also lets extra water drain through so roots don't drown.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm"></i> Earthworm Helpers</div>
                <p>Earthworms are like tiny farmers! They tunnel through soil, creating air pockets. Their waste (castings) adds nutrients to the soil.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Food From Soil</div>
                <p>Plants need three main nutrients from soil: Nitrogen (N) for leaves, Phosphorus (P) for roots and flowers, and Potassium (K) for overall health.</p>
            </div>
        `,
        taskInstructions: "Compare healthy and unhealthy soil through drawings and descriptions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Comparison Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Divide your page into two sections. Draw and describe:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Healthy Soil</strong>
                            <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #4CAF50;"></div>
                            <p style="margin-top: 10px;"><em>Features to include: dark color, moist, earthworm, green plant</em></p>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Unhealthy Soil</strong>
                            <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #f44336;"></div>
                            <p style="margin-top: 10px;"><em>Features to include: light color, cracked, dry, wilting plant</em></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Characteristics List</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three characteristics of healthy soil:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List three signs of unhealthy soil:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do plants grow better in healthy soil?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect a small soil sample from your garden or a nearby field. Describe its color, texture, and whether it feels moist or dry.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Soil Science",
        subtopic: "Testing the Soil (pH and Texture)",
        lessonContent: `
            <p>Today we'll become soil scientists and learn how to test soil properties!</p>
            <p><strong>Key Question:</strong> How can we tell if soil is too sour (acidic) or too bitter (alkaline)?</p>
            <p><strong>What is Soil pH?</strong></p>
            <ul>
                <li><strong>pH</strong> tells us how acidic or alkaline soil is</li>
                <li><strong>Acidic soil</strong> = sour (like lemon juice or vinegar)</li>
                <li><strong>Alkaline soil</strong> = bitter (like baking soda)</li>
                <li><strong>Neutral soil</strong> = just right for most crops (like pure water)</li>
            </ul>
            <p><strong>Simple pH Test (The Fizz Test):</strong></p>
            <ol>
                <li><strong>Test for Alkalinity:</strong> Add vinegar to soil. If it fizzes, the soil is alkaline!</li>
                <li><strong>Test for Acidity:</strong> Add water and baking soda to soil. If it fizzes, the soil is acidic!</li>
                <li><strong>No fizz?</strong> The soil is likely neutral - perfect for most plants!</li>
            </ol>
            <p><strong>The Jar Test (Soil Texture):</strong></p>
            <ul>
                <li>Mix soil and water in a clear jar and shake well</li>
                <li>Let it settle for several hours</li>
                <li>You'll see layers: <strong>Sand</strong> (bottom) → <strong>Silt</strong> (middle) → <strong>Clay</strong> (top) → <strong>Organic matter</strong> (floating)</li>
                <li>The largest layer tells you what type of soil you have!</li>
            </ul>
            <p><strong>Why Soil Texture Matters:</strong></p>
            <ul>
                <li><strong>Sandy soil:</strong> Drains quickly, doesn't hold nutrients well</li>
                <li><strong>Clay soil:</strong> Holds water but can be heavy and sticky</li>
                <li><strong>Loam soil:</strong> A perfect mix of sand, silt, and clay - best for farming!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Kitchen Science</div>
                <p>You can test soil pH with common kitchen items! Vinegar (acid) and baking soda (alkaline) react with soil to reveal its pH.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> The Jar Test</div>
                <p>After shaking soil in water, heavy sand particles sink first. Lighter silt settles next. The lightest clay particles take the longest to settle at the top.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Crop Preferences</div>
                <p>Potatoes like acidic soil (pH 4.5-6.0). Cabbage prefers alkaline soil (pH 6.5-7.5). Maize and beans grow best in neutral soil (pH 6.0-7.0)!</p>
            </div>
        `,
        taskInstructions: "Perform soil tests and record observations of pH and texture layers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Fizz Test - pH Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Test your soil sample with vinegar:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What did you observe? _________________________________</div>
                        <div>Did it fizz? YES / NO</div>
                        <div>If it fizzed, the soil is: ACIDIC / ALKALINE / NEUTRAL (circle one)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Test a fresh soil sample with water and baking soda:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What did you observe? _________________________________</div>
                        <div>Did it fizz? YES / NO</div>
                        <div>If it fizzed, the soil is: ACIDIC / ALKALINE / NEUTRAL (circle one)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Based on both tests, your soil is: ACIDIC / ALKALINE / NEUTRAL
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Jar Test - Soil Texture</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Mix soil and water in a clear jar. Shake well and let it settle. Draw and label the layers:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which layer is the largest? SAND / SILT / CLAY (circle one)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> If your soil is too acidic, what could you add to fix it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a farmer or gardener: How do they know if their soil is good for planting? Write down their answer.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Soil Science",
        subtopic: "Feeding the Soil (Organic vs. Inorganic)",
        lessonContent: `
            <p>Today we'll learn how farmers can improve soil fertility and choose the right crops for their soil!</p>
            <p><strong>Key Question:</strong> What should Farmer Banda add to soil that is very acidic and lacks nutrients?</p>
            <p><strong>Ways to Improve Soil Fertility:</strong></p>
            
            <p><strong>Organic Solutions (Natural):</strong></p>
            <ul>
                <li><strong>Manure:</strong> Animal waste (cow, chicken, goat) that adds nutrients to soil</li>
                <li><strong>Compost:</strong> Decayed plant material (leaves, vegetable scraps, grass clippings)</li>
                <li><strong>Benefits:</strong> Cheap, improves soil structure, adds organic matter, releases nutrients slowly</li>
            </ul>
            
            <p><strong>Inorganic Solutions (Factory-made):</strong></p>
            <ul>
                <li><strong>Chemical Fertilizers:</strong> Factory-made nutrients added to soil</li>
                <li><strong>Benefits:</strong> Works quickly, gives fast growth</li>
                <li><strong>Disadvantages:</strong> Expensive, doesn't improve soil structure, can harm soil life if overused</li>
            </ul>
            
            <p><strong>Agricultural Lime:</strong></p>
            <ul>
                <li>Made from crushed rock (limestone)</li>
                <li>Added to "sweeten" soil that is too acidic</li>
                <li>Raises pH from acidic to neutral</li>
            </ul>
            
            <p><strong>Comparison Table:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4CAF50; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Method</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Source</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Advantage</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Manure/Compost</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Animals/Plants</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Cheap, improves soil health</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Inorganic Fertilizer</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Factory</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Fast growth</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Lime</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Crushed Rock</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Fixes acidity</td>
                 </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cow"></i> Manure Magic</div>
                <p>Fresh manure must be aged before using on crops - fresh manure can burn plant roots! Farmers often let it sit for several months.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-industry"></i> Fertilizer Facts</div>
                <p>Inorganic fertilizers have numbers like 10-10-10. These stand for Nitrogen-Phosphorus-Potassium percentages. Different crops need different ratios!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Crop Choices</div>
                <p><strong>Healthy soil crops:</strong> Maize, Beans, Tomatoes, Cabbage (need good fertility)<br>
                <strong>Poor soil crops:</strong> Cassava, Sweet Potatoes, Pineapples (can survive with less nutrients)</p>
            </div>
        `,
        taskInstructions: "Solve the farmer's problem by recommending the right soil treatments.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Farmer's Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each farmer's problem and recommend a solution:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Farmer Banda:</strong> "My soil is very acidic and lacks nutrients."</div>
                        <div>What should he add? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Farmer Grace:</strong> "My soil is neutral but very sandy and won't hold water."</div>
                        <div>What should she add? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Farmer Joseph:</strong> "My maize needs to grow quickly for market, but I don't have much money."</div>
                        <div>What should he consider? _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparison Table Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Copy and complete the comparison table in your notebook:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Method</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Source</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">One Advantage</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">One Disadvantage</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Manure</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Animals</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Inorganic Fertilizer</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Factory</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Agricultural Lime</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Crushed Rock</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Crop Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each crop to the soil type it grows best in:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Maize and Beans ___ a. Can grow in poor soil</div>
                        <div>2. Cassava ___ b. Needs healthy, fertile soil</div>
                        <div>3. Cabbage ___ c. Prefers neutral to alkaline soil</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you had a garden with tired, acidic soil, what three things would you do to improve it?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing how to keep soil healthy. Include at least three tips (e.g., add compost, test pH, rotate crops).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek5);
    console.log("grade5-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek5);
    console.log("grade5-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek5',
        metadata: grade5ScienceWeek5.metadata,
        days: grade5ScienceWeek5
    });
    console.log("grade5-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek5 = grade5ScienceWeek5;
console.log("grade5-science-week5.js loaded and registered successfully");