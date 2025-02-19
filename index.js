

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  form.style.display = "none"; 
  successMessage.style.display = "block"; 
});

const reasonSelect = document.getElementById('reason');
    const cvUpload = document.getElementById('cv-upload');

    reasonSelect.addEventListener('change', function() {
      if (this.value === 'job_seeker') {
        cvUpload.style.display = 'block'; 
      } else {
        cvUpload.style.display = 'none'; 
      }
    });
