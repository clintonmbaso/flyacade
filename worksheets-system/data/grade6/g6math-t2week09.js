// Grade 6 Mathematics - Term 2 Week 9 Data
const grade6MathsWeek9 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 2,
        week: 9,
        title: "Simple Interest",
        description: "Understanding saving, borrowing, and calculating simple interest in financial contexts"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Financial Mathematics",
        subtopic: "Saving and Borrowing - The Concept of Interest",
        lessonContent: `
            <p>Welcome to our study of simple interest! Today we'll explore why banks pay you when you save money and charge you when you borrow money.</p>
            <p><strong>Key Question:</strong> Why do you get extra money when you save, but pay extra when you borrow?</p>
            <p><strong>Introduction:</strong> Interest is the extra money paid for using someone else's money. Think of it as a "rental fee" for money!</p>
            <p><strong>When Interest Works FOR You (Saving):</strong></p>
            <ul>
                <li>You deposit money in a bank (called the <strong>principal</strong>)</li>
                <li>The bank uses your money to lend to others</li>
                <li>The bank pays you <strong>interest</strong> as a thank-you for using your money</li>
                <li>You end up with MORE than you started with!</li>
            </ul>
            <p><strong>When Interest Works AGAINST You (Borrowing):</strong></p>
            <ul>
                <li>You take a loan from the bank</li>
                <li>You pay back the amount you borrowed (<strong>principal</strong>) PLUS extra</li>
                <li>The extra is <strong>interest</strong> – the bank's fee for lending you money</li>
                <li>You end up paying MORE than you borrowed!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saver's Scenario</div>
                <p>If you deposit $100 in a savings account with 5% annual interest, after 1 year the bank gives you an extra $5. You now have $105!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Borrower's Scenario</div>
                <p>If you borrow $100 from a bank with 5% annual interest, after 1 year you must pay back $105 ($100 + $5 interest).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-university"></i> Why Banks Use Interest</div>
                <p>Banks pay interest to attract savers (so they have money to lend). Banks charge interest to borrowers (to make profit and cover risks). It's how banks stay in business!</p>
            </div>
        `,
        taskInstructions: "Complete the saving and borrowing scenarios to understand when interest helps or hurts you.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Interest - Friend or Foe?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each scenario, write whether interest helps you (you gain money) or costs you (you pay extra):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Putting $500 in a savings account: _________</div>
                        <div>B. Taking a $2,000 car loan: _________</div>
                        <div>C. Depositing birthday money in a bank: _________</div>
                        <div>D. Using a credit card to buy a bicycle: _________</div>
                        <div>E. Opening a child's savings account: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vocabulary Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Match each term to its definition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Principal</div>
                                <div>• Interest</div>
                                <div>• Saver</div>
                                <div>• Borrower</div>
                            </div>
                            <div>
                                <div>→ The original amount of money saved or borrowed</div>
                                <div>→ The extra money earned or paid</div>
                                <div>→ Someone who deposits money in a bank</div>
                                <div>→ Someone who takes money from a bank</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why would a bank pay you interest to keep your money with them?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> If you needed to borrow money, would you prefer a high interest rate or a low interest rate? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent or guardian about a time they saved money in a bank or took a loan. What interest rate did they get? Write 2-3 sentences about what you learned.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Financial Mathematics",
        subtopic: "The Simple Interest Formula",
        lessonContent: `
            <p>Today we'll learn the mathematical formula that banks use to calculate simple interest!</p>
            <p><strong>Key Question:</strong> How can we calculate exactly how much interest you will earn or owe?</p>
            <p><strong>The Simple Interest Formula:</strong></p>
            <div class="formula-box" style="background-color: #FFF8E1; padding: 15px; border-radius: 10px; text-align: center; margin: 15px 0;">
                <p style="font-size: 24px; font-weight: bold; margin: 0;">I = P × R × T</p>
                <p style="margin: 5px 0 0 0;">Interest = Principal × Rate × Time</p>
            </div>
            <p><strong>What Each Letter Means:</strong></p>
            <ul>
                <li><strong>I</strong> = Interest (the extra money earned or paid)</li>
                <li><strong>P</strong> = Principal (the starting amount saved or borrowed)</li>
                <li><strong>R</strong> = Rate (the percentage interest per year, written as a decimal)</li>
                <li><strong>T</strong> = Time (the number of YEARS the money is saved or borrowed)</li>
            </ul>
            <p><strong>Important Rules for Using the Formula:</strong></p>
            <ol>
                <li>The rate (R) must be written as a DECIMAL, not a percentage</li>
                <li>Example: 5% = 5 ÷ 100 = 0.05</li>
                <li>Time (T) must be in YEARS</li>
                <li>Example: 6 months = 0.5 years; 3 years = 3 years</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1: Saving Money</div>
                <p>Maria deposits $200 in a savings account with 4% annual simple interest for 3 years.<br>
                <strong>I = P × R × T</strong><br>
                I = $200 × 0.04 × 3<br>
                I = $200 × 0.12<br>
                I = $24 interest earned</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Example 2: Borrowing Money</div>
                <p>James borrows $500 at 6% annual simple interest for 2 years.<br>
                <strong>I = P × R × T</strong><br>
                I = $500 × 0.06 × 2<br>
                I = $500 × 0.12<br>
                I = $60 interest owed</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Example 3: Fraction of a Year</div>
                <p>Lisa borrows $1,000 at 8% annual simple interest for 6 months.<br>
                T = 6 months = 0.5 years<br>
                I = $1,000 × 0.08 × 0.5<br>
                I = $1,000 × 0.04<br>
                I = $40 interest owed</p>
            </div>
        `,
        taskInstructions: "Practice converting percentages to decimals and using the simple interest formula I = P × R × T.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Converting Percentages to Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert these interest rates to decimals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 3% = _________</div>
                        <div>B. 7% = _________</div>
                        <div>C. 12% = _________</div>
                        <div>D. 2.5% = _________</div>
                        <div>E. 8.75% = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Converting Time to Years</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these time periods to years:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 6 months = _________ years</div>
                        <div>B. 18 months = _________ years</div>
                        <div>C. 3 months = _________ years</div>
                        <div>D. 4 years = _________ years</div>
                        <div>E. 9 months = _________ years</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Using the Formula I = P × R × T</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the simple interest for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. P = $100, R = 5%, T = 2 years</div>
                        <div>I = _________ × _________ × _________ = $_________</div>
                        <div style="margin-top: 10px;">B. P = $300, R = 4%, T = 3 years</div>
                        <div>I = _________ × _________ × _________ = $_________</div>
                        <div style="margin-top: 10px;">C. P = $750, R = 6%, T = 1.5 years</div>
                        <div>I = _________ × _________ × _________ = $_________</div>
                        <div style="margin-top: 10px;">D. P = $2,000, R = 3.5%, T = 4 years</div>
                        <div>I = _________ × _________ × _________ = $_________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find an advertisement for a savings account or loan online or in a newspaper. Write down the interest rate and calculate how much interest you would earn on $100 saved for 2 years at that rate.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Financial Mathematics",
        subtopic: "Calculating Interest - Solving for I",
        lessonContent: `
            <p>Today we'll become experts at calculating simple interest by using the formula I = P × R × T!</p>
            <p><strong>Key Question:</strong> How much interest will you earn or pay in different situations?</p>
            <p><strong>Step-by-Step Method:</strong></p>
            <ol>
                <li>Identify the Principal (P) - the starting amount</li>
                <li>Convert the Rate (R) from a percentage to a decimal</li>
                <li>Convert Time (T) to years (divide months by 12)</li>
                <li>Multiply: P × R × T = Interest (I)</li>
            </ol>
            <p><strong>Remember This Pattern:</strong></p>
            <ul>
                <li>If you SAVE money, interest is money you EARN (the bank pays YOU)</li>
                <li>If you BORROW money, interest is money you OWE (you pay the bank)</li>
                <li>Simple interest is "simple" because it's only calculated on the original principal, not on previously earned interest</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> School Savings</div>
                <p>Jasmine saved $250 for a school trip in a bank account earning 3% simple interest per year. She kept it there for 2 years.<br>
                I = $250 × 0.03 × 2 = $15 interest earned.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Car Loan</div>
                <p>Mr. Rodriguez borrowed $8,000 to buy a used car. The bank charged 7% simple interest for 4 years.<br>
                I = $8,000 × 0.07 × 4 = $2,240 interest owed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Short-Term Loan</div>
                <p>Kim borrowed $150 from a friend for 8 months at 5% simple interest.<br>
                T = 8 months = 8 ÷ 12 = 0.667 years<br>
                I = $150 × 0.05 × 0.667 = $5 interest (rounded) owed to friend.</p>
            </div>
        `,
        taskInstructions: "Calculate simple interest for various saving and borrowing scenarios.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Interest Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the interest for each situation (show your work):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. P = $400, R = 5%, T = 3 years</div>
                        <div style="margin-left: 20px;">I = ______________ = $_________</div>
                        <div style="margin-top: 10px;">B. P = $1,200, R = 4.5%, T = 2 years</div>
                        <div style="margin-left: 20px;">I = ______________ = $_________</div>
                        <div style="margin-top: 10px;">C. P = $75, R = 8%, T = 1.5 years</div>
                        <div style="margin-left: 20px;">I = ______________ = $_________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-Life Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve each word problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Emma deposited $600 in her savings account. The bank pays 2% simple interest per year. How much interest will she earn after 5 years?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 15px;">B. Marcus borrowed $1,500 to buy a laptop. The loan has a simple interest rate of 9% per year. He will pay it back in 2 years. How much interest will he pay?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 15px;">C. A bank offers 3.2% simple interest on savings accounts. If you save $2,500 for 4 years, how much interest will you earn?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these more complex problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Chloe borrowed $900 for 9 months at 6% simple interest. How much interest will she pay? (Remember to convert months to years!)</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 15px;">B. A savings account earns $45 in interest over 3 years. The principal was $300. What was the interest rate?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create your own simple interest word problem. Include the principal, rate, and time. Then solve it and show your work.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Financial Mathematics",
        subtopic: "Finding the Total Amount (Principal + Interest)",
        lessonContent: `
            <p>Today we'll learn how to calculate the total amount of money you'll have after saving, or the total you'll pay back after borrowing!</p>
            <p><strong>Key Question:</strong> After earning or paying interest, what is the FINAL amount of money?</p>
            <p><strong>The Total Amount Formula:</strong></p>
            <div class="formula-box" style="background-color: #E8F5E9; padding: 15px; border-radius: 10px; text-align: center; margin: 15px 0;">
                <p style="font-size: 24px; font-weight: bold; margin: 0;">A = P + I</p>
                <p style="margin: 5px 0 0 0;">Total Amount = Principal + Interest</p>
            </div>
            <p><strong>What This Means:</strong></p>
            <ul>
                <li><strong>For Savers:</strong> A is how much money you have TOTAL (what you started with + what the bank paid you)</li>
                <li><strong>For Borrowers:</strong> A is how much money you must pay back TOTAL (what you borrowed + the interest fee)</li>
            </ul>
            <p><strong>Two-Step Process:</strong></p>
            <ol>
                <li>First, calculate the interest: <strong>I = P × R × T</strong></li>
                <li>Then, add it to the principal: <strong>A = P + I</strong></li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saver's Total</div>
                <p>Sarah saved $500 at 4% simple interest for 3 years.<br>
                Step 1: I = $500 × 0.04 × 3 = $60 interest<br>
                Step 2: A = $500 + $60 = $560 total in account</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-credit-card"></i> Borrower's Total</div>
                <p>Tom borrowed $2,000 at 7% simple interest for 2 years.<br>
                Step 1: I = $2,000 × 0.07 × 2 = $280 interest<br>
                Step 2: A = $2,000 + $280 = $2,280 total to pay back</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Larger Loan</div>
                <p>The Johnson family borrowed $150,000 for a house at 5% simple interest for 10 years.<br>
                I = $150,000 × 0.05 × 10 = $75,000 interest<br>
                A = $150,000 + $75,000 = $225,000 total to pay back!</p>
            </div>
        `,
        taskInstructions: "Calculate total amounts for saving and borrowing scenarios.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Calculate the Total Amount for Savers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each, find I (interest) then A (total amount):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. P = $200, R = 5%, T = 3 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; A = _________</div>
                        <div style="margin-top: 10px;">B. P = $750, R = 3.5%, T = 4 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; A = _________</div>
                        <div style="margin-top: 10px;">C. P = $1,500, R = 2.8%, T = 2 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; A = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculate the Total Amount for Borrowers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the total amount to pay back for each loan:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Student loan: P = $5,000, R = 4.5%, T = 5 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; Total to pay = _________</div>
                        <div style="margin-top: 10px;">B. Car loan: P = $12,000, R = 6.2%, T = 3 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; Total to pay = _________</div>
                        <div style="margin-top: 10px;">C. Personal loan: P = $800, R = 9%, T = 1.5 years</div>
                        <div style="margin-left: 20px;">I = _________ &nbsp;&nbsp; Total to pay = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each problem completely:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Mia saves $2,400 in a certificate of deposit earning 3.2% simple interest for 2 years. How much money will she have in total?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div style="margin-top: 15px;">B. A business borrows $25,000 at 7.5% simple interest for 4 years to buy new equipment. What total amount must they repay?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Imagine you win $1,000. You can either save it in a bank at 3% interest for 5 years, or spend it. Calculate how much total money you would have if you saved it. Would you save or spend? Why?",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Financial Mathematics",
        subtopic: "Interest in Real Life - Comparing Bank Rates",
        lessonContent: `
            <p>Today we'll apply everything we've learned to compare different bank offers and decide which is the BEST deal for a saver!</p>
            <p><strong>Key Question:</strong> Which bank gives you the most money for your savings?</p>
            <p><strong>Comparing Interest Rates:</strong></p>
            <ul>
                <li>Different banks offer different interest rates to attract customers</li>
                <li>Higher interest rates are BETTER for savers (you earn more money)</li>
                <li>Lower interest rates are BETTER for borrowers (you pay less money)</li>
                <li>But don't forget: time also matters! A longer time at a lower rate might earn more than a short time at a higher rate</li>
            </ul>
            <p><strong>How to Compare Two Bank Offers:</strong></p>
            <ol>
                <li>Calculate the total amount (A) for each bank using I = P × R × T, then A = P + I</li>
                <li>Compare the total amounts</li>
                <li>The bank with the HIGHER total is better for saving</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Comparing Two Banks</div>
                <p>You have $1,000 to save for 3 years.<br>
                Bank A: 4% simple interest<br>
                Bank B: 3.5% simple interest + $20 bonus<br>
                Bank A: I = $1,000 × 0.04 × 3 = $120 → Total = $1,120<br>
                Bank B: I = $1,000 × 0.035 × 3 = $105 → Total = $1,105 + $20 = $1,125<br>
                Bank B gives you $5 more! Always calculate to be sure.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Short vs Long Term</div>
                <p>Bank X: 5% for 2 years<br>
                Bank Y: 4% for 3 years<br>
                On $500: Bank X total = $550; Bank Y total = $560<br>
                Longer time at slightly lower rate can sometimes earn more!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Smart Saver Tip</div>
                <p>When comparing banks, always calculate the FINAL total (principal + interest). The highest interest rate doesn't always mean the most money if time periods are different!</p>
            </div>
        `,
        taskInstructions: "Compare different bank offers to determine which gives the best return for savers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Which Bank is Better for Savers?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have $500 to save for 2 years. Compare these two banks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Community Bank:</strong> 4.5% simple interest</div>
                        <div><strong>City Savings:</strong> 4% simple interest + $10 bonus</div>
                        <div style="margin-top: 10px;">Show your calculations:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div>Which bank gives you more money? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparing Three Banks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> You have $2,000 to save for 5 years. Compare these options:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• <strong>First National:</strong> 3.2% simple interest</div>
                        <div>• <strong>Secure Trust:</strong> 2.9% simple interest + $50 bonus at end</div>
                        <div>• <strong>High Yield Bank:</strong> 3.5% simple interest, but $25 annual fee</div>
                        <div style="margin-top: 10px;">Calculate the final amount for each:</div>
                        <div class="answer-space" style="height: 100px;"></div>
                        <div>Which bank is best? _________ &nbsp;&nbsp; Which is worst? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Borrower's Perspective</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> You need to borrow $3,000 for 3 years. Which loan is cheaper?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• <strong>Credit Union:</strong> 5.5% simple interest</div>
                        <div>• <strong>Online Bank:</strong> 5% simple interest + $100 origination fee</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div>Which loan costs less total? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you were opening a savings account tomorrow, what interest rate would you look for? Why is it important to compare banks before choosing one?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Research two different banks or credit unions online (with a parent's help). Find their savings account interest rates. Calculate how much $1,000 would grow to in 3 years at each bank. Write a paragraph explaining which bank you would choose and why.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathsWeek9);
    console.log("grade6-maths-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathsWeek9);
    console.log("grade6-maths-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathsWeek9',
        metadata: grade6MathsWeek9.metadata,
        days: grade6MathsWeek9
    });
    console.log("grade6-maths-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathsWeek9 = grade6MathsWeek9;
console.log("grade6-maths-week9.js loaded and registered successfully");