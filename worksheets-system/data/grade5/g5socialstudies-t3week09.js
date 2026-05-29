// Grade 5 Social Studies - Term 3 Week 9 Data
const grade5SocialStudiesWeek9 = {
    metadata: {
        grade: 5,
        subject: "Social Studies",
        term: 3,
        week: 9,
        title: "Weather, Climate & Environmental Shifts",
        description: "Understanding weather vs. climate, climate change, and analyzing local impacts of climate disasters"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Environmental Studies",
        subtopic: "Weather and Climate: Short-term vs Long-term Patterns",
        lessonContent: `
            <p>Welcome! Today we'll learn the important difference between weather and climate - and why understanding both matters for our planet's future.</p>
            <p><strong>Key Question:</strong> If it's cold outside today, does that mean climate change isn't real?</p>
            <p><strong>Introduction:</strong> People often confuse weather and climate, but they are very different! Weather is what happens today or this week. Climate is what happens over many years or decades.</p>
            <p><strong>Weather (Short-term):</strong></p>
            <ul>
                <li>What is happening in the atmosphere right now or over a few days</li>
                <li>Includes temperature, rainfall, wind, humidity, and cloud cover</li>
                <li>Changes quickly - can be sunny in the morning and rainy in the afternoon!</li>
                <li>Example: "Today's weather is 28°C with scattered showers"</li>
            </ul>
            <p><strong>Climate (Long-term):</strong></p>
            <ul>
                <li>The average weather pattern of a place over 30+ years</li>
                <li>Tells us what to expect during different seasons</li>
                <li>Changes slowly over decades or centuries</li>
                <li>Example: "Zambia has a tropical climate with wet and dry seasons"</li>
            </ul>
            <p><strong>Climate Change:</strong></p>
            <ul>
                <li>The long-term shift in Earth's average temperatures and weather patterns</li>
                <li>Scientists have observed that Earth's average temperature is rising - this is called global warming</li>
                <li>This causes changes in rainfall patterns, more extreme weather, rising sea levels, and melting ice</li>
                <li>Human activities (burning fossil fuels, deforestation) are speeding up this change</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-umbrella"></i> Weather Example</div>
                <p>"I brought my umbrella today because the weather forecast said 70% chance of rain this afternoon."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-calendar-alt"></i> Climate Example</div>
                <p>"Lusaka has a warm climate. We know December to March is the rainy season, and May to October is dry and cooler."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Climate Change in Action</div>
                <p>Your grandparents might remember that the rainy season used to start in October. Now, in many places, it starts later in November or December. That's climate change!</p>
            </div>
        `,
        taskInstructions: "Complete the weather vs. climate sorting activity and reflection questions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Weather or Climate? Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each statement. Write "Weather" or "Climate" in the space provided:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. "It's going to be 32°C tomorrow." _________</div>
                        <div>B. "Zambia receives 800-1000mm of rain per year." _________</div>
                        <div>C. "A cyclone is approaching the coast." _________</div>
                        <div>D. "The Sahara Desert has less than 250mm of rain annually." _________</div>
                        <div>E. "We should pack coats because it might snow today." _________</div>
                        <div>F. "Summers are getting hotter than they were 50 years ago." _________</div>
                        <div>G. "The river floods every year during the wet season." _________</div>
                        <div>H. "A thunderstorm is expected this evening." _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label two pictures:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>A picture showing WEATHER:</strong>
                            <div class="drawing-area" style="height: 150px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                        <div>
                            <strong>A picture showing CLIMATE:</strong>
                            <div class="drawing-area" style="height: 150px; margin-top: 5px; border: 2px dashed #ccc;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Understanding Climate Change</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List two ways that Earth's climate has changed in the past 100 years:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it important to study climate change even if one day feels colder than usual?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Describe your local area's climate in 2-3 sentences. What do you expect each season to be like?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Watch the weather forecast on TV or check online. Write down today's weather and tomorrow's predicted weather. Then ask a grandparent or elder how the seasons have changed in your area since they were young.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Environmental Studies",
        subtopic: "Analyzing Climate Disasters: Local Impacts",
        lessonContent: `
            <p>Today we'll investigate how climate-related disasters affect our communities and what we can do to prepare and respond.</p>
            <p><strong>Key Question:</strong> How do floods, heatwaves, cold spells, and droughts impact people's lives and livelihoods?</p>
            <p><strong>Introduction:</strong> As our climate changes, extreme weather events are becoming more common and more severe. Understanding these disasters helps us protect ourselves and our communities.</p>
            
            <p><strong>Four Major Climate Disasters:</strong></p>
            
            <p><strong>1. SEVERE FLOODS</strong></p>
            <ul>
                <li><strong>What happens:</strong> Rivers overflow, heavy rain overwhelms drainage, water covers normally dry land</li>
                <li><strong>Causes:</strong> Heavy prolonged rainfall, cyclones, dam failures, deforestation</li>
                <li><strong>Local impacts:</strong> Homes destroyed, roads washed away, crops ruined, people displaced, waterborne diseases (cholera, typhoid)</li>
                <li><strong>Preparation:</strong> Build homes away from floodplains, create early warning systems, plant trees to reduce runoff</li>
            </ul>
            
            <p><strong>2. HEATWAVES</strong></p>
            <ul>
                <li><strong>What happens:</strong> Extended period of extremely high temperatures (often 5-10°C above normal)</li>
                <li><strong>Causes:</strong> High pressure systems trapping hot air, climate change</li>
                <li><strong>Local impacts:</strong> Heat stroke, dehydration, deaths among elderly and young, crop failure, increased wildfires</li>
                <li><strong>Preparation:</strong> Stay hydrated, avoid midday sun, create cooling centers, check on vulnerable neighbors</li>
            </ul>
            
            <p><strong>3. EXTREME COLD (Cold Spells)</strong></p>
            <ul>
                <li><strong>What happens:</strong> Temperatures drop well below normal for an extended period</li>
                <li><strong>Causes:</strong> Polar air masses moving into normally warmer regions</li>
                <li><strong>Local impacts:</strong> Crop damage (frost kills plants), livestock deaths, increased heating costs, hypothermia, frozen water pipes</li>
                <li><strong>Preparation:</strong> Warm clothing, protect vulnerable plants, ensure vulnerable people have heating</li>
            </ul>
            
            <p><strong>4. PROLONGED DROUGHTS</strong></p>
            <ul>
                <li><strong>What happens:</strong> Extended period (months to years) with below-normal rainfall</li>
                <li><strong>Causes:</strong> Changing rainfall patterns, deforestation, El Niño events</li>
                <li><strong>Local impacts:</strong> Crop failure (food shortages), livestock deaths, water scarcity, hydropower reduction, economic hardship</li>
                <li><strong>Preparation:</strong> Water conservation, drought-resistant crops, rainwater harvesting, irrigation systems</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Flood Example: Zambia, 2023</div>
                <p>Heavy rains in 2023 caused the Kafue River to flood, displacing thousands of families and damaging roads between Lusaka and the Copperbelt. Schools closed and crops were destroyed.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> Heatwave Example: Europe, 2022</div>
                <p>Temperatures reached 40°C in the UK for the first time ever. Railways buckled, airports melted, and over 2,500 people died from heat-related causes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint-slash"></i> Drought Example: Southern Africa, 2019</div>
                <p>A severe drought affected millions across Zambia, Zimbabwe, and Malawi. Reservoirs for hydropower ran low, causing electricity blackouts, and maize harvests failed completely.</p>
            </div>
        `,
        taskInstructions: "Complete the disaster analysis table and emergency preparedness plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Disaster Impacts Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the table below for each climate disaster:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Disaster</th>
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Two Impacts on People</th>
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">One Way to Prepare</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Floods</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Heatwaves</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Extreme Cold</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Droughts</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;">&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Case Study Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read this scenario and answer the questions:
                    <div style="background-color: #f5f5f5; padding: 10px; margin-top: 10px;">
                        <p><em>"The village of Kalomo has not received rain for eight months. The river has dried up. Crops have died, and families are walking 10 kilometers each day to find water. Livestock are dying, and food prices in the market have doubled."</em></p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Which climate disaster is this? _________</div>
                        <div>B. List three impacts on the village: _________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>C. What could families do to prepare for future droughts? _________</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Emergency Preparedness Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a family emergency plan for one type of climate disaster that could happen in your area:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Disaster type I am preparing for: _________</div>
                        <div>Three items I would put in an emergency kit:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>Where my family would go if we had to evacuate:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>One person I would check on to make sure they are safe:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a before-and-after picture showing how a climate disaster changes a community:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div>
                            <strong>BEFORE (Normal conditions):</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px solid #4CAF50;"></div>
                        </div>
                        <div>
                            <strong>AFTER (During the disaster):</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px; border: 2px solid #F44336;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Which climate disaster do you think is most dangerous for your community? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What is one thing young people can do to help their community prepare for climate disasters?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview an adult family member about a climate disaster they remember (flood, drought, or heatwave). Ask: When did it happen? How did it affect them? What did they learn? Write one paragraph about your interview.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5SocialStudiesWeek9);
    console.log("grade5-socialstudies-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5SocialStudiesWeek9);
    console.log("grade5-socialstudies-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5SocialStudiesWeek9',
        metadata: grade5SocialStudiesWeek9.metadata,
        days: grade5SocialStudiesWeek9
    });
    console.log("grade5-socialstudies-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5SocialStudiesWeek9 = grade5SocialStudiesWeek9;
console.log("grade5-socialstudies-week9.js loaded and registered successfully");