// Grade 5 Science - Term 3 Week 3 Data
const grade5ScienceWeek3 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 3,
        week: 3,
        title: "Ecological Roles & Poultry Production",
        description: "Exploring vertebrate ecological roles, poultry husbandry systems, and housing design"
    },
    
    monday: {
        subject: "Science",
        topic: "Ecology",
        subtopic: "Indirect Economic & Ecological Roles of Vertebrates",
        lessonContent: `
            <p>Welcome! Today we'll explore how vertebrates (animals with backbones) play important roles in our environment and economy - even when we don't see them directly!</p>
            <p><strong>Key Question:</strong> How do animals help us and their ecosystems without us even realizing it?</p>
            <p><strong>Introduction:</strong> Vertebrates do much more than just look beautiful or provide food. They perform critical jobs that keep ecosystems healthy and support human life.</p>
            <p><strong>Three Major Ecological Roles of Vertebrates:</strong></p>
            <ol>
                <li><strong>Insect Pollination:</strong> Birds, bats, and some small mammals help pollinate plants</li>
                <li><strong>Disease Vectors:</strong> Some animals carry diseases, affecting population balance</li>
                <li><strong>Ecosystem Balance:</strong> Predators and prey maintain healthy populations</li>
            </ol>
            <p><strong>Insect Pollination by Vertebrates:</strong></p>
            <ul>
                <li><strong>Birds (Hummingbirds, Sunbirds):</strong> Feed on nectar and transfer pollen between flowers</li>
                <li><strong>Bats:</strong> Night-time pollinators for many fruits (mangoes, bananas, guavas)</li>
                <li><strong>Small Mammals (Monkeys, Lemurs):</strong> Help pollinate while feeding</li>
                <li><strong>Economic Value:</strong> Over 75% of flowering plants need animal pollinators!</li>
            </ul>
            <p><strong>Disease Vectors & Population Control:</strong></p>
            <ul>
                <li><strong>Mosquitoes (carried by birds/bats):</strong> Birds and bats eat thousands of insects daily</li>
                <li><strong>Rodents:</strong> Control insect populations but can spread diseases</li>
                <li><strong>Natural Balance:</strong> Predators keep prey populations from overgrowing</li>
            </ul>
            <p><strong>Key Ecosystem Balance:</strong></p>
            <ul>
                <li>Predators (wolves, eagles, snakes) control herbivore populations</li>
                <li>Herbivores (deer, rabbits) control plant growth</li>
                <li>Scavengers (vultures, hyenas) clean up dead animals</li>
                <li>This balance prevents any one species from taking over</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Pollination Pays!</div>
                <p>Bats pollinate agave plants, which give us tequila. In Africa, sunbirds pollinate many native flowers. Without these vertebrates, farmers would lose billions in crop production!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove"></i> Nature's Cleanup Crew</div>
                <p>Vultures eat dead animals, preventing the spread of diseases like anthrax and rabies. One vulture can eat 1 kg of meat in minutes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> The Butterfly Effect</div>
                <p>When wolves were removed from Yellowstone Park, deer overpopulated and ate all the young trees. After wolves returned, the forest recovered!</p>
            </div>
        `,
        taskInstructions: "Evaluate ecological roles through case studies and create an ecosystem web.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pollination Partners</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Name three vertebrate animals that help pollinate plants and one plant each pollinates:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Disease Vector Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How can the same animal (like a rat) be both helpful (eating insects) and harmful (spreading disease)?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ecosystem Balance Web</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a food web showing at least 8 animals (vertebrates only) and how they connect:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen if the top predator in your web disappeared?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Economic Impact</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Explain one way vertebrates save farmers money without being directly raised for food:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Observe your backyard or local park for 15 minutes. List any vertebrate animals you see and guess their ecological role (pollinator, predator, prey, scavenger).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Introduction to Poultry Husbandry",
        lessonContent: `
            <p>Today we'll learn about poultry farming - one of the most important agricultural activities worldwide!</p>
            <p><strong>Key Question:</strong> What are the different types of poultry production systems and how do we classify chicken breeds?</p>
            <p><strong>What is Poultry?</strong> Domesticated birds raised for eggs, meat, or feathers. The most common is chickens, but also turkeys, ducks, geese, and guinea fowl.</p>
            <p><strong>Three Poultry Production Systems:</strong></p>
            <ol>
                <li><strong>Free-Range System:</strong> Birds roam freely outdoors during the day
                    <ul>
                        <li>✅ Natural behavior, healthier meat/eggs</li>
                        <li>❌ Risk of predators, diseases from wild birds</li>
                    </ul>
                </li>
                <li><strong>Deep Litter System:</strong> Birds kept inside a house with absorbent material (wood shavings, straw) on floor
                    <ul>
                        <li>✅ Protected from weather, easier to manage</li>
                        <li>❌ Higher disease risk if not cleaned properly</li>
                    </ul>
                </li>
                <li><strong>Battery Cage System:</strong> Birds kept in small wire cages
                    <ul>
                        <li>✅ Maximum birds per space, easy egg collection</li>
                        <li>❌ Animal welfare concerns, expensive setup</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Classification of Poultry Breeds by Purpose:</strong></p>
            <ul>
                <li><strong>Laying Breeds (Egg Production):</strong> Leghorn, Rhode Island Red
                    <ul>
                        <li>Lay 250-300 eggs per year</li>
                        <li>Light body weight, active</li>
                    </ul>
                </li>
                <li><strong>Meat Breeds (Broilers):</strong> Cornish Cross, Brahmas
                    <ul>
                        <li>Grow very fast (reach 2kg in 6-8 weeks)</li>
                        <li>Heavy body, tender meat</li>
                    </ul>
                </li>
                <li><strong>Dual-Purpose Breeds (Eggs + Meat):</strong> Sussex, Plymouth Rock
                    <ul>
                        <li>Good for small farms and backyard farmers</li>
                        <li>Lay 180-220 eggs + provide meat</li>
                    </ul>
                </li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg-laying Champions</div>
                <p>A single Leghorn hen can lay over 300 eggs in one year - that's almost one egg every day! Her eggs are white and medium-sized.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drumstick-bite"></i> Fast Food Fact</div>
                <p>Broiler chickens grow so fast that they reach market weight (about 2-2.5 kg) in only 6-7 weeks. That's why chicken is affordable!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> Backyard Heroes</div>
                <p>Dual-purpose breeds are perfect for families. The Sussex hen lays brown eggs AND provides tasty meat. One family can raise 5-10 hens for year-round eggs and occasional meat.</p>
            </div>
        `,
        taskInstructions: "Compare production systems and classify poultry breeds by purpose.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Production Systems Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table comparing poultry systems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">System</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">One Advantage</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">One Disadvantage</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Free-Range</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Deep Litter</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Battery Cage</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Breed Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these breeds into the correct category:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Breeds: Leghorn, Cornish Cross, Sussex, Rhode Island Red, Brahmas, Plymouth Rock</em></p>
                        <div style="margin-top: 10px;">
                            <div><strong>Laying Breeds:</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                            <div><strong>Meat Breeds (Broilers):</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                            <div><strong>Dual-Purpose Breeds:</strong> <span class="answer-space" style="display: inline-block; width: 200px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Planning a Small Farm</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A family wants to raise 20 chickens for both eggs and meat. Which system and which breed would you recommend? Why?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Vocabulary Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Define these terms in your own words:
                    <div>• Poultry: <span class="answer-space" style="display: inline-block; width: 250px;"></span></div>
                    <div>• Broiler: <span class="answer-space" style="display: inline-block; width: 250px;"></span></div>
                    <div>• Free-Range: <span class="answer-space" style="display: inline-block; width: 250px;"></span></div>
                </div>
            </div>
        `,
        homework: "Visit a local market or ask a family member: What types of chicken are sold for meat vs. eggs? Write down your findings.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Agriculture",
        subtopic: "Structural Design for Poultry",
        lessonContent: `
            <p>Today we'll become poultry housing designers! A good chicken house keeps birds healthy and productive.</p>
            <p><strong>Key Question:</strong> How should we design a poultry house to keep birds healthy, safe, and productive?</p>
            <p><strong>Why Housing Matters:</strong></p>
            <ul>
                <li>Protects from weather (rain, sun, cold, wind)</li>
                <li>Prevents predators (dogs, snakes, wild birds, rats)</li>
                <li>Reduces disease through good sanitation</li>
                <li>Improves egg production and growth rates</li>
            </ul>
            <p><strong>Six Critical Housing Requirements:</strong></p>
            <ol>
                <li><strong>Ventilation (Airflow):</strong>
                    <ul>
                        <li>Windows or vents on opposite walls for cross-breeze</li>
                        <li>Removes ammonia from droppings (ammonia causes respiratory disease)</li>
                        <li>Wire mesh instead of solid walls allows air flow</li>
                    </ul>
                </li>
                <li><strong>Sanitation (Cleanliness):</strong>
                    <ul>
                        <li>Easy-to-clean floors (concrete is best)</li>
                        <li>Sloped floors for water drainage</li>
                        <li>Removable perches and nest boxes</li>
                    </ul>
                </li>
                <li><strong>Space Requirements:</strong>
                    <ul>
                        <li>Layers: 2-3 birds per square meter</li>
                        <li>Broilers: 3-4 birds per square meter</li>
                        <li>Nest boxes: 1 box per 5 hens</li>
                    </ul>
                </li>
                <li><strong>Temperature Control:</strong>
                    <ul>
                        <li>Roof insulation keeps heat out in summer</li>
                        <li>Shade trees around the house</li>
                        <li>Chickens need 18-24°C (65-75°F)</li>
                    </ul>
                </li>
                <li><strong>Lighting:</strong>
                    <ul>
                        <li>Windows for natural light (14-16 hours/day for layers)</li>
                        <li>Laying hens need light to produce eggs</li>
                    </ul>
                </li>
                <li><strong>Predator Protection:</strong>
                    <ul>
                        <li>Wire mesh on all openings (1cm holes keep mice out)</li>
                        <li>Buried fencing around the house prevents digging predators</li>
                        <li>Lockable doors for night security</li>
                    </ul>
                </li>
            </ol>
            <p><strong>House Orientation Tip:</strong> Face the house east-west so the long sides face north-south. This prevents the afternoon sun from heating the whole house!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> Ventilation Saves Lives</div>
                <p>Chicken droppings release ammonia gas. In a poorly ventilated house, ammonia builds up and causes blindness, respiratory infections, and reduced egg production.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Kenyan Poultry House Design</div>
                <p>A good design for warm climates: raised floor (keeps rats out), iron sheet roof with insulation (grass or old sacks), wire mesh walls, and a concrete water trough.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> The 1-2-3 Rule</div>
                <p>For a small backyard flock of 10 hens: 5 square meters house space + 15 square meters run + 2 nest boxes + 3 meters of perches.</p>
            </div>
        `,
        taskInstructions: "Plan and sketch optimal poultry housing layouts with ventilation and sanitation features.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Poultry House Sketch</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a labelled diagram of an ideal poultry house for 20 chickens. Label at least 6 features:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Features to include: ventilation windows, nest boxes, perches, feeder, drinker, door, wire mesh, sloped floor, roofing</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Ventilation Planning</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Explain why ventilation is critical for poultry health. Describe two ways to provide good airflow:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sanitation Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a 5-point weekly sanitation checklist for a poultry farmer:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem-Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A farmer complains that her chickens are getting sick often. Her house has solid walls, a dirt floor, and no windows. What three changes would you recommend?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Calculate Space</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A farmer wants to raise 50 broilers (meat chickens) in a deep litter system. Each broiler needs 0.3 square meters. How large must the house be?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How many nest boxes are needed for 30 laying hens (1 box per 5 hens)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a scale plan for a small poultry house (for 10 chickens) showing dimensions, window placement, and key features. Write a paragraph explaining how your design provides good ventilation and sanitation.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek3);
    console.log("grade5-science-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek3);
    console.log("grade5-science-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek3',
        metadata: grade5ScienceWeek3.metadata,
        days: grade5ScienceWeek3
    });
    console.log("grade5-science-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek3 = grade5ScienceWeek3;
console.log("grade5-science-week3.js loaded and registered successfully");