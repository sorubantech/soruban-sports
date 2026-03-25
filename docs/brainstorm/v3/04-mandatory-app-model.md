# Mandatory App Model & Student Lifecycle — Version 3

**Date:** 2026-03-22
**Status:** Brainstorming / Open for Discussion
**Builds on:** V1 `04-roles-permissions-revenue-mvp.md`, `05-app-architecture.md`

---

## Overview

The app must transition from "nice to have" to "cannot function without." Every critical academy operation should ONLY be possible through the app. This ensures:

1. Every student uses the app daily
2. Every parent installs the app
3. Every coach relies on the app
4. No one can bypass the platform

---

## 1. App-Only Operations

### What REQUIRES the App (Cannot Be Done Without It)

| Operation | Before (without app) | After (app-only) | Who Must Use |
|-----------|---------------------|-------------------|-------------|
| **Admission** | Walk-in, paper form | Download app, search academy, apply online | Student + Parent |
| **Attendance** | Paper register | Self-attendance (GPS) or coach marks on app | Student + Coach |
| **Schedule** | WhatsApp message | Schedule visible only on app; changes notify via app | Student + Parent |
| **Skill Scores** | Verbal or no record | Scores only visible in app | Student + Parent |
| **Home Practice** | None / verbal homework | Coach assigns on app, student marks complete | Student + Coach |
| **Daily Quiz** | N/A | Quiz only available on app (required for promotion) | Student |
| **Fee Payment** | Cash to owner, no receipt | Pay through app (UPI/Razorpay), digital receipt | Parent |
| **Fee Status** | "Did I pay?" — no record | Fee history and status only in app | Parent |
| **Certificates** | Physical paper (easy to fake) | Digital certificates with QR verification in app | Student + Parent |
| **Match Selection** | Verbal announcement | Selection notification only via app, with confirmation | Student |
| **Coach Feedback** | Verbal or WhatsApp | Coach notes, PDP, session reports only in app | Coach + Parent |
| **Parent Updates** | WhatsApp group | All parent communication through app only | Parent |
| **Social Feed** | Academy WhatsApp group | All posts, photos, announcements in app | Everyone |
| **Promotion** | Subjective verbal decision | Formal process: score check + coach approval in app | Coach + Student |

### What Still Works Without the App

| Operation | Why Not App-Only |
|-----------|-----------------|
| **Physical training** | Cricket is physical — the app tracks, not replaces |
| **Coach verbal instruction** | In-person coaching is the core product |
| **Emergency communication** | Phone calls for urgent matters are fine |
| **Trial sessions** | First visit before app signup is OK |

---

## 2. Making It Seamless (Not Painful)

The mandatory model only works if the app is **easier than the old way**, not harder.

### For Students

| Old Way (painful) | App Way (easier) |
|-------------------|-----------------|
| "Sir, am I present?" → Wait for register | Open app, tap "Mark Present" (2 seconds) |
| "Sir, what's my score?" → Wait for coach | Open app, see live scores anytime |
| "What should I practice?" → No idea | App shows daily drills with video |
| "Did I pass?" → Wait for announcement | Instant notification: "You scored 78%!" |
| "Am I playing Saturday?" → Ask coach | App notification: "You're selected!" |

### For Parents

| Old Way (painful) | App Way (easier) |
|-------------------|-----------------|
| "How is my child doing?" → Ask at pickup | Open app, see daily progress |
| "Did he attend today?" → Ask coach | Push notification: "Ravi attended today" |
| "Did I pay last month?" → No record | Fee history in app |
| "What is he learning?" → No idea | Stage curriculum visible in app |
| "Is there practice tomorrow?" → WhatsApp | Schedule in app with notifications |

### For Coaches

| Old Way (painful) | App Way (easier) |
|-------------------|-----------------|
| Paper attendance → manual counting | Tap names on screen → auto-calculated |
| Remember every student's level → impossible | Student profiles with full history |
| WhatsApp parents individually → time-consuming | One post on feed → reaches all parents |
| "Which student needs what?" → from memory | PDP + skill decay alerts tell you |
| Verbal homework → no tracking | Assign in app → see completion rates |

---

## 3. Complete Student Lifecycle

### Phase 0: Public User (Pre-Enrollment)

```
USER STATE: Has the app, not enrolled anywhere.

CAN DO:
- Browse academies by city/area
- Read reviews and ratings
- View public social feed
- Watch free Stage 1 videos (5)
- Take 1 free quiz question per day
- Apply for admission

CANNOT DO:
- Access full curriculum
- Track progress
- Do home practice
- Earn XP / leaderboard
- See full quizzes
- Mark attendance
- View scores
```

### Phase 1: Applicant (Applied, Waiting)

```
USER STATE: Applied to academy, awaiting decision.

CAN DO:
- Everything in Phase 0
- Check application status
- Receive acceptance/rejection notification
- Browse other academies (backup options)

NEW SCREEN: Application Status
+------------------------------------------------------+
|                                                       |
|  Application Submitted!                              |
|  SAM Cricket Academy                                 |
|                                                       |
|  Status: Under Review                                |
|  Applied: March 20, 2026                             |
|  Expected response: 2-3 business days                |
|                                                       |
|  [Browse Other Academies]                            |
|                                                       |
+------------------------------------------------------+
```

### Phase 2: Trial Student (Invited for Trial)

```
USER STATE: Academy invited for trial session.

CAN DO:
- Everything in Phase 1
- See trial session schedule
- Confirm attendance for trial

NOTIFICATION: "SAM Cricket Academy invites you for
a trial session on March 25, 4:00 PM.
[Confirm] [Reschedule] [Decline]"
```

### Phase 3: Enrolled Student (Active)

```
USER STATE: Accepted, paid first fee, fully enrolled.

CAN DO:
- EVERYTHING — full app access unlocked
- View curriculum for assigned stage
- Mark attendance
- Complete daily quizzes (full)
- Complete home practice drills
- Earn XP, appear on leaderboard
- View radar chart and progress
- Take assessments
- View skill health (if Stage 5+)
- Receive match selections
- Access interactive lessons
- Upload practice videos
- All social feed features
```

### Phase 4: Elite Student (Stage 6-7)

```
USER STATE: Reached Elite level.

CAN DO:
- Everything in Phase 3
- Skill Health Monitor (decay tracking)
- Elite Leaderboard (platform-wide)
- Showcase Profile (public portfolio)
- Mentor Mode (guide juniors)
- Advanced Match Analytics
- Monthly Elite Challenges
- Selection Alerts (district/state)
- Tournament Invitations
- Coaching Certificate path
```

### Phase 5: Graduated / Left Academy

```
USER STATE: No longer enrolled at any academy.

CAN DO:
- Keep profile forever (LinkedIn-style)
- View all certificates earned
- View complete progress history
- View badges and achievements
- Access public features (search, reviews)
- Write reviews for past academies (within 6 months)
- Apply to new academies
- Parent matches (if parent)

CANNOT DO:
- Access current curriculum
- Mark attendance
- Home practice / quizzes
- Earn XP
- Leaderboard

PROFILE SHOWS:
- "Alumni — SAM Cricket Academy (2024-2026)"
- Full journey: Stage 1 to Stage 7
- All certificates and badges
- Match stats
```

### Phase 6: Alumni (Long-term)

```
USER STATE: Former student, keeps profile.

VALUE TO PLATFORM:
- Showcases platform's long-term impact
- When alumni become parents → enroll their children
- Can become coaches → join Coach Marketplace
- Their journey data adds to academy's "Success Stories"
- Can mentor current students (remote)
- Play in Parent Cricket matches
```

---

## 4. Parent Journey (Parallel Track)

### Parent States

| State | Trigger | Access Level |
|-------|---------|-------------|
| **No app** | Before enrollment | Nothing |
| **Public user** | Downloads app to research | Browse academies, reviews |
| **Applicant parent** | Child applies to academy | Application status |
| **Enrolled parent** | Child accepted & fee paid | Full parent features |
| **Multi-child parent** | Multiple children enrolled | Switch between children |
| **Multi-academy parent** | Children at different academies | Switch between academies |
| **Alumni parent** | Child left academy | View history, write review |
| **Player parent** | Opts into parent cricket | Full player profile + matches |

### Parent Daily Notifications

```
MORNING (7:00 AM):
"Good morning! Ravi has evening session today (4-6 PM).
Today's focus: Cut Shot + Fielding."

DURING SESSION (4:15 PM):
"Ravi marked present at SAM Cricket Academy."

AFTER SESSION (6:15 PM):
"Session complete! Ravi's Cut Shot scored 72% (+5%).
Coach note: 'Good improvement on footwork.'"

EVENING (8:00 PM - if home drill assigned):
"Ravi completed 3/3 home drills today.
Quiz score: 4/5. XP earned: 65."

WEEKLY (Sunday evening):
"Ravi's weekly summary:
- Attended 5/6 sessions (83%)
- Completed 4/5 home drills
- Skills improved: Cut Shot (+5%), Fielding (+3%)
- Leaderboard: #4 in batch (up from #8)
- Quiz streak: 12 days"

MONTHLY (1st of month):
"March Summary for Ravi:
- Overall score: 72% -> 78% (+6%)
- New badge earned: Shot Collector
- Fee for April: Rs 3,500 (due April 5)
  [Pay Now]"
```

---

## 5. Making Quizzes Mandatory for Stage Promotion

### The Rule

To be eligible for stage promotion assessment, a student must have completed at least 80% of daily quizzes in the last 3 months.

### Why This Works

| Problem | Solution |
|---------|---------|
| Students only practice physical skills | Quiz forces cricket knowledge too |
| Students skip app usage between sessions | Daily quiz = daily app open |
| No way to measure cricket IQ | Quiz scores track knowledge growth |
| Stage promotion is only about physical skill | Now requires knowledge + skill |

### Promotion Eligibility Check

```
STAGE PROMOTION ELIGIBILITY — Ravi Kumar
Stage 3 -> Stage 4

REQUIREMENTS:
+------------------------------------------------------+
|                                                       |
|  1. SKILL SCORES (all Stage 3 skills >= 70%)         |
|     Cover Drive: 85%    Pull Shot: 82%               |
|     Cut Shot: 72%       On Drive: 75%                |
|     Running: 78%                                     |
|     Status: PASSED                                   |
|                                                       |
|  2. ATTENDANCE (>= 80% in last 3 months)             |
|     Your attendance: 82%                             |
|     Status: PASSED                                   |
|                                                       |
|  3. DAILY QUIZ (>= 80% completion in last 3 months) |
|     Quizzes completed: 72/90 days (80%)              |
|     Avg quiz score: 76%                              |
|     Status: PASSED (exactly at threshold!)           |
|                                                       |
|  4. HOME PRACTICE (>= 70% completion rate)           |
|     Drills completed: 65/90 assigned (72%)           |
|     Status: PASSED                                   |
|                                                       |
|  5. COACH APPROVAL                                   |
|     Status: PENDING — awaiting coach decision        |
|                                                       |
|  OVERALL: ELIGIBLE for promotion assessment          |
|                                                       |
+------------------------------------------------------+
```

---

## 6. Offline Mode (Essential for India)

### The Reality

Many academy grounds in India have poor internet connectivity. The app MUST work offline for critical operations.

### Offline Capabilities

| Feature | Works Offline? | Sync Behavior |
|---------|:--------------:|--------------|
| Mark attendance | Yes | Queued, syncs when online |
| View today's session plan | Yes (cached) | Pre-loaded before session |
| Score assessments (coach) | Yes | Queued, syncs when online |
| View student profiles | Yes (cached) | Last-synced data shown |
| Home practice — mark complete | Yes | Queued, syncs when online |
| Daily quiz | Yes (pre-downloaded) | Score syncs when online |
| Watch technique videos | Yes (if pre-downloaded) | Manual download before session |
| Social feed | No (needs internet) | — |
| Fee payment | No (needs internet) | — |
| Academy search | No (needs internet) | — |
| Real-time notifications | No | Receive when back online |

### Offline Indicator

```
+------------------------------------------------------+
|  OFFLINE MODE                                        |
|  Changes will sync when connected                    |
|                                                       |
|  Pending sync:                                       |
|  1 attendance record                                 |
|  2 score assessments                                 |
|  1 home drill completion                             |
|                                                       |
|  Last synced: 3:45 PM today                          |
+------------------------------------------------------+

[When back online:]
+------------------------------------------------------+
|  Synced! All 4 changes uploaded successfully.        |
|  (auto-dismisses in 3 seconds)                       |
+------------------------------------------------------+
```

---

## 7. Multi-Academy Support

### Use Cases

| Scenario | How It Works |
|----------|-------------|
| Student enrolled at 2 academies | Switch between academies in app (rare but possible) |
| Coach works at 2 academies | Switch context in Academy app |
| Parent has children at different academies | Switch between children, each linked to their academy |
| Student transfers academies | Old academy marks "transferred out", new academy accepts transfer |
| Freelance coach | Listed at multiple academies, sees all batches |

### Transfer Flow

```
STUDENT TRANSFER: Ravi Kumar
FROM: SAM Cricket Academy → TO: Star Cricket Academy

Step 1: Parent requests transfer in app
Step 2: SAM Academy confirms departure
Step 3: Transfer packet generated:
        - Current stage (Stage 5)
        - All skill scores
        - Certificates earned
        - Attendance history
        - Coach notes (with SAM's permission)
Step 4: Star Academy receives transfer packet
Step 5: Star Academy can:
        - Accept at same stage
        - Place at different stage (re-assess)
        - Reject transfer
Step 6: Student's profile moves to Star Academy
Step 7: SAM Academy profile becomes "Alumni"

NOTE: Progress data belongs to the STUDENT, not the academy.
The student keeps their entire history regardless of academy.
```

---

## 8. Feature Phasing

| Feature | MVP | Phase 2 | Phase 3 |
|---------|:---:|:-------:|:-------:|
| App-only admission | Yes | + Trial session booking | + Waitlist |
| App-only attendance | Yes (self + coach) | + GPS verification | + Automated |
| App-only schedule | Yes | + Calendar sync | + Smart rescheduling |
| App-only scores | Yes | Yes | Yes |
| Mandatory quiz for promotion | No | Yes (80% threshold) | Yes (configurable) |
| Mandatory home practice | No | Yes (70% threshold) | Yes (configurable) |
| Digital-only certificates | Yes | + QR verification | + Shareable links |
| Offline mode | Yes (basic) | + Pre-download content | + Full offline |
| Alumni mode | No | Yes (basic profile) | Yes (full + mentoring) |
| Student transfer | No | No | Yes |
| Multi-academy | No | Yes (parent multi-child) | Yes (full) |
| Parent notifications | Yes (basic) | + Daily summary | + Weekly report |

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Allow ANY cash payment outside app? | Recommend: Cash accepted but MUST be recorded in app by coach/admin (receipt generated) |
| 2 | What if a student has no smartphone? | Academy can mark attendance on their device. Student gets a "shared device" login |
| 3 | Daily quiz — mandatory or "strongly encouraged"? | Phase 2: mandatory for promotion. MVP: optional but tracked |
| 4 | Offline — how much data to pre-cache? | Current day's session plan + assigned drills + student list for coach |
| 5 | Transfer — does student keep coach notes? | Only with sending academy's permission (some notes are private coaching IP) |
| 6 | Alumni — how long do profiles stay active? | Forever — profile is the student's property |
| 7 | Parent notifications — frequency customizable? | Yes — parent can choose: every event, daily summary, or weekly only |
| 8 | What if academy doesn't want app-only? | Platform requires it — core value proposition. Training support provided |

---

*Last updated: 2026-03-22*
