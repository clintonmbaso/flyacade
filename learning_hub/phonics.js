// Ordered list of phonics sounds
const phonicsOrder = ["a", "t", "p", "i", "n", "s", "m", "d", "o", "g", "c", "k", "e", "u", "r", "h", "b", "f", "l", "sh", "ch", "th", "ck", ];

// Phonics details
const phonicsData = {
  a: {
    title: "Aa",
    audio: "../audio/letters/A.aac",
    image: "../Tests/images/letters/new/Aa.png",
    write: "Start at the top, curve around and close the circle, then add a tail.",
    identify: "Look for words like apple, ant, arror, and axe.",
    story: "Apple the Ant loved adventures and always asked questions.",
    song: "A is for apple, aa-aa-aa-aa, bite it with a crunch!",
    writeDemo: "./gifs/A.gif"
  },
  b: {
    title: "Bb",
    audio: "../audio/letters/B.aac",
    image: "../Tests/images/letters/new/Bb.png",
    write: "Start at the top, go down, then make two bumps.",
    identify: "Look for words like ball, bat, and bug.",
    story: "Benny the Bear bounced a big blue ball.",
    song: "B is for ball, buh-buh-buh-buh, bounce it down the hall!",
    writeDemo: "./gifs/B.gif"
  },
  c: {
    title: "Cc",
    audio: "../audio/letters/C.aac",
    image: "../Tests/images/letters/new/Cc.png",
    write: "Start at the top, curve around like a crescent moon.",
    identify: "Look for words like cat, cup, and car.",
    story: "Cathy the Cat chased a clever crab.",
    song: "C is for cat, cuh-cuh-cuh-cuh, curling up so flat!",
    writeDemo: "./gifs/Cc.gif"
  },
  d: {
    title: "Dd",
    audio: "../audio/letters/D.aac",
    image: "../Tests/images/letters/new/Dd.png",
    write: "Start with a circle, then a straight line down.",
    identify: "Look for words like dog, drum, and door.",
    story: "Danny the Dog dug a deep hole for his bone.",
    song: "D is for dog, duh-duh-duh-duh, dig and wag and jog!",
    writeDemo: "./gifs/D.gif"
  },
  e: {
    title: "Ee",
    audio: "../audio/letters/E.aac",
    image: "../Tests/images/letters/new/Ee.png",
    write: "Make a small loop going left like a tiny tail.",
    identify: "Look for words like egg, elephant, and elbow.",
    story: "Ellie the Elephant enjoyed eggs every morning.",
    song: "E is for egg, eh-eh-eh-eh, crack it with a peg!",
    writeDemo: "./gifs/E.gif"
  },
  f: {
    title: "Ff",
    audio: "../audio/letters/F.aac",
    image: "../Tests/images/letters/new/Ff.png",
    write: "Make a tall stick, then add arms at the top and middle.",
    identify: "Look for words like fish, fan, and frog.",
    story: "Freddy the Frog found a funny feather.",
    song: "F is for fish, fuh-fuh-fuh-fuh, swimming with a swish!",
    writeDemo: "./gifs/F.gif"
  },
  g: {
    title: "Gg",
    audio: "../audio/letters/G.aac",
    image: "../Tests/images/letters/new/Gg.png",
    write: "Make a circle, then curve down below the line.",
    identify: "Look for words like goat, gum, and gift.",
    story: "Gary the Goat gave Grandma a gift.",
    song: "G is for goat, guh-guh-guh-guh, galloping in a coat!",
    writeDemo: "./gifs/G.gif"
  },
  h: {
    title: "Hh",
    audio: "../audio/letters/H.aac",
    image: "../Tests/images/letters/new/Hh.png",
    write: "Make a tall line down, then another line halfway up and over.",
    identify: "Look for words like hat, hen, and hop.",
    story: "Hannah the Hen hopped on hay happily.",
    song: "H is for hat, huh-huh-huh-huh, put it on like that!",
    writeDemo: "./gifs/H.gif"
  },
  i: {
    title: "Ii",
    audio: "../audio/letters/I.aac",
    image: "../Tests/images/letters/new/Ii.png",
    write: "Draw a line down and dot it on top.",
    identify: "Look for words like igloo, insect, and ink.",
    story: "Izzy the Insect went inside the igloo.",
    song: "I is for insect, ih-ih-ih-ih, crawling on the deck!",
    writeDemo: "./gifs/I.gif"
  },
  j: {
    title: "Jj",
    audio: "../audio/letters/J.aac",
    image: "../Tests/images/letters/new/Jj.png",
    write: "Make a hook going down and curve up, then dot on top.",
    identify: "Look for words like jam, jug, and jet.",
    story: "Jenny the Jet zoomed through jelly clouds.",
    song: "J is for jam, juh-juh-juh-juh, spread it on some yam!",
    writeDemo: "./gifs/J.gif"
  },
  k: {
    title: "Kk",
    audio: "../audio/letters/K.aac",
    image: "../Tests/images/letters/new/Kk.png",
    write: "Draw a tall line, then make a small 'V' going out from the middle.",
    identify: "Look for words like kite, key, and kangaroo.",
    story: "Kevin the Kangaroo kicked a key into the sky.",
    song: "K is for kite, kuh-kuh-kuh-kuh, flying in the light!",
    writeDemo: "./gifs/K.gif"
  },
  l: {
    title: "Ll",
    audio: "../audio/letters/L.aac",
    image: "../Tests/images/letters/new/Ll.png",
    write: "Draw a straight line down, then across at the bottom.",
    identify: "Look for words like lion, lamp, and leaf.",
    story: "Leo the Lion liked lying under the lamp.",
    song: "L is for lion, luh-luh-luh-luh, leaping on the lawn!",
    writeDemo: "./gifs/L.gif"
  },
  m: {
    title: "Mm",
    audio: "../audio/letters/M.aac",
    image: "../Tests/images/letters/new/Mm.png",
    write: "Draw a straight line down, then two bumps.",
    identify: "Look for words like mat, mop, and mouse.",
    story: "Molly the Mouse made muffins on Monday.",
    song: "M is for mat, muh-muh-muh-muh, sit on it like that!",
    writeDemo: "./gifs/m.gif"
  },
  n: {
    title: "Nn",
    audio: "../audio/letters/N.aac",
    image: "../Tests/images/letters/new/Nn.png",
    write: "Draw a straight line down, then make a bump.",
    identify: "Look for words like net, nest, and nose.",
    story: "Nina the Newt napped near a net.",
    song: "N is for net, nuh-nuh-nuh-nuh, catch a fish or pet!",
    writeDemo: "./gifs/N.gif"
  },
  o: {
    title: "Oo",
    audio: "../audio/letters/O.aac",
    image: "../Tests/images/letters/new/Oo.png",
    write: "Start at the top, make a round circle.",
    identify: "Look for words like orange, octopus, and owl.",
    story: "Oscar the Owl opened an orange.",
    song: "O is for orange, oh-oh-oh-oh, peel it slow and go!",
    writeDemo: "./gifs/O.gif"
  },
  p: {
    title: "Pp",
    audio: "../audio/letters/P.aac",
    image: "../Tests/images/letters/new/Pp.png",
    write: "Draw a line down, then make a small bump at the top.",
    identify: "Look for words like pig, pen, and pan.",
    story: "Penny the Pig painted pink pictures.",
    song: "P is for pig, puh-puh-puh-puh, dancing a little jig!",
    writeDemo: "./gifs/P.gif"
  },
  q: {
    title: "Qq",
    audio: "../audio/letters/Q.aac",
    image: "../Tests/images/letters/new/Qq.png",
    write: "Draw a circle, then add a small tail at the bottom right.",
    identify: "Look for words like queen, quilt, and quail.",
    story: "Queenie the Quail quickly quit the quiz.",
    song: "Q is for queen, kwuh-kwuh-kwuh-kwuh, dressed in shiny green!",
    writeDemo: "./gifs/Q.gif"
  },
  r: {
    title: "Rr",
    audio: "../audio/letters/R.aac",
    image: "../Tests/images/letters/new/Rr.png",
    write: "Draw a line down, then a small bump out.",
    identify: "Look for words like rat, red, and ring.",
    story: "Ricky the Rabbit raced in red rainboots.",
    song: "R is for rat, ruh-ruh-ruh-ruh, running round the mat!",
    writeDemo: "./gifs/R.gif"
  },
  s: {
    title: "Ss",
    audio: "../audio/letters/S.aac",
    image: "../Tests/images/letters/new/Ss.png",
    write: "Make a little snake shape, starting at the top and curving down.",
    identify: "Look for words like sun, sock, and sand.",
    story: "Sally the Snake slithered in the sun.",
    song: "S is for sun, sss-sss-sss-sss, shining on everyone!",
    writeDemo: "./gifs/S.gif"
  },
  t: {
    title: "Tt",
    audio: "../audio/letters/T.aac",
    image: "../Tests/images/letters/new/Tt.png",
    write: "Draw a line down, then cross it near the top.",
    identify: "Look for words like tap, top, and tent.",
    story: "Timmy the Turtle tapped the table.",
    song: "T is for tap, tuh-tuh-tuh-tuh, make a little clap!",
    writeDemo: "./gifs/T.gif"
  },
  u: {
    title: "Uu",
    audio: "../audio/letters/U.aac",
    image: "../Tests/images/letters/new/Uu.png",
    write: "Start at the top, go down, curve, and back up.",
    identify: "Look for words like umbrella, up, and under.",
    story: "Ursula the Unicorn used an umbrella.",
    song: "U is for up, uh-uh-uh-uh, jump right like a pup!",
    writeDemo: "./gifs/U.gif"
  },
  v: {
    title: "Vv",
    audio: "../audio/letters/V.aac",
    image: "../Tests/images/letters/new/Vv.png",
    write: "Draw a slanted line down, then back up.",
    identify: "Look for words like van, vet, and vase.",
    story: "Vicky the Vet visited a vanishing vulture.",
    song: "V is for van, vuh-vuh-vuh-vuh, driving in a fan!",
    writeDemo: "./gifs/V.gif"
  },
  w: {
    title: "Ww",
    audio: "../audio/letters/W.aac",
    image: "../Tests/images/letters/new/Ww.png",
    write: "Make two small hills like a wave.",
    identify: "Look for words like wig, web, and well.",
    story: "Wendy the Worm wiggled in the well.",
    song: "W is for web, wuh-wuh-wuh-wuh, spun around your head!",
    writeDemo: "./gifs/W.gif"
  },
  x: {
    title: "Xx",
    audio: "../audio/letters/X.aac",
    image: "../Tests/images/letters/new/Xx.png",
    write: "Make one line down, then cross it with another.",
    identify: "Look for words like box, fox, and six.",
    story: "Max the Fox found an x-ray in a box.",
    song: "X is for box, ks-ks-ks-ks, hidden in the rocks!",
    writeDemo: "./gifs/X.gif"
  },
  y: {
    title: "Yy",
    audio: "../audio/letters/Y.aac",
    image: "../Tests/images/letters/new/Yy.png",
    write: "Make a small line down, then a longer one below.",
    identify: "Look for words like yak, yellow, and yo-yo.",
    story: "Yara the Yak yawned in yellow yarn.",
    song: "Y is for yo-yo, yuh-yuh-yuh-yuh, spinning to and fro!",
    writeDemo: "./gifs/Y.gif"
  },
  z: {
    title: "Zz",
    audio: "../audio/letters/Z.aac",
    image: "../Tests/images/letters/new/Zz.png",
    write: "Draw a zig-zag from top to bottom.",
    identify: "Look for words like zebra, zip, and zero.",
    story: "Zoe the Zebra zipped through the zoo.",
    song: "Z is for zip, zzz-zzz-zzz-zzz, zooming with a flip!",
    writeDemo: "./gifs/Z.gif"
  },
  
  //  Diagraphs
  "ai": {
    "title": "ai",
    "audio": "../audio/digraphs/ai.aac",
    "image": "../Tests/images/digraphs/ai.png",
    "write": "Start with 'a', then add an 'i' right next to it.",
    "identify": "Look for words like rain, snail, and train.",
    "story": "The snail in the rain wore a tiny train hat!",
    "song": "AI is in rain, ai-ai-ai-ai, falling from the sky!",
writeDemo: "./gifs/ai.gif"
  },
  "ei": {
    "title": "ei",
    "audio": "../audio/digraphs/ei.aac",
    "image": "../Tests/images/digraphs/ei.png",
    "write": "Write an 'e' followed by an 'i'.",
    "identify": "Look for words like ceiling, vein, and their.",
    "story": "Eli the elf painted veins on the ceiling.",
    "song": "EI is in vein, ei-ei-ei-ei, flowing through the line!",
writeDemo: "./gifs/ei.gif"
  },
  "ie": {
    "title": "ie",
    "audio": "../audio/digraphs/ie.aac",
    "image": "../Tests/images/digraphs/ie.png",
    "write": "Write 'i' then 'e'.",
    "identify": "Look for words like pie, tie, and field.",
    "story": "Pie and tie danced in the field!",
    "song": "IE is in pie, ie-ie-ie-ie, sweet and round and high!",
writeDemo: "./gifs/ie.gif"
  },
  "ay": {
    "title": "ay",
    "audio": "../audio/digraphs/ay.aac",
    "image": "../Tests/images/digraphs/ay.png",
    "write": "Start with 'a', then add a 'y'.",
    "identify": "Look for words like play, day, and tray.",
    "story": "On a sunny day, they played with a tray.",
    "song": "AY is in play, ay-ay-ay-ay, having fun all day!",
writeDemo: "./gifs/ay.gif"
  },
  "sh": {
    "title": "sh",
    "audio": "../audio/digraphs/sh.aac",
    "image": "../Tests/images/digraphs/sh.png",
    "write": "Write 's' followed by an 'h'.",
    "identify": "Look for words like ship, shop, and shell.",
    "story": "Sharon the shark shops for shiny shells.",
    "song": "SH is in ship, sh-sh-sh-sh, sailing with a zip!",
writeDemo: "./gifs/sh.gif"
  },
  "ch": {
    "title": "ch",
    "audio": "../audio/digraphs/ch.aac",
    "image": "../Tests/images/digraphs/ch.png",
    "write": "Write 'c' then 'h'.",
    "identify": "Look for words like chip, chair, and cheese.",
    "story": "Chico the chipmunk chairs the cheese club.",
    "song": "CH is in chair, ch-ch-ch-ch, sitting over there!",
writeDemo: "./gifs/ch.gif"
  },
  "ph": {
    "title": "ph",
    "audio": "../audio/digraphs/ph.aac",
    "image": "../Tests/images/digraphs/ph.png",
    "write": "Write 'p' then 'h'.",
    "identify": "Look for words like phone, photo, and dolphin.",
    "story": "Phil the dolphin found a photo on the phone.",
    "song": "PH is in phone, ph-ph-ph-ph, talking all alone!",
writeDemo: "./gifs/ph.gif"
  },
  "oi": {
    "title": "oi",
    "audio": "../audio/digraphs/oi.aac",
    "image": "../Tests/images/digraphs/oi.png",
    "write": "Write 'o' then 'i'.",
    "identify": "Look for words like coin, soil, and boil.",
    "story": "The coin in the soil began to boil!",
    "song": "OI is in coin, oi-oi-oi-oi, spinning with joy!",
writeDemo: "./gifs/oi.gif"
  },
  "au": {
    "title": "au",
    "audio": "../audio/digraphs/au.aac",
    "image": "../Tests/images/digraphs/au.png",
    "write": "Write 'a' then 'u'.",
    "identify": "Look for words like author, autumn, and sauce.",
    "story": "In autumn, the author spilled sauce on the page.",
    "song": "AU is in sauce, au-au-au-au, tasty of course!",
writeDemo: "./gifs/au.gif"
  },
  "eu": {
    "title": "eu",
    "audio": "../audio/digraphs/eu.aac",
    "image": "../Tests/images/digraphs/eu.png",
    "write": "Write 'e' then 'u'.",
    "identify": "Look for words like Europe, eulogy, and eucalyptus.",
    "story": "Eugene the koala munched eucalyptus in Europe.",
    "song": "EU is in Europe, eu-eu-eu-eu, travel with a globe!",
writeDemo: "./gifs/eu.gif"
  },
    
  "ue": {
    "title": "ue",
    "audio": "../audio/digraphs/ue.aac",
    "image": "../Tests/images/digraphs/ue.png",
    "write": "Write 'u' then 'e'.",
    "identify": "Look for words like blue, glue, and cue.",
    "story": "The blue glue gave a cue to start the game.",
    "song": "UE is in blue, ue-ue-ue-ue, sticky and true!",
writeDemo: "./gifs/ue.gif"
  },
    
  "ee": {
    "title": "ee",
    "audio": "../audio/digraphs/ee.aac",
    "image": "../Tests/images/digraphs/ee.png",
    "write": "Write two 'e's.",
    "identify": "Look for words like bee, tree, and see.",
    "story": "The bee saw a tree and said 'see!'",
    "song": "EE is in tree, ee-ee-ee-ee, tall as can be!",
writeDemo: "./gifs/ee.gif"
  },
    
  "ea": {
    "title": "ea",
    "audio": "../audio/digraphs/ea.aac",
    "image": "../Tests/images/digraphs/ea.png",
    "write": "Write 'e' then 'a'.",
    "identify": "Look for words like eat, leaf, and sea.",
    "story": "They ate leaves by the sea.",
    "song": "EA is in sea, ea-ea-ea-ea, swimming happily!",
writeDemo: "./gifs/ea.gif"
  },
    
  "oo": {
    "title": "oo",
    "audio": "../audio/digraphs/oo.aac",
    "image": "../Tests/images/digraphs/oo.png",
    "write": "Write two 'o's.",
    "identify": "Look for words like moon, spoon, and book.",
    "story": "The moon ate with a spoon and read a book.",
    "song": "OO is in moon, oo-oo-oo-oo, glowing like a balloon!",
writeDemo: "./gifs/oo.gif"
  },
"ck": {
  "title": "ck",
  "audio": "../audio/digraphs/ck.aac",
  "image": "../Tests/images/digraphs/ck.png",
  "write": "Write the letter 'c' followed by 'k'.",
  "identify": "Look for words like duck, sock, and rock.",
  "story": "A duck with a sock found a rock and gave it a knock.",
  "song": "CK is in duck, ck-ck-ck-ck, give it a quick peck!",
writeDemo: "./gifs/ck.gif"
},
  
};

let currentIndex = 0;

function showSound() {
  const key = phonicsOrder[currentIndex];
  const data = phonicsData[key];

  document.getElementById('sound-title').textContent = data.title;
  document.getElementById('write-section').textContent = data.write;
  document.getElementById('identify-section').textContent = data.identify;
  document.getElementById('story-section').textContent = data.story;
  document.getElementById('song-section').textContent = data.song;
  document.getElementById('write-demo').src = data.writeDemo;
  document.getElementById('write-demo').style.display = "block";
}

function playSound() {
  const key = phonicsOrder[currentIndex];
  const audio = new Audio(phonicsData[key].audio);
  audio.play();
}

function previousSound() {
  currentIndex = (currentIndex - 1 + phonicsOrder.length) % phonicsOrder.length;
  showSound();
}

function nextSound() {
  currentIndex = (currentIndex + 1) % phonicsOrder.length;
  showSound();
}

// Drawing on canvas
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

// Touch support
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
  isDrawing = true;
});

canvas.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (!isDrawing) return;
  const touch = e.touches[0];
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.stroke();
});

canvas.addEventListener("touchend", () => {
  isDrawing = false;
});

// Clear Canvas function
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Attach to button
document.getElementById("clearBtn").addEventListener("click", clearCanvas);

// Initialize
showSound();