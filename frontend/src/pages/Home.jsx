import React, { useState } from 'react'; // Fixed: Imported useState
import './Home.css'; // Fixed: Added import for Home.css

const Home = () => {
  // Fixed: Removed the accidental 'return (' from here
  const [url, setUrl] = useState('');

  const platforms = [
    { name: 'YouTube', icon: '📹', color: '#FF0000' },
    { name: 'Instagram', icon: '📸', color: '#E1306C' },
    { name: 'TikTok', icon: '🎵', color: '#00F2FE' },
    { name: 'Facebook', icon: '👥', color: '#1877F2' },
    { name: 'X', icon: '🐦', color: '#1DA1F2' },
    { name: 'Vimeo', icon: '🎬', color: '#1AB7EA' }
  ];

  const features = [
    { title: 'Lightning fast', desc: 'Optimized servers deliver downloads at maximum speed, every time.', icon: '⚡' },
    { title: 'Private & secure', desc: 'No tracking. No watermarks. Your downloads stay yours.', icon: '🛡️' },
    { title: 'Cloud library', desc: 'Sync favorites across devices and re-download anytime.', icon: '☁️' },
    { title: 'Audio extraction', desc: 'Pull MP3, WAV, or AAC from any video instantly.', icon: '🎵' },
    { title: 'Images & reels', desc: 'Carousel posts, stories, reels — captured exactly as posted.', icon: '🖼️' },
    { title: 'Up to 4K', desc: 'Choose from 360p all the way to crisp 4K with HDR support.', icon: '✨' }
  ];

  const steps = [
    { num: '01', title: 'Paste the URL', desc: 'Copy any link from a supported platform.' },
    { num: '02', title: 'Pick quality', desc: 'Choose video resolution or audio format.' },
    { num: '03', title: 'Download', desc: 'Files appear instantly in your library.' }
  ];

  const testimonials = [
    { quote: "Saved me hours every week. The 4K downloads from Instagram are unreal.", author: "Maya R.", role: "Content Creator" },
    { quote: "Cleanest UI of any downloader I've tried. Just works.", author: "Daniel K.", role: "Video Editor" },
    { quote: "Audio extraction is flawless. WAV quality is studio-grade.", author: "Sofia L.", role: "Podcaster" }
  ];

  return (
    <div className="mediahub-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge">✨ New: 4K & 2K downloads now available</div>
        <h1>Download from <span className="gradient-text">anywhere.</span><br />In one click.</h1>
        <p className="hero-subtitle">
          Paste your video URL and start downloading instantly. YouTube, Instagram, TikTok, Facebook, X, Vimeo — all platforms, all qualities.
        </p>

        <div className="input-container">
          <input 
            type="text" 
            placeholder="Paste YouTube, Instagram, TikTok, or any URL..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="download-btn">
            <span>📥</span> Download Now
          </button>
        </div>

        <div className="mini-tags">
          {platforms.map(p => <span key={p.name}>{p.name}</span>)}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section text-center">
        <h2>Every platform you need</h2>
        <p className="section-subtitle">Supported and battle-tested</p>
        <div className="platform-grid">
          {platforms.map(p => (
            <div key={p.name} className="platform-card">
              <div className="platform-icon" style={{ textShadow: `0 0 20px ${p.color}` }}>{p.icon}</div>
              <div className="platform-name">{p.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="text-center">Built for power users</h2>
        <p className="section-subtitle text-center">Everything you need to capture, organize, and enjoy content from across the web.</p>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <h2 className="text-center">Three steps. Done.</h2>
        <div className="steps-grid">
          {steps.map(s => (
            <div key={s.num} className="step-card">
              <div className="step-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <h2 className="text-center">Loved by creators</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="quote">"{t.quote}"</p>
              <div className="author-info">
                <div className="avatar-placeholder"></div>
                <div>
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-container">
        <div className="cta-box">
          <h2>Start downloading now</h2>
          <p>No credit card required.</p>
          <button className="cta-btn">Create free account →</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-logo">✨</span> MediaHub
        </div>
        <div className="footer-copy">© 2026 MediaHub. All rights reserved.</div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  ); // Fixed: Properly closed block with a semicolon
};

export default Home;