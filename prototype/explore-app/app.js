/* ============================================
   Soruban Sports — Explore App
   For Unregistered / Free Users
   ============================================ */

// --- User Profile Data ---
const user = {
  name: 'Rajesh Kumar',
  age: 28,
  phone: '+91 98765 43210',
  avatar: 'RK',
  location: 'Coimbatore',
  battingStyle: 'Right Hand',
  bowlingStyle: 'Medium Pace',
  role: 'Weekend Player',
  experience: '5 years casual',
  bio: 'Cricket enthusiast who loves weekend matches and net practice.',
  interests: ['Weekend Cricket', 'Net Practice', 'Fitness']
};

// --- Content Videos ---
const contentVideos = [
  { id: 1, title: 'Front Foot Defence Masterclass', category: 'Batting', duration: '12:30', difficulty: 'Beginner', source: 'YouTube', description: 'Learn the fundamentals of front foot defence — the foundation of batting. Covers grip, stance, head position, and how to play close to the body. Essential for every batsman starting their journey.', icon: 'fa-shield-halved' },
  { id: 2, title: 'Fast Bowling Action Breakdown', category: 'Bowling', duration: '15:45', difficulty: 'Intermediate', source: 'Curated', description: 'Detailed analysis of fast bowling actions. Covers run-up, loading, bound, delivery stride, and follow-through. Learn how to generate pace without injury.', icon: 'fa-baseball' },
  { id: 3, title: 'Fielding Drills for Beginners', category: 'Fielding', duration: '8:20', difficulty: 'Beginner', source: 'YouTube', description: 'Top 10 fielding drills you can practice alone or with a partner. Improve your ground fielding, catching, and throwing accuracy.', icon: 'fa-hands' },
  { id: 4, title: 'Cover Drive — Step by Step', category: 'Batting', duration: '10:15', difficulty: 'Beginner', source: 'Curated', description: 'Master the elegant cover drive with proper footwork, bat swing, and timing. Includes common mistakes to avoid and practice routines.', icon: 'fa-baseball-bat-ball' },
  { id: 5, title: 'Spin Bowling Grip Variations', category: 'Bowling', duration: '14:00', difficulty: 'Intermediate', source: 'YouTube', description: 'Learn off-spin, leg-spin, googly, and carrom ball grips. Understand how each variation works and when to use them in match situations.', icon: 'fa-circle-dot' },
  { id: 6, title: 'Cricket Fitness — 30 Min Routine', category: 'Fitness', duration: '30:00', difficulty: 'Beginner', source: 'YouTube', description: 'A complete 30-minute fitness routine designed specifically for cricketers. Covers cardio, core strength, shoulder mobility, and leg power.', icon: 'fa-dumbbell' },
  { id: 7, title: 'Pull Shot Technique', category: 'Batting', duration: '11:40', difficulty: 'Intermediate', source: 'Curated', description: 'How to play the pull shot safely and effectively against short-pitched bowling. Footwork, body position, and shot selection covered in detail.', icon: 'fa-baseball-bat-ball' },
  { id: 8, title: 'Yorker Bowling Mastery', category: 'Bowling', duration: '13:20', difficulty: 'Advanced', source: 'Curated', description: 'The ultimate guide to bowling yorkers consistently. Covers wrist position, release point, target zones, and death bowling strategies.', icon: 'fa-bullseye' },
  { id: 9, title: 'High Catching Technique', category: 'Fielding', duration: '7:50', difficulty: 'Intermediate', source: 'YouTube', description: 'Master high catches in the outfield and close-in positions. Learn how to judge the ball, position yourself, and take catches under pressure.', icon: 'fa-hands-catching' },
  { id: 10, title: 'Mental Toughness for Cricketers', category: 'Mental', duration: '18:30', difficulty: 'Beginner', source: 'YouTube', description: 'Develop mental resilience for cricket. Covers handling pressure, dealing with failure, pre-match routines, and staying focused during long innings.', icon: 'fa-brain' },
  { id: 11, title: 'Agility & Speed Training', category: 'Fitness', duration: '22:00', difficulty: 'Intermediate', source: 'Curated', description: 'Improve your on-field agility and running speed with targeted drills. Essential for fielding, running between wickets, and overall performance.', icon: 'fa-person-running' },
  { id: 12, title: 'Visualization & Match Preparation', category: 'Mental', duration: '16:00', difficulty: 'Advanced', source: 'Curated', description: 'Advanced mental preparation techniques used by international cricketers. Learn visualization, scenario planning, and focus techniques for match day.', icon: 'fa-eye' },
  { id: 13, title: 'Sweep & Reverse Sweep', category: 'Batting', duration: '9:45', difficulty: 'Advanced', source: 'YouTube', description: 'Master the sweep and reverse sweep shots against spin. Includes when to play, risk management, and practice drills to build confidence.', icon: 'fa-baseball-bat-ball' },
  { id: 14, title: 'Swing Bowling Secrets', category: 'Bowling', duration: '17:10', difficulty: 'Advanced', source: 'YouTube', description: 'Learn how to swing the ball both ways. Covers seam position, wrist angle, ball care, and conditions that favor swing bowling.', icon: 'fa-wind' }
];

// --- Academies Data ---
const academies = [
  {
    id: 1, name: 'SAM Cricket Academy', rating: 4.6, students: 180,
    location: 'RS Puram, Coimbatore', batches: ['U-10', 'U-12', 'U-14', 'U-16', 'Senior'],
    fee: '3,500', feeLabel: '₹3,500/mo',
    established: '2018', tagline: 'Building Champions from Grassroots',
    description: 'Premier cricket coaching academy in Coimbatore with experienced coaches, modern facilities, and a structured stage-wise curriculum from grassroots to advanced levels.',
    staff: [
      { name: 'Venkat', role: 'Head Coach', experience: '15 years', specialization: 'Batting & Strategy', avatar: 'V', achievements: 'Former Ranji player, BCCI Level 3 certified' },
      { name: 'Coach Ravi', role: 'Bowling Coach', experience: '10 years', specialization: 'Fast Bowling', avatar: 'R', achievements: 'TNCA district coach, 200+ wickets in league cricket' },
      { name: 'Coach Priya', role: 'Fitness & Fielding', experience: '8 years', specialization: 'Fitness & Agility', avatar: 'P', achievements: 'Sports science degree, national-level athlete' }
    ],
    facilities: [
      { name: '4 Net Lanes', icon: 'fa-baseball-bat-ball' },
      { name: 'Bowling Machine', icon: 'fa-gear' },
      { name: 'Video Analysis Room', icon: 'fa-video' },
      { name: 'Full Ground', icon: 'fa-circle-dot' },
      { name: 'Gym & Fitness Area', icon: 'fa-dumbbell' },
      { name: 'Dressing Room', icon: 'fa-shirt' }
    ],
    achievements: [
      { title: '12 Students Selected for TNCA District', year: '2025-26', icon: 'fa-trophy' },
      { title: 'Best Academy Award — Coimbatore District', year: '2025', icon: 'fa-award' },
      { title: '3 Students in Tamil Nadu U-16 Squad', year: '2024-25', icon: 'fa-star' },
      { title: 'Inter-Academy Tournament Champions', year: '2024', icon: 'fa-medal' },
      { title: '90% Student Progression Rate', year: '2025', icon: 'fa-chart-line' }
    ],
    testimonials: [
      { name: 'Mr. Rajesh', relation: 'Parent of Arun (U-14)', text: 'My son has improved tremendously in 8 months. The structured curriculum and regular feedback give us confidence.', rating: 5 },
      { name: 'Karthik M', relation: 'Student, Stage 3', text: 'The coaches here focus on technique, not just hitting. I got selected for district trials thanks to SAM Academy.', rating: 5 },
      { name: 'Mrs. Lakshmi', relation: 'Parent of Deepak (U-12)', text: 'The app updates keep me informed about my son\'s progress. Best investment for his cricket career.', rating: 4 }
    ],
    programs: [
      { name: 'Regular Coaching', desc: 'Daily batch training — batting, bowling, fielding, fitness', fee: '₹3,500/month' },
      { name: 'Weekend Program', desc: 'Saturday & Sunday sessions for school-going students', fee: '₹2,000/month' },
      { name: 'Summer Camp', desc: 'Intensive 30-day camp — April & May', fee: '₹8,000 (one-time)' },
      { name: 'Personal Coaching', desc: '1-on-1 sessions with head coach', fee: '₹1,500/session' }
    ]
  },
  {
    id: 2, name: 'MRF Pace Foundation', rating: 4.8, students: 120,
    location: 'Singanallur, Coimbatore', batches: ['U-14', 'U-16', 'U-19'],
    fee: '5,000', feeLabel: '₹5,000/mo',
    established: '2015', tagline: 'Pace is our game',
    description: 'Specialized fast bowling academy with world-class infrastructure and international coaching methodology.',
    staff: [
      { name: 'Coach Ashwin', role: 'Head Coach', experience: '20 years', specialization: 'Pace Bowling', avatar: 'A', achievements: 'Former first-class cricketer' }
    ],
    facilities: [
      { name: '6 Net Lanes', icon: 'fa-baseball-bat-ball' },
      { name: '2 Bowling Machines', icon: 'fa-gear' },
      { name: 'Video Analysis', icon: 'fa-video' },
      { name: 'Gym', icon: 'fa-dumbbell' }
    ],
    achievements: [{ title: '5 Students in State Squad', year: '2025', icon: 'fa-trophy' }],
    testimonials: [
      { name: 'Arjun K', relation: 'Student, U-16', text: 'The pace bowling coaching here is world class. Improved my speed from 110 to 130 kmph in one year.', rating: 5 }
    ],
    programs: [
      { name: 'Pace Bowling Intensive', desc: 'Specialized fast bowling training with biomechanics analysis', fee: '₹5,000/month' },
      { name: 'Weekend Pace Camp', desc: 'Saturday & Sunday focused sessions', fee: '₹3,000/month' }
    ]
  },
  {
    id: 3, name: 'VB Cricket Academy', rating: 4.3, students: 95,
    location: 'Peelamedu, Coimbatore', batches: ['U-10', 'U-12', 'U-14'],
    fee: '2,800', feeLabel: '₹2,800/mo',
    established: '2020', tagline: 'Where young talent grows',
    description: 'Beginner-friendly academy focusing on U-10 and U-12 age groups with fun-based learning approach.',
    staff: [
      { name: 'Coach Bala', role: 'Head Coach', experience: '12 years', specialization: 'Junior Development', avatar: 'B', achievements: 'BCCI Level 2 certified' }
    ],
    facilities: [
      { name: '3 Net Lanes', icon: 'fa-baseball-bat-ball' },
      { name: 'Open Ground', icon: 'fa-circle-dot' },
      { name: 'Equipment Room', icon: 'fa-box' }
    ],
    achievements: [{ title: 'Best Junior Academy — Coimbatore', year: '2025', icon: 'fa-award' }],
    testimonials: [
      { name: 'Mrs. Priya', relation: 'Parent of Sneha (U-10)', text: 'A safe and nurturing environment for kids. My daughter loves going to practice every day.', rating: 4 }
    ],
    programs: [
      { name: 'Junior Coaching', desc: 'Fun-based cricket for ages 6-14', fee: '₹2,800/month' },
      { name: 'Summer Fun Camp', desc: '15-day camp with games and cricket skills', fee: '₹5,000 (one-time)' }
    ]
  },
  {
    id: 4, name: 'Chennai Super Kings Academy', rating: 4.5, students: 200,
    location: 'Saibaba Colony, Coimbatore', batches: ['U-12', 'U-14', 'U-16', 'U-19', 'Senior'],
    fee: '4,500', feeLabel: '₹4,500/mo',
    established: '2019', tagline: 'Yellow army training ground',
    description: 'Franchised academy with CSK methodology and coaching standards. Modern facilities with structured pathways.',
    staff: [
      { name: 'Coach Suresh', role: 'Head Coach', experience: '18 years', specialization: 'All-round Development', avatar: 'S', achievements: 'Former TNPL player, CSK certified' },
      { name: 'Coach Deepak', role: 'Batting Coach', experience: '12 years', specialization: 'Batting', avatar: 'D', achievements: 'National-level player' }
    ],
    facilities: [
      { name: '5 Net Lanes', icon: 'fa-baseball-bat-ball' },
      { name: 'Bowling Machine', icon: 'fa-gear' },
      { name: 'Indoor Facility', icon: 'fa-warehouse' },
      { name: 'Gym', icon: 'fa-dumbbell' },
      { name: 'Swimming Pool', icon: 'fa-person-swimming' }
    ],
    achievements: [
      { title: '8 District Selections', year: '2025', icon: 'fa-trophy' },
      { title: 'CSK Franchise Best Academy Award', year: '2024', icon: 'fa-award' }
    ],
    testimonials: [
      { name: 'Mr. Ganesh', relation: 'Parent of Vikram (U-14)', text: 'The CSK brand and methodology give my son the best training. Worth every rupee.', rating: 5 }
    ],
    programs: [
      { name: 'Regular Coaching', desc: 'Daily training with CSK-certified coaches', fee: '₹4,500/month' },
      { name: 'Elite Program', desc: 'Advanced training for competitive players', fee: '₹6,000/month' }
    ]
  },
  {
    id: 5, name: 'Coimbatore Cricket Club', rating: 4.1, students: 60,
    location: 'Race Course, Coimbatore', batches: ['U-14', 'U-16', 'Senior', 'Weekend'],
    fee: '2,500', feeLabel: '₹2,500/mo',
    established: '2021', tagline: 'Cricket for everyone',
    description: 'Community-driven cricket club offering affordable coaching with focus on weekend and recreational players.',
    staff: [
      { name: 'Coach Muthu', role: 'Head Coach', experience: '10 years', specialization: 'General Coaching', avatar: 'M', achievements: 'TNCA Level 2 certified' }
    ],
    facilities: [
      { name: '2 Net Lanes', icon: 'fa-baseball-bat-ball' },
      { name: 'Open Ground', icon: 'fa-circle-dot' }
    ],
    achievements: [{ title: 'Most Affordable Academy Award', year: '2025', icon: 'fa-award' }],
    testimonials: [
      { name: 'Srinivasan', relation: 'Weekend Player', text: 'Great place for adults who want to play cricket on weekends. Very welcoming community.', rating: 4 }
    ],
    programs: [
      { name: 'Regular Coaching', desc: 'Daily evening sessions', fee: '₹2,500/month' },
      { name: 'Weekend Only', desc: 'Saturday & Sunday coaching', fee: '₹1,500/month' }
    ]
  }
];

// --- Feed Posts (Public) ---
const feedPosts = [
  { id: 1, academy: 'SAM Cricket Academy', avatar: 'SA', time: '2h ago', text: 'Congratulations to our U-14 batch! 3 students selected for TNCA District trials. Hard work pays off! 🏆', hasImage: true, imageIcon: 'fa-trophy', likes: 48, comments: 12 },
  { id: 2, academy: 'MRF Pace Foundation', avatar: 'MR', time: '5h ago', text: 'New batch starting April 1st for U-16 fast bowlers. Limited seats available. Register now at our Singanallur campus.', hasImage: false, likes: 22, comments: 6 },
  { id: 3, academy: 'VB Cricket Academy', avatar: 'VB', time: '8h ago', text: 'Fun training day with our U-10 batch! Cricket should always be enjoyable. Look at these young champs practicing their fielding drills.', hasImage: true, imageIcon: 'fa-camera', likes: 65, comments: 18 },
  { id: 4, academy: 'SAM Cricket Academy', avatar: 'SA', time: '1d ago', text: 'Coaching Tip: The key to a good cover drive is weight transfer. Front foot should land towards the pitch of the ball. Practice with a cone target at cover.', hasImage: false, likes: 89, comments: 24 },
  { id: 5, academy: 'Chennai Super Kings Academy', avatar: 'CS', time: '1d ago', text: 'Summer Camp 2026 registrations are now OPEN! 30 days of intensive cricket training with CSK-certified coaches. Early bird discount: 20% off until March 31st.', hasImage: true, imageIcon: 'fa-sun', likes: 112, comments: 35 },
  { id: 6, academy: 'Coimbatore Cricket Club', avatar: 'CC', time: '2d ago', text: 'Weekend match highlights: Our senior team scored 185/4 in a T20 match against Trichy Cricket Club. Ashwin top-scored with 67(38). What a match!', hasImage: true, imageIcon: 'fa-video', likes: 34, comments: 9 },
  { id: 7, academy: 'SAM Cricket Academy', avatar: 'SA', time: '3d ago', text: 'Stage promotion results are out! 12 students promoted to the next stage this month. Check the app for detailed progress reports.', hasImage: false, likes: 56, comments: 14 },
  { id: 8, academy: 'MRF Pace Foundation', avatar: 'MR', time: '4d ago', text: 'Our student Arjun K clocked 132 kmph in today\'s speed test! 🔥 Started at 108 kmph just 8 months ago. Proof that proper coaching makes the difference.', hasImage: true, imageIcon: 'fa-gauge-high', likes: 143, comments: 42 }
];

// --- State Variables ---
let selectedCategory = 'All';
let selectedVideoId = 1;
let selectedAcademyId = 1;
let academyDetailTab = 'overview';
let academyFilter = 'All';
let applyStatusView = 'submitted';
let selectedExperience = 'none';

// --- Helper Functions ---
function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '<span class="stars">' +
    '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
    '<i class="far fa-star"></i>'.repeat(empty) +
    '</span>';
}

function getCategoryColor(cat) {
  const colors = {
    'Batting': { bg: '#dbeafe', text: '#1e40af', darkBg: 'rgba(59,130,246,0.2)', darkText: '#93c5fd' },
    'Bowling': { bg: '#fce7f3', text: '#9d174d', darkBg: 'rgba(236,72,153,0.2)', darkText: '#f9a8d4' },
    'Fielding': { bg: '#d1fae5', text: '#065f46', darkBg: 'rgba(16,185,129,0.2)', darkText: '#6ee7b7' },
    'Fitness': { bg: '#fef3c7', text: '#92400e', darkBg: 'rgba(245,158,11,0.2)', darkText: '#fcd34d' },
    'Mental': { bg: '#ede9fe', text: '#5b21b6', darkBg: 'rgba(139,92,246,0.2)', darkText: '#c4b5fd' }
  };
  return colors[cat] || { bg: '#f3f4f6', text: '#374151', darkBg: 'rgba(156,163,175,0.2)', darkText: '#d1d5db' };
}

function categoryBadge(cat) {
  const c = getCategoryColor(cat);
  return `<span class="category-pill" style="background:${c.bg};color:${c.text}">${cat}</span>`;
}

function getVideoById(id) {
  return contentVideos.find(v => v.id === id) || contentVideos[0];
}

function getAcademyById(id) {
  return academies.find(a => a.id === id) || academies[0];
}

// ========== SCREENS ==========

const screens = {};

// --- 1. Splash ---
screens['splash'] = () => `
  <div class="login-bg" onclick="navigateTo('login')" style="cursor:pointer">
    <div class="login-logo">
      <i class="fas fa-cricket-bat-ball"></i>
    </div>
    <div class="login-title">Soruban Sports</div>
    <div class="login-subtitle" style="margin-bottom:16px">Your Cricket Journey Starts Here</div>
    <div style="margin-top:40px;opacity:0.7;font-size:13px;color:#fff">
      <i class="fas fa-hand-pointer" style="margin-right:6px"></i> Tap anywhere to continue
    </div>
  </div>
`;

// --- 2. Login ---
screens['login'] = () => `
  <div class="login-bg">
    <div class="login-logo">
      <i class="fas fa-cricket-bat-ball"></i>
    </div>
    <div class="login-title">Welcome</div>
    <div class="login-subtitle">Enter your phone number to get started</div>
    <div style="width:100%;max-width:280px">
      <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:12px;margin-bottom:16px;backdrop-filter:blur(8px)">
        <span style="color:#fff;font-weight:600;font-size:15px">+91</span>
        <input type="tel" placeholder="Phone number" maxlength="10" style="flex:1;border:none;background:none;outline:none;color:#fff;font-size:15px;font-family:var(--font-body)" />
      </div>
      <button class="btn btn-primary btn-full" onclick="navigateTo('otp')" style="background:#fff;color:var(--accent);font-weight:700;border:none;padding:14px;border-radius:12px;font-size:15px;cursor:pointer;width:100%">
        Continue <i class="fas fa-arrow-right" style="margin-left:6px"></i>
      </button>
      <div style="margin-top:20px;font-size:12px;color:rgba(255,255,255,0.6)">
        By continuing, you agree to our Terms & Privacy Policy
      </div>
    </div>
  </div>
`;

// --- 3. OTP ---
screens['otp'] = () => `
  <div class="login-bg">
    <div style="width:56px;height:56px;border-radius:16px;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;margin-bottom:16px;backdrop-filter:blur(8px)">
      <i class="fas fa-shield-halved"></i>
    </div>
    <div class="login-title" style="font-size:20px">Verify OTP</div>
    <div class="login-subtitle">Enter the 4-digit code sent to your phone</div>
    <div class="otp-inputs">
      <input type="text" maxlength="1" inputmode="numeric" oninput="handleOtpInput(this, 0)" />
      <input type="text" maxlength="1" inputmode="numeric" oninput="handleOtpInput(this, 1)" />
      <input type="text" maxlength="1" inputmode="numeric" oninput="handleOtpInput(this, 2)" />
      <input type="text" maxlength="1" inputmode="numeric" oninput="handleOtpInput(this, 3)" />
    </div>
    <button class="otp-verify-btn" onclick="navigateTo('home')" style="width:100%;max-width:280px;background:#fff;color:var(--accent);font-weight:700;border:none;padding:14px;border-radius:12px;font-size:15px;cursor:pointer">
      Verify & Continue
    </button>
    <div style="margin-top:16px;font-size:13px;color:rgba(255,255,255,0.7)">
      Didn't receive? <span style="color:#fff;font-weight:600;cursor:pointer" onclick="showToast('OTP resent!','success')">Resend OTP</span>
    </div>
  </div>
`;

// --- 4. Home Screen ---
screens['home'] = () => {
  const featured = contentVideos.slice(0, 3);
  const topAcademies = academies.slice(0, 3);

  return `
    <div class="screen-pad screen-enter">
      <!-- Welcome Banner -->
      <div class="hero-card" style="margin-bottom:16px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:18px">
            <i class="fas fa-cricket-bat-ball"></i>
          </div>
          <div>
            <h3 style="font-size:17px;font-weight:700;margin:0">Welcome to Soruban Sports</h3>
          </div>
        </div>
        <p class="text-secondary" style="font-size:13px;margin:0;line-height:1.4">Explore cricket content, find academies, and start your journey</p>
      </div>

      <!-- Quick Actions -->
      <div class="section-header" style="margin-top:8px">
        <span class="section-title">Quick Actions</span>
      </div>
      <div class="quick-actions">
        <div class="quick-action" onclick="navigateTo('explore')">
          <i class="fas fa-play-circle"></i>
          <span>Explore Content</span>
        </div>
        <div class="quick-action" onclick="navigateTo('academies')">
          <i class="fas fa-building-columns"></i>
          <span>Find Academies</span>
        </div>
        <div class="quick-action" onclick="navigateTo('profile')">
          <i class="fas fa-user"></i>
          <span>My Profile</span>
        </div>
        <div class="quick-action" onclick="navigateTo('feed')">
          <i class="fas fa-newspaper"></i>
          <span>Public Feed</span>
        </div>
      </div>

      <!-- Featured Content -->
      <div class="section-header">
        <span class="section-title">Featured Content</span>
        <span class="section-link" onclick="navigateTo('explore')">View All</span>
      </div>
      <div class="video-scroll">
        ${featured.map(v => `
          <div class="video-card" onclick="selectedVideoId=${v.id};navigateTo('video-detail')">
            <div class="video-card-thumb">
              <i class="fas fa-play-circle" style="font-size:28px;opacity:0.8"></i>
              <span class="duration">${v.duration}</span>
            </div>
            <div class="video-card-body">
              <div class="video-card-title">${v.title}</div>
              <div class="video-card-meta">
                ${categoryBadge(v.category)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Top Academies -->
      <div class="section-header">
        <span class="section-title">Top Academies Near You</span>
        <span class="section-link" onclick="navigateTo('academies')">View All</span>
      </div>
      ${topAcademies.map(a => `
        <div class="academy-card" onclick="selectedAcademyId=${a.id};academyDetailTab='overview';navigateTo('academy-detail')">
          <div class="academy-card-icon">
            <i class="fas fa-building-columns"></i>
          </div>
          <div class="academy-card-info">
            <div class="academy-card-name">${a.name}</div>
            <div class="academy-card-meta">
              <i class="fas fa-map-marker-alt"></i> ${a.location} · ${getStars(a.rating)} ${a.rating}
            </div>
            <div class="academy-card-meta" style="margin-top:4px">
              <i class="fas fa-users"></i> ${a.students} students · <strong>${a.feeLabel}</strong>
            </div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px"></i>
        </div>
      `).join('')}

      <!-- Why Join an Academy -->
      <div class="info-card">
        <div class="info-card-title"><i class="fas fa-lightbulb" style="margin-right:6px"></i> Why Join an Academy?</div>
        <ul style="padding-left:16px;margin:0">
          <li>Structured coaching with certified coaches</li>
          <li>Stage-wise skill progression tracking</li>
          <li>Video analysis and personalized feedback</li>
          <li>Tournament opportunities and team selection</li>
          <li>Fitness and mental conditioning programs</li>
        </ul>
      </div>

      <!-- CTA Banner -->
      <div class="cta-banner">
        <p>Ready to start? Find the right academy for you</p>
        <button class="btn-cta" onclick="navigateTo('academies')">
          <i class="fas fa-search"></i> Browse Academies
        </button>
      </div>

      <div style="height:20px"></div>
    </div>
  `;
};

// --- 5. Explore Content ---
screens['explore'] = () => {
  const categories = ['All', 'Batting', 'Bowling', 'Fielding', 'Fitness', 'Mental'];
  const filtered = selectedCategory === 'All'
    ? contentVideos
    : contentVideos.filter(v => v.category === selectedCategory);
  const beginnerVideos = contentVideos.filter(v => v.difficulty === 'Beginner');

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <h2 style="font-size:20px;font-weight:800;color:var(--text-primary);margin:0">Explore Content</h2>
        <span style="font-size:12px;color:var(--text-tertiary)">${contentVideos.length} videos</span>
      </div>

      <!-- Category Filter -->
      <div class="filter-row" style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:16px">
        ${categories.map(cat => `
          <div class="filter-chip ${selectedCategory === cat ? 'active' : ''}" onclick="selectedCategory='${cat}';renderScreen('explore')" style="padding:8px 14px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid ${selectedCategory === cat ? 'var(--accent)' : 'var(--border)'};background:${selectedCategory === cat ? 'var(--accent-bg)' : 'var(--bg-card)'};color:${selectedCategory === cat ? 'var(--accent)' : 'var(--text-secondary)'}">
            ${cat}
          </div>
        `).join('')}
      </div>

      <!-- Recommended for Beginners (shown only when All) -->
      ${selectedCategory === 'All' ? `
        <div class="section-header" style="margin-top:0">
          <span class="section-title">Recommended for Beginners</span>
        </div>
        <div class="video-scroll" style="margin-bottom:8px">
          ${beginnerVideos.map(v => `
            <div class="video-card" onclick="selectedVideoId=${v.id};navigateTo('video-detail')">
              <div class="video-card-thumb">
                <i class="fas fa-play-circle" style="font-size:28px;opacity:0.8"></i>
                <span class="duration">${v.duration}</span>
              </div>
              <div class="video-card-body">
                <div class="video-card-title">${v.title}</div>
                <div class="video-card-meta">
                  ${categoryBadge(v.category)}
                  <span class="difficulty-badge beginner">Beginner</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="section-header">
          <span class="section-title">All Content</span>
        </div>
      ` : ''}

      <!-- Content List -->
      <div class="content-grid">
        ${filtered.map(v => `
          <div class="content-card" onclick="selectedVideoId=${v.id};navigateTo('video-detail')">
            <div class="content-card-thumb">
              <i class="fas fa-play-circle" style="font-size:22px;opacity:0.8"></i>
              <span class="duration">${v.duration}</span>
            </div>
            <div class="content-card-body">
              <div class="content-card-title">${v.title}</div>
              <div class="content-card-desc">
                ${categoryBadge(v.category)}
                <span class="difficulty-badge ${v.difficulty.toLowerCase()}">${v.difficulty}</span>
              </div>
              <div class="content-card-desc" style="margin-top:4px">
                <i class="fas ${v.source === 'YouTube' ? 'fa-youtube' : 'fa-film'}" style="color:${v.source === 'YouTube' ? '#ff0000' : 'var(--accent)'}"></i>
                ${v.source}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="height:20px"></div>
    </div>
  `;
};

// --- 6. Video Detail ---
screens['video-detail'] = () => {
  const video = getVideoById(selectedVideoId);
  const related = contentVideos.filter(v => v.id !== video.id && v.category === video.category).slice(0, 3);
  if (related.length < 3) {
    const extra = contentVideos.filter(v => v.id !== video.id && v.category !== video.category).slice(0, 3 - related.length);
    related.push(...extra);
  }

  return `
    <div class="screen-enter">
      <!-- Back Header -->
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
        <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
          <i class="fas fa-arrow-left"></i>
        </button>
        <span style="font-size:16px;font-weight:700;color:var(--text-primary);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${video.title}</span>
      </div>

      <!-- Video Player Placeholder -->
      <div class="video-placeholder" style="height:220px;border-radius:0;margin-bottom:0" onclick="showToast('Video playback coming in the full app!','info')">
        <div class="play-btn" style="width:60px;height:60px;font-size:24px">
          <i class="fas fa-play"></i>
        </div>
        <div class="video-title" style="font-size:13px">${video.title}</div>
      </div>

      <div style="padding:16px">
        <!-- Video Info -->
        <h3 style="font-size:17px;font-weight:700;color:var(--text-primary);margin:0 0 8px">${video.title}</h3>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          ${categoryBadge(video.category)}
          <span class="difficulty-badge ${video.difficulty.toLowerCase()}">${video.difficulty}</span>
          <span style="font-size:12px;color:var(--text-tertiary)"><i class="fas fa-clock" style="margin-right:4px"></i>${video.duration}</span>
          <span style="font-size:12px;color:var(--text-tertiary)"><i class="fas ${video.source === 'YouTube' ? 'fa-youtube' : 'fa-film'}" style="margin-right:4px;color:${video.source === 'YouTube' ? '#ff0000' : 'var(--accent)'}"></i>${video.source}</span>
        </div>

        <!-- Description -->
        <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin:0 0 20px">${video.description}</p>

        <!-- Related Videos -->
        <div class="section-header" style="margin-top:0">
          <span class="section-title">Related Videos</span>
        </div>
        <div class="content-grid">
          ${related.map(v => `
            <div class="content-card" onclick="selectedVideoId=${v.id};navigateTo('video-detail')">
              <div class="content-card-thumb">
                <i class="fas fa-play-circle" style="font-size:22px;opacity:0.8"></i>
                <span class="duration">${v.duration}</span>
              </div>
              <div class="content-card-body">
                <div class="content-card-title">${v.title}</div>
                <div class="content-card-desc">
                  ${categoryBadge(v.category)}
                  <span class="difficulty-badge ${v.difficulty.toLowerCase()}">${v.difficulty}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- CTA -->
        <div class="cta-banner" style="margin-top:20px">
          <p>Want structured coaching? Join an academy for guided learning</p>
          <button class="btn-cta" onclick="navigateTo('academies')">
            <i class="fas fa-building-columns"></i> Find an Academy
          </button>
        </div>
      </div>

      <div style="height:20px"></div>
    </div>
  `;
};

// --- 7. Feed ---
screens['feed'] = () => `
  <div class="screen-pad screen-enter">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <h2 style="font-size:20px;font-weight:800;color:var(--text-primary);margin:0">Cricket Community</h2>
      <span style="font-size:12px;color:var(--text-tertiary)">${feedPosts.length} posts</span>
    </div>

    ${feedPosts.map(p => `
      <div class="feed-post fade-in-up">
        <div class="feed-post-header">
          <div class="feed-post-avatar">${p.avatar}</div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="feed-post-name">${p.academy}</span>
              <span class="public-badge"><i class="fas fa-globe" style="font-size:8px"></i> Public</span>
            </div>
            <div class="feed-post-time">${p.time}</div>
          </div>
        </div>
        <div class="feed-post-body">${p.text}</div>
        ${p.hasImage ? `
          <div class="feed-post-image">
            <i class="fas ${p.imageIcon}"></i>
          </div>
        ` : ''}
        <div class="feed-post-actions">
          <button class="feed-action" onclick="showToast('Liked!','success')">
            <i class="far fa-heart"></i> ${p.likes}
          </button>
          <button class="feed-action" onclick="showToast('Comments coming soon!','info')">
            <i class="far fa-comment"></i> ${p.comments}
          </button>
          <button class="feed-action" onclick="showToast('Link copied!','success')">
            <i class="fas fa-share"></i> Share
          </button>
        </div>
      </div>
    `).join('')}

    <div style="height:20px"></div>
  </div>
`;

// --- 8. Academies ---
screens['academies'] = () => {
  const filters = ['All', 'Nearby', 'Top Rated', 'Affordable'];
  let filtered = [...academies];
  if (academyFilter === 'Top Rated') filtered.sort((a, b) => b.rating - a.rating);
  if (academyFilter === 'Affordable') filtered.sort((a, b) => parseInt(a.fee.replace(',', '')) - parseInt(b.fee.replace(',', '')));

  return `
    <div class="screen-pad screen-enter">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h2 style="font-size:20px;font-weight:800;color:var(--text-primary);margin:0">Find Academies</h2>
      </div>

      <!-- Search -->
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search academies..." />
      </div>

      <!-- Location -->
      <div class="location-indicator">
        <i class="fas fa-map-marker-alt"></i> Coimbatore
      </div>

      <!-- Filters -->
      <div class="filter-row" style="display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:16px">
        ${filters.map(f => `
          <div class="filter-chip ${academyFilter === f ? 'active' : ''}" onclick="academyFilter='${f}';renderScreen('academies')" style="padding:8px 14px;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid ${academyFilter === f ? 'var(--accent)' : 'var(--border)'};background:${academyFilter === f ? 'var(--accent-bg)' : 'var(--bg-card)'};color:${academyFilter === f ? 'var(--accent)' : 'var(--text-secondary)'}">
            ${f}
          </div>
        `).join('')}
      </div>

      <!-- Academy Cards -->
      ${filtered.map(a => `
        <div class="academy-card fade-in-up" onclick="selectedAcademyId=${a.id};academyDetailTab='overview';navigateTo('academy-detail')">
          <div class="academy-card-icon">
            <i class="fas fa-building-columns"></i>
          </div>
          <div class="academy-card-info">
            <div class="academy-card-name">${a.name}</div>
            <div class="academy-card-meta" style="display:flex;align-items:center;gap:4px">
              <i class="fas fa-map-marker-alt" style="font-size:10px"></i> ${a.location}
            </div>
            <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
              <span style="font-size:12px">${getStars(a.rating)} <strong>${a.rating}</strong></span>
              <span style="font-size:11px;color:var(--text-tertiary)"><i class="fas fa-users" style="font-size:10px;margin-right:2px"></i>${a.students}</span>
              <span style="font-size:11px;font-weight:700;color:var(--accent)">${a.feeLabel}</span>
            </div>
            <div style="margin-top:4px;display:flex;gap:4px;flex-wrap:wrap">
              ${a.batches.slice(0, 3).map(b => `<span style="font-size:10px;padding:2px 6px;background:var(--bg-tertiary);border-radius:4px;color:var(--text-tertiary)">${b}</span>`).join('')}
              ${a.batches.length > 3 ? `<span style="font-size:10px;padding:2px 6px;color:var(--text-tertiary)">+${a.batches.length - 3}</span>` : ''}
            </div>
          </div>
          <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px"></i>
        </div>
      `).join('')}

      <div style="height:20px"></div>
    </div>
  `;
};

// --- 9. Academy Detail ---
screens['academy-detail'] = () => {
  const a = getAcademyById(selectedAcademyId);
  const tabs = ['overview', 'achievements', 'staff', 'programs', 'reviews'];

  const renderTab = () => {
    switch (academyDetailTab) {
      case 'overview':
        return `
          <p style="font-size:13px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px">${a.description}</p>

          <div class="section-header" style="margin-top:0">
            <span class="section-title">Quick Info</span>
          </div>
          <div class="stat-row" style="margin-bottom:16px">
            <div class="stat-box">
              <div class="stat-val">${a.students}</div>
              <div class="stat-lbl">Students</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${a.established}</div>
              <div class="stat-lbl">Since</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${a.rating}</div>
              <div class="stat-lbl">Rating</div>
            </div>
            <div class="stat-box">
              <div class="stat-val">${a.batches.length}</div>
              <div class="stat-lbl">Batches</div>
            </div>
          </div>

          <div class="section-header" style="margin-top:0">
            <span class="section-title">Facilities</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
            ${a.facilities.map(f => `
              <span class="facility-tag"><i class="fas ${f.icon}"></i> ${f.name}</span>
            `).join('')}
          </div>

          <div class="section-header" style="margin-top:0">
            <span class="section-title">Batches Available</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
            ${a.batches.map(b => `
              <span style="padding:8px 14px;background:var(--accent-bg);color:var(--accent);border-radius:20px;font-size:12px;font-weight:600">${b}</span>
            `).join('')}
          </div>
        `;

      case 'achievements':
        return a.achievements.length ? a.achievements.map(ach => `
          <div class="achievement-item">
            <div class="achievement-icon"><i class="fas ${ach.icon}"></i></div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${ach.title}</div>
              <div style="font-size:11px;color:var(--text-tertiary)">${ach.year}</div>
            </div>
          </div>
        `).join('') : '<div class="placeholder-box"><i class="fas fa-trophy"></i>No achievements listed yet</div>';

      case 'staff':
        return a.staff.length ? a.staff.map(s => `
          <div class="staff-card">
            <div class="staff-avatar">${s.avatar}</div>
            <div style="flex:1">
              <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${s.name}</div>
              <div style="font-size:12px;color:var(--accent);font-weight:500">${s.role}</div>
              <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">${s.experience} exp · ${s.specialization}</div>
              <div style="font-size:11px;color:var(--text-secondary);margin-top:4px;font-style:italic">${s.achievements}</div>
            </div>
          </div>
        `).join('') : '<div class="placeholder-box"><i class="fas fa-users"></i>Staff information coming soon</div>';

      case 'programs':
        return a.programs.length ? a.programs.map(p => `
          <div class="program-card">
            <div style="flex:1">
              <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${p.name}</div>
              <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${p.desc}</div>
            </div>
            <div class="program-fee">${p.fee}</div>
          </div>
        `).join('') : '<div class="placeholder-box"><i class="fas fa-list"></i>Programs information coming soon</div>';

      case 'reviews':
        return a.testimonials.length ? a.testimonials.map(t => `
          <div class="testimonial-card">
            <div class="testimonial-stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}${'<i class="far fa-star"></i>'.repeat(5 - t.rating)}</div>
            <div class="testimonial-text">"${t.text}"</div>
            <div class="testimonial-author">${t.name}</div>
            <div class="testimonial-role">${t.relation}</div>
          </div>
        `).join('') : '<div class="placeholder-box"><i class="fas fa-star"></i>No reviews yet</div>';

      default:
        return '';
    }
  };

  return `
    <div class="screen-enter">
      <!-- Back Header -->
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
        <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
          <i class="fas fa-arrow-left"></i>
        </button>
        <span style="font-size:16px;font-weight:700;color:var(--text-primary);flex:1">Academy Details</span>
      </div>

      <!-- Academy Header -->
      <div style="padding:0 16px">
        <div class="academy-header" style="margin:0 0 16px;border-radius:var(--radius-lg)">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;position:relative;z-index:1">
            <div style="width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:24px">
              <i class="fas fa-building-columns"></i>
            </div>
            <div>
              <h2 style="font-size:18px;font-weight:800;margin:0">${a.name}</h2>
              <p style="font-size:12px;opacity:0.85;margin:2px 0 0"><i class="fas fa-map-marker-alt" style="margin-right:4px"></i>${a.location}</p>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;position:relative;z-index:1">
            <span style="font-size:12px">${getStars(a.rating)} ${a.rating}</span>
            <span style="font-size:12px;opacity:0.8">${a.students} students</span>
            <span style="font-size:12px;font-weight:700">${a.feeLabel}</span>
          </div>
          ${a.tagline ? `<p style="font-size:12px;opacity:0.75;margin:8px 0 0;font-style:italic;position:relative;z-index:1">"${a.tagline}"</p>` : ''}
        </div>
      </div>

      <div style="padding:0 16px">
        <!-- Tabs -->
        <div class="academy-detail-tabs">
          ${tabs.map(t => `
            <button class="tab-btn ${academyDetailTab === t ? 'active' : ''}" onclick="academyDetailTab='${t}';renderScreen('academy-detail')">
              ${t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          `).join('')}
        </div>

        <!-- Tab Content -->
        ${renderTab()}

        <!-- Apply Button -->
        <div style="margin-top:20px;padding-bottom:20px">
          <button onclick="selectedAcademyId=${a.id};navigateTo('apply')" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
            <i class="fas fa-paper-plane"></i> Apply for Admission
          </button>
        </div>
      </div>
    </div>
  `;
};

// --- 10. Apply ---
screens['apply'] = () => {
  const a = getAcademyById(selectedAcademyId);

  return `
    <div class="screen-enter">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
        <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
          <i class="fas fa-arrow-left"></i>
        </button>
        <span style="font-size:16px;font-weight:700;color:var(--text-primary)">Apply for Admission</span>
      </div>

      <div style="padding:0 16px 20px">
        <!-- Academy Info -->
        <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--accent-bg);border-radius:12px;margin-bottom:20px">
          <div style="width:40px;height:40px;border-radius:10px;background:var(--accent);display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px">
            <i class="fas fa-building-columns"></i>
          </div>
          <div>
            <div style="font-size:14px;font-weight:700;color:var(--text-primary)">${a.name}</div>
            <div style="font-size:12px;color:var(--text-secondary)">${a.location}</div>
          </div>
        </div>

        <!-- Form -->
        <div class="form-group">
          <label>Student Name *</label>
          <input type="text" placeholder="Enter full name" value="" />
        </div>

        <div class="form-group">
          <label>Age *</label>
          <input type="number" placeholder="Enter age" min="5" max="50" />
        </div>

        <div class="form-group">
          <label>Prior Cricket Experience *</label>
          <div class="radio-group">
            <div class="radio-option ${selectedExperience === 'none' ? 'active' : ''}" onclick="selectedExperience='none';renderScreen('apply')">
              <i class="fas ${selectedExperience === 'none' ? 'fa-circle-dot' : 'fa-circle'}" style="font-size:14px"></i> None
            </div>
            <div class="radio-option ${selectedExperience === '1-2' ? 'active' : ''}" onclick="selectedExperience='1-2';renderScreen('apply')">
              <i class="fas ${selectedExperience === '1-2' ? 'fa-circle-dot' : 'fa-circle'}" style="font-size:14px"></i> 1-2 years
            </div>
            <div class="radio-option ${selectedExperience === '3+' ? 'active' : ''}" onclick="selectedExperience='3+';renderScreen('apply')">
              <i class="fas ${selectedExperience === '3+' ? 'fa-circle-dot' : 'fa-circle'}" style="font-size:14px"></i> 3+ years
            </div>
          </div>
        </div>

        <div class="form-group">
          <label>Preferred Batch</label>
          <select>
            <option value="">Select batch</option>
            ${a.batches.map(b => `<option value="${b}">${b}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label>Parent / Guardian Name *</label>
          <input type="text" placeholder="Enter parent name" />
        </div>

        <div class="form-group">
          <label>Parent Mobile *</label>
          <input type="tel" placeholder="10-digit mobile number" maxlength="10" />
        </div>

        <div class="form-group">
          <label>Medical Conditions (if any)</label>
          <textarea placeholder="Mention any allergies, injuries, or medical conditions..."></textarea>
        </div>

        <button onclick="navigateTo('apply-status');showToast('Application submitted successfully!','success')" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:8px">
          <i class="fas fa-paper-plane"></i> Submit Application
        </button>
      </div>
    </div>
  `;
};

// --- 11. Apply Status ---
screens['apply-status'] = () => {
  const steps = [
    { key: 'submitted', label: 'Application Submitted', desc: 'March 24, 2026 at 10:30 AM' },
    { key: 'review', label: 'Under Review', desc: 'Academy is reviewing your application' },
    { key: 'meeting', label: 'Meeting Scheduled', desc: 'Trial / assessment session' },
    { key: 'decision', label: 'Decision', desc: 'Admission result' }
  ];

  const stateIndex = { 'submitted': 0, 'meeting-scheduled': 2, 'accepted': 3, 'rejected': 3 };
  const activeStep = stateIndex[applyStatusView] || 0;

  const statusContent = () => {
    switch (applyStatusView) {
      case 'submitted':
        return `
          <div style="padding:16px;background:var(--bg-tertiary);border-radius:12px;text-align:center;margin-top:16px">
            <i class="fas fa-hourglass-half" style="font-size:32px;color:var(--accent);margin-bottom:8px"></i>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Waiting for Review</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">The academy will review your application and get back within 2-3 days.</div>
          </div>
        `;
      case 'meeting-scheduled':
        return `
          <div style="padding:16px;background:var(--accent-bg);border:1px solid var(--accent);border-radius:12px;margin-top:16px">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
              <i class="fas fa-calendar-check" style="font-size:18px;color:var(--accent)"></i>
              <span style="font-size:15px;font-weight:700;color:var(--accent)">Trial Session Scheduled</span>
            </div>
            <div style="font-size:13px;color:var(--text-secondary);line-height:1.6">
              <div><strong>Date:</strong> March 28, 2026 (Saturday)</div>
              <div><strong>Time:</strong> 7:00 AM - 8:00 AM</div>
              <div><strong>Location:</strong> SAM Cricket Academy, RS Puram</div>
              <div style="margin-top:8px"><strong>Note:</strong> Bring cricket shoes, water bottle. Equipment will be provided for the trial.</div>
            </div>
          </div>
        `;
      case 'accepted':
        return `
          <div style="padding:20px;background:linear-gradient(135deg,#d1fae5,#a7f3d0);border-radius:12px;text-align:center;margin-top:16px">
            <i class="fas fa-circle-check" style="font-size:40px;color:#059669;margin-bottom:10px"></i>
            <div style="font-size:17px;font-weight:800;color:#065f46">Congratulations!</div>
            <div style="font-size:13px;color:#065f46;margin-top:4px">Your admission has been accepted!</div>
          </div>
          <div style="margin-top:16px;padding:14px;background:var(--bg-card);border:1px solid var(--border);border-radius:12px">
            <div style="font-size:13px;color:var(--text-secondary);line-height:1.8">
              <div><strong>Batch:</strong> U-14 Morning Batch</div>
              <div><strong>Stage:</strong> Stage 1 — Foundation</div>
              <div><strong>Role:</strong> Batsman</div>
              <div><strong>Start Date:</strong> April 1, 2026</div>
              <div><strong>Monthly Fee:</strong> Rs.3,500</div>
            </div>
          </div>
          <button onclick="showToast('Download the Student App to get started!','success')" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;margin-top:16px">
            <i class="fas fa-download" style="margin-right:6px"></i> Get Student App
          </button>
        `;
      case 'rejected':
        return `
          <div style="padding:20px;background:var(--bg-tertiary);border-radius:12px;text-align:center;margin-top:16px">
            <i class="fas fa-circle-xmark" style="font-size:40px;color:var(--text-tertiary);margin-bottom:10px"></i>
            <div style="font-size:16px;font-weight:700;color:var(--text-primary)">Not Selected This Time</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:6px;line-height:1.5">The academy has decided not to proceed with your application at this time. Don't be discouraged — there are other great academies to explore.</div>
          </div>
          <div style="margin-top:12px;padding:12px;background:var(--accent-bg);border-radius:10px">
            <div style="font-size:12px;color:var(--accent);font-weight:600;margin-bottom:4px"><i class="fas fa-comment-dots" style="margin-right:4px"></i> Academy Feedback</div>
            <div style="font-size:12px;color:var(--text-secondary);line-height:1.5">We recommend some basic practice and fitness work before reapplying. Try joining our weekend open sessions to prepare.</div>
          </div>
          <button onclick="navigateTo('academies')" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;margin-top:16px">
            <i class="fas fa-search" style="margin-right:6px"></i> Browse Other Academies
          </button>
        `;
      default:
        return '';
    }
  };

  return `
    <div class="screen-enter">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
        <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
          <i class="fas fa-arrow-left"></i>
        </button>
        <span style="font-size:16px;font-weight:700;color:var(--text-primary)">Application Status</span>
      </div>

      <div style="padding:0 16px 20px">
        <!-- Academy Badge -->
        <div style="display:flex;align-items:center;gap:10px;padding:12px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;margin-bottom:20px">
          <div style="width:36px;height:36px;border-radius:8px;background:var(--accent);display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px">
            <i class="fas fa-building-columns"></i>
          </div>
          <div>
            <div style="font-size:13px;font-weight:600;color:var(--text-primary)">SAM Cricket Academy</div>
            <div style="font-size:11px;color:var(--text-tertiary)">Applied on March 24, 2026</div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="timeline">
          ${steps.map((s, i) => {
            let dotClass = '';
            if (i < activeStep) dotClass = 'done';
            else if (i === activeStep) dotClass = 'active';
            return `
              <div class="timeline-item">
                <div class="timeline-dot ${dotClass}">${dotClass === 'done' ? '<i class="fas fa-check"></i>' : ''}</div>
                <div class="timeline-title" style="color:${i <= activeStep ? 'var(--text-primary)' : 'var(--text-tertiary)'}">${s.label}</div>
                <div class="timeline-desc">${s.desc}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Status Content -->
        ${statusContent()}

        <!-- Demo Toggles -->
        <div style="margin-top:24px;padding:14px;background:var(--bg-tertiary);border-radius:12px">
          <div style="font-size:11px;font-weight:600;color:var(--text-tertiary);text-transform:uppercase;margin-bottom:10px">Demo: Change Status</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${['submitted', 'meeting-scheduled', 'accepted', 'rejected'].map(s => `
              <button onclick="applyStatusView='${s}';renderScreen('apply-status')" style="padding:6px 12px;border-radius:8px;font-size:11px;font-weight:600;border:1px solid ${applyStatusView === s ? 'var(--accent)' : 'var(--border)'};background:${applyStatusView === s ? 'var(--accent-bg)' : 'var(--bg-card)'};color:${applyStatusView === s ? 'var(--accent)' : 'var(--text-secondary)'};cursor:pointer">
                ${s.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
};

// --- 12. Profile ---
screens['profile'] = () => `
  <div class="screen-pad screen-enter">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-avatar">${user.avatar}</div>
      <h2 style="font-size:20px;font-weight:800;color:var(--text-primary);margin:0">${user.name}</h2>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:2px">Age ${user.age}</div>
      <div class="profile-badge"><i class="fas fa-cricket-bat-ball" style="font-size:10px"></i> Cricket Enthusiast</div>
    </div>

    <!-- Player Info -->
    <div class="section-header" style="margin-top:8px">
      <span class="section-title">Player Info</span>
    </div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:14px 16px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div>
          <div style="font-size:11px;color:var(--text-tertiary)">Batting Style</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${user.battingStyle}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--text-tertiary)">Bowling</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${user.bowlingStyle}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--text-tertiary)">Role</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${user.role}</div>
        </div>
        <div>
          <div style="font-size:11px;color:var(--text-tertiary)">Experience</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)">${user.experience}</div>
        </div>
        <div style="grid-column:span 2">
          <div style="font-size:11px;color:var(--text-tertiary)">Location</div>
          <div style="font-size:13px;font-weight:600;color:var(--text-primary)"><i class="fas fa-map-marker-alt" style="color:var(--accent);margin-right:4px;font-size:11px"></i>${user.location}</div>
        </div>
      </div>
    </div>

    <!-- Interests -->
    <div class="section-header">
      <span class="section-title">My Interests</span>
    </div>
    <div class="interest-tags">
      ${user.interests.map(i => `<span class="interest-tag"><i class="fas fa-cricket-bat-ball" style="font-size:10px;margin-right:4px;color:var(--accent)"></i>${i}</span>`).join('')}
    </div>

    <!-- Stats Placeholder -->
    <div class="section-header">
      <span class="section-title">My Stats</span>
    </div>
    <div class="placeholder-box">
      <i class="fas fa-chart-bar"></i>
      <div style="font-size:14px;font-weight:600;color:var(--text-primary);margin-top:4px">Join an Academy to Track Your Stats!</div>
      <div style="font-size:12px;margin-top:4px">Get detailed batting, bowling, and fitness analytics with structured coaching.</div>
      <button onclick="navigateTo('academies')" style="margin-top:12px;padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer">
        <i class="fas fa-search" style="margin-right:4px"></i> Find Academies
      </button>
    </div>

    <!-- Action Buttons -->
    <div style="display:flex;gap:10px;margin-top:20px">
      <button onclick="navigateTo('edit-profile')" style="flex:1;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer">
        <i class="fas fa-edit" style="margin-right:4px"></i> Edit Profile
      </button>
      <button onclick="navigateTo('settings')" style="flex:1;padding:12px;background:var(--bg-card);color:var(--text-primary);border:1px solid var(--border);border-radius:10px;font-size:13px;font-weight:600;cursor:pointer">
        <i class="fas fa-gear" style="margin-right:4px"></i> Settings
      </button>
    </div>

    <div style="height:20px"></div>
  </div>
`;

// --- 13. Edit Profile ---
screens['edit-profile'] = () => `
  <div class="screen-enter">
    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
      <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
        <i class="fas fa-arrow-left"></i>
      </button>
      <span style="font-size:16px;font-weight:700;color:var(--text-primary)">Edit Profile</span>
    </div>

    <div style="padding:0 16px 20px">
      <!-- Avatar -->
      <div style="text-align:center;margin-bottom:20px">
        <div class="profile-avatar" style="margin:0 auto 8px">${user.avatar}</div>
        <span style="font-size:12px;color:var(--accent);font-weight:600;cursor:pointer" onclick="showToast('Photo upload coming soon!','info')">Change Photo</span>
      </div>

      <div class="form-group">
        <label>Full Name</label>
        <input type="text" value="${user.name}" />
      </div>

      <div class="form-group">
        <label>Age</label>
        <input type="number" value="${user.age}" />
      </div>

      <div class="form-group">
        <label>Phone</label>
        <input type="tel" value="${user.phone}" />
      </div>

      <div class="form-group">
        <label>Location</label>
        <input type="text" value="${user.location}" />
      </div>

      <div class="form-group">
        <label>Batting Style</label>
        <select>
          <option ${user.battingStyle === 'Right Hand' ? 'selected' : ''}>Right Hand</option>
          <option ${user.battingStyle === 'Left Hand' ? 'selected' : ''}>Left Hand</option>
        </select>
      </div>

      <div class="form-group">
        <label>Bowling Style</label>
        <select>
          <option ${user.bowlingStyle === 'Medium Pace' ? 'selected' : ''}>Medium Pace</option>
          <option>Fast</option>
          <option>Off Spin</option>
          <option>Leg Spin</option>
          <option>Left Arm Spin</option>
          <option>None</option>
        </select>
      </div>

      <div class="form-group">
        <label>Playing Role</label>
        <select>
          <option ${user.role === 'Weekend Player' ? 'selected' : ''}>Weekend Player</option>
          <option>Competitive Player</option>
          <option>Batsman</option>
          <option>Bowler</option>
          <option>All-Rounder</option>
          <option>Wicket-Keeper</option>
        </select>
      </div>

      <div class="form-group">
        <label>Experience</label>
        <select>
          <option>Beginner</option>
          <option>1-2 years</option>
          <option>3-5 years</option>
          <option selected>5+ years</option>
        </select>
      </div>

      <div class="form-group">
        <label>Bio</label>
        <textarea>${user.bio}</textarea>
      </div>

      <button onclick="showToast('Profile saved!','success');goBack()" style="width:100%;padding:14px;background:var(--accent);color:#fff;border:none;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer">
        <i class="fas fa-check" style="margin-right:6px"></i> Save Changes
      </button>
    </div>
  </div>
`;

// --- 14. Settings ---
screens['settings'] = () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const items = [
    { icon: 'fa-user', label: 'Account', action: "showToast('Account settings coming soon!','info')" },
    { icon: 'fa-bell', label: 'Notifications', action: "showToast('Notification preferences coming soon!','info')" },
    { icon: isDark ? 'fa-sun' : 'fa-moon', label: 'Dark Mode', action: "toggleTheme();renderScreen('settings')", toggle: true, isOn: isDark },
    { icon: 'fa-language', label: 'Language', action: "showToast('Language options coming soon!','info')", detail: 'English' },
    { icon: 'fa-circle-info', label: 'About', action: "showModal('About','<p>Soruban Sports v1.0</p><p>Cricket academy management platform. Built with passion for cricket.</p><p style=\"color:var(--text-tertiary);font-size:12px\">© 2026 Soruban Sports</p>')" },
    { icon: 'fa-shield-halved', label: 'Privacy Policy', action: "showToast('Privacy policy page coming soon!','info')" },
    { icon: 'fa-file-contract', label: 'Terms of Service', action: "showToast('Terms page coming soon!','info')" },
    { icon: 'fa-right-from-bracket', label: 'Logout', action: "showModal('Logout','Are you sure you want to logout?',[{label:'Cancel',class:'btn-secondary',onclick:'closeModal()'},{label:'Logout',class:'btn-primary',onclick:\"closeModal();navigateTo('splash')\"}])", danger: true }
  ];

  return `
    <div class="screen-enter">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px">
        <button onclick="goBack()" style="background:none;border:none;color:var(--text-primary);font-size:18px;cursor:pointer;padding:4px">
          <i class="fas fa-arrow-left"></i>
        </button>
        <span style="font-size:16px;font-weight:700;color:var(--text-primary)">Settings</span>
      </div>

      <div>
        ${items.map(item => `
          <div class="settings-item" onclick="${item.action}">
            <div class="settings-item-left">
              <i class="fas ${item.icon}" style="${item.danger ? 'color:var(--danger)' : ''}"></i>
              <span class="settings-item-label" style="${item.danger ? 'color:var(--danger)' : ''}">${item.label}</span>
            </div>
            ${item.toggle ? `
              <div style="width:44px;height:24px;border-radius:12px;background:${item.isOn ? 'var(--accent)' : 'var(--bg-tertiary)'};position:relative;transition:all 0.2s;cursor:pointer">
                <div style="width:20px;height:20px;border-radius:50%;background:#fff;position:absolute;top:2px;${item.isOn ? 'right:2px' : 'left:2px'};transition:all 0.2s;box-shadow:0 1px 3px rgba(0,0,0,0.2)"></div>
              </div>
            ` : item.detail ? `
              <span style="font-size:12px;color:var(--text-tertiary)">${item.detail} <i class="fas fa-chevron-right" style="font-size:10px;margin-left:4px"></i></span>
            ` : `
              <i class="fas fa-chevron-right" style="color:var(--text-tertiary);font-size:12px"></i>
            `}
          </div>
        `).join('')}
      </div>

      <div style="padding:20px 16px;text-align:center">
        <div style="font-size:11px;color:var(--text-tertiary)">Soruban Sports v1.0</div>
        <div style="font-size:11px;color:var(--text-tertiary);margin-top:2px">Made with passion for cricket</div>
      </div>
    </div>
  `;
};


// ========== NAVIGATION CONFIG ==========

document.addEventListener('DOMContentLoaded', () => {
  initNav({
    defaultScreen: 'splash',
    tabMapping: {
      'home': ['video-detail', 'academy-detail', 'apply', 'apply-status'],
      'explore': ['video-detail'],
      'feed': [],
      'academies': ['academy-detail', 'apply', 'apply-status'],
      'profile': ['edit-profile', 'settings']
    }
  });
});

// ========== SCREEN READY HOOK ==========

function onScreenReady(screenId) {
  if (screenId === 'otp') {
    const firstInput = document.querySelector('.otp-inputs input');
    if (firstInput) setTimeout(() => firstInput.focus(), 300);
  }
}
