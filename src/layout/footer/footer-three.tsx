import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// الصور الداخلية
import logo from '@/assets/images/logo/logo.svg';
import shape_1 from '@/assets/images/shape/shape_36.svg';
import shape_2 from '@/assets/images/shape/shape_37.svg';
import shape_3 from '@/assets/images/shape/shape_39.svg';
import FooterSocial from './footer-social';

const FooterThree = ({style_2}:{style_2?:boolean}) => {
  return (
    <div className="footer-three">
      <div className="container">
        <div className="inner-wrapper position-relative">
          <div className="row justify-content-between">
            <div className="col-lg-4 footer-intro mb-30">
              <div className={`round-bg ${style_2?'color-two':''} rounded-circle text-center d-flex flex-column align-items-center justify-content-center`}>
                <div className="logo mb-10">
                  <Link href="/">
                    <Image src={logo} alt="الشعار" height={70}/>
                  </Link>
                </div> 
                <p className="lh-sm mb-45 lg-mb-30">لُقيّا هي منصة متكاملة للحلول <br/> التقنية للمناسبات والفعاليات</p>
                <p className="m0"><Link href="mailto:Luqyainc@company.com">Luqya.sa@gmail.com</Link></p>
              <ul className="style-none d-flex align-items-center justify-content-center gap-2 social-icon">
                {/* روابط التواصل الاجتماعي */}
                <FooterSocial/>
                {/* روابط التواصل الاجتماعي */}
              </ul>
			  </div>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">روابط</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/">الرئيسية</Link></li>
                <li><Link href="/">خطط الأسعار</Link></li>
                <li><Link href="/">من نحن</Link></li>
                <li><Link href="/">خدماتنا</Link></li>
                <li><Link href="/">أعمالنا</Link></li>
                <li><Link href="/">سياسة الإلغاء والتأجيل</Link></li>
              </ul>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">
				تطبيقنا
			  </h5>
                 <ul className="footer-nav-link style-none">
                <li><Link href="/"><img src='./assets/images/assets/apple_store_2.webp' /></Link></li>
                <li><Link href="/pricing"> <img src='./assets/images/assets/google_store_2.webp' /></Link></li>
            
              </ul>
            </div>
          </div>
          <Image src={shape_1} alt="شكل" className="lazy-img shapes shape_01"/>
          <Image src={style_2 ? shape_3 : shape_2} alt="شكل" className="lazy-img shapes shape_02"/>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
      
           
     
            <div className="col-xl-4 col-lg-3 order-lg-1 mb-15">
              <div className="copyright text-center text-lg-center order-lg-first">
                جميع الحقوق محفوظة &copy; {new Date().getFullYear()} لشركة Luqya.
              </div>
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default FooterThree;
