/* ============================================
   Soruban Sports — Academy Admin Dashboard App
   ============================================ */

let currentPage = 'dashboard';
let charts = {};
let selectedStudents = new Set();

// ---- Toast Notification ----
function showToast(message, type) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border);padding:12px 24px;border-radius:10px;font-size:13px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
  if (type === 'success') toast.style.borderColor = 'var(--success)';
  if (type === 'error') toast.style.borderColor = 'var(--danger)';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ---- Theme Toggle ----
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
    icon.className = 'fa-solid fa-moon';
    localStorage.setItem('theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.className = 'fa-solid fa-sun';
    localStorage.setItem('theme', 'dark');
  }
  // Reinitialize charts on theme change
  if (currentPage === 'dashboard') setTimeout(() => initCharts(), 100);
  if (currentPage === 'fee-management') setTimeout(() => initFeeCharts(), 100);
  if (currentPage === 'reports') setTimeout(() => initReportCharts(), 100);
}

// Restore theme on load
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = 'fa-solid fa-sun';
  }
})();

// ---- Sidebar Toggle ----
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}

// ---- Mock Data ----
const academy = {
  name: 'SAM Cricket Academy',
  totalStudents: 85,
  batches: 3,
  staff: 4,
  address: '12, Anna Nagar, Chennai - 600040',
  phone: '+91 98765 43210'
};

const students = [
  { id: 1, name: 'Arjun Kumar', age: 12, role: 'Batsman', stage: 2, batch: 'Morning', scores: { batting: 78, bowling: 45, fielding: 72 }, attendance: 92, feeStatus: 'Paid', joinDate: '2025-06-15', parentName: 'Ramesh Kumar', parentPhone: '+91 98765 11001' },
  { id: 2, name: 'Priya Sharma', age: 11, role: 'Bowler', stage: 1, batch: 'Morning', scores: { batting: 55, bowling: 82, fielding: 68 }, attendance: 88, feeStatus: 'Paid', joinDate: '2025-07-20', parentName: 'Sunil Sharma', parentPhone: '+91 98765 11002' },
  { id: 3, name: 'Vikram Singh', age: 14, role: 'Allrounder', stage: 3, batch: 'Evening', scores: { batting: 85, bowling: 76, fielding: 80 }, attendance: 95, feeStatus: 'Paid', joinDate: '2025-01-10', parentName: 'Rajesh Singh', parentPhone: '+91 98765 11003' },
  { id: 4, name: 'Deepa Rajan', age: 13, role: 'Batsman', stage: 2, batch: 'Morning', scores: { batting: 72, bowling: 40, fielding: 65 }, attendance: 78, feeStatus: 'Due', joinDate: '2025-08-05', parentName: 'Mohan Rajan', parentPhone: '+91 98765 11004' },
  { id: 5, name: 'Karthik Menon', age: 12, role: 'Keeper', stage: 2, batch: 'Evening', scores: { batting: 68, bowling: 35, fielding: 88 }, attendance: 90, feeStatus: 'Paid', joinDate: '2025-04-12', parentName: 'Nair Menon', parentPhone: '+91 98765 11005' },
  { id: 6, name: 'Ananya Iyer', age: 10, role: 'Bowler', stage: 1, batch: 'Morning', scores: { batting: 42, bowling: 70, fielding: 55 }, attendance: 85, feeStatus: 'Partial', joinDate: '2025-09-01', parentName: 'Srinivasan Iyer', parentPhone: '+91 98765 11006' },
  { id: 7, name: 'Rahul Prasad', age: 15, role: 'Batsman', stage: 4, batch: 'Weekend', scores: { batting: 92, bowling: 50, fielding: 78 }, attendance: 96, feeStatus: 'Paid', joinDate: '2024-06-20', parentName: 'Venkat Prasad', parentPhone: '+91 98765 11007' },
  { id: 8, name: 'Sneha Nair', age: 11, role: 'Allrounder', stage: 1, batch: 'Morning', scores: { batting: 60, bowling: 65, fielding: 70 }, attendance: 82, feeStatus: 'Due', joinDate: '2025-10-15', parentName: 'Gopal Nair', parentPhone: '+91 98765 11008' },
  { id: 9, name: 'Aditya Venkat', age: 13, role: 'Bowler', stage: 3, batch: 'Evening', scores: { batting: 48, bowling: 88, fielding: 62 }, attendance: 91, feeStatus: 'Paid', joinDate: '2025-03-01', parentName: 'Venkat Rao', parentPhone: '+91 98765 11009' },
  { id: 10, name: 'Meera Lakshmi', age: 12, role: 'Batsman', stage: 2, batch: 'Weekend', scores: { batting: 75, bowling: 38, fielding: 71 }, attendance: 87, feeStatus: 'Paid', joinDate: '2025-05-22', parentName: 'Lakshmi Devi', parentPhone: '+91 98765 11010' },
  { id: 11, name: 'Surya Prakash', age: 14, role: 'Keeper', stage: 3, batch: 'Evening', scores: { batting: 70, bowling: 42, fielding: 90 }, attendance: 93, feeStatus: 'Due', joinDate: '2025-02-14', parentName: 'Prakash M', parentPhone: '+91 98765 11011' },
  { id: 12, name: 'Divya Krishnan', age: 10, role: 'Bowler', stage: 1, batch: 'Morning', scores: { batting: 38, bowling: 72, fielding: 58 }, attendance: 80, feeStatus: 'Partial', joinDate: '2025-11-01', parentName: 'Krishnan S', parentPhone: '+91 98765 11012' },
  { id: 13, name: 'Ganesh Raman', age: 15, role: 'Allrounder', stage: 4, batch: 'Weekend', scores: { batting: 88, bowling: 80, fielding: 85 }, attendance: 97, feeStatus: 'Paid', joinDate: '2024-03-10', parentName: 'Raman G', parentPhone: '+91 98765 11013' },
  { id: 14, name: 'Kavitha Sundaram', age: 11, role: 'Batsman', stage: 1, batch: 'Morning', scores: { batting: 65, bowling: 30, fielding: 55 }, attendance: 76, feeStatus: 'Due', joinDate: '2025-12-01', parentName: 'Sundaram K', parentPhone: '+91 98765 11014' }
];

const staff = [
  { id: 1, name: 'Venkat', initials: 'S', role: 'Owner / Head Coach', batches: ['Morning', 'Evening', 'Weekend'], phone: '+91 98765 43210', joinDate: '2022-01-01', studentCount: 85, sessionsMonth: 48, avgImprovement: 12 },
  { id: 2, name: 'Coach Ravi', initials: 'R', role: 'Batting Coach', batches: ['Morning', 'Weekend'], phone: '+91 98765 43211', joinDate: '2023-06-15', studentCount: 42, sessionsMonth: 32, avgImprovement: 15 },
  { id: 3, name: 'Coach Priya', initials: 'P', role: 'Bowling Coach', batches: ['Evening'], phone: '+91 98765 43212', joinDate: '2024-01-10', studentCount: 28, sessionsMonth: 24, avgImprovement: 18 },
  { id: 4, name: 'Kumar', initials: 'K', role: 'Support Staff', batches: ['Morning', 'Evening', 'Weekend'], phone: '+91 98765 43213', joinDate: '2023-09-01', studentCount: 0, sessionsMonth: 48, avgImprovement: 0 }
];

const monthlyRevenue = [
  { month: 'Oct', collected: 215000, pending: 42000 },
  { month: 'Nov', collected: 228000, pending: 35000 },
  { month: 'Dec', collected: 198000, pending: 55000 },
  { month: 'Jan', collected: 241500, pending: 36000 },
  { month: 'Feb', collected: 252000, pending: 28000 },
  { month: 'Mar', collected: 241500, pending: 36000 }
];

const enrollmentTrend = [
  { month: 'Oct', count: 72 },
  { month: 'Nov', count: 76 },
  { month: 'Dec', count: 78 },
  { month: 'Jan', count: 80 },
  { month: 'Feb', count: 83 },
  { month: 'Mar', count: 85 }
];

const assessments = [
  { id: 1, student: 'Arjun Kumar', skill: 'Front Foot Drive', drillScore: 82, coachScore: 85, total: 84, date: '2026-03-12', coach: 'Coach Ravi' },
  { id: 2, student: 'Vikram Singh', skill: 'Outswing Bowling', drillScore: 78, coachScore: 80, total: 79, date: '2026-03-11', coach: 'Coach Priya' },
  { id: 3, student: 'Priya Sharma', skill: 'Yorker Length', drillScore: 75, coachScore: 78, total: 77, date: '2026-03-10', coach: 'Coach Priya' },
  { id: 4, student: 'Rahul Prasad', skill: 'Pull Shot', drillScore: 90, coachScore: 92, total: 91, date: '2026-03-09', coach: 'Coach Ravi' },
  { id: 5, student: 'Ganesh Raman', skill: 'Spin Bowling', drillScore: 85, coachScore: 88, total: 87, date: '2026-03-08', coach: 'Coach Priya' },
  { id: 6, student: 'Aditya Venkat', skill: 'Bouncer', drillScore: 80, coachScore: 82, total: 81, date: '2026-03-07', coach: 'Coach Priya' }
];

const recentActivities = [
  { time: '10 min ago', event: 'Arjun Kumar marked present', icon: 'fa-calendar-check', color: 'green' },
  { time: '25 min ago', event: 'Fee payment received from Vikram Singh - ₹3,500', icon: 'fa-indian-rupee-sign', color: 'green' },
  { time: '1 hr ago', event: 'New admission request: Sathya R (Age 11)', icon: 'fa-user-plus', color: 'blue' },
  { time: '1 hr ago', event: 'Coach Ravi completed batting assessment for Morning batch', icon: 'fa-clipboard-check', color: 'purple' },
  { time: '2 hrs ago', event: 'Attendance alert: Kavitha Sundaram absent 5 days', icon: 'fa-exclamation-triangle', color: 'orange' },
  { time: '3 hrs ago', event: 'New admission request: Raj M (Age 13)', icon: 'fa-user-plus', color: 'blue' },
  { time: '4 hrs ago', event: 'Ganesh Raman promoted to Stage 4', icon: 'fa-arrow-up', color: 'green' },
  { time: '5 hrs ago', event: 'Fee reminder sent to 8 parents', icon: 'fa-bell', color: 'orange' },
  { time: '6 hrs ago', event: 'New admission request: Tanya K (Age 10)', icon: 'fa-user-plus', color: 'blue' },
  { time: 'Yesterday', event: 'Monthly report generated for February', icon: 'fa-file-alt', color: 'teal' }
];

const curriculumData = [
  {
    stage: 1, name: 'Foundation', skills: [
      { name: 'Grip & Stance', video: 'platform', criteria: 'Hold bat correctly for 30 sec, demonstrate 3 stances' },
      { name: 'Forward Defense', video: 'platform', criteria: 'Block 10 balls with correct technique' },
      { name: 'Basic Bowling Action', video: 'academy', criteria: 'Bowl 6 balls with straight arm' },
      { name: 'Catching - High Catch', video: 'platform', criteria: 'Catch 8 out of 10 high balls' },
      { name: 'Running Between Wickets', video: 'none', criteria: 'Complete 3 runs in under 10 sec' }
    ]
  },
  {
    stage: 2, name: 'Developing', skills: [
      { name: 'Front Foot Drive', video: 'platform', criteria: 'Score 70+ in drill assessment' },
      { name: 'Back Foot Defense', video: 'platform', criteria: 'Block 8 out of 10 short balls' },
      { name: 'Outswing Bowling', video: 'academy', criteria: 'Demonstrate consistent outswing 6/10' },
      { name: 'Ground Fielding', video: 'platform', criteria: 'Field and throw accurately 8/10' },
      { name: 'Wicket Keeping Basics', video: 'none', criteria: 'Take 7 out of 10 clean catches behind stumps' }
    ]
  },
  {
    stage: 3, name: 'Intermediate', skills: [
      { name: 'Pull Shot', video: 'platform', criteria: 'Execute pull shot with timing 7/10' },
      { name: 'Cut Shot', video: 'academy', criteria: 'Score 75+ in cut shot drill' },
      { name: 'Spin Bowling', video: 'platform', criteria: 'Turn the ball consistently 6/10 deliveries' },
      { name: 'Slip Catching', video: 'none', criteria: 'Catch 6 out of 10 slip catches' },
      { name: 'Match Awareness', video: 'academy', criteria: 'Complete tactical scenario quiz 80%+' }
    ]
  },
  {
    stage: 4, name: 'Advanced', skills: [
      { name: 'Sweep & Reverse Sweep', video: 'platform', criteria: 'Execute both shots 7/10 with placement' },
      { name: 'Yorker Length Bowling', video: 'academy', criteria: 'Bowl 6 yorkers out of 10 attempts' },
      { name: 'Death Over Batting', video: 'platform', criteria: 'Score 15+ runs in simulated death over' },
      { name: 'Captaincy & Tactics', video: 'none', criteria: 'Lead practice match with field changes' },
      { name: 'Pressure Situations', video: 'academy', criteria: 'Perform under simulated pressure scenario' }
    ]
  }
];

const feedPosts = [
  { id: 1, author: 'Venkat', initials: 'S', visibility: 'All', content: 'Proud moment! Our U-14 team won the district championship. Congratulations to all players and coaches.', likes: 24, comments: 8, date: '2026-03-15' },
  { id: 2, author: 'Coach Ravi', initials: 'R', visibility: 'Morning Batch', content: 'Tomorrow morning session will start 30 minutes early at 5:30 AM for the upcoming tournament preparation.', likes: 12, comments: 3, date: '2026-03-14' },
  { id: 3, author: 'Coach Priya', initials: 'P', visibility: 'Evening Batch', content: 'New bowling drills added to the curriculum. Students please bring your cricket shoes for the new exercises.', likes: 8, comments: 2, date: '2026-03-13' },
  { id: 4, author: 'Venkat', initials: 'S', visibility: 'Parents Only', content: 'Fee payment deadline for March is 20th. Please clear pending dues to avoid interruption in training.', likes: 5, comments: 1, date: '2026-03-12' }
];

const parentCommunity = {
  totalPlayers: 18,
  matchesPlayed: 6,
  upcomingMatch: { date: '2026-03-22', time: '6:00 AM', venue: 'Academy Ground', team1: 'Morning Parents XI', team2: 'Evening Parents XI', format: 'T10' },
  recentMatches: [
    { date: '2026-03-08', team1: 'Morning Parents', score1: '92/4', team2: 'Weekend Parents', score2: '88/6', result: 'Morning Parents won by 4 runs' },
    { date: '2026-02-22', team1: 'Evening Parents', score1: '105/3', team2: 'Morning Parents', score2: '101/5', result: 'Evening Parents won by 4 runs' },
    { date: '2026-02-08', team1: 'Weekend Parents', score1: '78/7', team2: 'Evening Parents', score2: '79/2', result: 'Evening Parents won by 8 wickets' }
  ]
};

// ---- Navigation ----
function navigateAdmin(page) {
  currentPage = page;
  selectedStudents.clear();

  // Destroy existing charts
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  // Update sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');

  const container = document.getElementById('page-content');

  switch (page) {
    case 'dashboard': renderDashboard(container); break;
    case 'students': renderStudents(container); break;
    case 'curriculum': renderCurriculum(container); break;
    case 'assessments': renderAssessments(container); break;
    case 'attendance': renderAttendance(container); break;
    case 'fee-management': renderFeeManagement(container); break;
    case 'staff': renderStaff(container); break;
    case 'matches': renderMatches(container); break;
    case 'feed': renderFeed(container); break;
    case 'parent-community': renderParentCommunity(container); break;
    case 'reports': renderReports(container); break;
    case 'settings': renderSettings(container); break;
    default: renderDashboard(container);
  }

  container.scrollTop = 0;
}

// ---- Modal System ----
function showModal(title, bodyHtml) {
  const existing = document.querySelector('.modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="modal-panel">
      <h3>${title} <button class="modal-close" onclick="this.closest('.modal-overlay').remove()"><i class="fa-solid fa-xmark"></i></button></h3>
      ${bodyHtml}
    </div>
  `;
  document.body.appendChild(overlay);
}

function closeModal() {
  const m = document.querySelector('.modal-overlay');
  if (m) m.remove();
}

// ---- Helper Functions ----
function getScoreAvg(scores) {
  return Math.round((scores.batting + scores.bowling + scores.fielding) / 3);
}

function getScoreClass(avg) {
  if (avg >= 75) return 'high';
  if (avg >= 50) return 'medium';
  return 'low';
}

function getVideoIcon(status) {
  if (status === 'platform') return '<span title="Platform Video">&#9989;</span>';
  if (status === 'academy') return '<span title="Academy Video">&#128249;</span>';
  return '<span title="No Video">&#11036;</span>';
}

function formatCurrency(num) {
  if (num >= 100000) return '₹' + (num / 100000).toFixed(2) + 'L';
  if (num >= 1000) return '₹' + (num / 1000).toFixed(1) + 'K';
  return '₹' + num;
}

// ==============================
// PAGE: Dashboard
// ==============================
function renderDashboard(container) {
  const presentToday = 62;
  const presentPct = Math.round((presentToday / academy.totalStudents) * 100);

  container.innerHTML = `
    <h2 class="page-title">Dashboard</h2>
    <p class="page-subtitle">Overview of ${academy.name}</p>

    <div class="metric-row">
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-users"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> +5</span>
        </div>
        <div class="stat-card-value">${academy.totalStudents}</div>
        <div class="stat-card-label">Total Students</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-calendar-check"></i></div>
          <span class="stat-card-trend up">${presentPct}%</span>
        </div>
        <div class="stat-card-value">${presentToday}</div>
        <div class="stat-card-label">Present Today</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-indian-rupee-sign"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> 6%</span>
        </div>
        <div class="stat-card-value">₹2.41L</div>
        <div class="stat-card-label">Revenue This Month</div>
      </div>
      <div class="stat-card accent-orange">
        <div class="stat-card-header">
          <div class="stat-card-icon orange"><i class="fa-solid fa-clock"></i></div>
          <span class="stat-card-trend down"><i class="fa-solid fa-arrow-down"></i> ₹6K</span>
        </div>
        <div class="stat-card-value">₹36K</div>
        <div class="stat-card-label">Pending Fees</div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card">
        <h3><i class="fa-solid fa-chart-line" style="color:var(--accent)"></i> Student Enrollment Trend</h3>
        <canvas id="enrollmentChart" height="200"></canvas>
      </div>
      <div class="chart-card">
        <h3><i class="fa-solid fa-chart-bar" style="color:var(--accent)"></i> Revenue Trend</h3>
        <canvas id="revenueChart" height="200"></canvas>
      </div>
    </div>

    <div class="charts-row" style="margin-bottom:24px;">
      <div class="chart-card">
        <h3><i class="fa-solid fa-layer-group" style="color:var(--accent)"></i> Stage Distribution</h3>
        <canvas id="stageChart" height="220"></canvas>
      </div>
      <div class="chart-card">
        <h3><i class="fa-solid fa-baseball-bat-ball" style="color:var(--accent)"></i> Role Distribution</h3>
        <canvas id="roleChart" height="220"></canvas>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-exclamation-circle" style="color:var(--warning);margin-right:8px"></i> Needs Attention</h3>
      </div>
      <div class="section-card-body padded">
        <div class="alert-box info"><i class="fa-solid fa-user-plus"></i> <strong>3 admission requests</strong> pending review</div>
        <div class="alert-box warning"><i class="fa-solid fa-indian-rupee-sign"></i> <strong>12 students</strong> have pending fee payments</div>
        <div class="alert-box success"><i class="fa-solid fa-arrow-up"></i> <strong>2 students</strong> are ready for stage promotion</div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3>Recent Activity</h3>
      </div>
      <div class="section-card-body">
        <table class="data-table">
          <thead><tr><th>Time</th><th>Event</th></tr></thead>
          <tbody>
            ${recentActivities.map(a => `
              <tr>
                <td style="white-space:nowrap;width:120px;color:var(--text-secondary);font-size:12px">${a.time}</td>
                <td><i class="fa-solid ${a.icon}" style="color:var(--${a.color});margin-right:8px"></i>${a.event}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  setTimeout(() => initCharts(), 50);
}

function initCharts() {
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#8B92A5' : '#6E7191';

  // Enrollment trend line chart
  const enrollCtx = document.getElementById('enrollmentChart');
  if (enrollCtx) {
    charts.enrollment = new Chart(enrollCtx, {
      type: 'line',
      data: {
        labels: enrollmentTrend.map(e => e.month),
        datasets: [{
          label: 'Students',
          data: enrollmentTrend.map(e => e.count),
          borderColor: '#059669',
          backgroundColor: 'rgba(5,150,105,0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#059669',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor }, beginAtZero: false }
        }
      }
    });
  }

  // Revenue trend bar chart
  const revCtx = document.getElementById('revenueChart');
  if (revCtx) {
    charts.revenue = new Chart(revCtx, {
      type: 'bar',
      data: {
        labels: monthlyRevenue.map(r => r.month),
        datasets: [
          {
            label: 'Collected',
            data: monthlyRevenue.map(r => r.collected),
            backgroundColor: '#059669',
            borderRadius: 4
          },
          {
            label: 'Pending',
            data: monthlyRevenue.map(r => r.pending),
            backgroundColor: '#EF4444',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'top', labels: { color: textColor, usePointStyle: true, pointStyle: 'circle' } } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => '₹' + (v/1000) + 'K' } }
        }
      }
    });
  }

  // Stage distribution doughnut
  const stageCtx = document.getElementById('stageChart');
  if (stageCtx) {
    const stageCounts = [0, 0, 0, 0];
    students.forEach(s => { if (s.stage >= 1 && s.stage <= 4) stageCounts[s.stage - 1]++; });
    charts.stage = new Chart(stageCtx, {
      type: 'doughnut',
      data: {
        labels: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
        datasets: [{
          data: stageCounts,
          backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'bottom', labels: { color: textColor, usePointStyle: true, pointStyle: 'circle' } } }
      }
    });
  }

  // Role distribution doughnut
  const roleCtx = document.getElementById('roleChart');
  if (roleCtx) {
    const roleCounts = { Batsman: 0, Bowler: 0, Allrounder: 0, Keeper: 0 };
    students.forEach(s => { if (roleCounts[s.role] !== undefined) roleCounts[s.role]++; });
    charts.role = new Chart(roleCtx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(roleCounts),
        datasets: [{
          data: Object.values(roleCounts),
          backgroundColor: ['#3B82F6', '#EF4444', '#8B5CF6', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'bottom', labels: { color: textColor, usePointStyle: true, pointStyle: 'circle' } } }
      }
    });
  }
}

// ==============================
// PAGE: Students
// ==============================
function renderStudents(container) {
  selectedStudents.clear();

  container.innerHTML = `
    <h2 class="page-title">Students</h2>
    <p class="page-subtitle">Manage all ${academy.totalStudents} students across ${academy.batches} batches</p>

    <div class="table-wrapper">
      <div class="filter-bar">
        <div class="search-filter">
          <i class="fa-solid fa-search"></i>
          <input type="text" placeholder="Search students..." id="student-search" oninput="filterStudentTable()">
        </div>
        <select class="filter-select" id="filter-stage" onchange="filterStudentTable()">
          <option value="">All Stages</option>
          <option value="1">Stage 1</option>
          <option value="2">Stage 2</option>
          <option value="3">Stage 3</option>
          <option value="4">Stage 4</option>
        </select>
        <select class="filter-select" id="filter-role" onchange="filterStudentTable()">
          <option value="">All Roles</option>
          <option value="Batsman">Batsman</option>
          <option value="Bowler">Bowler</option>
          <option value="Allrounder">Allrounder</option>
          <option value="Keeper">Keeper</option>
        </select>
        <select class="filter-select" id="filter-batch" onchange="filterStudentTable()">
          <option value="">All Batches</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Weekend">Weekend</option>
        </select>
        <select class="filter-select" id="filter-fee" onchange="filterStudentTable()">
          <option value="">All Fee Status</option>
          <option value="Paid">Paid</option>
          <option value="Due">Due</option>
          <option value="Partial">Partial</option>
        </select>
        <button class="action-btn primary" onclick="showAddStudentModal()"><i class="fa-solid fa-plus"></i> Add Student</button>
        <button class="action-btn" onclick="showToast('CSV exported successfully!','success')"><i class="fa-solid fa-download"></i> Export CSV</button>
      </div>

      <div class="table-responsive">
        <table class="data-table" id="students-table">
          <thead>
            <tr>
              <th><input type="checkbox" id="select-all" onchange="toggleSelectAll(this)"></th>
              <th>Student</th>
              <th>Age</th>
              <th>Stage</th>
              <th>Role</th>
              <th>Score</th>
              <th>Attendance</th>
              <th>Fee Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="students-tbody">
            ${renderStudentRows(students)}
          </tbody>
        </table>
      </div>

      <div class="pagination">
        <button disabled><i class="fa-solid fa-chevron-left"></i></button>
        <button class="active">1</button>
        <button>2</button>
        <button><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>

    <div id="bulk-bar-container"></div>
  `;
}

function renderStudentRows(list) {
  return list.map(s => {
    const avg = getScoreAvg(s.scores);
    const scoreClass = getScoreClass(avg);
    return `
      <tr>
        <td><input type="checkbox" data-id="${s.id}" onchange="toggleStudentSelect(${s.id}, this.checked)"></td>
        <td>
          <div class="student-row">
            <div class="student-avatar">${s.name.charAt(0)}</div>
            <span class="student-name">${s.name}</span>
          </div>
        </td>
        <td>${s.age}</td>
        <td><span class="badge-stage stage-${s.stage}">Stage ${s.stage}</span></td>
        <td><span class="badge-role ${s.role.toLowerCase()}">${s.role}</span></td>
        <td>
          <div class="score-bar-wrapper"><div class="score-bar ${scoreClass}" style="width:${avg}%"></div></div>
          <span style="font-size:12px;font-weight:600">${avg}%</span>
        </td>
        <td style="font-weight:500">${s.attendance}%</td>
        <td><span class="badge-fee ${s.feeStatus.toLowerCase()}">${s.feeStatus}</span></td>
        <td>
          <button class="action-btn" onclick="showToast('Viewing ${s.name}...','success')" title="View"><i class="fa-solid fa-eye"></i></button>
          <button class="action-btn" onclick="showToast('Editing ${s.name}...','success')" title="Edit"><i class="fa-solid fa-pen"></i></button>
          <button class="action-btn" onclick="showToast('Scoring ${s.name}...','success')" title="Score"><i class="fa-solid fa-star"></i></button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterStudentTable() {
  const search = (document.getElementById('student-search').value || '').toLowerCase();
  const stage = document.getElementById('filter-stage').value;
  const role = document.getElementById('filter-role').value;
  const batch = document.getElementById('filter-batch').value;
  const fee = document.getElementById('filter-fee').value;

  const filtered = students.filter(s => {
    if (search && !s.name.toLowerCase().includes(search)) return false;
    if (stage && s.stage !== parseInt(stage)) return false;
    if (role && s.role !== role) return false;
    if (batch && s.batch !== batch) return false;
    if (fee && s.feeStatus !== fee) return false;
    return true;
  });

  document.getElementById('students-tbody').innerHTML = renderStudentRows(filtered);
}

function toggleSelectAll(checkbox) {
  const boxes = document.querySelectorAll('#students-tbody input[type="checkbox"]');
  boxes.forEach(b => {
    b.checked = checkbox.checked;
    const id = parseInt(b.dataset.id);
    if (checkbox.checked) selectedStudents.add(id);
    else selectedStudents.delete(id);
  });
  updateBulkBar();
}

function toggleStudentSelect(id, checked) {
  if (checked) selectedStudents.add(id);
  else selectedStudents.delete(id);
  updateBulkBar();
}

function updateBulkBar() {
  const container = document.getElementById('bulk-bar-container');
  if (selectedStudents.size > 0) {
    container.innerHTML = `
      <div class="bulk-action-bar">
        <span class="bulk-count">${selectedStudents.size} selected</span>
        <button class="action-btn primary" onclick="showToast('Fee reminders sent!','success')"><i class="fa-solid fa-bell"></i> Send Fee Reminder</button>
        <button class="action-btn" onclick="showToast('Batch changed!','success')"><i class="fa-solid fa-exchange-alt"></i> Change Batch</button>
        <button class="action-btn" onclick="showToast('Exported!','success')"><i class="fa-solid fa-download"></i> Export</button>
        <button class="action-btn" onclick="selectedStudents.clear();navigateAdmin('students')"><i class="fa-solid fa-xmark"></i> Cancel</button>
      </div>
    `;
  } else {
    container.innerHTML = '';
  }
}

function showAddStudentModal() {
  showModal('Add New Student', `
    <div class="form-row">
      <div class="form-group">
        <label>Student Name</label>
        <input type="text" placeholder="Enter full name">
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="number" placeholder="Age" min="6" max="18">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Role</label>
        <select>
          <option>Batsman</option><option>Bowler</option><option>Allrounder</option><option>Keeper</option>
        </select>
      </div>
      <div class="form-group">
        <label>Batch</label>
        <select>
          <option>Morning</option><option>Evening</option><option>Weekend</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Parent Name</label>
        <input type="text" placeholder="Parent full name">
      </div>
      <div class="form-group">
        <label>Parent Phone</label>
        <input type="tel" placeholder="+91 XXXXX XXXXX">
      </div>
    </div>
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Student added successfully!','success');closeModal()">Add Student</button>
    </div>
  `);
}

// ==============================
// PAGE: Curriculum
// ==============================
function renderCurriculum(container) {
  container.innerHTML = `
    <h2 class="page-title">Curriculum</h2>
    <p class="page-subtitle">Manage stages, skills, and training content</p>

    <div class="two-col-layout">
      <div class="section-card">
        <div class="section-card-header">
          <h3>Stage / Skill Tree</h3>
          <button class="action-btn primary" onclick="showToast('Curriculum saved!','success')"><i class="fa-solid fa-save"></i> Save Curriculum</button>
        </div>
        <div class="section-card-body">
          <div class="curriculum-tree" id="curriculum-tree">
            ${curriculumData.map((stage, si) => `
              <div class="stage-group">
                <div class="stage-header" onclick="toggleStageGroup(${si})">
                  <i class="fa-solid fa-chevron-right" id="stage-arrow-${si}"></i>
                  <span class="badge-stage stage-${stage.stage}">Stage ${stage.stage}</span>
                  <strong>${stage.name}</strong>
                  <span class="stage-count">${stage.skills.length} skills</span>
                </div>
                <div class="skill-list" id="stage-skills-${si}" style="display:none">
                  ${stage.skills.map((skill, ki) => `
                    <div class="skill-item" onclick="selectSkill(${si},${ki})">
                      <input type="checkbox" checked onclick="event.stopPropagation()">
                      <span>${skill.name}</span>
                      <span class="video-status">${getVideoIcon(skill.video)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="section-card" id="skill-detail-panel">
        <div class="section-card-header">
          <h3>Skill Detail</h3>
        </div>
        <div class="section-card-body padded">
          <div style="text-align:center;padding:40px 20px;color:var(--text-tertiary)">
            <i class="fa-solid fa-hand-pointer" style="font-size:32px;margin-bottom:12px;display:block"></i>
            <p>Select a skill from the tree to view details</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Expand first stage by default
  toggleStageGroup(0);
}

function toggleStageGroup(idx) {
  const skills = document.getElementById('stage-skills-' + idx);
  const arrow = document.getElementById('stage-arrow-' + idx);
  if (skills.style.display === 'none') {
    skills.style.display = 'block';
    arrow.classList.add('expanded');
  } else {
    skills.style.display = 'none';
    arrow.classList.remove('expanded');
  }
}

function selectSkill(stageIdx, skillIdx) {
  const stage = curriculumData[stageIdx];
  const skill = stage.skills[skillIdx];

  // Highlight selected
  document.querySelectorAll('.skill-item').forEach(el => el.classList.remove('selected'));
  const items = document.querySelectorAll(`#stage-skills-${stageIdx} .skill-item`);
  if (items[skillIdx]) items[skillIdx].classList.add('selected');

  const videoLabel = skill.video === 'platform' ? 'Platform Video Available' : skill.video === 'academy' ? 'Academy Video' : 'No Video';
  const videoColor = skill.video === 'platform' ? 'var(--success)' : skill.video === 'academy' ? 'var(--info)' : 'var(--text-tertiary)';

  document.getElementById('skill-detail-panel').innerHTML = `
    <div class="section-card-header">
      <h3>${skill.name}</h3>
      <span class="badge-stage stage-${stage.stage}">Stage ${stage.stage} — ${stage.name}</span>
    </div>
    <div class="section-card-body padded">
      <div style="background:var(--bg-tertiary);border-radius:var(--radius-md);padding:40px;text-align:center;margin-bottom:16px">
        <i class="fa-solid fa-video" style="font-size:32px;color:var(--text-tertiary);margin-bottom:8px;display:block"></i>
        <span style="font-size:13px;color:${videoColor};font-weight:600">${videoLabel}</span>
      </div>
      <h4 style="font-size:14px;margin-bottom:8px">Drill Description</h4>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Practice drill for ${skill.name} skill development. Focused repetition with coach feedback and video analysis.</p>
      <h4 style="font-size:14px;margin-bottom:8px">Passing Criteria</h4>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:20px">${skill.criteria}</p>
      <div style="border-top:1px solid var(--border);padding-top:16px">
        <h4 style="font-size:14px;margin-bottom:12px">Add Custom Skill</h4>
        <div class="form-group" style="margin-bottom:8px">
          <input type="text" placeholder="Custom skill name" style="width:100%;padding:8px 12px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--bg-tertiary);color:var(--text-primary);font-size:13px;font-family:var(--font-body)">
        </div>
        <div class="form-group" style="margin-bottom:12px">
          <textarea placeholder="Passing criteria" style="width:100%;padding:8px 12px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--bg-tertiary);color:var(--text-primary);font-size:13px;font-family:var(--font-body);min-height:60px;resize:vertical"></textarea>
        </div>
        <button class="action-btn primary" onclick="showToast('Custom skill added!','success')"><i class="fa-solid fa-plus"></i> Add Skill</button>
      </div>
    </div>
  `;
}

// ==============================
// PAGE: Assessments
// ==============================
function renderAssessments(container) {
  const promotionReady = students.filter(s => getScoreAvg(s.scores) >= 85 && s.attendance >= 90);

  container.innerHTML = `
    <h2 class="page-title">Assessments</h2>
    <p class="page-subtitle">Track student evaluations and manage promotions</p>

    <div class="tabs">
      <button class="tab-btn active" onclick="switchAssessmentTab('upcoming')">Upcoming Exams <span class="tab-count">2</span></button>
      <button class="tab-btn" onclick="switchAssessmentTab('results')">Recent Results <span class="tab-count">${assessments.length}</span></button>
      <button class="tab-btn" onclick="switchAssessmentTab('promotion')">Promotion Queue <span class="tab-count">${promotionReady.length}</span></button>
    </div>

    <div id="assessment-tab-content">
      ${renderUpcomingExams()}
    </div>

    <div style="margin-top:20px">
      <button class="action-btn primary" onclick="showCreateAssessmentModal()"><i class="fa-solid fa-plus"></i> Create Assessment</button>
    </div>
  `;
}

function switchAssessmentTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.target.closest('.tab-btn').classList.add('active');

  const content = document.getElementById('assessment-tab-content');
  if (tab === 'upcoming') content.innerHTML = renderUpcomingExams();
  else if (tab === 'results') content.innerHTML = renderRecentResults();
  else content.innerHTML = renderPromotionQueue();
}

function renderUpcomingExams() {
  return `
    <div class="section-card">
      <div class="section-card-body padded">
        <div style="display:flex;gap:16px;flex-wrap:wrap">
          <div style="flex:1;min-width:280px;background:var(--bg-tertiary);border-radius:var(--radius-md);padding:20px;border-left:4px solid var(--accent)">
            <h4 style="font-size:15px;margin-bottom:8px">Stage 2 Batting Assessment</h4>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px"><i class="fa-solid fa-calendar"></i> March 20, 2026 — Morning Batch</p>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px"><i class="fa-solid fa-users"></i> 12 students</p>
            <p style="font-size:12px;color:var(--text-secondary)"><i class="fa-solid fa-user-tie"></i> Coach Ravi</p>
          </div>
          <div style="flex:1;min-width:280px;background:var(--bg-tertiary);border-radius:var(--radius-md);padding:20px;border-left:4px solid var(--info)">
            <h4 style="font-size:15px;margin-bottom:8px">Stage 3 Bowling Assessment</h4>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px"><i class="fa-solid fa-calendar"></i> March 25, 2026 — Evening Batch</p>
            <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px"><i class="fa-solid fa-users"></i> 8 students</p>
            <p style="font-size:12px;color:var(--text-secondary)"><i class="fa-solid fa-user-tie"></i> Coach Priya</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRecentResults() {
  return `
    <div class="table-wrapper">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr><th>Student</th><th>Skill</th><th>Drill Score</th><th>Coach Score</th><th>Total</th><th>Date</th><th>Coach</th></tr>
          </thead>
          <tbody>
            ${assessments.map(a => `
              <tr>
                <td style="font-weight:600">${a.student}</td>
                <td>${a.skill}</td>
                <td>${a.drillScore}</td>
                <td>${a.coachScore}</td>
                <td style="font-weight:700;color:${a.total >= 80 ? 'var(--success)' : a.total >= 60 ? 'var(--warning)' : 'var(--danger)'}">${a.total}</td>
                <td style="font-size:12px;color:var(--text-secondary)">${a.date}</td>
                <td>${a.coach}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPromotionQueue() {
  const promotionReady = students.filter(s => getScoreAvg(s.scores) >= 85 && s.attendance >= 90);
  return `
    <div class="section-card">
      <div class="section-card-body padded">
        ${promotionReady.length === 0 ? '<p style="color:var(--text-secondary)">No students currently ready for promotion.</p>' :
          promotionReady.map(s => {
            const avg = getScoreAvg(s.scores);
            return `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--bg-tertiary);border-radius:var(--radius-md);margin-bottom:8px">
                <div>
                  <strong>${s.name}</strong>
                  <span class="badge-stage stage-${s.stage}" style="margin-left:8px">Stage ${s.stage}</span>
                  <span style="margin-left:8px;font-size:12px;color:var(--text-secondary)">Score: ${avg}% | Attendance: ${s.attendance}%</span>
                </div>
                <div style="display:flex;gap:8px">
                  <span style="font-size:12px;color:var(--success)"><i class="fa-solid fa-check-circle"></i> Score 85+</span>
                  <span style="font-size:12px;color:var(--success)"><i class="fa-solid fa-check-circle"></i> Attendance 90+</span>
                </div>
                <div>
                  <button class="action-btn primary" onclick="showToast('${s.name} promoted to Stage ${s.stage + 1}!','success')"><i class="fa-solid fa-arrow-up"></i> Approve</button>
                  <button class="action-btn" onclick="showToast('Promotion held for review','')">Hold</button>
                </div>
              </div>
            `;
          }).join('')
        }
      </div>
    </div>
  `;
}

function showCreateAssessmentModal() {
  showModal('Create Assessment', `
    <div class="form-row">
      <div class="form-group">
        <label>Assessment Title</label>
        <input type="text" placeholder="e.g. Stage 2 Batting Test">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" value="2026-03-20">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Stage</label>
        <select>
          <option>Stage 1</option><option>Stage 2</option><option>Stage 3</option><option>Stage 4</option>
        </select>
      </div>
      <div class="form-group">
        <label>Batch</label>
        <select>
          <option>Morning</option><option>Evening</option><option>Weekend</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Assigned Coach</label>
      <select>
        ${staff.filter(s => s.role !== 'Support Staff').map(s => `<option>${s.name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Skills to Assess</label>
      <textarea placeholder="List skills separated by commas"></textarea>
    </div>
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Assessment created!','success');closeModal()">Create Assessment</button>
    </div>
  `);
}

// ==============================
// PAGE: Attendance
// ==============================
function renderAttendance(container) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const last7 = ['10 Mar', '11 Mar', '12 Mar', '13 Mar', '14 Mar', '15 Mar', '16 Mar'];

  // Generate random attendance for demo
  const attendanceGrid = students.slice(0, 10).map(s => {
    return {
      name: s.name,
      days: last7.map(() => {
        const r = Math.random();
        if (r > 0.85) return 'absent';
        if (r > 0.8) return 'late';
        return 'present';
      })
    };
  });

  const presentCount = 62, absentCount = 18, lateCount = 5;

  // Generate heatmap for the month
  const heatmapDays = [];
  for (let d = 1; d <= 31; d++) {
    const r = Math.random();
    let level = 'level-0';
    if (d > 16) level = 'level-0'; // future
    else if (r > 0.9) level = 'absent';
    else if (r > 0.6) level = 'level-4';
    else if (r > 0.4) level = 'level-3';
    else if (r > 0.2) level = 'level-2';
    else level = 'level-1';
    heatmapDays.push({ day: d, level: d > 16 ? 'level-0' : level });
  }

  container.innerHTML = `
    <h2 class="page-title">Attendance</h2>
    <p class="page-subtitle">Track and manage daily attendance</p>

    <div style="display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap;align-items:center">
      <input type="date" value="2026-03-16" class="filter-select" style="padding:8px 12px">
      <button class="filter-btn active">Morning</button>
      <button class="filter-btn">Evening</button>
      <button class="filter-btn">Weekend</button>
      <div style="margin-left:auto">
        <button class="action-btn primary" onclick="showMarkAttendanceModal()"><i class="fa-solid fa-check-double"></i> Mark Today</button>
      </div>
    </div>

    <div class="metric-row" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-check"></i></div>
        </div>
        <div class="stat-card-value" style="color:var(--success)">${presentCount}</div>
        <div class="stat-card-label">Present</div>
      </div>
      <div class="stat-card accent-danger">
        <div class="stat-card-header">
          <div class="stat-card-icon" style="background:var(--danger-bg);color:var(--danger)"><i class="fa-solid fa-xmark"></i></div>
        </div>
        <div class="stat-card-value" style="color:var(--danger)">${absentCount}</div>
        <div class="stat-card-label">Absent</div>
      </div>
      <div class="stat-card accent-warning">
        <div class="stat-card-header">
          <div class="stat-card-icon" style="background:var(--warning-bg);color:var(--warning)"><i class="fa-solid fa-clock"></i></div>
        </div>
        <div class="stat-card-value" style="color:var(--warning)">${lateCount}</div>
        <div class="stat-card-label">Late</div>
      </div>
    </div>

    <div class="table-wrapper" style="margin-bottom:24px">
      <div class="table-header">
        <h3>Weekly Attendance Grid</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Student</th>
              ${last7.map(d => `<th style="text-align:center">${d}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${attendanceGrid.map(row => `
              <tr>
                <td style="font-weight:600">${row.name}</td>
                ${row.days.map(d => `
                  <td style="text-align:center">
                    <span class="attendance-dot ${d}">${d === 'present' ? 'P' : d === 'absent' ? 'A' : 'L'}</span>
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:24px">
      <div class="section-card-header">
        <h3>Monthly Heatmap — March 2026</h3>
      </div>
      <div class="section-card-body padded">
        <div class="attendance-heatmap">
          ${days.map(d => `<div class="heatmap-day-label">${d}</div>`).join('')}
          ${(() => {
            // Pad start: March 2026 starts on Sunday (index 6), so we need 6 empty cells
            let cells = '';
            for (let i = 0; i < 6; i++) cells += '<div class="heatmap-cell level-0"></div>';
            heatmapDays.forEach(h => {
              cells += `<div class="heatmap-cell ${h.level}">${h.day}</div>`;
            });
            return cells;
          })()}
        </div>
        <div style="display:flex;gap:16px;margin-top:12px;font-size:11px;color:var(--text-tertiary)">
          <span><span class="heatmap-cell level-1" style="display:inline-block;width:14px;height:14px;border-radius:2px;vertical-align:middle"></span> Low</span>
          <span><span class="heatmap-cell level-2" style="display:inline-block;width:14px;height:14px;border-radius:2px;vertical-align:middle"></span> Medium</span>
          <span><span class="heatmap-cell level-3" style="display:inline-block;width:14px;height:14px;border-radius:2px;vertical-align:middle"></span> High</span>
          <span><span class="heatmap-cell level-4" style="display:inline-block;width:14px;height:14px;border-radius:2px;vertical-align:middle"></span> Full</span>
          <span><span class="heatmap-cell absent" style="display:inline-block;width:14px;height:14px;border-radius:2px;vertical-align:middle"></span> Low Attendance</span>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-exclamation-triangle" style="color:var(--warning);margin-right:8px"></i> Low Attendance Alerts</h3>
      </div>
      <div class="section-card-body padded">
        ${students.filter(s => s.attendance < 80).map(s => `
          <div class="alert-box warning" style="margin-bottom:8px">
            <i class="fa-solid fa-user"></i>
            <strong>${s.name}</strong> — ${s.attendance}% attendance (${s.batch} batch)
            <button class="action-btn" style="margin-left:auto" onclick="showToast('Reminder sent to ${s.parentName}','success')">Notify Parent</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function showMarkAttendanceModal() {
  const morningStudents = students.filter(s => s.batch === 'Morning');
  showModal('Mark Attendance — Morning Batch', `
    <p style="font-size:12px;color:var(--text-secondary);margin-bottom:16px">March 16, 2026</p>
    ${morningStudents.map(s => `
      <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--border)">
        <input type="checkbox" checked style="width:18px;height:18px;accent-color:var(--accent)">
        <span style="flex:1;font-weight:500">${s.name}</span>
        <select style="padding:4px 8px;border:1px solid var(--border-strong);border-radius:var(--radius-xs);font-size:12px;background:var(--bg-tertiary);color:var(--text-primary)">
          <option>Present</option><option>Absent</option><option>Late</option>
        </select>
      </div>
    `).join('')}
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Attendance saved!','success');closeModal()">Save Attendance</button>
    </div>
  `);
}

// ==============================
// PAGE: Fee Management
// ==============================
function renderFeeManagement(container) {
  const pendingStudents = students.filter(s => s.feeStatus === 'Due' || s.feeStatus === 'Partial');
  const feeAmounts = { 'Due': 3500, 'Partial': 1500 };

  container.innerHTML = `
    <h2 class="page-title">Fee Management</h2>
    <p class="page-subtitle">Track fee collection and send reminders</p>

    <div class="fee-summary">
      <div class="fee-summary-box collected">
        <div class="fee-value" style="color:var(--success)">₹2,41,500</div>
        <div class="fee-label">Collected This Month</div>
      </div>
      <div class="fee-summary-box pending">
        <div class="fee-value" style="color:var(--danger)">₹36,000</div>
        <div class="fee-label">Pending</div>
      </div>
      <div class="fee-summary-box total">
        <div class="fee-value" style="color:var(--info)">₹2,77,500</div>
        <div class="fee-label">Total Expected</div>
      </div>
    </div>

    <div class="charts-row" style="margin-bottom:24px">
      <div class="chart-card">
        <h3><i class="fa-solid fa-chart-bar" style="color:var(--accent)"></i> Fee Collection Trend</h3>
        <canvas id="feeCollectionChart" height="220"></canvas>
      </div>
      <div class="chart-card">
        <h3><i class="fa-solid fa-chart-pie" style="color:var(--accent)"></i> Revenue by Batch</h3>
        <div style="display:flex;flex-direction:column;gap:16px;padding:20px 0">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>Morning Batch</span><strong>₹1,05,000</strong>
            </div>
            <div style="height:8px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden">
              <div style="width:42%;height:100%;background:#059669;border-radius:4px"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>Evening Batch</span><strong>₹87,500</strong>
            </div>
            <div style="height:8px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden">
              <div style="width:35%;height:100%;background:#3B82F6;border-radius:4px"></div>
            </div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
              <span>Weekend Batch</span><strong>₹49,000</strong>
            </div>
            <div style="height:8px;background:var(--bg-tertiary);border-radius:4px;overflow:hidden">
              <div style="width:20%;height:100%;background:#8B5CF6;border-radius:4px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-wrapper" style="margin-bottom:24px">
      <div class="table-header">
        <h3>Pending Fees</h3>
        <button class="action-btn primary" onclick="showToast('Bulk reminders sent to ${pendingStudents.length} parents!','success')"><i class="fa-solid fa-bell"></i> Send Bulk Reminder</button>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr><th>Student</th><th>Amount</th><th>Due Date</th><th>Days Overdue</th><th>Parent Phone</th><th>Actions</th></tr>
          </thead>
          <tbody>
            ${pendingStudents.map(s => {
              const amount = s.feeStatus === 'Due' ? 3500 : 1500;
              const overdue = Math.floor(Math.random() * 15) + 1;
              return `
                <tr>
                  <td style="font-weight:600">${s.name}</td>
                  <td style="font-weight:600">₹${amount.toLocaleString()}</td>
                  <td style="font-size:12px">March 5, 2026</td>
                  <td><span class="badge-fee due">${overdue} days</span></td>
                  <td style="font-size:12px">${s.parentPhone}</td>
                  <td>
                    <button class="action-btn primary" onclick="showToast('Payment recorded for ${s.name}','success')"><i class="fa-solid fa-check"></i> Record</button>
                    <button class="action-btn" onclick="showToast('Reminder sent to ${s.parentName}','success')"><i class="fa-solid fa-bell"></i> Remind</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="table-header">
        <h3>Recent Payment History</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr><th>Student</th><th>Amount</th><th>Date</th><th>Method</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Vikram Singh</td><td style="font-weight:600">₹3,500</td><td>Mar 16, 2026</td><td>UPI</td><td><span class="badge-fee paid">Paid</span></td></tr>
            <tr><td>Arjun Kumar</td><td style="font-weight:600">₹3,500</td><td>Mar 15, 2026</td><td>Cash</td><td><span class="badge-fee paid">Paid</span></td></tr>
            <tr><td>Karthik Menon</td><td style="font-weight:600">₹3,500</td><td>Mar 14, 2026</td><td>UPI</td><td><span class="badge-fee paid">Paid</span></td></tr>
            <tr><td>Meera Lakshmi</td><td style="font-weight:600">₹3,500</td><td>Mar 13, 2026</td><td>Bank Transfer</td><td><span class="badge-fee paid">Paid</span></td></tr>
            <tr><td>Priya Sharma</td><td style="font-weight:600">₹3,500</td><td>Mar 12, 2026</td><td>UPI</td><td><span class="badge-fee paid">Paid</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;

  setTimeout(() => initFeeCharts(), 50);
}

function initFeeCharts() {
  if (charts.feeCollection) charts.feeCollection.destroy();

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#8B92A5' : '#6E7191';

  const ctx = document.getElementById('feeCollectionChart');
  if (ctx) {
    charts.feeCollection = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: monthlyRevenue.map(r => r.month),
        datasets: [{
          label: 'Collected',
          data: monthlyRevenue.map(r => r.collected),
          backgroundColor: '#059669',
          borderRadius: 4
        }, {
          label: 'Pending',
          data: monthlyRevenue.map(r => r.pending),
          backgroundColor: '#EF4444',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'top', labels: { color: textColor, usePointStyle: true, pointStyle: 'circle' } } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => '₹' + (v / 1000) + 'K' } }
        }
      }
    });
  }
}

// ==============================
// PAGE: Staff
// ==============================
function renderStaff(container) {
  container.innerHTML = `
    <h2 class="page-title">Staff</h2>
    <p class="page-subtitle">Manage coaches and support staff</p>

    <div style="margin-bottom:20px">
      <button class="action-btn primary" onclick="showInviteStaffModal()"><i class="fa-solid fa-user-plus"></i> Invite Staff</button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:24px">
      ${staff.map(s => `
        <div class="staff-card">
          <div class="staff-avatar">${s.initials}</div>
          <div class="staff-name">${s.name}</div>
          <div class="staff-role">${s.role}</div>
          <div class="staff-meta">
            <div class="staff-meta-item"><i class="fa-solid fa-users"></i> ${s.batches.join(', ')}</div>
            <div class="staff-meta-item"><i class="fa-solid fa-phone"></i> ${s.phone}</div>
            <div class="staff-meta-item"><i class="fa-solid fa-calendar"></i> Joined ${s.joinDate}</div>
            ${s.studentCount > 0 ? `<div class="staff-meta-item"><i class="fa-solid fa-graduation-cap"></i> ${s.studentCount} students</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3>Staff Performance</h3>
      </div>
      <div class="section-card-body">
        <table class="data-table">
          <thead>
            <tr><th>Staff</th><th>Role</th><th>Sessions This Month</th><th>Avg Student Score Improvement</th></tr>
          </thead>
          <tbody>
            ${staff.filter(s => s.role !== 'Support Staff').map(s => `
              <tr>
                <td style="font-weight:600">${s.name}</td>
                <td>${s.role}</td>
                <td>${s.sessionsMonth}</td>
                <td style="color:var(--success);font-weight:600">+${s.avgImprovement}%</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showInviteStaffModal() {
  showModal('Invite Staff Member', `
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" placeholder="Enter staff name">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Role</label>
        <select>
          <option>Batting Coach</option>
          <option>Bowling Coach</option>
          <option>Fielding Coach</option>
          <option>Fitness Trainer</option>
          <option>Support Staff</option>
        </select>
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="+91 XXXXX XXXXX">
      </div>
    </div>
    <div class="form-group">
      <label>Assign Batches</label>
      <div style="display:flex;gap:12px;margin-top:4px">
        <label style="font-size:13px;display:flex;align-items:center;gap:6px"><input type="checkbox" style="accent-color:var(--accent)"> Morning</label>
        <label style="font-size:13px;display:flex;align-items:center;gap:6px"><input type="checkbox" style="accent-color:var(--accent)"> Evening</label>
        <label style="font-size:13px;display:flex;align-items:center;gap:6px"><input type="checkbox" style="accent-color:var(--accent)"> Weekend</label>
      </div>
    </div>
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Invitation sent!','success');closeModal()">Send Invite</button>
    </div>
  `);
}

// ==============================
// PAGE: Matches
// ==============================
function renderMatches(container) {
  const matches = [
    { id: 1, title: 'Weekend Practice Match', type: 'Internal', format: 'T10', date: '23 Mar 2026', time: '4:00 PM', venue: 'SAM Academy Ground', status: 'collecting', available: 6, notAvail: 1, maybe: 1, pending: 2, total: 10, fee: 200, feePaid: 2, createdBy: 'Venkat' },
    { id: 2, title: 'Parents vs Students Fun Match', type: 'Parent Match', format: 'T8', date: '30 Mar 2026', time: '5:00 PM', venue: 'SAM Academy Ground', status: 'collecting', available: 8, notAvail: 2, maybe: 3, pending: 7, total: 20, fee: 0, feePaid: 0, createdBy: 'Venkat' },
    { id: 3, title: 'Inter-Academy: SAM vs Thunder CC', type: 'Inter-Academy', format: 'T20', date: '6 Apr 2026', time: '9:00 AM', venue: 'Corporation Ground, Coimbatore', status: 'teams-announced', available: 12, notAvail: 1, maybe: 0, pending: 2, total: 15, fee: 500, feePaid: 3, createdBy: 'Venkat' },
    { id: 4, title: 'U-14 Batch Internal Match', type: 'Internal', format: 'T15', date: '15 Mar 2026', time: '4:00 PM', venue: 'SAM Academy Ground', status: 'completed', available: 14, notAvail: 0, maybe: 0, pending: 0, total: 14, fee: 150, feePaid: 14, createdBy: 'Coach Ravi', result: 'Team A won by 22 runs' },
  ];

  const statusConfig = {
    'collecting': { label: 'Collecting Availability', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', icon: 'fa-hourglass-half' },
    'teams-announced': { label: 'Teams Announced', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', icon: 'fa-users' },
    'in-progress': { label: 'In Progress', color: '#10b981', bg: 'rgba(16,185,129,0.1)', icon: 'fa-play-circle' },
    'completed': { label: 'Completed', color: '#6b7280', bg: 'rgba(107,114,128,0.1)', icon: 'fa-check-circle' }
  };

  const openMatches = matches.filter(m => m.status !== 'completed');
  const completedMatches = matches.filter(m => m.status === 'completed');
  const totalFeeExpected = matches.reduce((s, m) => s + (m.fee * m.available), 0);
  const totalFeeCollected = matches.reduce((s, m) => s + (m.fee * m.feePaid), 0);

  container.innerHTML = `
    <h2 class="page-title"><i class="fa-solid fa-cricket-bat-ball" style="color:var(--accent);margin-right:8px"></i> Matches</h2>
    <p class="page-subtitle">Organize matches, track availability and collect fees</p>

    <!-- Stats Row -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:24px;">
      <div class="stat-card">
        <div class="stat-card-icon" style="background:rgba(245,158,11,0.1);color:#f59e0b"><i class="fa-solid fa-hourglass-half"></i></div>
        <div class="stat-card-value">${openMatches.filter(m => m.status === 'collecting').length}</div>
        <div class="stat-card-label">Collecting Responses</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon" style="background:rgba(59,130,246,0.1);color:#3b82f6"><i class="fa-solid fa-users"></i></div>
        <div class="stat-card-value">${openMatches.filter(m => m.status === 'teams-announced').length}</div>
        <div class="stat-card-label">Teams Announced</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon" style="background:rgba(16,185,129,0.1);color:#10b981"><i class="fa-solid fa-check-circle"></i></div>
        <div class="stat-card-value">${completedMatches.length}</div>
        <div class="stat-card-label">Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-icon" style="background:rgba(239,68,68,0.1);color:#ef4444"><i class="fa-solid fa-indian-rupee-sign"></i></div>
        <div class="stat-card-value">₹${totalFeeCollected.toLocaleString()} <span style="font-size:12px;color:var(--text-tertiary)">/ ₹${totalFeeExpected.toLocaleString()}</span></div>
        <div class="stat-card-label">Match Fees Collected</div>
      </div>
    </div>

    <!-- Create Match Button -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:16px;">
      <button class="action-btn primary" onclick="showCreateMatchModal()"><i class="fa-solid fa-plus"></i> Create Match</button>
    </div>

    <!-- Active Matches -->
    <h3 style="font-size:16px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">Active Matches</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:16px;margin-bottom:32px;">
      ${openMatches.map(m => {
        const sc = statusConfig[m.status];
        const feeProgress = m.fee > 0 ? Math.round(m.feePaid / m.available * 100) : 100;
        return `
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px;position:relative;">
          <!-- Header -->
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
            <div>
              <span style="font-size:10px;padding:3px 8px;border-radius:6px;background:rgba(5,150,105,0.08);color:var(--accent);font-weight:600;">${m.type} · ${m.format}</span>
              <div style="font-size:16px;font-weight:700;color:var(--text-primary);margin-top:6px;">${m.title}</div>
            </div>
            <span style="font-size:11px;padding:4px 10px;border-radius:6px;background:${sc.bg};color:${sc.color};font-weight:600;white-space:nowrap;"><i class="fa-solid ${sc.icon}" style="font-size:10px;margin-right:4px;"></i>${sc.label}</span>
          </div>

          <!-- Details -->
          <div style="display:flex;flex-wrap:wrap;gap:12px;font-size:13px;color:var(--text-secondary);margin-bottom:16px;">
            <span><i class="fa-solid fa-calendar" style="width:16px;color:var(--text-tertiary);"></i> ${m.date}</span>
            <span><i class="fa-solid fa-clock" style="width:16px;color:var(--text-tertiary);"></i> ${m.time}</span>
            <span><i class="fa-solid fa-location-dot" style="width:16px;color:var(--text-tertiary);"></i> ${m.venue}</span>
          </div>

          <!-- Availability Bar -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-tertiary);margin-bottom:6px;">
              <span>Responses</span>
              <span>${m.available + m.notAvail + m.maybe}/${m.total} responded</span>
            </div>
            <div style="display:flex;height:8px;border-radius:4px;overflow:hidden;background:var(--bg-tertiary);">
              <div style="width:${m.available / m.total * 100}%;background:#10b981;" title="${m.available} available"></div>
              <div style="width:${m.maybe / m.total * 100}%;background:#f59e0b;" title="${m.maybe} maybe"></div>
              <div style="width:${m.notAvail / m.total * 100}%;background:#ef4444;" title="${m.notAvail} not available"></div>
            </div>
            <div style="display:flex;gap:12px;margin-top:6px;font-size:11px;">
              <span style="color:#10b981;font-weight:600;"><i class="fa-solid fa-check"></i> ${m.available} Available</span>
              <span style="color:#f59e0b;font-weight:600;"><i class="fa-solid fa-question"></i> ${m.maybe} Maybe</span>
              <span style="color:#ef4444;font-weight:600;"><i class="fa-solid fa-xmark"></i> ${m.notAvail} No</span>
              <span style="color:var(--text-tertiary);font-weight:600;"><i class="fa-solid fa-clock"></i> ${m.pending} Pending</span>
            </div>
          </div>

          ${m.fee > 0 ? `
          <!-- Fee Collection -->
          <div style="padding:12px;background:var(--bg-tertiary);border-radius:8px;margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span style="font-size:13px;font-weight:600;color:var(--text-primary);"><i class="fa-solid fa-indian-rupee-sign" style="color:var(--accent);"></i> Fee: ₹${m.fee}/player</span>
              <span style="font-size:12px;font-weight:600;color:${feeProgress === 100 ? '#10b981' : '#f59e0b'};">${m.feePaid}/${m.available} paid</span>
            </div>
            <div style="height:6px;border-radius:3px;overflow:hidden;background:var(--bg-card);">
              <div style="height:100%;width:${feeProgress}%;background:${feeProgress === 100 ? '#10b981' : '#f59e0b'};border-radius:3px;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-tertiary);margin-top:4px;">
              <span>Collected: ₹${(m.fee * m.feePaid).toLocaleString()}</span>
              <span>Pending: ₹${(m.fee * (m.available - m.feePaid)).toLocaleString()}</span>
            </div>
          </div>
          ` : `
          <div style="padding:8px 12px;background:rgba(16,185,129,0.08);border-radius:8px;margin-bottom:12px;font-size:12px;color:#10b981;font-weight:600;text-align:center;">
            <i class="fa-solid fa-gift"></i> Free Event — No Fee
          </div>
          `}

          <!-- Actions -->
          <div style="display:flex;gap:8px;">
            ${m.status === 'collecting' ? `
              <button class="action-btn primary" style="flex:1;" onclick="showToast('Teams announced!','success')"><i class="fa-solid fa-users"></i> Announce Teams</button>
              <button class="action-btn" style="flex:1;" onclick="showToast('Nudge sent to ${m.pending} players!','success')"><i class="fa-solid fa-bell"></i> Nudge (${m.pending})</button>
            ` : m.status === 'teams-announced' ? `
              <button class="action-btn primary" style="flex:1;background:#10b981;border-color:#10b981;" onclick="showToast('Match started!','success')"><i class="fa-solid fa-play"></i> Start Match</button>
              <button class="action-btn" style="flex:1;" onclick="showToast('Fee reminders sent!','success')"><i class="fa-solid fa-indian-rupee-sign"></i> Collect Fees (${m.available - m.feePaid})</button>
            ` : ''}
            <button class="action-btn" onclick="showToast('Match shared to feed!','success')"><i class="fa-solid fa-share"></i></button>
          </div>
        </div>
      `}).join('')}
    </div>

    <!-- Completed Matches -->
    ${completedMatches.length > 0 ? `
    <h3 style="font-size:16px;font-weight:700;margin-bottom:12px;color:var(--text-primary);">Completed Matches</h3>
    <div class="data-table" style="margin-bottom:24px;">
      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Type</th>
            <th>Date</th>
            <th>Players</th>
            <th>Fee Collected</th>
            <th>Result</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${completedMatches.map(m => `
            <tr>
              <td><strong>${m.title}</strong></td>
              <td><span style="font-size:11px;padding:3px 8px;border-radius:6px;background:rgba(5,150,105,0.08);color:var(--accent);font-weight:600;">${m.type} · ${m.format}</span></td>
              <td>${m.date}</td>
              <td>${m.available}</td>
              <td>₹${(m.fee * m.feePaid).toLocaleString()}</td>
              <td style="font-weight:600;color:#10b981;">${m.result || '—'}</td>
              <td>
                <button class="action-btn" style="font-size:11px;" onclick="showToast('Scorecard coming soon!','info')"><i class="fa-solid fa-table"></i> Scorecard</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}
  `;
}

function showCreateMatchModal() {
  showModal('Create Match', `
    <div style="display:grid;gap:14px;">
      <div>
        <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Match Title</label>
        <input type="text" placeholder="e.g. Weekend Practice Match" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Type</label>
          <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;">
            <option>Internal</option><option>Inter-Academy</option><option>Parent Match</option><option>Parent vs Student</option><option>Tournament</option>
          </select>
        </div>
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Format</label>
          <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;">
            <option>T5</option><option selected>T10</option><option>T15</option><option>T20</option><option>Custom</option>
          </select>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Date</label>
          <input type="date" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Time</label>
          <input type="time" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
        </div>
      </div>
      <div>
        <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Venue</label>
        <input type="text" value="SAM Academy Ground" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Fee (₹ per player)</label>
          <input type="number" value="200" placeholder="0 for free" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
        </div>
        <div>
          <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Max Players</label>
          <input type="number" value="22" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
        </div>
      </div>
      <div>
        <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Who Can Join</label>
        <select style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;">
          <option>All Batches</option><option>Morning U-12</option><option>Evening U-14</option><option>Weekend All Ages</option><option>Parents</option><option>Students + Parents</option><option>Selected Players</option>
        </select>
      </div>
      <div>
        <label style="font-size:12px;font-weight:600;color:var(--text-secondary);display:block;margin-bottom:4px;">Respond By</label>
        <input type="date" style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px;box-sizing:border-box;">
      </div>
      <div style="display:flex;gap:10px;margin-top:8px;">
        <button class="action-btn" onclick="closeModal()" style="flex:1;">Cancel</button>
        <button class="action-btn primary" onclick="showToast('Match created! Notifications sent to players.','success');closeModal()" style="flex:2;"><i class="fa-solid fa-paper-plane"></i> Create & Notify</button>
      </div>
    </div>
  `);
}

// ==============================
// PAGE: Feed & Posts
// ==============================
function renderFeed(container) {
  container.innerHTML = `
    <h2 class="page-title">Feed & Posts</h2>
    <p class="page-subtitle">Manage academy announcements and communications</p>

    <div style="margin-bottom:20px">
      <button class="action-btn primary" onclick="showCreatePostModal()"><i class="fa-solid fa-plus"></i> Create Post</button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 320px;gap:20px">
      <div>
        ${feedPosts.map(p => `
          <div class="post-card">
            <div class="post-header">
              <div class="post-avatar">${p.initials}</div>
              <div>
                <div class="post-author">${p.author}</div>
                <div class="post-date">${p.date}</div>
              </div>
              <span class="status-badge ${p.visibility === 'All' ? 'active' : 'pending'}" style="margin-left:auto">${p.visibility}</span>
            </div>
            <div class="post-content">${p.content}</div>
            <div class="post-footer">
              <span><i class="fa-solid fa-heart"></i> ${p.likes}</span>
              <span><i class="fa-solid fa-comment"></i> ${p.comments}</span>
              <button class="action-btn" style="margin-left:auto" onclick="showToast('Post actions coming soon!','')"><i class="fa-solid fa-ellipsis"></i></button>
            </div>
          </div>
        `).join('')}
      </div>

      <div>
        <div class="section-card">
          <div class="section-card-header">
            <h3>Content Moderation</h3>
          </div>
          <div class="section-card-body padded">
            <div style="text-align:center;padding:20px;color:var(--text-tertiary)">
              <i class="fa-solid fa-shield-check" style="font-size:28px;margin-bottom:8px;display:block;color:var(--success)"></i>
              <p style="font-size:13px">No flagged posts</p>
              <p style="font-size:11px;color:var(--text-tertiary)">All content is compliant</p>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="section-card-header">
            <h3>Post Stats</h3>
          </div>
          <div class="section-card-body padded" style="font-size:13px">
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
              <span>Total Posts</span><strong>${feedPosts.length}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
              <span>This Week</span><strong>3</strong>
            </div>
            <div style="display:flex;justify-content:space-between;padding:8px 0">
              <span>Total Engagement</span><strong>${feedPosts.reduce((a, p) => a + p.likes + p.comments, 0)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showCreatePostModal() {
  showModal('Create Post', `
    <div class="form-group">
      <label>Visibility</label>
      <select>
        <option>All (Students + Parents)</option>
        <option>Morning Batch</option>
        <option>Evening Batch</option>
        <option>Weekend Batch</option>
        <option>Parents Only</option>
        <option>Staff Only</option>
      </select>
    </div>
    <div class="form-group">
      <label>Content</label>
      <textarea placeholder="Write your announcement..." rows="4"></textarea>
    </div>
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Post published!','success');closeModal()">Publish Post</button>
    </div>
  `);
}

// ==============================
// PAGE: Parent Community
// ==============================
function renderParentCommunity(container) {
  const pc = parentCommunity;

  container.innerHTML = `
    <h2 class="page-title">Parent Community</h2>
    <p class="page-subtitle">Parent cricket engagement and match management</p>

    <div class="metric-row" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-people-group"></i></div>
        </div>
        <div class="stat-card-value">${pc.totalPlayers}</div>
        <div class="stat-card-label">Parent Players</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-baseball-bat-ball"></i></div>
        </div>
        <div class="stat-card-value">${pc.matchesPlayed}</div>
        <div class="stat-card-label">Matches Played</div>
      </div>
      <div class="stat-card accent-purple">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-calendar"></i></div>
        </div>
        <div class="stat-card-value">1</div>
        <div class="stat-card-label">Upcoming Matches</div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:24px">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-calendar-star" style="color:var(--accent);margin-right:8px"></i> Upcoming Match</h3>
      </div>
      <div class="section-card-body padded">
        <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap">
          <div style="text-align:center;flex:1;min-width:120px">
            <div style="font-size:18px;font-weight:700;color:var(--accent)">${pc.upcomingMatch.team1}</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:13px;color:var(--text-tertiary)">VS</div>
            <div style="font-size:20px;font-weight:800;color:var(--text-primary)">T10</div>
          </div>
          <div style="text-align:center;flex:1;min-width:120px">
            <div style="font-size:18px;font-weight:700;color:var(--info)">${pc.upcomingMatch.team2}</div>
          </div>
        </div>
        <div style="text-align:center;margin-top:16px;font-size:13px;color:var(--text-secondary)">
          <i class="fa-solid fa-calendar"></i> ${pc.upcomingMatch.date} &nbsp;|&nbsp; <i class="fa-solid fa-clock"></i> ${pc.upcomingMatch.time} &nbsp;|&nbsp; <i class="fa-solid fa-location-dot"></i> ${pc.upcomingMatch.venue}
        </div>
      </div>
    </div>

    <div class="table-wrapper" style="margin-bottom:24px">
      <div class="table-header">
        <h3>Recent Match Results</h3>
        <button class="action-btn primary" onclick="showOrganizeMatchModal()"><i class="fa-solid fa-plus"></i> Organize Match</button>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr><th>Date</th><th>Team 1</th><th>Score</th><th>Team 2</th><th>Score</th><th>Result</th></tr>
          </thead>
          <tbody>
            ${pc.recentMatches.map(m => `
              <tr>
                <td style="font-size:12px">${m.date}</td>
                <td style="font-weight:600">${m.team1}</td>
                <td style="font-weight:700;color:var(--accent)">${m.score1}</td>
                <td style="font-weight:600">${m.team2}</td>
                <td style="font-weight:700;color:var(--info)">${m.score2}</td>
                <td style="font-size:12px">${m.result}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showOrganizeMatchModal() {
  showModal('Organize Parent Match', `
    <div class="form-row">
      <div class="form-group">
        <label>Date</label>
        <input type="date" value="2026-04-05">
      </div>
      <div class="form-group">
        <label>Time</label>
        <input type="time" value="06:00">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Team 1</label>
        <input type="text" placeholder="e.g. Morning Parents XI">
      </div>
      <div class="form-group">
        <label>Team 2</label>
        <input type="text" placeholder="e.g. Evening Parents XI">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Format</label>
        <select><option>T10</option><option>T20</option><option>Box Cricket</option></select>
      </div>
      <div class="form-group">
        <label>Venue</label>
        <input type="text" value="Academy Ground">
      </div>
    </div>
    <div class="modal-actions">
      <button class="action-btn" onclick="closeModal()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Match organized!','success');closeModal()">Create Match</button>
    </div>
  `);
}

// ==============================
// PAGE: Reports
// ==============================
function renderReports(container) {
  container.innerHTML = `
    <h2 class="page-title">Reports</h2>
    <p class="page-subtitle">Academy analytics and downloadable reports</p>

    <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap;align-items:center">
      <span style="font-size:13px;color:var(--text-secondary)">Date Range:</span>
      <input type="date" value="2026-01-01" class="filter-select" style="padding:8px 12px">
      <span style="color:var(--text-tertiary)">to</span>
      <input type="date" value="2026-03-16" class="filter-select" style="padding:8px 12px">
    </div>

    <div class="report-card">
      <h4><i class="fa-solid fa-graduation-cap"></i> Student Progress Report</h4>
      <div class="report-metrics">
        <div class="report-metric"><strong>85</strong>Total Students</div>
        <div class="report-metric"><strong>72%</strong>Avg Score</div>
        <div class="report-metric"><strong>+8%</strong>Improvement</div>
        <div class="report-metric"><strong>14</strong>Promotions</div>
      </div>
      <canvas id="progressChart" height="180"></canvas>
      <div class="report-actions">
        <button class="action-btn primary" onclick="showToast('PDF downloaded!','success')"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
        <button class="action-btn" onclick="showToast('Report exported!','success')"><i class="fa-solid fa-download"></i> Export</button>
      </div>
    </div>

    <div class="report-card">
      <h4><i class="fa-solid fa-calendar-check"></i> Attendance Report</h4>
      <div class="report-metrics">
        <div class="report-metric"><strong>87%</strong>Avg Attendance</div>
        <div class="report-metric"><strong>62</strong>Present Today</div>
        <div class="report-metric"><strong>5</strong>Below 75%</div>
        <div class="report-metric"><strong>92%</strong>Morning Batch Avg</div>
      </div>
      <canvas id="attendanceReportChart" height="180"></canvas>
      <div class="report-actions">
        <button class="action-btn primary" onclick="showToast('PDF downloaded!','success')"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
        <button class="action-btn" onclick="showToast('Report exported!','success')"><i class="fa-solid fa-download"></i> Export</button>
      </div>
    </div>

    <div class="report-card">
      <h4><i class="fa-solid fa-indian-rupee-sign"></i> Financial Report</h4>
      <div class="report-metrics">
        <div class="report-metric"><strong>₹2.41L</strong>This Month</div>
        <div class="report-metric"><strong>₹36K</strong>Pending</div>
        <div class="report-metric"><strong>87%</strong>Collection Rate</div>
        <div class="report-metric"><strong>₹14.2L</strong>YTD Revenue</div>
      </div>
      <canvas id="financialReportChart" height="180"></canvas>
      <div class="report-actions">
        <button class="action-btn primary" onclick="showToast('PDF downloaded!','success')"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
        <button class="action-btn" onclick="showToast('Report exported!','success')"><i class="fa-solid fa-download"></i> Export</button>
      </div>
    </div>

    <div class="report-card">
      <h4><i class="fa-solid fa-user-tie"></i> Coach Performance Report</h4>
      <div class="report-metrics">
        <div class="report-metric"><strong>3</strong>Active Coaches</div>
        <div class="report-metric"><strong>104</strong>Sessions/Month</div>
        <div class="report-metric"><strong>+15%</strong>Avg Improvement</div>
        <div class="report-metric"><strong>4.5/5</strong>Parent Rating</div>
      </div>
      <div class="report-actions">
        <button class="action-btn primary" onclick="showToast('PDF downloaded!','success')"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
        <button class="action-btn" onclick="showToast('Report exported!','success')"><i class="fa-solid fa-download"></i> Export</button>
      </div>
    </div>
  `;

  setTimeout(() => initReportCharts(), 50);
}

function initReportCharts() {
  ['progressChart', 'attendanceReportChart', 'financialReportChart'].forEach(id => {
    if (charts[id]) charts[id].destroy();
  });

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textColor = isDark ? '#8B92A5' : '#6E7191';

  const pCtx = document.getElementById('progressChart');
  if (pCtx) {
    charts.progressChart = new Chart(pCtx, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Avg Score',
          data: [65, 67, 69, 70, 71, 72],
          borderColor: '#059669',
          backgroundColor: 'rgba(5,150,105,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor }, min: 50, max: 100 }
        }
      }
    });
  }

  const aCtx = document.getElementById('attendanceReportChart');
  if (aCtx) {
    charts.attendanceReportChart = new Chart(aCtx, {
      type: 'bar',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Attendance %',
          data: [84, 86, 82, 88, 87, 87],
          backgroundColor: '#059669',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor }, min: 70, max: 100 }
        }
      }
    });
  }

  const fCtx = document.getElementById('financialReportChart');
  if (fCtx) {
    charts.financialReportChart = new Chart(fCtx, {
      type: 'bar',
      data: {
        labels: monthlyRevenue.map(r => r.month),
        datasets: [
          { label: 'Collected', data: monthlyRevenue.map(r => r.collected), backgroundColor: '#059669', borderRadius: 4 },
          { label: 'Pending', data: monthlyRevenue.map(r => r.pending), backgroundColor: '#EF4444', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { position: 'top', labels: { color: textColor, usePointStyle: true, pointStyle: 'circle' } } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { color: gridColor }, ticks: { color: textColor, callback: v => '₹' + (v / 1000) + 'K' } }
        }
      }
    });
  }
}

// ==============================
// PAGE: Settings
// ==============================
function renderSettings(container) {
  container.innerHTML = `
    <h2 class="page-title">Settings</h2>
    <p class="page-subtitle">Configure academy preferences</p>

    <div class="section-card" style="margin-bottom:20px">
      <div class="section-card-header">
        <h3>Academy Profile</h3>
        <button class="action-btn primary" onclick="showToast('Academy profile saved!','success')"><i class="fa-solid fa-save"></i> Save Changes</button>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>Academy Name</label>
              <div class="settings-desc">Displayed across the app</div>
            </div>
            <input type="text" class="settings-input" value="${academy.name}">
          </div>
          <div class="settings-row">
            <div>
              <label>Address</label>
              <div class="settings-desc">Academy location</div>
            </div>
            <input type="text" class="settings-input" value="${academy.address}">
          </div>
          <div class="settings-row">
            <div>
              <label>Phone Number</label>
              <div class="settings-desc">Primary contact</div>
            </div>
            <input type="text" class="settings-input" value="${academy.phone}">
          </div>
          <div class="settings-row">
            <div>
              <label>Description</label>
              <div class="settings-desc">Short description for parents</div>
            </div>
            <input type="text" class="settings-input" value="Premier cricket coaching academy in Chennai">
          </div>
          <div class="settings-row">
            <div>
              <label>Logo</label>
              <div class="settings-desc">Academy logo (square)</div>
            </div>
            <button class="action-btn"><i class="fa-solid fa-upload"></i> Upload Logo</button>
          </div>
        </div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:20px">
      <div class="section-card-header">
        <h3>Attendance Configuration</h3>
        <button class="action-btn primary" onclick="showToast('Attendance config saved!','success')"><i class="fa-solid fa-save"></i> Save Changes</button>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>Low Attendance Threshold</label>
              <div class="settings-desc">Alert when attendance falls below this %</div>
            </div>
            <input type="number" class="settings-input" value="75" style="width:100px">
          </div>
          <div class="settings-row">
            <div>
              <label>Auto-notify Parents</label>
              <div class="settings-desc">Send automatic alerts for absent students</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Late Tolerance (minutes)</label>
              <div class="settings-desc">Minutes after which student is marked late</div>
            </div>
            <input type="number" class="settings-input" value="15" style="width:100px">
          </div>
        </div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:20px">
      <div class="section-card-header">
        <h3>Fee Configuration</h3>
        <button class="action-btn primary" onclick="showToast('Fee config saved!','success')"><i class="fa-solid fa-save"></i> Save Changes</button>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>Monthly Fee (Morning)</label>
              <div class="settings-desc">Per student per month</div>
            </div>
            <input type="text" class="settings-input" value="₹3,500" style="width:120px">
          </div>
          <div class="settings-row">
            <div>
              <label>Monthly Fee (Evening)</label>
              <div class="settings-desc">Per student per month</div>
            </div>
            <input type="text" class="settings-input" value="₹3,500" style="width:120px">
          </div>
          <div class="settings-row">
            <div>
              <label>Monthly Fee (Weekend)</label>
              <div class="settings-desc">Per student per month</div>
            </div>
            <input type="text" class="settings-input" value="₹2,500" style="width:120px">
          </div>
          <div class="settings-row">
            <div>
              <label>Due Date</label>
              <div class="settings-desc">Day of month when fee is due</div>
            </div>
            <input type="number" class="settings-input" value="5" style="width:100px">
          </div>
          <div class="settings-row">
            <div>
              <label>Auto Fee Reminders</label>
              <div class="settings-desc">Send reminders before and after due date</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:20px">
      <div class="section-card-header">
        <h3>Subscription</h3>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>Current Plan</label>
              <div class="settings-desc">Your academy subscription status</div>
            </div>
            <span class="status-badge trial"><i class="fa-solid fa-star"></i> Trial — 22 days remaining</span>
          </div>
          <div class="settings-row">
            <div>
              <label>Upgrade Plan</label>
              <div class="settings-desc">Unlock all features with a premium plan</div>
            </div>
            <button class="action-btn primary" onclick="showToast('Contact sales for upgrade!','')"><i class="fa-solid fa-crown"></i> Upgrade</button>
          </div>
        </div>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:20px">
      <div class="section-card-header">
        <h3>Staff Permissions</h3>
        <button class="action-btn primary" onclick="showToast('Permissions saved!','success')"><i class="fa-solid fa-save"></i> Save Changes</button>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>Coaches can mark attendance</label>
              <div class="settings-desc">Allow coaches to mark student attendance</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Coaches can record fees</label>
              <div class="settings-desc">Allow coaches to record fee payments</div>
            </div>
            <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Coaches can add students</label>
              <div class="settings-desc">Allow coaches to register new students</div>
            </div>
            <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Coaches can post to feed</label>
              <div class="settings-desc">Allow coaches to create announcements</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3>Notification Preferences</h3>
        <button class="action-btn primary" onclick="showToast('Notification preferences saved!','success')"><i class="fa-solid fa-save"></i> Save Changes</button>
      </div>
      <div class="section-card-body padded">
        <div class="settings-section" style="margin-bottom:0">
          <div class="settings-row">
            <div>
              <label>New Admission Requests</label>
              <div class="settings-desc">Get notified for new admission requests</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Fee Payment Received</label>
              <div class="settings-desc">Notify when a fee payment is recorded</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Low Attendance Alerts</label>
              <div class="settings-desc">Alert when students fall below threshold</div>
            </div>
            <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
          </div>
          <div class="settings-row">
            <div>
              <label>Daily Summary Email</label>
              <div class="settings-desc">Receive daily academy summary via email</div>
            </div>
            <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---- Initialize on Load ----
document.addEventListener('DOMContentLoaded', () => {
  navigateAdmin('dashboard');
});
