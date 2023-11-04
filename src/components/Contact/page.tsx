'use client';

import { log } from 'console';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from 'src/utils/send-email';


export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register,  handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  useEffect(() => {
    // ページが読み込まれたときに reCAPTCHA を実行
    grecaptcha.ready(function () {
      grecaptcha.execute("6LfVUuYoAAAAAIIKAsdo-LnK3N1X4ZOFas6Fav-1", { action: "submit" }).then(async (token) => {
        // トークンをサーバーに送信
        const response = await fetch("api/recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const res = await response.json();

        // success:falseの場合はreturn
        if (!res.responceJsonRecaptcha.success) {
          console.error("reCAPTCHA: ", res.responceJsonRecaptcha["error-codes"]);
          return;
        }          
        // successした時の処理
          console.log('SUCCESS!');
      });
    });
  }, []);


  return (
    <div>
      <main>
            <Image src="/img/about-hero.jpg" width={1920} height={300} alt="hero" className='w-full'/>
            <section className='max-w-5xl mx-auto py-20 px-5 md:px-0'>
            <h1 className='text-2xl font-bold text-center mb-5'>Contact</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-5'>
                  <label htmlFor="name" className='mb-3 block text-base font-medium text-black'>お名前</label>
                  <input type="text" placeholder='フルネームでご記入ください' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('name', { required:true })} />
                </div>
                <div className='mb-5'>
                <label  htmlFor='email' className='mb-3 block text-base font-medium text-black'>メールアドレス</label>
                <input
                  type='email'
                  placeholder='example@domain.com'
                  className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('email', { required: true })}
                />
                </div>
                <div className='mb-5'>
                <label
                  htmlFor='message'
                  className='mb-3 block text-base font-medium text-black'
                >
                  お問い合わせ内容
                </label>
                <textarea
                  rows={4}
                  placeholder='お問い合わせ内容をご記入ください'
                  className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('message', { required: true })}
                ></textarea>
                </div>

                <div>
                  <button className='hover:shadow-form rounded-md bg-blue-900 py-3 px-8 text-base font-semibold text-white outline-none'>
                    送信
                  </button>
                </div>
              </form>              
            </section>                
      </main>        
    </div>
    
  );
};


export default Contact;