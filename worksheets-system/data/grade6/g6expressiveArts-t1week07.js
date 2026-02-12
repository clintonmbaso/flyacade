// Grade 6 Expressive Arts - Week 7 Data
const grade6ExpressiveArtsWeek7 = {
metadata: {
grade: 6,
subject: "Expressive Arts",
week: 7,
title: "Feeling the Beat",
description: "Learning about rhythmic patterns, note values, and time signatures in music"
},

monday: {
    subject: "Expressive Arts",
    topic: "Notation: Rhythm",
    subtopic: "Feeling the Beat",
    lessonContent: `
        <p>Welcome to our exploration of rhythm in music! Today, we'll discover how rhythm acts as the "heartbeat" that gives music its pulse and energy.</p>
        <p><strong>Key Concept:</strong> Rhythm is the pattern of sounds and silences in music. It's what makes us tap our feet and clap along!</p>
        <p><strong>Basic Note Values:</strong></p>
        <ul>
            <li><strong>Crotchet (Quarter Note):</strong> ♩ = 1 beat. Say "ta" when clapping.</li>
            <li><strong>Quaver (Eighth Note):</strong> ♪ = ½ beat. Two quavers = 1 beat. Say "ti-ti" when clapping.</li>
            <li><strong>Crotchet Rest:</strong> 𝄽 = 1 beat of silence. Say "shh" quietly.</li>
        </ul>
        <p><strong>Creating Rhythmic Patterns:</strong></p>
        <ul>
            <li>Combine long and short sounds to create interesting patterns</li>
            <li>Rests add silence and surprise to rhythms</li>
            <li>Patterns repeat and vary to create musical phrases</li>
            <li>Rhythm can be clapped, tapped, played on instruments, or even spoken</li>
        </ul>
        <p><strong>Rhythm in Daily Life:</strong> Listen for rhythms all around you—your heartbeat, a ticking clock, footsteps, rain on the roof. Music takes these natural rhythms and organizes them!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-music" style="color: #4A90E2;"></i> Simple 4-Beat Pattern</div>
            <p style="font-size: 1.2em; font-family: monospace;">♩ ♩ ♩ ♩  =  "ta ta ta ta"</p>
            <p>Four steady beats. This is like walking at a steady pace.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-music" style="color: #4A90E2;"></i> Pattern with Quavers</div>
            <p style="font-size: 1.2em; font-family: monospace;">♪ ♪ ♩ ♪ ♪ ♩  =  "ti-ti ta ti-ti ta"</p>
            <p>Two quick beats followed by one long beat. This is like running then walking.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-music" style="color: #4A90E2;"></i> Pattern with Rests</div>
            <p style="font-size: 1.2em; font-family: monospace;">♩ 𝄽 ♩ ♩  =  "ta shh ta ta"</p>
            <p>A moment of silence adds interest to the pattern.</p>
        </div>
    `,
    taskInstructions: "Complete these activities to practice clapping, identifying, and creating rhythmic patterns.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Clap and Count: Write the counting syllables ("ta" or "ti-ti") under each rhythm pattern, then practice clapping:
            <div style="margin-top: 15px; margin-bottom: 15px;">
                <div style="font-size: 1.3em; font-family: monospace; background-color: #f0f7ff; padding: 10px; border-radius: 5px;">
                    A. ♩ ♩ ♪ ♪ ♩
                </div>
                <div class="answer-space" style="height: 40px; border-bottom: 1px dashed #999; margin-bottom: 15px;"></div>
                
                <div style="font-size: 1.3em; font-family: monospace; background-color: #f0f7ff; padding: 10px; border-radius: 5px;">
                    B. ♪ ♪ ♪ ♪ ♩ ♩
                </div>
                <div class="answer-space" style="height: 40px; border-bottom: 1px dashed #999; margin-bottom: 15px;"></div>
                
                <div style="font-size: 1.3em; font-family: monospace; background-color: #f0f7ff; padding: 10px; border-radius: 5px;">
                    C. ♩ 𝄽 ♪ ♪ ♩
                </div>
                <div class="answer-space" style="height: 40px; border-bottom: 1px dashed #999; margin-bottom: 15px;"></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Call and Response: The teacher will clap a 4-beat pattern. Listen carefully, then write the pattern using note symbols:
            <div style="margin-top: 15px;">
                <div><strong>Pattern 1:</strong> <span style="margin-left: 10px;">____________________</span></div>
                <div style="margin-top: 10px;"><strong>Pattern 2:</strong> <span style="margin-left: 10px;">____________________</span></div>
                <div style="margin-top: 10px;"><strong>Pattern 3:</strong> <span style="margin-left: 10px;">____________________</span></div>
            </div>
            <div style="margin-top: 20px; padding: 10px; background-color: #fff9e6; border-left: 4px solid #FFB74D;">
                <p style="margin: 0;"><strong>Challenge:</strong> Create your own 4-beat pattern and teach it to a partner!</p>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Rhythm Composition: Create two different 4-beat rhythm patterns. Use a mix of crotchets (♩), quavers (♪♪), and rests (𝄽).
            <div style="display: flex; gap: 30px; margin-top: 20px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 200px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">My Pattern A:</div>
                    <div style="display: flex; gap: 5px; font-size: 1.8em; align-items: center;">
                        <span>|</span>
                        <span>___</span> <span>___</span> <span>___</span> <span>___</span>
                        <span>|</span>
                    </div>
                    <div style="margin-top: 5px; font-style: italic; color: #666;">(Draw note symbols in the blanks)</div>
                </div>
                <div style="flex: 1; min-width: 200px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">My Pattern B:</div>
                    <div style="display: flex; gap: 5px; font-size: 1.8em; align-items: center;">
                        <span>|</span>
                        <span>___</span> <span>___</span> <span>___</span> <span>___</span>
                        <span>|</span>
                    </div>
                    <div style="margin-top: 5px; font-style: italic; color: #666;">(Draw note symbols in the blanks)</div>
                </div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> Group Rhythm Practice: In pairs or small groups, practice playing one steady beat while your partner claps a rhythm. Describe your experience:
            <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
            <div style="margin-top: 15px; display: flex; gap: 20px;">
                <div style="flex: 1; padding: 10px; background-color: #e8f5e9; border-radius: 5px;">
                    <strong>Group A:</strong> Steady beat (♩ ♩ ♩ ♩)
                </div>
                <div style="flex: 1; padding: 10px; background-color: #e3f2fd; border-radius: 5px;">
                    <strong>Group B:</strong> Rhythm (♪ ♪ ♩ ♪ ♪ ♩)
                </div>
            </div>
        </div>
    `,
    homework: "Find a song you enjoy and clap along with its rhythm. Write down the pattern of one phrase of the song using note symbols (♩ ♪ 𝄽). Be ready to share next class!",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "Expressive Arts",
    topic: "Notation: Time Signature",
    subtopic: "Organizing the Rhythm",
    lessonContent: `
        <p>Today we'll learn how time signatures organize rhythm into neat, countable measures. Think of time signatures as the "container" that holds our rhythmic patterns!</p>
        <p><strong>Key Concept:</strong> A time signature appears at the beginning of a piece of music and tells us how many beats are in each measure and which note value gets one beat.</p>
        <p><strong>Understanding Time Signatures:</strong></p>
        <ul>
            <li><strong>Top number:</strong> How many beats in each measure</li>
            <li><strong>Bottom number:</strong> Which note value gets one beat (4 = crotchet/quarter note)</li>
        </ul>
        <p><strong>Common Time Signatures:</strong></p>
        <ul>
            <li><strong>2/4 Time:</strong> Two beats per measure. Feels like MARCH-ing (1-2, 1-2).</li>
            <li><strong>3/4 Time:</strong> Three beats per measure. Feels like WALTZ-ing (1-2-3, 1-2-3).</li>
            <li><strong>4/4 Time:</strong> Four beats per measure. Feels like WALK-ing (1-2-3-4, 1-2-3-4).</li>
        </ul>
        <p><strong>Bar Lines and Measures:</strong> Bar lines are vertical lines that divide music into measures. Each measure must contain exactly the number of beats shown by the time signature.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-clock" style="color: #4A90E2;"></i> 2/4 Time Signature</div>
            <p style="font-family: monospace; font-size: 1.2em;">| ♩ ♩ | ♪ ♪ ♩ |</p>
            <p>Two beats in each measure. Count: 1-2, 1-2</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-clock" style="color: #4A90E2;"></i> 3/4 Time Signature</div>
            <p style="font-family: monospace; font-size: 1.2em;">| ♩ ♩ ♩ | ♩ ♪ ♪ |</p>
            <p>Three beats in each measure. Count: 1-2-3, 1-2-3</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-clock" style="color: #4A90E2;"></i> 4/4 Time Signature</div>
            <p style="font-family: monospace; font-size: 1.2em;">| ♩ ♩ ♩ ♩ | ♪ ♪ ♪ ♪ ♩ ♩ |</p>
            <p>Four beats in each measure. Count: 1-2-3-4, 1-2-3-4</p>
        </div>
    `,
    taskInstructions: "Practice applying time signatures to rhythms and creating your own measured compositions.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Bar Line Placement</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Add bar lines (|) to divide these rhythms into measures based on the given time signature:
                <div style="margin-top: 20px;">
                    <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px;">
                        <div><strong>2/4 Time:</strong> ♩ ♩ ♪ ♪ ♩ ♩ ♩</div>
                        <div style="font-family: monospace; font-size: 1.3em; margin: 10px 0;">
                            _________________________
                        </div>
                    </div>
                    <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 15px;">
                        <div><strong>3/4 Time:</strong> ♩ ♩ ♩ ♪ ♪ ♩ ♩ ♩ ♩</div>
                        <div style="font-family: monospace; font-size: 1.3em; margin: 10px 0;">
                            _________________________
                        </div>
                    </div>
                    <div style="background-color: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 15px;">
                        <div><strong>4/4 Time:</strong> ♩ ♩ ♩ ♩ ♪ ♪ ♪ ♪ ♩ 𝄽 ♩ ♩</div>
                        <div style="font-family: monospace; font-size: 1.3em; margin: 10px 0;">
                            _________________________
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Rhythm Composition</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Compose your own 4-bar rhythm. Choose a time signature and write one rhythm in each box:
                <div style="margin-top: 20px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <span style="font-weight: bold;">Time Signature:</span>
                        <label style="margin-left: 10px;"><input type="radio" name="timesig"> 2/4</label>
                        <label style="margin-left: 10px;"><input type="radio" name="timesig"> 3/4</label>
                        <label style="margin-left: 10px;"><input type="radio" name="timesig"> 4/4</label>
                    </div>
                    <div style="display: flex; font-size: 1.5em; font-family: monospace; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
                        <span>|</span>
                        <span style="flex: 1; text-align: center;">_____ _____ _____ _____</span>
                        <span>|</span>
                        <span style="flex: 1; text-align: center;">_____ _____ _____ _____</span>
                        <span>|</span>
                        <span style="flex: 1; text-align: center;">_____ _____ _____ _____</span>
                        <span>|</span>
                        <span style="flex: 1; text-align: center;">_____ _____ _____ _____</span>
                        <span>|</span>
                    </div>
                    <p style="margin-top: 10px; font-style: italic; color: #666;">Draw note symbols (♩ ♪ 𝄽) in the blanks. Each bar must equal your time signature's beat count.</p>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Auditory Identification</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> Your teacher will clap three rhythms. Circle whether each feels like it's in 3 beats or 4 beats:
                <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                    <div><strong>Rhythm A:</strong> 3 beats / 4 beats</div>
                    <div><strong>Rhythm B:</strong> 3 beats / 4 beats</div>
                    <div><strong>Rhythm C:</strong> 3 beats / 4 beats</div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background-color: #fff0f0; border-left: 4px solid #FF6B6B;">
                    <p style="margin: 0;"><strong>Explain:</strong> What clues helped you decide whether a rhythm was in 3 or 4?</p>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Time Signature Match-Up</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Draw a line to match each song style with its most likely time signature:
                <div style="display: flex; justify-content: space-between; margin-top: 20px; flex-wrap: wrap;">
                    <div style="flex: 1;">
                        <div style="margin-bottom: 15px;">• Marching band song</div>
                        <div style="margin-bottom: 15px;">• Waltz</div>
                        <div style="margin-bottom: 15px;">• Pop/rock song</div>
                        <div style="margin-bottom: 15px;">• Lullaby in 3</div>
                    </div>
                    <div style="flex: 0.5; text-align: center;">
                        <div style="margin-bottom: 15px;">⬅️</div>
                        <div style="margin-bottom: 15px;">⬅️</div>
                        <div style="margin-bottom: 15px;">⬅️</div>
                        <div style="margin-bottom: 15px;">⬅️</div>
                    </div>
                    <div style="flex: 1;">
                        <div style="margin-bottom: 15px;">2/4</div>
                        <div style="margin-bottom: 15px;">3/4</div>
                        <div style="margin-bottom: 15px;">4/4</div>
                        <div style="margin-bottom: 15px;">3/4</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Review and Reflect</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Why do time signatures matter in music? What would music be like without them?
                <div class="answer-space" style="height: 100px; margin-top: 15px;"></div>
            </div>
        </div>
    `,
    homework: "Find a piece of music at home or online. Listen carefully and identify its time signature (2/4, 3/4, or 4/4). Write down the song title and explain how you knew which time signature it uses.",
    homeworkDue: "Monday"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6ExpressiveArtsWeek7);
console.log("expressiveArts-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek7);
console.log("expressiveArts-week7.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6ExpressiveArtsWeek7',
metadata: grade6ExpressiveArtsWeek7.metadata,
days: grade6ExpressiveArtsWeek7
});
console.log("expressiveArts-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek7 = grade6ExpressiveArtsWeek7;
console.log("expressiveArts-week7.js loaded and registered successfully");