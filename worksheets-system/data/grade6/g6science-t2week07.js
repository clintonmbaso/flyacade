// Grade 6 Science - Term 2 Week 7 Data
const grade6ScienceWeek7 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 2,
        week: 7,
        title: "Growing Field Crops to Maturity",
        description: "Following the agricultural cycle from site selection and planting to crop management and harvesting"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Planning and Groundwork (Site Selection & Preparation)",
        lessonContent: `
            <p>Welcome to our agricultural journey! Today we'll learn how to select the perfect spot for a crop and prepare the land for planting.</p>
            <p><strong>Key Question:</strong> What does a plant need to thrive and how do we choose the best location?</p>
            <p><strong>Introduction:</strong> Before any seed goes into the ground, farmers must carefully plan. The right location and proper land preparation can mean the difference between a bountiful harvest and failure.</p>
            <p><strong>What Plants Need to Thrive:</strong></p>
            <ol>
                <li><strong>Sunlight:</strong> Most crops need 6-8 hours of direct sunlight daily</li>
                <li><strong>Good Soil:</strong> Rich in nutrients, with proper drainage</li>
                <li><strong>Water Access:</strong> Near a water source for irrigation</li>
                <li><strong>Protection:</strong> Sheltered from strong winds and flooding</li>
            </ol>
            <p><strong>Common Local Crops We'll Study:</strong></p>
            <ul>
                <li><strong>Maize (Corn):</strong> A staple grain that needs plenty of space and sunlight</li>
                <li><strong>Beans:</strong> Legumes that add nitrogen to the soil</li>
                <li><strong>Cassava:</strong> A root crop grown from stem cuttings, tolerates poor soil</li>
                <li><strong>Sunflowers:</strong> Oil-producing crop that follows the sun</li>
            </ul>
            <p><strong>Land Preparation Steps:</strong></p>
            <ol>
                <li><strong>Clearing:</strong> Remove weeds, rocks, and debris from the planting area</li>
                <li><strong>Tilling (Digging):</strong> Loosen the soil to allow roots to grow easily and water to penetrate</li>
                <li><strong>Leveling:</strong> Create a smooth, even surface for planting</li>
                <li><strong>Spacing:</strong> Different crops need different amounts of "personal space"</li>
            </ol>
            <p><strong>Crop Spacing Guide:</strong></p>
            <ul>
                <li><strong>Maize:</strong> 25-30 cm between plants, 75-90 cm between rows</li>
                <li><strong>Beans:</strong> 10-15 cm between plants, 45-60 cm between rows</li>
                <li><strong>Cassava:</strong> 100 cm between plants (needs lots of space!)</li>
                <li><strong>Sunflowers:</strong> 30-45 cm between plants, 75 cm between rows</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunlight Survey</div>
                <p>Walk around your school at 10 AM and 2 PM. Notice which areas are sunny and which are shaded by buildings or trees. The sunniest spot is best for most crops!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Personal Space for Plants</div>
                <p>Why do maize plants need more space than beans? Maize grows tall with large leaves that spread out. If planted too close, they compete for sunlight and produce fewer ears of corn.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trowel"></i> Soil Test</div>
                <p>Dig a small hole and fill it with water. If the water drains within an hour, you have good drainage. If it sits for hours, the soil is too clay-heavy and might rot plant roots.</p>
            </div>
        `,
        taskInstructions: "Survey a site, create a farm map, and plan your crop layout.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Site Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Walk around your school or home garden. Evaluate three potential spots using this checklist:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Sunlight (hours per day): _________</div>
                        <div>□ Soil type (sandy/clay/loamy): _________</div>
                        <div>□ Drainage (good/poor): _________</div>
                        <div>□ Distance from water source: _________</div>
                        <div>□ Protection from wind/flooding: _________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>Best spot chosen:</strong> _________________</p>
                        <p><strong>Reason:</strong> _________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Farm Map Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a simple "Farm Map" showing where your selected crop will be planted:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Crop selected:</strong> _________________</p>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw your farm map here - include sun direction, water source, and crop rows]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spacing Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you have a plot that is 3 meters by 3 meters, calculate how many maize plants you can grow (spacing: 30cm between plants, 90cm between rows):
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to clear weeds BEFORE planting rather than after?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a 1m x 1m area in your garden or yard. Count how many different plants (weeds, grass, etc.) are growing there. Draw a map showing their locations.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "The Start of Life (Planting and Nutrients)",
        lessonContent: `
            <p>Today we'll learn the correct way to plant different crops and understand how to feed them for healthy growth!</p>
            <p><strong>Key Question:</strong> How do we plant seeds and cuttings, and what do plants eat?</p>
            <p><strong>Seed vs. Cutting - Two Ways to Plant:</strong></p>
            <ul>
                <li><strong>Seeds (Maize, Beans, Sunflowers):</strong> Dried embryos that germinate when conditions are right</li>
                <li><strong>Cuttings (Cassava, Sweet Potatoes):</strong> Stem or root pieces that grow into new plants</li>
            </ul>
            <p><strong>Correct Planting Techniques:</strong></p>
            <ol>
                <li><strong>Depth:</strong> Plant seeds at the right depth - about 2-3 times the width of the seed
                    <ul>
                        <li>Maize: 3-5 cm deep</li>
                        <li>Beans: 2-3 cm deep</li>
                        <li>Cassava cuttings: Plant horizontally, 5-10 cm deep</li>
                    </ul>
                </li>
                <li><strong>Spacing:</strong> Give each plant enough room (review from Lesson 1)</li>
                <li><strong>Watering:</strong> Water gently after planting to settle soil around seeds</li>
            </ol>
            <p><strong>Plant Nutrients - What is "Plant Food"?</strong></p>
            <ul>
                <li><strong>Manure:</strong> Animal waste (cow, chicken, goat) that adds nutrients to soil</li>
                <li><strong>Compost:</strong> Decomposed kitchen and garden waste - nature's recycling!</li>
                <li><strong>Fertilizer:</strong> Manufactured plant food with specific nutrients</li>
            </ul>
            <p><strong>Essential Nutrients for Plants:</strong></p>
            <ul>
                <li><strong>Nitrogen (N):</strong> Helps leaves grow green and healthy</li>
                <li><strong>Phosphorus (P):</strong> Helps roots grow strong and flowers/fruits develop</li>
                <li><strong>Potassium (K):</strong> Helps plants fight diseases and survive drought</li>
            </ul>
            <p><strong>Fun Fact:</strong> Bean plants are special! They work with bacteria to pull nitrogen from the air and add it to the soil. That's why farmers often plant beans after maize - beans "recharge" the soil!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Too Deep, Too Shallow</div>
                <p>Plant a seed too deep, and it will run out of energy before reaching sunlight. Plant it too shallow, and birds might eat it or it will dry out. Just right is key!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> Compost Magic</div>
                <p>Kitchen scraps like banana peels, eggshells, and vegetable trimmings can become rich, dark compost in 2-3 months. It's like giving your soil a vitamin boost!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Crop Rotation</div>
                <p>Farmers rotate crops to keep soil healthy. Plant maize (uses lots of nitrogen), then beans (adds nitrogen), then rest the soil. Smart farming!</p>
            </div>
        `,
        taskInstructions: "Demonstrate planting techniques and create a plant nutrient guide.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hands-On Planting Demonstration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In your garden area or using pots, plant three seeds/cuttings at the correct depth and spacing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Crop planted: _________________</p>
                        <p>Depth planted: _________________</p>
                        <p>Spacing used: _________________</p>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Draw your planting setup - show depth and spacing]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Planting Checklist (Teacher Observation)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check off each skill as you demonstrate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Prepared soil by loosening it</div>
                        <div>□ Made holes/furrows at correct depth</div>
                        <div>□ Placed seed/cutting at correct spacing</div>
                        <div>□ Covered with soil gently</div>
                        <div>□ Watered appropriately</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">
                        <p><strong>Teacher signature:</strong> _________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Plant Nutrient Guide</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete this table about plant nutrients:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Nutrient</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What it does</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Source</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Nitrogen</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Phosphorus</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Potassium</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is planting a seed different from planting a cassava cutting? How is it similar?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Help prepare compost at home. Collect vegetable scraps, eggshells, and dry leaves. Write down what you collected and where you placed them.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "The Guardian Phase (Crop Management)",
        lessonContent: `
            <p>Today we'll learn how to protect our growing crops from weeds, pests, and diseases - the three enemies of every farmer!</p>
            <p><strong>Key Question:</strong> What happens if we just plant seeds and walk away?</p>
            <p><strong>The Enemies of the Crop:</strong></p>
            <ol>
                <li><strong>Weeds:</strong> "Thief plants" that steal water, nutrients, and sunlight from your crops</li>
                <li><strong>Pests:</strong> Insects and animals that eat or damage plants</li>
                <li><strong>Diseases:</strong> Fungi, bacteria, and viruses that make plants sick</li>
            </ol>
            <p><strong>Crop Management Tasks:</strong></p>
            <ul>
                <li><strong>Weeding:</strong> Removing unwanted plants by pulling them out from the root
                    <ul>
                        <li>Weed early before weeds set seeds</li>
                        <li>Weed carefully to avoid damaging crop roots</li>
                        <li>Best time to weed: after rain when soil is soft</li>
                    </ul>
                </li>
                <li><strong>Pest Control:</strong> Protecting crops from insects and animals
                    <ul>
                        <li>Common pests: caterpillars, aphids, grasshoppers, birds, rats</li>
                        <li>Safe removal: hand-picking, natural predators (ladybugs eat aphids!), neem spray</li>
                        <li>Scarecrows for birds, traps for rats</li>
                    </ul>
                </li>
                <li><strong>Thinning:</strong> Removing weaker seedlings so the strongest ones have room to grow
                    <ul>
                        <li>Wait until seedlings are 5-10 cm tall</li>
                        <li>Remove the smallest, weakest-looking plants</li>
                        <li>Leave the healthiest plants at correct spacing</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Signs of Unhealthy Plants (Crop Doctor Checklist):</strong></p>
            <ul>
                <li>Yellow leaves (could mean lack of nitrogen or too much water)</li>
                <li>Holes in leaves (insect damage)</li>
                <li>Wilting even when soil is wet (root disease)</li>
                <li>Stunted growth (lack of nutrients or competition from weeds)</li>
                <li>Discolored spots on leaves (fungal disease)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Weed Warning</div>
                <p>One pigweed plant can produce over 100,000 seeds! If you let it go to seed, you'll have weeds for years. That's why weeding early is so important.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Natural Pest Control</div>
                <p>Ladybugs are a farmer's best friend! A single ladybug can eat 50 aphids in one day. Encourage them by not using harsh chemicals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Thinning Sad but Necessary</div>
                <p>It feels wrong to pull out healthy seedlings, but thinning is like giving the remaining plants more food. A thinned crop produces bigger, healthier harvests.</p>
            </div>
        `,
        taskInstructions: "Identify weeds, diagnose plant health issues, and create a crop protection plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weed Identification and Removal</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In the school garden or your home garden, identify three different weeds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Weed 1 name: _________ Description: _________</div>
                        <div>Weed 2 name: _________ Description: _________</div>
                        <div>Weed 3 name: _________ Description: _________</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Draw one of the weeds you found]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Remove weeds by pulling from the root. How many did you remove? _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Crop Doctor Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Observe a crop plant and check for these signs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Yellow leaves → Possible cause: _________________</div>
                        <div>□ Holes in leaves → Possible cause: _________________</div>
                        <div>□ Wilting → Possible cause: _________________</div>
                        <div>□ Stunted growth → Possible cause: _________________</div>
                        <div>□ Discolored spots → Possible cause: _________________</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>Diagnosis:</strong> This plant has _________________</p>
                        <p><strong>Recommended treatment:</strong> _________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Crop Protection Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a weekly schedule for crop management:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Day</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Task</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Who will do it?</th>
                             </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Monday</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Wednesday</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Friday</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it better to remove pests by hand or use natural methods instead of chemical sprays?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Check your planted seeds/cuttings. Count how many have sprouted. Look for any signs of pests or disease and write down what you observe.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "The Reward (Harvesting, Storage, and Yields)",
        lessonContent: `
            <p>Today we'll learn how to know when crops are ready to harvest and how to store them properly to prevent loss!</p>
            <p><strong>Key Question:</strong> How do we know when it's time to harvest, and what happens next?</p>
            <p><strong>Signs of Maturity - How to Know When to Harvest:</strong></p>
            <ul>
                <li><strong>Maize:</strong> Husks turn brown and dry; kernels are hard and dented; squeeze a kernel - no milky liquid comes out</li>
                <li><strong>Beans:</strong> Pods become dry, brown, and brittle; beans rattle inside when shaken</li>
                <li><strong>Cassava:</strong> 8-12 months after planting; leaves turn yellow and fall off; roots are thick and firm</li>
                <li><strong>Sunflowers:</strong> Back of flower head turns from green to yellow-brown; seeds are black with white stripes</li>
            </ul>
            <p><strong>Harvesting Techniques:</strong></p>
            <ul>
                <li><strong>Maize:</strong> Twist ears downward, remove from stalk, peel back husks</li>
                <li><strong>Beans:</strong> Pull up entire plant or pick pods individually; dry in sun</li>
                <li><strong>Cassava:</strong> Cut stalk, carefully dig up roots to avoid breaking</li>
                <li><strong>Sunflowers:</strong> Cut head from stalk, rub seeds out</li>
            </ul>
            <p><strong>Proper Storage to Prevent Loss:</strong></p>
            <ul>
                <li><strong>Keep dry:</strong> Moisture causes mold and rot</li>
                <li><strong>Protect from pests:</strong> Rats, insects, and birds will eat stored crops</li>
                <li><strong>Storage methods:</strong>
                    <ul>
                        <li>Maize: Hang ears in a dry, airy place or shell and store in sealed containers</li>
                        <li>Beans: Dry completely, store in airtight containers with neem leaves to repel insects</li>
                        <li>Cassava: Can be left in ground until needed, or processed into flour/chips</li>
                        <li>Sunflower seeds: Store in cool, dry place in sealed bags</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Improving Yields for Next Season:</strong></p>
            <ul>
                <li>Save the best seeds from this harvest for next planting</li>
                <li>Add compost or manure to improve soil</li>
                <li>Practice crop rotation (don't plant the same crop in the same spot)</li>
                <li>Improve water management (mulch, drip irrigation)</li>
                <li>Control weeds better next time</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Yield Calculation</div>
                <p>If one maize plant produces 2 ears of corn, and each ear has 400 kernels, how many kernels from 50 plants? 50 × 2 × 400 = 40,000 kernels! That's a lot of food from a small plot.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rat"></i> Storage Losses</div>
                <p>In some parts of the world, rats and insects destroy up to 30% of stored grain. That's almost one-third of the harvest! Proper storage is critical for food security.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> One Seed Becomes Many</div>
                <p>One bean seed can produce a plant with 20-30 beans. If you save and plant those 30 beans next year, you could get 600-900 beans. That's the power of farming!</p>
            </div>
        `,
        taskInstructions: "Determine crop maturity, create a post-harvest plan, and calculate yields.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Harvest Readiness Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each crop, describe how you know it's ready to harvest:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Maize:</strong> _________________________________</div>
                        <div><strong>Beans:</strong> _________________________________</div>
                        <div><strong>Cassava:</strong> _________________________________</div>
                        <div><strong>Sunflowers:</strong> _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Post-Harvest Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a "Post-Harvest Plan" for your chosen crop to make it last through the dry season:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>My crop:</strong> _________________</p>
                        <p><strong>Step 1 - Harvesting method:</strong> _________________</p>
                        <p><strong>Step 2 - Drying/curing process:</strong> _________________</p>
                        <p><strong>Step 3 - Storage container/location:</strong> _________________</p>
                        <p><strong>Step 4 - Pest prevention method:</strong> _________________</p>
                        <p><strong>Step 5 - How long will it last?</strong> _________________</p>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 35px;">[Draw your storage method]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Yield Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these farming math problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) A farmer plants 100 bean seeds. Each plant produces 25 beans. How many beans does the farmer harvest? _________</p>
                        <p>b) Rats eat 15% of the stored beans. How many beans are left? _________</p>
                        <p>c) The farmer saves 200 beans for planting next season. How many beans can the family eat? _________</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Next Season Improvement Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Brainstorm three ways to get MORE food from the same plot of land next year:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most important thing you learned about growing field crops this week? How will you use this knowledge?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of the crop growing cycle including: site selection, planting, crop management, and harvesting/storage. Draw a diagram showing the complete cycle.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek7);
    console.log("grade6-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek7);
    console.log("grade6-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek7',
        metadata: grade6ScienceWeek7.metadata,
        days: grade6ScienceWeek7
    });
    console.log("grade6-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek7 = grade6ScienceWeek7;
console.log("grade6-science-week7.js loaded and registered successfully");