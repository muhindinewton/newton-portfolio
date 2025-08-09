// Contact Form Submission Handler with Email Integration
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitButton = contactForm.querySelector('.btn[type="submit"]');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');
        
        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            showNoticeMessage('Please fill in all required fields (Name and Email).', 'error');
            return;
        }
        
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Submitting...';
        submitButton.disabled = true;
        
        const formData = new FormData();
        formData.append('name', nameInput.value);
        formData.append('email', emailInput.value);
        formData.append('message', messageTextarea.value);
        
        fetch('https://formspree.io/f/mzzvyzqa', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                nameInput.value = '';
                emailInput.value = '';
                messageTextarea.value = '';
                
                showNoticeMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showNoticeMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        })
        .finally(() => {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
    });
    
    function showNoticeMessage(message, type = 'success') {
        const existingNotice = document.querySelector('.form-notice');
        if (existingNotice) {
            existingNotice.remove();
        }

        const notice = document.createElement('div');
        notice.className = 'form-notice';
        
        const bgColor = type === 'success' ? '#10B981' : '#EF4444';
        const icon = type === 'success' ? '✅' : '⚠️';
        
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
    
        if (!document.querySelector('#notice-animation-styles')) {
            const style = document.createElement('style');
            style.id = 'notice-animation-styles';
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
        setTimeout(function() {
            if (notice.parentNode) {
                notice.firstElementChild.style.animation = 'fadeOut 0.5s ease-in';
                setTimeout(function() {
                    if (notice.parentNode) {
                        notice.remove();
                    }
                }, 500);
            }
        }, 3000);
    }
});