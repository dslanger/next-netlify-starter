import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/bba3lqy.css"></link>
        <link
            rel="preload"
            href="/fonts/metropolis/Metropolis-Regular.woff"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Header />
      <main>
      <div className="bg-blue-600 intro pt-16 _h-128">
      <div className="container grid grid-cols-10">
        <div className="col-span-10 lg:col-span-7 z-10">
          <p
            className="text-gray-100 text-2xl max-w-lg tracking-normal font-light mt-10 mb-8"
          >
            RMI’s Utility Transition Hub<sup>TM</sup> helps key
            stakeholders—regulators, investors, policymakers, advocates, and
            utilities—chart a path to an equitable and affordable energy
            transition
          </p>
          <a
            href="https://rmi.org/scorecard"
            className="text-white bg-green p-4 font-normal text-lg hover:pointer border-green transition duration-300 border-2 hover:bg-transparent hover:text-green"
            ><i className="far fa-chart-bar"></i> Explore Our Data Portal</a
          >
        </div>
        <div className="col-span-10 lg:col-span-3 z-10">
          <h3
            className="font-semibold text-gray-100 text-lg tracking-wide font-body"
          >
            Latest Updates
          </h3>
          <ul className="max-w-xs mb-3">
            <li className="bg-blue-800 mb-2 p-3">
              <h5 className="text-gray-100 font-normal font-body text-lg">
                How to Build Clean Energy Portfolios
              </h5>
              <a href="#" className="text-blue-300">Read more</a>
            </li>
            <li className="bg-blue-800 mb-2 p-3">
              <h5 className="text-gray-100 font-normal font-body text-lg">
                Cutton Carbon While Keeping The Lights On
              </h5>
              <a href="#" className="text-blue-300">Read more</a>
            </li>
            <li className="bg-blue-800 mb-2 p-3">
              <h5 className="text-gray-100 font-normal font-body text-lg">
                Cutting Carbon While Keeping The Lights On
              </h5>
              <a href="#" className="text-blue-300">Read more</a>
            </li>
          </ul>
          <a href="/publications/" className="text-blue-300 inline-block text-md">See all publications</a>
        </div>
      </div>
      <div className="container flex justify-center items-start pt-48">
        <button
          id="intro-button"
          className="text-gray-200 text-xl flex flex-col items-center z-10 duration-300 hover:text-green"
        >
          <span>Below the Water Line</span
          ><i className="far fa-angle-down text-4xl"></i>
        </button>
      </div>
    </div>
    <div id="part-1" className="part-1 bg-blue-800">
      <div className="container grid grid-cols-12">
        <div id="scroll-steps" className="col-span-6 mt-48">
          <section className="pt-12 max-w-md text-gray-100" id="step-1">
            <div className="step">
              <p className="text-xl mb-6">
                Measurement tools today track important information—emissions as
                well as plant retirements and additions—but are limited to
                measuring <em>outcomes</em>.
              </p>
              <p className="text-xl">
                While tracking outcomes is essential, it is
                <em>insufficient</em> for assessing whether utilities are on
                track to stay within their carbon budgets.
              </p>
            </div>
          </section>
          <section className="pt-12 max-w-md text-gray-100" id="step-2">
            <p className="step text-xl mb-24">
              The <strong>Utility Transition Hub<sup>TM</sup></strong> seeks to
              surface the less visible forces—such as investment trends—that
              <em>drive future emissions outcomes</em> to enable shared action
              aligned with an equitable and affordable energy transition.
            </p>
          </section>
          <section
            className="pt-12 max-w-sm text-gray-100"
            id="step-3"
            style={{marginBottom: 50 + 'vh'}}
          >
            <div className="step">
              <h2 className="text-gray-100 text-2xl font-semibold mb-6">
                TBD Heading (NOT the "Situation")
              </h2>
              <p className="text-xl mb-24">
                The electricity sector accounts for over 30% of US carbon
                emissions and is crucial to decarbonizing another 60% by
                electrifying our transportation, buildings, and industry
                sectors.
              </p>
            </div>
          </section>
          <section
            className="pt-12 max-w-sm text-gray-100"
            id="step-4"
            style={{marginBottom: 80 + 'vh'}}
          >
            <p className="step text-xl mb-48">
              The Utility Transition Hub<sup>TM</sup> primarily focuses on
              regulated utilties—utilties directly** responsible for over
              <em>half</em> of power sector emissions.
            </p>
            <p className="step text-xl mb-48">
              These utilities have made meaningful progress, reducing emissions
              from the assets they own by 30% from 2005 to 2019.
            </p>
          </section>
          <section
            className="pt-12 max-w-sm text-gray-100"
            id="step-5"
            style={{marginBottom: 80 + 'vh'}}
          >
            <p className="step text-xl mb-48">
              However, the work of the IPCC has made clear that the next ten
              years are the decisive decade, and an even faster decarbonization
              of these utilities is needed.
            </p>
          </section>
          <section
            className="pt-12 max-w-sm text-gray-100"
            id="step-6"
            style={{marginBottom: 80 + 'vh'}}
          >
            <p className="step text-xl mb-48">
              Electrifying demand while decarbonizing electricity will require a
              massive transition from fossil fuel fuel-powered generation to
              renewable energy.
            </p>
          </section>
          <section className="pt-12 max-w-sm text-gray-100" id="step-7">
            <h2 className="text-gray-100 text-2xl font-semibold mb-6">
              TBD Heading (NOT the "Complication")
            </h2>
            <p className="step text-xl mb-6">
              While tracking <em>outcomes</em>—emissions as well as plant
              additions and retirements—is essential, it is
              <em>insufficient</em> for assessing whether utilities are on track
              to stay within their carbon budgets.
            </p>
            <p className="text-xl mb-6">
              This requires diving under the surface to identify the less
              visible forces that drive future emissions outcomes, such as:
            </p>
            <ol className="step text-xl pl-6 list-decimal">
              <li className="mb-2">Customer & Community Impacts</li>
              <li className="mb-2">Utility Investments</li>
              <li className="mb-2">Utility Operations and Planning</li>
              <li className="mb-2">State Policies and Regulations</li>
              <li className="mb-2">Federal Policies</li>
            </ol>
          </section>
        </div>
        <div id="chart-wrapper" className="chart-wrapper col-span-6 mt-48">
          <figure
            id="chart-one"
            className="chart-one pb-48"
            style="margin-bottom: 5vh"
            style={{marginBottom: 5 + 'vh'}}
          >
            <canvas id="chart-wrapper-canvas-1"></canvas>
            <figcaption className="flex items-center mt-4">
              <span className="p-3 bg-white inline-block ml-20 mr-3"></span
              ><span className="inline-block text-white text-lg font-semibold"
                >CO<sub>2</sub> Emissions (MMT)</span
              >
            </figcaption>
          </figure>
          <figure id="chart-two" className="chart-two" style={{marginBottom: 30 + 'vh'}}>
            <img src="/images/chart-two.svg" alt="" />
          </figure>
          <figure
            id="chart-three"
            className="chart-three"
            style={{marginBottom: 20 + 'vh'}}
          >
            <img src="/images/chart-3.svg" alt="" />
          </figure>
          <figure
            id="chart-four"
            className="chart-four"
            style={{marginBottom: 36 + 'vh'}}
          >
            <img src="/images/chart-4.svg" alt="" />
          </figure>
          <figure
            id="chart-five"
            className="chart-five"
            style={{marginBottom: 29 + 'vh'}}
          >
            <img src="/images/chart-5.svg" alt="" />
          </figure>
          <figure id="chart-six" className="chart-six" style={{marginBottom: 20 + 'vh'}}>
            <img src="/images/chart-6.svg" alt="" />
          </figure>
        </div>
      </div>
    </div>
    <div
      id="resolution"
      className="resolution h-screen flex flex-col items-center justify-end text-gray-100"
    >
      <div className="max-w-lg text-center">
        <h2 className="text-gray-100 text-2xl font-semibold mb-6">
          TBD Heading (NOT the "Resolution")
        </h2>
        <p className="text-xl mb-60">
          RMI’s <em>Utility Transition Hub<sup>TM</sup>™</em> empowers users to
          engage with utilities to enable a rapid, affordable, and equitable
          energy transition by surfacing and tracking the less visible forces
          that drive future emissions.
        </p>
        <button
          className="text-gray-200 text-xl text-center duration-300 hover:text-green mb-8"
        >
          <span>See Our Top Line Insights</span><br /><i
            className="far fa-angle-down text-4xl"
          ></i>
        </button>
      </div>
    </div>
    <div className="insights h-screen text-gray-100">
      <div className="text-center pt-32">
        <h2 className="text-5xl font-semibold mb-4 font-display">
          Topline Insights
        </h2>
      </div>
      <div id="scroll-steps" className="col-span-6 mt-48">
        <section className="pt-12 max-w-md text-gray-100" id="step-1">
          <div className="step">
            <p className="text-xl mb-6">
              Measurement tools today track important information—emissions as
              well as plant retirements and additions—but are limited to
              measuring <em>outcomes</em>.
            </p>
            <p className="text-xl">
              While tracking outcomes is essential, it is
              <em>insufficient</em> for assessing whether utilities are on track
              to stay within their carbon budgets.
            </p>
          </div>
        </section>
        <section className="pt-12 max-w-md text-gray-100" id="step-2">
          <p className="step text-xl mb-24">
            The <strong>Utility Transition Hub<sup>TM</sup></strong> seeks to
            surface the less visible forces—such as investment trends—that
            <em>drive future emissions outcomes</em> to enable shared action
            aligned with an equitable and affordable energy transition.
          </p>
        </section>
        <section
          className="pt-12 max-w-sm text-gray-100"
          id="step-3"
          style={{marginBottom: 50 + 'vh'}}
        >
          <div className="step">
            <h2 className="text-gray-100 text-2xl font-semibold mb-6">
              TBD Heading (NOT the "Situation")
            </h2>
            <p className="text-xl mb-24">
              The electricity sector accounts for over 30% of US carbon
              emissions and is crucial to decarbonizing another 60% by
              electrifying our transportation, buildings, and industry sectors.
            </p>
          </div>
        </section>
        <section
          className="pt-12 max-w-sm text-gray-100"
          id="step-4"
          style={{marginBottom: 80 + 'vh'}}
        >
          <p className="step text-xl mb-48">
            The Utility Transition Hub<sup>TM</sup> primarily focuses on
            regulated utilties—utilties directly** responsible for over
            <em>half</em> of power sector emissions.
          </p>
          <p className="step text-xl mb-48">
            These utilities have made meaningful progress, reducing emissions
            from the assets they own by 30% from 2005 to 2019.
          </p>
        </section>
        <section
          className="pt-12 max-w-sm text-gray-100"
          id="step-5"
          style={{marginBottom: 80 + 'vh'}}

        >
          <p className="step text-xl mb-48">
            However, the work of the IPCC has made clear that the next ten years
            are the decisive decade, and an even faster decarbonization of these
            utilities is needed.
          </p>
        </section>
        <section
          className="pt-12 max-w-sm text-gray-100"
          id="step-6"
          style={{marginBottom: 80 + 'vh'}}
        >
          <p className="step text-xl mb-48">
            Electrifying demand while decarbonizing electricity will require a
            massive transition from fossil fuel fuel-powered generation to
            renewable energy.
          </p>
        </section>
        <section className="pt-12 max-w-sm text-gray-100" id="step-7">
          <h2 className="text-gray-100 text-2xl font-semibold mb-6">
            TBD Heading (NOT the "Complication")
          </h2>
          <p className="step text-xl mb-6">
            While tracking <em>outcomes</em>—emissions as well as plant
            additions and retirements—is essential, it is
            <em>insufficient</em> for assessing whether utilities are on track
            to stay within their carbon budgets.
          </p>
          <p className="text-xl mb-6">
            This requires diving under the surface to identify the less visible
            forces that drive future emissions outcomes, such as:
          </p>
          <ol className="step text-xl pl-6 list-decimal">
            <li className="mb-2">Customer &amp; Community Impacts</li>
            <li className="mb-2">Utility Investments</li>
            <li className="mb-2">Utility Operations and Planning</li>
            <li className="mb-2">State Policies and Regulations</li>
            <li className="mb-2">Federal Policies</li>
          </ol>
        </section>
      </div>
    </div>
      </main>

      <Footer />
    </div>
  )
}
