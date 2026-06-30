// NCERT 2026 Math Content - "Ganita Manjari" (Part 1)
// All 8 chapters with comprehensive academic content aligned with NEP 2020

import { FullChapterData } from "./scienceContent";

export const MATH_CONTENT: Record<string, FullChapterData> = {

  "coordinates": {
    difficulty: "Easy",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Understand the need for a coordinate system to describe location precisely.",
      "Plot and identify points in all four quadrants of the Cartesian plane.",
      "Find the distance between two points using the distance formula.",
      "Apply coordinates to solve real-world location and map-reading problems.",
      "Identify x-intercepts and y-intercepts of lines on a coordinate plane."
    ],
    warmupQ: "A city map uses grid references like 'B-4' to locate places. How is this similar to the Cartesian coordinate system? What are the limitations of a lettered grid vs. a numbered coordinate system?",
    warmupFact: "René Descartes invented the coordinate system in the 17th century while lying sick in bed — he watched a fly walk across his ceiling and wondered how to describe its exact position at each instant. From that observation, an entire branch of mathematics (Analytic Geometry) was born!",
    warmupHint: "A Cartesian grid uses two perpendicular number lines — horizontal (x-axis) and vertical (y-axis) — crossing at the origin (0,0).",
    concepts: [
      {
        name: "The Cartesian Coordinate System",
        definition: "The Cartesian coordinate system (named after René Descartes) uses two perpendicular number lines — the horizontal x-axis and the vertical y-axis — crossing at a point called the origin (O), where x = 0 and y = 0. Any point in the plane is uniquely identified by an ordered pair (x, y) called coordinates, where x is the horizontal distance from the origin (positive right, negative left) and y is the vertical distance (positive up, negative down).",
        ncertDefinition: "A Cartesian coordinate system consists of two mutually perpendicular axes — the x-axis (horizontal) and y-axis (vertical) — intersecting at the origin. Every point in the plane is assigned coordinates (x, y).",
        examText: "Key terms: Abscissa = x-coordinate (horizontal distance). Ordinate = y-coordinate (vertical distance). Origin = (0, 0). Axes divide the plane into 4 quadrants: Q1 (+,+), Q2 (−,+), Q3 (−,−), Q4 (+,−). Points on the x-axis: y = 0. Points on the y-axis: x = 0.",
        keywords: ["Cartesian plane", "coordinates", "x-axis", "y-axis", "origin", "quadrant", "abscissa", "ordinate"],
        highlights: [
          "Quadrant I (+x, +y), Quadrant II (−x, +y), Quadrant III (−x, −y), Quadrant IV (+x, −y).",
          "The origin (0,0) is on both axes — neither x nor y is positive or negative at origin.",
          "A point on the x-axis has y-coordinate = 0. On the y-axis, x-coordinate = 0."
        ],
        example: "Point A(3, −2): Move 3 units right on x-axis, then 2 units down — falls in Quadrant IV. Point B(−4, 5): Move 4 left, 5 up — falls in Quadrant II.",
        analogy: "Coordinates are like a street address: x-coordinate is the block number on the east-west road; y-coordinate is the block number on the north-south road. Together they uniquely pin down any location in the city.",
        visual: "Full Cartesian grid labelled with all 4 quadrants, numbered axes from −5 to +5, with sample points plotted and labelled.",
        fact: "GPS systems use a three-dimensional coordinate system (latitude, longitude, altitude) that is essentially an extension of Descartes' two-dimensional grid to a spherical Earth.",
        trick: "All Students Take Calculus: Quadrant I — All positive. Quadrant II — Sine positive. Quadrant III — Tangent positive. Quadrant IV — Cosine positive.",
        mistakes: "Writing coordinates as (y, x) instead of (x, y). Always put x (horizontal) first and y (vertical) second in an ordered pair.",
        recap: "Cartesian plane: two perpendicular axes, origin (0,0), four quadrants. Every point = ordered pair (x, y) = (abscissa, ordinate)."
      },
      {
        name: "Distance Formula and Midpoint Formula",
        definition: "The Distance Formula gives the straight-line distance between two points P₁(x₁, y₁) and P₂(x₂, y₂) on the coordinate plane: d = √[(x₂−x₁)² + (y₂−y₁)²]. This is derived directly from Pythagoras' theorem. The Midpoint Formula gives the coordinates of the point exactly halfway between two points: M = ((x₁+x₂)/2, (y₁+y₂)/2).",
        ncertDefinition: "The distance between two points with coordinates (x₁,y₁) and (x₂,y₂) is d = √[(x₂−x₁)² + (y₂−y₁)²], derived from the Pythagorean theorem.",
        examText: "Distance formula derivation: Draw right triangle with hypotenuse = line segment between two points. Horizontal leg = |x₂−x₁|, Vertical leg = |y₂−y₁|. By Pythagoras: d² = (x₂−x₁)² + (y₂−y₁)². Distance from origin (0,0) to point (x,y): d = √(x²+y²).",
        keywords: ["distance formula", "midpoint formula", "Pythagorean theorem", "coordinate geometry"],
        highlights: [
          "Always square the differences: d = √[(x₂−x₁)² + (y₂−y₁)²]. Squaring removes negative sign issues.",
          "Midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2) — average the x's and average the y's."
        ],
        example: "Distance between A(1, 2) and B(4, 6): d = √[(4−1)² + (6−2)²] = √[9+16] = √25 = 5 units. Midpoint = ((1+4)/2, (2+6)/2) = (2.5, 4).",
        analogy: "The distance formula is Pythagoras lifted off the page and placed in a coordinate system. The two legs of the right triangle are just horizontal and vertical coordinate differences.",
        visual: "Coordinate grid with points A(1,2) and B(4,6), right triangle drawn with legs labelled Δx=3 and Δy=4, hypotenuse labelled d=5.",
        fact: "The distance formula works in 3D too: d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²] — used by GPS satellites to triangulate your exact 3D position.",
        trick: "To avoid sign errors, use (x₂−x₁)² since squaring makes it positive regardless. You never need absolute value signs when squaring.",
        mistakes: "Forgetting to take the square root at the end. d² = (difference)² + (difference)², so d = √(sum of squares), not the sum of squares.",
        recap: "Distance d = √[(x₂−x₁)² + (y₂−y₁)²]. Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2). Derived from Pythagoras."
      },
      {
        name: "Coordinates in Real-World Mapping and Graphs",
        definition: "Coordinate systems have direct real-world applications: maps, navigation, data visualization, and graphing relationships. A graph on a coordinate plane can represent a mathematical relationship — such as y = 2x + 3, which when plotted produces a straight line. Every point on the line satisfies the equation. Reading graphs means interpreting coordinates as real quantities (distance, time, temperature, etc.).",
        ncertDefinition: "Coordinates are used to represent real-world data and mathematical relationships. A point (x, y) on a graph represents specific values of two related quantities.",
        examText: "Application questions: (1) Two friends start from A(0,0) and B(6,0). They walk toward each other — find meeting point. (2) A ship's position is at (−3, 4). Find its distance from the port at (0,0). (3) A graph of temperature vs. time uses time on x-axis and temperature on y-axis.",
        keywords: ["graphing", "coordinate applications", "mapping", "real-world coordinates"],
        highlights: [
          "Any linear equation Ax + By = C forms a straight line when graphed.",
          "x-intercept: set y = 0, solve for x. y-intercept: set x = 0, solve for y.",
          "Distance from origin to any point (x,y) = √(x² + y²)."
        ],
        example: "A radar station at origin detects an aircraft at (−240, 70) km. Distance = √(240² + 70²) = √(57600 + 4900) = √62500 = 250 km.",
        analogy: "Reading a graph is like reading a city map — the x and y values together tell you exactly where you are in the 'space' the graph represents, whether that space is position, time, or temperature.",
        visual: "Real-world map overlaid on a grid: School at (2,3), Library at (−1,4), Park at (0,−2). Students calculate distances between locations.",
        fact: "Google Maps uses a coordinate system based on latitude (y-axis, −90° to +90°) and longitude (x-axis, −180° to +180°) to locate every point on Earth's surface.",
        trick: "For intercepts: x-intercept → substitute y=0. y-intercept → substitute x=0. These are easy points to find for plotting any straight line.",
        mistakes: "Confusing x-intercept (where graph crosses x-axis, y=0) with y-intercept (where it crosses y-axis, x=0).",
        recap: "Coordinates describe real-world positions. Graphs represent relationships. x-intercept: y=0. y-intercept: x=0."
      }
    ],
    formulas: [
      { name: "Distance Formula", equation: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}", variables: [{ symbol: "(x₁,y₁)", meaning: "First point" }, { symbol: "(x₂,y₂)", meaning: "Second point" }], context: "Straight-line distance between two points on a Cartesian plane." },
      { name: "Midpoint Formula", equation: "M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)", variables: [{ symbol: "M", meaning: "Midpoint coordinates" }], context: "Coordinates of the exact middle point of a line segment." }
    ],
    solved: [
      {
        question: "Find the distance between points P(−3, 4) and Q(5, −2).",
        thinking: "Apply distance formula with (x₁,y₁) = (−3,4) and (x₂,y₂) = (5,−2).",
        steps: [
          "Δx = x₂ − x₁ = 5 − (−3) = 8",
          "Δy = y₂ − y₁ = −2 − 4 = −6",
          "d = √[(8)² + (−6)²] = √[64 + 36] = √100 = 10 units"
        ],
        answer: "Distance PQ = 10 units.",
        tips: "When subtracting negative numbers: 5 − (−3) = 5 + 3 = 8. Be careful with double negatives."
      }
    ],
    mcqs: [
      { question: "The point (−3, 4) lies in which quadrant?", options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], correctIndex: 1, explanation: "Negative x, positive y → Quadrant II." },
      { question: "The distance between the origin (0,0) and point (5, 12) is:", options: ["17", "13", "7", "169"], correctIndex: 1, explanation: "d = √(5² + 12²) = √(25+144) = √169 = 13." },
      { question: "The midpoint of (2, 6) and (8, 4) is:", options: ["(5, 5)", "(10, 10)", "(3, 5)", "(5, 3)"], correctIndex: 0, explanation: "Midpoint = ((2+8)/2, (6+4)/2) = (5, 5)." },
      { question: "A point on the y-axis has:", options: ["x = 0", "y = 0", "Both x and y = 0", "x = y"], correctIndex: 0, explanation: "Points on the y-axis have x-coordinate = 0, e.g. (0, 3), (0, −5)." },
      { question: "The abscissa of point (7, −3) is:", options: ["−3", "7", "4", "21"], correctIndex: 1, explanation: "Abscissa = x-coordinate = 7." }
    ],
    flashcards: [
      { question: "What is the origin in a Cartesian system?", answer: "The point (0, 0) where the x-axis and y-axis intersect." },
      { question: "State the distance formula.", answer: "d = √[(x₂−x₁)² + (y₂−y₁)²]" },
      { question: "What are the signs of coordinates in Quadrant III?", answer: "Both x and y are negative (−, −)." },
      { question: "What is the abscissa?", answer: "The x-coordinate (horizontal distance from the y-axis)." },
      { question: "State the midpoint formula.", answer: "M = ((x₁+x₂)/2, (y₁+y₂)/2)" }
    ],
    revisionPoints: [
      "x-axis: horizontal. y-axis: vertical. Origin: (0,0). Ordered pair: (x, y) = (abscissa, ordinate).",
      "Q1: (+,+). Q2: (−,+). Q3: (−,−). Q4: (+,−).",
      "Distance = √[(x₂−x₁)² + (y₂−y₁)²].",
      "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2).",
      "x-intercept: set y=0. y-intercept: set x=0.",
      "Distance from origin: √(x² + y²)."
    ],
    summaryPoints: [
      "Descartes' coordinate system provides a precise, quantitative language to describe position and relationships in a plane.",
      "Every point is uniquely identified by an ordered pair (x, y); the x-coordinate measures horizontal position, y-coordinate measures vertical position.",
      "The four quadrants organize the plane based on the signs of coordinates, helping quickly identify regions.",
      "The distance formula is an application of the Pythagorean theorem to coordinate geometry.",
      "The midpoint formula averages the coordinates — it generalizes the idea of 'finding the middle of two numbers'.",
      "Coordinate systems are foundational in science, engineering, mapping, and data visualization."
    ]
  },

  "linear-polynomials": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "Define polynomials and classify them by degree and number of terms.",
      "Identify the zero (root) of a linear polynomial.",
      "Graph linear polynomials and interpret slope and y-intercept.",
      "Apply linear equations to solve real-world word problems.",
      "Understand the Factor Theorem for linear factors."
    ],
    warmupQ: "A school canteen sells samosas at ₹5 each. Write an expression for the total cost C when you buy n samosas. If you have ₹85, how many samosas can you buy? This is a linear polynomial problem!",
    warmupFact: "The ancient Babylonians solved linear equations over 4,000 years ago using clay tablets — without any algebraic notation! They described everything in words and solved by 'cut and paste' geometric methods.",
    warmupHint: "A linear polynomial is one where the highest power of x is exactly 1 — it forms a straight line when graphed.",
    concepts: [
      {
        name: "Polynomials: Definitions and Classification",
        definition: "A polynomial in one variable x is an algebraic expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀, where the coefficients aᵢ are real numbers and n is a non-negative integer. The degree is the highest power of the variable. Classification: Constant (degree 0), Linear (degree 1), Quadratic (degree 2), Cubic (degree 3). By terms: Monomial (1 term), Binomial (2 terms), Trinomial (3 terms).",
        ncertDefinition: "A polynomial is an algebraic expression consisting of variables and coefficients, where the exponents of variables are non-negative integers. The degree of a polynomial is the highest power of the variable.",
        examText: "Examples: 3x + 5 (linear, binomial, degree 1). 2x² − 4x + 1 (quadratic, trinomial, degree 2). 7 (constant, monomial, degree 0). x³ − 8 (cubic, binomial, degree 3). Important: √x, 1/x, and x⁻² are NOT polynomials (exponents must be non-negative integers).",
        keywords: ["polynomial", "degree", "monomial", "binomial", "trinomial", "linear", "quadratic", "cubic"],
        highlights: [
          "Degree = highest power of variable. A constant polynomial has degree 0.",
          "Polynomials must have non-negative integer exponents. No √x, no 1/x.",
          "A zero polynomial (p(x) = 0) has no defined degree."
        ],
        example: "p(x) = 4x³ − 2x² + 7x − 1: degree = 3 (cubic), 4 terms (polynomial), leading coefficient = 4, constant term = −1.",
        analogy: "A polynomial is like a multi-layer cake where each 'layer' is a power of x multiplied by a coefficient. The topmost layer (highest power) determines the cake's 'degree' (complexity).",
        visual: "Classification table: Degree 0 = Constant (e.g. 5). Degree 1 = Linear (e.g. 3x+2). Degree 2 = Quadratic (e.g. x²−4). Degree 3 = Cubic (e.g. x³+x).",
        fact: "Polynomials are used in computer graphics to draw smooth curved surfaces — every curve in a 3D video game is approximated by polynomial equations.",
        trick: "Check if it is a polynomial: (1) Only non-negative integer powers of x. (2) No variables in denominators. (3) No fractional powers of x.",
        mistakes: "Calling 2/x or x^(1/2) a polynomial. These are NOT polynomials because the exponent is negative or fractional.",
        recap: "Polynomial: non-negative integer exponents only. Degree = highest power. Classified by degree (constant/linear/quadratic/cubic) and number of terms."
      },
      {
        name: "Linear Polynomials, Zeros, and Graphing",
        definition: "A linear polynomial has the form p(x) = ax + b (a ≠ 0). Its zero (root) is the value of x for which p(x) = 0, i.e. x = −b/a. Graphically, a linear polynomial represents a straight line y = ax + b on the Cartesian plane. The slope 'a' determines steepness and direction; y-intercept 'b' is where the line crosses the y-axis; x-intercept (zero of polynomial) is where the line crosses the x-axis.",
        ncertDefinition: "The zero of a polynomial p(x) is the value of x for which p(x) = 0. A linear polynomial ax + b has exactly one zero: x = −b/a.",
        examText: "Key facts: (1) Linear polynomial has exactly ONE zero. (2) Zero of p(x) = ax + b is x = −b/a. (3) Slope of line = a (coefficient of x). Positive slope → line goes up-right. Negative slope → line goes down-right. (4) Lines y = a (horizontal, slope 0) and x = b (vertical, undefined slope).",
        keywords: ["zero of polynomial", "root", "slope", "y-intercept", "x-intercept", "linear function"],
        highlights: [
          "One linear polynomial → exactly one zero (one x-intercept).",
          "Slope a > 0: increasing line (left to right). Slope a < 0: decreasing line.",
          "Two linear equations can have: one solution (intersecting), no solution (parallel), or infinite solutions (coincident/same line)."
        ],
        example: "p(x) = 3x − 9. Zero: 3x − 9 = 0 → x = 3. Graph: straight line with slope = 3, y-intercept = −9, crossing x-axis at (3, 0).",
        analogy: "The zero of a polynomial is the 'landing point' — where the graph of the function touches or crosses the x-axis (ground level). For a linear polynomial, there is exactly one such landing point.",
        visual: "Graph of y = 2x − 4: straight line cutting x-axis at (2,0) and y-axis at (0,−4). Slope = 2, y-intercept = −4, zero = x = 2.",
        fact: "Every equation of a straight line in real life is a linear polynomial: y = mx + c where m is slope and c is y-intercept.",
        trick: "To find zero of p(x) = ax + b: set p(x) = 0 → ax + b = 0 → x = −b/a. Quick formula: zero = −(constant term)/(coefficient of x).",
        mistakes: "Confusing zero of polynomial (where p(x)=0) with zero polynomial (p(x)=0 for all x). They are very different concepts.",
        recap: "Linear: ax + b (degree 1). Zero = x = −b/a. Graph = straight line. Slope = a. y-intercept = b."
      },
      {
        name: "Word Problems and Real-World Applications of Linear Equations",
        definition: "Linear polynomials and linear equations model many real-world situations involving direct proportionality, unit rates, perimeter problems, age problems, coin problems, and mixture problems. The key skill is translating a word problem into an algebraic equation of the form ax + b = 0 or ax + b = c, solving for x, and interpreting the answer in context.",
        ncertDefinition: "Linear equations are used to model real-world situations where two quantities have a constant rate of relationship. Setting up the equation correctly and interpreting the solution are key skills.",
        examText: "Standard problem types: (1) Number problems: 'A number is 3 more than twice another. Their sum is 27. Find both.' (2) Age problems: 'Ravi is 5 years older than Sita. In 3 years, Ravi will be twice Sita's age.' (3) Perimeter: 'Perimeter of rectangle = 40. Length is 4 more than width. Find dimensions.' (4) Distance-speed-time: 'Two trains, rates, time to meet.' Strategy: Let x = unknown. Write equation. Solve. Verify.",
        keywords: ["word problems", "linear equations", "algebraic modelling", "solving equations"],
        highlights: [
          "Always define your variable clearly: 'Let x = ...'",
          "Verify your answer by substituting back into original conditions.",
          "Read carefully for keywords: 'sum' = add, 'difference' = subtract, 'times' = multiply, 'ratio' = divide."
        ],
        example: "A rectangular field has perimeter 60 m. The length is twice the width. Find the length and width. Let width = x. Length = 2x. Perimeter = 2(length + width) = 2(2x + x) = 6x = 60. So x = 10 m. Width = 10 m, Length = 20 m.",
        analogy: "Setting up a word problem in algebra is like translating from one language to another: words like 'total cost', 'more than', 'twice as many' are translated into mathematical operations +, ×, etc.",
        visual: "Step-by-step worked example in two columns: Left = English description; Right = Algebraic translation.",
        fact: "Ancient Indian mathematician Brahmagupta (7th century CE) solved complex linear and quadratic equations using systematic methods that predate European algebra by centuries.",
        trick: "For age problems: always use a table with columns (Name, Age Now, Age in X years). This organizes information and prevents errors.",
        mistakes: "Forgetting units in the final answer. A length answer must be in metres, not just a bare number.",
        recap: "Translate words → variables → equation → solve → verify and interpret. Define x clearly at the start."
      }
    ],
    formulas: [
      { name: "Zero of Linear Polynomial", equation: "\\text{Zero of } (ax+b) = -\\frac{b}{a}", variables: [{ symbol: "a", meaning: "coefficient of x (≠0)" }, { symbol: "b", meaning: "constant term" }], context: "Find x where p(x) = 0." },
      { name: "Slope-Intercept Form", equation: "y = mx + c", variables: [{ symbol: "m", meaning: "slope (gradient)" }, { symbol: "c", meaning: "y-intercept" }], context: "Standard form of a linear function for graphing." }
    ],
    solved: [
      {
        question: "The sum of two consecutive integers is 47. Find the integers.",
        thinking: "Let the smaller integer be x. Then the next consecutive integer is x + 1. Their sum equals 47.",
        steps: [
          "Let smaller integer = x. Consecutive integer = x + 1.",
          "x + (x + 1) = 47",
          "2x + 1 = 47",
          "2x = 46",
          "x = 23. So x + 1 = 24."
        ],
        answer: "The two consecutive integers are 23 and 24. Verification: 23 + 24 = 47 ✓",
        tips: "Always verify by substituting back. Consecutive integers differ by 1; consecutive even/odd integers differ by 2."
      }
    ],
    mcqs: [
      { question: "The zero of the polynomial p(x) = 3x − 12 is:", options: ["12", "3", "4", "−4"], correctIndex: 2, explanation: "3x − 12 = 0 → 3x = 12 → x = 4." },
      { question: "Which of the following is NOT a polynomial?", options: ["3x² − 2x + 1", "x + √5", "1/x + 3", "5"], correctIndex: 2, explanation: "1/x = x⁻¹ has a negative exponent — not allowed in polynomials." },
      { question: "The degree of the polynomial 5x³ − 2x + 7 is:", options: ["1", "3", "2", "5"], correctIndex: 1, explanation: "The highest power of x is 3, so the degree = 3." },
      { question: "The slope of the line y = −4x + 7 is:", options: ["7", "4", "−4", "−7"], correctIndex: 2, explanation: "In y = mx + c, m = slope = −4." },
      { question: "A linear polynomial has how many zeros?", options: ["0", "1", "2", "Infinitely many"], correctIndex: 1, explanation: "A linear polynomial ax + b (a≠0) has exactly one zero: x = −b/a." }
    ],
    flashcards: [
      { question: "What is the degree of a linear polynomial?", answer: "Degree 1 — the highest power of the variable is 1 (e.g. 3x + 5)." },
      { question: "What is the zero of a polynomial?", answer: "The value of x for which p(x) = 0." },
      { question: "Find the zero of p(x) = 5x + 15.", answer: "5x + 15 = 0 → x = −3." },
      { question: "What makes an expression NOT a polynomial?", answer: "Negative exponents (1/x), fractional exponents (√x), or variables in denominators." },
      { question: "What is the y-intercept of y = 3x − 7?", answer: "Set x = 0: y = −7. The y-intercept is (0, −7)." }
    ],
    revisionPoints: [
      "Polynomial: only non-negative integer exponents. No 1/x or x^(1/2).",
      "Degree = highest power. Degree 1 = linear. Degree 2 = quadratic. Degree 3 = cubic.",
      "Zero of p(x): value of x where p(x) = 0. Zero of (ax+b) = −b/a.",
      "Linear polynomial has exactly ONE zero.",
      "Graph of linear polynomial = straight line. Slope = coefficient of x.",
      "y = mx + c: m = slope, c = y-intercept."
    ],
    summaryPoints: [
      "Polynomials are algebraic expressions with non-negative integer exponents; they are classified by degree (linear, quadratic, cubic) and number of terms.",
      "A linear polynomial p(x) = ax + b has exactly one zero: x = −b/a, where the graph crosses the x-axis.",
      "Graphing a linear polynomial produces a straight line with slope = a (coefficient of x) and y-intercept = b.",
      "Real-world problems involving constant rates, direct proportions, and linear change are modelled by linear polynomials.",
      "The strategy for word problems is: define variable → write equation → solve → verify → interpret in context."
    ]
  },

  "world-of-numbers": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Classify real numbers into natural, whole, integers, rational, and irrational numbers.",
      "Represent irrational numbers on a number line using geometric construction.",
      "Rationalize denominators containing surds.",
      "Apply laws of exponents for real numbers including fractional and negative exponents.",
      "Understand the density property and completeness of real numbers."
    ],
    warmupQ: "Is √2 a fraction? Can you write it as p/q where p and q are integers? If not, where does it fit on the number line?",
    warmupFact: "The ancient Greek mathematician Hippasus reportedly proved that √2 is irrational — legend says his fellow Pythagoreans were so disturbed by this discovery (which shattered their belief that all numbers are rational) that they threw him overboard into the sea!",
    warmupHint: "Rational numbers can be written as p/q (fractions). Irrational numbers cannot — their decimal expansions are non-terminating and non-repeating.",
    concepts: [
      {
        name: "Number Classification: Natural to Real Numbers",
        definition: "The number system is hierarchical: Natural numbers (N) = {1, 2, 3, …}. Whole numbers (W) = {0, 1, 2, 3, …}. Integers (Z) = {…, −2, −1, 0, 1, 2, …}. Rational numbers (Q) = {p/q : p,q ∈ Z, q ≠ 0} — includes all terminating and recurring decimals. Irrational numbers (Q') cannot be expressed as p/q — their decimal form is non-terminating and non-repeating (e.g. √2, π, e). Real numbers (R) = Q ∪ Q' = all rational + irrational numbers.",
        ncertDefinition: "Real numbers include rational numbers (expressible as p/q, q≠0) and irrational numbers (non-terminating, non-repeating decimals). The entire number line represents real numbers.",
        examText: "Key properties: Every rational number is real but not every real is rational. The decimal expansion of a rational number is either terminating (e.g. 3/4 = 0.75) or non-terminating repeating (e.g. 1/3 = 0.333…). Irrational: non-terminating, non-repeating (e.g. √3 = 1.7320508…, π = 3.14159…). Between any two rational numbers lie infinitely many rational AND irrational numbers (density property).",
        keywords: ["natural numbers", "whole numbers", "integers", "rational", "irrational", "real numbers", "p/q", "non-terminating"],
        highlights: [
          "N ⊂ W ⊂ Z ⊂ Q ⊂ R (each set contains the previous).",
          "Rational → terminating OR recurring decimal. Irrational → neither terminating nor recurring.",
          "√2, √3, √5, π, e are all irrational numbers."
        ],
        example: "Is 0.1̄2̄ = 0.121212… rational or irrational? It is a recurring decimal → rational. Can write as 12/99 = 4/33. Is √7 rational? No — it is a non-terminating, non-repeating decimal → irrational.",
        analogy: "Number sets are like nested Russian dolls: Naturals fit inside Whole numbers, which fit inside Integers, inside Rationals, inside Reals — each larger doll contains all smaller ones.",
        visual: "Concentric circles/bubbles: innermost = N (naturals); next ring = W (adding 0); next = Z (adding negatives); next = Q (adding fractions); outermost = R (adding irrationals).",
        fact: "π (pi) has been calculated to over 100 trillion decimal places and no repeating pattern has ever been found — confirming it is irrational.",
        trick: "Quick rational test: convert to decimal. If it terminates or repeats, it is rational. If it goes on forever without repeating, it is irrational.",
        mistakes: "Assuming all square roots are irrational. √4 = 2 (rational). √9 = 3 (rational). Only square roots of non-perfect squares are irrational.",
        recap: "N ⊂ W ⊂ Z ⊂ Q ⊂ R. Rational = p/q. Irrational = non-terminating, non-repeating. Real = rational + irrational."
      },
      {
        name: "Surds, Rationalization, and Irrational Numbers on Number Line",
        definition: "A surd is an irrational number expressed as a root (e.g. √2, ³√5). Rationalization is the process of eliminating irrationals (surds) from the denominator of a fraction by multiplying both numerator and denominator by the 'conjugate' or appropriate surd. To represent √n on a number line: use geometric construction — draw a right triangle with legs 1 and √(n-1), then the hypotenuse gives √n.",
        ncertDefinition: "Irrational numbers like √2 can be represented on a number line using geometric construction. Rationalization makes irrational denominators rational by multiplying by the conjugate.",
        examText: "Rationalization examples: 1/√2 = √2/2 (multiply by √2/√2). 3/(√5 + 1) = 3(√5−1)/[(√5+1)(√5−1)] = 3(√5−1)/(5−1) = 3(√5−1)/4. To place √2 on number line: construct right triangle with legs 1 and 1; hypotenuse = √2. Arc from vertex to number line marks √2's position.",
        keywords: ["surd", "rationalization", "conjugate", "geometric construction", "number line"],
        highlights: [
          "Rationalization uses: (a+b)(a−b) = a²−b² to eliminate √ from denominator.",
          "Conjugate of (√a + √b) is (√a − √b).",
          "√2 ≈ 1.414; √3 ≈ 1.732; √5 ≈ 2.236."
        ],
        example: "Rationalize 5/(√3 − √2): Multiply by (√3 + √2)/(√3 + √2): = 5(√3+√2)/[(√3)²−(√2)²] = 5(√3+√2)/(3−2) = 5(√3+√2).",
        analogy: "Rationalization is like converting a foreign currency so you can use it locally. The value doesn't change — you just express it in a more convenient form.",
        visual: "Step-by-step geometric construction on number line: leg 1 = 1 unit, leg 2 = 1 unit → hypotenuse = √2. Draw arc to place √2 on the line.",
        fact: "The word 'surd' comes from the Latin 'surdus' meaning 'deaf' or 'mute' — because these numbers were considered 'silent' (unable to be expressed as ratios) in ancient mathematics.",
        trick: "Conjugate rule: (√a + √b)(√a − √b) = a − b. Always use this to rationalize sums/differences of surds in the denominator.",
        mistakes: "Multiplying only the denominator by the conjugate instead of both numerator AND denominator. Always multiply top AND bottom.",
        recap: "Surd = irrational root. Rationalization = multiply by conjugate to clear surd from denominator. Geometric construction places √n on number line."
      },
      {
        name: "Laws of Exponents for Real Numbers",
        definition: "The laws of exponents extend beyond positive integers to all real numbers including fractions (rational exponents) and negatives. Key laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ; (ab)ᵐ = aᵐbᵐ; a⁰ = 1 (a≠0); a⁻ⁿ = 1/aⁿ; a^(1/n) = ⁿ√a; a^(m/n) = (ⁿ√a)ᵐ.",
        ncertDefinition: "For any real base a > 0, the laws of exponents are: product rule (add exponents), quotient rule (subtract), power rule (multiply). Fractional exponents represent roots: a^(1/n) = ⁿ√a.",
        examText: "Critical results: a⁰ = 1. a⁻¹ = 1/a. (√a)² = a. a^(m/n) = (aᵐ)^(1/n) = (a^(1/n))ᵐ. Simplify: 8^(2/3) = (8^(1/3))² = (³√8)² = 2² = 4. Simplify: 27^(−1/3) = 1/(27^(1/3)) = 1/3.",
        keywords: ["exponents", "laws of indices", "fractional exponents", "negative exponents", "surds as exponents"],
        highlights: [
          "a^(1/2) = √a. a^(1/3) = ³√a. a^(m/n) = (ⁿ√a)ᵐ.",
          "a⁰ = 1 for all non-zero a. 0⁰ is indeterminate.",
          "Negative exponent means reciprocal: a⁻ⁿ = 1/aⁿ."
        ],
        example: "Simplify: (16)^(3/4) = ((16)^(1/4))³ = (⁴√16)³ = 2³ = 8. Simplify: (2³ × 4²) / 8 = (8 × 16) / 8 = 16 = 2⁴.",
        analogy: "Exponent laws are like grammar rules of the 'language of powers': just as grammar tells you how words combine correctly, exponent laws tell you how powers of the same base combine correctly.",
        visual: "Table of all 8 laws of exponents with one worked example for each.",
        fact: "Fractional exponents were formally introduced by Isaac Newton in the 17th century in his generalized binomial theorem, allowing him to expand expressions like (1+x)^(1/2) as an infinite series.",
        trick: "For a^(m/n): bottom power is root, top power is raise: 'Root, then Power' or equivalently 'Power, then Root' — both give same answer.",
        mistakes: "Applying product rule to different bases: 2³ × 3² ≠ 6⁵. Product rule only works for SAME base: aᵐ × aⁿ = aᵐ⁺ⁿ.",
        recap: "Six laws of exponents: product (add), quotient (subtract), power (multiply), zero (=1), negative (reciprocal), fractional (root)."
      }
    ],
    formulas: [
      { name: "Laws of Exponents Summary", equation: "a^m \\cdot a^n = a^{m+n}; \\quad (a^m)^n = a^{mn}; \\quad a^{1/n} = \\sqrt[n]{a}", variables: [{ symbol: "a", meaning: "base (real number, a > 0)" }, { symbol: "m, n", meaning: "exponents (real numbers)" }], context: "Core laws for simplifying exponential expressions." }
    ],
    solved: [
      {
        question: "Simplify: (√5 + √3)² + (√5 − √3)²",
        thinking: "Expand both squares using (a+b)² = a²+2ab+b² and (a−b)² = a²−2ab+b². Then add.",
        steps: [
          "(√5 + √3)² = 5 + 2√15 + 3 = 8 + 2√15",
          "(√5 − √3)² = 5 − 2√15 + 3 = 8 − 2√15",
          "Sum = (8 + 2√15) + (8 − 2√15) = 16"
        ],
        answer: "The expression simplifies to 16.",
        tips: "The irrational terms cancel when you add conjugate expansions — look for this pattern to simplify quickly."
      }
    ],
    mcqs: [
      { question: "Which number is irrational?", options: ["√4", "22/7", "√5", "0.25"], correctIndex: 2, explanation: "√5 = 2.2360679… (non-terminating, non-repeating) → irrational. Note: 22/7 is a rational approximation of π, but is itself rational." },
      { question: "The value of (64)^(2/3) is:", options: ["8", "16", "4", "32"], correctIndex: 1, explanation: "64^(1/3) = 4. Then 4² = 16." },
      { question: "Rationalizing factor of 1/√3 is:", options: ["3", "√3", "1/3", "3/√3"], correctIndex: 1, explanation: "Multiply by √3/√3: 1/√3 × √3/√3 = √3/3." },
      { question: "Which set correctly shows N ⊂ W ⊂ Z?", options: ["Z ⊂ W ⊂ N", "N ⊂ Z ⊂ W", "N ⊂ W ⊂ Z", "W ⊂ N ⊂ Z"], correctIndex: 2, explanation: "Natural numbers are a subset of Whole numbers (add 0), which are a subset of Integers (add negatives)." },
      { question: "a⁰ equals (for a ≠ 0):", options: ["0", "a", "1", "undefined"], correctIndex: 2, explanation: "By definition, any non-zero number raised to the power 0 equals 1." }
    ],
    flashcards: [
      { question: "What is an irrational number?", answer: "A real number that cannot be expressed as p/q. Its decimal expansion is non-terminating and non-repeating (e.g. √2, π)." },
      { question: "What is the rationalization of 1/(√5 + √2)?", answer: "Multiply by (√5 − √2)/(√5 − √2) → (√5 − √2)/(5 − 2) = (√5 − √2)/3." },
      { question: "Simplify: 8^(1/3).", answer: "8^(1/3) = ³√8 = 2." },
      { question: "State the decimal property of rational numbers.", answer: "Decimal expansion is either terminating (e.g. 0.75) or non-terminating but repeating (e.g. 0.333…)." },
      { question: "Is 0.101001000100001… rational or irrational?", answer: "Irrational — the decimal is non-terminating and non-repeating (no block of digits repeats)." }
    ],
    revisionPoints: [
      "N ⊂ W ⊂ Z ⊂ Q ⊂ R. Rational = p/q (terminating or repeating decimal). Irrational = non-terminating, non-repeating.",
      "√2, √3, √5, π, e are irrational.",
      "Rationalization: multiply by conjugate to clear surd from denominator.",
      "a^(1/n) = ⁿ√a. a^(m/n) = (ⁿ√a)ᵐ.",
      "Six laws: product, quotient, power, zero, negative, fractional.",
      "Geometric construction places irrationals on the number line."
    ],
    summaryPoints: [
      "Number systems form a hierarchy where each set is a proper subset of the next: N ⊂ W ⊂ Z ⊂ Q ⊂ R.",
      "Rational numbers have decimal expansions that terminate or repeat; irrational numbers have non-terminating, non-repeating expansions.",
      "Famous irrational numbers include √2, √3, π, and e; their existence was a profound discovery in mathematics.",
      "Irrational numbers can be represented on the number line through geometric constructions using the Pythagorean theorem.",
      "Rationalization is a technique to eliminate surds from denominators, making expressions easier to work with.",
      "Laws of exponents extend naturally to rational and real exponents, unifying roots and powers into one consistent system."
    ]
  },

  "algebraic-identities": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "State and derive the standard algebraic identities for squares and cubes.",
      "Apply identities to expand, factorise, and simplify algebraic expressions.",
      "Use identities to compute values like (99)² or (101)³ without direct multiplication.",
      "Factor trinomials and polynomials using appropriate identities.",
      "Connect algebraic identities to geometric area models."
    ],
    warmupQ: "Can you calculate 98² in your head in under 10 seconds without using a calculator? Hint: Think of 98 as (100 − 2). The answer is 9604!",
    warmupFact: "Ancient Indian mathematicians from the Vedic period (around 1500 BCE) described geometric and algebraic identities in the Sulba Sutras — one of the earliest recorded mathematical texts in history!",
    warmupHint: "(a − b)² = a² − 2ab + b². So 98² = (100−2)² = 10000 − 400 + 4 = 9604.",
    concepts: [
      {
        name: "Standard Algebraic Identities for Squares",
        definition: "Algebraic identities are equations that are true for all values of the variables. The key square identities are: (1) (a+b)² = a² + 2ab + b². (2) (a−b)² = a² − 2ab + b². (3) (a+b)(a−b) = a² − b² (difference of squares). (4) (x+a)(x+b) = x² + (a+b)x + ab.",
        ncertDefinition: "An algebraic identity is an equation that is valid for all values of the variables involved. Standard identities are used to expand and factorize algebraic expressions efficiently.",
        examText: "Geometric proof of (a+b)²: Draw a square of side (a+b). Subdivide into 4 rectangles: two squares of side a and b, and two rectangles of area ab. Total area = a² + 2ab + b². Applications: 102² = (100+2)² = 10000 + 400 + 4 = 10404. 99×101 = (100−1)(100+1) = 100²−1² = 10000−1 = 9999.",
        keywords: ["algebraic identity", "(a+b)²", "(a−b)²", "difference of squares", "expansion", "factorization"],
        highlights: [
          "(a+b)² = a² + 2ab + b² (middle term is POSITIVE).",
          "(a−b)² = a² − 2ab + b² (middle term is NEGATIVE).",
          "(a+b)(a−b) = a² − b² (no middle term — it cancels)."
        ],
        example: "Expand (3x + 4y)²: a=3x, b=4y. = (3x)² + 2(3x)(4y) + (4y)² = 9x² + 24xy + 16y². Factorize x² − 25: = x² − 5² = (x+5)(x−5).",
        analogy: "Algebraic identities are like multiplication shortcuts: instead of laboriously multiplying (103 × 103), you apply (100+3)² and get 10609 in three quick arithmetic steps.",
        visual: "Geometric square diagram: Large square of side (a+b) partitioned into top-left a×a, top-right a×b, bottom-left b×a, bottom-right b×b, showing the four area parts summing to (a+b)².",
        fact: "The identity (a+b)(a−b) = a²−b² is used in quantum physics for simplifying complex expressions in Dirac's equations for electron spin.",
        trick: "Middle term sign: + sign between a and b → +2ab. − sign → −2ab. No sign (multiplication of sum and difference) → 0 middle term.",
        mistakes: "(a+b)² ≠ a² + b². The middle term 2ab is always missing from wrong expansions — the most common error in algebra.",
        recap: "3 square identities: (a±b)² = a²±2ab+b². (a+b)(a−b) = a²−b². Extra: (x+a)(x+b) = x²+(a+b)x+ab."
      },
      {
        name: "Cubic Identities and Factorisation",
        definition: "The cube identities extend the algebra to degree 3: (1) (a+b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a+b). (2) (a−b)³ = a³ − 3a²b + 3ab² − b³ = a³ − b³ − 3ab(a−b). (3) a³ + b³ = (a+b)(a²−ab+b²). (4) a³ − b³ = (a−b)(a²+ab+b²). (5) a³+b³+c³ − 3abc = (a+b+c)(a²+b²+c²−ab−bc−ca). Special case: if a+b+c=0, then a³+b³+c³ = 3abc.",
        ncertDefinition: "Cube identities extend factorisation to degree 3 polynomials. Key identities: a³+b³ = (a+b)(a²−ab+b²) and a³−b³ = (a−b)(a²+ab+b²).",
        examText: "Exam application: Evaluate 10³ + (−7)³ + (−3)³: Note 10 + (−7) + (−3) = 0 → a³+b³+c³ = 3abc = 3(10)(−7)(−3) = 630. Factorize 8x³ − 27y³: = (2x)³ − (3y)³ = (2x − 3y)((2x)² + (2x)(3y) + (3y)²) = (2x−3y)(4x²+6xy+9y²).",
        keywords: ["cubic identities", "sum of cubes", "difference of cubes", "a³+b³+c³=3abc", "factorization"],
        highlights: [
          "If a+b+c = 0, then a³+b³+c³ = 3abc (very important shortcut for exams).",
          "a³+b³ factors into (a+b)(a²−ab+b²). Note: a²−ab+b² cannot be further factored over reals.",
          "Signs pattern: sum of cubes → (a+b)(a²−ab+b²). Difference → (a−b)(a²+ab+b²)."
        ],
        example: "Evaluate (998)³ + (−500)³ + (−498)³: Check: 998 + (−500) + (−498) = 0. So = 3(998)(−500)(−498) = 3 × 998 × 500 × 498 = 746,502,000.",
        analogy: "Cubic identities are like 3D versions of the square area model: imagine a cube of side (a+b) sliced into 8 pieces — each piece corresponds to a term in the cubic expansion.",
        visual: "Formula card: All 5 cubic identities listed clearly with color-coded signs and a worked example for each.",
        fact: "The sum-of-cubes identity a³+b³+c³ = 3abc (when a+b+c=0) appears naturally in physics when analyzing three-phase electric power systems.",
        trick: "For sum/difference of cubes: first factor is sum/difference (same sign). Second factor: square first + product (opposite sign from first factor) + square second.",
        mistakes: "Writing (a+b)³ = a³+b³. The middle terms 3a²b and 3ab² are always missing from this incorrect expansion.",
        recap: "(a±b)³ expanded has 4 terms. Sum/diff of cubes → 2-factor form. If a+b+c=0, a³+b³+c³=3abc."
      }
    ],
    formulas: [
      { name: "Square Identities", equation: "(a \\pm b)^2 = a^2 \\pm 2ab + b^2; \\quad (a+b)(a-b) = a^2 - b^2", variables: [], context: "Use ± for both plus and minus cases." },
      { name: "Cube Identities", equation: "a^3 + b^3 = (a+b)(a^2 - ab + b^2); \\quad a^3 - b^3 = (a-b)(a^2 + ab + b^2)", variables: [], context: "Sum and difference of cubes factorization." }
    ],
    solved: [
      {
        question: "Factorize: 27x³ − 8y³",
        thinking: "Recognize as a difference of cubes: (3x)³ − (2y)³. Apply a³−b³ = (a−b)(a²+ab+b²).",
        steps: [
          "Identify: a = 3x, b = 2y",
          "Apply: (3x)³ − (2y)³ = (3x − 2y)((3x)² + (3x)(2y) + (2y)²)",
          "= (3x − 2y)(9x² + 6xy + 4y²)"
        ],
        answer: "27x³ − 8y³ = (3x − 2y)(9x² + 6xy + 4y²)",
        tips: "Always check if an expression is a perfect cube: 8 = 2³, 27 = 3³, 64 = 4³, 125 = 5³."
      }
    ],
    mcqs: [
      { question: "The expansion of (2x + 3y)² is:", options: ["4x² + 9y²", "4x² + 6xy + 9y²", "4x² + 12xy + 9y²", "2x² + 12xy + 3y²"], correctIndex: 2, explanation: "(2x+3y)² = (2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y²." },
      { question: "Which identity is used to factorize x² − 16?", options: ["(a+b)²", "(a−b)²", "(a+b)(a−b)", "(a+b)³"], correctIndex: 2, explanation: "x²−16 = x²−4² → difference of squares (a+b)(a−b) = (x+4)(x−4)." },
      { question: "If a+b+c = 0, then a³+b³+c³ equals:", options: ["0", "abc", "3abc", "a²b²c²"], correctIndex: 2, explanation: "When a+b+c = 0, the identity gives a³+b³+c³ = 3abc." },
      { question: "The value of 99² using identities is:", options: ["9801", "9800", "9901", "9601"], correctIndex: 0, explanation: "99² = (100−1)² = 10000 − 200 + 1 = 9801." },
      { question: "a³ + b³ factorizes as:", options: ["(a+b)³", "(a+b)(a−b)", "(a+b)(a²−ab+b²)", "(a−b)(a²+ab+b²)"], correctIndex: 2, explanation: "Sum of cubes: a³+b³ = (a+b)(a²−ab+b²)." }
    ],
    flashcards: [
      { question: "State the expansion of (a+b)³.", answer: "(a+b)³ = a³ + 3a²b + 3ab² + b³ = a³ + b³ + 3ab(a+b)." },
      { question: "What is (a+b)(a−b)?", answer: "a² − b² (difference of squares)." },
      { question: "Factorize x² + 10x + 25.", answer: "(x+5)² using (a+b)² identity where a=x, b=5." },
      { question: "State the special condition for a³+b³+c³ = 3abc.", answer: "This holds when a + b + c = 0." },
      { question: "Compute 103² using identity.", answer: "(100+3)² = 10000 + 600 + 9 = 10609." }
    ],
    revisionPoints: [
      "(a+b)² = a²+2ab+b². (a−b)² = a²−2ab+b². (a+b)(a−b) = a²−b².",
      "(x+a)(x+b) = x²+(a+b)x+ab.",
      "(a+b)³ = a³+3a²b+3ab²+b³. (a−b)³ = a³−3a²b+3ab²−b³.",
      "a³+b³ = (a+b)(a²−ab+b²). a³−b³ = (a−b)(a²+ab+b²).",
      "a³+b³+c³−3abc = (a+b+c)(a²+b²+c²−ab−bc−ca).",
      "If a+b+c = 0 → a³+b³+c³ = 3abc."
    ],
    summaryPoints: [
      "Algebraic identities are universally true equations — they hold for all values of the variables, unlike equations that hold only for specific values.",
      "Square identities — (a±b)² and (a+b)(a−b) — are the most frequently tested and have elegant geometric proofs using area models.",
      "Cubic identities extend factorization to degree-3 expressions; the sum and difference of cubes are particularly important.",
      "Identities enable mental arithmetic shortcuts: expressing 103², 98², or 99×101 as identity applications gives answers in seconds.",
      "The condition a+b+c=0 → a³+b³+c³=3abc is a frequently tested exam shortcut that can dramatically simplify complex calculations."
    ]
  },

  "trigonometry-intro": {
    difficulty: "Hard",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Understand angles, their measurement in degrees and concept of radian.",
      "Define the six trigonometric ratios for a right-angled triangle.",
      "Apply trigonometric ratios to find missing sides and angles.",
      "State and verify trigonometric identities.",
      "Solve real-world height and distance problems using trigonometry."
    ],
    warmupQ: "How do surveyors measure the height of a mountain without climbing it? They stand at a known distance and measure the angle of elevation. Can you figure out how the height is calculated from just the distance and the angle?",
    warmupFact: "Hipparchus of Nicaea (190–120 BCE) is called the 'Father of Trigonometry'. He created the first trigonometric table to predict astronomical events — nearly 2,000 years before calculators!",
    warmupHint: "In a right triangle: tan(angle) = opposite side / adjacent side. If you know the angle and one side, you can find the other.",
    concepts: [
      {
        name: "Angles and Trigonometric Ratios",
        definition: "Trigonometry studies relationships between angles and sides of triangles. In a right-angled triangle ABC (right angle at C): Opposite side to angle A, Adjacent side to angle A, and Hypotenuse (longest side, opposite 90°). Six trigonometric ratios: sin A = opposite/hypotenuse, cos A = adjacent/hypotenuse, tan A = opposite/adjacent, cosec A = 1/sin A, sec A = 1/cos A, cot A = 1/tan A.",
        ncertDefinition: "For a right triangle with angle A: sin A = BC/AC (opposite/hypotenuse), cos A = AB/AC (adjacent/hypotenuse), tan A = BC/AB (opposite/adjacent). Cosec, sec, and cot are their reciprocals.",
        examText: "Mnemonics: SOH-CAH-TOA: Sin=Opposite/Hypotenuse, Cos=Adjacent/Hypotenuse, Tan=Opposite/Adjacent. Standard values table: sin 0°=0, sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1. Reciprocals: cosec 30°=2, sec 60°=2, cot 45°=1.",
        keywords: ["sin", "cos", "tan", "cosec", "sec", "cot", "SOH-CAH-TOA", "right triangle"],
        highlights: [
          "SOH-CAH-TOA: Sin=Opp/Hyp, Cos=Adj/Hyp, Tan=Opp/Adj.",
          "Key values: sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2.",
          "sin²A + cos²A = 1 (Pythagorean identity — most important)."
        ],
        example: "In a right triangle, angle A = 30°, hypotenuse = 10 cm. Find opposite side. sin 30° = opposite/10 → 1/2 = opposite/10 → opposite = 5 cm.",
        analogy: "Trigonometric ratios are like a universal translator for triangles: give the system an angle, and it tells you the exact ratio of any two sides. Change the angle, and all ratios change predictably.",
        visual: "Right triangle with all 6 ratios labelled. Separate table showing exact values for 0°, 30°, 45°, 60°, 90°.",
        fact: "The word 'sine' comes from the Arabic 'jiba' (meaning bowstring) which was mistranslated into Latin as 'sinus' (meaning bay or fold). This mistranslation gave trigonometry its name!",
        trick: "Learn the standard value table by the 'finger trick': count fingers from thumb (0°) to pinky (90°). Sine values = √(finger count)/2.",
        mistakes: "Confusing opposite and adjacent sides. The opposite side is across from the angle; the adjacent side is next to (touches) the angle.",
        recap: "sin = Opp/Hyp. cos = Adj/Hyp. tan = Opp/Adj. Cosec, sec, cot = reciprocals. Learn standard values for 0°,30°,45°,60°,90°."
      },
      {
        name: "Trigonometric Identities",
        definition: "Trigonometric identities are equations involving trig ratios that hold for all values of the angle. The three Pythagorean identities are: (1) sin²θ + cos²θ = 1. (2) 1 + tan²θ = sec²θ. (3) 1 + cot²θ = cosec²θ. These are derived directly from the Pythagorean theorem applied to a right triangle.",
        ncertDefinition: "The Pythagorean identity sin²θ + cos²θ = 1 is derived from Pythagoras' theorem. From this, two more identities can be derived by dividing by cos²θ and sin²θ respectively.",
        examText: "Derivation: In right triangle, a²+b²=c² (Pythagoras). Divide by c²: (a/c)²+(b/c)²=1 → sin²θ+cos²θ=1. Divide by cos²θ: tan²θ+1=sec²θ. Divide by sin²θ: 1+cot²θ=cosec²θ. Exam technique: For 'prove' questions, choose the more complex side and transform it step-by-step to match the simpler side.",
        keywords: ["trigonometric identity", "sin²θ+cos²θ=1", "Pythagorean identity", "sec", "cosec", "tan", "cot"],
        highlights: [
          "Three Pythagorean identities: sin²+cos²=1; 1+tan²=sec²; 1+cot²=cosec².",
          "sin²θ = 1 − cos²θ. cos²θ = 1 − sin²θ (very useful for substitution).",
          "tan θ = sin θ / cos θ. cot θ = cos θ / sin θ."
        ],
        example: "Prove: (1 − sin²A)/cos A = cos A. LHS = cos²A/cos A = cos A = RHS. ✓ (Used sin²A+cos²A=1 to replace 1−sin²A with cos²A.)",
        analogy: "Trigonometric identities are like different forms of the same bank balance: sin²+cos²=1 is the fundamental 'total'. Dividing by cos² or sin² gives different but equivalent views of the same fundamental truth.",
        visual: "Right triangle with labels a (opposite), b (adjacent), c (hypotenuse). Step-by-step derivation showing division of Pythagoras' theorem by c² giving sin²+cos²=1.",
        fact: "The identity sin²θ + cos²θ = 1 is equivalent to the equation of a unit circle: x² + y² = 1, where x = cos θ and y = sin θ.",
        trick: "For identity proofs: always work on ONE side. Replace complex terms using identities. Convert everything to sin and cos if stuck.",
        mistakes: "Working on BOTH sides simultaneously in a proof. You should transform only one side (usually LHS) to equal the other.",
        recap: "Three Pythagorean identities. Most important: sin²θ+cos²θ=1. Derive the other two by dividing by cos² or sin²."
      },
      {
        name: "Heights and Distances: Applications",
        definition: "Angle of Elevation is the angle formed between the horizontal and the line of sight when looking UP at an object. Angle of Depression is the angle between the horizontal and line of sight when looking DOWN. Problems involving towers, buildings, cliffs, ships, and aircraft use tan(angle) = height/horizontal distance as the primary relationship.",
        ncertDefinition: "The angle of elevation is the angle between a horizontal line and the line of sight to an object above horizontal. The angle of depression is the angle to an object below horizontal. Trigonometric ratios (especially tan) are used to find heights and distances.",
        examText: "Standard setup: Observer at ground level, tower of height h, horizontal distance d from tower. tan(angle of elevation) = h/d. Also: sin(angle) = h/hypotenuse. Standard problems: (1) Height of building from angle of elevation. (2) Width of river using angle from both banks. (3) Two poles and a wire at different angles.",
        keywords: ["angle of elevation", "angle of depression", "height and distance", "tan ratio", "line of sight"],
        highlights: [
          "Angle of elevation and angle of depression are alternate interior angles when a horizontal line is extended → they are EQUAL.",
          "tan θ = height / horizontal distance (most used formula in height-distance problems).",
          "Draw a clear diagram for EVERY heights-and-distances problem."
        ],
        example: "A student stands 40 m from a tree. Angle of elevation to top of tree = 30°. Height of tree = 40 × tan 30° = 40 × (1/√3) = 40/√3 = 40√3/3 ≈ 23.1 m.",
        analogy: "Height-distance problems are triangulation in action: surveyors, navigators, and astronomers all use exactly this principle — measure an angle and a known base distance, then calculate the unknown height or distance.",
        visual: "Diagram: Observer (O), top of tower (T), base of tower (B). Right angle at B. Angle of elevation = θ at O. Label h = TB (height), d = OB (distance). Equation: tan θ = h/d.",
        fact: "Indian astronomer Aryabhata (5th century CE) used an early form of trigonometry to calculate the Earth's circumference within 1% of the actual value — without any modern instruments.",
        trick: "DRAW the diagram first. Label all known and unknown quantities. Then identify which trig ratio connects the known angle to the known and unknown sides.",
        mistakes: "Using sin or cos instead of tan for height-distance problems. tan = opposite (height)/adjacent (horizontal distance) — this is the ratio to use when you know angle and horizontal distance.",
        recap: "Angle of elevation = looking up. Depression = looking down. tan θ = height/horizontal distance. Always draw diagrams."
      }
    ],
    formulas: [
      { name: "Basic Trig Ratios", equation: "\\sin A = \\frac{\\text{Opp}}{\\text{Hyp}}, \\quad \\cos A = \\frac{\\text{Adj}}{\\text{Hyp}}, \\quad \\tan A = \\frac{\\text{Opp}}{\\text{Adj}}", variables: [], context: "SOH-CAH-TOA mnemonic for right triangles." },
      { name: "Pythagorean Identity", equation: "\\sin^2 \\theta + \\cos^2 \\theta = 1", variables: [], context: "Most important trig identity — derives from Pythagoras." }
    ],
    solved: [
      {
        question: "From the top of a cliff 60 m high, the angle of depression of a boat is 30°. Find the horizontal distance of the boat from the base of the cliff.",
        thinking: "Angle of depression from top = angle of elevation from boat = 30°. Use tan(30°) = height/horizontal distance.",
        steps: [
          "Draw diagram: cliff height = 60 m, angle of depression = 30°.",
          "Angle of elevation from boat = 30° (alternate angles).",
          "tan 30° = 60 / horizontal distance (d)",
          "1/√3 = 60/d → d = 60√3 m"
        ],
        answer: "Horizontal distance = 60√3 ≈ 103.9 m.",
        tips: "Angle of depression (from top) = angle of elevation (from boat). These are equal by alternate interior angles."
      }
    ],
    mcqs: [
      { question: "If sin A = 3/5, then cos A =", options: ["4/5", "5/3", "3/4", "5/4"], correctIndex: 0, explanation: "sin²A + cos²A = 1 → cos²A = 1 − 9/25 = 16/25 → cos A = 4/5." },
      { question: "tan 45° equals:", options: ["0", "1", "√3", "1/√2"], correctIndex: 1, explanation: "In a 45°-45°-90° triangle, opposite = adjacent → tan 45° = 1." },
      { question: "The identity 1 + tan²θ equals:", options: ["cosec²θ", "sec²θ", "cot²θ", "1"], correctIndex: 1, explanation: "Dividing sin²θ+cos²θ=1 by cos²θ gives tan²θ+1=sec²θ." },
      { question: "A tower casts a shadow of 40 m when angle of elevation = 30°. Tower height is:", options: ["40 m", "40/√3 m", "40√3 m", "20 m"], correctIndex: 1, explanation: "tan 30° = height/40 → height = 40 × tan 30° = 40 × (1/√3) = 40/√3 = 40√3/3 m." },
      { question: "cosec 90° equals:", options: ["0", "1", "√2", "undefined"], correctIndex: 1, explanation: "cosec θ = 1/sin θ. sin 90° = 1. So cosec 90° = 1/1 = 1." }
    ],
    flashcards: [
      { question: "State SOH-CAH-TOA.", answer: "Sin = Opposite/Hypotenuse. Cos = Adjacent/Hypotenuse. Tan = Opposite/Adjacent." },
      { question: "What is the most important trig identity?", answer: "sin²θ + cos²θ = 1 (Pythagorean identity)." },
      { question: "Value of sin 60°?", answer: "√3/2 ≈ 0.866." },
      { question: "What is the angle of elevation?", answer: "The angle from horizontal to line of sight when looking UP at an object above the observer." },
      { question: "If tan θ = height/base, and base = 30 m, θ = 60°, find height.", answer: "height = 30 × tan 60° = 30√3 m." }
    ],
    revisionPoints: [
      "sin=Opp/Hyp. cos=Adj/Hyp. tan=Opp/Adj. Cosec, sec, cot are reciprocals.",
      "Standard values: sin 0°=0, sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2, sin 90°=1.",
      "Three Pythagorean identities: sin²+cos²=1; 1+tan²=sec²; 1+cot²=cosec².",
      "Angle of elevation: looking up. Angle of depression: looking down.",
      "tan θ = height/horizontal distance for height-distance problems."
    ],
    summaryPoints: [
      "Trigonometry studies the relationship between angles and side lengths in right triangles using six ratios: sin, cos, tan, and their reciprocals.",
      "The SOH-CAH-TOA mnemonic organizes the three primary ratios for quick recall.",
      "Standard values (0°, 30°, 45°, 60°, 90°) are used in virtually every problem and must be memorized.",
      "Pythagorean identities — derived from Pythagoras' theorem — allow algebraic simplification of trig expressions.",
      "Heights and distances problems are the primary real-world application: angle of elevation and tan ratio link measurable angles to unknown heights.",
      "Trigonometry is foundational to engineering, astronomy, navigation, physics, and computer graphics."
    ]
  },

  "measuring-space": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Calculate perimeter and area of all standard 2D shapes.",
      "Apply Heron's formula to find the area of a triangle given all three sides.",
      "Calculate surface area and volume of 3D solids (cuboid, cube, cylinder, cone, sphere).",
      "Solve real-world problems involving land measurement, fencing, and packaging.",
      "Convert between different units of area and volume."
    ],
    warmupQ: "A farmer wants to fence a triangular plot with sides 50 m, 60 m, and 70 m. How much fencing wire is needed? How much area does the plot cover?",
    warmupFact: "Heron of Alexandria (c. 10–70 CE) developed his famous area formula for triangles in his book 'Metrica'. The formula works for ANY triangle — you only need the three side lengths, not the height!",
    warmupHint: "Perimeter = sum of all three sides. Area = use Heron's formula with s = (50+60+70)/2 = 90 m.",
    concepts: [
      {
        name: "Perimeter and Area of 2D Figures",
        definition: "Perimeter is the total length of the boundary of a 2D figure. Area is the measure of the region enclosed by the boundary, expressed in square units. Standard formulas: Rectangle (P = 2(l+b), A = l×b), Square (P = 4a, A = a²), Triangle (P = a+b+c, A = ½bh), Parallelogram (A = b×h), Trapezium (A = ½(a+b)×h), Circle (C = 2πr, A = πr²).",
        ncertDefinition: "Perimeter is the length of boundary of a closed figure. Area is the plane region enclosed by the boundary. Both are calculated using standard geometric formulas.",
        examText: "Unit conversions: 1 m² = 10,000 cm². 1 km² = 1,000,000 m² = 100 hectares. 1 hectare = 10,000 m². Semi-circle: Perimeter = πr + 2r. Area = πr²/2. Annulus (ring): Area = π(R² − r²) where R = outer radius, r = inner radius.",
        keywords: ["perimeter", "area", "rectangle", "triangle", "circle", "parallelogram", "trapezium"],
        highlights: [
          "Circle: Circumference = 2πr (not 'perimeter'). Area = πr².",
          "Trapezium: area = ½ × (sum of parallel sides) × height.",
          "1 hectare = 10,000 m² — used for large land areas."
        ],
        example: "A rectangular room 12 m × 8 m: Perimeter = 2(12+8) = 40 m. Area = 96 m². Cost of tiling at ₹50/m² = 96 × 50 = ₹4,800.",
        analogy: "Perimeter is the fence around a farm (length of boundary). Area is how many 1 m² tiles would cover the farm floor (enclosed space).",
        visual: "Reference card showing all 2D shapes with their perimeter and area formulas clearly labelled.",
        fact: "The Great Wall of China, if straightened, would be about 21,000 km long — but the total area of land enclosed by China's borders is 9.6 million km² (area concept).",
        trick: "For composite shapes: break into known shapes, calculate each area separately, then add or subtract as appropriate.",
        mistakes: "Using diameter instead of radius in circle formulas. πd = circumference, but πr² = area. Radius = diameter/2.",
        recap: "Perimeter = boundary length. Area = enclosed region. Remember key formulas: πr² for circle; ½bh for triangle; 2(l+b) for rectangle."
      },
      {
        name: "Heron's Formula for Triangle Area",
        definition: "Heron's Formula calculates the area of any triangle using only the three side lengths (a, b, c), without needing the height. Let s = (a+b+c)/2 (semi-perimeter). Area = √[s(s−a)(s−b)(s−c)]. This formula is particularly useful for triangles where the height is not given or is difficult to calculate directly.",
        ncertDefinition: "Heron's formula gives the area of a triangle with sides a, b, c: Area = √[s(s−a)(s−b)(s−c)], where s = (a+b+c)/2 is the semi-perimeter.",
        examText: "Step-by-step procedure: (1) Find s = (a+b+c)/2. (2) Find (s−a), (s−b), (s−c). (3) Multiply: s(s−a)(s−b)(s−c). (4) Take square root. Verification: For an equilateral triangle with side a: s = 3a/2. Area = √[(3a/2)(a/2)(a/2)(a/2)] = (√3/4)a². This matches the standard equilateral triangle formula.",
        keywords: ["Heron's formula", "semi-perimeter", "triangle area", "three sides", "land measurement"],
        highlights: [
          "Heron's formula works for ANY triangle — right, obtuse, acute, equilateral, isosceles.",
          "Semi-perimeter s = (a+b+c)/2.",
          "Also used for area of quadrilaterals by dividing into two triangles."
        ],
        example: "Triangular plot with sides 50 m, 60 m, 70 m. s = (50+60+70)/2 = 90. Area = √[90×40×30×20] = √(2,160,000) = 1469.7 m² ≈ 1470 m².",
        analogy: "Heron's formula is like having a master key for all triangles: you only need to measure the three fences (sides) and the formula gives the exact land area inside, without needing to measure anything internal.",
        visual: "Step-by-step calculation table for a worked example: Row 1: sides given. Row 2: s calculated. Row 3: (s−a), (s−b), (s−c). Row 4: product. Row 5: √ product = area.",
        fact: "Land revenue departments in India traditionally calculated agricultural land areas using triangulation — dividing irregular fields into triangles and applying Heron's formula.",
        trick: "Always check triangle inequality before applying Heron's: sum of any two sides must be greater than the third side.",
        mistakes: "Forgetting to take the square root. Area = √[s(s-a)(s-b)(s-c)], NOT = s(s-a)(s-b)(s-c) itself.",
        recap: "s = (a+b+c)/2. Area = √[s(s−a)(s−b)(s−c)]. Works for any triangle, any type."
      },
      {
        name: "Surface Area and Volume of 3D Solids",
        definition: "Surface area (SA) is the total area of all faces of a 3D solid. Volume (V) is the amount of 3D space enclosed. Key formulas: Cuboid (SA=2(lb+bh+hl), V=lbh), Cube (SA=6a², V=a³), Cylinder (Curved SA=2πrh, Total SA=2πr(r+h), V=πr²h), Cone (Curved SA=πrl, Total SA=πr(r+l), V=⅓πr²h), Sphere (SA=4πr², V=⁴⁄₃πr³), Hemisphere (Curved SA=2πr², Total SA=3πr², V=²⁄₃πr³).",
        ncertDefinition: "Surface area is the sum of areas of all faces. Volume is the space occupied by a solid. Key: l = slant height of cone = √(r²+h²).",
        examText: "Critical: Slant height of cone: l = √(r²+h²). Cuboid: lateral SA = 2h(l+b). Cube: diagonal = a√3. Cylinder: volume = base area × height = πr²h. For hollow cylinders: volume = π(R²−r²)h where R = outer radius, r = inner radius.",
        keywords: ["surface area", "volume", "cuboid", "cylinder", "cone", "sphere", "slant height"],
        highlights: [
          "Cone slant height l = √(r²+h²). Must find l before calculating curved SA.",
          "Sphere: SA = 4πr². V = (4/3)πr³. Hemisphere SA = 3πr² (curved 2πr² + base πr²).",
          "Cylinder volume = πr²h. Cone volume = ⅓πr²h (1/3 of cylinder with same base and height)."
        ],
        example: "A cone has radius 6 cm, height 8 cm. Slant height l = √(36+64) = √100 = 10 cm. Curved SA = πrl = π × 6 × 10 = 60π cm². Volume = ⅓πr²h = ⅓π × 36 × 8 = 96π cm³.",
        analogy: "Surface area is like the wrapping paper needed to cover a gift box. Volume is how much the gift box can hold. Both are essential — surface area for material cost, volume for capacity.",
        visual: "Side-by-side diagrams of all 6 solids (cuboid, cube, cylinder, cone, sphere, hemisphere) with labelled dimensions and their SA and V formulas.",
        fact: "A sphere has the smallest surface area for a given volume of any 3D shape — which is why bubbles and raindrops are spherical (surface tension minimizes surface area).",
        trick: "Curved SA vs Total SA: Curved SA excludes base(s). Total SA = Curved SA + Base areas. For cylinder: add 2 circular bases (2πr²). For cone: add 1 circular base (πr²).",
        mistakes: "Using r instead of l (slant height) in cone curved SA formula. Curved SA = πrl, NOT πrh.",
        recap: "Cone: curved SA=πrl (l=slant height=√(r²+h²)), V=⅓πr²h. Sphere: SA=4πr², V=(4/3)πr³. Always find slant height first for cone problems."
      }
    ],
    formulas: [
      { name: "Heron's Formula", equation: "A = \\sqrt{s(s-a)(s-b)(s-c)}, \\quad s = \\frac{a+b+c}{2}", variables: [{ symbol: "a,b,c", meaning: "sides of the triangle" }, { symbol: "s", meaning: "semi-perimeter" }], context: "Area of triangle when only side lengths are known." },
      { name: "Cone", equation: "\\text{Curved SA} = \\pi rl, \\quad V = \\frac{1}{3}\\pi r^2 h, \\quad l = \\sqrt{r^2+h^2}", variables: [{ symbol: "r", meaning: "radius" }, { symbol: "h", meaning: "vertical height" }, { symbol: "l", meaning: "slant height" }], context: "All cone formulas require slant height l." }
    ],
    solved: [
      {
        question: "A triangular park has sides 120 m, 80 m, and 50 m. Find (a) the perimeter, (b) the area using Heron's formula.",
        thinking: "Perimeter = sum of sides. For area: calculate s, then apply Heron's formula.",
        steps: [
          "(a) Perimeter = 120 + 80 + 50 = 250 m",
          "(b) s = 250/2 = 125",
          "(s−a) = 125−120 = 5; (s−b) = 125−80 = 45; (s−c) = 125−50 = 75",
          "Area = √[125 × 5 × 45 × 75] = √[125 × 5 × 3375] = √[2,109,375]",
          "= √[2,109,375] ≈ 1452.4 m²"
        ],
        answer: "Perimeter = 250 m. Area ≈ 1452 m².",
        tips: "Always verify: does (s−a) > 0, (s−b) > 0, (s−c) > 0? If any is zero or negative, recheck the sides."
      }
    ],
    mcqs: [
      { question: "The semi-perimeter of a triangle with sides 13, 14, 15 is:", options: ["42", "21", "7", "15"], correctIndex: 1, explanation: "s = (13+14+15)/2 = 42/2 = 21." },
      { question: "The curved surface area of a cylinder with r=7cm, h=10cm is:", options: ["440 cm²", "308 cm²", "154 cm²", "220 cm²"], correctIndex: 0, explanation: "Curved SA = 2πrh = 2 × 22/7 × 7 × 10 = 440 cm²." },
      { question: "Volume of a sphere of radius 3 cm is:", options: ["36π", "48π", "72π", "108π"], correctIndex: 0, explanation: "V = (4/3)πr³ = (4/3)π(27) = 36π cm³." },
      { question: "The slant height of a cone with r=3cm, h=4cm is:", options: ["5 cm", "7 cm", "3.5 cm", "12 cm"], correctIndex: 0, explanation: "l = √(r²+h²) = √(9+16) = √25 = 5 cm." },
      { question: "Area of a trapezium with parallel sides 8 cm and 12 cm, height 6 cm:", options: ["60 cm²", "30 cm²", "72 cm²", "120 cm²"], correctIndex: 0, explanation: "Area = ½(a+b)h = ½(8+12)(6) = ½ × 20 × 6 = 60 cm²." }
    ],
    flashcards: [
      { question: "State Heron's formula.", answer: "Area = √[s(s−a)(s−b)(s−c)] where s = (a+b+c)/2 is the semi-perimeter." },
      { question: "Formula for volume of cone?", answer: "V = (1/3)πr²h. Slant height l = √(r²+h²)." },
      { question: "What is the surface area of a sphere?", answer: "SA = 4πr²." },
      { question: "What is 1 hectare in m²?", answer: "1 hectare = 10,000 m²." },
      { question: "Total surface area of a cylinder?", answer: "Total SA = 2πr(r+h) = 2πr² + 2πrh." }
    ],
    revisionPoints: [
      "Heron's formula: s = (a+b+c)/2. Area = √[s(s-a)(s-b)(s-c)].",
      "Circle: C = 2πr. Area = πr².",
      "Cuboid: V = lbh. Total SA = 2(lb+bh+hl).",
      "Cylinder: V = πr²h. Curved SA = 2πrh.",
      "Cone: V = ⅓πr²h. Curved SA = πrl. l = √(r²+h²).",
      "Sphere: V = (4/3)πr³. SA = 4πr².",
      "1 hectare = 10,000 m². 1 m² = 10,000 cm²."
    ],
    summaryPoints: [
      "Perimeter measures boundary length; area measures enclosed region — both are fundamental to real-world land measurement and design.",
      "Heron's formula is a powerful tool that finds triangle area from three side lengths alone, making it ideal for irregular land parcels.",
      "3D geometry extends the concepts to surface area (material needed to construct) and volume (capacity of solid).",
      "The cone is exactly 1/3 the volume of a cylinder with the same base and height — this geometric relationship is worth memorizing.",
      "A sphere has the maximum volume for minimum surface area — explaining many natural shapes (bubbles, planets, water droplets).",
      "Unit conversions are critical: km², m², cm², hectare must all be handled consistently in application problems."
    ]
  },

  "probability-intro": {
    difficulty: "Easy",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Define probability and distinguish between experimental and theoretical probability.",
      "List the sample space for simple random experiments.",
      "Apply the classical probability formula to find probabilities of events.",
      "Identify complementary events and use P(not A) = 1 − P(A).",
      "Solve real-world probability problems involving coins, dice, and cards."
    ],
    warmupQ: "If you toss a fair coin 100 times and get 55 heads and 45 tails, is the coin biased? How many heads would you expect theoretically? How does the actual result compare?",
    warmupFact: "Probability theory was developed in the 17th century when two French mathematicians — Blaise Pascal and Pierre de Fermat — exchanged letters to solve gambling problems. Their correspondence laid the foundation for modern probability and statistics!",
    warmupHint: "Theoretical probability of heads = 1/2. Expected heads in 100 tosses = 50. The deviation from 50 is due to chance (experimental probability vs theoretical probability).",
    concepts: [
      {
        name: "Experimental vs Theoretical Probability",
        definition: "Experimental (Empirical) Probability is based on actual observations from an experiment: P(E) = (Number of times event E occurred) / (Total number of trials). Theoretical (Classical) Probability is based on mathematical reasoning assuming equally likely outcomes: P(E) = (Number of favourable outcomes) / (Total number of possible outcomes). As the number of trials increases, experimental probability converges to theoretical probability (Law of Large Numbers).",
        ncertDefinition: "Experimental probability is determined by actual trials. Theoretical probability assumes equally likely outcomes. For a large number of trials, experimental probability approaches theoretical probability.",
        examText: "Key: 0 ≤ P(E) ≤ 1 always. P(impossible event) = 0. P(certain event) = 1. Sample space S = set of all possible outcomes. Event E = subset of S. P(E) = n(E)/n(S) where n = number of elements.",
        keywords: ["experimental probability", "theoretical probability", "sample space", "event", "favourable outcomes", "Law of Large Numbers"],
        highlights: [
          "Probability is always between 0 and 1 (inclusive): 0 ≤ P(E) ≤ 1.",
          "P(certain event) = 1. P(impossible event) = 0.",
          "More trials → experimental probability gets closer to theoretical probability."
        ],
        example: "A die is rolled 300 times; '4' appears 52 times. Experimental P(4) = 52/300 ≈ 0.173. Theoretical P(4) = 1/6 ≈ 0.167. As trials increase, experimental approaches 1/6.",
        analogy: "Experimental probability is like taste-testing a batch of cookies: you test a sample and estimate the quality of the whole batch. Theoretical probability is like following the perfect recipe: you calculate the exact expected outcome based on pure logic.",
        visual: "Bar chart comparing experimental frequency and theoretical probability for rolling a die 60 times vs expected (each face = 10 times theoretically).",
        fact: "The Law of Large Numbers — which guarantees that experimental probability converges to theoretical with enough trials — is the mathematical foundation of insurance companies, casinos, and actuarial science.",
        trick: "Always check: P(all outcomes in sample space) = 1. This is a useful self-check: sum all probabilities and verify they add to 1.",
        mistakes: "Writing probability as a number greater than 1 or less than 0. Probability is always between 0 and 1. Convert fractions correctly.",
        recap: "P(E) = favourable outcomes / total outcomes (theoretical). P(E) = times event occurred / total trials (experimental). Range: 0 to 1."
      },
      {
        name: "Sample Spaces, Events, and the Probability Formula",
        definition: "The sample space S is the set of all possible outcomes of an experiment. An event E is any subset of the sample space. P(E) = n(E)/n(S). Complementary event E' (or 'not E'): P(E') = 1 − P(E). Union: P(A or B) = P(A) + P(B) − P(A and B). For mutually exclusive events: P(A or B) = P(A) + P(B).",
        ncertDefinition: "The sample space S lists all possible outcomes. An event E is a subset of S. P(E) = n(E)/n(S). The complement of E is the event E' where P(E') = 1 − P(E).",
        examText: "Sample spaces: Coin: S={H,T}, n(S)=2. Die: S={1,2,3,4,5,6}, n(S)=6. Two coins: S={(H,H),(H,T),(T,H),(T,T)}, n(S)=4. Two dice: n(S)=36. Playing cards: n(S)=52 (26 red, 26 black; 4 suits of 13 cards each; 4 kings, 4 queens, 4 jacks, 4 aces).",
        keywords: ["sample space", "event", "complement", "mutually exclusive", "playing cards", "dice", "probability formula"],
        highlights: [
          "Two dice: 36 outcomes. P(sum=7) = 6/36 = 1/6 (most likely sum).",
          "Standard deck: 52 cards = 4 suits × 13 ranks. 4 aces, 4 kings, 12 face cards (J,Q,K × 4 suits).",
          "P(not E) = 1 − P(E). Always an easy shortcut when it is easier to find P(E) first."
        ],
        example: "A card is drawn from a standard deck. P(ace) = 4/52 = 1/13. P(red card) = 26/52 = 1/2. P(king of hearts) = 1/52. P(not a king) = 1 − 4/52 = 48/52 = 12/13.",
        analogy: "Sample space is like a menu at a restaurant: all available options. An event is like a food preference (e.g. 'any vegetarian dish'). Probability tells you what fraction of the menu matches your preference.",
        visual: "Standard deck layout: 4 suits (♠,♥,♦,♣) × 13 ranks (A,2,3,4,5,6,7,8,9,10,J,Q,K). Highlighted: red cards, face cards, aces.",
        fact: "The famous 'Birthday Problem': In a group of just 23 people, the probability that two share a birthday exceeds 50%! With 70 people, it exceeds 99.9%.",
        trick: "For complementary probability: when asked for P(at least one ___), it is often easier to calculate P(none) first, then P(at least one) = 1 − P(none).",
        mistakes: "Counting outcomes without accounting for equally likely assumption. If outcomes are NOT equally likely (e.g. a biased coin), the classical formula cannot be directly applied.",
        recap: "S = all outcomes. E ⊆ S. P(E) = n(E)/n(S). P(E') = 1−P(E). Cards: 52 total, 4 suits, 13 per suit, 12 face cards."
      }
    ],
    formulas: [
      { name: "Classical Probability", equation: "P(E) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of possible outcomes}} = \\frac{n(E)}{n(S)}", variables: [{ symbol: "n(E)", meaning: "number of outcomes in event E" }, { symbol: "n(S)", meaning: "total outcomes in sample space" }], context: "Valid only when all outcomes are equally likely." },
      { name: "Complementary Probability", equation: "P(E') = 1 - P(E)", variables: [{ symbol: "E'", meaning: "complement of event E (event E does NOT happen)" }], context: "Use when it is easier to compute P(E) and then subtract from 1." }
    ],
    solved: [
      {
        question: "Two dice are thrown simultaneously. Find the probability that: (a) Sum = 9, (b) Sum ≥ 10",
        thinking: "Total sample space for two dice = 6 × 6 = 36. List all pairs that give the required sum.",
        steps: [
          "Total outcomes = 36.",
          "(a) Sum = 9: (3,6),(4,5),(5,4),(6,3) = 4 outcomes. P(sum=9) = 4/36 = 1/9.",
          "(b) Sum ≥ 10: Sum=10: (4,6),(5,5),(6,4) → 3 outcomes. Sum=11: (5,6),(6,5) → 2 outcomes. Sum=12: (6,6) → 1 outcome. Total = 6 outcomes. P(sum≥10) = 6/36 = 1/6."
        ],
        answer: "(a) P(sum=9) = 1/9. (b) P(sum≥10) = 1/6.",
        tips: "For two dice problems, always list systematically. Common sums: sum=7 has 6 outcomes (most likely); sum=2 and sum=12 each have 1 outcome (least likely)."
      }
    ],
    mcqs: [
      { question: "The probability of getting a head when a fair coin is tossed:", options: ["0", "1", "1/2", "2"], correctIndex: 2, explanation: "Sample space = {H, T}. Favourable outcomes = {H}. P(H) = 1/2." },
      { question: "A die is rolled. P(number > 4) is:", options: ["1/3", "1/2", "2/3", "1/6"], correctIndex: 0, explanation: "Numbers > 4 = {5, 6} = 2 outcomes. P = 2/6 = 1/3." },
      { question: "P(E) + P(not E) always equals:", options: ["0", "P(E)²", "1", "2"], correctIndex: 2, explanation: "Complementary probability: P(E) + P(E') = 1 always." },
      { question: "From a deck of 52 cards, P(drawing a queen) is:", options: ["1/13", "4/52", "1/52", "Both A and B"], correctIndex: 3, explanation: "4 queens in 52 cards. P = 4/52 = 1/13. Both 4/52 and 1/13 are equal, so both A and B are correct." },
      { question: "An event with probability 0 is called:", options: ["Certain", "Likely", "Impossible", "Complementary"], correctIndex: 2, explanation: "P = 0 means the event can never occur → impossible event." }
    ],
    flashcards: [
      { question: "What is the range of probability values?", answer: "0 ≤ P(E) ≤ 1. Impossible event P=0. Certain event P=1." },
      { question: "State the classical probability formula.", answer: "P(E) = n(E)/n(S) = favourable outcomes / total equally likely outcomes." },
      { question: "What is the sample space for rolling two dice?", answer: "36 equally likely outcomes (6×6 grid of ordered pairs)." },
      { question: "How many face cards are in a standard deck?", answer: "12 face cards (Jack, Queen, King in each of 4 suits)." },
      { question: "P(not getting a 6 on a die)?", answer: "P(not 6) = 1 − P(6) = 1 − 1/6 = 5/6." }
    ],
    revisionPoints: [
      "P(E) = n(E)/n(S). Range: 0 ≤ P ≤ 1.",
      "Sample space for coin = {H,T}. Die = {1,2,3,4,5,6}. Two coins = 4 outcomes. Two dice = 36 outcomes.",
      "Standard deck: 52 cards, 4 suits, 13 per suit, 4 aces, 12 face cards.",
      "P(E') = 1 − P(E) (complement rule).",
      "Experimental probability converges to theoretical probability as number of trials increases."
    ],
    summaryPoints: [
      "Probability measures the likelihood of an event, always expressed as a number between 0 and 1.",
      "Theoretical probability uses equally likely outcomes; experimental probability is based on actual trial counts.",
      "The sample space is the complete list of all possible outcomes; an event is any subset of the sample space.",
      "The complement rule — P(not E) = 1 − P(E) — is a powerful shortcut, especially for 'at least one' problems.",
      "Common probability experiments — coins, dice, playing cards — provide standard sample spaces with well-known sizes.",
      "As trials increase, experimental probability converges to theoretical probability — this is the Law of Large Numbers, fundamental to statistics and data science."
    ]
  },

  "sequences-progressions": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "Identify and continue arithmetic and geometric sequences.",
      "Find the nth term (general term) of an AP and GP.",
      "Calculate the sum of n terms of an AP and GP.",
      "Apply AP and GP to real-world contexts: simple interest, population growth, depreciation.",
      "Recognize and explore other sequences: Fibonacci, triangular, square numbers."
    ],
    warmupQ: "Look at the sequence 2, 5, 8, 11, 14, … Each term increases by 3. What is the 50th term? What is the sum of the first 20 terms?",
    warmupFact: "The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, …) appears throughout nature: in sunflower seed spirals, pine cone scales, nautilus shells, and even in the proportions of the human body!",
    warmupHint: "For the sequence 2, 5, 8, 11, … the first term a=2, common difference d=3. nth term = a + (n−1)d. 50th term = 2 + 49×3 = 149.",
    concepts: [
      {
        name: "Arithmetic Progressions (AP): nth Term and Sum",
        definition: "An Arithmetic Progression (AP) is a sequence where each term differs from the previous by a constant amount called the common difference (d). General form: a, a+d, a+2d, … The nth term (general term): aₙ = a + (n−1)d. Sum of n terms: Sₙ = (n/2)[2a + (n−1)d] = (n/2)(first term + last term).",
        ncertDefinition: "An arithmetic progression is a sequence in which each successive term has a constant difference from the previous term. The nth term is a + (n−1)d and the sum of n terms is Sₙ = n/2 × [2a + (n−1)d].",
        examText: "Important results: Sum formula alternative: Sₙ = n/2 × (a + l) where l = last term. For a given AP, the common difference d = any term − previous term. Arithmetic mean of a and b = (a+b)/2 (the term exactly between a and b in an AP).",
        keywords: ["arithmetic progression", "common difference", "nth term", "sum of AP", "arithmetic mean"],
        highlights: [
          "AP formula: aₙ = a + (n−1)d. Sum: Sₙ = n/2(2a+(n−1)d).",
          "If last term l is known: Sₙ = n/2 × (a + l).",
          "aₙ = Sₙ − Sₙ₋₁ (nth term = difference of consecutive partial sums)."
        ],
        example: "AP: 3, 7, 11, 15, … (a=3, d=4). 10th term = 3 + 9×4 = 39. Sum of first 10 terms = 10/2 × (6 + 36) = 5 × 42 = 210.",
        analogy: "An AP is like climbing stairs: each step (common difference) is the same height. The total height after n steps (sum) grows predictably with each step you take.",
        visual: "Dotted steps diagram: AP terms as evenly spaced rungs on a staircase, with d = constant step height labelled.",
        fact: "According to popular legend, when Gauss was 9 years old, his teacher asked the class to add all integers from 1 to 100. Gauss instantly replied '5050' by pairing 1+100, 2+99, etc. — essentially discovering the AP sum formula!",
        trick: "For sum 1+2+3+…+n: this is an AP with a=1, d=1, last term=n. Sum = n(n+1)/2.",
        mistakes: "Writing aₙ = a + nd instead of a + (n−1)d. The first term has n=1, so it contributes (1−1)d = 0 from the d term — only 'a' itself.",
        recap: "AP: constant difference d. aₙ = a+(n−1)d. Sₙ = n/2[2a+(n−1)d]. Sₙ = n/2(a+l)."
      },
      {
        name: "Geometric Progressions (GP): nth Term and Sum",
        definition: "A Geometric Progression (GP) is a sequence where each term is obtained by multiplying the previous term by a constant ratio called the common ratio (r). General form: a, ar, ar², ar³, … The nth term: aₙ = arⁿ⁻¹. Sum of n terms: Sₙ = a(rⁿ−1)/(r−1) for r≠1. Sum to infinity (when |r|<1): S∞ = a/(1−r).",
        ncertDefinition: "A geometric progression has each term obtained by multiplying the previous term by a constant ratio r. The nth term is arⁿ⁻¹. Sum of n terms = a(rⁿ−1)/(r−1).",
        examText: "Important: Geometric mean of a and b = √(ab). If r > 1: GP is increasing. If 0 < r < 1: GP is decreasing. If r < 0: GP alternates sign. Special sums: 1+1/2+1/4+1/8+…(infinite GP, r=1/2): S∞ = 1/(1−1/2) = 2.",
        keywords: ["geometric progression", "common ratio", "nth term", "sum of GP", "geometric mean", "infinite GP"],
        highlights: [
          "GP formula: aₙ = arⁿ⁻¹. Sum: Sₙ = a(rⁿ−1)/(r−1).",
          "Infinite GP (|r|<1): S∞ = a/(1−r).",
          "Three numbers in GP: a/r, a, ar (this setup simplifies product problems)."
        ],
        example: "GP: 2, 6, 18, 54, … (a=2, r=3). 6th term = 2×3⁵ = 2×243 = 486. Sum of 4 terms = 2(3⁴−1)/(3−1) = 2×80/2 = 80.",
        analogy: "A GP is like compound interest: money grows by a fixed percentage (common ratio) each year. Start with ₹1000, 10% interest annually: ₹1000, ₹1100, ₹1210, ₹1331, … — a geometric progression.",
        visual: "Two graphs side by side: AP = straight line (linear growth). GP = exponential curve (exponential growth). Visually shows why GP eventually dominates AP.",
        fact: "If you fold a piece of paper in half 42 times (theoretically), the resulting stack would be thick enough to reach the Moon — because each fold doubles the thickness (GP with r=2).",
        trick: "For three numbers in GP: let them be a/r, a, ar. Their product = a³ (easy to find). Their sum = a/r + a + ar. This substitution simplifies GP problems greatly.",
        mistakes: "Using r−1 in the denominator when r=1. When r=1, all terms are equal (constant sequence) and sum = na (just multiply by n).",
        recap: "GP: constant ratio r. aₙ = arⁿ⁻¹. Sₙ = a(rⁿ−1)/(r−1). S∞ = a/(1−r) when |r|<1."
      }
    ],
    formulas: [
      { name: "AP nth Term", equation: "a_n = a + (n-1)d", variables: [{ symbol: "a", meaning: "first term" }, { symbol: "d", meaning: "common difference" }, { symbol: "n", meaning: "term number" }], context: "Finding any term in an arithmetic progression." },
      { name: "AP Sum", equation: "S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)", variables: [{ symbol: "l", meaning: "last term" }], context: "Sum of first n terms of an AP." },
      { name: "GP nth Term", equation: "a_n = ar^{n-1}", variables: [{ symbol: "r", meaning: "common ratio" }], context: "Finding any term in a geometric progression." },
      { name: "GP Sum", equation: "S_n = \\frac{a(r^n - 1)}{r - 1}, \\quad r \\neq 1", variables: [], context: "Sum of first n terms of a GP (r ≠ 1)." }
    ],
    solved: [
      {
        question: "Find the sum of all even numbers from 2 to 100.",
        thinking: "The even numbers 2, 4, 6, …, 100 form an AP with a=2, d=2, l=100. Find n, then apply sum formula.",
        steps: [
          "AP: a=2, d=2, l=100. Find n: l = a+(n−1)d → 100 = 2+(n−1)2 → 98 = 2(n−1) → n−1 = 49 → n = 50.",
          "Sum = n/2 × (a+l) = 50/2 × (2+100) = 25 × 102 = 2550."
        ],
        answer: "Sum of even numbers from 2 to 100 = 2550.",
        tips: "Even numbers from 2 to 100 form an AP with n=50 terms. Alternative: sum = 2+4+…+100 = 2(1+2+…+50) = 2 × 50×51/2 = 2550."
      }
    ],
    mcqs: [
      { question: "The 15th term of AP: 3, 8, 13, 18, … is:", options: ["73", "68", "78", "63"], correctIndex: 0, explanation: "a=3, d=5. a₁₅ = 3 + 14×5 = 3 + 70 = 73." },
      { question: "In a GP 3, 9, 27, …, the common ratio is:", options: ["3", "6", "9", "27"], correctIndex: 0, explanation: "r = second term / first term = 9/3 = 3." },
      { question: "Sum of first 10 natural numbers is:", options: ["45", "55", "50", "100"], correctIndex: 1, explanation: "1+2+…+10 = 10×11/2 = 55." },
      { question: "The 5th term of GP 2, 4, 8, 16, … is:", options: ["32", "64", "16", "48"], correctIndex: 0, explanation: "a=2, r=2. a₅ = 2 × 2⁴ = 2 × 16 = 32." },
      { question: "Sum to infinity of 1 + 1/2 + 1/4 + … is:", options: ["1", "2", "3", "4"], correctIndex: 1, explanation: "Infinite GP with a=1, r=1/2. S∞ = 1/(1−1/2) = 1/(1/2) = 2." }
    ],
    flashcards: [
      { question: "State the nth term formula for an AP.", answer: "aₙ = a + (n−1)d, where a = first term, d = common difference." },
      { question: "State the sum formula for an AP.", answer: "Sₙ = n/2 × [2a + (n−1)d] or Sₙ = n/2 × (first + last)." },
      { question: "What is the common ratio of GP: 5, 15, 45, 135?", answer: "r = 15/5 = 3." },
      { question: "Formula for infinite GP sum?", answer: "S∞ = a/(1−r), valid when |r| < 1." },
      { question: "What is the arithmetic mean of 6 and 18?", answer: "AM = (6+18)/2 = 12." }
    ],
    revisionPoints: [
      "AP: constant difference d. aₙ = a+(n−1)d. Sₙ = n/2[2a+(n−1)d].",
      "GP: constant ratio r. aₙ = arⁿ⁻¹. Sₙ = a(rⁿ−1)/(r−1) for r≠1.",
      "Infinite GP sum S∞ = a/(1−r) when |r|<1.",
      "Arithmetic mean of a and b = (a+b)/2. Geometric mean = √(ab).",
      "Sum 1+2+…+n = n(n+1)/2 (AP with a=1, d=1).",
      "Three numbers in AP: a−d, a, a+d. In GP: a/r, a, ar."
    ],
    summaryPoints: [
      "Sequences are ordered lists of numbers following a pattern; progressions are sequences with a defined rule for generating each term.",
      "Arithmetic progressions have a constant difference between consecutive terms; their nth term and sum are calculable by simple linear formulas.",
      "Geometric progressions have a constant ratio between consecutive terms; they model exponential growth and decay in science, finance, and biology.",
      "Real-world AP applications: salary increments, simple interest calculations, stacking problems.",
      "Real-world GP applications: compound interest, population growth, radioactive decay, paper folding.",
      "The infinite GP sum formula S∞ = a/(1−r) converges only when |r| < 1 — when |r| ≥ 1, the sum grows without bound."
    ]
  }
};
