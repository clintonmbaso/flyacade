// Grade 1 Mathematics & Science - Week 10 Data (Measuring and Comparing)
const grade1MathScienceWeek10 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        week: 10,
        title: "Measuring and Comparing — Size, Length, and Width",
        description: "Learning to compare and measure objects using non-standard units and comparison vocabulary"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Big and Small Waste",
        subtopic: "Comparing the sizes of different waste objects",
        lessonContent: `
            <p>Welcome to our measuring week! Today we will learn how to compare different waste objects by their size.</p>
            <p><strong>Key Concept:</strong> Objects can be compared using words like long, short, wide, and narrow.</p>
            <p><strong>What does "longest" mean?</strong></p>
            <ul>
                <li>The item that stretches the farthest from one end to the other</li>
                <li>The greatest distance between two points</li>
                <li>What takes up the most space in one direction</li>
            </ul>
            <p><strong>What does "shortest" mean?</strong></p>
            <ul>
                <li>The item that takes up the least space from end to end</li>
                <li>The smallest distance between two points</li>
                <li>What fits in a small area</li>
            </ul>
            <p><strong>Our Mission:</strong> We will gather clean waste items and compare them to find the longest and shortest objects!</p>
            <p><strong>Why is this important?</strong> Knowing how to compare sizes helps us organize our world and manage waste properly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box" style="color: #795548;"></i> Cereal Box</div>
                <p>"This cereal box is long and tall" - It has length from top to bottom and width from side to side.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wine-bottle" style="color: #4CAF50;"></i> Bottle Cap</div>
                <p>"This bottle cap is short and small" - It doesn't take up much space in any direction.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Size Detective Game!</div>
                <p>We'll have a line of waste objects. Can you point to the longest item and the shortest item as fast as you can?</p>
            </div>
        `,
        taskInstructions: "Complete the following activities comparing waste objects.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Gather these clean waste items:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ One cereal box (large)</div>
                    <div>☐ One bottle cap (small)</div>
                    <div>☐ One paper towel tube</div>
                    <div>☐ One plastic spoon</div>
                    <div>☐ One mystery waste item!</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Line up your items from longest to shortest:
                <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">Longest: ________, Shortest: ________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw the longest item and the shortest item:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; text-align: center;">
                        <div>Longest Item</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                    <div style="flex: 1; text-align: center;">
                        <div>Shortest Item</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the correct comparison words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>The cereal box is: ☐ Long ☐ Short ☐ Wide ☐ Narrow</div>
                    <div>The bottle cap is: ☐ Long ☐ Short ☐ Wide ☐ Narrow</div>
                    <div>The paper tube is: ☐ Long ☐ Short ☐ Wide ☐ Narrow</div>
                </div>
            </div>
        `,
        homework: "Find three items at home and compare them. Tell your family which is longest and which is shortest.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Measuring Length with Handspans",
        subtopic: "Measuring length using non-standard units",
        lessonContent: `
            <p>Today we will learn how to measure length using our own hands as measuring tools!</p>
            <p><strong>Key Concept:</strong> We can measure objects even without a ruler by using our body parts.</p>
            <p><strong>What is a handspan?</strong></p>
            <ul>
                <li>The distance from the tip of your thumb to the tip of your pinky when your hand is stretched out</li>
                <li>Your personal measuring tool that you always have with you</li>
                <li>A way to measure "how many hands long" something is</li>
            </ul>
            <p><strong>How to Measure with Handspans:</strong></p>
            <ul>
                <li>Place your hand at one end of the object</li>
                <li>Mark where your pinky reaches</li>
                <li>Move your hand to that mark and repeat</li>
                <li>Count how many handspans it takes to reach the end</li>
            </ul>
            <p><strong>Let's Count:</strong> We'll count together as we measure our classroom tables!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper" style="color: #FF9800;"></i> Handspan Measuring</div>
                <p>"This book is 3 handspans long" - I placed my hand three times along the book to measure it.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler" style="color: #2196F3;"></i> Table Measurement</div>
                <p>"Our classroom table is 8 handspans long" - Different people might get different numbers because our hands are different sizes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Handspan Race!</div>
                <p>We'll measure different objects around the room. Who can find something that measures exactly 5 handspans?</p>
            </div>
        `,
        taskInstructions: "Measure different objects using your handspans.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Table Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure your classroom table using handspans:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My table is ____ handspans long.</div>
                        <div>Draw how you measured it:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Different Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure three different objects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Book: ____ handspans</div>
                        <div>Pencil case: ____ handspans</div>
                        <div>Your shoe: ____ handspans</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare with a Friend</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Measure the same book with a friend. Are your measurements the same?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My measurement: ____ handspans</div>
                        <div>My friend's measurement: ____ handspans</div>
                        <div>Why are they different? ________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Handspan Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace your hand and use it to measure a line:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">This line is ____ of my handspans long.</div>
                </div>
            </div>
        `,
        homework: "Measure three things at home using your handspans. Tell your family how many handspans each item is.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Comparing Widths",
        subtopic: "Understanding wide and narrow objects",
        lessonContent: `
            <p>Today we will learn about width - how wide or narrow objects are!</p>
            <p><strong>Key Concept:</strong> Width tells us how much space something takes from side to side.</p>
            <p><strong>Width Vocabulary:</strong></p>
            <ul>
                <li><strong>Wide:</strong> Takes up a lot of space from side to side</li>
                <li><strong>Narrow:</strong> Takes up very little space from side to side</li>
                <li><strong>Wider than:</strong> When one object has more width than another</li>
                <li><strong>Narrower than:</strong> When one object has less width than another</li>
            </ul>
            <p><strong>Science Connection:</strong> We can predict whether an object will fit into a bin based on its width!</p>
            <p><strong>Think About It:</strong> Would a wide box fit through a narrow doorway? Why or why not?</p>
            <p><strong>Answer:</strong> No, because the box is wider than the doorway opening!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open" style="color: #795548;"></i> Wide Box</div>
                <p>"This box is wide" - It takes up a lot of space from left to right. You might need to turn it sideways to fit through a door!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler" style="color: #4CAF50;"></i> Narrow Ruler</div>
                <p>"This ruler is narrow" - It doesn't take up much space from side to side. It can fit through small gaps easily!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Width Walk Game!</div>
                <p>We'll create gaps of different widths. Can you walk through the wide gap? The narrow gap? Which was easier?</p>
            </div>
        `,
        taskInstructions: "Compare the widths of different objects and predict what will fit where.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Box Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare two boxes. Which is wider? Which is narrower?
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>Box A</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>☐ Wide ☐ Narrow</div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Box B</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>☐ Wide ☐ Narrow</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fitting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Will these objects fit through the bin opening?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Wide cardboard: ☐ Yes ☐ No (Why? ________________)</div>
                        <div>Narrow bottle: ☐ Yes ☐ No (Why? ________________)</div>
                        <div>Draw the bin opening: <div class="drawing-area" style="height: 60px; width: 200px; display: inline-block;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Side-by-Side Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Place objects side-by-side to compare widths:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw two objects with different widths:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Object 1 is ________ than Object 2.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Width Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Find one wide and one narrow object in the classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Wide object: ________________ (draw it)</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                        <div>Narrow object: ________________ (draw it)</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find two objects at home - one wide and one narrow. Show your family the difference.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Measuring with Footsteps",
        subtopic: "Measuring distance using non-standard units",
        lessonContent: `
            <p>Today we will learn how to measure longer distances using our footsteps!</p>
            <p><strong>Key Concept:</strong> We can use our bodies to measure how far things are from each other.</p>
            <p><strong>What is step measuring?</strong></p>
            <ul>
                <li>Counting how many normal steps it takes to get from one place to another</li>
                <li>Using our feet as measuring tools</li>
                <li>A way to measure distance without a measuring tape</li>
            </ul>
            <p><strong>How to Measure with Steps:</strong></p>
            <ul>
                <li>Start with your heels at the starting point</li>
                <li>Take normal-sized steps (not too big, not too small)</li>
                <li>Count each step out loud</li>
                <li>Stop when you reach the destination</li>
            </ul>
            <p><strong>Mathematics:</strong> We'll practice counting while measuring - this helps us understand distance and length in real life!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints" style="color: #2196F3;"></i> Step Counting</div>
                <p>"It takes 15 steps to get from my desk to the door" - I counted each step as I walked normally.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt" style="color: #4CAF50;"></i> Waste Area Distance</div>
                <p>"The garbage bin is 20 steps from our classroom" - We need to know this to plan our waste disposal trips!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Step Estimation Game!</div>
                <p>Look at a distance and guess how many steps it will take. Then walk it and see how close your guess was!</p>
            </div>
        `,
        taskInstructions: "Measure different distances using your footsteps.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom to Waste Bin</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Measure from classroom door to waste bin:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Guess first: ____ steps</div>
                        <div>Actual count: ____ steps</div>
                        <div>Draw your path: <div class="drawing-area" style="height: 80px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Different Distances</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure these classroom distances:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>From your desk to teacher's desk: ____ steps</div>
                        <div>From whiteboard to bookshelf: ____ steps</div>
                        <div>From sink to recycling bin: ____ steps</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare Step Sizes</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Measure the same distance with a friend:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Distance: From door to window</div>
                        <div>My steps: ____</div>
                        <div>Friend's steps: ____</div>
                        <div>Why different? _________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Step Drawing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a path that would take exactly 10 steps to walk:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div>What did you draw? ________________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is measuring steps useful for waste management?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw or write your answer:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                        <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Measure how many steps it takes to get from your bedroom door to the kitchen trash can at home.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "The 'Clean and Measure' Review",
        subtopic: "Managing waste while practicing measurement",
        lessonContent: `
            <p>Today is our measurement celebration! We'll combine everything we learned to manage waste properly.</p>
            <p><strong>Key Concept 1:</strong> We can use measurement to help sort and manage waste effectively.</p>
            <p><strong>What have we learned this week?</strong></p>
            <ul>
                <li>Long vs. short objects</li>
                <li>Measuring with handspans</li>
                <li>Wide vs. narrow objects</li>
                <li>Measuring distance with steps</li>
            </ul>
            <p><strong>Key Concept 2:</strong> Proper waste management requires understanding sizes and measurements.</p>
            <p><strong>Today's Mission:</strong> Sort waste into correct bins while identifying the longest, shortest, widest, and narrowest items!</p>
            <p><strong>Evaluation:</strong> We'll see if everyone can correctly sort waste and identify measurements!</p>
            <p><strong>Celebration:</strong> We've become measurement experts who can help keep our environment clean!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle" style="color: #4CAF50;"></i> Recycling Sorting</div>
                <p>"The longest piece of cardboard goes in recycling" - We measure to make sure it fits in the bin!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash" style="color: #795548;"></i> Waste Management</div>
                <p>"The smallest piece of general waste goes in the food bin" - Small items fit in smaller openings!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Clean-Up Challenge Game!</div>
                <p>We'll have a timed clean-up where you must correctly measure and sort items into the right bins!</p>
            </div>
        `,
        taskInstructions: "Complete the final measurement and sorting challenges.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Waste Sorting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and sort these waste items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Find the LONGEST piece of cardboard → Put in ☐ Recycling ☐ General Waste</div>
                        <div>Find the SMALLEST piece of waste → Put in ☐ Food Bin ☐ Recycling</div>
                        <div>Find the WIDEST item → Put in ☐ Recycling ☐ General Waste</div>
                        <div>Find the NARROWEST item → Put in ☐ Food Bin ☐ Recycling</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measurement Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Measure and compare these items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Item A: ____ handspans long, ____ steps from bin</div>
                        <div>Item B: ____ handspans long, ____ steps from bin</div>
                        <div>Which is longer? ☐ Item A ☐ Item B</div>
                        <div>Which is wider? ☐ Item A ☐ Item B</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Bin Capacity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Test which items fit in which bins:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Recycling bin opening: ____ handspans wide</div>
                        <div>Food bin opening: ____ handspans wide</div>
                        <div>General waste bin: ____ steps from your desk</div>
                        <div>Draw a too-wide item that won't fit: <div class="drawing-area" style="height: 60px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Measurement Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Show what you learned this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My favorite way to measure is: ☐ Handspans ☐ Footsteps ☐ Comparing</div>
                        <div>The most useful measurement for waste is: ________________</div>
                        <div>Draw yourself measuring something: <div class="drawing-area" style="height: 100px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Measurement Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a measurement expert. Write what you learned:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned to measure using ________________</div>
                    <div style="text-align: center; margin-top: 20px; font-weight: bold; color: #2196F3;">
                        CONGRATULATIONS!<br>
                        You are now a Measurement Expert!
                    </div>
                </div>
            </div>
        `,
        homework: "Help sort recycling at home. Find the longest cardboard item and the smallest waste item. Tell your family why measurement matters for recycling.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek10);
    console.log("math-science-week10-measuring.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek10);
    console.log("math-science-week10-measuring.js registered using DataLoader.registerWorksheet()");
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
    console.log("math-science-week10-measuring.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek10 = grade1MathScienceWeek10;
console.log("math-science-week10-measuring.js loaded and registered successfully");