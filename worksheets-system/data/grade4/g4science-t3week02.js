// Grade 4 Science - Term 3 Week 2 Data
const grade4ScienceWeek2 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 3,
        week: 2,
        title: "The Nature of Matter",
        description: "Investigating the three states of matter, changes of state, and solubility of substances"
    },
    
    monday: {
        subject: "Science",
        topic: "Nature of Matter",
        subtopic: "What is Matter? (The Three States)",
        lessonContent: `
            <p>Welcome to our exploration of matter! Today we'll discover that everything around us is made of matter.</p>
            <p><strong>Key Questions:</strong> Is air real even if we can't see it? What is the difference between a stone and the water you drink?</p>
            <p><strong>Introduction:</strong> Matter is anything that has mass and takes up space. Everything you can see, touch, smell, or even breathe is matter!</p>
            <p><strong>The Three States of Matter:</strong></p>
            <ol>
                <li><strong>Solids:</strong> Have a fixed shape and volume. Examples: desk, stone, book, pencil, chair</li>
                <li><strong>Liquids:</strong> Flow and take the shape of their container. Examples: water, juice, cooking oil, milk</li>
                <li><strong>Gases:</strong> Fill whatever space they are in. Examples: air in a balloon, steam from a kettle, oxygen</li>
            </ol>
            <p><strong>Key Fact:</strong> Even though we can't see air, it is still matter! Air takes up space and has weight.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balloon"></i> The Balloon Test</div>
                <p>When you blow up a balloon, you fill it with air. The balloon gets bigger because air (gas) takes up space. If you weigh a deflated balloon and an inflated one, the inflated one is heavier - proving air has weight!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cube"></i> Solid Shape</div>
                <p>A stone keeps its shape no matter where you put it. If you move a rock from the ground to a table, it still looks like the same rock. That's a property of solids!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Liquid Flow</div>
                <p>Water takes the shape of whatever container it's in. Pour water into a round bowl - it becomes round. Pour it into a square cup - it becomes square. Liquids always flow to fill the bottom of their container.</p>
            </div>
        `,
        taskInstructions: "Go on a matter hunt around the school and categorize objects into solids, liquids, and gases.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Matter Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Explore your classroom or school environment. Find and list 3 examples for each state of matter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Solids (Fixed shape)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Liquids (Takes shape of container)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Gases (Fills any space)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">1.<br>2.<br>3.</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">1.<br>2.<br>3.</td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 120px; vertical-align: top;">1.<br>2.<br>3.</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Properties of Matter</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Answer these questions about matter:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Does a solid keep its shape or change shape? _______________</div>
                        <div>B. Does a liquid flow or stay still? _______________</div>
                        <div>C. Does a gas take up space? _______________</div>
                        <div>D. Is air matter? Why or why not? _______________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw one example of a solid, one liquid, and one gas. Label each:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find 5 solids, 3 liquids, and 2 gases. Write them in your notebook.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Nature of Matter",
        subtopic: "Changing States (The Magic of Water)",
        lessonContent: `
            <p>Today we'll discover how matter can change from one state to another - just like magic, but it's science!</p>
            <p><strong>Key Question:</strong> What happens to an ice cube when it gets warm? Where does the water from a puddle go?</p>
            <p><strong>How Matter Changes State:</strong></p>
            <ul>
                <li><strong>Melting:</strong> Solid → Liquid (adding heat)</li>
                <li><strong>Freezing:</strong> Liquid → Solid (removing heat/cooling)</li>
                <li><strong>Evaporation:</strong> Liquid → Gas (adding heat)</li>
                <li><strong>Condensation:</strong> Gas → Liquid (cooling)</li>
            </ul>
            <p><strong>Let's Observe Water:</strong></p>
            <ul>
                <li><strong>Solid:</strong> Ice cube, snow, hail</li>
                <li><strong>Liquid:</strong> Drinking water, rain, rivers</li>
                <li><strong>Gas:</strong> Steam, water vapor, clouds</li>
            </ul>
            <p><strong>Key Fact:</strong> Water is special because we can easily see it in all three states in our daily lives!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ice-cream"></i> Melting Ice</div>
                <p>Leave an ice cube on a plate at room temperature. In a few minutes, you'll see a puddle of water. The heat from the air caused the solid ice to melt into liquid water!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-kitchen-set"></i> Steam on a Pot</div>
                <p>When water boils in a pot, you see steam (gas) rising. If you hold a cool lid above the steam, water droplets form on the lid. That's condensation - gas turning back into liquid!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snowflake"></i> Freezing Water</div>
                <p>Put water in an ice cube tray and place it in the freezer. The cold removes heat from the water, turning the liquid into solid ice cubes.</p>
            </div>
        `,
        taskInstructions: "Conduct melting and evaporation experiments, then draw the change of state triangle.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Melting Ice Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe an ice cube as it melts. Record what you see every 2 minutes for 10 minutes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Start time: _______</div>
                        <div>After 2 minutes: _________________________________</div>
                        <div>After 4 minutes: _________________________________</div>
                        <div>After 6 minutes: _________________________________</div>
                        <div>After 8 minutes: _________________________________</div>
                        <div>After 10 minutes: ________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Change of State Triangle</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the "Change of State" triangle showing how water moves between solid, liquid, and gas:
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; color: #999; padding-top: 70px;">[Draw triangle with arrows: Solid ↔ Liquid ↔ Gas]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Vocabulary Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Match each word to its correct meaning:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Melting → _________ (Solid to Liquid / Liquid to Gas)</div>
                        <div>Freezing → _________ (Liquid to Solid / Gas to Liquid)</div>
                        <div>Evaporation → _________ (Liquid to Gas / Solid to Liquid)</div>
                        <div>Condensation → _________ (Gas to Liquid / Liquid to Solid)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What happens to a puddle of water on a hot, sunny day? Which change of state is this?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Put a small amount of water in a dish and leave it in a sunny spot. Observe and record what happens to the water over 24 hours.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Nature of Matter",
        subtopic: "Dissolving Matters (Solubility)",
        lessonContent: `
            <p>Today we'll investigate what happens when we mix different solids with water!</p>
            <p><strong>Key Question:</strong> Why does sugar disappear in tea but sand does not?</p>
            <p><strong>Important Vocabulary:</strong></p>
            <ul>
                <li><strong>Soluble:</strong> A substance that dissolves in a liquid (like sugar in water)</li>
                <li><strong>Insoluble:</strong> A substance that does NOT dissolve in a liquid (like sand in water)</li>
                <li><strong>Dissolve:</strong> When a solid mixes completely with a liquid and seems to disappear</li>
                <li><strong>Mixture:</strong> When you combine two or more substances together</li>
                <li><strong>Pure Substance:</strong> A single substance that is not mixed with anything else</li>
            </ul>
            <p><strong>What Happens When Substances Dissolve?</strong></p>
            <ul>
                <li>The solid breaks into tiny pieces too small to see</li>
                <li>The pieces spread evenly throughout the liquid</li>
                <li>The substance is still there - you can taste it (like salt water)!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-coffee"></i> Sugar in Tea</div>
                <p>When you add sugar to hot tea and stir, the sugar seems to disappear. It actually dissolves! The sugar is still there - that's why the tea tastes sweet.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sand"></i> Sand in Water</div>
                <p>If you mix sand and water, the sand sinks to the bottom. It does NOT dissolve. Sand is insoluble in water. You can see the sand particles clearly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils"></i> Cooking Oil and Water</div>
                <p>Have you noticed that oil floats on top of water? Oil does not dissolve in water. That's why salad dressing separates into layers!</p>
            </div>
        `,
        taskInstructions: "Test different substances to see if they dissolve in water, then sort them into soluble and insoluble.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Dissolving Test</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Predict and test what happens when you add each substance to water:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Substance</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Prediction (Dissolve or Not?)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Result (Dissolve or Not?)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Sugar</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Salt</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Sand</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Maize meal</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Small stones</td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sort Your Results</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Categorize the substances you tested:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4CAF50; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Soluble (Dissolves in water)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Insoluble (Does NOT dissolve in water)</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 100px; vertical-align: top;"></td>
                            </tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Understanding Mixtures</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. What is a mixture? Give an example: _________________________________</div>
                        <div>B. Is sugar water a mixture or a pure substance? ___________________________</div>
                        <div>C. If you mix salt and water, does the salt disappear forever? Explain: ____________</div>
                        <div>D. Name one thing you use at home that dissolves in water: ____________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw two cups of water. Show sugar dissolving in one cup and sand NOT dissolving in the other:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think we stir tea or coffee after adding sugar?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "With a parent's help, test what happens when you add flour to water. Does it dissolve? Record your observation.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek2',
        metadata: grade4ScienceWeek2.metadata,
        days: grade4ScienceWeek2
    });
    console.log("grade4-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek2 = grade4ScienceWeek2;
console.log("grade4-science-week2.js loaded and registered successfully");