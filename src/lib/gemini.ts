export interface ChatMessage {
  role: "user" | "model" | "system";
  content: string;
}

export const TUTOR_PRESETS = {
  STORY: {
    label: "Story Mode 📖",
    prompt: "Explain the current concept through a short, engaging story. Use relatable characters and a clear narrative arc to illustrate the physics/science."
  },
  CRICKET: {
    label: "Cricket Analogy 🏏",
    prompt: "Explain the current concept using a Cricket analogy (e.g., batting speed, run-outs for displacement, bowling acceleration). Make it fun and relatable for a CBSE student."
  },
  FOOTBALL: {
    label: "Football Analogy ⚽",
    prompt: "Explain the current concept using a Football analogy (e.g., passing, pitch lengths, player speed/velocity, goal shots). Make it easy to visualize."
  },
  SIMPLIFY: {
    label: "Simplify (Age 14) 💡",
    prompt: "Explain the current concept as if I am 14 years old. Break down any complex terms, avoid technical jargon, and use basic, everyday examples."
  },
  VISUAL: {
    label: "Explain Visually 🎨",
    prompt: "Explain the concept by describing a simple, easy-to-draw diagram or layout. Break down the components of the diagram and label them in text."
  },
  ANIMATION: {
    label: "Animation Idea 🎬",
    prompt: "Suggest an idea for a 2D animation or interactive simulation that would make this concept crystal clear. Explain what happens on screen step-by-step."
  },
  QUIZ: {
    label: "Quiz Me ❓",
    prompt: "Ask me one interesting, conceptual, CBSE Class 9 level question about this topic to test my understanding. Wait for my answer before explaining."
  },
  MISTAKES: {
    label: "Common Mistakes ⚠️",
    prompt: "What are the most common mistakes students make in CBSE exams on this topic? Highlight the pitfalls and show how to write the correct answer."
  },
  COMPARE: {
    label: "Compare Concepts ⚖️",
    prompt: "Provide a side-by-side comparison table between the current concept and its closely related counterpart (e.g., distance vs displacement, speed vs velocity)."
  }
};

export const BASE_SYSTEM_INSTRUCTION = `
You are "Karthik's Study Buddy", an expert, friendly private tutor sitting beside a Class 9 CBSE student. 
Your goal is to explain concepts from zero, make learning fun, and prepare the student for exams according to the latest NCERT syllabus.

CRITICAL RULES:
1. Always teach from basics. Never assume prior knowledge. Never skip steps.
2. Never use college-level or advanced mathematical terms. Keep it simple and age-appropriate (14 years old).
3. Encourage curiosity and be warm, patient, and highly positive.
4. Ground your explanations in official NCERT terminology.
5. Use mathematical equations formatted in KaTeX if needed (e.g., $v = u + at$).
6. If the student asks about something outside the CBSE Class 9 syllabus, state clearly: "This topic is beyond the prescribed NCERT syllabus."
7. Integrate light humor and emojis occasionally to keep it friendly.
8. Maintain a conversation. Do not dump massive paragraphs; explain step-by-step and ask checking questions.
`;

export interface StreamCallbacks {
  onChunk: (text: string) => void;
  onDone: (fullText: string) => void;
  onError: (err: any) => void;
}

const MOCK_ANSWERS: { triggers: string[]; response: string }[] = [
  {
    triggers: ["cricket", "🏏"],
    response: "Let's teach this using Cricket! 🏏\n\nImagine Virat Kohli is at the crease. He runs a single: he runs from the batting crease to the bowling crease (20.12 meters). That's both his **Distance** and his **Displacement** (20.12m straight ahead).\n\nBut wait! What if he runs a double? He runs to the other end and runs back to his starting crease. \n- **Distance travelled**: $20.12 + 20.12 = 40.24 \\text{ meters}$ (his legs did all that work!).\n- **Displacement**: **Exactly 0 meters!** Why? Because he ended up exactly where he started. The bowler could run him out because his net change in position from his crease is zero.\n\nDoes this make sense? Want me to explain acceleration using a fast bowler's run-up next? 🏃‍♂️"
  },
  {
    triggers: ["football", "⚽"],
    response: "Let's explain this using Football! ⚽\n\nImagine you are taking a penalty kick. \n\n1. When you place the ball on the penalty spot, that is your initial reference point.\n2. You run backward 4 steps (distance = 3 meters, displacement = 3 meters backward).\n3. You run forward and kick the ball. The ball flies straight into the top-right corner of the goal net (displacement = 11 meters forward).\n\nIf the goalie blocks it and it bounces right back to your feet, the ball's **Distance** is 22 meters (11m to goal + 11m back), but its net **Displacement** from the penalty spot is **0 meters**!\n\nThat's why coaches look at displacement maps (heatmaps) to see where a midfielder actually spent their time, rather than just how much distance they ran. \n\nWhat position do you play? We can use your position for another example!"
  },
  {
    triggers: ["story", "📖", "once upon a time"],
    response: "Here is a story about motion! 📖\n\nOnce upon a time, in a quiet garden, lived a tiny snail named Sneha. Sneha wanted to visit a beautiful red rose at the other side of a stone wall.\n\nSneha crawled around the stone wall, over a water hose, and past a sleeping cat. Her path was long and winding—it took her 3 hours and she covered a total distance of **10 meters**.\n\nBut if you look at where she started and where the rose was, the rose was just **2 meters** straight away on the other side of the wall. If Sneha could walk in a straight line through the wall, her trip would have been just 2 meters. That shortcut is her **Displacement**.\n\nSo Sneha traveled a *distance* of 10 meters, but her *displacement* was only 2 meters East!\n\nIsn't it fascinating how the path we choose changes our distance, but our starting and ending points define our displacement? What do you think Sneha did next?"
  },
  {
    triggers: ["simplify", "14", "simple"],
    response: "Let's simplify this! 💡\n\nThink of it this way:\n\n* **Distance** is just 'how much ground you covered'. If you walk around your room 10 times, your legs are tired because you walked a long distance.\n* **Displacement** is 'how far out of place you are'. If you end up back in your bed where you started, your displacement is zero. You didn't actually go anywhere in the grand scheme of things!\n\nAnd for **Speed** vs **Velocity**:\n* **Speed** is just your speedometer reading (e.g. 50 km/h).\n* **Velocity** is that reading PLUS where you are going (e.g. 50 km/h *North*).\n\nIf you change direction, your speed stays the same, but your velocity changes. That change in velocity is what we call **Acceleration**.\n\nDoes this feel simpler? Which of these parts would you like me to unpack further?"
  },
  {
    triggers: ["visual", "diagram", "draw"],
    response: "Let's explain this visually! 🎨\n\nImagine a large map on your table:\n\n```\n   [Start: Home] ──────────────────────────► [End: School]\n         │              Displacement              ▲\n         │               (5 km East)              │\n         │                                        │\n         └──────► [Market] ──────► [Friend's] ────┘\n                      Distance (12 km total)\n```\n\n1. **The Straight Arrow**: Represents **Displacement**. It points directly from Home to School. It is short, straight, and has a clear direction (5 km East).\n2. **The Winding Path**: Represents **Distance**. You went to the Market, then your Friend's house, and then to School. You traveled 12 km in total.\n\nSee how the arrow is a shortcut? That shortcut is what scientists call the displacement vector. \n\nCan you visualize this map? Let me know if you want me to describe another diagram!"
  },
  {
    triggers: ["animation", "🎬"],
    response: "Here is an interactive animation idea to help you study! 🎬\n\n**Scene: The Runaway Dog**\n\n* **Stage 1**: A screen showing a grid. A cute dog named Rocky is at $(x=0, y=0)$ next to his doghouse.\n* **Stage 2**: Rocky runs 4 blocks right to catch a butterfly, then 3 blocks up to bark at a squirrel. A line tracing his path shows: **Distance = 7 units**.\n* **Stage 3**: A glowing dotted line appears from the doghouse directly to Rocky. An arrow pops up showing: **Displacement = 5 units** (using Pythagoras theorem: $4^2 + 3^2 = 25$).\n* **Stage 4**: Rocky hears his owner whistle and runs all the way back to his doghouse. The path counter climbs to **14 units (Distance)**, but the glowing displacement arrow shrinks back to **0 units (Displacement)**!\n\nThis makes it super clear that distance only goes up, but displacement resets when you go home.\n\nWould you like to try designing a simulation for acceleration next?"
  },
  {
    triggers: ["quiz", "question", "test"],
    response: "Alright, time for a quick conceptual puzzle! ❓\n\nAn athlete runs exactly one full lap around a standard circular track of diameter 100 meters. \n\n1. What is the total **distance** they ran?\n2. What is their net **displacement**?\n\nTake your time to think, and type your answer! Don't worry about getting it wrong—I'm here to help."
  },
  {
    triggers: ["mistake", "exam", "pitfall"],
    response: "Here are the top exam traps for CBSE Class 9 Motion! ⚠️\n\n1. **Trap 1: Units!** \n   * *Mistake*: Writing speed in $m/s^2$ or acceleration in $m/s$. \n   * *Fix*: Always write: Speed/Velocity = $m/s$, Acceleration = $m/s^2$.\n\n2. **Trap 2: Forgetting Direction in Displacement!**\n   * *Mistake*: Writing displacement as '10 meters'. \n   * *Fix*: Displacement is a vector. Write '10 meters towards East' or '10 meters in the direction of motion'.\n\n3. **Trap 3: Retardation signs!**\n   * *Mistake*: Writing acceleration as $-3 \\text{ m/s}^2$ and then stating 'Retardation is $-3 \\text{ m/s}^2$'. \n   * *Fix*: Retardation itself means deceleration. Write 'Acceleration is $-3 \\text{ m/s}^2$' OR 'Retardation is $3 \\text{ m/s}^2$. Do not double-negative!\n\nKeep these in mind for your class tests! Which of these equations of motion do you find hardest to apply?"
  },
  {
    triggers: ["compare", "difference", "versus"],
    response: "Here is a comparison table to help you memorize! ⚖️\n\n| Feature | Distance | Displacement |\n| :--- | :--- | :--- |\n| **Definition** | Total length of path covered | Shortest straight-line path |\n| **Quantity** | Scalar (Magnitude only) | Vector (Magnitude + Direction) |\n| **Sign** | Always positive | Can be positive, negative, or zero |\n| **Formula** | Speed $\\times$ Time | Velocity $\\times$ Time |\n| **Odometer** | Measured directly | Not measured by car odometer |\n\nSave this in your revision notes! Would you like a similar comparison for speed vs velocity?"
  }
];

export async function sendChatMessageStream(
  history: ChatMessage[],
  presetPrompt?: string,
  callbacks?: StreamCallbacks
): Promise<void> {
  const isGitHubPages = typeof window !== "undefined" && window.location.hostname.includes("github.io");

  // If on GitHub Pages, skip fetching API directly to avoid 404 network errors in console
  if (isGitHubPages) {
    runClientMockTutor(history, presetPrompt, callbacks);
    return;
  }

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        history,
        presetPrompt
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.body) {
      throw new Error("No response body received from chat endpoint.");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullText = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      fullText += chunk;
      if (callbacks?.onChunk) {
        callbacks.onChunk(chunk);
      }
    }

    if (callbacks?.onDone) {
      callbacks.onDone(fullText);
    }
  } catch (error) {
    console.warn("API stream failed, falling back to client-side mock tutor:", error);
    runClientMockTutor(history, presetPrompt, callbacks);
  }
}

async function runClientMockTutor(
  history: ChatMessage[],
  presetPrompt?: string,
  callbacks?: StreamCallbacks
): Promise<void> {
  try {
    const lastUserMessage = history
      .filter((m) => m.role === "user")
      .pop()?.content.toLowerCase() || "";

    let matchingResponse = "";

    // Check presets first
    if (presetPrompt) {
      const presetLower = presetPrompt.toLowerCase();
      const match = MOCK_ANSWERS.find((ans) =>
        ans.triggers.some((t) => presetLower.includes(t))
      );
      if (match) matchingResponse = match.response;
    }

    // If no preset match, check last user message content
    if (!matchingResponse) {
      const match = MOCK_ANSWERS.find((ans) =>
        ans.triggers.some((t) => lastUserMessage.includes(t))
      );
      if (match) {
        matchingResponse = match.response;
      } else {
        matchingResponse = `Hey there! I am your AI Study Buddy. 🌟\n\nYou asked: "${lastUserMessage}"\n\nSince this is running in client-side static mode, I can tell you that in Chapter 8 (Motion), the most important concept is that motion is always relative to a reference point. For example, if you are sitting inside a moving train, you are at rest relative to your fellow passengers, but in motion relative to the trees outside!\n\nTo see my full live AI capability, please add a \`GEMINI_API_KEY\` to your \`.env.local\` file! In the meantime, try clicking some of my preset buttons like **Cricket Analogy** 🏏 or **Story Mode** 📖 to see some cool examples!`;
      }
    }

    // Simulate streaming
    const words = matchingResponse.split(" ");
    let fullText = "";
    for (let i = 0; i < words.length; i++) {
      const chunk = words[i] + " ";
      fullText += chunk;
      if (callbacks?.onChunk) {
        callbacks.onChunk(chunk);
      }
      await new Promise((r) => setTimeout(r, 40)); // ~40ms per word
    }

    if (callbacks?.onDone) {
      callbacks.onDone(fullText);
    }
  } catch (err) {
    if (callbacks?.onError) {
      callbacks.onError(err);
    }
  }
}
