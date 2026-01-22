// Grade 2 Mathematics and Science - Week 4 Data (Plants)
const grade2MathScienceWeek4 = {
    metadata: {
        grade: 2,
        subject: "Mathematics & Science",
        week: 4,
        title: "Discovering Plants — Parts, Life Cycle, and Importance",
        description: "Learning plant parts, their functions, life cycles, and counting/sequencing activities"
    },
    
    monday: {
        subject: "Science",
        topic: "Parts of a Plant",
        subtopic: "Identifying root, stem, leaf, flower, fruit, and seed",
        lessonContent: `
            <p>Welcome to our plant adventure! Today we will learn about the different parts that make up a plant.</p>
            <p><strong>Key Concept:</strong> Every plant has special parts that help it grow and survive.</p>
            <p><strong>Six Important Plant Parts:</strong></p>
            <ul>
                <li><strong>Root</strong> - Holds the plant in the ground and drinks water</li>
                <li><strong>Stem</strong> - Stands tall and carries water to other parts</li>
                <li><strong>Leaf</strong> - Catches sunlight to make food for the plant</li>
                <li><strong>Flower</strong> - Makes the plant beautiful and helps make seeds</li>
                <li><strong>Fruit</strong> - Protects the seeds and can be food for animals</li>
                <li><strong>Seed</strong> - A tiny baby plant waiting to grow</li>
            </ul>
            <p><strong>Today's Special Activity:</strong> We have a real plant in class! We will point to each part and say its name together.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #4CAF50;"></i> Plant Parts Example</div>
                <p>"This is the STEM - it stands up tall like a straw!" - We will point to the stem of our classroom plant.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-pointer"></i> Point and Name Game</div>
                <p>When I say "ROOT," come touch the roots of our plant. When I say "LEAF," gently touch a leaf!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Labeling Race!</div>
                <p>We'll race to see who can point to the correct plant part fastest. Ready, set, go!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to learn plant parts.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Look at the plant picture. Write the name of each part next to the arrow:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Arrow pointing to roots: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Arrow pointing to stem: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Arrow pointing to leaf: <span class="answer-space" style="width: 80px;"></span></div>
                    <div>Arrow pointing to flower: <span class="answer-space" style="width: 80px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> Draw your own plant with all six parts:
                <div class="drawing-area" style="height: 180px; margin-top: 10px;"></div>
                <div style="margin-top: 10px;">
                    <div>My plant has: ☐ Roots ☐ Stem ☐ Leaves ☐ Flower ☐ Fruit ☐ Seed</div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Play "Point and Name" with a partner:
                <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #E8F5E9; border-radius: 5px;">
                    <div><strong>Partner A:</strong> "Point to the part that drinks water!"</div>
                    <div><strong>Partner B:</strong> Points to: <span class="answer-space" style="width: 100px;"></span></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> Match the plant part to its picture:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Picture of roots → ☐ Leaf</div>
                    <div>Picture of flower → ☐ Roots</div>
                    <div>Picture of leaf → ☐ Flower</div>
                </div>
            </div>
        `,
        homework: "Find a plant at home. Draw it and label at least 3 parts you can see.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science & Mathematics",
        topic: "Jobs of Plant Parts",
        subtopic: "Understanding why each part is important and counting plant features",
        lessonContent: `
            <p>Today we will learn why each plant part is important AND practice our counting skills!</p>
            <p><strong>Key Concept:</strong> Every plant part has a special job to help the plant live.</p>
            <p><strong>What Each Part Does:</strong></p>
            <ul>
                <li><strong>Roots</strong> - Drink water from soil and hold plant down</li>
                <li><strong>Stem</strong> - Stands tall like a straw and carries water</li>
                <li><strong>Leaves</strong> - Eat sunlight to make food (photosynthesis)</li>
                <li><strong>Flowers</strong> - Make seeds for new plants</li>
            </ul>
            <p><strong>Math Integration:</strong> We will count petals, leaves, and seeds! Numbers help us understand plants better.</p>
            <p><strong>Science Question:</strong> What would happen if a plant had no roots? It would fall over and have no water!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: #2196F3;"></i> Roots Job</div>
                <p>"Roots are like straws drinking water from the ground!" - They keep the plant hydrated.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: #FF9800;"></i> Leaves Job</div>
                <p>"Leaves are like solar panels eating sunlight!" - They turn sunlight into plant food.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calculator"></i> Counting Petals</div>
                <p>This flower has 5 petals. Let's count together: 1, 2, 3, 4, 5!</p>
            </div>
        `,
        taskInstructions: "Complete the activities about plant jobs and counting.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plant Jobs Match</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match the plant part to its job:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Roots → ☐ Eats sunlight</div>
                        <div>Leaves → ☐ Drinks water</div>
                        <div>Stem → ☐ Makes seeds</div>
                        <div>Flower → ☐ Carries water up</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Counting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Count and write the numbers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Number of petals on your flower: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Number of leaves on your plant: <span class="answer-space" style="width: 50px;"></span></div>
                        <div>Number of seeds in your pod: <span class="answer-space" style="width: 50px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Plant Count</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Tally how many students found a plant with:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>More than 5 leaves: <span class="answer-space" style="width: 50px;"></span> students</div>
                        <div>Exactly 4 petals: <span class="answer-space" style="width: 50px;"></span> students</div>
                        <div>Less than 3 seeds: <span class="answer-space" style="width: 50px;"></span> students</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why Plants Need Each Part</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer the questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Which part holds the plant in the ground? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Which part eats sunlight? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a leaf outside. Count how many points it has. Bring it to class tomorrow.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Planting and Germination",
        subtopic: "Planting seeds and understanding early growth",
        lessonContent: `
            <p>Today is planting day! Each of you will plant a seed and learn about germination.</p>
            <p><strong>Key Concept:</strong> Germination is when a seed wakes up and starts to grow.</p>
            <p><strong>What is Germination?</strong></p>
            <ul>
                <li>Seeds are like sleeping baby plants</li>
                <li>When they get water, air, and warmth, they "wake up"</li>
                <li>The first thing to grow is usually a tiny root</li>
                <li>Then a shoot grows up toward the light</li>
            </ul>
            <p><strong>How to Care for Your Seed:</strong></p>
            <ul>
                <li>Water it gently - not too much, not too little</li>
                <li>Keep it warm but not too hot</li>
                <li>Give it sunlight but not direct hot sun at first</li>
                <li>Be patient - seeds need time to grow!</li>
            </ul>
            <p><strong>Today's Activity:</strong> You will each get a clear cup, some soil, and a bean seed to plant!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling" style="color: #8BC34A;"></i> Germination Example</div>
                <p>"My seed is sleeping... now I give it water and sun... it wakes up and grows!" - This is germination.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Care Instructions</div>
                <p>"Water your seed as much as a teaspoon each day - just a little drink!" - Too much water can drown the seed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Planting Game!</div>
                <p>We'll practice planting with pretend seeds first. Step 1: Make a hole. Step 2: Drop seed. Step 3: Cover gently!</p>
            </div>
        `,
        taskInstructions: "Plant your seed and complete the activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Planting Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Number the steps in correct order:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Cover seed with soil</div>
                        <div>☐ Make a small hole</div>
                        <div>☐ Water gently</div>
                        <div>☐ Place seed in hole</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: My Seed Cup</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Decorate your planting cup and label it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>My name: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Type of seed: <span class="answer-space" style="width: 120px;"></span></div>
                        <div>Planting date: <span class="answer-space" style="width: 120px;"></span></div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 5px; text-align: center; color: #666;">(Draw your decorated cup here)</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Germination Prediction</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What do you think will happen to your seed by next week?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Care Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Check what your seed needs each day:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☐ Water (just a little)</div>
                        <div>☐ Sunlight (not too hot)</div>
                        <div>☐ Warmth (room temperature)</div>
                        <div>☐ Love (check on it daily!)</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Check your seed each day. Draw what it looks like today and what you think it will look like in 3 days.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science & Mathematics",
        topic: "Plant Life Cycle",
        subtopic: "Sequencing plant stages from seed to seed",
        lessonContent: `
            <p>Today we will learn about the amazing circle of plant life!</p>
            <p><strong>Key Concept:</strong> Plants grow in a cycle that goes round and round.</p>
            <p><strong>Four Main Stages:</strong></p>
            <ol>
                <li><strong>Seed</strong> - The beginning (like your planted bean)</li>
                <li><strong>Seedling</strong> - A baby plant with first leaves</li>
                <li><strong>Adult Plant with Flowers</strong> - Grown up and making flowers</li>
                <li><strong>Adult Plant with Fruits/Seeds</strong> - Making new seeds to start again</li>
            </ol>
            <p><strong>Math Integration:</strong> We will use numbers 1-4 to sequence the stages and answer "what comes next?" questions.</p>
            <p><strong>Science Word:</strong> <em>Life Cycle</em> - The pattern of growing, reproducing, and starting over.</p>
            <p><strong>Activity:</strong> You will work with picture cards to put the plant life in correct order!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle" style="color: #009688;"></i> Life Cycle Example</div>
                <p>"Seed → Seedling → Flower → Fruit with Seeds → back to Seed!" - The cycle never ends!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sort-numeric-up"></i> Sequencing with Numbers</div>
                <p>"Stage 1 is SEED. Stage 2 is SEEDLING. What is Stage 3? That's right - FLOWER!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gamepad"></i> Card Order Game!</div>
                <p>We'll mix up plant stage cards and race to put them in correct order. Ready, set, sequence!</p>
            </div>
        `,
        taskInstructions: "Complete the sequencing and life cycle activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Stage Sequencing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put the pictures in correct order (1-4):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Picture of seedling → Number: <span class="answer-space" style="width: 30px;"></span></div>
                        <div>Picture of seed → Number: <span class="answer-space" style="width: 30px;"></span></div>
                        <div>Picture of plant with fruit → Number: <span class="answer-space" style="width: 30px;"></span></div>
                        <div>Picture of flowering plant → Number: <span class="answer-space" style="width: 30px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Comes Next?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer the sequencing questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What comes after Stage 2 (seedling)? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>What is the final stage? <span class="answer-space" style="width: 100px;"></span></div>
                        <div>Where does the cycle start again? <span class="answer-space" style="width: 100px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Life Cycle Circle</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw the plant life cycle in a circle:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>Label: Seed → <span class="answer-space" style="width: 80px;"></span> → Flower → <span class="answer-space" style="width: 80px;"></span> → Seed</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Number the Stages</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write 1, 2, 3, 4 in the correct circles below:
                    <div style="margin-left: 20px; margin-top: 10px; text-align: center;">
                        <div style="display: inline-block; margin: 5px; padding: 10px; border: 1px solid #ccc; border-radius: 50%; width: 60px; height: 60px;">Seed</div>
                        <div style="display: inline-block; margin: 5px; padding: 10px; border: 1px solid #ccc; border-radius: 50%; width: 60px; height: 60px;">Seedling</div>
                        <div style="display: inline-block; margin: 5px; padding: 10px; border: 1px solid #ccc; border-radius: 50%; width: 60px; height: 60px;">Flower</div>
                        <div style="display: inline-block; margin: 5px; padding: 10px; border: 1px solid #ccc; border-radius: 50%; width: 60px; height: 60px;">Fruit/Seed</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find something at home that comes from a plant (fruit, vegetable, wood). Draw it and write which plant stage it comes from.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science & Social Studies",
        topic: "Why We Need Plants",
        subtopic: "Understanding plant importance for humans and animals",
        lessonContent: `
            <p>Today we celebrate why plants are so important to our world!</p>
            <p><strong>Key Concept:</strong> Without plants, life on Earth would not exist as we know it.</p>
            <p><strong>Three Main Reasons We Need Plants:</strong></p>
            <ol>
                <li><strong>Oxygen</strong> - Plants make the air we breathe</li>
                <li><strong>Food</strong> - Plants give us fruits, vegetables, grains</li>
                <li><strong>Medicine & Shelter</strong> - Many medicines come from plants, and wood builds our homes</li>
            </ol>
            <p><strong>"What If?" Discussion:</strong> What would happen if all trees disappeared? No oxygen, no food, no shade!</p>
            <p><strong>Responsibility:</strong> We must care for plants because they care for us.</p>
            <p><strong>Today's Activity:</strong> Check on your planted seeds and practice gentle care. We'll also make a list of plant products we use every day!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind" style="color: #00BCD4;"></i> Oxygen Example</div>
                <p>"Plants are like Earth's lungs - they breathe out oxygen for us to breathe in!" - We need plants to breathe.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt" style="color: #E91E63;"></i> Food Example</div>
                <p>"This apple came from an apple tree! Many foods start as plants." - Fruits, vegetables, grains, nuts.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home" style="color: #795548;"></i> Shelter Example</div>
                <p>"Wood from trees builds houses, desks, and paper!" - Plants give us materials for shelter and tools.</p>
            </div>
        `,
        taskInstructions: "Complete activities about plant importance and care.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Plant Product Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List or draw three things you use or eat that come from plants:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>2. <span class="answer-space" style="width: 150px;"></span></div>
                        <div>3. <span class="answer-space" style="width: 150px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Seed Care Check</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Check your planted seed from Wednesday:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Soil feels: ☐ Dry ☐ Moist ☐ Wet</div>
                        <div>Does it need water? ☐ Yes ☐ No</div>
                        <div>Draw what it looks like today:</div>
                        <div class="drawing-area" style="height: 100px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Why Plants Matter</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete the sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Plants give us <span class="answer-space" style="width: 100px;"></span> to breathe.</div>
                        <div>Plants give us <span class="answer-space" style="width: 100px;"></span> to eat.</div>
                        <div>Plants give us <span class="answer-space" style="width: 100px;"></span> for houses.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Plant Care Pledge</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write or draw your promise to care for plants:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px;"></div>
                    <div style="margin-top: 10px;">
                        <div>I promise to <span class="answer-space" style="width: 200px;"></span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Plant Expert Certificate</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw yourself as a plant expert. Label one plant part and write why plants are important:
                    <div class="drawing-area" style="height: 150px;"></div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">Plants are important because ________________</div>
                </div>
            </div>
        `,
        homework: "Teach someone at home about why plants are important. Show them your planted seed and explain how to care for it.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade2MathScienceWeek4);
    console.log("mathscience-week4-plants.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade2MathScienceWeek4);
    console.log("mathscience-week4-plants.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade2MathScienceWeek4',
        metadata: grade2MathScienceWeek4.metadata,
        days: grade2MathScienceWeek4
    });
    console.log("mathscience-week4-plants.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade2MathScienceWeek4 = grade2MathScienceWeek4;
console.log("mathscience-week4-plants.js loaded and registered successfully");