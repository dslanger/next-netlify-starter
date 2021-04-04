// const menu = () => {
//     const sidedrawer = document.getElementById('sidedrawer');
//     const menuOpenBtn = document.getElementById('menu-open');
//     const menuCloseBtn = document.getElementById('menu-close');
//     console.log('neutral menu');
//     menuOpenBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         sidedrawer.classList.add('active');
//         console.log('open menu');
//     });
//     menuCloseBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//         sidedrawer.classList.remove('active');
//         console.log('close menu');
//     });

// };
// export default menu;

export default function Menu() {
    return (
        <section
        id="sidedrawer"
        className="sidedrawer fixed inset-0 overflow-hidden z-20"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* <!-- Background overlay, show/hide based on slide-over state. --> */}
          <div className="absolute inset-0" aria-hidden="true"></div>

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            {/* <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      --> */}
            <div className="w-screen">
              <div
                className="h-full py-6 bg-blue-400 text-white shadow-xl overflow-y-scroll"
              >
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-end">
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        id="menu-close"
                        className="rounded-md text-white hover:text-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex"
                      >
                        <span className="sr-only">Close panel</span>
                        <span>Close</span>
                        {/* <i className="fal fa-bars"></i> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 relative px-4 sm:px-6">
                  <div className="container grid grid-cols-10"> 
                    <div className="col-span-6 pr-16 pb-16">
                      <a
                        href="#"
                        className="text-white inline-block mb-2 text-3xl font-semibold"
                        >Data Portal <i className="text-2xl fal fa-arrow-right"></i></a>
                      <p className="mb-12">
                        The Utility Transition Hub<sup>TM</sup> Portal is a
                        flexible, interactive data portal that allows you to
                        track and analyze utility progress through the lenses of
                        finance, operations and policies, and understand the
                        impacts on customers, investors and emissions.
                      </p>
                      <a
                        href="#"
                        className="text-white inline-block mb-2 text-3xl font-semibold"
                        >Publications <i className="text-2xl fal fa-arrow-right"></i></a>
                      <p>
                        The Utility Transition Hub<sup>TM</sup> publications
                        page is intended to house blogs, reports and case
                        studies that present key finding and solutions based on
                        Hub data, on an ongoing basis. RMI welcomes partnership
                        and co-authorship with a variety of stakeholders, on
                        insights that emerge from this data.
                      </p>
                    </div>
                    <div className="col-span-4 pl-16">
                      <ul className="mt-6">
                        <li className="mb-4">
                          <a href="#" className="font-semibold text-xl"
                            >Who Should Use This</a>
                        </li>
                        <li className="mb-4">
                          <a href="#" className="font-semibold text-xl"
                            >Data &amp; Methodology</a
                          >
                        </li>
                        <li className="mb-4">
                          <a href="#" className="font-semibold text-xl">Our Team</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container mt-auto pt-2 py-1">
                    <span className="mr-4">Created by</span
                    ><img
                      src="/images/rmi_horizontal_white.svg"
                      alt="rmi-logo"
                      className="inline-block align-baseline h-6 mr-2"/>
                    <a href="https://rmi.org" target="_blank">Click here to visit RMI.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
