import { useState, useEffect } from 'react';
import '../../styles/typing-animation.css';

export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, It's John Benedict Bongcac";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
    
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ 
        background: 'var(--gradient-warm)',
        position: 'relative'
      }}
    >
      {/* Decorative Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--autumn-tan) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, var(--autumn-accent) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, var(--autumn-brown) 0%, transparent 70%)`
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              backgroundColor: i % 2 === 0 ? 'var(--autumn-tan)' : 'var(--autumn-accent)',
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        className={`z-10 flex flex-col items-center px-6 text-center max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Greeting Badge */}
        <div 
          className="px-6 py-3 mb-8 transition-all duration-300 border-2 rounded-full backdrop-blur-sm hover:scale-105"
          style={{
            backgroundColor: 'rgba(237, 224, 212, 0.8)',
            borderColor: 'var(--autumn-tan)',
            color: 'var(--text-primary)'
          }}
        >
          <span className="text-sm font-medium tracking-wider">Welcome to my portfolio</span>
        </div>
        
        {/* Main Title with Typing Animation */}
        <div className="mb-8 typing-container">
          <h1 
            className="mb-2 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            style={{
              background: 'var(--gradient-deep)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {text}
            <span 
              className="animate-blink-ml1 border-r-[3px] ml-1"
              style={{ borderColor: 'var(--autumn-accent)' }}
            >
              |
            </span>
          </h1>
        </div>

        {/* Subtitle and Description */}
        <div className="mb-12 space-y-4">
          <p 
            className="text-xl font-semibold tracking-wide"
            style={{ color: 'var(--text-secondary)' }}
          >
            Computer Science Student at the University of Mindanao
          </p>
          <div 
            className="w-24 h-px mx-auto rounded-full"
            style={{ backgroundColor: 'var(--autumn-tan)' }}
          />
          <p 
            className="max-w-2xl mx-auto text-lg font-light leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Passionate <span style={{ color: 'var(--autumn-accent)', fontWeight: '600' }}>Software Developer</span> | 
            <span style={{ color: 'var(--autumn-accent)', fontWeight: '600' }}> Machine Learning Enthusiast</span> | 
            <span style={{ color: 'var(--autumn-accent)', fontWeight: '600' }}> AI Innovator</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <a 
            href="#projects" 
            className="relative px-8 py-4 overflow-hidden text-lg font-semibold transition-all duration-300 rounded-lg btn-primary group hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--button-primary)',
              color: 'var(--autumn-cream)',
              boxShadow: `0 4px 15px rgba(176, 137, 104, 0.3)`
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              View My Projects
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="relative px-8 py-4 overflow-hidden text-lg font-semibold transition-all duration-300 rounded-lg btn-secondary group hover:scale-105"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--button-secondary)',
              border: `2px solid var(--button-secondary)`,
            }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Let's Connect
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div 
            className="flex justify-center w-6 h-10 border-2 rounded-full"
            style={{ borderColor: 'var(--autumn-brown)' }}
          >
            <div 
              className="w-1 h-3 mt-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--autumn-brown)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
