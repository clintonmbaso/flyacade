window.grade1Data = {
    math: {
        title: "Mathematics",
        description: "Foundational math skills for first graders",
        topics: [
            {
                id: "addition",
                title: "Addition Basics",
                lessons: [
                    {
                        id: "add-1",
                        title: "Adding Numbers 1-10",
                        content: "# Adding Numbers 1 to 10\n\n## Introduction\nAddition is combining numbers to find totals.\n\n### Example:\n2 + 3 = 5",
                        media: {
                            images: ["math1.jpg"]
                        },
                        activities: [
                            {
                                type: "quiz",
                                title: "Addition Quiz",
                                questions: [
                                    {
                                        question: "What is 2 + 3?",
                                        options: ["4", "5", "6"],
                                        answer: 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    science: {
        title: "Science",
        description: "Exploring our amazing human body",
        topics: [
            {
                id: "human-body",
                title: "External Body Parts",
                lessons: [
                    {
                        id: "body-parts-1",
                        title: "External Parts of the Human Body",
                        content: `# External Parts of the Human Body

## Introduction
Our body is amazing! Let's learn about the different external parts that help us move, feel, and explore the world around us.

## Main External Body Parts

### Head
- **Location**: Top of your body
- **Function**: Contains your brain, eyes, ears, nose, and mouth
- **Fun Fact**: Your head helps you think, see, hear, smell, and taste!

### Neck
- **Location**: Connects your head to your body
- **Function**: Supports your head and lets it turn
- **Try This**: Gently turn your head left and right - that's your neck working!

### Arm
- **Location**: Connected to your shoulders
- **Function**: Helps you reach, lift, and hug
- **Parts**: Shoulder, elbow, wrist, hand

### Hand
- **Location**: At the end of your arm
- **Function**: Helps you hold things, write, and touch
- **Parts**: Palm, fingers, thumb

### Abdomen
- **Location**: Middle part of your body (your tummy)
- **Function**: Contains important organs like your stomach
- **Fun Fact**: Food goes here to give you energy!

### Leg
- **Location**: Lower part of your body
- **Function**: Helps you walk, run, and jump
- **Parts**: Thigh, knee, calf, ankle, foot

### Foot
- **Location**: At the end of your leg
- **Function**: Helps you stand, walk, and balance
- **Parts**: Heel, sole, toes

## Let's Practice!
Point to each body part as you say its name:
1. Head 👆
2. Neck 👆
3. Arm 👆
4. Hand 👆
5. Abdomen 👆
6. Leg 👆
7. Foot 👆

## Summary
Our body has many external parts that work together to help us do amazing things every day!`,
                        media: {
                            images: ["human-body-diagram.jpg", "body-parts-chart.jpg"],
                            animations: ["pointing-to-body-parts.gif"]
                        },
                        activities: [
                            {
                                type: "quiz",
                                title: "Body Parts Quiz",
                                instructions: "Test what you've learned about external body parts!",
                                questions: [
                                    {
                                        question: "Which body part connects your head to your body?",
                                        options: ["Arm", "Neck", "Leg"],
                                        answer: 1
                                    },
                                    {
                                        question: "Where is your abdomen located?",
                                        options: ["Top of your body", "Middle of your body", "Bottom of your body"],
                                        answer: 1
                                    },
                                    {
                                        question: "Which part helps you hold things and write?",
                                        options: ["Foot", "Hand", "Head"],
                                        answer: 1
                                    },
                                    {
                                        question: "What is at the end of your leg?",
                                        options: ["Hand", "Head", "Foot"],
                                        answer: 2
                                    }
                                ]
                            },
                            {
                                type: "practice",
                                title: "Body Parts Practice",
                                content: "## Let's Practice Identifying Body Parts!\n\n1. Draw a line to match each body part with its function:\n   - Head → Thinking and sensing\n   - Hand → Holding and touching\n   - Leg → Walking and running\n   - Neck → Turning your head\n\n2. Circle all the external body parts:\n   Heart ❤️ | Hand ✋ | Brain 🧠 | Foot 🦶 | Lung 🫁 | Arm 💪\n\n3. Draw yourself and label these body parts:\n   - Head\n   - Neck\n   - Arm\n   - Hand\n   - Leg\n   - Foot"
                            },
                            {
                                type: "game",
                                title: "Body Parts Matching Game",
                                description: "Match the body part with its description",
                                items: [
                                    "Head",
                                    "Neck", 
                                    "Hand",
                                    "Leg",
                                    "Foot",
                                    "Abdomen"
                                ],
                                matches: [
                                    "Contains your brain and senses",
                                    "Connects head to body",
                                    "Helps you hold things",
                                    "Helps you walk and run", 
                                    "Helps you stand and balance",
                                    "Your tummy area"
                                ]
                            }
                        ]
                    },
                    {
                        id: "body-parts-2",
                        title: "More Body Parts",
                        content: `# More External Body Parts

## Let's Learn About Joints!

### Elbow
- **Location**: Middle of your arm
- **Function**: Lets your arm bend
- **Try This**: Bend your arm and feel the pointy part - that's your elbow!

### Knee
- **Location**: Middle of your leg
- **Function**: Lets your leg bend
- **Fun Fact**: Your knee is the largest joint in your body!

### Ankle
- **Location**: Connects your foot to your leg
- **Function**: Lets your foot move up and down
- **Try This**: Wiggle your foot and feel your ankle move!

## Body Parts We Have Two Of

### Eyes 👀
- **Location**: On your head
- **Function**: Help you see colors, shapes, and movement
- **Fun Fact**: You blink about 15-20 times every minute!

### Ears 👂
- **Location**: On the sides of your head
- **Function**: Help you hear sounds
- **Try This**: Cover your ears and listen - sounds become quieter!

### Arms 💪 and Hands ✋
- **Location**: On each side of your body
- **Function**: Help you do many things like eating, writing, and playing

### Legs 🦵 and Feet 🦶
- **Location**: Lower part of your body
- **Function**: Help you move around and stand strong

## Body Parts Game
Let's play "Simon Says" with body parts!
- Simon says touch your elbows!
- Simon says point to your knees!
- Simon says wiggle your ankles!`,
                        media: {
                            images: ["joints-diagram.jpg", "body-pairs.jpg"],
                            videos: ["body-movement-demo.mp4"]
                        },
                        activities: [
                            {
                                type: "quiz", 
                                title: "Joints and Pairs Quiz",
                                questions: [
                                    {
                                        question: "Which joint lets your arm bend?",
                                        options: ["Knee", "Elbow", "Ankle"],
                                        answer: 1
                                    },
                                    {
                                        question: "How many ears do you have?",
                                        options: ["One", "Two", "Three"],
                                        answer: 1
                                    },
                                    {
                                        question: "Which body part connects your foot to your leg?",
                                        options: ["Knee", "Elbow", "Ankle"],
                                        answer: 2
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};