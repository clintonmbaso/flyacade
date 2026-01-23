// Grade 4 Math - Week 9 Data
const grade4MathWeek9 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 9,
        title: "Understanding Decimals and Place Value",
        description: "Relating decimals to fractions, understanding place value, reading/writing decimals, and applying decimals in real-life situations"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Understanding Decimals and Place Value",
        subtopic: "Relating Decimals to Common Fractions",
        lessonContent: `
            <p>Welcome to our exploration of decimals! This week we will learn how decimals relate to fractions and how to use them in everyday life.</p>
            <p><strong>Key Concept:</strong> Decimals are another way to write fractions with denominators of 10, 100, 1000, etc.</p>
            <p><strong>Why Are Decimals Important?</strong></p>
            <ul>
                <li>They help us write parts of a whole in a simple way</li>
                <li>They are used with money (dollars and cents)</li>
                <li>They help us measure things precisely (like length or weight)</li>
                <li>They make calculations with fractions easier</li>
            </ul>
            <p><strong>Decimal Basics:</strong></p>
            <ul>
                <li>The decimal point (.) separates whole numbers from parts of a whole</li>
                <li>Numbers to the right of the decimal point show parts of one whole</li>
                <li>0.1 means "one tenth" (1/10)</li>
                <li>0.01 means "one hundredth" (1/100)</li>
            </ul>
            <p><strong>Using Tenths and Hundredths Grids:</strong></p>
            <ol>
                <li>A tenths grid has 10 equal parts - each part is 1/10 or 0.1</li>
                <li>A hundredths grid has 100 equal parts - each part is 1/100 or 0.01</li>
                <li>Shading parts helps us visualize the decimal</li>
                <li>We can write the same amount as a fraction AND as a decimal</li>
            </ol>
            <p><strong>Example:</strong> If we shade 3 parts of a tenths grid, we have 3/10 = 0.3</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th" style="color: #4A90E2;"></i> Grid Example</div>
                <p>Shading 30 squares on a 100-grid shows 30/100 = 0.30. Both represent thirty hundredths.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Fraction to Decimal</div>
                <p>5/10 = 0.5 (five tenths), 7/100 = 0.07 (seven hundredths), 25/100 = 0.25 (twenty-five hundredths).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Important Note</div>
                <p>0.3 is the same as 0.30! Adding a zero at the end of a decimal doesn't change its value, just like with whole numbers.</p>
            </div>
        `,
        taskInstructions: "Practice relating decimals to fractions by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Shade the grids to show each decimal, then write it as a fraction:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 0.4</div>
                    <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc; background: repeating-linear-gradient(0deg, transparent, transparent 19px, #f0f0f0 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #f0f0f0 20px);"></div>
                    <div style="margin-top: 5px;">Fraction: <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div>/10</div>
                    
                    <div style="margin-top: 15px;">b. 0.25</div>
                    <div class="drawing-area" style="height: 100px; margin-top: 5px; border: 2px dashed #ccc; background: repeating-linear-gradient(0deg, transparent, transparent 9px, #f0f0f0 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, #f0f0f0 10px);"></div>
                    <div style="margin-top: 5px;">Fraction: <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div>/100</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match each fraction to its decimal equivalent:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 3/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 15/100 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>c. 8/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>d. 50/100 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>e. 9/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Complete the table:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <table border="1" style="border-collapse: collapse; width: 80%;">
                        <tr>
                            <th style="padding: 8px;">Fraction</th>
                            <th style="padding: 8px;">Decimal</th>
                            <th style="padding: 8px;">Words</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px;">7/10</td>
                            <td style="padding: 8px;"><div style="display: inline-block; width: 40px; height: 25px; border-bottom: 1px solid #000;"></div></td>
                            <td style="padding: 8px;"><div style="display: inline-block; width: 120px; height: 25px; border-bottom: 1px solid #000;"></div></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;">32/100</td>
                            <td style="padding: 8px;"><div style="display: inline-block; width: 40px; height: 25px; border-bottom: 1px solid #000;"></div></td>
                            <td style="padding: 8px;"><div style="display: inline-block; width: 120px; height: 25px; border-bottom: 1px solid #000;"></div></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px;"> </td>
                            <td style="padding: 8px;">0.05</td>
                            <td style="padding: 8px;">five hundredths</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain in your own words how decimals and fractions are related:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 5 things at home that could be measured using tenths or hundredths (like 0.5 liters of juice). Write them down.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Understanding Decimals and Place Value",
        subtopic: "Exploring Place Value in Decimals",
        lessonContent: `
            <p>Today we will learn about place value in decimal numbers. Just like whole numbers have place values (ones, tens, hundreds), decimals have place values too!</p>
            <p><strong>Decimal Place Value Chart:</strong></p>
            <p>Let's extend our place value knowledge to include decimal places:</p>
            <ul>
                <li><strong>Decimal Point:</strong> The dot that separates whole numbers from parts</li>
                <li><strong>Tenths (0.1):</strong> First digit after the decimal point = 1/10</li>
                <li><strong>Hundredths (0.01):</strong> Second digit after the decimal point = 1/100</li>
            </ul>
            <p><strong>Example Chart for 14.25:</strong></p>
            <div style="text-align: center; margin: 15px 0;">
                <table border="1" style="border-collapse: collapse; display: inline-block;">
                    <tr>
                        <td style="padding: 10px; background: #f0f0f0;">Tens</td>
                        <td style="padding: 10px; background: #f0f0f0;">Ones</td>
                        <td style="padding: 10px; background: #e0e0e0;">Decimal Point</td>
                        <td style="padding: 10px; background: #f0f0f0;">Tenths</td>
                        <td style="padding: 10px; background: #f0f0f0;">Hundredths</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">1</td>
                        <td style="padding: 10px;">4</td>
                        <td style="padding: 10px;">.</td>
                        <td style="padding: 10px;">2</td>
                        <td style="padding: 10px;">5</td>
                    </tr>
                </table>
            </div>
            <p>This means: 1 ten + 4 ones + 2 tenths + 5 hundredths</p>
            <p><strong>Understanding Each Place:</strong></p>
            <ul>
                <li>The '2' in 14.25 represents 2 tenths (2/10 or 0.2)</li>
                <li>The '5' represents 5 hundredths (5/100 or 0.05)</li>
                <li>Together: 0.2 + 0.05 = 0.25</li>
            </ul>
            <p><strong>Why Place Value Matters:</strong></p>
            <ul>
                <li>It helps us read and write decimals correctly</li>
                <li>It's essential for comparing decimals (0.3 is greater than 0.03)</li>
                <li>It helps with addition and subtraction of decimals</li>
                <li>It ensures accuracy in measurements and money calculations</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table" style="color: #4A90E2;"></i> Place Value Example</div>
                <p>In 3.78: 3 is in the ones place, 7 is in the tenths place (7/10), 8 is in the hundredths place (8/100).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compress-alt"></i> Comparing Decimals</div>
                <p>0.7 (7 tenths) is greater than 0.07 (7 hundredths) because tenths are bigger than hundredths.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistake</div>
                <p>0.5 means five tenths (5/10), NOT five hundredths! The place value of the digit matters.</p>
            </div>
        `,
        taskInstructions: "Practice identifying place values in decimal numbers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Place Value Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify the place value of the underlined digit:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.<u>7</u> = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> place</div>
                        <div>b. 1.4<u>8</u> = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> place</div>
                        <div>c. 3.<u>2</u>5 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> place</div>
                        <div>d. 0.<u>0</u>9 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> place</div>
                        <div>e. 12.<u>3</u>0 = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> place</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating Place Value Charts</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the place value chart for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7.34</div>
                        <table border="1" style="border-collapse: collapse; width: 90%; margin: 10px 0;">
                            <tr>
                                <td style="padding: 8px; width: 20%;">Ones</td>
                                <td style="padding: 8px; width: 20%;">Decimal Point</td>
                                <td style="padding: 8px; width: 20%;">Tenths</td>
                                <td style="padding: 8px; width: 20%;">Hundredths</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                                <td style="padding: 8px;">.</td>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 15px;">b. 0.59</div>
                        <table border="1" style="border-collapse: collapse; width: 90%; margin: 10px 0;">
                            <tr>
                                <td style="padding: 8px; width: 20%;">Ones</td>
                                <td style="padding: 8px; width: 20%;">Decimal Point</td>
                                <td style="padding: 8px; width: 20%;">Tenths</td>
                                <td style="padding: 8px; width: 20%;">Hundredths</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                                <td style="padding: 8px;">.</td>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                                <td style="padding: 8px;"><div style="height: 25px;"></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Breaking Down Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each decimal as a sum of its place values:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2.46 = <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> ones + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> tenths + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> hundredths</div>
                        <div>b. 0.83 = <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> ones + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> tenths + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> hundredths</div>
                        <div>c. 5.07 = <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> ones + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> tenths + <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> hundredths</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which is greater: 0.6 or 0.60? Explain your thinking:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why do we need a decimal point? What would happen if we wrote numbers without it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own decimal number between 0 and 10 with two decimal places. Draw its place value chart.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Understanding Decimals and Place Value",
        subtopic: "Reading and Writing Decimals",
        lessonContent: `
            <p>Today we will learn how to properly read and write decimal numbers. Correct decimal language helps us communicate clearly about measurements, money, and data.</p>
            <p><strong>How to Read Decimals:</strong></p>
            <p>There are two main ways to read decimals:</p>
            <ol>
                <li><strong>Digit-by-digit:</strong> Read each digit after the decimal point individually</li>
                <li><strong>Fraction form:</strong> Read the decimal as a fraction with denominator 10 or 100</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>0.45 = "zero point four five" OR "forty-five hundredths"</li>
                <li>3.7 = "three point seven" OR "three and seven tenths"</li>
                <li>12.09 = "twelve point zero nine" OR "twelve and nine hundredths"</li>
            </ul>
            <p><strong>Important Rules for Reading Decimals:</strong></p>
            <ul>
                <li>Read the whole number part normally (if there is one)</li>
                <li>Say "point" for the decimal point</li>
                <li>Read each digit after the point individually (not as a whole number!)</li>
                <li>OR: Read it as a fraction with the correct denominator</li>
            </ul>
            <p><strong>Writing Decimals from Words:</strong></p>
            <ul>
                <li>"Five and three tenths" = 5.3</li>
                <li>"Twenty-eight hundredths" = 0.28</li>
                <li>"Zero point six seven" = 0.67</li>
            </ul>
            <p><strong>Common Mistakes to Avoid:</strong></p>
            <ul>
                <li>Don't say "zero point forty-five" for 0.45 (say "zero point four five")</li>
                <li>Don't forget the "and" when reading mixed numbers (3.5 = "three and five tenths")</li>
                <li>Don't say "point" before reading the whole number part</li>
            </ul>
            <p><strong>Practice Tip:</strong> Think of money! $1.50 = "one dollar and fifty cents" = "one and fifty hundredths"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-volume-up" style="color: #4A90E2;"></i> Reading Examples</div>
                <p>0.09 = "zero point zero nine" or "nine hundredths"<br>
                4.25 = "four point two five" or "four and twenty-five hundredths"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-edit"></i> Writing Examples</div>
                <p>"Seven and eight tenths" = 7.8<br>
                "Thirty-three hundredths" = 0.33<br>
                "Two point zero four" = 2.04</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Money Connection</div>
                <p>$0.75 = "seventy-five cents" = "seventy-five hundredths of a dollar" = 0.75</p>
            </div>
        `,
        taskInstructions: "Practice reading and writing decimals by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write two different ways to read each decimal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 0.3</div>
                        <div style="margin-left: 20px;">1. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div style="margin-left: 20px;">2. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        
                        <div style="margin-top: 10px;">b. 2.45</div>
                        <div style="margin-left: 20px;">1. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div style="margin-left: 20px;">2. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        
                        <div style="margin-top: 10px;">c. 0.08</div>
                        <div style="margin-left: 20px;">1. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div style="margin-left: 20px;">2. <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Decimals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each spoken phrase as a decimal number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. three and twelve hundredths = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. zero point four nine = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. seven tenths = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. fifteen hundredths = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>e. one and eight tenths = <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Partner Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Work with a partner (or imagine one):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Read 0.09 aloud to your partner:</div>
                        <div style="margin-left: 20px;">I said: "<div style="display: inline-block; width: 120px; height: 30px; border-bottom: 1px solid #000;"></div>"</div>
                        
                        <div style="margin-top: 10px;">b. Have your partner read 1.23 aloud:</div>
                        <div style="margin-left: 20px;">They said: "<div style="display: inline-block; width: 120px; height: 30px; border-bottom: 1px solid #000;"></div>"</div>
                        
                        <div style="margin-top: 10px;">c. Write what you hear when your partner says "two point seven five":</div>
                        <div style="margin-left: 20px;">I wrote: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Decimal Stories</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a short story using at least 3 different decimal numbers. Write how you would read them:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 decimal numbers in a newspaper, magazine, or online. Write them down and practice reading them aloud.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding Decimals and Place Value",
        subtopic: "Decimals in Life Situations (Money and Measurement)",
        lessonContent: `
            <p>Today we will apply our decimal knowledge to real-life situations! Decimals are everywhere—in money, measurements, sports statistics, and more.</p>
            <p><strong>Decimals with Money:</strong></p>
            <ul>
                <li>Dollars and cents use decimal notation</li>
                <li>$1.50 = 1 dollar and 50 cents</li>
                <li>The decimal point separates dollars (whole) from cents (parts)</li>
                <li>100 cents = $1.00 (one whole dollar)</li>
                <li>25 cents = $0.25 (twenty-five hundredths of a dollar)</li>
            </ul>
            <p><strong>Grocery Store Examples:</strong></p>
            <ul>
                <li>Apple: $0.75 each (seventy-five cents)</li>
                <li>Milk: $3.50 (three dollars and fifty cents)</li>
                <li>Bread: $2.99 (two dollars and ninety-nine cents)</li>
            </ul>
            <p><strong>Decimals with Measurement:</strong></p>
            <ul>
                <li>Metric rulers show centimeters and millimeters</li>
                <li>1 centimeter = 10 millimeters</li>
                <li>3.5 cm = 3 centimeters and 5 millimeters</li>
                <li>0.7 cm = 7 millimeters</li>
            </ul>
            <p><strong>Other Real-Life Decimal Uses:</strong></p>
            <ul>
                <li><strong>Sports:</strong> Batting averages (0.325), race times (9.58 seconds)</li>
                <li><strong>Weather:</strong> Temperature (98.6°F), rainfall (1.25 inches)</li>
                <li><strong>Cooking:</strong> Measurements (0.5 teaspoon, 1.25 cups)</li>
                <li><strong>Health:</strong> Height (1.45 meters), weight (36.2 kg)</li>
            </ul>
            <p><strong>Why This Matters:</strong></p>
            <p>Understanding decimals helps us:</p>
            <ul>
                <li>Handle money correctly when shopping</li>
                <li>Measure ingredients for recipes accurately</li>
                <li>Understand sports statistics and weather reports</li>
                <li>Compare prices and measurements</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart" style="color: #4A90E2;"></i> Grocery Store</div>
                <p>$1.50 = 1 dollar + 50/100 of a dollar<br>
                $0.75 = 75/100 of a dollar = ¾ of a dollar</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Ruler Measurement</div>
                <p>3.5 cm = 3 whole centimeters + 0.5 cm (5 mm)<br>
                0.8 cm = 8 mm (eight tenths of a centimeter)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baseball-ball"></i> Sports Statistics</div>
                <p>A batting average of 0.350 means the player gets a hit 35% of the time (350/1000).</p>
            </div>
        `,
        taskInstructions: "Apply your decimal knowledge to solve real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Money Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these shopping problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. An apple costs $0.75. How would you read this price aloud?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. Milk costs $3.50 and bread costs $2.25. What is the total cost?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. You have $5.00. Can you buy juice for $2.75 and cookies for $1.50? Show your thinking.</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measurement Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these measurement problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A pencil is 14.5 cm long. How many millimeters is this? (Remember: 1 cm = 10 mm)</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A ribbon measures 0.8 meters. How many centimeters is this? (1 m = 100 cm)</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. Draw a line that is 5.3 cm long on the ruler below:</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc; background: linear-gradient(to right, white 0%, white 100%); position: relative;">
                            <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; border-bottom: 2px solid #000;"></div>
                            <div style="position: absolute; left: 0; top: 30px; width: 100%;">
                                <span style="position: absolute; left: 0;">0</span>
                                <span style="position: absolute; left: 20%;">1</span>
                                <span style="position: absolute; left: 40%;">2</span>
                                <span style="position: absolute; left: 60%;">3</span>
                                <span style="position: absolute; left: 80%;">4</span>
                                <span style="position: absolute; left: 100%;">5</span>
                                <span style="position: absolute; left: 106%;">cm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Kitchen Application</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three items you can find in a kitchen that might be measured or priced using decimals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div> (How is it measured/priced?)</div>
                        <div style="margin-left: 20px; margin-top: 5px;"><div style="display: inline-block; width: 250px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        
                        <div style="margin-top: 10px;">2. <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div> (How is it measured/priced?)</div>
                        <div style="margin-left: 20px; margin-top: 5px;"><div style="display: inline-block; width: 250px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        
                        <div style="margin-top: 10px;">3. <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div> (How is it measured/priced?)</div>
                        <div style="margin-left: 20px; margin-top: 5px;"><div style="display: inline-block; width: 250px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look around your classroom or home. Find and describe two examples of decimals being used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example 1: <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div style="margin-left: 20px; margin-top: 5px;">Decimal used: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> Purpose: <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        
                        <div style="margin-top: 10px;">Example 2: <div style="display: inline-block; width: 200px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div style="margin-left: 20px; margin-top: 5px;">Decimal used: <div style="display: inline-block; width: 80px; height: 30px; border-bottom: 1px solid #000;"></div> Purpose: <div style="display: inline-block; width: 150px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of how decimals are used in everyday life. Write a sentence about each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek9);
    console.log("grade4-math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek9);
    console.log("grade4-math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek9',
        metadata: grade4MathWeek9.metadata,
        days: grade4MathWeek9
    });
    console.log("grade4-math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek9 = grade4MathWeek9;
console.log("grade4-math-week9.js loaded and registered successfully");