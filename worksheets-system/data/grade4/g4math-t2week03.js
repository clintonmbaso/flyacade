// Grade 4 Mathematics - Term 2 Week 3 Data
const grade4MathematicsWeek3 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 2,
        week: 3,
        title: "Money",
        description: "Understanding profit and loss, budgeting, practical market simulation, and savings planning using Zambian Kwacha (K)"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "Profit and Loss",
        lessonContent: `
            <p>Welcome to our lesson on profit and loss! Today we'll learn how traders know if they are making money or losing money.</p>
            <p><strong>Key Question:</strong> How does a trader know if they have made a profit or a loss?</p>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Cost Price (CP):</strong> The amount a trader pays to buy an item</li>
                <li><strong>Selling Price (SP):</strong> The amount a trader sells an item for</li>
                <li><strong>Profit:</strong> When you sell something for MORE than you bought it (SP > CP)</li>
                <li><strong>Loss:</strong> When you sell something for LESS than you bought it (SP < CP)</li>
            </ul>
            <p><strong>How to Calculate Profit:</strong></p>
            <p>Profit = Selling Price - Cost Price</p>
            <p><strong>How to Calculate Loss:</strong></p>
            <p>Loss = Cost Price - Selling Price</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Example 1: Profit</div>
                <p>A trader buys a box of tomatoes for <strong>K100</strong> (Cost Price).<br>
                She sells them all for <strong>K150</strong> (Selling Price).<br>
                Calculation: K150 - K100 = <strong>K50 Profit</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Example 2: Loss</div>
                <p>A trader buys a box of tomatoes for <strong>K100</strong> (Cost Price).<br>
                The tomatoes start to spoil, so she sells them quickly for <strong>K70</strong> (Selling Price).<br>
                Calculation: K100 - K70 = <strong>K30 Loss</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Check</div>
                <p>If CP = K50 and SP = K80, is it profit or loss?<br>
                K80 - K50 = K30 Profit ✔</p>
            </div>
        `,
        taskInstructions: "Complete The Market Math Challenge - solve 5 scenarios about local items.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Market Math Challenge</strong></p>
                <p><em>Solve each scenario. Calculate whether there is a profit or loss, and by how much.</em></p>
                
                <div class="task-item">
                    <span class="task-number">1</span> A trader buys a bag of maize for <strong>K80</strong>. She sells it for <strong>K110</strong>.
                    <div>Profit or Loss? _________</div>
                    <div>Amount: K_________</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> A farmer sells a bucket of charcoal. Cost Price = <strong>K45</strong>. Selling Price = <strong>K30</strong>.
                    <div>Profit or Loss? _________</div>
                    <div>Amount: K_________</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">3</span> Aunty Grace makes vitumbua. Cost of ingredients = <strong>K25</strong>. She sells all vitumbua for <strong>K40</strong>.
                    <div>Profit or Loss? _________</div>
                    <div>Amount: K_________</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> A vendor buys 10 oranges for <strong>K20</strong> (total cost). He sells each orange for <strong>K3</strong>. He sells all 10 oranges.
                    <div>Step 1: Total Selling Price = 10 × K3 = K_________</div>
                    <div>Step 2: Compare to Cost Price (K20)</div>
                    <div>Profit or Loss? _________ Amount: K_________</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">5</span> A book trader buys a textbook for <strong>K75</strong> and sells it for <strong>K65</strong>.
                    <div>Profit or Loss? _________</div>
                    <div>Amount: K_________</div>
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why would a trader sometimes sell at a loss instead of keeping the item?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member who sells something (vegetables, fruits, charcoal) what they paid for an item and what they sell it for. Calculate if they make a profit or loss.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "Introduction to Budgeting",
        lessonContent: `
            <p>Today we'll learn how to plan our spending so we never run out of money!</p>
            <p><strong>Key Question:</strong> How can we make sure we don't spend more money than we have?</p>
            <p><strong>What is a Budget?</strong></p>
            <p>A <strong>Budget</strong> is a plan for how to spend your money. It helps you:</p>
            <ul>
                <li>Know exactly where your money is going</li>
                <li>Stay within your limit</li>
                <li>Save money for important things</li>
            </ul>
            <p><strong>Rules for Making a Budget:</strong></p>
            <ol>
                <li>Know your total money (income)</li>
                <li>List everything you want to buy</li>
                <li>Add up all the costs</li>
                <li>Make sure the total is NOT more than your money</li>
                <li>If it's too much, remove some items</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake"></i> Birthday Party Budget: K200 Limit</div>
                <ul>
                    <li>Cake: K80</li>
                    <li>Drinks: K50</li>
                    <li>Balloons: K30</li>
                    <li>Snacks: K40</li>
                </ul>
                <p>Total: K80 + K50 + K30 + K40 = <strong>K200</strong> ✔ Within budget!</p>
                <p><em>If the student wants a K100 cake, they must remove something else (maybe cheaper drinks or fewer snacks).</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Budget: K100 Limit</div>
                <ul>
                    <li>Soap: K20</li>
                    <li>Sugar: K15</li>
                    <li>Rice: K30</li>
                    <li>Vegetables: K25</li>
                </ul>
                <p>Total: K20 + K15 + K30 + K25 = <strong>K90</strong> ✔ Saved K10!</p>
            </div>
        `,
        taskInstructions: "Be a party planner! Select items without exceeding a K150 budget.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Party Planner Activity</strong></p>
                <p><em>You have <strong>K150</strong> to spend on a party. Use the price list below. Choose items and show your addition to prove you stay within budget.</em></p>
                
                <div style="background-color: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 10px;">
                    <p><strong>📋 Price List:</strong></p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>• Cake: K60</div>
                        <div>• Cupcakes: K40</div>
                        <div>• Fanta (bottle): K15</div>
                        <div>• Coke (bottle): K15</div>
                        <div>• Water (bottle): K5</div>
                        <div>• Juice: K20</div>
                        <div>• Chips: K25</div>
                        <div>• Biscuits: K15</div>
                        <div>• Balloons: K20</div>
                        <div>• Decorations: K30</div>
                        <div>• Paper plates: K10</div>
                        <div>• Sweets: K10</div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">1</span> My party shopping list:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Total cost: K_________
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">3</span> Is this within the K150 budget? (Circle one) <strong>YES / NO</strong>
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> If you went over budget, what would you remove? If you stayed under, how much money is left?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Why Budget?</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to have a budget before you go shopping?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask your parent or guardian about one family budget (e.g., weekly groceries). Write down two items they buy and their costs.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "The Mini-Market (Practical Simulation)",
        lessonContent: `
            <p>Today we will become real traders and customers in our classroom market!</p>
            <p><strong>Key Question:</strong> How do traders decide their selling price to make a profit?</p>
            <p><strong>How to Play:</strong></p>
            <ul>
                <li><strong>Traders:</strong> You will receive "stock" (items to sell) and a Cost Price sheet</li>
                <li><strong>Customers:</strong> You will receive play money (Zambian Kwacha notes)</li>
                <li><strong>Goal:</strong> Traders want to make a profit; Customers want to buy what they need</li>
            </ul>
            <p><strong>Zambian Banknotes to Know:</strong> K2, K5, K10, K20, K50, K100</p>
            <p><strong>Traders' Task:</strong> Decide your Selling Price (must be higher than Cost Price to make profit)</p>
            <p><strong>After the Market:</strong> Traders will calculate their total money and determine their profit</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Trader Example</div>
                <p>You buy a pencil for <strong>K2</strong> (Cost Price).<br>
                You decide to sell it for <strong>K5</strong> (Selling Price).<br>
                Profit per pencil: K5 - K2 = <strong>K3 profit</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill"></i> Customer Example</div>
                <p>You have <strong>K50</strong> to spend. You buy:<br>
                - 2 erasers at K5 each = K10<br>
                - 1 notebook at K15 = K15<br>
                - 3 pencils at K3 each = K9<br>
                Total spent: K34. Money left: K50 - K34 = <strong>K16 saved</strong></p>
            </div>
        `,
        taskInstructions: "Participate in the classroom Mini-Market as a trader or customer, then calculate your profit.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Market Preparation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> If you are a <strong>TRADER</strong>, complete this table before the market:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Item</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cost Price (K)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">My Selling Price (K)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Profit per Item (K)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Eraser</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Notebook</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">10</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                         </table>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> If you are a <strong>CUSTOMER</strong>, record your spending here:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: After the Market - Trader Profit Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> <strong>For TRADERS only:</strong> Calculate your total profit.
                    <div>Total money collected from sales: K_________</div>
                    <div>Total Cost Price of all items sold: K_________</div>
                    <div>Total Profit (Sales - Cost): K_________</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why did some traders make more profit than others?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What did you learn from being a customer or trader today?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of one Zambian banknote (K2, K5, K10, K20, K50, or K100). Include the Fish Eagle or other symbols you see on it.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Money",
        subtopic: "Review & Assessment - My Weekly Savings Plan",
        lessonContent: `
            <p>Today we will review everything we learned about money, then create our own savings plan!</p>
            <p><strong>Week 3 Review:</strong></p>
            <ol>
                <li><strong>Profit and Loss:</strong> How to calculate if a trader makes or loses money</li>
                <li><strong>Budgeting:</strong> Planning your spending to stay within your limit</li>
                <li><strong>Market Simulation:</strong> Applying buying and selling in real life</li>
                <li><strong>Savings:</strong> Putting money aside for future needs</li>
            </ol>
            <p><strong>Key Vocabulary Review:</strong></p>
            <ul>
                <li>Cost Price (CP) - what you pay to buy an item</li>
                <li>Selling Price (SP) - what you sell an item for</li>
                <li>Profit - when SP > CP</li>
                <li>Loss - when CP > SP</li>
                <li>Budget - a spending plan</li>
                <li>Savings - money you keep for later</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Quick Fire Round: Profit or Loss?</div>
                <p>1. CP = K30, SP = K45 → <strong>Profit of K15</strong></p>
                <p>2. CP = K60, SP = K50 → <strong>Loss of K10</strong></p>
                <p>3. CP = K100, SP = K120 → <strong>Profit of K20</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Savings Example</div>
                <p>You receive <strong>K50</strong> pocket money.<br>
                Needs: Bus fare K15, Notebook K10 = K25 total<br>
                Wants: Sweets K5, Toy K15 = K20 total<br>
                If you skip the toy (K15), you save: K50 - K25 - K5 = <strong>K20 saved!</strong></p>
            </div>
        `,
        taskInstructions: "Create a weekly savings plan and complete the exit ticket.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Quick Fire Round - Profit or Loss?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> CP = K25, SP = K40 → Profit or Loss? _________ Amount: K_________
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> CP = K55, SP = K40 → Profit or Loss? _________ Amount: K_________
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> CP = K90, SP = K110 → Profit or Loss? _________ Amount: K_________
                    <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Weekly Savings Plan</strong></p>
                <p><em>You receive <strong>K50</strong> pocket money for the week. Complete your savings plan below.</em></p>
                
                <div class="task-item">
                    <span class="task-number">4</span> List your <strong>NEEDS</strong> (things you must spend money on):
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">5</span> List your <strong>WANTS</strong> (things you would like but don't need):
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">6</span> Calculate your spending:
                    <div>Total cost of NEEDS: K_________</div>
                    <div>Total cost of WANTS: K_________</div>
                    <div>Total spending if you buy everything: K_________</div>
                    <div>Money left (if any): K_________</div>
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">7</span> If you skip ONE want, how much can you SAVE this week?
                    <div>Want I will skip: _________</div>
                    <div>Amount saved: K_________</div>
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Exit Ticket</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> If I buy a book for <strong>K45</strong> and sell it for <strong>K60</strong>, did I make a profit or a loss? How much?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> What is the most important thing you learned about money this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple budget for one day using K20. List what you would buy (needs first) and show how much you would save.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathematicsWeek3);
    console.log("grade4-mathematics-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathematicsWeek3);
    console.log("grade4-mathematics-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathematicsWeek3',
        metadata: grade4MathematicsWeek3.metadata,
        days: grade4MathematicsWeek3
    });
    console.log("grade4-mathematics-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathematicsWeek3 = grade4MathematicsWeek3;
console.log("grade4-mathematics-week3.js loaded and registered successfully");