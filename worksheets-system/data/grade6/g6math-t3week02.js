// Grade 6 Mathematics - Term 3 Week 2 Data
const grade6MathWeek2 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 2,
        title: "Decimals: Foundations & Place Value",
        description: "Understanding decimals to 2 places, place value identification, reading and writing decimals, comparing decimals, and real-life applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Decimals to 2 Places",
        lessonContent: `
            <p>Welcome to our exploration of decimals! Today we'll learn how decimals relate to fractions and how to represent them using grids.</p>
            <p><strong>Key Question:</strong> How are decimals related to fractions?</p>
            <p><strong>Introduction:</strong> Decimals are another way to write fractions that have denominators of 10, 100, 1000, and so on. They help us represent parts of a whole!</p>
            <p><strong>Decimal Basics:</strong></p>
            <ul>
                <li><strong>Tenths:</strong> One part out of 10 equal parts (0.1 = 1/10)</li>
                <li><strong>Hundredths:</strong> One part out of 100 equal parts (0.01 = 1/100)</li>
                <li>Decimals to 2 places means numbers like 0.35, 1.27, 4.99</li>
                <li>The decimal point separates the whole number from the fractional part</li>
            </ul>
            <p><strong>Key Facts:</strong></p>
            <ul>
                <li>0.1 = 1/10 (one-tenth)</li>
                <li>0.01 = 1/100 (one-hundredth)</li>
                <li>0.25 = 25/100 = 1/4 (twenty-five hundredths = one quarter)</li>
                <li>0.5 = 5/10 = 1/2 (five-tenths = one half)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-grid"></i> Grid Representation</div>
                <p>A 10x10 grid has 100 small squares. If you shade 35 squares, you've shaded 35/100 or 0.35 of the whole grid!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Fraction Connection</div>
                <p>0.7 means 7 tenths = 7/10. On a grid divided into 10 columns, you shade 7 full columns.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill"></i> Money Connection</div>
                <p>$0.25 is 25 cents, which is 25/100 of a dollar. That's why we call a quarter dollar "twenty-five cents"!</p>
            </div>
        `,
        taskInstructions: "Use grids to relate decimals to fractions with denominators of 10 and 100.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Grid Shading - Tenths</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Shade the grid to show each decimal (each grid has 10 columns = tenths):
                    <div style="margin-top: 10px;">
                        <div><strong>a) 0.3</strong> = 3/10</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div><strong>b) 0.7</strong> = 7/10</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div><strong>c) 0.9</strong> = 9/10</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Grid Shading - Hundredths</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Shade the grid to show each decimal (each grid has 100 squares = hundredths):
                    <div style="margin-top: 10px;">
                        <div><strong>a) 0.25</strong> = 25/100</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div><strong>b) 0.60</strong> = 60/100</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div><strong>c) 0.42</strong> = 42/100</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Write as Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each decimal as a fraction:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.4 = _____</div>
                        <div>b) 0.15 = _____</div>
                        <div>c) 0.99 = _____</div>
                        <div>d) 0.03 = _____</div>
                        <div>e) 0.50 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Write as Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write each fraction as a decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 6/10 = _____</div>
                        <div>b) 23/100 = _____</div>
                        <div>c) 8/100 = _____</div>
                        <div>d) 45/100 = _____</div>
                        <div>e) 1/10 = _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw a 10x10 grid. Shade 0.35, 0.08, and 0.70. Write each as a fraction.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Place Value Identification",
        lessonContent: `
            <p>Today we'll learn to identify tenths and hundredths in decimal numbers and understand their values!</p>
            <p><strong>Key Question:</strong> Why is 0.5 larger than 0.05 even though both have a 5?</p>
            <p><strong>Decimal Place Value Chart:</strong></p>
            <ul>
                <li><strong>Tenths:</strong> The first digit after the decimal point (represents parts of 10)</li>
                <li><strong>Hundredths:</strong> The second digit after the decimal point (represents parts of 100)</li>
            </ul>
            <p><strong>Place Value Example:</strong> 0.58</p>
            <ul>
                <li>5 is in the <strong>tenths</strong> place → means 5/10 or 0.5</li>
                <li>8 is in the <strong>hundredths</strong> place → means 8/100 or 0.08</li>
                <li>Overall, 0.58 = 5/10 + 8/100 = 50/100 + 8/100 = 58/100</li>
            </ul>
            <p><strong>Understanding Magnitude:</strong></p>
            <ul>
                <li>0.5 = 5/10 = 50/100</li>
                <li>0.05 = 5/100</li>
                <li>50/100 is greater than 5/100, so 0.5 > 0.05</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Visual Comparison</div>
                <p>Imagine two grids: 0.5 shades 50 out of 100 squares (half the grid). 0.05 shades only 5 out of 100 squares (a tiny part). Half is much larger!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Place Value Power</div>
                <p>The position of a digit changes its value. In 0.35, the 3 is tenths (worth 0.3). In 0.035, the 3 is hundredths (worth 0.03). Same digit, different value!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Coin Comparison</div>
                <p>0.5 of a dollar is 50¢ (two quarters). 0.05 of a dollar is 5¢ (one nickel). You'd rather have 50¢ than 5¢!</p>
            </div>
        `,
        taskInstructions: "Identify place values and compare decimal magnitudes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identify the Place Value</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Tell whether the underlined digit is in the tenths or hundredths place:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.<u>7</u>3 → _________</div>
                        <div>b) 0.2<u>5</u> → _________</div>
                        <div>c) 0.<u>0</u>9 → _________</div>
                        <div>d) 0.4<u>2</u> → _________</div>
                        <div>e) 0.<u>1</u>5 → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What is the Value?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the value of the underlined digit (as a fraction):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.<u>4</u>7 → _________</div>
                        <div>b) 0.8<u>2</u> → _________</div>
                        <div>c) <u>0</u>.35 → _________</div>
                        <div>d) 0.5<u>9</u> → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparing Magnitudes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the larger number in each pair. Explain why in the space below.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.5 or 0.05</div>
                        <div>b) 0.3 or 0.13</div>
                        <div>c) 0.09 or 0.1</div>
                        <div>d) 0.75 or 0.8</div>
                        <div>e) 0.04 or 0.40</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Explain your reasoning for one pair above:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fill in the Table</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the place value table:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Decimal</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tenths Digit</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hundredths Digit</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Value of Tenths</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Value of Hundredths</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">0.46</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">0.82</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">0.07</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Write five decimal numbers. For each, identify the tenths digit and hundredths digit. Then write the value of each digit as a fraction.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Reading and Writing Decimals",
        lessonContent: `
            <p>Today we'll practice reading decimal numbers from word form and writing them correctly!</p>
            <p><strong>Key Question:</strong> How do you write "four and seven hundredths" as a decimal?</p>
            <p><strong>Reading Decimals Rules:</strong></p>
            <ul>
                <li>Read the whole number part (before the decimal point)</li>
                <li>Say "and" for the decimal point</li>
                <li>Read the decimal part as if it were a whole number</li>
                <li>Say the place value of the last digit (tenths or hundredths)</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>0.5 → "five tenths" (no whole number part)</li>
                <li>0.25 → "twenty-five hundredths"</li>
                <li>3.7 → "three and seven tenths"</li>
                <li>4.07 → "four and seven hundredths" (Note the zero!)</li>
                <li>15.63 → "fifteen and sixty-three hundredths"</li>
            </ul>
            <p><strong>Important Note:</strong> When writing decimals from word form, use a zero as a placeholder if needed! "Four and seven hundredths" = 4.07 (not 4.7).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistake</div>
                <p>"Four and seven hundredths" is 4.07, NOT 4.7. 4.7 is "four and seven tenths." The hundredths place needs two digits!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen"></i> Placeholder Zero</div>
                <p>When writing "six and two hundredths," we write 6.02. The zero in the tenths place shows there are no tenths.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up"></i> Reading Practice</div>
                <p>0.09 is "nine hundredths" (not "zero point zero nine"). 0.90 is "ninety hundredths" or "nine tenths" (0.9).</p>
            </div>
        `,
        taskInstructions: "Convert between word form and decimal form.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write as Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each word form as a decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) five tenths = _____</div>
                        <div>b) three and twenty-five hundredths = _____</div>
                        <div>c) seven and four hundredths = _____</div>
                        <div>d) twelve and eight tenths = _____</div>
                        <div>e) nine and two hundredths = _____</div>
                        <div>f) forty-five hundredths = _____</div>
                        <div>g) six and nine tenths = _____</div>
                        <div>h) one and three hundredths = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write in Word Form</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each decimal in word form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.8 = _________________________________</div>
                        <div>b) 0.35 = _________________________________</div>
                        <div>c) 5.12 = _________________________________</div>
                        <div>d) 2.09 = _________________________________</div>
                        <div>e) 0.04 = _________________________________</div>
                        <div>f) 10.55 = _________________________________</div>
                        <div>g) 1.01 = _________________________________</div>
                        <div>h) 7.60 = _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spot the Mistake</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Each sentence has a mistake. Correct it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) "Four and six hundredths" was written as 4.6 → Correct: _____</div>
                        <div>b) "Eight tenths" was written as 0.08 → Correct: _____</div>
                        <div>c) "Two and five hundredths" was written as 2.5 → Correct: _____</div>
                        <div>d) "0.30" was read as "thirty hundredths" → Correct reading: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write a decimal that matches this description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"A number with 5 tenths, 2 hundredths, and a whole number part of 8" → _____</div>
                        <div>"A number with no whole number part, 0 tenths, and 7 hundredths" → _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write five decimals of your own. Write each one in word form. Then ask a family member to read them back to you.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Comparing Decimals",
        lessonContent: `
            <p>Today we'll learn how to compare decimals and arrange them from smallest to largest!</p>
            <p><strong>Key Question:</strong> How do you know which decimal is larger when they have different numbers of digits?</p>
            <p><strong>Comparing Decimals Strategy:</strong></p>
            <ol>
                <li>Line up the decimal points</li>
                <li>Add placeholder zeros so all numbers have the same number of decimal places</li>
                <li>Compare from left to right (starting with the largest place value)</li>
                <li>The first place where digits differ tells you which is larger</li>
            </ol>
            <p><strong>Step-by-Step Example:</strong> Compare 0.3 and 0.28</p>
            <ul>
                <li>Add a zero: 0.30 and 0.28</li>
                <li>Compare tenths: 3 vs 2 → 3 is larger</li>
                <li>So 0.3 > 0.28 (0.30 is greater than 0.28)</li>
            </ul>
            <p><strong>Ordering from Smallest to Largest:</strong></p>
            <ul>
                <li>Use the same comparison method</li>
                <li>Arrange in ascending order (smallest to largest)</li>
                <li>Use < (less than) and > (greater than) symbols</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle"></i> Placeholder Zeros</div>
                <p>To compare 0.5 and 0.45, add a zero: 0.50 and 0.45. Now compare: 5 tenths vs 4 tenths → 0.5 > 0.45.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Ordering Practice</div>
                <p>Order: 0.7, 0.07, 0.70, 0.17. Add zeros: 0.70, 0.07, 0.70, 0.17 → Sorted: 0.07, 0.17, 0.70, 0.70</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Thinking</div>
                <p>On a number line from 0 to 1, numbers with more tenths are further to the right. 0.4 is to the right of 0.35!</p>
            </div>
        `,
        taskInstructions: "Use placeholder zeros to compare and order decimals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Compare Using <, >, or =</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the correct symbol (<, >, or =):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.4 ___ 0.39</div>
                        <div>b) 0.25 ___ 0.3</div>
                        <div>c) 0.7 ___ 0.70</div>
                        <div>d) 0.08 ___ 0.1</div>
                        <div>e) 0.55 ___ 0.5</div>
                        <div>f) 0.99 ___ 1.0</div>
                        <div>g) 0.03 ___ 0.30</div>
                        <div>h) 1.25 ___ 1.3</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Show Your Work</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each pair, add placeholder zeros and then compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.6 and 0.58 → with zeros: _____ and _____ → 0.6 ___ 0.58</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) 0.3 and 0.32 → with zeros: _____ and _____ → 0.3 ___ 0.32</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) 0.05 and 0.5 → with zeros: _____ and _____ → 0.05 ___ 0.5</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Order from Smallest to Largest</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange each set in ascending order (smallest to largest):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.45, 0.5, 0.43, 0.48 → _________________________________</div>
                        <div>b) 0.09, 0.9, 0.19, 0.91 → _________________________________</div>
                        <div>c) 0.75, 0.7, 0.77, 0.07 → _________________________________</div>
                        <div>d) 1.2, 1.02, 1.22, 1.20 → _________________________________</div>
                        <div>e) 0.33, 0.3, 0.03, 0.303 → _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Which is Larger?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the larger amount in each real-life scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0.5 L of water or 0.45 L of water</div>
                        <div>b) 0.75 kg of flour or 0.7 kg of flour</div>
                        <div>c) 0.09 m of ribbon or 0.1 m of ribbon</div>
                        <div>d) 0.99 cm or 0.9 cm</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 decimal numbers around your home (on food packages, price tags, or measuring tools). Arrange them from smallest to largest.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Decimals",
        subtopic: "Decimals in Life Situations",
        lessonContent: `
            <p>Today we'll discover how decimals appear in everyday life, especially in shopping (money) and sports (timing)!</p>
            <p><strong>Key Question:</strong> Where do you see decimals in your daily life?</p>
            <p><strong>Decimals in Money:</strong></p>
            <ul>
                <li>Money amounts are always written with two decimal places (dollars and cents)</li>
                <li>$5.99 means 5 dollars and 99 cents (5 + 99/100)</li>
                <li>The decimal point separates dollars from cents</li>
                <li>Examples: $0.50 (50 cents), $1.25 (one dollar and twenty-five cents), $10.05 (ten dollars and five cents)</li>
            </ul>
            <p><strong>Decimals in Sports Timing:</strong></p>
            <ul>
                <li>Race times are measured in seconds with decimals (hundredths of a second)</li>
                <li>Example: 9.58 seconds (Usain Bolt's 100m world record)</li>
                <li>Hundredths of a second can determine who wins a race!</li>
                <li>Examples: Swimming times (1:35.27), running times (4.03 seconds to 1st base)</li>
            </ul>
            <p><strong>Other Real-Life Uses:</strong></p>
            <ul>
                <li>Measurements (1.75 meters tall, 2.5 liters of juice)</li>
                <li>Gas prices ($3.459 per gallon)</li>
                <li>Weather (98.6°F body temperature, 0.5 inches of rain)</li>
                <li>Grades (92.5% on a test)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Scenario</div>
                <p>A shirt costs $24.99. You have $25.00. Do you have enough? Yes, because 25.00 is greater than 24.99 by just one cent!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> Close Race</div>
                <p>In swimming, first place: 51.23 seconds, second place: 51.29 seconds. The winner won by only 6 hundredths of a second!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Olympic Records</div>
                <p>Usain Bolt's 100m record: 9.58 seconds. Second fastest: 9.63 seconds. Compare: 9.58 < 9.63, so 9.58 is faster (smaller time wins).</p>
            </div>
        `,
        taskInstructions: "Identify and work with decimals in money and sports contexts.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shopping with Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Answer these money questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A candy bar costs $1.49. You pay with $2.00. How much change do you get? $_____</div>
                        <div>b) Which is more expensive: $3.99 or $4.00? _________</div>
                        <div>c) You buy a pencil for $0.75 and an eraser for $0.50. What is the total cost? $_____</div>
                        <div>d) A notebook costs $2.99. You have $3.00. Is that enough? _________</div>
                        <div>e) Write $10 and 5 cents as a decimal: $_____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sports Timing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Compare these race times (smaller time = faster/better):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Runner A: 12.45 seconds, Runner B: 12.54 seconds → Who won? _________</div>
                        <div>b) Swimmer 1: 55.08 seconds, Swimmer 2: 54.99 seconds → Who won? _________</div>
                        <div>c) 100m race times: 10.05, 10.50, 9.99, 10.25 → Order from 1st to 4th place:</div>
                        <div>1st: _____, 2nd: _____, 3rd: _____, 4th: _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-Life Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve each problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A recipe calls for 1.5 cups of flour. You only have 1.25 cups. How much more do you need? _____ cups</div>
                        <div>b) Your temperature is 97.8°F. Normal is 98.6°F. Are you above or below normal? _________</div>
                        <div>c) Gas station A: $3.49 per gallon. Gas station B: $3.55 per gallon. Which is cheaper? _________</div>
                        <div>d) You scored 85.5% on a test. Your friend scored 85.05%. Who scored higher? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Find Decimals Around You</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> List three places where you see decimals in your daily life (not from this lesson):
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to understand decimal place value when handling money?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Go shopping with a family member or look at a receipt. Find three prices that include decimals. Write each price and explain what the digits mean (e.g., $5.99 = 5 dollars and 99 hundredths of a dollar).",
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