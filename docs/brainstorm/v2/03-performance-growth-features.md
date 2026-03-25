# Performance Growth & Profile Features — Version 2

**Date:** 2026-03-21
**Status:** Brainstorming / Open for Discussion
**Builds on:** `02-curriculum-framework.md` (V1), `v2/01-skills-master-list.md`, `v2/02-training-practice-module.md`

---

## Overview

Features that help students **visualize growth, stay motivated, and continuously improve**. These features transform the app from a management tool into a performance engine.

---

## 1. Skill Radar Chart (Spider Graph)

### What It Is

A visual radar/spider chart on every student's profile showing scores across all major skill categories at a glance. The most powerful single visualization in the app.

### How It Looks

```
                    Batting (78%)
                        ▲
                       ╱ ╲
                      ╱   ╲
       Nutrition    ╱       ╲    Bowling (65%)
       (40%)   ────╱─────────╲────
              ╲   ╱    ╱╲     ╲   ╱
               ╲ ╱   ╱    ╲    ╲ ╱
    Mental/    ──╱──╱────────╲───╲── Fielding (72%)
    Game (60%)  ╱ ╱            ╲  ╲
              ╱╱                ╲╲
        Fitness ────────────── Wicket-
        (55%)                  Keeping (70%)

        ── Current Score (solid line)
        -- Previous Month (dotted line — shows growth)
```

### Radar Chart Details

| Element | Description |
|---------|-------------|
| **Axes** | 7 axes — one per skill category |
| **Current Score** | Solid colored line — weighted average of all skills in that category |
| **Previous Period** | Dotted line overlay — shows last month/quarter for comparison |
| **Tap to Expand** | Tapping any axis opens that category's detailed breakdown |
| **Color Coding** | Green (>75%), Yellow (50-75%), Red (<50%) |

### Who Sees It

| Role | View |
|------|------|
| **Student** | Own radar chart on profile — motivational |
| **Parent** | Child's radar chart — clear strengths/gaps at a glance |
| **Coach** | Any student's radar chart — helps plan PDP and sessions |
| **Head Coach** | Compare radar charts across students in a batch |

### Detailed Breakdown (Tap to Expand)

Tapping "Batting (78%)" expands to:

```
BATTING BREAKDOWN — Ravi Kumar
──────────────────────────────

Foundation:
  Grip .............. 95% ✅
  Stance ............ 90% ✅
  Backlift .......... 85% ✅
  Footwork .......... 80% ✅
  Head Position ..... 75% ✅

Defensive:
  Forward Def ....... 88% ✅
  Back Foot Def ..... 72% ✅
  Leaving ........... 70% ✅
  Dead Bat Def ...... Not assessed

Front Foot Attack:
  Straight Drive .... 82% ✅
  Cover Drive ....... 85% ✅
  On Drive .......... 60% 🔄 (In Progress)
  Off Drive ......... Not started
  Square Drive ...... Not started
  Flick ............. 55% 🔄
  Push/Nudge ........ 78% ✅

[Expand for Back Foot, Spin Play, T20, Running...]
```

---

## 2. Performance Timeline

### What It Is

A chronological view of a student's improvement over time. Shows the journey, not just the current state.

### Timeline View

```
┌──────────────────────────────────────────────────────┐
│  PERFORMANCE TIMELINE — Ravi Kumar                    │
│  Joined: January 2026  |  Current Stage: 3            │
├──────────────────────────────────────────────────────┤
│                                                        │
│  Overall Score                                         │
│  80│                                    ╱── 78%        │
│  70│                              ╱────╱               │
│  60│                    ╱────────╱                      │
│  50│              ╱────╱                                │
│  40│        ╱────╱                                      │
│  30│  ╱────╱                                            │
│    └──┬────┬────┬────┬────┬────┬────┬────┬────          │
│      Jan  Feb  Mar  Apr  May  Jun  Jul  Aug             │
│                                                        │
│  KEY MILESTONES:                                       │
│  🏅 Jan 15 — Completed Stage 1 (Foundation)            │
│  🏅 Feb 28 — Completed Stage 2 (Beginner)              │
│  ⭐ Mar 10 — Cover Drive scored 85% (personal best)    │
│  🏏 Mar 15 — First match: scored 32 runs               │
│  📈 Mar 21 — Overall score crossed 75%                 │
│                                                        │
│  FILTER: [All] [Batting] [Bowling] [Fielding] [Matches]│
└──────────────────────────────────────────────────────┘
```

### Data Points on Timeline
- Overall score trend (monthly average)
- Stage completion milestones
- Personal bests (highest skill scores)
- Match performances
- Assessment results
- Badge/achievement unlocks

---

## 3. Achievement Badges & Milestones

### Why Badges

Gamification drives engagement — especially for younger students (Stage 1-4 age groups). Badges provide micro-motivations between stage promotions (which can take months).

### Badge Categories

#### Practice & Commitment Badges

| Badge | Criteria | Icon Idea |
|-------|----------|-----------|
| First Steps | Complete first ever skill assessment | 👶🏏 |
| Net Warrior | Attend 50 net sessions | 🥅 |
| Century Club | Attend 100 sessions total | 💯 |
| Perfect Week | 100% attendance in a week | ⭐ |
| Perfect Month | 100% attendance in a month | 🌟 |
| Early Bird | Attend 10 morning sessions | 🌅 |
| Iron Will | Attend sessions for 90 consecutive days | 🔥 |
| Year One | Complete 1 year at the academy | 🎂 |

#### Skill Mastery Badges

| Badge | Criteria | Icon Idea |
|-------|----------|-----------|
| Foundation Master | Score 80%+ on all Stage 1 skills | 🧱 |
| Shot Collector | Score 70%+ on 10 different batting skills | 🎯 |
| All-Rounder | Score 70%+ in Batting, Bowling, AND Fielding | ⚡ |
| Spin Doctor | Score 80%+ on 3 spin bowling variations | 🌀 |
| Safe Hands | Score 80%+ on all catching skills | 🧤 |
| Lightning Reflexes | Score 80%+ on Reaction Time fitness test | ⚡ |
| Cover Drive King/Queen | Score 90%+ on Cover Drive | 👑 |
| Complete Player | Score 70%+ across all 7 categories | 🏆 |

#### Match Performance Badges

| Badge | Criteria | Icon Idea |
|-------|----------|-----------|
| First Runs | Score first runs in a match | 🏃 |
| Half Century | Score 50+ in a match | 5️⃣0️⃣ |
| Century Maker | Score 100+ in a match | 💯 |
| First Wicket | Take first wicket in a match | 🎳 |
| Five-For | Take 5+ wickets in a match | 🖐️ |
| Hat-Trick Hero | Take 3 wickets in 3 consecutive balls | 🎩 |
| Match MVP | Voted match MVP by coach | ⭐ |
| Match Winner | Named match-winning performance | 🏆 |
| Run Machine | Score 200+ runs in a month (across matches) | 🔥 |
| Wicket Machine | Take 15+ wickets in a month | 🔥 |

#### Special Badges

| Badge | Criteria | Icon Idea |
|-------|----------|-----------|
| Stage Graduate | Complete any stage | 🎓 |
| Rapid Riser | Complete a stage in under 2 months | 🚀 |
| Comeback Kid | Improve a failing skill by 30%+ in one month | 💪 |
| Fitness Freak | Score 80%+ on all fitness tests | 🏋️ |
| Team Player | Receive "Teamwork" recognition from coach 5 times | 🤝 |
| Video Analyst | Upload 10 self-review videos | 📹 |

### Badge Display

```
┌──────────────────────────────────────────────────────┐
│  RAVI KUMAR — BADGES (12 earned)                      │
├──────────────────────────────────────────────────────┤
│                                                        │
│  🧱  💯  ⭐  🎯  🏃  5️⃣0️⃣  🎓  🎓  🌅  🔥  💪  🤝   │
│                                                        │
│  RECENT:                                               │
│  🎓 Stage 2 Graduate — Feb 28, 2026                   │
│  💯 Century Club — 100 sessions attended               │
│  🎯 Shot Collector — 10 batting skills at 70%+        │
│                                                        │
│  NEXT BADGES (close to earning):                       │
│  🧤 Safe Hands — 3/4 catching skills at 80%+ (need 1) │
│  🌟 Perfect Month — 18/22 sessions (need 100%)        │
│  5️⃣0️⃣ Half Century — highest match score: 42          │
│                                                        │
│  [Share badges on feed]  [View all badges]             │
└──────────────────────────────────────────────────────┘
```

### Badge Integration
- Badges visible on student profile
- Auto-posted to academy social feed when earned (if academy enables)
- Parent sees child's badge collection
- Digital certificate includes badges earned during that stage

---

## 4. Peer Comparison (Anonymous Benchmarking)

### What It Is

Show students where they stand compared to peers — without revealing individual names. Motivating without creating toxicity.

### How It Works

```
┌──────────────────────────────────────────────────────┐
│  HOW DO YOU COMPARE? — Stage 3 Players                │
│  Compared to: 847 Stage 3 players across all academies│
├──────────────────────────────────────────────────────┤
│                                                        │
│  YOUR BATTING SCORE: 78%                               │
│  ┌──────────────────────────────────────────────┐     │
│  │ Bottom 25%  │  Average  │  Top 25%  │ Top 10% │    │
│  │             │           │     ▲ YOU │         │    │
│  │  <55%       │  55-70%   │  70-85%   │  >85%   │    │
│  └──────────────────────────────────────────────┘     │
│  You're in the TOP 22% of Stage 3 batsmen!            │
│                                                        │
│  YOUR BOWLING SCORE: 65%                               │
│  ┌──────────────────────────────────────────────┐     │
│  │ Bottom 25%  │  Average  │ ▲ YOU │  Top 25%   │    │
│  │  <50%       │  50-65%   │  65-80% │  >80%    │    │
│  └──────────────────────────────────────────────┘     │
│  You're in the TOP 40% of Stage 3 bowlers             │
│                                                        │
│  YOUR FIELDING SCORE: 72%                              │
│  You're in the TOP 30% of Stage 3 fielders            │
│                                                        │
│  YOUR OVERALL SCORE: 71%                               │
│  You're in the TOP 35% overall                        │
│                                                        │
│  📈 You moved UP 8 percentile points this month!      │
└──────────────────────────────────────────────────────┘
```

### Privacy Rules
- **No names** — only percentile bands
- **No ranking lists** — no "1st, 2nd, 3rd" leaderboards
- **Same stage only** — compare Stage 3 with Stage 3, not with Stage 6
- **Minimum pool**: Comparison only when 20+ students exist at that stage
- **Academy can disable**: Some academies may not want this feature
- **Cross-academy**: Compare across ALL platform academies (anonymous) — or within own academy only

### Comparison Scopes

| Scope | Description | Default |
|-------|-------------|---------|
| **Within Batch** | Compare to peers in same training batch | Always available |
| **Within Academy** | Compare to all students at same stage in the academy | Always available |
| **Across Platform** | Compare to all students at same stage on the platform | Academy opt-in |

---

## 5. Coach Notes Timeline

### What It Is

Private, chronological coaching observations attached to each student's profile. Creates institutional knowledge that survives coach changes.

### Why It Matters

- When a coach leaves, their knowledge about students leaves with them
- New coaches spend weeks understanding each student's tendencies
- Coach notes create a continuous coaching record

### Notes Interface

```
┌──────────────────────────────────────────────────────┐
│  COACH NOTES — Ravi Kumar                             │
│  📝 Private — visible to staff only                   │
├──────────────────────────────────────────────────────┤
│                                                        │
│  [+ Add Note]                                          │
│                                                        │
│  Mar 20, 2026 — Coach Suresh                          │
│  📋 Session Observation                                │
│  "Ravi's cover drive has become very consistent.       │
│   Ready to move on to off drive. Front foot is now     │
│   reaching the pitch naturally. Backlift has            │
│   straightened out — see video from today."            │
│  🏷️ Skills: B11 (Cover Drive), B13 (Off Drive)        │
│  📎 Attached: video_ravi_coverdrive_0320.mp4           │
│                                                        │
│  ────────────────────────────────────────────────       │
│                                                        │
│  Mar 15, 2026 — Coach Suresh                          │
│  ⚠️ Concern                                           │
│  "Front foot not reaching the pitch of the ball on     │
│   drives. Needs 2 more weeks on footwork drills         │
│   before attempting on drive."                          │
│  🏷️ Skills: B4 (Footwork), B11 (Cover Drive)          │
│                                                        │
│  ────────────────────────────────────────────────       │
│                                                        │
│  Mar 1, 2026 — Coach Ravi                             │
│  ✅ Positive                                           │
│  "Excellent attitude in fielding practice today.        │
│   Dived for catches he wouldn't have attempted a        │
│   month ago. Confidence is growing."                    │
│  🏷️ Skills: F1 (High Catch), MG5 (Confidence)         │
│                                                        │
│  [Load earlier notes...]                               │
└──────────────────────────────────────────────────────┘
```

### Note Types

| Type | Icon | Purpose |
|------|------|---------|
| **Session Observation** | 📋 | General observations from practice |
| **Positive** | ✅ | Highlight improvement or good performance |
| **Concern** | ⚠️ | Flag an issue that needs monitoring |
| **Injury/Physical** | 🏥 | Physical concerns, fatigue, pain reported |
| **Behavioral** | 📌 | Attitude, discipline, effort-related |
| **Parent Feedback** | 👨‍👩‍👦 | Notes from parent conversations |
| **Assessment Result** | 📊 | Observations from formal assessments |
| **PDP Review** | 📈 | Monthly PDP review notes |

### Note Features
- **Skill tagging**: Link notes to specific skills (searchable)
- **Photo/video attachment**: Clip from today's session
- **Coach attribution**: Which coach wrote the note
- **Search**: Find all notes mentioning "footwork" or skill B4
- **Filters**: By type, date range, skill, coach
- **Handoff summary**: When a student changes batches/coaches, the new coach sees a "handoff summary" — last 5 notes + PDP + radar chart

---

## 6. Video Progress Diary

### What It Is

Monthly short video clips (15-30 sec) of a student performing key skills. Side-by-side comparison shows visible improvement over months.

### How It Works

```
┌──────────────────────────────────────────────────────┐
│  VIDEO PROGRESS DIARY — Ravi Kumar — Cover Drive      │
├──────────────────────────────────────────────────────┤
│                                                        │
│  ┌─────────────────┐    ┌─────────────────┐           │
│  │                  │    │                  │           │
│  │   January 2026   │    │    March 2026    │           │
│  │                  │    │                  │           │
│  │  ▶ [Play]        │    │  ▶ [Play]        │           │
│  │                  │    │                  │           │
│  │  Score: 55%      │    │  Score: 85%      │           │
│  └─────────────────┘    └─────────────────┘           │
│                                                        │
│  IMPROVEMENT: +30% in 2 months                        │
│                                                        │
│  Coach Suresh: "Look at the footwork difference —      │
│  front foot now reaches full length to the pitch."     │
│                                                        │
│  [Compare different months ▼]                          │
│  [Share to feed]  [Download]  [Send to parent]         │
└──────────────────────────────────────────────────────┘
```

### Upload Methods
1. **Coach uploads**: Coach records during session, tags student + skill
2. **Student uploads**: Student records themselves practicing (self-review)
3. **AI-tagged** (Phase 2): AI identifies which skill is being performed

### Use Cases
- **Student motivation**: "Look how much I've improved!"
- **Parent engagement**: Parents share on WhatsApp/Instagram — free marketing for academy
- **Coach evidence**: Evidence-based feedback, not just subjective opinion
- **Assessment support**: Video evidence alongside score for stage promotion decisions

### Storage Considerations
- Limit: 30-second clips max (keeps storage manageable)
- Compression: Auto-compress to 720p
- Retention: Keep last 12 months by default
- Tier-based: Free tier = 5 videos/student/month, Pro = 20, Elite = unlimited

---

## 7. Seasonal/Periodic Goals

### What It Is

Longer-term goal setting that goes beyond monthly PDP. Students and coaches set goals per season/quarter/year.

### Goal Types

| Type | Duration | Example |
|------|----------|---------|
| **Weekly Goal** | 1 week | "Attend all 5 sessions this week" |
| **Monthly Goal** | 1 month | "Score 75%+ on pull shot assessment" |
| **Quarterly Goal** | 3 months | "Complete Stage 3 and earn Stage Graduate badge" |
| **Season Goal** | Cricket season | "Score 500 runs across all matches this season" |
| **Annual Goal** | 1 year | "Reach Stage 5 and make district selection trials" |

### Goal Card

```
┌──────────────────────────────────────────────────────┐
│  MY GOALS — Ravi Kumar                                │
├──────────────────────────────────────────────────────┤
│                                                        │
│  🎯 QUARTERLY GOAL (Jan-Mar 2026)                     │
│  "Complete Stage 3 and start Stage 4"                  │
│  Progress: ████████████░░░░ 75%                        │
│  Status: 🔄 On Track                                  │
│  Breakdown:                                            │
│    ✅ Cover Drive — passed                             │
│    ✅ Pull Shot — passed                               │
│    🔄 Cut Shot — in progress (60%)                    │
│    ⬜ On Drive — not started                           │
│    ⬜ Running — not started                            │
│                                                        │
│  🏏 SEASON GOAL (2026 Season)                         │
│  "Score 300 runs across all matches"                   │
│  Progress: ████░░░░░░░░░░░░ 132/300 runs (44%)       │
│  Matches played: 8  |  Avg: 16.5  |  Best: 42        │
│                                                        │
│  📅 WEEKLY GOAL (Mar 18-24)                            │
│  "Practice pull shot drill 3 times this week"          │
│  Progress: ██████████░░░░░░ 2/3 sessions done         │
│  Status: ✅ On Track                                   │
│                                                        │
│  [+ Set New Goal]                                      │
└──────────────────────────────────────────────────────┘
```

### Who Sets Goals
- **Student** sets personal goals (optional — not required)
- **Coach** sets goals through PDP (mandatory focus areas)
- **System** suggests goals based on current progress and stage requirements

---

## 8. Parent Performance View

### What Parents See

Parents get a simplified, encouraging view — not the raw coaching data.

```
┌──────────────────────────────────────────────────────┐
│  MY CHILD'S PROGRESS — Ravi Kumar                     │
│  Academy: SAM Cricket Academy                         │
│  Stage: 3 (Developing)  |  Role: Batsman              │
├──────────────────────────────────────────────────────┤
│                                                        │
│  THIS MONTH'S HIGHLIGHTS:                              │
│  📈 Overall score improved 72% → 78% (+6%)            │
│  🏅 Earned "Shot Collector" badge                      │
│  🏏 Scored 42 runs in internal match (personal best)  │
│  ✅ Cover Drive mastered (85%)                         │
│                                                        │
│  [View Radar Chart]  [View Progress Timeline]          │
│                                                        │
│  ATTENDANCE: 18/22 sessions (82%)                      │
│  Missed: Mar 5, Mar 12, Mar 18, Mar 20               │
│                                                        │
│  CURRENT FOCUS (from Coach):                           │
│  "Ravi is working on back foot play and running        │
│   between wickets. His cover drive is now excellent.   │
│   Next target: complete Stage 3 by end of April."      │
│                                                        │
│  UPCOMING:                                             │
│  📝 Cut Shot assessment — next week                    │
│  🏏 Internal match — March 29 (Saturday)               │
│                                                        │
│  [View detailed skill breakdown]                       │
│  [View video progress diary]                           │
│  [Fee status]                                          │
└──────────────────────────────────────────────────────┘
```

### Parent Communication Principles
- **Positive framing**: Lead with improvements, not failures
- **Simple language**: No cricket jargon where possible
- **Actionable**: What's next, what to expect
- **Coach's voice**: Monthly summary written by coach, not auto-generated
- **No raw scores on homepage**: Parents see trends and highlights, not "your child scored 55% on bowling"

---

## 9. AI-Powered Insights (Phase 2+)

### Features for Future Phases

| Feature | Description | Phase |
|---------|-------------|-------|
| **Smart PDP** | AI suggests focus areas based on assessment gaps and stage requirements | Phase 2 |
| **Improvement Predictions** | "At current pace, Ravi will complete Stage 3 by April 15" | Phase 2 |
| **Drill Recommendations** | Based on weak skills, suggest specific drills | Phase 2 |
| **Injury Risk Alert** | Based on bowling workload + age + growth patterns | Phase 3 |
| **Optimal Batch Placement** | Suggest which batch a student fits best based on level | Phase 2 |
| **Session Effectiveness** | Which drills are most effective at improving specific skills? | Phase 3 |
| **Technique Analysis** | AI video analysis — compare student form to ideal technique | Phase 3 |
| **Career Path Insight** | "Based on scores, Ravi's strengths align with opening batsman role" | Phase 3 |

---

## 10. Feature Phasing

| Feature | MVP | Phase 2 | Phase 3 |
|---------|-----|---------|---------|
| Skill Radar Chart | ✅ Basic (static) | Interactive, tap-to-expand | Animated transitions |
| Performance Timeline | ✅ Simple line chart | Milestone markers | Filter by category |
| Achievement Badges | ✅ 10 basic badges | 30+ badges, badge sharing | Custom academy badges |
| Peer Comparison | ❌ | ✅ Within academy | Cross-platform |
| Coach Notes | ✅ Text only | Photo/video, skill tags | Search, handoff summary |
| Video Progress Diary | ❌ | ✅ Manual upload | AI-tagged, auto-compare |
| Goals | ❌ | ✅ Monthly/quarterly | AI-suggested goals |
| Parent Performance View | ✅ Basic summary | Radar chart, video diary | AI-generated monthly report |
| AI Insights | ❌ | ✅ Smart PDP, predictions | Full AI analysis |

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Radar chart in MVP or Phase 2? | Recommend MVP — it's the "wow" feature and relatively simple to build |
| 2 | How many badges at launch? | 10-15 basic badges, expand to 30+ in Phase 2 |
| 3 | Anonymous benchmarking — within academy only or cross-platform? | Start with within-academy, add cross-platform when user base grows |
| 4 | Video diary storage limits? | Propose: 5 clips/student/month (Free), 20 (Pro), Unlimited (Elite) |
| 5 | Parent view — auto-generated or coach-written summaries? | MVP: Auto-generated from data. Phase 2: Coach adds personal note |
| 6 | Goal setting — student feature or coach feature? | Both — coach sets PDP goals, student sets personal goals |

---

*Last updated: 2026-03-21*
