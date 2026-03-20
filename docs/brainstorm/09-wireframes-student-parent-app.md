# Wireframes — Soruban Sports (Student & Parent App)

**Date:** 2026-03-16
**Status:** MVP Wireframe Specification
**Platform:** Mobile (Android + iOS)

---

## Navigation Structure

### Bottom Tab Bar (5 tabs)

```
┌──────┬──────┬──────┬──────┬──────┐
│ Home │ Learn│ Feed │ Play │ More │
│  🏠  │  📚  │  📰  │  🏏  │  ≡   │
└──────┴──────┴──────┴──────┴──────┘
```

| Tab | For Student | For Parent |
|-----|-------------|------------|
| **Home** | Progress dashboard | Child's progress dashboard |
| **Learn** | Curriculum, videos, materials | Hidden (parents don't see curriculum) |
| **Feed** | Academy social feed | Academy social feed |
| **Play** | Exam results, upcoming assessments | Parent Cricket (matches, stats, profile) |
| **More** | Profile, settings, certificates | Profile, fees, settings, certificates |

---

## Screen 1: Onboarding / Auth

### 1.1 Splash Screen
```
┌─────────────────────────────┐
│                             │
│                             │
│      🏏                     │
│      SORUBAN SPORTS         │
│      Cricket Academy        │
│      Management Platform    │
│                             │
│                             │
│      ● ● ●  (loading)      │
│                             │
└─────────────────────────────┘
```

### 1.2 Welcome / Role Selection
```
┌─────────────────────────────┐
│                             │
│   Welcome to Soruban Sports │
│                             │
│   I am a...                 │
│                             │
│  ┌─────────────────────┐    │
│  │  🎓 Student          │    │
│  │  I'm learning cricket│    │
│  └─────────────────────┘    │
│                             │
│  ┌─────────────────────────┐│
│  │  👨‍👩‍👦 Parent              ││
│  │  My child is at an     ││
│  │  academy               ││
│  └─────────────────────────┘│
│                             │
│  ─── Already have an ───    │
│  ─── account? Log in  ───   │
│                             │
└─────────────────────────────┘
```

### 1.3 Sign Up
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  Create Account (Student)   │
│                             │
│  Full Name                  │
│  ┌─────────────────────┐    │
│  │ Ravi Kumar           │    │
│  └─────────────────────┘    │
│                             │
│  Mobile Number              │
│  ┌──┬──────────────────┐    │
│  │+91│ 98765 43210      │    │
│  └──┴──────────────────┘    │
│                             │
│  Date of Birth              │
│  ┌─────────────────────┐    │
│  │ 15/03/2014           │    │
│  └─────────────────────┘    │
│                             │
│  [    Get OTP    ]          │
│                             │
│  By signing up you agree to │
│  Terms & Privacy Policy     │
└─────────────────────────────┘
```

### 1.4 OTP Verification
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  Verify Your Number         │
│  OTP sent to +91 98765 432  │
│                             │
│    ┌──┐ ┌──┐ ┌──┐ ┌──┐     │
│    │ 4│ │ 7│ │ 2│ │ 8│     │
│    └──┘ └──┘ └──┘ └──┘     │
│                             │
│  Resend OTP in 0:28         │
│                             │
│  [    Verify    ]           │
│                             │
└─────────────────────────────┘
```

---

## Screen 2: Academy Search & Admission

### 2.1 Find Academy
```
┌─────────────────────────────┐
│                             │
│  Find Your Academy          │
│                             │
│  🔍 Search academy name     │
│  ┌─────────────────────┐    │
│  │ Chennai Cricket      │    │
│  └─────────────────────┘    │
│                             │
│  📍 Nearby Academies        │
│  ┌─────────────────────────┐│
│  │ 🏏 SAM Cricket Acad ││
│  │    ⭐ 4.5 · 2.3 km     ││
│  │    120 students          ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🏏 Star Cricket Academy ││
│  │    ⭐ 4.2 · 4.1 km     ││
│  │    85 students           ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🏏 CBE Sports Academy  ││
│  │    ⭐ 4.7 · 5.8 km     ││
│  │    200 students          ││
│  └─────────────────────────┘│
│                             │
│  Or enter academy code:     │
│  ┌─────────────────────┐    │
│  │ ACAD-XXXX            │    │
│  └─────────────────────┘    │
└─────────────────────────────┘
```

### 2.2 Academy Profile (Public View)
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  ┌─────────────────────────┐│
│  │  [Academy Cover Photo]  ││
│  │                         ││
│  │   🏏 Chennai Cricket    ││
│  │      Academy            ││
│  └─────────────────────────┘│
│                             │
│  ⭐ 4.5  👥 120 students    │
│  📍 Anna Nagar, Chennai     │
│  🏟️ 3 nets, 1 ground       │
│                             │
│  About                      │
│  "Established in 2015,      │
│  coaching excellence..."    │
│                             │
│  Batches Available          │
│  • Morning U-12 (6:00-8:00)│
│  • Evening U-16 (4:00-6:00)│
│  • Weekend All Ages         │
│                             │
│  Fee: ₹3,000/month          │
│                             │
│  [  Apply for Admission  ]  │
│                             │
│  ── Recent Posts ──         │
│  [Social feed posts...]     │
└─────────────────────────────┘
```

### 2.3 Admission Application
```
┌─────────────────────────────┐
│  ← Back                     │
│                             │
│  Apply to Chennai Cricket   │
│  Academy                    │
│                             │
│  Student Name               │
│  ┌─────────────────────┐    │
│  │ Ravi Kumar (pre-fill)│    │
│  └─────────────────────┘    │
│                             │
│  Age                        │
│  ┌─────────────────────┐    │
│  │ 12 (auto-calculated) │    │
│  └─────────────────────┘    │
│                             │
│  Previous Experience        │
│  ┌─────────────────────┐    │
│  │ ○ No experience      │    │
│  │ ● 1-2 years          │    │
│  │ ○ 3+ years           │    │
│  │ ○ Played district+   │    │
│  └─────────────────────┘    │
│                             │
│  Preferred Batch            │
│  ┌─────────────────────┐    │
│  │ ▼ Evening U-16       │    │
│  └─────────────────────┘    │
│                             │
│  Parent/Guardian Name       │
│  ┌─────────────────────┐    │
│  │ Mr. Kumar             │    │
│  └─────────────────────┘    │
│                             │
│  Parent Mobile              │
│  ┌─────────────────────┐    │
│  │ +91 98765 43210      │    │
│  └─────────────────────┘    │
│                             │
│  Any medical conditions?    │
│  ┌─────────────────────┐    │
│  │ None                  │    │
│  └─────────────────────┘    │
│                             │
│  [  Submit Application  ]   │
│                             │
└─────────────────────────────┘
```

### 2.4 Application Status
```
┌─────────────────────────────┐
│                             │
│  Application Submitted! ✅  │
│                             │
│  SAM Cricket Academy    │
│  will review your           │
│  application.               │
│                             │
│  Status: ⏳ Under Review    │
│                             │
│  You'll be notified when    │
│  the academy responds.      │
│                             │
│  Expected: 2-3 days         │
│                             │
│  [  Browse Other Academies ]│
│  [  Go to Home             ]│
│                             │
└─────────────────────────────┘
```

---

## Screen 3: Home Tab (Student Dashboard)

### 3.1 Student Home — Active
```
┌─────────────────────────────┐
│  🔔 2                       │
│                             │
│  Hi Ravi! 👋                │
│  SAM Cricket Academy    │
│                             │
│  ┌─────────────────────────┐│
│  │  YOUR PROGRESS           ││
│  │                         ││
│  │  Stage 3 — Developing   ││
│  │  Role: Batsman           ││
│  │                         ││
│  │  ████████░░░░ 68%       ││
│  │  12/18 skills completed  ││
│  │                         ││
│  │  🔥 5 day streak!       ││
│  └─────────────────────────┘│
│                             │
│  📅 Today's Schedule        │
│  ┌─────────────────────────┐│
│  │ 4:00 PM — Net Session   ││
│  │ Coach: Ravi Sir          ││
│  │ Focus: Cut Shot Practice ││
│  └─────────────────────────┘│
│                             │
│  📋 Next Up                 │
│  ┌─────────────────────────┐│
│  │ 🔄 Cut Shot              ││
│  │    Score: 60% (In Prog) ││
│  │    [Watch Video] [Drill] ││
│  └─────────────────────────┘│
│                             │
│  🏆 Recent Achievements     │
│  ┌─────────────────────────┐│
│  │ ✅ Cover Drive — 85%    ││
│  │ ✅ Pull Shot — 78%      ││
│  │ ✅ Catching — 90%       ││
│  └─────────────────────────┘│
│                             │
│  📊 Attendance This Month   │
│  ┌─────────────────────────┐│
│  │ 18/22 sessions (82%)    ││
│  │ ██████████████░░░       ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

### 3.2 Parent Home — Child's Dashboard
```
┌─────────────────────────────┐
│  🔔 3                       │
│                             │
│  Ravi's Progress            │
│  SAM Cricket Academy    │
│                             │
│  ┌─────────────────────────┐│
│  │  OVERALL                 ││
│  │  Stage 3 — Developing   ││
│  │  Role: Batsman           ││
│  │  ████████░░░░ 68%       ││
│  └─────────────────────────┘│
│                             │
│  📊 This Month Summary      │
│  ┌────────┬────────┬───────┐│
│  │Sessions│Skills  │ Score ││
│  │Attended│Cleared │ Avg   ││
│  │ 18/22  │  3     │  74%  ││
│  │  82%   │this mo │       ││
│  └────────┴────────┴───────┘│
│                             │
│  📈 Progress Over Time      │
│  ┌─────────────────────────┐│
│  │  [Line chart showing    ││
│  │   monthly avg scores    ││
│  │   trending upward]      ││
│  └─────────────────────────┘│
│                             │
│  📋 Skills Status           │
│  ┌─────────────────────────┐│
│  │ ✅ Cover Drive .... 85% ││
│  │ ✅ Pull Shot ..... 78%  ││
│  │ 🔄 Cut Shot ...... 60%  ││
│  │ ⬜ On Drive ....... --   ││
│  │ ⬜ Running B/W .... --   ││
│  └─────────────────────────┘│
│                             │
│  💰 Fee Status              │
│  ┌─────────────────────────┐│
│  │ March 2026: ✅ Paid     ││
│  │ April 2026: ⏳ Due 1st  ││
│  │ [Pay Now — ₹3,000]      ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

---

## Screen 4: Learn Tab (Student Only)

### 4.1 Curriculum Overview
```
┌─────────────────────────────┐
│  ← My Curriculum             │
│                             │
│  Stage 3 — Developing       │
│  ████████░░░░ 68%           │
│                             │
│  ── BATTING ──              │
│  ┌─────────────────────────┐│
│  │ ✅ Cover Drive       85%││
│  │ ✅ Pull Shot         78%││
│  │ 🔄 Cut Shot          60%││
│  │ 🔒 On Drive          --  ││
│  │ 🔒 Running B/W Wkts --  ││
│  └─────────────────────────┘│
│                             │
│  ── BOWLING (Basics) ──     │
│  ┌─────────────────────────┐│
│  │ ✅ Grip & Action     80%││
│  │ 🔄 Line & Length     55%││
│  └─────────────────────────┘│
│                             │
│  ── FIELDING ──             │
│  ┌─────────────────────────┐│
│  │ ✅ Catching          90%││
│  │ ✅ Ground Fielding   75%││
│  └─────────────────────────┘│
│                             │
│  ── FITNESS ──              │
│  ┌─────────────────────────┐│
│  │ 🔄 Endurance         65%││
│  │ ✅ Agility           82%││
│  └─────────────────────────┘│
│                             │
│  🔒 = Complete prerequisite │
│       skill first           │
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

### 4.2 Skill Detail — Learning Material
```
┌─────────────────────────────┐
│  ← Cut Shot                  │
│                             │
│  Stage 3 · Batting          │
│  Status: 🔄 In Progress     │
│  Score: 60%                 │
│                             │
│  ── LEARN ──                │
│                             │
│  📹 Technique Video         │
│  ┌─────────────────────────┐│
│  │                         ││
│  │  [YouTube Embed]        ││
│  │  ▶️ "Square & Late Cut  ││
│  │     Technique"          ││
│  │  Source: Cricket Hub     ││
│  │                         ││
│  └─────────────────────────┘│
│                             │
│  📹 Academy Coach Demo      │
│  ┌─────────────────────────┐│
│  │  [Coach uploaded video] ││
│  │  ▶️ Coach Ravi's Cut    ││
│  │     Shot Demo           ││
│  └─────────────────────────┘│
│                             │
│  📹 More Resources (3)      │
│  ┌─────────────────────────┐│
│  │ ▶ "Cut Shot for Juniors"││
│  │ ▶ "Back Foot Cuts"      ││
│  │ ▶ "Cut vs Square Drive" ││
│  └─────────────────────────┘│
│                             │
│  ── PRACTICE ──             │
│                             │
│  🏏 Drill: Cut Shot Target  │
│  ┌─────────────────────────┐│
│  │  [Drill video embed]   ││
│  │                         ││
│  │  Instructions:           ││
│  │  1. Short ball from      ││
│  │     bowling machine      ││
│  │  2. Play cut past point  ││
│  │  3. Hit target zone      ││
│  │                         ││
│  │  Target: 8/15 balls      ││
│  └─────────────────────────┘│
│                             │
│  ── ASSESSMENT ──           │
│  ┌─────────────────────────┐│
│  │ 📝 Last assessed: 12 Mar││
│  │    Score: 60% (6/10)    ││
│  │    Coach: "Good timing,  ││
│  │    work on foot          ││
│  │    placement"            ││
│  │                         ││
│  │    Next: Coach will      ││
│  │    reassess in session   ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

---

## Screen 5: Feed Tab

### 5.1 Academy Social Feed
```
┌─────────────────────────────┐
│  Academy Feed    [Academy ▼]│
│                             │
│  ┌─────────────────────────┐│
│  │ 🏏 SAM Cricket Acad ││
│  │    2 hours ago           ││
│  │                         ││
│  │  "Great session today!  ││
│  │  Our U-14 boys worked   ││
│  │  on cut shots. Special  ││
│  │  mention to Ravi for    ││
│  │  excellent footwork!"   ││
│  │                         ││
│  │  [📸 Photo of net       ││
│  │   session with kids]    ││
│  │                         ││
│  │  ❤️ 24  💬 5  📤 Share  ││
│  └─────────────────────────┘│
│                             │
│  ┌─────────────────────────┐│
│  │ 🏆 Achievement          ││
│  │    Yesterday             ││
│  │                         ││
│  │  🎉 Arun completed      ││
│  │  Stage 2 — Beginner!   ││
│  │  Promoted to Stage 3.   ││
│  │                         ││
│  │  ❤️ 45  💬 12  📤 Share ││
│  └─────────────────────────┘│
│                             │
│  ┌─────────────────────────┐│
│  │ 📢 Announcement          ││
│  │    3 days ago            ││
│  │                         ││
│  │  "No practice on Sunday ││
│  │  due to ground          ││
│  │  maintenance. Resume    ││
│  │  Monday 6 AM."          ││
│  │                         ││
│  │  ❤️ 8  💬 2             ││
│  └─────────────────────────┘│
│                             │
│  ── DISCOVER (Public) ──    │
│  ┌─────────────────────────┐│
│  │ 🏏 Star Cricket Academy ││
│  │  "Watch our student     ││
│  │  Karthik's bowling      ││
│  │  in district trials!"   ││
│  │  [Video thumbnail]      ││
│  │  ❤️ 120  💬 28          ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

---

## Screen 6: Play Tab

### 6.1 Student — Exams & Results
```
┌─────────────────────────────┐
│  My Assessments              │
│                             │
│  ── UPCOMING ──             │
│  ┌─────────────────────────┐│
│  │ 📝 Stage 3 Exam         ││
│  │    Scheduled: 25 Mar    ││
│  │    Skills: All Stage 3  ││
│  │    Status: Available     ││
│  │    after On Drive ✅     ││
│  └─────────────────────────┘│
│                             │
│  ── RECENT RESULTS ──       │
│  ┌─────────────────────────┐│
│  │ 🏏 Cut Shot Assessment  ││
│  │    12 Mar · Score: 60%  ││
│  │    Coach: Ravi Sir       ││
│  │    Drill: 6/10           ││
│  │    Coach Note: 4/10      ││
│  │    "Work on foot         ││
│  │    placement"            ││
│  │    [View Detail →]       ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🏏 Pull Shot Assessment ││
│  │    5 Mar · Score: 78%   ││
│  │    ✅ PASSED             ││
│  │    [View Detail →]       ││
│  └─────────────────────────┘│
│                             │
│  ── CERTIFICATES ──         │
│  ┌─────────────────────────┐│
│  │ 🏆 Stage 2 Completion   ││
│  │    Earned: 15 Feb 2026  ││
│  │    [View] [Download]     ││
│  │    [Share to WhatsApp]   ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

### 6.2 Parent — Parent Cricket Hub
```
┌─────────────────────────────┐
│  Parent Cricket 🏏           │
│                             │
│  ── MY PROFILE ──           │
│  ┌─────────────────────────┐│
│  │ 👤 Mr. Kumar             ││
│  │    Batsman · Right Hand  ││
│  │    Skill: Club Level     ││
│  │                         ││
│  │    Matches: 8            ││
│  │    Runs: 186 | Avg: 23.2││
│  │    [Edit Profile]        ││
│  └─────────────────────────┘│
│                             │
│  ── UPCOMING MATCHES ──     │
│  ┌─────────────────────────┐│
│  │ 🏏 Parents XI vs Staff  ││
│  │    Sun, 22 Mar · 8:00AM ││
│  │    Venue: Academy Ground ││
│  │    Format: T10           ││
│  │                         ││
│  │    [✅ I'm Available]    ││
│  │    [❌ Can't Make It]    ││
│  │                         ││
│  │    12/15 available       ││
│  └─────────────────────────┘│
│                             │
│  ── RECENT MATCHES ──       │
│  ┌─────────────────────────┐│
│  │ CCA Parents vs SCA      ││
│  │ Parents                  ││
│  │ 15 Mar · CCA won by 4wk ││
│  │ Your: 34(22) & 1 catch  ││
│  │ [View Scorecard →]       ││
│  └─────────────────────────┘│
│                             │
│  ── MY STATS ──             │
│  ┌─────────────────────────┐│
│  │ Batting  │ Bowling       ││
│  │ Mat: 8   │ Overs: 12    ││
│  │ Runs: 186│ Wkts: 3      ││
│  │ Avg: 23.2│ Eco: 7.8     ││
│  │ HS: 45*  │ BB: 2/14     ││
│  │ SR: 128.3│              ││
│  └─────────────────────────┘│
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

---

## Screen 7: More Tab

### 7.1 Student — More Menu
```
┌─────────────────────────────┐
│  More                        │
│                             │
│  👤 Ravi Kumar              │
│     Stage 3 · Batsman       │
│     SAM Cricket Academy  │
│                             │
│  ─────────────────────      │
│  📋 My Profile               │
│  🏆 My Certificates          │
│  📊 Attendance History       │
│  📝 Exam History             │
│  🔔 Notifications            │
│  ⚙️ Settings                 │
│  ❓ Help & Support           │
│  🚪 Logout                   │
│  ─────────────────────      │
│                             │
│  App Version 1.0.0           │
│  Soruban Sports              │
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

### 7.2 Parent — More Menu
```
┌─────────────────────────────┐
│  More                        │
│                             │
│  👤 Mr. Kumar (Parent)      │
│     Child: Ravi Kumar        │
│     SAM Cricket Academy  │
│                             │
│  ─────────────────────      │
│  📋 My Profile               │
│  👦 Child's Profile          │
│  💰 Fee History & Payments   │
│  📊 Attendance History       │
│  🏆 Child's Certificates     │
│  🏏 Parent Cricket Profile   │
│  🔔 Notifications            │
│  ⚙️ Settings                 │
│  ❓ Help & Support           │
│  🚪 Logout                   │
│  ─────────────────────      │
│                             │
│ Home  Learn  Feed  Play  More│
└─────────────────────────────┘
```

---

## Screen 8: Notifications

### 8.1 Notification Center
```
┌─────────────────────────────┐
│  ← Notifications             │
│                             │
│  ── TODAY ──                │
│  ┌─────────────────────────┐│
│  │ 🏏 Assessment Scored    ││
│  │ Your Cut Shot was scored ││
│  │ 60% by Coach Ravi       ││
│  │ 2 hours ago              ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ ✅ Attendance Marked    ││
│  │ Present at Evening      ││
│  │ Session                  ││
│  │ 5 hours ago              ││
│  └─────────────────────────┘│
│                             │
│  ── YESTERDAY ──            │
│  ┌─────────────────────────┐│
│  │ 📢 Academy Post         ││
│  │ Chennai Cricket posted  ││
│  │ a new update             ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🏏 Parent Match Invite  ││
│  │ Parents XI vs Staff —   ││
│  │ 22 Mar. Are you in?     ││
│  └─────────────────────────┘│
│                             │
│  ── EARLIER ──              │
│  ┌─────────────────────────┐│
│  │ 🎉 Stage Promotion!     ││
│  │ Congratulations! Ravi   ││
│  │ promoted to Stage 3     ││
│  │ 15 Feb                   ││
│  └─────────────────────────┘│
│                             │
└─────────────────────────────┘
```

---

## Screen 9: Self-Attendance (If Configured)

### 9.1 Mark Attendance
```
┌─────────────────────────────┐
│  ← Mark Attendance           │
│                             │
│  📅 Today, 16 March 2026    │
│  ⏰ 4:15 PM                 │
│                             │
│  Session: Evening U-14      │
│  Coach: Ravi Sir             │
│                             │
│  ┌─────────────────────────┐│
│  │                         ││
│  │    📍 Location Check    ││
│  │                         ││
│  │    You are at:          ││
│  │    Chennai Cricket       ││
│  │    Academy Ground        ││
│  │    ✅ Within range       ││
│  │                         ││
│  └─────────────────────────┘│
│                             │
│  [  ✅ Mark Present  ]      │
│                             │
│  ⚠️ Self-attendance can     │
│  only be marked within      │
│  academy premises            │
│                             │
│  📶 Offline? Attendance     │
│  will sync when connected.   │
│                             │
└─────────────────────────────┘
```

---

## Total Screen Count — Student & Parent App

| Section | Screens |
|---------|---------|
| Onboarding / Auth | 5 (splash, welcome, signup, OTP, role) |
| Academy Search & Admission | 4 (search, profile, apply, status) |
| Home Dashboard | 2 (student, parent variants) |
| Learn / Curriculum | 3 (overview, skill detail, video player) |
| Social Feed | 3 (feed, post detail, comments) |
| Play (Student) | 3 (assessments, exam detail, certificates) |
| Play (Parent Cricket) | 5 (hub, profile, match detail, scorecard, stats) |
| More | 4 (menu, profile, settings, attendance history) |
| Notifications | 1 |
| Self-Attendance | 1 |
| **Total** | **~31 screens** |

---

*Last updated: 2026-03-16*
