// Grade Middle - Zambian Language (Icibemba) - Term 3 Week 2 Data
const icibembaTerm3Week2 = {
    metadata: {
        grade: "middle",
        subject: "Zambian Language (Icibemba)",
        term: 3,
        week: 2,
        title: "Syllables & Word Parts",
        description: "Identifying syllables and blending syllables to form simple words in Icibemba"
    },
    
    monday: {
        subject: "Icibemba",
        topic: "Phonology",
        subtopic: "Identifying Syllables – Listening to and identifying syllable beats in simple oral words",
        lessonContent: `
            <p>Mwaiseni! Welcome to our Icibemba language lesson. Today we'll learn about syllables - the beats that make up words in Icibemba.</p>
            <p><strong>Key Question:</strong> How can we hear the different beats (syllables) inside words?</p>
            <p><strong>Introduction:</strong> A <strong>syllable</strong> is a single unit of sound that forms part of a word. Every time you say a word, you can clap the beats. In Icibemba, most syllables end with a vowel sound (a, e, i, o, u).</p>
            <p><strong>What is a Syllable?</strong></p>
            <ul>
                <li>A syllable is like a "beat" in a word</li>
                <li>Each syllable usually contains one vowel sound</li>
                <li>You can clap your hands for each syllable you hear</li>
                <li>Knowing syllables helps you read, write, and pronounce words correctly</li>
            </ul>
            <p><strong>Examples in Icibemba:</strong></p>
            <ol>
                <li><strong>mu-lu-mo</strong> (work) - 3 syllables</li>
                <li><strong>i-shi-ku</strong> (day) - 3 syllables</li>
                <li><strong>u-mu-ana</strong> (child) - 4 syllables</li>
                <li><strong>ku-lya</strong> (to eat) - 2 syllables</li>
                <li><strong>be-ne</strong> (they themselves) - 2 syllables</li>
            </ol>
            <p><strong>How to Identify Syllables:</strong></p>
            <ul>
                <li>Say the word slowly, listening for the natural breaks</li>
                <li>Place your hand under your chin - each time your chin drops is a syllable</li>
                <li>Clap once for each sound group you hear</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hands-clapping"></i> Clapping Game</div>
                <p>Say "u-mu-ana" (child) - clap three times! Each clap is one syllable. Try it: u (clap) - mu (clap) - a-na (clap).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Chin Drop Method</div>
                <p>Put your hand under your chin. Say "ka-shi-ta" (school). Feel your chin drop three times? That's three syllables!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Every Syllable Needs a Vowel</div>
                <p>In Icibemba, every syllable has at least one vowel. Words like "ng'anda" (house) has a special nasal sound, but still has two syllables: ng'a-nda.</p>
            </div>
        `,
        taskInstructions: "Listen to words, clap the beats, and identify how many syllables each word has.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Clap the Beats</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to each word and clap the syllables. Write the number of syllables:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. u-mu-ndu (person): ______ syllables</div>
                        <div>b. n-su-bo (fish): ______ syllables</div>
                        <div>c. i-pa-nga (group): ______ syllables</div>
                        <div>d. ku-bo-mba (to build): ______ syllables</div>
                        <div>e. chi-tu-nga (town/city): ______ syllables</div>
                        <div>f. ka-tu-ndu (thing): ______ syllables</div>
                        <div>g. mu-ku-lu (old/big): ______ syllables</div>
                        <div>h. u-bu-shi (night): ______ syllables</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Syllable Breaks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines or circles to show where each syllable breaks in these words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: <strong>mu•lu•mo</strong> (work)</div>
                        <div>a. i•ci•tu (market): i c i t u</div>
                        <div class="answer-space" style="height: 20px; margin-bottom: 10px;"></div>
                        <div>b. u•lu•se (face): u l u s e</div>
                        <div class="answer-space" style="height: 20px; margin-bottom: 10px;"></div>
                        <div>c. a•ma•shi (water): a m a s h i</div>
                        <div class="answer-space" style="height: 20px; margin-bottom: 10px;"></div>
                        <div>d. mu•lu•me (husband/man): m u l u m e</div>
                        <div class="answer-space" style="height: 20px; margin-bottom: 10px;"></div>
                        <div>e. a•ba•na (children): a b a n a</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Listen and Count</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will say these words aloud. Listen carefully and write how many syllables you hear:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word 1 (teacher says): ______ syllables</div>
                        <div>Word 2 (teacher says): ______ syllables</div>
                        <div>Word 3 (teacher says): ______ syllables</div>
                        <div>Word 4 (teacher says): ______ syllables</div>
                        <div>Word 5 (teacher says): ______ syllables</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Word</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of something with 2 syllables (like "mu-lu-mo" - work), then draw something with 3 syllables:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 Icibemba words at home (objects, family members, actions). Write each word, clap the syllables, and record the number of syllables.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Icibemba",
        topic: "Phonology",
        subtopic: "Blending Syllables – Putting individual syllable sounds together orally to form a simple word",
        lessonContent: `
            <p>Mwaiseni! Today we will learn how to blend syllables together to form complete words in Icibemba.</p>
            <p><strong>Key Question:</strong> How can we put separate syllable sounds together to make a real word?</p>
            <p><strong>Introduction:</strong> Blending is the opposite of breaking words apart. Instead of taking a word and finding its syllables (like "mu-lu-mo"), we take syllables and push them together to make a word!</p>
            <p><strong>What is Blending?</strong></p>
            <ul>
                <li>Blending means putting individual sounds or syllables together smoothly</li>
                <li>When you blend, you say the sounds faster and faster until they become one word</li>
                <li>Example: m-u → mu, then mu-l-u → mulu, then mulu-m-o → mulumo!</li>
            </ul>
            <p><strong>Steps to Blend Syllables:</strong></p>
            <ol>
                <li>Look at the first syllable and say it out loud</li>
                <li>Add the second syllable right after without pausing</li>
                <li>Continue adding each syllable until you hear the complete word</li>
                <li>Say the whole word smoothly</li>
            </ol>
            <p><strong>Practice Blending:</strong></p>
            <ul>
                <li>ku + la → kula (to grow)</li>
                <li>mu + no → muno (inside)</li>
                <li>ci + la → cila (every/all)</li>
                <li>u + lu + se → uluse (face)</li>
                <li>i + ci + tu → icitu (market)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Puzzle Piece Blending</div>
                <p>Think of syllables like puzzle pieces. "ka" + "shi" + "ta" - when you put them together, they make "kashita" (school)! Each piece connects to make one complete word.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-train"></i> Train Car Blending</div>
                <p>Say each syllable like a train car. Start slow: mu (car 1), then mu-lu (add car 2), then mu-lu-mo (add car 3). Now say it fast: MULUMO! You've made a word!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-magic"></i> Magic Blending</div>
                <p>Listen: "u" - "mu" - "ana". Say each one, then push them together: u-mu-ana → UMUANA (child)! It's like magic when syllables become a word.</p>
            </div>
        `,
        taskInstructions: "Practice blending syllables together to form simple Icibemba words, both aloud and in writing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Blend the Syllables</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Blend these syllables together and write the complete word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. ku + la = ______</div>
                        <div>b. mu + no = ______</div>
                        <div>c. ci + la = ______</div>
                        <div>d. i + shi + ku = ______</div>
                        <div>e. u + mu + ana = ______</div>
                        <div>f. ka + shi + ta = ______</div>
                        <div>g. chi + tu + nga = ______</div>
                        <div>h. a + ma + shi = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Read Aloud Blending Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Practice saying these syllable chunks. Blend them together smoothly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• u • lu • se → Say it 3 times fast: ____________</div>
                        <div>• i • ci • tu → Say it 3 times fast: ____________</div>
                        <div>• mu • lu • me → Say it 3 times fast: ____________</div>
                        <div>• u • bu • shi → Say it 3 times fast: ____________</div>
                        <div>• a • ba • na → Say it 3 times fast: ____________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;">
                        <p><em>Write the blended words here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Teacher Says - You Blend</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your teacher will say syllables slowly. Blend them in your head, then say and write the complete word:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Teacher says: "ka - sa - ba" → You say/write: ____________</div>
                        <div>Teacher says: "mu - ku - lu" → You say/write: ____________</div>
                        <div>Teacher says: "ci - se - be" → You say/write: ____________</div>
                        <div>Teacher says: "lu - pa - to" → You say/write: ____________</div>
                        <div>Teacher says: "u - mu - pe" → You say/write: ____________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose 3 Icibemba words you know. Break them into syllables, then write them as a blending puzzle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Example: mo-to → m + o + t + o</div>
                        <div>Word 1: ______ → ______ + ______ + ______</div>
                        <div>Word 2: ______ → ______ + ______ + ______</div>
                        <div>Word 3: ______ → ______ + ______ + ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Partner Blending Game</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> With a partner, take turns saying syllables slowly. Your partner must blend and say the full word:
                    <div class="answer-space" style="height: 80px;">
                        <p><em>Write one word you practiced with your partner:</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice blending at home! Ask a family member to say 5 words slowly (syllable by syllable). Blend them and say the full word. Write the 5 words you practiced.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(icibembaTerm3Week2);
    console.log("icibemba-term3-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(icibembaTerm3Week2);
    console.log("icibemba-term3-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'icibembaTerm3Week2',
        metadata: icibembaTerm3Week2.metadata,
        days: icibembaTerm3Week2
    });
    console.log("icibemba-term3-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.icibembaTerm3Week2 = icibembaTerm3Week2;
console.log("icibemba-term3-week2.js loaded and registered successfully");