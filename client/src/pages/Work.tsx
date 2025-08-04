import { Helmet } from "react-helmet-async";

const Work = () => {
  return (
    <div className="bg-[var(--tetColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet key={window.location.pathname}>
        <title>Digital Product, Branding & eCommerce Services</title>
      </Helmet>
      <div className="mx-auto max-w-6xl">
        <div className="">
          <h1 className="h-screen py-20 text-8xl font-bold w-1/2 text-[#252422]">
            Easy to understand. ● Impossible to ignore.
          </h1>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div>
            <ul className="grid grid-cols-3 gap-1">
              <li>
                <a href="google.com">Services</a>
              </li>
              <li>
                <a href="google.com">Industries</a>
              </li>
              <li>
                <a href="google.com">All Work</a>
              </li>
            </ul>
          </div>

          <div className="w-3/5 ml-auto">
            <p>
              The work we create lives at the intersection of clarity and
              surprise and positions brands in culture through shared values and
              ideals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
