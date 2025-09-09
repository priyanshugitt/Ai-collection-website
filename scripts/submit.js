export function initializeSubmitForm() {
  const submitForm = document.getElementById('submitForm');
  const successMessage = document.getElementById('successMessage');
  
  if (!submitForm) return;
  
  submitForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Validate form data
  if (!validateForm(data)) {
    return;
  }
  
  // Process tags
  if (data.tags) {
    data.tags = data.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0).slice(0, 5);
  }
  
  // Simulate form submission
  simulateSubmission(data);
}

function validateForm(data) {
  const requiredFields = ['toolName', 'category', 'toolUrl', 'description', 'pricing', 'contactEmail', 'terms'];
  
  for (const field of requiredFields) {
    if (!data[field] || (field === 'terms' && data[field] !== 'on')) {
      alert(`Please fill in all required fields.`);
      return false;
    }
  }
  
  // Validate URL
  try {
    new URL(data.toolUrl);
  } catch {
    alert('Please enter a valid URL.');
    return false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.contactEmail)) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  return true;
}

function simulateSubmission(data) {
  const submitButton = document.querySelector('[data-id="submit-button"]');
  const successMessage = document.getElementById('successMessage');
  const form = document.getElementById('submitForm');
  
  // Show loading state
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';
  
  // Simulate API call delay
  setTimeout(() => {
    // Hide form and show success message
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
    
    // Re-initialize Lucide icons for the success message
    if (window.lucide) {
      lucide.createIcons();
    }
    
    // Store submission data (in a real app, this would be sent to a server)
    console.log('Tool submission:', data);
    
    // Reset form after success (optional)
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      successMessage.classList.add('hidden');
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Tool for Review';
    }, 5000);
  }, 2000);
}