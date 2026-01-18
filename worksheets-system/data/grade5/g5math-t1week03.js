// Grade 5 Math - Week 3 Data
const grade5MathWeek3 = {
    metadata: {
        grade: 5,
        subject: "Math",
        term: 1,
        week: 3,
        title: "Roman Numerals",
        description: "Understanding the Roman numeration system and using it to communicate ideas in real-life contexts"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Roman Numerals",
        subtopic: "Introduction to Roman Symbols",
        lessonContent: `
            <p>Welcome to our exploration of Roman numerals! This week we will learn an ancient number system that is still used today in many ways.</p>
            <p><strong>Key Concept:</strong> Roman numerals use letters from the Latin alphabet to represent numbers. This system was developed in ancient Rome and is different from our regular Arabic numerals (1, 2, 3...).</p>
            <p><strong>The Seven Basic Symbols:</strong></p>
            <ul>
                <li><strong>I</strong> = 1</li>
                <li><strong>V</strong> = 5</li>
                <li><strong>X</strong> = 10</li>
                <li><strong>L</strong> = 50</li>
                <li><strong>C</strong> = 100</li>
                <li><strong>D</strong> = 500</li>
                <li><strong>M</strong> = 1000</li>
            </ul>
            <p><strong>Basic Rules:</strong></p>
            <ol>
                <li><strong>Repetition Rule:</strong> A symbol can be repeated up to 3 times to add values (III = 1+1+1 = 3)</li>
                <li><strong>Addition Rule:</strong> When a smaller symbol comes AFTER a larger one, you add them (VI = 5+1 = 6)</li>
                <li><strong>Never Repeat V, L, or D:</strong> These symbols cannot be repeated</li>
            </ol>
            <p><strong>Why Learn Roman Numerals?</strong> They help us read clocks, understand book chapters, interpret dates on buildings, and appreciate historical documents.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol" style="color: #4A90E2;"></i> Simple Examples</div>
                <p>III = 1+1+1 = 3<br>VII = 5+1+1 = 7<br>XX = 10+10 = 20</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> What NOT to Do</div>
                <p>VV does NOT equal 10 (V cannot repeat)<br>XXXX does NOT equal 40 (X can only repeat 3 times)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Tip</div>
                <p>Remember: "I Value Xylophones Like Cows Dig Milk" for I, V, X, L, C, D, M!</p>
            </div>
        `,
        taskInstructions: "Practice using the seven basic symbols by completing the following activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Write the Arabic number for these Roman numerals:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. III = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. VII = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>c. XII = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>d. XV = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>e. XX = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Write the Roman numeral for these Arabic numbers:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>a. 8 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>b. 12 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>c. 17 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>d. 25 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    <div>e. 30 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Which of these are INCORRECT according to Roman numeral rules? Circle them:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>IIII &nbsp;&nbsp; VV &nbsp;&nbsp; IX &nbsp;&nbsp; LL &nbsp;&nbsp; XXX</div>
                </div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why do you think the Romans developed this number system? Give one reason:
                <div class="answer-space" style="height: 60px;"></div>
            </div>
        `,
        homework: "Find 3 examples of Roman numerals in your home or neighborhood. Write down what they represent.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Roman Numerals",
        subtopic: "The Subtraction Rule and Conversion",
        lessonContent: `
            <p>Today we will learn one of the most important rules in Roman numerals: the subtraction rule. This rule helps us write numbers like 4 and 9 correctly.</p>
            <p><strong>The Subtraction Rule:</strong> When a smaller symbol is placed BEFORE a larger symbol, you SUBTRACT the smaller value from the larger value.</p>
            <p><strong>Key Examples:</strong></p>
            <ul>
                <li>IV = 5 - 1 = 4 (I before V)</li>
                <li>IX = 10 - 1 = 9 (I before X)</li>
                <li>XL = 50 - 10 = 40 (X before L)</li>
                <li>XC = 100 - 10 = 90 (X before C)</li>
                <li>CD = 500 - 100 = 400 (C before D)</li>
                <li>CM = 1000 - 100 = 900 (C before M)</li>
            </ul>
            <p><strong>Important Restrictions:</strong></p>
            <ol>
                <li>Only I, X, and C can be used for subtraction</li>
                <li>You can only subtract ONE symbol at a time</li>
                <li>You can only subtract from the next two higher values:
                    <ul>
                        <li>I can subtract from V and X only</li>
                        <li>X can subtract from L and C only</li>
                        <li>C can subtract from D and M only</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Conversion Practice:</strong> We'll practice converting between Arabic and Roman numerals, focusing on numbers that use the subtraction rule.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt" style="color: #4A90E2;"></i> Conversion Examples</div>
                <p>14 = XIV (10 + 4)<br>19 = XIX (10 + 9)<br>40 = XL (50 - 10)<br>90 = XC (100 - 10)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban"></i> Common Mistakes</div>
                <p>IIX is NOT 8 (correct is VIII)<br>VX is NOT 5 (correct is V)<br>IC is NOT 99 (correct is XCIX)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-history"></i> Historical Note</div>
                <p>The subtraction rule wasn't always used in ancient Rome! It developed over time to make numbers shorter and easier to read.</p>
            </div>
        `,
        taskInstructions: "Practice the subtraction rule by converting between Arabic and Roman numerals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Using the Subtraction Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers using Roman numerals (use subtraction where needed):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 4 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 9 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 14 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 19 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>e. 40 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>f. 90 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Convert to Arabic Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the Arabic number for these Roman numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. IV = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. IX = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. XIV = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. XIX = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>e. XL = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>f. XC = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Personal Data Conversion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Convert your personal information to Roman numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Your birth month (as a number): <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. Your age: <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. Current year (last 2 digits only): <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Detection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the incorrect Roman numerals and write the correct version:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 3 = III &nbsp;&nbsp; IIII</div>
                        <div>b. 8 = IIX &nbsp;&nbsp; VIII</div>
                        <div>c. 45 = VL &nbsp;&nbsp; XLV</div>
                        <div>d. 95 = VC &nbsp;&nbsp; XCV</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Convert the ages of 3 family members into Roman numerals. Include their names and Roman numeral ages.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Roman Numerals",
        subtopic: "Larger Numbers and Ordering",
        lessonContent: `
            <p>Today we will work with larger Roman numerals and learn how to order them from smallest to largest.</p>
            <p><strong>Writing Larger Numbers:</strong> Combine symbols using both addition and subtraction rules to create numbers up to several thousand.</p>
            <p><strong>Examples of Larger Numbers:</strong></p>
            <ul>
                <li>48 = XLVIII (40 + 8 = XL + VIII)</li>
                <li>99 = XCIX (90 + 9 = XC + IX)</li>
                <li>150 = CL (100 + 50)</li>
                <li>499 = CDXCIX (400 + 90 + 9 = CD + XC + IX)</li>
                <li>888 = DCCCLXXXVIII</li>
                <li>2024 = MMXXIV (2000 + 20 + 4)</li>
            </ul>
            <p><strong>Ordering Roman Numerals:</strong> To order Roman numerals, you need to:</p>
            <ol>
                <li>Convert them to Arabic numbers first</li>
                <li>Compare the Arabic values</li>
                <li>Arrange them in order (smallest to largest or vice versa)</li>
            </ol>
            <p><strong>Real-World Applications:</strong></p>
            <ul>
                <li><strong>Chapter Numbers:</strong> Books often use Roman numerals for preface, introduction, and chapter numbers</li>
                <li><strong>Clock Faces:</strong> Many traditional clocks use Roman numerals I through XII</li>
                <li><strong>Monarch Names:</strong> Kings and queens use Roman numerals (Henry VIII, Elizabeth II)</li>
                <li><strong>Movie Sequels:</strong> Some movie series use Roman numerals (Rocky IV, Star Wars Episode VII)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up" style="color: #4A90E2;"></i> Ordering Example</div>
                <p>To order: X, V, XV, III<br>Convert: 10, 5, 15, 3<br>Order: III(3), V(5), X(10), XV(15)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Chapter Numbers</div>
                <p>Table of Contents:<br>I. Introduction<br>II. Chapter 1<br>III. Chapter 2<br>X. Appendix</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock"></i> Clock Face</div>
                <p>Traditional clocks show:<br>XII at top (12)<br>III on right (3)<br>VI at bottom (6)<br>IX on left (9)</p>
            </div>
        `,
        taskInstructions: "Practice working with larger Roman numerals and ordering them correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Writing Larger Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write these numbers in Roman numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 27 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. 49 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>c. 88 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>d. 99 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>e. 150 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                        <div>f. 499 = <div style="display: inline-block; width: 80px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Ordering Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Order these Roman numerals from smallest to largest:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>XIV, IX, V, XX, III</div>
                        <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Order these "chapter numbers" correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>XII, I, V, III, VIII</div>
                        <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Clock Face Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Label the clock face with Roman numerals:
                    <div style="text-align: center; margin: 15px 0;">
                        <div style="display: inline-block; width: 200px; height: 200px; border: 3px solid #000; border-radius: 50%; position: relative;">
                            <div style="position: absolute; top: 10px; left: 90px;">12</div>
                            <div style="position: absolute; top: 90px; right: 10px;">3</div>
                            <div style="position: absolute; bottom: 10px; left: 90px;">6</div>
                            <div style="position: absolute; top: 90px; left: 10px;">9</div>
                        </div>
                    </div>
                    <p>Replace the Arabic numbers with Roman numerals:</p>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>12 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>3 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>6 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                        <div>9 = <div style="display: inline-block; width: 50px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If Chapter I is 10 pages long, Chapter III is 15 pages, and Chapter V is 12 pages, which chapter is the longest?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What number comes after XLIX (49) in Roman numerals?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Find a book with Roman numeral chapter numbers. List the first 5 chapter numbers in both Roman and Arabic.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Roman Numerals",
        subtopic: "Roman Numerals in Everyday Life",
        lessonContent: `
            <p>Today we will explore how Roman numerals are used in our daily lives and practice applying our knowledge to real-world situations.</p>
            <p><strong>Where We See Roman Numerals Today:</strong></p>
            <ul>
                <li><strong>Clock Faces:</strong> Many traditional and decorative clocks</li>
                <li><strong>Building Dates:</strong> Cornerstones of old buildings show construction dates in Roman numerals</li>
                <li><strong>Book Chapters/Volumes:</strong> Prefaces, introductions, and volume numbers</li>
                <li><strong>Movie Copyright Dates:</strong> The year films were made (often at the end)</li>
                <li><strong>Monument Inscriptions:</strong> Dates on monuments and statues</li>
                <li><strong>Sporting Events:</strong> Super Bowl numbers (Super Bowl LVIII)</li>
                <li><strong>Monarchs and Popes:</strong> Henry VIII, Pope John Paul II, Queen Elizabeth II</li>
                <li><strong>Outlines:</strong> I., A., 1., a., i., etc.</li>
            </ul>
            <p><strong>Reading Dates in Roman Numerals:</strong></p>
            <p>Building dates are often written in Roman numerals. For example: MCMXXIV = 1924</p>
            <p><strong>Communication Using Roman Numerals:</strong></p>
            <p>We can use Roman numerals to write dates, list items, or indicate order. They add a formal or traditional feel to communication.</p>
            <p><strong>Assessment Focus:</strong> Today you'll demonstrate your ability to correctly communicate specific dates, quantities, and orders using the Roman numeral system.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building" style="color: #4A90E2;"></i> Building Date</div>
                <p>A library built in 1925 might have: MCMXXV<br>M(1000) + CM(900) + XX(20) + V(5) = 1925</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-film"></i> Movie Copyright</div>
                <p>Star Wars (1977) shows: MCMLXXVII<br>M(1000) + CM(900) + LXX(70) + VII(7) = 1977</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-football-ball"></i> Super Bowl</div>
                <p>Super Bowl 58 in 2024 was: Super Bowl LVIII<br>L(50) + VIII(8) = 58</p>
            </div>
        `,
        taskInstructions: "Apply your Roman numeral knowledge to real-life situations and demonstrate your understanding.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Roman Numerals in Context</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the picture of a clock face with Roman numerals. Answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What time is shown if the hour hand is on IV and minute hand on XII?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. What Roman numeral is opposite of IX on a clock?</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Decode this building cornerstone: MDCCCXLVII
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What year was the building built? <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. Write that year in modern Arabic numbers: <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Creating with Roman Numerals</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a "family timeline" using Roman numerals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Write 3 important family dates in Roman numerals (birth years, wedding years, etc.)</div>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Design a book cover for "My Life: Volume III"
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Include the title with Roman numeral and the "publication date" in Roman numerals</div>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Real-World Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> You're helping organize school records. The oldest document is dated MDCCCXCV. The newest is MMXXIV.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. What years are these? <div style="display: inline-block; width: 150px; border-bottom: 1px solid #000;"></div></div>
                        <div>b. How many years apart are they? <div style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></div></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> A movie theater is showing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Star Wars: Episode IV at 2:00 PM</div>
                        <div>Rocky V at 4:30 PM</div>
                        <div>Harry Potter and the Chamber of Secrets (Part II) at 7:00 PM</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Write the sequence numbers (IV, V, II) in order from smallest to largest:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection and Application</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Why do you think Roman numerals are still used today instead of being replaced entirely by Arabic numerals?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> Create a text message to a friend inviting them to see "Super Bowl LIX" next year. Use Roman numerals correctly:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 different uses of Roman numerals in your community. Take photos or make sketches and label what they represent.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathWeek3);
    console.log("grade5-math-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathWeek3);
    console.log("grade5-math-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathWeek3',
        metadata: grade5MathWeek3.metadata,
        days: grade5MathWeek3
    });
    console.log("grade5-math-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathWeek3 = grade5MathWeek3;
console.log("grade5-math-week3.js loaded and registered successfully");