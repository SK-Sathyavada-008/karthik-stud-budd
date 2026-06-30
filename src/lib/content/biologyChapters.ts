// NCERT 2026 Biology Chapters - Expanded Content
import { FullChapterData } from "./scienceContent";

export const BIOLOGY_CHAPTERS: Record<string, FullChapterData> = {

  "cell-block": {
    difficulty: "Easy",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "State and explain the cell theory and its historical development.",
      "Distinguish between prokaryotic and eukaryotic cells with examples.",
      "Identify and describe the structure and function of key cell organelles.",
      "Explain plasma membrane structure and the processes of osmosis, diffusion, and active transport.",
      "Distinguish between mitosis and meiosis and explain their significance."
    ],
    warmupQ: "All living things — a single bacterium, a giant whale, and you — are made of cells. What is so special about cells that every form of life is built from them?",
    warmupFact: "Your body contains approximately 37.2 trillion cells. Every second, your bone marrow produces about 2.4 million new red blood cells to replace the ones that die. That is 200 billion new red blood cells every day!",
    warmupHint: "A cell is the smallest structural and functional unit of life. It can carry out all essential life functions (nutrition, respiration, reproduction, excretion) independently — making it the basic building block of all organisms.",
    concepts: [
      {
        name: "Cell Theory and Types of Cells",
        definition: "Cell Theory (Schleiden, Schwann, Virchow — 1838–1855): (1) All living organisms are composed of one or more cells. (2) The cell is the basic structural and functional unit of life. (3) All cells arise from pre-existing cells. Prokaryotic cells: no membrane-bound nucleus; no membrane-bound organelles; single circular DNA; cell wall of peptidoglycan; smaller (1–10 μm). Examples: bacteria, cyanobacteria. Eukaryotic cells: membrane-bound nucleus; membrane-bound organelles; multiple linear chromosomes; larger (10–100 μm). Examples: plant, animal, fungal, protistan cells.",
        ncertDefinition: "Cell theory states all living organisms are made of cells. Prokaryotic cells lack a nucleus and membrane-bound organelles; eukaryotic cells have both. Plant and animal cells are both eukaryotic but differ in several features.",
        examText: "Prokaryote vs Eukaryote table for exams: (1) Nucleus: Pro = absent (nucleoid region only), Eu = membrane-bound true nucleus. (2) DNA: Pro = circular, single, no histones; Eu = linear, multiple chromosomes, with histones. (3) Organelles: Pro = none (ribosomes only); Eu = many (mitochondria, ER, Golgi etc.). (4) Cell wall: bacteria = peptidoglycan; plants = cellulose; fungi = chitin; animals = absent. (5) Ribosome size: Pro = 70S; Eu = 80S (cytoplasmic), 70S (mitochondria/chloroplast).",
        keywords: ["cell theory", "prokaryote", "eukaryote", "nucleus", "Schleiden", "Schwann", "Virchow"],
        highlights: [
          "All cells come from pre-existing cells (Virchow, 1855) — spontaneous generation is impossible.",
          "Prokaryotes: bacteria and archaea. No nucleus. DNA freely in cytoplasm (nucleoid).",
          "Eukaryotes: all plants, animals, fungi, protists. Have true nucleus with nuclear envelope."
        ],
        example: "Salmonella (prokaryote) has no nucleus — its circular DNA floats freely in the cytoplasm. A human liver cell (eukaryote) has a nucleus with 46 chromosomes, mitochondria for energy, ER for protein synthesis, and a Golgi apparatus for packaging.",
        analogy: "Prokaryotes are like a small roadside shop — everything in one open space, no separate departments. Eukaryotes are like a large shopping mall — separate departments (organelles) each specialised for different functions, connected by corridors (transport pathways).",
        visual: "Side-by-side diagrams: Prokaryotic cell (circular DNA floating, 70S ribosomes, cell wall, no organelles). Eukaryotic plant cell (nucleus, chloroplast, mitochondria, ER, Golgi, vacuole, cell wall).",
        fact: "Mycoplasma gallicepticum is the smallest known living cell — just 0.2 micrometres in diameter (smaller than some viruses). The largest single cell is the ostrich egg yolk — visible to the naked eye at about 7 cm!",
        trick: "PPEND for Prokaryote features: Peptidoglycan wall, Plasmid DNA, Extremely small, No nucleus, DNA circular. Compare with eukaryotes which have all the reverse.",
        mistakes: "Saying 'viruses are prokaryotes'. Viruses are NOT cells — they have no cell membrane, no cytoplasm, no ribosomes. They cannot carry out life processes independently and are not considered living by most definitions.",
        recap: "Cell theory: all life = cells; cells = functional unit; cells from cells. Pro: no nucleus, circular DNA, 70S. Eu: true nucleus, linear DNA, 80S, organelles."
      },
      {
        name: "Cell Organelles — Structure and Function",
        definition: "Key organelles and their functions: Cell Wall: rigid outer layer (plants = cellulose; bacteria = peptidoglycan); provides shape and protection. Plasma Membrane: selectively permeable phospholipid bilayer; controls entry and exit of substances. Nucleus: control centre; contains DNA and nucleolus (rRNA synthesis). Mitochondria: double membrane; ATP synthesis (cellular respiration); own DNA and ribosomes; 'powerhouse of the cell'. Chloroplast: double membrane; photosynthesis; contains chlorophyll; own DNA. Endoplasmic Reticulum: Rough ER (ribosomes — protein synthesis/transport); Smooth ER (lipid synthesis, detoxification). Golgi Body: packages and ships proteins from ER; forms lysosomes. Lysosome: contains digestive enzymes; destroys waste and pathogens ('suicidal bags'). Vacuole: large in plant cells (central vacuole — maintains turgor); small in animal cells. Ribosome: site of protein synthesis; found in cytoplasm and rough ER (80S) and mitochondria/chloroplasts (70S). Centrosome: animal cells only; involved in cell division (forms spindle fibres). Peroxisome: breaks down fatty acids and H₂O₂.",
        ncertDefinition: "Cell organelles perform specific functions. Mitochondria are the powerhouse (ATP synthesis). Nucleus is the control centre. Chloroplasts carry out photosynthesis. ER connects nucleus to cell membrane.",
        examText: "Comparisons for CBSE: Plant vs Animal cells: Plant has = cell wall (cellulose), chloroplasts, large central vacuole, no centrioles. Animal has = centrioles, lysosomes more prominent, small/no vacuoles, no cell wall, no chloroplasts. Mitochondria and chloroplasts both have: double membrane, own DNA, own 70S ribosomes — evidence for endosymbiotic theory.",
        keywords: ["mitochondria", "chloroplast", "nucleus", "ER", "Golgi", "lysosome", "ribosome", "vacuole", "plasma membrane"],
        highlights: [
          "Mitochondria: powerhouse, ATP synthesis, double membrane, own DNA (evidence of endosymbiosis).",
          "Chloroplast: site of photosynthesis, contains chlorophyll, double membrane, own DNA.",
          "Lysosome: 'suicidal bags' — digestive enzymes that destroy waste. Formed by Golgi body."
        ],
        example: "A root hair cell absorbs water and minerals from soil: plasma membrane controls selective absorption. Mitochondria provide ATP for active transport. No chloroplasts needed (no light underground). This shows how organelles work together for the cell's function.",
        analogy: "A cell is like a city: nucleus = city hall (control centre), mitochondria = power station, ribosomes = factories, ER = road network (transport), Golgi = post office (packages and sends goods), lysosomes = waste management, vacuole = water reservoir, cell wall = city boundary wall.",
        visual: "Labelled plant cell diagram with all organelles. Arrows showing: nucleus → ribosome (DNA → RNA → protein), Rough ER → Golgi → secretion. Separate animal cell diagram highlighting absence of cell wall, chloroplasts, and presence of centrioles.",
        fact: "Mitochondria have their own DNA and ribosomes, suggesting they were once free-living bacteria that were engulfed by a larger cell 1.5 billion years ago (endosymbiotic theory, Lynn Margulis). This is why both mitochondria and bacteria use 70S ribosomes!",
        trick: "Plant vs Animal: 'Plants are CVP — Cell wall, Vacuole (large), Plastids (chloroplasts)'. Animals are 'CAL — Centrioles, Active lysosomes, Less vacuole'. This distinguishes the two types.",
        mistakes: "Saying ribosomes are membrane-bound organelles. Ribosomes have NO membrane. They are made of rRNA and protein, and they float freely in cytoplasm or attach to rough ER.",
        recap: "Mitochondria = ATP. Chloroplast = photosynthesis. Nucleus = DNA + control. Ribosome = protein synthesis. ER = transport + synthesis. Golgi = package + export. Lysosome = digestion."
      },
      {
        name: "Plasma Membrane Transport — Diffusion, Osmosis, and Active Transport",
        definition: "The plasma membrane is selectively permeable — it allows some substances to pass while blocking others. Diffusion: the movement of substances from high concentration to low concentration (down the concentration gradient) without energy. Net movement stops when concentrations equalise. Osmosis: the movement of water molecules specifically through a selectively permeable membrane from a region of high water concentration (low solute concentration) to low water concentration (high solute concentration). Osmotic pressure drives this movement. Active Transport: movement of substances against the concentration gradient (low to high) using energy (ATP) and carrier proteins.",
        ncertDefinition: "Osmosis is the diffusion of water through a selectively permeable membrane from a dilute solution to a concentrated solution. Active transport moves substances against the gradient using energy.",
        examText: "Osmosis terminology: Hypotonic solution: dilute (less solute) — cell in hypotonic solution → water enters → cell swells (turgor in plants, lysis in animals). Hypertonic solution: concentrated (more solute) — cell in hypertonic solution → water exits → cell shrinks/plasmolysis in plants, crenation in animals. Isotonic solution: same concentration — no net water movement. Plasmolysis: when plant cell in hypertonic solution — protoplast shrinks away from cell wall.",
        keywords: ["osmosis", "diffusion", "active transport", "selectively permeable", "hypotonic", "hypertonic", "isotonic", "plasmolysis"],
        highlights: [
          "Osmosis: water moves through semi-permeable membrane from high water potential (dilute) to low water potential (concentrated).",
          "Plasmolysis: plant cell in hypertonic solution — protoplast shrinks away from cell wall (plant wilts).",
          "Active transport: against gradient, needs ATP and carrier proteins. Example: sodium-potassium pump."
        ],
        example: "Pickles (vegetables in salt solution): When fresh vegetables are placed in concentrated salt solution (hypertonic), water osmoses OUT of the cells → cells shrink → vegetables become hard/crunchy. This is why salt preserves food — bacteria also lose water and die.",
        analogy: "Osmosis is like a bouncer at an exclusive club: only water molecules (VIP guests) can freely pass through the selective membrane. Dissolved solutes (ordinary guests) are blocked. Water always rushes toward where the dissolved party is concentrated.",
        visual: "Three diagrams: (1) Hypotonic: cell in dilute — water enters → cell swells (arrow in). (2) Hypertonic: cell in concentrated — water exits → cell shrinks (arrow out). (3) Isotonic: equal — no net movement (arrows both ways, equal).",
        fact: "Intravenous (IV) saline solution given in hospitals is specifically 0.9% NaCl — an isotonic solution matching blood plasma concentration. If it were too dilute (hypotonic), blood cells would burst; too concentrated (hypertonic), they would shrink.",
        trick: "Osmosis direction: water moves TOWARD the more concentrated solution. Remember: HYPER sounds like 'higher concentration' — cells in hypertonic solution lose water. HYPO sounds like 'lower' — cells in hypotonic solution gain water.",
        mistakes: "Saying 'osmosis is the movement of solute'. Osmosis is specifically the movement of WATER (or solvent) — not the solute. Solute movement is diffusion. These are different processes.",
        recap: "Diffusion: high → low concentration (passive). Osmosis: water through semi-permeable membrane (passive). Active transport: low → high using ATP. Hypotonic → cell swells. Hypertonic → cell shrinks."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "A plant cell is placed in a concentrated sugar solution. Describe and explain what happens over the next few hours. Name the process involved.",
        thinking: "Identify: plant cell (has cell wall and plasma membrane) in hypertonic (concentrated) solution. Water will move by osmosis from the cell (higher water concentration) to the external solution (lower water concentration).",
        steps: [
          "The external sugar solution is hypertonic (more concentrated than the cell contents).",
          "By osmosis, water moves OUT of the cell through the selectively permeable membrane.",
          "The cell vacuole shrinks and the cytoplasm pulls away from the cell wall.",
          "This process is called PLASMOLYSIS. The cell becomes flaccid (limp).",
          "If returned to water (hypotonic solution), water enters and the cell becomes turgid again — this is deplasmolysis."
        ],
        answer: "Plasmolysis occurs: water exits by osmosis → protoplast shrinks → cell becomes flaccid. The process is osmosis; the visible result is plasmolysis.",
        tips: "Always name the process (osmosis) AND describe the result (plasmolysis/turgidity). Explain WHICH way water moves and WHY (from high to low water concentration)."
      }
    ],
    mcqs: [
      { question: "The 'powerhouse of the cell' is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correctIndex: 2, explanation: "Mitochondria produce ATP through cellular respiration — ATP is the energy currency of cells, making mitochondria the 'powerhouse'." },
      { question: "Which organelle is absent in plant cells but present in animal cells?", options: ["Mitochondria", "Chloroplast", "Centrosome/Centriole", "Vacuole"], correctIndex: 2, explanation: "Centrioles (centrosome) are present in animal cells and help form spindle fibres during cell division. Plant cells divide without centrioles." },
      { question: "A cell placed in a hypotonic solution will:", options: ["Shrink", "Remain unchanged", "Swell and may burst", "Undergo plasmolysis"], correctIndex: 2, explanation: "Hypotonic solution = more dilute than cell contents. Water enters the cell by osmosis → cell swells. Animal cells may burst (lysis); plant cells become turgid (cell wall prevents bursting)." },
      { question: "Ribosomes are the site of:", options: ["DNA replication", "Protein synthesis", "ATP production", "Photosynthesis"], correctIndex: 1, explanation: "Ribosomes translate mRNA into protein — they are the site of protein synthesis. Found in both prokaryotes and eukaryotes." },
      { question: "Which of the following does NOT have a cell wall?", options: ["Plant cell", "Bacterial cell", "Animal cell", "Fungal cell"], correctIndex: 2, explanation: "Animal cells have NO cell wall — only a plasma membrane. Plants have cellulose walls, bacteria have peptidoglycan walls, fungi have chitin walls." }
    ],
    flashcards: [
      { question: "State the three tenets of cell theory.", answer: "(1) All living things are made of cells. (2) Cell is the basic structural and functional unit of life. (3) All cells arise from pre-existing cells (Virchow, 1855)." },
      { question: "What is osmosis?", answer: "The movement of water molecules through a selectively permeable membrane from a region of higher water concentration (dilute solution) to lower water concentration (concentrated solution)." },
      { question: "Difference between prokaryotic and eukaryotic cells?", answer: "Prokaryotic: no nucleus, circular DNA, no membrane-bound organelles, 70S ribosomes (bacteria). Eukaryotic: true nucleus, linear DNA, membrane-bound organelles, 80S ribosomes (plants, animals, fungi)." },
      { question: "What is plasmolysis?", answer: "The shrinkage of the protoplast (cell contents) away from the cell wall when a plant cell is placed in a hypertonic (concentrated) solution — water exits by osmosis." },
      { question: "What is the function of the Golgi apparatus?", answer: "Packages, modifies, and ships proteins and lipids from the ER to their destinations inside or outside the cell. Also forms lysosomes." }
    ],
    revisionPoints: [
      "Cell theory: all life = cells; cells = functional unit; cells from cells.",
      "Prokaryote: no nucleus, circular DNA, 70S ribosomes, peptidoglycan wall.",
      "Eukaryote: true nucleus, linear chromosomes, 80S ribosomes, membrane organelles.",
      "Organelles: nucleus (control), mitochondria (ATP), chloroplast (photosynthesis), ribosome (protein), ER (transport/synthesis), Golgi (package/export), lysosome (digestion).",
      "Plant vs Animal: plant has cell wall + chloroplasts + large vacuole; animal has centrioles + prominent lysosomes.",
      "Diffusion: high → low (passive). Osmosis: water through semi-permeable membrane. Active transport: low → high (uses ATP).",
      "Hypotonic → cell swells. Hypertonic → cell shrinks (plasmolysis in plants, crenation in animals). Isotonic → no change."
    ],
    summaryPoints: [
      "The cell is the fundamental unit of life — the smallest entity that can independently carry out all life processes including nutrition, respiration, excretion, and reproduction.",
      "Cell theory, established by Schleiden, Schwann, and Virchow, provides three universal principles: cells compose all life, cells are the basic functional unit, and all cells arise from existing cells.",
      "Prokaryotic cells (bacteria, archaea) lack a membrane-bound nucleus and organelles — their genetic material floats freely in the cytoplasm as circular DNA.",
      "Eukaryotic cells have a true nucleus, extensive internal membrane systems, and specialised organelles — each performing specific functions in a coordinated cellular economy.",
      "Key organelles: mitochondria generate ATP through respiration; chloroplasts perform photosynthesis; ribosomes synthesise proteins; ER and Golgi form the secretory pathway; lysosomes perform cellular digestion.",
      "Plant cells are distinguished by their cellulose cell wall, chloroplasts, and large central vacuole — features absent in animal cells, which instead have centrioles and more prominent lysosomes.",
      "The plasma membrane is selectively permeable — controlling what enters and leaves the cell through diffusion (passive, high to low), osmosis (water movement), and active transport (energy-driven, against gradient).",
      "Osmosis explains why vegetables placed in salt water wilt (water exits), why fresh water organisms must continuously pump out water, and why intravenous fluids must be isotonic with blood."
    ]
  },

  "tissues-action": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Explain the concept of division of labour in multicellular organisms.",
      "Classify and describe plant tissues: meristematic and permanent (simple and complex).",
      "Describe the structure and function of all four types of animal tissues.",
      "Relate tissue structure to its specific function in the body.",
      "Compare plant and animal tissues and identify key differences."
    ],
    warmupQ: "Why does a tree need a different tissue to carry water than to make food? Why can't one type of cell do everything in a large organism like a whale?",
    warmupFact: "A single human nerve cell (neuron) can be over 1 metre long — the sciatic nerve running from the spinal cord to the foot consists of neurons nearly a metre in length! Each neuron can transmit electrical impulses at up to 120 m/s.",
    warmupHint: "In multicellular organisms, different cells are specialised for different functions — this is called division of labour. Groups of similar specialised cells form tissues, tissues form organs, and organs form systems.",
    concepts: [
      {
        name: "Plant Tissues — Meristematic and Permanent",
        definition: "Meristematic Tissues: actively dividing cells; found at growing regions. Types: Apical meristem (root and shoot tips — primary growth in length); Lateral meristem/cambium (sides of stems/roots — secondary growth in girth); Intercalary meristem (at nodes of grasses — growth between internodes). Permanent Tissues: cells that have stopped dividing and are differentiated for specific functions. Simple permanent tissues: Parenchyma (living, thin-walled, loosely packed — storage, photosynthesis; specialised forms: aerenchyma in aquatic plants for buoyancy). Collenchyma (living, unevenly thickened corners — mechanical support in growing stems). Sclerenchyma (dead at maturity, heavily lignified walls — provides rigidity; subtypes: fibres and sclereids). Complex permanent tissues: Xylem (dead except companion cells of phloem; conducts water and minerals upward — made of tracheids, vessels, xylem fibres, xylem parenchyma). Phloem (conducts food from leaves to all parts — made of sieve tubes, companion cells, phloem parenchyma, phloem fibres).",
        ncertDefinition: "Meristematic tissues have dividing cells for growth. Permanent tissues (parenchyma, collenchyma, sclerenchyma) perform specific functions. Xylem conducts water; phloem conducts food.",
        examText: "Distinctions for CBSE: Parenchyma vs Collenchyma vs Sclerenchyma: (1) Parenchyma: living, thin uniform walls, large vacuole, loosely packed — storage, photosynthesis. (2) Collenchyma: living, thickened corners, flexible — support in young stems. (3) Sclerenchyma: DEAD, thick lignified walls, no lumen — rigid support. Xylem vs Phloem: Xylem conducts water + minerals UPWARD (from roots to leaves); Phloem conducts food BIDIRECTIONALLY (from leaves to other parts). Phloem has living sieve tubes with companion cells; xylem vessels and tracheids are dead at functional maturity.",
        keywords: ["meristem", "parenchyma", "collenchyma", "sclerenchyma", "xylem", "phloem", "apical", "cambium"],
        highlights: [
          "Sclerenchyma cells are DEAD at maturity — the thick lignified walls provide structural rigidity (like stone cells in pear fruit).",
          "Xylem: water transport upward. Phloem: food (sugar) transport bidirectionally. Both form vascular bundles.",
          "Cambium: lateral meristem responsible for GIRTH increase (secondary growth) — produces rings in trees."
        ],
        example: "Celery strings are bundles of collenchyma tissue — you can feel the fibrous resistance when pulling the strings off a celery stalk. The hollow centre of a bamboo stem shows sclerenchyma fibres around vascular bundles providing extraordinary strength for its weight.",
        analogy: "Plant tissues are like a building: meristematic = construction workers (still building), parenchyma = rooms (storage/functions), collenchyma = flexible scaffolding (support but still growing), sclerenchyma = reinforced concrete pillars (permanent, rigid), xylem = water pipes (upward), phloem = electrical wiring (carries energy/food both ways).",
        visual: "Cross-section of dicot stem: showing epidermis, cortex (parenchyma, collenchyma), stele (vascular bundles with xylem and phloem, cambium). Labels clearly showing location of each tissue type.",
        fact: "Wood is essentially dead xylem tissue accumulated over many years. Tree rings (annual rings) are alternate layers of thick-walled (summer) and thin-walled (winter) xylem, allowing dendrochronologists to date trees and read climate history from their rings.",
        trick: "Remember: 'PSC' for simple permanent tissues in order of increasing wall thickness: Parenchyma (thin) → Collenchyma (corner-thickened) → Sclerenchyma (fully thick lignified, DEAD). Also: Xylem = eXtraordinary water transport; Phloem = Food (Phloem → Food).",
        mistakes: "Saying 'phloem transports water'. Phloem transports FOOD (sugars/photosynthates). XYLEM transports water and dissolved minerals from roots upward. Common reversal in exams.",
        recap: "Meristematic: dividing, at tips/sides. Permanent: Parenchyma (storage), Collenchyma (support, living), Sclerenchyma (rigid, dead). Xylem: water up. Phloem: food bidirectionally."
      },
      {
        name: "Animal Tissues — Epithelial, Connective, Muscular, and Nervous",
        definition: "Epithelial Tissue: covers body surfaces and lines internal organs and cavities. Types: Squamous (flat, scale-like — skin, alveoli), Cuboidal (cube-shaped — kidney tubules, salivary glands), Columnar (column-like, may have cilia — intestinal lining, respiratory tract), Stratified (multiple layers — skin epidermis), Ciliated (columnar with cilia — respiratory tract, fallopian tube). Connective Tissue: connects and supports other tissues. Types: Loose connective tissue (areolar — space-filler, surrounds organs). Dense connective tissue (tendons = muscle to bone; ligaments = bone to bone). Adipose tissue (fat storage, insulation). Cartilage (flexible skeletal support — ear, nose, between vertebrae). Bone (hard, calcified, structural support). Blood (liquid connective tissue — transports O₂, nutrients, hormones). Muscular Tissue: contracts to produce movement. Types: Striated/Skeletal (voluntary, attached to skeleton, multi-nucleate). Smooth/Visceral (involuntary, in internal organs, spindle-shaped, single nucleus). Cardiac (involuntary, striated, branched with intercalated discs — only in heart). Nervous Tissue: conducts electrical impulses. Neuron = structural and functional unit: cell body (soma) + dendrites (receive signals) + axon (transmit signals). Neuroglia (supporting cells, 10× more numerous than neurons).",
        ncertDefinition: "Four types of animal tissues: epithelial (covering), connective (support/transport), muscular (movement), and nervous (signal transmission). Each is specialised in structure for its specific function.",
        examText: "Key distinctions: Tendon (muscle to bone) vs Ligament (bone to bone): both dense connective tissue. Striated vs Smooth vs Cardiac muscle: Striated = voluntary + multi-nucleate + striations. Smooth = involuntary + single nucleus + no striations (in organs). Cardiac = involuntary + striated + branched + intercalated discs (heart only). Blood as connective tissue: plasma (liquid matrix) + RBC (no nucleus, carries haemoglobin) + WBC (nucleus, immunity) + platelets (clotting).",
        keywords: ["epithelial", "connective", "muscular", "nervous", "neuron", "striated", "smooth", "cardiac", "tendon", "ligament"],
        highlights: [
          "Blood is a CONNECTIVE TISSUE (liquid matrix = plasma, cells = RBC/WBC/platelets) — not classified as 'blood tissue'.",
          "Cardiac muscle: involuntary + striated + branched + intercalated discs — unique features that allow coordinated heart contraction.",
          "Neurons: cell body + dendrites (receive) + axon (transmit). Single long axon can span a metre (e.g., sciatic nerve)."
        ],
        example: "The gut wall layers illustrate all tissue types: outer = squamous epithelium (serosal layer), connective tissue holds gut in place, smooth muscle layer (two layers — circular and longitudinal for peristalsis), inner columnar epithelium (absorption). All four tissue types in one organ!",
        analogy: "Animal tissues are like a company: epithelial = reception desk (outermost interface with environment), connective = infrastructure (office walls, wiring, plumbing), muscular = workers doing physical labour (contracting, moving things), nervous = managers and communications (sending instructions rapidly across the company).",
        visual: "Four tissue diagrams side by side: (1) Cuboidal epithelium with tightly packed cubes. (2) Areolar connective tissue with fibres and cells. (3) Three muscle types side by side with striations, branching highlighted. (4) Neuron with cell body, dendrites, axon, myelin sheath.",
        fact: "Cardiac muscle cells (cardiomyocytes) are among the most remarkable cells in the body. They beat automatically without nervous input (automaticity), and the 2–3 billion contractions of a 70-year human lifetime are accomplished without any rest longer than 0.3 seconds between beats.",
        trick: "Three muscle types: S-S-C. Skeletal = Stripes + Several nuclei + voluntary. Smooth = Spindle-shaped + Single nucleus + organ walls. Cardiac = Stripes + branChed + heart only. Tendon = T-B (Tie to Bone); Ligament = L-L (Links bone-bone).",
        mistakes: "Confusing tendons and ligaments. Tendon = muscle to bone (T for 'Ties muscle'). Ligament = bone to bone (L for 'Links bone'). Also, incorrectly calling blood a 'fluid tissue' — technically it is a connective tissue with liquid matrix.",
        recap: "Epithelial: covers surfaces (squamous, cuboidal, columnar, ciliated). Connective: supports (bone, cartilage, blood, adipose, tendons, ligaments). Muscular: striated (voluntary), smooth (involuntary organs), cardiac (heart). Nervous: neurons (cell body + dendrites + axon)."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Compare and contrast xylem and phloem as tissues in plants. Mention two structural and two functional differences.",
        thinking: "Organise into structure (composition, living vs dead, wall type) and function (what they transport, direction).",
        steps: [
          "Structure: Xylem = mainly dead cells (tracheids and vessels) with lignified walls. Phloem = mainly living cells (sieve tubes and companion cells).",
          "Structure: Xylem has no cross-walls in vessels (open tubes for rapid water flow). Phloem has sieve plates between sieve tube elements.",
          "Function: Xylem transports water and dissolved minerals from ROOTS to LEAVES (upward, unidirectional).",
          "Function: Phloem transports food/sugars from leaves (source) to all other parts including roots (bidirectional — can flow up and down)."
        ],
        answer: "Xylem: dead cells, lignified walls, transports water upward. Phloem: living sieve tubes + companion cells, transports food bidirectionally.",
        tips: "In comparison questions, use a table format: one column for xylem, one for phloem, rows for each difference. This format earns full marks and is easy for examiners to check."
      }
    ],
    mcqs: [
      { question: "Meristematic tissue in plants is found at:", options: ["Mature leaves", "Root tips and shoot tips", "Woody stems", "Fruit walls"], correctIndex: 1, explanation: "Meristematic tissue is found at growing regions: apical (root and shoot tips), lateral (cambium, around girth), and intercalary (at internodes of grasses)." },
      { question: "The tissue that connects muscle to bone is:", options: ["Ligament", "Cartilage", "Tendon", "Adipose"], correctIndex: 2, explanation: "Tendon (dense connective tissue) connects muscle to bone. Ligament connects bone to bone." },
      { question: "Which type of muscle is involuntary, striated, and found only in the heart?", options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Voluntary muscle"], correctIndex: 2, explanation: "Cardiac muscle: involuntary (you cannot stop your heartbeat by will), striated (like skeletal), branched, and found ONLY in the heart." },
      { question: "Phloem transports:", options: ["Water only", "Minerals only", "Water and minerals", "Photosynthates (food) from leaves"], correctIndex: 3, explanation: "Phloem transports photosynthates (sugars, amino acids) made in leaves to other parts of the plant. Xylem transports water and minerals." },
      { question: "A tissue that provides flexible support in young stems and can still grow is:", options: ["Parenchyma", "Collenchyma", "Sclerenchyma", "Xylem"], correctIndex: 1, explanation: "Collenchyma: living cells with uneven cell wall thickening at corners, provides mechanical support in young stems while allowing continued growth." }
    ],
    flashcards: [
      { question: "What is the function of sclerenchyma?", answer: "Provides rigid mechanical support. Cells are dead at maturity with thick, lignified walls. Found in seed coats, nut shells, and the 'stone cells' of pear fruit." },
      { question: "What is blood classified as and why?", answer: "Blood is a CONNECTIVE TISSUE. It has a liquid matrix (plasma) and cellular components (RBCs, WBCs, platelets) — the defining features of connective tissue." },
      { question: "Three types of muscle tissue and where each is found:", answer: "Skeletal/Striated: voluntary, attached to bones. Smooth/Visceral: involuntary, walls of hollow organs (stomach, intestines, blood vessels). Cardiac: involuntary, striated, branched — ONLY in the heart." },
      { question: "What is the structural unit of nervous tissue?", answer: "Neuron: cell body (soma) + dendrites (receive impulses) + axon (transmit impulses). Surrounded by neuroglia (supporting cells)." },
      { question: "Difference between simple and complex permanent tissues in plants?", answer: "Simple: one cell type (parenchyma, collenchyma, or sclerenchyma). Complex: more than one cell type working together (xylem = tracheids + vessels + fibres + parenchyma; phloem = sieve tubes + companion cells + fibres + parenchyma)." }
    ],
    revisionPoints: [
      "Meristematic: dividing cells at tips (apical), girth (lateral/cambium), internodes (intercalary).",
      "Simple permanent: Parenchyma (storage), Collenchyma (flexible support, living), Sclerenchyma (rigid support, DEAD).",
      "Complex: Xylem (water up, dead vessels/tracheids), Phloem (food bidirectional, living sieve tubes).",
      "Epithelial: squamous (flat), cuboidal (kidney), columnar (gut), ciliated (respiratory).",
      "Connective: bone, cartilage, blood (liquid CT), adipose, tendons (muscle-bone), ligaments (bone-bone).",
      "Muscular: skeletal (voluntary, striated), smooth (involuntary, spindle), cardiac (involuntary, striated, branched, intercalated discs).",
      "Nervous: neuron = cell body + dendrites (in) + axon (out). Fastest impulse: ~120 m/s."
    ],
    summaryPoints: [
      "Division of labour in multicellular organisms means groups of similar cells specialise for specific functions, forming tissues that are far more efficient than undifferentiated cells.",
      "Plant meristematic tissues (at tips, girth, and nodes) are the source of all new plant cells — dividing continuously to produce permanent tissues for growth.",
      "Simple permanent plant tissues range from thin-walled living parenchyma (storage) to living flexible collenchyma (young stem support) to dead rigid sclerenchyma (permanent structural support).",
      "Complex plant tissues — xylem and phloem — are transport highways. Xylem carries water and minerals upward through dead vessels; phloem carries sugars bidirectionally through living sieve tubes.",
      "Epithelial tissue forms the outer body surfaces and linings of all internal cavities and organs — always sitting on a basement membrane with no blood supply of its own.",
      "Connective tissue is the most diverse tissue type, including bone, cartilage, blood, adipose, tendons, and ligaments — all sharing a structural matrix that surrounds the cells.",
      "Three distinct muscle types have evolved: skeletal (voluntary and fatigueable), smooth (involuntary and slow in hollow organs), and cardiac (involuntary, rhythmic, and uniquely branched).",
      "Nervous tissue conducts electrical impulses at speeds up to 120 m/s, allowing instant communication across the body. The neuron's unique shape — soma, dendrites, axon — is perfectly adapted for directional signal transmission."
    ]
  }
};
