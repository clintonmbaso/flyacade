// Grade 6 Math - Week 10 Data
const grade6MathWeek10 = {
    metadata: {
        grade: 6,
        subject: "Mathematics",
        term: 1,
        week: 10,
        title: "Mathematical Skills Review and Integration",
        description: "Review and apply concepts from integers, estimation, rounding, and ratios through integrated real-world scenarios"
    },
    
    monday: {
        subject: "Math",
        topic: "Integers Review",
        subtopic: "Applying Integer Concepts in Real Contexts",
        lessonContent: `
            <p>Welcome to Week 10! This week we'll review and integrate all the mathematical concepts we've learned. Today we revisit integers and apply them to complex real-world scenarios.</p>
            <p><strong>Week 7 Review:</strong> Integers are whole numbers that can be positive, negative, or zero. They help us represent:</p>
            <ul>
                <li>Temperatures above and below freezing</li>
                <li>Elevations above and below sea level</li>
                <li>Financial gains and losses</li>
                <li>Positions in games and sports</li>
            </ul>
            <p><strong>Integer Operations Refresher:</strong></p>
            <ul>
                <li>Adding integers: Move right on number line for positives, left for negatives</li>
                <li>Subtracting integers: Subtract = add the opposite</li>
                <li>Multiplying/Dividing integers: Same signs = positive, different signs = negative</li>
            </ul>
            <p><strong>Integrated Thinking:</strong> Today we'll combine integer operations with estimation and ratio thinking to solve multi-step problems.</p>
            <p><strong>Real-World Challenge:</strong> Tracking temperature changes throughout a week, calculating net financial positions, and analyzing elevation changes during a hike.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: #4A90E2;"></i> Elevation Challenge</div>
                <p>A hiker starts at 250m above sea level, climbs to 850m, then descends 150m. Net change: +600m. Final position: 850m.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Financial Tracking</div>
                <p>Week's finances: Earn $50 (+50), spend $30 (-30), refund $10 (+10), donate $15 (-15). Net: +$15. Balance using integers: 50 - 30 + 10 - 15 = 15.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-thermometer-three-quarters"></i> Temperature Patterns</div>
                <p>Daily temps: 5°C, -2°C, -5°C, 3°C, 0°C. Range: -5°C to 5°C. Average: approximately 0°C (using estimation skills).</p>
            </div>
        `,
        taskInstructions: "Apply integer concepts to solve integrated problems involving temperature, elevation, and finance.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Temperature Tracking</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Record temperatures for 5 days:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Day 1: ______°C</div>
                        <div>Day 2: ______°C</div>
                        <div>Day 3: ______°C</div>
                        <div>Day 4: ______°C</div>
                        <div>Day 5: ______°C</div>
                        <div style="margin-top: 10px;">a. Highest temperature: ______°C</div>
                        <div>b. Lowest temperature: ______°C</div>
                        <div>c. Temperature range: ______°C</div>
                        <div>d. Estimate the average temperature: ______°C</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Elevation Adventure</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve this multi-step elevation problem:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A hiker starts at 150m above sea level. During the hike:</div>
                        <div style="margin-left: 20px;">• Climbs 230m</div>
                        <div style="margin-left: 20px;">• Descends 85m</div>
                        <div style="margin-left: 20px;">• Climbs 120m</div>
                        <div style="margin-left: 20px;">• Descends 195m</div>
                        <div style="margin-top: 10px;">a. What is the final elevation? ______ m</div>
                        <div>b. What was the highest point reached? ______ m</div>
                        <div>c. Total elevation gained: ______ m</div>
                        <div>d. Total elevation lost: ______ m</div>
                        <div>e. Net elevation change: ______ m</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Financial Portfolio</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Calculate the financial position:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Starting balance: $200</div>
                        <div>Transactions: +$45, -$28, -$15, +$32, -$50, +$20</div>
                        <div style="margin-top: 10px;">a. Final balance: $______</div>
                        <div>b. Largest single transaction: $______</div>
                        <div>c. Were there more deposits (+) or withdrawals (-)? ____________</div>
                        <div>d. Estimate the total deposits (rounded to nearest $10): $______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Integer Operation Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Calculate without a calculator:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. -15 + 23 = ______</div>
                        <div>b. 8 × (-4) = ______</div>
                        <div>c. -36 ÷ 6 = ______</div>
                        <div>d. 12 - (-5) = ______</div>
                        <div>e. -7 × (-3) = ______</div>
                        <div>f. -18 + (-12) = ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Track temperature highs and lows for 3 days. Calculate the daily range and average.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "Math",
        topic: "Estimation and Rounding Mastery",
        subtopic: "Strategic Estimation in Complex Scenarios",
        lessonContent: `
            <p>Today we revisit estimation and rounding from Week 8, applying these skills to more complex scenarios that require strategic thinking.</p>
            <p><strong>Week 8 Review:</strong></p>
            <ul>
                <li><strong>Estimation:</strong> Making educated guesses when exact numbers aren't needed</li>
                <li><strong>Rounding:</strong> Changing numbers to simpler, nearby values</li>
                <li><strong>Applications:</strong> Shopping, measurement, time management, data analysis</li>
            </ul>
            <p><strong>Strategic Estimation Techniques:</strong></p>
            <ol>
                <li><strong>Front-End Estimation:</strong> Use the first digits, then adjust</li>
                <li><strong>Compatible Numbers:</strong> Use numbers that are easy to work with mentally</li>
                <li><strong>Clustering:</strong> Group similar values together</li>
                <li><strong>Range Estimation:</strong> Determine minimum and maximum possible values</li>
            </ol>
            <p><strong>When to Estimate vs. Calculate Exactly:</strong></p>
            <ul>
                <li><strong>Estimate:</strong> Quick decisions, checking reasonableness, planning</li>
                <li><strong>Calculate exactly:</strong> Financial transactions, medical dosages, construction measurements</li>
            </ul>
            <p><strong>Integrated Application:</strong> We'll use estimation with integers and ratios to solve budgeting, shopping, and planning problems.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shopping-basket" style="color: #4A90E2;"></i> Smart Shopping</div>
                <p>Items: $4.95, $12.80, $3.15, $8.50. Estimate: $5 + $13 + $3 + $9 = $30. Exact: $29.40. Close enough for budget check!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Trip Planning</div>
                <p>Trip: 482 km. Estimate to nearest 50km: 500 km. At 60 km/h, estimate time: 500 ÷ 60 ≈ 8.3 hours. Good for planning!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Estimation Strategy</div>
                <p>When estimating a sum, sometimes overestimate and underestimate balance out. This is called "compensating."</p>
            </div>
        `,
        taskInstructions: "Apply estimation and rounding strategies to solve practical problems.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Strategic Estimation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Estimate these totals using different strategies:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. $23.45 + $18.75 + $9.95 + $32.50</div>
                        <div>Round to nearest dollar: ______ + ______ + ______ + ______ = $______</div>
                        <div>Front-end estimation: $______</div>
                        <div style="margin-left: 20px; height: 50px;"></div>
                        <div>b. 487 + 312 + 195 + 624</div>
                        <div>Round to nearest hundred: ______ + ______ + ______ + ______ = ______</div>
                        <div>Compatible numbers: ______</div>
                        <div style="margin-left: 20px; height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Budget Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> You have $100. Estimate if you can afford:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Textbook: $48.95</div>
                        <div>• Calculator: $24.50</div>
                        <div>• Notebooks: $12.75</div>
                        <div>• Pens: $8.25</div>
                        <div>• Backpack: $32.99</div>
                        <div style="margin-top: 10px;">a. Estimate total cost (round each to nearest dollar): $______</div>
                        <div>b. Can you afford it? Yes/No</div>
                        <div>c. What's your estimated change? $______</div>
                        <div>d. Calculate exact total: $______</div>
                        <div>e. How close was your estimate? Difference: $______</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Measurement Estimation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Estimate then measure:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Length of your classroom:</div>
                        <div>Estimate: ______ m Actual: ______ m Difference: ______ m</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Height of your desk:</div>
                        <div>Estimate: ______ cm Actual: ______ cm Difference: ______ cm</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Weight of your math textbook:</div>
                        <div>Estimate: ______ g Actual: ______ g Difference: ______ g</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Rounding Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Round as specified:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. 347 to nearest ten: ______ nearest hundred: ______</div>
                        <div>b. $12.80 to nearest dollar: ______ nearest ten cents: ______</div>
                        <div>c. 1,483 m to nearest hundred m: ______ nearest km: ______</div>
                        <div>d. 15.3 cm to nearest cm: ______ nearest 0.5 cm: ______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Plan a meal for your family. Estimate the cost by rounding prices, then check actual prices.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Math",
        topic: "Ratio Application",
        subtopic: "Integrating Ratios with Other Mathematical Concepts",
        lessonContent: `
            <p>Today we revisit ratios from Week 9 and apply them in combination with integers and estimation to solve integrated problems.</p>
            <p><strong>Week 9 Review:</strong></p>
            <ul>
                <li><strong>Ratios:</strong> Comparisons of two quantities</li>
                <li><strong>Equivalent Ratios:</strong> Different ratios representing the same relationship</li>
                <li><strong>Simplification:</strong> Expressing ratios in lowest terms</li>
                <li><strong>Direct Proportion:</strong> When quantities change at the same rate</li>
            </ul>
            <p><strong>Integrated Ratio Applications:</strong></p>
            <ol>
                <li><strong>Scaling Recipes:</strong> Adjusting ingredient amounts using ratios</li>
                <li><strong>Map Scales:</strong> Converting between map distances and real distances</li>
                <li><strong>Financial Ratios:</strong> Comparing income and expenses</li>
                <li><strong>Mixture Problems:</strong> Combining ingredients in specific ratios</li>
                <li><strong>Rate Problems:</strong> Speed, price per unit, etc.</li>
            </ol>
            <p><strong>Combining Concepts:</strong> Today we'll use ratios with:</p>
            <ul>
                <li>Integers (positive and negative ratios in contexts like profit/loss)</li>
                <li>Estimation (approximating ratios for quick calculations)</li>
                <li>Rounding (simplifying ratio calculations)</li>
            </ul>
            <p><strong>Real-World Connections:</strong> Cooking, map reading, financial planning, sports statistics, art and design proportions.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-utensils" style="color: #4A90E2;"></i> Recipe Scaling</div>
                <p>Original: 3 cups flour : 2 cups sugar. For 12 cups flour: 12÷3=4, so sugar=2×4=8 cups. Ratio stays 3:2.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map"></i> Map Scale</div>
                <p>Scale 1:50,000. 4 cm on map = 4 × 50,000 = 200,000 cm = 2,000 m = 2 km actual distance.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-percentage"></i> Financial Ratio</div>
                <p>Income: $800, Expenses: $600. Income:Expenses = 800:600 = 4:3 simplified. For every $4 earned, $3 spent.</p>
            </div>
        `,
        taskInstructions: "Apply ratio concepts to solve integrated problems involving scaling, mixtures, and comparisons.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Recipe Mathematics</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Scale this recipe:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Original Lemonade: 4 lemons : 6 cups water : 1 cup sugar</div>
                        <div style="margin-top: 10px;">a. For 10 lemons:</div>
                        <div>Water: ______ cups Sugar: ______ cups</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. For 15 cups water:</div>
                        <div>Lemons: ______ Sugar: ______ cups</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Simplified ratio (lemons:water:sugar): ______:______:______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Map and Scale</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Solve these scale problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Map scale: 1 cm = 2.5 km</div>
                        <div style="margin-top: 10px;">a. 8 cm on map = ______ km actual</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. 15 km actual = ______ cm on map</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Two towns are 32 km apart. Map distance? ______ cm</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. Estimate: If 3.8 cm on map, actual distance ≈ ______ km (rounded)</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Mixture Problems</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create the required mixtures:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Paint: Red:Blue = 3:5. You have 12 L red. How much blue? ______ L</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>b. Trail Mix: Nuts:Raisins = 4:3. Want 35 cups total. Nuts: ______ cups, Raisins: ______ cups</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>c. Juice: Orange:Apple = 2:3. With 15 L apple, orange needed? ______ L</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                        <div>d. Simplify 24:18:12 ______:______:______</div>
                        <div style="margin-left: 20px; height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Rate and Ratio Integration</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Solve these integrated problems:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Car: 60 km/h. In 3.5 hours: ______ km (estimate first, then calculate)</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>b. Typist: 240 words in 4 minutes. In 15 minutes: ______ words</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>c. Store: 3 apples for $2.40. 10 apples: $______ (round to nearest 10 cents)</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                        <div>d. Class: Boys:Girls = 3:4. 21 girls means ______ boys. Total students: ______</div>
                        <div style="margin-left: 20px; height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Find a map at home. Measure distances between 3 locations and calculate actual distances using the scale.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Math",
        topic: "Integrated Problem Solving",
        subtopic: "Applying All Concepts to Complex Scenarios",
        lessonContent: `
            <p>Today we tackle complex problems that require using integers, estimation, and ratios together. This is where mathematical thinking becomes truly powerful!</p>
            <p><strong>Problem-Solving Framework:</strong></p>
            <ol>
                <li><strong>Understand:</strong> What's being asked? Identify key information</li>
                <li><strong>Plan:</strong> Which mathematical concepts apply? What steps needed?</li>
                <li><strong>Solve:</strong> Execute calculations carefully</li>
                <li><strong>Check:</strong> Does the answer make sense? Use estimation to verify</li>
            </ol>
            <p><strong>Integrating Multiple Concepts:</strong></p>
            <ul>
                <li>Use integers for gains/losses, elevations, temperatures</li>
                <li>Use estimation for quick checks and planning</li>
                <li>Use ratios for scaling, mixtures, and comparisons</li>
                <li>Use rounding to simplify complex calculations</li>
            </ul>
            <p><strong>Real-World Scenario:</strong> Planning a school fundraising event requires:</p>
            <ul>
                <li>Budgeting with income (positive integers) and expenses (negative integers)</li>
                <li>Estimating costs and attendance</li>
                <li>Using ratios for ingredient mixtures and volunteer assignments</li>
                <li>Rounding prices and quantities for quick calculations</li>
            </ul>
            <p><strong>Critical Thinking:</strong> Sometimes there are multiple valid approaches. We'll explore different solution paths.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd" style="color: #4A90E2;"></i> Fundraiser Planning</div>
                <p>Goal: Raise $500. Items cost $15 to make, sell for $25. Ratio cost:sale = 15:25 = 3:5. Need to sell at least 50 items (50 × $10 profit = $500).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hiking"></i> Hiking Expedition</div>
                <p>Start: 200m. Climb to 850m (+650). Temp drops 1°C per 100m elevation: -6.5°C change. Base temp 15°C, summit ~8.5°C.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Business Analysis</div>
                <p>Business: Income $2,400, Expenses $1,800, Profit $600. Ratio Income:Expenses = 2400:1800 = 4:3. Profit margin ratio = 600:2400 = 1:4.</p>
            </div>
        `,
        taskInstructions: "Solve these integrated problems using concepts from Weeks 7-9.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: School Fundraiser Challenge</strong></p>
                <div class="task-item">
                    <p>Your class is having a bake sale to raise $300 for charity.</p>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Each batch makes 24 cookies</div>
                        <div>• Cost per batch: $8.50 ingredients</div>
                        <div>• Selling price: 2 cookies for $1.50</div>
                        <div style="margin-top: 10px;">a. Profit per batch: $______ (Income - Cost)</div>
                        <div>b. Simplified ratio cost:income = ______:______</div>
                        <div>c. Batches needed to reach goal: ______ batches (round up)</div>
                        <div>d. Total cookies needed: ______ cookies</div>
                        <div>e. Estimate total ingredient cost: $______ (round to nearest dollar)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Weather Expedition</strong></p>
                <div class="task-item">
                    <p>A mountain climb with temperature changes:</p>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Base camp: 500m elevation, 18°C</div>
                        <div>• Temperature drops 0.6°C per 100m elevation</div>
                        <div>• Summit: 1,200m elevation</div>
                        <div style="margin-top: 10px;">a. Elevation gain: ______ m</div>
                        <div>b. Temperature change: ______ °C</div>
                        <div>c. Summit temperature: ______ °C</div>
                        <div>d. If night adds -5°C, night summit temp: ______ °C</div>
                        <div>e. Range from base day to summit night: ______ °C</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Recipe Business</strong></p>
                <div class="task-item">
                    <p>Scaling a recipe for different orders:</p>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Original recipe (serves 8): 4 cups flour, 2 cups sugar, 1 cup butter</div>
                        <div>Cost: Flour $0.50/cup, Sugar $0.40/cup, Butter $2.00/cup</div>
                        <div style="margin-top: 10px;">a. Simplified ingredient ratio: ______:______:______</div>
                        <div>b. Cost per original batch: $______</div>
                        <div>c. For 32 servings:</div>
                        <div style="margin-left: 20px;">Flour: ______ cups Sugar: ______ cups Butter: ______ cups</div>
                        <div>d. Cost for 32 servings: $______</div>
                        <div>e. If selling at 3× cost, price for 32 servings: $______ (rounded)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Travel Planning</strong></p>
                <div class="task-item">
                    <p>Planning a road trip:</p>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Distance: 385 km</div>
                        <div>• Car efficiency: 12 km per liter</div>
                        <div>• Fuel cost: $1.45 per liter</div>
                        <div style="margin-top: 10px;">a. Estimate total distance: ______ km (nearest 50 km)</div>
                        <div>b. Fuel needed: ______ L (rounded)</div>
                        <div>c. Estimated fuel cost: $______ (rounded)</div>
                        <div>d. If speed is 90 km/h, estimated time: ______ hours (use estimation)</div>
                        <div>e. Ratio distance:fuel = 12:1. For trip, fuel needed exactly: ______ L</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Plan a real or imaginary event using integers, estimation, and ratios. Document your calculations.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Math",
        topic: "Comprehensive Review and Reflection",
        subtopic: "Term 1 Mathematical Skills Integration",
        lessonContent: `
            <p>Congratulations on reaching the end of Week 10! Today we review all concepts from Weeks 7-9 and reflect on our mathematical journey.</p>
            <p><strong>Week 7: Integers Mastery</strong></p>
            <ul>
                <li>Understanding positive and negative numbers</li>
                <li>Operations with integers</li>
                <li>Real-world applications: temperature, elevation, finance</li>
            </ul>
            <p><strong>Week 8: Estimation and Rounding</strong></p>
            <ul>
                <li>Making educated guesses</li>
                <li>Rounding whole numbers and decimals</li>
                <li>Practical applications: shopping, measurement, planning</li>
            </ul>
            <p><strong>Week 9: Ratios and Proportions</strong></p>
            <ul>
                <li>Understanding and representing ratios</li>
                <li>Simplifying ratios</li>
                <li>Direct proportion relationships</li>
                <li>Applications: recipes, maps, scaling</li>
            </ul>
            <p><strong>Week 10: Integration</strong></p>
            <ul>
                <li>Combining multiple mathematical concepts</li>
                <li>Solving complex real-world problems</li>
                <li>Developing strategic mathematical thinking</li>
            </ul>
            <p><strong>Mathematical Growth:</strong> You've developed not just calculation skills, but mathematical reasoning—the ability to choose the right tool for each problem.</p>
            <p><strong>Looking Ahead:</strong> These foundational concepts will support your learning in algebra, geometry, statistics, and beyond!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-brain" style="color: #4A90E2;"></i> Integrated Thinking</div>
                <p>A recipe (ratio) scaled up, with costs estimated (rounding), resulting in profit calculation (integers). All three concepts working together!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe-americas"></i> Real-World Math</div>
                <p>Planning a trip: Distance (ratio scaling), fuel cost (estimation), elevation changes (integers), budget (all three). Math everywhere!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-graduation-cap"></i> Mathematical Journey</div>
                <p>From learning what negative numbers are, to using them in complex financial models. This is the beginning of mathematical fluency!</p>
            </div>
        `,
        taskInstructions: "Complete this comprehensive review and reflect on your mathematical growth.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Concept Integration Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Solve this integrated scenario:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A lemonade stand business:</div>
                        <div>• Recipe: 4 lemons : 6 cups water : 1 cup sugar (serves 8)</div>
                        <div>• Cost: Lemons $0.75 each, Sugar $0.40/cup</div>
                        <div>• Selling price: $0.50 per cup</div>
                        <div style="margin-top: 10px;">a. Simplified recipe ratio: ______:______:______</div>
                        <div>b. Cost per batch: $______</div>
                        <div>c. Income per batch: $______</div>
                        <div>d. Profit per batch: $______</div>
                        <div>e. To make $20 profit, need ______ batches (round up)</div>
                        <div>f. Lemons needed: ______ (rounded to whole number)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Skills Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Demonstrate mastery of each concept:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Integgers:</strong></div>
                        <div>a. -15 + 8 - (-3) = ______</div>
                        <div>b. 6 × (-4) = ______</div>
                        <div>c. -24 ÷ (-3) = ______</div>
                        <div style="margin-top: 10px;"><strong>Estimation/Rounding:</strong></div>
                        <div>d. Estimate 487 + 312 + 195: ______</div>
                        <div>e. Round $15.87 to nearest dollar: $______</div>
                        <div>f. Round 1,483 to nearest hundred: ______</div>
                        <div style="margin-top: 10px;"><strong>Ratios:</strong></div>
                        <div>g. Simplify 18:24: ______</div>
                        <div>h. If 3:5 = 12:__, missing value: ______</div>
                        <div>i. Direct proportion? Cost and number of items: Yes/No</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Create your own problem using at least two concepts:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Problem description:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div>Required calculations:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                        <div>Solution:</div>
                        <div class="answer-space" style="height: 80px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection and Growth</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Reflect on your mathematical journey:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Which concept was most challenging at first but now makes sense?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>b. Give an example of how you've used math outside school recently:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>c. What mathematical skill are you most proud of developing?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                        <div>d. How do integers, estimation, and ratios work together in real life?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Looking Forward</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Set goals for next term:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. One math skill I want to improve:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. A real-world situation where I'll apply these skills:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. How I'll continue practicing math over break:</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
        `,
        homework: "Create a 'Math in My Life' poster showing how integers, estimation, and ratios appear in your daily activities.",
        homeworkDue: "Monday",
        weeklySummary: {
            objectives: [
                "Review and integrate integer concepts from Week 7",
                "Apply estimation and rounding strategies from Week 8",
                "Utilize ratio and proportion knowledge from Week 9",
                "Solve complex problems requiring multiple mathematical concepts",
                "Develop strategic mathematical thinking and problem-solving approaches"
            ],
            keyVocabulary: [
                "Integration - Combining multiple concepts to solve problems",
                "Strategic Estimation - Choosing appropriate estimation methods for different situations",
                "Mathematical Reasoning - Using logical thinking to approach and solve problems",
                "Multi-step Problems - Problems requiring several calculations or decisions",
                "Real-World Application - Using mathematical concepts in practical situations"
            ],
            reflectionQuestions: [
                "How has your understanding of negative numbers changed since Week 7?",
                "When do you find estimation more useful than exact calculation?",
                "What connections do you see between ratios and other mathematical concepts?",
                "How has integrated problem-solving changed your approach to mathematics?",
                "Which real-world application of these concepts surprised you the most?"
            ],
            termAchievements: [
                "Mastered operations with positive and negative integers",
                "Developed practical estimation and rounding skills",
                "Understood and applied ratio and proportion concepts",
                "Integrated multiple mathematical concepts to solve complex problems",
                "Applied mathematical thinking to real-world scenarios"
            ]
        }
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6MathWeek10);
    console.log("grade6-math-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6MathWeek10',
        metadata: grade6MathWeek10.metadata,
        days: grade6MathWeek10
    });
    console.log("grade6-math-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6MathWeek10 = grade6MathWeek10;
console.log("grade6-math-week10.js loaded and registered successfully");