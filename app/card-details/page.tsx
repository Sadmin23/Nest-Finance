'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cardrow from '../../components/Cardrow'

export default function CoursesPage() {
  const router = useRouter();

  return (
    <div className='bg-[#F2F4F7] '>
      <div className="h-[820px] bg-[#5d557e] flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="949" height="522" viewBox="0 0 949 522" fill="none" style={{ position: 'absolute', top: 310, left: 0 }}>
          <path d="M948.083 93.2815L946.001 85.3864L938.106 87.4683L940.188 95.3634L948.083 93.2815ZM235.321 498.498L235.422 499.493L235.321 498.498ZM-19.6086 520.755C-17.5216 520.755 -15.5473 520.759 -13.6781 520.767L-13.6696 518.767C-15.5418 518.759 -17.5189 518.755 -19.6086 518.755V520.755ZM-2.04185 520.878C2.6727 520.952 6.41743 521.052 9.47439 521.158L9.54366 519.159C6.47345 519.053 2.71608 518.952 -2.01044 518.878L-2.04185 520.878ZM21.1054 521.672C24.7091 521.813 27.3336 521.769 32.7849 521.266L32.6011 519.275C27.2232 519.771 24.6872 519.811 21.1836 519.674L21.1054 521.672ZM44.3336 520.046C47.5672 519.684 51.3647 519.251 55.876 518.737L55.6496 516.75C51.1377 517.264 47.3422 517.696 44.1109 518.058L44.3336 520.046ZM67.5462 517.41C71.0503 517.013 74.8691 516.582 79.0378 516.115L78.8149 514.127C74.6454 514.595 70.8258 515.026 67.3211 515.423L67.5462 517.41ZM90.5734 514.828C94.2133 514.424 98.0722 513.997 102.166 513.548L101.947 511.56C97.853 512.009 93.9934 512.436 90.3527 512.84L90.5734 514.828ZM113.84 512.271C117.487 511.874 121.295 511.461 125.272 511.031L125.057 509.043C121.08 509.472 117.271 509.885 113.624 510.283L113.84 512.271ZM136.77 509.795C140.533 509.392 144.432 508.975 148.471 508.546L148.259 506.557C144.22 506.987 140.321 507.403 136.557 507.806L136.77 509.795ZM159.96 507.328C163.699 506.932 167.549 506.527 171.512 506.11L171.303 504.121C167.339 504.538 163.489 504.943 159.749 505.339L159.96 507.328ZM183.177 504.889C186.903 504.5 190.722 504.102 194.636 503.695L194.43 501.706C190.515 502.112 186.696 502.51 182.969 502.9L183.177 504.889ZM206.334 502.483C210.073 502.096 213.894 501.702 217.798 501.3L217.593 499.311C213.689 499.713 209.868 500.107 206.128 500.493L206.334 502.483ZM229.427 500.106C231.406 499.904 233.404 499.699 235.422 499.493L235.219 497.503C233.2 497.709 231.202 497.914 229.223 498.117L229.427 500.106ZM235.422 499.493C237.509 499.279 239.572 499.03 241.613 498.744L241.336 496.764C239.32 497.046 237.281 497.292 235.219 497.503L235.422 499.493ZM253.591 496.61C257.568 495.744 261.455 494.735 265.255 493.589L264.678 491.674C260.928 492.805 257.092 493.8 253.166 494.656L253.591 496.61ZM276.768 489.602C280.542 488.121 284.225 486.498 287.822 484.739L286.944 482.943C283.394 484.678 279.76 486.279 276.037 487.74L276.768 489.602ZM298.521 478.969C301.997 476.912 305.39 474.723 308.702 472.409L307.556 470.769C304.284 473.056 300.934 475.217 297.502 477.248L298.521 478.969ZM318.381 465.112C321.51 462.576 324.565 459.923 327.55 457.161L326.191 455.693C323.237 458.427 320.215 461.051 317.122 463.559L318.381 465.112ZM336.169 448.684C338.954 445.779 341.677 442.776 344.342 439.679L342.826 438.375C340.183 441.445 337.485 444.422 334.725 447.299L336.169 448.684ZM351.979 430.354C354.46 427.177 356.889 423.918 359.271 420.582L357.643 419.42C355.277 422.734 352.865 425.97 350.403 429.124L351.979 430.354ZM366.064 410.676C368.286 407.305 370.467 403.868 372.61 400.369L370.904 399.325C368.772 402.806 366.603 406.224 364.394 409.575L366.064 410.676ZM378.723 390.051C380.723 386.564 382.692 383.024 384.631 379.436L382.872 378.485C380.94 382.06 378.98 385.584 376.988 389.056L378.723 390.051ZM390.246 368.763C392.072 365.2 393.874 361.596 395.654 357.954L393.857 357.076C392.082 360.707 390.286 364.3 388.466 367.851L390.246 368.763ZM400.888 347.015C402.582 343.401 404.258 339.755 405.919 336.082L404.096 335.258C402.439 338.924 400.767 342.561 399.077 346.166L400.888 347.015ZM410.858 324.982C412.461 321.324 414.052 317.643 415.633 313.943L413.794 313.157C412.215 316.853 410.627 320.528 409.026 324.18L410.858 324.982ZM420.339 302.807C421.891 299.099 423.435 295.376 424.973 291.641L423.124 290.879C421.586 294.611 420.044 298.331 418.494 302.035L420.339 302.807ZM429.543 280.483C431.063 276.754 432.58 273.017 434.097 269.273L432.243 268.522C430.727 272.265 429.21 276.001 427.691 279.728L429.543 280.483ZM438.622 258.097C440.131 254.369 441.641 250.64 443.156 246.912L441.303 246.159C439.788 249.889 438.277 253.619 436.768 257.346L438.622 258.097ZM447.717 235.731C449.243 232.006 450.776 228.286 452.318 224.573L450.471 223.806C448.928 227.522 447.394 231.245 445.866 234.973L447.717 235.731ZM456.97 213.464C458.542 209.745 460.126 206.037 461.722 202.344L459.886 201.55C458.287 205.249 456.702 208.962 455.128 212.685L456.97 213.464ZM466.556 191.309C468.193 187.625 469.845 183.959 471.515 180.316L469.697 179.482C468.023 183.133 466.368 186.806 464.728 190.497L466.556 191.309ZM476.623 169.372C478.346 165.749 480.089 162.152 481.856 158.585L480.063 157.698C478.292 161.275 476.544 164.881 474.817 168.513L476.623 169.372ZM487.335 147.77C489.187 144.198 491.066 140.661 492.974 137.162L491.219 136.204C489.303 139.716 487.418 143.266 485.559 146.85L487.335 147.77ZM498.873 126.639C500.891 123.139 502.942 119.684 505.029 116.277L503.324 115.232C501.227 118.655 499.167 122.126 497.141 125.64L498.873 126.639ZM511.442 106.144C513.662 102.751 515.923 99.4139 518.227 96.1364L516.591 94.9861C514.273 98.2827 512 101.639 509.768 105.049L511.442 106.144ZM525.274 86.488C527.728 83.2572 530.23 80.0939 532.785 77.0029L531.243 75.7288C528.67 78.8419 526.151 82.0267 523.681 85.2784L525.274 86.488ZM540.618 67.9396C543.323 64.9502 546.085 62.0402 548.908 59.2146L547.493 57.8012C544.646 60.651 541.862 63.5848 539.135 66.5977L540.618 67.9396ZM557.61 50.9499C560.59 48.2695 563.635 45.6804 566.748 43.1875L565.498 41.6263C562.354 44.1438 559.28 46.7578 556.273 49.463L557.61 50.9499ZM576.342 35.9712C579.603 33.6721 582.937 31.4748 586.346 29.3843L585.301 27.6793C581.854 29.7926 578.485 32.0134 575.19 34.3365L576.342 35.9712ZM596.759 23.4623C600.288 21.6077 603.895 19.8627 607.583 18.2322L606.775 16.403C603.045 18.0518 599.397 19.8165 595.829 21.6919L596.759 23.4623ZM618.631 13.7857C622.394 12.4159 626.237 11.1601 630.165 10.0229L629.609 8.10177C625.638 9.25146 621.752 10.5212 617.947 11.9063L618.631 13.7857ZM641.603 7.10414C645.484 6.24338 649.444 5.49334 653.485 4.85804L653.174 2.88231C649.092 3.52398 645.092 4.28173 641.17 5.15159L641.603 7.10414ZM665.316 3.35272C669.211 2.97069 673.179 2.69069 677.221 2.51597L677.135 0.517834C673.057 0.694103 669.053 0.976631 665.121 1.36227L665.316 3.35272ZM689.527 2.31042C693.346 2.34526 697.23 2.47014 701.179 2.68751L701.289 0.690533C697.31 0.471515 693.396 0.345629 689.545 0.310504L689.527 2.31042ZM713.224 3.61959C717.205 4.01445 721.25 4.49966 725.36 5.0775L725.638 3.09697C721.502 2.51544 717.43 2.02697 713.421 1.62935L713.224 3.61959ZM736.904 6.91511C740.809 7.60768 744.77 8.38088 748.789 9.2365L749.206 7.28033C745.165 6.42008 741.181 5.64249 737.254 4.94584L736.904 6.91511ZM760.841 12.0076C764.537 12.9191 768.28 13.8979 772.071 14.9452L772.604 13.0174C768.795 11.9653 765.034 10.9818 761.32 10.0658L760.841 12.0076ZM783.59 18.294C787.478 19.4797 791.415 20.7351 795.402 22.0616L796.034 20.1639C792.031 18.8322 788.078 17.5717 784.173 16.381L783.59 18.294ZM806.636 25.941C810.274 27.2424 813.952 28.6013 817.671 30.0184L818.383 28.1495C814.652 26.7276 810.961 25.364 807.31 24.0579L806.636 25.941ZM828.951 34.4459C832.752 35.9807 836.594 37.5747 840.478 39.2288L841.262 37.3887C837.366 35.7298 833.512 34.131 829.699 32.5914L828.951 34.4459ZM851.28 43.9361C854.815 45.5108 858.383 47.134 861.985 48.8063L862.827 46.9923C859.216 45.3157 855.638 43.6882 852.094 42.1092L851.28 43.9361ZM872.895 53.9714C876.566 55.7426 880.272 57.5636 884.013 59.4351L884.907 57.6464C881.158 55.7708 877.444 53.9455 873.764 52.1701L872.895 53.9714ZM894.87 64.9573C898.275 66.7175 901.708 68.5184 905.171 70.3606L906.11 68.595C902.641 66.7491 899.2 64.9445 895.788 63.1806L894.87 64.9573ZM915.644 76.0114C919.164 77.9365 922.712 79.9033 926.29 81.9122L927.27 80.1683C923.685 78.1558 920.13 76.1854 916.603 74.2567L915.644 76.0114ZM937.113 88.0659C938.932 89.1129 940.758 90.1706 942.591 91.2389L943.598 89.5109C941.762 88.4408 939.933 87.3814 938.111 86.3326L937.113 88.0659Z" fill="url(#paint0_linear_159_46)"/>
          <defs>
          <linearGradient id="paint0_linear_159_46" x1="454.266" y1="-18.9285" x2="454.266" y2="513.657" gradientUnits="userSpaceOnUse">
            <stop stop-color="#B372C4"/>
            <stop offset="1" stop-color="#8EE3D1"/>
          </linearGradient>
          </defs>
        </svg>
        <div className='w-3/5'>
          <div className="pl-40 pt-44 font-inter mx-auto  font-medium text-7xl text-gray-50 absolute w-[800px] leading-tight">
            <h1>Best Credit Cards Of August 2023</h1>
          </div>
          <div className="pl-40 pt-[380px] w-[870px] text-white font-inter font-medium text-base absolute">
            No single credit card is the best option for every family, purchase or budget. Forbes Advisor has chosen the best credit cards of 2023 to be the most helpful to the widest variety of readers. Rather than selecting the “best credit card” and ranking the next fifteen options, we highlighted the best credit card for multiple situations.
            <p className='pt-4'>This list contains only personal credit cards. If you’re looking for a credit card for your business, consider our list of the best business credit cards.</p>
          </div>
        </div>
        <div className='ml-5 mt-[150px]'>
          <Image
            src="/brand_assets/cardimage.png"
            width={430}
            height={100}
            alt="bg"
          />
        </div>
      </div>
      <div className='h-[1700px]'>
        <div className='flex h-56 ml-40 mr-48 my-20 bg-white'>
          <Image
            src="/brand_assets/left.png"
            width={227}
            height={100}
            alt="bg"
            className='block'
          />
          <div className='pl-10 pt-6'>
            <h1 className='text-[30px]'>Compare the best credit cards</h1>
            <h2 className='text-normal mt-4'>Choose the credit card of your choice from our extensive comparison features.</h2>
            <button className='rounded-[6px] w-[150px] h-10 mt-8 text-base font-normal text-white bg-[#53389E]'>Compare Now</button>
          </div>
          <Image
            src="/brand_assets/texture.png"
            width={280}
            height={100}
            alt="bg"
            className='mr-0 ml-auto'
          />
        </div>
        <div className='ml-40 mr-48 my-20 bg-white flex-col rounded-[8px]'>
          <div className='flex'>
            <h1 className='text-black font-inter font-medium text-2xl leading-10 tracking-tight w-96 px-10 py-12'>Best Credit Cards Of August 2023</h1>
            <svg className='ml-40 py-0' xmlns="http://www.w3.org/2000/svg" width="600" height="170" viewBox="0 0 749 170" fill="none">
              <path d="M0.919434 167.42C91.4783 167.42 -29.8038 175.367 255.849 146.164C541.501 116.96 343.89 1.09663 748.284 1.09656" stroke="url(#paint0_linear_159_47)" stroke-width="2" stroke-dasharray="12 12"/>
              <defs>
                <linearGradient id="paint0_linear_159_47" x1="474.794" y1="-371.263" x2="474.794" y2="161.323" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B372C4"/>
                  <stop offset="1" stop-color="#8EE3D1"/>
                </linearGradient>
              </defs>
            </svg>          
          </div>
          <div className='h-16 bg-[#EAECF0] flex py-5 font-medium'>
            <h1 className='ml-10'>Credit Card</h1>
            <div className='flex mr-24 ml-auto space-x-20'>
              <h1>Nerdwallet Rating</h1>
              <h1>Annual Fee</h1>
              <h1>Intro Offer</h1>
              <h1>Rewards Rate</h1>
              <h1>Apply Now</h1>
            </div>
          </div>
          <Cardrow imageno={1}/>
          <Cardrow imageno={2}/>
          <Cardrow imageno={3}/>
          <Cardrow imageno={4}/>
          <Cardrow imageno={5}/>
        </div>
      </div>
    </div>
  );
}
