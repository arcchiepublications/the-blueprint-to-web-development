// Small UI service for Bootstrap toast notifications.
export function showToast(message) {
  const toastElement = document.getElementById("academyToast");
  const toastMessage = document.getElementById("toastMessage");
  if (!toastElement || !toastMessage || !window.bootstrap) return;
  toastMessage.textContent = message;
  window.bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 3200 }).show();
}
