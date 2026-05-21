// Grade 4 Social Studies - Term 3 Week 3 Data
const grade4SocialStudiesWeek3 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 3,
        week: 3,
        title: "Weather and Climate",
        description: "Distinguishing between weather and climate, and identifying the elements of weather"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Physical Geography",
        subtopic: "Differentiating Weather and Climate",
        lessonContent: `
            <p>Welcome to our study of weather and climate! Today we'll learn the important difference between these two commonly confused terms.</p>
            <p><strong>Key Question:</strong> Is it weather or climate?</p>
            <p><strong>Introduction:</strong> Have you ever heard someone say, "The climate is changing" or "The weather is nice today"? These words are not the same! Weather describes what happens day-to-day, while climate describes what happens over many years.</p>
            <p><strong>Weather:</strong> The daily changing atmospheric conditions in a specific place.</p>
            <ul>
                <li>Changes from hour to hour and day to day</li>
                <li>Can be sunny one day and rainy the next</li>
                <li>Example: "Today's weather is hot and humid"</li>
                <li>Example: "It will rain this afternoon"</li>
            </ul>
            <p><strong>Climate:</strong> The average weather conditions measured over a long period (usually 30 years or more).</p>
            <ul>
                <li>Changes very slowly over many years</li>
                <li>Describes what a place is usually like</li>
                <li>Example: "Zambia has a tropical climate with wet and dry seasons"</li>
                <li>Example: "The desert climate is very dry"</li>
            </ul>
            <p><strong>Simple Way to Remember:</strong></p>
            <ul>
                <li><strong>Weather</strong> = What you wear TODAY</li>
                <li><strong>Climate</strong> = What clothes are in your CLOSET (what you usually need for that place)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Weather Example</div>
                <p>"This morning it was cloudy, but now the sun is shining!" This describes weather because it changed during the same day.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Climate Example</div>
                <p>"Lusaka has a warm climate with rainy season from November to March." This describes climate because it's the average pattern over many years.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella"></i> Easy Memory Trick</div>
                <p>Weather is your MOOD today (changes quickly). Climate is your PERSONALITY (stays the same over time).</p>
            </div>
        `,
        taskInstructions: "Complete the activities to show you understand the difference between weather and climate.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather or Climate?</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Write "Weather" or "Climate" next to each statement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. It is raining outside right now: _________</div>
                        <div>B. Zambia has three distinct seasons: _________</div>
                        <div>C. Tomorrow will be windy and cold: _________</div>
                        <div>D. The Sahara Desert receives very little rainfall each year: _________</div>
                        <div>E. I need an umbrella today because it's drizzling: _________</div>
                        <div>F. Coastal areas have milder temperatures than inland areas: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Draw and Label</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw two pictures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Picture 1:</strong> Draw a scene showing WEATHER (what is happening today)</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        <div style="margin-top: 15px;"><strong>Picture 2:</strong> Draw a scene showing CLIMATE (what the place is usually like)</div>
                        <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Complete the Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Fill in the blanks:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. ___________ describes the daily conditions of the atmosphere.</div>
                        <div>B. ___________ describes the average weather over 30 years or more.</div>
                        <div>C. Weather can change from ___________ to day or hour to hour.</div>
                        <div>D. Climate changes very ___________ over many years.</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to know the difference between weather and climate?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Watch the weather report on TV or check online. Write down 3 things the weather forecaster says about tomorrow's weather.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Physical Geography",
        subtopic: "Identifying Elements of Weather",
        lessonContent: `
            <p>Today we'll discover the different elements that make up weather systems!</p>
            <p><strong>Key Question:</strong> What are the parts that make up weather?</p>
            <p><strong>Introduction:</strong> Weather isn't just one thing - it's made up of many different elements that work together. Meteorologists (weather scientists) measure these seven main elements to predict and describe weather.</p>
            <p><strong>The 7 Elements of Weather:</strong></p>
            <ol>
                <li><strong>Temperature:</strong> How hot or cold the air is (measured with a thermometer)</li>
                <li><strong>Sunshine:</strong> The amount of sunlight reaching the Earth (measured by hours of sunlight)</li>
                <li><strong>Wind:</strong> Moving air (measured by direction and speed with an anemometer)</li>
                <li><strong>Rain (Precipitation):</strong> Water falling from clouds (measured with a rain gauge)</li>
                <li><strong>Cloud Cover:</strong> How much of the sky is covered by clouds (measured in eighths/oktas)</li>
                <li><strong>Humidity:</strong> The amount of water vapor in the air (measured with a hygrometer)</li>
                <li><strong>Pressure (Air Pressure):</strong> The weight of air pressing down (measured with a barometer)</li>
            </ol>
            <p><strong>Why These Elements Matter:</strong></p>
            <ul>
                <li>They help us predict if it will rain or be sunny</li>
                <li>They affect what crops can grow in an area</li>
                <li>They influence what clothes we wear and activities we do</li>
                <li>They help farmers know when to plant and harvest</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Temperature in Action</div>
                <p>When the temperature is high (above 30°C), you wear shorts and drink lots of water. When it's cold, you wear a jacket and drink warm tea.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> Wind at Work</div>
                <p>Wind direction tells us where weather is coming from. In many places, wind from the ocean brings rain, while wind from the desert brings dry, hot air.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Humidity Feelings</div>
                <p>Have you ever felt sticky and sweaty even though you weren't exercising? That's high humidity! The air feels heavy because it's full of water vapor.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Rain Measurement</div>
                <p>Farmers measure rainfall because crops need the right amount of water. Too little rain causes drought; too much rain causes flooding.</p>
            </div>
        `,
        taskInstructions: "Identify and categorize the seven elements of weather.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: List the Elements</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List the 7 elements of weather:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. _____________</div>
                        <div>2. _____________</div>
                        <div>3. _____________</div>
                        <div>4. _____________</div>
                        <div>5. _____________</div>
                        <div>6. _____________</div>
                        <div>7. _____________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Match the Element to Its Description</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw lines to match each element to its correct description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <div>• Temperature</div>
                                <div>• Wind</div>
                                <div>• Humidity</div>
                                <div>• Rain</div>
                                <div>• Cloud Cover</div>
                                <div>• Sunshine</div>
                                <div>• Pressure</div>
                            </div>
                            <div>
                                <div>→ Amount of water in the air</div>
                                <div>→ How hot or cold it is</div>
                                <div>→ Moving air</div>
                                <div>→ Water falling from clouds</div>
                                <div>→ Weight of the air</div>
                                <div>→ Amount of sunlight</div>
                                <div>→ How much sky is covered by clouds</div>
                            </div>
                        </div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Weather Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Observe the weather outside right now. Describe these 5 elements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Temperature (hot, warm, cool, cold): _________</div>
                        <div>B. Sunshine (sunny, partly cloudy, cloudy): _________</div>
                        <div>C. Wind (calm, breezy, windy, very windy): _________</div>
                        <div>D. Cloud Cover (none, some, mostly, completely): _________</div>
                        <div>E. Rain (none, light rain, heavy rain): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Draw a Weather Scene</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a weather scene that includes all 7 elements. Label each element in your drawing:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which element of weather do you think is most important for farmers? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Create a simple weather chart for one week. Each day, record: temperature (hot/warm/cool/cold), sunshine, wind, and rain. Bring your chart to next class.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek3);
    console.log("grade4-socialstudies-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek3);
    console.log("grade4-socialstudies-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek3',
        metadata: grade4SocialStudiesWeek3.metadata,
        days: grade4SocialStudiesWeek3
    });
    console.log("grade4-socialstudies-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek3 = grade4SocialStudiesWeek3;
console.log("grade4-socialstudies-week3.js loaded and registered successfully");