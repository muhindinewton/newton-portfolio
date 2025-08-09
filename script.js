// Contact Form Submission Handler
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const submitButton = contactForm.querySelector('.btn[type="submit"]');

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    // Basic validation
    if (!nameInput.value.trim() || !emailInput.value.trim()) {
      showNoticeMessage(
        "Please fill in all required fields (Name and Email).",
        "error"
      );
      return;
    }

    // Show loading state
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = "Submitting...";
    submitButton.disabled = true;

    setTimeout(function () {
      // Clear form fields
      nameInput.value = "";
      emailInput.value = "";
      messageTextarea.value = "";

      // Reset button state
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;

      // Show success notice
      showNoticeMessage(
        "Message submitted successfully! Thank you for your message.",
        "success"
      );
    }, 1000);
  });

  function showNoticeMessage(message, type = "success") {
    const existingNotice = document.querySelector(".form-notice");
    if (existingNotice) {
      existingNotice.remove();
    }

    const notice = document.createElement("div");
    notice.className = "form-notice";

    const bgColor = type === "success" ? "#10B981" : "#EF4444";
    const icon = type === "success" ? "✅" : "⚠️";

    notice.innerHTML = `
            <div style="
                background: ${bgColor};
                color: white;
                padding: 1rem;
                border-radius: 8px;
                margin-top: 1rem;
                text-align: center;
                font-weight: 600;
                animation: slideInUp 0.5s ease-out;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            ">
                ${icon} ${message}
            </div>
        `;

    // CSS animation for the notice
    if (!document.querySelector("#notice-animation-styles")) {
      const style = document.createElement("style");
      style.id = "notice-animation-styles";
      style.textContent = `
                @keyframes slideInUp {
                    0% { 
                        opacity: 0; 
                        transform: translateY(20px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes fadeOut {
                    0% { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                    100% { 
                        opacity: 0; 
                        transform: translateY(-20px); 
                    }
                }
            `;
      document.head.appendChild(style);
    }

    contactForm.appendChild(notice);

    setTimeout(function () {
      if (notice.parentNode) {
        notice.firstElementChild.style.animation = "fadeOut 0.5s ease-in";
        setTimeout(function () {
          if (notice.parentNode) {
            notice.remove();
          }
        }, 500);
      }
    }, 2000);
  }
});
