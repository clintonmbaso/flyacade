// Grade 3 Mathematics & Science - Term 1 Week 10 Data
const grade3MathScienceWeek10 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 10,
        title: "Care for Surroundings & Term Review",
        description: "Identifying types and causes of pollution, reviewing Soil/Plants (Science) and Sets/Numbers (Math), and Term 1 Examination"
    },
    
    monday: {
        subject: "Science",
        topic: "Care for Surroundings",
        subtopic: "Types of Pollution",
        lessonContent: `
            <p>Welcome to our lesson on pollution! Today we'll learn about the different types of pollution that affect our planet.</p>
            <p><strong>Key Question:</strong> What is pollution and what are the different types?</p>
            <p><strong>Introduction:</strong> Pollution happens when harmful things are added to our environment. These harmful things can hurt plants, animals, and people. There are three main types of pollution we need to know about.</p>
            <p><strong>The 3 Types of Pollution:</strong></p>
            <ol>
                <li><strong>Air Pollution:</strong> Harmful things in the air we breathe
                    <ul>
                        <li>Smoke from factories and cars</li>
                        <li>Dust and smoke from burning</li>
                        <li>Chemicals sprayed in the air</li>
                    </ul>
                </li>
                <li><strong>Land Pollution:</strong> Harmful things on the ground
                    <ul>
                        <li>Litter (plastic bags, bottles, wrappers)</li>
                        <li>Trash dumped in wrong places</li>
                        <li>Chemicals that soak into the soil</li>
                    </ul>
                </li>
                <li><strong>Water Pollution:</strong> Harmful things in rivers, lakes, and oceans
                    <ul>
                        <li>Trash thrown in water</li>
                        <li>Chemicals from farms and factories</li>
                        <li>Oil spills</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Why This Matters:</strong> Pollution can make people sick, hurt animals, and damage our beautiful planet. Learning about pollution helps us protect our environment!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smog"></i> Air Pollution Example</div>
                <p>When you see dark smoke coming from a factory chimney or exhaust from a car, that's air pollution. It makes the air dirty and hard to breathe.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-trash-alt"></i> Land Pollution Example</div>
                <p>Have you ever seen a plastic bag stuck in a tree or trash thrown on the ground instead of in a bin? That's land pollution!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Water Pollution Example</div>
                <p>If you see garbage floating in a river or dirty water coming from a pipe into a lake, that's water pollution. Fish and other animals can get sick from it.</p>
            </div>
        `,
        taskInstructions: "Identify and classify different types of pollution.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pollution Picture Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture description below. Write if it shows AIR, LAND, or WATER pollution:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Black smoke coming from a car: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                        <div>B. A plastic bottle floating in a river: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                        <div>C. A banana peel thrown on the grass: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                        <div>D. Smoke from burning trash: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                        <div>E. Oil spilled in the ocean: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                        <div>F. Broken glass on the playground: <span class="answer-space-inline" style="display: inline-block; width: 100px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one example of each type of pollution:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Air Pollution</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Land Pollution</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Water Pollution</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important to keep our air, land, and water clean?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your neighborhood with a family member. Look for examples of air, land, or water pollution. Draw or write what you find.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Care for Surroundings",
        subtopic: "Causes of Pollution",
        lessonContent: `
            <p>Today we'll learn about what causes pollution and how human activities can harm our environment.</p>
            <p><strong>Key Question:</strong> What things do people do that cause pollution?</p>
            <p><strong>Introduction:</strong> Most pollution is caused by things people do. When we understand what causes pollution, we can make better choices to protect our planet.</p>
            <p><strong>Causes of Pollution:</strong></p>
            <ol>
                <li><strong>Open Burning:</strong> 
                    <ul>
                        <li>Burning trash, leaves, or plastic in open areas</li>
                        <li>Creates smoke that pollutes the air</li>
                        <li>Harmful chemicals are released into the air we breathe</li>
                    </ul>
                </li>
                <li><strong>Littering:</strong>
                    <ul>
                        <li>Throwing trash on the ground instead of in bins</li>
                        <li>Leaving plastic bags, bottles, and wrappers in nature</li>
                        <li>Trash can blow into water and harm animals</li>
                    </ul>
                </li>
                <li><strong>Other Causes We Should Know:</strong>
                    <ul>
                        <li>Factories releasing smoke</li>
                        <li>Cars and trucks with exhaust fumes</li>
                        <li>Dumping chemicals into rivers</li>
                        <li>Not sorting or recycling waste properly</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Good News!</strong> We can help stop pollution by making better choices every day.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> Open Burning Example</div>
                <p>When someone burns plastic bottles in their backyard, black smoke rises into the air. That smoke has poisonous chemicals that can make people cough and have trouble breathing.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Littering Example</div>
                <p>Throwing a candy wrapper on the ground might seem small, but when many people do it, the trash adds up. The wrapper might blow into a river where a fish tries to eat it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Better Choices</div>
                <p>Instead of burning trash, we can recycle paper, plastic, and glass. Instead of littering, we can put trash in bins or carry it home. Small changes make a big difference!</p>
            </div>
        `,
        taskInstructions: "Identify causes of pollution and suggest solutions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cause and Effect</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each cause to its effect:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div><strong>Cause:</strong></div>
                                <div>• Open burning of trash</div>
                                <div>• Throwing plastic in the river</div>
                                <div>• Leaving trash on the ground</div>
                                <div>• Too many cars on the road</div>
                            </div>
                            <div>
                                <div><strong>Effect:</strong></div>
                                <div>→ Fish get sick from pollution</div>
                                <div>→ Air becomes smoky and hard to breathe</div>
                                <div>→ Animals might eat harmful trash</div>
                                <div>→ Exhaust fumes dirty the air</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Problem Solver</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each problem, write a solution:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Problem:</strong> People are burning plastic trash in their yard.</div>
                        <div><strong>Solution:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;"><strong>Problem:</strong> Someone throws a juice box on the playground.</div>
                        <div><strong>Solution:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                        <div style="margin-top: 10px;"><strong>Problem:</strong> A factory is putting dirty water into a river.</div>
                        <div><strong>Solution:</strong> <span class="answer-space-inline" style="display: inline-block; width: 200px; border-bottom: 1px solid #000;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: My Promise to the Earth</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write one thing YOU will do to help stop pollution:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Talk to your family about one change you can make at home to reduce pollution (like using less plastic, not burning trash, or recycling more).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Term 1 Review",
        subtopic: "Topic 3.1 - Soil and Plants",
        lessonContent: `
            <p>Today we'll review everything we learned about Soil and Plants in Term 1!</p>
            <p><strong>Let's Remember:</strong> This term we learned about soil, plants, and how they grow.</p>
            <p><strong>What is Soil?</strong></p>
            <ul>
                <li>Soil is the top layer of the Earth where plants grow</li>
                <li>Soil contains tiny pieces of rock, dead plants and animals, water, and air</li>
                <li>Different types of soil: sandy soil, clay soil, and loamy soil</li>
            </ul>
            <p><strong>Parts of a Plant:</strong></p>
            <ul>
                <li><strong>Roots:</strong> Hold the plant in the ground and take in water and nutrients</li>
                <li><strong>Stem:</strong> Holds up the plant and carries water and food to all parts</li>
                <li><strong>Leaves:</strong> Make food for the plant using sunlight</li>
                <li><strong>Flower:</strong> Helps the plant make seeds</li>
            </ul>
            <p><strong>What Plants Need to Grow:</strong></p>
            <ul>
                <li>Sunlight - for making food</li>
                <li>Water - to stay healthy</li>
                <li>Air - for breathing</li>
                <li>Nutrients - from the soil</li>
                <li>Space - to grow roots and leaves</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Plant Growth Example</div>
                <p>A seed needs soil, water, and sunlight to grow. First, roots grow down into the soil. Then a stem grows up toward the light. Finally, leaves appear and start making food!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Taking Care of Plants</div>
                <p>If a plant doesn't get enough water, its leaves will wilt and turn brown. If it doesn't get enough sunlight, it will grow tall and weak trying to find the light.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Why Plants Matter</div>
                <p>Plants give us food (fruits, vegetables, grains), clean air (they produce oxygen), and shelter for animals. Without plants, life on Earth would not exist!</p>
            </div>
        `,
        taskInstructions: "Review and test your knowledge about soil and plants.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Label the Plant</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Label the parts of the plant using these words: roots, stem, leaves, flower
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 70px;">[Draw a plant and label its parts]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Plants need _______, _______, air, and soil to grow.</div>
                        <div>B. The _______ holds the plant in the ground.</div>
                        <div>C. Leaves make food using _______.</div>
                        <div>D. Soil contains tiny pieces of _______, dead plants, water, and air.</div>
                        <div>E. The stem _______ water and food to all parts of the plant.</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: True or False</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write T (True) or F (False) for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ All plants need the same amount of water to grow.</div>
                        <div>___ Roots take in water from the soil.</div>
                        <div>___ Plants can grow without sunlight.</div>
                        <div>___ Soil is important for plant growth.</div>
                        <div>___ The flower helps the plant make seeds.</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw and label a plant growing in soil. Write two sentences about what the plant needs to grow well.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Term 1 Review",
        subtopic: "Sets and Numbers",
        lessonContent: `
            <p>Today we'll review everything we learned about Sets and Numbers in Term 1!</p>
            <p><strong>Let's Remember Sets:</strong></p>
            <ul>
                <li>A <strong>set</strong> is a group of things that belong together</li>
                <li>We can sort objects into sets based on how they are the same</li>
                <li>Examples: set of red objects, set of round objects, set of animals</li>
            </ul>
            <p><strong>Let's Remember Numbers:</strong></p>
            <ul>
                <li>Counting numbers: 1, 2, 3, 4, 5, ...</li>
                <li>We can write numbers in words: one, two, three</li>
                <li>We can compare numbers: bigger than (>), smaller than (<), equal to (=)</li>
                <li>We can put numbers in order: from smallest to biggest (ascending) or biggest to smallest (descending)</li>
            </ul>
            <p><strong>Let's Remember Place Value:</strong></p>
            <ul>
                <li>Ones place: the first digit on the right</li>
                <li>Tens place: the second digit from the right</li>
                <li>Hundreds place: the third digit from the right</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-layer-group"></i> Set Example</div>
                <p>Set A = {apple, banana, orange} (all fruits). Set B = {car, bus, bicycle} (all vehicles). Objects in a set share something in common!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-amount-up"></i> Number Order Example</div>
                <p>Order these numbers from smallest to largest: 15, 3, 9, 22. Answer: 3, 9, 15, 22. Always look at the tens place first!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Comparing Numbers Example</div>
                <p>45 is greater than 32 (45 > 32). 18 is less than 24 (18 < 24). 56 is equal to 56 (56 = 56).</p>
            </div>
        `,
        taskInstructions: "Review sets, comparing numbers, and place value.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting into Sets</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these items into two sets. Write them in the correct circle:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p>Items: cat, shirt, dog, pants, fish, hat, bird, shoes</p>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                            <div style="border: 1px solid #4A90E2; border-radius: 50%; width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
                                <strong>Animals</strong>
                                <div class="answer-space" style="height: 80px; width: 120px;"></div>
                            </div>
                            <div style="border: 1px solid #4A90E2; border-radius: 50%; width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
                                <strong>Clothing</strong>
                                <div class="answer-space" style="height: 80px; width: 120px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Compare Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write >, <, or = in each box:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>25 ☐ 18</div>
                        <div>42 ☐ 42</div>
                        <div>37 ☐ 53</div>
                        <div>89 ☐ 76</div>
                        <div>14 ☐ 14</div>
                        <div>61 ☐ 29</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Place Value</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the place value chart for each number:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; text-align: center;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Number</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hundreds</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Tens</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Ones</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">47</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">152</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">83</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Ordering Numbers</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write these numbers in order from smallest to largest:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>64, 28, 93, 15, 47</div>
                        <div>_____, _____, _____, _____, _____</div>
                    </div>
                    <div style="margin-top: 15px;">Write these numbers in order from largest to smallest:</div>
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <div>81, 36, 59, 72, 43</div>
                        <div>_____, _____, _____, _____, _____</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 numbers around your home (on clocks, food packages, books). Write each number and identify the tens and ones place.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Term 1 Examination",
        subtopic: "Comprehensive Review",
        lessonContent: `
            <p>Today is our Term 1 Examination! This test will cover everything we learned in Mathematics and Science this term.</p>
            <p><strong>What to Expect on the Exam:</strong></p>
            <ul>
                <li>Science questions about soil, plants, and pollution</li>
                <li>Mathematics questions about sets, numbers, and place value</li>
                <li>Word problems to solve</li>
                <li>Drawing and labeling</li>
            </ul>
            <p><strong>Exam Tips:</strong></p>
            <ol>
                <li>Read each question carefully before answering</li>
                <li>Show your work for math problems</li>
                <li>Take your time - don't rush!</li>
                <li>Check your answers at the end</li>
                <li>If you don't know an answer, try your best - don't leave it blank</li>
            </ol>
            <p><strong>You've Got This!</strong> You have worked hard all term. Take a deep breath, do your best, and be proud of everything you've learned!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Sample Science Question</div>
                <p>List the three types of pollution we learned about: air, land, and water pollution. Describe one cause of each type.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> Sample Math Question</div>
                <p>Sort these numbers into two sets: even numbers and odd numbers. Numbers: 12, 17, 24, 31, 46, 53.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Before You Begin</div>
                <p>Make sure you have a pencil and eraser. Read all instructions first. You can do this!</p>
            </div>
        `,
        taskInstructions: "Complete the Term 1 Examination covering all topics from Mathematics and Science.",
        taskContent: `
            <div class="content-box exam-box" style="background-color: #fff8e1; border: 2px solid #ffc107;">
                <p style="text-align: center; font-size: 18px; font-weight: bold;">TERM 1 EXAMINATION</p>
                <p style="text-align: center;">Grade 3 - Mathematics & Science</p>
                <p style="text-align: center;">Time: 60 minutes &nbsp;&nbsp;&nbsp; Total Marks: 50</p>
                <hr>
                
                <p><strong>SECTION A: SCIENCE (25 marks)</strong></p>
                
                <div class="task-item">
                    <span class="task-number">1</span> Name the three types of pollution. (3 marks)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">2</span> Give one example of a cause for each type of pollution. (3 marks)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label the parts of a plant. (4 marks)
                    <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">4</span> List four things plants need to grow. (4 marks)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">5</span> Match each part of the plant to its job: (4 marks)
                    <div style="margin-left: 20px;">
                        <div>Roots ___ &nbsp;&nbsp; A. Makes food using sunlight</div>
                        <div>Stem ___ &nbsp;&nbsp; B. Holds the plant in the ground</div>
                        <div>Leaves ___ &nbsp;&nbsp; C. Helps make seeds</div>
                        <div>Flower ___ &nbsp;&nbsp; D. Carries water to all parts</div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">6</span> Write two ways YOU can help stop pollution. (4 marks)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">7</span> Why is soil important for plants? (3 marks)
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                
                <hr>
                <p><strong>SECTION B: MATHEMATICS (25 marks)</strong></p>
                
                <div class="task-item">
                    <span class="task-number">8</span> Sort these items into two sets: Fruits and Vegetables. (4 marks)
                    <div style="margin-left: 20px;">Items: apple, carrot, banana, potato, orange, peas</div>
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">9</span> Write the correct symbol: > , < , or = (4 marks)
                    <div style="margin-left: 20px;">
                        <div>23 ___ 32</div>
                        <div>57 ___ 57</div>
                        <div>84 ___ 49</div>
                        <div>16 ___ 61</div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">10</span> Write the place value of the underlined digit: (4 marks)
                    <div style="margin-left: 20px;">
                        <div>4<span style="text-decoration: underline;">7</span> = ___ tens and ___ ones</div>
                        <div>1<span style="text-decoration: underline;">3</span>2 = ___ hundred, ___ tens, ___ ones</div>
                        <div><span style="text-decoration: underline;">8</span>5 = ___ tens and ___ ones</div>
                        <div>2<span style="text-decoration: underline;">9</span> = ___ tens and ___ ones</div>
                    </div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">11</span> Put these numbers in order from smallest to largest: (4 marks)
                    <div style="margin-left: 20px;">53, 27, 84, 19, 62</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">12</span> Put these numbers in order from largest to smallest: (4 marks)
                    <div style="margin-left: 20px;">45, 91, 38, 76, 50</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
                
                <div class="task-item">
                    <span class="task-number">13</span> Create a set of 5 things that are all the same color. Write them in set notation { }. (5 marks)
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                
                <hr>
                <p style="text-align: center; font-style: italic;">End of Examination. Check your answers before submitting!</p>
                <div class="answer-space" style="height: 40px;"></div>
            </div>
        `,
        homework: "Rest and relax over the weekend! You've completed Term 1. Next term we'll learn many new and exciting things.",
        homeworkDue: "First day of Term 2"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek10);
    console.log("grade3-mathscience-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek10);
    console.log("grade3-mathscience-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek10',
        metadata: grade3MathScienceWeek10.metadata,
        days: grade3MathScienceWeek10
    });
    console.log("grade3-mathscience-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek10 = grade3MathScienceWeek10;
console.log("grade3-mathscience-week10.js loaded and registered successfully");