// Grade 6 Math - Week 8 Data
const grade6MathWeek8 = {
    metadata: {
        grade: 6,
        subject: "Math",
        term: 1,
        week: 8,
        title: "Estimation and Rounding in the Real World",
        description: "Learning to estimate, round whole numbers and decimals, and apply these skills to practical situations"
    },
    
    monday: {
        subject: "Math",
        topic: "Estimation and Rounding",
        subtopic: "Introduction to Estimation in the Real World",
        lessonContent: `
            <p>Welcome to our week on estimation and rounding! Today we'll explore what estimation means and why it's useful in everyday life.</p>
            <p><strong>Key Concept:</strong> Estimation is an "educated guess" about a quantity or measurement. It's different from precise measurement but often "good enough" for real-world situations.</p>
            <p><strong>Why Do We Estimate?</strong></p>
            <ul>
                <li>To make quick calculations when exact numbers aren't needed</li>
                <li>To check if an exact answer seems reasonable</li>
                <li>When tools for precise measurement aren't available</li>
                <li>To plan and make decisions quickly</li>
            </ul>
            <p><strong>Estimation vs. Exact Measurement:</strong></p>
            <ul>
                <li><strong>Estimation:</strong> "About 30 minutes" or "Around 20 students"</li>
                <li><strong>Exact Measurement:</strong> "28 minutes and 15 seconds" or "23 students"</li>
            </ul>
            <p><strong>Real-World Examples of Estimation:</strong></p>
            <ul>
                <li>Guessing how much time it takes to walk home</li>
                <li>Estimating how much food to buy for a party</li>
                <li>Approximating the cost of items in a shopping cart</li>
                <li>Judging if you have enough money for purchases</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hourglass-half" style="color: #4A90E2;"></i> Time Estimation</div>
                <p>If you leave home at 3:15 PM and it takes "about 20 minutes" to walk to the library, you'll arrive around 3:35 PM.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Estimation</div>
                <p>At the grocery store, you quickly estimate that your items cost about $25, so you know you have enough money.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Estimation Tip</div>
                <p>Good estimators often compare to something they know. "This book is about as heavy as my math textbook."</p>
            </div>
        `,
        taskInstructions: "Practice your estimation skills by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at a jar of beans/marbles (or imagine one). Make an educated guess:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. How many items are in the jar?</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. What clues did you use to make your estimate?</div>
                    <div style="margin-left: 20px; height: 40px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Estimate the following classroom objects, then check with tools:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. Length of your desk (estimate in cm)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. Weight of your math book (estimate in grams)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. Height of your chair (estimate in cm)</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> List 3 situations from your own life where you use estimation:
                <div class="answer-space" style="height: 90px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is estimation sometimes better than exact measurement? Explain:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 objects at home. Estimate their length/weight, then measure exactly. Compare your estimates.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Estimation and Rounding",
        subtopic: "Rounding Whole Numbers to the Nearest Ten",
        lessonContent: `
            <p>Today we'll learn a specific estimation skill: rounding whole numbers to the nearest ten.</p>
            <p><strong>Key Concept:</strong> Rounding means changing a number to a simpler number that is close in value.</p>
            <p><strong>Visualizing Rounding:</strong> Imagine a number line. Numbers 0-4 are closer to the lower ten. Numbers 5-9 are closer to the higher ten.</p>
            <p><strong>The Rounding Rule:</strong></p>
            <ul>
                <li><strong>"Five or more, let it soar!"</strong> (Round up)</li>
                <li><strong>"Four or less, let it rest!"</strong> (Round down)</li>
            </ul>
            <p><strong>Steps for Rounding to the Nearest Ten:</strong></p>
            <ol>
                <li>Look at the digit in the ones place</li>
                <li>If it's 0, 1, 2, 3, or 4: Keep the tens digit the same, change ones to 0</li>
                <li>If it's 5, 6, 7, 8, or 9: Increase the tens digit by 1, change ones to 0</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>13 → 10 (3 is less than 5)</li>
                <li>27 → 30 (7 is more than 5)</li>
                <li>45 → 50 (5 is exactly 5, so round up!)</li>
            </ul>
            <p><strong>Why Round to Tens?</strong> It makes numbers easier to work with mentally and helps with quick estimation.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up" style="color: #4A90E2;"></i> Number Line Example</div>
                <p>On a number line, 17 is closer to 20 than to 10. So 17 rounds to 20.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Real-World Example</div>
                <p>If there are 24 students in a club, we might say "about 20 students" or "about 30 students." 24 is closer to 20, so we round to 20.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Money Example</div>
                <p>A toy costs 87 cents. That's about 90 cents (rounding 87 to the nearest ten cents) or about 1 dollar (rounding to the nearest dollar).</p>
            </div>
        `,
        taskInstructions: "Practice rounding whole numbers to the nearest ten.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Rounding</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Round these numbers to the nearest ten:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 34 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 58 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 12 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 95 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 63 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Round these real quantities to the nearest ten:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 47 students on a field trip → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 83 pages in a book → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 25 apples in a basket → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 91 points in a game → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Explain Your Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a simple number line from 50 to 60. Show where 54 and 57 would be. Which ten is each closer to?
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do we round 45 up to 50 instead of down to 40?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find three numbers between 100 and 200 that round to 150 when rounded to the nearest ten:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 numbers in a newspaper or magazine. Round each to the nearest ten.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Estimation and Rounding",
        subtopic: "Rounding to Hundreds and Larger Units",
        lessonContent: `
            <p>Today we'll extend our rounding skills to larger numbers and units.</p>
            <p><strong>Key Concept:</strong> The same rounding rules apply to hundreds, thousands, and larger units like kilometers and meters.</p>
            <p><strong>Rounding to Hundreds:</strong></p>
            <ol>
                <li>Look at the digit in the tens place (not the ones!)</li>
                <li>If it's 0-4: Keep the hundreds digit, change tens and ones to 0</li>
                <li>If it's 5-9: Increase hundreds digit by 1, change tens and ones to 0</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>482 → 500 (tens digit is 8, which is 5 or more)</li>
                <li>326 → 300 (tens digit is 2, which is 4 or less)</li>
                <li>1,260 meters → 1,000 meters (to nearest kilometer)</li>
            </ul>
            <p><strong>Why Round Larger Numbers?</strong></p>
            <ul>
                <li>Makes big numbers easier to understand and compare</li>
                <li>Helps with quick mental calculations</li>
                <li>Useful for communicating approximate quantities</li>
                <li>Helps check if exact calculations are reasonable</li>
            </ul>
            <p><strong>Real-World Applications:</strong></p>
            <ul>
                <li>"About 500 kilometers" instead of "482 kilometers"</li>
                <li>"Around 3,000 people" instead of "3,247 people"</li>
                <li>"Approximately 1,500 meters high" for a mountain</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #4A90E2;"></i> Mountain Height</div>
                <p>Mount X is 1,483 meters high. Rounded to the nearest hundred: 1,500 meters. Rounded to the nearest thousand: 1,000 meters.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-city"></i> Population Example</div>
                <p>A town has 7,892 people. Rounded to nearest hundred: 7,900. Rounded to nearest thousand: 8,000.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Distance Example</div>
                <p>A road trip is 426 kilometers. That's about 400 kilometers (nearest hundred) or about 430 kilometers (nearest ten).</p>
            </div>
        `,
        taskInstructions: "Practice rounding to hundreds and larger units.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Rounding to Hundreds</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Round these numbers to the nearest hundred:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 347 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 682 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 915 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 254 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 550 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Data</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Round these real measurements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Mountain height: 2,843 meters → _______ meters (nearest hundred)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Town population: 15,678 people → _______ people (nearest thousand)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Distance: 1,260 meters → _______ kilometers (nearest kilometer)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. Book pages: 1,432 pages → _______ pages (nearest hundred)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Unit Conversion with Rounding</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the table (remember: 1,000 meters = 1 kilometer):
                    <table style="width: 100%; margin: 10px 0; border-collapse: collapse;">
                        <tr>
                            <th style="border: 1px solid #ccc; padding: 8px;">Exact Distance</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Rounded to Nearest km</th>
                            <th style="border: 1px solid #ccc; padding: 8px;">Good for talking about...</th>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">3,450 meters</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">_______ km</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">850 meters</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">_______ km</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ccc; padding: 8px;">1,780 meters</td>
                            <td style="border: 1px solid #ccc; padding: 8px;">_______ km</td>
                            <td style="border: 1px solid #ccc; padding: 8px;"></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Communication</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why might someone say "about 500 kilometers" instead of "482 kilometers"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 large numbers in the news (populations, distances, etc.). Round each to the nearest hundred and thousand.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Estimation and Rounding",
        subtopic: "Introduction to Rounding Decimals",
        lessonContent: `
            <p>Today we'll learn how to round decimal numbers, which is especially useful with money and measurements.</p>
            <p><strong>Key Concept:</strong> The same "rule of five" applies to decimals! Look at the digit to the right of where you're rounding.</p>
            <p><strong>Why Round Decimals?</strong></p>
            <ul>
                <li>Money: $4.95 is "about 5 dollars"</li>
                <li>Measurements: 15.3 cm is "about 15 cm"</li>
                <li>Simplifying calculations</li>
                <li>Making quick estimates</li>
            </ul>
            <p><strong>Rounding Decimals to Nearest Whole Number:</strong></p>
            <ol>
                <li>Look at the digit in the tenths place (first decimal place)</li>
                <li>If it's 0-4: Keep the whole number the same</li>
                <li>If it's 5-9: Increase the whole number by 1</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>3.2 → 3 (tenths digit is 2, which is less than 5)</li>
                <li>7.8 → 8 (tenths digit is 8, which is 5 or more)</li>
                <li>4.95 dollars → 5 dollars (tenths digit is 9)</li>
            </ul>
            <p><strong>Rounding to First Decimal Place (Tenths):</strong></p>
            <ol>
                <li>Look at the digit in the hundredths place (second decimal)</li>
                <li>If it's 0-4: Keep the tenths digit the same</li>
                <li>If it's 5-9: Increase the tenths digit by 1</li>
            </ol>
            <p><strong>Example:</strong> 2.36 → 2.4 (hundredths digit is 6, which is 5 or more)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave" style="color: #4A90E2;"></i> Money Rounding</div>
                <p>$12.80 rounds to $13 (to nearest dollar). $3.15 rounds to $3 (to nearest dollar).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measurement Example</div>
                <p>A string is 15.3 cm long. That's about 15 cm (to nearest whole cm).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wine-bottle"></i> Liquid Measurement</div>
                <p>A bottle has 1.8 liters of water. That's about 2 liters (to nearest whole liter).</p>
            </div>
        `,
        taskInstructions: "Practice rounding decimals in various contexts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Rounding to Nearest Whole Number</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Round these decimals to the nearest whole number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5.7 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 12.3 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 9.5 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 3.1 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 7.9 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Money Rounding</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Round these prices to the nearest dollar:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. $4.95 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. $12.80 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. $3.15 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. $19.49 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. $7.50 → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measurement Rounding</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Round these measurements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 15.3 cm → _______ cm (nearest whole cm)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 1.8 liters → _______ liters (nearest whole liter)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 2.65 kg → _______ kg (nearest tenth)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 0.73 m → _______ m (nearest tenth)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Decimal Place Understanding</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> When rounding 4.95 to the nearest whole number, which digit do you look at? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What's the difference between rounding 3.49 and 3.51 to the nearest whole number? Explain:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look at 5 items with prices at home. Round each price to the nearest dollar.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Estimation and Rounding",
        subtopic: "Practical Application and Approximation Review",
        lessonContent: `
            <p>Today we'll apply all our estimation and rounding skills to solve a real-world scenario!</p>
            <p><strong>Key Concept:</strong> Estimation helps us make quick decisions and check if exact answers are reasonable.</p>
            <p><strong>The Party Planning Challenge:</strong> You're planning a party and need to estimate costs to stay within budget.</p>
            <p><strong>Why Estimation Matters in Shopping:</strong></p>
            <ul>
                <li>Quickly check if you have enough money</li>
                <li>Compare prices easily</li>
                <li>Avoid surprises at the checkout</li>
                <li>Plan budgets for events</li>
            </ul>
            <p><strong>Steps for Estimation in Shopping:</strong></p>
            <ol>
                <li>Look at each price</li>
                <li>Round to a simpler number (usually nearest dollar)</li>
                <li>Add the rounded numbers mentally</li>
                <li>Compare to your budget</li>
                <li>Calculate exact total to check accuracy</li>
            </ol>
            <p><strong>Review of Rounding Rules:</strong></p>
            <ul>
                <li><strong>Whole numbers:</strong> Look at digit to the right</li>
                <li><strong>Decimals:</strong> Same rule applies!</li>
                <li><strong>Money:</strong> Round to nearest dollar or ten cents</li>
                <li><strong>Measurements:</strong> Round to nearest whole unit</li>
            </ul>
            <p><strong>Real-World Applications:</strong> Grocery shopping, trip planning, time management, resource allocation.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake" style="color: #4A90E2;"></i> Party Budget Example</div>
                <p>Juice: $3.15 (≈ $3) + Cake: $12.80 (≈ $13) + Balloons: $5.45 (≈ $5) = Estimated: $21. Exact: $21.40.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Grocery Example</div>
                <p>Quickly estimate: Bread $2.99 (≈ $3) + Milk $3.49 (≈ $3) + Eggs $4.75 (≈ $5) ≈ $11. You have $15, so you're probably okay.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Estimation</div>
                <p>Party starts at 2:00 PM. Setup: 45 min (≈ 1 hr) + Games: 75 min (≈ 1.5 hr) + Cleanup: 30 min (≈ 0.5 hr) ≈ 3 hours total.</p>
            </div>
        `,
        taskInstructions: "Solve the Party Planning challenge using your estimation skills.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Party Planning Challenge</strong></p>
                <p>You're planning a party with a $50 budget. Here are the items you need:</p>
                <ul>
                    <li>Juice: $3.15</li>
                    <li>Cake: $12.80</li>
                    <li>Balloons: $5.45</li>
                    <li>Chips: $2.99</li>
                    <li>Plates/Napkins: $4.75</li>
                    <li>Decorations: $8.50</li>
                    <li>Ice Cream: $6.25</li>
                </ul>
                <div class="task-item">
                    <span class="task-number">1</span> Estimate the total cost by rounding each item to the nearest dollar:
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">Estimated Total: $_______</div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Based on your estimate, will you stay within your $50 budget? _______
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Now calculate the exact total: $_______
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How close was your estimate? Difference: $_______
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Time Estimation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Estimate the party timeline (round times to nearest 15 minutes):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Setup: 45 minutes → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Games: 75 minutes → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Eating: 40 minutes → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Cleanup: 35 minutes → _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Estimated total party time: _______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Skill Review</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Round 347 to the nearest ten: _______ and nearest hundred: _______
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Round $12.80 to the nearest dollar: _______
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> When would you use estimation instead of exact calculation in real life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> What was the most useful thing you learned about estimation this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a shopping list for a meal. Estimate the total cost by rounding. Then check prices to see how close your estimate was.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek8);
    console.log("grade6-math-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek8);
    console.log("grade6-math-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek8',
        metadata: grade6MathWeek8.metadata,
        days: grade6MathWeek8
    });
    console.log("grade6-math-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek8 = grade6MathWeek8;
console.log("grade6-math-week8.js loaded and registered successfully");