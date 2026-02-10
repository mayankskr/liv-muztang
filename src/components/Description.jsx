function Description({heading,para}) {
  return (
    <section className="pt-20">
      <h1 className="mx-auto max-w-3xl text-center text-3xl leading-tight font-extrabold md:text-6xl">
        <span className="block bg-linear-to-r from-[#0b1114] via-[#613619] to-[#FF6C00] bg-clip-text py-1 text-transparent">
          {heading}
        </span>
      </h1>

      <p className="text-md mt-4 text-center font-medium md:text-2xl">
        {para}
      </p>
    </section>
  );
}

export default Description;
