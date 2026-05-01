const form = document.getElementById('leadForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const channel = document.getElementById('channel').value;

  if (!name || !email) {
    formMessage.textContent = 'Please complete all required fields.';
    return;
  }

  formMessage.textContent = `Thanks ${name}. Your ${channel} onboarding call request is confirmed. We will contact you at ${email} within 24 hours.`;
  form.reset();
});
