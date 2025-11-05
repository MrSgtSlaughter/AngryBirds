// Mesopotamia Lesson 2.3 Quiz for Angry Birds
// Topic: Assyrian & Persian Empires

(function () {
  const MESO_QUESTIONS = [
    {
      id: 1,
      text: "After Hammurabi’s death, which northern Mesopotamian people later united the region again?",
      choices: { A: "Egyptians", B: "Assyrians", C: "Greeks", D: "Phoenicians" },
      correct: "B"
    },
    {
      id: 2,
      text: "What helped Assyria become a powerful military state?",
      choices: { A: "A huge navy", B: "Camels for desert travel", C: "Iron weapons and cavalry", D: "Stone city walls" },
      correct: "C"
    },
    {
      id: 3,
      text: "What is cavalry?",
      choices: { A: "Soldiers who fight on foot", B: "Soldiers who fight while riding horses", C: "Soldiers who guard temples", D: "Soldiers who control boats" },
      correct: "B"
    },
    {
      id: 4,
      text: "How did the Assyrians organize their huge empire?",
      choices: { A: "Each city ruled itself with no control", B: "They divided it into provinces with governors", C: "They had only one giant city", D: "They used democracy everywhere" },
      correct: "B"
    },
    {
      id: 5,
      text: "Which city did Ashurbanipal make his capital?",
      choices: { A: "Babylon", B: "Persepolis", C: "Nineveh", D: "Jerusalem" },
      correct: "C"
    },
    {
      id: 6,
      text: "What was special about Ashurbanipal’s library at Nineveh?",
      choices: { A: "It stored only farming tools", B: "It held thousands of cuneiform tablets", C: "It was built underwater", D: "It was only for soldiers" },
      correct: "B"
    },
    {
      id: 7,
      text: "Nebuchadnezzar II was king of which empire?",
      choices: { A: "Old Babylonian", B: "Neo-Babylonian", C: "Egyptian", D: "Persian" },
      correct: "B"
    },
    {
      id: 8,
      text: "Which famous project is Nebuchadnezzar II best known for?",
      choices: { A: "The Great Pyramids", B: "The Great Wall", C: "The Hanging Gardens of Babylon", D: "The Lighthouse of Alexandria" },
      correct: "C"
    },
    {
      id: 9,
      text: "Cyrus the Great first won an empire by defeating which people?",
      choices: { A: "The Medes", B: "The Egyptians", C: "The Greeks", D: "The Romans" },
      correct: "A"
    },
    {
      id: 10,
      text: "What is a standing army?",
      choices: { A: "Soldiers who only fight in summer", B: "A permanent, professional army", C: "Farmers who fight when needed", D: "An army made only of nobles" },
      correct: "B"
    },
    {
      id: 11,
      text: "The Persian “Immortals” were:",
      choices: { A: "A group of gods", B: "Elite soldiers in a 10,000-man unit", C: "A royal family", D: "A group of priests" },
      correct: "B"
    },
    {
      id: 12,
      text: "How did Cyrus treat conquered peoples like the Babylonians and Jews?",
      choices: { A: "Destroyed their temples", B: "Forced only Persian customs", C: "Allowed their religions and customs", D: "Made them leave their homelands" },
      correct: "C"
    },
    {
      id: 13,
      text: "Which Persian ruler expanded the empire and built the Great Royal Road?",
      choices: { A: "Sargon", B: "Nebuchadnezzar II", C: "Darius the Great", D: "Ashurbanipal" },
      correct: "C"
    },
    {
      id: 14,
      text: "What was tribute in the Persian empire?",
      choices: { A: "A type of coin", B: "Payment to show loyalty to a stronger power", C: "A law code", D: "A royal road" },
      correct: "B"
    },
    {
      id: 15,
      text: "How did Darius make trade easier across the Persian empire?",
      choices: { A: "Banned all foreign goods", B: "Forced everyone to barter", C: "Created a common currency of gold coins", D: "Closed the Great Royal Road" },
      correct: "C"
    },
    {
      id: 16,
      text: "What did the Great Royal Road connect?",
      choices: { A: "Rome and Athens", B: "Nineveh and Jerusalem", C: "Susa and Sardis (and other parts of the empire)", D: "Babylon and the Nile delta" },
      correct: "C"
    },
    {
      id: 17,
      text: "What is the main idea of Zoroastrianism?",
      choices: { A: "Thousands of equal gods", B: "Universe is a struggle between good and evil", C: "Ignore right and wrong", D: "Only kings reach the afterlife" },
      correct: "B"
    },
    {
      id: 18,
      text: "What is the name of the Zoroastrian sacred text?",
      choices: { A: "The Torah", B: "The Bible", C: "The Avesta", D: "The Epic of Gilgamesh" },
      correct: "C"
    },
    {
      id: 19,
      text: "How did Darius balance local self-government with central power?",
      choices: { A: "Ruled every village personally", B: "Banned all local traditions", C: "Provinces with local leaders under central control", D: "Let the army decide everything" },
      correct: "C"
    },
    {
      id: 20,
      text: "Why are the Assyrian and Persian empires important in Mesopotamian history?",
      choices: { A: "They ended writing and trade", B: "They united regions and spread new ideas", C: "They stayed small and isolated", D: "They had no armies at all" },
      correct: "B"
    }
  ];

  let usedQuestionIds = [];
  let overlayVisible = false;
  let currentQuestion = null;
  let currentReason = null;

  function pickQuestion() {
    if (usedQuestionIds.length === MESO_QUESTIONS.length) {
      usedQuestionIds = [];
    }
    const remaining = MESO_QUESTIONS.filter(q => !usedQuestionIds.includes(q.id));
    const q = remaining[Math.floor(Math.random() * remaining.length)];
    usedQuestionIds.push(q.id);
    return q;
  }

  function ensureOverlay() {
    let overlay = document.getElementById("quizOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "quizOverlay";
      Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        background: "rgba(0,0,0,0.7)",
        display: "none",
        zIndex: "9999",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif"
      });

      const card = document.createElement("div");
      card.id = "quizCard";
      Object.assign(card.style, {
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        maxWidth: "520px",
        width: "90%",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        color: "#000000",
        boxSizing: "border-box"
      });

      const title = document.createElement("h2");
      title.textContent = "Mesopotamia Checkpoint";

      const reasonEl = document.createElement("div");
      reasonEl.id = "quizReason";
      Object.assign(reasonEl.style, {
        fontSize: "14px",
        marginBottom: "8px",
        color: "#444"
      });

      const questionEl = document.createElement("div");
      questionEl.id = "quizQuestion";
      Object.assign(questionEl.style, {
        margin: "12px 0",
        fontSize: "16px",
        fontWeight: "500"
      });

      const choicesEl = document.createElement("div");
      choicesEl.id = "quizChoices";

      const feedbackEl = document.createElement("div");
      feedbackEl.id = "quizFeedback";
      Object.assign(feedbackEl.style, {
        marginTop: "10px",
        fontSize: "14px"
      });

      card.appendChild(title);
      card.appendChild(reasonEl);
      card.appendChild(questionEl);
      card.appendChild(choicesEl);
      card.appendChild(feedbackEl);
      overlay.appendChild(card);
      document.body.appendChild(overlay);
    }
    return overlay;
  }

  function showMesopotamiaQuestion(reason) {
    const overlay = ensureOverlay();
    if (overlayVisible) return; // don't stack

    currentReason = reason || "checkpoint";
    const q = pickQuestion();
    currentQuestion = q;

    const reasonEl = document.getElementById("quizReason");
    const questionEl = document.getElementById("quizQuestion");
    const choicesEl = document.getElementById("quizChoices");
    const feedbackEl = document.getElementById("quizFeedback");

    if (reason === "win") {
      reasonEl.textContent = "Nice shot! Before you keep going, answer this:";
    } else if (reason === "lose") {
      reasonEl.textContent = "You ran out of birds. Try this question:";
    } else {
      reasonEl.textContent = "Mesopotamia – Topic 2 Lesson 3:";
    }

    questionEl.textContent = q.text;
    feedbackEl.textContent = "";
    choicesEl.innerHTML = "";

    ["A", "B", "C", "D"].forEach(label => {
      const btn = document.createElement("button");
      btn.textContent = label + ". " + q.choices[label];
      Object.assign(btn.style, {
        display: "block",
        width: "100%",
        margin: "6px 0",
        padding: "8px 10px",
        fontSize: "14px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "1px solid #ccc",
        background: "#f5f5f5"
      });

      btn.onclick = () => {
        const isCorrect = (label === q.correct);

        if (isCorrect) {
          feedbackEl.textContent = "✅ Correct!";
          feedbackEl.style.color = "green";
        } else {
          feedbackEl.textContent =
            "❌ Not quite. Correct answer: " +
            q.correct +
            ". " +
            q.choices[q.correct];
          feedbackEl.style.color = "red";
        }

        // Log to Firebase if available
        if (window.submitMesopotamiaScore) {
          window.submitMesopotamiaScore(currentReason, currentQuestion, label, isCorrect);
        }

        // disable all buttons
        const allButtons = choicesEl.querySelectorAll("button");
        allButtons.forEach(b => (b.disabled = true));

        setTimeout(() => {
          overlay.style.display = "none";
          overlayVisible = false;
        }, 2000);
      };

      choicesEl.appendChild(btn);
    });

    overlay.style.display = "flex";
    overlayVisible = true;
  }

  // Expose globally if you ever want to call it from game code
  window.showMesopotamiaQuestion = showMesopotamiaQuestion;

  // AUTO-TRIGGER QUESTIONS ON A TIMER (no game hooks needed)
  window.addEventListener("load", () => {
    // First question after ~15 seconds of play
    setTimeout(() => {
      showMesopotamiaQuestion("checkpoint");
    }, 15000);

    // Then every 90 seconds
    setInterval(() => {
      showMesopotamiaQuestion("checkpoint");
    }, 90000);
  });
})();
