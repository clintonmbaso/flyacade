// Grade 2 Mathematics & Science - Week 2 Data (Natural Resources & Sets)
const grade2MathScienceWeek2 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 2,
        title: "Exploring Natural Resources and Sets",
        description: "Identifying natural resources, classifying them into sets, and learning set notation"
    },
    
    monday: {
        subject: "Science",
        topic: "The Nature Walk",
        subtopic: "Identifying Our Natural Resources",
        lessonContent: `
            <p>Welcome to our outdoor science adventure! Today we are moving our classroom outside to discover what the world is made of.</p>
            <p><strong>Key Concept:</strong> Everything we see in nature belongs to a big group called "Natural Resources."</p>
            <p><strong>What are Natural Resources?</strong></p>
            <ul>
                <li>Things found in nature that are useful to us</li>
                <li>Not made by people</li>
                <li>Examples: water, plants, animals, rocks, soil</li>
            </ul>
            <p><strong>Our Nature Walk Mission:</strong> We will search for different types of natural resources around our school.</p>
            <p><strong>Safety Rules:</strong> Stay with the group, look with your eyes (not your hands unless told), and walk carefully!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #2E7D32;"></i> Plant Resource</div>
                <p>Trees, flowers, and grass are plant resources. They give us oxygen, food, and shade!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water" style="color: #2196F3;"></i> Water Resource</div>
                <p>Puddles, ponds, and rain are water resources. All living things need water!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Nature Bingo Game!</div>
                <p>Let's play "Nature Bingo!" Find the items on your Discovery Checklist during our walk!</p>
            </div>
        `,
        taskInstructions: "Complete your Discovery Checklist during our nature walk.",
        taskContent: `
            <div class="content-box">
                <p><strong>Discovery Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and check off the natural resources you see:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Animal (bird, insect, squirrel)</div>
                        <div>☐ Water (puddle, pond, stream)</div>
                        <div>☐ Plant (tree, flower, grass)</div>
                        <div>☐ Soil or dirt</div>
                        <div>☐ Rock or stone</div>
                        <div>☐ Leaf (different shapes)</div>
                        <div>☐ Feather or shell</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw your favorite natural resource from the walk:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>This is a: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>I found it: <span class="answer-space" style="width: 120px;"></span> (on ground/in tree/etc.)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Group Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Be ready to share one thing you saw:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                        <div>"I saw a ________________."</div>
                        <div>"It is a natural resource because ________________."</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look for three natural resources at home or in your neighborhood. Draw one of them.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Sorting and Classifying",
        subtopic: "Grouping by Characteristics",
        lessonContent: `
            <p>Today we will learn how scientists organize the natural world by grouping similar things together.</p>
            <p><strong>Key Concept:</strong> Grouping helps us organize our world and makes it easier to study!</p>
            <p><strong>What is Classification?</strong></p>
            <ul>
                <li>Putting things with similar characteristics together</li>
                <li>Creating groups based on how things are alike</li>
                <li>Helping us understand patterns in nature</li>
            </ul>
            <p><strong>Ways to Classify Natural Resources:</strong></p>
            <ul>
                <li><strong>Living vs. Non-living:</strong> Does it grow and change?</li>
                <li><strong>Hard vs. Soft:</strong> How does it feel?</li>
                <li><strong>Found in Water vs. Found on Land:</strong> Where does it live or grow?</li>
                <li><strong>Plant vs. Animal vs. Mineral:</strong> What type is it?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #4CAF50;"></i> Living Things</div>
                <p>Tree (living) vs. Rock (non-living) - Living things grow, need food, and can have babies.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #795548;"></i> Hard vs. Soft</div>
                <p>Rock (hard) vs. Feather (soft) - We can feel the difference with our fingers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Sorting Relay!</div>
                <p>Let's play a sorting game! When I call out a category, run to the correct side of the room!</p>
            </div>
        `,
        taskInstructions: "Sort the natural resources into different groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Living or Non-living?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Living" or "Non-living" for each item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Tree: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Rock: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Bird: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Water: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Flower: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Soil: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Hard or Soft?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these items into hard and soft groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Hard Things</div>
                            <div style="margin-top: 10px;">
                                <div>☐ Rock</div>
                                <div>☐ Shell</div>
                                <div>☐ Bone</div>
                                <div>☐ Seed</div>
                            </div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Soft Things</div>
                            <div style="margin-top: 10px;">
                                <div>☐ Feather</div>
                                <div>☐ Flower petal</div>
                                <div>☐ Leaf</div>
                                <div>☐ Moss</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own Groups</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and sort four natural resources into two groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center;">Group 1: <span class="answer-space" style="width: 80px;"></span></div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center;">Group 2: <span class="answer-space" style="width: 80px;"></span></div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                            <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 items at home and sort them into two groups. Write down your grouping rule.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Introduction to Set Membership",
        subtopic: "Using the ∈ symbol",
        lessonContent: `
            <p>Today we will learn a special mathematical symbol that shows when something belongs to a group!</p>
            <p><strong>Key Concept:</strong> In mathematics, a "set" is a collection of things that belong together.</p>
            <p><strong>What is the ∈ symbol?</strong></p>
            <ul>
                <li>It means "is a member of" or "belongs to"</li>
                <li>It looks like a fancy letter E</li>
                <li>We use it to show something is in a set</li>
            </ul>
            <p><strong>How to use ∈:</strong></p>
            <ul>
                <li>Write the item first</li>
                <li>Then write the ∈ symbol</li>
                <li>Then write the set name</li>
                <li>Example: Dog ∈ Set of Animals</li>
            </ul>
            <p><strong>Practice with Natural Resources:</strong> We'll use sets like "Set of Plants," "Set of Animals," and "Set of Water Resources."</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lion" style="color: #FF9800;"></i> Animal Set</div>
                <p>Lion ∈ Set of Animals - This means "Lion is a member of the Set of Animals."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #2E7D32;"></i> Plant Set</div>
                <p>Oak Tree ∈ Set of Plants - This means "Oak Tree is a member of the Set of Plants."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Set Circle Game!</div>
                <p>Let's stand in a circle. When I call your item and set, jump in if you ∈ that set!</p>
            </div>
        `,
        taskInstructions: "Practice using the ∈ symbol to show set membership.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the ∈ Symbol</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write ∈ in the blanks to show membership:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                        <div>Fish ______ Set of Animals</div>
                        <div>Rose ______ Set of Plants</div>
                        <div>River ______ Set of Water Resources</div>
                        <div>Granite ______ Set of Rocks</div>
                        <div>Butterfly ______ Set of Insects</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw Your Own Set</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a circle (set) and put three items inside that belong together:
                    <div style="text-align: center; margin-top: 10px;">
                        <div style="display: inline-block; border: 3px solid #2196F3; border-radius: 50%; width: 200px; height: 200px; position: relative;">
                            <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); background: white; padding: 0 10px;">
                                Set of: <span class="answer-space" style="width: 80px;"></span>
                            </div>
                            <div class="drawing-area" style="position: absolute; top: 30px; left: 30px; width: 50px; height: 50px;"></div>
                            <div class="drawing-area" style="position: absolute; top: 100px; left: 30px; width: 50px; height: 50px;"></div>
                            <div class="drawing-area" style="position: absolute; top: 60px; left: 120px; width: 50px; height: 50px;"></div>
                        </div>
                    </div>
                    <div style="margin-top: 20px; text-align: center;">
                        <div>Write a membership statement for one item:</div>
                        <div style="font-size: 20px;">______ ∈ Set of ______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Matching Game</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw lines to match items with their correct sets:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: flex;">
                            <div style="flex: 1;">
                                <div>Goldfish</div>
                                <div>Pine Tree</div>
                                <div>Diamond</div>
                            </div>
                            <div style="flex: 1;">
                                <div>→ Set of Minerals</div>
                                <div>→ Set of Plants</div>
                                <div>→ Set of Animals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practice Writing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace and write the ∈ symbol:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 32px;">
                        <div style="border-bottom: 1px solid #ccc; padding-bottom: 10px;">∈ ∈ ∈ ∈</div>
                        <div style="padding: 10px 0;">Now write your own: _____ _____ _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 items at home. Write ∈ statements for them (Example: Spoon ∈ Set of Eating Tools).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Identifying Non-Members",
        subtopic: "Using the ∉ symbol",
        lessonContent: `
            <p>Today we learn the opposite symbol! What do we do when something does NOT belong to a set?</p>
            <p><strong>Key Concept:</strong> Sometimes things don't belong together. We need a symbol to show "is NOT a member of."</p>
            <p><strong>What is the ∉ symbol?</strong></p>
            <ul>
                <li>It means "is not a member of" or "does not belong to"</li>
                <li>It looks like ∈ with a line through it</li>
                <li>We use it when something is the "Odd One Out"</li>
            </ul>
            <p><strong>How to use ∉:</strong></p>
            <ul>
                <li>Write the item first</li>
                <li>Then write the ∉ symbol</li>
                <li>Then write the set name</li>
                <li>Example: Car ∉ Set of Animals</li>
            </ul>
            <p><strong>Important:</strong> Some things like trash or man-made objects are not natural resources and don't belong in nature sets!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car" style="color: #9C27B0;"></i> Not a Natural Resource</div>
                <p>Car ∉ Forest Resources - Cars are made by people, not found in forests!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash" style="color: #757575;"></i> Not in Nature</div>
                <p>Plastic Bag ∉ Set of Natural Resources - Plastic is man-made, not from nature.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Odd One Out Game!</div>
                <p>I'll show 4 items. Shout "∉!" when you see the one that doesn't belong!</p>
            </div>
        `,
        taskInstructions: "Practice using the ∉ symbol to show non-membership.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in ∉ or ∈</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write ∉ or ∈ in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                        <div>Bicycle ______ Set of Animals</div>
                        <div>Oak Leaf ______ Set of Plants</div>
                        <div>Computer ______ Set of Natural Resources</div>
                        <div>Rain ______ Set of Water Resources</div>
                        <div>Glass Bottle ______ Set of Rocks</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Odd One Out</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the item that doesn't belong and write a ∉ statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Forest Resources: Tree, Bush, Flower, Bicycle</div>
                        <div style="font-size: 20px; margin-top: 5px;">__________ ∉ Forest Resources</div>
                        <div style="margin-top: 15px;">Water Animals: Fish, Dolphin, Frog, Book</div>
                        <div style="font-size: 20px; margin-top: 5px;">__________ ∉ Water Animals</div>
                        <div style="margin-top: 15px;">Things That Grow: Plant, Flower, Child, Rock</div>
                        <div style="font-size: 20px; margin-top: 5px;">__________ ∉ Things That Grow</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own "Doesn't Belong"</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a set with 3 items that belong and 1 that doesn't:
                    <div style="border: 2px solid #2196F3; padding: 15px; border-radius: 10px; margin-top: 10px;">
                        <div style="text-align: center; font-weight: bold;">Set of: <span class="answer-space" style="width: 100px;"></span></div>
                        <div style="display: flex; margin-top: 10px;">
                            <div style="flex: 1; text-align: center;">
                                <div>Member 1</div>
                                <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Member 2</div>
                                <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Member 3</div>
                                <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center; border-left: 2px dashed #f44336;">
                                <div>Does NOT Belong</div>
                                <div class="drawing-area" style="height: 80px; margin: 5px;"></div>
                            </div>
                        </div>
                        <div style="text-align: center; margin-top: 10px;">
                            <div>Write the ∉ statement:</div>
                            <div style="font-size: 20px;">__________ ∉ Set of ______________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Man-made vs. Natural</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Sort these into Natural (∈) or Man-made (∉):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Apple: ______ Natural Resources</div>
                        <div>Toy Car: ______ Natural Resources</div>
                        <div>Cloud: ______ Natural Resources</div>
                        <div>Plastic Cup: ______ Natural Resources</div>
                        <div>Mountain: ______ Natural Resources</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 2 man-made items at home. Write why they ∉ Natural Resources.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "The Empty Set Concept",
        subtopic: "Using ∅ and { } symbols",
        lessonContent: `
            <p>Today we learn about a very special set... a set with NOTHING in it!</p>
            <p><strong>Key Concept:</strong> Sometimes a group has zero members. In math, we call this an "Empty Set."</p>
            <p><strong>What is an Empty Set?</strong></p>
            <ul>
                <li>A collection with no items in it</li>
                <li>Zero members</li>
                <li>Like an empty box or container</li>
            </ul>
            <p><strong>Empty Set Symbols:</strong></p>
            <ul>
                <li><strong>∅</strong> - Looks like a circle with a line through it</li>
                <li><strong>{ }</strong> - Curly braces with nothing between them</li>
                <li>Both mean the same thing: "empty set"</li>
            </ul>
            <p><strong>Examples from Nature:</strong></p>
            <ul>
                <li>The set of dinosaurs in our classroom = ∅</li>
                <li>The set of fish in a dry pond = { }</li>
                <li>The set of real unicorns = ∅</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box-open" style="color: #795548;"></i> Empty Container</div>
                <p>"My set of cookies" (shows empty jar) = ∅ - When all the cookies are gone!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dragon" style="color: #673AB7;"></i> Imaginary Things</div>
                <p>Set of dragons in our school = { } - Dragons are not real, so the set is empty!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Empty Set Hunt!</div>
                <p>Let's look around the room for empty sets! Who can find the most?</p>
            </div>
        `,
        taskInstructions: "Practice identifying and using empty set symbols.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Identifying Empty Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Which of these are empty sets? Write ∅ or "Not ∅":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>The set of elephants in our classroom: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>The set of students in our class: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>The set of mermaids in the ocean: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>The set of books on the shelf: <span class="answer-space" style="width: 80px;"></span></div>
                        <div>The set of snow in summer (in our country): <span class="answer-space" style="width: 80px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Empty Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw an empty container and label it with ∅:
                    <div style="text-align: center; margin-top: 10px;">
                        <div class="drawing-area" style="height: 150px; width: 200px; margin: 0 auto; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 10px; font-size: 24px;">Label: Set of ______________ = ∅</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Natural Resource Empty Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Think of empty sets in nature. Complete these:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 20px;">
                        <div>Set of whales in our school pond = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Set of palm trees at the North Pole = <span class="answer-space" style="width: 40px;"></span></div>
                        <div>Set of fish in a dry riverbed = {<span class="answer-space" style="width: 20px;"></span>}</div>
                        <div>Set of cactus plants in the ocean = <span class="answer-space" style="width: 40px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practice Writing Symbols</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Trace and write both empty set symbols:
                    <div style="margin-left: 20px; margin-top: 10px; font-size: 32px;">
                        <div style="border-bottom: 1px solid #ccc; padding-bottom: 10px;">∅ ∅ ∅ ∅</div>
                        <div style="border-bottom: 1px solid #ccc; padding: 10px 0;">{ } { } { } { }</div>
                        <div style="padding: 10px 0;">Now write your own: _____ _____ _____ _____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Create Your Own Empty Set</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Invent an empty set. Draw it and write about it:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My empty set is: Set of <span class="answer-space" style="width: 150px;"></span></div>
                        <div>It is empty because: <span class="answer-space" style="width: 200px; height: 40px;"></span></div>
                        <div style="font-size: 20px; margin-top: 10px;">Symbol: <span class="answer-space" style="width: 60px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 3 empty sets in your home or neighborhood. Draw one and write its ∅ symbol.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek2);
    console.log("mathscience-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek2);
    console.log("mathscience-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek2',
        metadata: grade2MathScienceWeek2.metadata,
        days: grade2MathScienceWeek2
    });
    console.log("mathscience-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek2 = grade2MathScienceWeek2;
console.log("mathscience-week2.js loaded and registered successfully");