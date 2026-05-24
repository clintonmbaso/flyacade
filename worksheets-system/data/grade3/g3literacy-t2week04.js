// Grade 3 Literacy - Term 2 Week 4 Data
const grade3LiteracyWeek4 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 2,
        week: 4,
        title: "Shared Reading & Comprehension",
        description: "Peer-reading sessions using fiction and non-fiction texts, and re-telling stories to enhance understanding"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Shared Reading",
        subtopic: "Peer-reading Sessions Using Fiction Texts",
        lessonContent: `
            <p>Welcome to our shared reading session! Today we'll practice reading together with partners using fun fiction stories.</p>
            <p><strong>Key Question:</strong> How does reading with a partner help us become better readers?</p>
            <p><strong>Introduction:</strong> Shared reading is when two people read together. One person reads while the other listens, then you switch! This helps us learn from each other and build confidence.</p>
            <p><strong>What is Fiction?</strong></p>
            <ul>
                <li>Fiction stories are made up by the author's imagination</li>
                <li>They have characters, a setting, and a plot (beginning, middle, end)</li>
                <li>Examples: fairy tales, animal stories, adventure books, fantasy</li>
            </ul>
            <p><strong>Peer Reading Steps:</strong></p>
            <ol>
                <li>Sit side by side so both can see the book</li>
                <li>Reader 1 reads one page aloud slowly and clearly</li>
                <li>Listener follows along with their finger</li>
                <li>Listener gives one compliment ("You read that word well!")</li>
                <li>Switch roles and repeat</li>
            </ol>
            <p><strong>Good Reader Reminders:</strong></p>
            <ul>
                <li>Point to each word as you read</li>
                <li>Sound out tricky words</li>
                <li>Read with expression (make your voice go up and down)</li>
                <li>Ask your partner if you don't know a word</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Partner Reading in Action</div>
                <p>Maria reads, "The little red fox ran quickly through the forest." Jamal follows along with his finger. When Maria finishes, Jamal says, "I liked how you read 'quickly' with a fast voice!" Then they switch.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Fiction Example</div>
                <p>"Once upon a time, in a land far away, there lived a brave knight named Leo. He had a shiny sword and a loyal horse named Star." This is fiction because the knight and horse are made up!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compliment"></i> Giving Feedback</div>
                <p>Instead of saying "You missed a word," try: "That was great! Let's look at that tricky word together." Being kind helps your partner feel confident.</p>
            </div>
        `,
        taskInstructions: "Partner read a fiction story, then answer questions about what you read.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Partner Reading Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your partner, read the fiction story provided by your teacher.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📖 <strong>Before Reading:</strong> Predict what the story might be about by looking at the title and pictures.</div>
                        <div>📖 <strong>During Reading:</strong> Take turns reading one page each. Point to each word.</div>
                        <div>📖 <strong>After Reading:</strong> Give your partner a compliment about their reading.</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>What did your partner do well? Write one compliment:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Story Comprehension</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions about the fiction story you read:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Who was the main character? _________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">Where did the story take place (setting)? _________________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">What happened at the beginning of the story? _________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">What was your favorite part? Why? _________________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How did it feel to read with a partner? Was it easier or harder than reading alone?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Read a fiction book at home with a family member. Ask them to read one page, then you read the next page. Draw a picture of your favorite character.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Shared Reading",
        subtopic: "Peer-reading Sessions Using Non-fiction Texts",
        lessonContent: `
            <p>Today we'll practice shared reading with non-fiction texts! These are books that teach us real facts about the world.</p>
            <p><strong>Key Question:</strong> How is reading non-fiction different from reading fiction?</p>
            <p><strong>What is Non-Fiction?</strong></p>
            <ul>
                <li>Non-fiction texts are TRUE and factual</li>
                <li>They teach us information about real people, places, animals, or events</li>
                <li>Examples: science books, biographies, history books, animal encyclopedias</li>
            </ul>
            <p><strong>Special Features of Non-Fiction:</strong></p>
            <ul>
                <li><strong>Headings:</strong> Big titles that tell what each section is about</li>
                <li><strong>Photographs:</strong> Real pictures (not drawings)</li>
                <li><strong>Captions:</strong> Words under pictures that explain what you see</li>
                <li><strong>Glossary:</strong> A mini-dictionary with new words and definitions</li>
                <li><strong>Table of Contents:</strong> A list of topics and page numbers</li>
            </ul>
            <p><strong>Partner Reading Steps for Non-Fiction:</strong></p>
            <ol>
                <li>First, look at the table of contents. What will you learn about?</li>
                <li>Take turns reading one heading and the sentences under it</li>
                <li>Look at the photographs and read the captions together</li>
                <li>After each section, ask: "What did we learn?"</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Non-Fiction Example</div>
                <p>"A dog's nose has 300 million scent receptors. A human nose only has 6 million." This is non-fiction because it's a TRUE fact about dogs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heading"></i> Using Headings</div>
                <p>If a heading says "What Do Pandas Eat?" you know the next sentences will tell you about panda food. This helps you predict and understand better!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image"></i> Captions Matter</div>
                <p>Under a photo of a volcano, a caption might say "Mount St. Helens erupting in 1980." The caption tells you exactly what, when, and where!</p>
            </div>
        `,
        taskInstructions: "Partner read a non-fiction text and identify its special features.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Non-Fiction Feature Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With your partner, look through your non-fiction text. Find and check off each feature:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Table of contents (page ___)</div>
                        <div>☐ Heading (page ___)</div>
                        <div>☐ Photograph (page ___)</div>
                        <div>☐ Caption (page ___)</div>
                        <div>☐ Glossary (page ___)</div>
                    </div>
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Write one new fact you learned from the caption:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Partner Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read the non-fiction text with your partner using these steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>📖 Reader 1 reads the heading and first paragraph</div>
                        <div>📖 Reader 2 reads the next heading and paragraph</div>
                        <div>📖 Stop after 2 sections each. Share one fact you learned with your partner.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fiction vs. Non-Fiction Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the chart comparing what you read on Monday (fiction) to today's non-fiction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Fiction</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Non-Fiction</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">What I read about: _________________________________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">What I read about: _________________________________</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">Was it real or made up? _________________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">Was it real or made up? _________________</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">Did it have photographs? _________________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;">Did it have photographs? _________________</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which type of book do you like better: fiction or non-fiction? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a non-fiction book or article at home (cookbook, animal book, news article for kids). Write down one new fact you learned.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Comprehension Skills",
        subtopic: "Re-telling Stories or Texts to Enhance Understanding",
        lessonContent: `
            <p>Today we'll learn how to re-tell stories and texts! Re-telling helps us remember what we read and understand it better.</p>
            <p><strong>Key Question:</strong> Why does re-telling a story help us become better readers?</p>
            <p><strong>What is Re-telling?</strong></p>
            <ul>
                <li>Re-telling means explaining a story or text in your own words</li>
                <li>You don't memorize the words - you remember the important parts</li>
                <li>Re-telling shows that you truly understood what you read</li>
            </ul>
            <p><strong>The 5 Parts of a Good Re-telling (Fiction):</strong></p>
            <ol>
                <li><strong>Characters:</strong> Who was in the story?</li>
                <li><strong>Setting:</strong> Where and when did the story happen?</li>
                <li><strong>Beginning:</strong> What happened first? What was the problem?</li>
                <li><strong>Middle:</strong> What happened next? How did the characters try to solve the problem?</li>
                <li><strong>End:</strong> How did the story end? Was the problem solved?</li>
            </ol>
            <p><strong>How to Re-tell Non-Fiction:</strong></p>
            <ul>
                <li>What was the main topic?</li>
                <li>What are 3 important facts you learned?</li>
                <li>Is there anything surprising or interesting?</li>
            </ul>
            <p><strong>Tips for Great Re-telling:</strong></p>
            <ul>
                <li>Use sequencing words: First, Next, Then, After that, Finally</li>
                <li>Use character names, not just "he" or "she"</li>
                <li>Include important details, but not EVERY little thing</li>
                <li>Practice by telling a family member or stuffed animal</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Fiction Re-telling Example</div>
                <p>"<strong>First,</strong> a little girl named Goldilocks found a house in the forest. <strong>Next,</strong> she went inside and ate the bears' porridge. <strong>Then,</strong> she sat in their chairs and broke one. <strong>After that,</strong> she fell asleep in Baby Bear's bed. <strong>Finally,</strong> the bears came home and Goldilocks ran away."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Non-Fiction Re-telling Example</div>
                <p>"This book was about dolphins. I learned that dolphins are mammals, not fish. They use echolocation to find food. They live in groups called pods. The most interesting fact is that dolphins sleep with one eye open!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Using Your Fingers</div>
                <p>Hold up one finger for each part: Thumb = characters, Pointer = setting, Middle = beginning, Ring = middle, Pinky = end. This helps you remember all 5 parts!</p>
            </div>
        `,
        taskInstructions: "Practice re-telling a story and a non-fiction text to a partner using the 5-part method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Re-tell a Fiction Story</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose a fiction story you read this week. Re-tell it to your partner using the 5 parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Characters:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;"><strong>Setting:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;"><strong>Beginning (problem):</strong></div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;"><strong>Middle (what happened):</strong></div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;"><strong>End (solution):</strong></div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Re-tell a Non-Fiction Text</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose a non-fiction text you read this week. Re-tell what you learned to your partner:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Main topic:</strong> <span style="border-bottom: 1px dotted #000; width: 200px; display: inline-block;"></span></div>
                        <div style="margin-top: 10px;"><strong>Fact #1:</strong></div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 10px;"><strong>Fact #2:</strong></div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 10px;"><strong>Fact #3:</strong></div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 10px;"><strong>Most interesting fact:</strong></div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Feedback</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> After your partner re-tells a story, give them feedback:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>One thing my partner did well: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div style="margin-top: 10px;">One detail they could add next time: _________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Independent Re-telling Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Without looking at the book, write or draw a re-telling of your favorite story:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How does re-telling a story help you remember it better?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short story or book at home. Re-tell it to a family member using the 5 parts (characters, setting, beginning, middle, end). Ask them to rate your re-telling from 1-5 stars!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek4);
    console.log("grade3-literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek4);
    console.log("grade3-literacy-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek4',
        metadata: grade3LiteracyWeek4.metadata,
        days: grade3LiteracyWeek4
    });
    console.log("grade3-literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek4 = grade3LiteracyWeek4;
console.log("grade3-literacy-week4.js loaded and registered successfully");