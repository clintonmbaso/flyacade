// Grade 6 Mathematics - Term 2 Week 7 Data
const grade6MathsWeek7 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 7,
        title: "Profit and Loss",
        description: "Understanding cost price, selling price, profit, loss, and percentage calculations in business contexts"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Business Mathematics",
        subtopic: "The Business Concept: Cost Price vs. Selling Price",
        lessonContent: `
            <p>Welcome to the world of business mathematics! Today we'll learn how shopkeepers, traders, and business owners determine if they are making money or losing money.</p>
            <p><strong>Key Question:</strong> How does a business know if it's successful?</p>
            <p><strong>Introduction:</strong> Every time someone buys or sells something, there are two important prices to consider:</p>
            <ul>
                <li><strong>Cost Price (CP):</strong> The price at which a person buys an item (the amount they pay to acquire it)</li>
                <li><strong>Selling Price (SP):</strong> The price at which a person sells an item (the amount they receive from the customer)</li>
            </ul>
            <p><strong>The Basic Rule:</strong></p>
            <ul>
                <li>If <strong>SP > CP</strong>, the seller makes a <strong>PROFIT</strong> (they gain money)</li>
                <li>If <strong>SP < CP</strong>, the seller makes a <strong>LOSS</strong> (they lose money)</li>
                <li>If <strong>SP = CP</strong>, there is <strong>NO PROFIT, NO LOSS</strong> (they break even)</li>
            </ul>
            <p><strong>Real-World Example:</strong> A fruit seller buys mangoes for $5 each (CP = $5). If they sell them for $8 each (SP = $8), they make a profit. If they sell them for $3 each (SP = $3), they make a loss.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> The Lemonade Stand</div>
                <p>You buy lemons and sugar for $10 (CP). You sell lemonade and earn $15 (SP). Since $15 > $10, you made a profit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Buying a Phone</div>
                <p>You buy a used phone for $200 (CP). You later sell it for $180 (SP). Since $180 < $200, you made a loss of $20.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Breaking Even</div>
                <p>A bookstore buys a novel for $12 and sells it for $12. They didn't gain or lose money on that book - they broke even.</p>
            </div>
        `,
        taskInstructions: "Identify whether each scenario shows profit, loss, or break-even.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Profit or Loss Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, determine if there is a PROFIT, LOSS, or BREAK-EVEN:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $50, SP = $70 → _________</div>
                        <div>b. CP = $120, SP = $100 → _________</div>
                        <div>c. CP = $30, SP = $30 → _________</div>
                        <div>d. CP = $250, SP = $300 → _________</div>
                        <div>e. CP = $15, SP = $12 → _________</div>
                        <div>f. CP = $8, SP = $10 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each story and identify profit or loss:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> Maria buys a bag for $40 and sells it to her friend for $55.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> A car dealer buys a used car for $5,000 and sells it for $4,500.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> John bakes cookies costing $8 in ingredients. He sells them for $12.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why would a seller ever sell an item for less than what they paid for it?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you were running a business, would you rather have SP > CP or SP < CP? Explain why.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three items at home. For each, guess the cost price and estimate a selling price. Would you make a profit or loss?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Business Mathematics",
        subtopic: "Calculating Profit and Loss",
        lessonContent: `
            <p>Today we'll learn how to calculate the exact amount of profit or loss in a transaction!</p>
            <p><strong>Key Question:</strong> How much money did you actually gain or lose?</p>
            <p><strong>Important Formulas:</strong></p>
            <ul>
                <li><strong>Profit = Selling Price (SP) - Cost Price (CP)</strong></li>
                <li><strong>Loss = Cost Price (CP) - Selling Price (SP)</strong></li>
            </ul>
            <p><strong>Remember:</strong></p>
            <ul>
                <li>If SP > CP → Profit (subtract CP from SP)</li>
                <li>If SP < CP → Loss (subtract SP from CP)</li>
                <li>Profit and Loss are always positive numbers (the amount gained or lost)</li>
            </ul>
            <p><strong>Example 1 (Profit):</strong> CP = $25, SP = $40<br>
            Profit = SP - CP = $40 - $25 = $15 profit</p>
            <p><strong>Example 2 (Loss):</strong> CP = $100, SP = $75<br>
            Loss = CP - SP = $100 - $75 = $25 loss</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Profit Calculation</div>
                <p>A toy store buys a game for $18 and sells it for $27. Profit = $27 - $18 = $9 profit per game.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Loss Calculation</div>
                <p>A farmer buys a goat for $150. He sells it for $120. Loss = $150 - $120 = $30 loss.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Quick Check</div>
                <p>If CP = $65 and SP = $65, then Profit/Loss = $0. This is break-even (no profit, no loss).</p>
            </div>
        `,
        taskInstructions: "Calculate profit or loss amounts for various transactions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate the Profit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the profit for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $45, SP = $60 → Profit = _________</div>
                        <div>b. CP = $120, SP = $150 → Profit = _________</div>
                        <div>c. CP = $8, SP = $12 → Profit = _________</div>
                        <div>d. CP = $200, SP = $275 → Profit = _________</div>
                        <div>e. CP = $350, SP = $500 → Profit = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate the Loss</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the loss for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $80, SP = $60 → Loss = _________</div>
                        <div>b. CP = $150, SP = $130 → Loss = _________</div>
                        <div>c. CP = $30, SP = $25 → Loss = _________</div>
                        <div>d. CP = $400, SP = $350 → Loss = _________</div>
                        <div>e. CP = $75, SP = $55 → Loss = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem 1:</strong> A shopkeeper buys 50 pencils at $0.50 each and sells them at $0.80 each. How much profit does he make on one pencil? On all 50 pencils?</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Problem 2:</strong> A car was bought for $12,000 and sold for $10,500. Calculate the loss.</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Missing Value Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the missing value:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $90, Profit = $25 → SP = _________</div>
                        <div>b. SP = $200, Loss = $35 → CP = _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create two word problems: one about profit and one about loss. Solve them and show your work.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Business Mathematics",
        subtopic: "Percentage Profit",
        lessonContent: `
            <p>Today we'll learn how to express profit as a percentage - this helps compare profits across different businesses!</p>
            <p><strong>Key Question:</strong> Is a $10 profit on a $20 item better than a $10 profit on a $100 item?</p>
            <p><strong>Why Percentage Profit?</strong> A $10 profit sounds good, but if you spent $100 to make that $10, that's only a 10% return. But if you spent $20 to make $10, that's a 50% return - much better!</p>
            <p><strong>The Formula:</strong></p>
            <div style="background: #f0f8ff; padding: 15px; text-align: center; font-size: 18px; margin: 10px 0;">
                <strong>Percentage Profit = (Profit ÷ Cost Price) × 100</strong>
            </div>
            <p><strong>Steps to Calculate Percentage Profit:</strong></p>
            <ol>
                <li>Calculate the Profit (SP - CP)</li>
                <li>Divide the Profit by the Cost Price</li>
                <li>Multiply by 100 to convert to a percentage</li>
            </ol>
            <p><strong>Example:</strong> CP = $40, SP = $60<br>
            Profit = $60 - $40 = $20<br>
            Percentage Profit = ($20 ÷ $40) × 100 = 0.5 × 100 = <strong>50%</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 1</div>
                <p>CP = $25, SP = $35<br>
                Profit = $10<br>
                Percentage Profit = (10 ÷ 25) × 100 = 0.4 × 100 = 40%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 2</div>
                <p>CP = $80, SP = $120<br>
                Profit = $40<br>
                Percentage Profit = (40 ÷ 80) × 100 = 0.5 × 100 = 50%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Why This Matters</div>
                <p>A $20 profit on a $40 item (50% profit) is better than a $30 profit on a $150 item (20% profit) even though the second profit amount is larger!</p>
            </div>
        `,
        taskInstructions: "Calculate percentage profit for various transactions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate Percentage Profit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the percentage profit for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $50, SP = $75 → Profit = ____ → Percentage Profit = ____%</div>
                        <div>b. CP = $100, SP = $140 → Profit = ____ → Percentage Profit = ____%</div>
                        <div>c. CP = $30, SP = $45 → Profit = ____ → Percentage Profit = ____%</div>
                        <div>d. CP = $200, SP = $260 → Profit = ____ → Percentage Profit = ____%</div>
                        <div>e. CP = $15, SP = $21 → Profit = ____ → Percentage Profit = ____%</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem showing your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem 1:</strong> A baker buys flour for $40 to make cakes. She sells the cakes for $70. What is her percentage profit?</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Problem 2:</strong> A phone seller buys phones for $250 each and sells them for $325 each. Calculate the percentage profit.</div>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which business is more profitable? Explain why.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Business A: CP = $80, SP = $120</div>
                        <div>• Business B: CP = $200, SP = $280</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A store wants a 40% profit on an item that costs $55. What should the selling price be?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a receipt from a store. If you were the shop owner, what would your percentage profit be? (Make reasonable estimates for the store's cost price.)",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Business Mathematics",
        subtopic: "Percentage Loss",
        lessonContent: `
            <p>Today we'll learn how to express loss as a percentage - this helps understand how much value was lost relative to the original cost.</p>
            <p><strong>Key Question:</strong> What percentage of your investment did you lose?</p>
            <p><strong>The Formula:</strong></p>
            <div style="background: #f0f8ff; padding: 15px; text-align: center; font-size: 18px; margin: 10px 0;">
                <strong>Percentage Loss = (Loss ÷ Cost Price) × 100</strong>
            </div>
            <p><strong>Steps to Calculate Percentage Loss:</strong></p>
            <ol>
                <li>Calculate the Loss (CP - SP)</li>
                <li>Divide the Loss by the Cost Price</li>
                <li>Multiply by 100 to convert to a percentage</li>
            </ol>
            <p><strong>Example:</strong> CP = $80, SP = $60<br>
            Loss = $80 - $60 = $20<br>
            Percentage Loss = ($20 ÷ $80) × 100 = 0.25 × 100 = <strong>25%</strong></p>
            <p><strong>Important Note:</strong> Loss percentage is always calculated based on the <strong>Cost Price</strong>, not the Selling Price. This is the same as profit percentage.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 1</div>
                <p>CP = $50, SP = $40<br>
                Loss = $10<br>
                Percentage Loss = (10 ÷ 50) × 100 = 0.2 × 100 = 20%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 2</div>
                <p>CP = $120, SP = $90<br>
                Loss = $30<br>
                Percentage Loss = (30 ÷ 120) × 100 = 0.25 × 100 = 25%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Understanding Loss</div>
                <p>A 10% loss on a $1000 item ($100 lost) is worse than a 20% loss on a $100 item ($20 lost) even though the percentage is smaller!</p>
            </div>
        `,
        taskInstructions: "Calculate percentage loss for various transactions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate Percentage Loss</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the percentage loss for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $60, SP = $45 → Loss = ____ → Percentage Loss = ____%</div>
                        <div>b. CP = $100, SP = $75 → Loss = ____ → Percentage Loss = ____%</div>
                        <div>c. CP = $40, SP = $30 → Loss = ____ → Percentage Loss = ____%</div>
                        <div>d. CP = $250, SP = $200 → Loss = ____ → Percentage Loss = ____%</div>
                        <div>e. CP = $80, SP = $64 → Loss = ____ → Percentage Loss = ____%</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem 1:</strong> A farmer buys a cow for $500. Due to sickness, he sells it for $400. Calculate his percentage loss.</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Problem 2:</strong> A phone was bought for $300 and sold for $240. What is the percentage loss?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Profit vs. Loss Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each transaction, state whether it's profit or loss and calculate the percentage:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. CP = $150, SP = $180 → _________ (____%)</div>
                        <div>b. CP = $90, SP = $72 → _________ (____%)</div>
                        <div>c. CP = $200, SP = $170 → _________ (____%)</div>
                        <div>d. CP = $45, SP = $63 → _________ (____%)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Can the percentage loss ever be more than 100%? Why or why not?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a table with 5 items. For each, write Cost Price and Selling Price. Calculate profit or loss and the percentage. Use both profit and loss scenarios.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Business Mathematics",
        subtopic: "The Market Simulation",
        lessonContent: `
            <p>Today we'll become shopkeepers and customers in our classroom market! You'll apply everything you've learned about profit, loss, and percentages.</p>
            <p><strong>Key Question:</strong> Can you run a successful business?</p>
            <p><strong>Market Day Rules:</strong></p>
            <ul>
                <li>Each student will be a shopkeeper with 3-5 items to sell</li>
                <li>You must set your own Selling Price (aiming for profit!)</li>
                <li>Customers will "buy" items using play money</li>
                <li>After selling, calculate your actual profit or loss</li>
            </ul>
            <p><strong>Before the Market (Preparation):</strong></p>
            <ol>
                <li>Decide what you will sell (drawings, erasers, stickers, bookmarks - or imaginary items)</li>
                <li>Determine your Cost Price (what you "paid" to get the item)</li>
                <li>Set your Selling Price (should be higher than CP for profit)</li>
                <li>Calculate your expected profit percentage</li>
            </ol>
            <p><strong>During the Market:</strong></p>
            <ul>
                <li>Record each sale in your ledger</li>
                <li>Keep track of how many items you sell</li>
            </ul>
            <p><strong>After the Market:</strong></p>
            <ul>
                <li>Calculate total sales revenue</li>
                <li>Calculate actual profit or loss</li>
                <li>Calculate your percentage profit or loss</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tags"></i> Sample Shop Setup</div>
                <p>Item: Handmade bookmark<br>
                Cost Price: $0.50 each (for materials)<br>
                Selling Price: $1.50 each<br>
                Expected Profit per item: $1.00<br>
                Expected Percentage Profit: (1.00 ÷ 0.50) × 100 = 200%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Sales Ledger Example</div>
                <p>Customer 1: 2 bookmarks → $3.00<br>
                Customer 2: 1 bookmark → $1.50<br>
                Total sold: 3 bookmarks<br>
                Total revenue: $4.50<br>
                Total Cost: 3 × $0.50 = $1.50<br>
                Total Profit: $4.50 - $1.50 = $3.00</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Profit Margin</div>
                <p>Different items have different profit margins. A small profit per item but selling many items can be better than a large profit per item on only a few sales!</p>
            </div>
        `,
        taskInstructions: "Participate in the classroom market simulation and complete the financial record sheet.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pre-Market Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete your shop plan:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Item I will sell: _________________________</div>
                        <div>Cost Price per item: $_________</div>
                        <div>Selling Price per item: $_________</div>
                        <div>Expected Profit per item: $_________</div>
                        <div>Expected Percentage Profit: _________%</div>
                        <div>Number of items I have to sell: _________</div>
                    </div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Market Sales Record</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Record each sale below (during the market activity):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Sale #</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Items Sold</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Amount Received ($)</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">1</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">2</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">3</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">4</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">5</td><td style="padding: 8px; border: 1px solid #ddd;"></td><td style="padding: 8px; border: 1px solid #ddd;"></td></tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Post-Market Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Total items sold: _________</div>
                        <div>Total revenue (SP × items sold): $_________</div>
                        <div>Total cost (CP × items sold): $_________</div>
                        <div>Actual Profit/Loss: $_________</div>
                        <div>Actual Percentage Profit/Loss: _________%</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer the following questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Did you make a profit or loss? Why do you think that happened?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 10px;">b. If you could do it again, would you change your selling price? Why?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        
                        <div style="margin-top: 10px;">c. What did you learn about running a business from this activity?</div>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a paragraph about what you learned from the market simulation. Describe one strategy you would use to increase your profit if you did it again.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek7);
    console.log("grade6-math-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek7);
    console.log("grade6-math-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek7',
        metadata: grade6MathWeek7.metadata,
        days: grade6MathWeek7
    });
    console.log("grade6-math-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek7 = grade6MathWeek7;
console.log("grade6-math-week7.js loaded and registered successfully");