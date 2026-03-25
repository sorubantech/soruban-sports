# Engagement Engine — Version 3

**Date:** 2026-03-22
**Status:** Brainstorming / Open for Discussion
**Builds on:** V2 `02-training-practice-module.md`, `03-performance-growth-features.md`

---

## Overview

Features that maximize the time students and coaches spend on the app every day. The goal: transform the app from something opened once a week to a daily habit — like Duolingo for cricket.

**Current state:** Student opens app 2 min/day to check score.
**Target state:** Student spends 30-60 min/day across home practice, quizzes, videos, and social.

---

## 1. Home Practice Mode

### What It Is

Coach assigns daily homework through the app. Students complete drills at home (shadow batting, fitness, video watching) and mark them complete. This extends training beyond academy hours.

### Coach Assignment Flow

```
COACH VIEW — Assign Home Practice
+------------------------------------------------------+
|                                                       |
|  Assign to: [Evening U-14 (all)]                    |
|  OR: [Select individual students...]                 |
|                                                       |
|  Date: March 22, 2026                                |
|                                                       |
|  DRILLS:                                             |
|  + Add from library:                                 |
|  +---------------------------------------------------+
|  | 1. Shadow Cover Drive (20 reps)                   |
|  |    Skill: B11 | Duration: 10 min                  |
|  |    Instructions: "Stand in front of mirror.       |
|  |    Focus on front foot reaching the pitch."       |
|  |    Upload: Optional (video of shadow drill)       |
|  +---------------------------------------------------+
|  | 2. Fitness: 10 push-ups + 30 sec plank            |
|  |    Skill: FIT3, FIT6 | Duration: 5 min            |
|  |    Upload: Optional                               |
|  +---------------------------------------------------+
|  | 3. Watch: "Spin Play Basics" video                |
|  |    Skill: B22 | Duration: 4 min                   |
|  |    Quiz after: 2 questions                        |
|  +---------------------------------------------------+
|                                                       |
|  Total estimated time: 19 min                        |
|  XP reward for student: 40 XP                        |
|                                                       |
|  [Assign to Batch]                                   |
|                                                       |
+------------------------------------------------------+
```

### Student View

```
HOME PRACTICE — Today (March 22)
+------------------------------------------------------+
|                                                       |
|  Coach Ravi assigned 3 drills | Est: 19 min          |
|  Streak: 12 days | Complete all to maintain streak   |
|                                                       |
|  DRILL 1: Shadow Cover Drive (20 reps)               |
|  +---------------------------------------------------+
|  |  [Video: Coach demo of shadow drill]              |
|  |  Play 0:45 / 2:00                                 |
|  +---------------------------------------------------+
|  |  Instructions:                                    |
|  |  1. Stand in front of mirror or wall              |
|  |  2. Play 20 shadow cover drives                   |
|  |  3. Focus: front foot to pitch, head forward      |
|  |                                                    |
|  |  [Record Yourself] — upload for coach review      |
|  |  [Mark Complete]                                  |
|  +---------------------------------------------------+
|                                                       |
|  DRILL 2: Fitness — 10 push-ups + 30s plank         |
|  Status: Not started                                 |
|                                                       |
|  DRILL 3: Watch "Spin Play Basics" + quiz            |
|  Status: Not started                                 |
|                                                       |
|  TODAY'S REWARD:                                     |
|  Complete all 3 = 40 XP + streak continues           |
|  Upload video = +10 bonus XP                         |
|                                                       |
|  THIS WEEK: [x] [x] [x] [x] [ ] [ ] [ ]            |
|              Mon Tue Wed Thu Fri Sat Sun              |
|                                                       |
+------------------------------------------------------+
```

### Coach Review of Submissions

```
HOME PRACTICE SUBMISSIONS — Evening U-14
+------------------------------------------------------+
|                                                       |
|  March 22, 2026 | Assigned: 14 | Completed: 9       |
|                                                       |
|  COMPLETED (with video uploads):                     |
|  +---------------------------------------------------+
|  | Arjun K. — All 3 drills done                      |
|  |   Video: Shadow cover drive (15 sec)              |
|  |   [Watch] [Quick feedback: Good/Needs work]       |
|  +---------------------------------------------------+
|  | Priya S. — All 3 drills done                      |
|  |   Video: Shadow cover drive (12 sec)              |
|  |   [Watch] [Quick feedback]                        |
|  +---------------------------------------------------+
|                                                       |
|  COMPLETED (no video):                               |
|  Vikram S., Deepa R., Karthik M., ... (5 more)      |
|                                                       |
|  NOT COMPLETED:                                      |
|  Sneha N. (0/3), Ganesh R. (1/3), ...               |
|  [Send reminder to incomplete]                       |
|                                                       |
+------------------------------------------------------+
```

### Home Practice Rules

| Rule | Detail |
|------|--------|
| **Coach assigns** | Coach creates daily/weekly practice plans |
| **Student marks complete** | Self-reported (honor system at MVP) |
| **Video upload optional** | Student can upload video for +10 XP bonus |
| **Coach can review** | Quick feedback: thumbs up or "needs work" |
| **Completion tracked** | Shows on student profile — parents see engagement |
| **Required for promotion** | Must complete 70% of home practice to be eligible for stage promotion |
| **Streak system** | Consecutive days of completing all assigned drills |

---

## 2. Daily Cricket Quiz

### What It Is

5 cricket questions every day — a mix of knowledge, shot selection, rules, and technique theory. Takes 3-5 minutes. Creates a Duolingo-style daily habit.

### Quiz Screen

```
DAILY QUIZ — March 22, 2026
+------------------------------------------------------+
|                                                       |
|  Question 3 of 5                                     |
|  Topic: Shot Selection (MG3)                         |
|                                                       |
|  "Ball pitching on middle stump, full length.        |
|   Field: 3 fielders on off side, 2 on leg side.     |
|   What's the best shot?"                             |
|                                                       |
|  [Field diagram showing placement]                   |
|                                                       |
|  A) Cover Drive                                      |
|  B) Flick through mid-wicket  <-- selected           |
|  C) Defensive block                                  |
|  D) Leave the ball                                   |
|                                                       |
|  CORRECT! The gap is on the leg side.                |
|  Full ball on middle = perfect for the flick.        |
|  +10 XP                                             |
|                                                       |
|  [Next Question]                                     |
|                                                       |
+------------------------------------------------------+
```

### Quiz Categories & Question Bank

| Category | Example | Skill Linked | Difficulty Range |
|----------|---------|-------------|-----------------|
| **Shot Selection** | "Short ball outside off, what shot?" | MG3 | Stage 2-7 |
| **Field Placement** | "Where is mid-on?" (visual diagram) | MG4 | Stage 1-4 |
| **Rules & Laws** | "When is a no-ball called?" | MG4 | Stage 1-5 |
| **Technique Theory** | "What's the difference between cut and square drive?" | B14, B17 | Stage 2-5 |
| **Match Situations** | "15 needed off 12 balls, what's your strategy?" | MG8 | Stage 4-7 |
| **Cricket History** | "Who scored the first T20 century?" | General | All |
| **Nutrition** | "What to eat 2 hours before a match?" | NR2 | Stage 2-5 |
| **Fitness** | "Why is cool-down important after bowling?" | FIT8 | Stage 1-4 |
| **Mental Game** | "You're dropped on 0. What do you tell yourself?" | MG5, MG6 | Stage 3-6 |

### Quiz Features

| Feature | Detail |
|---------|--------|
| **Daily refresh** | 5 new questions every day at midnight |
| **Stage-appropriate** | Stage 2 students get easier questions than Stage 6 |
| **Adaptive difficulty** | If student gets 5/5 three days in a row, difficulty increases |
| **Streak counter** | Consecutive days of completing daily quiz |
| **XP per question** | 5 XP (correct), 2 XP (incorrect but attempted) |
| **Perfect score bonus** | 5/5 = extra 10 XP bonus |
| **Skill decay interaction** | Quiz questions about a fading skill add 3 days to grace period |
| **Content source** | Platform-level (Super Admin creates question bank for all academies) |

### Question Volume Estimate

| Stage Range | Questions Needed | Frequency of New Content |
|-------------|-----------------|-------------------------|
| Stage 1-2 | 200 questions | Monthly additions |
| Stage 3-4 | 300 questions | Monthly additions |
| Stage 5-7 | 400 questions | Monthly additions |
| General cricket | 200 questions | Quarterly additions |
| **Total** | **1,100 questions** | |

> At 5 questions/day, 1,100 questions = 220 days before any repeat. New questions added monthly.

---

## 3. XP System & Levels

### What It Is

Every action on the app earns Experience Points (XP). XP accumulates to levels. Levels unlock features, titles, and rewards.

### XP Earning Table

| Activity | XP Earned | Frequency |
|----------|-----------|-----------|
| Attend academy session | +10 XP | Per session |
| Complete home practice drill | +15 XP | Per drill |
| Upload practice video | +10 XP | Per video |
| Complete daily quiz | +5-25 XP | Daily |
| Watch technique video (full) | +5 XP | Per video |
| Pass skill assessment | +50 XP | Per assessment |
| Fail skill assessment (but attempted) | +10 XP | Per assessment |
| Stage promotion | +200 XP | Per promotion |
| Earn a badge | +25 XP | Per badge |
| Perfect week attendance | +50 XP bonus | Weekly |
| Home practice streak (7 days) | +30 XP bonus | Weekly |
| Quiz streak (7 days) | +20 XP bonus | Weekly |
| Mentoring a junior (session) | +15 XP | Per session |
| Match performance (10+ runs or 1+ wickets) | +5-100 XP | Per match |
| Match MVP | +100 XP | Per match |
| Coach feedback: "Good" on video | +10 XP | Per feedback |

### Level Progression

| Level | XP Required | Total XP | Unlock |
|-------|------------|----------|--------|
| 1 | 0 | 0 | Basic profile |
| 5 | 500 | 500 | Custom avatar color |
| 10 | 1,500 | 2,000 | Peer comparison (within academy) |
| 15 | 2,500 | 4,500 | Custom profile frame |
| 20 | 4,000 | 8,500 | Can access advanced drills |
| 25 | 6,000 | 14,500 | "Elite Trainee" title |
| 30 | 8,000 | 22,500 | Featured on academy wall of fame |
| 40 | 15,000 | 37,500 | "Cricket Scholar" title |
| 50 | 25,000 | 62,500 | Platinum profile + permanent badge |

### Level Display

```
RAVI KUMAR — Level 14
+------------------------------------------------------+
|  ||||||||||||||||____ 2,450 / 3,000 XP               |
|  550 XP to Level 15                                  |
|                                                       |
|  Level 15 unlocks: Custom profile frame              |
|                                                       |
|  XP earned today: 65 XP                              |
|  - Morning quiz: 20 XP                               |
|  - Home drill completed: 15 XP                       |
|  - Session attended: 10 XP                           |
|  - Video upload: 10 XP                               |
|  - Coach feedback "Good": 10 XP                     |
|                                                       |
+------------------------------------------------------+
```

---

## 4. Weekly Leaderboard

### What It Is

A weekly XP leaderboard within the academy that resets every Monday. Gives every student a fresh chance to be #1 each week.

### Leaderboard View

```
THIS WEEK'S LEADERBOARD — Mar 18-24
SAM Cricket Academy
+------------------------------------------------------+
|                                                       |
|  #1  Arjun K.     | 285 XP | 7-day streak           |
|  #2  Priya S.     | 240 XP | 5 drills completed     |
|  #3  Vikram S.    | 225 XP | Perfect attendance      |
|  #4  Ravi K. (YOU)| 195 XP | 90 XP to #3            |
|  #5  Deepa R.     | 180 XP |                         |
|  #6  Karthik M.   | 155 XP |                         |
|  #7  Ganesh R.    | 140 XP |                         |
|  ...                                                 |
|                                                       |
|  WEEKLY CHAMPION REWARD:                             |
|  #1 gets "Star of the Week" badge                    |
|  + Featured on academy social feed                   |
|                                                       |
|  VIEW: [My Batch] [All Academy] [My Stage]           |
|                                                       |
|  LEADERBOARD RESETS EVERY MONDAY                     |
|                                                       |
+------------------------------------------------------+
```

### Leaderboard Rules

| Rule | Detail |
|------|--------|
| **Weekly reset** | Every Monday 00:00, leaderboard starts fresh |
| **Scope options** | Within batch, within academy, within stage (academy-wide), platform-wide (Elite only) |
| **Ties broken by** | Total badges earned > Total Level > Streak length |
| **Prize** | "Star of the Week" badge (earnable every week — shows count) |
| **Academy can disable** | Some academies may not want competition pressure |
| **No negative XP** | XP can only go up — leaderboard measures positive activity, not punishment |
| **Parent visible** | Parents see their child's leaderboard position — drives engagement |

---

## 5. Interactive Lessons

### What It Is

Multi-step lessons that go beyond "watch a video." Each lesson includes: watch, identify, practice, quiz. Takes 12-15 minutes vs. 2 minutes for a plain video.

### Lesson Structure

```
INTERACTIVE LESSON: Cover Drive Mastery
Duration: 12 min | Skill: B11 | Difficulty: Intermediate
+------------------------------------------------------+
|                                                       |
|  STEP 1/5: Watch Technique (2 min)                   |
|  [Video plays — annotated slow-motion showing        |
|   foot placement, head position, bat angle]          |
|  Key points highlighted with on-screen callouts      |
|                                                       |
|  STEP 2/5: Spot the Mistake (2 min)                  |
|  [Video of incorrect cover drive plays]              |
|  "What's wrong with this technique?"                 |
|  A) Head falling over                                |
|  B) Front foot not reaching pitch  <-- correct       |
|  C) Bat face closed                                  |
|  D) No follow-through                                |
|                                                       |
|  STEP 3/5: Watch Drill Instructions (1 min)          |
|  [Short video explaining the drill setup]            |
|                                                       |
|  STEP 4/5: Record Yourself (5 min)                   |
|  "Now try 10 shadow cover drives. Record yourself."  |
|  [Open Camera]  [Skip - I'll do it later]            |
|                                                       |
|  STEP 5/5: Knowledge Check (2 min)                   |
|  Q1: "What should your head position be during       |
|       a cover drive?"                                |
|  Q2: "Where should your front foot land?"            |
|  Q3: "What's the follow-through direction?"          |
|                                                       |
|  COMPLETION: Earn 25 XP + "Cover Drive Scholar"      |
|  micro-badge                                         |
|                                                       |
+------------------------------------------------------+
```

### Lesson Types

| Type | Duration | Steps | XP |
|------|----------|-------|-----|
| **Technique Lesson** | 12-15 min | Watch + Spot Mistake + Drill + Record + Quiz | 25 XP |
| **Theory Lesson** | 8-10 min | Read + Watch + Quiz + Scenario | 15 XP |
| **Match Scenario** | 10 min | Situation + Multiple choices at each ball + Score | 20 XP |
| **Fitness Lesson** | 15-20 min | Warm-up video + Exercise follow-along + Cool-down | 20 XP |
| **Mental Game** | 8 min | Scenario + Reflection + Quiz | 15 XP |

### Content Volume

| Stage Range | Lessons Needed | Priority |
|-------------|---------------|----------|
| Stage 1-2 | 30 lessons | MVP (batting only) |
| Stage 3-4 | 50 lessons | Phase 2 |
| Stage 5-7 | 40 lessons | Phase 2 |
| Cross-stage (fitness, mental) | 20 lessons | Phase 2 |
| **Total** | **140 lessons** | |

---

## 6. Coach Content Studio

### What It Is

Coaches create content (videos, drill cards, articles, quizzes) that can be:
1. Used within their own academy
2. Sold on the platform marketplace to other academies

### Coach Studio Interface

```
COACH CONTENT STUDIO — Coach Ravi
+------------------------------------------------------+
|                                                       |
|  MY CONTENT:                                         |
|  +---------------------------------------------------+
|  | Video: Cover Drive Demo          | 245 views     |
|  | Video: How to Bowl Outswing      | 180 views     |
|  | Article: "5 Common Batting Errors"| 312 reads     |
|  | Drill Card: Pull Shot Drill      | 89 saves      |
|  | Quiz: Batting Fundamentals (10Q) | 156 attempts  |
|  +---------------------------------------------------+
|                                                       |
|  MARKETPLACE EARNINGS THIS MONTH: Rs 2,400           |
|  +---------------------------------------------------+
|  | Cover Drive Demo: Rs 800 (160 premium views)      |
|  | Outswing Tutorial: Rs 600 (120 premium views)     |
|  | Batting Errors article: Rs 1,000 (200 reads)      |
|  +---------------------------------------------------+
|                                                       |
|  CREATE NEW:                                         |
|  [+ Video]  [+ Article]  [+ Drill Card]  [+ Quiz]   |
|                                                       |
|  COACH RATING: 4.7 / 5.0 (89 reviews)               |
|  CONTENT QUALITY SCORE: A+ (high engagement rate)    |
|                                                       |
+------------------------------------------------------+
```

### Content Types Coaches Can Create

| Type | Description | Pricing |
|------|-------------|---------|
| **Technique Video** | 2-5 min demo of a skill with explanation | Free or Rs 5-25 per view |
| **Drill Card** | Written drill with setup, instructions, success criteria | Free or Rs 5-10 |
| **Article** | Written coaching tip (500-1500 words) | Free or Rs 5-15 |
| **Quiz Set** | 10-20 questions on a topic | Free or Rs 10-25 per attempt |
| **Full Course** | Multi-lesson package (5-10 lessons) | Rs 99-499 per course |

### Revenue Split

| Party | Share | Reasoning |
|-------|-------|-----------|
| **Coach (creator)** | 70% | Incentivize content creation |
| **Super Admin (platform)** | 30% | Platform hosting, distribution, payment processing |

### Quality Control

- All marketplace content reviewed by Super Admin before publishing
- Minimum quality standards (video resolution, content accuracy)
- Student ratings and reviews on content
- Low-rated content (<3.5 stars) gets flagged for review
- Plagiarism/copyright checks

### Why This Matters

| Benefit | Detail |
|---------|--------|
| **For coaches** | Extra income (Rs 2,000-10,000/month for active creators) |
| **For students** | Access to coaching from experts at OTHER academies |
| **For Super Admin** | Content scales without Super Admin creating everything |
| **For platform** | More content = more value = more users = flywheel |
| **For academies** | Access premium content without hiring specialist coach |

---

## 7. Student Daily Journey (With Engagement Features)

### Typical Day for an Engaged Student

```
6:00 AM   Wake up notification: "Today's schedule: Evening
          batch 4-6 PM. Home drill due: Pull Shot shadow"

7:00 AM   Open app — Complete daily quiz (5 questions, 3 min)
          "Q: Best shot for a full ball on middle stump?"
          Score: 4/5 — Earn 22 XP
          Quiz streak: 12 days

8:00 AM   School (app not needed)

12:30 PM  Lunch break — Watch 1 interactive lesson (12 min)
          "Spin Play Basics" — complete all 5 steps
          Earn 25 XP + "Spin Scholar" micro-badge

3:00 PM   Home drill reminder notification
          Coach assigned: 20 shadow pull shots + 10 push-ups
          Watch 1 min video, do drills, mark complete
          Upload selfie video of shadow drill (optional)
          Earn 15 XP (+10 bonus for video upload)

3:45 PM   "Your session starts in 15 min!"

4:00 PM   Arrive at academy — open app — mark self-attendance
          App shows: "Today's session plan: Cut Shot + Fielding"
          Earn 10 XP for attendance

6:00 PM   Session ends
          Coach scores Cut Shot: 72% (+5% improvement)
          Notification: "New score! Cut Shot improved +5%!"
          Earn 50 XP for passing assessment
          Check leaderboard: moved from #8 to #6 in batch

7:00 PM   Parent gets notification: "Ravi attended today.
          Cut Shot scored 72% (+5%). Coach note:
          Good improvement on footwork!"

8:00 PM   Browse social feed — see academy post
          Watch teammate's match highlights
          Like & comment
          Check: "Any skills fading?" — Stamina fading
          Plan run for tomorrow

9:00 PM   Total XP today: 132 XP
          Level progress: 2,450 / 3,000 (now 2,582)

TOTAL APP TIME: 35-45 minutes across the day
TOTAL APP OPENS: 6-8 times
```

---

## 8. Engagement Metrics to Track

### Platform-Level Metrics (Super Admin Dashboard)

| Metric | Target | Why It Matters |
|--------|--------|---------------|
| DAU (Daily Active Users) | 60% of enrolled students | Core engagement health |
| Avg daily app time | 30+ min | Depth of engagement |
| Quiz completion rate | 70%+ of DAU | Daily habit formation |
| Home practice completion | 60%+ of assigned | Coach-student connection |
| Video upload rate | 20%+ of drills | Content generation |
| Weekly leaderboard views | 80%+ of students | Competition engagement |
| Streak avg (days) | 14+ days | Habit retention |
| Content marketplace purchases | 5%+ of students/month | Revenue health |

### Academy-Level Metrics (Owner Dashboard)

| Metric | What It Shows |
|--------|--------------|
| Student engagement score | Composite of quiz, practice, attendance, video |
| Coach content output | Videos/articles created per coach per month |
| Home practice compliance | What % of assigned drills are being completed |
| Parent app usage | How often parents check progress |
| Leaderboard participation | Are students motivated by competition |

---

## 9. Feature Phasing

| Feature | MVP | Phase 2 | Phase 3 |
|---------|:---:|:-------:|:-------:|
| Home Practice (coach assigns drills) | Yes (basic — mark complete) | Video upload + coach review | AI feedback on videos |
| Daily Quiz | Yes (5 questions, text-based) | Visual questions with diagrams | Adaptive difficulty + AI |
| XP System | Yes (basic earning) | Levels + unlocks | Seasonal XP resets + rewards |
| Weekly Leaderboard | Yes (within academy) | Cross-academy (same stage) | Platform-wide |
| Interactive Lessons | No | Yes (30 lessons for batting) | 140+ lessons all categories |
| Coach Content Studio | No | Yes (create + sell) | Full marketplace with courses |
| Student Streaks | Yes (attendance + quiz) | Home practice streaks | Combined engagement streak |
| Parent Engagement | Yes (notifications) | Parent leaderboard (engagement ranking) | Parent engagement rewards |

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Home practice — mandatory or optional for stage promotion? | Recommend mandatory at 70% completion rate |
| 2 | Daily quiz — how many questions? | 5 for MVP (expandable to 10 for premium users) |
| 3 | XP system — seasonal resets? | No resets for MVP. Phase 3: optional seasonal leaderboard resets |
| 4 | Coach content marketplace — revenue split? | 70/30 (coach/platform) recommended |
| 5 | Interactive lessons — build in-house or partner? | Platform builds for batting Stage 1-4, then coaches contribute via marketplace |
| 6 | Video uploads — storage limits? | Free: 3 videos/week. Student Pro: unlimited |
| 7 | Should quiz completion affect skill decay? | Yes — quiz about a fading skill adds grace days |

---

*Last updated: 2026-03-22*
