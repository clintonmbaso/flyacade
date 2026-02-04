// Grade 1 Mathematics & Science - Week 5 Data (Early Operations and Advanced Counting)
const grade1MathScienceWeek5 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        week: 5,
        title: "Early Operations and Advanced Counting",
        description: "Learning basic addition and subtraction with living and non-living things, counting up to 10"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Counting to Ten",
        subtopic: "Counting living and non-living things up to 10",
        lessonContent: `
            <p>Welcome to our counting adventure! Today we will practice counting all the way to 10 using different objects from our world.</p>
            <p><strong>Key Concept:</strong> Numbers help us understand how many things we have, whether they're living or non-living.</p>
            <p><strong>Counting to 10 is Important Because:</strong></p>
            <ul>
                <li>It helps us share things fairly</li>
                <li>It lets us know if we have enough of something</li>
                <li>It's the foundation for all our math skills</li>
            </ul>
            <p><strong>Living vs. Non-living Things:</strong></p>
            <ul>
                <li><strong>Living:</strong> Plants, animals, insects (things that grow and change)</li>
                <li><strong>Non-living:</strong> Stones, sticks, seeds, toys (things that don't grow)</li>
                <li><strong>Both can be counted!</strong></li>
            </ul>
            <p><strong>Our Mission:</strong> We will visit different counting stations and practice counting groups of up to 10 items.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf Counting Station</div>
                <p>"At this station, we count 7 leaves. 1, 2, 3, 4, 5, 6, 7 leaves total!" - Leaves are living things we can count.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #8BC34A;"></i> Seed Counting Station</div>
                <p>"This station has 10 seeds. Seeds are living things that can grow into plants when planted!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Counting Station Game!</div>
                <p>We'll have 4 stations around the room with different collections. You'll move from station to station counting each group!</p>
            </div>
        `,
        taskInstructions: "Visit each counting station and complete these activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Station 1: Count the sticks
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>How many sticks? ______</div>
                    <div>Draw the sticks you counted:</div>
                    <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    <div>Sticks are: ☐ Living ☐ Non-living</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Station 2: Count the leaves
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>How many leaves? ______</div>
                    <div>Circle the number on the number line:</div>
                    <div style="font-size: 20px; margin-top: 5px;">1 2 3 4 5 6 7 8 9 10</div>
                    <div>Leaves are: ☐ Living ☐ Non-living</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Station 3: Count the seeds
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>How many seeds? ______</div>
                    <div>Write the numbers as you count:</div>
                    <div class="answer-space" style="height: 30px; margin-top: 10px;"></div>
                    <div>Seeds are: ☐ Living ☐ Non-living</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Station 4: Mixed collection
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Count all the objects: ______</div>
                    <div>Living things in this station: ______</div>
                    <div>Non-living things in this station: ______</div>
                    <div>Total: ______</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">5</span> Counting Challenge
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Count to 10 out loud with your partner:</div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">1, 2, 3, ____, ____, ____, ____, ____, ____, 10</div>
                </div>
            </div>
        `,
        homework: "Find 10 small objects at home (like buttons, coins, or pasta pieces). Count them out loud to a family member.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Living Addition",
        subtopic: "Adding living and non-living things up to 5",
        lessonContent: `
            <p>Today we will learn about addition - putting things together to make a bigger group!</p>
            <p><strong>Key Concept:</strong> Addition means combining two groups to find the total.</p>
            <p><strong>What is Addition?</strong></p>
            <ul>
                <li>Putting things together</li>
                <li>Making a group bigger</li>
                <li>Finding "how many altogether"</li>
            </ul>
            <p><strong>Addition Symbol:</strong> The plus sign (+) means "add" or "put together."</p>
            <p><strong>Example:</strong> 2 flowers + 1 more flower = 3 flowers total</p>
            <p><strong>Living Things Addition:</strong> We can add living things (like flowers, birds, insects) to find out how many we have.</p>
            <p><strong>Non-living Things Addition:</strong> We can also add non-living things (like stones, sticks, toys).</p>
            <p><strong>Today's Goal:</strong> Add two groups to find sums up to 5.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-plus" style="color: #f44336;"></i> Flower Addition</div>
                <p>"If we have 2 flowers and we find 1 more flower, we have 3 flowers total." 2 + 1 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-crow" style="color: #2196F3;"></i> Bird Addition</div>
                <p>"1 bird on the fence + 2 birds on the ground = 3 birds altogether." 1 + 2 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Garden Addition Game!</div>
                <p>We'll use our garden pictures and counters to create addition stories with living things!</p>
            </div>
        `,
        taskInstructions: "Use counters and pictures to solve addition problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Flower Garden Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use flower counters to solve:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 flowers + 2 more flowers = ______ flowers</div>
                        <div>Draw your flowers:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                        <div>Equation: 2 + 2 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Butterfly Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count the butterflies:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 butterfly + 3 butterflies = ______ butterflies</div>
                        <div>Circle the groups:</div>
                        <div style="font-size: 24px; margin-top: 5px;">🦋 🦋🦋🦋</div>
                        <div>Total: ______</div>
                        <div>Equation: 1 + 3 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixed Living Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Solve this living things problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>There are 2 worms in the soil and 1 worm on top.</div>
                        <div>How many worms altogether? ______</div>
                        <div>Draw the worms:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                        <div>Equation: ______ + ______ = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Addition</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Make up your own addition story:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My story: ________________________________________</div>
                        <div>The addition: ______ + ______ = ______</div>
                        <div>Draw your story:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Addition Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Solve these addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>3 + 1 = ______</div>
                        <div>2 + 2 = ______</div>
                        <div>1 + 4 = ______</div>
                        <div>0 + 5 = ______ (zero means nothing!)</div>
                        <div>4 + 1 = ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find two groups of objects at home (like 2 spoons and 3 forks). Add them together and tell a family member the total.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Taking Away from the Garden",
        subtopic: "Subtracting living and non-living things up to 4",
        lessonContent: `
            <p>Today we will learn about subtraction - taking things away to make a group smaller!</p>
            <p><strong>Key Concept:</strong> Subtraction means removing some items from a group.</p>
            <p><strong>What is Subtraction?</strong></p>
            <ul>
                <li>Taking things away</li>
                <li>Making a group smaller</li>
                <li>Finding "how many are left"</li>
            </ul>
            <p><strong>Subtraction Symbol:</strong> The minus sign (-) means "subtract" or "take away."</p>
            <p><strong>Example:</strong> 5 stones - 1 stone = 4 stones left</p>
            <p><strong>Garden Subtraction:</strong> In nature, sometimes things get taken away - a bird might take a seed, or we might pick a flower.</p>
            <p><strong>Important:</strong> When we subtract, we always end up with a smaller number (or the same if we subtract zero).</p>
            <p><strong>Today's Goal:</strong> Subtract from groups to find differences up to 4.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-minus" style="color: #2196F3;"></i> Stone Subtraction</div>
                <p>"Start with 5 stones. Take away 1 stone. Now we have 4 stones left." 5 - 1 = 4</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #f44336;"></i> Fruit Subtraction</div>
                <p>"4 apples on a tree. A squirrel takes 1 apple. Now there are 3 apples left." 4 - 1 = 3</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Take Away Game!</div>
                <p>We'll start with groups of objects and take some away. We'll count how many are left each time!</p>
            </div>
        `,
        taskInstructions: "Use physical objects to practice subtraction.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Stone Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Start with 5 stones (use counters):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Take away 1 stone. How many left? ______</div>
                        <div>Draw the stones before and after:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; text-align: center;">
                                <div>Before (5 stones)</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>After (____ stones)</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                        </div>
                        <div>Equation: 5 - 1 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Leaf Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> There are 4 leaves on a branch:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The wind blows 2 leaves away. How many left? ______</div>
                        <div>Cross out 2 leaves from this group of 4:</div>
                        <div style="font-size: 24px; margin-top: 5px;">🍃 🍃 🍃 🍃</div>
                        <div>Leaves left: ______</div>
                        <div>Equation: 4 - 2 = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Seed Subtraction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A bird finds 3 seeds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The bird eats 1 seed. How many seeds are left? ______</div>
                        <div>Draw the story:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Equation: ______ - ______ = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Subtraction Stories</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these subtraction stories:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>6 flowers in a vase. We give 2 flowers to a friend. Left: ______</div>
                        <div>5 stones in a pile. We use 3 stones for a project. Left: ______</div>
                        <div>4 bugs on a leaf. 1 bug flies away. Left: ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Subtraction Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Solve these subtraction problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>4 - 1 = ______</div>
                        <div>3 - 2 = ______</div>
                        <div>5 - 3 = ______</div>
                        <div>2 - 0 = ______ (taking away zero leaves the same!)</div>
                        <div>5 - 4 = ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Start with 5 small objects (like coins or buttons). Take away 2 objects. Count how many are left and tell a family member.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Mixed Addition",
        subtopic: "Adding mixed groups of living and non-living things",
        lessonContent: `
            <p>Today we will practice addition with different types of objects - living AND non-living things mixed together!</p>
            <p><strong>Key Concept:</strong> We can add any objects together as long as we're counting "how many things altogether."</p>
            <p><strong>Mixed Addition Means:</strong></p>
            <ul>
                <li>Adding living things + non-living things</li>
                <li>Adding different types of objects</li>
                <li>Finding the total of a mixed collection</li>
            </ul>
            <p><strong>Real World Example:</strong> In a park, we might see 2 birds (living) and 3 benches (non-living). That's 5 things total!</p>
            <p><strong>Story Problems:</strong> We can create stories that mix different types of objects to make addition more fun!</p>
            <p><strong>Important:</strong> When we add mixed groups, we're counting OBJECTS, not comparing what they are.</p>
            <p><strong>Today's Goal:</strong> Solve addition problems with mixed living and non-living things up to 5.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Park Addition</div>
                <p>"1 bird in the tree + 3 stones on the ground = 4 things altogether." Living + non-living = total objects!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug" style="color: #8BC34A;"></i> Garden Collection</div>
                <p>"2 ladybugs (living) + 2 pebbles (non-living) = 4 items in my collection." Different types, same counting!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mixed Bag Game!</div>
                <p>We'll reach into mystery bags with mixed items, pull them out, and add them together!</p>
            </div>
        `,
        taskInstructions: "Solve mixed addition problems using counters and drawings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Story Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve this story problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"There is 1 bird in the tree and 3 stones on the ground."</div>
                        <div>How many things are there altogether? ______</div>
                        <div>Draw the scene:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Equation: 1 + 3 = ______</div>
                        <div>Living things: ______ Non-living things: ______ Total: ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Garden Mix</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In the garden we see:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 flowers (living) + 1 garden gnome (non-living)</div>
                        <div>How many things total? ______</div>
                        <div>Use counters to show your work:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                        <div>Flowers are: ☐ Living ☐ Non-living</div>
                        <div>Garden gnome is: ☐ Living ☐ Non-living</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Nature Walk Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> On a nature walk you collect:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 pinecone (non-living) + 2 leaves (living) + 1 feather (living)</div>
                        <div>How many items in your collection? ______</div>
                        <div>Draw your collection:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Living items: ______ Non-living items: ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own Mixed Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Make up your own mixed addition story:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My story: ________________________________________</div>
                        <div>Living things in my story: ______</div>
                        <div>Non-living things in my story: ______</div>
                        <div>Total: ______</div>
                        <div>Equation: ______ + ______ = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Mixed Addition Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Solve these mixed addition problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 butterflies + 1 rock = ______ things</div>
                        <div>1 worm + 3 sticks = ______ things</div>
                        <div>0 birds + 4 stones = ______ things</div>
                        <div>2 living + 2 non-living = ______ things</div>
                        <div>Draw your favorite mixed addition: <span class="drawing-area" style="width: 100px; height: 50px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 2 living things (like a plant or pet) and 2 non-living things (like a book or toy). Add them together and tell a family member the total.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "The Subtraction Mystery",
        subtopic: "Subtraction with environmental items up to 4",
        lessonContent: `
            <p>Today is our subtraction mystery day! We'll solve puzzles where things disappear or get taken away.</p>
            <p><strong>Key Concept:</strong> Subtraction helps us figure out what's left when something is removed.</p>
            <p><strong>The Mystery of Missing Things:</strong> In nature, things often disappear - leaves fall, animals hide, fruits get eaten.</p>
            <p><strong>Solving Subtraction Mysteries:</strong></p>
            <ul>
                <li>Start with how many we have</li>
                <li>Figure out how many were taken away</li>
                <li>Discover how many are left</li>
            </ul>
            <p><strong>Hidden Objects:</strong> Sometimes we can't see what's left - like leaves hidden under a cloth!</p>
            <p><strong>Our Detective Skills:</strong> We'll use our counting skills to solve these subtraction mysteries.</p>
            <p><strong>Today's Goal:</strong> Solve subtraction problems with differences up to 4, even when we can't see everything!</p>
            <p><strong>Celebration:</strong> We've learned to count, add, AND subtract using our world around us!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search" style="color: #FF9800;"></i> Leaf Mystery</div>
                <p>"4 leaves were hidden. I saw 2 leaves removed. How many are still hidden? Let's count to solve the mystery!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question" style="color: #9C27B0;"></i> Seed Disappearance</div>
                <p>"A squirrel buried 5 seeds. Later, we found only 1 seed left. How many seeds did the squirrel eat or hide elsewhere?"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mystery Cloth Game!</div>
                <p>We'll hide objects under a cloth, remove some while everyone watches, and guess how many are still hidden!</p>
            </div>
        `,
        taskInstructions: "Solve subtraction mysteries using observation and counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Hidden Leaf Mystery</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> 4 leaves were hidden under a cloth:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 leaves were removed while we watched.</div>
                        <div>How many leaves are still hidden? ______</div>
                        <div>Draw the mystery:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Equation: 4 - 2 = ______</div>
                        <div>Check by lifting the cloth! Were you right? ☐ Yes ☐ No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Disappearing Seeds</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A bird had 3 seeds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The bird ate some seeds. Now there is 1 seed left.</div>
                        <div>How many seeds did the bird eat? ______</div>
                        <div>Show your work with drawings:</div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; text-align: center;">
                                <div>Before (3 seeds)</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>After (1 seed)</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                        </div>
                        <div>Equation: 3 - ______ = 1</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Case of the Missing Stones</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> There were 5 stones in a pile:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Some stones were used to build a tower. 2 stones are left.</div>
                        <div>How many stones were used for the tower? ______</div>
                        <div>Draw the stone tower:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>The mystery equation: 5 - ______ = 2</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create a Subtraction Mystery</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Make up your own subtraction mystery:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My mystery story: ________________________________</div>
                        <div>Starting amount: ______</div>
                        <div>Ending amount: ______</div>
                        <div>How many disappeared? ______</div>
                        <div>Equation: ______ - ______ = ______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Math Detective Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a math detective solving mysteries:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned to add and subtract by ________________________________</div>
                    <div style="margin-top: 10px; text-align: center; font-size: 18px; font-weight: bold;">
                        Certificate of Achievement<br>
                        Math Detective<br>
                        Week 5: Operations Master
                    </div>
                </div>
            </div>
        `,
        homework: "Create a subtraction mystery at home. Start with 4 objects, hide some under a cup, and ask a family member to guess how many are hidden.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek5);
    console.log("math-science-week5-operations.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek5);
    console.log("math-science-week5-operations.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek5',
        metadata: grade1MathScienceWeek5.metadata,
        days: grade1MathScienceWeek5
    });
    console.log("math-science-week5-operations.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek5 = grade1MathScienceWeek5;
console.log("math-science-week5-operations.js loaded and registered successfully");