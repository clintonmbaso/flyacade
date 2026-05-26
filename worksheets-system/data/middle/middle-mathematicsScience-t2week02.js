// Grade Middle - Term 2 Week 2 Data
const gradeMiddleWeek2 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 2,
        title: "Basic Waste Management",
        description: "Understanding waste types, proper disposal, sorting, and environmental responsibility"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Environmental Science",
        subtopic: "What is Waste?",
        lessonContent: `
            <p>Welcome to our week on waste management! Today we'll learn what waste means and why it matters in our classroom and community.</p>
            <p><strong>Key Question:</strong> What does "garbage" or "trash" mean in our classroom?</p>
            <p><strong>Introduction:</strong> Waste is anything we throw away because we no longer need it. Every day, our classroom creates waste - from pencil shavings to lunch wrappers.</p>
            <p><strong>Types of Waste We Create:</strong></p>
            <ol>
                <li><strong>Paper waste:</strong> Used worksheets, notebook scraps, paper towels</li>
                <li><strong>Plastic waste:</strong> Wrappers, bottles, straws</li>
                <li><strong>Food waste:</strong> Apple cores, banana peels, leftover lunch</li>
                <li><strong>Other waste:</strong> Broken pencils, eraser crumbs, tape</li>
            </ol>
            <p><strong>Why Does Waste Matter?</strong></p>
            <ul>
                <li>Waste doesn't just disappear when we throw it away</li>
                <li>Too much waste harms animals, plants, and our environment</li>
                <li>Some waste can be recycled or reused instead of thrown away</li>
            </ul>
            <p><strong>Classroom Connection:</strong> Let's look at our classroom trash can. What do you see inside? Where will it go after we take it out?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> A Day of Waste</div>
                <p>One student can create up to 2 kilograms of waste per week! Multiply that by 30 students, and our classroom could fill 10 large trash bags every week.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Math Connection</div>
                <p>If our class throws away 60 pieces of paper per day, that's 300 pieces per week. Over a 40-week school year, that's 12,000 pieces of paper!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Think About It</div>
                <p>Where does "away" go when we throw things "away"? Most trash goes to landfills - giant holes in the ground where garbage is buried.</p>
            </div>
        `,
        taskInstructions: "Identify and count waste in your classroom, then complete the reflection questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Waste Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the main trash can in your classroom. List five things you see:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Estimate how many pieces of paper are in the trash can right now:
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Waste Journal</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For one hour, write down everything you or a classmate throws away:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Item 1: _________</div>
                        <div>• Item 2: _________</div>
                        <div>• Item 3: _________</div>
                        <div>• Item 4: _________</div>
                        <div>• Item 5: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What surprised you about the waste in your classroom?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think it's important to understand what we throw away?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at your trash can at home. List five things your family threw away today. Which items could have been reused or recycled?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Environmental Science",
        subtopic: "Designated Bins",
        lessonContent: `
            <p>Today we'll learn how to use designated bins and why dropping trash in the correct spot matters!</p>
            <p><strong>Key Question:</strong> Why do we have different bins for different trash?</p>
            <p><strong>Introduction:</strong> Not all trash goes in the same bin! Designated bins help us sort waste so it can be handled properly.</p>
            <p><strong>Common Bin Colors and Their Uses:</strong></p>
            <ol>
                <li><strong>Black or Gray Bin:</strong> General waste (things that can't be recycled)</li>
                <li><strong>Blue Bin:</strong> Recyclables (paper, cardboard, some plastics)</li>
                <li><strong>Green Bin:</strong> Organic waste (food scraps, yard waste)</li>
                <li><strong>Red Bin:</strong> Hazardous waste (batteries, broken glass, chemicals)</li>
            </ol>
            <p><strong>What Goes in Each Bin?</strong></p>
            <ul>
                <li><strong>General waste bin:</strong> Candy wrappers, used tissues, dirty paper plates, broken crayons</li>
                <li><strong>Recycling bin:</strong> Clean paper, cardboard boxes, plastic bottles, aluminum cans</li>
                <li><strong>Compost/Organics bin:</strong> Apple cores, banana peels, coffee grounds, eggshells</li>
                <li><strong>Special disposal:</strong> Batteries, electronics, paint, medicine</li>
            </ul>
            <p><strong>Why Bother Sorting?</strong> When we put trash in the correct bin, we help recycling work better, reduce landfill waste, and protect the environment!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Recycling Saves Resources</div>
                <p>One recycled aluminum can saves enough energy to power a TV for 3 hours! But that only works if the can goes in the RIGHT bin.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Food Waste Matters</div>
                <p>Food waste in landfills produces methane, a harmful greenhouse gas. When food goes in the green bin, it can become compost for gardens instead!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-battery-full"></i> Hazardous Warning</div>
                <p>A single battery thrown in the regular trash can contaminate 600,000 liters of water - that's enough to fill 3 bathtubs!</p>
            </div>
        `,
        taskInstructions: "Match items to correct bins and create a classroom bin guide.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bin Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each item to the correct bin:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Plastic water bottle</div>
                                <div>• Banana peel</div>
                                <div>• Used tissue</div>
                                <div>• Broken pencil</div>
                                <div>• Cardboard box</div>
                                <div>• Dead battery</div>
                                <div>• Apple core</div>
                            </div>
                            <div>
                                <div>→ Blue Bin (Recycle)</div>
                                <div>→ Green Bin (Organics)</div>
                                <div>→ Black Bin (General)</div>
                                <div>→ Red Bin (Hazardous)</div>
                                <div>→ Blue Bin (Recycle)</div>
                                <div>→ Red Bin (Hazardous)</div>
                                <div>→ Green Bin (Organics)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Classroom Bin Audit</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check your classroom's bins. Are there designated bins? What colors are they?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Find one item in the wrong bin. What is it and where should it go?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create a Bin Guide Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a simple poster showing what belongs in each bin. Include at least 3 examples per bin:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Math Connection - Counting Waste</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If our class correctly recycles 15 plastic bottles per day, how many bottles is that in one school week? (5 days)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Look at the bins in your kitchen at home. What colors are they? Ask a family member what goes in each one.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Environmental Science",
        subtopic: "Solid Waste Sorting",
        lessonContent: `
            <p>Today we'll practice sorting solid waste - especially dry garbage like plastic scraps and loose paper!</p>
            <p><strong>Key Question:</strong> How do we separate different types of dry garbage?</p>
            <p><strong>Introduction:</strong> Solid waste means trash that isn't liquid. Dry solid waste includes paper, plastic, glass, metal, and other items that don't have liquid in them.</p>
            <p><strong>Common Solid Waste Types:</strong></p>
            <ol>
                <li><strong>Paper:</strong> Notebook paper, newspaper, cardboard, envelopes</li>
                <li><strong>Plastic:</strong> Bottles, bags, containers, wrappers, straws</li>
                <li><strong>Metal:</strong> Aluminum cans, tin cans, bottle caps, foil</li>
                <li><strong>Glass:</strong> Bottles, jars (check with teacher before handling!)</li>
                <li><strong>Other:</strong> Rubber, wood, fabric, ceramics</li>
            </ol>
            <p><strong>How to Sort Solid Waste:</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Separate recyclable paper (clean and dry)</li>
                <li><strong>Step 2:</strong> Separate plastic items - check for recycling symbols</li>
                <li><strong>Step 3:</strong> Separate metal cans - rinse if possible</li>
                <li><strong>Step 4:</strong> Put non-recyclable solid waste in general trash</li>
            </ul>
            <p><strong>Important Rule:</strong> Only clean, dry items can be recycled! Food residue ruins recycling.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-newspaper"></i> Paper Facts</div>
                <p>One ton of recycled paper saves 17 trees, 380 gallons of oil, and 7,000 gallons of water! But greasy pizza boxes CANNOT be recycled.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plastic"></i> Plastic Numbers</div>
                <p>Plastics have numbers 1-7 inside the recycling symbol. Numbers 1 and 2 (water bottles, milk jugs) are most commonly recycled.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Math in Waste</div>
                <p>If a school produces 50 kg of paper waste per week and recycles 70% of it, how many kg go to the landfill? (15 kg!)</p>
            </div>
        `,
        taskInstructions: "Practice sorting different solid waste items and calculate recycling rates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will give you a bag of mixed solid waste items. Sort them into categories:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Paper items:</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Plastic items:</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Metal items:</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>Non-recyclable items:</strong> _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Math - Calculate the Waste</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count your sorted items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Paper count: _____</div>
                        <div>Plastic count: _____</div>
                        <div>Metal count: _____</div>
                        <div>Non-recyclable count: _____</div>
                        <div><strong>Total items:</strong> _____</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What percentage of the total items could be recycled?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A student throws a yogurt container in the paper recycling bin. Is this correct? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What should you do with a plastic bottle that still has liquid inside before recycling it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sorting Rules Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write 3 rules for sorting solid waste in your classroom:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "At home, find 5 plastic items and 5 paper items. Check which ones have recycling symbols and write them down.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Environmental Science",
        subtopic: "Liquid Waste",
        lessonContent: `
            <p>Today we'll learn about liquid waste - identifying dirty water or used oils and discussing where they are safely poured!</p>
            <p><strong>Key Question:</strong> Where should we pour dirty water and used oils?</p>
            <p><strong>Introduction:</strong> Liquid waste includes any unwanted liquids - from dirty dishwater to used cooking oil. Pouring these in the wrong place can harm the environment.</p>
            <p><strong>Types of Liquid Waste:</strong></p>
            <ol>
                <li><strong>Gray water:</strong> Water from washing dishes, laundry, or bathing (not toilet water)</li>
                <li><strong>Used cooking oil:</strong> Oil from frying food</li>
                <li><strong>Chemical liquids:</strong> Paint, cleaners, pesticides</li>
                <li><strong>Dirty water:</strong> Water mixed with dirt, soap, or food scraps</li>
            </ol>
            <p><strong>Where DOES Liquid Waste Go?</strong></p>
            <ul>
                <li><strong>Gray water:</strong> Can sometimes be used to water plants (if using safe soaps)</li>
                <li><strong>Used cooking oil:</strong> NEVER down the sink! Let it cool, put in a sealed container, throw in trash</li>
                <li><strong>Toilet water:</strong> Goes to sewage treatment plants</li>
                <li><strong>Chemicals:</strong> Special hazardous waste collection only</li>
            </ul>
            <p><strong>What NOT to Do:</strong></p>
            <ul>
                <li>NEVER pour oil down the sink (it clogs pipes and harms fish)</li>
                <li>NEVER pour chemicals on the ground (they poison soil and groundwater)</li>
                <li>NEVER pour dirty water from cleaning products into rivers or lakes</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-oil-can"></i> The Oil Problem</div>
                <p>One liter of cooking oil poured down the drain can contaminate 1,000 liters of water! It also creates "fatbergs" - giant clogs in sewer pipes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Gray Water Gardening</div>
                <p>Water from washing vegetables or boiling pasta (cooled down!) can be used to water garden plants. It's safe and saves water!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Water Pollution</div>
                <p>Soap from washing cars can run into storm drains and reach rivers, where it harms fish and other aquatic life.</p>
            </div>
        `,
        taskInstructions: "Identify safe and unsafe liquid waste disposal methods and create safety guidelines.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Is This Safe?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write SAFE or UNSAFE and explain why:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>A.</strong> Pouring used cooking oil down the kitchen sink: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>B.</strong> Pouring cooled pasta water on garden plants: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>C.</strong> Pouring paint thinner into a storm drain: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>D.</strong> Putting used oil in a sealed jar and throwing in trash: _________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Liquid Waste at School</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Where do you pour leftover water from your water bottle?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If you had a science experiment with dirty water, where should it go?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Math - Water Usage</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If each student in a class of 30 pours out 250mL of leftover water daily, how many liters of water is that per day?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How many liters per week (5 school days)?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a "Liquid Waste Safety" poster showing 3 things you should NEVER pour down the sink:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen. Ask an adult where they pour used cooking oil. Write down their answer and whether it's safe.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Environmental Science",
        subtopic: "E-Waste & Foods",
        lessonContent: `
            <p>Today we'll learn about two special types of waste: e-waste (broken electronics) and food waste!</p>
            <p><strong>Key Question:</strong> Why do broken phones and leftover food need separate disposal?</p>
            <p><strong>Introduction:</strong> Not all waste is the same. Electronic waste (e-waste) and food waste require special handling to protect the environment and human health.</p>
            <p><strong>What is E-Waste?</strong></p>
            <ul>
                <li>Broken or unwanted electronics: phones, computers, TVs, batteries, chargers</li>
                <li>Contains toxic materials like lead, mercury, and cadmium</li>
                <li>Should NEVER go in regular trash</li>
            </ul>
            <p><strong>What is Food Waste?</strong></p>
            <ul>
                <li>Leftover food, fruit and vegetable peels, spoiled food</li>
                <li>When food waste goes to landfills, it produces methane (a harmful greenhouse gas)</li>
                <li>Can be composted instead of thrown away</li>
            </ul>
            <p><strong>How to Dispose Correctly:</strong></p>
            <ol>
                <li><strong>E-Waste:</strong> Take to special e-waste recycling centers or collection events</li>
                <li><strong>Food Waste:</strong> Compost it or use a green/organics bin</li>
                <li><strong>Leftovers that are still good:</strong> Donate or share instead of throwing away!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> E-Waste Facts</div>
                <p>A single smartphone contains gold, silver, copper, and rare earth metals. Recycling 1 million phones can recover 35 pounds of gold!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Food Waste Math</div>
                <p>Globally, one-third of all food produced is wasted - that's 1.3 billion tons per year! Reducing food waste could feed 2 billion people.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Composting Benefits</div>
                <p>Composting food waste creates rich soil for gardens instead of methane gas in landfills. It's nature's way of recycling!</p>
            </div>
        `,
        taskInstructions: "Identify e-waste and food waste, solve related math problems, and create a waste reduction plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Waste Type</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write E (E-Waste), F (Food Waste), or B (Both) for each item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Broken laptop</div>
                        <div>___ Banana peel</div>
                        <div>___ Old phone charger</div>
                        <div>___ Moldy bread</div>
                        <div>___ Dead AA battery</div>
                        <div>___ Apple core</div>
                        <div>___ Computer mouse</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Math - Waste in Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A school of 500 students throws away 250 kg of food waste per week. How many kg per school year? (40 weeks)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If 30 students each bring 2 electronic devices to recycle, how many total devices is that?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Your friend wants to throw an old cell phone in the classroom trash. What do you tell them?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> List 3 ways to reduce food waste in your school cafeteria:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Personal Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a "Waste Reduction Pledge" - write 3 things YOU will do to reduce e-waste and food waste:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week Review</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most important thing you learned about waste management this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find one electronic item at home that is no longer used (like an old phone, broken toy with batteries, or dead batteries). Ask an adult how to dispose of it properly.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek2);
    console.log("grade-middle-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek2);
    console.log("grade-middle-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek2',
        metadata: gradeMiddleWeek2.metadata,
        days: gradeMiddleWeek2
    });
    console.log("grade-middle-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek2 = gradeMiddleWeek2;
console.log("grade-middle-week2.js loaded and registered successfully");