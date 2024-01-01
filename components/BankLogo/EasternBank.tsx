'use client';

const EasternBank = ({ w, h }: { w: number, h: number }): JSX.Element => {

  let style = "ml-8 mt-1"

  if (w===165)
    style = "ml-24 mt-20"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={style} width={w} height={h} viewBox="0 0 131 145" fill="none">
      <path d="M9.9131 97.081L10.1903 100.948H9.4973C9.35871 99.5667 8.94295 98.7381 8.38858 98.3238C7.8342 97.9095 7.14126 97.7715 5.89392 97.7715C5.06237 97.7715 4.50798 97.7715 4.23079 97.9096C4.0922 97.9096 3.95359 98.1857 3.95359 98.4619V102.052C4.09218 102.052 4.23079 102.052 4.23079 102.052H4.36939C5.20095 102.052 5.7553 101.776 6.17108 101.362C6.30967 101.086 6.44829 100.671 6.58689 99.981H7.27985V104.952H6.58689V104.676C6.58689 103.848 6.30969 103.295 5.75532 103.019C5.47814 102.881 5.06237 102.743 4.50799 102.743H3.95359V106.61V106.886C3.95359 107.024 4.0922 107.162 4.23079 107.162C4.36938 107.162 4.50797 107.162 4.78515 107.3C4.92375 107.3 5.06237 107.3 5.20096 107.3C5.47814 107.3 5.61674 107.3 5.89392 107.3C7.00266 107.3 7.8342 107.162 8.38858 106.748C8.94295 106.333 9.35871 105.505 9.4973 104.124V103.986H10.0517L9.7745 107.99H0.48877V107.3H1.45894C1.73612 107.3 2.01331 107.162 2.1519 107.024C2.1519 106.886 2.2905 106.748 2.2905 106.333V98.6C2.2905 98.1857 2.29049 97.9095 2.1519 97.7715C2.01331 97.6334 1.59753 97.6333 0.765972 97.6333V96.9429H9.9131V97.081Z" fill="#005BAA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7341 107.162C16.4271 106.748 16.7043 106.195 16.7043 105.505V104.676V104.4C15.7341 104.538 14.9025 104.676 14.3482 104.952C13.7938 105.229 13.5166 105.643 13.5166 106.333C13.5166 106.61 13.6552 106.886 13.7938 107.162C14.071 107.438 14.3482 107.576 14.764 107.576C15.0412 107.438 15.3183 107.438 15.7341 107.162ZM13.6552 104.4C14.3482 104.124 15.3183 103.848 16.7043 103.71V103.571C16.7043 103.571 16.7043 103.433 16.7043 103.295C16.7043 102.605 16.5657 102.191 16.4271 101.914C16.1499 101.638 15.7341 101.362 15.0411 101.362C14.7639 101.362 14.4868 101.362 14.071 101.5C13.7938 101.638 13.6552 101.776 13.6552 101.914C13.6552 101.914 13.6552 102.052 13.7938 102.191C13.9324 102.329 13.9324 102.605 13.9324 102.743C13.9324 103.019 13.7938 103.157 13.6552 103.295C13.5166 103.433 13.2394 103.433 13.1008 103.433C12.8237 103.433 12.6851 103.295 12.4079 103.157C12.2693 103.019 12.1307 102.743 12.1307 102.467C12.1307 101.914 12.4079 101.5 12.9622 101.224C13.5166 100.81 14.2096 100.672 15.0411 100.672C16.2885 100.672 17.12 100.948 17.5358 101.5C17.813 101.776 17.9516 102.329 17.9516 102.881V103.295V105.643V105.919C17.9516 106.333 17.9516 106.61 18.0902 106.748C18.2288 107.024 18.3674 107.162 18.6446 107.162C18.7831 107.162 18.7832 107.162 18.9218 107.024C19.0603 107.024 19.1989 106.886 19.1989 106.886H19.3375V107.024C19.3375 107.162 19.1989 107.3 18.9218 107.576C18.6446 107.714 18.3674 107.852 17.9516 107.852C17.5358 107.852 17.1201 107.714 16.9815 107.438C16.8429 107.3 16.7043 107.024 16.5657 106.748C16.2885 107.162 15.8727 107.438 15.3183 107.714C14.9026 107.852 14.3482 107.991 13.9324 107.991C13.2394 107.991 12.6851 107.852 12.4079 107.576C11.9921 107.3 11.8535 106.886 11.8535 106.195C11.9921 105.643 12.5465 104.952 13.6552 104.4Z" fill="#005BAA"/>
      <path d="M21.1392 101.362C21.555 100.948 22.1093 100.81 22.8023 100.81C23.218 100.81 23.6338 100.948 24.0496 101.086C24.1882 101.224 24.4654 101.362 24.7426 101.5L25.1584 100.948H25.7127V103.433H25.0198C24.8812 102.881 24.604 102.467 24.4654 102.191C24.0496 101.638 23.4952 101.5 22.8023 101.5C22.3865 101.5 21.9707 101.638 21.8321 101.776C21.555 101.914 21.4163 102.191 21.4163 102.605C21.4163 103.019 21.555 103.295 21.8321 103.433C21.9707 103.572 22.3865 103.71 22.8023 103.71L24.0496 103.986C24.7426 104.124 25.2969 104.4 25.5741 104.676C25.8513 104.952 25.9899 105.505 25.9899 106.195C25.9899 106.886 25.7127 107.438 25.297 107.852C24.8812 108.267 24.1882 108.405 23.4952 108.405C23.0795 108.405 22.6637 108.405 22.3865 108.267C22.1093 108.129 21.6935 107.991 21.4163 107.714L20.862 108.405H20.3076V105.505H20.862C21.0006 106.057 21.2778 106.61 21.5549 106.886C21.9707 107.576 22.6637 107.852 23.4952 107.852C23.911 107.852 24.3268 107.714 24.604 107.438C24.8812 107.162 25.0198 106.886 25.0198 106.61C25.0198 106.195 24.8812 105.919 24.604 105.781C24.3268 105.643 23.6338 105.505 22.6637 105.229C21.8321 105.091 21.2778 104.814 20.862 104.538C20.5848 104.262 20.3076 103.848 20.3076 103.157C20.5848 102.329 20.7234 101.776 21.1392 101.362Z" fill="#005BAA"/>
      <path d="M26.96 101.086H27.0986C27.7915 101.086 28.3459 100.533 28.6231 99.7048C28.7617 99.1524 28.9002 98.6 28.9002 98.0476H29.4546V101.086H31.6721V101.638H29.4546V106.057C29.4546 106.333 29.4546 106.61 29.5932 106.748C29.7318 107.024 30.009 107.3 30.4248 107.3C30.8405 107.3 31.2563 107.024 31.3949 106.471C31.5335 106.195 31.5335 105.781 31.5335 105.229H32.0879C32.0879 105.919 31.9493 106.61 31.8107 107.024C31.3949 107.852 30.702 108.129 29.7318 108.129C28.9002 108.129 28.4845 107.852 28.0687 107.3C27.9301 107.024 27.7915 106.61 27.7915 106.057V101.5H26.5442V101.086H26.96Z" fill="#005BAA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9089 103.986C38.0474 103.986 38.0475 103.71 38.0475 103.433C38.0475 103.019 37.9089 102.743 37.9089 102.329C37.6317 101.776 37.2159 101.362 36.5229 101.362C35.83 101.362 35.2756 101.776 34.9984 102.605C34.8598 103.019 34.7212 103.433 34.7212 103.848H37.4931C37.6317 103.986 37.9089 103.986 37.9089 103.986ZM34.0283 101.914C34.7212 101.224 35.4142 100.81 36.5229 100.81C37.4931 100.81 38.186 101.224 38.7404 101.914C39.2948 102.605 39.572 103.572 39.572 104.676H34.7212C34.7212 105.367 34.8598 105.919 34.9984 106.333C35.4142 107.162 35.9686 107.438 36.9387 107.438C37.4931 107.438 38.0475 107.3 38.3247 106.886C38.6018 106.748 38.7404 106.333 39.1562 105.781L39.7106 106.057C39.4334 106.748 39.0176 107.3 38.4633 107.576C37.9089 107.991 37.3545 108.129 36.5229 108.129C35.5528 108.129 34.7212 107.852 34.0283 107.162C33.3353 106.471 33.0581 105.643 33.0581 104.4C33.0581 103.571 33.4739 102.743 34.0283 101.914Z" fill="#005BAA"/>
      <path d="M40.4036 101.638V101.086L43.0368 100.948V103.295C43.314 102.605 43.4526 102.191 43.7298 101.914C44.1456 101.362 44.6999 100.948 45.3929 100.948C45.8087 100.948 46.0858 101.086 46.2244 101.224C46.5016 101.5 46.5016 101.776 46.5016 102.052C46.5016 102.329 46.363 102.605 46.2244 102.743C46.0858 102.881 45.8087 103.019 45.5315 103.019C45.2543 103.019 45.1157 102.881 44.9771 102.743C44.8385 102.605 44.6999 102.467 44.6999 102.19C44.6999 102.052 44.6999 101.914 44.8385 101.776C44.9771 101.638 44.9771 101.638 45.1157 101.5C44.4227 101.638 43.8684 102.19 43.4526 103.019C43.0368 103.986 42.8982 104.952 42.8982 106.195C42.8982 106.748 42.8982 107.024 43.0368 107.162C43.0368 107.3 43.314 107.3 43.5912 107.3H44.4227V107.852H40.4036V107.3C40.5422 107.3 40.5421 107.3 40.6807 107.3H40.8193H41.0965C41.3737 107.3 41.5123 107.3 41.6509 107.162C41.7895 107.024 41.7895 106.886 41.7895 106.61V103.019V102.467C41.7895 102.052 41.7895 101.914 41.6509 101.776C41.5123 101.638 41.3737 101.5 41.0965 101.5H40.4036V101.638Z" fill="#005BAA"/>
      <path d="M47.3333 107.438H48.0262C48.3034 107.438 48.442 107.438 48.442 107.3C48.5806 107.3 48.5806 107.024 48.5806 106.886V102.467C48.5806 102.052 48.5806 101.776 48.442 101.776C48.3034 101.638 47.8876 101.638 47.3333 101.638V101.086L49.9665 100.948V102.467C50.2437 102.052 50.5209 101.776 50.7981 101.5C51.2138 101.086 51.7682 100.948 52.4612 100.948C53.2927 100.948 53.8471 101.224 54.2629 101.638C54.6787 102.052 54.8173 102.743 54.8173 103.71V107.024C54.8173 107.162 54.8173 107.3 54.9559 107.438C54.9559 107.576 55.233 107.576 55.3716 107.576H56.0646V108.129H52.184V107.576C52.7384 107.576 53.1541 107.576 53.1541 107.438C53.2927 107.438 53.2927 107.3 53.2927 107.024V103.71C53.2927 103.157 53.1542 102.743 53.0156 102.329C52.877 102.052 52.4612 101.914 51.9068 101.914C51.6296 101.914 51.2139 102.052 50.9367 102.19C50.3823 102.605 49.9665 103.295 49.9665 104.4V106.886C49.9665 107.162 49.9665 107.3 50.1051 107.3C50.1051 107.438 50.3823 107.438 50.5209 107.438H51.2138V107.99H47.3333V107.438Z" fill="#005BAA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7958 102.743C64.5187 102.743 64.3801 102.743 64.1029 102.743V106.472C64.1029 106.886 64.2414 107.162 64.38 107.162C64.5186 107.162 64.9344 107.3 65.4888 107.3C66.7361 107.3 67.5677 107.162 67.9835 106.748C68.3992 106.333 68.6764 105.781 68.6764 104.952C68.6764 103.986 68.2607 103.295 67.5677 103.019C67.1519 102.743 66.3203 102.743 65.3502 102.743C65.2116 102.743 65.073 102.743 64.7958 102.743ZM60.7766 107.438C61.6082 107.438 62.1625 107.3 62.3011 107.3C62.4397 107.162 62.4397 107.024 62.4397 106.472V98.462V98.1858C62.4397 98.0477 62.3011 97.9096 62.1625 97.9096C62.0239 97.9096 61.8854 97.9096 61.6082 97.7715H60.7766V97.0811H66.4589C67.7063 97.0811 68.5378 97.3573 69.0922 97.9096C69.6465 98.462 69.9237 99.0144 69.9237 99.7049C69.9237 100.672 69.508 101.362 68.815 101.776C68.3992 102.052 67.8449 102.191 67.2905 102.329C67.9835 102.467 68.6764 102.605 69.0922 102.881C70.0623 103.295 70.4781 104.124 70.4781 105.091C70.4781 106.333 69.7852 107.162 68.5378 107.714C67.8449 107.991 66.8747 108.129 65.6274 108.129H60.7766V107.438ZM67.2905 101.776C67.8449 101.5 68.2607 100.948 68.2607 99.9811C68.2607 99.0144 67.9835 98.462 67.2905 98.0477C66.8747 97.7715 66.1818 97.7715 65.3502 97.7715C64.7958 97.7715 64.5186 97.7715 64.38 97.9096C64.2414 98.0477 64.1029 98.1858 64.1029 98.6001V102.052C65.6274 102.052 66.7361 102.052 67.2905 101.776Z" fill="#005BAA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M75.7447 107.162C76.2991 106.748 76.7148 106.195 76.7148 105.505V104.676V104.4C75.7447 104.538 74.9132 104.676 74.3588 104.952C73.8044 105.229 73.5272 105.643 73.5272 106.333C73.5272 106.61 73.6658 106.886 73.8044 107.162C74.0816 107.438 74.3588 107.576 74.6359 107.576C75.0517 107.438 75.3289 107.438 75.7447 107.162ZM73.6658 104.4C74.3588 104.124 75.3289 103.848 76.7148 103.71V103.571C76.7148 103.571 76.7148 103.433 76.7148 103.295C76.7148 102.605 76.5763 102.191 76.4377 101.914C76.1605 101.638 75.7447 101.362 75.0517 101.362C74.7746 101.362 74.4974 101.362 74.0816 101.5C73.8044 101.638 73.6658 101.776 73.6658 101.914C73.6658 101.914 73.6658 102.052 73.8044 102.191C73.943 102.329 73.943 102.605 73.943 102.743C73.943 103.019 73.943 103.157 73.6658 103.295C73.5272 103.433 73.3886 103.433 73.1115 103.433C72.8343 103.433 72.5571 103.295 72.4185 103.157C72.2799 103.019 72.2799 102.743 72.2799 102.467C72.2799 101.914 72.5571 101.5 73.1115 101.224C73.6658 100.81 74.3588 100.672 75.1903 100.672C76.4377 100.672 77.2692 100.948 77.685 101.5C77.9622 101.776 78.1008 102.329 78.1008 102.881V103.295V105.643V105.919C78.1008 106.333 78.1008 106.61 78.2394 106.748C78.378 107.024 78.5165 107.162 78.7937 107.162C78.9323 107.162 78.9323 107.162 79.2095 107.024C79.3481 107.024 79.4867 106.886 79.4867 106.886H79.6253V107.024C79.6253 107.162 79.4867 107.3 79.2095 107.576C78.9323 107.714 78.6551 107.852 78.2394 107.852C77.8236 107.852 77.4078 107.714 77.2692 107.438C77.1306 107.3 76.992 107.024 76.8534 106.748C76.5763 107.162 76.1605 107.438 75.6061 107.714C75.1903 107.852 74.636 107.991 74.2202 107.991C73.5272 107.991 72.9728 107.852 72.6957 107.576C72.2799 107.3 72.1413 106.886 72.1413 106.195C72.0027 105.643 72.5571 104.952 73.6658 104.4Z" fill="#005BAA"/>
      <path d="M80.1797 107.438H80.8727C81.1498 107.438 81.2885 107.438 81.2885 107.3C81.2885 107.162 81.4271 107.024 81.4271 106.886V102.467C81.4271 102.052 81.427 101.776 81.2885 101.776C81.1499 101.638 80.7341 101.638 80.1797 101.638V101.086L82.813 100.948V102.467C83.0902 102.052 83.3673 101.776 83.6445 101.5C84.0603 101.086 84.6147 100.948 85.3076 100.948C86.1392 100.948 86.6935 101.224 87.1093 101.638C87.5251 102.052 87.6637 102.743 87.6637 103.71V107.024C87.6637 107.162 87.6637 107.3 87.8023 107.438C87.8023 107.576 88.0795 107.576 88.2181 107.576H88.9111V108.129H85.0304V107.576C85.5848 107.576 85.862 107.576 86.1392 107.438C86.2778 107.438 86.2778 107.3 86.2778 107.024V103.71C86.2778 103.157 86.1392 102.743 86.0006 102.329C85.862 102.052 85.4462 101.914 84.8919 101.914C84.4761 101.914 84.1989 102.052 83.9217 102.19C83.3673 102.605 82.9515 103.295 82.9515 104.4V106.886C82.9515 107.162 82.9516 107.3 83.0901 107.3C83.0901 107.438 83.3674 107.438 83.5059 107.438H84.1989V107.99H80.3183V107.438H80.1797Z" fill="#005BAA"/>
      <path d="M89.1882 97.6334V96.9429L91.9601 96.8048V104.4L94.1776 102.329C94.3162 102.191 94.3162 102.191 94.3162 102.052V101.914C94.3162 101.914 94.3162 101.776 94.1776 101.776C94.1776 101.776 94.039 101.638 93.7618 101.638H92.9303V101.086H96.9494V101.638C96.5337 101.638 96.1179 101.776 95.7021 101.914C95.4249 102.052 95.0091 102.329 94.7319 102.605L93.6232 103.571L95.7021 106.333C95.9793 106.748 96.2565 107.024 96.3951 107.162C96.8109 107.438 97.088 107.576 97.6424 107.438V107.991H93.6232V107.438H94.1776C94.4548 107.438 94.5934 107.438 94.5934 107.438L94.7319 107.3V107.162C94.7319 107.162 94.5934 107.024 94.5934 106.886L92.7917 104.538L91.8215 105.367V106.886C91.8215 107.162 91.8215 107.3 91.9601 107.3C91.9601 107.438 92.0987 107.438 92.3759 107.438H93.0689V107.991H89.3268V107.438H90.0198C90.297 107.438 90.4356 107.438 90.5742 107.3C90.5742 107.162 90.7128 107.024 90.7128 106.886V98.462C90.7128 98.1858 90.7128 98.0477 90.5742 97.9096C90.4356 97.7715 90.1584 97.7715 89.8812 97.7715L89.1882 97.6334Z" fill="#005BAA"/>
      <path d="M102.632 107.99V107.3C103.186 107.3 103.463 107.3 103.602 107.3C103.74 107.3 103.74 107.3 103.879 107.3C104.018 107.3 104.156 107.162 104.156 107.024C104.156 106.886 104.295 106.748 104.295 106.471V98.4619C104.295 98.0476 104.156 97.9095 104.018 97.7715C103.879 97.7715 103.463 97.6333 102.632 97.6333V96.9429H107.621V97.6333C106.789 97.6333 106.374 97.6334 106.096 97.7715C105.958 97.7715 105.819 98.0476 105.819 98.4619V106.333C105.819 106.748 105.958 107.024 106.096 107.162C106.235 107.3 106.651 107.3 107.344 107.3C108.314 107.3 109.145 107.162 109.561 106.886C110.393 106.333 110.947 105.367 111.086 103.848H111.64L111.363 107.99H102.632Z" fill="#005BAA"/>
      <path d="M112.472 101.086H112.61C113.303 101.086 113.858 100.533 114.135 99.7048C114.273 99.1524 114.412 98.6 114.412 98.0476H115.105V101.086H117.322V101.638H115.105V106.057C115.105 106.333 115.105 106.61 115.244 106.748C115.382 107.024 115.659 107.3 116.075 107.3C116.491 107.3 116.907 107.024 117.045 106.471C117.184 106.195 117.184 105.781 117.322 105.229H117.877C117.877 105.919 117.738 106.61 117.6 107.024C117.184 107.852 116.629 108.129 115.521 108.129C114.828 108.129 114.273 107.852 113.996 107.3C113.858 107.024 113.719 106.61 113.719 106.057V101.5H112.472V101.086Z" fill="#005BAA"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M120.787 106.748C121.065 107.3 121.48 107.576 122.035 107.576C122.866 107.576 123.421 107.162 123.698 106.333C123.836 105.919 123.975 105.367 123.975 104.676C123.975 103.986 123.836 103.433 123.698 102.881C123.421 102.19 122.866 101.776 122.173 101.776C121.48 101.776 121.065 102.19 120.787 102.881C120.51 103.433 120.51 103.986 120.51 104.676C120.372 105.505 120.51 106.195 120.787 106.748ZM119.54 102.052C120.094 101.224 120.787 100.948 121.757 100.948C122.173 100.948 122.589 101.086 123.005 101.224C123.421 101.5 123.698 101.776 123.836 102.052V98.3238C123.836 98.0476 123.698 97.7715 123.421 97.7715C123.282 97.7715 122.866 97.7715 122.312 97.7715V97.081L125.222 96.9429V106.886C125.222 107.024 125.222 107.162 125.361 107.3C125.5 107.438 125.638 107.438 125.915 107.438H126.47V107.99L123.975 108.129V106.748C123.836 107.162 123.559 107.438 123.282 107.576C122.866 107.991 122.312 108.129 121.757 108.129C120.926 108.129 120.233 107.852 119.679 107.162C119.124 106.61 118.847 105.643 118.847 104.262C118.708 103.571 118.986 102.743 119.54 102.052Z" fill="#005BAA"/>
      <path d="M129.519 106.61C129.657 106.748 129.796 107.024 129.796 107.3C129.796 107.576 129.657 107.714 129.519 107.991C129.38 108.129 129.103 108.267 128.826 108.267C128.548 108.267 128.41 108.267 128.133 107.991C127.994 107.852 127.855 107.576 127.855 107.3C127.855 107.024 127.994 106.886 128.133 106.61C128.271 106.471 128.548 106.333 128.826 106.333C129.103 106.333 129.38 106.471 129.519 106.61Z" fill="#005BAA"/>
      <path d="M41.7894 60.4857C41.7894 60.4857 6.03247 82.0286 1.18173 68.6333C1.18173 68.6333 -4.91633 53.5809 22.3864 34.9381C22.3864 34.9381 8.38859 35.6285 14.9024 27.7571C14.9024 27.7571 24.0496 17.5381 40.5421 11.6L38.6018 13.9476C38.6018 13.9476 24.0495 20.1619 26.8214 27.0666C28.4845 31.0714 35.137 26.2381 35.137 26.2381L37.9088 27.2047C37.9088 27.2047 7.83419 46.4 15.1796 61.0381C15.1796 61.0381 23.218 70.9809 39.4333 59.2428L41.7894 60.4857Z" fill="#005BAA"/>
      <path d="M43.8683 12.7048C43.5912 12.9809 43.8683 14.6381 43.8683 14.6381C43.8683 14.6381 54.6786 9.39048 57.8662 12.1524C57.8662 12.1524 60.9152 16.2952 43.7297 25.9619V29.8286C43.7297 29.8286 70.3396 13.9476 72.2799 31.2095C72.2799 31.2095 74.2202 46.4 54.9558 69.6C54.9558 69.6 88.911 45.1572 88.0794 25.5476C88.0794 25.5476 86.4163 10.6333 61.331 18.919C61.331 18.919 70.7553 11.1857 63.4099 6.76666C63.4099 6.76666 55.5101 2.34761 43.8683 12.7048Z" fill="#FAA61A"/>
      <path d="M45.8087 0L43.7298 71.9476C73.943 65.319 112.61 57.5857 122.173 58.6905C122.173 58.6905 125.084 60.4857 119.679 61.5905C119.679 61.5905 40.265 81.0619 9.91315 95.1476L5.75537 80.5095C5.75537 80.5095 21.6935 76.781 42.0667 72.3619C42.2052 65.5952 43.1754 12.9809 40.265 8.4238L45.8087 0Z" fill="#00A651"/>
      <path d="M115.382 69.3238V65.5952H116.629V65.1809H113.719V65.5952H114.966V69.3238H115.382Z" fill="black"/>
      <path d="M117.184 69.3238V65.1809H117.877L118.986 68.219C118.986 68.3571 119.124 68.6333 119.124 68.7714C119.263 68.6333 119.263 68.3571 119.401 68.219L120.51 65.1809H121.203V69.3238H120.787V65.8714C120.649 66.2857 120.51 66.7 120.51 66.9762L119.678 69.3238H119.124L118.293 66.9762C118.154 66.7 118.015 66.2857 117.877 65.8714V69.3238H117.184Z" fill="black"/>
      <path d="M9.49736 137.267C9.77455 136.852 10.0517 136.576 10.1903 136.3C10.3289 136.024 10.3289 135.886 10.3289 135.61C10.3289 135.333 10.1903 135.057 9.91316 134.781C9.49739 134.505 9.0816 134.229 8.38863 134.091C7.83426 133.952 7.41847 133.952 6.7255 133.952C5.89395 133.952 5.06241 133.814 4.23085 133.676C4.09226 133.676 3.67647 133.538 2.70632 133.4C1.73617 133.262 1.18182 132.986 0.904634 132.848C0.627448 132.572 0.350263 132.295 0.21167 131.881C0.21167 131.743 0.21167 131.605 0.21167 131.467C0.21167 130.776 0.766024 129.948 2.01336 129.119C2.98351 128.429 3.95367 128.014 4.92382 127.876C5.47819 127.738 6.03257 127.6 6.58695 127.462C7.4185 127.324 7.97287 127.186 8.52724 127.186C9.2202 127.186 9.77455 127.324 10.1903 127.462C10.6061 127.6 10.8833 128.014 11.1605 128.429C10.7447 128.705 10.329 128.843 10.0518 128.843C9.77458 128.843 9.35878 128.981 8.943 128.981L9.49736 128.291C8.94299 128.152 8.38864 128.014 7.83427 128.014C7.14131 128.014 6.58695 128.152 5.89398 128.291C5.20102 128.429 4.50805 128.705 3.81509 129.119C3.26072 129.395 2.70634 129.672 2.29056 130.086C1.73619 130.5 1.459 130.914 1.459 131.329C1.459 131.605 1.59761 131.743 1.7362 131.881C1.87479 132.019 2.15194 132.295 2.56772 132.433C3.39928 132.848 4.36944 132.986 5.47818 133.124C6.72551 133.262 7.83425 133.262 8.8044 133.4C9.49736 133.538 10.0517 133.676 10.3289 133.814C10.8833 134.091 11.2991 134.367 11.4377 134.919C11.5763 135.057 11.5763 135.333 11.5763 135.61C11.5763 136.438 11.1605 137.267 10.3289 138.095C9.63596 138.924 8.80443 139.476 7.97287 139.891C7.4185 140.167 6.86412 140.305 6.44834 140.581C5.75538 140.857 5.20099 140.995 4.78521 141.133C4.64662 141.133 4.50804 141.133 4.23085 141.272C3.95367 141.272 3.81508 141.272 3.67649 141.272C3.5379 141.272 3.26069 141.272 3.26069 141.272C3.12209 141.272 3.12211 141.272 2.84492 141.133C2.56774 140.995 2.29055 140.857 2.15196 140.719C2.01337 140.581 2.01335 140.443 1.87476 140.029C2.15194 140.167 2.42914 140.305 2.70632 140.305C2.98351 140.305 3.26071 140.443 3.67649 140.443C4.64664 140.443 5.75536 140.167 6.86411 139.476C7.97285 138.786 8.8044 138.095 9.49736 137.267Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.457 133.124C15.1798 133.124 14.764 133.124 14.2097 133.262C13.6553 133.4 13.3781 133.4 13.1009 133.4C12.9623 133.4 12.9623 133.4 12.8237 133.4C13.1009 132.571 13.5167 132.295 14.2097 132.295C14.6254 132.295 15.0412 132.571 15.457 133.124ZM15.3184 137.681C15.3184 137.819 15.457 138.233 15.7341 138.924C15.8727 139.476 16.0113 139.891 16.0113 140.305C15.3184 140.167 14.9026 139.752 14.4868 139.062C14.2096 138.371 13.9325 137.543 13.9325 136.714C13.9325 136.024 14.0711 135.471 14.2097 135.195C14.4868 135.471 14.764 136.024 15.0412 136.714C15.1798 136.991 15.3184 137.405 15.3184 137.681Z" fill="black"/>
      <path d="M18.7831 140.443C18.3674 140.305 18.0902 139.891 17.9516 139.338C17.9516 139.062 17.813 138.648 17.6744 137.957C17.3972 136.852 17.2586 135.886 16.9814 134.781C16.9814 134.643 16.9814 134.367 16.9814 134.091C16.9814 133.814 16.9814 133.814 16.9814 133.676C16.9814 133.262 17.12 133.124 17.2586 133.124C17.2586 133.124 17.3972 133.124 17.5358 133.262C17.6744 133.262 17.813 133.676 17.9516 134.091C18.0902 134.505 18.0902 134.919 18.2288 135.195C18.2288 135.886 18.3673 136.714 18.5059 137.405C18.6445 138.233 19.0603 138.924 19.4761 139.2C19.7533 138.648 20.1691 138.095 20.4463 137.405C20.7234 136.852 21.0006 136.162 21.2778 135.61C21.4164 135.195 21.555 134.919 21.6936 134.781C21.8322 134.643 21.9708 134.505 22.248 134.505C22.5251 134.505 22.8023 134.781 23.2181 135.195C23.4953 135.472 23.7725 136.024 23.9111 136.438C24.0497 136.852 24.3269 137.129 24.4654 137.405C24.604 137.543 24.8812 137.681 25.0198 137.681C25.297 137.681 25.8514 137.267 26.5443 136.438C27.2373 135.61 27.9302 135.057 28.346 135.057C28.7618 135.057 29.039 135.195 29.4548 135.61C29.732 135.886 29.8706 136.162 30.1478 136.576C30.4249 137.129 30.7021 137.819 30.9793 138.372C31.1179 138.51 31.2565 138.648 31.2565 138.786C31.3951 138.786 31.5337 138.924 31.6722 138.924C31.8108 138.924 31.9495 138.924 32.088 138.924C32.2266 138.924 32.2266 139.062 32.3652 139.338C32.088 139.476 31.8109 139.476 31.5337 139.476C30.9793 139.476 30.5635 139.2 30.1478 138.51C30.0092 138.372 29.732 137.681 29.1776 136.576C28.9004 136.024 28.6232 135.748 28.346 135.748C28.0688 135.748 27.7916 135.886 27.5145 136.3C27.3759 136.438 27.0987 136.852 26.8215 137.267C26.5443 137.819 26.1286 138.233 25.8514 138.372C25.5742 138.648 25.1584 138.648 24.8812 138.648C24.1882 138.648 23.7725 138.095 23.2181 137.267C22.6637 136.162 22.2479 135.471 22.1094 135.333C21.6936 136.438 21.2778 137.267 21.0006 137.957C20.4463 139.2 19.7533 139.752 19.1989 139.752C19.0603 140.443 18.9217 140.443 18.7831 140.443Z" fill="black"/>
      <path d="M40.5423 135.886C40.9581 136.3 41.0966 136.714 41.0966 137.129C41.0966 137.819 40.5423 138.51 39.4335 139.2C38.4634 139.752 37.4932 140.029 36.3845 140.029C36.1073 140.029 35.8301 140.029 35.6915 139.89C36.6617 139.614 37.3546 139.338 37.7704 139.2C38.602 138.786 39.1563 138.233 39.4335 137.681C39.5721 137.405 39.5721 137.267 39.5721 137.129C39.5721 136.714 39.2949 136.3 38.8791 136.024C38.4634 135.748 38.0476 135.609 37.4932 135.471C37.0774 135.333 36.8003 135.333 36.3845 135.333C35.6915 135.333 35.2757 135.471 34.86 135.61C34.4442 135.886 34.167 136.3 34.167 136.852C34.167 137.681 34.4442 138.786 34.9986 140.305C35.5529 141.824 35.8301 142.929 35.8301 143.757C35.8301 144.033 35.8301 144.309 35.8301 144.448C35.8301 144.586 35.8301 144.724 35.6915 145C35.1372 144.724 34.7214 144.171 34.3056 143.067C34.0284 142.514 33.8898 141.686 33.6126 140.581C33.474 139.89 33.3354 139.062 33.1968 137.819C33.0582 136.576 32.9197 135.748 32.9197 135.333C33.8898 135.057 34.5828 134.919 34.86 134.781C35.6915 134.643 36.3845 134.505 36.9389 134.505C37.6318 134.505 38.3248 134.643 38.8791 134.919C39.4335 134.919 39.9879 135.333 40.5423 135.886Z" fill="black"/>
      <path d="M43.0368 135.471C43.0368 135.195 42.8982 134.643 42.8982 133.814C42.7596 132.71 42.7596 131.743 42.7596 131.191C42.7596 130.914 42.7596 130.5 42.621 129.948C42.4824 129.257 42.4824 128.843 42.4824 128.429C42.4824 128.152 42.4824 127.876 42.621 127.738C42.7596 127.6 42.7596 127.462 43.0368 127.324C43.4526 129.395 43.7297 131.467 43.7297 133.538C43.7297 134.367 43.8684 135.195 44.007 135.886C44.1455 136.438 44.2841 137.267 44.5613 138.233C44.6999 138.648 44.8385 139.476 45.2543 140.581C44.5613 140.443 44.1455 139.614 43.7297 138.371C43.314 137.681 43.1754 136.576 43.0368 135.471Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.7981 131.743C51.0753 131.881 51.4911 132.019 51.6296 132.295C51.9068 132.572 52.0454 132.848 52.0454 133.262V133.4C51.9068 134.367 51.0753 135.333 49.5508 136.3C48.8578 136.714 48.1648 137.129 47.4719 137.405C47.8876 138.095 48.5806 138.648 49.4122 138.924C50.1051 139.2 50.9367 139.338 51.9068 139.338C52.3226 139.338 52.5998 139.338 53.0156 139.338C53.2928 139.338 53.7085 139.2 54.1243 139.2C54.5401 139.2 54.9559 139.062 55.5102 138.924C55.926 138.786 56.4804 138.648 56.8962 138.51C57.0347 138.51 57.3119 138.372 57.5891 138.233C58.2821 137.819 58.6978 137.681 58.6978 137.681C58.8364 137.681 58.975 137.681 58.975 137.681C58.975 137.681 59.1136 137.543 58.975 137.543C59.1136 137.543 59.2522 137.543 59.3908 137.543C58.5593 138.095 57.7277 138.648 56.8962 139.062C55.6488 139.476 54.9558 139.752 54.6787 139.891C53.8471 140.167 53.0156 140.305 52.3226 140.305C50.7981 140.305 49.5507 140.029 48.3034 139.476C46.7789 138.786 46.0859 137.819 46.0859 136.576C46.0859 136.3 46.0859 136.024 46.2245 135.886C46.5017 134.781 46.9175 133.814 47.749 133.124C48.442 132.433 49.2735 132.019 50.5209 131.605C50.5209 131.605 50.5209 131.605 50.6595 131.605C50.5209 131.605 50.6595 131.605 50.7981 131.743ZM49.6893 135.195C49.9665 134.919 50.3823 134.781 50.5209 134.367C50.7981 133.952 51.0752 133.538 51.0752 133.262C51.0752 132.986 50.9367 132.848 50.6595 132.571C50.5209 132.433 50.2437 132.433 50.1051 132.433C49.8279 132.433 49.5507 132.572 49.2736 132.71C49.135 132.848 48.8578 132.986 48.442 133.124C48.0262 133.4 47.6104 133.814 47.3333 134.229C47.0561 134.781 46.9175 135.195 46.9175 135.748C46.9175 136.024 46.9175 136.162 47.0561 136.438C47.4718 136.3 47.8876 136.162 48.442 135.886C48.8578 135.748 49.2735 135.472 49.6893 135.195Z" fill="black"/>
      <path d="M81.4271 124.01C81.7043 124.562 81.9814 125.391 82.2586 126.219C82.3972 126.495 82.5358 127.876 82.813 130.086C82.9516 130.638 82.9516 131.19 83.0902 131.881C83.5059 133.676 83.7831 134.781 83.7831 135.057C83.7831 135.333 83.9217 135.748 84.1989 136.162C84.6147 137.267 84.7533 138.095 84.8919 138.371C83.9217 138.095 83.2288 136.991 82.6744 134.919C82.6744 134.781 82.5358 133.952 82.2586 132.433C82.12 131.329 81.8428 130.086 81.7042 128.981C81.427 127.6 81.1498 126.495 80.8727 125.529C80.3183 125.943 79.7639 126.633 79.2096 127.876C78.9324 128.843 78.5166 129.81 78.2394 130.776C77.8236 131.605 77.4079 132.433 76.9921 132.986C76.2991 133.952 75.7448 134.505 75.1904 134.781C75.0518 134.781 74.9132 134.919 74.7746 134.919C74.636 134.919 74.4974 135.057 74.3588 135.057C73.3887 135.057 72.5571 134.367 71.587 132.848C71.1712 132.295 70.7554 131.605 70.3396 130.914C70.2011 131.191 70.201 131.467 70.0624 131.743C70.0624 132.019 70.0624 132.295 70.0624 132.571C70.0624 133.262 70.201 134.229 70.6168 135.61C71.0326 136.991 71.1712 137.957 71.1712 138.648C71.1712 138.924 71.1712 139.338 71.0326 139.614C70.4782 139.476 70.201 139.062 70.0624 138.51C69.9238 138.095 69.9238 137.543 69.9238 136.852C69.9238 136.576 69.7852 136.024 69.7852 135.333C69.6466 134.643 69.6467 134.229 69.6467 133.952C69.6467 133.538 69.5081 132.433 69.3695 130.638C69.2309 129.81 69.2309 129.119 69.2309 128.705C69.2309 128.429 69.2309 128.014 69.0923 127.6C68.8151 126.633 68.6765 126.219 68.6765 125.943C68.6765 125.667 68.6765 125.39 68.8151 125.114C69.2309 125.252 69.5081 125.391 69.6467 125.529C69.7853 125.667 69.9238 126.081 69.9238 126.633C70.0624 127.186 70.0624 127.738 70.201 128.014C70.3396 128.567 70.4782 128.981 70.7554 129.533C71.3098 130.638 71.8642 131.467 72.4185 132.157C73.2501 133.124 73.943 133.676 74.636 133.676C74.9132 133.676 75.1904 133.538 75.4676 133.4C75.7447 133.124 76.0219 132.848 76.2991 132.433C76.9921 131.329 77.4079 130.5 77.685 130.086C78.2394 129.257 78.5166 128.429 78.7938 127.738C79.071 127.048 79.3482 126.357 79.7639 125.667C80.1797 124.976 80.5955 124.424 81.1499 123.871H81.4271V124.01Z" fill="black"/>
      <path d="M90.8514 131.743C91.1286 131.881 91.4058 132.157 91.5444 132.433C91.683 132.71 91.683 132.986 91.683 133.262C91.683 133.676 91.5444 133.952 91.4058 134.229C91.4058 133.538 91.2672 133.124 90.99 132.709C90.8514 132.433 90.4356 132.295 90.0199 132.295C89.4655 132.295 88.7725 132.571 87.941 133.262C87.248 133.952 86.6936 134.505 86.555 135.195C86.4165 135.61 86.2779 136.024 86.1393 136.438C86.0007 137.129 85.8621 137.543 85.8621 137.957C85.8621 138.371 86.0007 138.786 86.1393 139.062C86.2779 139.338 86.6936 139.476 87.1094 139.476C87.1094 139.476 87.248 139.476 87.3866 139.476C88.2182 139.476 88.9111 139.2 89.7427 138.51C90.2971 137.957 90.99 137.267 91.5444 136.576C92.2374 135.886 92.9303 135.333 93.6233 135.195C93.6233 135.333 93.7619 135.748 93.9005 136.3C94.0391 137.267 94.3162 137.957 94.732 138.233C95.0092 138.509 95.1478 138.648 95.425 138.648C95.7022 138.786 95.9794 138.786 96.2565 138.786C96.5337 138.786 96.8109 138.786 97.0881 138.648C97.7811 138.51 98.3354 138.51 98.474 138.51H98.7512C98.1969 138.786 97.7811 139.062 97.2267 139.2C96.6723 139.476 96.118 139.614 95.7022 139.614C95.425 139.614 95.2864 139.614 95.0092 139.614C94.4548 139.476 94.0391 139.2 93.6233 138.924C93.6233 138.786 93.2075 138.095 92.5146 136.714C91.9602 137.267 91.5444 137.681 90.99 138.233C90.4357 138.786 89.8813 139.2 89.3269 139.476C89.0497 139.752 88.634 139.89 88.2182 140.029C87.8024 140.167 87.3866 140.167 86.9709 140.167C86.8323 140.167 86.8322 140.167 86.6936 140.167C86.5551 140.167 86.555 140.167 86.4164 140.167C85.8621 140.029 85.4463 139.89 85.3077 139.476C85.1691 139.2 85.0305 138.648 85.0305 137.957C85.0305 136.438 85.4463 135.195 86.2779 133.952C87.1094 132.709 88.2182 131.743 89.6041 131.19C89.7427 131.19 89.8813 131.329 90.0199 131.329C90.5742 131.605 90.7128 131.605 90.8514 131.743Z" fill="black"/>
      <path d="M103.186 128.152V126.633C103.186 126.357 103.186 126.219 103.325 126.219C103.325 126.081 103.463 126.081 103.602 126.081C103.879 126.081 104.018 126.081 104.156 126.081C104.156 127.186 104.156 128.152 104.295 128.981C104.295 129.81 104.572 130.638 104.711 131.467C105.681 131.329 106.651 131.19 107.344 130.776C108.175 130.5 108.868 129.948 109.561 129.395C109.561 130.086 109.284 130.638 108.73 131.052C108.453 131.329 107.76 131.467 106.928 131.743C106.235 131.881 105.819 132.157 105.542 132.433C105.265 132.71 105.126 133.124 105.126 133.814C105.265 134.643 105.404 135.471 105.681 136.438C105.958 137.129 106.235 137.957 106.651 138.786C106.928 139.338 107.344 140.167 107.898 141.133C106.789 140.857 105.958 139.89 105.404 138.371C105.126 137.681 104.849 136.3 104.572 134.367C104.572 133.814 104.295 133.262 104.018 132.986C103.74 132.71 103.325 132.709 102.909 132.709C102.632 132.709 102.216 132.709 101.661 132.848C100.553 133.124 99.8598 133.124 99.5826 133.124C99.3054 133.124 98.8897 133.124 98.7511 132.986C98.4739 132.848 98.3353 132.71 98.0581 132.433C98.3353 132.295 98.6125 132.157 99.0282 132.157C99.3054 132.157 99.7212 132.157 100.137 132.157H100.691C101.246 132.157 101.8 132.157 102.354 132.019C102.909 131.881 103.463 131.743 104.018 131.605C103.879 130.914 103.74 130.362 103.74 129.948C103.325 129.257 103.186 128.705 103.186 128.152Z" fill="black"/>
      <path d="M111.086 132.71C111.225 134.505 111.502 135.61 111.502 136.024C111.779 137.267 112.333 138.233 113.026 138.786C113.442 137.681 113.581 137.129 113.719 136.99C113.996 136.438 114.412 136.024 114.967 135.748C115.382 135.61 115.66 135.61 115.937 135.61C116.352 135.61 116.768 135.748 117.184 136.162C117.323 136.3 117.6 136.576 118.016 136.99C118.847 137.957 119.54 138.51 120.233 138.924C120.787 139.2 121.342 139.338 121.896 139.476C121.896 139.476 121.896 139.476 121.896 139.614C122.035 139.752 122.035 139.752 122.035 139.89C122.035 140.029 121.896 140.167 121.758 140.167C121.619 140.167 121.48 140.305 121.342 140.305C121.203 140.305 120.926 140.305 120.649 140.167C120.372 140.167 120.233 140.029 120.233 140.029C119.817 139.89 119.402 139.614 118.847 139.338C118.57 139.062 117.877 138.51 117.045 137.405C116.768 137.129 116.63 136.99 116.352 136.852C116.075 136.714 115.937 136.576 115.798 136.576C115.382 136.576 114.967 136.852 114.689 137.405C114.412 137.819 114.135 138.371 113.996 139.062C113.858 139.338 113.719 139.614 113.581 139.752C113.442 139.89 113.303 140.029 113.026 140.029C112.749 140.029 112.472 139.89 112.195 139.614C111.917 139.338 111.779 139.062 111.64 138.648C111.225 137.681 110.809 136.576 110.532 135.471C110.254 134.367 110.116 133.262 110.116 132.019C110.116 131.743 110.116 131.329 109.977 130.914C109.839 129.948 109.839 129.257 109.839 128.981C109.839 128.429 109.977 127.876 110.116 127.462C110.532 128.014 110.67 128.843 110.809 129.948C110.947 131.052 111.086 131.881 111.086 132.71Z" fill="black"/>
      <path d="M122.173 131.052V127.324H120.926V126.91H123.836V127.324H122.589V131.052H122.173Z" fill="black"/>
      <path d="M124.529 131.052V127.048H125.222L126.331 130.086C126.47 130.224 126.47 130.5 126.47 130.638C126.47 130.5 126.608 130.224 126.608 130.086L127.717 127.048H128.271V131.052H127.856V127.6C127.717 128.014 127.578 128.429 127.578 128.705L126.747 131.052H126.192L125.361 128.705C125.222 128.429 125.084 128.014 124.945 127.6V131.052H124.529Z" fill="black"/>
      <path d="M130.212 116.552H0.766113V116.829H130.212V116.552Z" fill="black"/>
    </svg>
  );
};

export default EasternBank;
