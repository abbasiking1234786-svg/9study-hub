import { Chapter, Subject } from '../types';

export const BIOLOGY_CHAPTERS: Chapter[] = [
  {
    id: 'bio-ch1',
    subjectId: 'biology',
    number: 1,
    title: 'Introduction to Biology',
    urduTitle: 'حیاتیات کا تعارف',
    description: 'Divisions and branches of biology, relationship of biology with other sciences, Muslim scientists, Quranic verses, and levels of biological organization.',
    notes: [
      {
        heading: '1. Divisions & Major Branches of Biology (حیاتیات کی بنیادی شاخیں)',
        content: 'Biology is the scientific study of life and living organisms (derived from Greek words "Bios" meaning life and "Logos" meaning thought or study).\n\nThree Major Divisions:\n1. Zoology (حیوانات کا علم): Study of animals.\n2. Botany (نباتیات): Study of plants.\n3. Microbiology (خرد حیاتیات): Study of microscopic organisms like bacteria, viruses, microscopic fungi, and protozoa.\n\nKey Branches:\n• Morphology: Study of external form and structure of living organisms.\n• Anatomy: Study of internal structure of organisms observed through dissection.\n• Histology: Microscopic study of tissues.\n• Cell Biology (Cytology): Study of structure and functions of cells and cellular organelles.\n• Physiology: Study of the functions of different parts and organ systems of living organisms.\n• Genetics: Study of heredity and variation of characters transmitted from parents to offspring.\n• Embryology: Study of development of an organism from fertilized egg (zygote) to a complete new individual.\n• Taxonomy: Science of classification and scientific naming of organisms.\n• Paleontology: Study of fossils (preserved remains or impressions of extinct organisms).\n• Ecology (Environmental Biology): Study of interrelationships between organisms and their physical environment.\n• Biotechnology: Application of living organisms or biological systems to manufacture useful products for human welfare.',
        simpleExplanation: 'Biology covers everything living! Botany is all about plants, Zoology is about animals, and Cell Biology is discovering the microscopic microscopic brick-houses making up our bodies!',
        funnyRealWorldAnalogy: 'Think of Anatomy as taking apart a smartphone to see the processor inside, while Physiology is testing how fast it plays games and charges!',
        keyPoints: [
          'Bios = Life, Logos = Study.',
          'Three divisions: Zoology, Botany, Microbiology.',
          'Histology = microscopic tissues, Cytology = cell biology, Genetics = heredity.',
          'Biotechnology uses living cells for human welfare (e.g. insulin production).'
        ]
      },
      {
        heading: '2. Contributions of Famous Muslim Biologists (مسلم سائنسدانوں کے کارنامے)',
        content: 'Muslim scientists laid foundational stones of experimental scientific inquiry during the Golden Age of Islam:\n\n1. Jabir Bin Hayan (721 - 815 A.D.):\n• Renowned as the father of chemistry, he also contributed extensively to biology.\n• Authored famous books "Al-Nabatat" (کتاب النباتات) on plants and "Al-Hayawan" (کتاب الحیوان) on animals.\n\n2. Abdul Malik Asmai (740 - 828 A.D.):\n• Considered the first Muslim zoologist who studied animals in remarkable anatomical detail.\n• Famous books:\n  - "Al-Khail" (Horse)\n  - "Al-Ibil" (Camel)\n  - "Al-Wahoosh" (Wild Animals)\n  - "Khalaq-al-Insan" (Human Body Anatomy)\n\n3. Bu Ali Sina / Avicenna (980 - 1037 A.D.):\n• Celebrated worldwide as the "Prince of Physicians".\n• Authored the monumental medical encyclopedia "Al-Qanoon fi al-Tibb" (The Canon of Medicine), which was used as the textbook of medicine in European universities for over 500 years.',
        simpleExplanation: 'Centuries before modern medical universities, Muslim scientists like Bu Ali Sina and Abdul Malik Asmai were documenting surgery, camel physiology, and herbal medicine with brilliant precision!',
        funnyRealWorldAnalogy: 'Bu Ali Sina wrote "Al-Qanoon fi al-Tibb" so comprehensively that Europeans called him Avicenna and made it their university curriculum for half a millennium!',
        keyPoints: [
          'Jabir Bin Hayan: Al-Nabatat, Al-Hayawan.',
          'Abdul Malik Asmai: Al-Khail (horse), Al-Ibil (camel), Khalaq-al-Insan (human body).',
          'Bu Ali Sina: Al-Qanoon fi al-Tibb (Canon of Medicine), Prince of Physicians.'
        ]
      },
      {
        heading: '3. Levels of Biological Organization (حیاتیاتی تنظیم کے درجات)',
        content: 'Life is organized in a hierarchical spectrum from subatomic particles to the global biosphere:\n\n1. Subatomic and Atomic Level: Protons, neutrons, electrons combine to form atoms (Bioelements: C, H, O, N, P, Ca make up 99% of living mass).\n2. Molecular Level: Biomolecules (Micromolecules like glucose, water, amino acids; Macromolecules like starch, proteins, DNA).\n3. Organelle and Cell Level: Organelles (Mitochondria, Ribosomes, Nucleus) assemble within the Cell, the basic structural and functional unit of life.\n4. Tissue Level: Group of similar cells specialized to perform a common function (e.g., epithelial tissue, muscular tissue, xylem, phloem).\n5. Organ and Organ System Level: Different tissues work together as an Organ (e.g., Stomach), and organs cooperate in an Organ System (e.g., Digestive System).\n6. Organism Level: All organ systems work in harmony to constitute an individual organism.\n7. Population Level: Group of organisms of the same species living in the same habitat at the same time.\n8. Community Level: Assemblage of different populations interacting within an area.\n9. Biosphere Level: The global zone of Earth inhabited by life.',
        simpleExplanation: 'It\'s like building a city: Brick (Atom) -> Room (Cell) -> House (Tissue) -> Neighborhood (Organ) -> City (Organism) -> Country (Population) -> Planet Earth (Biosphere)!',
        funnyRealWorldAnalogy: 'Just like a football team: defenders, midfielders, and strikers (tissues & organs) must coordinate perfectly, otherwise the individual (organism) concedes a goal!',
        keyPoints: [
          'Basic unit of life is the Cell.',
          'Tissue = group of similar cells with a common function.',
          'Population = same species at same place at same time.',
          'Community = different populations interacting together.'
        ]
      }
    ],
    definitions: [
      {
        term: 'Histology',
        urduTerm: 'بافتیات',
        definition: 'The microscopic study of plant and animal tissues using optical and electron microscopes.',
        examTip: 'Do not confuse with Cytology (study of individual cells).'
      },
      {
        term: 'Biotechnology',
        urduTerm: 'حیاتیاتی ٹیکنالوجی',
        definition: 'The practical application of living organisms and biological systems to produce medicines and substances for the welfare of mankind.',
        examTip: 'Mention real example like manufacturing human insulin via bacteria.'
      },
      {
        term: 'Species',
        urduTerm: 'نوع',
        definition: 'A group of naturally interbreeding organisms that produce fertile offspring and are reproductively isolated from other such groups.',
        examTip: 'Key phrase: "capable of producing fertile offspring".'
      }
    ],
    formulas: [],
    memoryTricks: [
      {
        title: 'Levels of Biological Organization Hierarchy',
        trick: 'A-M-O-C-T-O-O-P-C-B ("All Monkeys Often Choose To Open One Plastic Cold Bottle")',
        explanation: 'Atom, Molecule, Organelle, Cell, Tissue, Organ, Organ system, Population, Community, Biosphere.'
      }
    ],
    mcqs: [
      {
        id: 'bio-mcq-1',
        question: 'The famous book "Al-Qanoon fi al-Tibb" was authored by which Muslim scientist?',
        options: ['Jabir Bin Hayan', 'Abdul Malik Asmai', 'Bu Ali Sina (Avicenna)', 'Al-Razi'],
        correctIndex: 2,
        explanation: 'Bu Ali Sina wrote the famous medical book "Al-Qanoon fi al-Tibb", known in Europe as The Canon of Medicine.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'bio-mcq-2',
        question: 'Microscopic study of tissues is called:',
        options: ['Morphology', 'Anatomy', 'Histology', 'Physiology'],
        correctIndex: 2,
        explanation: 'Histology is specifically the microscopic examination of tissues.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2022'
      },
      {
        id: 'bio-mcq-3',
        question: 'Which of the following bioelements makes up the highest percentage of human body mass?',
        options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'],
        correctIndex: 1,
        explanation: 'Oxygen accounts for approximately 65% of human body mass due to high water content.',
        difficulty: 'medium',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'bio-mcq-4',
        question: 'Abdul Malik Asmai wrote which famous book specifically on the camel?',
        options: ['Al-Khail', 'Al-Ibil', 'Al-Wahoosh', 'Khalaq-al-Insan'],
        correctIndex: 1,
        explanation: 'Al-Ibil is Asmai\'s famous book on the anatomy and behavior of camels.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2021'
      },
      {
        id: 'bio-mcq-5',
        question: 'A group of organisms belonging to the same species living together in a specific area is called a:',
        options: ['Community', 'Population', 'Biosphere', 'Ecosystem'],
        correctIndex: 1,
        explanation: 'Population refers strictly to organisms of the SAME species in a defined geographic area.',
        difficulty: 'easy',
        boardTag: 'Sukkur Board 2022'
      },
      {
        id: 'bio-mcq-6',
        question: 'Study of fossils is termed as:',
        options: ['Paleontology', 'Taxonomy', 'Embryology', 'Genetics'],
        correctIndex: 0,
        explanation: 'Paleontology is the study of extinct organisms through fossilized remains.',
        difficulty: 'easy',
        boardTag: 'Larkana Board 2021'
      },
      {
        id: 'bio-mcq-7',
        question: 'Which bioelements constitute 99% of total protoplasmic mass?',
        options: ['Six basic elements (C, H, O, N, P, Ca)', 'Ten elements', 'Four elements', 'Sixteen elements'],
        correctIndex: 0,
        explanation: 'Only 6 elements (Oxygen, Carbon, Hydrogen, Nitrogen, Calcium, Phosphorus) make 99% of living mass.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2020'
      },
      {
        id: 'bio-mcq-8',
        question: 'The branch of biology dealing with the classification and naming of organisms is:',
        options: ['Taxonomy', 'Ecology', 'Biotechnology', 'Morphology'],
        correctIndex: 0,
        explanation: 'Taxonomy establishes binomial nomenclature and groups organisms based on evolutionary relationships.',
        difficulty: 'easy',
        boardTag: 'Model Paper BSEK'
      }
    ],
    shortQuestions: [
      {
        id: 'bio-sq-1',
        question: 'Differentiate between Anatomy and Morphology with examples.',
        urduQuestion: 'تشریح الاعضاء (Anatomy) اور شکلیات (Morphology) میں فرق واضح کریں۔',
        answer: '• Morphology (شکلیات): The study of external shape, appearance, form, and superficial structural features of organisms.\n• Anatomy (تشریح الاعضاء): The study of internal bodily organs and structural architecture observed through anatomical dissection (e.g. dissecting a frog heart or kidney).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2020'
      },
      {
        id: 'bio-sq-2',
        question: 'State the scientific contributions of Abdul Malik Asmai and name any three of his famous books.',
        urduQuestion: 'عبدالملک اصمعی کے حیاتیاتی کارنامے اور تین کتب کے نام تحریر کریں۔',
        answer: 'Abdul Malik Asmai was the first prominent Muslim zoologist who studied domestic and wild animals in meticulous anatomical detail.\nFamous Books:\n1. "Al-Ibil" (کتاب الإبل) - Comprehensive study of camels.\n2. "Al-Khail" (کتاب الخيل) - Detailed treatise on horses.\n3. "Khalaq-al-Insan" (خلق الإنسان) - Descriptive anatomy of the human body.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2018'
      },
      {
        id: 'bio-sq-3',
        question: 'Differentiate between Population and Community with biological examples.',
        urduQuestion: 'آبادی (Population) اور برادری (Community) میں مثالوں سے فرق بیان کریں۔',
        answer: '• Population: A group of individuals of the SAME species living in the same geographical habitat at the same time (e.g., total human population of Karachi in 2023).\n• Community: An assemblage of DIFFERENT populations of various plant and animal species interacting together in a shared ecosystem (e.g., a forest community containing trees, deer, birds, fungi, and wolves).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2021, 2019'
      },
      {
        id: 'bio-sq-4',
        question: 'Why is Bu Ali Sina celebrated as the "Prince of Physicians"? Name his masterpiece book.',
        urduQuestion: 'بوعلی سینا کو "ارسطو ثانی" اور "طبیب اعظم" کیوں کہا جاتا ہے؟',
        answer: 'Bu Ali Sina (Avicenna) is considered the Prince of Physicians due to his extraordinary medical breakthroughs in diagnosing infectious diseases, herbal pharmacology, and surgical techniques.\nHis masterpiece book is "Al-Qanoon fi al-Tibb" (The Canon of Medicine), which remained the standard medical authority across European and Arab medical colleges for over 500 years.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BISE Hyderabad 2021'
      }
    ],
    longQuestions: [
      {
        id: 'bio-lq-1',
        question: 'Explain in detail the Levels of Biological Organization from subatomic particles to the global biosphere with neat examples at each level.',
        urduQuestion: 'حیاتیاتی تنظیم کے تمام درجات (ایٹم سے لے کر بائیوسفیئر تک) کی تفصیلی وضاحت کریں۔',
        answer: '1. Subatomic and Atomic Level:\nAll matter is composed of atoms formed by protons, electrons, and neutrons. Out of 92 natural elements, 16 are Bioelements.\n\n2. Molecular Level:\nBioelements bond to form biomolecules: Micromolecules (Water, Glucose) and Macromolecules (Proteins, Lipids, DNA).\n\n3. Organelle and Cell Level:\nBiomolecules assemble into functional subcellular compartments called Organelles (Mitochondria, Nucleus, Ribosomes). The Cell is the fundamental structural and functional unit of all life.\n\n4. Tissue Level:\nGroups of specialized cells performing identical physiological tasks form Tissues (e.g., Nervous tissue in animals, Phloem tissue in plants).\n\n5. Organ and Organ System Level:\nDifferent tissues assemble into an Organ (e.g., Stomach consisting of epithelial and muscular tissues). Related organs form an Organ System (Digestive System).\n\n6. Organism Level:\nAll organ systems collaborate seamlessly to sustain an independent Organism (e.g., human, lion, mango tree).\n\n7. Population, Community, and Biosphere Level:\n• Population: Group of same-species organisms in a habitat.\n• Community: All interacting populations in a forest or pond.\n• Biosphere: The global zone of Earth inhabited by living creatures.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2017 Section C'
      }
    ],
    mainQuestions: [
      {
        id: 'bio-mq-1',
        question: 'What is Biotechnology and why is it considered the most revolutionary branch of modern biology?',
        answer: 'Biotechnology utilizes living cells, microbes, and genetic engineering to produce therapeutic drugs (insulin), GMO pest-resistant crops, and biofuels.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'Board Classic Question'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'bio-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'Name four branches of biology that relate with health and medicine.',
        section: 'B (Short)',
        solution: 'Anatomy, Physiology, Pharmacology, and Microbiology.',
        frequency: 'Repeated 5 times in 10 years'
      },
      {
        id: 'bio-pp-2',
        year: 2022,
        board: 'BSEK Karachi',
        question: 'Write two Quranic verses highlighting the origin of life from water.',
        section: 'B (Short)',
        solution: '"And We made from water every living thing." (Surah Al-Anbiya, Ayah 30).',
        frequency: 'Repeated 6 times in 10 years'
      }
    ],
    quickRevision: [
      'Biology = Bios (Life) + Logos (Study).',
      '3 Divisions: Zoology (animals), Botany (plants), Microbiology (microbes).',
      'Jabir Bin Hayan: Al-Nabatat & Al-Hayawan.',
      'Abdul Malik Asmai: Al-Khail, Al-Ibil, Khalaq-al-Insan.',
      'Bu Ali Sina: Al-Qanoon fi al-Tibb.',
      'Hierarchy: Atom -> Molecule -> Organelle -> Cell -> Tissue -> Organ -> Organ System -> Organism -> Population -> Community -> Biosphere.'
    ]
  }
];

export const BIOLOGY_SUBJECT: Subject = {
  id: 'biology',
  title: 'Biology',
  urduTitle: 'حیاتیات',
  iconName: 'Dna',
  color: 'from-green-600 to-emerald-600',
  bgColor: 'bg-green-50 text-green-700 border-green-200',
  badgeColor: 'bg-green-600 text-white',
  totalChapters: 1,
  description: 'Complete Class 9 Biology: Branches, Muslim Scientists, Cell Organization, MCQs, and 10-Year Sindh Board Past Papers.',
  chapters: BIOLOGY_CHAPTERS
};
