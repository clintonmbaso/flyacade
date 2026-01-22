// Grade 3 Mathematics & Science - Week 5 Data (Exploring Numbers up to 99,999)
const grade3MathScienceWeek5 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        week: 5,
        title: "Exploring Numbers up to 99,999",
        description: "Learning to read, write, and understand 5-digit numbers through place value, expanded notation, and translation between formats"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to 5-Digit Numbers",
        subtopic: "Reading and writing numbers up to 99,999",
        lessonContent: `
            <p>Welcome to big numbers! Today we will explore numbers beyond thousands and learn about the Ten Thousands place.</p>
            <p><strong>Key Concept:</strong> Numbers can grow from 9,999 to 10,000 by adding one more unit in a new place value column.</p>
            <p><strong>Review:</strong> Remember our 4-digit numbers: Thousands, Hundreds, Tens, Ones.</p>
            <p><strong>New Place Value:</strong> Ten Thousands (10,000s)</p>
            <ul>
                <li>10,000 = ten thousand</li>
                <li>20,000 = twenty thousand</li>
                <li>Up to 90,000 = ninety thousand</li>
            </ul>
            <p><strong>The Comma Rule:</strong> We use a comma after the thousands place: 12,345 (twelve thousand, three hundred forty-five).</p>
            <p><strong>Why is this important?</strong> Big numbers help us talk about populations, distances, prices, and quantities in the real world.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line" style="color: #4CAF50;"></i> From 9,999 to 10,000</div>
                <p>9,999 + 1 = 10,000 — we create a new digit in the ten thousands place!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up" style="color: #2196F3;"></i> Number Line Jump</div>
                <p>9,997 → 9,998 → 9,999 → 10,000 → 10,001 → 10,002</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Chant Challenge!</div>
                <p>Let's chant together: "Ten thousand, twenty thousand, thirty thousand... up to ninety-nine thousand nine hundred ninety-nine!"</p>
            </div>
        `,
        taskInstructions: "Practice reading and writing 5-digit numbers.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write the next three numbers after 9,997:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>9,997 → ________ → ________ → ________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write these numbers with commas:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>12345 → ______________</div>
                    <div>67890 → ______________</div>
                    <div>50505 → ______________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Read these numbers aloud to a partner:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>15,678 (fifteen thousand, six hundred seventy-eight)</div>
                    <div>42,309 (_______________________)</div>
                    <div>99,999 (_______________________)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw base‑ten blocks to show 12,345:
                <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                <div>Ten Thousands: ____ , Thousands: ____ , Hundreds: ____ , Tens: ____ , Ones: ____</div>
            </div>
        `,
        homework: "Find three 5‑digit numbers in real life (like a car’s odometer, a price tag, or a population sign). Write them down with commas.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Understanding Place Value",
        subtopic: "Identifying the value of each digit in a 5‑digit number",
        lessonContent: `
            <p>Today we will explore what each digit really means in a big number. Place value tells us if a digit represents tens of thousands or just ones!</p>
            <p><strong>Key Concept:</strong> The same digit can have very different values depending on where it sits in the number.</p>
            <p><strong>Place Value Chart (5‑digit):</strong></p>
            <ul>
                <li>Ten Thousands (10,000s)</li>
                <li>Thousands (1,000s)</li>
                <li>Hundreds (100s)</li>
                <li>Tens (10s)</li>
                <li>Ones (1s)</li>
            </ul>
            <p><strong>Example:</strong> In 45,678:</p>
            <ul>
                <li>4 is in the ten thousands place → 40,000</li>
                <li>5 is in the thousands place → 5,000</li>
                <li>6 is in the hundreds place → 600</li>
                <li>7 is in the tens place → 70</li>
                <li>8 is in the ones place → 8</li>
            </ul>
            <p><strong>Why does this matter?</strong> Understanding place value helps us compare numbers, round them, and perform operations correctly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th" style="color: #f44336;"></i> Place Value Chart</div>
                <p>45,678 = 4|5,|6|7|8 → Ten Thousands|Thousands|Hundreds|Tens|Ones</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #FF9800;"></i> Digit Detective</div>
                <p>In 72,315: The 2 is worth 2,000 because it’s in the thousands place!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Value Match Game!</div>
                <p>Match digit cards to their correct place value: “3” in 34,567 → “30,000” card!</p>
            </div>
        `,
        taskInstructions: "Identify the place value and actual value of digits in 5‑digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Place Value Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For the number 36,942:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The digit 3 is in the __________ place and is worth __________.</div>
                        <div>The digit 6 is in the __________ place and is worth __________.</div>
                        <div>The digit 9 is in the __________ place and is worth __________.</div>
                        <div>The digit 4 is in the __________ place and is worth __________.</div>
                        <div>The digit 2 is in the __________ place and is worth __________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Number</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Build a 5‑digit number with these clues:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ten Thousands: 7</div>
                        <div>Thousands: 0</div>
                        <div>Hundreds: 8</div>
                        <div>Tens: 5</div>
                        <div>Ones: 3</div>
                        <div>Your number: ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparing Values</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the digit with the greatest value in each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>52,819 → (5) 2 8 1 9</div>
                        <div>13,456 → 1 (3) 4 5 6</div>
                        <div>97,032 → 9 7 0 (3) 2</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Place Value Art</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a place value chart for 81,625 and color each column differently:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write your birth year as a 4‑digit number. Then add a digit in the ten thousands place to make a 5‑digit number. Identify each digit’s value.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Expanded Notation (Numerical)",
        subtopic: "Breaking numbers into component parts using addition",
        lessonContent: `
            <p>Today we will take apart big numbers to see exactly what they’re made of. Expanded notation shows the sum of each digit’s real value.</p>
            <p><strong>Key Concept:</strong> A whole number is the sum of its place values.</p>
            <p><strong>What is expanded notation?</strong></p>
            <ul>
                <li>Writing a number as an addition sentence</li>
                <li>Each part matches a digit’s place value</li>
                <li>Example: 23,456 = 20,000 + 3,000 + 400 + 50 + 6</li>
            </ul>
            <p><strong>Steps:</strong></p>
            <ol>
                <li>Identify each digit’s place value.</li>
                <li>Write each digit times its place value (5,000 = 5 × 1,000).</li>
                <li>Connect them with plus signs.</li>
            </ol>
            <p><strong>Why do this?</strong> Expanded form makes it clear how much each digit contributes. It’s like seeing the ingredients of a number!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube" style="color: #2196F3;"></i> Deconstructing 45,678</div>
                <p>45,678 = 40,000 + 5,000 + 600 + 70 + 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece" style="color: #9C27B0;"></i> Puzzle Pieces</div>
                <p>Think of each place value as a puzzle piece that fits together to make the whole number.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Expand‑o‑Race!</div>
                <p>Teams race to expand numbers on the board: 12,345 → 10,000 + 2,000 + 300 + 40 + 5</p>
            </div>
        `,
        taskInstructions: "Write 5‑digit numbers in expanded notation (numerical form).",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Expand These Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write in expanded form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>23,456 = ________________________________________________</div>
                        <div>71,809 = ________________________________________________</div>
                        <div>50,302 = ________________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: From Expanded to Standard</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put these back together:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>80,000 + 4,000 + 200 + 30 + 1 = ______________</div>
                        <div>60,000 + 0 + 500 + 0 + 9 = ______________</div>
                        <div>30,000 + 7,000 + 0 + 80 + 4 = ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Missing Parts</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing expanded parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>92,415 = 90,000 + __________ + 400 + 10 + 5</div>
                        <div>__________ = 40,000 + 3,000 + 0 + 60 + 7</div>
                        <div>18,256 = 10,000 + 8,000 + 200 + __________ + 6</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Visual Expansion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw base‑ten blocks for 36,274 and write the expanded form below:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div>Expanded: _______________________________________</div>
                </div>
            </div>
        `,
        homework: "Choose any 5‑digit number from a book or magazine. Write it in standard form, then in expanded form.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Expanded Notation (Word Form)",
        subtopic: "Writing numbers using place value words",
        lessonContent: `
            <p>Now we will describe numbers in words, not just digits. This helps us truly understand what “fifty-six thousand” means.</p>
            <p><strong>Key Concept:</strong> Word form expanded notation links language to quantity.</p>
            <p><strong>What is word form expanded notation?</strong></p>
            <ul>
                <li>Writing the value of each digit in words</li>
                <li>Example: 56,789 = "5 ten thousands, 6 thousands, 7 hundreds, 8 tens, and 9 ones"</li>
            </ul>
            <p><strong>Why learn this?</strong></p>
            <ul>
                <li>Helps with reading large numbers aloud</li>
                <li>Makes place value concrete</li>
                <li>Builds math vocabulary</li>
            </ul>
            <p><strong>Watch for:</strong> When a digit is 0, we usually skip that place in word form (e.g., in 50,302, we say “5 ten thousands, 3 hundreds, and 2 ones”—no thousands or tens).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-alt" style="color: #4CAF50;"></i> Saying 34,567</div>
                <p>"3 ten thousands, 4 thousands, 5 hundreds, 6 tens, and 7 ones"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #795548;"></i> Reading Big Numbers</div>
                <p>12,402 = "1 ten thousand, 2 thousands, 4 hundreds, 0 tens, and 2 ones" (or skip the tens).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Word‑Form Relay</div>
                <p>Teams race to write the word‑form expansion of a number on the board. First correct team wins!</p>
            </div>
        `,
        taskInstructions: "Write 5‑digit numbers in word‑form expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Convert to Word Form</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in word‑form expanded notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>45,678 = _______________________________________________________________________</div>
                        <div>20,315 = _______________________________________________________________________</div>
                        <div>90,042 = _______________________________________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: From Words to Digits</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these word descriptions back to standard form:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>“7 ten thousands, 3 thousands, 1 hundred, 8 tens, 4 ones” = ______________</div>
                        <div>“4 ten thousands, 0 thousands, 9 hundreds, 0 tens, 5 ones” = ______________</div>
                        <div>“1 ten thousand, 8 thousands, 2 hundreds, 3 tens, 0 ones” = ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spot the Error</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find and fix the mistake:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>For 63,208, a student wrote: “6 ten thousands, 3 thousands, 2 hundreds, 8 ones.”</div>
                        <div>Missing: ________________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Invent a 5‑digit number and write it three ways:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Standard: ______________</div>
                        <div>Numerical expanded: _______________________________________</div>
                        <div>Word expanded: ____________________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write your home address number (if 5 digits) in word‑form expanded notation. If not, choose a 5‑digit number from a phone book or website.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Translating Words to Numerals and Back",
        subtopic: "Fluency between written words and digits",
        lessonContent: `
            <p>Today is our number translation day! We will switch between word descriptions and digits quickly and accurately.</p>
            <p><strong>Key Concept:</strong> Mathematicians need to communicate numbers in different ways—sometimes in words, sometimes in digits.</p>
            <p><strong>Skills for today:</strong></p>
            <ul>
                <li>Writing a number like “Twelve thousand, four hundred two” as 12,402</li>
                <li>Reading 56,789 as “fifty-six thousand, seven hundred eighty-nine”</li>
                <li>Remembering the comma after thousands</li>
                <li>Using “and” only for decimal points (not in whole numbers)</li>
            </ul>
            <p><strong>Why is this important?</strong> Real‑world situations—like writing checks, reading population data, or understanding prices—require this skill.</p>
            <p><strong>Celebration:</strong> You can now handle numbers up to 99,999 in multiple formats!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #9C27B0;"></i> Two‑Way Translation</div>
                <p>Words → Digits: “Thirty‑four thousand, five hundred twelve” → 34,512</p>
                <p>Digits → Words: 87,621 → “Eighty‑seven thousand, six hundred twenty‑one”</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-file-invoice-dollar" style="color: #FF9800;"></i> Real‑World Example</div>
                <p>A check: “Pay twelve thousand, four hundred two dollars” → $12,402</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Translation Race!</div>
                <p>I’ll say a number in words. First team to write the correct digits on their board wins a point!</p>
            </div>
        `,
        taskInstructions: "Practice converting between word form and standard form.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Words to Numerals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these as numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Twelve thousand, four hundred two = ______________</div>
                        <div>Sixty‑five thousand, eight hundred thirteen = ______________</div>
                        <div>Ninety thousand, seven = ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Numerals to Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these numbers in words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>23,456 = ____________________________________________________________</div>
                        <div>70,009 = ____________________________________________________________</div>
                        <div>51,820 = ____________________________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>“Forty‑eight thousand, three hundred five” = ______________</div>
                        <div>______________ = “Seventy‑two thousand, six hundred ten”</div>
                        <div>99,999 = ________________________________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find and correct the mistakes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>“Twelve thousand and four hundred two” was written as 12,420.</div>
                        <div>Correct: ______________</div>
                        <div>“Three thousand five” was written as 3,500.</div>
                        <div>Correct: ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Number Master Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a medal for yourself as a Number Master. Write your favorite 5‑digit number three ways:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Digits: ______________</div>
                        <div>Words: __________________________________________________</div>
                        <div>Expanded: ______________________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a newspaper or website with a 5‑digit number. Write it in digits, then in words. Teach someone at home how to read it correctly.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek5);
    console.log("grade3-math-week5-numbers.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek5);
    console.log("grade3-math-week5-numbers.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek5',
        metadata: grade3MathScienceWeek5.metadata,
        days: grade3MathScienceWeek5
    });
    console.log("grade3-math-week5-numbers.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek5 = grade3MathScienceWeek5;
console.log("grade3-math-week5-numbers.js loaded and registered successfully");