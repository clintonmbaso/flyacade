// Grade 5 Science - Term 1 Week 10 Data
const grade5ScienceWeek10 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 1,
        week: 10,
        title: "Nutrient Classification & Testing",
        description: "Classifying basic food nutrients, understanding vitamins, minerals, and fibre, and conducting practical food tests"
    },
    
    monday: {
        subject: "Science",
        topic: "Nutrition",
        subtopic: "Introduction to Nutrition: Basic Food Nutrients",
        lessonContent: `
            <p>Welcome to our study of nutrition! Today we'll learn about the essential nutrients our bodies need from food.</p>
            <p><strong>Key Question:</strong> Why do we need to eat different types of food?</p>
            <p><strong>Introduction:</strong> Nutrients are substances in food that our bodies need to grow, repair themselves, and function properly. No single food contains all the nutrients we need!</p>
            <p><strong>The Basic Food Nutrients:</strong></p>
            <ol>
                <li><strong>Proteins:</strong> The body's building blocks. They help build and repair muscles, skin, hair, and organs.</li>
                <li><strong>Carbohydrates:</strong> The body's main source of energy. They fuel our brain, muscles, and all body activities.</li>
                <li><strong>Fats and Oils (Lipids):</strong> Stored energy, insulation for warmth, and protection for organs. They also help absorb certain vitamins.</li>
            </ol>
            <p><strong>Food Sources:</strong></p>
            <ul>
                <li><strong>Proteins:</strong> Meat, fish, eggs, beans, lentils, nuts, tofu, milk, cheese</li>
                <li><strong>Carbohydrates:</strong> Bread, rice, pasta, potatoes, maize, cereals, fruits, sugar</li>
                <li><strong>Fats and Oils:</strong> Butter, cooking oils, nuts, avocados, fatty fish, cheese</li>
            </ul>
            <p><strong>Key Concept:</strong> We need all three types of nutrients, but in different amounts. Carbohydrates should be the largest part of our diet, while fats should be the smallest.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dumbbell"></i> Protein Power</div>
                <p>When you exercise and build muscle, your body needs extra protein to repair and strengthen muscle fibres. Athletes often eat more protein-rich foods!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Carbohydrate Energy</div>
                <p>Eating a bowl of porridge or rice in the morning gives you slow-release energy that lasts for hours. That's why breakfast is called "break-fast" - you're breaking your overnight fast!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-oil-can"></i> Fat Facts</div>
                <p>Not all fats are bad! Avocados, nuts, and fish contain healthy fats that help your brain develop and keep your heart healthy.</p>
            </div>
        `,
        taskInstructions: "Classify foods into nutrient groups and create a balanced meal plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these foods into the correct nutrient groups (Protein, Carbohydrate, or Fat/Oil):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><em>Foods: Rice • Chicken • Butter • Bread • Fish • Cooking oil • Pasta • Eggs • Beans • Potatoes • Avocado • Cheese</em></div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Proteins</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Carbohydrates</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Fats and Oils</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Meal Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Plan a balanced breakfast, lunch, and dinner that includes all three nutrient types:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Breakfast:</strong> <span style="border-bottom: 1px dotted #ccc; min-width: 200px; display: inline-block; width: 200px;"></span></div>
                        <div><strong>Lunch:</strong> <span style="border-bottom: 1px dotted #ccc; min-width: 200px; display: inline-block; width: 200px;"></span></div>
                        <div><strong>Dinner:</strong> <span style="border-bottom: 1px dotted #ccc; min-width: 200px; display: inline-block; width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Nutrient Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each nutrient to its main function:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Protein ___ &nbsp;&nbsp;&nbsp; a. Provides quick energy</div>
                        <div>2. Carbohydrate ___ &nbsp;&nbsp;&nbsp; b. Builds and repairs body tissues</div>
                        <div>3. Fat/Oil ___ &nbsp;&nbsp;&nbsp; c. Stores energy and insulates the body</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to eat a variety of foods rather than just one type?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen and list 5 protein foods, 5 carbohydrate foods, and 5 fats/oils you find. Write them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Nutrition",
        subtopic: "Vitamins, Minerals, and Dietary Fibre",
        lessonContent: `
            <p>Today we'll continue exploring nutrients by learning about vitamins, minerals, and the crucial role of dietary fibre!</p>
            <p><strong>Key Question:</strong> What other nutrients does our body need besides proteins, carbs, and fats?</p>
            <p><strong>Vitamins:</strong> Organic compounds needed in small amounts for various body functions. Our bodies cannot make most vitamins - we must get them from food!</p>
            <ul>
                <li><strong>Vitamin A:</strong> Good for eyesight and healthy skin. Found in carrots, sweet potatoes, spinach, eggs</li>
                <li><strong>Vitamin C:</strong> Helps heal cuts and fight infections. Found in oranges, lemons, tomatoes, bell peppers</li>
                <li><strong>Vitamin D:</strong> Helps absorb calcium for strong bones. Found in eggs, fatty fish, and from sunlight!</li>
                <li><strong>B Vitamins:</strong> Help turn food into energy. Found in whole grains, meat, eggs, beans</li>
            </ul>
            <p><strong>Minerals:</strong> Inorganic elements that help our bodies work properly.</p>
            <ul>
                <li><strong>Calcium:</strong> Builds strong bones and teeth. Found in milk, cheese, yoghurt, leafy greens</li>
                <li><strong>Iron:</strong> Helps blood carry oxygen. Found in red meat, spinach, beans, fortified cereals</li>
                <li><strong>Potassium:</strong> Helps muscles and nerves work. Found in bananas, potatoes, avocados</li>
            </ul>
            <p><strong>Dietary Fibre (Roughage):</strong></p>
            <ul>
                <li>Not digested by the body, but very important!</li>
                <li>Helps food move through the digestive system</li>
                <li>Prevents constipation</li>
                <li>Makes us feel full, which helps maintain healthy weight</li>
                <li><strong>Sources:</strong> Whole grains, fruits, vegetables, beans, nuts, seeds</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Vitamin A for Sight</div>
                <p>Carrots contain beta-carotene, which your body turns into vitamin A. That's why people say carrots help you see in the dark!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bone"></i> Calcium for Bones</div>
                <p>Your bones store calcium like a bank. Drinking milk when you're young helps build strong bones that last your whole life!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom"></i> Fibre is a Broom</div>
                <p>Think of fibre as a broom that sweeps through your digestive system, pushing waste along and keeping everything clean and moving.</p>
            </div>
        `,
        taskInstructions: "Create a vitamin/mineral chart and design a fibre-rich meal.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vitamin and Mineral Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete this chart with the function and food sources:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Nutrient</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Function (What it does)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Food Sources</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Vitamin A</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Vitamin C</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Calcium</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Iron</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fibre Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List five high-fibre foods you can eat this week:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is fibre important even though our bodies don't digest it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Design a Fibre-Rich Meal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw and describe a meal that is high in fibre:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Deficiency Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What might happen to a person who doesn't eat enough Vitamin C? What about not enough calcium?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a food label from a packaged food at home. Write down any vitamins or minerals listed. Bring the label to share with the class.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Nutrition",
        subtopic: "Practical Food Science: Testing for Nutrients",
        lessonContent: `
            <p>Today we become food scientists! We'll learn how to test foods to find out what nutrients they contain.</p>
            <p><strong>Key Question:</strong> How can we tell what nutrients are in our food without reading a label?</p>
            <p><strong>Simple Food Tests:</strong></p>
            <ol>
                <li><strong>Brown Paper Grease Spot Test (Test for Fats/Lipids):</strong>
                    <ul>
                        <li>Rub a small food sample on a piece of brown paper (paper bag)</li>
                        <li>Hold the paper up to the light</li>
                        <li><strong>Positive result:</strong> A greasy, translucent (see-through) spot that lets light pass through</li>
                        <li><strong>Example foods that test positive:</strong> Butter, cooking oil, nuts, fried foods, chocolate</li>
                    </ul>
                </li>
                <li><strong>Iodine Test (Test for Starch - a type of Carbohydrate):</strong>
                    <ul>
                        <li>Add a few drops of iodine solution to the food sample</li>
                        <li><strong>Positive result:</strong> The food turns blue-black or dark purple</li>
                        <li><strong>Example foods that test positive:</strong> Bread, rice, pasta, potato, maize meal</li>
                    </ul>
                </li>
                <li><strong>Biuret Test (Test for Protein):</strong>
                    <ul>
                        <li>Add Biuret solution (copper sulfate and sodium hydroxide) to a liquid food sample</li>
                        <li><strong>Positive result:</strong> The solution turns purple or violet</li>
                        <li><strong>Example foods that test positive:</strong> Egg white, milk, beans (mashed with water)</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Lab Safety Rules:</strong></p>
            <ul>
                <li>Never eat or drink anything in the science lab</li>
                <li>Wear safety goggles when using chemicals</li>
                <li>Wash hands thoroughly after handling food samples</li>
                <li>Follow all teacher instructions carefully</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grease"></i> The Grease Spot Test</div>
                <p>If you've ever dropped a piece of buttered bread on a paper bag, you've seen this test in action! The grease leaves a permanent see-through spot.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Iodine Colour Change</div>
                <p>Iodine is brownish-orange. When it touches starch, it reacts and changes to a dramatic blue-black colour. It's like a magic trick!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Testing Egg White</div>
                <p>Egg white is almost pure protein. When you add Biuret solution, it turns purple - a clear sign that protein is present!</p>
            </div>
        `,
        taskInstructions: "Conduct the brown paper grease spot test and record observations for various food samples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Brown Paper Grease Spot Test - Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before testing, predict which foods will leave a grease spot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><em>Food samples: Water • Cooking oil • Apple slice • Bread • Butter • Cheese • Potato • Chocolate</em></div>
                    </div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Grease Spot Test - Results Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Rub each food sample on brown paper. Record your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Food Sample</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Grease Spot? (Yes/No)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Does it contain Fat/Oil?</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Water</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cooking oil</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Apple slice</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Bread</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Butter</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Cheese</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Potato</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Chocolate</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Observation and Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which foods left the darkest, most obvious grease spot?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Did any food surprise you? Which one and why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Other Food Tests - Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw and label what a positive iodine test (starch) and a positive Biuret test (protein) look like:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>Iodine Test (Starch)</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Colour before: _____ &nbsp; After: _____</span>
                        </div>
                        <div>
                            <strong>Biuret Test (Protein)</strong>
                            <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Colour before: _____ &nbsp; After: _____</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Lab Safety Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> List two important safety rules to remember when doing food tests in the lab:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "At home (with adult permission), test three different foods using the brown paper method. Record which foods contain fats/oils and which do not. Bring your results to class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek10);
    console.log("grade5-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek10);
    console.log("grade5-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek10',
        metadata: grade5ScienceWeek10.metadata,
        days: grade5ScienceWeek10
    });
    console.log("grade5-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek10 = grade5ScienceWeek10;
console.log("grade5-science-week10.js loaded and registered successfully");