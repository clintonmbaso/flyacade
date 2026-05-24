// Grade 2 Literacy - Term 3 Week 4 Data
const grade2LiteracyWeek4 = {
    metadata: {
        grade: 2,
        subject: "Literacy",
        term: 3,
        week: 4,
        title: "Alphabetical Order",
        description: "Learning alphabetical sequencing and sorting words from A to Z"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Alphabetical Order",
        subtopic: "Introduction to Alphabetical Sequencing",
        lessonContent: `
            <p>Welcome to our lesson on alphabetical order! Today we'll learn the sequence of the alphabet from A to Z.</p>
            <p><strong>Key Question:</strong> Why do we put things in ABC order?</p>
            <p><strong>Introduction:</strong> The alphabet has 26 letters in a special order. Learning this order helps us find words in dictionaries, look up names in phone books, and organize things!</p>
            <p><strong>The Alphabet Song:</strong></p>
            <div class="song-box" style="background-color: #f0f8ff; padding: 15px; border-radius: 10px; margin: 15px 0; text-align: center;">
                <p><strong>🎵 A-B-C-D-E-F-G<br>
                H-I-J-K-L-M-N-O-P<br>
                Q-R-S-T-U-V<br>
                W-X-Y and Z 🎵</strong></p>
                <p><em>Now I know my ABCs, next time won't you sing with me!</em></p>
            </div>
            <p><strong>Letters in Order (A-M):</strong></p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0; font-size: 24px; font-weight: bold;">
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">A</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">B</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">C</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">D</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">E</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">F</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">G</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">H</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">I</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">J</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">K</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">L</span>
                <span style="background: #FF6B6B; padding: 8px 12px; border-radius: 8px;">M</span>
            </div>
            <p><strong>Letters in Order (N-Z):</strong></p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0; font-size: 24px; font-weight: bold;">
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">N</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">O</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">P</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">Q</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">R</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">S</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">T</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">U</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">V</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">W</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">X</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">Y</span>
                <span style="background: #4ECDC4; padding: 8px 12px; border-radius: 8px;">Z</span>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book"></i> Using a Dictionary</div>
                <p>Dictionaries list words in ABC order. If you want to find the word "cat", you look after "b" words but before "d" words!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Making Lists</div>
                <p>When you make a list of names, putting them in ABC order helps you find a name quickly. Apple comes before Banana!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Letter Race</div>
                <p>Think of the alphabet like a race track. A is at the starting line, Z is at the finish line, and all the other letters are in between!</p>
            </div>
        `,
        taskInstructions: "Practice singing the alphabet and identifying letter positions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sing Along!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sing the Alphabet Song with your class. Then write the alphabet in order:
                    <div class="writing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        A ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Letter Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the letter that comes next:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A, B, ___</div>
                        <div>D, E, ___</div>
                        <div>G, H, ___</div>
                        <div>K, L, ___</div>
                        <div>P, Q, ___</div>
                        <div>S, T, ___</div>
                        <div>W, X, ___</div>
                        <div>Y, Z, ___ (then what?)</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Missing Letters</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the missing letters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A, ___, C, D, E, ___, G</div>
                        <div>M, N, ___, P, Q, ___, S</div>
                        <div>W, ___, Y, Z</div>
                        <div>J, K, ___, M, N, ___</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Practice singing the Alphabet Song to a family member. Have them quiz you on what letter comes after different letters (example: 'What comes after M?')",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Alphabetical Order",
        subtopic: "Word Sorting by First Letter",
        lessonContent: `
            <p>Today we'll learn how to put words in ABC order using their first letters!</p>
            <p><strong>Key Question:</strong> How do we know which word comes first in ABC order?</p>
            <p><strong>Introduction:</strong> To put words in alphabetical order, we look at the first letter of each word. Then we use our alphabet knowledge to arrange them!</p>
            <p><strong>Step-by-Step Guide:</strong></p>
            <ol>
                <li>Look at the first letter of each word</li>
                <li>Think about where that letter belongs in the alphabet</li>
                <li>Put the word with the earliest letter first</li>
                <li>If two words start with the same letter, look at the second letter!</li>
            </ol>
            <p><strong>Today's Words to Sort:</strong></p>
            <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin: 20px 0;">
                <span style="background: #FFE0B5; padding: 10px 20px; border-radius: 20px; font-size: 20px;">🐘 hippo</span>
                <span style="background: #FFE0B5; padding: 10px 20px; border-radius: 20px; font-size: 20px;">🍐 pear</span>
                <span style="background: #FFE0B5; padding: 10px 20px; border-radius: 20px; font-size: 20px;">☁️ sky</span>
                <span style="background: #FFE0B5; padding: 10px 20px; border-radius: 20px; font-size: 20px;">🦓 zebra</span>
                <span style="background: #FFE0B5; padding: 10px 20px; border-radius: 20px; font-size: 20px;">🌱 beans</span>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-alpha-down"></i> Sorting Example</div>
                <p>Words: dog, cat, bird<br>
                First letters: d, c, b<br>
                Alphabet order: b (bird), c (cat), d (dog)<br>
                <strong>Answer:</strong> bird, cat, dog</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Same First Letter?</div>
                <p>If words start with the same letter, look at the second letter!<br>
                Example: apple, ant → ap comes before an, so ant comes before apple!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard-teacher"></i> Let's Practice</div>
                <p>Which comes first: zebra or hippo?<br>
                H comes before Z in the alphabet, so hippo comes before zebra!</p>
            </div>
        `,
        taskInstructions: "Arrange words in alphabetical order using their first letters.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Letter Check</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each word. Write its first letter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>hippo starts with ___</div>
                        <div>pear starts with ___</div>
                        <div>sky starts with ___</div>
                        <div>zebra starts with ___</div>
                        <div>beans starts with ___</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Alphabetical Order Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Put these words in ABC order (use the first letter):
                    <div style="margin-left: 20px; margin-top: 10px; background: #f5f5f5; padding: 15px; border-radius: 8px;">
                        <p><strong>Words:</strong> hippo, pear, sky, zebra, beans</p>
                        <p>1st: _________ (smallest letter)</p>
                        <p>2nd: _________</p>
                        <p>3rd: _________</p>
                        <p>4th: _________</p>
                        <p>5th: _________ (largest letter)</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: More Word Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these words alphabetically:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Set 1:</strong> apple, grape, banana, cherry</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 15px;"><strong>Set 2:</strong> mouse, lion, elephant, tiger</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        <div style="margin-top: 15px;"><strong>Set 3:</strong> red, blue, green, yellow</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 things in your home. Write their names and put them in alphabetical order (example: bed, chair, desk, lamp, rug).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Alphabetical Order",
        subtopic: "Advanced Word Sorting",
        lessonContent: `
            <p>Today we'll become alphabet experts by sorting more challenging word sets!</p>
            <p><strong>Key Question:</strong> How do we put any group of words in ABC order?</p>
            <p><strong>Review:</strong> Remember to look at the first letter of each word. If first letters are the same, look at the second letter!</p>
            <p><strong>Alphabet Reference Chart:</strong></p>
            <div style="background: #e8f4f8; padding: 15px; border-radius: 10px; text-align: center; font-size: 20px; letter-spacing: 5px; margin: 15px 0;">
                <strong>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</strong>
            </div>
            <p><strong>Today's Word Set:</strong> beans, hippo, pear, sky, zebra</p>
            <p><strong>Let's Sort Them Together:</strong></p>
            <ul>
                <li><strong>beans</strong> - starts with B (B is the 2nd letter)</li>
                <li><strong>hippo</strong> - starts with H (H is the 8th letter)</li>
                <li><strong>pear</strong> - starts with P (P is the 16th letter)</li>
                <li><strong>sky</strong> - starts with S (S is the 19th letter)</li>
                <li><strong>zebra</strong> - starts with Z (Z is the 26th letter)</li>
            </ul>
            <p><strong>In ABC Order:</strong> beans → hippo → pear → sky → zebra</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy"></i> Challenge Example</div>
                <p>Sort: cat, cow, camel<br>
                All start with C! Look at second letter: a (cat), a (camel), o (cow)<br>
                Compare ca in cat and ca in camel - look at third letter! camel (m) vs cat (t)<br>
                M comes before T, so: camel, cat, cow</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-down"></i> Letter Position Trick</div>
                <p>Remember: A=1, B=2, C=3, D=4, E=5 ... Z=26. The smaller the number, the earlier it comes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Quick Check</div>
                <p>Is "zebra" before or after "pear"?<br>
                Z (26) comes after P (16), so zebra comes AFTER pear!</p>
            </div>
        `,
        taskInstructions: "Sort multiple word sets into alphabetical order independently.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort Today's Words</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put these words in alphabetical order: beans, hippo, pear, sky, zebra
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _________</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                        <div>4. _________</div>
                        <div>5. _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort each word set alphabetically:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Set A:</strong> dog, cat, fish, bird, rabbit</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Set B:</strong> school, home, park, library, museum</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Set C:</strong> Monday, Friday, Wednesday, Tuesday, Thursday</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Set D:</strong> January, March, April, February, May</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these tricky words (some start with the same letter!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Set E:</strong> apple, ant, ape, art, ask</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Set F:</strong> big, ball, bed, bat, brown</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Dictionary Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine you are looking in a dictionary. Between which two guide words would you find "pear"?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Options: apple/peach OR peach/sky OR sky/zebra</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create your own list of 5 words and sort them alphabetically:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Write the names of 10 family members or friends. Put their names in alphabetical order. Challenge: what if two names start with the same letter?",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2LiteracyWeek4);
    console.log("grade2-literacy-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2LiteracyWeek4);
    console.log("grade2-literacy-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2LiteracyWeek4',
        metadata: grade2LiteracyWeek4.metadata,
        days: grade2LiteracyWeek4
    });
    console.log("grade2-literacy-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2LiteracyWeek4 = grade2LiteracyWeek4;
console.log("grade2-literacy-week4.js loaded and registered successfully");