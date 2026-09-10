import { Chapter, Subject } from '../types';

export const COMPUTER_CHAPTERS: Chapter[] = [
  {
    id: 'cs-ch1',
    subjectId: 'computer',
    number: 1,
    title: 'Fundamentals of Computer',
    urduTitle: 'کمپیوٹر کے بنیادی اصول',
    description: 'Generations of computers, hardware and software, system units, input/output devices, storage, binary number systems, and basic networking.',
    notes: [
      {
        heading: '1. Evolution and Generations of Computers (کمپیوٹر کی نسلیں)',
        content: 'A computer is an electronic machine that accepts raw data as input, processes it according to stored instructions, and produces meaningful output (information).\n\nFive Computer Generations:\n1. 1st Generation (1940 - 1956):\n   • Technology: Vacuum Tubes (ویکیوم ٹیوبز).\n   • Characteristics: Very large, generated immense heat, used machine language (binary 0 and 1), high failure rate.\n   • Examples: ENIAC, UNIVAC, EDVAC.\n2. 2nd Generation (1956 - 1963):\n   • Technology: Transistors (ٹرانزسٹرز) invented at Bell Labs.\n   • Characteristics: Smaller, faster, cheaper, more energy efficient, introduced assembly language and early high-level languages (FORTRAN, COBOL).\n   • Examples: IBM 1401, IBM 7090.\n3. 3rd Generation (1964 - 1971):\n   • Technology: Integrated Circuits (ICs - انٹیگریٹڈ سرکٹس) combining thousands of transistors on a tiny silicon chip.\n   • Characteristics: Keyboard and monitor interfaces, operating systems, multi-programming.\n   • Examples: IBM 360, PDP-8.\n4. 4th Generation (1971 - Present):\n   • Technology: Microprocessors (مائیکرو پروسیسرز) using VLSI (Very Large Scale Integration) and ULSI.\n   • Characteristics: Personal Computers (PCs), laptops, high reliability, internet and GUI operating systems.\n   • Examples: Intel Core i3/i5/i7/i9, Apple M-series chips.\n5. 5th Generation (Present & Beyond):\n   • Technology: Artificial Intelligence (AI) and Quantum Computing.\n   • Characteristics: Voice recognition, machine learning, robotics, parallel processing, natural language comprehension.',
        simpleExplanation: '1st Gen was as big as an entire classroom and ran on hot glass tubes. Today, 4th Gen microprocessors put millions of times more computing power into a smartphone inside your pocket!',
        funnyRealWorldAnalogy: '1st Gen computers were like dinosaurs: huge, slow, and eating enormous electricity. 4th & 5th Gen are like ninja superheroes: invisible, blazing fast, and talking back to you via Siri or ChatGPT!',
        keyPoints: [
          '1st Gen: Vacuum Tubes; 2nd Gen: Transistors; 3rd Gen: Integrated Circuits (ICs).',
          '4th Gen: Microprocessors (VLSI/ULSI).',
          '5th Gen: Artificial Intelligence & Quantum Computing.',
          'CPU = Central Processing Unit (ALU + CU + Registers).'
        ]
      },
      {
        heading: '2. Hardware vs Software & Primary Memory (ہارڈویئر، سافٹ ویئر اور میموری)',
        content: '1. Computer System Architecture:\n• Hardware (ہارڈویئر): Physical, tangible components of a computer that you can touch and feel (Monitor, Keyboard, Motherboard, Hard Drive).\n• Software (سافٹ ویئر): Non-physical set of programs, algorithms, and instructions that tell the hardware how to perform tasks.\n  - System Software: Manages hardware resources (Operating Systems like Windows 11, Linux, Device Drivers).\n  - Application Software: Designed for end-user specific tasks (MS Office, Web Browsers, Media Players).\n\n2. Primary vs Secondary Storage:\n• RAM (Random Access Memory):\n  - Volatile memory (data is lost as soon as computer is powered off).\n  - Fast read/write memory used to store active programs and currently opened operating system processes.\n• ROM (Read Only Memory):\n  - Non-volatile memory (permanent, data persists even after power loss).\n  - Contains startup BIOS / UEFI bootstrap firmware instructions to boot up the machine.\n• Secondary Storage: Magnetic disks (HDD), Solid State Drives (SSD), USB Flash drives (permanent mass storage).',
        simpleExplanation: 'Hardware is the physical body (eyes, hands, brain tissue). Software is the mind and knowledge. RAM is your active short-term thought right now; ROM is your permanent instinct (like breathing)!',
        funnyRealWorldAnalogy: 'RAM is the table where you put your books while studying for exam (if power goes out, table gets cleared). ROM is the permanent tattoo on your arm!',
        keyPoints: [
          'Hardware is physical; software is program instructions.',
          'RAM is volatile (temporary read/write).',
          'ROM is non-volatile (permanent startup instructions).',
          '1 Byte = 8 Bits.'
        ]
      }
    ],
    definitions: [
      {
        term: 'Microprocessor',
        urduTerm: 'مائیکرو پروسیسر',
        definition: 'A complete central processing unit (CPU) fabricated on a single integrated circuit (silicon chip), containing the Arithmetic Logic Unit, Control Unit, and Registers.',
        examTip: 'Mention VLSI technology and Intel 4004 as historical milestone.'
      },
      {
        term: 'Operating System',
        urduTerm: 'آپریٹنگ سسٹم',
        definition: 'Core system software that acts as an intermediary between computer hardware and user application software, managing memory, CPU scheduling, and file systems.',
        examTip: 'Examples: Windows, Linux, Android, macOS.'
      }
    ],
    formulas: [],
    memoryTricks: [
      {
        title: '5 Generations Technology',
        trick: 'V - T - I - M - A ("Very Tall Individuals Make Art")',
        explanation: 'Vacuum tubes (1st), Transistors (2nd), ICs (3rd), Microprocessors (4th), Artificial Intelligence (5th).'
      }
    ],
    mcqs: [
      {
        id: 'cs-mcq-1',
        question: 'First generation computers used which core electronic component?',
        options: ['Transistors', 'Vacuum Tubes', 'Integrated Circuits', 'Microprocessors'],
        correctIndex: 1,
        explanation: '1st generation computers (1940-1956) used bulky vacuum tubes.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2023'
      },
      {
        id: 'cs-mcq-2',
        question: 'Which of the following is volatile memory?',
        options: ['ROM', 'Hard Disk', 'RAM', 'Flash Drive'],
        correctIndex: 2,
        explanation: 'RAM loses all its stored contents when power is turned off, making it volatile.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2022'
      },
      {
        id: 'cs-mcq-3',
        question: 'One byte is equal to:',
        options: ['4 bits', '8 bits', '16 bits', '1024 bits'],
        correctIndex: 1,
        explanation: '1 Byte = 8 binary digits (bits). 4 bits make 1 Nibble.',
        difficulty: 'easy',
        boardTag: 'BISE Hyderabad 2022'
      },
      {
        id: 'cs-mcq-4',
        question: 'The brain of the computer that executes program instructions is:',
        options: ['RAM', 'Hard Drive', 'CPU', 'Power Supply'],
        correctIndex: 2,
        explanation: 'CPU (Central Processing Unit) performs all processing and decision making.',
        difficulty: 'easy',
        boardTag: 'Sukkur Board 2021'
      },
      {
        id: 'cs-mcq-5',
        question: 'Which software manages all hardware resources and provides user interface?',
        options: ['Application Software', 'Operating System', 'Utility Program', 'Compiler'],
        correctIndex: 1,
        explanation: 'Operating System is the essential system software managing CPU, memory, and devices.',
        difficulty: 'easy',
        boardTag: 'BSEK Karachi 2020'
      }
    ],
    shortQuestions: [
      {
        id: 'cs-sq-1',
        question: 'Differentiate between RAM and ROM with 4 distinct points.',
        urduQuestion: 'ریم (RAM) اور روم (ROM) میں چار بنیادی فرق تحریر کریں۔',
        answer: '1. RAM (Random Access Memory):\n• Volatile memory (data is erased when power is switched off).\n• Read and Write memory.\n• Stores temporary data of active running applications.\n• High speed, accessible directly by CPU.\n\n2. ROM (Read Only Memory):\n• Non-volatile memory (permanent, retains data without power).\n• Read-only memory under normal operations.\n• Stores permanent startup bootstrap instructions (BIOS / UEFI).\n• Cannot be overwritten by ordinary user programs.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2021, 2019'
      },
      {
        id: 'cs-sq-2',
        question: 'Differentiate between System Software and Application Software with examples.',
        urduQuestion: 'سسٹم سافٹ ویئر اور ایپلیکیشن سافٹ ویئر میں فرق واضح کریں۔',
        answer: '• System Software: Controls and manages computer hardware and system operations.\n  Examples: Operating systems (Windows 11, Linux), Device Drivers, Compilers.\n• Application Software: Programs developed to perform specific productive tasks for human users.\n  Examples: Microsoft Word, Google Chrome, Adobe Photoshop, VLC Media Player.',
        marks: 3,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2022, 2018'
      }
    ],
    longQuestions: [
      {
        id: 'cs-lq-1',
        question: 'Discuss in detail the Five Generations of Computers. Mention the principal electronic technology, operating characteristics, and examples for each generation.',
        urduQuestion: 'کمپیوٹر کی پانچوں نسلوں کی بنیادی ٹیکنالوجی اور خصوصیات پر تفصیلی نوٹ لکھیں۔',
        answer: '1. 1st Generation (1940-1956): Vacuum Tubes. Bulky size, consumed massive electricity, generated excessive heat. Relied on machine language. Examples: ENIAC, UNIVAC.\n\n2. 2nd Generation (1956-1963): Transistors. Replaced vacuum tubes, drastically reduced size and heat, increased reliability. Assembly language and early high-level languages (FORTRAN). Examples: IBM 1401.\n\n3. 3rd Generation (1964-1971): Integrated Circuits (ICs). Semiconductor chips holding thousands of transistors. Keyboards, monitors, and OS introduced. Examples: IBM 360.\n\n4. 4th Generation (1971-Present): Microprocessors (VLSI/ULSI). Millions of transistors on a single CPU silicon chip. Personal computers, laptops, graphical interfaces (GUI), Internet. Examples: Intel Core i7, Apple Silicon.\n\n5. 5th Generation (Present & Future): Artificial Intelligence (AI), Machine Learning, Quantum Computing, Natural Voice Recognition.',
        marks: 8,
        isImportant: true,
        pastPaperInfo: 'BSEK Karachi 2023, 2020 Section C'
      }
    ],
    mainQuestions: [
      {
        id: 'cs-mq-1',
        question: 'Explain the functions of ALU (Arithmetic Logic Unit) and CU (Control Unit) in a CPU.',
        answer: 'ALU performs mathematical arithmetic calculations (+, -, ×, ÷) and logical comparisons (<, >, =). CU directs, controls, and coordinates all operations between CPU components.',
        marks: 4,
        isImportant: true,
        pastPaperInfo: 'High Probability Question'
      }
    ],
    pastPaperQuestions: [
      {
        id: 'cs-pp-1',
        year: 2023,
        board: 'BSEK Karachi',
        question: 'Convert binary number (1101)₂ to decimal.',
        section: 'B (Short)',
        solution: '1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13 in decimal.',
        frequency: 'Repeated 6 times in 10 years'
      }
    ],
    quickRevision: [
      '1st Gen: Vacuum tubes | 2nd Gen: Transistors | 3rd Gen: ICs | 4th Gen: Microprocessors | 5th Gen: AI.',
      'RAM = Volatile read/write; ROM = Non-volatile permanent BIOS.',
      '1 Byte = 8 Bits. 1 KB = 1024 Bytes. 1 MB = 1024 KB. 1 GB = 1024 MB.',
      'CPU consists of ALU, CU, and Registers.'
    ]
  }
];

export const COMPUTER_SUBJECT: Subject = {
  id: 'computer',
  title: 'Computer Science',
  urduTitle: 'کمپیوٹر سائنس',
  iconName: 'Cpu',
  color: 'from-violet-600 to-purple-600',
  bgColor: 'bg-violet-50 text-violet-700 border-violet-200',
  badgeColor: 'bg-violet-600 text-white',
  totalChapters: 1,
  description: 'Complete Class 9 Computer Science: Computer Generations, Hardware/Software, Memory, Binary Conversions, and Past Papers.',
  chapters: COMPUTER_CHAPTERS
};
