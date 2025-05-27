import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import icon from "@/assets/images/assets/ils_04.svg";

// pricing card item
type IProps = {
  title: string;
  month: string;
  price: string;
  design: string;
  membership: string;
  lists: string[];
};
function PricingCardItem({
  title,
  month,
  price,
  membership,
  lists,
  design,
}: IProps) {
  return (
    <div className="pricing-card-one d-flex flex-column w-100 h-100 text-center">
      <h2 className="fw-bold">{title}</h2>

      <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center">
        <div className="price">
          <sup>
            <svg
              width={16}
              height={16}
              viewBox="0 0 1124.14 1256.39"
              xmlns="http://www.w3.org/2000/svg"
              fill="#231f20"
            >
              <path d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
              <path d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
            </svg>
          </sup>{" "}
          {price}
        </div>
        <div className="ps-lg-4">
          <strong className="text-md fw-500">عن طريق الواتس لـ</strong>
          <span>مدعو {month}</span>
        </div>
      </div>
      <div className="action-btn text-center">{design}</div>
      <ul className="style-none mb-35">
        {lists.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <div className="action-btn2 text-center">
        <Link href="#">
          اشترك الآن <i className="bi bi-chevron-left"></i>
        </Link>
      </div>
    </div>
  );
}

const PricingArea = () => {
  return (
    <div className="pricing-section light-bg">
      <div className="container">
        <div className="row ">
          <div className="col-lg-7 ">
            <div className="title-one">
              <h2>باقات لُقيّا </h2>
            </div>
            <p className="text-lg pt-10 m0">
              شوف الباقة اللي تناسبك وخلنا نرتّب لك كل شيء
            </p>
          </div>
        </div>
        <div className="tab-content mt-50 md-mt-30">
          <div
            className="tab-pane show active"
            id="nav-month"
            role="tabpanel"
            aria-labelledby="nav-month-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              <div className="col-md-4 mb-65 md-mb-30">
                <PricingCardItem
                  title="
الباقة الذاتية"
                  month="25"
                  price="185"
                  membership="Monthly"
                  design="التصميم من قبل العميل"
                  lists={[
                    "إرسال الدعوات من التطبيق. (من قبل العميل)",
                    "إرسال دعوة تجريبية قبل إرسال الدعوات.",
                    "إمكانية تعيين داعي إضافي للمناسبة.",
                    "وصول الدعوات على الواتساب أو رسالة نصية.",
                    "إرسال تذكير قبل المناسبة بـ يوم.",
                    "خاصية القبول أو الاعتذار للمدعوين.",
                    "كود دخول خاص لكل مدعو.",
                    "إحصائيات لمعرفة القبول والاعتذار بالاسم أو الرقم.",
                    "إمكانية مسح أكواد الدخول من التطبيق. (بدون جهاز خاص)",
                  ]}
                />
              </div>

              <div className="col-md-4 mb-65 md-mb-30">
                <PricingCardItem
                  title="الباقة الذاتية بلس"
                  month="50"
                  price="235"
                  membership="Monthly"
                  design="التصميم من قبل العميل"
                  lists={[
                    "جميع خدمات الباقة الذاتية ",
                    " متابعة المدعوين على قائمة الانتظار عن طريق الواتساب.",
                    "استقبال رسائل المدعوين من التطبيق.",
                    "خاصية القبول أو الاعتذار للمدعوين.",
                    "استبدال دعوات المعتذرين",
                  ]}
                />
              </div>
              <div className="col-md-4 mb-65 md-mb-30">
                <PricingCardItem
                  title="
الباقة الخاصة  "
                  month="100"
                  price="500"
                  membership="Monthly"
                  design="الاختيار من 50 تصميم جاهز"
                  lists={[
                    "جميع خدمات الباقة الذاتية بلس",
                    "إمكانية تعيين داعي إضافي للمناسبة.",
                    " متابعة المدعوين على قائمة الانتظار عن طريق الواتساب.",
                    "استقبال رسائل المدعوين من التطبيق.",
                    "توفير لغتين للدعوة العربية / الإنجليزية.",
                    "رسالة شكر للحضور.",
                  ]}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane"
            id="nav-year"
            role="tabpanel"
            aria-labelledby="nav-year-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              <div className="col-md-6 mb-65 md-mb-30">
                <PricingCardItem
                  title="Business"
                  month="year"
                  price="99"
                  membership="Yearly"
                  design="الاختيار من 50 تصميم جاهز"
                  lists={[
                    "100% Better results",
                    "Suspe Ndisse Suscipit Sagittis",
                    "Review Credit Reports",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
