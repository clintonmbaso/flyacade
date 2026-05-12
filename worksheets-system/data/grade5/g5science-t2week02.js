// Grade 5 Science - Term 2 Week 2 Data
const grade5ScienceWeek2 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 2,
        title: "Climate Change",
        description: "Understanding what climate change is, its causes, and its effects on wildlife and human life"
    },
    
    monday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "What is Climate Change?",
        lessonContent: `
            <p>Welcome to our exploration of climate change! Today we'll learn the difference between weather and climate, and what climate change really means.</p>
            <p><strong>Key Question:</strong> What is the difference between weather and climate?</p>
            <p><strong>Introduction:</strong> Have you ever noticed that some years have hotter summers than others? Climate change is about long-term shifts in temperature and weather patterns around the world.</p>
            <p><strong>Weather vs. Climate:</strong></p>
            <ul>
                <li><strong>Weather:</strong> What is happening outside RIGHT NOW (rain, sun, clouds, temperature today)</li>
                <li><strong>Climate:</strong> The average weather pattern over MANY years (what a place is usually like)</li>
            </ul>
            <p><strong>The Greenhouse Effect (Simple Explanation):</strong></p>
            <p>Think of a car sitting in the sun with the windows closed. The glass lets heat in but doesn't let it all escape. The Earth's atmosphere works similarly - certain gases trap heat like the car windows. This is natural and necessary, but too much trapped heat causes problems.</p>
            <p><strong>Climate Change Defined:</strong> A long-term shift in global or regional climate patterns. Even a small rise of 1 or 2 degrees can change the whole world!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> The Car Analogy</div>
                <p>On a sunny day, a car with windows up gets much hotter inside than outside. The glass lets sunlight in but traps the heat. Greenhouse gases work the same way around Earth!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Weather vs. Climate</div>
                <p>"It's raining today" is weather. "Summers here are usually hot and dry" is climate. Climate is what you expect; weather is what you get!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Just 2 Degrees</div>
                <p>A 2°C rise might not sound like much, but during the last Ice Age, Earth was only about 5°C colder than today - and covered in ice!</p>
            </div>
        `,
        taskInstructions: "Draw two pictures comparing a healthy Earth to a warming Earth.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather vs. Climate Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What is the weather like where you live today?
                    <div class="answer-space" style="height: 50px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> How would you describe the typical climate of your area across the whole year?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Healthy Earth vs. Warm Earth Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a "Healthy Earth" with a balanced atmosphere:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #4CAF50;"></div>
                    <p style="font-size: 12px; color: #666;">Show a thin, balanced layer of greenhouse gases</p>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a "Warming Earth" with a thick layer of greenhouse gases:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #FF9800;"></div>
                    <p style="font-size: 12px; color: #666;">Show a thick layer trapping too much heat</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think even a small rise in temperature (1-2 degrees) can cause big changes around the world?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member or neighbor: 'Has the weather or seasons changed where you live since you were my age?' Write down what they tell you.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "Why is it Happening? (Causes)",
        lessonContent: `
            <p>Today we'll investigate the human activities that are making Earth's atmosphere get thicker with greenhouse gases!</p>
            <p><strong>Key Question:</strong> What are humans doing to cause climate change?</p>
            <p><strong>Review:</strong> Remember the "Warming Earth" drawing from Monday? The thick layer of gases is getting thicker because of human activities.</p>
            <p><strong>Main Causes of Climate Change:</strong></p>
            
            <p><strong>1. Deforestation (Cutting Down Trees)</strong></p>
            <ul>
                <li>Trees "breathe in" carbon dioxide (a greenhouse gas) and store it</li>
                <li>When we cut down forests, fewer trees are left to remove carbon dioxide from the air</li>
                <li>Burning trees releases stored carbon back into the atmosphere</li>
            </ul>
            
            <p><strong>2. Burning (Indiscriminate Burning of Bushes/Trash)</strong></p>
            <ul>
                <li>When we burn bushes, trash, or crop residue, we release smoke and greenhouse gases</li>
                <li>This is common in many regions and adds significantly to the problem</li>
            </ul>
            
            <p><strong>3. Emissions (Cars, Factories, Electricity)</strong></p>
            <ul>
                <li>Cars and trucks burn fuel and release exhaust gases</li>
                <li>Factories and power plants burn coal, oil, or gas for energy</li>
                <li>Even the electricity we use at home often comes from burning fuels</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Trees as Carbon Sponges</div>
                <p>One large tree can absorb about 22 kilograms (48 pounds) of carbon dioxide per year. A whole forest removes tons of greenhouse gases from the air!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> Bush Burning</div>
                <p>In many farming communities, people burn dry bushes to clear land. The smoke releases carbon that was stored in plants, plus other harmful gases.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-industry"></i> Everyday Emissions</div>
                <p>Every time you ride in a car, take a bus, or use electricity from a power plant, you are using energy that may come from burning fossil fuels.</p>
            </div>
        `,
        taskInstructions: "Create a 'Cause Map' showing the main causes of climate change.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cause Map Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Create a "Cause Map" in the space below:
                    <div style="text-align: center; margin: 10px 0;">
                        <div style="border: 2px solid #333; border-radius: 50%; width: 120px; height: 120px; display: inline-flex; align-items: center; justify-content: center; background-color: #f0f0f0;">
                            <strong>CLIMATE<br>CHANGE</strong>
                        </div>
                    </div>
                    <div>Draw arrows from "CLIMATE CHANGE" to three cause bubbles:</div>
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                    <div style="margin-top: 10px;">Label the bubbles: <strong>Cutting Trees</strong> | <strong>Burning Trash/Bushes</strong> | <strong>Car Fumes & Factories</strong></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identifying Local Causes</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which cause of climate change do you see most often in your own community?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How does cutting down trees make climate change worse?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Cause and Effect Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete these sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• When we burn bushes or trash, _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>• If there are more cars on the road, _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                        <div>• When forests are cut down, _________</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Observe your neighborhood. List three things you see that might contribute to climate change (examples: cars, smoke, burning trash).",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "What Happens Next? (Effects)",
        lessonContent: `
            <p>Today we'll analyze how climate change affects animals, weather, and human lives!</p>
            <p><strong>Key Question:</strong> What happens to our world when the Earth gets warmer?</p>
            <p><strong>Three Main Categories of Effects:</strong></p>
            
            <p><strong>1. Weather Extremes</strong></p>
            <ul>
                <li><strong>Hotter Temperatures:</strong> Heatwaves become more common and more intense</li>
                <li><strong>Droughts:</strong> Some places get too little rain, causing crops to fail</li>
                <li><strong>Floods:</strong> Warmer air holds more moisture, leading to heavy rains and floods</li>
                <li><strong>Severe Storms:</strong> Hurricanes and typhoons become stronger and more destructive</li>
            </ul>
            
            <p><strong>2. Effects on Nature (Loss of Habitat)</strong></p>
            <ul>
                <li>Polar bears lose sea ice where they hunt for seals</li>
                <li>Forests dry out and become more likely to burn</li>
                <li>Coral reefs "bleach" and die when water gets too warm</li>
                <li>Animals must move to find food and shelter, but some cannot adapt fast enough</li>
            </ul>
            
            <p><strong>3. Effects on Human Safety & Food</strong></p>
            <ul>
                <li>Severe storms can damage houses, schools, and roads</li>
                <li>Droughts make it hard to grow food, leading to higher prices and hunger</li>
                <li>Floods can contaminate drinking water and cause disease</li>
                <li>Farmers struggle to grow crops when weather patterns change</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-paw"></i> Polar Bears in Trouble</div>
                <p>Polar bears need sea ice to hunt seals. As the Arctic warms, sea ice melts earlier and forms later each year. Bears have less time to hunt and are getting thinner.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Drought and Flood Cycle</div>
                <p>Climate change can cause extreme swings - first the ground bakes dry (drought), then heavy rains cause floods because hard, dry soil can't absorb water quickly.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-home"></i> Storms Get Stronger</div>
                <p>Warmer ocean water gives hurricanes more energy. Scientists have noticed that the strongest storms are becoming even stronger than they used to be.</p>
            </div>
        `,
        taskInstructions: "Write as a 'Future Reporter' describing the effects of climate change.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Story or Photo Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> After looking at the image of a polar bear on melting ice or a farmer in a dry field, write your reaction:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: "The Future Reporter" Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete these three sentences as if you are a news reporter explaining climate change effects:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• "Because of climate change, the animals will..."</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>• "Because of climate change, our weather will..."</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        <div>• "Because of climate change, our farms will..."</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Effect Categorization</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write each effect in the correct category (Weather, Nature, or People):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Loss of habitat for polar bears → <span style="border-bottom: 1px dotted;">_________</span></div>
                        <div>• Droughts damaging crops → <span style="border-bottom: 1px dotted;">_________</span></div>
                        <div>• Stronger hurricanes damaging houses → <span style="border-bottom: 1px dotted;">_________</span></div>
                        <div>• Coral reefs dying → <span style="border-bottom: 1px dotted;">_________</span></div>
                        <div>• More frequent heatwaves → <span style="border-bottom: 1px dotted;">_________</span></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Looking Ahead</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Climate change can feel scary. But understanding the causes helps us find solutions. Name one thing you think could help "cool down" the Earth:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to learn about climate change even if it's a big problem?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Draw a picture showing one effect of climate change you learned about today. Write one sentence explaining your drawing.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek2);
    console.log("grade5-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek2',
        metadata: grade5ScienceWeek2.metadata,
        days: grade5ScienceWeek2
    });
    console.log("grade5-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek2 = grade5ScienceWeek2;
console.log("grade5-science-week2.js loaded and registered successfully");