// Grade 4 Science - Term 2 Week 9 Data
const grade4ScienceWeek9 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 9,
        title: "Introduction to Horticulture",
        description: "Understanding horticultural plants, simple propagation methods, and the importance of growing fruits, vegetables, and flowers"
    },
    
    monday: {
        subject: "Science",
        topic: "Horticulture",
        subtopic: "Understanding Horticulture",
        lessonContent: `
            <p>Welcome to our exploration of horticulture! Today we'll learn about a special way of growing plants that gives us delicious fruits, healthy vegetables, and beautiful flowers.</p>
            <p><strong>Key Question:</strong> What makes horticulture different from growing field crops like maize?</p>
            <p><strong>Introduction:</strong> Horticulture is the art and science of growing fruits, vegetables, flowers, and ornamental plants. Unlike large-scale field crops (like maize or wheat), horticulture often happens in smaller, more intensive gardens.</p>
            <p><strong>Three Main Categories of Horticultural Plants:</strong></p>
            <ol>
                <li><strong>Fruits:</strong> Sweet or fleshy plants we eat for dessert or snacks (oranges, guavas, mangoes, bananas)</li>
                <li><strong>Vegetables:</strong> Plants we eat as part of our main meals (rape, cabbage, tomatoes, onions)</li>
                <li><strong>Ornamental Plants:</strong> Flowers and shrubs grown for beauty and decoration (roses, marigolds, bougainvillea)</li>
            </ol>
            <p><strong>What Makes a Good Horticultural Site?</strong></p>
            <ul>
                <li><strong>Water Access:</strong> Horticultural plants need regular watering - more than field crops!</li>
                <li><strong>Protection:</strong> A fence or hedge to keep out goats, chickens, and other animals</li>
                <li><strong>Good Soil:</strong> Loamy soil that drains well and is rich in nutrients</li>
                <li><strong>Sunlight:</strong> Most horticultural plants need 6+ hours of direct sunlight daily</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Fruits We Know</div>
                <p>Oranges, guavas, mangoes, bananas, and watermelons are all horticultural fruits. They grow on trees, vines, or bushes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Vegetables We Eat</div>
                <p>Rape (also called rape greens), cabbage, tomatoes, onions, and pumpkins are horticultural vegetables. They grow in garden beds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fence"></i> Why Protection Matters</div>
                <p>Goats and chickens love eating tender vegetable leaves! A strong fence or hedge keeps your horticultural garden safe from hungry animals.</p>
            </div>
        `,
        taskInstructions: "Identify horticultural plants and draw a suitable garden site.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Horticulture Hero Badge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a "Horticulture Hero" badge by drawing and labeling three categories:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Fruits</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Vegetables</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Ornamental Plants</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Site Selection Game</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List 5 horticultural plants found near your school or home:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a good horticultural garden site. Include:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>• A water source (tap, river, or watering can)</div>
                        <div>• A fence or hedge for protection</div>
                        <div>• Plants growing in rows or beds</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is water access more important for horticultural plants than for field crops like maize?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home or neighborhood. List 3 fruits, 3 vegetables, and 2 ornamental plants you can see. Draw one of each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Horticulture",
        subtopic: "Growing New Plants (Simple Propagation)",
        lessonContent: `
            <p>Today we'll learn how to grow new plants without using seeds! This is called propagation, and it's how many horticultural plants are multiplied.</p>
            <p><strong>Key Question:</strong> How can you grow a new plant from a piece of an existing plant?</p>
            <p><strong>Why Propagate Without Seeds?</strong></p>
            <ul>
                <li>Some plants don't produce good seeds</li>
                <li>Propagation is faster than growing from seed</li>
                <li>The new plant will be exactly like the parent plant (same fruit, same flowers)</li>
            </ul>
            <p><strong>Three Simple Propagation Methods:</strong></p>
            <ol>
                <li><strong>Cuttings:</strong> Taking a stem or leaf and putting it in soil or water until roots grow
                    <ul>
                        <li>Examples: Cassava, roses, sugar cane, sweet potatoes</li>
                        <li>Steps: Cut a healthy stem → Plant in soil → Water regularly</li>
                    </ul>
                </li>
                <li><strong>Budding:</strong> Taking a bud from one plant and attaching it to another plant
                    <ul>
                        <li>Examples: Roses, fruit trees</li>
                    </ul>
                </li>
                <li><strong>Grafting:</strong> Joining a part of one plant to another so they grow together
                    <ul>
                        <li>Examples: Oranges, lemons, mangoes, avocados</li>
                        <li>Why graft? To combine the best qualities of two plants (strong roots + tasty fruit)</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Cassava Cuttings</div>
                <p>Cassava is grown from stem cuttings, not seeds! Farmers plant 30cm long pieces of cassava stem directly into the ground, and new roots and leaves grow.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Water Cuttings</div>
                <p>Have you ever put a sweet potato in water and watched it grow roots and leaves? That's propagation by cutting!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Grafted Citrus</div>
                <p>Your orange tree might have a strong lemon root system! Farmers graft orange branches onto lemon roots so the tree grows strong and produces sweet oranges.</p>
            </div>
        `,
        taskInstructions: "Learn and demonstrate the steps of making a stem cutting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Three Steps of a Stem Cutting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the three steps of making a stem cutting:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Step 1: CUT</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Take a healthy stem</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Step 2: PLANT</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Put in soil or water</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Step 3: WATER</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Keep moist until roots grow</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Propagation Methods Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each method to its description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Cuttings ___</div>
                        <div>2. Budding ___</div>
                        <div>3. Grafting ___</div>
                    </div>
                    <div style="margin-left: 40px; margin-top: 5px;">
                        <div>A. Joining a bud from one plant to another</div>
                        <div>B. Taking a stem and planting it to grow roots</div>
                        <div>C. Joining two plant parts so they grow together</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Cutting Demonstration</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Observe the class cutting demonstration. Draw what you see in the jar or pot:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Predict: What will happen to this cutting in one week? In two weeks?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult at home if they have ever grown a plant from a cutting. If yes, what plant was it? Write or draw what you learned.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Horticulture",
        subtopic: "Why We Grow Them & How to Sell Them",
        lessonContent: `
            <p>Today we'll explore why horticulture is so important and how people can earn money from growing fruits, vegetables, and flowers!</p>
            <p><strong>Key Question:</strong> Why might someone choose to grow vegetables instead of maize on a small piece of land?</p>
            <p><strong>The Importance of Horticultural Plants:</strong></p>
            <ul>
                <li><strong>Food & Health:</strong> Fruits and vegetables provide vitamins that keep our bodies healthy and strong</li>
                <li><strong>Income:</strong> Horticultural crops are high-value - they can bring in good money when sold at market</li>
                <li><strong>Aesthetic (Beauty):</strong> Ornamental flowers make our homes and communities beautiful</li>
                <li><strong>Medicinal:</strong> Some horticultural plants are used in traditional medicine to treat illnesses</li>
                <li><strong>Environmental:</strong> Plants provide shade, fresh air, and habitat for helpful insects</li>
            </ul>
            <p><strong>How to Market Horticultural Products:</strong></p>
            <ul>
                <li><strong>Freshness is Key:</strong> Fruits and vegetables must be sold quickly or kept cool to stay fresh</li>
                <li><strong>Presentation Matters:</strong> Tie vegetables in neat bundles; display fruit in clean baskets</li>
                <li><strong>Cleanliness:</strong> Wash produce before selling to make it look appealing</li>
                <li><strong>Fair Prices:</strong> Know the market price so you don't sell too cheaply</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Vegetables vs. Maize</div>
                <p>A small plot of tomatoes can earn more money than a large field of maize! Vegetables grow faster and sell for higher prices per kilogram.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Market Day Success</div>
                <p>Farmers who wash their vegetables and arrange them neatly in baskets often sell out faster than those who don't. Presentation = more sales!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flower"></i> Flowers for Income</div>
                <p>Ornamental flowers like roses and marigolds can be sold at markets, to hotels, or for special events like weddings and funerals.</p>
            </div>
        `,
        taskInstructions: "Evaluate the benefits of horticulture and design a market display.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Importance Brainstorm</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List four reasons why horticultural plants are important:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. _________________________________</div>
                        <div>b. _________________________________</div>
                        <div>c. _________________________________</div>
                        <div>d. _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Marketing Strategy</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Design a market display for selling fresh vegetables or fruits:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List three tips for selling horticultural products successfully:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Decision Making</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you have a small piece of land, why might you choose to grow vegetables instead of maize? Give two reasons:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is one way horticulture helps your community?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Would you like to start a small horticultural garden? What would you grow and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a farmer or someone who sells vegetables at the market. Ask: What sells best? How do you keep produce fresh? Write down three things you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek9);
    console.log("grade4-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek9);
    console.log("grade4-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek9',
        metadata: grade4ScienceWeek9.metadata,
        days: grade4ScienceWeek9
    });
    console.log("grade4-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek9 = grade4ScienceWeek9;
console.log("grade4-science-week9.js loaded and registered successfully");