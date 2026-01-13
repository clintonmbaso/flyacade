// Baby Class Science - Week 5 (Personal Hygiene Focus)
const middleScienceWeek5 = {
    metadata: {
        grade: "middle",
        subject: "Science",
        week: 5,
        title: "Personal Hygiene & Body Care",
        description: "Learning about keeping our bodies clean and healthy through fun activities"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Personal Hygiene",
        subtopic: "Keeping Clean and Healthy",
        lessonContent: `
            <p>Welcome to science class! Today we will learn about <strong>Personal Hygiene</strong> - how we keep our bodies clean and healthy!</p>
            <p><strong>Key Concept:</strong> Personal hygiene means taking care of our body to stay clean, healthy, and happy!</p>
            <p><strong>Fun Fact:</strong> When we wash our hands, we wash away tiny germs that can make us sick!</p>
            <p>Let's learn the three important hygiene habits:</p>
            <div class="content-box">
                <p><i class="fas fa-bath"></i> <strong>Bath Time:</strong> We wash our whole body to remove dirt and germs</p>
                <p><i class="fas fa-tooth"></i> <strong>Tooth Brushing:</strong> We brush our teeth twice a day to keep them strong</p>
                <p><i class="fas fa-comb"></i> <strong>Hair Care:</strong> We comb our hair to keep it neat and clean</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Bath Time Steps</div>
                <p>What do we do during bath time?</p>
                <ol>
                    <li>Get undressed</li>
                    <li>Use soap and water</li>
                    <li>Wash all body parts</li>
                    <li>Dry with a towel</li>
                    <li>Put on clean clothes</li>
                </ol>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Toothbrushing Song</div>
                <p>Sing along while brushing:</p>
                <p><em>"Brush, brush, brush your teeth<br>
                Twice a day is neat!<br>
                Up and down and round and round<br>
                Clean teeth can't be beat!"</em></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Hair Care</div>
                <p>Why do we comb our hair?</p>
                <ul>
                    <li>To remove tangles</li>
                    <li>To look neat</li>
                    <li>To feel fresh</li>
                </ul>
                <p>We should use our own comb!</p>
            </div>
        `,
        taskInstructions: "Practice hygiene habits with these fun activities!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Show how you wash your hands:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Circle the items we use for hygiene:
                <div style="display: flex; gap: 15px; margin-top: 10px;">
                    <div>🍕</div>
                    <div>🧼</div>
                    <div>🚗</div>
                    <div>🪥</div>
                    <div>📚</div>
                    <div>🚿</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Match the hygiene activity with the time:
                <div style="margin-top: 10px;">
                    <div>Brush teeth = <span class="answer-space" style="width: 80px;"></span> (morning/night)</div>
                    <div>Take bath = <span class="answer-space" style="width: 80px;"></span> (morning/night)</div>
                    <div>Comb hair = <span class="answer-space" style="width: 80px;"></span> (morning/night)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Draw a happy face after washing hands:
                <div class="drawing-area"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> How many times should we brush teeth daily? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Wednesday Homework: Hygiene Review Test</strong></p>
                <p><strong>Test your knowledge about personal hygiene:</strong></p>
                
                <div style="border: 2px solid #4CAF50; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section A: Circle the correct answer</strong></p>
                    <p>1. We should brush our teeth:</p>
                    <div style="margin-left: 20px;">
                        <p>□ Once a week</p>
                        <p>☐ Twice a day</p>
                        <p>□ Only when they hurt</p>
                    </div>
                    
                    <p>2. Bath time helps us:</p>
                    <div style="margin-left: 20px;">
                        <p>□ Get dirty</p>
                        <p>☐ Get clean</p>
                        <p>□ Get hungry</p>
                    </div>
                    
                    <p>3. We use this to comb hair:</p>
                    <div style="margin-left: 20px;">
                        <p>□ 🍎</p>
                        <p>□ 🚗</p>
                        <p>☐ 🪮</p>
                    </div>
                </div>
                
                <div style="border: 2px solid #2196F3; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section B: Practical Activity</strong></p>
                    <p>Do these activities with a grown-up:</p>
                    <ol>
                        <li>Wash your hands properly (sing the ABC song while washing)</li>
                        <li>Show how you brush your teeth (use your finger as a toothbrush)</li>
                        <li>Practice combing your hair gently</li>
                    </ol>
                    
                    <p><strong>Checklist (Tick when done):</strong></p>
                    <div style="border: 1px dashed #ccc; padding: 10px;">
                        <p>□ I washed my hands properly</p>
                        <p>□ I showed toothbrushing motions</p>
                        <p>□ I combed my hair gently</p>
                        <p>□ I used my own towel/comb</p>
                    </div>
                </div>
                
                <div style="border: 2px solid #FF9800; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section C: Drawing</strong></p>
                    <p>Draw yourself doing one hygiene activity:</p>
                    <div class="drawing-area" style="height: 100px;"></div>
                    <p>Write what you are doing: <span class="answer-space" style="width: 150px;"></span></p>
                </div>
                
                <p><strong>Parent/Guardian Signature:</strong> ____________________</p>
                <p><em>Bring your completed test to class on Friday!</em></p>
            </div>
        `,
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Body Care Routines",
        subtopic: "Daily Health Habits",
        lessonContent: `
            <p>Great job learning about hygiene! Today we will learn about <strong>Body Care Routines</strong> we do every day!</p>
            <p><strong>Key Concept:</strong> Daily routines help our bodies stay strong, healthy, and full of energy!</p>
            <p><strong>Fun Fact:</strong> When we sleep well, our body grows and repairs itself!</p>
            
            <div class="content-box">
                <p><strong>Three Important Daily Routines:</strong></p>
                <p><i class="fas fa-sun"></i> <strong>Morning Routine:</strong> What we do when we wake up</p>
                <p><i class="fas fa-apple-alt"></i> <strong>Healthy Eating:</strong> Eating good food for our body</p>
                <p><i class="fas fa-moon"></i> <strong>Bedtime Routine:</strong> What we do before sleeping</p>
            </div>
            
            <p>Let's learn a healthy habits yoga pose: "The Strong Tree"</p>
            <p>Stand on one leg like a tree and breathe deeply!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 1: Morning Routine</div>
                <p>A good morning includes:</p>
                <ul>
                    <li>Wake up with a smile</li>
                    <li>Wash face and hands</li>
                    <li>Brush teeth</li>
                    <li>Comb hair</li>
                    <li>Eat healthy breakfast</li>
                </ul>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 2: Healthy Foods</div>
                <p>Foods that make us strong:</p>
                <div style="display: flex; gap: 10px;">
                    <div>🍎</div>
                    <div>🥕</div>
                    <div>🥦</div>
                    <div>🍌</div>
                    <div>🥛</div>
                </div>
                <p>These foods give us energy to play and learn!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example 3: Bedtime Routine</div>
                <p>Before sleeping we should:</p>
                <ol>
                    <li>Take a bath</li>
                    <li>Brush teeth</li>
                    <li>Put on pajamas</li>
                    <li>Read a story</li>
                    <li>Sleep early</li>
                </ol>
            </div>
        `,
        taskInstructions: "Practice your daily routines with these activities!",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Draw your favorite healthy food:
                <div class="drawing-area" style="height: 60px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Sort these into Morning or Night:
                <div style="margin-top: 10px;">
                    <div>Brush teeth = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Eat breakfast = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Read bedtime story = <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Wash face = <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle things that help us sleep well:
                <div style="display: flex; gap: 15px; margin-top: 10px;">
                    <div>🛏️</div>
                    <div>📱</div>
                    <div>🐻</div>
                    <div>📺</div>
                    <div>🌙</div>
                    <div>🍭</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Show the "Strong Tree" yoga pose:
                <div class="drawing-area" style="height: 80px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Why do we need to sleep? <span class="answer-space"></span>
            </div>
        `,
        homework: `
            <div class="homework-box">
                <p><strong>Friday Homework: Body Care Review Test</strong></p>
                <p><strong>Test your knowledge about daily routines:</strong></p>
                
                <div style="border: 2px solid #4CAF50; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section A: True or False</strong></p>
                    <p>1. We should eat candy for breakfast. □ True □ False</p>
                    <p>2. Sleeping helps our body grow. □ True □ False</p>
                    <p>3. We can share our toothbrush. □ True □ False</p>
                    <p>4. Vegetables make us strong. □ True □ False</p>
                    <p>5. We should watch TV all night. □ True □ False</p>
                </div>
                
                <div style="border: 2px solid #2196F3; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section B: My Daily Routine Chart</strong></p>
                    <p>Draw or stick pictures to show your routine:</p>
                    
                    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0;">
                        <p><strong>Morning:</strong></p>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                        </div>
                        
                        <p><strong>Afternoon:</strong></p>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                        </div>
                        
                        <p><strong>Night:</strong></p>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                            <div class="drawing-area" style="width: 60px; height: 60px;"></div>
                        </div>
                    </div>
                </div>
                
                <div style="border: 2px solid #FF9800; border-radius: 8px; padding: 15px; margin: 10px 0;">
                    <p><strong>Section C: Practical Activity</strong></p>
                    <p>Do these with your family:</p>
                    <ol>
                        <li>Prepare a healthy snack together (like fruit pieces)</li>
                        <li>Practice the "Strong Tree" yoga pose together</li>
                        <li>Share one thing you learned about body care</li>
                    </ol>
                    
                    <p><strong>Family Activity Checklist:</strong></p>
                    <div style="border: 1px dashed #ccc; padding: 10px;">
                        <p>□ We made a healthy snack: ________________</p>
                        <p>□ We did yoga together</p>
                        <p>□ We talked about healthy habits</p>
                        <p>□ We planned our bedtime routine</p>
                    </div>
                </div>
                
                <p><strong>What I Learned:</strong> <span class="answer-space" style="width: 200px;"></span></p>
                <p><strong>Parent/Guardian Signature:</strong> ____________________</p>
                <p><em>This test helps us remember to take care of our bodies every day!</em></p>
            </div>
        `,
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(babyClassScienceWeek5);
    console.log("babyClassScienceWeek5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(babyClassScienceWeek5);
    console.log("babyClassScienceWeek5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'babyClassScienceWeek5',
        metadata: babyClassScienceWeek5.metadata,
        days: babyClassScienceWeek5
    });
    console.log("babyClassScienceWeek5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.babyClassScienceWeek5 = babyClassScienceWeek5;
console.log("babyClassScienceWeek5.js loaded and registered successfully");