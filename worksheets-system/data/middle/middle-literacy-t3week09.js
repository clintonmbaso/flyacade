// Grade Middle Literacy - Term 3 Week 9 Data
const gradeMiddleLiteracyWeek9 = {
    metadata: {
        grade: "middle",
        subject: "Literacy",
        term: 3,
        week: 9,
        title: "Image & Sound Matching",
        description: "Connecting images to sounds and letters - building phonemic awareness through picture-to-letter associations"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "Phonemic Awareness",
        subtopic: "Matching Images to Sounds",
        lessonContent: `
            <p>Welcome to our literacy lesson! Today we'll learn how to connect pictures to the sounds they begin with.</p>
            <p><strong>Key Question:</strong> How can a picture tell us what sound a word starts with?</p>
            <p><strong>Introduction:</strong> Every word is made up of sounds. The first sound you hear when you say a word is called the <strong>initial sound</strong>. Today, we'll practice matching pictures to their beginning sounds.</p>
            <p><strong>Let's Practice:</strong></p>
            <ul>
                <li>Say the name of each picture slowly</li>
                <li>Listen carefully to the first sound you make</li>
                <li>Find the letter that makes that sound</li>
                <li>Connect the picture to its matching sound</li>
            </ul>
            <p><strong>Example:</strong></p>
            <ul>
                <li>Picture of a cat → begins with the /c/ sound → matches with letter <strong>C</strong></li>
                <li>Picture of a sun → begins with the /s/ sound → matches with letter <strong>S</strong></li>
                <li>Picture of an apple → begins with the /a/ sound → matches with letter <strong>A</strong></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Listen Up!</div>
                <p>Say "balloon" slowly: bbb-alloon. The first sound is /b/ like the letter B!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comment-dots"></i> Mouth Moves</div>
                <p>Watch your mouth in a mirror when you say "mmmom" - your lips press together for the /m/ sound!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Sound Detective</div>
                <p>Being a sound detective helps you become a better reader and speller. Every letter has a job - making sounds!</p>
            </div>
        `,
        taskInstructions: "Match each picture to its correct initial sound by drawing lines or writing the letter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Picture-to-Sound Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each picture to its matching beginning letter:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
                        <div>
                            <div>🐱 Cat → ______</div>
                            <div>🐶 Dog → ______</div>
                            <div>🐭 Mouse → ______</div>
                            <div>🐸 Frog → ______</div>
                            <div>🐦 Bird → ______</div>
                            <div>🐟 Fish → ______</div>
                        </div>
                        <div>
                            <div>A. C</div>
                            <div>B. D</div>
                            <div>C. M</div>
                            <div>D. F</div>
                            <div>E. B</div>
                            <div>F. F</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part B: Flashcard Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Using the flashcards provided, say each picture name aloud. Write the first letter for each picture:
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>🪁 Kite</span><br>
                            <span>First letter: ______</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>🏠 House</span><br>
                            <span>First letter: ______</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>🚗 Car</span><br>
                            <span>First letter: ______</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>📚 Book</span><br>
                            <span>First letter: ______</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>🍎 Apple</span><br>
                            <span>First letter: ______</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <span>⚽ Ball</span><br>
                            <span>First letter: ______</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part C: Sound Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these pictures into groups by their beginning sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><em>Pictures: Sun, Moon, Snake, Monkey, Sock, Muffin</em></div>
                        <div style="margin-top: 10px;">
                            <div><strong>Starts with S:</strong> ________________________________</div>
                            <div><strong>Starts with M:</strong> ________________________________</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part D: Draw and Match</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of something that starts with the letter T. Then write the letter T next to it:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Say each name aloud and write the first letter of each object on a piece of paper.",
        homeworkDue: "Wednesday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Phonemic Awareness",
        subtopic: "Picture-to-Letter Associations",
        lessonContent: `
            <p>Today we'll practice connecting pictures directly to their starting letters!</p>
            <p><strong>Key Question:</strong> How do we know which letter a picture starts with?</p>
            <p><strong>Introduction:</strong> Every picture represents a word. When we look at a picture, we can say the word in our head and listen for the very first sound. That sound is made by a specific letter. Today, you'll draw lines connecting pictures to their starting letters.</p>
            <p><strong>Steps to Follow:</strong></p>
            <ol>
                <li>Look at the picture carefully</li>
                <li>Say the name of the object out loud</li>
                <li>Listen for the first sound you make</li>
                <li>Find the letter that makes that sound</li>
                <li>Draw a line connecting the picture to its letter</li>
            </ol>
            <p><strong>Practice Together:</strong></p>
            <ul>
                <li>📌 Picture of a pin → starts with /p/ → letter <strong>P</strong></li>
                <li>🐷 Picture of a pig → starts with /p/ → letter <strong>P</strong></li>
                <li>🦁 Picture of a lion → starts with /l/ → letter <strong>L</strong></li>
                <li>🐘 Picture of an elephant → starts with /e/ → letter <strong>E</strong></li>
            </ul>
            <p><strong>Remember:</strong> Some pictures might start with the same letter! That's okay - just connect each picture to its correct matching letter.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbtack"></i> Pin to P</div>
                <p>Look at the picture of a pin. Say "pin." The first sound is /p/. The letter P makes the /p/ sound. Draw a line from the pin to the letter P!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Letter Hunt</div>
                <p>Try this: Say "ball" - /b/ is the first sound. Say "bat" - also /b/! Different pictures can share the same starting letter.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Voice Power</div>
                <p>Use your voice like a detective. Stretch out the first sound: ttttturtle → T! fffffish → F! aaaaapple → A!</p>
            </div>
        `,
        taskInstructions: "Draw lines to connect each object picture to its correct starting letter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Lines to Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each picture to its starting letter:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 15px;">
                        <div>
                            <div>📌 Pin → ______</div>
                            <div>🐷 Pig → ______</div>
                            <div>🎁 Present → ______</div>
                            <div>🏠 House → ______</div>
                            <div>🐱 Cat → ______</div>
                            <div>🐄 Cow → ______</div>
                            <div>🦁 Lion → ______</div>
                            <div>🍋 Lemon → ______</div>
                        </div>
                        <div>
                            <div>A. H</div>
                            <div>B. C</div>
                            <div>C. L</div>
                            <div>D. P</div>
                            <div>E. P</div>
                            <div>F. P</div>
                            <div>G. C</div>
                            <div>H. L</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part B: More Picture-to-Letter Connections</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the correct starting letter for each picture:
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 15px;">
                        <div style="text-align: center;">
                            <div>🐝 Bee</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🐌 Snail</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🐸 Frog</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🐒 Monkey</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🦆 Duck</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🐢 Turtle</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🐺 Wolf</div>
                            <div>______</div>
                        </div>
                        <div style="text-align: center;">
                            <div>🦊 Fox</div>
                            <div>______</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part C: Circle the Correct Letter</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> For each picture, circle the letter that makes the first sound:
                    <div style="margin-left: 20px; margin-top: 15px;">
                        <div>🪣 Bucket: &nbsp;&nbsp; B &nbsp; D &nbsp; F</div>
                        <div>🪶 Feather: &nbsp;&nbsp; F &nbsp; H &nbsp; P</div>
                        <div>🧦 Sock: &nbsp;&nbsp; C &nbsp; S &nbsp; T</div>
                        <div>🪑 Chair: &nbsp;&nbsp; C &nbsp; S &nbsp; H</div>
                        <div>🍞 Bread: &nbsp;&nbsp; B &nbsp; P &nbsp; D</div>
                        <div>🥛 Milk: &nbsp;&nbsp; M &nbsp; N &nbsp; B</div>
                        <div>🍭 Lollipop: &nbsp;&nbsp; L &nbsp; M &nbsp; P</div>
                        <div>🪴 Plant: &nbsp;&nbsp; P &nbsp; B &nbsp; T</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of something that starts with the letter B. Then draw a line from your picture to the letter B below:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="text-align: center; margin-top: 10px;">
                        <span style="font-size: 48px;">B</span>
                    </div>
                </div>
            </div>

            <div class="content-box">
                <p><strong>Part E: Quick Check</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Say each word aloud. Write the first letter in the blank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🖍️ Crayon → ______</div>
                        <div>📖 Book → ______</div>
                        <div>✂️ Scissors → ______</div>
                        <div>📏 Ruler → ______</div>
                        <div>🖊️ Pen → ______</div>
                        <div>🖍️ Marker → ______</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a magazine or newspaper. Cut out 5 pictures. Glue them on paper and write the first letter under each picture.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleLiteracyWeek9);
    console.log("grade-middle-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleLiteracyWeek9);
    console.log("grade-middle-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleLiteracyWeek9',
        metadata: gradeMiddleLiteracyWeek9.metadata,
        days: gradeMiddleLiteracyWeek9
    });
    console.log("grade-middle-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleLiteracyWeek9 = gradeMiddleLiteracyWeek9;
console.log("grade-middle-literacy-week9.js loaded and registered successfully");