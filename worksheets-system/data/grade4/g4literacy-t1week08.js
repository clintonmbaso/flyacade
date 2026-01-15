// Grade 4 Literacy - Week 8 Data
const grade4LiteracyWeek8 = {
    metadata: {
        grade: 4,
        subject: "Literacy",
        term: 1,
        week: 8,
        title: "Shared Reading & Story Analysis",
        description: "Reading fiction and non-fiction fluently while analyzing key details"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Shared Reading & Story Analysis",
        subtopic: "Diving into Fiction - Identifying the 5W+H",
        lessonContent: `
            <p>Welcome to Week 8 of Literacy! This week, we'll become expert readers who can analyze both fiction and non-fiction texts. Today we focus on fiction stories.</p>
            <p><strong>Key Concept:</strong> Every good story answers six important questions: Who, What, Where, When, Why, and How. These are called the 5W+H questions.</p>
            <p><strong>Why Analyze Stories?</strong></p>
            <ul>
                <li>Helps us understand characters and their motivations</li>
                <li>Makes us better at predicting what might happen next</li>
                <li>Improves our comprehension and memory of stories</li>
                <li>Helps us become more critical readers</li>
            </ul>
            <p><strong>The 5W+H Questions:</strong></p>
            <ol>
                <li><strong>Who:</strong> Who are the main characters?</li>
                <li><strong>What:</strong> What is happening in the story?</li>
                <li><strong>Where:</strong> Where does the story take place?</li>
                <li><strong>When:</strong> When does the story happen?</li>
                <li><strong>Why:</strong> Why do characters act the way they do?</li>
                <li><strong>How:</strong> How do events unfold? How does the story end?</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #4A90E2;"></i> Fiction Example</div>
                <p>In "Charlotte's Web": <strong>Who</strong> is Wilbur? <strong>What</strong> problem does he face? <strong>Where</strong> does he live? <strong>When</strong> does the story happen? <strong>Why</strong> does Charlotte help him? <strong>How</strong> does she save him?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Reading Tip</div>
                <p>As you read, keep a 5W+H chart nearby. Jot down answers as you discover them in the story!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Pair Reading</div>
                <p>When reading in pairs, one partner can focus on Who/What/Where while the other focuses on When/Why/How. Then share your findings!</p>
            </div>
        `,
        taskInstructions: "Read the fiction story with your partner or small group. Work together to identify the 5W+H elements.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> With your partner, read the assigned fiction story aloud, taking turns paragraph by paragraph:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Complete the 5W+H chart for your story:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div><strong>Who:</strong> Main character(s) <div class="answer-space" style="height: 40px;"></div></div>
                    <div><strong>What:</strong> Main events <div class="answer-space" style="height: 40px;"></div></div>
                    <div><strong>Where:</strong> Setting <div class="answer-space" style="height: 40px;"></div></div>
                    <div><strong>When:</strong> Time period <div class="answer-space" style="height: 40px;"></div></div>
                    <div><strong>Why:</strong> Character motivations <div class="answer-space" style="height: 40px;"></div></div>
                    <div><strong>How:</strong> Problem resolution <div class="answer-space" style="height: 40px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Which 5W+H question was hardest to answer in your story? Why?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Share one discovery from your partner's perspective that you hadn't noticed:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Choose a short story or chapter from a book at home. Create a simple 5W+H chart for it.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Shared Reading & Story Analysis",
        subtopic: "Exploring Non-Fiction - Comparing with Fiction",
        lessonContent: `
            <p>Today we shift from fiction to non-fiction! Non-fiction texts give us facts and information about the real world.</p>
            <p><strong>Key Differences Between Fiction and Non-Fiction:</strong></p>
            <table style="width:100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #f0f0f0;">
                    <th style="border: 1px solid #ddd; padding: 8px;">Fiction</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Non-Fiction</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Made-up stories</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Facts and real information</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">Entertains and imagines</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Informs and teaches</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Characters, plot, setting</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Headings, facts, diagrams</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">"Once upon a time..."</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">"According to research..."</td>
                </tr>
            </table>
            <p><strong>Non-Fiction Text Features:</strong></p>
            <ul>
                <li><strong>Headings and Subheadings:</strong> Organize information</li>
                <li><strong>Captions:</strong> Explain pictures or diagrams</li>
                <li><strong>Glossary:</strong> Define important words</li>
                <li><strong>Index:</strong> Help find specific information</li>
                <li><strong>Bold Text:</strong> Highlight key terms</li>
            </ul>
            <p><strong>Reading Strategy:</strong> When reading non-fiction, ask: "What is the main idea?" "What evidence supports it?" "What did I learn?"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> Non-Fiction Example</div>
                <p>A book about volcanoes might have: <strong>Headings</strong> like "Types of Volcanoes", <strong>Diagrams</strong> showing eruption stages, <strong>Bold terms</strong> like "magma" and "lava", and a <strong>Glossary</strong> defining these terms.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Compare & Contrast</div>
                <p>A fiction story about a volcano might have characters fleeing an eruption. A non-fiction book would explain how eruptions actually happen.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Text Feature Hunt</div>
                <p>Good readers use non-fiction text features like a treasure map - they guide you to the most important information!</p>
            </div>
        `,
        taskInstructions: "Read the non-fiction text as a class. Identify its features and compare it to yesterday's fiction story.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Whole Class Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> As we read the non-fiction text together, note three important facts you learn:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fact 1: <div class="answer-space" style="height: 30px;"></div></div>
                        <div>Fact 2: <div class="answer-space" style="height: 30px;"></div></div>
                        <div>Fact 3: <div class="answer-space" style="height: 30px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Text Feature Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find these non-fiction text features in today's reading:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ Headings/Subheadings (list one): <div class="answer-space" style="height: 30px;"></div></div>
                        <div>✓ Bold or italicized words (list two): <div class="answer-space" style="height: 30px;"></div></div>
                        <div>✓ Diagrams, charts, or photos (describe one): <div class="answer-space" style="height: 30px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fiction vs. Non-Fiction Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare yesterday's fiction story with today's non-fiction text:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>One way they are similar: <div class="answer-space" style="height: 40px;"></div></div>
                        <div>Two ways they are different: <div class="answer-space" style="height: 40px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which do you find easier to understand - fiction or non-fiction? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> When would you choose to read fiction vs. non-fiction? Give one example for each:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find one fiction and one non-fiction text at home. Write down one text feature from each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Shared Reading & Story Analysis",
        subtopic: "The Fluent Reader - Reading Aloud with Understanding",
        lessonContent: `
            <p>Today we bring it all together! We'll practice reading both fiction and non-fiction fluently and with understanding.</p>
            <p><strong>What is Fluency?</strong></p>
            <ul>
                <li>Reading smoothly, not word-by-word</li>
                <li>Using expression that matches the text</li>
                <li>Reading at a conversational pace</li>
                <li>Pausing appropriately at punctuation</li>
            </ul>
            <p><strong>Fluency Tips for Different Text Types:</strong></p>
            <table style="width:100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background-color: #f0f0f0;">
                    <th style="border: 1px solid #ddd; padding: 8px;">Fiction Reading</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Non-Fiction Reading</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Use character voices</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Emphasize key terms</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">Build suspense with pace</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Pause after important facts</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Show emotion in dialogue</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Clarify technical terms</td>
                </tr>
            </table>
            <p><strong>Shared Reading Strategies:</strong></p>
            <ol>
                <li><strong>Echo Reading:</strong> Teacher reads a sentence, students echo it back</li>
                <li><strong>Choral Reading:</strong> Everyone reads together</li>
                <li><strong>Partner Reading:</strong> Take turns reading paragraphs</li>
                <li><strong>Readers Theater:</strong> Perform a script with expression</li>
            </ol>
            <p><strong>Remember:</strong> Fluent reading isn't just about speed - it's about understanding and enjoying what you read!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Expression Matters</div>
                <p>Read this sentence two ways: "I can't believe it!" (excited) vs. "I can't believe it." (disappointed). The same words, different meanings!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Punctuation Pauses</div>
                <p>Commas = brief pause. Periods = full stop. Question marks = rising tone. Exclamation marks = strong emotion!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-theater-masks"></i> Readers Theater Tip</div>
                <p>When performing, look up from your paper occasionally. Make eye contact with your "audience" (your classmates)!</p>
            </div>
        `,
        taskInstructions: "Practice reading aloud using different fluency strategies. Focus on both fiction and non-fiction texts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fiction Fluency Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With a partner, practice reading a fiction passage using expression:
                    <div class="answer-space" style="height: 100px;">
                        <p style="font-size: 0.9em; color: #666;">(Note: Which parts did you read with special expression? Why?)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Non-Fiction Fluency Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now read a non-fiction passage. Focus on clarity and pausing:
                    <div class="answer-space" style="height: 100px;">
                        <p style="font-size: 0.9em; color: #666;">(Note: How did your reading change for non-fiction?)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fluency Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rate your fluency (1 = needs work, 5 = excellent):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Smoothness (not choppy): <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div>/5</div>
                        <div>Expression: <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div>/5</div>
                        <div>Pacing (not too fast/slow): <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div>/5</div>
                        <div>Understanding what you read: <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div>/5</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Group Performance</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In small groups, prepare a short Readers Theater performance (2-3 minutes):
                    <div class="answer-space" style="height: 100px;">
                        <p style="font-size: 0.9em; color: #666;">(What text will you perform? How will you divide parts?)</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> After watching other groups, what's one fluency technique you saw that you'd like to try?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Read aloud to a family member for 10 minutes. Ask them to give you one compliment and one suggestion about your reading.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4LiteracyWeek8);
    console.log("grade4-literacy-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4LiteracyWeek8);
    console.log("grade4-literacy-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4LiteracyWeek8',
        metadata: grade4LiteracyWeek8.metadata,
        days: grade4LiteracyWeek8
    });
    console.log("grade4-literacy-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4LiteracyWeek8 = grade4LiteracyWeek8;
console.log("grade4-literacy-week8.js loaded and registered successfully");