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
