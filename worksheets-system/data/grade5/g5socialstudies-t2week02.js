// Grade 5 Social Studies - Term 2 Week 2
const grade5SocialStudiesWeek2 = {
    metadata: {
        grade: 5,
        subject: "Social Studies",
        term: 2,
        week: 2,
        title: "Economic Activities of Zambia",
        description: "Investigating primary and industrial economic activities across Zambian provinces: farming, fishing, forestry, manufacturing, tourism, and mining"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Economic Activities",
        subtopic: "Primary Economic Activities Across Zambian Provinces",
        lessonContent: `
            <p>Welcome to our exploration of Zambia's economy! Today we'll learn about the primary economic activities that people do across different provinces.</p>
            <p><strong>Key Question:</strong> What are primary economic activities, and which ones are found in different Zambian provinces?</p>
            <p><strong>Introduction:</strong> Primary economic activities involve collecting or harvesting natural resources directly from the earth. These are the first step in producing goods people use every day.</p>
            <p><strong>Farming in Zambia:</strong></p>
            <ul>
                <li><strong>Subsistence Farming:</strong> Growing food for your own family (most common in Zambia)</li>
                <li><strong>Commercial Farming:</strong> Growing crops to sell for money</li>
                <li><strong>Main Crops by Province:</strong>
                    <ul>
                        <li>Central Province: Maize, cotton, tobacco</li>
                        <li>Copperbelt: Maize, soybeans</li>
                        <li>Eastern Province: Maize, cotton, groundnuts, sunflower</li>
                        <li>Luapula: Cassava, sweet potatoes, millet</li>
                        <li>Lusaka: Maize, vegetables (for city markets)</li>
                        <li>Muchinga: Maize, beans, sunflowers</li>
                        <li>Northern: Cassava, coffee, bananas</li>
                        <li>North-Western: Maize, cassava, rice</li>
                        <li>Southern Province: Maize (largest producer), sugarcane (Nakambala Estate)</li>
                        <li>Western Province: Maize, cassava, rice (in floodplains)</li>
                    </ul>
                </li>
                <li><strong>Livestock Farming:</strong> Cattle (Southern, Western, Central, Lusaka), goats, pigs, chickens</li>
            </ul>
            <p><strong>Fishing in Zambia:</strong></p>
            <ul>
                <li><strong>Major Fishing Areas:</strong> Lake Kariba (Southern Province), Lake Bangweulu (Luapula/Northern), Lake Mweru (Luapula), Lake Tanganyika (Northern), Zambezi River</li>
                <li><strong>Main Fish Species:</strong> Bream (buka), Tigerfish, Kapenta, Catfish</li>
                <li><strong>Fishing Provinces:</strong> Luapula, Northern, Southern, Western, Central</li>
            </ul>
            <p><strong>Forestry in Zambia:</strong></p>
            <ul>
                <li><strong>Forest Products:</strong> Timber (mukula, teak, pine), charcoal, firewood, wild fruits (masuku, mfungo), mushrooms, honey</li>
                <li><strong>Forestry Provinces:</strong> Copperbelt (industrial timber), North-Western (large forests), Muchinga, Northern, Luapula, Western (teak forests)</li>
                <li><strong>Forest Uses:</strong> Building materials, furniture, fuel, food from forest products</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> Zambia's Maize Belt</div>
                <p>Southern and Central Provinces are known as Zambia's "maize belt." The large commercial farms here produce most of the country's maize for nshima!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Kapenta Fishing on Lake Kariba</div>
                <p>Lake Kariba is famous for kapenta fishing. Fishermen use special lights at night to attract these small fish. The kapenta is then dried and sold across Zambia!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Mukula Wood</div>
                <p>Mukula (also called bloodwood or rosewood) is a valuable timber tree found in parts of Zambia. It is used to make high-quality furniture.</p>
            </div>
        `,
        taskInstructions: "Create a province resource map and investigate primary economic activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Province Economic Map</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On the Zambia map below, draw symbols to show economic activities in each province:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Use these symbols:</strong></div>
                        <div>🌽 = Farming (name the main crop)</div>
                        <div>🐟 = Fishing</div>
                        <div>🌳 = Forestry</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 100px;">[Map of Zambia's 10 Provinces for Drawing]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each province to its main primary economic activity:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Luapula Province ___ a. Large-scale maize farming</div>
                        <div>2. Southern Province ___ b. Lake Bangweulu fishing</div>
                        <div>3. North-Western Province ___ c. Teak forests and forestry</div>
                        <div>4. Western Province ___ d. Coffee and banana farming</div>
                        <div>5. Northern Province ___ e. Cattle ranching</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Investigation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do you think Luapula and Northern provinces are best for fishing?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between subsistence farming and commercial farming?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How do forests help people in rural Zambian communities?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member what economic activities happen in your province or district. Write down three examples.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Economic Activities",
        subtopic: "Industrial Economic Activities in Zambia",
        lessonContent: `
            <p>Today we'll explore Zambia's industrial economic activities - how raw materials are turned into products we use!</p>
            <p><strong>Key Question:</strong> What are secondary/industrial economic activities, and which ones are important in Zambia?</p>
            <p><strong>Introduction:</strong> Industrial (secondary) economic activities take raw materials from primary activities and process them into finished goods. These activities create jobs and add value to our natural resources.</p>
            <p><strong>Manufacturing in Zambia:</strong></p>
            <ul>
                <li><strong>Food Processing:</strong>
                    <ul>
                        <li>Maize milling: Turning maize into breakfast meal, roller meal, and nshima flour</li>
                        <li>Sugar production: Nakambala Sugar Estate (Southern Province) produces sugar for Zambia</li>
                        <li>Cooking oil production: From sunflower, soybeans, and groundnuts</li>
                        <li>Dairy products: Milk, cheese, yogurt (Lusaka, Copperbelt)</li>
                        <li>Beverages: Soft drinks, juices, beer (Mosi Lager, Munkoyo)</li>
                    </ul>
                </li>
                <li><strong>Textiles and Clothing:</strong>
                    <ul>
                        <li>Cotton ginning (turning raw cotton into thread)</li>
                        <li>Fabric printing: Chitenge materials</li>
                        <li>Clothing manufacturing</li>
                    </ul>
                </li>
                <li><strong>Other Manufacturing:</strong>
                    <ul>
                        <li>Cement production (Ndola, Lusaka)</li>
                        <li>Fertilizer production</li>
                        <li>Furniture making (using Zambian timber)</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Tourism in Zambia:</strong></p>
            <ul>
                <li><strong>Major Tourist Attractions:</strong>
                    <ul>
                        <li>Victoria Falls / Mosi-oa-Tunya (Livingstone, Southern Province)</li>
                        <li>National Parks: South Luangwa (Eastern), Kafue (Central), Lower Zambezi, Liuwa Plain (Western)</li>
                        <li>Lake Kariba, Lake Tanganyika, Lake Bangweulu</li>
                        <li>Cultural villages and traditional ceremonies (Kuomboka, Ncwala, Likumbi Lya Mize)</li>
                    </ul>
                </li>
                <li><strong>Tourism Services:</strong> Hotels, lodges, tour operators, guides, souvenir shops, restaurants</li>
                <li><strong>Tourism Creates Jobs:</strong> Drivers, hotel staff, cooks, guides, security, craft makers</li>
            </ul>
            <p><strong>Mining in Zambia:</strong></p>
            <ul>
                <li><strong>Copper Mining (Copperbelt and North-Western Province):</strong>
                    <ul>
                        <li>Copper is Zambia's main export</li>
                        <li>Major mines: Konkola, Nchanga, Mufulira, Lumwana, Kansanshi</li>
                        <li>Copper is used for electrical wires, pipes, coins, electronics</li>
                    </ul>
                </li>
                <li><strong>Cobalt Mining:</strong> A by-product of copper mining, used for batteries</li>
                <li><strong>Gemstones:</strong>
                    <ul>
                        <li>Emeralds (Kafubu River area, Copperbelt)</li>
                        <li>Amethyst (Southern Province)</li>
                        <li>Aquamarine</li>
                    </ul>
                </li>
                <li><strong>Other Minerals:</strong> Manganese, limestone (for cement), coal (Southern Province)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Zambia's Copper History</div>
                <p>Zambia is Africa's second-largest copper producer. Copper mining on the Copperbelt started in the 1920s and has shaped the country's economy ever since!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Mosi-oa-Tunya - The Smoke that Thunders</div>
                <p>Victoria Falls is one of the Seven Natural Wonders of the World. It attracts tourists from all over the globe, bringing important money to Zambia!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> From Cane to Sugar</div>
                <p>Zambia's Nakambala Sugar Estate grows sugar cane that is processed into sugar. This sugar is used in Zambian homes and also exported to other countries.</p>
            </div>
        `,
        taskInstructions: "Classify industrial activities and create a tourism poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classification Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put each activity into the correct category: Manufacturing, Tourism, or Mining
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                            <div style="border: 1px solid #4A90E2; padding: 10px; background: #E8F0FE;">
                                <strong>🏭 Manufacturing</strong>
                                <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                            </div>
                            <div style="border: 1px solid #4A90E2; padding: 10px; background: #E8F0FE;">
                                <strong>✈️ Tourism</strong>
                                <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                            </div>
                            <div style="border: 1px solid #4A90E2; padding: 10px; background: #E8F0FE;">
                                <strong>⛏️ Mining</strong>
                                <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                            </div>
                        </div>
                        <div style="margin-top: 10px; font-size: 14px; color: #666;">
                            <em>Choose from: cotton ginning, copper mining, hotel keeping, maize milling, emerald mining, tour guiding, furniture making, cement production, safari driving, game viewing, cooking oil pressing, cobalt extraction</em>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tourism Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a colorful poster to attract tourists to one of Zambia's attractions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Choose one: Victoria Falls, South Luangwa National Park, Lake Kariba, or a traditional ceremony</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is copper mining important to Zambia's economy?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How does tourism help create jobs for Zambian people?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Explain how maize farming (primary activity) connects to maize milling (manufacturing):
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which industrial activity do you think is most important for Zambia's future? Explain why.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at five items in your home. Identify where each item came from. Was it grown, mined, or manufactured? Write your findings.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5SocialStudiesWeek2);
    console.log("grade5-socialstudies-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5SocialStudiesWeek2);
    console.log("grade5-socialstudies-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5SocialStudiesWeek2',
        metadata: grade5SocialStudiesWeek2.metadata,
        days: grade5SocialStudiesWeek2
    });
    console.log("grade5-socialstudies-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5SocialStudiesWeek2 = grade5SocialStudiesWeek2;
console.log("grade5-socialstudies-week2.js loaded and registered successfully");