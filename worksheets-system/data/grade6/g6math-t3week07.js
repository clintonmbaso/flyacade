// Grade 6 Mathematics - Term 3 Week 7 Data
const grade6MathsWeek7 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 7,
        title: "Mean, Mode, and Median",
        description: "Understanding measures of central tendency: calculating and interpreting mean, mode, and median in data sets"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Statistics",
        subtopic: "Describing the Mean (Average)",
        lessonContent: `
            <p>Welcome to our exploration of statistics! Today we'll learn about the MEAN - what most people call the "average."</p>
            <p><strong>Key Question:</strong> How do we find a typical value in a set of data?</p>
            <p><strong>Introduction:</strong> The <strong>Mean</strong> (or average) is a single number that represents a whole set of numbers. It helps us understand what is "typical" for a group.</p>
            <p><strong>How to Calculate the Mean:</strong></p>
            <ol>
                <li>Add up all the numbers in the data set (find the SUM)</li>
                <li>Count how many numbers there are (find the COUNT)</li>
                <li>Divide the SUM by the COUNT</li>
            </ol>
            <p><strong>Formula:</strong> Mean = (Sum of all values) ÷ (Number of values)</p>
            <p><strong>Example:</strong> Find the mean of 5, 7, 9, 6, 8</p>
            <ul>
                <li>Step 1: Sum = 5 + 7 + 9 + 6 + 8 = 35</li>
                <li>Step 2: Count = 5 numbers</li>
                <li>Step 3: Mean = 35 ÷ 5 = 7</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Real-World Mean</div>
                <p>If you scored 80%, 85%, 90%, and 75% on four tests, your mean score is (80+85+90+75) ÷ 4 = 330 ÷ 4 = 82.5%</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Class Average</div>
                <p>If a class of 20 students has a total of 1,400 points on a test, the mean score is 1,400 ÷ 20 = 70 points.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-cart"></i> Shopping Example</div>
                <p>You buy items costing $2, $5, $3, $8, and $2. The mean price is ($2+$5+$3+$8+$2) ÷ 5 = $20 ÷ 5 = $4 per item.</p>
            </div>
        `,
        taskInstructions: "Calculate means of various data sets and solve word problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Basic Mean Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the mean of each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 4, 8, 12, 16, 20 → Mean = _________</div>
                        <div>b) 15, 20, 25, 30 → Mean = _________</div>
                        <div>c) 100, 200, 300, 400, 500 → Mean = _________</div>
                        <div>d) 3, 5, 7, 9, 11, 13 → Mean = _________</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Maria's test scores are 85, 90, 78, 92, and 85. What is her mean score?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A basketball player scored 12, 15, 9, 20, and 14 points in five games. What is the mean number of points per game?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> The heights of four students are 140 cm, 145 cm, 138 cm, and 152 cm. Find the mean height.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Find the Missing Number</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> The mean of four numbers is 10. Three of the numbers are 8, 12, and 9. What is the fourth number?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> The mean of five numbers is 20. The sum of four numbers is 75. What is the fifth number?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find the mean of your weekly allowances (or any 5 numbers from home). Show your work step by step.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Statistics",
        subtopic: "Finding the Mode",
        lessonContent: `
            <p>Today we'll learn about the MODE - the value that appears most frequently in a data set!</p>
            <p><strong>Key Question:</strong> What number shows up the most?</p>
            <p><strong>Introduction:</strong> The <strong>Mode</strong> is the value that occurs most often in a data set. A data set can have one mode, more than one mode, or no mode at all.</p>
            <p><strong>How to Find the Mode:</strong></p>
            <ol>
                <li>List all the numbers in the data set</li>
                <li>Count how many times each number appears</li>
                <li>The number that appears most often is the mode</li>
            </ol>
            <p><strong>Special Cases:</strong></p>
            <ul>
                <li><strong>One Mode (Unimodal):</strong> One value appears more than others (e.g., 2, 3, 3, 4, 5 → Mode = 3)</li>
                <li><strong>Two Modes (Bimodal):</strong> Two values appear equally often (e.g., 1, 1, 2, 2, 3 → Modes = 1 and 2)</li>
                <li><strong>No Mode:</strong> All numbers appear the same number of times (e.g., 1, 2, 3, 4, 5 → No mode)</li>
            </ul>
            <p><strong>Example:</strong> Find the mode of 4, 2, 4, 5, 6, 4, 3</p>
            <ul>
                <li>Count: 4 appears 3 times, 2 appears once, 5 appears once, 6 appears once, 3 appears once</li>
                <li>Mode = 4 (appears most frequently)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> Shopping Example</div>
                <p>A store sells shoe sizes: 5, 6, 6, 6, 7, 8, 8. The mode is size 6 because it's the most common size sold.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Bimodal Example</div>
                <p>In a class, favorite colors: Blue (8 votes), Red (8 votes), Green (4 votes). Modes = Blue and Red (bimodal).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dice"></i> Dice Rolls</div>
                <p>If you roll a die 10 times and get: 2, 4, 3, 2, 5, 6, 2, 3, 3, 1. The modes are 2 and 3 (both appear 3 times).</p>
            </div>
        `,
        taskInstructions: "Find the mode in various data sets and identify unimodal, bimodal, and no mode cases.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Mode</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the mode for each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2, 5, 3, 2, 4, 2, 6, 2 → Mode = _________</div>
                        <div>b) 10, 20, 30, 20, 40, 20, 30, 30 → Mode(s) = _________</div>
                        <div>c) 1, 2, 3, 4, 5, 6, 7, 8 → Mode = _________</div>
                        <div>d) 100, 150, 100, 200, 150, 100, 200, 150 → Mode(s) = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Type</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each data set, write whether it has one mode, two modes, or no mode:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3, 7, 3, 8, 9, 3, 7 → _________</div>
                        <div>b) 12, 15, 12, 18, 15, 12, 18, 15 → _________</div>
                        <div>c) 25, 30, 35, 40, 45 → _________</div>
                        <div>d) Red, Blue, Red, Green, Blue, Blue → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A teacher recorded the number of siblings students have: 1, 2, 1, 3, 2, 1, 4, 2, 2, 1. What is the mode?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> In a survey of favorite fruits: Apple (5), Banana (5), Orange (3), Grapes (4). What is the mode?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> The ages of children at a birthday party: 8, 9, 8, 10, 9, 8, 11, 9, 8. Find the mode.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Survey 10 family members or friends about their favorite ice cream flavor. Record the data and find the mode.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Statistics",
        subtopic: "Finding the Median",
        lessonContent: `
            <p>Today we'll learn about the MEDIAN - the middle value of an ordered data set!</p>
            <p><strong>Key Question:</strong> What is the middle number when all values are lined up?</p>
            <p><strong>Introduction:</strong> The <strong>Median</strong> is the middle value when a data set is arranged in order (from smallest to largest or largest to smallest).</p>
            <p><strong>How to Find the Median:</strong></p>
            <ol>
                <li>Arrange the numbers in order from smallest to largest</li>
                <li>Find the middle position</li>
                <li>If there is an odd number of values, the median is the middle number</li>
                <li>If there is an even number of values, the median is the average of the two middle numbers</li>
            </ol>
            <p><strong>Example 1 (Odd count):</strong> Find median of 5, 2, 8, 3, 9</p>
            <ul>
                <li>Order: 2, 3, 5, 8, 9</li>
                <li>Middle position: 3rd number</li>
                <li>Median = 5</li>
            </ul>
            <p><strong>Example 2 (Even count):</strong> Find median of 4, 8, 2, 6</p>
            <ul>
                <li>Order: 2, 4, 6, 8</li>
                <li>Two middle numbers: 4 and 6</li>
                <li>Median = (4 + 6) ÷ 2 = 10 ÷ 2 = 5</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-medal"></i> Race Times</div>
                <p>Race times (seconds): 12, 15, 11, 14, 13. Ordered: 11, 12, 13, 14, 15. Median = 13 seconds (middle runner).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dollar-sign"></i> Salaries Example</div>
                <p>Weekly earnings: $200, $250, $300, $400, $500, $600. Ordered: 200, 250, 300, 400, 500, 600. Median = (300+400)÷2 = $350.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Test Scores</div>
                <p>Scores: 65, 70, 75, 80, 85, 90, 95. Ordered already. Median = 80 (the 4th score out of 7).</p>
            </div>
        `,
        taskInstructions: "Calculate medians for various data sets with both odd and even numbers of values.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Median (Odd Count)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the median of each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 3, 7, 2, 9, 5 → Ordered: ________ Median = _________</div>
                        <div>b) 14, 11, 18, 20, 15 → Ordered: ________ Median = _________</div>
                        <div>c) 22, 19, 25, 21, 23, 24, 20 → Ordered: ________ Median = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Find the Median (Even Count)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the median of each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 8, 4, 6, 10 → Ordered: ________ Median = _________</div>
                        <div>b) 25, 30, 20, 35, 40, 45 → Ordered: ________ Median = _________</div>
                        <div>c) 13, 17, 11, 19, 15, 21 → Ordered: ________ Median = _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> The ages of 5 siblings are: 10, 7, 15, 12, 9. What is the median age?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A basketball team's points in 6 games: 45, 52, 48, 60, 55, 50. Find the median.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> The heights (cm) of 8 students: 142, 138, 145, 150, 148, 140, 155, 143. Find the median.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Collect 7 numbers from around your home (prices, ages, measurements). Order them and find the median.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Statistics",
        subtopic: "Data Set Comparisons - The Effect of Outliers",
        lessonContent: `
            <p>Today we'll discover how one unusual number (called an OUTLIER) affects the mean differently than the median!</p>
            <p><strong>Key Question:</strong> What happens to the average when there's one very large or very small number?</p>
            <p><strong>Introduction:</strong> An <strong>Outlier</strong> is a value that is much higher or much lower than the other values in a data set.</p>
            <p><strong>How Outliers Affect Measures:</strong></p>
            <ul>
                <li><strong>Mean:</strong> The mean is strongly affected by outliers (it gets pulled toward the outlier)</li>
                <li><strong>Median:</strong> The median is NOT affected by outliers (it stays in the middle)</li>
                <li><strong>Mode:</strong> Usually not affected unless the outlier repeats</li>
            </ul>
            <p><strong>Example:</strong> Data set: 2, 3, 4, 5, 100 (100 is an outlier)</p>
            <ul>
                <li>Mean = (2+3+4+5+100) ÷ 5 = 114 ÷ 5 = 22.8 (pulled up by the outlier!)</li>
                <li>Ordered: 2, 3, 4, 5, 100 → Median = 4 (still the middle, unaffected)</li>
            </ul>
            <p><strong>Why This Matters:</strong> When looking at real data (like salaries, house prices, or test scores), the median often gives a better picture of "typical" when outliers exist.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Income Example</div>
                <p>In a neighborhood, incomes are: $30k, $35k, $40k, $45k, $1,000k (millionaire). Mean = $230k (not typical!). Median = $40k (better represents typical income).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> House Prices</div>
                <p>House prices: $150k, $160k, $170k, $180k, $500k. Mean = $232k, Median = $170k. Most houses are around $170k!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Test Scores</div>
                <p>Class scores: 65, 70, 72, 68, 98 (one high score). Mean = 74.6, Median = 70. The median better shows most students scored around 70.</p>
            </div>
        `,
        taskInstructions: "Compare how means and medians change when outliers are added or removed from data sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Outliers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the outlier in each data set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 5, 7, 6, 8, 45, 5, 7</div>
                        <div>b) 100, 102, 98, 95, 200, 101, 99</div>
                        <div>c) 3.2, 3.5, 3.1, 3.4, 3.3, 10.5, 3.2</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Mean and Median</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For the data set 2, 4, 6, 8, 50:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Mean = _________</div>
                        <div>b) Median = _________</div>
                        <div>c) Which measure is more affected by the outlier 50? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Before and After Outlier</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Original data: 10, 12, 14, 16, 18
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Mean = _________ Median = _________</div>
                        <div>b) Add outlier 100. New Mean = _________ New Median = _________</div>
                        <div>c) Which changed more? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A teacher wants to know the typical test score. The scores are: 85, 82, 88, 84, 40 (a student was sick). Should the teacher use mean or median? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why might a company report the "median salary" instead of the "mean salary" of its employees?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find a news article or report that uses 'average.' Determine if they likely used mean or median, and whether an outlier might be affecting their numbers.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Statistics",
        subtopic: "Practical Mean - Class Quiz Average",
        lessonContent: `
            <p>Today we'll apply everything we've learned by calculating the mean score of our class on a 10-point quiz!</p>
            <p><strong>Key Question:</strong> What is the average performance of our class?</p>
            <p><strong>Review: The Three Measures We Learned:</strong></p>
            <ul>
                <li><strong>Mean:</strong> Sum ÷ Count (affected by outliers)</li>
                <li><strong>Mode:</strong> Most frequent value</li>
                <li><strong>Median:</strong> Middle value when ordered (not affected by outliers)</li>
            </ul>
            <p><strong>Today's Activity:</strong> We will take a short 5-question quiz (10 points total). Then we will:</p>
            <ol>
                <li>Collect everyone's scores</li>
                <li>Find the sum of all scores</li>
                <li>Calculate the class mean</li>
                <li>Find the median and mode of the class scores</li>
                <li>Discuss any outliers and how they affect our measures</li>
            </ol>
            <p><strong>Formula Reminder:</strong> Mean = (Score₁ + Score₂ + ... + Scoreₙ) ÷ n</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Class Example</div>
                <p>If a class of 6 students scored: 8, 7, 9, 6, 10, 8. Sum = 48, Mean = 48 ÷ 6 = 8.0. Median: ordered 6,7,8,8,9,10 → (8+8)÷2 = 8. Mode = 8.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Understanding Results</div>
                <p>A mean of 7.5 out of 10 means the class average is 75%. That helps the teacher know if the class understood the material.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Goal Setting</div>
                <p>Calculating class averages helps teachers and students set goals for improvement. If the mean is low, we know which topics need more review!</p>
            </div>
        `,
        taskInstructions: "Take a short quiz, then calculate the class mean, median, and mode from collected scores.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Take the Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Answer the following 5 questions (2 points each = 10 points total):
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        <p><strong>Question 1:</strong> What is the mean of 6, 10, 4, 8? _________</p>
                        <p><strong>Question 2:</strong> Find the mode: 5, 3, 5, 7, 5, 8, 9 _________</p>
                        <p><strong>Question 3:</strong> Find the median: 12, 15, 11, 14, 13 _________</p>
                        <p><strong>Question 4:</strong> If the mean of three numbers is 12 and two numbers are 10 and 14, what is the third? _________</p>
                        <p><strong>Question 5:</strong> Which measure is NOT affected by outliers? (Mean / Median / Mode) _________</p>
                    </div>
                    <div style="margin-top: 10px;">My score: _________ / 10</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Class Data Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Record all class scores in the space below:
                    <div class="answer-space" style="height: 100px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calculate Class Statistics</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using the class scores:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Sum of all scores: _________</div>
                        <div>b) Number of students: _________</div>
                        <div>c) Class Mean = _________ ÷ _________ = _________</div>
                        <div>d) Ordered scores: _________________________________</div>
                        <div>e) Median = _________</div>
                        <div>f) Mode = _________</div>
                        <div>g) Any outliers? _________ If yes, which value(s)? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Does the mean, median, or mode best represent the class's performance? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If one student scored much lower than everyone else, how would that change the mean? Would it change the median?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a data set of 10 numbers that has a mean of 15, a median of 12, and a mode of 10. Explain your thinking.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathsWeek7);
    console.log("grade6-maths-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathsWeek7);
    console.log("grade6-maths-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathsWeek7',
        metadata: grade6MathsWeek7.metadata,
        days: grade6MathsWeek7
    });
    console.log("grade6-maths-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathsWeek7 = grade6MathsWeek7;
console.log("grade6-maths-week7.js loaded and registered successfully");