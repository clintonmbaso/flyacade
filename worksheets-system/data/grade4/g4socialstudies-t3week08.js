// Grade 4 Social Studies - Term 3 Week 8 Data
const grade4SocialStudiesWeek8 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 3,
        week: 8,
        title: "Entrepreneurship & Business",
        description: "Exploring the benefits of entrepreneurship and different types of business structures"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Economics",
        subtopic: "Benefits of Entrepreneurship",
        lessonContent: `
            <p>Welcome to our lesson on entrepreneurship! Today we'll discover how starting a business helps people and communities.</p>
            <p><strong>Key Question:</strong> How does starting a business help individuals and the community?</p>
            <p><strong>What is an Entrepreneur?</strong></p>
            <p>An <strong>entrepreneur</strong> is someone who starts and runs their own business. Entrepreneurs see needs in the community and create products or services to meet those needs.</p>
            <p><strong>Benefits of Entrepreneurship:</strong></p>
            <ol>
                <li><strong>Wealth Generation:</strong> Entrepreneurs can earn money for themselves and their families. Successful businesses create profits that can be saved, invested, or spent.</li>
                <li><strong>Provision of Goods and Services:</strong> Businesses provide things people need (like food, clothing, and shelter) and want (like toys, entertainment, and treats).</li>
                <li><strong>Job Creation:</strong> When a business grows, it needs employees. This gives other people jobs so they can earn money too.</li>
                <li><strong>Community Development:</strong> Successful businesses pay taxes that help build schools, roads, and hospitals. They also support local events and charities.</li>
            </ol>
            <p><strong>Examples of Local Entrepreneurs:</strong></p>
            <ul>
                <li>A person who bakes cakes and sells them to neighbors</li>
                <li>Someone who opens a small shop in the community</li>
                <li>A farmer who sells vegetables at the market</li>
                <li>A child who runs a lemonade stand or sells handmade crafts</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Wealth Generation</div>
                <p>Maria started a small tailoring business. She makes $50 per week. She saves $20, spends $20 on family needs, and invests $10 to buy more fabric. Her family is better fed, and she plans to expand her business!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Job Creation</div>
                <p>When Mr. Johnson's bakery became popular, he hired two helpers. Now two other people in the community have jobs and can support their families too.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Community Impact</div>
                <p>The local grocery store sponsors the school's sports day every year. They also donate food to families in need during holidays.</p>
            </div>
        `,
        taskInstructions: "Discuss, identify benefits, and create a community business map.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Class Discussion</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Think about businesses in your neighborhood. What goods and services do they provide?
                    <div class="answer-space" style="height: 80px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Benefits Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List three benefits of entrepreneurship and give an example for each:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 15px;">
                            <strong>Benefit 1:</strong> ____________________<br>
                            <strong>Example:</strong> ____________________
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Benefit 2:</strong> ____________________<br>
                            <strong>Example:</strong> ____________________
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong>Benefit 3:</strong> ____________________<br>
                            <strong>Example:</strong> ____________________
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Community Business Map</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Draw a simple map of your neighborhood or community. Add at least 5 local businesses and label what they provide:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> If you started a business, what would it be? How would it help your community?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Interview a local business owner or entrepreneur. Ask them: What made you start your business? How does your business help the community? Write down their answers.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Economics",
        subtopic: "Types of Businesses",
        lessonContent: `
            <p>Today we'll learn about different types of businesses and how they are organized!</p>
            <p><strong>Key Question:</strong> What are the different ways people can organize a business?</p>
            <p><strong>Four Main Types of Business Structures:</strong></p>
            
            <p><strong>1. Sole Trader (Sole Proprietorship)</strong></p>
            <ul>
                <li>Owned and run by ONE person</li>
                <li>The owner keeps all the profits</li>
                <li>The owner is responsible for all decisions and debts</li>
                <li><em>Example: A small shop, a freelance artist, a plumber</em></li>
            </ul>
            
            <p><strong>2. Partnership</strong></p>
            <ul>
                <li>Owned and run by TWO or MORE people</li>
                <li>The partners share profits, decisions, and responsibilities</li>
                <li>Each partner shares the risks and debts</li>
                <li><em>Example: A law firm, a medical clinic, a family restaurant</em></li>
            </ul>
            
            <p><strong>3. Cooperative (Co-op)</strong></p>
            <ul>
                <li>Owned and run by MEMBERS who use its services</li>
                <li>Members share the profits equally or based on how much they use the co-op</li>
                <li>Each member gets one vote, regardless of how much money they put in</li>
                <li><em>Example: A farmers' co-op that sells crops together, a credit union</em></li>
            </ul>
            
            <p><strong>4. Limited Company (Corporation)</strong></p>
            <ul>
                <li>Owned by SHAREHOLDERS who buy shares (small pieces of the company)</li>
                <li>A board of directors makes major decisions</li>
                <li>Shareholders have limited liability (they only lose what they invested)</li>
                <li><em>Example: Large companies like Coca-Cola, Nike, or a national bank</em></li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user"></i> Sole Trader Example</div>
                <p>Aisha sells handmade jewelry at the local market. She decides what to make, sets her own prices, and keeps all her earnings. If her business loses money, she alone must cover the loss.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-handshake"></i> Partnership Example</div>
                <p>Carlos and Mei opened a bakery together. Carlos bakes the bread, and Mei manages the shop. They split the profits 50-50 and make decisions together.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-usd"></i> Cooperative Example</div>
                <p>Twenty coffee farmers formed a co-op. Instead of selling their beans alone, they sell them together and share the profits. Each farmer gets one vote on co-op decisions.</p>
            </div>
        `,
        taskInstructions: "Identify, compare, and differentiate between the four business types.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Business Type Matching</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each business type to its correct description:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>___ Sole Trader</div>
                        <div>___ Partnership</div>
                        <div>___ Cooperative</div>
                        <div>___ Limited Company</div>
                        <div style="margin-top: 10px;">
                            A. Owned by shareholders who buy shares<br>
                            B. Owned by one person who keeps all profits<br>
                            C. Owned by members who share profits equally<br>
                            D. Owned by two or more people who share decisions and profits
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete the chart comparing the four business types:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Business Type</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Who Owns It?</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Example</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Sole Trader</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Partnership</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cooperative</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Limited Company</td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                                <td style="padding: 8px; border: 1px solid #ddd;"> </td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Scenario Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read each scenario and identify which type of business it describes:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="margin-bottom: 10px;">A. "My sister and I started a cleaning service together. We split all the money we earn." → ________</div>
                        <div style="margin-bottom: 10px;">B. "I own a small convenience store. Everything is my responsibility, but I keep all the profit." → ________</div>
                        <div style="margin-bottom: 10px;">C. "Ten fishermen decided to sell their catch together and share the money equally." → ________</div>
                        <div style="margin-bottom: 10px;">D. "Millions of people own tiny pieces of this soda company through stocks." → ________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Advantages and Disadvantages</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> What is one advantage and one disadvantage of being a Sole Trader?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Why might people choose to form a Partnership instead of being a Sole Trader?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Find an example of each business type in your community or country (Sole Trader, Partnership, Cooperative, Limited Company). Write the name of each business and explain why it fits that category.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek8);
    console.log("grade4-socialstudies-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek8);
    console.log("grade4-socialstudies-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek8',
        metadata: grade4SocialStudiesWeek8.metadata,
        days: grade4SocialStudiesWeek8
    });
    console.log("grade4-socialstudies-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek8 = grade4SocialStudiesWeek8;
console.log("grade4-socialstudies-week8.js loaded and registered successfully");