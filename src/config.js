module.exports = {
  email: 'vicente.benavides0@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vbenavides',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vbenavides05',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/vicentebenavides/',
    },
  ],
  jobsData: [
    {
      date: '2021-06-03',
      title: 'Help Desk Senior',
      company: 'Generali',
      location: 'Ecuador, Guayaquil',
      range: 'May 2017 - Present',
      url: 'https://www.generali.com.ec/',
      detail1: 'Firewall, antivirus and windows servers management.',
      detail2:
        'Implementation of security policies and review of user permissions.',
      detail3:
        'Correction of vulnerabilities to prevent loss of service to guarantee permanent operability.',
    },
    {
      date: '2021-06-03',
      title: 'Internet Technical Support',
      company: 'Dexcall',
      location: 'Ecuador, Guayaquil',
      range: 'Nov 2016 - May 2017',
      url: 'http://www.dexcall.com/',
      detail1:
        'Verification of connection parameters and service interference.',
      detail2: 'Scheduling and monitoring of repair orders.',
      detail3:
        'Connection tests and configurations using the platforms to prevent service outages.',
    },
    {
      date: '2021-06-03',
      title: 'Computer Technician',
      company: 'Freelancer',
      location: 'Ecuador, GYE',
      range: 'Feb 2013 - Nov 2016',
      url: '#jobs',
      detail1:
        'Detection of problems and change of damaged parts of computers.',
      detail2:
        'Installation and modification of office programs for private institutions.',
      detail3:
        'Implementation of local area networks in small businesses and maintenance plans.',
    },
  ],
  projects: [
    {
      date: '1',
      title: 'Netflox',
      cover: 'netflox.jpg',
      github: 'https://github.com/vbenavides/netflox',
      external: 'https://netflox-one.vercel.app/',
      tech: ['React', 'StyledComponets', 'TMDB API', 'YouTube API'],
      details:
        'Site designed to see movie trailers, TMDB API is used to bring the data and be able to display it on the screen together with the use of css techniques.',
    },
    {
      date: '2',
      title: 'MyStore',
      cover: 'mystore.jpg',
      github: 'https://github.com/vbenavides/MaterRacePc',
      external: 'https://mystore-rh.web.app/',
      tech: ['React', 'StyledComponets', 'Hooks', 'Paypal-Api'],
      details:
        'Site designed as an online store for computer parts, this project uses Api Payment (PayPal), Hooks that are used: useState, useEffect, useMemo, useRef.',
    },
    {
      date: '3',
      title: 'Poke Api',
      cover: 'pokeapi-small.png',
      github: 'https://github.com/vbenavides/pokeapi',
      external: 'https://pokeapi-sable.vercel.app/',
      tech: ['React', 'useContext', 'Hooks'],
      details:
        'Pokedex project, the pokemons api is used to obtain each pokemon and display it in an orderly way, also a search button is implemented.',
    },
    {
      date: '4',
      title: 'Rick and Morty',
      cover: 'rick-and-morty.jpg',
      github: 'https://github.com/vbenavides/rick-and-morty-api',
      external: 'https://rick-and-morty-api-six.vercel.app/',
      tech: ['React', 'Api'],
      details:
        'This is a simple project that queries an API and displays the results on the screen.',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
