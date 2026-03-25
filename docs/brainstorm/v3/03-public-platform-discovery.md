# Public Platform & Academy Discovery — Version 3

**Date:** 2026-03-22
**Status:** Brainstorming / Open for Discussion
**Builds on:** V1 `01-product-overview.md`, `03-social-feed-and-parent-community.md`

---

## Overview

The app today is private — only enrolled students and staff can use it. V3 opens the platform to the public:

1. **Anyone** can download the app and browse academies
2. **Anyone** can read reviews and see academy ratings
3. **Anyone** can apply for admission through the app
4. **Anyone** can watch free Stage 1 content
5. **Enrolled students** unlock the full experience

This transforms the app from a closed management tool into a **public cricket platform** — like Google Maps + Zomato for cricket academies.

---

## 1. Academy Search (Public — No Login Required)

### Search Interface

```
FIND CRICKET ACADEMIES
+------------------------------------------------------+
|                                                       |
|  Search by city, area, or academy name...            |
|  [_________________________________________] [Search]|
|                                                       |
|  NEAR YOU (Coimbatore)           [Map View] [List]   |
|                                                       |
|  +---------------------------------------------------+
|  |  SAM Cricket Academy                  4.7 stars   |
|  |  RS Puram, Coimbatore  |  2.3 km                 |
|  |                                                    |
|  |  85 students | 4 coaches | Since 2022             |
|  |  Stage 1-7  |  Video analysis available            |
|  |  Rs 2,500-3,500/month                              |
|  |                                                    |
|  |  TOP STATS:                                       |
|  |  14 district selections (2025)                    |
|  |  92% avg attendance                               |
|  |  3 state U-16 selections                          |
|  |  "Best Batting Academy" — Platform Award          |
|  |                                                    |
|  |  LATEST REVIEW:                                   |
|  |  "My son improved so much in 6 months."           |
|  |  — Verified Parent, Feb 2026                      |
|  |                                                    |
|  |  [View Profile]  [Apply for Admission]            |
|  +---------------------------------------------------+
|                                                       |
|  +---------------------------------------------------+
|  |  Star Cricket Academy                  4.2 stars  |
|  |  Gandhipuram  |  4.1 km                           |
|  |  120 students | 6 coaches | Rs 2,000-3,000/month  |
|  |  [View Profile]  [Apply for Admission]            |
|  +---------------------------------------------------+
|                                                       |
|  +---------------------------------------------------+
|  |  CBE Sports Academy                    4.5 stars  |
|  |  Singanallur  |  5.8 km                           |
|  |  200 students | 8 coaches | Rs 3,000-4,000/month  |
|  |  [View Profile]  [Apply for Admission]            |
|  +---------------------------------------------------+
|                                                       |
|  FILTERS:                                            |
|  [Distance] [Fee Range] [Rating] [Facilities]        |
|  [Stage Range] [Batch Timing] [Specialization]       |
|                                                       |
+------------------------------------------------------+
```

### Search Filters

| Filter | Options |
|--------|---------|
| **Distance** | 2 km, 5 km, 10 km, 25 km, Any |
| **Fee Range** | Under Rs 2,000 / Rs 2,000-3,500 / Rs 3,500-5,000 / Rs 5,000+ |
| **Rating** | 4+ stars / 3.5+ stars / All |
| **Facilities** | Nets, Ground, Bowling Machine, Gym, Video Analysis |
| **Batch Timing** | Morning, Evening, Weekend |
| **Stages Offered** | Stage 1-4 (beginner), Stage 5-7 (advanced), All stages |
| **Specialization** | Batting focus, Bowling focus, All-round |
| **Seats Available** | Only show academies with open batches |

### Map View

```
+------------------------------------------------------+
|  [Map showing academy locations with pins]           |
|                                                       |
|  Each pin shows:                                     |
|  - Academy name                                      |
|  - Star rating                                       |
|  - Fee range                                         |
|  - Tap to see details                                |
|                                                       |
|  Clustering: Multiple academies in same area         |
|  grouped with count badge                            |
|                                                       |
+------------------------------------------------------+
```

---

## 2. Academy Public Profile

### Full Profile Page (Anyone Can View)

```
SAM CRICKET ACADEMY
4.7 stars (124 reviews) | RS Puram, Coimbatore
+------------------------------------------------------+
|                                                       |
|  [Cover Photo / Academy Banner]                      |
|                                                       |
|  TABS:                                               |
|  [Overview] [Coaches] [Reviews] [Achievements]      |
|  [Batches] [Gallery] [Apply]                         |
|                                                       |
+------------------------------------------------------+

=== OVERVIEW TAB ===

ACADEMY SCORECARD (auto-calculated by platform)
+------------------------------------------------------+
|                                                       |
|  COACHING QUALITY          ||||||||||||__  4.6/5      |
|  (based on student improvement rate)                 |
|                                                       |
|  STUDENT PROGRESS          |||||||||||||_  4.7/5      |
|  (avg skill improvement per month)                   |
|                                                       |
|  FACILITIES                ||||||||_____  3.8/5      |
|  (parent reviews on facilities)                      |
|                                                       |
|  ENGAGEMENT                |||||||||||||_  4.8/5      |
|  (student app usage, attendance rate)                |
|                                                       |
|  VALUE FOR MONEY           ||||||||||||__  4.5/5      |
|  (parent satisfaction vs fee)                        |
|                                                       |
|  OVERALL RANK: #3 in Coimbatore | #47 in Tamil Nadu  |
|                                                       |
+------------------------------------------------------+

ABOUT
+------------------------------------------------------+
|  "Established in 2022, SAM Cricket Academy focuses   |
|  on structured skill development using the Soruban   |
|  Sports platform. Our coaches have produced 14       |
|  district-level players in 3 years."                 |
|                                                       |
|  Location: 12, Anna Nagar, RS Puram, Coimbatore      |
|  Phone: +91 98765 43210                              |
|  Email: sam.cricket@email.com                         |
|                                                       |
|  FACILITIES:                                         |
|  [x] 3 Nets  [x] 1 Ground  [ ] Bowling Machine      |
|  [ ] Gym     [x] Video Analysis  [x] Kit Provided    |
|                                                       |
+------------------------------------------------------+

SUCCESS STORIES (auto-generated from student data)
+------------------------------------------------------+
|                                                       |
|  Arjun K. — Joined Stage 1 (Jan 2024)               |
|  Now: Stage 5 | Selected for State U-14              |
|  Journey: 22 months, 840 sessions attended           |
|  Improvement: Overall score 25% -> 82% (+57%)       |
|  [View Progress Timeline]                            |
|                                                       |
|  Priya S. — Joined Stage 2 (Mar 2025)               |
|  Now: Stage 4 | Best Bowler in District U-12         |
|  Journey: 14 months, 520 sessions                    |
|  [View Progress Timeline]                            |
|                                                       |
|  (Student consent required to display publicly)      |
|                                                       |
+------------------------------------------------------+
```

### Coaches Tab

```
=== COACHES TAB ===

+------------------------------------------------------+
|                                                       |
|  Coach Venkat (Head Coach / Owner)                   |
|  +---------------------------------------------------+
|  |  Rating: 4.8 / 5.0 (67 parent reviews)           |
|  |  Experience: 10 years coaching                    |
|  |  Specialization: Batting                          |
|  |  Students trained: 85 current, 200+ total         |
|  |  Certifications: NCA Level 2, Soruban Certified   |
|  |                                                    |
|  |  RESULTS:                                         |
|  |  Avg student improvement: +15% per month          |
|  |  District selections: 8 students                  |
|  |  State selections: 3 students                     |
|  |                                                    |
|  |  PARENT SAYS:                                     |
|  |  "Venkat sir is very patient with beginners.      |
|  |  My son was scared of fast bowling, now he pulls  |
|  |  bouncers confidently."                           |
|  +---------------------------------------------------+
|                                                       |
|  Coach Ravi (Batting Coach)                          |
|  +---------------------------------------------------+
|  |  Rating: 4.7 / 5.0 (42 reviews)                  |
|  |  Experience: 6 years                              |
|  |  Students trained: 42 current                     |
|  |  Avg improvement: +18% per month                  |
|  +---------------------------------------------------+
|                                                       |
|  Coach Priya (Bowling Coach)                         |
|  +---------------------------------------------------+
|  |  Rating: 4.6 / 5.0 (28 reviews)                  |
|  |  Experience: 4 years                              |
|  |  Students trained: 28 current                     |
|  |  Avg improvement: +20% per month                  |
|  +---------------------------------------------------+
|                                                       |
+------------------------------------------------------+
```

### Batches Tab

```
=== BATCHES TAB ===

+------------------------------------------------------+
|                                                       |
|  AVAILABLE BATCHES                                   |
|  +---------------------------------------------------+
|  | Morning U-12                                      |
|  |   Time: 6:00-8:00 AM | Days: Mon-Fri             |
|  |   Coach: Venkat, Ravi                             |
|  |   Students: 18/25 (7 seats available)             |
|  |   Fee: Rs 2,500/month                             |
|  |   Stages: 1-3                                     |
|  |   [Apply to This Batch]                           |
|  +---------------------------------------------------+
|  | Evening U-14                                      |
|  |   Time: 4:00-6:00 PM | Days: Mon-Sat             |
|  |   Coach: Venkat, Priya                            |
|  |   Students: 22/25 (3 seats available)             |
|  |   Fee: Rs 3,500/month                             |
|  |   Stages: 2-5                                     |
|  |   ALMOST FULL — 3 seats left                      |
|  |   [Apply to This Batch]                           |
|  +---------------------------------------------------+
|  | Weekend All Ages                                  |
|  |   Time: 8:00-11:00 AM | Days: Sat-Sun            |
|  |   Coach: Ravi                                     |
|  |   Students: 12/20 (8 seats available)             |
|  |   Fee: Rs 2,500/month                             |
|  |   Stages: 1-4                                     |
|  |   [Apply to This Batch]                           |
|  +---------------------------------------------------+
|                                                       |
+------------------------------------------------------+
```

### Gallery Tab

```
=== GALLERY TAB ===

+------------------------------------------------------+
|                                                       |
|  [Grid of photos and videos from public feed posts]  |
|                                                       |
|  - Net sessions                                      |
|  - Tournament photos                                 |
|  - Facility photos                                   |
|  - Match highlights                                  |
|  - Achievement celebrations                          |
|  - Certificate ceremonies                            |
|                                                       |
|  Source: Auto-pulled from academy's public feed posts |
|                                                       |
+------------------------------------------------------+
```

---

## 3. Review System

### Who Can Review

| Reviewer | Can Review? | Verification |
|----------|:-----------:|-------------|
| Current enrolled parent | Yes | Auto-verified from enrollment |
| Past enrolled parent (left academy) | Yes | Verified from enrollment history |
| Current student | No | Students don't review (parents do) |
| Coach/Staff | No | Conflict of interest |
| Random public user | No | Must have enrollment record |
| Academy owner | No | Cannot review own academy |

### Review Rules

| Rule | Detail |
|------|--------|
| **Minimum enrollment** | Must have been enrolled for 3+ months before reviewing |
| **One review per parent** | Can update existing review, cannot create duplicates |
| **Verified badge** | "Verified Parent" badge on reviews (linked to enrollment) |
| **No fake reviews** | System prevents multiple reviews from same household |
| **Academy can respond** | Academy owner/admin can publicly respond to reviews (like Google) |
| **Academy cannot delete** | Reviews can only be removed by platform moderation (abuse, profanity) |
| **Star categories** | Overall + Coaching + Facilities + Communication + Value |

### Review Format

```
WRITE A REVIEW — SAM Cricket Academy
+------------------------------------------------------+
|                                                       |
|  OVERALL RATING:                                     |
|  [1] [2] [3] [4] [5] stars                          |
|                                                       |
|  DETAILED RATINGS:                                   |
|  Coaching Quality:    [1] [2] [3] [4] [5]            |
|  Facilities:          [1] [2] [3] [4] [5]            |
|  Communication:       [1] [2] [3] [4] [5]            |
|  Value for Money:     [1] [2] [3] [4] [5]            |
|  Child's Progress:    [1] [2] [3] [4] [5]            |
|                                                       |
|  YOUR REVIEW:                                        |
|  +---------------------------------------------------+
|  | Write your experience here...                     |
|  | (minimum 50 characters)                           |
|  +---------------------------------------------------+
|                                                       |
|  OPTIONAL:                                           |
|  How long has your child been enrolled?              |
|  [< 6 months] [6-12 months] [1-2 years] [2+ years]  |
|                                                       |
|  Would you recommend this academy?                   |
|  [Yes] [Maybe] [No]                                  |
|                                                       |
|  [Submit Review]                                     |
|                                                       |
|  Your review will be visible publicly with your      |
|  first name and "Verified Parent" badge.             |
|                                                       |
+------------------------------------------------------+
```

### Academy Rating Calculation

The overall academy rating is NOT just parent reviews. It is a **composite score** calculated from real data:

```
ACADEMY RATING FORMULA:

Overall Rating = Weighted Average of:
+------------------------------------------------------+
|                                                       |
|  Parent Reviews (40%)                                |
|  Average of all parent star ratings                  |
|  Minimum 10 reviews required for public display      |
|                                                       |
|  Student Progress Data (30%)                         |
|  Auto-calculated from platform data:                 |
|  - Avg skill improvement per student per month       |
|  - Stage promotion rate                              |
|  - Assessment pass rate                              |
|  - Student retention (how long students stay)        |
|                                                       |
|  Engagement Metrics (20%)                            |
|  Auto-calculated from platform data:                 |
|  - Avg attendance rate across all batches            |
|  - Student app usage (DAU/MAU)                       |
|  - Home practice completion rate                     |
|  - Coach content activity                            |
|                                                       |
|  Coach Credentials (10%)                             |
|  - Years of experience                               |
|  - Certifications (NCA, Soruban Certified, etc.)     |
|  - Number of selections produced                     |
|                                                       |
+------------------------------------------------------+

KEY: Academy CANNOT game the rating because 60% of it
is auto-calculated from real platform data.
```

### Academy Response to Reviews

```
REVIEW:
4 stars — Mr. Sharma (Verified Parent, 8 months)
"Good coaching but the ground gets muddy during monsoon.
My daughter slipped twice last month."

ACADEMY RESPONSE:
"Thank you for the feedback, Mr. Sharma. We've installed
drainage near the nets and ordered anti-slip mats for
monsoon season. Your daughter's safety is our priority."
— Venkat, Academy Owner (March 15, 2026)
```

---

## 4. Admission Flow (App-Only)

### The Principle

**No walk-in registration.** All admissions happen through the app. This ensures:
- Every student has the app from Day 1
- Parent has the app from Day 1
- Data is captured digitally from the start
- Academy gets structured application data

### Admission Flow

```
Step 1: DISCOVER
  Public user downloads app (free)
  → Browses academies near them
  → Reads reviews, checks batches
  → Finds "SAM Cricket Academy"
      |
      v
Step 2: APPLY
  Taps "Apply for Admission"
  → Fills application form:
    - Student name, age, DOB
    - Previous cricket experience
    - Preferred batch
    - Parent/guardian details
    - Medical conditions (optional)
    - How did you hear about us?
  → Submits application
      |
      v
Step 3: ACADEMY REVIEWS
  Academy admin gets notification
  → Sees application in "Admission Requests"
  → Reviews: age, experience, preferred batch
  → Decisions:
    - ACCEPT → assign Role + Stage + Batch
    - WAITLIST → batch is full, add to queue
    - TRIAL → invite for a trial session first
    - REJECT → with reason (politely)
      |
      v
Step 4: TRIAL SESSION (if applicable)
  Student gets notification: "Trial session on [date]"
  → Attends trial
  → Coach assesses initial skill level
  → Coach recommends Stage placement
      |
      v
Step 5: ACCEPTANCE
  Student/parent gets notification: "Accepted!"
  → Role assigned (Batsman/Bowler/All-rounder)
  → Stage assigned (based on trial or self-reported)
  → Batch assigned
  → Fee details shown
  → "Pay first month to confirm enrollment"
      |
      v
Step 6: ONBOARDING
  First payment made through app
  → Student fully enrolled
  → Full app features unlocked
  → Welcome notification with:
    - Your stage, your curriculum
    - Your batch schedule
    - Your coach
    - Your first session date
  → Parent gets parallel notification
      |
      v
Step 7: FIRST SESSION
  Student arrives → marks attendance on app
  → Journey begins
```

### Application Form

```
APPLY TO SAM CRICKET ACADEMY
+------------------------------------------------------+
|                                                       |
|  STUDENT INFORMATION                                 |
|  +---------------------------------------------------+
|  | Full Name: [___________________________]          |
|  | Date of Birth: [__/__/____]                       |
|  | Gender: [Male] [Female] [Other]                   |
|  | School: [___________________________]             |
|  +---------------------------------------------------+
|                                                       |
|  CRICKET BACKGROUND                                  |
|  +---------------------------------------------------+
|  | Previous Experience:                              |
|  |   ( ) No experience — complete beginner           |
|  |   ( ) Casual — play with friends/school           |
|  |   ( ) 1-2 years at another academy                |
|  |   ( ) 3+ years, competitive experience            |
|  |   ( ) District/state level player                 |
|  |                                                    |
|  | Previous Academy (if any): [______________]       |
|  |                                                    |
|  | Preferred Role:                                   |
|  |   ( ) Batsman  ( ) Bowler  ( ) All-rounder        |
|  |   ( ) Wicket-keeper  ( ) Not sure yet             |
|  |                                                    |
|  | Batting Style: [Right-hand] [Left-hand]           |
|  | Bowling Type:  [Fast] [Spin] [None yet]           |
|  +---------------------------------------------------+
|                                                       |
|  PREFERRED BATCH                                     |
|  +---------------------------------------------------+
|  | ( ) Morning U-12 (6-8 AM, Mon-Fri) — 7 seats     |
|  | ( ) Evening U-14 (4-6 PM, Mon-Sat) — 3 seats     |
|  | ( ) Weekend All (8-11 AM, Sat-Sun) — 8 seats     |
|  +---------------------------------------------------+
|                                                       |
|  PARENT/GUARDIAN                                     |
|  +---------------------------------------------------+
|  | Name: [___________________________]               |
|  | Relationship: [Father] [Mother] [Guardian]        |
|  | Mobile: [+91 _____ _____]                         |
|  | Email: [___________________________] (optional)   |
|  +---------------------------------------------------+
|                                                       |
|  MEDICAL (optional)                                  |
|  +---------------------------------------------------+
|  | Any medical conditions? [___________________]     |
|  | Allergies? [___________________]                  |
|  +---------------------------------------------------+
|                                                       |
|  HOW DID YOU FIND US?                                |
|  +---------------------------------------------------+
|  | ( ) Soruban Sports app search                     |
|  | ( ) Friend/family recommendation                  |
|  | ( ) Social media                                  |
|  | ( ) Google search                                 |
|  | ( ) Walk-by / local awareness                     |
|  | ( ) Other: [_______________]                      |
|  +---------------------------------------------------+
|                                                       |
|  [Submit Application]                                |
|                                                       |
|  Expected response time: 2-3 business days           |
|                                                       |
+------------------------------------------------------+
```

---

## 5. Public Audience — What They Can Access (Free)

### Access Matrix

| Feature | Public (no login) | Public (logged in, not enrolled) | Enrolled Student | Enrolled Parent |
|---------|:-----------------:|:-------------------------------:|:----------------:|:---------------:|
| Browse academies | Yes | Yes | Yes | Yes |
| Read reviews | Yes | Yes | Yes | Yes |
| View academy profiles | Yes | Yes | Yes | Yes |
| View public feed posts | Yes | Yes | Yes | Yes |
| Apply for admission | Need account | Yes | Yes | Yes |
| Watch Stage 1 videos (free) | Yes | Yes | Yes | Yes |
| Daily quiz (1/day) | No | Yes (1 quiz/day) | Yes (full) | No |
| View own progress | No | No | Yes | Yes (child) |
| Access curriculum | No | No | Yes | No |
| Home practice drills | No | No | Yes | No |
| XP / leaderboard | No | No | Yes | No |
| Fee payment | No | No | No | Yes |
| Mark attendance | No | No | Yes | No |

### Free Content Strategy

| Content | Purpose | Volume |
|---------|---------|--------|
| Stage 1 batting videos (5 videos) | Hook — show platform quality | Free forever |
| 1 daily quiz question (of 5) | Taste of engagement loop | Free forever |
| Public social feed | See what academies post | Free forever |
| Academy search + profiles | Core discovery feature | Free forever |
| 1 interactive lesson | Experience the learning model | Free forever |

### Conversion Funnel

```
PUBLIC USER JOURNEY:

Download app (free)
    |
    v
Browse academies (free)
    |
    v
Watch free Stage 1 videos (free)
    "These are really good! I want more..."
    |
    v
Try 1 daily quiz question (free)
    "This is fun! But I can only do 1/day..."
    |
    v
See academy review: "My son improved 40% in 6 months"
    "I want that for my child!"
    |
    v
Apply for admission (free — just needs account)
    |
    v
Accepted by academy → Full app unlocked
    |
    v
Parent pays academy fee → Academy pays platform subscription
    |
    v
Student gets hooked → Daily engagement → Retention
    |
    v
Parent sees value → Never leaves → Revenue!
```

---

## 6. Academy Ranking & Awards

### Platform Rankings

Every academy on the platform is ranked based on their composite rating.

```
SORUBAN SPORTS — TOP ACADEMIES

COIMBATORE:
+------+---------------------------+--------+----------+
| Rank | Academy                   | Rating | Students |
+------+---------------------------+--------+----------+
| #1   | CBE Sports Academy        | 4.8    | 200      |
| #2   | Pro Cricket Coimbatore    | 4.7    | 150      |
| #3   | SAM Cricket Academy       | 4.7    | 85       |
| #4   | Star Cricket Academy      | 4.2    | 120      |
| #5   | Young Guns Cricket        | 4.1    | 45       |
+------+---------------------------+--------+----------+

TAMIL NADU:
[Top 50 academies across the state]

INDIA:
[Top 100 academies across the country]

Filter by: [City] [State] [Stage range] [Specialization]
```

### Platform Awards (Annual)

| Award | Criteria | Benefit |
|-------|----------|---------|
| **Rising Star Academy** | Most improvement in student scores (new academy, <2 years) | Badge on profile, featured in app |
| **Best Batting Academy** | Highest avg batting improvement rate | Badge, certificate, social media feature |
| **Best Bowling Academy** | Highest avg bowling improvement rate | Badge, certificate |
| **Most Engaged Academy** | Highest DAU, home practice, quiz completion | Badge, certificate |
| **Parent's Choice** | Highest parent review rating (min 50 reviews) | Badge, certificate, priority listing |
| **Talent Factory** | Most district/state/national selections | Badge, certificate, brand sponsorship |
| **Top Coach** | Highest student improvement per coach | Badge, marketplace featured |

---

## 7. Academy Incentives to Maintain Quality

### Why Academies Care About Public Profile

| Motivation | Detail |
|-----------|--------|
| **More admissions** | Higher-rated academies appear first in search → more applications |
| **Premium positioning** | Top 3 in city get a "Featured" badge → more visibility |
| **Parent trust** | Verified reviews + data-backed rating → parents trust the platform over word-of-mouth |
| **Competitive pressure** | Academies see competitor ratings → motivated to improve |
| **Brand value** | Platform awards = marketing material for the academy |
| **Sponsorship eligibility** | Brands sponsor top-rated academies → additional revenue |
| **Tier upgrade incentive** | Elite tier features (AI, video analysis) improve coaching quality → better ratings |

### What Improves Rating (Academy's Control)

| Action | Rating Component Affected |
|--------|--------------------------|
| Better coaching → student improvement | Student Progress (30%) |
| Higher attendance → more sessions | Engagement (20%) |
| Parent satisfaction → good reviews | Parent Reviews (40%) |
| Coach certifications | Coach Credentials (10%) |
| Using platform features (home practice, sessions) | Engagement (20%) |
| Quick response to admission applications | Not in rating but affects parent experience |
| Responding to reviews | Not in rating but builds trust |

---

## 8. Feature Phasing

| Feature | MVP | Phase 2 | Phase 3 |
|---------|:---:|:-------:|:-------:|
| Academy search (by city/area) | Yes | + Map view | + AI recommendations |
| Academy public profile | Yes (basic) | + Success stories | + Video gallery |
| Review system | No (need enrolled user base first) | Yes (parent reviews) | + Coach reviews |
| Admission through app | Yes | + Trial session booking | + Waitlist management |
| Public social feed | Yes | Yes | Yes |
| Free Stage 1 content | Yes | + 1 free interactive lesson | + Free quiz (1/day) |
| Academy ranking | No | City-level | State + National |
| Platform awards | No | No | Yes (annual) |
| Academy scorecard (auto-rated) | No | Yes (basic — reviews only) | Full composite formula |
| Search filters | Basic (city, fee) | Full filters | AI-powered suggestions |

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Reviews in MVP or Phase 2? | Phase 2 — need enrolled users first (minimum 10 reviews to display) |
| 2 | Can academies opt OUT of public listing? | No — all platform academies are publicly listed (core value proposition) |
| 3 | How many free videos for public? | 5 Stage 1 videos (enough to show quality, not enough to learn) |
| 4 | Should academy ranking be public? | Phase 2 — only show after 50+ academies on platform |
| 5 | Admission — allow walk-in registration bypass? | No — app-only. Academy can help fill form on their device if student has no phone |
| 6 | Review moderation — automated or manual? | Automated profanity filter + manual review for flagged content |
| 7 | Should past students (who left) be able to review? | Yes — up to 6 months after leaving. Important for honest feedback |
| 8 | Academy response to reviews — mandatory? | No, but encouraged. Platform sends reminder: "You have 3 unanswered reviews" |

---

*Last updated: 2026-03-22*
