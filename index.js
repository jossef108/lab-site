 // Initialize Lucide icons
 lucide.createIcons();
    
 // Mobile menu toggle functionality
 const menuToggle = document.getElementById('menuToggle');
 const mobileMenu = document.getElementById('mobileMenu');
 let isMenuOpen = false;
 
 menuToggle.addEventListener('click', () => {
   isMenuOpen = !isMenuOpen;
   
   if (isMenuOpen) {
     mobileMenu.classList.add('open');
     menuToggle.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
   } else {
     mobileMenu.classList.remove('open');
     menuToggle.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
   }
   
   // Refresh icons after changing them
   lucide.createIcons();
 });
  // Chatbot button functionality
  const chatbotButton = document.getElementById('chatbotButton');
 chatbotButton.addEventListener('click', () => {
   // Redirect to chatbot page
   window.location.href = "./chat-bot/public/chat-bot.html"; // Change this to your actual chatbot page URL
 });

 // Stop pulse animation when hovering
 chatbotButton.addEventListener('mouseenter', () => {
   chatbotButton.classList.remove('pulse');
 });

 chatbotButton.addEventListener('mouseleave', () => {
   chatbotButton.classList.add('pulse');
 });