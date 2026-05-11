// Grade 6 Social Studies - Term 3 Week 7 Data
const grade6SocialStudiesWeek7 = {
    metadata: {
        grade: 6,
        subject: "Social Studies",
        term: 3,
        week: 7,
        title: "Food Security and Shortages",
        description: "Understanding causes of food shortages, ways to achieve food security, and the link between nutrition and productivity"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Food Security",
        subtopic: "Causes of Food Shortages",
        lessonContent: `
            <p>Welcome to our study of food security! Today we'll explore why some areas in Africa lack enough food to feed their people.</p>
            <p><strong>Key Question:</strong> Why do some communities have plenty of food while others face shortages?</p>
            <p><strong>Introduction:</strong> Food security means having reliable access to enough nutritious food. When people don't have this, we call it food shortage or famine. Africa has rich agricultural potential, yet many areas still struggle with hunger.</p>
            <p><strong>Natural Causes of Food Shortages:</strong></p>
            <ol>
                <li><strong>Droughts:</strong> Long periods without rain that dry up crops and kill livestock</li>
                <li><strong>Floods:</strong> Heavy rains that wash away crops and destroy farmland</li>
                <li><strong>Pests and Diseases:</strong> Locust swarms, armyworms, or plant diseases that destroy harvests</li>
                <li><strong>Climate Change:</strong> Unpredictable weather patterns making farming difficult</li>
            </ol>
            <p><strong>Human Causes of Food Shortages:</strong></p>
            <ol>
                <li><strong>War and Conflict:</strong> Fighting destroys farms, markets, and roads; farmers cannot plant or harvest safely</li>
                <li><strong>Poor Farming Methods:</strong> Using the same soil year after year without letting it rest (no crop rotation)</li>
                <li><strong>Lack of Storage:</strong> Without proper silos or warehouses, harvested food rots before it can be sold or eaten</li>
                <li><strong>Poor Roads and Transport:</strong> Even when food is grown, it cannot reach markets or hungry people</li>
                <li><strong>Population Growth:</strong> More people needing food than the land can produce</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> The Horn of Africa Drought</div>
                <p>In 2011, a severe drought in Somalia, Kenya, and Ethiopia affected over 12 million people. Crops failed completely for several seasons, and livestock died by the thousands.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fist-raised"></i> Conflict and Hunger</div>
                <p>In South Sudan, years of civil war have forced many farmers to flee their land. Without planting or harvesting, food production collapsed, and millions faced starvation.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-warehouse"></i> Post-Harvest Losses</div>
                <p>In some African countries, up to 40% of harvested food spoils before reaching consumers because of poor storage facilities, lack of refrigeration, and bad roads.</p>
            </div>
        `,
        taskInstructions: "Identify and categorize causes of food shortages, then propose solutions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cause Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these causes into Natural and Human causes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Drought • War • Floods • Poor farming methods • Pests • Lack of storage • Climate change • Population growth</div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                        <div style="border: 2px solid #4CAF50; padding: 10px;">
                            <strong style="color: #4CAF50;">🌿 Natural Causes</strong>
                            <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                        </div>
                        <div style="border: 2px solid #FF5722; padding: 10px;">
                            <strong style="color: #FF5722;">👤 Human Causes</strong>
                            <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Case Study Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each scenario and identify the cause of food shortage:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> "For six months, no rain fell in the village. The maize plants turned brown and died."</div>
                        <div>Cause: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> "Fighting between two groups forced farmers to abandon their fields. Many crops were burned."</div>
                        <div>Cause: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> "The farmer planted maize on the same land for ten years. The soil became weak and produced less food each year."</div>
                        <div>Cause: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which cause of food shortage do you think is most serious in Africa today? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Can natural causes be prevented? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult family member: Has our community ever experienced a food shortage? What caused it? Write a short paragraph about what you learn.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Social Studies",
        topic: "Food Security",
        subtopic: "Achieving Food Security",
        lessonContent: `
            <p>Today we'll explore solutions! How can communities and countries ensure everyone has enough to eat?</p>
            <p><strong>Key Question:</strong> What can we do to prevent food shortages and achieve food security?</p>
            <p><strong>Introduction:</strong> Food security exists when all people, at all times, have physical and economic access to sufficient, safe, and nutritious food. There are many practical ways to achieve this!</p>
            <p><strong>Solutions for Food Security:</strong></p>
            <ol>
                <li><strong>Crop Diversification:</strong> Growing different types of food instead of just one crop
                    <ul>
                        <li>If one crop fails, others may survive</li>
                        <li>Different crops use different nutrients from soil</li>
                        <li>Examples: planting maize, beans, sweet potatoes, and vegetables together</li>
                    </ul>
                </li>
                <li><strong>Irrigation:</strong> Bringing water to crops when rain doesn't come
                    <ul>
                        <li>Drip irrigation saves water while watering plants directly</li>
                        <li>Small dams and wells store water for dry seasons</li>
                        <li>Solar-powered pumps help farmers access groundwater</li>
                    </ul>
                </li>
                <li><strong>Efficient Food Storage:</strong> Keeping harvested food safe so it doesn't spoil
                    <ul>
                        <li>Hermetic (airtight) grain bags prevent pests and rot</li>
                        <li>Raised silos keep stored grain dry and away from rodents</li>
                        <li>Solar dryers preserve fruits and vegetables</li>
                    </ul>
                </li>
                <li><strong>Good Roads and Transport:</strong> Connecting farms to markets</li>
                <li><strong>Peace and Stability:</strong> Ending conflicts so farmers can work safely</li>
                <li><strong>Education and Training:</strong> Teaching modern, sustainable farming methods</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Crop Diversification Success</div>
                <p>In Malawi, farmers who planted maize alongside nitrogen-fixing legumes like pigeon peas saw higher yields. The peas improved soil fertility while providing extra food!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Simple Irrigation</div>
                <p>In dry regions of Kenya, farmers use "sand dams" - low walls across seasonal rivers that trap sand and water. Water stored in the sand stays cool and doesn't evaporate.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Reducing Waste</div>
                <p>In Nigeria, new "Purdue Improved Crop Storage" (PICS) bags keep cowpeas safe for over a year without chemicals. This reduced post-harvest losses from 30% to almost zero!</p>
            </div>
        `,
        taskInstructions: "Identify solutions to food shortage problems and create an action plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match Problem to Solution</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines connecting each problem with the best solution:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• No rain for months</div>
                                <div>• All farmers grow only maize</div>
                                <div>• Harvested grain gets eaten by weevils</div>
                                <div>• Food cannot reach town market</div>
                                <div>• Farmers don't know new techniques</div>
                            </div>
                            <div>
                                <div>→ Build better roads</div>
                                <div>→ Irrigation systems</div>
                                <div>→ Airtight storage bags</div>
                                <div>→ Farming workshops</div>
                                <div>→ Crop diversification</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Action Plan for a Village</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A village faces food shortages due to drought and poor storage. Write an action plan with three solutions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Solution 1: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">Solution 2: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">Solution 3: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Benefits of Food Security</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three benefits when a community achieves food security:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which solution do you think would help your community the most? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Research one traditional African food storage method (like a granary or storage basket). Draw it and explain how it works.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Food Security",
        subtopic: "Nutrition and Productivity",
        lessonContent: `
            <p>Today we'll discover the powerful connection between the food we eat and the success of a country!</p>
            <p><strong>Key Question:</strong> How does good nutrition affect a country's workforce and productivity?</p>
            <p><strong>Introduction:</strong> Food is more than just energy - it's the fuel for a nation's development. When people eat nutritious food, they are healthier, stronger, and can work better. This benefits the whole country!</p>
            <p><strong>How Nutrition Affects Individuals:</strong></p>
            <ul>
                <li><strong>Physical Health:</strong> Proper nutrition builds strong bodies that resist disease</li>
                <li><strong>Mental Development:</strong> Children need good food for their brains to grow and learn</li>
                <li><strong>Energy Levels:</strong> Nutritious food provides sustained energy for work and play</li>
                <li><strong>Immune System:</strong> Vitamins and minerals help fight off illness</li>
            </ul>
            <p><strong>How Nutrition Affects the Country:</strong></p>
            <ol>
                <li><strong>Productive Workforce:</strong> Healthy workers miss fewer days of work and produce more</li>
                <li><strong>Better School Performance:</strong> Well-nourished children learn better and stay in school longer</li>
                <li><strong>Lower Healthcare Costs:</strong> Fewer sick people means less money spent on hospitals</li>
                <li><strong>Economic Growth:</strong> Healthy workers and educated children build a stronger economy</li>
                <li><strong>Breaking the Poverty Cycle:</strong> Better nutrition leads to better work, leading to better income</li>
            </ol>
            <p><strong>The Cost of Malnutrition:</strong></p>
            <ul>
                <li>Stunting (being too short for one's age) affects 1 in 3 young children in some African countries</li>
                <li>Malnourished workers earn up to 20% less than healthy workers</li>
                <li>Countries lose billions of dollars each year due to poor nutrition</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> The First 1000 Days</div>
                <p>The period from pregnancy to a child's second birthday is critical. Good nutrition during these 1000 days affects brain development for life. Malnutrition during this time cannot be fully reversed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-briefcase"></i> Worker Productivity</div>
                <p>A study in Ethiopia found that iron-deficient workers were 17% less productive in physical jobs. When they received iron supplements, their productivity matched healthy workers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> National Impact</div>
                <p>Countries that have reduced malnutrition saw their economies grow faster. Ghana cut stunting from 35% to 19% between 2003 and 2014, during a period of strong economic growth.</p>
            </div>
        `,
        taskInstructions: "Analyze the link between nutrition and national development.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Nutrition Chain Reaction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this flow chart showing how nutrition affects a country:
                    <div style="display: grid; grid-template-columns: 1fr; gap: 5px; margin-top: 10px; text-align: center;">
                        <div style="border: 1px solid #ccc; padding: 10px;">Good Nutrition → ???</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">↓</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">Better Health → ???</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">↓</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">More Productivity → ???</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">↓</div>
                        <div style="border: 1px solid #ccc; padding: 10px;">Stronger Economy → ???</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this table comparing a well-nourished country vs. a malnourished country:
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <tr style="background-color: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ddd;">Factor</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Well-Nourished Country</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Malnourished Country</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Worker energy levels</td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Children's school performance</td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Healthcare costs</td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">Economic growth</td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                            <td style="padding: 8px; border: 1px solid #ddd; height: 40px;"></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Case Study Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the scenario and answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <em>"A rural community has experienced drought for two years. Many children show signs of malnutrition, including being underweight and tired. Farmers lack energy to work their fields. The local school reports many absences because children are sick or needed to find food."</em>
                    </div>
                    <div style="margin-top: 15px;">How does malnutrition affect this community's current productivity?</div>
                    <div class="answer-space" style="height: 60px;"></div>
                    <div style="margin-top: 10px;">How might this affect the community's future if nothing changes?</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Personal Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How does the food you eat affect your ability to learn in school?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think governments should invest in nutrition programs?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview two adults: Ask them how their energy and work change when they eat a good meal vs. when they skip a meal. Write a paragraph about what you learn.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6SocialStudiesWeek7);
    console.log("grade6-socialstudies-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6SocialStudiesWeek7);
    console.log("grade6-socialstudies-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6SocialStudiesWeek7',
        metadata: grade6SocialStudiesWeek7.metadata,
        days: grade6SocialStudiesWeek7
    });
    console.log("grade6-socialstudies-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6SocialStudiesWeek7 = grade6SocialStudiesWeek7;
console.log("grade6-socialstudies-week7.js loaded and registered successfully");