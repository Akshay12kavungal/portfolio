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
