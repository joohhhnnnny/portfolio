import { useEffect, useState } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      // Handle active section
      const handleActiveSection = () => {
        const sections = ['home', 'about', 'projects', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) setActiveSection(current);
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleActiveSection);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleActiveSection);
      };
    }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300`}
        style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          paddingTop: isScrolled ? '15px' : '20px',
          paddingBottom: '15px'
        }}
      >
        <div className="max-w-full px-12">
          <div className="flex items-center justify-center">
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden fixed top-8 right-8 z-50 p-4 rounded-xl transition-all duration-300 ${
                menuOpen ? 'rotate-90 scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setMenuOpen(prev => !prev)}
              style={{
                backgroundColor: menuOpen ? 'var(--autumn-accent)' : 'var(--autumn-brown)',
                color: 'var(--autumn-cream)',
                boxShadow: '0 8px 32px rgba(127, 85, 57, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation - Floating Buttons */}
            <div className="items-center justify-end hidden md:flex" style={{ gap: '24px' }}>
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-lg font-semibold text-sm uppercase tracking-wider ${
                    activeSection === item.href.slice(1)
                      ? 'nav-button-active'
                      : 'nav-button'
                  }`}
                  style={{
                    padding: '8px 30px',
                    backgroundColor: activeSection === item.href.slice(1) 
                      ? 'var(--autumn-brown)' 
                      : 'rgba(237, 224, 212, 0.9)',
                    color: activeSection === item.href.slice(1) 
                      ? 'var(--autumn-cream)' 
                      : 'var(--text-primary)',
                    border: `2px solid ${
                      activeSection === item.href.slice(1) 
                        ? 'var(--autumn-brown)' 
                        : 'var(--autumn-tan)'
                    }`,
                    backdropFilter: 'blur(15px)',
                    boxShadow: activeSection === item.href.slice(1)
                      ? '0 8px 25px rgba(127, 85, 57, 0.4)'
                      : '0 4px 15px rgba(127, 85, 57, 0.2)',
                    animationDelay: `${index * 0.1}s`,
                    minWidth: '100px',
                    textAlign: 'center',
                    display: 'inline-block',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.target.style.transform = 'translateY(-3px) scale(1.02)';
                      e.target.style.backgroundColor = 'var(--autumn-beige)';
                      e.target.style.borderColor = 'var(--autumn-brown)';
                      e.target.style.color = 'var(--autumn-dark-brown)';
                      e.target.style.boxShadow = '0 12px 28px rgba(127, 85, 57, 0.25), 0 4px 12px rgba(127, 85, 57, 0.15)';
                      e.target.style.filter = 'brightness(1.05)';
                      
                      // Animate underline from center outward
                      const underline = e.target.querySelector('.nav-underline');
                      if (underline) {
                        underline.style.width = '100%';
                      }
                      
                      // Extra protection for text
                      const textSpan = e.target.querySelector('span');
                      if (textSpan) {
                        textSpan.style.background = 'none !important';
                        textSpan.style.backgroundColor = 'transparent !important';
                        textSpan.style.backgroundImage = 'none !important';
                        textSpan.style.WebkitBackgroundClip = 'initial !important';
                        textSpan.style.WebkitTextFillColor = 'currentColor !important';
                        textSpan.style.backgroundClip = 'initial !important';
                        textSpan.style.color = 'inherit !important';
                        textSpan.style.textShadow = 'none !important';
                        
                        // Special handling for About button
                        if (item.label === 'About') {
                          textSpan.style.setProperty('background', 'transparent', 'important');
                          textSpan.style.setProperty('-webkit-background-clip', 'initial', 'important');
                          textSpan.style.setProperty('-webkit-text-fill-color', 'inherit', 'important');
                          textSpan.classList.remove('text-gradient-autumn');
                        }
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.href.slice(1)) {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.backgroundColor = 'rgba(237, 224, 212, 0.9)';
                      e.target.style.borderColor = 'var(--autumn-tan)';
                      e.target.style.color = 'var(--text-primary)';
                      e.target.style.boxShadow = '0 4px 15px rgba(127, 85, 57, 0.2)';
                      e.target.style.filter = 'brightness(1)';
                      
                      // Animate underline back to center (collapse)
                      const underline = e.target.querySelector('.nav-underline');
                      if (underline) {
                        underline.style.width = '0%';
                      }
                      
                      // Extra protection for text
                      const textSpan = e.target.querySelector('span');
                      if (textSpan) {
                        textSpan.style.background = 'none !important';
                        textSpan.style.backgroundColor = 'transparent !important';
                        textSpan.style.backgroundImage = 'none !important';
                        textSpan.style.WebkitBackgroundClip = 'initial !important';
                        textSpan.style.WebkitTextFillColor = 'currentColor !important';
                        textSpan.style.backgroundClip = 'initial !important';
                        textSpan.style.color = 'inherit !important';
                        textSpan.style.textShadow = 'none !important';
                        
                        // Special handling for About button
                        if (item.label === 'About') {
                          textSpan.style.setProperty('background', 'transparent', 'important');
                          textSpan.style.setProperty('-webkit-background-clip', 'initial', 'important');
                          textSpan.style.setProperty('-webkit-text-fill-color', 'inherit', 'important');
                          textSpan.classList.remove('text-gradient-autumn');
                        }
                      }
                    }
                  }}
                >
                  <span 
                    className="nav-text-with-underline"
                    style={{ 
                      position: 'relative',
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                      background: 'none !important',
                      backgroundColor: 'transparent !important',
                      WebkitBackgroundClip: 'initial !important',
                      WebkitTextFillColor: 'currentColor !important',
                      backgroundClip: 'initial !important',
                      textFillColor: 'currentColor !important',
                      color: 'inherit !important',
                      MozBackgroundClip: 'initial !important',
                      MsBackgroundClip: 'initial !important',
                      display: 'inline-block'
                    }}
                  >
                    {item.label}
                    
                    {/* Center-outward underline animation */}
                    <div
                      className="nav-underline"
                      style={{
                        position: 'absolute',
                        bottom: '-3px',
                        left: '50%',
                        width: '0%',
                        height: '2px',
                        backgroundColor: 'var(--autumn-dark-brown)',
                        transform: 'translateX(-50%)',
                        transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        borderRadius: '1px'
                      }}
                    />
                  </span>
                  
                  {/* Shimmer effect overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      transition: 'all 0.6s ease',
                      zIndex: 1
                    }}
                  />
                  
                  {/* Active indicator dot */}
                  {activeSection === item.href.slice(1) && (
                    <div 
                      className="absolute w-2 h-2 transform -translate-x-1/2 rounded-full"
                      style={{ 
                        backgroundColor: 'var(--autumn-cream)',
                        bottom: '-6px',
                        left: '50%',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-all duration-300 ${
          menuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'var(--gradient-warm)'
        }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen px-6 space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-center py-6 px-12 rounded-2xl font-bold text-2xl uppercase tracking-wider transition-all duration-500 transform ${
                menuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              } ${
                activeSection === item.href.slice(1) 
                  ? 'scale-110' 
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: activeSection === item.href.slice(1) 
                  ? 'var(--autumn-brown)' 
                  : 'rgba(237, 224, 212, 0.9)',
                color: activeSection === item.href.slice(1) 
                  ? 'var(--autumn-cream)' 
                  : 'var(--text-primary)',
                border: `3px solid ${
                  activeSection === item.href.slice(1) 
                    ? 'var(--autumn-brown)' 
                    : 'var(--autumn-tan)'
                }`,
                backdropFilter: 'blur(10px)',
                transitionDelay: `${index * 0.1}s`,
                boxShadow: activeSection === item.href.slice(1) 
                  ? '0 10px 30px rgba(127, 85, 57, 0.3)' 
                  : '0 5px 15px rgba(127, 85, 57, 0.1)'
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
            </a>
          ))}
          
          {/* Close instruction */}
          <div 
            className={`mt-12 text-center transition-all duration-700 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              color: 'var(--text-secondary)',
              transitionDelay: '0.4s'
            }}
          >
            <p className="text-sm font-medium">Tap anywhere to close menu</p>
          </div>
        </div>
        
        {/* Tap to close overlay */}
        <div 
          className="absolute inset-0 -z-10"
          onClick={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
};