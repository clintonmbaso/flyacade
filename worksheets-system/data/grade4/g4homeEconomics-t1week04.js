// Grade 4 Home Economics - Week 4 Data
const grade4HomeEconomicsWeek4 = {
    metadata: {
        grade: 4,
        subject: "Home Economics",
        week: 4,
        title: "Chemical Safety at Home and School",
        description: "Identifying chemicals, understanding hazard symbols, and basic first aid response"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Identifying Chemicals at Home and School",
        subtopic: "Recognizing common chemicals and classifying hazards",
        lessonContent: `
            <p>Welcome to our lesson on chemical safety! Today we will learn that many everyday items around us are actually chemicals that need careful handling.</p>
            <p><strong>Key Concept:</strong> Chemicals are all around us - in our homes, schools, and gardens. While many are useful, some can be dangerous if not handled properly.</p>
            <p><strong>Identifying Chemicals in Different Environments:</strong></p>
            <ul>
                <li><strong>Home:</strong> Cleaning products under the sink, detergents, air fresheners</li>
                <li><strong>Garden:</strong> Fertilizers, pesticides, weed killers</li>
                <li><strong>School:</strong> Science lab chemicals, art supplies, glue</li>
                <li><strong>Medicine Cabinet:</strong> Certain medicines, rubbing alcohol, hydrogen peroxide</li>
            </ul>
            <p><strong>Classifying Chemical Hazards:</strong></p>
            <ul>
                <li><strong>Flammable:</strong> Can catch fire easily (lighter fluid, some cleaning sprays)</li>
                <li><strong>Corrosive:</strong> Can burn skin or materials (drain cleaners, battery acid)</li>
                <li><strong>Toxic/Poisonous:</strong> Can make you very sick if swallowed, inhaled, or touched (pesticides, certain cleaners)</li>
                <li><strong>Reactive:</strong> Can explode or create dangerous gases if mixed with other chemicals (bleach mixed with ammonia)</li>
            </ul>
            <p><strong>Why this matters:</strong> Knowing what chemicals are and how to handle them safely protects you, your family, and your friends from accidents.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #4A90E2;"></i> Home Chemical Example</div>
                <p>Under most kitchen sinks you might find bleach (corrosive), dish soap (mild chemical), and oven cleaner (corrosive and toxic).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Garden Chemical Example</div>
                <p>Fertilizers help plants grow but can be toxic if eaten. Pesticides kill bugs but are poisonous to people too.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> School Chemical Example</div>
                <p>In science class, you might use vinegar (mild acid) or baking soda. Even these safe chemicals need careful handling.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to learn how to identify and classify common chemicals.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> List three chemical products found in your home and where they are kept:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match these chemicals to their hazard type:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>A. Lighter fluid ___</div>
                    <div>B. Drain cleaner ___</div>
                    <div>C. Rat poison ___</div>
                    <div>D. Bleach mixed with ammonia ___</div>
                    <div style="margin-top: 10px;">
                        <em>Types: 1. Flammable 2. Corrosive 3. Toxic 4. Reactive</em>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw and label a "Safe Storage" picture showing where chemicals should be kept at home:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Include: high shelf, locked cabinet, away from food</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why should chemicals always be kept in their original containers?
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "With an adult's permission, look at three cleaning products at home. Write down one safety warning from each label.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Home Economics",
        topic: "Hazard Symbols and First Aid",
        subtopic: "Understanding safety symbols and emergency response",
        lessonContent: `
            <p>Today we will learn the "language" of safety symbols and what to do if someone is exposed to a dangerous chemical.</p>
            <p><strong>Key Concept:</strong> Hazard symbols on labels are like warning signs that tell us how a chemical might be dangerous. Knowing these symbols can prevent accidents.</p>
            <p><strong>Common Hazard Symbols and Their Meanings:</strong></p>
            <ul>
                <li><strong>Skull and Crossbones:</strong> Poison/Toxic - Can cause death or serious illness</li>
                <li><strong>Flame:</strong> Flammable - Can catch fire easily</li>
                <li><strong>Corrosion Symbol:</strong> Corrosive - Can burn skin or damage materials</li>
                <li><strong>Exclamation Mark:</strong> Irritant - Can cause skin or eye irritation</li>
                <li><strong>Exploding Bomb:</strong> Explosive - Can explode under certain conditions</li>
            </ul>
            <p><strong>Basic First Aid for Chemical Exposure:</strong></p>
            <ol>
                <li><strong>Skin Contact:</strong> Immediately wash with plenty of water for 15-20 minutes</li>
                <li><strong>Eye Contact:</strong> Rinse eyes with clean water for 15-20 minutes, holding eyelids open</li>
                <li><strong>Inhalation:</strong> Move to fresh air immediately</li>
                <li><strong>Swallowing:</strong> DO NOT make the person vomit. Call for help immediately</li>
            </ol>
            <p><strong>Emergency Response:</strong> Always call an adult immediately. If serious, call emergency services. Always have the chemical container ready to show what was involved.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones" style="color: #FF6B6B;"></i> Poison Symbol Example</div>
                <p>The skull and crossbones appears on rat poison, some insecticides, and certain strong cleaners. It means "Danger - Can Kill!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> Flammable Symbol Example</div>
                <p>The flame symbol is on aerosol cans, gasoline, lighter fluid, and some paints. It means "Keep away from heat and flames!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Corrosive Symbol Example</div>
                <p>The corrosion symbol (hand being damaged) appears on drain cleaners, battery acid, and strong oven cleaners. It means "Can burn skin!"</p>
            </div>
        `,
        taskInstructions: "Practice identifying hazard symbols and learn the basic first aid steps for chemical exposure.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symbol Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label the four main hazard symbols:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
                        <div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <p style="text-align: center; font-size: 0.9em;">Poison/Toxic</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <p style="text-align: center; font-size: 0.9em;">Flammable</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <p style="text-align: center; font-size: 0.9em;">Corrosive</p>
                        </div>
                        <div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <p style="text-align: center; font-size: 0.9em;">Irritant</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: First Aid Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What should you do FIRST if a chemical gets on your skin?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How long should you rinse eyes if a chemical gets in them?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why should you NEVER make someone vomit if they swallow a chemical?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Emergency Role Play</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a short script for calling an adult for help:
                    <div class="answer-space" style="height: 100px;"></div>
                    <p style="font-size: 0.9em; color: #666;">Include: What happened, what chemical was involved, what first aid you're doing</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create three safety rules for handling chemicals at home:
                    <div class="answer-space" style="height: 90px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Chemical Safety Poster' with three hazard symbols and what they mean. Include one first aid tip.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4HomeEconomicsWeek4);
    console.log("homeeconomics-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4HomeEconomicsWeek4);
    console.log("homeeconomics-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4HomeEconomicsWeek4',
        metadata: grade4HomeEconomicsWeek4.metadata,
        days: grade4HomeEconomicsWeek4
    });
    console.log("homeeconomics-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4HomeEconomicsWeek4 = grade4HomeEconomicsWeek4;
console.log("homeeconomics-week4.js loaded and registered successfully");