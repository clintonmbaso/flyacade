// Grade 1 Mathematics & Science - Week 4 Data (Number Recognition and Counting 1–10)
const grade1MathScienceWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        week: 4,
        title: "Number Recognition and Counting (1–10)",
        description: "Learning to count, recognize, and write numbers 1–10 while exploring living and non-living things"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "The Number Walk",
        subtopic: "Counting 1–10 while identifying objects in the environment",
        lessonContent: `
            <p>Welcome to our Number Walk adventure! Today we will explore our school grounds while practicing our counting skills.</p>
            <p><strong>Key Concept:</strong> We can count from 1 to 10 and find numbers all around us!</p>
            <p><strong>Living vs. Non-Living:</strong></p>
            <ul>
                <li><strong>Living things:</strong> Trees, plants, animals – they grow and change</li>
                <li><strong>Non-living things:</strong> Benches, rocks, buildings – they don't grow</li>
            </ul>
            <p><strong>Our Mission:</strong> We will take a walk and count aloud every time we pass a tree (living) or a bench (non-living).</p>
            <p><strong>Why is this important?</strong> Counting helps us understand how many things are around us. Scientists and mathematicians count to learn about the world.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Tree Count</div>
                <p>"One tree, two trees, three trees" – Each tree we pass is a living thing we can count!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair" style="color: #795548;"></i> Bench Count</div>
                <p>"One bench, two benches" – Benches are non-living but we can still count them!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Counting Chant Game!</div>
                <p>As we walk, we'll chant together: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10!" Every time we see a tree or bench, we start our chant again!</p>
            </div>
        `,
        taskInstructions: "Complete these activities during and after our Number Walk.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> During our walk, count aloud with the class:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Count from 1 to 10 each time we pass a tree</div>
                    <div>☐ Count from 1 to 10 each time we pass a bench</div>
                    <div>☐ How many times did we count to 10? ____ times</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw what you saw on our walk:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">I saw ____ trees and ____ benches.</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Practice counting from 1 to 10. Write the numbers:
                <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                    <div>1 ____ 2 ____ 3 ____ 4 ____ 5 ____</div>
                    <div>6 ____ 7 ____ 8 ____ 9 ____ 10 ____</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the living things we saw:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Tree ☐ Bench ☐ Flower ☐ Building ☐ Bird</div>
                </div>
            </div>
        `,
        homework: "Find five things at home. Count them aloud from 1 to 5. Tell a family member if each is living or non-living.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Living and Non-Living Groups",
        subtopic: "Counting and sorting living vs. non-living things (1–5)",
        lessonContent: `
            <p>Today we will learn to sort objects into two important groups: living and non-living things!</p>
            <p><strong>Key Concept:</strong> Everything around us is either living or non-living, and we can count both!</p>
            <p><strong>What makes something living?</strong></p>
            <ul>
                <li>It grows</li>
                <li>It needs food and water</li>
                <li>It can have babies or make seeds</li>
            </ul>
            <p><strong>What makes something non-living?</strong></p>
            <ul>
                <li>It doesn't grow</li>
                <li>It doesn't need food</li>
                <li>It doesn't make more of itself</li>
            </ul>
            <p><strong>Counting Practice:</strong> We'll count groups up to 5 today. That's one whole hand!</p>
            <p><strong>Think About It:</strong> Is a leaf that fell from a tree still living? (Answer: No, once it falls, it stops growing and becomes non-living!)</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf Tray</div>
                <p>"3 leaves (were living, now non-living) and 2 stones (non-living)" – We can count both types!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #8BC34A;"></i> Living Things</div>
                <p>Plants, animals, and people are living. They grow, eat, and can make babies.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Tray Sorting Game!</div>
                <p>We'll have trays with mixed items. Sort them into living and non-living piles as fast as you can!</p>
            </div>
        `,
        taskInstructions: "Sort and count living and non-living objects.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Tray Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at your tray. Sort items into two groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold; color: #4CAF50;">Living Things</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #4CAF50;"></div>
                            <div>Count: ____ items</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold; color: #795548;">Non-Living Things</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #795548;"></div>
                            <div>Count: ____ items</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Practice 1–5</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count your living things. Write the number and draw that many circles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Living things: ____</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Count your non-living things. Write the number and draw that many squares:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Non-living things: ____</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which Has More?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare your two groups. Circle which has more:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Living: ____ items</div>
                        <div>Non-living: ____ items</div>
                        <div>Which has more? ☐ Living ☐ Non-living</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Living or Not?</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Look at each picture. Circle "Living" or "Non-living":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tree: ☐ Living ☐ Non-living</div>
                        <div>Rock: ☐ Living ☐ Non-living</div>
                        <div>Butterfly: ☐ Living ☐ Non-living</div>
                        <div>Toy car: ☐ Living ☐ Non-living</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 living things and 2 non-living things at home. Draw them and write the numbers.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Number Sculptors",
        subtopic: "Moulding numbers 1–5 using different materials",
        lessonContent: `
            <p>Today we become Number Sculptors! We'll use our hands to create numbers 1 through 5.</p>
            <p><strong>Key Concept:</strong> Numbers have shapes that we can feel and create with our hands.</p>
            <p><strong>Why sculpt numbers?</strong></p>
            <ul>
                <li>Helps our fingers remember the shapes</li>
                <li>Makes learning numbers fun and tactile</li>
                <li>Connects our hands to our brains for better memory</li>
            </ul>
            <p><strong>Number Shapes:</strong></p>
            <ul>
                <li>1 is straight like a stick</li>
                <li>2 curves like a swan</li>
                <li>3 has two bumps</li>
                <li>4 has a triangle and a line</li>
                <li>5 has a straight back and a round belly</li>
            </ul>
            <p><strong>Materials:</strong> We'll use clay, playdough, or even rolled paper to create our numbers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-1" style="color: #f44336;"></i> Number 1</div>
                <p>"Number 1 is a straight line, like a tall tree or a pencil standing up."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-2" style="color: #FF9800;"></i> Number 2</div>
                <p>"Number 2 has a curve at the top and a straight line at the bottom, like a swan swimming."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Clay Challenge!</div>
                <p>We'll have a race to see who can sculpt numbers 1–5 the fastest and most accurately!</p>
            </div>
        `,
        taskInstructions: "Sculpt numbers 1–5 and complete these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Sculpting Station</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use clay or playdough to make numbers 1 through 5:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">1</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Draw your sculpture:</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">2</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Draw your sculpture:</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">3</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Draw your sculpture:</div>
                        </div>
                    </div>
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">4</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Draw your sculpture:</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">5</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Draw your sculpture:</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Feel Test</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Close your eyes! Can you feel which number it is?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>I felt number ____ with my eyes closed.</div>
                        <div>It felt: ☐ Straight ☐ Curvy ☐ Bumpy ☐ Mixed</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number Line Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange your number sculptures in order from 1 to 5:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw your number line:</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>1 → 2 → 3 → 4 → 5</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Number Stories</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Tell a story using your number sculptures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw 1 tree, 2 birds, 3 flowers, 4 rocks, and 5 clouds:</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Use playdough or rolled paper at home to make numbers 1, 2, and 3. Show them to your family.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Trace and Find",
        subtopic: "Tracing numbers 1–5 and matching to environmental objects",
        lessonContent: `
            <p>Today we'll trace numbers with our fingers and then find matching groups in our environment!</p>
            <p><strong>Key Concept:</strong> Each number (1–5) represents a specific quantity we can find all around us.</p>
            <p><strong>What is tracing?</strong></p>
            <ul>
                <li>Following the shape of something with your finger</li>
                <li>Helping your hand learn how to write</li>
                <li>Feeling the shape of numbers</li>
            </ul>
            <p><strong>Tracing Materials:</strong> We'll use sand trays, salt trays, or shaving cream to trace numbers.</p>
            <p><strong>Matching Game:</strong> After tracing a number, we'll find that many objects in our classroom or outside.</p>
            <p><strong>Think About It:</strong> When we trace '3' and then find 3 flowers, we're connecting the written number to real objects!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-3" style="color: #4CAF50;"></i> Number 3 Match</div>
                <p>"Trace '3' in the sand, then find 3 flowers" – The number matches the quantity!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-point-up" style="color: #FF9800;"></i> Finger Tracing</div>
                <p>Using our fingers to trace helps our brains remember the shape better than just looking.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Hunt Game!</div>
                <p>After tracing a number, we'll race to find that many living or non-living things in the classroom!</p>
            </div>
        `,
        taskInstructions: "Trace numbers 1–5 and find matching quantities in the environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sand Tray Tracing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Trace each number in the sand/salt tray:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div style="font-size: 24px;">1</div>
                            <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                            <div>Trace it ____ times</div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div style="font-size: 24px;">2</div>
                            <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                            <div>Trace it ____ times</div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div style="font-size: 24px;">3</div>
                            <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                            <div>Trace it ____ times</div>
                        </div>
                    </div>
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div style="font-size: 24px;">4</div>
                            <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                            <div>Trace it ____ times</div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div style="font-size: 24px;">5</div>
                            <div class="drawing-area" style="height: 60px; border: 1px dashed #ccc;"></div>
                            <div>Trace it ____ times</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Number Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> After tracing each number, find matching objects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>After tracing '1', find 1 living thing: ________________</div>
                        <div>After tracing '2', find 2 non-living things: ________________</div>
                        <div>After tracing '3', find 3 things (any type): ________________</div>
                        <div>After tracing '4', find 4 things (any type): ________________</div>
                        <div>After tracing '5', find 5 things (any type): ________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number-Quantity Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw lines to match numbers to the correct groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="width: 50px;">3</div>
                            <div>○○○○○</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 50px;">5</div>
                            <div>○○○</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 50px;">1</div>
                            <div>○○</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 50px;">2</div>
                            <div>○</div>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 50px;">4</div>
                            <div>○○○○</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Number Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Now try writing numbers 1–5 on paper:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px;">
                        <div>1 ____ 2 ____ 3 ____ 4 ____ 5 ____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Trace numbers 1–5 in flour or sand at home. Then find that many spoons, toys, or books.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "The Naming Game",
        subtopic: "Recognizing and naming numbers 1–5, collecting matching quantities",
        lessonContent: `
            <p>Today we play the Naming Game! We'll practice recognizing numbers 1–5 and collecting matching quantities.</p>
            <p><strong>Key Concept:</strong> Each number has a name (one, two, three, four, five) and represents a specific amount.</p>
            <p><strong>Number Recognition:</strong> Being able to look at a written number and say its name correctly.</p>
            <p><strong>Quantity Connection:</strong> Understanding that "3" means the same as "three objects."</p>
            <p><strong>Materials:</strong> We'll use number cards 1–5 and collect non-living items like pebbles, blocks, or counters.</p>
            <p><strong>Special Focus:</strong> Today we focus on non-living items to practice our counting without confusing living things.</p>
            <p><strong>Celebration:</strong> We've learned to recognize, say, trace, sculpt, and match numbers 1–5! Next week: numbers 6–10!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-4" style="color: #2196F3;"></i> Number 4 Card</div>
                <p>"This card says 4. That means I need to collect 4 pebbles to match it."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes" style="color: #FF9800;"></i> Collection Station</div>
                <p>Pebbles, blocks, buttons, and bottle caps are all non-living things we can count and collect.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Card Race!</div>
                <p>I'll show a number card. First person to collect the right number of items wins a point!</p>
            </div>
        `,
        taskInstructions: "Play the Naming Game and complete these number activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Number Card Recognition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each number card. Say its name out loud:
                    <div style="display: flex; margin-top: 10px; font-size: 36px; justify-content: space-around;">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Write the number names:</div>
                        <div>1 = ________ 2 = ________ 3 = ________</div>
                        <div>4 = ________ 5 = ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Collection Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each number card, collect matching non-living items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Card 1: Collect ____ pebble(s). Draw them:</div>
                        <div class="drawing-area" style="height: 40px;"></div>
                        <div>Card 3: Collect ____ block(s). Draw them:</div>
                        <div class="drawing-area" style="height: 40px;"></div>
                        <div>Card 5: Collect ____ button(s). Draw them:</div>
                        <div class="drawing-area" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number Memory Test</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Cover the numbers. Can you remember which is which?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which number means "five"? ☐ 1 ☐ 5 ☐ 3</div>
                        <div>Which number means "two"? ☐ 2 ☐ 4 ☐ 1</div>
                        <div>Draw the number that comes after 3: <span class="drawing-area" style="width: 30px; height: 30px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Number Line Completion</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Fill in the missing numbers on the number line:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px;">
                        <div>1 → ____ → 3 → ____ → 5</div>
                        <div>____ → 2 → ____ → 4 → ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Number Master Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself holding your favorite number. Write why you like it:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I like number ____ because ________________</div>
                </div>
            </div>
        `,
        homework: "Play the Naming Game at home. Show number cards 1–5 to a family member and have them collect matching items.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek4);
    console.log("math-science-week4-numbers.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek4);
    console.log("math-science-week4-numbers.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek4',
        metadata: grade1MathScienceWeek4.metadata,
        days: grade1MathScienceWeek4
    });
    console.log("math-science-week4-numbers.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek4 = grade1MathScienceWeek4;
console.log("math-science-week4-numbers.js loaded and registered successfully");