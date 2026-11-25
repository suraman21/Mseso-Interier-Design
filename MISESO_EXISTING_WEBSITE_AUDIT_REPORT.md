# Comprehensive Technical, Security & UX Audit Report
## Existing Official Website: `https://misesointeriors.com/`

**Target Organization:** MISESO (ምሰሶ) Luxurious Interior Design & Build — Addis Ababa, Ethiopia  
**Audit Date:** November 25, 2026  
**Overall Risk Rating:** **CRITICAL (Active Compromise & Severe Brand/Lead Loss)**

---

## 1. Executive Summary

A live technical, security, SEO, and content audit of **`https://misesointeriors.com/`** reveals that the website is **currently and actively compromised by an automated gambling/casino SEO-spam attack**, alongside severe plugin bloat, broken lead-capture forms, outdated 2020 WordPress theme template leftovers, and mis-linked client portfolios.

### Headline Findings at a Glance
| Audit Domain | Severity | Key Finding |
| :--- | :---: | :--- |
| **Cybersecurity & Site Integrity** | **CRITICAL** | **Active WordPress takeover.** Both the primary `admin` account (`ID 1`) and a rogue `administrator1` account (`ID 13`) are actively publishing **1,000+ multilingual online-casino & APK spam articles** — with new spam published **as recently as November 25, 2026 at 13:36 UTC**. |
| **Lead Capture & Conversion** | **CRITICAL** | The `/contacts/` page displays raw, unrendered `[contact-form-7 ...]` shortcodes. **No prospective client can submit an inquiry through the website.** |
| **Platform & Plugin Architecture** | **HIGH** | Severe WordPress stack conflict: **3 competing SMTP plugins**, **2 competing page builders** (`Elementor` + `PageLayer`), **`Slider Revolution`**, **`Code Snippets`** (database PHP execution), and remote-admin REST APIs (`wpsm/v1`, `application-passwords`) exposed publicly. |
| **Portfolio & Brand Credibility** | **HIGH** | Five institutional/commercial project pages (including **Shaggar City Mayor Office**, **Abbahawa**, **Green Acres**, **Addis Way**, and **Residential G+4**) display **`Architect: David Oswald`**, **`Client: OceanThemes`**, **`Date: November 22, 2020`**, and photos belonging to **`Abiy Residence`**. |
| **Outdated / Unfinished Content** | **HIGH** | Fake demo testimonials (`Kristina Lee`, `Pablo Gusterio`, `Anna Paulina`), repeated broken-English placeholder quotes, 10+ blank `User.png` team avatars, truncated site tagline (`"...specialized in colo"`), dead `#` CTA buttons, and complete omission of the **Tafo (In Front of CCD)** second branch. |
| **SEO & Google Reputation** | **CRITICAL** | Google’s index for `misesointeriors.com` is poisoned with illegal/grey-market gambling links across 10+ languages (Spanish, German, Polish, Italian, Turkish, Greek, Russian, Swedish, Portuguese, English), risking a **Google Safe Browsing warning** or complete domain de-indexing. |

---

## 2. CRITICAL Security Findings (Active Compromise)

### 2.1 Active Unauthorized Content Injection (Live as of November 25, 2026)
`misesointeriors.com` is actively being exploited as a **hijacked backlink farm** by commercial online-gambling and Android APK spam operators.

- **Scale of Injection:** Over **100+ paginated blog pages** (`/blog-grid/page/100/` is active and full of spam), representing **1,000+ malicious posts** injected between early 2026 and **Post ID `9021`**, whereas the studio’s legitimate posts were around `ID 5819` (July 2025).
- **Live Activity Proof (Timestamped Today):**
  - `2026-11-25 13:36:03 UTC` — `Post #9021` by `administrator1`: *"Spiele Book of Ra 2026: So maximierst du deine Gewinnchancen"* (German slot-machine spam linking to `casino-online-sofort.com`).
  - `2026-11-25` — *"Total Casino: odkryj zasady ruletki..."* (Polish gambling spam).
  - `2026-11-25` — *"Rainbet player reviews..."* (UK crypto-casino spam).
  - `2026-11-24` — *"Chicken Road App Download APK guide..."* & *"NuggetSlots Casino Android APK..."* (third-party Android APK distribution — high malware risk).
  - `2026-11-24` — *"Pinco Casino mobil uygulaması..."* (Turkish) & *"I segreti dietro l'algoritmo delle slot machine online"* (Italian).
  - `2026-11-17` — `Post #8808` published **under `admin` (`ID 1`)**: *"Pin Up casino Chile en 2026"*.
  - `2026-01-25` — *"Las novedades en bonos de Circus Casino..."* (Spanish, already indexed in Google search results as a top `site:misesointeriors.com` result).

### 2.2 Evidence of Automated Backlink-Marketplace Control (`MAGICQA` Probe)
- `Post #8783` (`software-reliability-check-magicqa20261111al-02400`, authored by `administrator1`, modified `2026-11-15`) contains a telltale automated **SEO link-broker QA verification marker (`MAGICQA20261111AL`)**.
- **What this means:** Hacked-site brokers automatically test compromised WordPress domains to prove they have persistent write access before reselling link placements on underground marketplaces. Removing spam posts alone **will not fix the breach** because the attacker has automated persistence.

### 2.3 Compromised & Unauthenticated User Enumeration (`/wp-json/wp/v2/users`)
The WordPress REST API openly exposes user accounts without authentication at `https://misesointeriors.com/wp-json/wp/v2/users`:

| User ID | Username / Slug | Display Name | Risk Assessment |
| :---: | :--- | :--- | :--- |
| **`1`** | `admin` | `admin` | **CRITICAL:** Default, easily guessed administrator username — **actively compromised** (used to publish hundreds of casino spam posts across June–November 2026). |
| **`13`** | `administrator1` | `administrator1` | **CRITICAL:** Classic **rogue persistence administrator account** created by attackers to maintain backdoor access even if `admin`'s password is changed. Actively publishing spam today. |
| **`4`** | `bot` | `Service Bot` | **HIGH:** Unverified automated service/bot user account with publishing capabilities; must be audited and revoked immediately. |

### 2.4 Rogue Taxonomies Polluting the Database
Inspection of `/wp-json/wp/v2/categories` confirms attackers have created dozens of gambling taxonomies directly inside the WordPress database, including:
- `casino` (`ID 45`)
- `betscore-casino-italia.it` (`ID 58`) with nested sub-categories `App Mobile`, `Betscore`, `Bonus Sport`, `Casinò Online`, `Crypto Casinò`
- `Betflag Deutschland` (`ID 94`), `Betsson Ελλάδα` (`ID 86`), `aoth.gr` (`ID 46`), `Winnita`
- Meanwhile, the studio’s own legitimate category contains a spelling error: **`Achitecture`** (`ID 2`).

### 2.5 Dangerous Plugin & API Attack Surface (`/wp-json/`)
Public inspection of `https://misesointeriors.com/wp-json/` reveals a bloated, conflict-prone, and high-risk plugin stack:

1. **`code-snippets/v1` (Arbitrary PHP Execution Risk):** Allows administrators to execute arbitrary PHP code directly from the database. Because attackers control `admin` and `administrator1`, malicious PHP backdoors can survive standard file-only cleanups.
2. **Remote Administration & Auth Endpoints Active:**
   - `wpsm/v1` exposes `/wpsm/v1/connection`, `/wpsm/v1/admins`, and `/wpsm/v1/ping` (remote WordPress site-management connector).
   - **WordPress Application Passwords** are enabled (`/wp-admin/authorize-application.php`), a frequent persistence mechanism allowing attackers to post via REST API even after normal login sessions expire.
   - Multiple AI/MCP & experimental REST namespaces are active (`elementor-mcp-composer/v1.0.22`, `mcp`, `wp-abilities/v1`, `elementor-ai/v1`).
3. **High-Vulnerability Legacy Plugins:**
   - **`Slider Revolution` (`sliderrevolution`)** — historically one of the top targeted plugins in WordPress mass-exploitation campaigns.
   - **`PageLayer` (`pagelayer/v1`)** + **`Elementor`** + **`ElementsKit`** — running multiple heavy page-builder engines simultaneously multiplies CVE exposure and slows every page load.
4. **Three Competing SMTP Plugins Active Simultaneously:**
   - `fluent-smtp` + `gosmtp-smtp` + `wp-mail-smtp` are all active at once. Overlapping mail hooks risk broken transactional emails, credential leaks, and outbound spam relay abuse (which can blacklist `misesointeriors.com` for corporate email delivery!).

---

## 3. Outdated Architecture & Unfinished Template Artifacts

The current site is built on the **`Theratio` WordPress theme by OceanThemes** (initial demo media dated **May–June 2020**), and large portions of the demo template were never removed or replaced.

### 3.1 Broken & Outdated Portfolio Data Integrity
Five flagship portfolio pages contain **false demo metadata and completely wrong photographs**:

- **Affected Pages:**
  1. `/portfolio/shaggar-city-mayor-office/`
  2. `/portfolio/green-acres-coffee-export-office/`
  3. `/portfolio/abbahawa-coffee-export-office/`
  4. `/portfolio/addis-way-real-estate/`
  5. `/portfolio/residential-g4-project/`
- **Issues Observed on Live Pages:**
  - Every one of these institutional/commercial projects credits **`Architect: David Oswald`**, **`Client: OceanThemes`**, **`Terms: 6 month`**, and **`Date: November 22, 2020`** — and repeats that entire metadata block **twice** on the same page.
  - All five pages display **5 residential photos belonging to `Abiy Residence`** (`photo_2026-04-01_03-04-37.jpg` through `03-04-55.jpg`) in their gallery section instead of their own images.
  - Social share buttons (`X-twitter`, `Facebook-f`, `Linkedin-in`, `Instagram`) on portfolio detail pages point to dead `#` anchor links.

### 3.2 Unprofessional Demo Placeholders on `/about-us/` and `/our-services/`
- **Fake Demo Testimonials:** `/about-us/` and `/our-services/finishes-material-consulting/` still display OceanThemes stock personas — **`Kristina Lee`**, **`Pablo Gusterio`**, and **`Anna Paulina`** — alongside duplicated carousel slides.
- **Copy-Pasted Broken-English Quotes:** A second testimonials slider on `/about-us/` repeats the exact same grammatically broken demo quote — *"You will never fake the feeling of being in such a place. The live minimalism base on the natural materials & alive unprocessed."* — identically across **`Tsednia K.`**, **`Abreham S.`**, and **`Shalom B.`**, using stock avatars from `2020/05/testi1.png`, `testi2.png`, and `testi3.png`.
- **Broken "Meet Our Team" Section:** Displays **10+ blank placeholder `User.png` silhouettes** with no names or roles, while repeating **`Bethlehem [CEO | Founder]`** three times (and misspelling her name as `Bethlehem` instead of `Betelhem`, which is used on the homepage).
- **Incomplete Process Copy:** Under *"How We Work"*, the second step (**"Concept & Design Development"**) has no explanation — it merely repeats the heading `"Concept & Design Development"` as its body paragraph.
- **2020 Stock Theme Images Still Live:** Unrelated 2020 OceanThemes stock assets (`2020/05/support1.jpg`, `support2.jpg`, `support3.jpg`, `image2-aboutus.png`, `2020/06/image2-home3.jpg`) remain published on the homepage and About page.

### 3.3 Outdated Business & Location Information
- **Missing Second Branch:** The site only lists **Hayahulet Signal — Dema Hope Real Estate, 3rd Floor**, completely omitting Miseso’s active **Second Branch Office at Tafo (In Front of CCD)** promoted on their TikTok and social channels.
- **Static Age Claim:** Hardcodes *"Established four years ago"* in static prose without an anchoring founding year, causing company facts to drift out of date automatically.

---

## 4. Broken Functionality, UX & Conversion Defects

### 4.1 Completely Broken Contact Form (`/contacts/`)
On `https://misesointeriors.com/contacts/`, the Contact Form 7 plugin is inactive or misconfigured, causing visitors to see **raw unrendered shortcodes** on screen:
```text
[contact-form-7 id="390feaa" title="Contact form mod"]
[contact-form-7 id="d03012d" title="Contact form mod amh"]
[contact-form-7 id="390feaa" title="Contact form mod"]
```
**Business Impact:** 100% of web contact-form leads are currently lost — including diaspora and institutional inquiries that cannot easily call by local phone.

### 4.2 Broken / Improper Social Media Links
- **Instagram Redirect Wrapper on YouTube Link:** Both the homepage and `/contacts/` link the YouTube icon to:
  `https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40bettyinteriordesigner...&e=AT0FPdHm...`
  Because this was copied from inside Instagram’s outbound link-shim (`l.instagram.com`), visitors clicking YouTube are routed through an expiring Instagram warning interstitial instead of going directly to `https://www.youtube.com/@bettyinteriordesigner`.
- **Dead CTA Buttons:** On `/about-us/`, the primary **`View Projects`** button links to `https://misesointeriors.com/about-us/#` (does nothing).
- **Combined Malformed Mailto Link:** On `/contacts/`, both `contact@misesointeriors.com` and `info@misesointeriors.com` are merged into a single anchor text pointing only to `mailto:contact@misesointeriors.com`.

### 4.3 Truncated Site Title & SEO Metadata
- The WordPress Site Tagline is literally truncated mid-word everywhere — in `<title>`, Google search snippets, and `/wp-json/`:
  > **`Miseso Interiors – Luxurious interior design studio, specialized in colo`**
- `robots.txt` contains only default WordPress rules (`Disallow: /wp-admin/`) with **no XML sitemap declaration**, while search engines crawl thousands of spam casino URLs instead of Miseso’s real services and projects.
- **Broken Counter Hydration:** The `/about-us/` statistics section outputs raw empty brackets (`[+]`, `[%]`, `[]`) in initial HTML without SSR fallback values, hurting accessibility and SEO crawlers.
- **No Dedicated Brand Story or Visual Identity Alignment:** The legacy dark-gray Theratio template bears no resemblance to Miseso’s recognizable **emerald-green, champagne-gold, ivory, and Ge’ez house-pillar (ምሰሶ)** brand identity.

---

## 5. Immediate Remediation & Migration Roadmap

Because **both the `admin` account and a rogue `administrator1` account are compromised**, `Code Snippets` and remote admin connectors are installed, and **1,000+ spam URLs** are embedded in the database, **a surface-level WordPress cleanup is unsafe and unreliable**.

### Phase 1 — Emergency Containment (Immediate: Within 24 Hours)
1. **Take the compromised WordPress site offline / into maintenance mode** (or cut over DNS directly to the clean static/React site) to stop ongoing gambling spam publishing and prevent Google Safe Browsing blacklisting.
2. **Revoke all WordPress credentials & Application Passwords**, delete rogue users (`administrator1`, `bot`), rotate database passwords, cPanel/hosting credentials, FTP/SSH keys, and SMTP passwords associated with `contact@misesointeriors.com` and `info@misesointeriors.com`.
3. **Audit Email DNS Records (`SPF`, `DKIM`, `DMARC`)** to confirm attackers did not use the 3 installed SMTP plugins to send spam from `misesointeriors.com` and degrade domain mail reputation.

### Phase 2 — Decommission Vulnerable WordPress Stack & Deploy Modern Architecture
1. **Replace the legacy WordPress/Elementor/PageLayer/Slider Revolution stack** with the newly built static React/TypeScript web application (zero PHP runtime, zero SQL database, zero plugin vulnerability surface, zero `/wp-admin` or `/wp-json` attack surface).
2. **Host behind modern HTTPS CDN infrastructure** (e.g., Cloudflare Pages, Vercel, or Netlify) with strict security headers (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`).
3. **Connect the new Consultation Form** to a secure, spam-protected form backend (e.g., Formspree, Web3Forms, or a hardened serverless endpoint forwarding directly to `contact@misesointeriors.com` with rate-limiting/Turnstile).
4. **Migrate all project images locally or to a clean CDN bucket** so the new website has zero runtime dependency on the compromised `misesointeriors.com/wp-content/uploads/` server once it is decommissioned.

### Phase 3 — Search Engine Recovery & Reputation Cleanup (Weeks 1–4)
1. **Return `410 Gone`** HTTP status codes for all hacked `/2026/*`, `/2025/*` spam blog URLs and rogue gambling category routes (`/category/casino/*`, `/category/betscore*`, `/category/winnita*`, etc.) so Google rapidly purges them from search results.
2. **Verify domain ownership in Google Search Console**, check the *Security Issues* & *Manual Actions* tabs, submit a clean `sitemap.xml` containing only the legitimate routes (`/`, `/story`, `/projects`, `/services`, `/contact`), and request re-indexing.
3. **Set up `301 Permanent Redirects`** from legitimate old URLs (`/about-us/` → `/story`, `/portfolio-gallery/` → `/projects`, `/contacts/` → `/contact`) to preserve genuine SEO equity.
