import { FormData } from 'src/components/Contact/page';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      window.location.href = '/';
    })
    .catch((err) => {
      alert(err);
    });
}