// Grade 3 Literacy - Term 2 Week 7 Data
const grade3LiteracyWeek7 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 2,
        week: 7,
        title: "Independent Reading",
        description: "Selecting and reading fiction and non-fiction genres independently, and keeping a reading log of personal preferences"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Independent Reading",
        subtopic: "Introduction to Fiction Genres",
        lessonContent: `
            <p>Welcome to Independent Reading! Today we'll learn how to choose fiction books that we enjoy reading on our own.</p>
            <p><strong>Key Question:</strong> How do I choose a book that I will love reading?</p>
            <p><strong>What is Independent Reading?</strong></p>
            <p>Independent reading means choosing a book by yourself and reading it on your own. You get to pick what interests you!</p>
            <p><strong>Popular Fiction Genres (Types of Stories):</strong></p>
            <ul>
                <li><strong>Fantasy:</strong> Stories with magic, dragons, and imaginary worlds (Example: Harry Potter)</li>
                <li><strong>Adventure:</strong> Stories about exciting journeys and daring characters</li>
                <li><strong>Mystery:</strong> Stories where someone solves a puzzle or crime</li>
                <li><strong>Realistic Fiction:</strong> Stories that could happen in real life</li>
                <li><strong>Animal Stories:</strong> Stories where animals are the main characters</li>
                <li><strong>Humour:</strong> Stories that make you laugh</li>
            </ul>
            <p><strong>How to Choose a "Just Right" Book:</strong></p>
            <ol>
                <li>Look at the cover - does it interest you?</li>
                <li>Read the back cover or inside flap</li>
                <li>Try the "Five Finger Rule" - read one page. For every word you don't know, put up one finger. 0-1 fingers = too easy, 2-3 fingers = just right, 4-5 fingers = too hard</li>
                <li>Think about books you've enjoyed before</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Five Finger Rule</div>
                <p>Open any page of a book and start reading. Every time you see a word you don't know, put up one finger. If you have 2 or 3 fingers up by the end of the page, it's a "just right" book for you!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dragon"></i> Fantasy Example</div>
                <p>"Where the Wild Things Are" by Maurice Sendak is a fantasy story. Max travels to a land of wild creatures - that couldn't happen in real life!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Mystery Example</div>
                <p>"Nate the Great" books are mysteries where the young detective solves cases like finding a lost picture or a missing cake.</p>
            </div>
        `,
        taskInstructions: "Select a fiction book independently and begin reading.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Book Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Browse the classroom library or book corner. Choose ONE fiction book that interests you.
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>My chosen book:</strong> _________________________________</p>
                        <p><strong>Author:</strong> _________________________________</p>
                        <p><strong>Genre (circle one):</strong> Fantasy / Adventure / Mystery / Realistic Fiction / Animal Story / Humour</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: "Just Right" Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the Five Finger Rule on the first page of your book:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of words I didn't know: _________ fingers</div>
                        <div>This book is (circle one): Too Easy / Just Right / Too Hard</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Independent Reading Time</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read silently for 15-20 minutes. As you read, think about:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Who is the main character?</div>
                        <div>• Where does the story take place?</div>
                        <div>• What has happened so far?</div>
                    </div>
                    <div class="reading-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Notes about what I read:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Share Your Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why did you choose this book? What made you interested in it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Read your chosen fiction book for 10 minutes at home. Tell a family member one thing that happened in the story.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Independent Reading",
        subtopic: "Reading Non-Fiction Genres",
        lessonContent: `
            <p>Today we'll explore non-fiction books! These books teach us true facts about the real world.</p>
            <p><strong>Key Question:</strong> What can I learn from non-fiction books?</p>
            <p><strong>What is Non-Fiction?</strong></p>
            <p>Non-fiction books are about REAL people, places, animals, and events. Everything in a non-fiction book is true!</p>
            <p><strong>Popular Non-Fiction Genres:</strong></p>
            <ul>
                <li><strong>Animals & Nature:</strong> Books about dinosaurs, sharks, insects, plants, weather, and space</li>
                <li><strong>Biography:</strong> The true story of a real person's life</li>
                <li><strong>History:</strong> Books about things that happened in the past</li>
                <li><strong>How-To/Instructional:</strong> Books that teach you how to do something (cooking, drawing, crafts)</li>
                <li><strong>Reference:</strong> Encyclopedias, dictionaries, atlases, and fact books</li>
                <li><strong>Science:</strong> Books about how things work - the human body, machines, technology</li>
            </ul>
            <p><strong>Features of Non-Fiction Books:</strong></p>
            <ol>
                <li><strong>Table of Contents:</strong> Tells you what's in the book and where to find it</li>
                <li><strong>Photographs:</strong> Real pictures (not drawings)</li>
                <li><strong>Captions:</strong> Words under pictures that explain what you see</li>
                <li><strong>Glossary:</strong> A mini-dictionary at the back with important words</li>
                <li><strong>Index:</strong> Helps you find specific topics in the book</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dinosaur"></i> Non-Fiction Example: Animals</div>
                <p>"National Geographic Kids: Dinosaurs" teaches real facts about T-Rex, Triceratops, and other dinosaurs that actually lived millions of years ago!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-graduate"></i> Biography Example</div>
                <p>"Who Was Martin Luther King, Jr.?" tells the true story of a real person who helped change America. Everything in the book really happened.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Using the Index</div>
                <p>Want to find "volcanoes" in your book? Look in the index at the back. It will tell you exactly which pages have volcano information!</p>
            </div>
        `,
        taskInstructions: "Select and read a non-fiction book, identifying its special features.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Non-Fiction Book Selection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose ONE non-fiction book from the classroom library.
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><strong>My non-fiction book:</strong> _________________________________</p>
                        <p><strong>Topic (circle one):</strong> Animals / Biography / History / How-To / Science / Other: _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Non-Fiction Features Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look through your book and find these features. Check each one you find:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Table of Contents (page: ____)</div>
                        <div>☐ Photographs or real pictures</div>
                        <div>☐ Captions under pictures</div>
                        <div>☐ Glossary (page: ____)</div>
                        <div>☐ Index (page: ____)</div>
                        <div>☐ Bold or italic words</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Independent Reading Time</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read your non-fiction book silently for 15-20 minutes. Write down THREE new facts you learned:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;">
                        <p>1. _________________________________________________________________</p>
                        <p>2. _________________________________________________________________</p>
                        <p>3. _________________________________________________________________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Non-Fiction vs. Fiction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How is your non-fiction book different from the fiction book you read on Monday?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find one non-fiction book at home (or an article, magazine, or website with facts). Share one new fact with your class tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Independent Reading",
        subtopic: "Keeping a Simple Reading Log",
        lessonContent: `
            <p>Today we'll learn how to keep a reading log to track what we read and what we like!</p>
            <p><strong>Key Question:</strong> Why should I keep track of what I read?</p>
            <p><strong>What is a Reading Log?</strong></p>
            <p>A reading log is a record of the books you read. It helps you remember your favourites, see how much you've read, and discover what kinds of books you enjoy most.</p>
            <p><strong>What to Include in Your Reading Log:</strong></p>
            <ol>
                <li><strong>Date:</strong> When you read the book</li>
                <li><strong>Title:</strong> Name of the book</li>
                <li><strong>Author:</strong> Who wrote the book</li>
                <li><strong>Genre:</strong> Fiction or Non-Fiction (and what type)</li>
                <li><strong>Rating:</strong> How much you liked it (⭐ 1-5 stars)</li>
                <li><strong>What you liked (or didn't like):</strong> A short sentence about your opinion</li>
            </ol>
            <p><strong>Why Keep a Reading Log?</strong></p>
            <ul>
                <li>You can look back and remember books you loved</li>
                <li>You can recommend books to friends</li>
                <li>You can see your progress as a reader</li>
                <li>You learn what kinds of books are your favourites</li>
            </ul>
            <p><strong>How to Rate Books:</strong></p>
            <ul>
                <li>⭐⭐⭐⭐⭐ = I LOVED it! I want to read it again.</li>
                <li>⭐⭐⭐⭐ = I really liked it.</li>
                <li>⭐⭐⭐ = It was good.</li>
                <li>⭐⭐ = It was okay.</li>
                <li>⭐ = I didn't like it.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-open"></i> Sample Reading Log Entry</div>
                <p><strong>Date:</strong> May 15<br>
                <strong>Title:</strong> The Very Hungry Caterpillar<br>
                <strong>Author:</strong> Eric Carle<br>
                <strong>Genre:</strong> Fiction (Animal Story)<br>
                <strong>Rating:</strong> ⭐⭐⭐⭐⭐<br>
                <strong>What I liked:</strong> I loved the colourful pictures and learning how a caterpillar turns into a butterfly!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star-half-alt"></i> Why Rating Matters</div>
                <p>When you rate books, you start to notice patterns. Maybe you always give 5 stars to mysteries but only 3 stars to fantasy. That tells you what to look for next time!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Share Your Favourites</div>
                <p>Your reading log helps you remember great books to recommend to friends. "You liked Charlotte's Web? I have another animal story you might love!"</p>
            </div>
        `,
        taskInstructions: "Create a reading log entry for the books you read this week and reflect on your preferences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Monday's Fiction Book Entry</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete a reading log entry for the fiction book you read on Monday:
                    <div style="margin-left: 20px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><strong>Date:</strong> _________________</p>
                        <p><strong>Title:</strong> _________________________________</p>
                        <p><strong>Author:</strong> _________________________________</p>
                        <p><strong>Genre:</strong> _________________________________</p>
                        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (circle your stars)</p>
                        <p><strong>What I liked about this book:</strong></p>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Wednesday's Non-Fiction Book Entry</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete a reading log entry for the non-fiction book you read on Wednesday:
                    <div style="margin-left: 20px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><strong>Date:</strong> _________________</p>
                        <p><strong>Title:</strong> _________________________________</p>
                        <p><strong>Author:</strong> _________________________________</p>
                        <p><strong>Topic:</strong> _________________________________</p>
                        <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐ (circle your stars)</p>
                        <p><strong>Three facts I learned:</strong></p>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Preference Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare the two books you read this week. Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which book did you enjoy more? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;">Do you prefer fiction or non-fiction? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 10px;">What genre would you like to read next?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reading Goal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Set a reading goal for next week:
                    <div class="answer-space" style="height: 60px;"></div>
                    <p><em>Example goal: "I will read one fiction book and one non-fiction book next week." or "I will read for 15 minutes every night."</em></p>
                </div>
            </div>
        `,
        homework: "Read for 15 minutes this weekend from a book of your choice. Add one more entry to your reading log (on paper) with the title, author, genre, rating, and one sentence about what you liked.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek7);
    console.log("grade3-literacy-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek7);
    console.log("grade3-literacy-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek7',
        metadata: grade3LiteracyWeek7.metadata,
        days: grade3LiteracyWeek7
    });
    console.log("grade3-literacy-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek7 = grade3LiteracyWeek7;
console.log("grade3-literacy-week7.js loaded and registered successfully");