import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-5xl ">
            All Your Digital Products
            <strong className="font-extrabold  text-primary p-2 sm:block">Is One Click Away</strong>
          </h2>

          <p className="mt-4  sm:text-xl/relaxed">
            We are here to help merchants win more market share
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
