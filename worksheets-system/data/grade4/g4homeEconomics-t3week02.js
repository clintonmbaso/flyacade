// Grade 4 Home Economics - Term 3 Week 2 Data
const grade4HomeEconomicsWeek2 = {
    metadata: {
        grade: 4,
        subject: "Home Economics",
        term: 3,
        week: 2,
        title: "Laundry Care & Fabric Labels",
        description: "Understanding the importance of clothing care, interpreting laundry symbols, and performing simple maintenance tasks"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Housekeeping",
        subtopic: "Laundry - Caring for Personal Clothing",
        lessonContent: `
            <p>Welcome to our lesson on laundry care! Today we'll learn why it's important to take care of our clothes properly.</p>
            <p><strong>Key Question:</strong> Why do we need to wash and care for our clothes?</p>
            <p><strong>Introduction:</strong> Our clothes protect us, keep us warm, and help us look our best. Just like we need to take care of our bodies, we need to take care of our clothing too!</p>
            <p><strong>Why Laundry Care Matters:</strong></p>
            <ol>
                <li><strong>Hygiene:</strong> Washing removes dirt, sweat, and germs that can make us sick</li>
                <li><strong>Appearance:</strong> Clean clothes look nice and help us feel confident</li>
                <li><strong>Longer Life:</strong> Proper care makes clothes last longer, saving money and reducing waste</li>
                <li><strong>Comfort:</strong> Clean clothes smell fresh and feel comfortable to wear</li>
                <li><strong>Respect:</strong> Wearing clean clothes shows respect for yourself and others</li>
            </ol>
            <p><strong>Basic Laundry Steps:</strong></p>
            <ul>
                <li><strong>Sorting:</strong> Separate whites from colors, and dark from light</li>
                <li><strong>Checking Pockets:</strong> Always check for items before washing</li>
                <li><strong>Treating Stains:</strong> Spot-clean stains before washing</li>
                <li><strong>Choosing Water Temperature:</strong> Hot for whites/linens, cold for delicates/darks</li>
                <li><strong>Drying:</strong> Air drying vs. machine drying</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Real-Life Example</div>
                <p>Have you ever spilled juice on your favorite shirt? Washing it right away with cold water helps prevent the stain from setting!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Saving Money</div>
                <p>A good quality shirt can last for years if you wash it correctly. Following care instructions means you won't have to buy new clothes as often!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Feeling Good</div>
                <p>Have you noticed how good it feels to put on clean, fresh-smelling clothes? Taking care of your laundry helps you start each day feeling great!</p>
            </div>
        `,
        taskInstructions: "Discuss and reflect on the importance of clothing care.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> After our discussion, write down two reasons why caring for our clothes is important:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Daily Laundry Habits</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three things you can do every day to keep your clothes in good condition:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the clothing items below. Sort them into piles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• White socks</div>
                        <div>• Red t-shirt</div>
                        <div>• Blue jeans</div>
                        <div>• White school shirt</div>
                        <div>• Dark gray sweater</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div><strong>Whites pile:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div><strong>Colors/Lights pile:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div><strong>Darks pile:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Do you help with laundry at home? What do you do? If not, what would you like to learn?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Observe someone doing laundry at home. Write down three steps they follow. Ask them why each step is important.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Home Economics",
        topic: "Housekeeping",
        subtopic: "Laundry - Reading Labels & Simple Repairs",
        lessonContent: `
            <p>Today we'll learn how to read laundry care symbols and perform simple clothing repairs like mending and attaching buttons!</p>
            <p><strong>Key Question:</strong> What do those little symbols on clothing tags mean, and how can we fix small problems?</p>
            <p><strong>Common Laundry Care Symbols:</strong></p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin: 15px 0;">
                <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                    <strong>🧺 Washing Symbols</strong>
                    <div>🫧 Washing tub = Machine wash</div>
                    <div>🫧 Tub with hand = Hand wash</div>
                    <div>🚫 Tub with X = Do not wash</div>
                    <div>🌡️ Numbers (30, 40, 60) = Max temperature (°C)</div>
                </div>
                <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                    <strong>☀️ Drying Symbols</strong>
                    <div>Square with circle = Tumble dry</div>
                    <div>Square with line = Line dry</div>
                    <div>Square with X = Do not tumble dry</div>
                    <div>Square with curved line = Dry flat</div>
                </div>
                <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                    <strong>🔥 Ironing Symbols</strong>
                    <div>Iron = Can iron</div>
                    <div>Iron with dots = Temperature (1 dot = low, 3 dots = high)</div>
                    <div>Iron with X = Do not iron</div>
                    <div>Iron with steam X = No steam</div>
                </div>
                <div style="background: #f5f5f5; padding: 10px; border-radius: 8px;">
                    <strong>⚪ Bleaching Symbols</strong>
                    <div>Triangle = Bleach allowed</div>
                    <div>Triangle with X = Do not bleach</div>
                    <div>Triangle with lines = Non-chlorine bleach only</div>
                </div>
            </div>
            <p><strong>Simple Clothing Maintenance:</strong></p>
            <ul>
                <li><strong>Attaching a Button:</strong> Thread a needle, sew through the button holes, and secure with a knot</li>
                <li><strong>Mending a Small Tear:</strong> Use a needle and thread to stitch the edges together (running stitch or whip stitch)</li>
                <li><strong>Fixing a Loose Hem:</strong> Fold the fabric back and sew with small, even stitches</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Reading Your Own Labels</div>
                <p>Look at the tag inside your shirt or pants right now! Can you find any of the symbols we just learned about?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-undo-alt"></i> Button Emergency</div>
                <p>Imagine you're getting dressed for school and a button pops off! Knowing how to sew it back on means you can fix it yourself in just a few minutes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Saving Memories</div>
                <p>Learning to mend small tears helps you keep your favorite clothes longer. That shirt from grandma or that pair of jeans you love can stay with you!</p>
            </div>
        `,
        taskInstructions: "Practice reading laundry symbols and learn basic mending skills.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Symbol Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each symbol to its meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🫧 Tub with hand → <span class="answer-space-inline" style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></span></div>
                        <div>🔥 Iron with X → <span class="answer-space-inline" style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></span></div>
                        <div>⬛ Square with line → <span class="answer-space-inline" style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></span></div>
                        <div>△ Triangle with X → <span class="answer-space-inline" style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Label Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the clothing tag provided (or one from your own clothing). Draw or describe the symbols you see:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What does this label tell you about how to care for this garment?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Button Sewing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Using the materials provided, practice sewing a button onto fabric:
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Describe your experience: Was it easy or difficult? What steps did you follow?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mending Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Practice mending a small tear or hole using a needle and thread:
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Draw or describe how you repaired the fabric:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Home Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Which laundry symbol do you think is most important to remember? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three clothing items at home. Write down one care symbol from each tag and explain what it means. Practice threading a needle at home!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4HomeEconomicsWeek2);
    console.log("grade4-homeeconomics-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4HomeEconomicsWeek2);
    console.log("grade4-homeeconomics-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4HomeEconomicsWeek2',
        metadata: grade4HomeEconomicsWeek2.metadata,
        days: grade4HomeEconomicsWeek2
    });
    console.log("grade4-homeeconomics-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4HomeEconomicsWeek2 = grade4HomeEconomicsWeek2;
console.log("grade4-homeeconomics-week2.js loaded and registered successfully");