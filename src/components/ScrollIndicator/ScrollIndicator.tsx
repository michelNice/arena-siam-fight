import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface ScrollIndicatorProps {
  targetId?: string;
}

export function ScrollIndicator({ targetId = 'sobre' }: ScrollIndicatorProps) {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus({ preventScroll: true });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <a 
      href={`#${targetId}`} 
      onClick={handleScrollToSection}
      className="hero__scroll-indicator" 
      aria-label="Rolar para baixo"
    >
      <span className="hero__scroll-text">ROLE PARA BAIXO</span>
      <FaChevronDown className="hero__scroll-icon" />
    </a>
  );
}