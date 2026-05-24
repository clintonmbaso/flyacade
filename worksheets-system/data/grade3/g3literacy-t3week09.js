// Grade 3 Literacy - Term 3 Week 9 Data
const grade3LiteracyWeek9 = {
    metadata: {
        grade: 3,
        subject: "Literacy",
        term: 3,
        week: 9,
        title: "Dictation Skills",
        description: "Building accuracy in writing dictated phrases and sentences"
    },
    
    monday: {
        subject: "Literacy",
        topic: "Dictation",
        subtopic: "Short Phrases Dictation",
        lessonContent: `
            <p>Welcome to our dictation lesson! Today we will practice listening carefully and writing down short phrases.</p>
            <p><strong>Key Skill:</strong> Listening carefully and writing what you hear</p>
            <p><strong>Tips for Success:</strong></p>
            <ul>
                <li>Listen carefully to each word</li>
                <li>Remember to use capital letters at the start of each phrase</li>
                <li>Use a full stop at the end of each phrase</li>
                <li>Check your spelling</li>
                <li>Write neatly so you can read your work</li>
            </ul>
            <p><strong>Instructions:</strong></p>
            <p>The teacher will read each phrase twice. Listen the first time, then write the phrase in one of the boxes below when the teacher repeats it.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ear-listen"></i> Example</div>
                <p>If the teacher says: <strong>"the big dog"</strong><br>
                You write: <strong>the big dog.</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Remember</div>
                <p>Start each new phrase in a new box. Use your best handwriting!</p>
            </div>
        `,
        taskInstructions: "Write each dictated phrase in a separate box below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Dictation Boxes</strong></p>
                <p><em>Teacher: Read each phrase twice. Students write in the boxes below.</em></p>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px;">
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">1.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">2.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">3.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">4.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">5.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">6.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">7.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">8.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">9.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">10.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">11.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">12.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">13.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">14.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">15.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">16.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">17.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">18.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">19.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                    <div style="border: 2px solid #4A90E2; padding: 10px; min-height: 80px;">
                        <span style="font-size: 12px; color: #4A90E2;">20.</span>
                        <div class="dictation-box" style="min-height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Self-Check</strong></p>
                <div class="task-item">
                    <span class="task-number">✓</span> After the dictation, check your work:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Did you start each phrase with a capital letter?</div>
                        <div>• Did you end each phrase with a full stop?</div>
                        <div>• Did you spell all words correctly?</div>
                        <div>• Is your handwriting neat?</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Practice writing 5 short phrases from a family member. Ask them to read slowly while you write.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Literacy",
        topic: "Dictation",
        subtopic: "Descriptive Phrases Dictation",
        lessonContent: `
            <p>Today we will practice writing longer, more descriptive phrases from dictation!</p>
            <p><strong>Key Skill:</strong> Writing descriptive phrases that include adjectives (describing words)</p>
            <p><strong>What is a descriptive phrase?</strong></p>
            <p>A descriptive phrase tells us more about a person, place, or thing. It uses adjectives like <strong>honest, happy, big, small, red, tall, kind, brave</strong>.</p>
            <p><strong>Example:</strong> Instead of just "a girl" - we write <strong>"an honest girl"</strong></p>
            <p><strong>Tips for Success:</strong></p>
            <ul>
                <li>Listen for the describing word (adjective)</li>
                <li>Remember: use "an" before words starting with a vowel sound (a, e, i, o, u)</li>
                <li>Example: an honest girl (h is silent, so it sounds like "onest" - vowel sound!)</li>
                <li>Write neatly and check your spelling</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Descriptive Phrase Examples</div>
                <p><strong>a happy child</strong> - 'happy' describes the child<br>
                <strong>an excited puppy</strong> - 'excited' describes the puppy<br>
                <strong>the red balloon</strong> - 'red' describes the balloon<br>
                <strong>a brave firefighter</strong> - 'brave' describes the firefighter</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Remember 'an'</div>
                <p>Use <strong>an</strong> before words that start with a, e, i, o, u (vowel sounds):<br>
                an apple, an egg, an igloo, an orange, an umbrella<br>
                Also: an hour, an honest person (silent 'h')</p>
            </div>
        `,
        taskInstructions: "Listen carefully to each descriptive phrase. Write it correctly in the spaces below.",
        taskContent: `
            <div class="content-box">
                <p><strong>Descriptive Phrases Dictation</strong></p>
                <p><em>Teacher: Read each phrase twice. Students write the phrase correctly.</em></p>
                
                <div style="margin-top: 20px;">
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">1.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">2.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">3.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">4.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">5.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">6.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">7.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">8.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">9.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <span style="font-weight: bold;">10.</span>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Challenge: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">✏️</span> Write 3 descriptive phrases of your own. Use interesting adjectives!
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 adjectives (describing words) in a book you are reading. Write them down with a noun (e.g., 'fluffy cat').",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Literacy",
        topic: "Dictation",
        subtopic: "Full Sentences Dictation",
        lessonContent: `
            <p>Today we will put all our skills together and write full sentences from dictation!</p>
            <p><strong>Key Skill:</strong> Writing complete sentences with correct punctuation and spelling</p>
            <p><strong>What makes a complete sentence?</strong></p>
            <ul>
                <li>Starts with a capital letter</li>
                <li>Tells a complete thought</li>
                <li>Ends with a punctuation mark (. ! ?)</li>
            </ul>
            <p><strong>Example:</strong> "There are some happy children here."</p>
            <p>This sentence starts with a capital T, ends with a full stop, and makes complete sense.</p>
            <p><strong>Tips for Sentence Dictation:</strong></p>
            <ul>
                <li>Listen to the whole sentence first</li>
                <li>Think about the words and their order</li>
                <li>Write the capital letter at the beginning</li>
                <li>Remember spaces between words</li>
                <li>Add the correct punctuation at the end</li>
                <li>Read your sentence back to check it makes sense</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Sentence Checklist</div>
                <p>After writing each sentence, check:<br>
                ✓ Capital letter at the start?<br>
                ✓ Spaces between each word?<br>
                ✓ Correct spelling?<br>
                ✓ Punctuation at the end?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-quote-right"></i> Sentence Examples</div>
                <p><strong>"The cat sat on the mat."</strong><br>
                <strong>"What a beautiful day!"</strong><br>
                <strong>"Can you help me, please?"</strong></p>
            </div>
        `,
        taskInstructions: "Listen to each sentence carefully. Write the full sentence correctly in the space provided.",
        taskContent: `
            <div class="content-box">
                <p><strong>Full Sentences Dictation</strong></p>
                <p><em>Teacher: Read each sentence twice. Students write the complete sentence with correct punctuation.</em></p>
                
                <div style="margin-top: 20px;">
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 1:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 2:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 3:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 4:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 5:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 6:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 7:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 8:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 9:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <span style="font-weight: bold;">Sentence 10:</span>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">✓</span> Review your sentences. Put a check in each box:
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                        <div>□ Capital letter at start</div>
                        <div>□ Correct punctuation at end</div>
                        <div>□ Spaces between words</div>
                        <div>□ Neat handwriting</div>
                        <div>□ Spelling is correct</div>
                        <div>□ Sentence makes sense</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">✏️</span> Which sentence was the most difficult? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member to read 3 sentences to you. Write them down and check your work together.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3LiteracyWeek9);
    console.log("grade3-literacy-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3LiteracyWeek9);
    console.log("grade3-literacy-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3LiteracyWeek9',
        metadata: grade3LiteracyWeek9.metadata,
        days: grade3LiteracyWeek9
    });
    console.log("grade3-literacy-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3LiteracyWeek9 = grade3LiteracyWeek9;
console.log("grade3-literacy-week9.js loaded and registered successfully");