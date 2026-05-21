// Grade 4 Social Studies - Term 3 Week 10 Data
const grade4SocialStudiesWeek10 = {
    metadata: {
        grade: 4,
        subject: "Social Studies",
        term: 3,
        week: 10,
        title: "Personal Budgeting & End of Year Review",
        description: "Constructing a basic personal budget and synthesizing key financial, environmental, and entrepreneurial concepts from Term 3"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Financial Literacy",
        subtopic: "Preparing a Personal Budget",
        lessonContent: `
            <p>Welcome to our lesson on personal budgeting! Today we'll learn how to plan and manage money wisely.</p>
            <p><strong>Key Question:</strong> Where does your money go, and how can you plan to use it better?</p>
            <p><strong>Introduction:</strong> A <strong>budget</strong> is a plan for how to spend and save your money. It helps you make smart choices so you always have enough for what you need and want.</p>
            <p><strong>Components of a Budget:</strong></p>
            <ol>
                <li><strong>Income:</strong> Money that comes in (allowance, gifts, earnings from chores, etc.)</li>
                <li><strong>Expenditure:</strong> Money that goes out (spending on needs and wants)</li>
                <li><strong>Savings:</strong> Money set aside for future goals or emergencies</li>
                <li><strong>Donations (Giving):</strong> Money shared with others in need or worthy causes</li>
            </ol>
            <p><strong>Why Budgeting Matters:</strong></p>
            <ul>
                <li>Helps you avoid running out of money</li>
                <li>Teaches you to prioritize needs over wants</li>
                <li>Builds good habits for financial independence</li>
                <li>Allows you to reach savings goals</li>
            </ul>
            <p><strong>Simple Budget Rule:</strong> Income = Expenditure + Savings + Donations. Every coin should have a purpose!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-piggy-bank"></i> Maria's Budget Example</div>
                <p>Maria gets $10 weekly allowance. Her budget: $4 for snacks (expenditure), $4 saved for a new toy (savings), $1 to church (donations), $1 for emergencies. Total: $10!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Needs vs. Wants</div>
                <p>Needs are things you must have (food, school supplies). Wants are nice to have but not necessary (candy, new video game). A good budget covers needs first!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Savings Grow!</div>
                <p>Saving $2 every week = $104 in one year! Small amounts add up to big things over time.</p>
            </div>
        `,
        taskInstructions: "Identify budget components and create a mock personal budget.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Budget Components Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Match each term to its correct definition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Income ______</div>
                        <div>Expenditure ______</div>
                        <div>Savings ______</div>
                        <div>Donations ______</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 5px; font-size: 14px;">
                        <div>A. Money set aside for future use</div>
                        <div>B. Money given to help others or support a cause</div>
                        <div>C. Money coming in (allowance, gifts, earnings)</div>
                        <div>D. Money going out (spending)</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Mock Personal Budget</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Imagine you receive $15 each week. Create your own personal budget:
                    <div style="margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Category</th>
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Amount ($)</th>
                                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">What will you use it for?</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Income (Total)</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$15</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Weekly allowance</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Expenditure</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Savings</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Donations</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">$_____</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________________</td>
                            </tr>
                            <tr style="background-color: #f5f5f5;">
                                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Total</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd;"><strong>$_____</strong></td>
                                <td style="padding: 8px; border: 1px solid #ddd;">Should equal $15</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection Questions</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why is it important to include savings in every budget?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What is the difference between a need and a want? Give one example of each.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a parent or guardian about one household expense. Write down what you learned about how families budget.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Term Review & Assessment",
        subtopic: "End of Year Final Assessment & Synthesis",
        lessonContent: `
            <p>Welcome to our final Grade 4 Social Studies lesson! Today we'll review and celebrate everything we've learned this term.</p>
            <p><strong>Key Question:</strong> What are the most important things you learned in Social Studies this term?</p>
            <p><strong>Term 3 Topics We Explored:</strong></p>
            <ol>
                <li><strong>Financial Literacy:</strong> 
                    <ul>
                        <li>Needs vs. wants</li>
                        <li>Income, expenditure, savings, donations</li>
                        <li>Creating and following a budget</li>
                    </ul>
                </li>
                <li><strong>Environmental Awareness:</strong>
                    <ul>
                        <li>Natural resources and their uses</li>
                        <li>Pollution and its effects</li>
                        <li>Ways to protect our environment</li>
                    </ul>
                </li>
                <li><strong>Entrepreneurship:</strong>
                    <ul>
                        <li>What entrepreneurs do</li>
                        <li>Goods and services</li>
                        <li>Starting a small business idea</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Why These Topics Matter:</strong></p>
            <ul>
                <li>Financial skills help you manage money throughout life</li>
                <li>Environmental knowledge helps you care for our planet</li>
                <li>Entrepreneurial thinking helps you solve problems and create opportunities</li>
            </ul>
            <p><strong>Congratulations!</strong> You have completed Grade 4 Social Studies. Take pride in your growth as a learner!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Your Future Starts Now</div>
                <p>The skills you learned this term - budgeting, caring for the environment, and creative thinking - will help you succeed in Grade 5 and beyond!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe"></i> One Person Can Make a Difference</div>
                <p>Recycling one plastic bottle saves enough energy to power a light bulb for 6 hours. Small actions add up!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-store"></i> Young Entrepreneurs</div>
                <p>Many successful business owners started young - lemonade stands, lawn mowing, or craft sales. Every big business started with a small idea!</p>
            </div>
        `,
        taskInstructions: "Complete the final review activity, budget checking exercise, and closing reflections.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Final Review Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Answer these review questions:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. List the four components of a budget:</div>
                        <div class="answer-space" style="height: 60px; margin-bottom: 10px;"></div>
                        <div>B. Name two natural resources and how we use them:</div>
                        <div class="answer-space" style="height: 60px; margin-bottom: 10px;"></div>
                        <div>C. What is an entrepreneur?</div>
                        <div class="answer-space" style="height: 60px; margin-bottom: 10px;"></div>
                        <div>D. Give one way you can help protect the environment:</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Budget Checking Exercise</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Look at this budget. Is it balanced correctly? If not, fix it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>James's Weekly Budget:</strong></div>
                        <div>Income: $12</div>
                        <div>Expenditure: $6 (snacks and toys)</div>
                        <div>Savings: $3</div>
                        <div>Donations: $1</div>
                        <div>Total planned: $10</div>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Is James's budget balanced? ______</div>
                        <div>If not, how much money is not assigned? $______</div>
                        <div>What should James do with the extra money?</div>
                        <div class="answer-space" style="height: 60px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Closing Reflections</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What was your favorite topic this term and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How will you use what you learned about money in your daily life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Write one goal for yourself as you move to Grade 5:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Self-Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Rate your understanding of these topics (circle one for each):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Budgeting: Excellent / Good / Needs more practice</div>
                        <div>• Environment: Excellent / Good / Needs more practice</div>
                        <div>• Entrepreneurship: Excellent / Good / Needs more practice</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Share one thing you learned this term with a family member. Write down what you shared and their reaction.",
        homeworkDue: "Monday (Next Term)"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4SocialStudiesWeek10);
    console.log("grade4-socialstudies-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4SocialStudiesWeek10);
    console.log("grade4-socialstudies-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4SocialStudiesWeek10',
        metadata: grade4SocialStudiesWeek10.metadata,
        days: grade4SocialStudiesWeek10
    });
    console.log("grade4-socialstudies-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4SocialStudiesWeek10 = grade4SocialStudiesWeek10;
console.log("grade4-socialstudies-week10.js loaded and registered successfully");