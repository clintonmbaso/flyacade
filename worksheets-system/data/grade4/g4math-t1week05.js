// Grade 4 Math - Week 5 Data
const grade4MathWeek5 = {
    metadata: {
        grade: 4,
        subject: "Mathematics",
        term: 1,
        week: 5,
        title: "Factors and Multiples",
        description: "Understanding factors, multiples, HCF, LCM, and patterns in everyday life"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Factors and Multiples",
        subtopic: "Factor Ladders & Number Bonds",
        lessonContent: `
            <p>Welcome to our exploration of factors! Today we will learn how to find all the factors of a number using visual tools like factor ladders and rainbows.</p>
            <p><strong>Key Concept:</strong> Factors are numbers we multiply together to get another number. Every number has at least two factors: 1 and itself.</p>
            <p><strong>What Are Factor Pairs?</strong></p>
            <ul>
                <li>Two numbers that multiply to give a target number</li>
                <li>For example: 3 × 8 = 24, so 3 and 8 are factor pairs of 24</li>
                <li>Factor pairs work in both directions (3×8 and 8×3)</li>
            </ul>
            <p><strong>How to Find All Factors:</strong></p>
            <ol>
                <li>Start with 1 and the number itself (always a factor pair)</li>
                <li>Check if 2 divides evenly into the number</li>
                <li>Continue with 3, 4, 5, and so on</li>
                <li>Stop when you reach a number you've already found</li>
            </ol>
            <p><strong>Visual Tools:</strong></p>
            <ul>
                <li><strong>Factor Ladders:</strong> Show step-by-step division</li>
                <li><strong>Factor Rainbows:</strong> Connect factor pairs in rainbow arcs</li>
                <li><strong>Multiplication Tables:</strong> Find numbers that multiply to your target</li>
            </ul>
            <p><strong>Example:</strong> Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rainbow" style="color: #4A90E2;"></i> Factor Rainbow for 18</div>
                <p>1—18, 2—9, 3—6. Connect each pair with a rainbow arc!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-down"></i> Factor Ladder for 30</div>
                <p>30 ÷ 1 = 30, 30 ÷ 2 = 15, 30 ÷ 3 = 10, 30 ÷ 5 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Finding Tip</div>
                <p>Remember: If a number is even, 2 is always a factor! If it ends in 0 or 5, 5 is a factor.</p>
            </div>
        `,
        taskInstructions: "Practice finding factors using factor ladders and rainbows by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Create a factor rainbow for the number 20:
                <div class="answer-space" style="height: 100px;"></div>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">(List all factor pairs connected with arcs)</p>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Use a factor ladder to find all factors of 36:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Step 1: 36 ÷ 1 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>Step 2: 36 ÷ 2 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>Step 3: 36 ÷ 3 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>Continue until complete...</div>
                </div>
                <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle all the factors of 48 from this list:
                <div style="margin: 10px 0 10px 30px; font-family: monospace;">
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 24, 48, 49
                </div>
                <div class="answer-space" style="height: 50px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is 1 a factor of every number? Explain:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find all factors of the number 60. Present your answer using either a factor rainbow or factor ladder.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Factors and Multiples",
        subtopic: "The Highest Common Factor (HCF)",
        lessonContent: `
            <p>Today we will learn about the Highest Common Factor (HCF), which helps us find what numbers share in common.</p>
            <p><strong>Key Concept:</strong> The Highest Common Factor (HCF) is the largest number that divides evenly into two or more numbers.</p>
            <p><strong>Why is HCF Useful?</strong></p>
            <ul>
                <li>Sharing things equally into groups</li>
                <li>Simplifying fractions</li>
                <li>Organizing items into identical sets</li>
            </ul>
            <p><strong>How to Find HCF:</strong></p>
            <ol>
                <li>List all factors of each number</li>
                <li>Circle the common factors (factors that appear in all lists)</li>
                <li>Choose the largest common factor</li>
            </ol>
            <p><strong>Example:</strong> Find HCF of 12 and 18</p>
            <ul>
                <li>Factors of 12: 1, 2, 3, 4, 6, 12</li>
                <li>Factors of 18: 1, 2, 3, 6, 9, 18</li>
                <li>Common factors: 1, 2, 3, 6</li>
                <li>Highest Common Factor: 6</li>
            </ul>
            <p><strong>Real-World Application:</strong> If you have 12 cookies and 18 juice boxes, what's the largest number of identical gift bags you can make? Answer: 6 bags (HCF of 12 and 18).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite"></i> Shared Treat Challenge</div>
                <p>12 cookies ÷ 6 = 2 cookies per bag. 18 juice boxes ÷ 6 = 3 juice boxes per bag. Each of the 6 bags is identical!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Finding Common Factors</div>
                <p>For 20 and 30: Common factors are 1, 2, 5, 10. HCF is 10.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Quick Check</div>
                <p>If HCF of two numbers is 1, they are called "co-prime" or "relatively prime."</p>
            </div>
        `,
        taskInstructions: "Practice finding the Highest Common Factor by completing the following exercises.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding HCF</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the HCF of 15 and 25:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Factors of 15: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>Factors of 25: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>Common factors: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>HCF: <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Find the HCF of 24 and 36 using factor ladders:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sarah has 16 red ribbons and 24 blue ribbons. She wants to make identical hair bows using all ribbons. What is the greatest number of bows she can make?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A teacher has 30 pencils and 45 erasers. She wants to create identical prize packs. What's the largest number of packs she can make?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find the HCF of three numbers: 12, 18, and 24:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Explain in your own words what HCF means:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find the HCF of 28 and 42. Show your work using factor lists.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Factors and Multiples",
        subtopic: "Multiples & The Lowest Common Multiple (LCM)",
        lessonContent: `
            <p>Today we will explore multiples and learn how to find the Lowest Common Multiple (LCM) of numbers.</p>
            <p><strong>Key Concept:</strong> Multiples are what you get when you multiply a number by 1, 2, 3, and so on. They go on forever!</p>
            <p><strong>What is a Multiple?</strong></p>
            <ul>
                <li>The result of multiplying a number by an integer</li>
                <li>For example: Multiples of 3 are 3, 6, 9, 12, 15, ...</li>
                <li>Every number is a multiple of itself</li>
            </ul>
            <p><strong>What is LCM?</strong> The Lowest Common Multiple is the smallest number that is a multiple of two or more numbers.</p>
            <p><strong>How to Find LCM:</strong></p>
            <ol>
                <li>List the first several multiples of each number</li>
                <li>Look for the smallest number that appears in all lists</li>
                <li>That number is the LCM</li>
            </ol>
            <p><strong>Example:</strong> Find LCM of 3 and 4</p>
            <ul>
                <li>Multiples of 3: 3, 6, 9, 12, 15, 18, ...</li>
                <li>Multiples of 4: 4, 8, 12, 16, 20, 24, ...</li>
                <li>Common multiples: 12, 24, 36, ...</li>
                <li>Lowest Common Multiple: 12</li>
            </ul>
            <p><strong>Real-World Application:</strong> If one light flashes every 3 seconds and another every 4 seconds, they'll flash together every 12 seconds (LCM of 3 and 4).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Synchronized Lights</div>
                <p>Light A: 3, 6, 9, 12, 15... Light B: 4, 8, 12, 16, 20... They sync at 12, 24, 36 seconds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Listing Multiples</div>
                <p>Multiples of 5: 5, 10, 15, 20, 25, 30... Notice they all end in 0 or 5!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bell"></i> Bell Schedule</div>
                <p>If School A has recess every 40 minutes and School B every 30 minutes, they'll both have recess together every 120 minutes (LCM).</p>
            </div>
        `,
        taskInstructions: "Practice finding multiples and the Lowest Common Multiple by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding Multiples</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the first 6 multiples of:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 7: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 9: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 11: <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding LCM</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the LCM of 4 and 6:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Multiples of 4: <div style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></div></div>
                        <div>Multiples of 6: <div style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></div></div>
                        <div>LCM: <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Find the LCM of 5 and 8:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A bus arrives at Station A every 15 minutes. A bus arrives at Station B every 20 minutes. If they arrive together at 9:00 AM, when will they next arrive together?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Emma practices piano every 3 days and guitar every 4 days. If she practiced both today, how many days until she practices both again on the same day?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Find the LCM of 6, 8, and 12:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What's the difference between a factor and a multiple?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find the LCM of 9 and 12. List at least 5 multiples of each number to show your work.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Factors and Multiples",
        subtopic: "Patterns and Everyday Multiples",
        lessonContent: `
            <p>Today we will explore patterns in multiples and see how they appear in everyday life.</p>
            <p><strong>Key Concept:</strong> Multiples create predictable patterns that help us solve problems and understand the world around us.</p>
            <p><strong>Patterns in Multiples:</strong></p>
            <ul>
                <li>Multiples of 2 always end in 0, 2, 4, 6, or 8 (even numbers)</li>
                <li>Multiples of 5 always end in 0 or 5</li>
                <li>Multiples of 10 always end in 0</li>
                <li>Multiples of 3 have digits that add up to a multiple of 3</li>
            </ul>
            <p><strong>Finding Missing Numbers in Sequences:</strong></p>
            <ol>
                <li>Identify the pattern (what's being added each time?)</li>
                <li>Check if it's a multiple pattern</li>
                <li>Use multiplication to find missing numbers</li>
            </ol>
            <p><strong>Example:</strong> Complete the pattern: 7, 14, __, 28, __</p>
            <p>Pattern: multiples of 7. Missing numbers: 21 and 35</p>
            <p><strong>Everyday Multiples:</strong></p>
            <ul>
                <li>Eggs come in multiples of 6 or 12</li>
                <li>Bicycle wheels: 2 wheels per bicycle</li>
                <li>Pack of pencils: usually 10 or 12</li>
                <li>Days in weeks: multiples of 7</li>
                <li>Hours in days: multiples of 24</li>
            </ul>
            <p><strong>Why Patterns Matter:</strong> They help us predict, solve problems quickly, and see connections in math and life.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Egg Cartons</div>
                <p>Egg cartons hold 6, 12, or 18 eggs. These are all multiples of 6!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Bicycle Wheels</div>
                <p>If you have 5 bicycles, you have 10 wheels (5 × 2). Wheels come in multiples of 2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Pattern Detective</div>
                <p>Pattern: 4, 8, 12, 16, __, 24. Missing number is 20 (multiples of 4).</p>
            </div>
        `,
        taskInstructions: "Practice identifying patterns and finding everyday multiples by completing the following activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pattern Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete these multiple patterns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 6, 12, 18, __, 30, __, 42</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 25, 30, 35, __, __, 50</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. 11, 22, 33, __, 55, __</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Everyday Multiples</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these real-life problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. How many wheels are there on 8 bicycles?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. How many eggs are in 4 cartons if each holds 12 eggs?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. How many days are there in 9 weeks?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a multiple pattern based on something from your daily life:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: Pack of markers (8 markers per pack): 8, 16, 24, 32...</div>
                        <div>Your pattern: <div style="display: inline-block; width: 250px; border-bottom: 1px solid #000;"></div></div>
                        <div>First 5 numbers in your pattern:</div>
                    </div>
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the missing numbers and identify the multiple pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>9, 18, 27, __, 45, __, 63</div>
                        <div>Pattern: Multiples of <div style="display: inline-block; width: 30px; border-bottom: 1px solid #000;"></div></div>
                        <div>Missing numbers: <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Look around your classroom. List 3 things that come in multiples:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create two different multiple patterns (one using multiples of 4, one using multiples of 7). Write the first 6 numbers in each pattern.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4MathWeek5);
    console.log("grade4-math-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4MathWeek5);
    console.log("grade4-math-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4MathWeek5',
        metadata: grade4MathWeek5.metadata,
        days: grade4MathWeek5
    });
    console.log("grade4-math-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4MathWeek5 = grade4MathWeek5;
console.log("grade4-math-week5.js loaded and registered successfully");