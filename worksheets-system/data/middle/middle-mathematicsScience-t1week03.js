// Grade Middle - Term 1 Week 3 Data
const gradeMiddleWeek3 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 1,
        week: 3,
        title: "Places Where Living Things Are Found",
        description: "Exploring habitats of land animals, water animals, and plants - matching creatures to their homes"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Habitats",
        subtopic: "Where Animals Live - Land Animals and Domestic Spaces",
        lessonContent: `
            <p>Welcome to our exploration of animal habitats! Today we'll discover where land animals live, including wild spaces and our own homes.</p>
            <p><strong>Key Question:</strong> Where do different land animals make their homes?</p>
            <p><strong>Introduction:</strong> A <strong>habitat</strong> is the natural home or environment where a living thing lives. Different animals need different things to survive - food, water, shelter, and space.</p>
            <p><strong>Land Animal Habitats:</strong></p>
            <ol>
                <li><strong>Forests:</strong> Deer, bears, squirrels, wolves, rabbits</li>
                <li><strong>Grasslands:</strong> Lions, zebras, elephants, giraffes</li>
                <li><strong>Deserts:</strong> Camels, snakes, lizards, scorpions</li>
                <li><strong>Mountains:</strong> Goats, eagles, yaks, snow leopards</li>
            </ol>
            <p><strong>Domestic Spaces (Animals Near People):</strong></p>
            <ul>
                <li><strong>Homes:</strong> Dogs, cats, hamsters, birds (pets)</li>
                <li><strong>Farms:</strong> Cows, chickens, pigs, horses, sheep, goats</li>
                <li><strong>Gardens/Yards:</strong> Ants, worms, butterflies, snails, birds</li>
                <li><strong>City streets:</strong> Rats, pigeons, squirrels, raccoons</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> My Home, Their Home</div>
                <p>Your house is a habitat too! If you have a pet dog or cat, your home is their habitat. Ants might live in your garden, and spiders might live in corners!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Forest Layers</div>
                <p>In a forest, different animals live at different heights. Birds live in treetops, squirrels live in tree trunks, and rabbits live on the ground!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tent"></i> Desert Adaptations</div>
                <p>Camels have humps that store fat for energy when food is scarce. They can go days without water - perfect for desert life!</p>
            </div>
        `,
        taskInstructions: "Identify and draw animals in their land habitats.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Animal to Its Habitat</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each animal to where it lives:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <div>• Camel</div>
                            <div>• Squirrel</div>
                            <div>• Cow</div>
                            <div>• Dog</div>
                            <div>• Deer</div>
                        </div>
                        <div>
                            <div>→ Forest</div>
                            <div>→ Desert</div>
                            <div>→ Farm</div>
                            <div>→ Home (pet)</div>
                            <div>→ Forest</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one land animal in its natural habitat. Show what makes its home special:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Domestic Animals</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List three animals that live on a farm and three animals that live in or near human homes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Farm animals: _________, _________, _________</div>
                        <div style="margin-top: 5px;">Animals near homes: _________, _________, _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What does every animal need in its habitat to survive?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Observe your home or yard for 10 minutes. Write down or draw any animals you see (insects, birds, pets). Where were they living?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Habitats",
        subtopic: "Water Habitats - Fish and Animals That Survive in Water",
        lessonContent: `
            <p>Today we'll dive into water habitats! From oceans to ponds, let's discover the amazing animals that live in water.</p>
            <p><strong>Key Question:</strong> How do animals survive in water habitats?</p>
            <p><strong>Introduction:</strong> Water covers about 71% of Earth's surface. Many animals spend their entire lives in water - they breathe, eat, sleep, and reproduce there!</p>
            <p><strong>Types of Water Habitats:</strong></p>
            <ol>
                <li><strong>Oceans (Saltwater):</strong>
                    <ul>
                        <li>Animals: Fish (sharks, clownfish, tuna), whales, dolphins, octopus, jellyfish, sea turtles, crabs, lobsters</li>
                        <li>Features: Salt water, very large, deep, different zones</li>
                    </ul>
                </li>
                <li><strong>Rivers and Streams (Freshwater, moving):</strong>
                    <ul>
                        <li>Animals: Trout, salmon, otters, frogs, crayfish, catfish</li>
                        <li>Features: Fresh water, flowing, often shallow</li>
                    </ul>
                </li>
                <li><strong>Ponds and Lakes (Freshwater, still):</strong>
                    <ul>
                        <li>Animals: Ducks, turtles, frogs, snakes, dragonflies, perch, bass</li>
                        <li>Features: Fresh water, still or slow-moving</li>
                    </ul>
                </li>
                <li><strong>Swamps and Marshes (Wetlands):</strong>
                    <ul>
                        <li>Animals: Alligators, beavers, herons, frogs, mosquitoes, turtles</li>
                        <li>Features: Mix of water and land, very wet soil</li>
                    </ul>
                </li>
            </ol>
            <p><strong>How Water Animals Survive:</strong></p>
            <ul>
                <li>Gills to breathe underwater (fish, crabs, some insects)</li>
                <li>Fins and flippers to swim (fish, whales, turtles)</li>
                <li>Streamlined bodies to move easily through water</li>
                <li>Some come to surface to breathe air (whales, dolphins, turtles)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> How Fish Breathe</div>
                <p>Fish have gills that take oxygen from water. Water goes in through the mouth, passes over the gills, and oxygen enters their blood - just like our lungs take oxygen from air!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Fresh vs. Salt Water</div>
                <p>Most fish can only live in one type of water. A saltwater fish would get sick in fresh water because its body is designed for salt! Salmon are special - they can live in both!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Amphibians</div>
                <p>Frogs and toads are amphibians - they start life in water with gills, then grow lungs and live on land as adults! But they still need to stay near water.</p>
            </div>
        `,
        taskInstructions: "Identify water animals and their specific water habitats.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Water Animal Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> For each water habitat, name two animals that live there:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Ocean: _________ and _________</div>
                        <div>River: _________ and _________</div>
                        <div>Pond: _________ and _________</div>
                        <div>Swamp: _________ and _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Water Habitat Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a water habitat (ocean, pond, river, or swamp). Include at least three animals that live there:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare Habitats</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How is an ocean different from a pond? How are they the same?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Adaptation Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why do fish have gills instead of lungs like humans?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a body of water near your home (or a picture of one). Draw three animals that might live there and label your drawing.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Habitats",
        subtopic: "Where Plants Grow - Observing Soil Types and Garden Plants",
        lessonContent: `
            <p>Today we'll explore where plants grow! Plants need specific conditions to survive - just like animals do.</p>
            <p><strong>Key Question:</strong> What do plants need to grow, and where can they grow?</p>
            <p><strong>Introduction:</strong> Plants are living things too! They need sunlight, water, air, nutrients (food from soil), and space to grow.</p>
            <p><strong>Where Plants Grow:</strong></p>
            <ol>
                <li><strong>Gardens:</strong> Vegetables (tomatoes, carrots, lettuce), flowers (roses, sunflowers), herbs (basil, mint)</li>
                <li><strong>Forests:</strong> Trees (oak, maple, pine), ferns, mosses, mushrooms (fungi), wild berries</li>
                <li><strong>Grasslands:</strong> Grasses, wildflowers, small bushes</li>
                <li><strong>Deserts:</strong> Cacti, succulents, desert shrubs (plants that store water)</li>
                <li><strong>Water (Ponds/Lakes):</strong> Water lilies, algae, cattails, lotus</li>
                <li><strong>Mountains:</strong> Mosses, small wildflowers, hardy bushes</li>
            </ol>
            <p><strong>Soil Types:</strong></p>
            <ul>
                <li><strong>Sandy Soil:</strong> Drains quickly, warm, good for carrots and potatoes</li>
                <li><strong>Clay Soil:</strong> Holds water, heavy, good for cabbage and broccoli</li>
                <li><strong>Loamy Soil:</strong> Best for most plants - mixture of sand, silt, and clay</li>
                <li><strong>Potting Soil:</strong> Used in pots and gardens, has nutrients added</li>
            </ul>
            <p><strong>Garden Observation:</strong> Different plants grow best in different conditions. Some like sun, some like shade. Some need lots of water, some need very little.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> What Plants Need</div>
                <p>Plants make their own food using sunlight (photosynthesis)! They need water, air, and soil nutrients too. That's why a seed won't grow in a dark closet.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Garden Helpers</div>
                <p>Worms are great for gardens! They eat dead leaves and turn them into rich soil that helps plants grow strong. Worms also dig tunnels that let air and water reach plant roots.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Water Plants</div>
                <p>Water lilies have special air pockets in their leaves and stems that help them float. Their roots are underwater, but their flowers bloom above the surface!</p>
            </div>
        `,
        taskInstructions: "Observe soil types and plants in a garden or picture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plant Habitat Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each plant to where it grows best:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <div>• Cactus</div>
                            <div>• Water lily</div>
                            <div>• Pine tree</div>
                            <div>• Tomato plant</div>
                            <div>• Grass</div>
                        </div>
                        <div>
                            <div>→ Pond</div>
                            <div>→ Garden</div>
                            <div>→ Desert</div>
                            <div>→ Forest</div>
                            <div>→ Grassland</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Garden Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> If you have a garden or potted plant nearby, observe it. If not, use the picture your teacher shows:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What plant did you observe? _________</div>
                        <div>What color are its leaves? _________</div>
                        <div>Does it have flowers or fruits? _________</div>
                        <div>What does the soil look/feel like? _________</div>
                    </div>
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Plant Needs</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List four things every plant needs to grow:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why can't a cactus grow in a pond? Why can't a water lily grow in a desert?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a plant in your home or neighborhood. Draw it and write down what you think it needs to stay healthy (water, sun, soil type).",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Habitats",
        subtopic: "Matching Habitats - Animal Cards to Home Locations",
        lessonContent: `
            <p>Today we'll practice matching animals to their correct habitats! Can you figure out where each creature belongs?</p>
            <p><strong>Key Question:</strong> How do you know which habitat is right for each animal?</p>
            <p><strong>Introduction:</strong> Every animal has a home where it can find food, water, shelter, and space. Today we'll become habitat detectives!</p>
            <p><strong>Review - Animal Habitats:</strong></p>
            <ul>
                <li><strong>Land habitats:</strong> Forests, grasslands, deserts, mountains, farms, homes</li>
                <li><strong>Water habitats:</strong> Oceans, rivers, ponds, swamps</li>
                <li><strong>Plant habitats:</strong> Gardens, forests, grasslands, deserts, water</li>
            </ul>
            <p><strong>Clues to Find the Right Habitat:</strong></p>
            <ol>
                <li>What does the animal eat? (Where can it find that food?)</li>
                <li>What kind of body does it have? (Fins for water? Legs for land?)</li>
                <li>What weather does it like? (Hot? Cold? Wet? Dry?)</li>
                <li>Does it need to hide from predators? (Where can it hide?)</li>
            </ol>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>A polar bear has thick fur and eats seals - it belongs in the ARCTIC (cold, icy habitat)</li>
                <li>A fish has gills and fins - it belongs in WATER (ocean, river, or pond)</li>
                <li>A cow eats grass - it belongs on a GRASSLAND or FARM</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-puzzle-piece"></i> Detective Work</div>
                <p>If you see an animal with webbed feet, it probably lives near water (like a duck or frog). If you see sharp claws, it might be a predator that climbs trees (like a squirrel or cat)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marked-alt"></i> Wrong Home</div>
                <p>What would happen if you put a fish in a desert? It would die because it needs water to breathe and move. Every animal belongs in its special habitat!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Domestic Animals</div>
                <p>Some animals (like dogs and cats) can live with humans because we give them food, water, and shelter. In the wild, their ancestors lived in forests or grasslands!</p>
            </div>
        `,
        taskInstructions: "Match animal cards to their correct habitats using clues.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Animal-Habitat Matching Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line connecting each animal to its correct habitat:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <div>🐫 Camel → _________</div>
                            <div>🐟 Goldfish → _________</div>
                            <div>🐄 Cow → _________</div>
                            <div>🐧 Penguin → _________</div>
                            <div>🐘 Elephant → _________</div>
                            <div>🐸 Frog → _________</div>
                            <div>🦜 Parrot → _________</div>
                            <div>🐕 Dog → _________</div>
                        </div>
                        <div>
                            <div>🌵 Desert</div>
                            <div>🏠 Human home</div>
                            <div>🌾 Grassland</div>
                            <div>❄️ Arctic/Ice</div>
                            <div>🌴 Rainforest</div>
                            <div>💧 Pond</div>
                            <div>🏝️ Ocean</div>
                            <div>🌳 Forest</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own Matching Cards</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw two animals and their habitats on the cards below. Then have a friend match them!
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Animal Card 1</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Animal: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Habitat Card 1</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Habitat: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Animal Card 2</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Animal: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Habitat Card 2</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc;"></div>
                            <span style="font-size: 12px;">Habitat: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Habitat Clues</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the clue and name the habitat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Clue 1: "It's very hot and dry. Camels live here." → _________</div>
                        <div>Clue 2: "It's salty and very large. Whales live here." → _________</div>
                        <div>Clue 3: "It has many trees. Squirrels and deer live here." → _________</div>
                        <div>Clue 4: "It's a small body of still water. Frogs and ducks live here." → _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important for an animal to live in the right habitat?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create three animal-habitat matching pairs on index cards or paper. Bring them to share with a friend tomorrow.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Habitats",
        subtopic: "Creative Play - Drawing or Mimicking Animals in Their Habitats",
        lessonContent: `
            <p>Today we'll have fun with creative play! We'll draw animals in their homes and even act like them!</p>
            <p><strong>Key Question:</strong> How can we show what we've learned about habitats creatively?</p>
            <p><strong>Introduction:</strong> Scientists study animals by observing them in their natural habitats. Today we'll become scientists and artists - showing what we know through drawing and movement!</p>
            <p><strong>Week 3 Review - What We Learned:</strong></p>
            <ol>
                <li><strong>Monday:</strong> Land animals - forests, grasslands, deserts, mountains, farms, and homes</li>
                <li><strong>Tuesday:</strong> Water animals - oceans, rivers, ponds, and swamps</li>
                <li><strong>Wednesday:</strong> Plants - where they grow and what they need</li>
                <li><strong>Thursday:</strong> Matching animals to the right habitats</li>
            </ol>
            <p><strong>Today's Activities:</strong></p>
            <ul>
                <li><strong>Draw & Create:</strong> Draw an animal in its habitat, showing what makes that home special</li>
                <li><strong>Mimic & Move:</strong> Act like an animal in its habitat - how does it move? What does it do?</li>
                <li><strong>Share & Explain:</strong> Tell the class about your animal and why it belongs in that habitat</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-draw-polygon"></i> Drawing Ideas</div>
                <p>Draw a monkey swinging through rainforest trees! Draw a fish swimming in coral reefs! Draw a camel walking across hot desert sand! Show the animal doing something special for its home.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-child"></i> Mimic Game Ideas</div>
                <p>• Hop like a frog near a pond!<br>• Swim like a fish in the ocean!<br>• Climb like a monkey in the rainforest!<br>• Slither like a snake in the desert!<br>• Fly like a bird in the forest!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Share Your Work</div>
                <p>When you share, tell us: "This is a [animal]. It lives in [habitat]. It needs [food, water, shelter] to survive. One interesting thing about this animal is..."</p>
            </div>
        `,
        taskInstructions: "Draw an animal in its habitat and/or act out animal movements.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Habitat Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Choose an animal and draw it in its natural habitat. Include:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>✓ The animal itself</div>
                        <div>✓ Its habitat features (trees, water, sand, ice, etc.)</div>
                        <div>✓ What the animal might eat in that habitat</div>
                        <div>✓ Where it finds shelter</div>
                    </div>
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a short paragraph about the animal you drew:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mimic Activity (Movement)</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose an animal to act out. Answer these questions about how you will move:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Animal I will act out: _________</div>
                        <div>Its habitat: _________</div>
                        <div>How does it move? (fast/slow, on ground/in water/in trees?) _________</div>
                        <div>What sounds does it make? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Week 3 Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What was your favorite thing you learned about habitats this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> If you could be any animal for a day, which animal would you be and where would you live?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw your favorite animal in its home habitat. Write 2-3 sentences telling why that habitat is perfect for the animal.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek3);
    console.log("grade-middle-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek3);
    console.log("grade-middle-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek3',
        metadata: gradeMiddleWeek3.metadata,
        days: gradeMiddleWeek3
    });
    console.log("grade-middle-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek3 = gradeMiddleWeek3;
console.log("grade-middle-week3.js loaded and registered successfully");