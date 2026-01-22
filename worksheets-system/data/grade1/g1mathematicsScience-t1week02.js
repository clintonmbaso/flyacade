// Grade 1 Mathematics & Science - Week 2 Data (Exploring Our World)
const grade1MathScienceWeek2 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 2,
        title: "Exploring Our World — Sorting, Counting, and Grouping",
        description: "Learning to observe, sort, count, and group objects based on their physical characteristics"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "The Great Environment Hunt",
        subtopic: "Identifying objects based on physical attributes",
        lessonContent: `
            <p>Welcome to our exploration lesson! Today we will go on a treasure hunt to discover objects around us.</p>
            <p><strong>Key Concept:</strong> Everything around us has special "traits" or characteristics that make it unique.</p>
            <p><strong>What are physical attributes?</strong></p>
            <ul>
                <li>How something feels (rough, smooth, hard, soft)</li>
                <li>What color it is</li>
                <li>What shape it is</li>
                <li>How heavy or light it feels</li>
            </ul>
            <p><strong>Our Mission:</strong> We will collect five different objects from our environment and describe them using our senses!</p>
            <p><strong>Why is this important?</strong> Scientists and mathematicians observe the world carefully to understand how things work and belong together.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf Example</div>
                <p>"This leaf is green, smooth on top, and has veins" - We can describe many traits about one object!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stone" style="color: #795548;"></i> Stone Example</div>
                <p>"This stone is gray, hard, rough, and heavy for its size" - Objects have multiple characteristics!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Treasure Hunt Game!</div>
                <p>We're going on a classroom treasure hunt! Look for objects that match the clues: something rough, something green, something round!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities during our environment hunt.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Find and collect five different objects:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ One leaf (different from others)</div>
                    <div>☐ One stone or pebble</div>
                    <div>☐ One twig or small branch</div>
                    <div>☐ One man-made object (like a bottle cap)</div>
                    <div>☐ One mystery object of your choice!</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Describe one object to your partner using three words:
                <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                <div class="answer-space" style="height: 40px; margin-top: 10px;">My object is: ________, ________, and ________</div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw your favorite collected item:
                <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Circle the words that describe your objects:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Hard ☐ Soft ☐ Rough ☐ Smooth</div>
                    <div>☐ Green ☐ Brown ☐ Round ☐ Pointy</div>
                    <div>☐ Heavy ☐ Light ☐ Big ☐ Small</div>
                </div>
            </div>
        `,
        homework: "Find three objects at home and describe them to your family using words like hard, soft, rough, or smooth.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Sorting by Color and Shape",
        subtopic: "Organizing objects based on visual characteristics",
        lessonContent: `
            <p>Today we will learn how to organize our collected treasures by their color and shape!</p>
            <p><strong>Key Concept:</strong> Sorting helps us find things easily and understand how objects are similar.</p>
            <p><strong>What is sorting?</strong></p>
            <ul>
                <li>Putting things that are alike together</li>
                <li>Creating groups based on rules</li>
                <li>Making messy piles organized</li>
            </ul>
            <p><strong>Sorting by Color:</strong> All red things together, all green things together, all brown things together.</p>
            <p><strong>Sorting by Shape:</strong> All round things together, all straight things together, all pointy things together.</p>
            <p><strong>Let's Count:</strong> After sorting, we can count how many are in each group (from 1 to 6).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-redo" style="color: #f44336;"></i> Red Station</div>
                <p>"All red objects go here" - This station collects leaves, crayons, blocks, or any red items!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-circle" style="color: #2196F3;"></i> Circular Station</div>
                <p>"All round objects go here" - This station collects bottle caps, round stones, buttons, or coins!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sorting Race Game!</div>
                <p>We'll have color and shape stations around the room. When I say "Sort!" take your objects to the right station as fast as you can!</p>
            </div>
        `,
        taskInstructions: "Sort your collected objects and complete these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Color Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort your objects by color. Draw what you put in each group:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc;">
                            <div style="text-align: center; font-weight: bold; color: #f44336;">Red/Brown Group</div>
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Count: ____ items</div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold; color: #4CAF50;">Green Group</div>
                            <div class="drawing-area" style="height: 100px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Count: ____ items</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shape Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now sort by shape. Circle which group has more:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Round objects: ____ items</div>
                        <div>Straight objects: ____ items</div>
                        <div>Which has more? ☐ Round ☐ Straight</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Counting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count your largest group. Write the number and draw that many circles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My largest group has ____ items:</div>
                        <div class="drawing-area" style="height: 80px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Clean-up Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Help clean up by sorting classroom items:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Put all blue crayons in the blue box</div>
                        <div>Put all square blocks in the square basket</div>
                        <div>Draw a happy face when finished: <span class="drawing-area" style="width: 50px; height: 50px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Sort your toys at home by color. Count how many are in each color group.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Size and Scale Sets",
        subtopic: "Grouping objects by size and counting larger sets",
        lessonContent: `
            <p>Today we will learn about size: Small, Medium, and Large! We'll also practice counting bigger groups.</p>
            <p><strong>Key Concept:</strong> Objects can be sorted by their size, not just their color or shape.</p>
            <p><strong>Size Vocabulary:</strong></p>
            <ul>
                <li><strong>Small:</strong> Tiny, little, fits in one hand</li>
                <li><strong>Medium:</strong> Middle-sized, not too big or small</li>
                <li><strong>Large:</strong> Big, giant, needs two hands to hold</li>
            </ul>
            <p><strong>Counting Practice:</strong> Today we'll count groups up to 12! That's more than our fingers!</p>
            <p><strong>Think About It:</strong> Why would a giant leaf and a tiny pebble be in different groups even if they're both from the garden?</p>
            <p><strong>Answer:</strong> Because size matters when we're organizing things for different purposes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-expand-alt" style="color: #FF9800;"></i> Small, Medium, Large</div>
                <p>Three balls: a marble (small), a tennis ball (medium), a basketball (large) - all balls, different sizes!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale" style="color: #795548;"></i> Garden Objects</div>
                <p>A giant leaf (large) and a tiny pebble (small) would go in different size groups even from the same place.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Size Sort Relay!</div>
                <p>We'll have three hoops: Small, Medium, Large. Run to get an object and put it in the right hoop!</p>
            </div>
        `,
        taskInstructions: "Sort objects by size and practice counting larger sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Size Sorting Station</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Take classroom objects and sort them into three piles:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Small</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Medium</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">Large</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                            <div>Count: ____</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count your "Small" pile. Write the number and count out loud with the class:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My Small pile has ____ items.</div>
                        <div>Let's count together: 1, 2, 3, ...</div>
                        <div class="answer-space" style="height: 30px; width: 200px; margin-top: 10px;">Write the numbers up to your total:</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Size Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw three leaves: one small, one medium, one large:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <div>Small</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Medium</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <div>Large</div>
                            <div class="drawing-area" style="height: 80px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Which Has More?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Compare your piles. Circle which has the most:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Small pile (____ items)</div>
                        <div>☐ Medium pile (____ items)</div>
                        <div>☐ Large pile (____ items)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three objects at home of different sizes (small, medium, large). Line them up from smallest to largest.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Describing and Naming Sets",
        subtopic: "Understanding groups and collections",
        lessonContent: `
            <p>Today we will learn about "sets" - groups of things that belong together for a reason!</p>
            <p><strong>Key Concept:</strong> A set is a collection of things that belong together.</p>
            <p><strong>What makes a set?</strong></p>
            <ul>
                <li>Objects that are alike in some way</li>
                <li>Things that go together for a purpose</li>
                <li>Items that follow a rule</li>
            </ul>
            <p><strong>Examples of Sets:</strong></p>
            <ul>
                <li>A set of crayons (all for coloring)</li>
                <li>A set of spoons (all for eating)</li>
                <li>A set of cars (all vehicles)</li>
            </ul>
            <p><strong>Naming Sets:</strong> We can name a set by what the items have in common: "This is a set of things we use for art."</p>
            <p><strong>Counting Sets:</strong> Today we'll practice counting sets up to 20 items!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car" style="color: #2196F3;"></i> Set of Cars</div>
                <p>"This is a set of cars" - All these toys are vehicles that drive on roads.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #FF9800;"></i> Set of Eating Tools</div>
                <p>"This is a set of tools for eating" - Spoons, forks, and knives all help us eat food.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Mystery Bag Game!</div>
                <p>Reach into mystery bags and guess what set is inside! Is it a set of writing tools? A set of building blocks?</p>
            </div>
        `,
        taskInstructions: "Explore different sets and practice describing them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mystery Bag Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Reach into a mystery bag. What set is inside?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw what you find:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>This is a set of: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Count how many: <span class="answer-space" style="width: 50px;"></span> items</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Set</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a "Set of 15 Blue Items" using classroom materials:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Gather 15 blue things. Draw them:</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                        <div>I found ____ blue blocks, ____ blue crayons, and ____ other blue things.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Set Sorting Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort these mixed items into two different sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pictures: apple, banana, carrot, truck, bus, airplane</div>
                        <div>Set 1 (Food): ________________________________</div>
                        <div>Set 2 (Vehicles): _____________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Counting to 20</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Practice counting up to 20 with beads or counters:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Make a set of 20 beads. Count them out loud.</div>
                        <div>Write the numbers from 1 to 20:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Home Set Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Think about home. What sets do you have there?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw a set from your home:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>At home, we have a set of <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three different sets in your home (like a set of plates, a set of books, a set of shoes). Tell a family member about them.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Matching and Numbers",
        subtopic: "One-to-one correspondence and number concepts 0-10",
        lessonContent: `
            <p>Today is our math celebration! We'll learn about matching sets and the numbers from 0 to 10.</p>
            <p><strong>Key Concept 1:</strong> One-to-one matching helps us see if two groups have the same amount.</p>
            <p><strong>What is one-to-one correspondence?</strong></p>
            <ul>
                <li>Matching one object to one other object</li>
                <li>Making sure everyone has a chair</li>
                <li>Putting one bear on each plate</li>
            </ul>
            <p><strong>Key Concept 2:</strong> Numbers help us describe sets - even the number ZERO for empty sets!</p>
            <p><strong>Special Number:</strong> ZERO means "nothing" or "empty." An empty box has zero items inside.</p>
            <p><strong>Number Range:</strong> Today we'll focus on numbers 0 through 10 - our first important number group!</p>
            <p><strong>Celebration:</strong> We've learned to observe, sort, describe, and now count our world!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair" style="color: #795548;"></i> Chair Matching</div>
                <p>"Does every student have a chair?" We match one student to one chair to find out!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open" style="color: #9E9E9E;"></i> The Empty Box</div>
                <p>"How many things are in this empty box? Zero!" Zero is our number for nothing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Number Container Game!</div>
                <p>We'll have containers labeled 0-10. You must put the right number of beans in each container!</p>
            </div>
        `,
        taskInstructions: "Practice matching sets and working with numbers 0-10.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Bear and Plate Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match 10 bears to 10 plates. Draw your matching:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw 10 plates with bears:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Every plate has ____ bear. Every bear has ____ plate.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Unequal Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Now try 6 plates and 4 bears. What's missing?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Plates: ____ Bears: ____</div>
                        <div>Which set needs more? ☐ Plates ☐ Bears</div>
                        <div>How many more bears do we need? ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Number Containers 0-10</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Put the correct number of beans in each container:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Container 0: ____ beans (draw an empty container)</div>
                        <div>Container 5: ____ beans (draw 5 beans)</div>
                        <div>Container 10: ____ beans (draw 10 beans)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Number Writing Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace and write numbers 0 through 10:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 24px;">
                        <div style="border-bottom: 1px solid #ccc; padding-bottom: 5px;">0 1 2 3 4</div>
                        <div style="border-bottom: 1px solid #ccc; padding: 10px 0;">5 6 7 8 9 10</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Math Explorer Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a math explorer. Write what you learned:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned to ________________</div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about zero. Find an empty container and say 'This has zero things inside!' Also practice counting objects up to 10.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek2);
    console.log("math-science-week2-exploring.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek2);
    console.log("math-science-week2-exploring.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek2',
        metadata: grade1MathScienceWeek2.metadata,
        days: grade1MathScienceWeek2
    });
    console.log("math-science-week2-exploring.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek2 = grade1MathScienceWeek2;
console.log("math-science-week2-exploring.js loaded and registered successfully");