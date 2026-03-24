# Prompt: Complete Workflow & Screen Review — Soruban Sports Prototype

Copy-paste the prompt below into a new Claude Code chat while in the same project directory (`d:\clients\soruban\soruban-sports`).

---

## PROMPT START

```
You are a Senior Product Reviewer for Soruban Sports — a cricket academy SaaS platform. Your job is to do a complete walkthrough of all 5 prototype apps, document every screen's fields/buttons/actions, and trace every end-to-end workflow from admission to exit.

## What This Platform Is

Soruban Sports is a cricket academy management platform with 5 apps:

| # | App | Path | Users | Screens |
|---|-----|------|-------|---------|
| 1 | Explore App (Free User) | prototype/explore-app/index.html | Unregistered users browsing content & academies | 14 screens |
| 2 | Student & Parent App | prototype/student-parent-app/index.html | Enrolled students & their parents | 24 screens |
| 3 | Academy Staff App | prototype/academy-app/index.html | Head coach & supporting staff | 32 screens |
| 4 | Academy Dashboard | prototype/academy-dashboard/index.html | Academy owner/admin (web) | 14 pages |
| 5 | Super Admin Panel | prototype/super-admin/index.html | Soruban platform team (web) | 9 pages |

## Your Task

### Part 1: Screen-by-Screen Documentation

For EACH screen in EACH app, read the app.js file and document:

1. **Screen Name & ID** — e.g., `home`, `attendance`
2. **Navigation Path** — How to reach this screen (e.g., Bottom Nav → Home, or More → Fee Management)
3. **All Fields/Inputs** — Every text input, dropdown, radio button, checkbox, textarea, date picker, slider
4. **All Buttons/Actions** — Every clickable element and what it does (navigates where, opens what modal, shows what toast)
5. **Data Displayed** — What information is shown (student names, scores, dates, amounts, etc.)
6. **Modals/Popups** — Any modals triggered from this screen, and their fields/buttons
7. **Missing/Non-functional Items** — Buttons that just show "coming soon" toast, features that are placeholder only

Format each screen as:

```
### [App Name] — Screen: [screen-id]
**Navigation:** [how to get here]
**Purpose:** [one line]

**Fields & Inputs:**
- [ ] Field name — type (text/dropdown/radio/etc.) — default value — purpose

**Buttons & Actions:**
- [ ] Button label — action (navigates to X / opens modal Y / shows toast Z)

**Data Shown:**
- List of data items displayed

**Modals from this screen:**
- Modal name — fields — buttons

**Issues/Gaps:**
- Any non-functional elements or missing features
```

### Part 2: End-to-End Workflows

Document these complete user journeys across apps. For each workflow, trace every screen touched, every button clicked, every field filled, and what happens in other apps as a result.

#### Workflow 1: Discovery to Admission (Free User → Academy)
```
Explore App: Splash → Login → Home → Academies → Academy Detail (all 5 tabs) → Apply → Apply Status
   ↓ (triggers in)
Academy App: Admissions → Review profile → Schedule Meeting → Conduct meeting → Accept/Reject
   ↓ (also visible in)
Academy Dashboard: Admissions page → Schedule modal → Admit modal
   ↓ (result in)
Explore App: Apply Status → Meeting Scheduled → Accepted (with batch/stage/role details)
   ↓ (user transitions to)
Student & Parent App: Now enrolled, sees Home with progress
```

#### Workflow 2: Daily Academy Operations
```
Academy App: Home → Mark Attendance (for each student: Present/Absent/Late) → View report
   ↓ (visible in)
Student App: Attendance screen → Calendar view → Streak count
   ↓ (visible in)
Academy Dashboard: Attendance page → Daily grid → Heatmap → Low attendance alerts
```

#### Workflow 3: Curriculum & Learning Journey
```
Academy App: Curriculum → View stages → Enable/disable skills → Assign content
   ↓ (visible in)
Student App: Learn tab → Stages → Tap skill → Skill Detail (video, criteria, progress)
   ↓ (assessment)
Academy App: Students → Student Detail → Score Skill (drill score + assessment score)
   ↓ (promotion)
Academy App: Promote Student → Select stage → Confirm
   ↓ (visible in)
Student App: Home → Stage updated → Learn tab → New skills unlocked
```

#### Workflow 4: Match Organization & Fee Collection
```
Academy App: Matches → Create Match → Set type/format/date/fee/eligibility
   ↓ (notification to)
Student App: Matches tab → See upcoming match → Mark Available/Not Available
   ↓ (coach reviews)
Academy App: Match Detail → View availability → Announce Teams
   ↓ (match happens, then)
Academy App: Match Detail → Record Result → Collect Fees
   ↓ (fee shows in)
Academy App: Fee Management → Student's month → Record Payment (method + reference)
   ↓ (visible in)
Academy Dashboard: Fee Management → Collection chart → Pending table
   ↓ (visible in)
Student App: Home → Fee status
```

#### Workflow 5: Fee Management (Monthly Cycle)
```
Academy App: Fee Management → View month-wise dues → Student has pending months
   → Record Payment → Select method (GPay-Mobile1/Cash/PhonePe/etc.) → Add reference → Confirm
   ↓ (visible in)
Academy Dashboard: Fee Management → Revenue cards → Collection trend chart → Pending table
   ↓ (visible in)
Student App: Home → Fee status indicator
```

#### Workflow 6: Social Feed & Communication
```
Academy App: Feed → Create Post → Set visibility (Public/Academy/Batch/Staff) → Publish
   ↓ (public posts visible in)
Explore App: Feed tab → Public posts from all academies
   ↓ (academy posts visible in)
Student App: Feed tab → Academy + batch posts
   ↓ (visible in)
Academy Dashboard: Feed & Posts → All posts → Moderation → Stats
```

#### Workflow 7: Staff Communication
```
Academy App: More → Staff Chat → Messages between coaches
   → Head Coach assigns drills/instructions to assistant coach
```

#### Workflow 8: Assessment & Promotion
```
Academy App: Students → Student Detail → Score Skill → Set drill & assessment scores
   → Student meets promotion criteria
   → Promote Student → Assign new stage → Confirm
   ↓ (visible in)
Academy Dashboard: Assessments → Upcoming/Results/Promotion queue → Approve
   ↓ (visible in)
Student App: Home → Updated stage → Learn → New skills unlocked
```

#### Workflow 9: Parent Cricket Community
```
Student App: Play tab → Parent Cricket section → View matches → Mark availability
   → Parent match happens → View results → View stats
   ↓ (organized from)
Academy Dashboard: Parent Community → Organize Match → View results
```

#### Workflow 10: Technical Support
```
Student App: More → Help & Support → Raise Ticket → Select category → Describe issue → Submit
   → View ticket list → Ticket detail → Conversation thread → Reply
   ↓ (managed in)
Academy App: More → Technical Support → View tickets → Reply → Resolve
   ↓ (platform level)
Super Admin: Support → All tickets → Assign → Track
```

#### Workflow 11: Content Exploration (Free User)
```
Explore App: Home → Featured Content → Tap video → Video Detail (play, description, related)
   → Or: Explore tab → Filter by category → Browse videos → Video Detail
   → CTA: "Want structured coaching? Find an Academy" → Academies tab
```

#### Workflow 12: Academy Setup (First Time)
```
Academy App: Splash → Login → OTP → Setup Wizard Step 1 (Academy info)
   → Step 2 (Facilities) → Step 3 (Attendance method) → Step 4 (Fee config) → Home
```

#### Workflow 13: Student Exit / Leaving Academy
```
Document what happens when a student leaves:
- Is there a deactivation flow?
- Fee settlement?
- Data retention?
(Note: This may not exist in prototype — document as a gap if missing)
```

### Part 3: Cross-App Data Consistency Check

Verify that data shown in one app matches the related data in other apps:

| Data Point | Where Created | Where Should Be Visible | Check |
|-----------|---------------|------------------------|-------|
| Student name/details | Academy App → Add Student | Student App Home, Dashboard Students | |
| Attendance mark | Academy App → Attendance | Student App → Attendance calendar, Dashboard Attendance | |
| Fee payment | Academy App → Fee Mgmt → Record | Dashboard → Fee Mgmt, Student App → Home | |
| Match created | Academy App → Create Match | Student App → Matches, Dashboard → Matches | |
| Feed post (public) | Academy App → Create Post | Explore App → Feed, Student App → Feed, Dashboard → Feed | |
| Admission request | Explore App → Apply | Academy App → Admissions, Dashboard → Admissions | |
| Support ticket | Student App → Create Ticket | Academy App → Support, Super Admin → Support | |
| Academy profile | Dashboard → Settings | Explore App → Academy Detail, Student App → Academy Profile | |

### Part 4: Output Format

Create ONE document at `docs/review/01-complete-workflow-review.md` with:

1. **Screen Inventory** — Every screen in every app with all fields/buttons documented
2. **Workflow Traces** — All 13 workflows traced step by step
3. **Data Consistency** — Cross-app data check table
4. **Gap Analysis** — Missing features, non-functional buttons, broken flows
5. **Recommendations** — What's missing for the complete picture

Read each app.js file thoroughly. Don't assume — read the actual code to find every field, button, and action. This document will be used to validate the prototype before we start actual development.
```

## PROMPT END
