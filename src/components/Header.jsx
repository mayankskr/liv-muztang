import { useEffect, useState } from 'react';
import PhoneButton from './PhoneButton';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-10 flex w-full items-center justify-between px-2 py-3 transition duration-300 md:px-8 ${scrolled ? 'bg-white/30 backdrop-blur-md' : ''}`}
    >
      <img
        src="https://www.anmolherb.in/assets/img/logo.png"
        alt="Liv Muztang"
        className="h-10 w-auto"
      />
      <PhoneButton content="+91-9311900247" />
    </header>
  );
}

export default Header;
