let exam = [
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question:
      'In 2009, intercontinental ballistic missile (ICBM) forces were broken away from Ait Force Space Command with the standup of . . .',
    answers: [
      '20th Air Force',
      '24th Air Force',
      'Missile Defence Command',
      'Air Force Global Strike Command (AFGSC)',
    ],
    correct: 'Air Force Global Strike Command (AFGSC)',
  },
  {
    question: 'What organization launches satellites into polar orbit?',
    answers: [
      '30th Space Wing',
      '45th Space Wing',
      '50th Space Wing',
      '90th Space Wing',
    ],
    correct: '30th Space Wing',
  },
  {
    question:
      'Defense Satellite Communications Systems control is the responsibility of the . . .',
    answers: [
      '2nd Air Force',
      '8th Air Force',
      '45th Space Wing',
      '50th Space Wing',
    ],
    correct: '50th Space Wing',
  },
  {
    question:
      'What installation was orginially activated as Camp Cooke in 1941 and provided infantry and armor training?',
    answers: [
      'Patrick AFB, Florida',
      'Tyndall AFB, Florida',
      'Edwards AFB, California',
      'Vandenberg AFB, California',
    ],
    correct: 'Vandenberg AFB, California',
  },
  {
    question:
      'What organization leads the Air Force Evolved Expendable Launch Vehicle (EELV) program on the west coast?',
    answers: [
      '17th Test Squadron',
      '576th Flight Test Squadron',
      '4th Space Launch Squadron',
      '5th Space Launch Squadron',
    ],
    correct: '4th Space Launch Squadron',
  },
  {
    question:
      'What installation is the administrative hub of the 45th Space Wing?',
    answers: [
      'Patrick AFB, Florida',
      'Peterson AFB, Florida',
      'Vandenberg AFB, California',
      'Cape Canaveral AFS, Florida',
    ],
    correct: 'Patrick AFB, Florida',
  },
  {
    question:
      'At what Cape Canaveral Air FOrce Station (AFS) space launch complex (SLC) does preparation and launch of the Atlas V launch vhicle occur?',
    answers: ['SLC-3', 'SLC-6', 'SLC-37', 'SLC-41'],
    correct: 'SLC-41',
  },
  {
    question:
      'What organization maintains the only DOD spacecraft processing facility capable of placing spacecraft into geosyncronous orbit?',
    answers: [
      '2nd Space Launch Squadron (SLS)',
      '4th SLS',
      '30th Launch Support Squadron (LSS)',
      '45th LSS',
    ],
    correct: '45th LSS',
  },
  {
    question:
      'What Atlas V major assembly provides attachments for up to 5 strap-on solid rocket boosters?',
    answers: [
      'Centaur',
      'Interstage',
      'Second stage',
      'Common Core Booster (CCB)',
    ],
    correct: 'Common Core Booster (CCB)',
  },
  {
    question:
      'What fuel is in the 2 propellant tanks of the Atlas V Common Core Booster (CCB)?',
    answers: [
      'JP-1 and methane',
      'RD-180 and hydrozine',
      'RP-1 and liquid oxygen',
      'PGM-17 and liquid hydrogen',
    ],
    correct: 'RP-1 and liquid oxygen',
  },
  {
    question:
      'For the Atlas V, what major assembly provides the propulsion, guidance and control capability to place spacecraft into selected orbits?',
    answers: [
      'Payload fairing',
      'Centaur upper stage',
      'Common Core Booster (CCB)',
      'Propulsion system rocket engine',
    ],
    correct: 'Centaur upper stage',
  },
  {
    question:
      'The Atlas V payload adapter connects the payload to the standard interface plane located at the top of the Centaur . . .',
    answers: [
      'intertank skirt',
      'forward adapter',
      'interstage adapter',
      'turbopump assembly',
    ],
    correct: 'forward adapter',
  },
  {
    question:
      'What structure erects the Atlas V and Centaur and mates the encapsulated spacecraft to the launch vehicle?',
    answers: [
      'Launch table',
      'Umbilical Tower (UT)',
      'Mobile Service Tower (MST)',
      'Fixed Launch Platform (FLP)',
    ],
    correct: 'Mobile Service Tower (MST)',
  },
  {
    question:
      'What Atlas V structure provides support for a lighting mast that provides a 45-degree cone of protection?',
    answers: [
      'Umbilical Tower (UT)',
      'Launch Mate Unit (LMU)',
      'Mobile Assembly Shelter (MAS)',
      'Launch Operations Building (LOB)',
    ],
    correct: 'Umbilical Tower (UT)',
  },
  {
    question:
      'What Atlas V structure provides a ramp up for moving the Altas, Centaur, and spacecraft into position to be erected?',
    answers: [
      'Mobile Service Tower (MST)',
      'Launch Support Building (LSB)',
      'Launch Operations Building (LOB)',
      'Horizontal Integration Facility (HIF)',
    ],
    correct: 'Launch Support Building (LSB)',
  },
  {
    question:
      'What structure contains 3 retractable launch heads to hold the Atlas V launch vehicle?',
    answers: [
      'Launch Mate Unit (LMU)',
      'Launch Control Center (LCC)',
      'Fixed Launch Platform (FLP)',
      'Launch Operations Building (LOB)',
    ],
    correct: 'Fixed Launch Platform (FLP)',
  },
  {
    question:
      'The Delta IV is primarily designed to satisfy requirements of . . .',
    answers: [
      'commercial launches',
      'international launches',
      'the United States (US) military',
      'the National Aeronautics and Space Administration (NASA)',
    ],
    correct: 'the United States (US) military',
  },
  {
    question:
      'A typical Delta IV first stage contains one common core booster. How many common booster cores are used on the Delta IV "Heavy" variant?',
    answers: ['2', '3', '4', '6'],
    correct: '3',
  },
  {
    question:
      'What fuel does the Delta IV second stage RL-10B2 rocket engine burn?',
    answers: [
      'Hyrdazine',
      'Liquid Oxygen',
      'Liquid Hydrogen',
      'Rocket Propellant-1',
    ],
    correct: 'Liquid Hydrogen',
  },
  {
    question:
      'What provides acoustic, radio frequency, and static protection for the spacecraft atop the Delta IV launch vehicle?',
    answers: [
      'Payload fairing',
      'Forward adapter',
      'Intertank adapters',
      'Centaur upper stage',
    ],
    correct: 'Payload fairing',
  },
  {
    question:
      'In order to provide an environmental enclosure for the Delta IV launch vehicle, the mobile assembly shelter meets with . . .',
    answers: [
      'only the fixed pad erector',
      'only the mobile service tower',
      'the launch mate unit and the fixed pad erector',
      'the fixed umbilical tower and the mobile service tower',
    ],
    correct: 'the fixed umbilical tower and the mobile service tower',
  },
  {
    question:
      'During a launch, how quickly do the swing arms of the Delta IV fixed umbilical tower retract?',
    answers: [
      'Less than 12 seconds',
      '15 to 30 seconds',
      '30 to 45 seconds',
      '45 to 60 seconds',
    ],
    correct: 'Less than 12 seconds',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
  {
    question: 'This is a question',
    answers: ['a', 'b', 'c', 'd'],
    correct: 'This is the answer',
  },
]

export default exam
