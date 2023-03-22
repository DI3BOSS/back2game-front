import BurguerMenu from "../BurguerMenu/BurguerMenu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <a className="back2game-logo" href="/" aria-label="back2game home">
        <svg
          width="55"
          height="55"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="back2game-logo"
          aria-label="back2game logo"
        >
          <path
            d="M103.707 81.141C103.707 87.081 103.682 93.0209 103.721 98.9609C103.736 100.819 103.306 102.417 101.497 103.307C99.7268 104.177 98.1134 103.703 96.5292 102.657C87.5183 96.7023 78.4682 90.7965 69.4523 84.8468C66.0591 82.6077 66.0786 79.469 69.4963 77.2103C78.6295 71.1824 87.7774 65.1837 96.9204 59.1753C98.3872 58.2122 99.9615 58.0215 101.546 58.8086C103.11 59.5908 103.712 60.9548 103.707 62.6366C103.692 68.8015 103.702 74.9712 103.707 81.1361V81.141ZM95.3705 70.2339C95.1016 70.3121 94.9549 70.3268 94.8522 70.3953C89.7673 73.7392 84.6922 77.093 79.5976 80.4223C78.6491 81.0432 79.1527 81.3708 79.7638 81.7717C84.6531 84.9885 89.5375 88.2152 94.4268 91.437C94.6811 91.6032 94.9109 91.8818 95.3656 91.7498V70.2339H95.3705Z"
            fill="white"
          />
          <path
            d="M79.3824 62.2403C79.3873 64.2839 78.4535 65.511 77.0453 66.4545C71.5889 70.1114 66.1275 73.7732 60.6711 77.435C59.3852 78.2954 58.0944 79.1558 56.8134 80.0261C55.3857 80.9941 55.3808 81.0723 56.7792 82.0158C61.2187 85.0029 65.6679 87.9754 70.1123 90.9576C72.4494 92.5269 74.7963 94.0865 77.1285 95.6656C78.4388 96.5504 79.3335 97.714 79.3727 99.4056C79.446 102.5 76.4146 104.671 73.6717 103.39C72.3663 102.784 71.1684 101.923 69.9607 101.112C62.1574 95.8905 54.3687 90.6545 46.5752 85.4234C46.3405 85.2669 46.1058 85.1105 45.876 84.9443C42.7126 82.6807 42.6784 79.3612 45.8516 77.1465C48.702 75.1567 51.6063 73.255 54.491 71.3239C60.495 67.3003 66.4942 63.2719 72.513 59.263C75.075 57.5568 77.8716 58.2412 79.0109 60.8079C79.2455 61.3359 79.3922 61.8835 79.3775 62.2452L79.3824 62.2403Z"
            fill="white"
          />
          <path
            d="M106.01 110.664C108.611 110.293 111.168 109.687 113.769 109.305C116.717 108.875 119.651 108.342 122.599 107.922C124.257 107.682 125.934 107.56 127.616 107.736C130.833 108.078 133.757 109.163 136.421 111.011C138.245 112.278 139.829 113.779 141.144 115.543C142.396 117.22 143.388 119.054 144.049 121.053C144.278 121.747 144.787 124.026 144.821 124.251C144.821 124.251 144.992 125.321 145.017 125.483C145.344 127.717 145.051 129.941 144.528 132.107C143.951 134.498 142.909 136.698 141.457 138.692C138.758 142.393 135.204 144.852 130.784 146.07C127.767 146.901 124.711 147.023 121.616 146.617C118.565 146.216 115.827 145.067 113.358 143.258C112.395 142.554 111.544 141.718 110.762 140.814C110.601 140.628 110.459 140.433 110.161 140.296L100.69 141.802C100.426 141.992 100.353 142.29 100.235 142.564C99.0962 145.204 97.3899 147.404 95.1554 149.208C93.0628 150.9 90.6866 152.058 88.1149 152.811C85.2546 153.652 82.3308 153.975 79.363 153.55C76.6201 153.154 74.0777 152.22 71.721 150.748C69.3155 149.242 67.35 147.311 65.7756 144.96C64.8515 143.576 64.1475 142.095 63.5852 140.535C63.2087 139.484 62.9643 138.394 62.7834 137.314C62.5731 136.042 62.4802 134.737 62.5487 133.437C62.6416 131.701 62.8665 129.98 63.3799 128.318C63.8737 126.715 64.5386 125.175 65.3943 123.718C66.3672 122.07 67.5553 120.613 68.9683 119.332C70.7578 117.704 72.7967 116.526 75.0995 115.773C76.0334 115.465 76.9917 115.309 77.95 115.157C83.8612 114.209 89.7723 113.27 95.6835 112.322M73.6083 134.757C74.151 139.206 78.5465 142.388 82.9958 141.714C87.4646 141.039 90.6182 136.761 89.9386 132.298C89.2687 127.878 85.1226 124.588 80.4484 125.351C75.8525 126.103 72.8847 130.366 73.6132 134.752L73.6083 134.757ZM125.014 121.801C124.677 121.562 124.389 121.371 124.11 121.161C123.655 120.814 123.171 120.515 122.663 120.266C121.509 119.699 120.379 119.836 119.358 120.55C118.301 121.288 117.812 122.339 117.959 123.639C118.067 124.603 118.536 125.365 119.309 125.952C119.866 126.372 120.472 126.729 120.947 127.194C120.947 127.497 120.775 127.643 120.653 127.819C120.272 128.377 119.822 128.885 119.538 129.511C119.123 130.44 119.01 131.374 119.455 132.332C120.565 134.718 123.577 135.06 125.176 132.982C125.621 132.405 126.041 131.809 126.501 131.183C127.151 131.647 127.757 132.097 128.383 132.522C129.855 133.52 131.679 133.27 132.759 131.936C133.933 130.489 133.845 128.66 132.549 127.389C132.084 126.935 131.551 126.558 131.028 126.172C130.842 126.035 130.583 125.942 130.559 125.595C130.975 125.008 131.434 124.407 131.845 123.771C132.744 122.373 132.436 120.535 131.146 119.445C129.923 118.418 128.031 118.457 126.823 119.547C126.481 119.855 126.173 120.198 125.909 120.574C125.635 120.97 125.337 121.351 125.014 121.791V121.801Z"
            fill="#E63F8D"
          />
          <path
            className="back2game-logo__outer-circle"
            d="M107.746 0C110.953 0.459554 114.18 0.831108 117.368 1.39333C139.678 5.32887 158.497 15.7568 173.785 32.3741C187.686 47.4807 196.311 65.3153 198.995 85.6873C202.965 115.817 195.201 142.701 175.252 165.757C160.403 182.917 141.702 193.912 119.402 198.053C87.4844 203.978 58.9308 196.376 34.1078 175.281C32.5237 173.936 30.9933 172.519 29.5265 171.047C26.8912 168.402 26.7885 164.931 29.1843 162.535C31.6289 160.096 35.0074 160.125 37.6965 162.746C47.9299 172.734 59.7718 180.033 73.452 184.281C80.9376 186.608 88.5893 187.874 96.4464 188.187C112.004 188.813 126.799 185.811 140.48 178.468C166.623 164.432 182.655 142.736 187.226 113.329C191.25 87.4326 184.816 63.9464 168.099 43.6772C153.084 25.4661 133.644 14.7937 110.117 12.1733C85.3233 9.41108 62.9987 15.8351 43.7202 31.7386C26.412 46.0141 16.076 64.4842 12.6291 86.665C10.8445 98.1441 11.2747 109.594 14.0763 120.912C14.4039 122.232 14.8439 123.552 14.7217 124.935C14.4723 127.776 12.2379 130.029 9.42169 130.337C6.75702 130.631 4.14124 128.851 3.30517 125.918C2.34687 122.544 1.59391 119.112 1.10498 115.627C0.723617 113.001 0.366698 110.371 0 107.736C0 102.529 0 97.3277 0 92.121C0.102675 91.681 0.259133 91.2459 0.298248 90.801C1.20766 80.0211 3.7941 69.6469 8.29226 59.8251C22.217 29.4457 45.4559 10.252 77.9209 2.25377C82.595 1.10489 87.3866 0.723553 92.1292 0C97.3363 0 102.539 0 107.746 0Z"
            fill="#00B4D6"
          />
          <path
            className="back2game-logo__inner-circle"
            d="M22.3442 99.9729C22.6669 77.973 30.5876 59.1509 46.3752 43.7998C57.2588 33.2154 70.2937 26.3367 85.2158 23.5696C109.452 19.0768 131.219 24.8065 150.336 40.3776C157.377 46.1122 163.088 53.0202 167.61 60.8864C169.322 63.8637 168.696 66.8997 166.139 68.8406C163.978 70.4833 160.619 70.3268 158.658 68.3957C157.964 67.7113 157.416 66.8508 156.898 66.0148C146.797 49.7251 132.412 39.3607 113.676 35.3958C97.2435 31.9198 81.6173 34.5403 67.0569 42.954C54.5794 50.1651 45.4951 60.5051 39.6964 73.6561C36.5037 80.9014 34.7778 88.5183 34.3671 96.4823C33.6337 110.821 37.1197 124.021 44.9377 135.979C53.846 149.605 66.2502 158.703 81.8715 163.387C87.8023 165.166 93.9041 166.07 100.045 166.027C111.804 165.948 122.932 163.137 133.165 157.168C145.672 149.874 154.879 139.592 160.726 126.383C163.904 119.201 165.796 111.662 166.056 103.762C166.1 102.442 166.276 101.132 166.378 99.8165C166.652 96.3845 169.278 93.8814 172.446 94.0281C175.707 94.1796 178.034 96.7365 178.074 100.252C178.176 109.203 176.607 117.886 173.502 126.26C165.63 147.512 151.207 162.717 130.471 171.712C116.952 177.574 102.764 179.217 88.1592 176.914C74.1122 174.699 61.5418 169.102 50.6729 160.008C35.4818 147.297 26.2557 131.086 23.1901 111.442C22.5985 107.644 22.2318 103.84 22.3345 99.9729H22.3442Z"
            fill="#F9CA00"
          />
          <path
            d="M151.75 81.0675C151.75 93.4412 142.196 103.507 130.447 103.507C118.698 103.507 109.144 93.4412 109.144 81.0675C109.144 68.6938 118.698 58.6276 130.447 58.6276C136.96 58.6276 142.993 61.7222 147.051 67.0658C148.811 69.3146 148.44 72.6342 146.303 74.4333C144.166 76.2324 141.018 75.8951 139.258 73.6462C137.121 70.7764 133.918 69.1484 130.447 69.1484C124.198 69.1484 119.128 74.492 119.128 81.0724C119.128 87.6528 124.198 92.9963 130.447 92.9963C134.877 92.9963 138.72 90.2977 140.592 86.3621H130.501C127.724 86.3621 125.484 84.0008 125.484 81.0773C125.484 78.1537 127.724 75.8462 130.501 75.8462H146.728C149.506 75.8462 151.745 78.1537 151.745 81.0773L151.75 81.0675Z"
            fill="#00B4D6"
          />
        </svg>
        <svg
          className="back2game-text"
          width="189"
          height="29"
          viewBox="0 0 189 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-testid="back2game-text"
          aria-label="back2game text"
        >
          <path
            d="M30.375 21.4586H24.5417L23.4377 25.6384H17.5183L23.9636 5.50073H31.073L37.5459 25.6384H31.4512L30.378 21.4586H30.375ZM29.3602 17.4323L28.3147 13.4367L27.5029 10.1408H27.4445L26.6603 13.406L25.5872 17.4323H29.3602Z"
            fill="#F9CA00"
          />
          <path
            d="M47.383 25.9453C41.4328 25.9453 37.7766 22.1307 37.7766 15.5726C37.7766 9.01452 41.4328 5.1969 47.3522 5.1969C51.4728 5.1969 54.926 6.96761 55.827 11.0246L50.6886 13.1912C50.252 10.6287 49.2956 9.95665 47.5244 9.95665C45.1751 9.95665 43.8682 11.7887 43.8682 15.5695C43.8682 19.3503 45.0583 21.1824 47.466 21.1824C49.4402 21.1824 50.3688 20.2372 50.7163 18.1627L55.9992 19.6572C54.8953 24.1439 51.6173 25.9422 47.3799 25.9422L47.383 25.9453Z"
            fill="#F9CA00"
          />
          <path
            d="M66.0728 17.5827L64.1294 20.2066V25.6384H58.21V5.50073H64.1294V13.7099L69.9904 5.50073H76.4049L70.2825 13.5871L76.8692 25.6384H70.1656L66.0728 17.5827Z"
            fill="#F9CA00"
          />
          <path
            d="M124.311 15.232C124.311 21.2408 119.661 26.1294 113.945 26.1294C108.228 26.1294 103.579 21.2408 103.579 15.232C103.579 9.22324 108.228 4.33459 113.945 4.33459C117.115 4.33459 120.049 5.83832 122.023 8.43148C122.881 9.52399 122.699 11.1351 121.66 12.0097C120.621 12.8844 119.089 12.7186 118.231 11.6261C117.192 10.2329 115.633 9.44113 113.945 9.44113C110.907 9.44113 108.437 12.0374 108.437 15.232C108.437 18.4267 110.907 21.0229 113.945 21.0229C116.1 21.0229 117.97 19.7125 118.88 17.8006H113.969C112.619 17.8006 111.528 16.6529 111.528 15.232C111.528 13.8111 112.619 12.691 113.969 12.691H121.866C123.216 12.691 124.308 13.8111 124.308 15.232H124.311Z"
            fill="#00B4D6"
          />
          <path
            d="M137.343 21.4586H131.509L130.405 25.6384H124.486L130.928 5.50073H138.038L144.511 25.6384H138.416L137.343 21.4586ZM136.328 17.4323L135.282 13.4367L134.471 10.1408H134.412L133.628 13.406L132.555 17.4323H136.328Z"
            fill="#00B4D6"
          />
          <path
            d="M169.67 25.6384H164.446V17.5827L164.563 11.0829H164.504L160.298 25.6384H155.538L151.386 11.0829H151.3L151.417 17.5827V25.6384H146.193V5.50073H154.551L157.134 15.0509L158.09 19.0465H158.148L159.105 15.0509L161.688 5.50073H169.667V25.6384H169.67Z"
            fill="#00B4D6"
          />
          <path
            d="M189 20.9707V25.6384H173.185V5.50073H188.625V10.1684H179.104V13.4337H186.709V17.7668H179.104V20.9707H189Z"
            fill="#00B4D6"
          />
          <path
            className="back2game-logo__number-two"
            d="M100.123 28.4617L80.664 28.4985L80.3811 22.1859C87.6935 17.954 92.3891 13.2741 92.3891 10.2666C92.3891 8.55726 91.1529 7.3328 89.4217 7.3328C87.5859 7.3328 86.2083 8.85494 85.9623 11.0829L80.1689 9.9321C80.4149 4.28852 84.4063 0.501587 90.092 0.501587C95.461 0.501587 99.0988 4.06757 99.0988 9.37664C99.0988 15.1706 94.5785 17.9172 91.8233 21.7808H99.3817L100.123 28.4648V28.4617Z"
            fill="#E63F8D"
          />
          <path
            d="M10.3013 21.8545V17.7361H2.40774V13.9215H10.3013V9.83385H0.378228V5.77686H15.2952V25.9114H0V21.8545H10.3013Z"
            fill="#F9CA00"
          />
        </svg>
      </a>
      <BurguerMenu className="burguer-menu" aria-label="burguer menu" />
    </HeaderStyled>
  );
};

export default Header;
