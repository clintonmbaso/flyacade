// Grade 1 English - Week 9 Data
const grade1EnglishWeek9 = {
    metadata: {
        grade: 1,
        subject: "English",
        week: 9,
        title: "Food and Meals — Learning About What We Eat",
        description: "Identifying food types, understanding daily meals, learning table manners, and describing food"
    },
    
    monday: {
        subject: "English",
        topic: "My Favorite Foods",
        subtopic: "Identifying and categorizing common foods",
        lessonContent: `
            <p>Welcome to our English lesson about food! Today we will learn about different types of foods and how to group them.</p>
            <p><strong>Key Question:</strong> Who is hungry? Let's talk about what we love to eat!</p>
            <p><strong>Food Families:</strong> Foods come in different families just like people do!</p>
            <ul>
                <li><strong>Fruits:</strong> Apples, bananas, oranges, mangoes</li>
                <li><strong>Vegetables:</strong> Carrots, potatoes, spinach, tomatoes</li>
                <li><strong>Grains:</strong> Bread, rice, maize, oats</li>
            </ul>
            <p><strong>Why is it important to know food types?</strong> Different foods help our bodies in different ways. Fruits and vegetables keep us healthy, grains give us energy!</p>
            <p><strong>Let's play a game:</strong> "Fruit, Veggie, or Grain?" I'll show you pictures, and you tell me which family the food belongs to!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #E91E63;"></i> Fruit Examples</div>
                <p>"This is an apple. Apples are fruits. They grow on trees and are sweet and crunchy!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot" style="color: #FF9800;"></i> Vegetable Examples</div>
                <p>"This is a carrot. Carrots are vegetables. They grow in the ground and help our eyes see well!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice" style="color: #795548;"></i> Grain Examples</div>
                <p>"This is bread. Bread is a grain. It gives us energy to play and learn all day!"</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice identifying food types.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the foods that are fruits:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Apple</div>
                    <div>☐ Bread</div>
                    <div>☐ Banana</div>
                    <div>☐ Carrot</div>
                    <div>☐ Orange</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw and label one fruit and one vegetable:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding-right: 10px;">
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;">My fruit: ________________</div>
                    </div>
                    <div style="flex: 1; padding-left: 10px;">
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;">My vegetable: ________________</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the food to its family:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Rice → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Fruit/Vegetable/Grain)</div>
                    <div>Potato → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Fruit/Vegetable/Grain)</div>
                    <div>Mango → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Fruit/Vegetable/Grain)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Name one food from each group:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Fruit: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Vegetable: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Grain: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
        `,
        homework: "Look in your kitchen at home. Find one fruit, one vegetable, and one grain. Draw them or write their names.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Meals of the Day",
        subtopic: "Understanding breakfast, lunch, and dinner/supper",
        lessonContent: `
            <p>Today we will learn about the different meals we eat throughout the day and when we eat them.</p>
            <p><strong>Key Question:</strong> What did you eat before coming to school today?</p>
            <p><strong>Three Main Meals:</strong></p>
            <ol>
                <li><strong>Breakfast:</strong> The first meal of the day. We eat it in the morning to start our day with energy!</li>
                <li><strong>Lunch:</strong> The meal we eat in the middle of the day. Sometimes we eat it at school, sometimes at home!</li>
                <li><strong>Supper/Dinner:</strong> The meal we eat in the evening with our family before going to sleep.</li>
            </ol>
            <p><strong>Time of Day Greetings:</strong></p>
            <ul>
                <li>Morning: "Good morning! Time for breakfast!"</li>
                <li>Afternoon: "Good afternoon! Time for lunch!"</li>
                <li>Evening: "Good evening! Time for supper!"</li>
            </ul>
            <p><strong>Let's practice together:</strong> We'll match foods with the right meal time!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FFC107;"></i> Breakfast Foods</div>
                <p>"Eggs, cereal, toast, and fruit are good breakfast foods. They give us energy for school!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Lunch Foods</div>
                <p>"Sandwiches, soup, rice, and vegetables are common lunch foods. They keep us full through the afternoon!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon" style="color: #673AB7;"></i> Supper/Dinner Foods</div>
                <p>"Meat, potatoes, vegetables, and family time! Supper is when we eat our biggest meal with loved ones."</p>
            </div>
        `,
        taskInstructions: "Complete the activities about meals and when we eat them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Meal Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match the meal with its time:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Breakfast → <span class="answer-space" style="width: 100px; display: inline-block;"></span> (Morning/Afternoon/Evening)</div>
                        <div>Lunch → <span class="answer-space" style="width: 100px; display: inline-block;"></span> (Morning/Afternoon/Evening)</div>
                        <div>Supper → <span class="answer-space" style="width: 100px; display: inline-block;"></span> (Morning/Afternoon/Evening)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Food Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw or write foods in the correct circle:
                    <div style="display: flex; margin-top: 10px; text-align: center;">
                        <div style="flex: 1;">
                            <div style="border: 2px solid #FFC107; border-radius: 50%; width: 100px; height: 100px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">Morning<br>Breakfast</div>
                            <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                        </div>
                        <div style="flex: 1;">
                            <div style="border: 2px solid #4CAF50; border-radius: 50%; width: 100px; height: 100px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">Afternoon<br>Lunch</div>
                            <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                        </div>
                        <div style="flex: 1;">
                            <div style="border: 2px solid #673AB7; border-radius: 50%; width: 100px; height: 100px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">Evening<br>Supper</div>
                            <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Meal Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>In the morning, I eat ________________.</div>
                        <div>In the afternoon, I eat ________________.</div>
                        <div>In the evening, I eat ________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Favorite Meal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite meal of the day:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This is my favorite: ________________ meal</div>
                </div>
            </div>
        `,
        homework: "Ask your family what they like to eat for supper. Draw a picture of your family eating supper together.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Table Manners and Giving Thanks",
        subtopic: "Learning polite words and mealtime gratitude",
        lessonContent: `
            <p>Today we will learn how to be polite at the table and how to show gratitude for our food.</p>
            <p><strong>Key Question:</strong> What do we do right before we take our first bite of food?</p>
            <p><strong>Being Thankful:</strong> It's important to be thankful for our food. Many people say a prayer or "grace" before eating.</p>
            <p><strong>Our Mealtime Prayer:</strong></p>
            <div style="background-color: #F3E5F5; padding: 15px; border-radius: 5px; margin: 10px 0; text-align: center;">
                "Thank you for the food we eat,<br>
                Thank you for the world so sweet,<br>
                Thank you for the birds that sing,<br>
                Thank you, God, for everything."
            </div>
            <p><strong>Polite Words at Mealtime:</strong></p>
            <ul>
                <li>"Please" - when asking for something</li>
                <li>"Thank you" - when receiving something</li>
                <li>"You're welcome" - when someone thanks you</li>
                <li>"May I have..." - polite way to ask for food</li>
            </ul>
            <p><strong>Let's practice:</strong> We'll play "The Polite Cafe" where we use our polite words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pray" style="color: #9C27B0;"></i> Saying Grace</div>
                <p>"Before we eat, we fold our hands, close our eyes, and say our mealtime prayer together."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #3F51B5;"></i> Polite Requests</div>
                <p>"May I have some bread, please?" is much nicer than "Give me bread!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-helping" style="color: #4CAF50;"></i> Thanking Others</div>
                <p>"Thank you for the delicious meal!" makes the cook feel happy and appreciated.</p>
            </div>
        `,
        taskInstructions: "Practice polite words and learn our mealtime prayer.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Polite Word Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing polite words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"________ I have some water, please?"</div>
                        <div>"________ you for the food."</div>
                        <div>"You're ________."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mealtime Prayer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice writing our prayer. Fill in the missing words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Thank you for the ________ we eat,</div>
                        <div>Thank you for the world so ________,</div>
                        <div>Thank you for the ________ that sing,</div>
                        <div>Thank you, ________, for everything.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Polite Cafe</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Role play with a partner. Write what you would say:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Asking for food: ___________________________________</div>
                        <div>Thanking someone: ___________________________________</div>
                        <div>Responding to thanks: ___________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of your family saying a prayer before eating:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">In my family, we ________________ before eating.</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Remembering Manners</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Check (✓) the polite behaviors:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Saying "please" and "thank you"</div>
                        <div>☐ Chewing with mouth open</div>
                        <div>☐ Saying a prayer before eating</div>
                        <div>☐ Reaching across the table</div>
                        <div>☐ Waiting for everyone to be served</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach your family our mealtime prayer. Practice saying it together before supper tonight.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Talking About Food",
        subtopic: "Using descriptive words for food",
        lessonContent: `
            <p>Today we will learn how to describe food using special "describing words" called adjectives.</p>
            <p><strong>Key Activity:</strong> Guess the food in my bag! I'll describe it, and you guess what it is!</p>
            <p><strong>Food Describing Words:</strong></p>
            <ul>
                <li><strong>Sweet:</strong> Honey, mango, cake, banana</li>
                <li><strong>Crunchy:</strong> Carrots, toast, apples, crackers</li>
                <li><strong>Hot:</strong> Soup, porridge, tea, cooked rice</li>
                <li><strong>Cold:</strong> Juice, ice cream, water, yogurt</li>
                <li><strong>Soft:</strong> Bread, mashed potatoes, pudding</li>
                <li><strong>Salty:</strong> Pretzels, chips, crackers</li>
            </ul>
            <p><strong>Sentence Frame:</strong> "The [food] is [description]."</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>"The porridge is hot."</li>
                <li>"The carrot is crunchy."</li>
                <li>"The banana is sweet."</li>
            </ul>
            <p><strong>Let's practice:</strong> We'll look at pictures of food and describe them using our new words!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ice-cream" style="color: #00BCD4;"></i> Cold Food</div>
                <p>"Ice cream is cold and sweet. It melts in your mouth on a hot day!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot" style="color: #FF9800;"></i> Crunchy Food</div>
                <p>"Carrots are crunchy and orange. They make a loud sound when you bite them!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot" style="color: #795548;"></i> Hot Food</div>
                <p>"Soup is hot and delicious. We blow on it to cool it down before eating!"</p>
            </div>
        `,
        taskInstructions: "Describe foods using adjectives and create sentences about food.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Description Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match the food with its description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ice cream → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Hot/Cold)</div>
                        <div>Soup → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Sweet/Salty)</div>
                        <div>Carrot → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Crunchy/Soft)</div>
                        <div>Honey → <span class="answer-space" style="width: 80px; display: inline-block;"></span> (Sweet/Salty)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use describing words to complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The soup is ________.</div>
                        <div>The apple is ________.</div>
                        <div>The bread is ________.</div>
                        <div>The juice is ________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Describe Your Food</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your favorite meal and describe it:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My favorite meal is: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>It is: <span class="answer-space" style="width: 100px;"></span> and <span class="answer-space" style="width: 100px;"></span></div>
                        <div>My sentence: "The ________ is ________."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Food Guessing Game</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read the clues and guess the food:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. It is yellow. It is sweet. It is soft. Monkeys love it! → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>2. It is orange. It is crunchy. Rabbits love it! → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>3. It is white. It is hot. We eat it for breakfast. → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Food Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a food expert. Write one sentence about what you learned about food:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I learned that food can be ________________</div>
                </div>
            </div>
        `,
        homework: "Help prepare a meal at home. Describe one food item using two describing words. Tell your family about it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1EnglishWeek9);
    console.log("english-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1EnglishWeek9);
    console.log("english-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1EnglishWeek9',
        metadata: grade1EnglishWeek9.metadata,
        days: grade1EnglishWeek9
    });
    console.log("english-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1EnglishWeek9 = grade1EnglishWeek9;
console.log("english-week9.js loaded and registered successfully");