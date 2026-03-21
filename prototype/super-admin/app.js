/* ============================================
   Soruban Sports — Super Admin Panel App
   ============================================ */

let currentPage = 'dashboard';
let charts = {};

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

// ---- Modal System ----
function showModal(title, bodyHTML) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2>${title}</h2>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-body">${bodyHTML}</div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ---- Mock Data: Academies ----
const academies = [
  { id: 1, name: 'SAM Cricket Academy', city: 'Coimbatore', students: 85, plan: 'Pro', status: 'Active', revenue: 12750, joined: '2025-10-15', contact: 'Rajesh K', email: 'rajesh@cca.in' },
  { id: 2, name: 'Star Cricket Academy', city: 'Chennai', students: 120, plan: 'Elite', status: 'Active', revenue: 36000, joined: '2025-09-01', contact: 'Vikram S', email: 'vikram@starcricket.in' },
  { id: 3, name: 'CBE Sports Academy', city: 'Coimbatore', students: 200, plan: 'Elite', status: 'Active', revenue: 60000, joined: '2025-08-20', contact: 'Suresh M', email: 'suresh@cbesports.in' },
  { id: 4, name: 'Young Stars Cricket', city: 'Bangalore', students: 45, plan: 'Pro', status: 'Active', revenue: 6750, joined: '2025-11-10', contact: 'Arun P', email: 'arun@youngstars.in' },
  { id: 5, name: 'Cricket Champions', city: 'Mumbai', students: 150, plan: 'Elite', status: 'Active', revenue: 45000, joined: '2025-09-15', contact: 'Rohit D', email: 'rohit@cricchamps.in' },
  { id: 6, name: 'KPL Cricket Academy', city: 'Coimbatore', students: 30, plan: 'Free', status: 'Trial', revenue: 0, joined: '2026-02-01', contact: 'Karthik L', email: 'karthik@kpl.in' },
  { id: 7, name: 'Dhoni Cricket School', city: 'Chennai', students: 60, plan: 'Pro', status: 'Active', revenue: 9000, joined: '2025-12-05', contact: 'Ganesh R', email: 'ganesh@dhonischool.in' },
  { id: 8, name: 'Future Stars Academy', city: 'Hyderabad', students: 25, plan: 'Free', status: 'Trial', revenue: 0, joined: '2026-01-20', contact: 'Prasad V', email: 'prasad@futurestars.in' },
  { id: 9, name: 'Metro Cricket Hub', city: 'Delhi', students: 90, plan: 'Pro', status: 'Active', revenue: 13500, joined: '2025-10-30', contact: 'Amit T', email: 'amit@metrohub.in' },
  { id: 10, name: 'Southern Sports Club', city: 'Madurai', students: 40, plan: 'Pro', status: 'Suspended', revenue: 0, joined: '2025-11-25', contact: 'Velu N', email: 'velu@ssc.in' },
  { id: 11, name: 'Royal Cricket Academy', city: 'Pune', students: 110, plan: 'Elite', status: 'Active', revenue: 33000, joined: '2025-09-10', contact: 'Sachin W', email: 'sachin@royalcricket.in' },
  { id: 12, name: 'Sunrise Cricket Club', city: 'Bangalore', students: 35, plan: 'Free', status: 'Trial', revenue: 0, joined: '2026-02-15', contact: 'Deepak H', email: 'deepak@sunrise.in' }
];

// ---- Mock Data: Content Library ----
const contentLibrary = [
  { id: 1, title: 'Front Foot Drive — Basics', skill: 'Front Foot Drive', category: 'Batting', stage: 1, status: 'draft', videoUrl: '', duration: '8:30' },
  { id: 2, title: 'Front Foot Drive — Footwork', skill: 'Front Foot Drive', category: 'Batting', stage: 1, status: 'draft', videoUrl: '', duration: '6:45' },
  { id: 3, title: 'Back Foot Punch — Setup', skill: 'Back Foot Punch', category: 'Batting', stage: 1, status: 'review', videoUrl: '', duration: '7:20' },
  { id: 4, title: 'Pull Shot — Weight Transfer', skill: 'Pull Shot', category: 'Batting', stage: 2, status: 'draft', videoUrl: '', duration: '9:15' },
  { id: 5, title: 'Cover Drive — Head Position', skill: 'Cover Drive', category: 'Batting', stage: 2, status: 'draft', videoUrl: '', duration: '5:50' },
  { id: 6, title: 'Straight Drive — Follow Through', skill: 'Straight Drive', category: 'Batting', stage: 1, status: 'review', videoUrl: '', duration: '7:00' },
  { id: 7, title: 'Sweep Shot — Reading Length', skill: 'Sweep Shot', category: 'Batting', stage: 3, status: 'draft', videoUrl: '', duration: '8:10' },
  { id: 8, title: 'Cut Shot — Timing Drill', skill: 'Cut Shot', category: 'Batting', stage: 2, status: 'review', videoUrl: '', duration: '6:30' },
  { id: 9, title: 'Hook Shot — Short Ball', skill: 'Hook Shot', category: 'Batting', stage: 3, status: 'draft', videoUrl: '', duration: '10:00' },
  { id: 10, title: 'Flick Shot — Wrist Work', skill: 'Flick Shot', category: 'Batting', stage: 2, status: 'draft', videoUrl: '', duration: '7:45' },
  { id: 11, title: 'Defensive Block — Grip', skill: 'Defensive Block', category: 'Batting', stage: 1, status: 'review', videoUrl: '', duration: '5:20' },
  { id: 12, title: 'Lofted Drive — Power', skill: 'Lofted Drive', category: 'Batting', stage: 4, status: 'draft', videoUrl: '', duration: '9:40' },
  { id: 13, title: 'Reverse Sweep — Advanced', skill: 'Reverse Sweep', category: 'Batting', stage: 4, status: 'draft', videoUrl: '', duration: '11:00' },
  { id: 14, title: 'Upper Cut — Placement', skill: 'Upper Cut', category: 'Batting', stage: 3, status: 'review', videoUrl: '', duration: '8:00' },
  { id: 15, title: 'Leave — Judgment Drill', skill: 'Leave', category: 'Batting', stage: 1, status: 'draft', videoUrl: '', duration: '4:50' }
];

// ---- Mock Data: Users ----
const users = [
  { name: 'Rajesh Kumar', role: 'Academy Owner', academy: 'SAM Cricket Academy', city: 'Coimbatore', joined: '2025-10-15', lastActive: '2026-03-15', status: 'Active' },
  { name: 'Vikram Singh', role: 'Academy Owner', academy: 'Star Cricket Academy', city: 'Chennai', joined: '2025-09-01', lastActive: '2026-03-16', status: 'Active' },
  { name: 'Suresh M', role: 'Academy Owner', academy: 'CBE Sports Academy', city: 'Coimbatore', joined: '2025-08-20', lastActive: '2026-03-16', status: 'Active' },
  { name: 'Anand Coach', role: 'Coach', academy: 'Star Cricket Academy', city: 'Chennai', joined: '2025-10-01', lastActive: '2026-03-14', status: 'Active' },
  { name: 'Priya Coach', role: 'Coach', academy: 'CBE Sports Academy', city: 'Coimbatore', joined: '2025-09-15', lastActive: '2026-03-15', status: 'Active' },
  { name: 'Ravi Student', role: 'Student', academy: 'SAM Cricket Academy', city: 'Coimbatore', joined: '2025-11-01', lastActive: '2026-03-13', status: 'Active' },
  { name: 'Meena Student', role: 'Student', academy: 'Star Cricket Academy', city: 'Chennai', joined: '2025-12-01', lastActive: '2026-03-16', status: 'Active' },
  { name: 'Kumar Parent', role: 'Parent', academy: 'SAM Cricket Academy', city: 'Coimbatore', joined: '2025-11-05', lastActive: '2026-03-10', status: 'Active' },
  { name: 'Lakshmi Parent', role: 'Parent', academy: 'CBE Sports Academy', city: 'Coimbatore', joined: '2025-10-20', lastActive: '2026-03-12', status: 'Active' },
  { name: 'Deepak Coach', role: 'Coach', academy: 'Cricket Champions', city: 'Mumbai', joined: '2025-10-10', lastActive: '2026-03-11', status: 'Active' }
];

// ---- Mock Data: Support Tickets ----
const tickets = [
  { id: 'TK-001', academy: 'SAM Cricket Academy', subject: 'Cannot upload student photos', priority: 'High', status: 'Open', created: '2026-03-14', assigned: 'Support Team', userType: 'Academy Owner', userName: 'Rajesh Kumar', category: 'Bug Report', description: 'When trying to upload student profile photos from the academy dashboard, the upload button does not respond after selecting a file. Tried on Chrome and Firefox. File sizes are under 2MB (JPEG format).', messages: [
    { from: 'Rajesh Kumar', role: 'Academy Owner', time: '2026-03-14 09:30', text: 'Hi, I am unable to upload student photos. The upload button becomes unresponsive after I select a file. This is happening for all students.' },
    { from: 'Support Agent', role: 'Support Team', time: '2026-03-14 10:15', text: 'Thank you for reporting this, Rajesh. Could you let us know the browser version and whether you see any error messages on screen?' },
    { from: 'Rajesh Kumar', role: 'Academy Owner', time: '2026-03-14 11:00', text: 'I am using Chrome 120. No error message appears, the button just stops working. Same issue on Firefox 121.' }
  ]},
  { id: 'TK-002', academy: 'Star Cricket Academy', subject: 'Billing discrepancy in March invoice', priority: 'Medium', status: 'In Progress', assigned: 'Billing Team', created: '2026-03-12', userType: 'Academy Owner', userName: 'Vikram Singh', category: 'Billing', description: 'The March invoice shows charges for 130 students but we only have 120 active students. Need the invoice to be corrected and re-issued.', messages: [
    { from: 'Vikram Singh', role: 'Academy Owner', time: '2026-03-12 14:00', text: 'Our March invoice shows 130 students but we only have 120 active students. Please check and correct this.' },
    { from: 'Support Agent', role: 'Billing Team', time: '2026-03-12 15:30', text: 'Hi Vikram, we are looking into this. It could be due to 10 students who were briefly added and then removed during the billing cycle. We will verify and update you.' },
    { from: 'Vikram Singh', role: 'Academy Owner', time: '2026-03-12 16:00', text: 'Those students were added by mistake and removed within an hour. Please adjust the invoice accordingly.' }
  ]},
  { id: 'TK-003', academy: 'CBE Sports Academy', subject: 'Request for custom reporting', priority: 'Low', status: 'In Progress', assigned: 'Product Team', created: '2026-03-10', userType: 'Coach', userName: 'Priya Coach', category: 'Feature Request', description: 'We need the ability to generate custom reports that show student progress across multiple skills over a time period, with export to PDF.', messages: [
    { from: 'Priya Coach', role: 'Coach', time: '2026-03-10 10:00', text: 'We need custom reporting capability. Currently the reports are too basic for our coaching staff to track multi-skill progress.' },
    { from: 'Support Agent', role: 'Product Team', time: '2026-03-10 14:00', text: 'Thank you for the suggestion, Priya. We have added this to our feature backlog. Could you share a sample of the kind of report format you are looking for?' }
  ]},
  { id: 'TK-004', academy: 'Young Stars Cricket', subject: 'App crashing on attendance page', priority: 'High', status: 'Open', assigned: 'Dev Team', created: '2026-03-15', userType: 'Coach', userName: 'Arun P', category: 'Bug Report', description: 'The coach mobile app crashes every time I try to open the attendance page for the U-14 batch. Started happening after the last update.', messages: [
    { from: 'Arun P', role: 'Coach', time: '2026-03-15 08:00', text: 'The app keeps crashing when I open the attendance page for U-14 batch. It was working fine before the update yesterday.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-03-15 09:30', text: 'We apologize for the inconvenience, Arun. Can you share your phone model and app version? We are investigating this urgently.' },
    { from: 'Arun P', role: 'Coach', time: '2026-03-15 09:45', text: 'Samsung Galaxy A54, app version 2.3.1. It crashes immediately, no error shown.' }
  ]},
  { id: 'TK-005', academy: 'Cricket Champions', subject: 'Need help setting up tournament', priority: 'Medium', status: 'In Progress', assigned: 'Support Team', created: '2026-03-08', userType: 'Academy Owner', userName: 'Rohit D', category: 'How-to', description: 'We want to set up an inter-academy tournament using the platform but cannot figure out the tournament module workflow.', messages: [
    { from: 'Rohit D', role: 'Academy Owner', time: '2026-03-08 11:00', text: 'We are planning an inter-academy tournament next month. How do we set this up on the platform? The tournament section is confusing.' },
    { from: 'Support Agent', role: 'Support Team', time: '2026-03-08 13:00', text: 'Hi Rohit, I will walk you through the steps. First, go to Tournaments > Create New. You will need to set the format (league/knockout), add participating teams, and define the schedule.' },
    { from: 'Rohit D', role: 'Academy Owner', time: '2026-03-08 14:30', text: 'Thanks! I found the Create New option. But how do I invite other academies to participate?' }
  ]},
  { id: 'TK-006', academy: 'Dhoni Cricket School', subject: 'Content not loading properly', priority: 'Medium', status: 'In Progress', assigned: 'Dev Team', created: '2026-03-06', userType: 'Student', userName: 'Karthik S', category: 'Technical Issue', description: 'Training videos in the student app are not loading. Shows a spinning icon indefinitely. Tried on Wi-Fi and mobile data.', messages: [
    { from: 'Karthik S', role: 'Student', time: '2026-03-06 16:00', text: 'The training videos are not loading at all. I just see a spinner that never stops. Tried both Wi-Fi and mobile data.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-03-06 17:00', text: 'Hi Karthik, we are aware of the issue. Our CDN provider had some downtime. Could you try clearing the app cache and restarting?' }
  ]},
  { id: 'TK-007', academy: 'KPL Cricket Academy', subject: 'How to upgrade from Free to Pro?', priority: 'Low', status: 'Resolved', assigned: 'Support Team', created: '2026-03-01', userType: 'Academy Owner', userName: 'Karthik L', category: 'How-to', description: 'We want to upgrade our academy plan from Free to Pro but cannot find the upgrade option in settings.', messages: [
    { from: 'Karthik L', role: 'Academy Owner', time: '2026-03-01 10:00', text: 'Where is the option to upgrade from Free to Pro plan? I cannot find it anywhere in the settings.' },
    { from: 'Support Agent', role: 'Support Team', time: '2026-03-01 11:00', text: 'Hi Karthik, go to Settings > Subscription > Upgrade Plan. You will see the Pro and Elite options there. Let me know if you need help with the payment process.' },
    { from: 'Karthik L', role: 'Academy Owner', time: '2026-03-01 11:30', text: 'Found it! Thank you for the help. Upgrading now.' }
  ]},
  { id: 'TK-008', academy: 'Metro Cricket Hub', subject: 'Parent app login issues', priority: 'High', status: 'Open', assigned: 'Dev Team', created: '2026-03-16', userType: 'Parent', userName: 'Sanjay M', category: 'Technical Issue', description: 'Multiple parents are reporting they cannot log into the parent app. Getting "Invalid credentials" even with correct password. Started today morning.', messages: [
    { from: 'Sanjay M', role: 'Parent', time: '2026-03-16 07:30', text: 'I cannot login to the parent app since this morning. It says invalid credentials but my password is correct. Other parents in our academy are also facing this.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-03-16 08:00', text: 'Thank you for reporting this, Sanjay. We are investigating this as a priority. It appears to be affecting the authentication service. We will update you shortly.' }
  ]},
  { id: 'TK-009', academy: 'Future Stars Academy', subject: 'Feature request: batch import students', priority: 'Low', status: 'Resolved', assigned: 'Product Team', created: '2026-02-28', userType: 'Academy Owner', userName: 'Prasad V', category: 'Feature Request', description: 'We have 50+ new students joining and adding them one by one is tedious. Need a CSV/Excel import feature for bulk student registration.', messages: [
    { from: 'Prasad V', role: 'Academy Owner', time: '2026-02-28 09:00', text: 'We have a new batch of 50 students joining. Adding them one by one is very tedious. Can we get a bulk import feature?' },
    { from: 'Support Agent', role: 'Product Team', time: '2026-02-28 12:00', text: 'Great suggestion, Prasad! We actually have a CSV import feature in development. It should be available in the next release (v2.4). For now, I can help you with a workaround using our API.' },
    { from: 'Prasad V', role: 'Academy Owner', time: '2026-02-28 13:00', text: 'That is good to hear! Looking forward to the release. The API workaround would also help for now.' }
  ]},
  { id: 'TK-010', academy: 'Royal Cricket Academy', subject: 'Payment gateway timeout', priority: 'Medium', status: 'In Progress', assigned: 'Dev Team', created: '2026-03-05', userType: 'Academy Owner', userName: 'Sachin W', category: 'Technical Issue', description: 'Payment gateway times out when parents try to pay fees online. Multiple parents have complained about failed transactions.', messages: [
    { from: 'Sachin W', role: 'Academy Owner', time: '2026-03-05 15:00', text: 'Parents are unable to pay fees online. The payment page times out after 30 seconds. This has been happening for the last 2 days.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-03-05 16:00', text: 'Hi Sachin, we are checking with our payment gateway provider. Meanwhile, could you check if this happens with all payment methods or just specific ones?' },
    { from: 'Sachin W', role: 'Academy Owner', time: '2026-03-05 16:30', text: 'It happens with both UPI and card payments. Net banking seems to work sometimes.' }
  ]},
  { id: 'TK-011', academy: 'CBE Sports Academy', subject: 'Dashboard performance slow', priority: 'Low', status: 'Resolved', assigned: 'Dev Team', created: '2026-02-25', userType: 'Academy Owner', userName: 'Suresh M', category: 'Technical Issue', description: 'The academy dashboard takes over 10 seconds to load. Charts and student list are very slow to render.', messages: [
    { from: 'Suresh M', role: 'Academy Owner', time: '2026-02-25 11:00', text: 'Our dashboard is extremely slow. It takes more than 10 seconds to load. With 200 students, the charts take forever to render.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-02-25 14:00', text: 'Thank you for the report, Suresh. We have identified a performance issue with large student datasets. A fix has been deployed — please try again and let us know.' },
    { from: 'Suresh M', role: 'Academy Owner', time: '2026-02-25 15:00', text: 'Much better now! Dashboard loads in 2-3 seconds. Thank you for the quick fix.' }
  ]},
  { id: 'TK-012', academy: 'Southern Sports Club', subject: 'Account suspension inquiry', priority: 'High', status: 'Resolved', assigned: 'Support Team', created: '2026-02-20', userType: 'Academy Owner', userName: 'Velu N', category: 'Billing', description: 'Our account has been suspended but we believe the payment was made on time. Need this resolved urgently as coaching sessions are affected.', messages: [
    { from: 'Velu N', role: 'Academy Owner', time: '2026-02-20 08:00', text: 'Our academy account has been suspended! We made the payment on Feb 15. Please check and restore access immediately.' },
    { from: 'Support Agent', role: 'Support Team', time: '2026-02-20 09:00', text: 'Hi Velu, I can see the payment was received but there was a processing delay. I have escalated this to the billing team and your account should be restored within the hour.' },
    { from: 'Velu N', role: 'Academy Owner', time: '2026-02-20 10:30', text: 'Account is restored now. Thank you for the quick resolution. Please ensure this does not happen again.' }
  ]},
  { id: 'TK-013', academy: 'Star Cricket Academy', subject: 'Unable to generate fee receipts', priority: 'Medium', status: 'Closed', assigned: 'Dev Team', created: '2026-02-10', userType: 'Academy Owner', userName: 'Vikram Singh', category: 'Bug Report', description: 'Fee receipt PDF generation was throwing errors. Issue was fixed in v2.2 patch.', messages: [
    { from: 'Vikram Singh', role: 'Academy Owner', time: '2026-02-10 10:00', text: 'Fee receipt download is not working. Getting a blank PDF every time I try to generate a receipt for any student.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-02-10 12:00', text: 'We found the issue — a PDF library update broke the receipt template. Fix has been deployed in patch v2.2.1.' },
    { from: 'Vikram Singh', role: 'Academy Owner', time: '2026-02-10 14:00', text: 'Receipts are generating correctly now. Thanks!' }
  ]},
  { id: 'TK-014', academy: 'Cricket Champions', subject: 'Coach app notification not working', priority: 'Low', status: 'Closed', assigned: 'Dev Team', created: '2026-02-05', userType: 'Coach', userName: 'Deepak Coach', category: 'Bug Report', description: 'Push notifications for session reminders were not being delivered to coaches. Fixed by updating FCM configuration.', messages: [
    { from: 'Deepak Coach', role: 'Coach', time: '2026-02-05 09:00', text: 'I am not receiving any push notifications for upcoming sessions. Other coaches in our academy also report the same issue.' },
    { from: 'Support Agent', role: 'Dev Team', time: '2026-02-05 11:00', text: 'We traced this to an expired FCM server key. It has been renewed and notifications should resume now.' },
    { from: 'Deepak Coach', role: 'Coach', time: '2026-02-06 08:00', text: 'Got the notification for today morning session. All working now.' }
  ]},
  { id: 'TK-015', academy: 'SAM Cricket Academy', subject: 'Need help with curriculum setup', priority: 'Low', status: 'Closed', assigned: 'Support Team', created: '2026-01-28', userType: 'Coach', userName: 'Venkat Coach', category: 'How-to', description: 'Coach needed guidance on setting up stage-wise curriculum for batting skills. Walkthrough was provided and completed.', messages: [
    { from: 'Venkat Coach', role: 'Coach', time: '2026-01-28 10:00', text: 'I need help setting up the stage-wise curriculum for our batting program. The documentation is not very clear on the skill mapping process.' },
    { from: 'Support Agent', role: 'Support Team', time: '2026-01-28 11:30', text: 'Hi Venkat, I will schedule a screen-sharing session to walk you through it. Basically you go to Curriculum > Create Stage, then add skills under each stage with progression criteria.' },
    { from: 'Venkat Coach', role: 'Coach', time: '2026-01-29 09:00', text: 'The walkthrough was very helpful. I have set up all 4 stages now. Thank you!' }
  ]}
];

// ---- Navigation ----
function navigateAdmin(page) {
  currentPage = page;

  // Update sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('open');
  }

  // Render page
  const content = document.getElementById('page-content');
  content.scrollTop = 0;

  // Destroy existing charts
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  switch (page) {
    case 'dashboard': content.innerHTML = renderDashboard(); setTimeout(initCharts, 50); break;
    case 'academies': content.innerHTML = renderAcademies(); break;
    case 'content-library': content.innerHTML = renderContentLibrary(); break;
    case 'users': content.innerHTML = renderUsers(); break;
    case 'billing': content.innerHTML = renderBilling(); setTimeout(initBillingCharts, 50); break;
    case 'tournaments': content.innerHTML = renderTournaments(); break;
    case 'reports': content.innerHTML = renderReports(); setTimeout(initReportCharts, 50); break;
    case 'support': content.innerHTML = renderSupport(); break;
    case 'config': content.innerHTML = renderConfig(); break;
    default: content.innerHTML = renderDashboard(); setTimeout(initCharts, 50);
  }
}

// ---- Theme Toggle ----
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('sports-admin-theme', next);

  const icon = document.getElementById('theme-icon');
  icon.className = next === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

  // Reinit charts if on chart pages
  if (currentPage === 'dashboard') { setTimeout(initCharts, 50); }
  if (currentPage === 'billing') { setTimeout(initBillingCharts, 50); }
  if (currentPage === 'reports') { setTimeout(initReportCharts, 50); }
}

function loadTheme() {
  const saved = localStorage.getItem('sports-admin-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = saved === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// ---- Sidebar Toggle (mobile) ----
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}

// ---- Helper: Plan Badge ----
function planBadge(plan) {
  const cls = plan.toLowerCase();
  return `<span class="badge-plan ${cls}">${plan}</span>`;
}

// ---- Helper: Status Badge ----
function statusBadge(status, customClass) {
  const cls = customClass || status.toLowerCase().replace(/\s+/g, '-');
  return `<span class="status-badge ${cls}">${status}</span>`;
}

// ============================================
// PAGE 1: Dashboard
// ============================================
function renderDashboard() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Dashboard</span></div>
    <h1 class="page-title">Platform Dashboard</h1>
    <p class="page-subtitle">Overview of Soruban Sports platform metrics</p>

    <div class="metric-row">
      <div class="stat-card accent-purple">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-building-columns"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> +5</span>
        </div>
        <div class="stat-card-value">47</div>
        <div class="stat-card-label">Total Academies</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-users"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> +12%</span>
        </div>
        <div class="stat-card-value">3,842</div>
        <div class="stat-card-label">Total Students</div>
      </div>
      <div class="stat-card accent-green">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-indian-rupee-sign"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> +18%</span>
        </div>
        <div class="stat-card-value">₹4.12L</div>
        <div class="stat-card-label">MRR (Monthly Recurring Revenue)</div>
      </div>
      <div class="stat-card accent-orange">
        <div class="stat-card-header">
          <div class="stat-card-icon orange"><i class="fa-solid fa-photo-film"></i></div>
          <span class="stat-card-trend up"><i class="fa-solid fa-arrow-up"></i> 14%</span>
        </div>
        <div class="stat-card-value">72 / 518</div>
        <div class="stat-card-label">Content Items Created</div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-container">
        <h3><i class="fa-solid fa-chart-line" style="color:var(--accent);margin-right:8px;"></i>Academy Growth (6 Months)</h3>
        <canvas id="chart-academy-growth" height="200"></canvas>
      </div>
      <div class="chart-container">
        <h3><i class="fa-solid fa-chart-bar" style="color:var(--accent);margin-right:8px;"></i>Revenue Growth (6 Months)</h3>
        <canvas id="chart-revenue-growth" height="200"></canvas>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-container">
        <h3><i class="fa-solid fa-chart-pie" style="color:var(--accent);margin-right:8px;"></i>Plan Distribution</h3>
        <canvas id="chart-plan-dist" height="200"></canvas>
      </div>
      <div class="chart-container">
        <h3><i class="fa-solid fa-location-dot" style="color:var(--accent);margin-right:8px;"></i>Geographic Distribution</h3>
        <canvas id="chart-city-dist" height="200"></canvas>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="table-header">
        <h3><i class="fa-solid fa-clock" style="color:var(--accent);margin-right:8px;"></i>Recent Academy Signups</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead><tr><th>Academy</th><th>City</th><th>Plan</th><th>Students</th><th>Joined</th><th>Status</th></tr></thead>
          <tbody>
            ${academies.slice().sort((a,b) => new Date(b.joined) - new Date(a.joined)).slice(0, 5).map(a => `
              <tr onclick="showAcademyDetail(${a.id})">
                <td><strong>${a.name}</strong></td>
                <td>${a.city}</td>
                <td>${planBadge(a.plan)}</td>
                <td>${a.students}</td>
                <td>${a.joined}</td>
                <td>${statusBadge(a.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-heartbeat" style="color:var(--accent);margin-right:8px;"></i>Platform Health</h3>
      </div>
      <div class="section-card-body padded">
        <div class="health-grid">
          <div class="health-item">
            <div class="health-dot green"></div>
            <div>
              <div class="health-label">API Uptime</div>
              <div class="health-value">99.97%</div>
            </div>
          </div>
          <div class="health-item">
            <div class="health-dot green"></div>
            <div>
              <div class="health-label">Storage Used</div>
              <div class="health-value">12.4 GB / 100 GB</div>
            </div>
          </div>
          <div class="health-item">
            <div class="health-dot green"></div>
            <div>
              <div class="health-label">Active Users Today</div>
              <div class="health-value">284</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---- Dashboard Charts ----
function initCharts() {
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#A0AEC0' : '#64748B';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const purple = '#7C3AED';
  const purpleLight = '#8B5CF6';
  const purpleBg = 'rgba(124, 58, 237, 0.15)';

  // Academy Growth
  const ctx1 = document.getElementById('chart-academy-growth');
  if (ctx1) {
    charts.academyGrowth = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Academies',
          data: [22, 28, 33, 38, 42, 47],
          borderColor: purple,
          backgroundColor: purpleBg,
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: purple
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }

  // Revenue Growth
  const ctx2 = document.getElementById('chart-revenue-growth');
  if (ctx2) {
    charts.revenueGrowth = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [180000, 220000, 280000, 320000, 370000, 412000],
          backgroundColor: [purpleBg, purpleBg, purpleBg, purpleBg, purpleBg, purple],
          borderColor: purple,
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor }, grid: { display: false } },
          y: { ticks: { color: textColor, callback: v => '₹' + (v/1000) + 'K' }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }

  // Plan Distribution
  const ctx3 = document.getElementById('chart-plan-dist');
  if (ctx3) {
    charts.planDist = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['Free', 'Pro', 'Elite'],
        datasets: [{
          data: [15, 22, 10],
          backgroundColor: ['#94A3B8', '#7C3AED', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, padding: 16, usePointStyle: true } }
        }
      }
    });
  }

  // City Distribution
  const ctx4 = document.getElementById('chart-city-dist');
  if (ctx4) {
    charts.cityDist = new Chart(ctx4, {
      type: 'bar',
      data: {
        labels: ['Coimbatore', 'Chennai', 'Bangalore', 'Mumbai', 'Hyderabad', 'Delhi', 'Pune', 'Madurai'],
        datasets: [{
          label: 'Academies',
          data: [12, 8, 6, 5, 4, 4, 3, 2],
          backgroundColor: purple,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true },
          y: { ticks: { color: textColor }, grid: { display: false } }
        }
      }
    });
  }
}

// ============================================
// PAGE 2: Academies
// ============================================
function renderAcademies() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Academies</span></div>
    <h1 class="page-title">Academy Management</h1>
    <p class="page-subtitle">Manage all registered academies on the platform</p>

    <div class="metric-row">
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-building-columns"></i></div>
        </div>
        <div class="stat-card-value">47</div>
        <div class="stat-card-label">Total Academies</div>
      </div>
      <div class="stat-card accent-green">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-check-circle"></i></div>
        </div>
        <div class="stat-card-value">32</div>
        <div class="stat-card-label">Active</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-hourglass-half"></i></div>
        </div>
        <div class="stat-card-value">10</div>
        <div class="stat-card-label">Trial</div>
      </div>
      <div class="stat-card accent-pink">
        <div class="stat-card-header">
          <div class="stat-card-icon pink"><i class="fa-solid fa-ban"></i></div>
        </div>
        <div class="stat-card-value">5</div>
        <div class="stat-card-label">Suspended</div>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="filter-bar">
        <div class="search-input" style="margin:0;">
          <i class="fa-solid fa-search"></i>
          <input type="text" placeholder="Search academies..." style="width:200px;padding:6px 12px 6px 32px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-size:12px;font-family:var(--font-body);outline:none;">
        </div>
        <select class="filter-select" onchange="showToast('Filter applied: ' + this.value)">
          <option>All Cities</option>
          <option>Coimbatore</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Mumbai</option>
          <option>Hyderabad</option>
          <option>Delhi</option>
          <option>Pune</option>
          <option>Madurai</option>
        </select>
        <select class="filter-select" onchange="showToast('Filter applied: ' + this.value)">
          <option>All Plans</option>
          <option>Free</option>
          <option>Pro</option>
          <option>Elite</option>
        </select>
        <select class="filter-select" onchange="showToast('Filter applied: ' + this.value)">
          <option>All Status</option>
          <option>Active</option>
          <option>Trial</option>
          <option>Suspended</option>
        </select>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Academy Name</th>
              <th>City</th>
              <th>Students</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Revenue/mo</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${academies.map(a => `
              <tr onclick="showAcademyDetail(${a.id})">
                <td><strong>${a.name}</strong></td>
                <td>${a.city}</td>
                <td>${a.students}</td>
                <td>${planBadge(a.plan)}</td>
                <td>${statusBadge(a.status)}</td>
                <td>${a.revenue > 0 ? '₹' + a.revenue.toLocaleString('en-IN') : '—'}</td>
                <td>${a.joined}</td>
                <td>
                  <button class="action-btn" onclick="event.stopPropagation(); showAcademyDetail(${a.id})"><i class="fa-solid fa-eye"></i> View</button>
                  <button class="action-btn danger" onclick="event.stopPropagation(); showToast('${a.status === 'Suspended' ? 'Academy reactivated' : 'Academy suspended'}', '${a.status === 'Suspended' ? 'success' : 'error'}')">${a.status === 'Suspended' ? 'Activate' : 'Suspend'}</button>
                  <button class="action-btn" onclick="event.stopPropagation(); showToast('Email sent to ${a.contact}', 'success')"><i class="fa-solid fa-envelope"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showAcademyDetail(id) {
  const a = academies.find(ac => ac.id === id);
  if (!a) return;
  showModal(a.name, `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">City</div>
        <div style="font-size:14px;font-weight:600;">${a.city}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Contact</div>
        <div style="font-size:14px;font-weight:600;">${a.contact}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Email</div>
        <div style="font-size:14px;font-weight:600;">${a.email}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Joined</div>
        <div style="font-size:14px;font-weight:600;">${a.joined}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Students</div>
        <div style="font-size:14px;font-weight:600;">${a.students}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Plan</div>
        <div style="margin-top:4px;">${planBadge(a.plan)}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Status</div>
        <div style="margin-top:4px;">${statusBadge(a.status)}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Monthly Revenue</div>
        <div style="font-size:14px;font-weight:600;color:var(--accent);">${a.revenue > 0 ? '₹' + a.revenue.toLocaleString('en-IN') : 'Free Tier'}</div>
      </div>
    </div>
    <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Revenue History (Last 6 Months)</h4>
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      ${['Oct','Nov','Dec','Jan','Feb','Mar'].map((m, i) => {
        const rev = a.revenue > 0 ? Math.round(a.revenue * (0.7 + i * 0.06)) : 0;
        return `<div style="flex:1;text-align:center;padding:8px;background:var(--bg-tertiary);border-radius:6px;">
          <div style="font-size:10px;color:var(--text-secondary);">${m}</div>
          <div style="font-size:12px;font-weight:600;">${rev > 0 ? '₹' + (rev/1000).toFixed(1) + 'K' : '—'}</div>
        </div>`;
      }).join('')}
    </div>
    <h4 style="font-size:14px;font-weight:600;margin-bottom:8px;">Support Tickets</h4>
    <div style="font-size:13px;color:var(--text-secondary);">
      ${tickets.filter(t => t.academy === a.name).length > 0
        ? tickets.filter(t => t.academy === a.name).map(t => `<div style="padding:8px;border-bottom:1px solid var(--border);"><strong>${t.id}</strong> — ${t.subject} ${statusBadge(t.status, t.status.toLowerCase().replace(/\s+/g, '-'))}</div>`).join('')
        : '<div style="padding:12px;text-align:center;opacity:0.7;">No support tickets</div>'}
    </div>
    <div style="margin-top:16px;display:flex;gap:8px;">
      <button class="action-btn primary" onclick="showToast('Email sent to ${a.contact}', 'success')"><i class="fa-solid fa-envelope"></i> Contact Academy</button>
      <button class="action-btn" onclick="showToast('Academy report generated', 'success')"><i class="fa-solid fa-download"></i> Export Report</button>
    </div>
  `);
}

// ============================================
// PAGE 3: Content Library
// ============================================
function renderContentLibrary() {
  const draftCount = contentLibrary.filter(c => c.status === 'draft').length;
  const reviewCount = contentLibrary.filter(c => c.status === 'review').length;
  const publishedCount = contentLibrary.filter(c => c.status === 'published').length;

  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Content Library</span></div>
    <h1 class="page-title">Content Library</h1>
    <p class="page-subtitle">Manage cricket coaching content for the platform</p>

    <div class="metric-row">
      <div class="stat-card accent-purple">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-video"></i></div>
        </div>
        <div class="stat-card-value">72</div>
        <div class="stat-card-label">Created</div>
      </div>
      <div class="stat-card accent-orange">
        <div class="stat-card-header">
          <div class="stat-card-icon orange"><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
        <div class="stat-card-value">12</div>
        <div class="stat-card-label">In Review</div>
      </div>
      <div class="stat-card accent-green">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-circle-check"></i></div>
        </div>
        <div class="stat-card-value">0</div>
        <div class="stat-card-label">Published</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-list-check"></i></div>
        </div>
        <div class="stat-card-value">446</div>
        <div class="stat-card-label">Remaining to Create</div>
      </div>
    </div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
      <div class="tabs" style="margin-bottom:0;">
        <button class="tab-btn active" onclick="filterContent('all', this)">All <span class="tab-count">${contentLibrary.length}</span></button>
        <button class="tab-btn" onclick="filterContent('Batting', this)">Batting <span class="tab-count">${contentLibrary.filter(c=>c.category==='Batting').length}</span></button>
        <button class="tab-btn" onclick="filterContent('Bowling', this)">Bowling <span class="tab-count">0</span></button>
        <button class="tab-btn" onclick="filterContent('Fielding', this)">Fielding <span class="tab-count">0</span></button>
        <button class="tab-btn" onclick="filterContent('Fitness', this)">Fitness <span class="tab-count">0</span></button>
      </div>
      <button class="action-btn primary" onclick="showUploadModal()"><i class="fa-solid fa-plus"></i> Upload New Content</button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      <select class="filter-select" onchange="showToast('Stage filter: ' + this.value)">
        <option>All Stages</option>
        <option>Stage 1</option>
        <option>Stage 2</option>
        <option>Stage 3</option>
        <option>Stage 4</option>
      </select>
      <select class="filter-select" onchange="showToast('Status filter: ' + this.value)">
        <option>All Status</option>
        <option>Draft</option>
        <option>Review</option>
        <option>Published</option>
      </select>
    </div>

    <div class="content-grid" id="content-grid">
      ${contentLibrary.map(c => contentCard(c)).join('')}
    </div>
  `;
}

function contentCard(c) {
  const statusCls = c.status;
  const statusLabel = c.status.charAt(0).toUpperCase() + c.status.slice(1);
  const icons = { 'Batting': 'fa-baseball-bat-ball', 'Bowling': 'fa-circle', 'Fielding': 'fa-running', 'Fitness': 'fa-dumbbell' };
  const icon = icons[c.category] || 'fa-video';

  return `
    <div class="content-card" onclick="showToast('Opening content: ${c.title}')">
      <div class="thumbnail">
        <i class="fa-solid ${icon}"></i>
        <span class="duration-badge">${c.duration}</span>
      </div>
      <div class="content-info">
        <div class="content-title">${c.title}</div>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;">${c.skill}</div>
        <div class="content-meta">
          <span class="stage-badge">Stage ${c.stage}</span>
          ${statusBadge(statusLabel, statusCls)}
        </div>
      </div>
    </div>
  `;
}

function filterContent(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const grid = document.getElementById('content-grid');
  if (!grid) return;
  const filtered = category === 'all' ? contentLibrary : contentLibrary.filter(c => c.category === category);
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><i class="fa-solid fa-photo-film"></i><h3>No Content Yet</h3><p>No ${category} content has been created yet. Start by uploading new content.</p></div>`;
  } else {
    grid.innerHTML = filtered.map(c => contentCard(c)).join('');
  }
}

function showUploadModal() {
  showModal('Upload New Content', `
    <div class="form-group">
      <label>Title</label>
      <input type="text" placeholder="e.g. Front Foot Drive — Basics">
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="form-group">
        <label>Skill</label>
        <input type="text" placeholder="e.g. Front Foot Drive">
      </div>
      <div class="form-group">
        <label>Category</label>
        <select>
          <option>Batting</option>
          <option>Bowling</option>
          <option>Fielding</option>
          <option>Fitness</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Stage</label>
      <select>
        <option>Stage 1 — Foundation</option>
        <option>Stage 2 — Development</option>
        <option>Stage 3 — Advanced</option>
        <option>Stage 4 — Elite</option>
      </select>
    </div>
    <div class="form-group">
      <label>Video File</label>
      <div class="upload-zone" onclick="showToast('File picker would open here')">
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & drop video file or click to browse</p>
        <div class="upload-hint">MP4, MOV up to 500MB</div>
      </div>
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea placeholder="Brief description of the content..."></textarea>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button class="action-btn" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Content uploaded successfully!', 'success'); this.closest('.modal-overlay').remove();">
        <i class="fa-solid fa-upload"></i> Upload
      </button>
    </div>
  `);
}

// ============================================
// PAGE 4: Users
// ============================================
function renderUsers() {
  const owners = users.filter(u => u.role === 'Academy Owner');
  const coaches = users.filter(u => u.role === 'Coach');
  const students = users.filter(u => u.role === 'Student');
  const parents = users.filter(u => u.role === 'Parent');

  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Users</span></div>
    <h1 class="page-title">User Management</h1>
    <p class="page-subtitle">All platform users across academies</p>

    <div class="metric-row">
      <div class="stat-card">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-users"></i></div>
        </div>
        <div class="stat-card-value">4,085</div>
        <div class="stat-card-label">Total Users</div>
      </div>
      <div class="stat-card accent-blue">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-user-tie"></i></div>
        </div>
        <div class="stat-card-value">47</div>
        <div class="stat-card-label">Academy Owners</div>
      </div>
      <div class="stat-card accent-green">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-chalkboard-user"></i></div>
        </div>
        <div class="stat-card-value">40</div>
        <div class="stat-card-label">Coaches</div>
      </div>
      <div class="stat-card accent-orange">
        <div class="stat-card-header">
          <div class="stat-card-icon orange"><i class="fa-solid fa-user-group"></i></div>
        </div>
        <div class="stat-card-value">156</div>
        <div class="stat-card-label">Parents</div>
      </div>
    </div>

    <div class="tabs" id="user-tabs">
      <button class="tab-btn active" onclick="filterUsers('all', this)">All <span class="tab-count">${users.length}</span></button>
      <button class="tab-btn" onclick="filterUsers('Academy Owner', this)">Academy Owners <span class="tab-count">${owners.length}</span></button>
      <button class="tab-btn" onclick="filterUsers('Coach', this)">Coaches <span class="tab-count">${coaches.length}</span></button>
      <button class="tab-btn" onclick="filterUsers('Student', this)">Students <span class="tab-count">${students.length}</span></button>
      <button class="tab-btn" onclick="filterUsers('Parent', this)">Parents <span class="tab-count">${parents.length}</span></button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
      <div class="search-input" style="margin:0;">
        <i class="fa-solid fa-search"></i>
        <input type="text" placeholder="Search users..." style="width:200px;padding:6px 12px 6px 32px;border:1px solid var(--border-strong);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-size:12px;font-family:var(--font-body);outline:none;">
      </div>
      <select class="filter-select" onchange="showToast('Role filter: ' + this.value)">
        <option>All Roles</option>
        <option>Academy Owner</option>
        <option>Coach</option>
        <option>Student</option>
        <option>Parent</option>
      </select>
    </div>

    <div class="table-wrapper">
      <div class="table-responsive">
        <table class="data-table" id="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Academy</th>
              <th>City</th>
              <th>Joined</th>
              <th>Last Active</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-tbody">
            ${users.map(u => userRow(u)).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function userRow(u) {
  const initials = u.name.split(' ').map(n => n[0]).join('').substring(0, 2);
  const roleBadgeColor = {
    'Academy Owner': 'purple',
    'Coach': 'blue',
    'Student': 'green',
    'Parent': 'orange'
  };
  const color = roleBadgeColor[u.role] || 'purple';
  return `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="user-avatar">${initials}</div>
          <strong>${u.name}</strong>
        </div>
      </td>
      <td><span class="status-badge ${u.role === 'Academy Owner' ? 'review' : u.role === 'Coach' ? 'trial' : u.role === 'Student' ? 'active' : 'in-progress'}">${u.role}</span></td>
      <td>${u.academy}</td>
      <td>${u.city}</td>
      <td>${u.joined}</td>
      <td>${u.lastActive}</td>
      <td>${statusBadge(u.status)}</td>
      <td>
        <button class="action-btn" onclick="showToast('Viewing ${u.name} profile')"><i class="fa-solid fa-eye"></i></button>
        <button class="action-btn" onclick="showToast('Email sent to ${u.name}', 'success')"><i class="fa-solid fa-envelope"></i></button>
      </td>
    </tr>
  `;
}

function filterUsers(role, btn) {
  document.querySelectorAll('#user-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const tbody = document.getElementById('users-tbody');
  if (!tbody) return;
  const filtered = role === 'all' ? users : users.filter(u => u.role === role);
  tbody.innerHTML = filtered.map(u => userRow(u)).join('');
}

// ============================================
// PAGE 5: Subscriptions & Billing
// ============================================
function renderBilling() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Subscriptions & Billing</span></div>
    <h1 class="page-title">Subscriptions & Billing</h1>
    <p class="page-subtitle">Revenue overview and subscription management</p>

    <div class="metric-row" style="grid-template-columns:repeat(3,1fr);">
      <div class="billing-card">
        <h4><i class="fa-solid fa-indian-rupee-sign" style="color:var(--accent);margin-right:6px;"></i>Monthly Recurring Revenue</h4>
        <div class="billing-value">₹4,12,000</div>
        <div class="billing-label">+18% from last month</div>
      </div>
      <div class="billing-card" style="border-left-color:var(--success);">
        <h4><i class="fa-solid fa-chart-line" style="color:var(--success);margin-right:6px;"></i>ARR Projection</h4>
        <div class="billing-value" style="color:var(--success);">₹49.4L</div>
        <div class="billing-label">Based on current MRR</div>
      </div>
      <div class="billing-card" style="border-left-color:var(--info);">
        <h4><i class="fa-solid fa-arrow-trend-up" style="color:var(--info);margin-right:6px;"></i>Growth Rate</h4>
        <div class="billing-value" style="color:var(--info);">18%</div>
        <div class="billing-label">Month-over-month</div>
      </div>
    </div>

    <div class="charts-row" style="margin-bottom:24px;">
      <div class="chart-container" style="grid-column:1/-1;">
        <h3><i class="fa-solid fa-chart-line" style="color:var(--accent);margin-right:8px;"></i>Revenue Trend (12 Months)</h3>
        <canvas id="chart-billing-revenue" height="120"></canvas>
      </div>
    </div>

    <div class="section-card" style="margin-bottom:24px;">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-chart-pie" style="color:var(--accent);margin-right:8px;"></i>Plan Distribution</h3>
      </div>
      <div class="section-card-body padded">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
          <div style="text-align:center;padding:20px;background:var(--bg-tertiary);border-radius:var(--radius-sm);">
            <div style="font-size:28px;font-weight:700;color:var(--text-secondary);">15</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">Free Tier</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">₹0/student/mo</div>
          </div>
          <div style="text-align:center;padding:20px;background:rgba(124,58,237,0.08);border-radius:var(--radius-sm);border:1px solid rgba(124,58,237,0.2);">
            <div style="font-size:28px;font-weight:700;color:#7C3AED;">22</div>
            <div style="font-size:13px;color:var(--accent);margin-top:4px;">Pro Plan</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">₹150/student/mo</div>
          </div>
          <div style="text-align:center;padding:20px;background:var(--warning-bg);border-radius:var(--radius-sm);border:1px solid rgba(245,158,11,0.2);">
            <div style="font-size:28px;font-weight:700;color:var(--warning);">10</div>
            <div style="font-size:13px;color:var(--warning);margin-top:4px;">Elite Plan</div>
            <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px;">₹300/student/mo</div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="table-header">
        <h3><i class="fa-solid fa-receipt" style="color:var(--accent);margin-right:8px;"></i>Subscription Details</h3>
        <button class="action-btn primary" onclick="showToast('Billing report exported', 'success')"><i class="fa-solid fa-download"></i> Export</button>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Academy</th>
              <th>Plan</th>
              <th>Students</th>
              <th>Monthly Revenue</th>
              <th>Next Billing</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${academies.filter(a => a.plan !== 'Free').map(a => `
              <tr>
                <td><strong>${a.name}</strong></td>
                <td>${planBadge(a.plan)}</td>
                <td>${a.students}</td>
                <td style="font-weight:600;color:var(--accent);">₹${a.revenue.toLocaleString('en-IN')}</td>
                <td>${a.status === 'Suspended' ? '—' : '2026-04-01'}</td>
                <td>${statusBadge(a.status)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function initBillingCharts() {
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#A0AEC0' : '#64748B';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  const ctx = document.getElementById('chart-billing-revenue');
  if (ctx) {
    charts.billingRevenue = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Revenue',
          data: [50000, 75000, 95000, 120000, 150000, 180000, 210000, 260000, 310000, 350000, 380000, 412000],
          borderColor: '#7C3AED',
          backgroundColor: 'rgba(124, 58, 237, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#7C3AED'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor, callback: v => '₹' + (v/1000) + 'K' }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }
}

// ============================================
// PAGE 6: Tournaments
// ============================================
function renderTournaments() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Tournaments</span></div>
    <h1 class="page-title">Tournaments</h1>
    <p class="page-subtitle">Parent Premier League and academy tournaments</p>

    <div class="tournament-card">
      <div class="tournament-banner">
        <h3><i class="fa-solid fa-trophy" style="margin-right:8px;"></i>Parent Premier League</h3>
        <p>The flagship parent-focused cricket tournament across academies</p>
      </div>
      <div class="tournament-body">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:20px;">
          <div>
            <div style="font-size:12px;color:var(--text-secondary);">Season</div>
            <div style="font-size:18px;font-weight:700;color:var(--text-primary);">Season 1</div>
          </div>
          <div>
            <div style="font-size:12px;color:var(--text-secondary);">Status</div>
            <div style="margin-top:4px;">${statusBadge('Planning', 'review')}</div>
          </div>
          <div>
            <div style="font-size:12px;color:var(--text-secondary);">Interested Academies</div>
            <div style="font-size:18px;font-weight:700;color:var(--accent);">12</div>
          </div>
        </div>

        <div class="alert-box info">
          <i class="fa-solid fa-info-circle"></i>
          Season 1 is in early planning phase. Academy registrations are being collected.
        </div>

        <h4 style="font-size:14px;font-weight:600;margin:16px 0 12px;">Academy Interest List</h4>
        <div class="table-responsive">
          <table class="data-table">
            <thead><tr><th>Academy</th><th>City</th><th>Students</th><th>Interest Date</th><th>Status</th></tr></thead>
            <tbody>
              ${academies.filter(a => a.status === 'Active').slice(0, 6).map(a => `
                <tr>
                  <td><strong>${a.name}</strong></td>
                  <td>${a.city}</td>
                  <td>${a.students}</td>
                  <td>2026-03-01</td>
                  <td>${statusBadge('Interested', 'trial')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="margin-top:16px;display:flex;gap:8px;">
          <button class="action-btn primary" onclick="showToast('Tournament creation wizard would open here')"><i class="fa-solid fa-plus"></i> Create Tournament</button>
          <button class="action-btn" onclick="showToast('Invitations sent to 12 academies', 'success')"><i class="fa-solid fa-paper-plane"></i> Send Invitations</button>
        </div>
      </div>
    </div>

    <div class="section-card">
      <div class="section-card-header">
        <h3><i class="fa-solid fa-history" style="color:var(--accent);margin-right:8px;"></i>Past Tournaments</h3>
      </div>
      <div class="section-card-body">
        <div class="empty-state">
          <i class="fa-solid fa-trophy"></i>
          <h3>No Past Tournaments</h3>
          <p>No tournaments have been completed yet. Season 1 of the Parent Premier League is currently in the planning phase.</p>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// PAGE 7: Reports & Analytics
// ============================================
function renderReports() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Reports & Analytics</span></div>
    <h1 class="page-title">Reports & Analytics</h1>
    <p class="page-subtitle">Platform-wide analytics and performance insights</p>

    <div class="metric-row">
      <div class="analytics-card">
        <h4>Daily Active Users</h4>
        <div class="analytics-value">284</div>
        <div class="analytics-change up"><i class="fa-solid fa-arrow-up"></i> +8% from yesterday</div>
      </div>
      <div class="analytics-card">
        <h4>Weekly Active Users</h4>
        <div class="analytics-value">1,245</div>
        <div class="analytics-change up"><i class="fa-solid fa-arrow-up"></i> +12% from last week</div>
      </div>
      <div class="analytics-card">
        <h4>Monthly Active Users</h4>
        <div class="analytics-value">2,890</div>
        <div class="analytics-change up"><i class="fa-solid fa-arrow-up"></i> +15% from last month</div>
      </div>
      <div class="analytics-card">
        <h4>Retention Rate</h4>
        <div class="analytics-value">78%</div>
        <div class="analytics-change up"><i class="fa-solid fa-arrow-up"></i> +3% improvement</div>
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-container">
        <h3><i class="fa-solid fa-users" style="color:var(--accent);margin-right:8px;"></i>User Growth (6 Months)</h3>
        <canvas id="chart-user-growth" height="200"></canvas>
      </div>
      <div class="chart-container">
        <h3><i class="fa-solid fa-mobile-screen" style="color:var(--accent);margin-right:8px;"></i>Feature Usage</h3>
        <canvas id="chart-feature-usage" height="200"></canvas>
      </div>
    </div>

    <div class="charts-row" style="margin-top:0;">
      <div class="chart-container" style="grid-column:1/-1;">
        <h3><i class="fa-solid fa-chart-area" style="color:var(--accent);margin-right:8px;"></i>Academy Churn Rate</h3>
        <canvas id="chart-churn" height="100"></canvas>
      </div>
    </div>

    <div style="margin-bottom:24px;">
      <button class="action-btn primary" onclick="showToast('Platform report exported as PDF', 'success')"><i class="fa-solid fa-file-pdf"></i> Export Platform Report</button>
      <button class="action-btn" onclick="showToast('CSV data exported', 'success')"><i class="fa-solid fa-file-csv"></i> Export CSV</button>
    </div>

    <div class="table-wrapper">
      <div class="table-header">
        <h3><i class="fa-solid fa-ranking-star" style="color:var(--accent);margin-right:8px;"></i>Top Performing Academies</h3>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr><th>Rank</th><th>Academy</th><th>City</th><th>Students</th><th>Revenue</th><th>Engagement</th><th>Rating</th></tr>
          </thead>
          <tbody>
            ${academies.filter(a => a.status === 'Active' && a.revenue > 0)
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 5)
              .map((a, i) => `
                <tr>
                  <td><strong style="color:var(--accent);">#${i + 1}</strong></td>
                  <td><strong>${a.name}</strong></td>
                  <td>${a.city}</td>
                  <td>${a.students}</td>
                  <td style="font-weight:600;">₹${a.revenue.toLocaleString('en-IN')}</td>
                  <td>
                    <div style="display:flex;align-items:center;gap:8px;">
                      <div style="flex:1;height:6px;background:var(--bg-tertiary);border-radius:3px;overflow:hidden;">
                        <div style="width:${70 + Math.random() * 25}%;height:100%;background:var(--accent);border-radius:3px;"></div>
                      </div>
                      <span style="font-size:12px;font-weight:600;">${Math.round(70 + Math.random() * 25)}%</span>
                    </div>
                  </td>
                  <td><span style="color:var(--warning);"><i class="fa-solid fa-star"></i> ${(4 + Math.random() * 0.9).toFixed(1)}</span></td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function initReportCharts() {
  Object.values(charts).forEach(c => { if (c && c.destroy) c.destroy(); });
  charts = {};

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#A0AEC0' : '#64748B';
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  // User Growth
  const ctx1 = document.getElementById('chart-user-growth');
  if (ctx1) {
    charts.userGrowth = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Total Users',
            data: [1200, 1650, 2200, 2800, 3400, 4085],
            borderColor: '#7C3AED',
            backgroundColor: 'rgba(124, 58, 237, 0.1)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Active Users',
            data: [800, 1100, 1500, 1900, 2400, 2890],
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { labels: { color: textColor, usePointStyle: true } } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }

  // Feature Usage
  const ctx2 = document.getElementById('chart-feature-usage');
  if (ctx2) {
    charts.featureUsage = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Attendance', 'Content View', 'Assessments', 'Messaging', 'Reports', 'Billing'],
        datasets: [{
          label: 'Usage %',
          data: [92, 78, 65, 54, 45, 38],
          backgroundColor: ['#7C3AED', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE'],
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor }, max: 100 },
          y: { ticks: { color: textColor }, grid: { display: false } }
        }
      }
    });
  }

  // Churn Rate
  const ctx3 = document.getElementById('chart-churn');
  if (ctx3) {
    charts.churn = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Churn Rate %',
          data: [5.2, 4.8, 3.9, 3.5, 2.8, 2.1],
          borderColor: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#EF4444'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor, callback: v => v + '%' }, grid: { color: gridColor }, beginAtZero: true }
        }
      }
    });
  }
}

// ============================================
// PAGE 8: Support Tickets
// ============================================
function renderSupport() {
  const openCount = tickets.filter(t => t.status === 'Open').length;
  const progressCount = tickets.filter(t => t.status === 'In Progress').length;
  const resolvedCount = tickets.filter(t => t.status === 'Resolved').length;
  const closedCount = tickets.filter(t => t.status === 'Closed').length;

  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>Support Tickets</span></div>
    <h1 class="page-title">Support Tickets</h1>
    <p class="page-subtitle">Manage academy support requests</p>

    <div class="metric-row" style="grid-template-columns:repeat(4,1fr);">
      <div class="stat-card accent-blue" style="cursor:pointer;" onclick="filterTicketsByStatus('Open')">
        <div class="stat-card-header">
          <div class="stat-card-icon blue"><i class="fa-solid fa-envelope-open"></i></div>
        </div>
        <div class="stat-card-value">${openCount}</div>
        <div class="stat-card-label">Open</div>
      </div>
      <div class="stat-card accent-orange" style="cursor:pointer;" onclick="filterTicketsByStatus('In Progress')">
        <div class="stat-card-header">
          <div class="stat-card-icon orange"><i class="fa-solid fa-spinner"></i></div>
        </div>
        <div class="stat-card-value">${progressCount}</div>
        <div class="stat-card-label">In Progress</div>
      </div>
      <div class="stat-card accent-green" style="cursor:pointer;" onclick="filterTicketsByStatus('Resolved')">
        <div class="stat-card-header">
          <div class="stat-card-icon green"><i class="fa-solid fa-check-circle"></i></div>
        </div>
        <div class="stat-card-value">${resolvedCount}</div>
        <div class="stat-card-label">Resolved</div>
      </div>
      <div class="stat-card accent-purple" style="cursor:pointer;" onclick="filterTicketsByStatus('Closed')">
        <div class="stat-card-header">
          <div class="stat-card-icon purple"><i class="fa-solid fa-lock"></i></div>
        </div>
        <div class="stat-card-value">${closedCount}</div>
        <div class="stat-card-label">Closed</div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px;">
      <div class="tabs" style="margin-bottom:0;">
        <button class="tab-btn active" onclick="filterTickets('all', this)">All <span class="tab-count">${tickets.length}</span></button>
        <button class="tab-btn" onclick="filterTickets('Open', this)">Open <span class="tab-count">${openCount}</span></button>
        <button class="tab-btn" onclick="filterTickets('In Progress', this)">In Progress <span class="tab-count">${progressCount}</span></button>
        <button class="tab-btn" onclick="filterTickets('Resolved', this)">Resolved <span class="tab-count">${resolvedCount}</span></button>
        <button class="tab-btn" onclick="filterTickets('Closed', this)">Closed <span class="tab-count">${closedCount}</span></button>
      </div>
      <button class="action-btn primary" onclick="showCreateTicketModal()"><i class="fa-solid fa-plus"></i> Create Ticket</button>
    </div>

    <div class="table-wrapper">
      <div class="table-responsive">
        <table class="data-table" id="tickets-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Academy</th>
              <th>User</th>
              <th>Subject</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Created</th>
              <th>Assigned</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="tickets-tbody">
            ${tickets.map(t => ticketRow(t)).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function userTypeBadge(userType) {
  const iconMap = { 'Academy Owner': 'fa-building', 'Coach': 'fa-whistle', 'Student': 'fa-user-graduate', 'Parent': 'fa-user-shield' };
  const colorMap = { 'Academy Owner': 'var(--accent)', 'Coach': 'var(--info)', 'Student': 'var(--success)', 'Parent': 'var(--warning)' };
  const icon = iconMap[userType] || 'fa-user';
  const color = colorMap[userType] || 'var(--text-secondary)';
  return `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;padding:2px 8px;border-radius:20px;background:color-mix(in srgb, ${color} 12%, transparent);color:${color};font-weight:500;white-space:nowrap;"><i class="fa-solid ${icon}" style="font-size:9px;"></i>${userType}</span>`;
}

function ticketRow(t) {
  const closeBtn = t.status === 'Resolved' ? `<button class="action-btn" style="font-size:11px;padding:4px 8px;" onclick="event.stopPropagation(); closeTicketQuick('${t.id}')" title="Close Ticket"><i class="fa-solid fa-lock"></i></button>` : '';
  return `
    <tr onclick="showTicketDetail('${t.id}')" style="cursor:pointer;">
      <td><span style="font-weight:600;color:var(--accent);font-family:monospace;">${t.id}</span></td>
      <td>${t.academy}</td>
      <td>
        <div style="font-size:13px;font-weight:500;">${t.userName}</div>
        ${userTypeBadge(t.userType)}
      </td>
      <td><strong>${t.subject}</strong></td>
      <td>${statusBadge(t.priority, t.priority.toLowerCase())}</td>
      <td>${statusBadge(t.status, t.status.toLowerCase().replace(/\s+/g, '-'))}</td>
      <td>${t.created}</td>
      <td>${t.assigned}</td>
      <td>
        <button class="action-btn" onclick="event.stopPropagation(); showTicketDetail('${t.id}')"><i class="fa-solid fa-eye"></i></button>
        ${closeBtn}
      </td>
    </tr>
  `;
}

function filterTickets(status, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const tbody = document.getElementById('tickets-tbody');
  if (!tbody) return;
  const filtered = status === 'all' ? tickets : tickets.filter(t => t.status === status);
  tbody.innerHTML = filtered.map(t => ticketRow(t)).join('');
}

function filterTicketsByStatus(status) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(b => {
    b.classList.remove('active');
    if (b.textContent.trim().startsWith(status)) b.classList.add('active');
  });
  const tbody = document.getElementById('tickets-tbody');
  if (!tbody) return;
  const filtered = tickets.filter(t => t.status === status);
  tbody.innerHTML = filtered.map(t => ticketRow(t)).join('');
}

function closeTicketQuick(id) {
  const t = tickets.find(tk => tk.id === id);
  if (!t) return;
  t.status = 'Closed';
  showToast('Ticket ' + id + ' closed successfully', 'success');
  navigateAdmin('support');
}

function updateTicketStatus(id, newStatus) {
  const t = tickets.find(tk => tk.id === id);
  if (!t) return;
  t.status = newStatus;
  showToast('Ticket ' + id + ' marked as ' + newStatus, 'success');
  document.querySelector('.modal-overlay')?.remove();
  navigateAdmin('support');
}

function reassignTicket(id) {
  const t = tickets.find(tk => tk.id === id);
  if (!t) return;
  showModal('Reassign Ticket ' + id, `
    <div class="form-group">
      <label>Assign To</label>
      <select id="reassign-select">
        <option ${t.assigned === 'Support Team' ? 'selected' : ''}>Support Team</option>
        <option ${t.assigned === 'Dev Team' ? 'selected' : ''}>Dev Team</option>
        <option ${t.assigned === 'Billing Team' ? 'selected' : ''}>Billing Team</option>
        <option ${t.assigned === 'Product Team' ? 'selected' : ''}>Product Team</option>
      </select>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button class="action-btn" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
      <button class="action-btn primary" onclick="
        var sel = document.getElementById('reassign-select');
        var tk = tickets.find(function(x){return x.id==='${id}';});
        if(tk) tk.assigned = sel.value;
        showToast('Ticket ${id} reassigned to ' + sel.value, 'success');
        this.closest('.modal-overlay').remove();
        navigateAdmin('support');
      "><i class="fa-solid fa-user-plus"></i> Reassign</button>
    </div>
  `);
}

function showTicketDetail(id) {
  const t = tickets.find(tk => tk.id === id);
  if (!t) return;

  // Build conversation thread
  const messagesHTML = (t.messages || []).map(m => {
    const isSupport = m.role.includes('Team') || m.role === 'Support Agent';
    const align = isSupport ? 'flex-end' : 'flex-start';
    const bg = isSupport ? 'var(--accent)' : 'var(--bg-tertiary)';
    const textColor = isSupport ? '#fff' : 'var(--text-primary)';
    const labelColor = isSupport ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)';
    return `
      <div style="display:flex;justify-content:${align};margin-bottom:12px;">
        <div style="max-width:80%;background:${bg};color:${textColor};padding:10px 14px;border-radius:12px;font-size:13px;line-height:1.5;">
          <div style="font-size:11px;font-weight:600;margin-bottom:4px;color:${labelColor};">${m.from} <span style="font-weight:400;">&middot; ${m.role}</span> <span style="font-weight:400;margin-left:8px;">${m.time}</span></div>
          ${m.text}
        </div>
      </div>
    `;
  }).join('');

  // Build action buttons based on status
  let actionButtons = '';
  if (t.status === 'Open') {
    actionButtons += `<button class="action-btn" onclick="updateTicketStatus('${t.id}', 'In Progress')"><i class="fa-solid fa-spinner"></i> Mark In Progress</button>`;
    actionButtons += `<button class="action-btn" onclick="updateTicketStatus('${t.id}', 'Resolved')"><i class="fa-solid fa-check"></i> Mark Resolved</button>`;
  } else if (t.status === 'In Progress') {
    actionButtons += `<button class="action-btn" onclick="updateTicketStatus('${t.id}', 'Resolved')"><i class="fa-solid fa-check"></i> Mark Resolved</button>`;
  } else if (t.status === 'Resolved') {
    actionButtons += `<button class="action-btn primary" style="background:var(--text-secondary);" onclick="updateTicketStatus('${t.id}', 'Closed')"><i class="fa-solid fa-lock"></i> Close Ticket</button>`;
  } else if (t.status === 'Closed') {
    actionButtons += `<button class="action-btn" onclick="updateTicketStatus('${t.id}', 'Open')"><i class="fa-solid fa-lock-open"></i> Reopen</button>`;
  }
  actionButtons += `<button class="action-btn" onclick="this.closest('.modal-overlay').remove(); reassignTicket('${t.id}')"><i class="fa-solid fa-user-plus"></i> Reassign</button>`;

  showModal('Ticket ' + t.id, `
    <div style="margin-bottom:16px;">
      <h3 style="font-size:16px;font-weight:600;margin-bottom:8px;">${t.subject}</h3>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
        ${statusBadge(t.priority, t.priority.toLowerCase())}
        ${statusBadge(t.status, t.status.toLowerCase().replace(/\s+/g, '-'))}
        ${statusBadge(t.category, 'draft')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Raised By</div>
        <div style="font-size:14px;font-weight:600;">${t.userName}</div>
        <div style="margin-top:4px;">${userTypeBadge(t.userType)}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Academy</div>
        <div style="font-size:14px;font-weight:600;">${t.academy}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Assigned To</div>
        <div style="font-size:14px;font-weight:600;">${t.assigned}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--text-secondary);">Created</div>
        <div style="font-size:14px;font-weight:600;">${t.created}</div>
      </div>
    </div>
    <div style="padding:16px;background:var(--bg-tertiary);border-radius:var(--radius-sm);margin-bottom:16px;">
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;">Description</div>
      <div style="font-size:13px;color:var(--text-primary);">${t.description}</div>
    </div>

    <div style="margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;color:var(--text-primary);margin-bottom:12px;">Conversation Thread</div>
      <div style="max-height:300px;overflow-y:auto;padding:12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border:1px solid var(--border);">
        ${messagesHTML || '<div style="font-size:13px;color:var(--text-secondary);text-align:center;padding:20px;">No messages yet</div>'}
      </div>
    </div>

    <div style="margin-bottom:16px;">
      <textarea id="ticket-reply-input" placeholder="Type your reply..." style="width:100%;min-height:60px;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-secondary);color:var(--text-primary);font-size:13px;font-family:inherit;resize:vertical;box-sizing:border-box;"></textarea>
      <div style="display:flex;justify-content:flex-end;margin-top:8px;">
        <button class="action-btn primary" onclick="
          var input = document.getElementById('ticket-reply-input');
          var text = input ? input.value.trim() : '';
          if (!text) { showToast('Please enter a reply', 'error'); return; }
          var tk = tickets.find(function(x){return x.id==='${t.id}';});
          if (tk && tk.messages) { tk.messages.push({from:'Support Agent',role:tk.assigned,time:new Date().toISOString().slice(0,16).replace('T',' '),text:text}); }
          showToast('Reply sent successfully', 'success');
          this.closest('.modal-overlay').remove();
          showTicketDetail('${t.id}');
        "><i class="fa-solid fa-paper-plane"></i> Send Reply</button>
      </div>
    </div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;border-top:1px solid var(--border);padding-top:16px;">
      ${actionButtons}
    </div>
  `);
}

function showCreateTicketModal() {
  showModal('Create Support Ticket', `
    <div class="form-group">
      <label>Academy</label>
      <select>
        ${academies.map(a => `<option>${a.name}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Subject</label>
      <input type="text" placeholder="Brief description of the issue">
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div class="form-group">
        <label>Priority</label>
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div class="form-group">
        <label>Assign To</label>
        <select>
          <option>Support Team</option>
          <option>Dev Team</option>
          <option>Billing Team</option>
          <option>Product Team</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea placeholder="Detailed description of the issue..."></textarea>
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px;">
      <button class="action-btn" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
      <button class="action-btn primary" onclick="showToast('Ticket created successfully!', 'success'); this.closest('.modal-overlay').remove();">
        <i class="fa-solid fa-plus"></i> Create Ticket
      </button>
    </div>
  `);
}

// ============================================
// PAGE 9: System Config
// ============================================
function renderConfig() {
  return `
    <div class="breadcrumb"><a onclick="navigateAdmin('dashboard')">Home</a> <span>/</span> <span>System Config</span></div>
    <h1 class="page-title">System Configuration</h1>
    <p class="page-subtitle">Platform settings and configuration management</p>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-gear"></i> Platform Settings</h3>
        <button class="action-btn primary" onclick="showToast('Platform settings saved!', 'success')"><i class="fa-solid fa-save"></i> Save</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Application Name</label>
            <div class="config-desc">The name displayed across the platform</div>
          </div>
          <input type="text" class="config-input" value="Soruban Sports">
        </div>
        <div class="config-row">
          <div>
            <label>Platform Description</label>
            <div class="config-desc">Short description for the platform</div>
          </div>
          <input type="text" class="config-input" value="Cricket Academy Management Platform">
        </div>
        <div class="config-row">
          <div>
            <label>Support Email</label>
            <div class="config-desc">Primary support contact</div>
          </div>
          <input type="email" class="config-input" value="support@sorubansports.in">
        </div>
        <div class="config-row">
          <div>
            <label>Platform Logo URL</label>
            <div class="config-desc">URL to the platform logo image</div>
          </div>
          <input type="text" class="config-input" value="/assets/logo.png">
        </div>
      </div>
    </div>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-layer-group"></i> Default Stages Template</h3>
        <button class="action-btn primary" onclick="showToast('Stage template saved!', 'success')"><i class="fa-solid fa-save"></i> Save</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Stage 1 Name</label>
            <div class="config-desc">Foundation level</div>
          </div>
          <input type="text" class="config-input" value="Foundation">
        </div>
        <div class="config-row">
          <div>
            <label>Stage 2 Name</label>
            <div class="config-desc">Development level</div>
          </div>
          <input type="text" class="config-input" value="Development">
        </div>
        <div class="config-row">
          <div>
            <label>Stage 3 Name</label>
            <div class="config-desc">Advanced level</div>
          </div>
          <input type="text" class="config-input" value="Advanced">
        </div>
        <div class="config-row">
          <div>
            <label>Stage 4 Name</label>
            <div class="config-desc">Elite level</div>
          </div>
          <input type="text" class="config-input" value="Elite">
        </div>
      </div>
    </div>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-indian-rupee-sign"></i> Pricing Configuration</h3>
        <button class="action-btn primary" onclick="showToast('Pricing config saved!', 'success')"><i class="fa-solid fa-save"></i> Save</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Pro Plan Rate (per student/month)</label>
            <div class="config-desc">Monthly charge per student on Pro plan</div>
          </div>
          <input type="number" class="config-input" value="150">
        </div>
        <div class="config-row">
          <div>
            <label>Elite Plan Rate (per student/month)</label>
            <div class="config-desc">Monthly charge per student on Elite plan</div>
          </div>
          <input type="number" class="config-input" value="300">
        </div>
        <div class="config-row">
          <div>
            <label>Free Tier Student Limit</label>
            <div class="config-desc">Maximum students allowed on Free plan</div>
          </div>
          <input type="number" class="config-input" value="25">
        </div>
        <div class="config-row">
          <div>
            <label>Free Tier Coach Limit</label>
            <div class="config-desc">Maximum coaches allowed on Free plan</div>
          </div>
          <input type="number" class="config-input" value="2">
        </div>
      </div>
    </div>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-flag"></i> Feature Flags</h3>
        <button class="action-btn primary" onclick="showToast('Feature flags saved!', 'success')"><i class="fa-solid fa-save"></i> Save</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Content Library</label>
            <div class="config-desc">Enable content library for all academies</div>
          </div>
          <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="config-row">
          <div>
            <label>Parent App</label>
            <div class="config-desc">Enable parent-facing mobile app</div>
          </div>
          <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
        <div class="config-row">
          <div>
            <label>Tournaments Module</label>
            <div class="config-desc">Enable tournament features</div>
          </div>
          <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
        </div>
        <div class="config-row">
          <div>
            <label>Video Analysis (AI)</label>
            <div class="config-desc">Enable AI-powered video analysis (Beta)</div>
          </div>
          <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
        </div>
        <div class="config-row">
          <div>
            <label>Payment Gateway</label>
            <div class="config-desc">Enable online payment collection</div>
          </div>
          <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
      </div>
    </div>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-bell"></i> Notification Templates</h3>
        <button class="action-btn primary" onclick="showToast('Notification templates saved!', 'success')"><i class="fa-solid fa-save"></i> Save</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Welcome Email Subject</label>
            <div class="config-desc">Sent when a new academy signs up</div>
          </div>
          <input type="text" class="config-input" value="Welcome to Soruban Sports!">
        </div>
        <div class="config-row">
          <div>
            <label>Trial Expiry Reminder (Days Before)</label>
            <div class="config-desc">When to send trial expiry notification</div>
          </div>
          <input type="number" class="config-input" value="3">
        </div>
        <div class="config-row">
          <div>
            <label>Payment Reminder</label>
            <div class="config-desc">Enable automatic payment reminders</div>
          </div>
          <label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label>
        </div>
      </div>
    </div>

    <div class="config-section">
      <div class="config-section-header">
        <h3><i class="fa-solid fa-key"></i> API Keys</h3>
        <button class="action-btn primary" onclick="showToast('API keys regenerated!', 'success')"><i class="fa-solid fa-rotate"></i> Regenerate</button>
      </div>
      <div class="config-section-body">
        <div class="config-row">
          <div>
            <label>Production API Key</label>
            <div class="config-desc">Used for production environment</div>
          </div>
          <input type="text" class="config-input" value="ss_prod_7c3aed••••••••••••" readonly style="background:var(--bg-tertiary);cursor:not-allowed;">
        </div>
        <div class="config-row">
          <div>
            <label>Staging API Key</label>
            <div class="config-desc">Used for staging/testing environment</div>
          </div>
          <input type="text" class="config-input" value="ss_stag_8b5cf6••••••••••••" readonly style="background:var(--bg-tertiary);cursor:not-allowed;">
        </div>
        <div class="config-row">
          <div>
            <label>Webhook Secret</label>
            <div class="config-desc">Used for webhook signature verification</div>
          </div>
          <input type="text" class="config-input" value="whsec_••••••••••••••••" readonly style="background:var(--bg-tertiary);cursor:not-allowed;">
        </div>
      </div>
    </div>
  `;
}

// ============================================
// Init on load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  navigateAdmin('dashboard');
});
