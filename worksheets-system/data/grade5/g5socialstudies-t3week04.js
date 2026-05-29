// Grade 5 Social Studies - Term 3 Week 4 Data
const grade5SocialStudiesWeek4 = {
    metadata: {
        grade: 5,
        subject: "Social Studies",
        term: 3,
        week: 4,
        title: "Financial Literacy & Taxation",
        description: "Introduction to taxation, identifying domestic taxes including VAT, PAYE, road taxes, and toll taxes"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Financial Literacy",
        subtopic: "Learning About Money - Introduction to Taxation & VAT",
        lessonContent: `
            <p>Welcome to our exploration of taxes! Today we'll learn what taxes are and why governments collect them.</p>
            <p><strong>Key Question:</strong> Why do we pay taxes, and where does the money go?</p>
            <p><strong>Introduction:</strong> Have you ever received a receipt after buying something and noticed an extra charge? That's tax! Taxes are money that people and businesses pay to the government to help run the country.</p>
            <p><strong>What Are Taxes?</strong></p>
            <ul>
                <li>Taxes are compulsory payments made to the government</li>
                <li>The government uses tax money to provide services for everyone</li>
                <li>Without taxes, countries couldn't build roads, schools, or hospitals</li>
            </ul>
            <p><strong>What Does Tax Money Pay For?</strong></p>
            <ol>
                <li><strong>Public Schools:</strong> Teachers' salaries, books, and school buildings</li>
                <li><strong>Hospitals & Clinics:</strong> Doctors, nurses, medicine, and equipment</li>
                <li><strong>Roads & Bridges:</strong> Building and repairing transportation infrastructure</li>
                <li><strong>Police & Fire Services:</strong> Keeping communities safe</li>
                <li><strong>Parks & Libraries:</strong> Public spaces for everyone to enjoy</li>
            </ol>
            <p><strong>Value Added Tax (VAT):</strong></p>
            <ul>
                <li>VAT is a tax added to the price of most goods and services you buy</li>
                <li>When you buy a toy, a meal, or clothes, VAT is included in the price</li>
                <li>VAT is an indirect tax because it's collected by businesses and sent to the government</li>
                <li>The rate of VAT varies by country (commonly 10-20% of the item's price)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-receipt"></i> Receipt Detective</div>
                <p>Look at a store receipt. You might see "VAT" listed as an extra charge. If a toy costs $10 and VAT is 15%, you pay $11.50 total. The extra $1.50 goes to the government!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Your School is Paid by Taxes</div>
                <p>Public schools don't charge tuition because taxes pay for them. Every time your family shops, part of that money helps pay for your classroom, desk, and textbooks!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-road"></i> Road Trip Example</div>
                <p>When you drive on a smooth road, you're using something paid for by taxes. Gasoline also has taxes that help pay for road maintenance.</p>
            </div>
        `,
        taskInstructions: "Identify VAT on receipts and explain how taxes benefit the community.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding VAT</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> If you buy a backpack for $40 and the VAT rate is 15%, how much VAT will you pay? What is the total cost?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> A family buys groceries totaling $85. VAT is 10% on non-essential items, but no VAT on basic foods like bread and milk. If $35 of their purchase is basic food, how much VAT do they pay?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Receipt Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Examine the sample receipt below. Circle the VAT amount and calculate what percentage of the subtotal the VAT represents.
                    <div style="margin-left: 20px; margin-top: 10px; padding: 15px; background: #f5f5f5; font-family: monospace;">
                        <strong>STORE MART RECEIPT</strong><br>
                        --------------------<br>
                        Bread --------- $2.00<br>
                        Milk ---------- $3.00<br>
                        Notebook ------ $1.50<br>
                        Pencils (set) -- $2.50<br>
                        Backpack ------ $25.00<br>
                        --------------------<br>
                        Subtotal ----- $34.00<br>
                        VAT (10%) ---- $3.40<br>
                        TOTAL -------- $37.40<br>
                        --------------------<br>
                        Thank you!
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tax Beneficiary Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Complete the chart showing how tax money helps different parts of the community:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Government Service</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">How It Helps Me</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">How It Helps My Community</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Public Schools</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Hospitals</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Roads</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Police & Fire</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 60px;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What would life be like if there were no taxes?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look at a receipt from a family shopping trip. Ask an adult to help you identify the VAT amount. Write down the item, price, and VAT amount.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Financial Literacy",
        subtopic: "Direct Taxation - PAYE, Road Taxes & Toll Taxes",
        lessonContent: `
            <p>Today we'll learn about direct taxes - the money people pay directly to the government from their earnings or for using certain services!</p>
            <p><strong>Key Question:</strong> What taxes do adults pay from their jobs, and why do we pay to use some roads?</p>
            <p><strong>What Are Direct Taxes?</strong></p>
            <ul>
                <li>Direct taxes are paid directly to the government by the person earning the money</li>
                <li>Unlike VAT (which you pay when you shop), direct taxes come straight from your paycheck or pocket</li>
            </ul>
            <p><strong>Pay As You Earn (PAYE):</strong></p>
            <ul>
                <li>PAYE is the tax deducted from an employee's salary before they receive their paycheck</li>
                <li>The employer sends this tax directly to the government</li>
                <li>People with higher salaries pay more PAYE (this is called a progressive tax system)</li>
                <li>PAYE helps fund public services like schools, hospitals, and roads</li>
            </ul>
            <p><strong>Road Taxes:</strong></p>
            <ul>
                <li>Vehicle owners pay an annual road tax to use public roads</li>
                <li>This money helps maintain and repair roads, bridges, and highways</li>
                <li>Road tax may vary based on vehicle size, weight, or fuel type</li>
            </ul>
            <p><strong>Toll Taxes (Tolls):</strong></p>
            <ul>
                <li>Tolls are fees paid to use specific roads, bridges, or tunnels</li>
                <li>Unlike regular road tax, you pay each time you use a toll road</li>
                <li>Toll money often goes directly to maintaining that specific road or bridge</li>
                <li>Some tolls help pay back the cost of building new highways</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> How PAYE Works</div>
                <p>If Maria earns $500 per week, her employer might deduct $75 for PAYE. Maria receives $425 in her paycheck, and the $75 goes to the government for community services.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-toll-booth"></i> Toll Booth Example</div>
                <p>When a family drives through a toll booth, they might pay $2 to use that special highway. That $2 helps keep that road smooth, safe, and well-lit.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-truck"></i> Why Trucks Pay More</div>
                <p>Large trucks cause more wear and tear on roads than small cars. That's why truck owners often pay higher road taxes - they use more of the road's "life."</p>
            </div>
        `,
        taskInstructions: "Calculate PAYE, compare different types of taxes, and explain where tax money goes.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Understanding PAYE</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Mr. Johnson earns $800 per week. His PAYE deduction is 15%. How much tax does he pay each week? How much does he take home?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Ms. Chen earns $1,200 per week. She pays 18% PAYE. Ms. Garcia earns $600 per week and pays 10% PAYE. Who pays more tax? Why do you think higher earners pay a higher percentage?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Road Tax & Toll Tax Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A family is planning a road trip. They will drive through 3 toll booths. Each toll costs $3.50. How much will they spend on tolls total?
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Compare road tax and toll tax. How are they similar? How are they different?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Tax Type Sorting Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Sort each tax into the correct column: Direct Tax or Indirect Tax
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• PAYE • VAT • Road Tax • Toll Tax</div>
                        <div style="margin-top: 10px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr style="background-color: #4A90E2; color: white;">
                                    <th style="padding: 8px; border: 1px solid #ddd;">Direct Tax (Paid directly to government)</th>
                                    <th style="padding: 8px; border: 1px solid #ddd;">Indirect Tax (Paid through purchases)</th>
                                </tr>
                                <tr>
                                    <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                    <td style="padding: 8px; border: 1px solid #ddd; height: 80px; vertical-align: top;"></td>
                                </tr>
                             </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Budgeting with Taxes</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> A worker earns $2,000 per month. Use the information to complete their monthly budget:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Gross income (before tax): $2,000</div>
                        <div>PAYE (15%): $_______</div>
                        <div>Net income (take-home pay): $_______</div>
                        <div>Rent: $600</div>
                        <div>Food: $400</div>
                        <div>Transportation: $150</div>
                        <div>Savings: $200</div>
                        <div>Remaining (if any): $_______</div>
                    </div>
                    <div class="answer-space" style="height: 100px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Why do you think governments collect taxes in different ways (PAYE, VAT, road taxes, tolls) instead of just one type of tax?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">8</span> How does understanding taxes help you become a more responsible citizen?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview an employed adult family member (with their permission). Ask them: What is PAYE? How is it deducted from your salary? What do you think the government should spend tax money on? Write a short paragraph about what you learned.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5SocialStudiesWeek4);
    console.log("grade5-socialstudies-week4.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5SocialStudiesWeek4);
    console.log("grade5-socialstudies-week4.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5SocialStudiesWeek4',
        metadata: grade5SocialStudiesWeek4.metadata,
        days: grade5SocialStudiesWeek4
    });
    console.log("grade5-socialstudies-week4.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5SocialStudiesWeek4 = grade5SocialStudiesWeek4;
console.log("grade5-socialstudies-week4.js loaded and registered successfully");