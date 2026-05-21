// Grade 4 Social Studies - Term 3 Week 5 Data
const grade4SocialStudiesWeek5 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 3,
        week: 5,
        title: "Weather Observations & Natural Resources",
        description: "Measuring local weather conditions and identifying natural resources in the community"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Weather and Environment",
        subtopic: "Practical Weather Observations",
        lessonContent: `
            <p>Welcome to our weather investigation! Today we'll become weather scientists and learn how to observe and record local weather conditions.</p>
            <p><strong>Key Question:</strong> How can we measure and track the weather in our community?</p>
            <p><strong>Introduction:</strong> Weather is what's happening in the sky and air around us every day. By observing and recording weather, we can understand patterns and predict what might happen next!</p>
            <p><strong>Basic Weather Elements to Observe:</strong></p>
            <ol>
                <li><strong>Clouds:</strong> What type? (fluffy, wispy, gray, covering the sky)</li>
                <li><strong>Rain:</strong> Is it raining? Light, heavy, or none?</li>
                <li><strong>Wind:</strong> How strong is the wind? (calm, light breeze, strong)</li>
                <li><strong>Temperature:</strong> Is it hot, warm, cool, or cold?</li>
                <li><strong>Sun:</strong> Is the sun shining brightly, partly cloudy, or overcast?</li>
            </ol>
            <p><strong>Simple Tools for Weather Observation:</strong></p>
            <ul>
                <li>Thermometer - measures temperature</li>
                <li>Wind sock or ribbon - shows wind direction and strength</li>
                <li>Rain gauge - measures how much rain fell</li>
                <li>Your eyes and hands - observe clouds and feel temperature!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-sun"></i> Cloud Watching</div>
                <p>Fluffy white clouds usually mean fair weather. Dark gray clouds often mean rain is coming. Wispy high clouds can mean a change in weather soon!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-wind"></i> Wind Detection</div>
                <p>Watch leaves on trees. If they barely move, the wind is calm. If branches sway, the wind is strong. You can make your own wind sock with a paper tube and ribbon!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Rain Measurement</div>
                <p>Place a straight-sided jar outside during rain. After the rain stops, use a ruler to measure how deep the water is. That's how much rain fell!</p>
            </div>
        `,
        taskInstructions: "Start a 3-day weather log and record observations about clouds, rain, wind, and temperature.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather Log - Day 1</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Observe the weather outside right now and complete today's entry:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Date:</strong> _____________</div>
                        <div><strong>Time:</strong> _____________</div>
                        <div><strong>Clouds:</strong> (circle one) None / Few / Many / Covering sky</div>
                        <div><strong>Cloud appearance:</strong> _____________</div>
                        <div><strong>Rain:</strong> (circle one) None / Light / Heavy</div>
                        <div><strong>Wind:</strong> (circle one) Calm / Light breeze / Strong / Very strong</div>
                        <div><strong>Temperature feeling:</strong> (circle one) Hot / Warm / Cool / Cold</div>
                        <div><strong>Sun:</strong> (circle one) Sunny / Partly cloudy / Overcast</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Additional observations (what do you see, hear, or feel?):</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weather Drawing</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw what the sky looks like today:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Understanding Weather Records</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important for farmers to know the weather?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How can knowing the weather help you plan your day?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Continue your weather log tomorrow and Wednesday. Record the weather at the same time each day. Compare how it changes.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Environment and Resources",
        subtopic: "Identifying Natural Resources",
        lessonContent: `
            <p>Today we'll explore the natural resources in our local environment that make our community special!</p>
            <p><strong>Key Question:</strong> What natural resources can we find in our community, and why are they important?</p>
            <p><strong>Introduction:</strong> Natural resources are things from nature that people use to live, work, and play. Every community has different natural resources that make it unique!</p>
            <p><strong>Five Types of Natural Resources:</strong></p>
            <ol>
                <li><strong>Minerals:</strong> Rocks, sand, clay, salt, and metals found in the ground</li>
                <li><strong>Land:</strong> Soil, farmland, hills, valleys, and open spaces</li>
                <li><strong>Water:</strong> Rivers, lakes, streams, ponds, groundwater, and rain</li>
                <li><strong>Forests:</strong> Trees, woodlands, and all the plants growing wild</li>
                <li><strong>Wildlife:</strong> Animals, birds, fish, insects, and other living creatures</li>
            </ol>
            <p><strong>Why Natural Resources Matter:</strong></p>
            <ul>
                <li>We drink water and use it for cleaning, farming, and factories</li>
                <li>We build homes and schools from wood and minerals</li>
                <li>We eat food that grows in healthy soil</li>
                <li>Wildlife and forests keep nature in balance</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain"></i> Local Minerals</div>
                <p>In many communities, sand is used to make concrete for buildings. Clay can be used to make bricks or pottery. Even the stones in your driveway are natural resources!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Forest Resources</div>
                <p>Trees give us wood for furniture, paper, and houses. They also provide shade, clean the air, and give animals a place to live.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Wildlife Resources</div>
                <p>Fish from local rivers provide food for many families. Birds and bees help pollinate our gardens. Animals are valuable natural resources that need our protection.</p>
            </div>
        `,
        taskInstructions: "Identify and list natural resources found in your community, then create a resource map.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Natural Resources Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List natural resources you can find in your community:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Minerals (rocks, sand, clay, soil):</strong> _________________</div>
                        <div style="margin-top: 5px;"><strong>Water sources (rivers, lakes, streams, wells):</strong> _________________</div>
                        <div style="margin-top: 5px;"><strong>Forests/trees/plants:</strong> _________________</div>
                        <div style="margin-top: 5px;"><strong>Wildlife/animals:</strong> _________________</div>
                        <div style="margin-top: 5px;"><strong>Land features (hills, farmland, valleys):</strong> _________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Community Natural Resources Map</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw a simple map of your community showing where natural resources are located:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #4A90E2;">
                        <p style="text-align: center; color: #999; padding-top: 80px;">[Draw your community map here. Mark water sources, forests, farmland, etc.]</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Create a key or legend for your map:
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Resource Importance</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose one natural resource from your list. How do people in your community use it?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What might happen if this resource ran out or was damaged?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> What is one way you can help protect natural resources in your community?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member or neighbor: 'What natural resource do you think is most important to our community? Why?' Write down their answer and your own thoughts.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek5);
    console.log("grade4-socialstudies-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek5);
    console.log("grade4-socialstudies-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek5',
        metadata: grade4SocialStudiesWeek5.metadata,
        days: grade4SocialStudiesWeek5
    });
    console.log("grade4-socialstudies-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek5 = grade4SocialStudiesWeek5;
console.log("grade4-socialstudies-week5.js loaded and registered successfully");