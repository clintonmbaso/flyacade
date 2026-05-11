// Grade 6 Mathematics - Term 2 Week 10 Data
const grade6MathWeek10 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 10,
        title: "Foreign Currency & Financial Literacy",
        description: "Identifying foreign currencies, converting between currencies, calculating costs of imported goods, and financial literacy review"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Global Money - Major Foreign Currencies",
        lessonContent: `
            <p>Welcome to our week on foreign currency! Today we'll explore money from around the world and learn to identify major currencies.</p>
            <p><strong>Key Question:</strong> How is money different in other countries, and why do we need to understand foreign currencies?</p>
            <p><strong>Introduction:</strong> Just like countries have different languages, they also have different currencies (types of money). When traveling or buying goods from other countries, we need to understand these different currencies.</p>
            <p><strong>Major World Currencies:</strong></p>
            <ol>
                <li><strong>US Dollar (USD):</strong> Symbol: $ or US$ - Used in United States, many international trades use USD</li>
                <li><strong>Euro (EUR):</strong> Symbol: € - Used in many European countries (France, Germany, Spain, Italy, etc.)</li>
                <li><strong>British Pound Sterling (GBP):</strong> Symbol: £ - Used in United Kingdom</li>
                <li><strong>Japanese Yen (JPY):</strong> Symbol: ¥ - Used in Japan</li>
                <li><strong>Chinese Yuan (CNY):</strong> Symbol: ¥ or RMB - Used in China</li>
                <li><strong>Canadian Dollar (CAD):</strong> Symbol: $ or C$ - Used in Canada</li>
                <li><strong>Australian Dollar (AUD):</strong> Symbol: $ or A$ - Used in Australia</li>
                <li><strong>Swiss Franc (CHF):</strong> Symbol: Fr - Used in Switzerland</li>
            </ol>
            <p><strong>Currency Codes:</strong> Every currency has a 3-letter code (e.g., USD, EUR, GBP). The first two letters usually represent the country, the third letter is the first letter of the currency name.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Currency Around the World</div>
                <p>A pizza that costs $10 in the USA costs about €9 in Europe or £8 in the UK - different currencies but similar value!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Exchange Rates</div>
                <p>The exchange rate tells us how much one currency is worth compared to another. For example: 1 USD = 0.94 EUR (meaning 1 US Dollar equals 0.94 Euros).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-passport"></i> Travel Connection</div>
                <p>When traveling to Japan, you need Japanese Yen. If a souvenir costs ¥500 and 1 USD = 150 JPY, you'd pay about $3.33!</p>
            </div>
        `,
        taskInstructions: "Identify major foreign currencies, their symbols, and countries of origin.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Currency Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each currency to its correct symbol and country:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Currency Name</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Symbol</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Country/Region</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">US Dollar</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Euro</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">British Pound</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Japanese Yen</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Chinese Yuan</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_____</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Currency Code Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Based on the pattern (first two letters = country, third letter = first letter of currency), what would be the code for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Mexican Peso (Mexico): _________</div>
                        <div>• Indian Rupee (India): _________</div>
                        <div>• Brazilian Real (Brazil): _________</div>
                        <div>• South African Rand (South Africa): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Research Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Research and write down the current currency used in these countries:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Thailand: _________</div>
                        <div>• Russia: _________</div>
                        <div>• South Korea: _________</div>
                        <div>• Saudi Arabia: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think different countries have different currencies? What would be challenging if every country used the same money?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find three different currencies (look at online images or ask family members). Draw their symbols and write which country uses each one.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Converting to Local Currency",
        lessonContent: `
            <p>Today we'll learn how to convert foreign prices into our local currency using multiplication and division!</p>
            <p><strong>Key Question:</strong> If an item costs $10 USD, how much is that in our local money?</p>
            <p><strong>Introduction:</strong> When you see a price in a foreign currency, you need to convert it to understand its real cost. This uses either multiplication or division, depending on the exchange rate given.</p>
            <p><strong>The Two Conversion Methods:</strong></p>
            <ul>
                <li><strong>Method 1 (Multiplication):</strong> If 1 unit of foreign currency = X units of local currency, multiply the foreign price by X.</li>
                <li><strong>Method 2 (Division):</strong> If X units of foreign currency = 1 unit of local currency, divide the foreign price by X.</li>
            </ul>
            <p><strong>Formula:</strong></p>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Local Amount = Foreign Price × Exchange Rate</strong> (when rate is \"1 foreign = X local\")</p>
                <p><strong>Local Amount = Foreign Price ÷ Exchange Rate</strong> (when rate is \"X foreign = 1 local\")</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1: Multiplication</div>
                <p>Exchange rate: 1 USD = 20 ZAR (South African Rand)<br>
                A shirt costs $25 USD.<br>
                Local price = 25 × 20 = <strong>500 ZAR</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 2: Division</div>
                <p>Exchange rate: 150 JPY = 1 USD (Japanese Yen to US Dollar)<br>
                A game costs ¥4,500 JPY.<br>
                Local price (in USD) = 4,500 ÷ 150 = <strong>$30 USD</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mobile-alt"></i> Real World: Phone Purchase</div>
                <p>A phone in Europe costs €600. Exchange rate: 1 EUR = 1.10 USD.<br>
                Cost in USD = 600 × 1.10 = <strong>$660 USD</strong></p>
            </div>
        `,
        taskInstructions: "Practice converting foreign currency prices into local currency using given exchange rates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Use these exchange rates for all problems:</strong></p>
                <div style="background-color: #f0f8ff; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <p>• 1 USD = 18.50 ZAR (South African Rand)</p>
                    <p>• 1 EUR = 1.10 USD</p>
                    <p>• 1 GBP = 1.30 USD</p>
                    <p>• 100 JPY = 0.65 USD</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part A: Converting Foreign to Local (Multiplication Method)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A video game costs $50 USD. How many ZAR is this?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A pair of shoes costs €80 EUR. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A watch costs £45 GBP. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Converting Foreign to Local (Division Method)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A toy costs ¥2,500 JPY. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A book costs ¥8,000 JPY. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A laptop costs €750 EUR. How many ZAR is this? (Hint: Convert EUR → USD → ZAR)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A backpack costs ¥12,000 JPY. How many ZAR is this? (Hint: JPY → USD → ZAR)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Maria wants to buy a dress online from a UK store. The dress costs £65 GBP. If 1 GBP = 1.30 USD, and Maria has $85 USD, does she have enough money?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find three items online (or in catalogs) priced in foreign currencies. Convert each to your local currency using today's exchange rates.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Converting from Local to Foreign",
        lessonContent: `
            <p>Today we'll practice the reverse calculation - converting local currency into foreign currency for travelers!</p>
            <p><strong>Key Question:</strong> If you're traveling to Europe, how many Euros will you get for your local money?</p>
            <p><strong>Introduction:</strong> When you travel abroad, you need to exchange your local money for the foreign currency. This is the opposite of what we did yesterday!</p>
            <p><strong>The Two Methods (Reverse Direction):</strong></p>
            <ul>
                <li><strong>Method 1 (Division):</strong> If 1 foreign = X local, divide local amount by X.</li>
                <li><strong>Method 2 (Multiplication):</strong> If X foreign = 1 local, multiply local amount by X.</li>
            </ul>
            <p><strong>Remember:</strong> The operation flips depending on how the exchange rate is given!</p>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Foreign Amount = Local Amount ÷ Exchange Rate</strong> (when rate is \"1 foreign = X local\")</p>
                <p><strong>Foreign Amount = Local Amount × Exchange Rate</strong> (when rate is \"X foreign = 1 local\")</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plane"></i> Example 1: Travel to Europe</div>
                <p>Exchange rate: 1 EUR = 1.10 USD<br>
                You have $200 USD to exchange.<br>
                Euros received = 200 ÷ 1.10 = <strong>€181.82 EUR</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-university"></i> Example 2: Travel to Japan</div>
                <p>Exchange rate: 150 JPY = 1 USD<br>
                You have $50 USD to exchange.<br>
                Yen received = 50 × 150 = <strong>¥7,500 JPY</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pound-sign"></i> Example 3: Travel to UK</div>
                <p>Exchange rate: 1 GBP = 1.30 USD<br>
                You have $325 USD to exchange.<br>
                Pounds received = 325 ÷ 1.30 = <strong>£250 GBP</strong></p>
            </div>
        `,
        taskInstructions: "Practice converting local currency into foreign currencies using given exchange rates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Use these exchange rates for all problems:</strong></p>
                <div style="background-color: #f0f8ff; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <p>• 1 USD = 18.50 ZAR (South African Rand)</p>
                    <p>• 1 EUR = 1.10 USD</p>
                    <p>• 1 GBP = 1.30 USD</p>
                    <p>• 120 JPY = 1 USD</p>
                    <p>• 1 CAD = 0.75 USD</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part A: Converting Local to Foreign (Using 1 foreign = X local)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have $100 USD going to Europe. How many Euros will you get? (1 EUR = 1.10 USD)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> You have $250 USD going to UK. How many Pounds will you get? (1 GBP = 1.30 USD)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> You have $500 ZAR going to USA. How many USD will you get? (1 USD = 18.50 ZAR)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Converting Local to Foreign (Using X foreign = 1 local)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> You have $75 USD going to Japan. How many Yen will you get? (120 JPY = 1 USD)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> You have $200 USD going to Canada. How many Canadian Dollars will you get? (1 CAD = 0.75 USD → So 1 USD = 1.33 CAD)
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Travel Budget Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Sofia has saved $500 USD for her trip to London. The exchange rate is 1 GBP = 1.30 USD. How many Pounds will she have for spending?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Michael is going to Tokyo with $300 USD. If 120 JPY = 1 USD, how many Yen does he get? A meal costs ¥3,600. How many meals can he buy?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A family has 2,000 ZAR to exchange for USD. If 1 USD = 18.50 ZAR, how many USD will they receive? They want to buy souvenirs for $80 USD. Do they have enough?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "You are planning a trip to Japan with $250 USD. Calculate: (a) How many Yen you will get (use 120 JPY = 1 USD), (b) If a hotel costs ¥15,000 per night, how many nights can you stay?",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Costing Imported Goods (Including Fee)",
        lessonContent: `
            <p>Today we'll calculate the final cost of imported goods that are priced in foreign currencies - including an additional fee!</p>
            <p><strong>Key Question:</strong> How much does an imported product really cost after fees and conversions?</p>
            <p><strong>Introduction:</strong> When you buy a product from another country, there are often extra costs. In addition to converting the currency, you might need to pay a service fee, shipping fee, or import tax.</p>
            <p><strong>The Complete Cost Calculation:</strong></p>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Step 1:</strong> Convert foreign price to local currency</p>
                <p><strong>Step 2:</strong> Calculate any fees (often a percentage of the converted price)</p>
                <p><strong>Step 3:</strong> Add the fee to the converted price for the FINAL COST</p>
            </div>
            <p><strong>Types of Fees:</strong></p>
            <ul>
                <li><strong>Exchange Fee:</strong> Banks may charge 1-3% for converting currency</li>
                <li><strong>Shipping Fee:</strong> Cost to transport the item from another country</li>
                <li><strong>Import Tax/Duty:</strong> Government tax on foreign goods (varies by country and product type)</li>
                <li><strong>Service Fee:</strong> Flat fee or percentage charged by the payment platform</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1: 5% Fee</div>
                <p>Item price: €100 EUR<br>
                Exchange rate: 1 EUR = 1.10 USD<br>
                Converted price = 100 × 1.10 = $110 USD<br>
                Fee (5%) = 110 × 0.05 = $5.50<br>
                <strong>Final cost = $110 + $5.50 = $115.50 USD</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Example 2: Flat Shipping Fee</div>
                <p>Item price: £50 GBP (convert to USD: 1 GBP = 1.30 USD)<br>
                Converted price = 50 × 1.30 = $65 USD<br>
                Shipping fee = $15 USD flat<br>
                <strong>Final cost = $65 + $15 = $80 USD</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-charging-station"></i> Example 3: 2% Fee + Shipping</div>
                <p>Item: ¥18,000 JPY (120 JPY = 1 USD)<br>
                Converted = 18,000 ÷ 120 = $150 USD<br>
                2% exchange fee = 150 × 0.02 = $3 USD<br>
                Shipping = $20 USD<br>
                <strong>Final cost = $150 + $3 + $20 = $173 USD</strong></p>
            </div>
        `,
        taskInstructions: "Calculate the final cost of imported goods including currency conversion and additional fees.",
        taskContent: `
            <div class="content-box">
                <p><strong>Use these exchange rates and fee structures:</strong></p>
                <div style="background-color: #f0f8ff; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <p>• 1 EUR = 1.10 USD | • 1 GBP = 1.30 USD | • 100 JPY = 0.65 USD</p>
                    <p>• Exchange fee: 3% of converted price | • Shipping: $12 for most items</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part A: Calculate Final Cost with 3% Fee Only</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A watch costs €120 EUR. Find: (a) converted price in USD, (b) 3% fee, (c) final cost
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A jacket costs £85 GBP. Find the final cost including 3% fee.
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate Final Cost with Fee + Shipping</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A toy costs €45 EUR. Convert to USD, add 3% fee, then add $12 shipping.
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Headphones cost ¥12,500 JPY. Convert to USD, add 3% fee, then add $12 shipping.
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Multiply-Step Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Emma wants to buy a camera from the UK. The camera costs £210 GBP. Exchange fee is 2.5% and shipping is $18 USD. What is the total cost in USD? (1 GBP = 1.30 USD)
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span>A bicycle from Germany costs €320 EUR. The exchange fee is 3%. There is no shipping fee because a friend is bringing it. What is the final cost in USD? If the buyer has $400 USD, do they have enough?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A smartphone from Japan costs ¥55,000 JPY. Convert to USD (100 JPY = 0.65 USD). Add a 2% exchange fee. Then add $25 for shipping. Calculate the final cost.
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare Costs</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Same item costs: €90 in Europe, £75 in UK, or ¥12,000 in Japan. Which is cheapest after converting to USD? (Use: 1 EUR = 1.10 USD, 1 GBP = 1.30 USD, 100 JPY = 0.65 USD. Ignore fees.)
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "You find a video game online for €60 EUR. Exchange rate: 1 EUR = 1.10 USD. There is a 4% exchange fee and $10 shipping. Calculate the final cost in USD. Show all steps.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Financial Literacy",
        subtopic: "Financial Literacy Finale - Quiz & Recap",
        lessonContent: `
            <p>Today we'll review everything we've learned this week and test our knowledge with a final quiz covering Proportion, Algebra, and Financial Arithmetic!</p>
            <p><strong>Week 10 Review:</strong></p>
            <ol>
                <li><strong>Foreign Currencies:</strong> Identifying major world currencies and their symbols (USD, EUR, GBP, JPY, CNY, etc.)</li>
                <li><strong>Converting to Local:</strong> Using multiplication or division to change foreign prices to local money</li>
                <li><strong>Converting from Local:</strong> Calculating how much foreign currency you get for your local money</li>
                <li><strong>Costing Imported Goods:</strong> Adding fees (percentage or flat rate) to the converted price</li>
            </ol>
            <p><strong>Key Formulas to Remember:</strong></p>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Converting foreign → local:</strong> Local = Foreign × Rate (if 1 foreign = X local)<br>
                Local = Foreign ÷ Rate (if X foreign = 1 local)</p>
                <p><strong>Converting local → foreign:</strong> Foreign = Local ÷ Rate (if 1 foreign = X local)<br>
                Foreign = Local × Rate (if X foreign = 1 local)</p>
                <p><strong>Final cost with fee:</strong> Fee = Converted Price × (Fee% ÷ 100)<br>
                Final = Converted Price + Fee + Additional Charges</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Proportion Connection</div>
                <p>Exchange rates are proportions: 1 USD : 18.50 ZAR. This means for every 1 USD, you get 18.50 ZAR. If you have 5 USD, you get 5 × 18.50 = 92.50 ZAR.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Algebra Connection</div>
                <p>If the equation for final cost is C = (F × R) + (F × R × f ) + S, where C = final cost, F = foreign price, R = exchange rate, f = fee decimal, S = shipping. You can substitute any values!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real Life Application</div>
                <p>Understanding currency conversion helps you make smart purchases, budget for travel, and understand global economics. These skills will serve you your whole life!</p>
            </div>
        `,
        taskInstructions: "Complete the final quiz covering all week's topics: proportions, algebra, and financial arithmetic.",
        taskContent: `
            <div class="content-box">
                <p><strong>Final Quiz - Financial Literacy</strong></p>
                <p><em>Use these exchange rates for all questions:</em></p>
                <div style="background-color: #f0f8ff; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <p>• 1 USD = 18.50 ZAR      • 1 EUR = 1.10 USD</p>
                    <p>• 1 GBP = 1.35 USD      • 100 JPY = 0.70 USD</p>
                    <p>• 1 CAD = 0.73 USD</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Currency Identification (2 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What is the symbol for the Euro? _________
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Which country uses the Japanese Yen? _________
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What is the currency code for British Pound? _________
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: Converting Foreign → Local (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A book costs $15 USD. How many ZAR is this?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> A perfume costs €40 EUR. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A game costs ¥5,000 JPY. How many USD is this?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Converting Local → Foreign (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> You have $200 USD traveling to UK. How many GBP will you get?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> You have $500 USD going to Japan. How many JPY will you get?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> You have 925 ZAR going to USA. How many USD will you get?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Imported Goods with Fees (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> A watch costs £80 GBP. Exchange fee is 3% and shipping is $10 USD. Find final cost in USD.
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> A drone costs €250 EUR. Exchange fee is 2.5%. No shipping. Find final cost in USD.
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section E: Proportion & Algebra Challenge (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">12</span> The formula for final cost is: C = (P × R) × (1 + f) + S, where P = foreign price, R = exchange rate, f = fee as decimal, S = shipping.<br>
                    If P = €150, R = 1.10, f = 0.03, and S = $15, what is C?
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> If 1 USD = 18.50 ZAR, write this as a proportion. How many ZAR would you get for $25 USD? Show the proportion setup.
                    <div class="answer-space" style="height: 80px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section F: Reflection (Bonus - 2 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">14</span> What is one way you will use currency conversion knowledge in your life?
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Self-Assessment:</strong></p>
                <div class="task-item">
                    <span class="task-number"></span> Rate your confidence (circle one):<br>
                    🟢 Very confident &nbsp;&nbsp; 🟡 Somewhat confident &nbsp;&nbsp; 🔴 Need more practice
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Create a 'Travel Budget' for a imaginary trip to Europe. Budget $1,000 USD. Plan: (a) Convert to EUR (use 1 EUR = 1.10 USD), (b) Plan expenses (hotel, food, souvenirs, activities) in EUR, (c) Show remaining money after all expenses.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek10',
        metadata: grade6MathWeek10.metadata,
        days: grade6MathWeek10
    });
    console.log("grade6-math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek10 = grade6MathWeek10;
console.log("grade6-math-week10.js loaded and registered successfully");