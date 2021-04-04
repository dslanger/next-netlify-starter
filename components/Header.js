import Link from 'next/Link';

export default function Header() {
  return (
    <header className="header">
      <div className="bg-blue-900 text-gray-200">
        <div className="container pt-2 py-1">
          <span className="mr-4">Created by</span>
          <a href="https://rmi.org" target="_blank">
            <img
              src="/images/images/rmi_horizontal_white.svg"
              alt="rmi-logo"
              className="inline-block align-baseline h-6"
            />
          </a>
        </div>
      </div>
      <div className="bg-blue-600 py-3">
      <div className="container flex justify-between items-center">
        <div className="font-display">
          <Link href="/">
            <a>
              <h1 className="text-gray-100 text-3xl font-semibold">
                Utility Transition Hub<sup>TM</sup>
              </h1>
              <p className="text-gray-200 tracking-wide text-xl">
                Charting Utility Decarbonization
              </p>
            </a>
          </Link>
        </div>
        <div>
          <nav className="flex items-center">
            <Link href="/portal">
              <a className="text-gray-100 inline-block ml-10 duration-300 hover:text-green">Data Portal</a>
            </Link>
            <Link href="/insights">
              <a className="text-gray-100 inline-block ml-10 duration-300 hover:text-green">Publications</a>
            </Link>
            <button
              id="menu-open"
              className="text-gray-100 inline-block ml-10 duration-300 hover:text-green text-xl"
            >
            </button>
          </nav>
        </div>
      </div>
    </div>
    </header>
  );
}
