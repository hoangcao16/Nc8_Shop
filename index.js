import * as cryptoBrowserify from 'https://esm.run/crypto-browserify';
import buffer from 'https://cdn.jsdelivr.net/npm/buffer@6.0.3/+esm';
(function () {
  const currencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const imageList = {
    successIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9999 5.99999C14.0588 5.99999 5.9999 14.0589 5.9999 24C5.9999 33.9411 14.0588 42 23.9999 42C33.941 42 41.9999 33.9411 41.9999 24C41.9999 14.0589 33.941 5.99999 23.9999 5.99999ZM2.3999 24C2.3999 12.0706 12.0706 2.39999 23.9999 2.39999C35.9293 2.39999 45.5999 12.0706 45.5999 24C45.5999 35.9293 35.9293 45.6 23.9999 45.6C12.0706 45.6 2.3999 35.9293 2.3999 24ZM32.9005 15.9757C33.6871 16.5835 33.8321 17.714 33.2242 18.5006L23.0242 31.7006C22.6978 32.123 22.2008 32.3787 21.6673 32.3987C21.1339 32.4187 20.6191 32.2009 20.262 31.8041L14.862 25.8041C14.1969 25.0652 14.2568 23.9271 14.9958 23.2621C15.7347 22.597 16.8728 22.6569 17.5378 23.3959L21.4947 27.7923L30.3756 16.2994C30.9834 15.5128 32.1139 15.3678 32.9005 15.9757Z" fill="#34C759"/>
    </svg>`,
    failIcon: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="6" fill="#FFDEDE"/>
    <path d="M17.0049 18.5458C16.5907 18.5458 16.2549 18.21 16.2549 17.7958V13.3768C16.2549 12.9626 16.5907 12.6268 17.0049 12.6268C17.4191 12.6268 17.7549 12.9626 17.7549 13.3768V17.7958C17.7549 18.21 17.4191 18.5458 17.0049 18.5458Z" fill="#FF3B30"/>
    <path d="M17.0049 22.2958C17.5572 22.2958 18.0049 21.8481 18.0049 21.2958C18.0049 20.7435 17.5572 20.2958 17.0049 20.2958H16.9949C16.4426 20.2958 15.9949 20.7435 15.9949 21.2958C15.9949 21.8481 16.4426 22.2958 16.9949 22.2958H17.0049Z" fill="#FF3B30"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.75 17C27.75 22.9375 22.9375 27.75 17 27.75C11.0637 27.75 6.25 22.9375 6.25 17C6.25 11.0636 11.0636 6.25 17 6.25C22.9375 6.25 27.75 11.0637 27.75 17ZM17 26.25C22.109 26.25 26.25 22.109 26.25 17C26.25 11.892 22.109 7.75 17 7.75C11.8921 7.75 7.75 11.8921 7.75 17C7.75 22.109 11.892 26.25 17 26.25Z" fill="#FF3B30"/>
    </svg>`,
    TCBLogo: `<svg width="283" height="40" viewBox="0 0 283 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M137.268 17.69H138.28C138.71 17.69 139.083 17.6569 139.427 17.6348V21.0033H137.268V25.0278H139.427V28.8205C138.939 28.8205 138.397 28.8331 137.782 28.8331H132.429V10.2592H137.67C138.298 10.2592 138.88 10.2592 139.427 10.2986V13.9919C139.109 13.9557 138.738 13.9273 138.366 13.9273H137.268V17.69ZM158.135 10.2592V13.2838L158.122 13.257C157.995 13.7427 157.922 14.1591 157.801 14.5738C157.687 14.9933 157.573 15.3939 157.466 15.7645L155.564 21.8864H158.135V25.5072H154.437L153.43 28.8331H148.267L154.841 10.2592H158.135ZM139.427 17.6348C140.093 17.5764 140.604 17.4677 140.938 17.2675C141.388 16.9773 141.62 16.5042 141.62 15.8371C141.62 15.1417 141.425 14.6575 140.961 14.38C140.671 14.186 140.149 14.0487 139.427 13.9919V10.2986C140.64 10.3191 141.56 10.3776 142.129 10.4627C143.008 10.5873 143.744 10.8286 144.352 11.1645C145.082 11.5477 145.595 12.0602 145.951 12.7068C146.342 13.3486 146.514 14.0788 146.514 14.9193C146.514 15.9696 146.251 16.7818 145.71 17.4252C145.123 18.0386 144.276 18.4944 143.055 18.8508C144.406 18.9564 145.465 19.3964 146.222 20.2054C147.007 21.0444 147.371 22.1357 147.371 23.5171C147.371 24.5185 147.171 25.3748 146.738 26.1397C146.305 26.8809 145.679 27.477 144.9 27.887C144.237 28.215 143.433 28.461 142.469 28.6093C141.783 28.7307 140.749 28.781 139.427 28.8205V25.0278C140.471 24.9931 141.217 24.8623 141.67 24.5706C142.187 24.3072 142.455 23.7994 142.455 23.0898C142.455 22.3139 142.187 21.754 141.74 21.4781C141.3 21.1611 140.523 21.0269 139.427 21.0033V17.6348ZM192.503 28.8331V10.2592H197.66V18.6945L203.711 10.2592H209.756L202.696 19.319L210.369 28.8331H203.889L197.66 20.4907V28.8331H192.503ZM169.79 28.8331V10.2592H174.787L182 19.8047C182.136 20.0176 182.361 20.404 182.686 21.0033C183.005 21.5757 183.344 22.2838 183.722 23.0896C183.631 22.3137 183.55 21.6372 183.483 21.0269C183.458 20.4292 183.438 19.9009 183.438 19.4215V10.2592H188.412V28.8331H183.438L176.219 19.2323C176.091 19.0273 175.859 18.6614 175.548 18.0842C175.228 17.4834 174.883 16.7816 174.508 16.0105C174.588 16.7706 174.679 17.4676 174.734 18.0385C174.76 18.6614 174.787 19.1929 174.787 19.6549V28.8331H169.79ZM158.135 25.5072V21.8864H160.699L158.78 15.7645C158.723 15.5831 158.628 15.2724 158.535 14.8561C158.433 14.4556 158.29 13.9273 158.135 13.2838V10.2592H161.377L167.965 28.8331H162.786L161.81 25.5072H158.135Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.8197 10.1837V15.9379C82.1009 15.1702 81.4128 14.5717 80.7068 14.1854C80.0074 13.8105 79.2419 13.6346 78.4328 13.6346C76.9807 13.6346 75.7752 14.1229 74.8291 15.1948C73.9234 16.2059 73.456 17.5475 73.456 19.2162C73.456 20.7665 73.9588 22.0456 74.8581 23.0978C75.8106 24.1237 77.0097 24.6186 78.4328 24.6186C79.2419 24.6186 80.0074 24.4344 80.7068 24.0596C81.4128 23.6962 82.1009 23.0978 82.8197 22.2758V28.0694C81.993 28.4311 81.1904 28.7649 80.4055 28.9655C79.5545 29.1775 78.7567 29.2581 77.9348 29.2581C76.9033 29.2581 75.9186 29.1529 75.0676 28.8783C74.1732 28.6465 73.3754 28.2634 72.6195 27.7521C71.2286 26.7854 70.1488 25.5606 69.4075 24.1007C68.65 22.6079 68.2954 20.9605 68.2954 19.1175C68.2954 17.6362 68.5307 16.2848 68.9933 15.088C69.451 13.8664 70.1843 12.7879 71.1223 11.7933C72.0313 10.8627 73.0337 10.1607 74.1732 9.69379C75.2868 9.21702 76.5584 9 77.9348 9C78.7567 9 79.5545 9.07563 80.4055 9.27949C81.1904 9.49651 81.993 9.77435 82.8197 10.1837ZM47.845 28.7649V9.42417H53.0087V16.9688H59.8986V9.42417H65.0737V28.7649H59.8986V20.8981H53.0087V28.7649H47.845ZM44.9279 10.1837V15.9379C44.214 15.1702 43.5226 14.5717 42.815 14.1854C42.1381 13.8105 41.3581 13.6346 40.5636 13.6346C39.0583 13.6346 37.864 14.1229 36.947 15.1948C36.0348 16.2059 35.5626 17.5475 35.5626 19.2162C35.5626 20.7665 36.0493 22.0456 36.9695 23.0978C37.9236 24.1237 39.1163 24.6186 40.5636 24.6186C41.3581 24.6186 42.1381 24.4344 42.815 24.0596C43.5226 23.6962 44.214 23.0978 44.9279 22.2758V28.0694C44.0931 28.4311 43.3018 28.7649 42.4927 28.9655C41.6724 29.1775 40.8649 29.2581 40.0446 29.2581C39.0131 29.2581 38.03 29.1529 37.171 28.8783C36.2814 28.6465 35.49 28.2634 34.7454 27.7521C33.3385 26.7854 32.2603 25.5606 31.5044 24.1007C30.7582 22.6079 30.3875 20.9605 30.3875 19.1175C30.3875 17.6362 30.655 16.2848 31.1111 15.088C31.5785 13.8664 32.278 12.7879 33.2273 11.7933C34.1459 10.8627 35.1371 10.1607 36.2604 9.69379C37.3999 9.21702 38.6376 9 40.0446 9C40.8649 9 41.6724 9.07563 42.4927 9.27949C43.3018 9.49651 44.0931 9.77435 44.9279 10.1837ZM16.1902 28.7649V9.42417H27.7813V13.6905H21.2057V17.0263H27.4042V21.1743H21.2057V24.4344H27.7813V28.7649H16.1902ZM95.0783 9.01977V13.4505C93.6471 13.4505 92.4642 14.0095 91.5133 15.088C90.564 16.1714 90.1095 17.5294 90.1095 19.1538C90.1095 20.7912 90.564 22.1558 91.4891 23.2179C92.4078 24.298 93.6117 24.8159 95.0783 24.8159V29.2894C93.7164 29.2894 92.4077 29.028 91.1764 28.5315C89.9387 28.0021 88.8685 27.2754 87.9048 26.3103C86.9329 25.3519 86.1996 24.2668 85.6839 23.0403C85.1972 21.8122 84.9377 20.5249 84.9377 19.1538C84.9377 17.753 85.1972 16.4575 85.6839 15.2458C86.1996 14.0095 86.9329 12.9293 87.9048 11.9659C88.8685 11.0354 89.9387 10.3087 91.1764 9.7744C92.4077 9.2483 93.7164 9.01977 95.0783 9.01977ZM4.25592 28.7649V14.0094H-0.000488281V9.42417H13.6551V14.0094H9.41163V28.7649H4.25592ZM130.161 28.7649H125.324L124.214 20.4015C124.151 19.8245 124.058 19.1965 124.008 18.4468C123.942 17.7201 123.895 16.926 123.842 16.081C123.732 16.9046 123.465 17.9289 123.124 19.1537C123.021 19.4052 122.979 19.6025 122.95 19.7094L120.373 28.7649H116.934L114.357 19.7094C114.325 19.6025 114.284 19.4052 114.183 19.1537C113.844 17.9289 113.583 16.9046 113.508 16.081C113.451 16.8175 113.39 17.5475 113.295 18.2791C113.245 18.9794 113.156 19.7094 113.076 20.4015L111.956 28.7649H107.15L110.064 9.42417H115.197L118.056 19.4052C118.056 19.4759 118.112 19.6025 118.13 19.7752C118.425 20.658 118.596 21.4011 118.652 22.0456C118.683 21.6938 118.738 21.3189 118.862 20.8981C118.944 20.4755 119.078 19.9626 119.223 19.3905L122.119 9.42417H127.241L130.161 28.7649ZM95.0783 29.2894V24.8159C96.5094 24.8159 97.66 24.298 98.6109 23.2179C99.5747 22.1295 100.013 20.7912 100.013 19.1538C100.013 17.5294 99.5747 16.1714 98.5915 15.088C97.6455 14.0095 96.4804 13.4505 95.0783 13.4505V9.01977C96.4127 9.01977 97.7067 9.2483 98.9638 9.7744C100.195 10.3087 101.312 11.0354 102.255 11.9659C103.188 12.9293 103.92 14.0095 104.424 15.2458C104.946 16.4575 105.199 17.753 105.199 19.1538C105.199 20.5249 104.946 21.8369 104.424 23.0699C103.936 24.2668 103.188 25.3519 102.255 26.3103C101.283 27.2754 100.195 28.0021 98.9284 28.5315C97.7067 29.028 96.4127 29.2894 95.0783 29.2894Z" fill="#ED1C24"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M252.979 9.99724L242.995 19.9864L252.979 30.0209L242.995 40.0003L223 19.9864L242.995 0L252.979 9.99724ZM283.003 19.9864L263.007 0L252.979 9.99724L263.007 19.9864L252.979 30.0209L263.007 40.0003L283.003 19.9864Z" fill="#ED1C24"/>
    </svg>
    `,
    profileSvg: `<svg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <rect width='34' height='34' rx='6' fill='#FFDEDE' />
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M10.3123 24.4348C12.084 26.0295 14.4287 27 17 27C22.5228 27 27 22.5228 27 17C27 11.4772 22.5228 7 17 7C11.4772 7 7 11.4772 7 17C7 19.9512 8.27899 22.6044 10.3123 24.4348ZM22.8624 23.1549C24.4874 21.6067 25.5 19.4216 25.5 17C25.5 12.3056 21.6944 8.5 17 8.5C12.3056 8.5 8.5 12.3056 8.5 17C8.5 19.4211 9.51223 21.6058 11.1366 23.1539C11.6767 22.4776 12.3322 21.8969 13.0766 21.4404C13.5768 21.1336 14.109 20.888 14.6615 20.7068C13.2688 19.8994 12.332 18.3924 12.332 16.6667C12.332 14.0893 14.4214 12 16.9987 12C19.576 12 21.6654 14.0893 21.6654 16.6667C21.6654 18.3923 20.7288 19.8991 19.3362 20.7066C19.8889 20.8878 20.4212 21.1335 20.9217 21.4404C21.6664 21.8971 22.3221 22.4782 22.8624 23.1549ZM21.6898 24.0902C21.2576 23.5491 20.7331 23.0843 20.1375 22.719C19.1931 22.1399 18.1069 21.8333 16.9991 21.8333C15.8913 21.8333 14.8051 22.1399 13.8608 22.7191C13.2654 23.0842 12.7411 23.5486 12.3091 24.0895C13.6535 24.9808 15.2661 25.5 17 25.5C18.7334 25.5 20.3456 24.9811 21.6898 24.0902ZM16.9987 19.8333C18.7476 19.8333 20.1654 18.4156 20.1654 16.6667C20.1654 14.9178 18.7476 13.5 16.9987 13.5C15.2498 13.5 13.832 14.9178 13.832 16.6667C13.832 18.4156 15.2498 19.8333 16.9987 19.8333Z'
    fill='#ED1C24'
  />
</svg>`,
    otpSvg: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="6" fill="#FFDEDE"/>
<path d="M18.4687 23.5068C18.4687 24.3177 17.8114 24.9751 17.0005 24.9751C16.1896 24.9751 15.5322 24.3177 15.5322 23.5068C15.5322 22.6959 16.1896 22.0386 17.0005 22.0386C17.8114 22.0386 18.4687 22.6959 18.4687 23.5068Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2959 6.9082C11.7771 6.9082 10.5459 8.13942 10.5459 9.6582V24.4102C10.5459 25.9289 11.7771 27.1602 13.2959 27.1602H20.7044C22.2232 27.1602 23.4544 25.9289 23.4544 24.4102V9.6582C23.4544 8.13942 22.2232 6.9082 20.7044 6.9082H13.2959ZM12.0459 9.6582C12.0459 8.96785 12.6055 8.4082 13.2959 8.4082H14.495C14.5451 9.05269 15.0839 9.56006 15.7412 9.56006L18.2586 9.56006C18.9159 9.56006 19.4547 9.05269 19.5048 8.4082H20.7044C21.3948 8.4082 21.9544 8.96785 21.9544 9.6582V24.4102C21.9544 25.1005 21.3948 25.6602 20.7044 25.6602H13.2959C12.6055 25.6602 12.0459 25.1005 12.0459 24.4102V9.6582Z" fill="#ED1C24"/>
</svg>`,
    paymentSvg: `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" rx="6" fill="#FFDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9999 7.47351C14.638 7.47351 12.7234 9.38817 12.7234 11.75C12.7234 13.0769 13.3268 14.2623 14.277 15.0478L13.3213 16.2039C12.0412 15.1456 11.2234 13.543 11.2234 11.75C11.2234 8.55974 13.8096 5.97351 16.9999 5.97351C20.1902 5.97351 22.7764 8.55974 22.7764 11.75C22.7764 13.543 21.9586 15.1456 20.6785 16.2039L19.7227 15.0478C20.673 14.2623 21.2764 13.0769 21.2764 11.75C21.2764 9.38817 19.3617 7.47351 16.9999 7.47351Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6514 10.5448V10.4698C17.6514 10.2925 17.6087 10.1416 17.5103 10.0353C17.4129 9.93009 17.2494 9.85608 16.9808 9.85608C16.5208 9.85608 16.3103 10.1136 16.3103 10.3562C16.3103 10.4481 16.3309 10.5157 16.3658 10.5694C16.4013 10.6239 16.4552 10.67 16.5311 10.7124C16.6559 10.7822 16.824 10.8343 17.0347 10.8997C17.0879 10.9162 17.1438 10.9335 17.2024 10.9522C17.6851 11.106 18.0228 11.2757 18.2392 11.4992C18.4592 11.7265 18.547 12.0018 18.547 12.3479C18.547 12.653 18.4365 12.9219 18.2282 13.1274C18.0328 13.3201 17.7551 13.4534 17.4109 13.5127V14.2585H16.5508V13.4988C15.891 13.3493 15.397 12.8649 15.397 12.174V12.099H16.257V12.174C16.257 12.5569 16.5868 12.8303 16.9808 12.8303C17.2524 12.8303 17.4336 12.7734 17.5452 12.6885C17.6539 12.6059 17.7047 12.4908 17.7047 12.3515C17.7047 12.1749 17.6739 12.0677 17.5786 11.976C17.476 11.8774 17.2918 11.7892 16.9577 11.6808C16.9461 11.6771 16.9345 11.6733 16.9229 11.6696C16.5458 11.5474 16.1919 11.4327 15.932 11.2497C15.7963 11.1541 15.6838 11.0384 15.6056 10.8913C15.5273 10.7441 15.4857 10.5697 15.4857 10.3598C15.4857 9.71084 15.9953 9.32326 16.5508 9.19178V8.42798H17.4109V9.18762C18.0575 9.33479 18.476 9.8148 18.476 10.4698V10.5448H17.6514Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7012 17.1736C11.7008 17.1735 11.7029 17.1705 11.7087 17.1646C11.7045 17.1707 11.7016 17.1736 11.7012 17.1736ZM11.9673 17C12.1869 16.8904 12.5099 16.7743 12.9393 16.6669C13.95 16.4143 15.386 16.25 17 16.25C18.614 16.25 20.05 16.4143 21.0607 16.6669C21.4901 16.7743 21.8131 16.8904 22.0327 17C21.8131 17.1096 21.4901 17.2257 21.0607 17.3331C20.05 17.5857 18.614 17.75 17 17.75C15.386 17.75 13.95 17.5857 12.9393 17.3331C12.5099 17.2257 12.1869 17.1096 11.9673 17ZM22.2988 17.1736C22.2984 17.1736 22.2955 17.1707 22.2913 17.1646C22.2971 17.1705 22.2992 17.1735 22.2988 17.1736ZM22.2913 16.8354C22.2955 16.8293 22.2984 16.8264 22.2988 16.8264C22.2992 16.8265 22.2971 16.8295 22.2913 16.8354ZM11.7087 16.8354C11.7029 16.8295 11.7008 16.8265 11.7012 16.8264C11.7016 16.8264 11.7045 16.8293 11.7087 16.8354ZM12.5755 15.2117C13.7363 14.9215 15.3003 14.75 17 14.75C18.6997 14.75 20.2637 14.9215 21.4245 15.2117C21.9992 15.3554 22.5175 15.5384 22.9101 15.7705C23.2526 15.9729 23.75 16.364 23.75 17C23.75 17.636 23.2526 18.0271 22.9101 18.2295C22.5175 18.4616 21.9992 18.6446 21.4245 18.7883C20.2637 19.0785 18.6997 19.25 17 19.25C15.3003 19.25 13.7363 19.0785 12.5755 18.7883C12.0008 18.6446 11.4825 18.4616 11.0899 18.2295C10.7474 18.0271 10.25 17.636 10.25 17C10.25 16.364 10.7474 15.9729 11.0899 15.7705C11.4825 15.5384 12.0008 15.3554 12.5755 15.2117Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 19.7V17H11.75V19.6522C11.768 19.6757 11.8111 19.722 11.9054 19.7889C12.1158 19.9381 12.4689 20.1032 12.9728 20.2544C13.971 20.5539 15.395 20.75 17 20.75C18.605 20.75 20.029 20.5539 21.0272 20.2544C21.5311 20.1032 21.8842 19.9381 22.0946 19.7889C22.1889 19.722 22.232 19.6757 22.25 19.6522V17H23.75V19.7C23.75 20.3121 23.3398 20.7447 22.9624 21.0123C22.5657 21.2938 22.0402 21.5166 21.4583 21.6911C20.285 22.0431 18.709 22.25 17 22.25C15.291 22.25 13.715 22.0431 12.5417 21.6911C11.9598 21.5166 11.4343 21.2938 11.0376 21.0123C10.6602 20.7447 10.25 20.3121 10.25 19.7ZM22.2615 19.6345C22.2616 19.6345 22.2611 19.6358 22.2595 19.6384C22.2606 19.6358 22.2614 19.6345 22.2615 19.6345ZM11.7385 19.6345C11.7386 19.6345 11.7394 19.6358 11.7405 19.6384C11.7389 19.6358 11.7384 19.6345 11.7385 19.6345Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 22.4V19.25H11.75V22.4L11.75 22.4001L11.7501 22.4006C11.7501 22.4011 11.7504 22.4028 11.7513 22.4057C11.7529 22.4114 11.7575 22.4244 11.7694 22.4447C11.7943 22.4873 11.847 22.5547 11.9496 22.6396C12.1594 22.8132 12.5081 23.0031 13.005 23.177C13.992 23.5225 15.4043 23.75 17 23.75C18.5957 23.75 20.008 23.5225 20.995 23.177C21.4919 23.0031 21.8406 22.8132 22.0504 22.6396C22.153 22.5547 22.2057 22.4873 22.2306 22.4447C22.2425 22.4244 22.2471 22.4114 22.2487 22.4057C22.2496 22.4028 22.2499 22.4011 22.2499 22.4006L22.25 22.4001L22.25 22.4V19.25H23.75V22.4C23.75 23.0026 23.3993 23.4703 23.0067 23.7952C22.6093 24.1241 22.0793 24.3867 21.4905 24.5928C20.306 25.0074 18.7183 25.25 17 25.25C15.2817 25.25 13.694 25.0074 12.5095 24.5928C11.9207 24.3867 11.3907 24.1241 10.9933 23.7952C10.6007 23.4703 10.25 23.0026 10.25 22.4Z" fill="#ED1C24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 25.4V22.25H11.75V25.4L11.75 25.4001L11.7501 25.4006C11.7501 25.4011 11.7504 25.4028 11.7513 25.4057C11.7529 25.4114 11.7575 25.4244 11.7694 25.4447C11.7943 25.4873 11.847 25.5547 11.9496 25.6396C12.1594 25.8132 12.5081 26.0031 13.005 26.177C13.992 26.5225 15.4043 26.75 17 26.75C18.5957 26.75 20.008 26.5225 20.995 26.177C21.4919 26.0031 21.8406 25.8132 22.0504 25.6396C22.153 25.5547 22.2057 25.4873 22.2306 25.4447C22.2425 25.4244 22.2471 25.4114 22.2487 25.4057C22.2496 25.4028 22.2499 25.4011 22.2499 25.4006L22.25 25.4001L22.25 25.4V22.25H23.75V25.4C23.75 26.0026 23.3993 26.4703 23.0067 26.7952C22.6093 27.1241 22.0793 27.3867 21.4905 27.5928C20.306 28.0074 18.7183 28.25 17 28.25C15.2817 28.25 13.694 28.0074 12.5095 27.5928C11.9207 27.3867 11.3907 27.1241 10.9933 26.7952C10.6007 26.4703 10.25 26.0026 10.25 25.4Z" fill="#ED1C24"/>
</svg>
`,
    loadingSvg: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="2.5" r="1.5" opacity=".14"/><circle cx="16.75" cy="3.77" r="1.5" opacity=".29"/><circle cx="20.23" cy="7.25" r="1.5" opacity=".43"/><circle cx="21.50" cy="12.00" r="1.5" opacity=".57"/><circle cx="20.23" cy="16.75" r="1.5" opacity=".71"/><circle cx="16.75" cy="20.23" r="1.5" opacity=".86"/><circle cx="12" cy="21.5" r="1.5"/><animateTransform attributeName="transform" type="rotate" calcMode="discrete" dur="0.75s" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12" repeatCount="indefinite"/></g></svg>`,
  };

  // Tạo link cdn font Inter
  var preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  // Create a new link element for preconnect to fonts.gstatic.com with crossorigin attribute
  var preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.setAttribute('crossorigin', '');
  // Create a new link element for the Google Fonts stylesheet
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';

  // gắn các cdn vào header hoặc element
  (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(preconnect1);
  (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(preconnect2);
  (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(fontLink);

  // Tìm thẻ script
  var smsWidget = document.getElementById('sms-widget-script');

  // Data
  var customerPhoneAtt = smsWidget.getAttribute('customerPhone');
  var customerNameAtt = smsWidget.getAttribute('customerName');
  var transactionIDAtt = smsWidget.getAttribute('transactionID');
  var paymentAmountAtt = smsWidget.getAttribute('paymentAmount');
  var paymentNoteAtt = smsWidget.getAttribute('paymentNote');
  var accessTokenAtt = smsWidget.getAttribute('accessToken');
  var transactionRemainAtt = smsWidget.getAttribute('transactionRemain');
  var currencyAtt = smsWidget.getAttribute('currency');
  // Formtype
  var typeAtt = smsWidget.getAttribute('formType');

  // publicKey
  const publicKey = `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgk1vWOpCqACWzZ1knxc3\nICe2mrAGTgN49aYUB/uDkeATTWR7GzGbapUvWPv/FaDDvwQwCzC9SuIp91V6InHz\nohKXUuS8ZcegHs0t2n5QJ1m5P3J3WkTvikF/Slot5aiwlsDH9jelUMaIMyie//yM\ntqNTaL8LNm4BR1nVC33KerQIQARZvQnRPSfgyCMo5haXndFVposRxXU2jAOrb6or\nOU3vQjZYw50AH7Vw1jg6E7VhVCnjKjrLE2f3fgoUe5SXfs44rP0BYqSm/aAsaMih\nZqtxTyDnzZ0zJRYoYt5KdiNTKhztT6KGgFgQHycfQQqKloYm1ZIetNhtAW5R//Ze\nRQIDAQAB\n-----END PUBLIC KEY-----`;

  // Hàm để mã hóa một thông điệp
  function encryptMessageAES(message) {
    // Generate a random AES key and IV
    const key = cryptoBrowserify.randomBytes(32);
    const iv = cryptoBrowserify.randomBytes(16);

    // Encrypt the AES key using the public key
    const encryptedKey = cryptoBrowserify.publicEncrypt(
      {
        key: publicKey,
        padding: 1,
      },
      key
    );

    // Encrypt the message using AES-256-GCM
    const cipher = cryptoBrowserify.createCipheriv('aes-256-gcm', key, iv);
    const encryptedData = buffer.Buffer.concat([cipher.update(message, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    // Combine the encrypted key, IV, encrypted data, and tag
    const combinedData = buffer.Buffer.concat([encryptedKey, iv, encryptedData, tag]);

    // Base64 encode the combined data
    const base64Return = combinedData.toString('base64');
    return base64Return;
  }

  var loadingWrapper = document.createElement('div');
  loadingWrapper.style.display = 'flex';
  loadingWrapper.style.alignItems = 'center';
  loadingWrapper.style.justifyContent = 'center';
  loadingWrapper.style.position = 'fixed';
  loadingWrapper.style.background = '#00000080';
  loadingWrapper.style.top = '0';
  loadingWrapper.style.bottom = '0';
  loadingWrapper.style.left = '0';
  loadingWrapper.style.right = '0';
  loadingWrapper.style.justifyContent = 'center';
  var loadingIcon = document.createElement('div');
  loadingIcon.innerHTML = imageList.loadingSvg;
  loadingWrapper.appendChild(loadingIcon);

  let modalWrapper = document.createElement('div');

  // Tạo thẻ div mới
  var innerDiv = document.createElement('div');
  innerDiv.style.position = 'fixed';
  innerDiv.style.zIndex = '999999999';
  innerDiv.style.width = '100vw';
  innerDiv.style.height = '100vh';
  innerDiv.style.background = '#F8F8F8';
  innerDiv.style.fontFamily = 'Inter';
  innerDiv.style.color = '#2D2B32';

  // Header
  var headerDiv = document.createElement('div');
  headerDiv.style.background = '#fff';
  headerDiv.style.height = '80px';
  headerDiv.style.boxShadow = '0px 1px 0px 0px #F1F1F1';
  headerDiv.style.display = 'flex';
  headerDiv.style.alignItems = 'center';

  // Logo header
  var logoimage = document.createElement('div');
  logoimage.innerHTML = imageList.TCBLogo;
  logoimage.style.marginLeft = '32px';
  headerDiv.appendChild(logoimage);

  innerDiv.appendChild(headerDiv);

  // Tạo body wrapper
  var bodySection = document.createElement('div');
  bodySection.style.marginTop = '40px';
  bodySection.style.display = 'flex';
  bodySection.style.gap = '32px';
  bodySection.style.justifyContent = 'center';
  // Tạo div hiển thị thông tin
  var customerInfoWrapper = document.createElement('div');
  customerInfoWrapper.style.background = '#fff';
  customerInfoWrapper.style.borderRadius = '10px';
  customerInfoWrapper.style.padding = '24px';
  customerInfoWrapper.style.minWidth = '578px';
  customerInfoWrapper.style.boxShadow =
    '0px 0px 0.5px 0.5px rgba(24, 24, 28, 0.02), 0px 6px 18px -2px rgba(24, 24, 28, 0.04)';
  bodySection.appendChild(customerInfoWrapper);

  // Icon thông tin
  var customerInfoIcon = document.createElement('div');
  customerInfoIcon.innerHTML = imageList.profileSvg;

  // Title thông tin KH
  var customerSectionTitle = document.createElement('p');
  customerSectionTitle.textContent = 'Thông tin đăng nhập';
  customerSectionTitle.style.fontSize = '16px';
  customerSectionTitle.style.margin = '12px 0 8px 0';
  customerSectionTitle.style.fontWeight = 600;

  // Description thông tin KH
  var customerSectionDescription = document.createElement('p');
  customerSectionDescription.textContent =
    'Hiển thị thông tin của khách hàng để tiến hành thanh toán';
  customerSectionDescription.style.fontSize = '12px';
  customerSectionDescription.style.fontWeight = 400;
  customerSectionDescription.style.margin = 0;

  //List thông tin KH
  const infoList = [
    {
      title: 'Tên khách hàng',
      value: customerNameAtt,
    },
    {
      title: 'Tên đăng nhập (số điện thoại khách hàng)',
      value: customerPhoneAtt,
    },
  ];

  // Tạo wrapper view thông tin KH
  var infoSection = document.createElement('div');
  infoSection.style.display = 'flex';
  infoSection.style.gap = '16px';
  infoSection.style.marginTop = '24px';

  for (var i = 0; i < infoList.length; i++) {
    var infoPItem = document.createElement('div');
    infoPItem.style.flex = 1;
    var infoP = document.createElement('div');
    var inputP = document.createElement('div');
    infoP.textContent = infoList[i].title;
    infoP.style.fontSize = '12px';
    infoP.style.fontWeight = 500;
    infoP.style.color = '#2D2B32';
    infoP.style.opacity = 0.5;
    //
    inputP.textContent = infoList[i].value;
    inputP.style.border = '1px solid #F1F1F1';
    inputP.style.background = '#fbfbfb';
    inputP.style.borderRadius = '8px';
    inputP.style.padding = '12px';
    inputP.style.marginTop = '8px';
    infoPItem.appendChild(infoP);
    infoPItem.appendChild(inputP);
    infoSection.appendChild(infoPItem);
  }
  // Diviver
  var infoDivider = document.createElement('div');
  infoDivider.style.margin = '30px 0';
  infoDivider.style.borderTop = '1px solid #f1f1f1';

  // Icon OTP
  var otpIcon = document.createElement('div');
  otpIcon.innerHTML = imageList.otpSvg;

  // Title OTP
  var otpSectionTitle = document.createElement('p');
  otpSectionTitle.textContent = 'Mã OTP';
  otpSectionTitle.style.fontSize = '16px';
  otpSectionTitle.style.fontWeight = 600;
  otpSectionTitle.style.color = '#2D2B32';
  otpSectionTitle.style.margin = '12px 0 8px 0';

  // Description OTP
  var otpSectionDescription = document.createElement('p');
  otpSectionDescription.textContent = 'Vui lòng nhập OTP để xác nhận đăng nhập và thanh toán';
  otpSectionDescription.style.fontSize = '12px';
  otpSectionDescription.style.fontWeight = 400;
  otpSectionDescription.style.color = '#2D2B32';
  otpSectionDescription.style.margin = '0 0 24px 0';

  // Tạo ô input OTP
  var otpInput = document.createElement('input');
  otpInput.autofocus = true;
  otpInput.setAttribute('type', 'text');
  otpInput.setAttribute('name', 'otp');
  otpInput.setAttribute('id', 'otp');
  otpInput.setAttribute('inputmode', 'numeric');
  otpInput.setAttribute('maxlength', '6');
  otpInput.setAttribute('pattern', 'd{6}');

  otpInput.style.all = 'unset';
  otpInput.style.background = `linear-gradient(90deg, #BBB calc(1.25 * 2ch), transparent 0), linear-gradient(90deg, #EEE calc(1.25 * 2ch), transparent 0)`;
  otpInput.style.backgroundRepeat = 'no-repeat, repeat-x';
  otpInput.style.backgroundSize = '3ch 100%';
  otpInput.style.caretColor = '#222';
  otpInput.style.caretShape = 'block';
  otpInput.style.clipPath = 'inset(0% calc(2ch / 2) 0% 0%)';
  otpInput.style.inlineSize = `calc(6 * 3ch)`;
  otpInput.style.letterSpacing = '2ch';
  otpInput.style.fontSize = '1em';
  otpInput.style.fontFamily = 'ui-monospace, monospace';
  otpInput.style.paddingBlock = '0.5ch';
  otpInput.style.paddingInlineStart = 'calc(((2ch - 1ch) / 2) * 1.25)';

  // Tạo countdown timer
  var countdown = transactionRemainAtt;
  var countdownDisplay = document.createElement('div');
  countdownDisplay.style.fontSize = '12px';
  countdownDisplay.style.fontWeight = 500;
  countdownDisplay.style.display = 'flex';
  countdownDisplay.style.gap = '4px';
  countdownDisplay.style.marginTop = '8px';
  var countdownLabel = document.createElement('div');
  countdownLabel.textContent = 'Thời gian còn lại ';
  var countdownValue = document.createElement('div');
  countdownDisplay.appendChild(countdownLabel);
  countdownDisplay.appendChild(countdownValue);

  function updateCountdown() {
    if (!countdown) return;
    if (countdown > 0) {
      countdownValue.textContent = formatTime(countdown);
      countdownValue.style.color = '#CE0810';
      countdown--;
      setTimeout(updateCountdown, 1000); // Cập nhật mỗi giây
    } else {
      countdownDisplay.textContent = 'Hết thời gian!';
    }
  }

  function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    if (minutes === 0) return remainingSeconds + ' s';
    return minutes + ' m ' + remainingSeconds + ' s';
  }

  updateCountdown();

  customerInfoWrapper.appendChild(customerInfoIcon);
  customerInfoWrapper.appendChild(customerSectionTitle);
  customerInfoWrapper.appendChild(customerSectionDescription);
  customerInfoWrapper.appendChild(infoSection);
  customerInfoWrapper.appendChild(infoDivider);
  customerInfoWrapper.appendChild(otpIcon);
  customerInfoWrapper.appendChild(otpSectionTitle);
  customerInfoWrapper.appendChild(otpSectionDescription);
  customerInfoWrapper.appendChild(otpInput);
  if (countdown) customerInfoWrapper.appendChild(countdownDisplay);

  const showModal = (type, title, message) => {
    modalWrapper.style.display = 'flex';
    modalWrapper.style.alignItems = 'center';
    modalWrapper.style.justifyContent = 'center';
    modalWrapper.style.position = 'fixed';
    modalWrapper.style.background = '#00000080';
    modalWrapper.style.top = '0';
    modalWrapper.style.bottom = '0';
    modalWrapper.style.left = '0';
    modalWrapper.style.right = '0';
    modalWrapper.style.justifyContent = 'center';
    var modalContentWrapper = document.createElement('div');
    modalContentWrapper.style.background = '#fff';
    modalContentWrapper.style.padding = '24px';
    modalContentWrapper.style.width = '400px';
    modalContentWrapper.style.borderRadius = '10px';
    modalContentWrapper.style.textAlign = 'center';
    var iconDiv = document.createElement('div');
    var titleDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    if (type === 'FAIL') {
      iconDiv.innerHTML = imageList.failIcon;
      modalContentWrapper.appendChild(iconDiv);
    } else {
      iconDiv.innerHTML = imageList.successIcon;
      modalContentWrapper.appendChild(iconDiv);
    }
    titleDiv.textContent = title;
    titleDiv.style.margin = '24px 0 8px 0';
    messageDiv.textContent = message;
    modalContentWrapper.appendChild(titleDiv);
    modalContentWrapper.appendChild(messageDiv);

    modalWrapper.appendChild(modalContentWrapper);
    innerDiv.appendChild(modalWrapper);
  };

  // Tạo nút "Submit"
  var submitButton = document.createElement('button');
  submitButton.style.borderRadius = '6px';
  submitButton.style.minWidth = '180px';
  submitButton.style.background = '#f1f1f1';
  submitButton.style.color = '#c9c9cc';
  submitButton.style.fontSize = '14px';
  submitButton.style.fontWeight = '600';
  submitButton.style.border = 'none';
  submitButton.style.cursor = 'not-allowed';
  submitButton.style.height = '44px';
  submitButton.textContent = 'Xác nhận';

  // Add an event listener for the input element to track changes
  otpInput.addEventListener('input', function () {
    otpInput.style.backgroundPosition = `calc(${otpInput.selectionStart} * 3ch) 0, 0 0`;
    // Check if the input value is empty
    if (otpInput.value.trim().length === 6) {
      submitButton.disabled = false; // Enable the button
      // Reset CSS style of the enabled button
      submitButton.style.background = '#CE0810';
      submitButton.style.color = '#FFF';
      submitButton.style.cursor = 'pointer';
    } else {
      submitButton.disabled = true; // Disable the button
      // Change CSS style of the disabled button
      submitButton.style.background = '#f1f1f1';
      submitButton.style.color = '#c9c9cc';
      submitButton.style.cursor = 'not-allowed';
    }
  });

  submitButton.addEventListener('click', async function () {
    event.preventDefault(); // Ngăn chặn form gửi đi
    var otpValue = otpInput.value;
    // console.log('OTP: ' + otpValue);
    if (otpValue) {
      innerDiv.appendChild(loadingWrapper);
      // Lấy giá trị của form và call API đến action của form
      const data = {
        transaction_sms_id: transactionIDAtt,
        otp: encryptMessageAES(JSON.stringify(otpValue)),
      };
      try {
        const res = await fetch(form.action, {
          method: form.method,
          headers: {
            authorization: `Bearer ${accessTokenAtt}`,
            'content-type': 'application/json',
          },
          body: JSON.stringify({ ...data }),
        }).then((response) => response.json());
        innerDiv.removeChild(loadingWrapper);
        console.log(res);
        if (res?.meta?.code === 200000) {
          showModal('SUCCESS', 'Xác thực thành công', 'Mã OTP hợp lệ');
        } else {
          showModal('FAIL', 'Lỗi hệ thống', 'Vui lòng thử lại');
        }
      } catch (error) {
        innerDiv.removeChild(loadingWrapper);
        showModal('FAIL', 'Lỗi hệ thống', 'Vui lòng thử lại');
        console.error('Error:', error);
      }
    }
  });

  // Tạo nút "Cancel"
  var cancelButton = document.createElement('button');
  cancelButton.style.borderRadius = '6px';
  cancelButton.style.border = '1px solid #EAEAEA';
  cancelButton.style.background = '#fff';
  cancelButton.style.minWidth = '100px';
  cancelButton.style.cursor = 'pointer';
  cancelButton.style.height = '44px';
  cancelButton.style.fontSize = '14px';
  cancelButton.style.fontWeight = '600';
  cancelButton.style.boxShadow =
    '0px 3px 4px -5px rgba(24, 24, 28, 0.03), 0px 1px 2px 0px rgba(24, 24, 28, 0.04)';
  cancelButton.textContent = 'Huỷ';
  cancelButton.type = 'button';

  // Divider
  var signUpActionDivider = document.createElement('div');
  signUpActionDivider.style.margin = '30px 0';
  signUpActionDivider.style.borderTop = '1px solid #f1f1f1';

  // Nếu type !== payment thì hiển thị divider và action button
  if (typeAtt !== 'PAYMENT') {
    var actionSignupWrapper = document.createElement('div');
    actionSignupWrapper.style.marginTop = '30px';
    actionSignupWrapper.style.display = 'flex';
    actionSignupWrapper.style.justifyContent = 'flex-end';
    actionSignupWrapper.style.gap = '16px';

    actionSignupWrapper.appendChild(cancelButton);
    actionSignupWrapper.appendChild(submitButton);

    customerInfoWrapper.appendChild(signUpActionDivider);
    customerInfoWrapper.appendChild(actionSignupWrapper);
  }

  // Tạo wrapper payment section
  var paymentInfoWrapper = document.createElement('div');
  paymentInfoWrapper.style.background = '#fff';
  paymentInfoWrapper.style.borderRadius = '10px';
  paymentInfoWrapper.style.padding = '24px';
  paymentInfoWrapper.style.width = '332px';
  paymentInfoWrapper.style.boxShadow =
    '0px 0px 0.5px 0.5px rgba(24, 24, 28, 0.02), 0px 6px 18px -2px rgba(24, 24, 28, 0.04)';

  // Icon payment info
  var paymentInfoIcon = document.createElement('div');
  paymentInfoIcon.innerHTML = imageList.paymentSvg;

  // title payment section
  var paymentSectionTitle = document.createElement('p');
  paymentSectionTitle.textContent = 'Thông tin thanh toán';
  paymentSectionTitle.style.fontSize = '16px';
  paymentSectionTitle.style.fontWeight = 600;
  paymentSectionTitle.style.color = '#2D2B32';
  paymentSectionTitle.style.margin = '12px 0';
  // Divider
  var paymentDivider = document.createElement('div');
  paymentDivider.style.margin = '30px 0';
  paymentDivider.style.borderTop = '1px solid #f1f1f1';
  // Tạo list hiển thị thông tin thanh toán
  const paymentInfoList = [
    {
      title: 'Mã đơn hàng',
      value: transactionIDAtt ?? 'Không có thông tin',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Receipt">
      <path id="Vector" d="M5.9375 8.125H14.0625" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_2" d="M5.9375 10.625H14.0625" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path id="Vector_3" d="M2.5 16.25V4.375C2.5 4.20924 2.56585 4.05027 2.68306 3.93306C2.80027 3.81585 2.95924 3.75 3.125 3.75H16.875C17.0408 3.75 17.1997 3.81585 17.3169 3.93306C17.4342 4.05027 17.5 4.20924 17.5 4.375V16.25L15 15L12.5 16.25L10 15L7.5 16.25L5 15L2.5 16.25Z" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </svg>
      `,
    },
    {
      title: 'Số tiền',
      value: paymentAmountAtt ? currencyFormatter.format(paymentAmountAtt) : 'Không có thông tin',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 5V7" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 13V15" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.75 13H11.125C11.6223 13 12.0992 12.842 12.4508 12.5607C12.8025 12.2794 13 11.8978 13 11.5C13 11.1022 12.8025 10.7206 12.4508 10.4393C12.0992 10.158 11.6223 10 11.125 10H8.875C8.37772 10 7.90081 9.84196 7.54917 9.56066C7.19754 9.27936 7 8.89782 7 8.5C7 8.10218 7.19754 7.72064 7.54917 7.43934C7.90081 7.15804 8.37772 7 8.875 7H12.25" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      title: 'Nội dung',
      value: paymentNoteAtt ?? 'Không có thông tin',
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16667 17.0833H2.5V2.5H10.3947M10.3947 2.5L14.3421 6.8287M10.3947 2.5V6.8287H14.3421M14.3421 6.8287V10.4167" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.9167 18.6458C15.1604 18.6458 16.9792 16.827 16.9792 14.5833C16.9792 12.3397 15.1604 10.5208 12.9167 10.5208C10.6731 10.5208 8.85425 12.3397 8.85425 14.5833C8.85425 16.827 10.6731 18.6458 12.9167 18.6458Z" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.41675 8.75H11.2501M5.41675 11.6667H7.91675M5.41675 14.5833H6.66675" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.6667 15L12.9167 16.25L14.5834 13.3333" stroke="#969598" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
    },
  ];
  // Hiển thị thông tin thanh toán
  var paymentInfoSection = document.createElement('div');
  paymentInfoSection.style.display = 'flex';
  paymentInfoSection.style.flexDirection = 'column';
  paymentInfoSection.style.gap = '24px';
  paymentInfoSection.style.marginTop = '24px';

  for (var i = 0; i < paymentInfoList.length; i++) {
    var paymentInfoPItem = document.createElement('div');
    paymentInfoPItem.style.flex = 1;
    paymentInfoPItem.style.display = 'flex';
    paymentInfoPItem.style.justifyContent = 'space-between';
    paymentInfoPItem.style.gap = '16px';
    var infoTitleWrapper = document.createElement('div');
    infoTitleWrapper.style.display = 'flex';
    infoTitleWrapper.style.minWidth = '80px';
    infoTitleWrapper.style.gap = '8px';
    var infoIcon = document.createElement('div');
    infoIcon.innerHTML = paymentInfoList[i].icon;

    var infoTitle = document.createElement('div');
    infoTitle.textContent = paymentInfoList[i].title;
    infoTitle.style.fontSize = '12px';
    infoTitle.style.fontWeight = 500;
    infoTitle.style.opacity = 0.5;

    infoTitleWrapper.appendChild(infoIcon);

    infoTitleWrapper.appendChild(infoTitle);
    //
    var infoValue = document.createElement('div');
    infoValue.textContent = paymentInfoList[i].value;
    infoValue.style.fontSize = '14px';
    infoValue.style.fontWeight = 500;
    infoValue.style.textAlign = 'right';
    paymentInfoPItem.appendChild(infoTitleWrapper);
    paymentInfoPItem.appendChild(infoValue);
    paymentInfoSection.appendChild(paymentInfoPItem);
  }

  paymentInfoWrapper.appendChild(paymentInfoIcon);
  paymentInfoWrapper.appendChild(paymentSectionTitle);
  paymentInfoWrapper.appendChild(paymentDivider);
  paymentInfoWrapper.appendChild(paymentInfoSection);
  // Nếu type là PAYMENT thì hiển thị thông tin thanh toán
  if (typeAtt === 'PAYMENT') {
    var actionPaymentWrapper = document.createElement('div');
    actionPaymentWrapper.style.marginTop = '30px';
    actionPaymentWrapper.style.display = 'flex';
    actionPaymentWrapper.style.flexDirection = 'column';
    actionPaymentWrapper.style.gap = '16px';

    actionPaymentWrapper.appendChild(submitButton);
    actionPaymentWrapper.appendChild(cancelButton);
    paymentInfoWrapper.appendChild(actionPaymentWrapper);
    bodySection.appendChild(paymentInfoWrapper);
  }

  innerDiv.appendChild(bodySection);

  // // Tìm thẻ form có id "form-otp-sms"
  var form = document.getElementById('form-otp-sms');
  // Thêm thẻ div bọc nội dung vào thẻ form
  form.appendChild(innerDiv);
})();
