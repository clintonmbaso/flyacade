// Grade 5 Science - Term 2 Week 10 Data
const grade5ScienceWeek10 = {
    metadata: {
        grade: 5,
        subject: "Science",
        term: 2,
        week: 10,
        title: "Soil Maintenance",
        description: "Exploring water conservation, soil health, and methods of improving soil fertility"
    },
    
    monday: {
        subject: "Science",
        topic: "Environmental Science",
        subtopic: "Environmental Mitigation: Water Conservation & Reforestation",
        lessonContent: `
            <p>Welcome! Today we'll learn how communities can protect our environment through water conservation and reforestation.</p>
            <p><strong>Key Question:</strong> How can communities work together to protect water and soil resources?</p>
            <p><strong>Introduction:</strong> Environmental mitigation means taking action to reduce or prevent damage to our environment. Communities around the world are finding smart ways to save water and restore forests.</p>
            <p><strong>Water Conservation Strategies:</strong></p>
            <ol>
                <li><strong>Fixing Leaks:</strong> A dripping tap can waste thousands of liters per year</li>
                <li><strong>Shorter Showers:</strong> Reducing shower time saves significant water</li>
                <li><strong>Turning Off Taps:</strong> Not letting water run while brushing teeth or washing dishes</li>
                <li><strong>Water-Efficient Appliances:</strong> Using washing machines and dishwashers with high efficiency ratings</li>
                <li><strong>Collecting Rainwater:</strong> Using rain barrels to capture water for gardens and cleaning</li>
            </ol>
            <p><strong>Rainwater Harvesting:</strong></p>
            <ul>
                <li>Collecting rain that falls on roofs and storing it in tanks</li>
                <li>Water can be used for watering plants, washing cars, and sometimes drinking (after treatment)</li>
                <li>Reduces demand on municipal water supplies</li>
            </ul>
            <p><strong>Reforestation:</strong></p>
            <ul>
                <li>Planting trees in areas where forests have been cut down</li>
                <li>Trees prevent soil erosion, absorb carbon dioxide, and provide habitat for animals</li>
                <li>Community tree-planting events bring people together to restore local forests</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Rain Barrel Success</div>
                <p>A single rain barrel can collect over 1,000 liters of water from a small roof during a single rainy season - enough to water a garden for months!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Forest Heroes</div>
                <p>Communities in Kenya have planted over 50 million trees through the Green Belt Movement, restoring forests and improving water availability.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-water"></i> Small Changes, Big Impact</div>
                <p>If every household fixed just one leaky tap, millions of liters of water could be saved each year!</p>
            </div>
        `,
        taskInstructions: "Evaluate community strategies and create your own water conservation plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Community Strategy Evaluation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read each strategy and rate its effectiveness (1-5, where 5 is most effective):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Fixing household leaks: ___ / 5</div>
                        <div>• Rainwater harvesting: ___ / 5</div>
                        <div>• Community tree planting: ___ / 5</div>
                        <div>• Reducing shower time: ___ / 5</div>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px;">
                        <p><em>Explain your highest-rated strategy:</em></p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Rainwater Harvesting Design</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw and label a simple rainwater harvesting system for a home:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List three uses for harvested rainwater:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reforestation Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why are trees important for protecting water and soil?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> What could your community do to encourage more tree planting?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Walk around your home and identify three places where water could be conserved. Write down your observations and suggestions.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Soil Science",
        subtopic: "Introduction to Soil Health: Fertility & pH Testing",
        lessonContent: `
            <p>Today we'll become soil scientists as we explore what makes soil fertile and how to test soil health!</p>
            <p><strong>Key Question:</strong> What makes some soil better for growing plants than others?</p>
            <p><strong>Properties of Fertile Soil:</strong></p>
            <ul>
                <li><strong>Nutrient-rich:</strong> Contains nitrogen, phosphorus, potassium, and other minerals plants need</li>
                <li><strong>Good texture:</strong> Loamy soil (a mix of sand, silt, and clay) is ideal</li>
                <li><strong>Organic matter:</strong> Decayed plants and animals (humus) provide nutrients</li>
                <li><strong>Good drainage:</strong> Water flows through but doesn't wash away nutrients</li>
                <li><strong>Appropriate pH:</strong> Most plants grow best in soil that is neither too acidic nor too alkaline</li>
                <li><strong>Living organisms:</strong> Earthworms, bacteria, and fungi help break down organic matter</li>
            </ul>
            <p><strong>Soil pH (Acidity/Alkalinity):</strong></p>
            <ul>
                <li>pH scale runs from 0 (very acidic) to 14 (very alkaline)</li>
                <li>pH 7 is neutral (pure water)</li>
                <li>Most plants prefer pH between 6 and 7.5 (slightly acidic to slightly alkaline)</li>
                <li>Different plants have different pH preferences!</li>
            </ul>
            <p><strong>Testing Soil Fertility:</strong></p>
            <ul>
                <li><strong>Jar Test:</strong> Shake soil with water to see layers of sand, silt, and clay</li>
                <li><strong>pH Test:</strong> Use pH paper or a probe to measure acidity/alkalinity</li>
                <li><strong>Earthworm Count:</strong> More earthworms usually means healthier soil</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-flask"></i> The Jar Test</div>
                <p>When you shake soil in water, heavy sand settles first, then silt, then clay. The best soil (loam) has a balanced mix of all three!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> pH Preferences</div>
                <p>Blueberries love acidic soil (pH 4.5-5.5), while asparagus prefers alkaline soil (pH 7.0-8.0). Knowing your soil pH helps you choose the right plants!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-worm"></i> Earthworm Heroes</div>
                <p>Earthworms are nature's tillers! They tunnel through soil, creating air passages and leaving behind nutrient-rich castings (worm poop).</p>
            </div>
        `,
        taskInstructions: "Perform soil experiments to test fertility and pH.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Soil Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Using a soil sample, record your observations:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Color of soil: _________</div>
                        <div>• Texture (feels like): _________</div>
                        <div>• Smell (earthy, musty, other): _________</div>
                        <div>• Visible living things (worms, insects, roots): _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Jar Test Experiment</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Follow the jar test procedure (soil + water, shake, let settle). Draw and label the layers you observe:
                    <div class="drawing-area" style="height: 150px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Which layer was thickest? What does this tell you about your soil type?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: pH Testing</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Test your soil sample using pH paper or a probe. Record the pH level:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• My soil pH is: _________</div>
                        <div>• This means my soil is: (circle one) Acidic / Neutral / Alkaline</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Based on the pH, what types of plants would grow well in this soil?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Fertility Conclusion</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Is your soil sample fertile? Why or why not? Use evidence from your tests.
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Collect a soil sample from a different location (garden, park, potted plant). Bring it to class and write down where you found it.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Soil Science",
        subtopic: "Methods of Improving Soil Fertility",
        lessonContent: `
            <p>Today we'll learn how farmers and gardeners improve soil fertility using both natural and man-made methods!</p>
            <p><strong>Key Question:</strong> What's the difference between organic and inorganic fertilizers?</p>
            <p><strong>Organic Approaches (Natural):</strong></p>
            <ol>
                <li><strong>Manure:</strong> Animal waste (cow, horse, chicken) rich in nutrients
                    <ul>
                        <li>Advantages: Improves soil structure, adds organic matter, slow-release nutrients</li>
                        <li>Disadvantages: Can contain weed seeds, needs to be aged before use</li>
                    </ul>
                </li>
                <li><strong>Compost:</strong> Decayed kitchen scraps, leaves, and garden waste
                    <ul>
                        <li>Advantages: Free to make, recycles waste, improves soil texture</li>
                        <li>Disadvantages: Takes time to decompose, requires space</li>
                    </ul>
                </li>
                <li><strong>Agricultural Lime:</strong> Ground limestone used to reduce soil acidity
                    <ul>
                        <li>Advantages: Raises pH (makes acidic soil more neutral)</li>
                        <li>Disadvantages: Takes months to work, can be dusty to apply</li>
                    </ul>
                </li>
                <li><strong>Green Manure:</strong> Growing plants (like clover) and tilling them into soil</li>
            </ol>
            <p><strong>Inorganic Fertilizers (Man-Made/ Synthetic):</strong></p>
            <ul>
                <li><strong>NPK Fertilizers:</strong> Contain Nitrogen (N), Phosphorus (P), and Potassium (K) - the three main plant nutrients</li>
                <li><strong>Advantages:</strong> Fast-acting, precise nutrient control, easy to apply</li>
                <li><strong>Disadvantages:</strong> Can harm soil organisms if overused, can pollute waterways, doesn't improve soil structure</li>
            </ul>
            <p><strong>Comparison Summary:</strong></p>
            <ul>
                <li><strong>Organic:</strong> Slower, improves long-term soil health, environmentally friendly</li>
                <li><strong>Inorganic:</strong> Fast results, but can damage soil over time, requires careful application</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-apple-alt"></i> Compost Magic</div>
                <p>Banana peels, eggshells, coffee grounds, and fallen leaves can all become nutrient-rich compost. You're turning "trash" into plant food!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cow"></i> Manure Manners</div>
                <p>Fresh manure is too "hot" for plants - it can burn roots. Farmers let it age for several months before adding it to soil.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> NPK Explained</div>
                <p>A bag labeled "10-10-10" contains 10% nitrogen, 10% phosphorus, and 10% potassium. Different plants need different ratios - leafy greens need more nitrogen!</p>
            </div>
        `,
        taskInstructions: "Compare organic and inorganic fertilizers and design a soil improvement plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comparison Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the comparison chart:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #4A90E2; color: white;">
                                <th style="padding: 8px; border: 1px solid #ddd;">Feature</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Organic (Manure/Compost)</th>
                                <th style="padding: 8px; border: 1px solid #ddd;">Inorganic (Chemical Fertilizers)</th>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Speed of results</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Improves soil structure</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Environmental impact</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px; border: 1px solid #ddd;">Cost</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                                <td style="padding: 8px; border: 1px solid #ddd;">_________</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Advantages & Disadvantages</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> List two advantages and two disadvantages of using manure or compost:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Advantages:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">Disadvantages:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List two advantages and two disadvantages of using chemical fertilizers:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Advantages:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                        <div style="margin-top: 10px;">Disadvantages:</div>
                        <div class="answer-space" style="height: 50px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Soil Improvement Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Imagine you have a garden with poor soil. Create a 3-step plan to improve its fertility:
                    <div class="answer-space" style="height: 120px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Agricultural Lime Purpose</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> If a soil test shows pH 5.0 (acidic), why might a farmer add agricultural lime?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Which Would You Choose?</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> If you were starting a vegetable garden, would you use organic or inorganic fertilizers? Explain your choice:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member who gardens or farms what they use to improve soil. Write down their answer and whether they use organic or inorganic methods.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade5ScienceWeek10);
    console.log("grade5-science-week10.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade5ScienceWeek10);
    console.log("grade5-science-week10.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade5ScienceWeek10',
        metadata: grade5ScienceWeek10.metadata,
        days: grade5ScienceWeek10
    });
    console.log("grade5-science-week10.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade5ScienceWeek10 = grade5ScienceWeek10;
console.log("grade5-science-week10.js loaded and registered successfully");