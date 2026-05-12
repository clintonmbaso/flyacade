// Grade 5 English - Term 2 Week 4 Data
const grade5EnglishWeek4 = {
    metadata: {
        grade: 5,
        subject: "English",
        term: 2,
        week: 4,
        title: "Nouns (Countable and Uncountable)",
        description: "Identifying countable and uncountable nouns, forming plurals, and using measurement words correctly"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Recognising Noun Types (Countable vs. Uncountable)",
        lessonContent: `
            <p>Welcome to our lesson on nouns! Today we'll learn how to tell the difference between countable and uncountable nouns.</p>
            <p><strong>Key Question:</strong> Can you count it, or can't you?</p>
            <p><strong>What is a Noun?</strong></p>
            <p>A noun is a word that names a person, place, thing, or idea.</p>
            <p><strong>Countable Nouns:</strong></p>
            <ul>
                <li>Things you can count (one, two, three...)</li>
                <li>They have both singular and plural forms</li>
                <li><strong>Examples:</strong> chair (chairs), desk (desks), apple (apples), book (books)</li>
                <li><strong>Question:</strong> "How many chairs?" → "Three chairs."</li>
            </ul>
            <p><strong>Uncountable Nouns:</strong></p>
            <ul>
                <li>Things you cannot count individually</li>
                <li>They usually do not have a plural form</li>
                <li><strong>Examples:</strong> milk, salt, sugar, water, rice, bread, oil</li>
                <li><strong>Question:</strong> "How much milk?" → "A glass of milk." (Not "three milks")</li>
            </ul>
            <p><strong>Helpful Hint:</strong> Ask yourself: "Can I say 'one ___ , two ___s'?" If yes, it's countable. If no, it's uncountable!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Countable Examples</div>
                <p>chair → chairs | desk → desks | mango → mangoes | bottle → bottles | pencil → pencils</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Uncountable Examples</div>
                <p>milk, water, salt, sugar, rice, bread, oil, flour, honey, butter, cheese, juice</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Test Yourself</div>
                <p>Can you count "salt"? No - you need "grains of salt" or "a spoonful of salt"</p>
                <p>Can you count "desk"? Yes - one desk, two desks, three desks!</p>
            </div>
        `,
        taskInstructions: "Sort the given nouns into countable and uncountable columns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these nouns into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Word Bank:</strong> chair, milk, desk, salt, apple, sugar, book, water, mango, rice, bottle, oil, pencil, bread, table</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                        <div style="border: 2px solid #4A90E2; border-radius: 10px; padding: 10px;">
                            <h4 style="text-align: center; color: #4A90E2;">✓ Countable Nouns</h4>
                            <div class="answer-space" style="height: 180px;"></div>
                        </div>
                        <div style="border: 2px solid #E25A4A; border-radius: 10px; padding: 10px;">
                            <h4 style="text-align: center; color: #E25A4A;">✗ Uncountable Nouns</h4>
                            <div class="answer-space" style="height: 180px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with "many" (for countable) or "much" (for uncountable):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How _________ chairs are in the classroom?</div>
                        <div>b) How _________ water is in the bottle?</div>
                        <div>c) How _________ books did you read?</div>
                        <div>d) How _________ sugar do you want in your tea?</div>
                        <div>e) How _________ desks are there?</div>
                        <div>f) How _________ rice is left in the bag?</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 countable nouns and 3 uncountable nouns that you see around your classroom or home:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 countable nouns and 5 uncountable nouns in your kitchen. Write them in two lists.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Singular to Plural (Countable Nouns)",
        lessonContent: `
            <p>Today we'll learn how to change countable nouns from singular (one) to plural (more than one)!</p>
            <p><strong>Key Question:</strong> How do we change "chair" to "chairs" and "mango" to "mangoes"?</p>
            <p><strong>Rules for Making Plurals:</strong></p>
            <ol>
                <li><strong>Most nouns:</strong> Add -s
                    <div style="margin-left: 20px;">chair → chairs | desk → desks | book → books | pencil → pencils</div>
                </li>
                <li><strong>Nouns ending in -s, -ss, -sh, -ch, -x, -z:</strong> Add -es
                    <div style="margin-left: 20px;">bus → buses | glass → glasses | dish → dishes | watch → watches | box → boxes</div>
                </li>
                <li><strong>Nouns ending in consonant + y:</strong> Change y to i and add -es
                    <div style="margin-left: 20px;">fly → flies | baby → babies | city → cities | lady → ladies</div>
                </li>
                <li><strong>Nouns ending in -f or -fe:</strong> Change f to v and add -es
                    <div style="margin-left: 20px;">leaf → leaves | knife → knives | wife → wives | wolf → wolves</div>
                </li>
                <li><strong>Nouns ending in -o:</strong> Sometimes add -es (mango → mangoes, potato → potatoes, tomato → tomatoes)
                    <div style="margin-left: 20px;">But some just add -s: photo → photos, piano → pianos</div>
                </li>
            </ol>
            <p><strong>Irregular Plurals (Special Rules!):</strong></p>
            <ul>
                <li>man → men | woman → women | child → children | tooth → teeth | foot → feet | mouse → mice</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Add -s (Most Common)</div>
                <p>apple → apples | car → cars | dog → dogs | house → houses | teacher → teachers</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-square"></i> Add -es (Ending in ch, sh, s, ss, x, z)</div>
                <p>lunch → lunches | brush → brushes | kiss → kisses | fox → foxes | buzz → buzzes</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Change y to i and add -es</div>
                <p>candy → candies | party → parties | story → stories | puppy → puppies</p>
            </div>
        `,
        taskInstructions: "Practice changing singular countable nouns to plural forms using the rules.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Change to Plural</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the plural form of each noun:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) chair → _________</div>
                        <div>b) mango → _________</div>
                        <div>c) desk → _________</div>
                        <div>d) watch → _________</div>
                        <div>e) baby → _________</div>
                        <div>f) leaf → _________</div>
                        <div>g) box → _________</div>
                        <div>h) dish → _________</div>
                        <div>i) knife → _________</div>
                        <div>j) tomato → _________</div>
                        <div>k) lady → _________</div>
                        <div>l) brush → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Irregular Plurals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the plural form of these irregular nouns:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) man → _________</div>
                        <div>b) woman → _________</div>
                        <div>c) child → _________</div>
                        <div>d) tooth → _________</div>
                        <div>e) foot → _________</div>
                        <div>f) mouse → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Rewrite each sentence, changing the singular noun to plural:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) The <u>child</u> is playing in the park.</div>
                        <div style="margin-left: 20px;">→ The ________ are playing in the park.</div>
                        <div style="margin-top: 10px;">b) I ate one <u>mango</u> for lunch.</div>
                        <div style="margin-left: 20px;">→ I ate three ________ for lunch.</div>
                        <div style="margin-top: 10px;">c) The <u>woman</u> is walking to school.</div>
                        <div style="margin-left: 20px;">→ The ________ are walking to school.</div>
                        <div style="margin-top: 10px;">d) Put the <u>book</u> on the shelf.</div>
                        <div style="margin-left: 20px;">→ Put the ________ on the shelf.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) I have three mango in the basket. → _________________</div>
                        <div style="margin-top: 5px;">b) The babys are sleeping. → _________________</div>
                        <div style="margin-top: 5px;">c) There are many leafs on the ground. → _________________</div>
                        <div style="margin-top: 5px;">d) She bought two boxs of chocolates. → _________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 10 sentences using plural nouns. Include at least 3 different plural rules (add -s, add -es, change y to i).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Using Uncountable Nouns Correctly with Measurement Words",
        lessonContent: `
            <p>Today we'll learn how to use uncountable nouns correctly by adding measurement words!</p>
            <p><strong>Key Question:</strong> How do we ask for "rice" or "milk" when we can't say "one rice" or "two milks"?</p>
            <p><strong>The Problem with Uncountable Nouns:</strong></p>
            <ul>
                <li>We cannot say "a rice" or "three milks"</li>
                <li>We need to use measurement words or containers</li>
                <li>These words help us "count" the uncountable!</li>
            </ul>
            <p><strong>Measurement Words for Uncountable Nouns:</strong></p>
            <ol>
                <li><strong>Liquids (water, milk, oil, juice, tea, coffee):</strong>
                    <div style="margin-left: 20px;">a glass of water | a bottle of oil | a cup of tea | a jug of juice</div>
                </li>
                <li><strong>Foods (rice, sugar, flour, salt, bread):</strong>
                    <div style="margin-left: 20px;">a bowl of rice | a bag of sugar | a pinch of salt | a slice of bread | a loaf of bread</div>
                </li>
                <li><strong>Small particles (sand, dust, salt, sugar):</strong>
                    <div style="margin-left: 20px;">a grain of sand | a spoonful of sugar | a pinch of salt</div>
                </li>
                <li><strong>Containers:</strong>
                    <div style="margin-left: 20px;">a can of soda | a box of cereal | a jar of honey | a tube of toothpaste</div>
                </li>
            </ol>
            <p><strong>Common Phrases for Shopping:</strong></p>
            <ul>
                <li>"I would like a <u>bag of rice</u>, please."</li>
                <li>"Can I have a <u>bottle of oil</u>?"</li>
                <li>"Please give me a <u>packet of salt</u>."</li>
                <li>"I need a <u>loaf of bread</u>."</li>
                <li>"How much is a <u>carton of milk</u>?"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-basket"></i> Market Day Phrases</div>
                <p>"I'd like a bag of rice, please."</p>
                <p>"Can I have a bottle of oil?"</p>
                <p>"Please give me a packet of salt."</p>
                <p>"I need a loaf of bread."</p>
                <p>"How much is a bar of soap?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-measure"></i> Common Measurements</div>
                <p>a glass of water | a cup of coffee | a bowl of soup | a slice of cake | a piece of paper | a tube of toothpaste</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> How Much vs. How Many</div>
                <p>Remember: "How <strong>much</strong>?" → for uncountable (How much rice?)</p>
                <p>"How <strong>many</strong>?" → for countable (How many bags of rice?)</p>
            </div>
        `,
        taskInstructions: "Practice using measurement words with uncountable nouns through a Market Day roleplay.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Phrases</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the correct measurement word:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) a _______ of water</div>
                        <div>b) a _______ of rice</div>
                        <div>c) a _______ of oil</div>
                        <div>d) a _______ of salt</div>
                        <div>e) a _______ of bread</div>
                        <div>f) a _______ of milk</div>
                        <div>g) a _______ of sugar</div>
                        <div>h) a _______ of honey</div>
                        <div>i) a _______ of soap</div>
                        <div>j) a _______ of juice</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Market Day Roleplay</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> With a partner, act out a conversation at the market. Customer: ask for items using measurement words. Shopkeeper: respond.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Available Items:</strong> rice, oil, salt, sugar, bread, milk, water, honey, flour, soap</p>
                        <p><strong>Example Conversation:</strong></p>
                        <div style="background: #f0f8ff; padding: 10px; border-radius: 5px;">
                            <p><strong>Customer:</strong> "Good morning! I would like a bag of rice, please."</p>
                            <p><strong>Shopkeeper:</strong> "Here you are. Anything else?"</p>
                            <p><strong>Customer:</strong> "Yes, I also need a bottle of oil and a packet of salt."</p>
                            <p><strong>Shopkeeper:</strong> "That will be 50 cedis."</p>
                        </div>
                        <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write Your Shopping List</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a shopping list of 5 uncountable items using correct measurement words:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Correct the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Can I have three rices? → _________________</div>
                        <div style="margin-top: 5px;">b) I need two milks from the store. → _________________</div>
                        <div style="margin-top: 5px;">c) Please put five sugars in my tea. → _________________</div>
                        <div style="margin-top: 5px;">d) She bought two breads. → _________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a dialogue between a customer and a shopkeeper. The customer must ask for at least 5 different uncountable items using measurement words.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5EnglishWeek4);
    console.log("grade5-english-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5EnglishWeek4);
    console.log("grade5-english-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5EnglishWeek4',
        metadata: grade5EnglishWeek4.metadata,
        days: grade5EnglishWeek4
    });
    console.log("grade5-english-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5EnglishWeek4 = grade5EnglishWeek4;
console.log("grade5-english-week4.js loaded and registered successfully");