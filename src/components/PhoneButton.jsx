import { PhoneIcon } from '@heroicons/react/24/solid';

function PhoneButton({ content }) {
  return (
    <div className="relative inline-flex">
      {/* Glow layer */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#FF6C00] to-[#a04300] opacity-70 blur-lg"></div>

      {/* Button */}
      <a
        href="tel:+91-9311900247"
        className="flex h-10 items-center gap-2 rounded-3xl bg-linear-to-r from-[#FF6C00] to-[#a04300] px-4 py-2 text-white transition duration-150 ease-in-out hover:brightness-90"
      >
        <PhoneIcon className="h-6 w-6" />
        <p className="font-medium">{content}</p>
      </a>
    </div>
  );
}

export default PhoneButton;
