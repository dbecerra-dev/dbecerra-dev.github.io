/* Site interactions: education toggles and research cards. */

document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.edu-toggle').forEach(function (button) {
          button.addEventListener('click', function () {
            var panel = button.nextElementSibling;
            var isOpen = button.classList.toggle('active');
            button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (panel) {
              panel.classList.toggle('open', isOpen);
              panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            }
          });
        });

        document.querySelectorAll('.edu-sub').forEach(function (button) {
          button.addEventListener('click', function () {
            var panel = button.nextElementSibling;
            var isOpen = button.classList.toggle('active');
            button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (panel) {
              panel.classList.toggle('open', isOpen);
              panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            }
          });
        });
      });

document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.research-box').forEach(function (box) {
          box.setAttribute('tabindex', '0');
          box.addEventListener('click', function () { box.classList.toggle('open'); });
          box.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); box.classList.toggle('open'); }
          });
        });
      });
