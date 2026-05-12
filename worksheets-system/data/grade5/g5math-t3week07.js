// Grade 5 Mathematics - Term 3 Week 7 Data
const grade5MathsWeek7 = {
    metadata: {
        grade: 5,
        subject: "Mathematics",
        term: 3,
        week: 7,
        title: "Volume & Capacity",
        description: "Exploring volume, cubic units, the cuboid formula, and the difference between volume and capacity"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Water Play - Understanding Volume",
        lessonContent: `
            <p>Welcome to our exploration of volume! Today we'll discover what volume means by playing with water and observing displacement.</p>
            <p><strong>Key Question:</strong> How much space does an object "take up"?</p>
            <p><strong>Introduction:</strong> Volume is the amount of space an object occupies. Every object - from a tiny pebble to a large desk - takes up space. Today we'll see this concept in action!</p>
            <p><strong>What is Displacement?</strong></p>
            <ul>
                <li>When you put an object into water, the water level rises</li>
                <li>The water that gets pushed aside is called "displaced water"</li>
                <li>The amount of water displaced equals the volume of the object!</li>
                <li>This is why you can measure volume by seeing how much water an object pushes out of the way</li>
            </ul>
            <p><strong>Real-World Connection:</strong> Have you ever gotten into a bathtub and watched the water rise? That's displacement! Your body takes up space, so the water has to move somewhere else.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fill-drip"></i> The Bucket Experiment</div>
                <p>Fill a bucket completely to the brim with water. Gently lower a rock into the bucket. Water spills over the sides. The amount of water that spills out equals the volume of the rock!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Big vs. Small</div>
                <p>A beach ball takes up more space (has more volume) than a marble. If you put both in water, the beach ball would displace much more water!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shapes"></i> Same Volume, Different Shapes</div>
                <p>A lump of clay can be rolled into a ball or flattened into a pancake. It still has the same volume because it takes up the same amount of space - just in a different shape!</p>
            </div>
        `,
        taskInstructions: "Perform water displacement experiments and record observations.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Water Displacement Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a bucket of water and different objects, observe what happens when you place each object in the water:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Did the water rise/spill?</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Which object displaced the most water?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Small rock</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                                <td style="padding: 8px; border: 1px solid #ddd;" rowspan="3"><div class="answer-space" style="height: 120px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Large rock</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Apple</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><div class="answer-space" style="height: 40px;"></div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Displacement</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a bucket of water BEFORE and AFTER adding a large object. Show how the water level changes:
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <strong>Before</strong>
                            <div class="drawing-area" style="height: 150px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <strong>After</strong>
                            <div class="drawing-area" style="height: 150px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> In your own words, what is volume?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why did the larger object displace more water than the smaller object?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home of different sizes. Place each in a bowl of water (with an adult's help). Which one displaces the most water? Record your findings.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Units of Volume",
        lessonContent: `
            <p>Today we'll learn about the standard units we use to measure volume!</p>
            <p><strong>Key Question:</strong> How do we measure and describe the amount of space something takes up?</p>
            <p><strong>Cubic Units:</strong></p>
            <ul>
                <li>Volume is measured in <strong>cubic units</strong></li>
                <li>A cubic unit is a cube where all three sides (length, width, height) measure 1 unit</li>
                <li>1 cubic centimetre (1 cm³) is a cube that is 1 cm long, 1 cm wide, and 1 cm tall</li>
                <li>1 cubic metre (1 m³) is a cube that is 1 m long, 1 m wide, and 1 m tall</li>
            </ul>
            <p><strong>Visualizing Cubic Units:</strong></p>
            <ul>
                <li>A sugar cube is approximately 1 cm³!</li>
                <li>A large cardboard box that is 1 metre on each side has a volume of 1 m³</li>
                <li>1 m³ = 1,000,000 cm³ (that's one million sugar cubes!)</li>
            </ul>
            <p><strong>Why Cubic Units?</strong> We use "cubic" because volume measures space in three dimensions (length × width × height).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Sugar Cube Size</div>
                <p>A standard sugar cube is about 1 cm on each side. That means its volume is 1 cm³. If you line up 100 sugar cubes, you'd have a line 1 metre long!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-door-open"></i> One Cubic Metre</div>
                <p>Imagine a box that could fit a standard classroom chair. That's about 1 m³! It would take 1 million sugar cubes to fill that box.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Measuring Tools</div>
                <p>We can't use a regular ruler to measure volume directly. Instead, we measure length, width, and height, then multiply. Or we use displacement like we learned yesterday!</p>
            </div>
        `,
        taskInstructions: "Build cubic units and compare cm³ to m³.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Drawing Cubic Units</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a 1 cm³ cube and a 1 m³ cube (use the space below):
                    <div style="display: flex; gap: 20px; margin-top: 10px;">
                        <div style="flex: 1; text-align: center;">
                            <strong>1 cm³</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div style="flex: 1; text-align: center;">
                            <strong>1 m³</strong>
                            <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Estimating Volume</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Estimate the volume of these objects in cm³ or m³:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A dice: _________ cm³</div>
                        <div>B. A textbook: _________ cm³</div>
                        <div>C. A classroom: _________ m³</div>
                        <div>D. A mobile phone: _________ cm³</div>
                        <div>E. A refrigerator: _________ m³</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How many 1 cm³ cubes would fit inside a 1 m³ box?
                    <div class="answer-space" style="height: 60px;"></div>
                    <div class="hint" style="font-size: 12px; color: #666; margin-top: 5px;">Hint: 1 m = 100 cm, so it's 100 × 100 × 100!</div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which unit (cm³ or m³) would you use to measure the volume of:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A pencil case: _________</div>
                        <div>• A swimming pool: _________</div>
                        <div>• A shoebox: _________</div>
                        <div>• A bedroom: _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 objects at home. Write whether you would measure their volume in cm³ or m³ and explain why.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "The Cuboid Formula",
        lessonContent: `
            <p>Today we'll learn the formula for calculating the volume of a cuboid (a box-shaped object)!</p>
            <p><strong>Key Question:</strong> How can we calculate volume without using water displacement?</p>
            <p><strong>The Cuboid Volume Formula:</strong></p>
            <ul>
                <li>A cuboid is a 3D shape with six rectangular faces (like a box, brick, or shoebox)</li>
                <li><strong>Volume = Length × Width × Height</strong></li>
                <li>We write this as: <strong>V = l × w × h</strong></li>
                <li>The answer is always in cubic units (cm³ or m³)</li>
            </ul>
            <p><strong>Why This Works:</strong></p>
            <ul>
                <li>Imagine filling a box with 1 cm³ cubes</li>
                <li>The number of cubes that fit along the length × number along the width = how many cubes cover the bottom layer</li>
                <li>Multiply by the number of layers (height) = total cubes!</li>
            </ul>
            <p><strong>Example:</strong> A box with length = 5 cm, width = 3 cm, height = 2 cm<br>
            Volume = 5 × 3 × 2 = 30 cm³</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-box"></i> Shoebox Volume</div>
                <p>A shoebox has length 30 cm, width 20 cm, height 10 cm.<br>
                Volume = 30 × 20 × 10 = 6,000 cm³</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brick"></i> Brick Calculation</div>
                <p>A brick is 20 cm long, 10 cm wide, and 5 cm high.<br>
                Volume = 20 × 10 × 5 = 1,000 cm³</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Classroom Volume</div>
                <p>A classroom is 8 m long, 6 m wide, and 3 m high.<br>
                Volume = 8 × 6 × 3 = 144 m³ (enough space for 144 million sugar cubes!)</p>
            </div>
        `,
        taskInstructions: "Use the formula V = l × w × h to calculate volumes of various cuboids.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Formula Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the volume for each cuboid (show your working):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Length = 4 cm, Width = 3 cm, Height = 2 cm</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">B. Length = 7 cm, Width = 5 cm, Height = 3 cm</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">C. Length = 10 cm, Width = 4 cm, Height = 6 cm</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">D. Length = 12 m, Width = 5 m, Height = 3 m</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">E. Length = 25 cm, Width = 20 cm, Height = 15 cm</div>
                        <div class="answer-space" style="height: 50px; margin-left: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Finding Missing Dimensions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use the volume formula to find the missing measurement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Volume = 60 cm³, Length = 5 cm, Width = 3 cm. Find the height: _________ cm</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">B. Volume = 120 m³, Length = 8 m, Height = 3 m. Find the width: _________ m</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A fish tank has length 50 cm, width 30 cm, and height 40 cm. What is its volume?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A delivery box has a volume of 24,000 cm³. If the length is 40 cm and the width is 30 cm, what is the height?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Draw a cuboid and label its length, width, and height. Then calculate its volume:
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a rectangular box at home (cereal box, shoebox, etc.). Measure its length, width, and height in cm. Calculate its volume using V = l × w × h.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Volume vs. Capacity",
        lessonContent: `
            <p>Today we'll explore the difference between volume and capacity - two terms that are often confused!</p>
            <p><strong>Key Question:</strong> What's the difference between how much space an object takes up and how much it can hold?</p>
            <p><strong>Volume vs. Capacity:</strong></p>
            <ul>
                <li><strong>Volume:</strong> The amount of space an object occupies (both solid and hollow objects have volume)</li>
                <li><strong>Capacity:</strong> The maximum amount a container can hold (usually liquids or pourable materials)</li>
            </ul>
            <p><strong>Key Differences:</strong></p>
            <ul>
                <li>A solid brick has volume but no capacity (it can't hold anything inside)</li>
                <li>A cup has both volume (the space it takes up on the table) AND capacity (how much water it can hold)</li>
                <li>Capacity is often measured in litres (L) and millilitres (mL), while volume is in cm³ and m³</li>
                <li><strong>Important conversion:</strong> 1 cm³ = 1 mL and 1,000 cm³ = 1 L</li>
            </ul>
            <p><strong>Example:</strong> A 2-litre bottle has a capacity of 2 L. It also has volume (the space it takes up) - about 2,200 cm³ (including the thickness of the plastic).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mug-hot"></i> Cup Comparisons</div>
                <p>A cup's volume is the space it takes up on the shelf. Its capacity is how much liquid it can hold. That's why two cups that look the same size can have different capacities if one has thicker walls!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exchange-alt"></i> The Conversion</div>
                <p>1 cm³ = 1 mL. That means a 1,000 cm³ box can hold exactly 1 litre of water! This is why we can easily convert between volume and capacity.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Fish Tank Facts</div>
                <p>A fish tank has volume (the space it occupies in the room) and capacity (how much water it holds). When buying a tank, you care about capacity for your fish, but you need space (volume) for where it will sit!</p>
            </div>
        `,
        taskInstructions: "Distinguish between volume and capacity with real-world examples.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Volume or Capacity?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Volume" or "Capacity" for each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. How much water a water bottle can hold: _________</div>
                        <div>B. The space a refrigerator takes up in the kitchen: _________</div>
                        <div>C. How many litres of juice fit in a jug: _________</div>
                        <div>D. The size of a suitcase when packed: _________</div>
                        <div>E. How much sand fits in a bucket: _________</div>
                        <div>F. The space a pencil occupies on a desk: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Conversion Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Convert between volume (cm³) and capacity (mL or L):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. 500 cm³ = _________ mL</div>
                        <div>B. 2,000 cm³ = _________ L</div>
                        <div>C. 1.5 L = _________ cm³</div>
                        <div>D. 750 mL = _________ cm³</div>
                        <div>E. 5 L = _________ cm³</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Using a Venn diagram, compare volume and capacity:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-World Application</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> A rectangular water tank has length 40 cm, width 25 cm, and height 30 cm.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What is its volume in cm³?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) What is its capacity in litres?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find 5 containers in your kitchen (bottles, jars, cups, etc.). For each, say whether you would measure its volume or capacity, and estimate the measurement.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Measurement",
        subtopic: "Volume Challenge",
        lessonContent: `
            <p>Today we'll apply everything we've learned this week to solve a fun volume challenge!</p>
            <p><strong>Key Question:</strong> How many 1 cm³ cubes can fit inside a larger box?</p>
            <p><strong>Review of the Week:</strong></p>
            <ol>
                <li><strong>Monday:</strong> Volume is the space an object takes up (water displacement)</li>
                <li><strong>Tuesday:</strong> Volume is measured in cubic units (cm³ and m³)</li>
                <li><strong>Wednesday:</strong> Volume of a cuboid = length × width × height</li>
                <li><strong>Thursday:</strong> Volume (space occupied) vs. Capacity (what a container holds)</li>
            </ol>
            <p><strong>The Sugar Cube Challenge:</strong></p>
            <ul>
                <li>A sugar cube is approximately 1 cm³</li>
                <li>If we have a large box, we can calculate exactly how many sugar cubes fit inside!</li>
                <li>We don't need to actually fill the box - we just calculate length × width × height</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cubes"></i> Small Box Challenge</div>
                <p>A box measures 10 cm × 8 cm × 5 cm. Volume = 10 × 8 × 5 = 400 cm³. That means 400 sugar cubes can fit inside!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-gift"></i> Gift Box Math</div>
                <p>A gift box is 20 cm long, 15 cm wide, and 10 cm high. Volume = 20 × 15 × 10 = 3,000 cm³, so 3,000 sugar cubes could fit!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-truck"></i> Packing Challenge</div>
                <p>If you have a shipping box that is 60 cm × 40 cm × 30 cm, its volume = 60 × 40 × 30 = 72,000 cm³. That's 72,000 sugar cubes - enough to fill a small bathtub!</p>
            </div>
        `,
        taskInstructions: "Calculate how many 1 cm³ sugar cubes fit into various boxes and solve packing problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sugar Cube Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate how many 1 cm³ sugar cubes fit in each box:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Box A: Length = 8 cm, Width = 6 cm, Height = 4 cm</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">B. Box B: Length = 15 cm, Width = 10 cm, Height = 8 cm</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">C. Box C: Length = 25 cm, Width = 20 cm, Height = 15 cm</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                        
                        <div style="margin-top: 10px;">D. Box D: Length = 40 cm, Width = 30 cm, Height = 20 cm</div>
                        <div class="answer-space" style="height: 40px; margin-left: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Packing Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A shipping container has internal dimensions: Length = 2 m, Width = 1.5 m, Height = 1 m.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What is the volume of the container in m³?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) How many 1 cm³ sugar cubes would fit? (Remember: 1 m³ = 1,000,000 cm³)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Multi-Step Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A cardboard box has length 30 cm, width 24 cm, and height 18 cm.
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a) What is its volume in cm³?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b) How many sugar cubes (1 cm³ each) fit in the box?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c) If each sugar cube weighs 4 grams, what is the total weight of all the sugar cubes?</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d) If the box can only hold 5 kg safely, can it hold all the sugar cubes? Show your working.</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Design Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a box that can hold exactly 2,000 sugar cubes (2,000 cm³). What could its dimensions be?
                    <div class="answer-space" style="height: 80px;"></div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most useful thing you learned about volume this week? How will you use it in real life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create your own volume challenge! Find a box at home, measure its length, width, and height, and calculate how many sugar cubes (1 cm³) would fit inside. Then write 3 word problems about your box for a classmate to solve.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5MathsWeek7);
    console.log("grade5-maths-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5MathsWeek7);
    console.log("grade5-maths-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5MathsWeek7',
        metadata: grade5MathsWeek7.metadata,
        days: grade5MathsWeek7
    });
    console.log("grade5-maths-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5MathsWeek7 = grade5MathsWeek7;
console.log("grade5-maths-week7.js loaded and registered successfully");