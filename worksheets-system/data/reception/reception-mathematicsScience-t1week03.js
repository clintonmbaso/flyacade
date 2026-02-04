// Reception Class Mathematics & Science - Week 3 Data (Characteristics and Comparisons)
const receptionMathScienceWeek3 = {
    metadata: {
        grade: "reception",
        subject: "Mathematics & Science",
        week: 3,
        title: "Characteristics and Comparisons — Living vs. Non-Living",
        description: "Exploring life processes, classification, and sorting using multiple criteria"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "The 'Breath' Test",
        subtopic: "Identifying breathing as a life process",
        lessonContent: `
            <p>Today we're going to become life detectives! We'll learn how to tell if something is alive by checking if it breathes.</p>
            <p><strong>Key Concept:</strong> Living things need to breathe to stay alive.</p>
            <p><strong>Science Focus:</strong> Breathing is a life process that all living things do, even if we can't always see it!</p>
            <p><strong>Math Focus:</strong> Using "Yes/No" logic to create a simple binary sort.</p>
            <p><strong>Think About It:</strong> How do we breathe? Can you feel your breath? Put your hand in front of your mouth and breathe out warm air!</p>
            <p><strong>Important Question:</strong> How do we know a plant breathes even if we can't see it?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child" style="color: #2196F3;"></i> Classmate</div>
                <p>"Does a classmate breathe? YES! We can see their chest move and feel their warm breath."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Plant</div>
                <p>"Does a plant breathe? YES! Plants breathe through tiny holes in their leaves called stomata."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car" style="color: #9E9E9E;"></i> Toy Car</div>
                <p>"Does a toy car breathe? NO! It doesn't need air to live because it's not alive."</p>
            </div>
        `,
        taskInstructions: "Sort these items by whether they breathe or not.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Yes/No Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at these pictures. Sort them into two groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc; text-align: center;">
                            <div style="font-weight: bold; color: #4CAF50;">YES - Breathes</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw or paste pictures of living things here</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold; color: #9E9E9E;">NO - Doesn't Breathe</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw or paste pictures of non-living things here</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Breathing Detective</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Investigate these items. Circle YES or NO:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A fish in water: ☐ YES ☐ NO</div>
                        <div>A teddy bear: ☐ YES ☐ NO</div>
                        <div>A tree outside: ☐ YES ☐ NO</div>
                        <div>A book: ☐ YES ☐ NO</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Plant Breathing Evidence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw how a plant breathes:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">Plants breathe through tiny holes called <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Our Own Breathing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Feel your own breathing:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Place your hand in front of your mouth. Breathe out.</div>
                        <div>What do you feel? <span class="answer-space" style="width: 100px;"></span> air</div>
                        <div>Draw how your chest moves when you breathe:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three things at home that breathe and three things that don't. Tell a family member why.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Feeding and Growing",
        subtopic: "Understanding that living things need energy to grow",
        lessonContent: `
            <p>Today we'll discover why we eat food and how it helps us grow! We'll compare different living things and how much food they might need.</p>
            <p><strong>Key Concept:</strong> Living things need food for energy to grow and stay alive.</p>
            <p><strong>Science Focus:</strong> All living things (plants, animals, people) need some kind of food or energy source.</p>
            <p><strong>Math Focus:</strong> Estimating and comparing "more" or "less" food for different sizes of living things.</p>
            <p><strong>Think About It:</strong> A tiny baby mouse and a big elephant both need food, but who needs more?</p>
            <p><strong>Important Question:</strong> Does a stone grow if you give it water?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby" style="color: #FF9800;"></i> Human Baby</div>
                <p>"Does a baby need food? YES! Babies drink milk to grow big and strong."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cow" style="color: #795548;"></i> Cow</div>
                <p>"Does a cow need food? YES! Cows eat grass and need LOTS of it because they're big!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-doll" style="color: #E91E63;"></i> Doll</div>
                <p>"Does a doll need food? NO! Dolls don't grow or need energy because they're toys."</p>
            </div>
        `,
        taskInstructions: "Sort living things by their need for food and compare how much they might need.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Food Need Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these pictures into two groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc; text-align: center;">
                            <div style="font-weight: bold; color: #FF9800;">NEEDS FOOD</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw living things that eat</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold; color: #9E9E9E;">DOESN'T NEED FOOD</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw non-living things</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Food Estimation Station</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use blocks to show how much food each might need:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Small bird: <div class="block-area" style="display: inline-block; width: 100px; height: 20px; border: 1px solid #ccc;"></div> ____ blocks</div>
                        <div>Big cow: <div class="block-area" style="display: inline-block; width: 100px; height: 20px; border: 1px solid #ccc;"></div> ____ blocks</div>
                        <div>Which needs MORE food? ☐ Bird ☐ Cow</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Growing Evidence</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw something that grows when it eats:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">This is a <span class="answer-space" style="width: 100px;"></span>. It eats <span class="answer-space" style="width: 100px;"></span> to grow.</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Stone Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> The stone question:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>If we give a stone water every day for a week, will it grow?</div>
                        <div>☐ YES ☐ NO</div>
                        <div>Why? <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Draw your prediction:</div>
                        <div class="drawing-area" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Observe a plant or pet at home. What does it eat or need to grow? Draw it and bring your drawing to class.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Texture and Touch",
        subtopic: "Exploring physical materials from the earth",
        lessonContent: `
            <p>Today is getting messy and fun! We'll explore different earth materials and sort them by how they feel.</p>
            <p><strong>Key Concept:</strong> Non-living things from the earth have different textures we can feel.</p>
            <p><strong>Science Focus:</strong> Exploring soil, stones, and water as physical materials with different properties.</p>
            <p><strong>Math Focus:</strong> Using descriptive language (rough, smooth, heavy, light) and comparing weights.</p>
            <p><strong>Think About It:</strong> Why does wet mud feel different from dry soil? What happens when we add water?</p>
            <p><strong>Important Question:</strong> Is water heavier than dry soil?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #795548;"></i> Dry Soil</div>
                <p>"Dry soil feels crumbly, rough, and light. It falls through your fingers easily."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: #2196F3;"></i> Wet Mud</div>
                <p>"Wet mud feels squishy, smooth, sticky, and heavy. It holds together in your hands."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gem" style="color: #9E9E9E;"></i> Smooth Stones</div>
                <p>"Smooth stones feel hard, cool, and slippery. They don't change shape when you touch them."</p>
            </div>
        `,
        taskInstructions: "Explore texture stations and sort materials by how they feel.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Texture Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Visit each station. Draw what you feel:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">ROUGH Station</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw rough things here</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">SMOOTH Station</div>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw smooth things here</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Texture Words</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the words that match each material:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Dry Soil:</strong> ☐ Rough ☐ Smooth ☐ Crumbly ☐ Sticky ☐ Light</div>
                        <div><strong>Wet Mud:</strong> ☐ Rough ☐ Smooth ☐ Squishy ☐ Dry ☐ Heavy</div>
                        <div><strong>Smooth Stone:</strong> ☐ Hard ☐ Soft ☐ Cool ☐ Warm ☐ Slippery</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Weight Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Hold a cup of dry soil and a cup of water:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which feels heavier?</div>
                        <div>☐ Cup of dry soil ☐ Cup of water</div>
                        <div>Draw yourself holding the heavier one:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Texture Change Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What happens when we add water to dry soil?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Before water: The soil feels <span class="answer-space" style="width: 80px;"></span></div>
                        <div>After water: The mud feels <span class="answer-space" style="width: 80px;"></span></div>
                        <div>Draw the change:</div>
                        <div style="display: flex;">
                            <div style="flex: 1; text-align: center;">
                                <div>Dry Soil</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                            <div style="flex: 1; text-align: center;">
                                <div>Wet Mud</div>
                                <div class="drawing-area" style="height: 80px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three different textures at home (like a rough towel, a smooth plate, a squishy pillow). Describe them to your family.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Animal Families",
        subtopic: "Classifying animals into sub-groups",
        lessonContent: `
            <p>Today we'll become animal scientists! We'll learn how to group animals by how they move and what makes them special.</p>
            <p><strong>Key Concept:</strong> Animals can be sorted into groups based on their characteristics.</p>
            <p><strong>Science Focus:</strong> Identifying categories of living things: Birds, Insects, Mammals.</p>
            <p><strong>Math Focus:</strong> Part-part-whole relationships and counting groups within a total.</p>
            <p><strong>Think About It:</strong> What makes a bird different from a dog? What do all insects have in common?</p>
            <p><strong>Important Practice:</strong> If we have 3 birds and 2 dogs, how many animals do we have altogether?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove" style="color: #2196F3;"></i> Birds</div>
                <p>"Birds have feathers, wings, and most can fly. Examples: robin, eagle, penguin."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug" style="color: #4CAF50;"></i> Insects</div>
                <p>"Insects have 6 legs and often have wings. Examples: butterfly, ant, ladybug."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog" style="color: #FF9800;"></i> Mammals</div>
                <p>"Mammals have fur or hair, and drink milk when they're babies. Examples: dog, cat, human."</p>
            </div>
        `,
        taskInstructions: "Sort animal figures or pictures into groups and practice counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Movement Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort animal pictures into two groups:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc; text-align: center;">
                            <div style="font-weight: bold; color: #2196F3;">CAN FLY</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold; color: #795548;">WALK/CRAWL</div>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Count: ____ animals</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Grouping</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort these animals into three groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Animals: bird, butterfly, dog, ant, cat, bee</div>
                        <div>Birds: <span class="answer-space" style="width: 100px;"></span> (____ animals)</div>
                        <div>Insects: <span class="answer-space" style="width: 100px;"></span> (____ animals)</div>
                        <div>Mammals: <span class="answer-space" style="width: 100px;"></span> (____ animals)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Part-Part-Whole Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Count and add animal groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>We have 3 birds and 2 dogs.</div>
                        <div>Draw the birds: <div class="drawing-area" style="display: inline-block; width: 100px; height: 30px;"></div></div>
                        <div>Draw the dogs: <div class="drawing-area" style="display: inline-block; width: 100px; height: 30px;"></div></div>
                        <div>Total animals: ____ + ____ = ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Animal Characteristics</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite animal and describe it:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My animal is a <span class="answer-space" style="width: 100px;"></span></div>
                        <div>It has: ☐ Feathers ☐ Fur ☐ 6 legs ☐ Wings</div>
                        <div>It moves by: ☐ Flying ☐ Walking ☐ Swimming</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look for animals outside or in books. Find one bird, one insect, and one mammal. Draw or describe them.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "The 'My World' Review",
        subtopic: "Sorting by multiple criteria",
        lessonContent: `
            <p>Today is our big review day! We'll use everything we've learned to sort mystery items and show how much we know about our world.</p>
            <p><strong>Key Concept:</strong> We can sort items using different rules depending on what we're looking for.</p>
            <p><strong>Science Focus:</strong> Recapping characteristics of living vs. non-living things.</p>
            <p><strong>Math Focus:</strong> Final assessment of sorting, counting, and classification skills.</p>
            <p><strong>Think About It:</strong> Is a leaf living or non-living? What about a toy worm? How can we decide?</p>
            <p><strong>Important Question:</strong> How did we decide where each thing belongs in our world?</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #4CAF50;"></i> Leaf</div>
                <p>"A leaf WAS living when it was on a tree. Now it might be dried and not growing, but it came from a living thing."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm" style="color: #795548;"></i> Worm</div>
                <p>"A real worm is living - it breathes, eats, and moves. A toy worm is non-living - it doesn't do any of those things."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box" style="color: #9E9E9E;"></i> Mystery Box</div>
                <p>"Our mystery box contains surprises! We need to use our detective skills to figure out what each item is and where it belongs."</p>
            </div>
        `,
        taskInstructions: "Explore the mystery box and sort items using different criteria.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mystery Box Exploration</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Reach into the mystery box. Pull out one item:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Draw your mystery item:</div>
                        <div class="drawing-area" style="height: 100px;"></div>
                        <div>Is it living or non-living? ☐ Living ☐ Non-living</div>
                        <div>How do you know? <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Multiple Criteria Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Sort all mystery box items two different ways:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px; border-right: 1px solid #ccc; text-align: center;">
                            <div style="font-weight: bold;">By COLOR</div>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw items sorted by color</div>
                        </div>
                        <div style="flex: 1; padding: 10px; text-align: center;">
                            <div style="font-weight: bold;">By SIZE</div>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc; margin: 10px 0;"></div>
                            <div>Draw items sorted by size</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Living vs. Non-Living Final Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your final sorting display:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Items from our week: leaf, toy, worm, crayon, stone, feather</div>
                        <div>Living things: ________________________________ (____ items)</div>
                        <div>Non-living things: ___________________________ (____ items)</div>
                        <div>Total items: ____ + ____ = ____</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Science Detective Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete your science detective badge:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px solid gold; padding: 10px;">
                        <div style="text-align: center; font-size: 18px; font-weight: bold;">Science Detective</div>
                        <div style="text-align: center;">I can tell living from non-living!</div>
                    </div>
                    <div style="margin-top: 10px;">
                        <div>Three things I learned this week:</div>
                        <div>1. <span class="answer-space" style="width: 200px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 200px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Our World Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw our world with both living and non-living things:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">In my drawing, the living things are <span class="answer-space" style="width: 150px;"></span> and the non-living things are <span class="answer-space" style="width: 150px;"></span></div>
                </div>
            </div>
        `,
        homework: "Create a 'Living and Non-Living' collage at home using magazine pictures or drawings. Bring it to share next week.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(receptionMathScienceWeek3);
    console.log("reception-math-science-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(receptionMathScienceWeek3);
    console.log("reception-math-science-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'receptionMathScienceWeek3',
        metadata: receptionMathScienceWeek3.metadata,
        days: receptionMathScienceWeek3
    });
    console.log("reception-math-science-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.receptionMathScienceWeek3 = receptionMathScienceWeek3;
console.log("reception-math-science-week3.js loaded and registered successfully");