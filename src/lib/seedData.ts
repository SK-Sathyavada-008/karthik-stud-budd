import { Subject, Chapter, Concept, SolvedExample, PracticeQuestion, MCQQuestion, AssertionReasonQuestion, CaseStudyQuestion, HOTSQuestion, PYQQuestion, DiagramPractice, Formula, MindMapNode, Flashcard } from "./types";

export const MOCK_SUBJECTS: Subject[] = [
  { id: "physics", classId: "class-9", name: "Physics", code: "PHY-9", colorTheme: "purple", iconName: "zap", totalChapters: 4, completedChapters: 1, estimatedHours: 15 },
  { id: "chemistry", classId: "class-9", name: "Chemistry", code: "CHEM-9", colorTheme: "blue", iconName: "droplet", totalChapters: 4, completedChapters: 0, estimatedHours: 18 },
  { id: "biology", classId: "class-9", name: "Biology", code: "BIO-9", colorTheme: "green", iconName: "activity", totalChapters: 4, completedChapters: 0, estimatedHours: 14 },
  { id: "math", classId: "class-9", name: "Math", code: "MATH-9", colorTheme: "orange", iconName: "plus-circle", totalChapters: 15, completedChapters: 0, estimatedHours: 40 },
  { id: "history", classId: "class-9", name: "History", code: "HIST-9", colorTheme: "amber", iconName: "book-open", totalChapters: 5, completedChapters: 0, estimatedHours: 16 },
  { id: "geography", classId: "class-9", name: "Geography", code: "GEOG-9", colorTheme: "emerald", iconName: "globe", totalChapters: 6, completedChapters: 0, estimatedHours: 15 },
  { id: "civics", classId: "class-9", name: "Political Science", code: "CIV-9", colorTheme: "sky", iconName: "users", totalChapters: 5, completedChapters: 0, estimatedHours: 12 },
  { id: "economics", classId: "class-9", name: "Economics", code: "ECON-9", colorTheme: "rose", iconName: "trending-up", totalChapters: 4, completedChapters: 0, estimatedHours: 10 },
  { id: "english", classId: "class-9", name: "English", code: "ENG-9", colorTheme: "violet", iconName: "feather", totalChapters: 12, completedChapters: 0, estimatedHours: 20 },
  { id: "it-402", classId: "class-9", name: "IT - 402", code: "IT-402", colorTheme: "indigo", iconName: "cpu", totalChapters: 8, completedChapters: 0, estimatedHours: 15 }
];

export const MOCK_CHAPTERS: Record<string, Chapter[]> = {
  physics: [
    { id: "motion", subjectId: "physics", chapterNumber: 8, name: "Motion", estimatedTime: "4.5 hours", difficulty: "Medium", description: "Learn about displacement, velocity, acceleration, and the three equations of motion using real-life examples and graphs." },
    { id: "force", subjectId: "physics", chapterNumber: 9, name: "Force and Laws of Motion", estimatedTime: "5 hours", difficulty: "Hard", description: "Understand balanced and unbalanced forces, Newton's three laws of motion, and inertia." },
    { id: "gravitation", subjectId: "physics", chapterNumber: 10, name: "Gravitation", estimatedTime: "4 hours", difficulty: "Medium", description: "Explore the universal law of gravitation, free fall, acceleration due to gravity, thrust, pressure, and Archimedes' principle." },
    { id: "work", subjectId: "physics", chapterNumber: 11, name: "Work and Energy", estimatedTime: "4 hours", difficulty: "Medium", description: "Learn the scientific definition of work, kinetic and potential energy, and the law of conservation of energy." }
  ]
};

export interface ChapterLessonData {
  chapterInfo: {
    classLevel: string;
    subjectName: string;
    chapterNumber: number;
    chapterName: string;
    ncertRef: string;
    estimatedTime: string;
    difficulty: string;
  };
  learningObjectives: string[];
  warmup: {
    question: string;
    interestFact: string;
    hint: string;
  };
  concepts: Concept[];
  solvedExamples: SolvedExample[];
  practiceQuestions: PracticeQuestion[];
  mcqs: MCQQuestion[];
  assertionReasons: AssertionReasonQuestion[];
  caseStudy: CaseStudyQuestion;
  hotsQuestions: HOTSQuestion[];
  pyqs: PYQQuestion[];
  diagramPractices: DiagramPractice[];
  formulas: Formula[];
  revisionPoints: string[];
  summaryPoints: string[];
  mindMap: MindMapNode;
  flashcards: Flashcard[];
}

export const MOCK_LESSON_DATA: Record<string, ChapterLessonData> = {
  motion: {
    chapterInfo: {
      classLevel: "Class 9",
      subjectName: "Physics",
      chapterNumber: 8,
      chapterName: "Motion",
      ncertRef: "NCERT Class 9 Science Textbook, Chapter 8 (Latest 2026 Edition)",
      estimatedTime: "4.5 hours",
      difficulty: "Medium"
    },
    learningObjectives: [
      "Differentiate between scalar and vector quantities",
      "Understand the difference between distance and displacement",
      "Calculate speed, velocity, and average speed",
      "Master the concept of acceleration (both uniform and non-uniform)",
      "Derive and apply the three equations of motion mathematically"
    ],
    warmup: {
      question: "Imagine you ride your bicycle to school which is 2 km away, but on your way back, you realize you forgot your book and turn around to fetch it, finally returning home. How much distance did you travel, and what is your net displacement from home?",
      interestFact: "The fastest land animal, the cheetah, can accelerate from 0 to 100 km/h in just 3 seconds, which is faster than most sports cars! This change in velocity is a prime example of acceleration.",
      hint: "Remember: Distance is the total path length, while Displacement is the shortest straight line between your starting point and your ending point."
    },
    concepts: [
      {
        id: "dist-disp",
        name: "Describing Motion: Distance vs Displacement",
        definition: "Motion is a change of position of an object over time with respect to a reference point. The total path length covered is the distance, whereas the shortest path from start to end is the displacement.",
        ncertDefinition: "The distance travelled by an object is the length of the actual path traversed by the object during motion. The shortest distance measured from the initial position to the final position of an object is known as the displacement.",
        examDefinition: {
          text: "When writing in exams, define distance as 'the total path length traversed by an object irrespective of direction.' Define displacement as 'the vector quantity representing the shortest straight-line distance from the initial position to the final position of the object.' Always specify that the SI unit for both is the meter (m).",
          keywords: ["total path length", "shortest straight-line distance", "initial position", "final position", "SI unit: meter (m)"],
          highlightPoints: ["Distance is scalar, displacement is vector.", "Displacement can be zero even if distance is non-zero."]
        },
        realLifeExample: "If you walk 4 meters North and then 3 meters East, your total path (distance) is 7 meters, but your displacement is 5 meters along the diagonal (North-East) path.",
        analogy: "Think of distance as the odometer in a car (it counts every step you take, no matter which way you turn) and displacement as a GPS arrow pointing straight from your home to your destination 'as the crow flies'.",
        visualExplanation: "A diagram showing a curved path A to B representing 'distance', and a dotted straight arrow directly connecting A to B representing 'displacement' with the diagonal value of 5m highlighted.",
        interestingFact: "An astronaut orbiting Earth in the International Space Station travels a distance of about 40,000 km in 90 minutes, but their displacement after one full orbit is exactly zero!",
        memoryTrick: "Distance has no direction (Scalar) -> 'D' and 'S'. Displacement has Direction (Vector) -> 'D' and 'V'. Also, DisPLACEment is about how much you are out of PLACE.",
        commonMistakes: "Students often forget that displacement must include a direction (e.g. '5m North-East', not just '5m') and that displacement can be zero (like moving in a complete circle).",
        miniRecap: "Distance = actual route length (scalar). Displacement = straight-line shortcut with direction (vector).",
        mnemonic: "Scalars have Size only. Vectors have Velocity, direction, and Size!"
      },
      {
        id: "speed-vel",
        name: "Speed vs Velocity: The Rate of Motion",
        definition: "Speed is the rate at which distance is covered, whereas Velocity is the rate of displacement in a specific direction.",
        ncertDefinition: "Speed of an object is the distance travelled by it per unit time. Velocity is the speed of an object moving in a definite direction. The velocity of an object can be uniform or variable.",
        examDefinition: {
          text: "State that Speed is a scalar quantity defined as $v = s/t$. Velocity is a vector quantity defined as displacement divided by time: $\\vec{v} = \\vec{s}/t$. If an object's velocity is changing at a uniform rate, average velocity is given by $V_{avg} = (u + v)/2$ where $u$ is initial velocity and $v$ is final velocity.",
          keywords: ["distance per unit time", "speed in a definite direction", "scalar versus vector", "average velocity: (u + v) / 2"],
          highlightPoints: ["SI Unit for both: m/s (or $m s^{-1}$).", "Average velocity formula."]
        },
        realLifeExample: "A car moving at 60 km/h on a circular test track has a constant speed of 60 km/h, but its velocity is constantly changing because its direction of travel changes at every single point.",
        analogy: "Speed is like how fast a fan spins. Velocity is like a wind blowing from the North at 20 km/h. The wind has a target direction; the spinning fan just has a rate.",
        visualExplanation: "A circular path with arrows pointing tangentially at different points representing velocity vectors changing directions while speed values remain 60 km/h.",
        interestingFact: "Light travels at a constant velocity of $3 \\times 10^8 \\text{ m/s}$ in vacuum. That means it could circle the Earth 7.5 times in one single second!",
        memoryTrick: "Speed starts with 'S' -> Scalar. Velocity starts with 'V' -> Vector. Simple as that!",
        commonMistakes: "Using distance instead of displacement when calculating velocity, and failing to convert units (e.g. converting km/h to m/s by multiplying by $5/18$).",
        miniRecap: "Speed is scalar (how fast). Velocity is vector (how fast in what direction). Convert km/h to m/s using $\\times 5/18$."
      },
      {
        id: "acceleration",
        name: "Acceleration: Speeding Up or Slowing Down",
        definition: "Acceleration is the measure of the change in velocity of an object per unit time.",
        ncertDefinition: "Acceleration is a measure of the change in the velocity of an object per unit time. That is, $\\text{Acceleration} = \\frac{\\text{Change in velocity}}{\\text{Time taken}}$ or $a = \\frac{v - u}{t}$.",
        examDefinition: {
          text: "Define acceleration as $a = (v - u)/t$ where $v$ is final velocity, $u$ is initial velocity, and $t$ is time taken. The SI unit is $m/s^2$ or $m s^{-2}$. Clarify that if the velocity decreases, the acceleration is negative and is called deceleration or retardation.",
          keywords: ["rate of change of velocity", "SI unit: m/s^2", "retardation / negative acceleration", "u: initial velocity, v: final velocity"],
          highlightPoints: ["Acceleration is a vector quantity.", "Retardation is just negative acceleration (pointing opposite to motion)."]
        },
        realLifeExample: "When a train starts from a railway station, its velocity increases from 0, so it has positive acceleration. When it approaches a station and brakes are applied, its velocity decreases, so it has retardation (negative acceleration).",
        analogy: "Think of acceleration as the 'booster button' in a racing video game. When you press it, your speedometer needle climbs. If you slam on the brakes, you undergo negative acceleration.",
        visualExplanation: "A linear graph of Velocity vs Time where a straight diagonal line going up represents positive acceleration, a horizontal line represents constant velocity (zero acceleration), and a line sloping down represents negative acceleration.",
        interestingFact: "When you fall freely under gravity on Earth, you accelerate downwards at approximately $9.8 \\text{ m/s}^2$. This means every second you fall, your speed increases by about 9.8 meters per second (approx 35 km/h)!",
        memoryTrick: "Imagine a car accelerator pedal. It is literally called the 'accelerator' because pressing it changes your velocity!",
        commonMistakes: "Confusing velocity with acceleration. A body can have zero velocity but non-zero acceleration (e.g., at the highest point of a ball thrown vertically upwards). Also, getting the unit wrong (writing m/s instead of $m/s^2$).",
        miniRecap: "Acceleration $a = (v - u)/t$. SI unit is $m/s^2$. Negative acceleration is retardation.",
        mnemonic: "VUT: Velocity final, Initial velocity (U), and Time. Acceleration puts them all together!"
      },
      {
        id: "eq-motion",
        name: "The Equations of Motion",
        definition: "The three mathematical formulas that describe the relationship between displacement, velocity, acceleration, and time for an object moving with uniform acceleration along a straight line.",
        ncertDefinition: "For an object moving with a uniform acceleration along a straight line, we can relate its velocity, acceleration, and distance covered in a certain time interval by a set of equations known as the equations of motion.",
        examDefinition: {
          text: "In exams, list the three equations of motion exactly:\n1. First Equation (Velocity-Time Relation): $v = u + at$\n2. Second Equation (Position-Time Relation): $s = ut + \\frac{1}{2}at^2$\n3. Third Equation (Position-Velocity Relation): $v^2 = u^2 + 2as$\nWhere $u$ = initial velocity, $v$ = final velocity, $a$ = uniform acceleration, $t$ = time, and $s$ = distance/displacement covered.",
          keywords: ["uniform acceleration", "v = u + at", "s = ut + 1/2 at^2", "v^2 = u^2 + 2as"],
          highlightPoints: ["These equations are valid ONLY for uniform (constant) acceleration.", "Sign conventions must be followed ($u$ and $v$ are positive in direction of motion, $a$ is negative for brakes)."]
        },
        realLifeExample: "Engineers design highway exit ramps by using the third equation of motion ($v^2 = u^2 + 2as$) to calculate how long the lane needs to be ($s$) so that cars coming at 100 km/h ($u$) can safely slow down to a stop ($v=0$) with comfortable braking deceleration ($a$).",
        analogy: "Think of these equations as a tool belt. Depending on what information is given in a physics problem (what's in your hand) and what is missing, you pick the exact tool (formula) that fits.",
        visualExplanation: "A diagram summarizing the variables ($u, v, a, t, s$) and showing which variables are present in each equation to help students choose the right formula.",
        interestingFact: "Galileo Galilei formulated the basis of these equations in the 17th century by rolling bronze balls down inclined wooden planes and measuring the time with a water clock!",
        memoryTrick: "Equation 1 has no '$s$' (displacement). Equation 2 has no '$v$' (final velocity). Equation 3 has no '$t$' (time). Match what you don't have to the equation that doesn't need it!",
        commonMistakes: "Applying these equations when the acceleration is variable (not constant), forgetting to square the $t$ in $\\frac{1}{2}at^2$, or putting the wrong sign for retardation.",
        miniRecap: "1) $v = u + at$; 2) $s = ut + \\frac{1}{2}at^2$; 3) $v^2 = u^2 + 2as$. Use sign conventions carefully.",
        mnemonic: "V-U-A-T (Velocity, U-initial, Acceleration, Time) makes up the first. S-U-T-A-T makes up the second. V-U-A-S makes up the third!"
      }
    ],
    solvedExamples: [
      {
        id: "ex-1",
        question: "A car starts from rest and attains a velocity of 72 km/h in 5 minutes. Assuming that the acceleration is uniform, find: (i) the acceleration, and (ii) the distance travelled by the car for attaining this velocity.",
        thinkingProcess: "First, list down the given variables and convert them to SI units (m, s, m/s). 'Starts from rest' means initial velocity $u = 0$. Final velocity $v = 72 \\text{ km/h} = 72 \\times (5/18) = 20 \\text{ m/s}$. Time $t = 5 \\text{ minutes} = 5 \\times 60 = 300 \\text{ seconds}$. We need to find $a$ and $s$.",
        solutionSteps: [
          "Convert final velocity: $v = 72 \\text{ km/h} = 72 \\times \\frac{5}{18} = 20 \\text{ m/s}$.",
          "Convert time: $t = 5 \\text{ min} = 5 \\times 60 = 300 \\text{ s}$.",
          "For (i) acceleration: Using the first equation of motion, $v = u + at \\implies a = \\frac{v - u}{t} = \\frac{20 - 0}{300} = \\frac{1}{15} \\text{ m/s}^2 \\approx 0.067 \\text{ m/s}^2$.",
          "For (ii) distance: Using the second equation of motion, $s = ut + \\frac{1}{2}at^2 \\implies s = 0 \\times 300 + \\frac{1}{2} \\times \\frac{1}{15} \\times (300)^2 = \\frac{1}{30} \\times 90000 = 3000 \\text{ m} = 3 \\text{ km}$. Alternatively, use $v^2 = u^2 + 2as \\implies (20)^2 = 0 + 2 \\times \\frac{1}{15} \\times s \\implies 400 = \\frac{2}{15}s \\implies s = \\frac{400 \\times 15}{2} = 3000 \\text{ m}$."
        ],
        finalAnswer: "(i) Acceleration $a = \\frac{1}{15} \\text{ m/s}^2$ (or $0.067 \\text{ m/s}^2$)\n(ii) Distance travelled $s = 3000 \\text{ m}$ (or $3 \\text{ km}$)",
        examTips: "Always write the formula first. Keep unit conversions in the top margin of your answer sheet so the examiner sees your steps clearly. Write the final answer with proper SI units."
      },
      {
        id: "ex-2",
        question: "A bicycle traveling at 12 m/s comes to a stop in 4 seconds when the rider applies brakes. Calculate the deceleration (retardation) and the distance traveled after the brakes are applied.",
        thinkingProcess: "Given: initial velocity $u = 12 \\text{ m/s}$, final velocity $v = 0$ (comes to a stop), and time $t = 4 \\text{ s}$. We need to find the acceleration $a$ (which should be negative because it's stopping) and distance $s$.",
        solutionSteps: [
          "List known variables: $u = 12 \\text{ m/s}$, $v = 0$, $t = 4 \\text{ s}$.",
          "Find acceleration: $a = \\frac{v - u}{t} = \\frac{0 - 12}{4} = -3 \\text{ m/s}^2$. Since acceleration is negative, the retardation is $+3 \\text{ m/s}^2$.",
          "Find distance: $s = ut + \\frac{1}{2}at^2 = 12 \\times 4 + \\frac{1}{2} \\times (-3) \\times 4^2 = 48 + \\frac{1}{2} \\times (-3) \\times 16 = 48 - 24 = 24 \\text{ m}$."
        ],
        finalAnswer: "Retardation = $3 \\text{ m/s}^2$\nDistance traveled = $24 \\text{ meters}$",
        examTips: "Retardation is the MAGNITUDE of negative acceleration. If the question asks for deceleration/retardation, state it as a positive value (e.g. $3 \\text{ m/s}^2$), but keep it negative ($a = -3$) in your formulas."
      }
    ],
    practiceQuestions: [
      { id: "pq-1", difficulty: "Easy", question: "Under what condition is the magnitude of average velocity of an object equal to its average speed?", suggestedAnswer: "The magnitude of average velocity of an object is equal to its average speed only when the object moves along a straight line in a single direction without turning back. In this case, the total distance traveled equals the magnitude of net displacement." },
      { id: "pq-2", difficulty: "Medium", question: "What does the odometer of an automobile measure? Does it measure distance or displacement?", suggestedAnswer: "The odometer of an automobile measures the total distance traveled by the vehicle along its path. It does not measure displacement, as it accumulates all paths taken regardless of directions." },
      { id: "pq-3", difficulty: "Hard", question: "A ball is thrown vertically upwards with a velocity of 20 m/s. Calculate the maximum height it reaches and the total time taken to return to the ground. (Take $g = 10 \\text{ m/s}^2$)", suggestedAnswer: "Given: $u = 20 \\text{ m/s}$, at maximum height final velocity $v = 0$. Since it is moving upwards against gravity, acceleration $a = -g = -10 \\text{ m/s}^2$.\nUsing $v^2 = u^2 + 2as \\implies 0^2 = 20^2 + 2(-10)s \\implies 0 = 400 - 20s \\implies 20s = 400 \\implies s = 20 \\text{ m}$. So max height is 20 meters.\nTo find time to reach max height: $v = u + at \\implies 0 = 20 - 10t \\implies 10t = 20 \\implies t = 2 \\text{ s}$.\nSince time of ascent equals time of descent in a vacuum, the total time taken to return to the ground is $2t = 2 \\times 2 = 4 \\text{ seconds}$." },
      { id: "pq-4", difficulty: "Challenge", question: "A body covers the first half of a total distance with speed $v_1$ and the second half with speed $v_2$. Derive the formula for the average speed of the body for the entire journey.", suggestedAnswer: "Let the total distance be $2S$. The first half is $S$, covered with speed $v_1$. The second half is $S$, covered with speed $v_2$.\nTime for first half: $t_1 = S/v_1$. Time for second half: $t_2 = S/v_2$.\nTotal time $T = t_1 + t_2 = S/v_1 + S/v_2 = S(\\frac{v_1 + v_2}{v_1 v_2})$.\nAverage Speed = $\\frac{\\text{Total Distance}}{\\text{Total Time}} = \\frac{2S}{S(\\frac{v_1 + v_2}{v_1 v_2})} = \\frac{2 v_1 v_2}{v_1 + v_2}$.\nThis is the harmonic mean of the individual speeds." }
    ],
    mcqs: [
      { id: "mcq-1", question: "Which of the following is a vector quantity?", options: ["Distance", "Speed", "Displacement", "Time"], correctIndex: 2, explanation: "Displacement is a vector quantity because it requires both magnitude and direction to be completely specified. Distance, speed, and time are scalar quantities." },
      { id: "mcq-2", question: "If an object travels in a circle of radius R, what is its displacement after completing half a revolution?", options: ["0", "$\u03C0R$", "$2R$", "$2\u03C0R$"], correctIndex: 2, explanation: "After completing half a revolution, the object is at the opposite point of the diameter. The shortest distance between the initial and final position is the diameter, which is $2R$." },
      { id: "mcq-3", question: "A particle is moving in a circular path of radius r. The displacement after a full circle would be:", options: ["Zero", "$\u03C0r$", "$2r$", "$2\u03C0r$"], correctIndex: 0, explanation: "Since the starting and ending points are identical after a full circle, the straight-line distance between them is zero. Therefore, the displacement is zero." },
      { id: "mcq-4", question: "The numerical ratio of displacement to distance for a moving object is:", options: ["Always less than 1", "Always equal to 1", "Always more than 1", "Equal to or less than 1"], correctIndex: 3, explanation: "Displacement is the shortest straight-line path, so its magnitude is either equal to the distance (if moving in a straight line in one direction) or less than the distance. Thus, the ratio of displacement to distance is always equal to or less than 1." },
      { id: "mcq-5", question: "An athlete completes one round of a circular track of diameter 200 m in 40 s. What will be the displacement at the end of 2 minutes 20 seconds?", options: ["0 m", "200 m", "300 m", "2200 m"], correctIndex: 1, explanation: "Total time = 2 min 20 s = 140 seconds. Number of rounds = $140 / 40 = 3.5$ rounds. At 3.5 rounds, the athlete completes 3 full rounds (back to start) and a half round. The displacement is the diameter of the circular track, which is 200 m." },
      { id: "mcq-6", question: "Suppose a boy is enjoying a ride on a merry-go-round which is moving with a constant speed of 10 m/s. It implies that the boy is:", options: ["at rest", "moving with no acceleration", "in accelerated motion", "moving with uniform velocity"], correctIndex: 2, explanation: "A merry-go-round moves in a circular path. In a circular path, even though the speed is constant, the direction of motion changes continuously. Change in direction means velocity is changing, which means the motion is accelerated." },
      { id: "mcq-7", question: "Area under a v-t graph represents a physical quantity which has the unit:", options: ["m^2", "m", "m/s", "m/s^2"], correctIndex: 1, explanation: "The area under a velocity-time (v-t) graph represents the displacement. The SI unit of displacement is the meter (m)." },
      { id: "mcq-8", question: "Which of the following v-t graphs represents uniform motion?", options: ["A straight line parallel to the time axis", "A straight line sloping upwards from origin", "A curved line", "A straight line parallel to the velocity axis"], correctIndex: 0, explanation: "Uniform motion means the velocity remains constant over time. This is represented by a straight line parallel to the time axis on a v-t graph." },
      { id: "mcq-9", question: "Four cars A, B, C and D are moving on a levelled road. Their distance-time graphs are shown (slope of A < slope of B < slope of C < slope of D). Which car is the fastest?", options: ["Car A", "Car B", "Car C", "Car D"], correctIndex: 3, explanation: "On a distance-time graph, the slope represents the speed. Since Car D has the highest slope, it has the highest speed and is the fastest." },
      { id: "mcq-10", question: "The acceleration of a car starting from rest and reaching 30 m/s in 10 s is:", options: ["3 m/s", "3 m/s^2", "300 m/s^2", "0.3 m/s^2"], correctIndex: 1, explanation: "$u = 0$, $v = 30 \\text{ m/s}$, $t = 10 \\text{ s}$. Acceleration $a = (v - u)/t = (30 - 0)/10 = 3 \\text{ m/s}^2$." }
    ],
    assertionReasons: [
      {
        id: "ar-1",
        assertion: "An object can have acceleration even if its speed is constant.",
        reason: "Acceleration is the rate of change of velocity, and velocity changes if the direction of motion changes, even when speed remains the same.",
        correctOption: "A",
        explanation: "Both assertion and reason are true, and the reason is the correct explanation. In uniform circular motion, speed is constant but direction changes, causing acceleration towards the center (centripetal acceleration)."
      },
      {
        id: "ar-2",
        assertion: "The displacement of an object can be zero, even if it has covered a non-zero distance.",
        reason: "Displacement is a scalar quantity while distance is a vector quantity.",
        correctOption: "C",
        explanation: "The assertion is true (e.g. going in a circle and returning to start makes displacement zero). The reason is false because displacement is a vector quantity and distance is a scalar quantity."
      }
    ],
    caseStudy: {
      id: "cs-1",
      passage: "Rohan and his family decided to go on a road trip from Delhi to Jaipur. Rohan noted down the odometer reading of the car every 30 minutes. The car started at 08:00 AM with an odometer reading of 42000 km. By 08:30 AM, the reading was 42025 km. By 09:00 AM, it was 42055 km. Rohan's father was driving at a uniform speed on the highway, but encountered traffic inside Jaipur city at 11:00 AM. In total, the car covered 240 km in 4 hours, arriving at Jaipur at 12:00 PM.",
      questions: [
        {
          question: "What was the average speed of Rohan's car for the entire Delhi to Jaipur trip?",
          options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
          correctIndex: 1,
          explanation: "Average speed = Total distance / Total time. Total distance = 240 km. Total time = 4 hours (from 08:00 AM to 12:00 PM). Average speed = $240 / 4 = 60 \\text{ km/h}$."
        },
        {
          question: "During the interval 08:00 AM to 08:30 AM, the car traveled 25 km. What was its average speed in m/s during this half-hour?",
          options: ["13.89 m/s", "25 m/s", "50 m/s", "12.5 m/s"],
          correctIndex: 0,
          explanation: "Distance = 25 km. Time = 0.5 hours. Speed = $25 / 0.5 = 50 \\text{ km/h}$. To convert to m/s: $50 \\times (5/18) = 13.89 \\text{ m/s}$."
        },
        {
          question: "Which device in the car is Rohan monitoring to note down the distances traveled?",
          options: ["Speedometer", "Odometer", "Tachometer", "Compass"],
          correctIndex: 1,
          explanation: "The odometer measures the distance traveled by the automobile, while the speedometer measures its instantaneous speed."
        }
      ]
    },
    hotsQuestions: [
      {
        id: "hots-1",
        question: "Can an object have a constant speed but a varying velocity? Explain with an example.",
        thinkingProcess: "Velocity has both magnitude (speed) and direction. If the direction changes while speed stays the same, velocity changes. Let's think of circular motion.",
        answer: "Yes, an object can have a constant speed but a varying velocity. This occurs when the object is moving along a circular path at a constant rate. For example, a cyclist riding along a circular track at a steady speed of 5 m/s has constant speed, but their velocity is constantly changing because their direction of motion is changing at every instant."
      },
      {
        id: "hots-2",
        question: "A ball thrown vertically upwards rises to a maximum height H and then falls back to the thrower's hand. What is the displacement and distance covered by the ball at the highest point, and on its return?",
        thinkingProcess: "At the highest point, the ball has traveled H up. The distance is H, and the displacement is H (upwards). On return, it went H up and H down. Total distance = 2H. Initial and final positions are same, so net displacement = 0.",
        answer: "1. At the highest point:\n- Distance covered = $H$\n- Magnitude of displacement = $H$\n\n2. On its return (when it reaches the thrower's hand):\n- Total distance covered = $H + H = 2H$\n- Net displacement = $0$ (since the final position coincides with the initial position)."
      }
    ],
    pyqs: [
      {
        id: "pyq-1",
        year: 2019,
        marks: 3,
        question: "State the differences between distance and displacement. (CBSE 2019)",
        answer: "| Distance | Displacement |\n| :--- | :--- |\n| 1. It is the actual length of the path covered by an object. | 1. It is the shortest distance between the initial and final position of an object. |\n| 2. It is a scalar quantity (has only magnitude). | 2. It is a vector quantity (has both magnitude and direction). |\n| 3. It is always positive and cannot be zero for a moving body. | 3. It can be positive, negative, or zero. |\n| 4. It depends on the path followed. | 4. It does not depend on the path followed, only on initial and final states. |",
        examinerComments: "Most students correctly defined the terms but missed writing the scalar/vector differences. Ensure you list at least 3 distinct points of comparison for a 3-mark question."
      },
      {
        id: "pyq-2",
        year: 2022,
        marks: 5,
        question: "Derive the second equation of motion ($s = ut + \\frac{1}{2}at^2$) graphically. (CBSE 2022)",
        answer: "Let us consider a body moving with a uniform acceleration '$a$' starting with initial velocity '$u$' at time $t=0$, and reaching a final velocity '$v$' at time '$t$'.\n\n**Graphical Representation:**\nOn a Velocity-Time graph, draw a line $AB$ representing uniform acceleration. The point $A$ on the Y-axis represents initial velocity $u$. The point $B$ at time $t$ represents final velocity $v$.\n\n**Derivation Steps:**\n1. The distance traveled '$s$' is given by the area under the velocity-time graph (area of the trapezium $OABC$ under line $AB$).\n2. We split the trapezium $OABC$ into two parts:\n   - Area of rectangle $OADC$ (width = $t$, height = $u$)\n   - Area of right-angled triangle $ADB$ (base = $t$, height = $v - u$)\n3. Therefore, $s = \\text{Area of rectangle } OADC + \\text{Area of triangle } ADB$\n   $s = (OA \\times OC) + \\frac{1}{2}(AD \\times BD)$\n4. Substitute the values:\n   - $OA = u$\n   - $OC = t$\n   - $AD = OC = t$\n   - $BD = v - u$\n   So, $s = ut + \\frac{1}{2}(t \\times (v-u))$\n5. From the first equation of motion, we know that $v - u = at$. Substitute $(v-u) = at$ into the equation:\n   $s = ut + \\frac{1}{2}(t \\times at)$\n   $s = ut + \\frac{1}{2}at^2$\n\nHence, the position-time relation is derived.",
        examinerComments: "Drawing the graph is mandatory. Students who forgot to label the points $O, A, B, C, D$ on the axes lost 1 mark. Clearly state what each variable stands for."
      }
    ],
    diagramPractices: [
      {
        id: "diag-vt-graph",
        title: "Label the Velocity-Time Graph for Uniform Acceleration",
        svgType: "velocity-graph",
        labels: [
          { id: "lbl-initial", text: "Initial Velocity (u)", x: 10, y: 72 },
          { id: "lbl-final", text: "Final Velocity (v)", x: 80, y: 22 },
          { id: "lbl-time", text: "Time axis (t)", x: 50, y: 92 },
          { id: "lbl-accel", text: "Uniform Acceleration (Slope)", x: 45, y: 45 }
        ]
      }
    ],
    formulas: [
      {
        name: "Average Speed",
        equation: "\\text{Average Speed} = \\frac{\\text{Total Distance Travelled}}{\\text{Total Time Taken}} = \\frac{s_{total}}{t_{total}}",
        variables: [
          { symbol: "s_{total}", meaning: "total path length covered in meters (m)" },
          { symbol: "t_{total}", meaning: "total elapsed time in seconds (s)" }
        ],
        context: "Used when speed varies during different intervals of a journey."
      },
      {
        name: "Acceleration",
        equation: "a = \\frac{v - u}{t}",
        variables: [
          { symbol: "a", meaning: "acceleration in meters per second squared (m/s²)" },
          { symbol: "u", meaning: "initial velocity in meters per second (m/s)" },
          { symbol: "v", meaning: "final velocity in meters per second (m/s)" },
          { symbol: "t", meaning: "time taken in seconds (s)" }
        ],
        context: "Calculates the rate of change of velocity. Negative value denotes deceleration."
      },
      {
        name: "First Equation of Motion (Velocity-Time)",
        equation: "v = u + at",
        variables: [
          { symbol: "v", meaning: "final velocity after time t" },
          { symbol: "u", meaning: "initial velocity" },
          { symbol: "a", meaning: "uniform acceleration" },
          { symbol: "t", meaning: "time interval" }
        ],
        context: "Relates velocity and time. Used when displacement is not given or required."
      },
      {
        name: "Second Equation of Motion (Position-Time)",
        equation: "s = ut + \\frac{1}{2}at^2",
        variables: [
          { symbol: "s", meaning: "distance/displacement traversed" },
          { symbol: "u", meaning: "initial velocity" },
          { symbol: "t", meaning: "time interval" },
          { symbol: "a", meaning: "uniform acceleration" }
        ],
        context: "Relates position and time. Used when final velocity is not given or required."
      },
      {
        name: "Third Equation of Motion (Position-Velocity)",
        equation: "v^2 = u^2 + 2as",
        variables: [
          { symbol: "v", meaning: "final velocity" },
          { symbol: "u", meaning: "initial velocity" },
          { symbol: "a", meaning: "uniform acceleration" },
          { symbol: "s", meaning: "displacement" }
        ],
        context: "Relates velocity and position. Used when time interval is not given or required."
      }
    ],
    revisionPoints: [
      "**Motion** is always relative; there is no such thing as absolute rest. A frame of reference must be specified.",
      "**Distance** is a scalar quantity representing path length. **Displacement** is a vector quantity representing the shortest route.",
      "Displacement is always **less than or equal to** distance. It can be zero, negative, or positive.",
      "**Uniform motion** occurs when an object covers equal distances in equal intervals of time along a straight line.",
      "**Non-uniform motion** occurs when an object covers unequal distances in equal intervals of time.",
      "**Velocity** is speed in a specified direction. Velocity is vector; speed is scalar.",
      "**Acceleration** is the rate of change of velocity: $a = (v-u)/t$. Retardation is negative acceleration.",
      "The **slope** of a Distance-Time graph represents **speed**. The slope of a Velocity-Time graph represents **acceleration**.",
      "The **area** under a Velocity-Time graph represents the **displacement** of the object.",
      "The three equations of motion ($v=u+at$, $s=ut+1/2at^2$, $v^2=u^2+2as$) are valid **only** for motion along a straight line with **uniform acceleration**."
    ],
    summaryPoints: [
      "An object is in motion if its position changes relative to a reference point.",
      "Distance is the actual path traversed; it is a scalar quantity.",
      "Displacement is the vector pointing from start to end; its magnitude is the shortest distance.",
      "Speed is the distance travelled per unit time (scalar); unit is m/s.",
      "Velocity is the displacement per unit time in a specified direction (vector).",
      "Acceleration measures the change in velocity per unit time; unit is m/s².",
      "A straight horizontal line on a v-t graph represents constant velocity (zero acceleration).",
      "A straight upward sloping line on a v-t graph represents uniform acceleration.",
      "Uniform circular motion has constant speed but changing velocity (due to direction change), so it is accelerated.",
      "Equations of motion apply only to uniform acceleration in a straight line."
    ],
    mindMap: {
      id: "root-motion",
      label: "Chapter 8: Motion",
      type: "root",
      children: [
        {
          id: "mm-basics",
          label: "Basic Descriptors",
          type: "main",
          children: [
            {
              id: "mm-distance",
              label: "Distance",
              type: "sub",
              children: [
                { id: "mm-dist-def", label: "Actual path length", type: "detail" },
                { id: "mm-dist-scalar", label: "Scalar (no direction)", type: "detail" }
              ]
            },
            {
              id: "mm-displacement",
              label: "Displacement",
              type: "sub",
              children: [
                { id: "mm-disp-def", label: "Shortest route from start to end", type: "detail" },
                { id: "mm-disp-vector", label: "Vector (with direction)", type: "detail" },
                { id: "mm-disp-zero", label: "Can be zero", type: "detail" }
              ]
            }
          ]
        },
        {
          id: "mm-rates",
          label: "Rates of Motion",
          type: "main",
          children: [
            {
              id: "mm-speed",
              label: "Speed",
              type: "sub",
              children: [
                { id: "mm-speed-formula", label: "Speed = Distance / Time", type: "detail" },
                { id: "mm-speed-scalar", label: "Scalar, Unit: m/s", type: "detail" }
              ]
            },
            {
              id: "mm-velocity",
              label: "Velocity",
              type: "sub",
              children: [
                { id: "mm-vel-formula", label: "Velocity = Displacement / Time", type: "detail" },
                { id: "mm-vel-vector", label: "Vector (has direction)", type: "detail" }
              ]
            },
            {
              id: "mm-acceleration",
              label: "Acceleration",
              type: "sub",
              children: [
                { id: "mm-acc-formula", label: "a = (v - u) / t", type: "detail" },
                { id: "mm-acc-unit", label: "Unit: m/s²", type: "detail" },
                { id: "mm-acc-ret", label: "Negative = Retardation", type: "detail" }
              ]
            }
          ]
        },
        {
          id: "mm-equations",
          label: "Equations of Motion",
          type: "main",
          children: [
            { id: "mm-eq1", label: "1. v = u + at (Velocity-Time)", type: "sub" },
            { id: "mm-eq2", label: "2. s = ut + 1/2 at² (Position-Time)", type: "sub" },
            { id: "mm-eq3", label: "3. v² = u² + 2as (Position-Velocity)", type: "sub" }
          ]
        },
        {
          id: "mm-graphs",
          label: "Graphical Analysis",
          type: "main",
          children: [
            { id: "mm-g1", label: "d-t Graph Slope = Speed", type: "sub" },
            { id: "mm-g2", label: "v-t Graph Slope = Acceleration", type: "sub" },
            { id: "mm-g3", label: "v-t Graph Area = Displacement", type: "sub" }
          ]
        }
      ]
    },
    flashcards: [
      { id: "fc-1", chapterId: "motion", question: "What is the SI unit of acceleration?", answer: "The SI unit of acceleration is the meter per second squared, written as m/s² or m·s⁻².", box: 1, nextReviewAt: new Date().toISOString() },
      { id: "fc-2", chapterId: "motion", question: "Is speed a scalar or vector quantity?", answer: "Speed is a scalar quantity because it has only magnitude (value) and does not require a direction.", box: 1, nextReviewAt: new Date().toISOString() },
      { id: "fc-3", chapterId: "motion", question: "What does the slope of a velocity-time graph represent?", answer: "The slope of a velocity-time graph represents the acceleration of the object.", box: 1, nextReviewAt: new Date().toISOString() },
      { id: "fc-4", chapterId: "motion", question: "Write the equation of motion that relates initial velocity, final velocity, acceleration, and displacement.", answer: "The third equation of motion: v² = u² + 2as.", box: 1, nextReviewAt: new Date().toISOString() },
      { id: "fc-5", chapterId: "motion", question: "When is the displacement of an object zero despite traveling a path?", answer: "Displacement is zero when the object returns to its starting position (e.g. traveling in a closed loop, circular path, or walking to school and back home).", box: 1, nextReviewAt: new Date().toISOString() },
      { id: "fc-6", chapterId: "motion", question: "Under what condition are the equations of motion applicable?", answer: "They are applicable ONLY when the object is moving along a straight line with uniform (constant) acceleration.", box: 1, nextReviewAt: new Date().toISOString() }
    ]
  }
};
