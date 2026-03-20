# User Roles, Revenue Model & MVP Scope

**Date:** 2026-03-16
**Status:** Brainstorming — For Discussion

---

## PART 1: User Roles & Permissions Matrix

### All Roles in the System

| # | Role | Scope | Description |
|---|------|-------|-------------|
| 1 | **Platform Super Admin** | Platform-wide | Soruban Sports team — manages everything |
| 2 | **Academy Owner** | Academy-level | Registers & runs the academy. Full control. |
| 3 | **Academy Admin** | Academy-level | Operational manager (may be same as owner in small academies) |
| 4 | **Head Coach** | Academy-level | Senior-most coach. Designs curriculum, approves promotions. |
| 5 | **Coach** | Batch/Group-level | Conducts sessions, assesses students, posts content |
| 6 | **Support Staff** | Academy-level | Marks attendance, manages equipment, assists coaches |
| 7 | **Student** | Individual | Learns, views progress, takes exams |
| 8 | **Parent** | Individual (linked to student) | Views child's progress. Optionally plays as parent cricketer. |

---

### Detailed Permissions Matrix

#### Academy & Configuration

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Register academy | — | ✅ | — | — | — | — | — | — |
| Edit academy profile | ✅ | ✅ | ✅ | — | — | — | — | — |
| Manage branches | ✅ | ✅ | — | — | — | — | — | — |
| Configure attendance method | ✅ | ✅ | ✅ | — | — | — | — | — |
| Manage fee structure | ✅ | ✅ | ✅ | — | — | — | — | — |
| Add/remove staff | ✅ | ✅ | ✅ | — | — | — | — | — |
| View academy dashboard | ✅ | ✅ | ✅ | ✅ | — | — | — | — |
| View financial reports | ✅ | ✅ | ✅ | — | — | — | — | — |

#### Student Management

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Accept/reject admission | — | ✅ | ✅ | ✅ | — | — | — | — |
| Place student in stage | — | — | — | ✅ | ✅ (own batch) | — | — | — |
| Assign student role (bat/bowl) | — | — | — | ✅ | ✅ (own batch) | — | — | — |
| Assign student to batch | — | ✅ | ✅ | ✅ | — | — | — | — |
| Approve stage promotion | — | — | — | ✅ | — | — | — | — |
| View student progress | ✅ | ✅ | ✅ | ✅ | ✅ (own batch) | — | ✅ (own) | ✅ (child) |
| Write student notes (private) | — | — | — | ✅ | ✅ | — | — | — |

#### Curriculum & Content

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Manage platform common library | ✅ | — | — | — | — | — | — | — |
| Create/edit academy curriculum | — | ✅ | — | ✅ | — | — | — | — |
| Upload academy custom content | — | ✅ | ✅ | ✅ | ✅ | — | — | — |
| Include/exclude platform content | — | ✅ | — | ✅ | — | — | — | — |
| View curriculum & materials | — | ✅ | ✅ | ✅ | ✅ | — | ✅ (own stage) | — |

#### Assessment & Exams

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Create exam/assessment | — | — | — | ✅ | ✅ (own batch) | — | — | — |
| Conduct exam & score | — | — | — | ✅ | ✅ (own batch) | — | — | — |
| View exam results | — | ✅ | ✅ | ✅ | ✅ (own batch) | — | ✅ (own) | ✅ (child) |
| Generate certificates | — | ✅ | ✅ | ✅ | — | — | — | — |

#### Attendance & Operations

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Mark attendance | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (self, if configured) | — |
| View attendance records | — | ✅ | ✅ | ✅ | ✅ (own batch) | ✅ | ✅ (own) | ✅ (child) |
| Manage scheduling/batches | — | ✅ | ✅ | ✅ | — | — | — | — |
| Manage equipment inventory | — | ✅ | ✅ | — | — | ✅ | — | — |

#### Social Feed

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Post to public feed | ✅ | ✅ | ✅ | ✅ | ✅ | — | — | — |
| Post to academy feed | — | ✅ | ✅ | ✅ | ✅ | ✅ | — | — |
| Post to staff-only feed | — | ✅ | ✅ | ✅ | ✅ | ✅ | — | — |
| Moderate posts (approve/delete) | ✅ | ✅ | ✅ | — | — | — | — | — |
| Like / Comment | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View public feed | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View academy feed | — | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

#### Parent Cricket Community

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Create player profile | — | — | — | — | — | — | — | ✅ |
| Organize parent match | — | ✅ | ✅ | ✅ | — | — | — | ✅ (captain) |
| Score parent match | — | ✅ | ✅ | — | — | ✅ | — | ✅ |
| View parent match stats | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Organize platform tournament | ✅ | — | — | — | — | — | — | — |

#### Staff Communication

| Permission | Super Admin | Owner | Academy Admin | Head Coach | Coach | Support Staff | Student | Parent |
|-----------|:-----------:|:-----:|:------------:|:----------:|:-----:|:------------:|:-------:|:------:|
| Staff group chat | — | ✅ | ✅ | ✅ | ✅ | ✅ | — | — |
| Direct message (staff) | — | ✅ | ✅ | ✅ | ✅ | ✅ | — | — |
| Assign drills to coaches | — | — | — | ✅ | — | — | — | — |
| Submit session report | — | — | — | ✅ | ✅ | ✅ | — | — |

---

### Role Hierarchy

```
Platform Super Admin
    └── Academy Owner
            └── Academy Admin
                    ├── Head Coach
                    │       └── Coach
                    │               └── (Students in their batch)
                    └── Support Staff

    Student ←──linked──→ Parent
```

### Key Rules
- **One person can have multiple roles** — A head coach at one academy could be a parent at another
- **Coach sees only their batch** — Not other coaches' students (unless head coach)
- **Head Coach is the curriculum authority** — Only they design curriculum and approve promotions
- **Academy Admin handles operations** — fees, scheduling, admin tasks
- **Owner sees everything** — Full visibility across all data
- **Students see only their own data** — Their stage, their scores, their materials
- **Parents see only their child's data** — Progress, attendance, scores

---

## PART 2: Revenue Model

### Pricing Strategy: Freemium + Tiered

#### Why Freemium?
- Cricket academies in India are **price-sensitive** — especially small ones (20-50 students)
- Need to **build user base first** — network effects (parent matches, benchmarking) only work with volume
- Free tier acts as **lead generation** — owner sees value, then upgrades
- Parent community and social feed are **free** — this is what creates stickiness

---

### Proposed Pricing Tiers

#### Tier 1: FREE — "Starter"
**Target:** Small academies (up to 30 students) trying the platform

| Feature | Included |
|---------|----------|
| Academy profile & registration | ✅ |
| Student management (up to 30) | ✅ |
| Basic attendance (manual mark) | ✅ |
| Platform common curriculum (view only, can't customize) | ✅ |
| Student progress dashboard (basic) | ✅ |
| Social feed (academy posts) | ✅ |
| Parent community & matches | ✅ |
| Staff chat (up to 3 staff) | ✅ |
| 1 batch/group | ✅ |
| Soruban Sports branding on certificates | ✅ |

**Limitations:** No custom curriculum, no AI features, basic reports, platform branding visible

---

#### Tier 2: PRO — ₹2,999/month (~$36)
**Target:** Growing academies (30-100 students)

| Feature | Included |
|---------|----------|
| Everything in Free | ✅ |
| Unlimited students | ✅ |
| Unlimited batches | ✅ |
| Unlimited staff | ✅ |
| Custom curriculum builder | ✅ |
| Upload academy's own content | ✅ |
| Advanced attendance (fingerprint, self-check-in) | ✅ |
| Assessment & exam system | ✅ |
| Stage certificates (academy branded) | ✅ |
| Detailed progress reports | ✅ |
| Fee management & payment tracking | ✅ |
| Automated fee reminders | ✅ |
| Smart scheduling | ✅ |
| Equipment inventory | ✅ |
| Priority support | ✅ |

---

#### Tier 3: ELITE — ₹7,999/month (~$96)
**Target:** Large/premium academies (100+ students), multi-branch

| Feature | Included |
|---------|----------|
| Everything in Pro | ✅ |
| **AI video analysis** (batting/bowling technique) | ✅ |
| **AI automated performance reports** | ✅ |
| Multi-branch management | ✅ |
| White-label (remove Soruban Sports branding) | ✅ |
| Comparative benchmarking (cross-academy) | ✅ |
| Advanced analytics & dashboards | ✅ |
| Coach performance analytics | ✅ |
| Custom report builder | ✅ |
| API access (for integrations) | ✅ |
| Dedicated account manager | ✅ |
| Workload & injury management | ✅ |

---

#### Add-ons (Any Tier)

| Add-on | Price | Description |
|--------|-------|-------------|
| Extra video storage | ₹499/month per 50GB | For academies that upload lots of video content |
| Tournament management module | ₹999/tournament | Full tournament setup, scheduling, scoring, results |
| Parent Premier League entry | ₹1,999/season | Inter-academy parent tournament participation |
| Bulk SMS/notification pack | ₹299/month | For fee reminders, announcements via SMS |
| Custom animated video | ₹4,999/video | Academy requests a custom skill video to be created |

---

#### Annual Discount
- **Pro Annual:** ₹29,999/year (save ₹5,989 — ~2 months free)
- **Elite Annual:** ₹79,999/year (save ₹15,989 — ~2 months free)

---

### Revenue Projections (Illustrative)

| Scenario | Free | Pro | Elite | Monthly Revenue |
|----------|------|-----|-------|----------------|
| Year 1 (500 academies) | 350 | 120 | 30 | ₹5,99,670 (~$7,200) |
| Year 2 (2,000 academies) | 1,200 | 600 | 200 | ₹33,97,400 (~$40,800) |
| Year 3 (5,000 academies) | 2,500 | 1,800 | 700 | ₹1,09,93,200 (~$1,32,000) |

> These are conservative estimates. Add-ons, tournaments, and enterprise deals are additional.

---

### Alternative Revenue Streams (Future)

| Stream | Description |
|--------|-------------|
| **Marketplace commission** | If we build a coach marketplace, take 10-15% commission on coach hiring |
| **Sponsored tournaments** | Brands sponsor Parent Premier League — bat/ball companies, sportswear |
| **Data insights (B2B)** | Anonymized talent data sold to IPL franchises, state boards (with consent) |
| **Certification program** | "Soruban Certified Coach" — paid certification for coaches |
| **Equipment marketplace** | Partner with cricket equipment brands, earn affiliate commission |
| **Premium parent features (future)** | Advanced stats, video highlights package — if demand emerges |

---

## PART 3: MVP Scope

### MVP Philosophy
> **Launch with enough to be useful for one academy's daily operations, sticky enough that they can't go back to WhatsApp.**

### MVP Timeline Target: 12-16 weeks (3-4 months)

---

### MVP Features — What's IN

#### Core (Must Have)

| # | Feature | Why MVP |
|---|---------|---------|
| 1 | **Academy registration & profile** | Can't start without this |
| 2 | **Student management** (add, edit, assign role, assign stage) | Core function |
| 3 | **Batch/group management** | Every academy organizes by batches |
| 4 | **Attendance** (manual mark by staff + self-attendance option) | Daily use feature — creates habit |
| 5 | **Stage-wise curriculum** (platform common library — Batting Stages 1-4) | Core differentiator |
| 6 | **Academy custom content upload** (videos, notes) | Lets academy personalize from day one |
| 7 | **Curriculum builder** (combine common + custom) | The autonomous college model |
| 8 | **Student progress dashboard** | What parents are paying to see |
| 9 | **Basic assessment** (coach scores student per skill) | Enables progress tracking |
| 10 | **Stage promotion workflow** (coach approval) | Core progression system |
| 11 | **Digital certificates** (per stage) | Wow factor for parents |
| 12 | **Social feed** (academy posts — public & academy-only) | Replaces WhatsApp, creates stickiness |
| 13 | **Parent view** (child's progress, attendance, feed) | Parent satisfaction = retention |
| 14 | **Parent player profile** (opt-in cricket profile) | Community hook from day one |
| 15 | **Parent match** (schedule, score, basic stats) | Differentiation — no one else has this |
| 16 | **Staff chat** (basic group chat + DMs) | Replaces coach WhatsApp groups |
| 17 | **Fee tracking** (record payments, pending dues, basic reminders) | Every academy needs this |
| 18 | **Basic notifications** (push + in-app) | Attendance marked, fee due, stage promoted |

#### Platform Content (MVP Scope)
- **Batting only — Stages 1 to 4** (~70 animated videos)
- Each skill: technique video + common mistakes + drill video
- Bowling, fielding, fitness, wicketkeeping → Phase 2

---

### MVP Features — What's OUT (Phase 2+)

| Feature | Phase | Why Not MVP |
|---------|-------|-------------|
| AI video analysis | Phase 2 | Needs significant ML development |
| AI automated reports | Phase 2 | Needs data first — wait for usage data |
| Smart scheduling | Phase 2 | Nice to have, not core |
| Equipment inventory | Phase 2 | Low priority for daily use |
| Multi-branch management | Phase 2 | Most early adopters = single branch |
| Comparative benchmarking | Phase 2 | Needs multiple academies on platform first |
| Coach marketplace | Phase 3 | Needs large user base |
| Parent Premier League (platform tournament) | Phase 2 | Internal parent matches first, platform tournament later |
| White-label / branding removal | Phase 2 | Premium feature, not needed early |
| Advanced analytics | Phase 2 | Basic dashboards first |
| Workload & injury management | Phase 2 | Specialized feature for elite academies |
| Gamification (badges, leaderboards) | Phase 2 | Engagement booster after core is solid |
| Bowling/Fielding/Fitness curriculum | Phase 2 | Start with batting, expand based on demand |
| Fingerprint attendance | Phase 2 | Hardware dependency, start with manual/self |
| Tournament management | Phase 2 | Focus on daily academy operations first |
| API access | Phase 3 | Enterprise feature |

---

### MVP — User Experience Summary

#### Academy Owner's First Day
```
1. Signs up → Creates academy profile (name, logo, location, contact)
2. Adds coaches & staff → Assigns roles (head coach, coach, support staff)
3. Creates batches → "Morning U-12", "Evening U-16", etc.
4. Sets up curriculum:
   a. Browses platform library (Batting Stages 1-4)
   b. Selects/deselects skills for each stage
   c. Uploads any custom videos or drills
   d. Saves curriculum
5. Configures attendance → Manual by staff or self-attendance
6. Sets fee structure → Monthly amount per batch
7. Academy is LIVE → Shares invite link with parents
```

#### Student/Parent's First Day
```
1. Downloads app → Signs up
2. Searches for academy → Finds "SAM Cricket Academy"
3. Submits admission request (name, age, experience)
4. Academy accepts → Coach assigns role (Batsman) + stage (Stage 2)
5. Student sees:
   - Their Stage 2 curriculum (Front foot defence, Straight drive, etc.)
   - Animated videos for each skill
   - "Not Started" status on all skills
6. Parent sees:
   - Child's profile, stage, and progress
   - Academy feed with latest posts
   - Option to create own player profile for parent cricket
7. After first training session:
   - Attendance marked ✅
   - Coach scores "Front foot defence" → 70%
   - Progress updates in real time
   - Parent gets notification: "Ravi's first skill scored!"
```

---

### MVP Tech Approach (High-Level Suggestion)

| Layer | Suggested | Reasoning |
|-------|-----------|-----------|
| **Mobile App** | React Native or Flutter | Cross-platform (Android + iOS), most users on mobile |
| **Web Dashboard** | React / Next.js | For academy owners & admins (desktop use) |
| **Backend** | Node.js (NestJS) or Python (FastAPI) | Scalable, good ecosystem |
| **Database** | PostgreSQL | Relational data (students, scores, curriculum) |
| **File Storage** | AWS S3 / Cloudflare R2 | Videos, images, certificates |
| **Auth** | Firebase Auth or Supabase Auth | Quick to implement, secure |
| **Notifications** | Firebase Cloud Messaging (FCM) | Push notifications |
| **Payments** | Razorpay | Indian market, UPI support |
| **Hosting** | AWS / Vercel + Railway | Scalable, cost-effective to start |

> This is a starting suggestion — tech stack decision should be made with the development team.

---

### MVP Success Metrics

| Metric | Target (3 months post-launch) |
|--------|-------------------------------|
| Academies registered | 50 |
| Active academies (weekly use) | 30 |
| Students on platform | 1,000 |
| Daily attendance marked | 500+ events/day |
| Social feed posts | 100+ per week |
| Parent profiles created | 200 |
| Parent matches played | 10 |
| Paid conversions (Free → Pro) | 10 academies |
| NPS score | > 40 |

---

## Open Questions for Discussion

### Roles & Permissions
1. Can an **academy owner also be a head coach?** (Common in small academies) — Should we allow role merging?
2. Should **parents see fee details** of other parents? Or strictly private?
3. Can a **coach belong to multiple academies?** (Freelance coaches are common)

### Revenue Model
4. Is **₹2,999/month for Pro** the right price point for Indian market?
5. Should we offer a **per-student pricing** option instead? (e.g., ₹99/student/month)
6. **Free trial of Pro** — 14 days or 30 days?

### MVP
7. **Mobile-first or web-first?** Most coaches and parents use phones, but academy admin work may need a desktop
8. **Which city/region to pilot?** Chennai? Bangalore? Mumbai?
9. **How many pilot academies** before public launch?

---

*Last updated: 2026-03-16*
