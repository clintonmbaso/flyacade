// Grade 4 Science - Term 2 Week 2 Data
const grade4ScienceWeek2 = {
    metadata: {
        grade: 4,
        subject: "Science",
        term: 2,
        week: 2,
        title: "Environmental Management",
        description: "Exploring natural resources, their importance, and waste management using the Three Rs"
    },
    
    monday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Exploring Our Natural Resources",
        lessonContent: `
            <p>Welcome to our exploration of natural resources! Today we'll learn about the things nature gives us that we use every day.</p>
            <p><strong>Key Question:</strong> What is a natural resource, and what kinds are there?</p>
            <p><strong>Introduction:</strong> A <strong>natural resource</strong> is something that comes from nature and that people use. Air, water, trees, soil, and sunlight are all natural resources!</p>
            <p><strong>Two Types of Natural Resources:</strong></p>
            <ol>
                <li><strong>Biotic Resources (Living things):</strong> Trees, birds, insects, grass, animals, and fish</li>
                <li><strong>Abiotic Resources (Non-living things):</strong> Soil, sunlight, water, rocks, air, and minerals</li>
            </ol>
            <p><strong>Why This Matters:</strong> Everything we need to live comes from natural resources. The food we eat, the water we drink, the air we breathe - all are gifts from nature!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tree"></i> Biotic Example</div>
                <p>A tree is a living natural resource. It gives us wood for furniture, paper, and oxygen to breathe!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint"></i> Abiotic Example</div>
                <p>Water is a non-living natural resource. We need it for drinking, washing, growing food, and so much more!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-hand-holding-heart"></i> Working Together</div>
                <p>How does abiotic soil help a biotic tree grow? The soil provides nutrients and a place for the tree's roots to hold on!</p>
            </div>
        `,
        taskInstructions: "Go on a nature walk and classify what you see into biotic and abiotic resources.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: T-Chart Classification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Go outside to the school garden or nearby area. Look around and list 5 biotic and 5 abiotic resources:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="background-color: #2E7D32; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Biotic (Living) Resources</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Abiotic (Non-Living) Resources</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    1.<br>
                                    2.<br>
                                    3.<br>
                                    4.<br>
                                    5.
                                </td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 200px; vertical-align: top;">
                                    1.<br>
                                    2.<br>
                                    3.<br>
                                    4.<br>
                                    5.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Drawing Activity</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Draw one biotic resource and one abiotic resource that you saw outside:
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
                        <div style="border: 2px dashed #ccc; padding: 10px; text-align: center;">
                            <strong>Biotic Resource:</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                        </div>
                        <div style="border: 2px dashed #ccc; padding: 10px; text-align: center;">
                            <strong>Abiotic Resource:</strong>
                            <div class="drawing-area" style="height: 120px; margin-top: 5px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Why do we need both biotic and abiotic resources? How do they work together?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look around your home. List 3 biotic resources and 3 abiotic resources you see. Draw one of each.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Why Resources Matter & How to Save Them",
        lessonContent: `
            <p>Today we'll learn why natural resources are important and how we can protect them!</p>
            <p><strong>Key Question:</strong> Why do we need natural resources, and what happens if we run out?</p>
            <p><strong>What Do Natural Resources Give Us?</strong></p>
            <ul>
                <li><strong>Forests</strong> → Fresh air (oxygen), timber for desks and homes, paper, and homes for animals</li>
                <li><strong>Rivers and Lakes</strong> → Fresh water for drinking, washing, and fish for food</li>
                <li><strong>Soil</strong> → A place for plants to grow food</li>
                <li><strong>Sunlight</strong> → Energy for plants to grow and warmth for our planet</li>
                <li><strong>Rocks and Minerals</strong> → Building materials and metals for tools</li>
            </ul>
            <p><strong>What Happens When We Don't Protect Resources?</strong></p>
            <ul>
                <li>If a forest is cut down completely: less oxygen, animals lose their homes, soil washes away</li>
                <li>If rivers become polluted: no clean drinking water, fish die</li>
                <li>If we waste soil: plants can't grow food</li>
            </ul>
            <p><strong>Ways to Protect Natural Resources:</strong></p>
            <ul>
                <li>Plant trees to replace ones that are cut down</li>
                <li>Turn off taps when not using water</li>
                <li>Don't litter - keep soil and water clean</li>
                <li>Use only what you need</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> The Forest Problem</div>
                <p>"If a local forest is cut down completely, what happens to our air and our soil?" Less trees mean less oxygen. Without tree roots, soil can wash away in the rain.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-school"></i> Classroom Connection</div>
                <p>The wooden desks in your classroom came from trees! That's why we need to plant new trees when we cut them down.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Small Actions Matter</div>
                <p>Turning off the water while brushing your teeth can save up to 8 gallons of water a day!</p>
            </div>
        `,
        taskInstructions: "Brainstorm resource uses, solve problems, and create management rules.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Connecting Resources to Real Life</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Draw a line to match each resource to what it gives us:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div>
                                <div>• Forests</div>
                                <div>• Rivers</div>
                                <div>• Soil</div>
                                <div>• Sunlight</div>
                            </div>
                            <div>
                                <div>→ Fresh water and fish</div>
                                <div>→ Energy for plants to grow</div>
                                <div>→ Oxygen and timber</div>
                                <div>→ Place for plants to grow food</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Problem-Solving Scenarios</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read each scenario and write what would happen:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>Scenario 1:</strong> "All the trees in a forest are cut down and not replaced."</div>
                        <div>What happens to the air? _________</div>
                        <div>What happens to the animals? _________</div>
                        <div>What happens to the soil? _________</div>
                        <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>Scenario 2:</strong> "People leave taps running and waste water every day."</div>
                        <div>What might happen to the river? _________</div>
                        <div class="answer-space" style="height: 50px; margin-top: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create a Management Rule</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> With your group, create one "Management Rule" for the classroom or school to protect a natural resource:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Draw a picture of your group's rule in action:
                    <div class="drawing-area" style="height: 100px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
        `,
        homework: "Ask a family member: What natural resource do you think is most important? Why? Write their answer.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "Science",
        topic: "Environmental Management",
        subtopic: "Managing Waste (The Three Rs)",
        lessonContent: `
            <p>Today we'll learn how to manage waste using the Three Rs: Reduce, Reuse, Recycle!</p>
            <p><strong>Key Question:</strong> What happens to our trash, and how can we make less of it?</p>
            <p><strong>Types of Waste:</strong></p>
            <ul>
                <li><strong>Solid Waste:</strong> Plastic bottles, fruit peels, paper, cans, glass jars</li>
                <li><strong>Liquid Waste:</strong> Dirty water from washing, used cooking oil, wastewater from factories</li>
            </ul>
            <p><strong>The Three Rs of Waste Management:</strong></p>
            <ol>
                <li><strong>REDUCE:</strong> Use less stuff so there's less trash
                    <ul>
                        <li>Use a reusable water bottle instead of buying plastic bottles</li>
                        <li>Turn off lights to save energy</li>
                    </ul>
                </li>
                <li><strong>REUSE:</strong> Use things again instead of throwing them away
                    <ul>
                        <li>Turn an old jam jar into a pencil holder</li>
                        <li>Use both sides of paper before recycling</li>
                    </ul>
                </li>
                <li><strong>RECYCLE:</strong> Turn old things into new things
                    <ul>
                        <li>Paper can become new paper</li>
                        <li>Glass bottles can become new bottles</li>
                        <li>Plastic can become new plastic items</li>
                    </ul>
                </li>
            </ol>
            <p><strong>How to Dispose of Waste Properly:</strong></p>
            <ul>
                <li><strong>Incinerator:</strong> A special facility that safely burns certain types of waste at very high temperatures</li>
                <li><strong>Landfill:</strong> A designated area where waste is buried</li>
                <li><strong>Composting:</strong> Turning fruit and vegetable peels into healthy soil for plants</li>
            </ul>
            <p><strong>Never Litter!</strong> Littering hurts animals, pollutes water, and makes our environment ugly.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Reduce in Action</div>
                <p>Bringing a reusable water bottle to school means you won't throw away 200+ plastic bottles every year!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-jar"></i> Reuse Idea</div>
                <p>An old glass jam jar can become: a pencil holder, a candle holder, a flower vase, or a container for leftovers!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Composting</div>
                <p>Apple cores, banana peels, and vegetable scraps don't have to go to the dump. They can become rich soil for growing new plants!</p>
            </div>
        `,
        taskInstructions: "Sort waste into categories, learn the Three Rs, and create a classroom poster.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Waste Sorting</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Sort these items into Solid Waste or Liquid Waste:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><em>Items: plastic bottle, dirty dishwater, banana peel, used cooking oil, paper, glass jar, apple core</em></div>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                            <tr style="background-color: #1565C0; color: white;">
                                <th style="padding: 10px; border: 1px solid #ddd;">Solid Waste</th>
                                <th style="padding: 10px; border: 1px solid #ddd;">Liquid Waste</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                                <td style="padding: 10px; border: 1px solid #ddd; height: 150px; vertical-align: top;"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: The Three Rs in Action</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> For each item, write which R you would use (Reduce, Reuse, or Recycle):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Empty plastic water bottle: _________</div>
                        <div>• Paper printed on one side: _________</div>
                        <div>• Glass jam jar: _________</div>
                        <div>• Banana peel: _________</div>
                        <div>• Aluminum can: _________</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Name one way you can REDUCE waste at school:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Name one way you can REUSE something at home:
                    <div class="answer-space" style="height: 40px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Three Rs Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Create a "Three Rs" poster for the classroom. Include the words REDUCE, REUSE, RECYCLE and a picture for each:
                    <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px solid #2E7D32;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Why is it bad to litter? What can happen to animals and water?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Look in your trash at home. Find one item you could REDUCE using, one you could REUSE, and one you could RECYCLE. Draw or describe them.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade4ScienceWeek2);
    console.log("grade4-science-week2.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade4ScienceWeek2',
        metadata: grade4ScienceWeek2.metadata,
        days: grade4ScienceWeek2
    });
    console.log("grade4-science-week2.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade4ScienceWeek2 = grade4ScienceWeek2;
console.log("grade4-science-week2.js loaded and registered successfully");