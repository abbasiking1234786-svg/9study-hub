import { Chapter, Subject } from '../types';

export const MATH_CHAPTERS: Chapter[] = [
  {
    id: 'math-ch1',
    subjectId: 'mathematics',
    number: 1,
    title: 'Real and Complex Numbers',
    urduTitle: 'حقیقی اور غیر حقیقی اعداد',
    description: 'Rational and irrational numbers, radical expressions, laws of exponents, imaginary unit i, and algebraic operations on complex numbers.',
    notes: [
      {
        heading: '1. Real Numbers System: Rational & Irrational Numbers (حقیقی اعداد کا نظام)',
        content: 'The set of real numbers ℝ is the union of rational numbers (ℚ) and irrational numbers (ℚ\').\n\n1. Natural Numbers (ℕ) = {1, 2, 3, 4, ...}\n2. Whole Numbers (𝕎) = {0, 1, 2, 3, ...}\n3. Integers (ℤ) = {..., -3, -2, -1, 0, 1, 2, 3, ...}\n4. Rational Numbers (ℚ): Numbers that can be written in the form p/q, where p, q ∈ ℤ and q ≠ 0.\n   • In decimal representation, rational numbers are either terminating (e.g., 1/4 = 0.25, 3/8 = 0.375) or non-terminating repeating/recurring (e.g., 1/3 = 0.333..., 2/7 = 0.285714...).\n5. Irrational Numbers (ℚ\'): Numbers that cannot be expressed in the form p/q. Their decimal representation is non-terminating and non-repeating (e.g., √2, √3, √5, π = 3.14159..., e).\n\nProperties of Real Numbers:\n• Closure, Commutative, Associative, Identity (0 for addition, 1 for multiplication), Inverse (-a for addition, 1/a for multiplication), and Distributive property of multiplication over addition.',
        simpleExplanation: 'Rational numbers are friendly fractions (p/q) like 1/2 of a biryani plate. Irrational numbers like √2 or π never end and never repeat, like an infinite song playlist!',
        funnyRealWorldAnalogy: 'Think of Rational numbers as shopkeepers giving you exact change (0.50 rupees), and Irrational numbers like your younger sibling whose demands never stop and never follow any pattern!',
        keyPoints: [
          'Real numbers ℝ = ℚ ∪ ℚ\'.',
          'Terminating or repeating decimal = Rational.',
          'Non-terminating non-repeating decimal = Irrational.',
          'Square root of any prime number (√2, √3, √7) is always irrational.'
        ]
      },
      {
        heading: '2. Radicals and Laws of Exponents (جذری مقداریں اور قوت نما کے قوانین)',
        content: '1. Radicals and Radicands:\nIn the expression ⁿ√a, "√" is the radical sign, "n" is the index of the radical, and "a" is the radicand. In exponential form, ⁿ√a = a^(1/n).\n\n2. Laws of Indices / Exponents:\nFor real base a, b and rational powers m, n:\n• Product Law: a^m · a^n = a^(m + n)\n• Quotient Law: a^m / a^n = a^(m - n)\n• Power of Power: (a^m)^n = a^(m·n)\n• Power of Product: (a·b)^n = a^n · b^n\n• Power of Quotient: (a/b)^n = a^n / b^n\n• Zero Exponent Rule: a^0 = 1 (where a ≠ 0)\n• Negative Exponent Rule: a^(-n) = 1 / a^n',
        simpleExplanation: 'When multiplying same bases, add the powers. When dividing same bases, subtract the powers. Anything raised to power 0 equals 1!',
        funnyRealWorldAnalogy: 'Like packing boxes: putting 2 boxes with 3 shirts into a container means 2 × 3 = 6 shirts total (power of power rule)!',
        keyPoints: [
          'a^m × a^n = a^(m+n)',
          'a^m / a^n = a^(m-n)',
          'a^0 = 1 (critical for MCQs)',
          'a^(-n) = 1 / a^n'
        ]
      },
      {
        heading: '3. Complex Numbers: Imaginary Unit i, Conjugate & Modulus (مخلوط یا غیر حقیقی اعداد)',
        content: '1. Imaginary Unit i (Iota):\nSince the square of any real number is always non-negative, the equation x² + 1 = 0 has no real solution. Euler introduced the imaginary unit i such that:\n• i = √(-1)\n• i² = -1\n• i³ = i² · i = (-1) · i = -i\n• i⁴ = (i²)² = (-1)² = 1\nAny power of i can be evaluated by dividing the exponent by 4 and taking the remainder (e.g., i^99 = (i^4)^24 · i³ = 1 · (-i) = -i).\n\n2. Definition of Complex Number:\nA number of the form z = a + bi, where a, b ∈ ℝ and i = √(-1).\n• "a" is the Real Part: Re(z) = a\n• "b" is the Imaginary Part: Im(z) = b\n\n3. Complex Conjugate (مرافق مخلوط عدد):\nThe conjugate of z = a + bi is obtained by changing the sign of the imaginary part, denoted by z̄ = a - bi.\n• Example: If z = 3 - 5i, then z̄ = 3 + 5i.\n• Property: z · z̄ = (a + bi)(a - bi) = a² - (bi)² = a² + b² (always a non-negative real number!).\n\n4. Absolute Value / Modulus (مطلق قیمت):\nThe distance of z from origin in the complex Argand plane:\n• |z| = √(a² + b²)\n• Example: |3 + 4i| = √(3² + 4²) = √(9 + 16) = √25 = 5.',
        simpleExplanation: 'Real part is your real bank balance. Imaginary part "bi" is the dream lottery you hope to win! Together they make a complex number.',
        funnyRealWorldAnalogy: 'iota is like secret agent 007: square it, and it turns into -1; multiply it 4 times, and it is back to 1!',
        keyPoints: [
          'i = √(-1), i² = -1, i³ = -i, i⁴ = 1.',
          'Conjugate of a + bi is a - bi (only invert the sign of the imaginary i-term).',
          'Modulus |a + bi| = √(a² + b²).',
          'Division of complex numbers requires multiplying numerator and denominator by conjugate of denominator.'
        ]
      }
    ],
    definitions: [
      {
        term: 'Rational Number',
        urduTerm: 'ناطق عدد',
        definition: 'A number that can be expressed in the form p/q where p and q are integers and q ≠ 0.',
        examTip: 'Must mention q ≠ 0 and terminating/repeating decimal character.'
      },
      {
        term: 'Irrational Number',
        urduTerm: 'غیر ناطق عدد',
        definition: 'A real number that cannot be written in the form p/q. Its decimal expansion is non-terminating and non-recurring.',
        examTip: 'Classic example: √2, √3, π.'
      },
      {
        term: 'Complex Conjugate',
        urduTerm: 'مرافق مخلوط عدد',
        definition: 'For a complex number z = a + bi, its conjugate is z̄ = a - bi, formed by inverting the sign of its imaginary component.',
        examTip: 'Remember z · z̄ = a² + b² is always a pure real number.'
      },
      {
        term: 'Modulus of Complex Number',
        urduTerm: 'مخلوط عدد کی مطلق قیمت',
        definition: 'The geometric distance of the point (a, b) from the origin in the complex plane, given by |z| = √(a² + b²).',
        examTip: 'Always non-negative real number.'
      }
    ],
    formulas: [
      {
        name: 'Modulus of Complex Number',
        formula: '|z| = |a + bi| = √(a² + b²)',
        units: 'dimensionless scalar',
        description: 'Distance of complex number from origin.'
      },
      {
        name: 'Conjugate Product',
        formula: 'z · z̄ = (a + bi)(a - bi) = a² + b²',
        units: 'scalar',
        description: 'Product of a complex number with its conjugate is always real.'
      },
      {
        name: 'Powers of Iota',
        formula: 'i = √(-1), i² = -1, i³ = -i, i⁴ = 1',
        units: 'imaginary unit',
        description: 'Cyclic powers of i mod 4.'
      },
      {
        name: 'Quotient of Complex Numbers',
        formula: '(a + bi) / (c + di) = [(a+bi)(c-di)] / (c² + d²)',
        units: 'algebraic form',
        description: 'Rationalization of denominator using complex conjugate.'
      }
    ],
    memoryTricks: [
      {
        title: 'Powers of Iota Cycle (i, -1, -i, 1)',
        trick: 'Divide exponent by 4: Remainder 1 = i, Remainder 2 = -1, Remainder 3 = -i, Remainder 0 = 1',
        explanation: 'Example: i^27 -> 27 ÷ 4 leaves remainder 3, so i^27 = i³ = -i!'
      }
    ],
    mcqs: [
      {
        id: 'math-mcq-1',
        question: 'The value of i^99 is equal to:',
        options: ['1', '-1', 'i', '-i'],
        correctIndex: 3,
        explanation: '99 ÷ 4 = 24 with remainder 3. Thus i^99 = (i^4)^24 · i³ = 1 · (-i) = -i.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'math-mcq-2',
        question: 'Which of the following is an irrational number?',
        options: ['√16', '22/7', '√5', '0.75'],
        correctIndex: 2,
        explanation: '√5 is the square root of a non-perfect square prime number, hence irrational. √16 = 4, 22/7 is p/q, 0.75 is terminating decimal.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2022'
      },
      {
        id: 'math-mcq-3',
        question: 'The conjugate of -4 - 7i is:',
        options: ['4 - 7i', '-4 + 7i', '4 + 7i', '-7 - 4i'],
        correctIndex: 1,
        explanation: 'Conjugate inverts only the sign of the imaginary part: -4 - 7i becomes -4 + 7i.',
        difficulty: 'easy',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'math-mcq-4',
        question: 'The modulus of z = 3 - 4i is:',
        options: ['7', '5', '-5', '25'],
        correctIndex: 1,
        explanation: '|z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2021'
      },
      {
        id: 'math-mcq-5',
        question: 'If (x - 2) + (y + 3)i = 5 + 2i, then values of x and y are:',
        options: ['x = 7, y = -1', 'x = 3, y = 5', 'x = 7, y = 5', 'x = -3, y = -1'],
        correctIndex: 0,
        explanation: 'Equating real parts: x - 2 = 5 => x = 7. Equating imaginary parts: y + 3 = 2 => y = -1.',
        difficulty: 'medium',
        boardTag: 'BSEK Karachi 2020'
      },
      {
        id: 'math-mcq-6',
        question: 'The multiplicative inverse of (2, -3) or (2 - 3i) is:',
        options: ['(2/13, 3/13)', '(-2/13, 3/13)', '(2/13, -3/13)', '(3/13, 2/13)'],
        correctIndex: 0,
        explanation: 'Multiplicative inverse = z̄ / |z|² = (2 + 3i) / (2² + (-3)²) = (2 + 3i) / 13 = (2/13, 3/13).',
        difficulty: 'hard',
        boardTag: 'BSEK Karachi 2019'
      },
      {
        id: 'math-mcq-7',
        question: 'Any non-zero real number raised to the power 0 equals:',
        options: ['0', '1', '-1', 'Undefined'],
        correctIndex: 1,
        explanation: 'By law of exponents a^0 = a^(n-n) = a^n / a^n = 1.',
        difficulty: 'easy',
        boardTag: 'Sukkur Board 2022'
      },
      {
        id: 'math-mcq-8',
        question: 'The value of (1 + i)² is:',
        options: ['2', '2i', '1 + 2i', '0'],
        correctIndex: 1,
        explanation: '(1 + i)² = 1² + 2(1)(i) + i² = 1 + 2i - 1 = 2i.',
        difficulty: 'medium',
        boardTag: 'Larkana Board 2021'
      },
      {
        id: 'math-mcq-9',
        question: 'The product of (3 + √2) and (3 - √2) is:',
        options: ['7', '11', '9 - √2', '5'],
        correctIndex: 0,
        explanation: '(a + b)(a - b) = a² - b² = 3² - (√2)² = 9 - 2 = 7 (a rational number!).',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2018'
      },
      {
        id: 'math-mcq-10',
        question: 'In exponential form, the radical expression ⁵√(x³) is written as:',
        options: ['x^(5/3)', 'x^(3/5)', 'x^15', 'x^(1/15)'],
        correctIndex: 1,
        explanation: 'ⁿ√(a^m) = a^(m/n), so ⁵√(x³) = x^(3/5).',
        difficulty: 'easy',
        boardTag: 'Model Paper BSEK'
      }
    ],
    shortQuestions: [
      {
        id: 'math-sq-1',
        question: 'Simplify using laws of exponents: [(216)^(2/3) × (25)^(1/2)] / (0.04)^(-1/2).',
        urduQuestion: 'قوت نما کے قوانین کا استعمال کرتے ہوئے اس جملے کو مختصر کریں۔',
        answer: 'Step-by-step Solution:\n1. 216 = 6³, so (216)^(2/3) = (6³)^(2/3) = 6^(3 × 2/3) = 6² = 36.\n2. 25 = 5², so (25)^(1/2) = (5²)^(1/2) = 5^(2 × 1/2) = 5¹ = 5.\n3. (0.04)^(-1/2) = (4/100)^(-1/2) = (100/4)^(1/2) = (25)^(1/2) = 5.\n4. Substitute all values:\n   Numerator = 36 × 5 = 180.\n   Denominator = 5.\n   Expression = 180 / 5 = 36.\nAnswer = 36.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021 Section B'
      },
      {
        id: 'math-sq-2',
        question: 'Simplify (2 + 3i) / (4 - 5i) and express the answer in standard form a + bi.',
        urduQuestion: 'مخلوط عدد کو معیاری شکل a + bi میں تبدیل کریں۔',
        answer: 'Solution:\nMultiply numerator and denominator by the conjugate of denominator (4 + 5i):\n= [(2 + 3i)(4 + 5i)] / [(4 - 5i)(4 + 5i)]\n\nNumerator:\n= 2(4) + 2(5i) + 3i(4) + 3i(5i)\n= 8 + 10i + 12i + 15(i²)\n= 8 + 22i + 15(-1) = 8 - 15 + 22i = -7 + 22i.\n\nDenominator:\n= 4² - (5i)² = 16 - 25(i²) = 16 - 25(-1) = 16 + 25 = 41.\n\nExpression:\n= (-7 + 22i) / 41\n= (-7/41) + (22/41)i.\nAnswer: a = -7/41, b = 22/41.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2019 Section B'
      },
      {
        id: 'math-sq-3',
        question: 'Find the conjugate and modulus of the complex number z = 3 - 4i.',
        urduQuestion: 'مخلوط عدد کا مرافق اور مطلق قیمت معلوم کریں۔',
        answer: 'Given: z = 3 - 4i\n\n1. Conjugate (مرافق):\nChange sign of imaginary term: z̄ = 3 + 4i.\n\n2. Modulus (مطلق قیمت):\n|z| = √(a² + b²) = √(3² + (-4)²)\n|z| = √(9 + 16) = √25 = 5.\n\nAnswer: Conjugate = 3 + 4i, Modulus = 5.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2021, 2018'
      },
      {
        id: 'math-sq-4',
        question: 'Find the values of x and y if: (x + yi) + (2 - 3i) = 4 + 8i.',
        urduQuestion: 'اگر مساوات دی گئی ہو تو x اور y کی قیمتیں معلوم کریں۔',
        answer: 'Solution:\nCombine real and imaginary parts on L.H.S.:\n(x + 2) + (y - 3)i = 4 + 8i\n\nEquate Real parts:\nx + 2 = 4  =>  x = 4 - 2  =>  x = 2.\n\nEquate Imaginary parts:\ny - 3 = 8  =>  y = 8 + 3  =>  y = 11.\n\nAnswer: x = 2, y = 11.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BISE Hyderabad 2022'
      },
      {
        id: 'math-sq-5',
        question: 'Evaluate the value of i^18 + (1/i)^25.',
        urduQuestion: 'ایوٹا کی دی گئی قیمتوں کا مجموعہ معلوم کریں۔',
        answer: '1. i^18 = (i²)⁹ = (-1)⁹ = -1.\n2. (1/i)^25: Since 1/i = -i,\n   (-i)^25 = (-1)^25 · i^25 = -1 · (i^24 · i) = -1 · (1 · i) = -i.\n3. Sum = -1 + (-i) = -1 - i.\nAnswer = -1 - i.',
        marks: 3,
        isImportant: false,
        pastPaperInfo: 'Sukkur Board 2020'
      },
      {
        id: 'math-sq-6',
        question: 'Rationalize the denominator of: 1 / (√5 + √3).',
        urduQuestion: 'دی گئی رقم کے مخرج کو ناطق بنائیں۔',
        answer: 'Multiply numerator and denominator by conjugate (√5 - √3):\n= [1 × (√5 - √3)] / [(√5 + √3)(√5 - √3)]\n= (√5 - √3) / [(√5)² - (√3)²]\n= (√5 - √3) / (5 - 3)\n= (√5 - √3) / 2.\nAnswer = (√5 - √3) / 2.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2020, 2017'
      }
    ],
    longQuestions: [
      {
        id: 'math-lq-1',
        question: 'If z1 = 2 + 3i and z2 = 5 - 4i, prove that:\n(a) Conjugate of (z1 · z2) = z̄1 · z̄2\n(b) |z1 · z2| = |z1| · |z2|',
        urduQuestion: 'دیے گئے دو مخلوط اعداد کے لیے تصدیق کریں کہ ضرب کا مرافق اور مطلق قیمت مساوی ہیں۔',
        answer: 'Given: z1 = 2 + 3i, z2 = 5 - 4i\n\nPart (a) Prove: (z1 · z2) conjugate = z̄1 · z̄2\n1. L.H.S.:\nz1 · z2 = (2 + 3i)(5 - 4i)\n= 10 - 8i + 15i - 12(i²)\n= 10 + 7i - 12(-1) = 10 + 12 + 7i = 22 + 7i.\nConjugate of (z1 · z2) = 22 - 7i.\n\n2. R.H.S.:\nz̄1 = 2 - 3i,  z̄2 = 5 + 4i\nz̄1 · z̄2 = (2 - 3i)(5 + 4i)\n= 10 + 8i - 15i - 12(i²)\n= 10 - 7i - 12(-1) = 22 - 7i.\nSince L.H.S. = R.H.S. = 22 - 7i, Part (a) is verified.\n\nPart (b) Prove: |z1 · z2| = |z1| · |z2|\n1. L.H.S.:\nFrom above, z1 · z2 = 22 + 7i\n|z1 · z2| = √(22² + 7²) = √(484 + 49) = √533.\n\n2. R.H.S.:\n|z1| = √(2² + 3²) = √(4 + 9) = √13.\n|z2| = √(5² + (-4)²) = √(25 + 16) = √41.\n|z1| · |z2| = √13 · √41 = √(13 × 41) = √533.\nSince L.H.S. = R.H.S. = √533, Part (b) is verified.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2017 Section C'
      },
      {
        id: 'math-lq-2',
        question: 'Simplify the radical expression using laws of exponents:\n[ (x^(a+b))² · (x^(b+c))² · (x^(c+a))² ] / [ (x^a · x^b · x^c)⁴ ]',
        urduQuestion: 'قوت نما کے اصول استعمال کرتے ہوئے دی گئی الجبرائی کسر کو آسان ترین شکل دیں۔',
        answer: 'Step-by-step Solution:\n1. Numerator:\n= x^(2(a+b)) · x^(2(b+c)) · x^(2(c+a))\n= x^(2a + 2b) · x^(2b + 2c) · x^(2c + 2a)\nBy Product Law (add powers with same base x):\n= x^[ (2a + 2b) + (2b + 2c) + (2c + 2a) ]\n= x^(4a + 4b + 4c)\n= x^[ 4(a + b + c) ].\n\n2. Denominator:\nInside bracket: x^a · x^b · x^c = x^(a + b + c).\nRaised to power 4:\n[ x^(a + b + c) ]⁴ = x^[ 4(a + b + c) ].\n\n3. Complete Expression:\n= x^[ 4(a + b + c) ] / x^[ 4(a + b + c) ]\nBy Quotient Law:\n= x^[ 4(a + b + c) - 4(a + b + c) ]\n= x^0\n= 1 (by Zero Exponent rule).\n\nFinal Answer = 1.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2018 Section C'
      }
    ],
    mainQuestions: [
      {
        id: 'math-mq-1',
        question: 'State the difference between terminating and non-terminating recurring decimal fractions with examples.',
        answer: 'Terminating decimals end after finite digits (e.g. 1/8 = 0.125). Non-terminating recurring repeat a fixed pattern infinitely (e.g. 1/3 = 0.333...). Both are rational numbers.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'Board Exam Classic'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'math-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'Evaluate: i^99 + i^100 + i^101 + i^102.',
        section: 'B (Short)',
        solution: 'i^99 = -i, i^100 = 1, i^101 = i, i^102 = -1. Sum = -i + 1 + i - 1 = 0.',
        frequency: 'Repeated 6 times in 10 years'
      },
      {
        id: 'math-pp-2',
        year: 2022,
        board: 'BSEK Karachi',
        question: 'Express (1 + 2i) / (3 - 4i) in the form a + bi.',
        section: 'B (Short)',
        solution: 'Multiply by conjugate (3 + 4i): (1+2i)(3+4i) / (9+16) = (3+4i+6i-8)/25 = (-5+10i)/25 = -1/5 + (2/5)i.',
        frequency: 'Repeated 5 times in 10 years'
      },
      {
        id: 'math-pp-3',
        year: 2021,
        board: 'BISE Hyderabad',
        question: 'Find the multiplicative inverse of (1, -2).',
        section: 'B (Short)',
        solution: 'z = 1 - 2i. Inverse = (1 + 2i)/(1² + (-2)²) = (1 + 2i)/5 = (1/5, 2/5).',
        frequency: 'Repeated 4 times in 10 years'
      },
      {
        id: 'math-pp-4',
        year: 2019,
        board: 'BSEK Karachi',
        question: 'Prove that |z1 / z2| = |z1| / |z2| where z1 = 3 + 4i and z2 = 1 - i.',
        section: 'C (Long)',
        solution: '|z1| = 5, |z2| = √2. |z1/z2| = 5/√2. R.H.S. = 5/√2. Both equal.',
        frequency: 'Repeated 3 times in 10 years'
      }
    ],
    quickRevision: [
      'Rational: can be written as p/q (q ≠ 0). Terminating or repeating.',
      'Irrational: non-terminating and non-repeating (√2, √3, π).',
      'i = √(-1), i² = -1, i³ = -i, i⁴ = 1.',
      'Conjugate of a + bi is a - bi; Modulus |a + bi| = √(a² + b²).',
      'z · z̄ = a² + b² (always real).',
      'a^0 = 1, a^(-m) = 1/a^m.'
    ]
  }
];

export const MATH_SUBJECT: Subject = {
  id: 'mathematics',
  title: 'Mathematics',
  urduTitle: 'ریاضی',
  iconName: 'Calculator',
  color: 'from-emerald-600 to-teal-600',
  bgColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  badgeColor: 'bg-emerald-600 text-white',
  totalChapters: 1,
  description: 'Master Class 9 Mathematics: Real and Complex Numbers, Laws of Exponents, Logarithms, and Board Exam Numericals.',
  chapters: MATH_CHAPTERS
};
