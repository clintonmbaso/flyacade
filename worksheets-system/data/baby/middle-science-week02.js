// Baby Class - Week 2 Lessons (Human Body Introduction)
const middleScienceWeek2 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 2,
        title: "Introduction to the Human Body",
        description: "Learning about our amazing bodies - body parts and face features"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Introduction to the Human Body",
        subtopic: "Our Amazing Body",
        lessonContent: `
            <p>Welcome to science class! Today we will learn about our amazing bodies. Our body is like a special machine that helps us do everything!</p>
            <p><strong>Key Concept:</strong> Our body has different parts that work together. Let's learn about the main parts!</p>
            <p><strong>Main Body Parts:</strong></p>
            <ul>
                <li><strong>Head:</strong> The top part where our brain is</li>
                <li><strong>Torso:</strong> The middle part of our body</li>
                <li><strong>Arms:</strong> We use them to hug and carry things</li>
                <li><strong>Legs:</strong> We use them to walk and run</li>
            </ul>
            <p>Let's point to each part on our own body!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Body Outline</div>
                <p>Look at this body outline: 👤</p>
                <p>Can you see the head, torso, arms, and legs?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: What Each Part Does</div>
                <p><strong>Head:</strong> Holds our brain for thinking</p>
                <p><strong>Torso:</strong> Has our heart and lungs</p>
                <p><strong>Arms:</strong> Help us reach and hold things</p>
                <p><strong>Legs:</strong> Help us move around</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Body Song</div>
                <p>Let's sing a body parts song:</p>
                <p><em>"Head, torso, arms, and legs<br>
                These are the body parts that move and beg<br>
                Head for thinking, torso in the middle<br>
                Arms for hugging, legs for a little piddle!"</em></p>
            </div>
        `,
        taskInstructions: "Color and label the body parts on the outline. Point to each part on your own body!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Color the head part on your body outline:
                <div class="drawing-area" style="height: 100px; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'100\\'><circle cx=\\"100\\" cy=\\"30\\" r=\\"20\\" stroke=\\"black\\" fill=\\"white\\"/><rect x=\\"80\\" y=\\"50\\" width=\\"40\\" height=\\"40\\" stroke=\\"black\\" fill=\\"white\\"/><rect x=\\"60\\" y=\\"50\\" width=\\"20\\" height=\\"40\\" stroke=\\"black\\" fill=\\"white\\"/><rect x=\\"120\\" y=\\"50\\" width=\\"20\\" height=\\"40\\" stroke=\\"black\\" fill=\\"white\\"/><rect x=\\"90\\" y=\\"90\\" width=\\"20\\" height=\\"40\\" stroke=\\"black\\" fill=\\"white\\"/></svg>');"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to your own head and say "HEAD":
                <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Point to your torso and say "TORSO":
                <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Show me your arms and wave them:
                <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show me your legs and stomp them:
                <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Label the body parts (write or draw lines):
                <div class="drawing-area" style="height: 120px; margin-top: 10px;">
                    <p>Head: __________</p>
                    <p>Torso: __________</p>
                    <p>Arms: __________</p>
                    <p>Legs: __________</p>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Body Parts Review Test</strong></p>
                <p><strong>Part A: Matching</strong></p>
                <p>Match the body part with what it does:</p>
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. Head _________ A. For walking and running</p>
                    <p>2. Torso _________ B. Holds our brain for thinking</p>
                    <p>3. Arms _________ C. Has our heart and lungs</p>
                    <p>4. Legs _________ D. For reaching and holding</p>
                </div>
                
                <p><strong>Part B: Coloring Activity</strong></p>
                <p>Color the body outline below:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0; text-align: center;">
                    <p>[Simple body outline drawing area]</p>
                    <div class="drawing-area" style="height: 150px; background: #f9f9f9; border: 1px solid #ddd;"></div>
                    <p>Instructions: Use different colors for:</p>
                    <ul style="text-align: left;">
                        <li>Head: Red</li>
                        <li>Torso: Blue</li>
                        <li>Arms: Green</li>
                        <li>Legs: Yellow</li>
                    </ul>
                </div>
                
                <p><strong>Part C: Body Detective</strong></p>
                <p>Find these body parts on someone at home:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>✓ I found the HEAD on: _________________</p>
                    <p>✓ I found the TORSO on: _________________</p>
                    <p>✓ I found the ARMS on: _________________</p>
                    <p>✓ I found the LEGS on: _________________</p>
                </div>
                
                <p><strong>Part D: Self-Portrait</strong></p>
                <p>Draw yourself showing all your body parts:</p>
                <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                
                <p><em>Bring your completed review test tomorrow!</em></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Exploring the Head and Face",
        subtopic: "Our Wonderful Face",
        lessonContent: `
            <p>Great job learning about our body! Today we will focus on the HEAD and FACE. Our face has special parts that help us experience the world!</p>
            <p><strong>Key Concept:</strong> Our face is on our head and has important parts we use every day.</p>
            <p><strong>Face Parts:</strong></p>
            <ul>
                <li><strong>Eyes:</strong> We use them to SEE</li>
                <li><strong>Nose:</strong> We use it to SMELL</li>
                <li><strong>Mouth:</strong> We use it to EAT and TALK</li>
                <li><strong>Ears:</strong> We use them to HEAR</li>
            </ul>
            <p>Let's gently touch each part on our own face as we say its name!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: What We See With</div>
                <p>👀 These are EYES</p>
                <p>Close your eyes: Can you see? No!</p>
                <p>Open your eyes: Now you can see everything!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: What We Smell With</div>
                <p>👃 This is a NOSE</p>
                <p>Take a deep breath: What can you smell?</p>
                <p>We smell flowers, food, and many things with our nose!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Face Song</div>
                <p>Let's sing about our face:</p>
                <p><em>"Two little eyes to look around<br>
                One little nose to smell what's found<br>
                One little mouth to eat and say<br>
                Two little ears to hear all day!"</em></p>
            </div>
        `,
        taskInstructions: "Point to and name each face part. Match the part with what it does!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Point to your eyes and say "EYES":
                <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to your nose and say "NOSE":
                <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Point to your mouth and say "MOUTH":
                <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Point to your ears and say "EARS":
                <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Match the face parts with pictures:
                <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 10px;">
                    <div>👀 = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>👃 = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>👄 = <span class="answer-space" style="width: 60px;"></span></div>
                    <div>👂 = <span class="answer-space" style="width: 60px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Draw a happy face with all the parts:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> How many eyes do you have? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">8</span> How many noses do you have? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Face Parts Review Test</strong></p>
                
                <p><strong>Part A: Face Parts Identification</strong></p>
                <p>Label the parts of the face:</p>
                <div style="border: 1px solid #ccc; padding: 20px; margin: 10px 0; text-align: center;">
                    <p>[Simple face outline]</p>
                    <div class="drawing-area" style="height: 120px; background: #f9f9f9; border: 1px solid #ddd; position: relative;">
                        <div style="position: absolute; top: 20px; left: 60px;">______ (eyes)</div>
                        <div style="position: absolute; top: 50px; left: 90px;">______ (nose)</div>
                        <div style="position: absolute; top: 80px; left: 80px;">______ (mouth)</div>
                        <div style="position: absolute; top: 40px; left: 40px;">______ (ear)</div>
                        <div style="position: absolute; top: 40px; right: 40px;">______ (ear)</div>
                    </div>
                </div>
                
                <p><strong>Part B: Matching Game</strong></p>
                <p>Match the face part with its job:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. Eyes _________ A. For smelling flowers and food</p>
                    <p>2. Nose _________ B. For eating and talking</p>
                    <p>3. Mouth _________ C. For hearing music and voices</p>
                    <p>4. Ears _________ D. For seeing colors and people</p>
                </div>
                
                <p><strong>Part C: Face Detective</strong></p>
                <p>Look at a family member's face and check what you find:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>✓ I found _______ eyes (count them)</p>
                    <p>✓ I found _______ nose (count it)</p>
                    <p>✓ I found _______ mouth (count it)</p>
                    <p>✓ I found _______ ears (count them)</p>
                    <p>Whose face did you look at? _________________</p>
                </div>
                
                <p><strong>Part D: Senses Activity</strong></p>
                <p>Use your face parts to explore:</p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>With my EYES, I see: _________________</p>
                    <p>With my NOSE, I smell: _________________</p>
                    <p>With my MOUTH, I taste: _________________</p>
                    <p>With my EARS, I hear: _________________</p>
                </div>
                
                <p><strong>Part E: Creative Drawing</strong></p>
                <p>Draw a funny face with all the face parts:</p>
                <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                <p>Label your drawing: EYES, NOSE, MOUTH, EARS</p>
                
                <p><em>Bring your completed face review tomorrow!</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyWeek2);
    console.log("babyWeek2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyWeek2);
    console.log("babyWeek2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyWeek2',
        metadata: babyWeek2.metadata,
        days: babyWeek2
    });
    console.log("babyWeek2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyClassWeek2 = babyWeek2;
console.log("babyWeek2.js loaded and registered successfully");