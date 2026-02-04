// Grade 1 Mathematics & Science - Week 10 Data (Water and Food Safety)
const grade1MathScienceWeek10 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 10,
        title: "Water and Food Safety — Staying Healthy",
        description: "Learning about germs, safe water, food hygiene, and measuring volume"
    },
    
    monday: {
        subject: "Science",
        topic: "Where Do Germs Come From?",
        subtopic: "Exploring sources of waterborne and foodborne diseases",
        lessonContent: `
            <p>Welcome to our health exploration! Today we will learn about tiny germs that can make us sick.</p>
            <p><strong>Key Concept:</strong> Germs are tiny living things we cannot see that can cause diseases like diarrhea and cholera.</p>
            <p><strong>What are waterborne diseases?</strong></p>
            <ul>
                <li>Diseases that spread through dirty water</li>
                <li>Examples: Diarrhea, Cholera</li>
                <li>Germs live in unclean water</li>
            </ul>
            <p><strong>What are foodborne diseases?</strong></p>
            <ul>
                <li>Diseases that spread through unsafe food</li>
                <li>Food left uncovered can attract flies</li>
                <li>Flies carry germs from dirty places to our food</li>
            </ul>
            <p><strong>Our Mission:</strong> Learn how germs travel and how to protect ourselves!</p>
            <p><strong>Why is this important?</strong> Understanding germs helps us stay healthy and strong.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: #2196F3;"></i> Dirty Water Story</div>
                <p>"The River Adventure" - A story about drinking unclean river water and getting sick with tummy aches.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #FF9800;"></i> Uncovered Food Story</div>
                <p>"The Fly's Journey" - A story about flies landing on uncovered food and leaving invisible germs behind.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Germ Detective Game!</div>
                <p>Look at pictures and spot where germs might be hiding: dirty hands, uncovered food, muddy water!</p>
            </div>
        `,
        taskInstructions: "Complete the activities about germs and how they spread.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Listen to the story "Dirty Water." Draw one way water can get germs:
                <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 30px; margin-top: 10px;">Water can get germs when: ________________</div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Listen to the story "Uncovered Food." Draw a fly landing on food:
                <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 30px; margin-top: 10px;">Flies can carry germs from ________ to ________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the pictures that show how food can become unhealthy:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Food left uncovered</div>
                    <div>☐ Food in a sealed container</div>
                    <div>☐ Food touched with dirty hands</div>
                    <div>☐ Food washed before eating</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Assessment: Name one way food can become "unhealthy":
                <div class="answer-space" style="height: 40px; margin-top: 10px; width: 300px;">Food can become unhealthy when ________________</div>
            </div>
        `,
        homework: "Look at home for food that is covered and food that is uncovered. Tell a family member why covering food is important.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Safe Water, Safe Food",
        subtopic: "Preventing waterborne and foodborne diseases",
        lessonContent: `
            <p>Today we will learn how to keep our water and food safe from germs!</p>
            <p><strong>Key Concept:</strong> We can prevent diseases by making water clean and food safe.</p>
            <p><strong>Safe Water Practices:</strong></p>
            <ul>
                <li>Boiling water kills germs</li>
                <li>Using water filters makes water clean</li>
                <li>Storing water in clean, covered containers</li>
            </ul>
            <p><strong>Safe Food Rule:</strong> "Wash, Peel, or Cook"</p>
            <ul>
                <li><strong>Wash:</strong> Rinse fruits and vegetables with clean water</li>
                <li><strong>Peel:</strong> Remove skins from some fruits and vegetables</li>
                <li><strong>Cook:</strong> Heat food to kill germs</li>
            </ul>
            <p><strong>Why Clean Hands?</strong> Washing hands before eating removes germs we can't see.</p>
            <p><strong>Let's Practice:</strong> We'll learn songs about clean water and safe food!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire" style="color: #f44336;"></i> Boiling Water</div>
                <p>"Boiling water makes it safe to drink" - Heat kills tiny germs that can make us sick.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #4CAF50;"></i> Wash, Peel, or Cook</div>
                <p>For an apple: we can wash it. For a banana: we can peel it. For meat: we must cook it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Safety Match Game!</div>
                <p>Match pictures of unsafe habits with the safe solutions: dirty water → boil it, uncovered food → cover it!</p>
            </div>
        `,
        taskInstructions: "Explore ways to keep water and food safe.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Safe Water</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw two ways to make water safe to drink:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Way 1:</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div class="answer-space" style="height: 20px; margin-top: 5px;">Name: ________</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Way 2:</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div class="answer-space" style="height: 20px; margin-top: 5px;">Name: ________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Safe Food Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the "Wash, Peel, or Cook" rule for each food:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple: ☐ Wash ☐ Peel ☐ Cook</div>
                        <div>Banana: ☐ Wash ☐ Peel ☐ Cook</div>
                        <div>Carrot (eaten raw): ☐ Wash ☐ Peel ☐ Cook</div>
                        <div>Chicken: ☐ Wash ☐ Peel ☐ Cook</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Clean Hands</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the steps of washing hands:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div>We should wash hands before: <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> State two ways to keep food and water safe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 250px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Help at home by washing fruits before eating. Tell your family the 'Wash, Peel, or Cook' rule.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measuring Water Volume",
        subtopic: "Exploring capacity using non-standard units",
        lessonContent: `
            <p>Today we will measure how much water containers can hold!</p>
            <p><strong>Key Concept:</strong> Capacity is how much a container can hold.</p>
            <p><strong>Measuring with Cups:</strong></p>
            <ul>
                <li>We use small cups as our measuring tool</li>
                <li>We count how many cups fill a bottle</li>
                <li>This helps us understand "more" and "less"</li>
            </ul>
            <p><strong>Safe Drinking Water:</strong> Knowing how much water we need helps us stay hydrated and healthy.</p>
            <p><strong>Comparing Containers:</strong> Some containers hold more cups, some hold fewer cups.</p>
            <p><strong>Math Words:</strong> Capacity, full, empty, more, less, cups.</p>
            <p><strong>Let's Measure:</strong> We'll use real cups and bottles to explore capacity!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cup" style="color: #FF9800;"></i> Small Cup Measure</div>
                <p>"How many small cups fill this bottle?" - We count each cup as we pour: 1, 2, 3...</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wine-bottle" style="color: #2196F3;"></i> Water Bottle Capacity</div>
                <p>A large water bottle might hold 8 cups. That's enough water for a whole day of drinking!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Cup Counting Race!</div>
                <p>Teams race to fill containers with cups and count how many cups each holds!</p>
            </div>
        `,
        taskInstructions: "Measure and compare the capacity of different containers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measuring with Cups</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a small cup to measure a water bottle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My water bottle holds ____ small cups of water.</div>
                        <div>Draw the cups inside the bottle:</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparing Two Containers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure a small bowl and a large bowl:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Small bowl: ____ cups</div>
                        <div>Large bowl: ____ cups</div>
                        <div>Which holds more? ☐ Small bowl ☐ Large bowl</div>
                        <div>How many more cups? ____ cups more</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Safe Water Amounts</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a bottle that holds enough water for one day (about 5 cups):
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div>Label your drawing: "Safe Drinking Water for One Day"</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Count and compare the capacity of two different containers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Container A holds ____ cups</div>
                        <div>Container B holds ____ cups</div>
                        <div>Which has greater capacity? ☐ Container A ☐ Container B</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find two different cups at home. Use one to measure how many cupfuls fill the other. Share your findings.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science & Mathematics",
        topic: "The Hygiene Guard",
        subtopic: "Reviewing control measures through grouping",
        lessonContent: `
            <p>Today we become Hygiene Guards! We'll review all we've learned about staying healthy.</p>
            <p><strong>Key Concept:</strong> We can prevent illness by practicing good hygiene habits.</p>
            <p><strong>Safe Habits vs. Unsafe Habits:</strong></p>
            <ul>
                <li><strong>Safe:</strong> Covering food, washing hands, drinking boiled water</li>
                <li><strong>Unsafe:</strong> Drinking river water, eating with dirty hands, leaving food uncovered</li>
            </ul>
            <p><strong>Grouping Practice:</strong> We'll sort pictures into two groups: Safe Habits and Unsafe Habits.</p>
            <p><strong>The Expected Standard:</strong> Good hygiene means always choosing safe habits to protect ourselves and others.</p>
            <p><strong>Math Connection:</strong> Counting how many safe habits we practice each day!</p>
            <p><strong>Celebration:</strong> We are now Hygiene Guards who know how to fight germs!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-alt" style="color: #4CAF50;"></i> Hygiene Guard</div>
                <p>"A Hygiene Guard always covers food and washes hands!" - We protect ourselves from germs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort" style="color: #9C27B0;"></i> Sorting Habits</div>
                <p>Pictures of washing hands → Safe group. Pictures of drinking dirty water → Unsafe group.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Guard Patrol Game!</div>
                <p>Walk around the classroom and spot safe and unsafe habits in pictures. Put them in the right group!</p>
            </div>
        `,
        taskInstructions: "Group habits into safe and unsafe categories and review hygiene standards.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Picture Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Cut and paste (or draw lines) to group pictures:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border: 2px solid #4CAF50;">
                            <div style="text-align: center; font-weight: bold; color: #4CAF50;">Safe Habits</div>
                            <div class="drawing-area" style="height: 150px; background-color: #f1f8e9;"></div>
                            <div style="text-align: center; margin-top: 5px;">Examples: washing hands, boiling water</div>
                        </div>
                        <div style="flex: 1; padding: 10px; border: 2px solid #f44336;">
                            <div style="text-align: center; font-weight: bold; color: #f44336;">Unsafe Habits</div>
                            <div class="drawing-area" style="height: 150px; background-color: #ffebee;"></div>
                            <div style="text-align: center; margin-top: 5px;">Examples: drinking river water, dirty hands</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Safe Habits</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count how many safe habits you practiced yesterday:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Washed hands before eating</div>
                        <div>☐ Drank clean water</div>
                        <div>☐ Ate covered food</div>
                        <div>☐ Helped wash fruits/vegetables</div>
                        <div>Total safe habits: ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Expected Standard</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a poster showing the "expected standard" of hygiene:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">The expected standard is: ________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Identify the expected standard of hygiene to prevent illness:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle all correct answers:</div>
                        <div>☐ Always wash hands before eating</div>
                        <div>☐ Drink water only from clean sources</div>
                        <div>☐ Cover food to keep flies away</div>
                        <div>☐ Eat food that fell on the floor</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Hygiene Guard Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a Hygiene Guard. Write your pledge:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;">As a Hygiene Guard, I promise to ________________</div>
                </div>
            </div>
        `,
        homework: "Teach one family member how to be a Hygiene Guard. Share one safe habit you learned this week.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek10);
    console.log("math-science-week10-water-food-safety.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek10);
    console.log("math-science-week10-water-food-safety.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek10',
        metadata: grade1MathScienceWeek10.metadata,
        days: grade1MathScienceWeek10
    });
    console.log("math-science-week10-water-food-safety.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek10 = grade1MathScienceWeek10;
console.log("math-science-week10-water-food-safety.js loaded and registered successfully");