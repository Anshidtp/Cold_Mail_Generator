// src/services/api.js
const API_URL = 'http://localhost:8000';

export async function generateEmail(url) {
  const response = await fetch(`${API_URL}/generate-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate email');
  }

  return response.json();
}