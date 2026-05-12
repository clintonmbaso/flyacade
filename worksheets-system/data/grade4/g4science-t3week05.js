// Grade 4 Science - Term 3 Week 5 Data
const grade4ScienceWeek5 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 3,
        week: 5,
        title: "Measuring Matter",
        description: "Quantifying different types of matter using standard units for mass, length, volume, time, and energy"
    },
    
    monday: {
        subject: "Science",
        topic: "Matter and Measurement",
        subtopic: "Measuring Mass and Length",
        lessonContent: `
            <p>Welcome to our exploration of measurement! Today we'll learn how to use standard tools to measure how much space a solid object takes up and how heavy it is.</p>
            <p><strong>Key Question:</strong> If we have a piece of timber and a piece of metal, how can we prove which one is longer or heavier without guessing?</p>
            <p><strong>Introduction:</strong> Scientists use standard units to describe the world around them. Instead of saying something is "big" or "heavy," we use tools and units like centimetres and grams.</p>
            <p><strong>Measuring Length:</strong></p>
            <ul>
                <li><strong>Tool:</strong> Ruler, tape measure, or metre stick</li>
                <li><strong>Unit:</strong> Centimetres (cm) and metres (m)</li>
                <li><strong>What we measure:</strong> How long, wide, or tall an object is</li>
            </ul>
            <p><strong>Measuring Mass:</strong></p>
            <ul>
                <li><strong>Tool:</strong> Beam balance, kitchen scale, or digital scale</li>
                <li><strong>Unit:</strong> Grams (g) and kilograms (kg)</li>
                <li><strong>What we measure:</strong> How much matter is in an object (how "heavy" it is)</li>
            </ul>
            <p><strong>Key Fact:</strong> Mass is different from weight! Mass stays the same no matter where you are. Weight can change depending on gravity.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ruler"></i> Length in Action</div>
                <p>A standard pencil is about 15 centimetres long. A classroom desk might be 60 centimetres tall. A door is about 2 metres tall!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-weight-hanging"></i> Mass in Action</div>
                <p>A new pencil has a mass of about 5 grams. A full water bottle has a mass of about 500 grams. A small textbook might be 1 kilogram.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Why Measure?</div>
                <p>Imagine baking a cake without measuring flour or sugar! Measurement helps us be accurate and get consistent results.</p>
            </div>
        `,
        taskInstructions: "Measure the length and mass of classroom objects using rulers and scales.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Length Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a ruler or tape measure to find the length of these classroom objects. Record your answers in centimetres (cm):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Pencil length: _________ cm</div>
                        <div>• Desk height: _________ cm</div>
                        <div>• Science textbook width: _________ cm</div>
                        <div>• Your shoe length: _________ cm</div>
                    </div>
                    <div class="measurement-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Show your measurement steps here:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mass Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Use a beam balance or scale to find the mass of these objects. Record your answers in grams (g):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A stone or rock: _________ g</div>
                        <div>• A wooden block or pencil: _________ g</div>
                        <div>• Your science notebook: _________ g</div>
                        <div>• A small metal object: _________ g</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measurement Table</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create a table to organize your measurements:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Object</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Length (cm)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Mass (g)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Pencil</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Textbook</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">[Your choice]</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">&nbsp;</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Which object had the greatest mass? Which had the greatest length?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find three objects at home. Measure their length in centimetres and their mass in grams (use a kitchen scale if available). Record your findings.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Matter and Measurement",
        subtopic: "Measuring Volume (Liquids and Solids)",
        lessonContent: `
            <p>Today we'll learn how to measure the capacity of containers and the space occupied by different types of matter!</p>
            <p><strong>Key Question:</strong> How can we measure how much space something takes up?</p>
            <p><strong>Introduction:</strong> Volume is the amount of space an object or substance occupies. A big balloon has a lot of volume but very little mass!</p>
            <p><strong>Measuring Liquid Volume:</strong></p>
            <ul>
                <li><strong>Tool:</strong> Measuring cylinder, graduated cylinder, or marked measuring cup</li>
                <li><strong>Units:</strong> Millilitres (mL) or cubic centimetres (cm³)</li>
                <li><strong>Important:</strong> Read the measurement at eye level where the water forms a curve (meniscus)</li>
            </ul>
            <p><strong>The Displacement Method (For Solids):</strong></p>
            <ol>
                <li>Fill a measuring cylinder with water (record the starting volume)</li>
                <li>Gently drop the solid object into the water</li>
                <li>Record the new water level</li>
                <li>Subtract: New volume - Starting volume = Volume of the solid</li>
            </ol>
            <p><strong>Key Fact:</strong> 1 millilitre (mL) of water takes up exactly 1 cubic centimetre (cm³) of space!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Liquid Volume</div>
                <p>A standard soda can holds 330 mL of liquid. A water bottle might hold 500 mL. A bathtub holds about 150,000 mL (150 litres)!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-rock"></i> Displacement in Action</div>
                <p>If you put a stone in a cylinder with 50 mL of water and the water rises to 70 mL, the stone has a volume of 20 cm³!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Volume vs. Mass</div>
                <p>A big balloon has large volume but small mass (it's light). A small metal ball has small volume but large mass (it's heavy). Volume and mass are different!</p>
            </div>
        `,
        taskInstructions: "Measure liquid volume using measuring cylinders and use displacement to find the volume of solids.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Liquid Volume Measurement</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a measuring cylinder or measuring cup to measure these amounts of water:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Measure 50 mL of water: Starting level = ____ mL</div>
                        <div>• Measure 100 mL of water: Starting level = ____ mL</div>
                        <div>• Measure 150 mL of water: Starting level = ____ mL</div>
                    </div>
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;">
                        <p style="text-align: center; padding-top: 35px;">[Draw a measuring cylinder and show the water levels]</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Displacement Test (Volume of a Solid)</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow the displacement method to find the volume of a stone or small solid object:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Starting water volume: _________ mL</div>
                        <div>• Water volume after adding solid: _________ mL</div>
                        <div>• <strong>Volume of solid = _________ cm³</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Volume Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Compare the volume of a large plastic bottle to a small metal tin:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Large plastic bottle volume: _________ mL</div>
                        <div>• Small metal tin volume: _________ mL</div>
                        <div>• Which has more volume? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Which is heavier (has more mass) - the large plastic bottle or the small metal tin? Why?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Meniscus Reading</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why must you read the water level at eye level? What happens if you look from above or below?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find a container at home (cup, bowl, bottle). Estimate how many millilitres it holds, then measure using a measuring cup. How close was your estimate?",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Matter and Measurement",
        subtopic: "Measuring Phenomena – Time and Energy",
        lessonContent: `
            <p>Today we'll explore how to measure things we cannot "touch" but can observe - specifically time and energy!</p>
            <p><strong>Key Question:</strong> Why is it important to use 'grams' or 'centimetres' instead of just saying something is 'big' or 'heavy'?</p>
            <p><strong>Measuring Time:</strong></p>
            <ul>
                <li><strong>Tool:</strong> Clock, stopwatch, or timer</li>
                <li><strong>Units:</strong> Seconds (s), minutes (min), hours (h)</li>
                <li><strong>What we measure:</strong> How long an event or process takes</li>
            </ul>
            <p><strong>Measuring Energy:</strong></p>
            <ul>
                <li>We can observe energy through its effects (heat, light, motion)</li>
                <li><strong>Heat/Temperature:</strong> Thermometer measures in degrees Celsius (°C)</li>
                <li><strong>Electrical Energy:</strong> Batteries are measured in volts (V)</li>
                <li><strong>Light Energy:</strong> Brightness can be observed and compared</li>
            </ul>
            <p><strong>The Time-Matter Challenge:</strong></p>
            <ul>
                <li>Predict how much time it takes to fill a 1-litre container with water</li>
                <li>Then measure it with a stopwatch to see if you were correct</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-stopwatch"></i> Time in Action</div>
                <p>It takes about 60 seconds (1 minute) to brush your teeth. It takes about 20 minutes to walk 1 kilometre. A school day is about 6 hours long.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-half"></i> Energy in Action</div>
                <p>A healthy human body temperature is about 37°C. A sunny day might be 30°C. A refrigerator is about 4°C. Boiling water is 100°C!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Measuring the Unseen</div>
                <p>We can't see time or energy, but we can measure their effects. A clock measures time passing. A thermometer measures heat energy. A battery label shows voltage!</p>
            </div>
        `,
        taskInstructions: "Use a stopwatch to time activities, explore energy measurement, and complete the time-matter challenge.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Measuring Time</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use a stopwatch or clock to time these activities:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Time to write your name 5 times: _________ seconds</div>
                        <div>• Time to walk across the classroom: _________ seconds</div>
                        <div>• Time for 20 jumping jacks: _________ seconds</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Time-Matter Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Predict and then measure how long it takes to fill a 1-litre container with water:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• My prediction: _________ seconds</div>
                        <div>• Actual time: _________ seconds</div>
                        <div>• Was I correct? _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> How does the flow rate (speed of water) affect the time?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measuring Energy</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Answer these questions about energy measurement:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• What tool measures temperature? _________</div>
                        <div>• What unit is used for temperature? _________</div>
                        <div>• What unit is printed on a battery? _________</div>
                        <div>• How can we tell if something has more heat energy than something else? _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why is it important to use standard units like "grams," "centimetres," and "seconds" instead of just saying something is "big" or "heavy"?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> What was the most interesting measurement you made this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "At home, time how long it takes to boil water in a kettle. Time how long an ice cube takes to melt at room temperature. Record both measurements in seconds and minutes.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek5);
    console.log("grade4-science-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek5',
        metadata: grade4ScienceWeek5.metadata,
        days: grade4ScienceWeek5
    });
    console.log("grade4-science-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek5 = grade4ScienceWeek5;
console.log("grade4-science-week5.js loaded and registered successfully");