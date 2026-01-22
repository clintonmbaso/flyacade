// Grade 2 Mathematics & Science - Week 5 Data (Hazard Awareness & Safety)
const grade2MathScienceWeek5 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 5,
        title: "Safety First! — Understanding Hazard Symbols & Safety Math",
        description: "Learning hazard symbols, sorting by color bands, signal word patterns, and safety measurement"
    },
    
    monday: {
        subject: "Science & Vocabulary",
        topic: "The Language of Safety",
        subtopic: "Identifying common hazard symbols and understanding their meaning",
        lessonContent: `
            <p>Welcome to our safety lesson! Today we will learn how symbols keep us safe even without words.</p>
            <p><strong>Key Concept:</strong> Symbols are like a secret code that everyone around the world can understand!</p>
            <p><strong>Common Safety Symbols:</strong></p>
            <ul>
                <li><strong>Stop Sign/No Entry:</strong> Means "do not enter" or "stop"</li>
                <li><strong>Skull and Crossbones:</strong> Means POISON - very dangerous if swallowed</li>
                <li><strong>Flame Symbol:</strong> Means FLAMMABLE - can catch fire easily</li>
                <li><strong>Exclamation Mark:</strong> Means CAUTION - can irritate skin or eyes</li>
            </ul>
            <p><strong>Why symbols are important:</strong> They work even if people speak different languages! They help us stay safe quickly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-skull-crossbones" style="color: #FF5722;"></i> Poison Symbol</div>
                <p>When you see this on a bottle, it means: DO NOT DRINK! Tell a grown-up immediately.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire" style="color: #FF9800;"></i> Flame Symbol</div>
                <p>This symbol means: Keep away from fire, sparks, or heat. Could be on cleaning products.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle" style="color: #FFC107;"></i> Caution Symbol</div>
                <p>This means: Be careful! Might make your skin itchy or eyes watery. Wash hands after use.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice recognizing safety symbols.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Match the symbol to its meaning:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Skull and Crossbones → ☐ "Can catch fire"</div>
                    <div>☐ Flame Symbol → ☐ "Can irritate skin"</div>
                    <div>☐ Exclamation Mark → ☐ "Poisonous/Dangerous if swallowed"</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw the three hazard symbols you learned:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>Poison</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>Flammable</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div>Caution</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> "Symbol Match-Up" Game: Draw the correct symbol for each scenario:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>"This liquid could catch fire easily" → Draw: ________________</div>
                    <div>"This cleaner could hurt your eyes" → Draw: ________________</div>
                    <div>"This chemical is very dangerous to drink" → Draw: ________________</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Safety Rule: What should you do if you see a hazard symbol on a container?
                <div class="answer-space" style="height: 40px; margin-top: 10px;">I should: ________________</div>
            </div>
        `,
        homework: "Look for safety symbols at home (cleaning products, medicine cabinets with adult supervision). Draw one symbol you find.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics - Sorting & Classifying",
        topic: "Sorting by Color Bands",
        subtopic: "Categorizing household items by label color bands",
        lessonContent: `
            <p>Today we will use math sorting skills to understand safety colors on labels!</p>
            <p><strong>Key Concept:</strong> A "set" is a group of things that share something in common. Today, we'll sort by color bands.</p>
            <p><strong>Color Band Meanings:</strong></p>
            <ul>
                <li><strong style="color: #F44336;">Red Band:</strong> HIGH DANGER - Needs careful adult handling</li>
                <li><strong style="color: #2196F3;">Blue Band:</strong> MEDIUM DANGER - Handle with care</li>
                <li><strong style="color: #4CAF50;">Green Band:</strong> LOW DANGER - Safer for handling</li>
            </ul>
            <p><strong>Mathematical Sorting:</strong> We put items with the same color band together in a set. Then we count how many are in each set.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: #F44336;"></i> Red Band Example</div>
                <p>Bleach might have a red band. This means it's highly dangerous and should only be used by adults.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spray-can" style="color: #2196F3;"></i> Blue Band Example</div>
                <p>Glass cleaner might have a blue band. This means it's moderately dangerous - use carefully.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-soap" style="color: #4CAF50;"></i> Green Band Example</div>
                <p>Dish soap might have a green band. This means it's safer to handle (but still ask an adult!).</p>
            </div>
        `,
        taskInstructions: "Sort the fictional items by their color bands and count each group.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Item List</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Here are 10 fictional household items with their color bands:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Dish Soap - <span style="color: #4CAF50;">Green</span></div>
                        <div>2. Bleach - <span style="color: #F44336;">Red</span></div>
                        <div>3. Glass Cleaner - <span style="color: #2196F3;">Blue</span></div>
                        <div>4. Laundry Detergent - <span style="color: #2196F3;">Blue</span></div>
                        <div>5. Hand Sanitizer - <span style="color: #F44336;">Red</span></div>
                        <div>6. Floor Cleaner - <span style="color: #2196F3;">Blue</span></div>
                        <div>7. Window Spray - <span style="color: #4CAF50;">Green</span></div>
                        <div>8. Toilet Cleaner - <span style="color: #F44336;">Red</span></div>
                        <div>9. Furniture Polish - <span style="color: #4CAF50;">Green</span></div>
                        <div>10. Drain Opener - <span style="color: #F44336;">Red</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sorting into Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort the items into their color groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><span style="color: #F44336;">Red Band Items:</span> ________________, ________________, ________________, ________________</div>
                        <div>Count: <span class="answer-space" style="width: 50px;"></span> items</div>
                        <div style="margin-top: 10px;"></div>
                        <div><span style="color: #2196F3;">Blue Band Items:</span> ________________, ________________, ________________</div>
                        <div>Count: <span class="answer-space" style="width: 50px;"></span> items</div>
                        <div style="margin-top: 10px;"></div>
                        <div><span style="color: #4CAF50;">Green Band Items:</span> ________________, ________________, ________________</div>
                        <div>Count: <span class="answer-space" style="width: 50px;"></span> items</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparing Quantities</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which color group has the MOST items?
                    <div class="answer-space" style="height: 30px; width: 200px;">The ________________ group has the most.</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which color group has the FEWEST items?
                    <div class="answer-space" style="height: 30px; width: 200px; margin-top: 10px;">The ________________ group has the fewest.</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Circle which color band items you should NEVER touch without an adult:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ <span style="color: #4CAF50;">Green Band</span></div>
                        <div>☐ <span style="color: #2196F3;">Blue Band</span></div>
                        <div>☐ <span style="color: #F44336;">Red Band</span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "With adult help, look at 3 cleaning products at home. What colors do you see on their labels? Draw one label.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics - Patterning",
        topic: "Signal Word Patterns",
        subtopic: "Identifying and creating patterns with safety signal words",
        lessonContent: `
            <p>Today we will learn about patterns using important safety words!</p>
            <p><strong>Key Concept:</strong> Patterns help us predict what comes next. Safety words have patterns too!</p>
            <p><strong>Three Signal Words:</strong></p>
            <ul>
                <li><strong>CAUTION:</strong> Mild risk - Might cause slight irritation</li>
                <li><strong>WARNING:</strong> Medium risk - Could cause harm if not careful</li>
                <li><strong>DANGER:</strong> High risk - Very dangerous, could cause serious injury</li>
            </ul>
            <p><strong>Pattern Types:</strong></p>
            <ul>
                <li><strong>AB Pattern:</strong> Caution, Warning, Caution, Warning...</li>
                <li><strong>ABC Pattern:</strong> Caution, Warning, Danger, Caution, Warning, Danger...</li>
                <li><strong>AAB Pattern:</strong> Caution, Caution, Warning, Caution, Caution, Warning...</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-circle" style="color: #FFC107;"></i> Caution Pattern</div>
                <p>"Caution, Caution, Warning" is an AAB pattern. The first two are the same, then it changes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-radiation" style="color: #FF9800;"></i> Danger Pattern</div>
                <p>"Danger, Warning, Caution" is a decreasing pattern from most to least dangerous.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Pattern Clap Game!</div>
                <p>We'll clap patterns: 1 clap for Caution, 2 claps for Warning, 3 claps for Danger. Can you follow the pattern?</p>
            </div>
        `,
        taskInstructions: "Complete and create patterns using the signal words: Caution, Warning, Danger.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Complete the Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What comes next in each pattern?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Caution, Warning, Danger, Caution, Warning, <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Danger, Danger, Caution, Danger, Danger, <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Warning, Caution, Warning, Caution, <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Pattern Strips</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Color the pattern strips (use: Yellow for Caution, Orange for Warning, Red for Danger):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pattern: Caution, Warning, Danger, Caution, Warning, Danger</div>
                        <div style="display: flex; margin-top: 5px;">
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc;"></div>
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc; margin-left: 5px;"></div>
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc; margin-left: 5px;"></div>
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc; margin-left: 5px;"></div>
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc; margin-left: 5px;"></div>
                            <div class="pattern-box" style="width: 40px; height: 20px; border: 1px solid #ccc; margin-left: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create an ABC pattern using all three signal words:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My pattern: <span class="answer-space" style="width: 150px;"></span>, <span class="answer-space" style="width: 150px;"></span>, <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Rules</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is the rule for this pattern? "Caution, Warning, Caution, Warning, Caution"
                    <div class="answer-space" style="height: 30px; margin-top: 10px;">The rule is: ________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Safety Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If you see "Caution" on one bottle and "Warning" on another, which is more dangerous?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ The bottle with "Caution"</div>
                        <div>☐ The bottle with "Warning"</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a pattern using colors (red, orange, yellow) to represent Danger, Warning, Caution. Draw your pattern.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science & Measurement",
        topic: "Measuring Safety Information",
        subtopic: "Understanding measurement concepts in safety instructions",
        lessonContent: `
            <p>Today we will learn how safety information uses numbers and measurement to keep us safe!</p>
            <p><strong>Key Concept:</strong> Safety labels often tell us "How Much" to use or "How Far" to stay away.</p>
            <p><strong>Common Safety Measurements:</strong></p>
            <ul>
                <li><strong>Distance:</strong> "Keep 2 meters away from heat"</li>
                <li><strong>Amount:</strong> "Use only 1 cup of water to mix"</li>
                <li><strong>Time:</strong> "Wait 5 minutes before touching"</li>
            </ul>
            <p><strong>Why Measurement Matters:</strong> Following the exact numbers keeps us safe. Too much or too close could be dangerous!</p>
            <p><strong>Measurement Tools:</strong> We might use meter sticks, measuring cups, or timers to follow safety instructions.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined" style="color: #795548;"></i> Distance Example</div>
                <p>"Keep 2 meters away" means about two big steps. This keeps you safe from splashes or fumes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-glass-whiskey" style="color: #2196F3;"></i> Amount Example</div>
                <p>"Use only 1 cup" means using a measuring cup. Too much cleaner could create dangerous fumes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clock" style="color: #9C27B0;"></i> Time Example</div>
                <p>"Wait 5 minutes" means counting slowly to 300. This lets chemicals work safely or surfaces dry.</p>
            </div>
        `,
        taskInstructions: "Practice measuring safe distances and understanding safety measurements.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Reading Safety Labels</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this mock safety label and answer:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div><strong>SUPER CLEAN CLEANER</strong></div>
                        <div>• Keep 3 meters away from open flame</div>
                        <div>• Use only ½ cup per gallon of water</div>
                        <div>• Wait 10 minutes before rinsing</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>How far should you stay from flame? <span class="answer-space" style="width: 80px;"></span> meters</div>
                        <div>How much cleaner per gallon? <span class="answer-space" style="width: 80px;"></span> cup</div>
                        <div>How long should you wait? <span class="answer-space" style="width: 80px;"></span> minutes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Safety Perimeter</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure a "Safe Distance" of 2 meters from the "Hazard Zone" (marked with X):
                    <div style="text-align: center; margin-top: 10px;">
                        <div>[X] ← Hazard Zone</div>
                        <div style="height: 20px;"></div>
                        <div>Draw where you should stand (2 meters away):</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measurement Tools</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match the measurement with the right tool:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"Keep 1 meter away" → ☐ Measuring Cup</div>
                        <div>"Use ¼ cup" → ☐ Meter Stick/Ruler</div>
                        <div>"Wait 3 minutes" → ☐ Timer/Clock</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why Accuracy Matters</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What could happen if you use TOO MUCH cleaner?
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">________________</div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What could happen if you stand TOO CLOSE?
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">________________</div>
                </div>
            </div>
        `,
        homework: "With adult supervision, find one cleaning product at home. What numbers do you see on the label? Write down one measurement you find.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science & Mathematics Integration",
        topic: "Safety Review & Application",
        subtopic: "Applying all safety concepts through games and activities",
        lessonContent: `
            <p>Today is our Safety Celebration Day! We'll use everything we learned this week.</p>
            <p><strong>Key Concept:</strong> Safety involves symbols, sorting, patterns, AND measurement all working together!</p>
            <p><strong>Weekly Review:</strong></p>
            <ul>
                <li><strong>Monday:</strong> Hazard Symbols (Skull, Flame, Exclamation)</li>
                <li><strong>Tuesday:</strong> Color Band Sorting (Red, Blue, Green sets)</li>
                <li><strong>Wednesday:</strong> Signal Word Patterns (Caution, Warning, Danger)</li>
                <li><strong>Thursday:</strong> Safety Measurement (Distance, Amount, Time)</li>
            </ul>
            <p><strong>The Complete Safety Check:</strong> When you see a product, look for:
                1. Symbols 2. Color Bands 3. Signal Words 4. Measurements</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt" style="color: #4CAF50;"></i> Complete Label Example</div>
                <p>A bleach bottle might have: Skull symbol (Poison), Red band, DANGER word, "Keep 2 meters away" instruction.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Safety Bingo!</div>
                <p>We'll play Safety Bingo with symbols, colors, and words. First to get a row wins!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-shield"></i> Safety Expert Role</div>
                <p>Today, YOU are the safety expert! Help your classmates identify safe and unsafe situations.</p>
            </div>
        `,
        taskInstructions: "Complete all activities to become a Safety Expert!",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Safety Bingo Card</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Mark the boxes as we call them out:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Flame Symbol</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Red Band</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Caution</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ 2 meters</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Skull Symbol</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Green Band</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Danger</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ 1 cup</div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">☐ Exclamation Symbol</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Design a Safe Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a safety label for "Kid-Safe Window Cleaner":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Symbol to use: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Color band: <span style="color: #4CAF50;">Green</span> ☐ <span style="color: #2196F3;">Blue</span> ☐ <span style="color: #F44336;">Red</span> ☐</div>
                        <div>Signal word: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Safety instruction: "Keep <span class="answer-space" style="width: 50px;"></span> meter(s) away from eyes"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safe or Unsafe?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle SAFE or UNSAFE for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Drinking from a bottle with skull symbol: ☐ SAFE ☐ UNSAFE</div>
                        <div>Standing 3 meters away from red band product: ☐ SAFE ☐ UNSAFE</div>
                        <div>Using 2 cups when label says 1 cup: ☐ SAFE ☐ UNSAFE</div>
                        <div>Touching green band product with adult: ☐ SAFE ☐ UNSAFE</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Safety Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw yourself as a Safety Expert helping someone:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I am teaching: <span class="answer-space" style="width: 150px;"></span> about safety.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Safety Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete the Safety Pledge:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div>"I, <span class="answer-space" style="width: 150px;"></span>, pledge to:"</div>
                        <div>1. Always look for <span class="answer-space" style="width: 120px;"></span> symbols</div>
                        <div>2. Never touch <span class="answer-space" style="width: 120px;"></span> band products without adult</div>
                        <div>3. Follow the <span class="answer-space" style="width: 120px;"></span> on labels exactly</div>
                        <div>4. Be a Safety Expert for my family and friends!</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Teach one family member about hazard symbols, color bands, or safety measurements. Draw what you taught them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek5);
    console.log("mathscience-week5-safety.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek5);
    console.log("mathscience-week5-safety.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek5',
        metadata: grade2MathScienceWeek5.metadata,
        days: grade2MathScienceWeek5
    });
    console.log("mathscience-week5-safety.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek5 = grade2MathScienceWeek5;
console.log("mathscience-week5-safety.js loaded and registered successfully");