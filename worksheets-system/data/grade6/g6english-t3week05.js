// Grade 6 English - Term 3 Week 5 Data
const grade6EnglishWeek5 = {
    metadata: {
        grade: 6,
        subject: "English",
        term: 3,
        week: 5,
        title: "Correlative Conjunctions",
        description: "Using 'either...or' and 'neither...nor' correctly in context"
    },
    
    monday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Introduction to 'Either...or' and 'Neither...nor'",
        lessonContent: `
            <p>Welcome to our exploration of correlative conjunctions! Today we'll learn about two important pairs: 'either...or' and 'neither...nor'.</p>
            <p><strong>Key Question:</strong> How do we show choices or negatives using special conjunction pairs?</p>
            <p><strong>What are Correlative Conjunctions?</strong></p>
            <p>Correlative conjunctions are pairs of conjunctions that work together to connect equal parts of a sentence. They come in pairs!</p>
            <p><strong>Either...or</strong> - Used to show a choice between two options:</p>
            <ul>
                <li>"You can <strong>either</strong> walk to school <strong>or</strong> take the bus."</li>
                <li>"<strong>Either</strong> Maria will cook dinner <strong>or</strong> I will order pizza."</li>
                <li>"We can go <strong>either</strong> to the beach <strong>or</strong> to the mountains."</li>
            </ul>
            <p><strong>Neither...nor</strong> - Used to show that two or more things are not true or not happening:</p>
            <ul>
                <li>"<strong>Neither</strong> John <strong>nor</strong> Sarah attended the party." (Both did not attend)</li>
                <li>"She likes <strong>neither</strong> coffee <strong>nor</strong> tea." (She dislikes both)</li>
                <li>"<strong>Neither</strong> the blue shirt <strong>nor</strong> the red one fits me." (Both shirts don't fit)</li>
            </ul>
            <p><strong>Important Rules:</strong></p>
            <ul>
                <li>The two parts connected must be grammatically equal (both nouns, both verbs, both adjectives, etc.)</li>
                <li>'Either...or' is positive/neutral - one option will happen</li>
                <li>'Neither...nor' is negative - no option will happen</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-balance-scale"></i> Either...or = Choice</div>
                <p>"You can have <strong>either</strong> ice cream <strong>or</strong> cake for dessert." (You will get one of these two options)</p>
                <p>"<strong>Either</strong> you apologize <strong>or</strong> I won't speak to you again." (Two possible actions)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-times-circle"></i> Neither...nor = No Choice</div>
                <p>"<strong>Neither</strong> the dog <strong>nor</strong> the cat wants to go outside." (Both animals do not want to go)</p>
                <p>"She speaks <strong>neither</strong> French <strong>nor</strong> Spanish." (She speaks neither language)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-lightbulb"></i> Memory Trick</div>
                <p>Think of 'either' starting with 'e' for "option" – you have to choose one.<br>
                Think of 'neither' starting with 'n' for "no" – none of the options work.</p>
            </div>
        `,
        taskInstructions: "Complete the sentences using 'either...or' or 'neither...nor' correctly.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Fill in the Blanks</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each sentence with the correct correlative conjunction pair:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. _______ Maria _______ James knows the answer. (Both don't know)</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>b. You can _______ pay by cash _______ use your credit card.</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>c. _______ the manager _______ the supervisor was available to help me.</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>d. We should _______ leave now _______ miss the beginning of the movie.</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                        <div>e. That restaurant serves _______ breakfast _______ lunch – only dinner.</div>
                        <div class="answer-space" style="height: 30px; margin-bottom: 10px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Sentence Creation</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Write two original sentences using 'either...or':
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">3</span> Write two original sentences using 'neither...nor':
                    <div class="answer-space" style="height: 60px; margin-top: 5px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Identify the Conjunction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Read each sentence. Write whether it uses 'either...or' or 'neither...nor':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither the teacher nor the students were happy about the test. _______</div>
                        <div>b. Either we finish this project tonight or we fail the class. _______</div>
                        <div>c. She wants neither fame nor fortune – just happiness. _______</div>
                        <div>d. You can either call me or send a text message. _______</div>
                    </div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using 'either...or' and 5 sentences using 'neither...nor' about your daily activities.",
        homeworkDue: "Tuesday"
    },
    
    tuesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Subject-Verb Agreement with Correlative Conjunctions",
        lessonContent: `
            <p>Today we'll learn an important rule: how to make subjects and verbs agree when using 'either...or' and 'neither...nor'!</p>
            <p><strong>Key Question:</strong> Does the verb become singular or plural with these conjunctions?</p>
            <p><strong>The Proximity Rule:</strong></p>
            <p>When using 'either...or' or 'neither...nor', the verb agrees with the subject that is <strong>closest</strong> to the verb.</p>
            <p><strong>Rule 1: Both subjects singular → verb singular</strong></p>
            <ul>
                <li>"Either John <strong>or</strong> Mary <strong>is</strong> coming to the party."</li>
                <li>"Neither the cat <strong>nor</strong> the dog <strong>wants</strong> to go outside."</li>
            </ul>
            <p><strong>Rule 2: Both subjects plural → verb plural</strong></p>
            <ul>
                <li>"Either the students <strong>or</strong> the teachers <strong>are</strong> responsible for the decorations."</li>
                <li>"Neither the apples <strong>nor</strong> the oranges <strong>are</strong> fresh."</li>
            </ul>
            <p><strong>Rule 3: One singular, one plural → verb agrees with the CLOSER subject</strong></p>
            <ul>
                <li>"Either the manager <strong>or</strong> the employees <strong>are</strong> going to the meeting." (plural 'employees' is closer)</li>
                <li>"Either the employees <strong>or</strong> the manager <strong>is</strong> going to the meeting." (singular 'manager' is closer)</li>
                <li>"Neither the boys <strong>nor</strong> their father <strong>knows</strong> the answer." (singular 'father' is closer)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-arrow-right"></i> Proximity Rule in Action</div>
                <p><strong>Correct:</strong> "Neither the coach nor the players <strong>are</strong> happy." (plural 'players' is closer → 'are')</p>
                <p><strong>Correct:</strong> "Neither the players nor the coach <strong>is</strong> happy." (singular 'coach' is closer → 'is')</p>
                <p>Both sentences are correct – the verb changes based on word order!</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-exclamation-triangle"></i> Common Mistakes</div>
                <p><strong>Incorrect:</strong> "Either my brother or my sisters <strong>is</strong> coming."<br>
                <strong>Correct:</strong> "Either my brother or my sisters <strong>are</strong> coming." ('sisters' is plural and closer)</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-memory"></i> Memory Trick</div>
                <p>Think of the verb as "shaking hands" with the subject right next to it. The verb doesn't care about the faraway subject – only the nearest neighbor!</p>
            </div>
        `,
        taskInstructions: "Choose the correct verb form to agree with the nearest subject.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Correct Verb</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Circle the correct verb in each sentence:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither the principal nor the teachers (is / are) attending the assembly.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>b. Either the cupcakes or the cake (is / are) for the party.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>c. Neither the students nor the teacher (know / knows) the answer.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>d. Either my parents or my aunt (is / are) picking me up.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>e. Neither the movie nor the commercials (was / were) interesting.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Fix the Errors</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Each sentence has an agreement error. Rewrite it correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Either the dog or the cats needs to be fed.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. Neither the books nor the pen belong on the floor.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. Either the coach or the players is responsible for the loss.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write two sentences using 'either...or' with different verb agreements:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
                <div class="task-item">
                    <span class="task-number">4</span> Write two sentences using 'neither...nor' with different verb agreements:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write 5 sentences using 'either...or' and 5 sentences using 'neither...nor', making sure the verb agrees with the nearest subject.",
        homeworkDue: "Wednesday"
    },
    
    wednesday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Expressing Preferences: 'I want either...or'",
        lessonContent: `
            <p>Today we'll practice expressing our preferences and choices using 'either...or' to show options we would be happy with!</p>
            <p><strong>Key Question:</strong> How can we use 'either...or' to talk about what we want?</p>
            <p><strong>Expressing Preferences with 'Either...or':</strong></p>
            <p>When you are happy with two or more options, you can use 'either...or' to express your preference:</p>
            <ul>
                <li>"I would like <strong>either</strong> pizza <strong>or</strong> pasta for dinner." (Both options are good!)</li>
                <li>"She wants <strong>either</strong> the blue dress <strong>or</strong> the red one for the party."</li>
                <li>"We can go <strong>either</strong> to the beach <strong>or</strong> to the pool tomorrow."</li>
            </ul>
            <p><strong>Using 'Neither...nor' for Things You Don't Want:</strong></p>
            <ul>
                <li>"I want <strong>neither</strong> the black shoes <strong>nor</strong> the brown ones." (I don't want either)</li>
                <li>"She likes <strong>neither</strong> action movies <strong>nor</strong> horror films."</li>
                <li>"We will accept <strong>neither</strong> late homework <strong>nor</strong> excuses."</li>
            </ul>
            <p><strong>Conversation Practice:</strong></p>
            <p>When someone offers you choices, you can respond with:</p>
            <ul>
                <li>"I'll take either one." (Both are fine)</li>
                <li>"I want neither, thank you." (I don't want any)</li>
                <li>"Either option works for me." (I'm flexible)</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-smile"></i> Positive Preferences</div>
                <p>"For my birthday, I would like <strong>either</strong> a new video game <strong>or</strong> a bicycle." (I will be happy with either gift)</p>
                <p>"We can watch <strong>either</strong> a comedy <strong>or</strong> an adventure movie. You choose!"</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-meh"></i> Negative Preferences</div>
                <p>"I want <strong>neither</strong> broccoli <strong>nor</strong> cauliflower on my plate." (I dislike both vegetables)</p>
                <p>"She will eat <strong>neither</strong> meat <strong>nor</strong> fish – she's a vegetarian."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-comments"></i> Real-Life Dialogues</div>
                <p><strong>Friend:</strong> "Do you want to go to the park or the museum?"<br>
                <strong>You:</strong> "Either place sounds fun to me!"</p>
                <p><strong>Parent:</strong> "Would you like juice or soda?"<br>
                <strong>Child:</strong> "Neither, please. I'll just have water."</p>
            </div>
        `,
        taskInstructions: "Express your preferences using 'either...or' and 'neither...nor'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Preference Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Complete each sentence with your real preference using 'either...or':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. For my next birthday, I want either _______________ or _______________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. After school, I like to either _______________ or _______________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. For dinner tonight, I would enjoy either _______________ or _______________.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Dislikes with 'Neither...nor'</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Complete each sentence with things you don't like:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I want neither _______________ nor _______________ for breakfast.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>b. Neither _______________ nor _______________ is a good movie genre for me.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                        <div>c. I will wear neither _______________ nor _______________ to school.</div>
                        <div class="answer-space" style="height: 30px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Dialogue Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Write a short conversation (4-6 lines) between two friends deciding what to do. Use 'either...or' and 'neither...nor' at least twice:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Preference Survey</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Ask a classmate two questions using 'either...or'. Write their answers:
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Write a paragraph about your weekend preferences using 'either...or' at least three times.",
        homeworkDue: "Thursday"
    },
    
    thursday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Sentence Transformation: Combining Negatives Using 'Neither'",
        lessonContent: `
            <p>Today we'll learn how to combine two negative sentences into one elegant sentence using 'neither...nor'!</p>
            <p><strong>Key Question:</strong> How can we avoid repeating 'not' and combine negative ideas?</p>
            <p><strong>The Problem with Double Negatives:</strong></p>
            <p>Look at these two sentences that both express negative ideas:</p>
            <ul>
                <li>"I did not like the movie."</li>
                <li>"I did not like the book."</li>
            </ul>
            <p><strong>Better Way (Using 'neither...nor'):</strong><br>
            "I liked <strong>neither</strong> the movie <strong>nor</strong> the book."</p>
            <p><strong>Transformation Rules:</strong></p>
            <ol>
                <li>Remove the word 'not' from each clause</li>
                <li>Place 'neither' before the first item</li>
                <li>Place 'nor' before the second item</li>
                <li>Change the verb to positive form (remove 'did not', 'does not', 'is not', etc.)</li>
            </ol>
            <p><strong>More Examples:</strong></p>
            <ul>
                <li>"She does not eat meat. She does not eat fish." → "She eats <strong>neither</strong> meat <strong>nor</strong> fish."</li>
                <li>"Tom isn't coming to the party. Jerry isn't coming to the party." → "<strong>Neither</strong> Tom <strong>nor</strong> Jerry is coming to the party."</li>
                <li>"I don't have time. I don't have money." → "I have <strong>neither</strong> time <strong>nor</strong> money."</li>
            </ul>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-code-branch"></i> Combining Two Negatives</div>
                <p><strong>Two sentences:</strong> "He didn't call me. He didn't text me."<br>
                <strong>Combined:</strong> "He <strong>neither</strong> called <strong>nor</strong> texted me."</p>
                <p><strong>Two sentences:</strong> "The restaurant isn't clean. The restaurant isn't cheap."<br>
                <strong>Combined:</strong> "The restaurant is <strong>neither</strong> clean <strong>nor</strong> cheap."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-chart-line"></i> Step-by-Step Transformation</div>
                <p><strong>Original:</strong> "She does not like coffee. She does not like tea."<br>
                <strong>Step 1:</strong> Remove 'does not' → "She likes coffee. She likes tea."<br>
                <strong>Step 2:</strong> Add 'neither...nor' → "She likes <strong>neither</strong> coffee <strong>nor</strong> tea."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-ban"></i> Remember: NEVER Double Negative!</div>
                <p><strong>Incorrect:</strong> "I don't like neither pizza nor pasta." (This has two negatives!)<br>
                <strong>Correct:</strong> "I like neither pizza nor pasta." OR "I don't like either pizza or pasta."</p>
            </div>
        `,
        taskInstructions: "Transform pairs of negative sentences into single sentences using 'neither...nor'.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Transform These Sentences</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Combine each pair into one sentence using 'neither...nor':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Sarah didn't attend the meeting. Mark didn't attend the meeting.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. The hotel does not have a pool. The hotel does not have a gym.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. I am not tired. I am not hungry.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>d. She won't accept the job. She won't reject the job yet.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>e. The movie wasn't funny. The movie wasn't exciting.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Identify the Error</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Each sentence has an error. Rewrite it correctly:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. I don't like neither apples nor oranges.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. Neither the dog or the cat wants to eat.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. She neither likes coffee nor tea.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Reverse Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Change these 'neither...nor' sentences back into two negative sentences:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither the red shirt nor the blue shirt fits me.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. He has neither a car nor a bicycle.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Create Your Own</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Write two pairs of negative sentences, then transform each pair using 'neither...nor':
                    <div class="answer-space" style="height: 80px;"></div>
                </div>
            </div>
        `,
        homework: "Find 5 pairs of negative sentences in something you read, or write your own, then combine them using 'neither...nor'.",
        homeworkDue: "Friday"
    },
    
    friday: {
        subject: "English",
        topic: "Grammar",
        subtopic: "Review: Mixed Conjunction Usage in Complex Sentences",
        lessonContent: `
            <p>Today we'll review everything we've learned about 'either...or' and 'neither...nor' and practice using them in more complex sentences!</p>
            <p><strong>Week 5 Summary:</strong></p>
            <ol>
                <li><strong>Either...or</strong> → Shows a choice between two options (positive/neutral)</li>
                <li><strong>Neither...nor</strong> → Shows that neither option is true (negative)</li>
                <li><strong>Subject-Verb Agreement:</strong> The verb agrees with the subject CLOSEST to it</li>
                <li><strong>Transformation:</strong> Use 'neither...nor' to combine two negative ideas</li>
                <li><strong>Preference:</strong> Use 'either...or' to express options you would be happy with</li>
            </ol>
            <p><strong>Complex Sentences with Multiple Clauses:</strong></p>
            <ul>
                <li>"If you are late, you can <strong>either</strong> take the bus <strong>or</strong> call me for a ride."</li>
                <li>"<strong>Neither</strong> the fact that it was raining <strong>nor</strong> the long line stopped us from seeing the movie."</li>
                <li>"She decided that she wanted <strong>neither</strong> the expensive gift <strong>nor</strong> the cheap one – she wanted something in between."</li>
            </ul>
            <p><strong>Comparing 'Either...or' and 'Neither...nor':</strong></p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr style="background-color: #4A90E2; color: white;">
                    <th style="padding: 8px; border: 1px solid #ddd;">'Either...or'</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">'Neither...nor'</th>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Used for choices</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Used for rejecting choices</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Positive meaning</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Negative meaning</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">"Either this OR that will happen"</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">"Neither this NOR that will happen"</td>
                </tr>
            </table>
        `,
        examples: `
            <div class="example-box">
                <div class="example-title"><i class="fas fa-random"></i> Complex Sentence Examples</div>
                <p>"After thinking about it carefully, she decided that she would <strong>neither</strong> confront her friend <strong>nor</strong> ignore the problem – instead, she would write a letter."</p>
                <p>"You can <strong>either</strong> finish your homework before dinner, <strong>or</strong> you can wake up early tomorrow morning to complete it."</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-question-circle"></i> Quick Check</div>
                <p><strong>Which conjunction pair fits?</strong><br>
                "______ the teacher ______ the students knew about the fire drill." (None knew)<br>
                <strong>Answer:</strong> Neither...nor</p>
            </div>
            <div class="example-box">
                <div class="example-title"><i class="fas fa-sticky-note"></i> Final Reminders</div>
                <p>• Never use 'not' with 'neither...nor' (double negative)<br>
                • The verb looks at the NEAREST subject<br>
                • Keep the connected items grammatically equal (noun with noun, verb with verb)</p>
            </div>
        `,
        taskInstructions: "Complete the mixed review activities to demonstrate mastery of correlative conjunctions.",
        taskContent: `
            <div class="content-box">
                <p><strong>Part A: Choose the Correct Conjunction Pair</strong></p>
                <div class="task-item">
                    <span class="task-number">1</span> Fill in each blank with 'either...or' or 'neither...nor':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. _______ the blue pen _______ the black pen will work. Both are fine.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>b. _______ my sister _______ my brother enjoys playing soccer. They both dislike it.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>c. You can _______ pay online _______ pick up the tickets at the door.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                        <div>d. _______ the price _______ the quality of the product was satisfactory to me.</div>
                        <div class="answer-space" style="height: 25px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part B: Verb Agreement Practice</strong></p>
                <div class="task-item">
                    <span class="task-number">2</span> Choose the correct verb in parentheses:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither the director nor the actors (was / were) happy with the rehearsal.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>b. Either the cake or the cookies (is / are) in the oven.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>c. Neither the students nor their teacher (know / knows) about the surprise.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                        <div>d. Either the manager or the assistants (is / are) going to the conference.</div>
                        <div class="answer-space" style="height: 20px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part C: Sentence Transformation</strong></p>
                <div class="task-item">
                    <span class="task-number">3</span> Combine each pair using 'neither...nor' OR rewrite using 'either...or':
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Maria doesn't like horror movies. Maria doesn't like action movies.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. You can have soup. You can have salad. (Make a choice sentence)</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part D: Error Correction</strong></p>
                <div class="task-item">
                    <span class="task-number">4</span> Each sentence has one error. Find and fix it:
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>a. Neither the teacher or the students were ready for the test.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>b. I don't want neither the red one nor the blue one.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                        <div>c. Either the clowns or the magician are performing next.</div>
                        <div class="answer-space" style="height: 40px;"></div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part E: Writing Challenge</strong></p>
                <div class="task-item">
                    <span class="task-number">5</span> Write a paragraph (5-7 sentences) about a decision you had to make. Use 'either...or' at least twice and 'neither...nor' at least once:
                    <div class="answer-space" style="height: 150px;"></div>
                </div>
            </div>
            
            <div class="content-box">
                <p><strong>Part F: Self-Reflection</strong></p>
                <div class="task-item">
                    <span class="task-number">6</span> Rate your understanding of this week's grammar (circle one):
                    <div style="margin-left: 20px; margin-top: 10px;">
                        <div>🎯 I can use 'either...or' and 'neither...nor' correctly in any sentence.</div>
                        <div>👍 I mostly understand but need a little more practice.</div>
                        <div>📚 I still find this confusing and need extra help.</div>
                    </div>
                </div>
                <div class="task-item">
                    <span class="task-number">7</span> What is one question you still have about correlative conjunctions?
                    <div class="answer-space" style="height: 60px;"></div>
                </div>
            </div>
        `,
        homework: "Complete the unit review worksheet. Write 10 original sentences using 'either...or' and 'neither...nor' correctly. Due Monday.",
        homeworkDue: "Monday"
    }
};

// Register the worksheet
if (typeof window.registerWorksheet !== 'undefined') {
    window.registerWorksheet(grade6EnglishWeek5);
    console.log("grade6-english-week5.js registered using registerWorksheet()");
} else if (typeof window.DataLoader !== 'undefined') {
    window.DataLoader.registerWorksheet(grade6EnglishWeek5);
    console.log("grade6-english-week5.js registered using DataLoader.registerWorksheet()");
} else {
    // Fallback: store in global array
    if (!window.registeredWorksheets) {
        window.registeredWorksheets = [];
    }
    window.registeredWorksheets.push({
        variableName: 'grade6EnglishWeek5',
        metadata: grade6EnglishWeek5.metadata,
        days: grade6EnglishWeek5
    });
    console.log("grade6-english-week5.js stored in window.registeredWorksheets");
}

// Also expose it globally for backward compatibility
window.grade6EnglishWeek5 = grade6EnglishWeek5;
console.log("grade6-english-week5.js loaded and registered successfully");