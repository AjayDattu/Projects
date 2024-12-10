import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function BottomNav() {
  return (
    <div className='flex flex-col md:flex-row justify-between overflow-x-hidden'>
            <div className='flex flex-col md:flex-row p-2 gap-11'>
                <div className='w-1/4 justify-center h-1/2'><svg  width="100%"
        height="100%" viewBox="0 0 134 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.8252 32.6276L49.6753 32.7869C48.3229 34.2298 46.9612 35.6728 45.6088 37.122L41.0895 32.8369C38.8314 30.7006 36.5733 28.5674 34.3183 26.4311C35.7425 24.9538 37.1667 23.4734 38.594 21.9961C38.9001 22.2897 39.3936 22.7644 40.0089 23.3485C40.4648 23.7826 40.8053 24.1043 40.9333 24.223C42.4169 25.6222 43.9004 27.0276 45.3808 28.4269C46.8644 29.8292 48.3417 31.2284 49.8252 32.6276Z" fill="#231F20"/>
<path d="M70.8853 10.4213L70.8603 10.4494L49.8252 32.6276L49.6784 32.7868L45.5932 37.0969L41.1551 32.8868L45.3808 28.4299L62.3088 10.5806L66.3003 6.36731L70.8353 10.4244L70.8853 10.4213Z" fill="#231F20"/>
<path d="M71.8722 32.2247L71.7222 32.384C70.3699 33.8269 69.0081 35.2699 67.6558 36.7191L60.4286 29.8667L64.6575 25.4098C65.5819 26.2843 66.5064 27.1526 67.4247 28.0271C68.9113 29.4263 70.3886 30.8255 71.8722 32.2247Z" fill="#5CD2DD"/>
<path d="M98.4389 4.20795L94.0016 0L63.1963 32.4841L67.6336 36.6921L98.4389 4.20795Z" fill="#5CD2DD"/>
<path d="M67.4278 28.0271C65.9973 29.5137 64.5637 31.0004 63.1333 32.4871L58.4828 28.0052L62.746 23.5858C64.3076 25.0631 65.8661 26.5435 67.4278 28.0271Z" fill="#5CD2DD"/>
<path d="M45.0007 6.46437L40.7242 10.9005L45.1603 15.1771L49.4369 10.7409L45.0007 6.46437Z" fill="#5CD2DD"/>
<path d="M12.5617 55.2118H14.1764V64.9657H13.3737C12.3462 64.9657 11.3468 64.7314 10.3723 64.2598C9.37598 63.782 8.53583 63.1136 7.85809 62.261V64.9688H7.05541C5.24081 64.9688 3.6417 64.3254 2.25498 63.0355C0.7527 61.6426 0 59.8904 0 57.776V55.2118H1.61472V57.776C1.61472 59.1971 2.09257 60.4339 3.04517 61.4864C3.92592 62.4515 4.99095 63.0418 6.24337 63.2542V55.2118H7.93304V57.776C7.93304 59.1971 8.4109 60.4339 9.36349 61.4864C10.2442 62.4515 11.3093 63.0418 12.5617 63.2542V55.2118Z" fill="#231F20"/>
<path d="M22.6311 64.9688C21.2506 64.9688 20.07 64.4784 19.0862 63.4946C18.1023 62.5108 17.612 61.3302 17.612 59.9497C17.612 58.5692 18.1023 57.3887 19.0862 56.4048C20.07 55.421 21.2506 54.9307 22.6311 54.9307C24.0115 54.9307 25.1921 55.421 26.1759 56.4048C27.1598 57.3887 27.6501 58.5692 27.6501 59.9497V60.7743H22.6311V59.1283H25.8948C25.7075 58.3912 25.3139 57.7853 24.7143 57.3075C24.1083 56.8296 23.415 56.5922 22.6342 56.5922C21.7097 56.5922 20.9195 56.9202 20.2605 57.5792C19.6015 58.2382 19.2736 59.0284 19.2736 59.9528C19.2736 60.8773 19.6015 61.6675 20.2605 62.3265C20.9195 62.9855 21.7097 63.3135 22.6342 63.3135V64.9688H22.6311Z" fill="#231F20"/>
<path d="M35.9204 52.4383C34.9585 52.4446 34.1745 52.7819 33.5686 53.4471C32.9627 54.1124 32.6566 54.9713 32.6566 56.0176V57.1388H34.3151V58.7754H32.6566V64.9688H31.0419V56.0176C31.0419 54.5153 31.501 53.2754 32.4193 52.2947C33.3375 51.3077 34.4994 50.808 35.9079 50.8018L35.9204 52.4383Z" fill="#57C8CE"/>
<path d="M37.1791 60.0591C37.1791 58.6755 37.6632 57.498 38.6315 56.5235C39.5997 55.5428 40.7615 55.0525 42.1201 55.0525V56.5579C41.1675 56.5579 40.3492 56.8983 39.6715 57.5792C39 58.2663 38.6627 59.094 38.6627 60.0622V64.9719H37.1791V60.0591Z" fill="#57C8CE"/>
<path d="M48.8819 64.9999C47.5296 64.9999 46.374 64.5096 45.412 63.5257C44.45 62.5513 43.9691 61.3676 43.9691 59.9809C43.9691 58.6004 44.45 57.4198 45.412 56.436C46.374 55.4521 47.5296 54.9618 48.8819 54.9618C50.2343 54.9618 51.3899 55.4521 52.3487 56.436C53.3107 57.4198 53.7917 58.6004 53.7917 59.9809V64.8156H52.1644V59.9809C52.1644 59.0564 51.8428 58.2662 51.1994 57.6072C50.556 56.9482 49.7845 56.6202 48.8788 56.6202C47.9668 56.6202 47.1922 56.9482 46.5489 57.6072C45.9055 58.2662 45.5838 59.0564 45.5838 59.9809C45.5838 60.9053 45.9055 61.6955 46.5489 62.3545C47.1922 63.0135 47.9699 63.3415 48.8788 63.3415V64.9999H48.8819Z" fill="#57C8CE"/>
<path d="M70.6916 55.0931C72.0502 55.0931 73.2089 55.5834 74.1709 56.561C75.1328 57.5417 75.6138 58.7223 75.6138 60.1059V64.9532H73.9772V60.1059C73.9772 59.1783 73.6587 58.3881 73.0246 57.7322C72.3813 57.0857 71.6036 56.7609 70.6947 56.7609C69.7921 56.7609 69.0175 57.0857 68.3741 57.7322C67.7307 58.3881 67.409 59.1783 67.409 60.1059V64.9532H65.7818V60.1059C65.7818 59.1783 65.4601 58.3881 64.8168 57.7322C64.1734 57.0857 63.3988 56.7609 62.4962 56.7609C61.5936 56.7609 60.819 57.0857 60.1756 57.7322C59.5322 58.3881 59.2105 59.1783 59.2105 60.1059V64.9657H57.5833V55.2243H59.2105V56.383C60.1506 55.521 61.2438 55.09 62.4962 55.09C63.3332 55.09 64.1234 55.2961 64.8605 55.7084C65.5694 56.105 66.1473 56.6516 66.5939 57.3418C67.0405 56.6485 67.6245 56.105 68.3398 55.7084C69.0675 55.2992 69.8514 55.0931 70.6916 55.0931Z" fill="#57C8CE"/>
<path d="M83.8592 64.9688C82.4787 64.9688 81.2981 64.4784 80.3143 63.4946C79.3305 62.5108 78.8401 61.3302 78.8401 59.9497C78.8401 58.5692 79.3305 57.3887 80.3143 56.4048C81.2981 55.421 82.4787 54.9307 83.8592 54.9307C85.2397 54.9307 86.4203 55.421 87.4041 56.4048C88.3879 57.3887 88.8783 58.5692 88.8783 59.9497V60.7743H83.8592V59.1283H87.123C86.9356 58.3912 86.5421 57.7853 85.9424 57.3075C85.3365 56.8296 84.6431 56.5922 83.8623 56.5922C82.9379 56.5922 82.1477 56.9202 81.4887 57.5792C80.8297 58.2382 80.5017 59.0284 80.5017 59.9528C80.5017 60.8773 80.8297 61.6675 81.4887 62.3265C82.1477 62.9855 82.9379 63.3135 83.8623 63.3135V64.9688H83.8592Z" fill="#57C8CE"/>
<path d="M93.8317 59.753C93.8317 60.8024 94.1378 61.6582 94.7531 62.3203C95.3683 62.9855 96.1617 63.3197 97.1361 63.3291L97.1267 64.9657C95.6963 64.9594 94.5188 64.4628 93.5943 63.4821C92.6636 62.4983 92.1951 61.2553 92.1951 59.753V50.8018H93.8317V55.0931H97.1361V56.7297H93.8317V59.753Z" fill="#231F20"/>
<path d="M104.582 64.9688C103.201 64.9688 102.021 64.4784 101.037 63.4946C100.053 62.5108 99.5628 61.3302 99.5628 59.9497C99.5628 58.5692 100.053 57.3887 101.037 56.4048C102.021 55.421 103.201 54.9307 104.582 54.9307C105.962 54.9307 107.143 55.421 108.127 56.4048C109.111 57.3887 109.601 58.5692 109.601 59.9497V60.7743H104.582V59.1283H107.846C107.658 58.3912 107.265 57.7853 106.665 57.3075C106.059 56.8296 105.366 56.5922 104.585 56.5922C103.661 56.5922 102.87 56.9202 102.211 57.5792C101.552 58.2382 101.224 59.0284 101.224 59.9528C101.224 60.8773 101.552 61.6675 102.211 62.3265C102.87 62.9855 103.661 63.3135 104.585 63.3135V64.9688H104.582Z" fill="#231F20"/>
<path d="M113.936 63.4947C112.952 62.5202 112.462 61.3365 112.462 59.9498C112.462 58.5693 112.952 57.3887 113.936 56.4049C114.91 55.4305 116.094 54.9432 117.481 54.9432C118.499 54.9432 119.433 55.2274 120.276 55.799L119.355 57.1639C118.793 56.7797 118.165 56.5892 117.481 56.5892C116.556 56.5892 115.766 56.9171 115.107 57.5761C114.448 58.2351 114.12 59.0253 114.12 59.9498C114.12 60.8743 114.448 61.6645 115.107 62.3235C115.766 62.9825 116.556 63.3104 117.481 63.3104C118.196 63.3104 118.846 63.1012 119.433 62.6826L120.398 64.0381C119.524 64.6597 118.552 64.9689 117.481 64.9689C116.094 64.9689 114.914 64.4754 113.936 63.4947Z" fill="#231F20"/>
<path d="M128.081 55.1055C129.44 55.1055 130.602 55.5927 131.57 56.5672C132.532 57.5479 133.013 58.7285 133.013 60.1027V64.9562H131.376V60.1027C131.376 59.1813 131.055 58.3943 130.411 57.7415C129.768 57.0888 128.99 56.7639 128.081 56.7639C127.172 56.7639 126.392 57.0888 125.739 57.7415C125.095 58.3943 124.774 59.1813 124.774 60.1027V64.9687H123.137V50.811H124.774V56.3892C125.714 55.5334 126.816 55.1055 128.081 55.1055Z" fill="#231F20"/>
<path d="M53.7948 64.6564H52.1676V64.9999H53.7948V64.6564Z" fill="#5CD2DD"/>
</svg></div>
                <div>
                    <div className='text-xl font-Regular'><b>INFOS PRATIQUES</b></div>
                    <div className='text-sm font-Regular'>À propos</div>
                    <div className='text-sm font-Regular'>Livraisons & Reprises</div>
                    <div className='text-sm font-Regular'>Mode d’emploi</div>
                    <div className='text-sm font-Regular'>F.A.Q</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>LÉGAL</b></div>
                    <div className='text-sm font-Regular'>Mentions légales</div>
                    <div className='text-sm font-Regular'>CGU</div>
                    <div className='text-sm font-Regular'>CGV</div>
                    <div className='text-sm font-Regular'>Politique de confidentialité</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>MON COMPTE</b></div>
                    <div className='text-sm font-Regular'>Accéder à mon compte</div>
                    <div className='text-sm font-Regular'>Ma liste d’envie</div>
                    <div className='text-sm font-Regular'>Créer un compte</div>
                    <div className='text-sm font-Regular'>Mot de passe oublié</div>
                </div>
                
            </div>
            <div className='flex flex-col pr-9 p-3'>
                <div className='font-Regular text-left md:text-right'>NOUS SUIVRE</div>
                <div className='flex gap-2'>
                    <div className='p-2 border rounded-md'>
                        <FaTwitter/>
                    </div>
                    <div className='p-2 border rounded-md'>
                        <FaLinkedin/>
                    </div>
                    <div className='p-2 border rounded-md'>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BottomNav