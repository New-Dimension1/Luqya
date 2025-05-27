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
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("الإيميل مطلوب").email("الإيميل غير صحيح"),
  password: yup.string().required("كلمة المرور مطلوبة").min(6, "لازم تكون 6 خانات أو أكثر"),
});

const LoginForm = () => {
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
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">خليني مسجل</label>
            </div>
            <Link href="#">نسيت كلمة المرور؟</Link>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four w-100 tran3s d-block mt-20">
            تسجيل دخول
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
