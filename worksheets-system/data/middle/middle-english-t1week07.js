// Grade Middle English - Term 1 Week 7 Data
const englishTerm1Week7 = {
    metadata: {
        grade: "middle",
        subject: "English",
        term: 1,
        week: 7,
        title: "Things at School",
        description: "Identifying and naming classroom objects, furniture, and learning tools"
    },
    
    monday: {
        subject: "English",
        topic: "Things at School",
        subtopic: "The Classroom Space – Looking around and recognizing we are at school",
        lessonContent: `
            <p>Welcome to our classroom! Today we will look around and learn to recognize that we are at school.</p>
            <p><strong>Key Question:</strong> Where are we right now? How do we know this is a school?</p>
            <p><strong>Introduction:</strong> A classroom is a special place where we come to learn, read, write, and play with friends. Every day, we sit in our classroom and learn new things with our teacher.</p>
            <p><strong>Let's look around our classroom:</strong></p>
            <ul>
                <li>What do you see when you look up? (Ceiling, lights, fan)</li>
                <li>What do you see when you look down? (Floor, our feet, maybe a mat or carpet)</li>
                <li>What do you see when you look to the sides? (Walls, windows, door, posters)</li>
                <li>What do you see in front of you? (Teacher, blackboard, table)</li>
                <li>What do you see behind you? (Other students, shelves, back wall)</li>
            </ul>
            <p><strong>School vs. Home:</strong></p>
            <ul>
                <li>At school we have a teacher, a blackboard, desks, and other students</li>
                <li>At school we learn lessons and do activities together</li>
                <li>At home we have family, a bed, a kitchen, and different toys</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> Look Around!</div>
                <p>Point to the window. Point to the door. Point to the blackboard. These are all things we find in a classroom!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> School vs. Home</div>
                <p>Do you have a blackboard at home? Probably not! That is one way we know we are at school and not at home.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> We Are Together</div>
                <p>Look at your classmates. You see them here at school, not at home. School is where we learn together!</p>
            </div>
        `,
        taskInstructions: "Look around the classroom and answer the questions about what you see.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Look and Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around the classroom. What do you see?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Something on the wall: _________</div>
                        <div>Something on the ceiling: _________</div>
                        <div>Something on the floor: _________</div>
                        <div>Something near the door: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of our classroom. Include the door, windows, blackboard, and your desk.
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Speaking Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Tell your partner one thing you see in the classroom. Use the sentence: "I see a ______ in the classroom."
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How is school different from home?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look at one room in your home (like the kitchen or living room). Draw one thing you see there that is NOT in your classroom.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Things at School",
        subtopic: "Learning Tools – Naming books, chalk, pencil",
        lessonContent: `
            <p>Today we will learn the names of the tools we use for learning!</p>
            <p><strong>Key Question:</strong> What tools do we use to read, write, and learn at school?</p>
            <p><strong>Introduction:</strong> In our classroom, we use special tools to help us learn. These are called learning tools. Today we will learn their names.</p>
            <p><strong>Learning Tools We Use:</strong></p>
            <ul>
                <li><strong>Book:</strong> We read books to learn new stories and information</li>
                <li><strong>Pencil:</strong> We write with a pencil. We can erase pencil marks with an eraser</li>
                <li><strong>Chalk:</strong> The teacher uses chalk to write on the blackboard</li>
                <li><strong>Eraser (for chalkboard):</strong> The teacher uses this to clean the blackboard</li>
                <li><strong>Pen:</strong> We write with a pen. Pen marks cannot be erased</li>
                <li><strong>Ruler:</strong> We use a ruler to draw straight lines and measure things</li>
                <li><strong>Eraser (for pencil):</strong> We use this to erase pencil mistakes</li>
                <li><strong>Sharpener:</strong> We use this to make our pencils sharp again</li>
                <li><strong>Notebook:</strong> We write in our notebook every day</li>
            </ul>
            <p><strong>How We Use Each Tool:</strong></p>
            <ul>
                <li>We READ a book</li>
                <li>We WRITE with a pencil or pen</li>
                <li>We DRAW with a pencil or crayon</li>
                <li>We ERASE with an eraser</li>
                <li>We SHARPEN with a sharpener</li>
                <li>We MEASURE with a ruler</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> My Book</div>
                <p>"This is my English book. I read my book every day."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> My Pencil</div>
                <p>"This is my pencil. I write with my pencil. When my pencil is dull, I use a sharpener."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Teacher's Chalk</div>
                <p>"My teacher writes on the blackboard with white chalk. She cleans the board with an eraser."</p>
            </div>
        `,
        taskInstructions: "Name and identify different learning tools in the classroom.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Name the Tool</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the pictures (or real objects) and write the name of each learning tool:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📖 This is a _________</div>
                        <div>✏️ This is a _________</div>
                        <div>📓 This is a _________</div>
                        <div>📏 This is a _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line to match each tool to what it does:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Book → (we write with it)</div>
                        <div>Pencil → (we read it)</div>
                        <div>Sharpener → (we erase mistakes)</div>
                        <div>Eraser → (we make pencils sharp)</div>
                        <div>Chalk → (teacher writes on board with it)</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Finish each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I write with my _________.</div>
                        <div>I read my _________.</div>
                        <div>My teacher writes on the board with _________.</div>
                        <div>When I make a mistake, I use an _________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw three learning tools that you have on your desk. Write their names next to each drawing.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Collect your learning tools at home (pencil, eraser, sharpener, ruler, book). Practice saying each name aloud to your family.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Things at School",
        subtopic: "Classroom Furniture – Naming table, chair, blackboard",
        lessonContent: `
            <p>Today we will learn the names of the furniture we use in our classroom every day!</p>
            <p><strong>Key Question:</strong> What furniture do we have in our classroom? What do we use each piece for?</p>
            <p><strong>Introduction:</strong> Furniture helps us sit, write, learn, and stay organized. In our classroom, we have special furniture just for students and teachers.</p>
            <p><strong>Classroom Furniture:</strong></p>
            <ul>
                <li><strong>Table / Desk:</strong> We write and work on our table. Some classrooms have desks with storage inside.</li>
                <li><strong>Chair:</strong> We sit on a chair. Chairs help us sit up straight while we learn.</li>
                <li><strong>Blackboard / Whiteboard:</strong> The teacher writes lessons on the board. We look at the board to learn.</li>
                <li><strong>Teacher's Desk:</strong> The teacher's special desk where they keep books and papers.</li>
                <li><strong>Shelf / Bookcase:</strong> We keep books and supplies on shelves.</li>
                <li><strong>Cupboard:</strong> We store learning materials in cupboards.</li>
            </ul>
            <p><strong>Actions We Do with Furniture:</strong></p>
            <ul>
                <li>We SIT ON a chair</li>
                <li>We WRITE ON a table/desk</li>
                <li>We LOOK AT the blackboard</li>
                <li>We PUT books ON a shelf</li>
            </ul>
            <p><strong>Remember to say:</strong> "I sit on my chair." "I write on my desk." "I look at the blackboard."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> My Chair</div>
                <p>"This is my chair. I sit on my chair when the teacher is talking."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-desktop"></i> My Desk</div>
                <p>"This is my desk. I put my book on my desk. I write on my desk."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> The Blackboard</div>
                <p>"The blackboard is at the front of the classroom. I look at the blackboard to copy the lesson."</p>
            </div>
        `,
        taskInstructions: "Identify and name classroom furniture around you.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Furniture</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around the classroom. Point to each thing and say its name:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ A chair</div>
                        <div>☐ A table or desk</div>
                        <div>☐ The blackboard</div>
                        <div>☐ A shelf</div>
                        <div>☐ The teacher's desk</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct word (chair, desk, blackboard):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I sit on my _________.</div>
                        <div>I write on my _________.</div>
                        <div>The teacher writes on the _________.</div>
                        <div>I put my book on my _________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Classroom</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a picture of our classroom. Label these things:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• chair</div>
                        <div>• desk</div>
                        <div>• blackboard</div>
                        <div>• teacher's desk</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Speaking Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Tell your partner: "I sit on a ______. I write on a ______. I look at the ______."
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "At home, point to a chair and a table. Say out loud: 'This is a chair. This is a table.' If you have a desk at home, point to that too.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Things at School",
        subtopic: "I Spy in the Classroom – Playing 'I spy' to spot and name classroom objects",
        lessonContent: `
            <p>Today we will play a fun game called "I Spy" to practice naming everything we have learned this week!</p>
            <p><strong>Key Question:</strong> Can you look around and name the things you see in our classroom?</p>
            <p><strong>Introduction:</strong> This week we learned about our classroom, learning tools, and furniture. Today we will put it all together with a fun game. "I Spy" is a game where one person describes something they see, and others guess what it is!</p>
            <p><strong>How to Play "I Spy":</strong></p>
            <ol>
                <li>One person looks around the room and chooses an object</li>
                <li>They say, "I spy with my little eye, something that is ______" (say the color or shape or first letter)</li>
                <li>Everyone else looks around and guesses the object</li>
                <li>The person who guesses correctly gets to be the next spy!</li>
            </ol>
            <p><strong>Classroom Objects We Learned This Week:</strong></p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div>
                    <strong>Learning Tools:</strong>
                    <ul>
                        <li>book</li>
                        <li>pencil</li>
                        <li>pen</li>
                        <li>ruler</li>
                        <li>eraser</li>
                        <li>sharpener</li>
                        <li>notebook</li>
                        <li>chalk</li>
                    </ul>
                </div>
                <div>
                    <strong>Furniture:</strong>
                    <ul>
                        <li>chair</li>
                        <li>desk / table</li>
                        <li>blackboard</li>
                        <li>teacher's desk</li>
                        <li>shelf</li>
                        <li>cupboard</li>
                        <li>door</li>
                        <li>window</li>
                    </ul>
                </div>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-eye"></i> I Spy Example 1</div>
                <p>Student says: "I spy with my little eye, something that is brown and made of wood."<br>Class guesses: "Is it the desk? Is it the chair? Is it the door?"<br>Answer: "It's the desk!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> I Spy Example 2</div>
                <p>Student says: "I spy with my little eye, something I use to write."<br>Class guesses: "Is it a pencil? Is it a pen?"<br>Answer: "It's a pencil!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> I Spy Example 3</div>
                <p>Student says: "I spy with my little eye, something the teacher writes on."<br>Class guesses: "Is it the blackboard?"<br>Answer: "Yes, it's the blackboard!"</p>
            </div>
        `,
        taskInstructions: "Play 'I Spy' with your classmates and complete the review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Let's Play "I Spy"</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Play "I Spy" with your class. When it is your turn, say:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5; text-align: center;">
                        "I spy with my little eye, something that is (color/shape/starting letter) ________"
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Write what you spied and who guessed correctly:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Review – Name the Object</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What is the name of each object?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📖 _________</div>
                        <div>✏️ _________</div>
                        <div>🪑 _________</div>
                        <div>📓 _________</div>
                        <div>📏 _________</div>
                        <div>🧽 (chalk eraser) _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences About You</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Finish each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My favorite learning tool is _________ because _________</div>
                        <div>In our classroom, I sit on a _________</div>
                        <div>I write on my _________ with a _________</div>
                        <div>At school, we have a _________ where the teacher writes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite thing in the classroom. Write its name and one sentence about it.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was your favorite thing you learned this week about things at school?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "At home, play 'I Spy' with your family. Look around your living room or bedroom and describe something. See if they can guess it!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(englishTerm1Week7);
    console.log("english-term1-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(englishTerm1Week7);
    console.log("english-term1-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'englishTerm1Week7',
        metadata: englishTerm1Week7.metadata,
        days: englishTerm1Week7
    });
    console.log("english-term1-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.englishTerm1Week7 = englishTerm1Week7;
console.log("english-term1-week7.js loaded and registered successfully");