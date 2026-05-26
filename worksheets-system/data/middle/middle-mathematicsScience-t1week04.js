// Grade Middle - Term 1 Week 4 Data
const gradeMiddleWeek4 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 1,
        week: 4,
        title: "Environmental Patterns & Measuring Length",
        description: "Exploring natural patterns, repeating sequences, and introductory length measurement concepts"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Environmental Patterns",
        subtopic: "Natural Patterns – Creating Repeating Lines or Rows",
        lessonContent: `
            <p>Welcome to our week exploring patterns in nature and how we measure the world around us! Today we'll discover the beautiful patterns found in leaves and twigs.</p>
            <p><strong>Key Question:</strong> What patterns can we find in nature?</p>
            <p><strong>Introduction:</strong> Patterns are everywhere in nature! Look at the veins on a leaf, the rings on a tree trunk, or the way branches grow. Today we'll create our own patterns using leaves and twigs.</p>
            <p><strong>What is a Pattern?</strong></p>
            <ul>
                <li>A pattern is something that repeats in a predictable way</li>
                <li>Patterns can be made with colors, shapes, sizes, or objects</li>
                <li>Nature uses patterns to grow efficiently and stay strong</li>
            </ul>
            <p><strong>Examples of Natural Patterns:</strong></p>
            <ol>
                <li><strong>Leaf Veins:</strong> They create repeating networks to transport water</li>
                <li><strong>Tree Rings:</strong> Each year a tree adds a new ring</li>
                <li><strong>Flower Petals:</strong> Many flowers have 3, 5, or 8 petals in repeating patterns</li>
                <li><strong>Spider Webs:</strong> Repeating circular patterns with radial lines</li>
            </ol>
            <p><strong>Pattern Vocabulary:</strong></p>
            <ul>
                <li><strong>Repeat:</strong> To do or make something again</li>
                <li><strong>Sequence:</strong> The order in which things happen or appear</li>
                <li><strong>Row:</strong> Things arranged in a straight line</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Leaf Pattern</div>
                <p>A fern leaf has tiny leaflets arranged in a repeating pattern along a central stem. This pattern helps the leaf capture more sunlight!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Branching Patterns</div>
                <p>Tree branches often grow in repeating patterns - one branch goes left, one goes right, then another goes left, and so on.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dot-circle"></i> Seed Patterns</div>
                <p>A sunflower has seeds arranged in two sets of spirals - one going left and one going right. That's a mathematical pattern called the Fibonacci sequence!</p>
            </div>
        `,
        taskInstructions: "Create repeating line and row patterns using leaves and twigs.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pattern Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Go outside and collect 10-15 leaves and 10-15 small twigs.
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>What colors, shapes, and sizes did you find?</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create a Repeating Row Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Arrange your leaves and twigs in a repeating pattern in a straight row:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Describe your pattern using words. What repeats?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Pattern Extension</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If your pattern is Leaf, Twig, Leaf, Twig, what comes next?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Create a different pattern using the same materials. Draw it below:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find a pattern at home (floor tiles, fence, blanket, or wallpaper). Draw the pattern and explain what repeats.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Environmental Patterns",
        subtopic: "Pattern Play with Stones – Alternating Patterns",
        lessonContent: `
            <p>Today we'll continue our pattern exploration using seeds and stones to create alternating patterns!</p>
            <p><strong>Key Question:</strong> What is an alternating pattern?</p>
            <p><strong>Introduction:</strong> An alternating pattern switches back and forth between two or more things. Think of a zebra's stripes - black, white, black, white. That's an alternating pattern!</p>
            <p><strong>Types of Alternating Patterns:</strong></p>
            <ol>
                <li><strong>AB Pattern:</strong> Two things that alternate (stone, seed, stone, seed)</li>
                <li><strong>ABC Pattern:</strong> Three things that repeat in order (stone, seed, twig, stone, seed, twig)</li>
                <li><strong>AAB Pattern:</strong> Two of one thing, then one of another (stone, stone, seed, stone, stone, seed)</li>
            </ol>
            <p><strong>Patterns in Nature:</strong></p>
            <ul>
                <li>Zebra stripes alternate black and white</li>
                <li>Tiger stripes alternate orange and black</li>
                <li>Beehives have repeating hexagonal (six-sided) cells</li>
                <li>Seashells have repeating spiral patterns</li>
            </ul>
            <p><strong>Why Patterns Matter:</strong> Patterns help us predict what comes next. Scientists use patterns to understand weather, animal behavior, and plant growth!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem"></i> Stone, Seed, Stone, Seed</div>
                <p>This is an AB pattern. If you see Stone, Seed, Stone, you can predict the next item will be Seed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Seed, Leaf, Twig Pattern</div>
                <p>Try an ABC pattern: Seed, Leaf, Twig, Seed, Leaf, Twig. What comes after Twig? Seed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler-combined"></i> Predicting Patterns</div>
                <p>If you see this pattern: Small Stone, Big Stone, Small Stone, Big Stone, what size stone comes next? Small Stone!</p>
            </div>
        `,
        taskInstructions: "Create alternating patterns using seeds and small stones.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Gather Materials</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Collect 15-20 small stones and 15-20 seeds (beans, sunflower seeds, or small pebbles).
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create an AB Alternating Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Arrange stones and seeds in an alternating pattern (stone, seed, stone, seed):
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your pattern below and label each item:
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 1px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create an ABC Alternating Pattern</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Use three different items (stone, seed, twig) to create an ABC pattern:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What is the 7th item in your ABC pattern? How did you know?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Pattern Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Create your own pattern rule. Have a friend predict the next three items:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find an alternating pattern at home or outside. Draw it and label the repeating parts (example: stripe, stripe, stripe, or tile, tile, tile).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Concept of Length – Long, Longer, Short, Shorter",
        lessonContent: `
            <p>Today we're moving from patterns to measurement! We'll learn how to describe and compare the length of objects.</p>
            <p><strong>Key Question:</strong> How can we describe how long something is?</p>
            <p><strong>Introduction:</strong> Length tells us how long something is from one end to the other. We compare lengths using words like long, longer, short, and shorter.</p>
            <p><strong>Length Vocabulary:</strong></p>
            <ul>
                <li><strong>Long:</strong> Great distance from end to end (a snake is long)</li>
                <li><strong>Short:</strong> Small distance from end to end (a worm is short)</li>
                <li><strong>Longer:</strong> Used when comparing two objects - the one with greater length</li>
                <li><strong>Shorter:</strong> Used when comparing two objects - the one with smaller length</li>
                <li><strong>Longest:</strong> The greatest length among three or more objects</li>
                <li><strong>Shortest:</strong> The smallest length among three or more objects</li>
            </ul>
            <p><strong>How to Compare Lengths:</strong></p>
            <ol>
                <li>Place objects side by side</li>
                <li>Make sure the starting points line up</li>
                <li>Look at where each object ends</li>
                <li>Use words: longer than, shorter than, equal to</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Pencil vs. Crayon</div>
                <p>If a pencil is longer than a crayon, then the crayon is shorter than the pencil. Both statements are true!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Animal Lengths</div>
                <p>A giraffe is longer (taller) than a horse. A mouse is shorter than a rabbit. The blue whale is the longest animal on Earth!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Object Comparison</div>
                <p>A school bus is longer than a car. A bicycle is shorter than a car. A train is the longest of all!</p>
            </div>
        `,
        taskInstructions: "Learn to compare lengths using vocabulary like long, longer, short, and shorter.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vocabulary Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each sentence with long, longer, short, or shorter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A snake is _______ than a worm.</div>
                        <div>B. A caterpillar is _______ than a snake.</div>
                        <div>C. A jump rope is very _______.</div>
                        <div>D. A paper clip is very _______.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Classroom Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Find two objects in the classroom. Compare their lengths:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object 1: _________</div>
                        <div>Object 2: _________</div>
                        <div>Which is longer? _________</div>
                        <div>Which is shorter? _________</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Compare</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw three lines of different lengths. Label them Short, Longer, Longest:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Name something in your home that is very long. Name something that is very short:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Arrange them from shortest to longest. Write their names in order.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Comparing Sticks – Ordering from Shortest to Longest",
        lessonContent: `
            <p>Today we'll practice comparing lengths by arranging sticks from shortest to longest!</p>
            <p><strong>Key Question:</strong> How can we put objects in order by length?</p>
            <p><strong>Introduction:</strong> When we have more than two objects, we can arrange them from shortest to longest. This is called ordering or sequencing by length.</p>
            <p><strong>Steps for Comparing Multiple Objects:</strong></p>
            <ol>
                <li>Collect all the objects you want to compare</li>
                <li>Look at two objects at a time - which is shorter?</li>
                <li>Keep comparing until you find the shortest one</li>
                <li>Set the shortest aside and compare the remaining objects</li>
                <li>Continue until all objects are ordered from shortest to longest</li>
            </ol>
            <p><strong>Ordering Words:</strong></p>
            <ul>
                <li><strong>Shortest:</strong> The smallest length</li>
                <li><strong>Longest:</strong> The greatest length</li>
                <li><strong>In Between:</strong> Lengths that are neither shortest nor longest</li>
            </ul>
            <p><strong>Tip for Accurate Comparison:</strong> Always line up the ends of objects before comparing. Even a small difference matters!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stick"></i> Stick Ordering</div>
                <p>If you have sticks that are 5cm, 12cm, 8cm, and 3cm, the order from shortest to longest is: 3cm, 5cm, 8cm, 12cm.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-brush"></i> Art Supply Order</div>
                <p>Arrange paintbrushes from shortest to longest. The watercolor brush is often shortest, then the detail brush, then the flat brush, with the large wash brush being longest.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shoe-prints"></i> Shoe Size</div>
                <p>If you line up family shoes from shortest to longest, you'll see baby shoes, then kids' shoes, then adult shoes. The tallest person usually has the longest shoes!</p>
            </div>
        `,
        taskInstructions: "Collect sticks, compare them, and arrange them from shortest to longest.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Gather and Compare Sticks</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Collect 5-7 sticks of different lengths from outside.
                    <div class="observation-area" style="height: 60px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Line up your sticks with all ends matching on one side.
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Order from Shortest to Longest</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Arrange your sticks in order from shortest to longest. Draw them below:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Label each stick: Shortest, 2nd, 3rd, 4th, Longest
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison Statements</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write three sentences comparing your sticks:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Without measuring, predict which is longer: your longest stick or your forearm. Test your prediction!
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 different spoons at home (teaspoon, tablespoon, serving spoon, etc.). Arrange them from shortest to longest. Have a family member check your order.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Measurement",
        subtopic: "Measuring with Hands – Using Hand-Spans",
        lessonContent: `
            <p>Today we'll learn how to measure length using a very special tool - our own hands!</p>
            <p><strong>Key Question:</strong> How can we measure things without a ruler?</p>
            <p><strong>Introduction:</strong> Before rulers were invented, people used their body parts to measure. Hand-spans, footsteps, and arm lengths were common measuring tools. Today we'll use our hand-span!</p>
            <p><strong>What is a Hand-Span?</strong></p>
            <ul>
                <li>A hand-span is the distance from the tip of your thumb to the tip of your little finger when your hand is stretched wide open</li>
                <li>Everyone's hand-span is different! Adults usually have larger hand-spans than children</li>
                <li>Hand-spans are a non-standard unit of measurement (not the same for everyone)</li>
            </ul>
            <p><strong>How to Measure with Hand-Spans:</strong></p>
            <ol>
                <li>Stretch your hand open as wide as possible</li>
                <li>Place your thumb at one end of the object</li>
                <li>Mark where your little finger reaches</li>
                <li>Move your hand to that spot and continue</li>
                <li>Count how many hand-spans fit along the object</li>
            </ol>
            <p><strong>Non-Standard vs. Standard Measurement:</strong></p>
            <ul>
                <li><strong>Non-standard:</strong> Hand-spans, footsteps, pencil lengths (different for everyone)</li>
                <li><strong>Standard:</strong> Inches, centimeters, feet, meters (same for everyone)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Measuring a Desk</div>
                <p>A student desk might be 5 hand-spans long. Your friend might measure the same desk and get 4 hand-spans because their hands are bigger!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chair"></i> Historical Measurement</div>
                <p>Ancient Egyptians used the "cubit" - the length from elbow to fingertip. That's why we see pyramids built with such amazing precision!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Why Standard Units?</div>
                <p>If you tell a friend your table is 8 hand-spans long, they won't know exactly how long it is unless you measure together. That's why we invented standard units like centimeters!</p>
            </div>
        `,
        taskInstructions: "Use hand-spans to measure classroom tables and compare results.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Learn Your Hand-Span</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Stretch your hand as wide as possible. Trace your hand below:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Measure from thumb tip to little finger tip. That's one hand-span!
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Measure Classroom Tables</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use your hand-span to measure the length of your desk or table:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My table is _______ hand-spans long.</div>
                        <div>My table is _______ hand-spans wide.</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare with a Partner</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Have a partner measure the SAME table with THEIR hand-span:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Partner's name: _________</div>
                        <div>Partner's measurement: _______ hand-spans</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why did you and your partner get different numbers? Explain:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Measure Other Objects</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Use hand-spans to measure three other classroom objects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Object 1: _________ = _______ hand-spans</div>
                        <div>Object 2: _________ = _______ hand-spans</div>
                        <div>Object 3: _________ = _______ hand-spans</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Why would using hand-spans be a problem if you were building a house?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "At home, measure your bed or a sofa using hand-spans. Then ask a family member to measure the same thing with their hand-span. Write down both answers and explain why they might be different.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek4);
    console.log("grade-middle-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek4);
    console.log("grade-middle-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek4',
        metadata: gradeMiddleWeek4.metadata,
        days: gradeMiddleWeek4
    });
    console.log("grade-middle-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek4 = gradeMiddleWeek4;
console.log("grade-middle-week4.js loaded and registered successfully");