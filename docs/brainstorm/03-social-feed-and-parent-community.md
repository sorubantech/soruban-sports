# Social Feed & Parent Cricket Community

**Date:** 2026-03-16
**Status:** Brainstorming — Confirmed as Key Features

---

## Feature A: Academy Social Feed

### Overview
An in-app social media-like feed where academies, coaches, students, and parents interact. Designed to **replace WhatsApp groups** and become the primary communication and content channel.

### Visibility Levels

| Visibility | Who Sees | Use Case |
|------------|----------|----------|
| **Public** | Anyone on the platform (even non-enrolled users) | Academy promotion, talent showcase, attract new admissions |
| **Academy Only** | Students + Parents + Staff of that academy | Training highlights, internal announcements, event photos |
| **Batch/Group** | Specific batch members only | Batch-specific schedules, drill videos for that group |
| **Staff Only** | Coaches & staff | Internal discussion, student notes, planning |

### Content Types

| Type | Description | Posted By |
|------|-------------|-----------|
| **Photo/Video Post** | Training clips, match highlights, facility photos | Academy, Coach, Student (with approval) |
| **Achievement Post** | Auto-generated on milestones ("Ravi completed Stage 3!") | System (auto) |
| **Announcement** | Schedule changes, holidays, fee reminders, events | Academy Owner, Head Coach |
| **Poll** | Quick decisions ("Which day for extra practice?") | Academy, Coach |
| **Match Update** | Live score updates during tournaments | Staff, System |
| **Scorecard** | Full match scorecard shared as a card | System (from match module) |
| **Micro-coaching Tip** | Quick 30-sec coaching tip from coach | Coach |
| **Event Invite** | Parent match, tournament, fun day | Academy |

### Interaction Features
- Like / React (clap, fire, trophy emojis)
- Comment
- Share to WhatsApp / Instagram (public posts only)
- Save / Bookmark
- Tag students, coaches, parents in posts
- Report / Flag inappropriate content

### AI Opportunities in Social Feed
- **Auto-highlight reel:** AI picks best moments from training videos and creates weekly highlights
- **Smart tagging:** AI identifies students in group photos/videos
- **Content suggestions:** "You haven't posted in 5 days — here's a template for a training update"
- **Sentiment analysis:** Flag negative comments before they escalate

---

## Staff Communication Layer

### Staff Chat (Private — Not visible to students/parents)

| Feature | Description |
|---------|-------------|
| **Staff Group Chat** | Private channel for all academy staff — like a team Slack |
| **Direct Messages** | 1-on-1 between coaches/staff |
| **Student Notes** | Private notes on a student (visible to staff only). E.g., "Ravi's elbow dips on cover drive — focus next session" |
| **Session Handoff** | Head coach leaves instructions for assistant when absent |
| **Drill Assignment** | Head coach assigns specific drills to assistant coaches per batch |
| **Tag & Notify** | "@CoachRavi please review this bowling action video" |
| **Session Report** | After each session, assistant coach submits brief report to head coach |

### Why This Matters
- Today: All coach communication happens on personal WhatsApp → no documentation, lost when coach leaves
- With this: All coaching notes, student observations, session plans are **permanently recorded** and tied to the academy
- **Knowledge retention:** When a coach leaves, the academy doesn't lose years of student observation data

---

## Feature B: Parent Cricket Community

### The Insight
Many cricket academy parents are former players or active weekend cricketers. Parent matches (internal and inter-academy) already happen informally. No platform serves this community.

### Parent Dual Profile

```
Parent Account
├── As Parent (default)
│   ├── View child's progress dashboard
│   ├── Attendance & fee history
│   ├── Communication with academy
│   └── Social feed (view & interact)
│
└── As Player (opt-in)
    ├── Player profile
    │   ├── Batting style (right/left, top/middle order)
    │   ├── Bowling type (fast/spin/none)
    │   ├── Preferred role (batsman/bowler/allrounder/keeper)
    │   └── Skill level: Casual / Club / Competitive
    ├── My matches
    │   ├── Upcoming matches
    │   ├── Past matches & scorecards
    │   └── Availability calendar
    ├── My stats
    │   ├── Matches played, runs, wickets, catches
    │   ├── Averages, strike rate, economy
    │   └── Season-wise breakdown
    ├── Team membership
    │   └── "Chennai Academy Parents XI"
    └── Achievements & badges
```

### Match Types

| Match Type | Description | Organized By |
|------------|-------------|-------------|
| **Internal Parent Match** | Parents of same academy play against each other | Academy |
| **Inter-Academy Parent Match** | Academy A parents vs Academy B parents | Either academy or platform |
| **Parents vs Students** | Fun match — parents team vs student team | Academy |
| **Parent Tournament** | Multi-academy parent tournament | Platform ("Soruban Sports Parent Premier League") |
| **Family Cricket Day** | Mixed teams — parents + students, fun format | Academy |

### Match Management Features
- **Team creation:** Captain (parent) picks team from available parents
- **Scheduling:** Date, time, venue — integrated with ground booking if available
- **Availability poll:** "Are you available for Sunday 8am match?" → Yes/No/Maybe
- **Live scoring:** Simple scoring app during match (one parent can score)
- **Scorecard generation:** Auto-generated match scorecard shared to feed
- **Stats update:** Individual parent stats updated automatically

### Platform-Level Tournaments

**"Soruban Sports Parent Premier League"**
- Annual/seasonal inter-academy parent tournament
- Platform organizes and manages
- Group stage → knockouts → finals
- Leaderboard, stats, highlights on platform
- **Massive engagement and PR opportunity**

### Why This Is a Strategic Differentiator

| Benefit | Explanation |
|---------|-------------|
| **Unbreakable retention** | Parents whose social cricket life is on the platform will never leave |
| **Network effect** | Inter-academy matches force academies to be on the same platform |
| **Revenue streams** | Tournament fees, premium parent features, sponsored tournaments |
| **Content engine** | Parent matches generate photos, videos, scorecards → feeds social platform |
| **Word of mouth** | Every parent match = 22+ adults talking about the platform |
| **Academy community** | Parents feel "I belong to this academy" — not just paying a fee |
| **Unique positioning** | No competitor has this — it's a moat |

---

## How Both Features Connect to Core Platform

```
┌──────────────────────────────────────────────────────┐
│                  SORUBAN SPORTS PLATFORM              │
├──────────────────────────────────────────────────────┤
│                                                      │
│   CORE: Academy Management                           │
│   ├── Student management, curriculum, progress       │
│   ├── Attendance, fees, scheduling                   │
│   └── Assessment & certification                     │
│                                                      │
│   ENGAGEMENT: Social Feed                            │
│   ├── Academy posts (public/private)                 │
│   ├── Student achievements (auto-generated)          │
│   ├── Parent match highlights                        │
│   ├── Coaching tips & micro-content                  │
│   └── Announcements & polls                          │
│                                                      │
│   COMMUNITY: Parent Cricket                          │
│   ├── Parent player profiles                         │
│   ├── Internal & inter-academy matches               │
│   ├── Stats & leaderboards                           │
│   ├── Platform tournaments                           │
│   └── Family cricket events                          │
│                                                      │
│   COMMUNICATION: Staff Layer                         │
│   ├── Staff chat & DMs                               │
│   ├── Student notes (private)                        │
│   ├── Session handoff & drill assignment             │
│   └── Session reports                                │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Decisions Made

| # | Question | Decision |
|---|----------|----------|
| 1 | Content moderation | **Academy admin** moderates their own academy's posts |
| 2 | Student posting | **No** — Students cannot post directly. Only academy/coaches post content. |
| 3 | Parent cricket — MVP or Phase 2? | **MVP** — Include from day one for maximum differentiation |
| 4 | Parent features pricing | **Free** — No premium gate, remove friction for adoption |
| 5 | Video storage costs | Open — To be addressed in tech architecture phase |

---

*Last updated: 2026-03-16*
