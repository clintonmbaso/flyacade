// Grade Middle - Term 2 Week 10 Data
const gradeMiddleWeek10 = {
    metadata: {
        grade: "middle",
        subject: "Mathematics & Science",
        term: 2,
        week: 10,
        title: "Weather Observations & Climate Change Basics",
        description: "Observing weather patterns, understanding seasonal changes, cloud formation, drought effects, and the importance of trees for our climate"
    },
    
    monday: {
        subject: "Science",
        topic: "Weather Observations",
        subtopic: "Watching the Sky – Recording Weather Conditions",
        lessonContent: `
            <p>Welcome to our week on weather and climate! Today we'll become weather observers and learn to record what we see in the sky.</p>
            <p><strong>Key Question:</strong> What is the weather like today, and how can we describe it?</p>
            <p><strong>Introduction:</strong> Weather is what's happening in the sky and air around us. It changes from day to day. Scientists called meteorologists study weather to help us know what to wear and how to plan our day.</p>
            <p><strong>Three Main Weather Types We'll Observe:</strong></p>
            <ol>
                <li><strong>Sunny:</strong> Bright sunshine, few or no clouds, warm temperatures</li>
                <li><strong>Cloudy:</strong> Sky is covered with clouds, little or no direct sunshine</li>
                <li><strong>Rainy:</strong> Water falls from clouds as raindrops</li>
            </ol>
            <p><strong>How to Observe Weather:</strong></p>
            <ul>
                <li>Look up at the sky – what do you see?</li>
                <li>Feel the air – is it warm or cool?</li>
                <li>Listen – do you hear thunder or raindrops?</li>
                <li>Look at the ground – is it wet or dry?</li>
            </ul>
            <p><strong>Why Record Weather?</strong> Keeping track of weather helps us see patterns and understand our environment better!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunny Day Example</div>
                <p>"Today is sunny. I can see my shadow on the ground. The sky is blue with only a few small white clouds. It feels warm outside."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud"></i> Cloudy Day Example</div>
                <p>"Today is cloudy. Grey clouds cover most of the sky. I cannot see the sun. It feels cooler than yesterday."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Rainy Day Example</div>
                <p>"Today is rainy. Water is falling from dark grey clouds. The ground is wet. I can hear the sound of raindrops."</p>
            </div>
        `,
        taskInstructions: "Observe today's weather and record it on a basic chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Today's Weather Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Go outside or look out the window. Observe the sky and answer:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What color is the sky? _________</div>
                        <div>Are there clouds? Yes / No</div>
                        <div>If yes, what color are the clouds? _________</div>
                        <div>Is the sun visible? Yes / No</div>
                        <div>Is it raining right now? Yes / No</div>
                        <div>How does the air feel? (circle one): Hot / Warm / Cool / Cold</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weather Chart Recording</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Record today's weather on your weekly chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Day</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Weather (Sunny/Cloudy/Rainy)</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Draw a Symbol</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Monday</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">☐</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Tuesday</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">☐</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Wednesday</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">☐</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Thursday</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">☐</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd;">Friday</td>
                                <td style="padding: 10px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">☐</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Weather Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw what the sky looks like today:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Look at the sky tonight before bed. Is it clear or cloudy? Can you see any stars? Write one sentence about what you observe.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Science & Art Integration",
        topic: "Seasonal Changes",
        subtopic: "Changing Pictures – Same Field, Different Seasons",
        lessonContent: `
            <p>Today we'll discover how the exact same place can look very different depending on the season!</p>
            <p><strong>Key Question:</strong> How does a field change from summer to winter?</p>
            <p><strong>Introduction:</strong> Seasons are periods of the year with different weather patterns. In many places, there are four seasons: Spring, Summer, Autumn (Fall), and Winter. Each season brings different temperatures, rainfall, and changes to plants and animals.</p>
            <p><strong>How a Field Changes with Seasons:</strong></p>
            <ul>
                <li><strong>Spring:</strong> New plants grow, flowers bloom, grass turns green</li>
                <li><strong>Summer:</strong> Plants are tall and green, crops grow, very sunny</li>
                <li><strong>Autumn (Fall):</strong> Leaves change color (yellow, orange, red), some plants dry out</li>
                <li><strong>Winter:</strong> Many plants stop growing, some fields look brown or bare, possibly snow</li>
            </ul>
            <p><strong>Why Do Seasons Happen?</strong> The Earth tilts as it travels around the sun. Different parts of Earth get more or less sunlight at different times of the year.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Summer Field</div>
                <p>In summer, the field is full of green grass and wildflowers. Bees and butterflies visit the flowers. The sun is bright and warm.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Autumn Field</div>
                <p>In autumn, the leaves on trees around the field turn orange and red. Some plants have finished growing and turned brown.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snowflake"></i> Winter Field</div>
                <p>In winter, the field looks very different. Many plants have died back. The ground might be bare, brown, or covered in white snow.</p>
            </div>
        `,
        taskInstructions: "Draw the same field during two different seasons and compare your drawings.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Summer Field Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a picture of a field during SUMMER:
                    <div style="margin-left: 20px; margin-top: 5px; font-size: 14px; color: #666;">Include: green grass, sun, maybe flowers or crops</div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4CAF50;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Winter Field Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw the SAME field during WINTER:
                    <div style="margin-left: 20px; margin-top: 5px; font-size: 14px; color: #666;">Include: bare trees, brown grass, maybe snow or grey sky</div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4CAF50;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Compare Your Drawings</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Answer these questions about your two drawings:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What is the same in both pictures? _________________________________</div>
                        <div style="margin-top: 10px;">What is different? _________________________________</div>
                        <div style="margin-top: 10px;">Which season do you like better? Why? _________________________________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a photo of a place near your home. Imagine how it would look in a different season. Describe the differences in 2-3 sentences.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Weather Science",
        subtopic: "Why Weather Changes – Clouds and Rain",
        lessonContent: `
            <p>Today we'll learn the science behind clouds and why rain falls from them!</p>
            <p><strong>Key Question:</strong> How do clouds form, and why does rain fall?</p>
            <p><strong>Introduction:</strong> Have you ever wondered where clouds come from? Clouds are made of tiny water droplets or ice crystals floating in the air. Let's learn how they form!</p>
            <p><strong>How Clouds Form (The Water Cycle):</strong></p>
            <ol>
                <li><strong>Evaporation:</strong> The sun heats water in oceans, lakes, and rivers. Some water turns into invisible water vapor and rises into the air.</li>
                <li><strong>Condensation:</strong> As water vapor rises, the air gets colder. The water vapor turns back into tiny liquid water droplets, sticking together around tiny dust particles.</li>
                <li><strong>Cloud Formation:</strong> Millions of these tiny droplets collect together to form a cloud!</li>
            </ol>
            <p><strong>Why Rain Falls:</strong></p>
            <ul>
                <li>Inside a cloud, tiny water droplets bump into each other and stick together</li>
                <li>They grow bigger and heavier</li>
                <li>When they become too heavy to stay floating in the air, they fall as rain</li>
            </ul>
            <p><strong>Types of Clouds:</strong> Some clouds are white and fluffy (fair weather), others are dark grey (rain coming!).</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hot-tub"></i> Evaporation Example</div>
                <p>After it rains, puddles disappear on a sunny day. The water isn't gone - it evaporated into the air as invisible water vapor!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shower"></i> Rain Example</div>
                <p>A dark grey rain cloud is full of water droplets that have grown too heavy. When they fall, we get rain. Listen - can you hear the drops?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-glass-whiskey"></i> Classroom Demo</div>
                <p>Watch a glass of cold water on a warm day. Water droplets form on the outside - that's condensation! The same thing happens high in the sky.</p>
            </div>
        `,
        taskInstructions: "Explain cloud formation and the water cycle in simple steps.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Water Cycle Steps</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Put the steps of cloud formation in order (1, 2, 3):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Water vapor turns into tiny droplets (condensation)</div>
                        <div>___ Sun heats water, turning it into invisible vapor (evaporation)</div>
                        <div>___ Millions of droplets form a cloud</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Explain</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture showing how rain forms:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> In your own words, explain why rain falls from clouds:
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Cloud Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Look at the clouds outside. Describe what you see:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>What color are the clouds? _________</div>
                        <div>Do they look fluffy or flat? _________</div>
                        <div>Do you think it will rain soon? Why or why not? _________</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Watch the sky for 10 minutes. Draw any clouds you see. Write one sentence about their color and shape.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Science & Environmental Studies",
        topic: "Climate Effects",
        subtopic: "Local Environment Changes – When There Is No Rain",
        lessonContent: `
            <p>Today we'll discuss what happens when there is no rain for a very long time - a condition called drought.</p>
            <p><strong>Key Question:</strong> What happens to the environment when there is no rain?</p>
            <p><strong>Introduction:</strong> Rain is essential for all living things. Plants, animals, and people need water to survive. But sometimes, an area gets much less rain than normal for a long time.</p>
            <p><strong>What Happens During a Drought (No Rain):</strong></p>
            <ul>
                <li><strong>Dry Ground:</strong> Soil becomes hard, cracked, and dusty</li>
                <li><strong>Wilted Plants:</strong> Plants turn brown, droop, and may die</li>
                <li><strong>Less Food:</strong> Crops cannot grow, farmers struggle</li>
                <li><strong>Thirsty Animals:</strong> Animals have less water to drink</li>
                <li><strong>Dust and Wind:</strong> Dry soil can blow away as dust</li>
                <li><strong>Fire Risk:</strong> Dry plants can catch fire more easily</li>
            </ul>
            <p><strong>How Drought Affects People:</strong></p>
            <ul>
                <li>Less water for drinking, cooking, and bathing</li>
                <li>Less water for farming - food becomes expensive</li>
                <li>Some communities must bring water from far away</li>
            </ul>
            <p><strong>What Can We Do?</strong> Conserve water! Turn off taps, fix leaks, and don't waste water.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> No Rain Example</div>
                <p>Imagine a garden with beautiful green plants. If no rain comes for two months, the soil becomes hard and cracked. The plants turn brown and the flowers dry up.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Water Conservation</div>
                <p>In places with drought, people collect rainwater, take shorter showers, and water plants only in the early morning or evening to save water.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-frog"></i> Animals Suffer Too</div>
                <p>During a drought, ponds and rivers can dry up. Fish, frogs, and other animals that live in water have nowhere to go.</p>
            </div>
        `,
        taskInstructions: "Discuss and describe the effects of drought on the local environment.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: What Happens to the Ground?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and describe the ground during a drought (no rain for a long time):
                    <div class="drawing-area" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Effects on Plants and Animals</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List two ways drought affects plants:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List two ways drought affects animals:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Discussion Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What are two things people can do to save water during a drought?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Compare and Contrast</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How is a rainy day different from a drought day? Write two differences:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask an adult at home: Has there ever been a drought where we live? What happened? Write down what you learn.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science & Environmental Action",
        topic: "Caring for Our Environment",
        subtopic: "Caring for Trees – Why Planting Trees Helps Our Local Climate",
        lessonContent: `
            <p>Today we'll learn why trees are so important for our local climate and how planting trees helps keep our school grounds green!</p>
            <p><strong>Key Question:</strong> Why should we plant and care for trees?</p>
            <p><strong>Introduction:</strong> Trees are like superheroes for our environment! They help keep our air clean, provide shade, and even affect local weather patterns.</p>
            <p><strong>How Trees Help Our Local Climate:</strong></p>
            <ul>
                <li><strong>Provide Shade:</strong> Trees cool the ground beneath them, making our schoolyard more comfortable</li>
                <li><strong>Clean the Air:</strong> Trees absorb carbon dioxide and release oxygen for us to breathe</li>
                <li><strong>Prevent Drought:</strong> Tree roots help soil hold water, reducing dryness</li>
                <li><strong>Stop Soil from Blowing Away:</strong> Roots hold soil in place, preventing dust</li>
                <li><strong>Homes for Animals:</strong> Birds and insects live in trees</li>
                <li><strong>Reduce Heat:</strong> Trees make our local area cooler on hot days</li>
            </ul>
            <p><strong>How We Can Care for Trees at School:</strong></p>
            <ul>
                <li>Water young trees regularly</li>
                <li>Don't break branches or peel bark</li>
                <li>Keep the area around trees clean</li>
                <li>Plant new trees when possible</li>
                <li>Tell others why trees matter!</li>
            </ul>
            <p><strong>Did You Know?</strong> A single large tree can provide enough oxygen for four people to breathe every day!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-low"></i> Cooling Effect</div>
                <p>On a hot sunny day, the temperature under a tree can be 5-10 degrees cooler than in the open. That's why sitting under a tree feels so nice!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> One Tree, Many Benefits</div>
                <p>A single oak tree can produce thousands of acorns (seeds), provide homes for hundreds of insects and birds, and live for over 100 years!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> School Action</div>
                <p>When students plant trees around their school, they make the grounds greener, shadier, and more beautiful for everyone to enjoy.</p>
            </div>
        `,
        taskInstructions: "Discuss why trees matter and create a plan to care for trees at school.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Why Trees Matter</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List three ways trees help our local climate:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Tree Care Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Create a poster showing how to care for trees at school. Include at least 3 rules:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4CAF50;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Weekly Weather Review</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Complete your weekly weather chart (from Monday) with the weather for each day this week:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Day</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Weather</th>
                            </tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Monday</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Tuesday</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Wednesday</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Thursday</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                            <tr><td style="padding: 8px; border: 1px solid #ddd;">Friday</td><td style="padding: 8px; border: 1px solid #ddd;">_________</td></tr>
                         </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one thing you will do this week to help care for trees or save water?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture of a tree at your school or home. Write one sentence about why that tree is important. If you can, plant a seed or small plant this weekend!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(gradeMiddleWeek10);
    console.log("grade-middle-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(gradeMiddleWeek10);
    console.log("grade-middle-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'gradeMiddleWeek10',
        metadata: gradeMiddleWeek10.metadata,
        days: gradeMiddleWeek10
    });
    console.log("grade-middle-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.gradeMiddleWeek10 = gradeMiddleWeek10;
console.log("grade-middle-week10.js loaded and registered successfully");