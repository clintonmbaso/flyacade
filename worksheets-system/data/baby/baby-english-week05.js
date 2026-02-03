// Baby Class English - Week 5 Data (Objects in Our World)
const babyclassEnglishWeek5 = {
    metadata: {
        grade: "baby",
        subject: "English",
        week: 5,
        title: "Objects in Our World — Classroom and Environment",
        description: "Learning to identify and name classroom stationary, furniture, and natural elements in the environment"
    },
    
    monday: {
        subject: "English",
        topic: "Things at School",
        subtopic: "Identifying and naming classroom stationary and furniture",
        lessonContent: `
            <p>Welcome to our English lesson! Today we will learn about the things we see and use in our classroom.</p>
            <p><strong>Key Concept:</strong> A classroom has many special things that help us learn and play!</p>
            <p><strong>Let's look around our room:</strong></p>
            <ul>
                <li>What are we sitting on?</li>
                <li>What are we writing with?</li>
                <li>Where do we put our books?</li>
                <li>What do we write on?</li>
            </ul>
            <p><strong>Important words for today:</strong> We will learn about chair, table, pencil, book, and chalk/marker.</p>
            <p><strong>Why learn these words?</strong> Knowing classroom objects helps us talk about what we need and where things belong!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair" style="color: #8D6E63;"></i> Classroom Object</div>
                <p>"This is a chair." - We sit on chairs to listen to stories and do our work.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt" style="color: #FF9800;"></i> Writing Tool</div>
                <p>"This is a pencil." - We use pencils to draw pictures and write our names.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> I Spy Game!</div>
                <p>Let's play "I Spy!" Teacher says: "I spy with my little eye, something we use to write on the board." Can you point and say "Chalk" or "Marker"?</p>
            </div>
        `,
        taskInstructions: "Let's find and name classroom objects together!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Play "I Spy" with teacher:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Teacher says: "I spy something we sit on." → Point to: ☐ Chair ☐ Book</div>
                    <div>Teacher says: "I spy something we write with." → Point to: ☐ Pencil ☐ Table</div>
                    <div>Teacher says: "I spy something with pages." → Point to: ☐ Chalk ☐ Book</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Point to the classroom objects when teacher names them:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"Show me the table!" → Point to table</div>
                    <div>"Show me a pencil!" → Point to pencil</div>
                    <div>"Show me a book!" → Point to book</div>
                    <div>"Show me a chair!" → Point to chair</div>
                    <div>"Show me chalk!" → Point to chalk</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Object Placement Game:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                    <p>Teacher will give you an object (like a pencil). Walk to the table and place it there. Say: "Pencil on table!"</p>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">I placed my __________ on the __________.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw your favorite classroom object:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div style="margin-top: 10px;">This is a: <span class="answer-space" style="width: 100px;"></span></div>
            </div>
        `,
        homework: "Show your family one classroom object you learned today. Say its name three times.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Things in the Environment",
        subtopic: "Naming natural elements in our surroundings",
        lessonContent: `
            <p>Today we will go on a special adventure to learn about the beautiful things outside our classroom!</p>
            <p><strong>Key Concept:</strong> Nature gives us many wonderful things to see and talk about.</p>
            <p><strong>Let's go on a Nature Walk!</strong> We will look outside our window or take a short walk outside.</p>
            <p><strong>What will we look for?</strong></p>
            <ul>
                <li>Trees - tall plants with leaves</li>
                <li>Grass - green carpet on the ground</li>
                <li>Flowers - pretty colors that smell nice</li>
                <li>Animals - birds flying and bugs crawling</li>
                <li>Water - rain, puddles, or water in containers</li>
            </ul>
            <p><strong>Full sentences practice:</strong> We will say "I see a green tree" or "I see a red flower."</p>
            <p><strong>Why learn nature words?</strong> Talking about our environment helps us appreciate the world around us!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Nature Element</div>
                <p>"This is a tree." - Trees give us shade and clean air to breathe.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt" style="color: #9C27B0;"></i> Animal Example</div>
                <p>"I see a bird." - Birds fly in the sky and sing beautiful songs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Nature Sound Game!</div>
                <p>Let's play the "Nature Sound" game! Teacher will make a sound like wind, water, or a bird. Can you name what makes that sound?</p>
            </div>
        `,
        taskInstructions: "Let's explore and name the natural things around us!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Nature Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look outside or at nature pictures. Point and name:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Point to something green on the ground: <span class="answer-space" style="width: 100px;"></span> (grass)</div>
                        <div>Point to something tall with leaves: <span class="answer-space" style="width: 100px;"></span> (tree)</div>
                        <div>Point to something with pretty colors: <span class="answer-space" style="width: 100px;"></span> (flower)</div>
                        <div>Point to something that flies: <span class="answer-space" style="width: 100px;"></span> (bird)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Full Sentence Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Say complete sentences about what you see:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div>"I see a __________ tree."</div>
                        <div>"I see green __________."</div>
                        <div>"I see a red __________."</div>
                        <div>"I see a flying __________."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Nature Sound Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Listen to the sound and name what makes it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sound: "Whoosh whoosh" → ☐ Wind ☐ Water</div>
                        <div>Sound: "Chirp chirp" → ☐ Bird ☐ Tree</div>
                        <div>Sound: "Drip drop" → ☐ Flower ☐ Water</div>
                        <div>Sound: "Buzz buzz" → ☐ Bug ☐ Grass</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Nature Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite thing from nature:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">I drew a: <span class="answer-space" style="width: 120px;"></span></div>
                </div>
            </div>
        `,
        homework: "Look for one natural thing outside your home. Tell your family its name.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Classroom and Nature Review",
        subtopic: "Matching objects to their places and categories",
        lessonContent: `
            <p>Today we will practice all the words we learned about classroom things and nature things!</p>
            <p><strong>Key Concept:</strong> Some things belong inside (classroom), and some things belong outside (nature).</p>
            <p><strong>Let's sort our words:</strong></p>
            <ul>
                <li><strong>Inside words:</strong> chair, table, pencil, book, chalk</li>
                <li><strong>Outside words:</strong> tree, grass, flower, bird, water</li>
            </ul>
            <p><strong>Where do they belong?</strong></p>
            <ul>
                <li>We find chairs inside our classroom</li>
                <li>We find trees outside in the environment</li>
                <li>We use pencils inside for writing</li>
                <li>We see birds outside flying</li>
            </ul>
            <p><strong>Today's game:</strong> We'll play "Inside or Outside?" showing pictures and deciding where they belong!</p>
            <p><strong>Why sort objects?</strong> Sorting helps our brains organize information and remember words better!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open" style="color: #795548;"></i> Inside Example</div>
                <p>"A table is INSIDE." - We find tables in our classroom where we work and eat.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FFC107;"></i> Outside Example</div>
                <p>"A flower is OUTSIDE." - Flowers grow in gardens and parks where we can see them.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sorting Game!</div>
                <p>Let's play the "Inside or Outside?" game! Teacher shows a picture, and you say if it belongs inside our classroom or outside in nature!</p>
            </div>
        `,
        taskInstructions: "Let's sort objects into inside and outside categories!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Inside or Outside?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Point to where we find each thing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Chair → ☐ Inside ☐ Outside</div>
                        <div>Tree → ☐ Inside ☐ Outside</div>
                        <div>Book → ☐ Inside ☐ Outside</div>
                        <div>Flower → ☐ Inside ☐ Outside</div>
                        <div>Pencil → ☐ Inside ☐ Outside</div>
                        <div>Bird → ☐ Inside ☐ Outside</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Matching Objects to Places</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a line from the object to where it belongs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Table -----------> Classroom</div>
                        <div>Grass -----------> Garden</div>
                        <div>Chalk -----------> Blackboard</div>
                        <div>Water -----------> Puddle</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing words:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>We sit on a __________ in class.</div>
                        <div>Birds build nests in __________.</div>
                        <div>We write with a __________.</div>
                        <div>__________ is green and grows on the ground.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Two Worlds</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one thing from inside and one from outside:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">INSIDE</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">This is a: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">OUTSIDE</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">This is a: <span class="answer-space" style="width: 80px;"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Object Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find and point to these in our classroom or outside:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Find something we write with: ________________</div>
                        <div>Find something green: ________________</div>
                        <div>Find something with pages: ________________</div>
                        <div>Find something that grows: ________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find one thing inside your home and one thing outside. Tell your family their names.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Object Celebration Day",
        subtopic: "Using all our new words in games and activities",
        lessonContent: `
            <p>Today is our celebration day for all the object words we learned this week!</p>
            <p><strong>Key Concept:</strong> We can name many things around us - both in our classroom and in nature.</p>
            <p><strong>What we learned this week:</strong></p>
            <ul>
                <li>Classroom objects: chair, table, pencil, book, chalk</li>
                <li>Nature objects: tree, grass, flower, bird, water</li>
            </ul>
            <p><strong>Today's special activities:</strong></p>
            <ol>
                <li>"I Spy" game with all our words</li>
                <li>Object charades - acting out an object for friends to guess</li>
                <li>Sorting race - putting objects in the right place quickly</li>
                <li>Drawing our favorite things from the week</li>
            </ol>
            <p><strong>Why celebrate?</strong> Celebrating what we learned helps us remember and feel proud of our new words!</p>
            <p><strong>Remember:</strong> You can now name at least five classroom objects and four natural elements!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #2196F3;"></i> I Spy Game</div>
                <p>"I spy with my little eye, something we write with that has an eraser." Can you say "Pencil"?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks" style="color: #E91E63;"></i> Charades Example</div>
                <p>Pretend to sit down carefully. What am I? A chair! Now you try acting out an object!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Object Race!</div>
                <p>Let's have a race! When teacher says "Find something from nature," run to point to a picture of a tree, flower, or bird!</p>
            </div>
        `,
        taskInstructions: "Let's play games with all our new object words!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Super I Spy</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Play I Spy with all our week's words:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>"I spy something green that grows on the ground." → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>"I spy something we sit on in class." → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>"I spy something with colorful petals." → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>"I spy something we use to write on paper." → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Object Charades</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Act out an object for your friends to guess:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw what object you acted out:</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                        <div style="margin-top: 10px;">My friends guessed: <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Race</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these objects into two groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Classroom Objects:</strong> ☐ Tree ☐ Chair ☐ Pencil ☐ Bird ☐ Book ☐ Water</div>
                        <div><strong>Nature Objects:</strong> ☐ Table ☐ Grass ☐ Flower ☐ Chalk ☐ Bug ☐ Sun</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Favorite Things Museum</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two favorite things you learned about this week:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is a <span class="answer-space" style="width: 100px;"></span> and this is a <span class="answer-space" style="width: 100px;"></span>.</div>
                        <div>I like them because <span class="answer-space" style="width: 200px; height: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Object Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself pointing to and naming objects. Write one sentence about what you learned:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned to name __________ and __________.</div>
                </div>
            </div>
        `,
        homework: "Take your family on a 'naming walk' around your home. Point to and name five different things you see.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyclassEnglishWeek5);
    console.log("babyclass-english-week05.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyclassEnglishWeek5);
    console.log("babyclass-english-week05.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyclassEnglishWeek5',
        metadata: babyclassEnglishWeek5.metadata,
        days: babyclassEnglishWeek5
    });
    console.log("babyclass-english-week05.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyclassEnglishWeek5 = babyclassEnglishWeek5;
console.log("babyclass-english-week05.js loaded and registered successfully");