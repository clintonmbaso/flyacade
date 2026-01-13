// Reception Math - Week 3 Data (Numbers 4-7 Focus)
const receptionMathWeek3 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics",
        week: 3,
        title: "Numbers 4-7",
        description: "Learning numbers 4-7 with counting, writing, and grouping activities"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Introduction to Number 4",
        subtopic: "Counting Four",
        lessonContent: `
            <p>Welcome back to math class! This week we'll learn new numbers. Today we start with number <strong>Four</strong>!</p>
            <p><strong>Key Concept:</strong> Four means we have more than three! Four looks like this: <span class="number-display">4</span></p>
            <p>Let's practice showing four: Show me 4 fingers! You can use one hand or both hands!</p>
            <p><strong>Fun Fact:</strong> A car has 4 wheels, a chair has 4 legs, and a square has 4 sides!</p>
            <p><strong>Counting Tip:</strong> Count: 1, 2, 3, 4! Four comes after three!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Four Items</div>
                <p>Look at these: 🍎 🍎 🍎 🍎</p>
                <p>How many apples? Four! Count them: 1, 2, 3, 4!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 4: <span class="number-display">4</span></p>
                <p>Let's trace it: Draw a line down, then across, then down again!</p>
                <p>It looks like a little chair!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Four Fingers</div>
                <p>Show 4 fingers on one hand (tuck your thumb in!)</p>
                <p>✋ (tuck thumb) = 4 fingers up!</p>
                <p>Count them: 1, 2, 3, 4!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 4. Look for groups of four!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 4 fingers: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 4 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many cats? 🐱 🐱 🐱 🐱 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the group with exactly FOUR items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🐶 🐶 🐶</div>
                    <div>🐭 🐭 🐭 🐭</div>
                    <div>🐹 🐹 🐹 🐹 🐹</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw FOUR circles:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Count the flowers: 🌸 🌸 🌸 🌸 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> What number comes after 3? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Monday Homework: Fantastic Four Finder</strong></p>
                <p>Your mission: Find things that come in fours!</p>
                <ol>
                    <li>Find 2 different things in your house that come in groups of FOUR</li>
                    <li>Draw each group or write what they are</li>
                    <li>Count them out loud: "1, 2, 3, 4!"</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>Four Finder #1:</strong></p>
                    <p>I found FOUR: ___________________________</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Four Finder #2:</strong></p>
                    <p>I found FOUR: ___________________________</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Practice Writing:</strong></p>
                    <p>Write number 4 five times: <span class="answer-space" style="width: 150px;"></span></p>
                </div>
                <p><em>Examples: 4 chair legs, 4 wheels on a toy car, 4 corners of a book</em></p>
            </div>
        `,
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Number 5",
        subtopic: "Counting Five",
        lessonContent: `
            <p>Excellent work with number 4! Today we'll learn number <strong>Five</strong>!</p>
            <p><strong>Key Concept:</strong> Five means a whole hand! Five looks like this: <span class="number-display">5</span></p>
            <p>Let's practice showing five: Show me all 5 fingers on one hand! Count them: 1, 2, 3, 4, 5!</p>
            <p><strong>Special Number:</strong> Five is special because we have 5 fingers on each hand!</p>
            <p><strong>Fun Fact:</strong> A star has 5 points, and we have 5 toes on each foot!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Whole Hand</div>
                <p>Look at your hand: ✋</p>
                <p>Count your fingers: 1, 2, 3, 4, 5! You have 5 fingers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 5: <span class="number-display">5</span></p>
                <p>Let's trace it: Draw a straight line down, curve around, and finish with a hat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Five</div>
                <p>Count these stars: ⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p>1, 2, 3, 4, 5! Five stars!</p>
                <p>Five is one more than four!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 5. Use your whole hand!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 5 fingers (whole hand): <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 5 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many ducks? 🦆 🦆 🦆 🦆 🦆 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the group with exactly FIVE items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🐸 🐸 🐸 🐸</div>
                    <div>🦁 🦁 🦁 🦁 🦁</div>
                    <div>🐯 🐯 🐯</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw FIVE triangles:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Count your fingers on one hand: <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Fill in the missing number: 1, 2, 3, 4, <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">8</span> Which is more: 4 or 5? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Tuesday Homework: Fabulous Five Hunt</strong></p>
                <p>Your mission: Explore the number five!</p>
                <ol>
                    <li>Find 2 different things in your house that come in groups of FIVE</li>
                    <li>Count the fingers on one hand and one foot</li>
                    <li>Draw something that has five parts</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>Five Finder #1:</strong></p>
                    <p>I found FIVE: ___________________________</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    
                    <p><strong>Five Finder #2:</strong></p>
                    <p>I found FIVE: ___________________________</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    
                    <p><strong>Counting Practice:</strong></p>
                    <p>Fingers on one hand: <span class="answer-space"></span></p>
                    <p>Toes on one foot: <span class="answer-space"></span></p>
                    
                    <p><strong>Draw a star</strong> (it has 5 points!):</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Write number 5</strong> five times: <span class="answer-space" style="width: 150px;"></span></p>
                </div>
                <p><em>Examples: 5 toes, 5 petals on a flower drawing, 5 buttons on a remote</em></p>
            </div>
        `,
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Number 6",
        subtopic: "Counting Six",
        lessonContent: `
            <p>Great job with numbers 4 and 5! Today we'll learn number <strong>Six</strong>!</p>
            <p><strong>Key Concept:</strong> Six means we need more than one hand! Six looks like this: <span class="number-display">6</span></p>
            <p>Let's practice showing six: Show me 5 fingers on one hand, then add 1 more from the other hand!</p>
            <p><strong>Counting Strategy:</strong> 6 is 5 + 1! Start with a full hand (5) and add one more!</p>
            <p><strong>Fun Fact:</strong> An insect has 6 legs, and a cube has 6 faces!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Two Hands Counting</div>
                <p>Show 5 fingers on one hand: ✋</p>
                <p>Now add 1 finger from other hand: ✋+☝️</p>
                <p>Total: 6 fingers! 5 + 1 = 6</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 6: <span class="number-display">6</span></p>
                <p>Let's trace it: Start at the top, curve down and around like a circle with a tail!</p>
                <p>It looks like a snail!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Six</div>
                <p>Count these bees: 🐝 🐝 🐝 🐝 🐝 🐝</p>
                <p>1, 2, 3, 4, 5, 6! Six busy bees!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 6. Use both hands to count!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 6 fingers (use both hands): <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 6 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many fish? 🐠 🐠 🐠 🐠 🐠 🐠 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the group with exactly SIX items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🐙 🐙 🐙 🐙 🐙</div>
                    <div>🐬 🐬 🐬 🐬 🐬 🐬</div>
                    <div>🐳 🐳 🐳 🐳</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw SIX squares:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Count using two hands: 5 fingers + 1 finger = <span class="answer-space"></span> fingers
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Fill in the missing number: 4, 5, <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">8</span> Which is more: 5 or 6? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">9</span> Partner activity: Count 6 objects together
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Super Six Search</strong></p>
                <p>Your mission: Discover the number six around you!</p>
                <ol>
                    <li>Find or draw something that has SIX parts</li>
                    <li>Count to six using both hands</li>
                    <li>Practice writing number 6</li>
                    <li>Look for insects (they have 6 legs!)</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>Six Finder:</strong></p>
                    <p>I found/drew something with SIX: ___________________________</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    
                    <p><strong>Hand Counting:</strong></p>
                    <p>5 fingers on one hand + 1 finger on other hand = <span class="answer-space"></span> total</p>
                    <p>Draw your hands showing 6 fingers:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Insect Investigator:</strong></p>
                    <p>Draw an insect with 6 legs:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    
                    <p><strong>Write number 6</strong> six times: <span class="answer-space" style="width: 180px;"></span></p>
                </div>
                <p><em>Examples: 6 sides of a dice, 6 eggs in a carton, 6 legs on a bug drawing</em></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Number 7",
        subtopic: "Counting Seven",
        lessonContent: `
            <p>Wonderful work with numbers 4, 5, and 6! Today we'll learn our last new number this week: <strong>Seven</strong>!</p>
            <p><strong>Key Concept:</strong> Seven is a special number! Seven looks like this: <span class="number-display">7</span></p>
            <p>Let's practice showing seven: Show me 5 fingers on one hand, then add 2 more from the other hand!</p>
            <p><strong>Counting Strategy:</strong> 7 is 5 + 2! Start with a full hand (5) and add two more!</p>
            <p><strong>Fun Fact:</strong> There are 7 days in a week, and a rainbow has 7 colors!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Seven Fingers</div>
                <p>Show 5 fingers on one hand: ✋</p>
                <p>Now add 2 fingers from other hand: ✋+✌️</p>
                <p>Total: 7 fingers! 5 + 2 = 7</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 7: <span class="number-display">7</span></p>
                <p>Let's trace it: Draw a straight line across, then slant down!</p>
                <p>It looks like a slide!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Seven</div>
                <p>Count these butterflies: 🦋 🦋 🦋 🦋 🦋 🦋 🦋</p>
                <p>1, 2, 3, 4, 5, 6, 7! Seven beautiful butterflies!</p>
                <p>Seven comes after six!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 7. You're becoming a counting expert!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 7 fingers (use both hands): <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 7 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many hearts? ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the group with exactly SEVEN items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>⭐ ⭐ ⭐ ⭐ ⭐ ⭐</div>
                    <div>🌙 🌙 🌙 🌙 🌙 🌙 🌙</div>
                    <div>☀️ ☀️ ☀️ ☀️ ☀️</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw SEVEN stars:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Count using two hands: 5 fingers + 2 fingers = <span class="answer-space"></span> fingers
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Fill in the missing numbers: 4, 5, 6, <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">8</span> Which is more: 6 or 7? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">9</span> Name the 7 days of the week:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">10</span> Count all the way: 1, 2, 3, 4, 5, 6, <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Marvelous Seven Mission</strong></p>
                <p>Your mission: Become a seven expert!</p>
                <ol>
                    <li>Find or create a group of SEVEN things</li>
                    <li>Practice counting to seven using both hands</li>
                    <li>Draw something related to the number seven</li>
                    <li>Name all 7 days of the week</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>Seven Collection:</strong></p>
                    <p>Collect SEVEN of something small (like buttons, beans, or crayons):</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>Count them: 1, 2, 3, 4, 5, 6, 7! Total: <span class="answer-space"></span></p>
                    
                    <p><strong>Hand Math:</strong></p>
                    <p>5 fingers + 2 fingers = <span class="answer-space"></span> fingers</p>
                    <p>Draw your hands showing 7 fingers:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Rainbow Artist:</strong></p>
                    <p>Draw a rainbow with 7 colors:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    
                    <p><strong>Days of the Week:</strong></p>
                    <p>There are 7 days in a week. Can you name them?</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>Write number 7</strong> seven times: <span class="answer-space" style="width: 210px;"></span></p>
                </div>
                <p><em>Examples: 7 crayons, 7 buttons, 7 pieces of pasta, 7 days calendar</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Revision",
        subtopic: "Numbers 4-7 Review",
        revisionContent: `
            <p>Congratulations! You've completed Week 3 of Numbers. You can now count from 4 to 7! Let's review what we learned:</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>4 (Four)</strong> - more than three, like 4 wheels on a car</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>5 (Five)</strong> - a whole hand of fingers</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>6 (Six)</strong> - 5 + 1, insects have 6 legs</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>7 (Seven)</strong> - 5 + 2, there are 7 days in a week</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to write numbers 4, 5, 6, 7</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to count objects up to 7</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Using two hands to count past 5</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Counting Tips:</strong></p>
                <p><strong>Use your hands:</strong> One hand = 5, both hands can help you count to 10!</p>
                <p><strong>Say numbers in order:</strong> Practice counting: 4, 5, 6, 7!</p>
                <p><strong>Group objects:</strong> Put things in groups to help count them</p>
                <p><strong>Start from 1:</strong> Always start counting from number 1</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Complete the weekly review:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the numbers from 4 to 7:
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Count the balloons: 🎈 🎈 🎈 🎈 🎈 🎈 🎈 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Show 6 fingers using both hands:
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What number is "a whole hand"? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Draw 5 triangles:
                    <div class="drawing-area" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Circle the biggest number: <span class="number-options">4  5  6  7</span>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Match the numbers to the groups:
                    <div style="margin-top: 10px;">
                        <div>4 = <span class="answer-space" style="width: 100px;"></span> (draw four things)</div>
                        <div>6 = <span class="answer-space" style="width: 100px;"></span> (draw six things)</div>
                        <div>7 = <span class="answer-space" style="width: 100px;"></span> (draw seven things)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Complete the pattern: 4, 5, __, 7
                    <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> How many days in a week? <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Count all the way from 1 to 7!
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Weekend Fun: Numbers 4-7 Challenge</strong></p>
                <p>Practice your new counting skills this weekend!</p>
                <ol>
                    <li><strong>4 Challenge:</strong> Find something with FOUR parts (like a chair with 4 legs)</li>
                    <li><strong>5 Challenge:</strong> Count the fingers on one hand and draw them</li>
                    <li><strong>6 Challenge:</strong> Find or draw an insect with SIX legs</li>
                    <li><strong>7 Challenge:</strong> Name all SEVEN days of the week to your family</li>
                </ol>
                <p><strong>Record Your Weekend Challenge:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>My 4 Find:</strong> I found _________________ (it has four parts!)</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    
                    <p><strong>My 5 Count:</strong> One hand has <span class="answer-space"></span> fingers</p>
                    <p>Draw your hand with 5 fingers:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    
                    <p><strong>My 6 Insect:</strong> Draw an insect with 6 legs:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    
                    <p><strong>My 7 Days:</strong> The 7 days of the week are:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    
                    <p><strong>Writing Practice:</strong> Write numbers 4, 5, 6, 7:</p>
                    <p>4: <span class="answer-space" style="width: 50px;"></span> 5: <span class="answer-space" style="width: 50px;"></span></p>
                    <p>6: <span class="answer-space" style="width: 50px;"></span> 7: <span class="answer-space" style="width: 50px;"></span></p>
                </div>
                <p>Share your number adventures with the class on Monday!</p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathWeek3);
    console.log("receptionMathWeek3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathWeek3);
    console.log("receptionMathWeek3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathWeek3',
        metadata: receptionMathWeek3.metadata,
        days: receptionMathWeek3
    });
    console.log("receptionMathWeek3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathWeek3 = receptionMathWeek3;
console.log("receptionMathWeek3.js loaded and registered successfully");