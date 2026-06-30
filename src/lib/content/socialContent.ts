// NCERT 2026 Social Science Content - "Understanding Society: India and Beyond"
// Integrated textbook replacing separate History/Geography/Civics/Economics

import { FullChapterData } from "./scienceContent";

export const SOCIAL_CONTENT: Record<string, FullChapterData> = {

  "understanding-social-science": {
    difficulty: "Easy",
    estimatedTime: "2.5 hours",
    learningObjectives: [
      "Define social science and explain why it is a distinct field of human knowledge.",
      "Identify the five sub-disciplines: History, Geography, Political Science, Economics, and Sociology.",
      "Understand how social science uses evidence, data, and reasoning to study human society.",
      "Explain the difference between the natural sciences and social sciences in method and scope.",
      "Recognise the interdisciplinary nature of contemporary social problems."
    ],
    warmupQ: "Why do you think it is important to study how society works? Can understanding history change how we make decisions today?",
    warmupFact: "The ancient Indian treatise Arthashastra, written by Chanakya (Kautilya) around 300 BCE, is one of the world's earliest systematic texts on political economy, governance, and statecraft — over 2,000 years before modern social science!",
    warmupHint: "Social science studies human behaviour, societies, and institutions. It uses evidence, comparison, and reasoning — just like natural science, but about people and societies rather than atoms and molecules.",
    concepts: [
      {
        name: "What is Social Science and Why Does It Matter?",
        definition: "Social science is the systematic study of human society, social relationships, and institutions. It encompasses disciplines including History (study of the past), Geography (study of Earth and its relationship with humans), Political Science (study of governance and power), Economics (study of production, distribution, and consumption of goods and services), and Sociology (study of social structures and behaviour). Social science uses data, evidence, comparison, and rational analysis to understand why societies are organised the way they are.",
        ncertDefinition: "Social Science is a discipline that studies human society, its history, culture, economy, governance, and environment. It uses evidence-based inquiry to understand social phenomena and human behaviour.",
        examText: "Key points: (1) Social science is interdisciplinary — modern problems (e.g. climate change, poverty) require insights from all sub-disciplines together. (2) Unlike natural science, social science studies phenomena that cannot be controlled in a laboratory. (3) Methods include: surveys, historical documents, case studies, statistical analysis, field observation. (4) Indian Knowledge Systems (IKS) — such as Arthashastra, Panchatantra — represent India's rich social science heritage.",
        keywords: ["social science", "interdisciplinary", "History", "Geography", "Economics", "Political Science", "Sociology"],
        highlights: [
          "Social science is not mere opinion — it uses systematic evidence-based inquiry.",
          "The 2026 NCERT integrates all social science disciplines into one textbook — reflecting real-world interconnectedness.",
          "Indian Knowledge Systems (IKS) are now a core part of the social science curriculum under NEP 2020."
        ],
        example: "A study of urban migration requires history (why people moved), geography (where they moved), economics (why they moved for work), political science (what policies affected movement), and sociology (how migration changed communities) — all five disciplines together.",
        analogy: "Social science is like a complete medical diagnosis: history is like looking at medical records (past), geography is the physical examination (environment), economics is checking vital signs (resources), political science is checking the hospital administration (governance), and sociology is understanding the patient's family and social support.",
        visual: "A central circle labelled 'Social Science' with 5 satellite circles: History, Geography, Political Science, Economics, Sociology — connected with two-way arrows showing interdependence.",
        fact: "Ibn Khaldun (1332–1406 CE), an Arab scholar from North Africa, is often called the 'Father of Modern Social Science' for his comprehensive Muqaddimah — the first systematic analysis of how civilizations rise and fall.",
        trick: "Remember the 5 social science disciplines with: 'Has Great Political Economy Skills' → History, Geography, Political Science, Economics, Sociology.",
        mistakes: "Thinking social science is 'soft' or unscientific. Social science uses rigorous methods — statistical analysis, peer review, controlled comparative studies — making it genuinely scientific in approach.",
        recap: "Social science = systematic study of human society using evidence. 5 sub-disciplines: History, Geography, Political Science, Economics, Sociology. Interdisciplinary by nature."
      },
      {
        name: "Methods of Inquiry in Social Science",
        definition: "Social scientists use various methods to gather and analyse evidence about human societies: Primary sources (original documents, eyewitness accounts, surveys, field observation, interviews, archaeological artifacts). Secondary sources (books, journals, articles that analyse primary sources). Quantitative methods (statistical analysis of numerical data). Qualitative methods (interpretation of texts, interviews, and case studies). Comparison (contrasting different societies or time periods to identify patterns).",
        ncertDefinition: "Social scientists gather evidence through primary sources (direct evidence) and secondary sources (interpreted analyses). Both quantitative and qualitative methods are used to understand social phenomena.",
        examText: "Distinguish: Primary source = original evidence from the time period under study (e.g. a 1947 newspaper, Ashoka's inscriptions, a census record). Secondary source = an analysis of primary sources written later (e.g. a history textbook, a journal article). Critical thinking: social scientists must evaluate the reliability, perspective, and bias of all sources.",
        keywords: ["primary source", "secondary source", "evidence", "quantitative", "qualitative", "bias", "inquiry"],
        highlights: [
          "Primary sources: raw, uninterpreted evidence. Secondary sources: analysis and interpretation.",
          "All sources may have bias — evaluate the author's perspective, purpose, and era.",
          "Statistical data (census, surveys) is quantitative. Interviews and oral history are qualitative."
        ],
        example: "Studying the partition of India (1947): Primary sources include newspaper reports, government documents, personal letters, and photographs. Secondary sources include historians' books analysing those events decades later.",
        analogy: "Primary vs secondary sources is like watching a cricket match live (primary) vs reading a journalist's match report the next morning (secondary). The live experience is direct; the report interprets and analyses.",
        visual: "Two-column table: Left = Primary Sources (examples). Right = Secondary Sources (examples). Below: advantages and limitations of each.",
        fact: "The Census of India, conducted every 10 years, is one of the world's largest data collection exercises — providing crucial quantitative data for social scientists, economists, and policymakers.",
        trick: "Primary = first-hand (P for Primary = P for Personal/Participant). Secondary = second-hand analysis (S for Secondary = S for Scholar's interpretation).",
        mistakes: "Assuming a secondary source is always less reliable. A secondary source by a rigorous, peer-reviewed scholar is often more reliable than an uncritical primary source with obvious bias.",
        recap: "Primary: original evidence. Secondary: analysis of primary sources. Quantitative: numbers. Qualitative: words/interpretations. Always evaluate bias."
      },
      {
        name: "Social Science and Contemporary India",
        definition: "Understanding contemporary India requires integrating all social science disciplines. Key contemporary issues — climate change, inequality, democratic participation, urbanisation, technological change — are multidimensional problems that no single discipline can fully explain. The NCERT 2026 curriculum emphasises India's civilisational heritage (IKS), democratic values, and the sustainable development goals (SDGs) as contexts for social science learning.",
        ncertDefinition: "Social science education in India today emphasises the interconnection between India's rich past, the challenges of the present, and the responsibilities of future citizens. Indian Knowledge Systems are integrated as legitimate sources of social wisdom.",
        examText: "Key contemporary themes: (1) India's federal democratic republic structure. (2) Economic development and inequality. (3) Environmental sustainability and climate change. (4) Technology and digital society. (5) India's role in global affairs. IKS examples: Arthashastra (governance), Panini's grammar (language science), Aryabhata (astronomy and mathematics).",
        keywords: ["contemporary India", "IKS", "Indian Knowledge Systems", "sustainable development", "democracy", "federalism"],
        highlights: [
          "NEP 2020 mandates integration of IKS — India's ancient knowledge systems — into school curriculum.",
          "SDGs (Sustainable Development Goals) by UN are a framework for addressing global social, economic, and environmental challenges.",
          "Social science education develops 'active citizens' who can think critically about society."
        ],
        example: "Understanding the problem of farmer distress in India requires: Economics (crop prices, debt), History (land reform history), Geography (monsoon patterns, soil quality), Political Science (government policies), and Sociology (caste and community structures).",
        analogy: "Contemporary social issues are like complex traffic junctions: history shows how the road network was built, geography shows the physical terrain, economics explains the vehicle density, political science controls the traffic signals, and sociology explains driver behaviour.",
        visual: "Concept map: Central issue (e.g. Farmer Distress) with branches connecting to History, Geography, Economics, Political Science, and Sociology — each branch labelled with its specific contribution.",
        fact: "India has the world's oldest continuously practised democracy tradition at local level (gram sabhas/panchayats), dating back thousands of years — long before Western democracies were established.",
        trick: "For exam 'application' questions: link ANY contemporary issue to multiple disciplines. Show how each discipline contributes a different lens of understanding.",
        mistakes: "Treating social issues as having a single cause or a single solution. Real social problems are multi-causal and require interdisciplinary, multi-stakeholder solutions.",
        recap: "Social science applies to real contemporary issues through integration of all 5 disciplines. IKS is a recognised source of social knowledge. Active citizenship is the goal of social science education."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Explain why the study of social science requires an interdisciplinary approach, using the example of poverty in India.",
        thinking: "Poverty is a complex social problem. Show how each social science discipline contributes to understanding it.",
        steps: [
          "History: Traces the roots of poverty to colonial exploitation, land dispossession, and de-industrialisation.",
          "Geography: Identifies spatial patterns — poverty is concentrated in certain regions (drought-prone, flood-prone, remote areas).",
          "Economics: Analyses income inequality, unemployment, inflation, and lack of access to credit.",
          "Political Science: Examines government poverty alleviation policies (MGNREGA, PM-KISAN), federalism, and policy effectiveness.",
          "Sociology: Studies how caste, gender, and social exclusion keep certain groups trapped in poverty."
        ],
        answer: "No single discipline can fully explain or solve poverty. Only by combining all five disciplines can we understand its causes and design effective solutions — demonstrating why an interdisciplinary approach is essential.",
        tips: "For high-scoring exam answers: always mention all 5 disciplines with specific examples. Show how they complement each other."
      }
    ],
    mcqs: [
      { question: "Which of the following is a primary source for studying the Mughal period?", options: ["A history textbook", "Akbar's court records from Ain-i-Akbari", "A documentary film", "An encyclopedia entry"], correctIndex: 1, explanation: "Ain-i-Akbari is an original document from Akbar's time — a direct primary source. Textbooks, films, and encyclopedias are secondary sources." },
      { question: "The ancient Indian treatise on governance and statecraft is:", options: ["Ramayana", "Arthashastra", "Panchatantra", "Manusmriti"], correctIndex: 1, explanation: "Arthashastra by Chanakya (Kautilya) is the systematic ancient Indian text on political economy and governance — a key IKS text." },
      { question: "Social science differs from natural science mainly because:", options: ["It uses no evidence", "It studies human society which cannot be fully controlled in a laboratory", "It is not systematic", "It was invented recently"], correctIndex: 1, explanation: "Social science studies humans and society — human behaviour cannot be perfectly controlled or repeated like a chemistry experiment." },
      { question: "IKS stands for:", options: ["Indian Knowledge System", "International Knowledge Standards", "Indian Keyword Science", "Integrated Knowledge Skills"], correctIndex: 0, explanation: "IKS = Indian Knowledge System — ancient Indian wisdom texts now integrated into NEP 2020 curriculum." },
      { question: "Which discipline studies the distribution, production, and consumption of goods?", options: ["History", "Geography", "Economics", "Sociology"], correctIndex: 2, explanation: "Economics studies how resources are produced, distributed, and consumed in society." }
    ],
    flashcards: [
      { question: "Name the 5 disciplines of social science.", answer: "History, Geography, Political Science, Economics, Sociology." },
      { question: "What is a primary source?", answer: "Original, first-hand evidence from the time period being studied (e.g. documents, artifacts, eyewitness accounts)." },
      { question: "What does IKS stand for?", answer: "Indian Knowledge System — ancient Indian texts and traditions (e.g. Arthashastra, Vedas, Sulba Sutras)." },
      { question: "Why is social science considered interdisciplinary?", answer: "Real-world social problems (poverty, climate change, inequality) require insights from multiple disciplines simultaneously." },
      { question: "Who wrote the Arthashastra?", answer: "Chanakya (also known as Kautilya), the advisor to Chandragupta Maurya, around 300 BCE." }
    ],
    revisionPoints: [
      "Social science: systematic, evidence-based study of human society.",
      "5 disciplines: History, Geography, Political Science, Economics, Sociology.",
      "Primary source: original evidence. Secondary source: analysis/interpretation.",
      "Quantitative methods use numbers; qualitative methods use words/case studies.",
      "IKS (Indian Knowledge System) is now core to NEP 2020 curriculum.",
      "All sources must be critically evaluated for bias and perspective.",
      "Social science develops active, critically thinking citizens."
    ],
    summaryPoints: [
      "Social science is the evidence-based, systematic study of human society, distinct from natural science in its subject matter but equally rigorous in method.",
      "Five sub-disciplines — History, Geography, Political Science, Economics, and Sociology — each offer a different lens for understanding society, but are most powerful when used together.",
      "Contemporary social problems like poverty, inequality, and climate change are inherently multidisciplinary and require integrated social science understanding.",
      "Primary sources are original evidence; secondary sources are scholarly analyses. Both are essential, and both must be evaluated for bias.",
      "Indian Knowledge Systems (IKS) represent India's rich intellectual heritage and are now formally integrated into the NCERT 2026 social science curriculum.",
      "The goal of social science education is to develop active, informed, and critically thinking citizens who can engage constructively with society's challenges."
    ]
  },

  "shaping-earths-surface": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Explain the theory of plate tectonics and the movement of tectonic plates.",
      "Describe the formation of major landforms: mountains, plains, plateaus, and valleys.",
      "Understand the internal and external forces that shape the Earth's surface.",
      "Explain the causes and effects of earthquakes, volcanoes, and tsunamis.",
      "Connect plate tectonics to the distribution of earthquakes and volcanoes globally."
    ],
    warmupQ: "South America and Africa look like they could 'fit together' like puzzle pieces. What does this suggest about the history of our continents?",
    warmupFact: "The Himalayas are still growing! The Indian plate continues to push northward into the Eurasian plate at about 5 cm per year — roughly the speed at which your fingernails grow.",
    warmupHint: "If the continents once fit together, they must have been joined and then slowly moved apart. This is the core idea of continental drift and plate tectonics.",
    concepts: [
      {
        name: "Theory of Plate Tectonics and Continental Drift",
        definition: "The theory of plate tectonics explains that Earth's outer shell (lithosphere) is divided into several large rigid plates that move slowly on the semi-molten asthenosphere below. Alfred Wegener (1912) first proposed Continental Drift — the idea that all continents were once joined as a supercontinent called Pangaea and have since drifted apart. Plates move due to convection currents in the mantle driven by heat from the Earth's interior.",
        ncertDefinition: "The theory of plate tectonics states that Earth's crust is divided into plates that move due to convection currents in the mantle. Continental drift refers to the movement of continents over geological time.",
        examText: "Key evidence for continental drift: (1) Matching coastlines of South America and Africa. (2) Identical fossil species found on separate continents (e.g. Glossopteris fern fossils on all southern continents). (3) Matching rock formations on opposite sides of Atlantic. (4) Palaeomagnetism — fossil magnetic patterns in ocean floor rocks. Types of plate boundaries: Convergent (plates collide → mountains/trenches), Divergent (plates separate → rift valleys/mid-ocean ridges), Transform (plates slide → earthquakes).",
        keywords: ["plate tectonics", "continental drift", "Pangaea", "Wegener", "convection currents", "plate boundaries"],
        highlights: [
          "Pangaea = supercontinent, broke apart 200 million years ago.",
          "Convergent boundary: mountain building (Himalayas = India + Eurasia collision).",
          "Divergent boundary: seafloor spreading (Mid-Atlantic Ridge).",
          "Transform boundary: earthquakes without volcanism (San Andreas Fault)."
        ],
        example: "The Himalayan mountain range formed (and is still forming) because the Indian plate is moving northward and colliding with the Eurasian plate at a convergent boundary. This is a continent-continent collision, which creates fold mountains.",
        analogy: "Plate tectonics is like a slow-motion puzzle being rearranged over millions of years: the puzzle pieces (plates) are constantly moving, and where they collide, mountains form; where they separate, oceans grow.",
        visual: "World map showing major tectonic plates with arrows indicating movement directions. Colour-coded boundaries: red = convergent, blue = divergent, green = transform.",
        fact: "In 250 million years, Africa will collide with Europe, closing the Mediterranean Sea — and a new supercontinent (sometimes called 'Pangaea Ultima') will form.",
        trick: "Convergent = collision = mountains (C for Collision = C for Crumple/Create mountains). Divergent = separation = ocean ridges (D for Diverge = D for Distance growing). Transform = sliding = earthquakes.",
        mistakes: "Confusing plates with continents. Plates include both oceanic crust and continental crust — the Indian plate includes both India (continent) and part of the Indian Ocean floor.",
        recap: "Plate tectonics: Earth's lithosphere in 7-8 major plates moving on asthenosphere. Pangaea broke up ~200 Ma. Three boundary types: convergent, divergent, transform."
      },
      {
        name: "Earthquakes and Volcanoes: Causes and Effects",
        definition: "Earthquakes are sudden releases of energy in Earth's crust, caused by the movement of tectonic plates along fault lines. The point underground where an earthquake originates is the focus (hypocentre); the point directly above it on the surface is the epicentre. Seismic waves spread out from the focus. Volcanoes are openings in Earth's crust through which magma, gases, and ash erupt, typically occurring at convergent and divergent plate boundaries.",
        ncertDefinition: "Earthquakes occur when tectonic plates move suddenly along faults, releasing energy as seismic waves. Volcanoes form where magma reaches the surface, typically at plate boundaries.",
        examText: "Richter Scale: measures earthquake magnitude logarithmically (each 1-unit increase = 10× more energy). Mercalli Scale: measures earthquake intensity based on observed effects. Volcanoes: Active (recently erupted), Dormant (not recently but could), Extinct (no longer active). 'Ring of Fire' = Pacific Ocean boundary — most earthquakes and volcanoes occur here. India's seismic zones: I (low risk) to V (high risk). Zone V: Himalayan belt, Northeast India.",
        keywords: ["earthquake", "focus", "epicentre", "seismic waves", "Richter scale", "volcano", "Ring of Fire", "fault"],
        highlights: [
          "Richter scale is logarithmic: Magnitude 7 = 10× more energy than Magnitude 6.",
          "Ring of Fire encircles the Pacific Ocean — 90% of world's earthquakes occur here.",
          "Tsunami = seismic sea wave caused by underwater earthquake or volcanic eruption."
        ],
        example: "The 2004 Indian Ocean Tsunami: An undersea earthquake (magnitude 9.1) off the coast of Sumatra displaced the seafloor, generating a massive tsunami that killed over 230,000 people across 14 countries — including India's Tamil Nadu coast.",
        analogy: "An earthquake is like suddenly snapping a bent twig: as tectonic plates stress and strain for centuries, they suddenly 'snap' (slip along a fault) and release stored energy as seismic waves that radiate outward.",
        visual: "Cross-section of Earth showing: focus underground, epicentre on surface, seismic waves spreading out in concentric circles. Separate diagram showing Ring of Fire on world map.",
        fact: "Japan experiences about 1,500 earthquakes per year — more than any other country — because it sits at the junction of four tectonic plates.",
        trick: "Focus = underground (F for Focal, deep underground). Epicentre = surface directly above focus (E for External, on Earth's surface).",
        mistakes: "Confusing focus and epicentre. The focus is WHERE the earthquake starts (underground). The epicentre is the surface point closest to it — where damage is often greatest.",
        recap: "Earthquake: sudden energy release along fault. Focus = underground origin. Epicentre = surface above focus. Measured on Richter scale. Volcano: magma reaches surface. Ring of Fire = Pacific boundary."
      },
      {
        name: "Landforms: Mountains, Plateaus, Plains, and Rivers",
        definition: "Landforms are the physical features of Earth's surface. Major landforms: Mountains (high elevation, steep slopes — fold mountains formed by plate collision, block mountains by faulting, volcanic mountains). Plateaus (flat-topped elevated surfaces — e.g. Deccan Plateau, Tibetan Plateau). Plains (flat, low-lying areas — formed by river deposition, erosion). Rivers create landforms through erosion (canyons, valleys) and deposition (deltas, flood plains).",
        ncertDefinition: "Landforms are created by internal forces (plate tectonics, volcanic activity) and external forces (erosion by water, wind, ice). Mountains, plateaus, and plains are the three major categories of landforms.",
        examText: "Types of mountains: (1) Fold mountains: plates collide, rocks fold upward (Himalayas, Alps, Rockies). (2) Block mountains: landmass raised by faulting (Vindhya range). (3) Volcanic mountains: lava builds up (Kilimanjaro, Mt. Fuji). India's physiography: Himalayan mountains (north), Great Northern Plains (Ganges-Brahmaputra), Deccan Plateau (peninsular), Coastal Plains (east and west), Thar Desert (northwest), Islands.",
        keywords: ["fold mountains", "plateau", "plains", "erosion", "deposition", "Himalayas", "Deccan Plateau"],
        highlights: [
          "Fold mountains are the most extensive and highest mountains — formed by plate convergence.",
          "Plateaus are called 'tablelands' — high elevation but flat surface.",
          "Plains are most suitable for agriculture and dense human settlement."
        ],
        example: "The Great Northern Plains of India: formed by sediment deposited by Himalayan rivers (Ganga, Yamuna, Brahmaputra) over millions of years. This alluvial soil makes it one of the most fertile agricultural regions in the world.",
        analogy: "Landforms are like the crumple zones of Earth: where plates push together (convergent), the land crumples upward into mountains. Where rivers run, they carve valleys below and build deltas at the sea.",
        visual: "Cross-sectional diagram of India from north to south: Himalayas (fold mountains) → Northern Plains → Deccan Plateau → Coastal Plains. Label each landform type.",
        fact: "Mount Everest (8,849 m) is the world's highest peak above sea level, but Mauna Kea in Hawaii is the world's tallest mountain measured from its base on the ocean floor (10,210 m).",
        trick: "Fold = Plate collision (F and C both have round shapes — Folding from Collision). Block = Fault movement (B and F — Block Faulting).",
        mistakes: "Confusing altitude (height above sea level) with the formation process. All high mountains are not fold mountains — block and volcanic mountains can also be very high.",
        recap: "Fold mountains (plate collision): Himalayas. Block mountains (faulting): Vindhya. Volcanic: Kilimanjaro. Plateaus: elevated flat. Plains: low, flat, alluvial. Rivers erode + deposit → valleys, deltas."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Explain the formation of the Himalayan mountains using the theory of plate tectonics.",
        thinking: "Identify the plates involved, the type of plate boundary, and the process that creates fold mountains.",
        steps: [
          "The Indian plate (including the Indian subcontinent and part of the Indian Ocean) is moving northward at ~5 cm/year.",
          "The Indian plate is converging with the Eurasian plate — this is a convergent plate boundary (continent-continent collision).",
          "When two continental plates of similar density collide, neither subducts (sinks). Instead, the rocks at the boundary are compressed and folded upward.",
          "This folding created the Himalayan mountain chain, which began forming about 50 million years ago.",
          "The collision is still ongoing — the Himalayas continue to grow by a few mm per year."
        ],
        answer: "The Himalayas are fold mountains formed by the convergent collision of the Indian and Eurasian plates. They continue to grow due to ongoing plate movement.",
        tips: "For geography answers: always mention the specific plates, type of boundary, and the resulting landform. This earns full marks."
      }
    ],
    mcqs: [
      { question: "The theory of continental drift was proposed by:", options: ["Charles Darwin", "Alfred Wegener", "Isaac Newton", "Aristotle"], correctIndex: 1, explanation: "Alfred Wegener (1912) proposed the theory of continental drift based on the fit of continents and fossil evidence." },
      { question: "The epicentre of an earthquake is:", options: ["The underground point where earthquake originates", "The surface point directly above the focus", "The point farthest from the earthquake", "The oceanic plate boundary"], correctIndex: 1, explanation: "Epicentre = surface point directly above the focus (underground origin of earthquake)." },
      { question: "The Deccan Plateau is an example of:", options: ["Fold mountain", "Block mountain", "Volcanic mountain", "Plateau"], correctIndex: 3, explanation: "The Deccan Plateau is a vast elevated flat surface (plateau) covering peninsular India, formed from ancient volcanic lava flows." },
      { question: "Where do most of the world's earthquakes and volcanoes occur?", options: ["Mid-Atlantic Ridge only", "Ring of Fire (Pacific boundary)", "Indian Ocean", "Arctic Circle"], correctIndex: 1, explanation: "The Ring of Fire around the Pacific Ocean accounts for 90% of world's earthquakes and most volcanic activity." },
      { question: "Himalayas are an example of:", options: ["Volcanic mountains", "Block mountains", "Fold mountains", "Residual mountains"], correctIndex: 2, explanation: "Himalayas formed by folding when the Indian plate collided with the Eurasian plate — classic fold mountains." }
    ],
    flashcards: [
      { question: "What is the Pangaea?", answer: "The ancient supercontinent that contained all current continents. It began breaking apart ~200 million years ago." },
      { question: "What causes earthquakes?", answer: "Sudden movement of tectonic plates along fault lines, releasing stored energy as seismic waves." },
      { question: "What is the focus of an earthquake?", answer: "The underground point where the earthquake originates (also called hypocentre)." },
      { question: "Name the three types of plate boundaries.", answer: "Convergent (collision), Divergent (separation), Transform (sliding). Mountains, rifts/ridges, and earthquakes respectively." },
      { question: "What is the Ring of Fire?", answer: "A zone around the Pacific Ocean where 90% of world earthquakes and most volcanoes occur, due to plate tectonics." }
    ],
    revisionPoints: [
      "Plate tectonics: lithosphere divided into plates moving on asthenosphere via convection.",
      "Pangaea broke up 200 million years ago. Evidence: coastline fit, fossils, rock formations.",
      "Convergent → mountains/trenches. Divergent → ocean ridges. Transform → earthquakes.",
      "Earthquake: focus (underground) → epicentre (surface above) → seismic waves. Richter scale.",
      "Himalayas = fold mountains (Indian plate + Eurasian plate collision).",
      "Ring of Fire: 90% earthquakes, most volcanoes. Pacific boundary.",
      "Plains = alluvial (river deposited). Plateaus = elevated flat surfaces."
    ],
    summaryPoints: [
      "Plate tectonics is the unifying theory of Earth science: the movement of large lithospheric plates explains the formation of mountains, oceans, earthquakes, and volcanoes.",
      "Continental drift evidence — matching coastlines, identical fossils on separated continents, and rock correlation — confirmed that today's continents were once joined as Pangaea.",
      "Plate boundaries determine where geological activity occurs: mountains form at convergent boundaries, new ocean floor at divergent, and earthquakes at transform boundaries.",
      "Earthquakes are measured on the logarithmic Richter scale; their impact is felt most severely near the epicentre.",
      "India's diverse landforms — Himalayas, Great Plains, Deccan Plateau, coastal plains — reflect billions of years of tectonic activity and erosion.",
      "Understanding Earth's dynamic surface is essential for disaster preparedness, urban planning, and environmental management."
    ]
  },

  "atmosphere-climate": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "Describe the structure of the atmosphere and the composition of air.",
      "Distinguish between weather and climate, and explain factors that affect climate.",
      "Explain the Indian monsoon — its causes, seasonal pattern, and significance.",
      "Understand climate change, its causes, effects, and the role of greenhouse gases.",
      "Interpret climatic data through temperature and rainfall graphs."
    ],
    warmupQ: "Why does it rain more on the western slope of the Western Ghats (over 3,000 mm annually) but much less on the eastern side (600–700 mm)? This is the same rain-bearing wind — what changes?",
    warmupFact: "The Indian monsoon is the world's largest weather system, delivering about 75–80% of India's annual rainfall in just 4 months (June to September). Approximately 600 million Indian farmers depend on its arrival for their crops!",
    warmupHint: "As clouds cross a mountain range (like the Western Ghats), they drop rain on the windward (west-facing) slope. By the time they cross the peak, they have lost most moisture — leaving the leeward (east-facing) slope dry. This is the rain shadow effect.",
    concepts: [
      {
        name: "Structure of the Atmosphere and Composition of Air",
        definition: "The atmosphere is the layer of gases surrounding Earth held by gravity. It has five main layers (from lowest to highest): Troposphere (weather occurs here, 0–12 km), Stratosphere (ozone layer, 12–50 km), Mesosphere (meteors burn up, 50–80 km), Thermosphere (aurora, 80–700 km), Exosphere (merges into space, above 700 km). Composition of dry air: Nitrogen 78%, Oxygen 21%, Argon 0.93%, Carbon dioxide 0.04%, other trace gases.",
        ncertDefinition: "The atmosphere is composed mainly of nitrogen (78%) and oxygen (21%). It has five layers with distinct characteristics. The troposphere is the layer where all weather phenomena occur.",
        examText: "Key facts: Troposphere = densest, warmest at bottom, weather happens here. Temperature decreases with altitude in troposphere (lapse rate: ~6.5°C per km). Stratosphere: ozone layer absorbs UV radiation — essential for life. Ozone depletion due to CFCs (chlorofluorocarbons) — creates the 'ozone hole' over Antarctica. Atmospheric pressure: decreases with altitude. Sea level = 1013 mb (millibars).",
        keywords: ["atmosphere", "troposphere", "stratosphere", "ozone layer", "composition", "nitrogen", "oxygen"],
        highlights: [
          "Troposphere: all weather occurs here. Temperature decreases with altitude.",
          "Ozone layer in stratosphere: blocks harmful UV-B and UV-C radiation.",
          "CFCs (used in old refrigerators, spray cans) destroy ozone — banned by the Montreal Protocol (1989)."
        ],
        example: "At 8,000 m altitude (near Mt. Everest), atmospheric pressure is about 380 mb — only 37% of sea level pressure. Climbers need oxygen tanks because the air is too thin to sustain normal respiration.",
        analogy: "The atmosphere is like a multi-layered blanket around the Earth: the innermost layer (troposphere) is the busiest and warmest; outer layers protect against space radiation and meteorites.",
        visual: "Vertical bar diagram showing the 5 atmosphere layers with altitude, temperature trend, and key features labelled for each.",
        fact: "If you compressed all the atmosphere to the same density as water, it would cover Earth to a depth of only about 10 metres — showing how thin and precious our atmospheric layer really is.",
        trick: "Layer order from surface: 'The Stratosphere Makes The Exosphere' = Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere.",
        mistakes: "Saying weather occurs in the stratosphere. ALL weather (rain, clouds, storms, wind) occurs exclusively in the TROPOSPHERE, the lowest layer.",
        recap: "5 layers from surface: Troposphere (weather), Stratosphere (ozone), Mesosphere, Thermosphere, Exosphere. Air: 78% N₂, 21% O₂."
      },
      {
        name: "Indian Monsoon: Causes and Pattern",
        definition: "The monsoon is a seasonal reversal of wind direction that brings heavy rainfall. The Indian Southwest Monsoon (June–September) is caused by: (1) Differential heating — the land heats up faster than the ocean in summer, creating a low pressure zone over the Indian subcontinent. (2) The high pressure zone over the Indian Ocean pushes moisture-laden winds toward the low pressure on land. (3) The Coriolis effect deflects these winds. India receives the monsoon in two branches: Arabian Sea branch (hits Kerala in June, heavy rains on Western Ghats) and Bay of Bengal branch (moves northeast).",
        ncertDefinition: "The Indian monsoon results from the differential heating of land and sea, creating a pressure gradient that drives moisture-laden winds from the ocean inland. The monsoon lasts from June to September (SW Monsoon) and returns October-December (NE Monsoon).",
        examText: "Monsoon pattern: Southwest Monsoon (Kharif season, June–Sept): most of India's rainfall. Northeast Monsoon (Rabi season, Oct–Dec): affects Tamil Nadu coast mainly. Breaks in monsoon: wet spells and dry spells alternate. El Niño effect: warming of central Pacific Ocean weakens Indian monsoon. La Niña: cools Pacific, strengthens Indian monsoon. Rain shadow area: lee side of Western Ghats (Deccan Plateau) gets < 600 mm rain.",
        keywords: ["monsoon", "differential heating", "pressure", "Arabian Sea branch", "Bay of Bengal branch", "rain shadow", "El Niño"],
        highlights: [
          "SW Monsoon (June–Sept): 75–80% of India's annual rainfall. Critical for agriculture.",
          "Rain shadow effect: windward side of mountains gets heavy rain; leeward side stays dry.",
          "El Niño (warm Pacific) = weaker Indian monsoon → drought risk. La Niña = stronger monsoon."
        ],
        example: "Western Ghats: Mahabaleshwar on windward (western) side receives ~6,000 mm rainfall. Pune on the leeward (eastern) side receives only ~700 mm — the same monsoon winds, but the mountains intercept the moisture.",
        analogy: "The monsoon is like a massive sea breeze on a continental scale: land heats up faster than ocean in summer → land = low pressure → ocean air rushes in toward land, bringing moisture → monsoon rains.",
        visual: "Map of India showing monsoon wind arrows (SW and NE), Western Ghats rain shadow, and isohyets (rainfall contours). Separate diagram of land-sea differential heating.",
        fact: "Cherrapunji (Mawsynram), Meghalaya — on the windward slope of the Khasi Hills — receives up to 11,873 mm of rain annually, making it one of the wettest places on Earth.",
        trick: "SW Monsoon = June to September (J-J-A-S months). NE Monsoon = October to December. 'June brings the JJAS monsoon, October brings the NE monsoon to Tamil Nadu.'",
        mistakes: "Saying the monsoon is caused by cloud formation. The monsoon is primarily driven by pressure gradients (differential heating of land and sea) and the Coriolis effect, not by clouds.",
        recap: "Monsoon = seasonal wind reversal. SW Monsoon: June–Sept, low pressure over land. Two branches: Arabian Sea + Bay of Bengal. Rain shadow on leeward side of mountains."
      },
      {
        name: "Climate Change: Causes, Effects, and Responses",
        definition: "Climate is the long-term average pattern of weather in a region (measured over 30+ years). Climate change refers to long-term shifts in global temperatures and weather patterns. While some climate change is natural, human activities — primarily burning fossil fuels releasing CO₂, deforestation, and industrial emissions — have significantly accelerated global warming since the Industrial Revolution (1850). The greenhouse effect is the warming of Earth's surface by atmospheric gases that trap infrared radiation from the surface.",
        ncertDefinition: "Climate change is the long-term alteration of global temperature and weather patterns. The enhanced greenhouse effect, caused by increased CO₂, methane, and other greenhouse gases from human activities, is the primary driver of current climate change.",
        examText: "Greenhouse gases: CO₂ (fossil fuels), Methane (CH₄, livestock, rice paddies, landfills), Nitrous oxide (N₂O, fertilisers), Water vapor. Effects of climate change: rising sea levels (melting glaciers, thermal expansion), more frequent extreme weather events, changes in monsoon patterns, loss of biodiversity, food security threats. India's vulnerability: coastal flooding (Mumbai, Kolkata), Himalayan glacier retreat, changing monsoon patterns, heat waves.",
        keywords: ["climate change", "greenhouse effect", "CO₂", "global warming", "greenhouse gases", "sea level rise", "Paris Agreement"],
        highlights: [
          "Greenhouse gases trap outgoing infrared radiation → warming of Earth's surface.",
          "CO₂ concentrations: pre-industrial ~280 ppm; today ~420 ppm (50% increase).",
          "Paris Agreement (2015): countries agreed to limit warming to 1.5–2°C above pre-industrial levels."
        ],
        example: "India's Himalayan glaciers are retreating due to global warming. Gangotri glacier (source of Ganga) has retreated by over 22 km in 200 years. This threatens water supply for hundreds of millions who depend on the river.",
        analogy: "The greenhouse effect is like a car parked in the sun with windows closed: sunlight enters, warms the interior, but the heat cannot escape easily — the car gets hotter. Greenhouse gases do the same for Earth.",
        visual: "Diagram of greenhouse effect: sunlight arrows entering atmosphere → heating surface → infrared arrows going up → some trapped by GHG layer → some escaping to space. Clearly labelled greenhouse gas layer.",
        fact: "If all ice on Earth melted, sea levels would rise by about 65–70 metres — enough to submerge entire coastlines including Mumbai, Kolkata, New York, London, and most of Bangladesh.",
        trick: "Greenhouse gases: CO-COWS-MIND → CO₂, Carbon monoxide, CH₄ (methane from cows), Water vapor, Nitrous oxide (N₂O), Methane, Industrial CFCs, and other gases.",
        mistakes: "Confusing the greenhouse effect (natural and essential for life) with enhanced greenhouse effect (caused by humans, causing excessive warming). The natural greenhouse effect is necessary — without it, Earth would be -18°C.",
        recap: "Climate change = long-term warming due to enhanced greenhouse effect from human CO₂ emissions. Effects: sea level rise, extreme weather, glacier retreat. Paris Agreement = international response."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Explain the mechanism of the Indian Southwest Monsoon using the concept of differential heating.",
        thinking: "Step through the cause-effect chain: differential heating → pressure difference → wind movement → rainfall.",
        steps: [
          "In summer (May–June), the landmass of the Indian subcontinent heats up rapidly under intense solar radiation.",
          "Land heats faster than the Indian Ocean — the land develops a region of low air pressure (hot air rises).",
          "The Indian Ocean, which heats more slowly, has relatively higher air pressure.",
          "Wind always flows from high pressure to low pressure — so moisture-laden ocean winds blow toward land.",
          "The Coriolis effect (due to Earth's rotation) deflects these winds, giving them a southwesterly direction.",
          "When these moisture-laden SW winds hit the land and are forced to rise over hills and mountains, they cool, condense, and produce heavy rainfall."
        ],
        answer: "The SW Monsoon is driven by differential heating: land heats faster → low pressure → ocean winds blow inland → forced to rise → cool → rainfall.",
        tips: "Draw a simple diagram showing high pressure over ocean and low pressure over land with arrows showing wind flow. Diagrams earn extra marks."
      }
    ],
    mcqs: [
      { question: "Which layer of the atmosphere contains the ozone layer?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctIndex: 1, explanation: "The ozone layer is located in the stratosphere (15–35 km altitude), where it absorbs harmful UV radiation from the sun." },
      { question: "The Indian Southwest Monsoon arrives in Kerala approximately in:", options: ["March", "June", "September", "December"], correctIndex: 1, explanation: "The SW Monsoon arrives at the Kerala coast around June 1 each year, marking the onset of the monsoon season." },
      { question: "The rain shadow area in India is formed on the:", options: ["Western slopes of Western Ghats", "Eastern slopes of Western Ghats", "Northern slopes of Himalayas", "Coastal plains of Tamil Nadu"], correctIndex: 1, explanation: "The western slopes of the Western Ghats face the monsoon (windward) and receive heavy rain. The eastern slopes (leeward/rain shadow) receive far less rain." },
      { question: "Which gas is the primary cause of the enhanced greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], correctIndex: 2, explanation: "CO₂ released from burning fossil fuels is the primary greenhouse gas responsible for enhanced warming." },
      { question: "Weather refers to:", options: ["30-year average atmospheric conditions", "Day-to-day changes in atmospheric conditions", "Long-term climate patterns", "Seasonal monsoon patterns"], correctIndex: 1, explanation: "Weather is the short-term, day-to-day state of the atmosphere. Climate is the long-term (30+ year) average pattern." }
    ],
    flashcards: [
      { question: "What is the composition of dry air?", answer: "Nitrogen 78%, Oxygen 21%, Argon 0.93%, CO₂ 0.04%, trace gases." },
      { question: "What causes the Indian monsoon?", answer: "Differential heating of land (heats faster → low pressure) and ocean (stays cooler → high pressure) causes wind to blow from ocean to land." },
      { question: "What is the rain shadow effect?", answer: "The dry area on the leeward (downwind) side of a mountain range, where air descends and warms after dropping rain on the windward side." },
      { question: "State the five atmospheric layers from Earth's surface upward.", answer: "Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere." },
      { question: "What is the Paris Agreement?", answer: "A 2015 international climate agreement to limit global warming to 1.5–2°C above pre-industrial levels by reducing greenhouse gas emissions." }
    ],
    revisionPoints: [
      "5 atmosphere layers: Troposphere (weather, 0–12 km), Stratosphere (ozone, 12–50 km), Mesosphere, Thermosphere, Exosphere.",
      "Air: 78% N₂, 21% O₂, 0.93% Ar, 0.04% CO₂.",
      "Ozone layer absorbs UV. CFCs deplete ozone. Montreal Protocol (1989) banned CFCs.",
      "Monsoon: differential heating → pressure gradient → wind reversal → rainfall.",
      "SW Monsoon: June–Sept (75–80% of India's rainfall). NE Monsoon: Oct–Dec (Tamil Nadu).",
      "Rain shadow: leeward side of mountains is dry.",
      "Climate change: enhanced greenhouse effect from fossil fuels. CO₂ = main GHG.",
      "Effects: sea level rise, extreme weather, glacier retreat. Paris Agreement: 1.5°C target."
    ],
    summaryPoints: [
      "The atmosphere is a layered envelope of gases essential for life: the troposphere hosts all weather; the stratosphere's ozone layer shields from UV radiation.",
      "Weather is day-to-day atmospheric conditions; climate is the 30+ year average pattern — they are related but distinct concepts.",
      "The Indian monsoon is driven by seasonal differential heating that creates pressure gradients, drawing moist ocean air inland — delivering 75–80% of India's annual rainfall in just 4 months.",
      "The rain shadow effect explains dramatic rainfall contrasts across mountain ranges like the Western Ghats.",
      "Climate change is the consequence of the enhanced greenhouse effect — excess CO₂ from fossil fuels trapping more heat than natural levels.",
      "Effects are already visible: rising temperatures, retreating glaciers, changing monsoon patterns, and rising sea levels threatening coastal populations."
    ]
  },

  "early-humans": {
    difficulty: "Easy",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Trace the evolution of early humans from Homo habilis to Homo sapiens.",
      "Describe the lifestyle of early hunter-gatherer communities.",
      "Explain the Neolithic Revolution: the transition from hunting to agriculture and settled life.",
      "Describe the rise of early river valley civilizations and their key features.",
      "Understand the tools, art, and technology of prehistoric humans."
    ],
    warmupQ: "Imagine waking up without agriculture, shops, cities, or fire. How would you get food? Where would you sleep? What challenges would you face? This was the daily reality for early humans for hundreds of thousands of years.",
    warmupFact: "The oldest known tools were made by Homo habilis in Africa over 2.6 million years ago — long before Homo sapiens evolved. These stone tools were so important that this species was named 'Homo habilis' meaning 'handy man'!",
    warmupHint: "Early humans survived by hunting animals and gathering plant foods. They were nomadic — constantly moving to follow food sources. They lived in small groups and used stone tools.",
    concepts: [
      {
        name: "Human Evolution: From Early Hominins to Homo Sapiens",
        definition: "Human evolution traces the gradual development of the human species from earlier primate ancestors over millions of years. Key stages: Australopithecus (4–2 million years ago, walked upright, Africa). Homo habilis (2.6 million years ago, first stone tools). Homo erectus (1.8 million years ago, fire, left Africa). Homo sapiens (300,000 years ago to present, complex language, art, culture). 'Out of Africa' theory: modern humans evolved in Africa and migrated globally.",
        ncertDefinition: "Human evolution occurred over millions of years. Modern humans (Homo sapiens) evolved in Africa and gradually spread across the world, developing language, tools, and culture.",
        examText: "Key features of Homo sapiens: (1) Fully upright posture. (2) Large brain (1400 cm³). (3) Articulate language. (4) Creation of art and symbols. (5) Complex social structures. Palaeolithic age = Old Stone Age (2.6 Ma – 10,000 BCE): stone tools, hunting, gathering. Mesolithic (10,000–7,000 BCE): smaller tools (microliths). Neolithic (7,000–4,000 BCE): polished tools, agriculture. Chalcolithic (4,000–3,000 BCE): copper tools.",
        keywords: ["Homo sapiens", "evolution", "Palaeolithic", "Neolithic", "stone tools", "hunter-gatherer", "Out of Africa"],
        highlights: [
          "Palaeolithic (Old Stone Age): rough tools, hunting-gathering, nomadic.",
          "Neolithic (New Stone Age): agriculture, settled life, pottery, polished tools.",
          "Homo sapiens evolved ~300,000 years ago in Africa."
        ],
        example: "Evidence of early Indian stone tools has been found at Bhimbetka (Madhya Pradesh, 100,000+ years old), and cave paintings there are over 30,000 years old — some of the oldest in the world.",
        analogy: "Human evolution is like software updates: each new version (species) retained the useful features of the previous but added new capabilities (bigger brain, language, agriculture) that dramatically improved survival and efficiency.",
        visual: "Timeline from 4 million years ago to present, showing key species with their defining features, tools, and geographic distribution.",
        fact: "All living humans share a common female ancestor called 'Mitochondrial Eve' who lived in Africa approximately 150,000 years ago — proven by DNA analysis of mitochondria passed through the female line.",
        trick: "Remember the stone ages in order: PALEolithic = PALEontology (very old, rough tools). NEOlithic = NEw (newer, polished tools, agriculture).",
        mistakes: "Thinking humans evolved FROM chimpanzees. Humans and chimps share a common ancestor but evolved separately — chimps did not become humans.",
        recap: "Homo sapiens: 300,000 years ago, Africa. Palaeolithic: hunting, rough tools. Neolithic: farming, polished tools, settled life. Out of Africa theory: humans migrated from Africa globally."
      },
      {
        name: "The Neolithic Revolution: Agriculture and Settled Life",
        definition: "The Neolithic Revolution (c. 10,000–5,000 BCE) was the gradual transition from nomadic hunting-gathering to sedentary farming communities. Early humans began deliberately cultivating plants (wheat, barley, rice, millet) and domesticating animals (goats, sheep, cattle). This enabled food surpluses, permanent settlements, population growth, social specialisation, and eventually cities and civilizations.",
        ncertDefinition: "The Neolithic Revolution was the transition from food gathering to food production through agriculture. It enabled permanent settlements, food surpluses, and the development of complex societies.",
        examText: "India's early agricultural sites: Mehrgarh (Balochistan, 7000 BCE — one of world's oldest farming communities). Harappan civilization grew from these early farming roots. Crops domesticated in India: rice (Ganges plains), cotton (Indus valley), sesame. Animals domesticated in India: cattle, sheep, goats. Consequences of agriculture: (1) Permanent villages. (2) Population growth. (3) Social classes. (4) Division of labour. (5) Trade and exchange.",
        keywords: ["Neolithic Revolution", "agriculture", "domestication", "Mehrgarh", "food surplus", "settlement", "pottery"],
        highlights: [
          "Agriculture began independently in multiple regions: Middle East, China, India, Americas, Africa.",
          "In India, Mehrgarh (7000 BCE) is one of the oldest known agricultural settlements.",
          "Food surpluses allowed some people to be non-farmers: traders, priests, potters, warriors — birth of social specialisation."
        ],
        example: "Before agriculture: a group of 25 hunter-gatherers needed to travel 100 km² of territory to find enough food. After agriculture: the same group could produce food on 5 km², stay in one place, and support twice the population.",
        analogy: "The Neolithic Revolution was the most important 'upgrade' in human history: from being passive 'consumers' of nature (gathering what grew naturally), humans became active 'producers' who controlled their food supply.",
        visual: "Two-panel comparison: Left = Palaeolithic nomads following animal herds. Right = Neolithic farmers with fields, granaries, and permanent mud-brick houses.",
        fact: "The domestication of cattle in India is believed to have occurred by 8,000 BCE — the cow's central place in Indian culture has roots going back over 10,000 years.",
        trick: "Neolithic = agriculture = SNAP: Settled life, No more nomadism, Agriculture began, Pottery invented.",
        mistakes: "Saying the Neolithic Revolution happened suddenly. It was a gradual process over thousands of years — different regions adopted agriculture at different times and rates.",
        recap: "Neolithic Revolution: ~10,000 BCE. Farming → settlement → food surplus → population growth → social specialisation → civilizations. Mehrgarh = India's early farming site."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Describe the major changes in human life brought about by the Neolithic Revolution.",
        thinking: "Compare life BEFORE (Palaeolithic) and AFTER (Neolithic) the agricultural revolution systematically.",
        steps: [
          "1. Food: Before = hunted/gathered unpredictably. After = farming produced reliable, storable food surpluses.",
          "2. Lifestyle: Before = nomadic (constantly moving). After = settled villages and towns.",
          "3. Population: Settled farming and food surpluses allowed larger family sizes and population growth.",
          "4. Technology: New tools (polished stone, ploughs, sickles), pottery for storage.",
          "5. Society: Division of labour — farmers, potters, traders, rulers emerged. Social hierarchy developed.",
          "6. Culture: Writing systems eventually emerged to keep records of agricultural produce and trade."
        ],
        answer: "The Neolithic Revolution transformed humanity from nomadic hunter-gatherers to settled farmers, enabling population growth, social specialisation, trade, and ultimately the rise of cities and civilizations.",
        tips: "Structure answers under clear headings: Food, Lifestyle, Population, Technology, Society. This shows organised thinking and earns full marks."
      }
    ],
    mcqs: [
      { question: "The Palaeolithic age is also known as:", options: ["New Stone Age", "Bronze Age", "Old Stone Age", "Iron Age"], correctIndex: 2, explanation: "Palaeolithic = Old Stone Age (from Greek palaios = old, lithos = stone)." },
      { question: "One of the world's earliest agricultural settlements in India was:", options: ["Harappa", "Mehrgarh", "Mohenjodaro", "Lothal"], correctIndex: 1, explanation: "Mehrgarh in present-day Balochistan (Pakistan) dates to ~7000 BCE and is one of the world's earliest known farming settlements." },
      { question: "The Neolithic Revolution primarily refers to:", options: ["Discovery of fire", "Transition from hunting-gathering to farming", "Making of the first stone tools", "Development of writing"], correctIndex: 1, explanation: "Neolithic Revolution = gradual shift from nomadic food gathering to settled food production through agriculture." },
      { question: "Homo sapiens first evolved in:", options: ["Asia", "Europe", "Africa", "India"], correctIndex: 2, explanation: "According to the 'Out of Africa' theory, Homo sapiens evolved in Africa ~300,000 years ago and then migrated to other continents." },
      { question: "Which species made the first stone tools?", options: ["Homo sapiens", "Homo erectus", "Homo habilis", "Australopithecus"], correctIndex: 2, explanation: "Homo habilis ('handy man') created the first known stone tools ~2.6 million years ago." }
    ],
    flashcards: [
      { question: "What is the Neolithic Revolution?", answer: "The gradual transition (~10,000 BCE) from nomadic hunting-gathering to settled farming communities." },
      { question: "When did Homo sapiens evolve?", answer: "About 300,000 years ago in Africa." },
      { question: "What is the Palaeolithic age?", answer: "The Old Stone Age (2.6 Ma – 10,000 BCE): nomadic hunter-gatherers using rough stone tools." },
      { question: "Name an early agricultural site in the Indian subcontinent.", answer: "Mehrgarh (~7000 BCE) in Balochistan — one of the world's oldest farming communities." },
      { question: "What enabled the growth of cities from farming villages?", answer: "Food surpluses (from agriculture) allowed specialisation of labour — not everyone needed to farm, freeing people to trade, govern, and build." }
    ],
    revisionPoints: [
      "Evolution sequence: Australopithecus → Homo habilis (tools) → Homo erectus (fire) → Homo sapiens (language, art).",
      "Palaeolithic = hunting-gathering, nomadic, rough tools.",
      "Neolithic Revolution (~10,000 BCE): farming, domestication, settled villages.",
      "Agriculture → food surplus → specialisation → cities → civilizations.",
      "Mehrgarh (~7000 BCE): early Indian agricultural site.",
      "Out of Africa theory: Homo sapiens migrated from Africa globally."
    ],
    summaryPoints: [
      "Human evolution is a 4-million-year journey from early upright-walking hominins to modern Homo sapiens with large brains, language, and complex culture.",
      "Prehistoric humans are divided by their technology: Palaeolithic (rough stone tools, hunting-gathering), Mesolithic (microliths), Neolithic (polished tools, agriculture).",
      "The Neolithic Revolution was the most transformative event in human prehistory: agriculture enabled food surpluses, permanent settlements, population growth, and social specialisation.",
      "India's ancient agricultural heritage, evidenced at sites like Mehrgarh, is among the oldest in the world.",
      "The transition from nomadic to settled life set the stage for the development of all human civilizations, including the great Indus Valley Civilisation."
    ]
  },

  "democracy": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "Define democracy and identify its essential features.",
      "Explain the historical development of democracy from ancient Greece to modern India.",
      "Describe India's constitutional democracy and its foundational principles.",
      "Analyse challenges to democracy including authoritarianism and the 1975 Emergency.",
      "Evaluate the role of elections, rights, and civil liberties in sustaining democracy."
    ],
    warmupQ: "If you had to design a perfect government for your school, would you give one person all the power, or share it among elected representatives? What are the advantages and risks of each approach?",
    warmupFact: "India is the world's largest democracy — over 900 million eligible voters participated in the 2024 general elections, making it the biggest democratic exercise in human history!",
    warmupHint: "Democracy means 'rule by the people' (Greek: demos = people, kratos = power). In practice, this usually means people elect representatives who govern on their behalf.",
    concepts: [
      {
        name: "What is Democracy? Features and Types",
        definition: "Democracy is a system of government in which political power is held by the people, either directly (direct democracy — people vote on every decision) or indirectly through elected representatives (representative/indirect democracy — most modern nations). Key features: (1) Free and fair elections with universal adult suffrage. (2) Rule of law — law applies equally to all. (3) Protection of fundamental rights and civil liberties. (4) Separation of powers (Legislature, Executive, Judiciary). (5) Accountability and transparency of government.",
        ncertDefinition: "Democracy is a government of the people, by the people, and for the people. Its core features include free elections, rule of law, fundamental rights, and accountability of government.",
        examText: "Types of democracy: (1) Direct Democracy: citizens vote on every law/policy (practiced in ancient Athens, modern Switzerland for some decisions). (2) Representative Democracy: citizens elect representatives who make decisions (India, USA, UK). India's democracy: Constitutional (based on the Constitution), Federal (power divided between Centre and States), Republican (elected head of state, not hereditary). Abraham Lincoln's definition: 'Government of the people, by the people, for the people.'",
        keywords: ["democracy", "direct democracy", "representative democracy", "universal adult suffrage", "rule of law", "separation of powers"],
        highlights: [
          "Universal adult suffrage: every citizen ≥ 18 years has the right to vote, regardless of caste, religion, gender, or wealth.",
          "Rule of law: no one is above the law — even the President must follow it.",
          "Separation of powers prevents concentration of power: Legislature (makes laws), Executive (implements), Judiciary (interprets)."
        ],
        example: "In ancient Athens (5th century BCE), all male citizens directly voted on laws in the Assembly — true direct democracy. India uses representative democracy: 950 million voters elect 543 MPs who then make laws.",
        analogy: "Democracy is like a school Student Council election: students (citizens) vote for representatives (MPs) who represent their interests in governance. The principal (government) must follow the school rules (Constitution).",
        visual: "Comparison table: Direct Democracy vs Representative Democracy — size of polity, practicality, examples, pros and cons.",
        fact: "The first written Constitution in the modern world was the US Constitution (1787). India's Constitution (1950) is the world's longest written constitution, with 395 articles, 12 schedules, and 104 amendments.",
        trick: "Democracy features: FEAR — Free elections, Equality before law (rule of law), Accountability of government, Rights protected (fundamental rights).",
        mistakes: "Assuming majority rule means ignoring minority rights. In a true democracy, majority rules BUT minority rights are protected by the Constitution and courts.",
        recap: "Democracy = rule by people through elections. Direct (citizens vote directly) vs Representative (elect MPs). Features: universal suffrage, rule of law, rights, accountability, separation of powers."
      },
      {
        name: "India's Constitutional Democracy and the 1975 Emergency",
        definition: "India's Constitution (enacted 26 January 1950) establishes India as a Sovereign, Socialist, Secular, Democratic Republic. The Preamble sets out these ideals. Fundamental Rights (Part III) guarantee equality, freedom, freedom from exploitation, religious freedom, cultural/educational rights, and right to constitutional remedies. The 1975–77 Emergency was a dark period when Prime Minister Indira Gandhi suspended the Constitution under Article 352, curtailing civil liberties and democratic norms.",
        ncertDefinition: "India's democratic system is defined by its Constitution which guarantees fundamental rights, free elections, and separation of powers. The 1975–1977 Emergency demonstrated the fragility of democracy when concentrated power is misused.",
        examText: "Preamble keyword sequence: 'Sovereign, Socialist, Secular, Democratic Republic' — providing citizens 'Justice, Liberty, Equality' and promoting 'Fraternity'. Fundamental Rights: Art 12–35: Right to Equality (Art 14-18), Freedom (Art 19-22), Exploitation-free (Art 23-24), Religion (Art 25-28), Cultural/Educational (Art 29-30), Constitutional Remedies (Art 32). The Emergency 1975–77: causes, effects, Janata Party victory 1977, 44th Amendment restoring safeguards.",
        keywords: ["Preamble", "Fundamental Rights", "Emergency 1975", "Indira Gandhi", "Janata Party", "Article 352", "Constitution of India"],
        highlights: [
          "Preamble: Sovereign Socialist Secular Democratic Republic — these five words describe India's constitutional identity.",
          "Emergency 1975–77: fundamental rights suspended, press censored, political opponents jailed without trial.",
          "44th Amendment (1978): added safeguards to prevent future misuse of Emergency provisions."
        ],
        example: "During the 1975–77 Emergency, newspapers were censored before publication, political leaders (including Atal Bihari Vajpayee, Jayaprakash Narayan) were jailed without trial under MISA (Maintenance of Internal Security Act) — demonstrating how democracy can be undermined from within.",
        analogy: "A democracy with a strong Constitution but weak enforcement is like a speed limit law with no traffic police: the rule exists but can be broken. The Emergency showed that constitutional safeguards need strong independent institutions (courts, press, opposition) to be effective.",
        visual: "Timeline: 1950 (Constitution) → 1975 (Emergency declared) → 1977 (Emergency ends, Janata government) → 1978 (44th Amendment). Key events and their significance labelled.",
        fact: "The 1977 general elections after the Emergency ended saw the ruling Congress party lose power for the first time since Independence — demonstrating that Indian voters can and do hold governments accountable.",
        trick: "Preamble acronym: 'SS-SaDR': Sovereign, Socialist, Secular, Democratic, Republic. Follow with goals: 'JLE-F': Justice, Liberty, Equality, Fraternity.",
        mistakes: "Confusing Fundamental Rights (justiciable — can be enforced by courts) with Directive Principles (non-justiciable — guide state policy but cannot be enforced).",
        recap: "India = Sovereign Socialist Secular Democratic Republic (Preamble). 6 categories of Fundamental Rights. Emergency 1975–77: democracy suspended. 44th Amendment: added safeguards."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Analyse the impact of the 1975–77 Emergency on Indian democracy.",
        thinking: "Discuss what happened during the Emergency, its short-term impact, and its long-term lessons for democracy.",
        steps: [
          "Background: PM Indira Gandhi declared Emergency on June 25, 1975 citing internal security threat. The immediate cause was Allahabad High Court's judgment questioning her 1971 election.",
          "During Emergency: (a) Fundamental Rights suspended. (b) Press censorship imposed. (c) Political opponents jailed without trial. (d) Parliament made ineffective — all power concentrated with executive.",
          "Impact on democracy: Demonstrated that even a Constitutional democracy could be subverted through legal mechanisms if institutions are weakened.",
          "Long-term lesson: The Janata government (1977–79) passed the 44th Amendment (1978), which added safeguards making future Emergency declarations much harder.",
          "Legacy: The Emergency became a cautionary tale in Indian democracy — reinforcing the need for strong, independent institutions: an independent judiciary, free press, and active opposition."
        ],
        answer: "The Emergency was a severe setback to Indian democracy but ultimately strengthened it by revealing weaknesses and prompting constitutional reforms. The 1977 election result showed democratic accountability working — voters removed the party that suspended their rights.",
        tips: "For political science answers: always provide context (why it happened), the event itself, its impacts, and long-term lessons. This shows analytical depth."
      }
    ],
    mcqs: [
      { question: "India's Constitution was enacted on:", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"], correctIndex: 1, explanation: "India's Constitution came into force on 26 January 1950, which is why we celebrate Republic Day on this date." },
      { question: "The Emergency in India was declared in:", options: ["1971", "1975", "1977", "1979"], correctIndex: 1, explanation: "PM Indira Gandhi declared the National Emergency on 25 June 1975, which lasted until March 1977." },
      { question: "Universal Adult Suffrage means:", options: ["Only educated adults can vote", "Only men can vote", "All citizens above 18 years can vote regardless of caste/religion/gender", "Only property owners can vote"], correctIndex: 2, explanation: "Universal Adult Suffrage guarantees the right to vote to ALL citizens aged 18 and above, without discrimination." },
      { question: "Separation of powers divides government into:", options: ["Federal and unitary", "Central and state", "Legislature, Executive, and Judiciary", "Urban and rural"], correctIndex: 2, explanation: "Separation of powers distributes power among three branches: Legislature (makes laws), Executive (implements), Judiciary (interprets and adjudicates)." },
      { question: "The 44th Constitutional Amendment (1978) was significant because:", options: ["It gave women voting rights", "It added safeguards against misuse of Emergency provisions", "It created the Supreme Court", "It declared India a Republic"], correctIndex: 1, explanation: "The 44th Amendment (1978) was passed by the Janata government to prevent future misuse of Emergency powers as happened in 1975–77." }
    ],
    flashcards: [
      { question: "What does the Preamble describe India as?", answer: "Sovereign, Socialist, Secular, Democratic Republic providing Justice, Liberty, Equality, and Fraternity." },
      { question: "What are Fundamental Rights?", answer: "Constitutionally guaranteed rights of every Indian citizen (Part III, Articles 12–35) — enforceable by courts." },
      { question: "When was the Emergency declared and by whom?", answer: "25 June 1975, by Prime Minister Indira Gandhi under Article 352 of the Constitution." },
      { question: "What is the minimum voting age in India?", answer: "18 years (lowered from 21 by the 61st Amendment in 1988)." },
      { question: "What is the rule of law?", answer: "The principle that all persons and institutions, including the government, are accountable to law that is applied equally to all." }
    ],
    revisionPoints: [
      "Democracy = rule by people through elections, rule of law, rights, and accountability.",
      "Direct democracy: citizens vote directly. Representative: elect MPs/MLAs who make laws.",
      "India: Sovereign Socialist Secular Democratic Republic (Preamble).",
      "6 categories of Fundamental Rights: Equality, Freedom, Exploitation-free, Religion, Cultural, Constitutional Remedies.",
      "Emergency 1975–77: Fundamental Rights suspended, press censored, opposition jailed.",
      "44th Amendment 1978: added safeguards against future Emergency misuse.",
      "Universal Adult Suffrage: every citizen ≥ 18 has the right to vote."
    ],
    summaryPoints: [
      "Democracy is a system of government where political power originates from and is accountable to the people, exercised through free and fair elections.",
      "India's democracy is defined by the Constitution as a Representative Federal Republic with Fundamental Rights, separation of powers, and universal adult suffrage.",
      "The Preamble encapsulates India's democratic aspirations: Sovereign, Socialist, Secular, Democratic, Republic — delivering Justice, Liberty, Equality, and Fraternity.",
      "The 1975–77 Emergency demonstrated that democracy requires more than a constitution — it needs strong, independent institutions and an engaged citizenry to thrive.",
      "The 1977 election and the 44th Amendment (1978) restored and strengthened democratic norms, showing that India's democratic resilience can recover from threats.",
      "Active, informed citizenship — understanding rights, participating in elections, engaging with governance — is the strongest safeguard for democracy."
    ]
  },

  "economic-building-blocks": {
    difficulty: "Medium",
    estimatedTime: "3.5 hours",
    learningObjectives: [
      "Define economics and explain the problem of scarcity and choice.",
      "Understand the concepts of opportunity cost and trade-offs.",
      "Explain how markets work: demand, supply, and price determination.",
      "Distinguish between different types of economies: market, command, mixed.",
      "Analyse India's economic system and key sectors."
    ],
    warmupQ: "You have ₹500 saved up. You can use it to buy a cricket bat OR 5 movie tickets. If you choose the bat, what did you 'give up'? This choice is the essence of economics!",
    warmupFact: "India is the world's 5th largest economy by GDP (2024) and is on track to become the 3rd largest by 2030. India's economy grows at about 6–8% annually — one of the fastest rates among major economies!",
    warmupHint: "Economics is the study of how individuals, households, and societies allocate scarce resources to meet unlimited wants. The thing you give up when you make a choice is the 'opportunity cost'.",
    concepts: [
      {
        name: "Scarcity, Choice, and Opportunity Cost",
        definition: "The fundamental economic problem is scarcity: resources (land, labour, capital, entrepreneurship) are limited, but human wants are unlimited. This forces choices. Opportunity cost is the value of the next best alternative foregone when a choice is made. Every economic decision involves a trade-off — gaining something necessarily means giving up something else. This is expressed as the Production Possibility Frontier (PPF) — showing the maximum combinations of two goods an economy can produce with given resources.",
        ncertDefinition: "Scarcity is the central economic problem: limited resources cannot satisfy unlimited wants. Choices must be made, and every choice has an opportunity cost — the value of the best alternative not chosen.",
        examText: "Key economic questions every society must answer: WHAT to produce? HOW to produce it? FOR WHOM to produce? Opportunity cost examples: If a doctor spends time gardening (which could be spent treating patients), the opportunity cost = income/service from consulting. PPF shows: when resources are fully employed, producing more of one good means producing less of another. Points inside PPF = inefficiency. Points outside = impossible (with current resources).",
        keywords: ["scarcity", "opportunity cost", "trade-off", "choice", "PPF", "resources", "wants"],
        highlights: [
          "Scarcity is universal — even the richest countries face scarcity (time, skilled labour, rare materials).",
          "Opportunity cost is not necessarily money — it can be time, education, or any foregone alternative.",
          "PPF is bowed outward because resources are not equally efficient for all uses."
        ],
        example: "A student can study for 3 hours or watch TV for 3 hours. If they choose TV, the opportunity cost = the knowledge/marks they would have gained by studying. This is not the cost of the TV — it is the value of the best alternative given up.",
        analogy: "Scarcity and opportunity cost are like a pizza with only 8 slices shared among 10 people: not everyone can have all they want (scarcity). If you take 3 slices, others get fewer — your extra slice has an opportunity cost.",
        visual: "PPF diagram: X-axis = Good A. Y-axis = Good B. Bowed outward curve showing efficient combinations. Point inside = underutilised resources. Point outside = currently unattainable.",
        fact: "Time is the ultimate scarce resource: everyone — from billionaires to students — has exactly 24 hours per day. Economics applies to time allocation just as much as to money.",
        trick: "Opportunity cost = 'the road not taken' — the value of your next best alternative that you chose NOT to do.",
        mistakes: "Confusing opportunity cost with monetary cost. If you use your own savings (no interest paid), the opportunity cost includes the interest you could have earned if you had invested that money.",
        recap: "Scarcity = limited resources, unlimited wants. Every choice has an opportunity cost (best alternative foregone). PPF shows production trade-offs."
      },
      {
        name: "Demand, Supply, and Market Price Determination",
        definition: "Demand is the amount of a good consumers are willing and able to buy at various prices — demand curves slope downward (lower price → more demanded). Supply is the amount producers are willing and able to sell at various prices — supply curves slope upward (higher price → more supplied). Market equilibrium price is where quantity demanded = quantity supplied. Changes in income, preferences, prices of related goods (complements/substitutes) shift demand. Changes in production costs and technology shift supply.",
        ncertDefinition: "Demand and supply interact in markets to determine prices. The equilibrium price is where demand equals supply. Changes in factors affecting demand or supply shift the curves and change equilibrium.",
        examText: "Law of Demand: As price increases, quantity demanded decreases (inverse relationship), ceteris paribus. Law of Supply: As price increases, quantity supplied increases (direct relationship). Factors shifting demand: income change, tastes, prices of substitutes/complements, future expectations. Factors shifting supply: input costs, technology, government policy, number of producers. Price mechanism: acts as a signal — high prices signal producers to produce more and consumers to buy less.",
        keywords: ["demand", "supply", "equilibrium", "price", "law of demand", "law of supply", "market"],
        highlights: [
          "Demand slopes downward (price↑ → demand↓). Supply slopes upward (price↑ → supply↑).",
          "Equilibrium: demand = supply. At this price, no shortages and no surpluses.",
          "Inflation = sustained increase in general price level. Deflation = sustained decrease."
        ],
        example: "Onion prices in India: In a drought year, onion supply falls (farmers produce less). With the same demand, the price rises sharply. This causes buyers to demand fewer onions and possibly switch to substitutes — eventually restoring balance at a higher price.",
        analogy: "A market is like an auction: buyers compete (demand) and sellers offer goods (supply). The price at which a deal is struck (equilibrium) is where the two sides find mutual agreement.",
        visual: "Standard supply-demand diagram: downward sloping D curve, upward sloping S curve, intersecting at equilibrium point P* and Q*. Show effect of rightward demand shift (higher price, higher quantity).",
        fact: "The Indian onion market is so volatile that onion prices are considered a political issue — steep price rises have historically led to government intervention and even affected election outcomes.",
        trick: "Demand and Price: they move in OPPOSITE directions (inverse). Supply and Price: they move in the SAME direction (direct). This is the core of the supply-demand model.",
        mistakes: "Confusing a 'change in quantity demanded' (movement along the curve, caused by price change) with a 'change in demand' (shift of the entire curve, caused by income/preference changes).",
        recap: "Law of Demand: price↑ → demand↓. Law of Supply: price↑ → supply↑. Equilibrium: D=S. Price mechanism signals allocation decisions."
      },
      {
        name: "Types of Economies and India's Mixed Economy",
        definition: "Economic systems differ in how they answer the fundamental questions (what/how/for whom): Market Economy (capitalism): private ownership, prices determined by market forces, minimal government intervention (e.g. USA). Command Economy (socialism/communism): government owns and controls production, central planning (e.g. former USSR). Mixed Economy: combination — private sector operates freely, government provides public goods and regulates markets (e.g. India, most democracies).",
        ncertDefinition: "India has a mixed economy where the government plays a significant role through public sector enterprises and regulation, while the private sector operates competitively in most industries.",
        examText: "India's economic sectors: Primary (agriculture, fishing, mining), Secondary (manufacturing, industry), Tertiary (services — IT, banking, trade, tourism). India's economic features: (1) Large public sector (railways, defence). (2) Strong private sector (IT, telecom, banking). (3) Agricultural dominance (17% GDP, 50% employment). (4) Services sector largest contributor to GDP (~55%). (5) MGNREGA, PM-KISAN = welfare schemes.",
        keywords: ["mixed economy", "market economy", "command economy", "primary sector", "secondary sector", "tertiary sector", "GDP"],
        highlights: [
          "India = mixed economy: public sector (government) + private sector coexist.",
          "GDP (Gross Domestic Product) = total value of all goods and services produced in a country in one year.",
          "Services sector = ~55% of India's GDP. Agriculture = ~17% GDP but employs ~50% of workers."
        ],
        example: "Indian Railways is a public sector monopoly (government-owned, runs nationwide). Maruti Suzuki is a private sector car company. India's IT sector (Infosys, TCS, Wipro) is entirely private. This coexistence is the mixed economy model.",
        analogy: "India's mixed economy is like a cricket team with both specialist batsmen (private sector — doing what they do best) and allrounders/government (filling gaps, providing infrastructure, stepping in where private sector fails).",
        visual: "Three-column comparison: Market Economy / Command Economy / Mixed Economy — with ownership, price setting, government role, and country examples.",
        fact: "India's service sector, particularly IT and software exports, earns over $200 billion annually — making India the world's second-largest IT services exporter after the USA.",
        trick: "Primary, Secondary, Tertiary: PST = 'Physical goods from the earth' (Primary), 'Shape it in factories' (Secondary), 'Sell/Service' (Tertiary).",
        mistakes: "Saying India has a purely socialist economy. India is a MIXED economy — both private and public sectors coexist and collaborate.",
        recap: "Market (private, price mechanism), Command (government-controlled), Mixed (India — both). Primary (agriculture), Secondary (industry), Tertiary (services, 55% of India's GDP)."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Explain the concept of opportunity cost with a real-world example relevant to India.",
        thinking: "Define opportunity cost clearly, then provide a specific, relevant Indian example with explanation.",
        steps: [
          "Definition: Opportunity cost is the value of the next best alternative foregone when a choice is made.",
          "Example: A student from a rural area has saved ₹50,000. They can either: (a) Start a small business (selling vegetables), or (b) Pay for a 1-year vocational IT training course.",
          "If they choose the IT course, the opportunity cost = the income they could have earned from the vegetable business during that year.",
          "If they choose the business, the opportunity cost = the higher future salary they would have earned after completing IT training.",
          "Every choice gives up something of value — that is the opportunity cost."
        ],
        answer: "Opportunity cost is the value of the best foregone alternative. In this example, choosing the IT course has an opportunity cost of one year's business income; choosing the business has an opportunity cost of improved future earning capacity.",
        tips: "Always define the concept → give a specific example → show clearly what is gained and what is given up. This structure earns full marks."
      }
    ],
    mcqs: [
      { question: "The central economic problem is:", options: ["Unemployment", "Scarcity of resources relative to unlimited wants", "Inflation", "Trade deficit"], correctIndex: 1, explanation: "The fundamental economic problem is scarcity: limited resources cannot satisfy unlimited human wants, forcing choices." },
      { question: "Opportunity cost is:", options: ["The monetary price paid for a good", "The total cost of production", "The value of the next best alternative foregone", "The government tax on a product"], correctIndex: 2, explanation: "Opportunity cost = value of the best alternative NOT chosen when a decision is made." },
      { question: "In India, the service sector contributes approximately what percentage of GDP?", options: ["17%", "30%", "55%", "75%"], correctIndex: 2, explanation: "India's services sector (IT, banking, trade, tourism) contributes approximately 55% of GDP — the largest share." },
      { question: "The Law of Demand states:", options: ["Higher price → more demand", "Lower price → less demand", "Higher price → less demand (inverse relationship)", "Price does not affect demand"], correctIndex: 2, explanation: "Law of Demand: as price increases, quantity demanded decreases (inverse relationship), ceteris paribus." },
      { question: "India's economy is classified as:", options: ["Pure market economy", "Command economy", "Mixed economy", "Traditional economy"], correctIndex: 2, explanation: "India has a mixed economy — combining private sector enterprise with significant government participation and regulation." }
    ],
    flashcards: [
      { question: "What is the central problem of economics?", answer: "Scarcity: limited resources cannot satisfy unlimited human wants. This forces choices with opportunity costs." },
      { question: "Define opportunity cost.", answer: "The value of the next best alternative foregone when a choice is made." },
      { question: "What is a mixed economy?", answer: "An economy combining private sector (market forces) and public sector (government) participation — as in India." },
      { question: "State the Law of Supply.", answer: "As the price of a good increases, the quantity supplied increases (direct relationship), ceteris paribus." },
      { question: "What are the three sectors of India's economy?", answer: "Primary (agriculture/mining), Secondary (manufacturing), Tertiary (services — 55% of GDP)." }
    ],
    revisionPoints: [
      "Central economic problem: scarcity (limited resources, unlimited wants).",
      "Opportunity cost = value of next best alternative foregone.",
      "Law of Demand: price↑ → demand↓ (inverse). Law of Supply: price↑ → supply↑ (direct).",
      "Equilibrium: quantity demanded = quantity supplied.",
      "Market economy (private), Command (government), Mixed (India = both).",
      "India's sectors: Primary (agriculture, 17% GDP), Secondary (industry), Tertiary (services, 55% GDP).",
      "GDP = total value of goods and services produced in a country per year."
    ],
    summaryPoints: [
      "Economics is the science of choice under scarcity — studying how individuals and societies allocate limited resources among competing wants.",
      "Every economic choice involves an opportunity cost — the value of the best alternative sacrificed; there is no such thing as a free lunch.",
      "Demand and supply interact in markets to determine prices; the price mechanism efficiently allocates resources in market economies.",
      "India operates as a mixed economy where private enterprise and government participation coexist — the government provides infrastructure, regulates markets, and ensures welfare.",
      "India's economy is dominated by the services sector (~55% of GDP) but employs the largest share of its workforce in agriculture — a structural duality that presents both challenges and opportunities.",
      "Understanding economic concepts equips citizens to evaluate government policies, make informed personal financial decisions, and understand India's development trajectory."
    ]
  }
};
