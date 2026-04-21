// EMAILJS CONFIG
const EMAILJS_PUBLIC_KEY  = 'LWuZwk37r9Cldq856';
const EMAILJS_SERVICE_ID  = 'service_009ihwu';
const EMAILJS_OTP_TEMPLATE = 'template_6y4aick';
const EMAILJS_CONFIRM_TEMPLATE = 'template_uxoj5cd';

emailjs.init(EMAILJS_PUBLIC_KEY);

// APP STATE
let currentUser = null;
let selectedRole = 'freelancer';
let pendingOTP = null;
let pendingSignupData = null;
let otpTimerInterval = null;
let submittedBids = {};
let currentBidProject = null;

// ================= FUNCTIONS =================

// 🔹 COPY ALL YOUR JAVASCRIPT FROM:
// <script> ... </script>
// PASTE IT HERE EXACTLY (no tags)

// Example:
function switchAuthTab(tab) {
  document.getElementById('form-login').classList.toggle('hidden', tab !== 'login');
  document.getElementById('form-signup').classList.toggle('hidden', tab !== 'signup');
}

// (continue all remaining JS exactly same...)

// Init
showPage('auth');