// Grade 5 Mathematics - Term 3 Week 8 Data
const grade5MathWeek8 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 8,
        title: "Stem-and-Leaf Plots",
        description: "Organizing, reading, and interpreting data using stem-and-leaf plots"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Organizing Numbers (Introduction to Stem-and-Leaf Plots)",
        lessonContent: `
            <p>Welcome to our week on stem-and-leaf plots! Today we'll learn how to organize large lists of numbers quickly and neatly.</p>
            <p><strong>Key Question:</strong> How can we arrange a messy list of numbers so we can see patterns easily?</p>
            <p><strong>Introduction:</strong> A <strong>Stem-and-Leaf Plot</strong> is a special way to organize numbers. It splits each number into a "stem" (the first digit or digits) and a "leaf" (the last digit). This helps us see the shape of our data at a glance!</p>
            <p><strong>How to Create a Stem-and-Leaf Plot:</strong></p>
            <ol>
                <li>Decide which digits will be the <strong>stem</strong> (usually the tens digit)</li>
                <li>Decide which digit will be the <strong>leaf</strong> (usually the ones digit)</li>
                <li>List the stems in order from smallest to largest</li>
                <li>Write each leaf next to its stem</li>
            </ol>
            <p><strong>Example:</strong> The numbers 12, 15, 18, 22, 23, 29</p>
            <ul>
                <li>1 | 2 5 8  (represents 12, 15, 18)</li>
                <li>2 | 2 3 9  (represents 22, 23, 29)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up"></i> Quick Sorting</div>
                <p>Instead of rewriting all your numbers, a stem-and-leaf plot lets you organize them as you list them. It's like having a filing cabinet where each drawer (stem) holds related papers (leaves)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Seeing the Shape</div>
                <p>With a stem-and-leaf plot, you can instantly see which numbers appear most often and whether most numbers are high or low.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Reading the Plot</div>
                <p>Remember: 4 | 7 means 47. The stem is 4 (tens) and the leaf is 7 (ones). Always put the leaves in order from smallest to largest!</p>
            </div>
        `,
        taskInstructions: "Convert lists of numbers into stem-and-leaf plots and explain the process.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding Stems and Leaves</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each number below, identify the stem and the leaf:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 34 → Stem: ____  Leaf: ____</div>
                        <div>b) 27 → Stem: ____  Leaf: ____</div>
                        <div>c) 41 → Stem: ____  Leaf: ____</div>
                        <div>d) 58 → Stem: ____  Leaf: ____</div>
                        <div>e) 63 → Stem: ____  Leaf: ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating a Stem-and-Leaf Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Organize these test scores into a stem-and-leaf plot:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        72, 75, 78, 81, 84, 85, 85, 89, 90, 92, 94, 98
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Stem (tens) | Leaves (ones)</div>
                        <div>7 | _________</div>
                        <div>8 | _________</div>
                        <div>9 | _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it helpful to put the leaves in order from smallest to largest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is one advantage of using a stem-and-leaf plot instead of just listing all the numbers?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Collect 15 different two-digit numbers from your home (page numbers, prices, ages). Create a stem-and-leaf plot to organize them.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Stems and Leaves (Class Heights Activity)",
        lessonContent: `
            <p>Today we'll practice sorting data by creating a stem-and-leaf plot using our own heights!</p>
            <p><strong>Key Question:</strong> How can we organize all the heights in our class into one easy-to-read display?</p>
            <p><strong>Steps for Our Class Activity:</strong></p>
            <ol>
                <li>Each student measures their height in centimeters</li>
                <li>We record all heights on the board</li>
                <li>We choose stems (hundreds and tens) and leaves (ones)</li>
                <li>We build our stem-and-leaf plot together</li>
            </ol>
            <p><strong>Heights Example:</strong> If students are 142 cm, 135 cm, 148 cm, 156 cm, 139 cm</p>
            <ul>
                <li>First, list stems in order: 13, 14, 15</li>
                <li>13 | 5 9  (for 135 and 139)</li>
                <li>14 | 2 8  (for 142 and 148)</li>
                <li>15 | 6  (for 156)</li>
            </ul>
            <p><strong>Remember:</strong> Always write the leaves in order from smallest to largest within each row!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring Up</div>
                <p>When measuring heights, make sure everyone stands straight against the wall. Record heights to the nearest centimeter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Visual Data</div>
                <p>If your stem-and-leaf plot has more leaves next to "14" than any other stem, that means most students are in the 140s!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Real-World Use</div>
                <p>Doctors use stem-and-leaf plots to track patients' growth over time. They can quickly see if a child's height is typical for their age.</p>
            </div>
        `,
        taskInstructions: "Measure classmates' heights and create a class stem-and-leaf plot.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Collect the Data</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Record your height and the heights of 9 classmates in the space below:
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create the Stem-and-Leaf Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Organize all 10 heights into a stem-and-leaf plot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Stem (hundreds & tens) | Leaves (ones)</div>
                        <div>___ | ___________</div>
                        <div>___ | ___________</div>
                        <div>___ | ___________</div>
                        <div>___ | ___________</div>
                        <div>___ | ___________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Discussion Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which stem had the most leaves? What does that tell us about our class?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What was the tallest height recorded? What was the shortest?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask 10 family members or neighbors their ages. Create a stem-and-leaf plot for the ages you collect.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Reading the Plot (Mode and Median)",
        lessonContent: `
            <p>Today we'll learn how to find the <strong>Mode</strong> and <strong>Median</strong> from a stem-and-leaf plot!</p>
            <p><strong>Key Question:</strong> How can we find the most common number and the middle number using a stem-and-leaf plot?</p>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Mode:</strong> The number that appears most often in a data set</li>
                <li><strong>Median:</strong> The middle number when all numbers are arranged in order</li>
                <li><strong>Range:</strong> The difference between the largest and smallest numbers</li>
            </ul>
            <p><strong>Finding the Mode from a Stem-and-Leaf Plot:</strong></p>
            <ol>
                <li>Look for the leaf that repeats most often</li>
                <li>That leaf plus its stem gives you the mode</li>
                <li>If two numbers appear the same number of times, there are two modes</li>
            </ol>
            <p><strong>Finding the Median from a Stem-and-Leaf Plot:</strong></p>
            <ol>
                <li>Count how many total numbers there are</li>
                <li>Find the middle position (if 15 numbers, the 8th number is the median)</li>
                <li>Read across the plot from smallest to largest</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Finding the Mode</div>
                <p>In the plot 5 | 2 2 7, the number 52 appears twice (leaf 2 appears twice). So the mode is 52!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Finding the Median</div>
                <p>For 11 numbers, the median is the 6th number. List all numbers in order from left to right, top to bottom, and count to the middle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Two Modes</div>
                <p>If 3 | 1 4 4 and 4 | 0 0 7, then 34 and 40 both appear twice. The data set has two modes: 34 and 40.</p>
            </div>
        `,
        taskInstructions: "Find the mode and median from given stem-and-leaf plots.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Finding the Mode</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find the mode for each stem-and-leaf plot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 2 | 3 5 7 &nbsp;&nbsp; 3 | 1 1 4 &nbsp;&nbsp; 4 | 0 2 → Mode: ____</div>
                        <div>b) 5 | 6 6 6 8 &nbsp;&nbsp; 6 | 1 3 &nbsp;&nbsp; 7 | 0 → Mode: ____</div>
                        <div>c) 1 | 2 4 &nbsp;&nbsp; 2 | 5 5 7 7 &nbsp;&nbsp; 3 | 1 8 → Mode: ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding the Median</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the median for each stem-and-leaf plot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) 0 | 5 9 &nbsp;&nbsp; 1 | 2 4 7 &nbsp;&nbsp; 2 | 1 3 → Median: ____</div>
                        <div>b) 3 | 0 2 5 &nbsp;&nbsp; 4 | 1 4 6 8 &nbsp;&nbsp; 5 | 2 → Median: ____</div>
                        <div>c) 6 | 4 7 &nbsp;&nbsp; 7 | 1 3 5 9 &nbsp;&nbsp; 8 | 0 2 → Median: ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Use This Plot to Answer Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use the stem-and-leaf plot below:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px;">
                        1 | 2 5 8<br>
                        2 | 0 0 3 7<br>
                        3 | 1 4 4 9<br>
                        4 | 2 6
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many total numbers are there? ____</div>
                        <div>b) What is the mode? ____</div>
                        <div>c) What is the median? ____</div>
                        <div>d) What is the largest number? ____</div>
                        <div>e) What is the smallest number? ____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a stem-and-leaf plot for any 12 numbers you choose. Then find and write the mode and median of your data set.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Plotting Practice (Minutes of Homework)",
        lessonContent: `
            <p>Today we'll practice creating a complete stem-and-leaf plot from data we collect about homework time!</p>
            <p><strong>Key Question:</strong> How many minutes of homework did everyone do last night, and what does our plot reveal?</p>
            <p><strong>Collecting Our Data:</strong></p>
            <ol>
                <li>Think about how many minutes you spent on homework last night</li>
                <li>Round to the nearest 5 minutes if needed (10, 15, 20, etc.)</li>
                <li>We'll record all responses and create a plot together</li>
            </ol>
            <p><strong>When Creating Your Plot:</strong></p>
            <ul>
                <li>Stem = tens digit</li>
                <li>Leaf = ones digit</li>
                <li>List stems in order</li>
                <li>Write leaves from smallest to largest</li>
                <li>Include a title and key</li>
            </ul>
            <p><strong>Key Example:</strong> "Key: 3 | 5 means 35 minutes"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Homework Time</div>
                <p>If you did 45 minutes of homework, stem = 4, leaf = 5. If you did 30 minutes exactly, stem = 3, leaf = 0.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> What the Data Tells Us</div>
                <p>A stem-and-leaf plot of homework minutes can help teachers see if students need more or less time to complete assignments.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Adding a Title</div>
                <p>Always give your plot a title like "Minutes of Homework Done Last Night in Grade 5" so anyone can understand what the data represents.</p>
            </div>
        `,
        taskInstructions: "Collect homework minute data from classmates and create a stem-and-leaf plot.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Collect the Data</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Record the homework minutes for yourself and 14 classmates:
                    <div class="answer-space" style="height: 120px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Stem-and-Leaf Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Organize the 15 homework times into a stem-and-leaf plot with a title and key:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Analyze Your Plot</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your plot:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What was the most common homework time (mode)? ____</div>
                        <div>b) What was the median homework time? ____</div>
                        <div>c) What was the range (largest - smallest)? ____</div>
                        <div>d) How many students did 30 minutes or more? ____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask 10 family members how many minutes they spend on social media per day. Create a stem-and-leaf plot and write three observations.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Data Handling",
        subtopic: "Stem-and-Leaf Interpretation",
        lessonContent: `
            <p>Today we'll practice answering questions like "how many" and "what is the most" based on existing stem-and-leaf plots!</p>
            <p><strong>Key Question:</strong> What story does a stem-and-leaf plot tell us about a data set?</p>
            <p><strong>Types of Questions We Can Answer:</strong></p>
            <ol>
                <li><strong>"How many...?"</strong> - Count all the leaves to find the total number of data points</li>
                <li><strong>"What is the most...?"</strong> - Look for the most frequent leaf or the largest value</li>
                <li><strong>"How many are between...?"</strong> - Count leaves within a specific range</li>
                <li><strong>"What is the difference between...?"</strong> - Subtract smallest from largest (range)</li>
            </ol>
            <p><strong>Remember These Tips:</strong></p>
            <ul>
                <li>Always check the key to know what each stem and leaf represents</li>
                <li>List all numbers in order if needed to find median</li>
                <li>Read each row carefully - don't skip any leaves!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> "How Many" Questions</div>
                <p>Count ALL the leaves. If a plot has 5 leaves in row 1, 4 leaves in row 2, and 3 leaves in row 3, there are 5+4+3 = 12 total numbers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> "What is the Most" Questions</div>
                <p>"What is the most common score?" means find the mode. "What is the highest score?" means find the largest number in the plot.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-filter"></i> "How Many Between" Questions</div>
                <p>To find how many numbers are between 20 and 40, look only at stems 2 and 3, and leaves that make numbers 20-39.</p>
            </div>
        `,
        taskInstructions: "Interpret existing stem-and-leaf plots by answering multiple questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Use This Plot to Answer Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> The stem-and-leaf plot below shows the ages (in years) of people at a family reunion:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; font-family: monospace;">
                        Ages at Family Reunion (Key: 1 | 2 means 12 years)<br>
                        0 | 3 5 6 9<br>
                        1 | 0 1 2 2 4 8<br>
                        2 | 0 0 1 5 7<br>
                        3 | 2 4<br>
                        4 | 1<br>
                        5 | 0 3<br>
                        6 | 8<br>
                        7 | 2
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many people were at the reunion? ____</div>
                        <div>b) What is the age of the oldest person? ____</div>
                        <div>c) What is the age of the youngest person? ____</div>
                        <div>d) How many children are under 10 years old? ____</div>
                        <div>e) What is the most common age (mode)? ____</div>
                        <div>f) How many people are between 20 and 29 years old? ____</div>
                        <div>g) How many people are 50 years or older? ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Use This Plot to Answer Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> This plot shows the number of books read by students in a month:
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 10px; font-family: monospace;">
                        Books Read in March (Key: 2 | 3 means 23 books)<br>
                        0 | 8 9<br>
                        1 | 0 2 2 5<br>
                        2 | 0 1 1 1 4<br>
                        3 | 0 0 2 8<br>
                        4 | 1 5<br>
                        5 | 0
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) How many students read books? ____</div>
                        <div>b) What is the median number of books read? ____</div>
                        <div>c) What is the mode? ____</div>
                        <div>d) How many students read more than 30 books? ____</div>
                        <div>e) How many students read between 10 and 19 books? ____</div>
                        <div>f) What is the range? ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Interpretation Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a simple stem-and-leaf plot using 10 numbers. Then write 3 questions that someone could answer using your plot:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one skill about stem-and-leaf plots that you improved this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How could you use stem-and-leaf plots in your daily life?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find or create a set of 20 numbers. Create a stem-and-leaf plot. Then write and answer 5 questions about your plot (include how many, what is the most, range, median, and mode).",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek8);
    console.log("grade5-math-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek8);
    console.log("grade5-math-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek8',
        metadata: grade5MathWeek8.metadata,
        days: grade5MathWeek8
    });
    console.log("grade5-math-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek8 = grade5MathWeek8;
console.log("grade5-math-week8.js loaded and registered successfully");