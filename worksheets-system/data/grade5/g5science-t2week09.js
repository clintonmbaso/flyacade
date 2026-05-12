// Grade 5 Science - Term 2 Week 9 Data
const grade5ScienceWeek9 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 9,
        title: "Getting Started with Poultry",
        description: "Exploring poultry breeds, housing design, and cleanliness management for healthy birds"
    },
    
    monday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Types of Poultry Breeds",
        lessonContent: `
            <p>Welcome to our exploration of poultry farming! Today we'll learn about different types of chickens and why farmers choose specific breeds for specific purposes.</p>
            <p><strong>Key Question:</strong> If you wanted to start a business selling eggs, would you buy the same type of chicken as someone who wants to sell meat?</p>
            <p><strong>Introduction:</strong> Not all chickens are the same! Just like dogs have different breeds for different jobs (herding, hunting, companionship), chickens have been bred for specific purposes.</p>
            <p><strong>Three Main Types of Poultry Breeds:</strong></p>
            <ol>
                <li><strong>Laying Breeds (Layers):</strong> Specifically bred to produce a high volume of eggs
                    <ul>
                        <li>Example: White Leghorn</li>
                        <li>Can lay 250-300 eggs per year!</li>
                        <li>Smaller body size - they put energy into eggs, not meat</li>
                    </ul>
                </li>
                <li><strong>Meat Breeds (Broilers):</strong> Bred to grow very fast and heavy for meat production
                    <ul>
                        <li>Example: Cornish Cross</li>
                        <li>Ready for market in 6-8 weeks</li>
                        <li>Large breast and thigh muscles</li>
                    </ul>
                </li>
                <li><strong>Dual-Purpose Breeds:</strong> Birds that are good for both eggs and meat
                    <ul>
                        <li>Example: Rhode Island Red, Plymouth Rock</li>
                        <li>Good egg production (200-250 eggs/year)</li>
                        <li>Decent meat quality when processed</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Egg Production</div>
                <p>A White Leghorn hen can lay nearly one egg every day! That's enough to feed a family breakfast every morning.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Fast Growers</div>
                <p>A broiler chicken can grow from a tiny chick to a 2.5kg bird in just 6-7 weeks. That's like a human baby growing to 100kg in 6 months!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Best of Both Worlds</div>
                <p>Rhode Island Reds are popular on small farms because they provide both brown eggs for the family and a good roasting chicken when needed.</p>
            </div>
        `,
        taskInstructions: "Create a 'Poultry Catalog' showing the three breed types.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Poultry Catalog Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw three different chickens and label them as "Layer," "Broiler," or "Dual-Purpose":
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Layer</strong><br>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">What it provides: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Broiler</strong><br>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">What it provides: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Dual-Purpose</strong><br>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">What it provides: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Breed Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each breed to its best use:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• White Leghorn → _________</div>
                        <div>• Cornish Cross → _________</div>
                        <div>• Rhode Island Red → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Farm Scenario</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A farmer wants to sell eggs to a local restaurant AND raise meat for her family. Which breed should she choose? Why?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Ask at home what type of chicken products your family buys most (eggs or meat). Write down your findings.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Designing the Home (Housing)",
        lessonContent: `
            <p>Today we'll learn how to design a safe and healthy home for poultry!</p>
            <p><strong>Key Question:</strong> What does a chicken need to be safe, healthy, and productive?</p>
            <p><strong>Introduction:</strong> Just like humans need good housing, chickens need proper shelter to stay healthy and produce eggs or meat. A well-designed poultry house prevents disease and protects birds from danger.</p>
            <p><strong>Three Key Requirements for Poultry Housing:</strong></p>
            
            <p><strong>1. Safety - Protection from Predators</strong></p>
            <ul>
                <li>Dogs, snakes, hawks, rats, and even foxes love to eat chickens!</li>
                <li>Wire mesh (chicken wire) should cover all openings</li>
                <li>Doors must close securely, especially at night</li>
                <li>Buried wire can prevent predators from digging underneath</li>
            </ul>
            
            <p><strong>2. Environment - Ventilation and Dry Floors</strong></p>
            <ul>
                <li><strong>Ventilation (Fresh Air):</strong> Windows and vents let fresh air in and remove ammonia from droppings</li>
                <li><strong>Dry Floors:</strong> Wet floors cause disease. Use wood shavings, rice hulls, or straw as bedding (litter)</li>
                <li>Change wet or dirty litter regularly</li>
            </ul>
            
            <p><strong>3. Equipment - Feeders and Drinkers</strong></p>
            <ul>
                <li><strong>Feeders:</strong> Containers that hold chicken feed without wasting it</li>
                <li><strong>Drinkers (Waterers):</strong> Clean, fresh water must always be available</li>
                <li><strong>Nesting Boxes:</strong> For laying hens to lay eggs in a clean, private space</li>
                <li><strong>Perches (Roosts):</strong> Chickens like to sleep off the ground</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Predator Proof</div>
                <p>One farmer lost 20 chickens to a single snake in one night! After installing fine wire mesh over all gaps, no more snakes could enter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> Fresh Air Saves Lives</div>
                <p>Poor ventilation causes respiratory disease in chickens. A simple window on each side of the house creates cross-breeze and removes harmful ammonia gas.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Clean Water</div>
                <p>Chickens drink 2-3 times more water than they eat feed! A bell drinker keeps water clean because chickens can't scratch dirt into it.</p>
            </div>
        `,
        taskInstructions: "Draw a floor plan of a poultry house with all necessary features labeled.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Poultry House Floor Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a floor plan of a poultry house. Label the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Windows for ventilation</div>
                        <div>• Door (secure closure)</div>
                        <div>• Feeding area (feeders)</div>
                        <div>• Watering area (drinkers)</div>
                        <div>• Nesting boxes (for layers)</div>
                        <div>• Perches (roosting bars)</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A farmer's chickens keep getting eaten by hawks during the day. What should the farmer add to the poultry house?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> The chicken house floor is always wet and the birds are getting sick. What is the problem and what should the farmer do?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Equipment Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What equipment would you use for each need?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Giving chickens water: _________</div>
                        <div>• Giving chickens food: _________</div>
                        <div>• Collecting eggs: _________</div>
                        <div>• Chickens sleeping: _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw your own dream chicken coop design. Include at least 5 features that keep chickens safe and healthy.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Cleanliness and Management",
        lessonContent: `
            <p>Today we'll learn how to maintain a healthy environment for poultry through proper cleaning and daily management!</p>
            <p><strong>Key Question:</strong> How does a farmer prevent disease in a poultry house?</p>
            <p><strong>Introduction:</strong> Cleanliness is the most important factor in poultry health. A clean house means healthy birds, more eggs, and better meat production.</p>
            
            <p><strong>Types of Cleaning:</strong></p>
            <ul>
                <li><strong>Dry Cleaning:</strong> Sweeping out dry litter, cobwebs, and dust. Done regularly (daily/weekly).</li>
                <li><strong>Wet Cleaning:</strong> Washing surfaces with water and soap. Done between flocks when the house is empty.</li>
            </ul>
            
            <p><strong>Disinfection & Fumigation:</strong></p>
            <ul>
                <li><strong>Disinfection:</strong> Using special chemicals (disinfectants) to kill germs on floors, walls, and equipment</li>
                <li><strong>Fumigation:</strong> Sealing the house and using gas to kill germs in hard-to-reach places</li>
                <li>These are done BEFORE new chicks arrive to give them a clean, disease-free start</li>
            </ul>
            
            <p><strong>The Feed System - Reducing Waste:</strong></p>
            <ul>
                <li>Feeders should be at the right height (back height of the birds)</li>
                <li>Don't overfill feeders - birds will scratch and waste feed</li>
                <li>Keep feeders away from waterers to prevent wet feed (mold!)</li>
                <li>Clean feeders daily to remove old, wet, or moldy feed</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom"></i> Dry vs. Wet</div>
                <p>Sweep dry litter daily. But once a month, wash waterers with soap and water. Between flocks, scrub and disinfect the entire house!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones"></i> Fumigation Facts</div>
                <p>After thorough cleaning, some farmers fumigate the empty house with formaldehyde gas. This kills any remaining bacteria or viruses before day-old chicks arrive.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Feed Savings</div>
                <p>A farmer who raises feeders to the right height saves 10% on feed costs! That's because chickens can't scratch feed out of the feeder.</p>
            </div>
        `,
        taskInstructions: "Write a 'Daily Checklist' for a poultry farmer and answer management questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Daily Checklist for a Poultry Farmer</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write 5 things a poultry farmer should do EVERY day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________________________________</div>
                        <div>2. _________________________________</div>
                        <div>3. _________________________________</div>
                        <div>4. _________________________________</div>
                        <div>5. _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Cleaning Decisions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Would you use dry cleaning or wet cleaning for each situation?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Removing cobwebs from the ceiling: _________</div>
                        <div>• Cleaning up spilled water on the floor: _________</div>
                        <div>• Preparing empty house for new chicks: _________</div>
                        <div>• Daily sweeping of dry litter: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Feed Management</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A farmer notices chickens are wasting a lot of feed by scratching it out of the feeders. What should they do?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why should feeders and waterers be placed far apart?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Disinfection Knowledge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to disinfect the poultry house BEFORE new chicks arrive (not after)?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sick Bird Check</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> List three signs that a chicken might be sick:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page 'Poultry Farmer's Guide' with 10 rules for keeping chickens healthy. Include tips on breeds, housing, cleaning, feeding, and daily checks.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek9);
    console.log("grade5-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek9);
    console.log("grade5-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek9',
        metadata: grade5ScienceWeek9.metadata,
        days: grade5ScienceWeek9
    });
    console.log("grade5-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek9 = grade5ScienceWeek9;
console.log("grade5-science-week9.js loaded and registered successfully");