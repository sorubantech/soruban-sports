# Elite Mode & Skill Decay System — Version 3

**Date:** 2026-03-22
**Status:** Brainstorming / Open for Discussion
**Builds on:** V2 `01-skills-master-list.md`, `03-performance-growth-features.md`

---

## The Problem: Elite Ceiling

Students who reach Stage 6-7 have mastered all required skills. In V1/V2, once a student scores 85% on a skill, it stays at 85% forever. There is nothing left to chase.

```
Current journey:
Stage 1 → 2 → 3 → 4 → 5 → 6 → 7 → ??? (nothing)

Student mindset:
Stage 1-4: "I'm improving! Next goal is clear!"       HIGH motivation
Stage 5:   "I'm almost Elite!"                         PEAK motivation
Stage 6-7: "I reached the top... now what?"            DANGER ZONE
                                                        ↓
                                              Boredom → Skip practice
                                              → Skills decay in real life
                                              → But app still shows 85%
                                              → App feels fake
                                              → Student leaves
```

**Real-world truth:** Even Virat Kohli has slumps. Elite players don't stop growing — they shift from learning new skills to maintaining mastery under pressure. The app must reflect this.

---

## 1. Skill Decay System

### Core Rule

If a student doesn't practice or get assessed on a skill for X weeks, the score starts dropping automatically.

### Decay Schedule

| Time Since Last Practice | Score Change | Notification |
|--------------------------|-------------|-------------|
| Week 1-2 | No change (grace period) | None |
| Week 3 | -2% | "Your [Skill] hasn't been practiced in 3 weeks" |
| Week 4 | -3% more | "Your [Skill] dropped to X%. Practice to recover!" |
| Week 5+ | -5% per week | "WARNING: [Skill] is declining rapidly!" |

### Decay Example

```
Cover Drive: 85% (assessed March 1)
  → Not practiced for 3 weeks
  → March 22: Auto-drops to 83% (-2%)
  → March 29: Auto-drops to 80% (-3%)
  → April 5:  Auto-drops to 75% (-5%)

Student notification on March 22:
  "Your Cover Drive dropped from 85% to 83%.
   Last practiced: March 1 (21 days ago).
   Complete a drill to stop the decay!"
```

### Decay Rules

| Rule | Detail |
|------|--------|
| **Grace period** | 2 weeks — no decay at all |
| **Minimum floor** | Score cannot drop below 40% (prevents total loss of earned progress) |
| **Recovery rate** | Score can recover faster than it decays — 1 practice session restores up to 5% |
| **Assessment override** | A formal coach assessment resets the decay timer and sets the actual score |
| **Stage impact** | If more than 3 skills in a stage drop below 70%, student gets a "Stage Warning" |
| **Decay disabled for** | Stage 1-2 students (beginners shouldn't feel punished), injury/leave periods |
| **Coach can pause** | Coach can pause decay for a specific student (injury, vacation, exam season) |

### Decay Scope by Stage

| Stage | Decay Active? | Decay Speed | Reasoning |
|-------|:------------:|:-----------:|-----------|
| Stage 1-2 | No | — | Beginners need encouragement, not pressure |
| Stage 3 | Light | -1%/week after 4 weeks | Gentle introduction to maintenance concept |
| Stage 4 | Moderate | -2%/week after 3 weeks | Building habit of consistent practice |
| Stage 5 | Standard | -3%/week after 2 weeks | Serious students, real consequences |
| Stage 6-7 | Full | -5%/week after 2 weeks | Elite players must maintain or lose status |

### What Counts as "Practice"

| Activity | Resets Decay Timer? | Score Impact |
|----------|:------------------:|-------------|
| Attend session where skill was in plan | Yes | Timer reset only |
| Complete home drill for the skill | Yes | Timer reset + up to +2% |
| Coach assessment/scoring | Yes | Timer reset + actual score set |
| Watch technique video for the skill | No | Timer not reset (watching is not practicing) |
| Daily quiz question on the skill | Partial | Adds 3 days to grace period |

---

## 2. Elite Dashboard

Elite students (Stage 6-7) see a completely different home screen than regular students. Their dashboard focuses on **maintenance and mastery** rather than learning.

### Elite Home Screen

```
+---------------------------------------------------------+
|  ELITE MODE — Ravi Kumar                                |
|  Stage 7 — Professional Prep                            |
|  Elite Rating: 4.8 / 5.0                                |
|  Elite Streak: 45 days (all skills above 70%)           |
+---------------------------------------------------------+
|                                                          |
|  SKILL HEALTH MONITOR                                   |
|  +------------------------------------------------------+
|  |  HEALTHY (practiced in last 2 weeks)         38/48   |
|  |  Cover Drive 85%  | Pull Shot 82%  | Sweep 80%      |
|  |  Outswing 78%     | Yorker 81%     | Agility 88%    |
|  |  [View all 38...]                                    |
|  |                                                      |
|  |  FADING (2-3 weeks since practice)           6/48    |
|  |  Late Cut 76% (-2%)    | Googly 72% (-3%)           |
|  |  Stamina 70% (-4%)     | Slip Catch 74% (-2%)       |
|  |  Pressure 71% (-3%)    | Calling 73% (-2%)          |
|  |  These will DROP further in 4 days!                  |
|  |                                                      |
|  |  DECLINING (3+ weeks, actively losing)       4/48    |
|  |  Reverse Sweep 68% (-7%)   Chinaman 64% (-9%)       |
|  |  Flipper 62% (-8%)         Carrom Ball 66% (-6%)     |
|  |  URGENT: Practice NOW or drop below Elite threshold! |
|  +------------------------------------------------------+
|                                                          |
|  TODAY'S MAINTENANCE PLAN (auto-generated):             |
|  +------------------------------------------------------+
|  |  Based on decay risk, practice these TODAY:          |
|  |  1. Reverse Sweep — 15 min drill (recovery drill)   |
|  |  2. Chinaman — shadow bowling + 10 deliveries       |
|  |  3. Stamina — 800m timed run                        |
|  |  4. Slip Catching — 10 reaction catches             |
|  |                                                      |
|  |  Est. time: 45 min  |  XP reward: 80 XP             |
|  |  [Start Maintenance Session]                         |
|  +------------------------------------------------------+
|                                                          |
|  ELITE RANKING                                          |
|  +------------------------------------------------------+
|  |  Platform Rank: #47 / 520 Elite Batsmen              |
|  |  State Rank (TN): #12 / 89 Elite Batsmen            |
|  |  Movement this week: +3 positions                    |
|  |                                                      |
|  |  Top 10 get "Elite Champion" badge                  |
|  |  You need +12% avg to enter Top 10                  |
|  +------------------------------------------------------+
|                                                          |
+---------------------------------------------------------+
```

### Maintenance Plan Algorithm

The system auto-generates a daily maintenance plan based on:

```
PRIORITY SCORING:

For each skill in the student's profile:
  decay_risk = days_since_last_practice / grace_period
  impact = skill_weight_for_role * current_score_drop
  urgency = current_score < stage_threshold ? HIGH :
            decay_risk > 0.8 ? MEDIUM : LOW

Sort all skills by: urgency DESC, impact DESC, decay_risk DESC

Select top 4-6 skills for today's plan
Assign appropriate drill from drill library
Calculate estimated time

Result: Personalized daily plan that changes every day
```

---

## 3. Elite Streak System

### What It Is

A consecutive day counter tracking how long ALL skills stay above the Elite threshold (70%). Breaking the streak is painful — motivating students to never skip practice.

### Streak Rules

| Rule | Detail |
|------|--------|
| **Streak starts** | When all 48 Elite skills are above 70% |
| **Streak continues** | Every day all skills remain above 70% |
| **Streak breaks** | ANY skill drops below 70% |
| **Recovery** | Fix the skill above 70% to restart streak (new streak begins at Day 1) |
| **Rest days** | 1 rest day per week doesn't break streak (configurable) |
| **Injury pause** | Coach can pause streak during injury recovery |

### Streak Milestones & Rewards

| Streak | Reward |
|--------|--------|
| 7 days | "Week Warrior" badge |
| 30 days | "Monthly Master" badge + profile glow effect |
| 60 days | "Iron Discipline" badge + featured on academy feed |
| 90 days | "Quarter Champion" badge + featured on platform feed |
| 180 days | "Half-Year Hero" badge + eligible for sponsored gear |
| 365 days | "Year of Excellence" badge + permanent profile frame + certificate |

### Streak Leaderboard

```
LONGEST ACTIVE ELITE STREAKS (Platform-wide)
+----+------------------+---------+-----------+----------+
| #  | Student          | Academy | Streak    | Stage    |
+----+------------------+---------+-----------+----------+
| 1  | Arjun Mehta      | DCA     | 234 days  | Stage 7  |
| 2  | Priya Nair       | SAM     | 198 days  | Stage 6  |
| 3  | Vikram Rajan     | STAR    | 187 days  | Stage 7  |
| 47 | Ravi Kumar  YOU  | SAM     | 45 days   | Stage 7  |
+----+------------------+---------+-----------+----------+
```

---

## 4. Elite-Only Features

Features available ONLY to Stage 6-7 students — giving them exclusive reasons to reach and stay at Elite level.

### Feature Matrix

| Feature | Stage 1-4 | Stage 5 | Stage 6-7 (Elite) |
|---------|:---------:|:-------:|:-----------------:|
| Basic progress dashboard | Yes | Yes | Yes |
| Radar chart | Yes | Yes | Yes (enhanced) |
| Peer comparison (within academy) | No | Yes | Yes |
| Peer comparison (cross-platform) | No | No | Yes |
| Elite Leaderboard | No | No | Yes |
| Skill Health Monitor | No | No | Yes |
| AI Video Analysis | No | No | Yes |
| Showcase Profile (public) | No | No | Yes |
| Mentor Mode | No | No | Yes |
| Selection Alerts | No | No | Yes |
| Tournament Invites | No | No | Yes |
| Coaching Certificate | No | No | Yes |
| Sponsorship Board | No | No | Yes |
| Advanced Match Analytics | No | Basic | Full |

### 4.1 Showcase Profile (Public Cricket Portfolio)

Elite students get a public profile visible to anyone — scouts, selectors, other academies, parents researching.

```
+---------------------------------------------------------+
|  SHOWCASE PROFILE — Ravi Kumar                          |
|  Stage 7 | Batsman (Right-hand) | Age 17               |
|  SAM Cricket Academy, Coimbatore                        |
|  Elite Streak: 45 days                                  |
+---------------------------------------------------------+
|                                                          |
|  SKILL RADAR CHART                                      |
|  [Spider graph showing all 7 categories]                |
|                                                          |
|  KEY STATS:                                             |
|  +------------------------------------------------------+
|  | Batting Avg | Strike Rate | Best Score | Centuries  |
|  | 42.5        | 128.3       | 98*        | 0 (HS: 98)|
|  +------------------------------------------------------+
|  | Bowling Avg | Economy | Best Bowling | 5-Wickets    |
|  | N/A         | N/A     | N/A          | N/A          |
|  +------------------------------------------------------+
|  | Matches: 24 | Stage Completions: 6 | Badges: 28    |
|  +------------------------------------------------------+
|                                                          |
|  JOURNEY:                                               |
|  Jan 2024: Joined Stage 1 (Foundation)                  |
|  Jun 2024: Promoted to Stage 3 (fast-tracked)           |
|  Dec 2024: Promoted to Stage 5                          |
|  Jun 2025: Promoted to Stage 6 (Elite)                  |
|  Jan 2026: Promoted to Stage 7 (Professional Prep)      |
|  Mar 2026: District U-16 Selected                       |
|                                                          |
|  VIDEO HIGHLIGHTS: [3 best clips — coach selected]      |
|                                                          |
|  COACH ENDORSEMENT:                                     |
|  "Ravi is one of the most disciplined batsmen I've      |
|  coached. Excellent technique, strong temperament.      |
|  Ready for state-level cricket."                        |
|  — Coach Venkat, SAM Cricket Academy                    |
|                                                          |
|  CERTIFICATIONS:                                        |
|  Stage 6 Completion Certificate (verified)              |
|  Soruban Certified Stage 4 Batsman                      |
|  Junior Coaching Certificate (Stage 1-3)                |
|                                                          |
+---------------------------------------------------------+
```

### 4.2 Mentor Mode

Elite students can mentor juniors within their academy.

```
MENTOR MODE — Ravi Kumar (Stage 7)
+------------------------------------------------------+
|                                                       |
|  MY MENTEES:                                         |
|  +---------------------------------------------------+
|  | Arjun S. (Stage 2) — Batting focus                |
|  |   Status: Struggling with cover drive (52%)       |
|  |   Your tip: "Focus on front foot reaching pitch"  |
|  |   Last chat: Yesterday                            |
|  |   [Send Tip]  [Record Demo Video for Arjun]      |
|  +---------------------------------------------------+
|  | Priya R. (Stage 3) — All-rounder                  |
|  |   Status: Pull shot assessment coming up          |
|  |   [Send Encouragement]  [Share Your Pull Shot]    |
|  +---------------------------------------------------+
|                                                       |
|  MENTOR STATS:                                       |
|  Students mentored: 4                                |
|  Tips given this month: 12                           |
|  Mentee improvement: +8% avg                         |
|  XP earned from mentoring: 180 XP                    |
|  Badge: "Guide" (mentor 3+ students for 2+ months)  |
|                                                       |
+------------------------------------------------------+
```

**Benefits:**
- Elite student develops leadership skills (MG12)
- Junior student gets peer support in addition to coach
- Elite student feels valuable — not "finished" but "giving back"
- Earns XP for mentoring — keeps them on the app
- Academy builds coaching pipeline — tomorrow's assistant coach

### 4.3 Selection Alerts

Platform connects Elite students with real cricket selection opportunities.

```
SELECTION ALERTS — Based on your profile
+------------------------------------------------------+
|                                                       |
|  NEW: Tamil Nadu U-17 Selection Trials               |
|  Date: April 15, 2026 | Venue: MA Chidambaram       |
|  Eligibility: Stage 5+ | Age: 15-17                  |
|  You qualify!                                        |
|  [Register Interest]  [Share with Coach]             |
|                                                       |
|  UPCOMING:                                           |
|  - TNCA District U-16 Trials (Apr 5)                |
|  - IPL Academy Open Trials - CSK (May 10)           |
|  - Soruban Premier League Season 2 (Jun 1)          |
|                                                       |
+------------------------------------------------------+
```

### 4.4 Tournament Invites

Only Elite students can represent their academy in platform-organized inter-academy tournaments.

```
TOURNAMENT: Soruban Premier League — Season 2
+------------------------------------------------------+
|                                                       |
|  You've been selected to represent                   |
|  SAM Cricket Academy!                                |
|                                                       |
|  Format: T20 | Teams: 16 academies                   |
|  Dates: June 1-15, 2026                             |
|  Venues: Across Tamil Nadu                           |
|                                                       |
|  Selection criteria (auto-qualified):                |
|  Elite Stage (6-7)                                   |
|  Elite Streak > 30 days                              |
|  All skills above 70%                                |
|  Academy coach recommendation                        |
|                                                       |
|  Live scoring, stats tracked, scouts watching         |
|                                                       |
+------------------------------------------------------+
```

### 4.5 Coaching Certificate

Elite students can earn a "Junior Coach" certification.

```
SORUBAN JUNIOR COACHING CERTIFICATE
+------------------------------------------------------+
|                                                       |
|  Certify that you can teach Stage 1-3 skills         |
|                                                       |
|  Requirements:                                       |
|  All Stage 1-3 skills above 80% (maintained)         |
|  Mentor 3+ juniors for 2+ months                     |
|  Complete "Coaching Fundamentals" quiz (80%+)         |
|  Coach recommendation                                |
|                                                       |
|  Benefits:                                           |
|  - "Certified Junior Coach" badge                    |
|  - Can assist coach during sessions (formal role)    |
|  - Listed on Coach Marketplace as "Student Coach"    |
|  - Earns XP for every session assisted               |
|  - Looks great on cricket CV / showcase profile      |
|                                                       |
|  Your progress:                                      |
|  Skills above 80%: 15/15                             |
|  Mentees (2+ months): 2/3 (need 1 more)             |
|  Coaching quiz: Not attempted                        |
|  Coach recommendation: Pending                       |
|                                                       |
+------------------------------------------------------+
```

---

## 5. Stage Demotion (Extreme Consequence)

### The Nuclear Option

If an Elite student's skills decay severely and consistently, they can be **demoted** back to a lower stage. This is the ultimate motivator.

### Demotion Rules

| Condition | Action |
|-----------|--------|
| 5+ skills below 60% for 4 consecutive weeks | "Demotion Warning" notification |
| 8+ skills below 60% for 4 consecutive weeks | "Demotion Review" — coach must decide |
| Coach confirms demotion | Student moves back one stage |
| Student can challenge | Request re-assessment within 2 weeks |

### Demotion Safeguards

- **Coach must approve** — system cannot auto-demote
- **Warning period** — student gets 4 weeks of warnings before demotion is even possible
- **Injury/leave exempt** — paused during approved leave
- **Challenge option** — student can request formal re-assessment
- **Partial demotion** — only specific skill categories can be demoted, not entire stage
- **Academy configurable** — academy can disable demotion entirely

### Why Demotion Works

- **Real consequence** — "I MUST practice or I lose my Stage 7 status"
- **Mirrors real life** — professional cricketers get dropped from teams for poor form
- **Motivates daily app usage** — check skill health every day
- **Builds resilience** — teaches students that achievement requires maintenance
- **Not punitive** — it's framed as "your skills need refreshing" not "you failed"

---

## 6. Elite Challenges (Monthly Platform Events)

### What It Is

Monthly skill challenges organized by Super Admin that all Elite students can participate in. Creates urgency, community, and competitive fire.

### Monthly Challenge Example

```
MARCH CHALLENGE: "Cover Drive Master"
+------------------------------------------------------+
|                                                       |
|  Challenge: Score 90%+ on Cover Drive assessment     |
|  Period: March 1-31                                  |
|  Participants: 847 Elite students platform-wide      |
|                                                       |
|  YOUR STATUS:                                        |
|  Current Cover Drive: 85%                            |
|  Target: 90%                                         |
|  Attempts left this month: 2                         |
|                                                       |
|  REWARDS:                                            |
|  Complete challenge: "March Master" badge + 200 XP   |
|  Top 10 scorers: Featured on platform + 500 XP      |
|  #1 scorer: "Cover Drive King" title for 1 month    |
|                                                       |
|  LEADERBOARD:                                        |
|  #1 Arjun M. — 96%  | #2 Priya N. — 94%            |
|  #3 Vikram R. — 93%  | ... #47 Ravi K. — 85%        |
|                                                       |
|  SPONSORED BY: MRF Bats                              |
|  Prize for #1: MRF Genius bat (worth Rs 8,000)       |
|                                                       |
+------------------------------------------------------+
```

### Challenge Types

| Type | Frequency | Example |
|------|-----------|---------|
| **Skill Challenge** | Monthly | "Score 90%+ on [specific skill]" |
| **Streak Challenge** | Quarterly | "Maintain Elite streak for 90 days" |
| **Fitness Challenge** | Monthly | "Complete Yo-yo test Level 15+" |
| **Knowledge Challenge** | Weekly | "Score 100% on weekly cricket quiz" |
| **Video Challenge** | Monthly | "Upload best Cover Drive — community votes" |
| **Mentor Challenge** | Quarterly | "Help 3 juniors improve 10%+ in 3 months" |

---

## 7. Elite Analytics (Data Only Elites See)

### Advanced Match Analytics

```
MATCH ANALYSIS — SAM vs Star Academy (March 15)
+------------------------------------------------------+
|                                                       |
|  YOUR INNINGS: 42 (32) | SR: 131.25                 |
|                                                       |
|  WAGON WHEEL:                                        |
|  [Visual showing where each shot was hit]            |
|  Cover: 8 runs | Mid-wicket: 12 runs | Leg: 6 runs  |
|  Straight: 10 runs | Square: 6 runs                 |
|                                                       |
|  SHOT ANALYSIS:                                      |
|  Cover Drive: 4 played, 3 scored (75% success)       |
|  Pull Shot: 3 played, 2 scored, 1 mistimed           |
|  Cut Shot: 2 played, 2 scored (100% success)         |
|  Sweep: 1 played, 1 missed — false shot              |
|                                                       |
|  BOWLING ANALYSIS (balls faced):                     |
|  vs Pace: 18 balls, 28 runs (SR: 155)               |
|  vs Spin: 14 balls, 14 runs (SR: 100) — weakness?   |
|                                                       |
|  AI INSIGHT:                                         |
|  "Your scoring rate drops 35% against spin.          |
|   Consider adding Sweep drill to maintenance plan.   |
|   Your cover drive is your strongest scoring shot."  |
|                                                       |
+------------------------------------------------------+
```

---

## 8. Feature Phasing

| Feature | MVP | Phase 2 | Phase 3 |
|---------|:---:|:-------:|:-------:|
| Skill Decay (Stage 5-7) | Yes (basic timer) | Full with notifications | AI-adjusted decay rates |
| Skill Decay (Stage 3-4) | No | Yes (gentle) | Yes |
| Elite Dashboard | Yes (basic health monitor) | Full with maintenance plan | AI-powered plans |
| Elite Streak | Yes | Yes + leaderboard | Yes + sponsored rewards |
| Showcase Profile | No | Yes (basic) | Yes + video highlights |
| Mentor Mode | No | Yes | Yes + chat + demo videos |
| Selection Alerts | No | No | Yes (partnerships needed) |
| Tournament Invites | No | Yes (internal) | Yes (inter-academy) |
| Coaching Certificate | No | No | Yes |
| Stage Demotion | No | Yes (optional for academy) | Yes (configurable) |
| Monthly Challenges | No | Yes (basic) | Yes + sponsored |
| Advanced Match Analytics | No | Basic | Full + AI insights |

---

## Decisions Needed

| # | Question | Options |
|---|----------|---------|
| 1 | Skill decay in MVP or Phase 2? | Recommend MVP for Stage 5-7 only — it's the core Elite retention mechanism |
| 2 | How aggressive should decay be? | Start gentle (proposed rates), let academies configure |
| 3 | Stage demotion — enabled by default? | No — opt-in per academy. Some will find it too harsh |
| 4 | Mentor Mode — structured or informal? | Phase 2: structured with assigned mentees and tracked tips |
| 5 | Should decay affect stage promotion eligibility? | Yes — if any Stage X skill is below 70%, cannot attempt Stage X+1 promotion |
| 6 | Elite Streak — rest days allowed? | Yes — 1 per week (coach configurable) |

---

*Last updated: 2026-03-22*
