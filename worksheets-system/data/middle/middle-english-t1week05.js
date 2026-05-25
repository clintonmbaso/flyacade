// Grade Middle English - Term 1 Week 5 Data
const gradeMiddleEnglishWeek5 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 1,
        week: 5,
        title: "Things at Home (Part 2)",
        description: "Identifying and describing items in the sitting room and bedroom, actions in the home, and sorting items by room"
    },
    
    monday: {
        subject: "English",
        topic: "Home Vocabulary",
        subtopic: "Items in the Sitting Room",
        lessonContent: `
            <p>Welcome! Today we will learn the names of common items we find in the sitting room (also called the living room).</p>
            <p><strong>Key Question:</strong> What objects can you see in your sitting room at home?</p>
            <p><strong>Introduction:</strong> The sitting room is where families relax, watch television, and spend time together. Learning the names of items in this room helps us describe our home.</p>
            <p><strong>New Vocabulary Words:</strong></p>
            <ol>
                <li><strong>Chair:</strong> A piece of furniture for one person to sit on. It has a back and four legs.</li>
                <li><strong>Table:</strong> A piece of furniture with a flat top and legs. We put things on it like food, books, or a lamp.</li>
                <li><strong>Mat:</strong> A piece of thick material placed on the floor. We wipe our feet on it or sit on it.</li>
            </ol>
            <p><strong>Sentence Practice:</strong></p>
            <ul>
                <li>"This is a <strong>chair</strong>. I sit on the chair."</li>
                <li>"That is a <strong>table</strong>. We eat at the table."</li>
                <li>"Here is a <strong>mat</strong>. The mat is on the floor."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> At Home Example</div>
                <p>In my sitting room, there is a brown chair, a wooden table, and a round mat. My family sits together here every evening.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Practice</div>
                <p>Teacher asks: "What is this?" Student answers: "This is a table."</p>
                <p>Teacher asks: "Where is the mat?" Student answers: "The mat is on the floor."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-language"></i> Words to Know</div>
                <p>Remember: <strong>chair</strong> (for sitting), <strong>table</strong> (for placing things), <strong>mat</strong> (on the floor).</p>
            </div>
        `,
        taskInstructions: "Name, write, and draw sitting room items. Practice speaking in complete sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Name the Items</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture. Write the correct word (chair, table, or mat):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📷 Picture 1: A piece of furniture you sit on → _________</div>
                        <div>📷 Picture 2: A flat surface on legs for placing things → _________</div>
                        <div>📷 Picture 3: A piece of thick material on the floor → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) I sit on the _________.</div>
                        <div>b) We put our food on the _________.</div>
                        <div>c) The _________ is on the floor near the door.</div>
                        <div>d) My grandmother likes to sit on that wooden _________.</div>
                        <div>e) Please wipe your feet on the _________ before entering.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a sitting room. Include a chair, a table, and a mat. Label each item:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Speaking Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> With a partner, point to each item and say a sentence. Example: "This is a chair. I sit on the chair."
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw your sitting room at home. Label the chair, table, and mat. Show your drawing to your family and name each item in English.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Home Vocabulary",
        subtopic: "Actions in the Sitting Room",
        lessonContent: `
            <p>Today we will learn action words (verbs) for things we do in the sitting room. We will also practice miming these actions!</p>
            <p><strong>Key Question:</strong> What actions can you do with a mat or a table?</p>
            <p><strong>Introduction:</strong> Knowing action words helps us describe what people do. Today we will practice miming (acting out) actions so you can remember the words better.</p>
            <p><strong>Action Words (Verbs) for the Sitting Room:</strong></p>
            <ol>
                <li><strong>Sit (on a mat/chair):</strong> To rest your body on something. "I sit on the mat."</li>
                <li><strong>Eat (at a table):</strong> To put food in your mouth. "We eat at the table."</li>
                <li><strong>Drink (at a table):</strong> To take liquid into your mouth. "I drink water at the table."</li>
                <li><strong>Wipe (your feet on a mat):</strong> To clean or dry something by rubbing. "Please wipe your feet on the mat."</li>
                <li><strong>Relax (in a chair):</strong> To rest and feel calm. "My father relaxes in the chair."</li>
            </ol>
            <p><strong>Sentence Practice:</strong></p>
            <ul>
                <li>"I <strong>sit on</strong> the mat."</li>
                <li>"We <strong>eat at</strong> the table."</li>
                <li>"She <strong>wipes</strong> her feet on the mat."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Miming Activity</div>
                <p>Teacher says: "Sit on the mat." Students mime sitting on the floor.</p>
                <p>Teacher says: "Eat at the table." Students mime eating food at a table.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Daily Routine</div>
                <p>Every morning, I sit on a chair and eat breakfast at the table. Then I wipe my feet on the mat before going outside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Partner Practice</div>
                <p>Student A mimes an action. Student B guesses: "You are sitting on a mat!" or "You are eating at a table!"</p>
            </div>
        `,
        taskInstructions: "Mime actions in the sitting room, match verbs to items, and write sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Miming Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your teacher or a partner, mime these actions. Take turns guessing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sitting on a mat</div>
                        <div>• Eating at a table</div>
                        <div>• Wiping your feet on a mat</div>
                        <div>• Relaxing in a chair</div>
                        <div>• Drinking water at a table</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Write down one action you mimed and how your partner guessed:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Action to the Item</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each action to the correct item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>sitting → _________ (chair / table / mat)</div>
                        <div>eating → _________ (chair / table / mat)</div>
                        <div>wiping feet → _________ (chair / table / mat)</div>
                        <div>relaxing → _________ (chair / table / mat)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences about actions you do in your sitting room:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Describe</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a person doing an action in the sitting room. Write a sentence describing the drawing:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Teach your family one action word in English. Ask them to mime 'sitting on a mat' or 'eating at a table.' Write one sentence about what they did.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Home Vocabulary",
        subtopic: "Items in the Bedroom",
        lessonContent: `
            <p>Today we will learn the names of common items we find in the bedroom!</p>
            <p><strong>Key Question:</strong> What objects help you sleep and stay comfortable in your bedroom?</p>
            <p><strong>Introduction:</strong> The bedroom is where we sleep, rest, and keep our clothes. Learning these words helps us talk about our personal space.</p>
            <p><strong>New Vocabulary Words:</strong></p>
            <ol>
                <li><strong>Bed:</strong> A piece of furniture used for sleeping. It has a mattress and a frame.</li>
                <li><strong>Blanket:</strong> A large piece of warm cloth that covers you when you sleep.</li>
                <li><strong>Pillow:</strong> A soft cushion that supports your head when you sleep.</li>
            </ol>
            <p><strong>Sentence Practice:</strong></p>
            <ul>
                <li>"This is my <strong>bed</strong>. I sleep in my bed."</li>
                <li>"That is a warm <strong>blanket</strong>. The blanket keeps me warm."</li>
                <li>"Here is a soft <strong>pillow</strong>. I put my head on the pillow."</li>
            </ul>
            <p><strong>Extra Words (Optional):</strong></p>
            <ul>
                <li><strong>Wardrobe/Closet:</strong> A place to hang clothes</li>
                <li><strong>Lamp:</strong> A light for reading at night</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bed"></i> At Home Example</div>
                <p>In my bedroom, I have a blue bed, a red blanket, and a white pillow. Every night, I put my head on the pillow and pull the blanket over me.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Practice</div>
                <p>Teacher asks: "What do you put your head on?" Student answers: "I put my head on the pillow."</p>
                <p>Teacher asks: "What keeps you warm at night?" Student answers: "The blanket keeps me warm."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Bedtime Routine</div>
                <p>Before I sleep, I fluff my pillow, pull up my blanket, and lie down on my bed. Good night!</p>
            </div>
        `,
        taskInstructions: "Name, write, and draw bedroom items. Practice using complete sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Name the Items</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the correct word (bed, blanket, or pillow):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📷 Picture 1: You sleep on this furniture → _________</div>
                        <div>📷 Picture 2: A soft cushion for your head → _________</div>
                        <div>📷 Picture 3: A warm cover for your body → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) I sleep on my _________.</div>
                        <div>b) The _________ keeps me warm at night.</div>
                        <div>c) I rest my head on the _________.</div>
                        <div>d) Please put the _________ on the bed so I can sleep.</div>
                        <div>e) My _________ is very soft and comfortable.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a bedroom. Include a bed, a blanket, and a pillow. Label each item:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Describe Your Bedroom</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 2-3 sentences describing your bedroom or your dream bedroom:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Look at your bed at home. Describe it using three words: bed, blanket, pillow. Write two sentences and draw a small picture.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Home Vocabulary",
        subtopic: "Home Environments - Sorting Game",
        lessonContent: `
            <p>Today we will play a sorting game! We will decide which items belong in the bedroom and which belong in the kitchen. Then we will learn about other rooms too!</p>
            <p><strong>Key Question:</strong> Does this item belong in the bedroom or the kitchen? How do you know?</p>
            <p><strong>Introduction:</strong> Every room in the house has different items. Today we will sort items by room. This helps us organize our vocabulary and describe our homes better.</p>
            <p><strong>Items We Have Learned This Week:</strong></p>
            <ul>
                <li><strong>Sitting Room:</strong> chair, table, mat</li>
                <li><strong>Bedroom:</strong> bed, blanket, pillow</li>
            </ul>
            <p><strong>New Items for Sorting (Kitchen):</strong></p>
            <ul>
                <li><strong>Stove/Cooker:</strong> Used for cooking food</li>
                <li><strong>Pot:</strong> Used for boiling or cooking</li>
                <li><strong>Cup:</strong> Used for drinking</li>
                <li><strong>Plate:</strong> Used for eating food</li>
                <li><strong>Spoon:</strong> Used for eating soup or stirring</li>
            </ul>
            <p><strong>Sentence Practice for Sorting:</strong></p>
            <ul>
                <li>"A _________ belongs in the bedroom because _________."</li>
                <li>"A _________ belongs in the kitchen because _________."</li>
                <li>"A _________ belongs in the sitting room because _________."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Sorting Example</div>
                <p>Bedroom: bed, blanket, pillow, wardrobe, lamp</p>
                <p>Kitchen: stove, pot, cup, plate, spoon, fork, knife</p>
                <p>Sitting Room: chair, table, mat, television, sofa</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Why? Questions</div>
                <p>"Does a pillow belong in the kitchen?" → "No, a pillow belongs in the bedroom because you put your head on it when you sleep."</p>
                <p>"Does a pot belong in the bedroom?" → "No, a pot belongs in the kitchen because you cook food in it."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Game Time</div>
                <p>Teacher holds up a picture. Students shout: "Bedroom!" or "Kitchen!" or "Sitting Room!"</p>
            </div>
        `,
        taskInstructions: "Sort items into bedrooms, kitchens, and sitting rooms. Complete charts and create your own sorting game.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each item in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Items to sort:</strong> bed, blanket, pillow, chair, table, mat, stove, pot, cup, plate, spoon</p>
                    </div>
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Bedroom</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Sitting Room</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Kitchen</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct room and a reason:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A blanket belongs in the _________ because _________.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) A chair belongs in the _________ because _________.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) A pot belongs in the _________ because _________.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d) A pillow belongs in the _________ because _________.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write T (True) or F (False) for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A pillow belongs in the kitchen. ___</div>
                        <div>b) A stove is used for cooking food. ___</div>
                        <div>c) A mat belongs in the bedroom. ___</div>
                        <div>d) A cup is used for drinking. ___</div>
                        <div>e) A blanket keeps you warm in bed. ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Sorting Game</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw 3 items from your home. Write the name of each item. Then write the room where it belongs:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 2 items in your bedroom, 2 items in your sitting room, and 2 items in your kitchen. Write their names in a list and show your family. Ask them: 'Where does this belong?'",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleEnglishWeek5);
    console.log("grade-middle-english-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleEnglishWeek5);
    console.log("grade-middle-english-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleEnglishWeek5',
        metadata: gradeMiddleEnglishWeek5.metadata,
        days: gradeMiddleEnglishWeek5
    });
    console.log("grade-middle-english-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleEnglishWeek5 = gradeMiddleEnglishWeek5;
console.log("grade-middle-english-week5.js loaded and registered successfully");