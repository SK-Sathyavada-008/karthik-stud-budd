// NCERT 2026 Physics Chapters - Expanded Complete Content
import { FullChapterData } from "./scienceContent";

export const PHYSICS_CHAPTERS: Record<string, FullChapterData> = {

  "motion": {
    difficulty: "Medium",
    estimatedTime: "4.5 hours",
    learningObjectives: [
      "Distinguish between distance (scalar) and displacement (vector) with examples.",
      "Define speed, velocity, and acceleration with SI units.",
      "Derive and apply all three equations of motion for uniform acceleration.",
      "Interpret distance-time and velocity-time graphs to extract motion parameters.",
      "Explain uniform circular motion and why it involves acceleration."
    ],
    warmupQ: "You walk 3 km east, then 4 km north and arrive at school. What total distance did you walk? What is your displacement from home? Why are these two numbers different?",
    warmupFact: "The fastest human ever recorded was Usain Bolt at 44.72 km/h (12.4 m/s) during the 2009 Berlin World Championships over a 20-metre split. Even so, a cheetah covers the same split at over 30 m/s — nearly 2.5× faster!",
    warmupHint: "Distance = total path length (always positive scalar). Displacement = straight-line shortest distance from start to finish with direction (vector). Here: displacement = √(3² + 4²) = 5 km (North-East).",
    concepts: [
      {
        name: "Distance vs Displacement — Scalar vs Vector",
        definition: "Motion is the change of position of an object with respect to a reference point (origin) over time. Distance is the total length of the actual path traversed — it is a scalar quantity (magnitude only, no direction). Displacement is the shortest straight-line distance from the initial position to the final position, measured in a specific direction — it is a vector quantity. Distance ≥ |Displacement| always. Distance can never be negative; displacement can be positive, negative, or zero.",
        ncertDefinition: "The distance travelled by an object is the length of the actual path covered irrespective of direction. Displacement is the shortest distance between the initial and final positions measured in a straight line with direction.",
        examText: "Key distinctions for CBSE: (1) Distance: scalar, always ≥ 0, depends on path taken. (2) Displacement: vector, can be zero even if distance is non-zero (e.g. one full circular revolution). (3) Distance = displacement only when motion is in a straight line in one direction. (4) SI unit for both: metre (m). (5) Displacement can be negative if final position is behind the starting position.",
        keywords: ["distance", "displacement", "scalar", "vector", "reference point", "path length"],
        highlights: [
          "An astronaut completing one full orbit of the Earth has distance = circumference (~40,000 km), but displacement = 0.",
          "When you walk 4 m East then 4 m West, distance = 8 m but displacement = 0.",
          "Displacement requires a direction: '5 m due North-East' is complete; '5 m' alone is incomplete."
        ],
        example: "A ball thrown vertically upward rises 20 m and falls back to the same hand. Distance = 40 m (20 up + 20 down). Displacement = 0 m (started and ended at the same point). Displacement is not always equal to distance!",
        analogy: "Distance is the odometer reading in a car — it counts every metre regardless of direction. Displacement is the GPS arrow pointing from your start point directly to your destination 'as the crow flies'.",
        visual: "Diagram: curved path A→B through intermediate points (distance = full path length). Straight dotted arrow directly from A to B (displacement = shortest straight line). Both labelled with values.",
        fact: "GPS navigation uses displacement (straight-line vector) for direction, but Google Maps uses actual road distance (scalar) for travel time estimates. Both concepts are essential — but they measure different things.",
        trick: "Is it path-dependent? → Distance. Is it only start and end? → Displacement. If they ask 'how far did you travel', it's distance. If 'how far from where you started', it's displacement.",
        mistakes: "Assuming displacement always equals distance. If a person walks in a circle, distance = circumference but displacement = 0. Also, forgetting to include direction with displacement (stating just a number is incomplete for a vector).",
        recap: "Distance: total path (scalar, ≥ 0). Displacement: start-to-finish straight line with direction (vector, can be 0 or negative). SI unit: m."
      },
      {
        name: "Speed, Velocity and Acceleration",
        definition: "Speed is the rate of change of distance with time — a scalar quantity. Average speed = total distance / total time. Velocity is the rate of change of displacement with time — a vector quantity. Average velocity = total displacement / total time. Acceleration is the rate of change of velocity with time — a vector quantity. a = (v − u) / t where u = initial velocity, v = final velocity, t = time. SI unit of speed/velocity = m/s; acceleration = m/s². Negative acceleration (deceleration/retardation) means the object is slowing down.",
        ncertDefinition: "Speed = distance/time (scalar). Velocity = displacement/time (vector). Acceleration = change in velocity/time. If velocity decreases, acceleration is negative and is called retardation.",
        examText: "Unit conversions: 1 km/h = 5/18 m/s (multiply by 5/18 to convert). 1 m/s = 18/5 km/h. Average speed: used when speed is NOT constant. Uniform velocity: same speed AND same direction. A car moving in a circle at constant speed has varying velocity (direction changes) → it IS accelerating. SI units: speed (m/s), acceleration (m/s²).",
        keywords: ["speed", "velocity", "acceleration", "retardation", "uniform velocity", "average speed", "m/s"],
        highlights: [
          "Speed is scalar (magnitude only). Velocity is vector (magnitude + direction).",
          "Retardation = negative acceleration: the object slows down.",
          "Average speed ≠ average velocity unless motion is in one straight-line direction."
        ],
        example: "A train travels 300 km in 5 hours. Average speed = 300/5 = 60 km/h = 60 × 5/18 = 16.67 m/s. A car brakes from 20 m/s to 0 in 4 s: a = (0 − 20)/4 = −5 m/s² (retardation of 5 m/s²).",
        analogy: "Speed is how fast a fan blade spins (rate, no direction). Velocity is the wind blowing from the north at 20 km/h — same rate concept but with a specific direction. Acceleration is when that wind starts blowing faster and faster.",
        visual: "Three separate diagrams: (1) Odometer showing speed. (2) Compass-arrow showing velocity = 60 km/h North. (3) Speedometer needle swinging from 0 to 80 = acceleration.",
        fact: "A Formula 1 car can accelerate from 0 to 100 km/h in about 2.6 seconds — an acceleration of approximately 10.7 m/s², almost equal to Earth's gravitational acceleration (g = 9.8 m/s²)!",
        trick: "To convert km/h to m/s: multiply by 5/18. Memorise: '36 km/h = 10 m/s'. This is a useful anchor. So 72 km/h = 20 m/s, 108 km/h = 30 m/s.",
        mistakes: "Writing velocity without direction (e.g. 'velocity = 5 m/s' — wrong; it must be '5 m/s east'). Also, using 'deceleration' — this is NOT an NCERT term. Use 'retardation' or 'negative acceleration'.",
        recap: "Speed = distance/time (scalar). Velocity = displacement/time (vector). Acceleration = Δv/t. Retardation = negative a. Convert km/h → m/s with × 5/18."
      },
      {
        name: "Equations of Motion — Derivation and Applications",
        definition: "For an object moving with uniform (constant) acceleration along a straight line, three equations relate displacement (s), initial velocity (u), final velocity (v), acceleration (a), and time (t): (1) v = u + at — velocity-time relation. (2) s = ut + ½at² — position-time relation. (3) v² = u² + 2as — position-velocity relation. These are derived graphically from velocity-time graphs. They are valid ONLY for uniform acceleration and straight-line motion.",
        ncertDefinition: "The three equations of motion for uniform acceleration are: v = u + at; s = ut + ½at²; v² = u² + 2as. These are derived from the velocity-time graph.",
        examText: "Derivation of equation 1: From definition of acceleration, a = (v−u)/t → v = u + at. Derivation of equation 2: Displacement = area under v-t graph = area of trapezium = ½(u+v)t. Substituting v = u+at: s = ut + ½at². Derivation of equation 3: From eq 1, t = (v−u)/a. Substitute into s = ½(u+v)t: s = ½(u+v)(v−u)/a = (v²−u²)/2a → v² = u² + 2as. Free fall: a = g = 9.8 m/s² (downward, take as positive downward). For a body thrown upward: a = −g = −9.8 m/s².",
        keywords: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "uniform acceleration", "free fall", "equations of motion"],
        highlights: [
          "Equation 1 has no s (displacement). Equation 2 has no v (final velocity). Equation 3 has no t (time). Choose based on what is missing from the problem.",
          "For free fall: u = 0, a = g = 9.8 m/s² (taking downward positive).",
          "For deceleration: use negative value of a (e.g. a = −5 m/s² for braking)."
        ],
        example: "A car starts from rest (u = 0) and accelerates uniformly at 2 m/s² for 10 seconds. Find: (a) final velocity: v = 0 + 2×10 = 20 m/s. (b) distance: s = 0×10 + ½×2×100 = 100 m. (c) verify: v² = 0 + 2×2×100 = 400 → v = 20 m/s ✓.",
        analogy: "The three equations are like three different keys on a keychain. Each key opens the same room (the problem's answer) from a different angle depending on which information you're given and which piece is missing.",
        visual: "Velocity-time graph: horizontal axis = time, vertical axis = velocity. Trapezium shaded below line. Labels: u (y-intercept), v (final height), t (x-span). Area = displacement = s.",
        fact: "Galileo Galilei (1564–1642) derived the laws of uniform acceleration by rolling balls down inclined planes and timing them with water clocks. He proved that all objects fall at the same rate regardless of mass — disproving Aristotle's 2,000-year-old claim.",
        trick: "Which equation to use: Missing s → use eq 1 (v=u+at). Missing v → use eq 2 (s=ut+½at²). Missing t → use eq 3 (v²=u²+2as). Label 'u, v, a, t, s' from the problem first, identify which is missing, then pick the equation that doesn't contain that variable.",
        mistakes: "Using these equations when acceleration is NOT uniform (e.g. a car in traffic where speed changes randomly). Also, forgetting to take the square root in equation 3: v² = u² + 2as gives v², not v.",
        recap: "3 equations: v=u+at; s=ut+½at²; v²=u²+2as. Valid for uniform acceleration only. Choose by identifying which variable is missing."
      },
      {
        name: "Graphical Representation — Distance-Time and Velocity-Time Graphs",
        definition: "Distance-Time (d-t) graph: slope = speed. Straight line with positive slope → uniform speed. Horizontal line → object at rest. Curved line → accelerating or decelerating object. Velocity-Time (v-t) graph: slope = acceleration. Area under graph = displacement. Horizontal line → uniform velocity (zero acceleration). Straight line with positive slope → uniform acceleration. Straight line with negative slope → uniform deceleration. Curved v-t graph → non-uniform acceleration.",
        ncertDefinition: "The distance-time graph represents how distance changes over time. Its slope gives speed. The velocity-time graph shows velocity versus time. Its slope gives acceleration and the area under it gives displacement.",
        examText: "CBSE exam analysis: (1) From d-t graph: slope = Δd/Δt = average speed. (2) From v-t graph: slope = Δv/Δt = acceleration. Area under v-t = displacement. For uniform acceleration, v-t graph is a straight line (not curved). For uniform motion, both d-t and v-t are straight lines (but d-t slopes upward while v-t is horizontal).",
        keywords: ["distance-time graph", "velocity-time graph", "slope", "area under graph", "uniform motion", "uniform acceleration"],
        highlights: [
          "d-t graph slope = speed. v-t graph slope = acceleration. v-t graph area = displacement.",
          "Horizontal line on d-t graph → object at REST (not moving). Horizontal line on v-t graph → object moving at CONSTANT velocity.",
          "Curved d-t graph (concave up) → increasing speed (acceleration). Curved d-t (concave down) → decreasing speed (deceleration)."
        ],
        example: "A v-t graph shows velocity increasing from 0 to 20 m/s in 4 seconds, then constant at 20 m/s for 3 seconds. Acceleration in phase 1 = (20−0)/4 = 5 m/s². Displacement in phase 1 = ½×4×20 = 40 m (triangle area). Displacement in phase 2 = 20×3 = 60 m (rectangle area). Total displacement = 100 m.",
        analogy: "A d-t graph is like a car's trip log: a steep slope means fast travel; a flat section means parked. A v-t graph is like looking at the speedometer over time: a rising line means you're pressing the accelerator; a flat line means cruise control.",
        visual: "Two side-by-side graphs. Left: d-t graph with three sections (rest = horizontal, uniform speed = sloped line, acceleration = curve). Right: v-t graph with corresponding sections labelled with slope and area calculations.",
        fact: "Traffic police use d-t graph principles in speed cameras: the camera captures two photos a fixed time apart and calculates average speed from the distance the car has moved — if slope exceeds speed limit, a fine is issued.",
        trick: "For any v-t graph question: (1) Draw a clear diagram first. (2) Calculate slopes of each straight segment = acceleration values. (3) Calculate areas of triangles and rectangles = displacement. (4) Area of triangle = ½ × base × height. Rectangle = base × height.",
        mistakes: "Confusing the two graphs: the slope of a d-t graph gives speed (not acceleration). The slope of a v-t graph gives acceleration (not speed). Many students mix up which graph gives which quantity.",
        recap: "d-t graph: slope = speed, horizontal = rest, curve = acceleration. v-t graph: slope = acceleration, area = displacement, horizontal = constant velocity."
      },
      {
        name: "Uniform Circular Motion",
        definition: "Uniform circular motion is the motion of an object along a circular path at constant speed. Although speed is constant, velocity is NOT constant because the direction of motion changes at every point. Since velocity changes, the object has acceleration — called centripetal acceleration — always directed toward the centre of the circle. This inward acceleration is produced by a centripetal force directed toward the centre. Examples: Earth orbiting the Sun, a ball on a string whirled in a circle, a car turning on a circular road.",
        ncertDefinition: "When an object moves along a circular path with constant speed, it undergoes uniform circular motion. The velocity direction changes continuously so there is always an acceleration directed toward the centre called centripetal acceleration.",
        examText: "Key points for CBSE: (1) Speed is constant but velocity changes (direction changes). (2) Centripetal acceleration a = v²/r directed toward centre. (3) Centripetal force F = mv²/r directed toward centre. (4) Period T = 2πr/v (time for one revolution). (5) Examples: satellite orbiting Earth, electron orbiting nucleus (Bohr model), car on curved road. (6) If string breaks or force removed → object moves tangentially (Newton's 1st law).",
        keywords: ["uniform circular motion", "centripetal acceleration", "centripetal force", "period", "tangential velocity"],
        highlights: [
          "In uniform circular motion: speed = constant, velocity = changing (direction), acceleration = constant magnitude but changing direction (always toward centre).",
          "Centripetal force is NOT a new force — it is provided by an existing force (string tension, gravity, friction, normal force).",
          "When circular motion stops (string breaks), object moves in a straight line tangent to the circle (Newton's 1st law)."
        ],
        example: "A 0.5 kg stone is whirled in a horizontal circle of radius 2 m at 4 m/s. Speed = constant 4 m/s. Centripetal acceleration = v²/r = 16/2 = 8 m/s². Centripetal force = ma = 0.5 × 8 = 4 N (provided by string tension, directed toward centre of circle).",
        analogy: "Uniform circular motion is like a dog on a leash walking in circles: the dog moves at constant speed, but constantly changes direction. The leash (providing the centripetal force) pulls the dog inward toward you (the centre).",
        visual: "Circle with object at multiple positions. At each position, velocity arrow (tangent to circle) and centripetal acceleration arrow (toward centre) shown. Clearly demonstrates that velocity direction changes even though magnitude is constant.",
        fact: "Earth's Moon travels at about 1 km/s in circular orbit around the Earth. Gravity provides the centripetal force. Without gravity, the Moon would fly off in a straight line at 1 km/s tangentially into space.",
        trick: "Remember: centripetal = 'centre-seeking'. Centrifugal is a PSEUDO-force (felt from inside the rotating frame, not a real force). In NCERT context, use centripetal; avoid centrifugal in explanations.",
        mistakes: "Saying the centripetal force 'acts outward' — it ALWAYS acts inward (toward the centre). The feeling of being pushed outward in a turning car is due to your inertia (Newton's 1st law), not an outward centripetal force.",
        recap: "Uniform circular motion: constant speed but variable velocity (direction changes) → centripetal acceleration toward centre. a = v²/r. F = mv²/r."
      }
    ],
    formulas: [
      { name: "First Equation of Motion", equation: "v = u + at", variables: [{ symbol: "v", meaning: "final velocity (m/s)" }, { symbol: "u", meaning: "initial velocity (m/s)" }, { symbol: "a", meaning: "acceleration (m/s²)" }, { symbol: "t", meaning: "time (s)" }], context: "Use when displacement (s) is not needed." },
      { name: "Second Equation of Motion", equation: "s = ut + \\frac{1}{2}at^2", variables: [{ symbol: "s", meaning: "displacement (m)" }], context: "Use when final velocity (v) is not needed." },
      { name: "Third Equation of Motion", equation: "v^2 = u^2 + 2as", variables: [], context: "Use when time (t) is not needed." },
      { name: "Average Speed", equation: "\\text{Average Speed} = \\frac{\\text{Total Distance}}{\\text{Total Time}}", variables: [], context: "For any motion (uniform or non-uniform)." },
      { name: "Centripetal Acceleration", equation: "a_c = \\frac{v^2}{r}", variables: [{ symbol: "r", meaning: "radius of circular path (m)" }], context: "Acceleration in uniform circular motion directed toward centre." }
    ],
    solved: [
      {
        question: "A train starts from rest and accelerates uniformly at 0.5 m/s² for 2 minutes. Find (i) final velocity, (ii) distance covered.",
        thinking: "Given: u = 0 (starts from rest), a = 0.5 m/s², t = 2 min = 120 s. Need: v and s. Missing v? No, we need v. Missing s? No, we need s. Use equations 1 and 2.",
        steps: [
          "u = 0 m/s, a = 0.5 m/s², t = 120 s",
          "(i) v = u + at = 0 + 0.5 × 120 = 60 m/s",
          "(ii) s = ut + ½at² = 0×120 + ½×0.5×120² = 0 + 0.25 × 14400 = 3600 m = 3.6 km"
        ],
        answer: "(i) Final velocity = 60 m/s. (ii) Distance covered = 3600 m (3.6 km).",
        tips: "Always convert minutes to seconds before substituting. Write units with every quantity. Show formula before substitution."
      },
      {
        question: "A car moving at 72 km/h applies brakes and comes to rest in 8 seconds. Find the deceleration and the braking distance.",
        thinking: "Convert velocity: 72 km/h = 72 × 5/18 = 20 m/s. Given: u = 20 m/s, v = 0, t = 8 s. Find: a (deceleration) and s (braking distance).",
        steps: [
          "u = 20 m/s, v = 0, t = 8 s",
          "a = (v − u)/t = (0 − 20)/8 = −2.5 m/s² (retardation = 2.5 m/s²)",
          "s = ut + ½at² = 20×8 + ½×(−2.5)×64 = 160 − 80 = 80 m",
          "Verify: v² = u² + 2as → 0 = 400 + 2×(−2.5)×80 = 400 − 400 = 0 ✓"
        ],
        answer: "Deceleration (retardation) = 2.5 m/s². Braking distance = 80 m.",
        tips: "Always verify your answer using a different equation of motion. This shows examiner you are confident and earns full marks."
      }
    ],
    mcqs: [
      { question: "A body moves along a circular path at constant speed. Which of the following is true?", options: ["Velocity and acceleration are both constant", "Velocity is constant but acceleration changes", "Speed is constant but velocity changes", "Speed and velocity both change"], correctIndex: 2, explanation: "In uniform circular motion, speed (magnitude of velocity) is constant, but velocity direction changes at every point, so velocity changes. This changing velocity means there is centripetal acceleration." },
      { question: "An object is thrown vertically upward. At the highest point, which is correct?", options: ["Both velocity and acceleration are zero", "Velocity is zero; acceleration = g downward", "Velocity is maximum; acceleration is zero", "Both are non-zero"], correctIndex: 1, explanation: "At the highest point, instantaneous velocity = 0 (momentarily stopped). But gravity still acts, so acceleration = g = 9.8 m/s² downward. It is a common mistake to think both are zero." },
      { question: "The slope of a velocity-time graph gives:", options: ["Distance", "Displacement", "Speed", "Acceleration"], correctIndex: 3, explanation: "Slope of v-t graph = Δv/Δt = acceleration. The area under a v-t graph gives displacement." },
      { question: "A car travels 30 km in first hour and 40 km in second hour. What is the average speed?", options: ["35 km/h", "70 km/h", "37.5 km/h", "33 km/h"], correctIndex: 0, explanation: "Average speed = total distance / total time = (30+40)/(1+1) = 70/2 = 35 km/h." },
      { question: "Which of the following cannot be negative?", options: ["Displacement", "Velocity", "Acceleration", "Distance"], correctIndex: 3, explanation: "Distance is the magnitude of path length — it is always positive or zero. Displacement, velocity, and acceleration are all vectors and can be negative." },
      { question: "A stone is dropped from a height. Using g = 10 m/s², its velocity after 3 seconds is:", options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"], correctIndex: 2, explanation: "For free fall: u = 0, a = g = 10 m/s², t = 3 s. v = u + at = 0 + 10×3 = 30 m/s." },
      { question: "The area under a velocity-time graph gives:", options: ["Speed", "Acceleration", "Displacement", "Force"], correctIndex: 2, explanation: "Area under v-t graph = displacement. This is because displacement = velocity × time, and the area of a rectangle/triangle on the v-t graph represents this product." }
    ],
    flashcards: [
      { question: "State the three equations of motion.", answer: "(1) v = u + at. (2) s = ut + ½at². (3) v² = u² + 2as. Valid for uniform acceleration only." },
      { question: "What is the slope of a distance-time graph?", answer: "Speed (rate of change of distance with time)." },
      { question: "What is the area under a velocity-time graph?", answer: "Displacement (the change in position of the object)." },
      { question: "Convert 72 km/h to m/s.", answer: "72 × 5/18 = 20 m/s. (Multiply km/h by 5/18 to get m/s.)" },
      { question: "What is retardation?", answer: "Negative acceleration — when velocity decreases (object slows down). Example: braking car." },
      { question: "What is centripetal acceleration?", answer: "Acceleration in uniform circular motion directed toward the centre of the circle. a = v²/r." },
      { question: "What happens to the velocity and acceleration at the highest point of a vertically thrown object?", answer: "Velocity = 0 (momentarily stops). Acceleration = g = 9.8 m/s² downward (gravity never stops)." }
    ],
    revisionPoints: [
      "Distance: scalar, total path length, always ≥ 0. Displacement: vector, start-to-finish straight line, can be negative or zero.",
      "Speed = distance/time (scalar). Velocity = displacement/time (vector).",
      "Acceleration = change in velocity/time. Retardation = negative acceleration.",
      "Equations of motion: v=u+at; s=ut+½at²; v²=u²+2as. Valid for uniform acceleration only.",
      "d-t graph slope = speed. v-t graph slope = acceleration. v-t graph area = displacement.",
      "Uniform circular motion: constant speed but changing velocity (direction). Centripetal acceleration toward centre = v²/r.",
      "Convert km/h to m/s: multiply by 5/18. Free fall: a = g = 9.8 m/s² downward."
    ],
    summaryPoints: [
      "Motion is the change of position of an object relative to a reference point over time. It requires a reference frame to be defined.",
      "Distance measures total path length (scalar); displacement measures the straight-line vector from start to finish — they are equal only for straight-line one-direction motion.",
      "Speed and velocity differ fundamentally: speed is scalar (magnitude of velocity); velocity is vector (speed with direction). A car on a circular road has constant speed but ever-changing velocity.",
      "Acceleration is the vector rate of change of velocity. Retardation is negative acceleration (body is slowing down). Free-falling bodies accelerate at g = 9.8 m/s² downward.",
      "The three equations of motion — derived from velocity-time graphs — form the toolkit for solving all uniform-acceleration problems. The choice of equation depends on which variable is missing.",
      "Velocity-time graphs are powerful analytical tools: their slope gives acceleration; their enclosed area gives displacement. A horizontal v-t line means zero acceleration (constant velocity).",
      "Uniform circular motion has constant speed but non-constant velocity due to continuous direction change, producing centripetal acceleration (v²/r) directed toward the circle's centre.",
      "Real-world applications span everywhere: traffic engineering (braking distance), spacecraft design (orbital velocity), and sports science (athlete acceleration) all use these equations of motion."
    ]
  },

  "force": {
    difficulty: "Hard",
    estimatedTime: "5 hours",
    learningObjectives: [
      "Distinguish between balanced and unbalanced forces and their effects on motion.",
      "State, explain, and apply all three of Newton's Laws of Motion.",
      "Define inertia and relate it to mass quantitatively.",
      "Define momentum (p = mv) and explain the law of conservation of momentum.",
      "Explain the working principle of rockets and recoil of guns using Newton's 3rd law."
    ],
    warmupQ: "Why do passengers lurch forward when a bus brakes suddenly? And why do they lurch backward when the bus accelerates from rest? What physical principle explains both?",
    warmupFact: "During a car crash at 50 km/h, an unbelted 70 kg passenger exerts a force of over 30,000 N on the windscreen — equivalent to the passenger 'weighing' over 3,000 kg at the moment of impact. This is Newton's 2nd law (F = ma) in a terrifying application.",
    warmupHint: "When the bus brakes, it decelerates but your body tends to continue moving forward (Newton's 1st law — inertia). When the bus accelerates, your body tends to stay at rest while the bus moves under you.",
    concepts: [
      {
        name: "Balanced and Unbalanced Forces — Newton's First Law",
        definition: "A force is a push or pull that can cause a change in the state of rest or motion of an object. Balanced forces: equal forces in opposite directions → net force = 0 → no change in motion (object stays at rest or keeps moving at constant velocity). Unbalanced forces: net force ≠ 0 → change in state of motion (acceleration). Newton's First Law (Law of Inertia): An object at rest remains at rest, and an object in motion continues in motion with constant velocity, unless acted upon by an unbalanced external net force.",
        ncertDefinition: "Newton's first law states that an object remains in its state of rest or uniform motion unless acted upon by an unbalanced force. This property is called inertia.",
        examText: "Balanced vs Unbalanced: Draw free body diagrams. If ΣF = 0 → balanced, no acceleration. If ΣF ≠ 0 → unbalanced, causes acceleration. Newton's 1st Law examples: (1) Book on table (balanced — weight and normal force cancel). (2) Kicking a football (unbalanced — foot exerts force, ball accelerates). Real-life inertia: (a) Seat belts protect against forward inertia in crashes. (b) Shaking a dusty carpet — the carpet moves but dust stays behind due to inertia.",
        keywords: ["force", "balanced force", "unbalanced force", "Newton's first law", "inertia", "net force"],
        highlights: [
          "Balanced forces do NOT cause acceleration — the object maintains its current state (rest or uniform motion).",
          "Inertia is the tendency of an object to resist any change in its state of rest or uniform motion.",
          "Heavier objects have greater inertia (harder to start or stop). Inertia is proportional to mass."
        ],
        example: "A book resting on a table: Weight (W) pulls it down, Normal force (N) pushes up. W = N → balanced → book stays at rest. Now push the book horizontally: friction resists, applied force > friction → unbalanced → book accelerates.",
        analogy: "Newton's 1st law is like a ball on a perfectly smooth floor: once you roll it, nothing stops it — it would roll forever. In reality, friction acts as the unbalanced force that eventually stops it.",
        visual: "Free body diagram: left side shows balanced forces (W↓ and N↑, no motion change). Right side shows unbalanced (F→, f← where F>f, arrow for acceleration a→).",
        fact: "Before Newton's laws, Aristotle's idea dominated for 2,000 years: 'objects move only when pushed'. Newton's 1st law completely overturned this — objects in motion stay in motion WITHOUT needing a continuing push.",
        trick: "Newton's 1st law is for ZERO net force situations. Inertia of rest (body stays at rest) and inertia of motion (body stays in motion). If a question involves 'tendency to resist change', it's about inertia.",
        mistakes: "Saying 'a moving object has a force on it'. A moving object does NOT necessarily have a force on it — it might be moving with zero net force (constant velocity). Forces cause CHANGES in motion, not motion itself.",
        recap: "ΣF = 0 → balanced → no acceleration. ΣF ≠ 0 → unbalanced → acceleration. Newton's 1st: objects resist change in motion (inertia)."
      },
      {
        name: "Newton's Second Law — Force, Mass, and Acceleration",
        definition: "Newton's Second Law of Motion: The acceleration produced in an object is directly proportional to the net unbalanced force acting on it and inversely proportional to its mass. Mathematically: F = ma (or ΣF = ma for net force). This law defines the SI unit of force: 1 Newton (N) = the force that gives a mass of 1 kg an acceleration of 1 m/s². The second law also defines momentum: p = mv (mass × velocity). In terms of momentum: F = Δp/Δt (rate of change of momentum).",
        ncertDefinition: "Newton's second law: The rate of change of momentum of an object is proportional to the applied unbalanced force in the direction of force. F = ma. SI unit of force: Newton (N) = kg⋅m/s².",
        examText: "F = ma gives: (1) Greater mass → more force needed for same acceleration. (2) Greater force → more acceleration for same mass. Momentum p = mv. Newton's 2nd in momentum form: F = Δp/Δt = m(v−u)/t = ma. Impulse = F×t = Δp = change in momentum. SI unit of momentum = kg⋅m/s. 1 Newton: 1 N = 1 kg⋅m/s². Weight W = mg (g = 9.8 m/s²).",
        keywords: ["Newton's second law", "F = ma", "momentum", "Newton", "impulse", "rate of change of momentum"],
        highlights: [
          "F = ma only applies to the NET (resultant) unbalanced force. If three forces act, use their vector sum.",
          "Weight W = mg is NOT the same as mass. Mass is constant; weight depends on g (varies on Moon, etc.).",
          "Impulse = F × t = change in momentum. This is why airbags (increase time) reduce injury force."
        ],
        example: "A net force of 10 N acts on a 2 kg ball. Acceleration = F/m = 10/2 = 5 m/s². If the same force acts on a 5 kg ball: a = 10/5 = 2 m/s² — half the acceleration for 2.5× the mass.",
        analogy: "F = ma is like pushing shopping carts: pushing the same way, an empty cart (low m) accelerates fast (high a). A full cart (high m) accelerates slowly (low a). Same force, opposite effect based on mass.",
        visual: "Diagram showing 3 scenarios: same F on small mass (large a), same F on large mass (small a), larger F on same mass (larger a). Arrows proportional to magnitude.",
        fact: "During a boxing punch, the force is typically 2,000–5,000 N for less than 0.05 seconds. The impulse (F × t) equals the change in momentum of the opponent's head — and is why head guards reduce injury.",
        trick: "Newton = kg × m/s². Memorise this unit. So if asked '1 N equals?': 1 N = 1 kg⋅m/s². In problems, first identify the net force (not individual forces), then apply F_net = ma.",
        mistakes: "Applying F = ma using the weight (W = mg) as the 'F' when other forces also act. On an incline, the net force is the component of weight minus friction — not just the full weight.",
        recap: "F = ma (net force). 1 N = 1 kg⋅m/s². Momentum p = mv. Impulse = F×t = Δp. Weight W = mg."
      },
      {
        name: "Newton's Third Law and Conservation of Momentum",
        definition: "Newton's Third Law: For every action, there is an equal and opposite reaction. When object A exerts a force on object B (action), object B exerts an equal force on object A in the opposite direction (reaction). Action and reaction always act on DIFFERENT objects — they never cancel each other. Law of Conservation of Momentum: When no external force acts on a system of objects (isolated system), the total momentum remains constant. If F_ext = 0, then p₁ + p₂ = constant → m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
        ncertDefinition: "Newton's third law: Every action has an equal and opposite reaction. Conservation of momentum: total momentum of an isolated system (no external force) remains constant.",
        examText: "Action-reaction examples: (1) Rocket: hot gases expelled backward (action) → rocket propelled forward (reaction). (2) Gun recoil: bullet fired forward (action) → gun recoils backward (reaction). (3) Swimming: push water backward (action) → water pushes swimmer forward (reaction). (4) Walking: foot pushes ground backward → ground pushes foot forward. Conservation of momentum: Before collision: total p = m₁u₁ + m₂u₂. After: total p = m₁v₁ + m₂v₂ = same.",
        keywords: ["Newton's third law", "action-reaction", "conservation of momentum", "recoil", "rocket propulsion"],
        highlights: [
          "Action and reaction are EQUAL in magnitude, OPPOSITE in direction, act on DIFFERENT objects, act SIMULTANEOUSLY.",
          "Conservation of momentum: no external force → total momentum constant. This is why guns recoil and rockets work.",
          "Collision types: elastic (KE conserved), inelastic (KE not conserved), perfectly inelastic (objects stick together)."
        ],
        example: "A 10 kg gun fires a 0.1 kg bullet at 500 m/s. Initial momentum = 0 (everything at rest). Final: bullet momentum = 0.1 × 500 = 50 kg⋅m/s forward. By conservation: gun momentum = 50 kg⋅m/s backward. Gun recoil speed = 50/10 = 5 m/s backward.",
        analogy: "Newton's 3rd law is like a dance partner push: if you push your partner forward with 20 N, your partner pushes you backward with 20 N simultaneously. You both move — in opposite directions.",
        visual: "Split diagram: left = gun before firing (total momentum = 0). Right = gun after firing (bullet → fast, gun ← slow). Arrows proportional to momenta. Show total momentum is same (zero) both sides.",
        fact: "The Space Shuttle's main engines expelled 3,000 kg/s of exhaust gas at ~4,500 m/s — the reaction force (thrust) was about 13.5 million Newtons. This is Newton's 3rd law scaled up to industrial magnitude.",
        trick: "For recoil problems: use m₁v₁ = m₂v₂ (if initial system is at rest, total initial momentum = 0, so final momenta must be equal and opposite). Always take one direction as positive.",
        mistakes: "Claiming action and reaction cancel each other. They act on DIFFERENT objects — forces on the same object cancel, but action-reaction forces are always on different objects and NEVER cancel each other.",
        recap: "Newton's 3rd: action = equal and opposite reaction, on different objects. Conservation of momentum: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (no external force)."
      }
    ],
    formulas: [
      { name: "Newton's Second Law", equation: "F = ma = \\frac{\\Delta p}{\\Delta t}", variables: [{ symbol: "F", meaning: "net force (N)" }, { symbol: "m", meaning: "mass (kg)" }, { symbol: "a", meaning: "acceleration (m/s²)" }, { symbol: "Δp", meaning: "change in momentum" }], context: "Applies to net (unbalanced) force only." },
      { name: "Momentum", equation: "p = mv", variables: [{ symbol: "p", meaning: "momentum (kg·m/s)" }, { symbol: "v", meaning: "velocity (m/s)" }], context: "Linear momentum — vector quantity." },
      { name: "Conservation of Momentum", equation: "m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2", variables: [{ symbol: "u", meaning: "initial velocity" }, { symbol: "v", meaning: "final velocity" }], context: "Applies when no external force acts on the system." }
    ],
    solved: [
      {
        question: "A 0.5 kg ball moving at 10 m/s is brought to rest in 0.02 s by a cricket fielder's hands. Find the average force exerted by the hands.",
        thinking: "Use impulse-momentum theorem: F = Δp/Δt = m(v−u)/t. Initial momentum ≠ 0, final = 0.",
        steps: [
          "m = 0.5 kg, u = 10 m/s, v = 0, t = 0.02 s",
          "F = m(v−u)/t = 0.5 × (0−10)/0.02 = 0.5 × (−10)/0.02 = −250 N",
          "The magnitude of force = 250 N. Negative sign means force opposes motion."
        ],
        answer: "Force exerted by hands = 250 N (opposing the ball's motion). This is why fielders 'give' with their hands — increasing t reduces F.",
        tips: "Fielders extend the time of contact, which reduces the force on their hands. This is Newton's 2nd law + impulse concept in practical cricket!"
      }
    ],
    mcqs: [
      { question: "A cricket ball of mass 0.15 kg is moving at 20 m/s. Its momentum is:", options: ["0.75 kg⋅m/s", "3 kg⋅m/s", "133 kg⋅m/s", "20 kg⋅m/s"], correctIndex: 1, explanation: "p = mv = 0.15 × 20 = 3 kg⋅m/s." },
      { question: "Action and reaction forces:", options: ["Act on the same object", "Are unequal", "Act on different objects", "Cancel each other out"], correctIndex: 2, explanation: "Newton's 3rd law: action-reaction pairs ALWAYS act on different objects. They cannot cancel each other since they are on different objects." },
      { question: "An unbalanced force of 10 N acts on a 2 kg body for 5 seconds. The change in momentum is:", options: ["4 kg⋅m/s", "10 kg⋅m/s", "25 kg⋅m/s", "50 kg⋅m/s"], correctIndex: 3, explanation: "Impulse = F × t = 10 × 5 = 50 N⋅s = 50 kg⋅m/s = change in momentum." },
      { question: "Inertia of a body depends on:", options: ["Shape", "Volume", "Mass", "Size"], correctIndex: 2, explanation: "Inertia is directly proportional to mass. Greater mass → greater inertia → harder to change state of motion." },
      { question: "If a bullet of mass m is fired at velocity v from a gun of mass M, the recoil velocity of the gun is:", options: ["mv/M", "Mv/m", "mv + M", "m/(Mv)"], correctIndex: 0, explanation: "By conservation of momentum (initial p = 0): mV_bullet + MV_gun = 0 → V_gun = −mv/M. Magnitude = mv/M." }
    ],
    flashcards: [
      { question: "State Newton's First Law of Motion.", answer: "An object remains at rest or in uniform motion unless acted upon by an unbalanced external force. This tendency is called inertia." },
      { question: "State Newton's Second Law of Motion.", answer: "F = ma (net force = mass × acceleration). Also expressed as F = Δp/Δt (rate of change of momentum)." },
      { question: "State Newton's Third Law of Motion.", answer: "Every action has an equal and opposite reaction. They act on different objects simultaneously." },
      { question: "What is the SI unit of force and what does it equal?", answer: "1 Newton (N) = 1 kg⋅m/s². It is the force that gives a 1 kg mass an acceleration of 1 m/s²." },
      { question: "Why does a gun recoil when fired?", answer: "Conservation of momentum: initial momentum = 0. Bullet fired forward (momentum = mv). Gun must recoil backward with equal and opposite momentum (MV = mv)." }
    ],
    revisionPoints: [
      "Balanced forces: ΣF = 0, no change in motion. Unbalanced: ΣF ≠ 0, causes acceleration.",
      "Newton's 1st law: inertia — objects resist change in state of motion.",
      "Newton's 2nd law: F = ma = Δp/Δt. 1 N = 1 kg⋅m/s².",
      "Newton's 3rd law: action = equal, opposite reaction on different objects.",
      "Momentum p = mv (vector). Conservation: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (no external force).",
      "Impulse = F × t = Δp. Airbags increase t → reduce F on body.",
      "Gun recoil, rocket propulsion, swimming all explained by Newton's 3rd law."
    ],
    summaryPoints: [
      "Newton's three laws of motion form the foundation of classical mechanics and explain virtually all everyday mechanical phenomena.",
      "Newton's First Law (Inertia): objects resist change. A moving bus suddenly stopping flings passengers forward because their inertia keeps them moving. Seatbelts apply the stopping force safely.",
      "Newton's Second Law (F = ma): force is the agent of acceleration. More mass requires more force for the same acceleration. This law defines the Newton as the SI unit of force.",
      "Momentum (p = mv) is the key concept linking Newton's 2nd and 3rd laws. The rate of change of momentum equals the net applied force.",
      "Newton's Third Law (action-reaction): forces always come in pairs on different objects. Rockets, guns, swimming, and walking all exploit this paired relationship.",
      "The Law of Conservation of Momentum — derived directly from Newton's 3rd law — states that in an isolated system, total momentum never changes. This explains gun recoil and rocket propulsion.",
      "Impulse (F × t = Δp) explains why increasing the contact time reduces the impact force — the principle behind airbags, padded cricket gloves, and foam crash barriers.",
      "These laws apply from subatomic particles to galaxies, making Newton's framework one of the most powerful and successful scientific achievements in history."
    ]
  },

  "work": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Define work scientifically and distinguish it from everyday usage.",
      "Calculate work done by a force using W = Fs cos θ.",
      "Distinguish between kinetic energy and potential energy with formulas.",
      "State and apply the work-energy theorem.",
      "State the law of conservation of energy with examples.",
      "Define power and understand its units (watt, horsepower)."
    ],
    warmupQ: "You push a heavy wall with all your strength for an hour but it doesn't move. From physics, have you done any work? From a biological standpoint, have you done work? Why do these answers differ?",
    warmupFact: "Hydroelectric power stations convert the potential energy of water stored behind dams into electrical energy. The Tehri Dam in Uttarakhand has a capacity of 1,000 MW — enough to power about 10 million homes!",
    warmupHint: "In physics, work is done ONLY when a force causes displacement in the direction of the force. If the wall doesn't move (displacement = 0), no work is done by you on the wall, even if you are exhausted.",
    concepts: [
      {
        name: "Scientific Concept of Work",
        definition: "In physics, work is done when a force applied on an object causes the object to move in the direction of the force. W = F × s × cos θ, where F = force, s = displacement, θ = angle between force and displacement. Special cases: θ = 0° (force and displacement same direction): W = Fs (maximum positive work). θ = 90° (force perpendicular to displacement): W = 0 (no work — e.g. carrying a bag horizontally while walking). θ = 180° (force opposite to displacement): W = −Fs (negative work — e.g. friction). SI unit: Joule (J) = N⋅m. 1 J = work done by 1 N force causing 1 m displacement.",
        ncertDefinition: "Work done by a force is defined as the product of the force and the displacement of the object in the direction of the force. W = Fs when force and displacement are in the same direction.",
        examText: "Zero work cases: (1) Force applied but no displacement (pushing wall). (2) Displacement but no force (object already moving, no new force). (3) Force perpendicular to displacement (satellite in circular orbit — gravity ⊥ velocity; carrying a bag while walking horizontally). Negative work: friction does negative work on a sliding object (force opposite to displacement). Positive work: applied force causes displacement in its direction.",
        keywords: ["work", "joule", "W = Fs cosθ", "positive work", "negative work", "zero work"],
        highlights: [
          "Work = 0 when force ⊥ displacement (θ = 90°). Carrying a bag while walking does ZERO work on the bag.",
          "Negative work: friction opposes motion — it removes energy from the system.",
          "Work is a scalar quantity (not a vector). It can be positive, negative, or zero."
        ],
        example: "A coolie carries a 20 kg bag on his head and walks 5 m horizontally on a platform. Work done by him on the bag = 0 J (the force supporting the bag is vertical, displacement is horizontal → θ = 90° → W = Fs cos 90° = 0). Work done against gravity = 0 (height unchanged).",
        analogy: "Work in physics is like pushing a car: if the car actually moves, you've done work. If the car is parked against a wall and doesn't budge despite your full effort, you've done zero work on the car — no matter how tired you are.",
        visual: "Three diagrams: (1) θ=0°: force and displacement both right → W = Fs (positive). (2) θ=90°: force up, displacement right → W = 0. (3) θ=180°: friction left, displacement right → W = −Fs (negative).",
        fact: "The word 'joule' honours James Prescott Joule (1818–1889), an English physicist who experimentally determined the mechanical equivalent of heat — showing that work and heat are both forms of energy.",
        trick: "Key insight for zero work: if force and displacement are perpendicular (like a satellite orbiting, or carrying a bag while walking), work done = 0. Visualize the angle between F and s vectors.",
        mistakes: "Saying 'holding a heavy bag requires work'. Holding a stationary bag requires FORCE but zero work — because displacement = 0. In physics, no displacement = no work.",
        recap: "W = Fs cosθ. Zero work: θ=90° or s=0. Negative work: θ=180° (friction). SI unit: Joule (J) = N⋅m. Scalar quantity."
      },
      {
        name: "Kinetic and Potential Energy",
        definition: "Energy is the capacity to do work. Kinetic Energy (KE) is the energy possessed by an object due to its motion: KE = ½mv². Gravitational Potential Energy (GPE) is the energy stored in an object due to its position: PE = mgh (m = mass, g = acceleration due to gravity, h = height above reference). Work-Energy Theorem: Net work done on an object equals the change in its kinetic energy: W_net = ΔKE = ½mv² − ½mu². Elastic Potential Energy is energy stored in stretched or compressed elastic objects (springs, rubber).",
        ncertDefinition: "Kinetic energy is the energy of a body due to its motion: KE = ½mv². Potential energy is the energy stored due to position or configuration. Gravitational PE = mgh. Work-energy theorem: W = ΔKE.",
        examText: "Important applications: (1) Work-energy theorem: W = KE_final − KE_initial = ½mv² − ½mu². (2) Deriving KE: from W = Fs and v² = 2as (for body starting from rest) → W = mas = m×(v²/2s)×s = ½mv². (3) PE = mgh: reference point (h=0) is chosen for convenience (often ground level). (4) Elastic PE in springs: PE = ½kx² (k = spring constant, x = extension/compression).",
        keywords: ["kinetic energy", "potential energy", "½mv²", "mgh", "work-energy theorem", "elastic potential energy"],
        highlights: [
          "KE = ½mv²: doubling speed quadruples KE (v² relationship). This is why crashes at 100 km/h are 4× more energetic than at 50 km/h.",
          "PE = mgh: at the same height, PE is proportional to mass only (g and h constant).",
          "Work-energy theorem: net work = change in KE. This links force, displacement, and energy in one equation."
        ],
        example: "A 2 kg ball falls freely from a height of 20 m. At ground level: KE gained = work done by gravity = mgh = 2×10×20 = 400 J. Velocity at ground: KE = ½mv² → 400 = ½×2×v² → v² = 400 → v = 20 m/s. Alternatively: v² = 2gh = 2×10×20 = 400 → v = 20 m/s ✓.",
        analogy: "Kinetic energy is like a moving bus — the energy is in its motion. Potential energy is like water stored in an elevated tank — the energy is in its position. When the bus brakes, its KE converts to heat. When the tank water flows down, its PE converts to KE.",
        visual: "Roller coaster diagram: at the top of each hill, PE is maximum and KE is minimum (v is low). At the bottom of each valley, KE is maximum and PE is minimum (v is high). Total mechanical energy = KE + PE = constant.",
        fact: "The kinetic energy of a 1 kg bullet travelling at 1000 m/s is ½ × 1 × 1,000,000 = 500,000 J (500 kJ) — enough energy to heat 1 litre of water from 0°C to boiling at 100°C and further vaporise 200 mL of it.",
        trick: "KE ∝ v²: double the speed → 4× the KE. This is why speed limits for trucks are set lower than for cars — heavy trucks carry enormous KE and require much longer braking distances.",
        mistakes: "Confusing weight (W = mg, a force in Newtons) with work (W = Fs, energy in Joules). Both use 'W' but they are completely different quantities with different SI units.",
        recap: "KE = ½mv². PE = mgh. Work-energy theorem: W_net = ΔKE = ½mv² − ½mu². Energy unit: Joule (J)."
      },
      {
        name: "Law of Conservation of Energy and Power",
        definition: "Law of Conservation of Energy: Energy can neither be created nor destroyed; it can only be transformed from one form to another. The total energy of an isolated system remains constant. For a freely falling body: Total Mechanical Energy = KE + PE = constant at every point. As height decreases, PE converts to KE (speed increases). At the ground, all PE has converted to KE. Power is the rate of doing work: P = W/t = F × v. SI unit: Watt (W) = 1 J/s. 1 kilowatt (kW) = 1000 W. 1 Horsepower (hp) ≈ 746 W.",
        ncertDefinition: "Energy can neither be created nor destroyed, only converted from one form to another. Total energy is conserved. Power P = W/t measured in watts (W).",
        examText: "Conservation of energy proof for free fall: At height h (velocity = 0): PE = mgh, KE = 0, Total = mgh. At mid-height h/2 (velocity = v₁): PE = mgh/2, KE = ½mv₁², by conservation: mgh/2 + ½mv₁² = mgh → ½mv₁² = mgh/2 → v₁ = √(gh). At ground (h = 0): PE = 0, KE = ½mv² = mgh. Power: P = W/t. Also P = F × v (force × velocity). Efficiency = (useful output energy / total input energy) × 100%.",
        keywords: ["conservation of energy", "power", "watt", "horsepower", "mechanical energy", "efficiency"],
        highlights: [
          "Mechanical energy = KE + PE. For conservative forces (gravity), mechanical energy is conserved.",
          "Power = Work/time = Force × velocity. A powerful machine does more work per second.",
          "1 hp = 746 W. Electrical energy unit: kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 MJ."
        ],
        example: "A 500 W electric motor lifts a 50 kg load 4 m in 4 seconds. Work done = mgh = 50×10×4 = 2000 J. Input energy = P×t = 500×4 = 2000 J. Efficiency = (2000/2000) × 100% = 100% (ideal — no friction). Real motors have efficiency below 100% due to heat losses.",
        analogy: "Conservation of energy is like a bank account: money (energy) can be transferred between accounts (forms) — from savings (PE) to checking (KE) — but the total in the bank system never changes (no creation or destruction).",
        visual: "Falling ball diagram: three positions. Top: PE=mgh, KE=0, bar shows all PE. Middle: PE=mgh/2, KE=mgh/2, bar shows 50/50 split. Bottom: PE=0, KE=mgh, bar shows all KE. Total bar same height throughout.",
        fact: "The Large Hadron Collider (LHC) at CERN accelerates protons to 99.9999991% of the speed of light. To stop such a proton beam would release 360 MJ of energy — equivalent to about 85 kg of TNT exploding.",
        trick: "For exam conservation problems: write Total Energy = KE + PE at position 1 = KE + PE at position 2. Fill in what's known, solve for the unknown. This method works for any conservative system.",
        mistakes: "Forgetting that friction and air resistance are non-conservative forces — they convert mechanical energy to heat, so total mechanical energy is NOT conserved when friction acts. Use 'work-energy theorem' instead of conservation of ME when friction is present.",
        recap: "Energy conserved: KE + PE = constant (no friction). Power = W/t = Fv. 1 W = 1 J/s. 1 kWh = 3.6 MJ."
      }
    ],
    formulas: [
      { name: "Work Done", equation: "W = Fs\\cos\\theta", variables: [{ symbol: "F", meaning: "force (N)" }, { symbol: "s", meaning: "displacement (m)" }, { symbol: "θ", meaning: "angle between F and s" }], context: "W=0 when θ=90°. W=-Fs when θ=180°." },
      { name: "Kinetic Energy", equation: "KE = \\frac{1}{2}mv^2", variables: [{ symbol: "m", meaning: "mass (kg)" }, { symbol: "v", meaning: "velocity (m/s)" }], context: "Energy due to motion. Doubles when v doubles? No — it quadruples (v² dependence)." },
      { name: "Gravitational Potential Energy", equation: "PE = mgh", variables: [{ symbol: "g", meaning: "9.8 m/s²" }, { symbol: "h", meaning: "height above reference (m)" }], context: "Energy stored due to elevated position." },
      { name: "Power", equation: "P = \\frac{W}{t} = Fv", variables: [{ symbol: "P", meaning: "power (W)" }, { symbol: "t", meaning: "time (s)" }], context: "Rate of doing work. 1 hp ≈ 746 W." }
    ],
    solved: [
      {
        question: "A 10 kg ball falls freely from a height of 5 m. Find its KE and PE at the midpoint (2.5 m above ground). Take g = 10 m/s².",
        thinking: "Use conservation of energy. Total ME at top = mgh = 10×10×5 = 500 J. At midpoint, PE = mgh/2 = 10×10×2.5 = 250 J. KE = Total − PE = 250 J.",
        steps: [
          "Total ME = mgh = 10 × 10 × 5 = 500 J",
          "At midpoint: h = 2.5 m, PE = mgh = 10×10×2.5 = 250 J",
          "KE = Total ME − PE = 500 − 250 = 250 J",
          "Velocity check: KE = ½mv² → 250 = ½×10×v² → v² = 50 → v = √50 ≈ 7.07 m/s"
        ],
        answer: "At midpoint: KE = 250 J, PE = 250 J, velocity ≈ 7.07 m/s.",
        tips: "At the midpoint of free fall, KE = PE = half the total mechanical energy. This is a common exam result worth memorising."
      }
    ],
    mcqs: [
      { question: "A coolie carries a heavy load on his head and walks on a horizontal platform. Work done by him on the load is:", options: ["Positive", "Negative", "Zero", "Depends on weight"], correctIndex: 2, explanation: "Force supporting load is vertical (upward). Displacement is horizontal. θ = 90° → W = Fs cos90° = 0." },
      { question: "A body at rest has:", options: ["Zero KE only", "Zero PE only", "Both KE and PE zero", "Only KE may be zero; PE depends on height"], correctIndex: 3, explanation: "A body at rest has zero KE (v=0). But PE depends on its height above the reference level — a stone resting at the top of a cliff has significant PE." },
      { question: "The SI unit of power is:", options: ["Joule", "Newton", "Watt", "Pascal"], correctIndex: 2, explanation: "Power = Work/time. SI unit = J/s = Watt (W), named after James Watt." },
      { question: "If the speed of a car is doubled, its kinetic energy becomes:", options: ["Doubled", "Halved", "Four times", "One-fourth"], correctIndex: 2, explanation: "KE = ½mv². If v doubles to 2v: new KE = ½m(2v)² = ½m×4v² = 4×(½mv²). KE quadruples." }
    ],
    flashcards: [
      { question: "State the work-energy theorem.", answer: "Net work done on an object = change in its kinetic energy. W_net = ½mv² − ½mu²." },
      { question: "When is work done zero?", answer: "When (1) displacement = 0 (pushing a fixed wall), (2) force ⊥ displacement (θ=90°), or (3) no force acts." },
      { question: "State the Law of Conservation of Energy.", answer: "Energy cannot be created or destroyed; it can only be transformed from one form to another. Total energy of an isolated system remains constant." },
      { question: "Formula for gravitational potential energy?", answer: "PE = mgh where m = mass, g = 9.8 m/s², h = height above reference level." },
      { question: "What is 1 kWh in joules?", answer: "1 kWh = 1000 W × 3600 s = 3,600,000 J = 3.6 × 10⁶ J = 3.6 MJ." }
    ],
    revisionPoints: [
      "W = Fs cosθ. Zero work when θ=90° or s=0. Negative work when θ=180° (friction).",
      "KE = ½mv². Doubling speed → 4× KE (v² relation).",
      "PE = mgh (gravitational). Reference level: h=0 (often ground).",
      "Work-energy theorem: W_net = ΔKE = ½mv² − ½mu².",
      "Conservation of energy: KE + PE = constant (no friction). PE ↔ KE conversion.",
      "Power = W/t = Fv. 1 W = 1 J/s. 1 hp = 746 W. 1 kWh = 3.6 MJ.",
      "Energy cannot be created or destroyed — only transformed."
    ],
    summaryPoints: [
      "Work in physics requires both a force and a displacement in the direction of the force — just expending effort without displacement yields zero work.",
      "The joule (J) is the SI unit of both work and energy, unifying these concepts under one measurable quantity.",
      "Kinetic energy (½mv²) depends on the square of velocity — doubling speed quadruples kinetic energy, explaining why road crashes at high speeds are so devastating.",
      "Gravitational potential energy (mgh) is stored energy that converts to kinetic energy as objects fall. The reference height for h = 0 can be chosen for convenience.",
      "The work-energy theorem bridges force mechanics and energy: the net work done on an object equals the change in its kinetic energy.",
      "The law of conservation of energy — arguably the most fundamental law in physics — states that energy only changes form, never disappears. Heat, sound, light, electricity, and mechanical energy are all interconvertible.",
      "Power measures energy transfer per unit time. The watt (J/s) is the SI unit. Real machines convert input energy to useful output with efficiency less than 100% due to heat losses.",
      "Applications span from hydroelectric power generation (PE → electrical energy) to crash safety design (KE dissipation in crumple zones) to sports biomechanics."
    ]
  },

  "sound-waves": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Explain how sound is produced and transmitted through different media.",
      "Identify sound waves as longitudinal mechanical waves with compressions and rarefactions.",
      "Distinguish between the characteristics of sound: loudness, pitch, and quality (timbre).",
      "Explain the reflection of sound and derive conditions for echo formation.",
      "Describe the working principle of SONAR and its applications."
    ],
    warmupQ: "How does a musical instrument like a guitar produce sound? What vibrates, what carries the sound, and why does a thicker string produce a lower note than a thinner one?",
    warmupFact: "Bats navigate in complete darkness using echolocation — they emit ultrasonic pulses at 20,000–200,000 Hz and interpret the returning echoes to build a 3D 'sound map' of their environment with centimetre precision, all in milliseconds!",
    warmupHint: "Sound is produced by vibrations. The guitar string vibrates → vibrations are transmitted to the air → air carries these vibrations as sound waves. A thicker string vibrates more slowly → lower frequency → lower pitch.",
    concepts: [
      {
        name: "Production and Propagation of Sound Waves",
        definition: "Sound is produced by the vibration of objects. The vibrating object creates alternating regions of high pressure (compressions) and low pressure (rarefactions) in the surrounding medium. These disturbances travel as longitudinal waves through the medium. Sound requires a material medium (solid, liquid, or gas) to travel — it cannot propagate in vacuum. Speed of sound depends on the medium: fastest in solids, slower in liquids, slowest in gases. Speed of sound in air at 25°C ≈ 343 m/s. Sound in water ≈ 1480 m/s. Sound in steel ≈ 5960 m/s.",
        ncertDefinition: "Sound is a mechanical wave that requires a material medium for propagation. It travels as longitudinal waves by creating compressions and rarefactions in the medium.",
        examText: "Key facts: (1) Sound cannot travel through vacuum (demonstrated by bell-in-jar experiment). (2) Compressions: regions of high pressure (particles close together). Rarefactions: regions of low pressure (particles spread apart). (3) Sound travels faster in solids > liquids > gases (due to greater intermolecular forces and closer spacing in solids). (4) Speed of sound in air increases with temperature (more molecular motion). (5) Wavelength λ = v/f (where v = wave speed, f = frequency).",
        keywords: ["sound waves", "longitudinal wave", "compression", "rarefaction", "medium", "speed of sound"],
        highlights: [
          "Sound is a longitudinal wave: particle displacement is parallel to wave propagation direction.",
          "In vacuum: no medium → no sound. This is why space is silent despite explosions.",
          "v = fλ (wave equation). v in air ≈ 343 m/s. v in water ≈ 4× that of air."
        ],
        example: "A tuning fork vibrating at 440 Hz (concert A) in air at 25°C: wavelength λ = v/f = 343/440 ≈ 0.78 m. In water: λ = 1480/440 ≈ 3.36 m. Same frequency but longer wavelength because sound travels faster in water.",
        analogy: "Sound waves in air are like a crowd doing 'the wave' in a stadium: each person (air molecule) moves back and forth (longitudinal), but the wave pattern moves forward through the crowd. No person (molecule) actually travels far.",
        visual: "Diagram of a vibrating tuning fork with compression (C) and rarefaction (R) regions labelled. Wavelength λ measured from C to C. Direction of wave propagation → shown with arrow.",
        fact: "Thunder and lightning occur simultaneously but we see lightning first and hear thunder later because light travels at 3×10⁸ m/s while sound travels at only 343 m/s. Count seconds between flash and thunder, divide by 3 to estimate distance in km.",
        trick: "Speed of sound in different media: solids FIRST (fastest), then liquids, then gases LAST (slowest). Remember: SLG order, same as 'Slow Liquids Go' (reverse the speed order).",
        mistakes: "Saying sound is a transverse wave. Sound waves are LONGITUDINAL — particles vibrate parallel to the direction of wave travel. Light waves are transverse; sound waves are not.",
        recap: "Sound = longitudinal mechanical wave. Compression (high pressure) + rarefaction (low pressure). Needs medium. v = fλ. Faster in solids > liquids > gases."
      },
      {
        name: "Characteristics of Sound — Loudness, Pitch, and Quality",
        definition: "Sound has three main characteristics: (1) Loudness: depends on amplitude (height of the wave). Greater amplitude → louder sound. Measured in decibels (dB). (2) Pitch: depends on frequency. High frequency → high pitch (shrill sound). Low frequency → low pitch (deep sound). Human hearing range: 20 Hz to 20,000 Hz. Below 20 Hz = infrasound. Above 20,000 Hz = ultrasound. (3) Quality (Timbre): what distinguishes two sounds of the same loudness and pitch from different instruments. Determined by the waveform (presence of overtones).",
        ncertDefinition: "Loudness depends on amplitude; pitch depends on frequency; quality (timbre) depends on the waveform. Human hearing range: 20 Hz to 20,000 Hz.",
        examText: "Frequency ranges: Infrasound < 20 Hz (used by elephants and whales for long-distance communication). Audible: 20–20,000 Hz. Ultrasound > 20,000 Hz (used by bats, dolphins; medical ultrasonography). Decibel scale: 0 dB (threshold of hearing) → 30 dB (whisper) → 60 dB (normal conversation) → 120 dB (threshold of pain). Time period T = 1/f. Wavelength λ = v/f = vT.",
        keywords: ["loudness", "amplitude", "pitch", "frequency", "quality", "timbre", "infrasound", "ultrasound", "decibel"],
        highlights: [
          "Loudness ∝ amplitude². Doubling amplitude makes sound 4× more energetic (not just 2×).",
          "Ultrasound (> 20,000 Hz) has applications in medicine (ultrasonography), industry (cleaning), and animal navigation (bats, dolphins).",
          "Infrasound (< 20 Hz): elephants, rhinos, and whales communicate over hundreds of km using infrasound."
        ],
        example: "A violin string vibrating at 440 Hz produces a note of pitch A4. A cello vibrating at 220 Hz produces A3 — one octave lower (half the frequency). Both may be equally loud (same amplitude) but they sound different (different quality/timbre due to overtones from each instrument's structure).",
        analogy: "Sound characteristics are like a singer's voice: loudness is how hard they sing (amplitude), pitch is the note they hit (frequency), and quality is what makes their voice recognisable even when you hear only a single note.",
        visual: "Three waveform diagrams side by side: (1) Soft sound: low amplitude. (2) Loud sound: high amplitude. (3) High pitch: short wavelength (high frequency). (4) Low pitch: long wavelength.",
        fact: "The human ear is most sensitive at around 1,000–4,000 Hz — the frequency range of speech. Mosquitoes buzz at ~600 Hz, conveniently within our most sensitive range, which is why we find them so annoying.",
        trick: "Pitch ↑ = Frequency ↑ = wavelength ↓ (since v = fλ and v is constant in same medium). Loudness ↑ = Amplitude ↑. Quality = waveform shape (overtones). These are three independent properties.",
        mistakes: "Confusing loudness with pitch. A foghorn is LOUD (high amplitude) but LOW pitch (low frequency). A whistle is less loud but HIGH pitch (high frequency). They are independent characteristics.",
        recap: "Loudness ∝ amplitude. Pitch ∝ frequency. Quality = waveform. Human range: 20–20,000 Hz. Infrasound < 20 Hz. Ultrasound > 20,000 Hz."
      },
      {
        name: "Reflection of Sound — Echo, Reverberation, and SONAR",
        definition: "Sound reflects off hard surfaces following the law of reflection (angle of incidence = angle of reflection). Echo: the distinct repetition of sound heard after reflection from a distant hard surface. For a distinct echo, the minimum distance between the source and the reflector must be at least 17.2 m (at 25°C). This is because the human ear needs at least 0.1 s to distinguish between two sounds, and in 0.1 s at 343 m/s, sound travels 34.3 m (out and back = 2 × 17.15 m). Reverberation: the persistence of sound in a room due to multiple reflections. SONAR (Sound Navigation And Ranging): uses ultrasound to detect underwater objects by measuring the time delay of the reflected pulse.",
        ncertDefinition: "Sound reflects from surfaces following the same laws as light reflection. Echo occurs when reflected sound is heard distinctly after 0.1 s. SONAR uses reflected ultrasound to determine distances underwater.",
        examText: "Echo distance calculation: d = v × t/2 (one-way distance = total time × speed / 2). For distinct echo: t ≥ 0.1 s → minimum distance = 343 × 0.1/2 = 17.15 m ≈ 17.2 m. SONAR depth: depth = v_water × t / 2. Reverberation: prolonged sound due to rapid multiple reflections. Controlled by acoustic absorbers (carpets, curtains, foam panels) in halls and studios. Stethoscope, megaphone, and soundboard work by directing and amplifying reflected sound.",
        keywords: ["echo", "reverberation", "SONAR", "reflection of sound", "17.2 m", "ultrasound", "acoustic engineering"],
        highlights: [
          "Minimum distance for echo = 17.2 m. Based on: human ear needs 0.1 s to distinguish two sounds; sound travels at 343 m/s.",
          "SONAR: distance = v_water × t/2. Used for submarine detection, ocean depth mapping, fish finding.",
          "Reverberation control: concert halls use acoustic panels, soft furnishings, and angled walls to achieve optimal echo delay."
        ],
        example: "A SONAR pulse is sent downward and the echo returns in 2 seconds. Speed of sound in water = 1500 m/s. Depth of ocean = 1500 × 2/2 = 1500 m (total distance = 3000 m for round trip, so depth = 1500 m).",
        analogy: "SONAR is like shouting in a canyon and timing the echo: the longer the echo takes to return, the farther away the canyon wall. SONAR does the same thing underwater with ultrasound pulses instead of shouts.",
        visual: "SONAR diagram: ship on surface sends pulse down (arrow). Pulse hits ocean floor (reflection). Echo returns to ship (arrow up). Time = t. Depth = (1500 m/s × t)/2.",
        fact: "The Titanic sank in 1912. SONAR was invented just 4 years later in 1916 — partly motivated by the disaster. If SONAR had existed in 1912, the iceberg could have been detected and the collision avoided.",
        trick: "Echo formula: distance = (v × t)/2. Divide by 2 because sound travels TO the reflector AND BACK. Always halve the total time (or total distance) to get the one-way distance.",
        mistakes: "Using the full time t in echo calculations without dividing by 2. Sound must travel OUT and BACK — so the one-way distance is always speed × (t/2), not speed × t.",
        recap: "Echo: minimum 17.2 m (0.1 s delay). SONAR: depth = v×t/2. Reverberation: multiple rapid reflections. Ultrasound > 20,000 Hz used in SONAR, medicine, industry."
      }
    ],
    formulas: [
      { name: "Wave Equation", equation: "v = f\\lambda", variables: [{ symbol: "v", meaning: "wave speed (m/s)" }, { symbol: "f", meaning: "frequency (Hz)" }, { symbol: "λ", meaning: "wavelength (m)" }], context: "Applies to all waves (sound, light, water)." },
      { name: "SONAR Distance", equation: "d = \\frac{v \\times t}{2}", variables: [{ symbol: "d", meaning: "distance to reflector (m)" }, { symbol: "t", meaning: "total time for echo to return (s)" }], context: "d is the one-way distance (depth). v_water ≈ 1500 m/s." },
      { name: "Time Period", equation: "T = \\frac{1}{f}", variables: [{ symbol: "T", meaning: "time period (s)" }], context: "T and f are inversely related." }
    ],
    solved: [
      {
        question: "A person standing near a cliff shouts and hears the echo after 4 seconds. Calculate the distance between the person and the cliff. (Speed of sound = 340 m/s)",
        thinking: "Echo: sound travels from person → cliff → back to person. Total time = 4 s. Total distance = speed × time. Distance to cliff = total distance / 2.",
        steps: [
          "Total time for echo = 4 s. Speed of sound = 340 m/s.",
          "Total distance covered by sound = 340 × 4 = 1360 m.",
          "Distance from person to cliff = 1360/2 = 680 m."
        ],
        answer: "Distance to cliff = 680 m.",
        tips: "Always remember: divide by 2 for echo problems because sound makes a round trip."
      }
    ],
    mcqs: [
      { question: "Which of the following can travel through vacuum?", options: ["Sound waves", "Ultrasound", "Infrasound", "Light waves"], correctIndex: 3, explanation: "Sound is a mechanical wave requiring a medium. Light is an electromagnetic wave that can travel through vacuum." },
      { question: "The minimum distance required for an echo to be heard distinctly is approximately:", options: ["34 m", "17 m", "10 m", "50 m"], correctIndex: 1, explanation: "Minimum distance ≈ 17.2 m (at 25°C). Based on 0.1 s time needed by human ear and v = 343 m/s." },
      { question: "A bat uses which type of wave for navigation?", options: ["Infrasound", "Audible sound", "Ultrasound", "Radio waves"], correctIndex: 2, explanation: "Bats emit ultrasound (> 20,000 Hz) and detect echoes for echolocation (navigation and prey detection)." },
      { question: "The pitch of a sound depends on:", options: ["Amplitude", "Speed", "Frequency", "Wavelength"], correctIndex: 2, explanation: "Pitch is the subjective perception of frequency. High frequency → high pitch (shrill). Low frequency → low pitch." },
      { question: "SONAR stands for:", options: ["Sound Navigation And Ranging", "Sound And Noise Radar", "Sonic Navigation And Ranging", "Sound Noise And Ranging"], correctIndex: 0, explanation: "SONAR = Sound Navigation And Ranging. It uses reflected sound (usually ultrasound) to detect and locate objects underwater." }
    ],
    flashcards: [
      { question: "What type of wave is sound?", answer: "Longitudinal mechanical wave — particle displacement is parallel to wave propagation. Requires a medium." },
      { question: "What is the human audible frequency range?", answer: "20 Hz to 20,000 Hz (20 kHz). Below 20 Hz = infrasound. Above 20,000 Hz = ultrasound." },
      { question: "State the condition for a distinct echo.", answer: "Time between original sound and echo ≥ 0.1 s → minimum distance ≥ 17.2 m at 25°C." },
      { question: "What does SONAR measure and how?", answer: "Distance to underwater objects. Formula: d = v×t/2. Uses ultrasound pulses and measures time for echo to return." },
      { question: "What is reverberation?", answer: "The persistence of sound in an enclosed space due to multiple rapid reflections. Reduced by acoustic absorbers (soft furnishings, foam panels)." }
    ],
    revisionPoints: [
      "Sound: longitudinal mechanical wave. Compressions (high pressure) + rarefactions (low pressure). Cannot travel in vacuum.",
      "Speed of sound: solids > liquids > gases. In air at 25°C ≈ 343 m/s. v = fλ.",
      "Loudness ∝ amplitude. Pitch ∝ frequency. Quality = waveform.",
      "Human range: 20 Hz – 20,000 Hz. Infrasound < 20 Hz. Ultrasound > 20,000 Hz.",
      "Echo: reflected sound heard distinctly after ≥ 0.1 s. Minimum distance ≈ 17.2 m.",
      "SONAR: depth = v×t/2 (v in water ≈ 1500 m/s).",
      "Reverberation: multiple rapid reflections. Controlled with acoustic panels in concert halls."
    ],
    summaryPoints: [
      "Sound is produced by vibrating objects and propagated as longitudinal waves through a medium via alternating compressions and rarefactions.",
      "Sound is a mechanical wave — it requires a material medium and cannot travel through vacuum. This makes space completely silent.",
      "The speed of sound is greatest in solids, intermediate in liquids, and lowest in gases. In air at room temperature it is approximately 343 m/s.",
      "Three independent characteristics define a sound: loudness (amplitude), pitch (frequency), and quality/timbre (waveform shape).",
      "Human hearing spans 20 Hz to 20,000 Hz. Infrasound (below 20 Hz) and ultrasound (above 20 kHz) exist beyond this range with important applications.",
      "Echo formation requires a minimum distance of 17.2 m, as the human ear needs 0.1 seconds to distinguish between an original sound and its reflection.",
      "Reverberation — prolonged sound in enclosed spaces — is deliberately managed in concert halls through acoustic design using absorbing materials and angled surfaces.",
      "SONAR exploits the echo principle using ultrasound to map ocean floors, detect submarines, and guide navigation — with applications in fisheries, geology, and naval defence."
    ]
  }
};
