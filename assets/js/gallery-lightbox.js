/* Gallery lightbox: used by gallery-journal_covers.html and gallery-scientificpics.html */
(function() {
        var links = Array.prototype.slice.call(document.querySelectorAll('.gallery-card a.image-link'));
        if (!links.length) return;

        var lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.setAttribute('aria-hidden', 'true');
        lightbox.innerHTML = '' +
          '<button class="gallery-lightbox-close" type="button" aria-label="Close">&times;</button>' +
          '<button class="gallery-lightbox-prev" type="button" aria-label="Previous image">&#10094;</button>' +
          '<img alt="" />' +
          '<button class="gallery-lightbox-next" type="button" aria-label="Next image">&#10095;</button>' +
          '<div class="gallery-lightbox-caption"></div>';
        document.body.appendChild(lightbox);

        var img = lightbox.querySelector('img');
        var caption = lightbox.querySelector('.gallery-lightbox-caption');
        var closeBtn = lightbox.querySelector('.gallery-lightbox-close');
        var prevBtn = lightbox.querySelector('.gallery-lightbox-prev');
        var nextBtn = lightbox.querySelector('.gallery-lightbox-next');
        var current = 0;

        function show(index) {
          current = (index + links.length) % links.length;
          var link = links[current];
          img.src = link.getAttribute('href');
          img.alt = link.getAttribute('data-title') || '';
          caption.innerHTML = (link.getAttribute('data-caption') || link.getAttribute('data-title') || '') +
            ' <span style="opacity:.7">(' + (current + 1) + ' / ' + links.length + ')</span>';
          lightbox.classList.add('is-open');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }

        function close() {
          lightbox.classList.remove('is-open');
          lightbox.setAttribute('aria-hidden', 'true');
          img.removeAttribute('src');
          document.body.style.overflow = '';
        }

        function next() { show(current + 1); }
        function prev() { show(current - 1); }

        links.forEach(function(link, index) {
          link.addEventListener('click', function(event) {
            event.preventDefault();
            show(index);
          });
        });

        closeBtn.addEventListener('click', close);
        nextBtn.addEventListener('click', next);
        prevBtn.addEventListener('click', prev);

        lightbox.addEventListener('click', function(event) {
          if (event.target === lightbox) close();
        });

        document.addEventListener('keydown', function(event) {
          if (!lightbox.classList.contains('is-open')) return;
          if (event.key === 'Escape') close();
          if (event.key === 'ArrowRight') next();
          if (event.key === 'ArrowLeft') prev();
        });
      })();
