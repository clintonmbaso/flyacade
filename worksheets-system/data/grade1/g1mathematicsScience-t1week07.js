// Grade 1 Mathematics & Science - Week 7 Data (Exploring Our Body)
const grade1MathScienceWeek7 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 7,
        title: "Exploring Our External Body — Parts, Functions, and Measurement",
        description: "Learning to identify body parts, understand their functions, and measure using non-standard units"
    },
    
    monday: {
        subject: "Science",
        topic: "Meeting My Body",
        subtopic: "Identifying and naming external body parts",
        lessonContent: `
            <p>Welcome to our body exploration week! Today we will meet and learn about our amazing body parts.</p>
            <p><strong>Key Concept:</strong> Our body has many different parts on the outside that we can see and touch.</p>
            <p><strong>What are external body parts?</strong></p>
            <ul>
                <li>Parts we can see without looking inside</li>
                <li>Parts we can touch and feel</li>
                <li>Parts that help us do different things</li>
            </ul>
            <p><strong>Our Mission:</strong> We will learn the names of 11 important body parts and play a fun game to remember them!</p>
            <p><strong>Why is this important?</strong> Knowing our body parts helps us take care of ourselves and communicate when something hurts or feels good.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user" style="color: #4CAF50;"></i> Head and Shoulders</div>
                <p>"This is my head" - The top part of my body where my brain, eyes, nose, mouth, and ears are!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-up" style="color: #795548;"></i> Arms and Hands</div>
                <p>"These are my arms" - The long parts that connect to my hands for hugging, holding, and waving!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Simon Says Game!</div>
                <p>We're going to play "Simon Says" with body parts! Simon says touch your head! Simon says point to your knees!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to learn about your body parts.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Label the body parts on the drawing:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Draw a simple body and label these parts:</div>
                    <div class="drawing-area" style="height: 200px; border: 1px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">
                        ☐ Head ☐ Neck ☐ Chest ☐ Abdomen<br>
                        ☐ Arms ☐ Hands ☐ Legs ☐ Knees<br>
                        ☐ Eyes ☐ Nose ☐ Mouth ☐ Ears
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Play "Simon Says" with a partner:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Take turns being Simon. Use these body parts:</div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I touched my ________ when Simon said to!</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Point to body parts when named:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>When your teacher says "eyes", point to your eyes!</div>
                    <div>Check off each one you point to correctly:</div>
                    <div style="margin-top: 10px;">
                        ☐ Head ☐ Neck ☐ Chest ☐ Arms<br>
                        ☐ Knees ☐ Abdomen ☐ Legs ☐ Eyes<br>
                        ☐ Nose ☐ Mouth ☐ Ears
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw your favorite body part and color it:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 30px; margin-top: 10px;">My favorite body part is: ________</div>
            </div>
        `,
        homework: "Teach a family member three body parts they might not know (like abdomen or chest). Point to them on your body.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "What Do They Do?",
        subtopic: "Relating body parts to their specific functions",
        lessonContent: `
            <p>Today we will learn what our amazing body parts can do! Every part has a special job.</p>
            <p><strong>Key Concept:</strong> Different body parts help us do different things in our daily lives.</p>
            <p><strong>What are functions?</strong></p>
            <ul>
                <li>The special job a body part does</li>
                <li>How it helps us live and play</li>
                <li>The action it makes possible</li>
            </ul>
            <p><strong>Legs:</strong> Help us walk, run, jump, and stand!</p>
            <p><strong>Eyes:</strong> Help us see colors, shapes, people, and read books!</p>
            <p><strong>Hands:</strong> Help us hold, write, draw, eat, and give high-fives!</p>
            <p><strong>Let's Act It Out:</strong> We'll use our whole bodies to show what different parts can do!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking" style="color: #2196F3;"></i> Legs in Action</div>
                <p>"My legs help me walk to school" - Stand up and take 5 steps to show how legs work!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye" style="color: #FF9800;"></i> Eyes Seeing</div>
                <p>"My eyes help me see the board" - Look around and name 5 things you can see right now!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mime Game!</div>
                <p>We'll play a guessing game! One student acts out what a body part does, others guess which part!</p>
            </div>
        `,
        taskInstructions: "Explore what different body parts can do through discussion and acting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Body Part Actions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the body part to its action:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw a line from the body part to what it does:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1;">
                                <div>Legs</div>
                                <div>Eyes</div>
                                <div>Hands</div>
                                <div>Mouth</div>
                                <div>Ears</div>
                            </div>
                            <div style="flex: 1;">
                                <div>Seeing</div>
                                <div>Holding</div>
                                <div>Walking</div>
                                <div>Hearing</div>
                                <div>Talking/Eating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Acting Out Functions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Act out what these body parts do:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>With a partner, take turns acting out:</div>
                        <div>☐ Walking with legs</div>
                        <div>☐ Seeing with eyes (point to things you "see")</div>
                        <div>☐ Holding a book with hands</div>
                        <div>Draw yourself doing one action:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Verbal Matching Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> When your teacher says an action, name the body part:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Action: "Walking" → Body part: ________</div>
                        <div>Action: "Seeing" → Body part: ________</div>
                        <div>Action: "Holding" → Body part: ________</div>
                        <div>Action: "Listening" → Body part: ________</div>
                        <div>Action: "Eating" → Body part: ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Body Part Superpowers</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you could give a body part a superpower, what would it be?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My ________ could ________</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Example: "My eyes could see through walls!"</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Show your family what different body parts do. Say 'Watch my legs walk!' or 'See my hands clap!'",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measuring with Me",
        subtopic: "Introducing non-standard units using body parts",
        lessonContent: `
            <p>Today we become human rulers! We'll learn to measure using our own body parts.</p>
            <p><strong>Key Concept:</strong> We can use our body parts as measuring tools before we learn about rulers.</p>
            <p><strong>What are non-standard units?</strong></p>
            <ul>
                <li>Measuring with things that aren't rulers or tape measures</li>
                <li>Using everyday objects like hands, feet, or arms</li>
                <li>A fun way to understand length and size</li>
            </ul>
            <p><strong>Hand-span:</strong> The distance from the tip of your thumb to the tip of your pinky when your hand is spread wide.</p>
            <p><strong>Foot-step:</strong> The length of your foot, or the distance from one step to the next.</p>
            <p><strong>Let's Measure:</strong> We'll measure our desks, our books, and even parts of our classroom!</p>
            <p><strong>Think About It:</strong> Why might my hand-span be different from my friend's hand-span?</p>
            <p><strong>Answer:</strong> Because we're all unique sizes - and that's okay when we're measuring with our own bodies!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-sparkles" style="color: #FF9800;"></i> Hand-Span Measuring</div>
                <p>"This book is 3 hand-spans long" - Lay your hand along the book, moving it each time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints" style="color: #795548;"></i> Foot-Step Measuring</div>
                <p>"The rug is 8 foot-steps long" - Walk heel-to-toe along the rug and count your steps!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Measurement Hunt!</div>
                <p>We'll hunt for objects that are exactly 2 hand-spans wide or 5 foot-steps long!</p>
            </div>
        `,
        taskInstructions: "Use your body parts to measure different objects around the classroom.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hand-Span Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure your desk width using hand-spans:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My desk is ____ hand-spans wide.</div>
                        <div>Draw your hand measuring the desk:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Now measure a book: ____ hand-spans</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Foot-Step Adventure</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure the classroom rug using foot-steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The rug is ____ foot-steps long.</div>
                        <div>Draw your feet walking along the rug:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Measure a short table: ____ foot-steps</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Counting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count and compare with a partner:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My desk: ____ hand-spans</div>
                        <div>Partner's desk: ____ hand-spans</div>
                        <div>Are they the same? ☐ Yes ☐ No</div>
                        <div>Why might they be different? ____________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Invent a new body measurement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My new measurement is called: ________</div>
                        <div>(Example: "arm-hugs" or "finger-taps")</div>
                        <div>Use it to measure something: The door is ____ ________.</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Measure three things at home using your hand-spans. Tell a family member how many hand-spans long each item is.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Long and Short",
        subtopic: "Grouping objects by length using non-standard measures",
        lessonContent: `
            <p>Today we'll compare objects to see which are longer or shorter than our arms!</p>
            <p><strong>Key Concept:</strong> We can compare lengths by seeing if objects are longer or shorter than a body part.</p>
            <p><strong>What is length?</strong></p>
            <ul>
                <li>How long something is from end to end</li>
                <li>Distance along the longest side</li>
                <li>A way to describe size</li>
            </ul>
            <p><strong>Comparison Vocabulary:</strong></p>
            <ul>
                <li><strong>Longer:</strong> Extends farther than something else</li>
                <li><strong>Shorter:</strong> Doesn't reach as far as something else</li>
                <li><strong>Same length:</strong> Both end at the same point</li>
            </ul>
            <p><strong>Our Measuring Tool:</strong> Today we'll use our arm length as our personal ruler!</p>
            <p><strong>Gathering Objects:</strong> We'll collect pencils, sticks, strings, and other classroom items to compare.</p>
            <p><strong>Think About It:</strong> Why might we need to know if something is longer or shorter than our arm?</p>
            <p><strong>Answer:</strong> To know if we can reach it, carry it, or if it will fit in a certain space!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #2196F3;"></i> Pencil vs. Arm</div>
                <p>"This pencil is shorter than my arm" - Hold the pencil next to your arm to compare!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler" style="color: #4CAF50;"></i> Stick vs. Arm</div>
                <p>"This stick is longer than my arm" - It sticks out past your hand when you hold one end at your shoulder!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Length Sorting Race!</div>
                <p>We'll have two bins: "Shorter than my arm" and "Longer than my arm." Sort objects as fast as you can!</p>
            </div>
        `,
        taskInstructions: "Gather objects and sort them by comparing their length to your arm.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Gather and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Collect 5 different objects from the classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. A pencil</div>
                        <div>2. A stick or ruler</div>
                        <div>3. A piece of string</div>
                        <div>4. A book</div>
                        <div>5. Your choice!</div>
                        <div>Draw your collected items:</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Arm Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Hold each object next to your arm:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Put each object in the right pile:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; padding: 10px; border: 2px dashed #4CAF50;">
                                <div style="text-align: center; font-weight: bold;">Shorter than my arm</div>
                                <div class="drawing-area" style="height: 100px;"></div>
                                <div style="text-align: center;">Count: ____ items</div>
                            </div>
                            <div style="flex: 1; padding: 10px; border: 2px dashed #2196F3;">
                                <div style="text-align: center; font-weight: bold;">Longer than my arm</div>
                                <div class="drawing-area" style="height: 100px;"></div>
                                <div style="text-align: center;">Count: ____ items</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Success Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Assessment: Did you sort three objects correctly?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>List your sorted objects:</div>
                        <div>Shorter: 1. ________ 2. ________ 3. ________</div>
                        <div>Longer: 1. ________ 2. ________ 3. ________</div>
                        <div>Draw a star for each correct sort: <span class="drawing-area" style="width: 100px; height: 30px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Length Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw three lines: one shorter, one longer, and one same as your arm:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="flex: 1; text-align: center;">
                                <div>Shorter than my arm</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Longer than my arm</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Same as my arm</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Body Explorer Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a body explorer. Write what you learned:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned my body can ________________</div>
                </div>
            </div>
        `,
        homework: "Find objects at home and sort them into 'shorter than my arm' and 'longer than my arm' piles. Show your family.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek7);
    console.log("math-science-week7-body.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek7);
    console.log("math-science-week7-body.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek7',
        metadata: grade1MathScienceWeek7.metadata,
        days: grade1MathScienceWeek7
    });
    console.log("math-science-week7-body.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek7 = grade1MathScienceWeek7;
console.log("math-science-week7-body.js loaded and registered successfully");