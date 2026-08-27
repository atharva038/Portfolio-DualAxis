const DEFAULT_SUBJECT = 'Project Inquiry - Dual Axis';
const DEFAULT_BODY = 'Hello Dual Axis,\n\n';

export function buildMailtoCompose(
  email: string,
  subject = DEFAULT_SUBJECT,
  body = DEFAULT_BODY
) {
  const params = new URLSearchParams();
  params.set('subject', subject);
  params.set('body', body);
  return `mailto:${email}?${params.toString()}`;
}

export function buildGmailCompose(
  email: string,
  subject = DEFAULT_SUBJECT,
  body = DEFAULT_BODY
) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: email,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function openEmailCompose(email: string) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = buildMailtoCompose(email);
    return;
  }

  const gmailWindow = window.open(buildGmailCompose(email), '_blank', 'noopener,noreferrer');
  if (!gmailWindow) {
    window.location.href = buildMailtoCompose(email);
  }
}
