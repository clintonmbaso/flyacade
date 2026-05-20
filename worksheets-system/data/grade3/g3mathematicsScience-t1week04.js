// Grade 3 Mathematics & Science - Term 1 Week 4 Data
const grade3MathsScienceWeek4 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 4,
        title: "Whole Numbers (Up to 99,999)",
        description: "Reading, writing, and understanding place value of 5-digit numbers up to 99,999"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Whole Numbers",
        subtopic: "Reading and Writing Numbers Up to 99,999",
        lessonContent: `
            <p>Welcome to our week on big numbers! Today we'll learn how to read and write numbers up to 99,999.</p>
            <p><strong>Key Question:</strong> How do we read a number like 54,321?</p>
            <p><strong>Introduction:</strong> Numbers can be very large! Today we will learn numbers with five digits. The largest five-digit number is 99,999.</p>
            <p><strong>How to Read Large Numbers:</strong></p>
            <ol>
                <li>Look at the comma - it separates thousands from hundreds</li>
                <li>Read the number before the comma as "thousands"</li>
                <li>Read the number after the comma as "hundreds, tens, ones"</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>12,345 = "twelve thousand, three hundred forty-five"</li>
                <li>50,000 = "fifty thousand"</li>
                <li>80,007 = "eighty thousand seven"</li>
                <li>99,999 = "ninety-nine thousand, nine hundred ninety-nine"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Real World Example</div>
                <p>A new car might cost $32,500. We read this as "thirty-two thousand, five hundred dollars."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Population Example</div>
                <p>A small town might have 12,847 people. We read this as "twelve thousand, eight hundred forty-seven people."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> House Numbers</div>
                <p>Some street addresses go up to 99,999! That's a lot of houses on one street.</p>
            </div>
        `,
        taskInstructions: "Practice reading and writing numbers up to 99,999.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each number aloud, then write it in words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 23,456 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) 67,890 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c) 45,001 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d) 80,202 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>e) 99,999 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Numerals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each number in numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) thirty-four thousand, five hundred sixty-two = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) seventy-one thousand, eight hundred = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c) forty thousand, three hundred nine = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d) ninety thousand, twenty = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>e) fifty-five thousand, five hundred fifty-five = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write any 5-digit number and have a partner read it aloud:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 large numbers at home (on food packages, mail, or appliances). Write each number in words.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Whole Numbers",
        subtopic: "Place Value Up to 5-Digit Numbers",
        lessonContent: `
            <p>Today we'll learn about place value in 5-digit numbers!</p>
            <p><strong>Key Question:</strong> What does each digit in 45,321 represent?</p>
            <p><strong>Place Value Chart - Up to 5 Digits:</strong></p>
            <div style="background-color: #f0f8ff; padding: 15px; border-radius: 10px; text-align: center;">
                <div style="display: flex; justify-content: space-around; font-weight: bold;">
                    <div>Ten-Thousands</div>
                    <div>Thousands</div>
                    <div>Hundreds</div>
                    <div>Tens</div>
                    <div>Ones</div>
                </div>
                <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                    <div>10,000</div>
                    <div>1,000</div>
                    <div>100</div>
                    <div>10</div>
                    <div>1</div>
                </div>
            </div>
            <p><strong>Example: 45,321</strong></p>
            <ul>
                <li>4 is in the Ten-Thousands place = 40,000</li>
                <li>5 is in the Thousands place = 5,000</li>
                <li>3 is in the Hundreds place = 300</li>
                <li>2 is in the Tens place = 20</li>
                <li>1 is in the Ones place = 1</li>
            </ul>
            <p><strong>Remember:</strong> The comma separates thousands from hundreds!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Place Value Chart</div>
                <p>Draw a place value chart with 5 columns: Ten-Thousands | Thousands | Hundreds | Tens | Ones</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Money Connection</div>
                <p>$67,890 means 6 ten-thousand dollar bills, 7 thousand dollar bills, 8 hundred dollar bills, 9 ten dollar bills, and 0 one dollar bills!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Zero as a Placeholder</div>
                <p>In 80,007, the zeros tell us there are no thousands, no hundreds, and no tens - just eighty thousand and seven!</p>
            </div>
        `,
        taskInstructions: "Identify place values of digits in 5-digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Place Value</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For the number 73,892:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What digit is in the Ten-Thousands place? _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b) What digit is in the Hundreds place? _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c) What is the value of the digit 3? _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d) What is the value of the digit 8? _________</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the place value chart for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Number</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Ten-Thousands</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Thousands</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hundreds</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tens</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Ones</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">52,146</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">90,003</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">68,470</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a 5-digit number and identify each digit's place value:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Write down the house numbers of 5 friends or family members. Identify the place value of each digit.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Whole Numbers",
        subtopic: "Expanded Notation (5-Digit Numbers)",
        lessonContent: `
            <p>Today we'll learn how to write 5-digit numbers in expanded notation!</p>
            <p><strong>Key Question:</strong> How can we break apart a number like 47,382 to show its value?</p>
            <p><strong>What is Expanded Notation?</strong></p>
            <p>Expanded notation shows a number as the sum of each digit's value based on its place.</p>
            <p><strong>Example 1: 47,382</strong></p>
            <p>= 40,000 + 7,000 + 300 + 80 + 2</p>
            <p><strong>Example 2: 90,105</strong></p>
            <p>= 90,000 + 0 + 100 + 0 + 5</p>
            <p><strong>Example 3: 53,060</strong></p>
            <p>= 50,000 + 3,000 + 0 + 60 + 0</p>
            <p><strong>With Words:</strong> "forty-seven thousand, three hundred eighty-two" = 40,000 + 7,000 + 300 + 80 + 2</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Expanded Form as a Puzzle</div>
                <p>Think of expanded notation like taking a number apart into its pieces, just like a puzzle! 60,000 + 3,000 + 200 + 10 + 5 = 63,215.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-money-bill-wave"></i> Money Example</div>
                <p>$84,276 = $80,000 + $4,000 + $200 + $70 + $6. Each bill represents a place value!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Check Your Work</div>
                <p>After writing expanded notation, add it up to make sure you get back to the original number!</p>
            </div>
        `,
        taskInstructions: "Convert 5-digit numbers to and from expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write in Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each number in expanded notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 32,145 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) 78,902 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c) 54,007 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d) 60,370 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>e) 99,999 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Convert from Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each expanded form as a numeral:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 50,000 + 4,000 + 300 + 20 + 1 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) 80,000 + 0 + 500 + 60 + 3 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c) 20,000 + 9,000 + 0 + 0 + 7 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d) 70,000 + 1,000 + 800 + 40 + 0 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Words to Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write the expanded notation for these word forms:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) sixty-three thousand, four hundred fifty-two</div>
                        <div class="answer-space" style="height: 40px; margin-bottom: 10px;"></div>
                        <div>b) ninety thousand, eight hundred one</div>
                        <div class="answer-space" style="height: 40px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 different 5-digit numbers in expanded notation. Have a family member check your work.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Whole Numbers",
        subtopic: "Writing 5-Digit Numbers in Numerals and Words",
        lessonContent: `
            <p>Today we'll practice converting 5-digit numbers between numerals and words!</p>
            <p><strong>Key Question:</strong> How do you write 40,506 in words? How do you write "seventy-two thousand, four hundred" as a numeral?</p>
            <p><strong>Rules for Writing Numbers in Words:</strong></p>
            <ol>
                <li>Write the number before the comma + "thousand"</li>
                <li>Write the number after the comma (hundreds, tens, ones)</li>
                <li>Use a hyphen for numbers 21-99 (twenty-one, ninety-nine)</li>
                <li>Don't use "and" - that's for decimals!</li>
            </ol>
            <p><strong>Examples - Numerals to Words:</strong></p>
            <ul>
                <li>35,208 = "thirty-five thousand, two hundred eight"</li>
                <li>81,060 = "eighty-one thousand, sixty"</li>
                <li>70,005 = "seventy thousand five"</li>
            </ul>
            <p><strong>Examples - Words to Numerals:</strong></p>
            <ul>
                <li>"forty-two thousand, three hundred seventy-one" = 42,371</li>
                <li>"ninety thousand, four hundred two" = 90,402</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Important Rule</div>
                <p>Always write the comma in numerals to show thousands. 45,200 is correct; 45200 is harder to read!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spell-check"></i> Hyphen Helper</div>
                <p>Use hyphens for numbers 21-99: twenty-one, thirty-five, ninety-nine. No hyphen for hundreds: one hundred, five hundred.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-asterisk"></i> Zero Placeholders</div>
                <p>In 80,002, we say "eighty thousand two" - we don't say "zero hundreds" or "zero tens"!</p>
            </div>
        `,
        taskInstructions: "Convert between numeral and word forms of 5-digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Numerals to Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each numeral in words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 25,309 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                        <div>b) 64,080 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                        <div>c) 50,017 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                        <div>d) 93,500 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                        <div>e) 12,345 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Words to Numerals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each word form as a numeral:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) thirty-four thousand, five hundred sixty-two = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) seventy-eight thousand, nine hundred = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c) forty thousand, three hundred five = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d) ninety-nine thousand, ninety-nine = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>e) fifty thousand, three = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Numerals</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Words</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">82,147</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd;">thirty-six thousand, two hundred nine</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">70,080</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Write a check (pretend!) for $45,678. Write the amount in numerals and in words on the check.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Whole Numbers",
        subtopic: "Quiz: Place Value and Expanded Notation",
        lessonContent: `
            <p>Today we'll review everything we learned this week and take a quiz!</p>
            <p><strong>Week 4 Review:</strong></p>
            <ol>
                <li><strong>Reading Numbers:</strong> 45,321 = "forty-five thousand, three hundred twenty-one"</li>
                <li><strong>Place Value:</strong> Ten-Thousands (10,000), Thousands (1,000), Hundreds (100), Tens (10), Ones (1)</li>
                <li><strong>Expanded Notation:</strong> 47,382 = 40,000 + 7,000 + 300 + 80 + 2</li>
                <li><strong>Numeral to Word & Back:</strong> "twenty-three thousand, four hundred fifty-six" = 23,456</li>
            </ol>
            <p><strong>Quick Tips for the Quiz:</strong></p>
            <ul>
                <li>Remember the comma separates thousands!</li>
                <li>Zeros are placeholders - don't forget them!</li>
                <li>Use hyphens for numbers 21-99 in word form</li>
                <li>Check your expanded notation by adding it up</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Practice Example 1</div>
                <p>Write 58,204 in expanded notation: 50,000 + 8,000 + 200 + 0 + 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Practice Example 2</div>
                <p>Write "seventy-three thousand, eight hundred twelve" as a numeral: 73,812</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Practice Example 3</div>
                <p>In 94,306, the digit 4 is in the Thousands place = 4,000</p>
            </div>
        `,
        taskInstructions: "Complete the quiz to show what you've learned about 5-digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Quiz: Place Value and Expanded Notation</strong></p>
                <p><em>Name: _________________________ Date: _________________</em></p>
            </div>
            
            <div class="content-box">
                <p><strong>Section A: Place Value (2 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> In the number 72,845:
                    <div style="margin-left: 20px;">
                        <div>a) What digit is in the Ten-Thousands place? _________</div>
                        <div>b) What digit is in the Hundreds place? _________</div>
                        <div>c) What is the value of the digit 2? _________</div>
                        <div>d) What is the value of the digit 5? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: Expanded Notation (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write each number in expanded notation:
                    <div style="margin-left: 20px;">
                        <div>a) 63,457 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) 90,204 = _________________________________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write each expanded form as a numeral:
                    <div style="margin-left: 20px;">
                        <div>a) 80,000 + 5,000 + 300 + 20 + 6 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) 40,000 + 0 + 700 + 0 + 9 = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Numerals and Words (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write each numeral in words:
                    <div style="margin-left: 20px;">
                        <div>a) 38,506 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                        <div>b) 71,040 = _________________________________</div>
                        <div class="answer-space" style="height: 35px; margin-bottom: 10px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write each word form as a numeral:
                    <div style="margin-left: 20px;">
                        <div>a) fifty-four thousand, three hundred twenty-seven = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b) eighty-nine thousand, six hundred two = _________</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Challenge (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create a 5-digit number where:
                    <div style="margin-left: 20px;">
                        <div>- The Ten-Thousands digit is 5</div>
                        <div>- The Thousands digit is even</div>
                        <div>- The Hundreds digit is 0</div>
                        <div>- The Tens digit is odd</div>
                        <div>- The Ones digit is 9</div>
                        <div>Your number: _________</div>
                        <div class="answer-space" style="height: 30px; margin-top: 10px;"></div>
                        <div>Write this number in expanded notation: _________________________________</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Bonus (Optional - 2 points):</strong> Write the largest 5-digit number possible using the digits 3, 7, 1, 9, and 5. Then write it in words.</p>
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Create 5 quiz questions of your own about 5-digit numbers. Trade with a family member and see how they do!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek4);
    console.log("grade3-maths-science-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek4);
    console.log("grade3-maths-science-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek4',
        metadata: grade3MathsScienceWeek4.metadata,
        days: grade3MathsScienceWeek4
    });
    console.log("grade3-maths-science-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek4 = grade3MathsScienceWeek4;
console.log("grade3-maths-science-week4.js loaded and registered successfully");