// Grade 1 Mathematics & Science - Week 8 Data (The Five Senses)
const grade1MathScienceWeek8 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 8,
        title: "The Five Senses — Observing and Counting Our World",
        description: "Learning about sight, hearing, touch, taste, smell, and using senses to count and describe"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "The Gift of Sight and Sound",
        subtopic: "Identifying eyes and ears as organs for seeing and hearing",
        lessonContent: `
            <p>Welcome to our Five Senses Week! Today we explore two amazing gifts: sight and sound!</p>
            <p><strong>Key Concept:</strong> Our eyes are for seeing, and our ears are for hearing. They help us understand the world.</p>
            <p><strong>Our Eyes:</strong></p>
            <ul>
                <li>Help us see colors, shapes, and movement</li>
                <li>Let us read, watch, and recognize people</li>
                <li>Are protected by eyelids and eyelashes</li>
            </ul>
            <p><strong>Our Ears:</strong></p>
            <ul>
                <li>Help us hear sounds like music, voices, and nature</li>
                <li>Let us know if something is loud or soft, near or far</li>
                <li>Help us balance and know where sounds come from</li>
            </ul>
            <p><strong>Think About It:</strong> What would happen if you couldn't see? What if you couldn't hear?</p>
            <p><strong>Our Mission:</strong> To use our eyes and ears like super-scientists!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye" style="color: #2196F3;"></i> Eye Power</div>
                <p>"I see a red ball" – My eyes tell me the color (red) and the shape (round).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear" style="color: #FF9800;"></i> Ear Power</div>
                <p>"I hear a bird singing" – My ears tell me it's a bird and it's making a happy sound.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sound Walk Game!</div>
                <p>We'll take a "Sound Walk" – close your eyes and listen. How many different sounds can you hear?</p>
            </div>
        `,
        taskInstructions: "Complete the sight and sound activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Sound Walk: Close your eyes for one minute. List 3 sounds you hear:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. _______________________________</div>
                    <div>2. _______________________________</div>
                    <div>3. _______________________________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Look Closely: Look around the room. Find and name 5 different colors:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Color 1: ________ (Example: blue from the board)</div>
                    <div>Color 2: ________ (Example: green from a plant)</div>
                    <div>Color 3: ________</div>
                    <div>Color 4: ________</div>
                    <div>Color 5: ________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the organ to the sense:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Eyes – For hearing a bell? (No/Yes)</div>
                    <div>☐ Ears – For seeing a bird? (No/Yes)</div>
                    <div>Circle the correct organ:</div>
                    <div>To hear a bell, we use our: ☐ Eyes ☐ Ears</div>
                    <div>To see a bird, we use our: ☐ Eyes ☐ Ears</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw something you can see AND something you can hear:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; text-align: center;">
                        <div>I see:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        <div>I hear:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "At home, close your eyes and listen. Tell your family three sounds you hear. Then open your eyes and name three colors you see.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Touch and Texture",
        subtopic: "Using skin/hands to explore through touch",
        lessonContent: `
            <p>Today we explore the amazing sense of TOUCH! Our skin is our largest organ and helps us feel the world.</p>
            <p><strong>Key Concept:</strong> Our hands and skin help us feel textures like rough, smooth, hard, and soft.</p>
            <p><strong>Touch Vocabulary:</strong></p>
            <ul>
                <li><strong>Rough:</strong> Bumpy, scratchy, like sandpaper or tree bark</li>
                <li><strong>Smooth:</strong> Flat, even, like glass or a polished stone</li>
                <li><strong>Hard:</strong> Firm, solid, like a rock or a table</li>
                <li><strong>Soft:</strong> Gentle, fluffy, like a pillow or a kitten</li>
            </ul>
            <p><strong>Why Touch Matters:</strong></p>
            <ul>
                <li>Helps us know if something is safe or dangerous</li>
                <li>Lets us enjoy hugs, petting animals, and feeling textures</li>
                <li>Warns us if something is too hot or too cold</li>
            </ul>
            <p><strong>Think About It:</strong> How would you describe your favorite stuffed animal using touch words?</p>
            <p><strong>Our Mission:</strong> Become texture detectives with the Mystery Bag!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper" style="color: #FF9800;"></i> Rough Example</div>
                <p>"This pinecone is rough and bumpy" – My fingers tell me it's not smooth.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-rock" style="color: #795548;"></i> Soft Example</div>
                <p>"This cotton ball is soft and fluffy" – My skin tells me it's gentle to touch.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mystery Bag Game!</div>
                <p>Reach into the Mystery Bag, feel an object without looking, and describe it using touch words!</p>
            </div>
        `,
        taskInstructions: "Explore textures using your sense of touch.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mystery Bag Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Reach into the Mystery Bag. Describe what you feel:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object feels: ☐ Rough ☐ Smooth ☐ Hard ☐ Soft</div>
                        <div>Draw what you THINK it is:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Now look! Was it what you guessed? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Texture Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find objects in the room for each texture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Something Rough: ___________________</div>
                        <div>Something Smooth: _________________</div>
                        <div>Something Hard: ____________________</div>
                        <div>Something Soft: _____________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Touch Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label four different textures:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>Rough</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Smooth</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Hard</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Soft</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Touch Words</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the correct touch word for each picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A rock is: ☐ Rough ☐ Soft</div>
                        <div>A pillow is: ☐ Hard ☐ Soft</div>
                        <div>Sandpaper is: ☐ Smooth ☐ Rough</div>
                        <div>A mirror is: ☐ Rough ☐ Smooth</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three objects at home with different textures. Describe each one using the words rough, smooth, hard, or soft.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Taste and Smell",
        subtopic: "Identifying nose and tongue as organs for smelling and tasting",
        lessonContent: `
            <p>Today we explore two delicious senses: TASTE and SMELL! They work together to help us enjoy food and stay safe.</p>
            <p><strong>Key Concept:</strong> Our nose is for smelling, and our tongue is for tasting.</p>
            <p><strong>Our Nose:</strong></p>
            <ul>
                <li>Helps us smell flowers, food, rain, and smoke</li>
                <li>Warns us of dangerous smells like gas or spoiled food</li>
                <li>Helps us taste better (try pinching your nose while eating!)</li>
            </ul>
            <p><strong>Our Tongue:</strong></p>
            <ul>
                <li>Helps us taste sweet, salty, sour, and bitter</li>
                <li>Has taste buds that send messages to our brain</li>
                <li>Helps us talk and swallow safely</li>
            </ul>
            <p><strong>Taste Examples:</strong></p>
            <ul>
                <li><strong>Sweet:</strong> Honey, strawberries, cake</li>
                <li><strong>Salty:</strong> Pretzels, chips, crackers</li>
                <li><strong>Sour:</strong> Lemon, lime, vinegar</li>
                <li><strong>Bitter:</strong> Dark chocolate, broccoli (for some!)</li>
            </ul>
            <p><strong>Our Mission:</strong> Use our noses and tongues like food scientists!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-nose" style="color: #E91E63;"></i> Smell Power</div>
                <p>"I smell an orange peel" – My nose tells me it's citrusy and fresh.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ice-cream" style="color: #FF9800;"></i> Taste Power</div>
                <p>"This cookie tastes sweet" – My tongue tells me it has sugar.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Smell Guessing Game!</div>
                <p>We'll smell mystery containers (orange peel, cinnamon, flower) and guess what's inside!</p>
            </div>
        `,
        taskInstructions: "Explore smells and tastes safely (with teacher guidance).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Smell Station</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Smell each container. Guess what it is:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Container 1: Smells like ________________ (flower, orange, cinnamon?)</div>
                        <div>Container 2: Smells like ________________</div>
                        <div>Container 3: Smells like ________________</div>
                        <div>Which organ did you use? ☐ Nose ☐ Tongue ☐ Eyes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Taste Talk</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With teacher guidance, taste safe foods:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Cracker: Tastes ☐ Sweet ☐ Salty</div>
                        <div>Apple slice: Tastes ☐ Sweet ☐ Sour</div>
                        <div>Which organ did you use? ☐ Nose ☐ Tongue ☐ Ears</div>
                        <div>Draw your favorite tasty food:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sense Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match the organ to the sense:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>To smell a flower, use your: ☐ Nose ☐ Tongue</div>
                        <div>To taste an apple, use your: ☐ Nose ☐ Tongue</div>
                        <div>To smell cookies baking, use your: ☐ Eyes ☐ Nose</div>
                        <div>Draw a nose and a tongue:</div>
                        <div style="display: flex;">
                            <div style="flex: 1; text-align: center;">
                                <div>Nose</div>
                                <div class="drawing-area" style="height: 60px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Tongue</div>
                                <div class="drawing-area" style="height: 60px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Sense</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why are smell and taste important for safety?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Smell can warn us of: ☐ Fire ☐ Music</div>
                        <div>Taste can warn us of: ☐ Spoiled milk ☐ A soft pillow</div>
                        <div>Draw something that smells good and something that tastes good:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; text-align: center;">
                                <div>Smells Good</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Tastes Good</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "With a family member, smell three different things in your kitchen (like bread, fruit, herbs). Describe each smell.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Counting with Our Senses",
        subtopic: "Using senses to identify and count objects in the environment",
        lessonContent: `
            <p>Today we combine our senses with MATH! We'll use sight and hearing to count objects in our world.</p>
            <p><strong>Key Concept:</strong> Our senses help us observe, and math helps us count what we observe.</p>
            <p><strong>Counting with Sight:</strong></p>
            <ul>
                <li>Looking for all the red things in the garden</li>
                <li>Counting how many windows are in the classroom</li>
                <li>Finding round objects and counting them</li>
            </ul>
            <p><strong>Counting with Hearing:</strong></p>
            <ul>
                <li>Listening to bird songs and counting how many different birds</li>
                <li>Counting how many cars pass by their sound</li>
                <li>Hearing classmates clap and counting the claps</li>
            </ul>
            <p><strong>Math + Senses = Super Observation!</strong></p>
            <p><strong>Think About It:</strong> How many green things can you see right now? How many different sounds can you hear?</p>
            <p><strong>Our Mission:</strong> Become sense-counters!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye" style="color: #2196F3;"></i> Sight Counting</div>
                <p>"I see 5 red flowers" – My eyes help me find red, and my brain helps me count to 5.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear" style="color: #FF9800;"></i> Sound Counting</div>
                <p>"I hear 3 different bird sounds" – My ears help me hear, and my brain helps me count the different sounds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sense Counting Game!</div>
                <p>We'll sit quietly and count how many different sounds we hear, then count how many blue things we see!</p>
            </div>
        `,
        taskInstructions: "Use your senses to count objects and sounds.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sit quietly for 2 minutes. Count different sounds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How many different bird sounds? ____</div>
                        <div>How many vehicle sounds? ____</div>
                        <div>How many people sounds? ____</div>
                        <div>Total different sounds: ____</div>
                        <div>Draw something that makes sound:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sight Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look around the classroom or garden. Count:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How many red things? ____</div>
                        <div>How many round things? ____</div>
                        <div>How many green things? ____</div>
                        <div>How many blue things? ____</div>
                        <div>Draw the red things you counted:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sense Graphing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a sense count chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="border: 1px solid #ccc; padding: 5px;">Sense</th>
                                <th style="border: 1px solid #ccc; padding: 5px;">What I Found</th>
                                <th style="border: 1px solid #ccc; padding: 5px;">Count</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 5px;">Sight (Red)</td>
                                <td style="border: 1px solid #ccc; padding: 5px;">Red objects</td>
                                <td style="border: 1px solid #ccc; padding: 5px;">____</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 5px;">Hearing (Birds)</td>
                                <td style="border: 1px solid #ccc; padding: 5px;">Bird sounds</td>
                                <td style="border: 1px solid #ccc; padding: 5px;">____</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Five Senses Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each sense to its organ:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sight: ☐ Eyes ☐ Ears ☐ Nose</div>
                        <div>Hearing: ☐ Eyes ☐ Ears ☐ Tongue</div>
                        <div>Smell: ☐ Nose ☐ Tongue ☐ Skin</div>
                        <div>Touch: ☐ Tongue ☐ Skin ☐ Eyes</div>
                        <div>Taste: ☐ Nose ☐ Tongue ☐ Ears</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sense Explorer Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself using all five senses. Write your favorite sense:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">My favorite sense is ________ because ________</div>
                </div>
            </div>
        `,
        homework: "At home, count how many different sounds you hear in 5 minutes. Then count how many yellow things you can see in one room.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek8);
    console.log("math-science-week8-senses.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek8);
    console.log("math-science-week8-senses.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek8',
        metadata: grade1MathScienceWeek8.metadata,
        days: grade1MathScienceWeek8
    });
    console.log("math-science-week8-senses.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek8 = grade1MathScienceWeek8;
console.log("math-science-week8-senses.js loaded and registered successfully");