// Grade 5 Social Studies - Term 2 Week 10 Data
const grade5SocialStudiesWeek10 = {
    metadata: {
        grade: 5,
        subject: "Social Studies",
        term: 2,
        week: 10,
        title: "Regional Settlements in Zambia",
        description: "Tracing migration and settlement patterns across the provinces of Zambia"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Zambian History",
        subtopic: "Migration Settlements - Northwestern, Western, Central & Lusaka Provinces",
        lessonContent: `
            <p>Welcome to our exploration of how different communities came to settle in various parts of Zambia! Today we'll trace migration patterns into four provinces.</p>
            <p><strong>Key Question:</strong> Why did different groups of people move to and settle in specific regions of Zambia?</p>
            <p><strong>Introduction:</strong> Zambia's provinces are home to many ethnic groups, each with unique migration histories. Understanding these movements helps us appreciate the rich cultural diversity of our nation.</p>
            
            <p><strong>Northwestern Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Kaonde, Lunda (Ndembu), Luvale, Chokwe</li>
                <li><strong>Migration story:</strong> The Lunda people migrated from the Lunda Kingdom in present-day Democratic Republic of Congo around the 17th century</li>
                <li><strong>Key towns:</strong> Solwezi (provincial capital), Zambezi, Kabompo, Mwinilunga</li>
                <li><strong>Why they settled here:</strong> Abundant forests for hunting, fertile soils, and the Kabompo and Zambezi rivers for fishing and farming</li>
            </ul>
            
            <p><strong>Western Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Lozi (largest), Nkoya, Mbunda, Lunda, Luvale</li>
                <li><strong>Migration story:</strong> The Lozi people established the Barotse Kingdom in the floodplains of the Zambezi River. They developed a unique culture adapted to the annual flooding (Kuomboka ceremony)</li>
                <li><strong>Key towns:</strong> Mongu (provincial capital), Kaoma, Senanga, Sesheke, Lukulu</li>
                <li><strong>Why they settled here:</strong> The Zambezi floodplains provided rich grazing land for cattle and fertile soil for crops after floods receded</li>
            </ul>
            
            <p><strong>Central Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Lenje, Swaka, Lala, Bisa, Solomon</li>
                <li><strong>Migration story:</strong> These groups are among the earliest Bantu settlers in Zambia. The Lenje people settled around the Lukanga Swamp</li>
                <li><strong>Key towns:</strong> Kabwe (provincial capital), Kapiri Mposhi, Mkushi, Serenje, Chibombo</li>
                <li><strong>Why they settled here:</strong> Central location for trade routes, fertile soils for agriculture, and access to water from the Lunsemfwa and Lukanga rivers</li>
            </ul>
            
            <p><strong>Lusaka Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Soli, Goba, Lenje (historically)</li>
                <li><strong>Migration story:</strong> The Soli people are considered the original inhabitants of the Lusaka area. The city of Lusaka grew from a small village named after Chief Lusaka</li>
                <li><strong>Key towns:</strong> Lusaka (national capital and provincial capital), Kafue, Chongwe, Rufunsa</li>
                <li><strong>Why they settled here:</strong> The confluence of the Kafue and Chongwe rivers provided water, and the location became a trading hub. Lusaka became the capital in 1935 due to its central location</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> The Kuomboka Ceremony</div>
                <p>The Lozi people of Western Province celebrate Kuomboka, meaning "to get out of water." When the Zambezi River floods, the Litunga (king) moves from his flooded palace to higher ground in a ceremonial barge!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-city"></i> From Village to Capital</div>
                <p>Lusaka was once a small village named after Chief Lusaka of the Soli people. It became the capital of Zambia in 1935 because of its central location and good railway connection.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> The Kifwebe Mask</div>
                <p>The Lunda and Luvale people of Northwestern Province are known for their Kifwebe masks, used in important ceremonies for protection and spiritual guidance.</p>
            </div>
        `,
        taskInstructions: "Complete the migration map and answer questions about each province.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Migration Map Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On the map of Zambia, label the four provinces studied today:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; background-color: #f9f9f9;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Map of Zambia - Label Northwestern, Western, Central, and Lusaka Provinces]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Province Fact Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the table with information from today's lesson:
                    <div style="margin-left: 20px; margin-top: 10px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Province</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Main Ethnic Groups</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Provincial Capital</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Reason for Settlement</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Northwestern</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Western</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Central</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Lusaka</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Short Answer Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> From which kingdom did the Lunda people of Northwestern Province migrate?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the name of the famous Lozi ceremony celebrated in Western Province?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why did Lusaka become the capital of Zambia in 1935?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Name two natural resources or features that attracted people to Central Province.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> If you were a migrant looking for a place to settle in ancient times, what factors would be most important to you? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Choose one ethnic group from any province studied today. Write 5 sentences about their migration story and why they settled where they did.",
        homeworkDue: "Wednesday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Zambian History",
        subtopic: "Migration Settlements - Eastern, Southern & Copperbelt Provinces",
        lessonContent: `
            <p>Welcome back! Today we'll continue tracing migration settlements into the remaining provinces of Eastern, Southern, and Copperbelt.</p>
            <p><strong>Key Question:</strong> How did trade, agriculture, and mining influence settlement patterns in these provinces?</p>
            
            <p><strong>Eastern Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Chewa, Ngoni, Nsenga, Tumbuka, Kunda</li>
                <li><strong>Migration story:</strong> The Ngoni people migrated from South Africa in the early 19th century (Mfecane/Difaqane wars). They were skilled warriors who settled in the Eastern Province. The Chewa people migrated from the Luba-Lunda Kingdom in present-day DR Congo</li>
                <li><strong>Key towns:</strong> Chipata (provincial capital), Petauke, Katete, Lundazi, Chadiza, Mambwe</li>
                <li><strong>Why they settled here:</strong> Fertile soils ideal for farming (maize, cotton, groundnuts), proximity to Lake Malawi, and trade routes to Malawi and Mozambique</li>
            </ul>
            
            <p><strong>Southern Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Tonga (Batonga), Ila, Toka Leya, Namwanga, Sala</li>
                <li><strong>Migration story:</strong> The Tonga people are among the earliest Bantu settlers in Zambia, arriving around 1000-1500 CE. The Toka Leya people settled near Victoria Falls</li>
                <li><strong>Key towns:</strong> Choma (provincial capital), Livingstone, Mazabuka, Monze, Kalomo, Sinazongwe</li>
                <li><strong>Why they settled here:</strong> The Zambezi River provided water and fish, fertile soils along the riverbanks for farming (especially sugarcane at Mazabuka), and the Victoria Falls area became a cultural and trading hub</li>
            </ul>
            
            <p><strong>Copperbelt Province Settlements:</strong></p>
            <ul>
                <li><strong>Main groups:</strong> Lamba (original inhabitants), Bemba, Tonga, Lozi (migrant workers during mining era), Lunda, Luvale, Kaonde</li>
                <li><strong>Migration story:</strong> The Lamba people were the earliest inhabitants. Large-scale migration occurred when copper was discovered in the early 1900s. People from all over Zambia and neighboring countries came to work in the mines</li>
                <li><strong>Key towns:</strong> Ndola (provincial capital), Kitwe, Chingola, Mufulira, Luanshya, Kalulushi</li>
                <li><strong>Why they settled here:</strong> Rich copper deposits created jobs and economic opportunities. The railway line from the coast brought more settlers and made copper export possible</li>
            </ul>
            
            <p><strong>Summary of Settlement Patterns Across Zambia:</strong></p>
            <ul>
                <li><strong>Early migrants (Bantu expansion):</strong> Settled along rivers and fertile lands for farming</li>
                <li><strong>Ngoni migration (19th century):</strong> Military expansion from the south</li>
                <li><strong>Colonial era (early 1900s):</strong> Mining and railway construction attracted diverse populations to Copperbelt and Lusaka</li>
                <li><strong>Independence era (1964+):</strong> Movement to cities for education, jobs, and services</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> The Ngoni Warriors</div>
                <p>The Ngoni people fled north from South Africa to escape the wars of Shaka Zulu. They were fierce warriors who settled in Eastern Province and established their own kingdom under Paramount Chief Mpezeni.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-waterfall"></i> Victoria Falls - "The Smoke that Thunders"</div>
                <p>The Toka Leya people call Victoria Falls "Mosi-oa-Tunya" (The Smoke that Thunders). They believed the falls were a sacred place where spirits lived, and they settled nearby for fishing and trade.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Copperbelt - The Engine of Zambia</div>
                <p>When copper was discovered in the early 1900s, people traveled from as far as Malawi, Mozambique, and Angola to work in the mines. Today, the Copperbelt has the most diverse population of any province in Zambia.</p>
            </div>
        `,
        taskInstructions: "Complete the settlement comparison chart and analyze migration patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Migration Map Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On the same map from Monday, add and label Eastern, Southern, and Copperbelt provinces:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; background-color: #f9f9f9;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Map of Zambia - Add Eastern, Southern, and Copperbelt Provinces]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Settlement Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this table for today's three provinces:
                    <div style="margin-left: 20px; margin-top: 10px; overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Province</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Main Ethnic Groups</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Key Town/Capital</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Main Reason for Settlement</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Eastern</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Southern</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Copperbelt</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">__________</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ngoni Migration Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> From which country did the Ngoni people migrate? What caused them to leave?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name the Paramount Chief of the Ngoni people in Eastern Province.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Copperbelt Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What natural resource made the Copperbelt province attractive to settlers?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is the Copperbelt population more diverse than other provinces?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Comparison and Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> How were the reasons for settlement in Eastern Province different from those in Copperbelt Province?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> If you could visit any province studied this week, which would you choose and why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> What have you learned this week about how geography (rivers, soil, minerals) influenced where people settled in Zambia?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write a paragraph comparing the settlement reasons of Eastern Province (farming) vs. Copperbelt Province (mining). Which would you have chosen and why?",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5SocialStudiesWeek10);
    console.log("grade5-socialstudies-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5SocialStudiesWeek10);
    console.log("grade5-socialstudies-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5SocialStudiesWeek10',
        metadata: grade5SocialStudiesWeek10.metadata,
        days: grade5SocialStudiesWeek10
    });
    console.log("grade5-socialstudies-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5SocialStudiesWeek10 = grade5SocialStudiesWeek10;
console.log("grade5-socialstudies-week10.js loaded and registered successfully");