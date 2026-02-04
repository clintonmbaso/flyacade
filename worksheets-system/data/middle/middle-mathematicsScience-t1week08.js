// Grade 1 Mathematics & Science - Week 8 Data (Patterns, Sequencing, and Trading)
const grade1MathScienceWeek8 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        week: 8,
        title: "Patterns, Sequencing, and Trading",
        description: "Learning about money patterns, sequencing by value, trading systems, and making spending choices"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Creating Money Patterns",
        subtopic: "Making AB patterns with coins and notes",
        lessonContent: `
            <p>Welcome to money pattern week! Today we will create exciting patterns using coins and notes.</p>
            <p><strong>Key Concept:</strong> Patterns help us predict what comes next and understand how things are organized.</p>
            <p><strong>What is an AB pattern?</strong></p>
            <ul>
                <li>A pattern that repeats two different things</li>
                <li>Example: Coin, Note, Coin, Note, Coin, Note...</li>
                <li>The pattern keeps going the same way</li>
            </ul>
            <p><strong>Pattern Vocabulary:</strong></p>
            <ul>
                <li>Repeat: To do the same thing again</li>
                <li>Sequence: The order of things</li>
                <li>Predict: To guess what comes next</li>
            </ul>
            <p><strong>Our Mission:</strong> We will create and continue money patterns using coins and K2/K5 notes!</p>
            <p><strong>Why is this important?</strong> Patterns help us think logically and notice how things are organized in our world.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins" style="color: #FFD700;"></i> Coin Pattern</div>
                <p>"Coin, Note, Coin, Note, Coin, Note..." - This is an AB pattern that keeps repeating!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave" style="color: #4CAF50;"></i> Color Pattern</div>
                <p>"Silver coin, Green note, Silver coin, Green note..." - We can also make color patterns with money!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Pattern Detective Game!</div>
                <p>I'll start a pattern on the floor. You be the detective and tell me what comes next!</p>
            </div>
        `,
        taskInstructions: "Complete these pattern activities using play money.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Continue this pattern: Coin, Note, Coin, Note, Coin, ____
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Draw what comes next:</div>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <div>I think the next item is: ☐ Coin ☐ Note</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Create your own AB pattern using coins and notes:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>My pattern is: ________, ________, ________, ________</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px;">Draw your pattern here:</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Find the mistake in this pattern:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Coin, Note, Coin, Coin, Note, Coin</div>
                    <div>Which one doesn't fit? Circle it: Coin, Note, Coin, <strong>Coin</strong>, Note, Coin</div>
                    <div>What should be there instead? <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Make a sound pattern with money:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Tap (coin), Shake (note), Tap, Shake, Tap, ____</div>
                    <div>What sound comes next? ☐ Tap ☐ Shake</div>
                    <div>Practice your sound pattern with a partner!</div>
                </div>
            </div>
        `,
        homework: "Create a pattern at home using two different objects (like spoon, fork, spoon, fork). Show your family what comes next.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Sequencing by Value",
        subtopic: "Arranging money from small to large value",
        lessonContent: `
            <p>Today we will learn how to arrange money by its value - from what buys little to what buys more!</p>
            <p><strong>Key Concept:</strong> Money has different values even if pieces look similar in size.</p>
            <p><strong>What is value?</strong></p>
            <ul>
                <li>How much something is worth</li>
                <li>What you can buy with it</li>
                <li>The "power" of money</li>
            </ul>
            <p><strong>Our Money Values:</strong></p>
            <ul>
                <li>Coins (small value)</li>
                <li>K2 note (medium value)</li>
                <li>K5 note (large value)</li>
            </ul>
            <p><strong>Science Connection:</strong> A small piece of paper (K5 note) can be "worth" more than many coins! Size doesn't always match value.</p>
            <p><strong>Think About It:</strong> Why is a K5 note worth more than 5 coins even though it's smaller?</p>
            <p><strong>Answer:</strong> Because people agree on its value! It's like a special paper promise.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up" style="color: #2196F3;"></i> Value Line</div>
                <p>"Coin → K2 note → K5 note" - As we go down the line, we can buy more things!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #FF9800;"></i> Size vs Value</div>
                <p>A K5 note is smaller than many coins but worth more! Value isn't about physical size.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Value Race!</div>
                <p>I'll show you three money items. Race to put them in order from smallest to largest value!</p>
            </div>
        `,
        taskInstructions: "Sequence money by value and complete these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Value Sequencing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Arrange these from smallest to largest value:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Draw a coin</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Value: Small</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Draw a K2 note</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Value: Medium</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Draw a K5 note</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Value: Large</div>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 10px;">
                        <div>Write the order: ________ → ________ → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Can You Buy?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match money to what it can buy:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>With a coin, I can buy: ☐ a sweet ☐ a toy car ☐ a book</div>
                        <div>With K2, I can buy: ☐ a pencil ☐ a small ball ☐ both!</div>
                        <div>With K5, I can buy: ☐ a snack ☐ a drink ☐ maybe both!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Size vs Value Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw something small that's valuable and something big that's not:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>Small but valuable</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>(Like a K5 note)</div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Big but not valuable</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>(Like a big rock)</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Value Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at these items. Circle which has most value:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 5 coins ☐ 1 K2 note ☐ 1 K5 note</div>
                        <div>Explain why: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home and put them in order from least valuable to most valuable to you.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "The Barter System (Trading)",
        subtopic: "Understanding how people traded before money",
        lessonContent: `
            <p>Today we'll travel back in time to learn how people got things before money existed!</p>
            <p><strong>Key Concept:</strong> Before money, people used "barter" - trading what you have for what you need.</p>
            <p><strong>What is barter?</strong></p>
            <ul>
                <li>Swapping one thing for another</li>
                <li>Trading without using money</li>
                <li>Exchanging goods directly</li>
            </ul>
            <p><strong>Barter Example:</strong> "I'll give you my apple if you give me your bread."</p>
            <p><strong>Silent Trade:</strong> Sometimes people traded without even talking! They would leave items and take what was left.</p>
            <p><strong>Social Science Connection:</strong> Barter shows how people cooperate and help each other get what they need.</p>
            <p><strong>Think About It:</strong> What would you trade your snack for at lunchtime?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #795548;"></i> Apple for Bread</div>
                <p>"I have apples but need bread. You have bread but need apples. Let's trade!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-mute" style="color: #9C27B0;"></i> Silent Trade</div>
                <p>Long ago, people would leave goods and take others without meeting - a quiet exchange!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Silent Trade Game!</div>
                <p>We'll do a silent trade activity. No talking! Use gestures to trade your item for something you want.</p>
            </div>
        `,
        taskInstructions: "Participate in trading activities and complete these exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Silent Trade Roleplay</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have an apple. Your partner has a toy car. Trade silently:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw what you start with:</div>
                        <div class="drawing-area" style="height: 60px; width: 100px;"></div>
                        <div>Draw what you end with:</div>
                        <div class="drawing-area" style="height: 60px; width: 100px; margin-top: 5px;"></div>
                        <div>Was it a fair trade? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Barter Challenges</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these barter problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>If you have 2 apples and want 1 orange, how many trades might you need?</div>
                        <div>Answer: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>What if the orange person doesn't want apples but wants bread instead?</div>
                        <div>This is why money was invented - to make trading easier!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What Would You Trade?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these trade ideas:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I would trade my ________ for your ________</div>
                        <div>I would trade my ________ for your ________</div>
                        <div>Draw your favorite trade:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Barter vs Money</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare barter and money. Circle which is easier:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Barter: Trade apple for bread</div>
                        <div>Money: Give K2 for bread</div>
                        <div>Which is simpler? ☐ Barter ☐ Money</div>
                        <div>Why? <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Try a trade at home with a family member. Trade a toy for a different toy, or help with a chore for a treat.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Making Choices (What to Buy?)",
        subtopic: "Decision-making with a K5 budget",
        lessonContent: `
            <p>Today we become smart shoppers! We'll learn how to make choices when we have limited money.</p>
            <p><strong>Key Concept:</strong> When we have a budget (like K5), we must choose what to buy carefully.</p>
            <p><strong>What is a budget?</strong></p>
            <ul>
                <li>The money you have to spend</li>
                <li>A spending limit</li>
                <li>Helps you make good choices</li>
            </ul>
            <p><strong>Our Budget:</strong> K5 - one green note!</p>
            <p><strong>Shop Items:</strong></p>
            <ul>
                <li>K2 items: pencil, small ball, eraser</li>
                <li>K5 items: toy car, storybook, set of crayons</li>
            </ul>
            <p><strong>Mathematics Connection:</strong> Introduction to subtraction - if you buy a K2 item, you have K3 left!</p>
            <p><strong>Think About It:</strong> Can you buy two K5 items with K5? Why not?</p>
            <p><strong>Answer:</strong> No! K5 + K5 = K10, which is more than your budget.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart" style="color: #4CAF50;"></i> Smart Shopping</div>
                <p>"With K5, I can buy one K5 toy car OR two K2 pencils and a K1 sweet!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #FF9800;"></i> Choice Making</div>
                <p>"Do I want one big thing (K5 book) or two smaller things (K2 ball + K2 pencil + K1 leftover)?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Budget Game!</div>
                <p>Visit our classroom shop with your K5 note. What will you choose? Can you buy everything you want?</p>
            </div>
        `,
        taskInstructions: "Make shopping decisions with your K5 budget.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Shop Visit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Visit our shop. Prices are: Pencil (K2), Ball (K2), Toy Car (K5), Book (K5)
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I choose to buy: ________________</div>
                        <div>It costs: K____</div>
                        <div>Money left: K____</div>
                        <div>Draw what you bought:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Can You Buy It?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle what you CAN buy with K5:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 1 toy car (K5)</div>
                        <div>☐ 2 balls (K2 + K2 = K4)</div>
                        <div>☐ 1 book (K5) AND 1 pencil (K2)</div>
                        <div>☐ 3 pencils (K2 + K2 + K2 = K6)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Money Left Over</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you buy a pencil (K2), how much is left from K5?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>K5 - K2 = K____</div>
                        <div>What could you buy with the leftover? <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Draw your purchase and your leftover money:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Wish List vs Reality</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What you WANT vs what you can AFFORD:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I WANT: toy car (K5) + ball (K2) + pencil (K2) = K9</div>
                        <div>I CAN AFFORD with K5: ________________________________</div>
                        <div>Sometimes we can't have everything we want, and that's okay!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Smart Shopper Award</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a smart shopper. Write one shopping tip:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My shopping tip: Always ________________</div>
                </div>
            </div>
        `,
        homework: "With a family member, pretend you have K5. Look at food prices at home and decide what you could 'buy' for dinner.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Review and 'Market Day'",
        subtopic: "Practical money use in a classroom market",
        lessonContent: `
            <p>Today is Market Day - our big celebration of everything we've learned about money!</p>
            <p><strong>Key Concept 1:</strong> In a real market, we need to identify the right money to pay for things.</p>
            <p><strong>Market Roles:</strong></p>
            <ul>
                <li>Shopkeepers: Set up stalls and collect money</li>
                <li>Buyers: Choose items and pay correctly</li>
                <li>Helpers: Assist with counting and making change</li>
            </ul>
            <p><strong>Key Concept 2:</strong> We can recognize all our money up to K5 and use it properly.</p>
            <p><strong>Market Rules:</strong></p>
            <ul>
                <li>Items cost K2 or K5 only</li>
                <li>Use correct money to pay</li>
                <li>Be polite shopkeepers and customers</li>
            </ul>
            <p><strong>Celebration:</strong> We've learned patterns, sequencing, trading, and smart shopping - we're money experts!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store" style="color: #795548;"></i> Fruit Stall</div>
                <p>"Apples cost K2 each. If you give me K5, you get one apple and K3 back!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-check-alt" style="color: #4CAF50;"></i> Correct Payment</div>
                <p>"This costs K2, so I need to give a K2 note, not a K5 note (unless I want change)."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Market Day!</div>
                <p>Our classroom becomes a market! Some of us will be shopkeepers, others will be shoppers. Let's trade and buy!</p>
            </div>
        `,
        taskInstructions: "Participate in Market Day and complete these review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Market Day Experience</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> During Market Day, I was a: ☐ Shopkeeper ☐ Buyer
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What I sold/bought: ________________</div>
                        <div>How much it cost: K____</div>
                        <div>What money I used: ________________</div>
                        <div>Draw your market experience:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Money Identification Review</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle all the K5 notes in this picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>[Picture showing coins, K2 notes, K5 notes]</div>
                        <div>I found ____ K5 notes</div>
                        <div>Draw a K5 note from memory:</div>
                        <div class="drawing-area" style="height: 60px; width: 120px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pattern Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create one last pattern using money:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My pattern: ____, ____, ____, ____, ____</div>
                        <div>What comes next? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sequencing Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Put these in order from smallest to largest value:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>K5 note, Coin, K2 note</div>
                        <div>Correct order: ________ → ________ → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Money Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete your Money Expert certificate:
                    <div style="border: 2px solid gold; padding: 15px; text-align: center; margin-top: 10px;">
                        <div style="font-size: 24px; color: #FFD700;">★ MONEY EXPERT ★</div>
                        <div>This certifies that</div>
                        <div class="answer-space" style="height: 30px; width: 200px; margin: 10px auto;"></div>
                        <div>has learned to:</div>
                        <div>• Create money patterns</div>
                        <div>• Sequence by value</div>
                        <div>• Understand trading</div>
                        <div>• Make smart choices</div>
                        <div>• Use money in a market</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                        <div>Date: ___________ Teacher: ___________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach a family member one thing you learned about money this week. Maybe show them a pattern or explain what 'barter' means.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek8);
    console.log("math-science-week8-patterns-trading.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek8);
    console.log("math-science-week8-patterns-trading.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek8',
        metadata: grade1MathScienceWeek8.metadata,
        days: grade1MathScienceWeek8
    });
    console.log("math-science-week8-patterns-trading.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek8 = grade1MathScienceWeek8;
console.log("math-science-week8-patterns-trading.js loaded and registered successfully");