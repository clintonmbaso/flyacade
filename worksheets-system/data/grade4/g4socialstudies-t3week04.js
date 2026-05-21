// Grade 4 Social Studies - Term 3 Week 4
const grade4SocialStudiesWeek4 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 3,
        week: 4,
        title: "Weather Instruments",
        description: "Understanding how temperature, sunshine, wind, and rain are measured using scientific instruments"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Weather and Climate",
        subtopic: "Weather Instruments: Temperature & Sunshine",
        lessonContent: `
            <p>Welcome to our study of weather instruments! Today we'll learn how scientists measure temperature and sunshine.</p>
            <p><strong>Key Question:</strong> How do we know exactly how hot or cold it is outside?</p>
            <p><strong>Introduction:</strong> Weather instruments help us measure different parts of the weather. Without them, we could only say "it's hot" or "it's sunny." With instruments, we can give exact numbers and track changes over time.</p>
            <p><strong>The Thermometer (Measuring Temperature):</strong></p>
            <ul>
                <li>Measures how hot or cold something is (temperature)</li>
                <li>Contains liquid (usually colored alcohol or mercury) that expands when heated and contracts when cooled</li>
                <li>Temperature is measured in degrees Celsius (°C) or Fahrenheit (°F)</li>
                <li>Used to measure air temperature, body temperature, and water temperature</li>
            </ul>
            <p><strong>Types of Thermometers:</strong></p>
            <ol>
                <li><strong>Liquid Thermometer:</strong> Uses liquid in a glass tube</li>
                <li><strong>Digital Thermometer:</strong> Uses electronic sensors</li>
                <li><strong>Maximum-Minimum Thermometer:</strong> Records the highest and lowest temperatures since last reset</li>
            </ol>
            <p><strong>The Sunshine Recorder (Measuring Sunshine):</strong></p>
            <ul>
                <li>Measures how many hours of bright sunshine occur each day</li>
                <li>Uses a glass sphere that focuses sunlight onto a special card</li>
                <li>The sun burns a line on the card - the longer the burn, the more sunshine</li>
                <li>Helps track sunny days vs. cloudy days</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Thermometer Facts</div>
                <p>Water freezes at 0°C (32°F) and boils at 100°C (212°F). A healthy human body temperature is about 37°C (98.6°F).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun"></i> Sunshine Recorder in Action</div>
                <p>The glass sphere on a sunshine recorder works like a magnifying glass. It concentrates the sun's rays into a tiny, hot point that burns a mark on a paper card inside.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Real-World Use</div>
                <p>Farmers use sunshine records to know if their crops are getting enough sun. Solar energy companies use them to decide where to put solar panels.</p>
            </div>
        `,
        taskInstructions: "Draw and label weather instruments for measuring temperature and sunshine.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Thermometer Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label a thermometer. Include these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Glass tube</div>
                        <div>• Liquid (colored)</div>
                        <div>• Temperature scale (°C and/or °F)</div>
                        <div>• Bulb (where liquid collects)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sunshine Recorder Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label a sunshine recorder. Include these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Glass sphere</div>
                        <div>• Paper card (where the sun burns a line)</div>
                        <div>• Stand/base</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Temperature Reading Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What temperature does each thermometer show?
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Freezing water: _____ °C</div>
                        <div>B. Boiling water: _____ °C</div>
                        <div>C. Normal body temperature: _____ °C</div>
                        <div>D. A very hot summer day: _____ °C (your guess)</div>
                        <div>E. A cold winter day: _____ °C (your guess)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it more useful to measure temperature with a thermometer than to just say "it's hot" or "it's cold"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Use a thermometer at home to measure the temperature in three different places (inside, outside, in the refrigerator). Write down your readings.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Weather and Climate",
        subtopic: "Weather Instruments: Wind & Rain",
        lessonContent: `
            <p>Today we'll learn how scientists measure wind and rainfall - two important parts of daily weather!</p>
            <p><strong>Key Question:</strong> How can we measure something we can't see, like wind?</p>
            <p><strong>The Wind Vane (Measuring Wind Direction):</strong></p>
            <ul>
                <li>Shows which direction the wind is blowing FROM</li>
                <li>Has an arrow that points toward the direction the wind is coming from</li>
                <li>Usually mounted on a high pole or roof</li>
                <li>Has letters N, S, E, W (North, South, East, West) to show direction</li>
                <li><strong>Example:</strong> If the arrow points North, the wind is coming FROM the North (north wind)</li>
            </ul>
            <p><strong>The Anemometer (Measuring Wind Speed):</strong></p>
            <ul>
                <li>Measures how fast the wind is blowing (wind speed)</li>
                <li>Has three or four cups that spin in the wind</li>
                <li>The faster the wind blows, the faster the cups spin</li>
                <li>Wind speed is measured in kilometers per hour (km/h) or miles per hour (mph)</li>
            </ul>
            <p><strong>The Rain Gauge (Measuring Rainfall):</strong></p>
            <ul>
                <li>Measures how much rain has fallen over a period of time</li>
                <li>A cylindrical container with measurement marks (usually in millimeters or inches)</li>
                <li>Placed in an open area away from trees or buildings</li>
                <li>Read by looking at the water level on the scale</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compass"></i> Wind Vane Direction</div>
                <p>If a wind vane points East, the wind is coming from the East (an east wind). Weather forecasters say "easterly winds" when wind comes from the east.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Wind Speed Scale</div>
                <p>Light breeze: 6-11 km/h (leaves rustle)<br>
                Strong wind: 40-50 km/h (difficult to walk)<br>
                Hurricane: 120+ km/h (damage to buildings)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Rainfall Measurement</div>
                <p>One millimeter of rain means that if you put a flat container outside, the water would be 1 mm deep. 10 mm of rain in a day is considered a wet day!</p>
            </div>
        `,
        taskInstructions: "Draw and label weather instruments for measuring wind and rain.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Wind Vane Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw and label a wind vane. Include these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Arrow (points where wind is coming FROM)</div>
                        <div>• Direction letters (N, S, E, W)</div>
                        <div>• Mounting pole</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Anemometer Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label an anemometer. Include these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Spinning cups (3 or 4)</div>
                        <div>• Center pole</div>
                        <div>• Base</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Rain Gauge Diagram</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw and label a rain gauge. Include these parts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Cylinder/container</div>
                        <div>• Measurement scale (mm or inches)</div>
                        <div>• Water level</div>
                    </div>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Instrument Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Match each instrument to what it measures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>_____ Wind Vane &nbsp;&nbsp;&nbsp;&nbsp; A. Wind speed</div>
                        <div>_____ Anemometer &nbsp;&nbsp; B. Wind direction</div>
                        <div>_____ Rain Gauge &nbsp;&nbsp;&nbsp; C. Amount of rainfall</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Complete each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A wind vane shows wind __________.</div>
                        <div>B. An anemometer measures wind __________.</div>
                        <div>C. A rain gauge measures how much __________ has fallen.</div>
                        <div>D. If a wind vane points south, the wind is coming from the __________.</div>
                    </div>
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why is it important for farmers to know how much rain has fallen?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Make a simple wind vane using a paper arrow and a pencil. Test it outside and record which direction the wind is blowing.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek4);
    console.log("grade4-socialstudies-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek4);
    console.log("grade4-socialstudies-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek4',
        metadata: grade4SocialStudiesWeek4.metadata,
        days: grade4SocialStudiesWeek4
    });
    console.log("grade4-socialstudies-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek4 = grade4SocialStudiesWeek4;
console.log("grade4-socialstudies-week4.js loaded and registered successfully");