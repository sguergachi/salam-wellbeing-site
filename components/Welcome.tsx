import React from 'react';

export default function Welcome() {
  return (
    <div style={{
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        fontWeight: '300',
        letterSpacing: '2px'
      }}>
        Welcome
      </h1>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
        opacity: '0.9'
      }}>
        This is a simple single-page website built with Astro and React.
        <br />
        Clean, modern, and ready for your content.
      </p>
      <div style={{
        fontSize: '0.9rem',
        opacity: '0.7',
        marginTop: '2rem'
      }}>
        Built with ❤️ using Astro + React
      </div>
    </div>
  );
}
