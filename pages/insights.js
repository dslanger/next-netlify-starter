import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/metropolis/Metropolis-Regular.woff"
            as="font"
            crossOrigin=""
          />
      </Head>
      <Header />
      <main>
        <div className="container py-16">
      <h1 className="text-4xl font-bold mb-6">RMI's Topline Insights</h1>
      <p className="text-2xl font-normal mb-8 max-w-4xl">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <a href="/publications/" className="text-blue-500 font-semibold text-2xl"
        >Read Insights
        <i
          className="fal fa-angle-right text-2xl translate-x-1 transform font-normal"
        ></i
      ></a>
    </div>
    <div className="bg-gray-100 py-10">
      <div className="container mb-24">
        <h2 className="font-bold text-4xl mb-10">Top Posts</h2>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="post">
              <img src="https://source.unsplash.com/random/1200x600" alt="" />
              <div className="p-3">
                <h3 className="text-2xl font-semibold">
                  <a href="">Title of blog post</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="post pb-6 mb-3 border-b-4 border-white">
              <img src="https://source.unsplash.com/random/1200x600" alt="" />
              <div className="p-3">
                <h3 className="text-xl font-semibold">
                  <a href="">Title of blog post</a>
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
            <div className="post">
              <div className="p-3">
                <h3 className="text-xl font-semibold">
                  <a href="">Title of blog post</a>
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="post pb-6 mb-3 border-b-4 border-white">
              <img src="https://source.unsplash.com/random/1200x600" alt="" />
              <div className="p-3">
                <h3 className="text-xl font-semibold">
                  <a href="">Title of blog post</a>
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
            <div className="post">
              <div className="p-3">
                <h3 className="text-xl font-semibold">
                  <a href="">Title of blog post</a>
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-24">
        <h2 className="font-bold text-4xl mb-10">Utility Case Studies</h2>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <a
          href="#"
          className="text-blue-500 font-semibold text-2xl inline-block mt-4"
          >See All
          <i
            className="fal fa-angle-right text-2xl translate-x-1 transform font-normal"
          ></i
        ></a>
      </div>
      <div className="container mb-24">
        <h2 className="font-bold text-4xl mb-10">Blogs and Insight Briefs</h2>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <a
          href="#"
          className="text-blue-500 font-semibold text-2xl inline-block mt-4"
          >See All
          <i
            className="fal fa-angle-right text-2xl translate-x-1 transform font-normal"
          ></i
        ></a>
      </div>
      <div className="container">
        <h2 className="font-bold text-4xl mb-10">Information on solutions</h2>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <article
          className="post flex flex-wrap items-center border-b-4 border-white"
        >
          <img
            src="https://source.unsplash.com/random/1200x600"
            alt=""
            className="w-full md:w-4/12"
          />
          <div className="p-6 w-full md:w-8/12">
            <h3 className="text-2xl font-semibold mb-2">
              <a href="">Title of blog post</a>
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </article>
        <a
          href="#"
          className="text-blue-500 font-semibold text-2xl inline-block mt-4"
          >See All
          <i
            className="fal fa-angle-right text-2xl translate-x-1 transform font-normal"
          ></i
        ></a>
      </div>
    </div>
    <div className="bg-blue-400">
      <div className="container">
        <div
          className="max-w-4xl text-center mx-auto h-72 flex flex-col items-center justify-center"
        >
          <p className="text-gray-100 text-2xl mb-6">
            RMI welcomes partnership and co-authorship with a variety of
            stakeholders, on insights that emerge from this data.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-gray-100 px-12 py-4 font-semibold tracking-wide hover:text-gray-100 transition duration-300 hover:bg-blue-600"
            >info@rmi.org</a
          >
        </div>
      </div>
    </div>
      </main>

      <Footer />
    </div>
  )
}
