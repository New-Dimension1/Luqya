"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import screen_1 from "@/assets/images/assets/screen_04.svg";
import screen_2 from "@/assets/images/assets/screen_05.svg";
import shape from "@/assets/images/shape/shape_06.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";

const imageStyle = {
  height: "auto",
};

type FormData = {
  name: string;
  phone: string;
  comment?: string;
};

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  phone: yup
    .string()
    .required("رقم الجوال مطلوب")
    .matches(/^(\+966|0)?5\d{8}$/, "رقم الجوال غير صحيح"),
});

const TextFeatureThree = ({
  cls,
  style_2,
}: {
  cls?: string;
  style_2?: boolean;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {!style_2 && (
        <div
          className={`text-feature-three position-relative ${
            cls ? cls : "mt-30 pb-150 lg-pb-80"
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
                <div className="title-one">
              <div className="upper-title">خلنا نوريك</div>
                   <h2>جرّب النموذج التجريبي بكل سهولة</h2>
                  </div>
          <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
  ودّك تشوف كيف شكل الدعوة قبل تعتمدها؟ بنرسل لك دعوة تجريبية على جوالك عشان تعيش التجربة بنفسك وتشوف التفاصيل بنفسك!
</p>

                <div className="form-wrapper">
                  <form onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="row">
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label htmlFor="name">شرفنا بأسمك*</label>
                          <input
                            type="text"
                            {...register("name")}
                            id="name"
                            placeholder="أدخل اسمك"
                          />
                          <ErrorMsg msg={errors.name?.message!} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group-meta position-relative mb-25">
                          <label htmlFor="phone">رقم جوالك*</label>
                          <input
                            type="tel"
                            {...register("phone")}
                            id="phone"
                            placeholder="+966XXXXXXXXX"
                          />
                          <ErrorMsg msg={errors.phone?.message!} />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn-four w-100 tran3s d-block mt-20"
                        >
                          إرسال
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
                <div className="media-wrapper w-100 position-relative">
                  {/* <Image
                    src={screen_1}
                    alt="screen"
                    className="lazy-img shapes screen_01"
                    style={imageStyle}
                  /> */}
                  {/* <Image
                    src={screen_2}
                    alt="screen"
                    className="lazy-img shapes screen_02"
                    style={imageStyle}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
        </div>
      )}

      {/* الكود الإنجليزي يظل كما هو */}
    </>
  );
};

export default TextFeatureThree;
