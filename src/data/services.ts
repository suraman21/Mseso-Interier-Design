export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  image: string;
  secondaryImage?: string;
}

export const ENGAGEMENT_MODELS = [
  {
    number: '01',
    title: 'Design Only',
    subtitle: 'Architectural Clarity Before You Build',
    description:
      'Complete concept direction, spatial layout planning, color palette engineering, 2D working drawings, and photorealistic 3D visuals so every decision is perfected before spending on site.',
    idealFor: 'Homeowners, developers, and institutions with existing contractors seeking world-class design blueprints.',
  },
  {
    number: '02',
    title: 'Design & Build',
    subtitle: 'Our Signature Turnkey Delivery',
    description:
      'One unified house from first sketch to final styling — integrating architecture, BOQ cost control, demolition/construction, finishing works, in-house cabinetry, lighting, furniture, and curtains.',
    idealFor: 'Clients who want effortless execution: "You bring your clothes and shoes. We deliver the home."',
  },
  {
    number: '03',
    title: 'Build (with Modification)',
    subtitle: 'Precision Execution & Elevation',
    description:
      'Already have a plan or an ongoing structure? Our architects and site engineers refine layout proportions, resolve technical bottlenecks, and execute luxury finishing to Miseso standards.',
    idealFor: 'Partially constructed villas, real estate apartments, and commercial shells needing luxury transformation.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'interior-exterior-design',
    number: '01',
    title: 'Interior & Exterior Design',
    shortDesc: 'Holistic architecture unifying facades, interiors, landscaping, color, and lighting.',
    fullDesc:
      'Every project is approached as a single continuous environment — ensuring interior spaces converse gracefully with architectural form, facade materials, natural light, and landscape.',
    deliverables: [
      'Spatial planning & circulation architecture',
      'Photorealistic 3D interior & exterior renders',
      'Bespoke color & material palette specification',
      'Lighting & landscape integration',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Interior-and-exterior-3.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2025/07/project-19.jpg',
  },
  {
    id: 'construction-services',
    number: '02',
    title: 'Construction Services',
    shortDesc: 'Disciplined structural and interior build managed by dedicated site engineers.',
    fullDesc:
      'Our Construction Services translate design drawings into built reality without compromise — coordinating skilled labor, materials, schedules, and quantity-surveyed cost control from foundation to final coat.',
    deliverables: [
      'Site engineering & full-time supervision',
      'BOQ preparation & commercial cost control',
      'Civil, MEP & partition execution',
      'Strict timeline & quality assurance',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Construction-1.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/Construction-3.png',
  },
  {
    id: 'full-project-development',
    number: '03',
    title: 'Full Project Development',
    shortDesc: 'End-to-end turnkey stewardship delivering complete, move-in-ready environments.',
    fullDesc:
      'From initial feasibility and 3D concept through procurement, custom cabinetry manufacturing, furniture curation, curtains, and final handover — one accountable partner oversees every discipline.',
    deliverables: [
      'Single-point executive project management',
      'International & local material sourcing',
      'Custom furniture, joinery & drapery styling',
      'Turnkey move-in-ready commissioning',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2025/07/project-21.jpg',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2025/07/project-5.jpg',
  },
  {
    id: 'finishing-works',
    number: '04',
    title: 'Luxury Finishing Works',
    shortDesc: 'Flawless surfaces, gypsum ceilings, Italian stoneware, decorative paint & concealed LED.',
    fullDesc:
      'Finishing is where quiet luxury becomes tangible. Our specialized foremen execute seamless ceramic, porcelain, marble, and parquet installations, precision gypsum ceiling work, aluminum LED profiles, and bespoke cabinetry.',
    deliverables: [
      'Precision gypsum ceilings & concealed LED profiles',
      'Porcelain, marble & natural wood flooring',
      'Custom kitchen cabinets & architectural paneling',
      'Sanitary ware & decorative Jotun paint finishes',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Finishing-Works-1.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/Finishing-Work-3.png',
  },
  {
    id: 'demolish-new-partial',
    number: '05',
    title: 'Demolish | New | Partial Design',
    shortDesc: 'Ground-up creations, strategic demolition, or surgical single-space elevation.',
    fullDesc:
      'Sometimes luxury begins with demolition. Whether constructing a brand-new villa, safely stripping an outdated shell for complete reimagining, or elevating a specific living room or executive suite, we tailor the intervention with surgical precision.',
    deliverables: [
      'Safe demolition planning & structural assessment',
      'Ground-up bespoke new builds',
      'Targeted partial room or zone upgrades',
      'Preservation of high-value existing elements',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Under-Construction-1.png',
    secondaryImage: '/images/real/betty-demolition-clean.jpg',
  },
  {
    id: 'under-construction',
    number: '06',
    title: 'Under Construction Oversight',
    shortDesc: 'Technical stewardship and design consistency for active building sites.',
    fullDesc:
      'We step into ongoing residential and commercial sites across Addis Ababa, Bishoftu, and beyond to align contractors, verify site execution against drawings, and protect luxury standards at every milestone.',
    deliverables: [
      'Ongoing site inspections & progress verification',
      'Design-to-site drawing coordination',
      'Material approval & wastage control',
      'Subcontractor alignment & snagging',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Under-construction-3.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/Under-Construction-2.png',
  },
  {
    id: 'tv-unit-design',
    number: '07',
    title: 'Bespoke TV & Feature Walls',
    shortDesc: 'Clean, uncluttered architectural focal points uniting media, storage, and warm glow.',
    fullDesc:
      'An overcrowded TV unit can unsettle even the finest living room. Miseso crafts calm, architectural feature walls using stone, fluted timber, hidden cable routing, and soft concealed lighting.',
    deliverables: [
      'Minimalist custom joinery & floating consoles',
      'Stone, veneer & fluted wood cladding',
      'Concealed warm LED ambient backlighting',
      'Integrated hidden media & cable management',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/TV-Unit-1.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/TV-Unit-3.png',
  },
  {
    id: 'renovation',
    number: '08',
    title: 'Renovation & Transformation',
    shortDesc: 'Reimagining existing villas, apartments, hotels, and offices for modern luxury.',
    fullDesc:
      'We breathe timeless poise and substantial market value into existing properties — resolving awkward layouts, upgrading lighting and finishes, and delivering breathtaking before-and-after transformations.',
    deliverables: [
      'Complete structural & aesthetic property audit',
      'Layout reconfiguration & curved architectural touches',
      'Full electrical, lighting & surface modernization',
      'Value-enhancing residential & hospitality upgrades',
    ],
    image: 'https://misesointeriors.com/wp-content/uploads/2026/03/Renovation-1.png',
    secondaryImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/Renovation-3.png',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Private Consultation',
    subtitle: 'Listening & Spatial Discovery',
    description:
      'We meet by appointment at our Hayahulet Signal or Tafo studio (or on-site) to understand your lifestyle, brand identity, architectural aspirations, and investment parameters.',
  },
  {
    step: '02',
    title: 'Concept & Color Direction',
    subtitle: 'Planning Before Dividing',
    description:
      'Our architects resolve spatial flow, circulation, and furniture layout first — pairing intelligent plans with curated material boards and Miseso’s signature color harmony.',
  },
  {
    step: '03',
    title: '3D Visualization & Technical Docs',
    subtitle: 'Total Visual & Cost Certainty',
    description:
      'Experience your space through photorealistic 3D renders and walkthrough animations alongside precise 2D working drawings and quantity-surveyed BOQ budgets before site work begins.',
  },
  {
    step: '04',
    title: 'Construction, Joinery & Finishing',
    subtitle: 'Disciplined Site Execution',
    description:
      'Our site engineers, finishing foremen, and custom cabinetry workshops execute every line, concealed light profile, and stone joint under rigorous daily supervision.',
  },
  {
    step: '05',
    title: 'Styling, QA & Turnkey Handover',
    subtitle: 'Ready to Live & Lead',
    description:
      'After multi-point quality control inspections, furniture placement, curtains, and ambient lighting calibration, we hand over a serene, complete, move-in-ready environment.',
  },
];

export interface MaterialPalette {
  id: string;
  name: string;
  amharicNote: string;
  mood: string;
  lightingTemp: string;
  description: string;
  swatches: { name: string; hex: string; material: string }[];
  previewImage: string;
  accentGlow: string;
}

export const MATERIAL_PALETTES: MaterialPalette[] = [
  {
    id: 'emerald-gold',
    name: 'Miseso Signature Emerald & Brass',
    amharicNote: 'የምሰሶ ልዩ ቅንጦት',
    mood: 'Architectural Prestige & Calm Depth',
    lightingTemp: '2700K Warm Gold Halo',
    description:
      'Inspired by Betelhem Engida’s signature brand atmosphere — pairing deep matte forest emerald walls with veined dark marble, cream bouclé upholstery, and warm brushed champagne brass.',
    swatches: [
      { name: 'Deep Emerald', hex: '#14261D', material: 'Matte Velvet Wall Finish' },
      { name: 'Champagne Gold', hex: '#D4B373', material: 'Brushed Brass Trim' },
      { name: 'Warm Cream', hex: '#EFE9DD', material: 'Tailored Linen Upholstery' },
      { name: 'Nero Marble', hex: '#181A19', material: 'Gold-Veined Stone' },
    ],
    previewImage: '/images/real/betty-campaign-clean.jpg',
    accentGlow: 'rgba(212, 179, 115, 0.24)',
  },
  {
    id: 'earth-parquet',
    name: 'Warm Earth & Parquet Harmony',
    amharicNote: 'ተፈጥሯዊ ሙቀት',
    mood: 'Timeless Residential Warmth',
    lightingTemp: '2700K–3000K Soft Ambient',
    description:
      'Demonstrated in our Tracon Real Estate 4-bedroom transformation: warm natural wood parquet balanced with off-white classical moldings, earth-brown cabinetry, and calm indirect ceiling light.',
    swatches: [
      { name: 'Off-White Plaster', hex: '#F3EFE7', material: 'Classical Molding Finish' },
      { name: 'Warm Taupe', hex: '#B8A690', material: 'Custom Matte Cabinetry' },
      { name: 'Roasted Walnut', hex: '#6E4F3A', material: 'Natural Wood Parquet' },
      { name: 'Soft Sand', hex: '#DDD3C3', material: 'Sheer Floor Drapery' },
    ],
    previewImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/tracon-2.png',
    accentGlow: 'rgba(184, 166, 144, 0.25)',
  },
  {
    id: 'travertine-hospitality',
    name: 'Luminous Travertine & Bronze',
    amharicNote: 'ብርሃናማ ቅንጦት',
    mood: 'Grand Hospitality & Serene Arrival',
    lightingTemp: '3000K Layered Architectural Glow',
    description:
      'Engineered for luxury hotel lobbies and corporate receptions like Desalegn Hotel and Gadaa Bank — luminous honed stone surfaces elevated by warm bronze inlays and sculptural lighting.',
    swatches: [
      { name: 'Honed Travertine', hex: '#E5DAC8', material: 'Italian Porcelain Stoneware' },
      { name: 'Antique Bronze', hex: '#8F7347', material: 'Architectural Metal Inlay' },
      { name: 'Warm Cream', hex: '#F5EFE2', material: 'Acoustic Gypsum Ceiling' },
      { name: 'Smoked Espresso', hex: '#342A23', material: 'Fluted Timber Columns' },
    ],
    previewImage: 'https://misesointeriors.com/wp-content/uploads/2026/03/DSC00122-scaled.jpg',
    accentGlow: 'rgba(229, 218, 200, 0.24)',
  },
  {
    id: 'slate-executive',
    name: 'Tailored Gray & Executive Walnut',
    amharicNote: 'ዘመናዊ ቢሮ',
    mood: 'Quiet Authority & Modern Clarity',
    lightingTemp: '3200K Linear Precision LED',
    description:
      'Proving gray is never ordinary when layered with warm walnut, stone veining, and acoustic glass — crafted for diplomatic banks and modern executive headquarters.',
    swatches: [
      { name: 'Warm Stone Gray', hex: '#8E8D89', material: 'Textured Mineral Coating' },
      { name: 'Charcoal Slate', hex: '#2D302E', material: 'Architectural Framing' },
      { name: 'Alabaster White', hex: '#F4F3F0', material: 'Clean Acoustic Planes' },
      { name: 'American Walnut', hex: '#5E4230', material: 'Executive Millwork' },
    ],
    previewImage: 'https://misesointeriors.com/wp-content/uploads/2026/04/Image_2.png',
    accentGlow: 'rgba(142, 141, 137, 0.22)',
  },
];
