registerWorkbook({
    id: 'g7t3bScience',
    title: 'Science',
    description: 'End of Term',
    subject: 'Science',
    grade: 7,
    term: 3,
    pages: [
        {
            id: 'page1',
            title: 'Multiple Choice',
            questionLimit: 30,
            exercises: [
            /*
                {
                    id: 'section1',
                    title: 'The Solar System',
                    questions: [
                    
    {
        "type": "multiple-choice",
        "text": "What is the solar system?",
        "options": ["The sun and the 8 planets", "Only the planets", "Only the sun and moon", "Stars and galaxies"],
        "correctAnswer": 0,
        "explanation": "The solar system consists of the sun and the 8 planets orbiting it.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main difference between the sun and the planets?",
        "options": ["The sun is luminous, planets are not", "Planets are bigger than the sun", "The sun is cold, planets are hot", "Planets produce light"],
        "correctAnswer": 0,
        "explanation": "The sun is a luminous star that produces light, while planets are non-luminous and reflect light.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the source of light in the solar system?",
        "options": ["The sun", "The moon", "Jupiter", "Earth"],
        "correctAnswer": 0,
        "explanation": "The sun is the primary source of light in the solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What causes day and night on Earth?",
        "options": ["Earth's rotation", "Earth's revolution", "The moon's movement", "The sun's movement"],
        "correctAnswer": 0,
        "explanation": "Day and night occur due to Earth's rotation on its axis.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What causes seasons on Earth?",
        "options": ["Earth's revolution and tilted axis", "The moon's phases", "Changes in the sun's brightness", "Earth's distance from the sun"],
        "correctAnswer": 0,
        "explanation": "Seasons are caused by Earth's revolution around the sun and its tilted axis.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How does the Earth move compared to the moon?",
        "options": ["Earth orbits the sun, moon orbits Earth", "Moon orbits the sun, Earth orbits the moon", "Both orbit the sun directly", "Neither moves"],
        "correctAnswer": 0,
        "explanation": "Earth orbits the sun, while the moon orbits Earth.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a solar eclipse?",
        "options": ["Moon blocks the sun from Earth's view", "Earth blocks the sun from the moon", "Sun blocks the moon", "Moon disappears"],
        "correctAnswer": 0,
        "explanation": "A solar eclipse occurs when the moon passes between the sun and Earth, blocking sunlight.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a lunar eclipse?",
        "options": ["Earth blocks sunlight from reaching the moon", "Moon blocks sunlight from reaching Earth", "Sun blocks the moon", "Moon blocks Earth"],
        "correctAnswer": 0,
        "explanation": "A lunar eclipse happens when Earth comes between the sun and the moon, casting a shadow on the moon.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following is a use of solar energy?",
        "options": ["Generating electricity", "Making wind", "Creating rain", "Producing oxygen"],
        "correctAnswer": 0,
        "explanation": "Solar energy can be used to generate electricity and heat.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How many planets are in our solar system?",
        "options": ["8", "7", "9", "10"],
        "correctAnswer": 0,
        "explanation": "There are 8 planets in our solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a planet?",
        "options": ["Moon", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": 0,
        "explanation": "The moon is Earth's natural satellite, not a planet.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main reason the sun appears brighter than other stars?",
        "options": ["It is much closer to Earth", "It is the largest star", "It doesn't produce light", "It is made of fire"],
        "correctAnswer": 0,
        "explanation": "The sun appears brighter because it is much closer to Earth than other stars.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the shape of Earth's orbit around the sun?",
        "options": ["Elliptical", "Circular", "Square", "Triangular"],
        "correctAnswer": 0,
        "explanation": "Earth's orbit around the sun is elliptical (slightly oval-shaped).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is known as the 'Red Planet'?",
        "options": ["Mars", "Venus", "Jupiter", "Saturn"],
        "correctAnswer": 0,
        "explanation": "Mars is called the 'Red Planet' due to its reddish appearance.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the largest planet in the solar system?",
        "options": ["Jupiter", "Earth", "Saturn", "Neptune"],
        "correctAnswer": 0,
        "explanation": "Jupiter is the largest planet in our solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why does the moon have phases?",
        "options": ["Due to its position relative to Earth and the sun", "Because it changes shape", "It moves away from Earth", "The sun blocks it"],
        "correctAnswer": 0,
        "explanation": "The moon's phases change based on how much of its sunlit side is visible from Earth.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a benefit of solar energy?",
        "options": ["It is renewable", "It causes pollution", "It is expensive", "It only works at night"],
        "correctAnswer": 0,
        "explanation": "Solar energy is renewable and environmentally friendly.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the primary force that keeps planets in orbit around the sun?",
        "options": ["Gravity", "Magnetism", "Wind", "Electricity"],
        "correctAnswer": 0,
        "explanation": "Gravity is the force that keeps planets orbiting the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is closest to the sun?",
        "options": ["Mercury", "Venus", "Earth", "Mars"],
        "correctAnswer": 0,
        "explanation": "Mercury is the closest planet to the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the hottest planet in the solar system?",
        "options": ["Venus", "Mercury", "Mars", "Jupiter"],
        "correctAnswer": 0,
        "explanation": "Venus has a thick atmosphere that traps heat, making it the hottest planet.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet has rings around it?",
        "options": ["Saturn", "Earth", "Mars", "Venus"],
        "correctAnswer": 0,
        "explanation": "Saturn is known for its prominent ring system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of Earth's natural satellite?",
        "options": ["Moon", "Phobos", "Titan", "Europa"],
        "correctAnswer": 0,
        "explanation": "The moon is Earth's only natural satellite.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How long does it take Earth to complete one rotation?",
        "options": ["24 hours", "365 days", "1 month", "12 hours"],
        "correctAnswer": 0,
        "explanation": "Earth completes one full rotation in about 24 hours, causing day and night.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "How long does it take Earth to orbit the sun once?",
        "options": ["365 days", "24 hours", "30 days", "1 week"],
        "correctAnswer": 0,
        "explanation": "Earth takes about 365 days (1 year) to complete one revolution around the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a phase of the moon?",
        "options": ["Blue moon", "New moon", "Full moon", "Crescent moon"],
        "correctAnswer": 0,
        "explanation": "A 'blue moon' refers to an extra full moon in a season, not a phase.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens during a full moon?",
        "options": ["The entire sunlit side is visible from Earth", "The moon disappears", "Only half is visible", "The moon is between Earth and the sun"],
        "correctAnswer": 0,
        "explanation": "A full moon occurs when Earth can see the entire illuminated side of the moon.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main reason we have different seasons?",
        "options": ["Earth's tilted axis", "The moon's gravity", "Distance from the sun", "Earth's rotation speed"],
        "correctAnswer": 0,
        "explanation": "Earth's tilted axis causes different parts to receive varying sunlight, creating seasons.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is known for its Great Red Spot?",
        "options": ["Jupiter", "Saturn", "Neptune", "Mars"],
        "correctAnswer": 0,
        "explanation": "Jupiter's Great Red Spot is a giant storm.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the smallest planet in the solar system?",
        "options": ["Mercury", "Mars", "Venus", "Pluto"],
        "correctAnswer": 0,
        "explanation": "Mercury is the smallest planet in our solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is farthest from the sun?",
        "options": ["Neptune", "Uranus", "Saturn", "Pluto"],
        "correctAnswer": 0,
        "explanation": "Neptune is the farthest planet from the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of our galaxy?",
        "options": ["Milky Way", "Andromeda", "Orion", "Pinwheel"],
        "correctAnswer": 0,
        "explanation": "Our solar system is part of the Milky Way galaxy.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the sun mostly made of?",
        "options": ["Hydrogen and helium", "Rock and metal", "Water and ice", "Oxygen and nitrogen"],
        "correctAnswer": 0,
        "explanation": "The sun is primarily composed of hydrogen and helium gases.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a terrestrial (rocky) planet?",
        "options": ["Jupiter", "Earth", "Mars", "Venus"],
        "correctAnswer": 0,
        "explanation": "Jupiter is a gas giant, not a rocky planet.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the approximate age of the solar system?",
        "options": ["4.6 billion years", "10,000 years", "1 million years", "500 million years"],
        "correctAnswer": 0,
        "explanation": "The solar system is about 4.6 billion years old.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main component of the moon's surface?",
        "options": ["Rock and dust", "Water", "Ice", "Metal"],
        "correctAnswer": 0,
        "explanation": "The moon's surface is covered in rock and fine dust.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What causes tides on Earth?",
        "options": ["The moon's gravity", "The sun's heat", "Earth's rotation", "Wind"],
        "correctAnswer": 0,
        "explanation": "The moon's gravitational pull causes ocean tides.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet rotates on its side?",
        "options": ["Uranus", "Neptune", "Saturn", "Jupiter"],
        "correctAnswer": 0,
        "explanation": "Uranus has an extreme tilt, making it appear to rotate on its side.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the asteroid belt?",
        "options": ["A region between Mars and Jupiter with many asteroids", "A ring around Saturn", "A group of comets", "A type of planet"],
        "correctAnswer": 0,
        "explanation": "The asteroid belt is located between Mars and Jupiter and contains many rocky fragments.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a dwarf planet?",
        "options": ["Pluto", "Mars", "Venus", "Mercury"],
        "correctAnswer": 0,
        "explanation": "Pluto is classified as a dwarf planet.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a comet made of?",
        "options": ["Ice, dust, and rock", "Only gas", "Only metal", "Liquid water"],
        "correctAnswer": 0,
        "explanation": "Comets are icy bodies that release gas and dust when near the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of the first man-made satellite?",
        "options": ["Sputnik 1", "Hubble", "Voyager", "Apollo"],
        "correctAnswer": 0,
        "explanation": "Sputnik 1, launched in 1957, was the first artificial satellite.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet has the most moons?",
        "options": ["Jupiter", "Earth", "Mars", "Mercury"],
        "correctAnswer": 0,
        "explanation": "Jupiter has the largest number of known moons in the solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main gas in Earth's atmosphere?",
        "options": ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        "correctAnswer": 0,
        "explanation": "Earth's atmosphere is mostly nitrogen (about 78%).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which spacecraft was the first to land humans on the moon?",
        "options": ["Apollo 11", "Voyager", "Hubble", "Sputnik"],
        "correctAnswer": 0,
        "explanation": "Apollo 11 was the first mission to land humans on the moon in 1969.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the study of celestial objects called?",
        "options": ["Astronomy", "Geology", "Biology", "Meteorology"],
        "correctAnswer": 0,
        "explanation": "Astronomy is the scientific study of stars, planets, and other space objects.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is known as the 'Evening Star'?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "correctAnswer": 0,
        "explanation": "Venus is often called the 'Evening Star' because it is visible near sunset.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a shooting star?",
        "options": ["A meteor burning up in Earth's atmosphere", "A falling planet", "A small moon", "A type of comet"],
        "correctAnswer": 0,
        "explanation": "A 'shooting star' is actually a meteoroid burning up as it enters Earth's atmosphere.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a gas giant?",
        "options": ["Mars", "Jupiter", "Saturn", "Neptune"],
        "correctAnswer": 0,
        "explanation": "Mars is a rocky planet, not a gas giant.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of the closest star to Earth after the sun?",
        "options": ["Proxima Centauri", "Sirius", "Alpha Centauri", "Betelgeuse"],
        "correctAnswer": 0,
        "explanation": "Proxima Centauri is the closest known star to the sun.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What keeps the planets in orbit around the sun?",
        "options": ["Gravity", "Magnetism", "Wind", "Electricity"],
        "correctAnswer": 0,
        "explanation": "The sun's gravity keeps the planets in their orbits.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet has the longest day?",
        "options": ["Venus", "Mercury", "Earth", "Mars"],
        "correctAnswer": 0,
        "explanation": "Venus has the longest day (rotation period) of any planet in the solar system.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of the telescope launched into space in 1990?",
        "options": ["Hubble Space Telescope", "James Webb Telescope", "Voyager", "Kepler"],
        "correctAnswer": 0,
        "explanation": "The Hubble Space Telescope was launched in 1990 and has provided many space images.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which planet is most similar in size to Earth?",
        "options": ["Venus", "Mars", "Mercury", "Pluto"],
        "correctAnswer": 0,
        "explanation": "Venus is similar in size and mass to Earth.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the name of the first animal sent into space?",
        "options": ["Laika the dog", "A monkey", "A cat", "A rabbit"],
        "correctAnswer": 0,
        "explanation": "Laika, a Soviet dog, was the first living creature to orbit Earth in 1957.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the term for a small rocky body orbiting the sun?",
        "options": ["Asteroid", "Comet", "Meteor", "Planet"],
        "correctAnswer": 0,
        "explanation": "An asteroid is a small, rocky object that orbits the sun.",
        "shuffleOptions": true
    }
                            
                    ]
                },
                {
                    id: 'section2',
                    title: 'Metals and None Metals',
                    questions: [
                    
    {
        "type": "multiple-choice",
        "text": "Which of the following is a metal?",
        "options": ["Aluminium", "Carbon", "Oxygen", "Hydrogen"],
        "correctAnswer": 0,
        "explanation": "Aluminium is a metal, while carbon, oxygen, and hydrogen are non-metals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of the following is a non-metal?",
        "options": ["Iron", "Copper", "Carbon", "Zinc"],
        "correctAnswer": 2,
        "explanation": "Carbon is a non-metal, while iron, copper, and zinc are metals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which material is a good conductor of electricity?",
        "options": ["Copper", "Carbon dioxide", "Oxygen", "Hydrogen"],
        "correctAnswer": 0,
        "explanation": "Copper is a metal and a good conductor of electricity, while the others are non-metals and poor conductors.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a metal?",
        "options": ["Zinc", "Iron", "Hydrogen", "Aluminium"],
        "correctAnswer": 2,
        "explanation": "Hydrogen is a non-metal, while zinc, iron, and aluminium are metals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What property do most metals share?",
        "options": ["They conduct electricity", "They are gases at room temperature", "They are brittle", "They are poor conductors of heat"],
        "correctAnswer": 0,
        "explanation": "Most metals are good conductors of electricity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a characteristic of non-metals?",
        "options": ["Shiny appearance", "Good conductor of heat", "Poor conductor of electricity", "Malleable"],
        "correctAnswer": 2,
        "explanation": "Non-metals are typically poor conductors of electricity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is commonly used in electrical wires?",
        "options": ["Carbon", "Copper", "Oxygen", "Hydrogen"],
        "correctAnswer": 1,
        "explanation": "Copper is widely used in electrical wires due to its excellent conductivity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens when you test a metal with an electric current?",
        "options": ["It will not conduct electricity", "It will conduct electricity", "It will explode", "It will turn into a gas"],
        "correctAnswer": 1,
        "explanation": "Metals generally conduct electricity when tested with an electric current.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a non-metal that is essential for breathing?",
        "options": ["Iron", "Oxygen", "Aluminium", "Copper"],
        "correctAnswer": 1,
        "explanation": "Oxygen is a non-metal gas that is essential for breathing.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What state of matter are most non-metals at room temperature?",
        "options": ["Solid", "Liquid", "Gas", "Plasma"],
        "correctAnswer": 2,
        "explanation": "Many non-metals are gases at room temperature (like oxygen, hydrogen).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is known for not rusting easily?",
        "options": ["Iron", "Aluminium", "Copper", "Zinc"],
        "correctAnswer": 1,
        "explanation": "Aluminium doesn't rust easily because it forms a protective oxide layer.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which non-metal is the main component of diamonds?",
        "options": ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        "correctAnswer": 2,
        "explanation": "Diamonds are made of carbon atoms arranged in a crystal structure.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What would you use to test if a material conducts electricity?",
        "options": ["Magnet", "Electric circuit", "Microscope", "Thermometer"],
        "correctAnswer": 1,
        "explanation": "An electric circuit can be used to test if a material conducts electricity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these metals is magnetic?",
        "options": ["Aluminium", "Copper", "Iron", "Zinc"],
        "correctAnswer": 2,
        "explanation": "Iron is a magnetic metal, while the others are not.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which property is typical of metals but not non-metals?",
        "options": ["Brittle", "Dull appearance", "Malleable", "Poor heat conductor"],
        "correctAnswer": 2,
        "explanation": "Metals are typically malleable (can be hammered into sheets), while non-metals are not.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What gas is produced when some metals react with acids?",
        "options": ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
        "correctAnswer": 2,
        "explanation": "Hydrogen gas is often produced when metals react with acids.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which non-metal is liquid at room temperature?",
        "options": ["Carbon", "Bromine", "Oxygen", "Sulfur"],
        "correctAnswer": 1,
        "explanation": "Bromine is the only non-metal that is liquid at room temperature.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why are metals used for cooking pans?",
        "options": ["They are good conductors of heat", "They are poor conductors of heat", "They are brittle", "They melt easily"],
        "correctAnswer": 0,
        "explanation": "Metals are used for cooking pans because they conduct heat well.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a property of most metals?",
        "options": ["Ductile", "Sonorous", "Brittle", "Lustrous"],
        "correctAnswer": 2,
        "explanation": "Metals are typically not brittle (this is a property of many non-metals).",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens to most metals when they react with oxygen?",
        "options": ["They form oxides", "They become gases", "They disappear", "They turn into non-metals"],
        "correctAnswer": 0,
        "explanation": "Most metals react with oxygen to form metal oxides.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is used to make galvanized iron?",
        "options": ["Copper", "Zinc", "Aluminium", "Carbon"],
        "correctAnswer": 1,
        "explanation": "Zinc is used to coat iron to make galvanized iron, preventing rust.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which non-metal is essential for combustion (burning)?",
        "options": ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
        "correctAnswer": 2,
        "explanation": "Oxygen is needed for combustion to occur.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What would you observe if you tested a non-metal with an electric circuit?",
        "options": ["The bulb would light up", "The bulb would not light up", "The material would melt", "The battery would explode"],
        "correctAnswer": 1,
        "explanation": "Most non-metals are insulators, so the bulb would not light up.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is liquid at room temperature?",
        "options": ["Iron", "Mercury", "Aluminium", "Copper"],
        "correctAnswer": 1,
        "explanation": "Mercury is the only metal that is liquid at room temperature.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main component of steel?",
        "options": ["Copper", "Iron", "Aluminium", "Zinc"],
        "correctAnswer": 1,
        "explanation": "Steel is primarily made of iron with small amounts of carbon.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which non-metal is used in pencils?",
        "options": ["Silicon", "Graphite (carbon)", "Phosphorus", "Sulfur"],
        "correctAnswer": 1,
        "explanation": "Graphite, a form of carbon, is used in pencil 'leads'.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why are electrical wires made of copper?",
        "options": ["Copper is shiny", "Copper is a good conductor", "Copper is cheap", "Copper is lightweight"],
        "correctAnswer": 1,
        "explanation": "Copper is used in wires because it's an excellent conductor of electricity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a property of non-metals?",
        "options": ["Good conductor of heat", "Dull appearance", "Malleable", "Sonorous"],
        "correctAnswer": 1,
        "explanation": "Many non-metals have a dull appearance, unlike shiny metals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens to most non-metals when you hit them with a hammer?",
        "options": ["They bend", "They shatter", "They make a ringing sound", "They flatten into sheets"],
        "correctAnswer": 1,
        "explanation": "Most non-metals are brittle and will shatter when hit.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is most commonly used in soda cans?",
        "options": ["Iron", "Copper", "Aluminium", "Zinc"],
        "correctAnswer": 2,
        "explanation": "Aluminium is lightweight and commonly used in beverage cans.",
        "shuffleOptions": true
    }

                            
                    ]
                },            
                */
                {
                    id: 'section3',
                    title: 'Mining',
                    questions: [
                    

    {
        "type": "multiple-choice",
        "text": "Which mineral is Zambia's primary export?",
        "options": ["Copper", "Gold", "Iron", "Coal"],
        "correctAnswer": 0,
        "explanation": "Copper is Zambia's primary export, mined in regions like the Copperbelt.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Where is copper primarily mined in Zambia?",
        "options": ["Ndola", "Maamba", "Lusaka", "Livingstone"],
        "correctAnswer": 0,
        "explanation": "Copper is mined in Ndola, Luanshya, Mufulira, Chingola, and Solwezi.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a key property of copper?",
        "options": ["Poor conductor of electricity", "Highly conductive", "Brittle", "Non-malleable"],
        "correctAnswer": 1,
        "explanation": "Copper is highly conductive, making it ideal for electrical wiring.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining method is used for deep ore deposits?",
        "options": ["Open-cast mining", "Shaft mining", "Placer mining", "Strip mining"],
        "correctAnswer": 1,
        "explanation": "Shaft mining is used for deep ore deposits, such as copper in the Copperbelt.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a by-product of copper mining?",
        "options": ["Gold", "Cobalt", "Coal", "Tin"],
        "correctAnswer": 1,
        "explanation": "Cobalt is a silvery-white metal obtained as a by-product of copper mining.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Where is coal mined in Zambia?",
        "options": ["Kabwe", "Maamba", "Solwezi", "Mumbwa"],
        "correctAnswer": 1,
        "explanation": "Coal is mined in Maamba and used as fuel for power plants.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mineral is found in Kabwe and Luanshya?",
        "options": ["Copper", "Lead & Zinc", "Gold", "Emeralds"],
        "correctAnswer": 1,
        "explanation": "Lead and zinc are mined in Kabwe and Luanshya.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the color of pure copper?",
        "options": ["Silver", "Black", "Brownish-red", "White"],
        "correctAnswer": 2,
        "explanation": "Copper has a distinctive brownish-red color.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a use of copper?",
        "options": ["Electrical wires", "Water pipes", "Jewelry", "Glass production"],
        "correctAnswer": 3,
        "explanation": "Copper is not used in glass production but is widely used in electrical, plumbing, and jewelry applications.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the final stage of copper refining?",
        "options": ["Crushing", "Smelting", "Electrolysis", "Floatation"],
        "correctAnswer": 2,
        "explanation": "Electrolysis refines copper to 100% purity, producing copper cathodes.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which alloy is made by mixing copper with zinc?",
        "options": ["Bronze", "Brass", "Steel", "Pewter"],
        "correctAnswer": 1,
        "explanation": "Brass is an alloy of copper and zinc, used in machinery and decorations.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a copper product in Zambia?",
        "options": ["Plastic bottles", "Copper cables", "Wooden furniture", "Ceramic tiles"],
        "correctAnswer": 1,
        "explanation": "Copper is used to make electrical cables, among other products.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What environmental issue is caused by mining?",
        "options": ["Reforestation", "Land degradation", "Cleaner air", "Increased rainfall"],
        "correctAnswer": 1,
        "explanation": "Mining causes land degradation through craters and waste heaps.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining method is used for ores near the surface?",
        "options": ["Shaft mining", "Open-cast mining", "Underground mining", "Drift mining"],
        "correctAnswer": 1,
        "explanation": "Open-cast mining is used for ores near the surface, such as coal in Maamba.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the purpose of floatation in copper extraction?",
        "options": ["To melt the ore", "To separate copper from impurities", "To crush the ore", "To transport the ore"],
        "correctAnswer": 1,
        "explanation": "Floatation separates copper from impurities by making it bubble to the surface.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT mined in Zambia?",
        "options": ["Copper", "Cobalt", "Diamonds", "Emeralds"],
        "correctAnswer": 2,
        "explanation": "Zambia mines emeralds, not diamonds, among its gemstones.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the economic benefit of copper mining?",
        "options": ["Increased imports", "Job creation", "Higher pollution", "Reduced exports"],
        "correctAnswer": 1,
        "explanation": "Copper mining creates jobs and boosts Zambia's economy.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which gas contributes to acid rain from mining?",
        "options": ["Oxygen", "Nitrogen", "Sulfur dioxide", "Carbon monoxide"],
        "correctAnswer": 2,
        "explanation": "Sulfur dioxide from smelting reacts with rain to form acid rain.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main use of coal mined in Zambia?",
        "options": ["Jewelry", "Fuel for power plants", "Construction", "Electronics"],
        "correctAnswer": 1,
        "explanation": "Coal from Maamba is primarily used as fuel for power generation.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which Zambian coins are made from copper?",
        "options": ["K1 coin", "K5 coin", "10 ngwee coin", "K10 note"],
        "correctAnswer": 2,
        "explanation": "The 10 and 50 ngwee coins are made from copper.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the final product of copper refining?",
        "options": ["Copper ore", "Copper cathodes", "Copper slag", "Copper dust"],
        "correctAnswer": 1,
        "explanation": "Electrolysis produces pure copper cathodes for export and manufacturing.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining activity causes deforestation?",
        "options": ["Refining", "Drilling", "Land clearing", "Smelting"],
        "correctAnswer": 2,
        "explanation": "Land clearing for mines leads to deforestation and habitat loss.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which metal is mixed with copper to make bronze?",
        "options": ["Zinc", "Iron", "Tin", "Aluminum"],
        "correctAnswer": 2,
        "explanation": "Bronze is an alloy of copper and tin, used in bearings and sculptures.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a major environmental concern in mining areas?",
        "options": ["Increased wildlife", "Water pollution", "More fertile soil", "Less noise"],
        "correctAnswer": 1,
        "explanation": "Toxic mining waste contaminates rivers, harming aquatic life.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which town is known for emerald mining?",
        "options": ["Kabwe", "Ndola", "Luanshya", "Lufwanyama"],
        "correctAnswer": 3,
        "explanation": "Lufwanyama is a key area for emerald mining in Zambia.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What happens during copper smelting?",
        "options": ["Ore is crushed", "Copper is melted to remove impurities", "Copper is stretched into wires", "Water is filtered"],
        "correctAnswer": 1,
        "explanation": "Smelting melts copper to remove impurities, increasing purity to 98%.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which industry benefits most from copper’s conductivity?",
        "options": ["Textile", "Electrical", "Agriculture", "Fishing"],
        "correctAnswer": 1,
        "explanation": "Copper's high conductivity makes it essential for electrical wiring and components.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a negative effect of mining blasts?",
        "options": ["Improved air quality", "Building damage from vibrations", "More trees growing", "Cleaner water"],
        "correctAnswer": 1,
        "explanation": "Blasting causes vibrations that can damage nearby buildings.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mineral is mined in Mumbwa?",
        "options": ["Copper", "Gold", "Coal", "Tin"],
        "correctAnswer": 1,
        "explanation": "Gold is found in small deposits in Mumbwa, Ndola, and Rufunsa.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Why is local copper manufacturing important?",
        "options": ["Increases imports", "Reduces foreign exchange earnings", "Creates jobs", "Lowers copper demand"],
        "correctAnswer": 2,
        "explanation": "Local manufacturing creates jobs and reduces reliance on imported goods.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is NOT a step in copper extraction?",
        "options": ["Drilling", "Reforestation", "Floatation", "Smelting"],
        "correctAnswer": 1,
        "explanation": "Reforestation is an environmental activity, not part of copper extraction.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the primary use of manganese?",
        "options": ["Jewelry", "Steel production", "Plastic making", "Fuel"],
        "correctAnswer": 1,
        "explanation": "Manganese is used in steel production to improve strength.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining by-product can cause water pollution?",
        "options": ["Copper cathodes", "Acid mine drainage", "Refined gold", "Crushed coal"],
        "correctAnswer": 1,
        "explanation": "Acid mine drainage contaminates water with toxic metals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main impurity removed during copper refining?",
        "options": ["Gold", "Silver", "Iron", "Oxygen"],
        "correctAnswer": 2,
        "explanation": "Iron and other impurities are removed during refining.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which Zambian town has uranium deposits?",
        "options": ["Kabwe", "Solwezi", "Mufulira", "Chingola"],
        "correctAnswer": 0,
        "explanation": "Kabwe has uranium deposits, though not extensively mined.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a major challenge in Zambia’s mining sector?",
        "options": ["Low copper demand", "High production costs", "Too many workers", "Excess water supply"],
        "correctAnswer": 1,
        "explanation": "Fluctuating copper prices and high production costs affect profitability.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which property makes copper ideal for water pipes?",
        "options": ["Malleability", "Corrosion resistance", "Brittleness", "Low conductivity"],
        "correctAnswer": 1,
        "explanation": "Copper resists rust, making it durable for plumbing.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the waste material from mining called?",
        "options": ["Cathodes", "Slag", "Alloys", "Gems"],
        "correctAnswer": 1,
        "explanation": "Slag is the leftover waste after metal extraction.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining activity produces the most dust?",
        "options": ["Electrolysis", "Crushing", "Smelting", "Drilling"],
        "correctAnswer": 1,
        "explanation": "Crushing ore into powder generates significant dust.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which energy source is heavily used in mining?",
        "options": ["Solar power", "Wind power", "Electricity", "Biogas"],
        "correctAnswer": 2,
        "explanation": "Mining operations require large amounts of electricity.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main reason Zambia exports copper cathodes?",
        "options": ["They are unrefined", "They are 100% pure", "They contain cobalt", "They are cheaper"],
        "correctAnswer": 1,
        "explanation": "Copper cathodes are 100% pure and in high demand globally.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which environmental law regulates mining in Zambia?",
        "options": ["The Wildlife Act", "The Mines and Minerals Act", "The Water Act", "The Forest Act"],
        "correctAnswer": 1,
        "explanation": "The Mines and Minerals Act governs mining activities and environmental protection.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main hazard of open-cast mining?",
        "options": ["Flooding", "Landslides", "Earthquakes", "Volcanic eruptions"],
        "correctAnswer": 1,
        "explanation": "Open pits can collapse, leading to landslides.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which of these is a renewable resource?",
        "options": ["Copper", "Coal", "Solar energy", "Iron"],
        "correctAnswer": 2,
        "explanation": "Solar energy is renewable, unlike mined minerals.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the purpose of a ball mill in mining?",
        "options": ["To melt ore", "To grind ore into powder", "To transport ore", "To purify water"],
        "correctAnswer": 1,
        "explanation": "A ball mill crushes ore into fine powder for further processing.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining activity causes air pollution?",
        "options": ["Reforestation", "Smelting", "Water recycling", "Wildlife conservation"],
        "correctAnswer": 1,
        "explanation": "Smelting releases fumes and sulfur dioxide into the air.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the main use of zinc mined in Zambia?",
        "options": ["Jewelry", "Galvanizing iron", "Fuel", "Glassmaking"],
        "correctAnswer": 1,
        "explanation": "Zinc is used to galvanize iron, preventing rust.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining method has the least surface disruption?",
        "options": ["Open-cast mining", "Shaft mining", "Strip mining", "Mountaintop removal"],
        "correctAnswer": 1,
        "explanation": "Shaft mining goes deep underground, causing less surface damage.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which industry uses copper for radiators?",
        "options": ["Automotive", "Textile", "Food processing", "Pharmaceutical"],
        "correctAnswer": 0,
        "explanation": "Copper's heat conduction makes it ideal for car radiators.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is a major health risk for miners?",
        "options": ["Sunburn", "Dust inhalation", "Dehydration", "Noise-induced hearing loss"],
        "correctAnswer": 1,
        "explanation": "Dust from mining can cause lung diseases like silicosis.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mineral is used in making batteries?",
        "options": ["Copper", "Cobalt", "Coal", "Iron"],
        "correctAnswer": 1,
        "explanation": "Cobalt is used in rechargeable batteries for electronics.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the primary reason for refining copper?",
        "options": ["To make it heavier", "To remove impurities", "To change its color", "To reduce its conductivity"],
        "correctAnswer": 1,
        "explanation": "Refining removes impurities to produce pure copper for industrial use.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "Which mining waste product can be recycled?",
        "options": ["Slag", "Mercury", "Sulfur dioxide", "Acid mine drainage"],
        "correctAnswer": 0,
        "explanation": "Slag can sometimes be reused in construction or road-building.",
        "shuffleOptions": true
    },
    {
        "type": "multiple-choice",
        "text": "What is the biggest environmental risk of copper mining?",
        "options": ["Noise pollution", "Water contamination", "Increased rainfall", "Soil fertilization"],
        "correctAnswer": 1,
        "explanation": "Toxic chemicals from mining can leak into water sources.",
        "shuffleOptions": true
    }
                    
                    ]
                },      
            
            ]
        },
    
    
    
    
    ]
});