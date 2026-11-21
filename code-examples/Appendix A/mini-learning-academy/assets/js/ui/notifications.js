// Classic script (no ES modules) so the site also works when index.html is opened directly from disk.
(function (Academy) {
"use strict";
// Small UI service for Bootstrap toast notifications.
function showToast(message) {
  const toastElement = document.getElementById("academyToast");
  const toastMessage = document.getElementById("toastMessage");
  if (!toastElement || !toastMessage || !window.bootstrap) return;
  toastMessage.textContent = message;
  window.bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 3200 }).show();
}
  Academy.showToast = showToast;
})(window.Academy = window.Academy || {});
