import { SITE_NAME } from 'lib/constants'
import Link from 'next/link'

const footerNavigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: 'https://docs.andverse.org' }
  ],
  social: [
    // {
    //   name: 'Facebook',
    //   href: '#',
    //   icon: props => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   )
    // },
    {
      name: 'Medium',
      href: 'https://medium.com/@andverse',
      icon: props => (
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3356"
          width="48"
          height="48"
        >
          <defs>
            <style type="text/css"></style>
          </defs>
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-0.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1c5.8-5.9 8.3-14.3 7-22.4V392c0.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z"
            p-id="3357"
            fill="currentColor"
          ></path>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/andverseoffical',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Discard',
      href: 'https://discord.com/invite/6GrtYCvY',
      icon: props => (
        <svg width="116" height="116" viewBox="0 0 116 116" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M58 116C90.0325 116 116 90.0325 116 58C116 25.9675 90.0325 0 58 0C25.9675 0 0 25.9675 0 58C0 90.0325 25.9675 116 58 116Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M82.258 35.3934C77.7964 33.3599 73.012 31.8617 68.0097 31.0036C67.9186 30.987 67.8276 31.0284 67.7807 31.1112C67.1654 32.1983 66.4838 33.6165 66.0065 34.7312C60.6262 33.931 55.2735 33.931 50.0034 34.7312C49.5261 33.5917 48.8197 32.1983 48.2017 31.1112C48.1547 31.0312 48.0637 30.9898 47.9726 31.0036C42.9731 31.8589 38.1887 33.3571 33.7244 35.3934C33.6857 35.41 33.6526 35.4376 33.6306 35.4734C24.5557 48.9408 22.0697 62.0772 23.2893 75.0507C23.2948 75.1142 23.3307 75.1749 23.3803 75.2135C29.3677 79.5812 35.1675 82.2328 40.8596 83.9903C40.9507 84.018 41.0472 83.9849 41.1052 83.9103C42.4516 82.0838 43.6519 80.158 44.681 78.1327C44.7417 78.0141 44.6837 77.8733 44.5596 77.8264C42.6558 77.109 40.843 76.2344 39.0992 75.2411C38.9613 75.1611 38.9502 74.9652 39.0771 74.8713C39.4441 74.5982 39.8111 74.314 40.1615 74.027C40.2249 73.9746 40.3133 73.9636 40.3878 73.9967C51.8437 79.1922 64.2462 79.1922 75.5669 73.9967C75.6415 73.9608 75.7298 73.9719 75.796 74.0243C76.1465 74.3112 76.5134 74.5982 76.8831 74.8713C77.01 74.9652 77.0017 75.1611 76.8638 75.2411C75.12 76.2537 73.3072 77.109 71.4007 77.8237C71.2765 77.8706 71.2213 78.0141 71.2821 78.1327C72.3332 80.1551 73.5335 82.081 74.8551 83.9076C74.9103 83.9849 75.0096 84.018 75.1007 83.9903C80.8204 82.2328 86.6201 79.5812 92.6075 75.2135C92.66 75.1749 92.6931 75.117 92.6986 75.0535C94.1582 60.0547 90.2539 47.026 82.349 35.4762C82.3296 35.4376 82.2966 35.41 82.258 35.3934ZM46.3917 67.1512C42.9427 67.1512 40.1008 64.0059 40.1008 60.143C40.1008 56.2802 42.8876 53.1348 46.3917 53.1348C49.9234 53.1348 52.7378 56.3078 52.6826 60.143C52.6826 64.0059 49.8958 67.1512 46.3917 67.1512ZM69.6514 67.1512C66.2024 67.1512 63.3605 64.0059 63.3605 60.143C63.3605 56.2802 66.1472 53.1348 69.6514 53.1348C73.1831 53.1348 75.9974 56.3078 75.9423 60.143C75.9423 64.0059 73.1831 67.1512 69.6514 67.1512Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="53.4249"
              y1="33.9942"
              x2="103.547"
              y2="162.175"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: 'https://t.me/andromedametaverse',
      icon: props => (
        <svg fill="currentColor" viewBox="0 0 1024 1024" {...props}>
          <path
            fillRule="evenodd"
            d="M679.428571 746.857143l84-396q5.142857-25.142857-6-36t-29.428571-4L234.285714 501.142857q-16.571429 6.285714-22.571428 14.285714t-1.428572 15.142858 18.285715 11.142857l126.285714 39.428571 293.142857-184.571428q12-8 18.285714-3.428572 4 2.857143-2.285714 8.571429l-237.142857 214.285714-9.142857 130.285714q13.142857 0 25.714285-12.571428l61.714286-59.428572 128 94.285715q36.571429 20.571429 46.285714-21.714286z m344.571429-234.857143q0 104-40.571429 198.857143t-109.142857 163.428571-163.428571 109.142857-198.857143 40.571429-198.857143-40.571429-163.428571-109.142857-109.142857-163.428571T0 512t40.571429-198.857143 109.142857-163.428571T313.142857 40.571429 512 0t198.857143 40.571429 163.428571 109.142857 109.142857 163.428571 40.571429 198.857143z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]
}

export default function Footer() {
  return (
    <>
      <footer id="site-footer">
        <div>
          <nav aria-label="Footer">
            {footerNavigation.main.map(item => (
              <div key={item.name}>
                <a href={item.href}>{item.name}</a>
              </div>
            ))}
          </nav>
          <div className="social">
            {footerNavigation.social.map(item => (
              <Link href={item.href} key={item.name}>
                <a>
                  <span>{item.name}</span>
                  <item.icon aria-hidden="true" />
                </a>
              </Link>
            ))}
          </div>
          <p>&copy; 2021 {SITE_NAME}.</p>
        </div>
      </footer>
      <section className="w-full p-5 lg:px-24 fixed bottom-0 hidden">
        <div className="p-5 rounded-xl md:flex items-center -mx-3 bg-gray-600">
          <div className="md:flex-1 px-3 mb-5 md:mb-0">
            <p className="text-center md:text-left text-white text-xs leading-tight md:pr-12">
              This site is using cookies to store your preferences in your browser. This site is not using javascript or
              cookies to track your activities.
            </p>
          </div>
          <div className="px-3 text-center">
            <button
              id="btn"
              className="py-2 px-8 bg-green-400 hover:bg-green-500 text-white rounded font-bold text-sm shadow-xl"
            >
              Acknowledge
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
