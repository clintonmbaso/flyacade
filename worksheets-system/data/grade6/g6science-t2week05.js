// Grade 6 Science - Term 2 Week 5 Data
const grade6ScienceWeek5 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 2,
        week: 5,
        title: "Soil Conservation",
        description: "Understanding soil erosion and practicing conservation methods including mulching, cover cropping, crop rotation, and lawn maintenance"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "The Vanishing Earth (Understanding Erosion)",
        lessonContent: `
            <p>Welcome to our exploration of soil conservation! Today we'll discover why soil is precious and how it can disappear.</p>
            <p><strong>Key Question:</strong> Where does the dirt in muddy water come from, and why is it a problem for farmers?</p>
            <p><strong>Introduction:</strong> Soil is a precious resource that takes thousands of years to form. <strong>Soil conservation</strong> means protecting soil so it stays healthy and stays in place. Without healthy soil, we cannot grow food!</p>
            <p><strong>What is Soil Erosion?</strong></p>
            <ul>
                <li><strong>Soil erosion</strong> is the removal of topsoil by wind and water</li>
                <li>Topsoil is the most fertile layer - it contains nutrients plants need</li>
                <li>When soil erodes, it ends up in rivers, lakes, and oceans</li>
            </ul>
            <p><strong>Main Causes of Soil Erosion:</strong></p>
            <ol>
                <li><strong>Water:</strong> Rain and running water wash soil downhill</li>
                <li><strong>Wind:</strong> Strong winds blow away loose, dry soil</li>
                <li><strong>Deforestation:</strong> Cutting down trees removes roots that hold soil</li>
                <li><strong>Overgrazing:</strong> Animals eating all plants leaves soil exposed</li>
                <li><strong>Poor Farming:</strong> Plowing up and down hills creates channels for water</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> The Muddy Water Mystery</div>
                <p>When rain falls on bare soil, it carries tiny soil particles into streams. That's why rivers turn brown after heavy rain - soil is washing away!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Tree Roots as Anchors</div>
                <p>A single tree can have roots spreading 2-3 times wider than its branches! These roots grip the soil like thousands of tiny fingers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> The Dust Bowl</div>
                <p>In the 1930s, poor farming practices and drought caused massive dust storms in the US. Millions of tons of topsoil blew away - a lesson in why conservation matters!</p>
            </div>
        `,
        taskInstructions: "Conduct the Splash Test and identify causes of soil erosion.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Splash Test Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe the demonstration:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Tray A:</strong> Bare soil mound</div>
                        <div><strong>Tray B:</strong> Soil mound covered with grass/leaves</div>
                        <div><em>Water is poured equally on both trays using a watering can</em></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Record your observations:
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Which tray lost more soil? Which water looks muddier?</em></p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What does this experiment tell us about the importance of plant cover?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Causes of Soil Erosion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List three human activities that lead to soil loss:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a picture showing wind or water erosion:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why is topsoil more important than the deeper layers of soil?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your neighborhood or school. Find and describe two places where you see signs of soil erosion (bare patches, gullies, muddy puddles).",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "Protecting the Surface (Mulching and Cover Cropping)",
        lessonContent: `
            <p>Today we'll learn how giving soil a "blanket" protects it from erosion and keeps it healthy!</p>
            <p><strong>Key Question:</strong> Why does soil need a blanket, just like we wear clothes or hats in the sun?</p>
            <p><strong>What is Mulching?</strong></p>
            <ul>
                <li><strong>Mulch:</strong> A layer of material spread over bare soil</li>
                <li><strong>Materials:</strong> Dry grass, leaves, straw, woodchips, or even newspaper</li>
                <li><strong>Benefits:</strong> Protects soil from rain impact, keeps moisture in, prevents weed growth, moderates soil temperature</li>
            </ul>
            <p><strong>What is Cover Cropping?</strong></p>
            <ul>
                <li><strong>Cover Crops:</strong> Fast-growing plants grown specifically to protect the ground</li>
                <li><strong>Examples:</strong> Beans, clover, rye grass, buckwheat</li>
                <li><strong>Benefits:</strong> Roots hold soil in place, adds nutrients when turned into soil, prevents erosion between growing seasons</li>
            </ul>
            <p><strong>Why Covering Soil Works:</strong></p>
            <ul>
                <li>Raindrops hit the mulch/cover instead of bare soil (no splash erosion!)</li>
                <li>Water soaks in slowly instead of running off</li>
                <li>Soil stays cooler in summer and warmer in winter</li>
                <li>Microorganisms and worms thrive under the protection</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Nature's Blanket</div>
                <p>In forests, fallen leaves create a natural mulch layer. That's why forest soil stays moist and doesn't wash away easily!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Living Mulch</div>
                <p>Cover crops are sometimes called "living mulch" because they protect soil while they're alive. When they die, they add organic matter to the soil!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-low"></i> Soil Temperature Test</div>
                <p>On a hot day, bare soil can reach 60°C (140°F) - too hot for many plant roots! Mulched soil stays 10-15°C cooler.</p>
            </div>
        `,
        taskInstructions: "Compare bare vs. mulched soil and create a poster about soil blankets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Temperature & Moisture Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare two patches of ground - one bare and one mulched:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Observation</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Bare Soil</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Mulched Soil</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Temperature (warm/cool)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Moisture (dry/damp)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Soil color (dark/light)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Understanding Mulch & Cover Crops</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three materials that can be used as mulch:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Name two plants that can be used as cover crops:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How does covering soil help farmers during dry seasons?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: "The Soil's Blanket" Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a poster illustrating mulching and cover cropping:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Write a caption explaining how your poster shows soil conservation:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Collect dry leaves or grass from your yard. If you have a garden or potted plant, apply a thin layer as mulch and observe the soil moisture over 3 days.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "Farming with the Land (Crop Rotation and Cross-Slope Farming)",
        lessonContent: `
            <p>Today we'll learn how smart farming patterns protect the land and keep soil fertile for generations!</p>
            <p><strong>Key Question:</strong> Why shouldn't we plant the same thing in the same spot every year?</p>
            <p><strong>What is Crop Rotation?</strong></p>
            <ul>
                <li><strong>Crop Rotation:</strong> Changing the type of crop grown in a field each season or year</li>
                <li><strong>Why it works:</strong> Different plants use different nutrients and put different nutrients back</li>
                <li><strong>Example:</strong> Corn (uses nitrogen) → Beans (adds nitrogen) → Wheat (uses different nutrients)</li>
                <li><strong>Benefits:</strong> Prevents nutrient depletion, reduces pests and diseases, improves soil structure</li>
            </ul>
            <p><strong>What is Cross-Slope (Contour) Farming?</strong></p>
            <ul>
                <li><strong>Contour Farming:</strong> Planting across a hill rather than up and down</li>
                <li><strong>How it works:</strong> Rows create "speed bumps" that slow down rainwater</li>
                <li><strong>Benefits:</strong> Reduces water runoff, increases water absorption, prevents gully formation</li>
            </ul>
            <p><strong>What is Reduced Tillage?</strong></p>
            <ul>
                <li><strong>Reduced Tillage:</strong> Not digging up the soil too much</li>
                <li><strong>Why it helps:</strong> Preserves soil structure, keeps roots and organic matter in place, protects soil organisms</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> The Nitrogen Connection</div>
                <p>Beans and peas have special bacteria on their roots that pull nitrogen from the air into the soil. Planting them after corn (which uses lots of nitrogen) naturally fertilizes the field!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> Speed Bumps for Rain</div>
                <p>On a sloped field, water running downhill can gain speed and carry soil away. Contour rows act like speed bumps - each row slows the water down so it soaks in.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm"></i> No-Till Benefits</div>
                <p>Earthworms are nature's tillers! They create tunnels that let water and air into soil. Tilling too much destroys worm tunnels and homes.</p>
            </div>
        `,
        taskInstructions: "Build a mini-mountain to test contour vs. downhill farming.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mini-Mountain Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Build a "mini-mountain" from sand or soil. Create two sets of rows:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Test 1:</strong> Rows carved DOWN the slope</div>
                        <div><strong>Test 2:</strong> Rows carved AROUND the slope (contour)</div>
                        <div><em>Pour water at the top of each and observe what happens</em></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Record your observations:
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which method held water better and why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Conservation Practice Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each practice to its benefit:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Crop Rotation</div>
                                <div>• Contour Farming</div>
                                <div>• Reduced Tillage</div>
                                <div>• Mulching</div>
                                <div>• Cover Cropping</div>
                            </div>
                            <div>
                                <div>→ Protects soil from rain splash</div>
                                <div>→ Adds nitrogen and holds soil between seasons</div>
                                <div>→ Preserves soil structure and worm tunnels</div>
                                <div>→ Prevents nutrient depletion and reduces pests</div>
                                <div>→ Creates "speed bumps" to slow water runoff</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Application Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A farmer plants corn in Field A and beans in Field B. Next year, they swap. Why is this a good practice?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a simple diagram showing contour farming on a hill:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look at a hillside or slope near your home. Would contour farming work there? Draw what the rows would look like.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "The Green Project (Maintaining a Class Lawn)",
        lessonContent: `
            <p>Today we'll put our soil conservation knowledge into action by starting a class lawn project!</p>
            <p><strong>Key Question:</strong> How does grass act as a "natural anchor" for soil?</p>
            <p><strong>Why Lawns Matter for Soil Conservation:</strong></p>
            <ul>
                <li>Grass roots create a dense network that holds soil particles together</li>
                <li>Grass blades slow down raindrops and reduce splash erosion</li>
                <li>Grass allows water to soak in instead of running off</li>
                <li>A healthy lawn can reduce soil erosion by up to 90% compared to bare ground!</li>
            </ul>
            <p><strong>Our Class Lawn Project Steps:</strong></p>
            <ol>
                <li><strong>Select a site:</strong> Find a bare patch of ground on school property</li>
                <li><strong>Prepare the soil:</strong> Loosen gently (reduced tillage), remove rocks and weeds</li>
                <li><strong>Plant:</strong> Sow grass seeds or place grass runners</li>
                <li><strong>Protect:</strong> Apply a thin layer of mulch to keep seeds moist</li>
                <li><strong>Water:</strong> Keep soil moist but not flooded</li>
                <li><strong>Protect:</strong> Create a "no-tread" zone until grass establishes</li>
            </ol>
            <p><strong>Long-term Maintenance:</strong></p>
            <ul>
                <li>Water deeply but less often to encourage deep roots</li>
                <li>Leave grass clippings to add nutrients back to soil</li>
                <li>Avoid walking on wet soil (causes compaction)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Project Impact</div>
                <p>A single square meter of healthy lawn can hold up to 10 liters of water in its root zone, preventing runoff and flooding!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Root Power</div>
                <p>Grass roots can grow 1-2 meters deep! They create millions of tiny channels that let water soak into the ground instead of running off.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Team Effort</div>
                <p>Our class lawn project will benefit the whole school - less mud, less dust, cleaner air, and a beautiful green space!</p>
            </div>
        `,
        taskInstructions: "Plan, plant, and maintain a class lawn project while keeping a maintenance log.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Project Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> As a class, select and prepare the project site:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Site location:</strong> ___________________________</div>
                        <div><strong>Soil condition (bare/weedy/rocky):</strong> ___________________________</div>
                        <div><strong>Area size:</strong> ___________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a plan for your class lawn area:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Maintenance Log</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Record your weekly maintenance activities:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Date</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Activity (watering, weeding, etc.)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Observations</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection & Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How does your class lawn help the school's environment?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What soil conservation methods from this week are you using in this project?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What challenges might you face maintaining the lawn, and how will you solve them?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Week 5 Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> List three soil conservation techniques you learned this week:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Which technique do you think is most important for your community? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a one-paragraph report on your class lawn project so far. Include: what you did, what you observed, and how this helps prevent soil erosion. Share with a family member.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek5);
    console.log("grade6-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek5);
    console.log("grade6-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek5',
        metadata: grade6ScienceWeek5.metadata,
        days: grade6ScienceWeek5
    });
    console.log("grade6-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek5 = grade6ScienceWeek5;
console.log("grade6-science-week5.js loaded and registered successfully");