// Grade 1 English - Week 9 Data (Describing Things and Chores)
const middleEnglishWeek9 = {
    metadata: {
        grade: "middle",
        subject: "English",
        week: 9,
        title: "Describing Things and Helping at Home",
        description: "Learning to describe objects by size and color, and learning vocabulary for common home chores"
    },
    
    monday: {
        subject: "English",
        topic: "Big and Small",
        subtopic: "Describing things by size",
        lessonContent: `
            <p>Welcome to Week 9! Today we will learn how to describe things by their size using "big" and "small".</p>
            <p><strong>Key Concept:</strong> Everything around us has a size. We use words to describe how big or small things are.</p>
            <p><strong>What does "big" mean?</strong></p>
            <ul>
                <li>Big things take up more space</li>
                <li>Big things are larger than other things</li>
                <li>Examples: big book, big chair, big tree</li>
            </ul>
            <p><strong>What does "small" mean?</strong></p>
            <ul>
                <li>Small things take up less space</li>
                <li>Small things are little or tiny</li>
                <li>Examples: small pencil, small ball, small ant</li>
            </ul>
            <p><strong>How to compare:</strong> Look at two things side by side. The one that takes more space is big. The one that takes less space is small!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight" style="color: #2196F3;"></i> Big Example</div>
                <p>"This is a big pot." - We say this when we see a large cooking pot.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt" style="color: #9C27B0;"></i> Small Example</div>
                <p>"This is a small pot." - We say this when we see a tiny cooking pot.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Size Hunt Game!</div>
                <p>Let's play "Find the Big and Small!" The teacher will show objects and we'll shout "big" or "small" together!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice identifying big and small things.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the big things. Put a square around the small things:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Picture of a big elephant</div>
                    <div>☐ Picture of a small mouse</div>
                    <div>☐ Picture of a big house</div>
                    <div>☐ Picture of a small bird</div>
                    <div>☐ Picture of a big ball</div>
                    <div>☐ Picture of a small marble</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw one big thing and one small thing from your classroom:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">BIG</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div style="text-align: center; margin-top: 5px;">This is a big: <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">SMALL</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div style="text-align: center; margin-top: 5px;">This is a small: <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice saying these sentences:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div>"The teacher's desk is <span class="answer-space" style="width: 80px;"></span>." (big/small)</div>
                    <div>"My pencil is <span class="answer-space" style="width: 80px;"></span>." (big/small)</div>
                    <div>"Our classroom door is <span class="answer-space" style="width: 80px;"></span>." (big/small)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the object with its size:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Elephant → ☐ Small</div>
                    <div>Ant → ☐ Big</div>
                    <div>Mountain → ☐ Small</div>
                    <div>Button → ☐ Big</div>
                </div>
            </div>
        `,
        homework: "Find 3 big things and 3 small things at home. Draw one of each and write 'big' or 'small' under your drawings.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Colors and Sizes",
        subtopic: "Describing things by both color and size",
        lessonContent: `
            <p>Today we will learn how to describe things using both color AND size together!</p>
            <p><strong>Key Concept:</strong> We can use more than one word to describe something. We can tell its color AND its size!</p>
            <p><strong>How to describe with two words:</strong></p>
            <ul>
                <li>First say the color: red, blue, yellow, black, white, green</li>
                <li>Then say the size: big or small</li>
                <li>Then say what it is: bag, ball, book, cup</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>"black bag" - a bag that is black in color</li>
                <li>"small bag" - a bag that is little in size</li>
                <li>"big red ball" - a ball that is big and red</li>
                <li>"small yellow cup" - a cup that is small and yellow</li>
            </ul>
            <p><strong>Practice Pattern:</strong> Color + Size + Thing = Complete Description!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette" style="color: #FF9800;"></i> Color + Size Example</div>
                <p>"I have a black bag." - This tells the color of my bag.</p>
                <p>"I have a small bag." - This tells the size of my bag.</p>
                <p>"I have a small black bag." - This tells BOTH the size AND color!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school" style="color: #4CAF50;"></i> School Bag Activity</div>
                <p>Look at your school bag. What color is it? What size is it? Put the words together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Rainbow Description Game!</div>
                <p>We'll play with colored blocks! When the teacher holds up a block, say its color AND size!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice describing things with color and size.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Color and Size Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the missing word (color or size) for each picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Picture of a big blue ball: <span class="answer-space" style="width: 60px;"></span> blue ball</div>
                        <div>Picture of a small red apple: small <span class="answer-space" style="width: 60px;"></span> apple</div>
                        <div>Picture of a big yellow sun: <span class="answer-space" style="width: 60px;"></span> <span class="answer-space" style="width: 60px;"></span> sun</div>
                        <div>Picture of a small green leaf: <span class="answer-space" style="width: 60px;"></span> <span class="answer-space" style="width: 60px;"></span> leaf</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Describe Your School Bag</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at your school bag. Draw it and describe it:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My school bag is <span class="answer-space" style="width: 80px;"></span> and <span class="answer-space" style="width: 80px;"></span>.</div>
                        <div>(color) (size)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Descriptions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks with color and size words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 80px;"></span> elephant (gray/big)</div>
                        <div>A <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 80px;"></span> button (red/small)</div>
                        <div>A <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 80px;"></span> house (white/big)</div>
                        <div>A <span class="answer-space" style="width: 80px;"></span> <span class="answer-space" style="width: 80px;"></span> bird (blue/small)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw what the teacher describes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Draw a big red circle."</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">"Draw a small yellow star."</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home and describe them using both color and size words. Example: 'big white refrigerator' or 'small blue cup'.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Helping at Home",
        subtopic: "Learning vocabulary for home chores",
        lessonContent: `
            <p>Today we will learn about different chores we can do to help at home!</p>
            <p><strong>Key Concept:</strong> Chores are small jobs we do to help our family and keep our home clean and happy.</p>
            <p><strong>Common Home Chores:</strong></p>
            <ul>
                <li><strong>Cooking</strong> - helping to prepare food</li>
                <li><strong>Washing</strong> - cleaning clothes or dishes</li>
                <li><strong>Sweeping</strong> - cleaning the floor with a broom</li>
                <li><strong>Cleaning</strong> - making things neat and tidy</li>
                <li><strong>Setting the table</strong> - putting plates and cups on the table</li>
            </ul>
            <p><strong>How to describe chores:</strong> We use action words that end with "-ing"</p>
            <ul>
                <li>I am cooking.</li>
                <li>She is washing.</li>
                <li>He is sweeping.</li>
                <li>We are cleaning.</li>
            </ul>
            <p><strong>Why we help:</strong> When everyone helps with chores, our home stays nice and we work together as a family!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #FF5722;"></i> Cooking Example</div>
                <p>"Mom is cooking dinner." - This means mom is preparing food in the kitchen.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-broom" style="color: #795548;"></i> Sweeping Example</div>
                <p>"Dad is sweeping the floor." - This means dad is cleaning the floor with a broom.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Picture Description Game!</div>
                <p>We'll look at pictures of people doing chores and practice describing what we see!</p>
            </div>
        `,
        taskInstructions: "Practice identifying and describing different home chores.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Chore</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the picture with the correct chore word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Picture of someone with a broom → ☐ Washing</div>
                        <div>Picture of someone at the sink → ☐ Cooking</div>
                        <div>Picture of someone at the stove → ☐ Sweeping</div>
                        <div>Picture of someone with toys → ☐ Cleaning</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Picture Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the picture of home life. What chore do you see?
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; background-color: #f5f5f5;">
                        <div style="text-align: center; padding-top: 50px;">[Picture of family doing chores]</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>In this picture, I see someone <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>(cooking/washing/sweeping/cleaning)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Chores at Home</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw yourself helping with a chore at home:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>In my picture, I am <span class="answer-space" style="width: 150px;"></span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Chore Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the sentences about chores:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>When we wash dishes, we are <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>When we use a broom, we are <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>When we prepare food, we are <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>When we tidy our toys, we are <span class="answer-space" style="width: 100px;"></span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Helping Hands</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Trace your hand and write one chore you can do with that hand:
                    <div style="display: flex; margin-top: 10px;">
                        <div class="drawing-area" style="height: 120px; width: 120px; border: 1px dashed #ccc;"></div>
                        <div style="margin-left: 20px; padding-top: 40px;">
                            <div>With this hand, I can help by <span class="answer-space" style="width: 150px;"></span>.</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Watch your family members doing chores tonight. Draw one chore you see and write what they are doing.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Action Role-Play (Chores)",
        subtopic: "Describing home chores through role-play",
        lessonContent: `
            <p>Today is our chore celebration day! We'll act out different chores and practice describing them.</p>
            <p><strong>Key Concept:</strong> We can show what chore we're doing by acting it out, and others can guess what we're doing!</p>
            <p><strong>Role-Play Rules:</strong></p>
            <ul>
                <li>One pupil acts out a chore without talking</li>
                <li>Other pupils watch carefully</li>
                <li>When the teacher says "Freeze!", the actor stops</li>
                <li>Classmates describe what chore they saw</li>
            </ul>
            <p><strong>Common Chores to Act Out:</strong></p>
            <ul>
                <li>Sweeping the floor</li>
                <li>Washing dishes</li>
                <li>Cooking food</li>
                <li>Washing clothes</li>
                <li>Setting the table</li>
                <li>Cleaning windows</li>
            </ul>
            <p><strong>How to Describe:</strong> "He is sweeping." "She is washing dishes." "They are cooking."</p>
            <p><strong>Today's activities:</strong> We'll play chore charades and practice our observation and description skills!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks" style="color: #9C27B0;"></i> Role-Play Example</div>
                <p>If a pupil pretends to hold a broom and sweep, we say: "You are sweeping the floor!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-helping" style="color: #4CAF50;"></i> Teamwork Example</div>
                <p>Two pupils can act out washing dishes together: one washing, one drying. We say: "They are washing dishes!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Chore Charades Game!</div>
                <p>We'll take turns acting out chores while classmates guess what we're doing!</p>
            </div>
        `,
        taskInstructions: "Participate in role-play activities and practice describing the chores you see.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Chore Charades</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Act out a chore. Your classmates will guess:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>My chore to act out: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>What my classmates guessed: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Guess the Chore</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Watch a classmate act. Draw what you think they are doing:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I think <span class="answer-space" style="width: 100px;"></span> is <span class="answer-space" style="width: 150px;"></span>.</div>
                        <div>(name) (chore)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Chore Sequence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner, act out this chore sequence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Sweep the floor</div>
                        <div>2. Wash dishes</div>
                        <div>3. Set the table</div>
                        <div>Draw your favorite part of the sequence:</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Chore Description</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Watch the teacher act out a chore. Describe it using full sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The teacher is <span class="answer-space" style="width: 150px;"></span>.</div>
                        <div>She is using a <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>This chore helps to <span class="answer-space" style="width: 150px;"></span>.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Helping Hero Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a helping hero doing your favorite chore:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I am a helping hero when I <span class="answer-space" style="width: 200px;"></span>.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home how to play chore charades. Act out a chore and have them guess what you're doing.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleEnglishWeek9);
    console.log("english-week9-objects.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleEnglishWeek9);
    console.log("english-week9-objects.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleEnglishWeek9',
        metadata: middleEnglishWeek9.metadata,
        days: middleEnglishWeek9
    });
    console.log("english-week9-objects.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleEnglishWeek9 = middleEnglishWeek4;
console.log("english-week9-objects.js loaded and registered successfully");