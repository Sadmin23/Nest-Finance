'use client';

const CityBank = ({ w, h }: { w: number, h: number }): JSX.Element => {

  let style = "ml-6 mt-2"

  if (w===195)
    style = "ml-20 mt-[108px]"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={style} width={w} height={h} viewBox="0 0 194 140" fill="none">
      <g clip-path="url(#clip0_98_1098)">
        <path d="M35.6855 136.753V128.709H36.833V129.842C37.0789 129.442 37.4067 129.126 37.8165 128.893C38.2263 128.643 38.6853 128.543 39.2098 128.543C39.8 128.543 40.2589 128.659 40.6359 128.909C40.9966 129.159 41.2588 129.509 41.4228 129.942C42.0457 129.009 42.8489 128.543 43.8488 128.543C44.6192 128.543 45.2093 128.759 45.6355 129.209C46.0453 129.659 46.2584 130.325 46.2584 131.241V136.753H44.9471V131.69C44.9471 131.141 44.8979 130.758 44.8159 130.508C44.734 130.275 44.57 130.075 44.3406 129.925C44.1111 129.775 43.8652 129.709 43.5537 129.709C42.9964 129.709 42.5538 129.892 42.1768 130.275C41.8162 130.658 41.6359 131.257 41.6359 132.073V136.736H40.3245V131.524C40.3245 130.924 40.2098 130.458 39.9967 130.158C39.7836 129.858 39.4393 129.709 38.9476 129.709C38.5705 129.709 38.2263 129.808 37.8985 130.008C37.587 130.208 37.3575 130.508 37.21 130.891C37.0625 131.274 36.9969 131.84 36.9969 132.573V136.736H35.6855V136.753Z" fill="#231F20"/>
        <path d="M53.2906 135.737C52.8152 136.17 52.3562 136.47 51.8809 136.653C51.4383 136.836 50.9465 136.919 50.422 136.919C49.5532 136.919 48.8975 136.703 48.4221 136.27C47.9632 135.837 47.7173 135.287 47.7173 134.621C47.7173 134.238 47.8156 133.872 47.996 133.539C48.1599 133.206 48.3894 132.956 48.6844 132.756C48.9631 132.556 49.2909 132.406 49.6352 132.306C49.9138 132.24 50.3072 132.173 50.8318 132.107C51.8973 131.973 52.7005 131.824 53.2086 131.64C53.2086 131.457 53.2086 131.341 53.2086 131.291C53.2086 130.741 53.0775 130.358 52.8316 130.125C52.4874 129.825 51.9792 129.659 51.3071 129.659C50.6842 129.659 50.2089 129.775 49.9138 129.992C49.6188 130.208 49.3893 130.608 49.2581 131.157L47.9468 130.991C48.0615 130.425 48.2582 129.958 48.5369 129.609C48.8156 129.259 49.1926 128.993 49.7007 128.809C50.2089 128.626 50.799 128.526 51.4711 128.526C52.1431 128.526 52.6841 128.593 53.0939 128.759C53.5037 128.909 53.8151 129.126 54.0118 129.376C54.2085 129.609 54.3561 129.925 54.4216 130.291C54.4708 130.525 54.5036 130.941 54.5036 131.54V133.356C54.5036 134.621 54.52 135.42 54.5856 135.754C54.6511 136.087 54.7659 136.403 54.9134 136.719H53.5529C53.4217 136.436 53.3234 136.087 53.2906 135.704M53.225 132.673C52.7333 132.873 52.012 133.056 51.0285 133.189C50.4875 133.272 50.0941 133.356 49.8646 133.455C49.6515 133.555 49.4712 133.705 49.3401 133.905C49.209 134.105 49.1434 134.321 49.1434 134.555C49.1434 134.921 49.2745 135.221 49.5532 135.47C49.8319 135.704 50.2253 135.837 50.7498 135.837C51.2744 135.837 51.7169 135.72 52.1267 135.487C52.5202 135.254 52.8152 134.938 53.0119 134.538C53.1594 134.221 53.225 133.772 53.225 133.172V132.673Z" fill="#231F20"/>
        <path d="M56.5525 136.753V125.645H57.8802V131.957L61.0275 128.709H62.7487L59.7325 131.69L63.0274 136.753H61.4045L58.7982 132.623L57.8802 133.572V136.753H56.5525Z" fill="#231F20"/>
        <path d="M64.0601 125.645H65.3714V127.194H64.0601V125.645ZM64.0601 128.709H65.3714V136.753H64.0601V128.709Z" fill="#231F20"/>
        <path d="M67.4041 136.753V128.709H68.6007V129.842C69.158 128.976 69.994 128.526 71.0595 128.526C71.5349 128.526 71.961 128.61 72.3545 128.776C72.7315 128.943 73.0429 129.176 73.2396 129.459C73.4363 129.742 73.5675 130.075 73.6494 130.475C73.6986 130.724 73.715 131.157 73.715 131.79V136.719H72.4036V131.84C72.4036 131.291 72.3545 130.874 72.2561 130.591C72.1578 130.308 71.961 130.092 71.7152 129.925C71.4365 129.759 71.1414 129.675 70.7808 129.675C70.2399 129.675 69.7317 129.858 69.3219 130.241C68.9121 130.608 68.7154 131.307 68.7154 132.323V136.703H67.4041V136.753Z" fill="#231F20"/>
        <path d="M75.5018 137.419L76.7804 137.585C76.8459 138.002 76.9934 138.301 77.2393 138.485C77.5672 138.734 78.0098 138.868 78.5835 138.868C79.2064 138.868 79.6981 138.734 80.0096 138.501C80.3538 138.251 80.5833 137.902 80.6981 137.452C80.7636 137.169 80.7964 136.586 80.7964 135.704C80.2063 136.42 79.485 136.769 78.6163 136.769C77.5344 136.769 76.6984 136.37 76.1247 135.57C75.5346 134.771 75.2395 133.822 75.2395 132.706C75.2395 131.923 75.3706 131.224 75.6329 130.574C75.9116 129.925 76.2886 129.425 76.8131 129.076C77.3213 128.726 77.9278 128.543 78.6327 128.543C79.5506 128.543 80.3046 128.926 80.9275 129.709V128.726H82.1242V135.687C82.1242 136.936 81.993 137.818 81.7471 138.335C81.5013 138.868 81.1079 139.284 80.5833 139.584C80.0424 139.883 79.3867 140.033 78.5999 140.033C77.6819 140.033 76.9279 139.817 76.3542 139.384C75.7804 138.951 75.5018 138.301 75.5182 137.435M76.6164 132.606C76.6164 133.655 76.8131 134.421 77.2229 134.904C77.6327 135.387 78.1409 135.637 78.7638 135.637C79.3867 135.637 79.8948 135.387 80.321 134.921C80.7308 134.438 80.9439 133.689 80.9439 132.656C80.9439 131.624 80.7308 130.941 80.3046 130.441C79.8785 129.942 79.3703 129.692 78.7638 129.692C78.1573 129.692 77.6491 129.942 77.2557 130.425C76.8295 130.908 76.6328 131.64 76.6328 132.606" fill="#231F20"/>
        <path d="M87.7466 134.305L89.058 134.138C89.1235 134.688 89.3366 135.104 89.6808 135.387C90.0087 135.687 90.4841 135.82 91.0906 135.82C91.6971 135.82 92.1397 135.687 92.4511 135.437C92.7462 135.187 92.8937 134.888 92.8937 134.538C92.8937 134.221 92.7626 133.988 92.5003 133.822C92.32 133.705 91.861 133.539 91.1397 133.356C90.1726 133.106 89.5005 132.889 89.1235 132.706C88.7301 132.523 88.4514 132.273 88.2711 131.94C88.0744 131.607 87.9761 131.257 87.9761 130.858C87.9761 130.508 88.058 130.175 88.222 129.858C88.3695 129.559 88.599 129.309 88.8612 129.092C89.0743 128.943 89.353 128.809 89.6972 128.693C90.0579 128.576 90.4349 128.543 90.8447 128.543C91.4512 128.543 91.9921 128.626 92.4511 128.809C92.9101 128.992 93.2543 129.242 93.4674 129.542C93.6969 129.842 93.8444 130.258 93.9264 130.791L92.6314 130.957C92.5658 130.558 92.4019 130.225 92.1233 130.008C91.8446 129.775 91.4512 129.659 90.943 129.659C90.3201 129.659 89.8939 129.758 89.6317 129.958C89.3694 130.175 89.2547 130.408 89.2547 130.691C89.2547 130.874 89.3038 131.041 89.4186 131.174C89.5333 131.324 89.6972 131.44 89.9267 131.54C90.0579 131.59 90.4513 131.707 91.0906 131.89C92.0249 132.14 92.6806 132.356 93.0412 132.523C93.4182 132.689 93.6969 132.923 93.91 133.222C94.1231 133.539 94.2214 133.922 94.2214 134.388C94.2214 134.854 94.0903 135.271 93.828 135.67C93.5822 136.07 93.2051 136.386 92.7298 136.603C92.238 136.819 91.6971 136.936 91.0742 136.936C90.0743 136.936 89.2874 136.719 88.7629 136.27C88.222 135.837 87.8941 135.187 87.7466 134.321" fill="#231F20"/>
        <path d="M101.123 134.155L102.483 134.338C102.27 135.154 101.86 135.804 101.286 136.253C100.696 136.703 99.9587 136.936 99.0571 136.936C97.9097 136.936 97.0245 136.57 96.3525 135.853C95.6968 135.137 95.3525 134.122 95.3525 132.823C95.3525 131.524 95.6968 130.425 96.3689 129.675C97.0409 128.926 97.9097 128.56 98.9916 128.56C100.073 128.56 100.877 128.926 101.532 129.642C102.188 130.375 102.516 131.407 102.516 132.723V133.089H96.7131C96.7623 133.972 97.0081 134.654 97.4343 135.121C97.8769 135.587 98.4179 135.82 99.0571 135.82C99.5489 135.82 99.9587 135.687 100.303 135.421C100.647 135.154 100.909 134.738 101.123 134.155ZM96.7787 131.957H101.123C101.073 131.274 100.893 130.774 100.631 130.425C100.205 129.892 99.6637 129.625 98.9916 129.625C98.3851 129.625 97.8769 129.825 97.4671 130.258C97.0573 130.674 96.8278 131.241 96.7787 131.94" fill="#231F20"/>
        <path d="M104.139 136.753V128.709H105.335V129.842C105.909 128.976 106.729 128.526 107.81 128.526C108.286 128.526 108.712 128.61 109.089 128.776C109.482 128.943 109.778 129.176 109.991 129.459C110.171 129.742 110.318 130.075 110.384 130.475C110.433 130.724 110.45 131.157 110.45 131.79V136.719H109.138V131.84C109.138 131.291 109.073 130.874 108.974 130.591C108.876 130.308 108.696 130.092 108.433 129.925C108.171 129.759 107.86 129.675 107.515 129.675C106.958 129.675 106.466 129.858 106.057 130.241C105.647 130.608 105.45 131.307 105.45 132.323V136.703H104.139V136.753Z" fill="#231F20"/>
        <path d="M111.958 134.305L113.269 134.138C113.351 134.688 113.548 135.104 113.892 135.387C114.236 135.687 114.695 135.82 115.302 135.82C115.925 135.82 116.367 135.687 116.662 135.437C116.957 135.187 117.105 134.888 117.105 134.538C117.105 134.221 116.974 133.988 116.711 133.822C116.531 133.705 116.072 133.539 115.351 133.356C114.384 133.106 113.712 132.889 113.335 132.706C112.958 132.523 112.679 132.273 112.482 131.94C112.302 131.607 112.187 131.257 112.187 130.858C112.187 130.508 112.269 130.175 112.433 129.858C112.597 129.559 112.827 129.309 113.072 129.092C113.286 128.943 113.564 128.809 113.925 128.693C114.285 128.576 114.662 128.543 115.072 128.543C115.695 128.543 116.236 128.626 116.711 128.809C117.17 128.992 117.498 129.242 117.728 129.542C117.957 129.842 118.105 130.258 118.187 130.791L116.892 130.957C116.826 130.558 116.662 130.225 116.384 130.008C116.105 129.775 115.695 129.659 115.187 129.659C114.58 129.659 114.138 129.758 113.876 129.958C113.613 130.175 113.499 130.408 113.499 130.691C113.499 130.874 113.548 131.041 113.646 131.174C113.761 131.324 113.925 131.44 114.154 131.54C114.285 131.59 114.695 131.707 115.318 131.89C116.269 132.14 116.908 132.356 117.285 132.523C117.662 132.689 117.941 132.923 118.154 133.222C118.367 133.539 118.465 133.922 118.465 134.388C118.465 134.854 118.334 135.271 118.088 135.67C117.826 136.07 117.465 136.386 116.974 136.603C116.498 136.819 115.941 136.936 115.335 136.936C114.318 136.936 113.548 136.719 113.007 136.27C112.482 135.837 112.138 135.187 111.991 134.321" fill="#231F20"/>
        <path d="M125.334 134.155L126.694 134.338C126.481 135.154 126.088 135.804 125.498 136.253C124.924 136.703 124.186 136.936 123.268 136.936C122.137 136.936 121.236 136.57 120.564 135.853C119.892 135.137 119.564 134.122 119.564 132.823C119.564 131.524 119.908 130.425 120.58 129.675C121.252 128.926 122.121 128.56 123.186 128.56C124.252 128.56 125.071 128.926 125.727 129.642C126.399 130.375 126.727 131.407 126.727 132.723C126.727 132.806 126.727 132.923 126.727 133.089H120.941C120.99 133.972 121.219 134.654 121.662 135.121C122.104 135.587 122.645 135.82 123.285 135.82C123.776 135.82 124.186 135.687 124.531 135.421C124.875 135.154 125.137 134.738 125.334 134.155ZM121.006 131.957H125.35C125.301 131.274 125.137 130.774 124.858 130.425C124.432 129.892 123.908 129.625 123.236 129.625C122.629 129.625 122.121 129.825 121.711 130.258C121.301 130.674 121.072 131.241 121.023 131.94" fill="#231F20"/>
        <path d="M132.054 132.723C132.054 131.241 132.448 130.142 133.251 129.425C133.923 128.826 134.726 128.543 135.71 128.543C136.775 128.543 137.644 128.893 138.333 129.625C139.005 130.341 139.349 131.341 139.349 132.623C139.349 133.655 139.201 134.455 138.906 135.054C138.595 135.637 138.152 136.103 137.595 136.436C137.021 136.769 136.398 136.919 135.726 136.919C134.628 136.919 133.759 136.553 133.087 135.837C132.399 135.121 132.087 134.088 132.087 132.723M133.448 132.723C133.448 133.755 133.661 134.521 134.087 135.037C134.53 135.537 135.071 135.803 135.726 135.803C136.382 135.803 136.923 135.537 137.349 135.037C137.792 134.521 138.005 133.739 138.005 132.689C138.005 131.64 137.792 130.941 137.349 130.425C136.923 129.908 136.366 129.659 135.726 129.659C135.087 129.659 134.513 129.908 134.087 130.425C133.661 130.924 133.448 131.69 133.448 132.723Z" fill="#231F20"/>
        <path d="M141.201 136.753V129.775H140.037V128.709H141.201V127.86C141.201 127.327 141.234 126.928 141.332 126.661C141.463 126.311 141.677 126.028 142.004 125.795C142.332 125.579 142.775 125.462 143.349 125.462C143.726 125.462 144.135 125.512 144.594 125.612L144.381 126.794C144.103 126.744 143.857 126.728 143.611 126.728C143.217 126.728 142.922 126.811 142.758 126.994C142.595 127.161 142.513 127.494 142.513 127.977V128.709H144.037V129.775H142.513V136.753H141.201Z" fill="#231F20"/>
        <path d="M149.233 136.753V128.709H150.397V129.842C150.643 129.442 150.954 129.126 151.364 128.893C151.774 128.643 152.249 128.543 152.757 128.543C153.348 128.543 153.807 128.659 154.184 128.909C154.561 129.159 154.823 129.509 154.97 129.942C155.577 129.009 156.397 128.543 157.38 128.543C158.167 128.543 158.757 128.759 159.183 129.209C159.609 129.659 159.806 130.325 159.806 131.241V136.753H158.495V131.69C158.495 131.141 158.462 130.758 158.364 130.508C158.282 130.275 158.134 130.075 157.888 129.925C157.659 129.775 157.396 129.709 157.085 129.709C156.544 129.709 156.069 129.892 155.708 130.275C155.347 130.658 155.167 131.257 155.167 132.073V136.736H153.856V131.524C153.856 130.924 153.741 130.458 153.528 130.158C153.315 129.858 152.954 129.709 152.479 129.709C152.085 129.709 151.758 129.808 151.43 130.008C151.118 130.208 150.889 130.508 150.741 130.891C150.594 131.274 150.528 131.84 150.528 132.573V136.736H149.217L149.233 136.753Z" fill="#231F20"/>
        <path d="M161.265 132.723C161.265 131.241 161.659 130.142 162.478 129.425C163.15 128.826 163.953 128.543 164.921 128.543C165.986 128.543 166.855 128.893 167.527 129.625C168.215 130.341 168.543 131.341 168.543 132.623C168.543 133.655 168.396 134.455 168.101 135.054C167.806 135.637 167.363 136.103 166.789 136.436C166.216 136.769 165.593 136.919 164.921 136.919C163.822 136.919 162.937 136.553 162.281 135.837C161.609 135.121 161.282 134.088 161.282 132.723M162.642 132.723C162.642 133.755 162.855 134.521 163.298 135.037C163.724 135.537 164.281 135.803 164.937 135.803C165.593 135.803 166.117 135.537 166.56 135.037C167.002 134.521 167.215 133.739 167.215 132.689C167.215 131.64 166.986 130.941 166.56 130.425C166.134 129.908 165.576 129.659 164.937 129.659C164.298 129.659 163.724 129.908 163.298 130.425C162.855 130.924 162.642 131.69 162.642 132.723Z" fill="#231F20"/>
        <path d="M170.1 136.753V128.709H171.297V129.842C171.871 128.976 172.69 128.526 173.772 128.526C174.231 128.526 174.674 128.61 175.067 128.776C175.461 128.943 175.756 129.176 175.936 129.459C176.133 129.742 176.264 130.075 176.362 130.475C176.395 130.724 176.428 131.157 176.428 131.79V136.719H175.116V131.84C175.116 131.291 175.067 130.874 174.952 130.591C174.854 130.308 174.674 130.092 174.411 129.925C174.149 129.759 173.854 129.675 173.493 129.675C172.936 129.675 172.444 129.858 172.035 130.241C171.625 130.608 171.428 131.307 171.428 132.323V136.703H170.117L170.1 136.753Z" fill="#231F20"/>
        <path d="M183.788 134.155L185.148 134.338C184.935 135.154 184.542 135.804 183.968 136.253C183.362 136.703 182.64 136.936 181.722 136.936C180.591 136.936 179.69 136.57 179.034 135.853C178.362 135.137 178.018 134.122 178.018 132.823C178.018 131.524 178.362 130.425 179.034 129.675C179.706 128.926 180.591 128.56 181.673 128.56C182.755 128.56 183.542 128.926 184.214 129.642C184.87 130.375 185.214 131.407 185.214 132.723V133.089H179.411C179.46 133.972 179.69 134.654 180.132 135.121C180.575 135.587 181.116 135.82 181.772 135.82C182.247 135.82 182.657 135.687 183.017 135.421C183.362 135.154 183.624 134.738 183.821 134.155M179.477 131.957H183.837C183.755 131.274 183.608 130.774 183.329 130.425C182.903 129.892 182.378 129.625 181.706 129.625C181.1 129.625 180.591 129.825 180.182 130.258C179.755 130.674 179.526 131.241 179.477 131.94" fill="#231F20"/>
        <path d="M186.755 139.834L186.574 138.568C186.869 138.651 187.115 138.684 187.345 138.684C187.64 138.684 187.886 138.635 188.05 138.535C188.23 138.435 188.394 138.285 188.492 138.102C188.558 137.968 188.705 137.635 188.902 137.086C188.935 137.019 188.968 136.903 189.017 136.753L186.033 128.676H187.443L189.099 133.339C189.328 133.922 189.509 134.538 189.689 135.204C189.836 134.588 190.017 133.972 190.23 133.389L191.885 128.693H193.213L190.263 136.886C189.935 137.769 189.689 138.368 189.509 138.701C189.279 139.151 189 139.484 188.705 139.684C188.394 139.883 188.033 140 187.607 140C187.345 140 187.066 139.933 186.755 139.834Z" fill="#231F20"/>
        <path d="M52.1104 95.7702V92.5895H43.0784C43.0784 92.5895 35.0463 92.8559 34.866 103.447C34.866 103.447 34.866 113.322 41.9146 113.772H52.1268V110.708H44.5865C44.5865 110.708 38.5542 111.007 38.7509 102.581C38.7509 102.581 39.2099 95.7702 44.8323 95.7702H52.1104Z" fill="#ED1D24"/>
        <path d="M58.6016 84.4297H54.9954V88.3931H58.6016V84.4297Z" fill="#ED1D24"/>
        <path d="M58.6016 92.6228H54.9954V113.838H58.6016V92.6228Z" fill="#ED1D24"/>
        <path d="M65.1257 95.687H60.9785V92.4563H65.1257V84.4297H68.6664V92.5729H74.9609V95.687H68.8139V108.06C68.8139 108.06 68.6172 110.758 70.9449 110.824H74.8954V113.988H69.5352C69.5352 113.988 65.2732 114.122 65.1421 109.242V95.687H65.1257Z" fill="#ED1D24"/>
        <path d="M80.649 92.5729H77.0427V107.927C77.0427 107.927 77.1411 114.138 84.7306 114.138H91.2219C91.2219 114.138 92.3037 117.502 88.6155 117.502H77.1411V120.649H89.5827C89.5827 120.649 95.0248 121.149 95.1232 114.838V92.5729H91.6317V110.891H84.829C84.829 110.891 80.944 110.891 80.649 107.344V92.5895V92.5729Z" fill="#ED1D24"/>
        <path d="M119.99 92.373H112.81V84.5295H109.155V114.238H120.678C129.268 113.206 128.645 103.097 128.645 103.097C128.252 92.6395 119.99 92.3897 119.99 92.3897M124.563 102.415C124.94 110.708 118.433 110.708 118.433 110.708H112.909V95.7036H118.433C124.842 96.403 124.563 102.415 124.563 102.415Z" fill="#ED1D24"/>
        <path d="M145.348 92.7228H132.513V95.7702H143.889C148.463 96.07 147.971 101.249 147.971 101.249H138.546C131.366 101.249 131.251 107.111 131.251 107.111C131.546 114.305 137.759 113.922 137.759 113.922H151.25V97.9184C151.053 92.8893 145.316 92.6895 145.316 92.6895M147.774 110.841H138.398C138.398 110.841 135.284 111.074 135.153 107.46C135.153 107.46 134.89 104.18 139.103 104.363H147.774V110.841Z" fill="#ED1D24"/>
        <path d="M157.2 95.9367V113.955H153.79V92.9392H166.232C166.232 92.9392 172.346 93.239 172.166 98.8509V113.955H168.756V100.333C168.756 100.333 169.084 95.7868 163.707 95.9367H157.2Z" fill="#ED1D24"/>
        <path d="M178.575 104.829V114.305H174.756V84.8959H178.526V100.949H179.296L189.656 92.9891H194L184.05 101.565H188.394C188.394 101.565 193.098 101.565 193.361 106.428V114.055H190.246V108.21C190.246 108.21 190.623 104.829 187.263 104.846H178.575V104.829Z" fill="#ED1D24"/>
        <path d="M0 30.7244C0 30.7244 25.9322 32.373 56.1756 0C56.1756 0 70.2236 46.6278 126.383 76.2698C126.383 76.2698 34.5709 39.5171 1.08188 126.195C1.08188 126.195 22.6866 60.8992 0 30.7244Z" fill="#231F20"/>
        <path d="M78.7309 38.2015C61.5193 17.6853 56.1755 0 56.1755 0C47.3074 9.49209 38.8163 16.0533 31.2432 20.5828C35.2264 25.7785 41.0292 33.5054 47.3566 42.3147C56.3886 39.8668 66.8303 38.2681 78.7473 38.2015" fill="#ED1D24"/>
        <path d="M31.2433 20.5829C12.9661 31.5238 0 30.7244 0 30.7244C6.16341 38.9176 9.06481 49.7253 9.99916 61.0991C16.933 55.3872 29.2926 47.194 47.3403 42.3148C41.0129 33.5221 35.2101 25.7952 31.2269 20.5829" fill="#DFE0E4"/>
        <path d="M10.0155 61.0991C12.5398 91.5737 1.08179 126.195 1.08179 126.195C18.0148 87.3106 41.9472 71.8235 64.3551 67.1108C58.913 58.7011 52.9299 50.0916 47.3402 42.2981C29.2925 47.194 16.9329 55.3705 9.99907 61.0824" fill="#ED1D24"/>
        <mask id="mask0_98_1098" maskUnits="userSpaceOnUse" x="47" y="38" width="80" height="39">
          <path d="M126.383 76.2698C126.383 76.2698 126.284 76.2199 126.137 76.1366C126.219 76.1866 126.301 76.2199 126.383 76.2698ZM47.3403 42.3148C52.93 50.1083 58.9131 58.7178 64.3553 67.1274C95.2215 60.6495 123.203 74.6212 126.121 76.1366C104.68 64.7794 89.4023 50.9576 78.7147 38.2015C66.8141 38.2515 56.356 39.8668 47.3403 42.3148Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_98_1098)">
          <path d="M126.366 38.2015H47.3403V76.2698H126.366V38.2015Z" fill="url(#paint0_linear_98_1098)"/>
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_98_1098" x1="50.5417" y1="63.393" x2="129.568" y2="63.393" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="0.05" stop-color="#F8F8F8"/>
          <stop offset="0.7" stop-color="#A2A3A5"/>
          <stop offset="1" stop-color="#808285"/>
        </linearGradient>
        <clipPath id="clip0_98_1098">
          <rect width="194" height="140" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CityBank;
