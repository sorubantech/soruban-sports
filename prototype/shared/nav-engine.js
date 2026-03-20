/* ============================================
   Soruban Chopify — Shared Navigation Engine
   ============================================ */

// --- Screen History Stack ---
const screenHistory = [];
let currentScreen = null;

// --- Tab-to-Screen Mapping (override per app) ---
let tabMapping = {};
let defaultScreen = 'home';

// --- Initialize Navigation ---
function initNav(config = {}) {
  if (config.tabMapping) tabMapping = config.tabMapping;
  if (config.defaultScreen) defaultScreen = config.defaultScreen;

  // Navigate to default screen
  navigateTo(defaultScreen);
}

// --- Navigate To Screen ---
function navigateTo(screenId) {
  if (currentScreen === screenId) return;

  // Push current to history (if exists)
  if (currentScreen) {
    screenHistory.push(currentScreen);
  }

  currentScreen = screenId;
  renderScreen(screenId);
}

// --- Go Back ---
function goBack() {
  if (screenHistory.length === 0) return;

  const prevScreen = screenHistory.pop();
  currentScreen = prevScreen;
  renderScreen(prevScreen);
}

// --- Render Screen ---
function renderScreen(screenId) {
  const contentEl = document.getElementById('screen-content');
  const bottomNav = document.getElementById('bottom-nav');

  if (!contentEl) return;

  // Check if screen exists
  if (typeof screens === 'undefined' || !screens[screenId]) {
    contentEl.innerHTML = `
      <div class="screen-pad screen-enter">
        <div class="empty-state">
          <i class="fas fa-exclamation-triangle"></i>
          <div class="empty-title">Screen Not Found</div>
          <div class="empty-desc">The screen "${screenId}" is not available yet.</div>
          <button class="btn btn-primary mt-xl" onclick="goBack()">
            <i class="fas fa-arrow-left"></i> Go Back
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Render screen content
  contentEl.innerHTML = screens[screenId]();
  contentEl.scrollTop = 0;

  // Show/hide bottom nav
  const hideNavScreens = ['splash', 'login', 'otp', 'type-selection', 'onboarding', 'health-onboarding', 'senior-profile-setup'];
  if (bottomNav) {
    bottomNav.style.display = hideNavScreens.includes(screenId) ? 'none' : 'flex';
    // Adjust content height
    contentEl.classList.toggle('full-height', hideNavScreens.includes(screenId));
  }

  // Highlight correct nav tab
  highlightNavTab(screenId);

  // Run any screen-specific init (charts, etc.)
  if (typeof onScreenReady === 'function') {
    setTimeout(() => onScreenReady(screenId), 50);
  }
}

// --- Highlight Nav Tab ---
function highlightNavTab(screenId) {
  // Find parent tab for this screen
  let activeTab = screenId;
  for (const [tab, childScreens] of Object.entries(tabMapping)) {
    if (childScreens.includes(screenId)) {
      activeTab = tab;
      break;
    }
  }

  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === activeTab);
  });
}

// --- Theme Toggle ---
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');

  // Update toggle icon
  const toggleBtn = document.querySelector('.theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = isDark
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  }

  // Save preference
  localStorage.setItem('soruban-theme', isDark ? 'light' : 'dark');

  // Reinitialize charts if needed
  if (typeof reinitCharts === 'function') {
    setTimeout(reinitCharts, 100);
  }
}

// --- Load Theme Preference ---
function loadThemePreference() {
  const saved = localStorage.getItem('soruban-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
}

// --- Filter Chip Toggle ---
function toggleFilter(el) {
  // If in a filter-row, deactivate siblings first (single-select)
  const row = el.closest('.filter-row');
  if (row) {
    row.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  }
  el.classList.add('active');
}

// --- Toggle Multi-select (checkboxes) ---
function toggleCheck(el) {
  el.classList.toggle('active');
}

// --- Tab Switching ---
function switchTab(el, contentPrefix) {
  // Deactivate sibling tabs
  const tabContainer = el.closest('.tabs, .tabs-underline');
  if (tabContainer) {
    tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  }
  el.classList.add('active');

  // Show/hide tab content
  if (contentPrefix) {
    const tabId = el.dataset.tab;
    document.querySelectorAll(`[data-tab-content^="${contentPrefix}"]`).forEach(c => {
      c.style.display = 'none';
    });
    const target = document.querySelector(`[data-tab-content="${contentPrefix}-${tabId}"]`);
    if (target) target.style.display = '';
  }
}

// --- Slot Picker ---
function selectSlot(el) {
  const container = el.closest('.slot-picker') || el.parentElement;
  container.querySelectorAll('.slot-option').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

// --- Toggle Class Helper ---
function toggleEl(selector) {
  const el = document.querySelector(selector);
  if (el) el.classList.toggle('active');
}

// --- Toast Notification System ---
function showToast(msg, type = 'info', duration = 3000) {
  // Remove existing toast
  const existing = document.getElementById('soruban-toast');
  if (existing) existing.remove();

  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
  const colors = { success: '#10b981', error: '#ef4444', info: '#3b82f6', warning: '#f59e0b' };

  const toast = document.createElement('div');
  toast.id = 'soruban-toast';
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${msg}`;
  toast.style.cssText = `position:fixed;top:20px;left:50%;transform:translateX(-50%);background:${colors[type] || colors.info};color:#fff;padding:12px 20px;border-radius:12px;font-size:14px;font-weight:500;z-index:10000;display:flex;align-items:center;gap:8px;box-shadow:0 4px 20px rgba(0,0,0,0.3);animation:toastIn 0.3s ease;max-width:90%;`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --- Modal System ---
function showModal(title, contentHtml, actions = []) {
  const existing = document.getElementById('soruban-modal');
  if (existing) existing.remove();

  const actionsHtml = actions.length > 0
    ? actions.map(a => {
        const btnClass = a.class || a.style || 'btn-primary';
        const btnAction = a.onclick || a.action || 'closeModal()';
        return `<button class="btn ${btnClass}" onclick="${btnAction}">${a.label}</button>`;
      }).join('')
    : `<button class="btn btn-primary btn-full" onclick="closeModal()">OK</button>`;

  const modal = document.createElement('div');
  modal.id = 'soruban-modal';
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn 0.2s ease;';
  modal.innerHTML = `
    <div style="background:var(--bg-primary);border-radius:16px;padding:24px;max-width:360px;width:100%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 40px rgba(0,0,0,0.3);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <h3 style="font-size:17px;font-weight:700;color:var(--text-primary);margin:0;">${title}</h3>
        <button onclick="closeModal()" style="background:none;border:none;color:var(--text-tertiary);font-size:18px;cursor:pointer;padding:4px;"><i class="fas fa-times"></i></button>
      </div>
      <div style="color:var(--text-secondary);font-size:14px;line-height:1.5;">${contentHtml}</div>
      <div style="display:flex;gap:10px;margin-top:20px;">${actionsHtml}</div>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.body.appendChild(modal);
}

function closeModal() {
  const modal = document.getElementById('soruban-modal');
  if (modal) modal.remove();
}

// --- Alert Placeholder (redirects to toast) ---
function showAlert(msg) {
  showToast(msg || 'This feature will be available in the full app!');
}

// --- OTP Input Handler ---
function handleOtpInput(el, index) {
  const value = el.value;
  if (value.length === 1) {
    el.classList.add('otp-fill');
    // Move to next input
    const next = el.nextElementSibling;
    if (next && next.tagName === 'INPUT') {
      next.focus();
    } else {
      // Last digit entered — auto-trigger login after 500ms
      const otpContainer = el.closest('.otp-inputs') || el.parentElement;
      const allInputs = otpContainer.querySelectorAll('input');
      const allFilled = Array.from(allInputs).every(inp => inp.value.length === 1);
      if (allFilled) {
        el.blur();
        setTimeout(function() {
          // Try to find verify/login button and click it, or navigate directly
          const verifyBtn = document.querySelector('.otp-verify-btn') || document.querySelector('[onclick*="type-selection"], [onclick*="navigateTo"]');
          if (verifyBtn) {
            verifyBtn.click();
          } else if (typeof navigateTo === 'function') {
            navigateTo('type-selection');
          }
        }, 500);
      }
    }
  }
  if (value.length === 0) {
    // Move to previous input
    const prev = el.previousElementSibling;
    if (prev && prev.tagName === 'INPUT') {
      prev.focus();
    }
  }
}

// --- Quantity Update ---
function updateQty(btn, delta) {
  const container = btn.closest('.qty-selector');
  const valueEl = container.querySelector('.qty-value');
  let val = parseInt(valueEl.textContent) || 1;
  val = Math.max(1, val + delta);
  valueEl.textContent = val;
}

// --- Inject Toast/Modal CSS Animations ---
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(-20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
    @keyframes toastOut { from { opacity:1; transform:translateX(-50%) translateY(0); } to { opacity:0; transform:translateX(-50%) translateY(-20px); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  `;
  document.head.appendChild(style);
})();

// --- Initialize on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  loadThemePreference();
});
