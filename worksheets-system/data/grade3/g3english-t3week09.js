// Grade 3 English - Term 3 Week 9 Data
const grade3EnglishWeek9 = {
    metadata: {
        grade: 3,
        subject: "English",
        term: 3,
        week: 9,
        title: "Summarising",
        description: "Learning to identify main ideas and write short summaries of texts"
    },
    
    monday: {
        subject: "English",
        topic: "Summarising",
        subtopic: "Identifying Important Ideas",
        lessonContent: `
            <p>Welcome to our week on summarising! Today we'll learn how to tell the difference between a main idea and a small detail.</p>
            <p><strong>Key Question:</strong> What is the most important thing that happened in the story?</p>
            <p><strong>Introduction:</strong> When we summarise, we need to find the MOST important information and leave out the extra details that aren't necessary.</p>
            <p><strong>Main Idea vs. Details:</strong></p>
            <ul>
                <li><strong>Main Idea:</strong> The most important thing the author wants you to know</li>
                <li><strong>Details:</strong> Extra information that tells more about the main idea</li>
            </ul>
            <p><strong>Think About It:</strong> If you had to tell a friend what happened in only one sentence, what would you say? That's the main idea!</p>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Example</div>
                <p><strong>Story:</strong> "Tom wore his blue sneakers to the store. He bought milk and bread. The store was very busy."</p>
                <p><strong>Main Idea:</strong> Tom went to the store to buy milk and bread.</p>
                <p><strong>Extra Detail (cross out):</strong> He wore blue sneakers.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-cut"></i> Crossing Out Extras</div>
                <p>When you summarise, imagine you have a pair of scissors. Cut away the small details and keep only the big, important parts!</p>
            </div>
        `,
        taskInstructions: "Read the story and cross out the extra details. Write the main idea.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Main Idea</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this story about a boy going to the store:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p><strong>Sam's Trip to the Store</strong></p>
                        <p>Sam put on his red cap and walked to the corner store. The sun was shining brightly. He needed to buy eggs for his mom. The store had a blue sign outside. Sam bought one dozen brown eggs. He walked home quickly.</p>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What is the most important thing that happened? Write it here:
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Cross out the "extra" details (words that are not important to the main idea). List two details you would remove:
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Practice with Another Story</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read this story and circle the main idea from the choices below:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p>Maria found a lost puppy in the park. The puppy had fluffy brown fur and big eyes. Maria took the puppy home and gave it water. She made signs to find the puppy's owner.</p>
                    </div>
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>A. The puppy had fluffy brown fur.</div>
                        <div>B. Maria found a lost puppy and tried to help it.</div>
                        <div>C. Maria made signs to find the owner.</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short story or watch a short video. Tell a family member the main idea in one sentence.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Summarising",
        subtopic: "Writing in Short Phrases",
        lessonContent: `
            <p>Today we'll learn how to turn long sentences into short, meaningful phrases!</p>
            <p><strong>Key Question:</strong> How can we make a long sentence shorter but still keep the important meaning?</p>
            <p><strong>What is a Short Phrase?</strong></p>
            <ul>
                <li>A short phrase uses fewer words but still tells the main action</li>
                <li>We can remove words like "the," "a," "very," and extra describing words</li>
                <li>Keep the WHO (noun) and the ACTION (verb)</li>
            </ul>
            <p><strong>How to Shorten a Sentence:</strong></p>
            <ol>
                <li>Find the action (what happened)</li>
                <li>Find who did the action</li>
                <li>Remove extra describing words (colors, sizes, "very," "really")</li>
                <li>Write the shorter version</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-compress-alt"></i> Shortening Examples</div>
                <p><strong>Long sentence:</strong> The big red bus drove slowly down the long, winding road.</p>
                <p><strong>Short phrase:</strong> Bus drove down the road.</p>
                <p><strong>Another example:</strong> The tiny, furry kitten slept quietly on the soft, warm blanket.</p>
                <p><strong>Short phrase:</strong> Kitten slept on blanket.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-scissors"></i> What to Cut</div>
                <p>✂️ Cut: adjectives (big, red, long, winding, tiny, furry, soft, warm)</p>
                <p>✓ Keep: nouns (bus, road, kitten, blanket) and verbs (drove, slept)</p>
            </div>
        `,
        taskInstructions: "Turn long sentences into short, meaningful phrases.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Shorten These Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Shorten each sentence to a short phrase:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div><strong>a.</strong> The happy little girl ran quickly to the big playground.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; padding: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>b.</strong> The hungry brown dog ate all of its delicious food.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; padding: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>c.</strong> The tall teacher wrote math problems on the dusty chalkboard.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; padding: 5px;"></div>
                        
                        <div style="margin-top: 15px;"><strong>d.</strong> The fast blue car zoomed past the old yellow house.</div>
                        <div class="answer-space" style="height: 40px; margin-top: 5px; border: 1px solid #ccc; padding: 5px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write a long sentence (with at least 8 words), then shorten it to a short phrase:
                    <div><strong>Long sentence:</strong> <span class="answer-space" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                    <div style="margin-top: 10px;"><strong>Short phrase:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                </div>
            </div>
        `,
        homework: "Find three sentences in a book at home. Write each sentence and then write a shorter version.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Summarising",
        subtopic: "Simple Paragraph Summary",
        lessonContent: `
            <p>Today we'll learn how to write a one-sentence summary of a short paragraph!</p>
            <p><strong>Key Question:</strong> How can we tell an entire story in just one sentence?</p>
            <p><strong>What is a Summary Sentence?</strong></p>
            <ul>
                <li>One sentence that tells the most important information</li>
                <li>It includes WHO and WHAT happened</li>
                <li>We leave out small details</li>
            </ul>
            <p><strong>Steps to Write a One-Sentence Summary:</strong></p>
            <ol>
                <li>Read the whole paragraph carefully</li>
                <li>Ask: Who is the paragraph about?</li>
                <li>Ask: What happened (the main action)?</li>
                <li>Write one sentence that answers both questions</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-dog"></i> Example Paragraph</div>
                <p><strong>Paragraph:</strong> Max is a brown dog who loves to play fetch. He has a red ball that he carries everywhere. One day, Max's owner threw the ball across the park. Max ran fast and caught it in his mouth. Then he brought it back to his owner.</p>
                <p><strong>One-sentence summary:</strong> Max the dog played fetch with his owner at the park.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-check-circle"></i> What to Include</div>
                <p>✓ Who: Max (the dog)</p>
                <p>✓ What: played fetch with his owner at the park</p>
                <p>✗ Leave out: brown dog, red ball, ran fast, caught in mouth</p>
            </div>
        `,
        taskInstructions: "Read each paragraph and write a one-sentence summary.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Summarise the Paragraph</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read this paragraph about a dog:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p>Bella the dog was sleeping in her cozy bed. Suddenly, she heard a loud noise at the door. Bella jumped up and ran to see who was there. It was her family coming home! Bella wagged her tail and jumped with joy.</p>
                    </div>
                    <div>Write a one-sentence summary:</div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: More Summary Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Read this paragraph and write a one-sentence summary:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p>It was raining outside, so Lily could not go to the park. She felt sad at first. Then she remembered her art box. Lily spent the afternoon drawing colorful pictures of flowers and butterflies. She had a wonderful time!</p>
                    </div>
                    <div>Write a one-sentence summary:</div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Your Turn</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short paragraph (3-4 sentences) about something you did yesterday. Then write a one-sentence summary of your paragraph:
                    <div><strong>My paragraph:</strong></div>
                    <div class="answer-space" style="height: 100px; margin-top: 5px; border: 1px solid #ccc; padding: 10px;"></div>
                    <div style="margin-top: 10px;"><strong>One-sentence summary:</strong></div>
                    <div class="answer-space" style="height: 50px; margin-top: 5px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Read a short paragraph from any book. Write a one-sentence summary and share it with a family member.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Summarising",
        subtopic: "Summary Practice",
        lessonContent: `
            <p>Today we will practice summarising by reading a short fable and writing down the most important events!</p>
            <p><strong>Key Question:</strong> What are the three most important things that happened in the story?</p>
            <p><strong>What is a Fable?</strong></p>
            <ul>
                <li>A short story that teaches a lesson</li>
                <li>Often has animal characters</li>
                <li>Has a clear beginning, middle, and end</li>
            </ul>
            <p><strong>How to Summarise a Story:</strong></p>
            <ol>
                <li>Read the whole story</li>
                <li>Think: What happened FIRST?</li>
                <li>Think: What happened NEXT?</li>
                <li>Think: What happened LAST?</li>
                <li>Write the three most important events in short form</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-turtle"></i> Short Summary Example</div>
                <p><strong>Story Event:</strong> The tortoise walked slowly while the rabbit ran ahead.</p>
                <p><strong>Short form:</strong> Tortoise walked slowly. Rabbit ran ahead.</p>
                <p>Keep it short! Use short phrases, not full long sentences.</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-list-ol"></i> Three Most Important Events</div>
                <p>When you summarise a whole story, ask yourself:</p>
                <p>1. How did the story start?</p>
                <p>2. What was the main problem or big event?</p>
                <p>3. How did the story end?</p>
            </div>
        `,
        taskInstructions: "Read the fable of The Tortoise and the Hare. Write the three most important events in short form.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Read the Fable</strong></p>
                <div class="task-item">
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p><strong>The Tortoise and the Hare</strong></p>
                        <p>A hare (rabbit) was always bragging about how fast he could run. "No one is faster than me!" he said. The tortoise, who was very slow, challenged the hare to a race. The hare laughed but agreed.</p>
                        <p>The race began. The hare ran so fast that he was far ahead. He thought, "The tortoise is so slow. I have time to rest." So the hare stopped and took a nap under a tree.</p>
                        <p>The tortoise kept walking slowly but never stopped. He passed the sleeping hare. When the hare woke up, he ran as fast as he could. But it was too late. The tortoise had already crossed the finish line and won the race.</p>
                        <p><strong>Lesson:</strong> Slow and steady wins the race.</p>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Write the Three Most Important Events</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> What happened FIRST? (How did the race begin?)
                    <div class="answer-space" style="height: 50px; margin-top: 5px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">2</span> What happened NEXT? (What did the hare do during the race?)
                    <div class="answer-space" style="height: 50px; margin-top: 5px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> What happened LAST? (How did the race end?)
                    <div class="answer-space" style="height: 50px; margin-top: 5px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Your Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Now put the three events together to write a short summary of the whole fable in 2-3 sentences:
                    <div class="answer-space" style="height: 80px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Practice with Another Story</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Think of a story you know well (like The Three Little Pigs or Goldilocks). Write the three most important events in short form:
                    <div><strong>Story title:</strong> <span class="answer-space" style="display: inline-block; width: 200px; border-bottom: 1px solid #ccc;"></span></div>
                    <div style="margin-top: 10px;"><strong>Event 1:</strong> <span class="answer-space" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                    <div><strong>Event 2:</strong> <span class="answer-space" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                    <div><strong>Event 3:</strong> <span class="answer-space" style="display: inline-block; width: 300px; border-bottom: 1px solid #ccc;"></span></div>
                </div>
            </div>
        `,
        homework: "Read a short story or watch a short cartoon. Tell a family member the three most important things that happened. Then write them down.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Summarising",
        subtopic: "Week Review & Assessment",
        lessonContent: `
            <p>Today we will review everything we learned about summarising this week!</p>
            <p><strong>Week 9 Review:</strong></p>
            <ul>
                <li><strong>Monday:</strong> We learned to find the main idea and cross out extra details</li>
                <li><strong>Tuesday:</strong> We turned long sentences into short, meaningful phrases</li>
                <li><strong>Wednesday:</strong> We wrote one-sentence summaries of paragraphs</li>
                <li><strong>Thursday:</strong> We summarised an entire story by finding the three most important events</li>
            </ul>
            <p><strong>Remember These Tips:</strong></p>
            <ol>
                <li>Always ask: What is the most important thing?</li>
                <li>Cross out small, extra details</li>
                <li>Use short phrases, not long sentences</li>
                <li>Tell WHO and WHAT happened</li>
            </ol>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-star"></i> Summary Checklist</div>
                <p>✓ Did I find the main idea?</p>
                <p>✓ Did I leave out small details?</p>
                <p>✓ Did I use short phrases?</p>
                <p>✓ Does my summary tell the most important parts?</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-pen-fancy"></i> Good Summary Example</div>
                <p><strong>Story:</strong> A girl planted a seed. She watered it every day. The sun helped it grow. Soon a flower bloomed.</p>
                <p><strong>Good summary:</strong> Girl planted a seed. She watered it. A flower grew.</p>
            </div>
        `,
        taskInstructions: "Complete the review activities to show what you have learned about summarising.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Find the Main Idea</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Read the paragraph and circle the main idea:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p>Jack and his dad built a birdhouse. They used wood, nails, and paint. Jack painted it blue. They hung it in a tree. The next day, a family of birds moved in!</p>
                    </div>
                    <div style="margin-left: 20px;">
                        <div>A. Jack painted the birdhouse blue.</div>
                        <div>B. Jack and his dad built a birdhouse for birds.</div>
                        <div>C. They used wood and nails.</div>
                    </div>
                    <div class="answer-space" style="height: 40px; margin-top: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Shorten the Sentence</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Turn this long sentence into a short phrase:
                    <div style="margin-top: 10px;"><strong>Long sentence:</strong> The cheerful children played happily on the bright, sunny playground.</div>
                    <div><strong>Short phrase:</strong> <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px solid #ccc;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: One-Sentence Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Read the paragraph and write a one-sentence summary:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p>Emma lost her favorite pencil. She looked under her bed. She looked in her backpack. She looked in the kitchen. Finally, she found it behind the sofa!</p>
                    </div>
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Story Summary</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read this short story and write the three most important events:
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 10px 0; border-radius: 8px;">
                        <p><strong>The Lost Cat</strong></p>
                        <p>Mia's cat, Whiskers, did not come home one night. Mia was worried. She made posters with Whiskers' picture. She put the posters around the neighborhood. The next day, Mia's neighbor called. He had found Whiskers hiding in his garage. Mia was so happy to have her cat back!</p>
                    </div>
                    <div><strong>Event 1 (Beginning):</strong> <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px solid #ccc;"></span></div>
                    <div style="margin-top: 5px;"><strong>Event 2 (Middle):</strong> <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px solid #ccc;"></span></div>
                    <div style="margin-top: 5px;"><strong>Event 3 (End):</strong> <span class="answer-space" style="display: inline-block; width: 250px; border-bottom: 1px solid #ccc;"></span></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> What was the most helpful thing you learned about summarising this week?
                    <div class="answer-space" style="height: 60px; margin-top: 10px; border: 1px solid #ccc; padding: 10px;"></div>
                </div>
            </div>
        `,
        homework: "Find a short story in a book or online. Write a one-paragraph summary (3-4 sentences) of the story. Share it with your family.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade3EnglishWeek9);
    console.log("grade3-english-week9.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade3EnglishWeek9);
    console.log("grade3-english-week9.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade3EnglishWeek9',
        metadata: grade3EnglishWeek9.metadata,
        days: grade3EnglishWeek9
    });
    console.log("grade3-english-week9.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade3EnglishWeek9 = grade3EnglishWeek9;
console.log("grade3-english-week9.js loaded and registered successfully");