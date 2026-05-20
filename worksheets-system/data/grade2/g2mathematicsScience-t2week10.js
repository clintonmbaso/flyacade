// Grade 2 Mathematics & Science - Term 2 Week 10 Data
const grade2MathScienceWeek10 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 2,
        week: 10,
        title: "Solubility & Term Review",
        description: "Exploring soluble and insoluble materials, experimenting with water, and term examination"
    },
    
    monday: {
        subject: "Science",
        topic: "Materials and Properties",
        subtopic: "Exploring Soluble and Insoluble Materials",
        lessonContent: `
            <p>Welcome to our science week! Today we'll learn about what happens when we put different things in water.</p>
            <p><strong>Key Question:</strong> What does it mean when something "disappears" in water?</p>
            <p><strong>Introduction:</strong> Have you ever stirred sugar into your drink and watched it disappear? That's called <strong>dissolving</strong>! Some things dissolve in water, and some things don't.</p>
            <p><strong>New Words:</strong></p>
            <ul>
                <li><strong>Soluble:</strong> A material that dissolves in water (like sugar and salt)</li>
                <li><strong>Insoluble:</strong> A material that does NOT dissolve in water (like sand and stones)</li>
                <li><strong>Dissolve:</strong> When a material mixes completely with water and seems to disappear</li>
            </ul>
            <p><strong>Think About This:</strong></p>
            <ul>
                <li>When you add sugar to tea, where does the sugar go?</li>
                <li>If you put a rock in water, does it disappear?</li>
                <li>Why do we stir drinks to make the sugar dissolve faster?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Morning Drink</div>
                <p>When Mom adds sugar to your hot chocolate, the sugar dissolves. You can't see the sugar anymore, but you can taste the sweetness!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Tank</div>
                <p>Fish swim in water, but the gravel and rocks at the bottom of the tank don't dissolve. They are insoluble!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Bath Time</div>
                <p>Bath salts dissolve in water to make it smell nice. But your rubber duck floats - it doesn't dissolve!</p>
            </div>
        `,
        taskInstructions: "Sort pictures into soluble and insoluble categories and answer questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at these materials. Circle the ones that dissolve in water (soluble):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍬 Sugar &nbsp;&nbsp;&nbsp; 🧂 Salt &nbsp;&nbsp;&nbsp; 🪨 Rock &nbsp;&nbsp;&nbsp; 🏖️ Sand &nbsp;&nbsp;&nbsp; 🥤 Soda powder &nbsp;&nbsp;&nbsp; </div>
                        <div style="margin-top: 10px;">🪨 Stone &nbsp;&nbsp;&nbsp; 🧴 Chalk &nbsp;&nbsp;&nbsp; 🍯 Honey &nbsp;&nbsp;&nbsp; 🧱 Brick &nbsp;&nbsp;&nbsp; 🧪 Flour</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one thing that dissolves in water:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one thing that does NOT dissolve in water:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Question Time</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What happens to sugar when you stir it into water?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name one thing that does NOT dissolve in water.
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "With an adult's help, find three things in your kitchen. Predict if each will dissolve in water. Test and write what happens.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Materials and Properties",
        subtopic: "Experimenting on Solubility in Water (Sugar, Soda, Salt)",
        lessonContent: `
            <p>Today we become scientists! We will experiment with different materials to see which ones dissolve in water.</p>
            <p><strong>Key Question:</strong> Do sugar, soda, and salt all dissolve the same way?</p>
            <p><strong>What We'll Test:</strong></p>
            <ul>
                <li><strong>Sugar:</strong> White crystals that taste sweet</li>
                <li><strong>Salt:</strong> White crystals that taste salty</li>
                <li><strong>Soda powder (baking soda):</strong> White powder used in cooking</li>
            </ul>
            <p><strong>Prediction Time:</strong> Before we test, let's predict! Will each material dissolve? Will some dissolve faster than others?</p>
            <p><strong>Science Words to Use:</strong></p>
            <ul>
                <li><strong>Predict:</strong> Make a guess about what will happen</li>
                <li><strong>Observe:</strong> Watch carefully and notice what happens</li>
                <li><strong>Record:</strong> Write down what you see</li>
                <li><strong>Conclusion:</strong> Decide what you learned</li>
            </ul>
            <p><strong>Remember:</strong> Always wash your hands after handling materials. Never taste things in science experiments unless your teacher says it's safe!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Scientist Tip</div>
                <p>Stirring helps things dissolve faster! The moving water bumps into the crystals and breaks them apart.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Warm vs. Cold</div>
                <p>Sugar dissolves faster in warm water than cold water. Try it at home with your parent's help!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half"></i> Speed Race</div>
                <p>Which dissolves fastest? Small crystals (like table salt) dissolve faster than big crystals (like rock sugar).</p>
            </div>
        `,
        taskInstructions: "Conduct experiments with sugar, soda, and salt. Record observations in a table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prediction Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before experimenting, write your predictions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Will it dissolve? (Yes/No)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What I think will happen</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sugar</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Salt</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Soda (Baking Soda)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation Recording</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After experimenting, record what happened:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Did it dissolve? (Yes/No)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What I saw</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sugar</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Salt</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Soda (Baking Soda)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of one of your experiments:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Were your predictions correct? What did you learn today?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult to help you test if powdered juice mix dissolves in water. Draw what happens before and after stirring.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Materials and Properties",
        subtopic: "Experimenting with Insoluble Materials (Sand, Stones, Chalk)",
        lessonContent: `
            <p>Today we will test materials that do NOT dissolve in water. Get ready to observe what happens when things sink instead of disappear!</p>
            <p><strong>Key Question:</strong> What happens when you put sand, stones, or chalk in water?</p>
            <p><strong>What We'll Test:</strong></p>
            <ul>
                <li><strong>Sand:</strong> Tiny grains of rock</li>
                <li><strong>Stones:</strong> Small pieces of rock</li>
                <li><strong>Chalk:</strong> Soft white rock used for writing on blackboards</li>
            </ul>
            <p><strong>What We Predict:</strong> Will any of these dissolve? Or will they sink to the bottom?</p>
            <p><strong>Remember:</strong></p>
            <ul>
                <li><strong>Insoluble</strong> means it does NOT dissolve in water</li>
                <li>Insoluble materials usually sink to the bottom or float on top</li>
                <li>You can sometimes filter insoluble materials out of water using a strainer or filter paper</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella-beach"></i> Beach Day</div>
                <p>When you make a sandcastle at the beach, the sand gets wet but doesn't disappear! That's because sand is insoluble.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Chalk Dust</div>
                <p>If chalk falls into water, it might get soft and crumbly, but it doesn't dissolve completely like sugar does.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-filter"></i> Cleaning Water</div>
                <p>If you have dirty water with sand in it, you can use a paper filter to catch the sand. The clean water passes through!</p>
            </div>
        `,
        taskInstructions: "Experiment with insoluble materials and complete the observation table.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Before the Experiment - Predict</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What do you think will happen to each material in water?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sand: _________________________________</div>
                        <div style="margin-top: 5px;">Stone: ________________________________</div>
                        <div style="margin-top: 5px;">Chalk: ________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Observation Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After experimenting, fill in what you observed:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Did it dissolve? (Yes/No)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">What happened?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sand</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Stone</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Chalk</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a cup of water with sand at the bottom:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How is this different from when sugar dissolves in water?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Do sand, stones, and chalk dissolve in water? What word describes them?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three things at home that you think will NOT dissolve in water. Test them with an adult and write what happens.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Materials and Properties",
        subtopic: "Comparing and Contrasting Soluble and Insoluble Materials",
        lessonContent: `
            <p>Today we will put everything together! We'll compare materials that dissolve with materials that don't.</p>
            <p><strong>Key Question:</strong> How are soluble and insoluble materials different? How are they the same?</p>
            <p><strong>Let's Compare:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 10px; border: 1px solid #ddd;">Soluble Materials</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Insoluble Materials</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">✓ Dissolve in water</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">✗ Do NOT dissolve in water</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">✓ Seem to disappear</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">✗ Stay visible (sink or float)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">✓ Examples: Sugar, salt, soda</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">✗ Examples: Sand, stones, chalk</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">✓ Make the water taste different</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">✗ Do NOT change the taste</td>
                </tr>
            </table>
            <p><strong>Quick Quiz Yourself:</strong></p>
            <ul>
                <li>Does salt dissolve? (Yes - soluble!)</li>
                <li>Does a rock dissolve? (No - insoluble!)</li>
                <li>Can you see sugar after it dissolves? (No - it's invisible!)</li>
                <li>Can you see sand in water? (Yes - it sinks to the bottom!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Comparison Chart</div>
                <p>Think of a T-chart: On one side write SOLUBLE (sugar, salt, juice powder). On the other side write INSOLUBLE (sand, rocks, plastic).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Same but Different</div>
                <p>Both sugar and sand are solids. Both can be poured. But sugar dissolves in water and sand does not!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Real Life Sorting</div>
                <p>When you make lemonade, you add sugar (soluble). But you don't add sand (insoluble) because you wouldn't want to drink sandy lemonade!</p>
            </div>
        `,
        taskInstructions: "Complete a Venn diagram comparing soluble and insoluble materials, then sort materials into two groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Venn Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare soluble and insoluble materials using this Venn diagram:
                    <div style="margin-top: 10px; text-align: center;">
                        <div style="display: inline-block; width: 45%; border: 2px solid #4A90E2; padding: 10px; min-height: 150px; vertical-align: top;">
                            <strong>Soluble</strong><br>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                        <div style="display: inline-block; width: 45%; border: 2px solid #E24A4A; padding: 10px; min-height: 150px; vertical-align: top;">
                            <strong>Insoluble</strong><br>
                            <div class="answer-space" style="height: 120px;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 10px; border: 2px dashed #4CAF50; padding: 10px; text-align: center;">
                        <strong>Both (Same)</strong><br>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Cut and paste or write each material in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 10px;">📋 Word Bank: sugar, sand, salt, stone, soda powder, chalk, flour, pepper</div>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Soluble (Dissolves)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Insoluble (Does NOT Dissolve)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write About It</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why would you use soluble materials when making a drink?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one thing you learned this week about solubility.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing 3 soluble and 3 insoluble materials. Draw a picture of each and label them.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Term 2 Examination",
        subtopic: "Review and Assessment",
        lessonContent: `
            <p>Today is our Term 2 Examination! Don't worry - you have been learning all these topics throughout the term. Let's review what we've learned.</p>
            <p><strong>Topics to Remember:</strong></p>
            <ul>
                <li><strong>Solubility:</strong> Soluble materials dissolve in water; insoluble materials do not</li>
                <li><strong>Examples of Soluble:</strong> Sugar, salt, soda powder, juice powder</li>
                <li><strong>Examples of Insoluble:</strong> Sand, stones, chalk, pepper, plastic</li>
                <li><strong>Key Vocabulary:</strong> Dissolve, soluble, insoluble, predict, observe</li>
            </ul>
            <p><strong>Test Tips:</strong></p>
            <ul>
                <li>Read each question carefully</li>
                <li>Look at pictures for clues</li>
                <li>Take your time - there's no rush</li>
                <li>If you don't know an answer, try your best guess</li>
                <li>Check your work before you finish</li>
            </ul>
            <p><strong>Good luck! You've got this! 🌟</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> You Are Ready!</div>
                <p>Remember all the experiments we did? You watched sugar disappear and sand sink to the bottom. You are a real scientist!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Brain Power</div>
                <p>Take three deep breaths before you start. You know more than you think you do!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Do Your Best</div>
                <p>Your teacher is proud of all your hard work this term. Just do your best - that's all anyone can ask for!</p>
            </div>
        `,
        taskInstructions: "Complete the Term 2 Examination. Answer all questions to show what you have learned.",
        taskContent: `
            <div class="content-box">
                <p><strong>📝 Term 2 Science Examination</strong></p>
                <p><em>Name: ___________________________ Date: ______________</em></p>
                <p><em>Total Points: 25</em></p>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Multiple Choice (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What does it mean when something dissolves in water?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. It floats on top</div>
                        <div>B. It mixes and seems to disappear ✨</div>
                        <div>C. It turns into ice</div>
                        <div>D. It changes color</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Which of these is SOLUBLE?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. Sand</div>
                        <div>B. Stone</div>
                        <div>C. Salt 🧂</div>
                        <div>D. Chalk</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which of these is INSOLUBLE?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. Sugar</div>
                        <div>B. Soda powder</div>
                        <div>C. Juice powder</div>
                        <div>D. Sand 🏖️</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What happens to sugar when you stir it into warm water?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. It sinks to the bottom and stays there</div>
                        <div>B. It dissolves and you can't see it ✨</div>
                        <div>C. It floats to the top</div>
                        <div>D. It turns into a rock</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Which word means "a material that does NOT dissolve"?
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>A. Soluble</div>
                        <div>B. Dissolving</div>
                        <div>C. Insoluble ✨</div>
                        <div>D. Liquid</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: True or False (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Salt dissolves in water. _______ (True/False)
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Stones dissolve in water. _______ (True/False)
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> When sugar dissolves, you can still see it in the water. _______ (True/False)
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Sand is insoluble. _______ (True/False)
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Soda powder dissolves in water. _______ (True/False)
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Fill in the Blank (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> A material that dissolves in water is called _______________.
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> A material that does NOT dissolve in water is called _______________.
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> When you mix sugar and water, the sugar _______________.
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> Two examples of soluble materials are _______________ and _______________.
                </div>
                <div class="task-item">
                    <span class="task-number">15</span> Two examples of insoluble materials are _______________ and _______________.
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Short Answer (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">16</span> What happens when you put sand in a cup of water? (2 points)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">17</span> Why do we stir drinks like hot chocolate or lemonade? (2 points)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">18</span> Name one way soluble and insoluble materials are different. (1 point)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section E: Draw and Label (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">19</span> Draw a cup of water with sugar dissolving in it. (3 points)
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">20</span> Draw a cup of water with sand at the bottom. (2 points)
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Bonus Question (Extra 2 points):</strong></p>
                <div class="task-item">
                    <span class="task-number">⭐</span> What was your favorite experiment this term and why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "No homework this weekend! Enjoy your break and celebrate finishing Term 2! 🎉",
        homeworkDue: "N/A"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek10);
    console.log("grade2-mathscience-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek10);
    console.log("grade2-mathscience-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek10',
        metadata: grade2MathScienceWeek10.metadata,
        days: grade2MathScienceWeek10
    });
    console.log("grade2-mathscience-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek10 = grade2MathScienceWeek10;
console.log("grade2-mathscience-week10.js loaded and registered successfully");