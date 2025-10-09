import Image from 'next/image';

export default function HomePage() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa', 
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <Image
        src="/Huroca-Icon.png" // This path points to the public folder
        alt="Huroca Logo"
        width={150} // Set the desired width of your logo
        height={150} // Set the desired height of your logo
        priority // Helps load the logo faster
      />
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#1a1a1a',
          marginTop: '2rem',
          marginBottom: '0.5rem',
        }}
      >
        Huroca is launching soon.
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '600px' }}>
        Our website is currently under construction as we prepare for our official launch. Please check back for updates.
      </p>
    </main>
  );
}