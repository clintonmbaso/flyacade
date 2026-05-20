// Grade 3 Mathematics & Science - Term 2 Week 9 Data
const grade3MathScienceWeek9 = {
    metadata: {
        grade: 3,
        subject: "Mathematics & Science",
        term: 2,
        week: 9,
        title: "Properties of Materials",
        description: "Identifying and examining observable characteristics and properties of materials including texture, strength, buoyancy, color, shape, and size"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Materials Science",
        subtopic: "Identifying Observable Characteristics of Materials",
        lessonContent: `
            <p>Welcome to our exploration of materials! Today we'll learn how to identify different materials by looking at them carefully.</p>
            <p><strong>Key Question:</strong> What are the things around us made of?</p>
            <p><strong>Introduction:</strong> Everything around us is made of materials. A material is what something is made from. Different materials have different characteristics that we can observe.</p>
            <p><strong>Common Materials Around Us:</strong></p>
            <ol>
                <li><strong>Wood:</strong> Comes from trees. Used for furniture, pencils, and houses.</li>
                <li><strong>Metal:</strong> Strong and shiny. Used for coins, spoons, and cars.</li>
                <li><strong>Plastic:</strong> Can be many colors and shapes. Used for toys, bottles, and bags.</li>
                <li><strong>Glass:</strong> Transparent and breakable. Used for windows, cups, and glasses.</li>
                <li><strong>Fabric:</strong> Soft and flexible. Used for clothes, curtains, and blankets.</li>
                <li><strong>Paper:</strong> Thin and can be written on. Used for books, notebooks, and boxes.</li>
                <li><strong>Rubber:</strong> Stretchy and bouncy. Used for erasers, tires, and balls.</li>
            </ol>
            <p><strong>How to Observe Materials:</strong></p>
            <ul>
                <li>Look at the color</li>
                <li>Touch the surface</li>
                <li>Notice if light passes through</li>
                <li>Check if it bends or stays stiff</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-ruler"></i> Classroom Hunt</div>
                <p>Look around your classroom. The desk is made of wood. The window is made of glass. Your pencil might be made of wood with a metal part (the clip) and rubber eraser!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> What Are You Wearing?</div>
                <p>Your shirt is made of fabric. Your shoes might be made of fabric, rubber, or plastic. Your backpack is often made of fabric or plastic.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> At Home</div>
                <p>In your kitchen, you'll find metal pots, glass cups, plastic containers, and wooden spoons. Each material is chosen for a specific reason!</p>
            </div>
        `,
        taskInstructions: "Identify and record different materials in your classroom and complete the material hunt activity.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Material Hunt Around the Classroom</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Find and write one object for each material:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Something made of WOOD: _________________</div>
                        <div>• Something made of METAL: _________________</div>
                        <div>• Something made of PLASTIC: _________________</div>
                        <div>• Something made of GLASS: _________________</div>
                        <div>• Something made of FABRIC: _________________</div>
                        <div>• Something made of PAPER: _________________</div>
                        <div>• Something made of RUBBER: _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw three objects from your material hunt and label what material each is made from:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">Object 1</div>
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">Object 2</div>
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">Object 3</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What material do you see the most in your classroom? Why do you think that is?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your home and find 5 objects made of different materials. Write them down and tell a family member what material each is made from.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Materials Science",
        subtopic: "Properties: Rough/Smooth, Hard/Soft, Flexible/Rigid",
        lessonContent: `
            <p>Today we'll learn about different properties of materials! Properties are words that describe how a material feels and behaves.</p>
            <p><strong>Key Question:</strong> How can we describe different materials?</p>
            <p><strong>Properties We Can Feel (Texture):</strong></p>
            <ul>
                <li><strong>Rough:</strong> Not smooth; has bumps or ridges (like sandpaper, tree bark, a carpet)</li>
                <li><strong>Smooth:</strong> Even surface; no bumps (like glass, a polished table, a plastic spoon)</li>
            </ul>
            <p><strong>Properties About Toughness:</strong></p>
            <ul>
                <li><strong>Hard:</strong> Difficult to scratch or bend (like a rock, a metal spoon, a ceramic plate)</li>
                <li><strong>Soft:</strong> Easy to press or squeeze (like a pillow, a sponge, a cotton ball)</li>
            </ul>
            <p><strong>Properties About Bending:</strong></p>
            <ul>
                <li><strong>Flexible:</strong> Can bend easily without breaking (like a plastic ruler, a rubber band, a piece of paper)</li>
                <li><strong>Rigid (Stiff):</strong> Does NOT bend easily (like a wooden desk, a glass bottle, a metal pipe)</li>
            </ul>
            <p><strong>How to Test Properties:</strong></p>
            <ul>
                <li>Touch the material with your fingers to feel rough or smooth</li>
                <li>Press on the material to test hard or soft</li>
                <li>Try to bend the material to see if it is flexible or rigid</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-paper"></i> Touch Test</div>
                <p>A pencil is smooth and hard. An eraser is smooth but soft. A carpet is rough and soft. A metal desk is smooth, hard, and rigid.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-baby-carriage"></i> Why Materials Matter</div>
                <p>A baby's toy needs to be soft so it doesn't hurt. A hammer needs to be hard so it can hit nails. A straw needs to be flexible so you can bend it!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Describing Words</div>
                <p>You can describe a window: smooth, hard, rigid. Describe a sweater: rough or smooth (depending on the fabric), soft, flexible.</p>
            </div>
        `,
        taskInstructions: "Touch and test different materials to identify their properties.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Property Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each property to its opposite:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Rough ————————— Smooth</div>
                        <div>Hard ————————— Soft</div>
                        <div>Flexible ————————— Rigid</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Material Testing Station</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Test each material and check (\u2713) the boxes that describe it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Rough/Smooth</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Hard/Soft</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Flexible/Rigid</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Eraser</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Plastic Ruler</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cotton Ball</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Paper</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Wood Block</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Describe It!</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Use three property words to describe each object:
                    <div>Your pencil case: _______________, _______________, _______________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>Your shoe: _______________, _______________, _______________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                    <div>Your desk: _______________, _______________, _______________</div>
                    <div class="answer-space" style="height: 30px;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home. For each object, write if it is rough or smooth, hard or soft, and flexible or rigid.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Materials Science",
        subtopic: "Properties: Strong/Fragile, Sinking/Floating",
        lessonContent: `
            <p>Today we'll learn about more properties of materials: how strong they are and whether they sink or float in water!</p>
            <p><strong>Key Question:</strong> What makes some materials break easily? Why do some things float while others sink?</p>
            <p><strong>Properties About Strength:</strong></p>
            <ul>
                <li><strong>Strong:</strong> Can hold weight or withstand force without breaking (like a metal chain, a wooden chair, a brick)</li>
                <li><strong>Fragile (Weak/Delicate):</strong> Breaks easily (like a glass cup, a potato chip, an eggshell, a thin cracker)</li>
            </ul>
            <p><strong>Properties About Water (Buoyancy):</strong></p>
            <ul>
                <li><strong>Floats:</strong> Stays on top of the water (like a plastic bottle, a wooden stick, a cork, a rubber duck)</li>
                <li><strong>Sinks:</strong> Goes to the bottom of the water (like a metal spoon, a rock, a glass marble, a coin)</li>
            </ul>
            <p><strong>Why Do Things Float or Sink?</strong></p>
            <ul>
                <li>Objects that are less dense than water float</li>
                <li>Objects that are more dense than water sink</li>
                <li>Wood, plastic, and cork usually float</li>
                <li>Metal, glass, and rocks usually sink</li>
            </ul>
            <p><strong>Why Do We Need Strong Materials?</strong></p>
            <ul>
                <li>Building materials need to be strong (bricks, steel, concrete)</li>
                <li>Fragile materials need careful handling (glasses, dishes, decorations)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Strong vs. Fragile</div>
                <p>A metal spoon is strong - you can stir soup without it breaking. A glass cup is fragile - if you drop it, it will break!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Sink or Float?</div>
                <p>A wooden boat floats because wood is less dense than water. A metal anchor sinks because metal is more dense than water.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-building"></i> Strong Materials Keep Us Safe</div>
                <p>Bridges are made of strong materials like steel and concrete so they can hold heavy cars and trucks without breaking.</p>
            </div>
        `,
        taskInstructions: "Test materials for strength and buoyancy, then record your predictions and results.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Strong or Fragile?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Strong" or "Fragile" next to each object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A brick: _______________</div>
                        <div>• A glass ornament: _______________</div>
                        <div>• A metal chain: _______________</div>
                        <div>• A paper towel: _______________</div>
                        <div>• A wooden table: _______________</div>
                        <div>• An egg: _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sink or Float Prediction & Test</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each object, predict (P) and then test (T) if it sinks or floats:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Prediction (Sink/Float)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Result (Sink/Float)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Coin</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Plastic Bottle Cap</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rock</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rubber Band</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one object that floats and one object that sinks. Write why you think they float or sink:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">FLOATS</div>
                        </div>
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">SINKS</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "At bath time or with a bucket of water, test 5 small toys or objects to see if they sink or float. Draw or write your results.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Materials Science",
        subtopic: "Examining Properties: Color, Shape, Size, Texture",
        lessonContent: `
            <p>Today we'll use all our senses to examine materials by their color, shape, size, and texture!</p>
            <p><strong>Key Question:</strong> How can we describe materials in different ways?</p>
            <p><strong>Ways to Describe Materials:</strong></p>
            <ol>
                <li><strong>Color:</strong> What color is it? (red, blue, green, yellow, brown, white, black, etc.)</li>
                <li><strong>Shape:</strong> What shape is it? (round, square, rectangle, triangle, flat, curved, irregular)</li>
                <li><strong>Size:</strong> How big or small is it? (tiny, small, medium, large, huge, long, short)</li>
                <li><strong>Texture:</strong> How does it feel? (rough, smooth, bumpy, slippery, sticky, fuzzy, soft, hard)</li>
            </ol>
            <p><strong>Using All Your Observations Together:</strong></p>
            <ul>
                <li>Scientists use ALL these properties to identify and sort materials</li>
                <li>Sometimes objects have multiple properties!</li>
                <li>Example: "A shiny red apple that is round, medium-sized, and smooth"</li>
                <li>Example: "A fuzzy yellow tennis ball that is round, small, and soft"</li>
            </ul>
            <p><strong>Why We Sort by Properties:</strong></p>
            <ul>
                <li>Recycling centers sort materials by color and type</li>
                <li>Stores organize items by size, shape, and color</li>
                <li>Scientists group things to study them better</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-palette"></i> Color Around Us</div>
                <p>Leaves are usually green. The sky is blue. A fire truck is red. Different materials come in different colors, and sometimes the same material comes in many colors (like plastic toys!).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Shape Matters</div>
                <p>A ball is round so it can roll. A brick is rectangular so it can stack easily. A coin is round and flat. The shape of a material helps it do its job!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrows-alt"></i> Big and Small</div>
                <p>A marble is tiny and hard. A boulder is huge and hard too! Same material (rock/stone) but very different sizes with different uses.</p>
            </div>
        `,
        taskInstructions: "Examine mystery objects and describe them using all four properties: color, shape, size, and texture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Mystery Object Description</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Your teacher will give you a mystery object. Describe it using all four properties:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Color: _________________</div>
                        <div>• Shape: _________________</div>
                        <div>• Size: _________________</div>
                        <div>• Texture: _________________</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div>What do you think the object is? _________________</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Complete the Description Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each object, fill in the missing properties:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Color</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Shape</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Size</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Texture</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Orange</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Round</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Medium</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Ice Cube</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Small</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Smooth/Hard</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pillow</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Soft/Fluffy</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Long/Thin</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                             </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sort by Property</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw two groups of objects sorted by ONE property (color, shape, size, or texture). Label your sorting rule:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px solid #4A90E2; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">Group 1</div>
                        </div>
                        <div style="border: 2px solid #4A90E2; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">Group 2</div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;">My sorting rule: _________________</div>
                </div>
            </div>
        `,
        homework: "Choose 5 objects from your bedroom. For each object, write its color, shape, size (compared to your hand), and texture.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics & Science",
        topic: "Materials Science",
        subtopic: "Lab: Testing Material Properties (Floating/Sinking)",
        lessonContent: `
            <p>Welcome to our science lab day! Today we'll be scientists and test different materials to see if they sink or float.</p>
            <p><strong>Lab Question:</strong> Which materials float and which materials sink?</p>
            <p><strong>What is a Science Lab?</strong></p>
            <ul>
                <li>A science lab is where we do experiments to answer questions</li>
                <li>Scientists make predictions (hypotheses) before testing</li>
                <li>Scientists record their results carefully</li>
                <li>Scientists share what they learned</li>
            </ul>
            <p><strong>Our Experiment:</strong> Sink or Float Test</p>
            <ol>
                <li>Fill a container with water</li>
                <li>Choose different objects made of different materials</li>
                <li>Predict: Will it sink or float?</li>
                <li>Gently place the object in the water</li>
                <li>Observe: Does it sink or float?</li>
                <li>Record your result</li>
            </ol>
            <p><strong>Lab Safety Rules:</strong></p>
            <ul>
                <li>Keep water in the container - no splashing</li>
                <li>Be gentle when placing objects in water</li>
                <li>Wipe up spills immediately</li>
                <li>Work with your lab partner</li>
                <li>Wash your hands after the experiment</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Being a Scientist</div>
                <p>Real scientists test things to find answers. Sometimes they are surprised by what they discover! That's part of the fun of science.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Record Your Data</div>
                <p>Scientists use tables like the one below to write down their predictions and results. Being organized helps you learn from your experiment!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> What Did You Learn?</div>
                <p>After testing, can you find a pattern? Do most metal objects sink? Do most plastic objects float? Wood? Rubber?</p>
            </div>
        `,
        taskInstructions: "Conduct a sink-or-float experiment, record predictions and results, and draw conclusions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Lab Prediction (Hypothesis)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Before you test, write your prediction:
                    <div class="answer-space" style="height: 60px; margin-top: 5px;">I predict that ______ will float and ______ will sink because ______</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sink or Float Lab Data Table</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Test each object. Record your results:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Material</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Prediction (Sink/Float)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Result (Sink/Float)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Wooden Block</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Wood</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Metal Coin</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Metal</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Plastic Toy</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Plastic</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rubber Ball</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Rubber</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Paper Clip</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Metal</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cork</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cork</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Your Choice: _________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Lab Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your experiment:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• How many objects floated? _________</div>
                        <div>• How many objects sank? _________</div>
                        <div>• Which materials floated the most? _________</div>
                        <div>• Which materials sank the most? _________</div>
                        <div>• Was your prediction correct? Why or why not?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw Your Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of your experiment showing one object that floats and one object that sinks:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">FLOATING</div>
                        </div>
                        <div style="border: 2px dashed #ccc; height: 120px; text-align: center; padding-top: 40px;">
                            <div style="font-weight: bold;">SINKING</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Share Your Discovery</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most surprising thing you learned from this experiment?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Share your experiment with a family member. Test one more object at home (with permission) and tell them if it sinks or floats and why you think that happens.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3MathScienceWeek9);
    console.log("grade3-mathscience-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3MathScienceWeek9);
    console.log("grade3-mathscience-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3MathScienceWeek9',
        metadata: grade3MathScienceWeek9.metadata,
        days: grade3MathScienceWeek9
    });
    console.log("grade3-mathscience-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3MathScienceWeek9 = grade3MathScienceWeek9;
console.log("grade3-mathscience-week9.js loaded and registered successfully");