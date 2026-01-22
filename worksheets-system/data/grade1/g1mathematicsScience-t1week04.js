// Grade 1 Mathematics & Science - Week 4 Data (Exploring Our Environments)
const grade1MathSciWeek4 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 4,
        title: "Exploring Our Environments — Natural vs. Man-Made",
        description: "Distinguishing between natural and man-made environments, counting and ordering natural objects"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Natural vs. Man-Made",
        subtopic: "Distinguishing between things made by nature and things made by people",
        lessonContent: `
            <p>Welcome to our Math & Science adventure! Today we will explore the world around us by discovering what nature makes and what people make.</p>
            <p><strong>Key Concept:</strong> Some things in our world are made by nature, and some are made by people.</p>
            <p><strong>What is "Natural"?</strong></p>
            <ul>
                <li>Made by nature without people helping</li>
                <li>Examples: trees, rocks, rivers, clouds, animals</li>
                <li>Found growing or living outside</li>
            </ul>
            <p><strong>What is "Man-Made"?</strong></p>
            <ul>
                <li>Made by people using tools and materials</li>
                <li>Examples: houses, cars, toys, books, roads</li>
                <li>Built or created by humans</li>
            </ul>
            <p><strong>Today's Activity:</strong> We will take a "Discovery Walk" around our school to find examples of both!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #4CAF50;"></i> Natural Example</div>
                <p>A tree is natural because it grows from a seed in the soil. People didn't build it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school" style="color: #3F51B5;"></i> Man-Made Example</div>
                <p>Our school building is man-made because people used bricks, wood, and glass to build it.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Discovery Walk Game!</div>
                <p>We'll walk around the schoolyard. When I point to something natural, say "Nature made it!" When I point to something man-made, say "People made it!"</p>
            </div>
        `,
        taskInstructions: "Complete the activities after our Discovery Walk.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the natural things you saw on our walk:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Grass</div>
                    <div>☐ Swing set</div>
                    <div>☐ Clouds</div>
                    <div>☐ Fence</div>
                    <div>☐ Birds</div>
                    <div>☐ Pavement</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw one natural thing and one man-made thing you saw:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Natural Thing</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Man-Made Thing</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Write "Natural" or "Man-made" next to each:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Sun: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Bicycle: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>River: <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Book: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Think and answer:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Is your shirt natural or man-made? <span class="answer-space" style="width: 100px;"></span></div>
                    <div>Is a flower natural or man-made? <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 2 natural things and 2 man-made things. Draw one of each.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Features of the Natural World",
        subtopic: "Identifying specific physical features of the natural environment",
        lessonContent: `
            <p>Today we will explore the wonderful things nature creates! Let's look closely at different parts of our natural world.</p>
            <p><strong>Key Concept:</strong> Nature gives us many special things that we can see, touch, and explore.</p>
            <p><strong>Nature Tray Exploration:</strong> We will examine real natural objects!</p>
            <p><strong>Rocks:</strong> Found in mountains, rivers, and soil. They are hard and come in many shapes.</p>
            <p><strong>Soil:</strong> The ground we walk on! Plants grow in soil.</p>
            <p><strong>Leaves:</strong> Grow on trees and plants. They help trees breathe.</p>
            <p><strong>Water:</strong> Found in rivers, lakes, and oceans. All living things need water.</p>
            <p><strong>Where do we find these?</strong></p>
            <ul>
                <li>Mountains: rocks, soil, sometimes snow</li>
                <li>Rivers: water, rocks, sometimes fish</li>
                <li>Forests: trees, leaves, soil, animals</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #795548;"></i> Mountain Environment</div>
                <p>Mountains have lots of rocks, tall trees, and sometimes animals like goats or birds.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water" style="color: #2196F3;"></i> River Environment</div>
                <p>Rivers have flowing water, smooth rocks, fish, and plants growing along the banks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Nature Touch & Tell</div>
                <p>We'll pass around the Nature Tray. When you hold an object, say one thing about it and where you might find it.</p>
            </div>
        `,
        taskInstructions: "Explore the Nature Tray and complete these activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Nature Object Observations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each item in the Nature Tray. Circle how it feels:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Rock: ☐ Smooth ☐ Rough ☐ Hard</div>
                        <div>Soil: ☐ Dry ☐ Soft ☐ Crumbly</div>
                        <div>Leaf: ☐ Smooth ☐ Bumpy ☐ Thin</div>
                        <div>Water: ☐ Wet ☐ Cold ☐ Flowing</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Where Do They Belong?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to match each object to where you might find it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Rock → ☐ In a river</div>
                        <div>Soil → ☐ On a mountain</div>
                        <div>Leaf → ☐ In a forest</div>
                        <div>Water → ☐ In a lake</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mountain and River Environments</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Name three things you would see in each environment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Mountain:</strong></div>
                        <div>1. <span class="answer-space" style="width: 120px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 120px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 120px;"></span></div>
                        <div style="margin-top: 10px;"><strong>River:</strong></div>
                        <div>1. <span class="answer-space" style="width: 120px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 120px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Favorite Natural Thing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite natural thing from today's lesson:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">I like this because: <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
        `,
        homework: "Look outside your window or in your yard. Find one rock, one leaf, and describe something that needs water to live.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Building Our World (Man-Made)",
        subtopic: "Identifying physical features of the man-made environment",
        lessonContent: `
            <p>Today we will explore the amazing things people build! People are very creative and build many structures we use every day.</p>
            <p><strong>Key Concept:</strong> People use different materials to build structures that help us live, travel, and play.</p>
            <p><strong>Houses:</strong> Where people live. Made from materials like bricks, wood, glass, and metal.</p>
            <p><strong>Roads:</strong> Where cars and people travel. Made from materials like tar, concrete, and gravel.</p>
            <p><strong>Bridges:</strong> Help us cross over water or roads. Made from materials like steel, concrete, and wood.</p>
            <p><strong>Why do people build things?</strong></p>
            <ul>
                <li>To have shelter and safety (houses)</li>
                <li>To travel from place to place (roads, bridges)</li>
                <li>To learn and play (schools, playgrounds)</li>
            </ul>
            <p><strong>Materials people use:</strong> Wood from trees, bricks from clay, metal from rocks, glass from sand.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #FF9800;"></i> Houses</div>
                <p>Houses keep us safe from weather. They have walls, roofs, doors, and windows made by people.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road" style="color: #9E9E9E;"></i> Roads and Bridges</div>
                <p>Roads help cars drive safely. Bridges help us cross rivers without getting wet!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hard-hat"></i> Builders' Imagination Game</div>
                <p>We'll look at pictures of structures. When I say "What material?" you guess what it's made of!</p>
            </div>
        `,
        taskInstructions: "Look at pictures of man-made structures and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Structure Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each structure with what it's used for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>House → ☐ Crossing water</div>
                        <div>Road → ☐ People living inside</div>
                        <div>Bridge → ☐ Cars driving on it</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Material Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at the pictures. Circle what materials you think were used:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Brick house: ☐ Wood ☐ Bricks ☐ Glass ☐ Metal</div>
                        <div>Wooden bridge: ☐ Plastic ☐ Wood ☐ Steel ☐ Rope</div>
                        <div>Concrete road: ☐ Tar ☐ Grass ☐ Concrete ☐ Water</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: On My Way to School</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three man-made structures you see on your way to school:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Your Own Structure</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw something you wish people would build:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My structure is called: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>It is made of: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>People would use it to: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "With a grown-up, name 5 man-made things in your kitchen. What materials are they made from?",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "The Great Comparison",
        subtopic: "Comparing natural and man-made environments",
        lessonContent: `
            <p>Today we will put everything together! We'll compare natural places and man-made places to see how they are different and similar.</p>
            <p><strong>Key Concept:</strong> Natural environments and man-made environments have different features, but both are part of our world.</p>
            <p><strong>Forest (Natural Environment):</strong></p>
            <ul>
                <li>Has many trees and plants</li>
                <li>Animals live there freely</li>
                <li>Rivers and streams flow naturally</li>
                <li>Air smells fresh and earthy</li>
            </ul>
            <p><strong>City (Man-Made Environment):</strong></p>
            <ul>
                <li>Has many buildings and roads</li>
                <li>People live and work there</li>
                <li>Cars and buses travel on streets</li>
                <li>Lights and signs help people</li>
            </ul>
            <p><strong>Comparison Questions:</strong></p>
            <ul>
                <li>Which has more plants? (Forest)</li>
                <li>Which has more buildings? (City)</li>
                <li>Where would you see more animals? (Forest)</li>
                <li>Where would you see more people? (City)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #2E7D32;"></i> Forest Picture</div>
                <p>A forest is full of green trees, bushes, maybe deer or birds. The ground has soil, leaves, and rocks.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-city" style="color: #607D8B;"></i> City Picture</div>
                <p>A city has tall buildings, traffic lights, sidewalks, shops, and lots of people moving around.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Compare & Contrast Game</div>
                <p>We'll look at two pictures side by side. I'll ask questions and you point to the correct picture!</p>
            </div>
        `,
        taskInstructions: "Compare the forest and city pictures and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Picture Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the forest and city pictures. Answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which picture has more plants? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Which picture has more buildings? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Where would you find more cars? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Where would you find more birds? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Natural or Man-Made?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each item, circle "Natural" or "Man-made":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tree: ☐ Natural ☐ Man-made</div>
                        <div>Car: ☐ Natural ☐ Man-made</div>
                        <div>Bird: ☐ Natural ☐ Man-made</div>
                        <div>House: ☐ Natural ☐ Man-made</div>
                        <div>River: ☐ Natural ☐ Man-made</div>
                        <div>Bicycle: ☐ Natural ☐ Man-made</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Favorite Place</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your favorite kind of place: a natural place or a man-made place:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is a <span class="answer-space" style="width: 100px;"></span> place. (natural/man-made)</div>
                        <div>I like it because: <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Which One Doesn't Belong?</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the item that doesn't belong in each group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tree, Flower, Car, Rock (which is man-made?)</div>
                        <div>House, Road, Cloud, Bridge (which is natural?)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find something natural and something man-made in your bedroom. Tell a family member how they are different.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Math in Nature (Counting & Ordering)",
        subtopic: "Counting features of the environment and arranging numbers in descending order",
        lessonContent: `
            <p>Today is our Math & Nature day! We'll use natural objects to practice counting and ordering numbers.</p>
            <p><strong>Key Concept:</strong> We can find math everywhere in nature! We can count, compare, and order natural objects.</p>
            <p><strong>Counting Groups:</strong> We will count groups of natural objects like pebbles, leaves, and sticks.</p>
            <p><strong>Most vs. Least:</strong> The group with the largest number has the "most." The group with the smallest number has the "least."</p>
            <p><strong>Ordering Numbers:</strong> We can arrange groups from largest to smallest (descending order).</p>
            <p><strong>Today's Activity:</strong> Each student gets a collection of natural objects. We'll count them together, then arrange our collections from largest to smallest!</p>
            <p><strong>Math Words:</strong></p>
            <ul>
                <li>Count: Say numbers in order (1, 2, 3...)</li>
                <li>Most: The biggest amount</li>
                <li>Least: The smallest amount</li>
                <li>Order: Arrange from largest to smallest or smallest to largest</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pebble" style="color: #795548;"></i> Pebble Counting</div>
                <p>If you have 8 pebbles, that's more than 5 leaves. The pebbles group has the "most."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf Ordering</div>
                <p>Groups: 8 pebbles, 5 leaves, 3 sticks. From largest to smallest: pebbles (8), leaves (5), sticks (3).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Nature Math Game!</div>
                <p>We'll work in small groups. Each group counts their objects, then lines up from the group with most to the group with least!</p>
            </div>
        `,
        taskInstructions: "Count your natural objects and complete the math activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Count Your Collection</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Count each type of object in your collection. Write the number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pebbles: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Leaves: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Sticks: <span class="answer-space" style="width: 60px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Most and Least</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at your numbers above. Answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which group has the MOST? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Which group has the LEAST? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Ordering Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange these groups from largest to smallest (write 1, 2, 3):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Group A: 7 pinecones → Order: <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Group B: 3 acorns → Order: <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Group C: 5 shells → Order: <span class="answer-space" style="width: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Nature Number Line</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your objects in order from least to most:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Least: <div class="drawing-area" style="height: 60px; width: 100px; display: inline-block;"></div></div>
                        <div>Middle: <div class="drawing-area" style="height: 60px; width: 100px; display: inline-block;"></div></div>
                        <div>Most: <div class="drawing-area" style="height: 60px; width: 100px; display: inline-block;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Real-World Math</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Look around the classroom. Find and count:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of windows: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Number of doors: <span class="answer-space" style="width: 60px;"></span></div>
                        <div>Which has more? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Collect 10 small natural objects (pebbles, leaves, etc.). Count them. Arrange them from smallest to largest size.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathSciWeek4);
    console.log("mathsci-week4-environments.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathSciWeek4);
    console.log("mathsci-week4-environments.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathSciWeek4',
        metadata: grade1MathSciWeek4.metadata,
        days: grade1MathSciWeek4
    });
    console.log("mathsci-week4-environments.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathSciWeek4 = grade1MathSciWeek4;
console.log("mathsci-week4-environments.js loaded and registered successfully");