// Grade 4 Math - Week 4 Data
const grade4MathWeek4 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 4,
        title: "Numbers and Notation",
        description: "Mastering whole numbers up to 1,000,000 and expanded notation."
    },
    
    tuesday: {
        subject: "Math",
        topic: "Numbers and Notation",
        subtopic: "The Millionaire’s Place Value",
        lessonContent: `
            <p>Welcome to the world of big numbers! This week we will learn to read, write, and understand whole numbers up to 1,000,000.</p>
            <p><strong>Key Concept:</strong> Place value helps us understand the value of each digit in a number. Today we'll focus on numbers up to one million!</p>
            <p><strong>Place Value Up to Millions:</strong></p>
            <ul>
                <li><strong>Ones</strong> (units): 1-9</li>
                <li><strong>Tens:</strong> 10-90</li>
                <li><strong>Hundreds:</strong> 100-900</li>
                <li><strong>Thousands:</strong> 1,000-9,000</li>
                <li><strong>Ten Thousands:</strong> 10,000-90,000</li>
                <li><strong>Hundred Thousands:</strong> 100,000-900,000</li>
                <li><strong>Millions:</strong> 1,000,000 and beyond!</li>
            </ul>
            <p><strong>Reading Large Numbers:</strong></p>
            <ul>
                <li>Say the number in groups of three digits (thousands, then hundreds)</li>
                <li>Example: 456,789 is read as "four hundred fifty-six thousand, seven hundred eighty-nine"</li>
                <li>Use commas to separate thousands, millions, etc.</li>
            </ul>
            <p><strong>Real-World Connection:</strong> Large numbers are everywhere! City populations, sports stadium capacities, and prices of expensive items all use numbers in the thousands and millions.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-city" style="color: #4A90E2;"></i> Population Example</div>
                <p>New York City has about 8,400,000 people. We write this as 8,400,000 and say "eight million, four hundred thousand."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-football-ball"></i> Stadium Capacity</div>
                <p>Wembley Stadium in London holds 90,000 people. We write 90,000 and say "ninety thousand."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Place Value Tip</div>
                <p>Remember: Each place is 10 times greater than the place to its right. 1,000 is 10 times greater than 100!</p>
            </div>
        `,
        taskInstructions: "Practice reading and writing large numbers by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write these numbers in digits:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. Three hundred twenty-five thousand, six hundred fourteen</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. Seven million, eighty thousand</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. Nine hundred forty thousand, two hundred one</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Read these numbers aloud, then write them in words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 750,342</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. 1,200,500</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. 65,089</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Create your own "Place Value Street":
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Draw a street with houses labeled: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions.</div>
                    <div>Place the digits 4, 2, 9, 7, 1, 5, 3 in the correct houses to make one large number.</div>
                </div>
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Research: Find the population of your city or a nearby city. Write it in digits and words:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find three real-world examples of numbers over 10,000 (from newspapers, websites, or books). Write them in digits and words.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Numbers and Notation",
        subtopic: "Breaking It Down (Expanded Notation)",
        lessonContent: `
            <p>Today we'll learn how to break large numbers into their parts using expanded notation. This helps us understand the true value of each digit.</p>
            <p><strong>What is Expanded Notation?</strong></p>
            <p>Expanded notation shows the value of each digit in a number. Instead of writing 456,789, we write 400,000 + 50,000 + 6,000 + 700 + 80 + 9.</p>
            <p><strong>How to Write Expanded Notation:</strong></p>
            <ol>
                <li>Identify the place value of each digit</li>
                <li>Write each digit multiplied by its place value</li>
                <li>Add them together with plus signs</li>
            </ol>
            <p><strong>Example:</strong></p>
            <p>For 723,456:</p>
            <ul>
                <li>7 is in the hundred thousands place: 7 × 100,000 = 700,000</li>
                <li>2 is in the ten thousands place: 2 × 10,000 = 20,000</li>
                <li>3 is in the thousands place: 3 × 1,000 = 3,000</li>
                <li>4 is in the hundreds place: 4 × 100 = 400</li>
                <li>5 is in the tens place: 5 × 10 = 50</li>
                <li>6 is in the ones place: 6 × 1 = 6</li>
            </ul>
            <p>Expanded notation: 700,000 + 20,000 + 3,000 + 400 + 50 + 6</p>
            <p><strong>Why Learn Expanded Notation?</strong> It helps us understand what large numbers really mean. It's like taking apart a machine to see how all the pieces work together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt"></i> Expanded Notation Example</div>
                <p>125,678 = 100,000 + 20,000 + 5,000 + 600 + 70 + 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Checking Your Work</div>
                <p>Add all the parts of expanded notation. If you get the original number back, you're correct!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Number Puzzle</div>
                <p>Think of expanded notation as a number puzzle. Each piece shows the value of one digit!</p>
            </div>
        `,
        taskInstructions: "Practice writing numbers in expanded notation by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Writing Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in expanded notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 345,217</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 890,654</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 1,234,567</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: From Expanded to Standard Form</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the standard form for these expanded notations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 500,000 + 30,000 + 4,000 + 200 + 10 + 8</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 700,000 + 8,000 + 90 + 5</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 4,000,000 + 300,000 + 20,000 + 1,000 + 400 + 30 + 2</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own "Expanding Accordion"</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose a number between 100,000 and 999,999:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Write it in standard form:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Write it in expanded notation:</div>
                        <div style="margin-left: 20px; height: 50px;"></div>
                        <div>c. Draw a simple accordion showing how it expands:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> The price of a luxury car is $125,850. Write this price in expanded notation and explain what each digit represents:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a number over 100,000 in a newspaper or online. Write it in expanded notation and circle the digit with the greatest value.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Numbers and Notation",
        subtopic: "Numbers in the News",
        lessonContent: `
            <p>Today we'll explore how large numbers are used in real life through newspapers, websites, and other media. Numbers tell stories about our world!</p>
            <p><strong>Finding Numbers in Context:</strong></p>
            <ul>
                <li><strong>Populations:</strong> How many people live in a city or country</li>
                <li><strong>Money:</strong> Prices, salaries, budgets, and costs</li>
                <li><strong>Distances:</strong> How far between places (in kilometers or miles)</li>
                <li><strong>Quantities:</strong> How many items were sold, produced, or used</li>
                <li><strong>Time:</strong> How many hours, days, or years</li>
            </ul>
            <p><strong>Understanding What Numbers Represent:</strong></p>
            <ol>
                <li>Look at the context around the number</li>
                <li>Check the units (dollars, kilometers, people, etc.)</li>
                <li>Think about whether it's a large or small amount for that context</li>
                <li>Compare it to numbers you know</li>
            </ol>
            <p><strong>Reading Numbers in Articles:</strong></p>
            <p>When you see "The company earned $2,500,000 last year," think:</p>
            <ul>
                <li>What is the number? 2,500,000</li>
                <li>What does it represent? Money earned</li>
                <li>What unit? Dollars</li>
                <li>How do I say it? Two million, five hundred thousand dollars</li>
            </ul>
            <p><strong>Why This Matters:</strong> Being able to understand numbers in context helps you make sense of news, make good decisions, and understand the world around you.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-newspaper"></i> Newspaper Example</div>
                <p>"Over 500,000 people attended the concert." This tells us about the event's popularity and size.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe-americas"></i> Population Context</div>
                <p>"Tokyo has 14 million people" means it's a very crowded city with many residents.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Business Numbers</div>
                <p>"Sales increased by $250,000" shows business growth and success.</p>
            </div>
        `,
        taskInstructions: "Practice finding and interpreting large numbers in context by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the provided news snippets. Find and circle all numbers over 10,000:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Interpretation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For three numbers you found, complete this table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #f0f0f0;">
                                <th style="border: 1px solid #ccc; padding: 8px;">Number</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">In Words</th>
                                <th style="border: 1px solid #ccc; padding: 8px;">What It Represents</th>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                                <td style="border: 1px solid #ccc; padding: 8px; height: 40px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own News Item</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short news story that includes at least 3 numbers over 10,000:
                    <div class="answer-space" style="height: 200px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Examples: A sports event attendance, a charity fundraiser total, a new building cost.</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do journalists use large numbers in news stories? How does it help readers understand the story better?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Bring to class one newspaper article or printed webpage that contains a number over 50,000. Be prepared to explain what the number means.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Numbers and Notation",
        subtopic: "ICT Number Quest",
        lessonContent: `
            <p>Today we'll use technology to practice working with large numbers. Digital tools can help us understand, manipulate, and play with numbers in fun ways!</p>
            <p><strong>Using Spreadsheets for Numbers:</strong></p>
            <ul>
                <li><strong>Entering Large Numbers:</strong> Type numbers with commas (45,678) or without (45678)</li>
                <li><strong>SUM Function:</strong> =SUM(A1:A5) adds all numbers in cells A1 through A5</li>
                <li><strong>Seeing Patterns:</strong> Spreadsheets can help us visualize how numbers grow</li>
            </ul>
            <p><strong>Educational Math Games:</strong></p>
            <p>Many online games help practice place value and number recognition:</p>
            <ul>
                <li>Place value puzzles</li>
                <li>Number matching games</li>
                <li>Expanded notation activities</li>
                <li>Number ordering challenges</li>
            </ul>
            <p><strong>Number Dictation Practice:</strong></p>
            <ol>
                <li>Listen carefully to a number spoken aloud</li>
                <li>Type it correctly with proper commas</li>
                <li>Check your work by having the computer read it back</li>
            </ol>
            <p><strong>Digital Number Skills:</strong></p>
            <ul>
                <li>Typing numbers accurately</li>
                <li>Formatting numbers with commas</li>
                <li>Using calculator functions</li>
                <li>Creating simple charts from number data</li>
            </ul>
            <p><strong>Why Use Technology?</strong> It makes learning interactive, provides instant feedback, and prepares us for a digital world where these skills are essential.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Spreadsheet Example</div>
                <p>In a spreadsheet: A1=10,000, A2=25,000, A3=15,000. =SUM(A1:A3) gives 50,000.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Game</div>
                <p>A game might show "300,000 + 40,000 + 5,000 + 600 + 70 + 8" and you drag the correct number (345,678) to match.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-headphones"></i> Dictation Tip</div>
                <p>When hearing "six hundred twenty-four thousand," think: 600,000 + 24,000 = 624,000.</p>
            </div>
        `,
        taskInstructions: "Practice using digital tools with large numbers by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Spreadsheet Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Enter these numbers into a spreadsheet:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>125,000 &nbsp;&nbsp; 340,500 &nbsp;&nbsp; 89,750 &nbsp;&nbsp; 1,200,000</div>
                        <div>a. Use the SUM function to find the total:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Which number is largest? Use =MAX() to check:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Dictation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Listen to the teacher read numbers, then type them:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. First number:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Second number:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Third number:</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Digital Number Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use an approved educational website to play a number game:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What game did you play?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. What was your score?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. List one thing you learned:</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Digital Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Enter these city populations and create a simple bar chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tokyo: 14,000,000</div>
                        <div>London: 9,000,000</div>
                        <div>Paris: 2,100,000</div>
                        <div>Sydney: 5,300,000</div>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(You can draw what the chart would look like or describe it)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How does using technology help you understand large numbers better than paper alone?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Practice typing numbers on a keyboard or tablet. Type all numbers from 10,000 to 10,100 (just the thousands).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek4);
    console.log("grade4-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek4);
    console.log("grade4-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek4',
        metadata: grade4MathWeek4.metadata,
        days: grade4MathWeek4
    });
    console.log("grade4-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek4 = grade4MathWeek4;
console.log("grade4-math-week4.js loaded and registered successfully");