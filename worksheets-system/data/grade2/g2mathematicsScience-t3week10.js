// Grade 2 Mathematics & Science - Term 3 Week 10 Data
const grade2MathsScienceWeek10 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 10,
        title: "Division Patterns & Waste Management",
        description: "Identifying division patterns, practical money activities up to K99, and understanding household chemical waste management"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Number Patterns",
        subtopic: "Identifying Number Patterns Involving Division",
        lessonContent: `
            <p>Welcome to our division patterns lesson! Today we'll discover how numbers follow special rules when we divide them.</p>
            <p><strong>Key Question:</strong> Can you find the pattern when numbers are divided?</p>
            <p><strong>Introduction:</strong> Division is about sharing things equally. When we look at a list of division problems, we can see patterns that help us solve them faster!</p>
            <p><strong>Division Pattern Examples:</strong></p>
            <ul>
                <li>2 ÷ 2 = 1</li>
                <li>4 ÷ 2 = 2</li>
                <li>6 ÷ 2 = 3</li>
                <li>8 ÷ 2 = 4</li>
                <li>10 ÷ 2 = 5</li>
            </ul>
            <p><strong>Can you see the pattern?</strong> The answer goes up by 1 each time (1, 2, 3, 4, 5). The number we start with goes up by 2 each time!</p>
            <p><strong>More Patterns to Explore:</strong></p>
            <ul>
                <li>Dividing by 1: Any number ÷ 1 = the same number (10 ÷ 1 = 10)</li>
                <li>Dividing by itself: Any number ÷ itself = 1 (7 ÷ 7 = 1)</li>
                <li>Dividing by 10: Just remove the zero (50 ÷ 10 = 5)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> The Skip Counting Pattern</div>
                <p>Dividing by 2 is like skip counting backwards! 10, 8, 6, 4, 2 are all numbers you can share between 2 people equally.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Sharing Cookies</div>
                <p>If you have 12 cookies and share with 4 friends (12 ÷ 4 = 3), that's a pattern! 8 ÷ 4 = 2, 4 ÷ 4 = 1. Each time you have 4 fewer cookies, each friend gets 1 fewer cookie.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> The Pattern Rule</div>
                <p>For 18 ÷ 3 = 6, 15 ÷ 3 = 5, 12 ÷ 3 = 4 — the pattern is "divide by 3" and the answer goes down by 1 each time!</p>
            </div>
        `,
        taskInstructions: "Complete the division patterns and find the missing numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Division Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing numbers in these patterns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 ÷ 2 = 1 &nbsp;&nbsp; 4 ÷ 2 = 2 &nbsp;&nbsp; 6 ÷ 2 = ___ &nbsp;&nbsp; 8 ÷ 2 = ___ &nbsp;&nbsp; 10 ÷ 2 = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 3 ÷ 3 = 1 &nbsp;&nbsp; 6 ÷ 3 = 2 &nbsp;&nbsp; 9 ÷ 3 = ___ &nbsp;&nbsp; 12 ÷ 3 = ___ &nbsp;&nbsp; 15 ÷ 3 = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">c) 5 ÷ 5 = 1 &nbsp;&nbsp; 10 ÷ 5 = 2 &nbsp;&nbsp; 15 ÷ 5 = ___ &nbsp;&nbsp; 20 ÷ 5 = ___ &nbsp;&nbsp; 25 ÷ 5 = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each pattern and write the rule:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 20 ÷ 10 = 2 &nbsp;&nbsp; 30 ÷ 10 = 3 &nbsp;&nbsp; 40 ÷ 10 = 4 &nbsp;&nbsp; 50 ÷ 10 = 5</div>
                        <div>Rule: _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">b) 16 ÷ 4 = 4 &nbsp;&nbsp; 12 ÷ 4 = 3 &nbsp;&nbsp; 8 ÷ 4 = 2 &nbsp;&nbsp; 4 ÷ 4 = 1</div>
                        <div>Rule: _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a division pattern of your own with at least 4 steps:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Maria has 18 stickers. She gives them equally to 3 friends. Then she finds 6 more stickers and shares those equally too. How many stickers did each friend get in total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 division patterns around your home (e.g., sharing snacks, arranging plates, counting steps). Write them down.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "Practical Activities Involving Money up to K99",
        lessonContent: `
            <p>Today we'll practice using money up to K99 in real-life situations!</p>
            <p><strong>Key Question:</strong> How can we use division and addition to make purchases with money up to K99?</p>
            <p><strong>Introduction:</strong> Money helps us buy things we need and want. In Zambia, we use Kwacha (K) to pay for items. Today we'll pretend to shop and practice counting money!</p>
            <p><strong>Zambian Money Notes and Coins:</strong></p>
            <ul>
                <li><strong>Coins:</strong> 5 ngwee, 10 ngwee, 50 ngwee, K1, K2, K5</li>
                <li><strong>Notes:</strong> K2, K5, K10, K20, K50, K100</li>
                <li><strong>Remember:</strong> 100 ngwee = K1</li>
            </ul>
            <p><strong>Money Activities We'll Practice:</strong></p>
            <ol>
                <li>Adding money amounts together</li>
                <li>Finding the correct change</li>
                <li>Sharing money equally (division with money!)</li>
                <li>Comparing prices to stay within a budget</li>
            </ol>
            <p><strong>Example:</strong> If a pencil costs K5 and a notebook costs K15, how much do both cost? K5 + K15 = K20.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Market Shopping</div>
                <p>You have K50. You buy tomatoes for K15, onions for K10, and bread for K12. How much money do you have left? K50 - K37 = K13 left!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Sharing Money</div>
                <p>Three friends share K60 equally. How much does each get? K60 ÷ 3 = K20 each!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Making Change</div>
                <p>If you buy a drink for K8 and give the shopkeeper K20, your change is K20 - K8 = K12.</p>
            </div>
        `,
        taskInstructions: "Complete the money activities and practice making purchases up to K99.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Money</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add the following amounts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) K15 + K10 = _______</div>
                        <div>b) K25 + K30 = _______</div>
                        <div>c) K42 + K17 = _______</div>
                        <div>d) K50 + K35 = _______</div>
                        <div>e) K28 + K31 = _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtraction and Change</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate the change you would receive:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) You buy a book for K25. You pay with K50. Change = _______</div>
                        <div>b) You buy a snack for K8. You pay with K20. Change = _______</div>
                        <div>c) You buy a toy for K37. You pay with K45. Change = _______</div>
                        <div>d) You buy a shirt for K55. You pay with K70. Change = _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sharing Money Equally (Division)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Share the money equally among the friends:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) K30 shared between 2 friends = K_______ each</div>
                        <div>b) K48 shared between 4 friends = K_______ each</div>
                        <div>c) K60 shared between 3 friends = K_______ each</div>
                        <div>d) K90 shared between 5 friends = K_______ each</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Shopping Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> You have K65. Choose items from the list that you can buy without going over K65:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <div>📚 Book = K25 &nbsp;&nbsp; ✏️ Pencil = K3 &nbsp;&nbsp; 🥪 Sandwich = K15</div>
                        <div>🧃 Juice = K8 &nbsp;&nbsp; 🧸 Toy = K30 &nbsp;&nbsp; 📓 Notebook = K12</div>
                        <div>🎨 Crayons = K18 &nbsp;&nbsp; 🍎 Apple = K4 &nbsp;&nbsp; 🏀 Ball = K45</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Budget Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> You need to buy lunch for yourself and a friend. You have K50. What will you buy? List the items and total cost.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Go with a family member to a shop or market. Help them count money and find change for one item under K50.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Waste Management",
        subtopic: "Identifying Household Chemical Wastes",
        lessonContent: `
            <p>Today we'll learn about chemical wastes we might find around our homes and why they need special care!</p>
            <p><strong>Key Question:</strong> What household items contain chemicals that can be harmful to us and the environment?</p>
            <p><strong>Introduction:</strong> Not all waste is the same! Some things in our homes contain chemicals that can be dangerous if not handled properly. These are called household chemical wastes.</p>
            <p><strong>Types of Household Chemical Wastes:</strong></p>
            <ol>
                <li><strong>Cleaning Agents:</strong>
                    <ul>
                        <li>Bleach (used for whitening clothes)</li>
                        <li>Disinfectants (kill germs on surfaces)</li>
                        <li>Drain cleaners (unclog pipes)</li>
                        <li>Oven cleaners</li>
                        <li>Toilet cleaners</li>
                    </ul>
                </li>
                <li><strong>Pesticides:</strong>
                    <ul>
                        <li>Insect sprays (kill cockroaches, ants, mosquitoes)</li>
                        <li>Rat poison</li>
                        <li>Weed killers (herbicides)</li>
                        <li>Fungicides (kill mold and mildew)</li>
                    </ul>
                </li>
                <li><strong>Paints and Related Products:</strong>
                    <ul>
                        <li>Paint (leftover from painting walls or furniture)</li>
                        <li>Paint thinners and removers</li>
                        <li>Varnish and wood stains</li>
                        <li>Glues and adhesives</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Important Safety Rule:</strong> Always look for warning labels like "POISON," "DANGER," "WARNING," or "CAUTION" on these products. Never touch or taste them!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones"></i> Danger Symbols</div>
                <p>Many chemical products have special warning symbols: a skull means poisonous, flames mean flammable, and a hand with drops means corrosive (burns skin).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Around the House</div>
                <p>Look under your kitchen sink or in the garage. You'll likely find cleaning sprays, paint cans, and maybe insect killers. These are all chemical wastes when you're done with them.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Child Safety</div>
                <p>Chemical products should always be stored up high or in locked cabinets where young children cannot reach them. Many child poisonings happen when kids find cleaning products!</p>
            </div>
        `,
        taskInstructions: "Identify and sort household chemical wastes from non-chemical wastes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle the Chemical Wastes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each item. Circle YES if it is a household chemical waste, circle NO if it is not:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A can of insect spray &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>b) An empty apple core &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>c) A bottle of bleach &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>d) Leftover paint in a can &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>e) A banana peel &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>f) Rat poison &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>g) A plastic water bottle &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                        <div>h) Furniture polish &nbsp;&nbsp;&nbsp; YES &nbsp;&nbsp; NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these items into the correct category: bleach, insect spray, leftover paint, drain cleaner, weed killer, empty food wrapper, glass bottle, rat poison
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Cleaning Agents</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Pesticides</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Paints & Related</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Not Chemical Waste</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Warning Labels</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one warning symbol you might find on a chemical product and explain what it means:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "With an adult's help, look under your kitchen sink or in the storage area. List 5 household chemical products you find.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Waste Management",
        subtopic: "Analyzing Effects of Household Wastes to the Environment",
        lessonContent: `
            <p>Today we'll learn what happens when household chemical wastes are not disposed of properly.</p>
            <p><strong>Key Question:</strong> How do household chemical wastes harm our environment?</p>
            <p><strong>Introduction:</strong> When we throw away cleaning products, paints, or pesticides in the wrong way, they can hurt animals, plants, and even people! Let's find out how.</p>
            <p><strong>Effects of Improper Disposal:</strong></p>
            <ul>
                <li><strong>Water Pollution:</strong> Chemicals can leak into rivers and groundwater, making water unsafe to drink and harming fish</li>
                <li><strong>Soil Contamination:</strong> Dangerous chemicals soak into the ground, making it hard for plants to grow</li>
                <li><strong>Air Pollution:</strong> Burning chemical waste releases toxic smoke that harms our lungs</li>
                <li><strong>Harm to Animals:</strong> Wildlife can eat or touch chemical waste and get sick or die</li>
                <li><strong>Harm to People:</strong> Children and adults can get sick from contaminated water, soil, or air</li>
            </ul>
            <p><strong>Real Examples:</strong></p>
            <ul>
                <li>Pouring paint down a drain can poison fish in nearby rivers</li>
                <li>Throwing batteries in regular trash can leak acid into the soil</li>
                <li>Spraying too much insect killer can also kill helpful insects like bees</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish in Danger</div>
                <p>If someone pours bleach down a storm drain, that bleach can flow into a river. Fish and other water animals can get sick or die from the chemicals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Plants Can't Grow</div>
                <p>Soil that has been contaminated with paint thinner or weed killer may not support plant growth for many years. Gardens and farms become useless.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lungs"></i> Breathing Problems</div>
                <p>When people burn trash that contains plastic or chemical containers, the smoke can cause coughing, asthma, and other breathing problems.</p>
            </div>
        `,
        taskInstructions: "Analyze the effects of household chemical waste on the environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Effect</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match each action with its effect on the environment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Pouring paint down the drain</div>
                                <div>• Throwing batteries in regular trash</div>
                                <div>• Burning plastic bottles</div>
                                <div>• Spraying too much insect killer</div>
                                <div>• Throwing chemicals on the ground</div>
                            </div>
                            <div>
                                <div>→ Poisoned soil, plants die</div>
                                <div>→ Fish and river animals get sick</div>
                                <div>→ Toxic smoke, breathing problems</div>
                                <div>→ Acid leaks into soil</div>
                                <div>→ Kills helpful bees and insects</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Effects Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write one bad effect for each type of chemical waste:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Cleaning agents (like bleach):</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>Pesticides (like insect spray):</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;"><strong>Paints and thinners:</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture showing how chemical waste harms the environment. Add labels to explain:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to dispose of household chemical waste properly?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member what they do with leftover paint or old batteries. Write down their answer and share in class tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Waste Management & Final Exam",
        subtopic: "Managing Household Chemical Waste / Term 3 Final Exam",
        lessonContent: `
            <p>Today we'll learn how to safely manage household chemical waste AND complete our Term 3 Final Exam!</p>
            <p><strong>Key Question:</strong> What are the safe ways to manage household chemical waste?</p>
            <p><strong>Introduction:</strong> Now that we know how chemical waste can harm the environment, let's learn what we can do to protect our planet!</p>
            <p><strong>Ways to Manage Household Chemical Waste:</strong></p>
            <ol>
                <li><strong>Reduce:</strong> Only buy what you need. Buy non-toxic or natural cleaners when possible.</li>
                <li><strong>Proper Storage:</strong> Keep chemicals in their original containers with labels. Store in a safe, locked cabinet.</li>
                <li><strong>Never Pour Down Drains:</strong> Don't pour chemicals into sinks, toilets, or storm drains.</li>
                <li><strong>Use Collection Programs:</strong> Many communities have special collection days for hazardous waste.</li>
                <li><strong>Follow Instructions:</strong> Read the label for proper disposal instructions.</li>
                <li><strong>Give Away Extras:</strong> If you have leftover paint or cleaner, ask if a neighbor or community group can use it.</li>
            </ol>
            <p><strong>Safe Alternatives:</strong></p>
            <ul>
                <li>Use vinegar and baking soda for cleaning instead of bleach</li>
                <li>Use natural pest control like neem oil or soap spray</li>
                <li>Use water-based paints instead of oil-based paints</li>
            </ul>
            <p><strong>Remember the 3 R's for Chemical Waste:</strong> Reduce, Reuse (give away), and Dispose Properly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Community Collection</div>
                <p>Some cities have special days when you can bring old paint, batteries, and cleaning products to a safe disposal site. Ask your local council!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Natural Cleaning</div>
                <p>Did you know? Lemon juice removes stains, baking soda scrubs sinks, and vinegar kills germs - all without harmful chemicals!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-helping"></i> Sharing is Caring</div>
                <p>That extra can of paint you don't need? A school or community center might use it for their project instead of buying new paint!</p>
            </div>
        `,
        taskInstructions: "Complete the waste management activities, then take your Term 3 Final Exam.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Good or Bad Disposal?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write GOOD or BAD for each disposal method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Pouring leftover paint down the sink: _________</div>
                        <div>b) Giving extra cleaner to a neighbor: _________</div>
                        <div>c) Throwing batteries in the regular trash: _________</div>
                        <div>d) Taking old chemicals to a collection day: _________</div>
                        <div>e) Using vinegar instead of bleach to clean: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Safety Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a poster teaching others how to safely manage household chemical waste:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Action Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one thing you will do at home to help manage chemical waste better:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box" style="background-color: #fff3cd; border-left: 4px solid #ffc107;">
                <p style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">📝 TERM 3 FINAL EXAM</p>
                <p>Complete the following exam questions. Read each question carefully before answering.</p>
            </div>
            
            <div class="content-box">
                <p><strong>Exam Part 1: Division Patterns (10 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the pattern: 10 ÷ 5 = 2, 15 ÷ 5 = 3, 20 ÷ 5 = ____, 25 ÷ 5 = ____ (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What is the rule for this pattern? 18 ÷ 3 = 6, 15 ÷ 3 = 5, 12 ÷ 3 = 4 (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Solve: 24 ÷ 4 = _____ and 32 ÷ 4 = _____ (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If 9 ÷ 3 = 3 and 12 ÷ 3 = 4, what is 15 ÷ 3? (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create one division fact with the number 7. (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Exam Part 2: Money up to K99 (10 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Add: K32 + K25 = _______ (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> You buy a toy for K28 and give K50. How much change? (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Share K45 equally among 3 friends. Each gets K_______ (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> You have K60. You buy a book for K22 and a snack for K15. How much money left? (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> A pencil costs K4. How many pencils can you buy with K36? (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Exam Part 3: Household Chemical Waste (10 marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Name two types of household chemical waste. (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> Why is it bad to pour paint down the drain? (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> List two safe ways to manage old batteries. (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> Name one natural alternative to chemical cleaners. (2 marks)
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">15</span> Why should you always keep chemicals in their original containers? (2 marks)
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Exam Part 4: Reflection (5 bonus marks)</strong></p>
                <div class="task-item">
                    <span class="task-number">16</span> What is the most important thing you learned in Term 3? Why? (5 bonus marks)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Share with your family one way to safely dispose of household chemical waste. Ask them to help you practice safe chemical handling at home.",
        homeworkDue: "Monday (Next Term)"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsScienceWeek10);
    console.log("grade2-maths-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsScienceWeek10);
    console.log("grade2-maths-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsScienceWeek10',
        metadata: grade2MathsScienceWeek10.metadata,
        days: grade2MathsScienceWeek10
    });
    console.log("grade2-maths-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsScienceWeek10 = grade2MathsScienceWeek10;
console.log("grade2-maths-science-week10.js loaded and registered successfully");