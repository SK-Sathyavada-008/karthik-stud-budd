import { NextRequest } from "next/server";
// Route is dynamically called at runtime

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = "gemini-1.5-flash";

export async function POST(req: NextRequest) {
  try {
    if (!GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY is not configured on this server." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { subjectId, chapterId, chapterName } = await req.json();

    if (!subjectId || !chapterId || !chapterName) {
      return new Response(JSON.stringify({ error: "Missing required parameters: subjectId, chapterId, chapterName" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const systemPrompt = `You are an expert CBSE/NCERT Class 9 private tutor. Your goal is to generate a comprehensive, highly engaging, and pedagogically rich chapter study plan/lessons data for a Class 9 CBSE student in strict JSON format.
    
    The generated content must align with the latest 2026/2027 NCERT syllabus.
    Keep the tone friendly, encouraging, and age-appropriate (14 years old).
    Use mathematical equations formatted in KaTeX if needed (enclosed in single dollar signs like $v = u + at$ inside texts, except in formulas.equation).

    Return ONLY a single valid JSON object following this exact interface structure:
    {
      "chapterInfo": {
        "classLevel": "Class 9",
        "subjectName": "${subjectId}",
        "chapterNumber": 1, 
        "chapterName": "${chapterName}",
        "ncertRef": "NCERT Class 9 ${subjectId} Textbook, Latest 2026 Edition",
        "estimatedTime": "3.5 hours",
        "difficulty": "Medium"
      },
      "learningObjectives": [
        "Objective 1 explaining what the student will learn",
        "Objective 2",
        "Objective 3"
      ],
      "warmup": {
        "question": "An engaging, friendly real-world scenario/warmup question that hooks the student",
        "interestFact": "A fascinating real-life fact relating to the chapter topic to wow the student",
        "hint": "A subtle hint to help them think about the warmup question"
      },
      "concepts": [
        {
          "id": "concept-1-id",
          "name": "Concept 1 Name: Catchy Title",
          "definition": "Simple, friendly definition explaining it as if they are 14 years old.",
          "ncertDefinition": "The formal definition as written in the NCERT Class 9 textbooks.",
          "examDefinition": {
            "text": "How they should write this definition in examinations to score full marks.",
            "keywords": ["keyword1", "keyword2", "keyword3"],
            "highlightPoints": ["Highlight point 1", "Highlight point 2"]
          },
          "realLifeExample": "An engaging real-world application of this concept in day-to-day life.",
          "analogy": "A fun and simple analogy (like comparing cell membrane to a security guard, or programming to recipes) to help them visualize.",
          "visualExplanation": "Describe a simple, easy-to-draw diagram or layout illustrating this concept.",
          "interestingFact": "Fascinating fact about this concept.",
          "memoryTrick": "A memory trick, acronym, or visualization tip.",
          "commonMistakes": "Typical exam mistakes students make and how to avoid them.",
          "miniRecap": "A single line summary/recap of the concept.",
          "mnemonic": "An optional mnemonic phrase or keyword (e.g. PMAT for cell division stages)"
        },
        {
          "id": "concept-2-id",
          "name": "Concept 2 Name",
          "definition": "...",
          "ncertDefinition": "...",
          "examDefinition": { "text": "...", "keywords": [], "highlightPoints": [] },
          "realLifeExample": "...",
          "analogy": "...",
          "visualExplanation": "...",
          "interestingFact": "...",
          "memoryTrick": "...",
          "commonMistakes": "...",
          "miniRecap": "..."
        }
      ],
      "solvedExamples": [
        {
          "id": "ex-1",
          "question": "A conceptual or numerical problem relevant to the chapter.",
          "thinkingProcess": "Explain what formulas or approach to select first and why.",
          "solutionSteps": [
            "Step 1: Write down the given variables...",
            "Step 2: Apply the formula $equation$...",
            "Step 3: Solve mathematically..."
          ],
          "finalAnswer": "The final numerical or conceptual answer with units.",
          "examTips": "Examiner tip on steps representation or common unit pitfalls."
        },
        {
          "id": "ex-2",
          "question": "...",
          "thinkingProcess": "...",
          "solutionSteps": [],
          "finalAnswer": "...",
          "examTips": "..."
        }
      ],
      "practiceQuestions": [
        {
          "id": "pq-1",
          "difficulty": "Medium",
          "question": "A practice question for the student to solve.",
          "suggestedAnswer": "A complete, correct suggested response for self-assessment."
        },
        {
          "id": "pq-2",
          "difficulty": "Hard",
          "question": "...",
          "suggestedAnswer": "..."
        },
        {
          "id": "pq-3",
          "difficulty": "Challenge",
          "question": "...",
          "suggestedAnswer": "..."
        }
      ],
      "mcqs": [
        {
          "id": "mcq-1",
          "question": "Multiple choice question?",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correctIndex": 0,
          "explanation": "Why Option A is correct and why other options are incorrect."
        },
        {
          "id": "mcq-2",
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correctIndex": 1,
          "explanation": "..."
        },
        {
          "id": "mcq-3",
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correctIndex": 2,
          "explanation": "..."
        },
        {
          "id": "mcq-4",
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correctIndex": 3,
          "explanation": "..."
        },
        {
          "id": "mcq-5",
          "question": "...",
          "options": ["A", "B", "C", "D"],
          "correctIndex": 0,
          "explanation": "..."
        }
      ],
      "assertionReasons": [
        {
          "id": "ar-1",
          "assertion": "The statement (Assertion).",
          "reason": "The explanation statement (Reason).",
          "correctOption": "A", 
          "explanation": "Explain why both are true and Reason is correct, or correct option letter details."
        },
        {
          "id": "ar-2",
          "assertion": "...",
          "reason": "...",
          "correctOption": "B",
          "explanation": "..."
        },
        {
          "id": "ar-3",
          "assertion": "...",
          "reason": "...",
          "correctOption": "C",
          "explanation": "..."
        }
      ],
      "caseStudy": {
        "id": "cs-1",
        "passage": "A descriptive, real-world case study passage or paragraph (100-150 words) relevant to this chapter.",
        "questions": [
          {
            "question": "Question 1 based on the passage?",
            "options": ["A", "B", "C", "D"],
            "correctIndex": 0,
            "explanation": "Detail verification..."
          },
          {
            "question": "Question 2 based on the passage?",
            "options": ["A", "B", "C", "D"],
            "correctIndex": 1,
            "explanation": "..."
          }
        ]
      },
      "hotsQuestions": [
        {
          "id": "hots-1",
          "question": "High Order Thinking Skill question requiring analytical reasoning.",
          "thinkingProcess": "Analytical thinking breakdown...",
          "answer": "Complete conceptual explanation."
        },
        {
          "id": "hots-2",
          "question": "...",
          "thinkingProcess": "...",
          "answer": "..."
        }
      ],
      "pyqs": [
        {
          "id": "pyq-1",
          "year": 2024,
          "marks": 3,
          "question": "Previous Year Board / School Question?",
          "answer": "Standard model solution.",
          "examinerComments": "Common points where students lost marks in this exact question."
        },
        {
          "id": "pyq-2",
          "year": 2023,
          "marks": 5,
          "question": "...",
          "answer": "...",
          "examinerComments": "..."
        }
      ],
      "diagramPractices": [],
      "formulas": [
        {
          "name": "Formula Name",
          "equation": "v = u + at", 
          "variables": [
            { "symbol": "v", "meaning": "Final velocity" },
            { "symbol": "u", "meaning": "Initial velocity" }
          ],
          "context": "When to apply this formula."
        }
      ],
      "revisionPoints": [
        "Point 1 summarizing core lesson takeaways.",
        "Point 2",
        "Point 3",
        "Point 4",
        "Point 5"
      ],
      "summaryPoints": [
        "Revision point 1", "Revision point 2", "Revision point 3", "Revision point 4", "Revision point 5",
        "Revision point 6", "Revision point 7", "Revision point 8", "Revision point 9", "Revision point 10"
      ],
      "mindMap": {
        "id": "root-${chapterId}",
        "label": "${chapterName}",
        "type": "root",
        "description": "Comprehensive mapping of ${chapterName}",
        "children": [
          {
            "id": "mm-basics",
            "label": "Core Foundations",
            "type": "main",
            "description": "Fundamental terms and baseline setups.",
            "children": [
              {
                "id": "mm-basic-sub1",
                "label": "Sub-concept",
                "type": "sub",
                "description": "Details about this sub-concept.",
                "children": [
                  {
                    "id": "mm-basic-sub1-detail",
                    "label": "Key terms",
                    "type": "detail",
                    "description": "Granular details and definitions."
                  }
                ]
              }
            ]
          }
        ]
      },
      "flashcards": [
        {
          "id": "fc-1",
          "chapterId": "${chapterId}",
          "question": "Simple conceptual revision question?",
          "answer": "Simple quick answer.",
          "box": 1,
          "nextReviewAt": "${new Date().toISOString()}"
        },
        {
          "id": "fc-2",
          "chapterId": "${chapterId}",
          "question": "...",
          "answer": "...",
          "box": 1,
          "nextReviewAt": "${new Date().toISOString()}"
        },
        {
          "id": "fc-3",
          "chapterId": "${chapterId}",
          "question": "...",
          "answer": "...",
          "box": 1,
          "nextReviewAt": "${new Date().toISOString()}"
        },
        {
          "id": "fc-4",
          "chapterId": "${chapterId}",
          "question": "...",
          "answer": "...",
          "box": 1,
          "nextReviewAt": "${new Date().toISOString()}"
        },
        {
          "id": "fc-5",
          "chapterId": "${chapterId}",
          "question": "...",
          "answer": "...",
          "box": 1,
          "nextReviewAt": "${new Date().toISOString()}"
        }
      ]
    }`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `Generate study guide data for subjectId: "${subjectId}", chapterId: "${chapterId}", chapterName: "${chapterName}".` }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini Lesson Generator API Error:", errorText);
      return new Response(JSON.stringify({ error: `Gemini API returned error: ${response.statusText}` }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    const result = await response.json();
    const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return new Response(JSON.stringify({ error: "Gemini returned an empty response." }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Try parsing generated content to verify it's valid JSON
    const lessonData = JSON.parse(generatedText);

    return new Response(JSON.stringify(lessonData), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    console.error("API Lesson Generator error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
