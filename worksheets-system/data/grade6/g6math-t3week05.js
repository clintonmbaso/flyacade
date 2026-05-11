// Grade 6 Mathematics - Term 3 Week 5 Data
const grade6MathsWeek5 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 3,
        week: 5,
        title: "Speed, Distance, and Time",
        description: "Understanding the relationship between speed, distance, and time using formulas and real-world applications"
    },
    
    monday: {
        subject: "Mathematics",
        topic: "Speed, Distance, and Time",
        subtopic: "The Meaning of Speed",
        lessonContent: `
            <p>Welcome to our week on Speed, Distance, and Time! Today we'll explore what speed really means in our everyday lives.</p>
            <p><strong>Key Question:</strong> What does it mean when something is "fast" or "slow"?</p>
            <p><strong>Introduction:</strong> <strong>Speed</strong> is a measure of how much distance is covered in a specific amount of time. When we say a car is going 60 kilometers per hour, we mean it travels 60 kilometers in one hour.</p>
            <p><strong>Understanding Speed:</strong></p>
            <ul>
                <li>Speed tells us how quickly something moves</li>
                <li>Higher speed = more distance covered in the same time</li>
                <li>Lower speed = less distance covered in the same time</li>
                <li>If something isn't moving, its speed is zero</li>
            </ul>
            <p><strong>Units of Speed:</strong></p>
            <ul>
                <li>km/h (kilometers per hour) - used for cars, trains, buses</li>
                <li>m/s (meters per second) - used for running, cycling, science experiments</li>
                <li>mph (miles per hour) - used in some countries like the USA and UK</li>
            </ul>
            <p><strong>Everyday Examples of Speed:</strong></p>
            <ul>
                <li>Walking speed: about 5 km/h</li>
                <li>Running speed: about 10-15 km/h</li>
                <li>Bicycle speed: about 15-20 km/h</li>
                <li>Car speed in the city: about 40-60 km/h</li>
                <li>Car speed on the highway: about 80-120 km/h</li>
                <li>Cheetah running speed: up to 120 km/h (fastest land animal!)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-walking"></i> Walking to School</div>
                <p>If you walk 5 kilometers in 1 hour, your speed is 5 km/h. If you walk the same 5 kilometers in 30 minutes (0.5 hours), your speed is 10 km/h!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-car"></i> Car Journey</div>
                <p>A car that travels 120 kilometers in 2 hours has a speed of 60 km/h. That means every hour, it covers 60 kilometers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-futbol"></i> Fastest Shot</div>
                <p>The fastest soccer ball shot was recorded at 210 km/h! That means the ball traveled 210 kilometers if it kept going for a full hour - but it only took a split second to reach the goal!</p>
            </div>
        `,
        taskInstructions: "Identify and compare speeds in real-life scenarios.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Speed Comparison</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Rank these from slowest to fastest:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Usain Bolt running (about 37 km/h)</div>
                        <div>• A bicycle (about 18 km/h)</div>
                        <div>• A garden snail (about 0.05 km/h)</div>
                        <div>• An airplane (about 900 km/h)</div>
                        <div>• A family car on the highway (about 100 km/h)</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: What Is Speed?</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> In your own words, define what "speed" means:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why do we use units like km/h and m/s when talking about speed?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Speed Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> For each scenario, decide if the speed is FAST, MEDIUM, or SLOW:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A turtle crossing the road: _________</div>
                        <div>B. A train traveling 120 km/h: _________</div>
                        <div>C. A person walking their dog: _________</div>
                        <div>D. A rocket launching into space: _________</div>
                        <div>E. A bicycle going downhill: _________</div>
                        <div>F. A sleeping cat: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Real-Life Connection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Why do you think speed limits are important on roads?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Record three different speeds you observe today (e.g., walking, car on your street, a running pet). Write each speed and what unit you would use to measure it.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Mathematics",
        topic: "Speed, Distance, and Time",
        subtopic: "Calculating Speed",
        lessonContent: `
            <p>Today we'll learn the formula for calculating speed and practice using it!</p>
            <p><strong>Key Question:</strong> How do we calculate exactly how fast something is moving?</p>
            <p><strong>The Speed Formula:</strong></p>
            <div class="formula-box" style="background-color: #FFF3E0; padding: 15px; border-radius: 10px; text-align: center; margin: 15px 0;">
                <p style="font-size: 24px; font-weight: bold; margin: 0;">Speed = Distance ÷ Time</p>
                <p style="margin: 5px 0 0 0;">or</p>
                <p style="font-size: 20px; margin: 0;"><strong>S = D ÷ T</strong></p>
            </div>
            <p><strong>How to Use the Formula:</strong></p>
            <ol>
                <li>Identify the distance traveled</li>
                <li>Identify the time taken</li>
                <li>Divide distance by time</li>
                <li>Write your answer with the correct units (km/h or m/s)</li>
            </ol>
            <p><strong>Example Problem:</strong><br>
            A car travels 240 kilometers in 3 hours. What is its speed?<br>
            <strong>Solution:</strong> Speed = Distance ÷ Time = 240 km ÷ 3 hours = 80 km/h</p>
            <p><strong>Remember:</strong> Always check that your units match! If distance is in meters and time is in seconds, speed will be in m/s. If distance is in kilometers and time is in hours, speed will be in km/h.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bicycle"></i> Bicycle Ride</div>
                <p>Maria rode her bike 15 kilometers in 0.5 hours (30 minutes). What was her speed?<br>
                <strong>S = D ÷ T = 15 km ÷ 0.5 h = 30 km/h</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-running"></i> Sprint Race</div>
                <p>David runs 100 meters in 10 seconds. What is his speed in m/s?<br>
                <strong>S = D ÷ T = 100 m ÷ 10 s = 10 m/s</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-subway"></i> Train Journey</div>
                <p>A train covers 450 kilometers in 5 hours. Calculate its speed.<br>
                <strong>S = 450 km ÷ 5 h = 90 km/h</strong></p>
            </div>
        `,
        taskInstructions: "Apply the speed formula (S = D ÷ T) to solve real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Speed Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the speed for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. A bus travels 180 km in 3 hours: _________ km/h</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B. A runner covers 200 meters in 25 seconds: _________ m/s</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C. A plane flies 2,400 km in 4 hours: _________ km/h</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>D. A cyclist rides 36 km in 2 hours: _________ km/h</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>E. A swimmer completes 50 meters in 20 seconds: _________ m/s</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A family drives from Johannesburg to Pretoria, a distance of 60 km. The trip takes 1.5 hours. What is their average speed? Show your working.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A cheetah chases a gazelle and covers 300 meters in 10 seconds. Calculate the cheetah's speed in m/s.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A delivery truck travels 480 km over 8 hours. What is its average speed?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Two friends are racing. Friend A runs 150 meters in 30 seconds. Friend B runs 180 meters in 40 seconds. Who is faster? Prove your answer with calculations.
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Find the speed of something you do today (walk to a neighbor's house, ride your bike, time a pet running). Record the distance, time, and calculated speed.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Mathematics",
        topic: "Speed, Distance, and Time",
        subtopic: "Calculating Distance",
        lessonContent: `
            <p>Today we'll learn how to calculate distance when we know the speed and time!</p>
            <p><strong>Key Question:</strong> If you know how fast you're going and how long you travel, how far will you go?</p>
            <p><strong>The Distance Formula:</strong></p>
            <div class="formula-box" style="background-color: #E8F5E9; padding: 15px; border-radius: 10px; text-align: center; margin: 15px 0;">
                <p style="font-size: 24px; font-weight: bold; margin: 0;">Distance = Speed × Time</p>
                <p style="margin: 5px 0 0 0;">or</p>
                <p style="font-size: 20px; margin: 0;"><strong>D = S × T</strong></p>
            </div>
            <p><strong>How to Use the Formula:</strong></p>
            <ol>
                <li>Identify the speed (S)</li>
                <li>Identify the time taken (T)</li>
                <li>Multiply speed by time</li>
                <li>Write your answer with the correct units (km or m)</li>
            </ol>
            <p><strong>Example Problem:</strong><br>
            A train travels at 80 km/h for 3 hours. How far does it go?<br>
            <strong>Solution:</strong> Distance = Speed × Time = 80 km/h × 3 hours = 240 km</p>
            <p><strong>Remember:</strong> If time is in minutes, convert it to hours first (divide by 60) before calculating!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Walking the Dog</div>
                <p>You walk your dog at 4 km/h for 1.5 hours. How far do you walk?<br>
                <strong>D = S × T = 4 km/h × 1.5 h = 6 km</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tachometer-alt"></i> Highway Drive</div>
                <p>A car drives at 100 km/h for 2.5 hours. What distance is covered?<br>
                <strong>D = 100 km/h × 2.5 h = 250 km</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-person-running"></i> Morning Jog</div>
                <p>James jogs at 3 m/s for 60 seconds. How far does he jog?<br>
                <strong>D = 3 m/s × 60 s = 180 meters</strong></p>
            </div>
        `,
        taskInstructions: "Apply the distance formula (D = S × T) to solve real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Distance Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the distance for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Speed = 60 km/h, Time = 2 hours: _________ km</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B. Speed = 5 m/s, Time = 30 seconds: _________ m</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C. Speed = 120 km/h, Time = 1.5 hours: _________ km</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>D. Speed = 8 m/s, Time = 45 seconds: _________ m</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A student rides a scooter at 15 km/h for 20 minutes. How far does the student travel? (Hint: convert minutes to hours first!)
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> An airplane cruises at 850 km/h for 4 hours. What distance does it cover?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A snail moves at 0.01 m/s for 100 seconds. How far does it travel?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Two cars leave the same point at the same time. Car A travels at 80 km/h for 3 hours. Car B travels at 95 km/h for 2.5 hours. Which car travels farther? By how much?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Plan a imaginary road trip. Choose a speed and time for each leg of the journey, calculate the distance for each part, and find the total distance traveled.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Mathematics",
        topic: "Speed, Distance, and Time",
        subtopic: "Calculating Time",
        lessonContent: `
            <p>Today we'll learn how to calculate time when we know the distance and speed!</p>
            <p><strong>Key Question:</strong> If you know how far you need to go and how fast you're moving, how long will the journey take?</p>
            <p><strong>The Time Formula:</strong></p>
            <div class="formula-box" style="background-color: #E3F2FD; padding: 15px; border-radius: 10px; text-align: center; margin: 15px 0;">
                <p style="font-size: 24px; font-weight: bold; margin: 0;">Time = Distance ÷ Speed</p>
                <p style="margin: 5px 0 0 0;">or</p>
                <p style="font-size: 20px; margin: 0;"><strong>T = D ÷ S</strong></p>
            </div>
            <p><strong>How to Use the Formula:</strong></p>
            <ol>
                <li>Identify the distance (D)</li>
                <li>Identify the speed (S)</li>
                <li>Divide distance by speed</li>
                <li>Write your answer with the correct units (hours, minutes, or seconds)</li>
            </ol>
            <p><strong>Example Problem:</strong><br>
            A cyclist rides 60 km at a speed of 20 km/h. How long does the trip take?<br>
            <strong>Solution:</strong> Time = Distance ÷ Speed = 60 km ÷ 20 km/h = 3 hours</p>
            <p><strong>Converting Time:</strong><br>
            Sometimes your answer will be a decimal (like 1.5 hours). Remember: 0.5 hours = 30 minutes, 0.25 hours = 15 minutes, 0.75 hours = 45 minutes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bus"></i> School Bus Ride</div>
                <p>The school bus travels 24 km at 48 km/h. How long does the journey take?<br>
                <strong>T = 24 km ÷ 48 km/h = 0.5 hours = 30 minutes</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hiking"></i> Hiking Trip</div>
                <p>A hiker needs to cover 15 km at a speed of 5 km/h. How many hours will the hike take?<br>
                <strong>T = 15 km ÷ 5 km/h = 3 hours</strong></p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> Long Journey</div>
                <p>A plane flies 4,000 km at 800 km/h. How long is the flight?<br>
                <strong>T = 4,000 km ÷ 800 km/h = 5 hours</strong></p>
            </div>
        `,
        taskInstructions: "Apply the time formula (T = D ÷ S) to solve real-world problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Time Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Calculate the time for each scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. Distance = 120 km, Speed = 60 km/h: _________ hours</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>B. Distance = 300 m, Speed = 10 m/s: _________ seconds</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>C. Distance = 450 km, Speed = 90 km/h: _________ hours</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>D. Distance = 200 m, Speed = 8 m/s: _________ seconds</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Word Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> A marathon is 42 km long. If a runner maintains a speed of 14 km/h, how many hours will it take to complete the marathon?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> A delivery driver needs to travel 180 km at 60 km/h. How long will the delivery take? Express your answer in hours and minutes.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> A submarine travels 45 km at 15 km/h. How long is its journey?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Challenge Problem</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> A family is driving 360 km to visit grandparents. They drive at 80 km/h for the first half of the journey, then increase to 100 km/h for the second half. How many hours total will the trip take?
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
        `,
        homework: "Choose a destination you would like to visit. Research or estimate the distance from your home. Calculate how long it would take to get there by walking, cycling, driving, and flying.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Mathematics",
        topic: "Speed, Distance, and Time",
        subtopic: "The Speed Lab",
        lessonContent: `
            <p>Today we'll apply everything we've learned in a hands-on Speed Lab!</p>
            <p><strong>Key Question:</strong> How fast do we actually walk? Let's find out through measurement and calculation!</p>
            <p><strong>Lab Overview:</strong></p>
            <p>Today we'll go outside to the playground or field and measure our walking speed. Each student will:</p>
            <ol>
                <li>Measure a specific distance (e.g., 50 meters)</li>
                <li>Time how long it takes to walk that distance at a normal pace</li>
                <li>Time how long it takes to walk that distance at a fast pace</li>
                <li>Calculate walking speed using the formula S = D ÷ T</li>
                <li>Compare results with classmates</li>
            </ol>
            <p><strong>Materials Needed:</strong></p>
            <ul>
                <li>Measuring tape or pre-measured course (50 meters)</li>
                <li>Stopwatch or timer app</li>
                <li>Recording sheet (see below)</li>
                <li>Calculator (optional)</li>
            </ul>
            <p><strong>Formulas to Use Today:</strong></p>
            <ul>
                <li>Speed = Distance ÷ Time</li>
                <li>Remember to convert time if needed!</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> Lab Example</div>
                <p>If the course is 50 meters and a student takes 15 seconds to walk it:<br>
                <strong>Speed = 50 m ÷ 15 s = 3.33 m/s</strong><br>
                To convert to km/h: multiply by 3.6 → 3.33 × 3.6 = about 12 km/h</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Data Table</div>
                <p>Student Name | Distance | Normal Time | Fast Time | Normal Speed | Fast Speed</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Class Analysis</div>
                <p>After collecting everyone's data, calculate the class average walking speed. How does it compare to the known average of 5 km/h?</p>
            </div>
        `,
        taskInstructions: "Measure walking speed outdoors, record data, and analyze results.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Data Collection (Outdoor Activity)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Record your measurements in the table below:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Test</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Distance (meters)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Time (seconds)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Speed (m/s)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Normal Walk (Trial 1)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Normal Walk (Trial 2)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Fast Walk (Trial 1)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Fast Walk (Trial 2)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">______</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Calculations</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Calculate your average normal walking speed:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate your average fast walking speed:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Convert your normal walking speed from m/s to km/h (multiply by 3.6):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Class Data Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Record the class average walking speed (your teacher will share this):
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">6</span> How does your walking speed compare to the class average?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> How many hours would it take you to walk 10 km at your normal walking speed?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> What factors might affect walking speed (terrain, weather, age, etc.)?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> Was your calculated walking speed faster or slower than you expected? Why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Complete your lab report with all calculations and reflections. Create a bar graph comparing your normal vs. fast walking speeds.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathsWeek5);
    console.log("grade6-maths-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathsWeek5);
    console.log("grade6-maths-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathsWeek5',
        metadata: grade6MathsWeek5.metadata,
        days: grade6MathsWeek5
    });
    console.log("grade6-maths-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathsWeek5 = grade6MathsWeek5;
console.log("grade6-maths-week5.js loaded and registered successfully");