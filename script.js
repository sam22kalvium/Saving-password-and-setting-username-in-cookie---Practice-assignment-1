document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  // Function to update and display the count
  function updateCount() {
    let count = getCookie('count');
    if (count === null) {
      count = 0; // Initialize cookie if it doesn't exist
    }
    count++; // Increment count
    setCookie('count', count, 30); // Update cookie with new count
    document.getElementById('countDisplay').textContent = `Page Views: ${count}`;
  }

  // Initialize count display
  if (!document.getElementById('countDisplay')) {
    let countElement = document.createElement('div');
    countElement.id = 'countDisplay';
    countElement.style.fontSize = '20px';
    countElement.style.marginTop = '10px';
    document.body.appendChild(countElement);
  }

  updateCount();
});
