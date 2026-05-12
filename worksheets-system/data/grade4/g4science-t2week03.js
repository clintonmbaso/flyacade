// Grade 4 Science - Term 2 Week 3 Data
const grade4ScienceWeek3 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 3,
        title: "Invertebrates in Their Environment",
        description: "Exploring where invertebrates live, their survival structures, and identifying pests vs. parasites"
    },
    
    monday: {
        subject: "Science",
        topic: "Invertebrates",
        subtopic: "Habitat Hunters - Where Invertebrates Live",
        lessonContent: `
            <p>Welcome back, habitat explorers! Today we'll discover where different invertebrates live in our local environment and why they choose specific homes.</p>
            <p><strong>Key Question:</strong> Would you find a snail in the same place you find a butterfly? Why not?</p>
            <p><strong>Review of Invertebrate Groups:</strong></p>
            <ul>
                <li><strong>Insects:</strong> Bees, butterflies, ants, grasshoppers (6 legs, 3 body parts)</li>
                <li><strong>Worms:</strong> Earthworms, caterpillars (soft, segmented bodies)</li>
                <li><strong>Spiders:</strong> Web-builders, hunters (8 legs, 2 body parts)</li>
                <li><strong>Snails & Slugs:</strong> Slow movers with or without shells</li>
            </ul>
            <p><strong>Local Micro-Habitats:</strong></p>
            <ol>
                <li><strong>Damp Soil:</strong> Dark, moist, cool - perfect for earthworms</li>
                <li><strong>Flower Petals & Plants:</strong> Colorful, sweet nectar - attracts bees and butterflies</li>
                <li><strong>Dark Corners:</strong> Quiet, undisturbed - ideal for spider webs</li>
                <li><strong>Tree Bark:</strong> Rough, hidden - home to ants and beetles</li>
            </ol>
            <p><strong>Why Habitat Matters:</strong> Every invertebrate needs the right home to survive. Moving them to the wrong habitat (like putting a worm in hot sun) can be dangerous or deadly!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Earthworm Needs</div>
                <p>Earthworms breathe through their skin! Their skin must stay moist, which is why they live in damp soil. In hot, dry sun, they would dry out and die.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Bee's Flower Home</div>
                <p>Bees need flowers for nectar (food) and pollen (to feed their babies). Without flowers, bees cannot survive in an area.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-spider"></i> Spider's Web Spot</div>
                <p>Spiders build webs in quiet corners where insects fly. A web in a windy, busy place would get destroyed quickly!</p>
            </div>
        `,
        taskInstructions: "Match invertebrates to their habitats and complete a field observation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Habitat Matching Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw lines to match each invertebrate to its correct habitat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Earthworm</div>
                                <div>• Bee</div>
                                <div>• Spider</div>
                                <div>• Snail</div>
                                <div>• Ant</div>
                            </div>
                            <div>
                                <div>→ Damp soil (moist, cool)</div>
                                <div>→ Flowers (nectar, pollen)</div>
                                <div>→ Dark corner (for webs)</div>
                                <div>→ Under leaves (moist, hidden)</div>
                                <div>→ Tree bark or soil tunnels</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Field Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Go outside and find one invertebrate home. Draw and label:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What invertebrate lives there? Why do you think it chose this home?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Think Like a Scientist</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What would happen to an earthworm if you put it on hot, dry concrete? Explain why.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Name two things a bee needs in its habitat to survive.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look for three different invertebrates in your garden or neighborhood. For each one, describe where you found it and why that habitat is good for it.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Invertebrates",
        subtopic: "Tools for Survival - Structure & Function",
        lessonContent: `
            <p>Today we'll examine the amazing physical parts (structures) that help invertebrates eat, move, and survive!</p>
            <p><strong>Key Question:</strong> How do different body parts help invertebrates survive in their habitats?</p>
            <p><strong>What is "Structure and Function"?</strong></p>
            <ul>
                <li><strong>Structure:</strong> A body part (like wings, shell, or legs)</li>
                <li><strong>Function:</strong> What that body part does (like flying, protecting, or moving)</li>
                <li>Every structure has a function that helps the animal survive!</li>
            </ul>
            <p><strong>Invertebrate Tools for Survival:</strong></p>
            <ol>
                <li><strong>Wings (Insects like bees, butterflies, flies):</strong> For flying fast to find food, escape predators, and find mates</li>
                <li><strong>Hard Shell (Snails, clams, beetles):</strong> For protection against predators and preventing drying out</li>
                <li><strong>Multiple Legs (Spiders have 8, insects have 6):</strong> For climbing, walking, and feeling vibrations</li>
                <li><strong>Soft, Segmented Body (Earthworms, caterpillars):</strong> For pushing through tight spaces in soil or plants</li>
                <li><strong>Antennae (Insects, snails):</strong> For feeling, smelling, and sensing the environment</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fighter-jet"></i> Wings = Airplanes</div>
                <p>A butterfly's wings are like tiny airplanes! They help it fly from flower to flower to find nectar. Some insects can fly up to 30 km per hour!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-helmet-battle"></i> Shell = Armor</div>
                <p>A snail's shell is like a suit of armor. When danger comes, the snail pulls inside its hard shell for protection. Birds cannot crack it open easily!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Segmented Body = Tunnel Machine</div>
                <p>An earthworm's body is made of ring-like segments. Each segment has tiny bristles that help the worm push through soil and move like an accordion!</p>
            </div>
        `,
        taskInstructions: "Match body parts to their functions and complete a structure analysis.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Function Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each structure to its function:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Wings</div>
                                <div>• Hard Shell</div>
                                <div>• 8 Legs (Spider)</div>
                                <div>• Segmented Body</div>
                                <div>• Antennae</div>
                            </div>
                            <div>
                                <div>→ Protection from predators</div>
                                <div>→ Flying to find food</div>
                                <div>→ Sensing the environment</div>
                                <div>→ Pushing through soil</div>
                                <div>→ Climbing and feeling vibrations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: "I Have [Part] So That I Can [Action]"</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these sentences for each animal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. "I have a hard shell so that I can _________."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">B. "I have wings so that I can _________."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div style="margin-top: 10px;">C. "I have a segmented body so that I can _________."</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Choose one invertebrate. Draw it and label 3 body parts that help it survive:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> For each part you labeled, explain what it does:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Guess the Part Game</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Read the description and write the body part:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>"I use this to fly to flowers." → _________</div>
                        <div>"I pull inside this when danger comes." → _________</div>
                        <div>"I use these to feel vibrations in my web." → _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a picture of an invertebrate (or observe one outside). Write 3 sentences: 'I have [body part] so that I can [function].'",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Invertebrates",
        subtopic: "Pests and Parasites - The Trouble Makers",
        lessonContent: `
            <p>Today we'll learn about some invertebrates that cause problems for humans, our food, and our animals!</p>
            <p><strong>Key Question:</strong> What is the difference between a pest and a parasite?</p>
            <p><strong>Unwanted Guests:</strong> Some invertebrates are helpful, but others are "troublemakers" that we call pests or parasites.</p>
            <p><strong>Pests:</strong> Invertebrates that destroy our things, food, or property</p>
            <ul>
                <li><strong>Termites:</strong> Eat wood and can damage houses and furniture</li>
                <li><strong>Locusts:</strong> Swarm and eat entire fields of crops (farmers' food!)</li>
                <li><strong>Cockroaches:</strong> Live in homes, spread germs, and contaminate food</li>
                <li><strong>Ants:</strong> Can get into stored food and sugar containers</li>
            </ul>
            <p><strong>Parasites:</strong> Invertebrates that live on or inside another living thing (called the host) to get food, causing harm to the host</p>
            <ul>
                <li><strong>Ticks:</strong> Attach to dogs, cats, or humans and suck blood; can spread diseases</li>
                <li><strong>Mosquitoes:</strong> Bite humans and animals to suck blood; can spread malaria and other diseases</li>
                <li><strong>Fleas:</strong> Live on pets (dogs, cats) and bite them; cause itching and discomfort</li>
                <li><strong>Tapeworms:</strong> Live inside animals' intestines and steal nutrients</li>
            </ul>
            <p><strong>Special Mouthparts:</strong> Many parasites have special "biting" or "sucking" mouthparts to get blood or food from their host.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Pest Problem - Termites</div>
                <p>A single termite colony can eat 1 kilogram of wood per day! That's why termites are pests - they destroy wooden houses, fences, and furniture.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Parasite Problem - Ticks</div>
                <p>Ticks attach to dogs and drink their blood. One tick can drink 200 times its own body weight in blood! They also spread diseases like Lyme disease.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mosquito"></i> Mosquito Mouthparts</div>
                <p>A mosquito doesn't have teeth! Instead, it has a special needle-like mouthpart called a proboscis that pierces skin like a tiny straw to suck blood.</p>
            </div>
        `,
        taskInstructions: "Sort invertebrates into pests and parasites, and identify troublemakers.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pest vs. Parasite T-Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these troublemakers into the correct columns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <p><em>Word Bank: Termites, Mosquitoes, Locusts, Ticks, Cockroaches, Fleas</em></p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Pests (Destroy food/property)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Parasites (Live on/inside host)</th>
                             </tr>
                             <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Troublemaker</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each scenario and identify if it's a pest or parasite, and name the invertebrate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> "My wooden fence has holes and is crumbling. I saw small white insects eating the wood."</div>
                        <div>Type: _________  Name: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> "My dog keeps scratching and biting his fur. I found small brown bugs attached to his skin."</div>
                        <div>Type: _________  Name: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 3:</strong> "A swarm of insects ate all the leaves in our vegetable garden. Now we have no food to harvest."</div>
                        <div>Type: _________  Name: _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Prevention and Control</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List two ways to prevent pests in your home:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> List two ways to protect pets from parasites like ticks and fleas:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing a Parasite</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a mosquito or tick. Label its mouthparts and explain how it feeds:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why do you think it's important to control pests and parasites? Give one reason.
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home or garden. Name one pest you have seen. Describe what problem it causes and one way to control it safely.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek3);
    console.log("grade4-science-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek3);
    console.log("grade4-science-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek3',
        metadata: grade4ScienceWeek3.metadata,
        days: grade4ScienceWeek3
    });
    console.log("grade4-science-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek3 = grade4ScienceWeek3;
console.log("grade4-science-week3.js loaded and registered successfully");