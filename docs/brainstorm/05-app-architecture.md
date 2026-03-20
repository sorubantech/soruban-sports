# App Architecture — How Many Apps Do We Need?

**Date:** 2026-03-16
**Status:** Brainstorming — For Discussion
**Decision:** Mobile-first approach

---

## The Core Question

We have **8 user roles** with very different needs. Do we build:
- One app for everyone?
- Separate apps per role?
- Something in between?

---

## Analysis: What Each Role Needs

| Role | Primary Device | Usage Pattern | Key Actions |
|------|---------------|---------------|-------------|
| **Platform Super Admin** | Desktop | Occasional, admin-heavy | Manage platform, content library, analytics |
| **Academy Owner** | Mobile + Desktop | Daily check, weekly deep-dive | Dashboards, finances, overview |
| **Academy Admin** | Mobile + Desktop | Daily, operational | Admissions, fees, scheduling, attendance reports |
| **Head Coach** | Mobile | Daily, on-field | Curriculum, assessments, promotions, student notes |
| **Coach** | Mobile | Daily, on-field | Attendance, scoring, drills, session reports, feed posts |
| **Support Staff** | Mobile | Daily, on-field | Attendance, equipment, assist coaches |
| **Student** | Mobile | Daily, learning | View curriculum, progress, materials, exams |
| **Parent** | Mobile | Daily, checking | Child's progress, feed, parent cricket, fees |

---

## Recommended Architecture: 3 Apps + 1 Web Portal

### App 1: Soruban Sports — Academy (Mobile App)
**For:** Academy Owner, Academy Admin, Head Coach, Coach, Support Staff

This is the **B2B app** — the tool academy staff uses daily.

| Feature | Owner | Admin | Head Coach | Coach | Staff |
|---------|:-----:|:-----:|:----------:|:-----:|:-----:|
| Academy dashboard | ✅ | ✅ | ✅ | — | — |
| Financial overview | ✅ | ✅ | — | — | — |
| Student management | ✅ | ✅ | ✅ | ✅ (batch) | — |
| Admission handling | ✅ | ✅ | ✅ | — | — |
| Curriculum builder | ✅ | — | ✅ | — | — |
| Upload custom content | ✅ | ✅ | ✅ | ✅ | — |
| Mark attendance | ✅ | ✅ | ✅ | ✅ | ✅ |
| Score assessments | — | — | ✅ | ✅ | — |
| Approve stage promotion | — | — | ✅ | — | — |
| Student notes (private) | — | — | ✅ | ✅ | — |
| Staff chat & DMs | ✅ | ✅ | ✅ | ✅ | ✅ |
| Post to social feed | ✅ | ✅ | ✅ | ✅ | ✅ |
| Moderate posts | ✅ | ✅ | — | — | — |
| Fee management | ✅ | ✅ | — | — | — |
| Batch scheduling | ✅ | ✅ | ✅ | — | — |
| Session reports | — | — | ✅ | ✅ | ✅ |
| Generate certificates | ✅ | ✅ | ✅ | — | — |

**Why one app for all staff roles:**
- Small academies: owner IS the head coach IS the admin — one person, one app
- Role-based UI: app shows different menus/features based on assigned role
- Easier adoption: "Download one app, we'll set your role"
- Reduces development cost: one codebase for all staff functions

**UX Approach:**
```
Login → Role detected → Show relevant dashboard

Owner sees:      Revenue | Students | Attendance | Feed | Staff
Head Coach sees: Curriculum | Students | Assessments | Promotions | Feed | Chat
Coach sees:      My Batch | Attendance | Scoring | Notes | Feed | Chat
Staff sees:      Attendance | Equipment | Feed | Chat
```

---

### App 2: Soruban Sports — Student & Parent (Mobile App)
**For:** Students, Parents (including parent cricket community)

This is the **B2C app** — the consumer-facing experience.

| Feature | Student | Parent (Viewer) | Parent (Player) |
|---------|:-------:|:---------------:|:---------------:|
| View progress dashboard | ✅ | ✅ (child) | ✅ (child) |
| View curriculum & materials | ✅ | — | — |
| Watch animated videos | ✅ | — | — |
| View exam results | ✅ | ✅ (child) | ✅ (child) |
| View attendance history | ✅ | ✅ (child) | ✅ (child) |
| View certificates | ✅ | ✅ (child) | ✅ (child) |
| Social feed (view, like, comment) | ✅ | ✅ | ✅ |
| Self-attendance (if configured) | ✅ | — | — |
| Fee history & payment | — | ✅ | ✅ |
| Create player profile | — | — | ✅ |
| Parent match (schedule, score) | — | — | ✅ |
| Parent match stats | — | — | ✅ |
| Match availability poll | — | — | ✅ |
| Notifications | ✅ | ✅ | ✅ |
| Search & apply to academies | ✅ | ✅ | ✅ |

**Why separate from Academy app:**
- **Different mindset:** Staff manages, student/parent consumes — very different UX
- **App store presence:** Two apps = two listings = more discoverability
- **App size:** Student app is lighter (no admin features), downloads faster
- **Security:** Student/parent never accidentally accesses admin functions
- **Branding:** Student app can feel more fun/engaging; Academy app is professional/operational

**UX Approach:**
```
Student Login:
  Home → My Stage (progress) | Learn (videos/drills) | Exams | Feed | Profile

Parent Login:
  Home → Child's Progress | Feed | Fees | Parent Cricket | Profile

  If parent is also a player:
  Parent Cricket tab → My Profile | Matches | Stats | Teams
```

---

### Web Portal: Soruban Sports — Admin Dashboard (Web App)
**For:** Academy Owner, Academy Admin, Platform Super Admin

Desktop-optimized web application for **heavy admin tasks** that are painful on mobile.

| Feature | Why Web Is Better |
|---------|-------------------|
| Financial reports & analytics | Large charts, tables, data export |
| Bulk student operations | Import CSV, bulk assign batches |
| Curriculum builder (detailed) | Drag-and-drop, tree view, complex layout |
| Fee management & invoicing | Generate invoices, payment reconciliation |
| Attendance reports (monthly) | Heatmaps, trends, downloadable reports |
| Platform content library management | Browse hundreds of videos, tag, organize |
| Certificate template customization | Design editor, preview, brand settings |
| Academy settings & configuration | Detailed settings screens |
| Multi-branch management (Phase 2) | Overview across branches |

**Important:** The web portal is a **companion** to the mobile app, not a replacement. Key daily actions (attendance, scoring, posting) happen on mobile. The web portal is for:
- End-of-day/week review
- Financial management
- Curriculum design (complex UI)
- Bulk operations
- Reporting & export

---

### Platform Super Admin Panel (Web App)
**For:** Soruban Sports internal team only

| Feature | Description |
|---------|-------------|
| Academy management | View all academies, approve/suspend, support |
| Platform content library | Upload/manage animated videos, drills, skill definitions |
| Stage & skill master data | Manage default stages, skill categories, assessment templates |
| User management | Support tickets, user issues, role management |
| Platform analytics | Total users, growth, engagement, revenue |
| Content moderation (escalated) | Handle flagged content that academy admins escalate |
| Pricing & billing | Manage subscription plans, invoices, payments |
| Tournament management | Organize Parent Premier League (Phase 2) |
| System configuration | Feature flags, app config, notifications |

---

## Summary: What We Build

| # | Application | Type | For | Priority |
|---|-------------|------|-----|----------|
| 1 | **Soruban Sports — Academy** | Mobile App (Android + iOS) | Owner, Admin, Head Coach, Coach, Staff | MVP |
| 2 | **Soruban Sports — Student & Parent** | Mobile App (Android + iOS) | Students, Parents | MVP |
| 3 | **Academy Admin Dashboard** | Web App (responsive) | Owner, Admin | MVP (basic), Phase 2 (full) |
| 4 | **Platform Super Admin** | Web App (internal) | Soruban team | MVP (basic) |

### Total Build Count
- **2 Mobile Apps** (Academy + Student/Parent)
- **2 Web Apps** (Academy Dashboard + Super Admin)
- **1 Backend API** (shared across all apps)

---

## Why NOT a Single App?

| Option | Pros | Cons |
|--------|------|------|
| **Single app for everyone** | One codebase, easier to maintain | Bloated, confusing UX, huge download size, security risk, app store listing confusing |
| **2 mobile + 2 web (Recommended)** | Clean UX per role, right tool for right job, better app store presence | More development effort, two codebases to maintain |
| **Separate app per role** | Perfect UX per role | Too many apps to build and maintain, confusing for users who have multiple roles |

**The 2+2 model is the sweet spot** — clean separation without over-fragmentation.

---

## Shared Backend Architecture

All 4 apps talk to the same backend API:

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Academy    │  │  Student &  │  │  Academy    │  │  Super      │
│  Mobile App │  │  Parent App │  │  Web Portal │  │  Admin Web  │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │                │
       └────────────────┼────────────────┼────────────────┘
                        │
                 ┌──────▼──────┐
                 │  API Gateway │
                 │  (Auth +     │
                 │   Rate Limit)│
                 └──────┬──────┘
                        │
              ┌─────────▼─────────┐
              │   Backend API     │
              │   (Single API)    │
              ├───────────────────┤
              │ • Auth Service    │
              │ • Academy Service │
              │ • Student Service │
              │ • Curriculum Svc  │
              │ • Assessment Svc  │
              │ • Feed Service    │
              │ • Chat Service    │
              │ • Payment Service │
              │ • Notification Svc│
              │ • File/Video Svc  │
              └─────────┬─────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
   ┌─────▼─────┐ ┌─────▼─────┐ ┌─────▼─────┐
   │ PostgreSQL │ │  S3/R2    │ │  Redis    │
   │ (Data)     │ │ (Files)   │ │ (Cache)   │
   └───────────┘ └───────────┘ └───────────┘
```

### Key Principle
- **One API, multiple clients** — all apps consume the same API
- **Role-based access control (RBAC)** at API level — the API checks the user's role and returns only what they're allowed to see
- Mobile apps and web apps are just different **views** of the same data
- This means data is always consistent across all platforms

---

## MVP Build Priority

| Phase | What to Build | Timeline |
|-------|--------------|----------|
| **Week 1-2** | Backend API (core services: auth, academy, student, curriculum) | Foundation |
| **Week 2-4** | Academy Mobile App (attendance, student mgmt, basic feed) | Staff starts using |
| **Week 3-5** | Student & Parent Mobile App (progress, materials, feed) | Parents start seeing value |
| **Week 4-6** | Super Admin Panel (basic — content upload, academy management) | Platform team manages content |
| **Week 5-8** | Assessment, certificates, fee tracking across both apps | Core loop complete |
| **Week 6-10** | Parent cricket (profiles, matches, stats) | Differentiation feature |
| **Week 8-12** | Academy Web Dashboard (reports, curriculum builder, bulk ops) | Admin power features |
| **Week 10-14** | Polish, testing, pilot with 2 Coimbatore academies | Real-world validation |
| **Week 14-16** | Bug fixes from pilot, prepare for public launch | Go live |

---

## Open Questions

1. **App naming:** "Soruban Sports Academy" & "Soruban Sports" — or different names?
2. **Should Academy Web Dashboard be in MVP?** Or can owners manage everything from mobile initially?
3. **Offline support:** Coaches often work on grounds with poor connectivity — should attendance/scoring work offline and sync later?
4. **App language:** English only for MVP? Or Tamil/Hindi from day one (Coimbatore pilot)?

---

*Last updated: 2026-03-16*
