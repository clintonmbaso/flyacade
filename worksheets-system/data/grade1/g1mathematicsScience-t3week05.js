// Grade 1 Mathematics & Science - Term 3 Week 5 Data
const grade1MathScienceWeek5 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 3,
        week: 5,
        title: "Addition up to 100",
        description: "Adding single-digit numbers up to 18, adding without carrying, completing number sentences, and using addition with money"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Adding Single-Digit Numbers (Sum up to 18)",
        lessonContent: `
            <p>Welcome to our addition week! Today we'll learn about adding single-digit numbers and discover the special "ten" as a unit.</p>
            <p><strong>Key Question:</strong> How can we make a group of ten when we add numbers?</p>
            <p><strong>Introduction:</strong> When we add two numbers, sometimes we get a number that is ten or more. Ten is a special number - it's like a "super unit" that helps us count bigger numbers!</p>
            <p><strong>What is a "Ten as a Unit"?</strong></p>
            <ul>
                <li>10 ones make 1 ten</li>
                <li>When we have 10 things, we can bundle them together</li>
                <li>Example: 10 pencils = 1 bundle of ten pencils</li>
            </ul>
            <p><strong>Adding to Make Ten:</strong></p>
            <ul>
                <li>7 + 3 = 10 (three more makes a ten!)</li>
                <li>8 + 2 = 10</li>
                <li>9 + 1 = 10</li>
                <li>5 + 5 = 10</li>
            </ul>
            <p><strong>Adding Numbers Up to 18:</strong></p>
            <ul>
                <li>9 + 9 = 18 (this is the biggest sum we'll learn today!)</li>
                <li>8 + 7 = 15 (8 + 2 = 10, plus 5 more = 15)</li>
                <li>6 + 8 = 14 (6 + 4 = 10, plus 4 more = 14)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg Carton Math</div>
                <p>An egg carton has 10 spaces. If you have 6 eggs and add 4 more, the carton is full! 6 + 4 = 10 (one full carton).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fingerprint"></i> Finger Counting</div>
                <p>You have 10 fingers. 7 + 3 = 10 uses all your fingers! 9 + 9 = 18 would need two people's fingers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy-cane"></i> Candy Counting</div>
                <p>You have 8 candies. Your friend gives you 5 more. 8 + 5 = 13. That's 1 group of ten and 3 extra candies!</p>
            </div>
        `,
        taskInstructions: "Practice adding single-digit numbers and making groups of ten.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Making Ten</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing number to make 10:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 6 + ___ = 10</div>
                        <div>• 3 + ___ = 10</div>
                        <div>• 9 + ___ = 10</div>
                        <div>• 4 + ___ = 10</div>
                        <div>• 2 + ___ = 10</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Single-Digit Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                        <div>a) 7 + 6 = ___</div>
                        <div>b) 8 + 4 = ___</div>
                        <div>c) 5 + 9 = ___</div>
                        <div>d) 9 + 5 = ___</div>
                        <div>e) 8 + 8 = ___</div>
                        <div>f) 6 + 7 = ___</div>
                        <div>g) 4 + 9 = ___</div>
                        <div>h) 9 + 9 = ___</div>
                        <div>i) 7 + 7 = ___</div>
                        <div>j) 8 + 9 = ___</div>
                        <div>k) 5 + 8 = ___</div>
                        <div>l) 6 + 9 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Bundles</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the number as bundles of ten and extra ones:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 14 = ___ bundle(s) of ten and ___ extra ones</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• 17 = ___ bundle(s) of ten and ___ extra ones</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div style="margin-top: 10px;">• 12 = ___ bundle(s) of ten and ___ extra ones</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice adding single-digit numbers with a family member. Use 10 small objects (beans, buttons, or coins) to build groups of ten.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Adding Whole Numbers (Sums up to 100 Without Carrying)",
        lessonContent: `
            <p>Today we'll learn to add bigger numbers! We'll add whole numbers up to 100 without needing to carry over.</p>
            <p><strong>Key Question:</strong> How do we add tens and ones separately?</p>
            <p><strong>Introduction:</strong> When we add numbers like 23 + 14, we can add the tens first, then the ones. No carrying means each column stays less than 10!</p>
            <p><strong>Adding Tens and Ones Separately:</strong></p>
            <ul>
                <li>Look at the tens place: 2 tens + 1 ten = 3 tens</li>
                <li>Look at the ones place: 3 ones + 4 ones = 7 ones</li>
                <li>Put them together: 3 tens and 7 ones = 37</li>
            </ul>
            <p><strong>Example: 24 + 35</strong></p>
            <ul>
                <li>Tens: 20 + 30 = 50</li>
                <li>Ones: 4 + 5 = 9</li>
                <li>Total: 50 + 9 = 59</li>
            </ul>
            <p><strong>Rule for No Carrying Addition:</strong> The ones place cannot add up to 10 or more. The tens place cannot add up to 10 or more (that would be 100 or more).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Breaking Apart</div>
                <p>42 + 36 = ? First, break them: 40 and 2, plus 30 and 6. Add tens: 40+30=70. Add ones: 2+6=8. Total: 78.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-table"></i> Place Value Chart</div>
                <p>Write numbers in a place value chart:<br>
                53 = 5 tens + 3 ones<br>
                24 = 2 tens + 4 ones<br>
                Add: 7 tens + 7 ones = 77</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Count</div>
                <p>There are 23 boys and 24 girls in the school. 20+20=40 boys and girls, plus 3+4=7, total 47 students!</p>
            </div>
        `,
        taskInstructions: "Practice adding whole numbers up to 100 without carrying.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Tens and Ones</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these addition problems without carrying:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
                        <div>a) 23 + 14 = ___</div>
                        <div>b) 31 + 25 = ___</div>
                        <div>c) 42 + 33 = ___</div>
                        <div>d) 15 + 42 = ___</div>
                        <div>e) 54 + 23 = ___</div>
                        <div>f) 61 + 27 = ___</div>
                        <div>g) 30 + 45 = ___</div>
                        <div>h) 72 + 15 = ___</div>
                        <div>i) 43 + 32 = ___</div>
                        <div>j) 21 + 54 = ___</div>
                        <div>k) 35 + 42 = ___</div>
                        <div>l) 64 + 23 = ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Place Value Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the place value chart to help you add:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>
                            <table style="width: 100%; border-collapse: collapse; text-align: center;">
                                <tr style="background-color: #4A90E2; color: white;">
                                    <th style="padding: 10px; border: 1px solid #ddd;">Problem</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Tens</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Ones</th>
                                    <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">34 + 25</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">52 + 36</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd;">41 + 27</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___ + ___ = ___</td>
                                    <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                 </tr>
                             </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these word problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sarah has 23 stickers. Tom has 34 stickers. How many stickers do they have together?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• There are 45 red balloons and 32 blue balloons at a party. How many balloons are there in total?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• A farmer has 52 chickens and 36 ducks. How many birds does the farmer have?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things at home with two-digit numbers (like page numbers, prices, or ages). Add two of them together without carrying.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Completing Addition Number Sentences",
        lessonContent: `
            <p>Today we'll become detectives! We'll find missing numbers in addition sentences.</p>
            <p><strong>Key Question:</strong> How can we find a missing number in an addition problem?</p>
            <p><strong>What is an addition number sentence?</strong></p>
            <ul>
                <li>An addition number sentence looks like this: ___ + 5 = 12</li>
                <li>It always has an equals sign (=)</li>
                <li>The equals sign means "is the same as"</li>
            </ul>
            <p><strong>How to Find the Missing Number:</strong></p>
            <ul>
                <li>Think: "What number plus this number equals the total?"</li>
                <li>Or: "Total minus the number I know = the missing number"</li>
                <li>Example: ___ + 4 = 9 → 9 - 4 = 5 → So 5 + 4 = 9</li>
                <li>Example: 13 + ___ = 25 → 25 - 13 = 12 → So 13 + 12 = 25</li>
            </ul>
            <p><strong>Remember:</strong> The missing number can be at the beginning, in the middle, or at the end!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Detective Work</div>
                <p>___ + 7 = 15. What is the missing number? 15 - 7 = 8. So 8 + 7 = 15!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Balancing Act</div>
                <p>Think of the equals sign as a balance. Both sides must weigh the same. 24 + ___ = 36. 36 - 24 = 12. The missing number is 12.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Missing Anywhere</div>
                <p>5 + ___ = 14 (missing in middle) → 14 - 5 = 9<br>
                8 + 6 = ___ (missing at end) → 8 + 6 = 14<br>
                ___ + 9 = 17 (missing at start) → 17 - 9 = 8</p>
            </div>
        `,
        taskInstructions: "Find missing numbers in addition sentences up to 100.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Missing Number (Basic)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing number:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) 5 + ___ = 12</div>
                        <div>b) ___ + 7 = 14</div>
                        <div>c) 8 + 4 = ___</div>
                        <div>d) ___ + 9 = 16</div>
                        <div>e) 6 + ___ = 13</div>
                        <div>f) 9 + ___ = 18</div>
                        <div>g) ___ + 5 = 11</div>
                        <div>h) 7 + 7 = ___</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Two-Digit Missing Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the missing number in these two-digit addition sentences:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) 23 + ___ = 45</div>
                        <div>b) ___ + 34 = 57</div>
                        <div>c) 42 + 15 = ___</div>
                        <div>d) ___ + 26 = 48</div>
                        <div>e) 31 + ___ = 59</div>
                        <div>f) 52 + 23 = ___</div>
                        <div>g) ___ + 41 = 78</div>
                        <div>h) 64 + ___ = 89</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete these addition sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 47 + ___ = 68</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• ___ + 32 = 54</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• 25 + 33 = ___</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• ___ + 43 = 79</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• 56 + ___ = 89</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create 5 addition number sentences with missing numbers. Ask a family member to solve them, or solve their missing number problems!",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Addition",
        subtopic: "Using Addition for Activities Involving Money",
        lessonContent: `
            <p>Today we'll use our addition skills with money! We'll learn to add coins and bills to find totals.</p>
            <p><strong>Key Question:</strong> How do we add money to find out how much we have or need?</p>
            <p><strong>Money in Zambia:</strong></p>
            <ul>
                <li>Coins: 5 ngwee, 10 ngwee, 50 ngwee, 1 kwacha, 2 kwacha, 5 kwacha</li>
                <li>Notes (Bills): 2 kwacha, 5 kwacha, 10 kwacha, 20 kwacha, 50 kwacha, 100 kwacha</li>
                <li>100 ngwee = 1 kwacha</li>
            </ul>
            <p><strong>Adding Money Step by Step:</strong></p>
            <ul>
                <li>First, add the kwacha (the whole numbers)</li>
                <li>Then, add the ngwee (the small amounts)</li>
                <li>If ngwee add up to 100 or more, convert to kwacha</li>
            </ul>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>5 kwacha + 3 kwacha = 8 kwacha</li>
                <li>2 kwacha 50 ngwee + 1 kwacha 20 ngwee = 3 kwacha 70 ngwee</li>
                <li>10 kwacha + 5 kwacha = 15 kwacha</li>
            </ul>
            <p><strong>Shopping Scenario:</strong> If a mango costs 3 kwacha and an orange costs 2 kwacha, how much for both? 3 + 2 = 5 kwacha!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Market Visit</div>
                <p>You buy a notebook for 8 kwacha and a pencil for 2 kwacha. 8 kwacha + 2 kwacha = 10 kwacha total.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Saving Money</div>
                <p>You have 15 kwacha in your piggy bank. You add 10 kwacha from your chores. Now you have 15 + 10 = 25 kwacha!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-candy"></i> Snack Time</div>
                <p>A candy costs 1 kwacha 50 ngwee. Another candy costs 2 kwacha. Total = 1 kwacha 50 ngwee + 2 kwacha = 3 kwacha 50 ngwee.</p>
            </div>
        `,
        taskInstructions: "Practice adding money amounts and solving shopping problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Coins and Notes</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add these money amounts:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>a) 5 kwacha + 3 kwacha = ___</div>
                        <div>b) 10 kwacha + 7 kwacha = ___</div>
                        <div>c) 2 kwacha + 4 kwacha = ___</div>
                        <div>d) 20 kwacha + 15 kwacha = ___</div>
                        <div>e) 8 kwacha + 9 kwacha = ___</div>
                        <div>f) 12 kwacha + 6 kwacha = ___</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Mixed Amounts (Kwacha and Ngwee)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add these amounts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• 3 kwacha 20 ngwee + 2 kwacha 30 ngwee = ___ kwacha ___ ngwee</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• 5 kwacha 50 ngwee + 4 kwacha 20 ngwee = ___ kwacha ___ ngwee</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• 10 kwacha + 5 kwacha 40 ngwee = ___ kwacha ___ ngwee</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                        <div>• 7 kwacha 15 ngwee + 2 kwacha 30 ngwee = ___ kwacha ___ ngwee</div>
                        <div class="answer-space" style="height: 30px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Shopping Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these real-life money problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Maria buys a bread for 8 kwacha and milk for 5 kwacha. How much does she spend?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• John has 15 kwacha. His grandmother gives him 10 kwacha. How much money does John have now?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• A toy car costs 22 kwacha and a ball costs 15 kwacha. What is the total cost?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">• At the market, bananas cost 4 kwacha and apples cost 7 kwacha. How much for both?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Own Shop</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw 3 items you would like to buy. Write their prices. Then write the addition sentence to find the total cost:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, practice adding small amounts of money (coins or small notes). Try a pretend shopping trip at home!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek5);
    console.log("grade1-mathscience-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek5);
    console.log("grade1-mathscience-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek5',
        metadata: grade1MathScienceWeek5.metadata,
        days: grade1MathScienceWeek5
    });
    console.log("grade1-mathscience-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek5 = grade1MathScienceWeek5;
console.log("grade1-mathscience-week5.js loaded and registered successfully");