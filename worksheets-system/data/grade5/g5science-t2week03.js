// Grade 5 Science - Term 2 Week 3 Data
const grade5ScienceWeek3 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 3,
        title: "The Journey of Water",
        description: "Exploring the water cycle: evaporation, condensation, precipitation, and transpiration"
    },
    
    monday: {
        subject: "Science",
        topic: "Earth Science",
        subtopic: "Introduction to the Water Cycle",
        lessonContent: `
            <p>Welcome to our exploration of the water cycle! Today we'll discover how water moves around our planet.</p>
            <p><strong>Key Question:</strong> Is the water you drank today the same water that dinosaurs drank millions of years ago?</p>
            <p><strong>Answer:</strong> YES! Water is constantly recycled through the water cycle. The Earth has had the same water for billions of years!</p>
            <p><strong>The Water Cycle:</strong> The continuous movement of water on, above, and below the surface of Earth.</p>
            <p><strong>Main Stages of the Water Cycle:</strong></p>
            <ol>
                <li><strong>Evaporation:</strong> Liquid water turns into water vapor (gas) when heated by the sun
                    <ul><li>Example: Puddles disappearing after rain</li></ul>
                </li>
                <li><strong>Condensation:</strong> Water vapor cools and turns back into liquid water droplets
                    <ul><li>Example: Clouds forming, fog on a mirror</li></ul>
                </li>
                <li><strong>Precipitation:</strong> Water falls from clouds to Earth as rain, snow, sleet, or hail
                    <ul><li>Example: Rain falling from dark clouds</li></ul>
                </li>
            </ol>
            <p><strong>The Sun's Role:</strong> The sun is the "engine" that powers the entire water cycle. Without the sun's heat, water would never evaporate and the cycle would stop!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dinosaur"></i> Dinosaur Connection</div>
                <p>The water you drink today could have been in a river where dinosaurs drank 65 million years ago! The water cycle keeps recycling the same water over and over.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> The Sun's Power</div>
                <p>Every second, the sun evaporates 1 trillion tons of water from Earth's surface! That's like emptying 400 million Olympic swimming pools every minute.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Cloud Fact</div>
                <p>A single fluffy cloud can weigh over 500 tons - as heavy as 100 elephants! But it stays floating because the water droplets are spread out.</p>
            </div>
        `,
        taskInstructions: "Draw and label a diagram of the water cycle showing evaporation, condensation, and precipitation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Water Cycle Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a circular diagram of the water cycle. Include and label:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Evaporation (arrow going UP)</div>
                        <div>• Condensation (clouds forming)</div>
                        <div>• Precipitation (rain falling DOWN)</div>
                        <div>• Sun as the energy source</div>
                        <div>• Ocean, lake, or river as water source</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vocabulary Match</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each term to its correct definition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Evaporation ___ &nbsp;&nbsp; A. Water falling from clouds</div>
                        <div>Condensation ___ &nbsp;&nbsp; B. Liquid water turning into gas (vapor)</div>
                        <div>Precipitation ___ &nbsp;&nbsp; C. Water vapor turning into liquid droplets</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do you think the water cycle is called a "cycle"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen if the sun stopped providing heat?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Observe water outside your home. Where do you see water? Where do you think that water came from and where will it go?",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Earth Science",
        subtopic: "Science in Action (Experiments)",
        lessonContent: `
            <p>Today we'll observe the water cycle in action through simple experiments!</p>
            <p><strong>Key Question:</strong> Can we see evaporation, condensation, and precipitation happening right in front of us?</p>
            <p><strong>Answer:</strong> YES! We'll create mini water cycles in the classroom.</p>
            <p><strong>Three Processes We'll Observe Today:</strong></p>
            <ol>
                <li><strong>Evaporation:</strong> Water changing from liquid to gas (water vapor)</li>
                <li><strong>Condensation:</strong> Water vapor changing back to liquid droplets</li>
                <li><strong>Transpiration:</strong> Water released from plant leaves into the air</li>
            </ol>
            <p><strong>What is Transpiration?</strong></p>
            <ul>
                <li>Plants absorb water through their roots</li>
                <li>Water travels up to the leaves</li>
                <li>Water vapor escapes through tiny holes (stomata) in the leaves</li>
                <li>This is like plants "sweating" or "breathing out" water!</li>
            </ul>
            <p><strong>The "Baggy" Experiment Setup:</strong> When we seal water in a bag and put it in sunlight, we create our own mini water cycle. The sun heats the water (evaporation), water vapor rises and hits cool plastic (condensation), and droplets run down like rain (precipitation).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bag-shopping"></i> Baggy Water Cycle</div>
                <p>If you tape a bag of water to a sunny window, you'll see water "disappear" from the bottom (evaporation), then "appear" as drops on the top and sides (condensation), then trickle down (precipitation).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Plant Sweat</div>
                <p>If you tie a plastic bag around a leaf, tiny water droplets will appear inside the bag after an hour. That's transpiration - water vapor escaping from the leaf!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot"></i> Everyday Condensation</div>
                <p>Have you seen water droplets on the outside of a cold drink? That's condensation - water vapor from the air turning into liquid on the cold surface.</p>
            </div>
        `,
        taskInstructions: "Observe and record the results of the baggy and transpiration experiments.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Baggy Experiment Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Describe what you observe in the water bag taped to the window:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What do you see at the BOTTOM of the bag? _________</div>
                        <div>• What do you see on the TOP and SIDES of the bag? _________</div>
                        <div>• Are water droplets moving down the sides? _________</div>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Draw what you see in the bag:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Transpiration Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For the leaf bag experiment (tied around a leaf on a live plant):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How long did you wait? _________ minutes/hours</div>
                        <div>• What appeared inside the bag? _________</div>
                        <div>• Where did this water come from? _________</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Process Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each observation, write which process is happening:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Water at the bottom of the bag disappears: _________</div>
                        <div>B. Droplets form on the inside of the bag: _________</div>
                        <div>C. Droplets run down the bag sides: _________</div>
                        <div>D. Water appears inside a bag tied around a leaf: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How does the baggy experiment show the water cycle? Explain in 2-3 sentences.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Place a glass of ice water on your kitchen counter. After 15 minutes, observe and record what appears on the outside of the glass. Explain why this happens.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Earth Science",
        subtopic: "Modeling the Cycle",
        lessonContent: `
            <p>Today we'll create a 3D or detailed visual model of the water cycle to bring our learning to life!</p>
            <p><strong>Key Question:</strong> How can we show all the stages of the water cycle in one model?</p>
            <p><strong>Complete Water Cycle (4 Stages):</strong></p>
            <ol>
                <li><strong>Evaporation:</strong> Sun heats water in oceans, lakes, and rivers → Water rises as water vapor</li>
                <li><strong>Transpiration:</strong> Plants release water vapor from their leaves into the air</li>
                <li><strong>Condensation:</strong> Water vapor cools and forms clouds (tiny water droplets)</li>
                <li><strong>Precipitation:</strong> Water falls back to Earth as rain, snow, sleet, or hail</li>
            </ol>
            <p><strong>Collection:</strong> Water gathers in oceans, lakes, rivers, and underground - then the cycle starts again!</p>
            <p><strong>Water Cycle Model Materials:</strong></p>
            <ul>
                <li>Blue paper/markers = Water (oceans, lakes, rivers)</li>
                <li>Cotton balls = Clouds (where condensation happens)</li>
                <li>Arrows = Movement of water</li>
                <li>Dashed/dotted lines = Evaporation (water rising)</li>
                <li>Droplet shapes = Precipitation</li>
                <li>Tree/plant drawings = Transpiration</li>
                <li>Yellow circle = Sun (the energy source)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Model Example</div>
                <p>Your model should show: Sun → heats water → evaporation (arrows up) → transpiration (from trees) → condensation (cotton clouds) → precipitation (rain drops down) → collection (water returns to ocean/lake).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Adding Transpiration</div>
                <p>Don't forget plants! Draw wavy lines rising from tree leaves to show water vapor being released. This water joins the evaporation water to form clouds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-redo-alt"></i> Why It's a Cycle</div>
                <p>The arrow should loop around because water never stops moving. After precipitation, water can evaporate again, and the process repeats forever!</p>
            </div>
        `,
        taskInstructions: "Create a detailed model of the water cycle including evaporation, condensation, precipitation, and transpiration.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Water Cycle Model</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a detailed model of the water cycle. Include all of the following:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Sun (labeled as the energy source)</div>
                        <div>☐ Body of water (ocean, lake, or river) at the bottom</div>
                        <div>☐ Evaporation (arrows pointing UP from water)</div>
                        <div>☐ Transpiration (arrows rising from plants/trees)</div>
                        <div>☐ Clouds (labeled "Condensation")</div>
                        <div>☐ Precipitation (rain/snow falling DOWN)</div>
                        <div>☐ Collection arrows (water flowing back to ocean/lake)</div>
                        <div>☐ Labels for each stage</div>
                    </div>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Label Your Model</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> On your model, write a short explanation for each of these stages:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Evaporation: _________________________________</div>
                        <div style="height: 30px;"></div>
                        <div>• Transpiration: _________________________________</div>
                        <div style="height: 30px;"></div>
                        <div>• Condensation: _________________________________</div>
                        <div style="height: 30px;"></div>
                        <div>• Precipitation: _________________________________</div>
                        <div style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice explaining your model to a partner. Then write your explanation below:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What part of the water cycle do you think is most important? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How does the water cycle affect your daily life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Explain the water cycle to a family member using your model or a drawing. Ask them one question about water and write down their answer.",
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