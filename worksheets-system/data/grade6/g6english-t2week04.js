// Grade 6 English - Term 2 Week 4 Data
const grade6EnglishWeek4 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 2,
        week: 4,
        title: "Nouns: Countable, Uncountable & Irregular",
        description: "Identifying countable vs uncountable nouns, using quantifiers, mastering irregular plurals, and applying nouns in recipe writing"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Identifying Countable vs Uncountable Nouns",
        lessonContent: `
            <p>Welcome to our week on nouns! Today we'll learn how to tell the difference between countable and uncountable nouns.</p>
            <p><strong>Key Question:</strong> Can you count it, or can't you?</p>
            <p><strong>Introduction:</strong> Nouns are words that name people, places, things, or ideas. But did you know that nouns can be sorted into two special groups? Countable nouns are things we can count. Uncountable nouns are things we cannot count individually.</p>
            <p><strong>Countable Nouns:</strong></p>
            <ul>
                <li>Things you can put a number in front of (one book, two pencils, three chairs)</li>
                <li>Have both singular and plural forms (desk → desks, student → students)</li>
                <li>Examples: apple, bottle, cat, day, idea, teacher</li>
            </ul>
            <p><strong>Uncountable Nouns:</strong></p>
            <ul>
                <li>Things you cannot count individually (water, rice, air)</li>
                <li>Usually have no plural form (you don't say "waters" for drinking water)</li>
                <li>Examples: milk, sugar, sand, information, homework, weather</li>
            </ul>
            <p><strong>Classroom Hunt:</strong> Look around your classroom. How many countable nouns can you spot? What uncountable nouns are present (even if you can't see them, like air or noise)?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Countable in Action</div>
                <p>"I have three pencils in my pencil case." - Pencil is countable because you can say one pencil, two pencils, three pencils.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Uncountable in Action</div>
                <p>"Please drink some water." - Water is uncountable. You wouldn't say "one water, two waters" (unless you mean bottles of water!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Tricky Case</div>
                <p>Some nouns can be both! "I have a hair on my shirt." (countable - one strand) vs. "She has beautiful hair." (uncountable - all of it together)</p>
            </div>
        `,
        taskInstructions: "Identify and classify nouns in your classroom environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Walk around your classroom (or look around you) and find:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>5 Countable Nouns:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>5 Uncountable Nouns:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these nouns into the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Words: book, rice, chair, milk, student, sugar, desk, air, teacher, water, pencil, flour, computer, paper, sand</em></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
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
                <p><strong>Part C: Sentence Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences: one using a countable noun and one using an uncountable noun:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to know the difference between countable and uncountable nouns?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen at home. Make a list of 10 countable nouns and 10 uncountable nouns you find in the refrigerator or pantry.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Using Quantifiers (much/many/some) with Different Noun Types",
        lessonContent: `
            <p>Today we'll learn how to use quantifiers - special words that tell us how much or how many of something we're talking about!</p>
            <p><strong>Key Question:</strong> When do we use "much" vs "many"?</p>
            <p><strong>Introduction:</strong> Quantifiers are words that come before nouns to show quantity. Different quantifiers are used with countable nouns versus uncountable nouns.</p>
            <p><strong>Quantifiers for Countable Nouns (Things you can count):</strong></p>
            <ul>
                <li><strong>Many:</strong> "How many apples are in the bowl?"</li>
                <li><strong>A few:</strong> "I have a few books to read."</li>
                <li><strong>Several:</strong> "Several students finished early."</li>
                <li><strong>A number of:</strong> "A number of chairs need to be moved."</li>
            </ul>
            <p><strong>Quantifiers for Uncountable Nouns (Things you cannot count):</strong></p>
            <ul>
                <li><strong>Much:</strong> "How much water is in the bottle?" (Note: "much" is usually used in questions and negative sentences)</li>
                <li><strong>A little:</strong> "Add a little sugar to the recipe."</li>
                <li><strong>A bit of:</strong> "Can I have a bit of advice?"</li>
                <li><strong>An amount of:</strong> "A large amount of rice was spilled."</li>
            </ul>
            <p><strong>Quantifiers that work with BOTH types:</strong></p>
            <ul>
                <li><strong>Some:</strong> "I have some books. (countable)" / "I have some milk. (uncountable)"</li>
                <li><strong>Any:</strong> "Do you have any pens? (countable)" / "Is there any sugar? (uncountable)"</li>
                <li><strong>No:</strong> "There are no chairs. (countable)" / "There is no rice left. (uncountable)"</li>
                <li><strong>A lot of / Lots of:</strong> "We have a lot of students. (countable)" / "We have a lot of work. (uncountable)"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Much vs Many</div>
                <p>❌ "How many water do you need?" (Incorrect - water is uncountable)<br>
                ✅ "How much water do you need?" (Correct)<br>
                ❌ "How much apples are there?" (Incorrect - apples are countable)<br>
                ✅ "How many apples are there?" (Correct)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Some is Special</div>
                <p>"Some" is your best friend - it works with everything! "I have some money." (uncountable) / "I have some coins." (countable)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Recipe Language</div>
                <p>Recipes use quantifiers all the time: "Add a little salt" (uncountable), "Add two eggs" (countable), "Add some flour" (uncountable).</p>
            </div>
        `,
        taskInstructions: "Practice choosing the correct quantifier for different nouns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose the correct quantifier (much/many/some):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How _______ books did you read? (much/many)</div>
                        <div>b. How _______ sugar is in this recipe? (much/many)</div>
                        <div>c. I need _______ help with my homework. (much/many/some)</div>
                        <div>d. There aren't _______ chairs in this room. (much/many)</div>
                        <div>e. Can I have _______ water, please? (much/many/some)</div>
                        <div>f. She doesn't have _______ time to play. (much/many)</div>
                        <div>g. We saw _______ animals at the zoo. (much/many/some)</div>
                        <div>h. How _______ flour is needed for the bread? (much/many)</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fix the mistakes in these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. "How many milk do you want in your tea?"</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b. "There isn't many space in my backpack."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>c. "She has much cousins in her family."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>d. "How many rice should I cook?"</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one sentence using "much" and one sentence using "many":
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences using "some" - one with a countable noun and one with an uncountable noun:
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 questions to ask a family member using 'how much' and 'how many' (example: 'How many glasses of water do you drink each day?')",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Irregular Plurals",
        lessonContent: `
            <p>Today we'll learn about irregular plurals - nouns that don't follow the normal rules!</p>
            <p><strong>Key Question:</strong> Why isn't it "mouses" instead of "mice"?</p>
            <p><strong>Introduction:</strong> Most nouns become plural by adding -s or -es (cat → cats, box → boxes). But some nouns have irregular plural forms that you just have to memorize. Let's learn the most common ones!</p>
            <p><strong>Common Irregular Plural Patterns:</strong></p>
            <ul>
                <li><strong>Change the vowel:</strong> man → men, woman → women, foot → feet, tooth → teeth, goose → geese</li>
                <li><strong>Add -en:</strong> child → children, ox → oxen, brother → brethren (old form)</li>
                <li><strong>Change the ending:</strong> mouse → mice, louse → lice</li>
                <li><strong>Same singular and plural:</strong> sheep → sheep, deer → deer, fish → fish, species → species, series → series</li>
                <li><strong>Words ending in -f or -fe:</strong> leaf → leaves, knife → knives, wolf → wolves, life → lives (but: roof → roofs, chef → chefs)</li>
                <li><strong>Words ending in -us:</strong> cactus → cacti, fungus → fungi, nucleus → nuclei, octopus → octopuses or octopi</li>
                <li><strong>Words ending in -is:</strong> analysis → analyses, thesis → theses, crisis → crises</li>
                <li><strong>Words ending in -on or -um:</strong> phenomenon → phenomena, criterion → criteria, bacterium → bacteria, curriculum → curricula</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mouse"></i> Mouse to Mice</div>
                <p>"One mouse ran across the floor." → "Two mice ran across the floor." The vowel changes from 'ou' to 'i'.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Child to Children</div>
                <p>"There is one child on the playground." → "There are many children on the playground." The plural adds '-en' instead of '-s'.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sheep"></i> Same Word!</div>
                <p>"Look at that sheep in the field." → "Look at those sheep in the field." The word doesn't change at all - you know it's plural from context!</p>
            </div>
        `,
        taskInstructions: "Master irregular plural forms through practice and memorization.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Singular to Plural</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the plural form of each noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. child → ________</div>
                        <div>b. mouse → ________</div>
                        <div>c. foot → ________</div>
                        <div>d. tooth → ________</div>
                        <div>e. ox → ________</div>
                        <div>f. man → ________</div>
                        <div>g. woman → ________</div>
                        <div>h. goose → ________</div>
                        <div>i. leaf → ________</div>
                        <div>j. knife → ________</div>
                        <div>k. sheep → ________</div>
                        <div>l. deer → ________</div>
                        <div>m. cactus → ________</div>
                        <div>n. analysis → ________</div>
                        <div>o. phenomenon → ________</div>
                    </div>
                    <div class="answer-space" style="height: 200px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plural to Singular</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the singular form of each plural noun:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. children → ________</div>
                        <div>b. mice → ________</div>
                        <div>c. feet → ________</div>
                        <div>d. teeth → ________</div>
                        <div>e. oxen → ________</div>
                        <div>f. men → ________</div>
                        <div>g. women → ________</div>
                        <div>h. geese → ________</div>
                        <div>i. leaves → ________</div>
                        <div>j. knives → ________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the correct irregular plural to complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Three _______ (man) were working in the garden.</div>
                        <div>b. All the _______ (child) lined up for recess.</div>
                        <div>c. I saw two _______ (mouse) in the kitchen!</div>
                        <div>d. The _______ (woman) in my family love to cook together.</div>
                        <div>e. My _______ (foot) hurt after running so far.</div>
                        <div>f. We brush our _______ (tooth) twice a day.</div>
                        <div>g. The farmer has six _______ (ox) pulling the plow.</div>
                        <div>h. The _______ (goose) flew south for the winter.</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge - Find the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What pattern do you notice in these words: foot/feet, tooth/teeth, goose/geese?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a set of 10 flashcards for irregular plurals. Write the singular on one side and the plural on the other. Practice with a family member!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Writing",
        subtopic: "Recipe Writing: Using Countable and Uncountable Nouns for Ingredients",
        lessonContent: `
            <p>Today we'll apply everything we've learned about nouns to write our own recipes!</p>
            <p><strong>Key Question:</strong> How do chefs and cookbook writers use countable and uncountable nouns correctly?</p>
            <p><strong>Introduction:</strong> Recipes are perfect examples of how we use nouns in real life. Every ingredient is either countable or uncountable, and we need to use the right quantifiers to give clear instructions.</p>
            <p><strong>Countable Nouns in Recipes:</strong></p>
            <ul>
                <li>Individual items you can count: eggs, apples, carrots, potatoes, tomatoes, onions</li>
                <li>Use numbers: 3 eggs, 2 apples, 5 carrots</li>
                <li>Use quantifiers like: a few, several, many, a couple of</li>
            </ul>
            <p><strong>Uncountable Nouns in Recipes:</strong></p>
            <ul>
                <li>Ingredients measured in volume or weight: water, milk, flour, sugar, salt, oil, butter, rice</li>
                <li>Use measurements: 1 cup of flour, 2 tablespoons of sugar, a pinch of salt</li>
                <li>Use quantifiers like: some, a little, much, a bit of</li>
            </ul>
            <p><strong>Recipe Structure:</strong></p>
            <ol>
                <li><strong>Title:</strong> Name of the dish</li>
                <li><strong>Ingredients list:</strong> All countable and uncountable nouns with quantities</li>
                <li><strong>Instructions:</strong> Step-by-step directions using imperative verbs (chop, mix, pour, bake)</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Countable in Recipes</div>
                <p>"Add 2 eggs to the bowl." (Eggs are countable - you can count them one by one!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flour"></i> Uncountable in Recipes</div>
                <p>"Add 2 cups of flour to the mixture." (Flour is uncountable - you measure it, don't count individual flour pieces!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Sample Recipe</div>
                <p><strong>Scrambled Eggs:</strong><br>
                Ingredients: 2 eggs (countable), 2 tablespoons of milk (uncountable), a pinch of salt (uncountable), 1 teaspoon of butter (uncountable)</p>
            </div>
        `,
        taskInstructions: "Write your own recipe using correct countable and uncountable nouns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify Noun Types in a Recipe</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this pancake recipe. Label each ingredient as (C) for countable or (U) for uncountable:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f5f5f5; padding: 10px;">
                        <p><strong>Simple Pancakes</strong></p>
                        <p>Ingredients:<br>
                        1 cup flour ___<br>
                        2 eggs ___<br>
                        1 cup milk ___<br>
                        2 tablespoons sugar ___<br>
                        1 teaspoon baking powder ___<br>
                        a pinch of salt ___<br>
                        2 tablespoons butter (melted) ___</p>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write Your Own Recipe</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose a simple dish you know how to make (sandwich, smoothie, salad, or snack). Write a complete recipe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Recipe Title:</strong> _______________________________</div>
                        <div style="margin-top: 10px;"><strong>Ingredients (include quantities):</strong></div>
                        <div class="answer-space" style="height: 120px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Instructions (step by step):</strong></div>
                        <div class="answer-space" style="height: 150px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Analyze Your Recipe</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at your ingredients list. List the countable nouns and uncountable nouns separately:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Countable nouns in my recipe:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;"><strong>Uncountable nouns in my recipe:</strong></div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to use the correct quantifiers (like "2 eggs" instead of "2 flours") when writing a recipe?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member for their favorite simple recipe. Write it down, then circle all the countable nouns and underline all the uncountable nouns.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Class Sorting Game: Categorizing 50 Nouns",
        lessonContent: `
            <p>Today we'll review everything we've learned this week by sorting a big list of nouns into categories!</p>
            <p><strong>Key Question:</strong> Can you correctly categorize any noun you see?</p>
            <p><strong>Introduction:</strong> After learning about countable nouns, uncountable nouns, and irregular plurals, today we'll put it all together. You'll sort 50 nouns into the right categories and prove your mastery!</p>
            <p><strong>Rules for the Game:</strong></p>
            <ol>
                <li>Look at each noun carefully</li>
                <li>Decide: Is it countable or uncountable?</li>
                <li>If it's countable, what is its plural form? (regular or irregular?)</li>
                <li>Place it in the correct column or category</li>
            </ol>
            <p><strong>Categories We'll Use:</strong></p>
            <ul>
                <li><strong>Countable - Regular Plural:</strong> adds -s or -es (book → books)</li>
                <li><strong>Countable - Irregular Plural:</strong> changes form (child → children)</li>
                <li><strong>Uncountable:</strong> no plural form (water, rice, information)</li>
                <li><strong>Uncountable but can be countable in certain contexts:</strong> (hair, paper, time)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> How to Play</div>
                <p>When you see "apple" → Countable, regular plural (apples)<br>
                When you see "mouse" → Countable, irregular plural (mice)<br>
                When you see "sugar" → Uncountable (no plural)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Bonus Challenge</div>
                <p>Some nouns can be BOTH! "I ate a chicken sandwich" (countable - one sandwich) vs. "I ate some chicken" (uncountable - the meat). Be careful!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Goal for Today</div>
                <p>By the end of this lesson, you should be able to quickly identify any noun's type and form the correct plural without hesitation!</p>
            </div>
        `,
        taskInstructions: "Sort 50 nouns into correct categories and demonstrate mastery of all concepts from the week.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort These 50 Nouns</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Categorize each noun in the list below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><strong>Noun List:</strong> book, water, child, rice, mouse, apple, milk, man, sugar, foot, chair, information, tooth, goose, flour, woman, sand, ox, sheep, deer, butter, egg, bread, cheese, knife, leaf, fish, cactus, analysis, phenomenon, time, hair, paper, chicken, glass, cake, fruit, vegetable, meat, juice, coffee, tea, salt, pepper, oil, honey, tomato, potato, onion, garlic</p>
                    </div>
                    <div style="margin-top: 15px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Countable (Regular Plural)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Countable (Irregular Plural)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Uncountable</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Can be Both</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 300px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 300px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 300px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 300px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plural Forms Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the plural form of these 10 nouns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. child → ________</div>
                        <div>b. leaf → ________</div>
                        <div>c. woman → ________</div>
                        <div>d. mouse → ________</div>
                        <div>e. cactus → ________</div>
                        <div>f. knife → ________</div>
                        <div>g. ox → ________</div>
                        <div>h. sheep → ________</div>
                        <div>i. analysis → ________</div>
                        <div>j. foot → ________</div>
                    </div>
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Quantifier Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blank with the correct quantifier (much/many/some):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How _______ students are in your class?</div>
                        <div>b. How _______ water should I drink each day?</div>
                        <div>c. I need _______ help with this math problem.</div>
                        <div>d. There aren't _______ chairs in the room.</div>
                        <div>e. Can I have _______ juice, please?</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was the most challenging part of learning about nouns this week? What will you remember most?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write a short paragraph (3-4 sentences) about your favorite food. Circle the countable nouns and underline the uncountable nouns in your paragraph.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing the rules for countable nouns, uncountable nouns, and at least 10 irregular plurals. Include example sentences. Due Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek4);
    console.log("grade6-english-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek4);
    console.log("grade6-english-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek4',
        metadata: grade6EnglishWeek4.metadata,
        days: grade6EnglishWeek4
    });
    console.log("grade6-english-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek4 = grade6EnglishWeek4;
console.log("grade6-english-week4.js loaded and registered successfully");