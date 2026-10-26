(function () {
  'use strict';

  function sendEvent(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const absolute = link.href || href;

    if (href.indexOf('wa.me/5515996076661') !== -1) {
      sendEvent('contact_click', {
        contact_method: 'whatsapp',
        link_url: absolute
      });
      return;
    }

    if (href.indexOf('tel:+5515996076661') !== -1) {
      sendEvent('contact_click', {
        contact_method: 'phone',
        link_url: absolute
      });
    }
  });

  document.addEventListener('submit', function (event) {
    const form = event.target;
    if (form && form.tagName === 'FORM') {
      sendEvent('form_submit', {
        form_id: form.id || '(sem-id)',
        form_action: form.action || window.location.href
      });
    }
  });
})();