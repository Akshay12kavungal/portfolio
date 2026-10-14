// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Akshay K',
  location: 'Bangalore, IN',
  email: 'akshaykvl90@gmail.com',
  phone: '+91 81379 51236',
  github: 'https://github.com/Akshay12kavungal',
  linkedin: 'https://linkedin.com/in/akshay-k-9a4959206',
  ticker:
    'VIA PYTHON · DJANGO · DRF · REACT · NEXT.JS · POSTGRESQL · CELERY · RABBITMQ · DJANGO CHANNELS · DOCKER  ·  NOW SERVING BANGALORE',
  lead: 'Software Engineer specializing in production-grade REST APIs, microservices and full-stack web applications built with Python, Django and React.',
  summary:
    'With over three years of professional experience, I design and deliver features end to end, from Django REST Framework backends with optimized PostgreSQL queries, JWT authentication and role-based access control to React and Next.js frontends. I build asynchronous workflows with Celery and RabbitMQ and deploy with Docker, Nginx and Gunicorn. My work has reduced manual effort and improved system performance across the public transport, healthcare and fintech sectors.',
  facts: [
    ['Based in', 'Bangalore, IN'],
    ['Experience', '3+ yrs'],
    ['Daily transit ops served', '50,000+'],
    ['Manual scheduling cut', '40%'],
    ['Domains', 'Transport · Health · Fintech'],
  ],
}

// state: 'current' | 'passed' | 'origin'
export const experience = [
  {
    state: 'current',
    dates: '05/2024 – Present',
    title: 'Software Engineer',
    org: 'Nano Kernel Ltd · Bangalore',
    points: [
      'Led backend development in Python and Django for a monolithic Intelligent Transport Management System (ITMS) handling 50,000+ daily transit operations across multiple depots.',
      'Delivered the Depot Management System with automated real-time bus scheduling, operator workflows and live status updates, reducing manual scheduling effort by 40%.',
      'Delivered the Dredging Corporation of India FAMS and Operations modules as Django microservices, with Celery and RabbitMQ handling asynchronous incident escalation.',
      'Built the Advanced Vehicle Location System for real-time fleet tracking with ETA and off-route detection, using Django Channels, WebSockets and RabbitMQ.',
      'Built DRF APIs with JWT auth, RBAC, filtering, search and pagination, and fixed N+1 queries in high-traffic scheduling endpoints with select_related, prefetch_related and indexing.',
      'Built React and Next.js interfaces for 3 depot management modules. Work in 2-week Agile sprints with unit tests and code reviews.',
    ],
    stack: ['Django', 'DRF', 'Channels', 'Celery', 'RabbitMQ', 'React', 'Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    state: 'passed',
    dates: '04/2023 – 10/2023',
    title: 'Junior Python Developer',
    org: 'Nityom · Bangalore',
    points: [
      'Built role-based access control for 6 user types (Client, Caretaker, Therapist, Supervisor, Admin, SuperAdmin) with JWT authentication and permission-level API security.',
      'Built a full-stack therapy booking system in Django and React: session booking, caretaker profiles, calendar coordination and conflict detection.',
      'Delivered unified therapist and supervisor dashboards that cut administrative overhead.',
      'Designed DRF APIs with full CRUD coverage, PostgreSQL schema design, foreign key indexing and validation.',
    ],
    stack: ['DRF', 'React', 'PostgreSQL', 'JWT', 'RBAC', 'Tailwind'],
  },
  {
    state: 'passed',
    dates: '08/2022 – 01/2023',
    title: 'Python Django Developer',
    org: 'Prwatech · Bangalore',
    points: [
      'Built a CRM web application in Django using the Model-View-Template pattern.',
      'Designed the Group component, a core CRM module with full CRUD, admin-only controls and role-based permissions.',
      'Shipped the first production release on schedule.',
    ],
    stack: ['Django', 'PostgreSQL', 'Bootstrap'],
  },
  {
    state: 'origin',
    dates: '2017 – 2021',
    title: 'BCA, internship and certification',
    org: 'Kerala',
    text: 'Bachelor of Computer Applications, a Python Django internship at Regional Technologies, and a full stack certification at Spectrum Softtech Solutions. Details under Education below.',
  },
]

export const stateLabel = { current: 'Current stop', passed: 'Passed', origin: 'Origin' }

export const featuredProject = {
  code: 'AVLS',
  kind: 'Real-time systems',
  title: 'Advanced Vehicle Location System',
  text: 'Live fleet tracking with GPS positions pushed over WebSockets, ETA to each stop and off-route alerts.',
  points: [
    'Off-route detection and remaining-distance ETA using Haversine geometry against route polylines.',
    'Four-state stop tracker (passed, current, next, upcoming) and a priority-ordered vehicle status engine.',
    "Django Channels with an in-memory connection registry, fed by a RabbitMQ consumer thread into Daphne's event loop.",
    'Leaflet.js maps with live markers, encoded-polyline routes with direction arrows and Leaflet.draw geo-fences.',
    'Fleet dashboard with KPI bar, running-vehicle list, severity-colored alerts and role-based access.',
  ],
  stack: ['Django Ninja', 'Channels', 'RabbitMQ', 'PostGIS', 'Redis', 'Leaflet.js', 'Docker'],
}

export const projects = [
  {
    code: 'DCI',
    kind: 'Microservices',
    title: 'DCI Financial Microservices Platform',
    text: 'Python and Django microservices for the Dredging Corporation of India: FAMS (Financial and Asset Management) and an Operations module with incident tracking.',
    points: [
      'Asynchronous incident escalation with Celery tasks and RabbitMQ between services.',
      'PostgreSQL schemas for financial and operational data, with filtering, search and pagination.',
      'React and Vite frontend over the REST APIs.',
    ],
    stack: ['DRF', 'Celery', 'RabbitMQ', 'PostgreSQL', 'React', 'Vite'],
  },
  {
    code: 'DMS',
    kind: 'ITMS core module',
    title: 'Depot Management System',
    text: 'The scheduling core of a citywide transport system: real-time bus scheduling, live status and automated depot workflows for 50,000+ daily operations.',
    points: [
      'Automated scheduling that cut manual effort by 40%.',
      'React and Next.js operator interface across 3 modules.',
      'Query tuning on high-traffic scheduling endpoints.',
    ],
    stack: ['Django', 'DRF', 'React', 'Next.js', 'PostgreSQL'],
  },
  {
    code: 'SYS',
    kind: 'Full stack',
    title: 'Spot Your Stay',
    text: 'A resort booking platform with user authentication, property management and booking APIs in Django REST Framework, Razorpay payments, and a React frontend with property search and filters.',
    stack: ['DRF', 'React', 'PostgreSQL', 'Razorpay', 'Tailwind'],
    wide: true,
  },
]

export const skills = [
  ['Languages', 'Python, JavaScript (ES6+), SQL, HTML5, CSS3'],
  ['Backend', 'Django, Django REST Framework, Django Ninja, Django Channels, WebSockets, Celery, JWT, django-filter, Signals'],
  ['Frontend', 'React, Next.js, Vite, jQuery, Bootstrap, Tailwind CSS, Leaflet.js'],
  ['Data', 'PostgreSQL, PostGIS, query optimization, indexing, Redis caching'],
  ['Infrastructure', 'Docker, Nginx, Gunicorn, CI/CD, RabbitMQ'],
  ['Architecture', 'Microservices, monoliths, MVT, RBAC, REST API design, system design'],
]

export const education = [
  { title: 'Bachelor of Computer Applications', place: 'SNDP YSS College, Perinthalmanna', dates: '04/2017 – 04/2020' },
  { title: 'Python Django Developer Internship', place: 'Regional Technologies, Ernakulam', dates: '09/2019 – 03/2020' },
  { title: 'Python Django Full Stack Certification', place: 'Spectrum Softtech Solutions, Ernakulam', dates: '10/2020 – 01/2021' },
]
