// Reception Class Mathematics & Science - Week 2 Data (Exploring Our World)
const receptionMathScienceWeek2 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics & Science",
        week: 2,
        title: "Exploring Our World — Sorting, Identifying, and Counting",
        description: "Learning to distinguish living from non-living, sort by size, count sets, group by color, and categorize animals by physical features"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Living vs. Non-Living Scavenger Hunt",
        subtopic: "Identifying and distinguishing between living and non-living things",
        lessonContent: `
            <p>Welcome to our world exploration! Today we will go on a scavenger hunt to discover what is living and what is not.</p>
            <p><strong>Key Concept:</strong> Living things are different from non-living things.</p>
            <p><strong>What makes something living?</strong></p>
            <ul>
                <li>It can grow</li>
                <li>It needs food and water</li>
                <li>It can move by itself (sometimes!)</li>
                <li>It can have babies or make seeds</li>
            </ul>
            <p><strong>What makes something non-living?</strong></p>
            <ul>
                <li>It does not grow</li>
                <li>It does not need food</li>
                <li>It cannot have babies</li>
                <li>It does not breathe</li>
            </ul>
            <p><strong>Our Mission:</strong> We will find one living thing and one non-living thing outside.</p>
            <p><strong>Why is this important?</strong> Scientists learn about our world by noticing what is alive and what is not.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Living Example</div>
                <p>"This leaf is living because it grew on a tree" - Leaves come from living plants!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stone" style="color: #795548;"></i> Non-Living Example</div>
                <p>"This stone is non-living because it never eats or grows" - Stones have always been here!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Scavenger Hunt Game!</div>
                <p>We're going outside to find treasures! Look for something living (like a leaf or ant) and something non-living (like a pebble or bottle cap).</p>
            </div>
        `,
        taskInstructions: "Complete the scavenger hunt and sorting activities.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Go outside and find:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ One living thing</div>
                    <div>☐ One non-living thing</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Place your items in the correct hoop:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc; text-align: center;">
                        <div style="color: #4CAF50; font-weight: bold;">Living Things Hoop</div>
                        <div class="drawing-area" style="height: 100px; border: 2px solid #4CAF50; border-radius: 50%; margin: 10px auto; width: 100px;"></div>
                        <div>Draw what you put here:</div>
                    </div>
                    <div style="flex: 1; padding: 10px; text-align: center;">
                        <div style="color: #795548; font-weight: bold;">Non-Living Things Hoop</div>
                        <div class="drawing-area" style="height: 100px; border: 2px solid #795548; border-radius: 50%; margin: 10px auto; width: 100px;"></div>
                        <div>Draw what you put here:</div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the living things:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Bird ☐ Stone ☐ Ant ☐ Toy car ☐ Leaf</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Discussion question:
                <div class="answer-space" style="height: 40px; margin-top: 10px;">Why is a bird living but a stone is not?</div>
                <div style="margin-left: 20px; margin-top: 5px; font-size: 14px;">
                    <div>☐ Bird can move by itself</div>
                    <div>☐ Bird needs food</div>
                    <div>☐ Stone never eats or grows</div>
                </div>
            </div>
        `,
        homework: "Find one living thing and one non-living thing at home. Tell a grown-up why they are different.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "The Size of My World (Big and Small)",
        subtopic: "Grouping non-living things by size",
        lessonContent: `
            <p>Today we will explore size! We'll look at how objects can be small, medium, or big.</p>
            <p><strong>Key Concept:</strong> We can sort objects by how big they are.</p>
            <p><strong>Size Words:</strong></p>
            <ul>
                <li><strong>Tiny:</strong> Very, very small</li>
                <li><strong>Small:</strong> Little</li>
                <li><strong>Medium:</strong> Not too big, not too small</li>
                <li><strong>Big/Large:</strong> Very large</li>
            </ul>
            <p><strong>Measurement Language:</strong> We can use words like "bigger than," "smaller than," "the biggest," "the smallest."</p>
            <p><strong>Let's Explore:</strong> We'll look at stones and buttons and arrange them by size.</p>
            <p><strong>Think About It:</strong> Can a small living thing be smaller than a big non-living thing?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up" style="color: #FF9800;"></i> Size Parade</div>
                <p>Line up stones from smallest to biggest - like a parade of pebbles!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #795548;"></i> Button Collection</div>
                <p>Buttons come in many sizes - tiny shirt buttons, medium coat buttons, big decorative buttons!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Size Sort Game!</div>
                <p>We'll have sorting trays: Small, Medium, Big. Race to put objects in the right tray!</p>
            </div>
        `,
        taskInstructions: "Sort objects by size and create a size parade.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Stone Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take stones from the tray. Sort them into three groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Small Stones</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Medium Stones</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Big Stones</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create a Parade</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Make a parade of 5 objects from smallest to biggest:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Smallest → → → → Biggest</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Size Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare sizes. Circle the bigger object in each pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Tiny ant ☐ Big brick</div>
                        <div>☐ Small button ☐ Large book</div>
                        <div>☐ Medium stone ☐ Giant teddy bear</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Discussion Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Can a small living thing be smaller than a big non-living thing?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Yes! An ant is smaller than a brick</div>
                        <div>☐ No! Living things are always bigger</div>
                        <div>Draw an example:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three objects at home and line them up from smallest to largest.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Counting the Garden",
        subtopic: "Grouping living things by quantity",
        lessonContent: `
            <p>Today we will count living things! We'll learn about different plants and animals and how many are in each group.</p>
            <p><strong>Key Concept:</strong> We can count living things just like we count toys or buttons.</p>
            <p><strong>Living Things Around Us:</strong></p>
            <ul>
                <li><strong>Plants:</strong> Trees, grass, flowers, bushes</li>
                <li><strong>Animals:</strong> Insects, birds, pets, wild animals</li>
            </ul>
            <p><strong>Counting Practice:</strong> Today we'll count groups up to 10!</p>
            <p><strong>Grouping:</strong> We put "like" things together - all the cats together, all the dogs together.</p>
            <p><strong>Question:</strong> Which group has the most living things?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Garden Count</div>
                <p>"There are 3 trees in our garden, 5 bushes, and lots of grass!" - We can count plants!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw" style="color: #795548;"></i> Animal Groups</div>
                <p>"3 cats, 5 dogs, 2 snakes" - These are different animal groups with different numbers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Animal Sort Game!</div>
                <p>We'll have animal pictures. Sort them into groups and count how many in each group!</p>
            </div>
        `,
        taskInstructions: "Group animals together and count how many in each group.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Animal Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the animal pictures. Group the same animals together:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Cats</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ cats</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Dogs</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ dogs</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div>Snakes</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ snakes</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write how many in each group:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px;">
                        <div>Cats: <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Dogs: <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Snakes: <span class="answer-space" style="width: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which Has Most?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle which group has the most:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Cats group (____ animals)</div>
                        <div>☐ Dogs group (____ animals)</div>
                        <div>☐ Snakes group (____ animals)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Garden Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a garden with living things. Count how many:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My garden has ____ trees, ____ flowers, and ____ insects.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Count how many living things you can see from your window. Tell a grown-up your number.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Rainbow Sorting (Non-Living Things)",
        subtopic: "Grouping non-living things by color",
        lessonContent: `
            <p>Today we will explore colors! We'll sort non-living things by their color like a rainbow.</p>
            <p><strong>Key Concept:</strong> We can sort objects by what color they are.</p>
            <p><strong>Color Words:</strong> Red, orange, yellow, green, blue, purple, pink, brown, black, white.</p>
            <p><strong>Observing Materials:</strong> What are things made of?</p>
            <ul>
                <li>Crayons are made of wax</li>
                <li>Pencils are made of wood and graphite</li>
                <li>Books are made of paper</li>
                <li>Blocks are made of plastic or wood</li>
            </ul>
            <p><strong>Sorting Rule:</strong> Today our rule is "same color goes together."</p>
            <p><strong>Think About It:</strong> Does changing the color of a pencil change what it is made of?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title" style="color: #f44336;"><i class="fas fa-square"></i> Red Zone</div>
                <p>"All red things go here" - red crayons, red blocks, red pencils!</p>
            </div>
            <div class="example-box">
                <div class="example-title" style="color: #2196F3;"><i class="fas fa-square"></i> Blue Zone</div>
                <p>"All blue things go here" - blue markers, blue Legos, blue buttons!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Color Parking Game!</div>
                <p>We have color zones around the room. "Park" your object in the right color zone!</p>
            </div>
        `,
        taskInstructions: "Sort classroom items by color into different zones.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Color Zone Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take items from the basket. Sort them by color:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px solid #f44336; padding: 10px; text-align: center;">
                            <div style="color: #f44336; font-weight: bold;">Red Zone</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="border: 2px solid #2196F3; padding: 10px; text-align: center;">
                            <div style="color: #2196F3; font-weight: bold;">Blue Zone</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="border: 2px solid #4CAF50; padding: 10px; text-align: center;">
                            <div style="color: #4CAF50; font-weight: bold;">Green Zone</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="border: 2px solid #FFC107; padding: 10px; text-align: center;">
                            <div style="color: #FFC107; font-weight: bold;">Yellow Zone</div>
                            <div class="drawing-area" style="height: 60px;"></div>
                            <div>Count: ____</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Color Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a color pattern with sorted items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Red, Blue, Red, Blue, ____, ____</div>
                        <div class="drawing-area" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Material Match</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match objects to what they're made of:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Crayon → ☐ Wood ☐ Wax ☐ Metal</div>
                        <div>Pencil → ☐ Wood ☐ Plastic ☐ Glass</div>
                        <div>Book → ☐ Paper ☐ Cloth ☐ Stone</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Discussion Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Does changing the color of a pencil change what it is made of?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ No! A red pencil and blue pencil are both made of wood</div>
                        <div>☐ Yes! Different colors mean different materials</div>
                        <div>Draw a red pencil and blue pencil:</div>
                        <div style="display: flex;">
                            <div style="flex: 1; text-align: center;">
                                <div>Red Pencil</div>
                                <div class="drawing-area" style="height: 60px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Blue Pencil</div>
                                <div class="drawing-area" style="height: 60px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find five things at home that are the same color. Tell a grown-up what they are made of.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Living Things: How Many Legs?",
        subtopic: "Grouping animals based on physical characteristics",
        lessonContent: `
            <p>Today we will learn about animal bodies! We'll look at how many legs different animals have.</p>
            <p><strong>Key Concept:</strong> Animals can be grouped by how many legs they have.</p>
            <p><strong>Leg Count Groups:</strong></p>
            <ul>
                <li><strong>0 legs:</strong> Snakes, worms, fish</li>
                <li><strong>2 legs:</strong> Birds, humans, kangaroos</li>
                <li><strong>4 legs:</strong> Dogs, cats, cows, horses</li>
                <li><strong>6 legs:</strong> Insects like ants, beetles, butterflies</li>
                <li><strong>8 legs:</strong> Spiders (but they're not insects!)</li>
            </ul>
            <p><strong>Data Representation:</strong> We can show our sorting with pictures or in "houses" for each group.</p>
            <p><strong>Think About It:</strong> What happens if an animal grows? Does it get more legs?</p>
            <p><strong>Answer:</strong> No! Animals keep the same number of legs their whole life.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw" style="color: #795548;"></i> 4-Leg House</div>
                <p>"Dogs, cats, and cows all live in the 4-leg house" - They all walk on four legs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove" style="color: #2196F3;"></i> 2-Leg House</div>
                <p>"Birds and humans live in the 2-leg house" - They stand on two legs!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Animal House Game!</div>
                <p>We'll have houses labeled 0, 2, 4, and 6 legs. Help each animal find its right house!</p>
            </div>
        `,
        taskInstructions: "Sort animals into houses based on how many legs they have.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Animal Houses</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort toy animals into the right houses:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px solid #f44336; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">0 Legs House</div>
                            <div>(Snakes, worms)</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                        <div style="border: 2px solid #4CAF50; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">2 Legs House</div>
                            <div>(Birds, humans)</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                        <div style="border: 2px solid #2196F3; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">4 Legs House</div>
                            <div>(Dogs, cats, cows)</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                        <div style="border: 2px solid #FF9800; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">6 Legs House</div>
                            <div>(Insects)</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Leg Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count the legs on each animal. Write the number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Bird: ____ legs</div>
                        <div>Dog: ____ legs</div>
                        <div>Ant: ____ legs</div>
                        <div>Snake: ____ legs</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw Your Favorite Animal</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw an animal and count its legs:
                    <div class="drawing-area" style="height: 100px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My animal is a: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>It has ____ legs.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Discussion Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What happens if an animal grows? Does it get more legs?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Yes! A puppy grows into a dog and gets more legs</div>
                        <div>☐ No! A puppy has 4 legs and a dog has 4 legs</div>
                        <div>Draw a puppy and a grown dog:</div>
                        <div style="display: flex;">
                            <div style="flex: 1; text-align: center;">
                                <div>Puppy</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                                <div>Legs: ____</div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Grown Dog</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                                <div>Legs: ____</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week 2 Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a scientist. Write what you learned:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned about ________________</div>
                </div>
            </div>
        `,
        homework: "Look at pets or animals in books. Count how many legs they have. Tell a grown-up your favorite animal and how many legs it has.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathScienceWeek2);
    console.log("reception-math-science-week2-exploring.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathScienceWeek2);
    console.log("reception-math-science-week2-exploring.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathScienceWeek2',
        metadata: receptionMathScienceWeek2.metadata,
        days: receptionMathScienceWeek2
    });
    console.log("reception-math-science-week2-exploring.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathScienceWeek2 = receptionMathScienceWeek2;
console.log("reception-math-science-week2-exploring.js loaded and registered successfully");