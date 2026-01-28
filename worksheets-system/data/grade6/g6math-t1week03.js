// Grade 6 Math - Week 3 Data
const grade6MathWeek3 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 3,
        title: "Understanding Index Notation",
        description: "Learning to write, read, expand, and evaluate numbers using index notation, and applying it to real-world situations"
    },
    
    monday: {
        subject: "Math",
        topic: "Understanding Index Notation",
        subtopic: "Introduction to Index Notation",
        lessonContent: `
            <p>Welcome to our exploration of index notation! This week we will learn a powerful mathematical shorthand that helps us write very large numbers in a compact way.</p>
            <p><strong>What is Index Notation?</strong></p>
            <p>Index notation (also called exponential notation) is a way to write repeated multiplication of the same number. Instead of writing 2 × 2 × 2 × 2, we can write it more simply.</p>
            <p><strong>Parts of a Number in Index Form:</strong></p>
            <ul>
                <li><strong>Base:</strong> The number being multiplied by itself</li>
                <li><strong>Index/Power/Exponent:</strong> The small number at the top right that tells how many times to multiply the base</li>
            </ul>
            <p><strong>Example:</strong> 5<sup>4</sup> means 5 × 5 × 5 × 5</p>
            <p>Here, 5 is the <strong>base</strong> and 4 is the <strong>index</strong> (or power).</p>
            <p><strong>Reading Index Notation:</strong></p>
            <ul>
                <li>5<sup>2</sup> is read as "five squared" or "five to the power of two"</li>
                <li>5<sup>3</sup> is read as "five cubed" or "five to the power of three"</li>
                <li>5<sup>4</sup> is read as "five to the power of four"</li>
            </ul>
            <p><strong>Visual Aid:</strong> Imagine a large base number with a small index floating to its top right. The index tells us how many times the base appears in multiplication.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4A90E2;"></i> Example 1</div>
                <p>3<sup>2</sup> means 3 × 3 = 9<br>Base = 3, Index = 2</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 2</div>
                <p>2<sup>4</sup> means 2 × 2 × 2 × 2 = 16<br>Base = 2, Index = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Key Concept</div>
                <p>The base is the number being multiplied, and the power tells us how many times to multiply it by itself.</p>
            </div>
        `,
        taskInstructions: "Practice identifying the parts of numbers written in index form by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> For each number written in index form, identify the base and the index:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 7<sup>3</sup> → Base = ______, Index = ______</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>b. 4<sup>5</sup> → Base = ______, Index = ______</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                    <div>c. 10<sup>2</sup> → Base = ______, Index = ______</div>
                    <div style="margin-left: 20px; height: 30px;"></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Match each index notation with how it should be read:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>6<sup>2</sup> → a. six cubed</div>
                    <div>6<sup>3</sup> → b. six to the power of four</div>
                    <div>6<sup>4</sup> → c. six squared</div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        Answers: 6<sup>2</sup> = ___, 6<sup>3</sup> = ___, 6<sup>4</sup> = ___
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a visual representation of 3<sup>4</sup>. Show the base and index clearly:
                <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why do we use index notation instead of writing out long multiplication strings?
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 examples of index notation in your math textbook or online. Write them down and identify the base and index for each.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Understanding Index Notation",
        subtopic: "From Expanded to Index Form",
        lessonContent: `
            <p>Today we will learn how to convert repeated multiplication (expanded form) into the shorter, more efficient index notation.</p>
            <p><strong>What is Expanded Form?</strong></p>
            <p>Expanded form shows the actual multiplication: 4 × 4 × 4 × 4 × 4</p>
            <p><strong>What is Index Form?</strong></p>
            <p>Index form shows this more compactly: 4<sup>5</sup></p>
            <p><strong>Steps to Convert from Expanded to Index Form:</strong></p>
            <ol>
                <li>Identify the number being repeated (this becomes your base)</li>
                <li>Count how many times it appears (this becomes your index)</li>
                <li>Write the base with the index as a superscript</li>
            </ol>
            <p><strong>Example 1:</strong> 2 × 2 × 2 × 2 × 2 = 2<sup>5</sup> (the number 2 appears 5 times)</p>
            <p><strong>Example 2:</strong> 10 × 10 × 10 = 10<sup>3</sup> (the number 10 appears 3 times)</p>
            <p><strong>Key Concept:</strong> Focus on the economy of space—how index notation makes long strings of numbers easier to read, write, and work with.</p>
            <p><strong>Common Pitfall:</strong> Remember that 3 × 3 × 3 is 3<sup>3</sup> (three cubed), not 3 × 3. The index tells us the count of multiplications, not the result!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compress-alt" style="color: #4A90E2;"></i> Example 1</div>
                <p>5 × 5 × 5 × 5 = 5<sup>4</sup><br>The base is 5, and it appears 4 times.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compress-alt"></i> Example 2</div>
                <p>7 × 7 = 7<sup>2</sup><br>This is read as "seven squared."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Watch Out!</div>
                <p>2 × 2 × 2 × 2 × 2 = 2<sup>5</sup>, not 2 × 5! The index counts how many 2's are multiplied.</p>
            </div>
        `,
        taskInstructions: "Practice converting expanded multiplication into index notation by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Conversion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Convert these expanded forms to index notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3 × 3 × 3 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 8 × 8 × 8 × 8 × 8 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 6 × 6 × 6 × 6 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 10 × 10 × 10 × 10 × 10 × 10 = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify Base and Index</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each expanded form, identify what the base and index would be in index notation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4 × 4 × 4 × 4 → Base = ______, Index = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 9 × 9 → Base = ______, Index = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 1 × 1 × 1 × 1 × 1 × 1 × 1 → Base = ______, Index = ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A bacteria cell divides into 2 every hour. After 5 hours of division, how many times has the original number been multiplied by 2? Write this in index notation.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Explain in your own words why index notation is useful:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Write out 5 multiplication strings using the same number repeated, then convert each to index notation.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Understanding Index Notation",
        subtopic: "From Index Form to Expanded Notation",
        lessonContent: `
            <p>Today we will work backwards—converting numbers from index form back to their expanded multiplication form. This helps us understand what the notation really means.</p>
            <p><strong>Why Expand Index Notation?</strong></p>
            <p>Expanding helps us see the "story" behind the shorthand. It shows exactly what multiplication is happening.</p>
            <p><strong>Steps to Convert from Index to Expanded Form:</strong></p>
            <ol>
                <li>Identify the base (the main number)</li>
                <li>Identify the index (the small number)</li>
                <li>Write the base multiplied by itself as many times as the index indicates</li>
                <li>Use multiplication signs between each base</li>
            </ol>
            <p><strong>Example 1:</strong> 5<sup>3</sup> = 5 × 5 × 5</p>
            <p><strong>Example 2:</strong> 2<sup>6</sup> = 2 × 2 × 2 × 2 × 2 × 2</p>
            <p><strong>Key Concept:</strong> Reinforce that a power like three does not mean "multiply by three," but rather "multiply the base three times by itself."</p>
            <p><strong>Common Misconception:</strong> 4<sup>3</sup> does NOT mean 4 × 3. It means 4 × 4 × 4.</p>
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li>Any number to the power of 1 is just itself: 7<sup>1</sup> = 7</li>
                <li>Any number to the power of 0 is 1 (we'll learn why later): 9<sup>0</sup> = 1</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt" style="color: #4A90E2;"></i> Example 1</div>
                <p>8<sup>4</sup> = 8 × 8 × 8 × 8<br>The index 4 tells us to multiply 8 by itself 4 times.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt"></i> Example 2</div>
                <p>3<sup>5</sup> = 3 × 3 × 3 × 3 × 3<br>This is different from 3 × 5 = 15!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Common Error</div>
                <p>5<sup>2</sup> = 5 × 5 = 25, NOT 5 × 2 = 10.<br>The index counts multiplications, it is not a multiplier.</p>
            </div>
        `,
        taskInstructions: "Practice expanding numbers written in index form into their full multiplication strings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Expansion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Expand these index notations into multiplication strings:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2<sup>5</sup> = ________________________________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 7<sup>3</sup> = ________________________________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 4<sup>4</sup> = ________________________________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 10<sup>2</sup> = ________________________________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Mark whether each statement is true (T) or false (F):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 6<sup>3</sup> means 6 × 6 × 6 ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 5<sup>2</sup> means 5 × 2 ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 9<sup>1</sup> means 9 ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 3<sup>4</sup> means 3 × 3 × 3 × 3 × 3 ______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Spot the Error</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Carlos wrote 4<sup>3</sup> = 4 × 3 = 12. What did he do wrong? Explain:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 3 numbers in index form, then expand them. Exchange with a partner and check each other's work.
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
        `,
        homework: "Choose 4 index notations from today's lesson. Expand each one and then calculate the final product.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Understanding Index Notation",
        subtopic: "Evaluating Powers (Natural Numbers)",
        lessonContent: `
            <p>Today we will calculate the actual values of numbers written in index notation. This means we'll multiply them out to find the final product.</p>
            <p><strong>What Does "Evaluate" Mean?</strong></p>
            <p>To evaluate a power means to calculate its actual numerical value.</p>
            <p><strong>Steps to Evaluate a Power:</strong></p>
            <ol>
                <li>Identify the base and index</li>
                <li>Expand into multiplication (if needed for understanding)</li>
                <li>Multiply step by step until you reach the final product</li>
            </ol>
            <p><strong>Example 1:</strong> Evaluate 2<sup>4</sup></p>
            <p>2 × 2 = 4<br>4 × 2 = 8<br>8 × 2 = 16<br>So 2<sup>4</sup> = 16</p>
            <p><strong>Example 2:</strong> Evaluate 5<sup>3</sup></p>
            <p>5 × 5 = 25<br>25 × 5 = 125<br>So 5<sup>3</sup> = 125</p>
            <p><strong>Key Concept:</strong> Practice mental math for small powers (like squares and cubes) and use long multiplication for larger ones.</p>
            <p><strong>Common Squares to Memorize:</strong></p>
            <ul>
                <li>1<sup>2</sup> = 1</li>
                <li>2<sup>2</sup> = 4</li>
                <li>3<sup>2</sup> = 9</li>
                <li>4<sup>2</sup> = 16</li>
                <li>5<sup>2</sup> = 25</li>
                <li>10<sup>2</sup> = 100</li>
            </ul>
            <p><strong>Pattern:</strong> Notice that as the index increases, the result grows very quickly. This is called exponential growth!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4A90E2;"></i> Example 1</div>
                <p>3<sup>4</sup> = 3 × 3 × 3 × 3<br>= 9 × 3 × 3<br>= 27 × 3<br>= 81</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Example 2</div>
                <p>10<sup>3</sup> = 10 × 10 × 10<br>= 100 × 10<br>= 1,000</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain"></i> Mental Math Tip</div>
                <p>For 4<sup>2</sup>, think "4 × 4 = 16." For 4<sup>3</sup>, think "16 × 4 = 64." Build from what you know!</p>
            </div>
        `,
        taskInstructions: "Practice evaluating powers by calculating the final value of numbers written in index notation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Evaluation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Evaluate these powers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2<sup>3</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 5<sup>2</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 3<sup>4</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. 10<sup>4</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>e. 1<sup>8</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Step-by-Step Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Show your work for evaluating 4<sup>5</sup> step by step:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate and compare:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2<sup>6</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 4<sup>3</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 8<sup>2</sup> = __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>Which is largest? __________</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Calculation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A square garden has sides of 12 meters. Its area is 12<sup>2</sup> square meters. Calculate the area:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create and solve 5 evaluation problems using different bases and indices. Include at least one with index 5 or higher.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Understanding Index Notation",
        subtopic: "Indices in Real Life",
        lessonContent: `
            <p>Today we will explore how index notation is used in real-world situations. This powerful mathematical tool helps scientists, engineers, and everyday people work with very large (or very small) numbers.</p>
            <p><strong>Why Index Notation Matters in Real Life:</strong></p>
            <p>Many natural processes and man-made systems involve repeated multiplication, leading to exponential growth or decay.</p>
            <p><strong>Real-World Example 1: Cell Division (Biology)</strong></p>
            <p>When cells divide, 1 becomes 2, then 2 become 4, then 4 become 8... After 10 divisions, we have 2<sup>10</sup> = 1,024 cells!</p>
            <p><strong>Real-World Example 2: Computer Storage</strong></p>
            <p>Computers use binary (base-2) systems:
            <ul>
                <li>1 kilobyte (KB) = 2<sup>10</sup> = 1,024 bytes</li>
                <li>1 megabyte (MB) = 2<sup>20</sup> = 1,048,576 bytes</li>
                <li>1 gigabyte (GB) = 2<sup>30</sup> = 1,073,741,824 bytes</li>
            </ul>
            <p><strong>Real-World Example 3: Population Growth</strong></p>
            <p>If a population grows by 10% each year, it multiplies by 1.1 annually. After 5 years: 1.1<sup>5</sup> ≈ 1.61 times larger.</p>
            <p><strong>Real-World Example 4: Compound Interest</strong></p>
            <p>Money in a bank account earns interest on both the original amount and previously earned interest: A = P(1 + r)<sup>n</sup></p>
            <p><strong>Key Concept:</strong> Understanding that index notation is a tool used by scientists and engineers to manage very large numbers efficiently. It helps us describe patterns of growth that would be cumbersome to write out.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microscope" style="color: #4A90E2;"></i> Biology Example</div>
                <p>One bacterium divides every hour. After 6 hours: 2<sup>6</sup> = 64 bacteria. After 10 hours: 2<sup>10</sup> = 1,024!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-laptop"></i> Technology Example</div>
                <p>A 32 GB USB drive can store about 2<sup>35</sup> bytes of information. That's 34,359,738,368 bytes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> World Example</div>
                <p>If everyone on Earth (about 8 billion people) shook hands with everyone else, the number of handshakes would be approximately 8×10<sup>9</sup> choose 2—a huge number!</p>
            </div>
        `,
        taskInstructions: "Apply your understanding of index notation to solve practical, real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cell Division Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> A single cell divides into 2 every 30 minutes. How many cells will there be after 5 hours? (Hint: How many 30-minute periods in 5 hours?)
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Computer Storage</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A video file is 128 MB. How many bytes is this? (Remember: 1 MB = 2<sup>20</sup> bytes)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If a computer's memory is 8 GB, how many bytes is that? (1 GB = 2<sup>30</sup> bytes)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Paper Folding</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you could fold a piece of paper in half 10 times, how many layers would you have? (Each fold doubles the layers)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Research and Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find one real-world example of exponential growth (not mentioned today). Describe it and write it using index notation:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Why is index notation particularly useful for scientists and engineers? Explain with examples:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Research one area where exponential growth or decay occurs (finance, biology, physics, etc.). Write a paragraph explaining it using index notation.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek3);
    console.log("grade6-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek3',
        metadata: grade6MathWeek3.metadata,
        days: grade6MathWeek3
    });
    console.log("grade6-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek3 = grade6MathWeek3;
console.log("grade6-math-week3.js loaded and registered successfully");