// Grade 3 Literacy - Term 2 Week 3 Data
const grade3LiteracyWeek3 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 2,
        week: 3,
        title: "Building Reading Fluency & Comprehension",
        description: "Reading complex words with fluency, guided reading practice, and active reading strategies"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Reading Fluency",
        subtopic: "Reading Complex Words and Longer Sentences",
        lessonContent: `
            <p>Welcome to our reading fluency lesson! Today we'll practice reading more challenging words and longer sentences smoothly and confidently.</p>
            <p><strong>Key Question:</strong> How can I read longer words and sentences without stopping and starting?</p>
            <p><strong>Introduction:</strong> Reading fluently means reading smoothly, at a good pace, with expression. When you read fluently, you understand the story better because your brain isn't working hard to figure out each word.</p>
            <p><strong>Tips for Reading Longer Words:</strong></p>
            <ol>
                <li><strong>Chunk it:</strong> Break the word into smaller parts (e.g., 'butterfly' → but-ter-fly)</li>
                <li><strong>Look for word families:</strong> Do you see a word you already know? (e.g., 'unhappy' has 'happy')</li>
                <li><strong>Sound it out:</strong> Say each sound slowly, then faster</li>
                <li><strong>Read it again:</strong> Practice makes perfect!</li>
            </ol>
            <p><strong>Tips for Reading Longer Sentences:</strong></p>
            <ul>
                <li>Look for punctuation (periods, commas) to know when to pause</li>
                <li>Read phrase by phrase, not word by word</li>
                <li>Keep your eyes moving forward</li>
                <li>If you make a mistake, go back and try again</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Chunking Words</div>
                <p>"unbelievable" → un-be-liev-a-ble. When you break it into smaller chunks, it's much easier to read!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comma"></i> Punctuation Power</div>
                <p>When you see a comma (,) take a short breath. When you see a period (.) take a longer pause. This helps your reading sound natural.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rocket"></i> Speed Up!</div>
                <p>Read this sentence three times: "The tiny, brown puppy ran across the grassy field." Each time, try to read it a little faster.</p>
            </div>
        `,
        taskInstructions: "Practice reading complex words and longer sentences with fluency.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Chunking Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Break these words into smaller chunks, then read them aloud:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• wonderful → ________</div>
                        <div>• butterfly → ________</div>
                        <div>• playground → ________</div>
                        <div>• incredible → ________</div>
                        <div>• celebration → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each sentence aloud three times. Get faster each time:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <p><strong>Sentence 1:</strong> The happy children played in the warm, golden sunshine.</p>
                        <p><strong>Sentence 2:</strong> After dinner, our family went for a long walk around the neighborhood.</p>
                        <p><strong>Sentence 3:</strong> Because it was raining, Sarah put on her yellow raincoat and boots.</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Which sentence was easiest? Which was hardest?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With a partner, take turns reading this paragraph. Give each other feedback:
                    <div style="margin-left: 20px; margin-top: 10px; background: #e8f4f8; padding: 10px; border-radius: 8px;">
                        <p>"Sam woke up early on Saturday morning. He jumped out of bed and ran to the window. The sun was shining brightly. 'What a beautiful day for a picnic!' he shouted. Sam quickly got dressed and packed his favorite snacks into a basket."</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>How did your reading improve each time?</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Choose a page from your favorite storybook. Practice reading it aloud 3 times to a family member. Ask them to tell you one thing you did well!",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Reading Fluency",
        subtopic: "Guided Reading: Building Fluid Speed",
        lessonContent: `
            <p>Today we'll practice guided reading with simple books to help us read more smoothly and quickly!</p>
            <p><strong>Key Question:</strong> How can I read faster without losing understanding?</p>
            <p><strong>Introduction:</strong> Reading fluency isn't just about speed - it's about reading smoothly with expression. Today we'll work on building our reading speed while still understanding the story.</p>
            <p><strong>What is Guided Reading?</strong></p>
            <ul>
                <li>You read with a teacher or in a small group</li>
                <li>The book is just right for your reading level</li>
                <li>You get help when you need it</li>
                <li>Everyone practices reading aloud</li>
            </ul>
            <p><strong>Strategies for Building Speed:</strong></p>
            <ol>
                <li><strong>Echo Reading:</strong> Listen to someone read a sentence, then read it the same way</li>
                <li><strong>Choral Reading:</strong> Read aloud together as a group</li>
                <li><strong>Repeated Reading:</strong> Read the same passage several times</li>
                <li><strong>Timed Reading:</strong> See how many words you can read in one minute</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Choral Reading Fun</div>
                <p>When everyone reads together, it's like singing in a choir! You can hear the rhythm and flow of the words.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> One Minute Challenge</div>
                <p>Read the same passage for one minute. Count how many words you read. Then try again - can you read more words the second time?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Expression Matters</div>
                <p>Read "I can't believe it!" in three ways: happy, scared, excited. See how your voice changes the meaning!</p>
            </div>
        `,
        taskInstructions: "Practice guided reading strategies to build fluid reading speed.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Echo Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen as your teacher reads each phrase. Then echo it back:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <p>"The little cat / sat on the mat. / She saw a big rat / and gave it a pat."</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>How did echoing help you read with expression?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Repeated Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read this passage 3 times. Time yourself each time:
                    <div style="margin-left: 20px; margin-top: 10px; background: #e8f4f8; padding: 10px; border-radius: 8px;">
                        <p>"The sun was setting behind the mountains. The sky turned orange and pink. Birds flew back to their nests. The day was saying goodbye."</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>First read: ________ seconds</div>
                        <div>Second read: ________ seconds</div>
                        <div>Third read: ________ seconds</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Did you get faster each time?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Expression Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read this sentence with different feelings:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; border-radius: 8px;">
                        <p><strong>"Where is my new red backpack?"</strong></p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Read it like you are worried: _________</div>
                        <div>• Read it like you are angry: _________</div>
                        <div>• Read it like you are confused: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Guided Reading Group</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In your small group, take turns reading pages from your guided reading book:
                    <div class="answer-space" style="height: 80px;">
                        <p><em>Book title: _______________</em></p>
                        <p><em>One new word I learned: _______________</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Read a short book or story to a family member. Try to read smoothly without stopping. Ask them to clap when you read with good expression!",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Reading Comprehension",
        subtopic: "Active Reading: Asking Questions and Making Predictions",
        lessonContent: `
            <p>Today we'll become active readers by asking questions and making predictions before we even start reading!</p>
            <p><strong>Key Question:</strong> How can I become a detective before I read a story?</p>
            <p><strong>Introduction:</strong> Active readers don't just open a book and start reading. They look at clues first! By asking questions and making predictions, your brain gets ready to understand the story better.</p>
            <p><strong>Before Reading - Be a Book Detective:</strong></p>
            <ol>
                <li><strong>Look at the Title:</strong> What do you think the story might be about?</li>
                <li><strong>Look at the Cover Picture:</strong> What clues do you see? Who might the characters be?</li>
                <li><strong>Flip Through the Pages:</strong> Look at pictures, headings, and bold words</li>
                <li><strong>Ask Questions:</strong> What do you wonder about this book?</li>
                <li><strong>Make a Prediction:</strong> What do you think will happen?</li>
            </ol>
            <p><strong>Good Questions to Ask Before Reading:</strong></p>
            <ul>
                <li>Who might be the main character?</li>
                <li>Where and when does this story take place?</li>
                <li>What problem might the character face?</li>
                <li>How might the story end?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa- book-open"></i> Prediction Practice</div>
                <p>If a book is called "The Lost Kitten" and the cover shows a sad girl in a park, you can predict: "A girl loses her kitten in the park and tries to find it."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Question Starters</div>
                <p>Use these words to start questions: Who, What, Where, When, Why, How. "Why is the character wearing a costume?" "Where are they going?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Picture Clues</div>
                <p>Before reading, look at the pictures for 30 seconds. What do you notice? A storm cloud might mean trouble is coming. A smiling face might mean a happy story!</p>
            </div>
        `,
        taskInstructions: "Practice active reading strategies by asking questions and making predictions before reading.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cover Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the book your teacher shows you. Answer these questions before reading:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What is the title? _________________</div>
                        <div>• What do you see on the cover? _________________</div>
                        <div>• Who might the characters be? _________________</div>
                        <div>• Where might this story take place? _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Making Predictions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Based on the cover and title, write 2 predictions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Prediction 1: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">Prediction 2: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Asking Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 questions you have BEFORE reading the book:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Question 1: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">Question 2: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 10px;">Question 3: _________________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Picture Walk</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Flip through the book without reading the words. Look only at the pictures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What did you notice? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• What do you think will happen on page 5? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• What do you wonder about? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: After Reading Check</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Now read the book. Then answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Was one of your predictions correct? Which one? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• Were any of your questions answered? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>• What surprised you about the story? _________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Choose a book at home. Before reading, write down the title, look at the cover, and write 2 predictions and 2 questions. Then read the book and check if you were right!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek3);
    console.log("grade3-literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek3);
    console.log("grade3-literacy-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek3',
        metadata: grade3LiteracyWeek3.metadata,
        days: grade3LiteracyWeek3
    });
    console.log("grade3-literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek3 = grade3LiteracyWeek3;
console.log("grade3-literacy-week3.js loaded and registered successfully");