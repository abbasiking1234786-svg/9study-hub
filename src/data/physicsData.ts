import { Chapter, Subject } from '../types';

export const PHYSICS_CHAPTERS: Chapter[] = [
  {
    id: 'phy-ch1',
    subjectId: 'physics',
    number: 1,
    title: 'Physical Quantities & Measurement',
    urduTitle: 'طبیعی مقداریں اور پیمائش',
    description: 'Fundamental and derived units, SI prefixes, scientific notation, Vernier Caliper, Micrometer Screw Gauge, and Physical Balance.',
    notes: [
      {
        heading: '1. Base vs Derived Physical Quantities (بنیادی بمقابلہ ماخوذ مقداریں)',
        content: 'Physics is the branch of science that deals with matter, energy, and the relationship between them. A physical quantity is any characteristic that can be measured and in terms of which physical laws are formulated. Physical quantities are divided into two main categories:\n\n1. Base Quantities (بنیادی مقداریں): Minimum number of independent physical quantities that cannot be defined in terms of other quantities. The International System of Units (SI) established 7 base quantities:\n   • Length (m - Meter)\n   • Mass (kg - Kilogram)\n   • Time (s - Second)\n   • Electric Current (A - Ampere)\n   • Thermodynamic Temperature (K - Kelvin)\n   • Amount of Substance (mol - Mole)\n   • Luminous Intensity (cd - Candela)\n\n2. Derived Quantities (ماخوذ مقداریں): Physical quantities whose definitions depend upon base physical quantities and are expressed as algebraic products or quotients of base units.\nExamples:\n   • Velocity: v = displacement / time (m/s)\n   • Acceleration: a = velocity / time (m/s²)\n   • Force: F = m × a (kg·m/s² or Newton, N)\n   • Work / Energy: W = F × d (N·m or Joule, J)\n   • Pressure: P = Force / Area (N/m² or Pascal, Pa)',
        simpleExplanation: 'Base quantities are like building blocks (atta, doodh, cheeni). Derived quantities are the dishes prepared using them (halwa, kheer). You cannot make milk from halwa, but you make halwa from milk!',
        funnyRealWorldAnalogy: 'Think of 7 Base Units like the 7 permanent members of your cricket gully team. Every victory, run rate, or boundary scored is derived from them!',
        keyPoints: [
          'There are strictly 7 SI Base Quantities and 7 Base Units.',
          'All other mechanical, electrical, and thermal quantities are derived.',
          'Prefixes are powers of 10 used to simplify very large or very small values.',
          'Scientific notation: A number written as M × 10^n where 1 ≤ M < 10.'
        ]
      },
      {
        heading: '2. Measuring Instruments & Zero Error (پیمائشی آلات اور زیرو ایرر)',
        content: 'Precision in physics depends entirely on measuring instruments and eliminating systematic errors.\n\n1. Meter Rule & Measuring Tape: Smallest division is 1 mm (0.1 cm). This is its Least Count.\n\n2. Vernier Caliper (ورنیئر کیلیپرز):\n   • Purpose: Measures internal/external diameter and depth of small objects.\n   • Construction: Main scale (graduated in mm) + Vernier scale (10 divisions sliding over 9 mm of main scale).\n   • Least Count = Smallest main scale division / Total vernier divisions = 1 mm / 10 = 0.1 mm = 0.01 cm.\n   • Zero Error: When jaws touch each other, if vernier zero aligns with main scale zero, there is NO zero error.\n   • Positive Zero Error (+): Vernier zero is to the RIGHT of main scale zero. Correction: Subtract error from reading.\n   • Negative Zero Error (-): Vernier zero is to the LEFT of main scale zero. Correction: Add error to reading.\n\n3. Micrometer Screw Gauge (مائیکرو میٹر اسکرو گیج):\n   • Purpose: Measures thickness of thin wires, sheets, and small sphere diameters with extreme precision.\n   • Pitch: Linear distance moved by thimble in one full rotation (usually 0.5 mm or 1 mm).\n   • Least Count = Pitch / Total circular scale divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm.\n   • Has 10 times higher precision than a Vernier Caliper!',
        simpleExplanation: 'If a digital bathroom scale shows +2 kg when empty, and you step on it and see 62 kg, your real weight is 62 - 2 = 60 kg! Positive error is always subtracted algebraically.',
        funnyRealWorldAnalogy: 'Zero error is like that cousin who always arrives 15 minutes late. You know you have to adjust the clock to find the real time!',
        keyPoints: [
          'Vernier Least Count = 0.1 mm (0.01 cm).',
          'Screw Gauge Least Count = 0.01 mm (0.001 cm).',
          'Observed Reading = Main Scale Reading + (Coinciding Division × Least Count).',
          'Correct Reading = Observed Reading - (Zero Error).'
        ]
      },
      {
        heading: '3. Significant Figures & Rounding Off (اہم ہندسے)',
        content: 'Significant figures in any measurement are all the accurately known digits plus the first doubtful digit.\n\nRules for Finding Significant Figures:\n1. All non-zero digits are significant (e.g., 285 has 3 significant figures).\n2. Zeros between non-zero digits are always significant (e.g., 2005 has 4 significant figures).\n3. Leading zeros (zeros to the left of the first non-zero digit) are NEVER significant; they only locate decimal place (e.g., 0.0034 has 2 significant figures).\n4. Trailing zeros in a number with a decimal point ARE significant (e.g., 45.00 has 4 significant figures).\n5. Trailing zeros in a whole number without a decimal may or may not be significant depending on instrument accuracy (e.g., 8,000 kg).\n\nRounding Off Rules:\n• If dropped digit is > 5, increase preceding digit by 1.\n• If dropped digit is < 5, leave preceding digit unchanged.\n• If dropped digit is exactly 5: make preceding digit even (if odd, add 1; if even, leave as is).',
        simpleExplanation: 'Significant figures tell you how trustworthy your instrument is. A shopkeeper balance cannot tell you mass up to 5 decimal places!',
        funnyRealWorldAnalogy: 'Writing 5.000000 kg for a bag of potatoes doesn\'t make the potatoes taste better, it just shows your calculator had extra pixels!',
        keyPoints: [
          'In multiplication/division, final answer retains the least number of significant figures.',
          'In addition/subtraction, final answer retains the least number of decimal places.',
          'Standard scientific notation keeps exactly one non-zero digit before decimal point.'
        ]
      }
    ],
    definitions: [
      {
        term: 'Physical Quantity',
        urduTerm: 'طبیعی مقدار',
        definition: 'Any measurable quantity in terms of which physical laws can be expressed. It possesses both numerical magnitude and a unit.',
        examTip: 'Must mention both parts: numerical magnitude and unit (e.g. 5 kg).'
      },
      {
        term: 'Least Count',
        urduTerm: 'کم ترین شمار',
        definition: 'The smallest value that can be measured accurately by a measuring instrument.',
        examTip: 'Frequently tested in BSEK short questions. State formulas for both instruments.'
      },
      {
        term: 'Scientific Notation',
        urduTerm: 'سائنسی انداز تحریر',
        definition: 'A method of expressing numbers that are too large or small, in the standard form M × 10^n where 1 ≤ M < 10 and n is an integer.',
        examTip: 'Always convert final answers in numericals to scientific notation.'
      },
      {
        term: 'Zero Error',
        urduTerm: 'زیرو ایرر / صفری خطا',
        definition: 'A systematic instrumental error arising when the zero mark of the measuring scale does not coincide with the reference zero when jaws are fully closed.',
        examTip: 'Remember: Correct reading = Observed reading - Zero error.'
      }
    ],
    formulas: [
      {
        name: 'Least Count of Vernier Caliper',
        formula: 'L.C. = Smallest main scale division / Total vernier scale divisions = 1 mm / 10 = 0.1 mm = 0.01 cm',
        units: 'mm or cm',
        description: 'Used to measure length, internal and external diameter of small cylinders.'
      },
      {
        name: 'Least Count of Screw Gauge',
        formula: 'L.C. = Pitch / Total circular scale divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm',
        units: 'mm or cm',
        description: 'Used to measure diameter of thin wires and thickness of glass plates.'
      },
      {
        name: 'Pitch of Screw Gauge',
        formula: 'Pitch = Distance moved on linear main scale / Number of complete rotations',
        units: 'mm',
        description: 'Linear distance advanced by the circular thimble in one complete 360° turn.'
      },
      {
        name: 'Density Formula',
        formula: 'ρ = Mass / Volume = m / V',
        units: 'kg/m³ or g/cm³',
        description: 'Mass per unit volume of a substance.'
      }
    ],
    memoryTricks: [
      {
        title: '7 Base SI Units Mnemonic',
        trick: 'L-M-T-C-T-A-L ("Look My Teacher Can Teach All Lessons")',
        explanation: 'Length, Mass, Time, Current, Temperature, Amount of substance, Luminous intensity.'
      },
      {
        title: 'Zero Error Algebraic Sign',
        trick: 'Right = Positive (Subtract), Left = Negative (Add)',
        explanation: 'If Vernier zero is to the right of main scale zero, it is positive error. Always subtract it algebraically.'
      }
    ],
    mcqs: [
      {
        id: 'phy-mcq-1',
        question: 'The least count of a standard Vernier Caliper having 10 vernier divisions is:',
        options: ['0.01 mm', '0.1 mm', '0.001 mm', '1.0 mm'],
        correctIndex: 1,
        explanation: 'Least count = 1 mm / 10 = 0.1 mm (or 0.01 cm).',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'phy-mcq-2',
        question: 'Which one of the following is a derived physical quantity?',
        options: ['Electric Current', 'Luminous Intensity', 'Velocity', 'Temperature'],
        correctIndex: 2,
        explanation: 'Velocity is a derived quantity (displacement / time). Current, intensity, and temperature are base quantities.',
        difficulty: 'easy',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'phy-mcq-3',
        question: 'If the zero mark of the vernier scale lies to the right of the main scale zero mark, the zero error is:',
        options: ['Negative and to be added', 'Positive and to be subtracted', 'Zero', 'Negligible'],
        correctIndex: 1,
        explanation: 'To the right means positive zero error. In zero correction, it is subtracted from observed reading.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2021'
      },
      {
        id: 'phy-mcq-4',
        question: 'A micrometer screw gauge has pitch 0.5 mm and 50 circular divisions. Its least count in cm is:',
        options: ['0.01 cm', '0.001 cm', '0.1 cm', '0.05 cm'],
        correctIndex: 1,
        explanation: 'L.C. = 0.5 mm / 50 = 0.01 mm. In cm: 0.01 / 10 = 0.001 cm. Watch the units carefully!',
        difficulty: 'hard',
        boardTag: 'BSEK Karachi 2019'
      },
      {
        id: 'phy-mcq-5',
        question: 'The number of significant figures in 0.0004050 is:',
        options: ['3', '4', '7', '5'],
        correctIndex: 1,
        explanation: 'Leading zeros are not significant. Digits 4, 0, 5 and the trailing zero are significant (total 4).',
        difficulty: 'medium',
        boardTag: 'Sukkur Board 2022'
      },
      {
        id: 'phy-mcq-6',
        question: 'One femto is equal to:',
        options: ['10^-12', '10^-15', '10^-9', '10^-18'],
        correctIndex: 1,
        explanation: 'Femto is the SI prefix for 10^-15. Pico is 10^-12, nano is 10^-9, atto is 10^-18.',
        difficulty: 'easy',
        boardTag: 'Larkana Board 2020'
      },
      {
        id: 'phy-mcq-7',
        question: 'An interval of 200 microseconds is equivalent to:',
        options: ['0.2 s', '2 × 10^-4 s', '2 × 10^-6 s', '2 × 10^-3 s'],
        correctIndex: 1,
        explanation: '200 μs = 200 × 10^-6 s = 2 × 10^2 × 10^-6 s = 2 × 10^-4 s.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2018'
      },
      {
        id: 'phy-mcq-8',
        question: 'Which of the following instruments is most suitable to measure the internal diameter of a test tube?',
        options: ['Meter rule', 'Screw gauge', 'Vernier caliper', 'Measuring tape'],
        correctIndex: 2,
        explanation: 'Vernier caliper has upper internal jaws specifically designed to measure internal diameters.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'phy-mcq-9',
        question: 'Express 0.00000000045 meters in scientific notation:',
        options: ['4.5 × 10^-10 m', '45 × 10^-9 m', '4.5 × 10^-9 m', '0.45 × 10^-10 m'],
        correctIndex: 0,
        explanation: 'Moving the decimal point 10 places to the right gives 4.5 × 10^-10 m.',
        difficulty: 'medium',
        boardTag: 'Model Paper BSEK'
      },
      {
        id: 'phy-mcq-10',
        question: 'The unit of solid angle in SI is:',
        options: ['Radian', 'Steradian', 'Degree', 'Revolution'],
        correctIndex: 1,
        explanation: 'Steradian (sr) is the supplementary SI unit for solid angle, while Radian (rad) is for plane angle.',
        difficulty: 'hard',
        boardTag: 'FBISE / BSEK 2021'
      }
    ],
    shortQuestions: [
      {
        id: 'phy-sq-1',
        question: 'Differentiate between Base Quantities and Derived Quantities with 3 examples each.',
        urduQuestion: 'بنیادی اور ماخوذ مقداروں میں تین تین مثالوں کے ساتھ فرق واضح کریں۔',
        answer: '1. Base Quantities (بنیادی مقداریں):\n• Physical quantities that cannot be defined in terms of any other physical quantities.\n• They serve as the foundation of the SI system.\n• Examples: Length (meter, m), Mass (kilogram, kg), Time (second, s).\n\n2. Derived Quantities (ماخوذ مقداریں):\n• Physical quantities whose definitions are based on or derived from base quantities through multiplication or division.\n• Examples: Velocity (m/s), Force (N = kg·m/s²), Work/Energy (J = N·m).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2018'
      },
      {
        id: 'phy-sq-2',
        question: 'What is Zero Error? Why is it necessary to calculate zero error in measuring instruments?',
        urduQuestion: 'زیرو ایرر کیا ہے؟ پیمائشی آلات میں صفری خطا معلوم کرنا کیوں ضروری ہے؟',
        answer: 'Zero error is a systematic instrumental error that occurs when the zero mark of the movable vernier or circular scale does not coincide with the zero mark of the main scale upon closing the jaws.\n\nNecessity of calculation:\n1. It prevents systematic measurement inaccuracies in practical laboratory experiments.\n2. By subtracting the zero error algebraically from the observed reading (Correct Reading = Observed Reading - Zero Error), the true dimension of the object is obtained.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2019, 2016'
      },
      {
        id: 'phy-sq-3',
        question: 'Explain why a Micrometer Screw Gauge gives a more precise reading than a Vernier Caliper.',
        urduQuestion: 'مائیکرو میٹر اسکرو گیج ورنیئر کیلیپرز سے زیادہ درست پیمائش کیوں فراہم کرتا ہے؟',
        answer: 'Precision of an instrument is inversely proportional to its least count. The smaller the least count, the greater the precision.\n• Least count of standard Vernier Caliper = 0.1 mm (0.01 cm).\n• Least count of Micrometer Screw Gauge = 0.01 mm (0.001 cm).\nBecause the screw gauge can measure values 10 times smaller than the vernier caliper, it provides significantly higher precision and sensitivity.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BISE Hyderabad 2021, BSEK 2017'
      },
      {
        id: 'phy-sq-4',
        question: 'Define Scientific Notation and write 0.0000548 kg and 384,000,000 m in standard scientific form.',
        urduQuestion: 'سائنسی انداز تحریر کی تعریف کریں اور دی گئی قیمتوں کو سائنسی فارم میں لکھیں۔',
        answer: 'Scientific Notation is a standardized method of writing numbers in the form M × 10^n, where M is a number between 1 and 10 (1 ≤ M < 10) and n is an integer power of 10.\n\nConversions:\n1. 0.0000548 kg = 5.48 × 10^-5 kg\n2. 384,000,000 m (Mean distance to Moon) = 3.84 × 10^8 m.',
        marks: 3,
        isImportant: false,
        pastPaperInfo: 'BSEK Karachi 2020'
      },
      {
        id: 'phy-sq-5',
        question: 'What are Significant Figures? State any two main rules for determining significant figures.',
        urduQuestion: 'اہم ہندسوں سے کیا مراد ہے؟ اہم ہندسے معلوم کرنے کے دو بنیادی اصول لکھیں۔',
        answer: 'Significant figures in any measurement are all the accurately known digits plus the first doubtful (estimated) digit.\n\nTwo fundamental rules:\n1. All non-zero digits are significant (e.g., in 4,872 all 4 digits are significant).\n2. Zeros between non-zero digits are always significant (e.g., in 500.04 there are 5 significant figures).\n3. Leading zeros before the first non-zero digit are NOT significant (e.g., in 0.0025 there are only 2 significant figures).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2018'
      },
      {
        id: 'phy-sq-6',
        question: 'Calculate the least count of a screw gauge having pitch 1.0 mm and 100 divisions on its circular scale.',
        urduQuestion: 'ایک اسکرو گیج کا کم ترین شمار معلوم کریں جس کی پچ 1.0 mm اور 100 ڈویژنز ہیں۔',
        answer: 'Data:\n• Pitch of screw gauge = 1.0 mm\n• Total circular scale divisions = 100\n\nFormula:\nLeast Count (L.C.) = Pitch / Total circular scale divisions\n\nCalculation:\nL.C. = 1.0 mm / 100 = 0.01 mm\nIn centimeters: 0.01 mm / 10 = 0.001 cm.\n\nAnswer: Least count is 0.01 mm (or 0.001 cm).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023 Section B Numerical'
      },
      {
        id: 'phy-sq-7',
        question: 'What is a Physical Balance? How does it differ from an electronic balance in lab precision?',
        urduQuestion: 'طبیعی ترازو کیا ہے اور یہ الیکٹرانک بیلنس سے کس طرح مختلف ہے؟',
        answer: 'A physical balance is a modified beam balance used in physics laboratories to measure mass by comparing an unknown gravitational mass with known standard brass masses.\n\nDifference:\n• Physical Balance least count: 0.01 g (0.1 g in older beam balances).\n• Modern Digital Electronic Balance least count: 0.001 g (or 0.0001 g for analytical balances).\nElectronic balance is faster, eliminates parallax error, and gives instant digital readouts.',
        marks: 3,
        isImportant: false,
        pastPaperInfo: 'Sukkur Board 2021'
      },
      {
        id: 'phy-sq-8',
        question: 'Name four SI prefixes with their symbols and decimal multiplying factors.',
        urduQuestion: 'چار SI سابقوں (Prefixes) کے نام، علامات اور ضربی فیکٹرز تحریر کریں۔',
        answer: '1. Mega (M) = 10^6 (1,000,000)\n2. Kilo (k) = 10^3 (1,000)\n3. Micro (μ) = 10^-6 (0.000001)\n4. Nano (n) = 10^-9 (0.000000001)\nPrefixes eliminate the need for writing tedious long strings of zeros.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK 2021, 2017'
      }
    ],
    longQuestions: [
      {
        id: 'phy-lq-1',
        question: 'Describe the construction and working of a Vernier Caliper with the help of a neat labelled diagram description. Explain step-by-step how to find the volume of a small cylinder.',
        urduQuestion: 'ورنیئر کیلیپرز کی بناوٹ اور طریقہ کار تفصیل سے بیان کریں اور ٹھوس سلنڈر کا حجم معلوم کرنے کا طریقہ تحریر کریں۔',
        answer: '1. Principle and Construction:\nA Vernier Caliper consists of two scales and three sets of jaws:\n• Main Scale: A steel rule graduated in centimeters and millimeters.\n• Vernier Scale: A sliding scale with 10 equal divisions spanning 9 mm of main scale.\n• Outside Jaws: For measuring outer dimensions (length, diameter).\n• Inside Jaws: For measuring internal bore or cavity diameters.\n• Depth Gauge Strip: Slender metal bar attached to vernier slider for container depth.\n\n2. Formula for Least Count:\nLeast Count (L.C.) = Smallest division on main scale / Total vernier divisions\nL.C. = 1 mm / 10 = 0.1 mm = 0.01 cm.\n\n3. Determination of Zero Error:\n• Close jaws without forcing. If vernier zero aligns with main scale zero, Zero Error = 0.\n• Positive Zero Error: Vernier 0 is to right of main scale 0. Zero error = +(n × L.C.).\n• Negative Zero Error: Vernier 0 is to left of main scale 0. Zero error = -(10 - n) × L.C.\n\n4. Step-by-Step Procedure for Volume of a Cylinder:\n• Step I (Diameter): Grip the cylinder gently between lower outside jaws. Read main scale division immediately to the left of vernier zero (MSR). Find the vernier division coinciding with any main scale line (VSR).\nObserved Diameter = MSR + (VSR × L.C.).\nCorrected Diameter (D) = Observed Diameter - Zero Error.\n• Step II (Length): Measure cylinder length (L) using outside jaws. Apply zero error correction to obtain corrected length (L).\n• Step III (Calculation): Radius R = D / 2.\nVolume of cylinder = π × R² × L = (π × D² × L) / 4.\nRecord 3 readings at different positions and compute mean volume.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2019, 2015 Section C'
      },
      {
        id: 'phy-lq-2',
        question: 'What is a Micrometer Screw Gauge? Explain its principle, pitch, least count, zero error types, and step-by-step method to measure the thickness of a glass slab.',
        urduQuestion: 'مائیکرو میٹر اسکرو گیج کیا ہے؟ اس کا اصول، پچ، کم ترین شمار اور شیشے کی تختی کی موٹائی ناپنے کا طریقہ بیان کریں۔',
        answer: '1. Principle of Screw Gauge:\nA screw gauge works on the principle that linear movement of a nut along an accurately machined screw is directly proportional to the rotation of the screw.\n\n2. Main Parts:\n• U-shaped metallic frame with a fixed stud (anvil) at one end.\n• Spindle: Movable metal shaft driven by the thimble.\n• Main Scale (Sleeve/Datum line): Graduated in millimeters.\n• Circular Scale (Thimble): Usually divided into 50 or 100 equal parts.\n• Ratchet: Provides uniform gentle tightening without damaging test specimens.\n\n3. Pitch and Least Count:\n• Pitch = Linear distance travelled in 1 full rotation = 0.5 mm.\n• Least Count = Pitch / Total circular divisions = 0.5 mm / 50 = 0.01 mm = 0.001 cm.\n\n4. Zero Error Identification:\n• Turn ratchet until spindle touches anvil. If circular zero aligns with baseline, Zero Error = 0.\n• Positive Zero Error: Circular zero is BELOW reference line. Error is positive and subtracted.\n• Negative Zero Error: Circular zero has passed ABOVE reference line. Error is negative and added.\n\n5. Measuring Thickness of Glass Slab:\n• Place slab between stud and spindle. Turn ratchet until it clicks 3 times.\n• Note main scale reading in mm (MSR).\n• Note circular scale division aligned with datum line (CSR).\n• Observed Thickness = MSR + (CSR × Least Count).\n• Corrected Thickness = Observed Thickness - Zero Error.\nRepeat across 3 different spots to find average thickness.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2017 Section C'
      },
      {
        id: 'phy-lq-3',
        question: 'Explain the International System of Units (SI). Detail the 7 base units, derived units, standard prefixes, and importance of SI in global scientific advancement.',
        urduQuestion: 'بین الاقوامی نظام اکائیات (SI) کی وضاحت کریں۔ سات بنیادی اکائیاں اور ماخوذ اکائیاں تفصیل سے تحریر کریں۔',
        answer: '1. Introduction to SI:\nIn 1960, the 11th General Conference on Weights and Measures adopted the International System of Units (Système International d\'Unités - SI) to establish a universal, decimal-based metric measurement standard worldwide.\n\n2. Seven Base Physical Quantities and SI Units:\n1. Length → Meter (m): Defined by the distance light travels in vacuum in 1/299,792,458 second.\n2. Mass → Kilogram (kg): Defined using the fixed numerical value of Planck\'s constant (h).\n3. Time → Second (s): Defined by 9,192,631,770 periods of radiation of Cesium-133 atom.\n4. Electric Current → Ampere (A): Flow of charge.\n5. Thermodynamic Temperature → Kelvin (K): Based on absolute zero.\n6. Amount of Substance → Mole (mol): Contains exactly 6.022 × 10^23 elementary entities.\n7. Luminous Intensity → Candela (cd): Intensity of monochromatic light in a given direction.\n\n3. Derived Units:\nCombinations of base units through multiplication/division. Examples:\n• Force: Newton (N = kg·m·s^-2)\n• Pressure: Pascal (Pa = N·m^-2)\n• Energy: Joule (J = N·m)\n• Power: Watt (W = J·s^-1)\n\n4. Scientific Importance:\nEliminated historical confusion of regional imperial units (yards, pounds, tolas), standardized engineering designs, and enables seamless international scientific collaboration.',
        marks: 8,
        isImportant: false,
        pastPaperInfo: 'BSEK 2021, 2016'
      }
    ],
    mainQuestions: [
      {
        id: 'phy-mq-1',
        question: 'Define Least Count of Vernier Caliper and Screw Gauge and compare their values in both mm and cm.',
        answer: 'Vernier Caliper: L.C. = 0.1 mm = 0.01 cm. Micrometer Screw Gauge: L.C. = 0.01 mm = 0.001 cm. Screw Gauge is 10 times more sensitive.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'Top Repeated Question in 10 Years'
      },
      {
        id: 'phy-mq-2',
        question: 'What is the function of the Ratchet in a Micrometer Screw Gauge?',
        answer: 'The ratchet prevents overtightening of the spindle against delicate specimens by slipping with a clicking sound once the correct measuring pressure is reached.',
        marks: 2,
        isImportant: true,
        pastPaperInfo: 'BSEK Exam Tip'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'phy-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'Calculate the least count of a micrometer screw gauge having pitch 1 mm and 100 divisions on the circular scale.',
        section: 'B (Short)',
        solution: 'Least count = Pitch / Total circular divisions = 1 mm / 100 = 0.01 mm = 0.001 cm.',
        frequency: 'Repeated 6 times in 10 years'
      },
      {
        id: 'phy-pp-2',
        year: 2022,
        board: 'BSEK Karachi',
        question: 'Name four SI prefixes with their symbols and multiplication factors.',
        section: 'B (Short)',
        solution: '1. Mega (M) = 10^6, 2. Kilo (k) = 10^3, 3. Milli (m) = 10^-3, 4. Micro (μ) = 10^-6.',
        frequency: 'Repeated 4 times in 10 years'
      },
      {
        id: 'phy-pp-3',
        year: 2021,
        board: 'BISE Hyderabad',
        question: 'What is positive and negative zero error in a Vernier Caliper? How is it corrected?',
        section: 'B (Short)',
        solution: 'Positive: Vernier 0 is right of main scale 0; subtracted algebraically. Negative: Vernier 0 is left; added algebraically.',
        frequency: 'Repeated 5 times in 10 years'
      },
      {
        id: 'phy-pp-4',
        year: 2019,
        board: 'BSEK Karachi',
        question: 'Describe the construction and working of Vernier Caliper to measure the diameter of a cylinder.',
        section: 'C (Long)',
        solution: 'Complete answer with main scale, vernier scale, zero error formula, and volume equation V = (πD²L)/4.',
        frequency: 'Repeated 4 times in 10 years'
      },
      {
        id: 'phy-pp-5',
        year: 2018,
        board: 'BSEK Karachi',
        question: 'Find the number of seconds in 1 year and express the answer in scientific notation.',
        section: 'B (Short)',
        solution: '1 year = 365 days × 24 hours × 3600 seconds = 31,536,000 s = 3.1536 × 10^7 seconds.',
        frequency: 'Repeated 3 times in 10 years'
      }
    ],
    quickRevision: [
      '7 SI Base Units: Meter (m), Kilogram (kg), Second (s), Ampere (A), Kelvin (K), Mole (mol), Candela (cd).',
      'Vernier Caliper Least Count = 0.1 mm (0.01 cm).',
      'Screw Gauge Least Count = 0.01 mm (0.001 cm). Has 10x higher precision.',
      'Correct Reading = Observed Reading - (Zero Error). Positive error is subtracted; negative error is added.',
      'Scientific notation standard format: M × 10^n where 1 ≤ M < 10.',
      'Prefixes: Tera (10^12), Giga (10^9), Mega (10^6), Kilo (10^3), Centi (10^-2), Milli (10^-3), Micro (10^-6), Nano (10^-9), Pico (10^-12).'
    ]
  },
  {
    id: 'phy-ch2',
    subjectId: 'physics',
    number: 2,
    title: 'Kinematics',
    urduTitle: 'حرکیات',
    description: 'Rest, motion, scalar and vector quantities, speed, velocity, uniform acceleration, graphical analysis, and derivation of the three equations of motion.',
    notes: [
      {
        heading: '1. Rest, Motion and Types of Motion (سکون، حرکت اور اقسام)',
        content: 'Kinematics is the study of motion of an object without discussing the cause (force) that produces motion.\n\n• Rest (حالت سکون): A body is said to be at rest if it does not change its position with respect to its surroundings.\n• Motion (حالت حرکت): A body is said to be in motion if it continually changes its position with respect to its surroundings.\n• State of rest and motion is strictly relative. An observer on a moving train sees co-passengers at rest, but a pedestrian on the platform sees them in fast motion.\n\nTypes of Motion:\n1. Translatory Motion (حرکت انتقالی): Every particle of the body moves in a line (straight or curved) without any rotation.\n   • Linear Motion: Motion in a straight line (e.g., car on a straight highway, freely falling apple).\n   • Circular Motion: Motion along a circular path (e.g., stone whirled with a string, toy train on circular track).\n   • Random Motion: Irregular, zig-zag, disordered motion (e.g., smoke particles, flying butterflies, Brownian motion of molecules).\n2. Rotatory Motion (گردشی حرکت): Spinning motion of a body about a fixed axis passing through itself (e.g., spinning top, ceiling fan, steering wheel).\n3. Vibratory / Oscillatory Motion (اہتزازی حرکت): Back and forth (to-and-fro) motion about a mean equilibrium position (e.g., clock pendulum, child on a playground swing, plucked guitar string).',
        simpleExplanation: 'Translatory is moving from Point A to Point B. Rotatory is spinning on your own axis like a beyblade. Vibratory is shaking back and forth like a phone on vibrate mode!',
        funnyRealWorldAnalogy: 'When your mother says "Sit still!", you are in vibratory motion trying not to move while your heart is racing at 100 bpm!',
        keyPoints: [
          'Translatory: Linear, Circular, or Random paths without rotation.',
          'Rotatory: Rotation around an internal pivot axis.',
          'Vibratory: To-and-fro periodic oscillation about mean position.'
        ]
      },
      {
        heading: '2. Scalars, Vectors, Speed, Velocity & Acceleration',
        content: '• Scalar Quantities (غیر سمتی مقداریں): Physical quantities completely specified by magnitude and unit only (no direction). Examples: Mass (5 kg), Time (10 s), Distance (20 m), Speed (15 m/s), Work, Energy, Temperature.\n• Vector Quantities (سمتی مقداریں): Physical quantities that require both magnitude, unit, and a specific direction. Examples: Displacement (20 m East), Velocity (15 m/s North), Force (50 N downward), Momentum, Acceleration.\n\nKey Concepts:\n• Distance (s): Total length of the actual path between two points (scalar, always positive, SI: meter).\n• Displacement (d): The shortest directed straight-line distance between initial and final points (vector, SI: meter).\n• Speed (v): Rate of distance covered. v = s / t (scalar, m/s).\n• Velocity (v): Rate of displacement covered. v = d / t (vector, m/s).\n• Acceleration (a): Rate of change of velocity with time. a = (Vf - Vi) / t (vector, m/s²).\n  - If velocity increases: positive acceleration.\n  - If velocity decreases: negative acceleration (Deceleration or Retardation).',
        simpleExplanation: 'Distance is the zig-zag route your rickshaw driver took through Karachi traffic. Displacement is the straight drone flight distance between your home and college!',
        funnyRealWorldAnalogy: 'Speed is how fast your rickshaw moves. Velocity is knowing whether it is taking you to college or in the opposite direction towards Hyderabad!',
        keyPoints: [
          'Distance ≥ |Displacement| always.',
          'Acceleration = (Final Velocity - Initial Velocity) / Time taken.',
          'Retardation is negative acceleration (e.g., when applying brakes).'
        ]
      },
      {
        heading: '3. Derivation of the Three Equations of Motion (تینوں مساواتوں کا ثبوت)',
        content: 'Consider a body moving in a straight line with initial velocity Vi and uniform acceleration a for time t, reaching final velocity Vf and covering distance S.\n\n1. First Equation of Motion (Vf = Vi + at):\n• By definition, Acceleration a = (Vf - Vi) / t\n• Cross multiplying: a · t = Vf - Vi\n• Rearranging terms:\n  Vf = Vi + a·t  (First Equation of Motion)\n\n2. Second Equation of Motion (S = Vi·t + 0.5·a·t²):\n• Average velocity = (Vi + Vf) / 2\n• Total distance S = Average Velocity × Time = [(Vi + Vf) / 2] × t\n• Substitute Vf = Vi + at from 1st equation:\n  S = [(Vi + (Vi + at)) / 2] × t\n  S = [(2Vi + at) / 2] × t = [Vi + 0.5 at] × t\n  S = Vi·t + (1/2) a·t²  (Second Equation of Motion)\n\n3. Third Equation of Motion (2aS = Vf² - Vi²):\n• From distance formula: S = [(Vi + Vf) / 2] × t\n• From 1st equation: t = (Vf - Vi) / a\n• Substituting t into distance equation:\n  S = [(Vf + Vi) / 2] × [(Vf - Vi) / a]\n  S = (Vf² - Vi²) / (2a)\n• Multiplying both sides by 2a:\n  2aS = Vf² - Vi²  (Third Equation of Motion)\n\nMotion Under Gravity:\nWhen an object falls freely near Earth surface, a = +g (+9.8 m/s²). When thrown vertically upward, a = -g (-9.8 m/s²). Replace S with height h.',
        simpleExplanation: 'These 3 formulas allow you to predict the future! If you drop an apple from a roof, you can calculate its speed and exact time before it hits the floor.',
        funnyRealWorldAnalogy: 'Think of Vi as your starting preparation, "at" as your late-night study booster, and Vf as your grand exam score!',
        keyPoints: [
          '1st: Vf = Vi + at (Use when distance S is not involved).',
          '2nd: S = Vi·t + 0.5 a·t² (Use when final velocity Vf is not involved).',
          '3rd: 2aS = Vf² - Vi² (Use when time t is not involved).'
        ]
      }
    ],
    definitions: [
      {
        term: 'Translatory Motion',
        urduTerm: 'حرکت انتقالی',
        definition: 'Motion in which all particles of a body move parallel to each other along straight or curved paths without rotation.',
        examTip: 'State the 3 sub-types: Linear, Circular, and Random motion.'
      },
      {
        term: 'Uniform Acceleration',
        urduTerm: 'یکساں اسراع',
        definition: 'A body has uniform acceleration if its velocity changes by equal amounts in equal intervals of time, however small the intervals may be.',
        examTip: 'Formula: a = (Vf - Vi) / t. SI Unit: m/s².'
      },
      {
        term: 'Terminal Velocity',
        urduTerm: 'انتہائی ولاسٹی',
        definition: 'The maximum constant velocity achieved by a falling body when downward gravitational force equals upward resistive drag force.',
        examTip: 'At terminal velocity, net force = 0 and acceleration = 0.'
      }
    ],
    formulas: [
      {
        name: 'First Equation of Motion',
        formula: 'Vf = Vi + a·t',
        units: 'm/s',
        description: 'Calculates final velocity after time t with uniform acceleration.'
      },
      {
        name: 'Second Equation of Motion',
        formula: 'S = Vi·t + 0.5·a·t²',
        units: 'meters (m)',
        description: 'Calculates total distance covered during acceleration.'
      },
      {
        name: 'Third Equation of Motion',
        formula: '2·a·S = Vf² - Vi²',
        units: 'm²/s²',
        description: 'Relates velocities, acceleration, and distance without involving time.'
      },
      {
        name: 'Speed and Velocity',
        formula: 'Speed v = s / t | Velocity v = d / t',
        units: 'm/s',
        description: 'Rate of change of distance and displacement respectively.'
      }
    ],
    memoryTricks: [
      {
        title: 'Which Equation to Pick?',
        trick: 'No S? Use 1st. No Vf? Use 2nd. No t? Use 3rd!',
        explanation: 'Scan the numerical data. If distance S is absent, pick Vf = Vi + at. If Vf is absent, pick S = Vi t + 0.5 a t². If time t is absent, pick 2aS = Vf² - Vi².'
      }
    ],
    mcqs: [
      {
        id: 'phy-ch2-mcq-1',
        question: 'The motion of a spinning top is an example of:',
        options: ['Translatory motion', 'Rotatory motion', 'Vibratory motion', 'Random motion'],
        correctIndex: 1,
        explanation: 'Spinning top rotates around its own internal axis, which is defined as rotatory motion.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'phy-ch2-mcq-2',
        question: 'A car starts from rest and moves with uniform acceleration 2 m/s² for 5 s. Its final velocity is:',
        options: ['5 m/s', '7 m/s', '10 m/s', '20 m/s'],
        correctIndex: 2,
        explanation: 'Vf = Vi + at = 0 + (2 × 5) = 10 m/s.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2022'
      },
      {
        id: 'phy-ch2-mcq-3',
        question: 'The slope of a distance-time graph represents:',
        options: ['Acceleration', 'Speed', 'Distance', 'Force'],
        correctIndex: 1,
        explanation: 'Slope = Change in distance / Change in time = Speed (v).',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2021'
      },
      {
        id: 'phy-ch2-mcq-4',
        question: 'The slope of a speed-time (velocity-time) graph gives:',
        options: ['Displacement', 'Acceleration', 'Work', 'Kinetic Energy'],
        correctIndex: 1,
        explanation: 'Slope = Δv / Δt = Acceleration (a).',
        difficulty: 'medium',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'phy-ch2-mcq-5',
        question: 'The area under a speed-time graph represents:',
        options: ['Acceleration', 'Distance travelled', 'Force', 'Momentum'],
        correctIndex: 1,
        explanation: 'Area = speed × time = distance (s).',
        difficulty: 'hard',
        boardTag: 'BSEK Karachi 2020'
      },
      {
        id: 'phy-ch2-mcq-6',
        question: 'A ball is thrown vertically upwards with 20 m/s. At its highest point, its velocity and acceleration are:',
        options: ['v = 0, a = 0', 'v = 0, a = 9.8 m/s² downward', 'v = 20 m/s, a = 0', 'v = 0, a = 9.8 m/s² upward'],
        correctIndex: 1,
        explanation: 'At peak height, instantaneous velocity stops (v = 0), but gravity continuously acts downward (a = 9.8 m/s²).',
        difficulty: 'hard',
        boardTag: 'Model Paper BSEK'
      },
      {
        id: 'phy-ch2-mcq-7',
        question: 'Which of the following is a vector quantity?',
        options: ['Speed', 'Displacement', 'Mass', 'Time'],
        correctIndex: 1,
        explanation: 'Displacement requires both magnitude and direction, hence it is a vector quantity.',
        difficulty: 'easy',
        boardTag: 'Sukkur Board 2021'
      },
      {
        id: 'phy-ch2-mcq-8',
        question: 'A body dropped from a tower of height 45 m takes what time to strike the ground? (g = 10 m/s²)',
        options: ['3 seconds', '4.5 seconds', '9 seconds', '1.5 seconds'],
        correctIndex: 0,
        explanation: 'h = 0.5 g t² => 45 = 0.5 × 10 × t² = 5 t² => t² = 9 => t = 3 seconds.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2019'
      },
      {
        id: 'phy-ch2-mcq-9',
        question: 'If a body moves with constant velocity, its acceleration is:',
        options: ['Zero', 'Maximum', 'Negative', 'Infinite'],
        correctIndex: 0,
        explanation: 'Acceleration is the rate of change of velocity. If velocity is constant, Δv = 0, so a = 0.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2018'
      },
      {
        id: 'phy-ch2-mcq-10',
        question: 'Deceleration (Retardation) always has:',
        options: ['Positive sign', 'Negative sign', 'Zero value', 'Infinite value'],
        correctIndex: 1,
        explanation: 'Deceleration is negative acceleration occurring when final velocity is less than initial velocity.',
        difficulty: 'easy',
        boardTag: 'Larkana Board 2022'
      }
    ],
    shortQuestions: [
      {
        id: 'phy-ch2-sq-1',
        question: 'Differentiate between Distance and Displacement with 3 points of comparison.',
        urduQuestion: 'فاصلہ اور ہٹاؤ میں تین اہم فرق بیان کریں۔',
        answer: '1. Distance (فاصلہ):\n• Total length of path traversed between two points.\n• Scalar quantity (has magnitude only, no direction).\n• Always positive or zero, never negative.\n• Formula: s = v × t.\n\n2. Displacement (ہٹاؤ):\n• Shortest directed straight-line vector from initial position to final position.\n• Vector quantity (requires magnitude, unit, and direction).\n• Can be positive, negative, or zero (if a body returns to starting point).\n• Formula: d = v × t (with vector arrow).',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2018'
      },
      {
        id: 'phy-ch2-sq-2',
        question: 'Differentiate between Speed and Velocity.',
        urduQuestion: 'رفتار (Speed) اور ولاسٹی (Velocity) میں فرق واضح کریں۔',
        answer: '• Speed (رفتار): Rate of distance covered with respect to time (s/t). Scalar quantity. SI unit: m/s.\n• Velocity (ولاسٹی): Rate of displacement covered with respect to time (d/t). Vector quantity. SI unit: m/s.\nSpeed can never be negative, whereas velocity can be negative depending on chosen directional axis.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2019'
      },
      {
        id: 'phy-ch2-sq-3',
        question: 'Define Uniform Acceleration. What is Retardation (Deceleration)?',
        urduQuestion: 'یکساں اسراع اور منفی اسراع (ریٹارڈیشن) کی تعریف کریں۔',
        answer: '1. Uniform Acceleration: A body possesses uniform acceleration if its velocity changes by equal amounts in equal intervals of time, however small the intervals may be.\n2. Retardation / Deceleration: Negative acceleration that occurs when the velocity of a moving object decreases over time (Vf < Vi), such as when vehicle brakes are applied.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BISE Hyderabad 2022, BSEK 2017'
      },
      {
        id: 'phy-ch2-sq-4',
        question: 'A car starts from rest and attains a velocity of 20 m/s in 8 seconds. Find its acceleration and distance covered.',
        urduQuestion: 'ایک کار ساکن حالت سے شروع ہو کر 8 سیکنڈ میں 20 m/s ولاسٹی حاصل کرتی ہے۔ اسراع اور طے کردہ فاصلہ معلوم کریں۔',
        answer: 'Data:\n• Initial velocity Vi = 0 m/s\n• Final velocity Vf = 20 m/s\n• Time t = 8 s\n\n1. Acceleration:\na = (Vf - Vi) / t = (20 - 0) / 8 = 2.5 m/s².\n\n2. Distance:\nS = Vi·t + 0.5 a·t² = 0 + (0.5 × 2.5 × 8²) = 0.5 × 2.5 × 64 = 80 meters.\n\nAnswer: Acceleration = 2.5 m/s², Distance = 80 m.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023 Section B Numerical'
      },
      {
        id: 'phy-ch2-sq-5',
        question: 'Prove that under free fall from height h starting from rest, the final velocity Vf = √(2gh).',
        urduQuestion: 'ثابت کریں کہ اونچائی سے گرنے والے جسم کی حتمی ولاسٹی Vf = √(2gh) ہے۔',
        answer: 'Using the 3rd Equation of Motion for gravitational free fall:\n2 g h = Vf² - Vi²\nSince the body is dropped from rest, initial velocity Vi = 0.\n2 g h = Vf² - 0\nVf² = 2 g h\nTaking square root on both sides:\nVf = √(2gh).\nHence proved. The velocity depends only on height and acceleration due to gravity, independent of mass.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2021, 2016'
      },
      {
        id: 'phy-ch2-sq-6',
        question: 'What is meant by relative motion? Give an everyday Pakistani example.',
        urduQuestion: 'اضافی حرکت سے کیا مراد ہے؟ روزمرہ زندگی سے مثال دیں۔',
        answer: 'Relative motion means that state of rest or motion is not absolute; it depends entirely on the reference frame of the observer.\nExample: When you sit in a Karachi circular train or intercity bus, you are at rest relative to the passengers sitting beside you, but moving at 70 km/h relative to the trees, electric poles, and shops outside on the road.',
        marks: 3,
        isImportant: false,
        pastPaperInfo: 'BSEK 2020'
      }
    ],
    longQuestions: [
      {
        id: 'phy-ch2-lq-1',
        question: 'Derive the Second and Third Equations of Motion with the help of a Speed-Time Graph for a uniformly accelerated body.',
        urduQuestion: 'اسپیڈ ٹائم گراف کی مدد سے حرکت کی دوسری اور تیسری مساوات اخذ کریں۔',
        answer: '1. Graphical Representation:\nConsider a body moving with initial velocity Vi represented by line OA. It accelerates uniformly at rate a for time t represented by OC. The final velocity Vf is represented by line BC.\n• Area under speed-time graph gives total distance travelled S.\n• Total Area = Area of rectangle OACD + Area of triangle ABD.\n\n2. Derivation of 2nd Equation (S = Vi·t + 0.5·a·t²):\n• Area of rectangle OACD = Length × Breadth = Vi × t.\n• Area of triangle ABD = 0.5 × Base × Height = 0.5 × t × (Vf - Vi).\n• From 1st equation: Vf - Vi = a·t.\n• Therefore, Area of triangle = 0.5 × t × (a·t) = 0.5 a·t².\n• Total Distance S = Area of rectangle + Area of triangle:\n  S = Vi·t + (1/2) a·t²  (Hence proved).\n\n3. Derivation of 3rd Equation (2aS = Vf² - Vi²):\n• Total area of trapezium OABC = S = [(Sum of parallel sides) / 2] × Base\n• S = [(OA + BC) / 2] × OC = [(Vi + Vf) / 2] × t\n• Multiply both sides by (BC - BD)/OC = a:\n  S × a = [(Vf + Vi) / 2] × [(Vf - Vi) / t] × t\n  a·S = (Vf² - Vi²) / 2\n• Cross-multiplying:\n  2 a S = Vf² - Vi²  (Hence proved).',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2022, 2018 Section C'
      },
      {
        id: 'phy-ch2-lq-2',
        question: 'Define Translatory, Rotatory, and Vibratory motion. Give two real-world examples of each. Explain why rest and motion are relative concepts.',
        urduQuestion: 'حرکت کی تینوں اقسام (انتقالی، گردشی، اہتزازی) کی تفصیلی وضاحت مع مثالیں کریں۔',
        answer: '1. Translatory Motion (حرکت انتقالی):\nMotion in which every particle of the object shifts along straight or curved paths uniformly.\n• Linear: Freely falling stone, sprinter on 100m straight track.\n• Circular: Stone whirled in a circular loop, passenger riding giant Ferris wheel.\n• Random: Motion of gas molecules, erratic flight of a fly.\n\n2. Rotatory Motion (گردشی حرکت):\nThe spinning motion of a body around a fixed internal axis.\n• Examples: Earth rotating on its geographic axis (causing day and night), spinning bicycle wheel.\n\n3. Vibratory Motion (اہتزازی حرکت):\nTo-and-fro oscillatory motion about a stable mean position.\n• Examples: Simple pendulum of grandfather clock, vocal cords vibrating when speaking.\n\n4. Relativity of Rest and Motion:\nA body cannot be declared in absolute rest or motion without choosing a frame of reference. An astronaut floating inside the International Space Station is at rest relative to the cabin walls, but moving at 27,600 km/h relative to the Earth.',
        marks: 8,
        isImportant: false,
        pastPaperInfo: 'BSEK 2019 Section C'
      }
    ],
    mainQuestions: [
      {
        id: 'phy-ch2-mq-1',
        question: 'State the 3 Equations of Motion and specify the condition under which they are valid.',
        answer: '1. Vf = Vi + at\n2. S = Vi·t + 0.5 a·t²\n3. 2aS = Vf² - Vi²\nCondition: Valid ONLY for motion in a straight line with UNIFORM acceleration.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'High Probability Question'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'phy-ch2-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'A train starts from rest with an acceleration of 0.5 m/s². Find its speed in km/h when it has moved through 100 m.',
        section: 'B (Short)',
        solution: 'Vi = 0, a = 0.5 m/s², S = 100 m. 2aS = Vf² - Vi² => 2(0.5)(100) = Vf² => Vf² = 100 => Vf = 10 m/s. In km/h: 10 × 3.6 = 36 km/h.',
        frequency: 'Repeated 5 times in 10 years'
      },
      {
        id: 'phy-ch2-pp-2',
        year: 2022,
        board: 'BSEK Karachi',
        question: 'Differentiate between speed and velocity. Can a body have constant speed but varying velocity?',
        section: 'B (Short)',
        solution: 'Speed is scalar, velocity is vector. YES: a body in uniform circular motion has constant speed but constantly changing velocity direction.',
        frequency: 'Repeated 4 times in 10 years'
      },
      {
        id: 'phy-ch2-pp-3',
        year: 2020,
        board: 'BSEK Karachi',
        question: 'Derive 1st equation of motion Vf = Vi + at from acceleration definition.',
        section: 'B (Short)',
        solution: 'By definition a = (Vf - Vi)/t => at = Vf - Vi => Vf = Vi + at.',
        frequency: 'Repeated 6 times in 10 years'
      },
      {
        id: 'phy-ch2-pp-4',
        year: 2019,
        board: 'BISE Sukkur',
        question: 'A ball is thrown vertically upward with 30 m/s. Calculate maximum height reached. (g = 10 m/s²)',
        section: 'B (Short)',
        solution: 'Vi = 30 m/s, Vf = 0, g = -10 m/s². 2gh = Vf² - Vi² => 2(-10)h = 0 - 900 => -20h = -900 => h = 45 meters.',
        frequency: 'Repeated 4 times in 10 years'
      }
    ],
    quickRevision: [
      'Translatory motion has 3 forms: Linear, Circular, and Random.',
      'Scalar has magnitude only (Mass, Time, Speed). Vector has magnitude + direction (Displacement, Velocity, Force).',
      '1st Equation: Vf = Vi + at.',
      '2nd Equation: S = Vi·t + 0.5 a·t².',
      '3rd Equation: 2aS = Vf² - Vi².',
      'Under gravity: g = +9.8 m/s² for downward motion, g = -9.8 m/s² for upward motion.',
      'Slope of distance-time graph = Speed; Slope of velocity-time graph = Acceleration; Area under velocity-time graph = Distance.'
    ]
  }
];

export const PHYSICS_SUBJECT: Subject = {
  id: 'physics',
  title: 'Physics',
  urduTitle: 'طبیعیات',
  iconName: 'Zap',
  color: 'from-blue-600 to-indigo-600',
  bgColor: 'bg-blue-50 text-blue-700 border-blue-200',
  badgeColor: 'bg-blue-600 text-white',
  totalChapters: 2,
  description: 'Complete Class 9 Physics: Physical Quantities, Kinematics, Formulas, Numericals, MCQs, and 10-Year Sindh Board Past Papers.',
  chapters: PHYSICS_CHAPTERS
};
