// NCERT 2026 Social Science, Math, English & IT — Additional Chapter Content
import { FullChapterData } from "./scienceContent";

export const EXTRA_CHAPTERS: Record<string, FullChapterData> = {

  // ─── GEOGRAPHY ────────────────────────────────────────────────────────────
  "atmosphere-climate": {
    difficulty: "Hard",
    estimatedTime: "5 hours",
    learningObjectives: [
      "Describe the composition and layers of the atmosphere with altitudes and characteristics.",
      "Explain insolation, the greenhouse effect, and factors affecting temperature distribution.",
      "Identify global wind belts (trade winds, westerlies, polar easterlies) and their causes.",
      "Explain the three types of rainfall (convectional, orographic, cyclonic) with examples.",
      "Describe the water cycle and relate it to precipitation patterns.",
      "Understand climate change, its causes, and consequences for India."
    ],
    warmupQ: "Why is it colder at the top of a mountain even though it is closer to the Sun? And why does the eastern side of the Western Ghats receive much less rainfall than the western side?",
    warmupFact: "The atmosphere is only 1/100th as thick relative to the Earth as the skin of an apple is relative to the apple. Yet this thin layer of gas — mostly nitrogen and oxygen — makes all life on Earth possible by maintaining temperature, blocking harmful radiation, and cycling water.",
    warmupHint: "Mountains are colder at the top because the atmosphere is heated from below (by re-radiation from the Earth's surface), not directly by the Sun. The Western Ghats create a rain shadow on their eastern side — the windward side gets orographic rain, leaving the leeward side dry.",
    concepts: [
      {
        name: "Layers of the Atmosphere",
        definition: "The atmosphere is a multilayer gaseous envelope around Earth. Composition: 78% nitrogen (N₂), 21% oxygen (O₂), 0.93% argon, 0.04% CO₂, trace water vapour and other gases. Layers (bottom to top): (1) Troposphere (0–12 km): weather occurs here; temperature decreases with altitude (DALR = 6.5°C/km); contains 75% of total atmospheric mass. (2) Stratosphere (12–50 km): contains the ozone layer (15–35 km) which absorbs UV radiation; temperature increases with altitude. (3) Mesosphere (50–80 km): temperature decreases; meteors burn up here. (4) Thermosphere/Ionosphere (80–500 km): temperature increases dramatically; auroras occur here; radio waves reflected. (5) Exosphere (>500 km): transition to outer space.",
        ncertDefinition: "The atmosphere has several layers: troposphere (weather), stratosphere (ozone layer), mesosphere (meteors burn), thermosphere (auroras), and exosphere. Temperature varies in each layer.",
        examText: "Key facts for CBSE: Troposphere = TROPOS (turning/mixing) → weather. Ozone layer (O₃) in stratosphere absorbs UV-B and UV-C radiation. Depletion of ozone by CFCs (chlorofluorocarbons) → increased UV reaching Earth → skin cancer, eye damage, harm to marine ecosystems. Mesosphere: temperature decreases to −90°C (coldest layer). Ionosphere: radio waves bounce off this layer (used in shortwave radio transmission).",
        keywords: ["troposphere", "stratosphere", "ozone layer", "mesosphere", "thermosphere", "aurora", "CFCs", "atmosphere layers"],
        highlights: [
          "Ozone layer (stratosphere, 15–35 km): absorbs harmful UV radiation. Depleted by CFCs from refrigerants and aerosols.",
          "Troposphere: weather zone. Temperature drops ~6.5°C for every 1 km gained in altitude.",
          "Mesosphere: coldest layer (−90°C). Shooting stars (meteors) burn up here due to friction."
        ],
        example: "When a jet aircraft cruises at 10–12 km altitude, it is at the top of the troposphere (tropopause). The stratosphere above is very stable (no weather systems) — that is why commercial aircraft fly there for smooth, weather-free travel.",
        analogy: "The atmosphere is like an onion: multiple concentric layers each with distinct properties. The innermost layer (troposphere) is where all life and weather happen — the outer layers protect us from space radiation and meteorites.",
        visual: "Vertical bar chart of atmospheric layers from 0 to 700 km. Each layer shaded differently with: altitude range, key feature (weather/ozone/auroras), temperature trend (increasing/decreasing arrow).",
        fact: "The ozone hole over Antarctica, discovered in 1985, was primarily caused by human-made CFCs. The 1987 Montreal Protocol banned CFCs globally. The ozone layer is now slowly recovering — expected to fully heal by 2065.",
        trick: "Atmosphere layers mnemonic: 'The Stinking Mess Those Experts Made' → Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere. Temperature alternates: T↓ in Troposphere, T↑ in Stratosphere, T↓ in Mesosphere, T↑ in Thermosphere.",
        mistakes: "Saying 'the Sun heats the atmosphere directly'. The Sun primarily heats the Earth's surface (land and water), which then re-radiates heat to the lower troposphere. The atmosphere is mostly heated from below, not from above — explaining why high altitudes are colder.",
        recap: "Layers: Troposphere (weather, 0–12 km), Stratosphere (ozone, 12–50 km), Mesosphere (meteors, 50–80 km), Thermosphere (aurora, 80–500 km), Exosphere (>500 km)."
      },
      {
        name: "Insolation, Temperature Distribution, and Greenhouse Effect",
        definition: "Insolation is the incoming solar radiation reaching the Earth's surface. Factors affecting insolation: (1) Angle of incidence — lower angle → more area, less intensity. (2) Duration of sunshine — longer days → more energy received. (3) Atmosphere transparency — clouds, dust, and water vapour reflect/absorb sunlight. Greenhouse Effect: certain gases (CO₂, water vapour, methane, N₂O) absorb outgoing infrared radiation from the Earth's surface and re-radiate it back, keeping Earth warm (~15°C average). Without this natural greenhouse effect, Earth's average temperature would be −18°C. Enhanced greenhouse effect (global warming): increased CO₂ from fossil fuels raises temperatures beyond natural levels. Factors controlling temperature distribution: latitude (higher latitude = lower temperature), altitude (higher altitude = lower temperature), distance from sea (maritime = moderate; continental = extreme), ocean currents (warm currents = warming effect; cold currents = cooling/fog).",
        ncertDefinition: "Insolation (incoming solar radiation) is unevenly distributed due to the Earth's spherical shape and tilt. The greenhouse effect traps heat; enhanced greenhouse effect causes global warming.",
        examText: "Albedo: percentage of solar radiation reflected back (fresh snow = 80–90%, ocean = 6%). Higher albedo = less absorption = cooler. Temperature anomaly: deviation from mean temperature. Isotherms: lines joining places of equal temperature — they bend toward poles over land (land heats/cools faster) and toward equator over oceans (oceans moderate temperature). Ocean current effects: Warm current (e.g. Gulf Stream) warms adjacent coastal areas. Cold current (e.g. Labrador Current) brings fog and cool climate.",
        keywords: ["insolation", "greenhouse effect", "global warming", "albedo", "isotherms", "ocean currents", "CO₂"],
        highlights: [
          "Greenhouse gases: CO₂, water vapour, methane (CH₄), nitrous oxide (N₂O), ozone (O₃).",
          "Ocean moderates temperature: coastal areas have lower annual range; continental interiors have high annual range.",
          "Albedo affects temperature: Sahara (low albedo = sand absorbs heat) vs Arctic (high albedo = snow reflects heat)."
        ],
        example: "Mumbai (coastal city) vs Delhi (inland): Mumbai has a smaller annual temperature range (24–32°C) because the Arabian Sea moderates its climate. Delhi experiences extremes (winter: 5°C, summer: 45°C) because it is far from the sea and surrounded by land that heats and cools rapidly.",
        analogy: "The greenhouse effect is like a glass greenhouse for plants: sunlight enters freely, plants absorb it and re-emit as heat, but the glass traps the heat inside. CO₂ and water vapour act as the 'glass' of the Earth's atmosphere.",
        visual: "Diagram: Sun's rays → Earth surface (absorbed). Earth re-emits infrared → greenhouse gases absorb and re-emit downward (trapped). Arrow showing enhanced effect with more CO₂ → rising temperatures.",
        fact: "The global average temperature has already risen by approximately 1.1°C since the pre-industrial era (1850). The Paris Agreement (2015) aims to limit warming to 1.5°C. India has committed to net-zero emissions by 2070 under the Panchamrit pledge.",
        trick: "Temperature decreases: with increasing latitude (equator hottest), increasing altitude (mountains cold), and increasing distance from the coast (continental interiors extreme). All three rules point toward less heat as you move away from warmth sources.",
        mistakes: "Confusing the greenhouse effect (natural, essential for life) with global warming (human-enhanced, problem). The greenhouse effect is NOT bad — without it, Earth would be frozen. The ENHANCED greenhouse effect from excess CO₂ is the problem.",
        recap: "Insolation: solar energy at surface. Affected by angle, duration, transparency. Greenhouse gases trap heat (natural = good). Enhanced greenhouse = global warming. Ocean moderates; continents are extreme."
      },
      {
        name: "Winds, Precipitation, and Types of Rainfall",
        definition: "Wind is the horizontal movement of air from high pressure to low pressure areas. Global wind belts: Trade Winds (equator to 30° latitude — blow toward the equator, deflected by Coriolis effect, NE trades in north; SE trades in south). Westerlies (30°–60° latitude — blow from west toward poles in both hemispheres). Polar Easterlies (60°–90° — cold dense air flowing from poles equatorward). The Coriolis Effect deflects winds to the right in the Northern Hemisphere and to the left in the Southern Hemisphere (due to Earth's rotation). Three types of rainfall: (1) Convectional: surface heats → air rises → cools → condenses → rain. Common in tropics and afternoons in summer. (2) Orographic/Relief: moist air hits a mountain → forced upward → cools → condenses on windward side (heavy rain); leeward side = rain shadow (dry). Example: Western Ghats. (3) Cyclonic/Frontal: warm and cold air masses meet at a front → warm air rises over cold → cools → heavy rainfall. Associated with depressions and storms.",
        ncertDefinition: "Winds blow from high to low pressure, deflected by Coriolis effect. Three types of rainfall: convectional (surface heating), orographic (mountain barrier), cyclonic (air mass convergence).",
        examText: "India's winds: South-West Monsoon (June–September) brings most of India's rainfall. North-East Monsoon (October–December) brings rain to Tamil Nadu coast. Trade winds cause tropical cyclones in Bay of Bengal. Rain shadow: Pune/Deccan (east of Western Ghats) receives much less rain than Mumbai (west). Monsoon causes: differential heating of land and sea → seasonal reversal of winds. ITCZ (Inter-Tropical Convergence Zone) shifts northward in summer → pulls SW monsoon.",
        keywords: ["trade winds", "westerlies", "Coriolis effect", "convectional rainfall", "orographic rainfall", "cyclonic rainfall", "monsoon", "rain shadow"],
        highlights: [
          "Western Ghats (windward) = heavy rainfall (3000+ mm). Deccan Plateau (leeward/rain shadow) = much drier (700 mm).",
          "Coriolis effect: NH deflects right; SH deflects left. Causes curved wind paths and cyclone rotation.",
          "India's monsoon: SW monsoon (June–Sept): critical for agriculture. NE monsoon (Oct–Dec): Tamil Nadu coast."
        ],
        example: "Cherrapunji (Meghalaya) receives some of the highest rainfall in the world (over 11,000 mm annually). It sits on the windward face of the Meghalaya hills: moist Bay of Bengal winds hit the hills → forced upward → heavy orographic rainfall. The plateau behind it (leeward side) receives significantly less rain.",
        analogy: "A mountain causing orographic rainfall is like a speed bump for air: moist air hits the mountain and is forced upward (like a car going over a bump). As it rises, it cools, condenses, and rains. The air that comes down the other side is dry and warm (rain shadow).",
        visual: "Cross-section diagram of Western Ghats: moist air from Arabian Sea (arrows) → hits Ghats → rises → cloud formation → heavy rain (west coast). Air descends on east (Deccan) → dry, warm → rain shadow. Labels: windward, leeward, orographic rain, rain shadow.",
        fact: "Mawsynram in Meghalaya holds the record for the world's highest average annual rainfall at about 11,872 mm (1186 cm) per year. By contrast, the Atacama Desert in Chile receives less than 1 mm of rain per year in some areas — making it Earth's driest non-polar desert.",
        trick: "Types of rainfall: COC (Convectional = Sun heats surface → Orographic = mountain forces air up → Cyclonic = fronts/depressions). In India exams: orographic is most important for explaining the Western Ghats and Himalayan rainfall patterns.",
        mistakes: "Saying rain shadow occurs on the windward side. The rain shadow is on the LEEWARD (sheltered, downwind) side — where the mountain has blocked the moisture-laden winds. The windward side gets the heavy orographic rainfall.",
        recap: "Trade winds → equatorial belt. Westerlies → mid-latitudes. Coriolis deflects winds. Convectional rain = afternoon tropical. Orographic rain = windward mountain. Cyclonic rain = fronts. Rain shadow = leeward side."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Explain why Pune (on the Deccan Plateau) receives much less rainfall than Mumbai (on the coast), even though they are only about 150 km apart.",
        thinking: "Identify: Mumbai is on the windward western coast. Pune is on the leeward side of the Western Ghats. Apply orographic rainfall and rain shadow concepts.",
        steps: [
          "Mumbai lies on the western (windward) side of the Western Ghats, directly facing the moisture-laden SW monsoon winds from the Arabian Sea.",
          "These moist winds are forced to rise as they meet the Western Ghats (orographic lifting).",
          "As air rises, it cools, water vapour condenses, and heavy orographic rainfall occurs on the western slopes and Mumbai coast (average 2200 mm annually).",
          "The now-dried air descends on the eastern (leeward) side of the Ghats toward Pune.",
          "Descending air warms up (adiabatic warming), becoming drier and unable to produce rainfall — this is the rain shadow zone.",
          "Pune therefore receives only about 700–750 mm annually — much less than Mumbai."
        ],
        answer: "Pune is in the rain shadow of the Western Ghats. Mumbai (windward) receives heavy orographic rain from SW monsoon winds; Pune (leeward) receives little rain as the air descends dry and warm.",
        tips: "For geography questions: always name the specific process (orographic/rain shadow), the specific wind system (SW monsoon), and use actual data (Mumbai ~2200 mm, Pune ~700 mm) to demonstrate understanding."
      }
    ],
    mcqs: [
      { question: "The layer of the atmosphere where weather phenomena occur is:", options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"], correctIndex: 2, explanation: "Troposphere (0–12 km) contains 75% of atmospheric mass, all weather (clouds, rain, storms), and temperature decreases with altitude." },
      { question: "Ozone layer is found in which layer of the atmosphere?", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], correctIndex: 1, explanation: "Ozone layer (O₃) is in the stratosphere (15–35 km altitude), absorbing harmful UV-B and UV-C radiation." },
      { question: "The rain shadow effect is experienced on the:", options: ["Windward side of mountains", "Leeward side of mountains", "Coastal areas", "Valley floors"], correctIndex: 1, explanation: "The leeward (sheltered, downwind) side of mountains receives very little rainfall — the air has lost its moisture on the windward side." },
      { question: "Which gas is primarily responsible for enhanced greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], correctIndex: 2, explanation: "CO₂ (carbon dioxide) released from burning fossil fuels is the primary driver of the enhanced greenhouse effect and global warming." },
      { question: "The SW monsoon is responsible for rainfall in India from:", options: ["Jan–March", "April–May", "June–September", "October–December"], correctIndex: 2, explanation: "The South-West Monsoon (June to September) brings most of India's annual rainfall to most parts of the country except Tamil Nadu." }
    ],
    flashcards: [
      { question: "What are the five layers of the atmosphere in order from Earth's surface?", answer: "Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere. Mnemonic: 'The Stinking Mess Those Experts Made'." },
      { question: "What is the greenhouse effect?", answer: "Greenhouse gases (CO₂, water vapour, CH₄) absorb outgoing infrared radiation from Earth and re-radiate it back, keeping Earth warm (~15°C average). Without it, Earth would be −18°C." },
      { question: "What is orographic rainfall?", answer: "Rainfall caused when moist air is forced to rise over a mountain barrier. The windward side gets heavy rain; the leeward side is dry (rain shadow)." },
      { question: "Explain the Coriolis effect.", answer: "The deflection of winds (and ocean currents) due to Earth's rotation. In Northern Hemisphere: deflects right. Southern Hemisphere: deflects left. Causes curved wind paths and cyclone rotation." },
      { question: "What is the difference between weather and climate?", answer: "Weather: atmospheric conditions at a specific place and time (short-term). Climate: average atmospheric conditions of a region over 30+ years (long-term pattern)." }
    ],
    revisionPoints: [
      "Atmosphere composition: 78% N₂, 21% O₂, 0.04% CO₂, trace others.",
      "Layers: Troposphere (weather), Stratosphere (ozone), Mesosphere (meteors), Thermosphere (aurora), Exosphere.",
      "Ozone layer: absorbs UV radiation; depleted by CFCs; Montreal Protocol (1987).",
      "Greenhouse effect: CO₂, CH₄, water vapour trap heat → warming. Enhanced = global warming.",
      "Temperature factors: latitude, altitude, distance from sea, ocean currents, albedo.",
      "Wind belts: Trade winds (equatorial belt), Westerlies (mid-latitudes), Polar easterlies.",
      "Three rainfall types: Convectional (tropical heating), Orographic (mountain barrier), Cyclonic (fronts).",
      "India: SW monsoon (June–Sept) = most rainfall. NE monsoon (Oct–Dec) = Tamil Nadu coast."
    ],
    summaryPoints: [
      "The atmosphere is a thin but vital gaseous shield composed mainly of nitrogen (78%) and oxygen (21%), with trace greenhouse gases crucial for life on Earth.",
      "Atmospheric layers have distinct temperature profiles: troposphere cools with altitude (all weather here); stratosphere warms (ozone absorbs UV); mesosphere cools (meteorites burn); thermosphere warms (auroras).",
      "Insolation (incoming solar radiation) is distributed unevenly due to Earth's spherical shape — equatorial regions receive intense perpendicular rays while polar regions receive oblique, spread-out rays.",
      "The natural greenhouse effect keeps Earth's average temperature at +15°C rather than −18°C; the enhanced greenhouse effect from fossil fuel CO₂ emissions is causing global warming and climate change.",
      "Global wind patterns — trade winds, westerlies, and polar easterlies — are driven by unequal heating and modified by the Coriolis effect (Earth's rotation deflects winds rightward in NH, leftward in SH).",
      "Three mechanisms produce rainfall: convectional (intense surface heating causes air to rise), orographic (mountains force air upward), and cyclonic (convergence of air masses at fronts).",
      "India's climate is dominated by the monsoon — a seasonal reversal of winds driven by differential heating of land and ocean. The SW monsoon (June–September) is critical for agriculture across most of the subcontinent.",
      "Climate change is the defining environmental challenge — rising temperatures, shifting rainfall patterns, melting glaciers, and extreme weather events are already impacting India and requiring urgent global action."
    ]
  },

  // ─── ADDITIONAL ENGLISH CHAPTERS ─────────────────────────────────────────
  "pot-maker": {
    difficulty: "Easy",
    estimatedTime: "2.5 hours",
    learningObjectives: [
      "Analyse themes of dignity of labour, craftsmanship, and vocation in 'The Pot Maker'.",
      "Understand how traditional crafts are intertwined with culture and identity.",
      "Identify and apply grammar concepts: tense forms and active/passive voice.",
      "Appreciate the poem 'Gifts of Grace' and identify its themes and poetic devices.",
      "Write descriptive passages about artisans and traditional crafts effectively."
    ],
    warmupQ: "Have you ever watched a potter at work? What skills do you think it takes to shape a pot on a spinning wheel from just clay and water? How long do you think it takes to master such a skill?",
    warmupFact: "Pottery is one of humanity's oldest crafts — archaeological evidence shows humans were making pottery as far back as 20,000 years ago in China. The potter's wheel was invented around 3500 BCE in Mesopotamia (present-day Iraq), revolutionising the craft and enabling mass production of ceramic vessels.",
    warmupHint: "The story 'The Pot Maker' celebrates the skill, patience, and dignity involved in traditional craftsmanship. It asks us to look beyond the economic value of a craft and see the artisan's expertise, creativity, and cultural heritage.",
    concepts: [
      {
        name: "The Pot Maker — Themes, Characters, and Analysis",
        definition: "The prose piece 'The Pot Maker' explores the life and craft of a traditional potter. The story celebrates the dignity of labour — the idea that every form of honest work has inherent worth and beauty. It highlights how traditional crafts carry cultural memory and identity, passed down through generations. The potter's skill represents the intersection of art, science, and heritage. Themes: dignity of labour, craftsmanship as art, cultural heritage, economic challenges of traditional artisans in the modern world.",
        ncertDefinition: "The story celebrates the dignity and artistry of traditional craftsmanship, exploring the potter's relationship with his craft, the skills required, and the cultural significance of his work.",
        examText: "Character analysis: The potter represents traditional Indian artisans whose skills have been passed down across generations. His craft is both an economic activity and a cultural expression. Thematic content: (1) Dignity of labour — all honest work deserves respect regardless of social status. (2) Traditional knowledge — crafts carry centuries of refined technique. (3) Economic challenge — traditional artisans often face competition from mass-produced goods. (4) Cultural continuity — crafts preserve cultural identity.",
        keywords: ["dignity of labour", "craftsmanship", "traditional arts", "potter", "cultural heritage", "artisan"],
        highlights: [
          "Dignity of labour: every form of honest work has value — physical, artistic, or economic.",
          "Traditional crafts represent embodied knowledge — skill learned through decades of practice, not books.",
          "Cultural heritage: Indian pottery traditions span 5,000+ years (Harappan civilisation)."
        ],
        example: "A potter in Rajasthan's 'Blue Pottery' tradition uses a distinctive technique with quartz, glass, and Multani mitti (Fuller's earth) — not clay. This 800-year-old tradition produces the iconic turquoise-blue pieces seen in museums worldwide. Each piece takes days to create and requires mastery of chemistry, art, and physical dexterity.",
        analogy: "A master potter's hands carry more knowledge than any textbook: they can sense the clay's moisture content, wall thickness, and symmetry through touch. This embodied wisdom is the essence of what 'The Pot Maker' celebrates.",
        visual: "Illustration: potter at wheel, various stages of pot-making (throwing clay, shaping, drying, painting, firing in kiln). Beside it, traditional Indian pottery styles: terracotta (Bankura horse), blue pottery (Rajasthan), black pottery (Manipur).",
        fact: "India's Geographical Indication (GI) tag protects traditional crafts like Kolhapuri chappals, Darjeeling tea, and Channapatna toys. GI tags prevent unauthorised use of product names and help artisan communities maintain livelihoods against cheap imitations.",
        trick: "For themes of 'The Pot Maker' in exams: use the acronym DECK — Dignity of labour, Economy (challenges), Cultural heritage, Knowledge (traditional skills). This covers all main themes completely.",
        mistakes: "Writing that the story is only about pottery. It uses pottery as a vehicle to explore broader themes of dignity of all labour, cultural continuity, and the challenges traditional artisans face in the modern economy.",
        recap: "The Pot Maker: themes = dignity of labour, craftsmanship, cultural heritage, economic challenges. Characters = artisan (representing all traditional craftspeople). Setting = traditional Indian craft community."
      },
      {
        name: "Grammar: Tenses and Active/Passive Voice",
        definition: "English has three primary tenses (Past, Present, Future) each with four aspects (Simple, Continuous/Progressive, Perfect, Perfect Continuous) = 12 tense forms. Active Voice: the subject performs the action. 'The potter shapes the clay.' Passive Voice: the subject receives the action. 'The clay is shaped by the potter.' Passive voice formula: Object (of active) + be verb (appropriate tense) + past participle + (by + agent, optional). Rules for conversion: Active: Subject + V1/V2 + Object. Passive: Object + is/are/was/were/will be + V3 + (by + Subject).",
        ncertDefinition: "Active voice: subject does the action (S + V + O). Passive voice: subject receives the action (O becomes subject; verb becomes 'be' + past participle). Tenses change appropriately in conversion.",
        examText: "Tense conversion for passive: Simple Present (is/are + V3). Simple Past (was/were + V3). Simple Future (will be + V3). Present Perfect (has/have been + V3). Present Continuous (is/are being + V3). Past Continuous (was/were being + V3). Modal (can/could/should + be + V3). Special uses of passive: When agent is unknown, unimportant, or obvious (The thief was arrested). In formal/scientific writing (The experiment was conducted). For emphasis on the action rather than the doer.",
        keywords: ["active voice", "passive voice", "tense", "past participle", "subject", "object", "be verb"],
        highlights: [
          "Passive voice: Object of active becomes subject of passive. 'by + agent' is optional and often omitted.",
          "Past participle (V3) is essential for passive formation. Know irregular V3 forms (write/written, break/broken).",
          "Passive voice is preferred in scientific writing, formal reports, and when the agent is unknown or irrelevant."
        ],
        example: "Active: 'The potter fires the pots in a kiln.' Passive: 'The pots are fired in a kiln (by the potter).' Active: 'Workers will load the truck.' Passive: 'The truck will be loaded (by workers).' The agent 'by the potter/workers' is optional if clear from context.",
        analogy: "Active voice is like a live sports commentary: 'Rohit Sharma HIT a six!' (subject acts). Passive voice is like a report written later: 'A six WAS HIT by Rohit Sharma.' (focus shifts to the event, not the actor).",
        visual: "Table showing tense forms with active and passive examples: 5 tenses × 2 voice = 10 sentence pairs. Highlighted subject, verb, and object in each sentence.",
        fact: "Scientific papers are written almost entirely in passive voice by convention ('The experiment was conducted', 'Results were analysed') because science focuses on repeatable processes, not individual scientists who performed them.",
        trick: "Passive voice formula: Object + (am/is/are/was/were/will be/has been) + V3 + (by + agent). Match the 'be verb' tense to the original tense. Present → is/are. Past → was/were. Future → will be. Perfect → has/have been.",
        mistakes: "Using 'is + V2' instead of 'is + V3' for passive. Must use V3 (past participle). Also, forgetting to change the pronoun: if active subject is 'he' → passive agent is 'by him' (object pronoun, not subject pronoun).",
        recap: "Active: subject does action. Passive: object receives action. Formula: Object + be + V3 + (by agent). Match be-verb to tense. V3 is essential."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Change to passive voice: (a) The craftsman made a beautiful pot. (b) The teacher will explain the lesson. (c) She has completed the project.",
        thinking: "Identify subject, verb (tense), object. Move object to front. Change verb to appropriate 'be + V3'. Place original subject as 'by + agent' at end.",
        steps: [
          "(a) Active: The craftsman (S) made (V-Simple Past) a beautiful pot (O).",
          "Passive: A beautiful pot (new S) was made (was + V3) by the craftsman (by + agent). ✓",
          "(b) Active: The teacher (S) will explain (V-Simple Future) the lesson (O).",
          "Passive: The lesson will be explained (will be + V3) by the teacher. ✓",
          "(c) Active: She (S) has completed (V-Present Perfect) the project (O).",
          "Passive: The project has been completed (has been + V3) by her (object pronoun). ✓"
        ],
        answer: "(a) A beautiful pot was made by the craftsman. (b) The lesson will be explained by the teacher. (c) The project has been completed by her.",
        tips: "For pronoun change in passive: I → me, he → him, she → her, they → them, we → us. Always use object pronoun after 'by' in passive voice."
      }
    ],
    mcqs: [
      { question: "Which of the following is in passive voice?", options: ["The artist painted the picture", "The picture is being painted", "She will paint tomorrow", "They paint beautifully"], correctIndex: 1, explanation: "'The picture is being painted' is passive — the subject (picture) receives the action. The verb uses 'is being + V3 (painted)'." },
      { question: "The passive voice form of 'They will build a new bridge' is:", options: ["A new bridge is built", "A new bridge will be built", "A new bridge was built", "A new bridge has been built"], correctIndex: 1, explanation: "Future tense passive: will be + V3. 'A new bridge will be built (by them)'." },
      { question: "The central theme of 'The Pot Maker' is:", options: ["The history of Indian pottery", "The dignity of labour and traditional craftsmanship", "The economic problems of India", "The story of a potter's family"], correctIndex: 1, explanation: "The story celebrates the dignity inherent in all honest labour, using the potter's craft as a vehicle to explore wider themes of cultural heritage and artisanal knowledge." }
    ],
    flashcards: [
      { question: "Formula for converting active to passive voice?", answer: "Object (of active) + be verb (matching tense) + past participle (V3) + by + subject (as object pronoun)." },
      { question: "What is the passive voice of 'has completed'?", answer: "'Has been completed'. Present Perfect passive: has/have been + V3." },
      { question: "Main themes of 'The Pot Maker'?", answer: "Dignity of labour, traditional craftsmanship as art, cultural heritage, economic challenges faced by artisans in modern India." }
    ],
    revisionPoints: [
      "Active voice: subject performs action. Passive voice: subject receives action.",
      "Passive formula: Object + be (correct tense) + V3 + (by agent).",
      "Tense matching: Simple Present → is/are + V3. Past → was/were + V3. Future → will be + V3. Perfect → has/have been + V3.",
      "The Pot Maker: themes = dignity of labour, craftsmanship, cultural identity, economic challenges.",
      "Pronoun change in passive: I→me, he→him, she→her, they→them, we→us."
    ],
    summaryPoints: [
      "'The Pot Maker' uses the simple craft of pottery to explore profound themes: the dignity inherent in all honest labour, the artistry embedded in traditional crafts, and the cultural continuity that artisans preserve.",
      "Traditional crafts like pottery are not merely economic activities — they carry centuries of refined knowledge, cultural symbolism, and community identity that cannot be easily replicated by machines.",
      "The story challenges modern assumptions about 'skilled' versus 'unskilled' work — showing that a master potter's expertise is as complex and valuable as any professional skill.",
      "Active and passive voice serve different communicative purposes: active emphasises the doer, passive emphasises the action or receiver, making passive voice essential in formal, scientific, and objective writing.",
      "India's rich craft traditions — pottery, weaving, metalwork, embroidery — represent living cultural heritage that requires both economic support and societal respect to survive in the modern marketplace."
    ]
  },

  // ─── ADDITIONAL IT CHAPTERS ──────────────────────────────────────────────
  "ict-skills": {
    difficulty: "Medium",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Describe the components and working of a computer system.",
      "Explain the role of operating systems and common OS features.",
      "Demonstrate file management: creating, organising, naming, and deleting files/folders.",
      "Practice safe and responsible internet use (digital literacy and cybersafety).",
      "Understand input/output devices and their roles in the computing system."
    ],
    warmupQ: "If someone stole your email password, what damage could they do? How would you know your account was hacked? What can you do right now to make your online accounts safer?",
    warmupFact: "There are approximately 2,200 cyberattacks every day globally — that is one attack every 39 seconds. India is among the top 5 countries targeted by cybercriminals. Basic digital literacy and safe computing practices are now essential life skills.",
    warmupHint: "A computer system is made up of hardware (physical components) and software (programs that run on hardware). The operating system (OS) is the master program that manages all hardware and software resources.",
    concepts: [
      {
        name: "Computer System Architecture and Components",
        definition: "A computer system has four main components: (1) Input devices: keyboard, mouse, scanner, microphone, webcam — allow users to enter data and instructions. (2) Processing: CPU (Central Processing Unit) — the brain of the computer. Contains ALU (Arithmetic Logic Unit, performs calculations), Control Unit (directs operations), and registers (temporary storage). Clock speed measured in GHz. (3) Memory: RAM (Random Access Memory — volatile, temporary, working memory), ROM (Read-Only Memory — permanent, contains firmware). Secondary storage: HDD, SSD, USB, CD/DVD. (4) Output devices: monitor, printer, speakers, projector — display or transmit processed results. Software: System software (OS, device drivers, utilities) and Application software (MS Office, browsers, games, educational apps).",
        ncertDefinition: "A computer system has input, processing, memory, and output components. Hardware is physical; software is programs. The OS manages hardware resources and provides interface for users.",
        examText: "Key concepts for IT-402: CPU = brain. RAM = working memory (lost when switched off — volatile). ROM = permanent instructions (BIOS/firmware — non-volatile). Cache memory: high-speed memory inside CPU for frequently used data. Peripheral devices: input (keyboard, mouse) and output (monitor, printer) connected to the CPU. Bit (0 or 1) → Byte (8 bits) → KB (1024 bytes) → MB (1024 KB) → GB (1024 MB) → TB (1024 GB). Binary number system: all computer data stored as 0s and 1s.",
        keywords: ["CPU", "RAM", "ROM", "input devices", "output devices", "operating system", "binary", "hardware", "software"],
        highlights: [
          "RAM is volatile (data lost when power off). ROM is non-volatile (permanent). Both are primary/main memory.",
          "CPU has ALU (calculations) + Control Unit (coordinates operations) + Cache (fast temporary storage).",
          "1 byte = 8 bits. 1 KB = 1024 bytes. Data is stored as binary (0s and 1s) in all digital devices."
        ],
        example: "Opening a document in MS Word: You click (input via mouse). OS interprets the command (processing by CPU). Word document loaded from HDD into RAM (memory). Document displayed on screen (output via monitor). When you save: data moves from RAM back to HDD (permanent storage).",
        analogy: "A computer system is like a restaurant kitchen: Input = customers ordering (input devices). Processing = chef cooking (CPU). Working memory = counter space where chef works (RAM). Storage = refrigerator and pantry (HDD/SSD). Output = serving the dish to the customer (output devices).",
        visual: "Block diagram: Input devices → CPU (ALU + Control Unit) → Output devices. RAM and ROM connected to CPU. Secondary storage (HDD/SSD) connected below. OS shown as software layer controlling all.",
        fact: "The first programmable electronic computer, ENIAC (1945), weighed 27 tonnes, occupied an entire room, and performed 5,000 additions per second. A modern smartphone performs over 1 trillion operations per second and fits in your pocket — a billion-fold improvement in 80 years.",
        trick: "RAM vs ROM: RAM = 'Randomly Accessed Memory for working' (temporary, volatile). ROM = 'Read Only Memory for boot' (permanent, non-volatile). A helpful question: 'Do you lose data when power goes off?' YES → RAM. NO → ROM.",
        mistakes: "Confusing RAM with storage (HDD/SSD). RAM is temporary working memory (things open now). HDD/SSD is permanent storage (things saved). More RAM = can do more at once. More HDD = can store more permanently. They are very different.",
        recap: "Input → CPU (process) → Output. RAM: working memory (volatile). ROM: boot instructions (non-volatile). CPU: ALU + Control Unit. 8 bits = 1 byte. OS manages everything."
      },
      {
        name: "Operating Systems, File Management, and Internet Safety",
        definition: "An Operating System (OS) is system software that manages hardware resources, provides a user interface, and runs application software. Functions of OS: Process management, Memory management, File management, Device management, Security and access control. Popular OS: Windows (Microsoft), macOS (Apple), Linux (open-source), Android (Google, mobile), iOS (Apple, mobile). File Management: Files are organised in folders/directories in a hierarchical tree structure. File naming conventions: use descriptive names, no special characters (/ \\ : * ? \" < >), use file extensions (.docx, .pdf, .jpg). File operations: Create, Read, Update, Delete (CRUD). Path: absolute (from root, e.g. C:\Users\Student\Documents) vs relative (from current folder). Internet Safety: Strong passwords (8+ characters, mix of letters, numbers, symbols). Two-factor authentication (2FA). Recognise phishing (fake emails/websites asking for credentials). Avoid clicking suspicious links. Regular software updates (security patches).",
        ncertDefinition: "An OS manages computer resources and provides user interface. File management organises data in hierarchical directories. Internet safety requires strong passwords, 2FA, recognising phishing, and keeping software updated.",
        examText: "IT-402 exam topics: (1) OS functions: process, memory, file, device, security management. (2) GUI vs CLI: GUI (Graphical User Interface) = windows/icons/mouse (Windows, macOS). CLI (Command Line Interface) = text commands (Linux terminal). (3) File extensions: .docx = Word, .xlsx = Excel, .pdf = Portable Document, .jpg/.png = images, .mp4 = video, .exe = executable program. (4) Cybersecurity threats: Virus, Worm, Trojan, Ransomware, Phishing, Spyware. Protection: Antivirus, Firewall, Encryption, Strong passwords.",
        keywords: ["operating system", "file management", "internet safety", "phishing", "password", "firewall", "antivirus", "GUI", "directory"],
        highlights: [
          "OS: manages CPU, memory, files, devices, and security. Without OS, hardware cannot function.",
          "Strong password: 8+ characters, uppercase + lowercase + numbers + symbols. Never reuse passwords.",
          "Phishing: fraudulent emails/websites mimicking legitimate ones to steal credentials. Always verify URL."
        ],
        example: "Creating a safe password for school email: Weak = 'password123' (common, easily guessed). Strong = 'Sc!ence@2025#9A' (16 characters, mixed case, numbers, symbols, but still memorable with a pattern: Science + year + class). Use a different password for every important account.",
        analogy: "An OS is like a school principal: manages all departments (subjects = applications), allocates resources (classrooms = memory), enforces rules (security), and coordinates everything so the school (computer) functions smoothly. Without the principal (OS), the school (hardware) is just a building.",
        visual: "Tree diagram of file system: C:\\ (root) → Users → Student → Documents → Projects → Science → Chapter1.docx. Shows hierarchical folder structure and file path construction.",
        fact: "The most common password worldwide (according to NordPass 2023 analysis) is still '123456' — used by over 4.5 million accounts. This password can be cracked in under 1 second. The average time to crack a 12-character mixed-case password with numbers and symbols is over 34,000 years.",
        trick: "Password strength rule: LUNE — Length (8+ characters), Uppercase + lowercase mix, Numbers included, Extended characters (symbols like !@#$%). Adding one more character type exponentially increases password strength.",
        mistakes: "Using personal information in passwords (name, birthdate, phone number). Cybercriminals use 'social engineering' — gathering public information from social media to guess passwords. Never use easily identifiable personal details.",
        recap: "OS: manages resources, provides interface. File management: hierarchical directories, descriptive names, extensions. Internet safety: strong passwords, 2FA, recognise phishing, antivirus, regular updates."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "List five internet safety practices that every student should follow to protect their digital identity and data.",
        thinking: "Cover all major categories: passwords, software, communications, privacy, and backup.",
        steps: [
          "1. Strong passwords: Use 8+ character passwords with uppercase, lowercase, numbers, and symbols. Never reuse passwords across accounts.",
          "2. Enable Two-Factor Authentication (2FA): Adds a second verification step (OTP on phone) so even if password is stolen, account remains secure.",
          "3. Recognise phishing: Do not click suspicious email links. Always verify website URLs (look for https:// and the correct domain name before entering credentials).",
          "4. Keep software updated: Install operating system and browser updates promptly — they include security patches that fix vulnerabilities exploited by hackers.",
          "5. Be cautious with public Wi-Fi: Avoid accessing banking or sensitive accounts on unsecured public Wi-Fi. Use a VPN if necessary."
        ],
        answer: "Five internet safety practices: (1) Strong unique passwords. (2) Enable 2FA. (3) Recognise phishing emails/sites. (4) Keep software updated. (5) Avoid sensitive activities on public Wi-Fi.",
        tips: "In exam questions asking to 'list practices', always give a brief explanation for each practice — just listing the name gets partial marks; explaining WHY earns full marks."
      }
    ],
    mcqs: [
      { question: "RAM stands for:", options: ["Read Access Memory", "Random Access Memory", "Rapid Access Module", "Random Access Module"], correctIndex: 1, explanation: "RAM = Random Access Memory. It is volatile primary memory used for temporarily storing data and programs currently in use." },
      { question: "Which of the following is an output device?", options: ["Keyboard", "Microphone", "Scanner", "Printer"], correctIndex: 3, explanation: "Printer is an output device (produces physical output from digital data). Keyboard, microphone, and scanner are all input devices." },
      { question: "Phishing is:", options: ["A type of fishing game", "Fraudulent attempt to steal credentials via fake emails/websites", "A computer programming language", "A type of computer virus"], correctIndex: 1, explanation: "Phishing is a social engineering attack using fake emails or websites that mimic legitimate ones to trick users into entering passwords or financial information." },
      { question: "Which is NOT a function of an Operating System?", options: ["Memory management", "Process management", "Writing application software", "File management"], correctIndex: 2, explanation: "Writing application software (Word, Photoshop, games) is done by application developers — NOT the OS. The OS manages hardware resources and provides the platform for applications to run." }
    ],
    flashcards: [
      { question: "What is the difference between RAM and ROM?", answer: "RAM: Random Access Memory — volatile, temporary working memory (lost when power off). ROM: Read-Only Memory — non-volatile, permanent (stores firmware/BIOS). RAM = short-term; ROM = long-term." },
      { question: "What are the main functions of an Operating System?", answer: "Process management, Memory management, File management, Device management, Security/access control, and providing User Interface (GUI or CLI)." },
      { question: "What is phishing?", answer: "A cybercrime technique using fake emails, websites, or messages that impersonate legitimate organisations to trick users into revealing passwords, banking details, or personal information." },
      { question: "What are the three levels of memory in a computer?", answer: "Cache (fastest, smallest — inside CPU), RAM (primary working memory), Secondary storage (HDD/SSD — permanent, slowest access but largest capacity)." }
    ],
    revisionPoints: [
      "Computer system: Input → Process (CPU) → Output. RAM (volatile) + ROM (non-volatile) = primary memory.",
      "CPU: ALU (calculations) + Control Unit (coordination) + Registers (immediate temp storage).",
      "Storage units: bit → byte (8 bits) → KB → MB → GB → TB. All stored as binary (0s and 1s).",
      "OS functions: manages process, memory, files, devices, and security. GUI (Windows) vs CLI (Linux terminal).",
      "File management: hierarchical directories, descriptive names, correct extensions, absolute vs relative paths.",
      "Internet safety: strong passwords (LUNE rule), 2FA, recognise phishing, update software, be cautious on public Wi-Fi.",
      "Cybersecurity threats: Virus, Worm, Trojan, Ransomware, Phishing. Protection: Antivirus, Firewall, Encryption."
    ],
    summaryPoints: [
      "A computer system integrates four components — input, processing, memory, and output — coordinated by the Operating System, which manages all hardware resources and provides the user interface.",
      "The CPU (Central Processing Unit) is the brain: its ALU performs arithmetic and logical operations, the Control Unit coordinates all activities, and cache provides ultra-fast temporary storage.",
      "Memory hierarchy: registers (fastest) → cache → RAM (working) → secondary storage (HDD/SSD, permanent). RAM is volatile; secondary storage is non-volatile.",
      "The Operating System manages processes, memory allocation, file systems, peripheral devices, and security — without the OS, hardware is non-functional for practical use.",
      "File management uses a hierarchical directory tree. Good practices include descriptive file names, logical folder organisation, correct extensions, and regular backups.",
      "Internet safety is a critical life skill: strong passwords (8+ characters, mixed types), two-factor authentication, recognising phishing attacks, and keeping software updated reduce vulnerability dramatically.",
      "Cybersecurity threats — viruses, ransomware, phishing, and social engineering — are growing. Antivirus software, firewalls, encryption, and digital literacy are the essential defences.",
      "Understanding basic ICT skills is foundational for all careers in the 21st century — from healthcare to agriculture to arts, every field increasingly relies on digital tools."
    ]
  }
};
