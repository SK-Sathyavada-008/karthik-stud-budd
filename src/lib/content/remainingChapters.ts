// NCERT 2026 — Remaining Biology + English + IT Chapter Expansions
import { FullChapterData } from "./scienceContent";

export const REMAINING_CHAPTERS: Record<string, FullChapterData> = {

  // ─── BIOLOGY ──────────────────────────────────────────────────────────────

  "reproduction": {
    difficulty: "Easy",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Define reproduction and explain its biological significance.",
      "Describe all types of asexual reproduction with examples.",
      "Explain sexual reproduction in flowering plants (pollination, fertilisation, seed dispersal).",
      "Explain sexual reproduction in humans: male and female reproductive systems.",
      "Understand puberty, menstrual cycle, and adolescent changes."
    ],
    warmupQ: "If a lizard loses its tail, it grows back. An amoeba divides in two, producing two identical amoebae. A flower produces seeds that grow into new plants. What do all these have in common, and how are they different?",
    warmupFact: "A single female mosquito can lay up to 200–300 eggs at a time, and produces up to 3,000 offspring in her lifetime. Reproductive success — the ability to produce viable offspring — is the ultimate measure of evolutionary fitness.",
    warmupHint: "Reproduction is the biological process by which organisms produce offspring. It ensures continuity of the species. Asexual reproduction involves one parent and produces genetically identical offspring (clones). Sexual reproduction requires two parents and produces genetically varied offspring.",
    concepts: [
      {
        name: "Asexual Reproduction — Types and Examples",
        definition: "Asexual reproduction involves a single parent producing offspring that are genetically identical to the parent (clones). It is faster than sexual reproduction and does not require a mate. Types: (1) Binary Fission: parent cell divides into two equal daughter cells. E.g. Amoeba (any plane), Paramecium (transverse plane), Bacteria (binary fission). (2) Budding: a small outgrowth (bud) develops on the parent body and separates to form a new individual. E.g. Yeast, Hydra. (3) Fragmentation: organism breaks into fragments, each developing into a new organism. E.g. Spirogyra (filamentous alga), Planaria (flatworm). (4) Spore Formation: parent produces spores (resistant reproductive units) that germinate under favourable conditions. E.g. Rhizopus (bread mould), ferns, mosses. (5) Vegetative Propagation: new plants arise from vegetative parts (roots, stems, leaves) of the parent. Natural: rhizomes (ginger), tubers (potato), bulbs (onion), runners (grass). Artificial: cutting, grafting, layering, tissue culture.",
        ncertDefinition: "Asexual reproduction involves a single parent producing genetically identical offspring by binary fission, budding, fragmentation, spore formation, or vegetative propagation.",
        examText: "Binary fission in Amoeba: any plane. In Leishmania (flagellate): longitudinal binary fission (along the length of flagellum). Hydra: budding (offspring stays attached until independent). Multiple fission: nucleus divides multiple times, then cytoplasm divides → many daughter cells (e.g. Plasmodium/malarial parasite). Vegetative propagation advantages: faster, preserves parent characteristics, no seeds needed. Disadvantage: no genetic variation — all offspring identical.",
        keywords: ["binary fission", "budding", "fragmentation", "spore formation", "vegetative propagation", "asexual", "clone"],
        highlights: [
          "Binary fission: Amoeba (any plane), Leishmania (longitudinal), bacteria. Parent divides into two.",
          "Budding: Yeast (external bud) and Hydra (from body wall). Bud separates when mature.",
          "Vegetative propagation: natural (rhizomes, tubers, bulbs, runners) and artificial (cutting, grafting, tissue culture)."
        ],
        example: "Potato (Solanum tuberosum) reproduces by tubers — swollen underground stems with buds ('eyes'). Each eye can grow into a new plant. This is why potato farming doesn't need seeds — cut pieces with eyes are planted directly. All potato plants from one parent tuber are genetically identical clones.",
        analogy: "Asexual reproduction is like photocopying: you take the original (parent), make copies (offspring) — all identical, all produced from one source. Sexual reproduction is like mixing two parents' genetic material to create something new (original artwork, not a photocopy).",
        visual: "Diagram grid: 6 boxes showing each asexual type with labelled organism: (1) Amoeba binary fission. (2) Yeast budding. (3) Spirogyra fragmentation. (4) Rhizopus spore formation. (5) Potato vegetative propagation. (6) Hydra budding.",
        fact: "Tissue culture (micropropagation) can produce millions of identical plants from a single cell. The entire global banana industry relies on tissue culture because commercial bananas (Cavendish variety) are seedless and sterile — they can only reproduce by vegetative propagation.",
        trick: "Types of asexual reproduction: BFSV — Binary fission, Fragmentation, Spore formation, Vegetative propagation. And add Budding. So: 'Big Fat Spiders Vex Budgies' = Binary Fission, Fragmentation, Spore formation, Vegetative propagation, Budding.",
        mistakes: "Saying Hydra uses binary fission. Hydra uses BUDDING — a bud grows from the body wall. Binary fission is for single-celled organisms (Amoeba, bacteria). In budding, parent and offspring are initially connected.",
        recap: "Asexual: 1 parent, clones. Binary fission (Amoeba), Budding (Yeast/Hydra), Fragmentation (Spirogyra), Spore formation (Rhizopus), Vegetative propagation (potato/ginger/onion)."
      },
      {
        name: "Sexual Reproduction in Flowering Plants",
        definition: "Flowers are the reproductive organs of angiosperms. Flower parts: Sepals (protect bud), Petals (attract pollinators), Stamens (male: anther + filament — anther produces pollen grains containing male gametes), Pistil/Carpel (female: stigma + style + ovary — ovary contains ovules with female gametes). Pollination: transfer of pollen from anther to stigma. Self-pollination: same flower or same plant. Cross-pollination: different plant of same species (by wind, insects, water, birds). Fertilisation: pollen grain germinates on stigma → pollen tube grows through style → reaches ovary → male gamete (n) fertilises female gamete/egg (n) → zygote (2n). Double fertilisation: one male gamete fertilises egg → zygote (embryo); second male gamete + polar nuclei → endosperm (nutrition for seed). Seed dispersal: by wind (maple, dandelion), water (coconut), animals (hooked seeds), explosive dehiscence (touch-me-not).",
        ncertDefinition: "Flowers have male (stamen) and female (pistil) parts. Pollination transfers pollen to stigma. Fertilisation of egg by male gamete forms zygote. Double fertilisation: embryo + endosperm.",
        examText: "Parts of a complete flower (SSPSP): Sepals, Petals, Stamens, Pistil. Stamen = anther (pollen) + filament (stalk). Pistil/Carpel = Stigma + Style + Ovary. Fruit = ripened ovary. Seed = ripened ovule. Germination conditions: water, oxygen, optimal temperature. Pollination agents: wind (light, dry pollen, feathery stigmas), insects (colourful petals, nectar, scent), water (aquatic plants). Seed structure: seed coat (testa), cotyledon (food store), embryo (plumule + radicle).",
        keywords: ["pollination", "fertilisation", "stamen", "pistil", "ovule", "pollen", "zygote", "seed dispersal", "double fertilisation"],
        highlights: [
          "Double fertilisation (unique to angiosperms): one male gamete + egg = zygote (embryo); second male gamete + polar nuclei = endosperm (food for embryo).",
          "Fruit = ripened ovary. Seed = ripened ovule. This is why all fruits contain seeds (or at least did before breeding).",
          "Cross-pollination increases genetic variation. Self-pollination is reliable but reduces variation."
        ],
        example: "In a mango flower: stamens release pollen. A visiting bee carries pollen to the stigma of another mango flower (cross-pollination). Pollen germinates, pollen tube grows down the style, reaches the ovary, and fertilises the egg. The ovary develops into the fleshy mango fruit; the ovule becomes the mango seed inside.",
        analogy: "Pollination is like delivering a letter (pollen = letter, anther = sender, stigma = mailbox, pollen tube = postal route). Fertilisation is when the letter reaches its recipient (ovule/egg). Double fertilisation is like sending two letters simultaneously — one creates the baby (embryo) and the other provides the food supply (endosperm).",
        visual: "Cross-section of a complete flower with all parts labelled. Arrow showing: anther → pollen → stigma (pollination) → pollen tube through style → ovule (fertilisation). Separate diagram: seed structure with testa, cotyledon, embryo (plumule + radicle).",
        fact: "About 75% of flowering plant species and 35% of the world's food crops depend on pollinators (bees, butterflies, birds) for reproduction. Honeybee population decline (Colony Collapse Disorder) is therefore a major food security threat — demonstrating how reproduction in plants directly affects human civilisation.",
        trick: "Parts of the pistil from top to bottom: SOS — Stigma (top, receives pollen), Style (middle, tube), Ovary (bottom, contains ovules). Parts of a stamen: AF — Anther (makes pollen) + Filament (stalk).",
        mistakes: "Saying the fruit forms from the ovule. The FRUIT forms from the OVARY (ripened ovary = fruit). The SEED forms from the OVULE (ripened ovule = seed). This is a very common exam error.",
        recap: "Stamen (anther+filament) = male. Pistil (stigma+style+ovary) = female. Pollination = pollen to stigma. Fertilisation = male gamete + egg = zygote. Fruit = ripened ovary. Seed = ripened ovule."
      },
      {
        name: "Puberty, Adolescence, and Human Reproduction",
        definition: "Puberty is the period of physical and hormonal changes marking sexual maturity. In males: testis produce testosterone → growth of testes, pubic hair, deepening voice, facial hair, spermatogenesis (sperm production). In females: ovaries produce oestrogen → growth of uterus, development of breasts, pubic hair, menstruation begins. Menstrual cycle: monthly cycle (~28 days). Day 1: menstruation (shedding of uterine lining if no fertilisation). Days 1–14: follicular phase (egg matures in ovary under FSH). Day 14: ovulation (egg released from ovary under LH surge). Days 15–28: luteal phase (uterine lining thickens preparing for implantation). If no fertilisation → menstruation begins (day 1 of next cycle). Sexually Transmitted Infections (STIs): HIV/AIDS, syphilis, gonorrhoea — spread through unprotected sexual contact. Prevention: safe sexual practices, education.",
        ncertDefinition: "Puberty is onset of sexual maturity marked by secondary sexual characteristics. Menstrual cycle (~28 days) prepares the uterus for possible pregnancy. Ovulation occurs mid-cycle.",
        examText: "Hormones: FSH (Follicle Stimulating Hormone) — matures ovarian follicle. LH (Luteinising Hormone) — triggers ovulation. Oestrogen — female secondary sexual characteristics + uterine lining. Progesterone — maintains uterine lining during luteal phase. Testosterone — male secondary sexual characteristics + sperm production. Reproductive health: PCOD, menstrual hygiene, adolescent nutrition (iron, calcium). Secondary sexual characteristics: occur at puberty, controlled by sex hormones, differ between males and females.",
        keywords: ["puberty", "menstrual cycle", "ovulation", "testosterone", "oestrogen", "FSH", "LH", "secondary sexual characteristics"],
        highlights: [
          "Ovulation: release of mature egg from ovary (Day ~14 of 28-day cycle). Most fertile period.",
          "If egg is not fertilised → progesterone drops → uterine lining sheds = menstruation.",
          "Hormones control puberty: testosterone (males), oestrogen+progesterone (females)."
        ],
        example: "A 12-year-old girl begins experiencing her first menstrual period. This is menarche — the first menstrual cycle — signalling the beginning of puberty and reproductive capacity. Her hypothalamus signals the pituitary to release FSH and LH, which stimulate her ovaries to mature eggs and produce oestrogen, driving all subsequent physical changes.",
        analogy: "The menstrual cycle is like preparing a guest room every month: you prepare the room (thicken uterine lining), wait for a guest (fertilised egg). If no guest arrives, you clear the room (menstruation) and begin preparing again next month.",
        visual: "Circular diagram of 28-day menstrual cycle: Day 1 (menstruation), Days 6–13 (follicular phase, thickening lining), Day 14 (ovulation, egg released), Days 15–28 (luteal phase, lining maintained). Hormone levels (FSH, LH, oestrogen, progesterone) shown as waves below the timeline.",
        fact: "The human egg (ovum) is the largest cell in the human body — just barely visible to the naked eye at about 0.1 mm. Sperm are the smallest cells — about 0.05 mm. One ejaculation releases 200–500 million sperm, yet only ONE typically fertilises the egg — making fertilisation an extraordinary journey.",
        trick: "Menstrual cycle phases: MFO-L (Menstruation, Follicular, Ovulation, Luteal) = 'My Friend Ovulated Late'. Hormones at ovulation: LH SURGE at Day 14 triggers egg release. If you see 'LH surge' in a question, it always means ovulation.",
        mistakes: "Confusing ovulation (release of egg) with menstruation (shedding of uterine lining). These are opposite ends of the cycle. Ovulation = Day 14 (mid-cycle, fertility peak). Menstruation = Days 1–5 (end of cycle if no pregnancy).",
        recap: "Puberty: sex hormone-driven physical changes. Menstrual cycle ~28 days: menstruation → follicular → ovulation (Day 14) → luteal → menstruation. Oestrogen: female. Testosterone: male."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Distinguish between self-pollination and cross-pollination. State two advantages and one disadvantage of each.",
        thinking: "Define each type, identify organisms involved, list advantages (reliability vs genetic variation) and disadvantages (in-breeding vs needs external agent).",
        steps: [
          "Self-pollination: pollen from anther to stigma of the same flower or same plant.",
          "Cross-pollination: pollen transferred from one plant to the stigma of a different plant of the same species.",
          "Self-pollination advantages: (1) No dependency on external agents. (2) Ensures seed production even in isolation.",
          "Self-pollination disadvantage: No genetic variation — offspring are similar to parent → reduced adaptability.",
          "Cross-pollination advantages: (1) Increases genetic variation → better adaptability. (2) Seeds more vigorous (hybrid vigour).",
          "Cross-pollination disadvantage: Depends on external agents (wind, insects) — may fail if agents are absent."
        ],
        answer: "Self: same plant, reliable but no variation. Cross: different plants, genetic variation, needs external agents. Cross-pollination is preferred by nature for evolutionary advantage.",
        tips: "For comparison questions: use a clear 2-column table. List each point in parallel for immediate visual contrast."
      }
    ],
    mcqs: [
      { question: "Budding as a mode of asexual reproduction is seen in:", options: ["Amoeba", "Spirogyra", "Yeast", "Fern"], correctIndex: 2, explanation: "Yeast reproduces by budding — a small outgrowth (bud) forms on the parent cell, grows, and separates into a new individual. Hydra also uses budding in animals." },
      { question: "Ovulation in the human menstrual cycle occurs approximately on day:", options: ["1", "5", "14", "28"], correctIndex: 2, explanation: "Ovulation (release of mature egg from ovary) occurs around Day 14 of a 28-day cycle, triggered by an LH surge. This is the most fertile period." },
      { question: "The fruit of a flowering plant develops from:", options: ["Ovule", "Ovary", "Petal", "Stigma"], correctIndex: 1, explanation: "After fertilisation, the OVARY (of the pistil) develops into the fruit. The OVULE develops into the seed." },
      { question: "Which of the following is an example of vegetative propagation?", options: ["Spore formation in ferns", "Budding in Hydra", "Growing new plants from potato tubers", "Binary fission in Amoeba"], correctIndex: 2, explanation: "Growing plants from potato tubers is vegetative propagation — using a vegetative (non-reproductive) plant part. The 'eyes' of the potato are buds that grow into new plants." },
      { question: "Double fertilisation is a feature of:", options: ["Gymnosperms", "Algae", "Angiosperms", "Bryophytes"], correctIndex: 2, explanation: "Double fertilisation is unique to angiosperms (flowering plants): one male gamete fertilises the egg (→ zygote/embryo); a second fertilises polar nuclei (→ endosperm)." }
    ],
    flashcards: [
      { question: "What is double fertilisation and where does it occur?", answer: "Double fertilisation occurs in angiosperms (flowering plants): one male gamete + egg = zygote (embryo); second male gamete + polar nuclei = endosperm (food for seed)." },
      { question: "Distinguish asexual from sexual reproduction.", answer: "Asexual: 1 parent, genetically identical offspring (clones), faster, no variation. Sexual: 2 parents, genetically varied offspring, slower, enables evolution." },
      { question: "What triggers ovulation in the menstrual cycle?", answer: "An LH (Luteinising Hormone) surge from the pituitary gland triggers the release of a mature egg from the ovarian follicle on approximately Day 14 of the cycle." },
      { question: "Name five types of asexual reproduction with one example each.", answer: "1. Binary fission: Amoeba. 2. Budding: Yeast. 3. Fragmentation: Spirogyra. 4. Spore formation: Rhizopus. 5. Vegetative propagation: Potato (tuber)." },
      { question: "What is the function of the endosperm in seeds?", answer: "Endosperm provides nutrition (food store) for the developing embryo during seed germination. It forms from double fertilisation (second male gamete + polar nuclei)." }
    ],
    revisionPoints: [
      "Asexual: 1 parent, clones. Binary fission (Amoeba/bacteria), Budding (Yeast/Hydra), Fragmentation (Spirogyra), Spore formation (Rhizopus), Vegetative propagation (potato/ginger).",
      "Flower: Stamen (anther+filament) = male. Pistil (stigma+style+ovary) = female.",
      "Pollination = pollen to stigma. Fertilisation = male gamete + egg = zygote.",
      "Double fertilisation (angiosperms): zygote (embryo) + endosperm.",
      "Fruit = ripened ovary. Seed = ripened ovule.",
      "Puberty: hormones drive secondary sexual characteristics. Testosterone (male). Oestrogen/progesterone (female).",
      "Menstrual cycle: ~28 days. Menstruation → Follicular → Ovulation (Day 14, LH surge) → Luteal → repeat."
    ],
    summaryPoints: [
      "Reproduction ensures biological continuity — without it, species would go extinct within one generation.",
      "Asexual reproduction (one parent, clones) is fast and efficient but produces no genetic variation — limiting adaptability to changing environments.",
      "The five types of asexual reproduction — binary fission, budding, fragmentation, spore formation, and vegetative propagation — each suit different organisms and environments.",
      "Flowering plant reproduction involves complex coordination: flowers attract pollinators, pollination transfers pollen, fertilisation unites gametes, and seeds encase the embryo with food reserves.",
      "Double fertilisation (unique to angiosperms) simultaneously produces the embryo and the endosperm — a nutritional investment that makes angiosperm seeds more successful than those of other plant groups.",
      "Human reproduction begins with puberty — a hormonally-driven transition that activates the reproductive system and produces secondary sexual characteristics.",
      "The menstrual cycle's ~28-day rhythm coordinates egg maturation, ovulation, and uterine preparation for potential pregnancy, governed by the interplay of FSH, LH, oestrogen, and progesterone.",
      "Reproductive health education — understanding puberty, menstruation, STIs, and safe practices — is essential for adolescent wellbeing and informed decision-making."
    ]
  },

  "patterns-life": {
    difficulty: "Medium",
    estimatedTime: "4 hours",
    learningObjectives: [
      "Explain the need for classification and its scientific basis.",
      "Describe the 5-kingdom classification system with characteristics of each kingdom.",
      "State the features of the major plant divisions: Thallophyta, Bryophyta, Pteridophyta, Gymnosperms, Angiosperms.",
      "Classify major animal phyla with distinguishing characteristics and examples.",
      "Understand binomial nomenclature and the hierarchy of taxonomic ranks."
    ],
    warmupQ: "There are estimated to be 8.7 million species of living organisms on Earth, and we have only formally identified about 1.2 million. How would scientists manage and communicate about such diversity without a system of classification?",
    warmupFact: "The smallest mammal is the bumblebee bat (Kitti's hog-nosed bat) of Thailand — weighing just 2 grams, smaller than a bumblebee. The largest is the blue whale — weighing up to 150 tonnes. Yet both are classified as mammals (Mammalia) because they share: warm blood, hair/fur, live birth, and milk-feeding of young.",
    warmupHint: "Classification organises organisms based on shared characteristics (body plan, reproduction, nutrition, cell structure). The modern system uses evolutionary relationships — organisms that share a recent common ancestor are classified together.",
    concepts: [
      {
        name: "Need for Classification and the 5-Kingdom System",
        definition: "Classification (taxonomy) is the systematic grouping of organisms based on shared characteristics. It allows scientific communication, study, identification of new species, and understanding evolutionary relationships. Carolus Linnaeus (18th century) developed the modern classification system and binomial nomenclature. Five Kingdom classification (R.H. Whittaker, 1969): (1) Monera: prokaryotes — bacteria, cyanobacteria (blue-green algae). No nucleus, no membrane organelles, unicellular. (2) Protista: unicellular eukaryotes — Amoeba, Paramecium, Euglena, diatoms. (3) Fungi: non-photosynthetic (heterotrophic), cell walls of chitin, mostly multicellular, reproduce by spores. E.g. mushroom, yeast, Rhizopus, Penicillium. (4) Plantae: multicellular, photosynthetic, cell walls of cellulose. (5) Animalia: multicellular, no cell wall, heterotrophic, motile. Hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species (mnemonic: King Philip Came Over For Good Soup).",
        ncertDefinition: "Classification organises organisms into groups based on characteristics. The 5-kingdom system (Whittaker) groups organisms into Monera, Protista, Fungi, Plantae, and Animalia based on cell type, nutrition, and body organisation.",
        examText: "Key distinctions: Monera = prokaryote (only kingdom). Fungi = chitin cell wall, heterotrophic, decomposers. Protista = 'dustbin kingdom' — unicellular eukaryotes that don't fit other kingdoms. Binomial nomenclature: genus + species name in italics or underlined. First letter of genus capitalised, species lowercase. Example: Homo sapiens, Felis catus, Panthera leo. Taxonomic hierarchy (KPCOFGS): Kingdom, Phylum, Class, Order, Family, Genus, Species.",
        keywords: ["5-kingdom", "Monera", "Protista", "Fungi", "Plantae", "Animalia", "Whittaker", "Linnaeus", "binomial nomenclature", "taxonomy"],
        highlights: [
          "Only Monera are prokaryotes. All other kingdoms are eukaryotic.",
          "Fungi: NOT plants (no photosynthesis, chitin not cellulose, heterotrophic). NOT animals (have cell wall, no motility).",
          "Binomial nomenclature: Genus species (italicised/underlined). Homo sapiens = genus Homo, species sapiens."
        ],
        example: "Why is Euglena difficult to classify? It has chloroplasts (like a plant) and also moves with a flagellum (like an animal). Traditional 2-kingdom (plant/animal) system failed — Whittaker's 5-kingdom system placed it in Protista (unicellular eukaryotes), resolving the issue.",
        analogy: "Classification is like a library cataloguing system: books (organisms) are organised by genre (kingdom), sub-genre (phylum), author (genus), and title (species). Without this system, finding a specific book (organism) in a library of 8.7 million books would be impossible.",
        visual: "Tree diagram: 5 kingdoms branching from common ancestor. Each kingdom box lists key features and 3 examples. Taxonomic hierarchy shown as nested boxes from Kingdom (outermost) to Species (innermost).",
        fact: "Scientists estimate about 18,000 new species are formally described every year. As of 2023, approximately 8.1 million animal species are estimated to exist, but only about 950,000 have been formally named and described. Most undiscovered species are insects and deep-sea organisms.",
        trick: "5 Kingdoms: MPPFA — Monera, Protista, Plantae, Fungi, Animalia. OR 'Most People Prefer Friendly Animals'. Taxonomic ranks: KPCOFGS = 'King Philip Came Over For Good Soup' = Kingdom, Phylum, Class, Order, Family, Genus, Species.",
        mistakes: "Placing algae in Plantae. Many algae (single-celled like Chlamydomonas or Chlorella) belong to PROTISTA, not Plantae. Only multicellular algae like Spirogyra and Chara are sometimes placed in Plantae depending on the classification used. NCERT places them in Thallophyta under Plantae.",
        recap: "5 kingdoms: Monera (prokaryote), Protista (unicellular eukaryote), Fungi (chitin, heterotroph), Plantae (photosynthetic), Animalia (no cell wall, heterotroph). Binomial: Genus species."
      },
      {
        name: "Plant Kingdom Classification — From Algae to Angiosperms",
        definition: "Plant Kingdom (Plantae) is divided by increasing complexity: (1) Thallophyta (Algae): no true roots, stems, leaves — plant body is a thallus. Aquatic, photosynthetic. Examples: Spirogyra, Chara, Ulothrix. (2) Bryophyta: first land plants but need water for reproduction. No vascular tissue. Gametophyte dominant. Examples: Funaria (moss), Marchantia (liverwort), Polytrichum. (3) Pteridophyta: vascular plants (xylem and phloem) but no seeds. Reproduce by spores. Sporophyte dominant. Examples: Ferns (Dryopteris), Marsilea, Equisetum (horsetail). (4) Gymnosperms: vascular, produce seeds but no fruits (naked seeds). Usually evergreen trees. Examples: Pinus (pine), Cycas, Cedrus. (5) Angiosperms: most advanced — vascular, seeds enclosed in fruits (flowers). Divided into monocots (one cotyledon: maize, wheat, grass, onion) and dicots (two cotyledons: rose, mango, pea, sunflower).",
        ncertDefinition: "Plant divisions in increasing complexity: Thallophyta (no differentiation), Bryophyta (no vascular tissue), Pteridophyta (vascular, no seeds), Gymnosperms (naked seeds), Angiosperms (seeds in fruits, flowers).",
        examText: "Key distinguishing features: Presence of vascular tissue: Thallophyta and Bryophyta = NO. Pteridophyta, Gymnosperms, Angiosperms = YES. Seeds: Only Gymnosperms and Angiosperms. Flowers/fruits: Only Angiosperms. Monocot vs Dicot: Monocot = 1 cotyledon, parallel venation, fibrous roots. Dicot = 2 cotyledons, reticulate venation, tap root. Examples: Monocot = maize, wheat, rice, grass, onion. Dicot = mango, rose, pea, sunflower, bean.",
        keywords: ["Thallophyta", "Bryophyta", "Pteridophyta", "Gymnosperms", "Angiosperms", "monocot", "dicot", "vascular tissue", "seed"],
        highlights: [
          "Seed-producing plants: Gymnosperms (naked seeds) + Angiosperms (enclosed seeds). Seeds enabled colonisation of dry land.",
          "Angiosperms: ONLY group with flowers and fruits. Most diverse and evolutionarily advanced plant group.",
          "Bryophytes called 'amphibians of plant kingdom' — live on land but need water for reproduction."
        ],
        example: "Why is the coconut tree more advanced than a fern? Fern (Pteridophyta) = has vascular tissue but no seeds — reproduces by spores, needs wet conditions. Coconut (Angiosperm) = has vascular tissue + seeds enclosed in fruit — can germinate in dry conditions and has food reserves (coconut 'water' and 'meat' = endosperm for the seed embryo).",
        analogy: "Plant evolution is like transport technology: Thallophyta = bicycle (basic, works only in good conditions). Bryophyta = scooter (slightly better, still vulnerable). Pteridophyta = car (efficient, fast). Gymnosperms = train (more powerful). Angiosperms = aircraft (most advanced, can go anywhere).",
        visual: "Evolutionary ladder: Thallophyta → Bryophyta → Pteridophyta → Gymnosperms → Angiosperms. Each rung adds a new feature: vascular tissue at Pteridophyta, seeds at Gymnosperms, flowers/fruits at Angiosperms.",
        fact: "Angiosperms are the dominant land plants today — about 300,000 known species. They evolved approximately 130 million years ago. Their success is partly due to co-evolution with pollinators (insects, birds) that helped them spread pollen efficiently, and fruit-eating animals that dispersed their seeds.",
        trick: "Plant divisions mnemonic: 'The Boy Particularly Gives Affection' = Thallophyta, Bryophyta, Pteridophyta, Gymnosperms, Angiosperms. Each step adds something: T = basic. B = land but no vascular. P = vascular. G = seeds. A = flowers+fruits.",
        mistakes: "Saying gymnosperms have fruits. GYMNOSPERMS have NAKED seeds (gymnos = naked, sperma = seed). Only ANGIOSPERMS produce fruits (ovary that encloses the seed). Pine cones are NOT fruits — they are naked seed-bearing structures.",
        recap: "Thallophyta (no differentiation) → Bryophyta (no vascular) → Pteridophyta (vascular, no seed) → Gymnosperms (naked seed) → Angiosperms (flower, fruit, enclosed seed). Monocot vs Dicot."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "A scientist discovers a new organism. It is unicellular, has a nucleus, cannot make its own food, and moves with a flagellum. To which kingdom does it belong? Justify.",
        thinking: "Identify features: unicellular = not Plantae or Animalia (multicellular). Has a nucleus = NOT Monera (prokaryote). Cannot photosynthesise + moves with flagellum = not clearly plant or animal.",
        steps: [
          "Unicellular → eliminates Plantae and Animalia (both multicellular).",
          "Has a nucleus → eliminates Monera (prokaryote, no nucleus).",
          "Cannot make own food + has flagellum (for movement) = Heterotrophic, motile, unicellular eukaryote.",
          "Best fit: PROTISTA — the kingdom of unicellular eukaryotes that don't fit other kingdoms.",
          "Example of similar organisms: Euglena (has flagellum, was once thought to be both plant and animal)."
        ],
        answer: "Kingdom Protista. Justification: unicellular + eukaryotic (has nucleus) + does not fit Monera (no nucleus), Fungi (non-motile, chitin wall), Plantae (multicellular, photosynthetic), or Animalia (multicellular).",
        tips: "Elimination method: rule out kingdoms one by one using the given features. This systematic approach always leads to the correct answer and demonstrates thorough understanding."
      }
    ],
    mcqs: [
      { question: "Which kingdom includes organisms with prokaryotic cells?", options: ["Protista", "Fungi", "Monera", "Plantae"], correctIndex: 2, explanation: "Monera is the only kingdom with prokaryotic organisms (no membrane-bound nucleus). Includes bacteria and cyanobacteria (blue-green algae)." },
      { question: "Mosses (Funaria) belong to which plant division?", options: ["Thallophyta", "Bryophyta", "Pteridophyta", "Gymnosperms"], correctIndex: 1, explanation: "Mosses belong to Bryophyta — 'amphibians of plant kingdom'. They have no vascular tissue and need water for reproduction but live on land." },
      { question: "The scientific name of a mango tree is Mangifera indica. In this name, 'Mangifera' refers to:", options: ["Species name", "Family name", "Genus name", "Kingdom name"], correctIndex: 2, explanation: "In binomial nomenclature (Genus species), 'Mangifera' = genus name (capitalised). 'indica' = species name (lowercase). Both are italicised." },
      { question: "Which group of plants produces naked seeds (not enclosed in a fruit)?", options: ["Angiosperms", "Bryophytes", "Pteridophytes", "Gymnosperms"], correctIndex: 3, explanation: "Gymnosperms produce naked seeds ('gymno' = naked, 'sperma' = seed). Examples: Pinus, Cycas. Only angiosperms enclose seeds in fruits." },
      { question: "Maize, wheat, and rice are classified as:", options: ["Dicotyledons", "Gymnosperms", "Monocotyledons", "Pteridophytes"], correctIndex: 2, explanation: "Maize, wheat, and rice are monocotyledons (monocots) — one cotyledon, parallel leaf venation, and fibrous root system." }
    ],
    flashcards: [
      { question: "State the characteristics of Fungi kingdom.", answer: "Multicellular (except yeast), eukaryotic, heterotrophic (cannot photosynthesise), cell wall of CHITIN, reproduce by spores, mostly decomposers. Examples: mushroom, yeast, Rhizopus, Penicillium." },
      { question: "What is binomial nomenclature?", answer: "The two-name scientific naming system introduced by Linnaeus: Genus + species. Written in italics (or underlined). Genus starts with capital letter; species is all lowercase. Example: Homo sapiens." },
      { question: "Difference between monocots and dicots?", answer: "Monocot: 1 cotyledon, parallel venation, fibrous roots (rice, wheat, maize, onion). Dicot: 2 cotyledons, reticulate (net) venation, tap root (mango, rose, pea, sunflower)." },
      { question: "What feature distinguishes angiosperms from all other plant groups?", answer: "Angiosperms are the ONLY plants with flowers and fruits. Seeds are enclosed in fruits (ripened ovaries). This is the most advanced plant group with ~300,000 known species." },
      { question: "Taxonomic hierarchy from broadest to most specific:", answer: "Kingdom → Phylum → Class → Order → Family → Genus → Species. Mnemonic: 'King Philip Came Over For Good Soup'." }
    ],
    revisionPoints: [
      "5 Kingdoms: Monera (prokaryote), Protista (unicellular eukaryote), Fungi (chitin, heterotroph), Plantae, Animalia.",
      "Binomial nomenclature: Genus (capital) species (lowercase), italicised. E.g. Homo sapiens.",
      "Taxonomic hierarchy: Kingdom, Phylum, Class, Order, Family, Genus, Species (KPCOFGS).",
      "Plant divisions: Thallophyta → Bryophyta (no vascular) → Pteridophyta (vascular) → Gymnosperms (naked seed) → Angiosperms (flower + fruit).",
      "Monocot: 1 cotyledon, parallel veins, fibrous roots. Dicot: 2 cotyledons, net veins, taproot.",
      "Gymnosperms: naked seeds (Pinus, Cycas). Angiosperms: enclosed seeds in fruit.",
      "Fungi: chitin cell wall, heterotrophic, decomposers. NOT plants."
    ],
    summaryPoints: [
      "Classification is essential for scientific communication, identification, and understanding evolutionary relationships among the estimated 8.7 million species on Earth.",
      "Whittaker's 5-kingdom system groups all life based on cell type (prokaryote/eukaryote), body organisation (unicellular/multicellular), and mode of nutrition (autotrophic/heterotrophic).",
      "Linnaeus's binomial nomenclature provides each species a unique two-part scientific name (Genus species) that is universally recognised across all languages.",
      "Plant evolution shows a progression: from thallophytes (no differentiation) through bryophytes (no vascular tissue) and pteridophytes (vascular, no seeds) to gymnosperms (naked seeds) and angiosperms (flowers and fruits).",
      "Angiosperms are the most evolutionarily successful plant group — their flowers attract pollinators and their fruits promote seed dispersal, explaining their dominance across terrestrial ecosystems.",
      "Monocots and dicots differ in fundamental features: cotyledon number, leaf venation, root type, and flower parts — all tracing back to differences in their embryonic structure.",
      "Fungi occupy a unique ecological role as decomposers — breaking down dead organic matter and returning nutrients to the soil, making them essential for ecosystem nutrient cycling.",
      "Taxonomy is a living science — DNA analysis (molecular phylogenetics) is continuously revising our understanding of relationships, reclassifying organisms based on shared evolutionary history."
    ]
  },

  "earth-system": {
    difficulty: "Easy",
    estimatedTime: "3 hours",
    learningObjectives: [
      "Describe the carbon, nitrogen, and water cycles as interconnected Earth system processes.",
      "Explain food chains, food webs, and energy flow in ecosystems.",
      "Define biodiversity and explain the importance of its conservation.",
      "Describe the consequences of deforestation and human impact on ecosystems.",
      "Understand renewable and non-renewable resources and sustainable development."
    ],
    warmupQ: "Every breath you exhale contains CO₂ that was once part of a star, a dinosaur, a tree, or the ocean. How does carbon travel between living and non-living parts of Earth? What would happen if this cycle stopped?",
    warmupFact: "Earth recycles its water continuously. A single water molecule you drink today may have been drunk by a dinosaur 65 million years ago, been part of a glacier 2 million years ago, and evaporated from the Pacific Ocean last month — all as part of the same unbroken water cycle.",
    warmupHint: "Earth is a closed system for matter but not for energy — matter cycles (carbon, nitrogen, water) while energy flows one-way through ecosystems. Understanding these cycles is essential for understanding sustainability.",
    concepts: [
      {
        name: "Biogeochemical Cycles — Carbon, Nitrogen, and Water",
        definition: "Biogeochemical cycles move chemical elements between living organisms and the non-living environment. Carbon Cycle: Carbon in atmosphere (CO₂) → absorbed by plants in photosynthesis → enters food chains (respiration, decomposition, combustion release CO₂ back). Fossil fuel burning = extra CO₂ input → climate change. Nitrogen Cycle: N₂ (79% of atmosphere, inert) → fixed by nitrogen-fixing bacteria (Rhizobium in legume root nodules, Azotobacter in soil) → nitrification (ammonia → nitrites → nitrates by Nitrosomonas/Nitrobacter) → absorbed by plants → consumed by animals → decomposition (ammonification) → denitrification (back to N₂). Water/Hydrological Cycle: Evaporation (oceans, lakes) + Transpiration (plants) = Evapotranspiration → condensation → precipitation (rain, snow) → surface runoff, infiltration, river flow → back to oceans. Transpiration from forests drives rainfall — deforestation disrupts local rainfall patterns.",
        ncertDefinition: "Biogeochemical cycles circulate matter between biotic and abiotic components. Carbon cycle: photosynthesis-respiration-combustion. Nitrogen cycle: fixation-nitrification-denitrification. Water cycle: evaporation-condensation-precipitation.",
        examText: "Key organisms in nitrogen cycle: Nitrogen-fixing bacteria = Rhizobium (symbiotic in legume root nodules), Azotobacter (free-living in soil). Nitrifying bacteria = Nitrosomonas (NH₃ → NO₂⁻), Nitrobacter (NO₂⁻ → NO₃⁻). Denitrifying bacteria = Pseudomonas (NO₃⁻ → N₂). Decomposers = bacteria and fungi — break down dead organic matter releasing NH₃ (ammonification). Ozone layer: stratospheric O₃ absorbs UV. Increased UV due to ozone depletion → DNA damage, skin cancer, reduced photosynthesis.",
        keywords: ["carbon cycle", "nitrogen cycle", "water cycle", "photosynthesis", "nitrogen fixation", "Rhizobium", "decomposition", "evaporation"],
        highlights: [
          "Nitrogen fixation: atmospheric N₂ → usable forms. Done by Rhizobium (in legume roots) and Azotobacter (free in soil).",
          "Decomposers (bacteria and fungi) are essential — they release nutrients locked in dead organisms back into the ecosystem.",
          "Fossil fuel combustion disrupts the carbon cycle by releasing stored carbon faster than natural processes can reabsorb it."
        ],
        example: "A legume farmer rotates crops by planting peas after wheat. The pea plant hosts Rhizobium bacteria in root nodules — these bacteria convert atmospheric N₂ to ammonium compounds absorbed by the plant. When the pea crop is ploughed back into the soil (green manuring), nitrogen is released, naturally fertilising the soil for next season's wheat.",
        analogy: "Biogeochemical cycles are like the Earth's recycling system: atoms and molecules are borrowed by living organisms temporarily (food, body tissue) and then returned to the environment (by decomposition, respiration) to be borrowed again by the next generation — the same atoms cycle endlessly.",
        visual: "Three cycle diagrams side-by-side: (1) Carbon cycle: arrows between atmosphere (CO₂), plants (photosynthesis), animals (respiration), decomposers, fossil fuels. (2) Nitrogen cycle: atmosphere (N₂) → fixation → plants/animals → decomposition → nitrification → denitrification → back. (3) Water cycle: ocean evaporation → clouds → precipitation → rivers/groundwater → ocean.",
        fact: "Leguminous plants (peas, beans, lentils, soybean, clover) are essential to global food security because they host nitrogen-fixing bacteria — effectively acting as natural fertiliser factories. About 40 million tonnes of nitrogen are fixed by biological nitrogen fixation annually worldwide, saving enormous amounts of synthetic fertiliser.",
        trick: "Nitrogen cycle steps: FANDD = Fixation (N₂ → NH₃), Ammonification (dead matter → NH₃), Nitrification (NH₃ → NO₃⁻), plant Absorption, Denitrification (NO₃⁻ → N₂). The cycle goes FANDD → back to the start!",
        mistakes: "Saying plants fix nitrogen. Plants cannot fix atmospheric nitrogen — they absorb it as nitrates (NO₃⁻) or ammonium (NH₄⁺) from soil. Only specific bacteria (Rhizobium, Azotobacter, Cyanobacteria) can fix atmospheric N₂.",
        recap: "Carbon: photosynthesis fixes it; respiration/combustion releases it. Nitrogen: bacteria fix N₂ → nitrify → plants absorb → decompose → return to atmosphere. Water: evaporates → clouds → rains → rivers → ocean."
      },
      {
        name: "Ecosystems, Food Chains, and Biodiversity",
        definition: "Ecosystem: a community of organisms (biotic) interacting with each other and their physical environment (abiotic — water, soil, air, light). Biotic: producers (plants — photosynthesise), consumers (herbivores, carnivores, omnivores), decomposers (bacteria, fungi). Food chain: linear sequence of energy transfer: Producer → Primary Consumer → Secondary Consumer → Tertiary Consumer. Food web: interconnected food chains (more realistic — most organisms eat multiple things). Energy flow: only 10% of energy transfers to the next trophic level (the rest is lost as heat). Biodiversity: variety of living organisms in an area. Three levels: genetic diversity, species diversity, ecosystem diversity. Threats to biodiversity: habitat destruction (deforestation), pollution, overexploitation, invasive species, climate change. Conservation: in-situ (protected areas: national parks, wildlife sanctuaries) and ex-situ (zoos, botanical gardens, gene banks).",
        ncertDefinition: "An ecosystem has biotic (living) and abiotic (non-living) components. Energy flows through food chains with only 10% efficiency between trophic levels. Biodiversity must be conserved through in-situ and ex-situ methods.",
        examText: "10% law (Lindemann's Law): only 10% of energy from one trophic level is available to the next. Therefore: if grass has 10,000 J, grasshopper gets 1,000 J, frog gets 100 J, snake gets 10 J, eagle gets 1 J. This limits food chain length to 4–5 levels. Ecological pyramids: pyramid of numbers, biomass, energy. Pyramid of energy is always upright. Pyramid of numbers can be inverted (e.g. tree → insects → birds: 1 tree supports many insects supports fewer birds).",
        keywords: ["ecosystem", "food chain", "food web", "trophic level", "10% law", "biodiversity", "in-situ", "ex-situ", "decomposers"],
        highlights: [
          "10% law: only 10% energy transfers between trophic levels. Long food chains are inefficient.",
          "Decomposers (bacteria + fungi) complete energy cycling by breaking down dead matter — essential for nutrient return.",
          "In-situ conservation: habitat protection (National Parks). Ex-situ: captive/seed bank conservation."
        ],
        example: "Grass → Grasshopper → Frog → Snake → Hawk. This is a food chain. If 10,000 kJ of energy is stored in the grass: grasshoppers get 1,000 kJ; frogs get 100 kJ; snakes get 10 kJ; hawks get only 1 kJ. This is why large predators (hawks, lions, tigers) need enormous territories — they are at the end of an energy-inefficient chain.",
        analogy: "Energy flow in ecosystems is like a leaking bucket relay: the first person (grass) has a full bucket. They pour it into the second person's bucket — but only 10% makes it (90% spills/wastes as heat). By the time the bucket reaches the 5th person, almost nothing is left. This is why we should 'eat lower on the food chain' to be more energy-efficient.",
        visual: "Energy pyramid: base = producers (10,000 kJ), narrowing upward through consumer levels. Each level labelled with energy value showing 10% decrease. Food web diagram showing multiple interconnected chains with arrows.",
        fact: "India has 4 of the world's 34 biodiversity hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, and the Sundaland (Nicobar Islands). A biodiversity hotspot must have ≥1,500 endemic plant species and have lost ≥70% of its original habitat.",
        trick: "Food chain direction: arrows point from FOOD to FEEDER (direction of energy flow). Grass → Grasshopper = grasshopper EATS grass = energy moves from grass to grasshopper. Always draw arrows in the direction of energy transfer, not who attacks whom.",
        mistakes: "Drawing food chain arrows pointing toward the producer (wrong direction). Arrows show energy flow — they always point FROM prey TO predator (FROM food TO feeder).",
        recap: "Ecosystem: biotic + abiotic. Food chain: energy flows from producer → consumer → consumer. 10% law: only 10% transfers up. Biodiversity: genetic + species + ecosystem. Conservation: in-situ (parks) + ex-situ (zoos)."
      }
    ],
    formulas: [],
    solved: [
      {
        question: "Calculate how much energy is available to humans if they eat: (A) wheat directly, or (B) mutton from sheep that ate wheat. If wheat stores 10,000 kJ, compare both scenarios.",
        thinking: "Apply 10% law. Direct consumption = higher energy. Eating animals = energy lost at each trophic level.",
        steps: [
          "Scenario A: Humans eat wheat directly. Energy available = 10% of 10,000 = 1,000 kJ.",
          "Scenario B: Sheep eat wheat. Sheep get 10% of 10,000 = 1,000 kJ. Humans eat mutton. Humans get 10% of 1,000 = 100 kJ.",
          "Comparison: Direct grain diet = 10× more efficient than meat diet for the same amount of primary production."
        ],
        answer: "Eating wheat directly: 1,000 kJ available. Eating mutton from wheat-fed sheep: 100 kJ available. Eating directly from producers is 10× more energy-efficient than eating herbivores.",
        tips: "This 10% law calculation explains why vegetarian diets can support far more people per hectare of land than meat-based diets — critical in understanding food security and sustainable agriculture."
      }
    ],
    mcqs: [
      { question: "Which organisms are responsible for nitrogen fixation?", options: ["All bacteria", "Rhizobium and Azotobacter", "Decomposers", "Nitrifying bacteria"], correctIndex: 1, explanation: "Nitrogen-fixing bacteria: Rhizobium (in legume root nodules) and Azotobacter (free-living in soil) convert atmospheric N₂ into usable ammonium/nitrate compounds." },
      { question: "The 10% law in energy flow means:", options: ["10% of energy is wasted at each level", "Only 10% of energy from one trophic level reaches the next", "Organisms use 10% of their energy for growth", "10% of species are producers"], correctIndex: 1, explanation: "Lindemann's 10% law: only 10% of energy at one trophic level is available to the next. 90% is lost as heat through respiration, movement, and waste." },
      { question: "In-situ conservation means:", options: ["Conserving organisms in captivity (zoos)", "Protecting organisms in their natural habitat", "Gene bank preservation", "Seed bank creation"], correctIndex: 1, explanation: "In-situ = 'in place' conservation: protecting species in their natural habitat. Examples: national parks (Jim Corbett, Kaziranga), wildlife sanctuaries, biosphere reserves." },
      { question: "Decomposers play which essential role in ecosystems?", options: ["Primary production through photosynthesis", "Releasing nutrients from dead organisms back into the environment", "Predating on herbivores", "Fixing atmospheric nitrogen only"], correctIndex: 1, explanation: "Decomposers (bacteria and fungi) break down dead organic matter through decomposition (saprotrophic nutrition), releasing nutrients (N, P, C) back into soil and water for reuse by producers." }
    ],
    flashcards: [
      { question: "What is the 10% law in ecology?", answer: "Lindemann's 10% law: only 10% of energy at one trophic level is transferred to the next. 90% is lost as heat. This limits food chain length to 4–5 levels." },
      { question: "What are decomposers and why are they essential?", answer: "Decomposers (bacteria and fungi) break down dead organisms and waste, releasing nutrients (carbon, nitrogen, phosphorus) back into soil and water for reuse by producers. Without them, nutrients would be permanently locked in dead matter." },
      { question: "Distinguish in-situ from ex-situ conservation.", answer: "In-situ: protecting organisms in their natural habitat (national parks, sanctuaries, biosphere reserves). Ex-situ: protecting organisms outside natural habitat (zoos, botanical gardens, seed banks, gene banks)." },
      { question: "What are the three levels of biodiversity?", answer: "Genetic diversity (variation within species), Species diversity (variety of species in an area), Ecosystem diversity (variety of habitats and ecological communities)." },
      { question: "Role of Rhizobium in the nitrogen cycle?", answer: "Rhizobium lives in root nodules of leguminous plants (peas, beans, lentils) and fixes atmospheric N₂ into ammonia/ammonium, making nitrogen available for plant use — biological nitrogen fixation." }
    ],
    revisionPoints: [
      "Carbon cycle: CO₂ → photosynthesis → food chains → respiration/decomposition/combustion → CO₂. Fossil fuels excess CO₂ → climate change.",
      "Nitrogen cycle: N₂ → fixation (Rhizobium/Azotobacter) → nitrification → plant absorption → decomposition → denitrification → N₂.",
      "Water cycle: evaporation → condensation → precipitation → runoff/infiltration → back to oceans.",
      "Food chain: Producers → Primary consumers → Secondary → Tertiary. Arrows = energy flow direction.",
      "10% law: only 10% energy transferred between trophic levels.",
      "Biodiversity: genetic + species + ecosystem diversity. Threats: habitat loss, pollution, climate change.",
      "In-situ: national parks (Jim Corbett, Kaziranga). Ex-situ: zoos, botanical gardens, seed/gene banks."
    ],
    summaryPoints: [
      "Earth's matter cycles continuously through biogeochemical pathways — carbon, nitrogen, and water move between the atmosphere, hydrosphere, lithosphere, and biosphere in endless loops.",
      "The carbon cycle connects photosynthesis (CO₂ removal) with respiration, decomposition, and combustion (CO₂ release). Fossil fuel burning accelerates CO₂ release, disrupting the cycle's balance.",
      "The nitrogen cycle converts inert atmospheric N₂ into biologically usable forms through the unique metabolic abilities of nitrogen-fixing bacteria — a service that no plant or animal can perform.",
      "Ecosystems are interconnected systems of living organisms and their physical environment. Energy flows one-way through food chains (producer → consumer), while matter cycles repeatedly.",
      "Lindemann's 10% law explains why food chains are short: only 10% of energy transfers between trophic levels, making it energetically inefficient to eat high on the food chain.",
      "Biodiversity — the variety of life at genetic, species, and ecosystem levels — is the foundation of ecosystem services that sustain all human life, from food and water to medicine and climate regulation.",
      "India's extraordinary biodiversity (4 global hotspots, 7–8% of all described species on 2.4% of Earth's land area) requires urgent protection through both in-situ and ex-situ conservation strategies.",
      "Sustainable development — meeting present needs without compromising future generations' ability to meet theirs — requires understanding and respecting the limits of Earth's biogeochemical cycles."
    ]
  }
};
