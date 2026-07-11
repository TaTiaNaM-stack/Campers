'use client'

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: GlobalErrorProps) {
  return (
    <div style={{ color: '#f80303', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px', fontSize: '30px', fontWeight: 'bold' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
    </div>
  );
}