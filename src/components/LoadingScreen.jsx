"use client";

import { useEffect, useState } from 'react';
import logo from '../assets/logo1.webp';
import '../styles/loading.css';

/**
 * LoadingScreen — waits for real frame preloading progress dispatched
 * by page.jsx via a custom window event: "frameload-progress"
 *   detail: { loaded: number, total: number }
 * and "frameload-complete" when all images are ready.
 */
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    // Block scrolling while loading
    document.body.style.overflow = 'hidden';

    // Listen for incremental progress from page.jsx frame preloading
    const handleProgress = (e) => {
      const { loaded, total } = e.detail;
      const pct = Math.min(Math.round((loaded / total) * 100), 100);
      setProgress(pct);
    };

    // Listen for completion signal
    const handleComplete = () => {
      setProgress(100);
      setAllLoaded(true);
    };

    // Fallback: if no events received within 500ms of mount, assume old path
    // and run the 2-second fake timer as backup
    let fallbackTimer = null;
    const fallbackCheckTimeout = setTimeout(() => {
      // If page hasn't sent any progress events yet, start a backup fake progress
      // This handles cases where page.jsx might not have the new code yet
      fallbackTimer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(fallbackTimer);
            return prev;
          }
          return prev + 2;
        });
      }, 40);
    }, 600);

    window.addEventListener('frameload-progress', handleProgress);
    window.addEventListener('frameload-complete', handleComplete);

    return () => {
      window.removeEventListener('frameload-progress', handleProgress);
      window.removeEventListener('frameload-complete', handleComplete);
      clearTimeout(fallbackCheckTimeout);
      if (fallbackTimer) clearInterval(fallbackTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Dismiss once fully loaded and progress visually reaches 100
  useEffect(() => {
    if (allLoaded && progress >= 100) {
      const t = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = 'auto';
        }, 600); // fade-out duration
      }, 300); // brief hold at 100%
      return () => clearTimeout(t);
    }
  }, [allLoaded, progress]);

  if (!isVisible) return null;

  const splitPercent = 48;

  return (
    <div className={`loading-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-text-wrapper">
          <svg width="250" height="60" viewBox="0 0 250 60">
            <defs>
              <path id="textCurve" d="M 25 50 Q 125 0 225 50" fill="transparent" />
            </defs>
            {/* Base faded text */}
            <text className="loading-text-arch base-text-arch">
              <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
                LOADING
              </textPath>
            </text>
            {/* Filled red text, clipped by progress */}
            <text
              className="loading-text-arch fill-text-arch"
              style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
            >
              <textPath href="#textCurve" startOffset="50%" textAnchor="middle">
                LOADING
              </textPath>
            </text>
          </svg>

          {/* Progress percentage display */}
          <div style={{
            marginTop: '12px',
            fontFamily: 'var(--font-body, Inter, sans-serif)',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.15em',
            color: 'rgba(233,238,242,0.4)',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
            {progress}%
          </div>
        </div>

        <div className="logo-loading-wrapper">
          {/* Invisible spacer */}
          <img src={logo.src || logo} alt="" className="loading-logo" style={{ visibility: 'hidden' }} />
          {/* Bottom portion (Text) - Always fully visible */}
          <img
            src={logo.src || logo}
            alt="Loading Logo Text"
            className="loading-logo split-logo"
            style={{ clipPath: `inset(${splitPercent}% 0 0 0)` }}
          />
          {/* Top portion (Arches) - Faded background */}
          <img
            src={logo.src || logo}
            alt="Loading Logo Arches Base"
            className="loading-logo split-logo base-logo"
            style={{ clipPath: `inset(0 0 ${100 - splitPercent}% 0)` }}
          />
          {/* Top portion (Arches) - Animated fill */}
          <img
            src={logo.src || logo}
            alt="Loading Logo Arches Fill"
            className="loading-logo split-logo fill-logo"
            style={{ clipPath: `inset(0 ${100 - progress}% ${100 - splitPercent}% 0)` }}
          />
        </div>
      </div>
    </div>
  );
}
