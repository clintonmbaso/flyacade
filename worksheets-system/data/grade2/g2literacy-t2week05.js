// Grade 2 Literacy - Term 2 Week 5 Data
const grade2LiteracyWeek5 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 2,
        week: 5,
        title: "Reading Strategies: Intensive & Extensive Reading",
        description: "Developing reading comprehension through structural extraction, pleasure reading, and text review skills"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Reading Comprehension",
        subtopic: "Intensive Reading: The 4W+H Question Format",
        lessonContent: `
            <p>Welcome, young readers! Today we'll become reading detectives and learn how to find important information in every story we read!</p>
            <p><strong>Key Question:</strong> How can we find the most important information in a story?</p>
            <p><strong>Introduction:</strong> When we read carefully (intensive reading), we look for special clues that tell us WHO, WHAT, WHERE, WHEN, and WHY/HOW. These are called the 5W+H questions!</p>
            <p><strong>The 5W+H Questions:</strong></p>
            <ol>
                <li><strong>WHO?</strong> - Who is the story about? (characters/people)</li>
                <li><strong>WHAT?</strong> - What happened? (the main event)</li>
                <li><strong>WHERE?</strong> - Where did it happen? (the place/setting)</li>
                <li><strong>WHEN?</strong> - When did it happen? (the time)</li>
                <li><strong>WHY?</strong> - Why did it happen? (the reason)</li>
                <li><strong>HOW?</strong> - How did it happen? (the way/process)</li>
            </ol>
            <p><strong>Remember:</strong> Good readers ask these questions before, during, and after reading!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Sample Story</div>
                <p>"On Saturday morning, Max the dog chased a red ball in the park because he loves to play fetch."</p>
                <p><strong>Questions:</strong><br>
                WHO? Max the dog<br>
                WHAT? Chased a red ball<br>
                WHERE? In the park<br>
                WHEN? Saturday morning<br>
                WHY? Because he loves to play fetch</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Detective Tip</div>
                <p>The 5W+H questions help us understand EVERY story. Think of yourself as a reading detective looking for clues!</p>
            </div>
        `,
        taskInstructions: "Read a short passage and answer the 5W+H questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Read This Story:</strong></p>
                <div class="reading-passage" style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; margin: 10px 0;">
                    <p>Yesterday afternoon, a little girl named Emma found a shiny penny on the playground. She picked it up and showed it to her teacher because she thought it was a lucky penny!</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part A: Answer the Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> WHO is the story about?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> WHAT did she find?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> WHERE did she find it?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> WHEN did this happen?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> WHY did she show it to her teacher?
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Your Turn to Ask Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write your own 5W+H questions about a book you love:
                    <div style="margin-top: 10px;">
                        <div>WHO? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div style="margin-top: 8px;">WHAT? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div style="margin-top: 8px;">WHERE? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div style="margin-top: 8px;">WHEN? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div style="margin-top: 8px;">WHY? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                        <div style="margin-top: 8px;">HOW? <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a picture of Emma finding the lucky penny:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Read a short story with a family member. Ask them the 5W+H questions about the story and write down their answers.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Reading Strategies",
        subtopic: "Introduction to Extensive Reading: Reading for Pleasure",
        lessonContent: `
            <p>Today we'll discover the joy of reading just for FUN! This is called extensive reading!</p>
            <p><strong>Key Question:</strong> How can we enjoy reading and choose books we love?</p>
            <p><strong>Introduction:</strong> Extensive reading means reading a lot of different texts because we WANT to, not because we have to. It's reading for pleasure!</p>
            <p><strong>Types of Texts We Can Read for Fun:</strong></p>
            <ul>
                <li><strong>Picture Books:</strong> Stories with beautiful illustrations</li>
                <li><strong>Comics & Graphic Novels:</strong> Stories told with pictures and speech bubbles</li>
                <li><strong>Poems:</strong> Short, fun writing that sometimes rhymes</li>
                <li><strong>Non-Fiction Books:</strong> Books about animals, space, sports, or anything you love!</li>
                <li><strong>Magazines:</strong> Short articles about many topics</li>
                <li><strong>Beginning Chapter Books:</strong> Longer stories broken into small chapters</li>
            </ul>
            <p><strong>How to Choose a "Just Right" Book:</strong></p>
            <ol>
                <li>Look at the cover - does it interest you?</li>
                <li>Read the first page - can you understand most words?</li>
                <li>Ask yourself - do I want to keep reading?</li>
                <li>The "Five Finger Rule": Put up one finger for each word you don't know. 0-1 fingers = too easy, 2-3 fingers = just right, 4-5 fingers = too hard</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Reading is Fun!</div>
                <p>When you read for pleasure, you can read anywhere - in a cozy chair, under a blanket, or even outside under a tree!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Five Finger Rule</div>
                <p>Open any book to a page. Read it. Put up one finger for each word you don't know. If you put up 2-3 fingers, that book is JUST RIGHT for you!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart"></i> Find Your Passion</div>
                <p>Do you love dinosaurs? There are books about dinosaurs! Do you love soccer? There are soccer books! Read what YOU love!</p>
            </div>
        `,
        taskInstructions: "Explore different types of texts and select a book for pleasure reading.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Text Type Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the different books/texts provided. Check the ones that interest you:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>□ Picture book</div>
                        <div>□ Comic/Graphic novel</div>
                        <div>□ Poem</div>
                        <div>□ Non-fiction book</div>
                        <div>□ Magazine</div>
                        <div>□ Chapter book</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Choose Your Book</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Select a book you want to read for pleasure. Write its title:
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why did you choose this book?
                    <div class="answer-space" style="height: 60px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Five Finger Rule Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Try the Five Finger Rule on your chosen book:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of words I didn't know: _____</div>
                        <div>Is this book: □ Too easy  □ Just right  □ Too hard</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reading Time!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read your chosen book for 10-15 minutes. Draw something from your favorite part:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How did reading this book make you feel? (Happy? Excited? Curious?)
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different types of texts at home (book, magazine, cereal box, letter, etc.). Bring one to share with the class.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Reading Comprehension",
        subtopic: "Extensive Reading Application: Retelling, Summarizing & Main Ideas",
        lessonContent: `
            <p>Today we'll share what we've read and practice telling others about our favorite books!</p>
            <p><strong>Key Question:</strong> How can we tell others about the books we've read?</p>
            <p><strong>Three Ways to Share What You've Read:</strong></p>
            <ol>
                <li><strong>Retelling:</strong> Telling the story again in your own words, including what happened at the beginning, middle, and end.</li>
                <li><strong>Summarizing:</strong> Giving a short version of the story - just the most important parts!</li>
                <li><strong>Finding the Central Idea:</strong> Thinking about what the story is really about (friendship, courage, kindness, etc.)</li>
            </ol>
            <p><strong>How to Retell a Story:</strong></p>
            <ul>
                <li>Tell WHO the characters are</li>
                <li>Tell WHERE the story happens</li>
                <li>Tell WHAT happens first, next, then, and finally</li>
                <li>Tell HOW the story ends</li>
            </ul>
            <p><strong>How to Find the Central Idea:</strong></p>
            <ul>
                <li>Ask yourself: What did the character learn?</li>
                <li>Ask yourself: What message is the author sharing?</li>
                <li>Central ideas might be: "Always be kind" or "Never give up" or "Friends help each other"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Example Retelling</div>
                <p>"In The Very Hungry Caterpillar, a tiny caterpillar hatches from an egg. He eats more and more food each day. At the end, he builds a cocoon and turns into a beautiful butterfly!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compress-alt"></i> Example Summary</div>
                <p>"A caterpillar eats lots of food and turns into a butterfly." (Just the most important parts!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example Central Idea</div>
                <p>The central idea of The Very Hungry Caterpillar might be: "Change and growth take time, but beautiful things can happen."</p>
            </div>
        `,
        taskInstructions: "Retell, summarize, and find the central idea of a book you've read.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Book Sharing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What book did you read this week? Write the title and author:
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Retell the Story</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Tell what happened in your book. Include BEGINNING, MIDDLE, and END:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Beginning:</strong> <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 300px;"></span></div>
                        <div style="margin-top: 8px;"><strong>Middle:</strong> <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 300px;"></span></div>
                        <div style="margin-top: 8px;"><strong>End:</strong> <span style="border-bottom: 1px solid #ccc; display: inline-block; width: 300px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write a Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Now write a SHORT summary (just 1-2 sentences) of your book:
                    <div class="answer-space" style="height: 60px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find the Central Idea</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the most important message or lesson in your book? (Example: "Always help your friends" or "Be brave")
                    <div class="answer-space" style="height: 60px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Rate Your Book</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Color in the stars to show how much you liked your book:
                    <div style="font-size: 24px; color: gold; margin-top: 5px;">
                        ★ ★ ★ ★ ★
                    </div>
                    <div style="margin-top: 5px;">(Color 1 star = Didn't like it, 5 stars = LOVED it!)</div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Would you recommend this book to a friend? Why or why not?
                    <div class="answer-space" style="height: 60px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Partner Share</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Share your retelling with a partner. Write one thing your partner liked about your book:
                    <div class="answer-space" style="height: 40px; margin-top: 5px; border-bottom: 1px solid #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Read another book of your choice this weekend. Tell a family member the beginning, middle, and end of the story. Have them sign your reading log.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek5);
    console.log("grade2-literacy-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek5);
    console.log("grade2-literacy-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek5',
        metadata: grade2LiteracyWeek5.metadata,
        days: grade2LiteracyWeek5
    });
    console.log("grade2-literacy-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek5 = grade2LiteracyWeek5;
console.log("grade2-literacy-week5.js loaded and registered successfully");