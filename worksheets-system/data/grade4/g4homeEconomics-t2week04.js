// Grade 4 Home Economics - Term 2 Week 4 Data
const grade4HomeEconomicsWeek4 = {
    metadata: {
        grade: 4,
        subject: "Home Economics",
        term: 2,
        week: 4,
        title: "Moist vs. Dry Cooking & Meal Planning",
        description: "Exploring moist and dry cooking methods and introducing meal planning concepts"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Food",
        subtopic: "Methods of Cooking",
        lessonContent: `
            <p>Welcome to our cooking exploration! Today we'll learn about two main ways to cook food - using water (moist) and using heat without water (dry).</p>
            <p><strong>Key Question:</strong> How does cooking with water change food differently than cooking without water?</p>
            <p><strong>Introduction:</strong> Cooking helps make food safe to eat, easier to digest, and more delicious. There are two main categories of cooking methods: moist heat and dry heat.</p>
            <p><strong>Moist Heat Cooking Methods (Using Water or Steam):</strong></p>
            <ol>
                <li><strong>Boiling:</strong> Cooking food in water that is bubbling rapidly at 100°C (212°F)</li>
                <ul>
                    <li>Examples: Boiling eggs, potatoes, pasta, rice, vegetables</li>
                    <li>Best for: Pasta, rice, eggs, root vegetables</li>
                </ul>
                <li><strong>Simmering:</strong> Cooking in liquid just below boiling point (small bubbles)</li>
                <ul>
                    <li>Examples: Soups, stews, sauces</li>
                </ul>
                <li><strong>Steaming:</strong> Cooking food with rising steam from boiling water</li>
                <ul>
                    <li>Examples: Steamed fish, vegetables, dumplings, buns</li>
                    <li>Best for: Vegetables, fish, dim sum</li>
                </ul>
            </ol>
            <p><strong>Dry Heat Cooking Methods (No Water Added):</strong></p>
            <ol>
                <li><strong>Roasting/Baking:</strong> Cooking food in an oven using hot, dry air</li>
                <ul>
                    <li>Examples: Roasted chicken, baked bread, roasted vegetables, cakes</li>
                    <li>Best for: Meat, poultry, breads, pastries, vegetables</li>
                </ul>
                <li><strong>Grilling:</strong> Cooking food on a grill or grid over direct heat</li>
                <ul>
                    <li>Examples: Grilled meat, fish, corn on the cob, kebabs</li>
                </ul>
                <li><strong>Frying:</strong> Cooking food in hot oil or fat</li>
                <ul>
                    <li>Examples: Fried eggs, fried chicken, stir-fried vegetables</li>
                </ul>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Boiled vs. Roasted Egg</div>
                <p>A boiled egg stays moist and tender. A roasted (baked) egg becomes firmer and slightly brown on top. Same food, different results!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Vegetable Comparison</div>
                <p>Boiled carrots become soft and lose some nutrients into the water. Roasted carrots become sweet, caramelized, and keep more nutrients.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Temperature Matters</div>
                <p>Water boils at 100°C and cannot get hotter. An oven can reach 250°C or more, creating browning and crispy textures that boiling cannot produce.</p>
            </div>
        `,
        taskInstructions: "Compare moist and dry cooking methods through observation and recording.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cooking Method Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort the following foods into Moist or Dry cooking methods:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Foods: Pasta, Roasted Chicken, Boiled Potatoes, Baked Bread, Grilled Fish, Steamed Vegetables, Fried Rice, Soup</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                            <div style="border: 1px solid #4A90E2; padding: 10px;">
                                <strong style="color: #4A90E2;">Moist Heat Methods</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                            <div style="border: 1px solid #E2724A; padding: 10px;">
                                <strong style="color: #E2724A;">Dry Heat Methods</strong>
                                <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation Activity (Demonstration)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Watch as your teacher demonstrates boiling and roasting. Record your observations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Boiling (Potato or Egg):</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;"><strong>Roasting (Potato or Vegetable):</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the comparison chart below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Boiling (Moist)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Roasting (Dry)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Uses water?</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Temperature range</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Food texture result</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">One example food</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety First</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List 3 safety rules to follow when cooking:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "With adult help at home, observe one food being boiled and one food being roasted/grilled. Write two sentences about the difference you notice.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Home Economics",
        topic: "Food",
        subtopic: "Meal Patterns",
        lessonContent: `
            <p>Today we'll learn how to plan healthy and balanced meals for the whole day!</p>
            <p><strong>Key Question:</strong> What makes a good meal plan, and why is it important?</p>
            <p><strong>Introduction:</strong> Meal planning means deciding what to eat ahead of time. It saves money, reduces waste, and helps us eat healthier foods.</p>
            <p><strong>Why Plan Meals?</strong></p>
            <ul>
                <li><strong>Saves money:</strong> You buy only what you need</li>
                <li><strong>Reduces waste:</strong> Less food gets thrown away</li>
                <li><strong>Saves time:</strong> You know what to cook each day</li>
                <li><strong>Healthier eating:</strong> You can include nutritious foods</li>
                <li><strong>Less stress:</strong> No last-minute "what's for dinner?" panic</li>
            </ul>
            <p><strong>Daily Meal Patterns:</strong></p>
            <ol>
                <li><strong>Breakfast:</strong> The first meal of the day (means "breaking the fast")</li>
                <ul>
                    <li>Should be eaten within 2 hours of waking</li>
                    <li>Provides energy for the whole morning</li>
                    <li>Examples: Porridge, eggs, bread, fruit, yogurt, cereal</li>
                </ul>
                <li><strong>Lunch:</strong> Midday meal (usually between 12 PM - 2 PM)</li>
                <ul>
                    <li>Recharges energy for afternoon activities</li>
                    <li>Should include carbohydrates, protein, and vegetables</li>
                    <li>Examples: Rice with stew, sandwich with fillings, pasta dish</li>
                </ul>
                <li><strong>Supper/Dinner:</strong> Evening meal (usually between 6 PM - 8 PM)</li>
                <ul>
                    <li>Often the largest or main meal of the day</li>
                    <li>Can include soup, main dish, and side dishes</li>
                    <li>Examples: Roasted meat with vegetables, fish with ugali/rice, chicken soup</li>
                </ul>
                <li><strong>Snacks (Optional):</strong> Small meals between main meals</li>
                <ul>
                    <li>Healthy snacks: Fruits, nuts, yogurt, small sandwich</li>
                    <li>Unhealthy snacks: Chips, candy, sugary drinks</li>
                </ul>
            </ol>
            <p><strong>Balanced Meal Guidelines:</strong></p>
            <ul>
                <li><strong>Carbohydrates</strong> (rice, bread, ugali, pasta) - energy</li>
                <li><strong>Proteins</strong> (meat, fish, eggs, beans, lentils) - growth and repair</li>
                <li><strong>Vegetables/Fruits</strong> - vitamins and minerals</li>
                <li><strong>Water</strong> - drink throughout the day</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sample Breakfast</div>
                <p>A good breakfast: Porridge made with milk, a slice of bread with peanut butter, and a banana. This gives carbohydrates, protein, and vitamins to start the day!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Sample Lunch</div>
                <p>A balanced lunch: Rice (carbohydrates), grilled fish (protein), and cooked cabbage (vegetables). Don't forget a glass of water!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Sample Supper</div>
                <p>A healthy supper: Vegetable soup, roasted chicken, mashed potatoes, and a side salad. The soup provides extra hydration and vegetables.</p>
            </div>
        `,
        taskInstructions: "Create a daily meal plan using the meal pattern guidelines.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Meal Pattern Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify which meal each food belongs to:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cereal with milk → _________</div>
                        <div>• Rice and beans → _________</div>
                        <div>• Roasted chicken with vegetables → _________</div>
                        <div>• Apple → could be _________ or _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Daily Meal Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a one-day meal plan with breakfast, lunch, and supper:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Meal</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Food Items</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Food Group(s)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Breakfast</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Lunch</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Supper/Dinner</td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" class="answer-space"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Breakfast Importance</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is breakfast considered the most important meal of the day? Give two reasons:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Meal Planning Benefits</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List two benefits of planning meals ahead of time:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Healthy Choices</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle the healthier snack choices:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple  OR  Potato chips</div>
                        <div>Yogurt  OR  Candy bar</div>
                        <div>Handful of nuts  OR  Sugary soda</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member what they ate for breakfast, lunch, and supper today. Write it down and circle the healthiest meal.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4HomeEconomicsWeek4);
    console.log("grade4-homeeconomics-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4HomeEconomicsWeek4);
    console.log("grade4-homeeconomics-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4HomeEconomicsWeek4',
        metadata: grade4HomeEconomicsWeek4.metadata,
        days: grade4HomeEconomicsWeek4
    });
    console.log("grade4-homeeconomics-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4HomeEconomicsWeek4 = grade4HomeEconomicsWeek4;
console.log("grade4-homeeconomics-week4.js loaded and registered successfully");