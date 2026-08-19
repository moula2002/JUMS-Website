import { PhoneCall } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/919952620659"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12.031 0C5.383 0 0 5.384 0 12.034c0 2.12.553 4.195 1.6 6.02L.263 24l6.104-1.602c1.765.965 3.754 1.474 5.795 1.474 6.647 0 12.033-5.383 12.033-12.032C24.195 5.383 18.81.0 12.031.0zm0 21.84c-1.782 0-3.535-.48-5.064-1.386l-.364-.216-3.766.988.988-3.673-.237-.376C2.658 15.656 2.148 13.882 2.148 12.033 2.148 6.57 6.577 2.145 12.031 2.145c5.454 0 9.882 4.425 9.882 9.888 0 5.463-4.428 9.888-9.882 9.888zm5.426-7.41c-.297-.15-1.76-.87-2.032-.97-.273-.1-.473-.15-.672.15-.198.3-.77 1-.944 1.205-.174.205-.347.23-.644.08-.297-.15-1.258-.464-2.395-1.48-.885-.79-1.482-1.767-1.656-2.067-.174-.3-.018-.462.13-.611.134-.135.297-.348.446-.523.15-.174.203-.298.303-.497.1-.2.05-.373-.024-.523-.075-.15-.673-1.62-.922-2.217-.24-.58-.485-.502-.67-.512-.175-.008-.374-.01-.573-.01-.198 0-.522.074-.795.374C4.385 8.16 3.54 8.956 3.54 10.55c0 1.595 1.487 3.136 1.696 3.414.21.278 2.327 3.55 5.637 4.976 2.655 1.144 3.555 1.254 4.887 1.055 1.332-.2 3.167-1.295 3.612-2.545.446-1.25.446-2.324.312-2.544-.134-.22-.472-.346-.768-.496z"/>
        </svg>
        <span className="absolute right-14 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:+919952620659"
        className="bg-accent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <PhoneCall className="w-6 h-6" />
        <span className="absolute right-14 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
