function BenefitCard({ icons, text }) {
  const [MainIcon, BadgeIcon] = icons;

  return (
    <div
      tabIndex={0}
      role="article"
      className="group relative w-full overflow-hidden rounded-3xl border border-orange-100 bg-white p-4 transition-all duration-300 outline-none hover:-translate-y-2 hover:shadow-2xl focus:-translate-y-2 focus:shadow-2xl"
    >
      {/* Top hover line */}
      <div className="pointer-events-none absolute top-0 left-0 h-1 w-full -translate-x-full bg-linear-to-r from-orange-400 via-orange-600 to-black transition-transform duration-700 ease-out group-hover:translate-x-0 group-focus:translate-x-0" />

      <div className="mb-3 flex justify-between">
        <MainIcon className="h-10 w-10 rounded-full bg-[#BD50001A] p-1 text-[#FF6C00] transition-transform duration-700 group-hover:rotate-360 group-focus:rotate-360" />
        <BadgeIcon className="h-10 w-10" />
      </div>

      <p className="mt-2 text-center font-mono font-semibold md:text-xl">
        {text}
      </p>
    </div>
  );
}

export default BenefitCard;
