// Grade 4 Science - Week 4 Data
const grade4ScienceWeek4 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 1,
        week: 4,
        title: "Blood, Heart, and Blood Vessels",
        description: "Introduction to blood components, the heart as a pump, and how blood travels through arteries and veins"
    },
    
    monday: {
        subject: "Science",
        topic: "What is in our Blood?",
        subtopic: "Components of blood",
        lessonContent: `
            <p>Welcome to our study of blood! Today we will explore what makes up our blood and why each part is important.</p>
            <p><strong>Key Concept:</strong> Blood is a special liquid tissue that carries important things all around our body. It is made of four main parts.</p>
            <p><strong>The Four Components of Blood:</strong></p>
            <ul>
                <li><strong>Red Blood Cells:</strong> Carry oxygen from our lungs to the rest of our body</li>
                <li><strong>White Blood Cells:</strong> Fight germs and keep us healthy</li>
                <li><strong>Platelets:</strong> Help stop bleeding when we get a cut</li>
                <li><strong>Plasma:</strong> The liquid part that carries everything around</li>
            </ul>
            <p><strong>Why is blood important?</strong> Without blood, our body couldn't get oxygen or fight infections. Blood also carries nutrients from food and helps remove waste.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: red;"></i> Blood Model</div>
                <p>We can think of blood like a fruit smoothie: the plasma is the liquid, red blood cells are like berries (most common), white blood cells are like banana pieces (fewer but important), and platelets are like seeds (tiny but helpful).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Body's Defenders</div>
                <p>White blood cells are like your body's soldiers. When germs invade, they rush to fight them off and protect you from getting sick!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-band-aid"></i> Healing Helpers</div>
                <p>Platelets work like tiny bandages. When you get a cut, they stick together to form a plug and stop the bleeding.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to understand what makes up our blood.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> In your own words, describe what blood does for our body:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match each blood part with its job:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>A. Red Blood Cells <span style="margin-left: 20px;">___ Fights germs</span></div>
                    <div>B. White Blood Cells <span style="margin-left: 20px;">___ Carries oxygen</span></div>
                    <div>C. Platelets <span style="margin-left: 20px;">___ Stops bleeding</span></div>
                    <div>D. Plasma <span style="margin-left: 20px;">___ Liquid part</span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your "Blood in a Jar" model:
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Draw what your model looks like using: Cheerios = Red Blood Cells, mini marshmallows = White Blood Cells, sprinkles = Platelets, yellow water = Plasma</p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Which blood component is most common? Why do you think our body needs so many of them?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Look at a small cut or scrape (with permission). Observe any scab formation. What part of blood helped make that scab? Write one sentence about it.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "The Heart – Our Super Pump",
        subtopic: "Structure of the human heart",
        lessonContent: `
            <p>Today we will explore the amazing pump inside your chest: your heart! Your heart is a special muscle that never gets tired.</p>
            <p><strong>The Heart's Job:</strong> The heart pumps blood to every part of your body. It works like a super-strong pump that never stops working!</p>
            <p><strong>Basic Heart Structure:</strong></p>
            <ol>
                <li><strong>Muscle:</strong> The heart is made of strong muscle tissue that squeezes to push blood out</li>
                <li><strong>Chambers:</strong> The heart has four rooms called chambers that hold blood</li>
                <li><strong>Valves:</strong> Tiny doors that open and close to keep blood moving in the right direction</li>
            </ol>
            <p><strong>How the Heart Works:</strong> The heart squeezes (beats) to push blood out through tubes called blood vessels. When you feel your pulse, you're feeling your heart pushing blood!</p>
            <p><strong>Fun Fact:</strong> Your heart is about the size of your fist. Make a fist right now - that's how big your heart is!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pump"></i> Super Pump</div>
                <p>Think of your heart like a water balloon. When you squeeze it, water shoots out. Your heart squeezes to shoot blood to your body!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-closed"></i> One-Way Doors</div>
                <p>Heart valves are like the doors at a store that only open one way. They let blood go through but won't let it come back.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Never Rests</div>
                <p>Your heart beats about 100,000 times every day! That's like clapping your hands once every second, all day and all night.</p>
            </div>
        `,
        taskInstructions: "Work with your group to draw and label a heart. Answer questions about how this amazing pump works.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Collaborative Heart Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your group, draw a large heart on your poster paper. Label these parts:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Muscle (color it red)</li>
                        <li>Four chambers (draw four sections)</li>
                        <li>Arrows showing blood going out</li>
                    </ul>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Your group will receive large paper for this activity)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Heart Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What kind of tissue is the heart made of? Why does it need to be so strong?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Put your hand on your chest. Can you feel your heart beating? Describe what it feels like:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do we call the heart a "pump"? Give two reasons:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Heartbeat Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find your pulse on your wrist. Count how many beats in 10 seconds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of beats: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Multiply by 6 = Beats per minute: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Jump in place for 30 seconds. Take your pulse again. What happened? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three things in your home that work like pumps (example: soap dispenser, water gun, bicycle pump). Draw one and explain how it's like your heart.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "The Highway System (Arteries & Veins)",
        subtopic: "Tracking blood flow in vessels",
        lessonContent: `
            <p>Today we will learn about the body's highway system: blood vessels! These are the tubes that carry blood everywhere in your body.</p>
            <p><strong>Types of Blood Vessels:</strong></p>
            <ul>
                <li><strong>Arteries:</strong> Carry blood AWAY from the heart. This blood is usually rich in oxygen (red).</li>
                <li><strong>Veins:</strong> Carry blood BACK to the heart. This blood has delivered its oxygen (blue).</li>
                <li><strong>Capillaries:</strong> Tiny vessels where oxygen and nutrients move into your cells.</li>
            </ul>
            <p><strong>The Blood's Journey:</strong> Blood travels in a loop: Heart → Arteries → Body → Veins → Heart → Lungs → Heart again!</p>
            <p><strong>Color Coding:</strong> Doctors use red for arteries (oxygen-rich blood) and blue for veins (oxygen-poor blood) to help remember which is which.</p>
            <p><strong>Fun Fact:</strong> If you lined up all your blood vessels end to end, they would stretch about 60,000 miles - that's long enough to go around the Earth more than twice!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Body Highways</div>
                <p>Think of arteries as highways leaving a city (the heart), and veins as highways returning to the city. Cars (blood cells) travel on these roads!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Delivery System</div>
                <p>Arteries deliver oxygen and nutrients like a delivery truck. Veins pick up waste like a garbage truck taking trash away.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map"></i> Super Long System</div>
                <p>Your blood vessels are so long that blood cells have to travel through your entire body in less than a minute to keep you alive!</p>
            </div>
        `,
        taskInstructions: "Create a body map with strings to show how blood travels. Answer questions about arteries and veins.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Body Map Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On your body outline paper, use red string to show arteries (blood going FROM heart):
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>From heart to head</li>
                        <li>From heart to left arm</li>
                        <li>From heart to right leg</li>
                    </ul>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Now use blue string to show veins (blood going TO heart):
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>From head to heart</li>
                        <li>From right arm to heart</li>
                        <li>From left leg to heart</li>
                    </ul>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(You will receive a large body outline and red/blue string for this activity)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Artery vs. Vein</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the table:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background-color: #f0f0f0;">
                            <th style="border: 1px solid #ccc; padding: 8px;">Feature</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Artery</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Vein</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Carries blood...</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Blood color on diagrams</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">Has valves?</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                            <td style="border: 1px solid #ccc; padding: 8px;"><span class="answer-space" style="width: 100px;"></span></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Blood Flow Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine you're a red blood cell. Write about your journey starting at the heart, going to your big toe, and returning:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> When you get a cut, sometimes you see red blood come out. Is this from an artery or vein? How do you know?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Look at the back of your hand. Can you see any blue lines? These are veins close to your skin. Draw what you see:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Look for things in your neighborhood that work like arteries and veins (example: water pipes bringing water TO your house = arteries, sewer pipes taking water AWAY = veins). Draw one example of each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek4);
    console.log("g4science-week04.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek4);
    console.log("g4science-week04.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek4',
        metadata: grade4ScienceWeek4.metadata,
        days: grade4ScienceWeek4
    });
    console.log("g4science-week04.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek4 = grade4ScienceWeek4;
console.log("g4science-week04.js loaded and registered successfully");