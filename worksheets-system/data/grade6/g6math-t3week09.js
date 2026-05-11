// Grade 6 Mathematics - Term 3 Week 9 Data
const grade6MathWeek9 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 9,
        title: "Mastering the Average (The Mean)",
        description: "Understanding the concept of fair share, calculating the mean, applying to real-world data, working backward, and combining with range and tally"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Statistics & Data",
        subtopic: "The Concept of 'Fair Share'",
        lessonContent: `
            <p>Welcome to our exploration of averages! Today we'll learn what the "mean" (average) really means.</p>
            <p><strong>Key Question:</strong> How can we make things fair when groups have different amounts?</p>
            <p><strong>The Hook - A Fair Share Problem:</strong></p>
            <p>Imagine one student has 10 candies and another student has only 2 candies. That doesn't seem fair, does it?</p>
            <p><strong>What is the Average (Mean)?</strong></p>
            <p>The average is the number that represents a "fair share" for everyone. It's what you get when you:</p>
            <ol>
                <li>Put everything together (find the total)</li>
                <li>Share it equally among everyone (divide equally)</li>
            </ol>
            <p><strong>Our Candy Example:</strong></p>
            <ul>
                <li>Step 1 - Put together: 10 candies + 2 candies = 12 candies total</li>
                <li>Step 2 - Share equally: 12 candies ÷ 2 people = 6 candies each</li>
                <li><strong>The average is 6 candies per person!</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Block Stacks</div>
                <p>One stack has 8 blocks, another has 4 blocks. Move blocks from the tall stack to the short stack until both are level. The level height (6 blocks) is the average!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Classroom Example</div>
                <p>Three students scored: 5 points, 7 points, and 9 points. Total = 21 points. 21 ÷ 3 = 7 average. Everyone gets a "fair share" of 7 points!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> The Leveling Idea</div>
                <p>The average is the "leveling point" - if every number were the same, that's what they would all be. It's the number that balances the group!</p>
            </div>
        `,
        taskInstructions: "Use block stacks and fair share problems to understand the mean as an equal distribution.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Block Stack Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw three stacks of blocks with the following heights: Stack A = 10 blocks, Stack B = 4 blocks, Stack C = 7 blocks
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> If you move blocks to make all stacks equal (fair share), how many blocks will each stack have? Show your work:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fair Share Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find the average by "putting together and sharing equally":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 6 and 10 → Total: ___ ÷ 2 = ___ average</div>
                        <div>B. 3, 5, and 7 → Total: ___ ÷ 3 = ___ average</div>
                        <div>C. 12, 8, and 4 → Total: ___ ÷ 3 = ___ average</div>
                        <div>D. 15, 20, 25, and 40 → Total: ___ ÷ 4 = ___ average</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> In your own words, explain what the "average" means. Why is it called a "fair share"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different stacks of objects at home (books, spoons, coins). Count each stack. Find the total and calculate the average fair share amount for each stack.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Statistics & Data",
        subtopic: "Calculating the Mean",
        lessonContent: `
            <p>Today we'll learn the formal method for calculating the mean (average) of a data set!</p>
            <p><strong>The 3-Step Formula for Finding the Mean:</strong></p>
            <ol>
                <li><strong>SUM:</strong> Add all the numbers together</li>
                <li><strong>COUNT:</strong> Count how many numbers are in the list</li>
                <li><strong>DIVIDE:</strong> Divide the Sum by the Count</li>
            </ol>
            <p><strong>Memory Tool:</strong> S.C.D. - Sum, Count, Divide!</p>
            <p><strong>Example:</strong> Find the average of 10, 20, and 30</p>
            <ul>
                <li>Step 1 - SUM: 10 + 20 + 30 = 60</li>
                <li>Step 2 - COUNT: There are 3 numbers</li>
                <li>Step 3 - DIVIDE: 60 ÷ 3 = 20</li>
                <li><strong>Answer: The mean is 20</strong></li>
            </ul>
            <p><strong>Formula to Remember:</strong> Mean = Sum of all values ÷ Number of values</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Step-by-Step</div>
                <p>Find the average of 4, 8, and 12.<br>
                Sum = 4+8+12 = 24<br>
                Count = 3<br>
                24 ÷ 3 = 8 average</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Larger Data Set</div>
                <p>Find the average: 5, 10, 15, 20, 25<br>
                Sum = 75<br>
                Count = 5<br>
                75 ÷ 5 = 15 average</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Why It Works</div>
                <p>Dividing the total sum by the count essentially "spreads" the total evenly across all items - exactly like sharing cookies equally among friends!</p>
            </div>
        `,
        taskInstructions: "Practice using the Sum-Count-Divide method to calculate means of various data sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Guided Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the mean for each set using the 3-step S.C.D. method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 2, 4, 6, 8</div>
                        <div>Sum: ___ + ___ + ___ + ___ = ___</div>
                        <div>Count: ___</div>
                        <div>Divide: ___ ÷ ___ = <strong>___</strong></div>
                        <div class="answer-space" style="height: 10px;"></div>
                        
                        <div style="margin-top: 15px;">B. 12, 15, 18</div>
                        <div>Sum: ___ + ___ + ___ = ___</div>
                        <div>Count: ___</div>
                        <div>Divide: ___ ÷ ___ = <strong>___</strong></div>
                        <div class="answer-space" style="height: 10px;"></div>
                        
                        <div style="margin-top: 15px;">C. 25, 35, 45, 55</div>
                        <div>Sum: ___ + ___ + ___ + ___ = ___</div>
                        <div>Count: ___</div>
                        <div>Divide: ___ ÷ ___ = <strong>___</strong></div>
                        <div class="answer-space" style="height: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Independent Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find the mean for each data set. Show your SUM, COUNT, and DIVIDE steps:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 7, 9, 11, 13, 15</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>B. 100, 200, 300</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>C. 3, 7, 5, 9, 11, 13</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Maria scored 85, 90, and 95 on three math tests. What is her average score?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A runner completed 5 races with times: 12, 14, 11, 13, and 15 minutes. What is the average race time?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find the average of 5 different numbers (between 1-100) that you choose. Write down each step - Sum, Count, Divide.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Statistics & Data",
        subtopic: "Average in Sports & Weather",
        lessonContent: `
            <p>Today we'll see how averages help us understand real-world data in sports, weather, and daily life!</p>
            <p><strong>Why Are Averages Useful?</strong></p>
            <ul>
                <li>They help us compare performance (sports averages)</li>
                <li>They show typical conditions (weather averages)</li>
                <li>They help us make predictions and decisions</li>
            </ul>
            <p><strong>Sports Example - Basketball:</strong></p>
            <p>A player scores 12 points, 18 points, and 15 points in three games. What is their average per game?</p>
            <ul>
                <li>Sum: 12 + 18 + 15 = 45 points</li>
                <li>Count: 3 games</li>
                <li>Divide: 45 ÷ 3 = <strong>15 points per game average</strong></li>
            </ul>
            <p><strong>Weather Example - Temperature:</strong></p>
            <p>Daily temperatures for 5 days: 22°C, 24°C, 26°C, 23°C, 25°C</p>
            <ul>
                <li>Sum: 22+24+26+23+25 = 120°C</li>
                <li>Count: 5 days</li>
                <li>Divide: 120 ÷ 5 = <strong>24°C average temperature</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-basketball-ball"></i> Basketball Stats</div>
                <p>LeBron James averages 27.2 points per game over his career. That means over thousands of games, his average is about 27 points per game!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Climate Averages</div>
                <p>Meteorologists use 30 years of temperature data to calculate "normal" monthly average temperatures for a city.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-swimmer"></i> Swimming Times</div>
                <p>If a swimmer's lap times are 32.5s, 33.1s, and 32.8s, the average (32.8s) gives a better measure of typical performance than any single lap.</p>
            </div>
        `,
        taskInstructions: "Apply mean calculations to sports statistics and weather data, including decimal numbers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sports Averages</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Basketball: A player scored 24, 31, and 28 points in three games. Calculate their average points per game:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Soccer: A team scored: 2 goals, 1 goal, 4 goals, 0 goals, 3 goals in five matches. Find the average goals per match:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Baseball: A player's hits in 4 games: 3, 0, 2, 3. What is the average hits per game?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weather Averages</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A week of temperatures: Monday 28°C, Tuesday 30°C, Wednesday 29°C, Thursday 31°C, Friday 27°C. Find the average temperature:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Rainfall (in mm) for 6 months: 45, 52, 48, 55, 50, 44. Calculate the average monthly rainfall:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Decimals and Real Data</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A runner's 400m times: 58.3s, 59.1s, 57.8s, 60.0s. Find the average time (round to 1 decimal place):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Track daily high temperatures for your area for 5 days. Estimate or research the temperatures, then calculate the average:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Record the temperature at the same time each day for 5 days. Calculate the average temperature for those 5 days.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Statistics & Data",
        subtopic: "Working Backward from the Mean",
        lessonContent: `
            <p>Today we'll become detectives! We'll learn how to find a missing number when we already know the average.</p>
            <p><strong>Key Question:</strong> If I know the average and some of the numbers, how can I find the missing number?</p>
            <p><strong>The Backward Method:</strong></p>
            <ol>
                <li><strong>Find the TOTAL needed:</strong> Average × Number of items = Total Sum</li>
                <li><strong>Add what you know:</strong> Add all the given numbers together</li>
                <li><strong>Find the missing number:</strong> Total needed - Sum of known numbers = Missing number</li>
            </ol>
            <p><strong>Example:</strong> The average of three numbers is 10. Two numbers are 8 and 12. What is the third number?</p>
            <ul>
                <li>Step 1 - Total needed: 10 × 3 = 30</li>
                <li>Step 2 - Known sum: 8 + 12 = 20</li>
                <li>Step 3 - Missing number: 30 - 20 = <strong>10</strong></li>
            </ul>
            <p><strong>Check:</strong> 8 + 12 + 10 = 30, and 30 ÷ 3 = 10 ✓</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Detective Work</div>
                <p>The average of 4 test scores is 85. Three scores are 80, 90, and 82. Find the 4th score.</p>
                <p>Total needed: 85×4=340. Known: 80+90+82=252. Missing: 340-252=88</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt"></i> Check Your Work</div>
                <p>Always check by recalculating the average with your missing number! (80+90+82+88)÷4=340÷4=85 ✓</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-graduation-cap"></i> Grade Problem</div>
                <p>A student needs an average of 90 on four tests to get an A. After three tests, their average is 88. What must they score on the 4th test?</p>
                <p>Total needed: 90×4=360. Known total: 88×3=264. Needed: 360-264=96.</p>
            </div>
        `,
        taskInstructions: "Solve for missing values when the average is already known using the backward method.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Guided Backward Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> The average of 4 numbers is 15. Three numbers are 10, 20, and 14. Find the fourth number:
                    <div>Total needed: ___ × ___ = ___</div>
                    <div>Known sum: ___ + ___ + ___ = ___</div>
                    <div>Missing number: ___ - ___ = <strong>___</strong></div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> The average of 5 numbers is 24. Four numbers are 18, 22, 30, and 26. Find the fifth number:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Independent Backward Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Average of 3 numbers is 20. Two numbers are 15 and 25. Find the third:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Average of 4 test scores is 78. Three scores are 70, 85, and 75. Find the fourth:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Over 5 games, a soccer player's average goals is 2.4. She scored 1, 3, 2, and 4 goals in four games. How many did she score in the fifth game?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> The average height of 4 students is 150 cm. Three students are 145 cm, 152 cm, and 148 cm tall. How tall is the fourth student?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> A student wants an average of 85 across 4 quizzes. Their first three quiz scores are 80, 88, and 82. What score is needed on the fourth quiz?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own 'find the missing number' average problem. Give it to a family member to solve, and check their answer.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Statistics & Data",
        subtopic: "The Data Finale - Combining Tally, Range, and Average",
        lessonContent: `
            <p>Today we'll combine everything we've learned! We'll collect data, tally results, find the range, and calculate the average!</p>
            <p><strong>Statistics Vocabulary Review:</strong></p>
            <ul>
                <li><strong>Tally:</strong> A counting method using marks (|||| = 4)</li>
                <li><strong>Total:</strong> The sum of all values</li>
                <li><strong>Average (Mean):</strong> Total ÷ Number of items</li>
                <li><strong>Range:</strong> Largest value - Smallest value</li>
            </ul>
            <p><strong>The Difference Between Total and Average:</strong></p>
            <ul>
                <li><strong>Total</strong> asks: "How much altogether?"</li>
                <li><strong>Average</strong> asks: "What is the typical amount?"</li>
            </ul>
            <p><strong>Example:</strong> If 4 friends have 5, 7, 8, and 12 candies:</p>
            <ul>
                <li>Total candies = 32 (how many altogether)</li>
                <li>Average candies = 8 (typical friend has 8)</li>
                <li>Range = 12 - 5 = 7 (difference between most and least)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Reaction Time Test</div>
                <p>Drop a ruler between a friend's fingers. The number on the ruler where they catch it is their reaction distance. Collect data from 10 classmates!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Pictograph Creation</div>
                <p>Create a pictograph where each symbol (like 🤚) represents 1 cm of reaction distance. This makes your data visual and easy to understand!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Total vs. Average</div>
                <p>Total tells you the combined performance (team total points). Average tells you typical individual performance (points per player). Both are useful!</p>
            </div>
        `,
        taskInstructions: "Conduct a reaction time test, tally results, create a pictograph, then find the range and average.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Data Collection - Reaction Time Test</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Test 10 classmates (or family members) by dropping a ruler. Record the measurement (in cm) where they catch it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Person 1: ___ cm &nbsp;&nbsp;&nbsp; Person 6: ___ cm</div>
                        <div>Person 2: ___ cm &nbsp;&nbsp;&nbsp; Person 7: ___ cm</div>
                        <div>Person 3: ___ cm &nbsp;&nbsp;&nbsp; Person 8: ___ cm</div>
                        <div>Person 4: ___ cm &nbsp;&nbsp;&nbsp; Person 9: ___ cm</div>
                        <div>Person 5: ___ cm &nbsp;&nbsp;&nbsp; Person 10: ___ cm</div>
                    </div>
                    <div class="answer-space" style="height: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tally and Pictograph</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a tally chart of your reaction time results:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Create a pictograph using a symbol of your choice (e.g., ✋ = 1 cm):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Calculate Range and Average</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find the RANGE of your data (largest - smallest):
                    <div>Largest measurement: ___ cm</div>
                    <div>Smallest measurement: ___ cm</div>
                    <div>Range = ___ - ___ = <strong>___ cm</strong></div>
                    <div class="answer-space" style="height: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Find the AVERAGE reaction time:
                    <div>Sum of all measurements: ___ + ___ + ___ + ___ + ___ + ___ + ___ + ___ + ___ + ___ = ___ cm</div>
                    <div>Number of people: ___</div>
                    <div>Average = ___ ÷ ___ = <strong>___ cm</strong></div>
                    <div class="answer-space" style="height: 20px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Final Review - Total vs. Average</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Explain the difference between TOTAL and AVERAGE in your own words:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> If a coach wants to know how many points the whole team scored, should they use total or average? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> If a coach wants to know how many points a typical player scores, should they use total or average? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> What was the most interesting thing you learned about averages this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of averages including: the 3-step formula (S.C.D.), one real-world example, the difference between total and average, and how to work backward to find a missing number.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek9);
    console.log("grade6-math-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek9);
    console.log("grade6-math-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek9',
        metadata: grade6MathWeek9.metadata,
        days: grade6MathWeek9
    });
    console.log("grade6-math-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek9 = grade6MathWeek9;
console.log("grade6-math-week9.js loaded and registered successfully");