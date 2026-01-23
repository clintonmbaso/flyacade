// Grade 4 Math - Week 8 Data
const grade4MathWeek8 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 8,
        title: "Operations and Conversions with Fractions",
        description: "Converting between mixed numbers and improper fractions, and adding/subtracting fractions with common denominators"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Operations and Conversions",
        subtopic: "Converting Mixed Numbers to Improper Fractions",
        lessonContent: `
            <p>Today we will learn how to change mixed numbers into improper fractions using a simple mathematical process.</p>
            <p><strong>What Are Mixed Numbers and Improper Fractions?</strong></p>
            <ul>
                <li>A <strong>mixed number</strong> has a whole number and a fraction (like 2 ½)</li>
                <li>An <strong>improper fraction</strong> has a numerator larger than its denominator (like 5/2)</li>
                <li>Mixed numbers and improper fractions represent the same amount, just in different forms!</li>
            </ul>
            <p><strong>Why Convert Between Them?</strong></p>
            <ul>
                <li>Some calculations are easier with improper fractions</li>
                <li>It helps us compare different fractions</li>
                <li>It's an important skill for more advanced math</li>
            </ul>
            <p><strong>The "Multiply then Add" Method:</strong></p>
            <ol>
                <li>Multiply the whole number by the denominator</li>
                <li>Add the numerator to your answer</li>
                <li>Keep the same denominator</li>
                <li>Write your answer as an improper fraction</li>
            </ol>
            <p><strong>Formula:</strong> (Whole number × Denominator) + Numerator = New Numerator</p>
            <p><strong>Visual Understanding:</strong> Each whole number contains the full denominator amount. We're counting up all the fractional parts!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #4A90E2;"></i> Example: 2 ⅓</div>
                <p>1. Multiply: 2 × 3 = 6<br>2. Add: 6 + 1 = 7<br>3. Keep denominator: 3<br>4. Answer: 7/3</p>
                <p>Think: 2 wholes = 6/3, plus 1/3 more = 7/3 total</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Example</div>
                <p>If you have 1 ¾ pizzas (each cut into 4 slices), that's 1 whole pizza (4/4) plus 3 more slices = 7 slices total out of 4 per pizza = 7/4.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Checking Your Work</div>
                <p>Always check: Does your improper fraction make sense? For 2 ⅓ = 7/3, think: 7 thirds is more than 2 wholes (which would be 6/3). ✓</p>
            </div>
        `,
        taskInstructions: "Practice converting mixed numbers to improper fractions using the 'Multiply then Add' method.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Convert these mixed numbers to improper fractions. Show your work:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 3 ½ = 
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div> /
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                        <div style="display: block; font-size: 0.9em; color: #666;">Work: (3 × <div style="display: inline-block; width: 20px; height: 20px; border-bottom: 1px solid #000;"></div>) + <div style="display: inline-block; width: 20px; height: 20px; border-bottom: 1px solid #000;"></div> = <div style="display: inline-block; width: 30px; height: 20px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                    <div>b. 2 ⅔ = 
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div> /
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                    </div>
                    <div>c. 4 ⅗ = 
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div> /
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                    </div>
                    <div>d. 1 ¾ = 
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div> /
                        <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Assessment: Convert these mixed numbers to improper fractions:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 3 ⅖ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 1 ¾ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a picture to show why 2 ¼ equals 9/4:
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain the "Multiply then Add" method in your own words:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Convert 5 mixed numbers from your surroundings (like recipe measurements) to improper fractions. Write both forms.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Operations and Conversions",
        subtopic: "Converting Improper Fractions to Mixed Numbers",
        lessonContent: `
            <p>Today we will learn how to change improper fractions back into mixed numbers using division.</p>
            <p><strong>Why Convert Improper Fractions to Mixed Numbers?</strong></p>
            <ul>
                <li>Mixed numbers are often easier to understand in real life</li>
                <li>They help us see how many whole items we have</li>
                <li>Some word problems require answers as mixed numbers</li>
            </ul>
            <p><strong>The Division Method:</strong></p>
            <ol>
                <li>Divide the numerator by the denominator</li>
                <li>The quotient (answer) becomes the whole number</li>
                <li>The remainder becomes the new numerator</li>
                <li>Keep the same denominator</li>
            </ol>
            <p><strong>Asking the Right Question:</strong> "How many times does the denominator fit completely into the numerator?"</p>
            <p><strong>Understanding Remainders:</strong></p>
            <ul>
                <li>The remainder tells us how many pieces are left over</li>
                <li>The remainder must be smaller than the denominator</li>
                <li>If there's no remainder, you have a whole number!</li>
            </ul>
            <p><strong>Checking Your Work:</strong> Convert your mixed number back to an improper fraction to make sure you get the original fraction.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-divide" style="color: #4A90E2;"></i> Example: 7/3</div>
                <p>1. Divide: 7 ÷ 3 = 2 remainder 1<br>2. Whole number: 2<br>3. Fraction: remainder/denominator = ⅓<br>4. Answer: 2 ⅓</p>
                <p>Think: How many groups of 3 are in 7? 2 full groups (6 total) with 1 left over.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Cookie Example</div>
                <p>If you have 11/4 cookies (each cookie cut into 4 pieces), that's 2 whole cookies (8/4) plus 3 more pieces = 2 ¾ cookies.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> No Remainder Case</div>
                <p>8/4 = 2 exactly (no remainder). Sometimes improper fractions equal whole numbers!</p>
            </div>
        `,
        taskInstructions: "Practice converting improper fractions to mixed numbers using division.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Conversions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert these improper fractions to mixed numbers. Show your division:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7/4 = 
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div> /
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                            <div style="display: block; font-size: 0.9em; color: #666;">Work: <div style="display: inline-block; width: 30px; height: 20px; border-bottom: 1px solid #000;"></div> ÷ <div style="display: inline-block; width: 30px; height: 20px; border-bottom: 1px solid #000;"></div> = <div style="display: inline-block; width: 20px; height: 20px; border-bottom: 1px solid #000;"></div> R <div style="display: inline-block; width: 20px; height: 20px; border-bottom: 1px solid #000;"></div></div>
                        </div>
                        <div>b. 9/2 = 
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div> /
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                        </div>
                        <div>c. 10/3 = 
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div> /
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                        </div>
                        <div>d. 15/4 = 
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div> /
                            <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000; margin-left: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert these improper fractions to mixed numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 11/4 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 9/2 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these problems. Write answers as mixed numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Sam has 13/5 cups of flour. How many whole cups and extra fractions does he have?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A recipe calls for 17/4 ounces of chocolate. Write this as a mixed number.</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> When is it better to use an improper fraction versus a mixed number? Give examples:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 4 improper fractions in real life (like in recipes or measurements) and convert them to mixed numbers.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Operations and Conversions",
        subtopic: "Adding Fractions and Mixed Numbers",
        lessonContent: `
            <p>Today we will learn how to add fractions and mixed numbers with common denominators.</p>
            <p><strong>Golden Rule of Adding Fractions:</strong> When denominators are the same, we only add the numerators!</p>
            <p><strong>Adding Simple Fractions:</strong></p>
            <ul>
                <li>Keep the denominator the same</li>
                <li>Add the numerators together</li>
                <li>Simplify if possible</li>
                <li>Example: 2/7 + 3/7 = 5/7</li>
            </ul>
            <p><strong>Adding Mixed Numbers:</strong></p>
            <ol>
                <li>Add the whole numbers first</li>
                <li>Add the fractions separately</li>
                <li>If the fraction sum is improper, convert it and add to the whole number</li>
                <li>Simplify your final answer</li>
            </ol>
            <p><strong>When Fractions Add Up to 1 or More:</strong></p>
            <ul>
                <li>If numerators add up to equal the denominator, that's 1 whole</li>
                <li>Add that whole to your whole number total</li>
                <li>Example: ⅗ + ⅖ = 5/5 = 1</li>
            </ul>
            <p><strong>Visualizing Addition:</strong> Imagine adding slices of pizza that are all cut the same size!</p>
            <p><strong>Important:</strong> You can only add fractions directly when they have the same denominator (same-sized pieces).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus-circle" style="color: #4A90E2;"></i> Example: 1 ⅕ + 2 ⅖</div>
                <p>1. Add whole numbers: 1 + 2 = 3<br>2. Add fractions: ⅕ + ⅖ = ⅗<br>3. Combine: 3 + ⅗ = 3 ⅗<br>Answer: 3 ⅗</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Addition</div>
                <p>If you have 1 ¾ pizzas and get 2 ¼ more pizzas (all cut into 4 slices):<br>Whole pizzas: 1 + 2 = 3<br>Slices: ¾ + ¼ = 4/4 = 1 whole pizza<br>Total: 4 pizzas!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Watch Out!</div>
                <p>2 ⅔ + 1 ⅔ = 3 4/3 = 3 + 1 ⅓ = 4 ⅓. Always convert improper fraction results!</p>
            </div>
        `,
        taskInstructions: "Practice adding fractions and mixed numbers with common denominators.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Adding Simple Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Add these fractions. Simplify if possible:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3/8 + 2/8 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 5/12 + 4/12 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 7/10 + 1/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 4/6 + 3/6 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Adding Mixed Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Add these mixed numbers. Show your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2 ⅜ + 1 ⅜ = 
                            <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: block; font-size: 0.9em; color: #666;">Whole numbers: ______ + ______ = ______</div>
                            <div style="display: block; font-size: 0.9em; color: #666;">Fractions: ______ + ______ = ______</div>
                        </div>
                        <div>b. 3 ⅖ + 2 ⅕ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 1 ¾ + 2 ¼ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2/7 + 3/7 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 2 ⅛ + 1 ⅘ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Maria walked 1 ⅔ miles to school and 2 ⅓ miles to the library. How far did she walk total?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A recipe needs ½ cup of sugar. You decide to double it. How much sugar do you need?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. Tom practiced piano for 1 ¼ hours on Monday and 1 ¾ hours on Tuesday. How many hours total?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create 3 addition word problems using fractions or mixed numbers. Solve them and show your work.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Operations and Conversions",
        subtopic: "Subtracting Fractions and Mixed Numbers",
        lessonContent: `
            <p>Today we will learn how to subtract fractions and mixed numbers with common denominators.</p>
            <p><strong>Golden Rule of Subtracting Fractions:</strong> When denominators are the same, we only subtract the numerators!</p>
            <p><strong>Subtracting Simple Fractions:</strong></p>
            <ul>
                <li>Keep the denominator the same</li>
                <li>Subtract the numerators</li>
                <li>Simplify if possible</li>
                <li>Example: 9/10 - 4/10 = 5/10 = ½</li>
            </ul>
            <p><strong>Subtracting Mixed Numbers:</strong></p>
            <ol>
                <li>Subtract the whole numbers first</li>
                <li>Subtract the fractions separately</li>
                <li>If the first fraction is smaller than the second, borrow from the whole number</li>
                <li>Simplify your final answer</li>
            </ol>
            <p><strong>Borrowing When Needed:</strong></p>
            <ul>
                <li>If you can't subtract the fractions directly (like ⅕ - ⅖), borrow 1 from the whole number</li>
                <li>1 whole = denominator/denominator (like 1 = 5/5)</li>
                <li>Add that to your fraction, then subtract</li>
            </ul>
            <p><strong>Real-World Applications:</strong></p>
            <ul>
                <li>Measuring ingredients in recipes</li>
                <li>Calculating distance traveled</li>
                <li>Finding how much is left after using some</li>
                <li>Comparing measurements</li>
            </ul>
            <p><strong>Remember:</strong> Always check if your answer makes sense. If you started with more, you should end with less!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus-circle" style="color: #4A90E2;"></i> Example: 4 ⅚ - 2 ⅓</div>
                <p>1. Convert to common denominator if needed (⅓ = ⅔)<br>2. Whole numbers: 4 - 2 = 2<br>3. Fractions: ⅚ - ⅔ = ⅚ - 4/6 = ⅙<br>4. Answer: 2 ⅙</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice"></i> Baking Example</div>
                <p>If you have 3 ¾ cups of flour and use 1 ¼ cups, you have 2 ½ cups left:<br>3 ¾ - 1 ¼ = (3-1) + (¾-¼) = 2 + ½ = 2 ½</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Borrowing Example</div>
                <p>3 ⅕ - 1 ⅗: Borrow 1 from 3 (1 = 5/5), so 3 ⅕ becomes 2 6/5. Then: 2 6/5 - 1 ⅗ = 1 ⅗</p>
            </div>
        `,
        taskInstructions: "Practice subtracting fractions and mixed numbers with common denominators.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Subtracting Simple Fractions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Subtract these fractions. Simplify if possible:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7/8 - 3/8 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 11/12 - 5/12 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 9/10 - 3/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 5/6 - 1/6 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Subtracting Mixed Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Subtract these mixed numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 5 ⅞ - 2 ⅜ = 
                            <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div>
                            <div style="display: block; font-size: 0.9em; color: #666;">Whole numbers: ______ - ______ = ______</div>
                            <div style="display: block; font-size: 0.9em; color: #666;">Fractions: ______ - ______ = ______</div>
                        </div>
                        <div>b. 4 ⅚ - 1 ⅔ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                        <div>c. 6 ¾ - 3 ¼ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000; margin-left: 10px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 9/10 - 4/10 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 4 ⅝ - 2 ⅜ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these real-world problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. If you have 3 ⅘ cups of sugar and use 1 ⅖ cups, how much is left?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A rope is 5 ¾ meters long. You cut off 2 ¼ meters. How much rope remains?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. Sarah had 4 ⅓ hours to complete homework. After 2 ⅔ hours, how much time is left?</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Challenge Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Try these trickier problems (may require borrowing):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3 ⅕ - 1 ⅗ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 5 ¼ - 2 ¾ = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. Explain how borrowing works when subtracting mixed numbers:</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 examples in your home where you might need to subtract fractions or mixed numbers (like in cooking, measuring, etc.).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek8);
    console.log("grade4-math-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek8);
    console.log("grade4-math-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek8',
        metadata: grade4MathWeek8.metadata,
        days: grade4MathWeek8
    });
    console.log("grade4-math-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek8 = grade4MathWeek8;
console.log("grade4-math-week8.js loaded and registered successfully");