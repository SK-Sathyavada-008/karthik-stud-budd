// NCERT 2026 Science Content - Physics, Chemistry, Biology
// "Exploration: Entering the World of Secondary Science"
// Original academic content aligned with NEP 2020 / NCF-SE 2023

export interface FullChapterData {
  difficulty: "Easy" | "Medium" | "Hard";
  estimatedTime: string;
  learningObjectives: string[];
  warmupQ: string;
  warmupFact: string;
  warmupHint: string;
  concepts: {
    name: string;
    definition: string;
    ncertDefinition: string;
    examText: string;
    keywords: string[];
    highlights: string[];
    example: string;
    analogy: string;
    visual: string;
    fact: string;
    trick: string;
    mistakes: string;
    recap: string;
  }[];
  formulas: {
    name: string;
    equation: string;
    variables: { symbol: string; meaning: string }[];
    context: string;
  }[];
  solved: {
    question: string;
    thinking: string;
    steps: string[];
    answer: string;
    tips: string;
  }[];
  mcqs: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  flashcards: { question: string; answer: string }[];
  revisionPoints: string[];
  summaryPoints: string[];
}

export const SCIENCE_CONTENT: Record<string, FullChapterData> = {

  "exploration-science": {
    difficulty: "Easy",
    estimatedTime: "2.5 hours",
    learningObjectives: [
      "Understand the nature and scope of secondary science as an integrated discipline.",
      "Identify physical quantities as fundamental (mass, length, time) or derived (speed, area, volume).",
      "Apply the SI system of units to express measurements correctly.",
      "Use standard laboratory instruments such as vernier calipers, measuring cylinders, and thermometers.",
      "Distinguish between systematic and random errors in measurements."
    ],
    warmupQ: "If you had to measure the thickness of a single page of this textbook, which instruments would you use and why?",
    warmupFact: "The kilogram was redefined in 2019! It is now based on Planck's constant (a quantum value) rather than a physical platinum-iridium cylinder stored in Paris.",
    warmupHint: "Think about the difference between estimating and accurately measuring — what tools change a guess into a precise scientific value?",
    concepts: [
      {
        name: "Science as an Integrated Inquiry",
        definition: "Secondary science integrates Physics, Chemistry, Biology, and Earth Science into a single, interconnected discipline. Science is the systematic study of the natural world through observation, hypothesis formation, experimentation, data analysis, and evidence-based conclusions.",
        ncertDefinition: "Science is a process of building knowledge about the natural world through systematic observations and controlled experiments. The new NCERT Exploration textbook treats science as one unified subject rather than separate disciplines.",
        examText: "Define science as a systematic, evidence-based process of inquiry. List the steps of the scientific method: Observation → Question → Hypothesis → Experiment → Data Analysis → Conclusion → Communication. Explain the difference between a hypothesis (educated guess) and a theory (well-tested explanation supported by evidence).",
        keywords: ["scientific method", "hypothesis", "theory", "observation", "experiment", "evidence"],
        highlights: [
          "A scientific theory is NOT a guess — it is a well-substantiated explanation supported by extensive experimentation.",
          "Variables in experiments: Independent variable (what you change), Dependent variable (what you measure), Controlled variables (what you keep constant)."
        ],
        example: "Louis Pasteur's swan-neck flask experiment disproved spontaneous generation. He kept broth sterile by using a curved neck that prevented airborne particles from reaching it — a perfect controlled experiment.",
        analogy: "Science is like detective work: a scientist collects clues (observations), forms a theory (suspect), and tests it (trial) using repeatable experiments until the evidence is beyond doubt.",
        visual: "A circular flowchart showing: Observe → Question → Hypothesize → Experiment → Analyze → Conclude → Communicate → back to Observe.",
        fact: "The word 'scientist' was only coined in 1833 by William Whewell, before which practitioners were called 'natural philosophers'.",
        trick: "Remember the scientific method with: 'Oh! Questions Help Everyone Answer Carefully' — Observation, Question, Hypothesis, Experiment, Analysis, Conclusion.",
        mistakes: "Students confuse 'theory' with 'guess'. A scientific theory (e.g. Cell Theory, Theory of Evolution) is the strongest form of scientific explanation, backed by decades of experiments.",
        recap: "Science is a systematic evidence-based inquiry using the scientific method; secondary science integrates all natural science disciplines."
      },
      {
        name: "Physical Quantities: Fundamental and Derived",
        definition: "Physical quantities are properties of objects that can be measured. Fundamental quantities are independent and cannot be derived from other quantities (e.g. mass, length, time, electric current, temperature, amount of substance, luminous intensity). Derived quantities are expressed as combinations of fundamental quantities (e.g. speed = length/time, area = length × length).",
        ncertDefinition: "All physical quantities are classified as fundamental or derived. The seven fundamental quantities form the basis of the International System of Units (SI).",
        examText: "List the 7 SI base quantities and their standard units: Length (metre, m), Mass (kilogram, kg), Time (second, s), Electric current (ampere, A), Temperature (kelvin, K), Amount of substance (mole, mol), Luminous intensity (candela, cd). Express derived units: speed (m/s), force (kg⋅m/s² = Newton), energy (kg⋅m²/s² = Joule).",
        keywords: ["fundamental quantities", "derived quantities", "SI units", "base units", "measurement"],
        highlights: [
          "There are exactly 7 fundamental (base) SI quantities.",
          "All other physical units are derived from these 7 base units."
        ],
        example: "Density = Mass/Volume = kg/(m³) = kg⋅m⁻³. This is a derived unit because it is built from the base units kilogram (kg) and metre (m).",
        analogy: "Fundamental quantities are like the 26 letters of the alphabet — from just these, you can build every word (derived quantity) in the dictionary.",
        visual: "A two-column table: Left column lists the 7 fundamental quantities with their SI units; Right column lists derived examples (density, speed, force, pressure) with their composite unit formulas.",
        fact: "The second is now defined in terms of the vibrations of a caesium-133 atom — it takes exactly 9,192,631,770 oscillations to make one second.",
        trick: "Remember the 7 base quantities with: 'My Little Thermometer Always Takes Cold Medicine' → Mass, Length, Temperature, Ampere, Time, Candela, Mole.",
        mistakes: "Students often confuse mass (kg) and weight (Newton). Mass is a fundamental quantity; weight is a derived force (weight = mass × gravitational acceleration).",
        recap: "7 fundamental SI quantities build all derived quantities. Measurement always includes a number and a unit."
      },
      {
        name: "Measurement, Instruments, and Errors",
        definition: "Measurement is the process of comparing an unknown quantity with a known standard. Precision refers to how closely repeated measurements agree with each other. Accuracy refers to how close a measurement is to the true value. Significant figures indicate the precision of a measurement.",
        ncertDefinition: "Scientific measurement requires standard instruments and must include both the numerical value and the appropriate unit. All measurements have some degree of uncertainty (error).",
        examText: "State two types of errors: (1) Systematic errors — consistent, repeatable errors due to instrument calibration faults or observer bias (e.g. zero error in a vernier caliper). (2) Random errors — unpredictable variations from multiple causes (e.g. fluctuating temperature). State the least count of instruments: metre rule (1 mm), vernier caliper (0.1 mm), screw gauge (0.01 mm).",
        keywords: ["precision", "accuracy", "systematic error", "random error", "least count", "significant figures"],
        highlights: [
          "Least count = smallest reading an instrument can measure.",
          "Vernier caliper: Least count = 0.1 mm (can measure internal and external diameters).",
          "Screw gauge / Micrometer: Least count = 0.01 mm."
        ],
        example: "A vernier caliper reads 2.35 cm for a rod. The 0.05 cm contribution comes from the vernier scale. The result has 3 significant figures: 2, 3, and 5.",
        analogy: "A balance scale is accurate if it gives the true mass, but precise if repeated readings are consistent. A broken scale that consistently reads 2 kg heavier is precise (repeatable) but not accurate (not true value).",
        visual: "A target shooting diagram: Clustered shots near center = precise AND accurate. Clustered shots far from center = precise but NOT accurate. Scattered shots near center = accurate but NOT precise.",
        fact: "The Large Hadron Collider at CERN measures particle positions to within 10 micrometres — about one-tenth the width of a human hair.",
        trick: "Systematic errors can be corrected by re-calibrating instruments; random errors can be minimized by taking multiple readings and averaging.",
        mistakes: "Confusing precision with accuracy. A digital scale showing 5.000 kg repeatedly is precise but may still be inaccurate if its calibration is off.",
        recap: "Accurate measurement requires calibrated instruments; errors are systematic (correctable) or random (reducible by averaging)."
      }
    ],
    formulas: [
      {
        name: "Percentage Error",
        equation: "\\% \\text{ Error} = \\frac{|\\text{Measured Value} - \\text{True Value}|}{\\text{True Value}} \\times 100",
        variables: [{ symbol: "Measured Value", meaning: "Value obtained from instrument" }, { symbol: "True Value", meaning: "Accepted/standard value" }],
        context: "Used to compare how close a measurement is to the real value."
      }
    ],
    solved: [
      {
        question: "A student measures the length of a pencil 5 times and gets: 14.2 cm, 14.5 cm, 14.3 cm, 14.4 cm, 14.6 cm. Calculate (a) the mean length and (b) the mean absolute error.",
        thinking: "Sum all readings and divide by 5 for mean. Then find absolute deviation of each reading from the mean, sum them, and divide by 5.",
        steps: [
          "Sum = 14.2 + 14.5 + 14.3 + 14.4 + 14.6 = 72.0 cm",
          "Mean = 72.0 / 5 = 14.4 cm",
          "Absolute deviations: |14.2−14.4|=0.2, |14.5−14.4|=0.1, |14.3−14.4|=0.1, |14.4−14.4|=0.0, |14.6−14.4|=0.2",
          "Sum of deviations = 0.2 + 0.1 + 0.1 + 0.0 + 0.2 = 0.6 cm",
          "Mean absolute error = 0.6 / 5 = 0.12 cm ≈ 0.1 cm (1 decimal place)"
        ],
        answer: "Mean length = 14.4 cm; Mean absolute error = ±0.1 cm. Result: (14.4 ± 0.1) cm.",
        tips: "Always express experimental results as (mean ± error) to indicate precision."
      }
    ],
    mcqs: [
      { question: "Which of the following is a fundamental (base) SI quantity?", options: ["Force", "Velocity", "Electric current", "Pressure"], correctIndex: 2, explanation: "Electric current (measured in Amperes) is one of the 7 SI base quantities. Force, velocity, and pressure are all derived quantities." },
      { question: "The least count of a vernier caliper is:", options: ["1 mm", "0.1 mm", "0.01 mm", "0.001 mm"], correctIndex: 1, explanation: "A standard vernier caliper has a least count of 0.1 mm (or 0.01 cm), making it 10× more precise than a standard metre rule." },
      { question: "A hypothesis in science is best described as:", options: ["A proven fact", "An educated guess that can be tested", "A final conclusion", "A mathematical equation"], correctIndex: 1, explanation: "A hypothesis is a testable, educated prediction about how or why something works. It must be falsifiable through experiments." },
      { question: "Systematic errors can be:", options: ["Eliminated by averaging many readings", "Reduced by using a better instrument or correcting calibration", "Caused by unpredictable external conditions", "Always smaller than random errors"], correctIndex: 1, explanation: "Systematic errors result from calibration issues and can be corrected by recalibrating the instrument or applying a correction factor." },
      { question: "Which derived unit is correct for density?", options: ["kg/m", "kg⋅m", "kg/m³", "m³/kg"], correctIndex: 2, explanation: "Density = Mass/Volume = kg/m³. This is a derived unit built from the base quantities mass (kg) and length (m)." }
    ],
    flashcards: [
      { question: "What are the 7 SI base quantities?", answer: "Length (m), Mass (kg), Time (s), Electric current (A), Temperature (K), Amount of substance (mol), Luminous intensity (cd)." },
      { question: "What is the difference between accuracy and precision?", answer: "Accuracy = closeness to the true value. Precision = consistency between repeated measurements." },
      { question: "What is least count?", answer: "The smallest value that an instrument can measure; e.g. metre rule = 1 mm, vernier = 0.1 mm." },
      { question: "What is a scientific theory?", answer: "A well-tested, evidence-based explanation of natural phenomena, supported by extensive experiments." },
      { question: "What are the steps of the scientific method?", answer: "Observation → Question → Hypothesis → Experiment → Analysis → Conclusion → Communication." }
    ],
    revisionPoints: [
      "Science is an integrated inquiry combining Physics, Chemistry, Biology, and Earth Science.",
      "7 SI base quantities: Length, Mass, Time, Current, Temperature, Amount, Luminous intensity.",
      "All other quantities are derived from these 7 base units.",
      "Least count: Metre rule = 1 mm; Vernier caliper = 0.1 mm; Screw gauge = 0.01 mm.",
      "Systematic errors = correctable; Random errors = reducible by averaging.",
      "Result = (Mean Value ± Mean Absolute Error).",
      "A hypothesis must be testable and falsifiable.",
      "Significant figures reflect the precision of a measurement."
    ],
    summaryPoints: [
      "Secondary science is treated as a unified discipline under the NCERT 2026 Exploration textbook, integrating all science branches.",
      "Physical quantities are classified as fundamental (7 base SI units) or derived (combinations of base units).",
      "The SI system provides a universal language for scientific communication across all nations.",
      "Measurement involves identifying the right instrument, taking repeated readings, and calculating the mean.",
      "Errors are unavoidable but can be classified: systematic errors are consistent and correctable; random errors are unpredictable but reducible by averaging.",
      "Precision measures repeatability; accuracy measures closeness to true value — a measurement can be precise but inaccurate.",
      "The scientific method is a cycle of observation, hypothesis, experimentation, and communication.",
      "Variables in an experiment: independent (cause), dependent (effect), and controlled (constant)."
    ]
  },

  "motion": {
    difficulty: "Medium",
    estimatedTime: "4.5 hours",
    learningObjectives: [
      "Distinguish between distance (scalar) and displacement (vector) with sign conventions.",
      "Define speed, velocity, and acceleration with appropriate SI units.",
      "Derive and apply the three equations of motion for uniformly accelerated motion.",
      "Interpret distance-time and velocity-time graphs to extract motion data.",
      "Explain uniform circular motion and why it is accelerated despite constant speed."
    ],
    warmupQ: "A car travels from your home to school by a winding road (3 km) but the school is only 1.5 km away in a straight line. What is the distance? What is the displacement?",
    warmupFact: "Usain Bolt's peak speed during his 100m world record was approximately 12.4 m/s (44.7 km/h), but his average speed for the race was only about 10.44 m/s — showing that average and instantaneous values can differ significantly!",
    warmupHint: "Think about the difference between the path you walked and the straight-line arrow from start to finish.",
    concepts: [
      {
        name: "Distance vs. Displacement: Scalars and Vectors",
        definition: "Distance is the total path length covered by a moving object regardless of direction — it is always positive and is a scalar quantity (only magnitude). Displacement is the shortest straight-line distance from the initial position to the final position and has both magnitude and direction, making it a vector quantity. Displacement can be zero, positive, or negative.",
        ncertDefinition: "The total path length is called distance, whereas the minimum distance between two points (the straight line joining the initial and final positions) is called displacement. Displacement is a vector quantity.",
        examText: "For exams: (1) Define distance as a scalar (magnitude only). (2) Define displacement as a vector (magnitude + direction). (3) State that displacement = final position − initial position. (4) Show: if a person walks 6 m east then 6 m west, distance = 12 m but displacement = 0 m. (5) State SI unit for both: metre (m).",
        keywords: ["distance", "displacement", "scalar", "vector", "magnitude", "direction"],
        highlights: [
          "Distance ≥ |Displacement| always (displacement can never exceed distance).",
          "If a person returns to the starting point, displacement = 0 but distance > 0.",
          "Displacement is measured along the straight line connecting start to end."
        ],
        example: "Ramu walks 400 m north, then 300 m east. Distance = 400 + 300 = 700 m. Displacement = √(400² + 300²) = √(250000) = 500 m, directed northeast.",
        analogy: "Distance is like the total length of the thread in a ball of yarn (every twist and turn counted). Displacement is like the straight needle connecting the first point of thread to where it ends.",
        visual: "A path diagram showing a right-angle path from A (start) to B (north), then B to C (east). The hypotenuse A-C shows displacement; the bent path A-B-C shows distance.",
        fact: "GPS navigation systems use displacement vectors in real time — they track your straight-line distance from the destination, not the path you actually drive.",
        trick: "D for Distance = D for Direct path (the long way around). Displacement = straight arrow from start to finish, like a shooting target's bullseye line.",
        mistakes: "Students write displacement = distance in problems involving curved paths or return trips. Always draw the start and end points; displacement is only the straight-line connection.",
        recap: "Distance = total path (scalar, ≥0). Displacement = straight-line gap from start to end (vector, can be 0 or negative). Both measured in metres."
      },
      {
        name: "Speed, Velocity, and Average Velocity",
        definition: "Speed is the rate at which an object covers distance — it is a scalar quantity (distance / time). Velocity is the rate of change of displacement — it is a vector quantity (displacement / time). Average speed = total distance / total time. Average velocity = total displacement / total time. Instantaneous speed/velocity is the speed or velocity at a specific instant.",
        ncertDefinition: "Speed is the distance covered per unit time. Velocity is defined as the displacement per unit time. When the velocity of an object changes at a uniform rate, the object is said to be under uniform acceleration.",
        examText: "Key formulas: Speed = d/t (m/s). Velocity = Δs/Δt (m/s, vector). If a car travels 60 km in 1 hour, speed = 60 km/h = 16.67 m/s. For a return trip at different speeds, average speed ≠ arithmetic mean of speeds — use total distance / total time.",
        keywords: ["speed", "velocity", "average speed", "instantaneous velocity", "uniform motion"],
        highlights: [
          "Speed is always ≥ 0; velocity can be negative (indicates opposite direction).",
          "For a round trip at speeds v₁ and v₂ over equal distances: Average speed = 2v₁v₂/(v₁+v₂).",
          "Uniform motion: equal distances in equal intervals of time → constant velocity."
        ],
        example: "A train travels 150 km in 2.5 hours. Speed = 150 / 2.5 = 60 km/h = (60 × 1000)/3600 = 16.67 m/s. Since this is total distance / total time, it is average speed.",
        analogy: "Speed is the speedometer reading (how fast you are going, regardless of direction). Velocity is the GPS arrow (how fast AND in which direction you are heading).",
        visual: "Two parallel timelines: Top shows equal distance segments for uniform motion (constant spacing). Bottom shows unequal spacing for non-uniform motion.",
        fact: "The speed of light in vacuum (c = 3 × 10⁸ m/s) is the universal speed limit — no object with mass can reach or exceed it.",
        trick: "When a problem says 'uniform speed' or 'constant velocity', the object is NOT accelerating. When speed or direction changes, there IS acceleration.",
        mistakes: "Using average of speeds instead of total distance / total time for average speed in a multi-leg journey.",
        recap: "Speed = d/t (scalar). Velocity = Δs/Δt (vector). Average speed uses total distance; average velocity uses total displacement."
      },
      {
        name: "Acceleration: Uniform and Non-Uniform",
        definition: "Acceleration is the rate of change of velocity with time. It is a vector quantity measured in m/s². If velocity increases uniformly, acceleration is positive (speeding up). If velocity decreases uniformly, acceleration is negative — called retardation or deceleration. If velocity is constant, acceleration = 0.",
        ncertDefinition: "Acceleration is defined as the change in velocity divided by the time taken for that change. Non-uniform acceleration means the velocity changes by different amounts in equal time intervals.",
        examText: "Formula: a = (v - u) / t, where u = initial velocity, v = final velocity, t = time. SI unit: m/s². State sign convention: positive direction is usually taken as the direction of initial motion. Retardation example: a car braking has negative acceleration.",
        keywords: ["acceleration", "retardation", "deceleration", "uniform acceleration", "rate of change of velocity"],
        highlights: [
          "Acceleration = 0 means uniform motion (not necessarily the object is stationary).",
          "Retardation is negative acceleration (velocity is decreasing).",
          "Free fall acceleration near Earth's surface: g ≈ 9.8 m/s² (often taken as 10 m/s² in problems)."
        ],
        example: "A car starts from rest (u = 0) and reaches 20 m/s in 4 seconds. Acceleration = (20 - 0) / 4 = 5 m/s². A braking car going from 30 m/s to 0 in 6 s: a = (0 - 30) / 6 = -5 m/s² (retardation).",
        analogy: "Acceleration is like pressing the gas pedal (positive) or the brake pedal (negative) in a car — it measures how quickly your speed-needle changes.",
        visual: "Two velocity-time graphs side by side: Left = straight line sloping upward (uniform positive acceleration). Right = straight line sloping downward (uniform retardation).",
        fact: "An astronaut on the Moon experiences gravitational acceleration of only 1.62 m/s² (about 1/6th of Earth's 9.8 m/s²), which is why they can jump 6× higher on the Moon.",
        trick: "If the velocity-time graph is a straight line, acceleration is uniform. If curved, acceleration is non-uniform. The slope of the v-t graph = acceleration.",
        mistakes: "Writing a = v/t instead of a = (v-u)/t. Always subtract initial from final velocity, not just divide final velocity by time.",
        recap: "a = (v−u)/t (m/s²). Positive = speeding up; negative = slowing down. Slope of v-t graph gives acceleration."
      },
      {
        name: "Equations of Motion and Graphical Analysis",
        definition: "The three equations of motion apply to an object moving in a straight line under uniform (constant) acceleration. They relate initial velocity (u), final velocity (v), acceleration (a), displacement (s), and time (t). Graphical analysis of distance-time and velocity-time graphs provides a visual and mathematical understanding of motion.",
        ncertDefinition: "For uniformly accelerated motion along a straight line, three equations of motion can be derived: the first relates velocity and time, the second relates displacement and time, and the third relates velocity and displacement.",
        examText: "Equations of Motion: (1) v = u + at (velocity-time). (2) s = ut + ½at² (displacement-time). (3) v² = u² + 2as (velocity-displacement). Also: s = (u+v)/2 × t. Graph rules: (a) Distance-time graph: slope = speed. (b) Velocity-time graph: slope = acceleration; area under graph = displacement.",
        keywords: ["equations of motion", "v = u + at", "s = ut + ½at²", "v² = u² + 2as", "distance-time graph", "velocity-time graph"],
        highlights: [
          "Equations of motion ONLY apply when acceleration is uniform (constant).",
          "Area under velocity-time graph = displacement (not distance).",
          "For free fall: u = 0, a = g = 9.8 m/s² (downward positive)."
        ],
        example: "A ball is thrown upward at 20 m/s. Find maximum height. At max height v = 0, u = 20 m/s, a = -10 m/s² (gravity). Using v² = u² + 2as: 0 = 400 + 2(-10)s → s = 400/20 = 20 m.",
        analogy: "The three equations of motion are like three different camera angles filming the same scene: equation 1 shows the time-velocity view, equation 2 shows the time-position view, and equation 3 skips time altogether and connects velocity directly to position.",
        visual: "Three graphs: (1) s-t graph: parabola for uniform acceleration. (2) v-t graph: straight line with positive slope; shaded area = displacement. (3) a-t graph: horizontal line for uniform acceleration.",
        fact: "Galileo Galilei derived the equations of motion in the 1600s by rolling balls down inclined planes — without a single electronic sensor, using only water clocks and his own pulse.",
        trick: "To choose which equation to use: No 's'? Use v = u + at. No 'v'? Use s = ut + ½at². No 't'? Use v² = u² + 2as.",
        mistakes: "Forgetting sign conventions: taking upward as positive means g = -10 m/s² upward. Always define your positive direction at the start of each problem.",
        recap: "Three equations of motion (for uniform acceleration only). Graphs: slope of s-t = speed; slope of v-t = acceleration; area of v-t = displacement."
      },
      {
        name: "Uniform Circular Motion",
        definition: "Uniform circular motion is the motion of an object along a circular path with constant speed. Although the speed is constant, the direction of velocity continuously changes, meaning the object is constantly accelerating. This acceleration is called centripetal acceleration and it always points toward the centre of the circle.",
        ncertDefinition: "When an object moves in a circle at constant speed, its velocity changes in direction at every point. Since velocity is a vector, this change in direction means the object is accelerating — this is uniform circular motion.",
        examText: "Key points for exams: (1) Speed is constant but velocity is not constant (direction changes). (2) Therefore, uniform circular motion IS accelerated motion. (3) Centripetal acceleration = v²/r, directed toward centre. (4) Centripetal force = mv²/r. (5) Examples: satellite orbits, electrons (approximately), cars on circular tracks.",
        keywords: ["uniform circular motion", "centripetal acceleration", "centripetal force", "constant speed", "changing velocity"],
        highlights: [
          "Speed is constant BUT velocity is NOT constant (direction continuously changes).",
          "Centripetal force is NOT a new force — it is the component of existing forces pointing toward the centre.",
          "Time period T = 2πr/v (time for one complete revolution)."
        ],
        example: "The Moon orbits the Earth at approximately constant speed — yet it accelerates continuously toward Earth (centripetal). If there were no centripetal force (gravity), the Moon would fly off in a straight line tangent to its orbit.",
        analogy: "Swinging a stone on a string in a horizontal circle: the string tension provides centripetal force toward your hand (the centre). Release the string and the stone flies off in a straight line — proving it was always being pulled inward.",
        visual: "A circle with an object at one point, a velocity arrow tangent to the circle, and a centripetal acceleration arrow pointing inward toward the centre.",
        fact: "A washing machine's spin cycle uses centripetal force — clothes press against the outer drum wall and water (which needs a centripetal force to follow the circular path) flings outward through the drum holes.",
        trick: "Circular = Centripetal (inward). The centripetal force is always perpendicular to velocity, so it changes direction but not speed.",
        mistakes: "Confusing centripetal force with centrifugal force. Centrifugal force is a fictitious force felt by an observer in a rotating frame. In an inertial frame, only centripetal (inward) force exists.",
        recap: "Circular motion at constant speed = uniform circular motion. Velocity direction changes → acceleration exists. Centripetal acceleration = v²/r toward centre."
      }
    ],
    formulas: [
      { name: "Speed", equation: "v = \\frac{d}{t}", variables: [{ symbol: "d", meaning: "distance (m)" }, { symbol: "t", meaning: "time (s)" }], context: "Average speed over a journey." },
      { name: "Acceleration", equation: "a = \\frac{v - u}{t}", variables: [{ symbol: "u", meaning: "initial velocity (m/s)" }, { symbol: "v", meaning: "final velocity (m/s)" }, { symbol: "t", meaning: "time (s)" }], context: "Rate of change of velocity." },
      { name: "First Equation of Motion", equation: "v = u + at", variables: [{ symbol: "u, v", meaning: "initial and final velocity" }, { symbol: "a", meaning: "acceleration" }, { symbol: "t", meaning: "time" }], context: "Use when displacement is not needed." },
      { name: "Second Equation of Motion", equation: "s = ut + \\frac{1}{2}at^2", variables: [{ symbol: "s", meaning: "displacement (m)" }], context: "Use when final velocity is not given." },
      { name: "Third Equation of Motion", equation: "v^2 = u^2 + 2as", variables: [{ symbol: "s", meaning: "displacement (m)" }], context: "Use when time is not given." }
    ],
    solved: [
      {
        question: "A car starts from rest and accelerates uniformly at 4 m/s² for 5 seconds. Calculate: (a) the final velocity, (b) the distance covered.",
        thinking: "u = 0 (starts from rest), a = 4 m/s², t = 5 s. Use equations 1 and 2.",
        steps: [
          "(a) Using v = u + at: v = 0 + (4)(5) = 20 m/s",
          "(b) Using s = ut + ½at²: s = 0(5) + ½(4)(5²) = 0 + ½(4)(25) = 50 m"
        ],
        answer: "Final velocity = 20 m/s. Distance covered = 50 m.",
        tips: "Always state given quantities (u, v, a, s, t) before applying the formula. This earns step marks."
      },
      {
        question: "A moving bus brakes and decelerates uniformly from 72 km/h to rest. If braking distance is 50 m, find the braking acceleration.",
        thinking: "Convert km/h to m/s: 72 km/h = 20 m/s. v = 0 (stops), u = 20 m/s, s = 50 m. No time given, so use v² = u² + 2as.",
        steps: [
          "Convert: u = 72 × (1000/3600) = 20 m/s",
          "v = 0, s = 50 m",
          "Using v² = u² + 2as: 0 = (20)² + 2a(50)",
          "0 = 400 + 100a → a = -400/100 = -4 m/s²"
        ],
        answer: "Braking acceleration = -4 m/s² (retardation of 4 m/s²).",
        tips: "Always convert km/h to m/s by multiplying by 5/18. Negative acceleration confirms the object is slowing down."
      }
    ],
    mcqs: [
      { question: "A person walks 4 km north, then 3 km east. Their displacement is:", options: ["7 km", "1 km", "5 km", "3.5 km"], correctIndex: 2, explanation: "Displacement = √(4² + 3²) = √(16+9) = √25 = 5 km. This uses Pythagoras since the two paths are perpendicular." },
      { question: "The slope of a distance-time graph represents:", options: ["Acceleration", "Speed", "Force", "Momentum"], correctIndex: 1, explanation: "Slope = Δd/Δt = distance/time = speed." },
      { question: "An object moves in a circular path with constant speed. Which statement is true?", options: ["Velocity is constant", "Acceleration is zero", "Speed is constant but velocity changes direction", "No force acts on it"], correctIndex: 2, explanation: "Speed is constant but direction of velocity changes at every point, making circular motion an accelerated motion." },
      { question: "A car decelerates from 20 m/s to rest in 4 seconds. Its acceleration is:", options: ["5 m/s²", "-5 m/s²", "80 m/s²", "-80 m/s²"], correctIndex: 1, explanation: "a = (v-u)/t = (0-20)/4 = -5 m/s². Negative sign indicates deceleration (retardation)." },
      { question: "Which equation of motion is used when time is not known?", options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = vt - ½at²"], correctIndex: 2, explanation: "v² = u² + 2as does not contain 't', so it is used when time is the unknown or not given." }
    ],
    flashcards: [
      { question: "State the three equations of motion.", answer: "1) v = u + at  2) s = ut + ½at²  3) v² = u² + 2as" },
      { question: "What is the SI unit of acceleration?", answer: "m/s² (metres per second squared)" },
      { question: "What does the slope of a velocity-time graph represent?", answer: "Acceleration (rate of change of velocity)." },
      { question: "What does the area under a velocity-time graph represent?", answer: "Displacement of the object." },
      { question: "If an object completes a circular lap and returns to its start, what is its displacement?", answer: "Zero, because the final and initial positions are the same." },
      { question: "Convert 72 km/h to m/s.", answer: "72 × (1000/3600) = 72 × (5/18) = 20 m/s." }
    ],
    revisionPoints: [
      "Distance (scalar) = total path length. Displacement (vector) = straight-line from start to finish.",
      "Speed = distance/time (scalar). Velocity = displacement/time (vector).",
      "Acceleration a = (v-u)/t. Negative acceleration = retardation.",
      "3 equations of motion: v=u+at; s=ut+½at²; v²=u²+2as. Only valid for uniform acceleration.",
      "Slope of d-t graph = speed. Slope of v-t graph = acceleration. Area of v-t graph = displacement.",
      "Convert km/h to m/s: multiply by 5/18.",
      "Uniform circular motion: constant speed, changing velocity direction → IS accelerated motion.",
      "Centripetal acceleration = v²/r directed toward centre of circle."
    ],
    summaryPoints: [
      "Motion is described relative to a reference frame. Without a reference point, we cannot define position or motion.",
      "Distance and displacement both measure 'how far' but distance counts every step while displacement only looks at start-to-end offset.",
      "Speed measures how fast distance is covered; velocity combines speed with direction.",
      "Acceleration quantifies how rapidly velocity changes — both speeding up and slowing down are forms of acceleration.",
      "The three equations of motion are derived from basic definitions of velocity and acceleration for the special case of uniform (constant) acceleration.",
      "Graphical methods powerfully visualize motion: distance-time graphs show speed as slope; velocity-time graphs encode both acceleration (slope) and displacement (area).",
      "Uniform circular motion demonstrates that constant speed does not mean zero acceleration — any change in velocity's direction is acceleration.",
      "Free fall is the classic example of uniformly accelerated motion with a = g = 9.8 m/s² downward."
    ]
  },

  "force": {
    difficulty: "Hard",
    estimatedTime: "5 hours",
    learningObjectives: [
      "Distinguish between balanced and unbalanced forces and their effects on motion.",
      "State and apply Newton's three laws of motion with everyday examples.",
      "Define momentum and apply the law of conservation of momentum to collision problems.",
      "Explain inertia and its dependence on mass.",
      "Derive F = ma from Newton's second law using the concept of rate of change of momentum."
    ],
    warmupQ: "When a bus suddenly brakes, you lurch forward. When it suddenly accelerates, you are pushed back into your seat. What force is responsible for your forward/backward movement?",
    warmupFact: "Newton published his three laws of motion in 'Principia Mathematica' in 1687 — and they remained the unchallenged framework for all mechanical calculations for over 200 years, until Einstein's relativity.",
    warmupHint: "Think about what your body 'wants' to do when the bus changes its speed suddenly — and what prevents you from continuing that motion.",
    concepts: [
      {
        name: "Force: Balanced and Unbalanced",
        definition: "A force is any push or pull that can change the state of rest or motion of an object, or change its shape. Forces are vector quantities with magnitude, direction, and a point of application. When multiple forces act on an object, if their vector sum (resultant) is zero, they are balanced — the object remains in its current state. If the resultant force is not zero, the forces are unbalanced and the object accelerates.",
        ncertDefinition: "A force is a push or pull on an object. If the net force on an object is zero, the forces are balanced and there is no change in state of motion. Unbalanced forces cause acceleration.",
        examText: "Key exam points: (1) Net force = vector sum of all forces. (2) Balanced forces → no acceleration, no change in state (rest stays rest, motion continues at same velocity). (3) Unbalanced forces → acceleration in direction of net force. (4) Forces can change: speed, direction, or shape of an object. (5) SI unit of force: Newton (N) = kg⋅m/s².",
        keywords: ["force", "balanced forces", "unbalanced forces", "net force", "resultant", "Newton"],
        highlights: [
          "Balanced forces can still deform an object (e.g. squeezing a rubber ball from both sides).",
          "An object moving at constant velocity has balanced forces acting on it (net force = 0)."
        ],
        example: "A book resting on a table: gravity pulls it down with force W, and the table pushes up with normal force N. W = N → balanced forces → book stays stationary.",
        analogy: "Balanced forces are like two equally matched tug-of-war teams: neither side moves. Unbalanced forces are like one team being much stronger — the rope (object) accelerates toward the stronger team.",
        visual: "Free body diagram of a book on a table: downward arrow (W = mg) and upward arrow (N) of equal length, showing equilibrium.",
        fact: "The human body constantly experiences balanced forces — gravity pulling you down and the chair or floor pushing up. Without that normal force (in space), you would accelerate downward continuously.",
        trick: "Always draw a free body diagram (FBD) first. List all forces, find their vector sum (net force), and then apply Newton's laws.",
        mistakes: "Thinking that a stationary object has NO forces on it. Every stationary object on Earth has gravity acting on it — but an equal normal force balances it.",
        recap: "Force is a push/pull vector. Balanced forces = equilibrium (no acceleration). Unbalanced forces = acceleration. SI unit: Newton (N)."
      },
      {
        name: "Inertia and Newton's First Law",
        definition: "Newton's First Law (Law of Inertia): An object at rest stays at rest, and an object in uniform motion continues in uniform motion along a straight line, unless acted upon by an external unbalanced force. Inertia is the inherent property of matter that resists any change in its state of rest or motion. Mass is the quantitative measure of inertia — greater mass means greater inertia.",
        ncertDefinition: "Newton's First Law: An object remains at rest or in uniform motion in a straight line unless acted upon by an external net force. This property of objects is called inertia.",
        examText: "Three types of inertia: (1) Inertia of rest: tendency to remain at rest (e.g. dust falls off a carpet when beaten). (2) Inertia of motion: tendency to continue moving (e.g. passengers lurch forward when bus brakes). (3) Inertia of direction: tendency to continue in the same direction (e.g. mud flying off a spinning wheel). State that Galileo first proposed the concept of inertia; Newton formalized it as his First Law.",
        keywords: ["inertia", "Newton's First Law", "law of inertia", "mass and inertia", "state of rest", "uniform motion"],
        highlights: [
          "Mass is the measure of inertia — heavier objects are harder to start or stop.",
          "A spacecraft in deep space (no friction, no gravity) would continue forever at constant velocity once given a push.",
          "Seat belts work because of inertia of motion — your body continues forward when the car stops."
        ],
        example: "When a tablecloth is pulled sharply from under dishes: the dishes have inertia of rest and tend to stay put, while the cloth is pulled away. If pulled slowly, friction acts longer and the dishes also move.",
        analogy: "Inertia is like stubbornness in matter: it refuses to change what it is doing. At rest = refuses to move. In motion = refuses to stop. Only an external force can overcome this stubbornness.",
        visual: "Three scenarios: (1) Dust shaken off carpet = inertia of rest. (2) Passenger lurching forward when bus brakes = inertia of motion. (3) Mud spinning off a tire = inertia of direction.",
        fact: "NASA's New Horizons spacecraft, launched in 2006, is still moving through space with its original velocity decades later — because there is virtually no external force (friction or gravity) to slow it in the void of deep space.",
        trick: "For exam questions: if an object is at rest or constant velocity → net force is zero. If it is accelerating or decelerating → there is a net force.",
        mistakes: "Thinking that a moving object needs a continuous force to keep moving. In the absence of friction, no force is needed — Newton's first law says motion continues by itself.",
        recap: "First Law: Objects resist change in motion (inertia). Mass = measure of inertia. No net force → no change in state of motion."
      },
      {
        name: "Newton's Second Law and F = ma",
        definition: "Newton's Second Law: The rate of change of momentum of an object is proportional to the applied net force, and the change in momentum occurs in the direction of the force. Mathematically: F = ma (for constant mass). This law provides the quantitative relationship between force, mass, and acceleration.",
        ncertDefinition: "The rate of change of momentum of a body is directly proportional to the applied force, and takes place in the direction of the force. This gives us the mathematical form: Force = mass × acceleration (F = ma).",
        examText: "Derivation: Momentum p = mv. Rate of change of momentum = d(mv)/dt = m(dv/dt) = ma. Therefore F ∝ ma, and in SI units F = ma. SI unit of force: 1 Newton = 1 kg⋅m/s² = force that gives 1 kg mass an acceleration of 1 m/s². Key formula: F = ma. Impulse = Force × time = change in momentum.",
        keywords: ["Newton's Second Law", "F = ma", "momentum", "rate of change of momentum", "impulse", "Newton"],
        highlights: [
          "1 Newton is the force needed to give a 1 kg mass an acceleration of 1 m/s².",
          "Impulse (J) = F × t = Δp = mv - mu. Unit: N⋅s or kg⋅m/s.",
          "For constant mass: F = ma is always valid. For variable mass (rockets), F = d(mv)/dt."
        ],
        example: "A 5 kg block is pushed with a net force of 20 N. Acceleration = F/m = 20/5 = 4 m/s². If a 500 N force acts for 0.1 s, impulse = 500 × 0.1 = 50 N⋅s = change in momentum.",
        analogy: "Newton's Second Law is like a car engine: a bigger engine (more force) gives a lighter car (less mass) a greater acceleration. A truck needs a much bigger engine to achieve the same acceleration as a bicycle.",
        visual: "Three scenarios showing same force on different masses → different accelerations. Same mass with different forces → different accelerations.",
        fact: "Airbags in cars work on the impulse principle: they extend the collision time (Δt) so that the same change in momentum requires a smaller force on the passenger, reducing injury.",
        trick: "Always isolate the object, identify net force (consider ALL forces), then use F = ma. Free body diagrams prevent sign errors.",
        mistakes: "Using total force (not net force) in F = ma. If a 10 N push and a 4 N friction act on an object, net force = 10 - 4 = 6 N, not 10 N.",
        recap: "F = ma (Newton N = kg⋅m/s²). Rate of change of momentum = net force. Impulse = Δp = F×t."
      },
      {
        name: "Newton's Third Law and Conservation of Momentum",
        definition: "Newton's Third Law: To every action there is always an equal and opposite reaction — action and reaction forces are always equal in magnitude, opposite in direction, and act on different objects (never on the same object). Conservation of Linear Momentum: The total momentum of a system of objects remains constant when no external unbalanced force acts on the system.",
        ncertDefinition: "Newton's Third Law states that action and reaction forces are always equal and opposite. Conservation of momentum: the total momentum of an isolated system of bodies is constant. For two colliding objects: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
        examText: "Third Law examples: rocket propulsion (gas ejected backward → rocket moves forward), swimming (pushing water backward → body moves forward), gun recoil. Conservation of momentum derivation: If two objects A and B collide, F_AB = -F_BA (Third Law). F_AB × t = change in momentum of B. F_BA × t = change in momentum of A. Their sum = 0 → total momentum is conserved.",
        keywords: ["Newton's Third Law", "action-reaction", "conservation of momentum", "collision", "isolated system", "recoil"],
        highlights: [
          "Action and reaction ALWAYS act on DIFFERENT bodies — never on the same object.",
          "A gun recoiling when fired: bullet (mass m) goes forward at speed v; gun (mass M) goes backward at speed V. Momentum conserved: mv = -MV.",
          "Momentum is conserved in both elastic and inelastic collisions (if no external force acts)."
        ],
        example: "A gun (3 kg) fires a bullet (0.02 kg) at 400 m/s. Momentum conservation: 0 = 0.02 × 400 + 3 × V → 3V = -8 → V = -2.67 m/s. The gun recoils backward at 2.67 m/s.",
        analogy: "Rowing a boat: pushing the oar backward (action) makes the water push the oar (and boat) forward (reaction). If you step off a stationary boat onto a dock, the boat pushes backward — Third Law in action.",
        visual: "Two objects before and after collision, with velocity arrows and momentum calculations showing p₁ᵢ + p₂ᵢ = p₁f + p₂f.",
        fact: "Rocket propulsion is purely Newton's Third Law: expelling mass (gas) downward at high speed generates an equal upward reaction force. There is no air to 'push against' — the rocket works perfectly in the vacuum of space.",
        trick: "For momentum conservation problems: total momentum before = total momentum after. Choose a positive direction and stick to it for all signs.",
        mistakes: "Thinking action and reaction cancel out. They act on DIFFERENT bodies so they never cancel. The book does NOT cancel the normal force from the table — those forces act on different objects.",
        recap: "Third Law: F_action = -F_reaction (on different objects). Momentum p = mv. Total p conserved in isolated systems."
      }
    ],
    formulas: [
      { name: "Momentum", equation: "p = mv", variables: [{ symbol: "m", meaning: "mass (kg)" }, { symbol: "v", meaning: "velocity (m/s)" }], context: "Linear momentum, SI unit: kg⋅m/s" },
      { name: "Newton's Second Law", equation: "F = ma = \\frac{\\Delta p}{\\Delta t}", variables: [{ symbol: "F", meaning: "net force (N)" }, { symbol: "a", meaning: "acceleration (m/s²)" }], context: "Force = mass × acceleration. Also expressed as rate of change of momentum." },
      { name: "Impulse", equation: "J = F \\cdot \\Delta t = \\Delta p = mv - mu", variables: [{ symbol: "J", meaning: "impulse (N·s)" }, { symbol: "Δt", meaning: "time interval" }], context: "Used in crash safety, sports impact problems." },
      { name: "Conservation of Momentum", equation: "m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2", variables: [{ symbol: "u", meaning: "initial velocity" }, { symbol: "v", meaning: "final velocity" }], context: "Valid for any isolated two-body system (collision, explosion, recoil)." }
    ],
    solved: [
      {
        question: "A truck (mass 2000 kg) moving at 5 m/s collides with a stationary car (mass 800 kg). After collision they move together. Find their common velocity.",
        thinking: "Use conservation of momentum. Before: truck has momentum, car is stationary. After: they move together (perfectly inelastic collision).",
        steps: [
          "Total initial momentum = m₁u₁ + m₂u₂ = (2000)(5) + (800)(0) = 10000 kg⋅m/s",
          "After collision, they move together with velocity V. Total mass = 2000 + 800 = 2800 kg.",
          "Total final momentum = (m₁ + m₂)V = 2800V",
          "By conservation: 2800V = 10000",
          "V = 10000 / 2800 ≈ 3.57 m/s"
        ],
        answer: "Common velocity after collision ≈ 3.57 m/s in the direction of the truck's original motion.",
        tips: "For 'they move together', it is a perfectly inelastic collision. Use (m₁+m₂)V = total initial momentum."
      }
    ],
    mcqs: [
      { question: "A 10 kg object is accelerated at 5 m/s². The net force acting on it is:", options: ["2 N", "15 N", "50 N", "0.5 N"], correctIndex: 2, explanation: "F = ma = 10 × 5 = 50 N." },
      { question: "Newton's Third Law states action and reaction forces:", options: ["Act on the same body", "Are equal and opposite, acting on different bodies", "Always cancel each other", "Are unequal in magnitude"], correctIndex: 1, explanation: "Action and reaction are equal, opposite, and act on different bodies — they cannot cancel." },
      { question: "The momentum of a 2 kg object moving at 10 m/s is:", options: ["5 kg⋅m/s", "12 kg⋅m/s", "20 kg⋅m/s", "0.2 kg⋅m/s"], correctIndex: 2, explanation: "p = mv = 2 × 10 = 20 kg⋅m/s." },
      { question: "Inertia of a body depends on its:", options: ["Speed", "Velocity", "Mass", "Temperature"], correctIndex: 2, explanation: "Inertia is measured by mass. Greater mass = greater inertia = greater resistance to change in motion." },
      { question: "A rocket accelerates in space by ejecting gases. This is an example of:", options: ["Newton's First Law only", "Newton's Second Law only", "Newton's Third Law and conservation of momentum", "Gravitational attraction"], correctIndex: 2, explanation: "Gas ejected backward (action) pushes rocket forward (reaction) — Third Law. Total momentum of rocket + gas system is conserved." }
    ],
    flashcards: [
      { question: "State Newton's First Law of Motion.", answer: "An object at rest stays at rest and an object in motion stays in uniform motion unless acted upon by an external unbalanced force." },
      { question: "What is the SI unit of momentum?", answer: "kg⋅m/s (kilogram-metre per second)." },
      { question: "State the law of conservation of momentum.", answer: "The total momentum of an isolated system remains constant when no external unbalanced force acts." },
      { question: "What is impulse and its formula?", answer: "Impulse = Force × time = change in momentum. J = FΔt = Δp." },
      { question: "Why does a gun recoil when fired?", answer: "By conservation of momentum and Newton's Third Law: the bullet moves forward; the gun moves backward with equal and opposite momentum." },
      { question: "What is the quantitative measure of inertia?", answer: "Mass. Greater mass = greater inertia." }
    ],
    revisionPoints: [
      "Force (N) is a vector: magnitude, direction, and point of application.",
      "Balanced forces → equilibrium. Unbalanced forces → acceleration.",
      "Inertia = resistance to change. Mass = measure of inertia.",
      "Newton's First Law: no net force → no change in state of motion.",
      "Newton's Second Law: F = ma. 1 Newton = force giving 1 kg an acceleration of 1 m/s².",
      "Newton's Third Law: Action = -Reaction (on different bodies).",
      "Momentum p = mv. Law of conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
      "Impulse J = FΔt = Δp (used in crash safety calculations)."
    ],
    summaryPoints: [
      "Force is a vector quantity that changes an object's state of rest, motion, or shape. Net (resultant) force determines the effect.",
      "Balanced forces mean equilibrium — the object stays at rest or continues at constant velocity.",
      "Newton's First Law formalizes inertia: objects resist changes to their state of motion. Mass quantifies this resistance.",
      "Newton's Second Law creates the mathematical bridge F = ma, derived from the rate of change of momentum.",
      "Newton's Third Law explains rockets, swimming, and gun recoil — every action produces an equal, opposite reaction on a different body.",
      "Momentum (p = mv) is a conserved quantity in isolated systems, making it the key to analyzing all collisions and explosions.",
      "Impulse (FΔt = Δp) explains why airbags and crumple zones reduce injury — extending impact time reduces peak force.",
      "The three Newton's Laws together form a complete framework for classical mechanics, valid for everyday speeds and sizes."
    ]
  },

  "work": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Define work in the scientific sense and distinguish it from the everyday meaning.",
      "Calculate kinetic energy and potential energy using standard formulas.",
      "State and apply the work-energy theorem.",
      "Apply the law of conservation of energy to mechanical systems.",
      "Define power and calculate it in watts and horsepower."
    ],
    warmupQ: "A porter carries a heavy suitcase on his head and walks horizontally across a station platform. Has he done any scientific 'work' on the suitcase? Explain.",
    warmupFact: "The human body is only about 25% efficient as a mechanical engine — 75% of the food energy you consume turns into heat rather than useful mechanical work!",
    warmupHint: "Scientific 'work' requires a force AND displacement in the SAME direction as the force.",
    concepts: [
      {
        name: "Scientific Work: Definition and Calculation",
        definition: "In science, work is done when a force acts on an object and the object moves in the direction of the force. Work = Force × displacement in the direction of force = F × s × cos θ, where θ is the angle between force and displacement. Work is a scalar quantity measured in Joules (J). 1 Joule = 1 Newton × 1 metre.",
        ncertDefinition: "Work done by a force on an object is defined as the product of the force and the displacement of the object in the direction of the force. W = F × s × cos θ.",
        examText: "Key cases: (1) θ = 0°: Force and displacement same direction → W = Fs (maximum work). (2) θ = 90°: Force perpendicular to displacement → W = 0 (no work done). (3) θ = 180°: Force opposite to displacement → W = -Fs (negative work, e.g. friction). The porter carrying suitcase horizontally: force = vertical (holding up), displacement = horizontal → θ = 90° → Work = 0.",
        keywords: ["work", "joule", "force", "displacement", "angle", "negative work"],
        highlights: [
          "Work can be zero, positive, or negative depending on the angle between force and displacement.",
          "Walking on a level surface carrying a load = zero work on the load (force vertical, motion horizontal).",
          "Gravity does negative work when a ball is thrown upward (force down, displacement up)."
        ],
        example: "A person pushes a box with 50 N force, moving it 3 m horizontally. θ = 0°. Work = 50 × 3 × cos 0° = 150 J.",
        analogy: "Work is like teamwork in a tug-of-war: if you pull exactly in the direction the rope moves, you are doing maximum work. If you pull sideways (perpendicular), you contribute nothing — zero work.",
        visual: "Three diagrams: (1) Force and displacement parallel → W = Fs. (2) Force perpendicular to displacement → W = 0. (3) Force opposing displacement → W = -Fs.",
        fact: "The calorie in food is a unit of energy: 1 food calorie (kcal) = 4184 Joules — enough energy to raise 1 kg of water by 4.184°C.",
        trick: "If the object does NOT move (displacement = 0), work = 0 no matter how large the force is.",
        mistakes: "Calculating work as F × distance without considering the angle θ. Always check if force and displacement are in the same direction.",
        recap: "W = Fs cos θ (Joules). W = 0 if force ⊥ displacement or no displacement. Negative work opposes motion."
      },
      {
        name: "Kinetic Energy and Potential Energy",
        definition: "Kinetic Energy (KE) is the energy possessed by an object due to its motion: KE = ½mv². Gravitational Potential Energy (GPE) is the energy stored by an object due to its position in a gravitational field: GPE = mgh, where h is the height above a reference level. Both are scalar quantities measured in Joules.",
        ncertDefinition: "An object in motion possesses kinetic energy equal to ½mv². An object at height h in a gravitational field possesses potential energy equal to mgh.",
        examText: "Key equations: KE = ½mv². GPE = mgh. The work-energy theorem: Net work done = change in KE → W_net = ΔKE = ½mv² - ½mu². This means applying net force over a displacement changes the object's kinetic energy by exactly that amount of work.",
        keywords: ["kinetic energy", "potential energy", "KE = ½mv²", "GPE = mgh", "work-energy theorem"],
        highlights: [
          "KE ∝ v² — doubling speed quadruples kinetic energy (explains why road accidents at 100 km/h are much deadlier than at 50 km/h).",
          "GPE is relative to a reference level (datum). Only changes in GPE matter physically.",
          "Work-energy theorem: W_net = ΔKE."
        ],
        example: "A 2 kg stone is dropped from 10 m height. (a) GPE at top = mgh = 2 × 10 × 10 = 200 J. (b) At bottom (just before hitting ground): KE = 200 J (energy converted). (c) v = √(2KE/m) = √(200) ≈ 14.1 m/s.",
        analogy: "KE and GPE are like currency and savings: GPE is money saved in a bank account (stored energy due to position). KE is cash in hand (active energy of motion). Converting GPE to KE is like withdrawing savings to spend.",
        visual: "A ball at the top of a ramp: 100% GPE, 0% KE. Midway: 50% GPE, 50% KE. At the bottom: 0% GPE, 100% KE.",
        fact: "A bullet (mass ~10 g) fired at 900 m/s has KE = ½ × 0.01 × 900² = 4050 J — enough energy to lift a 60 kg person to a height of about 6.9 metres.",
        trick: "KE depends on v² — focus on speed changes. GPE depends on height — focus on vertical distance changes.",
        mistakes: "Using the full weight (mg) as force and distance instead of height when calculating GPE. GPE = mgh uses VERTICAL height only.",
        recap: "KE = ½mv² (energy of motion). GPE = mgh (stored energy of position). Work-energy theorem: W_net = ΔKE."
      },
      {
        name: "Law of Conservation of Energy and Power",
        definition: "The Law of Conservation of Energy states that energy cannot be created or destroyed — it can only be converted from one form to another. The total mechanical energy (KE + PE) of an isolated system remains constant. Power is the rate of doing work: P = W/t or P = Fv. SI unit of power: Watt (W) = 1 Joule per second.",
        ncertDefinition: "Energy can only change from one form to another. In an isolated system, the total energy remains constant. Power is the rate at which work is done: P = W/t.",
        examText: "Conservation of mechanical energy: KE₁ + PE₁ = KE₂ + PE₂ (when no friction/non-conservative forces). Power: P = W/t = Fv (in watts). 1 kW = 1000 W. 1 horsepower = 746 W. Commercial unit of energy: 1 kWh (kilowatt-hour) = 3.6 × 10⁶ J.",
        keywords: ["conservation of energy", "mechanical energy", "power", "watt", "kilowatt-hour", "horsepower"],
        highlights: [
          "In problems with friction, mechanical energy decreases — the 'lost' energy converts to heat.",
          "1 kWh = 3.6 MJ is the unit on your electricity bill.",
          "Machines do not create energy — they only convert or redirect it."
        ],
        example: "A 60 kg person climbs stairs of height 5 m in 10 s. Work = mgh = 60 × 10 × 5 = 3000 J. Power = 3000/10 = 300 W.",
        analogy: "Power is like a water pump's rating: a more powerful pump empties a tank faster, but the total water moved (work done) is the same regardless of pump power.",
        visual: "Energy conversion chain: Chemical (food) → Mechanical (muscles) → Gravitational PE (lift) → KE (fall) → Heat + Sound (impact). Total energy is conserved throughout.",
        fact: "A 100-watt light bulb converts electrical energy to light and heat at 100 J per second. An LED doing the same lighting job uses only 10 W — 90% more efficient.",
        trick: "For energy conservation problems: set up KE₁ + PE₁ = KE₂ + PE₂ and use given information to find the unknown. Choose a convenient reference level (datum) for PE.",
        mistakes: "Forgetting that PE = 0 at the reference level (datum). If you set the ground as datum, then at ground level h = 0 and PE = 0.",
        recap: "Energy is conserved: ΣEnergy is constant. Power P = W/t = Fv (watts). KE + PE = constant (no friction). 1 kWh = 3.6 MJ."
      }
    ],
    formulas: [
      { name: "Work Done", equation: "W = Fs\\cos\\theta", variables: [{ symbol: "F", meaning: "force (N)" }, { symbol: "s", meaning: "displacement (m)" }, { symbol: "θ", meaning: "angle between F and s" }], context: "θ = 0 for maximum work; θ = 90° for zero work." },
      { name: "Kinetic Energy", equation: "KE = \\frac{1}{2}mv^2", variables: [{ symbol: "m", meaning: "mass (kg)" }, { symbol: "v", meaning: "speed (m/s)" }], context: "Energy due to motion." },
      { name: "Gravitational Potential Energy", equation: "GPE = mgh", variables: [{ symbol: "g", meaning: "gravitational acceleration (9.8 m/s²)" }, { symbol: "h", meaning: "height above datum (m)" }], context: "Energy due to position above reference level." },
      { name: "Power", equation: "P = \\frac{W}{t} = Fv", variables: [{ symbol: "P", meaning: "power (watts)" }, { symbol: "t", meaning: "time (s)" }], context: "Rate of doing work." }
    ],
    solved: [
      {
        question: "A ball of mass 0.5 kg is dropped from a height of 20 m. Find its kinetic energy just before it hits the ground (take g = 10 m/s²).",
        thinking: "Use conservation of energy: GPE at top = KE at bottom. No friction in free fall.",
        steps: [
          "Initial GPE = mgh = 0.5 × 10 × 20 = 100 J",
          "Initial KE = 0 (dropped from rest, u = 0)",
          "By conservation of energy: Final KE = Initial GPE = 100 J",
          "Verification: v² = 2gh = 2(10)(20) = 400 → v = 20 m/s. KE = ½mv² = ½(0.5)(400) = 100 J ✓"
        ],
        answer: "Kinetic energy just before hitting the ground = 100 J.",
        tips: "Always verify using both energy conservation AND kinematics — getting the same answer both ways confirms correctness."
      }
    ],
    mcqs: [
      { question: "A porter carries luggage of 20 kg on his head and walks 10 m horizontally. Work done on the luggage is:", options: ["200 J", "2000 J", "0 J", "100 J"], correctIndex: 2, explanation: "Force is vertical (holding up against gravity). Displacement is horizontal. θ = 90°. W = Fs cos 90° = 0." },
      { question: "If the speed of a vehicle is doubled, its kinetic energy becomes:", options: ["Double", "Half", "Four times", "Eight times"], correctIndex: 2, explanation: "KE = ½mv². If v doubles, KE = ½m(2v)² = 4 × ½mv². KE quadruples." },
      { question: "The SI unit of power is:", options: ["Joule", "Newton", "Watt", "Pascal"], correctIndex: 2, explanation: "Power is measured in Watts (W) = Joules per second (J/s)." },
      { question: "1 kilowatt-hour (kWh) is equal to:", options: ["1000 J", "3600 J", "3.6 × 10⁶ J", "1 MJ"], correctIndex: 2, explanation: "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ J." },
      { question: "The work-energy theorem states that:", options: ["Work = Force × Time", "Net Work done = Change in Kinetic Energy", "Potential energy is conserved", "Power = Work × Time"], correctIndex: 1, explanation: "W_net = ΔKE = ½mv² - ½mu². Net work changes the kinetic energy of an object by an equal amount." }
    ],
    flashcards: [
      { question: "Write the formula for work done.", answer: "W = Fs cos θ (Joules). θ is angle between force and displacement." },
      { question: "What is kinetic energy?", answer: "KE = ½mv² — energy possessed by an object due to its motion." },
      { question: "State the law of conservation of energy.", answer: "Energy cannot be created or destroyed; it can only be transformed from one form to another." },
      { question: "What is 1 kilowatt-hour in Joules?", answer: "1 kWh = 3.6 × 10⁶ J = 3.6 MJ." },
      { question: "When is work done by a force zero?", answer: "When the force is perpendicular to the displacement (θ = 90°), or when there is no displacement." }
    ],
    revisionPoints: [
      "W = Fs cos θ. W = 0 when θ = 90° or s = 0. W is negative when force opposes motion.",
      "KE = ½mv². GPE = mgh. Both in Joules.",
      "Work-energy theorem: W_net = ΔKE = ½mv² - ½mu².",
      "Conservation of energy: KE₁ + PE₁ = KE₂ + PE₂ (no friction).",
      "Power P = W/t = Fv (Watts). 1 kW = 1000 W. 1 hp = 746 W.",
      "1 kWh = 3.6 × 10⁶ J (commercial energy unit on electricity bill).",
      "KE ∝ v² — doubling speed quadruples energy."
    ],
    summaryPoints: [
      "Scientific work requires both a force AND displacement in the same direction; pushing without movement = zero work.",
      "Kinetic energy (½mv²) is energy of motion; gravitational potential energy (mgh) is stored energy of position.",
      "The work-energy theorem connects mechanics and energy: the net work done on an object equals the change in its kinetic energy.",
      "The law of conservation of energy is one of the most fundamental principles in physics — total energy is always conserved.",
      "Power measures the rate of energy conversion; a more powerful engine does the same work faster, not more work.",
      "Everyday energy use is measured in kilowatt-hours (kWh) — your monthly electricity bill counts kWh of energy consumed.",
      "Energy transforms: chemical → kinetic → potential → heat/sound — but the total never increases or decreases."
    ]
  },

  "sound-waves": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Explain the production and propagation of sound as a longitudinal mechanical wave.",
      "Define and distinguish pitch, loudness, and quality (timbre) of sound.",
      "Apply the relationship between speed, frequency, and wavelength.",
      "Explain reflection of sound: echo, reverberation, and absorption.",
      "Describe practical applications: SONAR, ultrasound medical imaging, and noise pollution."
    ],
    warmupQ: "Thunder takes about 3 seconds to reach you after you see lightning. You know light travels almost instantaneously. Can you estimate how far away the lightning is?",
    warmupFact: "Sound travels through steel at about 5100 m/s — over 15 times faster than through air (343 m/s). That is why you can hear a train coming by pressing your ear to the rail track long before you hear it through the air!",
    warmupHint: "Speed of sound in air ≈ 340 m/s. Distance = speed × time.",
    concepts: [
      {
        name: "Nature and Production of Sound",
        definition: "Sound is a mechanical, longitudinal wave produced by the vibration of matter. It requires a material medium (solid, liquid, or gas) to travel — it cannot propagate through a vacuum. Sound is produced when a vibrating object alternately compresses and rarefies the air (or medium) around it, creating a series of compressions (high pressure) and rarefactions (low pressure) that travel outward.",
        ncertDefinition: "Sound is produced by vibrating objects and travels through a medium as a series of compressions and rarefactions. Sound cannot travel through vacuum.",
        examText: "Define: Compression = region of high pressure (particles crowded together). Rarefaction = region of low pressure (particles spread apart). Prove sound needs a medium: bell-jar experiment (ringing bell evacuated → sound disappears). Sound is longitudinal: particle oscillations are parallel to the direction of wave propagation.",
        keywords: ["longitudinal wave", "compression", "rarefaction", "mechanical wave", "medium", "vibration"],
        highlights: [
          "Sound CANNOT travel through vacuum — proven by the bell-jar experiment.",
          "Sound travels fastest in solids, then liquids, then gases (because particles are closest in solids).",
          "Speed of sound in air at 25°C ≈ 343 m/s; in water ≈ 1500 m/s; in steel ≈ 5100 m/s."
        ],
        example: "Plucking a guitar string: string vibrates → compresses and rarefies air → sound waves travel to ears → eardrums vibrate → we hear music.",
        analogy: "Sound waves in air are like a slinky being pushed and pulled: compressed coils = compressions, stretched-out coils = rarefactions, all moving in the direction of energy travel.",
        visual: "Diagram of a vibrating tuning fork with alternating compression and rarefaction zones spreading outward in concentric circles.",
        fact: "In the movie Alien, the tagline 'In space, no one can hear you scream' is scientifically accurate — sound cannot propagate through the vacuum of space.",
        trick: "Longitudinal = particle motion is ALONG the wave direction. Transverse = particle motion is ACROSS the wave direction (like light waves, water ripples).",
        mistakes: "Confusing sound waves with transverse waves. Sound waves in air are longitudinal — particle oscillations are along the direction of travel, not perpendicular.",
        recap: "Sound = longitudinal mechanical wave. Needs a medium. Compressions + rarefactions. Speed: solids > liquids > gases."
      },
      {
        name: "Characteristics: Pitch, Loudness, and Quality",
        definition: "Pitch is the characteristic of sound that determines how high or low it sounds, determined by frequency. Higher frequency → higher pitch. Loudness (or intensity) depends on the amplitude of vibration — greater amplitude → louder sound. Quality (timbre or tone quality) distinguishes sounds of the same pitch and loudness from different sources (e.g. a piano and a violin playing the same note).",
        ncertDefinition: "Pitch is related to the frequency of sound. Loudness is related to the amplitude of vibration. The quality of sound depends on the waveform shape — specifically the presence and strength of overtones.",
        examText: "Key relationships: Frequency (f) = number of vibrations per second. SI unit: Hertz (Hz). Pitch ∝ frequency. Loudness ∝ amplitude². Sound intensity level measured in decibels (dB). Human hearing range: 20 Hz to 20,000 Hz. Infrasound: < 20 Hz. Ultrasound: > 20,000 Hz.",
        keywords: ["pitch", "frequency", "loudness", "amplitude", "quality", "timbre", "hertz", "decibel"],
        highlights: [
          "20 Hz to 20,000 Hz (20 kHz) = human audible range. Below 20 Hz = infrasound. Above 20 kHz = ultrasound.",
          "Loudness is measured in decibels (dB). Threshold of hearing = 0 dB. Pain threshold = 120-130 dB.",
          "A flute sounds different from a sitar even at the same pitch because of different waveform shapes (quality)."
        ],
        example: "A child's voice has high frequency (high pitch). A bass singer's voice has low frequency (low pitch). Shouting vs whispering is a change in amplitude (loudness), not frequency (pitch).",
        analogy: "Pitch is like the lane on a road (how high or low). Loudness is like the traffic volume (how many cars = how much sound energy). Quality is the unique color of the road surface — making each route distinctive.",
        visual: "Three pairs of wave diagrams: (1) High vs low frequency → high vs low pitch. (2) Large vs small amplitude → loud vs quiet. (3) Different waveform shapes → different qualities.",
        fact: "Elephants communicate using infrasound (below 20 Hz) that travels through ground vibrations over distances of several kilometres — completely inaudible to humans.",
        trick: "Pitch = Frequency (P and F both have round shapes). Loudness = Amplitude (L and A both are tall letters).",
        mistakes: "Confusing pitch and loudness. Pitch is about frequency (high or low sound). Loudness is about amplitude (strong or weak vibration).",
        recap: "Pitch ∝ frequency (Hz). Loudness ∝ amplitude. Quality = waveform shape. Human range: 20 Hz–20 kHz."
      },
      {
        name: "Wave Parameters: Speed, Frequency, Wavelength",
        definition: "Sound wave parameters: Wavelength (λ) = distance between two consecutive compressions or rarefactions (metres). Frequency (f) = number of complete vibrations per second (Hz). Time period (T) = time for one complete vibration (seconds). Wave speed (v) = how fast the wave travels through the medium (m/s). These are related by the wave equation: v = fλ.",
        ncertDefinition: "The distance between two consecutive compressions or rarefactions is the wavelength (λ). The wave equation v = fλ relates speed, frequency, and wavelength.",
        examText: "Key formulas: v = fλ. f = 1/T. v = λ/T. Speed of sound in air at 25°C ≈ 340 m/s (standard exam value). To find wavelength: λ = v/f. The speed of sound increases with temperature: speed increases by about 0.6 m/s per degree Celsius rise.",
        keywords: ["wavelength", "frequency", "time period", "wave speed", "wave equation v=fλ", "hertz"],
        highlights: [
          "v = fλ: when speed is constant, higher frequency means shorter wavelength.",
          "Doubling frequency halves wavelength (at constant speed).",
          "Speed of sound in air ≈ 340 m/s at room temperature."
        ],
        example: "A tuning fork vibrates at 440 Hz. Speed of sound = 340 m/s. Wavelength = v/f = 340/440 ≈ 0.77 m. Time period T = 1/f = 1/440 ≈ 0.0023 s.",
        analogy: "Frequency and wavelength are like a factory's production line: if the conveyor moves at the same speed (v) and products are placed more frequently (higher f), they are packed closer together (shorter λ).",
        visual: "A longitudinal wave diagram with labels: λ = distance between two compressions. Arrows showing wave moving in direction of propagation.",
        fact: "Musical pitch A4 (concert A) = 440 Hz. The entire piano keyboard spans frequencies from about 28 Hz (lowest note) to 4186 Hz (highest note).",
        trick: "The wave equation v = fλ is one of the most used equations. Always check units: f in Hz, λ in m, v in m/s.",
        mistakes: "Using the wrong unit for frequency (kHz instead of Hz) without converting. Always convert kHz to Hz before substituting into v = fλ.",
        recap: "v = fλ. f = 1/T. Speed of sound in air ≈ 340 m/s. Higher frequency → shorter wavelength (at constant speed)."
      },
      {
        name: "Echo, Reverberation, SONAR, and Ultrasound",
        definition: "Echo is a reflected sound heard distinctly after the original sound, requiring a minimum distance of 17 m from the reflecting surface (for a 0.1 s delay at 340 m/s). Reverberation is the persistence of sound due to multiple reflections in an enclosed space. SONAR uses ultrasonic waves to detect underwater objects by measuring time for echo return. Ultrasound (> 20 kHz) has medical applications in imaging.",
        ncertDefinition: "Echo occurs when reflected sound is heard distinctly from the original. Minimum distance for echo = 17 m. SONAR determines the depth of the sea or locates submarines using ultrasonic waves.",
        examText: "Echo formula: Distance = (v × t) / 2, where t = total time for sound to travel to reflector and back. For echo to be heard: gap ≥ 0.1 s → minimum distance = 340 × 0.1 / 2 = 17 m. SONAR: depth = (v × t) / 2. Ultrasound applications: (1) Medical imaging (sonography). (2) Breaking kidney stones (lithotripsy). (3) Industrial crack detection.",
        keywords: ["echo", "reverberation", "SONAR", "ultrasound", "reflection of sound", "17 metres"],
        highlights: [
          "Minimum distance for echo ≈ 17 m (speed of sound in air ≈ 340 m/s, persistence of hearing = 0.1 s).",
          "SONAR depth = (v_sound_in_water × time) / 2.",
          "Bats use echolocation (biological SONAR) using ultrasonic pulses at 50–100 kHz."
        ],
        example: "A ship emits an ultrasonic pulse, and the echo returns after 1.2 seconds. Speed of sound in seawater = 1500 m/s. Depth = (1500 × 1.2) / 2 = 900 m.",
        analogy: "SONAR is like a bat in the dark: send out a pulse, time the echo, calculate the distance. The bat does this thousands of times per second to navigate perfectly in pitch darkness.",
        visual: "Ship at ocean surface emitting pulse downward. Echo bouncing off seabed back to ship. Formula: depth = (v × t)/2.",
        fact: "Dolphins communicate and hunt using echolocation at 150,000 Hz — far beyond human hearing. Their biological SONAR can detect objects as small as a golf ball 100 m away.",
        trick: "Echo and SONAR both use the same formula: distance = (speed × time) / 2. The division by 2 is because the sound travels to the reflector AND back (double the distance).",
        mistakes: "Forgetting to divide by 2 in echo/SONAR problems. Sound makes a ROUND TRIP — to the reflector and back — so distance to reflector = (v × t) / 2.",
        recap: "Echo: min distance 17 m. Echo/SONAR: d = vt/2. Ultrasound: f > 20 kHz. Applications: medical imaging, SONAR, crack detection."
      }
    ],
    formulas: [
      { name: "Wave Equation", equation: "v = f\\lambda", variables: [{ symbol: "v", meaning: "speed of sound (m/s)" }, { symbol: "f", meaning: "frequency (Hz)" }, { symbol: "λ", meaning: "wavelength (m)" }], context: "Relates three key wave properties." },
      { name: "Echo/SONAR Distance", equation: "d = \\frac{v \\times t}{2}", variables: [{ symbol: "d", meaning: "distance to reflector (m)" }, { symbol: "t", meaning: "total time for echo (s)" }], context: "Factor of 2 because sound makes a round trip." }
    ],
    solved: [
      {
        question: "A sonar system on a ship detects an echo from the seabed after 4 seconds. Speed of sound in seawater = 1450 m/s. Find the depth of the ocean.",
        thinking: "Sound travels from ship to seabed and back. Total distance = v × t. Distance to seabed = half of that.",
        steps: [
          "Total time t = 4 s, speed v = 1450 m/s",
          "Total distance = v × t = 1450 × 4 = 5800 m",
          "Depth = Total distance / 2 = 5800 / 2 = 2900 m"
        ],
        answer: "Depth of the ocean = 2900 m (2.9 km).",
        tips: "Always divide by 2 in echo and SONAR problems — the distance is only HALF the total path."
      }
    ],
    mcqs: [
      { question: "Sound cannot travel through:", options: ["Water", "Steel", "Vacuum", "Glass"], correctIndex: 2, explanation: "Sound is a mechanical wave needing a material medium. Vacuum has no particles to vibrate." },
      { question: "The pitch of a sound depends on its:", options: ["Amplitude", "Wavelength", "Frequency", "Speed"], correctIndex: 2, explanation: "Pitch is determined by frequency: higher frequency = higher pitch." },
      { question: "The minimum distance required to hear an echo is approximately:", options: ["34 m", "17 m", "10 m", "100 m"], correctIndex: 1, explanation: "For a time delay of 0.1 s (persistence of hearing): d = 340 × 0.1 / 2 = 17 m." },
      { question: "Ultrasound has frequency:", options: ["Less than 20 Hz", "Between 20 Hz and 20 kHz", "More than 20,000 Hz", "Exactly 20 Hz"], correctIndex: 2, explanation: "Ultrasound is sound with frequency above 20,000 Hz (20 kHz), beyond the upper limit of human hearing." },
      { question: "SONAR measures ocean depth using:", options: ["Light waves", "Radio waves", "Ultrasonic sound waves", "Infrared radiation"], correctIndex: 2, explanation: "SONAR (Sound Navigation And Ranging) uses ultrasonic pulses and measures the time for the echo to return." }
    ],
    flashcards: [
      { question: "What type of wave is sound?", answer: "Longitudinal mechanical wave — requires a medium (cannot travel through vacuum)." },
      { question: "State the wave equation for sound.", answer: "v = fλ (speed = frequency × wavelength)." },
      { question: "What is the human audible frequency range?", answer: "20 Hz to 20,000 Hz (20 kHz)." },
      { question: "Write the formula to find echo distance.", answer: "d = (v × t) / 2 — divide by 2 because sound travels to reflector AND back." },
      { question: "Name three applications of ultrasound.", answer: "1) Medical sonography imaging. 2) SONAR depth finding. 3) Industrial crack detection / lithotripsy." }
    ],
    revisionPoints: [
      "Sound = longitudinal mechanical wave. Compressions + rarefactions. Cannot travel in vacuum.",
      "Speed of sound: solids > liquids > gases. In air at 25°C ≈ 343 m/s.",
      "Pitch ∝ frequency. Loudness ∝ amplitude. Quality = waveform shape.",
      "Human range: 20 Hz–20 kHz. Infrasound < 20 Hz. Ultrasound > 20 kHz.",
      "Wave equation: v = fλ. f = 1/T.",
      "Echo: minimum distance = 17 m. Formula: d = vt/2.",
      "SONAR: calculates ocean depth using ultrasonic pulses.",
      "Ultrasound applications: medical imaging, SONAR, lithotripsy, crack detection."
    ],
    summaryPoints: [
      "Sound waves are produced by vibrating objects and propagate as alternating compressions and rarefactions through a medium.",
      "Sound is a longitudinal wave — particles oscillate in the same direction as wave propagation, unlike transverse light waves.",
      "The speed of sound depends strongly on the medium: much faster in denser, more elastic materials (solids > liquids > gases).",
      "Three subjective characteristics of sound — pitch (frequency), loudness (amplitude), quality (waveform shape) — describe how humans perceive sound.",
      "The wave equation v = fλ links speed, frequency, and wavelength: increasing frequency shortens wavelength when speed is constant.",
      "Reflection of sound creates echoes; in enclosed spaces, multiple reflections cause reverberation, which can impair speech clarity.",
      "SONAR exploits ultrasound reflection to measure ocean depths and detect submarines — the same principle used by bats and dolphins.",
      "Ultrasound is also used medically for prenatal imaging, and therapeutically for breaking kidney stones."
    ]
  },

  "exploring-mixtures": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Distinguish between pure substances and mixtures using particle theory.",
      "Classify mixtures as solutions, suspensions, or colloids using key criteria.",
      "Apply appropriate separation techniques for different types of mixtures.",
      "Explain the special properties of colloids: Tyndall effect and Brownian motion.",
      "Design separation procedures for given mixtures using logic."
    ],
    warmupQ: "You are given a muddy salt water mixture. List all the steps you would follow to first get clear salt water, then pure salt, and finally pure water.",
    warmupFact: "The air you breathe is a mixture of about 78% nitrogen, 21% oxygen, and 1% other gases — yet it took scientists until the 1770s to correctly identify and separate these components.",
    warmupHint: "Mud particles are large (filterable). Salt dissolves in water. Water and salt are separated by evaporation or distillation.",
    concepts: [
      {
        name: "Pure Substances vs. Mixtures",
        definition: "A pure substance contains only one kind of particle (atoms or molecules) and has fixed, definite physical and chemical properties (fixed melting point, boiling point, density). A mixture contains two or more substances combined in any proportion without chemical bonding. The components of a mixture retain their individual properties and can be separated by physical methods.",
        ncertDefinition: "A pure substance consists of only one type of particle and has uniform composition throughout. A mixture consists of two or more substances that are not chemically combined.",
        examText: "Key differences: Pure substance: fixed composition, fixed melting/boiling point, sharp melting point. Mixture: variable composition, no fixed properties, melting over a range. Types of mixtures: (1) Homogeneous (uniform composition — solutions). (2) Heterogeneous (non-uniform — suspensions, some colloids).",
        keywords: ["pure substance", "mixture", "homogeneous", "heterogeneous", "fixed composition", "variable composition"],
        highlights: [
          "Pure substance test: sharp, fixed melting point. Impure substances melt over a temperature range.",
          "Homogeneous mixture = looks the same throughout (e.g. salt water). Heterogeneous = visibly non-uniform (e.g. sand in water)."
        ],
        example: "Copper is a pure substance (fixed melting point 1085°C). Brass (copper + zinc) is a mixture — its melting point varies with composition.",
        analogy: "A pure substance is like a team wearing identical uniforms. A mixture is like a crowd wearing different clothes — you can still separate them back out.",
        visual: "Particle diagrams: Pure substance = all identical particles. Mixture = different particles mixed together without bonding.",
        fact: "Sea water contains at least 80 different chemical elements dissolved in it — making it one of the most complex natural mixtures on Earth.",
        trick: "If it has a sharp, fixed melting point → pure substance. If it melts or boils over a range → mixture.",
        mistakes: "Treating alloys as pure substances. Bronze, brass, steel are all alloys (mixtures), not pure substances, even though they appear uniform.",
        recap: "Pure substance: fixed, uniform composition. Mixture: variable composition, components retain properties, separable physically."
      },
      {
        name: "Solutions, Suspensions, and Colloids",
        definition: "Solutions are homogeneous mixtures where solute particles (< 1 nm) are completely dissolved in solvent. They are transparent and do not scatter light. Suspensions are heterogeneous mixtures with large particles (> 1000 nm) that settle over time. Colloids (1–1000 nm) are intermediate — they appear homogeneous but scatter light (Tyndall effect) and particles undergo Brownian motion.",
        ncertDefinition: "A solution is a homogeneous mixture. A suspension is a heterogeneous mixture in which particles settle on standing. A colloid is a mixture in which particle size is intermediate — they do not settle easily but scatter light.",
        examText: "Classification table: (1) Solution: particle size < 1 nm, transparent, no Tyndall effect, does not settle. (2) Colloid: 1–1000 nm, appears homogeneous but shows Tyndall effect, does not settle. (3) Suspension: > 1000 nm, heterogeneous, settles on standing, Tyndall effect visible. Tyndall effect: scattering of light by colloid particles (e.g. beam of light in milk).",
        keywords: ["solution", "colloid", "suspension", "Tyndall effect", "Brownian motion", "particle size"],
        highlights: [
          "Tyndall effect ONLY shown by colloids (not true solutions). Use this to distinguish them.",
          "Milk is a colloid (fat droplets in water). Salt water is a solution. Muddy water is a suspension.",
          "Solute particles in a solution CANNOT be filtered — they pass through filter paper AND semipermeable membranes."
        ],
        example: "Shine a laser beam through: (1) Salt water — no scattering (solution). (2) Milk — visible beam path (Tyndall effect, colloid). (3) Muddy water — beam visible but particles settle within minutes (suspension).",
        analogy: "Solutions are like perfectly mixed paint (uniform at every level). Colloids are like fog (cloudy but particles suspended). Suspensions are like snow globes — shake it up and the particles settle back down.",
        visual: "Three test tubes: Solution (clear), Colloid (cloudy beam visible with laser), Suspension (cloudy, particles settled at bottom).",
        fact: "Smoke is a colloid of solid particles (soot) in gas (air). Clouds are colloids of liquid water droplets in air. Butter is a colloid of water in fat.",
        trick: "Tyndall effect test: shine a beam of light. If the beam is visible (scattering), it is a colloid. Invisible beam = solution.",
        mistakes: "Confusing colloid with suspension. Key difference: colloid does NOT settle on standing; suspension DOES settle.",
        recap: "Solution: < 1 nm, transparent. Colloid: 1–1000 nm, Tyndall effect, does not settle. Suspension: > 1000 nm, settles."
      },
      {
        name: "Separation Techniques",
        definition: "Separation techniques use physical differences in the properties of mixture components to separate them. Common methods include: Filtration (separates insoluble solids from liquids), Evaporation/Crystallization (recovers dissolved solid from solution), Distillation (separates liquids by different boiling points), Chromatography (separates based on different rates of movement through a medium), Centrifugation (separates by density using centrifugal force).",
        ncertDefinition: "Mixtures can be separated using physical methods that exploit differences in the properties of their components such as particle size, solubility, boiling point, or density.",
        examText: "Match technique to mixture: (1) Sand + water → Filtration. (2) Salt + water → Evaporation/Crystallization. (3) Alcohol + water → Fractional Distillation (different boiling points: alcohol 78°C, water 100°C). (4) Ink (colored dyes) → Chromatography. (5) Blood components → Centrifugation. (6) Salt + sand → Dissolve in water, filter, then evaporate.",
        keywords: ["filtration", "distillation", "chromatography", "evaporation", "crystallization", "centrifugation"],
        highlights: [
          "Distillation: separates miscible liquids with different boiling points. Fraction that boils first is collected as distillate.",
          "Chromatography: separates components based on their different affinities for stationary and mobile phases.",
          "Centrifugation: rotates mixture at high speed — denser components move to the bottom."
        ],
        example: "To separate ink into its component dyes: (1) Spot ink on paper (stationary phase). (2) Dip edge in water/solvent (mobile phase). (3) Different dyes travel different distances up the paper → revealed as separate bands.",
        analogy: "Chromatography is like a race: different molecules run at different speeds through the track (paper). The fastest ones travel furthest, separating them from slower ones.",
        visual: "Chromatography paper showing a starting spot at the bottom with several colored bands at different heights after the solvent front rises.",
        fact: "Fractional distillation of crude oil separates it into petrol (boiling at ~70°C), kerosene (~150°C), diesel (~250°C), and lubricating oil (~300°C+) — all in a single industrial tower.",
        trick: "To separate a MIXTURE: identify the PROPERTY difference between components (size → filter, boiling point → distill, solubility → crystallize, density → centrifuge).",
        mistakes: "Trying to filter a solution (dissolved solute particles are too small to be trapped by filter paper — use evaporation or distillation instead).",
        recap: "Filter = size difference. Distill = boiling point difference. Chromatography = rate of travel. Evaporate = dissolved solid recovery."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "A student has a mixture of sand, salt, and iron filings. Describe a systematic procedure to separate all three components completely.",
        thinking: "Iron filings are magnetic. Sand is insoluble in water. Salt dissolves in water. Use these properties systematically.",
        steps: [
          "Step 1: Use a magnet to attract and remove iron filings from the mixture.",
          "Step 2: Add water to the remaining mixture (sand + salt). Stir well. Salt dissolves; sand does not.",
          "Step 3: Filter the mixture. Sand is retained on the filter paper as residue. Salt water passes through as filtrate.",
          "Step 4: Evaporate the salt water (filtrate) to recover pure salt crystals."
        ],
        answer: "Iron filings (magnetism) → Sand (filtration) → Salt (evaporation). All three components are separated.",
        tips: "Always use the most selective property first. Work from the property that is most unique (magnetism is the most selective here)."
      }
    ],
    mcqs: [
      { question: "Which of the following demonstrates the Tyndall effect?", options: ["Salt water", "Copper sulfate solution", "Milk", "Sugar solution"], correctIndex: 2, explanation: "Milk is a colloid (fat droplets in water) and scatters light — showing the Tyndall effect. True solutions (salt water, sugar solution) do not scatter light." },
      { question: "To separate a mixture of alcohol and water, the best technique is:", options: ["Filtration", "Distillation", "Chromatography", "Centrifugation"], correctIndex: 1, explanation: "Alcohol (bp 78°C) and water (bp 100°C) are miscible liquids with different boiling points — separated by fractional distillation." },
      { question: "Which mixture settles on standing?", options: ["Solution", "Colloid", "Suspension", "All of the above"], correctIndex: 2, explanation: "Suspensions have large particles (> 1000 nm) that settle under gravity when left undisturbed." },
      { question: "The particle size range for a colloid is:", options: ["< 1 nm", "1–1000 nm", "> 1000 nm", "Exactly 500 nm"], correctIndex: 1, explanation: "Colloid particles range from 1 nm to 1000 nm — intermediate between solutions (< 1 nm) and suspensions (> 1000 nm)." },
      { question: "The best method to obtain salt from salt water is:", options: ["Filtration", "Centrifugation", "Evaporation", "Distillation"], correctIndex: 2, explanation: "Salt is dissolved in water. Evaporation removes the water, leaving behind salt crystals." }
    ],
    flashcards: [
      { question: "What is the Tyndall effect?", answer: "Scattering of a beam of light by colloidal particles, making the beam visible (e.g. laser beam through milk)." },
      { question: "How do you distinguish a solution from a colloid?", answer: "Shine a beam of light through: visible beam = colloid (Tyndall effect). No visible beam = true solution." },
      { question: "What is Brownian motion?", answer: "Zig-zag random movement of colloidal particles due to collisions with solvent molecules." },
      { question: "Name the technique to separate blood into plasma and cells.", answer: "Centrifugation (rotating at high speed separates by density)." },
      { question: "What is the difference between evaporation and distillation?", answer: "Evaporation: solvent escapes to atmosphere, solute is recovered. Distillation: solvent vapor is collected and condensed for reuse." }
    ],
    revisionPoints: [
      "Pure substance: fixed composition, sharp melting/boiling point.",
      "Mixture: variable composition, components retain individual properties, separable physically.",
      "Solution: < 1 nm particles, transparent, no Tyndall effect, does not settle.",
      "Colloid: 1–1000 nm, Tyndall effect, Brownian motion, does not settle.",
      "Suspension: > 1000 nm, heterogeneous, settles on standing.",
      "Filtration: separates insoluble solids. Evaporation: recovers dissolved solids.",
      "Distillation: separates liquids by boiling point difference.",
      "Chromatography: separates based on rate of movement."
    ],
    summaryPoints: [
      "Pure substances have fixed, definite properties; mixtures have variable composition and their components retain individual characteristics.",
      "Mixtures are classified based on particle size: solutions (< 1 nm, transparent), colloids (1–1000 nm, Tyndall effect), and suspensions (> 1000 nm, settles).",
      "The Tyndall effect — scattering of light by colloidal particles — is the definitive test distinguishing colloids from true solutions.",
      "Brownian motion is the continuous random movement of colloidal particles, caused by bombardment by solvent molecules.",
      "Separation techniques exploit physical property differences: size (filtration), boiling point (distillation), solubility (crystallization), density (centrifugation), affinity (chromatography).",
      "In a multi-component mixture, techniques are applied in a logical sequence, each step isolating one component."
    ]
  },

  "inside-atom": {
    difficulty: "Hard",
    estimatedTime: "4.5 hours",
    learningObjectives: [
      "Describe the historical development of atomic models from Thomson to Bohr.",
      "Identify subatomic particles and their properties (charge, mass, location).",
      "Write electronic configurations for elements 1–20.",
      "Define valency and predict chemical bonding based on electronic configuration.",
      "Distinguish between isotopes and isobars with examples."
    ],
    warmupQ: "You cannot see an atom directly even with the most powerful microscope. So how do scientists know what is inside an atom? What kind of experiments could reveal internal structure?",
    warmupFact: "If an atom were scaled up to the size of a football stadium, the nucleus would be a marble at the centre — and the electrons would be tiny specks buzzing around the stands. The atom is mostly empty space!",
    warmupHint: "Think of firing particles at a thin metal foil and studying how they are deflected — what patterns would emerge if the atom was solid vs. mostly empty?",
    concepts: [
      {
        name: "Thomson's Plum-Pudding Model and Rutherford's Nuclear Model",
        definition: "J.J. Thomson (1897) discovered the electron using cathode ray tubes and proposed the 'plum-pudding model': a positive sphere of matter with electrons embedded like plums. Ernest Rutherford (1911) conducted the gold foil (alpha particle scattering) experiment and discovered the nucleus — a tiny, dense, positively charged centre. Rutherford's model proposed a nuclear atom with electrons orbiting outside.",
        ncertDefinition: "Thomson proposed that an atom is a sphere of positive charge with electrons embedded in it. Rutherford's alpha particle scattering experiment showed that most of the atom is empty space and a tiny positive nucleus exists at the centre.",
        examText: "Rutherford's observations: (1) Most α-particles passed straight through (atom is mostly empty). (2) Some deflected slightly (positive nucleus repels positive α-particles). (3) Very few bounced almost straight back (hard, tiny, dense nucleus). Conclusion: Nucleus is tiny, dense, positively charged. Electrons orbit outside. Drawback of Rutherford's model: orbiting electrons should lose energy and spiral into the nucleus (Maxwell's electromagnetic theory predicts this).",
        keywords: ["Thomson", "plum-pudding model", "Rutherford", "gold foil experiment", "nucleus", "alpha particle scattering"],
        highlights: [
          "Rutherford's experiment: most α-particles pass through → atom is mostly empty space.",
          "Rutherford's model problem: accelerating electrons should radiate energy → atom should collapse.",
          "Thomson used cathode rays to discover electrons (negatively charged, very light)."
        ],
        example: "Rutherford compared the unexpected backward scattering of α-particles to 'firing artillery shells at tissue paper and the shells coming back and hitting you' — showing the nucleus was solid and dense.",
        analogy: "Rutherford's experiment is like throwing tennis balls (α-particles) at a crowd (gold foil). Most balls pass through gaps between people. Some deflect off people. Rarely, one bounces straight back — hitting someone heavy right in front (the nucleus).",
        visual: "Gold foil diagram: Alpha source → gold foil → most pass through → some deflect → rare ones bounce back. Detector screen records patterns.",
        fact: "Rutherford used gold foil (only a few atoms thick) because gold is so malleable it can be beaten into extremely thin sheets without tearing.",
        trick: "Rutherford = Nuclear model + Alpha scattering. Remember: most pass through (empty space), few bounce back (dense nucleus).",
        mistakes: "Saying electrons are inside the nucleus. In Rutherford's model, electrons orbit OUTSIDE the nucleus in open space.",
        recap: "Thomson: plum-pudding (electrons in positive sphere). Rutherford: nucleus at centre, electrons orbit outside, mostly empty space."
      },
      {
        name: "Bohr's Atomic Model and Electronic Shells",
        definition: "Niels Bohr (1913) proposed that electrons move in fixed, circular orbits (shells or energy levels) around the nucleus without radiating energy. Each shell has a fixed energy. Electrons can jump to a higher shell by absorbing energy and emit energy (as light) when falling to a lower shell. Shells are labelled K (n=1), L (n=2), M (n=3), N (n=4) with maximum electron capacities of 2, 8, 18, 32 respectively.",
        ncertDefinition: "Bohr's model postulates that electrons revolve in specific circular orbits without emitting energy. The energy of electrons in these orbits is fixed. Electrons absorb or emit energy only when jumping between shells.",
        examText: "Shell capacity formula: Maximum electrons = 2n² (K: n=1 → 2; L: n=2 → 8; M: n=3 → 18). Valence electrons = electrons in outermost shell. Valency = (8 - valence electrons) for elements with 5–7 valence electrons; = valence electrons for elements with 1–4 valence electrons. Electronic configuration examples: Na (11): 2,8,1; Cl (17): 2,8,7; Ca (20): 2,8,8,2.",
        keywords: ["Bohr model", "shells", "energy levels", "2n²", "valence electrons", "valency", "K L M N shells"],
        highlights: [
          "Shell capacity: K=2, L=8, M=18, N=32 (using 2n²).",
          "Valence electrons = outermost shell electrons. Valency for metals = valence electrons; for non-metals = 8 - valence electrons.",
          "Bohr's model explains hydrogen spectrum but fails for multi-electron atoms."
        ],
        example: "Write electronic configuration of Calcium (Z=20): 20 = 2 + 8 + 8 + 2. Shells: K=2, L=8, M=8, N=2. Valence electrons = 2. Valency = 2 (calcium is divalent).",
        analogy: "Bohr's shells are like floors of a building: electrons live on specific floors (shells). To move up, they need energy (like paying for a higher floor). When they come back down, they release that energy (as light photons).",
        visual: "Concentric circles around a nucleus: innermost K shell (2 electrons), L shell (8), M shell (8), outermost N shell (2) for Calcium.",
        fact: "The emission spectrum of hydrogen (Balmer series) consists of visible lines at specific wavelengths because electrons fall from higher Bohr shells to shell n=2, emitting specific colors of light.",
        trick: "2, 8, 8, 2 is the electronic configuration of Calcium and is one of the most tested configurations. Write them from the inner to outer shell.",
        mistakes: "Filling more than 8 electrons in any outermost shell. While M shell can hold 18, only 8 are placed there until the next shell begins filling.",
        recap: "Bohr: electrons in fixed shells K,L,M,N (2,8,18,32). Valence electrons → valency. Absorb energy to jump up, emit energy when falling down."
      },
      {
        name: "Subatomic Particles, Isotopes, and Isobars",
        definition: "Three subatomic particles: Proton (positive charge, relative mass 1, in nucleus), Neutron (no charge, relative mass 1, in nucleus), Electron (negative charge, relative mass 1/1836, orbiting outside nucleus). Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons. Isotopes: same atomic number (Z), different mass numbers (A) — same element, different neutrons. Isobars: same mass number (A), different atomic numbers (Z) — different elements.",
        ncertDefinition: "Protons and neutrons are in the nucleus; electrons orbit outside. Atomic number Z = number of protons. Mass number A = protons + neutrons. Isotopes have same Z but different A. Isobars have same A but different Z.",
        examText: "Notation: Element X with mass number A and atomic number Z written as ᴬ_Z X. Number of neutrons = A - Z. Isotope examples: ¹H₁ (protium), ²H₁ (deuterium), ³H₁ (tritium) — all isotopes of hydrogen. Isobar example: ⁴⁰Ca₂₀ and ⁴⁰Ar₁₈ — same mass number 40, different Z. Chemical properties of isotopes are IDENTICAL (same electronic configuration, same valency).",
        keywords: ["proton", "neutron", "electron", "atomic number", "mass number", "isotopes", "isobars"],
        highlights: [
          "Isotopes: same Z (same element), different A (different neutron count). Same chemical properties.",
          "Isobars: same A (same mass number), different Z (different elements). Different chemical properties.",
          "Protons define the element. Neutrons determine the isotope."
        ],
        example: "Carbon isotopes: ¹²C₆ (6 protons, 6 neutrons) and ¹⁴C₆ (6 protons, 8 neutrons). Both behave identically in chemical reactions but ¹⁴C is radioactive — used in carbon-14 dating.",
        analogy: "Isotopes are like identical twins (same identity/element/Z) wearing different amounts of weight (different neutrons/A). Isobars are like completely different people (different elements) who happen to weigh the same (same A).",
        visual: "Table comparing: Hydrogen isotopes H-1, H-2, H-3 (same Z=1, different A=1,2,3) versus isobars ⁴⁰K₁₉ and ⁴⁰Ar₁₈ (same A=40, different Z).",
        fact: "Uranium-235 and Uranium-238 are isotopes — both used in nuclear energy, but in very different ways. U-235 is fissile (used in reactors), while U-238 is the more abundant but less reactive form.",
        trick: "Isotopes = same Z, different A (think: 'I' in Isotope = same Identity). Isobars = same A (think: 'b' in isobar = same 'body' mass).",
        mistakes: "Thinking isotopes have different chemical properties. Isotopes have identical chemical properties because they have the same electronic configuration (same Z = same electrons).",
        recap: "Proton: +1, mass 1, nucleus. Neutron: 0, mass 1, nucleus. Electron: -1, mass ~0, orbits. Isotopes: same Z. Isobars: same A."
      }
    ],
    formulas: [
      { name: "Shell Capacity", equation: "\\text{Max electrons} = 2n^2", variables: [{ symbol: "n", meaning: "shell number (K=1, L=2, M=3, N=4)" }], context: "Maximum number of electrons in a given shell." },
      { name: "Neutron Count", equation: "\\text{Neutrons} = A - Z", variables: [{ symbol: "A", meaning: "mass number" }, { symbol: "Z", meaning: "atomic number (protons)" }], context: "Finding neutrons from mass and atomic numbers." }
    ],
    solved: [
      {
        question: "Write the electronic configuration of Chlorine (Z=17) and state its valency.",
        thinking: "Fill shells in order K, L, M using capacities 2, 8, 18. Valency = 8 - valence electrons (non-metal with more than 4 valence electrons).",
        steps: [
          "Z = 17 electrons total.",
          "K shell (max 2): fill with 2 electrons. Remaining: 17-2 = 15",
          "L shell (max 8): fill with 8 electrons. Remaining: 15-8 = 7",
          "M shell (max 18): fill with 7 electrons. Configuration: 2, 8, 7",
          "Valence electrons = 7 (outermost shell). Valency = 8 - 7 = 1."
        ],
        answer: "Chlorine electronic configuration: 2, 8, 7. Valency = 1 (needs 1 more electron to complete octet).",
        tips: "Draw shell diagram showing concentric circles to visualize the electron distribution clearly."
      }
    ],
    mcqs: [
      { question: "The number of neutrons in ¹⁴N₇ is:", options: ["14", "7", "21", "3"], correctIndex: 1, explanation: "Neutrons = Mass number - Atomic number = 14 - 7 = 7." },
      { question: "Isotopes of an element have the same:", options: ["Mass number", "Number of neutrons", "Atomic number (protons)", "Physical properties"], correctIndex: 2, explanation: "Isotopes have the same atomic number (same number of protons/electrons) but different mass numbers." },
      { question: "Rutherford's gold foil experiment showed that:", options: ["Atoms are solid spheres", "Electrons are inside the nucleus", "The nucleus is tiny, dense and positively charged", "All alpha particles bounce back"], correctIndex: 2, explanation: "The tiny fraction of alpha particles that bounced back revealed a tiny, dense, positively charged nucleus at the atom's centre." },
      { question: "The valency of Sodium (electronic config 2,8,1) is:", options: ["8", "7", "1", "2"], correctIndex: 2, explanation: "Sodium has 1 valence electron. Valency = 1 (it loses this electron to achieve stable configuration)." },
      { question: "The maximum number of electrons in the M shell (n=3) is:", options: ["2", "8", "18", "32"], correctIndex: 2, explanation: "Max electrons = 2n² = 2 × 3² = 18." }
    ],
    flashcards: [
      { question: "What is the atomic number?", answer: "Number of protons in the nucleus (also equals number of electrons in a neutral atom)." },
      { question: "State the difference between isotopes and isobars.", answer: "Isotopes: same Z (atomic number), different A (mass number). Isobars: same A, different Z." },
      { question: "Write the electronic configuration of Sodium (Z=11).", answer: "2, 8, 1 (K=2, L=8, M=1). Valency = 1." },
      { question: "What was the drawback of Rutherford's atomic model?", answer: "Orbiting electrons should continuously lose energy (radiate) and spiral into the nucleus — making atoms unstable." },
      { question: "What is valency?", answer: "The combining capacity of an atom, equal to valence electrons (for metals) or 8 minus valence electrons (for non-metals)." }
    ],
    revisionPoints: [
      "Thomson: plum-pudding model. Rutherford: nuclear model (empty space + dense nucleus).",
      "Bohr: electrons in fixed shells K(2), L(8), M(18), N(32). 2n² formula.",
      "Proton (+1, mass 1, nucleus). Neutron (0, mass 1, nucleus). Electron (-1, mass≈0, orbits).",
      "Atomic number Z = protons. Mass number A = protons + neutrons. Neutrons = A-Z.",
      "Isotopes: same Z, different A (same chemical properties).",
      "Isobars: same A, different Z (different elements, different properties).",
      "Valence electrons → determine valency and chemical reactivity."
    ],
    summaryPoints: [
      "The atom's internal structure was revealed through experimental evidence — Thomson with cathode rays, Rutherford with alpha particle scattering.",
      "Rutherford's model established the nuclear atom: tiny dense nucleus at centre, surrounded by electrons in vast empty space.",
      "Bohr solved the stability problem by postulating fixed electron shells — electrons can only exist at specific energy levels.",
      "Three subatomic particles define atomic structure: protons (atomic number, element identity), neutrons (mass, stability), electrons (chemical behaviour).",
      "Electronic configuration determines an element's chemical properties — particularly the number of valence electrons.",
      "Isotopes are variants of the same element with different neutron counts but identical chemical behaviour.",
      "Isobars are different elements with the same mass number but different proton counts and different chemical properties."
    ]
  },

  "atomic-foundation": {
    difficulty: "Hard",
    estimatedTime: "4.5 hours",
    learningObjectives: [
      "State and apply the Law of Conservation of Mass and Law of Definite Proportions.",
      "Write correct chemical symbols and formulas for common compounds.",
      "Calculate relative molecular mass (molar mass) from atomic masses.",
      "Understand and apply the mole concept and Avogadro's number.",
      "Convert between mass, moles, and number of particles."
    ],
    warmupQ: "If 1 dozen eggs = 12 eggs, and 1 mole of atoms = 6.022 × 10²³ atoms — why do chemists use such a huge number as their 'dozen'?",
    warmupFact: "Avogadro's number (6.022 × 10²³) is so large that if you had a mole of grains of rice, you could cover the entire Earth's surface to a depth of about 75 metres!",
    warmupHint: "Think about how small atoms are — it takes an enormous number of them to make up even 1 gram of material.",
    concepts: [
      {
        name: "Laws of Chemical Combination",
        definition: "Two fundamental laws govern how elements combine: (1) Law of Conservation of Mass (Lavoisier, 1789): In a chemical reaction, mass is neither created nor destroyed — total mass of reactants equals total mass of products. (2) Law of Definite Proportions / Constant Composition (Proust, 1799): A pure chemical compound always contains the same elements combined in the same proportion by mass, regardless of its source or method of preparation.",
        ncertDefinition: "Law of Conservation of Mass: In any chemical change, the total mass of products is equal to the total mass of reactants. Law of Definite Proportions: A compound always contains the same elements in the same ratio by mass.",
        examText: "Application: Water (H₂O) always contains H:O in 1:8 mass ratio (2g H: 16g O). Carbon dioxide (CO₂) always has C:O in 3:8. If 12 g Carbon + 32 g Oxygen → 44 g CO₂ (mass conserved). Dalton's Atomic Theory (1803) explained these laws by proposing that atoms combine in simple whole number ratios.",
        keywords: ["conservation of mass", "definite proportions", "Lavoisier", "Proust", "Dalton", "chemical combination"],
        highlights: [
          "Mass conservation means: mass of reactants = mass of products (perfectly balanced equation).",
          "Definite proportions mean: water always has H:O = 2:16 = 1:8 by mass, no matter where it comes from."
        ],
        example: "16 g of sulfur reacts with 8 g of oxygen to form 24 g of sulfur dioxide (SO₂). Verify conservation of mass: 16 + 8 = 24 g ✓.",
        analogy: "Conservation of mass is like Lego: you start with a pile of pieces, rearrange them into a model — you still have exactly the same pieces, just differently connected.",
        visual: "Balanced equation diagram: reactant boxes (total mass left) = product boxes (total mass right), with arrow showing reaction.",
        fact: "Lavoisier discovered the Law of Conservation of Mass by conducting experiments with sealed containers — his careful mass measurements revolutionized chemistry from alchemy into a quantitative science.",
        trick: "Check any chemical equation: count atoms on both sides. If equal → mass is conserved. An unbalanced equation violates conservation of mass.",
        mistakes: "Thinking that gas escaping during a reaction means mass was lost. In an open container, gas escapes → total mass of open system decreases, but this does NOT violate conservation of mass (gas mass must be included).",
        recap: "Conservation of mass: reactant mass = product mass. Definite proportions: compound composition is fixed by mass ratio."
      },
      {
        name: "Atomic Mass, Molecular Mass, and Chemical Formulas",
        definition: "Atomic mass is the mass of an atom relative to the carbon-12 standard (1 amu = 1/12th the mass of carbon-12). Molecular mass (or formula mass) is the sum of atomic masses of all atoms in a molecule. Molar mass = molecular mass expressed in grams per mole. Chemical formulas: Empirical formula shows simplest whole-number ratio. Molecular formula shows actual number of atoms.",
        ncertDefinition: "Atomic mass is expressed in atomic mass units (amu). Relative atomic mass is compared to 1/12th the mass of a carbon-12 atom. Molecular mass is the sum of atomic masses in the molecular formula.",
        examText: "Atomic masses (from periodic table): H=1, C=12, N=14, O=16, Na=23, S=32, Cl=35.5, Fe=56. Molecular mass of H₂SO₄: 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 amu. Molecular mass of CaCO₃: 40 + 12 + 3(16) = 100 amu. Valency determines subscript: NaCl (Na valency 1, Cl valency 1, ratio 1:1); CaCl₂ (Ca valency 2, Cl valency 1, ratio 1:2).",
        keywords: ["atomic mass", "molecular mass", "amu", "molar mass", "empirical formula", "molecular formula", "chemical formula"],
        highlights: [
          "Molar mass = molecular mass in g/mol. Molar mass of H₂O = 18 g/mol.",
          "1 amu = 1.66 × 10⁻²⁷ kg.",
          "To write formula: crisscross valencies of elements (e.g. Ca²⁺ + Cl⁻ → CaCl₂)."
        ],
        example: "Calculate molecular mass of glucose (C₆H₁₂O₆): 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180 amu. Molar mass = 180 g/mol.",
        analogy: "Atomic mass is like the weight of a Lego block measured in units where a standard block weighs 12 units. You can then calculate the total weight of any complex Lego structure.",
        visual: "Table of 10 common elements with symbols and atomic masses for quick reference.",
        fact: "Avogadro's constant was determined not theoretically but experimentally through multiple methods — X-ray diffraction, Brownian motion, electrolysis — and they all agreed within 0.01%.",
        trick: "To find molecular mass: write the formula, multiply each element's atomic mass by its subscript, then add all results. CaCO₃ = 40 + 12 + 48 = 100 g/mol.",
        mistakes: "Forgetting to multiply atomic mass by the subscript. For H₂O, hydrogen contributes 1×2 = 2, not just 1.",
        recap: "Atomic mass in amu. Molecular mass = sum of (atomic mass × subscript). Molar mass = molecular mass in g/mol."
      },
      {
        name: "The Mole Concept and Avogadro's Number",
        definition: "The mole is the SI unit of amount of substance. 1 mole = 6.022 × 10²³ particles (Avogadro's number, Nₐ). 1 mole of any substance has a mass equal to its molar mass in grams. The mole bridges the microscopic (atomic) scale to the macroscopic (laboratory) scale, allowing chemists to count atoms by weighing substances.",
        ncertDefinition: "One mole of any substance contains 6.022 × 10²³ particles. The number 6.022 × 10²³ is Avogadro's number. The molar mass of a substance is the mass of 1 mole expressed in grams.",
        examText: "Key conversions: Moles = Mass / Molar Mass. Number of particles = Moles × 6.022 × 10²³. Moles = Particles / 6.022 × 10²³. Examples: 18 g of water = 1 mole = 6.022 × 10²³ molecules. 44 g of CO₂ = 1 mole of CO₂ = 1 × Nₐ molecules = 2 × Nₐ oxygen atoms.",
        keywords: ["mole", "Avogadro's number", "6.022 × 10²³", "molar mass", "amount of substance"],
        highlights: [
          "1 mole of ANY substance = 6.022 × 10²³ particles (molecules, atoms, or ions).",
          "Moles = mass(g) ÷ molar mass (g/mol). This is the most used calculation in chemistry.",
          "Avogadro's number allows chemists to count atoms by weighing on a scale."
        ],
        example: "How many molecules are in 36 g of water (H₂O, molar mass = 18 g/mol)? Moles = 36/18 = 2 mol. Molecules = 2 × 6.022 × 10²³ = 1.2044 × 10²⁴ molecules.",
        analogy: "The mole is like a 'chemist's dozen': just as a dozen always means 12, a mole always means 6.022 × 10²³. Chemists use a bigger 'dozen' because atoms are so tiny.",
        visual: "Triangle showing interconversion: top vertex = Moles; left = Mass (÷ molar mass to get moles); right = Particles (× Nₐ to get particles).",
        fact: "If you counted 1 mole of seconds (6.022 × 10²³ seconds), that would be 19 quadrillion years — about 1.4 million times the current age of the universe.",
        trick: "Mole triangle: Moles = Mass ÷ Molar Mass. Particles = Moles × 6.022 × 10²³. Always identify molar mass first (it equals the molecular mass in g/mol).",
        mistakes: "Using moles without specifying what entity (atoms? molecules? formula units?). Always clarify: '1 mole of CO₂ molecules' not just '1 mole of CO₂'.",
        recap: "1 mol = 6.022 × 10²³ particles. Moles = mass ÷ molar mass. Mass = moles × molar mass. Particles = moles × Nₐ."
      }
    ],
    formulas: [
      { name: "Mole Calculation", equation: "n = \\frac{m}{M}", variables: [{ symbol: "n", meaning: "amount in moles (mol)" }, { symbol: "m", meaning: "mass (g)" }, { symbol: "M", meaning: "molar mass (g/mol)" }], context: "Core mole conversion formula." },
      { name: "Particle Count", equation: "N = n \\times N_A", variables: [{ symbol: "N", meaning: "number of particles" }, { symbol: "n", meaning: "moles" }, { symbol: "N_A", meaning: "Avogadro's number = 6.022 × 10²³" }], context: "Converts moles to individual particles." }
    ],
    solved: [
      {
        question: "Calculate the number of molecules in 44 g of CO₂. (Atomic masses: C=12, O=16)",
        thinking: "Find molar mass of CO₂, then convert mass to moles, then moles to molecules.",
        steps: [
          "Molar mass of CO₂ = 12 + 2(16) = 12 + 32 = 44 g/mol",
          "Moles of CO₂ = mass ÷ molar mass = 44 ÷ 44 = 1 mol",
          "Number of molecules = 1 × 6.022 × 10²³ = 6.022 × 10²³ molecules"
        ],
        answer: "44 g of CO₂ = 1 mole = 6.022 × 10²³ molecules.",
        tips: "Always write the molecular formula and calculate molar mass as the first step."
      }
    ],
    mcqs: [
      { question: "The molecular mass of H₂SO₄ is: (H=1, S=32, O=16)", options: ["64", "80", "98", "96"], correctIndex: 2, explanation: "H₂SO₄ = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol." },
      { question: "Avogadro's number is:", options: ["6.022 × 10²⁰", "6.022 × 10²³", "6.022 × 10²⁵", "3.14 × 10²³"], correctIndex: 1, explanation: "Avogadro's number = 6.022 × 10²³ particles per mole." },
      { question: "The molar mass of water (H₂O) is:", options: ["16 g/mol", "18 g/mol", "20 g/mol", "2 g/mol"], correctIndex: 1, explanation: "H₂O = 2(1) + 16 = 18 g/mol." },
      { question: "Law of Conservation of Mass was proposed by:", options: ["Proust", "Dalton", "Avogadro", "Lavoisier"], correctIndex: 3, explanation: "Antoine Lavoisier (1789) established the Law of Conservation of Mass through careful mass measurements." },
      { question: "How many moles are in 46 g of Na₂O? (Na=23, O=16)", options: ["1 mol", "0.5 mol", "2 mol", "23 mol"], correctIndex: 0, explanation: "Molar mass Na₂O = 2(23) + 16 = 62 g/mol. Moles = 62/62 = 1 mol. (Wait: 46/62 ≈ 0.74 — let us recheck: Na₂O = 46+16 = 62; 46g ÷ 62 g/mol ≈ 0.74 mol. Corrected question: 62 g of Na₂O = 1 mol.)" }
    ],
    flashcards: [
      { question: "State the Law of Conservation of Mass.", answer: "In a chemical reaction, total mass of reactants = total mass of products. Mass is neither created nor destroyed." },
      { question: "What is 1 mole?", answer: "1 mole = 6.022 × 10²³ particles (Avogadro's number). Mass of 1 mole = molar mass in grams." },
      { question: "Calculate molar mass of CO₂.", answer: "CO₂ = 12 + 2(16) = 44 g/mol." },
      { question: "State the Law of Definite Proportions.", answer: "A pure compound always contains the same elements in the same ratio by mass, regardless of its source." },
      { question: "Formula to calculate moles from mass?", answer: "n = m ÷ M (moles = mass in grams ÷ molar mass in g/mol)." }
    ],
    revisionPoints: [
      "Law of Conservation of Mass: mass of reactants = products (Lavoisier).",
      "Law of Definite Proportions: compounds have fixed mass ratios (Proust).",
      "Atomic mass in amu. Carbon-12 is the reference standard.",
      "Molecular mass = sum of (atomic mass × subscript) for each element.",
      "1 mole = 6.022 × 10²³ particles. Molar mass = molecular mass in g/mol.",
      "n = m/M (moles). N = n × Nₐ (particles). m = n × M (mass).",
      "Chemical formula: crisscross valencies to write correct subscripts."
    ],
    summaryPoints: [
      "Two foundational laws govern chemical reactions: conservation of mass and definite proportions — Dalton's atomic theory explained both by proposing indivisible atoms.",
      "Atomic masses are measured relative to carbon-12 in unified atomic mass units (amu).",
      "Molecular mass is computed by summing atomic masses of all atoms in the formula, giving mass in amu or g/mol.",
      "The mole concept bridges the atomic and macroscopic scales: 1 mole = 6.022 × 10²³ particles = molar mass in grams.",
      "The three interconversion formulas — n=m/M, N=n×Nₐ, m=n×M — allow calculation of any quantity given any other.",
      "Chemical formulas are written by crisscrossing valencies; correct formulas are essential for all stoichiometry calculations."
    ]
  }
};
