// Grade 5 Science - Term 3 Week 2 Data
const grade5ScienceWeek2 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 3,
        week: 2,
        title: "Crop-Soil Alignment, Vertebrate Classification & Economic Importance",
        description: "Analyzing soil data for crop suitability, classifying vertebrates, and evaluating economic importance of animals"
    },
    
    monday: {
        subject: "Science",
        topic: "Agriculture & Soil Science",
        subtopic: "Crop-Soil Alignment: Analyzing Experimental Soil Data",
        lessonContent: `
            <p>Welcome! Today we'll become agricultural scientists as we analyze soil data to determine which crops grow best in different soil types.</p>
            <p><strong>Key Question:</strong> How does soil type affect which crops can grow successfully?</p>
            <p><strong>Introduction:</strong> Not all soils are the same! Farmers must understand their soil before deciding what to plant. Different crops have different soil preferences.</p>
            <p><strong>Main Soil Types:</strong></p>
            <ol>
                <li><strong>Sandy Soil:</strong> Drains quickly, warms up fast, but doesn't hold nutrients well</li>
                <li><strong>Clay Soil:</strong> Holds water and nutrients, but drains slowly and can be hard to work</li>
                <li><strong>Silty Soil:</strong> Fertile and holds moisture, but can be easily compacted</li>
                <li><strong>Loamy Soil:</strong> The "perfect" soil - mixture of sand, silt, and clay with organic matter</li>
                <li><strong>Peaty Soil:</strong> High in organic matter, retains water, acidic</li>
                <li><strong>Chalky Soil:</strong> Alkaline, stony, drains quickly</li>
            </ol>
            <p><strong>Crop Preferences:</strong></p>
            <ul>
                <li>Carrots and potatoes prefer loose, sandy soil</li>
                <li>Rice grows best in clay soil that holds water</li>
                <li>Most vegetables thrive in loamy soil</li>
                <li>Blueberries like peaty, acidic soil</li>
                <li>Spinach grows well in silty soil</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Soil Drainage Test</div>
                <p>Sandy soil drains in minutes, while clay soil might take hours or days! That's why rice (which needs standing water) grows in clay, but carrots (which rot in wet soil) prefer sand.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> pH Matters</div>
                <p>Most vegetables prefer neutral pH (around 7). But potatoes like slightly acidic soil (pH 5.0-6.0), while asparagus prefers alkaline soil (pH 7.0-8.0).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Holding Capacity</div>
                <p>Clay soil can hold 4x more water than sandy soil! During a drought, clay soils keep plants alive longer, but in rainy seasons, sandy soils prevent root rot.</p>
            </div>
        `,
        taskInstructions: "Analyze experimental soil data and recommend crops for planting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Data Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Study the soil sample data below and answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Soil Sample</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Texture</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Drainage Time</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">pH Level</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Nutrient Content</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample A</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Gritty, coarse</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2 minutes</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">6.5</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Low</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample B</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sticky, smooth</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">6 hours</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">7.0</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">High</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample C</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Crumbly, dark</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">15 minutes</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">6.8</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Very High</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sample D</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Soft, flour-like</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">30 minutes</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">7.5</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Medium</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Soil Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Identify each soil sample type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sample A: _________ (Sandy / Clay / Loamy / Silty)</div>
                        <div>Sample B: _________ (Sandy / Clay / Loamy / Silty)</div>
                        <div>Sample C: _________ (Sandy / Clay / Loamy / Silty)</div>
                        <div>Sample D: _________ (Sandy / Clay / Loamy / Silty)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Crop Recommendations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Based on the data, recommend crops for each soil sample:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Sample A</strong> (fast draining, low nutrients): Best crops? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Sample B</strong> (slow draining, high nutrients): Best crops? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Sample C</strong> (perfect texture, very high nutrients): Best crops? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Sample D</strong> (silty, neutral-alkaline): Best crops? _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Farmer's Dilemma</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A farmer has Sample B soil but wants to grow carrots. What advice would you give?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect a small soil sample from your garden or a nearby field. Describe its texture, color, and what you think would grow well in it.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Biology - Classification",
        subtopic: "Taxonomy: Classifying Vertebrate Animals",
        lessonContent: `
            <p>Today we'll become taxonomists as we learn to classify vertebrate animals into their major classes!</p>
            <p><strong>Key Question:</strong> How do scientists group animals with backbones?</p>
            <p><strong>Introduction:</strong> Vertebrates are animals with a backbone. Scientists classify them into 5 main classes based on their physical and biological characteristics.</p>
            <p><strong>The 5 Vertebrate Classes:</strong></p>
            <ol>
                <li><strong>Mammals:</strong> Have fur/hair, produce milk for babies, warm-blooded, breathe air
                    <ul><li>Examples: Humans, dogs, whales, bats, elephants</li></ul>
                </li>
                <li><strong>Birds:</strong> Have feathers, wings, beak, lay eggs, warm-blooded, breathe air
                    <ul><li>Examples: Eagles, penguins, ostriches, parrots</li></ul>
                </li>
                <li><strong>Reptiles:</strong> Have dry scaly skin, lay eggs on land, cold-blooded, breathe air
                    <ul><li>Examples: Snakes, lizards, turtles, crocodiles</li></ul>
                </li>
                <li><strong>Amphibians:</strong> Moist smooth skin, lay eggs in water, cold-blooded, can breathe through skin
                    <ul><li>Examples: Frogs, toads, salamanders, newts</li></ul>
                </li>
                <li><strong>Fish:</strong> Have scales and fins, lay eggs in water, cold-blooded, breathe using gills
                    <ul><li>Examples: Salmon, sharks, goldfish, clownfish</li></ul>
                </li>
            </ol>
            <p><strong>Key Classification Characteristics:</strong></p>
            <ul>
                <li><strong>Body Covering:</strong> Fur, feathers, scales, or smooth skin</li>
                <li><strong>Temperature Control:</strong> Warm-blooded (endotherm) vs Cold-blooded (ectotherm)</li>
                <li><strong>Breathing Method:</strong> Lungs, gills, or skin</li>
                <li><strong>Reproduction:</strong> Live birth or eggs</li>
                <li><strong>Baby Care:</strong> Milk production or not</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Warm vs Cold Blooded</div>
                <p>Warm-blooded animals (mammals, birds) maintain constant body temperature. Cold-blooded animals (reptiles, amphibians, fish) rely on the environment to warm up or cool down.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Amphibian Double Life</div>
                <p>"Amphibian" means "double life" - they start in water breathing with gills, then develop lungs and live on land as adults!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dragon"></i> Reptile Scales</div>
                <p>Reptile scales are made of keratin - the same protein as human fingernails! These scales prevent water loss, letting reptiles live in dry deserts.</p>
            </div>
        `,
        taskInstructions: "Classify vertebrate animals into their major classes based on physical and biological characteristics.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classification Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the vertebrate classification chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Class</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Body Covering</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Temperature</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Breathing</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Reproduction</th>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Mammals</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Fur/Hair</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Warm</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Lungs</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Live birth + milk</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Birds</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Reptiles</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Amphibians</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Fish</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Classify each animal into the correct vertebrate class:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Penguin: _________</div>
                        <div>Crocodile: _________</div>
                        <div>Dolphin: _________</div>
                        <div>Salamander: _________</div>
                        <div>Shark: _________</div>
                        <div>Ostrich: _________</div>
                        <div>Turtle: _________</div>
                        <div>Frog: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Characteristic Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match the description to the vertebrate class:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Has feathers and lays eggs ___ a. Mammal</div>
                        <div>2. Has fur and produces milk ___ b. Bird</div>
                        <div>3. Has moist skin, lives on land and water ___ c. Reptile</div>
                        <div>4. Has scales and breathes with gills ___ d. Amphibian</div>
                        <div>5. Has dry scaly skin and lays eggs on land ___ e. Fish</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mystery Animal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A mystery animal has: smooth moist skin, lays eggs in water, breathes through skin, cold-blooded. What class is it?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own mystery animal description and have a partner classify it:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 vertebrate animals in your neighborhood or local area. Classify each one and list 2 characteristics that helped you decide.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Economics & Biology",
        subtopic: "Economic Importance of Vertebrate Animals",
        lessonContent: `
            <p>Today we'll explore how vertebrate animals contribute to our economy and daily lives in many important ways!</p>
            <p><strong>Key Question:</strong> Why are vertebrate animals valuable to humans beyond just being interesting creatures?</p>
            <p><strong>Introduction:</strong> Animals provide us with food, companionship, materials, and even bring tourists to visit our countries!</p>
            <p><strong>Four Main Economic Categories:</strong></p>
            <ol>
                <li><strong>Sources of Food:</strong>
                    <ul>
                        <li>Meat: Cattle (beef), pigs (pork), chickens (poultry), goats, sheep (lamb)</li>
                        <li>Fish & Seafood: Salmon, tuna, tilapia, catfish</li>
                        <li>Dairy: Milk, cheese, yogurt from cows, goats, sheep</li>
                        <li>Eggs: From chickens, ducks, quail</li>
                    </ul>
                </li>
                <li><strong>Pets (Companionship & Service):</strong>
                    <ul>
                        <li>Companions: Dogs, cats, birds, fish, hamsters, rabbits</li>
                        <li>Working animals: Guide dogs for blind, therapy animals, police dogs</li>
                        <li>Pet industry: Food, toys, veterinary care, grooming - a multi-billion dollar industry!</li>
                    </ul>
                </li>
                <li><strong>Raw Materials:</strong>
                    <ul>
                        <li>Leather: From cattle, goats, pigs (for shoes, bags, furniture)</li>
                        <li>Wool: From sheep (for clothing, blankets)</li>
                        <li>Feathers: From chickens, ducks, geese (pillows, insulation)</li>
                        <li>Bone/hooves: Glue, gelatin, buttons, fertilizer</li>
                    </ul>
                </li>
                <li><strong>Tourist Attractions:</strong>
                    <ul>
                        <li>Wildlife safaris: Lions, elephants, giraffes in Africa</li>
                        <li>Whale watching: Orcas, humpback whales</li>
                        <li>Bird sanctuaries: Penguins, flamingos, eagles</li>
                        <li>Aquariums and zoos: Sharks, dolphins, pandas</li>
                        <li>Ecotourism brings millions of dollars to local communities!</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> The Pet Industry</div>
                <p>In the US alone, people spend over $100 billion annually on pets - food, vet care, toys, grooming, and boarding! That's more than the GDP of many small countries.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> From Sheep to Sweater</div>
                <p>One sheep produces 2-8 kilograms of wool per year. That wool can make 5-10 sweaters! The global wool trade is worth billions of dollars.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-binoculars"></i> Wildlife Tourism</div>
                <p>In Kenya, wildlife tourism brings over $2 billion annually and supports hundreds of thousands of jobs. A single lion can be worth more alive (through tourism) than dead (through hunting)!</p>
            </div>
        `,
        taskInstructions: "Evaluate the direct economic importance of vertebrate animals in four categories.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Four Categories Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the chart by adding examples in each economic category:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Economic Category</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Animal Examples</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Products/Services</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Food Source</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Pets</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Raw Materials</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Tourist Attractions</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px;"></td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Economic Impact Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each scenario, identify which economic category is being described:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A family buys a goldfish and an aquarium: _________</div>
                        <div>B. A farmer sells wool to a textile factory: _________</div>
                        <div>C. Tourists pay to see penguins in South Africa: _________</div>
                        <div>D. A restaurant serves grilled salmon: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Local Connections</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three vertebrate animals that are economically important in your local community. Describe their economic value:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection & Opinion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which economic category do you think is most important to your country? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How does protecting wildlife benefit a country's economy?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Design a promotional poster showing ONE economic benefit of vertebrates. Include a catchy slogan:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult family member: What animal products did your family use today? (Examples: leather shoes, eggs, wool blanket, pet food) List at least 5 and explain the economic value.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek2',
        metadata: grade5ScienceWeek2.metadata,
        days: grade5ScienceWeek2
    });
    console.log("grade5-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek2 = grade5ScienceWeek2;
console.log("grade5-science-week2.js loaded and registered successfully");