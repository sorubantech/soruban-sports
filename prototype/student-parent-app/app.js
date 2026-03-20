/* ============================================
   Soruban Sports — Student & Parent App
   Cricket Academy Platform
   ============================================ */

// --- Student Data ---
const student = {
  name: 'Ravi Kumar',
  age: 12,
  role: 'Batsman',
  stage: 3,
  stageName: 'Developing',
  academy: 'SAM Cricket Academy',
  batch: 'U-14 Morning Batch',
  joinDate: 'Aug 2025',
  overallScore: 68,
  streak: 12,
  avatar: 'RK'
};

// --- Parent Data ---
const parent = {
  name: 'Mr. Kumar',
  phone: '+91 98765 12340',
  relation: 'Father'
};

// --- Skills Data ---
const skills = {
  batting: [
    { name: 'Cover Drive', score: 85, status: 'passed', icon: 'fa-baseball-bat-ball' },
    { name: 'Pull Shot', score: 78, status: 'passed', icon: 'fa-baseball-bat-ball' },
    { name: 'Cut Shot', score: 60, status: 'in-progress', icon: 'fa-baseball-bat-ball' },
    { name: 'On Drive', score: 0, status: 'locked', icon: 'fa-baseball-bat-ball' },
    { name: 'Running B/W Wickets', score: 0, status: 'locked', icon: 'fa-running' }
  ],
  bowling: [
    { name: 'Grip & Action', score: 80, status: 'passed', icon: 'fa-circle-dot' },
    { name: 'Line & Length', score: 55, status: 'in-progress', icon: 'fa-circle-dot' }
  ],
  fielding: [
    { name: 'Catching', score: 90, status: 'passed', icon: 'fa-hands' },
    { name: 'Ground Fielding', score: 75, status: 'passed', icon: 'fa-person-running' }
  ],
  fitness: [
    { name: 'Endurance', score: 65, status: 'in-progress', icon: 'fa-heart-pulse' },
    { name: 'Agility', score: 82, status: 'passed', icon: 'fa-bolt' }
  ]
};

// --- Feed Posts ---
const feedPosts = [
  { id: 1, type: 'announcement', author: 'SAM Cricket Academy', avatar: 'CA', time: '2h ago', text: 'Inter-academy tournament registrations are now open! U-14 teams will compete on April 5th. Register through the Play tab.', hasImage: true, imageIcon: 'fa-trophy', likes: 24, comments: 8 },
  { id: 2, type: 'achievement', author: 'Ravi Kumar', avatar: 'RK', time: '5h ago', text: 'Scored 85% on Cover Drive assessment! Stage 3 batting milestone unlocked.', hasImage: false, likes: 18, comments: 5, badge: 'Achievement' },
  { id: 3, type: 'post', author: 'Coach Venkat', avatar: 'CV', time: '1d ago', text: 'Great session today with the U-14 batch! Focus areas for this week: front foot drives and calling between wickets. Keep practicing your drills at home.', hasImage: true, imageIcon: 'fa-video', likes: 32, comments: 12 },
  { id: 4, type: 'announcement', author: 'SAM Cricket Academy', avatar: 'CA', time: '2d ago', text: 'Academy holiday on March 20th (Holi). Sessions resume March 21st. Practice nets available for self-practice.', hasImage: false, likes: 15, comments: 3 },
  { id: 5, type: 'achievement', author: 'Priya S', avatar: 'PS', time: '3d ago', text: 'Completed Stage 2 Fielding module with 92% score! Moving to advanced catching drills.', hasImage: false, likes: 27, comments: 9, badge: 'Stage Up' },
  { id: 6, type: 'post', author: 'Academy Admin', avatar: 'AA', time: '4d ago', text: 'New coaching videos uploaded for Bowling Basics — Grip & Action. Check the Learn tab for updated technique videos from Coach Ramesh.', hasImage: true, imageIcon: 'fa-play-circle', likes: 41, comments: 7 }
];

// --- Parent Cricket Stats ---
const parentCricket = {
  playerName: 'Mr. Kumar',
  role: 'All-Rounder',
  battingStyle: 'Right Hand Bat',
  bowlingStyle: 'Medium Pace',
  skillLevel: 'Intermediate',
  matches: 8,
  runs: 186,
  avg: 23.2,
  highScore: 56,
  wickets: 5,
  bestBowling: '2/18',
  catches: 4,
  strikeRate: 112.7,
  economyRate: 7.2
};

// --- Attendance Data ---
const attendance = {
  month: 'March 2026',
  attended: 18,
  total: 22,
  percentage: 82,
  // 1=present, 0=absent, -1=holiday, null=future
  days: [
    1,1,0,1,1,1,-1,  // Week 1 (Mon-Sun)
    1,1,1,0,1,1,-1,  // Week 2
    1,1,1,1,0,1,-1,  // Week 3
    null,null,null,null,null,null,null // Week 4 (future)
  ]
};

// --- Schedule ---
const todaySchedule = {
  time: '6:00 AM - 8:00 AM',
  type: 'Morning Practice',
  focus: 'Batting Drills — Cut Shot',
  coach: 'Coach Venkat',
  venue: 'Main Ground, Net 3'
};

// --- Notifications ---
const notifications = [
  { id: 1, type: 'assessment', icon: 'fa-clipboard-check', color: '#059669', title: 'Assessment Scored', desc: 'Cover Drive assessment scored: 85%. Great work!', time: '2h ago', unread: true },
  { id: 2, type: 'attendance', icon: 'fa-calendar-check', color: '#3b82f6', title: 'Attendance Marked', desc: 'Present — Morning Practice (March 15)', time: '1d ago', unread: true },
  { id: 3, type: 'post', icon: 'fa-newspaper', color: '#8b5cf6', title: 'Academy Post', desc: 'SAM Cricket Academy posted a new announcement', time: '2d ago', unread: false },
  { id: 4, type: 'match', icon: 'fa-trophy', color: '#f59e0b', title: 'Match Invite', desc: 'Parent Cricket League — Match on March 22nd. Confirm availability.', time: '3d ago', unread: false },
  { id: 5, type: 'stage', icon: 'fa-arrow-up', color: '#10b981', title: 'Stage Promotion', desc: 'Congratulations! Ravi promoted to Stage 3 (Developing)', time: '1w ago', unread: false },
  { id: 6, type: 'fee', icon: 'fa-indian-rupee-sign', color: '#ef4444', title: 'Fee Reminder', desc: 'April fee of Rs.3,500 due by March 31st', time: '1w ago', unread: false }
];

// --- Upcoming Assessments ---
const upcomingAssessments = [
  { id: 1, skill: 'Cut Shot', category: 'Batting', date: 'March 22, 2026', time: '7:00 AM', coach: 'Coach Venkat' }
];

// --- Assessment Results ---
const assessmentResults = [
  { id: 1, skill: 'Cover Drive', category: 'Batting', score: 85, grade: 'A', date: 'March 10, 2026', coachNote: 'Excellent footwork and timing. Work on placement towards mid-off.' },
  { id: 2, skill: 'Pull Shot', category: 'Batting', score: 78, grade: 'B+', date: 'March 3, 2026', coachNote: 'Good technique. Need to roll the wrists more for control.' },
  { id: 3, skill: 'Catching', category: 'Fielding', score: 90, grade: 'A+', date: 'Feb 25, 2026', coachNote: 'Outstanding reflexes. Best in the batch.' }
];

// --- Certificates ---
const certificates = [
  { id: 1, title: 'Stage 2 — Foundation Complete', date: 'Jan 2026', icon: '🏆' },
  { id: 2, title: 'Fielding Excellence Award', date: 'Feb 2026', icon: '🥇' }
];

// --- Academies (for search) ---
const academies = [
  { id: 1, name: 'SAM Cricket Academy', rating: 4.6, distance: '2.1 km', students: 180, location: 'Nungambakkam, Chennai', batches: ['U-10', 'U-12', 'U-14', 'U-16', 'Senior'], fee: '3,500/month' },
  { id: 2, name: 'MRF Pace Foundation', rating: 4.8, distance: '5.4 km', students: 120, location: 'Chepauk, Chennai', batches: ['U-14', 'U-16', 'U-19'], fee: '5,000/month' },
  { id: 3, name: 'VB Cricket Academy', rating: 4.3, distance: '3.8 km', students: 95, location: 'T. Nagar, Chennai', batches: ['U-10', 'U-12', 'U-14'], fee: '2,800/month' }
];

// --- User Role ---
let userRole = 'student'; // 'student' or 'parent'

// --- Screen Definitions ---
const screens = {};

// ========== AUTH SCREENS ==========

// ---- SPLASH SCREEN ----
screens['splash'] = () => `
  <div class="login-bg screen-enter" onclick="navigateTo('login')" style="cursor:pointer;">
    <div class="login-logo float" style="width:90px;height:90px;font-size:42px;">
      🏏
    </div>
    <div class="login-title" style="font-size:28px;letter-spacing:2px;">SORUBAN SPORTS</div>
    <div class="login-subtitle" style="font-size:14px;margin-bottom:40px;">Cricket Academy Platform</div>
    <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:40px;">
      <i class="fas fa-hand-pointer"></i> Tap to continue
    </div>
  </div>
`;

// ---- LOGIN SCREEN ----
screens['login'] = () => `
  <div class="login-bg screen-enter">
    <div class="login-logo" style="width:70px;height:70px;font-size:32px;margin-bottom:12px;">
      🏏
    </div>
    <div class="login-title">Soruban Sports</div>
    <div class="login-subtitle" style="margin-bottom:28px;">Choose your role to continue</div>

    <!-- Role Selection -->
    <div class="role-card fade-in-up fade-in-up-1" onclick="userRole='student'; document.getElementById('login-phone-section').style.display='block'; document.getElementById('role-section').style.display='none';">
      <div class="role-card-icon"><i class="fas fa-user-graduate"></i></div>
      <div class="role-card-text">
        <div class="role-name">I am a Student</div>
        <div class="role-desc">Access your training, skills & assessments</div>
      </div>
      <i class="fas fa-chevron-right" style="color:rgba(255,255,255,0.5);"></i>
    </div>

    <div class="role-card fade-in-up fade-in-up-2" onclick="userRole='parent'; document.getElementById('login-phone-section').style.display='block'; document.getElementById('role-section').style.display='none';">
      <div class="role-card-icon"><i class="fas fa-user-shield"></i></div>
      <div class="role-card-text">
        <div class="role-name">I am a Parent</div>
        <div class="role-desc">Track your child's progress & play cricket</div>
      </div>
      <i class="fas fa-chevron-right" style="color:rgba(255,255,255,0.5);"></i>
    </div>

    <div id="role-section"></div>

    <!-- Phone Input (hidden initially) -->
    <div id="login-phone-section" style="display:none;width:100%;max-width:300px;margin-top:20px;">
      <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:12px;">
        <i class="fas fa-user-check"></i> Logging in as <span style="font-weight:700;color:#fff;" id="role-label-text">Student</span>
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:12px;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px;">Mobile Number</label>
        <input type="tel" class="form-input" placeholder="+91 98765 12340" value="+91 98765 12340" style="background:rgba(255,255,255,0.12);border-color:rgba(255,255,255,0.2);color:#fff;">
      </div>
      <button class="btn btn-full btn-lg" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3);backdrop-filter:blur(8px);" onclick="navigateTo('otp')">
        <i class="fas fa-paper-plane"></i> Get OTP
      </button>
      <p style="margin-top:16px;font-size:11px;color:rgba(255,255,255,0.4);cursor:pointer;" onclick="document.getElementById('login-phone-section').style.display='none';">
        <i class="fas fa-arrow-left"></i> Choose different role
      </p>
    </div>
  </div>
`;

// ---- OTP SCREEN ----
screens['otp'] = () => `
  <div class="login-bg screen-enter">
    <div class="login-logo" style="width:64px;height:64px;font-size:26px;margin-bottom:12px;">
      <i class="fas fa-shield-halved"></i>
    </div>
    <div class="login-title" style="font-size:20px;">Verify OTP</div>
    <div class="login-subtitle" style="margin-bottom:24px;">Enter the 4-digit code sent to your mobile</div>

    <div class="otp-inputs">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 0)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 1)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 2)">
      <input type="text" maxlength="1" oninput="handleOtpInput(this, 3)">
    </div>

    <button class="btn btn-full btn-lg otp-verify-btn" style="background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.3);max-width:300px;backdrop-filter:blur(8px);" onclick="verifyOtp()">
      <i class="fas fa-check-circle"></i> Verify & Continue
    </button>

    <p style="margin-top:20px;font-size:12px;color:rgba(255,255,255,0.5);">
      Didn't receive? <span style="color:#fff;font-weight:600;cursor:pointer;" onclick="showToast('OTP resent!', 'success')">Resend OTP</span>
    </p>
  </div>
`;

// ========== HOME TAB ==========

// ---- STUDENT HOME ----
screens['home'] = () => {
  const pct = student.overallScore;
  const dashArray = (pct * 188.5 / 100).toFixed(1);

  return `
    <div class="screen-pad screen-enter">
      <!-- Greeting -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div>
          <h3 style="font-size:var(--font-size-xl);">Good morning, ${student.name.split(' ')[0]}!</h3>
          <p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">
            <i class="fas fa-graduation-cap" style="color:var(--accent);"></i> ${student.academy}
          </p>
        </div>
        <div style="width:40px;height:40px;border-radius:var(--radius-full);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;cursor:pointer;" onclick="navigateTo('profile')">
          ${student.avatar}
        </div>
      </div>

      <!-- Hero Card with Progress Ring -->
      <div class="hero-card fade-in-up fade-in-up-1">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:var(--font-size-xs);opacity:0.85;">Stage ${student.stage} — ${student.stageName}</div>
            <div style="font-family:var(--font-display);font-size:14px;font-weight:700;margin-top:4px;">${student.role} &middot; Age ${student.age}</div>
            <div style="font-size:var(--font-size-xs);opacity:0.7;margin-top:6px;">${student.batch}</div>
          </div>
          <div class="progress-ring-container">
            <svg width="72" height="72" viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" stroke="rgba(255,255,255,0.2)" stroke-width="6" fill="none"/>
              <circle cx="36" cy="36" r="30" stroke="#fff" stroke-width="6" fill="none" stroke-dasharray="${dashArray}" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 36 36)"/>
            </svg>
            <div class="progress-ring-text">${pct}%</div>
          </div>
        </div>
      </div>

      <!-- Today's Schedule -->
      <div class="section-header fade-in-up fade-in-up-2">
        <span class="section-title">Today's Schedule</span>
        <span class="section-link" onclick="navigateTo('attendance')">View All</span>
      </div>
      <div class="card fade-in-up fade-in-up-2" style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:var(--radius-md);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-clock" style="color:var(--accent);font-size:18px;"></i>
        </div>
        <div style="flex:1;">
          <div style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);">${todaySchedule.type}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${todaySchedule.time} &middot; ${todaySchedule.venue}</div>
          <div style="font-size:var(--font-size-xs);color:var(--accent);margin-top:2px;">${todaySchedule.focus}</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);"></i>
      </div>

      <!-- Next Up Skill -->
      <div class="section-header fade-in-up fade-in-up-3">
        <span class="section-title">Next Up</span>
        <span class="section-link" onclick="navigateTo('learn')">See Curriculum</span>
      </div>
      <div class="skill-card fade-in-up fade-in-up-3" onclick="navigateTo('skill-detail')">
        <div class="skill-icon" style="background:rgba(245,158,11,0.1);color:#F59E0B;">
          <i class="fas fa-baseball-bat-ball"></i>
        </div>
        <div class="skill-info">
          <div class="skill-name">Cut Shot</div>
          <div class="skill-status">In Progress &middot; Stage 3 Batting</div>
          <div class="progress-bar" style="margin-top:6px;height:4px;">
            <div class="progress-fill accent" style="width:60%;"></div>
          </div>
        </div>
        <div class="skill-score" style="color:var(--accent);">60%</div>
      </div>

      <!-- Recent Achievements -->
      <div class="section-header fade-in-up fade-in-up-4">
        <span class="section-title">Recent Achievements</span>
      </div>
      <div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;" class="fade-in-up fade-in-up-4">
        <div style="min-width:140px;padding:12px;background:var(--accent-bg);border-radius:var(--radius-md);text-align:center;">
          <div style="font-size:24px;margin-bottom:4px;">🏆</div>
          <div style="font-size:var(--font-size-xs);font-weight:600;color:var(--text-primary);">Cover Drive</div>
          <div style="font-size:10px;color:var(--accent);font-weight:700;">85% — Grade A</div>
        </div>
        <div style="min-width:140px;padding:12px;background:rgba(59,130,246,0.08);border-radius:var(--radius-md);text-align:center;">
          <div style="font-size:24px;margin-bottom:4px;">🥇</div>
          <div style="font-size:var(--font-size-xs);font-weight:600;color:var(--text-primary);">Catching</div>
          <div style="font-size:10px;color:#3b82f6;font-weight:700;">90% — Grade A+</div>
        </div>
        <div style="min-width:140px;padding:12px;background:rgba(139,92,246,0.08);border-radius:var(--radius-md);text-align:center;">
          <div style="font-size:24px;margin-bottom:4px;">⭐</div>
          <div style="font-size:var(--font-size-xs);font-weight:600;color:var(--text-primary);">12 Day Streak</div>
          <div style="font-size:10px;color:#8b5cf6;font-weight:700;">Consistency!</div>
        </div>
      </div>

      <!-- Attendance Bar -->
      <div class="section-header fade-in-up fade-in-up-5" style="margin-top:20px;">
        <span class="section-title">Attendance This Month</span>
        <span class="section-link" onclick="navigateTo('attendance')">${attendance.percentage}%</span>
      </div>
      <div class="fade-in-up fade-in-up-5">
        <div class="progress-bar" style="height:8px;">
          <div class="progress-fill accent" style="width:${attendance.percentage}%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;">
          <span style="font-size:var(--font-size-xs);color:var(--text-secondary);">${attendance.attended} of ${attendance.total} sessions</span>
          <span style="font-size:var(--font-size-xs);color:var(--accent);font-weight:600;">🔥 ${student.streak} day streak</span>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions fade-in-up fade-in-up-6" style="margin-top:20px;">
        <div class="quick-action" onclick="navigateTo('play')">
          <i class="fas fa-clipboard-check"></i>
          <span>Assessments</span>
        </div>
        <div class="quick-action" onclick="navigateTo('feed')">
          <i class="fas fa-newspaper"></i>
          <span>Academy Feed</span>
        </div>
        <div class="quick-action" onclick="navigateTo('academy-search')">
          <i class="fas fa-search"></i>
          <span>Find Academy</span>
        </div>
        <div class="quick-action" onclick="navigateTo('notifications')">
          <i class="fas fa-bell"></i>
          <span>Notifications</span>
        </div>
      </div>
    </div>
  `;
};

// ---- PARENT HOME ----
screens['parent-home'] = () => {
  const pct = student.overallScore;
  const dashArray = (pct * 188.5 / 100).toFixed(1);

  return `
    <div class="screen-pad screen-enter">
      <!-- Greeting -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div>
          <h3 style="font-size:var(--font-size-xl);">Hello, ${parent.name}!</h3>
          <p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">
            <i class="fas fa-child" style="color:var(--accent);"></i> ${student.name}'s Progress
          </p>
        </div>
        <div style="width:40px;height:40px;border-radius:var(--radius-full);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;cursor:pointer;" onclick="navigateTo('profile')">
          MK
        </div>
      </div>

      <!-- Child Progress Hero -->
      <div class="hero-card fade-in-up fade-in-up-1">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:var(--font-size-sm);font-weight:700;">${student.name}</div>
            <div style="font-size:var(--font-size-xs);opacity:0.85;margin-top:4px;">Stage ${student.stage} — ${student.stageName}</div>
            <div style="font-size:var(--font-size-xs);opacity:0.7;margin-top:2px;">${student.role} &middot; ${student.batch}</div>
          </div>
          <div class="progress-ring-container">
            <svg width="72" height="72" viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" stroke="rgba(255,255,255,0.2)" stroke-width="6" fill="none"/>
              <circle cx="36" cy="36" r="30" stroke="#fff" stroke-width="6" fill="none" stroke-dasharray="${dashArray}" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 36 36)"/>
            </svg>
            <div class="progress-ring-text">${pct}%</div>
          </div>
        </div>
      </div>

      <!-- Monthly Summary Stats -->
      <div class="section-header fade-in-up fade-in-up-2">
        <span class="section-title">Monthly Summary</span>
        <span class="section-link">${attendance.month}</span>
      </div>
      <div class="stat-row fade-in-up fade-in-up-2">
        <div class="stat-box">
          <div class="stat-val">${attendance.attended}/${attendance.total}</div>
          <div class="stat-lbl">Sessions</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">6</div>
          <div class="stat-lbl">Skills Done</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">${pct}%</div>
          <div class="stat-lbl">Avg Score</div>
        </div>
      </div>

      <!-- Progress Chart Placeholder -->
      <div class="section-header fade-in-up fade-in-up-3" style="margin-top:20px;">
        <span class="section-title">Progress Trend</span>
      </div>
      <div class="card fade-in-up fade-in-up-3" style="height:140px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;">
        <i class="fas fa-chart-line" style="font-size:32px;color:var(--accent);opacity:0.5;"></i>
        <span style="font-size:var(--font-size-xs);color:var(--text-tertiary);">Progress chart — Available in full app</span>
      </div>

      <!-- Skills Status List -->
      <div class="section-header fade-in-up fade-in-up-4" style="margin-top:20px;">
        <span class="section-title">Skills Status</span>
        <span class="section-link" onclick="navigateTo('learn')">View All</span>
      </div>
      <div class="fade-in-up fade-in-up-4">
        ${skills.batting.slice(0, 3).map(s => `
          <div class="skill-card" onclick="navigateTo('skill-detail')">
            <div class="skill-icon" style="background:${s.status === 'passed' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)'};color:${s.status === 'passed' ? '#10b981' : '#f59e0b'};">
              <i class="fas ${s.icon}"></i>
            </div>
            <div class="skill-info">
              <div class="skill-name">${s.name}</div>
              <div class="skill-status">${s.status === 'passed' ? 'Completed' : 'In Progress'} &middot; Batting</div>
            </div>
            <div class="skill-score" style="color:${s.status === 'passed' ? 'var(--success)' : 'var(--warning)'};">${s.score}%</div>
          </div>
        `).join('')}
      </div>

      <!-- Fee Status -->
      <div class="section-header fade-in-up fade-in-up-5" style="margin-top:20px;">
        <span class="section-title">Fee Status</span>
      </div>
      <div class="card fade-in-up fade-in-up-5">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <div style="font-weight:600;color:var(--text-primary);">April 2026 Fee</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Due: March 31, 2026</div>
          </div>
          <div style="font-family:var(--font-display);font-weight:700;font-size:18px;color:var(--text-primary);">Rs.3,500</div>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-primary btn-full" onclick="showToast('Payment gateway coming soon!', 'info')">
            <i class="fas fa-indian-rupee-sign"></i> Pay Now
          </button>
          <button class="btn btn-ghost" style="border:1px solid var(--border);" onclick="showToast('Payment history coming soon!', 'info')">
            <i class="fas fa-history"></i>
          </button>
        </div>
      </div>

      <!-- Parent Cricket Quick Link -->
      <div class="card fade-in-up fade-in-up-6" style="margin-top:12px;display:flex;align-items:center;gap:12px;cursor:pointer;" onclick="navigateTo('parent-cricket')">
        <div style="width:44px;height:44px;border-radius:var(--radius-md);background:rgba(245,158,11,0.1);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-trophy" style="color:#f59e0b;font-size:18px;"></i>
        </div>
        <div style="flex:1;">
          <div style="font-weight:600;color:var(--text-primary);">Parent Cricket League</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Next match: March 22 &middot; ${parentCricket.matches} matches played</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);"></i>
      </div>
    </div>
  `;
};

// ========== LEARN TAB ==========

// ---- LEARN (CURRICULUM) ----
screens['learn'] = () => {
  const totalSkills = Object.values(skills).flat().length;
  const passedSkills = Object.values(skills).flat().filter(s => s.status === 'passed').length;
  const progressPct = Math.round((passedSkills / totalSkills) * 100);

  const statusIcon = (status) => {
    if (status === 'passed') return '<span style="color:var(--success);font-size:16px;">&#9989;</span>';
    if (status === 'in-progress') return '<span style="color:#f59e0b;font-size:14px;">&#128260;</span>';
    return '<span style="color:var(--text-tertiary);font-size:14px;">&#128274;</span>';
  };

  const categoryIcons = { batting: 'fa-baseball-bat-ball', bowling: 'fa-circle-dot', fielding: 'fa-hands', fitness: 'fa-heart-pulse' };
  const categoryColors = { batting: '#059669', bowling: '#3b82f6', fielding: '#8b5cf6', fitness: '#ef4444' };

  let categoriesHtml = '';
  Object.entries(skills).forEach(([cat, items]) => {
    const catPassed = items.filter(s => s.status === 'passed').length;
    const catTotal = items.length;
    const catPct = Math.round((catPassed / catTotal) * 100);

    categoriesHtml += `
      <div class="card" style="margin-bottom:12px;cursor:pointer;" onclick="this.querySelector('.skill-list').style.display = this.querySelector('.skill-list').style.display === 'none' ? 'block' : 'none'; this.querySelector('.expand-icon').classList.toggle('fa-chevron-down'); this.querySelector('.expand-icon').classList.toggle('fa-chevron-up');">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:40px;height:40px;border-radius:var(--radius-md);background:${categoryColors[cat]}15;display:flex;align-items:center;justify-content:center;">
            <i class="fas ${categoryIcons[cat]}" style="color:${categoryColors[cat]};font-size:16px;"></i>
          </div>
          <div style="flex:1;">
            <div style="font-weight:600;color:var(--text-primary);text-transform:capitalize;">${cat}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${catPassed}/${catTotal} completed &middot; ${catPct}%</div>
          </div>
          <i class="fas fa-chevron-down expand-icon" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>
        <div class="progress-bar" style="margin-top:10px;height:4px;">
          <div class="progress-fill accent" style="width:${catPct}%;"></div>
        </div>
        <div class="skill-list" style="display:none;margin-top:12px;border-top:1px solid var(--border);padding-top:10px;">
          ${items.map(s => `
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;${s.status !== 'locked' ? 'cursor:pointer;' : 'opacity:0.5;'}" onclick="${s.status !== 'locked' ? "event.stopPropagation(); navigateTo('skill-detail')" : 'event.stopPropagation()'}">
              ${statusIcon(s.status)}
              <div style="flex:1;">
                <div style="font-size:var(--font-size-sm);font-weight:500;color:var(--text-primary);">${s.name}</div>
              </div>
              ${s.score > 0 ? `<span style="font-size:var(--font-size-sm);font-weight:700;color:${s.status === 'passed' ? 'var(--success)' : 'var(--warning)'};">${s.score}%</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <!-- Stage Header -->
      <div style="margin-bottom:16px;">
        <h3 style="font-size:var(--font-size-xl);">Curriculum</h3>
        <p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">
          Stage ${student.stage} — ${student.stageName}
        </p>
      </div>

      <!-- Overall Progress -->
      <div class="hero-card fade-in-up fade-in-up-1" style="margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:var(--font-size-xs);opacity:0.85;">Overall Progress</div>
            <div style="font-family:var(--font-display);font-size:24px;font-weight:800;margin-top:4px;">${passedSkills} of ${totalSkills} Skills</div>
          </div>
          <div style="font-family:var(--font-display);font-size:28px;font-weight:800;">${progressPct}%</div>
        </div>
        <div class="progress-bar" style="margin-top:12px;background:rgba(255,255,255,0.2);height:6px;">
          <div class="progress-fill" style="width:${progressPct}%;background:rgba(255,255,255,0.9);"></div>
        </div>
      </div>

      <!-- Skill Categories -->
      <div class="fade-in-up fade-in-up-2">
        ${categoriesHtml}
      </div>
    </div>
  `;
};

// ---- SKILL DETAIL ----
screens['skill-detail'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Cut Shot</h3>
    </div>
    <div class="screen-pad">
      <!-- Skill Info -->
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <div style="width:48px;height:48px;border-radius:var(--radius-md);background:rgba(245,158,11,0.1);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-baseball-bat-ball" style="color:#f59e0b;font-size:20px;"></i>
        </div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:var(--font-size-lg);color:var(--text-primary);">Cut Shot</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Stage 3 &middot; Batting &middot; In Progress</div>
        </div>
        <div style="font-family:var(--font-display);font-size:24px;font-weight:800;color:var(--warning);">60%</div>
      </div>

      <!-- Technique Video -->
      <div class="section-header">
        <span class="section-title">Technique Video</span>
      </div>
      <div class="video-placeholder fade-in-up fade-in-up-1" onclick="showToast('Video player coming soon!', 'info')">
        <div class="play-btn"><i class="fas fa-play"></i></div>
        <div class="video-title">Cut Shot — Technique Breakdown</div>
      </div>

      <!-- Coach Demo Video -->
      <div class="section-header">
        <span class="section-title">Coach Demo</span>
      </div>
      <div class="video-placeholder fade-in-up fade-in-up-2" onclick="showToast('Video player coming soon!', 'info')" style="height:140px;background:linear-gradient(135deg, #1e3a5f 0%, #0f2027 100%);">
        <div class="play-btn"><i class="fas fa-play"></i></div>
        <div class="video-title">Coach Venkat — Cut Shot Demo</div>
      </div>

      <!-- Drill Instructions -->
      <div class="section-header">
        <span class="section-title">Drill Instructions</span>
      </div>
      <div class="card fade-in-up fade-in-up-3">
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;gap:10px;align-items:flex-start;">
            <div style="width:24px;height:24px;border-radius:var(--radius-full);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--accent);flex-shrink:0;">1</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-secondary);">Stand sideways with weight on back foot. Keep bat raised at shoulder height.</div>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-start;">
            <div style="width:24px;height:24px;border-radius:var(--radius-full);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--accent);flex-shrink:0;">2</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-secondary);">As the ball pitches short outside off, roll the wrists and swing the bat horizontally behind square.</div>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-start;">
            <div style="width:24px;height:24px;border-radius:var(--radius-full);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--accent);flex-shrink:0;">3</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-secondary);">Keep your eye on the ball. Use bottom hand for control and top hand for power.</div>
          </div>
          <div style="display:flex;gap:10px;align-items:flex-start;">
            <div style="width:24px;height:24px;border-radius:var(--radius-full);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--accent);flex-shrink:0;">4</div>
            <div style="font-size:var(--font-size-sm);color:var(--text-secondary);">Practice with throw-downs: 20 reps focusing on timing, then 20 reps on placement.</div>
          </div>
        </div>
      </div>

      <!-- Assessment Result -->
      <div class="section-header">
        <span class="section-title">Latest Assessment</span>
      </div>
      <div class="result-card fade-in-up fade-in-up-4">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div>
            <div style="font-weight:600;color:var(--text-primary);">Cut Shot Assessment</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">March 8, 2026 &middot; Coach Venkat</div>
          </div>
          <div style="font-family:var(--font-display);font-weight:700;font-size:20px;color:var(--warning);">60%</div>
        </div>
        <div style="padding:10px;background:var(--bg-tertiary);border-radius:var(--radius-sm);font-size:var(--font-size-sm);color:var(--text-secondary);">
          <i class="fas fa-comment" style="color:var(--accent);margin-right:4px;"></i>
          <strong>Coach Note:</strong> Good effort. Need to work on timing — playing too early. Focus on watching the ball onto the bat.
        </div>
      </div>

      <!-- Retake Assessment -->
      <button class="btn btn-primary btn-full btn-lg" style="margin-top:16px;margin-bottom:20px;" onclick="showToast('Assessment scheduled for March 22nd', 'success')">
        <i class="fas fa-clipboard-check"></i> Schedule Re-assessment
      </button>
    </div>
  </div>
`;

// ========== FEED TAB ==========

// ---- FEED ----
screens['feed'] = () => {
  let postsHtml = '';
  feedPosts.forEach((post, i) => {
    const animClass = i < 3 ? `fade-in-up fade-in-up-${i + 1}` : '';
    const badgeHtml = post.badge ? `<span style="font-size:10px;font-weight:600;padding:2px 8px;border-radius:var(--radius-full);background:var(--accent-bg);color:var(--accent);">${post.badge}</span>` : '';
    const imageHtml = post.hasImage ? `
      <div class="feed-post-image">
        <i class="fas ${post.imageIcon}" style="font-size:32px;"></i>
      </div>
    ` : '';

    postsHtml += `
      <div class="feed-post ${animClass}">
        <div class="feed-post-header">
          <div class="feed-post-avatar">${post.avatar}</div>
          <div style="flex:1;">
            <div class="feed-post-name">${post.author} ${badgeHtml}</div>
            <div class="feed-post-time">${post.time}</div>
          </div>
          <i class="fas fa-ellipsis-h" style="color:var(--text-tertiary);cursor:pointer;" onclick="showToast('More options coming soon!', 'info')"></i>
        </div>
        <div class="feed-post-body">${post.text}</div>
        ${imageHtml}
        <div class="feed-post-actions">
          <button class="feed-action" onclick="this.classList.toggle('liked'); showToast('Liked!', 'success')">
            <i class="fas fa-heart"></i> ${post.likes}
          </button>
          <button class="feed-action" onclick="showToast('Comments coming soon!', 'info')">
            <i class="fas fa-comment"></i> ${post.comments}
          </button>
          <button class="feed-action" onclick="showToast('Shared!', 'success')">
            <i class="fas fa-share"></i> Share
          </button>
        </div>
      </div>
    `;
  });

  return `
    <div class="screen-pad screen-enter">
      <div style="margin-bottom:16px;">
        <h3 style="font-size:var(--font-size-xl);">Feed</h3>
      </div>

      <!-- Tab Pills -->
      <div class="tabs-underline" style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--border);">
        <div class="tab active" data-tab="academy" onclick="switchTab(this, 'feed')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;">Academy</div>
        <div class="tab" data-tab="discover" onclick="switchTab(this, 'feed'); showToast('Discover feed coming soon!', 'info')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);border-bottom:2px solid transparent;margin-bottom:-2px;">Discover</div>
      </div>

      <!-- Feed Posts -->
      <div data-tab-content="feed-academy">
        ${postsHtml}
      </div>
      <div data-tab-content="feed-discover" style="display:none;">
        <div style="text-align:center;padding:40px 20px;">
          <i class="fas fa-globe" style="font-size:40px;color:var(--text-tertiary);margin-bottom:12px;"></i>
          <div style="font-weight:600;color:var(--text-secondary);">Discover Feed</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:4px;">Cricket news and updates coming soon</div>
        </div>
      </div>
    </div>
  `;
};

// ========== PLAY TAB ==========

// ---- PLAY (STUDENT ASSESSMENTS) ----
screens['play'] = () => {
  const upcomingHtml = upcomingAssessments.map(a => `
    <div class="card" style="margin-bottom:12px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:44px;height:44px;border-radius:var(--radius-md);background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-clipboard-check" style="color:#3b82f6;font-size:18px;"></i>
        </div>
        <div style="flex:1;">
          <div style="font-weight:600;color:var(--text-primary);">${a.skill}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${a.category} &middot; ${a.coach}</div>
          <div style="font-size:var(--font-size-xs);color:var(--accent);margin-top:2px;"><i class="fas fa-calendar"></i> ${a.date} at ${a.time}</div>
        </div>
        <span style="font-size:10px;font-weight:600;padding:4px 10px;border-radius:var(--radius-full);background:rgba(59,130,246,0.1);color:#3b82f6;">Upcoming</span>
      </div>
    </div>
  `).join('');

  const resultsHtml = assessmentResults.map(r => `
    <div class="result-card" onclick="navigateTo('skill-detail')">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <div style="font-weight:600;color:var(--text-primary);">${r.skill}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${r.category} &middot; ${r.date}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-family:var(--font-display);font-weight:700;font-size:20px;color:${r.score >= 80 ? 'var(--success)' : 'var(--warning)'};">${r.score}%</div>
          <div style="font-size:10px;color:var(--text-tertiary);">Grade ${r.grade}</div>
        </div>
      </div>
      <div style="font-size:var(--font-size-xs);color:var(--text-secondary);padding:8px;background:var(--bg-tertiary);border-radius:var(--radius-xs);">
        <i class="fas fa-comment" style="color:var(--accent);"></i> ${r.coachNote}
      </div>
    </div>
  `).join('');

  const certsHtml = certificates.map(c => `
    <div class="cert-card">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-date">${c.date}</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;">
        <button class="btn btn-ghost" style="font-size:12px;padding:6px 14px;border:1px solid #f59e0b;color:#92400e;" onclick="showToast('Download coming soon!', 'info')">
          <i class="fas fa-download"></i> Download
        </button>
        <button class="btn btn-ghost" style="font-size:12px;padding:6px 14px;border:1px solid #f59e0b;color:#92400e;" onclick="showToast('Shared!', 'success')">
          <i class="fas fa-share"></i> Share
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="screen-pad screen-enter">
      <div style="margin-bottom:16px;">
        <h3 style="font-size:var(--font-size-xl);">Play</h3>
        <p style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">Assessments & Achievements</p>
      </div>

      <!-- Tabs -->
      <div class="tabs-underline" style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--border);">
        <div class="tab active" data-tab="upcoming" onclick="switchTab(this, 'play')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;">Upcoming</div>
        <div class="tab" data-tab="results" onclick="switchTab(this, 'play')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);border-bottom:2px solid transparent;margin-bottom:-2px;">Results</div>
        <div class="tab" data-tab="certs" onclick="switchTab(this, 'play')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);border-bottom:2px solid transparent;margin-bottom:-2px;">Certificates</div>
      </div>

      <!-- Upcoming -->
      <div data-tab-content="play-upcoming">
        ${upcomingHtml || '<div style="text-align:center;padding:30px;color:var(--text-tertiary);"><i class="fas fa-calendar-check" style="font-size:32px;margin-bottom:8px;"></i><div>No upcoming assessments</div></div>'}
      </div>

      <!-- Results -->
      <div data-tab-content="play-results" style="display:none;">
        ${resultsHtml}
      </div>

      <!-- Certificates -->
      <div data-tab-content="play-certs" style="display:none;">
        ${certsHtml}
      </div>
    </div>
  `;
};

// ---- PARENT CRICKET ----
screens['parent-cricket'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Parent Cricket</h3>
    </div>
    <div class="screen-pad">
      <!-- Player Profile Card -->
      <div class="hero-card fade-in-up fade-in-up-1">
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="width:56px;height:56px;border-radius:var(--radius-full);background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:700;">MK</div>
          <div>
            <div style="font-weight:700;font-size:var(--font-size-lg);">${parentCricket.playerName}</div>
            <div style="font-size:var(--font-size-xs);opacity:0.85;margin-top:2px;">${parentCricket.role} &middot; ${parentCricket.battingStyle}</div>
            <div style="font-size:var(--font-size-xs);opacity:0.7;margin-top:2px;">${parentCricket.bowlingStyle} &middot; ${parentCricket.skillLevel}</div>
          </div>
        </div>
      </div>

      <!-- Upcoming Match -->
      <div class="section-header fade-in-up fade-in-up-2">
        <span class="section-title">Upcoming Match</span>
      </div>
      <div class="match-card fade-in-up fade-in-up-2">
        <div class="match-card-header">
          <span style="font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--radius-full);background:rgba(59,130,246,0.1);color:#3b82f6;">March 22, 2026</span>
          <span style="font-size:var(--font-size-xs);color:var(--text-secondary);">10:00 AM</span>
        </div>
        <div class="match-teams">
          <div class="match-team">Chennai Dads XI</div>
          <div class="match-vs">VS</div>
          <div class="match-team">Adyar Warriors</div>
        </div>
        <div style="text-align:center;margin-top:10px;font-size:var(--font-size-xs);color:var(--text-secondary);">
          <i class="fas fa-map-marker-alt"></i> Academy Ground &middot; 20 Overs
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;">
          <button class="btn btn-primary btn-full" onclick="showToast('Availability confirmed!', 'success')">
            <i class="fas fa-check"></i> Available
          </button>
          <button class="btn btn-ghost" style="flex:1;border:1px solid var(--border);" onclick="showToast('Marked as unavailable', 'warning')">
            <i class="fas fa-times"></i> Not Available
          </button>
        </div>
      </div>

      <!-- Recent Match -->
      <div class="section-header fade-in-up fade-in-up-3">
        <span class="section-title">Recent Match</span>
      </div>
      <div class="match-card fade-in-up fade-in-up-3">
        <div class="match-card-header">
          <span style="font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--radius-full);background:rgba(16,185,129,0.1);color:var(--success);">Won by 22 runs</span>
          <span style="font-size:var(--font-size-xs);color:var(--text-secondary);">March 8, 2026</span>
        </div>
        <div class="match-teams">
          <div class="match-team">Chennai Dads XI<br><span style="font-size:var(--font-size-lg);font-weight:700;color:var(--accent);">156/6</span></div>
          <div class="match-vs">VS</div>
          <div class="match-team">Nungambakkam CC<br><span style="font-size:var(--font-size-lg);font-weight:700;">134/9</span></div>
        </div>
        <div style="margin-top:12px;padding:10px;background:var(--bg-tertiary);border-radius:var(--radius-sm);">
          <div style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);margin-bottom:4px;">Your Performance</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">Batting: 34 (28) &middot; 3 fours, 1 six</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Bowling: 2/18 (3 overs) &middot; 1 catch</div>
        </div>
        <button class="btn btn-ghost btn-full" style="margin-top:10px;border:1px solid var(--border);font-size:12px;" onclick="showToast('Full scorecard coming soon!', 'info')">
          <i class="fas fa-table"></i> View Full Scorecard
        </button>
      </div>

      <!-- Batting Stats -->
      <div class="section-header fade-in-up fade-in-up-4">
        <span class="section-title">Batting Stats</span>
      </div>
      <div class="stats-table fade-in-up fade-in-up-4">
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.matches}</div>
          <div class="stat-lbl">Matches</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.runs}</div>
          <div class="stat-lbl">Runs</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.avg}</div>
          <div class="stat-lbl">Average</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.highScore}</div>
          <div class="stat-lbl">High Score</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.strikeRate}</div>
          <div class="stat-lbl">Strike Rate</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.catches}</div>
          <div class="stat-lbl">Catches</div>
        </div>
      </div>

      <!-- Bowling Stats -->
      <div class="section-header fade-in-up fade-in-up-5">
        <span class="section-title">Bowling Stats</span>
      </div>
      <div class="stats-table fade-in-up fade-in-up-5">
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.wickets}</div>
          <div class="stat-lbl">Wickets</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.bestBowling}</div>
          <div class="stat-lbl">Best</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">${parentCricket.economyRate}</div>
          <div class="stat-lbl">Economy</div>
        </div>
        <div class="stat-cell">
          <div class="stat-val">3.0</div>
          <div class="stat-lbl">Avg Overs</div>
        </div>
      </div>
    </div>
  </div>
`;

// ========== MORE TAB ==========

// ---- MORE MENU ----
screens['more'] = () => {
  const menuItems = [
    { icon: 'fa-user', label: 'Profile', screen: 'profile', color: '#059669' },
    { icon: 'fa-certificate', label: 'Certificates', screen: 'play', color: '#f59e0b' },
    { icon: 'fa-calendar-check', label: 'Attendance History', screen: 'attendance', color: '#3b82f6' },
    { icon: 'fa-clipboard-list', label: 'Exam History', screen: 'play', color: '#8b5cf6' },
    { icon: 'fa-bell', label: 'Notifications', screen: 'notifications', color: '#ef4444' },
    { icon: 'fa-cog', label: 'Settings', screen: 'settings', color: '#6b7280' },
    { icon: 'fa-question-circle', label: 'Help & Support', action: "showToast('Help center coming soon!', 'info')", color: '#06b6d4' },
    { icon: 'fa-sign-out-alt', label: 'Logout', action: "navigateTo('splash')", color: '#ef4444' }
  ];

  return `
    <div class="screen-pad screen-enter">
      <!-- Profile Header -->
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:24px;padding:16px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);" class="fade-in-up fade-in-up-1">
        <div style="width:52px;height:52px;border-radius:var(--radius-full);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px;">
          ${student.avatar}
        </div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:var(--font-size-lg);color:var(--text-primary);">${student.name}</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">${student.academy}</div>
          <div style="font-size:var(--font-size-xs);color:var(--accent);margin-top:2px;">Stage ${student.stage} &middot; ${student.stageName}</div>
        </div>
        <i class="fas fa-chevron-right" style="color:var(--text-tertiary);"></i>
      </div>

      <!-- Menu Items -->
      <div class="fade-in-up fade-in-up-2">
        ${menuItems.map(item => `
          <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--border);cursor:pointer;" onclick="${item.screen ? `navigateTo('${item.screen}')` : item.action}">
            <div style="width:36px;height:36px;border-radius:var(--radius-md);background:${item.color}15;display:flex;align-items:center;justify-content:center;">
              <i class="fas ${item.icon}" style="color:${item.color};font-size:14px;"></i>
            </div>
            <div style="flex:1;font-weight:500;font-size:var(--font-size-sm);color:var(--text-primary);">${item.label}</div>
            <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
          </div>
        `).join('')}
      </div>

      <!-- App Version -->
      <div style="text-align:center;margin-top:30px;font-size:var(--font-size-xs);color:var(--text-tertiary);">
        Soruban Sports v1.0.0 (Prototype)
      </div>
    </div>
  `;
};

// ---- NOTIFICATIONS ----
screens['notifications'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Notifications</h3>
    </div>
    <div>
      ${notifications.map((n, i) => `
        <div class="notif-item ${n.unread ? 'unread' : ''} ${i < 3 ? 'fade-in-up fade-in-up-' + (i + 1) : ''}" onclick="showToast('${n.title}', 'info')">
          <div class="notif-icon-wrap" style="background:${n.color}15;">
            <i class="fas ${n.icon}" style="color:${n.color};"></i>
          </div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div style="font-weight:${n.unread ? '700' : '500'};font-size:var(--font-size-sm);color:var(--text-primary);">${n.title}</div>
              ${n.unread ? '<div style="width:8px;height:8px;border-radius:var(--radius-full);background:var(--accent);flex-shrink:0;"></div>' : ''}
            </div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.desc}</div>
            <div style="font-size:10px;color:var(--text-tertiary);margin-top:4px;">${n.time}</div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

// ---- PROFILE ----
screens['profile'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Profile</h3>
    </div>
    <div class="screen-pad">
      <!-- Avatar & Name -->
      <div style="text-align:center;margin-bottom:24px;" class="fade-in-up fade-in-up-1">
        <div style="width:72px;height:72px;border-radius:var(--radius-full);background:var(--gradient-primary);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:24px;margin:0 auto 12px;">
          ${student.avatar}
        </div>
        <div style="font-weight:700;font-size:var(--font-size-lg);color:var(--text-primary);">${student.name}</div>
        <div style="font-size:var(--font-size-sm);color:var(--text-secondary);margin-top:4px;">${student.role} &middot; Stage ${student.stage} (${student.stageName})</div>
        <div style="font-size:var(--font-size-xs);color:var(--accent);margin-top:4px;">${student.academy}</div>
      </div>

      <!-- Tabs -->
      <div class="tabs-underline" style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--border);">
        <div class="tab active" data-tab="personal" onclick="switchTab(this, 'profile')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;">Personal</div>
        <div class="tab" data-tab="stats" onclick="switchTab(this, 'profile')" style="flex:1;text-align:center;padding:10px;font-size:var(--font-size-sm);font-weight:600;cursor:pointer;color:var(--text-tertiary);border-bottom:2px solid transparent;margin-bottom:-2px;">Stats</div>
      </div>

      <!-- Personal Tab -->
      <div data-tab-content="profile-personal" class="fade-in-up fade-in-up-2">
        <div class="card">
          ${[
            { label: 'Full Name', value: student.name },
            { label: 'Age', value: student.age + ' years' },
            { label: 'Role', value: student.role },
            { label: 'Stage', value: 'Stage ' + student.stage + ' — ' + student.stageName },
            { label: 'Academy', value: student.academy },
            { label: 'Batch', value: student.batch },
            { label: 'Joined', value: student.joinDate },
            { label: 'Parent', value: parent.name + ' (' + parent.relation + ')' },
            { label: 'Parent Mobile', value: parent.phone }
          ].map(item => `
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
              <span style="font-size:var(--font-size-sm);color:var(--text-secondary);">${item.label}</span>
              <span style="font-size:var(--font-size-sm);font-weight:600;color:var(--text-primary);">${item.value}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Stats Tab -->
      <div data-tab-content="profile-stats" style="display:none;">
        <div class="stat-row" style="margin-bottom:10px;">
          <div class="stat-box">
            <div class="stat-val" style="color:var(--accent);">${student.overallScore}%</div>
            <div class="stat-lbl">Overall</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">${student.streak}</div>
            <div class="stat-lbl">Day Streak</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">${attendance.percentage}%</div>
            <div class="stat-lbl">Attendance</div>
          </div>
        </div>
        <div class="section-header">
          <span class="section-title">Top Skills</span>
        </div>
        ${Object.values(skills).flat().filter(s => s.status === 'passed').sort((a, b) => b.score - a.score).slice(0, 5).map(s => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
            <span style="font-size:var(--font-size-sm);color:var(--text-primary);">${s.name}</span>
            <span style="font-size:var(--font-size-sm);font-weight:700;color:var(--success);">${s.score}%</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

// ---- ATTENDANCE ----
screens['attendance'] = () => {
  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  let calendarHtml = dayLabels.map(d => `<div class="att-day" style="font-weight:700;color:var(--text-tertiary);font-size:9px;">${d}</div>`).join('');

  // Add 2 empty cells for offset (March 2026 starts on Sunday, so offset = 6, but let's keep simple with Monday start)
  // March 1, 2026 = Sunday, so 6 empty cells before day 1
  for (let i = 0; i < 6; i++) {
    calendarHtml += '<div class="att-day empty"></div>';
  }

  for (let day = 1; day <= 31; day++) {
    const idx = day - 1;
    const val = idx < attendance.days.length ? attendance.days[idx] : null;
    let cls = 'empty';
    let isToday = day === 16;
    if (val === 1) cls = 'present';
    else if (val === 0) cls = 'absent';
    else if (val === -1) cls = 'empty';
    calendarHtml += `<div class="att-day ${cls} ${isToday ? 'today' : ''}">${day}</div>`;
  }

  return `
    <div class="screen-enter">
      <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3>Attendance</h3>
      </div>
      <div class="screen-pad">
        <!-- Month Selector -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;" class="fade-in-up fade-in-up-1">
          <button class="btn btn-ghost btn-icon" onclick="showToast('Previous month coming soon!', 'info')"><i class="fas fa-chevron-left"></i></button>
          <span style="font-weight:700;font-size:var(--font-size-base);color:var(--text-primary);">${attendance.month}</span>
          <button class="btn btn-ghost btn-icon" onclick="showToast('Next month coming soon!', 'info')"><i class="fas fa-chevron-right"></i></button>
        </div>

        <!-- Attendance Percentage Bar -->
        <div class="card fade-in-up fade-in-up-1" style="text-align:center;margin-bottom:16px;">
          <div style="font-family:var(--font-display);font-size:32px;font-weight:800;color:var(--accent);">${attendance.percentage}%</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:4px;">${attendance.attended} of ${attendance.total} sessions attended</div>
          <div class="progress-bar" style="margin-top:12px;height:8px;">
            <div class="progress-fill accent" style="width:${attendance.percentage}%;"></div>
          </div>
        </div>

        <!-- Calendar Grid -->
        <div class="card fade-in-up fade-in-up-2">
          <div class="attendance-mini">
            ${calendarHtml}
          </div>
          <div style="display:flex;gap:16px;justify-content:center;margin-top:14px;padding-top:10px;border-top:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);">
              <div style="width:10px;height:10px;border-radius:2px;background:var(--success-bg);border:1px solid var(--success);"></div> Present
            </div>
            <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);">
              <div style="width:10px;height:10px;border-radius:2px;background:var(--danger-bg);border:1px solid var(--danger);"></div> Absent
            </div>
            <div style="display:flex;align-items:center;gap:4px;font-size:10px;color:var(--text-secondary);">
              <div style="width:10px;height:10px;border-radius:2px;border:2px solid var(--accent);"></div> Today
            </div>
          </div>
        </div>

        <!-- Streak -->
        <div class="card fade-in-up fade-in-up-3" style="display:flex;align-items:center;gap:14px;margin-top:12px;">
          <div style="font-size:28px;">🔥</div>
          <div style="flex:1;">
            <div style="font-weight:700;color:var(--text-primary);">${student.streak} Day Streak!</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Keep it up! Don't break the chain.</div>
          </div>
        </div>
      </div>
    </div>
  `;
};

// ---- SETTINGS ----
screens['settings'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Settings</h3>
    </div>
    <div class="screen-pad">
      ${[
        { icon: 'fa-user-circle', label: 'Account', desc: 'Manage your account details', action: "navigateTo('profile')" },
        { icon: 'fa-bell', label: 'Notifications', desc: 'Push notification preferences', action: "showToast('Notification settings coming soon!', 'info')", toggle: true },
        { icon: 'fa-moon', label: 'Dark Mode', desc: 'Toggle dark theme', action: 'toggleTheme()', toggle: true },
        { icon: 'fa-language', label: 'Language', desc: 'English', action: "showToast('Language selection coming soon!', 'info')" },
        { icon: 'fa-info-circle', label: 'About', desc: 'Soruban Sports v1.0.0', action: "showToast('Soruban Sports — Cricket Academy Platform', 'info')" },
        { icon: 'fa-shield-halved', label: 'Privacy Policy', desc: 'Read our privacy policy', action: "showToast('Privacy policy coming soon!', 'info')" },
        { icon: 'fa-file-contract', label: 'Terms of Service', desc: 'Read terms and conditions', action: "showToast('Terms of service coming soon!', 'info')" }
      ].map((item, i) => `
        <div style="display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--border);cursor:pointer;" class="${i < 3 ? 'fade-in-up fade-in-up-' + (i + 1) : ''}" onclick="${item.action}">
          <div style="width:36px;height:36px;border-radius:var(--radius-md);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;">
            <i class="fas ${item.icon}" style="color:var(--accent);font-size:14px;"></i>
          </div>
          <div style="flex:1;">
            <div style="font-weight:500;font-size:var(--font-size-sm);color:var(--text-primary);">${item.label}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-tertiary);margin-top:2px;">${item.desc}</div>
          </div>
          ${item.toggle ? '<div style="width:40px;height:22px;border-radius:11px;background:var(--accent);position:relative;"><div style="width:18px;height:18px;border-radius:var(--radius-full);background:#fff;position:absolute;top:2px;right:2px;"></div></div>' : '<i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>'}
        </div>
      `).join('')}

      <div style="text-align:center;margin-top:30px;font-size:var(--font-size-xs);color:var(--text-tertiary);">
        App Version 1.0.0 (Prototype)<br>
        &copy; 2026 Soruban Sports
      </div>
    </div>
  </div>
`;

// ========== ACADEMY SEARCH SCREENS ==========

// ---- ACADEMY SEARCH ----
screens['academy-search'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Find Academy</h3>
    </div>
    <div class="screen-pad">
      <!-- Search Bar -->
      <div style="position:relative;margin-bottom:16px;" class="fade-in-up fade-in-up-1">
        <i class="fas fa-search" style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-tertiary);font-size:14px;"></i>
        <input type="text" class="form-input" placeholder="Search academies..." style="padding-left:40px;" onclick="showToast('Search coming soon!', 'info')">
      </div>

      <!-- Nearby Academies -->
      <div class="section-header fade-in-up fade-in-up-1">
        <span class="section-title">Nearby Academies</span>
      </div>

      ${academies.map((a, i) => `
        <div class="academy-card fade-in-up fade-in-up-${Math.min(i + 2, 4)}" onclick="navigateTo('academy-profile')">
          <div class="academy-card-icon">
            <i class="fas fa-building-columns"></i>
          </div>
          <div class="academy-card-info">
            <div class="academy-card-name">${a.name}</div>
            <div class="academy-card-meta">
              <i class="fas fa-star" style="color:#f59e0b;"></i> ${a.rating} &middot;
              <i class="fas fa-map-marker-alt"></i> ${a.distance} &middot;
              <i class="fas fa-users"></i> ${a.students} students
            </div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px;"></i>
        </div>
      `).join('')}

      <!-- Academy Code -->
      <div class="card fade-in-up fade-in-up-5" style="margin-top:20px;">
        <div style="text-align:center;margin-bottom:12px;">
          <i class="fas fa-qrcode" style="font-size:24px;color:var(--accent);"></i>
          <div style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);margin-top:8px;">Have an Academy Code?</div>
          <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">Enter the code shared by your academy</div>
        </div>
        <div style="display:flex;gap:8px;">
          <input type="text" class="form-input" placeholder="Enter code (e.g. CCA-2026)" style="flex:1;">
          <button class="btn btn-primary" onclick="showToast('Academy found!', 'success'); navigateTo('academy-profile')">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
`;

// ---- ACADEMY PROFILE ----
screens['academy-profile'] = () => {
  const a = academies[0]; // SAM Cricket Academy
  return `
    <div class="screen-enter">
      <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:0;padding:16px 16px 0;">
        <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
        <h3>Academy Profile</h3>
      </div>

      <!-- Cover Image Placeholder -->
      <div style="width:100%;height:160px;background:var(--gradient-hero);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);font-size:40px;margin-top:12px;">
        <i class="fas fa-image"></i>
      </div>

      <div class="screen-pad">
        <!-- Academy Info -->
        <div style="margin-top:-30px;position:relative;z-index:1;" class="fade-in-up fade-in-up-1">
          <div class="card">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
              <div style="width:56px;height:56px;border-radius:var(--radius-lg);background:var(--accent-bg);display:flex;align-items:center;justify-content:center;border:3px solid var(--bg-card);">
                <i class="fas fa-building-columns" style="color:var(--accent);font-size:22px;"></i>
              </div>
              <div style="flex:1;">
                <div style="font-weight:700;font-size:var(--font-size-lg);color:var(--text-primary);">${a.name}</div>
                <div style="font-size:var(--font-size-xs);color:var(--text-secondary);margin-top:2px;">
                  <i class="fas fa-star" style="color:#f59e0b;"></i> ${a.rating} &middot;
                  <i class="fas fa-map-marker-alt"></i> ${a.location}
                </div>
              </div>
            </div>
            <p style="font-size:var(--font-size-sm);color:var(--text-secondary);line-height:1.5;">
              Premier cricket coaching academy in Chennai with experienced coaches, world-class facilities, and a proven curriculum from grassroots to advanced levels. Affiliated with TNCA.
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div class="stat-row fade-in-up fade-in-up-2" style="margin-top:12px;">
          <div class="stat-box">
            <div class="stat-val">${a.students}</div>
            <div class="stat-lbl">Students</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">12</div>
            <div class="stat-lbl">Coaches</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">4.6</div>
            <div class="stat-lbl">Rating</div>
          </div>
        </div>

        <!-- Batches -->
        <div class="section-header fade-in-up fade-in-up-3">
          <span class="section-title">Batches Available</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;" class="fade-in-up fade-in-up-3">
          ${a.batches.map(b => `<span style="font-size:var(--font-size-xs);font-weight:600;padding:6px 14px;border-radius:var(--radius-full);background:var(--accent-bg);color:var(--accent);">${b}</span>`).join('')}
        </div>

        <!-- Fee Info -->
        <div class="card fade-in-up fade-in-up-3" style="display:flex;align-items:center;gap:12px;">
          <i class="fas fa-indian-rupee-sign" style="color:var(--accent);font-size:18px;"></i>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);">Fee: Rs.${a.fee}</div>
            <div style="font-size:var(--font-size-xs);color:var(--text-secondary);">Includes coaching, equipment, assessments</div>
          </div>
        </div>

        <!-- Apply Button -->
        <button class="btn btn-primary btn-full btn-lg fade-in-up fade-in-up-4" style="margin-top:16px;" onclick="navigateTo('apply')">
          <i class="fas fa-paper-plane"></i> Apply for Admission
        </button>

        <!-- Recent Posts -->
        <div class="section-header fade-in-up fade-in-up-5" style="margin-top:20px;">
          <span class="section-title">Recent Posts</span>
        </div>
        ${feedPosts.slice(0, 2).map(post => `
          <div class="feed-post fade-in-up fade-in-up-5">
            <div class="feed-post-header">
              <div class="feed-post-avatar">${post.avatar}</div>
              <div style="flex:1;">
                <div class="feed-post-name">${post.author}</div>
                <div class="feed-post-time">${post.time}</div>
              </div>
            </div>
            <div class="feed-post-body">${post.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

// ---- APPLY (ADMISSION FORM) ----
screens['apply'] = () => `
  <div class="screen-enter">
    <div class="screen-header" style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding:16px 16px 0;">
      <button class="btn btn-ghost btn-icon" onclick="goBack()"><i class="fas fa-arrow-left"></i></button>
      <h3>Apply for Admission</h3>
    </div>
    <div class="screen-pad">
      <div class="card fade-in-up fade-in-up-1" style="margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <i class="fas fa-building-columns" style="color:var(--accent);"></i>
          <span style="font-weight:600;color:var(--text-primary);">SAM Cricket Academy</span>
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Student Name</label>
          <input type="text" class="form-input" value="${student.name}" placeholder="Student full name">
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Age</label>
          <input type="number" class="form-input" value="${student.age}" placeholder="Age">
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Prior Cricket Experience</label>
          <div style="display:flex;gap:10px;">
            <label style="display:flex;align-items:center;gap:6px;font-size:var(--font-size-sm);color:var(--text-primary);cursor:pointer;">
              <input type="radio" name="experience" value="none"> None
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:var(--font-size-sm);color:var(--text-primary);cursor:pointer;">
              <input type="radio" name="experience" value="1-2" checked> 1-2 years
            </label>
            <label style="display:flex;align-items:center;gap:6px;font-size:var(--font-size-sm);color:var(--text-primary);cursor:pointer;">
              <input type="radio" name="experience" value="3+"> 3+ years
            </label>
          </div>
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Preferred Batch</label>
          <select class="form-input" style="appearance:auto;">
            <option>U-10 Morning</option>
            <option>U-12 Morning</option>
            <option selected>U-14 Morning</option>
            <option>U-14 Evening</option>
            <option>U-16 Evening</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Parent/Guardian Name</label>
          <input type="text" class="form-input" value="${parent.name}" placeholder="Parent name">
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Parent Mobile</label>
          <input type="tel" class="form-input" value="${parent.phone}" placeholder="+91 XXXXX XXXXX">
        </div>

        <div class="form-group" style="margin-bottom:14px;">
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:6px;">Medical Conditions (if any)</label>
          <textarea class="form-input" rows="2" placeholder="Allergies, asthma, injuries, etc." style="resize:vertical;">None</textarea>
        </div>
      </div>

      <button class="btn btn-primary btn-full btn-lg fade-in-up fade-in-up-2" onclick="navigateTo('apply-status')">
        <i class="fas fa-paper-plane"></i> Submit Application
      </button>
    </div>
  </div>
`;

// ---- APPLY STATUS ----
screens['apply-status'] = () => `
  <div class="screen-pad screen-enter" style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:80vh;text-align:center;">
    <div class="fade-in-up fade-in-up-1">
      <div style="width:80px;height:80px;border-radius:var(--radius-full);background:var(--success-bg);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
        <i class="fas fa-check-circle" style="font-size:40px;color:var(--success);"></i>
      </div>
      <h2 style="font-size:var(--font-size-xl);font-weight:700;color:var(--text-primary);margin-bottom:8px;">Application Submitted!</h2>
      <p style="font-size:var(--font-size-sm);color:var(--text-secondary);max-width:280px;margin:0 auto;line-height:1.5;">
        Your admission application to SAM Cricket Academy has been submitted successfully.
      </p>
    </div>

    <div class="card fade-in-up fade-in-up-2" style="margin-top:24px;width:100%;max-width:300px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
        <i class="fas fa-clock" style="color:var(--warning);"></i>
        <span style="font-weight:600;font-size:var(--font-size-sm);color:var(--text-primary);">Status: Under Review</span>
      </div>
      <div style="font-size:var(--font-size-xs);color:var(--text-secondary);line-height:1.5;">
        The academy will review your application and contact you within <strong>3-5 business days</strong>. You'll receive a notification once approved.
      </div>
    </div>

    <div class="fade-in-up fade-in-up-3" style="margin-top:24px;width:100%;max-width:300px;">
      <button class="btn btn-primary btn-full btn-lg" onclick="navigateTo('home')">
        <i class="fas fa-home"></i> Go to Home
      </button>
      <button class="btn btn-ghost btn-full" style="margin-top:8px;border:1px solid var(--border);" onclick="navigateTo('academy-search')">
        <i class="fas fa-search"></i> Browse More Academies
      </button>
    </div>
  </div>
`;

// ========== HELPER FUNCTIONS ==========

function verifyOtp() {
  showToast('OTP verified successfully!', 'success');
  setTimeout(() => {
    if (userRole === 'parent') {
      navigateTo('parent-home');
    } else {
      navigateTo('home');
    }
  }, 400);
}

// ========== NAVIGATION CONFIG ==========

document.addEventListener('DOMContentLoaded', () => {
  initNav({
    defaultScreen: 'splash',
    tabMapping: {
      'home': ['parent-home', 'skill-detail', 'academy-search', 'academy-profile', 'apply', 'apply-status'],
      'learn': [],
      'feed': [],
      'play': ['parent-cricket'],
      'more': ['notifications', 'profile', 'attendance', 'settings']
    }
  });
});

// ========== SCREEN READY HOOK ==========

function onScreenReady(screenId) {
  // Initialize any screen-specific behaviors
  if (screenId === 'otp') {
    const firstInput = document.querySelector('.otp-inputs input');
    if (firstInput) setTimeout(() => firstInput.focus(), 300);
  }
}
