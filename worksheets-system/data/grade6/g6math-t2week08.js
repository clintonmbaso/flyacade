// Grade 6 Mathematics - Term 2 Week 8 Data
const grade6MathsWeek8 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 8,
        title: "Discounts and Markups",
        description: "Understanding discounts, calculating savings, percentage discounts, successive discounts, and solving real-world word problems"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Consumer Mathematics",
        subtopic: "The Concept of Discount",
        lessonContent: `
            <p>Welcome to our exploration of discounts! Today we'll learn what discounts are and why businesses use them.</p>
            <p><strong>Key Question:</strong> Why do stores lower their prices?</p>
            <p><strong>Introduction:</strong> A <strong>discount</strong> is a reduction in the original price of an item. The original price is called the <strong>marked price</strong> (MP) or list price. The price you actually pay is the <strong>selling price</strong> (SP).</p>
            <p><strong>Key Vocabulary:</strong></p>
            <ul>
                <li><strong>Marked Price (MP):</strong> The original price shown on the price tag</li>
                <li><strong>Discount:</strong> The amount subtracted from the marked price</li>
                <li><strong>Selling Price (SP):</strong> The final price paid after the discount</li>
                <li><strong>Formula:</strong> Selling Price = Marked Price - Discount</li>
            </ul>
            <p><strong>Why Do Businesses Use Discounts?</strong></p>
            <ol>
                <li><strong>Attract customers:</strong> Discounts draw people into the store</li>
                <li><strong>Clear inventory:</strong> Remove old or seasonal items</li>
                <li><strong>Competition:</strong> Match or beat other stores' prices</li>
                <li><strong>Increase sales volume:</strong> Sell more items at lower profit per item</li>
                <li><strong>Reward loyalty:</strong> Special prices for regular customers</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Example 1: Basic Discount</div>
                <p>A shirt has a marked price of $40. The store offers a discount of $8. What is the selling price?</p>
                <p><strong>Solution:</strong> SP = MP - Discount = $40 - $8 = $32</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Why Discount?</div>
                <p>A clothing store has winter jackets in March. They offer a $25 discount to sell them before summer. Customers save money, and the store makes room for spring clothes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Real-World Connection</div>
                <p>Black Friday, back-to-school sales, and end-of-season clearance are all examples of discount events used by businesses worldwide.</p>
            </div>
        `,
        taskInstructions: "Calculate selling prices and explain why businesses use discounts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Discount Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the selling price for each item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $50, Discount = $10 → SP = _________</div>
                        <div>b. MP = $120, Discount = $30 → SP = _________</div>
                        <div>c. MP = $75, Discount = $15 → SP = _________</div>
                        <div>d. MP = $200, Discount = $45 → SP = _________</div>
                        <div>e. MP = $5.50, Discount = $2.00 → SP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding the Discount Amount</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the discount amount if you know the marked price and selling price:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $80, SP = $65 → Discount = _________</div>
                        <div>b. MP = $150, SP = $110 → Discount = _________</div>
                        <div>c. MP = $45, SP = $38 → Discount = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explanation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three reasons a business might offer a discount:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If a store offers a $20 discount on a $100 item, how much will you pay?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 items at home or online with marked prices. Imagine a $5, $10, and $15 discount on each. Calculate the selling prices.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Consumer Mathematics",
        subtopic: "Calculating Cash Discount",
        lessonContent: `
            <p>Today we'll learn how to calculate the final price when a fixed amount is taken off the marked price!</p>
            <p><strong>Key Question:</strong> If a store removes a fixed dollar amount, how do you find what you actually pay?</p>
            <p><strong>Cash Discount (Fixed Amount):</strong></p>
            <p>A <strong>cash discount</strong> is when a specific dollar amount is subtracted from the marked price. This is different from a percentage discount (which we'll learn tomorrow).</p>
            <p><strong>Formula Reminder:</strong></p>
            <ul>
                <li><strong>Selling Price (SP) = Marked Price (MP) - Cash Discount</strong></li>
                <li><strong>Discount Amount = MP - SP</strong></li>
                <li><strong>Total Savings = Discount Amount × Number of Items</strong></li>
            </ul>
            <p><strong>Real-World Examples of Cash Discounts:</strong></p>
            <ul>
                <li>Coupon: "$5 off your next purchase"</li>
                <li>Store promotion: "$10 off when you spend $50"</li>
                <li>Clearance: "Take $20 off all winter coats"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1: Single Item</div>
                <p>A pair of shoes costs $85. You have a coupon for $12 off. What is the final price?</p>
                <p><strong>Solution:</strong> SP = $85 - $12 = $73</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Example 2: Multiple Items</div>
                <p>You buy 3 shirts at $25 each. Store promotion: $10 off each shirt. What is the total savings and final price?</p>
                <p><strong>Solution:</strong><br>
                Total MP = 3 × $25 = $75<br>
                Discount per shirt = $10<br>
                Total discount = 3 × $10 = $30<br>
                Final price = $75 - $30 = $45</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Example 3: Finding Discount</div>
                <p>A $60 backpack is on sale for $45. What is the cash discount?</p>
                <p><strong>Solution:</strong> Discount = MP - SP = $60 - $45 = $15</p>
            </div>
        `,
        taskInstructions: "Calculate final prices after fixed-amount discounts on single and multiple items.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Single Item Cash Discounts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the selling price for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $45, Cash Discount = $8 → SP = _________</div>
                        <div>b. MP = $99, Cash Discount = $15 → SP = _________</div>
                        <div>c. MP = $67.50, Cash Discount = $12.50 → SP = _________</div>
                        <div>d. MP = $150, Cash Discount = $25 → SP = _________</div>
                        <div>e. MP = $32.99, Cash Discount = $5.99 → SP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiple Items with Cash Discounts</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate the total cost after discounts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2 books at $15 each, $3 discount per book → Total SP = _________</div>
                        <div>b. 4 notebooks at $4.50 each, $1 discount per notebook → Total SP = _________</div>
                        <div>c. 5 t-shirts at $12 each, $2.50 discount per shirt → Total SP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Discount or Marked Price</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve for the missing value:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $200, SP = $175 → Cash discount = _________</div>
                        <div>b. MP = $85, Cash discount = $22 → SP = _________</div>
                        <div>c. SP = $48, Cash discount = $12 → MP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Maria has a $7 off coupon for a pizza that costs $24. How much will she pay?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A store offers $5 off every toy. If Tom buys 3 toys at $18 each, what is his total savings and final price?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a shopping list of 5 items with marked prices. Apply a different cash discount to each item ($2, $5, $10, $15, $20). Calculate what you would pay for each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Consumer Mathematics",
        subtopic: "Percentage Discount",
        lessonContent: `
            <p>Today we'll learn how to calculate discounts when they are given as percentages, like "20% off"!</p>
            <p><strong>Key Question:</strong> How do you find the savings when an item is "25% off"?</p>
            <p><strong>Percentage Discount Formula:</strong></p>
            <ul>
                <li><strong>Discount Amount = Marked Price × (Discount Percentage ÷ 100)</strong></li>
                <li><strong>Selling Price = Marked Price - Discount Amount</strong></li>
                <li><strong>OR: Selling Price = Marked Price × (100% - Discount Percentage) ÷ 100</strong></li>
            </ul>
            <p><strong>Step-by-Step Method:</strong></p>
            <ol>
                <li>Convert the percentage to a decimal (divide by 100)</li>
                <li>Multiply the marked price by the decimal to find the discount amount</li>
                <li>Subtract the discount from the marked price</li>
            </ol>
            <p><strong>Quick Method (Finding Selling Price Directly):</strong></p>
            <ul>
                <li>If an item is 20% off, you pay 80% of the original price</li>
                <li>SP = MP × (100% - Discount%) ÷ 100</li>
                <li>Example: 20% off means SP = MP × 0.80</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 1: Finding Discount Amount</div>
                <p>A $50 sweater is 20% off. How much do you save? What is the final price?</p>
                <p><strong>Solution:</strong><br>
                Discount = $50 × 20% = $50 × 0.20 = $10<br>
                SP = $50 - $10 = $40</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bolt"></i> Example 2: Quick Method</div>
                <p>A $120 jacket is 30% off. Find the selling price.</p>
                <p><strong>Solution:</strong><br>
                You pay 70% of original price (100% - 30% = 70%)<br>
                SP = $120 × 0.70 = $84</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Example 3: Finding the Discount Percentage</div>
                <p>A $80 video game is on sale for $60. What is the discount percentage?</p>
                <p><strong>Solution:</strong><br>
                Discount = $80 - $60 = $20<br>
                Discount% = ($20 ÷ $80) × 100 = 25%</p>
            </div>
        `,
        taskInstructions: "Calculate percentage discounts, savings, and selling prices.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate Discount Amount and Selling Price</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Marked Price</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Discount %</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Discount Amount</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Selling Price</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$40</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">10%</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$80</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">25%</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$200</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$55</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">40%</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">$320</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">12.5%</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Discount Percentage</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What is the discount percentage in each case?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $60, SP = $48 → Discount % = _________</div>
                        <div>b. MP = $250, SP = $200 → Discount % = _________</div>
                        <div>c. MP = $90, SP = $72 → Discount % = _________</div>
                        <div>d. MP = $150, SP = $120 → Discount % = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A bicycle originally costs $280. It is on sale for 20% off. How much will you pay?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A laptop is marked at $750. During a sale, you get 15% off. What is the discount amount and the final price?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A $45 meal has a 10% discount coupon. How much money do you save?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 items in store flyers or online with percentage discounts. Calculate the savings and final price for each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Consumer Mathematics",
        subtopic: "Successive Discounts",
        lessonContent: `
            <p>Today we'll learn what happens when a store offers more than one discount on the same item!</p>
            <p><strong>Key Question:</strong> Is "20% off plus an extra 10% off" the same as 30% off?</p>
            <p><strong>Successive Discounts:</strong></p>
            <p>A <strong>successive discount</strong> is when multiple discounts are applied one after another. Important: They are NOT simply added together!</p>
            <p><strong>Why Not Just Add?</strong></p>
            <p>20% off + 10% off is NOT 30% off because the second discount applies to the already-reduced price, not the original price.</p>
            <p><strong>Method for Successive Discounts:</strong></p>
            <ol>
                <li>Apply the first discount to the marked price → get intermediate price</li>
                <li>Apply the second discount to the intermediate price → get final price</li>
                <li>For three discounts, continue the process</li>
            </ol>
            <p><strong>Formula (for two discounts):</strong></p>
            <ul>
                <li>Final Price = MP × (1 - d₁/100) × (1 - d₂/100)</li>
                <li>Where d₁ and d₂ are the discount percentages</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Important Warning!</div>
                <p>A $100 item with 20% off + 10% off:<br>
                <strong>Wrong way:</strong> 30% off = $70<br>
                <strong>Correct way:</strong> First 20%: $80, then 10% of $80 = $8, Final = $72<br>
                The final price is $72, NOT $70!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 1: Two Discounts</div>
                <p>A $200 jacket is first discounted by 25%, then an extra 10% off. Find the final price.</p>
                <p><strong>Solution:</strong><br>
                After 25%: $200 × 0.75 = $150<br>
                After extra 10%: $150 × 0.90 = $135</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 2: Three Discounts</div>
                <p>A $500 TV: 10% off, then 5% off, then $20 off. Find final price.</p>
                <p><strong>Solution:</strong><br>
                After 10%: $500 × 0.90 = $450<br>
                After 5%: $450 × 0.95 = $427.50<br>
                After $20: $427.50 - $20 = $407.50</p>
            </div>
        `,
        taskInstructions: "Calculate final prices after successive discounts (percentage and cash combinations).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Two Percentage Discounts</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the final price after successive percentage discounts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $100, 10% off, then 10% off → SP = _________</div>
                        <div>b. MP = $80, 20% off, then 15% off → SP = _________</div>
                        <div>c. MP = $250, 30% off, then 20% off → SP = _________</div>
                        <div>d. MP = $60, 25% off, then 10% off → SP = _________</div>
                        <div>e. MP = $400, 15% off, then 5% off → SP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Percentage + Cash Discounts</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Apply percentage discount first, then cash discount:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. MP = $120, 20% off, then $10 off → SP = _________</div>
                        <div>b. MP = $75, 15% off, then $5 off → SP = _________</div>
                        <div>c. MP = $300, 10% off, then $25 off → SP = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which is Better?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For a $150 item, which deal is better? Show your work.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Deal A: 30% off</div>
                        <div>Deal B: 20% off, then an extra 10% off</div>
                    </div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A $240 smartphone is on sale with a 20% discount. The store then takes an additional 5% off for using a store credit card. What is the final price?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A furniture store offers 15% off all items, plus a $50 mail-in rebate. What is the final price of a $500 sofa?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find an advertisement advertising 'extra discount' or 'additional savings.' Calculate the final price after successive discounts for one item.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Consumer Mathematics",
        subtopic: "Discount Word Problems",
        lessonContent: `
            <p>Today we'll solve multi-step word problems involving discounts and understand how stores still make a profit!</p>
            <p><strong>Key Question:</strong> If a store offers a discount, how do they still make money?</p>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Cost Price (CP):</strong> What the store pays to buy the item</li>
                <li><strong>Marked Price (MP):</strong> The price shown on the tag (includes profit)</li>
                <li><strong>Profit:</strong> SP - CP when SP > CP</li>
                <li><strong>Loss:</strong> CP - SP when CP > SP</li>
            </ul>
            <p><strong>Even with discounts, stores can still profit because:</strong></p>
            <ol>
                <li>The marked price already includes profit margin</li>
                <li>Discounts encourage buying more items</li>
                <li>Clearance items free up space for new products</li>
            </ol>
            <p><strong>Problem-Solving Strategy for Multi-Step Problems:</strong></p>
            <ol>
                <li>Read carefully and identify what is given (MP, discount%, CP, etc.)</li>
                <li>Decide what you need to find (SP, profit, discount amount)</li>
                <li>Apply discount formula(s) step by step</li>
                <li>Use SP - CP to find profit/loss</li>
                <li>Check if your answer makes sense</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Example 1: Store Profit After Discount</div>
                <p>A store buys a shirt for $20 (cost price). They mark it at $40. During a sale, it is 25% off. Does the store still make a profit?</p>
                <p><strong>Solution:</strong><br>
                SP after discount = $40 × 0.75 = $30<br>
                Profit = SP - CP = $30 - $20 = $10 profit<br>
                Yes, the store still makes $10 per shirt!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 2: Finding Marked Price</div>
                <p>A store wants to sell a $50 cost item at a 40% profit. They then plan a 20% discount sale. What should be the marked price?</p>
                <p><strong>Solution:</strong><br>
                Desired SP after discount = $50 + 40% profit = $50 × 1.40 = $70<br>
                If MP is the marked price, then MP × 0.80 = $70<br>
                MP = $70 ÷ 0.80 = $87.50</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percent"></i> Example 3: Combined Discount and Profit</div>
                <p>A $200 item is discounted 15%. If the store's cost was $120, what is their profit percentage?</p>
                <p><strong>Solution:</strong><br>
                SP = $200 × 0.85 = $170<br>
                Profit = $170 - $120 = $50<br>
                Profit% = ($50 ÷ $120) × 100 = 41.7%</p>
            </div>
        `,
        taskInstructions: "Solve multi-step word problems involving discounts, profit, and marked price.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Discount and Profit Basics</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A store buys a toy for $15 and marks it at $30. If the toy is sold at 20% off, what is the selling price and the store's profit?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A bookstore buys a novel for $8. They mark it up to $20. During a sale, it is 35% off. Does the store make a profit or a loss? How much?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding the Marked Price</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A store wants a 50% profit on an item that costs $40. They plan a 25% discount sale. What should the marked price be?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A clothing store buys jeans for $25. They want to make a 60% profit, but will offer a 20% discount. Calculate the marked price.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Multi-Step Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A store buys a television for $300. The marked price is $500. During a sale, the TV is discounted by 25%, then an additional $50 off. What is the final selling price? What is the store's profit or loss?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A jewelry store buys a necklace for $80. They mark it up by 150% (meaning MP = CP × 2.5). During a clearance, it is discounted by 40%. A customer then uses a $15 coupon. How much does the customer pay? What is the store's profit percentage?
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Why do stores use percentage discounts instead of just lowering the marked price permanently? List two reasons.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> If you were a store owner, when would you offer a discount? Explain your strategy.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own store scenario. Choose 3 items with cost prices. Decide marked prices, then create a sale with discounts. Calculate final prices and profits. Present as a mini 'sales report.'",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek2);
    console.log("grade6-math-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek2);
    console.log("grade6-math-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek2',
        metadata: grade6MathWeek2.metadata,
        days: grade6MathWeek2
    });
    console.log("grade6-math-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek2 = grade6MathWeek2;
console.log("grade6-math-week2.js loaded and registered successfully");