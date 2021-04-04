export default function Header() {
  return (
    <header class="header">
      <div class="bg-blue-900 text-gray-200">
        <div class="container pt-2 py-1">
          <span class="mr-4">Created by</span
          ><img
            src="/images/rmi_horizontal_white.svg"
            alt="rmi-logo"
            class="inline-block align-baseline h-6"
          />
        </div>
      </div>
      <div class="bg-blue-600 py-3">
      <div class="container flex justify-between items-center">
        <div class="font-display">
          <a href="index.html">
            <h1 class="text-gray-100 text-3xl font-semibold">
              Utility Transition Hub<sup>TM</sup>
            </h1>
            <p class="text-gray-200 tracking-wide text-xl">
              Charting Utility Decarbonization
            </p>
          </a>
        </div>
        <div>
          <nav class="flex items-center">
            <a
              href="https://rmi.org/scorecard"
              class="text-gray-100 inline-block ml-10 duration-300 hover:text-green"
              >Data Portal</a
            >
            <a
              href="/publications.html"
              class="text-gray-100 inline-block ml-10 duration-300 hover:text-green"
              >Publications</a
            >
            <button
              id="menu-open"
              class="text-gray-100 inline-block ml-10 duration-300 hover:text-green text-xl"
            >
              <i class="far fa-bars"></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
}
