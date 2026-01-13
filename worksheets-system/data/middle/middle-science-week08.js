// Baby Class Science - Week 8 Data (Senses: Touch and Hearing)
const middleScienceWeek8 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 8,
        title: "Exploring the Senses - Touch and Hearing",
        description: "Learning about the senses of touch and hearing through hands-on activities"
    },
    
    wednesday: {
        subject: "Science",
        topic: "The Sense of Touch",
        subtopic: "Feeling with Our Skin",
        lessonContent: `
            <p>Welcome to science class! Today we will learn about one of our amazing senses: <strong>Touch</strong>!</p>
            <p><strong>Key Concept:</strong> Our sense of touch helps us feel things around us. We touch with our <strong>skin</strong>!</p>
            <p>Look at your hands - your skin covers your whole body! When you touch something, tiny parts in your skin send messages to your brain.</p>
            <p>Touch helps us know if something is hot, cold, soft, rough, smooth, or bumpy!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Different Textures</div>
                <p>Let's learn some feeling words:</p>
                <ul>
                    <li><strong>Smooth</strong> - like a glass window</li>
                    <li><strong>Rough</strong> - like sandpaper or a tree bark</li>
                    <li><strong>Soft</strong> - like a teddy bear or cotton</li>
                    <li><strong>Hard</strong> - like a rock or table</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Our Skin</div>
                <p>Our skin is like a special coat that covers our body!</p>
                <p>When we touch something:
                <ol>
                    <li>Our skin feels it</li>
                    <li>It sends a message to our brain</li>
                    <li>Our brain says "This is soft!" or "This is cold!"</li>
                </ol>
                </p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Safety Touch</div>
                <p>Touch helps keep us safe!</p>
                <p>If something is too hot 🔥, our skin tells our brain "Hot! Move away!"</p>
                <p>If something is too cold ❄️, our skin tells our brain "Cold! Put on warm clothes!"</p>
            </div>
        `,
        taskInstructions: "Explore different textures and describe how they feel using your sense of touch!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Touch your desk: How does it feel?
                <div style="display: flex; gap: 10px; margin-top: 5px;">
                    <div class="texture-option">Smooth</div>
                    <div class="texture-option">Rough</div>
                    <div class="texture-option">Soft</div>
                    <div class="texture-option">Hard</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Texture Matching Game:
                <div style="margin-top: 10px;">
                    <p>Match the item with how it feels:</p>
                    <div>Cotton ball = <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Rock = <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Sandpaper = <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the things that are SOFT:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🪨</div>
                    <div>🧸</div>
                    <div>🌵</div>
                    <div>🛏️</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw something that feels SMOOTH:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> What part of our body do we use to touch?
                <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Touch Test</strong></p>
                <p><strong>Review Test - The Sense of Touch</strong></p>
                
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0; border-radius: 8px;">
                    <p><strong>Part 1: True or False</strong></p>
                    <p>1. We touch with our ears. (True/False)</p>
                    <div class="answer-space" style="height: 20px; width: 100px;"></div>
                    <p>2. Our skin helps us feel things. (True/False)</p>
                    <div class="answer-space" style="height: 20px; width: 100px;"></div>
                    <p>3. Everything feels the same. (True/False)</p>
                    <div class="answer-space" style="height: 20px; width: 100px;"></div>
                    
                    <p><strong>Part 2: Touch Hunt</strong></p>
                    <p>Find these things in your house and touch them:</p>
                    <ol>
                        <li>Find something SOFT: _________________</li>
                        <li>Find something HARD: _________________</li>
                        <li>Find something SMOOTH: _________________</li>
                        <li>Find something ROUGH: _________________</li>
                    </ol>
                    
                    <p><strong>Part 3: Drawing</strong></p>
                    <p>Draw your favorite thing to touch:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Part 4: Safety</strong></p>
                    <p>Why is our sense of touch important for safety?</p>
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                
                <p><strong>Note to Parents:</strong> Help your child explore different textures safely. Discuss why some things feel different.</p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "The Sense of Hearing",
        subtopic: "Listening with Our Ears",
        lessonContent: `
            <p>Great job learning about touch! Today we will learn about another amazing sense: <strong>Hearing</strong>!</p>
            <p><strong>Key Concept:</strong> Our sense of hearing helps us listen to sounds. We hear with our <strong>ears</strong>!</p>
            <p>Look at your ears - they catch sound waves! Inside your ears are tiny hairs that send messages to your brain.</p>
            <p>Hearing helps us enjoy music, hear our friends talk, and know when someone is calling us!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Different Sounds</div>
                <p>Let's learn some sound words:</p>
                <ul>
                    <li><strong>Loud</strong> - like thunder or a drum</li>
                    <li><strong>Soft</strong> - like a whisper or rustling leaves</li>
                    <li><strong>High</strong> - like a bird chirping</li>
                    <li><strong>Low</strong> - like a big truck</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: How Hearing Works</div>
                <p>When we hear a sound:
                <ol>
                    <li>Sound waves travel through the air</li>
                    <li>They enter our ears</li>
                    <li>Tiny parts in our ears send messages to our brain</li>
                    <li>Our brain says "That's a dog barking!" or "That's music!"</li>
                </ol>
                </p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Safety Hearing</div>
                <p>Hearing helps keep us safe!</p>
                <p>If a car is coming 🚗, our ears tell our brain "Car! Be careful!"</p>
                <p>If a fire alarm rings 🔔, our ears tell our brain "Danger! Get out!"</p>
            </div>
        `,
        taskInstructions: "Listen carefully to different sounds and identify what you hear!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Close your eyes and listen: What do you hear right now?
                <div class="answer-space" style="height: 30px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Sound Matching Game:
                <div style="margin-top: 10px;">
                    <p>Match the sound with what makes it:</p>
                    <div>"Meow" = <span class="answer-space" style="width: 100px;"></span></div>
                    <div>"Beep beep" = <span class="answer-space" style="width: 100px;"></span></div>
                    <div>"Ding dong" = <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the things that make LOUD sounds:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🚨</div>
                    <div>🍂</div>
                    <div>🎺</div>
                    <div>⏰</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw something that makes a SOFT sound:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> What part of our body do we use to hear?
                <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Listening Activity: Sit quietly for 30 seconds. List 3 sounds you hear:
                <ol style="margin-top: 5px;">
                    <li><div class="answer-space" style="height: 20px; width: 150px; display: inline-block;"></div></li>
                    <li><div class="answer-space" style="height: 20px; width: 150px; display: inline-block;"></div></li>
                    <li><div class="answer-space" style="height: 20px; width: 150px; display: inline-block;"></div></li>
                </ol>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Hearing Test</strong></p>
                <p><strong>Review Test - The Sense of Hearing</strong></p>
                
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0; border-radius: 8px;">
                    <p><strong>Part 1: Multiple Choice</strong></p>
                    <p>1. We hear with our:</p>
                    <div style="margin-left: 20px;">
                        <p>A) Eyes <span style="margin-left: 20px;">B) Ears</span> <span style="margin-left: 20px;">C) Nose</span> <span style="margin-left: 20px;">D) Mouth</span></p>
                        <div class="answer-space" style="height: 20px; width: 50px;"></div>
                    </div>
                    
                    <p>2. A whisper is:</p>
                    <div style="margin-left: 20px;">
                        <p>A) Loud <span style="margin-left: 20px;">B) Soft</span> <span style="margin-left: 20px;">C) High</span> <span style="margin-left: 20px;">D) Low</span></p>
                        <div class="answer-space" style="height: 20px; width: 50px;"></div>
                    </div>
                    
                    <p><strong>Part 2: Sound Hunt</strong></p>
                    <p>Listen carefully in your house and find:</p>
                    <ol>
                        <li>A LOUD sound: _________________</li>
                        <li>A SOFT sound: _________________</li>
                        <li>A sound that makes you happy: _________________</li>
                        <li>A warning sound (tells you to be careful): _________________</li>
                    </ol>
                    
                    <p><strong>Part 3: Sound Drawing</strong></p>
                    <p>Draw something that makes a beautiful sound:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Part 4: Why Hearing Matters</strong></p>
                    <p>Name two ways hearing helps keep us safe:</p>
                    <ol>
                        <li><div class="answer-space" style="height: 20px; width: 200px;"></div></li>
                        <li><div class="answer-space" style="height: 20px; width: 200px;"></div></li>
                    </ol>
                </div>
                
                <p><strong>Note to Parents:</strong> Do a sound walk with your child. Point out different sounds and discuss whether they're loud/soft, high/low.</p>
            </div>
        `,
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleScienceWeek8);
    console.log("middleScienceWeek8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleScienceWeek8);
    console.log("middleScienceWeek8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleScienceWeek8',
        metadata: middleScienceWeek8.metadata,
        days: middleScienceWeek8
    });
    console.log("middleScienceWeek8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleScienceWeek8 = middleScienceWeek8;
console.log("middleScienceWeek8.js loaded and registered successfully");