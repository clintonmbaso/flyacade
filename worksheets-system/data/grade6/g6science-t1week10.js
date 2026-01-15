// Grade 6 Science - Week 10 Data
const grade6ScienceWeek10 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 1,
        week: 10,
        title: "Water Supply and Conservation",
        description: "Understanding water supply systems, treatment methods, and conservation practices"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Water Resources",
        subtopic: "How Water Reaches Us - Centralized vs. Decentralized Systems",
        lessonContent: `
            <p>Welcome to our study of water supply systems! Today we will explore how water travels from natural sources to our homes and communities.</p>
            <p><strong>Key Concept:</strong> Water reaches us through different types of supply systems. We will analyze centralized systems (serving many people) versus decentralized systems (serving individuals or small groups).</p>
            <p><strong>Centralized Water Supply Systems:</strong></p>
            <ul>
                <li>Reservoirs: Large artificial lakes that store water</li>
                <li>Rivers: Natural water sources that are treated and distributed</li>
                <li>Municipal boreholes: Deep wells managed by water authorities</li>
                <li>Serves entire towns or cities through pipelines</li>
            </ul>
            <p><strong>Decentralized Water Supply Systems:</strong></p>
            <ul>
                <li>Individual wells: Private water sources for single homes</li>
                <li>Community boreholes: Shared wells for small communities</li>
                <li>Streams and springs: Natural sources used locally</li>
                <li>Rainwater harvesting: Collecting rainwater for household use</li>
            </ul>
            <p><strong>Why do we need different systems?</strong> Different communities have different needs, resources, and geographical challenges that determine the best water supply method.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Urban Example</div>
                <p>In large cities, centralized systems are common because they can efficiently serve thousands of people from a single treatment plant.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Rural Example</div>
                <p>In remote villages, decentralized systems like community boreholes are often more practical and cost-effective than building extensive pipelines.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Comparison</div>
                <p>Centralized systems require more infrastructure but can provide more consistent water quality. Decentralized systems are simpler but require local management.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to analyze different water supply systems in your community.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: System Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Define these terms in your own words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Centralized water system: 
                            <div class="answer-space" style="height: 60px;"></div>
                        </div>
                        <div>Decentralized water system: 
                            <div class="answer-space" style="height: 60px;"></div>
                        </div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Categorize these water sources as Centralized (C) or Decentralized (D):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Municipal reservoir</div>
                        <div>___ Private backyard well</div>
                        <div>___ Community borehole</div>
                        <div>___ River treatment plant serving a city</div>
                        <div>___ Rainwater collection barrel</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mapping Our Water</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a simple flow chart showing how water travels from a local source to your kitchen tap:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Include: Source → Transportation → Treatment → Distribution → Tap)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Community Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What type of water supply system does your home use? Describe it:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What are two advantages and two disadvantages of this system?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a family member about where your household water comes from. Draw a simple diagram of the journey.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Water Resources",
        subtopic: "Making Water Safe and Functional - Treatment and Engineering",
        lessonContent: `
            <p>Today we will investigate how water is treated to make it safe for use and explore basic engineering concepts in water supply systems.</p>
            <p><strong>Water Treatment Methods:</strong></p>
            <ol>
                <li><strong>Filtration:</strong> Passing water through sand, gravel, or special filters to remove particles</li>
                <li><strong>Sedimentation:</strong> Letting water sit so heavy particles settle to the bottom</li>
                <li><strong>Disinfection:</strong> Using chemicals (like chlorine) or UV light to kill harmful microorganisms</li>
                <li><strong>Boiling:</strong> Heating water to kill bacteria and viruses (common household method)</li>
                <li><strong>Distillation:</strong> Evaporating and condensing water to remove impurities</li>
            </ol>
            <p><strong>Basic Water Supply Infrastructure:</strong></p>
            <ul>
                <li>Pumps: Move water from sources to treatment facilities</li>
                <li>Pipes: Transport water over distances</li>
                <li>Storage tanks: Hold treated water for consistent supply</li>
                <li>Valves: Control water flow and pressure</li>
                <li>Meters: Measure water usage</li>
            </ul>
            <p><strong>Engineering Challenge:</strong> Today we'll design prototypes that demonstrate how water can be moved from a source to a destination!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-filter"></i> Traditional Treatment</div>
                <p>Many communities use layered sand and charcoal filters to clean water naturally. The sand removes large particles while charcoal removes odors and some chemicals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Modern Systems</div>
                <p>City water treatment plants use multiple steps: coagulation, sedimentation, filtration, and disinfection to ensure water is safe for millions of people.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> DIY Solutions</div>
                <p>In areas without piped water, people use hand pumps, gravity-fed systems, or solar-powered pumps to access groundwater.</p>
            </div>
        `,
        taskInstructions: "Investigate water treatment methods and work in groups to design a water supply prototype.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Treatment Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List three different ways your community treats water to make it safe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <div class="answer-space" style="height: 40px; display: inline-block; width: 80%;"></div></div>
                        <div>2. <div class="answer-space" style="height: 40px; display: inline-block; width: 80%;"></div></div>
                        <div>3. <div class="answer-space" style="height: 40px; display: inline-block; width: 80%;"></div></div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Match each treatment method with its purpose:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Filtration ___ a. Kills bacteria and viruses</div>
                        <div>Sedimentation ___ b. Removes solid particles</div>
                        <div>Disinfection ___ c. Lets heavy particles settle</div>
                        <div>Boiling ___ d. Simple home sterilization</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Prototype Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>Group Activity:</strong> Design a water supply system prototype using recycled materials:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Materials:</strong> Plastic bottles, straws, tubing, containers, tape</p>
                        <p><strong>Challenge:</strong> Create a system that moves water from a "well" (one container) to a "home" (another container)</p>
                        <p><strong>Requirements:</strong></p>
                        <ul>
                            <li>Must include at least one pump mechanism (could be squeeze bottle, syringe, etc.)</li>
                            <li>Must include a filter using available materials</li>
                            <li>Must demonstrate water moving from source to destination</li>
                        </ul>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> Draw your group's prototype design:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Label: Water source, Pump, Filter, Pipes, Destination)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most challenging part of designing your prototype?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is proper water treatment important for community health?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Research one traditional water treatment method used in another country. Write a brief description.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Water Resources",
        subtopic: "The Importance of Saving Water - Conservation Methods",
        lessonContent: `
            <p>Today we will explore why water conservation is essential and identify practical ways to prevent water waste in our homes and communities.</p>
            <p><strong>Why Conserve Water?</strong></p>
            <ul>
                <li>Freshwater is a limited resource - only about 2.5% of Earth's water is freshwater</li>
                <li>Saving water reduces energy use (pumping and treating water requires electricity)</li>
                <li>Conservation ensures water availability during droughts</li>
                <li>It saves money on water bills</li>
                <li>It protects ecosystems that depend on water sources</li>
            </ul>
            <p><strong>Common Water Wasters:</strong></p>
            <ol>
                <li>Leaving taps running while brushing teeth or washing dishes</li>
                <li>Long showers (every minute uses about 10 liters of water!)</li>
                <li>Ignoring leaking faucets and toilets (a dripping tap can waste 20 liters per day)</li>
                <li>Overwatering gardens or lawns</li>
                <li>Running washing machines or dishwashers with partial loads</li>
            </ol>
            <p><strong>Conservation Mindset:</strong> Every drop counts! Small changes in daily habits can lead to significant water savings over time.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shower"></i> Shower Savings</div>
                <p>Taking a 5-minute shower instead of a 10-minute shower can save about 50 liters of water each time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-faucet"></i> Leak Impact</div>
                <p>A toilet that continues running after flushing can waste up to 750 liters of water per day - that's enough for 10 baths!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Smart Gardening</div>
                <p>Watering plants early in the morning reduces evaporation. Using mulch around plants helps soil retain moisture longer.</p>
            </div>
        `,
        taskInstructions: "Conduct a water waste audit and create a conservation action plan for your home.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Waste Audit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Investigate common ways water is wasted. Check any that apply in your home:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><input type="checkbox"> Leaving tap running while brushing teeth</div>
                        <div><input type="checkbox"> Long showers (more than 5 minutes)</div>
                        <div><input type="checkbox"> Leaking faucets or pipes</div>
                        <div><input type="checkbox"> Running dishwasher with partial loads</div>
                        <div><input type="checkbox"> Overwatering garden/lawn</div>
                        <div><input type="checkbox"> Washing cars with running hose</div>
                        <div><input type="checkbox"> Other: <div class="answer-space" style="height: 40px; display: inline-block; width: 60%;"></div></div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Choose one water waster from above and estimate how much water could be saved by fixing it:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Conservation Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "Water Conservation Best Practices" poster. Include these methods:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div><strong>In the Bathroom:</strong></div>
                        <div>• Turn off tap while brushing teeth (saves ~8 liters/minute)</div>
                        <div>• Take shorter showers (aim for 5 minutes)</div>
                        <div>• Fix leaking faucets immediately</div>
                        
                        <div style="margin-top: 10px;"><strong>In the Kitchen:</strong></div>
                        <div>• Only run dishwasher with full loads</div>
                        <div>• Wash vegetables in a bowl instead of under running water</div>
                        <div>• Keep drinking water in fridge instead of running tap to cool</div>
                        
                        <div style="margin-top: 10px;"><strong>In the Garden:</strong></div>
                        <div>• Water plants early morning or evening</div>
                        <div>• Use drought-tolerant plants</div>
                        <div>• Collect rainwater for gardening</div>
                        
                        <div style="margin-top: 10px;"><strong>General:</strong></div>
                        <div>• Report public water leaks to authorities</div>
                        <div>• Educate family members about conservation</div>
                        <div>• Install water-efficient appliances when possible</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design your conservation poster layout:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Include: Catchy title, 5-7 conservation tips, colorful illustrations)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Personal Commitment</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What are THREE specific water conservation actions you will start doing this week?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Implement one water conservation method at home for two days. Write about your experience and any challenges.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Water Resources",
        subtopic: "Community Water Solutions - Synthesis and Application",
        lessonContent: `
            <p>Today we will synthesize everything we've learned about water supply, treatment, and conservation to develop comprehensive community water solutions.</p>
            <p><strong>Integrated Water Management:</strong> The best water systems consider all three aspects we've studied:</p>
            <ol>
                <li><strong>Efficient Supply:</strong> Choosing the right system (centralized or decentralized) for the community's needs</li>
                <li><strong>Effective Treatment:</strong> Ensuring water is safe and clean for all uses</li>
                <li><strong>Active Conservation:</strong> Reducing waste to make the most of available resources</li>
            </ol>
            <p><strong>Community Case Studies:</strong></p>
            <ul>
                <li><strong>Urban Community:</strong> Large treatment plants, extensive pipe networks, public education campaigns</li>
                <li><strong>Rural Village:</strong> Community boreholes with hand pumps, local water committees, rainwater harvesting</li>
                <li><strong>Arid Region:</strong> Water recycling systems, drip irrigation, strict conservation rules</li>
            </ul>
            <p><strong>Your Role:</strong> As informed citizens, you can contribute to water solutions by practicing conservation, educating others, and supporting sustainable water policies.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Community Success</div>
                <p>In Rajasthan, India, villages revived traditional rainwater harvesting structures called "johads," increasing groundwater levels and solving water shortages.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Innovation Example</div>
                <p>In Kenya, solar-powered water purification systems provide clean drinking water to remote schools, combining renewable energy with water treatment.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Youth Action</div>
                <p>Students in California started "Fix a Leak Week" campaigns in their schools, identifying and repairing leaks that saved thousands of liters of water.</p>
            </div>
        `,
        taskInstructions: "Apply your knowledge to design a comprehensive water management plan for a hypothetical community.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Community Profile</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose or create a community scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><input type="radio" name="scenario"> Coastal town with 5,000 people</div>
                        <div><input type="radio" name="scenario"> Mountain village with 500 people</div>
                        <div><input type="radio" name="scenario"> Desert city with 50,000 people</div>
                        <div><input type="radio" name="scenario"> Your own idea: <div class="answer-space" style="height: 40px; display: inline-block; width: 60%;"></div></div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Describe your community's main water source and challenges:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Integrated Solution Design</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Design a water management system for your community. Include:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div><strong>Supply System:</strong> (Centralized/Decentralized/Mixed)</div>
                        <div class="answer-space" style="height: 60px; margin: 5px 0;"></div>
                        
                        <div><strong>Treatment Methods:</strong> (How will you ensure water safety?)</div>
                        <div class="answer-space" style="height: 80px; margin: 5px 0;"></div>
                        
                        <div><strong>Conservation Plan:</strong> (How will you reduce waste?)</div>
                        <div class="answer-space" style="height: 80px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Visual Representation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a diagram of your community water system:
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Show: Water source → Collection → Treatment → Storage → Distribution → Homes)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What are three steps your community could take immediately to improve water management?
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">6</span> How can students like you contribute to water conservation in your real community?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week 10 Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> What was the most important thing you learned about water this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of what you learned about water supply, treatment, and conservation. Include at least three facts that surprised you.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek10);
    console.log("grade6-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek10);
    console.log("grade6-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek10',
        metadata: grade6ScienceWeek10.metadata,
        days: grade6ScienceWeek10
    });
    console.log("grade6-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek10 = grade6ScienceWeek10;
console.log("grade6-science-week10.js loaded and registered successfully");