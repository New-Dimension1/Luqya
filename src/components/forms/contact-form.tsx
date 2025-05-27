'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("الاسم"),
  email: yup.string().required().email().label("البريد الإلكتروني"),
  message: yup.string().required().min(10).label("الرسالة"),
});

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="name">الاسم *</label>
            <input
              type="text"
              placeholder="اكتب اسمك هنا *"
              {...register("name")}
              id="name"
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="email">البريد الإلكتروني *</label>
            <input
              type="email"
              placeholder="example@email.com *"
              {...register("email")}
              id="email"
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label htmlFor="message">رسالتك *</label>
            <textarea
              placeholder="اكتب رسالتك هنا *"
              {...register("message")}
              id="message"
              name="message"
            ></textarea>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message!} />
            </div>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn-four tran3s w-100 d-block">
            أرسل رسالتك الحين!
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
