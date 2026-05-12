// Grade 4 English - Term 2 Week 5 Data
const grade4EnglishWeek5 = {
    metadata: {
        grade: 4,
        subject: "English",
        term: 2,
        week: 5,
        title: "Countable and Uncountable Nouns",
        description: "Understanding the difference between nouns that can be counted and those that cannot"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Countable Nouns",
        lessonContent: `
            <p>Welcome to our grammar lesson! Today we'll learn about <strong>Countable Nouns</strong> - things we can count!</p>
            <p><strong>Key Question:</strong> What makes a noun "countable"?</p>
            <p><strong>Introduction:</strong> Countable nouns are things that we can count using numbers. We can use "a" or "an" in front of them, or add an "s" to make them plural.</p>
            <p><strong>Rules for Countable Nouns:</strong></p>
            <ol>
                <li>You can put a number in front: one cat, two cats, three cats</li>
                <li>You can use "a" or "an" for one item: a dog, an apple</li>
                <li>You can make them plural (usually add -s or -es): book → books, box → boxes</li>
                <li>You can ask "How many?" (How many pencils do you have?)</li>
            </ol>
            <p><strong>Examples of Countable Nouns:</strong></p>
            <ul>
                <li>People: boy, girl, teacher, doctor, friend</li>
                <li>Animals: cat, dog, bird, elephant, fish</li>
                <li>Objects: chair, table, book, pencil, car, ball</li>
                <li>Food items: apple, banana, cookie, egg, orange</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Counting Practice</div>
                <p>You can say: <strong>three apples, five chairs, one teacher, ten books, two dogs</strong></p>
                <p>You CANNOT say: three waters, five rices (these are uncountable - we'll learn about them tomorrow!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-a"></i> A vs. An</div>
                <p>Use "a" before words that start with a consonant sound: a cat, a dog, a book</p>
                <p>Use "an" before words that start with a vowel sound (a, e, i, o, u): an apple, an elephant, an orange</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> How to Check</div>
                <p>Ask yourself: "Can I count this with numbers?"</p>
                <p>✓ one pencil, two pencils → COUNTABLE</p>
                <p>✗ one milk, two milks → NOT COUNTABLE</p>
            </div>
        `,
        taskInstructions: "Draw and label five countable items, showing how many of each.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw and Label Countable Items</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw five countable items. For each item, write the number and name clearly:
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: A or An?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "a" or "an" before each word:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>___ cat</div>
                        <div>___ elephant</div>
                        <div>___ book</div>
                        <div>___ orange</div>
                        <div>___ teacher</div>
                        <div>___ apple</div>
                        <div>___ dog</div>
                        <div>___ umbrella</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Make It Plural</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the plural form of each countable noun (add -s or -es):
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>one cat → two _______</div>
                        <div>one box → three _______</div>
                        <div>one bus → four _______</div>
                        <div>one flower → five _______</div>
                        <div>one dish → six _______</div>
                        <div>one friend → seven _______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each sentence with a countable noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I have three ________ in my pencil case.</div>
                        <div>She ate ________ apple for a snack.</div>
                        <div>There are five ________ sitting on the fence.</div>
                        <div>He bought ________ new book from the store.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your bedroom. Write down 10 countable nouns you can see (e.g., 1 bed, 2 pillows, 3 toys).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Uncountable Nouns",
        lessonContent: `
            <p>Today we'll learn about <strong>Uncountable Nouns</strong> - things we cannot count individually!</p>
            <p><strong>Key Question:</strong> Why do we say "some water" instead of "a water"?</p>
            <p><strong>Introduction:</strong> Uncountable nouns (also called mass nouns) are things we cannot count with numbers. We think of them as a whole or a mass, not as separate items.</p>
            <p><strong>Rules for Uncountable Nouns:</strong></p>
            <ol>
                <li>You cannot put a number in front (NOT: one water, two rices)</li>
                <li>You cannot use "a" or "an" (NOT: a milk, an oil)</li>
                <li>They do NOT have a plural form (no -s at the end)</li>
                <li>You can ask "How much?" (How much water do you need?)</li>
                <li>Use words like: some, any, much, a little, a lot of</li>
            </ol>
            <p><strong>Common Uncountable Nouns:</strong></p>
            <ul>
                <li><strong>Liquids:</strong> water, milk, juice, oil, tea, coffee, soup</li>
                <li><strong>Particles/Grains:</strong> rice, sugar, salt, sand, flour, pepper</li>
                <li><strong>Materials:</strong> wood, paper, glass, metal, plastic, cotton</li>
                <li><strong>Abstract Ideas:</strong> information, advice, homework, music, love, happiness</li>
                <li><strong>Food groups:</strong> bread, cheese, meat, chicken, fish, fruit</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Liquids are Uncountable</div>
                <p>We say: <strong>some water, a glass of water, a bottle of water</strong></p>
                <p>We do NOT say: a water, two waters ✗</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grain"></i> Grains and Particles</div>
                <p>We say: <strong>some rice, a bowl of rice, a little sugar</strong></p>
                <p>We do NOT say: a rice, three rices ✗</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> How Much vs. How Many</div>
                <p>Use "How much?" for uncountable nouns: How much water is in the cup?</p>
                <p>Use "How many?" for countable nouns: How many apples are in the bowl?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Measuring Uncountable Nouns</div>
                <p>To make uncountable nouns countable, add a measuring word:</p>
                <p>water → a glass of water / a bottle of water</p>
                <p>rice → a bowl of rice / a cup of rice</p>
                <p>bread → a slice of bread / a loaf of bread</p>
            </div>
        `,
        taskInstructions: "Identify uncountable nouns and practice using 'some' correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Discussion and Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which of these CANNOT be counted individually? Circle the uncountable nouns:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                        <div>water</div>
                        <div>apple</div>
                        <div>sand</div>
                        <div>book</div>
                        <div>oil</div>
                        <div>cat</div>
                        <div>rice</div>
                        <div>milk</div>
                        <div>sugar</div>
                        <div>table</div>
                        <div>bread</div>
                        <div>salt</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Using "Some"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with "some" + an uncountable noun from the box:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>(water, rice, sugar, bread, milk, cheese)</em></p>
                        <div>I would like ________ in my tea.</div>
                        <div>Please buy ________ from the bakery.</div>
                        <div>She drinks ________ every morning.</div>
                        <div>We need to cook ________ for dinner.</div>
                        <div>He put ________ on his sandwich.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Correct or Incorrect?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write "Correct" or "Incorrect" for each sentence. Fix the incorrect ones:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Can I have a water please? _________</div>
                        <div>b. There is some sand in my shoe. _________</div>
                        <div>c. I ate three rices for lunch. _________</div>
                        <div>d. She bought some new furniture. _________</div>
                        <div>e. He gave me an advice. _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: How Much or How Many?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in "How much" or "How many":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>________ apples are in the basket?</div>
                        <div>________ sugar do you need?</div>
                        <div>________ water is in the bottle?</div>
                        <div>________ books did you read?</div>
                        <div>________ rice should I cook?</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen. List 5 uncountable nouns (like water, rice, salt) and write a sentence using 'some' for each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Using Countable and Uncountable Nouns",
        lessonContent: `
            <p>Today we'll put everything together! We'll learn how to use both countable and uncountable nouns correctly in sentences.</p>
            <p><strong>Key Question:</strong> How do we talk about countable and uncountable nouns in real sentences?</p>
            <p><strong>Review: Countable vs. Uncountable</strong></p>
            <ul>
                <li><strong>Countable:</strong> Can use numbers, a/an, have plural forms. Ask "How many?"</li>
                <li><strong>Uncountable:</strong> Cannot use numbers, use "some/any/much," no plural. Ask "How much?"</li>
            </ul>
            <p><strong>Measuring Uncountable Nouns (Making them "Countable"):</strong></p>
            <p>When we need to count an uncountable noun, we add a measuring word:</p>
            <ul>
                <li>a bottle of water, two bottles of water</li>
                <li>a cup of tea, three cups of tea</li>
                <li>a slice of bread, four slices of bread</li>
                <li>a bowl of rice, two bowls of rice</li>
                <li>a piece of paper, five pieces of paper</li>
                <li>a glass of milk, a carton of milk</li>
            </ul>
            <p><strong>Common Quantifiers (Words that tell how much/many):</strong></p>
            <ul>
                <li><strong>For Countable Nouns:</strong> many, a few, several, a number of, some, any</li>
                <li><strong>For Uncountable Nouns:</strong> much, a little, a bit of, a great deal of, some, any</li>
                <li><strong>For Both:</strong> some, any, a lot of, lots of, plenty of, enough, no</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Grocery List Practice</div>
                <p>✓ I need <strong>three apples</strong> (countable) and <strong>some rice</strong> (uncountable).</p>
                <p>✓ Please buy <strong>a bottle of milk</strong> and <strong>five bananas</strong>.</p>
                <p>✗ Please buy a milk and five rices. (Incorrect!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sentence"></i> Sentence Building</div>
                <p><strong>Countable:</strong> She has <strong>many books</strong> on her shelf.</p>
                <p><strong>Uncountable:</strong> She has <strong>a lot of homework</strong> to do.</p>
                <p><strong>Both:</strong> There is <strong>some water</strong> and <strong>some oranges</strong> in the fridge.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Common Mistakes</div>
                <p>❌ I need an information → ✅ I need some information</p>
                <p>❌ She has many moneys → ✅ She has a lot of money</p>
                <p>❌ Can I have a bread? → ✅ Can I have a slice of bread?</p>
            </div>
        `,
        taskInstructions: "Construct sentences using countable and uncountable nouns correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Correct Quantifier</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the correct word to complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How (many / much) eggs do we need?</div>
                        <div>There isn't (many / much) sugar left.</div>
                        <div>She has (a few / a little) friends at her new school.</div>
                        <div>I need (a few / a little) help with my project.</div>
                        <div>He bought (many / much) oranges at the market.</div>
                        <div>We don't have (many / much) time before the movie starts.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Add a Measuring Word</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add the correct measuring word to make these uncountable nouns countable:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>_______ of water</div>
                        <div>_______ of bread</div>
                        <div>_______ of rice</div>
                        <div>_______ of paper</div>
                        <div>_______ of milk</div>
                        <div>_______ of juice</div>
                    </div>
                    <p><em>Word bank: glass, bottle, slice, bowl, piece, cup, carton</em></p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Construction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write sentences using these pairs of nouns (one countable, one uncountable):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: <em>apples + water</em> → "I bought three apples and a bottle of water."</div>
                        <div style="margin-top: 10px;">a. books + information: _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. bananas + milk: _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. chairs + wood: _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. cookies + sugar: _________________________</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete each sentence with a correct countable or uncountable noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I would like three ________ and a glass of ________.</div>
                        <div>She has many ________ but very little ________.</div>
                        <div>Please buy a loaf of ________ and some ________ for the soup.</div>
                        <div>How many ________ are in your bag? How much ________ do you need?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Error Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Each sentence has ONE mistake. Find it and rewrite the sentence correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Can I have a toast for breakfast? ________________________________</div>
                        <div>b. She bought many furnitures for her new house. ________________________________</div>
                        <div>c. How much apples are in the bowl? ________________________________</div>
                        <div>d. I need an advice about my homework. ________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about what you ate today. Use at least 2 countable nouns and 2 uncountable nouns in your sentences.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4EnglishWeek5);
    console.log("grade4-english-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4EnglishWeek5);
    console.log("grade4-english-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4EnglishWeek5',
        metadata: grade4EnglishWeek5.metadata,
        days: grade4EnglishWeek5
    });
    console.log("grade4-english-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4EnglishWeek5 = grade4EnglishWeek5;
console.log("grade4-english-week5.js loaded and registered successfully");