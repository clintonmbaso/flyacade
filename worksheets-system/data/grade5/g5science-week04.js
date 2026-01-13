// Grade 5 Science - Week 4 Data
const grade5ScienceWeek4 = {
    metadata: {
        grade: 5,
        subject: "Science",
        week: 4,
        title: "Ventilation and First Aid",
        description: "Understanding ventilation importance and basic first aid for suffocation"
    },
    
    monday: {
        subject: "Science",
        topic: "The Importance of Good Ventilation",
        subtopic: "Understanding ventilation basics",
        lessonContent: `
            <p>Today we will learn about <strong>ventilation</strong> and why it is so important for our health and comfort.</p>
            <p><strong>What is Ventilation?</strong> Ventilation is the process of bringing fresh air into indoor spaces and removing stale air. It helps maintain good air quality.</p>
            <p><strong>Why is Good Ventilation Important?</strong></p>
            <ul>
                <li>Removes odors and pollutants</li>
                <li>Reduces humidity and prevents mold</li>
                <li>Provides oxygen for breathing</li>
                <li>Improves concentration and comfort</li>
                <li>Reduces the spread of airborne illnesses</li>
            </ul>
            <p><strong>Consequences of Poor Ventilation:</strong> Headaches, fatigue, mold growth, poor air quality, and increased risk of respiratory problems.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Classroom Ventilation</div>
                <p>Our classroom has windows and doors. When we open them, fresh air comes in and stale air goes out. This is natural ventilation.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Kitchen Ventilation</div>
                <p>In kitchens, exhaust fans remove smoke, steam, and cooking odors. This keeps the air clean and safe to breathe.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Poor Ventilation in a Closed Room</div>
                <p>A room with no windows or air flow can become stuffy, smelly, and uncomfortable. This is poor ventilation.</p>
            </div>
        `,
        taskInstructions: "Observe the ventilation in different spaces. Identify whether they have good or poor ventilation and explain why.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at our classroom. List 3 signs of good ventilation you can see:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Imagine a bathroom with no windows or fan. What problems might occur?
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a well-ventilated bedroom and label the ventilation sources:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
        `,
        homework: "Observe the ventilation in your home. Identify at least 2 areas with good ventilation and 1 area that could be improved.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Science", 
        topic: "Ways of Providing Good Ventilation in Buildings",
        subtopic: "Improving air flow in indoor spaces",
        lessonContent: `
            <p>Today we will explore different methods to provide good ventilation in homes, schools, and workplaces.</p>
            <p><strong>Natural Ventilation Methods:</strong></p>
            <ul>
                <li><strong>Windows and Doors:</strong> Opening them allows cross-ventilation</li>
                <li><strong>Vents and Louvers:</strong> Allow air to flow even when windows are closed</li>
                <li><strong>Skylights:</strong> Openings in roofs that let hot air escape</li>
                <li><strong>Courtyards and Atriums:</strong> Open spaces in buildings that promote air flow</li>
            </ul>
            <p><strong>Mechanical Ventilation Methods:</strong></p>
            <ul>
                <li><strong>Exhaust Fans:</strong> Remove stale air from bathrooms and kitchens</li>
                <li><strong>Air Conditioners:</strong> Cool and circulate air (some also bring in fresh air)</li>
                <li><strong>Air Purifiers:</strong> Filter and clean indoor air</li>
                <li><strong>HVAC Systems:</strong> Heating, Ventilation, and Air Conditioning systems</li>
            </ul>
            <p><strong>How Ventilation Affects Health:</strong> Good ventilation reduces allergens, prevents mold, and provides fresh oxygen for our brains and bodies.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Cross-Ventilation</div>
                <p>When windows are open on opposite sides of a room, air flows through effectively. This is called cross-ventilation.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Bathroom Exhaust Fan</div>
                <p>After a hot shower, steam fills the bathroom. The exhaust fan pulls this moist air out, preventing mold on walls and ceilings.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Classroom Improvements</div>
                <p>If our classroom feels stuffy, we could open more windows, use fans, or request an air purifier to improve ventilation.</p>
            </div>
        `,
        taskInstructions: "Design ventilation improvements for different spaces. Be creative but practical!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Your bedroom has only one small window. Suggest 2 ways to improve its ventilation:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Design a ventilation plan for a kitchen without windows:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Compare natural vs. mechanical ventilation. List one advantage of each:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> How could we improve ventilation in our school cafeteria?
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Create a simple ventilation checklist for your home. Include at least 5 items to check for good air flow.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "First Aid for Suffocation", 
        subtopic: "Recognizing and responding to suffocation emergencies",
        lessonContent: `
            <p>Today we will learn basic first aid for suffocation emergencies. This knowledge could help save a life!</p>
            <p><strong>What is Suffocation?</strong> Suffocation occurs when someone cannot breathe because their airway is blocked or there isn't enough oxygen in the air.</p>
            <p><strong>Common Causes of Suffocation:</strong></p>
            <ul>
                <li>Choking on food or objects</li>
                <li>Smoke inhalation in a fire</li>
                <li>Being in an airtight space with no oxygen</li>
                <li>Chemical fumes or gas leaks</li>
                <li>Drowning (a form of suffocation)</li>
            </ul>
            <p><strong>Signs of a Suffocating Person:</strong></p>
            <ul>
                <li>Unable to speak or breathe</li>
                <li>Gasping for air</li>
                <li>Blue lips or face</li>
                <li>Clutching at throat</li>
                <li>Loss of consciousness</li>
            </ul>
            <p><strong>IMPORTANT:</strong> Always call for adult help or emergency services (911/112) immediately in any suffocation emergency!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Scenario 1: Choking</div>
                <p>A person is eating and suddenly starts clutching their throat, unable to speak. They might be choking on food.</p>
                <p><strong>Action:</strong> Call for help immediately. If trained, perform the Heimlich maneuver.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Scenario 2: Smoke Inhalation</div>
                <p>In a fire, smoke fills a room making it hard to breathe. Smoke contains harmful gases that can cause suffocation.</p>
                <p><strong>Action:</strong> Stay low where air is cleaner, cover mouth with cloth, and evacuate immediately.</p>
            </div>
        `,
        taskInstructions: "Practice the steps for responding to suffocation emergencies. Remember: Your first action should always be to call for adult help!",
        taskContent: `
            <div class="content-box">
                <p><strong>Basic First Aid Steps for Choking (if you are trained):</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the first 3 things you should do if someone is choking:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Prevention is Key:</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List 3 ways to prevent suffocation at home:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Emergency Response:</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What information should you give when calling emergency services?
                    <div class="drawing-area" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Create a safety poster about suffocation prevention:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Discuss with your family: What would you do in a suffocation emergency at home? Identify the emergency numbers in your area.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek4);
    console.log("science-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek4);
    console.log("science-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek4',
        metadata: grade5ScienceWeek4.metadata,
        days: grade5ScienceWeek4
    });
    console.log("science-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek4 = grade5ScienceWeek4;
console.log("science-week4.js loaded and registered successfully");