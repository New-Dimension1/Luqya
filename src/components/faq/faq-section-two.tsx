'use client'
import React from "react";
import Image from "next/image";
// internal
import project_data from "@/data/project-data";
import { IProject } from "@/types/project-d-t";
import shape from "@/assets/images/shape/shape_06.svg";
import Link from "next/link";

function FaqProjectItem({ item }: { item: IProject }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${item.isShow ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${item.id}`}
          aria-expanded={item.isShow ? "true" : "false"}
          aria-controls={`collapse-${item.id}`}
        >
          {item.title}
        </button>
      </h2>
      <div
        id={`collapse-${item.id}`}
        className={`accordion-collapse collapse ${item.isShow ? "show" : ""}`}
        data-bs-parent={`#${item.parent}`}
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-lg-6">
              <h6>{item.body_title}</h6>
              <p>{item.body_desc}</p>
              <h6>{item.body_subtitle}</h6>
              <ul className="style-none pt-20 pb-30">
                {item.body_lists.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 d-flex">
              <div
                className="media-wrapper ms-auto me-auto w-100 d-flex align-items-center justify-content-center position-relative"
                style={{ backgroundImage: `url(${item.bg_img.src})` }}
              >
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FaqSectionTwo = () => {
  const project_items = project_data.filter((p) => p.page === "home");
  return (
    <div className="faq-section-two position-relative mt-180 lg-mt-100 pb-150 lg-pb-80">
      <div className="container">
        <div className="position-relative">
          <div className="title-one mb-40">
            <h2>دعوات إلكترونية.. بكل سهولة!</h2>
            <p className="text-lg pt-15 lg-pt-10">
              شغلتك الدعوة؟ إحنا نهتم بالباقي! شوف كيف أرسلنا دعوات أنيقة ومنسقة بدون أي تصميم معقّد. كل اللي نحتاجه كم معلومة، والباقي علينا.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="accordion accordion-style-two mt-15" id="accordionOne">
                {project_items.map((p, i) => (
                  <FaqProjectItem key={i} item={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default FaqSectionTwo;
