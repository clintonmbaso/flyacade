// Grade 1 Literacy - Week 3 Data
const grade1LiteracyWeek3 = {
    metadata: {
        grade: 1,
        subject: "Literacy",
        week: 3,
        title: "Consonant Sounds Adventure",
        description: "Introduction to consonant sounds, identifying them in words, and sounding them out correctly"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Meet the Consonants",
        subtopic: "Introduction to consonant sounds in English",
        lessonContent: `
            <p>Welcome to our Literacy adventure! This week we will learn about special sounds called consonants. Today we'll meet our consonant friends!</p>
            <p><strong>What are consonants?</strong> Consonants are sounds we make when we close or partly close our mouth. They are different from vowel sounds.</p>
            <p><strong>Our consonant sounds:</strong></p>
            <ul>
                <li>/s/ - like a snake: sssss</li>
                <li>/t/ - like tapping: t t t</li>
                <li>/p/ - like popping: p p p</li>
                <li>/n/ - like humming: nnnnn</li>
                <li>/c/ or /k/ - like cracking: c c c</li>
                <li>/h/ - like breathing: h h h</li>
                <li>/r/ - like a race car: rrrrr</li>
            </ul>
            <p><strong>Why are consonants important?</strong> Consonants help us make words! Without consonants, we couldn't say words like "cat," "dog," or "sun."</p>
            <p><strong>Let's practice together!</strong> We'll make each consonant sound and think of words that start with that sound.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snake" style="color: #4CAF50;"></i> /s/ Sound</div>
                <p>"Sun" starts with /s/. Can you make the snake sound? Ssssssun! Other /s/ words: snake, sit, see.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drum" style="color: #2196F3;"></i> /t/ Sound</div>
                <p>"Tap" starts with /t/. Can you tap your tongue? T t t tap! Other /t/ words: top, ten, toy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-popcorn" style="color: #FF9800;"></i> /p/ Sound</div>
                <p>"Pop" starts with /p/. Can you pop your lips? P p p pop! Other /p/ words: pig, pen, pan.</p>
            </div>
        `,
        taskInstructions: "Practice making consonant sounds and identify words that start with these sounds.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Match the consonant sound to the picture:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>/s/ ☐ snake ☐ tiger ☐ parrot</div>
                    <div>/t/ ☐ sun ☐ turtle ☐ nest</div>
                    <div>/p/ ☐ pencil ☐ house ☐ rabbit</div>
                    <div>/n/ ☐ nose ☐ cat ☐ kite</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Make the consonant sounds. Draw a face showing how your mouth looks for each:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>/s/ - snake sound: <div class="drawing-area" style="height: 50px; width: 100px; display: inline-block; margin-left: 10px;"></div></div>
                    <div>/p/ - pop sound: <div class="drawing-area" style="height: 50px; width: 100px; display: inline-block; margin-left: 10px;"></div></div>
                    <div>/t/ - tap sound: <div class="drawing-area" style="height: 50px; width: 100px; display: inline-block; margin-left: 10px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the pictures that start with /s/:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ sun ☐ moon ☐ star ☐ tree</div>
                    <div>☐ snake ☐ lion ☐ seal ☐ bear</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Sound Hunt: Find three things in the classroom that start with /t/:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>1. <span class="answer-space" style="width: 100px;"></span></div>
                    <div>2. <span class="answer-space" style="width: 100px;"></span></div>
                    <div>3. <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
        `,
        homework: "Find three things at home that start with /p/. Draw them and write the first letter.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Literacy",
        topic: "More Consonant Sounds",
        subtopic: "Learning consonant sounds /m/, /d/, /g/, /l/, /f/, /b/",
        lessonContent: `
            <p>Today we meet more consonant friends! Let's learn how to make these sounds and find them in words.</p>
            <p><strong>New consonant sounds:</strong></p>
            <ul>
                <li>/m/ - like munching: m m m</li>
                <li>/d/ - like drumming: d d d</li>
                <li>/g/ - like gurgling: g g g</li>
                <li>/l/ - like laughing: l l l</li>
                <li>/f/ - like blowing: f f f</li>
                <li>/b/ - like bouncing: b b b</li>
            </ul>
            <p><strong>Where do we find consonant sounds?</strong> Consonants can be at the beginning, middle, or end of words!</p>
            <p><strong>Examples in different positions:</strong></p>
            <ul>
                <li>Beginning: <strong>m</strong>om, <strong>d</strong>og, <strong>g</strong>ame</li>
                <li>Middle: ha<strong>m</strong>mer, la<strong>d</strong>der, ba<strong>g</strong>gy</li>
                <li>End: roo<strong>m</strong>, re<strong>d</strong>, bi<strong>g</strong></li>
            </ul>
            <p><strong>Let's listen carefully!</strong> I'll say some words, and you tell me which consonant sound you hear.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cookie-bite" style="color: #795548;"></i> /m/ Sound</div>
                <p>"Mom" has /m/ at the beginning. "Hammer" has /m/ in the middle. "Room" has /m/ at the end.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-drum" style="color: #3F51B5;"></i> /d/ Sound</div>
                <p>"Dog" starts with /d/. "Ladder" has /d/ in the middle. "Red" ends with /d/.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog" style="color: #4CAF50;"></i> /f/ Sound</div>
                <p>"Fish" starts with /f/. "Coffee" has /f/ in the middle. "Leaf" ends with /f/.</p>
            </div>
        `,
        taskInstructions: "Identify consonant sounds in different positions in words and create your own sound words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these words by their beginning sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>/m/: ☐ moon ☐ dog ☐ fish ☐ mom</div>
                        <div>/d/: ☐ door ☐ ball ☐ duck ☐ girl</div>
                        <div>/b/: ☐ boy ☐ cat ☐ bat ☐ fan</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Middle Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the words that have /m/ in the middle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>hammer ☐ house ☐ lemon ☐ tiger</div>
                        <div>camel ☐ candy ☐ summer ☐ pencil</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the words that have /d/ in the middle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>ladder ☐ lady ☐ radio ☐ rabbit</div>
                        <div>body ☐ book ☐ candy ☐ cup</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: End Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a line to match the word with its ending sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>roo<strong>m</strong> ☐ /b/</div>
                        <div>ca<strong>b</strong> ☐ /m/</div>
                        <div>lea<strong>f</strong> ☐ /g/</div>
                        <div>bi<strong>g</strong> ☐ /f/</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write two words for each consonant sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>/l/: _______________ _______________</div>
                        <div>/g/: _______________ _______________</div>
                        <div>/f/: _______________ _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sound Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw something that starts with /b/. Write the word:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">My /b/ word: ________________</div>
                </div>
            </div>
        `,
        homework: "Find one thing at home for each: something with /m/ sound, something with /d/ sound, something with /b/ sound.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Final Consonant Sounds",
        subtopic: "Learning consonant sounds /j/, /z/, /w/, /v/, /y/, /x/",
        lessonContent: `
            <p>Today we'll meet the last of our consonant friends! These sounds help make our words complete.</p>
            <p><strong>Final consonant sounds:</strong></p>
            <ul>
                <li>/j/ - like jumping: j j j</li>
                <li>/z/ - like buzzing: z z z</li>
                <li>/w/ - like wind: w w w</li>
                <li>/v/ - like vibrating: v v v</li>
                <li>/y/ - like yawning: y y y</li>
                <li>/x/ - like box: x x x (usually at the end)</li>
            </ul>
            <p><strong>Special sounds to notice:</strong></p>
            <ul>
                <li>/x/ often comes at the end: fo<strong>x</strong>, bo<strong>x</strong></li>
                <li>/z/ can buzz in the middle or end: bu<strong>zz</strong>, noi<strong>s</strong>e</li>
                <li>/j/ usually starts words: <strong>j</strong>ump, <strong>j</strong>am</li>
                <li>/v/ and /w/ are different! /v/ uses teeth, /w/ uses lips</li>
            </ul>
            <p><strong>Sound positions practice:</strong></p>
            <ol>
                <li>Beginning: <strong>j</strong>ar, <strong>z</strong>oo, <strong>w</strong>eb, <strong>v</strong>an, <strong>y</strong>es</li>
                <li>Middle: a<strong>z</strong>ure, ne<strong>v</strong>er, a<strong>w</strong>ay</li>
                <li>End: bo<strong>x</strong>, ha<strong>s</strong>, lo<strong>ve</strong></li>
            </ol>
            <p><strong>Let's sound them out!</strong> We'll practice each sound and find them in our classroom words.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bee" style="color: #FFC107;"></i> /z/ Sound</div>
                <p>"Zoo" starts with /z/. "Buzz" has /z/ at the end. "Noise" has /z/ in the middle. Can you buzz like a bee? Zzzzz!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box" style="color: #795548;"></i> /x/ Sound</div>
                <p>"Box" ends with /x/. "Fox" ends with /x/. "Six" ends with /x/. The /x/ sound is like /k/ + /s/ together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind" style="color: #03A9F4;"></i> /w/ vs /v/</div>
                <p>"Wind" starts with /w/ - lips make a circle. "Van" starts with /v/ - teeth touch lip. Try both!</p>
            </div>
        `,
        taskInstructions: "Practice the final consonant sounds and identify them in different word positions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the sound to its picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>/j/ ☐ zebra ☐ jar ☐ vase</div>
                        <div>/z/ ☐ yo-yo ☐ zoo ☐ box</div>
                        <div>/w/ ☐ web ☐ jet ☐ van</div>
                        <div>/v/ ☐ violin ☐ window ☐ yellow</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Beginning Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the beginning consonant sound for each picture:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>[Picture of jar] ____ ar</div>
                        <div>[Picture of yo-yo] ____ o-yo</div>
                        <div>[Picture of web] ____ eb</div>
                        <div>[Picture of van] ____ an</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: End Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the words that end with /z/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>buzz ☐ bus ☐ has ☐ his</div>
                        <div>is ☐ it ☐ as ☐ us</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the words that end with /x/:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>box ☐ fox ☐ six ☐ fix</div>
                        <div>ax ☐ ox ☐ mix ☐ tax</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sound Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find these sounds in the classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Something with /w/: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Something with /j/: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Something with /v/: <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Sound Art</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a picture that ends with /x/. Write the word:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">My word: ______________</div>
                </div>
            </div>
        `,
        homework: "Create a 'sound box' at home with items that have different ending consonant sounds.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Literacy",
        topic: "Consonant Sound Review",
        subtopic: "Putting all consonant sounds together",
        lessonContent: `
            <p>Today we celebrate all our consonant sounds! Let's review everything we learned and show what we know.</p>
            <p><strong>All our consonant sounds:</strong></p>
            <ul>
                <li>/s/ /t/ /p/ /n/ /c/ /k/ /h/ /r/</li>
                <li>/m/ /d/ /g/ /l/ /f/ /b/</li>
                <li>/j/ /z/ /w/ /v/ /y/ /x/</li>
            </ul>
            <p><strong>What we learned about consonants:</strong></p>
            <ol>
                <li>Consonants can be at the beginning, middle, or end of words</li>
                <li>Each consonant has its own special sound</li>
                <li>We need consonants to make words</li>
                <li>Some consonants make similar sounds but are different</li>
            </ol>
            <p><strong>Today's sound celebration activities:</strong></p>
            <ol>
                <li>Consonant Sound Bingo - Find sounds in words</li>
                <li>Sound Sorting Station - Sort words by their consonants</li>
                <li>Consonant Creation - Make your own consonant words</li>
                <li>Sound Story Time - Listen for consonants in a story</li>
            </ol>
            <p><strong>Remember:</strong> You are now consonant experts! You can hear, say, and find consonant sounds everywhere!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bingo" style="color: #E91E63;"></i> Sound Bingo</div>
                <p>"Cat" - beginning /c/, middle /a/, end /t/. Let's mark all the sounds we hear!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort" style="color: #9C27B0;"></i> Sound Sorting</div>
                <p>Words: "sun, tap, pet, net." Let's sort: /s/ words, /t/ words, /p/ words, /n/ words.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-book-reader" style="color: #3F51B5;"></i> Sound Story</div>
                <p>Listen to the story. Every time you hear /m/, tap your desk. Every time you hear /s/, snap your fingers!</p>
            </div>
        `,
        taskInstructions: "Show what you know about consonant sounds through these review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Consonant Bingo</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to the words. Mark the consonant sounds you hear:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/s/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/m/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/t/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/p/</td>
                            </tr>
                            <tr>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/d/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/f/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/b/</td>
                                <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">/g/</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sound Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these words by their beginning sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Words:</strong> sun, mom, top, dog, fan, box, yes, van</div>
                        <div>/s/: _______________</div>
                        <div>/m/: _______________</div>
                        <div>/t/: _______________</div>
                        <div>/d/: _______________</div>
                        <div>/f/: _______________</div>
                        <div>/b/: _______________</div>
                        <div>/y/: _______________</div>
                        <div>/v/: _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Position Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Find where the consonant sound is in each word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"ham" - /m/ is at the: ☐ beginning ☐ middle ☐ end</div>
                        <div>"ladder" - /d/ is at the: ☐ beginning ☐ middle ☐ end</div>
                        <div>"fix" - /x/ is at the: ☐ beginning ☐ middle ☐ end</div>
                        <div>"jump" - /j/ is at the: ☐ beginning ☐ middle ☐ end</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create three words with different consonant sounds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word with /l/: ________________________</div>
                        <div>Word with /r/: ________________________</div>
                        <div>Word with /z/: ________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Consonant Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a consonant expert. Write your three favorite consonant sounds:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My favorite consonant sounds are: ____________, ____________, ____________</div>
                </div>
            </div>
        `,
        homework: "Make consonant sound flashcards for 5 different consonants. Draw a picture on one side, write the letter on the other.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1LiteracyWeek3);
    console.log("literacy-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1LiteracyWeek3);
    console.log("literacy-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1LiteracyWeek3',
        metadata: grade1LiteracyWeek3.metadata,
        days: grade1LiteracyWeek3
    });
    console.log("literacy-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1LiteracyWeek3 = grade1LiteracyWeek3;
console.log("literacy-week3.js loaded and registered successfully");