document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.input');
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('no-results');
    const userInputSpan = document.getElementById('userinput');
  
    input.addEventListener('input', function() {
      const filter = input.value.toLowerCase();
      
      // Check if the input is "breaktime" and redirect if true
      if (filter === 'breaktime') {
        window.location.href = 'trex.html';
        return; // Exit the function after redirection
      }
  
      let hasMatch = false;
  
      cards.forEach(card => {
        const text = card.querySelector('p').textContent.toLowerCase();
        if (text.includes(filter)) {
          card.style.display = '';
          hasMatch = true;
        } else {
          card.style.display = 'none';
        }
      });
  
      if (hasMatch) {
        noResults.style.display = 'none';
      } else {
        noResults.style.display = 'block';
        userInputSpan.textContent = input.value;
      }
    });
  });




