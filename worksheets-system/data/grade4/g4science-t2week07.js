// Grade 4 Science - Term 2 Week 7 Data
const grade4ScienceWeek7 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 7,
        title: "Invertebrates, Soil Structure & Environmental Management",
        description: "Exploring animals without backbones, soil layers, soil types, and the Three Rs of waste management"
    },
    
    monday: {
        subject: "Science",
        topic: "Living Things",
        subtopic: "The World of Invertebrates",
        lessonContent: `
            <p>Welcome to our exploration of amazing animals without backbones! Today we'll discover the creatures that make up most of the animal kingdom.</p>
            <p><strong>Key Question:</strong> What animals don't have a backbone?</p>
            <p><strong>Introduction:</strong> Feel your own spine - that's your backbone! But many animals, like the ones in your garden, don't have this "bone stick." These animals are called <strong>invertebrates</strong>. In fact, over 95% of all animals on Earth are invertebrates!</p>
            <p><strong>Four Main Groups of Invertebrates:</strong></p>
            <ol>
                <li><strong>Insects:</strong> Ants, bees, grasshoppers, butterflies
                    <ul><li>Key feature: 6 legs, 3 body parts (head, thorax, abdomen)</li></ul>
                </li>
                <li><strong>Spiders (Arachnids):</strong> Jumping spiders, web-builders
                    <ul><li>Key feature: 8 legs, 2 body parts</li></ul>
                </li>
                <li><strong>Worms:</strong> Earthworms
                    <ul><li>Key feature: Long, soft, segmented bodies</li></ul>
                </li>
                <li><strong>Snails (Mollusks):</strong> Garden snails
                    <ul><li>Key feature: Hard shell, slimy foot for moving</li></ul>
                </li>
            </ol>
            <p><strong>Why Classify?</strong> Sorting animals into groups helps us understand how they live, what they eat, and how they move.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Amazing Insect Fact</div>
                <p>Ants can carry objects 50 times their own body weight! That's like a human lifting a car.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spider"></i> Spider Superpower</div>
                <p>Spider silk is stronger than steel of the same thickness! Some spiders use their silk to "fly" through the air.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Worm Wonders</div>
                <p>Earthworms have 5 hearts! They are superheroes of the soil - they create tunnels that help air and water reach plant roots.</p>
            </div>
        `,
        taskInstructions: "Sort invertebrates into four main groups and find real examples outside.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Invertebrate Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these animals into the correct invertebrate group:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Animals to sort: Ant, Earthworm, Garden Snail, Bee, Jumping Spider, Grasshopper, Web-building Spider</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Insects (6 legs)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Spiders (8 legs)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Worms</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Snails</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Invertebrate Field Trip</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Go outside for 10 minutes. Find ONE invertebrate and sketch it below:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which group does your invertebrate belong to? How do you know?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do you think there are so many more invertebrates than animals with backbones?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three invertebrates in your garden or neighborhood. Draw each one and write which group it belongs to (insect, spider, worm, or snail).",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Earth Science",
        subtopic: "Soil Layers (The Soil Profile)",
        lessonContent: `
            <p>Today we'll dig deep into the ground - literally! We'll discover what lies beneath our feet.</p>
            <p><strong>Key Question:</strong> Is soil the same all the way down to the center of the Earth?</p>
            <p><strong>Introduction:</strong> When you dig a hole in the ground, you might notice that the soil looks different at different depths. Soil is made of layers, like a cake! This is called the <strong>soil profile</strong>.</p>
            <p><strong>The 4 Layers of Soil (from top to bottom):</strong></p>
            <ol>
                <li><strong>Topsoil:</strong> Dark, rich in nutrients, where plants grow. This is where earthworms live!</li>
                <li><strong>Subsoil:</strong> Lighter in color, contains minerals washed down from the topsoil</li>
                <li><strong>Weathered Rock:</strong> Broken pieces of rock that are slowly breaking down</li>
                <li><strong>Parent Rock:</strong> The solid rock layer at the very bottom</li>
            </ol>
            <p><strong>Why Topsoil Matters:</strong> Farmers care most about topsoil because this is where crops grow their roots and get their nutrients. Without healthy topsoil, plants cannot grow well!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-birthday-cake"></i> The Soil Cake</div>
                <p>Think of soil like a layered cake! Topsoil is the frosting (dark and rich), subsoil is the sponge (lighter), weathered rock is the crunchy layer, and parent rock is the plate underneath.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Building Foundation</div>
                <p>When builders construct a house, they dig through topsoil and subsoil until they reach solid parent rock. That's where they pour the concrete foundation!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Root Depth</div>
                <p>Different plants have roots that reach different depths. Carrots and potatoes grow in the topsoil, but trees send roots deep into the subsoil and weathered rock!</p>
            </div>
        `,
        taskInstructions: "Draw and label the soil profile layers like a 'Soil Cake'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Trench Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe a hole or trench near your school (or look at the soil profile diagram). Record what you see:
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Write your observations here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Soil Cake - Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the soil profile (soil cake) and label all 4 layers:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Soil Layer Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Which layer is most important for farmers? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What do you think happens to topsoil during heavy rain?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How do earthworms help keep soil healthy?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Dig a small hole in your garden (with permission). Draw the layers you see. If you can't dig, draw a labeled diagram of the soil profile from memory.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Earth Science & Environmental Management",
        subtopic: "Soil Types and The Three Rs",
        lessonContent: `
            <p>Today we'll become soil scientists and environmental managers! We'll learn about different soil types and how to protect our environment.</p>
            <p><strong>Key Question:</strong> Why is some soil better for growing plants than others? How can we protect our soil?</p>
            <p><strong>Three Main Soil Types:</strong></p>
            <ol>
                <li><strong>Sand:</strong> 
                    <ul><li>Feels gritty, water runs through quickly</li>
                    <li>Doesn't hold nutrients well</li>
                    <li>Not good for most crops</li>
                    <li>Test: Falls apart when rolled into a "sausage"</li>
                    </ul>
                </li>
                <li><strong>Clay:</strong>
                    <ul><li>Feels smooth and sticky when wet</li>
                    <li>Holds water for a long time (can drown plant roots!)</li>
                    <li>Very heavy when wet</li>
                    <li>Test: Can roll into a long "sausage" without breaking</li>
                    </ul>
                </li>
                <li><strong>Loam:</strong>
                    <ul><li>A perfect mix of sand, clay, and organic matter</li>
                    <li>Best for growing crops</li>
                    <li>Holds water but also drains well</li>
                    <li>Test: Forms a "sausage" that breaks into short pieces</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Environmental Management - The Three Rs:</strong></p>
            <ul>
                <li><strong>Reduce:</strong> Use less plastic and create less waste</li>
                <li><strong>Reuse:</strong> Use an old bottle as a water jug, turn old jars into storage</li>
                <li><strong>Recycle:</strong> Turn old paper into new paper, melt old plastic into new items</li>
            </ul>
            <p><strong>Why This Matters:</strong> When we throw waste on soil, it can't grow healthy crops. We must protect our soil!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> The Sausage Test</div>
                <p>Take damp soil and try to roll it into a sausage shape. Sand won't hold together. Clay makes a long sausage. Loam makes a short sausage that breaks into pieces.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Recycling in Action</div>
                <p>Did you know? Recycling one aluminum can saves enough energy to power a TV for 3 hours!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Best for Growing</div>
                <p>Farmers LOVE loam soil because it's like the "Goldilocks" of soils - not too sandy, not too clayey, just right for plant roots!</p>
            </div>
        `,
        taskInstructions: "Test soil samples and learn the Three Rs of waste management.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Soil Experiment (Sausage Test)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Test each soil sample and record your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Soil Type</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Texture (gritty/smooth)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Sausage Test Result</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Best for Crops?</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Sand</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Clay</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Loam</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Soil Type Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which soil type would you choose for your garden? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why is loam considered the best soil for farming?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Three Rs - Environmental Management</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Give one example for each of the Three Rs:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Reduce: _________________________________</div>
                        <div>Reuse: __________________________________</div>
                        <div>Recycle: ________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> How does throwing waste on soil harm our environment?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Write one way you will help protect soil at home or school:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three different soil samples near your home. Try the Sausage Test on each. Write which type you found and draw what the soil looked like.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek7);
    console.log("grade4-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek7);
    console.log("grade4-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek7',
        metadata: grade4ScienceWeek7.metadata,
        days: grade4ScienceWeek7
    });
    console.log("grade4-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek7 = grade4ScienceWeek7;
console.log("grade4-science-week7.js loaded and registered successfully");