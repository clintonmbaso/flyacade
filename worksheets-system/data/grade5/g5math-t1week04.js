// Grade 5 Math - Week 4 Data
const grade5MathWeek4 = {
    metadata: {
        grade: 5,
        subject: "Math",
        term: 1,
        week: 4,
        title: "Prime and Composite Numbers",
        description: "Identifying prime and composite numbers and expressing them as products of their factors"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Prime and Composite Numbers",
        subtopic: "Understanding Factors",
        lessonContent: `
            <p>Welcome to our exploration of factors! This week we will learn about numbers that can be broken down into their building blocks.</p>
            <p><strong>Key Concept:</strong> A <strong>factor</strong> is a number that divides another number exactly without leaving a remainder.</p>
            <p><strong>Why Are Factors Important?</strong></p>
            <ul>
                <li>They help us understand how numbers are built</li>
                <li>They are the foundation for working with fractions</li>
                <li>They help us solve real-world grouping problems</li>
                <li>They prepare us for more advanced math concepts</li>
            </ul>
            <p><strong>Finding Factors:</strong></p>
            <ul>
                <li>Think of factors as numbers that multiply together to make the original number</li>
                <li>Every number has at least two factors: 1 and itself</li>
                <li>We can use multiplication facts to find factors</li>
                <li>We can also use division to check if a number is a factor</li>
            </ul>
            <p><strong>How to Find All Factors of a Number:</strong></p>
            <ol>
                <li>Start with 1 and the number itself</li>
                <li>Test each number in between by dividing</li>
                <li>If there's no remainder, that number is a factor</li>
                <li>Stop when you reach the halfway point</li>
            </ol>
            <p><strong>Visualizing Factors:</strong> We can use tiles or blocks to arrange numbers into rectangles. Each different rectangle shows a factor pair!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator" style="color: #4A90E2;"></i> Factor Example</div>
                <p>The factors of 12 are: 1, 2, 3, 4, 6, and 12. We know this because: 1×12=12, 2×6=12, and 3×4=12.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th"></i> Visualizing with Tiles</div>
                <p>With 12 tiles, we can make rectangles of: 1×12, 2×6, and 3×4. Each rectangle shape shows a different factor pair.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Factor Finding Tip</div>
                <p>When finding factors, work in pairs! If 2 is a factor of 12, then 6 must also be a factor (because 2×6=12).</p>
            </div>
        `,
        taskInstructions: "Practice identifying factors by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Find all the factors of each number:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 8: <div style="margin-left: 20px; height: 30px;"></div></div>
                    <div>b. 15: <div style="margin-left: 20px; height: 30px;"></div></div>
                    <div>c. 20: <div style="margin-left: 20px; height: 30px;"></div></div>
                    <div>d. 7: <div style="margin-left: 20px; height: 30px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw rectangles to show the factor pairs of 16 using the grid below:
                <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc; background: repeating-linear-gradient(0deg, transparent, transparent 19px, #f0f0f0 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #f0f0f0 20px);"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Draw different rectangles to show all factor pairs)</p>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Which of these numbers are factors of 24? Circle them:
                <div style="margin-left: 20px; margin-top: 10px; font-size: 1.1em;">
                    2  5  3  9  6  8  12  7
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Explain what a factor is in your own words:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find 3 numbers between 1 and 20. List all their factors. Bring your list to class tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Prime and Composite Numbers",
        subtopic: "Prime vs. Composite Numbers",
        lessonContent: `
            <p>Today we will learn to classify numbers as prime or composite based on how many factors they have.</p>
            <p><strong>What Are Prime Numbers?</strong></p>
            <ul>
                <li><strong>Prime numbers</strong> have exactly two factors: 1 and themselves</li>
                <li>They cannot be divided evenly by any other numbers</li>
                <li>Examples: 2, 3, 5, 7, 11, 13</li>
                <li>2 is the smallest and only even prime number</li>
            </ul>
            <p><strong>What Are Composite Numbers?</strong></p>
            <ul>
                <li><strong>Composite numbers</strong> have more than two factors</li>
                <li>They can be divided evenly by at least one other number besides 1 and themselves</li>
                <li>Examples: 4, 6, 8, 9, 10, 12</li>
                <li>Every composite number can be broken down into prime factors</li>
            </ul>
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li>The number 1 is neither prime nor composite (it has only one factor)</li>
                <li>0 is neither prime nor composite</li>
            </ul>
            <p><strong>The Sieve of Eratosthenes:</strong> This ancient Greek method helps us find all prime numbers up to a certain limit:</p>
            <ol>
                <li>Write numbers from 2 to 50</li>
                <li>Circle 2 (it's prime) and cross out all multiples of 2</li>
                <li>Circle the next uncrossed number (3) and cross out all its multiples</li>
                <li>Repeat until all numbers are either circled or crossed out</li>
                <li>The circled numbers are all prime!</li>
            </ol>
            <p><strong>Why Does This Matter?</strong> Prime numbers are like building blocks for all other numbers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-prime" style="color: #4A90E2;"></i> Prime Number Example</div>
                <p>13 is prime because its only factors are 1 and 13. You cannot make a rectangle with 13 tiles except 1×13.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-th-large"></i> Composite Number Example</div>
                <p>18 is composite because it has factors: 1, 2, 3, 6, 9, and 18. You can make rectangles: 1×18, 2×9, and 3×6.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-filter"></i> Sieve Method</div>
                <p>Using the Sieve of Eratosthenes for numbers 1-20, we find primes: 2, 3, 5, 7, 11, 13, 17, 19.</p>
            </div>
        `,
        taskInstructions: "Practice identifying prime and composite numbers by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Prime or Composite?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify each number as prime (P) or composite (C):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 9: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 11: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 14: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 17: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>e. 21: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>f. 23: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sieve of Eratosthenes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the sieve for numbers 1-30. Circle primes and cross out composites:
                    <div style="margin-left: 20px; margin-top: 10px; font-family: monospace; line-height: 1.8;">
                        1 2 3 4 5 6 7 8 9 10<br>
                        11 12 13 14 15 16 17 18 19 20<br>
                        21 22 23 24 25 26 27 28 29 30
                    </div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(Circle prime numbers in red, cross out composite numbers in pencil)</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Factor Count</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How many factors does each number have? Write the number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 19: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> factors</div>
                        <div>b. 25: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> factors</div>
                        <div>c. 29: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> factors</div>
                        <div>d. 27: <div style="display: inline-block; width: 40px; height: 30px; border-bottom: 1px solid #000;"></div> factors</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Critical Thinking</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is 2 considered a special prime number?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Can a number be both prime and composite? Explain:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find all prime numbers between 30 and 50 using the Sieve method. List them.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Prime and Composite Numbers",
        subtopic: "Prime Factorization",
        lessonContent: `
            <p>Today we will learn how to break down composite numbers into their prime building blocks using factor trees.</p>
            <p><strong>What is Prime Factorization?</strong></p>
            <p>Prime factorization is expressing a composite number as a product of its prime factors. Every composite number has a unique prime factorization!</p>
            <p><strong>Why Prime Factorization Matters:</strong></p>
            <ul>
                <li>It shows the "DNA" of a number</li>
                <li>It helps simplify fractions</li>
                <li>It's used to find the Greatest Common Factor (GCF) and Least Common Multiple (LCM)</li>
                <li>It's essential for more advanced mathematics</li>
            </ul>
            <p><strong>Creating Factor Trees:</strong></p>
            <ol>
                <li>Start with the composite number at the top</li>
                <li>Find two factors that multiply to make that number</li>
                <li>If a factor is composite, break it down further</li>
                <li>Continue until all branches end with prime numbers</li>
                <li>The prime numbers at the ends are the prime factors</li>
            </ol>
            <p><strong>Writing Prime Factorization:</strong></p>
            <ul>
                <li>List the prime factors from smallest to largest</li>
                <li>Use multiplication signs between them</li>
                <li>If a factor repeats, use exponents (like 2² instead of 2×2)</li>
            </ul>
            <p><strong>Example:</strong> 12 = 2 × 2 × 3 = 2² × 3</p>
            <p><strong>Checking Your Work:</strong> Multiply all the prime factors together. You should get your original number!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4A90E2;"></i> Factor Tree for 24</div>
                <p>24 → 4 × 6 → (2×2) × (2×3) = 2×2×2×3 = 2³×3. Check: 2×2×2×3 = 24 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sitemap"></i> Different Trees, Same Result</div>
                <p>For 36, you could use 6×6 or 4×9 or 3×12. All paths lead to the same prime factors: 2×2×3×3 = 2²×3².</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Fundamental Theorem</div>
                <p>Every composite number has exactly one unique prime factorization (except for the order of factors). This is called the Fundamental Theorem of Arithmetic!</p>
            </div>
        `,
        taskInstructions: "Practice prime factorization by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Creating Factor Trees</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw factor trees for these numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 18</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>b. 28</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div>c. 45</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Writing Prime Factorization</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the prime factorization for each number (use exponents if possible):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 30 = <div style="display: inline-block; width: 100px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 16 = <div style="display: inline-block; width: 100px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 50 = <div style="display: inline-block; width: 100px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 72 = <div style="display: inline-block; width: 100px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Working Backwards</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What number has this prime factorization?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 2 × 3 × 5 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 2² × 3² = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 5 × 7 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 2³ × 5 = <div style="display: inline-block; width: 60px; height: 30px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sarah says the prime factorization of 100 is 2×5×10. Is she correct? Explain:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find two different numbers that have the same prime factors: 2, 3, and 5:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Choose a composite number between 40 and 60. Draw its factor tree and write its prime factorization.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Prime and Composite Numbers",
        subtopic: "Everyday Application of Prime and Composite",
        lessonContent: `
            <p>Today we will apply our knowledge of prime and composite numbers to real-world situations and problem-solving.</p>
            <p><strong>Why Do Prime and Composite Numbers Matter in Real Life?</strong></p>
            <ul>
                <li><strong>Computer Security:</strong> Prime numbers are used in encryption to keep online information safe</li>
                <li><strong>Planning Events:</strong> Understanding factors helps with grouping people or items</li>
                <li><strong>Construction:</strong> Builders use factors when measuring and cutting materials</li>
                <li><strong>Music:</strong> Musical rhythms often use prime number patterns</li>
                <li><strong>Nature:</strong> Many natural patterns (like cicada life cycles) involve prime numbers</li>
            </ul>
            <p><strong>Problem-Solving with Factors:</strong></p>
            <p>When facing grouping problems, ask yourself: "Can this number be divided evenly?"</p>
            <ul>
                <li>If a number is prime (except for very small primes), you cannot divide it into equal groups larger than 1</li>
                <li>If a number is composite, you have multiple grouping options</li>
            </ul>
            <p><strong>Real-World Examples:</strong></p>
            <ol>
                <li><strong>Classroom Groups:</strong> Can 24 students be divided into equal teams of 3? (Yes, 24÷3=8)</li>
                <li><strong>Party Planning:</strong> Can 17 cupcakes be shared equally among 4 friends? (No, 17 is prime)</li>
                <li><strong>Gardening:</strong> Can 36 plants be arranged in equal rows? (Yes, many ways: 2×18, 3×12, 4×9, 6×6)</li>
            </ol>
            <p><strong>Critical Thinking Questions:</strong></p>
            <ul>
                <li>Why would cicadas emerge every 13 or 17 years (both prime numbers)?</li>
                <li>Why do password systems use very large prime numbers?</li>
                <li>How can understanding factors help when baking or cooking?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #4A90E2;"></i> Grouping Students</div>
                <p>Can 13 students be put into equal teams larger than 1? No, because 13 is prime—it can only be 1 team of 13 or 13 teams of 1.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lock"></i> Prime Numbers in Security</div>
                <p>Your online passwords are often protected using very large prime numbers (like 100-digit primes!). Their unique properties make them perfect for encryption.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie"></i> Baking Application</div>
                <p>If a recipe makes 24 cookies and you want to pack them equally into boxes, you could use: 2 boxes of 12, 3 boxes of 8, 4 boxes of 6, etc.</p>
            </div>
        `,
        taskInstructions: "Apply your knowledge of prime and composite numbers to solve real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Grouping Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve each problem. Explain your thinking:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Ms. Johnson has 28 students. Can she divide them into equal groups of 4? Why or why not?</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A baker has 19 muffins. Can they be arranged equally on plates with more than 1 muffin per plate? Explain.</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. A soccer coach needs to choose team sizes for 36 players. List all the possible equal team sizes (larger than 1).</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Real-World Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Analyze each situation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. A gardener has 47 flower bulbs to plant in equal rows. What are her options?</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. A store sells eggs in cartons of 6, 12, or 18. Which carton sizes could hold exactly 42 eggs?</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>c. A year has 365 days. Is this number prime or composite? How do you know?</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Critical Thinking Challenges</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer thoughtfully:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Why do you think cicadas often have life cycles of 13 or 17 years (both prime numbers)?</div>
                        <div class="answer-space" style="height: 80px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>b. Imagine you're organizing a school fair with 60 volunteers. What are the advantages of having a composite number of volunteers?</div>
                        <div class="answer-space" style="height: 80px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a real-world word problem that involves either prime or composite numbers. Then solve it.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Your problem:</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                        <div>Solution:</div>
                        <div class="answer-space" style="height: 60px; margin-left: 20px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 examples of how prime or composite numbers are used in everyday life. Write a sentence about each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek4);
    console.log("grade5-math-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek4',
        metadata: grade5MathWeek4.metadata,
        days: grade5MathWeek4
    });
    console.log("grade5-math-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek4 = grade5MathWeek4;
console.log("grade5-math-week4.js loaded and registered successfully");