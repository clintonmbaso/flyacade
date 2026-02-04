// Baby Class English - Week 10 Data (Favorite Things & Likes/Dislikes)
const babyClassEnglishWeek10 = {
    metadata: {
        grade: "baby",
        subject: "English",
        week: 10,
        title: "My Favorite Things — Expressing Likes and Dislikes",
        description: "Learning to talk about things we like and don't like using simple sentences"
    },
    
    monday: {
        subject: "English",
        topic: "My Favorite Things",
        subtopic: "Expressing likes with 'I like...'",
        lessonContent: `
            <p>Welcome to our English lesson! Today we will learn how to talk about things we love and enjoy.</p>
            <p><strong>Key Concept:</strong> We say "I like..." when we enjoy something or it makes us happy!</p>
            <p><strong>What does "I like..." mean?</strong></p>
            <ul>
                <li>It tells others what makes us happy</li>
                <li>It helps friends get to know us better</li>
                <li>It's a way to share our favorite things</li>
            </ul>
            <p><strong>How to say it:</strong> Point to something and say "I like ______" with a big smile!</p>
            <p><strong>Examples of things we might like:</strong></p>
            <ul>
                <li>Fruits (apples, bananas, oranges)</li>
                <li>Toys (dolls, cars, balls)</li>
                <li>Colors (red, blue, yellow)</li>
                <li>Activities (singing, playing, drawing)</li>
            </ul>
            <p><strong>Why is it important?</strong> Sharing what we like helps us make friends and feel happy together!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heart" style="color: #e91e63;"></i> Favorite Fruit</div>
                <p>"I like apples!" - This tells everyone that apples make me happy.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star" style="color: #FFC107;"></i> Favorite Toy</div>
                <p>"I like balls!" - This tells everyone that playing with balls is fun for me.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> The Happy Box Game!</div>
                <p>We'll play with The Happy Box! I'll show pictures of different things. When it's your turn, point to one and say "I like..."!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice saying 'I like...'",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the things you like:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Picture of an apple</div>
                    <div>☐ Picture of a banana</div>
                    <div>☐ Picture of a toy car</div>
                    <div>☐ Picture of a doll</div>
                    <div>☐ Picture of a red color</div>
                    <div>☐ Picture of a blue color</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw one thing you like:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">I like: ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice with The Happy Box:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div>When you point to a picture, say: <strong>"I like ________!"</strong></div>
                    <div style="margin-top: 10px;">
                        <div>☐ Ball</div>
                        <div>☐ Apple</div>
                        <div>☐ Teddy Bear</div>
                        <div>☐ Yellow Color</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the child with what they like:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"I like bananas!" → ☐ Picture of a banana</div>
                    <div>"I like dolls!" → ☐ Picture of a doll</div>
                    <div>"I like red!" → ☐ Picture of red color</div>
                </div>
            </div>
        `,
        homework: "Tell one family member about two things you like. Draw a picture of one thing you told them about.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "I Like To Draw",
        subtopic: "Presenting favorite things to the class",
        lessonContent: `
            <p>Today we will share our favorite things with our friends using pictures we draw!</p>
            <p><strong>Key Concept:</strong> We can show what we like by drawing it and telling our friends about it.</p>
            <p><strong>How to present:</strong></p>
            <ul>
                <li>Hold up your drawing</li>
                <li>Look at your friends</li>
                <li>Say "I like..." clearly</li>
                <li>Show your happy face!</li>
            </ul>
            <p><strong>What if I'm shy?</strong> That's okay! You can hold your teacher's hand or show your picture quietly. We all support each other!</p>
            <p><strong>Listening to others:</strong> When friends share, we listen quietly and clap for them after.</p>
            <p><strong>Today's special activity:</strong> We'll have a "Favorite Things Show and Tell" where everyone gets to share!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette" style="color: #9c27b0;"></i> Drawing Example</div>
                <p>If you like oranges, draw an orange and say "I like oranges!" to the class.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child" style="color: #4CAF50;"></i> Presentation Example</div>
                <p>"This is my drawing. I like flowers!" - Say this while showing your flower drawing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Show and Tell Circle!</div>
                <p>We'll sit in a circle. When it's your turn, show your drawing and tell us what you like!</p>
            </div>
        `,
        taskInstructions: "Draw your favorite thing and practice presenting it to the class.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw Your Favorite Thing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw one thing you like very much:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write or trace the sentence you will say:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                        <div style="border-bottom: 1px solid #ccc; padding: 10px 0;">I like ________________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Presentation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Practice with a partner. Take turns showing your drawing and saying:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>"This is my drawing."</div>
                        <div>"I like ________."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Class Show and Tell</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Our class presentation! When your name is called:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Stand up with your drawing</div>
                        <div>2. Show your picture to the class</div>
                        <div>3. Say your "I like..." sentence</div>
                        <div>4. Take a bow when we clap!</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Good Listener Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Put a sticker next to each friend's name when you listen to their presentation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Friend 1: Listened quietly</div>
                        <div>☐ Friend 2: Clapped after</div>
                        <div>☐ Friend 3: Smiled at them</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Show your drawing to someone at home and tell them 'I like...' Ask them what they like too.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Likes and Dislikes",
        subtopic: "Talking about things we don't like",
        lessonContent: `
            <p>Today we will learn how to talk about things we like AND things we don't like.</p>
            <p><strong>Key Concept:</strong> We say "I don't like..." when something doesn't make us happy.</p>
            <p><strong>What does "I don't like..." mean?</strong></p>
            <ul>
                <li>It tells others what we don't enjoy</li>
                <li>It's okay to have different likes from friends</li>
                <li>We say it politely and quietly</li>
            </ul>
            <p><strong>How to say it:</strong> "I don't like ______" while shaking head gently.</p>
            <p><strong>Important rules:</strong></p>
            <ul>
                <li>We don't say "I don't like" about people</li>
                <li>We respect that friends might like different things</li>
                <li>It's okay to try new things even if we think we won't like them</li>
            </ul>
            <p><strong>Tasting Party Time!</strong> We'll have a pretend tasting party to practice both sentences!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbs-up" style="color: #4CAF50;"></i> Like Example</div>
                <p>"I like bananas!" - Said with a happy voice and thumbs up.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thumbs-down" style="color: #f44336;"></i> Don't Like Example</div>
                <p>"I don't like spinach." - Said politely while shaking head.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Tasting Party Game!</div>
                <p>We'll have a pretend food tasting! Taste pretend foods and say "I like..." or "I don't like..." for each one.</p>
            </div>
        `,
        taskInstructions: "Practice saying 'I like...' and 'I don't like...' with different foods.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tasting Party Role Play</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Pretend to taste these foods. Circle "Like" or "Don't Like":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple: ☐ Like ☐ Don't Like → Say: "I ________ apples."</div>
                        <div>Carrot: ☐ Like ☐ Don't Like → Say: "I ________ carrots."</div>
                        <div>Broccoli: ☐ Like ☐ Don't Like → Say: "I ________ broccoli."</div>
                        <div>Cookie: ☐ Like ☐ Don't Like → Say: "I ________ cookies."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Thumbs Up/Thumbs Down Game</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> When teacher says an activity, show thumbs up or down:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E3F2FD; border-radius: 5px;">
                        <div>Teacher says: "Running!" → Show: ☐ Thumbs Up ☐ Thumbs Down</div>
                        <div>Then say: "I ________ running."</div>
                        <div style="margin-top: 10px;"></div>
                        <div>Teacher says: "Eating spinach!" → Show: ☐ Thumbs Up ☐ Thumbs Down</div>
                        <div>Then say: "I ________ eating spinach."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw or paste pictures in the correct column:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc;">
                            <div style="text-align: center; font-weight: bold; color: #4CAF50;">Things I Like</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold; color: #f44336;">Things I Don't Like</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Polite Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Practice this polite conversation:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Friend: "I like bananas."</div>
                        <div>You: "I don't like bananas. I like apples."</div>
                        <div style="margin-top: 10px;"></div>
                        <div>You: "I like running."</div>
                        <div>Friend: "I don't like running. I like singing."</div>
                    </div>
                </div>
            </div>
        `,
        homework: "At dinner tonight, say one thing you like and one thing you don't like (about the food). Remember to be polite!",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Likes and Dislikes Party",
        subtopic: "Full sentence practice with games",
        lessonContent: `
            <p>Today is our celebration day! We'll play fun games to practice all our "like" and "don't like" sentences.</p>
            <p><strong>Key Concept:</strong> Everyone likes different things, and that's what makes us special!</p>
            <p><strong>What we've learned:</strong></p>
            <ul>
                <li>"I like..." for things that make us happy</li>
                <li>"I don't like..." for things we don't enjoy</li>
                <li>How to share our favorites with friends</li>
                <li>How to respect others' different likes</li>
            </ul>
            <p><strong>Full sentence practice:</strong> We'll use complete sentences in all our games today.</p>
            <p><strong>Today's activities:</strong></p>
            <ol>
                <li>Thumbs Up/Thumbs Down Tournament</li>
                <li>Favorite Things Museum Walk</li>
                <li>Like/Don't Like Sorting Race</li>
                <li>Sentence Completion Challenge</li>
            </ol>
            <p><strong>Remember:</strong> It's okay to have different likes from your friends. We all cheer for each other!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trophy" style="color: #FF9800;"></i> Complete Sentence</div>
                <p>"I like playing with blocks." - This is a full sentence telling what I like to do.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users" style="color: #2196F3;"></i> Different Opinions</div>
                <p>"I like carrots. I don't like peas." "I don't like carrots. I like peas." - Both are okay!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Tournament Game!</div>
                <p>We'll have a Thumbs Up/Thumbs Down tournament! When you hear an item, show your thumb and say the full sentence!</p>
            </div>
        `,
        taskInstructions: "Play all the games and practice using full sentences.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Thumbs Up/Thumbs Down Tournament</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each item teacher says, show your thumb and say the sentence:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFEBEE; border-radius: 5px;">
                        <div>1. "Eating ice cream" → Say: "I ________ eating ice cream."</div>
                        <div>2. "Drinking milk" → Say: "I ________ drinking milk."</div>
                        <div>3. "Playing ball" → Say: "I ________ playing ball."</div>
                        <div>4. "Sleeping early" → Say: "I ________ sleeping early."</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Favorite Things Museum</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Walk around and look at friends' drawings. Tell them one thing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"I like your drawing of ________."</div>
                        <div>OR</div>
                        <div>"I like ________ too!" (if you like the same thing)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sorting Race</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Work with a partner. Sort these pictures into "Like" and "Don't Like":
                    <div style="margin-left: 20px; margin-top: 10px; display: flex;">
                        <div style="flex: 1;">
                            <div style="font-weight: bold;">Pictures to sort:</div>
                            <div>☐ Banana</div>
                            <div>☐ Ball</div>
                            <div>☐ Rain</div>
                            <div>☐ Singing</div>
                        </div>
                        <div style="flex: 1;">
                            <div style="font-weight: bold;">Your sentences:</div>
                            <div>1. I ________ bananas.</div>
                            <div>2. I ________ balls.</div>
                            <div>3. I ________ rain.</div>
                            <div>4. I ________ singing.</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Sentence Completion Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these sentences with your own words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. I like to eat ________.</div>
                        <div>2. I don't like to eat ________.</div>
                        <div>3. I like to play with ________.</div>
                        <div>4. I don't like when it ________.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: I Am Special Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself with things you like around you. Write one sentence:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I am special because I like ________ and I don't like ________.</div>
                </div>
            </div>
        `,
        homework: "Make a 'Like' list and 'Don't Like' list with your family. Share one from each list at dinner.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyClassEnglishWeek10);
    console.log("babyclass-english-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyClassEnglishWeek10);
    console.log("babyclass-english-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyClassEnglishWeek10',
        metadata: babyClassEnglishWeek10.metadata,
        days: babyClassEnglishWeek10
    });
    console.log("babyclass-english-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyClassEnglishWeek10 = babyClassEnglishWeek10;
console.log("babyclass-english-week10.js loaded and registered successfully");