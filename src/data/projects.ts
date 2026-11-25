export type ProjectCategory =
  | 'Corporate & Institutional'
  | 'Hospitality & Commercial'
  | 'Real Estate & Residential';

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  scope: string;
  featured?: boolean;
  coverImage: string;
  gallery: string[];
  summary: string;
  story: string[];
  highlights: string[];
  youtubeId?: string;
  youtubeTitle?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'desalegn-hotel-lobby',
    title: 'Desalegn Hotel Lobby',
    subtitle: 'Architectural Hospitality Arrival & Layered Lighting',
    category: 'Hospitality & Commercial',
    location: 'Bole, Addis Ababa',
    scope: 'Interior Design, Lighting Architecture & Finishing',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00122-scaled.jpg',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00122-scaled.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00113-scaled.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00114-scaled.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00119-scaled.jpg',
    ],
    summary:
      'A refined hospitality arrival experience for one of Addis Ababa’s established Bole hotels — uniting luminous layered lighting, serene spatial flow, and timeless luxury finishes.',
    story: [
      'The lobby of Desalegn Hotel was conceived as an immediate architectural embrace — a poised threshold that sets the emotional tone for guests from the very first step inside.',
      'Miseso orchestrated layered ambient and feature lighting to sculpt key architectural planes while guiding natural circulation across reception, lounge, and vertical transitions.',
      'Carefully balanced warm palettes, durable luxury surfaces, and bespoke detailing deliver enduring hospitality elegance crafted for continuous daily welcoming.',
    ],
    highlights: [
      'Layered architectural & accent lighting choreography',
      'Refined arrival circulation & guest lounge zoning',
      'High-durability luxury hospitality finishes',
      'Photographed completed execution in Bole, Addis Ababa',
    ],
  },
  {
    slug: 'tracon-real-estate-apartment',
    title: 'Tracon Real Estate Residence',
    subtitle: '170 m² 4-Bedroom Contemporary Modern-Classical Transformation',
    category: 'Real Estate & Residential',
    location: 'Lebu, Addis Ababa',
    scope: 'Full Design, Demolition, In-House Cabinetry & Turnkey Build',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-2.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-2.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-3.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-4.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-5.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-6.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/traco-7.png',
    ],
    summary:
      'A complete 100% turnkey design-and-build transformation of a 4-bedroom apartment in Lebu — blending classical wall paneling, modern ceilings, curved corridors, and Miseso-manufactured kitchen cabinetry.',
    story: [
      'Upon taking over this 4-bedroom residence at Tracon Real Estate in Lebu, our team demolished the outdated original gypsum board ceiling and re-engineered the entire spatial layout around intentional living, dining, and open-kitchen circulation.',
      'Rather than needlessly discarding quality existing parquet wood flooring, Betelhem Engida built an entire serene earth-tone color story around its natural warmth — harmonizing wall finishes, upholstery, curtains, dining consoles, and custom cabinetry.',
      'Sharp 90-degree corridor walls were thoughtfully softened into gentle architectural curves for visual poise and safe daily movement. Every kitchen cabinet was manufactured and installed in-house by Miseso, illuminated with calm warm lighting so the residence feels effortless day and night.',
    ],
    highlights: [
      'Contemporary fusion: classical wall moldings + modern gypsum ceilings',
      '100% in-house manufactured & installed custom open-kitchen cabinetry',
      'Curved architectural corridor edges for refined flow & safety',
      'Warm ambient lighting harmonized with natural earth-tone palette',
    ],
    youtubeId: 'XWp7q1xUgLQ',
    youtubeTitle: 'Apartment Interior Design Project at Tracon Real Estate — Full Walkthrough',
  },
  {
    slug: 'geda-bank',
    title: 'Gadaa Bank',
    subtitle: 'Modern Institutional Banking Hall & Executive Spaces',
    category: 'Corporate & Institutional',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Institutional Interior Design & Spatial Architecture',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/geda-4.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-4.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-1.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-2.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-3.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-5.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-6.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-7.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-8.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-10.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-11.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-12.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-13.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/geda-15.png',
    ],
    summary:
      'An authoritative, welcoming financial environment for Gadaa Bank S.C. — structuring reception zones, service counters, waiting lounges, and executive offices with precision.',
    story: [
      'Designed to communicate trust, security, and contemporary Ethiopian financial leadership, the Gadaa Bank interior balances institutional clarity with refined material warmth.',
      'Reception thresholds, customer service counters, executive offices, and waiting lounges are meticulously zoned to protect acoustic privacy while ensuring intuitive flow during high-volume banking operations.',
      'Clean architectural geometry, durable finishes, and calibrated indirect lighting elevate both staff productivity and customer dignity.',
    ],
    highlights: [
      'Comprehensive 13-view institutional interior program',
      'Structured customer flow, service counters & private advisory offices',
      'Durable commercial-grade stone, timber & metallic finishes',
      'Cohesive brand expression aligned with modern banking standards',
    ],
  },
  {
    slug: 'cac-international-bank',
    title: 'CAC International Bank',
    subtitle: 'Addis Ababa Diplomatic & Corporate Representative Office',
    category: 'Corporate & Institutional',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Executive Corporate Interior Design & Workspace Planning',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Image_2.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/Image_2.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/CAC-International-Bank-Portfolio.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/Image_1.png',
      'https://misesointeriors.com/wp-content/uploads/2026/04/Image_3.png',
    ],
    summary:
      'A sleek international banking representative office in Addis Ababa engineered to global corporate standards — uniting openness, discretion, and timeless executive authority.',
    story: [
      'Created for CAC International Bank’s Addis Ababa Representative Office, this workspace translates international financial prestige into a calm, contemporary architectural language.',
      'Spatial planning prioritizes clear circulation and effortless transitions between executive suites, boardroom dialogues, and client reception areas — preserving openness without ever compromising institutional confidentiality.',
      'Precision detailing, tailored lighting, and restrained finishes project enduring confidence to diplomatic and corporate stakeholders.',
    ],
    highlights: [
      'International banking workspace & executive suite architecture',
      'Balanced acoustic privacy with visual transparency',
      'Clean contemporary millwork & corporate identity integration',
      'Dedicated boardroom & diplomatic guest hospitality zones',
    ],
  },
  {
    slug: 'shaggar-city-mayor-office',
    title: 'Shaggar City Mayor Office',
    subtitle: 'Civic Leadership Suite & Diplomatic Reception Architecture',
    category: 'Corporate & Institutional',
    location: 'Shaggar City, Oromia',
    scope: 'Civic & Executive Institutional Interior Design',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-1.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-1.png',
    ],
    summary:
      'A dignified civic headquarters interior for the Shaggar City Mayor’s Office — harmonizing executive authority, administrative clarity, and refined institutional permanence.',
    story: [
      'Designed for the administration of Shaggar City surrounding Addis Ababa, the Mayor’s Office project establishes a composed civic presence built for leadership, high-level delegation meetings, and daily governance.',
      'Structured architectural layouts, balanced material palettes, and subtle bespoke detailing elevate reception halls, conference chambers, and executive workspaces into a cohesive environment of quiet stature.',
    ],
    highlights: [
      'Executive civic leadership & delegation reception zones',
      'Composed palette conveying authority and public dignity',
      'Acoustic & spatial planning for high-level decision-making',
      'Long-lasting institutional finishes',
    ],
  },
  {
    slug: 'abiy-residence',
    title: 'Abiy Residence',
    subtitle: 'Bespoke Private Residence · Warm Contemporary Serenity',
    category: 'Real Estate & Residential',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Private Residential Interior Design & Turnkey Styling',
    featured: true,
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-55.jpg',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-55.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-37.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-45.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-49.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-52.jpg',
    ],
    summary:
      'An intimate private residence where tailored textures, serene neutral harmonies, and intentional space planning turn everyday living into quiet luxury.',
    story: [
      'Abiy Residence exemplifies Miseso’s philosophy of residential harmony — designing every room not as an isolated vignette, but as part of one continuous sensory experience.',
      'Tactile fabrics, balanced earth-and-stone finishes, and curated lighting work quietly together so the home feels simultaneously elevated and deeply livable.',
    ],
    highlights: [
      '5 completed private residential interior viewpoints',
      'Cohesive material & color choreography across living zones',
      'Tailored lighting & refined ceiling articulation',
      'Enduring comfort built around modern family life',
    ],
  },
  {
    slug: 'yared-residence',
    title: 'Yared Residence',
    subtitle: 'Personalized Private Home · Soft Palettes & Fluid Living',
    category: 'Real Estate & Residential',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Full Residential Interior Architecture & Styling',
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-18.jpg',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-18.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-03-39.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-10.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-15.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-21.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-24.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/04/photo_2026-04-01_03-04-27.jpg',
    ],
    summary:
      'A serene residential sanctuary featuring seven documented spaces united by soft neutral palettes, seamless room-to-room flow, and bespoke finishing.',
    story: [
      'Yared Residence balances visual warmth with architectural discipline. Every furniture placement, lighting angle, and surface transition was planned from the outset to eliminate clutter and invite calm.',
      'Across living, dining, and private quarters, soft tones and tactile details create a personalized refuge that remains timeless beyond passing trends.',
    ],
    highlights: [
      '7 curated interior spaces across the residence',
      'Seamless room-to-room spatial continuity',
      'Soft warm-neutral color curation & ambient lighting',
      'Personalized furniture & finishing specification',
    ],
  },
  {
    slug: 'abbahawa-coffee-export-office',
    title: 'Abbahawa Coffee Export Office',
    subtitle: 'Executive Commercial Headquarters for a Leading Coffee Exporter',
    category: 'Hospitality & Commercial',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Commercial Interior Architecture & Executive Workspace',
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/1767303549673-366423737.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/1767303549673-366423737.png',
    ],
    summary:
      'A distinguished corporate office for Abbahawa Trading PLC — rooted in Ethiopia’s coffee heritage while delivering modern international commercial polish.',
    story: [
      'Created for one of Ethiopia’s premier coffee export enterprises, the Abbahawa office pairs organic richness with crisp operational clarity.',
      'Executive suites, client hospitality zones, and daily workspaces flow effortlessly together — welcoming international buyers and partners into an environment worthy of Ethiopia’s finest exports.',
    ],
    highlights: [
      'Brand-aligned material palette inspired by Ethiopian coffee heritage',
      'Executive meeting & international buyer hospitality areas',
      'Efficient workflow & acoustic zoning for daily operations',
    ],
  },
  {
    slug: 'green-acres-coffee-export-office',
    title: 'Green Acres Coffee Export Office',
    subtitle: 'Modern Specialty Coffee Trade Headquarters',
    category: 'Hospitality & Commercial',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Commercial Interior Design & Workplace Strategy',
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16.png',
    ],
    summary:
      'A crisp, contemporary headquarters for Green Acres Industrial PLC — balancing structured workstations, collaborative meeting spaces, and refined natural finishes.',
    story: [
      'Designed around clarity and brand presence, the Green Acres Coffee Export Office integrates clean architectural lines with warm tactile materials that feel both executive and approachable.',
      'Circulation corridors, meeting rooms, and leadership zones are harmonized to elevate everyday team productivity and global partner impressions.',
    ],
    highlights: [
      'Clean contemporary commercial lines & cohesive finishes',
      'Organized workstations & collaborative conference suites',
      'Refined brand storytelling through architectural textures',
    ],
  },
  {
    slug: 'addis-way-real-estate',
    title: 'Addis Way Real Estate',
    subtitle: 'Flagship Real Estate Client Gallery & Corporate Office',
    category: 'Real Estate & Residential',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Commercial Real Estate Office & Reception Design',
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-2.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-2.png',
    ],
    summary:
      'An elevated client reception and corporate environment for Addis Way Real Estate — designed to cultivate investor trust and modern market authority.',
    story: [
      'For a property developer welcoming both local and diaspora investors, the office itself must prove the standard of design excellence.',
      'Miseso crafted refined reception thresholds, advisory suites, and executive offices where clean detailing and calm proportions make every client consultation feel assured.',
    ],
    highlights: [
      'Investor-focused reception & consultation lounge',
      'Balanced architectural lines & sophisticated palette',
      'Seamless integration of private offices and meeting areas',
    ],
  },
  {
    slug: 'residential-g4-project',
    title: 'Residential G+4 Development',
    subtitle: 'Multi-Story Contemporary Luxury Architecture & Interiors',
    category: 'Real Estate & Residential',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Multi-Level Interior Architecture & 3D Visualization',
    coverImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-3.png',
    gallery: [
      'https://misesointeriors.com/wp-content/uploads/2026/04/Asset-16-3.png',
    ],
    summary:
      'A cohesive multi-story residential development uniting clean architectural lines, thoughtful vertical circulation, and consistent quiet luxury across every floor.',
    story: [
      'Spanning five levels, the Residential G+4 Project demonstrates Miseso’s capacity to orchestrate complex multi-story developments without sacrificing intimate residential warmth.',
      'Each level maintains clear privacy gradients, generous daylighting, and a unified material language from ground arrival to upper living suites.',
    ],
    highlights: [
      'Multi-level spatial planning & vertical circulation',
      'Unified material and lighting language across all five floors',
      'Durable luxury specifications built for modern urban living',
    ],
  },
  {
    slug: 'g3-luxury-residence-exterior',
    title: 'G+3 Luxury Residence Architecture',
    subtitle: 'Modern Exterior Architectural Visualization & Facade Design',
    category: 'Real Estate & Residential',
    location: 'Addis Ababa, Ethiopia',
    scope: 'Exterior Architectural Design & 3D Cinematic Visualization',
    coverImage: 'https://i.ytimg.com/vi/dxsklxrAJ0I/maxresdefault.jpg',
    gallery: [
      'https://i.ytimg.com/vi/dxsklxrAJ0I/maxresdefault.jpg',
      'https://misesointeriors.com/wp-content/uploads/2026/03/Interior-and-exterior-3.png',
    ],
    summary:
      'A sculptural G+3 private residence showcasing Miseso’s integrated architectural exterior vision — crisp cantilevered geometry, warm lighting, and timeless curb presence.',
    story: [
      'At Miseso, luxury begins long before crossing the front threshold. This G+3 residence demonstrates our holistic approach to architectural massing, facade materiality, landscape framing, and twilight lighting.',
      'Fully realized in photorealistic 3D visualization prior to construction, every exterior line aligns effortlessly with the interior experience within.',
    ],
    highlights: [
      'Full G+3 exterior architectural design & facade composition',
      'Photorealistic 3D architectural film & lighting study',
      'Seamless indoor-outdoor luxury continuity',
    ],
    youtubeId: 'dxsklxrAJ0I',
    youtubeTitle: 'G+3 የቅንጦት ቤት ውጫዊ ዲዛይን | MISESO Interior Design',
  },
];

export const FEATURED_VIDEOS = [
  {
    id: 'XWp7q1xUgLQ',
    title: 'Tracon Real Estate — 4-Bedroom Luxury Apartment Transformation',
    duration: '05:16',
    tag: 'Turnkey Design & Build',
    thumbnail: 'https://i.ytimg.com/vi/XWp7q1xUgLQ/maxresdefault.jpg',
  },
  {
    id: 'dxsklxrAJ0I',
    title: 'G+3 Luxury Residence — Exterior Architectural Visualization',
    duration: '02:28',
    tag: 'Exterior Architecture',
    thumbnail: 'https://i.ytimg.com/vi/dxsklxrAJ0I/maxresdefault.jpg',
  },
  {
    id: 'lCu5wH6gOVM',
    title: '4-Bedroom Apartment — From Concept Design to Full Finishing',
    duration: '05:54',
    tag: 'Full Finishing',
    thumbnail: 'https://i.ytimg.com/vi/lCu5wH6gOVM/maxresdefault.jpg',
  },
];
