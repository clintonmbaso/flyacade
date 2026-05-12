// Grade 3 English - Term 2 Week 5 Data
const grade3EnglishWeek5 = {
    metadata: {
        grade: 3,
        subject: "English",
        term: 2,
        week: 5,
        title: "Parts of Speech - Nouns",
        description: "Understanding countable and uncountable nouns, classification, usage in sentences, and pluralization rules"
    },
    
    monday: {
        subject: "English",
        topic: "Parts of Speech",
        subtopic: "Countable vs. Uncountable Nouns",
        lessonContent: `
            <p>Welcome to our study of nouns! Today we'll learn how to tell the difference between nouns we can count and nouns we cannot count.</p>
            <p><strong>Key Question:</strong> Can you hold it and count it one by one?</p>
            <p><strong>Introduction:</strong> Nouns are words that name people, places, things, or ideas. Some nouns we can count easily. Others we cannot!</p>
            <p><strong>Countable Nouns:</strong></p>
            <ul>
                <li>Things you can count one by one</li>
                <li>They have a singular and plural form</li>
                <li><strong>Examples:</strong> one pencil, two pencils / one phone, three phones / one apple, four apples</li>
            </ul>
            <p><strong>Uncountable Nouns:</strong></p>
            <ul>
                <li>Things you cannot count easily because they are too small or formless</li>
                <li>They usually do not have a plural form</li>
                <li><strong>Examples:</strong> water, salt, rice, sugar, milk, sand</li>
            </ul>
            <p><strong>Remember:</strong> You can say "one bottle of water" but not "one water"!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Countable in Action</div>
                <p>"I have three pencils in my case." (pencil → pencils)</p>
                <p>"She ate two oranges for snack." (orange → oranges)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Uncountable in Action</div>
                <p>"Please drink some water." (not "a water")</p>
                <p>"The recipe needs a cup of rice." (not "two rices")</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Easy Trick</div>
                <p>Ask yourself: Can I say "one," "two," "three" before this word? If yes, it's countable. If no, it's uncountable!</p>
            </div>
        `,
        taskInstructions: "Sort the list of ten words into countable and uncountable columns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these 10 words into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p><strong>Word List:</strong> book, milk, chair, sugar, dog, bread, apple, juice, car, salt</p>
                    </div>
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Countable Nouns</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Uncountable Nouns</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw two countable nouns and two uncountable nouns:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Countable Noun 1:</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Countable Noun 2:</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Uncountable Noun 1:</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Uncountable Noun 2:</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence with "a/an" (for countable) or "some" (for uncountable):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I need ___ apple for my snack.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Would you like ___ water?</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>She has ___ new book.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Please buy ___ bread from the store.</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 countable and 5 uncountable nouns in your kitchen. Write them in two lists.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Parts of Speech",
        subtopic: "Classifying Complex Nouns",
        lessonContent: `
            <p>Today we'll learn about tricky nouns - words that might confuse us at first!</p>
            <p><strong>Key Question:</strong> Why can we count onions but not sand?</p>
            <p><strong>Introduction:</strong> Some nouns are tricky because they seem countable but aren't - or they seem uncountable but can be counted in certain situations!</p>
            <p><strong>Tricky Uncountable Nouns:</strong></p>
            <ul>
                <li><strong>Hair:</strong> "She has long hair" (uncountable) BUT "I found three hairs on my shirt" (countable - individual strands)</li>
                <li><strong>Grass:</strong> "The grass is green" (uncountable) BUT "different grasses" (countable - types of grass)</li>
                <li><strong>Sand:</strong> "The sand is hot" (uncountable) - we don't say "three sands"</li>
            </ul>
            <p><strong>Why It Matters:</strong> Some things are made of tiny pieces that are hard to count individually. That's why we call them uncountable!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Sand vs. Onions</div>
                <p>You can count onions because they are separate, solid objects. You cannot count sand because it is made of millions of tiny grains - unless you count each grain!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Hair Trick</div>
                <p>"I have brown hair" = talking about all hair together (uncountable). "I see three gray hairs" = talking about individual strands (countable)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Grass Example</div>
                <p>"The grass needs water" = all the grass together. "There are many grasses in the meadow" = different types of grass plants.</p>
            </div>
        `,
        taskInstructions: "Create a 'Kitchen and Garden' list, categorizing items as countable or uncountable.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Kitchen and Garden Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the word list. Sort each word into the correct column:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <p><strong>Word List:</strong> carrot, salt, grass, onion, sugar, flower, rice, tomato, sand, pea</p>
                    </div>
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Countable Nouns</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Uncountable Nouns</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tricky Noun Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with the correct word form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My sister has long curly ________ (hair/hairs).</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>I found two gray ________ on my brush (hair/hairs).</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>The ________ is wet from rain (grass/grasses).</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                        <div>Different ________ grow in different climates (grass/grasses).</div>
                        <div class="answer-space" style="height: 30px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Why Can't We Count It?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Explain why we cannot count these nouns easily:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Sand: _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>Sugar: ________________________________</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>Rice: _________________________________</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 3 tricky uncountable nouns. Write a sentence for each one.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Parts of Speech",
        subtopic: "Nouns in Action",
        lessonContent: `
            <p>Today we'll practice using countable and uncountable nouns in complete sentences!</p>
            <p><strong>Key Question:</strong> How do we use countable and uncountable nouns correctly when we speak and write?</p>
            <p><strong>Introduction:</strong> Knowing the difference between countable and uncountable nouns helps us build better sentences and communicate clearly.</p>
            <p><strong>Rules to Remember:</strong></p>
            <ul>
                <li><strong>Countable nouns</strong> can be singular (a book) or plural (three books)</li>
                <li><strong>Uncountable nouns</strong> are usually singular (some water, NOT "waters")</li>
                <li>Use <strong>"a" or "an"</strong> with singular countable nouns</li>
                <li>Use <strong>"some"</strong> with uncountable nouns</li>
                <li>Use <strong>numbers</strong> with countable nouns (two apples)</li>
            </ul>
            <p><strong>Examples of Correct Usage:</strong></p>
            <ul>
                <li>"In my bag, I have three pencils, two notebooks, and some paper."</li>
                <li>"In the ocean, there is water, sand, and many fish."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-backpack"></i> In My Bag...</div>
                <p>"In my bag, I have a ruler, five crayons, some glue, and two erasers." (ruler, crayons, erasers = countable; glue = uncountable)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> In the Ocean...</div>
                <p>"In the ocean, there is salty water, sandy beaches, seaweed, and many colorful fish." (water, sand, seaweed = uncountable; fish = countable)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Check</div>
                <p>Wrong: "I need a water."<br>Correct: "I need some water."<br>Wrong: "She has two rices."<br>Correct: "She has two bowls of rice."</p>
            </div>
        `,
        taskInstructions: "Write sentences using both countable and uncountable nouns in context.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: In My Bag...</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write 4 sentences about what is in your bag. Use at least 2 countable nouns and 2 uncountable nouns:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: In the Ocean...</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write 4 sentences about what is in the ocean. Use at least 2 countable nouns and 2 uncountable nouns:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I need a water for my thirsty dog.</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>She bought two rices from the market.</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                        <div>Can I have an apple and a bread?</div>
                        <div class="answer-space" style="height: 40px; margin: 5px 0;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your lunch or snack. Then write 2 sentences describing it using countable and uncountable nouns:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences about your bedroom using countable nouns and 5 sentences about the sky using uncountable nouns.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Parts of Speech",
        subtopic: "Pluralization Rules - 'es' and 'ies'",
        lessonContent: `
            <p>Today we'll learn how to change countable nouns from singular to plural using 'es' and 'ies'!</p>
            <p><strong>Key Question:</strong> What happens to words that end with 's', 'ss', 'sh', 'ch', 'x', or 'y'?</p>
            <p><strong>Introduction:</strong> Most nouns become plural by adding 's' (cat → cats). But some nouns need special endings!</p>
            <p><strong>Rule 1: Add 'es'</strong></p>
            <ul>
                <li>If a word ends with <strong>s, ss, sh, ch, or x</strong>, add 'es'</li>
                <li><strong>Examples:</strong> bus → buses, glass → glasses, brush → brushes, lunch → lunches, box → boxes</li>
            </ul>
            <p><strong>Rule 2: Change 'y' to 'ies'</strong></p>
            <ul>
                <li>If a word ends with a <strong>consonant + y</strong>, change the 'y' to 'i' and add 'es'</li>
                <li><strong>Examples:</strong> baby → babies, city → cities, fly → flies, party → parties</li>
                <li><strong>Exception:</strong> If the word ends with <strong>vowel + y</strong> (ay, ey, oy, uy), just add 's': boy → boys, key → keys, toy → toys</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> 'es' Endings</div>
                <p>bus → buses (ends with 's')<br>box → boxes (ends with 'x')<br>church → churches (ends with 'ch')<br>dish → dishes (ends with 'sh')</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> 'ies' Endings</div>
                <p>baby → babies (consonant 'b' + y)<br>city → cities (consonant 't' + y)<br>lady → ladies (consonant 'd' + y)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Vowel + y = Just 's'</div>
                <p>boy → boys (vowel 'o' + y)<br>day → days (vowel 'a' + y)<br>donkey → donkeys (vowel 'e' + y)</p>
            </div>
        `,
        taskInstructions: "Practice transforming singular nouns to plural using 'es' and 'ies' rules.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Transformation List</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Change these words to plurals. Write the rule you used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Singular</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Plural</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Rule (es / ies / just s)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">fly</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">box</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">city</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">bus</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">baby</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">lunch</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">cherry</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">fox</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the plural form of each word:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>dish → ______</div>
                        <div>party → ______</div>
                        <div>kiss → ______</div>
                        <div>lady → ______</div>
                        <div>watch → ______</div>
                        <div>candy → ______</div>
                        <div>class → ______</div>
                        <div>story → ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write 3 sentences using plural nouns that end with 'es' or 'ies':
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Circle the Correct Plural</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the correct plural form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>We saw many (fox/foxes/foxs) in the forest.</div>
                        <div>The (baby/babys/babies) are sleeping.</div>
                        <div>I packed two (lunch/lunches/lunchs) for the trip.</div>
                        <div>Those (citys/cities/cityes) are very large.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 words ending with 'sh', 'ch', 'x', 's', or 'y'. Write their plural forms in sentences.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek5);
    console.log("grade3-english-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek5);
    console.log("grade3-english-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek5',
        metadata: grade3EnglishWeek5.metadata,
        days: grade3EnglishWeek5
    });
    console.log("grade3-english-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek5 = grade3EnglishWeek5;
console.log("grade3-english-week5.js loaded and registered successfully");