// Grade 1 Zambian Language (Icibemba) - Term 2 Week 3 Data
const grade1ZambianLanguageWeek3 = {
    metadata: {
        grade: 1,
        subject: "Zambian Language (Icibemba)",
        term: 2,
        week: 3,
        title: "Phonemic Awareness",
        description: "Identifying initial and final sounds, and practicing sound manipulation in Icibemba words"
    },
    
    wednesday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Phonemic Awareness",
        subtopic: "Initial and Final Sounds (Sub-topic 1.7.1)",
        lessonContent: `
            <p>Mwapoleni mukwai! Welcome to our Icibemba language lesson. Today we will learn about the sounds that come at the beginning and end of words.</p>
            <p><strong>Key Question:</strong> Can you hear the first and last sounds in a word?</p>
            <p><strong>Introduction:</strong> Every word in Icibemba is made up of sounds. The first sound we say when we speak a word is called the <strong>initial sound</strong>. The last sound we say is called the <strong>final sound</strong>. Being able to hear these sounds helps us become better readers and speakers!</p>
            <p><strong>Examples in Icibemba:</strong></p>
            <ul>
                <li><strong>Imbwa</strong> (dog) - Initial sound: "I" (ee), Final sound: "a" (ah)</li>
                <li><strong>Mpunga</strong> (rice) - Initial sound: "M" (mm), Final sound: "a" (ah)</li>
                <li><strong>Icibemba</strong> (Bemba language) - Initial sound: "I" (ee), Final sound: "a" (ah)</li>
                <li><strong>Umulilo</strong> (fire) - Initial sound: "U" (oo), Final sound: "o" (oh)</li>
                <li><strong>Akasaka</strong> (sugar) - Initial sound: "A" (ah), Final sound: "a" (ah)</li>
            </ul>
            <p><strong>Why This Matters:</strong> Hearing the first and last sounds in words helps you spell correctly and read new words. When you know that "imbo" (song) starts with "I" and ends with "o," you can write it properly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Picture Connection</div>
                <p>Look at a picture of an <strong>imbwa</strong> (dog). Say the word slowly: I-mm-bw-a. The first sound is "I" and the last sound is "a".</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Food Words</div>
                <p><strong>Ifisabi</strong> (fish) - Initial sound "I", Final sound "i"<br>
                <strong>Umutaba</strong> (groundnuts) - Initial sound "U", Final sound "a"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Clap and Say</div>
                <p>Clap your hands once for each sound you hear. <strong>I-mb-wa</strong> = 3 claps. The first clap is your initial sound, the last clap is your final sound!</p>
            </div>
        `,
        taskInstructions: "Identify initial and final sounds using picture cards and matching activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Initial Sound Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture. Say the word aloud. What is the initial (first) sound?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Picture of a dog (imbwa): Initial sound: _________</div>
                        <div>• Picture of fire (umulilo): Initial sound: _________</div>
                        <div>• Picture of rice (mpunga): Initial sound: _________</div>
                        <div>• Picture of water (amenshi): Initial sound: _________</div>
                        <div>• Picture of a house (inganda): Initial sound: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Final Sound Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at each picture. Say the word aloud. What is the final (last) sound?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Picture of a chicken (inkoko): Final sound: _________</div>
                        <div>• Picture of a tree (umuti): Final sound: _________</div>
                        <div>• Picture of a sun (akasuba): Final sound: _________</div>
                        <div>• Picture of a moon (ukwezi): Final sound: _________</div>
                        <div>• Picture of a child (umwana): Final sound: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Matching Initial Sounds</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line to match pictures that have the SAME initial sound:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; justify-content: space-between;">
                        <div>
                            <div>🐕 Imbwa (dog)</div>
                            <div>🔥 Umulilo (fire)</div>
                            <div>🍚 Mpunga (rice)</div>
                            <div>🏠 Inganda (house)</div>
                        </div>
                        <div>
                            <div>🐄 Inombe (cow)</div>
                            <div>💧 Amenshi (water)</div>
                            <div>🐟 Ifisabi (fish)</div>
                            <div>🌳 Umuti (tree)</div>
                        </div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Circle the Picture</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to the word your teacher says. Circle the picture that starts with the same sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Word: "umuntu" (person) → Which picture? (imbwa / umulilo / umwana)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div style="margin-top: 15px;">Word: "icelo" (morning) → Which picture? (icibemba / inkoko / ifisabi)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Draw and Share</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw one thing that starts with the sound "I" like <strong>imbwa</strong> and one thing that starts with the sound "U" like <strong>umulilo</strong>:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 things at home. Say their names in Icibemba. Tell someone at home the first sound and last sound of each word.",
        homeworkDue: "Next Wednesday"
    },
    
    thursday: {
        subject: "Zambian Language (Icibemba)",
        topic: "Phonemic Awareness",
        subtopic: "Sound Manipulation (Sub-topic 1.7.1)",
        lessonContent: `
            <p>Mwapoleni abana! Today we will play fun games with sounds. We will learn how to take sounds away from words and change sounds to make new words!</p>
            <p><strong>Key Question:</strong> What happens when we remove a sound from a word?</p>
            <p><strong>Introduction:</strong> <strong>Sound manipulation</strong> means changing words by adding, removing, or replacing sounds. This is like playing with building blocks - sounds are the blocks that make words!</p>
            <p><strong>Two Types of Sound Play Today:</strong></p>
            <ol>
                <li><strong>Deletion:</strong> Taking away a sound from a word to see what remains</li>
                <li><strong>Substitution:</strong> Replacing one sound with another to make a new word</li>
            </ol>
            <p><strong>Sound Deletion Examples:</strong></p>
            <ul>
                <li>"Stop" without the "S" → "top" (in English example)</li>
                <li><strong>"Mpunga"</strong> (rice) without the "M" → "punga"</li>
                <li><strong>"Mwana"</strong> (child) without the "M" → "wana"</li>
                <li><strong>"Bwato"</strong> (boat) without the "B" → "wato"</li>
            </ul>
            <p><strong>Sound Substitution Examples:</strong></p>
            <ul>
                <li>Change the first sound of "mwana" (child) from "M" to "K" → "kwana"</li>
                <li>Change the first sound of "bwato" (boat) from "B" to "C" → "cwato"</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Take Away Game</div>
                <p>Say <strong>"kalata"</strong> (letter). Take away "ka" - what remains? "lata"!</p>
                <p>Say <strong>"umwana"</strong> (child). Take away "umu" - what remains? "wana"! (wana means orphan or child in some contexts)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> Sound Swap</div>
                <p>Change the first sound of <strong>"moto"</strong> (fire/motorcar) from "M" to "C" → "coto" (not a real word, but fun to say!)</p>
                <p>Change the first sound of <strong>"nkoko"</strong> (chicken) from "N" to "M" → "mkoko"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> What's Left?</div>
                <p>Teacher says: "Say <strong>ICIBEMBA</strong>. Now say it without <strong>CI</strong>." → "Bemba"</p>
                <p>Teacher says: "Say <strong>UMULILO</strong>. Now say it without <strong>U</strong>." → "mulilo"</p>
            </div>
        `,
        taskInstructions: "Play oral games practicing phoneme substitution and deletion in Icibemba words.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sound Deletion - Take It Away!</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Listen to each word. Say the word without the first sound. What is left?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Mpunga" without "M" → _________</div>
                        <div>• "Bwato" without "B" → _________</div>
                        <div>• "Cipatati" without "Ci" → _________</div>
                        <div>• "Kaseba" without "Ka" → _________</div>
                        <div>• "Musebo" without "Mu" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Deletion Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now take away the LAST sound. What is left?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Imbwa" without "a" → _________</div>
                        <div>• "Cisaka" without "a" → _________</div>
                        <div>• "Mulilo" without "o" → _________</div>
                        <div>• "Inkoko" without "o" → _________</div>
                        <div>• "Kupya" without "a" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sound Substitution - Change the Sound!</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change the first sound to make a new word (can be real or silly!):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Change "M" in "mwana" to "P" → _________</div>
                        <div>• Change "B" in "bwato" to "L" → _________</div>
                        <div>• Change "K" in "kaseba" to "M" → _________</div>
                        <div>• Change "C" in "cipatati" to "F" → _________</div>
                        <div>• Change "N" in "nkoko" to "M" → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Oral Game - Teacher Says</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Listen to your teacher. Follow the instruction:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f0f8ff; padding: 15px; border-radius: 10px;">
                        <p><strong>Game Instructions:</strong> Your teacher will say a word. Then your teacher will tell you to add, remove, or change a sound. You will say the new word out loud!</p>
                        <p><em>Example: Teacher says "ICIBEMBA - remove CI." Student says "BEMBA"</em></p>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;">
                        <p><em>Write or draw what you learned from this game:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Think of an Icibemba word. Write it below. Then show what happens when you remove the first sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My word: _________</div>
                        <div>Without the first sound: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> Now change the first sound of that word to a different sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>New word with different first sound: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Draw a Sound Change</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Draw a picture of something. Then draw what happens when you change the first sound of its name:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Play the sound game with someone at home. Say a word and ask them to remove the first sound. Try 5 different words. Write or draw one example.",
        homeworkDue: "Next Wednesday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1ZambianLanguageWeek3);
    console.log("grade1-zambian-language-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1ZambianLanguageWeek3);
    console.log("grade1-zambian-language-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1ZambianLanguageWeek3',
        metadata: grade1ZambianLanguageWeek3.metadata,
        days: grade1ZambianLanguageWeek3
    });
    console.log("grade1-zambian-language-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1ZambianLanguageWeek3 = grade1ZambianLanguageWeek3;
console.log("grade1-zambian-language-week3.js loaded and registered successfully");