// Grade 6 English - Week 3 Data (Different Types of Nouns)
const grade6EnglishWeek3 = {
    metadata: {
        grade: 6,
        subject: "English",
        week: 3,
        title: "Different Types of Nouns",
        description: "Building foundational grammar skills by exploring proper/common, countable/uncountable, collective, and plural nouns through real-world examples and application."
    },
    
    monday: {
        subject: "English",
        topic: "Proper and Common Nouns",
        subtopic: "Distinguishing between specific names and general nouns",
        lessonContent: `
            <p>Welcome to our grammar lesson! Today we are learning about the difference between Proper Nouns and Common Nouns.</p>
            <p><strong>Objective:</strong> Students will distinguish between specific (Proper) and general (Common) nouns and understand why capitalization matters.</p>
            <p><strong>Key Concept:</strong> A <strong>common noun</strong> names a general person, place, thing, or idea. A <strong>proper noun</strong> names a specific one and always begins with a capital letter.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li><strong>Common:</strong> city, boy, river, book, month</li>
                <li><strong>Proper:</strong> London, Tom, Nile River, Harry Potter, January</li>
            </ul>
            <p><strong>Why Capitalization Matters:</strong> Proper nouns show respect and specificity. Writing "mary" instead of "Mary" can confuse the reader and shows a lack of attention to detail.</p>
            <p><strong>Quick Tip:</strong> If you are naming a specific person, place, brand, or title, it needs a capital letter!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #9C27B0;"></i> Categorization Example</div>
                <p><strong>Word List:</strong> ocean, Pacific Ocean, girl, Sarah, country, Canada, dog, Golden Retriever</p>
                <p><strong>Common:</strong> ocean, girl, country, dog</p>
                <p><strong>Proper:</strong> Pacific Ocean, Sarah, Canada, Golden Retriever</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Sentence Practice</div>
                <p>❌ "I went to the store with mary."</p>
                <p>✅ "I went to the store with Mary."</p>
                <p>❌ "We visited paris in june."</p>
                <p>✅ "We visited Paris in June."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> "Capital Detective" Game</div>
                <p>We will read a paragraph together. Every time you hear a Proper Noun, raise your hand and explain why it needs a capital!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to demonstrate your understanding of Proper and Common nouns.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Categorization:</strong> Label each noun as "Proper" or "Common".
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <div>a) book → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>b) London → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>c) salt → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>d) Mary → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>e) ocean → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>f) Eiffel Tower → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>g) teacher → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>h) February → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>i) restaurant → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>j) McDonald's → <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Fix the Errors:</strong> Rewrite each sentence with correct capitalization.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) my friend lives near the atlantic ocean. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>b) we studied the history of egypt in ms. johnson's class. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>c) have you read the book charlotte's web? → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Writing Application:</strong> Write one sentence that contains both a Proper Noun and a Common Noun. Circle the Proper Noun.
                <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Challenge:</strong> List two Proper Nouns for each Common Noun category.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>City: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Person: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                    <div>Restaurant: <span class="answer-space" style="width: 150px;"></span> and <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        `,
        homework: "Find 5 Proper Nouns in a book, magazine, or website. Write the full sentence they appear in and underline the Proper Noun.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Countable vs. Uncountable Nouns",
        subtopic: "Identifying nouns that can be counted and using correct quantifiers",
        lessonContent: `
            <p>Today we will learn the difference between Countable and Uncountable nouns.</p>
            <p><strong>Objective:</strong> Students will identify nouns that can be counted and those that cannot, and use them correctly in sentences.</p>
            <p><strong>Key Concept:</strong> <strong>Countable nouns</strong> are things we can count (e.g., three apples, five chairs). <strong>Uncountable nouns</strong> are substances, concepts, or masses that we cannot count individually (e.g., water, rice, information).</p>
            <p><strong>Quantifiers:</strong></p>
            <ul>
                <li><strong>Countable:</strong> a, an, many, few, several, two/three (numbers)</li>
                <li><strong>Uncountable:</strong> some, much, a little, a bit of, a piece of</li>
            </ul>
            <p><strong>Common Mistakes:</strong> We do not say "informations" or "rices." We say "some information" or "grains of rice."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tally" style="color: #FF5722;"></i> Real World Examples</div>
                <p>✅ "There are three books on the shelf." (Countable)</p>
                <p>✅ "There is some salt in the jar." (Uncountable)</p>
                <p>❌ "There are three waters on the table." (Incorrect)</p>
                <p>✅ "There are three bottles of water on the table." (Correct)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Tricky Nouns</div>
                <p>Some nouns can be both depending on context:</p>
                <p>"Chicken" (meat) = Uncountable: "I ate some chicken."</p>
                <p>"Chicken" (animal) = Countable: "There are three chickens in the yard."</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using countable and uncountable nouns.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Labeling:</strong> Mark each noun as (C) for Countable or (U) for Uncountable.
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <div>a) Book → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>b) Salt → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>c) Boy → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>d) Water → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>e) Apple → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>f) Rice → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>g) Chair → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>h) Sugar → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>i) Pencil → <span class="answer-space" style="width: 50px;"></span></div>
                    <div>j) Milk → <span class="answer-space" style="width: 50px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Fill in the Blank:</strong> Choose the correct quantifier.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) I need _______ (a few / a little) sugar for my coffee.</div>
                    <div>b) She adopted _______ (two / some) cats from the shelter.</div>
                    <div>c) Can I have _______ (a few / a little) pieces of advice?</div>
                    <div>d) We didn't bring _______ (many / much) luggage.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Rewrite the Sentence:</strong> Fix the error.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) "I bought three rices from the market." → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>b) "She gave me an informations." → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Sorting Challenge:</strong> List the nouns from Task 1 into the correct columns.
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                    <div style="background: #E8EAF6; padding: 10px;"><strong>Countable</strong><br><span class="answer-space" style="width: 100%; height: 60px;"></span></div>
                    <div style="background: #FFF3E0; padding: 10px;"><strong>Uncountable</strong><br><span class="answer-space" style="width: 100%; height: 60px;"></span></div>
                </div>
            </div>
        `,
        homework: "Walk around your kitchen and living room. Write down 5 countable nouns and 5 uncountable nouns you see.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Collective Nouns",
        subtopic: "Using specific words to describe groups",
        lessonContent: `
            <p>Today we will explore Collective Nouns—special words used to name a group of people, animals, or things.</p>
            <p><strong>Objective:</strong> Students will use collective nouns to describe groups with precision and creativity.</p>
            <p><strong>Key Concept:</strong> Even though a collective noun represents many members, it is usually treated as a singular noun (e.g., "The team is playing well.").</p>
            <p><strong>Common Collective Nouns:</strong></p>
            <ul>
                <li>Animals: a herd of cattle, a flock of birds, a pack of wolves, a school of fish</li>
                <li>People: a crowd of fans, a choir of singers, a team of players</li>
                <li>Things: a bunch of grapes, a set of tools, a fleet of ships</li>
            </ul>
            <p><strong>Fun Fact:</strong> English has very specific collective nouns! Did you know we say "a murder of crows" or "a pride of lions"?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #3F51B5;"></i> Matching Activity Example</div>
                <p><strong>Group:</strong> Bees → <strong>Collective Noun:</strong> Swarm</p>
                <p><strong>Group:</strong> Puppies → <strong>Collective Noun:</strong> Litter</p>
                <p><strong>Group:</strong> Flowers → <strong>Collective Noun:</strong> Bouquet</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Sentence Examples</div>
                <p>"A flock of seagulls followed the fishing boat."</p>
                <p>"My grandmother gave me a bunch of bananas."</p>
                <p>"The audience gave a standing ovation."</p>
            </div>
        `,
        taskInstructions: "Practice matching and using collective nouns in sentences.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Match the Collective Noun:</strong> Draw a line or write the correct pair.
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <div>1. Herd of _____</div>
                    <div><span class="answer-space" style="width: 120px;"></span> (Birds)</div>
                    <div>2. Flock of _____</div>
                    <div><span class="answer-space" style="width: 120px;"></span> (Cattle)</div>
                    <div>3. Pack of _____</div>
                    <div><span class="answer-space" style="width: 120px;"></span> (Fish)</div>
                    <div>4. School of _____</div>
                    <div><span class="answer-space" style="width: 120px;"></span> (Wolves)</div>
                    <div>5. Bouquet of _____</div>
                    <div><span class="answer-space" style="width: 120px;"></span> (Flowers)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Fill in the Blank:</strong> Use the correct collective noun from the word bank.
                <p style="font-style: italic;">Word Bank: fleet, choir, crowd, litter, swarm</p>
                <div style="margin-left: 20px;">
                    <div>a) A ___________ of bees flew out of the hive.</div>
                    <div>b) The ___________ of ships sailed into the harbor.</div>
                    <div>c) A ___________ of kittens was born last night.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Original Sentences:</strong> Write one sentence for each collective noun.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) A pack of: <span class="answer-space" style="width: 300px;"></span></div>
                    <div>b) A team of: <span class="answer-space" style="width: 300px;"></span></div>
                    <div>c) A pile of: <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Creative Challenge:</strong> Invent your own collective noun for "video games" or "smartphones" and use it in a sentence.
                <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
            </div>
        `,
        homework: "Find three collective nouns in a book or article. Write the sentence and underline the collective noun.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Regular and Irregular Plurals",
        subtopic: "Forming plurals correctly, including exceptions",
        lessonContent: `
            <p>Today we will learn how to change singular nouns to plural nouns—both the regular rules and the tricky irregular exceptions.</p>
            <p><strong>Objective:</strong> Students will form plurals for regular and irregular nouns with accuracy.</p>
            <p><strong>Regular Plurals:</strong> Add -s or -es (boy/boys, box/boxes, wish/wishes).</p>
            <p><strong>Irregular Plurals:</strong> These nouns change spelling completely or stay the same.</p>
            <ul>
                <li>man → men</li>
                <li>woman → women</li>
                <li>child → children</li>
                <li>tooth → teeth</li>
                <li>foot → feet</li>
                <li>mouse → mice</li>
                <li>goose → geese</li>
                <li>sheep → sheep</li>
                <li>fish → fish (or fishes for species)</li>
            </ul>
            <p><strong>Nouns ending in -f/-fe:</strong> Change to -ves (wolf/wolves, knife/knives).</p>
            <p><strong>Nouns ending in -y:</strong> Change to -ies if preceded by a consonant (baby/babies).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #E91E63;"></i> Transformation Example</div>
                <p>Regular: one cat → two cats</p>
                <p>Irregular: one mouse → three mice</p>
                <p>No change: one deer → five deer</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistakes</div>
                <p>❌ "I saw two gooses." → ✅ "I saw two geese."</p>
                <p>❌ "She has three childs." → ✅ "She has three children."</p>
            </div>
        `,
        taskInstructions: "Complete the plural transformation worksheet.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Regular Plurals:</strong> Write the plural form.
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <div>a) book → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>b) bus → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>c) baby → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>d) leaf → <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Irregular Plurals:</strong> Write the plural form.
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
                    <div>a) man → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>b) tooth → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>c) child → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>d) foot → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>e) mouse → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>f) woman → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>g) goose → <span class="answer-space" style="width: 100px;"></span></div>
                    <div>h) sheep → <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Sentence Rewrite:</strong> Rewrite the sentence using the plural form of the underlined noun.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a) The <u>child</u> is playing in the park. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>b) I saw a <u>goose</u> at the pond. → <span class="answer-space" style="width: 300px;"></span></div>
                    <div>c) The <u>woman</u> is a doctor. → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Error Correction:</strong> Fix the plural mistakes.
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"The mouses ran away from the cats." → <span class="answer-space" style="width: 300px;"></span></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using irregular plural nouns (e.g., teeth, mice, children).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Noun Hunt and Review",
        subtopic: "Identifying and categorizing multiple noun types in context",
        lessonContent: `
            <p>Congratulations! You have learned five different types of nouns this week. Today, we will put it all together.</p>
            <p><strong>Objective:</strong> Students will identify and use multiple noun types (Proper, Common, Countable, Uncountable, and Collective) within a single passage.</p>
            <p><strong>Key Concept:</strong> Good writers use a variety of nouns to make their writing specific, clear, and interesting.</p>
            <p><strong>Types to Identify:</strong></p>
            <ul>
                <li><strong>Proper:</strong> Specific names (e.g., Amazon River)</li>
                <li><strong>Common:</strong> General names (e.g., river)</li>
                <li><strong>Countable:</strong> Can be counted (e.g., three apples)</li>
                <li><strong>Uncountable:</strong> Cannot be counted (e.g., water)</li>
                <li><strong>Collective:</strong> Names a group (e.g., flock)</li>
            </ul>
            <p><strong>Assessment:</strong> You will read a short passage and hunt for one of each type!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-binoculars" style="color: #795548;"></i> Noun Hunt Example</div>
                <p><strong>Passage:</strong> "The family visited London last summer. They saw a flock of pigeons in Trafalgar Square and bought bottles of water."</p>
                <ul>
                    <li><strong>Proper:</strong> London, Trafalgar Square</li>
                    <li><strong>Common:</strong> family, pigeons, bottles</li>
                    <li><strong>Countable:</strong> bottles</li>
                    <li><strong>Uncountable:</strong> water</li>
                    <li><strong>Collective:</strong> flock</li>
                </ul>
            </div>
        `,
        taskInstructions: "Read the passage carefully. Find and categorize one noun for each type.",
        taskContent: `
            <div class="content-box">
                <p><strong>Reading Passage:</strong></p>
                <div style="background-color: #F9F9F9; padding: 15px; border-left: 5px solid #607D8B; font-style: italic;">
                    "Last Saturday, our class went on a field trip to the National Museum. A guide led us through the ancient Egypt exhibit. We saw a collection of artifacts, including golden masks and jars filled with honey. I bought a postcard of King Tut's mask. The bus ride home was noisy, but everyone agreed it was a fantastic day."
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">1</span> <strong>Noun Hunt:</strong> Find one example of each noun type from the passage.
                <div style="margin-left: 20px; margin-top: 15px;">
                    <div>a) Proper Noun: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>b) Common Noun: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>c) Countable Noun: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>d) Uncountable Noun: <span class="answer-space" style="width: 250px;"></span></div>
                    <div>e) Collective Noun: <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
            
            <div class="task-item">
                <span class="task-number">2</span> <strong>Justify Your Answer:</strong> Why is the noun you chose for "Uncountable" correct?
                <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
            </div>
            
            <div class="task-item">
                <span class="task-number">3</span> <strong>Create Your Own:</strong> Write 2 sentences about a real or imaginary trip. Include at least one Proper noun, one Collective noun, and one Uncountable noun. Label them.
                <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
            </div>
            
            <div class="task-item">
                <span class="task-number">4</span> <strong>Reflection:</strong> Which type of noun was the most difficult to find? Why?
                <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
            </div>
        `,
        homework: "No written homework. Review your notes for a short quiz on Monday!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek3);
    console.log("grade6-english-week3-nouns.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek3);
    console.log("grade6-english-week3-nouns.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek3',
        metadata: grade6EnglishWeek3.metadata,
        days: grade6EnglishWeek3
    });
    console.log("grade6-english-week3-nouns.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek3 = grade6EnglishWeek3;
console.log("grade6-english-week3-nouns.js loaded and registered successfully");