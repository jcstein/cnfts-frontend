import Head from 'next/head';
import { Product, Dependency, WalletSection } from '../components';
import { dependencies, products } from '../config';
import Image from 'next/image';

export default function Home() {
  const chainName = process.env.NEXT_PUBLIC_CHAIN ?? 'stargaze';

  const contractAddress = 'something'; // insert contract address here

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <a
          href="https://blog.celestia.org/meet-cohort-one-of-modular-fellows/"
          className="inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Project from Modular Fellows! See what is up
          </span>
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl lg:text-6xl animate-pulse sm:text-4xl bg-gradient-to-r bg-clip-text from-primary-500 to-rose-500">
          Celestia NFTs
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Welcome! ~ This is a CNFT minter ~ Enter the app to mint!
          <br />
          Simply add your assets link, name, and description, then press the Mint button
        </p>
        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Enter
          </a>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">
            BUILT FEATURING
          </span>
          <div className="flex flex-wrap items-center justify-center mt-8 text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mb-5 mr-5 overflow-hidden lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400 "
            ></a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              {/* celestia svg/path */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="44"
                viewBox="0 0 834 200"
                fill="none"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z"
                    fill="currentColor"
                  />
                  <path
                    d="M80.4486 166.139C94.7675 157.872 101.07 142.003 101.86 126.532C102.613 111.787 88.0642 103.214 75.0799 96.1857C58.6695 87.303 47.4986 69.9353 47.4986 50.0007C47.4986 42.4098 49.1245 35.1927 52.0405 28.673C52.8937 26.7656 50.7489 24.6591 49.0278 25.8439C25.4588 42.0698 10 69.2223 10 100.001C10 126.483 18.7875 87.8876 39.012 151.62C42.7744 163.476 52.1578 173.855 64.4242 171.791C69.9513 170.86 75.4978 168.997 80.4486 166.139Z"
                    fill="white"
                  />
                  <path
                    d="M52.564 49.9849C52.5644 66.5192 63.1557 79.9111 76.159 88.3311C88.5522 96.356 103.251 88.0429 115.83 80.3123C131.728 70.5418 152.354 69.5513 169.618 79.5187C176.192 83.3141 181.629 88.3307 185.817 94.1159C187.043 95.8085 189.939 95.0044 189.774 92.9214C187.506 64.3971 171.721 37.4331 145.066 22.0439C122.131 8.80276 151.162 35.7106 85.8562 21.3594C73.7072 18.6896 60.0272 21.6264 55.6819 33.2817C53.7239 38.5333 52.5646 44.2686 52.564 49.9849Z"
                    fill="white"
                  />
                  <path
                    d="M167.086 83.9265C152.767 75.6597 135.873 78.136 122.08 85.1872C108.933 91.9076 108.783 108.794 109.189 123.553C109.701 142.206 100.246 160.564 82.9819 170.531C76.408 174.327 69.3448 176.527 62.2406 177.262C60.1621 177.477 59.4102 180.387 61.2969 181.285C87.1334 193.584 118.378 193.395 145.032 178.006C167.967 164.765 130.149 176.452 175.23 127.071C183.617 117.885 187.913 104.569 179.992 94.9782C176.423 90.6568 172.036 86.7852 167.086 83.9265Z"
                    fill="white"
                  />
                  <path
                    d="M300.6 120.8C300.6 123.12 299.76 125.12 298.08 126.8C296.48 128.4 294.52 129.2 292.2 129.2H258.6C256.28 129.2 254.28 128.4 252.6 126.8C251 125.12 250.2 123.12 250.2 120.8V78.8004C250.2 76.4804 251 74.5204 252.6 72.9204C254.28 71.2404 256.28 70.4004 258.6 70.4004H292.2C294.52 70.4004 296.48 71.2404 298.08 72.9204C299.76 74.5204 300.6 76.4804 300.6 78.8004V87.2004H291V78.8004H259.8V120.8H291V112.4H300.6V120.8Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M366.652 120.799C366.652 123.119 365.812 125.119 364.132 126.799C362.532 128.399 360.572 129.199 358.252 129.199H333.052C330.732 129.199 328.732 128.399 327.052 126.799C325.452 125.119 324.652 123.119 324.652 120.799V95.5992C324.652 93.2792 325.452 91.3192 327.052 89.7192C328.732 88.0392 330.732 87.1992 333.052 87.1992H358.252C360.572 87.1992 362.532 88.0392 364.132 89.7192C365.812 91.3192 366.652 93.2792 366.652 95.5992V120.799ZM358.252 121.999V94.3992H333.052V121.999H358.252Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M426.08 87.1992L418.76 94.3992H398.48V103.999H415.28C417.6 103.999 419.56 104.839 421.16 106.519C422.84 108.119 423.68 110.079 423.68 112.399V120.799C423.68 123.119 422.84 125.119 421.16 126.799C419.56 128.399 417.6 129.199 415.28 129.199H390.08V121.999H415.28V111.199H398.48C396.16 111.199 394.16 110.399 392.48 108.799C390.88 107.119 390.08 105.119 390.08 102.799V95.5992C390.08 93.2792 390.88 91.3192 392.48 89.7192C394.16 88.0392 396.16 87.1992 398.48 87.1992H426.08Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M517.837 129.199H509.437V94.3992H486.637V129.199H478.237V94.3992H455.437V129.199H447.037V87.1992H455.437V93.1992L461.437 87.1992H478.237C483.117 87.1992 485.877 89.2392 486.517 93.3192L492.637 87.1992H509.437C511.757 87.1992 513.717 88.0392 515.317 89.7192C516.997 91.3192 517.837 93.2792 517.837 95.5992V129.199Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M621.694 70.4004L608.494 129.2H592.294L580.894 86.1204H579.694L568.294 129.2H552.094L538.894 70.4004H549.694L559.294 121.04H561.694L575.494 70.4004H585.094L598.894 121.04H601.294L610.894 70.4004H621.694Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M682.866 129.199H674.466V123.079L667.266 129.199H649.266C646.946 129.199 644.946 128.399 643.266 126.799C641.666 125.119 640.866 123.119 640.866 120.799V112.399C640.866 110.079 641.666 108.119 643.266 106.519C644.946 104.839 646.946 103.999 649.266 103.999H673.266L666.066 111.079H649.266V121.999H674.466V94.3992H640.866L648.066 87.1992H674.466C676.786 87.1992 678.746 88.0392 680.346 89.7192C682.026 91.3192 682.866 93.2792 682.866 95.5992V129.199Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M742.219 87.1992L734.899 94.3992H714.619V103.999H731.419C733.739 103.999 735.699 104.839 737.299 106.519C738.979 108.119 739.819 110.079 739.819 112.399V120.799C739.819 123.119 738.979 125.119 737.299 126.799C735.699 128.399 733.739 129.199 731.419 129.199H706.219V121.999H731.419V111.199H714.619C712.299 111.199 710.299 110.399 708.619 108.799C707.019 107.119 706.219 105.119 706.219 102.799V95.5992C706.219 93.2792 707.019 91.3192 708.619 89.7192C710.299 88.0392 712.299 87.1992 714.619 87.1992H742.219Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M833.977 129.199H825.577V94.3992H802.777V129.199H794.377V94.3992H771.577V129.199H763.177V87.1992H771.577V93.1992L777.577 87.1992H794.377C799.257 87.1992 802.017 89.2392 802.657 93.3192L808.777 87.1992H825.577C827.897 87.1992 829.857 88.0392 831.457 89.7192C833.137 91.3192 833.977 93.2792 833.977 95.5992V129.199Z"
                    fill="currentColor"
                    stroke="#6C6C6C"
                    strokeWidth="0.5"
                  />
                </g>
              </svg>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <svg
                className="h-11"
                viewBox="0 0 208 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.7714 20.729C42.7714 31.9343 33.6867 41.019 22.4814 41.019C11.2747 41.019 2.19141 31.9343 2.19141 20.729C2.19141 9.52228 11.2754 0.438965 22.4814 0.438965C33.6867 0.438965 42.7714 9.52297 42.7714 20.729Z"
                  fill="currentColor"
                />
                <path
                  d="M25.1775 21.3312H20.1389V15.9959H25.1775C25.5278 15.9959 25.8747 16.0649 26.1983 16.1989C26.522 16.333 26.8161 16.5295 27.0638 16.7772C27.3115 17.0249 27.508 17.319 27.6421 17.6427C27.7761 17.9663 27.8451 18.3132 27.8451 18.6635C27.8451 19.0139 27.7761 19.3608 27.6421 19.6844C27.508 20.0081 27.3115 20.3021 27.0638 20.5499C26.8161 20.7976 26.522 20.9941 26.1983 21.1281C25.8747 21.2622 25.5278 21.3312 25.1775 21.3312ZM25.1775 12.439H16.582V30.2234H20.1389V24.8881H25.1775C28.6151 24.8881 31.402 22.1012 31.402 18.6635C31.402 15.2258 28.6151 12.439 25.1775 12.439Z"
                  fill="white"
                />
                <path
                  d="M74.9361 17.4611C74.9361 16.1521 73.9305 15.3588 72.6239 15.3588H69.1216V19.5389H72.6248C73.9313 19.5389 74.9369 18.7457 74.9369 17.4611H74.9361ZM65.8047 28.2977V12.439H73.0901C76.4778 12.439 78.3213 14.7283 78.3213 17.4611C78.3213 20.1702 76.4542 22.4588 73.0901 22.4588H69.1216V28.2977H65.8055H65.8047ZM80.3406 28.2977V16.7362H83.3044V18.2543C84.122 17.2731 85.501 16.4563 86.9027 16.4563V19.3518C86.6912 19.3054 86.4349 19.2826 86.0851 19.2826C85.1039 19.2826 83.7949 19.8424 83.3044 20.5681V28.2977H80.3397H80.3406ZM96.8802 22.3652C96.8802 20.6136 95.8503 19.0955 93.9823 19.0955C92.1364 19.0955 91.1105 20.6136 91.1105 22.366C91.1105 24.1404 92.1364 25.6585 93.9823 25.6585C95.8503 25.6585 96.8794 24.1404 96.8794 22.3652H96.8802ZM88.0263 22.3652C88.0263 19.1663 90.2684 16.4563 93.9823 16.4563C97.7198 16.4563 99.962 19.1655 99.962 22.3652C99.962 25.5649 97.7198 28.2977 93.9823 28.2977C90.2684 28.2977 88.0263 25.5649 88.0263 22.3652ZM109.943 24.3739V20.3801C109.452 19.6316 108.378 19.0955 107.396 19.0955C105.693 19.0955 104.524 20.4265 104.524 22.366C104.524 24.3267 105.693 25.6585 107.396 25.6585C108.378 25.6585 109.452 25.1215 109.943 24.3731V24.3739ZM109.943 28.2977V26.5697C109.054 27.6899 107.841 28.2977 106.462 28.2977C103.637 28.2977 101.465 26.1499 101.465 22.3652C101.465 18.6993 103.59 16.4563 106.462 16.4563C107.793 16.4563 109.054 17.0177 109.943 18.1843V12.439H112.932V28.2977H109.943ZM123.497 28.2977V26.5925C122.727 27.4337 121.372 28.2977 119.526 28.2977C117.052 28.2977 115.884 26.9431 115.884 24.7473V16.7362H118.849V23.5798C118.849 25.1451 119.666 25.6585 120.927 25.6585C122.071 25.6585 122.983 25.028 123.497 24.3731V16.7362H126.463V28.2977H123.497ZM128.69 22.3652C128.69 18.9092 131.212 16.4563 134.67 16.4563C136.982 16.4563 138.383 17.4611 139.131 18.4886L137.191 20.3093C136.655 19.5153 135.838 19.0955 134.81 19.0955C133.011 19.0955 131.751 20.4037 131.751 22.366C131.751 24.3267 133.011 25.6585 134.81 25.6585C135.838 25.6585 136.655 25.1915 137.191 24.4203L139.131 26.2426C138.383 27.2702 136.982 28.2977 134.67 28.2977C131.212 28.2977 128.69 25.8456 128.69 22.3652ZM141.681 25.1915V19.329H139.813V16.7362H141.681V13.6528H144.648V16.7362H146.935V19.329H144.648V24.3975C144.648 25.1215 145.02 25.6585 145.675 25.6585C146.118 25.6585 146.541 25.495 146.702 25.3087L147.334 27.5728C146.891 27.9714 146.096 28.2977 144.857 28.2977C142.779 28.2977 141.681 27.2238 141.681 25.1915ZM165.935 28.2977V21.454H158.577V28.2977H155.263V12.439H158.577V18.5577H165.935V12.4398H169.275V28.2977H165.935ZM179.889 28.2977V26.5925C179.119 27.4337 177.764 28.2977 175.919 28.2977C173.443 28.2977 172.276 26.9431 172.276 24.7473V16.7362H175.241V23.5798C175.241 25.1451 176.058 25.6585 177.32 25.6585C178.464 25.6585 179.376 25.028 179.889 24.3731V16.7362H182.856V28.2977H179.889ZM193.417 28.2977V21.1986C193.417 19.6333 192.602 19.0963 191.339 19.0963C190.172 19.0963 189.285 19.7504 188.77 20.4045V28.2985H185.806V16.7362H188.77V18.1843C189.495 17.3439 190.896 16.4563 192.718 16.4563C195.217 16.4563 196.408 17.8573 196.408 20.0523V28.2977H193.418H193.417ZM199.942 25.1915V19.329H198.076V16.7362H199.943V13.6528H202.91V16.7362H205.198V19.329H202.91V24.3975C202.91 25.1215 203.282 25.6585 203.936 25.6585C204.38 25.6585 204.802 25.495 204.965 25.3087L205.595 27.5728C205.152 27.9714 204.356 28.2977 203.119 28.2977C201.04 28.2977 199.943 27.2238 199.943 25.1915"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <svg
                className="h-11"
                viewBox="0 0 120 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z"
                  fill="currentColor"
                />
                <path
                  d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z"
                  fill="white"
                />
                <path
                  d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z"
                  fill="currentColor"
                />
                <path
                  d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <a href="https://alexdphan.com/">
            <p>Built by @alexdphan</p>
          </a>
        </div>
      </div>
    </section>
  );
}
