// Grade 4 Science - Term 2 Week 8 Data
const grade4ScienceWeek8 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 8,
        title: "Classification of Plants",
        description: "Distinguishing between flowering and non-flowering plants, and exploring monocots vs. dicots"
    },
    
    monday: {
        subject: "Science",
        topic: "Plant Classification",
        subtopic: "Flowering vs. Non-Flowering Plants",
        lessonContent: `
            <p>Welcome to our exploration of plant classification! Today we'll learn how scientists group plants into two major categories.</p>
            <p><strong>Key Question:</strong> Do all plants have flowers?</p>
            <p><strong>Introduction:</strong> Plants are living things that need sunlight, water, and air to survive. But not all plants are the same! Scientists classify (group) plants based on how they reproduce. The two main groups are flowering plants and non-flowering plants.</p>
            <p><strong>Flowering Plants:</strong></p>
            <ul>
                <li>Plants that produce flowers to help them reproduce</li>
                <li>Examples: Maize (corn), hibiscus, mango trees, bean plants</li>
                <li>Flowers turn into fruits that contain seeds</li>
                <li>New plants grow from these seeds</li>
            </ul>
            <p><strong>Non-Flowering Plants:</strong></p>
            <ul>
                <li>Plants that do not produce flowers</li>
                <li>Examples: Ferns, mosses, algae</li>
                <li>They reproduce using tiny particles called <strong>spores</strong></li>
                <li>Often found in damp, shady places</li>
            </ul>
            <p><strong>Did You Know?</strong> Algae is the green "scum" you sometimes see on top of ponds or puddles. It's a non-flowering plant!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Local Plants</div>
                <p>Look around your home or school. Mango trees, bean plants, and maize are flowering plants. Ferns growing in shady corners are non-flowering plants!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dot-circle"></i> Spores vs. Seeds</div>
                <p>Flowering plants use seeds to reproduce. Non-flowering plants like ferns use tiny spores. Spores are so small you can't see them without a microscope!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Where to Find Ferns</div>
                <p>Ferns love damp, shady places. Check under trees, near walls, or in the corners of your garden. They have feathery leaves called fronds.</p>
            </div>
        `,
        taskInstructions: "Identify and list flowering and non-flowering plants in your local environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Garden Sort</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at the plant pictures or specimens shown by your teacher. Sort them into two groups:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div style="background-color: #E8F5E9; padding: 10px; border-radius: 5px;">
                                <strong>🌸 Flowering Plants</strong>
                                <div style="height: 100px; margin-top: 10px; border: 1px dashed #4CAF50; padding: 5px;">
                                    <em>List plants here:</em>
                                </div>
                            </div>
                            <div style="background-color: #FFF3E0; padding: 10px; border-radius: 5px;">
                                <strong>🍃 Non-Flowering Plants</strong>
                                <div style="height: 100px; margin-top: 10px; border: 1px dashed #FF9800; padding: 5px;">
                                    <em>List plants here:</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Plant Hunter</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one flowering plant and one non-flowering plant you can find near your home:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Flowering Plant:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>Name: ___________</div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Non-Flowering Plant:</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>Name: ___________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> How are flowering plants different from non-flowering plants?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name three flowering plants and three non-flowering plants you can find in your community:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home or neighborhood. Find and draw one flowering plant and one non-flowering plant. Write their names if you know them.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Plant Classification",
        subtopic: "Monocots and Dicots",
        lessonContent: `
            <p>Today we'll dive deeper into flowering plants! Did you know there are two types of flowering plants?</p>
            <p><strong>Key Question:</strong> How can you tell if a flowering plant is a monocot or a dicot?</p>
            <p><strong>Introduction:</strong> Scientists divide flowering plants into two groups: <strong>Monocotyledons (Monocots)</strong> and <strong>Dicotyledons (Dicots)</strong>. You can identify them by looking at their seeds and leaves!</p>
            <p><strong>Monocots (One Seed Leaf):</strong></p>
            <ul>
                <li><strong>Seed:</strong> Has one part (one cotyledon) - like a maize/corn seed</li>
                <li><strong>Leaves:</strong> Have <strong>parallel veins</strong> (lines run side by side like train tracks)</li>
                <li><strong>Examples:</strong> Grass, maize, wheat, rice, sugarcane, onions, lilies</li>
            </ul>
            <p><strong>Dicots (Two Seed Leaves):</strong></p>
            <ul>
                <li><strong>Seed:</strong> Has two parts (two cotyledons) - like a bean seed that splits in half</li>
                <li><strong>Leaves:</strong> Have <strong>net-like veins</strong> (veins branch out like a web or tree branches)</li>
                <li><strong>Examples:</strong> Beans, mango trees, hibiscus, sunflower, tomatoes, potatoes</li>
            </ul>
            <p><strong>Easy Memory Trick:</strong> "One" for Monocot (one seed leaf, parallel veins). "Two" for Dicot (two seed leaves, net-like veins).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> The Seed Test</div>
                <p>Soak a bean seed overnight, then carefully open it. You'll see it splits into TWO halves (dicot). Open a maize seed - it stays as ONE piece (monocot)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Leaf Detective</div>
                <p>Look at a grass blade - the veins run parallel (straight lines). Look at a mango leaf - the veins form a net-like pattern. That's how you can tell without seeing the seeds!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-simple"></i> Quick Guide</div>
                <p>Monocot = Grass-like leaves (parallel lines). Dicot = Branching veins (net pattern).</p>
            </div>
        `,
        taskInstructions: "Classify leaves and seeds as monocot or dicot based on their characteristics.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Seed Test</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe the seeds shown by your teacher. Draw and label them:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Maize Seed (Monocot):</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>How many parts? ___________</div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>Bean Seed (Dicot):</strong>
                            <div class="drawing-area" style="height: 80px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>How many parts? ___________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Discovery Lab - Leaf Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Examine the leaves your teacher gives you. Classify each as Monocot or Dicot based on vein patterns:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Leaf Sample</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Vein Pattern (Parallel or Net-like)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Monocot or Dicot?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Grass leaf</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Mango leaf</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Maize leaf</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Hibiscus leaf</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">___________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Leaf Guide</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a "Leaf Guide" showing the difference between monocot and dicot leaves:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Monocot Leaf</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>Veins: <u>Parallel</u></div>
                            <div>Example: ___________</div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px; text-align: center;">
                            <strong>Dicot Leaf</strong>
                            <div class="drawing-area" style="height: 100px; border: 1px dashed #ccc; margin-top: 5px;"></div>
                            <div>Veins: <u>Net-like</u></div>
                            <div>Example: ___________</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Quick Check</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Is a grass plant a monocot or dicot? How can you tell?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find two different leaves outside your home. Draw each leaf and label whether it has parallel veins (monocot) or net-like veins (dicot).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Plant Classification",
        subtopic: "Why Plants Matter (Importance)",
        lessonContent: `
            <p>Today we'll explore why plants - both flowering and non-flowering - are so important to us and our planet!</p>
            <p><strong>Key Question:</strong> Why should we protect all types of plants, even ones without flowers?</p>
            <p><strong>Introduction:</strong> Plants are essential for life on Earth. They give us oxygen, food, medicine, and so much more. Let's learn about the many benefits of plants!</p>
            <p><strong>The Benefit Web - How Plants Help Us:</strong></p>
            <ol>
                <li><strong>Oxygen:</strong> All plants release oxygen through photosynthesis. We need oxygen to breathe!</li>
                <li><strong>Health (Medicine):</strong> Many plants are used for traditional medicine
                    <ul>
                        <li>Aloe vera (non-flowering) helps heal burns</li>
                        <li>Neem tree (flowering) has many medicinal uses</li>
                    </ul>
                </li>
                <li><strong>Income (Money):</strong> Farmers sell flowering crops like maize, beans, and vegetables at the market. People also sell ornamental flowers for decoration.</li>
                <li><strong>Food:</strong> Flowering plants give us fruits, vegetables, grains, and beans</li>
                <li><strong>Beauty (Aesthetic):</strong> We use flowering plants to make our homes and schools beautiful</li>
                <li><strong>Homes for Animals:</strong> Plants provide shelter for birds, insects, and other creatures</li>
            </ol>
            <p><strong>Did You Know?</strong> Even mosses and ferns (non-flowering plants) are important! They help prevent soil erosion and provide homes for tiny insects.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Farmer's Income</div>
                <p>Farmers grow flowering plants like maize, beans, tomatoes, and groundnuts to sell at the market. These crops feed families and earn money for school fees and supplies!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-heartbeat"></i> Medicine from Plants</div>
                <p>Many traditional medicines come from plants. The bark of the cinchona tree gives us medicine for malaria. Aloe vera gel from leaves heals burns and cuts.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lungs"></i> Oxygen Factories</div>
                <p>One large tree can produce enough oxygen for four people every day! That's why planting trees is so important for our planet.</p>
            </div>
        `,
        taskInstructions: "Create a benefit web showing how plants help humans and the environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Benefit Web</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the benefit web by adding ways plants help us:
                    <div style="text-align: center; margin-top: 10px;">
                        <div style="border: 2px solid #4CAF50; border-radius: 50%; width: 80px; height: 80px; display: inline-flex; align-items: center; justify-content: center; background-color: #E8F5E9; margin-bottom: 20px;">
                            <strong>PLANTS</strong>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 400px; margin: 0 auto;">
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Oxygen</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Medicine</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Food</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Income</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Beauty</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                            <div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px;">
                                <div style="height: 50px; border-bottom: 1px dashed #ccc;">Animal Homes</div>
                                <div class="answer-space" style="height: 40px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparing Importance</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Which type of plant is most important for a farmer's income?</strong></div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 15px;"><strong>Which type of plant is most important for a garden's beauty?</strong></div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 15px;"><strong>Why are non-flowering plants like mosses and ferns still important?</strong></div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Protect Our Plants</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short paragraph explaining why it is important to protect all plants - even non-flowering ones like mosses and ferns:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Poster Design</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Create a "Why Plants Matter" poster showing at least three ways plants help us:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px solid #4CAF50;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult at home: What is your favorite plant and why? Write their answer and share it with the class on Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek8);
    console.log("grade4-science-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek8);
    console.log("grade4-science-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek8',
        metadata: grade4ScienceWeek8.metadata,
        days: grade4ScienceWeek8
    });
    console.log("grade4-science-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek8 = grade4ScienceWeek8;
console.log("grade4-science-week8.js loaded and registered successfully");