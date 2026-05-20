// Grade 3 Mathematics & Science - Term 3 Week 8 Data
const grade3MathScienceWeek8 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 8,
        title: "Multiplication Mastery",
        description: "Multiplying 3-digit numbers, patterns with 10/100/1000, and real-world applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplying 3-Digit by 1-Digit Numbers (Vertical)",
        lessonContent: `
            <p>Welcome to our multiplication week! Today we'll learn how to multiply 3-digit numbers by 1-digit numbers using vertical method.</p>
            <p><strong>Key Question:</strong> How do we multiply 345 × 6?</p>
            <p><strong>Introduction:</strong> When we multiply a 3-digit number by a 1-digit number, we multiply each digit step by step, starting from the ones place.</p>
            <p><strong>Steps to Follow:</strong></p>
            <ol>
                <li>Write the 3-digit number on top and the 1-digit number below, aligned to the right</li>
                <li>Multiply the ones digit first</li>
                <li>Multiply the tens digit next, carrying over if needed</li>
                <li>Multiply the hundreds digit last</li>
            </ol>
            <p><strong>Example:</strong> 245 × 3</p>
            <ul>
                <li>Step 1: 5 × 3 = 15 (write 5, carry 1)</li>
                <li>Step 2: 4 × 3 = 12 + carry 1 = 13 (write 3, carry 1)</li>
                <li>Step 3: 2 × 3 = 6 + carry 1 = 7</li>
                <li>Answer: 735</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1</div>
                <p>123 × 4 = ?</p>
                <p>3 × 4 = 12 → write 2, carry 1<br>2 × 4 = 8 + 1 = 9<br>1 × 4 = 4<br><strong>Answer: 492</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 2</div>
                <p>567 × 5 = ?</p>
                <p>7 × 5 = 35 → write 5, carry 3<br>6 × 5 = 30 + 3 = 33 → write 3, carry 3<br>5 × 5 = 25 + 3 = 28<br><strong>Answer: 2,835</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Tip</div>
                <p>Always start from the right (ones place) and move left. Don't forget to add your carries!</p>
            </div>
        `,
        taskInstructions: "Solve the following multiplication problems using vertical method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiply</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 124 × 3 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 231 × 4 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 345 × 2 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 456 × 6 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 578 × 7 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 689 × 8 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 999 × 9 = 
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> A school has 123 students in each grade. If there are 3 grades, how many students total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> One box holds 245 pencils. How many pencils in 4 boxes?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice 5 more problems: 342 × 6, 471 × 3, 528 × 4, 634 × 5, 789 × 2. Show your work with carries.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplying 3-Digit by 2-Digit Numbers (Vertical)",
        lessonContent: `
            <p>Today we'll build on yesterday's lesson and learn to multiply 3-digit numbers by 2-digit numbers!</p>
            <p><strong>Key Question:</strong> How do we multiply 345 × 23?</p>
            <p><strong>Introduction:</strong> Multiplying by a 2-digit number requires two steps: first multiply by the ones digit, then multiply by the tens digit, then add both results.</p>
            <p><strong>Steps to Follow:</strong></p>
            <ol>
                <li>Multiply the 3-digit number by the ones digit (write this answer as Row 1)</li>
                <li>Multiply the 3-digit number by the tens digit (write this answer as Row 2, adding a zero in the ones place)</li>
                <li>Add Row 1 and Row 2 to get the final answer</li>
            </ol>
            <p><strong>Example:</strong> 123 × 12</p>
            <ul>
                <li>Step 1: 123 × 2 = 246</li>
                <li>Step 2: 123 × 10 = 1,230 (or 123 × 1 = 123, then add a zero → 1,230)</li>
                <li>Step 3: 246 + 1,230 = 1,476</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 1</div>
                <p>234 × 21 = ?</p>
                <p>234 × 1 = 234<br>234 × 20 = 4,680<br>234 + 4,680 = <strong>4,914</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 2</div>
                <p>456 × 34 = ?</p>
                <p>456 × 4 = 1,824<br>456 × 30 = 13,680<br>1,824 + 13,680 = <strong>15,504</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Tip</div>
                <p>When multiplying by the tens digit, always add a zero to the end before adding. This is because you're really multiplying by 10, 20, 30, etc.!</p>
            </div>
        `,
        taskInstructions: "Solve the following multiplication problems using vertical method with two steps.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiply</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 111 × 11 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 123 × 22 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 234 × 13 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 345 × 42 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 567 × 33 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 789 × 25 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 432 × 56 = 
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> A farmer has 234 apple trees. Each tree produces 32 apples. How many apples total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> A book has 125 pages. If there are 24 books in a set, how many pages total?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice: 345 × 67, 456 × 89, 234 × 45, 567 × 34. Show all steps with carries.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Multiplying by 10, 100, and 1000",
        lessonContent: `
            <p>Today we'll discover a quick and easy trick for multiplying by 10, 100, and 1000!</p>
            <p><strong>Key Question:</strong> What happens when we multiply a number by 10?</p>
            <p><strong>Introduction:</strong> Multiplying by 10, 100, or 1000 is easy - we just add zeros! This is because our number system is based on 10.</p>
            <p><strong>The Rules:</strong></p>
            <ul>
                <li><strong>× 10:</strong> Add 1 zero to the end of the number</li>
                <li><strong>× 100:</strong> Add 2 zeros to the end of the number</li>
                <li><strong>× 1000:</strong> Add 3 zeros to the end of the number</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>5 × 10 = 50 (add one zero)</li>
                <li>5 × 100 = 500 (add two zeros)</li>
                <li>5 × 1000 = 5,000 (add three zeros)</li>
                <li>23 × 10 = 230</li>
                <li>45 × 100 = 4,500</li>
                <li>67 × 1000 = 67,000</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Pattern Discovery</div>
                <p>3 × 10 = 30<br>3 × 100 = 300<br>3 × 1,000 = 3,000<br>Do you see the pattern? The number of zeros in the multiplier tells you how many zeros to add!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> More Examples</div>
                <p>12 × 10 = 120<br>12 × 100 = 1,200<br>12 × 1,000 = 12,000</p>
                <p>345 × 10 = 3,450<br>345 × 100 = 34,500<br>345 × 1,000 = 345,000</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real World</div>
                <p>If one dollar is worth 100 cents, then $23 = 23 × 100 = 2,300 cents!</p>
            </div>
        `,
        taskInstructions: "Complete the multiplication by 10, 100, and 1000 problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Multiply by 10</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 7 × 10 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 15 × 10 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 246 × 10 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiply by 100</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 8 × 100 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 37 × 100 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 512 × 100 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Multiply by 1000</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> 4 × 1000 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 19 × 1000 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 324 × 1000 = 
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> 52 × 10 = 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> 63 × 100 = 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 87 × 1000 = 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> 105 × 100 = 
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Describe the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">14</span> What pattern do you notice when multiplying by 10, 100, and 1000?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a poster showing the rule for multiplying by 10, 100, and 1000. Include 5 examples of each.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Number Facts and Patterns (10 fact, 5 fact)",
        lessonContent: `
            <p>Today we'll use number facts and patterns to multiply faster and smarter!</p>
            <p><strong>Key Question:</strong> How can knowing 10-fact help me find 5-fact?</p>
            <p><strong>Introduction:</strong> Sometimes we can use what we already know to solve new problems. If we know ×10, we can find ×5 (because 5 is half of 10).</p>
            <p><strong>The 10-Fact Strategy:</strong></p>
            <ul>
                <li>10-fact = number × 10 (just add a zero)</li>
                <li>5-fact = 10-fact ÷ 2 (half of the 10-fact)</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>8 × 10 = 80, so 8 × 5 = 40 (half of 80)</li>
                <li>12 × 10 = 120, so 12 × 5 = 60 (half of 120)</li>
                <li>23 × 10 = 230, so 23 × 5 = 115 (half of 230)</li>
            </ul>
            <p><strong>Other Helpful Patterns:</strong></p>
            <ul>
                <li>×9: multiply by 10 and subtract the number (12 × 9 = 120 - 12 = 108)</li>
                <li>×11: multiply by 10 and add the number (12 × 11 = 120 + 12 = 132)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Finding 5-Fact</div>
                <p>36 × 5 = ?<br>36 × 10 = 360<br>Half of 360 = 180<br>So 36 × 5 = 180!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Finding 9-Fact</div>
                <p>25 × 9 = ?<br>25 × 10 = 250<br>250 - 25 = 225<br>So 25 × 9 = 225!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Finding 11-Fact</div>
                <p>18 × 11 = ?<br>18 × 10 = 180<br>180 + 18 = 198<br>So 18 × 11 = 198!</p>
            </div>
        `,
        taskInstructions: "Use the 10-fact strategy and patterns to solve these problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding 5-Fact (Use the 10-fact then halve it)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 14 × 5 = (First find 14 × 10 = ___ , then half = ___)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 28 × 5 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 45 × 5 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 63 × 5 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 120 × 5 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding 9-Fact and 11-Fact</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 16 × 9 = (16 × 10 = 160, 160 - 16 = ___)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 24 × 9 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 31 × 9 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 15 × 11 = (15 × 10 = 150, 150 + 15 = ___)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 22 × 11 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> 40 × 11 = 
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">12</span> Complete the pattern: 2 × 5 = 10, 4 × 5 = 20, 6 × 5 = 30, 8 × 5 = ___, 10 × 5 = ___
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> What pattern do you notice in the answers above?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own 5 problems using the 5-fact strategy and 5 problems using the 9-fact strategy. Show your work step by step.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Multiplication",
        subtopic: "Applying Multiplication: Quantities and Money",
        lessonContent: `
            <p>Today we'll use everything we've learned to solve real-world problems with quantities and money!</p>
            <p><strong>Key Question:</strong> How can multiplication help us with shopping and counting large quantities?</p>
            <p><strong>Introduction:</strong> Multiplication is everywhere - when we buy multiple items, calculate total cost, or count large groups of objects.</p>
            <p><strong>Money Multiplication Examples:</strong></p>
            <ul>
                <li>One apple costs $3. How much for 12 apples? 3 × 12 = $36</li>
                <li>One pencil costs 50¢. How much for 25 pencils? 50 × 25 = 1,250¢ = $12.50</li>
            </ul>
            <p><strong>Quantity Multiplication Examples:</strong></p>
            <ul>
                <li>A box holds 24 eggs. How many eggs in 15 boxes? 24 × 15 = 360 eggs</li>
                <li>One bag has 100 beads. How many beads in 23 bags? 100 × 23 = 2,300 beads</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Problem</div>
                <p>A toy costs $45. If you buy 7 toys, how much will you pay?<br>45 × 7 = $315</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-boxes"></i> Quantity Problem</div>
                <p>A classroom has 32 desks. Each desk has 4 legs. How many desk legs total?<br>32 × 4 = 128 legs</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coins"></i> Money Problem</div>
                <p>A juice costs $2.50. What is the cost for 10 juices?<br>$2.50 × 10 = $25.00</p>
            </div>
        `,
        taskInstructions: "Solve these real-world multiplication problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Money Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A sandwich costs $5. How much for 12 sandwiches?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A movie ticket costs $12. How much for 25 tickets?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A pack of markers costs $3.50. How much for 8 packs?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A notebook costs $2.25. How much for 16 notebooks?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Quantity Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A jar holds 45 candies. How many candies in 9 jars?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A school has 28 classrooms. Each classroom has 32 chairs. How many chairs total?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A delivery truck carries 125 boxes. Each box has 24 water bottles. How many water bottles total?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> A farmer plants 15 rows of corn. Each row has 28 corn stalks. How many corn stalks total?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Challenges</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> You buy 6 packs of stickers. Each pack costs $4 and has 50 stickers. How much money do you spend? How many stickers do you get?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> A baker makes 48 cupcakes each day. How many cupcakes does she make in 30 days? If each cupcake sells for $2, how much money does she earn?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Write your own multiplication word problem about shopping or quantities. Then solve it.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Go shopping with a family member (or look at a grocery ad). Find 5 items, write their prices, and calculate the cost if you bought 10 of each item.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek8);
    console.log("grade3-math-science-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek8);
    console.log("grade3-math-science-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek8',
        metadata: grade3MathScienceWeek8.metadata,
        days: grade3MathScienceWeek8
    });
    console.log("grade3-math-science-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek8 = grade3MathScienceWeek8;
console.log("grade3-math-science-week8.js loaded and registered successfully");