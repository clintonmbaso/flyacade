// Grade 1 Mathematics and Science - Week 5 Data (Classifying Plants and Animals)
const grade1MathScienceWeek5 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        week: 5,
        title: "Classifying Plants and Animals",
        description: "Learning to group plants and animals based on their features and habitats"
    },
    
    monday: {
        subject: "Science",
        topic: "Plants in Our Neighborhood",
        subtopic: "Identifying common plants in the local environment",
        lessonContent: `
            <p>Welcome to our Science lesson! Today we will learn about the different plants we see around us every day.</p>
            <p><strong>Key Concept:</strong> Plants come in different types: weeds, crops, flowers, and trees.</p>
            <p><strong>What are weeds?</strong></p>
            <ul>
                <li>Plants that grow by themselves</li>
                <li>Often found in empty spaces</li>
                <li>Sometimes we pull them out from gardens</li>
            </ul>
            <p><strong>What are trees?</strong></p>
            <ul>
                <li>Big plants with woody stems</li>
                <li>Have thick trunks and branches</li>
                <li>Provide shade and homes for animals</li>
            </ul>
            <p><strong>What are flowers?</strong></p>
            <ul>
                <li>Colorful and often small plants</li>
                <li>Make our environment beautiful</li>
                <li>Some give us fruits and seeds</li>
            </ul>
            <p><strong>What are crops?</strong></p>
            <ul>
                <li>Plants that farmers grow for food</li>
                <li>Examples: corn, rice, vegetables</li>
                <li>We eat different parts of crops</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree" style="color: #8BC34A;"></i> Tree Example</div>
                <p>"This mango tree is big and has a thick trunk. We can sit under its shade!" - Trees are woody plants.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #4CAF50;"></i> Flower Example</div>
                <p>"These sunflowers are colorful and bright. They grow in gardens and make seeds." - Flowers are often colorful.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Leaf Sorting Game!</div>
                <p>Let's play "Leaf Detective!" We'll collect different leaves and sort them into "Trees" (big/woody) and "Flowers" (colorful/small).</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice identifying different plants.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Circle the plants you might find in our neighborhood:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>☐ Mango tree</div>
                    <div>☐ Polar bear</div>
                    <div>☐ Rose flower</div>
                    <div>☐ Car (not a plant!)</div>
                    <div>☐ Grass (weed)</div>
                    <div>☐ Corn plant (crop)</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Sort these leaves into two groups. Draw lines to match:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Big, woody leaf → ☐ Flower</div>
                    <div>Small, colorful leaf → ☐ Tree</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Draw a tree and a flower side by side:
                <div style="display: flex; margin-top: 10px;">
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Tree</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                        <div style="text-align: center; font-weight: bold;">Flower</div>
                        <div class="drawing-area" style="height: 120px;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Plant Observation Walk:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>We will go outside and find:</div>
                    <div>• One weed: ________________</div>
                    <div>• One tree: ________________</div>
                    <div>• One flower: ________________</div>
                </div>
            </div>
        `,
        homework: "Find and draw two different plants near your home. Label one as 'Tree' and one as 'Flower'.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Flowering vs. Non-Flowering",
        subtopic: "Classifying plants based on whether they have flowers",
        lessonContent: `
            <p>Today we will learn about two main types of plants: those that make flowers and those that don't.</p>
            <p><strong>Key Concept:</strong> Some plants make seeds inside flowers, while others make seeds in different ways.</p>
            <p><strong>What are flowering plants?</strong></p>
            <ul>
                <li>Plants that produce flowers</li>
                <li>Flowers turn into fruits with seeds</li>
                <li>Examples: rose, sunflower, mango tree, corn</li>
            </ul>
            <p><strong>What are non-flowering plants?</strong></p>
            <ul>
                <li>Plants that do not produce flowers</li>
                <li>Make seeds in cones or spores</li>
                <li>Examples: fern, moss, pine tree</li>
            </ul>
            <p><strong>Why are flowers important?</strong></p>
            <ul>
                <li>They make seeds for new plants</li>
                <li>They are beautiful and colorful</li>
                <li>They provide food for insects and birds</li>
            </ul>
            <p><strong>Remember:</strong> Flowering plants = has flowers, Non-flowering plants = no flowers!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flower" style="color: #E91E63;"></i> Flowering Plant</div>
                <p>"This sunflower has big yellow flowers. The flowers make seeds that birds can eat." - Sunflowers are flowering plants.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf" style="color: #388E3C;"></i> Non-Flowering Plant</div>
                <p>"This fern has green leaves but no flowers. It makes tiny spores under its leaves to grow new plants." - Ferns are non-flowering.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Flower Detective Game!</div>
                <p>Let's play with picture cards! When I show a picture, shout "Flowering!" if it has flowers or "Non-flowering!" if it has no flowers.</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice classifying plants.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Picture Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the picture cards. Sort them into two piles:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Pile 1: "Has Flowers"</div>
                        <div>Pile 2: "No Flowers"</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plant Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write "Flowering" or "Non-flowering" next to each plant:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Rose: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Fern: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Moss: <span class="answer-space" style="width: 150px;"></span></div>
                        <div>Sunflower: <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one flowering plant and one non-flowering plant:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Flowering Plant</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Non-Flowering Plant</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Seed Search</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle where flowering plants make their seeds:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ In the roots</div>
                        <div>☐ In the flowers</div>
                        <div>☐ In the leaves</div>
                        <div>☐ In the soil</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Look around your home for a flowering plant. Draw it and write its name. If you can't find one, draw a rose.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Backbones and No Backbones",
        subtopic: "Grouping animals as vertebrates or invertebrates",
        lessonContent: `
            <p>Today we will learn about an important difference between animals: some have backbones and some don't!</p>
            <p><strong>Key Concept:</strong> Vertebrates are animals with backbones, invertebrates are animals without backbones.</p>
            <p><strong>What are vertebrates?</strong></p>
            <ul>
                <li>Animals with a backbone (spine)</li>
                <li>Have an internal skeleton</li>
                <li>Examples: humans, dogs, fish, birds, frogs</li>
            </ul>
            <p><strong>What are invertebrates?</strong></p>
            <ul>
                <li>Animals without a backbone</li>
                <li>May have a hard shell or no skeleton</li>
                <li>Examples: worms, insects, spiders, snails</li>
            </ul>
            <p><strong>Feel your own backbone:</strong> Run your fingers along your back. Feel the bumpy bones? That's your backbone!</p>
            <p><strong>Why are backbones important?</strong></p>
            <ul>
                <li>They help animals stand up straight</li>
                <li>They protect the spinal cord</li>
                <li>They help animals move</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog" style="color: #795548;"></i> Vertebrate Example</div>
                <p>"This dog has a backbone inside its body. It can run and jump because its skeleton supports it." - Dogs are vertebrates.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm" style="color: #FF9800;"></i> Invertebrate Example</div>
                <p>"This worm has no bones inside. Its body is soft and can bend easily." - Worms are invertebrates.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Backbone Game!</div>
                <p>Let's feel the "bumps" on our own backs. Then look at toy animals and guess: "Vertebrate or invertebrate?"</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice classifying animals.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Vertebrate or Invertebrate?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each animal picture. Write "V" for vertebrate or "I" for invertebrate:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fish: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Butterfly: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Bird: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Snail: <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Feel Your Backbone</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Feel the bumps on your back. Draw what you think your backbone looks like:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">My backbone helps me: <span class="answer-space" style="width: 200px;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Animal Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Sort the animals into two groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Vertebrates (with backbone):</strong></div>
                        <div>☐ Human ☐ Spider ☐ Fish ☐ Frog</div>
                        <div style="margin-top: 10px;"><strong>Invertebrates (no backbone):</strong></div>
                        <div>☐ Worm ☐ Cat ☐ Butterfly ☐ Snail</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Quiz</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the picture of a fish and an insect. Circle which one has a skeleton inside:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Fish</div>
                        <div>☐ Insect</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: How Animals Move</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Match the animal with how it moves:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Fish → ☐ Flies</div>
                        <div>Bird → ☐ Swims</div>
                        <div>Butterfly → ☐ Walks on legs</div>
                        <div>Dog → ☐ Flutters wings</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find three animals around your home. Draw them and write if they are vertebrates or invertebrates.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Domestic Friends",
        subtopic: "Identifying and counting domestic animals",
        lessonContent: `
            <p>Today we will learn about animals that live with humans and practice counting their body parts!</p>
            <p><strong>Key Concept:</strong> Domestic animals are animals that live with humans and are cared for by us.</p>
            <p><strong>What are domestic animals?</strong></p>
            <ul>
                <li>Animals that live with people</li>
                <li>We take care of them</li>
                <li>They help us in different ways</li>
            </ul>
            <p><strong>Types of domestic animals:</strong></p>
            <ul>
                <li><strong>Farm animals:</strong> Cows, chickens, goats, sheep</li>
                <li><strong>Pet animals:</strong> Dogs, cats, rabbits, fish</li>
            </ul>
            <p><strong>Why do domestic animals live with humans?</strong></p>
            <ul>
                <li>They give us food (milk, eggs, meat)</li>
                <li>They give us company and friendship</li>
                <li>They help with work (guarding, farming)</li>
            </ul>
            <p><strong>Math Connection:</strong> We will count legs, ears, and other body parts of domestic animals!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cow" style="color: #607D8B;"></i> Farm Animal Example</div>
                <p>"This cow gives us milk. It lives on a farm and has 4 legs. Farmers take care of cows." - Cows are domestic animals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cat" style="color: #9C27B0;"></i> Pet Example</div>
                <p>"This cat lives in a house. It has 4 legs and soft fur. People keep cats as pets for company." - Cats are domestic animals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Counting Legs Game!</div>
                <p>Let's use plastic farm animals. How many legs do 3 cows have? Let's count together: 4 + 4 + 4 = 12 legs!</p>
            </div>
        `,
        taskInstructions: "Complete the activities to learn about domestic animals and practice counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Domestic Animal Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Name two animals that live on a farm and two that live in a house:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Farm animals: ________________ and ________________</div>
                        <div>House pets: ________________ and ________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Animal Math</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count the legs on these animals:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1 cow has <span class="answer-space" style="width: 30px;"></span> legs</div>
                        <div>3 cows have <span class="answer-space" style="width: 30px;"></span> legs</div>
                        <div>1 chicken has <span class="answer-space" style="width: 30px;"></span> legs</div>
                        <div>2 chickens have <span class="answer-space" style="width: 30px;"></span> legs</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Animal Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw your favorite domestic animal. Count and label its body parts:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>My animal has: <span class="answer-space" style="width: 30px;"></span> legs, <span class="answer-space" style="width: 30px;"></span> ears, <span class="answer-space" style="width: 30px;"></span> eyes</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why We Care for Animals</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Circle the reasons why domestic animals live with humans:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ They give us food</div>
                        <div>☐ They are our friends</div>
                        <div>☐ They help with work</div>
                        <div>☐ They live in the wild forest</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Animal Sounds Match</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Match the animal with its sound:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Dog → ☐ Moo</div>
                        <div>Cow → ☐ Meow</div>
                        <div>Cat → ☐ Woof</div>
                        <div>Chicken → ☐ Cluck</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Count the legs on all the pets in your home or neighborhood. Draw a picture showing your counting.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Into the Wild",
        subtopic: "Classifying domestic vs. wild animals based on habitat",
        lessonContent: `
            <p>Today is our animal classification celebration! We'll learn about wild animals and how they're different from domestic animals.</p>
            <p><strong>Key Concept:</strong> Wild animals live in nature without human care, while domestic animals live with humans.</p>
            <p><strong>What are wild animals?</strong></p>
            <ul>
                <li>Animals that live in nature</li>
                <li>They find their own food and shelter</li>
                <li>Examples: lion, elephant, monkey, zebra</li>
            </ul>
            <p><strong>What are domestic animals?</strong></p>
            <ul>
                <li>Animals that live with humans</li>
                <li>Humans give them food and shelter</li>
                <li>Examples: dog, cow, cat, chicken</li>
            </ul>
            <p><strong>Habitats:</strong></p>
            <ul>
                <li><strong>Wild animals:</strong> Forest, jungle, desert, ocean</li>
                <li><strong>Domestic animals:</strong> Farm, home, backyard</li>
            </ul>
            <p><strong>Today's activities:</strong> We'll play sorting games to practice classifying animals as domestic or wild!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lion" style="color: #FF9800;"></i> Wild Animal Example</div>
                <p>"This lion lives in the wild forest. It hunts for its own food and doesn't live with people." - Lions are wild animals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sheep" style="color: #9E9E9E;"></i> Domestic Animal Example</div>
                <p>"This sheep lives on a farm. The farmer gives it grass to eat and keeps it safe." - Sheep are domestic animals.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Home Sorting Game!</div>
                <p>Let's play with animal cards! Place each card on the "Farm/Home" mat (domestic) or "Wild/Forest" mat (wild).</p>
            </div>
        `,
        taskInstructions: "Complete the activities to practice classifying animals as domestic or wild.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Animal Sorting Game</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Place animal cards on the correct mat:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Farm/Home Mat (Domestic):</strong> Dog, Cat, Cow, Chicken</div>
                        <div><strong>Wild/Forest Mat (Wild):</strong> Lion, Monkey, Elephant, Zebra</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Why Classification Matters</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Explain why a lion is wild and a sheep is domestic:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #FFF3E0; border-radius: 5px;">
                        <div>A lion is wild because: <span class="answer-space" style="width: 250px;"></span></div>
                        <div>A sheep is domestic because: <span class="answer-space" style="width: 250px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Habitat Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two habitats:
                    <div style="display: flex; margin-top: 10px;">
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Wild Animal Habitat</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Example: Forest</div>
                        </div>
                        <div style="flex: 1; padding: 10px;">
                            <div style="text-align: center; font-weight: bold;">Domestic Animal Habitat</div>
                            <div class="drawing-area" style="height: 120px;"></div>
                            <div style="text-align: center; margin-top: 5px;">Example: Farm</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Animal Characteristics</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write "Wild" or "Domestic" for each animal:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Goat: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Tiger: <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Rabbit (pet): <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Bear: <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Animal Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as an animal expert. Write one thing you learned about animals:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">I learned that ________________________</div>
                </div>
            </div>
        `,
        homework: "Look at picture books or nature shows. Find two wild animals and two domestic animals. Draw one of each.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek5);
    console.log("math-science-week5-classification.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek5);
    console.log("math-science-week5-classification.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek5',
        metadata: grade1MathScienceWeek5.metadata,
        days: grade1MathScienceWeek5
    });
    console.log("math-science-week5-classification.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek5 = grade1MathScienceWeek5;
console.log("math-science-week5-classification.js loaded and registered successfully");