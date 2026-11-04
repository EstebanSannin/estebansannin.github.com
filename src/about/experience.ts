// Experience timeline on the About page, newest first.
export const experience: { company: string; years: string; summary: string; roles: [string, string][] }[] = [
  {
    company: 'Toradex',
    years: '2021 – now',
    summary:
      'I lead R&D for Torizon, an embedded Linux platform for industrial devices: the OS, containers, over-the-air updates and the tools around them.',
    roles: [
      ['Director Torizon R&D', '2026 – now'],
      ['Engineering Group Manager', '2023 – now'],
      ['Scrum Master', '2022 – 2023'],
      ['Software Architect', '2021 – now'],
    ],
  },
  {
    company: 'SECO',
    years: '2015 – 2021',
    summary:
      'I came up with the idea for Edgehog OS, an embedded Linux OS for connected devices, built it, and delivered it to the first paying customer. Today SECO sells it as Clea OS. Before that I worked on AXIOM, an EU research project: an experimental platform that combined ARM and FPGA on the same board. I also published scientific papers about it.',
    roles: [
      ['IoT Operating System Team Leader', '2018 – 2021'],
      ['Embedded Linux Software Specialist', '2015 – 2018'],
    ],
  },
  {
    company: 'Packt',
    years: '2015 – 2016',
    summary: 'I co-wrote a book on building and customizing your own version of Android, published in 2016.',
    roles: [['Author, Learning Embedded Android N Programming', '2016']],
  },
  {
    company: 'Gemino',
    years: '2011 – 2015',
    summary:
      'Design, prototyping and production of embedded Linux products, like an emergency dialer for elevators. Later I led the technical side of the projects.',
    roles: [
      ['Technical Lead', '2012 – 2015'],
      ['Embedded Software and Firmware Engineer', '2011 – 2015'],
    ],
  },
  {
    company: 'Freelance',
    years: '2009 – 2011',
    summary: 'Embedded software for small companies around Benevento.',
    roles: [['Embedded Software Developer', '2009 – 2011']],
  },
];

