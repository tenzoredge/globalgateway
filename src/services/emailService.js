/**
 * Client-side email/WhatsApp helpers
 *
 * This module provides small helpers to open the user's mail client (mailto:)
 * or WhatsApp (wa.me) with a prefilled message. The project is frontend-only
 * by default and uses the visitor's client for sending messages.
 */


/**
 * Small helpers to construct mailto: and wa.me links and open the user's client.
 */

/** Build a mailto: URL with encoded subject and body */
export function buildMailtoLink({ to, subject, body }) {
  const encodedTo = encodeURIComponent(to || '');
  const encodedSubject = encodeURIComponent(subject || '');
  const encodedBody = encodeURIComponent(body || '');
  return `mailto:${encodedTo}?subject=${encodedSubject}&body=${encodedBody}`;
}

/** Open the system mail client with a prefilled message */
export function openMailClient({ to, subject, body }) {
  const link = buildMailtoLink({ to, subject, body });
  // Using location.href triggers the OS mail client to open
  window.location.href = link;
}

/** Build a WhatsApp web link for a phone number (expects E.164 without +) */
export function buildWhatsAppLink({ phoneNumber, message }) {
  // phoneNumber should already include country code (e.g. 919538446588)
  const num = phoneNumber || '';
  const encoded = encodeURIComponent(message || '');
  return `https://wa.me/${num}?text=${encoded}`;
}

/** Open WhatsApp Web / App with a prefilled message */
export function openWhatsApp({ phoneNumber, message }) {
  const link = buildWhatsAppLink({ phoneNumber, message });
  window.open(link, '_blank');
}

export default {
  buildMailtoLink,
  openMailClient,
  buildWhatsAppLink,
  openWhatsApp,
};
