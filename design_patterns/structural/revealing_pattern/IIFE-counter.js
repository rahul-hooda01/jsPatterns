const CounterModule = (function() {
    // Private variables and functions
    let count = 0;
  
    function updateDisplay() {
      document.getElementById('counter').textContent = count;
    }
  
    // Public API
    return {
      increment: function() {
        count++;
        updateDisplay();
      },
      decrement: function() {
        if (count > 0) {
          count--;
          updateDisplay();
        }
      },
      reset: function() {
        count = 0;
        updateDisplay();
      },
      init: function() {
        document.getElementById('incrementBtn').addEventListener('click', this.increment);
        document.getElementById('decrementBtn').addEventListener('click', this.decrement);
        document.getElementById('resetBtn').addEventListener('click', this.reset);
      }
    };
  })();
  
// Initialize the module when the page is fully loaded
window.onload = function() {
  CounterModule.init();
};