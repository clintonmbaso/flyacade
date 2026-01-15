// Grade 6 Science - Week 7 Data
const grade6ScienceWeek7 = {
    metadata: {
        grade: 6,
        subject: "Science",
        term: 1,
        week: 7,
        title: "The Micro-World: Bacteria, Fungi, and Viruses",
        description: "Exploring microorganisms, their classification, economic importance, and case study on Tuberculosis"
    },
    
    tuesday: {
        subject: "Science",
        topic: "Microorganisms",
        subtopic: "The Micro-World (Bacteria, Fungi, and Viruses) - Classification and Structure",
        lessonContent: `
            <p>Welcome to the fascinating world of microorganisms! Today we will explore the tiny life forms that exist all around us - bacteria, fungi, and viruses.</p>
            <p><strong>Key Concept:</strong> Microorganisms are living things too small to be seen with the naked eye. They come in different forms and have unique structures.</p>
            <p><strong>Three Main Types of Microbes:</strong></p>
            <ol>
                <li><strong>Bacteria:</strong> Single-celled organisms without a nucleus (prokaryotes). They come in different shapes - rods, spheres, and spirals.</li>
                <li><strong>Fungi:</strong> Organisms that include yeasts, molds, and mushrooms. They have cell walls made of chitin.</li>
                <li><strong>Viruses:</strong> Tiny particles that are not considered living cells. They need a host cell to reproduce.</li>
            </ol>
            <p><strong>Structural Differences:</strong> Bacteria have cell walls and can live independently. Fungi have hyphae (thread-like structures) and can be multicellular. Viruses have a protein coat and genetic material inside.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bacteria" style="color: #4A90E2;"></i> Bacteria Example</div>
                <p>E. coli bacteria are rod-shaped and live in our intestines. Some help with digestion, while others can make us sick.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-seedling"></i> Fungi Example</div>
                <p>Bread mold (Penicillium) is a fungus. The antibiotic penicillin was discovered from this type of mold!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-virus"></i> Virus Example</div>
                <p>Influenza virus causes the flu. It's so small that 100 million viruses could fit on a pinhead!</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to understand the classification and structure of microbes.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> <strong>Describing Microbes:</strong> Define each type of microorganism in your own words:
                <div class="answer-space" style="height: 120px;">
                    <p><em>Bacteria:</em></p>
                    <p><em>Fungi:</em></p>
                    <p><em>Viruses:</em></p>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> <strong>Scientific Drawing:</strong> Draw and label the basic structure of each microbe based on the images shown:
                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                    <div style="width: 32%;">
                        <p style="text-align: center; font-weight: bold;">Bacterium</p>
                        <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                    </div>
                    <div style="width: 32%;">
                        <p style="text-align: center; font-weight: bold;">Fungus</p>
                        <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                    </div>
                    <div style="width: 32%;">
                        <p style="text-align: center; font-weight: bold;">Virus</p>
                        <div class="drawing-area" style="height: 120px; border: 2px dashed #ccc;"></div>
                    </div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> <strong>Venn Diagram Comparison:</strong> Create a Venn diagram showing:
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>Unique characteristics of each microbe</li>
                    <li>Overlapping traits (e.g., all can cause disease)</li>
                </ul>
                <div class="drawing-area" style="height: 200px; margin-top: 10px; border: 2px dashed #4A90E2;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> <strong>Assessment:</strong> Match each diagram to its correct classification:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>A. Spherical with flagella ___ 1. Bacterium</div>
                    <div>B. Thread-like hyphae ___ 2. Fungus</div>
                    <div>C. Geometric protein coat ___ 3. Virus</div>
                    <div>D. Rod-shaped with cell wall ___ 1. Bacterium</div>
                </div>
            </div>
        `,
        homework: "Find three pictures of microorganisms (one bacteria, one fungus, one virus) from books or the internet. Write one fact about each.",
        homeworkDue: "Thursday"
    },
    
    wednesday: {
        subject: "Science",
        topic: "Microorganisms",
        subtopic: "Microbes in Our Lives - Economic Importance and Disease Prevention",
        lessonContent: `
            <p>Today we explore how microorganisms affect our daily lives - both positively and negatively. Microbes are not just germs; they have many important uses!</p>
            <p><strong>The Good & The Bad of Microbes:</strong></p>
            <div style="display: flex; justify-content: space-between; margin: 15px 0;">
                <div style="width: 48%; padding: 10px; background: #e8f5e8; border-radius: 5px;">
                    <h4 style="color: #2e7d32;">The GOOD</h4>
                    <ul>
                        <li><strong>Decomposition:</strong> Bacteria and fungi break down dead matter, recycling nutrients</li>
                        <li><strong>Food Production:</strong> Yeast for bread, bacteria for yogurt and cheese</li>
                        <li><strong>Medicine:</strong> Antibiotics from fungi, insulin production using bacteria</li>
                        <li><strong>Digestion:</strong> Gut bacteria help digest food and produce vitamins</li>
                    </ul>
                </div>
                <div style="width: 48%; padding: 10px; background: #ffebee; border-radius: 5px;">
                    <h4 style="color: #c62828;">The BAD</h4>
                    <ul>
                        <li><strong>Diseases:</strong> Bacteria cause strep throat, fungi cause athlete's foot, viruses cause COVID-19</li>
                        <li><strong>Food Spoilage:</strong> Mold on bread, bacteria in spoiled milk</li>
                        <li><strong>Infections:</strong> Can lead to serious illnesses if not treated</li>
                    </ul>
                </div>
            </div>
            <p><strong>Preventing Disease Spread:</strong> Good hygiene practices, vaccinations, and proper treatments can control harmful microbes.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-bread-slice"></i> Food Production</div>
                <p>Yeast (a fungus) makes bread rise by producing carbon dioxide gas. Without microbes, we wouldn't have bread, yogurt, or cheese!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-recycle"></i> Decomposition</div>
                <p>Fungi and bacteria are nature's recyclers. They break down fallen leaves and dead animals, returning nutrients to the soil.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-shield-virus"></i> Prevention</div>
                <p>Vaccinations train your immune system to recognize viruses. Handwashing removes bacteria before they can enter your body.</p>
            </div>
        `,
        taskInstructions: "Explore the economic importance of microbes and brainstorm disease prevention strategies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: The Good & The Bad</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> List three ways microbes HELP humans (economic importance):
                    <div class="answer-space" style="height: 90px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> List three ways microbes can HARM humans:
                    <div class="answer-space" style="height: 90px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Prevention Brainstorm</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Identify hygiene practices that prevent disease spread:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>• Handwashing: _________ times per day</div>
                        <div>• Covering mouth when: _________</div>
                        <div>• Safe food handling: _________</div>
                        <div>• Vaccinations for: _________</div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Community Awareness Poster</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Design a poster "sensitizing" your community about good hygiene:
                    <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #4A90E2;">
                        <p style="text-align: center; color: #666; padding-top: 100px;">[Design your poster here]</p>
                    </div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Include: A catchy title, 3 key hygiene tips, and colorful visuals</p>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Assessment</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> List two ways microbes help humans and two ways they can be harmful:
                    <div class="answer-space" style="height: 100px;">
                        <p><strong>Help:</strong> 1. _________ 2. _________</p>
                        <p><strong>Harm:</strong> 1. _________ 2. _________</p>
                    </div>
                </div>
            </div>
        `,
        homework: "Interview a family member about their hygiene habits. Report on one good practice and one that could be improved.",
        homeworkDue: "Friday"
    },
    
    thursday: {
        subject: "Science",
        topic: "Microorganisms",
        subtopic: "Case Study – Tuberculosis (TB)",
        lessonContent: `
            <p>Today we focus on a specific disease caused by bacteria: Tuberculosis (TB). Understanding TB helps us learn how to prevent and manage infectious diseases in our community.</p>
            <p><strong>What is Tuberculosis?</strong></p>
            <ul>
                <li><strong>Causative Agent:</strong> Mycobacterium tuberculosis (a type of bacteria)</li>
                <li><strong>Main Symptoms:</strong> Persistent cough (3+ weeks), fever, night sweats, weight loss, coughing up blood</li>
                <li><strong>Transmission:</strong> Airborne - spreads when an infected person coughs, sneezes, or talks</li>
                <li><strong>Affected Area:</strong> Primarily attacks the lungs but can affect other organs</li>
            </ul>
            <p><strong>Risk Factors and Vulnerable Groups:</strong></p>
            <ol>
                <li>Children under 5 years old</li>
                <li>Elderly individuals</li>
                <li>People with weakened immune systems (HIV/AIDS patients)</li>
                <li>Those living in crowded or poorly ventilated spaces</li>
                <li>Healthcare workers</li>
            </ol>
            <p><strong>Importance of Treatment:</strong> TB is curable with proper antibiotics taken consistently for 6-9 months. Incomplete treatment can lead to drug-resistant TB.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lungs"></i> TB Transmission</div>
                <p>When a person with active TB coughs, they release thousands of bacteria into the air. These can be inhaled by others nearby.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-user-injured"></i> Vulnerable Groups</div>
                <p>Children under 5 have developing immune systems, making them more susceptible to severe TB disease.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pills"></i> Treatment Adherence</div>
                <p>TB treatment requires taking multiple antibiotics daily for months. Missing doses can make the bacteria resistant to drugs.</p>
            </div>
        `,
        taskInstructions: "Analyze TB transmission, prevention, and management strategies.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: TB Analysis</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Identify the causative agent of TB and three main symptoms:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Risk & Spread Investigation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How is TB spread? Why is this transmission method particularly concerning?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> List three vulnerable groups and explain why they're at higher risk:
                    <div class="answer-space" style="height: 100px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Management & Empathy</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Why is consistent medication important for TB patients? What happens if treatment is incomplete?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">5</span> Brainstorm three ways to show empathy and support to TB patients:
                    <div class="answer-space" style="height: 90px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Community Action Plan</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> <strong>Assessment:</strong> Propose three community-level actions to reduce TB spread:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>1. <div class="answer-space" style="height: 30px; width: 80%; display: inline-block;"></div></div>
                        <div>2. <div class="answer-space" style="height: 30px; width: 80%; display: inline-block;"></div></div>
                        <div>3. <div class="answer-space" style="height: 30px; width: 80%; display: inline-block;"></div></div>
                    </div>
                    <p style="font-size: 0.9em; color: #666; margin-top: 10px;">(Examples: improved ventilation in public spaces, contact tracing programs, immunization campaigns)</p>
                </div>
            </div>
        `,
        homework: "Research one other disease caused by bacteria (not TB). Write a brief paragraph about its symptoms and prevention.",
        homeworkDue: "Monday"
    },
    
    friday: {
        subject: "Science",
        topic: "Microorganisms",
        subtopic: "Microbe Review and Community Action Planning",
        lessonContent: `
            <p>Today we review everything we've learned about microorganisms and develop community action plans to promote health and hygiene.</p>
            <p><strong>Week 7 Review Summary:</strong></p>
            <ol>
                <li><strong>Classification:</strong> Bacteria (prokaryotes), Fungi (cell walls of chitin), Viruses (need host cells)</li>
                <li><strong>Economic Importance:</strong> Decomposition, food production, medicine - but also disease causing</li>
                <li><strong>Disease Prevention:</strong> Hygiene, vaccinations, proper treatments</li>
                <li><strong>TB Case Study:</strong> Airborne bacterial disease requiring consistent treatment and community support</li>
            </ol>
            <p><strong>Creating Effective Community Awareness:</strong></p>
            <ul>
                <li>Clear, simple messages that everyone can understand</li>
                <li>Focus on practical actions people can take</li>
                <li>Address local concerns and misconceptions</li>
                <li>Use multiple communication methods (posters, talks, demonstrations)</li>
            </ul>
            <p><strong>The Big Picture:</strong> Microorganisms are an essential part of our world. Understanding them helps us harness their benefits while protecting ourselves from harm.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-clipboard-check"></i> Review Activity</div>
                <p>Create a table comparing bacteria, fungi, and viruses. Include: Cell structure, reproduction, size, and examples.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-users"></i> Community Engagement</div>
                <p>Effective health messages use local languages and culturally appropriate examples. For instance, relate handwashing to local food preparation customs.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-handshake"></i> Support Systems</div>
                <p>Community support groups for TB patients can provide emotional support, remind about medications, and reduce stigma.</p>
            </div>
        `,
        taskInstructions: "Review microorganisms and develop a community health action plan.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comprehensive Review Table</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete the comparison table:
                    <table style="width: 100%; margin-top: 10px; border-collapse: collapse;">
                        <tr style="background: #4A90E2; color: white;">
                            <th style="padding: 8px; border: 1px solid #ccc;">Feature</th>
                            <th style="padding: 8px; border: 1px solid #ccc;">Bacteria</th>
                            <th style="padding: 8px; border: 1px solid #ccc;">Fungi</th>
                            <th style="padding: 8px; border: 1px solid #ccc;">Viruses</th>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ccc;">Cell Type</td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ccc;">Example</td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ccc;">Beneficial Use</td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                            <td style="padding: 8px; border: 1px solid #ccc;"><div class="answer-space" style="height: 25px;"></div></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Community Action Plan Development</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Design a complete community action plan to address microbial diseases:
                    <div style="margin-left: 20px; margin-top: 15px;">
                        <div><strong>Target Issue:</strong> <div class="answer-space" style="height: 25px; width: 70%; display: inline-block;"></div></div>
                        <div><strong>Key Message:</strong> <div class="answer-space" style="height: 25px; width: 70%; display: inline-block;"></div></div>
                        <div><strong>Three Action Steps:</strong></div>
                        <ol style="margin-left: 20px;">
                            <li><div class="answer-space" style="height: 25px; width: 80%; margin: 5px 0;"></div></li>
                            <li><div class="answer-space" style="height: 25px; width: 80%; margin: 5px 0;"></div></li>
                            <li><div class="answer-space" style="height: 25px; width: 80%; margin: 5px 0;"></div></li>
                        </ol>
                        <div><strong>Target Audience:</strong> <div class="answer-space" style="height: 25px; width: 70%; display: inline-block;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Final Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> What was the most surprising thing you learned about microorganisms this week?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How will you apply what you learned about disease prevention in your daily life?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Peer Review of Community Plans</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Exchange action plans with a partner. Provide one suggestion to improve their plan:
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Finalize your community action plan. Create a simple poster or flyer based on your plan to share with family.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6ScienceWeek7);
    console.log("grade6-science-week7.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6ScienceWeek7);
    console.log("grade6-science-week7.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6ScienceWeek7',
        metadata: grade6ScienceWeek7.metadata,
        days: grade6ScienceWeek7
    });
    console.log("grade6-science-week7.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6ScienceWeek7 = grade6ScienceWeek7;
console.log("grade6-science-week7.js loaded and registered successfully");