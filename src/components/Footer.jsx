import { useEffect, useState } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-slate-100 py-4 text-center text-sm text-black">
      © Copyright <span className="font-semibold">Liv Muztang</span> All Rights
      Reserved
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-6 rounded-md bg-[#FF6C00] p-3 text-white transition hover:brightness-90"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
