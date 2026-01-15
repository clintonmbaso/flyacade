// Grade 4 Science - Week 7 Data
const grade4ScienceWeek7 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 1,
        week: 7,
        title: "Food and Nutrition",
        description: "Exploring local foods, food groups, and nutrients for a healthy diet"
    },
    
    monday: {
        subject: "Science",
        topic: "Our Local Food Basket",
        subtopic: "Collecting and identifying local foods",
        lessonContent: `
            <p>Welcome to our food exploration week! Today we will learn about the different types of foods available in our local community.</p>
            <p><strong>Key Concept:</strong> Foods can be divided into two main categories: raw foods and processed foods. Understanding this helps us make healthy choices.</p>
            <p><strong>What are Raw Foods?</strong></p>
            <ul>
                <li>Foods that come directly from plants or animals</li>
                <li>They have not been changed much from their natural state</li>
                <li>Examples: fresh fruits, vegetables, maize, raw meat, eggs</li>
            </ul>
            <p><strong>What are Processed Foods?</strong></p>
            <ul>
                <li>Foods that have been changed from their natural state</li>
                <li>Processing can include cooking, canning, baking, or adding ingredients</li>
                <li>Examples: bread, canned fish, cheese, cookies, juice</li>
            </ul>
            <p><strong>Why does this matter?</strong> Both types of foods are important, but knowing the difference helps us understand where our food comes from and how it reaches our plates!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Raw Food Example</div>
                <p>An apple picked from a tree is a raw food. When we make that apple into applesauce or apple juice, it becomes processed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Processed Food Example</div>
                <p>Fresh fish from the river is raw. When that fish is cleaned, cooked, and put in a can with oil, it becomes processed canned fish.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Local Connection</div>
                <p>Think about the foods grown in our community. Maize can be eaten raw (fresh corn) or processed (cornmeal, tortillas, cereal).</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice identifying raw and processed foods.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at the food collection. List 5 raw foods you see:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> List 5 processed foods from our collection:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Choose one food item and describe how it might change from raw to processed:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Create a simple chart showing your findings:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
        `,
        homework: "Find 3 examples of raw foods and 3 examples of processed foods in your home. Write them down and bring your list to class.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "The Six Food Groups",
        subtopic: "Sorting foods based on nutritive content",
        lessonContent: `
            <p>Today we will learn how foods are grouped based on what nutrients they provide. This helps us eat a balanced diet!</p>
            <p><strong>The Six Food Groups:</strong> Foods that give us similar nutrients are grouped together. Eating from all groups helps our bodies grow and stay healthy.</p>
            <p><strong>Group 1: Cereals and Tubers</strong></p>
            <ul>
                <li>Main nutrients: Carbohydrates for energy</li>
                <li>Examples: Rice, maize, bread, potatoes, yams, oats</li>
            </ul>
            <p><strong>Group 2: Fish, Insects, and Meat</strong></p>
            <ul>
                <li>Main nutrients: Protein for growth and repair</li>
                <li>Examples: Chicken, beef, fish, crickets, eggs</li>
            </ul>
            <p><strong>Group 3: Pulses, Beans, Nuts, and Seeds</strong></p>
            <ul>
                <li>Main nutrients: Protein and healthy fats</li>
                <li>Examples: Lentils, peanuts, beans, sunflower seeds</li>
            </ul>
            <p><strong>Group 4: Dairy</strong></p>
            <ul>
                <li>Main nutrients: Calcium for strong bones</li>
                <li>Examples: Milk, cheese, yogurt</li>
            </ul>
            <p><strong>Group 5: Vegetables</strong></p>
            <ul>
                <li>Main nutrients: Vitamins and minerals</li>
                <li>Examples: Spinach, carrots, tomatoes, onions</li>
            </ul>
            <p><strong>Group 6: Fruits</strong></p>
            <ul>
                <li>Main nutrients: Vitamins and fiber</li>
                <li>Examples: Mangoes, bananas, oranges, apples</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice"></i> Cereal Group Example</div>
                <p>Maize (corn) can be eaten fresh, dried, or ground into flour. All forms belong to the cereal group because they give us energy!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drumstick-bite"></i> Protein Group Example</div>
                <p>Fish from our local rivers belongs to the fish/meat group. It helps build strong muscles and repair our bodies.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Balanced Diet</div>
                <p>Eating foods from all six groups is like building a house with different materials - each group provides something special our body needs!</p>
            </div>
        `,
        taskInstructions: "Sort the food cards into the correct groups and answer questions about food classification.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Group Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> During the "Food Group Relay," which foods did you place in the Cereals/Tubers basket?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three local foods that belong to the Vegetables group:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Classification Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which food group does milk belong to? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name two foods from the Pulses/Beans/Nuts/Seeds group: <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Where would you place an egg? (Choose one: Fish/Insects/Meat group OR Dairy group) <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Creating a Balanced Meal</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a plate showing a balanced meal with foods from at least 4 different food groups:
                    <div class="drawing-area" style="height: 180px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Local Foods Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Choose one local food and identify which of the six groups it belongs to:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple chart showing the six food groups. Find and draw or write one example of a local food for each group.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "The Building Blocks (Nutrients)",
        subtopic: "Classifying food nutrients",
        lessonContent: `
            <p>Today we will discover what makes different foods good for us! Nutrients are like tiny building blocks that help our bodies work properly.</p>
            <p><strong>What are nutrients?</strong> Nutrients are substances in food that our bodies need to grow, have energy, and stay healthy.</p>
            <p><strong>The 5 Major Nutrients:</strong></p>
            <ol>
                <li><strong>Proteins:</strong> The building blocks for our bodies. They help us grow and repair muscles.</li>
                <li><strong>Carbohydrates:</strong> Our main source of energy. They fuel our bodies like gasoline fuels a car.</li>
                <li><strong>Fats:</strong> Another energy source and help protect our organs. Healthy fats are important!</li>
                <li><strong>Vitamins:</strong> Help our bodies fight illness and work properly. Different vitamins do different jobs.</li>
                <li><strong>Minerals:</strong> Help build strong bones and teeth, and help our blood carry oxygen.</li>
            </ol>
            <p><strong>Matching Food Groups to Nutrients:</strong></p>
            <ul>
                <li>Meat/Fish/Eggs = Protein</li>
                <li>Cereals/Tubers = Carbohydrates</li>
                <li>Vegetables and Fruits = Vitamins and Minerals</li>
                <li>Dairy = Calcium (a mineral) and Protein</li>
                <li>Nuts/Seeds = Healthy Fats and Protein</li>
            </ul>
            <p><strong>Why nutrients matter:</strong> Eating different foods ensures we get all the nutrients our bodies need to be strong and healthy!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dumbbell"></i> Protein Power</div>
                <p>When you eat fish or beans, your body uses the protein to build and repair muscles - especially important when you're growing or after playing sports!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Energy from Carbohydrates</div>
                <p>Rice, maize, and bread give us carbohydrates that turn into energy. That's why athletes often eat pasta before big races!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Vitamins as Protectors</div>
                <p>Oranges and mangoes contain Vitamin C, which helps our bodies fight colds and heal cuts faster.</p>
            </div>
        `,
        taskInstructions: "Match foods to their main nutrients and answer questions about how nutrients help our bodies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Nutrient Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each food to its main nutrient:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fish → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Rice → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Carrots → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Milk → <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Avocado → <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                    <p style="font-size: 0.9em; margin-top: 5px;">(Choose from: Protein, Carbohydrates, Vitamins/Minerals, Calcium, Healthy Fats)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Nutrient Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which nutrient gives us energy for running and playing?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which nutrient helps build strong muscles?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do we need to eat foods with vitamins?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Creating Nutrient-Rich Meals</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Plan a breakfast that includes foods with at least 3 different nutrients:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a "nutrient superhero" that shows how different nutrients help our bodies:
                    <div class="drawing-area" style="height: 180px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Example: Strong arms for protein, lightning bolt for carbohydrates, shield for vitamins)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What did you learn this week about making healthy food choices?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Keep a food diary for one day. Write down everything you eat and identify which nutrients each food provides.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek7);
    console.log("science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek7);
    console.log("science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek7',
        metadata: grade4ScienceWeek7.metadata,
        days: grade4ScienceWeek7
    });
    console.log("science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek7 = grade4ScienceWeek7;
console.log("science-week7.js loaded and registered successfully");