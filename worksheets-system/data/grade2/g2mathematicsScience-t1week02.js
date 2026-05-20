// Grade 2 Mathematics & Science - Term 1 Week 2 Data
const grade2MathsScienceWeek2 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        term: 1,
        week: 2,
        title: "Grouping Things (Sets)",
        description: "Exploring natural resources, classifying items, understanding group membership, and learning set symbols including empty set"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Exploring Natural Resources",
        lessonContent: `
            <p>Welcome to our week about grouping things! Today we'll explore natural resources in our environment.</p>
            <p><strong>Key Question:</strong> What natural resources can we find around us?</p>
            <p><strong>Introduction:</strong> Natural resources are things that come from nature. They are not made by people. The Earth gives us many wonderful resources!</p>
            <p><strong>Natural Resources We Will Explore:</strong></p>
            <ol>
                <li><strong>Animals:</strong> Birds, fish, insects, mammals, reptiles - all living creatures in nature</li>
                <li><strong>Water:</strong> Rivers, lakes, oceans, rain - water is essential for all life</li>
                <li><strong>Forests:</strong> Trees, plants, flowers - forests give us wood, oxygen, and homes for animals</li>
            </ol>
            <p><strong>Other Natural Resources:</strong></p>
            <ul>
                <li>Soil and rocks</li>
                <li>Sunlight</li>
                <li>Air (oxygen)</li>
                <li>Minerals from the ground</li>
            </ul>
            <p><strong>Remember:</strong> Natural resources are gifts from nature that we need to protect!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Forest Resources</div>
                <p>Trees give us wood for building houses and making paper. Forests are also homes for birds, squirrels, and many other animals!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Resources</div>
                <p>We drink water, wash with water, and plants need water to grow. Fish and frogs live in water. Water is a very important natural resource!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw"></i> Animal Resources</div>
                <p>Animals give us food like eggs and milk. Some animals help plants grow by spreading seeds. Bees help make honey!</p>
            </div>
        `,
        taskInstructions: "Identify and draw natural resources in your environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Circle the Natural Resources</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at these items. Circle the ones that are natural resources:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🌳 Tree &nbsp;&nbsp;&nbsp; 🏠 House &nbsp;&nbsp;&nbsp; 💧 Water &nbsp;&nbsp;&nbsp; 🚗 Car &nbsp;&nbsp;&nbsp; 🐶 Dog</div>
                        <div>📚 Book &nbsp;&nbsp;&nbsp; ☀️ Sun &nbsp;&nbsp;&nbsp; 🪨 Rock &nbsp;&nbsp;&nbsp; 🐟 Fish &nbsp;&nbsp;&nbsp; ✏️ Pencil</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>I circled: ___________</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one animal, one water source, and one thing from the forest:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; text-align: center; padding: 10px;">
                            <strong>Animal</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 10px;">
                            <strong>Water</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; text-align: center; padding: 10px;">
                            <strong>Forest</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do we need to take care of our natural resources?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your home or neighborhood. Find and list 5 natural resources you see (examples: tree, bird, soil, water, sun).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Identifying and Classifying Resources",
        lessonContent: `
            <p>Today we will learn how to put things into groups! Grouping things by their characteristics helps us understand them better.</p>
            <p><strong>Key Question:</strong> How can we sort natural resources into groups?</p>
            <p><strong>What is Classification?</strong></p>
            <p>Classification means putting things into groups that share similar characteristics (ways they are the same).</p>
            <p><strong>Ways to Classify Natural Resources:</strong></p>
            <ol>
                <li><strong>Living vs. Non-Living</strong>
                    <ul>
                        <li>Living: Animals, trees, plants, flowers</li>
                        <li>Non-Living: Water, rocks, soil, sunlight, air</li>
                    </ul>
                </li>
                <li><strong>Found on Land vs. Found in Water</strong>
                    <ul>
                        <li>Land: Trees, lions, soil, rocks</li>
                        <li>Water: Fish, rivers, lakes, seaweed</li>
                    </ul>
                </li>
                <li><strong>Can Grow vs. Cannot Grow</strong>
                    <ul>
                        <li>Can Grow: Trees, plants, animals</li>
                        <li>Cannot Grow: Water, rocks, sunlight</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Let's Practice Thinking:</strong> A frog is a living thing. It can grow. It lives near water. A rock is non-living. It cannot grow. It is found on land.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-down"></i> Sorting Animals</div>
                <p>We can sort animals into groups: animals that fly (birds, butterflies), animals that swim (fish, whales), and animals that walk (dogs, elephants).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Sorting Plants</div>
                <p>Plants can be sorted into trees (tall with trunks), bushes (medium with many stems), and flowers (colorful with petals).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Sorting Water</div>
                <p>Water can be found in different places: rivers (flowing), lakes (still), and oceans (salty). All are natural water resources!</p>
            </div>
        `,
        taskInstructions: "Sort and classify natural resources into different groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Living or Non-Living?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each item to the correct group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>🌳 Tree</div>
                                <div>💧 Water</div>
                                <div>🐦 Bird</div>
                                <div>🪨 Rock</div>
                                <div>🐟 Fish</div>
                                <div>☀️ Sun</div>
                            </div>
                            <div>
                                <div style="border: 2px solid #4CAF50; padding: 10px; margin-bottom: 5px;"><strong>LIVING</strong></div>
                                <div style="border: 2px solid #FF9800; padding: 10px;"><strong>NON-LIVING</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at these items: 🐄 Cow, 🌲 Pine tree, 🐸 Frog, 🌻 Sunflower, 🦋 Butterfly, 🪨 Rock
                    <div style="margin-top: 10px;">
                        <p>Sort them into two groups of your choice. Tell how you sorted them:</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>Group 1:</strong>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px;">
                                <strong>Group 2:</strong>
                                <div class="answer-space" style="height: 80px;"></div>
                            </div>
                        </div>
                        <p>How I sorted them: <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Classification Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which item does NOT belong in each group? Why?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Fish, Bird, Tree, Frog → _________ does not belong because _________</p>
                        <div class="answer-space" style="height: 40px;"></div>
                        <p>b) Rock, Sun, Water, Flower → _________ does not belong because _________</p>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 small objects at home (toys, leaves, stones, etc.). Sort them into two groups and explain how you sorted them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Membership of Groups",
        lessonContent: `
            <p>Today we will learn about being a member of a group. Some things belong to a group, and some things do not!</p>
            <p><strong>Key Question:</strong> What does it mean to be "a member of" a group?</p>
            <p><strong>What is a Set?</strong></p>
            <p>A set is a collection of things that belong together. We can put a curly brace { } around a set to show all its members.</p>
            <p><strong>Example:</strong> Set of Farm Animals = { Cow, Pig, Chicken, Sheep }</p>
            <p><strong>"Is a member of" vs "Is not a member of":</strong></p>
            <ul>
                <li><strong>Is a member of:</strong> An item belongs to the group</li>
                <li><strong>Is not a member of:</strong> An item does NOT belong to the group</li>
            </ul>
            <p><strong>Let's Practice Thinking:</strong></p>
            <ul>
                <li>A FROG is a member of the set of Animals ✓</li>
                <li>A FROG is not a member of the set of Trees ✗</li>
                <li>WATER is a member of the set of Natural Resources ✓</li>
                <li>WATER is not a member of the set of Living Things ✗</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Is a Member</div>
                <p>A dog is a member of the set of pets. A cat is also a member of the set of pets. A rock is NOT a member of the set of pets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Is Not a Member</div>
                <p>Is a fish a member of the set of things that fly? No! A fish is not a member because fish swim, they do not fly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Group Membership</div>
                <p>Think of your classroom as a set. You are a member of your class! Your friend from another class is not a member of your class set.</p>
            </div>
        `,
        taskInstructions: "Determine whether items are members or not members of given sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Is it a Member?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write YES or NO for each question:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Set of Animals = { Dog, Cat, Bird, Fish }</p>
                        <p>a) Is a Whale a member of this set? _________</p>
                        <p>b) Is a Chair a member of this set? _________</p>
                        <p>Set of Things That Grow = { Tree, Flower, Grass, You }</p>
                        <p>c) Is a Rock a member of this set? _________</p>
                        <p>d) Is a Seed a member of this set? _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Finish each sentence with "is a member of" or "is not a member of":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) A pine tree _________ the set of Forest Things.</p>
                        <p>b) A television _________ the set of Natural Resources.</p>
                        <p>c) Rain _________ the set of Water Sources.</p>
                        <p>d) A bicycle _________ the set of Animals.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Set</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a set called "Things in My Kitchen" and list 4 members:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Set = { _________ , _________ , _________ , _________ }</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one thing that is NOT a member of your set:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a circle. Inside, draw 3 members of the set "Things in the Sky". Outside the circle, draw 1 thing that is NOT a member.
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Draw a big circle on paper. Inside, draw 4 things that are members of the set 'Things in a Garden'. Outside, draw 2 things that are not members.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Symbols: ∈ (member of) and ∉ (not a member of)",
        lessonContent: `
            <p>Today we will learn special math symbols that mean "is a member of" and "is not a member of"!</p>
            <p><strong>Key Question:</strong> How can we use symbols to show if something belongs to a set?</p>
            <p><strong>The Symbols We Use:</strong></p>
            <ul>
                <li><strong>∈</strong> (ELEMENT OF) means "is a member of"</li>
                <li><strong>∉</strong> (NOT AN ELEMENT OF) means "is not a member of"</li>
            </ul>
            <p><strong>How to Read and Write These Symbols:</strong></p>
            <p>If we have Set A = { Dog, Cat, Bird }</p>
            <ul>
                <li>Dog ∈ A (Dog is a member of Set A)</li>
                <li>Fish ∉ A (Fish is not a member of Set A)</li>
            </ul>
            <p><strong>Let's Practice Reading:</strong></p>
            <ul>
                <li>Tree ∈ { Forest things } ✓</li>
                <li>Car ∉ { Natural resources } ✓</li>
                <li>Water ∈ { Things that are wet } ✓</li>
                <li>Sun ∉ { Things that live underground } ✓</li>
            </ul>
            <p><strong>Remember:</strong> The symbol ∈ looks like an E (for Element). The symbol ∉ has a line through it (like "NO" meaning NOT a member).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-symbol"></i> Using ∈</div>
                <p>If Set B = { 1, 2, 3, 4, 5 }, then we can say: 3 ∈ B (3 is a member of Set B). We can also say: 7 ∉ B (7 is not a member).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-double"></i> Practice Reading</div>
                <p>Set C = { Apple, Banana, Orange }<br>
                Apple ∈ C (True!)<br>
                Grape ∉ C (True! Grape is not in the set.)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Writing the Symbols</div>
                <p>To write ∈, draw a curved line that looks like a cursive 'e'. To write ∉, draw the same symbol then add a line through it (like a "no" sign).</p>
            </div>
        `,
        taskInstructions: "Use the ∈ and ∉ symbols to show membership in sets.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Correct Symbol</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write ∈ or ∉ in each blank:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Set F = { Frog, Fish, Turtle, Duck }</p>
                        <p>a) Frog _____ F</p>
                        <p>b) Cat _____ F</p>
                        <p>c) Duck _____ F</p>
                        <p>d) Whale _____ F</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Statements</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Fill in the blank with the correct symbol (∈ or ∉):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Water _____ { Natural Resources }</p>
                        <p>b) Pencil _____ { Natural Resources }</p>
                        <p>c) Lion _____ { Animals that live in Africa }</p>
                        <p>d) Penguin _____ { Animals that can fly }</p>
                        <p>e) Sun _____ { Things that give light }</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write TRUE or FALSE for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Oak tree ∈ { Forest things } _________</p>
                        <p>b) Television ∈ { Natural Resources } _________</p>
                        <p>c) Rain ∉ { Water sources } _________</p>
                        <p>d) Butterfly ∉ { Insects } _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create and Solve</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a set of 4 fruits. Write 2 statements using ∈ and 2 statements using ∉:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>My Set = { _________ , _________ , _________ , _________ }</p>
                        <p>Statement 1 (∈): _________ ∈ My Set</p>
                        <p>Statement 2 (∈): _________ ∈ My Set</p>
                        <p>Statement 3 (∉): _________ ∉ My Set</p>
                        <p>Statement 4 (∉): _________ ∉ My Set</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 statements about natural resources using ∈ and ∉ symbols. Example: Tree ∈ { Living things }. Car ∉ { Natural resources }.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Sets",
        subtopic: "Empty Set: Meaning and Symbol",
        lessonContent: `
            <p>Today we will learn about a very special set - the empty set! It is a set with nothing inside.</p>
            <p><strong>Key Question:</strong> Can a set have no members?</p>
            <p><strong>What is an Empty Set?</strong></p>
            <p>An empty set is a set that contains NO members. It is empty - like an empty box or an empty room!</p>
            <p><strong>The Symbols for Empty Set:</strong></p>
            <ul>
                <li><strong>∅</strong> (Empty set symbol - a circle with a line through it)</li>
                <li><strong>{ }</strong> (Curly braces with nothing inside)</li>
            </ul>
            <p><strong>Examples of Empty Sets:</strong></p>
            <ul>
                <li>Set of elephants in this classroom = ∅ (There are no elephants here!)</li>
                <li>Set of students taller than 3 meters = { } (No student is that tall!)</li>
                <li>Set of fish living in a desert = ∅ (Fish cannot live in a desert)</li>
            </ul>
            <p><strong>Remember:</strong> The empty set is still a set! It just has zero members.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open"></i> Empty Box</div>
                <p>Think of an empty lunchbox with no food inside. That is like the empty set ∅ - it is a set (or container) with nothing inside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-moon"></i> Real Life Empty Sets</div>
                <p>Set of days in a week that start with Z = ∅ (No days start with Z!)<br>
                Set of dinosaurs alive today = { } (All dinosaurs are extinct)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Is This Empty?</div>
                <p>Set of students who are 100 years old = ∅ (Too old to be a student!)<br>
                Set of fish that can ride a bicycle = ∅ (Fish can't ride bicycles!)</p>
            </div>
        `,
        taskInstructions: "Identify when a set is empty and use the empty set symbol.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Empty or Not Empty?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Empty" or "Not Empty" for each set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Set of trees in a forest _________</p>
                        <p>b) Set of cats that can bark _________</p>
                        <p>c) Set of students in your class _________</p>
                        <p>d) Set of plants that grow on the moon _________</p>
                        <p>e) Set of fish in the ocean _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Which Symbol Should We Use?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write ∅ or write the members of the set:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Set of oceans on Earth = { _________ }</p>
                        <p>b) Set of students who can fly = _________</p>
                        <p>c) Set of primary colors = { _________ , _________ , _________ }</p>
                        <p>d) Set of days in a week that have 30 hours = _________</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Empty Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create 3 different empty sets by completing these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>a) Set of _________ in my pocket = ∅</p>
                        <p>b) Set of _________ living on Mars = { }</p>
                        <p>c) Set of _________ that are purple and striped = ∅</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw the Empty Set</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a circle (set). Show that it is an empty set by leaving it empty. Write the symbol ∅ inside:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Review Question</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What is the difference between a set with one member and an empty set?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find or draw 3 examples of empty sets in real life. Write each example using the ∅ symbol or { }.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathsScienceWeek2);
    console.log("grade2-maths-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathsScienceWeek2);
    console.log("grade2-maths-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathsScienceWeek2',
        metadata: grade2MathsScienceWeek2.metadata,
        days: grade2MathsScienceWeek2
    });
    console.log("grade2-maths-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathsScienceWeek2 = grade2MathsScienceWeek2;
console.log("grade2-maths-science-week2.js loaded and registered successfully");