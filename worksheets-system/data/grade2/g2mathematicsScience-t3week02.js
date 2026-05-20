// Grade 2 Mathematics & Science - Term 3 Week 2 Data
const grade2MathScienceWeek2 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 3,
        week: 2,
        title: "Addition (Whole Numbers)",
        description: "Adding whole numbers using materials, vertical addition with carrying, sums up to 999, commutative law and zero property"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Numbers Using Different Materials",
        lessonContent: `
            <p>Welcome to our addition adventure! Today we'll learn how to add numbers using fun materials like tiles and number lines.</p>
            <p><strong>Key Question:</strong> How can we use objects and drawings to add numbers together?</p>
            <p><strong>Introduction:</strong> Addition means putting groups together to find the total. When we add, we find out "how many in all."</p>
            <p><strong>Ways to Add:</strong></p>
            <ol>
                <li><strong>Using Tiles/Counters:</strong> Put out tiles for the first number, then add tiles for the second number. Count all the tiles to find the sum.</li>
                <li><strong>Using a Number Line:</strong> Start at the first number, then jump forward the number of steps in the second number. Where you land is the sum.</li>
                <li><strong>Using Your Fingers:</strong> Hold up fingers for the first number, then more fingers for the second number. Count all your fingers!</li>
            </ol>
            <p><strong>Vocabulary:</strong></p>
            <ul>
                <li><strong>Addend:</strong> The numbers being added together</li>
                <li><strong>Sum:</strong> The answer when you add</li>
                <li><strong>Plus (+):</strong> The symbol that means "add"</li>
                <li><strong>Equals (=):</strong> The symbol that means "the same as"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Tile Example</div>
                <p>3 + 2 = ?</p>
                <p>🔵🔵🔵 + 🔵🔵 = 🔵🔵🔵🔵🔵 (5 tiles total!)</p>
                <p>So, 3 + 2 = 5</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Number Line Example</div>
                <p>4 + 3 = ?</p>
                <p>Start at 4. Jump 3 steps forward: 4 → 5 → 6 → 7</p>
                <p>So, 4 + 3 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Finger Example</div>
                <p>2 + 4 = ?</p>
                <p>Hold up 2 fingers ✌️, then hold up 4 more fingers 🖐️. Count all your fingers: 6!</p>
                <p>So, 2 + 4 = 6</p>
            </div>
        `,
        taskInstructions: "Practice adding numbers using tiles, number lines, and drawings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding with Tiles</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use tiles or drawings to solve these problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 + 3 = _____ </div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>b) 4 + 1 = _____ </div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>c) 5 + 2 = _____ </div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>d) 3 + 4 = _____ </div>
                        <div class="drawing-area" style="height: 40px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding with a Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the number line to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number line: 0---1---2---3---4---5---6---7---8---9---10</div>
                        <div style="margin-top: 10px;">a) 3 + 2 = _____ (Start at 3, jump 2)</div>
                        <div>b) 5 + 4 = _____ (Start at 5, jump 4)</div>
                        <div>c) 1 + 6 = _____ (Start at 1, jump 6)</div>
                        <div>d) 4 + 5 = _____ (Start at 4, jump 5)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw circles to solve: 2 + 5 = _____
                    <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a number line to solve: 3 + 6 = _____
                    <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Use objects at home (beans, buttons, or pasta) to solve: 3+4, 5+2, and 1+7. Write the answers in your notebook.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Two Double-Digit Numbers (Sum up to 99)",
        lessonContent: `
            <p>Today we'll learn how to add bigger numbers - two double-digit numbers with sums up to 99!</p>
            <p><strong>Key Question:</strong> How do we add numbers like 23 + 45?</p>
            <p><strong>Adding Without Carrying:</strong></p>
            <p>When we add double-digit numbers, we add the ones place first, then the tens place.</p>
            <p><strong>Example:</strong> 23 + 41</p>
            <ul>
                <li>Step 1: Add the ones: 3 + 1 = 4</li>
                <li>Step 2: Add the tens: 2 + 4 = 6</li>
                <li>Answer: 64</li>
            </ul>
            <p><strong>Adding With Carrying (Regrouping):</strong></p>
            <p>When the ones add up to 10 or more, we "carry" to the tens place.</p>
            <p><strong>Example:</strong> 28 + 36</p>
            <ul>
                <li>Step 1: Add the ones: 8 + 6 = 14</li>
                <li>Step 2: Write 4 in the ones place, carry 1 to the tens place</li>
                <li>Step 3: Add the tens: 2 + 3 + 1 (carried) = 6</li>
                <li>Answer: 64</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> No Carrying Needed</div>
                <p>32 + 25 = ?</p>
                <p>Ones: 2 + 5 = 7</p>
                <p>Tens: 3 + 2 = 5</p>
                <p>Answer: 57</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Carrying Needed</div>
                <p>47 + 28 = ?</p>
                <p>Ones: 7 + 8 = 15 → write 5, carry 1</p>
                <p>Tens: 4 + 2 + 1 = 7</p>
                <p>Answer: 75</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Remember!</div>
                <p>Always add the ones place FIRST. Then add the tens place. Don't forget to carry when the ones add up to 10 or more!</p>
            </div>
        `,
        taskInstructions: "Practice adding two double-digit numbers with and without carrying.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: No Carrying Needed</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 23 + 41 = _____</div>
                        <div>b) 34 + 25 = _____</div>
                        <div>c) 52 + 31 = _____</div>
                        <div>d) 43 + 26 = _____</div>
                        <div>e) 71 + 18 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Carrying Needed (Regrouping)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these addition problems (don't forget to carry!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 28 + 35 = _____</div>
                        <div>b) 46 + 27 = _____</div>
                        <div>c) 39 + 44 = _____</div>
                        <div>d) 57 + 28 = _____</div>
                        <div>e) 68 + 19 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve. Show your work in the space below:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 35 + 42 = _____</div>
                        <div>b) 48 + 36 = _____</div>
                        <div>c) 51 + 29 = _____</div>
                        <div>d) 63 + 24 = _____</div>
                        <div>e) 77 + 18 = _____</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Solve 10 addition problems with two double-digit numbers (mix of with and without carrying). Have a family member check your work.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Vertical Addition with Expanded Notation",
        lessonContent: `
            <p>Today we'll learn how to write addition problems vertically (stacked) and use expanded notation!</p>
            <p><strong>Key Question:</strong> How do we line up numbers when adding vertically?</p>
            <p><strong>Vertical Addition:</strong></p>
            <p>When we add vertically, we write the numbers in a column. Always line up the ones place under the ones place, and tens under tens!</p>
            <div style="text-align: center; margin: 10px 0;">
                <div style="display: inline-block; text-align: right;">
                    <div>34</div>
                    <div>+ 25</div>
                    <div>____</div>
                </div>
            </div>
            <p><strong>Expanded Notation:</strong></p>
            <p>Expanded notation means writing a number as the sum of its parts (tens and ones).</p>
            <p><strong>Example:</strong> 47 = 40 + 7 (4 tens and 7 ones)</p>
            <p><strong>Adding with Expanded Notation:</strong></p>
            <ul>
                <li>Step 1: Write both numbers in expanded form</li>
                <li>Step 2: Add the tens together</li>
                <li>Step 3: Add the ones together</li>
                <li>Step 4: Add the two sums together</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Vertical Addition</div>
                <p>42 + 37</p>
                <div style="font-family: monospace; font-size: 16px;">
                    <div style="text-align: right;">42</div>
                    <div style="text-align: right;">+ 37</div>
                    <div style="text-align: right;">____</div>
                    <div style="text-align: right;">79</div>
                </div>
                <p>Ones: 2 + 7 = 9 | Tens: 4 + 3 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Expanded Notation</div>
                <p>53 + 24 = ?</p>
                <p>53 = 50 + 3</p>
                <p>24 = 20 + 4</p>
                <p>Tens: 50 + 20 = 70</p>
                <p>Ones: 3 + 4 = 7</p>
                <p>70 + 7 = <strong>77</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carry"></i> Vertical with Carrying</div>
                <p>38 + 45</p>
                <div style="font-family: monospace; font-size: 16px;">
                    <div style="text-align: right;">38</div>
                    <div style="text-align: right;">+ 45</div>
                    <div style="text-align: right;">____</div>
                    <div style="text-align: right;">83</div>
                </div>
                <p>Ones: 8 + 5 = 13 → write 3, carry 1 | Tens: 3 + 4 + 1 = 8</p>
            </div>
        `,
        taskInstructions: "Practice vertical addition and expanded notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vertical Addition (No Carrying)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these problems vertically and solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 23 + 41 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>b) 52 + 34 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Vertical Addition (With Carrying)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write these problems vertically and solve (remember to carry!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 47 + 26 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        <div>b) 58 + 37 = _____</div>
                        <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Expanded Notation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use expanded notation to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 45 + 32 = (_____ + _____) + (_____ + _____) = _____</div>
                        <div>b) 67 + 21 = (_____ + _____) + (_____ + _____) = _____</div>
                        <div>c) 38 + 49 = (_____ + _____) + (_____ + _____) = _____</div>
                        <div>d) 54 + 37 = (_____ + _____) + (_____ + _____) = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Show Both Ways</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve 63 + 28 using both vertical AND expanded notation:
                    <div class="answer-space" style="height: 100px; margin-top: 5px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 addition problems vertically and solve them. Use expanded notation for one problem to check your answer.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Adding Whole Numbers with Sums up to 999",
        lessonContent: `
            <p>Today we're adding even bigger numbers - up to 999! We'll learn to add three-digit numbers with regrouping.</p>
            <p><strong>Key Question:</strong> How do we add numbers like 234 + 345?</p>
            <p><strong>Adding Three-Digit Numbers:</strong></p>
            <p>When adding three-digit numbers, we have three places: hundreds (H), tens (T), and ones (O).</p>
            <p><strong>Steps:</strong></p>
            <ol>
                <li>Always start with the ONES place</li>
                <li>Then add the TENS place</li>
                <li>Finally add the HUNDREDS place</li>
                <li>Don't forget to carry/regroup when a column adds up to 10 or more!</li>
            </ol>
            <p><strong>Example without carrying:</strong> 234 + 345</p>
            <ul>
                <li>Ones: 4 + 5 = 9</li>
                <li>Tens: 3 + 4 = 7</li>
                <li>Hundreds: 2 + 3 = 5</li>
                <li>Answer: 579</li>
            </ul>
            <p><strong>Example with carrying:</strong> 378 + 456</p>
            <ul>
                <li>Ones: 8 + 6 = 14 → write 4, carry 1 to tens</li>
                <li>Tens: 7 + 5 + 1 = 13 → write 3, carry 1 to hundreds</li>
                <li>Hundreds: 3 + 4 + 1 = 8</li>
                <li>Answer: 834</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up"></i> No Regrouping</div>
                <p>456 + 321 = ?</p>
                <p>Hundreds: 4 + 3 = 7</p>
                <p>Tens: 5 + 2 = 7</p>
                <p>Ones: 6 + 1 = 7</p>
                <p>Answer: <strong>777</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> With Regrouping (ones to tens)</div>
                <p>347 + 258 = ?</p>
                <p>Ones: 7 + 8 = 15 → write 5, carry 1</p>
                <p>Tens: 4 + 5 + 1 = 10 → write 0, carry 1</p>
                <p>Hundreds: 3 + 2 + 1 = 6</p>
                <p>Answer: <strong>605</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Remember!</div>
                <p>Always line up the digits in the correct place value columns. Write the problem vertically before solving!</p>
            </div>
        `,
        taskInstructions: "Practice adding three-digit numbers with and without regrouping.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: No Regrouping Needed</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve these three-digit addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 123 + 456 = _____</div>
                        <div>b) 234 + 345 = _____</div>
                        <div>c) 345 + 421 = _____</div>
                        <div>d) 512 + 374 = _____</div>
                        <div>e) 631 + 248 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Regrouping Needed (One Place)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these (you may need to regroup once):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 278 + 345 = _____</div>
                        <div>b) 367 + 258 = _____</div>
                        <div>c) 456 + 279 = _____</div>
                        <div>d) 189 + 436 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Multiple Regrouping</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these (you may need to regroup twice):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 378 + 456 = _____</div>
                        <div>b) 489 + 378 = _____</div>
                        <div>c) 567 + 289 = _____</div>
                        <div>d) 678 + 299 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge!</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write these problems vertically and solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 456 + 378 = _____</div>
                        <div>b) 589 + 347 = _____</div>
                        <div>c) 678 + 299 = _____</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 three-digit numbers around your home (page numbers, house numbers, etc.). Add them together with a family member.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Addition",
        subtopic: "Commutative Law & Zero Property of Addition",
        lessonContent: `
            <p>Today we'll learn two special rules of addition: the Commutative Law and the Zero Property!</p>
            <p><strong>Key Question:</strong> Does the order of numbers matter when we add?</p>
            <p><strong>The Commutative Law (Order Doesn't Matter):</strong></p>
            <p>The Commutative Law says: a + b = b + a</p>
            <p>This means you can add numbers in ANY order and get the same sum!</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>3 + 5 = 8 and 5 + 3 = 8</li>
                <li>12 + 7 = 19 and 7 + 12 = 19</li>
                <li>45 + 32 = 77 and 32 + 45 = 77</li>
            </ul>
            <p><strong>The Zero Property (Adding Zero):</strong></p>
            <p>The Zero Property says: a + 0 = a</p>
            <p>When you add zero to any number, the number stays the same!</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>5 + 0 = 5</li>
                <li>0 + 12 = 12</li>
                <li>100 + 0 = 100</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-random"></i> Commutative Law in Action</div>
                <p>4 + 9 = 13</p>
                <p>9 + 4 = 13</p>
                <p>The order changed, but the answer stayed the same!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-0"></i> Zero Property in Action</div>
                <p>17 + 0 = 17</p>
                <p>0 + 42 = 42</p>
                <p>238 + 0 = 238</p>
                <p>Zero doesn't change the number!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Why This Matters</div>
                <p>These rules help us add faster! If you see 1 + 99, you can switch to 99 + 1 to make it easier. And adding zero is always simple!</p>
            </div>
        `,
        taskInstructions: "Practice using the commutative law and zero property.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Commutative Law Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each problem, show the sum and then switch the order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4 + 6 = _____ &nbsp;&nbsp;&nbsp; ___ + ___ = _____</div>
                        <div>b) 8 + 3 = _____ &nbsp;&nbsp;&nbsp; ___ + ___ = _____</div>
                        <div>c) 12 + 5 = _____ &nbsp;&nbsp;&nbsp; ___ + ___ = _____</div>
                        <div>d) 25 + 34 = _____ &nbsp;&nbsp;&nbsp; ___ + ___ = _____</div>
                        <div>e) 47 + 28 = _____ &nbsp;&nbsp;&nbsp; ___ + ___ = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Zero Property Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these problems with zero:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 7 + 0 = _____</div>
                        <div>b) 0 + 14 = _____</div>
                        <div>c) 23 + 0 = _____</div>
                        <div>d) 0 + 56 = _____</div>
                        <div>e) 100 + 0 = _____</div>
                        <div>f) 0 + 0 = _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each equation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 9 + ___ = 9 (Zero Property)</div>
                        <div>b) 16 + 8 = 8 + ___ (Commutative Law)</div>
                        <div>c) ___ + 0 = 34 (Zero Property)</div>
                        <div>d) 45 + 27 = ___ + 45 (Commutative Law)</div>
                        <div>e) 52 + ___ = 52 (Zero Property)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve using what you learned:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Sara has 23 stickers. She gets 0 more stickers. How many does she have now?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>b) Tom has 15 marbles and Ben has 20 marbles. Does it matter who you count first to find the total?</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> In your own words, explain why 5 + 0 = 5. Use a drawing to help explain:
                    <div class="drawing-area" style="height: 80px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Teach a family member about the Commutative Law and Zero Property. Give them 3 examples of each and check their answers.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek2);
    console.log("grade2-math-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek2);
    console.log("grade2-math-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek2',
        metadata: grade2MathScienceWeek2.metadata,
        days: grade2MathScienceWeek2
    });
    console.log("grade2-math-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek2 = grade2MathScienceWeek2;
console.log("grade2-math-science-week2.js loaded and registered successfully");