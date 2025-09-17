export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '2' }}>
      <p>
        <a href="https://excuse-gen-api.vercel.app/api/excuse" target="_blank" rel="noopener noreferrer">Excuse API</a>
      </p>
      <p>
        <a href="https://excuse-gen-api.vercel.com/excuse.exe" target="_blank" rel="noopener noreferrer" download>Excuse EXE</a>
      </p>
      <p>
        <a href="https://excuse-gen-api.vercel.com/excuse.apk" target="_blank" rel="noopener noreferrer" download>Excuse APK</a>
      </p>
      <p>
        <a href="https://ayopili.com/terminal" target="_blank" rel="noopener noreferrer">Excuse CLI*</a>
      </p>
      <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
        *Type &quot;pili excuse&quot; within the terminal to fetch an excuse.
      </p>
    </div>
  );
}