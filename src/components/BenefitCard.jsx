function BenefitCard({ Icon, text }) {
  const [MainIcon, BadgeIcon] = Icon;

  return (
    <div
      tabIndex={0}
      className="BenefitCard group relative w-full items-stretch bg-white rounded-3xl p-4 border border-orange-100
                 hover:-translate-y-2 hover:shadow-2xl
                 transition-all duration-3000ms outline-none overflow-hidden"
    >
    <div className="absolute top-0 left-0 h-1 w-full overflow-hidden
                transform -translate-x-full
                group-hover:translate-x-0 group-focus:translate-x-0 
                transition-transform duration-700 ease-out
                bg-linear-to-r from-orange-400 via-orange-600 to-black
                pointer-events-none">
    </div>
      <div className="flex justify-between mb-3">
        <MainIcon className="w-10 h-10 text-[#FF6C00] bg-[#BD50001A] rounded-full p-1 group-hover:rotate-360 group-focus:rotate-360  transition duration-700" />
        <BadgeIcon className="w-10 h-10" />
      </div>

      <p className="font-mono font-semibold text-center md:text-xl mt-2">
        {text}
      </p>
    </div>
  );
}

export default BenefitCard;
