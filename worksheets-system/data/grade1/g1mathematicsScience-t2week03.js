// Grade 1 Mathematics & Science - Term 2 Week 3 Data
const grade1MathScienceWeek3 = {
    metadata: {
        grade: 1,
        subject: "Mathematics & Science",
        term: 2,
        week: 3,
        title: "Weather and Climate",
        description: "Identifying weather patterns, comparing conditions, recognizing climate change effects, and adapting through clothing"
    },
    
    monday: {
        subject: "Mathematics & Science",
        topic: "Weather",
        subtopic: "Identifying Patterns of Weather Changes (Cold, Hot, Wet)",
        lessonContent: `
            <p>Welcome to our weather week! Today we'll learn about different kinds of weather and how they change.</p>
            <p><strong>Key Question:</strong> What is weather like outside today?</p>
            <p><strong>Introduction:</strong> Weather is what happens outside every day. Sometimes it's hot, sometimes it's cold, and sometimes it's wet! Let's learn to tell the difference.</p>
            <p><strong>Three Main Weather Patterns:</strong></p>
            <ol>
                <li><strong>Hot Weather:</strong> The sun is bright and strong. You might feel sweaty. The air feels warm on your skin.</li>
                <li><strong>Cold Weather:</strong> The air feels chilly. You might see your breath. Your fingers and nose might feel cold.</li>
                <li><strong>Wet Weather:</strong> Rain is falling from the clouds. Everything gets wet. You might see puddles on the ground.</li>
            </ol>
            <p><strong>Weather Changes:</strong> Weather can change from day to day. Today might be hot, but tomorrow could be cold or rainy!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Hot Weather Signs</div>
                <p>When it's hot, people wear shorts and t-shirts. Dogs might pant. You might want a cold drink or ice cream!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-snowflake"></i> Cold Weather Signs</div>
                <p>When it's cold, people wear jackets and hats. You might see steam coming from your hot chocolate. Trees might lose their leaves.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Wet Weather Signs</div>
                <p>When it's raining, you see dark clouds. You hear raindrops hitting the roof. People use umbrellas and raincoats.</p>
            </div>
        `,
        taskInstructions: "Observe weather, draw pictures, and match weather to activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look outside. What is the weather like today?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Circle one: ☀️ Hot / ❄️ Cold / ☔ Wet</div>
                        <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Weather</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of what the sky looks like today:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Match the Weather</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a line from the weather to what you might do:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>☀️ Hot weather      →     🏊 Go swimming</div>
                        <div>❄️ Cold weather     →     ⛄ Build a snowman</div>
                        <div>☔ Wet weather      →     ☂️ Use an umbrella</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Weather Patterns</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Yesterday was sunny and hot. Today is rainy. What changed?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Look at the sky tonight. Draw what you see. Is it clear or cloudy?",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics & Science",
        topic: "Weather",
        subtopic: "Comparing and Contrasting Different Weather Conditions",
        lessonContent: `
            <p>Today we'll compare different kinds of weather and learn how they are the same and different!</p>
            <p><strong>Key Question:</strong> How is hot weather different from cold weather? How is rain different from sun?</p>
            <p><strong>Comparing Weather:</strong> When we compare, we look at how things are the SAME. When we contrast, we look at how things are DIFFERENT.</p>
            <p><strong>Hot vs. Cold Weather:</strong></p>
            <ul>
                <li><strong>Same:</strong> Both happen outside. Both affect what we wear. Both can change day to day.</li>
                <li><strong>Different:</strong> Hot weather makes us sweat; cold weather makes us shiver. Hot needs sunscreen; cold needs jackets.</li>
            </ul>
            <p><strong>Sunny vs. Rainy Weather:</strong></p>
            <ul>
                <li><strong>Same:</strong> Both are types of weather. Both come from clouds.</li>
                <li><strong>Different:</strong> Sunny is dry; rainy is wet. Sunny has no clouds; rainy has dark clouds.</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Same but Different</div>
                <p>Both hot and cold days can be windy! Wind can make a hot day feel cooler and a cold day feel even colder.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Temperature Feelings</div>
                <p>On a hot day, we say "I'm boiling!" On a cold day, we say "I'm freezing!" These are opposites!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Mixed Weather</div>
                <p>Sometimes we have "sun showers" - rain falling while the sun is still shining! That's a special kind of weather.</p>
            </div>
        `,
        taskInstructions: "Use Venn diagrams and T-charts to compare weather conditions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Hot vs. Cold - Venn Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Compare hot weather and cold weather:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px; text-align: center;">
                        <div style="border: 1px solid #ccc;">
                            <strong>☀️ Hot</strong>
                            <div class="drawing-area" style="height: 100px; border: none;"></div>
                        </div>
                        <div style="border: 1px solid #ccc;">
                            <strong>Both</strong>
                            <div class="drawing-area" style="height: 100px; border: none;"></div>
                        </div>
                        <div style="border: 1px solid #ccc;">
                            <strong>❄️ Cold</strong>
                            <div class="drawing-area" style="height: 100px; border: none;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sunny vs. Rainy T-Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write or draw how sunny and rainy weather are different:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>☀️ Sunny Weather</strong>
                            <div class="answer-space" style="height: 100px;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 10px;">
                            <strong>☔ Rainy Weather</strong>
                            <div class="answer-space" style="height: 100px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What Would You Do?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Circle the activity for each weather type:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Hot day:  (Fly a kite / Go swimming)</div>
                        <div>Cold day: (Eat ice cream / Drink hot chocolate)</div>
                        <div>Rainy day: (Play outside / Read a book inside)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Your Favorite Weather</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is your favorite weather? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member: Do they prefer hot or cold weather? Draw their answer.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Mathematics & Science",
        topic: "Climate",
        subtopic: "Recognizing Effects of Climate Change (Floods and Droughts)",
        lessonContent: `
            <p>Today we'll learn about how the Earth's weather is changing and what happens when we get too much or too little rain.</p>
            <p><strong>Key Question:</strong> What happens when it rains too much or not enough?</p>
            <p><strong>What is Climate Change?</strong> The Earth's weather patterns are changing. Some places are getting hotter. Some places are getting more storms. This is called climate change.</p>
            <p><strong>Floods:</strong></p>
            <ul>
                <li>A flood happens when there is too much rain</li>
                <li>Water covers the ground where people walk and drive</li>
                <li>Water can go inside people's homes</li>
                <li>Floods can be dangerous</li>
            </ul>
            <p><strong>Droughts:</strong></p>
            <ul>
                <li>A drought happens when there is no rain for a very long time</li>
                <li>The ground becomes dry and cracks</li>
                <li>Plants cannot grow without water</li>
                <li>People and animals may not have enough water to drink</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Flood Example</div>
                <p>When a flood happens, streets look like rivers! Fish might swim where cars usually drive. People use boats to get around.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Drought Example</div>
                <p>During a drought, grass turns brown and crunchy. Lakes can shrink or disappear. Farmers worry because their crops cannot grow.</p>
            </div>
            <div class="example-box">
                <div class="exercise-title"><i class="fas fa-heart"></i> Helping the Earth</div>
                <p>We can help by not wasting water. Turn off the faucet when brushing your teeth! Every drop counts.</p>
            </div>
        `,
        taskInstructions: "Identify flood and drought pictures, discuss effects, and learn water conservation.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Flood or Drought?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look at each picture description. Write "Flood" or "Drought":
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Water is covering the streets and lawns: _________</div>
                        <div>B. The ground is cracked and plants are dead: _________</div>
                        <div>C. People are using sandbags to keep water out: _________</div>
                        <div>D. There has been no rain for three months: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw the Difference</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a picture of a flood on one side and a drought on the other:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>🌊 Flood</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="border: 1px solid #ccc; padding: 5px; text-align: center;">
                            <strong>🔥 Drought</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Water Saving Tips</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw or write two ways you can save water at home:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Helping Others</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> How can we help people who are in a flood or a drought?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "With a family member, find one way to save water at home tonight. Draw what you did.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Mathematics & Science",
        topic: "Weather Adaptation",
        subtopic: "Demonstrating Adaptation to Weather Through Appropriate Clothing",
        lessonContent: `
            <p>Today we'll learn how to dress for different kinds of weather to stay safe and comfortable!</p>
            <p><strong>Key Question:</strong> What should you wear when it's hot? Cold? Rainy?</p>
            <p><strong>Why Clothing Matters:</strong> Wearing the right clothes for the weather helps our bodies stay healthy. We won't get too hot, too cold, or too wet.</p>
            <p><strong>Clothes for Hot Weather:</strong></p>
            <ul>
                <li>Light colors (they don't absorb as much heat)</li>
                <li>Thin fabrics like cotton</li>
                <li>Shorts, t-shirts, sandals</li>
                <li>Hat and sunglasses to protect from the sun</li>
            </ul>
            <p><strong>Clothes for Cold Weather:</strong></p>
            <ul>
                <li>Layers (shirt, sweater, jacket)</li>
                <li>Warm hat, gloves, scarf</li>
                <li>Thick socks and boots</li>
                <li>Long pants and long sleeves</li>
            </ul>
            <p><strong>Clothes for Rainy Weather:</strong></p>
            <ul>
                <li>Raincoat or waterproof jacket</li>
                <li>Umbrella</li>
                <li>Rain boots (wellies)</li>
                <li>Waterproof pants (optional)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hat-cowboy"></i> Sun Protection</div>
                <p>On hot sunny days, a wide hat protects your face and neck from the sun. Sunglasses protect your eyes from bright light!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mitten"></i> Keeping Warm</div>
                <p>Did you know we lose most of our body heat from our head? That's why wearing a warm hat in cold weather is so important!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella"></i> Stay Dry</div>
                <p>Rain boots keep your feet dry so you can splash in puddles without getting cold, wet socks!</p>
            </div>
        `,
        taskInstructions: "Match clothing to weather, draw outfits, and create a weather clothing chart.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Match the Clothing to the Weather</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line from each clothing item to the correct weather:
                    <div style="margin-left: 20px; margin-top: 10px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            🧥 Winter jacket →<br>
                            🩳 Shorts →<br>
                            ☂️ Umbrella →<br>
                            🧣 Scarf →<br>
                            🕶️ Sunglasses →
                        </div>
                        <div>
                            ☀️ Hot day<br>
                            ❄️ Cold day<br>
                            ☔ Rainy day<br>
                            ❄️ Cold day<br>
                            ☀️ Hot day
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Dress for the Weather</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw yourself wearing the right clothes for each weather:
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 10px;">
                        <div style="text-align: center;">
                            <strong>☀️ Hot</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="text-align: center;">
                            <strong>❄️ Cold</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                        <div style="text-align: center;">
                            <strong>☔ Rainy</strong>
                            <div class="drawing-area" style="height: 120px; border: 1px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: What's Wrong With This Picture?</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> The person is wearing a swimsuit in the snow. Is this safe? What should they wear instead?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: My Weather Clothing Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw or list what you will wear tomorrow based on the weather:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at tomorrow's weather forecast with your family. Lay out your clothes for tomorrow that match the weather.",
        homeworkDue: "Friday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade1MathScienceWeek3);
    console.log("grade1-mathscience-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade1MathScienceWeek3);
    console.log("grade1-mathscience-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade1MathScienceWeek3',
        metadata: grade1MathScienceWeek3.metadata,
        days: grade1MathScienceWeek3
    });
    console.log("grade1-mathscience-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade1MathScienceWeek3 = grade1MathScienceWeek3;
console.log("grade1-mathscience-week3.js loaded and registered successfully");