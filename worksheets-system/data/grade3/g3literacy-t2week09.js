// Grade 3 Literacy - Term 2 Week 9 Data
const grade3LiteracyWeek9 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 2,
        week: 9,
        title: "Extensive Reading",
        description: "Reading for pleasure, answering comprehension questions, and verbally reporting main messages from texts"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Extensive Reading",
        subtopic: "Introduction to Reading for Pleasure",
        lessonContent: `
            <p>Welcome to our exciting journey into the world of stories! Today we'll discover how reading can be a wonderful adventure.</p>
            <p><strong>Key Question:</strong> Why do people read books for fun?</p>
            <p><strong>Introduction:</strong> Extensive reading means reading a lot of different stories just because you want to! You can read picture books, short stories, comics, or even non-fiction books about your favorite topics.</p>
            <p><strong>Why Read for Pleasure?</strong></p>
            <ul>
                <li><strong>Fun and Relaxation:</strong> Reading can take you on amazing adventures</li>
                <li><strong>Learn New Words:</strong> The more you read, the bigger your vocabulary grows</li>
                <li><strong>Discover New Worlds:</strong> Visit places you've never been</li>
                <li><strong>Meet Interesting Characters:</strong> Make friends with characters from stories</li>
                <li><strong>Become a Better Reader:</strong> Practice makes perfect!</li>
            </ul>
            <p><strong>Types of Stories You Can Read:</strong></p>
            <ul>
                <li>Fairy tales and fables</li>
                <li>Animal stories</li>
                <li>Adventure stories</li>
                <li>Funny stories</li>
                <li>Poems and rhymes</li>
                <li>Non-fiction (true facts about animals, space, sports, etc.)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open"></i> Reading Is Like a Movie in Your Head</div>
                <p>When you read a story, your imagination creates pictures of the characters and places. It's like watching a movie that only YOU can see!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Find Your Favorite</div>
                <p>Some people love funny books. Others love mysteries. Try different types of stories to discover what YOU enjoy reading most!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> 20 Minutes a Day</h2>
                <p>Reading just 20 minutes every day can help you learn thousands of new words each year. That's like adding a whole new dictionary to your brain!</p>
            </div>
        `,
        taskInstructions: "Choose a short story to read for pleasure and complete a reading log entry.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Book Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose a short story, picture book, or chapter from a book you want to read for fun:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>Book Title:</strong> _________________________</p>
                        <p><strong>Author:</strong> _________________________</p>
                        <p><strong>Why I chose this book:</strong> _________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reading Time</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read your chosen story quietly for 15-20 minutes. As you read, think about:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Who are the characters?</div>
                        <div>• Where does the story take place?</div>
                        <div>• What happens in the story?</div>
                        <div>• How does the story make you feel?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reading Log Entry</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete your reading log for today:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Today I read:</strong> _________________________</div>
                        <div><strong>Pages read:</strong> _______ to _______</div>
                        <div><strong>My favorite part:</strong> _________________________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div><strong>One new word I learned:</strong> _________________________</div>
                        <div><strong>I rate this book:</strong> ☆ ☆ ☆ ☆ ☆ (circle your stars)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How did reading for fun make you feel today?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Read a story of your choice at home for 15 minutes. Ask a family member to read with you or tell you a story from their childhood.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Extensive Reading",
        subtopic: "Answering Comprehension Questions",
        lessonContent: `
            <p>Today we'll practice answering questions about the stories we read. This helps us understand and remember what we read!</p>
            <p><strong>Key Question:</strong> How can I show that I understood the story I read?</p>
            <p><strong>What Are Comprehension Questions?</strong></p>
            <p>Comprehension questions help you think about what happened in the story. They check if you understood the characters, events, and important ideas.</p>
            <p><strong>Different Types of Questions:</strong></p>
            <ul>
                <li><strong>Remembering Questions:</strong> "What was the character's name?"</li>
                <li><strong>Understanding Questions:</strong> "Why did the character do that?"</li>
                <li><strong>Thinking Questions:</strong> "What would you have done?"</li>
                <li><strong>Predicting Questions:</strong> "What do you think will happen next?"</li>
            </ul>
            <p><strong>Tips for Answering Questions:</strong></p>
            <ol>
                <li>Read the question carefully</li>
                <li>Look back in the story if you need help</li>
                <li>Answer in complete sentences</li>
                <li>Use details from the story</li>
                <li>Share your own thoughts and feelings too!</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Good Answer Example</div>
                <p><strong>Question:</strong> Where did the story take place?<br>
                <strong>Good Answer:</strong> "The story took place in a magical forest behind a little girl's house."</p>
                <p><em>The answer uses a complete sentence and includes details from the story!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Thinking Question Example</div>
                <p><strong>Question:</strong> How would you feel if you were the main character?<br>
                <strong>Answer:</strong> "If I were the main character, I would feel scared but also excited because finding a hidden door sounds like a big adventure!"</p>
                <p><em>The answer shares personal feelings AND connects to the story!</em></p>
            </div>
        `,
        taskInstructions: "Read a self-selected text and answer comprehension questions about it.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose and Read Your Text</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Select a short story or chapter to read. Write the title here:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Read your text quietly for 15 minutes. Think about what happens in the story.
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Answer the Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about the text you read:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> Who is the main character in your story?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> Where does the story happen?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c.</strong> What happens at the beginning of the story?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>d.</strong> What problem does the character face?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>e.</strong> How is the problem solved?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Thinking Deeper</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer these thinking questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> What was your favorite part of the story? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> If you could change one thing about the story, what would it be?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c.</strong> Would you recommend this story to a friend? Why or why not?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Check your answers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ I answered every question</div>
                        <div>☐ I used complete sentences</div>
                        <div>☐ I included details from the story</div>
                        <div>☐ I shared my own thoughts</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Read a short story at home. Ask a family member to ask you 3 questions about what you read. Write down the questions and your answers.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Extensive Reading",
        subtopic: "Verbally Reporting the Main Message",
        lessonContent: `
            <p>Today we'll practice telling a friend about the story we read. Sharing stories helps us remember them better and understand the most important ideas!</p>
            <p><strong>Key Question:</strong> How can I tell someone else what my story was about?</p>
            <p><strong>What Is a Main Message?</strong></p>
            <p>The main message (or main idea) is the most important thing the author wants you to understand from the story. It's not every single detail - it's the big idea!</p>
            <p><strong>How to Find the Main Message:</strong></p>
            <ul>
                <li>Think about what happened in the story</li>
                <li>Ask yourself: "What did the character learn?"</li>
                <li>Ask yourself: "What lesson does this story teach?"</li>
                <li>Ask yourself: "If I had to tell this story in one sentence, what would I say?"</li>
            </ul>
            <p><strong>How to Report to a Partner:</strong></p>
            <ol>
                <li>Say the title and author of your story</li>
                <li>Explain who the main characters are</li>
                <li>Tell what happens in the story (just the important parts!)</li>
                <li>Share the main message or lesson</li>
                <li>Say whether you liked it and why</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Good Verbal Report Example</div>
                <p><strong>"I read 'The Lion and the Mouse' by Aesop. The main characters are a lion and a tiny mouse. The lion catches the mouse but lets him go. Later, the mouse helps the lion by chewing through a net. The main message is that even small friends can do big things. I liked this story because it shows that everyone can help, no matter how small they are."</strong></p>
                <p><em>This report includes title, characters, what happened, the main message, and an opinion!</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> What to Do While Your Partner Talks</div>
                <p>When your friend shares their story, look at them, listen carefully, and think of one question to ask when they finish!</p>
            </div>
        `,
        taskInstructions: "Verbally report the main message of your text to a peer and listen to their report.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prepare Your Report</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use this planner to prepare what you will say about the story you read:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Title of my story:</strong> _________________________</div>
                        <div><strong>Author:</strong> _________________________</div>
                        <div><strong>Main characters:</strong> _________________________</div>
                        <div><strong>What happened (2-3 sentences):</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div><strong>The main message or lesson:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div><strong>I liked/did not like this story because:</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Share With a Partner</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find a partner. Take turns sharing your verbal reports:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Partner 1 Name:</strong> _________________________</div>
                        <div><strong>Partner 2 Name:</strong> _________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> While your partner is speaking, write down:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>What was their story about?</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>What was the main message?</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div><strong>One question I asked my partner:</strong> _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Feedback</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Your partner will give you feedback. Check the boxes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ My partner said the title and author</div>
                        <div>☐ My partner told me the main characters</div>
                        <div>☐ My partner explained what happened</div>
                        <div>☐ My partner shared the main message</div>
                        <div>☐ My partner said if they liked the story</div>
                        <div>☐ My partner spoke clearly</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How did it feel to share your story with a partner?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is one new story you want to read after hearing your partner's report?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Tell a family member about a story you read this week. Explain the main characters, what happened, and the lesson you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek9);
    console.log("grade3-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek9);
    console.log("grade3-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek9',
        metadata: grade3LiteracyWeek9.metadata,
        days: grade3LiteracyWeek9
    });
    console.log("grade3-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek9 = grade3LiteracyWeek9;
console.log("grade3-literacy-week9.js loaded and registered successfully");