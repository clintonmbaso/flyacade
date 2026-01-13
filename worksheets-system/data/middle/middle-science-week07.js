// Reception Science - Week 7 Data (Exploring Our Five Senses)
const middleScienceWeek7 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 7,
        title: "Exploring Our Five Senses",
        description: "Introduction to the five senses and how we use them to explore the world"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Our Amazing Senses",
        subtopic: "Introduction to Five Senses",
        lessonContent: `
            <p>Welcome to Science class! Today we will learn about something amazing: <strong>Our Five Senses</strong>! These are special tools our body has to help us understand the world.</p>
            <p><strong>Key Concept:</strong> We have five senses that work with different body parts:</p>
            <div class="content-box">
                <ul>
                    <li><strong>👁️ Sight:</strong> We see with our EYES</li>
                    <li><strong>👂 Hearing:</strong> We hear with our EARS</li>
                    <li><strong>👃 Smell:</strong> We smell with our NOSE</li>
                    <li><strong>👅 Taste:</strong> We taste with our TONGUE</li>
                    <li><strong>✋ Touch:</strong> We feel with our SKIN (hands, fingers)</li>
                </ul>
            </div>
            <p>Let's point to each body part as we say its sense: Eyes for seeing, ears for hearing, nose for smelling, tongue for tasting, skin for touching!</p>
            <p><strong>Fun Fact:</strong> Our senses help keep us safe and help us enjoy delicious food, beautiful colors, and lovely sounds!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Morning Routine</div>
                <p>When you wake up in the morning:</p>
                <ul>
                    <li>You <strong>see</strong> the sunlight with your eyes</li>
                    <li>You <strong>hear</strong> birds chirping with your ears</li>
                    <li>You <strong>smell</strong> breakfast cooking with your nose</li>
                    <li>You <strong>taste</strong> your food with your tongue</li>
                    <li>You <strong>feel</strong> your soft blanket with your skin</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Sense Detective</div>
                <p>Look around the classroom right now:</p>
                <p><strong>What do you see?</strong> (Colors, shapes, friends)<br>
                <strong>What do you hear?</strong> (Voices, sounds)<br>
                <strong>What do you smell?</strong> (Air, maybe lunch cooking)<br>
                <strong>What can you feel?</strong> (Your chair, your clothes)<br>
                <strong>What did you taste?</strong> (Breakfast or snack)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Body Part Match</div>
                <p>Match each sense to its body part:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>Sight → 👁️ EYES</div>
                    <div>Hearing → 👂 EARS</div>
                    <div>Smell → 👃 NOSE</div>
                    <div>Taste → 👅 TONGUE</div>
                    <div>Touch → ✋ SKIN/HANDS</div>
                </div>
            </div>
        `,
        taskInstructions: "Practice identifying the five senses and their body parts. Be a sense detective!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Point to your nose: What sense do we use with our nose? <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to your eyes: What sense do we use with our eyes? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a line to match each sense to its body part:
                <div style="margin-top: 10px;">
                    <div style="display: flex; justify-content: space-between; width: 80%;">
                        <div>Sight</div>
                        <div>👂 Ears</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; width: 80%;">
                        <div>Hearing</div>
                        <div>👁️ Eyes</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; width: 80%;">
                        <div>Smell</div>
                        <div>👅 Tongue</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; width: 80%;">
                        <div>Taste</div>
                        <div>👃 Nose</div>
                    </div>
                    <div style="display: flex; justify-content: space-between; width: 80%;">
                        <div>Touch</div>
                        <div>✋ Skin/Hands</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the body part we use for tasting:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>👁️</div>
                    <div>👂</div>
                    <div>👅</div>
                    <div>✋</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Name one thing you can do with each sense:
                <div style="margin-top: 10px;">
                    <div>I can <span class="answer-space" style="width: 150px;"></span> with my eyes (see)</div>
                    <div>I can <span class="answer-space" style="width: 150px;"></span> with my ears (hear)</div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Sense Detective Test</strong></p>
                <p><strong>Part 1: Match the Senses</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Draw a line from each sense to the correct body picture:</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>SIGHT</div>
                        <div>[Picture of ears]</div>
                        <div>HEARING</div>
                        <div>[Picture of eyes]</div>
                        <div>SMELL</div>
                        <div>[Picture of tongue]</div>
                        <div>TASTE</div>
                        <div>[Picture of nose]</div>
                        <div>TOUCH</div>
                        <div>[Picture of hands]</div>
                    </div>
                </div>
                
                <p><strong>Part 2: Sense Hunt</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Find one example for each sense at home:</p>
                    <p>1. Something I can SEE: _________________</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                    <p>2. Something I can HEAR: _________________</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                    <p>3. Something I can SMELL: _________________</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                    <p>4. Something I can TASTE: _________________</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                    <p>5. Something I can TOUCH: _________________</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
                
                <p><strong>Part 3: True or False</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Circle T for True or F for False:</p>
                    <p>1. We see with our ears. (T / F)</p>
                    <p>2. We have five senses. (T / F)</p>
                    <p>3. We taste with our tongue. (T / F)</p>
                    <p>4. We touch with our nose. (T / F)</p>
                    <p>5. We smell with our eyes. (T / F)</p>
                </div>
                
                <p><em>Parent/Guardian: Please help your child complete this review test and discuss their answers.</em></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Smell and Taste Adventures",
        subtopic: "Exploring Two Special Senses",
        lessonContent: `
            <p>Today we're going on a special adventure with two amazing senses: <strong>Smell 👃 and Taste 👅</strong>! These senses work together to help us enjoy food and keep us safe.</p>
            
            <div class="content-box">
                <p><strong>👃 Our Amazing Nose:</strong></p>
                <p>Inside our nose are tiny hairs called <strong>cilia</strong> (say: SILL-ee-uh). When we breathe in, smells travel through the air into our nose. The cilia help send messages to our brain about what we're smelling!</p>
                <p><strong>Good smells:</strong> Flowers 🌸, cookies 🍪, fruits 🍓</p>
                <p><strong>Warning smells:</strong> Smoke 🔥, spoiled food 🥴</p>
            </div>
            
            <div class="content-box">
                <p><strong>👅 Our Wonderful Tongue:</strong></p>
                <p>Our tongue has little bumps called <strong>taste buds</strong>. These help us taste different flavors! There are four main tastes:</p>
                <ul>
                    <li><strong>Sweet:</strong> Like candy 🍭, fruits 🍓, honey 🍯</li>
                    <li><strong>Salty:</strong> Like chips 🍟, peanuts 🥜</li>
                    <li><strong>Sour:</strong> Like lemons 🍋, vinegar</li>
                    <li><strong>Bitter:</strong> Like dark chocolate 🍫, some vegetables 🥦</li>
                </ul>
            </div>
            
            <p><strong>Fun Fact:</strong> Smell and taste work together! If you hold your nose while eating, food tastes different because you can't smell it properly!</p>
            <p><strong>Safety Note:</strong> Always ask an adult before smelling or tasting anything new!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Smelling Game</div>
                <p>Imagine you have these smell jars:</p>
                <div style="display: flex; gap: 10px;">
                    <div>🍋 Lemon → "This smells fresh and citrusy!"</div>
                    <div>🌹 Rose → "This smells sweet and flowery!"</div>
                    <div>🍫 Chocolate → "This smells sweet and yummy!"</div>
                </div>
                <p>Our nose helps us recognize these smells even with our eyes closed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Taste Test</div>
                <p>Let's practice describing tastes:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>🍎 Apple → Sweet</div>
                    <div>🍋 Lemon → Sour</div>
                    <div>🍟 Chips → Salty</div>
                    <div>🥦 Broccoli → Bitter (sometimes)</div>
                </div>
                <p>Everyone's tongue is different - some people like different tastes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Smell & Taste Teamwork</div>
                <p>Try this experiment (with an adult's help):</p>
                <p>1. Eat a piece of apple while holding your nose<br>
                2. Now eat the same apple without holding your nose</p>
                <p>Does it taste different? That's because smell and taste work together!</p>
            </div>
        `,
        taskInstructions: "Explore smells and tastes. Remember to use descriptive words!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Point to your nose: What are the tiny hairs inside called? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to your tongue: What are the bumps called that help us taste? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match each food to its main taste:
                <div style="margin-top: 10px;">
                    <div>🍋 Lemon → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>🍭 Candy → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>🍟 Chips → <span class="answer-space" style="width: 80px;"></span></div>
                    <div>☕ Coffee → <span class="answer-space" style="width: 80px;"></span></div>
                </div>
                <p><small>Word Bank: Sweet, Salty, Sour, Bitter</small></p>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw something that smells GOOD:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw something that tastes SWEET:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> True or False: Smell and taste work together. <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> What should you always do before tasting something new? <span class="answer-space" style="width: 200px;"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Smell & Taste Review Test</strong></p>
                
                <p><strong>Part 1: Label the Parts</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Label the picture below:</p>
                    <div style="text-align: center;">
                        <p>[Simple face drawing with arrow pointing to nose and tongue]</p>
                        <p>Arrow to nose: This is my _______________</p>
                        <p>Arrow to tongue: This is my _______________</p>
                    </div>
                </div>
                
                <p><strong>Part 2: Taste Categories</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Put each food in the correct taste category:</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div><strong>SWEET</strong></div>
                        <div>_________________</div>
                        <div><strong>SALTY</strong></div>
                        <div>_________________</div>
                        <div><strong>SOUR</strong></div>
                        <div>_________________</div>
                        <div><strong>BITTER</strong></div>
                        <div>_________________</div>
                    </div>
                    <p><small>Foods to sort: Lemon, Candy, Potato Chips, Dark Chocolate</small></p>
                </div>
                
                <p><strong>Part 3: Smell Detective</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>With a parent's help, do a safe smell test at home:</p>
                    <p>Find 3 safe things to smell in your kitchen:</p>
                    <ol>
                        <li>Item: _________________ Smells like: _________________</li>
                        <li>Item: _________________ Smells like: _________________</li>
                        <li>Item: _________________ Smells like: _________________</li>
                    </ol>
                    <p>Circle: Which one had your FAVORITE smell?</p>
                </div>
                
                <p><strong>Part 4: Safety Questions</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Answer with YES or NO:</p>
                    <p>1. Should you taste something without asking an adult? (YES / NO)</p>
                    <p>2. Is it safe to smell smoke from a fire? (YES / NO)</p>
                    <p>3. Should you eat food that smells bad? (YES / NO)</p>
                    <p>4. Can our nose warn us about danger? (YES / NO)</p>
                </div>
                
                <p><strong>Bonus Challenge:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>Try the "nose hold" experiment with a parent:</p>
                    <p>1. Hold your nose and eat a small piece of apple<br>
                    2. Let go of your nose and eat another piece<br>
                    3. Did it taste different? Circle: YES / NO</p>
                    <p>Why? Because smell and taste _________________ together!</p>
                </div>
                
                <p><em>Parent/Guardian: Please supervise all tasting activities and check for food allergies.</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleScienceWeek7);
    console.log("middleScienceWeek7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleScienceWeek7);
    console.log("middleScienceWeek7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleScienceWeek7',
        metadata: middleScienceWeek7.metadata,
        days: middleScienceWeek7
    });
    console.log("middleScienceWeek7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleScienceWeek7 = middleScienceWeek7;
console.log("middleScienceWeek7.js loaded and registered successfully");