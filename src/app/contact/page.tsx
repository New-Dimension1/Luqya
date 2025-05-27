import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-one";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-two";
import ContactArea from "@/components/contact/contact-area";
import FooterThree from "@/layout/footer/footer-three";
import shape from "@/assets/images/shape/shape_33.svg";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "تواصل معنا",
};

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
             <BreadcrumbOne
            title="تواصل معنا لأي استفسار"
            subtitle="هنا تقدر تلقى كل وسائل التواصل معانا وتقدر ترسل لنا رسالة مباشرة"
            page="تواصل"
          />
          {/* breadcrumb end */}

          {/* contact area start */}
          <ContactArea />
          {/* contact area end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ContactPage;
