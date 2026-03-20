# Soruban Sports — Complete QA Test Plan

**Document Version:** 1.0
**Date:** 21 Mar 2026
**Prepared By:** Senior QA Analyst
**Purpose:** Validate all screens, flows, and cross-app interactions across the 4-app prototype

---

## How to Use This Document

- Open each app in browser (prototype/{app-name}/index.html)
- Follow each test case step-by-step
- Mark Status: PASS / FAIL / BLOCKED
- Add Notes for any issues found
- Cross-app flows require multiple browser tabs open simultaneously

---

## Apps Under Test

| # | App | Path | Type | Primary User |
|---|-----|------|------|-------------|
| 1 | Student & Parent App | prototype/student-parent-app/index.html | Mobile (phone frame) | Student / Parent |
| 2 | Academy Staff App | prototype/academy-app/index.html | Mobile (phone frame) | Head Coach / Staff |
| 3 | Academy Dashboard | prototype/academy-dashboard/index.html | Web (desktop) | Academy Owner/Admin |
| 4 | Super Admin Panel | prototype/super-admin/index.html | Web (desktop) | Soruban Platform Team |

---

## SECTION A: SCREEN INVENTORY CHECKLIST

> Verify every screen/page loads without errors

### A1. Student & Parent App (21 screens)

| # | Screen | Navigation Path | Status | Notes |
|---|--------|----------------|--------|-------|
| 1 | Splash | App launch | | |
| 2 | Login | Tap splash screen | | |
| 3 | OTP | Login → Get OTP | | |
| 4 | Student Home | OTP verify (as Student) | | |
| 5 | Parent Home | OTP verify (as Parent) | | |
| 6 | Learn (Curriculum) | Bottom nav → Learn | | |
| 7 | Skill Detail | Learn → tap any skill | | |
| 8 | Feed | Bottom nav → Feed | | |
| 9 | Play (Assessments) | Bottom nav → Play | | |
| 10 | Parent Cricket | Play → Parent Cricket (parent mode) | | |
| 11 | More Menu | Bottom nav → More | | |
| 12 | Profile | More → Profile | | |
| 13 | Notifications | More → Notifications | | |
| 14 | Attendance History | More → Attendance History | | |
| 15 | Settings | More → Settings | | |
| 16 | Academy Search | Home → Find Academy | | |
| 17 | Academy Profile | Academy Search → tap academy | | |
| 18 | Apply (Admission) | Academy Profile → Apply | | |
| 19 | Apply Status | Submit application | | |
| 20 | Matches | More → Matches | | |
| 21 | Match Detail | Matches → tap any match | | |

### A2. Academy Staff App (29 screens)

| # | Screen | Navigation Path | Status | Notes |
|---|--------|----------------|--------|-------|
| 1 | Splash | App launch | | |
| 2 | Login | Tap splash screen | | |
| 3 | OTP | Login → Get OTP | | |
| 4 | Setup Wizard 1 | First login | | |
| 5 | Setup Wizard 2 | Wizard → Next | | |
| 6 | Setup Wizard 3 | Wizard → Next | | |
| 7 | Setup Wizard 4 | Wizard → Next | | |
| 8 | Home | OTP verify / Setup complete | | |
| 9 | Students List | Bottom nav → Students | | |
| 10 | Student Detail | Students → tap student | | |
| 11 | Score Skill | Student Detail → Score Skill | | |
| 12 | Add Student | Students → FAB (+) | | |
| 13 | Promote Student | Student Detail → Promote | | |
| 14 | Attendance | Bottom nav → Attend | | |
| 15 | Attendance Report | Attendance → View Monthly Report | | |
| 16 | Feed | Bottom nav → Feed | | |
| 17 | Create Post | Feed → Create Post area | | |
| 18 | More Menu | Bottom nav → More | | |
| 19 | Curriculum Builder | More → Curriculum Builder | | |
| 20 | Fee Management | More → Fee Management | | |
| 21 | Staff Chat | More → Staff Chat | | |
| 22 | Chat Detail | Staff Chat → tap channel | | |
| 23 | Admissions | More → Admissions | | |
| 24 | Staff Management | More → Staff Management | | |
| 25 | Settings | More → Academy Settings | | |
| 26 | Notifications | Home → bell icon | | |
| 27 | Matches | More → Matches | | |
| 28 | Match Detail | Matches → tap match | | |
| 29 | Create Match | Matches → New Match | | |

### A3. Academy Dashboard — Web (12 pages)

| # | Page | Navigation Path | Status | Notes |
|---|------|----------------|--------|-------|
| 1 | Dashboard | Sidebar → Dashboard | | |
| 2 | Students | Sidebar → Students | | |
| 3 | Curriculum | Sidebar → Curriculum | | |
| 4 | Assessments | Sidebar → Assessments | | |
| 5 | Attendance | Sidebar → Attendance | | |
| 6 | Fee Management | Sidebar → Fee Management | | |
| 7 | Staff | Sidebar → Staff | | |
| 8 | Matches | Sidebar → Matches | | |
| 9 | Feed & Posts | Sidebar → Feed & Posts | | |
| 10 | Parent Community | Sidebar → Parent Community | | |
| 11 | Reports | Sidebar → Reports | | |
| 12 | Settings | Sidebar → Settings | | |

### A4. Super Admin Panel — Web (9 pages)

| # | Page | Navigation Path | Status | Notes |
|---|------|----------------|--------|-------|
| 1 | Dashboard | Sidebar → Dashboard | | |
| 2 | Academies | Sidebar → Academies | | |
| 3 | Content Library | Sidebar → Content Library | | |
| 4 | Users | Sidebar → Users | | |
| 5 | Subscriptions & Billing | Sidebar → Subscriptions | | |
| 6 | Tournaments | Sidebar → Tournaments | | |
| 7 | Reports & Analytics | Sidebar → Reports | | |
| 8 | Support Tickets | Sidebar → Support Tickets | | |
| 9 | System Config | Sidebar → System Config | | |

**Total Screens/Pages: 71**

---

## SECTION B: END-TO-END WORKFLOW TESTS

### WORKFLOW 1: Match Creation → Availability → Fee Collection → Finance

**Scenario:** Coach creates a weekend match for kids. Parents/students confirm availability. Match happens. Coach collects fees. Collection reflects in academy finance.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | More → Matches | Tap "New Match" | Create Match screen opens | | |
| 2 | Academy Staff | Create Match | Fill: Title="Weekend Practice Match", Type=Internal, Format=T10, Date, Time, Venue, Fee=₹200, Who=All Batches | All fields accept input | | |
| 3 | Academy Staff | Create Match | Tap "Create Match & Notify Players" | Toast: "Match created! Notifications sent" → Navigate to Matches list | | |
| 4 | Academy Staff | Matches | Verify new match appears | Match card shows: status=Collecting Availability, 0/X available, fee info | | |
| 5 | Student App | Home | Check for Match Invite card | "Match Invite" section appears with match title, date, fee, Available/Can't/Maybe buttons | | |
| 6 | Student App | Home | Tap "Available" button | Toast: "Marked as Available!" | | |
| 7 | Student App | More → Matches | Verify match status | My Status = "You're In!", fee shows "₹200 Due" | | |
| 8 | Student App | Match Detail | Tap the match card | Match detail opens with: info card, "You're confirmed" banner, fee section with payment options | | |
| 9 | Student App | Match Detail | Verify fee payment options | GPay, PhonePe, Cash at Academy buttons visible | | |
| 10 | Academy Staff | Match Detail | Open same match | Available count increased, student shows in Available list | | |
| 11 | Academy Staff | Match Detail | Check Fee Collection section | Progress bar shows X/Y paid, unpaid players listed | | |
| 12 | Academy Staff | Match Detail | Tap "Record" on unpaid player | Record Payment modal opens with: student name, amount=₹200, match title, payment methods | | |
| 13 | Academy Staff | Payment Modal | Select "GPay - Mobile 1", enter reference, tap "Record Payment" | Toast: "Payment of ₹200 recorded for [student]" | | |
| 14 | Academy Staff | Match Detail | Verify fee progress updated | Paid count increases, progress bar advances | | |
| 15 | Academy Staff | Match Detail | Tap "Announce Teams" | Toast: "Teams finalized & announced!" | | |
| 16 | Student App | Match Detail | Refresh/recheck | Status changes to "Teams Announced", team list visible with "You" highlighted | | |
| 17 | Academy Staff | Match Detail | Tap "Start Match" (after teams announced) | Toast: "Match started!" | | |
| 18 | Academy Staff | Match Detail | Tap "Share to Feed" | Toast: "Match posted to academy feed!" | | |
| 19 | Academy Staff | Fee Management | Navigate to fee management | Verify match fee collection reflects in overall stats (Collected amount) | | |
| 20 | Academy Dashboard | Matches | Open Matches page | Match card visible with availability bar, fee collection progress | | |
| 21 | Academy Dashboard | Matches | Verify fee amounts | Collected/Pending amounts match the payments recorded | | |
| 22 | Academy Dashboard | Fee Management | Open Fee Management | Revenue stats should include match fee collections | | |
| 23 | Academy Dashboard | Dashboard | Check Dashboard | Revenue chart and stats reflect updated collections | | |

---

### WORKFLOW 2: Student Admission → Enrollment → Stage Assignment

**Scenario:** New student finds academy, applies for admission. Academy reviews and accepts. Student gets enrolled with stage assignment.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Student App | Home | Tap "Find Academy" quick action | Academy Search screen opens | | |
| 2 | Student App | Academy Search | View nearby academies | 3 academy cards shown with name, rating, distance, student count | | |
| 3 | Student App | Academy Search | Tap "SAM Cricket Academy" | Academy Profile opens with details, batches, fee info | | |
| 4 | Student App | Academy Profile | Tap "Apply for Admission" | Admission form opens with pre-filled fields | | |
| 5 | Student App | Apply | Fill form: Name, Age, Experience, Preferred Batch, Parent details | All fields accept input | | |
| 6 | Student App | Apply | Tap "Submit Application" | Apply Status screen: "Application Submitted!", "Under Review" status | | |
| 7 | Academy Staff | Home | Check alerts section | "Pending Admissions" alert card shows count increased | | |
| 8 | Academy Staff | More → Admissions | Open Admissions | New applicant card visible with details | | |
| 9 | Academy Staff | Admissions | Tap "Accept" on applicant | Modal opens with Role, Stage, Batch selection dropdowns | | |
| 10 | Academy Staff | Admissions Modal | Select Role=Batsman, Stage=1, Batch=Morning U-12, tap "Confirm" | Toast: "Student accepted" | | |
| 11 | Academy Staff | Students | Navigate to Students list | New student appears in the list with assigned Stage and Batch | | |
| 12 | Academy Dashboard | Dashboard | Check dashboard | Total Students count should reflect new addition | | |
| 13 | Academy Dashboard | Students | Open Students page | New student visible in table with assigned details | | |
| 14 | Super Admin | Dashboard | Check platform stats | Total Students count increases across platform | | |

---

### WORKFLOW 3: Student Progress → Assessment → Skill Scoring → Promotion

**Scenario:** Student learns skills through curriculum, coach scores an assessment, student passes and gets promoted to next stage.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Student App | Home | View "Next Up" skill card | Shows current in-progress skill (e.g. "Cut Shot — 60%") | | |
| 2 | Student App | Learn | Tap bottom nav → Learn | Curriculum shows 4 categories with skills, progress percentage | | |
| 3 | Student App | Learn | Tap "Cut Shot" (in-progress skill) | Skill Detail opens with: technique video, drills, assessment result | | |
| 4 | Student App | Skill Detail | Verify content sections | Technique Video placeholder, Coach Demo, 4 Drill Instructions, Latest Assessment | | |
| 5 | Student App | Play | Tap bottom nav → Play | Upcoming Assessments tab shows scheduled assessment | | |
| 6 | Student App | Play | Tap "Results" tab | Assessment Results shown with scores, grades, coach notes | | |
| 7 | Academy Staff | Students | Tap on the student | Student Detail opens with Progress/Attendance/Notes tabs | | |
| 8 | Academy Staff | Student Detail | Tap "Score Skill" | Score Skill screen opens with drill slider and coach assessment slider | | |
| 9 | Academy Staff | Score Skill | Set Drill Score=13/15, Coach Assessment=8/10 | Total score auto-calculates (weighted 60%+40%) and displays | | |
| 10 | Academy Staff | Score Skill | Add Coach Notes, tap "Save Score" | Toast: score saved, navigates back | | |
| 11 | Student App | Play → Results | Check results | New assessment result should appear with score and coach note | | |
| 12 | Academy Staff | Student Detail | Check if promotion-ready | If all skills passed with high score, "Promote" button appears | | |
| 13 | Academy Staff | Promote Student | Tap "Promote" | Promotion screen with readiness checklist, stage progression shown | | |
| 14 | Academy Staff | Promote Student | Add coach remarks, tap "Approve Promotion" | Toast: "Promoted to Stage X+1!" | | |
| 15 | Student App | Home | Check stage display | Student's stage should update (e.g. Stage 3 → Stage 4) | | |
| 16 | Student App | Feed | Check feed | System achievement post: "Achievement Unlocked!" with promotion details | | |
| 17 | Academy Dashboard | Assessments | Check Promotion Queue tab | Student should move out of promotion queue after approval | | |
| 18 | Academy Dashboard | Dashboard | Check Stage Distribution chart | Doughnut chart should reflect updated distribution | | |

---

### WORKFLOW 4: Attendance Marking → Low Attendance Alert → Parent Notification

**Scenario:** Staff marks daily attendance. A student has low attendance. System flags it. Parent gets notified.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | Home | Tap "Mark Attendance" quick action | Attendance screen opens with today's date | | |
| 2 | Academy Staff | Attendance | Verify batch filter | Batch chips: All, Morning U-12, Evening U-14, Weekend All Ages | | |
| 3 | Academy Staff | Attendance | Tap check (✓) for 8 students | Buttons turn solid green with scale animation, Present count = 8 | | |
| 4 | Academy Staff | Attendance | Tap X for 1 student | Button turns solid red, Absent count = 1 | | |
| 5 | Academy Staff | Attendance | Tap clock for 1 student | Button turns solid amber, Late count = 1 | | |
| 6 | Academy Staff | Attendance | Tap "Mark All Present" | All buttons turn green, toast: "All students marked present!" | | |
| 7 | Academy Staff | Attendance | Toggle — tap green button again on a student | Button deselects (back to default), Present count decreases | | |
| 8 | Academy Staff | Attendance | Tap "Submit Attendance" | Toast: "Attendance submitted successfully!" | | |
| 9 | Academy Staff | Attendance | Tap "View Monthly Report" | Attendance Report: avg%, batch breakdown, low attendance alerts | | |
| 10 | Academy Staff | Attendance Report | Check "Low Attendance" section | Students below 65% flagged with name, batch, percentage | | |
| 11 | Student App | Home | Check attendance section | Monthly attendance % and calendar grid visible | | |
| 12 | Student App | More → Attendance | Open Attendance History | Calendar view: green (present), red (absent), empty (holiday/future) | | |
| 13 | Academy Dashboard | Attendance | Open Attendance page | Present/Absent/Late stat cards, weekly grid, monthly heatmap | | |
| 14 | Academy Dashboard | Attendance | Click "Mark Today" | Modal opens with student list and status dropdowns | | |
| 15 | Academy Dashboard | Attendance | Check "Low Attendance Alerts" | Students below threshold listed with "Notify Parent" button | | |
| 16 | Academy Dashboard | Attendance | Click "Notify Parent" | Toast: "Reminder sent to [parent name]" | | |

---

### WORKFLOW 5: Fee Management → Monthly Due → Payment Recording → Collection Tracking

**Scenario:** Monthly fees are due. Some students haven't paid. Staff records payments via different methods. Finance section reflects collections.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | More → Fee Management | Open Fee Management | Stats: Collected, Pending, Total amounts shown | | |
| 2 | Academy Staff | Fee Management | Check month filter | Chips: All Months, Jan 2026, Feb 2026, Mar 2026 | | |
| 3 | Academy Staff | Fee Management | Verify pending students | Each student shows: name, batch, month-wise breakdown | | |
| 4 | Academy Staff | Fee Management | Check Vikram T (3 months due) | Shows Jan, Feb, Mar 2026 rows with ₹3,500 each, total ₹10,500 | | |
| 5 | Academy Staff | Fee Management | Verify "Oldest" tag | Jan 2026 row tagged as "Oldest" in red | | |
| 6 | Academy Staff | Fee Management | Tap "Record" on Jan 2026 row | Payment modal: student name, month="Jan 2026", amount=₹3,500 | | |
| 7 | Academy Staff | Payment Modal | Verify payment methods | 6 options: GPay Mobile 1, GPay Mobile 2, Cash, Bank Transfer, PhonePe, Card/UPI | | |
| 8 | Academy Staff | Payment Modal | Select "Cash", leave reference empty | Cash button highlights with accent border | | |
| 9 | Academy Staff | Payment Modal | Tap "Record Payment" | Toast: "Payment of ₹3,500 recorded for Vikram T" | | |
| 10 | Academy Staff | Fee Management | Tap "Record All" on Deepak R | Payment modal: month="All (2 months)", amount=₹8,000 | | |
| 11 | Academy Staff | Fee Management | Tap "Send Reminder" on a student | Toast: "Reminder sent to [student]" | | |
| 12 | Academy Staff | Fee Management | Tap "Send Reminder to All" | Toast: "Reminders sent to X students!" with correct count | | |
| 13 | Academy Dashboard | Fee Management | Open Fee Management | Summary boxes: Collected, Pending, Total match expected values | | |
| 14 | Academy Dashboard | Fee Management | Check pending table | Students with Due/Partial status listed | | |
| 15 | Academy Dashboard | Fee Management | Click "Record" on a student | Toast: "Payment recorded" | | |
| 16 | Academy Dashboard | Fee Management | Click "Send Bulk Reminder" | Toast: "Bulk reminders sent to X parents!" | | |
| 17 | Academy Dashboard | Dashboard | Check revenue stats | Revenue This Month and Pending Fees reflect correct values | | |
| 18 | Student App (Parent mode) | Parent Home | Check fee section | Shows fee amount, due date, "Pay Now" button | | |
| 19 | Super Admin | Billing | Check MRR | Monthly Recurring Revenue reflects academy collections | | |

---

### WORKFLOW 6: Social Feed → Post Creation → Visibility Control

**Scenario:** Coach creates posts with different visibility levels. Students and parents see only relevant posts.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | Feed | Check existing posts | 4 posts visible with author, time, visibility badges | | |
| 2 | Academy Staff | Feed | Tap create post area | Create Post screen opens | | |
| 3 | Academy Staff | Create Post | Select "Public" visibility | Public chip highlighted | | |
| 4 | Academy Staff | Create Post | Type message, tap "Post" | Toast: "Post published!", navigates to Feed | | |
| 5 | Academy Staff | Create Post | Select "Staff Only" visibility | Staff Only chip highlighted | | |
| 6 | Academy Staff | Create Post | Tap "Photo" button | Toast: "Camera opened" | | |
| 7 | Academy Staff | Create Post | Tap "Video" button | Toast: "Video feature coming soon" | | |
| 8 | Academy Staff | Create Post | Tap "Match" button | Navigates to Create Match screen (not a media type) | | |
| 9 | Student App | Feed | Check feed | Posts with Public and Academy visibility visible | | |
| 10 | Student App | Feed | Tap "Academy" tab | Academy feed shows | | |
| 11 | Student App | Feed | Tap heart on a post | Toast: "Liked!" | | |
| 12 | Student App | Feed | Tap share on a post | Toast: "Shared!" | | |
| 13 | Academy Dashboard | Feed & Posts | Open Feed page | All posts visible with visibility badges, engagement stats | | |
| 14 | Academy Dashboard | Feed & Posts | Click "Create Post" | Modal with visibility selector and content textarea | | |
| 15 | Academy Dashboard | Feed & Posts | Check content moderation card | "No flagged posts" with green shield | | |

---

### WORKFLOW 7: Curriculum Builder → Skill Management → Student Learning

**Scenario:** Academy customizes curriculum by toggling skills. Students see the updated curriculum in their Learn tab.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | More → Curriculum | Open Curriculum Builder | 4 stages shown, each with skills list | | |
| 2 | Academy Staff | Curriculum | Tap Stage 1 header | Stage expands/collapses showing skills | | |
| 3 | Academy Staff | Curriculum | Toggle a skill checkbox off | Skill unchecked (visual feedback) | | |
| 4 | Academy Staff | Curriculum | Tap "Add Custom Skill" | Toast: "Custom skill editor in full app" | | |
| 5 | Academy Staff | Curriculum | Tap "Save Curriculum" | Toast: "Curriculum saved!" | | |
| 6 | Student App | Learn | Open Learn tab | 4 categories shown with skill counts and progress | | |
| 7 | Student App | Learn | Tap a category to expand | Skills listed with status: passed (✓), in-progress (📚), locked (🔒) | | |
| 8 | Student App | Learn | Tap a passed skill | Skill Detail shows technique video, drills, assessment | | |
| 9 | Student App | Learn | Tap a locked skill | Should not navigate (opacity 0.5, unclickable) | | |
| 10 | Academy Dashboard | Curriculum | Open Curriculum page | Two-column: stage/skill tree + skill detail panel | | |
| 11 | Academy Dashboard | Curriculum | Click a skill | Right panel shows: video status, drill description, passing criteria | | |
| 12 | Academy Dashboard | Curriculum | Toggle stage expand | Stage group expands/collapses with chevron animation | | |

---

### WORKFLOW 8: Parent Match → Availability → Match Execution

**Scenario:** Academy organizes a Parents vs Students fun match. Parents respond via app. Match happens.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | Create Match | Type=Parent vs Student, Format=T8, Fee=₹0 | All fields populated correctly | | |
| 2 | Academy Staff | Create Match | Tap "Create Match & Notify" | Toast confirms, navigates to Matches | | |
| 3 | Student App | Home | Check match invite | "Parents vs Students Fun Match" card with "Free" badge | | |
| 4 | Student App | Match Detail | Open match | Info card shows: Free event, eligibility=Students + Parents | | |
| 5 | Student App | Match Detail | Tap "Available" | Button highlights green, toast confirms | | |
| 6 | Student App | Match Detail | Tap "Available" again | Deselects (toggles back to none) | | |
| 7 | Student App | Match Detail | Tap "Maybe" | Button highlights amber | | |
| 8 | Student App (Parent) | Parent Cricket | Check parent cricket section | Upcoming match visible with availability buttons | | |
| 9 | Academy Staff | Match Detail | Check responses | Available/Not Available/Maybe/Pending counts shown | | |
| 10 | Academy Staff | Match Detail | Verify free match | No fee collection section (shows "Free Event" instead) | | |
| 11 | Academy Dashboard | Matches | Check match card | Free event badge, no fee progress bar | | |
| 12 | Academy Dashboard | Parent Community | Check upcoming match | Match details visible in Parent Community page | | |

---

### WORKFLOW 9: Staff Management → Communication → Chat

**Scenario:** Academy has multiple coaches. They communicate via staff chat. Head coach assigns tasks.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | More → Staff Management | Open Staff Management | 3 staff cards: Venkat (Owner), Coach Ravi, Kumar | | |
| 2 | Academy Staff | Staff Management | Tap "Invite Staff" | Toast: "Invite link copied!" | | |
| 3 | Academy Staff | More → Staff Chat | Open Staff Chat | 5 channels listed with unread badges | | |
| 4 | Academy Staff | Staff Chat | Tap "All Staff" (3 unread) | Chat Detail opens with message thread | | |
| 5 | Academy Staff | Chat Detail | View messages | 5 messages with sender names, timestamps, sent/received styling | | |
| 6 | Academy Staff | Chat Detail | Tap send button | Toast: "Message sent!" | | |
| 7 | Academy Staff | Chat Detail | Tap attachment (➕) | Toast: "Attachment options" | | |
| 8 | Academy Dashboard | Staff | Open Staff page | Staff cards with role, batches, phone, performance table | | |
| 9 | Academy Dashboard | Staff | Click "Invite Staff" | Modal with name, role, phone, batch assignment | | |

---

### WORKFLOW 10: Platform Onboarding → Academy Setup → Trial

**Scenario:** New academy signs up. Goes through setup wizard. Starts 14-day trial.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Staff | Splash | Tap screen | Login screen opens | | |
| 2 | Academy Staff | Login | Enter phone, tap "Get OTP" | OTP screen opens | | |
| 3 | Academy Staff | OTP | Enter 4 digits | Auto-progresses to next input, verify button available | | |
| 4 | Academy Staff | OTP | Tap "Verify & Login" | Toast: "OTP verified!", navigates to Home | | |
| 5 | Academy Staff | Setup Wizard 1 | Fill: Academy Name, Description, Facilities | All checkboxes and inputs functional | | |
| 6 | Academy Staff | Setup Wizard 1 | Tap "Next" | Step 2 opens (Batches) | | |
| 7 | Academy Staff | Setup Wizard 2 | Fill: Batch name, times, days, max students | Day selector and inputs work | | |
| 8 | Academy Staff | Setup Wizard 2 | Tap "Next" | Step 3 opens (Attendance method) | | |
| 9 | Academy Staff | Setup Wizard 3 | Select attendance method | Radio buttons functional (Staff/Self/Both) | | |
| 10 | Academy Staff | Setup Wizard 3 | Tap "Next" | Step 4 opens (Fee config) | | |
| 11 | Academy Staff | Setup Wizard 4 | Set monthly fee, due date, payment methods | All inputs accept values | | |
| 12 | Academy Staff | Setup Wizard 4 | Tap "Finish Setup" | Toast: "Academy setup complete!", navigates to Home | | |
| 13 | Academy Staff | Home | Check trial badge | "Trial: 12 days left" badge visible | | |
| 14 | Academy Staff | More | Check subscription section | Trial status shown with days remaining | | |
| 15 | Academy Staff | Settings | Check subscription | Trial progress bar and "Upgrade Now" button | | |
| 16 | Super Admin | Dashboard | Check "Recent Signups" | New academy should appear in list | | |
| 17 | Super Admin | Academies | Check academy list | New academy with "Trial" status badge | | |

---

### WORKFLOW 11: Assessment Scheduling → Exam → Results

**Scenario:** Coach creates an assessment exam. Students take it. Results are recorded and visible to students/parents.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Academy Dashboard | Assessments | Click "Create Assessment" | Modal with title, date, stage, batch, coach, skills fields | | |
| 2 | Academy Dashboard | Assessments | Fill and submit | Toast: "Assessment created!" | | |
| 3 | Academy Dashboard | Assessments | Check "Upcoming" tab | New assessment visible with date, batch, student count | | |
| 4 | Student App | Play | Check "Upcoming" tab | Assessment shown with skill, date, time, coach | | |
| 5 | Academy Staff | Student Detail | Tap "Score Skill" | Score screen with drill slider (0-15) and assessment slider (1-10) | | |
| 6 | Academy Staff | Score Skill | Move drill slider to 12 | Display updates to "12/15" | | |
| 7 | Academy Staff | Score Skill | Move assessment slider to 8 | Display updates to "8/10" | | |
| 8 | Academy Staff | Score Skill | Verify total | Weighted calculation shown (60% drill + 40% assessment) | | |
| 9 | Academy Staff | Score Skill | Tap "Save Score" | Toast confirms, navigates back | | |
| 10 | Student App | Play → Results | Check results | New result with score, grade, coach note | | |
| 11 | Academy Dashboard | Assessments | Check "Recent Results" tab | Assessment result in table with scores | | |
| 12 | Academy Dashboard | Assessments | Check "Promotion Queue" tab | If student qualifies (score ≥85, attendance ≥90), appears here | | |

---

### WORKFLOW 12: Super Admin Content Management

**Scenario:** Platform team uploads coaching content to the shared library that academies can use in their curriculum.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Super Admin | Content Library | Open page | Stats: Created (72), In Review (12), Published (0), Remaining (446) | | |
| 2 | Super Admin | Content Library | Click "Batting" tab | Grid filters to batting content only | | |
| 3 | Super Admin | Content Library | Click "Bowling" tab | Shows filtered content (may be empty) | | |
| 4 | Super Admin | Content Library | Use Stage dropdown | Filters by stage (1-4) | | |
| 5 | Super Admin | Content Library | Use Status dropdown | Filters by Draft/Review/Published | | |
| 6 | Super Admin | Content Library | Click "Upload New Content" | Modal: title, skill, category, stage, file upload zone, description | | |
| 7 | Super Admin | Content Library | Click drag-drop zone | Toast: "File picker would open here" | | |
| 8 | Super Admin | Content Library | Fill form and click "Upload" | Toast: "Content uploaded!", modal closes | | |
| 9 | Super Admin | Content Library | Click a content card | Toast: "Opening content: [title]" | | |

---

### WORKFLOW 13: Support Ticket Lifecycle

**Scenario:** Academy reports an issue. Support team tracks and resolves it.

| Step | App | Screen | Action | Expected Result | Status | Notes |
|------|-----|--------|--------|----------------|--------|-------|
| 1 | Super Admin | Support Tickets | Check stats | Open, In Progress, Resolved counts shown | | |
| 2 | Super Admin | Support Tickets | Click "Open" tab | Filters to open tickets only | | |
| 3 | Super Admin | Support Tickets | Click "Create Ticket" | Modal: academy dropdown, subject, priority, assign to, description | | |
| 4 | Super Admin | Support Tickets | Fill and submit | Toast: "Ticket created!", modal closes | | |
| 5 | Super Admin | Support Tickets | Click view (eye icon) on ticket | Ticket detail modal: subject, priority, status, academy, description | | |
| 6 | Super Admin | Ticket Detail | Click "Reply" | Toast: "Reply sent" | | |
| 7 | Super Admin | Ticket Detail | Click "Mark Resolved" | Toast confirms, modal closes | | |
| 8 | Super Admin | Ticket Detail | Click "Reassign" | Toast: "Ticket reassigned" | | |

---

## SECTION C: UI/UX VERIFICATION

### C1. Theme Toggle (All Apps)

| # | Test | App | Status | Notes |
|---|------|-----|--------|-------|
| 1 | Toggle to dark mode | Student App — Settings → Dark Mode | | |
| 2 | Toggle to dark mode | Academy Staff — (if available) | | |
| 3 | Toggle to dark mode | Academy Dashboard — top bar moon icon | | |
| 4 | Toggle to dark mode | Super Admin — top bar moon icon | | |
| 5 | Verify charts reinitialize on theme change | Dashboard (web) | | |
| 6 | Verify theme persists on page reload | All web apps (localStorage) | | |

### C2. Responsive/Mobile (Web Apps)

| # | Test | App | Status | Notes |
|---|------|-----|--------|-------|
| 1 | Sidebar collapses on mobile width | Academy Dashboard | | |
| 2 | Hamburger menu works | Academy Dashboard | | |
| 3 | Tables are scrollable on small screens | Academy Dashboard | | |
| 4 | Charts resize properly | Academy Dashboard | | |
| 5 | Sidebar overlay works | Super Admin | | |

### C3. Navigation

| # | Test | App | Status | Notes |
|---|------|-----|--------|-------|
| 1 | Back button works on all sub-screens | Academy Staff App | | |
| 2 | Back button works on all sub-screens | Student App | | |
| 3 | Bottom nav highlights correct tab | Both mobile apps | | |
| 4 | Sidebar highlights active page | Both web apps | | |
| 5 | Tab switching works (Play, Student Detail, Feed) | Student App | | |
| 6 | Filter chips toggle correctly (single-select) | Both mobile apps | | |

### C4. Charts (Web Apps)

| # | Test | App | Page | Status | Notes |
|---|------|-----|------|--------|-------|
| 1 | Enrollment trend line chart | Dashboard | Dashboard | | |
| 2 | Revenue bar chart | Dashboard | Dashboard | | |
| 3 | Stage distribution doughnut | Dashboard | Dashboard | | |
| 4 | Role distribution doughnut | Dashboard | Dashboard | | |
| 5 | Fee collection trend | Dashboard | Fee Management | | |
| 6 | Progress report line chart | Dashboard | Reports | | |
| 7 | Attendance report bar chart | Dashboard | Reports | | |
| 8 | Financial report bar chart | Dashboard | Reports | | |
| 9 | Academy growth line chart | Super Admin | Dashboard | | |
| 10 | Revenue growth bar chart | Super Admin | Dashboard | | |
| 11 | Plan distribution pie chart | Super Admin | Dashboard | | |
| 12 | Billing revenue line chart | Super Admin | Billing | | |
| 13 | User growth line chart | Super Admin | Reports | | |
| 14 | Feature usage bar chart | Super Admin | Reports | | |
| 15 | Churn rate line chart | Super Admin | Reports | | |
| 16 | Charts do NOT infinitely expand height | All web apps | All pages with charts | | |

---

## SECTION D: DATA CONSISTENCY CHECKS

> Verify the same data shows correctly across all apps

| # | Data Point | Academy Staff | Student App | Dashboard | Super Admin | Status |
|---|-----------|---------------|-------------|-----------|-------------|--------|
| 1 | Academy name = "SAM Cricket Academy" | Home hero card | Home header | Top bar title | Academies list | |
| 2 | Head Coach = "Venkat" | More menu owner | Feed posts author | Admin profile label | — | |
| 3 | Total students = 85 | Home hero | — | Dashboard stat | Platform stats | |
| 4 | Student "Ravi Kumar" = Stage 3 | Students list | Home stage display | Students table | — | |
| 5 | Monthly fee = ₹3,500 | Fee Management | Parent Home fee card | Settings fee config | — | |
| 6 | 3 batches exist | Attendance filters | — | Dashboard stat | — | |
| 7 | Match fee = ₹200 (Weekend match) | Match Detail | Match Detail | Matches page | — | |
| 8 | Vikram T = 3 months overdue | Fee Management | — | Fee Management | — | |
| 9 | Trial = 12 days left | More menu badge | — | Settings subscription | Academies status | |

---

## SECTION E: KNOWN LIMITATIONS (Prototype)

> These are expected limitations in the prototype — not bugs

| # | Limitation | Affected Area |
|---|-----------|---------------|
| 1 | Data is hardcoded — no real persistence between sessions | All apps |
| 2 | State resets on page refresh | All apps |
| 3 | Filter chips are visual-only in some places (don't actually filter) | Fee month filter, some batch filters |
| 4 | "Coming soon" toasts on features not yet prototyped | Various screens |
| 5 | No actual file upload | Create Post photos/video, Super Admin content upload |
| 6 | No real-time sync between apps | Cross-app workflows |
| 7 | OTP accepts any input | Login flow |
| 8 | Charts use static data, not reactive to actions | Web dashboards |
| 9 | Parent Cricket team names still show "Chennai Dads XI" | Student App parent cricket page |
| 10 | Academy search shows generic academies, not linked to enrolled | Student App academy search |

---

## Summary

| Metric | Count |
|--------|-------|
| **Total Screens/Pages** | 71 |
| **End-to-End Workflows** | 13 |
| **Individual Test Steps** | 210+ |
| **UI/UX Checks** | 21 |
| **Chart Validations** | 16 |
| **Data Consistency Checks** | 9 |
| **Known Limitations** | 10 |

---

**Tester Name:** _________________________
**Test Date:** _________________________
**Overall Result:** PASS / FAIL
**Total Issues Found:** _____
