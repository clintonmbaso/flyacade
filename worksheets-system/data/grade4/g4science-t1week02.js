// Grade 4 Science - Week 2 Data
const grade4ScienceWeek2 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 1,
        week: 2,
        title: "The Respiratory System",
        description: "Introduction to the human respiratory system, its parts, and functions"
    },
    
    monday: {
        subject: "Science",
        topic: "The Human Body",
        subtopic: "The Respiratory System - Introduction",
        lessonContent: `
            <p>Welcome to our study of the human respiratory system! Today we will explore how we breathe and why it is so important for our bodies.</p>
            <p><strong>Key Concept:</strong> The respiratory system is the group of organs that helps us breathe. It brings oxygen into our body and removes carbon dioxide.</p>
            <p><strong>Why Do We Breathe?</strong></p>
            <ul>
                <li>Our bodies need oxygen to turn food into energy</li>
                <li>We breathe out waste gas called carbon dioxide</li>
                <li>Every cell in our body needs oxygen to survive</li>
                <li>Breathing helps us speak, sing, and smell</li>
            </ul>
            <p><strong>Why is breathing important?</strong> Without breathing, our bodies wouldn't get the oxygen needed for energy. We breathe automatically without thinking about it - even when we're sleeping!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind" style="color: #4A90E2;"></i> Real-Life Example</div>
                <p>Think of breathing like blowing up a balloon. When you breathe in, your lungs fill with air like a balloon. When you breathe out, the air leaves just like air leaving a balloon.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Did You Know?</div>
                <p>The average person takes about 20,000 breaths every day! That's about 12-16 breaths per minute when resting.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Activity Connection</div>
                <p>When you run or play sports, you breathe faster because your muscles need more oxygen to create energy for movement.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to reinforce your understanding of the respiratory system.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Class Discussion: Why do we breathe? Write 2-3 key points from our discussion:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> In your own words, describe what the respiratory system does:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a simple picture showing what happens when we breathe in and breathe out:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Label your drawing: Breathe IN and Breathe OUT)</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is oxygen important for our bodies? Explain:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Observe your breathing for one minute. Count how many times you breathe in and out. Write down your observations.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "The Human Body",
        subtopic: "Parts of the Respiratory System",
        lessonContent: `
            <p>Today we will learn about the main parts of the respiratory system. Each part has a special job in helping us breathe!</p>
            <p><strong>The Main Parts of the Respiratory System:</strong></p>
            <ol>
                <li><strong>Nose and Mouth:</strong> Where air enters our body. The nose has tiny hairs that filter dust from the air.</li>
                <li><strong>Trachea (Windpipe):</strong> A tube that carries air from the nose/mouth to the lungs. It's protected by rings of cartilage.</li>
                <li><strong>Bronchi:</strong> Two tubes that branch off from the trachea, one going to each lung.</li>
                <li><strong>Lungs:</strong> Two sponge-like organs where oxygen enters the blood and carbon dioxide leaves the blood.</li>
            </ol>
            <p><strong>The Breathing Pathway:</strong> Air follows this path: Nose/Mouth → Trachea → Bronchi → Lungs</p>
            <p><strong>Important Fact:</strong> The lungs are not muscles - they are soft, spongy organs that are protected by our rib cage.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-filter"></i> Nose Function</div>
                <p>Your nose acts like an air filter! Tiny hairs called cilia trap dust and germs before they can enter your lungs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> The Air Pathway</div>
                <p>The trachea and bronchi are like highways for air. They make sure air travels quickly and safely to your lungs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Lung Structure</div>
                <p>Inside your lungs are tiny air sacs called alveoli. If you spread them all out, they would cover a tennis court!</p>
            </div>
        `,
        taskInstructions: "Match the respiratory system parts to their functions and complete the labeling activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Parts to Their Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each part with its correct function:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Nose ___ a. Carries air to the lungs</div>
                        <div>2. Trachea ___ b. Where oxygen enters the blood</div>
                        <div>3. Bronchi ___ c. Filters and warms incoming air</div>
                        <div>4. Lungs ___ d. Branches that lead to each lung</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Air enters through the ______ or mouth.</div>
                        <div>The ______ is also called the windpipe.</div>
                        <div>The trachea splits into two ______.</div>
                        <div>______ are where gas exchange happens.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Labeling Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Label the four main parts of the respiratory system on your worksheet:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Nose</li>
                        <li>Trachea</li>
                        <li>Bronchi</li>
                        <li>Lungs</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Short Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important that air gets filtered in the nose before reaching the lungs?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What would happen if the trachea was blocked?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw and label the four main parts of the respiratory system. Use arrows to show the path of air through the system.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "The Human Body",
        subtopic: "Drawing the Respiratory System",
        lessonContent: `
            <p>Today we will create our own labeled drawings of the respiratory system! Drawing helps us remember how the system looks and works.</p>
            <p><strong>Steps for Drawing the Respiratory System:</strong></p>
            <ol>
                <li>Start with the head - draw a simple nose and mouth</li>
                <li>Draw the trachea as a straight tube down from the mouth</li>
                <li>At the bottom of the trachea, draw two branches - these are the bronchi</li>
                <li>Draw two lung shapes on either side of the bronchi</li>
                <li>Add the rib cage around the lungs for protection</li>
            </ol>
            <p><strong>Important Labeling Tips:</strong></p>
            <ul>
                <li>Label all four main parts: Nose, Trachea, Bronchi, Lungs</li>
                <li>Use arrows to show the direction of air flow</li>
                <li>Make your drawing neat and clear</li>
            </ul>
            <p><strong>Remember:</strong> The respiratory system works with other body systems. The oxygen you breathe in goes to your blood, which carries it to all your cells!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Drawing Tip #1</div>
                <p>Start with simple shapes. The trachea is like a straw, bronchi are like tree branches, and lungs are like two sponges.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Drawing Tip #2</div>
                <p>Use different colors: blue for air going in (oxygen), red for air going out (carbon dioxide). This helps show the process.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Peer Review</div>
                <p>When checking a classmate's drawing, make sure all four parts are labeled and the air flow direction is shown with arrows.</p>
            </div>
        `,
        taskInstructions: "Create your own labeled drawing of the respiratory system. Follow the step-by-step instructions carefully.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Guided Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Follow along with the teacher's step-by-step drawing on the board:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Draw along with the teacher)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Your Own Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now create your own complete drawing of the respiratory system:
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Labeling</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Make sure your drawing includes these labels:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>✓ Nose/Mouth</div>
                        <div>✓ Trachea (windpipe)</div>
                        <div>✓ Bronchi (left and right)</div>
                        <div>✓ Lungs (left and right)</div>
                        <div>✓ Arrows showing air flow direction</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Peer Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Exchange drawings with a partner. Check if their drawing has:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is one thing your partner did well in their drawing?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice drawing the respiratory system one more time at home. Add one new fact you learned this week to your drawing.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek2',
        metadata: grade4ScienceWeek2.metadata,
        days: grade4ScienceWeek2
    });
    console.log("grade4-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek2 = grade4ScienceWeek2;
console.log("grade4-science-week2.js loaded and registered successfully");