// Grade 3 Mathematics & Science - Term 1 Week 5 Data
const grade3MathsScienceWeek5 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 5,
        title: "Food Classification & Chemical Safety",
        description: "Exploring food groups, balanced nutrition, and safe handling of household chemicals"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Food & Nutrition",
        subtopic: "Benefits of Eating a Variety of Foods",
        lessonContent: `
            <p>Welcome to our week exploring food and safety! Today we'll learn why eating different types of food is important for our bodies.</p>
            <p><strong>Key Question:</strong> Why can't we just eat our favorite food every day?</p>
            <p><strong>Introduction:</strong> Just like a car needs different things to run (fuel, oil, water), our bodies need different types of food to work properly!</p>
            <p><strong>The Three Main Food Groups:</strong></p>
            <ol>
                <li><strong>Energy Foods:</strong> Give us energy to run, play, and think</li>
                <li><strong>Body-Building Foods:</strong> Help us grow strong muscles and bones</li>
                <li><strong>Protective Foods:</strong> Keep us healthy and fight off sickness</li>
            </ol>
            <p><strong>Why Do We Need All Three?</strong></p>
            <ul>
                <li>Energy foods = fuel for our engine</li>
                <li>Body-building foods = building blocks for growth</li>
                <li>Protective foods = armor against germs</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> The Car Analogy</div>
                <p>A car needs petrol (energy), oil (building), and water (protection). Your body is the same! You need all three types of food every day.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Protective Power</div>
                <p>Oranges have Vitamin C - it's like a shield that helps stop you from getting sick!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dumbbell"></i> Building Strong Bodies</div>
                <p>Beans and meat have protein that helps your muscles grow strong. That's why athletes eat them!</p>
            </div>
        `,
        taskInstructions: "Sort foods into three groups and discuss why each group matters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Group Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw or write foods in the correct group:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #4CAF50; padding: 10px; text-align: center; background: #e8f5e9;">
                            <strong>⚡ Energy Foods</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #4CAF50;"></div>
                            <p style="font-size: 12px;">Examples: nsima, rice, bread, potatoes</p>
                        </div>
                        <div style="border: 1px solid #2196F3; padding: 10px; text-align: center; background: #e3f2fd;">
                            <strong>💪 Body-Building Foods</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #2196F3;"></div>
                            <p style="font-size: 12px;">Examples: beans, beef, eggs, fish, chicken</p>
                        </div>
                        <div style="border: 1px solid #FF9800; padding: 10px; text-align: center; background: #fff3e0;">
                            <strong>🛡️ Protective Foods</strong>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 1px dashed #FF9800;"></div>
                            <p style="font-size: 12px;">Examples: fruits, vegetables, oranges, spinach</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Plate</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a healthy plate with foods from all three groups:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What would happen if you only ate energy foods (like bread and rice) every day?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one food you will try to eat more of this week:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Look at your dinner tonight. Draw it and circle which foods are energy, body-building, and protective.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Food & Nutrition",
        subtopic: "Classifying Foods by Nutrients",
        lessonContent: `
            <p>Today we'll learn how to sort foods into groups based on what nutrients they give us!</p>
            <p><strong>Key Question:</strong> What's the difference between nsima/rice and beans/beef?</p>
            <p><strong>Review of the Three Groups:</strong></p>
            <ul>
                <li><strong>Energy Foods (Carbohydrates):</strong> Nsima, rice, bread, pasta, potatoes</li>
                <li><strong>Body-Building Foods (Proteins):</strong> Beans, beef, chicken, fish, eggs, milk</li>
                <li><strong>Protective Foods (Vitamins & Minerals):</strong> Fruits, vegetables, oranges, spinach, carrots</li>
            </ul>
            <p><strong>Let's Classify!</strong></p>
            <p>When you look at a meal, can you spot foods from each group?</p>
            <p><strong>Example Meal:</strong> Nsima + beans + cooked greens</p>
            <ul>
                <li>Nsima = Energy food</li>
                <li>Beans = Body-building food</li>
                <li>Greens = Protective food</li>
            </ul>
            <p>A healthy meal has foods from ALL THREE groups!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Breakfast Classification</div>
                <p>Bread (energy) + egg (body-building) + banana (protective) = Perfect breakfast!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> The Healthy Plate Rule</div>
                <p>Half your plate should be protective foods (vegetables), one quarter energy foods, one quarter body-building foods.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Spot the Group</div>
                <p>Rice = Energy | Fish = Body-building | Cabbage = Protective</p>
            </div>
        `,
        taskInstructions: "Classify different foods into energy, body-building, and protective groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort These Foods</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each food in the correct group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Foods to sort:</strong> nsima, fish, orange, rice, beef, spinach, bread, beans, mango, egg, potato, cabbage</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #4CAF50; padding: 10px; background: #e8f5e9;">
                            <strong>⚡ Energy Foods</strong>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #2196F3; padding: 10px; background: #e3f2fd;">
                            <strong>💪 Body-Building Foods</strong>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #FF9800; padding: 10px; background: #fff3e0;">
                            <strong>🛡️ Protective Foods</strong>
                            <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Classify These Meals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each meal, write which food groups are included:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Meal 1:</strong> Rice + chicken + carrots</div>
                        <div>Groups: _________, _________, _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Meal 2:</strong> Nsima + beans + pumpkin leaves</div>
                        <div>Groups: _________, _________, _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Meal 3:</strong> Bread + egg + orange juice</div>
                        <div>Groups: _________, _________, _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Meal</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a healthy meal with foods from all three groups:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>Label each food as Energy (E), Body-building (B), or Protective (P).</div>
                </div>
            </div>
        `,
        homework: "Look at what you ate today. Write down one food from each group that you ate (or could have eaten).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Chemical Safety",
        subtopic: "Identifying Household Chemicals",
        lessonContent: `
            <p>Today we're learning about something very important - household chemicals! These are products we use to clean, kill pests, and wash things.</p>
            <p><strong>Key Question:</strong> What are household chemicals and why must we be careful with them?</p>
            <p><strong>What Are Household Chemicals?</strong></p>
            <p>Household chemicals are products we use at home that can be dangerous if not used correctly. They are NOT food or drinks!</p>
            <p><strong>Common Household Chemicals:</strong></p>
            <ol>
                <li><strong>Detergents & Soaps:</strong> Used for washing dishes, clothes, and cleaning</li>
                <li><strong>Pesticides:</strong> Used to kill insects, rats, and other pests</li>
                <li><strong>Bleach:</strong> Used to whiten clothes and kill germs</li>
                <li><strong>Disinfectants:</strong> Used to clean floors and surfaces</li>
                <li><strong>Rat poison:</strong> Used to kill rats and mice</li>
            </ol>
            <p><strong>IMPORTANT RULE:</strong> Never touch, smell, or taste any household chemical without an adult's permission and help!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-soap"></i> Detergents Around Us</div>
                <p>Dish soap, laundry powder, floor cleaner - these are all detergents. They help us clean, but they can make you sick if you swallow them!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones"></i> Pesticides Kill Pests</div>
                <p>Mosquito spray, cockroach killer, rat poison - these are pesticides. They are made to KILL insects and animals. They can also hurt people and pets!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Only Adults Should Handle</div>
                <p>Household chemicals are not toys. Only grown-ups should open, pour, or use them. You can help by reminding others to be safe!</p>
            </div>
        `,
        taskInstructions: "Identify common household chemicals and understand why they are dangerous.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Spot the Chemical</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the items that are household chemicals (not food):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center;">
                            <div>🧼 Dish soap</div>
                            <div>🍎 Apple</div>
                            <div>🐭 Rat poison</div>
                            <div>🥛 Milk</div>
                            <div>🧴 Bleach</div>
                            <div>🍚 Rice</div>
                            <div>Mosquito spray</div>
                            <div>🧹 Floor cleaner</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">
                        <em>Household chemicals are: _________________________________</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw & Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw two household chemicals you might find at home and label them:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                        <div class="drawing-area" style="height: 100px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safety Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why should you never drink from a bottle that looks like this?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>⚠️ A bottle under the sink with no label</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one person you should ask for help if you need to use a household chemical:
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
        `,
        homework: "With an adult, find 3 household chemicals in your home. Write their names and where they are stored.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Chemical Safety",
        subtopic: "Recognizing Warning Signs and Labels",
        lessonContent: `
            <p>Today we'll learn how to read warning signs on chemical bottles so we can stay safe!</p>
            <p><strong>Key Question:</strong> How can you tell if something is dangerous just by looking at the bottle?</p>
            <p><strong>Warning Signs to Know:</strong></p>
            <ul>
                <li><strong>☠️ Skull and Crossbones:</strong> POISON - This can kill you if you swallow it</li>
                <li><strong>⚠️ Exclamation Mark:</strong> Caution - This can hurt you</li>
                <li><strong>🔥 Flame:</strong> Flammable - This can catch fire easily</li>
                <li><strong>🧪 Corrosion Symbol:</strong> This can burn your skin or eyes</li>
            </ul>
            <p><strong>Other Safety Words to Look For:</strong></p>
            <ul>
                <li>"POISON" - Very dangerous, can cause death</li>
                <li>"DANGER" - Extremely dangerous</li>
                <li>"WARNING" - Moderately dangerous</li>
                <li>"CAUTION" - Less dangerous but still be careful</li>
                <li>"KEEP OUT OF REACH OF CHILDREN" - Means adults only!</li>
            </ul>
            <p><strong>Remember:</strong> If you see these symbols or words on a bottle, DO NOT TOUCH IT. Tell an adult instead.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones"></i> The Skull Symbol</div>
                <p>Rat poison has a skull and crossbones. This means even a tiny bit can make you very sick or even kill you!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> Flame Symbol</div>
                <p>Some cleaning sprays have a flame symbol. This means they can catch fire if near a candle or stove.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Corrosion Symbol</div>
                <p>Bleach has a corrosion symbol on its label. It can burn your skin and eyes - that's why adults wear gloves!</p>
            </div>
        `,
        taskInstructions: "Match warning symbols to their meanings and practice identifying safe vs. dangerous containers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Symbol</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line connecting each symbol to its meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>☠️ Skull and crossbones</div>
                                <div>⚠️ Exclamation mark</div>
                                <div>🔥 Flame</div>
                                <div>🧪 Corrosion</div>
                            </div>
                            <div>
                                <div>→ Poison (can kill)</div>
                                <div>→ Caution (can hurt you)</div>
                                <div>→ Flammable (catches fire)</div>
                                <div>→ Burns skin/eyes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Label Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at these warning labels. What should you do?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Bottle A:</strong> Has a skull and says "POISON - DO NOT DRINK"</div>
                        <div>What should you do? <span class="answer-space" style="display: inline-block; width: 200px; height: 25px; border-bottom: 1px solid #000;"></span></div>
                        
                        <div style="margin-top: 15px;"><strong>Bottle B:</strong> Has a flame and says "FLAMMABLE - KEEP AWAY FROM FIRE"</div>
                        <div>Where should you keep it? <span class="answer-space" style="display: inline-block; width: 200px; height: 25px; border-bottom: 1px solid #000;"></span></div>
                        
                        <div style="margin-top: 15px;"><strong>Bottle C:</strong> Has a corrosion symbol</div>
                        <div>Should you touch it with bare hands? <span class="answer-space" style="display: inline-block; width: 200px; height: 25px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Warning Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design a warning label for a dangerous chemical bottle:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px solid #FF5722;"></div>
                    <div>Include: a warning symbol and the word "POISON" or "DANGER"</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete this safety pledge:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <em>"I will never touch, taste, or smell a household chemical without ________________________."</em>
                    </div>
                </div>
            </div>
        `,
        homework: "Find one household chemical at home. With an adult, read the label together. Draw the warning symbols you see.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Chemical Safety",
        subtopic: "Roleplay: Safe Handling of Household Chemicals",
        lessonContent: `
            <p>Today we'll practice what to do when we see household chemicals - through roleplay!</p>
            <p><strong>Key Question:</strong> What would you do in a real emergency with chemicals?</p>
            <p><strong>Review: The Golden Rules of Chemical Safety</strong></p>
            <ol>
                <li>NEVER touch, taste, or smell any chemical bottle</li>
                <li>ALWAYS ask an adult before using any cleaning product</li>
                <li>Keep chemicals in their original bottles (never put them in drink bottles!)</li>
                <li>Store chemicals up high, away from children and food</li>
                <li>If someone drinks a chemical, call for help IMMEDIATELY</li>
            </ol>
            <p><strong>What To Do In An Emergency:</strong></p>
            <ul>
                <li>Tell an adult right away</li>
                <li>If an adult is not there, call for a neighbor</li>
                <li>DO NOT try to make the person vomit</li>
                <li>Bring the chemical bottle to show the doctor</li>
            </ul>
            <p><strong>Today's Activity:</strong> We will act out different scenarios to practice being safe!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Roleplay Scenario 1</div>
                <p>You find a bottle under the sink with a skull symbol. Your little brother wants to open it. What do you do?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Roleplay Scenario 2</div>
                <p>Mom is cleaning the floor with a chemical. She asks you to bring her the bottle. How do you safely hand it to her?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Roleplay Scenario 3</div>
                <p>Your friend drinks from a bottle that used to have juice but now has kerosene. What do you do?</p>
            </div>
        `,
        taskInstructions: "Participate in roleplay scenarios about safe chemical handling and answer reflection questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Roleplay Preparation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your group, prepare a short roleplay for one of these scenarios:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📋 <strong>Scenario A:</strong> A child finds a chemical bottle without a label. What should they do?</div>
                        <div>📋 <strong>Scenario B:</strong> A younger sibling tries to drink from a soap bottle. How do you stop them?</div>
                        <div>📋 <strong>Scenario C:</strong> Someone accidentally spills a chemical on their hand. What is the right action?</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <em>Our group is acting out Scenario: _________</em>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Roleplay Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After watching the roleplays, answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What was one safe action you saw in a roleplay?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 10px;">What was one dangerous action you should NEVER do?</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safety Rules Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "Chemical Safety Rules" poster with 3 rules:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4CAF50;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Emergency Number</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write down an emergency contact number (with help from your teacher):
                    <div class="answer-space" style="height: 40px;"></div>
                    <p><em>In case of poisoning, call: _________________</em></p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Final Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Sign your safety pledge:
                    <div class="answer-space" style="height: 60px;">
                        <p><em>"I promise to always be safe around household chemicals and to ask an adult for help."</em></p>
                        <p>Signature: _________________ Date: ________</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach one safety rule about household chemicals to a younger sibling or friend. Ask them to repeat it back to you.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek5);
    console.log("grade3-maths-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek5);
    console.log("grade3-maths-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek5',
        metadata: grade3MathsScienceWeek5.metadata,
        days: grade3MathsScienceWeek5
    });
    console.log("grade3-maths-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek5 = grade3MathsScienceWeek5;
console.log("grade3-maths-science-week5.js loaded and registered successfully");