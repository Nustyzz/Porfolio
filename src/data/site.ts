// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Chris Jacob Natividad',
  role: 'Vibe coder — websites, Arduino & ESP32',
  location: 'Remote',
  timezone: 'UTC',
  email: 'yme59681@gmail.com',
  available: true,
  intro: 'I build websites with vibe coding and simple Arduino & ESP32 projects — including an ESP32-C3 SuperMini that shows what I am playing on Spotify, live on a small OLED display.',
  socials: [
    { label: 'Email', href: 'mailto:yme59681@gmail.com' },
  ],
  marquee: ['Websites', 'Vibe coding', 'Arduino', 'ESP32', 'ESP32-C3 SuperMini', 'Spotify API', 'OLED displays', 'API integrations'],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover?: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'spotify-oled-esp32',
    title: 'Spotify OLED Display',
    client: 'Personal project',
    category: 'ESP32-C3 SuperMini · Spotify API · OLED',
    year: '2026',
    cover: '/images/spotify-oled.jpg',
    tint: '#d9ead9',
    summary: 'My hardest and favourite build: an ESP32-C3 SuperMini linked to Spotify via API, so whatever I play on my account shows up on a small OLED display.',
    role: ['ESP32-C3 SuperMini', 'Spotify Web API', 'OLED display'],
    deliverables: ['ESP32-C3 SuperMini firmware', 'Spotify API integration', 'Live OLED now-playing display'],
    body: [
      'This is the hardest thing I have made. An ESP32-C3 SuperMini talks to the Spotify Web API, and when I play music on my account, the tiny OLED display shows what is playing — track and artist, live, without opening my phone or computer.',
      'Getting there meant handling the API side (authorising the connection and reading the current playback) and the embedded side (fetching over Wi-Fi on a very small board and drawing it legibly on a small OLED). It is the project that proves the pattern I love: a simple physical thing, connected to a real API, doing something useful.',
      'It is also the template for what I can build for you: pick a board, pick a display or sensor, pick an API — and connect them.',
    ],
    size: 'large',
  },
  {
    slug: 'websites-vibe-coding',
    title: 'Websites, Vibe Coded',
    client: 'Client & personal sites',
    category: 'Websites · Vibe coding',
    year: '2026',
    cover: '/images/website.jpg',
    tint: '#dbe7f5',
    summary: 'Fast, clean websites built by describing what you want and shipping it — portfolios, landing pages and small business sites, designed and built end to end.',
    role: ['Web design', 'Vibe coding', 'Build & launch'],
    deliverables: ['Marketing & portfolio websites', 'Landing pages', 'Responsive, mobile-first builds'],
    body: [
      'I make websites by vibe coding: you describe the site you want in plain words, and I turn it into a real, working website — layout, copy structure, styling and code, all handled.',
      'The result is a site that looks intentional, loads fast and works on phone and desktop. Good for portfolios, a business, a project or a landing page — if you can describe it, I can build it.',
    ],
    size: 'small',
  },
  {
    slug: 'arduino-esp32-projects',
    title: 'Arduino & ESP32 Projects',
    client: 'Personal & custom builds',
    category: 'Arduino · ESP32 · Sensors & displays',
    year: '2026',
    tint: '#f0e3d3',
    summary: 'Simple Arduino and ESP32 projects — sensors, displays, LEDs and small automations — wired, coded and working on the bench.',
    role: ['Arduino', 'ESP32', 'Sensors & outputs'],
    deliverables: ['Arduino sketches', 'ESP32 firmware', 'Sensor & display wiring'],
    body: [
      'I build simple Arduino and ESP32 projects: reading a sensor, driving a display, switching a relay, blinking, measuring, automating — the small physical builds that make an idea tangible.',
      'Every project is wired and coded end to end, from the breadboard to the final sketch, and explained in plain language so you can actually use and tweak it.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Websites & vibe coding',
    body: 'I make websites by vibe coding: portfolios, landing pages and small business sites. Tell me what you want in plain words and I handle the design, code and launch — fast, clean and mobile-friendly.',
  },
  {
    title: 'Arduino projects',
    body: 'Simple Arduino builds done properly: sensors, LEDs, motors and displays, wired and coded from scratch so the thing actually works — and you can change it later.',
  },
  {
    title: 'ESP32 projects',
    body: 'ESP32 builds with Wi-Fi and Bluetooth: connected devices, data loggers, dashboards and small automations on boards like the ESP32 and ESP32-C3 SuperMini.',
  },
  {
    title: 'APIs on tiny hardware',
    body: 'My specialty: connecting microcontrollers to real APIs. My flagship build links an ESP32-C3 SuperMini to Spotify so the music I play shows live on a small OLED. Have an API and a board in mind? That is exactly what I do.',
  },
]

export const testimonials = [
  {
    quote: 'Describe the site you want in plain words. I turn it into a real, working website — design, code and launch handled.',
    name: 'Websites',
    role: 'Vibe coding, end to end',
  },
  {
    quote: 'A board, a sensor or a display, plus an idea. I wire it, code it and make it do the thing.',
    name: 'Arduino & ESP32',
    role: 'Simple projects, working hardware',
  },
  {
    quote: 'When I play music on Spotify, my ESP32-C3 SuperMini shows it live on a small OLED — via the Spotify API.',
    name: 'Spotify OLED',
    role: 'My hardest build, and my favourite',
  },
]

export const experience = [
  { period: 'Now', title: 'Independent builder', detail: 'Websites (vibe coding) and Arduino / ESP32 projects, for clients and personal builds' },
  { period: 'Flagship', title: 'ESP32-C3 SuperMini × Spotify API', detail: 'Live now-playing display on a small OLED, driven by the Spotify Web API' },
  { period: 'Core', title: 'Arduino & ESP32', detail: 'Sensors, displays, Wi-Fi devices and small automations, wired and coded end to end' },
]
