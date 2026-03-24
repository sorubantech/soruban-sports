/* ============================================
   Soruban Sports — Academy Staff App
   Cricket Academy Management Application
   ============================================ */

// --- Academy Data ---
const academy = {
  name: 'SAM Cricket Academy',
  city: 'Coimbatore',
  owner: 'Venkat',
  role: 'Owner & Head Coach',
  phone: '+91 94432 78901',
  totalStudents: 85,
  presentToday: 62,
  revenueCollected: 241500,
  revenuePending: 36000,
  pendingAdmissions: 3,
  promotionsReady: 2,
  feesDue: 12,
  plan: 'Trial',
  trialDaysLeft: 12
};

// --- Batches ---
const batches = [
  { id: 1, name: 'Morning U-12', timing: '6:00 - 8:00 AM', days: 'Mon–Fri', coach: 'Coach Priya', students: 18, maxStudents: 25 },
  { id: 2, name: 'Evening U-14', timing: '4:00 - 6:00 PM', days: 'Mon–Fri', coach: 'Coach Ravi', students: 22, maxStudents: 30 },
  { id: 3, name: 'Weekend All Ages', timing: '7:00 - 10:00 AM', days: 'Sat–Sun', coach: 'Venkat', students: 15, maxStudents: 20 }
];

// --- Staff ---
const staff = [
  { id: 1, name: 'Coach Ravi', role: 'Head Coach', batches: ['Evening U-14'], phone: '+91 94432 11223', avatar: 'R' },
  { id: 2, name: 'Coach Priya', role: 'Coach', batches: ['Morning U-12'], phone: '+91 94432 33445', avatar: 'P' },
  { id: 3, name: 'Kumar', role: 'Support Staff', batches: ['Equipment & Attendance'], phone: '+91 94432 55667', avatar: 'K' }
];

// --- Students ---
const students = [
  { id: 1, name: 'Ravi Kumar', stage: 3, role: 'Batsman', score: 68, attendance: 82, feePaid: true, batch: 'Evening U-14', joined: 'Jan 2025', avatar: 'RK', promotionReady: false },
  { id: 2, name: 'Arun Prakash', stage: 2, role: 'Allrounder', score: 92, attendance: 95, feePaid: true, batch: 'Morning U-12', joined: 'Mar 2025', avatar: 'AP', promotionReady: true },
  { id: 3, name: 'Karthik M', stage: 3, role: 'Bowler (Fast)', score: 55, attendance: 70, feePaid: false, batch: 'Evening U-14', joined: 'Feb 2025', avatar: 'KM', feeAmount: 3500, feeDays: 12, promotionReady: false, pendingMonths: [{month: 'Mar 2026', amount: 3500}] },
  { id: 4, name: 'Priya S', stage: 1, role: 'Batsman', score: 30, attendance: 88, feePaid: true, batch: 'Morning U-12', joined: 'Nov 2025', avatar: 'PS', promotionReady: false },
  { id: 5, name: 'Deepak R', stage: 4, role: 'Batsman', score: 74, attendance: 60, feePaid: false, batch: 'Weekend All Ages', joined: 'Jun 2025', avatar: 'DR', feeAmount: 4000, feeDays: 22, promotionReady: false, pendingMonths: [{month: 'Feb 2026', amount: 4000}, {month: 'Mar 2026', amount: 4000}] },
  { id: 6, name: 'Surya V', stage: 2, role: 'Wicketkeeper', score: 61, attendance: 78, feePaid: true, batch: 'Evening U-14', joined: 'Aug 2025', avatar: 'SV', promotionReady: false },
  { id: 7, name: 'Mohan K', stage: 3, role: 'Allrounder', score: 70, attendance: 85, feePaid: true, batch: 'Weekend All Ages', joined: 'Apr 2025', avatar: 'MK', promotionReady: false },
  { id: 8, name: 'Anand S', stage: 1, role: 'Bowler (Spin)', score: 45, attendance: 72, feePaid: true, batch: 'Morning U-12', joined: 'Dec 2025', avatar: 'AS', promotionReady: false },
  { id: 9, name: 'Vikram T', stage: 2, role: 'Batsman', score: 58, attendance: 65, feePaid: false, batch: 'Evening U-14', joined: 'Jul 2025', avatar: 'VT', feeAmount: 3500, feeDays: 8, promotionReady: false, pendingMonths: [{month: 'Jan 2026', amount: 3500}, {month: 'Feb 2026', amount: 3500}, {month: 'Mar 2026', amount: 3500}] },
  { id: 10, name: 'Harish G', stage: 3, role: 'Bowler (Fast)', score: 77, attendance: 90, feePaid: true, batch: 'Weekend All Ages', joined: 'May 2025', avatar: 'HG', promotionReady: true }
];

// --- Admission Requests ---
const admissionRequests = [
  { id: 1, name: 'Dhruv Patel', age: 11, experience: '2 years club cricket', preferredBatch: 'Morning U-12', parent: 'Mr. Rajesh Patel', parentPhone: '+91 98765 12340', appliedDate: '12 Mar 2026', status: 'pending', medicalNotes: 'None', previousAcademy: 'Self-taught' },
  { id: 2, name: 'Sneha R', age: 13, experience: 'School team captain', preferredBatch: 'Evening U-14', parent: 'Mrs. Lakshmi R', parentPhone: '+91 98765 56780', appliedDate: '14 Mar 2026', status: 'meeting-scheduled', meetingDate: '22 Mar 2026', meetingTime: '10:00 AM', medicalNotes: 'Mild asthma', previousAcademy: 'VB Cricket Academy' },
  { id: 3, name: 'Arjun V', age: 9, experience: 'Beginner — no prior coaching', preferredBatch: 'Morning U-12', parent: 'Mr. Venkatesh V', parentPhone: '+91 98765 99010', appliedDate: '15 Mar 2026', status: 'pending', medicalNotes: 'None', previousAcademy: 'None' }
];

// --- Feed Posts ---
const feedPosts = [
  { id: 1, author: 'Venkat', avatar: 'SK', time: '2h ago', body: 'Great bowling session today! The U-14 batch showed incredible discipline in their line and length drills. Special mention to Karthik M for his consistent yorkers.', image: true, imageIcon: 'fa-cricket-bat-ball', visibility: 'Public', likes: 24, comments: 5 },
  { id: 2, author: 'Coach Ravi', avatar: 'CR', time: '5h ago', body: '📢 Announcement: Inter-academy tournament registration is open! Deadline is March 25. Interested students please confirm with your batch coach.', image: false, visibility: 'Academy', likes: 18, comments: 12 },
  { id: 3, author: 'System', avatar: '🏆', time: '1d ago', body: 'Achievement Unlocked! Arun Prakash has completed all Stage 2 skills with 92% overall score. Ready for Stage 3 promotion!', image: false, visibility: 'Academy', likes: 31, comments: 8 },
  { id: 4, author: 'Coach Priya', avatar: 'CP', time: '2d ago', body: 'Morning batch fitness test results are in. 85% of students improved their sprint times this month. Keep up the hard work, team!', image: true, imageIcon: 'fa-running', visibility: 'Staff', likes: 9, comments: 3 }
];

// --- Matches ---
const matches = [
  {
    id: 1, title: 'Weekend Practice Match', type: 'Internal', format: 'T10',
    date: '23 Mar 2026', time: '4:00 PM', venue: 'SAM Academy Ground',
    status: 'collecting-availability', // stages: collecting-availability → teams-announced → in-progress → completed
    matchFee: 200, feeNote: 'Per player (ground + ball charges)',
    createdBy: 'Venkat', createdAt: '18 Mar 2026',
    eligibility: 'All Batches',
    maxPlayers: 22,
    responses: [
      { studentId: 1, name: 'Ravi Kumar', avatar: 'RK', role: 'Batsman', response: 'available', feePaid: false },
      { studentId: 2, name: 'Arun Prakash', avatar: 'AP', role: 'Allrounder', response: 'available', feePaid: true },
      { studentId: 3, name: 'Karthik M', avatar: 'KM', role: 'Bowler (Fast)', response: 'available', feePaid: false },
      { studentId: 6, name: 'Surya V', avatar: 'SV', role: 'Wicketkeeper', response: 'available', feePaid: true },
      { studentId: 7, name: 'Mohan K', avatar: 'MK', role: 'Allrounder', response: 'available', feePaid: false },
      { studentId: 10, name: 'Harish G', avatar: 'HG', role: 'Bowler (Fast)', response: 'available', feePaid: false },
      { studentId: 4, name: 'Priya S', avatar: 'PS', role: 'Batsman', response: 'not-available', feePaid: false },
      { studentId: 8, name: 'Anand S', avatar: 'AS', role: 'Bowler (Spin)', response: 'maybe', feePaid: false },
    ],
    pendingResponse: [
      { studentId: 5, name: 'Deepak R', avatar: 'DR', role: 'Batsman' },
      { studentId: 9, name: 'Vikram T', avatar: 'VT', role: 'Batsman' },
    ]
  },
  {
    id: 2, title: 'Parents vs Students Fun Match', type: 'Parent Match', format: 'T8',
    date: '30 Mar 2026', time: '5:00 PM', venue: 'SAM Academy Ground',
    status: 'collecting-availability',
    matchFee: 0, feeNote: 'Free — fun event',
    createdBy: 'Venkat', createdAt: '20 Mar 2026',
    eligibility: 'Students + Parents',
    maxPlayers: 30,
    responses: [
      { studentId: 1, name: 'Ravi Kumar', avatar: 'RK', role: 'Batsman', response: 'available', feePaid: true },
      { studentId: 2, name: 'Arun Prakash', avatar: 'AP', role: 'Allrounder', response: 'available', feePaid: true },
    ],
    pendingResponse: [
      { studentId: 3, name: 'Karthik M', avatar: 'KM', role: 'Bowler (Fast)' },
      { studentId: 5, name: 'Deepak R', avatar: 'DR', role: 'Batsman' },
      { studentId: 7, name: 'Mohan K', avatar: 'MK', role: 'Allrounder' },
    ]
  },
  {
    id: 3, title: 'Inter-Academy: SAM vs Thunder CC', type: 'Inter-Academy', format: 'T20',
    date: '6 Apr 2026', time: '9:00 AM', venue: 'Corporation Ground, Coimbatore',
    status: 'teams-announced',
    matchFee: 500, feeNote: 'Transport + lunch included',
    createdBy: 'Venkat', createdAt: '15 Mar 2026',
    eligibility: 'Selected Players Only',
    maxPlayers: 15,
    responses: [
      { studentId: 2, name: 'Arun Prakash', avatar: 'AP', role: 'Allrounder', response: 'available', feePaid: true, team: 'A' },
      { studentId: 3, name: 'Karthik M', avatar: 'KM', role: 'Bowler (Fast)', response: 'available', feePaid: true, team: 'A' },
      { studentId: 10, name: 'Harish G', avatar: 'HG', role: 'Bowler (Fast)', response: 'available', feePaid: false, team: 'A' },
      { studentId: 1, name: 'Ravi Kumar', avatar: 'RK', role: 'Batsman', response: 'available', feePaid: true, team: 'A' },
      { studentId: 7, name: 'Mohan K', avatar: 'MK', role: 'Allrounder', response: 'available', feePaid: true, team: 'A' },
    ],
    pendingResponse: []
  }
];

// --- Support Tickets ---
const supportTickets = [
  { id: 'TK-001', subject: 'Cannot upload student photos', category: 'Technical Issue', priority: 'High', status: 'Open', created: '14 Mar 2026', lastUpdate: '15 Mar 2026', description: 'When trying to upload photos from the student profile page, the upload fails with an error message.', messages: [
    { from: 'Venkat', role: 'Academy Owner', time: '14 Mar, 10:30 AM', text: 'Getting an error when uploading student photos. Tried on multiple devices.' },
    { from: 'Support Team', role: 'Soruban Support', time: '15 Mar, 9:00 AM', text: 'We are investigating this issue. Could you share a screenshot of the error?' }
  ]},
  { id: 'TK-002', subject: 'Need help with batch scheduling', category: 'How-to', priority: 'Low', status: 'Resolved', created: '10 Mar 2026', lastUpdate: '11 Mar 2026', description: 'How to set up recurring batch schedules for weekends?', messages: [
    { from: 'Venkat', role: 'Academy Owner', time: '10 Mar, 2:00 PM', text: 'How do I set up weekend batches with different timings?' },
    { from: 'Support Team', role: 'Soruban Support', time: '11 Mar, 10:00 AM', text: 'Go to Batches > Create Batch > Select days as Sat-Sun and set your preferred timing. You can also set different timings for each day.' },
    { from: 'Venkat', role: 'Academy Owner', time: '11 Mar, 11:30 AM', text: 'Got it, thanks!' }
  ]},
  { id: 'TK-003', subject: 'Fee report not showing correct totals', category: 'Bug Report', priority: 'Medium', status: 'In Progress', created: '12 Mar 2026', lastUpdate: '14 Mar 2026', description: 'The fee management report shows incorrect totals for February.', messages: [
    { from: 'Coach Ravi', role: 'Head Coach', time: '12 Mar, 4:00 PM', text: 'February fee report total doesn\'t match individual student payments.' },
    { from: 'Support Team', role: 'Soruban Support', time: '13 Mar, 11:00 AM', text: 'Thanks for reporting. We\'ve identified the issue - it\'s related to partial payments not being included in the summary. Fix is being deployed.' }
  ]}
];

let selectedTicketId = 'TK-001';

let selectedMatchId = 1;

// --- Curriculum ---
const curriculum = [
  {
    stage: 1, name: 'Foundation', skills: [
      { name: 'Grip & Stance', checked: true, video: true },
      { name: 'Forward Defense', checked: true, video: true },
      { name: 'Straight Drive', checked: true, video: true },
      { name: 'Basic Bowling Action', checked: true, video: false },
      { name: 'Catching (High & Low)', checked: true, video: true },
      { name: 'Ground Fielding', checked: true, video: false },
      { name: 'Running Between Wickets', checked: false, video: false }
    ]
  },
  {
    stage: 2, name: 'Developing', skills: [
      { name: 'Cut Shot', checked: true, video: true },
      { name: 'Pull Shot', checked: true, video: true },
      { name: 'Off Drive', checked: true, video: false },
      { name: 'Seam Bowling', checked: true, video: true },
      { name: 'Spin Basics', checked: true, video: true },
      { name: 'Wicketkeeping Basics', checked: false, video: false },
      { name: 'Match Awareness', checked: true, video: false }
    ]
  },
  {
    stage: 3, name: 'Intermediate', skills: [
      { name: 'Sweep & Reverse Sweep', checked: true, video: true },
      { name: 'Lofted Shots', checked: true, video: false },
      { name: 'Pace Variations', checked: true, video: true },
      { name: 'Flight & Turn (Spin)', checked: true, video: true },
      { name: 'Slip Catching', checked: true, video: false },
      { name: 'Game Strategy', checked: true, video: false },
      { name: 'Pressure Situations', checked: false, video: false }
    ]
  },
  {
    stage: 4, name: 'Advanced', skills: [
      { name: 'Switch Hit', checked: true, video: true },
      { name: 'Scoop & Ramp', checked: true, video: true },
      { name: 'Reverse Swing', checked: true, video: false },
      { name: 'Death Bowling', checked: true, video: true },
      { name: 'Captaincy & Leadership', checked: true, video: false },
      { name: 'Mental Conditioning', checked: false, video: false },
      { name: 'Tournament Readiness', checked: false, video: false }
    ]
  }
];

// --- Notifications ---
const notifications = [
  { id: 1, type: 'admission', icon: 'fa-user-plus', color: '#4F46E5', title: 'New Admission Request', desc: 'Dhruv Patel applied for Morning U-12 batch', time: '2h ago', unread: true },
  { id: 2, type: 'fee', icon: 'fa-rupee-sign', color: '#10b981', title: 'Fee Received', desc: 'Mohan K paid ₹3,500 for March', time: '4h ago', unread: true },
  { id: 3, type: 'score', icon: 'fa-star', color: '#F59E0B', title: 'Score Submitted', desc: 'Coach Ravi scored Ravi Kumar on Cut Shot: 12/15', time: '6h ago', unread: false },
  { id: 4, type: 'promotion', icon: 'fa-arrow-up', color: '#059669', title: 'Promotion Eligible', desc: 'Arun Prakash is ready for Stage 3 promotion', time: '1d ago', unread: false },
  { id: 5, type: 'comment', icon: 'fa-comment', color: '#3B82F6', title: 'New Comment', desc: 'Coach Priya commented on your tournament post', time: '1d ago', unread: false },
  { id: 6, type: 'admission', icon: 'fa-user-plus', color: '#4F46E5', title: 'New Admission Request', desc: 'Sneha R applied for Evening U-14 batch', time: '2d ago', unread: false }
];

// --- Chat Data ---
const chatChannels = [
  { id: 'all-staff', name: 'All Staff', type: 'group', lastMessage: 'Coach Ravi: Tournament schedule finalized', time: '10m ago', unread: 3, avatar: 'AS' },
  { id: 'coaches', name: 'Coaches Only', type: 'group', lastMessage: 'Coach Priya: Arun Prakash promotion review?', time: '1h ago', unread: 1, avatar: 'CO' },
  { id: 'ravi', name: 'Coach Ravi', type: 'direct', lastMessage: 'I will handle the evening session today', time: '3h ago', unread: 0, avatar: 'R' },
  { id: 'priya', name: 'Coach Priya', type: 'direct', lastMessage: 'Morning batch fitness tests done', time: '5h ago', unread: 0, avatar: 'P' },
  { id: 'kumar', name: 'Kumar', type: 'direct', lastMessage: 'New ball set received from supplier', time: '1d ago', unread: 0, avatar: 'K' }
];

const chatMessages = [
  { sender: 'Coach Ravi', text: 'Sir, tournament schedule has been finalized. Dates are March 28-30.', time: '10:15 AM', sent: false },
  { sender: 'You', text: 'Great! Which students are we selecting for the team?', time: '10:18 AM', sent: true },
  { sender: 'Coach Ravi', text: 'I recommend Ravi Kumar, Arun Prakash, Karthik M, and Mohan K from our academy. They have the best scores.', time: '10:20 AM', sent: false },
  { sender: 'You', text: 'Sounds good. Let\'s confirm with parents this week. Also check their fee status.', time: '10:22 AM', sent: true },
  { sender: 'Coach Ravi', text: 'Will do. Karthik has pending fees though — should we still include him?', time: '10:25 AM', sent: false }
];

// --- Track State ---
let selectedStudentId = 1;
let selectedBatchFilter = 'all';
let attendanceState = {};

// Initialize attendance state for all students
students.forEach(s => { attendanceState[s.id] = 'none'; });

// --- Screen Definitions ---
const screens = {};

// ============================================
// 1. SPLASH SCREEN
// ============================================
screens['splash'] = () => `
  <div class="login-bg screen-enter" onclick="navigateTo('login')" style="cursor:pointer;">
    <div class="login-logo float" style="width:90px;height:90px;font-size:40px;">
      <i class="fas fa-cricket-bat-ball"></i>
    </div>
    <div class="login-title" style="font-size:28px;letter-spacing:2px;">SORUBAN SPORTS</div>
    <div class="login-subtitle" style="font-size:16px;margin-bottom:8px;">Academy Management</div>
    <p style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:40px;">Tap anywhere to continue</p>
  </div>
`;

// ============================================
// 2. LOGIN SCREEN
// ============================================
screens['login'] = () => `
  <div class="login-bg screen-enter">
    <div class="login-logo float">
      <i class="fas fa-cricket-bat-ball"></i>
    </div>
    <div class="login-title">Soruban Sports</div>
    <div class="login-subtitle">Login as Academy Staff</div>
    <div style="width:100%;max-width:280px;">
      <div style="margin-bottom:16px;">
        <label style="font-size:13px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;text-align:left;">Mobile Number</label>
        <input type="tel" style="width:100%;padding:14px 16px;border-radius:12px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:16px;outline:none;backdrop-filter:blur(8px);box-sizing:border-box;" placeholder="+91 94432 78901" value="+91 94432 78901">
      </div>
      <button class="btn btn-full" style="background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;width:100%;" onclick="navigateTo('otp')">
        <i class="fas fa-paper-plane"></i> Get OTP
      </button>
      <p style="margin-top:20px;font-size:12px;color:rgba(255,255,255,0.5);">Academy Staff Access Only</p>
    </div>
  </div>
`;

// ============================================
// 3. OTP SCREEN
// ============================================
screens['otp'] = () => `
  <div class="login-bg screen-enter">
    <div class="login-logo" style="width:64px;height:64px;font-size:28px;">
      <i class="fas fa-shield-alt"></i>
    </div>
    <div class="login-title" style="font-size:20px;">Verify OTP</div>
    <div class="login-subtitle">Sent to +91 94432 78901</div>
    <div class="otp-inputs">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 0)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 1)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 2)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 3)">
    </div>
    <button class="btn btn-full otp-verify-btn" style="background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;width:100%;max-width:280px;" onclick="verifyOtp()">
      <i class="fas fa-check-circle"></i> Verify & Login
    </button>
    <p style="margin-top:16px;font-size:12px;color:rgba(255,255,255,0.5);cursor:pointer;" onclick="showToast('OTP resent!', 'success')">Didn't receive? <span style="text-decoration:underline;">Resend OTP</span></p>
  </div>
`;

// ============================================
// 4. SETUP WIZARD
// ============================================
screens['setup-wizard'] = () => `
  <div class="login-bg screen-enter" style="justify-content:flex-start;padding-top:60px;">
    <div class="wizard-step" style="width:100%;max-width:280px;">
      <div class="wizard-dot active"></div>
      <div class="wizard-dot"></div>
      <div class="wizard-dot"></div>
      <div class="wizard-dot"></div>
    </div>
    <div style="text-align:left;width:100%;max-width:280px;">
      <h3 style="color:#fff;font-size:20px;font-weight:700;margin-bottom:4px;">Setup Your Academy</h3>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin-bottom:24px;">Step 1 of 4 — Academy Details</p>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Academy Name</label>
        <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="SAM Cricket Academy">
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Academy Logo</label>
        <div style="width:64px;height:64px;border-radius:12px;border:2px dashed rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:24px;cursor:pointer;" onclick="showToast('Upload feature in full app', 'info')">
          <i class="fas fa-camera"></i>
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Description</label>
        <textarea style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;resize:none;height:60px;box-sizing:border-box;" placeholder="Describe your academy...">Professional cricket coaching for all ages in Coimbatore</textarea>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:8px;">Facilities</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;"><input type="checkbox" checked style="accent-color:#fff;"> Nets</label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;"><input type="checkbox" checked style="accent-color:#fff;"> Bowling Machine</label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;"><input type="checkbox" style="accent-color:#fff;"> Ground</label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;"><input type="checkbox" style="accent-color:#fff;"> Gym</label>
          <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#fff;cursor:pointer;"><input type="checkbox" checked style="accent-color:#fff;"> Video Analysis</label>
        </div>
      </div>

      <button class="btn btn-full" style="background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;width:100%;" onclick="navigateTo('setup-wizard-2')">
        Next <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
`;

screens['setup-wizard-2'] = () => `
  <div class="login-bg screen-enter" style="justify-content:flex-start;padding-top:60px;">
    <div class="wizard-step" style="width:100%;max-width:280px;">
      <div class="wizard-dot done"></div>
      <div class="wizard-dot active"></div>
      <div class="wizard-dot"></div>
      <div class="wizard-dot"></div>
    </div>
    <div style="text-align:left;width:100%;max-width:280px;">
      <h3 style="color:#fff;font-size:20px;font-weight:700;margin-bottom:4px;">Create First Batch</h3>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin-bottom:24px;">Step 2 of 4 — Batch Setup</p>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Batch Name</label>
        <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="Morning U-12">
      </div>

      <div style="display:flex;gap:10px;margin-bottom:14px;">
        <div style="flex:1;">
          <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Start Time</label>
          <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="6:00 AM">
        </div>
        <div style="flex:1;">
          <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">End Time</label>
          <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="8:00 AM">
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:8px;">Days</label>
        <div style="display:flex;gap:6px;">
          ${['M','T','W','T','F','S','S'].map((d, i) => `<div style="width:34px;height:34px;border-radius:50%;border:2px solid rgba(255,255,255,${i < 5 ? '0.9' : '0.3'});background:${i < 5 ? 'rgba(255,255,255,0.2)' : 'transparent'};display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600;cursor:pointer;">${d}</div>`).join('')}
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Max Students</label>
        <input type="number" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="25">
      </div>

      <div style="display:flex;gap:10px;">
        <button style="flex:1;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.4);background:transparent;color:#fff;font-weight:600;font-size:14px;cursor:pointer;" onclick="goBack()">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <button class="btn" style="flex:2;background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;" onclick="navigateTo('setup-wizard-3')">
          Next <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
`;

screens['setup-wizard-3'] = () => `
  <div class="login-bg screen-enter" style="justify-content:flex-start;padding-top:60px;">
    <div class="wizard-step" style="width:100%;max-width:280px;">
      <div class="wizard-dot done"></div>
      <div class="wizard-dot done"></div>
      <div class="wizard-dot active"></div>
      <div class="wizard-dot"></div>
    </div>
    <div style="text-align:left;width:100%;max-width:280px;">
      <h3 style="color:#fff;font-size:20px;font-weight:700;margin-bottom:4px;">Attendance Method</h3>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin-bottom:24px;">Step 3 of 4 — How will attendance work?</p>

      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
        <label style="display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.6);background:rgba(255,255,255,0.15);cursor:pointer;backdrop-filter:blur(8px);">
          <input type="radio" name="attendance" checked style="margin-top:2px;accent-color:#fff;">
          <div>
            <div style="color:#fff;font-weight:600;font-size:14px;">Staff Marks Attendance</div>
            <div style="color:rgba(255,255,255,0.65);font-size:12px;margin-top:2px;">Coach or support staff marks each student</div>
          </div>
        </label>
        <label style="display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.3);background:transparent;cursor:pointer;">
          <input type="radio" name="attendance" style="margin-top:2px;accent-color:#fff;">
          <div>
            <div style="color:#fff;font-weight:600;font-size:14px;">Student Self Check-in</div>
            <div style="color:rgba(255,255,255,0.65);font-size:12px;margin-top:2px;">Students mark their own attendance via QR</div>
          </div>
        </label>
        <label style="display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.3);background:transparent;cursor:pointer;">
          <input type="radio" name="attendance" style="margin-top:2px;accent-color:#fff;">
          <div>
            <div style="color:#fff;font-weight:600;font-size:14px;">Both (Staff + Student)</div>
            <div style="color:rgba(255,255,255,0.65);font-size:12px;margin-top:2px;">Students check in, staff verifies</div>
          </div>
        </label>
      </div>

      <div style="display:flex;gap:10px;">
        <button style="flex:1;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.4);background:transparent;color:#fff;font-weight:600;font-size:14px;cursor:pointer;" onclick="goBack()">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <button class="btn" style="flex:2;background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;" onclick="navigateTo('setup-wizard-4')">
          Next <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
`;

screens['setup-wizard-4'] = () => `
  <div class="login-bg screen-enter" style="justify-content:flex-start;padding-top:60px;">
    <div class="wizard-step" style="width:100%;max-width:280px;">
      <div class="wizard-dot done"></div>
      <div class="wizard-dot done"></div>
      <div class="wizard-dot done"></div>
      <div class="wizard-dot active"></div>
    </div>
    <div style="text-align:left;width:100%;max-width:280px;">
      <h3 style="color:#fff;font-size:20px;font-weight:700;margin-bottom:4px;">Fee Configuration</h3>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin-bottom:24px;">Step 4 of 4 — Set your monthly fee</p>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Monthly Fee Amount (₹)</label>
        <input type="number" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:18px;font-weight:700;outline:none;box-sizing:border-box;" value="3500">
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:6px;">Due Date (Day of month)</label>
        <input type="number" style="width:100%;padding:12px 14px;border-radius:10px;border:2px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:#fff;font-size:14px;outline:none;box-sizing:border-box;" value="5" min="1" max="28">
      </div>

      <div style="margin-bottom:24px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.8);display:block;margin-bottom:8px;">Payment Methods</label>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#fff;cursor:pointer;"><input type="checkbox" checked style="accent-color:#fff;"> Cash</label>
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#fff;cursor:pointer;"><input type="checkbox" checked style="accent-color:#fff;"> UPI / Online</label>
          <label style="display:flex;align-items:center;gap:8px;font-size:13px;color:#fff;cursor:pointer;"><input type="checkbox" style="accent-color:#fff;"> Bank Transfer</label>
        </div>
      </div>

      <div style="display:flex;gap:10px;">
        <button style="flex:1;padding:14px;border-radius:12px;border:2px solid rgba(255,255,255,0.4);background:transparent;color:#fff;font-weight:600;font-size:14px;cursor:pointer;" onclick="goBack()">
          <i class="fas fa-arrow-left"></i> Back
        </button>
        <button class="btn" style="flex:2;background:#fff;color:var(--accent);font-weight:700;padding:14px;font-size:15px;border-radius:12px;border:none;cursor:pointer;" onclick="completeSetup()">
          <i class="fas fa-check-circle"></i> Finish Setup
        </button>
      </div>
    </div>
  </div>
`;

// ============================================
// 5. HOME SCREEN
// ============================================
screens['home'] = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return `
    <div class="screen-pad screen-enter">
      <!-- Greeting -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
        <div>
          <h3 style="font-size:var(--font-size-xl);font-weight:800;">${greeting},</h3>
          <p style="font-size:var(--font-size-lg);font-weight:700;color:var(--accent);margin-top:2px;">${academy.owner}</p>
          <p style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">
            <i class="fas fa-cricket-bat-ball" style="color:var(--accent);"></i> ${academy.name}, ${academy.city}
          </p>
        </div>
        <div style="display:flex;gap:8px;">
          <button style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;" onclick="navigateTo('notifications')">
            <i class="fas fa-bell" style="font-size:14px;color:var(--text-secondary);"></i>
            <span style="position:absolute;top:-2px;right:-2px;width:16px;height:16px;border-radius:50%;background:var(--danger);color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;">2</span>
          </button>
        </div>
      </div>

      <!-- Hero Card -->
      <div class="hero-card fade-in-up fade-in-up-1">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
          <div>
            <div style="font-size:var(--font-size-xs);opacity:0.85;">Total Students</div>
            <div style="font-family:var(--font-display);font-size:32px;font-weight:800;">${academy.totalStudents}</div>
          </div>
          <div style="padding:6px 12px;background:rgba(255,255,255,0.2);border-radius:20px;font-size:11px;font-weight:600;">
            <i class="fas fa-calendar-day"></i> ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
          </div>
        </div>
        <div class="stat-row">
          <div style="flex:1;text-align:center;">
            <div style="font-size:22px;font-weight:800;">${academy.presentToday}</div>
            <div style="font-size:11px;opacity:0.8;">Present Today</div>
          </div>
          <div style="width:1px;background:rgba(255,255,255,0.2);"></div>
          <div style="flex:1;text-align:center;">
            <div style="font-size:22px;font-weight:800;">₹${(academy.revenueCollected / 1000).toFixed(1)}K</div>
            <div style="font-size:11px;opacity:0.8;">Revenue</div>
          </div>
          <div style="width:1px;background:rgba(255,255,255,0.2);"></div>
          <div style="flex:1;text-align:center;">
            <div style="font-size:22px;font-weight:800;">${batches.length}</div>
            <div style="font-size:11px;opacity:0.8;">Batches</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="section-header fade-in-up fade-in-up-2">
        <span class="section-title">Quick Actions</span>
      </div>
      <div class="quick-actions fade-in-up fade-in-up-2">
        <div class="quick-action" onclick="navigateTo('attendance')">
          <i class="fas fa-clipboard-check"></i>
          <span>Mark Attendance</span>
        </div>
        <div class="quick-action" onclick="navigateTo('add-student')">
          <i class="fas fa-user-plus"></i>
          <span>Add Student</span>
        </div>
        <div class="quick-action" onclick="navigateTo('create-post')">
          <i class="fas fa-edit"></i>
          <span>Post to Feed</span>
        </div>
        <div class="quick-action" onclick="navigateTo('fee-management')">
          <i class="fas fa-rupee-sign"></i>
          <span>Record Payment</span>
        </div>
      </div>

      <!-- Needs Attention -->
      <div class="section-header fade-in-up fade-in-up-3">
        <span class="section-title">Needs Attention</span>
      </div>
      <div class="fade-in-up fade-in-up-3">
        <div class="alert-card" style="background:var(--accent-bg);" onclick="navigateTo('admissions')">
          <div class="alert-icon" style="background:var(--accent);color:#fff;">
            <i class="fas fa-user-plus"></i>
          </div>
          <div class="alert-text">
            <div class="alert-title">${academy.pendingAdmissions} Admission Requests</div>
            <div class="alert-sub">New students waiting for approval</div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>

        <div class="alert-card" style="background:var(--danger-bg);" onclick="navigateTo('fee-management')">
          <div class="alert-icon" style="background:var(--danger);color:#fff;">
            <i class="fas fa-rupee-sign"></i>
          </div>
          <div class="alert-text">
            <div class="alert-title">${academy.feesDue} Fees Due</div>
            <div class="alert-sub">₹${(academy.revenuePending / 1000).toFixed(0)}K pending collection</div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>

        <div class="alert-card" style="background:var(--success-bg);" onclick="navigateTo('promote-student')">
          <div class="alert-icon" style="background:var(--success);color:#fff;">
            <i class="fas fa-arrow-up"></i>
          </div>
          <div class="alert-text">
            <div class="alert-title">${academy.promotionsReady} Promotions Ready</div>
            <div class="alert-sub">Students eligible for stage upgrade</div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="section-header fade-in-up fade-in-up-4" style="margin-top:24px;">
        <span class="section-title">Recent Activity</span>
        <span class="section-link" onclick="navigateTo('notifications')">View All</span>
      </div>
      <div class="fade-in-up fade-in-up-4" style="position:relative;padding-left:20px;">
        <div style="position:absolute;left:6px;top:4px;bottom:4px;width:2px;background:var(--border);border-radius:1px;"></div>

        <div style="position:relative;margin-bottom:16px;">
          <div style="position:absolute;left:-20px;top:2px;width:12px;height:12px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-primary);"></div>
          <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">Fee received from Mohan K</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">₹3,500 — Cash • 4h ago</div>
        </div>

        <div style="position:relative;margin-bottom:16px;">
          <div style="position:absolute;left:-20px;top:2px;width:12px;height:12px;border-radius:50%;background:var(--success);border:2px solid var(--bg-primary);"></div>
          <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">Arun Prakash cleared Stage 2</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">92% overall score • 1d ago</div>
        </div>

        <div style="position:relative;margin-bottom:16px;">
          <div style="position:absolute;left:-20px;top:2px;width:12px;height:12px;border-radius:50%;background:var(--warning);border:2px solid var(--bg-primary);"></div>
          <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">New admission: Dhruv Patel</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">Morning U-12 request • 2d ago</div>
        </div>

        <div style="position:relative;">
          <div style="position:absolute;left:-20px;top:2px;width:12px;height:12px;border-radius:50%;background:var(--info);border:2px solid var(--bg-primary);"></div>
          <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">Attendance submitted: Evening U-14</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">20/22 present • 2d ago</div>
        </div>
      </div>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 6. STUDENTS LIST
// ============================================
screens['students'] = () => {
  const filters = ['All', 'Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Batsman', 'Bowler', 'Fee Due'];

  let filteredStudents = [...students];
  if (selectedBatchFilter === 'Stage 1') filteredStudents = students.filter(s => s.stage === 1);
  else if (selectedBatchFilter === 'Stage 2') filteredStudents = students.filter(s => s.stage === 2);
  else if (selectedBatchFilter === 'Stage 3') filteredStudents = students.filter(s => s.stage === 3);
  else if (selectedBatchFilter === 'Stage 4') filteredStudents = students.filter(s => s.stage === 4);
  else if (selectedBatchFilter === 'Batsman') filteredStudents = students.filter(s => s.role.includes('Batsman'));
  else if (selectedBatchFilter === 'Bowler') filteredStudents = students.filter(s => s.role.includes('Bowler'));
  else if (selectedBatchFilter === 'Fee Due') filteredStudents = students.filter(s => !s.feePaid);

  let studentListHtml = '';
  filteredStudents.forEach(s => {
    const scoreColor = s.score >= 80 ? 'var(--success)' : s.score >= 60 ? 'var(--accent)' : s.score >= 40 ? 'var(--warning)' : 'var(--danger)';
    const feeBadge = s.feePaid
      ? '<span style="font-size:10px;color:var(--success);font-weight:600;">✅ Paid</span>'
      : '<span style="font-size:10px;color:var(--danger);font-weight:600;">🔴 Due</span>';

    studentListHtml += `
      <div class="student-item" onclick="viewStudent(${s.id})">
        <div class="student-avatar">${s.avatar}</div>
        <div class="student-info">
          <div class="student-name">${s.name}</div>
          <div class="student-meta">Stage ${s.stage} · ${s.role} · ${s.batch}</div>
        </div>
        <div class="student-trailing">
          <div class="student-score" style="color:${scoreColor};">${s.score}%</div>
          <div class="student-badge">${feeBadge}</div>
        </div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:var(--font-size-xl);font-weight:800;">Students</h3>
        <span style="font-size:var(--font-size-sm);color:var(--text-tertiary);">${academy.totalStudents} total</span>
      </div>

      <!-- Search -->
      <div style="position:relative;margin-bottom:12px;">
        <i class="fas fa-search" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-tertiary);font-size:14px;"></i>
        <input type="text" style="width:100%;padding:12px 14px 12px 40px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="Search students...">
      </div>

      <!-- Filter Chips -->
      <div class="filter-row" style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;">
        ${filters.map(f => `<div class="filter-chip ${(selectedBatchFilter === 'all' && f === 'All') || selectedBatchFilter === f ? 'active' : ''}" onclick="filterStudents('${f}');toggleFilter(this);">${f}</div>`).join('')}
      </div>

      <!-- Student List -->
      ${studentListHtml}

      ${filteredStudents.length === 0 ? '<div style="text-align:center;padding:32px 0;color:var(--text-tertiary);"><i class="fas fa-search" style="font-size:32px;margin-bottom:8px;display:block;"></i>No students found</div>' : ''}

      <!-- FAB -->
      <div style="position:fixed;bottom:90px;right:32px;width:52px;height:52px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-glow);cursor:pointer;font-size:20px;z-index:100;" onclick="navigateTo('add-student')">
        <i class="fas fa-plus"></i>
      </div>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 7. STUDENT DETAIL
// ============================================
screens['student-detail'] = () => {
  const s = students.find(st => st.id === selectedStudentId) || students[0];
  const scoreColor = s.score >= 80 ? 'var(--success)' : s.score >= 60 ? 'var(--accent)' : s.score >= 40 ? 'var(--warning)' : 'var(--danger)';

  const skillScores = [
    { name: 'Grip & Stance', score: s.stage >= 2 ? 14 : Math.round(s.score * 0.15) },
    { name: 'Forward Defense', score: s.stage >= 2 ? 13 : Math.round(s.score * 0.14) },
    { name: 'Straight Drive', score: s.stage >= 2 ? 12 : Math.round(s.score * 0.13) },
    { name: 'Cut Shot', score: Math.round(s.score * 0.12) },
    { name: 'Pull Shot', score: Math.round(s.score * 0.11) },
    { name: 'Bowling Action', score: Math.round(s.score * 0.10) }
  ];

  const notes = [
    { date: '14 Mar 2026', text: 'Showed good improvement in pull shot. Needs work on footwork against spin.' },
    { date: '10 Mar 2026', text: 'Attended extra net session. Bowling action getting more consistent.' },
    { date: '5 Mar 2026', text: 'Late to session — spoke with parent. Will monitor.' }
  ];

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;">Student Profile</h3>
      </div>

      <!-- Profile Card -->
      <div style="text-align:center;margin-bottom:20px;">
        <div class="student-avatar" style="width:64px;height:64px;font-size:22px;margin:0 auto 10px;">${s.avatar}</div>
        <h3 style="font-size:var(--font-size-xl);font-weight:800;">${s.name}</h3>
        <div style="display:flex;justify-content:center;gap:8px;margin-top:6px;flex-wrap:wrap;">
          <span style="font-size:11px;padding:4px 10px;background:var(--accent-bg);color:var(--accent);border-radius:20px;font-weight:600;">Stage ${s.stage}</span>
          <span style="font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border-radius:20px;font-weight:600;">${s.role}</span>
          <span style="font-size:11px;padding:4px 10px;background:var(--bg-tertiary);color:var(--text-secondary);border-radius:20px;font-weight:600;">${s.batch}</span>
        </div>
        <p style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:6px;">Joined ${s.joined}</p>
      </div>

      <!-- Stats Row -->
      <div class="stat-row" style="margin-bottom:16px;">
        <div class="stat-box">
          <div class="stat-val" style="color:${scoreColor};">${s.score}%</div>
          <div class="stat-lbl">Overall Score</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${s.attendance}%</div>
          <div class="stat-lbl">Attendance</div>
        </div>
        <div class="stat-box">
          <div class="stat-val" style="color:${s.feePaid ? 'var(--success)' : 'var(--danger)'};">${s.feePaid ? '✅' : '🔴'}</div>
          <div class="stat-lbl">Fee Status</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs-underline" style="display:flex;border-bottom:2px solid var(--border);margin-bottom:16px;">
        <div class="tab active" data-tab="progress" onclick="switchTab(this, 'student')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;border-bottom:2px solid var(--accent);margin-bottom:-2px;color:var(--accent);">Progress</div>
        <div class="tab" data-tab="attendance" onclick="switchTab(this, 'student')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);">Attendance</div>
        <div class="tab" data-tab="notes" onclick="switchTab(this, 'student')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);">Notes</div>
      </div>

      <!-- Progress Tab -->
      <div data-tab-content="student-progress">
        ${skillScores.map(sk => `
          <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">
            <div style="flex:1;">
              <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">${sk.name}</div>
              <div style="height:4px;background:var(--bg-tertiary);border-radius:2px;margin-top:6px;overflow:hidden;">
                <div style="height:100%;width:${(sk.score / 15) * 100}%;background:var(--accent);border-radius:2px;"></div>
              </div>
            </div>
            <span style="font-family:var(--font-display);font-weight:700;font-size:var(--font-size-sm);color:var(--accent);min-width:36px;text-align:right;">${sk.score}/15</span>
          </div>
        `).join('')}
      </div>

      <!-- Attendance Tab (hidden) -->
      <div data-tab-content="student-attendance" style="display:none;">
        <div style="text-align:center;margin-bottom:16px;">
          <div style="font-family:var(--font-display);font-size:48px;font-weight:800;color:var(--accent);">${s.attendance}%</div>
          <div style="font-size:var(--font-size-sm);color:var(--text-tertiary);">This month</div>
        </div>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:16px;">
          <div style="padding:10px 16px;background:var(--success-bg);border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:var(--success);">18</div>
            <div style="font-size:11px;color:var(--text-tertiary);">Present</div>
          </div>
          <div style="padding:10px 16px;background:var(--danger-bg);border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:var(--danger);">3</div>
            <div style="font-size:11px;color:var(--text-tertiary);">Absent</div>
          </div>
          <div style="padding:10px 16px;background:var(--warning-bg);border-radius:10px;text-align:center;">
            <div style="font-weight:700;color:var(--warning);">1</div>
            <div style="font-size:11px;color:var(--text-tertiary);">Late</div>
          </div>
        </div>
        <p style="font-size:var(--font-size-xs);color:var(--text-tertiary);text-align:center;">Detailed history available in full app</p>
      </div>

      <!-- Notes Tab (hidden) -->
      <div data-tab-content="student-notes" style="display:none;">
        ${notes.map(n => `
          <div style="padding:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;margin-bottom:8px;">
            <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-bottom:4px;"><i class="fas fa-calendar" style="margin-right:4px;"></i>${n.date}</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-primary);line-height:1.5;">${n.text}</div>
          </div>
        `).join('')}
        <button class="btn btn-outline btn-full" style="margin-top:8px;" onclick="showToast('Add note feature in full app', 'info')">
          <i class="fas fa-plus"></i> Add Note
        </button>
      </div>

      <!-- Quick Actions -->
      <div style="display:flex;gap:8px;margin-top:20px;">
        <button class="btn btn-primary" style="flex:1;font-size:13px;" onclick="navigateTo('score-skill')">
          <i class="fas fa-star"></i> Score Skill
        </button>
        <button class="btn btn-outline" style="flex:1;font-size:13px;" onclick="showToast('Note added!', 'success')">
          <i class="fas fa-sticky-note"></i> Add Note
        </button>
        ${s.promotionReady ? `<button class="btn" style="flex:1;font-size:13px;background:var(--success);color:#fff;border:none;border-radius:10px;cursor:pointer;" onclick="navigateTo('promote-student')"><i class="fas fa-arrow-up"></i> Promote</button>` : ''}
      </div>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 8. SCORE SKILL
// ============================================
screens['score-skill'] = () => {
  const s = students.find(st => st.id === selectedStudentId) || students[0];

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <div>
          <h3 style="font-size:var(--font-size-lg);font-weight:700;">Score: Cut Shot</h3>
          <p style="font-size:var(--font-size-xs);color:var(--text-tertiary);">${s.name} · Stage ${s.stage}</p>
        </div>
      </div>

      <!-- Drill Score -->
      <div class="score-section fade-in-up fade-in-up-1">
        <div class="score-section-title">Drill Score</div>
        <div class="score-section-sub">Mark out of 15 based on drill performance</div>
        <div class="score-slider">
          <input type="range" min="0" max="15" value="10" id="drillSlider" oninput="updateScoreDisplay()">
          <div class="score-value" id="drillValue">10/15</div>
        </div>
      </div>

      <!-- Coach Assessment -->
      <div class="score-section fade-in-up fade-in-up-2">
        <div class="score-section-title">Coach Assessment</div>
        <div class="score-section-sub">Your evaluation of technique and consistency (1-10)</div>
        <div class="score-slider">
          <input type="range" min="1" max="10" value="7" id="assessSlider" oninput="updateScoreDisplay()">
          <div class="score-value" id="assessValue">7/10</div>
        </div>
      </div>

      <!-- Coach Note -->
      <div class="score-section fade-in-up fade-in-up-3">
        <div class="score-section-title">Coach Notes</div>
        <div class="score-section-sub">Optional feedback for this skill</div>
        <textarea style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);font-size:14px;resize:none;height:80px;box-sizing:border-box;font-family:inherit;" placeholder="Good placement but needs better follow-through..."></textarea>
      </div>

      <!-- Calculated Score -->
      <div style="background:var(--accent-bg);border-radius:12px;padding:16px;text-align:center;margin-bottom:16px;" class="fade-in-up fade-in-up-4">
        <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-bottom:4px;">Weighted Total (60% Drill + 40% Assessment)</div>
        <div style="font-family:var(--font-display);font-size:36px;font-weight:800;color:var(--accent);" id="totalScore">68%</div>
        <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:4px;">Drill: 66.7% × 0.6 + Assessment: 70% × 0.4</div>
      </div>

      <!-- Warning -->
      <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;background:var(--warning-bg);border:1px solid var(--warning);border-radius:10px;margin-bottom:16px;font-size:var(--font-size-xs);color:var(--warning);font-weight:500;">
        <i class="fas fa-info-circle"></i>
        <span>Student and parent will be notified of this score</span>
      </div>

      <!-- Save Button -->
      <button class="btn btn-primary btn-full" style="padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Score saved for ${s.name}!', 'success');setTimeout(()=>goBack(),500);">
        <i class="fas fa-check-circle"></i> Save Score
      </button>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 9. ADD STUDENT
// ============================================
screens['add-student'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Add Student</h3>
    </div>

    <div class="fade-in-up fade-in-up-1">
      <div style="margin-bottom:14px;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Student Name</label>
        <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="Enter full name">
      </div>

      <div style="display:flex;gap:10px;margin-bottom:14px;">
        <div style="flex:1;">
          <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Age</label>
          <input type="number" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="10">
        </div>
        <div style="flex:1;">
          <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Phone</label>
          <input type="tel" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="+91...">
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Parent Name</label>
        <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="Parent / Guardian name">
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Parent Phone</label>
        <input type="tel" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="+91...">
      </div>

      <div style="display:flex;gap:10px;margin-bottom:14px;">
        <div style="flex:1;">
          <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Role</label>
          <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;-webkit-appearance:auto;">
            <option>Batsman</option>
            <option>Bowler (Fast)</option>
            <option>Bowler (Spin)</option>
            <option>Allrounder</option>
            <option>Wicketkeeper</option>
          </select>
        </div>
        <div style="flex:1;">
          <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Stage</label>
          <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;-webkit-appearance:auto;">
            <option>Stage 1 — Foundation</option>
            <option>Stage 2 — Developing</option>
            <option>Stage 3 — Intermediate</option>
            <option>Stage 4 — Advanced</option>
          </select>
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Batch</label>
        <select style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;-webkit-appearance:auto;">
          ${batches.map(b => `<option>${b.name} (${b.timing})</option>`).join('')}
        </select>
      </div>

      <button class="btn btn-primary btn-full" style="padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Student added successfully!', 'success');setTimeout(()=>navigateTo('students'),500);">
        <i class="fas fa-user-plus"></i> Add Student
      </button>
    </div>

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 10. PROMOTE STUDENT
// ============================================
screens['promote-student'] = () => {
  const promotable = students.filter(s => s.promotionReady);
  const s = promotable[0] || students[1]; // Default to Arun Prakash

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;">Stage Promotion</h3>
      </div>

      <!-- Student Info -->
      <div class="promotion-card fade-in-up fade-in-up-1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <div class="student-avatar" style="width:52px;height:52px;font-size:18px;">${s.avatar}</div>
          <div>
            <div style="font-size:var(--font-size-lg);font-weight:700;color:var(--text-primary);">${s.name}</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-secondary);">${s.role} · ${s.batch}</div>
          </div>
        </div>

        <div style="background:var(--success-bg);padding:12px;border-radius:10px;text-align:center;margin-bottom:12px;">
          <div style="font-size:var(--font-size-xs);color:var(--success);font-weight:600;">PROMOTE TO</div>
          <div style="font-family:var(--font-display);font-size:24px;font-weight:800;color:var(--success);">Stage ${s.stage + 1}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">From Stage ${s.stage} (${curriculum[s.stage - 1].name}) → Stage ${s.stage + 1} (${curriculum[s.stage].name})</div>
        </div>

        <!-- Readiness Checklist -->
        <div class="section-title" style="margin-bottom:8px;">Readiness Check</div>
        <div class="readiness-check">
          <div class="readiness-item">
            <i class="fas fa-check-circle" style="color:var(--success);"></i>
            <span>All Stage ${s.stage} skills passed (${s.score}%)</span>
          </div>
          <div class="readiness-item">
            <i class="fas fa-check-circle" style="color:var(--success);"></i>
            <span>Stage exam score: ${s.score}% (min 70%)</span>
          </div>
          <div class="readiness-item">
            <i class="fas fa-check-circle" style="color:var(--success);"></i>
            <span>Attendance: ${s.attendance}% (min 75%)</span>
          </div>
          <div class="readiness-item">
            <i class="fas fa-check-circle" style="color:var(--success);"></i>
            <span>Min 24 sessions completed (28 attended)</span>
          </div>
        </div>

        <!-- Overall Score -->
        <div style="text-align:center;padding:12px;background:var(--bg-tertiary);border-radius:10px;margin:12px 0;">
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Overall Score</div>
          <div style="font-family:var(--font-display);font-size:36px;font-weight:800;color:var(--accent);">${s.score}%</div>
        </div>

        <!-- Coach Remarks -->
        <div style="margin-bottom:16px;">
          <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Coach Remarks <span style="color:var(--danger);">*</span></label>
          <textarea style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);font-size:14px;resize:none;height:80px;box-sizing:border-box;font-family:inherit;" placeholder="Remarks about the student's readiness...">Excellent progress in all fundamental skills. Strong batting technique and consistent performance. Ready for intermediate-level drills.</textarea>
        </div>

        <!-- Actions -->
        <div style="display:flex;gap:10px;">
          <button class="btn btn-outline" style="flex:1;" onclick="showToast('Promotion put on hold', 'warning');goBack();">
            <i class="fas fa-pause"></i> Hold
          </button>
          <button class="btn btn-primary" style="flex:2;background:var(--success);border-color:var(--success);" onclick="showToast('${s.name} promoted to Stage ${s.stage + 1}!', 'success');setTimeout(()=>navigateTo('students'),500);">
            <i class="fas fa-arrow-up"></i> Approve Promotion
          </button>
        </div>
      </div>

      <!-- Other Promotable Students -->
      ${promotable.length > 1 ? `
        <div class="section-header" style="margin-top:20px;">
          <span class="section-title">Also Ready</span>
        </div>
        ${promotable.slice(1).map(ps => `
          <div class="student-item" onclick="selectedStudentId=${ps.id};navigateTo('promote-student');">
            <div class="student-avatar">${ps.avatar}</div>
            <div class="student-info">
              <div class="student-name">${ps.name}</div>
              <div class="student-meta">Stage ${ps.stage} → ${ps.stage + 1} · ${ps.score}%</div>
            </div>
            <i class="fas fa-chevron-right" style="color:var(--text-tertiary);"></i>
          </div>
        `).join('')}
      ` : ''}

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 11. ATTENDANCE
// ============================================
screens['attendance'] = () => {
  const batchFilters = ['All', ...batches.map(b => b.name)];
  let filteredStudents = [...students];
  if (selectedBatchFilter !== 'all' && selectedBatchFilter !== 'All') {
    filteredStudents = students.filter(s => s.batch === selectedBatchFilter);
  }

  const presentCount = Object.values(attendanceState).filter(v => v === 'present').length;
  const absentCount = Object.values(attendanceState).filter(v => v === 'absent').length;
  const lateCount = Object.values(attendanceState).filter(v => v === 'late').length;

  let attHtml = '';
  filteredStudents.forEach(s => {
    const state = attendanceState[s.id] || 'none';
    attHtml += `
      <div class="att-row">
        <div class="att-avatar">${s.avatar}</div>
        <div class="att-name">${s.name}</div>
        <div class="att-btn ${state === 'present' ? 'present' : ''}" onclick="markAtt(${s.id}, 'present')"><i class="fas fa-check"></i></div>
        <div class="att-btn ${state === 'absent' ? 'absent' : ''}" onclick="markAtt(${s.id}, 'absent')"><i class="fas fa-times"></i></div>
        <div class="att-btn ${state === 'late' ? 'late' : ''}" onclick="markAtt(${s.id}, 'late')"><i class="fas fa-clock"></i></div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h3 style="font-size:var(--font-size-xl);font-weight:800;">Attendance</h3>
        <span style="font-size:var(--font-size-xs);color:var(--text-tertiary);background:var(--bg-tertiary);padding:4px 10px;border-radius:20px;">
          <i class="fas fa-calendar-day"></i> ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
        </span>
      </div>

      <!-- Batch Selector -->
      <div class="filter-row" style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;">
        ${batchFilters.map(f => `<div class="filter-chip ${f === 'All' ? 'active' : ''}" onclick="selectedBatchFilter='${f}';toggleFilter(this);navigateTo('attendance');screenHistory.pop();">${f}</div>`).join('')}
      </div>

      <!-- All Present Button -->
      <button class="btn btn-outline btn-full" style="margin-bottom:12px;font-size:13px;" onclick="markAllPresent()">
        <i class="fas fa-check-double"></i> Mark All Present
      </button>

      <!-- Offline Banner (demo) -->
      <!--<div class="offline-banner"><i class="fas fa-wifi-slash"></i> You're offline — attendance will sync when connected</div>-->

      <!-- Attendance Grid -->
      <div class="att-grid">
        ${attHtml}
      </div>

      <!-- Summary -->
      <div style="display:flex;gap:8px;margin-top:16px;">
        <div style="flex:1;text-align:center;padding:10px;background:var(--success-bg);border-radius:10px;">
          <div style="font-weight:700;color:var(--success);font-size:18px;">${presentCount}</div>
          <div style="font-size:11px;color:var(--text-tertiary);">Present</div>
        </div>
        <div style="flex:1;text-align:center;padding:10px;background:var(--danger-bg);border-radius:10px;">
          <div style="font-weight:700;color:var(--danger);font-size:18px;">${absentCount}</div>
          <div style="font-size:11px;color:var(--text-tertiary);">Absent</div>
        </div>
        <div style="flex:1;text-align:center;padding:10px;background:var(--warning-bg);border-radius:10px;">
          <div style="font-weight:700;color:var(--warning);font-size:18px;">${lateCount}</div>
          <div style="font-size:11px;color:var(--text-tertiary);">Late</div>
        </div>
      </div>

      <!-- Submit -->
      <button class="btn btn-primary btn-full" style="margin-top:16px;padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Attendance submitted successfully!', 'success');">
        <i class="fas fa-paper-plane"></i> Submit Attendance
      </button>

      <div style="text-align:center;margin-top:12px;">
        <span style="font-size:var(--font-size-xs);color:var(--accent);cursor:pointer;font-weight:600;" onclick="navigateTo('attendance-report')">
          <i class="fas fa-chart-bar"></i> View Monthly Report
        </span>
      </div>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 12. ATTENDANCE REPORT
// ============================================
screens['attendance-report'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Attendance Report</h3>
    </div>

    <!-- Month Selector -->
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:20px;">
      <i class="fas fa-chevron-left" style="color:var(--text-tertiary);cursor:pointer;"></i>
      <span style="font-weight:700;font-size:var(--font-size-lg);color:var(--text-primary);">March 2026</span>
      <i class="fas fa-chevron-right" style="color:var(--text-tertiary);cursor:pointer;"></i>
    </div>

    <!-- Overview Card -->
    <div class="hero-card fade-in-up fade-in-up-1" style="text-align:center;margin-bottom:20px;">
      <div style="font-size:var(--font-size-xs);opacity:0.85;">Average Attendance</div>
      <div style="font-family:var(--font-display);font-size:48px;font-weight:800;">78%</div>
      <div style="font-size:var(--font-size-xs);opacity:0.7;">Across all batches · 16 sessions this month</div>
    </div>

    <!-- Batch Breakdown -->
    <div class="section-title" style="margin-bottom:12px;">Batch Breakdown</div>
    ${batches.map((b, i) => {
      const pct = [85, 76, 72][i];
      return `
        <div style="padding:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;margin-bottom:8px;" class="fade-in-up fade-in-up-${i + 2}">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
            <div>
              <div style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);">${b.name}</div>
              <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">${b.students} students · ${b.timing}</div>
            </div>
            <span style="font-family:var(--font-display);font-weight:700;font-size:var(--font-size-lg);color:${pct >= 80 ? 'var(--success)' : pct >= 70 ? 'var(--warning)' : 'var(--danger)'};">${pct}%</span>
          </div>
          <div style="height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
            <div style="height:100%;width:${pct}%;background:${pct >= 80 ? 'var(--success)' : pct >= 70 ? 'var(--warning)' : 'var(--danger)'};border-radius:3px;transition:width 0.5s;"></div>
          </div>
        </div>
      `;
    }).join('')}

    <!-- Low Attendance Alerts -->
    <div class="section-title" style="margin-top:20px;margin-bottom:12px;">
      <i class="fas fa-exclamation-triangle" style="color:var(--danger);"></i> Low Attendance (&lt;65%)
    </div>
    ${students.filter(s => s.attendance < 65).map(s => `
      <div class="alert-card" style="background:var(--danger-bg);" onclick="viewStudent(${s.id})">
        <div class="alert-icon" style="background:var(--danger);color:#fff;">
          <span style="font-size:10px;font-weight:700;">${s.avatar}</span>
        </div>
        <div class="alert-text">
          <div class="alert-title">${s.name}</div>
          <div class="alert-sub">${s.attendance}% attendance · ${s.batch}</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
    `).join('')}
    ${students.filter(s => s.attendance < 65).length === 0 ? '<p style="font-size:var(--font-size-sm);color:var(--text-tertiary);text-align:center;padding:12px;">No students below 65% attendance</p>' : ''}

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 13. FEED
// ============================================
screens['feed'] = () => {
  let postsHtml = '';
  feedPosts.forEach((p, i) => {
    const visColor = p.visibility === 'Public' ? 'var(--success)' : p.visibility === 'Staff' ? 'var(--warning)' : 'var(--accent)';
    postsHtml += `
      <div class="feed-post fade-in-up fade-in-up-${Math.min(i + 1, 5)}">
        <div class="feed-post-header">
          <div class="feed-post-avatar">${p.avatar}</div>
          <div style="flex:1;">
            <div class="feed-post-name">${p.author}</div>
            <div class="feed-post-time">${p.time} · <span style="color:${visColor};font-weight:600;">${p.visibility}</span></div>
          </div>
          <i class="fas fa-ellipsis-v" style="color:var(--text-tertiary);cursor:pointer;" onclick="showToast('Post options', 'info')"></i>
        </div>
        <div class="feed-post-body">${p.body}</div>
        ${p.image ? `
          <div class="feed-post-image">
            <i class="fas ${p.imageIcon || 'fa-image'}"></i>
          </div>
        ` : ''}
        <div class="feed-post-actions">
          <button class="feed-action" onclick="showToast('Liked!', 'success')"><i class="fas fa-heart"></i> ${p.likes}</button>
          <button class="feed-action"><i class="fas fa-comment"></i> ${p.comments}</button>
          <button class="feed-action" onclick="showToast('Shared!', 'info')"><i class="fas fa-share"></i> Share</button>
        </div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:var(--font-size-xl);font-weight:800;">Feed</h3>
      </div>

      <!-- Create Post Button -->
      <div style="padding:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;margin-bottom:16px;display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="navigateTo('create-post')">
        <div class="student-avatar" style="width:38px;height:38px;font-size:14px;">SK</div>
        <span style="font-size:var(--font-size-sm);color:var(--text-tertiary);flex:1;">Share an update with your academy...</span>
        <i class="fas fa-pen" style="color:var(--accent);"></i>
      </div>

      ${postsHtml}

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 14. CREATE POST
// ============================================
screens['create-post'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Create Post</h3>
    </div>

    <!-- Visibility -->
    <div style="margin-bottom:16px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:8px;">Who can see this?</label>
      <div class="filter-row" style="display:flex;gap:6px;">
        <div class="filter-chip active" onclick="toggleFilter(this)"><i class="fas fa-globe"></i> Public</div>
        <div class="filter-chip" onclick="toggleFilter(this)"><i class="fas fa-school"></i> Academy</div>
        <div class="filter-chip" onclick="toggleFilter(this)"><i class="fas fa-users"></i> Batch</div>
        <div class="filter-chip" onclick="toggleFilter(this)"><i class="fas fa-lock"></i> Staff Only</div>
      </div>
    </div>

    <!-- Content -->
    <div style="margin-bottom:16px;">
      <textarea style="width:100%;padding:14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:15px;resize:none;height:140px;box-sizing:border-box;font-family:inherit;line-height:1.5;" placeholder="What's happening at your academy?"></textarea>
    </div>

    <!-- Media Buttons -->
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <button style="flex:1;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:var(--text-secondary);cursor:pointer;" onclick="showToast('Camera opened', 'info')">
        <i class="fas fa-camera" style="color:var(--accent);"></i> Photo
      </button>
      <button style="flex:1;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:var(--text-secondary);cursor:pointer;" onclick="showToast('Video feature coming soon', 'info')">
        <i class="fas fa-video" style="color:var(--danger);"></i> Video
      </button>
      <button style="flex:1;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:var(--text-secondary);cursor:pointer;" onclick="showToast('Poll feature coming soon', 'info')">
        <i class="fas fa-poll" style="color:var(--warning);"></i> Poll
      </button>
      <button style="flex:1;padding:10px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:var(--text-secondary);cursor:pointer;" onclick="navigateTo('create-match')">
        <i class="fas fa-cricket-bat-ball" style="color:var(--success);"></i> Match
      </button>
    </div>

    <!-- Tag Students -->
    <div style="margin-bottom:20px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Tag Students</label>
      <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="Search students to tag...">
    </div>

    <!-- Post Button -->
    <button class="btn btn-primary btn-full" style="padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Post published!', 'success');setTimeout(()=>navigateTo('feed'),500);">
      <i class="fas fa-paper-plane"></i> Post
    </button>

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 15. MORE MENU
// ============================================
screens['more'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Academy Header -->
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:6px;">
      <div class="student-avatar" style="width:52px;height:52px;font-size:20px;">SK</div>
      <div>
        <h3 style="font-size:var(--font-size-lg);font-weight:800;">${academy.name}</h3>
        <p style="font-size:var(--font-size-xs);color:var(--text-secondary);">${academy.city} · ${academy.owner}</p>
      </div>
    </div>
    <div style="display:inline-block;font-size:11px;padding:4px 10px;background:var(--warning-bg);color:var(--warning);border-radius:20px;font-weight:600;margin-bottom:20px;">
      <i class="fas fa-clock"></i> Trial: ${academy.trialDaysLeft} days left
    </div>

    <!-- Matches -->
    <div class="section-title" style="margin-bottom:10px;margin-top:4px;">Matches & Events</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('matches')" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--success-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-cricket-bat-ball" style="color:var(--success);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Matches</div><div style="font-size:11px;color:var(--text-tertiary);">Organize, availability, fee collection</div></div>
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="chat-unread">${matches.filter(m => m.status === 'collecting-availability').length}</div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>
      </div>
    </div>

    <!-- Academy Management -->
    <div class="section-title" style="margin-bottom:10px;">Academy Management</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('curriculum')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-book" style="color:var(--accent);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Curriculum Builder</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="navigateTo('staff-management')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--info-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-user-shield" style="color:var(--info);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Staff Management</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="showToast('Batch management in full app', 'info')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--success-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-layer-group" style="color:var(--success);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Batches</div></div>
        <span style="font-size:12px;color:var(--text-tertiary);">${batches.length}</span>
      </div>
      <div class="chat-item" onclick="navigateTo('admissions')" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--warning-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-user-plus" style="color:var(--warning);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Admissions</div></div>
        <div class="chat-unread">${academy.pendingAdmissions}</div>
      </div>
    </div>

    <!-- Finance -->
    <div class="section-title" style="margin-bottom:10px;">Finance</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('fee-management')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--success-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-rupee-sign" style="color:var(--success);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Fee Management</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="showToast('Revenue dashboard in full app', 'info')" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-chart-line" style="color:var(--accent);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Revenue Dashboard</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
    </div>

    <!-- Communication -->
    <div class="section-title" style="margin-bottom:10px;">Communication</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('staff-chat')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--info-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-comments" style="color:var(--info);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Staff Chat</div></div>
        <div class="chat-unread">4</div>
      </div>
      <div class="chat-item" onclick="showToast('Notification composer in full app', 'info')" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--warning-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-bell" style="color:var(--warning);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Send Notification</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
    </div>

    <!-- Settings -->
    <div class="section-title" style="margin-bottom:10px;">Settings</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('settings')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;"><i class="fas fa-cog" style="color:var(--text-secondary);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Academy Settings</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="showToast('Attendance config in settings', 'info')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;"><i class="fas fa-clipboard-check" style="color:var(--text-secondary);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Attendance Config</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="showToast('Billing page in full app', 'info')" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--warning-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-credit-card" style="color:var(--warning);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Subscription & Billing</div></div>
        <span style="font-size:11px;padding:2px 8px;background:var(--warning-bg);color:var(--warning);border-radius:10px;font-weight:600;">Trial</span>
      </div>
    </div>

    <!-- Support -->
    <div class="section-title" style="margin-bottom:10px;">Support</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin-bottom:16px;">
      <div class="chat-item" onclick="navigateTo('support-tickets')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--accent-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-headset" style="color:var(--accent);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Technical Support</div><div style="font-size:11px;color:var(--text-tertiary);">Raise & track support tickets</div></div>
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="chat-unread">${supportTickets.filter(t => t.status !== 'Resolved').length}</div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>
      </div>
      <div class="chat-item" onclick="showToast('Help center opening...', 'info')">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;"><i class="fas fa-question-circle" style="color:var(--text-secondary);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;">Help & FAQ</div></div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
      </div>
      <div class="chat-item" onclick="showModal('Logout', 'Are you sure you want to log out of the Academy Staff App?', [{label: 'Cancel', class: 'btn-ghost', onclick: 'closeModal()'}, {label: 'Logout', class: 'btn-primary', onclick: 'closeModal();navigateTo(\\\'splash\\\')'}])" style="border-bottom:none;">
        <div style="width:36px;height:36px;border-radius:10px;background:var(--danger-bg);display:flex;align-items:center;justify-content:center;"><i class="fas fa-sign-out-alt" style="color:var(--danger);font-size:14px;"></i></div>
        <div class="chat-info"><div class="chat-name" style="font-size:14px;color:var(--danger);">Logout</div></div>
      </div>
    </div>

    <div style="text-align:center;margin-top:8px;margin-bottom:24px;">
      <p style="font-size:11px;color:var(--text-tertiary);">Soruban Sports v1.0.0</p>
    </div>
  </div>
`;

// ============================================
// 16. CURRICULUM BUILDER
// ============================================
screens['curriculum'] = () => {
  let stagesHtml = '';
  curriculum.forEach((stage, si) => {
    const isExpanded = si === 0;
    stagesHtml += `
      <div class="curriculum-stage fade-in-up fade-in-up-${Math.min(si + 1, 5)}">
        <div class="curriculum-stage-header" onclick="this.parentElement.querySelector('.curriculum-stage-body').style.display=this.parentElement.querySelector('.curriculum-stage-body').style.display==='none'?'':'none';">
          <div class="stage-toggle"><i class="fas fa-check"></i></div>
          <div class="stage-name">Stage ${stage.stage}: ${stage.name}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-right:6px;">${stage.skills.length} skills</div>
          <i class="fas fa-chevron-down stage-chevron"></i>
        </div>
        <div class="curriculum-stage-body" style="${isExpanded ? '' : 'display:none;'}">
          ${stage.skills.map(sk => `
            <div class="curriculum-skill">
              <div class="skill-check ${sk.checked ? '' : 'unchecked'}" onclick="this.classList.toggle('unchecked')"><i class="fas fa-check"></i></div>
              <div class="skill-label">${sk.name}</div>
              ${sk.video ? '<i class="fas fa-play-circle skill-video-icon"></i>' : ''}
            </div>
          `).join('')}
          <button style="width:100%;padding:10px;margin-top:8px;border:1px dashed var(--border);border-radius:8px;background:transparent;color:var(--accent);font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;" onclick="showToast('Custom skill editor in full app', 'info')">
            <i class="fas fa-plus"></i> Add Custom Skill
          </button>
        </div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;">Curriculum Builder</h3>
      </div>

      <p style="font-size:var(--font-size-sm);color:var(--text-tertiary);margin-bottom:16px;">
        Customize skills for each stage. <i class="fas fa-play-circle" style="color:var(--accent);"></i> indicates Soruban platform video content available.
      </p>

      ${stagesHtml}

      <button class="btn btn-primary btn-full" style="margin-top:16px;padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Curriculum saved!', 'success');">
        <i class="fas fa-save"></i> Save Curriculum
      </button>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 17. FEE MANAGEMENT
// ============================================
screens['fee-management'] = () => {
  const pendingStudents = students.filter(s => !s.feePaid);
  const totalPendingMonths = pendingStudents.reduce((sum, s) => sum + (s.pendingMonths ? s.pendingMonths.length : 1), 0);

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;">Fee Management</h3>
      </div>

      <!-- Stats -->
      <div class="stat-row fade-in-up fade-in-up-1" style="margin-bottom:16px;">
        <div class="stat-box" style="border-color:var(--success);">
          <div class="stat-val" style="color:var(--success);">₹${(academy.revenueCollected / 1000).toFixed(1)}K</div>
          <div class="stat-lbl">Collected</div>
        </div>
        <div class="stat-box" style="border-color:var(--danger);">
          <div class="stat-val" style="color:var(--danger);">₹${(academy.revenuePending / 1000).toFixed(0)}K</div>
          <div class="stat-lbl">Pending</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">₹${((academy.revenueCollected + academy.revenuePending) / 1000).toFixed(1)}K</div>
          <div class="stat-lbl">Total</div>
        </div>
      </div>

      <!-- Month Filter -->
      <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;" class="filter-row">
        <div class="filter-chip active" onclick="toggleFilter(this)">All Months</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Jan 2026</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Feb 2026</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Mar 2026</div>
      </div>

      <!-- Send All Reminder -->
      <button class="btn btn-outline btn-full" style="margin-bottom:16px;font-size:13px;color:var(--danger);border-color:var(--danger);" onclick="showToast('Reminders sent to ${pendingStudents.length} students!', 'success')">
        <i class="fas fa-bell"></i> Send Reminder to All (${pendingStudents.length} students · ${totalPendingMonths} dues)
      </button>

      <!-- Pending List with Month Breakdown -->
      <div class="section-title" style="margin-bottom:10px;">Pending Fees</div>
      ${pendingStudents.map((s, i) => {
        const months = s.pendingMonths || [{month: 'Mar 2026', amount: s.feeAmount || 3500}];
        const totalDue = months.reduce((sum, m) => sum + m.amount, 0);
        const multiMonth = months.length > 1;
        return `
        <div class="fee-item fade-in-up fade-in-up-${Math.min(i + 2, 5)}" style="flex-direction:column;align-items:stretch;gap:10px;">
          <!-- Student Header -->
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="fee-avatar">${s.avatar}</div>
            <div class="fee-info" style="flex:1;">
              <div class="fee-name">${s.name}</div>
              <div class="fee-detail">${s.batch} · ${months.length} month${months.length > 1 ? 's' : ''} due</div>
            </div>
            <div style="text-align:right;">
              <div class="fee-amount" style="color:var(--danger);font-size:16px;font-weight:700;">₹${totalDue.toLocaleString()}</div>
              ${multiMonth ? '<div style="font-size:10px;color:var(--danger);font-weight:500;">Total Due</div>' : ''}
            </div>
          </div>

          <!-- Month-wise Breakdown -->
          <div style="display:flex;flex-direction:column;gap:6px;margin-left:42px;">
            ${months.map(m => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg-tertiary);border-radius:8px;border-left:3px solid ${m === months[0] && multiMonth ? 'var(--danger)' : 'var(--warning)'};">
                <div style="display:flex;align-items:center;gap:8px;">
                  <i class="fas fa-calendar-alt" style="font-size:11px;color:var(--text-tertiary);"></i>
                  <span style="font-size:13px;font-weight:600;color:var(--text-primary);">${m.month}</span>
                  ${m === months[months.length - 1] && months.length === 1 ? '<span style="font-size:10px;padding:2px 6px;background:var(--warning-bg);color:var(--warning);border-radius:4px;font-weight:600;">Due</span>' : ''}
                  ${m === months[0] && multiMonth ? '<span style="font-size:10px;padding:2px 6px;background:var(--danger-bg);color:var(--danger);border-radius:4px;font-weight:600;">Oldest</span>' : ''}
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="font-size:13px;font-weight:700;color:var(--text-primary);">₹${m.amount.toLocaleString()}</span>
                  <button style="padding:3px 8px;font-size:10px;border-radius:6px;border:1px solid var(--success);background:var(--success-bg);color:var(--success);cursor:pointer;font-weight:600;" onclick="showRecordPaymentModal('${s.name}', ${m.amount}, '${m.month}')">Record</button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Actions Row -->
          <div style="display:flex;gap:6px;margin-left:42px;">
            ${multiMonth ? '<button style="flex:1;padding:6px 10px;font-size:11px;border-radius:6px;border:1px solid var(--success);background:var(--success);color:#fff;cursor:pointer;font-weight:600;" onclick="showRecordPaymentModal(\'' + s.name + '\', ' + totalDue + ', \'All (' + months.length + ' months)\')"><i class="fas fa-check-double"></i> Record All ₹' + totalDue.toLocaleString() + '</button>' : ''}
            <button style="flex:1;padding:6px 10px;font-size:11px;border-radius:6px;border:1px solid var(--warning);background:var(--warning-bg);color:var(--warning);cursor:pointer;font-weight:600;" onclick="showToast('Reminder sent to ${s.name}', 'success')"><i class="fas fa-bell"></i> Send Reminder</button>
          </div>
        </div>
      `}).join('')}

      ${pendingStudents.length === 0 ? '<div style="text-align:center;padding:32px;color:var(--text-tertiary);"><i class="fas fa-check-circle" style="font-size:32px;color:var(--success);margin-bottom:8px;display:block;"></i>All fees collected!</div>' : ''}

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 18. STAFF CHAT
// ============================================
screens['staff-chat'] = () => `
  <div class="screen-enter">
    <!-- Header -->
    <div style="padding:16px 16px 0;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;flex:1;">Staff Chat</h3>
        <button style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border);background:var(--bg-card);display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="showToast('New message composer', 'info')">
          <i class="fas fa-plus" style="font-size:14px;color:var(--accent);"></i>
        </button>
      </div>
    </div>

    <!-- Channels & DMs -->
    ${chatChannels.map(ch => `
      <div class="chat-item" onclick="navigateTo('chat-detail')">
        <div class="chat-avatar ${ch.type === 'group' ? 'group' : ''}" style="${ch.type === 'group' ? 'background:var(--accent-bg);color:var(--accent);' : ''}">
          ${ch.type === 'group' ? '<i class="fas fa-users" style="font-size:14px;"></i>' : ch.avatar}
        </div>
        <div class="chat-info">
          <div class="chat-name">${ch.name}</div>
          <div class="chat-preview">${ch.lastMessage}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
          <div class="chat-time">${ch.time}</div>
          ${ch.unread > 0 ? `<div class="chat-unread">${ch.unread}</div>` : ''}
        </div>
      </div>
    `).join('')}

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 19. ADMISSIONS
// ============================================
let admissionFilter = 'all';
screens['admissions'] = () => {
  const filtered = admissionFilter === 'all' ? admissionRequests : admissionRequests.filter(a => a.status === admissionFilter);
  const pendingCount = admissionRequests.filter(a => a.status === 'pending').length;
  const meetingCount = admissionRequests.filter(a => a.status === 'meeting-scheduled').length;

  return `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Admission Requests</h3>
      <span style="font-size:12px;padding:2px 8px;background:var(--accent-bg);color:var(--accent);border-radius:10px;font-weight:600;">${admissionRequests.length}</span>
    </div>

    <!-- Filter Tabs -->
    <div style="display:flex;gap:6px;margin-bottom:16px;overflow-x:auto;" class="fade-in-up fade-in-up-1">
      ${[
        { key: 'all', label: 'All', count: admissionRequests.length },
        { key: 'pending', label: 'New', count: pendingCount },
        { key: 'meeting-scheduled', label: 'Meeting Set', count: meetingCount }
      ].map(f => `
        <div onclick="admissionFilter='${f.key}';renderScreen();" style="padding:8px 14px;font-size:12px;font-weight:${admissionFilter === f.key ? '700' : '500'};color:${admissionFilter === f.key ? '#fff' : 'var(--text-secondary)'};background:${admissionFilter === f.key ? 'var(--accent)' : 'var(--bg-card)'};border:1px solid ${admissionFilter === f.key ? 'var(--accent)' : 'var(--border)'};border-radius:var(--radius-full);cursor:pointer;white-space:nowrap;">${f.label} (${f.count})</div>
      `).join('')}
    </div>

    ${filtered.map((a, i) => `
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px;" class="fade-in-up fade-in-up-${Math.min(i + 1, 5)}">
        <!-- Student Header -->
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <div class="student-avatar" style="width:44px;height:44px;font-size:16px;">${a.name.split(' ').map(n=>n[0]).join('')}</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">${a.name}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">Age ${a.age} · ${a.experience}</div>
          </div>
          <span style="font-size:10px;padding:3px 8px;background:${a.status === 'pending' ? 'var(--warning-bg)' : 'var(--accent-bg)'};color:${a.status === 'pending' ? 'var(--warning)' : 'var(--accent)'};border-radius:10px;font-weight:600;">${a.status === 'pending' ? 'New' : 'Meeting Set'}</span>
        </div>

        <!-- Details -->
        <div style="display:flex;flex-direction:column;gap:5px;padding:10px;background:var(--bg-tertiary);border-radius:8px;font-size:var(--font-size-xs);color:var(--text-secondary);margin-bottom:10px;">
          <div><i class="fas fa-users-line" style="width:16px;color:var(--text-tertiary);"></i> Preferred: ${a.preferredBatch}</div>
          <div><i class="fas fa-user" style="width:16px;color:var(--text-tertiary);"></i> Parent: ${a.parent}</div>
          <div><i class="fas fa-phone" style="width:16px;color:var(--text-tertiary);"></i> ${a.parentPhone}</div>
          <div><i class="fas fa-calendar" style="width:16px;color:var(--text-tertiary);"></i> Applied: ${a.appliedDate}</div>
          ${a.previousAcademy !== 'None' ? `<div><i class="fas fa-building-columns" style="width:16px;color:var(--text-tertiary);"></i> Previous: ${a.previousAcademy}</div>` : ''}
          ${a.medicalNotes !== 'None' ? `<div><i class="fas fa-notes-medical" style="width:16px;color:var(--danger);"></i> Medical: ${a.medicalNotes}</div>` : ''}
        </div>

        ${a.status === 'meeting-scheduled' ? `
          <!-- Meeting Info Banner -->
          <div style="padding:10px;background:var(--accent-bg);border-radius:8px;margin-bottom:10px;display:flex;align-items:center;gap:10px;">
            <i class="fas fa-calendar-check" style="color:var(--accent);font-size:16px;"></i>
            <div style="flex:1;">
              <div style="font-size:12px;font-weight:700;color:var(--accent);">Meeting: ${a.meetingDate} at ${a.meetingTime}</div>
              <div style="font-size:10px;color:var(--text-secondary);margin-top:2px;">With Head Coach Venkat</div>
            </div>
          </div>
          <!-- Post-Meeting Actions -->
          <div style="display:flex;gap:8px;">
            <button class="btn btn-outline" style="flex:1;font-size:12px;color:var(--danger);border-color:var(--danger);padding:10px;" onclick="showToast('${a.name} rejected after meeting', 'warning')">
              <i class="fas fa-times"></i> Reject
            </button>
            <button class="btn btn-primary" style="flex:2;font-size:12px;padding:10px;" onclick="showAdmitModal('${a.name}')">
              <i class="fas fa-check"></i> Admit Student
            </button>
          </div>
        ` : `
          <!-- Pending Actions: 3 buttons -->
          <div style="display:flex;gap:8px;">
            <button class="btn btn-outline" style="flex:1;font-size:11px;color:var(--danger);border-color:var(--danger);padding:10px;" onclick="showToast('${a.name} rejected', 'warning')">
              <i class="fas fa-times"></i> Reject
            </button>
            <button class="btn" style="flex:1;font-size:11px;padding:10px;background:var(--bg-card);border:1px solid var(--accent);color:var(--accent);border-radius:var(--radius-md);cursor:pointer;font-weight:600;" onclick="showScheduleMeetingModal('${a.name}')">
              <i class="fas fa-calendar"></i> Schedule
            </button>
            <button class="btn btn-primary" style="flex:1;font-size:11px;padding:10px;" onclick="showAdmitModal('${a.name}')">
              <i class="fas fa-check"></i> Admit
            </button>
          </div>
        `}
      </div>
    `).join('')}

    ${filtered.length === 0 ? `
      <div style="text-align:center;padding:40px 16px;color:var(--text-tertiary);">
        <i class="fas fa-inbox" style="font-size:32px;margin-bottom:10px;"></i>
        <div style="font-size:var(--font-size-sm);">No admission requests in this category</div>
      </div>
    ` : ''}

    <div style="height:24px;"></div>
  </div>
  `;
};

// ============================================
// 20. STAFF MANAGEMENT
// ============================================
screens['staff-management'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Staff Management</h3>
    </div>

    ${staff.map((s, i) => `
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:10px;" class="fade-in-up fade-in-up-${Math.min(i + 1, 5)}">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
          <div class="student-avatar" style="width:46px;height:46px;font-size:16px;">${s.avatar}</div>
          <div style="flex:1;">
            <div style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">${s.name}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">${s.role}</div>
          </div>
          <i class="fas fa-ellipsis-v" style="color:var(--text-tertiary);cursor:pointer;" onclick="showToast('Staff options', 'info')"></i>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;font-size:var(--font-size-xs);color:var(--text-secondary);">
          <div><i class="fas fa-layer-group" style="width:16px;color:var(--accent);"></i> ${s.batches.join(', ')}</div>
          <div><i class="fas fa-phone" style="width:16px;color:var(--success);"></i> ${s.phone}</div>
        </div>
      </div>
    `).join('')}

    <button class="btn btn-primary btn-full" style="margin-top:16px;padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Invite link copied!', 'success');">
      <i class="fas fa-user-plus"></i> Invite Staff
    </button>

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 21. SETTINGS
// ============================================
screens['settings'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Academy Settings</h3>
    </div>

    <!-- Academy Info -->
    <div class="section-title" style="margin-bottom:10px;">Academy Info</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;">
      <div style="margin-bottom:12px;">
        <label style="font-size:12px;font-weight:600;color:var(--text-tertiary);display:block;margin-bottom:4px;">Academy Name</label>
        <input type="text" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" value="${academy.name}">
      </div>
      <div>
        <label style="font-size:12px;font-weight:600;color:var(--text-tertiary);display:block;margin-bottom:4px;">Description</label>
        <textarea style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-tertiary);color:var(--text-primary);font-size:14px;resize:none;height:60px;box-sizing:border-box;font-family:inherit;">Professional cricket coaching for all ages in Coimbatore. Net practice, bowling machines, and video analysis.</textarea>
      </div>
    </div>

    <!-- Attendance Config -->
    <div class="section-title" style="margin-bottom:10px;">Attendance Config</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Method</span>
        <span style="font-size:var(--font-size-sm);color:var(--accent);font-weight:600;">Staff Marks</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Allow Late Marking</span>
        <div style="width:42px;height:24px;border-radius:12px;background:var(--accent);position:relative;cursor:pointer;" onclick="this.style.background=this.style.background==='var(--accent)'?'var(--bg-tertiary)':'var(--accent)'">
          <div style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:2px;right:2px;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Low Attendance Alert</span>
        <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">Below 65%</span>
      </div>
    </div>

    <!-- Fee Config -->
    <div class="section-title" style="margin-bottom:10px;">Fee Config</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Monthly Fee</span>
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);font-weight:700;">₹3,500</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Due Date</span>
        <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">5th of each month</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:var(--font-size-sm);color:var(--text-primary);">Payment Methods</span>
        <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">Cash, UPI</span>
      </div>
    </div>

    <!-- Subscription -->
    <div class="section-title" style="margin-bottom:10px;">Subscription</div>
    <div style="background:var(--warning-bg);border:2px solid var(--warning);border-radius:12px;padding:16px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <i class="fas fa-clock" style="color:var(--warning);font-size:20px;"></i>
        <div>
          <div style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">Free Trial</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">${academy.trialDaysLeft} days remaining</div>
        </div>
      </div>
      <div style="height:6px;background:rgba(245,158,11,0.2);border-radius:3px;overflow:hidden;margin-bottom:10px;">
        <div style="height:100%;width:${((14 - academy.trialDaysLeft) / 14) * 100}%;background:var(--warning);border-radius:3px;"></div>
      </div>
      <button class="btn btn-full" style="background:var(--warning);color:#fff;border:none;border-radius:10px;padding:10px;font-weight:700;font-size:13px;cursor:pointer;" onclick="showToast('Upgrade page coming soon!', 'info')">
        <i class="fas fa-crown"></i> Upgrade Now
      </button>
    </div>

    <button class="btn btn-primary btn-full" style="padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Settings saved!', 'success');">
      <i class="fas fa-save"></i> Save Settings
    </button>

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 22. NOTIFICATIONS
// ============================================
screens['notifications'] = () => `
  <div class="screen-enter">
    <div style="padding:16px 16px 0;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;flex:1;">Notifications</h3>
        <span style="font-size:var(--font-size-xs);color:var(--accent);font-weight:600;cursor:pointer;" onclick="showToast('All marked as read', 'success')">Mark all read</span>
      </div>
    </div>

    ${notifications.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="showToast('${n.title}', 'info')">
        <div class="notif-icon-wrap" style="background:${n.color}15;">
          <i class="fas ${n.icon}" style="color:${n.color};"></i>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);">${n.title}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${n.desc}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:4px;">${n.time}</div>
        </div>
        ${n.unread ? '<div style="width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0;"></div>' : ''}
      </div>
    `).join('')}

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// 23. CHAT DETAIL
// ============================================
screens['chat-detail'] = () => `
  <div class="screen-enter" style="display:flex;flex-direction:column;height:100%;">
    <!-- Header -->
    <div style="padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <div class="chat-avatar group" style="width:36px;height:36px;font-size:12px;"><i class="fas fa-users"></i></div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">All Staff</div>
        <div style="font-size:var(--font-size-xs);color:var(--success);">3 members online</div>
      </div>
      <i class="fas fa-ellipsis-v" style="color:var(--text-tertiary);cursor:pointer;" onclick="showToast('Chat settings', 'info')"></i>
    </div>

    <!-- Messages -->
    <div style="flex:1;overflow-y:auto;padding:16px;">
      ${chatMessages.map(m => `
        <div style="display:flex;${m.sent ? 'justify-content:flex-end;' : ''}margin-bottom:12px;">
          <div style="max-width:80%;padding:10px 14px;border-radius:${m.sent ? '14px 14px 4px 14px' : '14px 14px 14px 4px'};background:${m.sent ? 'var(--accent)' : 'var(--bg-card)'};color:${m.sent ? '#fff' : 'var(--text-primary)'};font-size:var(--font-size-sm);line-height:1.5;${m.sent ? '' : 'border:1px solid var(--border);'}">
            ${!m.sent ? `<div style="font-size:10px;font-weight:700;color:var(--accent);margin-bottom:4px;">${m.sender}</div>` : ''}
            <div>${m.text}</div>
            <div style="font-size:10px;${m.sent ? 'color:rgba(255,255,255,0.7);' : 'color:var(--text-tertiary);'}margin-top:4px;text-align:right;">${m.time}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Input -->
    <div style="padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px;background:var(--bg-primary);">
      <i class="fas fa-plus-circle" style="font-size:22px;color:var(--text-tertiary);cursor:pointer;" onclick="showToast('Attachment options', 'info')"></i>
      <input type="text" style="flex:1;padding:10px 14px;border-radius:20px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;" placeholder="Type a message...">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="showToast('Message sent!', 'success')">
        <i class="fas fa-paper-plane" style="color:#fff;font-size:14px;"></i>
      </div>
    </div>
  </div>
`;

// ============================================
// 24. MATCHES LIST
// ============================================
screens['matches'] = () => {
  const statusConfig = {
    'collecting-availability': { label: 'Collecting Availability', color: 'var(--warning)', icon: 'fa-hourglass-half', bg: 'var(--warning-bg)' },
    'teams-announced': { label: 'Teams Announced', color: 'var(--info)', icon: 'fa-users', bg: 'var(--info-bg)' },
    'in-progress': { label: 'In Progress', color: 'var(--success)', icon: 'fa-play-circle', bg: 'var(--success-bg)' },
    'completed': { label: 'Completed', color: 'var(--text-tertiary)', icon: 'fa-check-circle', bg: 'var(--bg-tertiary)' }
  };

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;flex:1;">Matches</h3>
        <button class="btn btn-primary" style="font-size:12px;padding:8px 14px;" onclick="navigateTo('create-match')">
          <i class="fas fa-plus"></i> New Match
        </button>
      </div>

      <!-- Stats -->
      <div class="stat-row fade-in-up fade-in-up-1" style="margin-bottom:16px;">
        <div class="stat-box" style="border-color:var(--warning);">
          <div class="stat-val" style="color:var(--warning);">${matches.filter(m => m.status === 'collecting-availability').length}</div>
          <div class="stat-lbl">Open</div>
        </div>
        <div class="stat-box" style="border-color:var(--info);">
          <div class="stat-val" style="color:var(--info);">${matches.filter(m => m.status === 'teams-announced').length}</div>
          <div class="stat-lbl">Teams Set</div>
        </div>
        <div class="stat-box" style="border-color:var(--success);">
          <div class="stat-val" style="color:var(--success);">${matches.length}</div>
          <div class="stat-lbl">Total</div>
        </div>
      </div>

      <!-- Match Cards -->
      ${matches.map((m, i) => {
        const sc = statusConfig[m.status];
        const availCount = m.responses.filter(r => r.response === 'available').length;
        const paidCount = m.responses.filter(r => r.feePaid).length;
        const totalResponded = m.responses.length;
        const totalInvited = totalResponded + m.pendingResponse.length;
        return `
        <div class="fade-in-up fade-in-up-${Math.min(i + 2, 5)}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:12px;cursor:pointer;" onclick="selectedMatchId=${m.id};navigateTo('match-detail');">
          <!-- Type & Status -->
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:var(--accent-bg);color:var(--accent);font-weight:600;">${m.type} · ${m.format}</span>
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:${sc.bg};color:${sc.color};font-weight:600;display:flex;align-items:center;gap:4px;"><i class="fas ${sc.icon}" style="font-size:9px;"></i> ${sc.label}</span>
          </div>
          <!-- Title -->
          <div style="font-size:15px;font-weight:700;color:var(--text-primary);margin-bottom:6px;">${m.title}</div>
          <!-- Details -->
          <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:12px;color:var(--text-secondary);margin-bottom:10px;">
            <span><i class="fas fa-calendar" style="width:14px;color:var(--text-tertiary);"></i> ${m.date}</span>
            <span><i class="fas fa-clock" style="width:14px;color:var(--text-tertiary);"></i> ${m.time}</span>
            <span><i class="fas fa-map-marker-alt" style="width:14px;color:var(--text-tertiary);"></i> ${m.venue}</span>
          </div>
          <!-- Response & Fee Progress -->
          <div style="display:flex;gap:8px;">
            <div style="flex:1;padding:8px;background:var(--bg-tertiary);border-radius:8px;text-align:center;">
              <div style="font-size:14px;font-weight:700;color:var(--accent);">${availCount}/${totalInvited}</div>
              <div style="font-size:10px;color:var(--text-tertiary);">Available</div>
            </div>
            <div style="flex:1;padding:8px;background:var(--bg-tertiary);border-radius:8px;text-align:center;">
              <div style="font-size:14px;font-weight:700;color:var(--text-tertiary);">${m.pendingResponse.length}</div>
              <div style="font-size:10px;color:var(--text-tertiary);">No Response</div>
            </div>
            ${m.matchFee > 0 ? `
            <div style="flex:1;padding:8px;background:var(--bg-tertiary);border-radius:8px;text-align:center;">
              <div style="font-size:14px;font-weight:700;color:${paidCount === availCount ? 'var(--success)' : 'var(--warning)'};">${paidCount}/${availCount}</div>
              <div style="font-size:10px;color:var(--text-tertiary);">Fee Paid</div>
            </div>` : `
            <div style="flex:1;padding:8px;background:var(--success-bg);border-radius:8px;text-align:center;">
              <div style="font-size:14px;font-weight:700;color:var(--success);">Free</div>
              <div style="font-size:10px;color:var(--text-tertiary);">No Fee</div>
            </div>`}
          </div>
        </div>
      `}).join('')}

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 25. MATCH DETAIL
// ============================================
screens['match-detail'] = () => {
  const m = matches.find(x => x.id === selectedMatchId) || matches[0];
  const availPlayers = m.responses.filter(r => r.response === 'available');
  const notAvailPlayers = m.responses.filter(r => r.response === 'not-available');
  const maybePlayers = m.responses.filter(r => r.response === 'maybe');
  const paidCount = availPlayers.filter(r => r.feePaid).length;
  const unpaidPlayers = availPlayers.filter(r => !r.feePaid);
  const totalFeeExpected = availPlayers.length * m.matchFee;
  const totalFeeCollected = paidCount * m.matchFee;

  const statusConfig = {
    'collecting-availability': { label: 'Collecting Availability', color: 'var(--warning)', icon: 'fa-hourglass-half' },
    'teams-announced': { label: 'Teams Announced', color: 'var(--info)', icon: 'fa-users' },
    'in-progress': { label: 'In Progress', color: 'var(--success)', icon: 'fa-play-circle' },
    'completed': { label: 'Completed', color: 'var(--text-tertiary)', icon: 'fa-check-circle' }
  };
  const sc = statusConfig[m.status];

  return `
    <div class="screen-pad screen-enter">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <div style="flex:1;">
          <h3 style="font-size:var(--font-size-lg);font-weight:700;">${m.title}</h3>
          <div style="font-size:11px;color:var(--text-tertiary);">Created by ${m.createdBy} · ${m.createdAt}</div>
        </div>
        <i class="fas fa-ellipsis-v" style="color:var(--text-tertiary);cursor:pointer;padding:8px;" onclick="showToast('Match options', 'info')"></i>
      </div>

      <!-- Match Info Card -->
      <div style="background:var(--gradient-hero);border-radius:14px;padding:16px;color:#fff;margin-bottom:16px;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-20px;right:-20px;width:80px;height:80px;background:rgba(255,255,255,0.08);border-radius:50%;"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="font-size:12px;padding:4px 10px;border-radius:6px;background:rgba(255,255,255,0.2);font-weight:600;">${m.type} · ${m.format}</span>
          <span style="font-size:12px;padding:4px 10px;border-radius:6px;background:rgba(255,255,255,0.2);font-weight:600;display:flex;align-items:center;gap:4px;"><i class="fas ${sc.icon}" style="font-size:10px;"></i> ${sc.label}</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;">
          <div><i class="fas fa-calendar" style="width:18px;"></i> ${m.date} · ${m.time}</div>
          <div><i class="fas fa-map-marker-alt" style="width:18px;"></i> ${m.venue}</div>
          <div><i class="fas fa-users" style="width:18px;"></i> ${m.eligibility} · Max ${m.maxPlayers} players</div>
          ${m.matchFee > 0 ? `<div><i class="fas fa-rupee-sign" style="width:18px;"></i> ₹${m.matchFee} per player — ${m.feeNote}</div>` : `<div><i class="fas fa-gift" style="width:18px;"></i> ${m.feeNote}</div>`}
        </div>
      </div>

      <!-- Availability Summary -->
      <div class="stat-row" style="margin-bottom:16px;">
        <div class="stat-box" style="border-color:var(--success);">
          <div class="stat-val" style="color:var(--success);">${availPlayers.length}</div>
          <div class="stat-lbl">Available</div>
        </div>
        <div class="stat-box" style="border-color:var(--danger);">
          <div class="stat-val" style="color:var(--danger);">${notAvailPlayers.length}</div>
          <div class="stat-lbl">Not Available</div>
        </div>
        <div class="stat-box" style="border-color:var(--warning);">
          <div class="stat-val" style="color:var(--warning);">${maybePlayers.length + m.pendingResponse.length}</div>
          <div class="stat-lbl">Maybe / Pending</div>
        </div>
      </div>

      ${m.matchFee > 0 ? `
      <!-- Fee Collection Status -->
      <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="font-size:14px;font-weight:700;color:var(--text-primary);"><i class="fas fa-rupee-sign" style="color:var(--success);"></i> Fee Collection</div>
          <span style="font-size:12px;font-weight:600;color:${paidCount === availPlayers.length ? 'var(--success)' : 'var(--warning)'};">${paidCount}/${availPlayers.length} paid</span>
        </div>
        <!-- Progress Bar -->
        <div style="height:8px;background:var(--bg-tertiary);border-radius:4px;margin-bottom:10px;overflow:hidden;">
          <div style="height:100%;width:${availPlayers.length > 0 ? (paidCount / availPlayers.length * 100) : 0}%;background:var(--success);border-radius:4px;transition:width 0.3s;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-secondary);margin-bottom:10px;">
          <span>Collected: <strong style="color:var(--success);">₹${totalFeeCollected.toLocaleString()}</strong></span>
          <span>Pending: <strong style="color:var(--danger);">₹${(totalFeeExpected - totalFeeCollected).toLocaleString()}</strong></span>
        </div>
        ${unpaidPlayers.length > 0 ? `
        <div style="font-size:12px;font-weight:600;color:var(--text-primary);margin-bottom:8px;">Unpaid Players:</div>
        ${unpaidPlayers.map(p => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:8px;">
              <div class="student-avatar" style="width:28px;height:28px;font-size:10px;">${p.avatar}</div>
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${p.name}</div>
                <div style="font-size:11px;color:var(--text-tertiary);">${p.role}</div>
              </div>
            </div>
            <div style="display:flex;gap:4px;">
              <button style="padding:4px 10px;font-size:10px;border-radius:6px;border:1px solid var(--success);background:var(--success-bg);color:var(--success);cursor:pointer;font-weight:600;" onclick="showRecordPaymentModal('${p.name}', ${m.matchFee}, '${m.title} — ${m.date}')">₹${m.matchFee} Record</button>
              <button style="padding:4px 8px;font-size:10px;border-radius:6px;border:1px solid var(--warning);background:var(--warning-bg);color:var(--warning);cursor:pointer;font-weight:600;" onclick="showToast('Reminder sent to ${p.name}', 'success')"><i class="fas fa-bell"></i></button>
            </div>
          </div>
        `).join('')}
        <button class="btn btn-outline btn-full" style="margin-top:10px;font-size:12px;color:var(--danger);border-color:var(--danger);" onclick="showToast('Fee reminders sent to ${unpaidPlayers.length} players!', 'success')">
          <i class="fas fa-bell"></i> Remind All Unpaid (${unpaidPlayers.length})
        </button>
        ` : '<div style="text-align:center;padding:8px;color:var(--success);font-size:13px;font-weight:600;"><i class="fas fa-check-circle"></i> All fees collected!</div>'}
      </div>
      ` : ''}

      <!-- Available Players -->
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div class="section-title" style="margin:0;"><i class="fas fa-check-circle" style="color:var(--success);"></i> Available (${availPlayers.length})</div>
          ${m.status === 'collecting-availability' ? `<button style="font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--accent);background:var(--accent-bg);color:var(--accent);cursor:pointer;font-weight:600;" onclick="showToast('Teams finalized! Players notified.', 'success')"><i class="fas fa-users"></i> Finalize Teams</button>` : ''}
        </div>
        ${availPlayers.map(p => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
            <div class="student-avatar" style="width:32px;height:32px;font-size:11px;">${p.avatar}</div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${p.name}</div>
              <div style="font-size:11px;color:var(--text-tertiary);">${p.role}${p.team ? ' · Team ' + p.team : ''}</div>
            </div>
            ${m.matchFee > 0 ? `<span style="font-size:10px;padding:3px 8px;border-radius:6px;${p.feePaid ? 'background:var(--success-bg);color:var(--success);' : 'background:var(--danger-bg);color:var(--danger);'}font-weight:600;">${p.feePaid ? '₹ Paid' : '₹ Due'}</span>` : ''}
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:var(--success-bg);color:var(--success);font-weight:600;"><i class="fas fa-check"></i></span>
          </div>
        `).join('')}
      </div>

      ${maybePlayers.length > 0 ? `
      <!-- Maybe Players -->
      <div style="margin-bottom:16px;">
        <div class="section-title" style="margin-bottom:10px;"><i class="fas fa-question-circle" style="color:var(--warning);"></i> Maybe (${maybePlayers.length})</div>
        ${maybePlayers.map(p => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
            <div class="student-avatar" style="width:32px;height:32px;font-size:11px;">${p.avatar}</div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${p.name}</div>
              <div style="font-size:11px;color:var(--text-tertiary);">${p.role}</div>
            </div>
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:var(--warning-bg);color:var(--warning);font-weight:600;">Maybe</span>
          </div>
        `).join('')}
      </div>
      ` : ''}

      ${notAvailPlayers.length > 0 ? `
      <!-- Not Available -->
      <div style="margin-bottom:16px;">
        <div class="section-title" style="margin-bottom:10px;"><i class="fas fa-times-circle" style="color:var(--danger);"></i> Not Available (${notAvailPlayers.length})</div>
        ${notAvailPlayers.map(p => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
            <div class="student-avatar" style="width:32px;height:32px;font-size:11px;opacity:0.5;">${p.avatar}</div>
            <div style="flex:1;opacity:0.6;">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${p.name}</div>
              <div style="font-size:11px;color:var(--text-tertiary);">${p.role}</div>
            </div>
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:var(--danger-bg);color:var(--danger);font-weight:600;">Unavailable</span>
          </div>
        `).join('')}
      </div>
      ` : ''}

      ${m.pendingResponse.length > 0 ? `
      <!-- No Response Yet -->
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div class="section-title" style="margin:0;"><i class="fas fa-clock" style="color:var(--text-tertiary);"></i> No Response (${m.pendingResponse.length})</div>
          <button style="font-size:11px;padding:4px 10px;border-radius:6px;border:1px solid var(--warning);background:var(--warning-bg);color:var(--warning);cursor:pointer;font-weight:600;" onclick="showToast('Nudge sent to ${m.pendingResponse.length} players!', 'success')"><i class="fas fa-bell"></i> Nudge All</button>
        </div>
        ${m.pendingResponse.map(p => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);">
            <div class="student-avatar" style="width:32px;height:32px;font-size:11px;opacity:0.4;">${p.avatar}</div>
            <div style="flex:1;opacity:0.5;">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary);">${p.name}</div>
              <div style="font-size:11px;color:var(--text-tertiary);">${p.role}</div>
            </div>
            <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:var(--bg-tertiary);color:var(--text-tertiary);font-weight:600;">Pending</span>
          </div>
        `).join('')}
      </div>
      ` : ''}

      <!-- Action Buttons -->
      <div style="display:flex;gap:8px;margin-top:8px;">
        ${m.status === 'collecting-availability' ? `
          <button class="btn btn-primary btn-full" style="padding:14px;font-size:14px;font-weight:700;" onclick="showToast('Teams finalized & announced!', 'success')">
            <i class="fas fa-users"></i> Announce Teams
          </button>
        ` : m.status === 'teams-announced' ? `
          <button class="btn btn-primary btn-full" style="padding:14px;font-size:14px;font-weight:700;background:var(--success);border-color:var(--success);" onclick="showToast('Match started!', 'success')">
            <i class="fas fa-play"></i> Start Match
          </button>
        ` : ''}
      </div>

      <!-- Share to Feed -->
      <button class="btn btn-outline btn-full" style="margin-top:8px;font-size:13px;" onclick="showToast('Match posted to academy feed!', 'success')">
        <i class="fas fa-share"></i> Share to Feed
      </button>

      <div style="height:24px;"></div>
    </div>
  `;
};

// ============================================
// 26. CREATE MATCH
// ============================================
screens['create-match'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Header -->
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3 style="font-size:var(--font-size-lg);font-weight:700;">Create Match</h3>
    </div>

    <!-- Match Title -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Match Title *</label>
      <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="e.g. Weekend Practice Match">
    </div>

    <!-- Match Type -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Match Type *</label>
      <div class="filter-row" style="display:flex;gap:6px;">
        <div class="filter-chip active" onclick="toggleFilter(this)">Internal</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Inter-Academy</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Parent Match</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Parent vs Student</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Tournament</div>
      </div>
    </div>

    <!-- Format -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Format *</label>
      <div class="filter-row" style="display:flex;gap:6px;">
        <div class="filter-chip" onclick="toggleFilter(this)">T5</div>
        <div class="filter-chip active" onclick="toggleFilter(this)">T8</div>
        <div class="filter-chip" onclick="toggleFilter(this)">T10</div>
        <div class="filter-chip" onclick="toggleFilter(this)">T15</div>
        <div class="filter-chip" onclick="toggleFilter(this)">T20</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Custom</div>
      </div>
    </div>

    <!-- Date & Time -->
    <div style="display:flex;gap:10px;margin-bottom:14px;">
      <div style="flex:1;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Date *</label>
        <input type="date" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
      </div>
      <div style="flex:1;">
        <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Time *</label>
        <input type="time" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
      </div>
    </div>

    <!-- Venue -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Venue *</label>
      <input type="text" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="e.g. SAM Academy Ground" value="SAM Academy Ground">
    </div>

    <!-- Who Can Join -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Who Can Join *</label>
      <div class="filter-row" style="display:flex;flex-wrap:wrap;gap:6px;">
        <div class="filter-chip active" onclick="toggleFilter(this)">All Batches</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Morning U-12</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Evening U-14</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Weekend All Ages</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Parents</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Selected Players</div>
      </div>
    </div>

    <!-- Max Players -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Max Players</label>
      <input type="number" value="22" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
    </div>

    <!-- Match Fee -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Match Fee (₹ per player)</label>
      <div style="display:flex;gap:10px;">
        <input type="number" value="200" placeholder="0 for free" style="flex:1;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
        <input type="text" placeholder="Note: ground + ball charges" style="flex:2;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
      </div>
    </div>

    <!-- Availability Deadline -->
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Respond By</label>
      <input type="date" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;">
      <div style="font-size:11px;color:var(--text-tertiary);margin-top:4px;">Students/parents must respond by this date</div>
    </div>

    <!-- Additional Notes -->
    <div style="margin-bottom:20px;">
      <label style="font-size:13px;font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Notes</label>
      <textarea style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;resize:none;height:70px;box-sizing:border-box;font-family:inherit;" placeholder="Any additional info for players..."></textarea>
    </div>

    <!-- Preview -->
    <div style="background:var(--bg-tertiary);border-radius:10px;padding:12px;margin-bottom:16px;">
      <div style="font-size:11px;color:var(--text-tertiary);margin-bottom:6px;font-weight:600;">WHAT STUDENTS/PARENTS WILL SEE:</div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.6;">
        <i class="fas fa-bell" style="color:var(--accent);"></i> New match posted! Tap to mark your availability.<br>
        <i class="fas fa-check" style="color:var(--success);"></i> Available &nbsp; <i class="fas fa-times" style="color:var(--danger);"></i> Not Available &nbsp; <i class="fas fa-question" style="color:var(--warning);"></i> Maybe
      </div>
    </div>

    <!-- Create & Notify -->
    <button class="btn btn-primary btn-full" style="padding:14px;font-size:15px;font-weight:700;" onclick="showToast('Match created! Notifications sent to all eligible players.', 'success');setTimeout(()=>navigateTo('matches'),500);">
      <i class="fas fa-paper-plane"></i> Create Match & Notify Players
    </button>

    <div style="height:24px;"></div>
  </div>
`;

// ============================================
// HELPER FUNCTIONS
// ============================================

function verifyOtp() {
  showToast('OTP verified! Welcome back.', 'success');
  setTimeout(() => navigateTo('home'), 300);
}

function completeSetup() {
  showToast('Academy setup complete!', 'success');
  setTimeout(() => navigateTo('home'), 500);
}

function viewStudent(id) {
  selectedStudentId = id;
  navigateTo('student-detail');
}

function filterStudents(filter) {
  selectedBatchFilter = filter === 'All' ? 'all' : filter;
  navigateTo('students');
  screenHistory.pop(); // Remove duplicate from history
}

function markAtt(studentId, status) {
  if (attendanceState[studentId] === status) {
    attendanceState[studentId] = 'none';
  } else {
    attendanceState[studentId] = status;
  }
  renderScreen('attendance');
}

function markAllPresent() {
  students.forEach(s => { attendanceState[s.id] = 'present'; });
  showToast('All students marked present!', 'success');
  renderScreen('attendance');
}

function showRecordPaymentModal(studentName, amount, monthLabel) {
  const monthDisplay = monthLabel || 'Current Month';
  showModal('Record Payment', `
    <div style="margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-start;">
      <div>
        <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:2px;">Student</div>
        <div style="font-weight:700;font-size:15px;color:var(--text-primary);">${studentName}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:2px;">For Month</div>
        <div style="font-weight:600;font-size:14px;color:var(--accent);background:var(--accent-bg);padding:3px 10px;border-radius:6px;">${monthDisplay}</div>
      </div>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:2px;">Amount</div>
      <div style="font-weight:700;font-size:20px;color:var(--success);">₹${amount.toLocaleString()}</div>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:8px;">Payment Method *</div>
      <div id="payMethodBtns" style="display:flex;flex-wrap:wrap;gap:6px;">
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-mobile-alt" style="color:#5F259F;"></i> GPay - Mobile 1</button>
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-mobile-alt" style="color:#5F259F;"></i> GPay - Mobile 2</button>
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-money-bill-wave" style="color:#16a34a;"></i> Cash</button>
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-university" style="color:#2563eb;"></i> Bank Transfer</button>
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-mobile-alt" style="color:#002E6E;"></i> PhonePe</button>
        <button class="pay-method-btn" onclick="selectPayMethod(this)" style="padding:8px 12px;font-size:12px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-card);color:var(--text-primary);cursor:pointer;font-weight:500;display:flex;align-items:center;gap:5px;"><i class="fas fa-credit-card" style="color:#ff6600;"></i> Card / UPI</button>
      </div>
    </div>
    <div style="margin-bottom:14px;">
      <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:6px;">Reference / Transaction ID <span style="font-size:11px;color:var(--text-tertiary);">(optional)</span></div>
      <input type="text" id="payReference" placeholder="e.g. TXN123456789" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;outline:none;box-sizing:border-box;">
    </div>
    <div style="margin-bottom:6px;">
      <div style="font-size:13px;color:var(--text-tertiary);margin-bottom:6px;">Notes <span style="font-size:11px;color:var(--text-tertiary);">(optional)</span></div>
      <input type="text" id="payNotes" placeholder="e.g. Partial payment, discount applied" style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;outline:none;box-sizing:border-box;">
    </div>
  `, [
    { label: '<i class="fas fa-times"></i> Cancel', class: 'btn-ghost', onclick: 'closeModal()' },
    { label: '<i class="fas fa-check"></i> Record Payment', class: 'btn-primary', onclick: "closeModal();showToast('Payment of ₹" + amount.toLocaleString() + " recorded for " + studentName + "', 'success')" }
  ]);
}

function selectPayMethod(el) {
  document.querySelectorAll('.pay-method-btn').forEach(b => {
    b.style.border = '1.5px solid var(--border)';
    b.style.background = 'var(--bg-card)';
  });
  el.style.border = '1.5px solid var(--accent)';
  el.style.background = 'var(--accent-bg)';
}

function showScheduleMeetingModal(studentName) {
  const modalHtml = `
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Meeting Date</label>
      <input type="date" id="meetingDate" value="2026-03-25" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
    </div>
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Meeting Time</label>
      <select id="meetingTime" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
        <option>9:00 AM</option><option>9:30 AM</option><option selected>10:00 AM</option><option>10:30 AM</option>
        <option>11:00 AM</option><option>4:00 PM</option><option>4:30 PM</option><option>5:00 PM</option>
      </select>
    </div>
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Meeting With</label>
      <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
        <option selected>Head Coach Venkat</option><option>Coach Ravi</option><option>Coach Priya</option>
      </select>
    </div>
    <div style="margin-bottom:14px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Note to Parent (optional)</label>
      <textarea style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:13px;resize:vertical;min-height:60px;color:var(--text-primary);" placeholder="e.g., Please bring the student for a skill assessment...">Please bring the student along. We will conduct a brief skill assessment and discuss the coaching program.</textarea>
    </div>
    <div style="padding:10px;background:var(--accent-bg);border-radius:8px;font-size:12px;color:var(--text-secondary);line-height:1.5;">
      <i class="fas fa-info-circle" style="color:var(--accent);margin-right:4px;"></i>
      The parent will receive a notification with meeting details and can confirm or request rescheduling.
    </div>
  `;
  showModal('Schedule Meeting — ' + studentName, modalHtml, [
    { label: 'Schedule & Notify Parent', class: 'btn-primary btn-full', onclick: "closeModal();showToast('Meeting scheduled! Parent notified.', 'success')" }
  ]);
}

function showAdmitModal(studentName) {
  const modalHtml = `
    <div style="margin-bottom:12px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Assign Role</label>
      <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
        <option>Batsman</option><option>Bowler (Fast)</option><option>Bowler (Spin)</option><option>Allrounder</option><option>Wicketkeeper</option>
      </select>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Starting Stage</label>
      <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
        <option selected>Stage 1 — Foundation</option><option>Stage 2 — Developing</option><option>Stage 3 — Intermediate</option>
      </select>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Assign Batch</label>
      <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
        <option>Morning U-12</option><option>Evening U-14</option><option>Weekend All Ages</option>
      </select>
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Start Date</label>
      <input type="date" value="2026-04-01" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
    </div>
    <div style="margin-bottom:12px;">
      <label style="font-size:13px;font-weight:600;display:block;margin-bottom:6px;">Monthly Fee</label>
      <input type="text" value="3,500" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);font-size:14px;color:var(--text-primary);">
    </div>
    <div style="padding:10px;background:var(--success-bg);border-radius:8px;font-size:12px;color:var(--text-secondary);line-height:1.5;">
      <i class="fas fa-check-circle" style="color:var(--success);margin-right:4px;"></i>
      The student and parent will be notified and can start their cricket journey from the assigned start date.
    </div>
  `;
  showModal('Admit ' + studentName, modalHtml, [
    { label: 'Confirm Admission', class: 'btn-primary btn-full', onclick: "closeModal();showToast('" + studentName + " admitted successfully!', 'success')" }
  ]);
}

function updateScoreDisplay() {
  const drillSlider = document.getElementById('drillSlider');
  const assessSlider = document.getElementById('assessSlider');
  const drillValue = document.getElementById('drillValue');
  const assessValue = document.getElementById('assessValue');
  const totalScore = document.getElementById('totalScore');

  if (drillSlider && assessSlider && drillValue && assessValue && totalScore) {
    const drill = parseInt(drillSlider.value);
    const assess = parseInt(assessSlider.value);
    drillValue.textContent = drill + '/15';
    assessValue.textContent = assess + '/10';

    const drillPct = (drill / 15) * 100;
    const assessPct = (assess / 10) * 100;
    const weighted = Math.round((drillPct * 0.6) + (assessPct * 0.4));
    totalScore.textContent = weighted + '%';
  }
}

// ============================================
// TECHNICAL SUPPORT SCREENS
// ============================================

screens['support-tickets'] = () => {
  const openCount = supportTickets.filter(t => t.status === 'Open').length;
  const inProgressCount = supportTickets.filter(t => t.status === 'In Progress').length;
  const resolvedCount = supportTickets.filter(t => t.status === 'Resolved').length;

  const statusIcon = (status) => {
    if (status === 'Open') return '<i class="fas fa-exclamation-circle" style="color:var(--warning);font-size:16px;"></i>';
    if (status === 'In Progress') return '<i class="fas fa-spinner" style="color:var(--info);font-size:16px;"></i>';
    return '<i class="fas fa-check-circle" style="color:var(--success);font-size:16px;"></i>';
  };

  const priorityStyle = (priority) => {
    if (priority === 'High') return 'background:var(--danger-bg);color:var(--danger);';
    if (priority === 'Medium') return 'background:var(--warning-bg);color:var(--warning);';
    return 'background:var(--bg-tertiary);color:var(--text-secondary);';
  };

  const categoryStyle = (category) => {
    if (category === 'Technical Issue') return 'background:var(--danger-bg);color:var(--danger);';
    if (category === 'Bug Report') return 'background:var(--warning-bg);color:var(--warning);';
    if (category === 'How-to') return 'background:var(--info-bg);color:var(--info);';
    if (category === 'Feature Request') return 'background:var(--accent-bg);color:var(--accent);';
    return 'background:var(--bg-tertiary);color:var(--text-secondary);';
  };

  return `
  <div class="screen-enter">
    <div style="padding:16px 16px 0;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;flex:1;">Technical Support</h3>
        <i class="fas fa-headset" style="color:var(--accent);font-size:18px;"></i>
      </div>

      <!-- Stats Row -->
      <div style="display:flex;gap:10px;margin-bottom:16px;" class="fade-in-up">
        <div style="flex:1;background:var(--warning-bg);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:var(--warning);">${openCount}</div>
          <div style="font-size:11px;color:var(--warning);font-weight:600;">Open</div>
        </div>
        <div style="flex:1;background:var(--info-bg);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:var(--info);">${inProgressCount}</div>
          <div style="font-size:11px;color:var(--info);font-weight:600;">In Progress</div>
        </div>
        <div style="flex:1;background:var(--success-bg);border-radius:12px;padding:12px;text-align:center;">
          <div style="font-size:20px;font-weight:800;color:var(--success);">${resolvedCount}</div>
          <div style="font-size:11px;color:var(--success);font-weight:600;">Resolved</div>
        </div>
      </div>

      <!-- Raise New Ticket Button -->
      <button class="btn btn-primary" style="width:100%;margin-bottom:16px;" onclick="navigateTo('create-ticket')">
        <i class="fas fa-plus"></i> Raise New Ticket
      </button>

      <!-- Filter Tabs -->
      <div style="display:flex;gap:8px;margin-bottom:16px;overflow-x:auto;">
        <div class="filter-chip active" onclick="toggleFilter(this)">All</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Open</div>
        <div class="filter-chip" onclick="toggleFilter(this)">In Progress</div>
        <div class="filter-chip" onclick="toggleFilter(this)">Resolved</div>
      </div>
    </div>

    <!-- Ticket List -->
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;margin:0 16px 24px;">
      ${supportTickets.map((t, i) => `
        <div class="chat-item fade-in-up${i === supportTickets.length - 1 ? '" style="border-bottom:none;"' : '"'} onclick="selectedTicketId='${t.id}';navigateTo('ticket-detail')">
          <div style="flex-shrink:0;">${statusIcon(t.status)}</div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <span style="font-weight:700;font-size:var(--font-size-sm);color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.subject}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;flex-wrap:wrap;">
              <span style="font-size:10px;padding:2px 8px;border-radius:10px;font-weight:600;${categoryStyle(t.category)}">${t.category}</span>
              <span style="font-size:10px;padding:2px 8px;border-radius:10px;font-weight:600;${priorityStyle(t.priority)}">${t.priority}</span>
            </div>
            <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">${t.id} · Updated ${t.lastUpdate}</div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;flex-shrink:0;"></i>
        </div>
      `).join('')}
    </div>
  </div>
`;
};

screens['ticket-detail'] = () => {
  const ticket = supportTickets.find(t => t.id === selectedTicketId) || supportTickets[0];

  const statusStyle = (status) => {
    if (status === 'Open') return 'background:var(--warning-bg);color:var(--warning);';
    if (status === 'In Progress') return 'background:var(--info-bg);color:var(--info);';
    return 'background:var(--success-bg);color:var(--success);';
  };

  const priorityStyle = (priority) => {
    if (priority === 'High') return 'background:var(--danger-bg);color:var(--danger);';
    if (priority === 'Medium') return 'background:var(--warning-bg);color:var(--warning);';
    return 'background:var(--bg-tertiary);color:var(--text-secondary);';
  };

  const categoryStyle = (category) => {
    if (category === 'Technical Issue') return 'background:var(--danger-bg);color:var(--danger);';
    if (category === 'Bug Report') return 'background:var(--warning-bg);color:var(--warning);';
    if (category === 'How-to') return 'background:var(--info-bg);color:var(--info);';
    if (category === 'Feature Request') return 'background:var(--accent-bg);color:var(--accent);';
    return 'background:var(--bg-tertiary);color:var(--text-secondary);';
  };

  const isSupport = (msg) => msg.role === 'Soruban Support';

  return `
  <div class="screen-enter" style="display:flex;flex-direction:column;height:100%;">
    <!-- Header -->
    <div style="padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">${ticket.id}</div>
        <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Created ${ticket.created}</div>
      </div>
      <span style="font-size:11px;padding:4px 10px;border-radius:20px;font-weight:600;${statusStyle(ticket.status)}">${ticket.status}</span>
    </div>

    <!-- Ticket Info -->
    <div style="padding:16px;border-bottom:1px solid var(--border);">
      <h3 style="font-size:var(--font-size-base);font-weight:700;color:var(--text-primary);margin-bottom:8px;">${ticket.subject}</h3>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
        <span style="font-size:11px;padding:3px 10px;border-radius:10px;font-weight:600;${categoryStyle(ticket.category)}">${ticket.category}</span>
        <span style="font-size:11px;padding:3px 10px;border-radius:10px;font-weight:600;${priorityStyle(ticket.priority)}">${ticket.priority} Priority</span>
      </div>
      <p style="font-size:var(--font-size-sm);color:var(--text-secondary);line-height:1.5;">${ticket.description}</p>
    </div>

    <!-- Conversation -->
    <div style="flex:1;overflow-y:auto;padding:16px;">
      <div class="section-title" style="margin-bottom:12px;">Conversation</div>
      ${ticket.messages.map(m => `
        <div style="display:flex;${isSupport(m) ? '' : 'justify-content:flex-end;'}margin-bottom:14px;" class="fade-in-up">
          <div style="max-width:85%;padding:12px 14px;border-radius:${isSupport(m) ? '14px 14px 14px 4px' : '14px 14px 4px 14px'};background:${isSupport(m) ? 'var(--bg-card)' : 'var(--accent)'};color:${isSupport(m) ? 'var(--text-primary)' : '#fff'};font-size:var(--font-size-sm);line-height:1.5;${isSupport(m) ? 'border:1px solid var(--border);' : ''}">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <span style="font-size:11px;font-weight:700;${isSupport(m) ? 'color:var(--info);' : 'color:rgba(255,255,255,0.85);'}">${m.from}</span>
              <span style="font-size:10px;${isSupport(m) ? 'color:var(--text-tertiary);' : 'color:rgba(255,255,255,0.6);'}">${m.role}</span>
            </div>
            <div>${m.text}</div>
            <div style="font-size:10px;${isSupport(m) ? 'color:var(--text-tertiary);' : 'color:rgba(255,255,255,0.7);'}margin-top:6px;text-align:right;">${m.time}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Reply Input -->
    <div style="padding:10px 16px;border-top:1px solid var(--border);display:flex;align-items:center;gap:10px;background:var(--bg-primary);">
      <i class="fas fa-paperclip" style="font-size:20px;color:var(--text-tertiary);cursor:pointer;" onclick="showToast('Attach file', 'info')"></i>
      <input type="text" style="flex:1;padding:10px 14px;border-radius:20px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;" placeholder="Type your reply...">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;" onclick="showToast('Reply sent!', 'success')">
        <i class="fas fa-paper-plane" style="color:#fff;font-size:14px;"></i>
      </div>
    </div>
  </div>
`;
};

screens['create-ticket'] = () => `
  <div class="screen-enter">
    <div style="padding:16px 16px 0;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3 style="font-size:var(--font-size-lg);font-weight:700;flex:1;">Raise a Ticket</h3>
      </div>

      <!-- Category -->
      <div style="margin-bottom:16px;" class="fade-in-up">
        <label style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Category</label>
        <select style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;appearance:auto;">
          <option value="">Select a category...</option>
          <option value="Technical Issue">Technical Issue</option>
          <option value="Bug Report">Bug Report</option>
          <option value="How-to">How-to</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Billing">Billing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <!-- Subject -->
      <div style="margin-bottom:16px;" class="fade-in-up">
        <label style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Subject</label>
        <input type="text" style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;box-sizing:border-box;" placeholder="Brief summary of the issue...">
      </div>

      <!-- Priority -->
      <div style="margin-bottom:16px;" class="fade-in-up">
        <label style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Priority</label>
        <div style="display:flex;gap:10px;">
          <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);cursor:pointer;">
            <input type="radio" name="priority" value="Low" checked style="accent-color:var(--accent);">
            <span style="font-size:14px;color:var(--text-primary);">Low</span>
          </label>
          <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);cursor:pointer;">
            <input type="radio" name="priority" value="Medium" style="accent-color:var(--accent);">
            <span style="font-size:14px;color:var(--text-primary);">Medium</span>
          </label>
          <label style="flex:1;display:flex;align-items:center;gap:8px;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);cursor:pointer;">
            <input type="radio" name="priority" value="High" style="accent-color:var(--accent);">
            <span style="font-size:14px;color:var(--text-primary);">High</span>
          </label>
        </div>
      </div>

      <!-- Description -->
      <div style="margin-bottom:16px;" class="fade-in-up">
        <label style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);display:block;margin-bottom:6px;">Description</label>
        <textarea style="width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:14px;outline:none;resize:vertical;min-height:120px;font-family:inherit;box-sizing:border-box;" placeholder="Describe your issue in detail..."></textarea>
      </div>

      <!-- Attach Screenshot -->
      <div style="margin-bottom:24px;" class="fade-in-up">
        <button class="btn btn-ghost" style="width:100%;border:1px dashed var(--border);padding:14px;border-radius:12px;display:flex;align-items:center;justify-content:center;gap:8px;" onclick="showToast('Screenshot attached', 'success')">
          <i class="fas fa-camera" style="color:var(--text-tertiary);"></i>
          <span style="font-size:14px;color:var(--text-secondary);">Attach Screenshot (Optional)</span>
        </button>
      </div>

      <!-- Submit Button -->
      <button class="btn btn-primary" style="width:100%;margin-bottom:24px;" onclick="showToast('Ticket submitted successfully!', 'success');setTimeout(()=>goBack(),500);">
        <i class="fas fa-paper-plane"></i> Submit Ticket
      </button>
    </div>
  </div>
`;

// ============================================
// NAVIGATION CONFIG
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNav({
    defaultScreen: 'splash',
    tabMapping: {
      'home': ['notifications'],
      'students': ['student-detail', 'score-skill', 'add-student', 'promote-student'],
      'attendance': ['attendance-report'],
      'feed': ['create-post'],
      'more': ['curriculum', 'fee-management', 'staff-chat', 'admissions', 'staff-management', 'settings', 'chat-detail', 'matches', 'match-detail', 'create-match', 'support-tickets', 'ticket-detail', 'create-ticket']
    }
  });
});

// --- onScreenReady for score slider init ---
function onScreenReady(screenId) {
  if (screenId === 'score-skill') {
    updateScoreDisplay();
  }

  // Handle hiding nav for setup wizard screens
  const hideNavScreens = ['splash', 'login', 'otp', 'setup-wizard', 'setup-wizard-2', 'setup-wizard-3', 'setup-wizard-4'];
  const bottomNav = document.getElementById('bottom-nav');
  const contentEl = document.getElementById('screen-content');
  if (bottomNav && hideNavScreens.includes(screenId)) {
    bottomNav.style.display = 'none';
    if (contentEl) contentEl.classList.add('full-height');
  }
}
