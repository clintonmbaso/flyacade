// Grade 3 Mathematics & Science - Term 1 Week 8 Data
const grade3MathScienceWeek8 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 1,
        week: 8,
        title: "Plants and Animals",
        description: "Exploring plants in the local environment, classifying plants, relating structures to functions, and identifying animal classes"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Plants",
        subtopic: "Exploring Different Plants in the Local Environment",
        lessonContent: `
            <p>Welcome to our exploration of plants! Today we'll discover the amazing variety of plants growing around us.</p>
            <p><strong>Key Question:</strong> What different plants can we find in our local environment?</p>
            <p><strong>Introduction:</strong> Plants are everywhere! They grow in gardens, parks, forests, and even in cracks in the sidewalk. Each plant is unique and special.</p>
            <p><strong>Types of Plants We Might See:</strong></p>
            <ul>
                <li><strong>Trees:</strong> Tall plants with woody stems (mango tree, avocado tree, pine tree)</li>
                <li><strong>Shrubs:</strong> Medium-sized plants with multiple stems (rose bush, hibiscus)</li>
                <li><strong>Herbs:</strong> Small, soft-stemmed plants (grass, basil, mint)</li>
                <li><strong>Climbers:</strong> Plants that grow up other structures (beans, grapevine, morning glory)</li>
                <li><strong>Creepers:</strong> Plants that spread along the ground (pumpkin, watermelon, sweet potato)</li>
            </ul>
            <p><strong>Why Plants Matter:</strong> Plants give us food, medicine, shade, and oxygen. They are living things that need water, sunlight, air, and soil to grow.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Tree Giants</div>
                <p>A mango tree can grow taller than a house! Its thick trunk and branches provide shade and a home for birds and squirrels.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Small but Mighty</div>
                <p>Grass is a small plant, but it can cover an entire field. It grows back quickly even after being stepped on or cut!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-carrot"></i> Food from Plants</div>
                <p>Many of our favorite foods come from plants: carrots (root), lettuce (leaf), corn (seed), and broccoli (flower)!</p>
            </div>
        `,
        taskInstructions: "Observe and draw plants in your local environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plant Detective Walk</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your school or home environment. Find and name three different plants:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Plant 1: _________________________ (where did you find it?)</div>
                        <div>Plant 2: _________________________ (where did you find it?)</div>
                        <div>Plant 3: _________________________ (where did you find it?)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Describe</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one plant you observed and write two sentences about it:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Plant Uses</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What do plants need to grow? Circle all that apply:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Water &nbsp;&nbsp; ☐ Sunlight &nbsp;&nbsp; ☐ Television &nbsp;&nbsp; ☐ Air &nbsp;&nbsp; ☐ Soil &nbsp;&nbsp; ☐ Music</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one way people use plants every day:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Draw one plant you see on your way home. Write where it was growing (garden, roadside, pot, etc.).",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Plants",
        subtopic: "Classifying Plants: Flowering vs. Non-Flowering",
        lessonContent: `
            <p>Today we'll learn how scientists group plants into two main categories: flowering plants and non-flowering plants!</p>
            <p><strong>Key Question:</strong> How can we sort plants into groups?</p>
            <p><strong>Flowering Plants:</strong></p>
            <ul>
                <li>Plants that grow flowers</li>
                <li>Flowers turn into fruits and seeds</li>
                <li><strong>Examples:</strong> Maize (corn), beans, sunflowers, roses, mango trees, tomatoes</li>
                <li><strong>Fun Fact:</strong> Most of the food we eat comes from flowering plants!</li>
            </ul>
            <p><strong>Non-Flowering Plants:</strong></p>
            <ul>
                <li>Plants that do NOT grow flowers</li>
                <li>They reproduce using spores or cones instead of flowers</li>
                <li><strong>Examples:</strong> Ferns, mosses, pine trees (gymnosperms), mushrooms (fungi - not true plants but often studied together)</li>
                <li><strong>Fun Fact:</strong> Ferns existed before dinosaurs and have been on Earth for over 300 million years!</li>
            </ul>
            <p><strong>How to Tell Them Apart:</strong></p>
            <ul>
                <li>Look for flowers, fruits, or seeds → FLOWERING PLANT</li>
                <li>Look for tiny brown spots (spores) on the underside of leaves (ferns) or no flowers at all → NON-FLOWERING PLANT</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-corn"></i> Maize - A Flowering Plant</div>
                <p>Maize (corn) has flowers! The tassel at the top is the male flower, and the silk on the cob is part of the female flower. Each kernel is a seed!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Beans - A Flowering Plant</div>
                <p>Bean plants grow beautiful flowers that turn into bean pods. The beans inside are the seeds!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-feather-alt"></i> Ferns - Non-Flowering Plants</div>
                <p>Ferns don't grow flowers. Instead, they have tiny dots (spores) on the backs of their leaves. Each spore can grow into a new fern!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> Moss - Non-Flowering Plant</div>
                <p>Moss grows in soft, green carpets on damp ground, rocks, or tree trunks. It never grows flowers and reproduces using spores.</p>
            </div>
        `,
        taskInstructions: "Sort plants into flowering and non-flowering groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each plant to the correct group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Maize (corn)</div>
                                <div>• Fern</div>
                                <div>• Bean plant</div>
                                <div>• Moss</div>
                                <div>• Mango tree</div>
                                <div>• Pine tree</div>
                                <div>• Sunflower</div>
                                <div>• Grass</div>
                            </div>
                            <div>
                                <div>→ Flowering Plant</div>
                                <div>→ Flowering Plant</div>
                                <div>→ Flowering Plant</div>
                                <div>→ Non-Flowering</div>
                                <div>→ Flowering Plant</div>
                                <div>→ Non-Flowering</div>
                                <div>→ Flowering Plant</div>
                                <div>→ Flowering Plant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Make a T-chart below. Write 3 flowering plants and 3 non-flowering plants:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Flowering Plants</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Non-Flowering Plants</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;">1.<br>2.<br>3.</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;">1.<br>2.<br>3.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at the picture of a fern below. Do you see any flowers? ________
                    <div class="drawing-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think maize and beans are called flowering plants?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find one flowering plant and one non-flowering plant near your home. Draw each one and label which group it belongs to.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Plants",
        subtopic: "Relating Structures of Plants to Their Functions",
        lessonContent: `
            <p>Today we'll learn about the different parts of a plant and what each part does!</p>
            <p><strong>Key Question:</strong> What do the different parts of a plant do?</p>
            <p><strong>The Main Parts of a Plant and Their Jobs:</strong></p>
            <ol>
                <li><strong>Roots:</strong> 
                    <ul>
                        <li>Anchor the plant in the soil</li>
                        <li>Absorb water and minerals from the soil</li>
                        <li>Sometimes store food (like carrots and sweet potatoes)</li>
                    </ul>
                </li>
                <li><strong>Stem:</strong>
                    <ul>
                        <li>Holds the plant upright</li>
                        <li>Carries water and food between roots and leaves</li>
                        <li>Supports leaves, flowers, and fruits</li>
                    </ul>
                </li>
                <li><strong>Leaves:</strong>
                    <ul>
                        <li>Make food for the plant using sunlight (photosynthesis)</li>
                        <li>Take in carbon dioxide and release oxygen</li>
                        <li>Have tiny holes called stomata to breathe</li>
                    </ul>
                </li>
                <li><strong>Flowers:</strong>
                    <ul>
                        <li>Help the plant reproduce</li>
                        <li>Attract pollinators like bees and butterflies</li>
                        <li>Turn into fruits with seeds inside</li>
                    </ul>
                </li>
                <li><strong>Fruits:</strong>
                    <ul>
                        <li>Protect seeds</li>
                        <li>Help spread seeds to new places (animals eat fruit and drop seeds)</li>
                    </ul>
                </li>
                <li><strong>Seeds:</strong>
                    <ul>
                        <li>Grow into new plants</li>
                        <li>Store food for the baby plant until it can make its own food</li>
                    </ul>
                </li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Root Racers</div>
                <p>Carrots are special roots that store extra food for the plant. That's why carrots are sweet and crunchy!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Transport</div>
                <p>If you put a celery stalk in colored water, you can see the tiny tubes in the stem carrying the water up to the leaves!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Leaf Factories</div>
                <p>Leaves are like tiny food factories. They use sunlight, water, and air to make sugar (food) for the plant.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bee"></i> Flower Power</div>
                <p>Bees visit flowers to collect nectar. While they're there, pollen sticks to them and gets carried to the next flower!</p>
            </div>
        `,
        taskInstructions: "Match plant parts to their functions and label a diagram.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Part to Its Job</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each plant part to what it does:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>Roots →</div>
                                <div>Stem →</div>
                                <div>Leaves →</div>
                                <div>Flower →</div>
                                <div>Seed →</div>
                            </div>
                            <div>
                                <div>Make food using sunlight</div>
                                <div>Absorb water from soil</div>
                                <div>Grow into a new plant</div>
                                <div>Carry water and hold plant up</div>
                                <div>Attract pollinators and make seeds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Label the Plant Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Label the parts of this plant using the words: roots, stem, leaves, flower
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4CAF50; position: relative;">
                        <div style="position: absolute; bottom: 5px; left: 5px;">______</div>
                        <div style="position: absolute; bottom: 60px; left: 45%;">______</div>
                        <div style="position: absolute; top: 30px; left: 45%;">______</div>
                        <div style="position: absolute; top: 5px; left: 45%;">______</div>
                        <p style="text-align: center; padding-top: 70px;">[Plant Drawing - Label the parts]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Fill in the Blank</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) A plant's ___________ take in water from the soil.</div>
                        <div>b) The ___________ holds the plant up and carries water.</div>
                        <div>c) ___________ make food for the plant using sunlight.</div>
                        <div>d) A ___________ can grow into a new plant.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a plant of your choice. Label at least 4 parts and write what each part does:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a plant in your home. Name three parts you can see and tell what each part does.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Animals",
        subtopic: "Identifying Classes of Animals: Vertebrates vs. Invertebrates",
        lessonContent: `
            <p>Today we'll learn how scientists group animals into two big categories: vertebrates and invertebrates!</p>
            <p><strong>Key Question:</strong> What makes some animals different from others?</p>
            <p><strong>Vertebrates (Animals with a Backbone):</strong></p>
            <ul>
                <li>Have a backbone (spine) inside their body</li>
                <li>The backbone is made of many small bones called vertebrae</li>
                <li>Vertebrates can be divided into 5 groups: mammals, birds, reptiles, amphibians, and fish</li>
                <li><strong>Examples:</strong> Humans, dogs, cats, chickens, snakes, frogs, fish, cows, elephants</li>
            </ul>
            <p><strong>Invertebrates (Animals WITHOUT a Backbone):</strong></p>
            <ul>
                <li>Do NOT have a backbone</li>
                <li>Some have hard outer shells (exoskeletons) for protection</li>
                <li>There are more invertebrates on Earth than any other animal group!</li>
                <li><strong>Examples:</strong> Worms, spiders, insects (ants, beetles, butterflies), snails, jellyfish, crabs, octopus</li>
            </ul>
            <p><strong>How to Tell Them Apart:</strong></p>
            <ul>
                <li>Does it have bones inside its body? → VERTEBRATE</li>
                <li>Does it have a hard shell or no bones at all? → INVERTEBRATE</li>
                <li>Can you feel its spine if you touch its back? → VERTEBRATE</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user"></i> Humans - Vertebrates</div>
                <p>You are a vertebrate! Feel your back. Those bumps you feel are your vertebrae (the bones in your backbone).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dove"></i> Chicken - Vertebrate</div>
                <p>A chicken has a backbone just like you! Birds are vertebrates too. Their backbone helps them balance while flying.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Earthworm - Invertebrate</div>
                <p>Worms don't have any bones at all! Their bodies are soft and squishy. They move by squeezing their muscles.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spider"></i> Spider - Invertebrate</div>
                <p>Spiders are invertebrates. They have a hard outer covering called an exoskeleton instead of bones inside their body.</p>
            </div>
        `,
        taskInstructions: "Identify and classify animals as vertebrates or invertebrates.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Animals</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write each animal in the correct group: <strong>Man, chicken, worm, spider, dog, butterfly, fish, snail</strong>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #2196F3; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Vertebrates (Have a backbone)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Invertebrates (No backbone)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle whether each animal is a vertebrate or invertebrate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) Frog → Vertebrate / Invertebrate</div>
                        <div>b) Ant → Vertebrate / Invertebrate</div>
                        <div>c) Cow → Vertebrate / Invertebrate</div>
                        <div>d) Jellyfish → Vertebrate / Invertebrate</div>
                        <div>e) Lizard → Vertebrate / Invertebrate</div>
                        <div>f) Beetle → Vertebrate / Invertebrate</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one vertebrate and one invertebrate. Label which is which:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Vertebrate</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Invertebrate</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Do you have a backbone? ________
                    <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name one animal you saw today. Is it a vertebrate or invertebrate?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three animals in your neighborhood. For each one, write whether it is a vertebrate or invertebrate and explain how you know.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        subtopic: "Activity: Sorting Animals (Vertebrates vs. Invertebrates)",
        lessonContent: `
            <p>Today is activity day! We'll practice sorting animals into vertebrates and invertebrates using pictures and games!</p>
            <p><strong>Review: What We Learned This Week</strong></p>
            <ul>
                <li><strong>Monday:</strong> Explored different plants in our environment</li>
                <li><strong>Tuesday:</strong> Classified plants as flowering or non-flowering</li>
                <li><strong>Wednesday:</strong> Learned plant parts and their functions</li>
                <li><strong>Thursday:</strong> Identified vertebrates vs. invertebrates</li>
                <li><strong>Friday:</strong> Sorting activity!</li>
            </ul>
            <p><strong>Vertebrates Quick Review:</strong> Animals WITH a backbone (Man, chicken, dog, cat, fish, frog, cow, horse)</p>
            <p><strong>Invertebrates Quick Review:</strong> Animals WITHOUT a backbone (Worm, spider, ant, butterfly, snail, jellyfish, beetle)</p>
            <p><strong>Activity Instructions:</strong> You will receive picture cards of different animals. Sort them into two groups: Vertebrates and Invertebrates.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-image"></i> Picture Cards</div>
                <p>Your teacher will give you cards with pictures of: Man, chicken, worm, spider, dog, butterfly, fish, snail, cow, ant, frog, beetle.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> How to Sort</div>
                <p>Ask yourself: "Does this animal have bones inside its body?" If yes → Vertebrate. If no → Invertebrate.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Partner Work</div>
                <p>Work with a partner! Compare your answers and discuss why you put each animal in its group.</p>
            </div>
        `,
        taskInstructions: "Sort animal pictures into Vertebrates and Invertebrates groups.",
        taskContent: `
            <div class="content-box">
                <p><strong>Activity: Sorting Animal Pictures</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort your animal picture cards into the correct groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #FF9800; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Vertebrates (Backbone)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Invertebrates (No Backbone)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    <div class="drawing-area" style="height: 180px; border: 1px dashed #ccc;"></div>
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    <div class="drawing-area" style="height: 180px; border: 1px dashed #ccc;"></div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Record Your Answers</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write the animals you sorted in each group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Vertebrates:</strong> _________________________________</div>
                        <div><strong>Invertebrates:</strong> _______________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Question</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which group has more animals in your picture set? Why do you think that is?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Favorite</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw your favorite vertebrate and your favorite invertebrate:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>My Favorite Vertebrate</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>My Favorite Invertebrate</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Week Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most interesting thing you learned about plants or animals this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw and label one vertebrate and one invertebrate from your home. Show your drawing to your family and explain the difference between them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek8);
    console.log("grade3-mathscience-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek8);
    console.log("grade3-mathscience-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek8',
        metadata: grade3MathScienceWeek8.metadata,
        days: grade3MathScienceWeek8
    });
    console.log("grade3-mathscience-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek8 = grade3MathScienceWeek8;
console.log("grade3-mathscience-week8.js loaded and registered successfully");