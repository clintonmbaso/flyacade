// Grade 3 English - Week 5 Data (Asking for and Giving Directions)
const grade3EnglishWeek5 = {
    metadata: {
        grade: 3,
        subject: "English",
        week: 5,
        title: "Finding Our Way — Learning to Ask and Give Directions",
        description: "Learning direction vocabulary, cardinal points, polite asking, and giving clear instructions"
    },
    
    monday: {
        subject: "English",
        topic: "The Vocabulary of Movement",
        subtopic: "Identifying and using basic direction words (forward, backward, left, right, turn)",
        lessonContent: `
            <p>Welcome to our English lesson! Today we will learn words that help us describe movement and give directions.</p>
            <p><strong>Key Concept:</strong> We use special "action words" to tell people how to move from one place to another.</p>
            <p><strong>Movement Vocabulary:</strong></p>
            <ul>
                <li><strong>Forward</strong> - Moving ahead, toward what's in front of you</li>
                <li><strong>Backward</strong> - Moving back, toward what's behind you</li>
                <li><strong>Left</strong> - The side where your heart is NOT (for most people)</li>
                <li><strong>Right</strong> - The side where your heart IS (for most people)</li>
                <li><strong>Turn</strong> - To change the direction you're facing</li>
            </ul>
            <p><strong>Why are these words important?</strong> They help us give clear instructions and follow directions safely!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking" style="color: #4CAF50;"></i> Movement Example</div>
                <p>"Take two steps forward." - This tells someone to move ahead two steps.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-right" style="color: #2196F3;"></i> Direction Example</div>
                <p>"Turn right at the corner." - This tells someone to change direction to the right side.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Simon Says Game!</div>
                <p>Let's play "Simon Says" with movement commands! "Simon says take three steps forward!"</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to practice movement vocabulary.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Match each movement word with its picture:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Picture of arrow pointing ahead → ☐ Backward</div>
                    <div>Picture of arrow pointing left → ☐ Forward</div>
                    <div>Picture of arrow pointing back → ☐ Left</div>
                    <div>Picture of curved arrow → ☐ Right</div>
                    <div>Picture of arrow pointing right → ☐ Turn</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Robot Commander Game:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <p>Work with a partner. One person closes their eyes (the "robot"). The other gives commands using ONLY these words: forward, backward, left, right, turn. Guide your robot to touch the classroom door.</p>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Commands I used: ______________________________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Grid Directions:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <p>Draw a 4x4 grid in your notebook. Mark 'X' at the start (top left) and '★' at the end (bottom right). Write 4 commands to get from X to ★:</p>
                    <div style="margin-left: 20px;">
                        <div>1. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>4. <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Body Movement Practice:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Complete these actions:</div>
                    <div>• Raise your <span class="answer-space" style="width: 80px;"></span> hand. (left/right)</div>
                    <div>• Take one step <span class="answer-space" style="width: 80px;"></span>. (forward/backward)</div>
                    <div>• <span class="answer-space" style="width: 80px;"></span> to face the window. (Turn/Walk)</div>
                </div>
            </div>
        `,
        homework: "Find three objects at home. Write one movement command for each (Example: 'Walk forward to the sofa.').",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "The Compass and Landmarks",
        subtopic: "Using cardinal points (North, South, East, West) and relational words (opposite, next to)",
        lessonContent: `
            <p>Today we will learn how to describe locations using special direction words and relationship words.</p>
            <p><strong>Key Concept:</strong> We use cardinal points for big directions, and relationship words for nearby locations.</p>
            <p><strong>Cardinal Points:</strong></p>
            <ul>
                <li><strong>North</strong> - The direction toward the North Pole</li>
                <li><strong>South</strong> - The direction toward the South Pole</li>
                <li><strong>East</strong> - Where the sun rises</li>
                <li><strong>West</strong> - Where the sun sets</li>
            </ul>
            <p><strong>Memory Trick:</strong> "Never Eat Soggy Watermelons" (North, East, South, West - clockwise order)</p>
            <p><strong>Relationship Words:</strong></p>
            <ul>
                <li><strong>Next to</strong> - Beside something, very close</li>
                <li><strong>Opposite</strong> - Across from something, facing it</li>
            </ul>
            <p><strong>When do we use these?</strong> Cardinal points help with maps and long distances. "Next to" and "opposite" help describe things in the same room or street.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compass" style="color: #FF9800;"></i> Cardinal Point Example</div>
                <p>"The school is north of the park." - This tells us the school's position relative to the park.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt" style="color: #795548;"></i> Relationship Example</div>
                <p>"The library is next to the post office." - This tells us the library is beside the post office.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Compass Game!</div>
                <p>We'll label the classroom walls N, S, E, W. When I call out a direction, point to that wall!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice location vocabulary.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cardinal Points Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in the missing cardinal points:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>N _ _ _ _ _ (Never)</div>
                        <div>_ _ _ _ (Eat)</div>
                        <div>S _ _ _ _ (Soggy)</div>
                        <div>_ _ _ _ (Watermelons)</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Classroom Directions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>We've labeled the walls. Answer:</p>
                        <div>• What is on the <span class="answer-space" style="width: 60px;"></span> wall? (North/South/East/West)</div>
                        <div>• The door is on the <span class="answer-space" style="width: 60px;"></span> side of the room.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Relationship Words</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look around the classroom. Write one example of each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Something NEXT TO the teacher's desk: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Something OPPOSITE the windows: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Map Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read this description and draw the simple map:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0;">
                        <p>"The Toy Store is next to the Bakery. The Park is opposite the Toy Store. The School is north of the Park."</p>
                    </div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Exit Ticket</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write one sentence using the word "opposite":
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a simple map of your street or neighborhood. Label at least two places using 'next to' or 'opposite.'",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Asking Politely",
        subtopic: "Using polite phrases and correct sentence structures to ask for directions",
        lessonContent: `
            <p>Today we will learn how to ask for directions in a polite and clear way.</p>
            <p><strong>Key Concept:</strong> Being polite helps people want to help us!</p>
            <p><strong>The Three Steps of Polite Asking:</strong></p>
            <ol>
                <li><strong>The Greeting:</strong> Start with "Excuse me..." to get attention politely.</li>
                <li><strong>The Question:</strong> Ask clearly using "How do I get to..." or "Where can I find..."</li>
                <li><strong>The Closing:</strong> Always end with "Thank you!" to show appreciation.</li>
            </ol>
            <p><strong>Why be polite?</strong></p>
            <ul>
                <li>People are more likely to help you</li>
                <li>It shows respect for others</li>
                <li>It makes conversations friendly and positive</li>
            </ul>
            <p><strong>Remember:</strong> Smile and make eye contact when asking for help!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-check" style="color: #4CAF50;"></i> Polite Example</div>
                <p>"Excuse me, how do I get to the library?" - This is polite, clear, and easy to answer.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-times" style="color: #f44336;"></i> Not Polite Example</div>
                <p>"LIBRARY!" - This is not polite and doesn't form a proper question.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Polite Phrase Chant!</div>
                <p>Let's chant together: "Excuse me, how do I get to the [place]? Thank you!"</p>
            </div>
        `,
        taskInstructions: "Practice asking for directions politely.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Three Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Number these in the correct order for polite asking:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Say "Thank you!"</div>
                        <div>☐ Ask "How do I get to..."</div>
                        <div>☐ Say "Excuse me..."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Question Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these polite questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"<span class="answer-space" style="width: 100px;"></span>, where can I find the hospital?"</div>
                        <div>"Excuse me, how <span class="answer-space" style="width: 200px;"></span> to the school?"</div>
                        <div>"<span class="answer-space" style="width: 100px;"></span>, is there a park nearby?"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Role Play Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Work with a partner. Use these location cards:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD;">
                        <div><strong>Locations:</strong> Hospital, School, Library, Park, Post Office</div>
                        <p>Student A: Lost tourist (asks politely)</p>
                        <p>Student B: Helpful local (answers briefly)</p>
                        <div class="answer-space" style="height: 60px; margin-top: 10px;">Write your favorite polite question here: ______________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Polite vs. Not Polite</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the polite way to ask:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ "Hey, where's the school?"</div>
                        <div>☐ "Excuse me, could you tell me where the school is?"</div>
                        <div>☐ "School! Now!"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Class Demonstration</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Be ready to demonstrate your polite asking skills for the class!
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My location: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>My polite question: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Ask a family member for directions to somewhere in your house using the three polite steps. Write down what you said.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Putting it All Together",
        subtopic: "Combining polite language and directional vocabulary to give and receive instructions",
        lessonContent: `
            <p>Today is our direction celebration day! We'll put everything together to give and follow clear directions.</p>
            <p><strong>Key Concept:</strong> Good directions use polite language, clear commands, and specific vocabulary.</p>
            <p><strong>Review of All We've Learned:</strong></p>
            <ul>
                <li><strong>Movement Words:</strong> forward, backward, left, right, turn</li>
                <li><strong>Location Words:</strong> north, south, east, west, next to, opposite</li>
                <li><strong>Polite Phrases:</strong> Excuse me, How do I get to..., Thank you</li>
            </ul>
            <p><strong>Giving Clear Directions:</strong></p>
            <ol>
                <li>Start with a command verb: "Walk," "Go," "Turn"</li>
                <li>Be specific: "Turn left at the blue house"</li>
                <li>Use landmarks: "next to the bank," "opposite the park"</li>
                <li>Give steps in order</li>
            </ol>
            <p><strong>Today's Challenge:</strong> We'll create and follow directions using all our skills!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-directions" style="color: #9C27B0;"></i> Complete Direction Example</div>
                <p>"Excuse me, how do I get to the library?" "Walk forward two blocks, turn left, it's next to the post office. Thank you!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-people-arrows"></i> Human Map Game</div>
                <p>We'll create a "Human Map" on the floor. One student asks politely, another gives directions using our vocabulary!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Direction Challenge!</div>
                <p>Can you guide a blindfolded friend through an obstacle course using only direction words?</p>
            </div>
        `,
        taskInstructions: "Practice giving and receiving complete directions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Human Map Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On our classroom "map," complete this exchange:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #F3E5F5;">
                        <div><strong>Student A (Asking):</strong> "Excuse me, where can I find the <span class="answer-space" style="width: 100px;"></span>?"</div>
                        <div><strong>Student B (Giving Directions):</strong></div>
                        <div>1. "<span class="answer-space" style="width: 150px;"></span>"</div>
                        <div>2. "<span class="answer-space" style="width: 150px;"></span>"</div>
                        <div>3. "<span class="answer-space" style="width: 150px;"></span>"</div>
                        <div><strong>Student A:</strong> "<span class="answer-space" style="width: 100px;"></span>!"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Map Worksheet</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the town map. Write a three-sentence dialogue:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 1px dashed #ccc; text-align: center; padding-top: 60px;">
                        [Simple map showing: School, Park, Library, Post Office on street corners]
                    </div>
                    <div style="margin-top: 10px;">
                        <div><strong>Line 1 (Question):</strong> <span class="answer-space" style="width: 300px;"></span></div>
                        <div><strong>Line 2 (Directions):</strong> <span class="answer-space" style="width: 300px;"></span></div>
                        <div><strong>Line 3 (Thank you):</strong> <span class="answer-space" style="width: 300px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Direction Command Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change these phrases into clear direction commands:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Maybe go that way?" → <span class="answer-space" style="width: 200px;"></span></div>
                        <div>"It's over there." → <span class="answer-space" style="width: 200px;"></span></div>
                        <div>"You should turn." → <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Directions</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose a starting point and destination in the school. Write directions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>From: <span class="answer-space" style="width: 120px;"></span> To: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Step 1: <span class="answer-space" style="width: 250px;"></span></div>
                        <div>Step 2: <span class="answer-space" style="width: 250px;"></span></div>
                        <div>Step 3: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Direction Expert Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself giving directions. Write one tip for giving good directions:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">A good direction should be: ______________________________</div>
                </div>
            </div>
        `,
        homework: "Teach a family member how to ask for and give directions politely. Practice with a location in your neighborhood.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek5);
    console.log("english-week5-directions.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek5);
    console.log("english-week5-directions.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek5',
        metadata: grade3EnglishWeek5.metadata,
        days: grade3EnglishWeek5
    });
    console.log("english-week5-directions.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek5 = grade3EnglishWeek5;
console.log("english-week5-directions.js loaded and registered successfully");