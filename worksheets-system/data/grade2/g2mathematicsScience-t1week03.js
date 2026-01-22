// Grade 2 Mathematics & Science - Week 3 Data (Number Sense & Measurement)
const grade2MathScienceWeek3 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 3,
        title: "Understanding Numbers — Place Value, Number Lines, and Expanded Form",
        description: "Learning to represent, write, and expand numbers up to 999 using base-ten blocks, number lines, place value charts, and expanded notation"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Modeling Numbers with Base-Ten Blocks",
        subtopic: "Representing whole numbers 1–999 using squares of ones, tens, and hundreds",
        lessonContent: `
            <p>Welcome to our Math lesson! Today we will learn how to represent big numbers using special blocks.</p>
            <p><strong>Key Concept:</strong> When we have a lot of items, it is easier to group them into tens and hundreds to count them quickly.</p>
            <p><strong>What are Base-Ten Blocks?</strong></p>
            <ul>
                <li><strong>Small square (one):</strong> Represents 1</li>
                <li><strong>Long rectangle (rod):</strong> Represents 10 (10 ones make 1 ten)</li>
                <li><strong>Large square (flat):</strong> Represents 100 (10 tens make 1 hundred)</li>
            </ul>
            <p><strong>How to build numbers:</strong> We can combine these blocks to show any number up to 999!</p>
            <p><strong>Example:</strong> For the number 235, we would use 2 hundred-flats, 3 ten-rods, and 5 single squares.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube" style="color: #FF9800;"></i> Building 124</div>
                <p>1 hundred-flat + 2 ten-rods + 4 single squares = 124</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Building 307</div>
                <p>3 hundred-flats + 0 ten-rods + 7 single squares = 307</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Block Builder Game!</div>
                <p>Let's play "Number Builder"! When I say a number, race to build it with your blocks!</p>
            </div>
        `,
        taskInstructions: "Use base-ten blocks or draw pictures to represent the numbers below.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Build or draw the number 183 with blocks:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Hundreds: ________ flats</div>
                    <div>Tens: ________ rods</div>
                    <div>Ones: ________ squares</div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> What number is shown by this picture?
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>[Picture: 3 flats, 4 rods, 2 squares]</div>
                    <div class="answer-space" style="height: 30px; width: 150px; margin-top: 5px;">Number: ________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw blocks to show the number 256:
                <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle which set of blocks equals 430:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ 4 flats, 3 rods, 0 squares</div>
                    <div>☐ 3 flats, 4 rods, 0 squares</div>
                    <div>☐ 4 flats, 0 rods, 3 squares</div>
                </div>
            </div>
        `,
        homework: "Find three things at home you can group into tens (like 10 pencils, 10 toys). Draw them and write how many tens you made.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Numbers on a Line",
        subtopic: "Representing whole numbers on a number line",
        lessonContent: `
            <p>Today we will learn how numbers live on a special line called a number line!</p>
            <p><strong>Key Concept:</strong> Numbers have a specific order and "place" on a line.</p>
            <p><strong>What is a Number Line?</strong></p>
            <ul>
                <li>A straight line with numbers placed at equal distances</li>
                <li>Numbers get larger as we move to the right</li>
                <li>Numbers get smaller as we move to the left</li>
                <li>We start at 0</li>
            </ul>
            <p><strong>How to use a number line:</strong></p>
            <ul>
                <li>We can count by 1s, 10s, or 100s along the line</li>
                <li>We can find where a number belongs</li>
                <li>We can see which numbers are bigger or smaller</li>
            </ul>
            <p><strong>Skip Counting:</strong> When we count by 10s (10, 20, 30...) or 100s (100, 200, 300...), we "skip" over numbers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-horizontal" style="color: #4CAF50;"></i> Number Line Example</div>
                <p>On a line from 0 to 1000, the number 450 is about halfway between 400 and 500.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-football-ball"></i> Skip Counting</div>
                <p>Counting by 100s: 100, 200, 300, 400, 500... Each jump is 100 spaces!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Human Number Line!</div>
                <p>Let's make a human number line! Each student holds a number card and lines up in order!</p>
            </div>
        `,
        taskInstructions: "Place numbers correctly on the number lines below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing numbers on this number line (counting by 100s):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>0 _____ 200 _____ 400 _____ 600 _____ 800 _____ 1000</div>
                        <div class="answer-space" style="height: 30px; width: 300px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Place the Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw an arrow to show where each number belongs on this line:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>0---------------------100---------------------200---------------------300</div>
                        <div style="margin-top: 10px;">
                            <div>Place 150: ________</div>
                            <div>Place 75: ________</div>
                            <div>Place 250: ________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which is Bigger?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the number that is farther to the right on a number line:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>320 or 280? ________</div>
                        <div>150 or 190? ________</div>
                        <div>610 or 590? ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Own Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a number line from 0 to 200. Mark these numbers: 50, 100, 150:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Make a number line at home from 0 to 500. Mark where your age, your sibling's age, and your house number would be.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Writing Numbers in Words and Numerals",
        subtopic: "Writing whole numbers in both numerals and words (1–999)",
        lessonContent: `
            <p>Today we will learn how to write numbers in two different ways: with digits and with words!</p>
            <p><strong>Key Concept:</strong> Numbers can be "read" just like stories—we can write them as words too!</p>
            <p><strong>Rules for Writing Number Words:</strong></p>
            <ul>
                <li>1–20 have special names (one, two, three... twenty)</li>
                <li>For numbers 21–99, we write the tens part first, then the ones part with a hyphen: forty-five</li>
                <li>For numbers 100–999, we write the hundreds part, then "and," then the rest: three hundred sixty-two</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>15 → fifteen</li>
                <li>45 → forty-five</li>
                <li>362 → three hundred sixty-two</li>
                <li>700 → seven hundred</li>
            </ul>
            <p><strong>Remember:</strong> We always use a hyphen between tens and ones (like sixty-four).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-font" style="color: #9C27B0;"></i> Numeral to Word</div>
                <p>128 → one hundred twenty-eight</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hashtag"></i> Word to Numeral</div>
                <p>five hundred three → 503</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Word Match Game!</div>
                <p>Let's play matching! Find the partner who has the word version of your numeral card!</p>
            </div>
        `,
        taskInstructions: "Write numbers as words and words as numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Write the Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers as words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>37 → <span class="answer-space" style="width: 200px;"></span></div>
                        <div>89 → <span class="answer-space" style="width: 200px;"></span></div>
                        <div>156 → <span class="answer-space" style="width: 200px;"></span></div>
                        <div>904 → <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Numerals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these words as numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>sixty-two → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>two hundred fourteen → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>nine hundred one → <span class="answer-space" style="width: 100px;"></span></div>
                        <div>eighty → <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fix the Mistakes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the correct way to write each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 24 → twenty four</div>
                        <div>☐ 24 → twenty-four</div>
                        <div>☐ 24 → twentifour</div>
                        <div style="margin-top: 10px;"></div>
                        <div>☐ 307 → three hundred seven</div>
                        <div>☐ 307 → three hundred and seven</div>
                        <div>☐ 307 → threehundredseven</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Write</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw 128 stars. Then write the number in words:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">In words: <span class="answer-space" style="width: 250px;"></span></div>
                </div>
            </div>
        `,
        homework: "Write the numbers of your family members' ages in words (e.g., Mom: thirty-five).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Identifying Place Value",
        subtopic: "Finding place values in three-digit numbers using charts and tools",
        lessonContent: `
            <p>Today we will learn how the position of a digit tells us its value!</p>
            <p><strong>Key Concept:</strong> The "place" or position of a digit tells us how much it is worth.</p>
            <p><strong>Place Value Chart:</strong></p>
            <ul>
                <li><strong>Hundreds place:</strong> The first digit from the right (worth 100s)</li>
                <li><strong>Tens place:</strong> The second digit from the right (worth 10s)</li>
                <li><strong>Ones place:</strong> The third digit from the right (worth 1s)</li>
            </ul>
            <p><strong>Example with 782:</strong></p>
            <ul>
                <li>7 is in the hundreds place → worth 700</li>
                <li>8 is in the tens place → worth 80</li>
                <li>2 is in the ones place → worth 2</li>
            </ul>
            <p><strong>Tools we use:</strong> Place value charts, abacuses, and number boxes help us see the value of each digit.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table" style="color: #2196F3;"></i> Place Value Chart</div>
                <p>| Hundreds | Tens | Ones |</p>
                <p>| 4 | 0 | 9 | = 409</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Digit Value</div>
                <p>In 536, the digit 3 is in the tens place, so its value is 30.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mystery Digit Challenge!</div>
                <p>"I have a 4 in the hundreds place, a 0 in the tens place, and a 9 in the ones place. What number am I?" (409)</p>
            </div>
        `,
        taskInstructions: "Identify the place and value of digits in three-digit numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Place Value Chart Fill-In</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these numbers into the place value chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table border="1" cellpadding="5" style="border-collapse: collapse;">
                            <tr><th>Hundreds</th><th>Tens</th><th>Ones</th></tr>
                            <tr><td>2</td><td>5</td><td>8</td></tr>
                            <tr><td class="answer-space" style="height: 30px;"></td><td class="answer-space"></td><td class="answer-space"></td></tr>
                            <tr><td class="answer-space" style="height: 30px;"></td><td class="answer-space"></td><td class="answer-space"></td></tr>
                        </table>
                        <div style="margin-top: 5px;">Numbers: 471 and 603</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What's the Value?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For the number 924:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The digit 9 is in the ________ place. Its value is ________.</div>
                        <div>The digit 2 is in the ________ place. Its value is ________.</div>
                        <div>The digit 4 is in the ________ place. Its value is ________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mystery Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve the place value riddles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5 hundreds + 3 tens + 7 ones = ________</div>
                        <div>b) The number with 8 in the tens place, 1 in the hundreds place, and 0 in the ones place = ________</div>
                        <div>c) I have 9 ones, 2 tens, and 6 hundreds. What number am I? ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw an Abacus</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw an abacus showing the number 360:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find three numbers in your house (like page numbers, prices). Write each digit's place and value.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Expanded Notation",
        subtopic: "Writing numbers in expanded form using digits and words",
        lessonContent: `
            <p>Today is our number celebration! We'll learn how to "stretch out" numbers to see what's inside them!</p>
            <p><strong>Key Concept:</strong> We can break apart a number to show exactly what it's made of.</p>
            <p><strong>What is Expanded Notation?</strong></p>
            <ul>
                <li>A way to write a number as the sum of its place values</li>
                <li>Shows the value of each digit separately</li>
            </ul>
            <p><strong>Two Ways to Write Expanded Form:</strong></p>
            <ol>
                <li><strong>With digits:</strong> 854 = 800 + 50 + 4</li>
                <li><strong>With words:</strong> 8 hundreds + 5 tens + 4 ones</li>
            </ol>
            <p><strong>Example with 362:</strong></p>
            <ul>
                <li>Digit form: 300 + 60 + 2</li>
                <li>Word form: 3 hundreds + 6 tens + 2 ones</li>
            </ul>
            <p><strong>Today's Challenge:</strong> Show one number in ALL the ways we learned this week!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt" style="color: #FF5722;"></i> Expanding 427</div>
                <p>427 = 400 + 20 + 7</p>
                <p>4 hundreds + 2 tens + 7 ones</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Putting It Back Together</div>
                <p>600 + 30 + 9 = 639</p>
                <p>6 hundreds + 3 tens + 9 ones = 639</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Stretch Game!</div>
                <p>Let's play "Number Stretch"! I'll give you a number, you stretch it into expanded form as fast as you can!</p>
            </div>
        `,
        taskInstructions: "Write numbers in expanded notation and put them back together.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Expand with Digits</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in expanded form using digits:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>538 = ________ + ________ + ________</div>
                        <div>720 = ________ + ________ + ________</div>
                        <div>194 = ________ + ________ + ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Expand with Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these numbers in expanded form using words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>625 = ________ hundreds + ________ tens + ________ ones</div>
                        <div>803 = ________ hundreds + ________ tens + ________ ones</div>
                        <div>990 = ________ hundreds + ________ tens + ________ ones</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Put It Back Together</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the original number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>200 + 40 + 7 = ________</div>
                        <div>9 hundreds + 0 tens + 6 ones = ________</div>
                        <div>500 + 0 + 3 = ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: The Grand Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Show the number 481 in FOUR different ways:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. With base-ten blocks (draw):</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                        <div>2. On a number line (mark it):</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>3. In words: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>4. In expanded form: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Number Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a Number Detective. Write one thing you learned about numbers this week:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I learned that ________________</div>
                </div>
            </div>
        `,
        homework: "Choose your favorite 3-digit number. Show it to your family in all 4 ways: blocks, number line, words, and expanded form.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek3);
    console.log("math-science-week3-numbers.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek3);
    console.log("math-science-week3-numbers.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek3',
        metadata: grade2MathScienceWeek3.metadata,
        days: grade2MathScienceWeek3
    });
    console.log("math-science-week3-numbers.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek3 = grade2MathScienceWeek3;
console.log("math-science-week3-numbers.js loaded and registered successfully");