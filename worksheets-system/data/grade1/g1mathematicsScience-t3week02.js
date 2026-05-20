// Grade 1 Mathematics & Science - Term 3 Week 2 Data
const grade1MathsScienceWeek2 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 3,
        week: 2,
        title: "Exploring Mixtures",
        description: "Identifying, describing, sorting, and making simple mixtures using local resources"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Exploring Different Mixtures in the Surroundings",
        lessonContent: `
            <p>Welcome to our exciting week about mixtures! Today we'll look for mixtures all around us.</p>
            <p><strong>Key Question:</strong> What is a mixture?</p>
            <p><strong>Introduction:</strong> A <strong>mixture</strong> is when two or more things are put together but you can still see the different parts. Look around! Mixtures are everywhere!</p>
            <p><strong>Mixtures We See Every Day:</strong></p>
            <ol>
                <li><strong>Soil:</strong> Dirt, tiny rocks, sand, and dead leaves all mixed together</li>
                <li><strong>Salad:</strong> Lettuce, tomatoes, cucumbers, and carrots all tossed together</li>
                <li><strong>Saltwater:</strong> Salt mixed into water (can you see the salt? It disappears!)</li>
                <li><strong>Trail Mix:</strong> Nuts, raisins, chocolate chips, and pretzels mixed together</li>
                <li><strong>Fruit Salad:</strong> Different fruits cut up and mixed in a bowl</li>
            </ol>
            <p><strong>Fun Fact:</strong> Some mixtures let you see all the parts (like salad). Other mixtures hide the parts (like saltwater). Both are still mixtures!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Snack Time Mixture</div>
                <p>When you eat a bowl of cereal with milk, that's a mixture! You can see the cereal floating in the milk.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paint-bucket"></i> Art Mixture</div>
                <p>Mixing red paint and yellow paint makes orange paint. That's a mixture too!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Nature Mixture</div>
                <p>A puddle on a rainy day has water, maybe some dirt, and tiny leaves. That's a nature mixture!</p>
            </div>
        `,
        taskInstructions: "Look around your home or classroom. Find three mixtures and draw them.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mixture Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your home or classroom. Find 3 different mixtures. Draw each one:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Mixture 1:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Name: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Mixture 2:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Name: _________</span>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>Mixture 3:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <span style="font-size: 12px;">Name: _________</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Circle the Mixtures</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Circle the pictures that show mixtures:
                    <div style="display: flex; gap: 20px; margin-top: 10px; flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>A bowl of salad</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>A single apple</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>A glass of saltwater</span>
                        </div>
                        <div style="text-align: center;">
                            <div class="drawing-area" style="width: 80px; height: 80px; border: 1px solid #ccc;"></div>
                            <span>A spoon of soil</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Share Your Answer</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What is your favorite mixture to eat? Why?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, find 2 mixtures in your kitchen. Draw one of them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Identifying Mixtures and Their Components",
        lessonContent: `
            <p>Today we'll learn how to identify mixtures and name the different parts that make them up!</p>
            <p><strong>Key Question:</strong> What things are mixed together to make a mixture?</p>
            <p><strong>What is a Component?</strong></p>
            <p>A <strong>component</strong> is each separate thing that goes into a mixture. Every mixture has at least two components!</p>
            <p><strong>Let's Identify Components:</strong></p>
            <ul>
                <li><strong>Soil mixture:</strong> Components = sand + tiny rocks + dead leaves + dirt</li>
                <li><strong>Salad mixture:</strong> Components = lettuce + tomatoes + cucumbers + carrots</li>
                <li><strong>Saltwater mixture:</strong> Components = salt + water</li>
                <li><strong>Fruit salad mixture:</strong> Components = apples + bananas + oranges + grapes</li>
                <li><strong>Sandcastle mixture:</strong> Components = sand + water</li>
            </ul>
            <p><strong>Remember:</strong> You can sometimes see all the components. Sometimes you can't (like salt in water). But they are still there!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Morning Mixture</div>
                <p>Hot chocolate is a mixture! Components: hot water + chocolate powder + marshmallows (if you add them!)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pizza-slice"></i> Pizza Mixture</div>
                <p>A pizza has many components: crust + sauce + cheese + pepperoni + vegetables</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bath"></i> Bath Time Mixture</div>
                <p>Bubble bath is a mixture of water + soap. The bubbles appear when you mix them together!</p>
            </div>
        `,
        taskInstructions: "Name the components of different mixtures.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Name the Components</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write or draw the components for each mixture:
                    <div style="margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <strong>Mixture: Bowl of Cereal with Milk</strong><br>
                            Components: _______________ and _______________<br>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Mixture: Garden Potting Soil</strong><br>
                            Components: _______________, _______________, and _______________<br>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Mixture: Lemonade</strong><br>
                            Components: _______________ + _______________ + _______________<br>
                            <div class="drawing-area" style="height: 60px; margin-top: 5px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a mixture you have at home. Label at least 2 components:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">My mixture is: _______________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Component Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at a bowl of soup. Name 3 things you see in the soup:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Help make a sandwich at home. Draw the sandwich and label 3 different components (ingredients) inside it.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Sorting Mixtures by Color, Texture, and Size",
        lessonContent: `
            <p>Today we'll learn how to sort and describe mixtures by looking at their color, texture, and size!</p>
            <p><strong>Key Question:</strong> How can we describe and sort different mixtures?</p>
            <p><strong>Ways to Describe Mixtures:</strong></p>
            <ul>
                <li><strong>Color:</strong> What colors do you see in the mixture?</li>
                <li><strong>Texture:</strong> How does it feel? (smooth, bumpy, rough, soft, gritty)</li>
                <li><strong>Size:</strong> Are the pieces big or small? Are they all the same size?</li>
            </ul>
            <p><strong>Let's Sort Some Mixtures!</strong></p>
            <div style="background: #f0f8ff; padding: 10px; border-radius: 10px; margin-top: 10px;">
                <p><strong>🌱 Soil:</strong> Brown color, gritty texture, different sizes (tiny sand to small rocks)</p>
                <p><strong>🥗 Salad:</strong> Green, red, orange colors, crunchy texture, medium to large pieces</p>
                <p><strong>🧂 Saltwater:</strong> Clear color, smooth texture (can't see the salt!), all the same size (liquid)</p>
                <p><strong>🍎 Fruit Salad:</strong> Many colors, soft texture, small to medium pieces</p>
                <p><strong>🏖️ Wet Sand:</strong> Brown/gray color, gritty and squishy texture, tiny grains all the same size</p>
            </div>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Color Sorting</div>
                <p>A bag of colorful candies is a mixture! You can sort them by color - all red together, all green together, all yellow together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-peace"></i> Texture Touch</div>
                <p>Feel a bowl of rice - it's hard and grainy. Feel a bowl of yogurt - it's smooth and creamy. Both are mixtures with different textures!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt-h"></i> Size Matters</div>
                <p>Trail mix has big pretzels, medium nuts, and small raisins. You can sort them by size!</p>
            </div>
        `,
        taskInstructions: "Sort mixtures by color, texture, and size. Draw and describe each.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sort by Color</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a colorful mixture (like fruit salad or candy). Color the different components:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">List the colors you used: _______________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort by Texture</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Touch or describe these mixtures. Circle the texture words:
                    <div style="margin-top: 10px;">
                        <div><strong>Sand:</strong> smooth / gritty / soft / bumpy</div>
                        <div><strong>Jelly:</strong> smooth / gritty / hard / bumpy</div>
                        <div><strong>Popcorn:</strong> smooth / soft / crunchy / bumpy</div>
                        <div><strong>Mashed potatoes:</strong> smooth / gritty / crunchy / lumpy</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sort by Size</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a mixture with big pieces, medium pieces, and small pieces:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">
                        <div>Big pieces: _______________</div>
                        <div>Medium pieces: _______________</div>
                        <div>Small pieces: _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Describe a Mixture</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose one mixture from home. Describe its color, texture, and size:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find 3 different mixtures at home. Sort them by texture (smooth, bumpy, or crunchy). Draw the bumpiest one.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Physical Science",
        subtopic: "Making Simple Mixtures Using Local Resources",
        lessonContent: `
            <p>Today is hands-on day! We will make our own mixtures using things we can find at home or in our community!</p>
            <p><strong>Key Question:</strong> How can we create our own mixtures?</p>
            <p><strong>What You'll Need (Local Resources):</strong></p>
            <ul>
                <li>Sand or soil from outside</li>
                <li>Water from the tap</li>
                <li>Salt or sugar from the kitchen</li>
                <li>Small rocks or pebbles</li>
                <li>Leaves or grass</li>
                <li>Rice, beans, or maize</li>
            </ul>
            <p><strong>Simple Mixtures You Can Make:</strong></p>
            <ol>
                <li><strong>Mud Mixture:</strong> Soil + water (stir together - what happens?)</li>
                <li><strong>Saltwater Mixture:</strong> Water + salt (stir until salt disappears)</li>
                <li><strong>Rock and Sand Mixture:</strong> Small rocks + sand (mix them in a cup)</li>
                <li><strong>Nature Mixture:</strong> Leaves + soil + small sticks (collect from outside)</li>
                <li><strong>Kitchen Mixture:</strong> Rice + beans (mix them in a bowl)</li>
            </ol>
            <p><strong>Safety First!</strong> Always ask an adult before using kitchen items. Don't taste anything unless an adult says it's safe!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mud"></i> Making Mud</div>
                <p>When you add water to dry soil, you get mud! The water soaks into the soil and makes it sticky. You can use mud to build things!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-egg"></i> Kitchen Science</div>
                <p>Mix flour and water to make paste! Add a little salt to preserve it. This is how people made glue long ago.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-music"></i> Sound Mixture</div>
                <p>Put dry beans or rice in a closed container. Shake it - you made a musical instrument! The beans and rice are the components.</p>
            </div>
        `,
        taskInstructions: "Make 3 simple mixtures using items from home. Draw and describe each mixture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Make a Mixture - Mud</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> With an adult's help, mix soil and water. Draw what you made:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">What color is it? _______________</div>
                    <div>How does it feel? _______________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Make a Mixture - Saltwater</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Mix a spoon of salt into a cup of water. Stir well. Draw what you see:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Can you see the salt? _______________</div>
                    <div>Where did the salt go? _______________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Make a Mixture - Your Choice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your own mixture using local items. Draw and describe it:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">My mixture contains: _______________</div>
                    <div>What I notice: _______________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Mixture Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which mixture was your favorite to make? Why?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What did you learn about mixtures this week?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "With an adult, make a simple mixture for your family (like a fruit salad or a bowl of cereal). Tell a family member what the components are.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathsScienceWeek2);
    console.log("grade1-maths-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathsScienceWeek2);
    console.log("grade1-maths-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathsScienceWeek2',
        metadata: grade1MathsScienceWeek2.metadata,
        days: grade1MathsScienceWeek2
    });
    console.log("grade1-maths-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathsScienceWeek2 = grade1MathsScienceWeek2;
console.log("grade1-maths-science-week2.js loaded and registered successfully");