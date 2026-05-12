// Grade 4 Science - Term 2 Week 10 Data
const grade4ScienceWeek10 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 10,
        title: "Crop Production",
        description: "Exploring crop production from land preparation to harvesting, value addition, and marketing"
    },
    
    monday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Planning and Preparing the Land",
        lessonContent: `
            <p>Welcome to our exploration of crop production! Today we'll learn how farmers choose the best place to grow crops and prepare the land.</p>
            <p><strong>Key Question:</strong> What makes a good spot for farming?</p>
            <p><strong>Introduction:</strong> Zambia grows many important field crops. Today we'll learn about three main types:</p>
            <ul>
                <li><strong>Legumes:</strong> Beans and groundnuts (they add nutrients to soil!)</li>
                <li><strong>Cereals:</strong> Maize and sorghum (our staple foods)</li>
                <li><strong>Cucurbits:</strong> Pumpkin and watermelon (vining plants with big fruits)</li>
            </ul>
            <p><strong>Site Selection Checklist - What Makes a "Good" Spot?</strong></p>
            <ol>
                <li><strong>Sunlight:</strong> Crops need 6-8 hours of direct sunlight. No deep shade from trees or buildings!</li>
                <li><strong>Near Water:</strong> The field should be close to a river, well, or tap for easy watering</li>
                <li><strong>Good Soil:</strong> Not too rocky, not too sandy. Dark, crumbly soil is best!</li>
                <li><strong>Flat or Gentle Slope:</strong> Prevents water from washing away the soil</li>
            </ol>
            <p><strong>Land Preparation Steps:</strong></p>
            <ol>
                <li><strong>Clearing:</strong> Removing weeds, rocks, and bushes</li>
                <li><strong>Digging/Tilling:</strong> Turning the soil to make it loose and soft</li>
                <li><strong>Leveling:</strong> Making the ground flat so water spreads evenly</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunlight Matters</div>
                <p>Maize planted in shade grows thin and produces few cobs. Maize planted in full sun grows tall and strong with big, full cobs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Too Rocky?</div>
                <p>If a field has too many rocks, crop roots can't spread out to find water and nutrients. Farmers remove large rocks before planting.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Legumes Are Special</div>
                <p>Groundnuts and beans actually put nitrogen back into the soil! That's why farmers often plant maize (which uses nitrogen) one year, then beans (which adds nitrogen) the next year.</p>
            </div>
        `,
        taskInstructions: "Create a dream school garden map and explain land preparation steps.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Dream School Garden Map</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a map of your "dream school garden." Label:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Water source (tap, well, or river)</div>
                        <div>• Sun direction (draw the sun!)</div>
                        <div>• Bed for cereals (maize/sorghum)</div>
                        <div>• Bed for legumes (beans/groundnuts)</div>
                        <div>• Bed for cucurbits (pumpkin/watermelon)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Land Preparation Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put the land preparation steps in the correct order (1, 2, 3):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Leveling the ground</div>
                        <div>___ Clearing weeds and rocks</div>
                        <div>___ Digging / Turning the soil</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important to remove rocks from a field before planting?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Crop Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each crop to its correct group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Maize → _________ (Legume / Cereal / Cucurbit)</div>
                        <div>• Watermelon → _________ (Legume / Cereal / Cucurbit)</div>
                        <div>• Groundnuts → _________ (Legume / Cereal / Cucurbit)</div>
                        <div>• Pumpkin → _________ (Legume / Cereal / Cucurbit)</div>
                        <div>• Beans → _________ (Legume / Cereal / Cucurbit)</div>
                        <div>• Sorghum → _________ (Legume / Cereal / Cucurbit)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look at a garden or field near your home. Write down what crops you see and classify them as legume, cereal, or cucurbit.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Crop Management (Care and Growth)",
        lessonContent: `
            <p>Today we'll learn how to care for crops so they grow strong and healthy!</p>
            <p><strong>Key Question:</strong> How do we help crops grow to maturity successfully?</p>
            <p><strong>Seed Selection - Start with the Best!</strong></p>
            <ul>
                <li>Choose big, healthy seeds (not broken, shriveled, or moldy)</li>
                <li>Big seeds have more stored food to help baby plants grow strong</li>
                <li>Farmers test seeds by putting them in water - good seeds sink, bad seeds float!</li>
            </ul>
            <p><strong>Feeding the Soil (Soil Fertility):</strong></p>
            <ul>
                <li>Plants need food just like we do!</li>
                <li><strong>Manure:</strong> Animal waste that adds nutrients to soil</li>
                <li><strong>Compost:</strong> Decayed leaves, vegetable peels, and grass</li>
                <li>Fertile soil = dark, crumbly, full of earthworms</li>
            </ul>
            <p><strong>Weeding - Why Weeds Are "Thieves":</strong></p>
            <ul>
                <li>Weeds steal water, sunlight, and nutrients from our crops</li>
                <li>Remove weeds by pulling them out gently (don't disturb crop roots!)</li>
                <li>Weed regularly - small weeds are easier to remove than big ones</li>
            </ul>
            <p><strong>Disease and Pest Control:</strong></p>
            <ul>
                <li>Check leaves for spots (disease) or holes (pests eating them)</li>
                <li>Remove sick leaves to stop disease from spreading</li>
                <li>Use natural methods like planting marigolds to repel insects</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> The Water Test</div>
                <p>Drop seeds in a cup of water. Seeds that float are often empty or damaged and won't grow. Seeds that sink are heavy with food for the baby plant!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Weeds Are Thieves!</div>
                <p>One weed can drink up to 5 liters of water per week - that's water your crop needs! Weeding means more water and food for your maize or beans.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Compost Magic</div>
                <p>Kitchen scraps (banana peels, eggshells, vegetable leaves) can become rich compost. It's like making homemade vitamin food for your soil!</p>
            </div>
        `,
        taskInstructions: "Role-play as a Plant Doctor diagnosing garden problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plant Doctor Visit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each garden problem and give your diagnosis and advice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Garden 1:</strong> "My maize leaves are turning yellow. The soil looks pale and sandy."</div>
                        <div>Diagnosis: ________ (fertility problem / weed problem / pest problem)</div>
                        <div>Advice: ________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Garden 2:</strong> "There are many tall weeds growing right next to my beans. The beans look small and weak."</div>
                        <div>Diagnosis: ________ (fertility problem / weed problem / pest problem)</div>
                        <div>Advice: ________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Garden 3:</strong> "Something is eating holes in my cabbage leaves. I see small green caterpillars!"</div>
                        <div>Diagnosis: ________ (fertility problem / weed problem / pest problem)</div>
                        <div>Advice: ________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Crop Care Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three things farmers do to care for growing crops:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it better to pull weeds when they are small?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Seed Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of a good seed and a bad seed. Explain why one is better:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a farmer or gardener in your family: 'How do you know if your soil is healthy?' Write down their answer.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Harvesting, Value Addition, and Marketing",
        lessonContent: `
            <p>Today we'll learn when to harvest crops and how farmers can earn more money from their produce!</p>
            <p><strong>Key Question:</strong> How do we know a crop is ready to harvest?</p>
            <p><strong>The Harvest Signal - When is it Ready?</strong></p>
            <ul>
                <li><strong>Pumpkin:</strong> Skin is hard and cannot be scratched with a fingernail; color changes from green to orange/yellow</li>
                <li><strong>Maize:</strong> Ears feel full; kernels are hard and dry; husk turns brown</li>
                <li><strong>Groundnuts:</strong> Leaves turn yellow; shells are hard with visible netting pattern</li>
                <li><strong>Watermelon:</strong> The spot where it rests on ground turns from white to yellow; sounds hollow when tapped</li>
            </ul>
            <p><strong>Value Addition - Making It "Better" (and More Profitable!)</strong></p>
            <ul>
                <li>Raw crops sell for less. Processed crops sell for more!</li>
                <li><strong>Groundnuts:</strong> Raw groundnuts vs. roasted groundnuts in small packs</li>
                <li><strong>Tomatoes:</strong> Fresh tomatoes vs. tomato jam, sauce, or dried tomatoes</li>
                <li><strong>Maize:</strong> Raw maize vs. maize meal (breakfast porridge) or roasted maize</li>
                <li><strong>Pumpkin:</strong> Whole pumpkin vs. pumpkin seeds (roasted as snacks!)</li>
            </ul>
            <p><strong>Marketing - Where and How to Sell:</strong></p>
            <ul>
                <li>Local markets (biggest crowds, many buyers)</li>
                <li>Roadside stands (good for travelers passing by)</li>
                <li>Selling to schools (for feeding programs)</li>
                <li>Setting a fair price: Cost of growing + reasonable profit = selling price</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Value Addition Math</div>
                <p>1 kg raw groundnuts = 10 kwacha. Roast them and divide into 10 small packs at 2 kwacha each = 20 kwacha! Same groundnuts, double the money!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> The Pumpkin Opportunity</div>
                <p>Selling a whole pumpkin might earn 15 kwacha. But roasting the seeds (5 kwacha per pack) and selling pumpkin chunks (10 kwacha) could earn 25 kwacha total!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Know Your Customer</div>
                <p>Schools buy large quantities of maize for porridge. Roadside travelers buy small snacks like roasted groundnuts. Different customers want different things!</p>
            </div>
        `,
        taskInstructions: "Create a market poster for a value-added crop product.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Harvest Signals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each crop to its harvest signal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pumpkin ___ a. Kernels hard and dry; husk turns brown</div>
                        <div>• Maize ___ b. Spot on ground turns from white to yellow</div>
                        <div>• Watermelon ___ c. Leaves turn yellow; shells have netting pattern</div>
                        <div>• Groundnuts ___ d. Skin hard; color changes to orange/yellow</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Value Addition Ideas</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each crop, think of one way to add value (make it more profitable):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Maize: _________</div>
                        <div>• Tomatoes: _________</div>
                        <div>• Pumpkins: _________</div>
                        <div>• Groundnuts: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Market Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "Market Poster" for a crop product. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A drawing of the product (with value addition - e.g., roasted, packed, or processed)</div>
                        <div>• A price tag</div>
                        <div>• One reason why people should buy it (e.g., "Fresh organic pumpkins - Sweet and healthy!")</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Marketing Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you grew 20 kg of maize, where would you sell it and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is value addition important for farmers?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask at home: What is the price of maize, groundnuts, or tomatoes at your local market? Write down the price and suggest one way to add value to that crop.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek10);
    console.log("grade4-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek10);
    console.log("grade4-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek10',
        metadata: grade4ScienceWeek10.metadata,
        days: grade4ScienceWeek10
    });
    console.log("grade4-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek10 = grade4ScienceWeek10;
console.log("grade4-science-week10.js loaded and registered successfully");