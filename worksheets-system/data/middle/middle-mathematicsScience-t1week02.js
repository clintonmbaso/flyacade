// Grade 1 Mathematics & Science - Week 2 Data (Living vs. Non-Living and Counting)
const middleMathScienceWeek2 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        week: 2,
        title: "Living vs. Non-Living and Counting",
        description: "Distinguishing living from non-living things, counting from 1-5, matching habitats, creating patterns, and grouping by attributes"
    },
    
    monday: {
        subject: "Science",
        topic: "The Great Sort",
        subtopic: "Distinguishing between living and non-living things",
        lessonContent: `
            <p>Welcome explorers! Today we will learn about two special groups: <strong>living</strong> and <strong>non-living</strong> things.</p>
            <p><strong>Key Concept:</strong> Living things grow, move, breathe, and need food. Non-living things do not.</p>
            <p><strong>What makes something LIVING?</strong></p>
            <ul>
                <li>It can grow (like a plant or animal)</li>
                <li>It can move by itself</li>
                <li>It needs food and water</li>
                <li>It can have babies or make seeds</li>
            </ul>
            <p><strong>What makes something NON-LIVING?</strong></p>
            <ul>
                <li>It does not grow</li>
                <li>It does not eat or drink</li>
                <li>It cannot have babies</li>
                <li>It stays the same unless someone moves it</li>
            </ul>
            <p><strong>Our Mission:</strong> We will go on a Nature Walk to find living and non-living things!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Living Example</div>
                <p>"This leaf came from a living tree. The tree grows, needs water, and can make more leaves!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stone" style="color: #795548;"></i> Non-Living Example</div>
                <p>"This rock is non-living. It doesn't grow, eat, or have babies. It stays the same unless moved."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Nature Walk Game!</div>
                <p>We'll have two hoops: one with a smiley face (living) and one with a stone (non-living). Find items and decide which hoop they belong in!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities during our Nature Walk.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Find and sort three items:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ One living thing (like a leaf or bug)</div>
                    <div>☐ One non-living thing (like a rock or stick)</div>
                    <div>☐ One "mystery" item - decide if it's living or non-living</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw your living item in the smiley hoop:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; text-align: center; padding: 10px;">
                        <div style="font-size: 24px;">😊</div>
                        <div><strong>Living</strong></div>
                        <div class="drawing-area" style="height: 80px; border: 2px solid #4CAF50;"></div>
                    </div>
                    <div style="flex: 1; text-align: center; padding: 10px;">
                        <div style="font-size: 24px;">🪨</div>
                        <div><strong>Non-Living</strong></div>
                        <div class="drawing-area" style="height: 80px; border: 2px solid #795548;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Circle the living things:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Tree ☐ Rock ☐ Bird ☐ Bench ☐ Flower ☐ Water bottle</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Why is a bird living? Give one reason:
                <div class="answer-space" style="height: 40px; margin-top: 10px;">A bird is living because ________________</div>
            </div>
        `,
        homework: "Find two living things and two non-living things at home. Tell a family member why each is living or non-living.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Five Friends in the Garden",
        subtopic: "Counting living things from 1 to 5",
        lessonContent: `
            <p>Today we will practice counting! We'll count our special friends: the living things in our garden.</p>
            <p><strong>Key Concept:</strong> Counting helps us know "how many" of something we have.</p>
            <p><strong>Counting Rules:</strong></p>
            <ul>
                <li>Point to each item as you count</li>
                <li>Say one number for each item</li>
                <li>Count slowly and carefully</li>
                <li>The last number you say tells you "how many"</li>
            </ul>
            <p><strong>Today's Range:</strong> We'll count from 1 to 5. That's how many fingers you have on one hand!</p>
            <p><strong>Our Mission:</strong> We'll go on a scavenger hunt to find exactly 1, 2, 3, 4, and 5 living things!</p>
            <p><strong>Using Fingers:</strong> Hold up fingers to match your count - 1 living thing = 1 finger up!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Counting Trees</div>
                <p>"I see 1 tree" (hold up 1 finger). "I see 2 flowers" (hold up 2 fingers). Each number matches one thing!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug" style="color: #8BC34A;"></i> Counting Ants</div>
                <p>"Point to each ant: 1, 2, 3. I found 3 ants!" The last number (3) tells us how many total.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Scavenger Hunt Game!</div>
                <p>Find exactly 1 tree, 2 different flowers, 3 ants, 4 leaves, and 5 blades of grass!</p>
            </div>
        `,
        taskInstructions: "Complete the garden scavenger hunt and counting activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Scavenger Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and count these living things:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 1 tree: Draw it here <span class="drawing-area" style="width: 50px; height: 50px; display: inline-block;"></span></div>
                        <div>☐ 2 different flowers: Draw them <span class="drawing-area" style="width: 80px; height: 50px; display: inline-block;"></span></div>
                        <div>☐ 3 ants: Draw 3 ants <span class="drawing-area" style="width: 100px; height: 50px; display: inline-block;"></span></div>
                        <div>☐ 4 leaves: Draw 4 leaves <span class="drawing-area" style="width: 120px; height: 50px; display: inline-block;"></span></div>
                        <div>☐ 5 blades of grass: Draw 5 lines <span class="drawing-area" style="width: 150px; height: 50px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finger Counting</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Show each count with your fingers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>2 flowers = Show ____ fingers</div>
                        <div>3 ants = Show ____ fingers</div>
                        <div>5 blades of grass = Show ____ fingers</div>
                        <div>Draw a hand showing 4 fingers: <span class="drawing-area" style="width: 80px; height: 80px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Counting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count the butterflies. Write the number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🦋 🦋 🦋 = ____ butterflies</div>
                        <div>🦋 🦋 = ____ butterflies</div>
                        <div>🦋 🦋 🦋 🦋 🦋 = ____ butterflies</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Garden Math</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you have 2 flowers and find 3 more, how many total?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw 2 flowers: <span class="drawing-area" style="width: 60px; height: 50px; display: inline-block;"></span></div>
                        <div>Draw 3 more: <span class="drawing-area" style="width: 60px; height: 50px; display: inline-block;"></span></div>
                        <div>Total flowers: ____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Count 5 living things in your home or yard. Show the count on your fingers.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Where Do I Live?",
        subtopic: "Matching living things to their habitats",
        lessonContent: `
            <p>Today we'll learn about <strong>habitats</strong> - the special homes where living things belong!</p>
            <p><strong>Key Concept:</strong> Every living thing has a habitat where it can find food, water, and shelter.</p>
            <p><strong>Three Important Habitats:</strong></p>
            <ul>
                <li><strong>Water:</strong> Home for fish, frogs, and ducks</li>
                <li><strong>Trees/Sky:</strong> Home for birds, squirrels, and butterflies</li>
                <li><strong>Underground:</strong> Home for worms, ants, and moles</li>
            </ul>
            <p><strong>Matching Game:</strong> Animals are perfectly suited for their habitats! Fish have gills to breathe in water, birds have wings to fly in trees.</p>
            <p><strong>Our Mission:</strong> We'll match animals to their correct habitats by "swimming," "flying," or "crawling" to the right station!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish" style="color: #2196F3;"></i> Water Habitat</div>
                <p>"Fish live in water. They have gills to breathe underwater and fins to swim!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove" style="color: #FF9800;"></i> Tree/Sky Habitat</div>
                <p>"Birds live in trees or the sky. They have wings to fly and build nests in branches."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm" style="color: #795548;"></i> Underground Habitat</div>
                <p>"Worms live underground. They help soil breathe and don't need sunlight!"</p>
            </div>
        `,
        taskInstructions: "Match animals to their habitats and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Habitat Stations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each animal to its habitat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fish → ☐ Water ☐ Trees ☐ Underground</div>
                        <div>Bird → ☐ Water ☐ Trees ☐ Underground</div>
                        <div>Worm → ☐ Water ☐ Trees ☐ Underground</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Habitats</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw each habitat with its animal:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; text-align: center; padding: 10px;">
                            <div><strong>Water</strong></div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #2196F3;"></div>
                            <div>Draw a fish in water</div>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 10px;">
                            <div><strong>Trees</strong></div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #4CAF50;"></div>
                            <div>Draw a bird in a tree</div>
                        </div>
                        <div style="flex: 1; text-align: center; padding: 10px;">
                            <div><strong>Underground</strong></div>
                            <div class="drawing-area" style="height: 100px; border: 2px solid #795548;"></div>
                            <div>Draw a worm underground</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Movement Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Act out how each animal moves to its habitat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fish: Swim like this → <span class="drawing-area" style="width: 80px; height: 30px; display: inline-block;"></span></div>
                        <div>Bird: Fly like this → <span class="drawing-area" style="width: 80px; height: 30px; display: inline-block;"></span></div>
                        <div>Worm: Crawl like this → <span class="drawing-area" style="width: 80px; height: 30px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Where Do I Belong?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw lines to match animals to homes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Frog → Pond</div>
                        <div>Squirrel → Tree</div>
                        <div>Ant → Anthill</div>
                        <div>Duck → Lake</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find an animal outside or in a book. Draw it and write one sentence about where it lives.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Pattern Making with Nature",
        subtopic: "Creating simple AB patterns using natural materials",
        lessonContent: `
            <p>Today we'll discover <strong>patterns</strong> - repeating designs we see all around us!</p>
            <p><strong>Key Concept:</strong> A pattern is something that repeats in a predictable way.</p>
            <p><strong>AB Pattern:</strong> The simplest pattern uses two different things that alternate: A, B, A, B, A, B...</p>
            <p><strong>Nature Patterns:</strong> Look at a zebra's stripes (black, white, black, white) or pinecones (scale, space, scale, space)!</p>
            <p><strong>Creating Patterns:</strong> We'll use leaves and stones to make our own beautiful patterns.</p>
            <p><strong>Our Mission:</strong> Create, continue, and identify AB patterns using natural materials!</p>
            <p><strong>Pattern Language:</strong> "Leaf, Stone, Leaf, Stone" or "Green, Brown, Green, Brown"</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf-Stone Pattern</div>
                <p>"🍃, 🪨, 🍃, 🪨, 🍃, 🪨" - This is an AB pattern with two different items!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt" style="color: #FF9800;"></i> Color Pattern</div>
                <p>"Green leaf, Brown leaf, Green leaf, Brown leaf" - Same type of item, different colors!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Pattern Challenge!</div>
                <p>I'll start a pattern: 🍂, 🐚, 🍂, 🐚, 🍂... What comes next? You tell me!</p>
            </div>
        `,
        taskInstructions: "Create and continue patterns using natural materials.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Create Your Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Make an AB pattern with leaves and stones:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw your pattern: <span class="drawing-area" style="width: 200px; height: 50px; display: inline-block;"></span></div>
                        <div>My pattern is: ____, ____, ____, ____, ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Continue the Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Continue this pattern: 🍁, 🪨, 🍁, 🪨, ____, ____
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw what comes next: <span class="drawing-area" style="width: 100px; height: 50px;"></span></div>
                        <div>The next two items are: ________ and ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pattern Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle which of these is an AB pattern:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ 🍃, 🍃, 🍃, 🍃, 🍃 (all the same)</div>
                        <div>☐ 🍃, 🪨, 🍃, 🪨, 🍃 (alternating)</div>
                        <div>☐ 🍃, 🪨, 🌸, 🍃, 🪨 (random)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Color Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a color pattern with crayons:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Choose two colors: ____ and ____</div>
                        <div>Draw your pattern: <span class="drawing-area" style="width: 200px; height: 30px;"></span></div>
                        <div>Color, Color, Color, Color</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Nature Pattern Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Find a pattern in nature or the classroom:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw the pattern you found: <span class="drawing-area" style="width: 200px; height: 80px;"></span></div>
                        <div>I found this pattern in/on: ________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a pattern using items from your home (like spoon, fork, spoon, fork). Show it to your family.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Review - The Attribute Game",
        subtopic: "Grouping items by multiple attributes",
        lessonContent: `
            <p>Today is our review day! We'll play the <strong>Attribute Game</strong> to practice everything we learned this week.</p>
            <p><strong>Key Concept:</strong> One object can have many different characteristics or attributes.</p>
            <p><strong>Attributes We've Learned:</strong></p>
            <ul>
                <li>Living or Non-living</li>
                <li>Color (green, brown, etc.)</li>
                <li>Size (small, medium, large)</li>
                <li>Habitat (water, trees, underground)</li>
                <li>Number (how many)</li>
            </ul>
            <p><strong>Multiple Attributes:</strong> A green leaf is BOTH living AND green. A brown rock is BOTH non-living AND brown.</p>
            <p><strong>Our Mission:</strong> We'll sort a mixed pile of items by different attributes in our Attribute Game!</p>
            <p><strong>Game Rules:</strong> When I call out an attribute, find all items that match!</p>
            <p><strong>Celebration:</strong> We've learned to identify living things, count to 5, match habitats, create patterns, and sort by attributes!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Multiple Attributes</div>
                <p>"This leaf is living, green, from a tree, small, and I have 3 of them!" One item, many descriptions!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stone" style="color: #795548;"></i> Attribute Game Example</div>
                <p>Command: "Find all things that are brown." You might find rocks, sticks, soil, or bark!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> The Attribute Game!</div>
                <p>Mixed pile in the center. Commands: "Find all living things!" "Find all green things!" "Find all things from trees!"</p>
            </div>
        `,
        taskInstructions: "Play the Attribute Game and complete the review activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Attribute Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort items from the mixed pile:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Find all living things: Draw 3 <span class="drawing-area" style="width: 120px; height: 50px; display: inline-block;"></span></div>
                        <div>Find all green things: Draw 3 <span class="drawing-area" style="width: 120px; height: 50px; display: inline-block;"></span></div>
                        <div>Find all things from trees: Draw 3 <span class="drawing-area" style="width: 120px; height: 50px; display: inline-block;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: One Item, Many Attributes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose one object. Describe it 3 ways:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My object: Draw it <span class="drawing-area" style="width: 80px; height: 80px; display: inline-block;"></span></div>
                        <div>Attribute 1: It is _______________ (living/non-living)</div>
                        <div>Attribute 2: It is _______________ (color)</div>
                        <div>Attribute 3: It is _______________ (size: small/medium/large)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Counting Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count and write numbers 1-5:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Count the birds: 🐦 🐦 🐦 = ____</div>
                        <div>Count the flowers: 🌸 🌸 🌸 🌸 🌸 = ____</div>
                        <div>Count the ants: 🐜 🐜 = ____</div>
                        <div>Write the numbers: 1, 2, ____, ____, 5</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Review</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Continue this pattern: 🌿, 🪨, 🌿, 🪨, 🌿, ____
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What comes next? Draw it: <span class="drawing-area" style="width: 60px; height: 60px;"></span></div>
                        <div>This is an ____ pattern (A, AB, or ABC?)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Science Explorer Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a science explorer. Write what you learned:
                    <div class="drawing-area" style="height: 120px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">This week I learned that living things ________________</div>
                </div>
            </div>
        `,
        homework: "Play the Attribute Game at home with family. Give commands like 'Find all things that are red' or 'Find all living things in this room.'",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(middleMathScienceWeek2);
    console.log("math-science-week2-living-nonliving.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(middleMathScienceWeek2);
    console.log("math-science-week2-living-nonliving.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'middleMathScienceWeek2',
        metadata: middleMathScienceWeek2.metadata,
        days: middleMathScienceWeek2
    });
    console.log("math-science-week2-living-nonliving.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.middleMathScienceWeek2 = middleMathScienceWeek2;
console.log("math-science-week2-living-nonliving.js loaded and registered successfully");