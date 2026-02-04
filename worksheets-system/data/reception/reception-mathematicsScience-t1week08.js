// Reception Class Mathematics & Science - Week 8 Data (Money Patterns and Care)
const receptionMathScienceWeek8 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics & Science",
        week: 8,
        title: "Money Patterns and Care",
        description: "Exploring coin patterns, sequencing by value, caring for money, and basic budgeting concepts"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "The Coin Tower Pattern",
        subtopic: "Forming patterns using coins",
        lessonContent: `
            <p>Welcome to Money Week! Today we will learn how to create patterns using coins.</p>
            <p><strong>Key Concept:</strong> Patterns are sequences that repeat in a predictable way.</p>
            <p><strong>What is a pattern?</strong></p>
            <ul>
                <li>Something that happens again and again</li>
                <li>A repeating sequence</li>
                <li>A special order that we can follow</li>
            </ul>
            <p><strong>Coin Pattern Example:</strong> 50n, K1, 50n, K1, 50n, K1</p>
            <p><strong>Why patterns matter:</strong> Patterns help us predict what comes next and make our world organized!</p>
            <p><strong>Safety Note:</strong> We only use play coins for stacking games. Real coins should not be stacked high as they can fall and cause accidents.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins" style="color: #FFD700;"></i> Coin Pattern</div>
                <p>"50n, K1, 50n, K1" - This pattern repeats over and over. What coin comes after K1?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tower" style="color: #795548;"></i> Pattern Tower</div>
                <p>Building with patterns makes our towers stronger and more beautiful!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Coin Tower Game!</div>
                <p>Let's see who can build the tallest patterned tower: 50n, K1, 50n, K1...</p>
            </div>
        `,
        taskInstructions: "Create coin patterns and build a patterned tower.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Create the pattern: 50n, K1, 50n, K1
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Place your coins in this pattern:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                    <div>Circle the pattern: ☐ 50n-K1-50n-K1 ☐ K1-50n-K1-50n</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Build your Coin Tower
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Stack coins in your pattern. How tall can you build it?</div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div>My tower has ____ coins before it fell.</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your own coin pattern
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Invent a new pattern using two types of coins:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 5px;"></div>
                    <div>My pattern is: _____, _____, _____, _____</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Pattern recognition
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>What comes next? 50n, K1, 50n, ____</div>
                    <div>Circle: ☐ 50n ☐ K1 ☐ K5</div>
                </div>
            </div>
        `,
        homework: "Find three objects at home and make a pattern with them (like spoon, fork, spoon, fork). Show your family.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Sequencing Value",
        subtopic: "Arranging money from smallest value to largest",
        lessonContent: `
            <p>Today we will learn how to put money in order from smallest value to largest value!</p>
            <p><strong>Key Concept:</strong> Different coins and notes have different values.</p>
            <p><strong>Our Money Values:</strong></p>
            <ul>
                <li><strong>50n:</strong> Fifty ngwee - our smallest coin</li>
                <li><strong>K1:</strong> One kwacha</li>
                <li><strong>K2:</strong> Two kwacha</li>
                <li><strong>K5:</strong> Five kwacha</li>
                <li><strong>K10:</strong> Ten kwacha - our largest note today</li>
            </ul>
            <p><strong>What is sequencing?</strong> Putting things in a special order.</p>
            <p><strong>Value Ladder:</strong> Just like climbing a ladder, we start with the smallest at the bottom and go up to the biggest!</p>
            <p><strong>Remember:</strong> Value is not always about size! A small coin can be worth more than a big coin.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up" style="color: #4CAF50;"></i> Money Order</div>
                <p>"50n (smallest), then K1, then K2, then K5, then K10 (largest)" - from least to most!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ladder" style="color: #FF9800;"></i> Value Ladder</div>
                <p>Each rung of the ladder holds money of greater value. We climb from 50n to K10!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Money Ladder Game!</div>
                <p>We have a ladder drawn on the floor. Can you place each coin/note on the correct rung?</p>
            </div>
        `,
        taskInstructions: "Sequence money by value and complete the money ladder activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Money Ladder</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw the money ladder and place money correctly:
                    <div style="margin-left: 20px; margin-top: 10px; position: relative; height: 200px;">
                        <div style="position: absolute; top: 160px; left: 50px;">50n (bottom)</div>
                        <div style="position: absolute; top: 120px; left: 50px;">K1</div>
                        <div style="position: absolute; top: 80px; left: 50px;">K2</div>
                        <div style="position: absolute; top: 40px; left: 50px;">K5</div>
                        <div style="position: absolute; top: 0px; left: 50px;">K10 (top)</div>
                        <div class="drawing-area" style="height: 200px; width: 200px; border-left: 3px solid #795548; border-right: 3px solid #795548; position: relative;">
                            <!-- Ladder will be drawn here -->
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Value Order</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the correct order from smallest to largest value:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. ________ (smallest)</div>
                        <div>2. ________</div>
                        <div>3. ________</div>
                        <div>4. ________</div>
                        <div>5. ________ (largest)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which is Worth More?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle which is worth more in each pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 50n or ☐ K1</div>
                        <div>☐ K2 or ☐ K5</div>
                        <div>☐ K5 or ☐ K10</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Up Money</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Put these in the correct order: K5, 50n, K2, K10, K1
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Correct order: _____, _____, _____, _____, _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three different coins/notes at home and put them in order from smallest value to largest value.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Caring for Our Money",
        subtopic: "Learning how to keep money safe and clean",
        lessonContent: `
            <p>Today we will learn how to take good care of our money so it lasts a long time!</p>
            <p><strong>Key Concept:</strong> Money needs care just like our toys and books.</p>
            <p><strong>Why care for money?</strong></p>
            <ul>
                <li>Clean money is easier to count and use</li>
                <li>Banks accept clean, undamaged money</li>
                <li>Money that is cared for lasts longer</li>
            </ul>
            <p><strong>Money Care Rules:</strong></p>
            <ul>
                <li>Don't crumple or fold notes too much</li>
                <li>Keep money away from water and food</li>
                <li>Store money neatly in a wallet or envelope</li>
                <li>Don't draw or write on money</li>
            </ul>
            <p><strong>Science Connection:</strong> Paper notes can tear when wet. Coins can get dirty and hard to recognize.</p>
            <p><strong>Respect:</strong> We respect our money because it represents hard work.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath" style="color: #2196F3;"></i> Water and Money</div>
                <p>What happens when paper gets wet? It tears easily! We must keep money dry.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wallet" style="color: #795548;"></i> Safe Storage</div>
                <p>A wallet or envelope keeps money flat, clean, and organized - just like a home for money!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Wallet Practice!</div>
                <p>Practice placing play money neatly into wallets. Who can do it most carefully?</p>
            </div>
        `,
        taskInstructions: "Learn about money care and practice proper money handling.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Good vs. Bad Money Care</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the good money habits:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Crumpling notes in your pocket</div>
                        <div>☐ Keeping money in a wallet</div>
                        <div>☐ Putting money in water</div>
                        <div>☐ Storing money flat in an envelope</div>
                        <div>☐ Drawing on coins with pen</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Wallet Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Neatly place play money in your wallet/envelope:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw your wallet with money inside:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>I placed ____ coins and ____ notes neatly.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What's Wrong Here?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the picture. Circle what's wrong:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                        <div>Problems: ☐ Money in water ☐ Crumpled notes ☐ Coins mixed with food</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Clean Money Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a clean, flat K5 note:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="text-align: center; margin-top: 5px;">Clean money is happy money!</div>
                </div>
            </div>
        `,
        homework: "Find a safe place at home to keep your savings. Practice putting play money or real coins there neatly.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "My First Budget",
        subtopic: "Understanding that we can't buy everything at once",
        lessonContent: `
            <p>Today we will learn about making choices with our money - this is called budgeting!</p>
            <p><strong>Key Concept:</strong> We have limited money, so we must choose wisely what to buy.</p>
            <p><strong>What is a budget?</strong> A plan for how to spend your money.</p>
            <p><strong>Budget Rules:</strong></p>
            <ul>
                <li>You cannot spend more money than you have</li>
                <li>If something costs more than your money, you cannot buy it</li>
                <li>Sometimes we must choose between different things we want</li>
            </ul>
            <p><strong>Our Shopping Choices:</strong></p>
            <ul>
                <li>Item 1: Pencil - costs K2</li>
                <li>Item 2: Notebook - costs K3</li>
                <li>Item 3: Toy car - costs K10</li>
            </ul>
            <p><strong>Your Money:</strong> Each of you has K5 to spend. What can you afford?</p>
            <p><strong>Smart Spending:</strong> Making good choices helps us get what we need without running out of money.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart" style="color: #2196F3;"></i> Shopping Choices</div>
                <p>"With K5, I can buy the pencil (K2) and notebook (K3), but not the toy car (K10)."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4CAF50;"></i> Money Math</div>
                <p>K2 + K3 = K5. That's exactly our budget! The toy car costs K10, which is too much.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Budget Game!</div>
                <p>You have K5 play money. Visit our classroom shop and decide what to buy!</p>
            </div>
        `,
        taskInstructions: "Practice budgeting with K5 and make smart shopping choices.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Shop</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have K5. What can you buy?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pencil: K2 ☐</div>
                        <div>Notebook: K3 ☐</div>
                        <div>Toy car: K10 ☐</div>
                        <div>Draw what you choose to buy:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Budget Math</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add up your choices:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I spent: K____ + K____ = K____</div>
                        <div>I have K5. Did I spend too much? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Different Choices</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What if you only buy the toy car?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Toy car costs K10. You have K5.</div>
                        <div>Can you afford it? ☐ Yes ☐ No</div>
                        <div>How much more money would you need? K____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Budget Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw yourself as a smart shopper:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">A smart shopper checks prices before buying!</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Real Life Budget</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Think about a treat you like:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>If you have K2 and the treat costs K1, how many can you buy? ____</div>
                        <div>Draw the treats you can buy:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "With a family member, look at prices of two different foods at home. Talk about which costs more and which costs less.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Money Review and Reward",
        subtopic: "Reinforcing identification and counting skills",
        lessonContent: `
            <p>Today is our Money Week celebration! We'll review everything we've learned and have a treasure hunt!</p>
            <p><strong>Review Key Concepts:</strong></p>
            <ul>
                <li>Coin patterns (50n, K1, 50n, K1)</li>
                <li>Money value order (50n, K1, K2, K5, K10)</li>
                <li>Caring for money (keep it clean and safe)</li>
                <li>Budgeting (we can't buy everything)</li>
            </ul>
            <p><strong>Treasure Hunt Rules:</strong></p>
            <ul>
                <li>Find hidden play coins and notes around the classroom</li>
                <li>When you find one, you must name it correctly</li>
                <li>Correct answers earn stickers for your reward chart!</li>
            </ul>
            <p><strong>Celebration:</strong> We've become money experts! We can identify, sequence, care for, and make choices with money.</p>
            <p><strong>Real World Connection:</strong> These skills will help us our whole lives when we save, spend, and care for our money.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Treasure Hunt</div>
                <p>"I found a K5 note! It's worth five kwacha." Correct identification earns a sticker!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FFD700;"></i> Reward System</div>
                <p>Every correct answer brings you closer to becoming a "Money Master" with a special certificate!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Final Money Challenge!</div>
                <p>Can you complete all the money challenges and earn the ultimate reward?</p>
            </div>
        `,
        taskInstructions: "Complete the treasure hunt and review activities to earn your reward.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Treasure Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and name hidden money:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I found: ________ (draw it)</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>It is worth: ________</div>
                        <div>Teacher check: ☐ Correct! (earn a sticker)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Pattern Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete this pattern: 50n, K1, 50n, ____
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw the next coin:</div>
                        <div class="drawing-area" style="height: 60px; width: 60px;"></div>
                        <div>Answer: ☐ 50n ☐ K1 ☐ K5</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Value Order Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put these in order: K5, 50n, K2
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Smallest: ________</div>
                        <div>Middle: ________</div>
                        <div>Largest: ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Budget Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> You have K3. A sweet costs K1. How many can you buy?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw the sweets:</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>Answer: ____ sweets</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Money Master Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a Money Master. Write what you learned:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned ________________ about money!</div>
                    <div style="text-align: center; margin-top: 10px; font-weight: bold; color: #FFD700;">
                        ★ Congratulations Money Master! ★
                    </div>
                </div>
            </div>
        `,
        homework: "Teach someone at home one thing you learned about money this week. Show them how to put coins in value order.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathScienceWeek8);
    console.log("reception-math-science-week8-money.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathScienceWeek8);
    console.log("reception-math-science-week8-money.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathScienceWeek8',
        metadata: receptionMathScienceWeek8.metadata,
        days: receptionMathScienceWeek8
    });
    console.log("reception-math-science-week8-money.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathScienceWeek8 = receptionMathScienceWeek8;
console.log("reception-math-science-week8-money.js loaded and registered successfully");