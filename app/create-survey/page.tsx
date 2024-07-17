// app/create-survey/page.tsx
'use client';

import { useState } from 'react';

export default function CreateSurvey() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState(''); // Assume userId is obtained from authentication

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/surveys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, userId }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Survey Title"
        required
      />
      <button type="submit">Create Survey</button>
    </form>
  );
}