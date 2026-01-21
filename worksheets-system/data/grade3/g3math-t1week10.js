// Grade 3 Math - Week 10 Data
const grade3MathWeek10 = {
    metadata: {
        grade: 3,
        subject: "Mathematics",
        week: 10,
        title: "Factors and HCF",
        description: "Introduction to factors, prime/composite numbers, common factors, and Highest Common Factor (HCF)"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Factors",
        subtopic: "Understanding what factors are",
        lessonContent: `
            <p>Today we begin learning about factors. Factors are numbers we can multiply together to get another number.</p>
            <p><strong>Key Concept:</strong> A factor of a number divides that number evenly with no remainder.</p>
            <p><strong>Example:</strong> Factors of 6 are 1, 2, 3, and 6 because:</p>
            <ul>
                <li>1 × 6 = 6</li>
                <li>2 × 3 = 6</li>
            </ul>
            <p><strong>Important:</strong> Every number has at least two factors: 1 and itself!</p>
            <p>We can find factors by thinking of multiplication pairs.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Factors of 8</div>
                <p>What numbers can we multiply to get 8?</p>
                <p>1 × 8 = 8, 2 × 4 = 8</p>
                <p>So factors of 8 are: <strong>1, 2, 4, 8</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Factors of 12</div>
                <p>1 × 12 = 12, 2 × 6 = 12, 3 × 4 = 12</p>
                <p>Factors of 12: <strong>1, 2, 3, 4, 6, 12</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Factors of 7</div>
                <p>Only 1 × 7 = 7</p>
                <p>Factors of 7: <strong>1 and 7</strong> only</p>
            </div>
        `,
        taskInstructions: "Find all the factors of each number. List them in order from smallest to largest.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Factors of 10: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Factors of 9: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Factors of 15: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Factors of 5: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show all multiplication pairs for 16:
                <div class="drawing-area" style="height: 100px;"></div>
            </div>
        `,
        homework: "Find factors of three numbers between 10 and 20 from objects at home (e.g., 12 eggs in a carton—what are factors of 12?).",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics", 
        topic: "Prime and Composite Numbers",
        subtopic: "Differentiating between prime and composite",
        lessonContent: `
            <p>Today we learn about two special types of numbers: <strong>prime</strong> and <strong>composite</strong>.</p>
            <p><strong>Prime Numbers:</strong> Numbers with EXACTLY two factors: 1 and itself.</p>
            <p><strong>Composite Numbers:</strong> Numbers with MORE than two factors.</p>
            <p><strong>Special Case:</strong> 1 is NEITHER prime nor composite (it has only one factor).</p>
            <p><strong>Tip:</strong> To check if a number is prime, try dividing it by numbers smaller than it. If it divides evenly only by 1 and itself, it's prime.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Is 11 prime or composite?</div>
                <p>Factors of 11: 1 and 11 only</p>
                <p>Only two factors → <strong>Prime</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Is 9 prime or composite?</div>
                <p>Factors of 9: 1, 3, 9</p>
                <p>Three factors → <strong>Composite</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Is 2 prime or composite?</div>
                <p>Factors of 2: 1 and 2</p>
                <p>Two factors → <strong>Prime</strong> (and it's the smallest prime number!)</p>
            </div>
        `,
        taskInstructions: "Classify each number as Prime (P) or Composite (C). List factors if needed.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> 13: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> 14: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> 19: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> 20: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> 23: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> 25: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Challenge: Why is 1 neither prime nor composite?
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 5 prime numbers and 5 composite numbers between 1 and 30. Write them in two lists.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Finding Common Factors", 
        subtopic: "Identifying shared factors of two numbers",
        lessonContent: `
            <p>Today we learn how to find <strong>common factors</strong>—factors that two or more numbers share.</p>
            <p><strong>Steps:</strong></p>
            <ol>
                <li>List all factors of the first number</li>
                <li>List all factors of the second number</li>
                <li>Circle the factors that appear in both lists</li>
            </ol>
            <p><strong>Remember:</strong> 1 is always a common factor of any two numbers!</p>
            <p>Common factors help us understand relationships between numbers.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Common factors of 12 and 18</div>
                <p>Factors of 12: 1, 2, 3, 4, 6, 12</p>
                <p>Factors of 18: 1, 2, 3, 6, 9, 18</p>
                <p>Common factors: <strong>1, 2, 3, 6</strong></p>
                <p>These numbers appear in both lists!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example: Common factors of 8 and 15</div>
                <p>Factors of 8: 1, 2, 4, 8</p>
                <p>Factors of 15: 1, 3, 5, 15</p>
                <p>Common factor: <strong>1 only</strong></p>
                <p>When only 1 is common, we say the numbers are "co-prime."</p>
            </div>
        `,
        taskInstructions: "Find all common factors for each pair of numbers. List them in order.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Common factors of 10 and 15: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Common factors of 9 and 12: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Common factors of 14 and 21: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Common factors of 16 and 24: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Find three numbers that share a common factor greater than 1:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find two numbers around you (like pages in a book, items in a pack) and list their common factors.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Finding the HCF", 
        subtopic: "Highest Common Factor",
        lessonContent: `
            <p>Now we learn about the <strong>Highest Common Factor (HCF)</strong>, also called Greatest Common Divisor (GCD).</p>
            <p><strong>Definition:</strong> The HCF of two numbers is the LARGEST number that divides both numbers evenly.</p>
            <p><strong>Method:</strong></p>
            <ol>
                <li>List all factors of both numbers</li>
                <li>Identify the common factors</li>
                <li>Choose the largest common factor</li>
            </ol>
            <p><strong>Why it matters:</strong> HCF helps in simplifying fractions and solving real-life sharing problems.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: HCF of 12 and 18</div>
                <p>Factors of 12: 1, 2, 3, 4, 6, 12</p>
                <p>Factors of 18: 1, 2, 3, 6, 9, 18</p>
                <p>Common factors: 1, 2, 3, 6</p>
                <p>Largest is <strong>6</strong> → HCF = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: HCF of 8 and 9</div>
                <p>Factors of 8: 1, 2, 4, 8</p>
                <p>Factors of 9: 1, 3, 9</p>
                <p>Only common factor: 1</p>
                <p>HCF = <strong>1</strong> (they are co-prime)</p>
            </div>
        `,
        taskInstructions: "Find the HCF for each pair. Show your factor lists.",
        taskContent: `
            <div class="content-box">
                <p><strong>Find the HCF:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> HCF of 20 and 30 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> HCF of 14 and 28 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> HCF of 25 and 35 = <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Word Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Riya has 12 pencils and 18 erasers. She wants to make identical packs with the same number of each item. What's the greatest number of packs she can make? <span class="answer-space"></span>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find two numbers whose HCF is 7 (and both are less than 30):
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find the HCF of your age and a sibling's or friend's age. Explain how you got it.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Finding HCF of Multiple Numbers",
        subtopic: "Extending HCF to three numbers",
        revisionContent: `
            <p>Today we extend HCF to <strong>three or more numbers</strong>. The process is similar!</p>
            <p><strong>Steps for finding HCF of three numbers:</strong></p>
            <ol>
                <li>List factors of each number</li>
                <li>Find factors common to ALL numbers</li>
                <li>Choose the largest common factor</li>
            </ol>
            <p><strong>Tip:</strong> Sometimes it's easier to find the HCF of the first two numbers, then find the HCF of that result and the third number.</p>
            <p>This skill is useful for dividing items among multiple groups fairly.</p>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Find HCF of three numbers:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> HCF of 12, 18, and 24 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> HCF of 15, 25, and 30 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> HCF of 8, 12, and 20 = <span class="answer-space"></span>
                </div>
                
                <p><strong>Word Problem:</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A teacher has 24 red pens, 36 blue pens, and 48 black pens. She wants to make identical sets with equal numbers of each color. What's the greatest number of sets she can make? <span class="answer-space"></span>
                </div>
                
                <p><strong>Review Questions:</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is the difference between a factor and a common factor?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How do you know if a number is prime?
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Create your own HCF problem with three numbers and solve it:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Weekend project: Find three numbers from items at home (e.g., books, fruits, toys) and calculate their HCF. Present your work.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathWeek10);
    console.log("g3math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathWeek10);
    console.log("g3math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathWeek10',
        metadata: grade3MathWeek10.metadata,
        days: grade3MathWeek10
    });
    console.log("g3math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathWeek10 = grade3MathWeek10;
console.log("g3math-week10.js loaded and registered successfully");