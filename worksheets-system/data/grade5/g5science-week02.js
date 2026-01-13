// Grade 5 Science - Week 2 Data
const grade5ScienceWeek2 = {
    metadata: {
        grade: 5,
        subject: "Science",
        week: 2,
        title: "The Heart and Circulatory System",
        description: "Introduction to the human heart, its structure, function, and how to measure pulse"
    },
    
    monday: {
        subject: "Science",
        topic: "The Heart",
        subtopic: "Function and importance in the circulatory system",
        lessonContent: `
            <p>Welcome to our study of the human heart! Today we will explore one of the most important organs in our body.</p>
            <p><strong>Key Concept:</strong> The heart is a muscular organ that pumps blood throughout our body. It acts like a powerful pump that keeps our circulatory system working.</p>
            <p><strong>Main Functions of the Heart:</strong></p>
            <ul>
                <li>Pumps oxygen-rich blood to all parts of the body</li>
                <li>Pumps oxygen-poor blood to the lungs to get more oxygen</li>
                <li>Delivers nutrients to cells</li>
                <li>Removes waste products from the body</li>
            </ul>
            <p><strong>Why is the heart important?</strong> Without the heart pumping blood, our cells wouldn't get oxygen or nutrients, and waste wouldn't be removed. The heart works non-stop from before we're born until the end of our lives!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart" style="color: red;"></i> Real-Life Example</div>
                <p>Think of the heart like a water pump in your home. Just as a pump moves water through pipes to different rooms, your heart pumps blood through blood vessels to all parts of your body.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Did You Know?</div>
                <p>The average adult heart beats about 72 times per minute. That's over 100,000 beats per day and about 2.5 billion beats in a lifetime!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stethoscope"></i> Medical Connection</div>
                <p>Doctors use stethoscopes to listen to heart sounds. A healthy heart makes a regular "lub-dub" sound as it beats and pumps blood.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to reinforce your understanding of the heart's function.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> In your own words, describe what the heart does:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> List three reasons why the heart is important to our body:
                <div class="answer-space" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Label the basic parts of the heart diagram:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(You will receive a printed diagram to label in class)</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> How is the heart similar to a water pump? Explain:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Research and write down three interesting facts about the human heart. Use books or ask family members for help!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "The Structure of the Heart",
        subtopic: "Identifying and describing the four main parts",
        lessonContent: `
            <p>Today we will explore the structure of the heart in more detail. Understanding how the heart is built helps us understand how it works!</p>
            <p><strong>The Heart's Basic Structure:</strong> The human heart has four chambers - think of them as four rooms that blood moves through.</p>
            <p><strong>The Four Chambers:</strong></p>
            <ol>
                <li><strong>Right Atrium:</strong> Receives oxygen-poor blood from the body</li>
                <li><strong>Right Ventricle:</strong> Pumps oxygen-poor blood to the lungs</li>
                <li><strong>Left Atrium:</strong> Receives oxygen-rich blood from the lungs</li>
                <li><strong>Left Ventricle:</strong> Pumps oxygen-rich blood to the entire body</li>
            </ol>
            <p><strong>Important Valves:</strong> The heart also has valves that act like doors, making sure blood flows in only one direction and doesn't go backward.</p>
            <p><strong>Blood Flow Pathway:</strong> Blood follows a specific path through these chambers: Body → Right Atrium → Right Ventricle → Lungs → Left Atrium → Left Ventricle → Body</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Chamber Functions</div>
                <p>The left ventricle has the thickest muscle because it needs to pump blood to your entire body - from your head down to your toes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-closed"></i> Valve Function</div>
                <p>Heart valves work like one-way doors. They open to let blood through, then close quickly to prevent it from flowing backward.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-signs"></i> Blood's Journey</div>
                <p>It takes about 20 seconds for a single red blood cell to complete one full journey through your entire circulatory system!</p>
            </div>
        `,
        taskInstructions: "Label the heart diagram and answer questions about the structure and function of each part.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label the four chambers of the heart on your worksheet:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Right Atrium</li>
                        <li>Right Ventricle</li>
                        <li>Left Atrium</li>
                        <li>Left Ventricle</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Chamber Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which chamber receives oxygen-poor blood from the body? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which chamber pumps blood to the lungs? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which chamber has the thickest muscle wall and why? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sequencing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Put these in the correct order (1-6) for blood flow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Blood goes to the lungs to get oxygen</div>
                        <div>___ Blood returns to the heart from the body</div>
                        <div>___ Blood is pumped to the entire body</div>
                        <div>___ Blood enters the right atrium</div>
                        <div>___ Blood enters the left atrium</div>
                        <div>___ Blood is pumped to the lungs from the right ventricle</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a simple diagram showing how blood flows through the heart (use arrows):
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Create a labeled drawing of the heart showing all four chambers. Use color coding: blue for oxygen-poor blood and red for oxygen-rich blood.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Learning to Take the Pulse",
        subtopic: "Measuring pulse rate and understanding its significance",
        lessonContent: `
            <p>Today we will learn a practical skill: how to measure our pulse! Your pulse tells you how fast your heart is beating and gives clues about your health.</p>
            <p><strong>What is a pulse?</strong> Your pulse is the rhythmic beating you can feel in your arteries as your heart pumps blood. Each beat you feel is one contraction of your heart.</p>
            <p><strong>Where to find your pulse:</strong></p>
            <ul>
                <li><strong>Wrist (Radial Pulse):</strong> Place two fingers gently on the thumb side of your wrist</li>
                <li><strong>Neck (Carotid Pulse):</strong> Place two fingers gently beside your windpipe</li>
            </ul>
            <p><strong>How to measure pulse rate:</strong></p>
            <ol>
                <li>Find your pulse with two fingers (don't use your thumb!)</li>
                <li>Count the beats for 15 seconds</li>
                <li>Multiply by 4 to get beats per minute (BPM)</li>
            </ol>
            <p><strong>Why pulse matters:</strong> Your pulse rate changes with activity, emotions, and health. Doctors use it to check if your heart is working properly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-right"></i> Finding Your Wrist Pulse</div>
                <p>Turn your palm up. Place your index and middle fingers on the wrist, just below the base of your thumb. Press gently until you feel the rhythmic beating.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Activity Changes Pulse</div>
                <p>When you exercise, your muscles need more oxygen. Your heart beats faster to deliver more oxygen-rich blood to your muscles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-md"></i> Medical Importance</div>
                <p>A resting pulse that's too fast or too slow can indicate health problems. That's why doctors always check your pulse during checkups!</p>
            </div>
        `,
        taskInstructions: "Practice finding and measuring your pulse. Record your results and answer the analysis questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pulse Measurement Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find your wrist pulse. Describe how it feels:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Resting Pulse Rate:
                    <table style="width: 100%; margin-top: 10px;">
                        <tr>
                            <td>Number of beats in 15 seconds:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td>Multiply by 4 = Beats per minute (BPM):</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Activity Experiment</strong></p>
                <p>Do 30 seconds of jumping jacks, then measure your pulse immediately:</p>
                <div class="task-item">
                    <span class="task-number">3</span> After Exercise Pulse Rate:
                    <table style="width: 100%; margin-top: 10px;">
                        <tr>
                            <td>Number of beats in 15 seconds:</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td>Multiply by 4 = Beats per minute (BPM):</td>
                            <td><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Analysis Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How did your pulse change after exercise? Why do you think this happened?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What are two reasons why a person's pulse rate might increase (besides exercise)?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is it important for doctors to check patients' pulse rates?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Health Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a simple graph showing your resting pulse vs. exercise pulse:
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Measure the resting pulse rates of three family members. Record their ages and pulse rates. Note any patterns you observe.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek2);
    console.log("science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek2);
    console.log("science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek2',
        metadata: grade5ScienceWeek2.metadata,
        days: grade5ScienceWeek2
    });
    console.log("science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek2 = grade5ScienceWeek2;
console.log("science-week2.js loaded and registered successfully");