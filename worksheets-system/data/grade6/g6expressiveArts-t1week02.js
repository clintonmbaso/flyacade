// Grade 6 Expressive Arts - Week 2 Data
const grade6ExpressiveArtsWeek2 = {
    metadata: {
        grade: 6,
        subject: "Expressive Arts",
        week: 2,
        title: "Safety in Action",
        description: "Learning about protective attire, tools, and safety rules in practical arts contexts"
    },
    
    monday: {
        subject: "Expressive Arts",
        topic: "Safety in Action",
        subtopic: "Gear Up for Safety",
        lessonContent: `
            <p>Welcome to our exploration of safety in practical arts! Today, we'll learn how to protect ourselves by choosing and using the right gear for different tasks.</p>
            <p><strong>Key Concept:</strong> Safety gear and proper attire help prevent accidents and injuries when we're creating, building, or working with materials.</p>
            <p><strong>Why Safety Gear Matters:</strong></p>
            <ul>
                <li>Protects our body from cuts, burns, chemicals, and other hazards</li>
                <li>Helps us work more confidently and comfortably</li>
                <li>Prevents accidents that could stop us from creating art</li>
                <li>Shows we take our work and our safety seriously</li>
            </ul>
            <p><strong>Common Safety Gear:</strong></p>
            <ul>
                <li><strong>Gloves:</strong> Protect hands from heat, chemicals, sharp objects</li>
                <li><strong>Goggles/Safety Glasses:</strong> Protect eyes from splashes, dust, flying particles</li>
                <li><strong>Aprons/Smocks:</strong> Protect clothing and skin from stains, chemicals, paint</li>
                <li><strong>Closed-toe Shoes:</strong> Protect feet from falling objects, spills, sharp tools</li>
                <li><strong>Masks/Respirators:</strong> Protect lungs from dust, fumes, vapors</li>
            </ul>
            <p><strong>Matching Gear to Tasks:</strong> Different activities require different protection. Always think: "What could go wrong?" and "What gear will keep me safe?"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush" style="color: #4A90E2;"></i> Art Studio Example</div>
                <p>When using spray paint or fixative, you need: safety goggles to protect eyes, a mask to avoid breathing fumes, and gloves to keep chemicals off skin.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tools"></i> Woodworking Example</div>
                <p>When sanding wood: wear safety glasses against dust, a dust mask for your lungs, and closed-toe shoes in case tools drop.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Kitchen Arts Example</div>
                <p>When cooking or baking: use oven mitts for hot pans, an apron to protect clothes, and tie back long hair to prevent accidents.</p>
            </div>
        `,
        taskInstructions: "Complete these activities to practice identifying and demonstrating proper safety gear use.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at the "What's Wrong Here?" scenario. List three safety gear items missing and why they're needed:
                <div class="scenario-box" style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-left: 4px solid #FF6B6B;">
                    <strong>Scenario:</strong> Maya is working on a pottery project. She's wearing sandals, a loose long-sleeve shirt, and no eye protection while using a pottery wheel that sprays clay water.
                </div>
                <div class="answer-space" style="height: 120px;"></div>
            </div>
            
            <div class="task-item">
                <span class="task-number">2</span> Match the task with the correct safety gear:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>A. Using strong glue or adhesive ___</div>
                    <div>B. Working with saws or drills ___</div>
                    <div>C. Handling hot materials from oven ___</div>
                    <div>D. Mixing powdered paints or plaster ___</div>
                    <div style="margin-top: 10px;">
                        <em>Gear: 1. Heat-resistant gloves 2. Safety goggles 3. Dust mask 4. Ventilation mask</em>
                    </div>
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">3</span> Create a "Gear Guide" for one of these activities. Draw and label the safety gear needed:
                <div style="display: flex; gap: 15px; margin-top: 10px; flex-wrap: wrap;">
                    <div class="option-box" style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; flex: 1; min-width: 150px;">
                        <input type="radio" id="opt1" name="activity">
                        <label for="opt1"> Painting with aerosols</label>
                    </div>
                    <div class="option-box" style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; flex: 1; min-width: 150px;">
                        <input type="radio" id="opt2" name="activity">
                        <label for="opt2"> Gardening with tools</label>
                    </div>
                    <div class="option-box" style="padding: 10px; border: 1px solid #ddd; border-radius: 5px; flex: 1; min-width: 150px;">
                        <input type="radio" id="opt3" name="activity">
                        <label for="opt3"> Working with hot glue gun</label>
                    </div>
                </div>
                <div class="drawing-area" style="height: 200px; margin-top: 15px; border: 2px dashed #ccc;">
                    <p style="text-align: center; color: #666; padding-top: 80px;">Draw your Gear Guide here. Include at least 3 safety items.</p>
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">4</span> Why is proper FIT important for safety gear? Give two examples:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find three items at home that require safety gear to use safely (example: oven, cleaning chemicals, tools). List the gear needed for each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Expressive Arts",
        topic: "Safety in Action",
        subtopic: "The Golden Rules of Safety",
        lessonContent: `
            <p>Today we'll learn and practice the most important safety rules that apply everywhere we create and work. Rules aren't restrictions—they're tools for safe creativity!</p>
            <p><strong>Key Concept:</strong> Safety rules help prevent accidents before they happen. Knowing and following them lets us focus on our art without getting hurt.</p>
            <p><strong>Universal Safety Rules:</strong></p>
            <ol>
                <li><strong>Walk, Don't Run:</strong> Running in work areas causes trips, spills, and collisions</li>
                <li><strong>Clean as You Go:</strong> Spills, clutter, and scattered tools create hazards</li>
                <li><strong>Ask if Unsure:</strong> Never use equipment or materials you don't understand</li>
                <li><strong>Focus on Your Task:</strong> Distractions lead to accidents—pay attention to what you're doing</li>
                <li><strong>Use Tools Properly:</strong> Every tool has a correct way to be held, used, and stored</li>
                <li><strong>Report Problems:</strong> Tell an adult about broken equipment, spills, or unsafe conditions</li>
            </ol>
            <p><strong>Environment-Specific Rules:</strong></p>
            <ul>
                <li><strong>Art Studio:</strong> No food/drink near chemicals, cap markers tightly, clean brushes properly</li>
                <li><strong>Workshop:</strong> Secure long hair/loose clothing, unplug tools when not in use, work in well-lit areas</li>
                <li><strong>Kitchen:</strong> Turn pot handles inward, use cutting boards, keep flammable items away from stove</li>
                <li><strong>Outdoor Areas:</strong> Check weather conditions, be aware of surroundings, store tools safely</li>
            </ul>
            <p><strong>Being a Safety Leader:</strong> It's not enough to follow rules ourselves—we should kindly remind others and help create a safe space for everyone.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running" style="color: #FF6B6B;"></i> "Walk, Don't Run" Example</div>
                <p>In a busy art room, running could cause you to bump into someone holding sharp tools or hot materials, leading to serious injuries.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom"></i> "Clean as You Go" Example</div>
                <p>Spilled paint on the floor becomes a slipping hazard. Cleaning it immediately prevents someone from falling and getting hurt.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> "Ask if Unsure" Example</div>
                <p>If you find a tool you've never used before, ask for a demonstration instead of trying to figure it out. This prevents misuse and injury.</p>
            </div>
        `,
        taskInstructions: "Practice creating, applying, and demonstrating safety rules through these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Rule Makers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a "Top 5 Safety Rules" poster for ONE of these areas:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin: 15px 0;">
                        <div class="area-option" style="padding: 15px; border: 2px solid #eee; border-radius: 8px;">
                            <strong>📚 Classroom Art Center</strong>
                            <p style="font-size: 0.9em; color: #666;">Where paints, scissors, glue, and craft materials are stored and used</p>
                        </div>
                        <div class="area-option" style="padding: 15px; border: 2px solid #eee; border-radius: 8px;">
                            <strong>🛠️ School Workshop</strong>
                            <p style="font-size: 0.9em; color: #666;">With tools, wood, metal, and building materials</p>
                        </div>
                        <div class="area-option" style="padding: 15px; border: 2px solid #eee; border-radius: 8px;">
                            <strong>🍳 Cooking Station</strong>
                            <p style="font-size: 0.9em; color: #666;">For food preparation, baking, and culinary arts</p>
                        </div>
                        <div class="area-option" style="padding: 15px; border: 2px solid #eee; border-radius: 8px;">
                            <strong>🎭 Drama/Stage Area</strong>
                            <p style="font-size: 0.9em; color: #666;">With props, costumes, lighting, and stage equipment</p>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2; background-color: #f8fbff;">
                        <p style="text-align: center; color: #4A90E2; padding-top: 100px;">Design your poster here. Make it colorful and easy to read!</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Safety Roleplay Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one scenario and write how you would safely intervene:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>A.</strong> Your friend is about to use a hot glue gun while wearing dangling bracelets.</div>
                        <div><strong>B.</strong> Someone is running in the art room carrying scissors pointing outward.</div>
                        <div><strong>C.</strong> A classmate is mixing unknown chemicals "to see what happens."</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 15px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Hazard Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at this picture description. List three hazards and the rule that would fix each:
                    <div class="scenario-box" style="background-color: #fff9e6; padding: 15px; margin: 10px 0; border-left: 4px solid #FFB74D;">
                        <strong>Picture:</strong> A busy craft table. There's spilled water on the floor. Scissors are left open on the table. Extension cords are tangled across the walkway. Someone's bag strap is hanging where people walk.
                    </div>
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write your personal safety pledge. Include three promises about how you'll stay safe and help others stay safe:
                    <div class="answer-space" style="height: 120px; font-style: italic;"></div>
                </div>
            </div>
        `,
        homework: "Observe one room in your home for safety hazards. List three hazards and suggest one safety rule for each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ExpressiveArtsWeek2);
    console.log("expressivearts-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek2);
    console.log("expressiveArts-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ExpressiveArtsWeek2',
        metadata: grade6ExpressiveArtsWeek2.metadata,
        days: grade6ExpressiveArtsWeek2
    });
    console.log("expressiveArts-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek2 = grade6ExpressiveArtsWeek2;
console.log("expressiveArts-week2.js loaded and registered successfully");