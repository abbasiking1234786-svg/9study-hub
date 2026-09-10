import { Chapter, Subject } from '../types';

export const CHEMISTRY_CHAPTERS: Chapter[] = [
  {
    id: 'chem-ch1',
    subjectId: 'chemistry',
    number: 1,
    title: 'Fundamentals of Chemistry',
    urduTitle: 'کیمیا کے بنیادی اصول',
    description: 'Branches of chemistry, basic definitions, elements, compounds, mixtures, atomic number, mass number, empirical and molecular formulas, mole concept, and Avogadro number.',
    notes: [
      {
        heading: '1. Branches of Chemistry & Basic Definitions (شاخیں اور بنیادی تعریفات)',
        content: 'Chemistry is the branch of science that deals with the composition, structure, properties, and reactions of matter.\n\nMajor Branches of Chemistry:\n1. Physical Chemistry: Deals with the relationship between physical properties of matter and chemical changes.\n2. Organic Chemistry: Study of covalent compounds of carbon and hydrogen (hydrocarbons) and their derivatives.\n3. Inorganic Chemistry: Study of all elements and their compounds except hydrocarbons.\n4. Biochemistry: Study of chemical substances, processes, and metabolic pathways occurring in living organisms (proteins, carbs, lipids).\n5. Industrial Chemistry: Manufacturing of chemical products on commercial scales (fertilizers, cement, glass, soap).\n6. Nuclear Chemistry: Deals with radioactivity, nuclear processes, and atomic energy.\n7. Environmental Chemistry: Study of chemical interactions in the environment and impact of human industrial activities.\n8. Analytical Chemistry: Separation, identification, and quantitative determination of components in samples.\n\nMatter Classifications:\n• Substance (شے): A piece of matter in pure form with fixed chemical composition and distinct properties.\n• Element (عنصر): Pure substance made up of the same type of atoms having the same atomic number and cannot be decomposed by ordinary chemical means.\n• Compound (مرکب): Substance formed when two or more elements chemically combine in a fixed ratio by mass (e.g., H2O is 1:8 ratio by mass of H and O).\n• Mixture (آمیزہ): Physical combination of two or more elements or compounds in any proportion without chemical bonding (Homogeneous e.g., air, syrup; Heterogeneous e.g., soil, rock).',
        simpleExplanation: 'Compound is like a baked cake: you cannot pull the eggs or flour back out! Mixture is like a bowl of mixed dry fruits: you can easily pick out the almonds and pistachios!',
        funnyRealWorldAnalogy: 'Think of Elements like raw single spices (haldi, mirch). Compound is a prepared biryani masala with exact fixed proportions. Mixture is chaat where every vendor puts whatever amount of chickpeas they feel like!',
        keyPoints: [
          'Substance has fixed chemical composition.',
          'Compound has fixed ratio by mass (chemical bond).',
          'Mixture has variable ratio (physical blend, easily separated).',
          'Avogadro number NA = 6.022 × 10^23 particles per mole.'
        ]
      },
      {
        heading: '2. Atomic Number, Mass Number, Empirical & Molecular Formula',
        content: '1. Atomic Number (Z):\nThe total number of protons present in the nucleus of an atom. Unique to every element (e.g., Hydrogen Z = 1, Carbon Z = 6, Oxygen Z = 8).\n\n2. Mass Number (A):\nThe total number of protons and neutrons (nucleons) present in the nucleus. A = Z + N.\n• Number of neutrons N = A - Z.\n\n3. Empirical Formula (بنیادی یا سادہ فارمولا):\nThe simplest whole-number ratio of atoms of each element present in a compound.\n• Examples:\n  - Glucose: Molecular formula C6H12O6 => Empirical formula CH2O (ratio 1:2:1)\n  - Hydrogen peroxide: H2O2 => Empirical formula HO\n  - Benzene: C6H6 => Empirical formula CH\n  - Water: H2O => Empirical formula is also H2O\n\n4. Molecular Formula (سالماتی فارمولا):\nRepresents the actual number of atoms of each element present in one molecule of a compound.\n• Relationship: Molecular Formula = n × (Empirical Formula)\n• where n = Molecular Mass / Empirical Formula Mass.',
        simpleExplanation: 'Empirical formula is the simplified fraction (like reducing 6/12 to 1/2). Molecular formula is the real recipe card showing exact total ingredients!',
        funnyRealWorldAnalogy: 'Empirical formula is like your summarized bio on WhatsApp. Molecular formula is your complete NADRA computerized CNIC card with all details!',
        keyPoints: [
          'Mass Number A = Protons (Z) + Neutrons (N).',
          'Empirical formula gives simplest whole number ratio.',
          'Molecular formula = n × (Empirical formula).',
          'Ionic compounds only have empirical formula (formula units).'
        ]
      },
      {
        heading: '3. The Mole Concept & Avogadro\'s Number (مول کا نظریہ اور ایوگیڈرو نمبر)',
        content: '1. Avogadro\'s Number (NA):\nItalian scientist Amedeo Avogadro determined that 1 mole of any substance contains exactly 6.022 × 10^23 particles (atoms, molecules, or formula units).\n\n2. Definition of Mole:\nA mole is the amount of a substance that contains 6.022 × 10^23 elementary particles. It is the atomic mass, molecular mass, or formula mass of a substance expressed in grams (Gram-Atomic Mass, Gram-Molecular Mass).\n• 1 mole of Carbon atoms = 12 g = 6.022 × 10^23 C atoms.\n• 1 mole of Water (H2O) = 18 g = 6.022 × 10^23 H2O molecules.\n• 1 mole of NaCl = 58.5 g = 6.022 × 10^23 formula units.\n\nKey Formulas for Numericals:\n• Number of Moles (n) = Known Mass (g) / Molar Mass (g/mol)\n• Number of Particles (N) = Number of Moles (n) × Avogadro\'s Number (NA)\n• Mass of substance = Number of Moles (n) × Molar Mass (M)',
        simpleExplanation: 'Just like "1 Dozen" means 12 bananas or 12 eggs, "1 Mole" is the chemist\'s dozen meaning 6.022 × 10^23 atoms or molecules!',
        funnyRealWorldAnalogy: 'If you had 1 mole of rupees, you could spend 1 billion rupees every second and still not run out in your entire lifetime!',
        keyPoints: [
          'NA = 6.022 × 10^23 particles/mol.',
          'Moles (n) = Mass in grams / Molar mass.',
          'Particles = Moles × 6.022 × 10^23.',
          'Molar volume of any ideal gas at STP = 22.4 dm³ (liters).'
        ]
      }
    ],
    definitions: [
      {
        term: 'Mole',
        urduTerm: 'مول',
        definition: 'The atomic mass, molecular mass, or formula mass of a substance expressed in grams, containing 6.022 × 10^23 particles.',
        examTip: 'Must mention gram equivalent and Avogadro number NA.'
      },
      {
        term: 'Empirical Formula',
        urduTerm: 'بنیادی فارمولا',
        definition: 'The chemical formula showing the simplest whole-number ratio of atoms of elements in a compound.',
        examTip: 'Give examples: CH for Benzene, CH2O for Glucose.'
      },
      {
        term: 'Relative Atomic Mass (Ar)',
        urduTerm: 'اضافی ایٹمی کمیت',
        definition: 'The average mass of an atom of an element compared to 1/12th of the mass of one atom of Carbon-12 isotope.',
        examTip: 'Its unit is atomic mass unit (amu) = 1.66 × 10^-24 g.'
      }
    ],
    formulas: [
      {
        name: 'Number of Moles',
        formula: 'n = Mass in grams (m) / Molar Mass (M)',
        units: 'mol',
        description: 'Calculates moles from given sample mass.'
      },
      {
        name: 'Number of Particles',
        formula: 'N = n × NA = (m / M) × 6.022 × 10^23',
        units: 'atoms / molecules',
        description: 'Finds total atoms or molecules in a sample.'
      },
      {
        name: 'Molecular Formula Relation',
        formula: 'Molecular Formula = n × Empirical Formula, where n = Molar Mass / Empirical Mass',
        units: 'ratio integer n',
        description: 'Determines true molecular formula.'
      }
    ],
    memoryTricks: [
      {
        title: 'Mole Calculations Triangle',
        trick: 'Mass on top, Moles and Molar Mass on bottom (m = n × M)',
        explanation: 'Cover what you need: Want moles? n = m / M. Want mass? m = n × M.'
      }
    ],
    mcqs: [
      {
        id: 'chem-mcq-1',
        question: 'The empirical formula of benzene (C6H6) is:',
        options: ['CH', 'C2H2', 'C6H6', 'CH2'],
        correctIndex: 0,
        explanation: 'Simplest ratio of 6:6 is 1:1, so the empirical formula is CH.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'chem-mcq-2',
        question: 'How many atoms are present in 1 mole of carbon-12?',
        options: ['6.022 × 10^22', '6.022 × 10^23', '12 × 10^23', '3.011 × 10^23'],
        correctIndex: 1,
        explanation: 'One mole of any element contains Avogadro number of atoms, 6.022 × 10^23.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2022'
      },
      {
        id: 'chem-mcq-3',
        question: 'Which of the following is a homogeneous mixture?',
        options: ['Soil', 'Air', 'Sand in water', 'Smoke'],
        correctIndex: 1,
        explanation: 'Air is a uniform mixture of gases throughout, making it a homogeneous mixture (solution).',
        difficulty: 'easy',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'chem-mcq-4',
        question: 'The molar mass of sulfuric acid (H2SO4) is: (H=1, S=32, O=16)',
        options: ['49 g/mol', '98 g/mol', '100 g/mol', '96 g/mol'],
        correctIndex: 1,
        explanation: 'Molar mass = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2021'
      },
      {
        id: 'chem-mcq-5',
        question: 'Mass of 2 moles of water (H2O) is:',
        options: ['18 g', '36 g', '9 g', '54 g'],
        correctIndex: 1,
        explanation: 'Mass = moles × molar mass = 2 mol × 18 g/mol = 36 grams.',
        difficulty: 'easy',
        boardTag: 'Sukkur Board 2022'
      },
      {
        id: 'chem-mcq-6',
        question: 'The number of neutrons in an atom of ₁₇Cl³⁵ is:',
        options: ['17', '35', '18', '52'],
        correctIndex: 2,
        explanation: 'Number of neutrons N = Mass number A - Atomic number Z = 35 - 17 = 18.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2020'
      },
      {
        id: 'chem-mcq-7',
        question: 'Which branch of chemistry deals with manufacturing of fertilizers and cement?',
        options: ['Physical chemistry', 'Industrial chemistry', 'Biochemistry', 'Nuclear chemistry'],
        correctIndex: 1,
        explanation: 'Industrial chemistry focuses on large-scale chemical manufacturing processes.',
        difficulty: 'easy',
        boardTag: 'Larkana Board 2021'
      },
      {
        id: 'chem-mcq-8',
        question: 'One atomic mass unit (1 amu) is equal to:',
        options: ['1.66 × 10^-24 g', '1.66 × 10^-27 g', '6.022 × 10^23 g', '9.11 × 10^-31 g'],
        correctIndex: 0,
        explanation: '1 amu = 1/12th of mass of C-12 = 1.66 × 10^-24 g (or 1.66 × 10^-27 kg).',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2019'
      },
      {
        id: 'chem-mcq-9',
        question: 'A molecule consisting of only two atoms is called:',
        options: ['Monoatomic', 'Diatomic', 'Triatomic', 'Polyatomic'],
        correctIndex: 1,
        explanation: 'Diatomic molecules consist of two atoms (e.g. O2, N2, HCl, CO).',
        difficulty: 'easy',
        boardTag: 'Model Paper BSEK'
      },
      {
        id: 'chem-mcq-10',
        question: 'The percentage of nitrogen in urea [CO(NH2)2] is approximately: (C=12, O=16, N=14, H=1)',
        options: ['28%', '46.6%', '60%', '35%'],
        correctIndex: 1,
        explanation: 'Molar mass of urea = 12 + 16 + 2(14 + 2) = 60 g/mol. Mass of N = 28 g. % = (28/60) × 100 = 46.6%.',
        difficulty: 'hard',
        boardTag: 'BSEK Karachi 2018'
      }
    ],
    shortQuestions: [
      {
        id: 'chem-sq-1',
        question: 'Differentiate between Compound and Mixture with 4 distinct points.',
        urduQuestion: 'مرکب اور آمیزہ میں چار بنیادی فرق تحریر کریں۔',
        answer: '1. Compound (مرکب):\n• Formed by chemical combination of elements with bond formation.\n• Fixed ratio of elements by mass (e.g. H2O is always 1:8 by mass).\n• Constituents lose their original identity (Water properties differ completely from H2 and O2).\n• Cannot be separated by physical methods; requires chemical reactions.\n\n2. Mixture (آمیزہ):\n• Formed by simple physical mixing of substances without any chemical bond.\n• Variable composition in any proportion.\n• Constituents retain their individual properties.\n• Can easily be separated by simple physical methods (filtration, distillation, evaporation, magnet).',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2019'
      },
      {
        id: 'chem-sq-2',
        question: 'Calculate the number of moles and molecules present in 9 grams of water (H2O). (H=1, O=16)',
        urduQuestion: '9 گرام پانی میں مولز اور مالیکیولز کی تعداد معلوم کریں۔',
        answer: 'Data:\n• Mass of H2O (m) = 9 g\n• Molar mass of H2O (M) = 2(1) + 16 = 18 g/mol\n• Avogadro\'s number (NA) = 6.022 × 10^23\n\n1. Number of Moles (n):\nn = m / M = 9 / 18 = 0.5 moles.\n\n2. Number of Molecules (N):\nN = n × NA = 0.5 × 6.022 × 10^23 = 3.011 × 10^23 molecules.\n\nAnswer: 0.5 moles and 3.011 × 10^23 molecules.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022 Section B Numerical'
      },
      {
        id: 'chem-sq-3',
        question: 'Differentiate between Empirical Formula and Molecular Formula with examples.',
        urduQuestion: 'بنیادی فارمولا اور سالماتی فارمولا میں مثالوں کے ساتھ فرق واضح کریں۔',
        answer: '• Empirical Formula (بنیادی فارمولا): Shows the simplest whole-number ratio of atoms in a compound.\n  Examples: Glucose = CH2O, Benzene = CH, Hydrogen peroxide = HO.\n• Molecular Formula (سالماتی فارمولا): Shows the actual total number of atoms of each element present in a molecule.\n  Examples: Glucose = C6H12O6, Benzene = C6H6, Hydrogen peroxide = H2O2.\nFormula: Molecular Formula = n × (Empirical Formula).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2018'
      },
      {
        id: 'chem-sq-4',
        question: 'Define Avogadro\'s number. What is its significance in chemistry?',
        urduQuestion: 'ایوگیڈرو نمبر کی تعریف کریں اور کیمسٹری میں اس کی اہمیت بیان کریں۔',
        answer: 'Avogadro\'s number (NA) is the constant number of particles (atoms, molecules, or ions) present in exactly one mole of any substance, having value 6.022 × 10^23.\n\nSignificance:\n1. Bridges the microscopic world of individual atoms with macroscopic measurable lab masses in grams.\n2. Enables stoichiometric calculations in chemical reactions and industrial synthesis.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BISE Hyderabad 2021'
      },
      {
        id: 'chem-sq-5',
        question: 'What is the difference between an Atom and an Ion? Explain Cation and Anion.',
        urduQuestion: 'ایٹم اور آئن میں کیا فرق ہے؟ کیٹ آئن اور این آئن کی وضاحت کریں۔',
        answer: '• Atom: Electrically neutral particle having equal number of protons and electrons.\n• Ion: An electrically charged species formed when an atom loses or gains electrons.\n  1. Cation (مثبت آئن): Formed by loss of electrons; carries positive charge (e.g., Na⁺, Ca²⁺).\n  2. Anion (منفی آئن): Formed by gain of electrons; carries negative charge (e.g., Cl⁻, O²⁻).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2020'
      },
      {
        id: 'chem-sq-6',
        question: 'Calculate the formula mass of Sodium Carbonate (Na2CO3). (Na=23, C=12, O=16)',
        urduQuestion: 'سوڈیم کاربونیٹ کا فارمولا ماس معلوم کریں۔',
        answer: 'Formula: Na2CO3\nFormula Mass = (2 × Atomic mass of Na) + (1 × Atomic mass of C) + (3 × Atomic mass of O)\n= (2 × 23) + (1 × 12) + (3 × 16)\n= 46 + 12 + 48\n= 106 amu (or 106 g/mol).\nAnswer = 106 amu.',
        marks: 3,
        isImportant: false,
        pastPaperInfo: 'Sukkur Board 2021'
      }
    ],
    longQuestions: [
      {
        id: 'chem-lq-1',
        question: 'A compound of Carbon, Hydrogen and Oxygen contains 40.0% Carbon, 6.67% Hydrogen and 53.33% Oxygen by mass. If its molecular mass is 180 g/mol, determine its Empirical Formula and Molecular Formula.',
        urduQuestion: 'ایک مرکب کے فیصدی اجزاء دیے گئے ہیں۔ اس کا سادہ اور سالماتی فارمولا مرحلہ وار معلوم کریں۔',
        answer: 'Step 1: Calculate Gram Atoms (Moles) of each element:\n• C = 40.0 / 12 = 3.33 moles\n• H = 6.67 / 1.0 = 6.67 moles\n• O = 53.33 / 16 = 3.33 moles\n\nStep 2: Determine Atomic Ratio (Divide by smallest mole value 3.33):\n• C = 3.33 / 3.33 = 1\n• H = 6.67 / 3.33 = 2\n• O = 3.33 / 3.33 = 1\n\nStep 3: Empirical Formula:\nEmpirical Formula = CH2O.\n\nStep 4: Empirical Formula Mass:\n= 12 + (2 × 1) + 16 = 30 g/mol.\n\nStep 5: Determine value of n:\nn = Molar Mass / Empirical Formula Mass = 180 / 30 = 6.\n\nStep 6: Molecular Formula:\nMolecular Formula = n × (Empirical Formula) = 6 × (CH2O) = C6H12O6 (Glucose).\n\nFinal Answer: Empirical Formula is CH2O; Molecular Formula is C6H12O6.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2017 Section C'
      },
      {
        id: 'chem-lq-2',
        question: 'Describe any five major branches of chemistry in detail with practical applications in industry and medicine.',
        urduQuestion: 'کیمیا کی پانچ اہم شاخوں کی صنعتی اور طبی اہمیت کے ساتھ تفصیلی وضاحت کریں۔',
        answer: '1. Organic Chemistry:\nStudy of hydrocarbons and their derivatives. Essential for pharmaceuticals, plastics, synthetic fibers, petrochemicals, and perfumes.\n\n2. Biochemistry:\nDeals with biomolecules (DNA, RNA, proteins, enzymes, carbohydrates). Crucial for medical diagnostics, genetics, vaccine development, and nutrition.\n\n3. Industrial Chemistry:\nTranslates laboratory discoveries into commercial products. Drives large-scale manufacturing of ammonia (Haber process), sulfuric acid (Contact process), fertilizers (Urea), and cement.\n\n4. Environmental Chemistry:\nStudies chemical pollutants, green chemistry alternatives, water purification, acid rain, and global warming remediation.\n\n5. Analytical Chemistry:\nFocuses on qualitative (what is present) and quantitative (how much is present) analysis. Vital for food quality testing, forensic criminal investigation, and pharmaceutical purity verification.',
        marks: 8,
        isImportant: false,
        pastPaperInfo: 'BSEK 2019 Section C'
      }
    ],
    mainQuestions: [
      {
        id: 'chem-mq-1',
        question: 'Define Mole and state Avogadro\'s number with its numerical value.',
        answer: '1 Mole is the atomic or molecular mass expressed in grams. Avogadro\'s number NA = 6.022 × 10^23 particles.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'High Probability Question'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'chem-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'How many molecules are present in 34 grams of Ammonia (NH3)? (N=14, H=1)',
        section: 'B (Short)',
        solution: 'Molar mass NH3 = 14 + 3 = 17 g/mol. Moles = 34 / 17 = 2 mol. Molecules = 2 × 6.022 × 10^23 = 1.2044 × 10^24 molecules.',
        frequency: 'Repeated 6 times in 10 years'
      },
      {
        id: 'chem-pp-2',
        year: 2022,
        board: 'BSEK Karachi',
        question: 'Differentiate between Homoatomic and Heteroatomic molecules with examples.',
        section: 'B (Short)',
        solution: 'Homoatomic: same element atoms (O2, H2, S8). Heteroatomic: different elements (H2O, NH3, CO2).',
        frequency: 'Repeated 4 times in 10 years'
      },
      {
        id: 'chem-pp-3',
        year: 2021,
        board: 'BISE Hyderabad',
        question: 'What is the relationship between Molecular Formula and Empirical Formula?',
        section: 'B (Short)',
        solution: 'Molecular Formula = n × Empirical Formula, where n = Molecular Mass / Empirical Formula Mass.',
        frequency: 'Repeated 5 times in 10 years'
      }
    ],
    quickRevision: [
      'Pure substance has fixed chemical composition.',
      'Compound = chemical bond, fixed ratio by mass; Mixture = physical mix, variable ratio.',
      'Mass number A = Protons + Neutrons; Atomic number Z = Protons.',
      '1 Mole = 6.022 × 10^23 particles (Avogadro\'s number NA).',
      'Moles = Mass in grams / Molar mass.',
      'Empirical Formula is simplest ratio; Molecular Formula is actual total atoms.'
    ]
  }
];

export const CHEMISTRY_SUBJECT: Subject = {
  id: 'chemistry',
  title: 'Chemistry',
  urduTitle: 'کیمیا',
  iconName: 'FlaskConical',
  color: 'from-amber-600 to-orange-600',
  bgColor: 'bg-amber-50 text-amber-700 border-amber-200',
  badgeColor: 'bg-amber-600 text-white',
  totalChapters: 1,
  description: 'Complete Class 9 Chemistry: Fundamentals, Moles, Formulas, Atomic Structure, and 10-Year Sindh Board Past Papers.',
  chapters: CHEMISTRY_CHAPTERS
};
