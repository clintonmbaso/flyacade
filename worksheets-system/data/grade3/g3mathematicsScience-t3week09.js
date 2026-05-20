// Grade 3 Mathematics & Science - Term 3 Week 9 Data
const grade3MathsScienceWeek9 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 3,
        week: 9,
        title: "Division Mastery",
        description: "Dividing numbers, remainders, patterns, and real-world applications including money"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Long Division (1-digit, 2-digit, 3-digit ÷ 1-digit)",
        lessonContent: `
            <p>Welcome to our division week! Today we'll learn how to divide numbers using long division.</p>
            <p><strong>Key Question:</strong> How can we divide large numbers into equal groups?</p>
            <p><strong>Introduction:</strong> Division means sharing equally. When we divide, we find out how many are in each group or how many groups we can make.</p>
            <p><strong>Long Division Steps (DMSCB):</strong></p>
            <ol>
                <li><strong>D</strong> - Divide: How many times does the divisor go into the first digit?</li>
                <li><strong>M</strong> - Multiply: Multiply the answer by the divisor</li>
                <li><strong>S</strong> - Subtract: Subtract the product from the digits</li>
                <li><strong>C</strong> - Bring down: Bring down the next digit</li>
                <li><strong>B</strong> - Repeat until done!</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>42 ÷ 2 = 21 (Divide 4÷2=2, then 2÷2=1)</li>
                <li>84 ÷ 4 = 21 (4 goes into 8 two times, then 4 goes into 4 one time)</li>
                <li>369 ÷ 3 = 123 (3÷3=1, 6÷3=2, 9÷3=3)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy-cane"></i> Sharing Candy</div>
                <p>If you have 48 candies and 4 friends, how many does each friend get? 48 ÷ 4 = 12 candies each!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Party</div>
                <p>84 slices of pizza shared among 7 tables. 84 ÷ 7 = 12 slices per table.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Teams</div>
                <p>Divide 126 students into 6 equal teams. 126 ÷ 6 = 21 students per team.</p>
            </div>
        `,
        taskInstructions: "Practice long division problems and show your work.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: 1-Digit ÷ 1-Digit</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 8 ÷ 2 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 15 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 24 ÷ 4 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: 2-Digit ÷ 1-Digit</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 48 ÷ 2 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 63 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> 96 ÷ 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 75 ÷ 5 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 84 ÷ 6 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: 3-Digit ÷ 1-Digit</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> 123 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 248 ÷ 2 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> 369 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 484 ÷ 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> 555 ÷ 5 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">14</span> A farmer has 84 apples to pack into 7 baskets equally. How many apples in each basket?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">15</span> 246 students are going on 2 buses. How many students on each bus?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Practice 5 division problems at home: 1-digit ÷ 1-digit, 2-digit ÷ 1-digit, and 3-digit ÷ 1-digit.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Division with Remainders",
        lessonContent: `
            <p>Today we'll learn what happens when numbers don't divide equally - we get remainders!</p>
            <p><strong>Key Question:</strong> What do we do when we can't share equally?</p>
            <p><strong>Introduction:</strong> Sometimes when we divide, there are leftovers. These leftovers are called <strong>remainders</strong>.</p>
            <p><strong>Remainder Strategies:</strong></p>
            <ul>
                <li>Use multiplication to check: (divisor × quotient) + remainder = dividend</li>
                <li>Remainder is always smaller than the divisor!</li>
                <li>When writing answers: 13 ÷ 4 = 3 R1 (3 remainder 1)</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>13 ÷ 4 = 3 R1 (4×3=12, plus 1 left over)</li>
                <li>25 ÷ 7 = 3 R4 (7×3=21, plus 4 left over)</li>
                <li>19 ÷ 5 = 3 R4 (5×3=15, plus 4 left over)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Sharing</div>
                <p>If 17 cookies are shared among 5 friends, each gets 3 cookies and 2 are left over. 17 ÷ 5 = 3 R2</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Car Seats</div>
                <p>29 children need rides. Each car holds 4 children. 29 ÷ 4 = 7 cars with 1 child left over (need 8 cars!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Groups</div>
                <p>23 students, groups of 3. 23 ÷ 3 = 7 groups R2 (2 students need to join other groups)</p>
            </div>
        `,
        taskInstructions: "Divide numbers with remainders using different strategies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Remainders</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 7 ÷ 2 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 10 ÷ 3 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 14 ÷ 4 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 18 ÷ 5 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 20 ÷ 6 = ______ R ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: 2-Digit ÷ 1-Digit with Remainders</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 23 ÷ 4 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 35 ÷ 6 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 47 ÷ 5 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 52 ÷ 7 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 68 ÷ 9 = ______ R ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: 3-Digit ÷ 1-Digit with Remainders</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> 100 ÷ 6 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 125 ÷ 4 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> 200 ÷ 7 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> 300 ÷ 8 = ______ R ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems with Remainders</strong></p>
                <div class="task-item">
                    <span class="task-number">15</span> There are 31 eggs. Each carton holds 6 eggs. How many full cartons can be made? How many eggs are left over?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">16</span> 50 marbles are shared among 8 friends. How many marbles does each get? How many are left?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 real-life situations at home where division with remainders might happen (e.g., sharing snacks, arranging chairs). Write them down.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Number Patterns Involving Division",
        lessonContent: `
            <p>Today we'll discover patterns in division! Patterns help us understand numbers better.</p>
            <p><strong>Key Question:</strong> What patterns can we find when we divide numbers?</p>
            <p><strong>Patterns in Division:</strong></p>
            <ul>
                <li>Dividing by 1: Any number ÷ 1 = the same number (12 ÷ 1 = 12)</li>
                <li>Dividing by itself: Any number ÷ itself = 1 (7 ÷ 7 = 1)</li>
                <li>Dividing by 10: Just remove the last zero (50 ÷ 10 = 5)</li>
                <li>Dividing by 2: Numbers ending in 0,2,4,6,8 (even numbers)</li>
                <li>Dividing by 5: Numbers ending in 0 or 5</li>
            </ul>
            <p><strong>Pattern Tables:</strong></p>
            <p>24 ÷ 2 = 12<br>
            24 ÷ 3 = 8<br>
            24 ÷ 4 = 6<br>
            24 ÷ 6 = 4<br>
            24 ÷ 8 = 3<br>
            24 ÷ 12 = 2</p>
            <p>See how the quotient gets smaller as the divisor gets larger!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Inverse Pattern</div>
                <p>Multiplication and division are opposites! If 8 × 3 = 24, then 24 ÷ 3 = 8 and 24 ÷ 8 = 3.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> 36's Family</div>
                <p>36 ÷ 1 = 36, 36 ÷ 2 = 18, 36 ÷ 3 = 12, 36 ÷ 4 = 9, 36 ÷ 6 = 6, 36 ÷ 9 = 4, 36 ÷ 12 = 3, 36 ÷ 18 = 2, 36 ÷ 36 = 1</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-down"></i> Halving Pattern</div>
                <p>Dividing by 2 over and over: 64 ÷ 2 = 32, 32 ÷ 2 = 16, 16 ÷ 2 = 8, 8 ÷ 2 = 4, 4 ÷ 2 = 2, 2 ÷ 2 = 1</p>
            </div>
        `,
        taskInstructions: "Identify and complete division patterns.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 40 ÷ 2 = _____, 40 ÷ 4 = _____, 40 ÷ 5 = _____, 40 ÷ 8 = _____
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 60 ÷ 2 = _____, 60 ÷ 3 = _____, 60 ÷ 4 = _____, 60 ÷ 5 = _____, 60 ÷ 6 = _____
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 100 ÷ 10 = _____, 90 ÷ 10 = _____, 80 ÷ 10 = _____, 70 ÷ 10 = _____
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Missing Number</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> 24 ÷ _____ = 4
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 45 ÷ _____ = 9
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> _____ ÷ 6 = 7
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> _____ ÷ 5 = 8
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fact Families</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Write the fact family for 6, 7, and 42:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Write the fact family for 8, 9, and 72:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Extension</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> Continue the pattern: 81 ÷ 9 = 9, 72 ÷ 9 = 8, 63 ÷ 9 = 7, _____ = _____, _____ = _____
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> What pattern do you notice about dividing by 10? Give 3 examples.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own division pattern table using the number 48. Divide 48 by all numbers that divide evenly (1,2,3,4,6,8,12,16,24,48).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Division",
        subtopic: "Division with Different Quantities and Money",
        lessonContent: `
            <p>Today we'll apply division to real-world situations including different quantities and money!</p>
            <p><strong>Key Question:</strong> How is division used when shopping and handling money?</p>
            <p><strong>Division with Money:</strong></p>
            <ul>
                <li>Finding cost per item: Total cost ÷ number of items = price per item</li>
                <li>Finding how many you can buy: Money you have ÷ cost per item = number of items</li>
                <li>Sharing money equally among friends</li>
            </ul>
            <p><strong>Different Quantities:</strong></p>
            <ul>
                <li>Weight: 1 kg ÷ 4 = 250g</li>
                <li>Length: 1 meter ÷ 5 = 20cm</li>
                <li>Time: 60 minutes ÷ 3 = 20 minutes</li>
                <li>Volume: 1 liter ÷ 4 = 250ml</li>
            </ul>
            <p><strong>Money Examples:</strong></p>
            <ul>
                <li>$36 shared among 4 people = $9 each</li>
                <li>If apples cost $3 each, how many can you buy with $24? 24 ÷ 3 = 8 apples</li>
                <li>$1.20 ÷ 4 = $0.30 each (30 cents)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Shopping Trip</div>
                <p>You have $50. Each toy costs $6. How many can you buy? 50 ÷ 6 = 8 toys with $2 leftover.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Baking Cookies</div>
                <p>A recipe needs 500g of flour. You have 2kg (2000g). How many batches? 2000 ÷ 500 = 4 batches.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Time Management</div>
                <p>You have 60 minutes to complete 5 math problems. How many minutes per problem? 60 ÷ 5 = 12 minutes each.</p>
            </div>
        `,
        taskInstructions: "Solve real-world division problems involving different quantities and money.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sharing Money</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 4 friends share $28 equally. How much does each get?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 6 cousins share $54. How much does each get?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 3 siblings share $12.60. How much each?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: How Many Can You Buy?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Stickers cost $5 each. How many can you buy with $40?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Chocolates cost $7 each. How many can you buy with $63?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Pens cost $2 each. How many can you buy with $23?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Cost Per Item</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> A 6-pack of juice costs $12. How much per bottle?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 8 erasers cost $4.80. How much each?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> A bag of 20 apples costs $10. How much per apple?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Different Quantities</strong></p>
                <div class="task-item">
                    <span class="task-number">10</span> 1 meter of ribbon (100cm) is cut into 5 equal pieces. How long is each piece?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">11</span> 1 kilogram of rice (1000g) is divided into 8 equal portions. How many grams per portion?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 1 hour (60 minutes) divided into 4 equal activities. How many minutes per activity?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Mixed Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">13</span> You have $100. You buy 8 books for $64 total. How much per book? How much money left?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> A 2-liter bottle of soda (2000ml) is shared equally among 8 people. How many ml per person?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Go to a kitchen or shop with your parents. Find 3 items that come in packs (e.g., 6 eggs, 12 cans). Calculate the price per item using division.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Quiz",
        subtopic: "Multiplication and Division",
        lessonContent: `
            <p>Today we'll review everything we've learned about multiplication and division this week!</p>
            <p><strong>Week 9 Review:</strong></p>
            <ul>
                <li>Long division (1-digit, 2-digit, 3-digit ÷ 1-digit)</li>
                <li>Division with remainders</li>
                <li>Number patterns in division</li>
                <li>Division with different quantities and money</li>
            </ul>
            <p><strong>Key Reminders:</strong></p>
            <ul>
                <li>Division is sharing equally</li>
                <li>Remainder is always less than the divisor</li>
                <li>Multiplication and division are inverse operations</li>
                <li>Check your answers with multiplication!</li>
            </ul>
            <p><strong>Quiz Instructions:</strong></p>
            <p>Complete all questions carefully. Show your work. You have 45 minutes. Good luck!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Tips</div>
                <p>Remember: If you're stuck, think about multiplication facts. 72 ÷ 8 = ? Think: 8 × ? = 72 (8 × 9 = 72, so answer is 9!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Show Your Work</div>
                <p>For long division, write each step. For word problems, underline important numbers and circle what the question asks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> Time Management</div>
                <p>Spend about 2 minutes on each question. Leave hard questions for the end and come back to them.</p>
            </div>
        `,
        taskInstructions: "Complete the multiplication and division quiz.",
        taskContent: `
            <div class="content-box">
                <p><strong>Section A: Multiplication Facts (1 point each)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 7 × 8 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> 9 × 6 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> 12 × 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> 11 × 7 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> 6 × 9 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section B: Division Facts (1 point each)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> 36 ÷ 6 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> 45 ÷ 9 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> 64 ÷ 8 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> 28 ÷ 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> 81 ÷ 9 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section C: Long Division - No Remainders (2 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> 96 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">12</span> 84 ÷ 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">13</span> 369 ÷ 3 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">14</span> 484 ÷ 4 = ______
                </div>
                <div class="task-item">
                    <span class="task-number">15</span> 525 ÷ 5 = ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section D: Division with Remainders (2 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">16</span> 29 ÷ 4 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">17</span> 58 ÷ 7 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">18</span> 73 ÷ 8 = ______ R ______
                </div>
                <div class="task-item">
                    <span class="task-number">19</span> 125 ÷ 6 = ______ R ______
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section E: Money & Quantity Problems (3 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">20</span> 5 friends share $45 equally. How much does each get?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">21</span> Each pencil costs $3. How many pencils can you buy with $27?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">22</span> A 6-pack of water bottles costs $7.20. How much per bottle?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">23</span> You have 120 minutes for 4 subjects. How many minutes per subject?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Section F: Word Problems (4 points each)</strong></p>
                <div class="task-item">
                    <span class="task-number">24</span> A baker makes 250 cookies. He packs them in boxes of 8 cookies each. How many full boxes can he make? How many cookies are left over?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">25</span> There are 156 students going on a field trip. Each bus holds 24 students. How many buses are needed? (Hint: Think about remainders!)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Bonus Question (5 points)</strong></p>
                <div class="task-item">
                    <span class="task-number">⭐</span> Create your own multiplication and division fact family using the numbers 9, 8, and 72. Then explain the inverse relationship.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Review your quiz answers with a family member. Practice any problems you found difficult. Write down 5 division facts you need to practice more.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathsScienceWeek9);
    console.log("grade3-maths-science-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathsScienceWeek9);
    console.log("grade3-maths-science-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathsScienceWeek9',
        metadata: grade3MathsScienceWeek9.metadata,
        days: grade3MathsScienceWeek9
    });
    console.log("grade3-maths-science-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathsScienceWeek9 = grade3MathsScienceWeek9;
console.log("grade3-maths-science-week9.js loaded and registered successfully");