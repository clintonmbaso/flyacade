// Grade 5 Science - Week 8 Data
const grade5ScienceWeek8 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 1,
        week: 8,
        title: "Nutrition and Health",
        description: "Understanding malnutrition, portion control, BMI, and community health strategies"
    },
    
    monday: {
        subject: "Science",
        topic: "Nutrition and Health",
        subtopic: "Understanding the 'Triple Burden' of Malnutrition",
        lessonContent: `
            <p>Welcome to our study of nutrition and health! Today we will explore what malnutrition really means and its three different forms.</p>
            <p><strong>Key Concept:</strong> Malnutrition isn't just "not enough food." It includes three different problems that affect our health in different ways.</p>
            <p><strong>The Three Forms of Malnutrition:</strong></p>
            <ol>
                <li><strong>Under-nutrition (Wasting/Stunting):</strong> Not getting enough food or the right kinds of food for proper growth and development</li>
                <li><strong>Micronutrient Deficiency (Hidden Hunger):</strong> Lack of essential vitamins and minerals even when eating enough calories</li>
                <li><strong>Over-nutrition (Overweight/Obesity):</strong> Getting too many calories, often from unhealthy foods, leading to health problems</li>
            </ol>
            <p><strong>Why is this important?</strong> All three forms of malnutrition can harm our health, energy levels, and ability to learn and grow properly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #4CAF50;"></i> Real-Life Example</div>
                <p>A child might eat enough rice and bread (calories) but still have "hidden hunger" if they don't get fruits and vegetables with vitamins.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Did You Know?</div>
                <p>Someone can be overweight but still have micronutrient deficiencies if they eat mostly processed foods without enough vitamins!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Food for Thought</div>
                <p>Eating only chips and soda might fill your stomach, but your body won't get the nutrients it needs to stay healthy and strong.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to understand the three forms of malnutrition.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Group Discussion: Why might a person who eats a lot of "junk food" still be malnourished? Write 2-3 key points:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Define each type of malnutrition in your own words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Under-nutrition:</div>
                    <div class="answer-space" style="height: 60px; margin-bottom: 15px;"></div>
                    <div>Micronutrient Deficiency:</div>
                    <div class="answer-space" style="height: 60px; margin-bottom: 15px;"></div>
                    <div>Over-nutrition:</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a simple chart showing the three types of malnutrition:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Include examples of each type)</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is it important to understand all three types of malnutrition?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Interview a family member about what they think malnutrition means. Compare their answer with what you learned today.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Nutrition and Health",
        subtopic: "Portion Control and the Body Mass Index (BMI)",
        lessonContent: `
            <p>Today we will learn about portion control and how our height and weight relate to our health through the Body Mass Index (BMI).</p>
            <p><strong>The Healthy Plate Model:</strong></p>
            <ol>
                <li><strong>½ Vegetables and Fruits:</strong> Fill half your plate with colorful vegetables and some fruits</li>
                <li><strong>¼ Protein:</strong> Include lean protein like chicken, fish, beans, or tofu</li>
                <li><strong>¼ Starch:</strong> Add whole grains like brown rice, whole wheat bread, or potatoes</li>
            </ol>
            <p><strong>Understanding BMI:</strong> Body Mass Index is a tool that helps us understand if our weight is healthy for our height.</p>
            <p><strong>How BMI Works:</strong> Doctors use a special calculation (weight ÷ height²) to see if someone is underweight, healthy weight, overweight, or obese.</p>
            <p><strong>Important Note:</strong> BMI is just one tool - it doesn't tell us everything about health. Muscle weighs more than fat, and everyone's body is different!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Portion Control Tip</div>
                <p>Your fist is about the size of one cup. Your palm (without fingers) is about the right size for a protein portion!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> BMI Understanding</div>
                <p>Two people can have the same BMI but different health levels. One might be muscular, while another might have more body fat.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> The Healthy Plate</div>
                <p>Imagine your plate as a clock: Vegetables should fill from 12 to 6, protein from 6 to 9, and starch from 9 to 12!</p>
            </div>
        `,
        taskInstructions: "Practice food portioning and learn about BMI through these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Portioning Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a balanced meal on the paper plate below using the Healthy Plate model:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc; border-radius: 50%; width: 200px; margin-left: auto; margin-right: auto;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px; text-align: center;">(Label each section: ½ Vegetables, ¼ Protein, ¼ Starch)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: BMI Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice taking height and weight measurements (use pretend numbers if needed):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Height: ______ cm</div>
                        <div>Weight: ______ kg</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Portion Size Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match the food with its recommended portion size:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Vegetables ___ a. Size of your palm</div>
                        <div>2. Protein ___ b. Size of your fist</div>
                        <div>3. Starch ___ c. Fill half your plate</div>
                        <div>4. Fruits ___ d. Size of your cupped hand</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Short Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is portion control important even with healthy foods?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What does BMI tell us about health, and what doesn't it tell us?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Design a balanced dinner for your family using the Healthy Plate model. List the foods you would include in each section.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Nutrition and Health",
        subtopic: "Community Health & Prevention",
        lessonContent: `
            <p>Today we will learn how to solve the triple burden of malnutrition in our community through healthy lifestyle choices.</p>
            <p><strong>Key Strategies for Prevention:</strong></p>
            <ol>
                <li><strong>Regular Exercise:</strong> At least 60 minutes of physical activity daily</li>
                <li><strong>Dietary Diversity:</strong> Eating many different types of foods from all food groups</li>
                <li><strong>Portion Control:</strong> Eating the right amounts of different foods</li>
                <li><strong>Education:</strong> Learning about nutrition and healthy choices</li>
            </ol>
            <p><strong>Community Approach:</strong> Solving malnutrition requires everyone to work together - families, schools, and communities.</p>
            <p><strong>Role of a Nutritionist:</strong> Nutritionists help people understand their dietary needs and create healthy eating plans.</p>
            <p><strong>Remember:</strong> Small changes can make a big difference! Drinking water instead of soda, adding vegetables to meals, and playing outside instead of watching TV all help prevent malnutrition.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Community Action</div>
                <p>Schools can start vegetable gardens, communities can organize exercise groups, and families can cook healthy meals together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Meal Planning</div>
                <p>A good weekly meal plan includes different colored vegetables, various protein sources, and whole grains throughout the week.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Exercise Variety</div>
                <p>Exercise doesn't have to be boring! Dancing, swimming, playing soccer, and even walking to school all count as physical activity.</p>
            </div>
        `,
        taskInstructions: "Create a community health plan and practice giving nutrition advice through role-play.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Community Health Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a poster that teaches about preventing malnutrition:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Include at least 3 ways to prevent malnutrition in your community)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weekly Meal & Exercise Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a simple weekly plan for a family:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div><strong>Meal Plan:</strong> List 3 balanced meals for one day</div>
                        <div class="answer-space" style="height: 100px;"></div>
                        <div><strong>Exercise Plan:</strong> List 3 physical activities for the week</div>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Role-Play Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Role-play as a nutritionist giving advice to a family. Write your main advice points:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Lifestyle Changes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List at least three lifestyle changes that can help prevent malnutrition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. ________________________________</div>
                        <div>2. ________________________________</div>
                        <div>3. ________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How can schools help fight malnutrition in the community?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple "Healthy Habits" checklist for your family. Include at least 5 habits related to nutrition and exercise.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek8);
    console.log("grade5-science-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek8);
    console.log("grade5-science-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek8',
        metadata: grade5ScienceWeek8.metadata,
        days: grade5ScienceWeek8
    });
    console.log("grade5-science-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek8 = grade5ScienceWeek8;
console.log("grade5-science-week8.js loaded and registered successfully");