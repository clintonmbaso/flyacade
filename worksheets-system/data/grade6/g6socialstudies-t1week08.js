// Grade 6 Social Studies - Week 8 Data
const grade6SocialStudiesWeek8 = {
    metadata: {
        grade: 6,
        subject: "Social Studies",
        week: 8,
        title: "Global Geography: Landforms and Water Bodies",
        description: "Identification of major landforms, islands, and water bodies on a world map, and understanding their geographical significance"
    },
    
    monday: {
        subject: "Social Studies",
        topic: "Major Landforms of the World",
        subtopic: "Identifying and locating mountains, valleys, deserts, and plains on a world map",
        lessonContent: `
            <p>Welcome to our exploration of Earth's diverse surface! Today we will learn about the major landforms that shape our planet.</p>
            <p><strong>Key Concept:</strong> Landforms are natural features on Earth's surface that have distinct shapes and characteristics. They are created by geological processes over millions of years.</p>
            <p><strong>Major Landforms and Their Characteristics:</strong></p>
            <ul>
                <li><strong>Mountains:</strong> High elevations with steep slopes, formed by tectonic forces or volcanic activity</li>
                <li><strong>Valleys:</strong> Low areas between mountains or hills, often carved by rivers or glaciers</li>
                <li><strong>Deserts:</strong> Dry regions with little rainfall, characterized by sand, rock, or gravel surfaces</li>
                <li><strong>Plains:</strong> Flat or gently rolling land, often used for agriculture</li>
            </ul>
            <p><strong>Why are landforms important?</strong> Landforms affect climate, determine where people live, influence transportation routes, and impact economic activities. They are fundamental to understanding human geography and settlement patterns.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-mountain" style="color: brown;"></i> Real-World Example</div>
                <p>The Himalayan Mountains in Asia are the highest in the world and affect weather patterns across the entire continent. Mount Everest, the tallest peak, reaches 8,848 meters above sea level.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-tint" style="color: blue;"></i> Valley Importance</div>
                <p>River valleys like the Nile Valley in Egypt have been cradles of civilization for thousands of years because they provide water, fertile soil, and transportation routes.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sun" style="color: orange;"></i> Desert Adaptation</div>
                <p>The Sahara Desert in Africa is the world's largest hot desert. People and animals have developed unique adaptations to survive in this harsh environment with extreme temperatures.</p>
            </div>
        `,
        taskInstructions: "Complete the following activities to reinforce your understanding of world landforms.",
        taskContent: `
            <div class="task-item">
                <span class="task-number">1</span> Define each of these landforms in your own words:
                <div style="margin-left: 20px; margin-top: 10px;">
                    <div>Mountain: <div class="answer-space" style="height: 40px;"></div></div>
                    <div>Valley: <div class="answer-space" style="height: 40px;"></div></div>
                    <div>Desert: <div class="answer-space" style="height: 40px;"></div></div>
                    <div>Plain: <div class="answer-space" style="height: 40px;"></div></div>
                </div>
            </div>
            <div class="task-item">
                <span class="task-number">2</span> On your blank world map, locate and label:
                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li>Himalayan Mountains (Asia)</li>
                    <li>Amazon Basin (South America)</li>
                    <li>Sahara Desert (Africa)</li>
                    <li>Great Plains (North America)</li>
                    <li>Alps Mountains (Europe)</li>
                </ul>
                <div class="drawing-area" style="height: 250px; margin-top: 10px; border: 2px dashed #ccc;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">3</span> Choose one landform type and explain two ways it affects human life:
                <div class="answer-space" style="height: 100px;"></div>
            </div>
            <div class="task-item">
                <span class="task-number">4</span> How do landforms influence where cities develop? Give one example:
                <div class="answer-space" style="height: 80px;"></div>
            </div>
        `,
        homework: "Find and bring to class images of three different landforms from magazines or printed from the internet. Label each with its name and location.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "Social Studies",
        topic: "Islands: Identification and Significance",
        subtopic: "Understanding what islands are and their geographical, cultural, and ecological importance",
        lessonContent: `
            <p>Today we explore islands - landforms surrounded by water that have played crucial roles in history, culture, and ecology.</p>
            <p><strong>What are islands?</strong> Islands are pieces of land completely surrounded by water. They can be found in oceans, seas, lakes, and rivers.</p>
            <p><strong>Types of Islands:</strong></p>
            <ol>
                <li><strong>Continental Islands:</strong> Formed from continental shelf (ex: Greenland, British Isles)</li>
                <li><strong>Oceanic Islands:</strong> Formed by volcanic activity (ex: Hawaiian Islands)</li>
                <li><strong>Coral Islands:</strong> Formed from coral reefs (ex: Maldives, Great Barrier Reef islands)</li>
                <li><strong>Artificial Islands:</strong> Created by humans (ex: Palm Islands in Dubai)</li>
            </ol>
            <p><strong>Historical Importance:</strong> Islands have been centers of trade, exploration, and cultural development. Many were discovered during the Age of Exploration and became important ports.</p>
            <p><strong>Ecological Significance:</strong> Islands often have unique plants and animals that evolved in isolation, making them hotspots for biodiversity and conservation efforts.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-globe-americas"></i> Island Diversity</div>
                <p>Greenland is the world's largest island, while some Pacific islands are so small they disappear during high tide!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-history"></i> Historical Role</div>
                <p>Islands like Malta in the Mediterranean and Sri Lanka in the Indian Ocean have been important trading hubs for centuries due to their strategic locations.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-leaf"></i> Ecological Importance</div>
                <p>The Galapagos Islands are famous for unique species like giant tortoises and marine iguanas. Charles Darwin's observations there helped develop his theory of evolution.</p>
            </div>
        `,
        taskInstructions: "Identify major world islands on your map and research their significance.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Island Identification</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On your world map, locate and label these major islands:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Greenland</li>
                        <li>Madagascar</li>
                        <li>Japan (archipelago)</li>
                        <li>British Isles</li>
                        <li>Caribbean Islands</li>
                        <li>Philippines</li>
                    </ul>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Island Characteristics</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> What is the main difference between continental and oceanic islands?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why do islands often have unique plants and animals not found elsewhere?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Research Task</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Choose one island from the list above and research:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Island Name: <span class="answer-space" style="width: 200px;"></span></div>
                        <div>Location (ocean/sea): <span class="answer-space" style="width: 200px;"></span></div>
                        <div>One interesting fact: <div class="answer-space" style="height: 40px;"></div></div>
                        <div>Historical importance: <div class="answer-space" style="height: 60px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Group Discussion Preparation</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> List three challenges that people living on islands might face:
                    <div class="answer-space" style="height: 90px;"></div>
                </div>
            </div>
        `,
        homework: "Prepare a brief presentation (2-3 minutes) about the island you researched. Include its location, type, and why it's geographically important.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "Social Studies",
        topic: "Water Bodies, Landforms, and Islands of the World",
        subtopic: "Understanding the global significance of water bodies and their relationship with landforms and islands",
        lessonContent: `
            <p>Today we integrate our knowledge of landforms, islands, and water bodies to understand Earth's complete geographical system.</p>
            <p><strong>Major Water Bodies:</strong></p>
            <ul>
                <li><strong>Oceans:</strong> Vast bodies of saltwater (Pacific, Atlantic, Indian, Southern, Arctic)</li>
                <li><strong>Seas:</strong> Smaller than oceans, partially enclosed by land (Mediterranean, Caribbean)</li>
                <li><strong>Rivers:</strong> Flowing freshwater bodies that often create valleys</li>
                <li><strong>Lakes:</strong> Inland bodies of water surrounded by land</li>
            </ul>
            <p><strong>Geographical Relationships:</strong> Water bodies and landforms constantly interact. Rivers carve valleys, oceans shape coastlines, and glaciers create fjords.</p>
            <p><strong>Human Connections:</strong> Throughout history, civilizations developed along rivers and coasts. Water bodies provide transportation routes, food sources, and boundaries between nations.</p>
            <p><strong>Ecological Systems:</strong> Landforms, islands, and water bodies create diverse habitats that support unique ecosystems and biodiversity.</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-water"></i> Ocean Currents and Climate</div>
                <p>The Gulf Stream, a warm ocean current, makes Western Europe much warmer than other regions at the same latitude, like Canada.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ship"></i> Transportation and Trade</div>
                <p>Strategic waterways like the Panama Canal and Suez Canal save ships thousands of miles by creating shortcuts between oceans.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-fish"></i> Resource Importance</div>
                <p>Coastal areas and islands often rely on fishing as a major food source and economic activity, making protection of marine ecosystems crucial.</p>
            </div>
        `,
        taskInstructions: "Apply your knowledge through map exercises, research, and presentation of geographical features.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Comprehensive Mapping</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> On your world map, label:
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li>Three major oceans</li>
                        <li>Two important seas</li>
                        <li>One major river on each continent (except Antarctica)</li>
                        <li>Three island groups</li>
                        <li>Two mountain ranges</li>
                    </ul>
                    <div class="drawing-area" style="height: 300px; margin-top: 10px; border: 2px dashed #ccc;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Geographical Relationships</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> How do rivers influence the formation of valleys?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Why are coastal plains often heavily populated?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> How do oceans affect island climates compared to continental interiors?
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Group Presentations</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Present your island research to your group. Take notes on two other islands presented:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>Island 1: <span class="answer-space" style="width: 150px;"></span> Key fact: <div class="answer-space" style="height: 40px;"></div></div>
                        <div>Island 2: <span class="answer-space" style="width: 150px;"></span> Key fact: <div class="answer-space" style="height: 40px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Synthesis</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Draw a diagram showing how landforms, islands, and water bodies interact in one geographical region:
                    <div class="drawing-area" style="height: 200px;"></div>
                </div>
            </div>
        `,
        homework: "Write a one-page summary explaining how geography (landforms, water bodies, islands) has influenced the development of human civilization. Give at least three specific examples.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6SocialStudiesWeek8);
    console.log("social-studies-week8.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6SocialStudiesWeek8);
    console.log("social-studies-week8.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6SocialStudiesWeek8',
        metadata: grade6SocialStudiesWeek8.metadata,
        days: grade6SocialStudiesWeek8
    });
    console.log("social-studies-week8.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6SocialStudiesWeek8 = grade6SocialStudiesWeek8;
console.log("social-studies-week8.js loaded and registered successfully");