// Grade 4 Technology Studies - Term 2 Week 8 (Combined into 2 Days - Summative Form)
const grade4TechWeek8 = {
    metadata: {
        grade: 4,
        subject: "Technology Studies",
        term: 2,
        week: 8,
        title: "Introduction to Business Ideas & Entrepreneurship",
        description: "Identifying needs, developing business ideas, naming businesses, understanding business structures, planning resources, and creating a business pitch"
    },
    
    tuesday: {
        subject: "Technology Studies",
        topic: "Entrepreneurship",
        subtopic: "Identifying Needs, The Big Idea, and Business Blueprint",
        lessonContent: `
            <p>Welcome to our exploration of business and entrepreneurship! Today we'll learn how to spot problems, turn them into great business ideas, and create a complete business blueprint.</p>
            <p><strong>Key Question:</strong> How can we find problems in our classroom and turn them into business opportunities?</p>
            <p><strong>Introduction:</strong> Every successful business starts with one thing: identifying a NEED. A need is something that solves a problem or makes life easier for people.</p>
            <p><strong>Needs vs. Wants:</strong></p>
            <ul>
                <li><strong>Need:</strong> Something essential that solves a problem (e.g., sharp pencils, a clean board, empty trash)</li>
                <li><strong>Want:</strong> Something nice to have but not necessary (e.g., a fancy pencil case, colorful stickers)</li>
            </ul>
            <p><strong>Products vs. Services:</strong></p>
            <ul>
                <li><strong>Product:</strong> Something you can hold (e.g., a pencil sharpener, an eraser)</li>
                <li><strong>Service:</strong> Something you do for someone (e.g., cleaning, walking a pet, tutoring)</li>
            </ul>
            <p><strong>Factors to Consider When Choosing a Business Idea:</strong></p>
            <ol>
                <li>Is it easy for us to do <em>now</em>?</li>
                <li>Would people really appreciate and use it?</li>
                <li>Do we have the materials or skills needed?</li>
            </ol>
            <p><strong>Naming Your Business:</strong></p>
            <ul>
                <li>A great business name is <strong>catchy</strong> (easy to remember)</li>
                <li>A great business name is <strong>descriptive</strong> (tells people what you do)</li>
                <li><strong>Examples:</strong> "Speedy Pencil Sharpening," "Neighborhood Dog Walkers," "Lunch Clean Crew"</li>
            </ul>
            <p><strong>Types of Business Structures:</strong></p>
            <ul>
                <li><strong>Sole Trader:</strong> One person owns and runs the business alone. You make all the decisions!</li>
                <li><strong>Partnership:</strong> Two or more people own and run the business together. You share the work and decisions!</li>
            </ul>
            <p><strong>Choosing a Location:</strong></p>
            <ul>
                <li>Where will you sell your product or offer your service?</li>
                <li>Consider: Is it easy for customers to find you? Is it safe? Is it allowed?</li>
                <li><strong>Examples:</strong> Classroom corner, hallway table, playground entrance, front porch</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pencil-alt"></i> Classroom Example</div>
                <p><strong>Problem:</strong> Pencils are always breaking or dull.<br>
                <strong>Need:</strong> A way to keep pencils sharp.<br>
                <strong>Product Idea:</strong> A pencil repair station with a sharpener and backup pencils.<br>
                <strong>Service Idea:</strong> A "Pencil Patrol" that sharpens classmates' pencils each morning.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tag"></i> Name Match-Up</div>
                <p>Can you match the name to what they sell?<br>
                "McDonald's" → Burgers and fries<br>
                "Nike" → Shoes and sports gear<br>
                "The Sharper Pencil" → Pencil sharpening service!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user"></i> Sole Trader Example</div>
                <p>Alex loves drawing. Alex starts "Alex's Art Cards" alone. Alex is a <strong>sole trader</strong> because only Alex owns the business.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Partnership Example</div>
                <p>Jordan and Taylor both love pets. They start "JT Pet Care" together. They are a <strong>partnership</strong> because two people share the business.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-map-marker-alt"></i> Location Matters</div>
                <p>A snack station should be near hungry students (cafeteria or hallway). A dog walking service should meet near the playground after school where dog owners gather!</p>
            </div>
        `,
        taskInstructions: "Identify needs, brainstorm solutions, choose your Big Idea, create a Business Blueprint with name, location map, and business structure decision.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Classroom Needs Hunt</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Look around your classroom. List 5 problems or needs you notice:
                    <div class="answer-space" style="height: 120px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Brainstorming Solutions</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each need you listed, think of ONE product OR service that could solve it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Problem/Need</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Product or Service Idea</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 50px;">1. </td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 50px;">2. </td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 50px;">3. </td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 50px;">4. </td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 50px;">5. </td>
                                <td style="padding: 10px; border: 1px solid #ddd;"></td>
                            </tr>
                          </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Choose Your "Big Idea"</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Look at your list. Circle the ONE best idea. Consider:
                    <ul style="margin-left: 20px;">
                        <li>Which is easiest to do right now?</li>
                        <li>Which would people really appreciate?</li>
                    </ul>
                    <div>My "Big Idea" is: _________________________________</div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: NAME IT! (Brainstorming Names)</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Using your "Big Idea" above, brainstorm 3 possible business names:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Name Idea #1: _________________________________</div>
                        <div>Name Idea #2: _________________________________</div>
                        <div>Name Idea #3: _________________________________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Circle your favorite name and write it here:
                    <div style="margin-left: 20px; margin-top: 5px;">
                        <strong>My Business Name:</strong> _________________________________
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: MAP IT! (Choosing a Location)</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a simple map of your classroom OR school. Mark with an "X" where your business will be located:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> Explain why this is the BEST location for your business:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: PARTNER UP! (Choosing a Business Structure)</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Will you be a Sole Trader or a Partnership? Circle one:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <span style="display: inline-block; padding: 8px 16px; background-color: #4A90E2; color: white; border-radius: 20px; margin-right: 20px;">SOLE TRADER (Alone)</span>
                        <span style="display: inline-block; padding: 8px 16px; background-color: #50B5A9; color: white; border-radius: 20px;">PARTNERSHIP (With a partner)</span>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">9</span> If you chose Partnership, write your partner's name(s):
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Why are you (and your partner, if applicable) a good fit for this business?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part G: Business Blueprint Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">11</span> Complete your Business Blueprint:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 8px;">
                        <div><strong>Business Name:</strong> _________________________</div>
                        <div><strong>Product or Service:</strong> _________________________</div>
                        <div><strong>Location:</strong> _________________________</div>
                        <div><strong>Business Type:</strong> ☐ Sole Trader ☐ Partnership</div>
                        <div><strong>Owner(s):</strong> _________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part H: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">12</span> What is the first step in starting a business?
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. Find one problem or need. Ask a family member if they would want a solution. Write down the problem and your idea. Then ask a family member: 'Would you rather be a sole trader or in a partnership? Why?' Write down their answer.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Technology Studies",
        topic: "Entrepreneurship",
        subtopic: "Business Planning, Resources, Pitch & Review",
        lessonContent: `
            <p>Today we'll learn about what you need to start your business, create an advertisement, develop an action plan, present our business ideas, and review everything we learned about entrepreneurship!</p>
            <p><strong>Key Question:</strong> Can you explain your entire business idea from start to finish?</p>
            <p><strong>Resources Needed for a Business:</strong></p>
            <ul>
                <li><strong>Materials:</strong> What physical items do you need? (paper, pencils, a table, a sign)</li>
                <li><strong>Skills:</strong> What can you do well? (drawing, organizing, talking to people)</li>
                <li><strong>Time:</strong> When will you work on your business? (before school, at recess, after school)</li>
                <li><strong>Money:</strong> Do you need to buy anything? How much will it cost?</li>
            </ul>
            <p><strong>Simple Business Action Plan:</strong></p>
            <ol>
                <li>Get your materials ready</li>
                <li>Make a sign or advertisement</li>
                <li>Tell customers about your business</li>
                <li>Start on your first day!</li>
            </ol>
            <p><strong>Week 8 Review:</strong></p>
            <ol>
                <li><strong>Identifying Needs:</strong> Finding problems to solve</li>
                <li><strong>Products vs. Services:</strong> Something you hold vs. something you do</li>
                <li><strong>Naming Your Business:</strong> Catchy and descriptive</li>
                <li><strong>Sole Trader vs. Partnership:</strong> Working alone or together</li>
                <li><strong>Location:</strong> Where customers can find you</li>
                <li><strong>Resources & Action Plan:</strong> What you need and what you'll do</li>
            </ol>
            <p><strong>Final Pitch Checklist:</strong></p>
            <ul>
                <li>What need does your business solve?</li>
                <li>What is your business name?</li>
                <li>Is it a product or service?</li>
                <li>Are you a sole trader or partnership?</li>
                <li>Where will your business be located?</li>
                <li>What materials do you need?</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-list"></i> Resource Checklist Example</div>
                <p><strong>Business: "Pencil Patrol" (Sharpening Service)</strong><br>
                Materials: Pencil sharpener, container for shavings, sign<br>
                Skills: Being careful, being on time<br>
                Time: 5 minutes before school starts<br>
                Money: $0 (borrow classroom sharpener)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chalkboard"></i> Advertisement Example</div>
                <p>"PENCIL PATROL! Get your pencils sharpened every morning. Free for first week! See Alex at the front desk."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-microphone-alt"></i> Sample Pitch</div>
                <p>"Hi, I'm Alex. My business is called 'Speedy Sharpening.' It's a service that sharpens pencils for classmates every morning. I'm a sole trader because I like working alone. You can find me at the front desk from 8:00 to 8:10. I need a sharpener and a sign. Thank you!"</p>
            </div>
        `,
        taskInstructions: "Create a resource list, advertisement, action plan, prepare and deliver a final business pitch, then complete review and reflection activities.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Resources Needed</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List all the materials you will need for your business:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What skills do you (and your partner) have that will help?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> When will you work on your business? (Circle all that apply)
                    <div>☐ Before school  ☐ At recess  ☐ During lunch  ☐ After school  ☐ Weekends</div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create an Advertisement</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a poster or flyer to tell customers about your business. Include:
                    <ul>
                        <li>Business name</li>
                        <li>What you offer</li>
                        <li>Where to find you</li>
                        <li>Price (or "Free!")</li>
                    </ul>
                    <div class="drawing-area" style="height: 180px; margin-top: 10px; border: 2px solid #4A90E2;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write 3 steps to launch your business:
                    <div style="margin-left: 20px;">
                        <div>Step 1: _________________________________</div>
                        <div>Step 2: _________________________________</div>
                        <div>Step 3: _________________________________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Prepare Your Pitch</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Use this template to write your final pitch:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 8px;">
                        <p>"Hi, I'm _________. My business is called _________.</p>
                        <p>It is a (product/service) that helps people by _________.</p>
                        <p>I am a (sole trader/partnership) because _________.</p>
                        <p>My business is located at _________.</p>
                        <p>I need materials like _________ to get started.</p>
                        <p>Thank you for listening!"</p>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Pitch Presentation</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Practice your pitch with a partner, then present to the class. Your teacher will give feedback here:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Vocabulary Review</strong></p>
                <div class="task-item">
                    <span class="task-number">8</span> Match each word to its definition:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. Sole Trader ___   A. A business owned by two or more people</div>
                        <div>2. Partnership ___   B. Something you can hold (a physical item)</div>
                        <div>3. Product ___       C. One person owns and runs the business</div>
                        <div>4. Service ___       D. Something you do for someone</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part G: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">9</span> What was the most interesting thing you learned about starting a business this week?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">10</span> Would you ever want to start a real business someday? Why or why not?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Create a one-page summary of entrepreneurship including: what a need is, the difference between product and service, and what a sole trader vs. partnership means. Share your business idea with your family!",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4TechWeek8);
    console.log("grade4-tech-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4TechWeek8);
    console.log("grade4-tech-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4TechWeek8',
        metadata: grade4TechWeek8.metadata,
        days: grade4TechWeek8
    });
    console.log("grade4-tech-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4TechWeek8 = grade4TechWeek8;
console.log("grade4-tech-week8.js loaded and registered successfully");