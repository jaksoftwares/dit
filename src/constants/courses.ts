export interface Course {
  id: number;
  slug: string;
  module: string;
  title: string;
  duration: string;
  price: string;
  focus: string;
  icon: string;
  technologies: string[];
  description: string;
  studyMode: string;
  hoursPerDay: string;
  targetAudience: string;  // Changed label: "Who Can Apply"
  requirements: string;
  outcomes: string[];
  ctas: string[];
  
  // New fields
  certificateInfo?: string;        // info about certificate issuance
  graduateOpportunities?: string;  // info about absorption to Dovepeak Digital Solutions
  intakeInfo?: string;             // intake months
  courseSchedule?: string;         // weekly schedule info
}

export const courses: Course[] = [
  {
    id: 1,
    slug: 'web-foundations-programming',
    module: 'Module 1: Web Foundations & Programming',
    title: 'Web Foundations & Programming',
    duration: '4 Weeks',
    price: 'KES 7,000',
    focus: 'Core Web Technologies & Programming Logic',
    icon: '🧱',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Git & GitHub', 'Responsive Design'],
    description:
      'This module is perfect for beginners looking to build a strong foundation in web development. You’ll learn how the web works, write clean HTML/CSS, version control with Git, and use JavaScript to make websites interactive.',
    studyMode: 'Online - 4 hours per day (Flexible Schedule)',
    hoursPerDay: '4 hours/day',
    targetAudience:
      'Open to school leavers, university students, working professionals, or anyone eager to start a career in tech. No prior experience needed — everyone is welcome!',
    requirements:
      'Laptop or desktop computer, stable internet connection, willingness to learn, and basic computer literacy.',
    outcomes: [
      'Understand the structure of modern websites.',
      'Use HTML & CSS to build responsive layouts.',
      'Write and debug JavaScript code.',
      'Use Git and GitHub for version control.',
      'Build and deploy simple frontend web pages.',
    ],
    ctas: ['View Course Outline', 'Apply Now'],

    certificateInfo: 'All graduates receive an official Dovepeak Certificate upon successful completion.',
    graduateOpportunities:
      'Top graduates will have the opportunity to join Dovepeak Digital Solutions for practical work experience and job placement.',
    intakeInfo: 'Upcoming Intakes: July, August, and September.',
    courseSchedule: 'Classes run 4 days a week (Monday to Thursday), focusing on interactive and practical learning.',
  },

  {
    id: 2,
    slug: 'frontend-engineering-react',
    module: 'Module 2: Frontend Engineering with React',
    title: 'Frontend Engineering with React',
    duration: '4 Weeks',
    price: 'KES 7,000',
    focus: 'UI Design, React Components & State Management',
    icon: '🎨',
    technologies: ['React.js', 'TailwindCSS', 'Hooks', 'Props & State', 'React Router'],
    description:
      'This module elevates your frontend skills by introducing modern JavaScript frameworks. You’ll design stunning UIs using React and Tailwind, manage app state, and learn to build production-grade interfaces.',
    studyMode: 'Online - 4 hours per day (Flexible Schedule)',
    hoursPerDay: '4 hours/day',
    targetAudience:
      'Ideal for learners who have completed Module 1 or those with basic HTML, CSS, and JavaScript knowledge looking to upskill.',
    requirements:
      'Computer with stable internet, completion of Module 1 or equivalent experience recommended.',
    outcomes: [
      'Build fully responsive user interfaces using React.',
      'Manage dynamic data with state and props.',
      'Use routing and reusable components.',
      'Style efficiently with TailwindCSS.',
      'Apply modern UI/UX principles in development.',
    ],
    ctas: ['View Course Outline', 'Apply Now'],

    certificateInfo: 'Upon successful completion, receive a Dovepeak Certificate highlighting your React skills.',
    graduateOpportunities:
      'Graduates will be prioritized for roles and internships at Dovepeak Digital Solutions.',
    intakeInfo: 'Next available intakes: July, August, and September.',
    courseSchedule: 'Classes held Monday to Thursday, focusing on hands-on and interactive lessons.',
  },

  {
    id: 3,
    slug: 'backend-fullstack-integration',
    module: 'Module 3: Backend & Full-Stack Integration',
    title: 'Backend & Full-Stack Integration',
    duration: '4 Weeks',
    price: 'KES 7,000',
    focus: 'Django APIs + React Frontend + Deployment',
    icon: '🛠️',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT Auth',
      'React',
      'Supabase',
      'Vercel',
    ],
    description:
      'This final module equips you with backend engineering skills using Django and teaches how to integrate your React frontend with APIs. You’ll also learn deployment and real-world app workflows.',
    studyMode: 'Online - 4 hours per day (Flexible Schedule)',
    hoursPerDay: '4 hours/day',
    targetAudience:
      'Perfect for learners who have completed Module 2, or those with frontend experience aiming to become full-stack developers.',
    requirements:
      'Laptop, reliable internet, and familiarity with React and basic Python concepts.',
    outcomes: [
      'Build robust APIs using Django and Django REST Framework.',
      'Secure your apps using JWT authentication.',
      'Connect frontend and backend applications seamlessly.',
      'Deploy full-stack apps on Vercel/Supabase.',
      'Create professional full-stack project portfolios.',
    ],
    ctas: ['View Course Outline', 'Apply Now'],

    certificateInfo: 'Earn a Dovepeak Full-Stack Developer Certificate after completion.',
    graduateOpportunities:
      'Graduates will be invited to join Dovepeak Digital Solutions in full-stack roles or internships.',
    intakeInfo: 'Intakes available: July, August, and September.',
    courseSchedule: 'Interactive classes run Monday through Thursday, emphasizing hands-on projects.',
  },
];
