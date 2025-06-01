'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import Navbar from './navbar';
import logo from '@/assets/images/logo/logo.svg';
import icon_1 from '@/assets/images/icon/icon_14.svg';
import icon_2 from '@/assets/images/icon/icon_15.svg';
import icon_3 from '@/assets/images/icon/icon_16.svg';
import LoginModal from '@/components/common/login-modal';
import useSticky from '@/hooks/use-sticky';

const HeaderOne = () => {
  const {sticky} = useSticky();
  return (
    <>
      <header className={`theme-main-menu menu-overlay menu-style-two sticky-menu ${sticky?'fixed':''}`}>
        <div className="gap-fix info-row">
          <div className="d-md-flex justify-content-between">
          <div className="greetings text-center">
  <span className="opacity-50 mx-1">هلا والله!</span>
  <span className="fw-500">نورتنا في لُقيّا.</span>
</div> <ul className="style-none d-none d-md-flex contact-info">
              <li className="d-flex align-items-center">
                <Image src={icon_1} alt="icon" className="lazy-img icon mx-2" /> 
                <Link href="mailto:Luqyainc@company.com" className="fw-500">Luqya.sa@gmail.com</Link>
                </li>
              {/* <li className="d-flex align-items-center">
                <Image src={icon_2} alt="icon" className="lazy-img icon mx-2" /> 
                <Link href="tel:+757 699-4478" className="fw-500">+53 558 1435</Link>
                </li> */}
            </ul>
          </div>
        </div>
        <div className="inner-content gap-fix">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center ">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image src={logo} alt="logo" height={80} />
                </Link>
              </div>

              <div className="right-widget order-lg-3 me-auto">
                <ul className="d-flex align-items-center style-none ">
                  <li className="d-flex align-items-center login-btn-one  me-md-0 mx-2">
                    <Image src={icon_3} alt="icon" className="lazy-img icon " />
                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500">تسجيل دخول</Link>
                  </li>
                  <li className="d-none d-md-inline-block   me-lg-0 mx-2">
                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="signup-btn-one icon-link">
                      <span>تسجيل جديد</span>
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center"><i className="bi bi-arrow-left"></i></div>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar/>
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal/>
      {/* login modal end */}
    </>
  );
};

export default HeaderOne;