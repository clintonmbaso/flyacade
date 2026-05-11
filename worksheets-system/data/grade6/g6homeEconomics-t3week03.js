// Grade 6 Home Economics - Term 3 Week 3 Data
const grade6HomeEconomicsWeek3 = {
    metadata: {
        grade: 6,
        subject: "Home Economics",
        term: 3,
        week: 3,
        title: "Laundry - Laundry Methods",
        description: "Learning proper laundry techniques including sorting, preparing clothes, and specific methods for cotton and wool"
    },
    
    monday: {
        subject: "Home Economics",
        topic: "Laundry Methods",
        subtopic: "Sorting and Preparing Laundry",
        lessonContent: `
            <p>Welcome to our lesson on laundry! Today we'll learn how to properly sort and prepare clothes before washing.</p>
            <p><strong>Key Question:</strong> Why can't we just throw all our clothes into the washing machine together?</p>
            <p><strong>Introduction:</strong> Proper laundry sorting and preparation is essential for keeping clothes looking good and lasting longer. Taking a few extra minutes before washing can prevent disasters like pink white shirts or shrunken sweaters!</p>
            <p><strong>Why Sort Laundry?</strong></p>
            <ul>
                <li>Prevents colors from bleeding onto lighter clothes</li>
                <li>Protects delicate fabrics from damage</li>
                <li>Ensures proper washing temperatures for different fabrics</li>
                <li>Extends the life of your clothing</li>
            </ul>
            <p><strong>How to Sort Clothes:</strong></p>
            <ol>
                <li><strong>By Color:</strong>
                    <ul>
                        <li>Whites (t-shirts, socks, underwear, sheets)</li>
                        <li>Lights (pastels, light grays, light blues)</li>
                        <li>Darks (black, navy, dark brown, dark green)</li>
                        <li>Brights (reds, oranges, bright yellows - these bleed easily!)</li>
                    </ul>
                </li>
                <li><strong>By Fabric Type:</strong>
                    <ul>
                        <li>Delicates (silk, lace, lingerie, fine knits)</li>
                        <li>Everyday fabrics (cotton, polyester, blends)</li>
                        <li>Heavy fabrics (jeans, towels, hoodies)</li>
                        <li>Woolens (sweaters, wool socks, scarves)</li>
                    </ul>
                </li>
                <li><strong>By Soil Level:</strong>
                    <ul>
                        <li>Heavily soiled (work clothes, sports uniforms, muddy items)</li>
                        <li>Lightly soiled (everyday wear, school clothes)</li>
                        <li>Delicate/lightly worn</li>
                    </ul>
                </li>
            </ol>
            <p><strong>Preparing Clothes for Washing:</strong></p>
            <ul>
                <li><strong>Check pockets:</strong> Remove tissues, pens, money, and other items</li>
                <li><strong>Close fasteners:</strong> Zip zippers, button buttons, hook bras</li>
                <li><strong>Turn items inside out:</strong> Protects prints and reduces fading</li>
                <li><strong>Pre-treat stains:</strong> Apply stain remover to spots</li>
                <li><strong>Check for tears:</strong> Repair or set aside damaged items</li>
                <li><strong>Empty cuffs:</strong> Shake out leaves, grass, or debris</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tshirt"></i> The Red Sock Disaster</div>
                <p>A single red sock washed with white clothes can turn everything pink! That's why sorting by color is so important.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-search"></i> Pocket Treasure</div>
                <p>Always check pockets! A forgotten tissue can leave hundreds of tiny white pieces all over your laundry. A pen can ruin an entire load.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-low"></i> Fabric Facts</div>
                <p>Different fabrics need different water temperatures. Hot water shrinks wool and damages silk, while cold water is best for bright colors and delicates.</p>
            </div>
        `,
        taskInstructions: "Practice sorting clothes and preparing different articles for washing.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Sorting Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have the following laundry items. Sort them into appropriate piles by color AND fabric type:
                    <div style="margin-left: 20px; margin-top: 10px; padding: 10px; background: #f5f5f5;">
                        <div>• White cotton t-shirt</div>
                        <div>• Red polyester sports jersey</div>
                        <div>• Dark blue denim jeans</div>
                        <div>• Light pink cotton blouse</div>
                        <div>• Black wool sweater</div>
                        <div>• White silk scarf</div>
                        <div>• Navy blue cotton socks</div>
                        <div>• Bright yellow athletic shorts</div>
                    </div>
                    <div class="answer-space" style="height: 150px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Preparation Checklist</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List 5 things you should do BEFORE putting clothes in the washing machine:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Problem Solving</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> A student washed a brand new red hoodie with white school shirts. What happened and why?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Your mother asks you to help with laundry. You find a wool sweater and cotton towels. Can they be washed together? Explain your answer.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Hands-On Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Using the provided clothing items, practice:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Sorting into correct piles</div>
                        <div>• Checking pockets (simulated)</div>
                        <div>• Turning items inside out</div>
                        <div>• Closing all fasteners</div>
                    </div>
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Write what you learned from this hands-on practice:</em></p>
                    </div>
                </div>
            </div>
        `,
        homework: "At home, help sort a load of laundry. Write down which piles you created and why certain items went into each pile.",
        homeworkDue: "Wednesday"
    },
    
    tuesday: {
        subject: "Home Economics",
        topic: "Laundry Methods",
        subtopic: "Laundering Cotton and Wool",
        lessonContent: `
            <p>Today we'll learn the specific methods for washing and drying two common fabrics: cotton and wool!</p>
            <p><strong>Key Question:</strong> Why does a wool sweater shrink but a cotton t-shirt doesn't?</p>
            <p><strong>Introduction:</strong> Different fabrics have different needs. Cotton is durable and easy to care for, while wool is delicate and requires special attention. Knowing the difference will help you keep your clothes looking great!</p>
            
            <p><strong>Laundering Cotton:</strong></p>
            <ul>
                <li><strong>What is cotton?</strong> Natural fiber from the cotton plant; breathable, absorbent, and durable</li>
                <li><strong>Examples:</strong> T-shirts, jeans, towels, bedsheets, underwear, socks</li>
                <li><strong>Washing Method:</strong>
                    <ul>
                        <li>Water temperature: Warm or hot for whites, cold for colors</li>
                        <li>Machine setting: Normal cycle</li>
                        <li>Detergent: Regular laundry detergent</li>
                        <li>Bleach: Chlorine bleach safe for white cotton only</li>
                    </ul>
                </li>
                <li><strong>Drying Method:</strong>
                    <ul>
                        <li>Machine dry on medium to high heat</li>
                        <li>Remove promptly to reduce wrinkles</li>
                        <li>Iron while slightly damp for best results</li>
                        <li>Cotton shrinks slightly - buy a little larger if needed</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>Laundering Wool:</strong></p>
            <ul>
                <li><strong>What is wool?</strong> Natural fiber from sheep; warm, insulating, and moisture-wicking</li>
                <li><strong>Examples:</strong> Sweaters, wool socks, scarves, blankets, suits</li>
                <li><strong>Washing Method:</strong>
                    <ul>
                        <li>Water temperature: COLD only (hot water causes shrinking!)</li>
                        <li>Machine setting: Delicate/wool cycle OR hand wash</li>
                        <li>Detergent: Wool-specific detergent or mild soap (no regular detergent)</li>
                        <li>NEVER use bleach or fabric softener on wool</li>
                        <li>Avoid agitation - don't twist, wring, or scrub</li>
                    </ul>
                </li>
                <li><strong>Drying Method:</strong>
                    <ul>
                        <li>NEVER put wool in the dryer (causes severe shrinking and felting)</li>
                        <li>Lay flat on a clean towel to dry</li>
                        <li>Reshape while damp</li>
                        <li>Keep away from direct heat or sunlight</li>
                        <li>Store folded (not hanging) to prevent stretching</li>
                    </ul>
                </li>
            </ul>
            
            <p><strong>Quick Comparison:</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Cotton</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Wool</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Water Temperature</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Warm/Hot</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">COLD only</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Machine Dry?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Yes</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">NO - lay flat</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Shrinks Easily?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Slightly</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Very easily</td>
                 </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Special Detergent?</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Regular</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Wool-specific</td>
                 </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-temperature-high"></i> The Shrinking Sweater</div>
                <p>A beautiful wool sweater washed in hot water and dried in a machine can shrink from adult size to child size in one cycle! Always use cold water and lay flat to dry.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Cotton Absorbency</div>
                <p>Cotton can absorb up to 27 times its weight in water! That's why cotton towels are so good at drying you off.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sheep"></i> Wool's Special Property</div>
                <p>Wool stays warm even when wet, which is why it's perfect for winter wear. But this same property makes it shrink easily when agitated in hot water.</p>
            </div>
        `,
        taskInstructions: "Practice specific laundry methods for different articles, including correct washing and drying for cotton and wool.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Cotton Care Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> You have a new red cotton t-shirt and white cotton socks. How would you wash them?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List the correct steps for drying cotton towels:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Wool Care Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Your wool sweater needs washing. Describe the correct method:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Why should wool NEVER go in the dryer?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Which Method is Correct?</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> For each item, circle the correct washing/drying method:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Item:</strong> Blue cotton jeans</div>
                        <div>A. Hot water + machine dry &nbsp;&nbsp; B. Cold water + lay flat &nbsp;&nbsp; C. Warm water + machine dry</div>
                        <div style="margin-top: 10px;"><strong>Item:</strong> White cotton school shirt</div>
                        <div>A. Cold water + lay flat &nbsp;&nbsp; B. Warm water + machine dry &nbsp;&nbsp; C. Hot water + hang dry</div>
                        <div style="margin-top: 10px;"><strong>Item:</strong> Green wool sweater</div>
                        <div>A. Cold water + lay flat &nbsp;&nbsp; B. Hot water + machine dry &nbsp;&nbsp; C. Warm water + hang dry</div>
                        <div style="margin-top: 10px;"><strong>Item:</strong> Colorful cotton bath towels</div>
                        <div>A. Cold water + hang dry &nbsp;&nbsp; B. Warm water + machine dry &nbsp;&nbsp; C. Hot water + lay flat</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Hands-On Laundering Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> With your group, practice the correct laundering method for:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• A colored cotton shirt (demonstrate sorting, water temp, drying)</div>
                        <div>• A wool scarf (demonstrate sorting, water temp, drying method)</div>
                    </div>
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>Describe what you practiced and what you learned:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">7</span> Complete this comparison chart for cotton vs. wool:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Aspect</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Cotton</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Wool</th>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Water temperature</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Drying method</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Shrinks easily?</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                             </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Special detergent needed?</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                                <td style="padding: 8px; border: 1px solid #ddd; height: 40px;">&nbsp;</td>
                             </tr>
                        </table>
                    </div>
                </div>
            </div>
        `,
        homework: "Check the clothing labels on 5 items at home. Write down the fiber content (cotton, wool, polyester, etc.) and the washing instructions. Share one new thing you learned about caring for your family's clothes.",
        homeworkDue: "Thursday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6HomeEconomicsWeek3);
    console.log("grade6-homeeconomics-week3.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6HomeEconomicsWeek3);
    console.log("grade6-homeeconomics-week3.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6HomeEconomicsWeek3',
        metadata: grade6HomeEconomicsWeek3.metadata,
        days: grade6HomeEconomicsWeek3
    });
    console.log("grade6-homeeconomics-week3.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6HomeEconomicsWeek3 = grade6HomeEconomicsWeek3;
console.log("grade6-homeeconomics-week3.js loaded and registered successfully");