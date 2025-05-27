'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from 'next/link';
// internal
import icon from '@/assets/images/icon/icon_13.svg';
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup.string().required("الإيميل مطلوب").email("الإيميل غير صحيح"),
  password: yup.string().required("كلمة المرور مطلوبة").min(6, "لازم تكون 6 خانات أو أكثر"),
});

const RegisterForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>الاسم *</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="اسمك هنا"
            />
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>الإيميل *</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="example@email.com"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>كلمة المرور *</label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password")}
              id="password"
              placeholder="اكتب كلمة المرور"
              className="pass_log_id"
            />
            <span className="placeholder_icon" onClick={() => setShowPass(!showPass)}>
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="رمز المرور" />
              </span>
            </span>
            <ErrorMsg msg={errors.password?.message!} />
          </div>
        </div>
        {/* <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember2" />
              <label htmlFor="remember2">
                بتسجيلك، فأنت توافق على <Link href="#">الشروط</Link> و <Link href="#">سياسة الخصوصية</Link>
              </label>
            </div>
          </div>
        </div> */}
        <div className="col-12">
          <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
            إنشاء حساب
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
