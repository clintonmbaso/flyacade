// Reception Math - Week 4 Data (Numbers 8-10 Focus)
const receptionMathWeek4 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics",
        week: 4,
        title: "Numbers 8-10",
        description: "Learning numbers 8-10 with counting, writing, and grouping activities"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Number 8",
        subtopic: "Counting to Eight",
        lessonContent: `
            <p>Welcome back to math class! This week we're learning bigger numbers. Today's number is <strong>Eight</strong>!</p>
            <p><strong>Key Concept:</strong> Eight is more than seven! When we have eight of something, we have quite a few items. Eight looks like this: <span class="number-display">8</span></p>
            <p>Let's practice counting to eight: Use your fingers! Count all your fingers on both hands: 1, 2, 3, 4, 5, 6, 7, 8!</p>
            <p><strong>Fun Fact:</strong> An octopus has 8 legs, and a spider has 8 legs too!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Eight Items</div>
                <p>Look at these: 🍎 🍎 🍎 🍎 🍎 🍎 🍎 🍎</p>
                <p>Count them: 1, 2, 3, 4, 5, 6, 7, 8! Eight apples!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 8: <span class="number-display">8</span></p>
                <p>Let's trace it: Make an "S" and then close it at the top! It looks like two circles stacked together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Strategy</div>
                <p>To count 8 items, try grouping them:</p>
                <p>Group of 4: 🍎 🍎 🍎 🍎</p>
                <p>Group of 4: 🍎 🍎 🍎 🍎</p>
                <p>4 + 4 = 8! Eight total!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 8. Remember, 8 looks like two circles!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 8 fingers: <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 8 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many butterflies? 🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Count and circle the group with EIGHT items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐</div>
                    <div>🌈 🌈 🌈 🌈 🌈 🌈 🌈 🌈</div>
                    <div>🌺 🌺 🌺 🌺 🌺</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw EIGHT dots:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> What comes after 7? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Count your fingers on both hands: <span class="answer-space"></span> fingers
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Monday Homework: Eight All Around</strong></p>
                <p>Find or create groups of eight things around your house:</p>
                <ol>
                    <li>Find something that comes in eights (like crayons in a box)</li>
                    <li>Draw eight of something (like eight circles)</li>
                    <li>Count to eight using something small (like beans or buttons)</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. I found 8 _________________</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p>2. Draw 8 of something:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>3. Practice writing number 8:</p>
                    <p style="font-size: 24px;">8 8 8 8 8</p>
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
                <p>Bring your findings to class tomorrow!</p>
            </div>
        `,
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Number 9",
        subtopic: "Counting to Nine",
        lessonContent: `
            <p>Great job with number 8! Today we'll learn about number <strong>Nine</strong> - that's one more than eight!</p>
            <p><strong>Key Concept:</strong> Nine is almost ten! When we have nine of something, we have almost a full set. Nine looks like this: <span class="number-display">9</span></p>
            <p>Let's practice: Count your fingers - all 10! Now put one finger down. How many are up? Nine!</p>
            <p><strong>Fun Fact:</strong> A baseball team has 9 players, and a cat has 9 lives in stories!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Nine Items</div>
                <p>Look at these: 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟</p>
                <p>Count them slowly: 1, 2, 3, 4, 5, 6, 7, 8, 9! Nine fish!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 9: <span class="number-display">9</span></p>
                <p>Let's trace it: Start at the top, make a circle, then draw a straight line down!</p>
                <p>Tip: Number 9 looks like a balloon with a string!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Strategy</div>
                <p>To count 9 items, try this:</p>
                <p>Group of 5: 🍪 🍪 🍪 🍪 🍪</p>
                <p>Group of 4: 🍪 🍪 🍪 🍪</p>
                <p>5 + 4 = 9! Nine cookies!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 9. Remember, 9 looks like a balloon!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 9 fingers (all but one): <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 9 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many flowers? 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Count and circle the group with NINE items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🐦 🐦 🐦 🐦 🐦 🐦 🐦 🐦</div>
                    <div>🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝</div>
                    <div>🐛 🐛 🐛 🐛 🐛 🐛 🐛</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw NINE stars:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> What comes after 8? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> How many fingers if you put one down? <span class="answer-space"></span> fingers
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Tuesday Homework: Nine is Fine!</strong></p>
                <p>Practice finding and making groups of nine:</p>
                <ol>
                    <li>Find something you have exactly 9 of</li>
                    <li>Draw a picture with 9 items in it</li>
                    <li>Practice writing number 9 neatly</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. I have 9 _________________ at home</p>
                    <div class="drawing-area" style="height: 60px;"></div>
                    <p>2. Draw a picture with exactly 9 items:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <p>3. Write number 9 five times:</p>
                    <div style="font-size: 24px; text-align: center; margin: 10px 0;">
                        <span style="margin: 0 10px;">9</span>
                        <span style="margin: 0 10px;">9</span>
                        <span style="margin: 0 10px;">9</span>
                        <span style="margin: 0 10px;">9</span>
                        <span style="margin: 0 10px;">9</span>
                    </div>
                    <div class="drawing-area" style="height: 40px;"></div>
                </div>
                <p><strong>Challenge:</strong> Can you count backwards from 9 to 1?</p>
            </div>
        `,
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Number 10",
        subtopic: "Counting to Ten",
        lessonContent: `
            <p>Excellent work with numbers 8 and 9! Today we reach a very special number: <strong>Ten</strong>!</p>
            <p><strong>Key Concept:</strong> Ten is a special number! It's a full set of fingers, a complete group. Ten looks like this: <span class="number-display">10</span></p>
            <p>Notice: Ten is written with two digits: 1 and 0. The 1 comes first, then 0!</p>
            <p><strong>Fun Fact:</strong> You have 10 fingers and 10 toes! Ten is a perfect number for counting!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Ten Items</div>
                <p>Look at these: 🐼 🐼 🐼 🐼 🐼 🐼 🐼 🐼 🐼 🐼</p>
                <p>Count them: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! Ten pandas!</p>
                <p>That's a lot to count! Take your time.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>This is number 10: <span class="number-display">10</span></p>
                <p>Let's write it: First write number 1, then write number 0 right next to it!</p>
                <p>Tip: Ten is like saying "one-zero"!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Strategy</div>
                <p>To count 10 items easily:</p>
                <p>Group of 5: 🔴 🔴 🔴 🔴 🔴</p>
                <p>Group of 5: 🔴 🔴 🔴 🔴 🔴</p>
                <p>5 + 5 = 10! Ten circles!</p>
            </div>
        `,
        taskInstructions: "Practice recognizing, counting, and writing number 10. Remember, 10 has two digits!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show me 10 fingers (all fingers up): <span class="answer-space"></span>
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Trace number 10 three times:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> How many balloons? 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Count and circle the group with TEN items:
                <div style="display: flex; gap: 20px; margin-top: 10px;">
                    <div>🍦 🍦 🍦 🍦 🍦 🍦 🍦 🍦 🍦</div>
                    <div>🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭</div>
                    <div>🍬 🍬 🍬 🍬 🍬 🍬 🍬 🍬</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Draw TEN hearts:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> What comes after 9? <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Count all your fingers and toes: <span class="answer-space"></span> total
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Perfect Ten</strong></p>
                <p>Celebrate reaching number 10! Complete these activities:</p>
                <ol>
                    <li>Find 10 of something small (like coins or beads)</li>
                    <li>Make a collection of 10 things from nature</li>
                    <li>Practice counting to 10 out loud three times</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p>1. My collection of 10 things:</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>2. Write the numbers from 1 to 10:</p>
                    <div style="font-size: 18px; margin: 10px 0;">
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <br>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                        <span class="answer-space" style="width: 30px;"></span>
                    </div>
                    <p>3. Draw a picture showing 10 of something:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <p><strong>Super Challenge:</strong> Can you count to 10 in a different language?</p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Numbers 8-10 Review",
        subtopic: "All Together Now",
        lessonContent: `
            <p>Wow! You've learned numbers 8, 9, and 10! Today we'll review them all together.</p>
            <p><strong>Key Concept:</strong> Numbers 8, 9, and 10 are bigger numbers that need careful counting!</p>
            <p>Let's remember:</p>
            <ul>
                <li><strong>8</strong> - Looks like two circles: <span class="number-display">8</span></li>
                <li><strong>9</strong> - Looks like a balloon: <span class="number-display">9</span></li>
                <li><strong>10</strong> - Has two digits: <span class="number-display">10</span> (1 and 0)</li>
            </ul>
            <p><strong>Counting Tip:</strong> When counting big groups, point to each item and say the number clearly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Comparing Numbers</div>
                <p>Look at these groups:</p>
                <p>8 stars: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p>9 stars: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p>10 stars: ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p>See how each group gets one more star?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing Review</div>
                <p>Let's write them together:</p>
                <p>8: <span class="number-display">8</span> (like an "S" closed at top)</p>
                <p>9: <span class="number-display">9</span> (circle with a line down)</p>
                <p>10: <span class="number-display">10</span> (1 then 0)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Counting Strategy</div>
                <p>For big numbers, try grouping:</p>
                <p>Count by twos: 2, 4, 6, 8, 10!</p>
                <p>Count by fives: 5, 10!</p>
                <p>This makes counting faster!</p>
            </div>
        `,
        taskInstructions: "Review numbers 8, 9, and 10. Practice writing, counting, and identifying each number.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write the numbers 8, 9, 10:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Count the bees: 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Count the ladybugs: 🐞 🐞 🐞 🐞 🐞 🐞 🐞 🐞 🐞 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Count the ants: 🐜 🐜 🐜 🐜 🐜 🐜 🐜 🐜 🐜 🐜 = <span class="answer-space"></span>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Circle the correct number for each group:
                <div style="margin-top: 10px;">
                    <div>🍒 🍒 🍒 🍒 🍒 🍒 🍒 🍒 = <span class="number-options">7 8 9 10</span></div>
                    <div>🍉 🍉 🍉 🍉 🍉 🍉 🍉 🍉 🍉 = <span class="number-options">8 9 10 11</span></div>
                    <div>🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 🍇 = <span class="number-options">8 9 10 12</span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Draw 8 circles, 9 squares, and 10 triangles:
                <div class="drawing-area" style="height: 120px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Fill in the blanks: 7, ____, ____, 10
                <div class="answer-space" style="width: 100px; display: inline-block;"></div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Numbers 8-10 Mastery</strong></p>
                <p>Show what you've learned about numbers 8, 9, and 10:</p>
                <ol>
                    <li>Create a poster showing numbers 8, 9, and 10 with pictures</li>
                    <li>Practice writing each number 5 times</li>
                    <li>Find examples of each number in your home</li>
                </ol>
                <p><strong>Homework Sheet:</strong></p>
                <div style="border: 1px dashed #ccc; padding: 10px; margin: 10px 0;">
                    <p><strong>My Number Poster:</strong></p>
                    <p>Number 8: Draw 8 things</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>Number 9: Draw 9 things</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p>Number 10: Draw 10 things</p>
                    <div class="drawing-area" style="height: 80px;"></div>
                    <p><strong>Writing Practice:</strong></p>
                    <p>8: <span class="answer-space" style="width: 200px;"></span></p>
                    <p>9: <span class="answer-space" style="width: 200px;"></span></p>
                    <p>10: <span class="answer-space" style="width: 200px;"></span></p>
                </div>
                <p><strong>Bonus:</strong> Teach someone at home to count to 10!</p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Celebration",
        subtitle: "Congratulations on Learning 8-10!",
        revisionContent: `
            <p>🎉 CONGRATULATIONS! 🎉 You've learned numbers 8, 9, and 10! That means you can now count all the way from 0 to 10!</p>
            <div class="content-box">
                <p><strong>This week we learned:</strong></p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>8 (Eight)</strong> - Two circles together, like an octopus's legs</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>9 (Nine)</strong> - A circle with a line, like a balloon</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> <strong>10 (Ten)</strong> - Two digits: 1 and 0, a complete set</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to write numbers 8, 9, 10 correctly</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> How to count objects up to 10</li>
                    <li><i class="fas fa-check-circle" style="color: var(--success);"></i> Grouping strategies for counting big numbers</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Counting Celebration:</strong></p>
                <p>Say it with me: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!"</p>
                <p>You did it! You can count to ten!</p>
                <p><strong>Remember:</strong> Counting takes practice. Keep counting everything around you!</p>
            </div>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Final Celebration Challenge:</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write the numbers from 0 to 10:
                    <div class="drawing-area" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Count the party hats: 🎩 🎩 🎩 🎩 🎩 🎩 🎩 🎩 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Count the balloons: 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 🎈 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Count the cakes: 🍰 🍰 🍰 🍰 🍰 🍰 🍰 🍰 🍰 🍰 = <span class="answer-space"></span>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Match numbers to words:
                    <div style="margin-top: 10px;">
                        <div>8 = <span class="answer-space" style="width: 100px;"></span> (Eight)</div>
                        <div>9 = <span class="answer-space" style="width: 100px;"></span> (Nine)</div>
                        <div>10 = <span class="answer-space" style="width: 100px;"></span> (Ten)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a celebration with 10 items:
                    <div class="drawing-area" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What is your favorite number from 0-10? <span class="answer-space"></span>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Weekend Celebration: Count to Ten Challenge</strong></p>
                <p>You've earned a celebration! This weekend, have fun with numbers:</p>
                <ol>
                    <li><strong>Counting Game:</strong> Count to 10 with a family member</li>
                    <li><strong>Number Art:</strong> Create artwork using the numbers 8, 9, 10</li>
                    <li><strong>Real World Counting:</strong> Count something in your house (stairs, windows, etc.)</li>
                    <li><strong>Number Story:</strong> Make up a story about numbers 8, 9, and 10</li>
                </ol>
                <p><strong>Celebration Certificate:</strong></p>
                <div style="border: 2px solid gold; padding: 15px; margin: 10px 0; text-align: center; background-color: #fffacd;">
                    <h3 style="color: #ff6b00;">🎓 COUNTING CHAMPION 🎓</h3>
                    <p>This certificate is awarded to:</p>
                    <div style="border-bottom: 1px dashed #000; margin: 10px 50px; padding: 5px;">[Your Name Here]</div>
                    <p>For successfully learning to count from 0 to 10!</p>
                    <p><strong>You are a math superstar! 🌟</strong></p>
                    <p>Date: _______________</p>
                    <p>Signed: _______________ (Parent/Guardian)</p>
                </div>
                <p>Bring your certificate to class on Monday for a special sticker!</p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathWeek4);
    console.log("receptionMathWeek4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathWeek4);
    console.log("receptionMathWeek4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathWeek4',
        metadata: receptionMathWeek4.metadata,
        days: receptionMathWeek4
    });
    console.log("receptionMathWeek4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathWeek4 = receptionMathWeek4;
console.log("receptionMathWeek4.js loaded and registered successfully");