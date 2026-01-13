// Reception Math - Week 5 Data (Numbers 0-10 Review)
const receptionMathWeek5 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics",
        week: 5,
        title: "Numbers 0-10 Review",
        description: "Comprehensive review of numbers 0-10 with identification, writing, and counting practice"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Numbers 0-5 Review",
        subtopic: "Zero Through Five",
        lessonContent: `
            <p>Welcome to our review week! Let's practice numbers 0 through 5. Remember, practice makes perfect!</p>
            <p><strong>Today's Focus:</strong> Numbers 0, 1, 2, 3, 4, and 5</p>
            <div class="content-box">
                <p><strong>Quick Reminders:</strong></p>
                <ul>
                    <li><span class="number-display">0</span> = Zero = Nothing/Empty</li>
                    <li><span class="number-display">1</span> = One = Single item</li>
                    <li><span class="number-display">2</span> = Two = A pair</li>
                    <li><span class="number-display">3</span> = Three = Small group</li>
                    <li><span class="number-display">4</span> = Four = One more than three</li>
                    <li><span class="number-display">5</span> = Five = A whole hand!</li>
                </ul>
            </div>
            <p>Let's count together: <strong>0, 1, 2, 3, 4, 5!</strong></p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Number Line</div>
                <p>Number line from 0 to 5:</p>
                <div class="number-line" style="display: flex; justify-content: space-between; padding: 10px; border: 1px solid #ddd;">
                    <span class="number-display">0</span>
                    <span class="number-display">1</span>
                    <span class="number-display">2</span>
                    <span class="number-display">3</span>
                    <span class="number-display">4</span>
                    <span class="number-display">5</span>
                </div>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Counting Fingers</div>
                <p>Show numbers with your fingers:</p>
                <p>0 = No fingers<br>
                1 = 1 finger<br>
                2 = 2 fingers<br>
                3 = 3 fingers<br>
                4 = 4 fingers<br>
                5 = Whole hand!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Writing Practice</div>
                <p>Trace each number:</p>
                <div style="display: flex; gap: 10px; font-size: 24px;">
                    <span class="number-display">0</span>
                    <span class="number-display">1</span>
                    <span class="number-display">2</span>
                    <span class="number-display">3</span>
                    <span class="number-display">4</span>
                    <span class="number-display">5</span>
                </div>
            </div>
        `,
        taskInstructions: "Practice identifying, counting, and writing numbers 0 through 5.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write numbers 0 to 5 in order:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Count and write:
                <div style="margin-top: 10px;">
                    <div>🐱 🐱 🐱 = <span class="answer-space"></span></div>
                    <div>🍎 🍎 🍎 🍎 = <span class="answer-space"></span></div>
                    <div>⭐ ⭐ ⭐ ⭐ ⭐ = <span class="answer-space"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the number 4:
                <div style="display: flex; gap: 20px; margin-top: 10px; font-size: 20px;">
                    <span>2</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>1</span>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match number to picture:
                <div style="margin-top: 10px;">
                    <div>3 = <span style="margin: 0 10px;">🍦 🍦 🍦</span> (circle)</div>
                    <div>0 = <span style="margin: 0 10px;">(empty box)</span> (circle)</div>
                    <div>5 = <span style="margin: 0 10px;">✋</span> (circle)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show these numbers with your fingers:
                <div style="margin-top: 10px;">
                    <div>2 = <span class="answer-space"></span> (draw)</div>
                    <div>5 = <span class="answer-space"></span> (draw)</div>
                    <div>0 = <span class="answer-space"></span> (draw)</div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Monday Homework: Review Test Part 1 (0-5)</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Name:</strong> _________________</p>
                    <p><strong>Date:</strong> _________________</p>
                    
                    <div class="task-item">
                        <span class="task-number">1</span> Write numbers 0-5 in order:
                        <div style="display: flex; gap: 5px; margin-top: 5px;">
                            <span class="answer-space" style="width: 30px;"></span>
                            <span class="answer-space" style="width: 30px;"></span>
                            <span class="answer-space" style="width: 30px;"></span>
                            <span class="answer-space" style="width: 30px;"></span>
                            <span class="answer-space" style="width: 30px;"></span>
                            <span class="answer-space" style="width: 30px;"></span>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">2</span> Count and write the number:
                        <div style="margin-top: 10px;">
                            <div>🐶 🐶 🐶 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🎈 🎈 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🍪 🍪 🍪 🍪 🍪 = <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">3</span> Draw the correct number of items:
                        <div style="margin-top: 10px;">
                            <div>Number 4: <div class="drawing-area" style="height: 40px;"></div></div>
                            <div>Number 1: <div class="drawing-area" style="height: 40px;"></div></div>
                            <div>Number 0: <div class="drawing-area" style="height: 40px;"></div></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">4</span> Circle all the number 3s:
                        <div style="display: flex; gap: 10px; margin-top: 10px; font-size: 20px;">
                            <span>1</span>
                            <span>3</span>
                            <span>5</span>
                            <span>3</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">5</span> What comes next?
                        <div style="margin-top: 10px;">
                            <div>0, 1, 2, <span class="answer-space" style="width: 30px;"></span></div>
                            <div>3, 4, <span class="answer-space" style="width: 30px;"></span></div>
                            <div>2, 3, <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                </div>
                <p><em>Parents: Please check that your child can identify and count numbers 0-5.</em></p>
            </div>
        `,
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Numbers 6-8 Review",
        subtopic: "Six, Seven, Eight",
        lessonContent: `
            <p>Great work yesterday! Today we'll review numbers 6, 7, and 8.</p>
            <p><strong>Today's Focus:</strong> Numbers 6, 7, and 8</p>
            <div class="content-box">
                <p><strong>Quick Reminders:</strong></p>
                <ul>
                    <li><span class="number-display">6</span> = Six = Five plus one more</li>
                    <li><span class="number-display">7</span> = Seven = One more than six</li>
                    <li><span class="number-display">8</span> = Eight = Two groups of four</li>
                </ul>
            </div>
            <p>Let's count together: <strong>0, 1, 2, 3, 4, 5, 6, 7, 8!</strong></p>
            <p><strong>Hand Trick:</strong> For 6, show one hand (5) + 1 finger. For 7, show one hand + 2 fingers. For 8, show one hand + 3 fingers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Counting Groups</div>
                <p>Count these groups:</p>
                <p>6 dots: ⚫⚫⚫⚫⚫⚫</p>
                <p>7 stars: ★★★★★★★</p>
                <p>8 hearts: ❤️❤️❤️❤️❤️❤️❤️❤️</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Writing</div>
                <p>Practice writing:</p>
                <div style="display: flex; gap: 10px; font-size: 24px;">
                    <span class="number-display">6</span>
                    <span class="number-display">7</span>
                    <span class="number-display">8</span>
                </div>
                <p>Tip: 6 looks like a circle with a line, 7 is a straight line with a hat, 8 looks like two circles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Comparing Numbers</div>
                <p>Which is more?</p>
                <p>6 or 8? <strong>8 is more!</strong></p>
                <p>7 or 5? <strong>7 is more!</strong></p>
                <p>6 or 6? <strong>They are equal!</strong></p>
            </div>
        `,
        taskInstructions: "Practice identifying, counting, and writing numbers 6, 7, and 8.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write numbers 6, 7, and 8:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Count and write:
                <div style="margin-top: 10px;">
                    <div>🐝 🐝 🐝 🐝 🐝 🐝 = <span class="answer-space"></span></div>
                    <div>🌸 🌸 🌸 🌸 🌸 🌸 🌸 = <span class="answer-space"></span></div>
                    <div>🦋 🦋 🦋 🦋 🦋 🦋 🦋 🦋 = <span class="answer-space"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the number 7:
                <div style="display: flex; gap: 20px; margin-top: 10px; font-size: 20px;">
                    <span>6</span>
                    <span>8</span>
                    <span>7</span>
                    <span>5</span>
                    <span>9</span>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw the correct number:
                <div style="margin-top: 10px;">
                    <div>Draw 6 circles: <div class="drawing-area" style="height: 40px;"></div></div>
                    <div>Draw 8 squares: <div class="drawing-area" style="height: 40px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show with your fingers:
                <div style="margin-top: 10px;">
                    <div>6 fingers = <span class="answer-space"></span> (draw or describe)</div>
                    <div>8 fingers = <span class="answer-space"></span> (draw or describe)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> What comes after?
                <div style="margin-top: 10px;">
                    <div>5, 6, <span class="answer-space" style="width: 30px;"></span></div>
                    <div>6, 7, <span class="answer-space" style="width: 30px;"></span></div>
                    <div>7, 8, <span class="answer-space" style="width: 30px;"></span></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Tuesday Homework: Review Test Part 2 (6-8)</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Name:</strong> _________________</p>
                    <p><strong>Date:</strong> _________________</p>
                    
                    <div class="task-item">
                        <span class="task-number">1</span> Write numbers 6, 7, and 8:
                        <div style="display: flex; gap: 10px; margin-top: 5px;">
                            <span class="answer-space" style="width: 40px;"></span>
                            <span class="answer-space" style="width: 40px;"></span>
                            <span class="answer-space" style="width: 40px;"></span>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">2</span> Count and write:
                        <div style="margin-top: 10px;">
                            <div>⚽ ⚽ ⚽ ⚽ ⚽ ⚽ ⚽ = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🎁 🎁 🎁 🎁 🎁 🎁 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🍭 🍭 🍭 🍭 🍭 🍭 🍭 🍭 = <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">3</span> Circle the bigger number in each pair:
                        <div style="margin-top: 10px;">
                            <div>6 or 8? <span style="margin: 0 10px;">6</span> <span>8</span></div>
                            <div>7 or 5? <span style="margin: 0 10px;">7</span> <span>5</span></div>
                            <div>6 or 7? <span style="margin: 0 10px;">6</span> <span>7</span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">4</span> Complete the number sequence:
                        <div style="margin-top: 10px;">
                            <div>4, 5, <span class="answer-space" style="width: 30px;"></span>, 7</div>
                            <div>6, <span class="answer-space" style="width: 30px;"></span>, 8, 9</div>
                            <div>5, 6, <span class="answer-space" style="width: 30px;"></span>, 8</div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">5</span> Draw 7 stars:
                        <div class="drawing-area" style="height: 50px;"></div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">6</span> Which number means "six"?
                        <div style="display: flex; gap: 10px; margin-top: 10px; font-size: 20px;">
                            <span>8</span>
                            <span>6</span>
                            <span>7</span>
                        </div>
                    </div>
                </div>
                <p><em>Parents: Ask your child to count objects around the house (6-8 items).</em></p>
            </div>
        `,
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Numbers 9-10 Review",
        subtopic: "Nine and Ten",
        lessonContent: `
            <p>Excellent work! Today we'll review the last two numbers: 9 and 10!</p>
            <p><strong>Today's Focus:</strong> Numbers 9 and 10</p>
            <div class="content-box">
                <p><strong>Quick Reminders:</strong></p>
                <ul>
                    <li><span class="number-display">9</span> = Nine = Almost ten!</li>
                    <li><span class="number-display">10</span> = Ten = Two full hands!</li>
                </ul>
            </div>
            <p>Let's count all the way to ten: <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!</strong></p>
            <p><strong>Hand Trick:</strong> Show two hands for 10! For 9, show two hands but put one finger down.</p>
            <p><strong>Important:</strong> 10 is special - it has two digits: 1 and 0!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Groups of Ten</div>
                <p>Count to ten:</p>
                <p>10 fingers: ✋✋</p>
                <p>10 toes: 🦶🦶🦶🦶🦶 + 🦶🦶🦶🦶🦶</p>
                <p>9 is one less than 10!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Writing 9 and 10</div>
                <p>Practice writing:</p>
                <div style="display: flex; gap: 10px; font-size: 24px;">
                    <span class="number-display">9</span>
                    <span class="number-display">10</span>
                </div>
                <p>Tip: 9 looks like a circle with a line, 10 is a 1 followed by a 0!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Number Line to 10</div>
                <p>Complete number line:</p>
                <div class="number-line" style="display: flex; justify-content: space-between; padding: 10px; border: 1px solid #ddd;">
                    <span class="number-display">0</span>
                    <span class="number-display">1</span>
                    <span class="number-display">2</span>
                    <span class="number-display">3</span>
                    <span class="number-display">4</span>
                    <span class="number-display">5</span>
                    <span class="number-display">6</span>
                    <span class="number-display">7</span>
                    <span class="number-display">8</span>
                    <span class="number-display">9</span>
                    <span class="number-display">10</span>
                </div>
            </div>
        `,
        taskInstructions: "Practice identifying, counting, and writing numbers 9 and 10.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write numbers 9 and 10:
                <div class="drawing-area" style="height: 40px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Count and write:
                <div style="margin-top: 10px;">
                    <div>🐠 🐠 🐠 🐠 🐠 🐠 🐠 🐠 🐠 = <span class="answer-space"></span></div>
                    <div>🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓 🍓 = <span class="answer-space"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the number 10:
                <div style="display: flex; gap: 20px; margin-top: 10px; font-size: 20px;">
                    <span>9</span>
                    <span>10</span>
                    <span>8</span>
                    <span>11</span>
                    <span>7</span>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw 10 circles:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Show with your fingers:
                <div style="margin-top: 10px;">
                    <div>9 fingers = <span class="answer-space"></span> (draw)</div>
                    <div>10 fingers = <span class="answer-space"></span> (draw)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Complete the count:
                <div style="margin-top: 10px;">
                    <div>7, 8, <span class="answer-space" style="width: 30px;"></span>, <span class="answer-space" style="width: 30px;"></span></div>
                    <div>0, 1, 2, 3, 4, 5, 6, 7, 8, <span class="answer-space" style="width: 30px;"></span>, <span class="answer-space" style="width: 30px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> Which is bigger? 9 or 10? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Review Test Part 3 (9-10)</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Name:</strong> _________________</p>
                    <p><strong>Date:</strong> _________________</p>
                    
                    <div class="task-item">
                        <span class="task-number">1</span> Write numbers 9 and 10:
                        <div style="display: flex; gap: 10px; margin-top: 5px;">
                            <span class="answer-space" style="width: 40px;"></span>
                            <span class="answer-space" style="width: 40px;"></span>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">2</span> Count and write:
                        <div style="margin-top: 10px;">
                            <div>🎨 🎨 🎨 🎨 🎨 🎨 🎨 🎨 🎨 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 = <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">3</span> Draw the missing numbers:
                        <div style="margin-top: 10px;">
                            <div>8, <span class="answer-space" style="width: 30px;"></span>, 10</div>
                            <div>9 comes between <span class="answer-space" style="width: 30px;"></span> and <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">4</span> Circle groups of 10:
                        <div style="margin-top: 10px;">
                            <div>🐦 🐦 🐦 🐦 🐦 🐦 🐦 🐦 🐦 🐦</div>
                            <div>🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝</div>
                            <div>🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄 🦄</div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">5</span> Show 9 with dots:
                        <div style="display: grid; grid-template-columns: repeat(5, 20px); gap: 5px; margin-top: 10px;">
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                            <div class="dot-placeholder" style="width: 20px; height: 20px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">6</span> Complete: Ten = <span class="answer-space" style="width: 30px;"></span> fingers
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">7</span> Write the numbers from 0 to 10:
                        <div class="drawing-area" style="height: 50px;"></div>
                    </div>
                </div>
                <p><em>Parents: Practice counting to 10 with your child - forwards and backwards!</em></p>
            </div>
        `,
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Complete Review 0-10",
        subtopic: "All Numbers Practice",
        lessonContent: `
            <p>Fantastic work this week! Today we'll practice ALL numbers from 0 to 10!</p>
            <p><strong>Today's Focus:</strong> Complete review of numbers 0 through 10</p>
            <div class="content-box">
                <p><strong>Counting Challenge:</strong></p>
                <p>Let's count together: <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!</strong></p>
                <p>Now backwards: <strong>10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0!</strong></p>
            </div>
            <div class="content-box">
                <p><strong>Number Writing Practice:</strong></p>
                <div style="display: flex; gap: 5px; font-size: 20px; flex-wrap: wrap;">
                    <span class="number-display">0</span>
                    <span class="number-display">1</span>
                    <span class="number-display">2</span>
                    <span class="number-display">3</span>
                    <span class="number-display">4</span>
                    <span class="number-display">5</span>
                    <span class="number-display">6</span>
                    <span class="number-display">7</span>
                    <span class="number-display">8</span>
                    <span class="number-display">9</span>
                    <span class="number-display">10</span>
                </div>
            </div>
            <p><strong>Remember:</strong> You can count anything! Fingers, toys, books, steps - everything can be counted!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Mixed Counting</div>
                <p>Count mixed groups:</p>
                <p>🐱 🐱 🐱 (3) + 🐶 🐶 (2) = 5 animals total!</p>
                <p>Count each group, then add them together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Number Recognition</div>
                <p>Identify numbers in different orders:</p>
                <p>Find 7 in: 2, 9, 7, 1, 5</p>
                <p>Find 10 in: 10, 8, 3, 6, 4</p>
                <p>Find 0 in: 1, 0, 5, 2, 8</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Missing Numbers</div>
                <p>Complete the sequences:</p>
                <p>3, 4, <strong>5</strong>, 6, 7</p>
                <p>8, <strong>9</strong>, 10</p>
                <p><strong>0</strong>, 1, 2</p>
            </div>
        `,
        taskInstructions: "Complete practice with all numbers 0-10 including identification, counting, and writing.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write all numbers from 0 to 10:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Count and write mixed groups:
                <div style="margin-top: 10px;">
                    <div>🐯 🐯 🐯 🐯 🐯 = <span class="answer-space"></span></div>
                    <div>🍦 🍦 🍦 🍦 🍦 🍦 🍦 = <span class="answer-space"></span></div>
                    <div>🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 🚂 = <span class="answer-space"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the correct numbers:
                <div style="margin-top: 10px;">
                    <div>Circle number 5: <span style="margin: 0 10px; font-size: 20px;">3 5 8 1</span></div>
                    <div>Circle number 0: <span style="margin: 0 10px; font-size: 20px;">0 10 1 2</span></div>
                    <div>Circle number 10: <span style="margin: 0 10px; font-size: 20px;">9 10 8 7</span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw the correct number of items:
                <div style="margin-top: 10px;">
                    <div>Draw 4 triangles: <div class="drawing-area" style="height: 40px;"></div></div>
                    <div>Draw 8 circles: <div class="drawing-area" style="height: 40px;"></div></div>
                    <div>Draw 1 square: <div class="drawing-area" style="height: 40px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Fill in the missing numbers:
                <div style="margin-top: 10px;">
                    <div>0, 1, <span class="answer-space" style="width: 30px;"></span>, 3, 4</div>
                    <div>6, 7, <span class="answer-space" style="width: 30px;"></span>, 9, <span class="answer-space" style="width: 30px;"></span></div>
                    <div><span class="answer-space" style="width: 30px;"></span>, 8, 9, 10</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">6</span> Show these numbers with dots:
                <div style="margin-top: 10px;">
                    <div>Number 3: <span style="margin: 0 10px;">⚫ ⚫ ⚫</span></div>
                    <div>Number 7: <div class="drawing-area" style="height: 30px; width: 150px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">7</span> What number comes before?
                <div style="margin-top: 10px;">
                    <div>Before 5 is <span class="answer-space" style="width: 30px;"></span></div>
                    <div>Before 10 is <span class="answer-space" style="width: 30px;"></span></div>
                    <div>Before 1 is <span class="answer-space" style="width: 30px;"></span></div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Thursday Homework: Final Review Test (0-10)</strong></p>
                <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Name:</strong> _________________</p>
                    <p><strong>Date:</strong> _________________</p>
                    <p><strong>Final Numbers Test (0-10)</strong></p>
                    
                    <div class="task-item">
                        <span class="task-number">1</span> Write numbers 0-10 in order:
                        <div class="drawing-area" style="height: 60px;"></div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">2</span> Count and write the number:
                        <div style="margin-top: 10px;">
                            <div>🐼 🐼 🐼 🐼 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🦁 🦁 🦁 🦁 🦁 🦁 🦁 = <span class="answer-space" style="width: 30px;"></span></div>
                            <div>🐘 🐘 🐘 🐘 🐘 🐘 🐘 🐘 🐘 🐘 = <span class="answer-space" style="width: 30px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">3</span> Match the number to the word:
                        <div style="margin-top: 10px;">
                            <div>5 = <span style="margin: 0 10px;">Five</span> (circle)</div>
                            <div>0 = <span style="margin: 0 10px;">Zero</span> (circle)</div>
                            <div>10 = <span style="margin: 0 10px;">Ten</span> (circle)</div>
                            <div>3 = <span style="margin: 0 10px;">Three</span> (circle)</div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">4</span> Complete the sequences:
                        <div style="margin-top: 10px;">
                            <div>0, 1, 2, <span class="answer-space" style="width: 30px;"></span>, 4, 5</div>
                            <div>6, <span class="answer-space" style="width: 30px;"></span>, 8, <span class="answer-space" style="width: 30px;"></span>, 10</div>
                            <div>9, 8, <span class="answer-space" style="width: 30px;"></span>, 6, 5</div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">5</span> Draw the correct number of shapes:
                        <div style="margin-top: 10px;">
                            <div>Draw 2 stars: <div class="drawing-area" style="height: 40px;"></div></div>
                            <div>Draw 6 hearts: <div class="drawing-area" style="height: 40px;"></div></div>
                            <div>Draw 9 circles: <div class="drawing-area" style="height: 40px;"></div></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">6</span> Circle the bigger number:
                        <div style="margin-top: 10px;">
                            <div>4 or 7? <span style="margin: 0 10px;">4</span> <span>7</span></div>
                            <div>9 or 6? <span style="margin: 0 10px;">9</span> <span>6</span></div>
                            <div>3 or 8? <span style="margin: 0 10px;">3</span> <span>8</span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">7</span> Show with your fingers:
                        <div style="margin-top: 10px;">
                            <div>Show 3 fingers: <span class="answer-space" style="width: 100px;"></span></div>
                            <div>Show 10 fingers: <span class="answer-space" style="width: 100px;"></span></div>
                            <div>Show 0 fingers: <span class="answer-space" style="width: 100px;"></span></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">8</span> Find and circle all the number 5s:
                        <div style="display: flex; gap: 10px; margin-top: 10px; font-size: 20px;">
                            <span>2</span>
                            <span>5</span>
                            <span>8</span>
                            <span>5</span>
                            <span>1</span>
                            <span>5</span>
                            <span>3</span>
                            <span>5</span>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">9</span> What number means "nothing"? <span class="answer-space" style="width: 30px;"></span>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">10</span> How many fingers on two hands? <span class="answer-space" style="width: 30px;"></span>
                    </div>
                </div>
                <p><strong>Great job this week! You can now count from 0 to 10!</strong></p>
                <p><em>Parents: Please review the test with your child and celebrate their progress!</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Weekly Celebration",
        subtopic: "Numbers 0-10 Mastery",
        revisionContent: `
            <p>CONGRATULATIONS! 🎉 You have completed the Numbers 0-10 Review Week!</p>
            <div class="content-box" style="background-color: #e8f5e9; border-left: 5px solid #4caf50;">
                <p><strong>🎊 Celebration Time! 🎊</strong></p>
                <p>You can now:</p>
                <ul>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Count from 0 to 10</li>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Write numbers 0-10</li>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Identify numbers in different orders</li>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Count objects up to 10</li>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Show numbers with your fingers</li>
                    <li><i class="fas fa-check-circle" style="color: #4caf50;"></i> Complete number sequences</li>
                </ul>
            </div>
            <div class="content-box">
                <p><strong>Number Master Certificate:</strong></p>
                <div style="border: 2px dashed #ff9800; padding: 15px; text-align: center; background-color: #fff3e0;">
                    <h3 style="color: #ff9800;">🌟 NUMBER MASTER CERTIFICATE 🌟</h3>
                    <p>This certifies that</p>
                    <p><strong>_________________________</strong></p>
                    <p>has successfully mastered numbers 0-10</p>
                    <p>and can count, write, and identify all numbers!</p>
                    <p><em>Date: _________________________</em></p>
                    <p>🎉 CONGRATULATIONS! 🎉</p>
                </div>
            </div>
            <p><strong>Remember to keep practicing:</strong></p>
            <p>• Count everything you see!</p>
            <p>• Look for numbers around you (clocks, phones, books)</p>
            <p>• Practice writing numbers every day</p>
            <p>• Show numbers with your fingers and toys</p>
        `,
        revisionTask: `
            <div class="content-box">
                <p><strong>Fun Final Activity: Number Art</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a number collage:
                    <p>Draw or paste pictures showing:</p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                        <div>0 items</div>
                        <div>3 items</div>
                        <div>5 items</div>
                        <div>7 items</div>
                        <div>10 items</div>
                        <div>Your favorite number!</div>
                    </div>
                    <div class="drawing-area" style="height: 150px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Write a number story:
                    <p>Write a story using numbers 0-10:</p>
                    <div style="border: 1px dashed #ccc; padding: 10px; margin-top: 5px;">
                        <p>Once upon a time, I had <span class="answer-space" style="width: 40px;"></span> cookies.</p>
                        <p>I ate <span class="answer-space" style="width: 40px;"></span> cookie.</p>
                        <p>Then I had <span class="answer-space" style="width: 40px;"></span> cookies left!</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Number Hunt Game:
                    <p>Find these numbers in your classroom:</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                        <div>Find 0: <span class="answer-space"></span></div>
                        <div>Find 5: <span class="answer-space"></span></div>
                        <div>Find 10: <span class="answer-space"></span></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Count and color:
                    <p>Color the circles to show the numbers:</p>
                    <div style="margin-top: 10px;">
                        <div>Color 4 circles red: ○ ○ ○ ○ ○ ○</div>
                        <div>Color 6 circles blue: ○ ○ ○ ○ ○ ○ ○</div>
                        <div>Color 2 circles green: ○ ○ ○ ○</div>
                    </div>
                </div>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Weekend Challenge: Be a Number Detective!</strong></p>
                <p>Your mission this weekend: Find numbers everywhere!</p>
                <div style="border: 1px dashed #ccc; padding: 15px; margin: 10px 0;">
                    <p><strong>Number Detective Notebook:</strong></p>
                    
                    <div class="task-item">
                        <span class="task-number">1</span> Find numbers in your house:
                        <div style="margin-left: 20px; margin-top: 10px;">
                            <p>• Find something with the number 1: _________________</p>
                            <p>• Find something with the number 5: _________________</p>
                            <p>• Find something with the number 10: _________________</p>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">2</span> Count different things:
                        <div style="margin-left: 20px; margin-top: 10px;">
                            <p>• Count your toys: I have <span class="answer-space" style="width: 40px;"></span> toys</p>
                            <p>• Count books on a shelf: <span class="answer-space" style="width: 40px;"></span> books</p>
                            <p>• Count steps to your room: <span class="answer-space" style="width: 40px;"></span> steps</p>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">3</span> Create your own number problems:
                        <div style="margin-left: 20px; margin-top: 10px;">
                            <p>I see <span class="answer-space" style="width: 40px;"></span> birds + <span class="answer-space" style="width: 40px;"></span> cats = <span class="answer-space" style="width: 40px;"></span> animals total</p>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px;"></div>
                        </div>
                    </div>
                    
                    <div class="task-item">
                        <span class="task-number">4</span> Practice writing your favorite numbers:
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
                <p><strong>Share your detective work on Monday!</strong></p>
                <p><em>Remember: Numbers are everywhere! Keep looking, keep counting, and keep having fun with math!</em></p>
                <p style="color: #4caf50; font-weight: bold;">🎉 CONGRATULATIONS ON COMPLETING NUMBERS 0-10! 🎉</p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathWeek5);
    console.log("receptionMathWeek5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathWeek5);
    console.log("receptionMathWeek5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathWeek5',
        metadata: receptionMathWeek5.metadata,
        days: receptionMathWeek5
    });
    console.log("receptionMathWeek5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathWeek5 = receptionMathWeek5;
console.log("receptionMathWeek5.js loaded and registered successfully");