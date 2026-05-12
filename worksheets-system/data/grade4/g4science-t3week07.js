// Grade 4 Science - Term 3 Week 7 Data
const grade4ScienceWeek7 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 3,
        week: 7,
        title: "Investigating the Composition of Air",
        description: "Exploring the gases that make up the atmosphere: nitrogen, oxygen, carbon dioxide, and water vapour"
    },
    
    monday: {
        subject: "Science",
        topic: "Composition of Air",
        subtopic: "What is Air Made Of?",
        lessonContent: `
            <p>Welcome to our investigation of air! Today we'll discover what's really in the air we breathe.</p>
            <p><strong>Key Question:</strong> When we breathe in, are we breathing just one thing, or a mixture of many things?</p>
            <p><strong>Introduction:</strong> Air is not just one substance - it's a <strong>mixture</strong> of different gases! Each gas has its own special job.</p>
            <p><strong>The Four Major Components of Air:</strong></p>
            <ol>
                <li><strong>Nitrogen (78%):</strong> The largest part of air. It acts as a "filler" and helps keep our atmosphere stable.</li>
                <li><strong>Oxygen (21%):</strong> What we need to breathe! Fire also needs oxygen to burn.</li>
                <li><strong>Carbon Dioxide (less than 1%):</strong> What plants need to make food. We breathe this out.</li>
                <li><strong>Water Vapour (less than 1%):</strong> The gas form of water. It creates clouds and helps make rain.</li>
            </ol>
            <p><strong>Fun Fact:</strong> Without nitrogen diluting the oxygen, fires would burn too quickly and things would rust much faster!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fire"></i> The Candle Experiment</div>
                <p>When you cover a lit candle with a jar, the flame uses up the oxygen. Once the oxygen is gone, the candle goes out! The air left in the jar is mostly nitrogen.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lungs"></i> Breathing In and Out</div>
                <p>We breathe in oxygen (21% of air) and our bodies use it. We breathe out carbon dioxide - that's why plants are so important! They turn our carbon dioxide back into oxygen.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud"></i> Invisible Water</div>
                <p>Water vapour is invisible! You can't see it, but it's always in the air around us. When water vapour cools down, it turns into tiny water droplets - that's how clouds form!</p>
            </div>
        `,
        taskInstructions: "Participate in the candle experiment and list the gases in order from most to least abundant.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Candle Experiment Observation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Watch the candle experiment (or try it safely with adult supervision). Record what happens:
                    <div class="observation-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;">
                        <p><em>What did you see when the jar was placed over the candle?</em></p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Why did the candle go out?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: List the Gases</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> List the four main gases in air from MOST abundant to LEAST abundant:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. MOST abundant: _________</div>
                        <div>2. _________</div>
                        <div>3. _________</div>
                        <div>4. LEAST abundant: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is it good that nitrogen makes up most of the air instead of oxygen?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member: 'What do you think air is made of?' Write down their answer and then teach them the four gases you learned today.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Composition of Air",
        subtopic: "Visualizing the Atmosphere (The Pie Chart)",
        lessonContent: `
            <p>Today we'll use a pie chart to see exactly how much of each gas is in the air!</p>
            <p><strong>Key Question:</strong> Looking at your chart, why do you think we don't run out of oxygen even though there is so much more nitrogen?</p>
            <p><strong>The Percentages of Air:</strong></p>
            <ul>
                <li><strong>Nitrogen:</strong> 78% (almost 4/5 of all air!)</li>
                <li><strong>Oxygen:</strong> 21% (about 1/5 of all air)</li>
                <li><strong>Other Gases:</strong> 1% (Carbon Dioxide, Water Vapour, Argon, and others)</li>
            </ul>
            <p><strong>What is a Pie Chart?</strong></p>
            <p>A pie chart is a circle divided into slices that show proportions. The bigger the slice, the more of that thing there is. Our pie chart will show that nitrogen takes up most of the circle!</p>
            <p><strong>The Cycle of Oxygen:</strong></p>
            <p>Even though oxygen is only 21% of air, we don't run out because plants constantly produce more oxygen through photosynthesis. Animals breathe in oxygen and breathe out carbon dioxide, and plants do the opposite!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-pie"></i> Pie Chart Colors</div>
                <p>Scientists often use specific colors for air composition charts: Blue for Nitrogen (78%), Red for Oxygen (21%), and Green for Other Gases (1%).</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> The Oxygen Cycle</div>
                <p>Plants are like oxygen factories! They take in the carbon dioxide we breathe out and release fresh oxygen. That's why forests are called the "lungs of the Earth."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Just Right</div>
                <p>If oxygen were 78% instead of 21%, even a small spark could cause huge fires! The nitrogen in air acts like a safety blanket.</p>
            </div>
        `,
        taskInstructions: "Create a pie chart showing the percentage composition of air using the given data.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Pie Chart Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Use the percentages below to create a pie chart showing what air is made of:
                    <div style="margin-left: 20px; margin-top: 10px; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
                        <div>• Nitrogen: <strong>78%</strong> (Color: Blue)</div>
                        <div>• Oxygen: <strong>21%</strong> (Color: Red)</div>
                        <div>• Other Gases: <strong>1%</strong> (Color: Green)</div>
                    </div>
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Understanding Your Chart</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Which gas takes up the biggest slice of your pie chart? How can you tell?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> If the pie chart represented 100 breaths, how many breaths would be mostly nitrogen?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: The Oxygen Question</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Looking at your chart, why do you think we don't run out of oxygen even though there is so much more nitrogen?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look for a pie chart in a newspaper, magazine, or online. Draw it in your notebook and write one sentence about what it shows.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Composition of Air",
        subtopic: "Investigating Water Vapour and Carbon Dioxide",
        lessonContent: `
            <p>Today we'll prove that water vapour and carbon dioxide are really in the air - even though we can't see them!</p>
            <p><strong>Key Question:</strong> How can we prove that air is a mixture and not just one single substance?</p>
            <p><strong>Investigating Water Vapour:</strong></p>
            <p>Water vapour is invisible water in gas form. It's always in the air around us. When water vapour touches something cold, it turns back into liquid water droplets. This is called <strong>condensation</strong>.</p>
            <p><strong>The Glass of Ice Experiment:</strong> When you put a cold glass of ice water on a table, water droplets form on the outside. Did the water leak through the glass? No! The cold glass turned invisible water vapour from the air into liquid water.</p>
            <p><strong>Investigating Carbon Dioxide:</strong></p>
            <p>Carbon dioxide is another invisible gas. We breathe it out every time we exhale. Plants need carbon dioxide to make their own food through photosynthesis.</p>
            <p><strong>The Lime Water Test:</strong> When you blow bubbles through a straw into clear lime water, the water turns milky or cloudy. This proves that the air we breathe out contains carbon dioxide!</p>
            <p><strong>Conclusion:</strong> Even though they make up only about 1% of air, water vapour and carbon dioxide are essential for life on Earth!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Sweating Glass</div>
                <p>Have you ever seen a cold drink "sweat" on a hot day? That's not a leak! The cold cup is turning invisible water vapour in the air into visible water droplets.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Plants Love CO2</div>
                <p>Plants "breathe in" carbon dioxide through tiny holes in their leaves. They use the carbon to grow and release oxygen back into the air for us to breathe!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cloud-rain"></i> Cloud Formation</div>
                <p>Clouds are made of tiny water droplets. Warm air rises and cools, causing water vapour to condense into billions of tiny droplets that we see as clouds!</p>
            </div>
        `,
        taskInstructions: "Conduct experiments to detect water vapour and carbon dioxide, then explain how air is a mixture.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Glass of Ice Experiment (Water Vapour)</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill a glass with ice and water. Wait 5-10 minutes. What do you see on the OUTSIDE of the glass?
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> Did water leak through the glass? If not, where did the water on the outside come from?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Carbon Dioxide Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> If you have lime water available, blow bubbles through a straw into it. What happens to the lime water?
                    <div class="observation-area" style="height: 80px; margin-top: 10px; border: 2px dashed #ccc; padding: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> What gas did you just prove is in the air you breathe out?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Proving Air is a Mixture</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> How did we prove that air is a MIXTURE of different gases and not just one single substance? Give at least two pieces of evidence:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Why It Matters</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Water vapour and carbon dioxide make up only 1% of air. Why are they still so important for life on Earth?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find three examples of condensation in your home (e.g., foggy mirror after a shower, cold window, outside of a cold drink). Write or draw what you find.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek7);
    console.log("grade4-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek7);
    console.log("grade4-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek7',
        metadata: grade4ScienceWeek7.metadata,
        days: grade4ScienceWeek7
    });
    console.log("grade4-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek7 = grade4ScienceWeek7;
console.log("grade4-science-week7.js loaded and registered successfully");