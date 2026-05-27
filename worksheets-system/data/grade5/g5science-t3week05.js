// Grade 5 Science - Term 3 Week 5 Data
const grade5ScienceWeek5 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 3,
        week: 5,
        title: "Solar Technology & Electrical Circuits",
        description: "Investigating solar panels, designing solar collectors, and understanding electric circuits"
    },
    
    monday: {
        subject: "Science",
        topic: "Solar Technology",
        subtopic: "How Solar Panels Work",
        lessonContent: `
            <p>Welcome to our exploration of solar technology! Today we'll discover how sunlight can be turned into electricity.</p>
            <p><strong>Key Question:</strong> How do solar panels turn sunlight into electricity?</p>
            <p><strong>Introduction:</strong> Solar panels are amazing devices that capture energy from the sun and convert it into electrical energy we can use to power lights, calculators, and even entire houses!</p>
            <p><strong>How Solar Panels Are Constructed:</strong></p>
            <ol>
                <li><strong>Solar Cells (Photovoltaic Cells):</strong> The basic building blocks of a solar panel. Each cell is made of special materials (usually silicon) that release electrons when struck by sunlight.</li>
                <li><strong>Glass Cover:</strong> A protective transparent layer that lets sunlight through while protecting the cells from weather and damage.</li>
                <li><strong>Metal Frame:</strong> Provides structure and support for the entire panel.</li>
                <li><strong>Backsheet:</strong> A protective layer on the back that prevents moisture and heat from damaging the cells.</li>
                <li><strong>Wiring:</strong> Connects all the solar cells together and carries the electricity out of the panel.</li>
            </ol>
            <p><strong>How Solar Panels Generate Electricity:</strong></p>
            <ul>
                <li><strong>Step 1:</strong> Sunlight hits the solar panel</li>
                <li><strong>Step 2:</strong> The energy from sunlight "knocks loose" electrons in the solar cells</li>
                <li><strong>Step 3:</strong> These moving electrons create an electric current (Direct Current or DC electricity)</li>
                <li><strong>Step 4:</strong> An inverter converts DC electricity to AC electricity (the type used in homes)</li>
                <li><strong>Step 5:</strong> Electricity flows through wires to power devices or charge batteries</li>
            </ul>
            <p><strong>Key Terms:</strong></p>
            <ul>
                <li><strong>Photovoltaic:</strong> The process of converting light into electricity (photo = light, voltaic = electricity)</li>
                <li><strong>Electron:</strong> A tiny particle that carries electricity</li>
                <li><strong>Current:</strong> The flow of electricity through a wire</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Solar Calculator</div>
                <p>A solar calculator has small solar cells that capture light from any source (sun or room light) to power the calculator without batteries!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Solar Homes</div>
                <p>Some houses have solar panels on their roofs. On sunny days, they can generate enough electricity to power all the lights, appliances, and even sell extra electricity back to the power company!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-satellite"></i> Solar in Space</div>
                <p>The International Space Station uses huge solar panels to generate all its electricity. Without solar power, the space station couldn't operate!</p>
            </div>
        `,
        taskInstructions: "Draw and label a solar panel, then explain how it generates electricity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Solar Panel Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the parts of a solar panel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Solar cells (photovoltaic cells)</div>
                        <div>• Glass cover</div>
                        <div>• Metal frame</div>
                        <div>• Wires</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Energy Journey</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the steps of how sunlight becomes electricity in the correct order (1-5):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Inverter changes DC to AC electricity</div>
                        <div>___ Sunlight hits the solar panel</div>
                        <div>___ Electricity flows to power devices</div>
                        <div>___ Electrons move creating electric current (DC)</div>
                        <div>___ Solar cells absorb sunlight energy</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explanation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Explain in your own words: Why do solar panels need sunlight to work?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What are two advantages of using solar energy instead of burning coal or gas?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home or neighborhood. List three devices or places where solar power might be useful. Explain why for each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Solar Technology",
        subtopic: "Designing Solar Collectors",
        lessonContent: `
            <p>Today we'll become solar engineers! We'll learn how to design models that collect and use energy from the sun.</p>
            <p><strong>Key Question:</strong> How can we design devices to capture and use solar energy?</p>
            <p><strong>What is a Solar Collector?</strong></p>
            <p>A solar collector is any device that captures sunlight and converts it into another form of energy - usually heat (thermal energy) or electricity. Solar panels are one type of solar collector!</p>
            <p><strong>Types of Solar Collectors:</strong></p>
            <ol>
                <li><strong>Solar Panels (Photovoltaic):</strong> Turn sunlight directly into electricity</li>
                <li><strong>Solar Water Heaters:</strong> Use sunlight to heat water for baths, washing, or swimming pools</li>
                <li><strong>Solar Ovens:</strong> Use mirrors or reflective surfaces to concentrate sunlight and cook food</li>
                <li><strong>Passive Solar Heating:</strong> Designing buildings to capture sunlight through windows to warm rooms naturally</li>
            </ol>
            <p><strong>Designing Solar Collectors with Local Materials:</strong></p>
            <ul>
                <li><strong>Reflective materials:</strong> Aluminum foil, mirrors, shiny metal cans</li>
                <li><strong>Dark surfaces:</strong> Black paper, black paint (dark colors absorb more heat)</li>
                <li><strong>Insulation:</strong> Cardboard, foam, cloth (to trap heat)</li>
                <li><strong>Transparent covers:</strong> Plastic wrap, glass, clear containers (to let sunlight in but keep heat from escaping)</li>
            </ul>
            <p><strong>Design Principles:</strong></p>
            <ul>
                <li>Angle your collector toward the sun for maximum light capture</li>
                <li>Use dark colors to absorb more heat</li>
                <li>Add a transparent cover to trap heat (greenhouse effect)</li>
                <li>Insulate the back and sides to prevent heat loss</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Solar Oven</div>
                <p>You can make a simple solar oven from a pizza box! Line it with black paper, cover with plastic wrap, and use foil to reflect sunlight. It can heat food or melt cheese on nachos!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-swimmer"></i> Solar Pool Heater</div>
                <p>Many swimming pools use black garden hoses coiled in the sun. Water runs through the hose, absorbs heat from the sun, and returns to the pool warm!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Sun-Heated Room</div>
                <p>Houses with large south-facing windows (in the Northern Hemisphere) capture sunlight during winter. The sunlight warms the floors and walls, which release heat at night.</p>
            </div>
        `,
        taskInstructions: "Design and sketch a solar collector model using locally sourced materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Solar Collector Design Sketch</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Design a solar collector (oven, water heater, or room heater) using local materials. Draw and label your design:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Materials List</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List the materials you would use and explain why you chose each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Material 1: _________ Purpose: _________</div>
                        <div>Material 2: _________ Purpose: _________</div>
                        <div>Material 3: _________ Purpose: _________</div>
                        <div>Material 4: _________ Purpose: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: How It Works</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a paragraph explaining how your solar collector design captures and uses solar energy:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Improvement Ideas</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How could you test your design to see if it works well? What improvements might you make?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a sunny spot at home. Place a black piece of paper and a white piece of paper in the sun for 30 minutes. Touch each one and record which feels warmer. Explain why.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Electricity",
        subtopic: "Fundamentals of Electric Circuits",
        lessonContent: `
            <p>Today we'll explore the basics of electricity and learn how to build simple electric circuits!</p>
            <p><strong>Key Question:</strong> What makes a complete electric circuit?</p>
            <p><strong>What is an Electric Circuit?</strong></p>
            <p>An electric circuit is a complete, closed path that electricity flows through. Think of it like a racetrack for tiny particles called electrons!</p>
            <p><strong>Four Essential Components of Every Circuit:</strong></p>
            <ol>
                <li><strong>Energy Source (Battery or Power Supply):</strong> Provides the "push" that makes electrons move. It has a positive (+) and negative (-) terminal.</li>
                <li><strong>Conductors (Wires):</strong> Carry electricity from the source to the components and back. Usually made of copper because it conducts electricity well.</li>
                <li><strong>Load (Device that uses electricity):</strong> A light bulb, motor, buzzer, or any device that converts electrical energy into another form (light, motion, sound, heat).</li>
                <li><strong>Switch (Optional but useful):</strong> Opens or closes the circuit. When closed (on), electricity flows. When open (off), electricity stops.</li>
            </ol>
            <p><strong>Two Types of Circuits:</strong></p>
            <ul>
                <li><strong>Closed Circuit:</strong> A complete, unbroken path. Electricity flows and the load works (light bulb lights up).</li>
                <li><strong>Open Circuit:</strong> A broken path (switch off, loose wire, gap). Electricity cannot flow and the load does not work.</li>
            </ul>
            <p><strong>Important Safety Rules for Electricity:</strong></p>
            <ul>
                <li>Never touch electrical outlets with wet hands</li>
                <li>Don't put anything other than a plug into an outlet</li>
                <li>Only use batteries for school experiments (not wall outlets)</li>
                <li>If a cord is damaged, tell an adult</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Flashlight Circuit</div>
                <p>A flashlight has a complete circuit: battery (source), metal spring and case (conductors), light bulb (load), and a switch. When you press the switch, the circuit closes and the light turns on!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-charging-station"></i> Like a Bicycle Chain</div>
                <p>Think of a circuit like a bicycle chain. The battery is like your legs pedaling (providing energy). The wires are like the chain (carrying energy). The light bulb is like the wheel (using the energy). If the chain breaks, the wheel stops!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> The Racetrack</div>
                <p>Electrons need a complete track to race around. If there's a gap in the track (open circuit), the race stops. When the track is complete (closed circuit), the electrons zoom around!</p>
            </div>
        `,
        taskInstructions: "Identify circuit components and draw a complete circuit diagram.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Circuit Components</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a simple circuit with these four components and label each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Battery (energy source)</div>
                        <div>• Wires (conductors)</div>
                        <div>• Light bulb (load)</div>
                        <div>• Switch</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete or Not?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each scenario, write CLOSED CIRCUIT or OPEN CIRCUIT:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A light switch is turned ON: _________</div>
                        <div>B. A wire is disconnected from the battery: _________</div>
                        <div>C. You flip the switch to turn off a lamp: _________</div>
                        <div>D. A flashlight is shining brightly: _________</div>
                        <div>E. A broken wire inside a toy: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Component Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each component to its job:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Battery ___ a. Carries electricity</div>
                        <div>2. Wire ___ b. Opens or closes the circuit</div>
                        <div>3. Light bulb ___ c. Provides energy/push</div>
                        <div>4. Switch ___ d. Converts electricity to light</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Connections</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Name three devices in your home that use electric circuits:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would happen if there was a gap in any of these circuits?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Safety First</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> List two electrical safety rules you should always follow:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a circuit diagram of a device in your home (flashlight, lamp, or toy). Label the battery, wires, load, and switch if present.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek5);
    console.log("grade5-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek5);
    console.log("grade5-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek5',
        metadata: grade5ScienceWeek5.metadata,
        days: grade5ScienceWeek5
    });
    console.log("grade5-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek5 = grade5ScienceWeek5;
console.log("grade5-science-week5.js loaded and registered successfully");