# Wireframes — Soruban Sports (Academy Staff App)

**Date:** 2026-03-16
**Status:** MVP Wireframe Specification
**Platform:** Mobile (Android + iOS)
**Users:** Academy Owner, Academy Admin, Head Coach, Coach, Support Staff

---

## Navigation Structure

### Bottom Tab Bar (5 tabs)

```
┌──────┬──────┬──────┬──────┬──────┐
│ Home │Studs │ Attend│ Feed │ More │
│  🏠  │  👥  │  ✅  │  📰  │  ≡   │
└──────┴──────┴──────┴──────┴──────┘
```

| Tab | Owner/Admin | Head Coach | Coach | Staff |
|-----|------------|------------|-------|-------|
| **Home** | Dashboard (revenue, students, overview) | Dashboard (batches, promotions) | My Batch overview | Today's tasks |
| **Students** | All students | All students | My batch students | — (hidden) |
| **Attendance** | Overview | Mark + reports | Mark + batch report | Mark attendance |
| **Feed** | Post + moderate | Post | Post | View + post |
| **More** | Settings, fees, curriculum, staff, chat | Curriculum, exams, chat | Exams, chat | Chat, profile |

---

## Screen 1: Onboarding

### 1.1 Academy Registration
```
┌─────────────────────────────┐
│                             │
│  Register Your Academy      │
│                             │
│  Academy Name               │
│  ┌─────────────────────┐    │
│  │ SAM Cricket Acad │    │
│  └─────────────────────┘    │
│                             │
│  Your Name (Owner)          │
│  ┌─────────────────────┐    │
│  │ Mr. Suresh            │    │
│  └─────────────────────┘    │
│                             │
│  Mobile Number              │
│  ┌──┬──────────────────┐    │
│  │+91│ 98765 43210      │    │
│  └──┴──────────────────┘    │
│                             │
│  City                       │
│  ┌─────────────────────┐    │
│  │ Coimbatore            │    │
│  └─────────────────────┘    │
│                             │
│  Academy Address            │
│  ┌─────────────────────┐    │
│  │ 12, Sports Complex,  │    │
│  │ RS Puram, CBE         │    │
│  └─────────────────────┘    │
│                             │
│  Are you also the Head      │
│  Coach?                     │
│  [Yes] [No]                 │
│                             │
│  [  Register Academy  ]     │
│                             │
│  14-day free trial starts   │
│  immediately                │
│                             │
└─────────────────────────────┘
```

### 1.2 Quick Setup Wizard (After Registration)
```
┌─────────────────────────────┐
│                             │
│  Let's set up your academy  │
│  Step 1 of 4                │
│  ● ○ ○ ○                    │
│                             │
│  Academy Logo               │
│  ┌──────────┐               │
│  │  📷      │ Upload logo   │
│  │  Upload  │ (optional)    │
│  └──────────┘               │
│                             │
│  Academy Description        │
│  ┌─────────────────────┐    │
│  │ Brief description    │    │
│  │ about your academy   │    │
│  └─────────────────────┘    │
│                             │
│  Facilities Available       │
│  ☑️ Nets  ☑️ Ground          │
│  ☐ Bowling Machine          │
│  ☐ Gym  ☐ Video Analysis    │
│                             │
│  [Next →]                   │
│                             │
└─────────────────────────────┘
```

```
┌─────────────────────────────┐
│  Step 2 of 4 — Batches      │
│  ○ ● ○ ○                    │
│                             │
│  Create your first batch    │
│                             │
│  Batch Name                 │
│  ┌─────────────────────┐    │
│  │ Evening U-14         │    │
│  └─────────────────────┘    │
│                             │
│  Timing                     │
│  ┌────────┐ to ┌────────┐   │
│  │ 4:00PM │    │ 6:00PM │   │
│  └────────┘    └────────┘   │
│                             │
│  Days                       │
│  [Mon][Tue][Wed][Thu][Fri]  │
│  [Sat][Sun]                 │
│                             │
│  Max Students               │
│  ┌─────────────────────┐    │
│  │ 25                    │    │
│  └─────────────────────┘    │
│                             │
│  [+ Add Another Batch]      │
│                             │
│  [Next →]                   │
│                             │
└─────────────────────────────┘
```

```
┌─────────────────────────────┐
│  Step 3 of 4 — Attendance   │
│  ○ ○ ● ○                    │
│                             │
│  How do you mark attendance?│
│                             │
│  ○ Staff marks manually     │
│     (Coach/staff taps       │
│      present/absent)        │
│                             │
│  ○ Student self-attendance  │
│     (Student marks on their │
│      phone with location    │
│      verification)          │
│                             │
│  ○ Both options available   │
│     (Staff OR student can   │
│      mark)                  │
│                             │
│  [Next →]                   │
│                             │
└─────────────────────────────┘
```

```
┌─────────────────────────────┐
│  Step 4 of 4 — Fee          │
│  ○ ○ ○ ●                    │
│                             │
│  Monthly Fee per Student    │
│  ┌─────────────────────┐    │
│  │ ₹ 3,000              │    │
│  └─────────────────────┘    │
│                             │
│  Fee Due Date               │
│  ┌─────────────────────┐    │
│  │ 1st of every month   │    │
│  └─────────────────────┘    │
│                             │
│  Payment Methods Accepted   │
│  ☑️ Cash  ☑️ UPI             │
│  ☐ Bank Transfer             │
│  ☐ Online (Razorpay)        │
│                             │
│  [  🎉 Complete Setup  ]    │
│                             │
│  You can change all of      │
│  this later in Settings     │
│                             │
└─────────────────────────────┘
```

---

## Screen 2: Home Tab

### 2.1 Owner/Admin Dashboard
```
┌─────────────────────────────┐
│  SAM Cricket Academy 🔔3│
│  📶 Online                   │
│                             │
│  ── TODAY ──                │
│  ┌────────┬────────┬───────┐│
│  │Students│Present │Revenue││
│  │Total   │Today   │This Mo││
│  │  85    │ 62     │₹2.4L  ││
│  │        │ (73%)  │       ││
│  └────────┴────────┴───────┘│
│                             │
│  ── QUICK ACTIONS ──        │
│  ┌──────────┬──────────┐    │
│  │📋 Mark   │👤 Add    │    │
│  │Attendance│Student   │    │
│  ├──────────┼──────────┤    │
│  │📝 Post   │💰 Record │    │
│  │to Feed   │Payment   │    │
│  └──────────┴──────────┘    │
│                             │
│  ── NEEDS ATTENTION ──      │
│  ┌─────────────────────────┐│
│  │ 🔴 3 admission requests ││
│  │    pending review        ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🟡 12 students fee due  ││
│  │    for March             ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🟢 2 students ready for ││
│  │    stage promotion       ││
│  └─────────────────────────┘│
│                             │
│  ── RECENT ACTIVITY ──      │
│  ┌─────────────────────────┐│
│  │ Coach Ravi scored Cut   ││
│  │ Shot for 3 students     ││
│  │ 2 hours ago              ││
│  ├─────────────────────────┤│
│  │ ₹3,000 fee received     ││
│  │ from Arun's parent      ││
│  │ 4 hours ago              ││
│  └─────────────────────────┘│
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 2.2 Coach Dashboard
```
┌─────────────────────────────┐
│  Hi Coach Ravi! 🔔1          │
│  📶 Online                   │
│                             │
│  ── MY BATCHES ──           │
│  ┌─────────────────────────┐│
│  │ 🟢 Evening U-14         ││
│  │    22 students           ││
│  │    4:00-6:00 PM          ││
│  │    [Mark Attendance]     ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 🟢 Morning U-12         ││
│  │    18 students           ││
│  │    6:00-8:00 AM          ││
│  └─────────────────────────┘│
│                             │
│  ── PENDING TASKS ──        │
│  ┌─────────────────────────┐│
│  │ 📝 Score assessment for  ││
│  │    Ravi (Cut Shot)       ││
│  │    [Score Now]           ││
│  ├─────────────────────────┤│
│  │ ⬆️ Promote Arun to      ││
│  │    Stage 3? (Eligible)  ││
│  │    [Review] [Approve]    ││
│  └─────────────────────────┘│
│                             │
│  ── TODAY'S NOTES ──        │
│  ┌─────────────────────────┐│
│  │ [+ Add Session Note]    ││
│  └─────────────────────────┘│
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

---

## Screen 3: Students Tab

### 3.1 Student List
```
┌─────────────────────────────┐
│  Students (85)      🔍 + Add│
│                             │
│  Filter: [All▼] [Stage▼]   │
│          [Batch▼] [Role▼]  │
│                             │
│  ┌─────────────────────────┐│
│  │ 👤 Ravi Kumar           ││
│  │    Stage 3 · Batsman    ││
│  │    Evening U-14 · 68%   ││
│  │    Att: 82% · Fee: ✅   ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 👤 Arun Prakash         ││
│  │    Stage 2 · Allrounder ││
│  │    Evening U-14 · 92%   ││
│  │    Att: 95% · Fee: ✅   ││
│  │    ⬆️ Ready for promotion││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 👤 Karthik M            ││
│  │    Stage 3 · Bowler     ││
│  │    Morning U-12 · 55%   ││
│  │    Att: 60% · Fee: 🔴   ││
│  └─────────────────────────┘│
│  ┌─────────────────────────┐│
│  │ 👤 Priya S              ││
│  │    Stage 1 · Batsman    ││
│  │    Weekend · 30%        ││
│  │    Att: 70% · Fee: ✅   ││
│  └─────────────────────────┘│
│                             │
│  ... (scrollable)           │
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 3.2 Student Detail (Coach View)
```
┌─────────────────────────────┐
│  ← Ravi Kumar                │
│                             │
│  ┌─────────────────────────┐│
│  │ 👤 Ravi Kumar           ││
│  │ Age: 12 · Batsman       ││
│  │ Stage 3 — Developing    ││
│  │ Batch: Evening U-14     ││
│  │ Joined: 15 Jan 2025     ││
│  │ Parent: Mr. Kumar       ││
│  │ 📞 +91 98765 43210      ││
│  └─────────────────────────┘│
│                             │
│  [Progress] [Attendance]    │
│  [Assessments] [Notes]      │
│                             │
│  ── PROGRESS (Stage 3) ──   │
│  ┌─────────────────────────┐│
│  │ ████████░░░░ 68%        ││
│  │                         ││
│  │ ✅ Cover Drive ..... 85%││
│  │ ✅ Pull Shot ...... 78% ││
│  │ 🔄 Cut Shot ....... 60% ││
│  │ ⬜ On Drive ........ --  ││
│  │ ⬜ Running B/W ..... --  ││
│  └─────────────────────────┘│
│                             │
│  ── QUICK ACTIONS ──        │
│  [Score Skill] [Add Note]   │
│  [Change Stage] [Change Batch]│
│                             │
│  ── PRIVATE NOTES ──        │
│  ┌─────────────────────────┐│
│  │ 12 Mar: "Elbow dips on  ││
│  │ cut shot. Focus on high ││
│  │ elbow next session."    ││
│  │ — Coach Ravi             ││
│  ├─────────────────────────┤│
│  │ 5 Mar: "Excellent pull  ││
│  │ shot progress. Ready    ││
│  │ for assessment."        ││
│  │ — Coach Ravi             ││
│  └─────────────────────────┘│
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 3.3 Score a Skill
```
┌─────────────────────────────┐
│  ← Score: Cut Shot           │
│  Student: Ravi Kumar         │
│                             │
│  ── DRILL SCORE ──          │
│  (60% weight)               │
│                             │
│  Balls played: 15           │
│  Successful cuts:           │
│  ┌─────────────────────┐    │
│  │  ← 6 →               │    │
│  │  [−]  ██████░░░  [+] │    │
│  └─────────────────────┘    │
│  Drill score: 6/15 = 40%   │
│                             │
│  ── COACH ASSESSMENT ──     │
│  (40% weight)               │
│                             │
│  Technique (1-10):          │
│  ┌─────────────────────┐    │
│  │  ← 7 →               │    │
│  └─────────────────────┘    │
│                             │
│  Coach Note (optional):     │
│  ┌─────────────────────┐    │
│  │ Good timing but foot │    │
│  │ placement needs work. │    │
│  │ Bat face opening too  │    │
│  │ early.                │    │
│  └─────────────────────┘    │
│                             │
│  ── CALCULATED SCORE ──     │
│  Drill: 40% × 0.6 = 24     │
│  Coach: 70% × 0.4 = 28     │
│  Total: 52%                 │
│                             │
│  [  💾 Save Score  ]        │
│                             │
│  ⚠️ Student and parent will │
│  be notified of this score  │
│                             │
└─────────────────────────────┘
```

### 3.4 Stage Promotion
```
┌─────────────────────────────┐
│  ← Promote Student           │
│                             │
│  👤 Arun Prakash            │
│  Current: Stage 2 (Beginner)│
│  Promote to: Stage 3        │
│  (Developing)               │
│                             │
│  ── READINESS CHECK ──      │
│  ┌─────────────────────────┐│
│  │ ✅ All skills passed    ││
│  │ ✅ Stage 2 exam: 88%   ││
│  │ ✅ Attendance: 95%      ││
│  │ ✅ Min sessions: 45/40  ││
│  └─────────────────────────┘│
│                             │
│  Overall Stage 2 Score: 92% │
│                             │
│  Coach Remarks (required):  │
│  ┌─────────────────────────┐│
│  │ Arun has shown great    ││
│  │ progress. Fundamentals  ││
│  │ are solid. Ready for    ││
│  │ shot development stage. ││
│  └─────────────────────────┘│
│                             │
│  [  ✅ Approve Promotion  ] │
│  [  ⏸️ Hold — Not Ready   ] │
│                             │
│  On approval:               │
│  • Certificate generated    │
│  • Student moved to Stage 3 │
│  • Parent notified           │
│  • Achievement post on feed  │
│                             │
└─────────────────────────────┘
```

---

## Screen 4: Attendance Tab

### 4.1 Mark Attendance (Coach/Staff)
```
┌─────────────────────────────┐
│  Mark Attendance             │
│                             │
│  📅 16 Mar 2026 · 4:15 PM  │
│  Batch: Evening U-14        │
│  📶 Online ✅                │
│                             │
│  Quick: [All Present]       │
│         [All Absent]        │
│                             │
│  ┌─────────────────────────┐│
│  │ 👤 Ravi Kumar     [✅]  ││
│  │ 👤 Arun Prakash   [✅]  ││
│  │ 👤 Karthik M      [❌]  ││
│  │ 👤 Priya S        [✅]  ││
│  │ 👤 Deepak R       [✅]  ││
│  │ 👤 Surya V        [⏰]  ││
│  │ 👤 Mohan K        [✅]  ││
│  │ 👤 Anand S        [❌]  ││
│  │    ... (22 students)     ││
│  └─────────────────────────┘│
│                             │
│  ✅ Present: 18             │
│  ❌ Absent: 3               │
│  ⏰ Late: 1                 │
│                             │
│  [  Submit Attendance  ]    │
│                             │
│  📴 Works offline — will    │
│  sync when connected        │
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 4.2 Attendance Report (Owner View)
```
┌─────────────────────────────┐
│  Attendance Report           │
│                             │
│  📅 March 2026              │
│  [◀ Feb]  [Mar]  [Apr ▶]   │
│                             │
│  ── OVERVIEW ──             │
│  ┌─────────────────────────┐│
│  │ Avg Attendance: 78%     ││
│  │ Total Sessions: 22      ││
│  │ Best Batch: Morning U12 ││
│  │            (85%)        ││
│  └─────────────────────────┘│
│                             │
│  ── BY BATCH ──             │
│  ┌─────────────────────────┐│
│  │ Morning U-12    85%     ││
│  │ ██████████████████░░    ││
│  │ Evening U-14    78%     ││
│  │ ████████████████░░░░    ││
│  │ Weekend All     65%     ││
│  │ █████████████░░░░░░░    ││
│  └─────────────────────────┘│
│                             │
│  ── LOW ATTENDANCE ──       │
│  ┌─────────────────────────┐│
│  │ ⚠️ Karthik M — 60%     ││
│  │ ⚠️ Deepak R — 55%      ││
│  │ ⚠️ Surya V — 50%       ││
│  │ (Below 65% threshold)   ││
│  └─────────────────────────┘│
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

---

## Screen 5: Feed Tab (Staff)

### 5.1 Create Post
```
┌─────────────────────────────┐
│  ← New Post                  │
│                             │
│  Visibility:                │
│  [🌍 Public] [🏫 Academy]   │
│  [👥 Batch] [🔒 Staff Only] │
│                             │
│  ┌─────────────────────────┐│
│  │ What's happening at the ││
│  │ academy today?          ││
│  │                         ││
│  │                         ││
│  │                         ││
│  └─────────────────────────┘│
│                             │
│  ┌────┬────┬────┬────┐      │
│  │ 📷 │ 🎥 │ 📊 │ 📢 │      │
│  │Photo│Video│Poll│Ann.│     │
│  └────┴────┴────┴────┘      │
│                             │
│  Tag students: [+ Tag]      │
│                             │
│  [  📤 Post  ]              │
│                             │
└─────────────────────────────┘
```

---

## Screen 6: More Tab (Owner)

### 6.1 Owner More Menu
```
┌─────────────────────────────┐
│  More                        │
│                             │
│  🏏 SAM Cricket Academy │
│     Owner: Mr. Suresh        │
│     Plan: Trial (12 days)   │
│                             │
│  ── ACADEMY MANAGEMENT ──   │
│  📚 Curriculum Builder       │
│  👥 Staff Management         │
│  🏷️ Batches & Schedule      │
│  📋 Admission Requests (3)   │
│                             │
│  ── FINANCE ──              │
│  💰 Fee Management           │
│  📊 Revenue Dashboard        │
│  📜 Payment History          │
│                             │
│  ── COMMUNICATION ──        │
│  💬 Staff Chat               │
│  🔔 Send Notification        │
│                             │
│  ── SETTINGS ──             │
│  ⚙️ Academy Settings        │
│  📱 Attendance Config        │
│  🎨 Academy Profile          │
│  💳 Subscription & Billing   │
│                             │
│  ── SUPPORT ──              │
│  ❓ Help & Support           │
│  📞 Contact Soruban Sports   │
│  🚪 Logout                   │
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 6.2 Curriculum Builder
```
┌─────────────────────────────┐
│  ← Curriculum Builder        │
│                             │
│  Your academy's curriculum  │
│  Select stages and skills   │
│  for your students          │
│                             │
│  ── STAGE 1: Foundation ──  │
│  ┌─────────────────────────┐│
│  │ ☑️ Active                ││
│  │                         ││
│  │ BATTING                  ││
│  │ ☑️ Correct Grip          ││
│  │   📹 Platform video ✅  ││
│  │   📹 + Add your video   ││
│  │ ☑️ Basic Stance          ││
│  │   📹 Platform video ✅  ││
│  │ ☑️ Forward Defence       ││
│  │   📹 Platform video ✅  ││
│  │   📹 Coach Demo (yours) ││
│  │ ☑️ Straight Bat Play    ││
│  │   📹 Platform video ✅  ││
│  │                         ││
│  │ [+ Add Custom Skill]    ││
│  └─────────────────────────┘│
│                             │
│  ── STAGE 2: Beginner ──    │
│  ┌─────────────────────────┐│
│  │ ☑️ Active                ││
│  │ [Expand to configure →] ││
│  └─────────────────────────┘│
│                             │
│  ── STAGE 3: Developing ──  │
│  ┌─────────────────────────┐│
│  │ ☑️ Active                ││
│  │ [Expand to configure →] ││
│  └─────────────────────────┘│
│                             │
│  [+ Add Custom Stage]       │
│                             │
│  [  💾 Save Curriculum  ]   │
│                             │
│  Using platform default?    │
│  [Reset to Default]         │
│                             │
└─────────────────────────────┘
```

### 6.3 Fee Management
```
┌─────────────────────────────┐
│  ← Fee Management            │
│                             │
│  March 2026                 │
│                             │
│  ┌────────┬────────┬───────┐│
│  │Collected│Pending │Total  ││
│  │₹1,89,000│₹36,000│₹2,25K││
│  │  84%   │  16%   │       ││
│  └────────┴────────┴───────┘│
│                             │
│  ── PENDING (12 students)── │
│  ┌─────────────────────────┐│
│  │ 👤 Karthik M            ││
│  │    ₹3,000 · Due: 1 Mar ││
│  │    15 days overdue       ││
│  │    [Record Payment]      ││
│  │    [Send Reminder]       ││
│  ├─────────────────────────┤│
│  │ 👤 Deepak R             ││
│  │    ₹3,000 · Due: 1 Mar ││
│  │    15 days overdue       ││
│  │    [Record Payment]      ││
│  │    [Send Reminder]       ││
│  └─────────────────────────┘│
│  ... (10 more)              │
│                             │
│  [Send Reminder to All      │
│   Pending (12 students)]    │
│                             │
│  ── COLLECTED THIS MONTH ── │
│  ┌─────────────────────────┐│
│  │ 63 students paid ✅     ││
│  │ [View Details]           ││
│  └─────────────────────────┘│
│                             │
└─────────────────────────────┘
```

### 6.4 Staff Chat
```
┌─────────────────────────────┐
│  ← Staff Chat                │
│                             │
│  ── CHANNELS ──             │
│  ┌─────────────────────────┐│
│  │ 👥 All Staff             ││
│  │    "Coach Ravi: Tomorrow ││
│  │    I'll focus on..."     ││
│  │    3:45 PM               ││
│  ├─────────────────────────┤│
│  │ 🏏 Coaches Only          ││
│  │    "Coach Priya: Can we  ││
│  │    discuss Arun's..."    ││
│  │    2:30 PM               ││
│  └─────────────────────────┘│
│                             │
│  ── DIRECT MESSAGES ──      │
│  ┌─────────────────────────┐│
│  │ 👤 Coach Ravi            ││
│  │    "Will check and..."  ││
│  │    1:15 PM               ││
│  ├─────────────────────────┤│
│  │ 👤 Staff Kumar           ││
│  │    "Equipment list..."  ││
│  │    Yesterday             ││
│  └─────────────────────────┘│
│                             │
│  [+ New Message]            │
│                             │
│ Home  Studs  Attend Feed More│
└─────────────────────────────┘
```

### 6.5 Admission Requests
```
┌─────────────────────────────┐
│  ← Admission Requests (3)    │
│                             │
│  ┌─────────────────────────┐│
│  │ 👤 Vijay Kumar          ││
│  │    Age: 10               ││
│  │    Experience: 1-2 years ││
│  │    Preferred: Evening U14││
│  │    Parent: Mrs. Kumar    ││
│  │    Applied: 14 Mar       ││
│  │                         ││
│  │  [Accept] [Reject]      ││
│  │                         ││
│  │  If accepting:           ││
│  │  Role: [Batsman ▼]      ││
│  │  Stage: [Stage 2 ▼]     ││
│  │  Batch: [Evening U14 ▼] ││
│  └─────────────────────────┘│
│                             │
│  ┌─────────────────────────┐│
│  │ 👤 Ananya S             ││
│  │    Age: 8                ││
│  │    Experience: None      ││
│  │    Preferred: Weekend    ││
│  │    Applied: 15 Mar       ││
│  │  [Accept] [Reject]      ││
│  └─────────────────────────┘│
│                             │
└─────────────────────────────┘
```

---

## Offline Mode Indicator

### When device is offline:
```
┌─────────────────────────────┐
│  ⚠️ Offline Mode             │
│  Changes will sync when      │
│  connected                   │
│  ┌─────────────────────────┐│
│  │ 📋 1 attendance pending  ││
│  │ 📝 2 scores pending      ││
│  │ 💬 3 messages pending    ││
│  └─────────────────────────┘│
└─────────────────────────────┘
```

### When back online:
```
┌─────────────────────────────┐
│  ✅ Synced! All changes      │
│  uploaded successfully       │
│  (auto-dismisses in 3 sec)  │
└─────────────────────────────┘
```

---

## Total Screen Count — Academy Staff App

| Section | Screens |
|---------|---------|
| Onboarding (Registration + Setup Wizard) | 6 |
| Home Dashboard (Owner, Coach, Staff variants) | 3 |
| Students (List, Detail, Score, Promote) | 5 |
| Attendance (Mark, Reports) | 3 |
| Feed (View, Create Post) | 3 |
| Curriculum Builder | 3 |
| Fee Management | 3 |
| Staff Chat | 3 |
| Admission Requests | 2 |
| Settings & Profile | 4 |
| Notifications | 1 |
| **Total** | **~36 screens** |

---

## Combined App Summary

| App | Screens | Priority |
|-----|---------|----------|
| Student & Parent App | ~31 | MVP |
| Academy Staff App | ~36 | MVP |
| **Total MVP Screens** | **~67** | |

---

*Last updated: 2026-03-16*
