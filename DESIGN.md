# Craft Web Studio — Design System

> Audit with precision. Build with intent.

**Product:** Premium website review, audit, design, and development studio  
**Theme:** light luxury  
**Brand promise:** Craft Web Studio turns underperforming websites into clear, fast, trustworthy digital experiences. We inspect the evidence, identify the highest-impact opportunities, and either optimize the existing site or build the right one from the ground up.

Craft Web Studio uses a bright, editorial interface that makes evidence feel considered and valuable. The Soft White Canvas (`#fafafc`) and Pure White (`#ffffff`) create a clean, open environment, while Navy Slate (`#0f172a`) gives the brand authority. Royal Blue (`#2563eb`) marks the primary action, Amber (`#f59e0b`) identifies review stars and warranty badges, and Emerald (`#10b981`) confirms verified growth and completed outcomes. Premium comes from clarity, restraint, material quality, and the quality of the work.

## Tokens — Colors

| Name              | Value     | Token                       | Role                                                                       |
| ----------------- | --------- | --------------------------- | -------------------------------------------------------------------------- |
| Soft White Canvas | `#fafafc` | `--color-soft-white-canvas` | Dominant page background, hero base, section canvases, and footer          |
| Pure White        | `#ffffff` | `--color-pure-white`        | Card surfaces, form containers, and clean content areas                    |
| Navy Slate        | `#0f172a` | `--color-navy-slate`        | Headings, navigation, brand mark, and high-authority text                  |
| Slate Border      | `#cbd5e1` | `--color-slate-border`      | Structural dividers, scorecard rules, and low-emphasis borders             |
| Mist Border       | `#e2e8f0` | `--color-mist-border`       | Input edges, ghost buttons, focused outlines, and fine hairlines           |
| Slate Text        | `#475569` | `--color-slate-text`        | Muted descriptions, metadata, helper text, and measurement labels          |
| Royal Blue        | `#2563eb` | `--color-royal-blue`        | Primary CTA, focused conversion action, and selected navigation state      |
| Amber Star        | `#f59e0b` | `--color-amber-star`        | Google/Yelp five-star icons and warranty badges only                       |
| Emerald Growth    | `#10b981` | `--color-emerald-growth`    | Verified growth metrics, completed checks, and positive outcome indicators |

**Accent rule:** Royal Blue is the only action color. Amber is reserved for review stars and warranty badges. Emerald is reserved for verified growth metrics and completed checks. Never substitute these semantic roles or use them as decorative gradients.

## Tokens — Typography

### arcadia — Body and UI

The working voice of the studio. Use for navigation, body copy, buttons, inputs, labels, audit notes, data values, and service details. The intermediate weights keep technical content calm and deliberate.

- **Preferred face:** Inter
- **Fallbacks:** Geist, Söhne, ui-sans-serif, system-ui
- **Weights:** 360, 400, 420, 480
- **Sizes:** 12px, 14px, 16px, 18px, 21px
- **Line height:** 1.00–1.50
- **Letter spacing:** 0.005em at 14px, 0.01em at 12px
- **Token:** `--font-arcadia`

### arcadiaDisplay — Headlines and studio statements

Use for the brand statement, section headings, service names, and high-signal recommendations. Geist or Söhne Breit may be used when available to create a broad, engineered silhouette without resorting to heavy bold weights.

- **Preferred face:** Geist
- **Display substitute:** Söhne Breit
- **Fallbacks:** Inter, ui-sans-serif, system-ui
- **Weights:** 360, 480, 530
- **Sizes:** 21px, 24px, 28px, 32px, 42px, 49px, 65px
- **Line height:** 1.10–1.20
- **Letter spacing:** 0.01em at 42px, 0.015em at 32px, 0.02em at 24px
- **Token:** `--font-arcadiadisplay`

### Type Scale

| Role       | Family         | Weight | Size | Line Height | Letter Spacing | Token               |
| ---------- | -------------- | ------ | ---- | ----------- | -------------- | ------------------- |
| caption    | arcadia        | 400    | 12px | 1           | 0.12px         | `--text-caption`    |
| body-sm    | arcadia        | 400    | 14px | 1           | 0.07px         | `--text-body-sm`    |
| body       | arcadia        | 400    | 16px | 1.5         | —              | `--text-body`       |
| body-lg    | arcadia        | 400    | 18px | 1.35        | —              | `--text-body-lg`    |
| subheading | arcadiaDisplay | 480    | 21px | 1.35        | —              | `--text-subheading` |
| heading-sm | arcadiaDisplay | 480    | 28px | 1.2         | 0.42px         | `--text-heading-sm` |
| heading    | arcadiaDisplay | 480    | 32px | 1.15        | 0.48px         | `--text-heading`    |
| heading-lg | arcadiaDisplay | 480    | 42px | 1.15        | 0.42px         | `--text-heading-lg` |
| display    | arcadiaDisplay | 480    | 65px | 1.1         | —              | `--text-display`    |

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** spacious, with compact data clusters inside scorecards

### Spacing Scale

| Name | Value | Token           |
| ---- | ----- | --------------- |
| 4    | 4px   | `--spacing-4`   |
| 8    | 8px   | `--spacing-8`   |
| 12   | 12px  | `--spacing-12`  |
| 16   | 16px  | `--spacing-16`  |
| 20   | 20px  | `--spacing-20`  |
| 24   | 24px  | `--spacing-24`  |
| 32   | 32px  | `--spacing-32`  |
| 40   | 40px  | `--spacing-40`  |
| 56   | 56px  | `--spacing-56`  |
| 72   | 72px  | `--spacing-72`  |
| 112  | 112px | `--spacing-112` |
| 128  | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
| ------- | ----- |
| nav     | 40px  |
| tags    | 40px  |
| cards   | 12px  |
| inputs  | 32px  |
| buttons | 32px  |
| default | 4px   |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 72px
- **Card padding:** 32px
- **Element gap:** 12px
- **Audit data grid:** 4 equal columns at desktop, one column at mobile
- **Service comparison:** 2 equal columns at desktop, stacked at mobile

## Components

### Primary CTA Button — Royal Blue

**Role:** The single highest-priority action in a view, such as `Inspect my website`, `Book a review`, or `Start a project`.

Use a `#2563eb` Royal Blue fill, Pure White text at 16px, 32px radius, and 12px vertical / 24px horizontal padding. Use a fine border instead of a heavy shadow. Every page should have one clear Royal Blue action hierarchy; do not place multiple Royal Blue buttons directly beside one another.

### Ghost Outline Button

**Role:** Secondary actions such as `View case study`, `See the process`, or `Compare services`.

Use a transparent background, 1px Slate Border, Navy Slate text at 16px, 40px radius, and 10px vertical / 20px horizontal padding. It must never compete with the Royal Blue action.

### Navigation Pill Link

**Role:** Top-bar navigation for `Audit`, `Web Design`, `Development`, `Work`, and `About`.

Use a Navy Slate label at 16px, 40px radius, and 20px horizontal padding. The transparent bar becomes a Pure White surface with a fine Mist Border on scroll. The active page uses Slate Border, not Royal Blue.

### URL Inspection Bar

**Role:** A friction-light entry point for requesting an immediate website review.

This replaces the former email capture component. It is a single pill-shaped form composed of a Google Maps or website URL input and attached Royal Blue submit action.

- Outer wrapper: `#ffffff` background, 1px Mist Border, 32px radius, no shadow.
- Input: transparent, `type="url"`, Navy Slate text, Slate Text placeholder such as `Google Maps or website URL`, 16px type, 20px left padding.
- Action: Royal Blue fill, Pure White label `Nhận audit uy tín miễn phí`, 32px radius, 14px vertical / 24px horizontal padding.
- Desktop layout: input expands to fill available width and action stays content-sized.
- Mobile layout: the form remains a stable vertical stack with a full-width action beneath the input; retain 12px internal gap.
- Validation: accept a Google Maps or website URL, normalize it before inspection, and show an inline error in Navy Slate/Slate Text without introducing a red accent color.
- Supporting line: `Phân tích bước đầu miễn phí. Không cam kết.` at caption size below the control.

### Audit Scorecard Card

**Role:** A compact, evidence-led summary of a website's health and highest-impact opportunities.

Use a White Card surface, 12px radius, 32px padding, and no shadow. The card has a business identity row, one total score, and four equally weighted criteria:

| Criterion             | What it measures                                                         | Example label       |
| --------------------- | ------------------------------------------------------------------------ | ------------------- |
| Performance           | Core Web Vitals, loading cost, image and script weight                   | `Needs attention`   |
| UX/UI conversion flow | Clarity of hierarchy, trust signals, navigation, and path to enquiry     | `Promising`         |
| SEO on-page           | Crawlability, metadata, headings, internal linking, and content intent   | `In progress`       |
| Mobile responsiveness | Layout stability, tap targets, readable type, and mobile task completion | `Strong foundation` |

Each criterion uses a 0–100 score, a plain-language status, and one next-step sentence. Use Royal Blue only for the selected criterion, total score emphasis, or the `Nhận báo cáo đầy đủ` action. Use Emerald for verified completed checks. Do not imply false precision: show `Chưa đo lường` when evidence is unavailable.

Recommended structure:

```text
example.com                                      Reviewed 21 Sep 2026
Website health score                             78 / 100

Performance              84   Strong foundation
UX/UI conversion flow    72   Promising
SEO on-page              66   In progress
Mobile responsiveness    90   Strong foundation

The clearest opportunity: reduce friction between service discovery and enquiry.
[Get the full audit]
```

### Service Comparison

**Role:** Help a visitor choose between improving an existing website and creating a new one.

Present exactly two primary paths with equal visual weight. Both are White Cards; neither is visually subordinate. Use clear outcomes rather than vague feature lists.

|                | Audit & Optimize                                                               | Design & Build                                                                    |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Best for       | A website that has useful foundations but loses attention, trust, or enquiries | A new offer, rebrand, or outdated site that needs a stronger foundation           |
| Starting point | URL inspection, analytics context, and stakeholder goals                       | Discovery, positioning, content architecture, and technical requirements          |
| Core work      | Performance, UX/UI flow, SEO on-page, accessibility, and mobile review         | Strategy, art direction, UX/UI design, responsive development, CMS, and launch QA |
| Deliverable    | Prioritized audit with evidence, severity, and an implementation roadmap       | Designed and developed website with a deliberate conversion path                  |
| CTA            | `Review my website`                                                            | `Plan a new website`                                                              |

Add a small `Chưa biết chọn gói nào?` text link below the two cards that routes to a consultation. Use Royal Blue on only the selected or primary path action.

### White Card

**Role:** A flat grouping surface for findings, services, case studies, process steps, and proof.

Use `#ffffff`, 12px radius, 32px padding, no shadow, and no decorative gradient. A card may contain one image or one data visualization, but never another card inside it.

### Technical Metric Row

**Role:** Make website quality legible at a glance.

Show a metric name, measured value, comparison or status, and a one-line implication. Examples include `LCP 2.1s`, `CLS 0.04`, `Mobile task completion 3/5`, and `Primary CTA visibility above fold`. Use tabular numerals where available and keep status language descriptive rather than color-dependent.

### Full-Bleed Studio Hero

**Role:** Establish the studio's point of view and lead directly into inspection.

Use a full-width Soft White Canvas with a refined visual layer: a crisp website UI screenshot, Google review interface, local business storefront detail, or metric panel framed like a gallery artifact. Do not use mountain landscapes, generic laptop stock photography, or atmospheric imagery that hides the work. The headline can be:

> Your website should make the next step obvious.

Support it with: `We audit what is holding your site back, then design and build the experience your business needs next.` Place the URL Inspection Bar directly in the hero or immediately below it.

### Transparent Top Navigation Bar

**Role:** Persistent orientation across the studio site.

Place the Craft Web Studio wordmark on the left, service links in the center, and a compact `Nhận audit miễn phí` Royal Blue action on the right. On scroll, apply a Pure White surface and a fine Mist Border. Navigation labels are `Review`, `Thiết kế Website`, `Quảng cáo Map`, `Báo giá`, and `Dự án mẫu`.

### Case Study Evidence Strip

**Role:** Connect studio work to measurable outcomes.

Use a horizontal sequence of `Before`, `Intervention`, and `After` with a product screenshot or annotated UI crop. Pair each visual with one metric or observable result. Never fabricate performance numbers; use `Result pending measurement` when a case study lacks verified data.

### Section Container

**Role:** Horizontal wrapper between hero, proof, services, process, and footer.

Use the Soft White Canvas with a 1200px max-width inner container and 72px vertical padding. Recommended order: hero and URL inspection, trust statistics, two core services, before/after case studies, testimonials, combo pricing, contact form, and footer.

## Do's and Don'ts

### Do

- Use Royal Blue `#2563eb` exclusively for the primary action, selected scorecard state, and focused conversion moments.
- Use Amber `#f59e0b` only for Google/Yelp five-star icons and warranty badges.
- Use Emerald `#10b981` only for verified growth metrics and completed checks.
- Make every recommendation traceable to a visible observation, measurement, screenshot, or stated business goal.
- Keep all cards `#ffffff` with 12px radius and 32px padding; rely on value contrast and fine borders instead of shadows.
- Use arcadiaDisplay at weight 480 for headings and arcadia at weight 400 for body copy.
- Use 32px or 40px pill radii for controls, inputs, tags, and navigation.
- Maintain 72px rhythm between major sections and 4px spacing increments within components.
- Show technical information in plain language so a non-technical decision-maker can act on it.
- Use real UI/UX screenshots, browser frames, audit annotations, performance tables, and responsive states as visual material.

### Don't

- Do not use multiple bright accent colors for statuses; do not introduce green, red, orange, or purple badges.
- Do not use decorative finance imagery, mountain landscapes, generic office stock, or abstract gradients as the primary visual.
- Do not use a score without naming what was measured, when it was measured, and what action it suggests.
- Do not add drop shadows, glassmorphism, nested cards, or colored section bands.
- Do not use bold weights of 700 or above for headings.
- Do not use sharp corners on buttons, inputs, tags, or navigation items.
- Do not promise guaranteed rankings, conversion lifts, or performance outcomes without evidence.
- Do not make the audit feel like a punishment; frame findings as prioritized opportunities.

## Surfaces

| Level | Name              | Value     | Purpose                                                               |
| ----- | ----------------- | --------- | --------------------------------------------------------------------- |
| 0     | Soft White Canvas | `#fafafc` | Base page background, hero, section canvases, and footer              |
| 1     | Pure White Card   | `#ffffff` | Audit findings, service paths, case study blocks, and form containers |
| 2     | Light Slate       | `#f1f5f9` | Secondary controls, URL input wrapper, and quiet interactive surfaces |

## Elevation

Craft Web Studio deliberately avoids heavy shadows. Hierarchy comes from Soft White-to-White contrast, spacious composition, fine borders, typography, and content grouping. This keeps the interface feeling like a refined editorial studio: the local business, its reputation, and the quality of its website carry the visual weight.

## Imagery

Imagery must reveal the actual work. Prefer high-resolution website UI, responsive browser views, Google review panels, map listing snapshots, elegant local-business interiors, annotated audit captures, conversion-flow diagrams, and before/after interface states. Crop screenshots tightly enough to expose hierarchy and interaction, but keep the surrounding ivory canvas generous.

Use photography only when it supports the client context or team credibility. It should be bright, documentary, crisp, and secondary to the website itself: nail studios, spas, restaurants, beauty clinics, and their real customer-facing spaces. Avoid dark blurred backgrounds, generic devices with unreadable screens, and visual noise that competes with the service. Icons are minimal line or glyph forms in Navy Slate or Royal Blue; use Amber only for stars and warranty badges.

## Layout

Use a full-width Soft White Canvas with a 1200px content system. The hero uses a two-part composition on desktop: a left-aligned statement and URL Inspection Bar, with a right-side browser mockup, Google review panel, or scorecard visual. On mobile, stack the statement, inspection form, and visual in that order. Follow with trust statistics, the two-path Service Comparison, before/after case studies, testimonials, a combo offer, and contact CTA.

Use 2-column layouts for statement-plus-evidence sections and 4-column grids only for scorecard criteria or compact metrics. Keep all text blocks readable at approximately 520px maximum width. There is no sidebar; primary orientation lives in the top navigation and local section labels.

## Agency Landing Page Wireframe

1. **Header:** Craft Web Studio wordmark, `Review`, `Thiết kế Website`, `Quảng cáo Map`, `Báo giá`, `Dự án mẫu`, and a visible hotline or quick-contact action.
2. **Hero:** Lead with a promise such as `Giúp cơ sở của bạn được tin tưởng, được tìm thấy và được chọn.` Pair the statement with the URL Inspection Bar for a free reputation audit.
3. **Trust statistics:** Show verified figures for businesses served, five-star reviews generated or managed, and returning-customer rate. Never invent values; use placeholders until the data is confirmed.
4. **Two core services:** Present `Quản lý & Tăng Review 5 sao` and `Thiết kế Website chuẩn chuyển đổi` as equal White Cards with clear outcomes and a single Royal Blue CTA hierarchy.
5. **Before & After:** Show a website or listing before the intervention, the key improvements, and the measured after state. Include review score, review volume, booking or enquiry conversion, and mobile quality where available.
6. **Testimonials slider:** Use real quotes from nail salon, spa, restaurant, and beauty clinic owners. Include owner name, business type, location, and permission status for every quote.
7. **Combo offer and contact:** Close with a White Card containing service selection, business type, website or Google Maps URL, name, phone, and consultation request. Place the hotline beside the form, not hidden in the footer.
8. **Footer:** Repeat the primary contact route, service links, operating area, privacy link, and a concise trust statement.

## Motion & Trust Effects

Motion should communicate care, progress, and evidence. It must never create urgency through flashing, shaking, fake notification badges, or countdown timers. The visual tempo is slow, composed, and editorial.

### Recommended Effects

- **Hero reveal:** Fade the wordmark, headline, supporting copy, and URL Inspection Bar upward by 8px in a staggered 80ms sequence. Run once on first load, with a total duration under 700ms.
- **Inspection progress:** After URL submission, replace the button label with a calm three-step status: `Đang kết nối`, `Đang phân tích`, `Đã sẵn sàng`. Use a thin Royal Blue progress line that advances only when the corresponding step is actually complete.
- **Scorecard reveal:** Animate each verified score from 0 to its measured value over 900ms when the card enters the viewport. Keep the number visible as text and provide the final value to screen readers without requiring animation.
- **Trust statistics:** Use a one-time count-up for verified business count, review volume, and returning-customer rate. Start only when visible; never loop or increment fabricated numbers.
- **Before & After transition:** Use a restrained horizontal wipe or draggable comparison to reveal the actual interface change. Keep labels `Trước` and `Sau` persistent so the meaning is never dependent on motion.
- **Testimonial slider:** Auto-advance no faster than 7 seconds and pause on hover, focus, touch, or keyboard interaction. Always show previous/next controls and an active position indicator.
- **CTA feedback:** On submit, use a 2px Royal Blue focus ring and a short 160ms scale response. Use Emerald only for the final completed state. Avoid bouncing, confetti, or large success animations that can feel promotional rather than dependable.
- **Scroll reveal:** Reveal section headings, evidence rows, and cards with opacity plus a maximum 12px vertical movement. Do not hide core content when JavaScript is unavailable.

### Trust Safeguards

- Every animated number must have a visible label, measurement period, and source context where applicable.
- Do not animate star ratings, testimonials, review counts, or business outcomes in a way that suggests live activity if the data is static.
- Use CSS transitions and transform/opacity where possible to avoid layout shift and maintain mobile performance.
- Respect `prefers-reduced-motion: reduce`: remove movement, count-up, auto-advance, and staggered delays while preserving content and final states.
- Keep interaction feedback under 200ms for controls; reserve 600–900ms transitions for evidence entering the viewport.

### Motion Tokens

| Token               | Value                            | Use                                         |
| ------------------- | -------------------------------- | ------------------------------------------- |
| `--motion-fast`     | `160ms`                          | Button feedback, focus, small state changes |
| `--motion-standard` | `320ms`                          | Cards, navigation, hover, and form states   |
| `--motion-reveal`   | `700ms`                          | First-load hero and section reveals         |
| `--motion-evidence` | `900ms`                          | Verified score and metric transitions       |
| `--ease-luxury`     | `cubic-bezier(0.22, 1, 0.36, 1)` | Calm deceleration for editorial movement    |

## Agent Prompt Guide

### Quick Color Reference

- Canvas: `#fafafc` Soft White
- Card: `#ffffff` Pure White
- Brand text: `#0f172a` Navy Slate
- Muted text: `#475569` Slate
- Border: `#e2e8f0` Mist or `#cbd5e1` Slate
- Primary action: `#2563eb` Royal Blue
- Review stars and warranty: `#f59e0b` Amber
- Growth and completed checks: `#10b981` Emerald

### Example Component Prompts

1. Create a URL Inspection Bar with a Google Maps or website URL field and attached `Nhận audit uy tín miễn phí` Royal Blue button. Use a 32px pill radius, White wrapper, Navy Slate input text, Slate placeholder, no heavy shadow, and a responsive stacked layout on mobile.

2. Create an Audit Scorecard Card for a local business with one 0–100 total score and four criteria: Review trust, Website conversion, Map visibility, and Mobile responsiveness. Use Amber for five-star icons, Emerald for verified completed checks, and Royal Blue for the selected state and full-audit action.

3. Create a Service Comparison with two equal White Cards: `Quản lý Review & Uy tín` and `Thiết kế Website trọn gói`. Include best-for, starting point, core work, deliverable, and one action per path. Do not use a pricing-table visual language.

4. Create an agency hero with a Soft White Canvas, a crisp website and Google review visual, a 65px arcadiaDisplay heading, an 18px supporting statement, and the URL Inspection Bar. The hero should feel bright, formal, premium, and useful within the first viewport.

5. Create a Technical Metric Row for LCP, CLS, mobile task completion, or CTA visibility. Show the metric, value, source or date, status in text, and one implication. Keep the row readable without relying on color.

## Typography Philosophy

Typography should feel like a well-made tool: precise, calm, and confident. Geist or Söhne Breit at an intermediate display weight gives headlines enough presence without sales-heavy boldness. Inter handles the working layer of the product: navigation, form fields, technical labels, findings, and action copy. Use generous line height for explanations, tighter line height for measured display statements, and never rely on uppercase styling alone to create hierarchy.

## Similar Brands and References

- **Good Review Service** — Reference for turning an audit or visibility review into a clear business-growth entry point and a low-friction free assessment.
- **Linear** — Reference for restrained dark surfaces, measured typography, and technical product clarity.
- **Stripe** — Reference for explaining complex technical value through precise writing and structured proof.
- **Basecamp** — Reference for direct service language and a clear separation between what a client needs and how the team works.
- **Instrument** — Reference for premium digital craft, strong case-study presentation, and treating the website as the product.

## Prompt — Build The Website

Copy the prompt below into a coding AI after opening the target Next.js project. Replace values in square brackets before running it.

```text
Bạn là Senior Frontend Engineer và Product Designer. Hãy xây dựng một Agency Landing Page hoàn chỉnh, production-ready bằng Next.js App Router, TypeScript và Tailwind CSS v4 cho công ty [TÊN CÔNG TY]. Công ty cung cấp dịch vụ Quản lý/Tăng Review uy tín và Thiết kế Website trọn gói cho các cơ sở kinh doanh địa phương như tiệm nail, spa, nhà hàng và thẩm mỹ viện.

MỤC TIÊU
- Tạo cảm giác sạch sẽ, chuyên nghiệp, đáng tin cậy và cao cấp.
- Tập trung chuyển đổi chủ cơ sở thành khách hàng đăng ký audit hoặc tư vấn.
- Mobile-first, responsive hoàn chỉnh, nội dung tiếng Việt tự nhiên.
- Xây website thật có tương tác, không chỉ dựng mockup tĩnh.

STACK VÀ QUY ƯỚC
- Next.js App Router + TypeScript.
- Tailwind CSS v4, CSS variables trong app/globals.css.
- Dùng lucide-react cho icon; không tự vẽ SVG icon nếu đã có icon tương đương.
- Dùng component rõ ràng, semantic HTML, form label đầy đủ, keyboard navigation và focus-visible.
- Không cài thư viện animation nặng nếu CSS transition hoặc IntersectionObserver đáp ứng được.
- Tách dữ liệu nội dung thành mảng/constant để dễ thay đổi, không lặp JSX.
- Nếu project đã có cấu trúc hoặc design system, giữ pattern hiện tại và chỉ thêm phần cần thiết.

ĐỊNH HƯỚNG VISUAL BẮT BUỘC
- Background chính: Soft White #FAFAFC và Pure White #FFFFFF.
- Heading, logo, navigation, nội dung quan trọng: Navy Slate #0F172A.
- CTA chính duy nhất: Royal Blue #2563EB.
- Sao Google/Yelp 5 sao và huy hiệu bảo hành: Amber #F59E0B, chỉ dùng cho semantic review/warranty.
- Chỉ số tăng trưởng, tick hoàn thành, trạng thái thành công đã xác minh: Emerald #10B981.
- Muted text: Slate #475569.
- Border: Mist #E2E8F0 hoặc Slate Border #CBD5E1.
- Không dùng gradient tím, neon, glassmorphism, shadow nặng, background tối hoặc màu accent ngoài bốn vai trò trên.
- Card nền trắng, border mảnh, radius 12px. Button/input/nav dùng pill radius 32px–40px.
- Typography: Geist hoặc Söhne Breit cho heading nếu có, Inter làm body/UI fallback.
- Cảm giác tổng thể: editorial luxury, sáng, thoáng, đáng tin; không giống dashboard SaaS rẻ tiền.
- Ưu tiên hình ảnh và khoảng thở hơn văn bản; landing page phải dễ lướt trên mobile.
- Mỗi section chỉ dùng 1 headline, tối đa 1–2 câu mô tả ngắn và 1 CTA chính.
- Không viết các đoạn văn dài, không lặp lại cùng một lợi ích ở nhiều section, không nhồi keyword SEO vào giao diện.

CẤU TRÚC TRANG
1. Header sticky:
  - Logo [TÊN CÔNG TY].
  - Menu: Review, Thiết kế Website, Quảng cáo Map, Báo giá, Dự án mẫu.
  - Hotline [SỐ HOTLINE] và nút `Nhận audit miễn phí` màu Royal Blue.
  - Mobile có menu button accessible và panel điều hướng dễ đóng.

2. Hero:
  - H1 gợi ý: `Giúp cơ sở của bạn được tin tưởng, được tìm thấy và được chọn.`
  - Chỉ dùng một câu supporting copy ngắn để giải thích dịch vụ review, Google Map visibility và website chuyển đổi.
  - URL Inspection Bar gồm input Google Maps/Website URL và nút `Nhận audit uy tín miễn phí`.
  - Home/Hero bắt buộc có một ảnh chính nổi bật ở first viewport, đặt bên phải trên desktop và phía dưới nội dung trên mobile.
  - Ưu tiên ảnh thật, sáng và sắc nét của tiệm nail, spa, nhà hàng, thẩm mỹ viện hoặc ảnh chụp giao diện website đã triển khai.
  - Ảnh Hero có thể dùng `public/images/hero-local-business.webp` hoặc asset thật được cung cấp; nếu chưa có ảnh, tạo placeholder rõ ràng với đúng tỷ lệ và comment nơi thay ảnh.
  - Ảnh phải có `alt` mô tả ngắn, `width`/`height` hoặc `aspect-ratio` ổn định, `object-cover`, loading ưu tiên cho ảnh Hero và không làm layout shift.
  - Không dùng ảnh phong cảnh, ảnh laptop stock với màn hình không đọc được, ảnh quá tối hoặc ảnh làm nền khiến chữ khó đọc.

3. Trust statistics:
  - Chỉ hiển thị 3 số liệu ngắn: [SỐ CƠ SỞ] cơ sở, [SỐ REVIEW] review 5 sao, [TỶ LỆ]% tăng trưởng hoặc khách quay lại.
  - Số liệu có label, giai đoạn đo và nguồn. Dùng Emerald cho số liệu tăng trưởng.

4. Hai dịch vụ trọng tâm:
  - `Quản lý & Tăng Review 5 sao`: mô tả tối đa 2 câu, tập trung vào Google, Facebook, Yelp và bảo vệ uy tín.
  - `Thiết kế Website chuẩn chuyển đổi`: mô tả tối đa 2 câu, tập trung vào giao diện cao cấp, đặt lịch online và SEO.
  - Hai card có visual weight ngang nhau, mỗi card có một visual nhỏ, outcome ngắn và CTA.

5. Before & After / Case Studies:
  - Cho phép chuyển Before/After bằng slider hoặc tab accessible.
  - Chỉ hiển thị 2–3 chỉ số quan trọng: review score, booking/enquiry conversion và map visibility khi có dữ liệu.
  - Không bịa số liệu. Dùng `Đang cập nhật dữ liệu` nếu chưa xác minh.

6. Audit Scorecard:
  - Card gồm Review Trust, Website Conversion, Map Visibility, Mobile Responsiveness.
  - Điểm 0–100, trạng thái bằng text và một đề xuất hành động.
  - Amber chỉ cho sao review; Emerald cho check đã hoàn tất; Royal Blue cho selected state và CTA.

7. Testimonials slider:
  - Quote thật từ chủ tiệm nail, spa, nhà hàng hoặc thẩm mỹ viện.
  - Hiển thị tên, loại hình, khu vực và trạng thái đã được cho phép sử dụng.
  - Có nút prev/next, indicator, hỗ trợ keyboard.
  - Auto-advance tối thiểu 7 giây, pause khi hover/focus/touch.

8. Combo offer + contact:
  - Cho chọn `Quản lý Review`, `Thiết kế Website`, hoặc `Combo Review + Website`.
  - Field: họ tên, loại hình kinh doanh, số điện thoại, Google Maps/Website URL, nhu cầu.
  - Validate client-side, có label và thông báo lỗi rõ ràng.
  - Submit demo hiển thị trạng thái loading rồi success bằng Emerald; không giả vờ gửi nếu chưa có backend.

9. Footer:
  - Hotline, email, khu vực phục vụ, menu dịch vụ, privacy/terms và một trust statement ngắn; không thêm đoạn giới thiệu dài.

INTERACTION VÀ MOTION
- Hero reveal opacity + translateY tối đa 8px, chạy một lần dưới 700ms.
- Inspection progress gồm `Đang kết nối`, `Đang phân tích`, `Đã sẵn sàng`; chỉ hiển thị progress khi trạng thái tương ứng thực sự xảy ra.
- Count-up chỉ chạy một lần cho số liệu đã xác minh, không loop.
- Scorecard reveal trong 900ms nhưng final value phải có sẵn cho screen reader.
- CTA feedback 160ms, focus ring Royal Blue 2px.
- Scroll reveal opacity + translateY tối đa 12px; nội dung vẫn hiển thị nếu JavaScript tắt.
- Tôn trọng `prefers-reduced-motion: reduce`: tắt animation, count-up, auto-advance và stagger nhưng giữ nguyên final state.

RESPONSIVE VÀ ACCESSIBILITY
- Mobile-first ở 320px trở lên; kiểm tra ít nhất 375px, 768px và 1440px.
- Không để text, button, card hoặc form bị tràn ngang.
- Touch target tối thiểu 44px.
- Tương phản màu đạt WCAG AA ở body text và button text.
- Dùng heading hierarchy đúng, landmark main/nav/footer, aria-label cho icon button và alt text cho ảnh.
- Không chỉ dùng màu để truyền đạt trạng thái; luôn có text label.

YÊU CẦU OUTPUT VÀ VALIDATION
- Trước tiên kiểm tra cấu trúc project hiện có, sau đó implement trực tiếp vào file phù hợp.
- Không hỏi lại các yêu cầu đã có; nếu thiếu asset thật, dùng placeholder có tên rõ ràng và ghi nơi cần thay.
- Chạy formatter, lint, typecheck và build sau khi code.
- Sửa các lỗi do chính thay đổi này gây ra.
- Cuối cùng báo cáo ngắn: file đã tạo/sửa, tính năng đã hoàn thành, lệnh validation và các placeholder còn cần thay.
```

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-soft-white-canvas: #fafafc;
  --color-pure-white: #ffffff;
  --color-navy-slate: #0f172a;
  --color-slate-border: #cbd5e1;
  --color-mist-border: #e2e8f0;
  --color-slate-text: #475569;
  --color-royal-blue: #2563eb;
  --color-amber-star: #f59e0b;
  --color-emerald-growth: #10b981;

  /* Typography — Font Families */
  --font-arcadia:
    "Inter", "Geist", "Söhne", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-arcadiadisplay:
    "Geist", "Söhne Breit", "Inter", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1;
  --tracking-body-sm: 0.07px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.35;
  --text-subheading: 21px;
  --leading-subheading: 1.35;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.42px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: 0.48px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: 0.42px;
  --text-display: 65px;
  --leading-display: 1.1;

  /* Typography — Weights */
  --font-weight-w360: 360;
  --font-weight-regular: 400;
  --font-weight-w420: 420;
  --font-weight-w480: 480;
  --font-weight-w530: 530;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-72: 72px;
  --spacing-112: 112px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 72px;
  --card-padding: 32px;
  --element-gap: 12px;

  /* Motion */
  --motion-fast: 160ms;
  --motion-standard: 320ms;
  --motion-reveal: 700ms;
  --motion-evidence: 900ms;
  --ease-luxury: cubic-bezier(0.22, 1, 0.36, 1);

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;

  /* Named Radii */
  --radius-nav: 40px;
  --radius-tags: 40px;
  --radius-cards: 12px;
  --radius-inputs: 32px;
  --radius-buttons: 32px;
  --radius-default: 4px;

  /* Surfaces */
  --surface-soft-white-canvas: #fafafc;
  --surface-pure-white: #ffffff;
  --surface-light-slate: #f1f5f9;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-soft-white-canvas: #fafafc;
  --color-pure-white: #ffffff;
  --color-navy-slate: #0f172a;
  --color-slate-border: #cbd5e1;
  --color-mist-border: #e2e8f0;
  --color-slate-text: #475569;
  --color-royal-blue: #2563eb;
  --color-amber-star: #f59e0b;
  --color-emerald-growth: #10b981;

  /* Typography */
  --font-arcadia:
    "Inter", "Geist", "Söhne", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-arcadiadisplay:
    "Geist", "Söhne Breit", "Inter", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1;
  --tracking-caption: 0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 1;
  --tracking-body-sm: 0.07px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 18px;
  --leading-body-lg: 1.35;
  --text-subheading: 21px;
  --leading-subheading: 1.35;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0.42px;
  --text-heading: 32px;
  --leading-heading: 1.15;
  --tracking-heading: 0.48px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.15;
  --tracking-heading-lg: 0.42px;
  --text-display: 65px;
  --leading-display: 1.1;

  /* Motion */
  --motion-fast: 160ms;
  --motion-standard: 320ms;
  --motion-reveal: 700ms;
  --motion-evidence: 900ms;
  --ease-luxury: cubic-bezier(0.22, 1, 0.36, 1);

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-72: 72px;
  --spacing-112: 112px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-3xl: 32px;
  --radius-3xl-2: 40px;
}
```
