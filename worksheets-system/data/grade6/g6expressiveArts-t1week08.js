// Grade 6 Expressive Arts - Week 8 Data
const grade6ExpressiveArtsWeek8 = {
metadata: {
grade: 6,
subject: "Expressive Arts",
week: 8,
title: "Building the Musical Ladder",
description: "Learning to construct the treble staff and map the C Major scale"
},

monday: {
    subject: "Expressive Arts",
    topic: "Notation: Pitch (The Treble Staff)",
    subtopic: "Drawing the Foundation",
    lessonContent: `
        <p>Welcome to our musical journey! Today, we'll learn how pitch is written down and begin building the foundation of music notation.</p>
        <p><strong>Key Concept:</strong> Pitch refers to how high or low a sound is. The staff (or stave) is the foundation where music is written.</p>
        <p><strong>Understanding Pitch:</strong></p>
        <ul>
            <li>High pitches: Birds singing, flute, bells, a child's voice</li>
            <li>Low pitches: Thunder, drum, tuba, an adult's deep voice</li>
            <li>Music uses written symbols to show which pitch to play and for how long</li>
        </ul>
        <p><strong>The Staff - Our Musical Ladder:</strong></p>
        <ul>
            <li>A staff has <strong>five parallel horizontal lines</strong> and <strong>four spaces</strong> between them</li>
            <li>Each line and space represents a different pitch</li>
            <li>We number lines and spaces from the <strong>bottom to the top</strong> (just like building a ladder!)</li>
            <li>Lines: 1 (bottom) through 5 (top)</li>
            <li>Spaces: 1 (between lines 1-2) through 4 (between lines 4-5)</li>
        </ul>
        <p><strong>Drawing the Staff Correctly:</strong></p>
        <ul>
            <li>Always use a <strong>ruler</strong> - music notation requires precision</li>
            <li>Lines should be evenly spaced and parallel</li>
            <li>All five lines must be clearly visible</li>
            <li>Spaces should be the same height as the lines are thick</li>
        </ul>
        <p><strong>The Treble Clef - Our G-Clef:</strong></p>
        <ul>
            <li>The treble clef sits at the beginning of every staff for high-pitched instruments and voices</li>
            <li>It's also called the <strong>"G-clef"</strong> because it curls around the second line</li>
            <li>The second line becomes the note <strong>G</strong></li>
            <li>Drawing tip: Start at the second line, swirl upward, cross back down, and finish with a curl at the bottom</li>
        </ul>
        <p><strong>Why This Matters:</strong> Just as we need the alphabet to write words, musicians need the staff and clef to write music. Today you're learning to write the musical alphabet!</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-music" style="color: #6B46C1;"></i> Staff Anatomy Example</div>
            <p style="font-family: monospace; font-size: 1.2em; line-height: 1.8;">
            ───── Line 5<br>
            ───── Line 4<br>
            ───── Line 3<br>
            ───── Line 2 (Treble clef wraps HERE)<br>
            ───── Line 1<br>
            </p>
            <p><strong>Spaces:</strong> Between line 1-2 (Space 1), line 2-3 (Space 2), line 3-4 (Space 3), line 4-5 (Space 4)</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-pencil-ruler"></i> Using a Ruler</div>
            <p>Place your ruler horizontally. Draw five steady lines from left to right. Check that lines are parallel and spaces are even. This precision helps musicians read music quickly and correctly.</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-draw-polygon"></i> Drawing the Treble Clef</div>
            <p><strong>Step 1:</strong> Start on the second line from the bottom<br>
            <strong>Step 2:</strong> Draw a curved line upward and to the right<br>
            <strong>Step 3:</strong> Loop back down, crossing the second line again<br>
            <strong>Step 4:</strong> Finish with a small curl at the bottom, like a fancy "&" symbol</p>
        </div>
    `,
    taskInstructions: "Complete these activities to master drawing the treble staff and treble clef.",
    taskContent: `
        <div class="task-item">
            <span class="task-number">1</span> Draw a staff using your ruler. Label the following parts:
            <div style="margin-left: 20px; margin-top: 10px;">
                • Line 1 (bottom)<br>
                • Line 5 (top)<br>
                • Space 2<br>
                • Space 4
            </div>
            <div class="drawing-area" style="height: 180px; margin-top: 15px; border: 2px dashed #6B46C1; background-color: #faf8ff;">
                <p style="text-align: center; color: #6B46C1; padding-top: 70px;">Draw your staff with ruler. Label as instructed.</p>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">2</span> Practice drawing the treble clef three times:
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
                <div class="practice-space" style="height: 100px; border: 1px solid #ccc; background-color: #fff;"></div>
                <div class="practice-space" style="height: 100px; border: 1px solid #ccc; background-color: #fff;"></div>
                <div class="practice-space" style="height: 100px; border: 1px solid #ccc; background-color: #fff;"></div>
            </div>
            <p style="margin-top: 10px;"><em>Remember: The treble clef curls around the SECOND line. That line becomes note G!</em></p>
        </div>
        
        <div class="task-item">
            <span class="task-number">3</span> Identify the mistake in each staff description:
            <div style="margin-left: 20px; margin-top: 10px;">
                <div><strong>A.</strong> "My staff has four lines and three spaces."</div>
                <div class="answer-space" style="height: 40px; margin: 5px 0 15px 0;"></div>
                <div><strong>B.</strong> "I numbered my lines from top to bottom: line 1 is the highest."</div>
                <div class="answer-space" style="height: 40px; margin: 5px 0 15px 0;"></div>
                <div><strong>C.</strong> "My treble clef wraps around the third line."</div>
                <div class="answer-space" style="height: 40px;"></div>
            </div>
        </div>
        
        <div class="task-item">
            <span class="task-number">4</span> Complete the sentence:
            <p style="margin-top: 10px; font-style: italic;">"The staff is like a musical ladder because ______________________</p>
            <div class="answer-space" style="height: 60px;"></div>
        </div>
        
        <div class="task-item">
            <span class="task-number">5</span> <strong>Challenge:</strong> Draw a complete treble staff (five lines, treble clef) and label the note on line 2:
            <div class="drawing-area" style="height: 150px; margin-top: 15px; border: 2px solid #4A90E2;"></div>
        </div>
    `,
    homework: "Practice drawing five perfect treble staves with treble clefs. Use a ruler and bring your best one to share next class.",
    homeworkDue: "Thursday"
},

thursday: {
    subject: "Expressive Arts",
    topic: "Notation: Pitch (C Major)",
    subtopic: "Mapping the C Major Scale",
    lessonContent: `
        <p>Now that we can build the staff, it's time to add notes! Today we'll map the C Major scale - the foundation of Western music.</p>
        <p><strong>Key Concept:</strong> The C Major scale uses only the white notes on a piano and has no sharps or flats. It's our musical home base.</p>
        <p><strong>Review:</strong> The treble staff gives us lines and spaces. The treble clef tells us that line 2 = G. Today we'll learn all the notes from Middle C up to High C.</p>
        <p><strong>Introducing Ledger Lines:</strong></p>
        <ul>
            <li>What happens when notes go above or below the five staff lines?</li>
            <li>We use <strong>ledger lines</strong> - small extra lines drawn just for that note</li>
            <li><strong>Middle C</strong> sits on its own ledger line below the staff (line 1, but lower!)</li>
            <li>Ledger lines are the same length as the note head, not across the whole staff</li>
        </ul>
        <p><strong>The C Major Scale on Treble Staff:</strong></p>
        <ul>
            <li><strong>Middle C:</strong> First ledger line below staff</li>
            <li><strong>D:</strong> Space below staff (just above Middle C)</li>
            <li><strong>E:</strong> Line 1 (bottom line)</li>
            <li><strong>F:</strong> Space 1</li>
            <li><strong>G:</strong> Line 2 (where treble clef curls)</li>
            <li><strong>A:</strong> Space 2</li>
            <li><strong>B:</strong> Line 3</li>
            <li><strong>C (High):</strong> Space 3</li>
        </ul>
        <p><strong>No Sharps or Flats:</strong> In C Major, every note is "natural." There are no black keys, no # or ♭ symbols. This makes it the perfect scale for beginners!</p>
        <p><strong>Note Heads:</strong> Notes are drawn as oval shapes, slightly tilted. They fill the space or sit squarely on the line.</p>
    `,
    examples: `
        <div class="example-box">
            <div class="example-title"><i class="fas fa-arrow-down"></i> Middle C Example</div>
            <p style="font-family: monospace; background: #f0f0f0; padding: 10px;">
            ─────<br>
            ─────<br>
            ─────<br>
            ─────<br>
            ─────<br>
            <span style="margin-left: 30px;">──●──</span> (Ledger line)<br>
            </p>
            <p>Middle C lives on its own little line below the staff. This is our starting point!</p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-sort-amount-up-alt"></i> C Major Scale - Full Map</div>
            <p style="font-family: monospace; line-height: 2;">
            Space 3: ● High C<br>
            Line 3:  ● B<br>
            Space 2: ● A<br>
            Line 2:  ● G (Treble clef wraps here!)<br>
            Space 1: ● F<br>
            Line 1:  ● E<br>
            Space below: ● D<br>
            Ledger: ● Middle C<br>
            </p>
        </div>
        <div class="example-box">
            <div class="example-title"><i class="fas fa-check-circle"></i> Accuracy Check</div>
            <p>In C Major, there are <strong>no sharps (#) or flats (b)</strong>. If you see one in your scale, check your note placement! Only the white piano keys are used.</p>
        </div>
    `,
    taskInstructions: "Construct the treble staff and map the complete C Major scale from Middle C to High C.",
    taskContent: `
        <div class="content-box">
            <p><strong>Part A: Building the Scale</strong></p>
            <div class="task-item">
                <span class="task-number">1</span> Draw a treble staff with treble clef. Place and label the following notes in order:
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0; justify-content: center;">
                    <span style="background: #6B46C1; color: white; padding: 8px 15px; border-radius: 20px;">Middle C</span>
                    <span style="background: #4A90E2; color: white; padding: 8px 15px; border-radius: 20px;">D</span>
                    <span style="background: #50C878; color: white; padding: 8px 15px; border-radius: 20px;">E</span>
                    <span style="background: #FFB347; color: white; padding: 8px 15px; border-radius: 20px;">F</span>
                    <span style="background: #FF6B6B; color: white; padding: 8px 15px; border-radius: 20px;">G</span>
                    <span style="background: #9B59B6; color: white; padding: 8px 15px; border-radius: 20px;">A</span>
                    <span style="background: #3498DB; color: white; padding: 8px 15px; border-radius: 20px;">B</span>
                    <span style="background: #E67E22; color: white; padding: 8px 15px; border-radius: 20px;">High C</span>
                </div>
                <div class="drawing-area" style="height: 250px; border: 2px solid #6B46C1; background-color: #faf8ff;">
                    <p style="text-align: center; color: #6B46C1; padding-top: 110px;">Draw your staff and place all eight notes in correct positions.</p>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part B: Note Placement</strong></p>
            <div class="task-item">
                <span class="task-number">2</span> Complete the table by writing whether each note is on a LINE, SPACE, or LEDGER LINE:
                <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
                    <tr style="background-color: #f0f0f0;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Note</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Line / Space / Ledger?</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Number (if line or space)</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Middle C</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">E</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">G</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">B</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">High C</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part C: Error Detection</strong></p>
            <div class="task-item">
                <span class="task-number">3</span> A student drew a C Major scale but made three mistakes. Identify them:
                <div style="background-color: #fff0f0; padding: 20px; margin: 15px 0; border-left: 4px solid #FF6B6B;">
                    <p><strong>Student's scale description:</strong></p>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li>✓ Middle C on ledger line ✓ D in space below ✓ E on line 1</li>
                        <li>✗ F on line 1 ✗ G on space 2 ✗ A on line 3</li>
                        <li>✗ B on space 3 ✓ High C on space 3 (they wrote it twice?)</li>
                        <li>✓ No sharps or flats</li>
                    </ul>
                </div>
                <div class="answer-space" style="height: 100px;"></div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part D: Final Performance Task</strong></p>
            <div class="task-item">
                <span class="task-number">4</span> Draw your final, clean version of the C Major scale on the treble staff:
                <p><em>This should meet the expected standard: correct staff, correct treble clef, all eight notes in the right positions, no sharps or flats.</em></p>
                <div class="drawing-area" style="height: 250px; margin-top: 15px; border: 3px solid #4A90E2; background-color: #ffffff;">
                    <p style="text-align: center; color: #666; padding-top: 110px;">Draw your final C Major scale here.</p>
                </div>
            </div>
        </div>
        
        <div class="content-box">
            <p><strong>Part E: Reflection</strong></p>
            <div class="task-item">
                <span class="task-number">5</span> Why do you think C Major is often the first scale musicians learn? Give two reasons:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
        </div>
    `,
    homework: "On a blank sheet, draw a treble staff and the complete C Major scale. This will be displayed in our Music Corner. Use ruler, label all notes clearly.",
    homeworkDue: "Monday"
}
    
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
window.registerWorksheet(grade6ExpressiveArtsWeek8);
console.log("expressiveArts-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
window.DataLoader.registerWorksheet(grade6ExpressiveArtsWeek8);
console.log("expressiveArts-week8.js registered using DataLoader.registerWorksheet()");
} else {
// Fallback: store in global array
if (!window.registeredWorksheets) {
window.registeredWorksheets = [];
}
window.registeredWorksheets.push({
variableName: 'grade6ExpressiveArtsWeek8',
metadata: grade6ExpressiveArtsWeek8.metadata,
days: grade6ExpressiveArtsWeek8
});
console.log("expressiveArts-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ExpressiveArtsWeek8 = grade6ExpressiveArtsWeek8;
console.log("expressiveArts-week8.js loaded and registered successfully");