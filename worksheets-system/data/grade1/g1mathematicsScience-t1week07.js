// Grade 1 Mathematics & Science - Term 1 Week 7 Data
const grade1MathScienceWeek7 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 1,
        week: 7,
        title: "Plants and Animals",
        description: "Identifying common plants, classifying flowering/non-flowering plants, exploring animal habitats, and grouping vertebrates vs invertebrates"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Plants",
        subtopic: "Identifying Common Plants in Our Environment",
        lessonContent: `
            <p>Welcome to our exploration of plants! Today we'll learn about the different plants that grow all around us.</p>
            <p><strong>Key Question:</strong> What plants do you see every day?</p>
            <p><strong>Introduction:</strong> Plants are living things that grow in the ground. They need water, sunlight, and air to live. There are many different kinds of plants in our environment!</p>
            <p><strong>Three Types of Plants We See Every Day:</strong></p>
            <ol>
                <li><strong>Weeds:</strong> Plants that grow wild where we don't want them (like dandelions, grass in cracks)</li>
                <li><strong>Crops:</strong> Plants that farmers grow for food (like corn, wheat, rice, vegetables)</li>
                <li><strong>Flowers:</strong> Plants grown for their beautiful colors and smells (like roses, sunflowers, daisies)</li>
            </ol>
            <p><strong>What do plants need to grow?</strong></p>
            <ul>
                <li>Water - to drink</li>
                <li>Sunlight - for energy</li>
                <li>Soil - for nutrients and support</li>
                <li>Air - to breathe</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Plants Around Us</div>
                <p>Look outside your window! You might see grass (a weed if you don't want it there!), a tomato plant (a crop that gives food), or a marigold (a flower that looks pretty).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Food from Plants</div>
                <p>Many crops give us food. Carrots grow under the ground, apples grow on trees, and lettuce grows close to the soil.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Plant Needs</div>
                <p>If a plant doesn't get water, it wilts and turns brown. If it doesn't get sunlight, it grows weak and yellow. Plants need our help to grow strong!</p>
            </div>
        `,
        taskInstructions: "Draw plants from your environment and answer questions about what plants need.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a weed, a crop, and a flower that you see in your environment:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Weed</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Crop</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Flower</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Do Plants Need?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the things that plants need to grow:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🌊 Water &nbsp;&nbsp;&nbsp; ☀️ Sunlight &nbsp;&nbsp;&nbsp; 📚 Books &nbsp;&nbsp;&nbsp; 🍕 Pizza</div>
                        <div>🌱 Soil &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🎵 Music &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 💨 Air &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🧸 Toys</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Plant</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the pictures that show plants:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px; flex-wrap: wrap;">
                        <div>🌳 Tree</div>
                        <div>🐕 Dog</div>
                        <div>🌻 Sunflower</div>
                        <div>🚗 Car</div>
                        <div>🍎 Apple</div>
                        <div>🪨 Rock</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Plant's Needs</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a plant and show what it needs to grow (sun, water, soil):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look for three different plants in your yard or on your way to school. Draw them and tell if each is a weed, crop, or flower.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Plants",
        subtopic: "Flowering and Non-Flowering Plants",
        lessonContent: `
            <p>Today we'll learn how to sort plants into two groups: those that make flowers and those that don't!</p>
            <p><strong>Key Question:</strong> Do all plants have flowers?</p>
            <p><strong>Introduction:</strong> Some plants grow beautiful flowers. Other plants never grow flowers at all! Let's learn the difference.</p>
            <p><strong>Flowering Plants:</strong></p>
            <ul>
                <li>Plants that grow flowers</li>
                <li>Flowers turn into fruits and seeds</li>
                <li>Examples: roses, sunflowers, apple trees, tomato plants, grasses</li>
            </ul>
            <p><strong>Non-Flowering Plants:</strong></p>
            <ul>
                <li>Plants that never grow flowers</li>
                <li>They make seeds in other ways or use spores</li>
                <li>Examples: ferns, mosses, pine trees (make cones instead of flowers), mushrooms (fungi)</li>
            </ul>
            <p><strong>How can you tell?</strong></p>
            <ul>
                <li>Look for colorful petals = flowering plant</li>
                <li>No flowers = non-flowering plant</li>
                <li>Pine trees have cones, not flowers</li>
                <li>Ferns have curly leaves but no flowers</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rose"></i> Flowers Everywhere!</div>
                <p>An apple tree is a flowering plant. In spring, it has pretty white or pink flowers. Later, those flowers turn into apples!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> No Flowers Here</div>
                <p>A pine tree never grows flowers. Instead, it grows cones. The cones hold the tree's seeds. That's why we call them conifers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Ferns Are Special</div>
                <p>Ferns are very old plants. They lived when dinosaurs were alive! Ferns don't grow flowers. They make tiny dust-like particles called spores.</p>
            </div>
        `,
        taskInstructions: "Sort plants into flowering and non-flowering groups using a T-chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Flowering or Non-Flowering?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Cut and paste (or draw) plants in the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Flowering Plants</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Non-Flowering Plants</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    🌻 Rose<br>
                                    🌸 Tulip<br>
                                    🍎 Apple tree<br>
                                    🌽 Corn plant
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    🌲 Pine tree<br>
                                    🍄 Mushroom<br>
                                    🌿 Fern<br>
                                    Moss
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle "Yes" if the plant has flowers or "No" if it does not:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🌻 Sunflower &nbsp;&nbsp;&nbsp; Yes / No</div>
                        <div>🌲 Pine tree &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes / No</div>
                        <div>🌿 Fern &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes / No</div>
                        <div>🍎 Apple tree &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes / No</div>
                        <div>🌽 Corn plant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yes / No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw a Flowering Plant</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a flowering plant and color its flowers:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Non-Flowering Plant</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a non-flowering plant (like a fern or pine tree):
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Find one flowering plant and one non-flowering plant in your neighborhood. Draw each one and show your family the difference.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Animals",
        subtopic: "Identifying Animals and Their Habitats",
        lessonContent: `
            <p>Today we'll explore the wonderful world of animals and discover where they live!</p>
            <p><strong>Key Question:</strong> Where do different animals live and why?</p>
            <p><strong>Introduction:</strong> Animals are living things that move, eat, and breathe. They live in different places called habitats. A habitat gives an animal food, water, shelter, and space to live.</p>
            <p><strong>Common Animals and Their Habitats:</strong></p>
            <ul>
                <li><strong>Bird:</strong> Lives in nests in trees or on buildings</li>
                <li><strong>Fish:</strong> Lives in water (rivers, lakes, oceans)</li>
                <li><strong>Dog:</strong> Lives with people (domestic/homes)</li>
                <li><strong>Cat:</strong> Lives with people or in barns</li>
                <li><strong>Cow:</strong> Lives on farms (grasslands)</li>
                <li><strong>Rabbit:</strong> Lives in burrows underground</li>
                <li><strong>Frog:</strong> Lives near water (ponds, streams)</li>
                <li><strong>Insect:</strong> Lives in soil, trees, or grass</li>
            </ul>
            <p><strong>What do all animals need?</strong></p>
            <ul>
                <li>Food to eat</li>
                <li>Water to drink</li>
                <li>Shelter to be safe</li>
                <li>Space to move and grow</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Animal Homes</div>
                <p>A bird builds a nest in a tree to keep its eggs safe. A fish lives in water because it breathes using gills. A rabbit digs a burrow to hide from predators!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tractor"></i> Farm Animals</div>
                <p>Cows, pigs, and chickens live on farms. People give them food, water, and shelter. These animals give us milk, meat, and eggs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw"></i> Pets at Home</div>
                <p>Dogs and cats live with people in their homes. They are called pets or domestic animals. They depend on people for food and care.</p>
            </div>
        `,
        taskInstructions: "Match animals to their habitats and draw an animal in its home.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Animal to Its Habitat</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line connecting each animal to where it lives:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>🐟 Fish &nbsp;&nbsp;&nbsp; → &nbsp;&nbsp;&nbsp; ___________</div>
                                <div>🐦 Bird &nbsp;&nbsp;&nbsp; → &nbsp;&nbsp;&nbsp; ___________</div>
                                <div>🐄 Cow &nbsp;&nbsp;&nbsp; → &nbsp;&nbsp;&nbsp; ___________</div>
                                <div>🐇 Rabbit &nbsp; → &nbsp;&nbsp;&nbsp; ___________</div>
                                <div>🐸 Frog &nbsp;&nbsp;&nbsp; → &nbsp;&nbsp;&nbsp; ___________</div>
                            </div>
                            <div>
                                <div>🏠 House</div>
                                <div>🌾 Farm</div>
                                <div>🌳 Nest in tree</div>
                                <div>💧 Water/Pond</div>
                                <div>🕳️ Underground burrow</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw an Animal in Its Habitat</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose an animal. Draw it living in its home (habitat):
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">My animal is a: _________</div>
                    <div>It lives in a: _________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What Do Animals Need?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the things all animals need:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🍎 Food &nbsp;&nbsp;&nbsp; 💧 Water &nbsp;&nbsp;&nbsp; 🏠 Shelter &nbsp;&nbsp;&nbsp; 📺 TV</div>
                        <div>🌱 Space &nbsp;&nbsp;&nbsp; 🎮 Video games &nbsp;&nbsp;&nbsp; 🚲 Bicycle</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Name That Animal</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write the name of each animal:
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 20px;">
                        <div>🐮 ______</div>
                        <div>🐟 ______</div>
                        <div>🐦 ______</div>
                        <div>🐸 ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Draw an animal you saw today. Write or draw where it lives. Does it live in a tree, in water, in the ground, or with people?",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Animals",
        subtopic: "Vertebrates and Invertebrates",
        lessonContent: `
            <p>Today we'll learn how to sort animals into two big groups: those with backbones and those without!</p>
            <p><strong>Key Question:</strong> Do all animals have a backbone?</p>
            <p><strong>Introduction:</strong> Animals can be grouped by whether they have a backbone (spine) inside their body. Let's learn the difference!</p>
            <p><strong>Vertebrates - Animals WITH a Backbone:</strong></p>
            <ul>
                <li>Have a spine (backbone) inside their body</li>
                <li>Most vertebrates have a skeleton inside</li>
                <li>Examples: fish, frogs, birds, dogs, cats, cows, humans</li>
                <li>The word "vertebrate" comes from "vertebra" (the bones in your spine)</li>
            </ul>
            <p><strong>Invertebrates - Animals WITHOUT a Backbone:</strong></p>
            <ul>
                <li>Do NOT have a backbone or internal skeleton</li>
                <li>Many have shells or hard outer coverings</li>
                <li>Examples: insects (ants, butterflies, beetles), spiders, worms, snails, jellyfish</li>
                <li>Most animals on Earth are invertebrates!</li>
            </ul>
            <p><strong>How can you tell?</strong></p>
            <ul>
                <li>Feel your own back - you can feel your backbone!</li>
                <li>Pet a dog or cat - you can feel the bones in its back</li>
                <li>Look at a worm - it's soft and wiggly with no bones</li>
                <li>Look at a snail - it has a shell but no backbone inside</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Vertebrate Examples</div>
                <p>You are a vertebrate! So are dogs, cats, birds, fish, frogs, and cows. Feel your back - those bumps are your backbone!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bug"></i> Invertebrate Examples</div>
                <p>Ants, butterflies, worms, snails, and spiders are all invertebrates. They don't have backbones. Their bodies are supported in other ways.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-bar"></i> Which Group Has More?</div>
                <p>Did you know? 97% of all animals on Earth are invertebrates! That means only 3% of animals have backbones. Insects are the largest group of invertebrates.</p>
            </div>
        `,
        taskInstructions: "Sort animals into vertebrates and invertebrates using a T-chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vertebrate or Invertebrate?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these animals into the correct column:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Vertebrates (Have Backbone)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Invertebrates (No Backbone)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;"></td>
                            </tr>
                        </table>
                        <div style="margin-top: 10px; display: flex; gap: 15px; flex-wrap: wrap; justify-content: center;">
                            <span>🐕 Dog</span> <span>🐜 Ant</span> <span>🐦 Bird</span> <span>🐟 Fish</span>
                            <span>🐌 Snail</span> <span>🐸 Frog</span> <span>🐝 Bee</span> <span>🐄 Cow</span>
                            <span>🪱 Worm</span> <span>🐱 Cat</span> <span>🕷️ Spider</span> <span>🐒 Monkey</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Vertebrates</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle all the animals that have a backbone (vertebrates):
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 15px; flex-wrap: wrap;">
                        <div>🐕 Dog</div>
                        <div>🐜 Ant</div>
                        <div>🐦 Bird</div>
                        <div>🪱 Worm</div>
                        <div>🐟 Fish</div>
                        <div>🐌 Snail</div>
                        <div>🐱 Cat</div>
                        <div>🕷️ Spider</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Circle the Invertebrates</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle all the animals that do NOT have a backbone (invertebrates):
                    <div style="margin-left: 20px; margin-top: 10px; display: flex; gap: 15px; flex-wrap: wrap;">
                        <div>🐸 Frog</div>
                        <div>🐝 Bee</div>
                        <div>🐄 Cow</div>
                        <div>🪱 Worm</div>
                        <div>🐒 Monkey</div>
                        <div>🐜 Ant</div>
                        <div>🐟 Fish</div>
                        <div>🐌 Snail</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw one vertebrate animal and one invertebrate animal:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Vertebrate (has backbone)</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Invertebrate (no backbone)</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: About You!</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Are you a vertebrate or an invertebrate? How do you know?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find two small animals in your yard or garden (like an ant, worm, or beetle). Are they vertebrates or invertebrates? Draw one and tell your family why.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek7);
    console.log("grade1-mathscience-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek7);
    console.log("grade1-mathscience-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek7',
        metadata: grade1MathScienceWeek7.metadata,
        days: grade1MathScienceWeek7
    });
    console.log("grade1-mathscience-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek7 = grade1MathScienceWeek7;
console.log("grade1-mathscience-week7.js loaded and registered successfully");