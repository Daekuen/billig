import axios from 'axios';
import { FormEvent, useRef } from 'react';

export function LoginForm() {
  const inputRef = useRef<HTMLInputElement[] | null[]>([]);
  const inputClassName =
    'block w-full h-10 text-xl border-b-yellow border-solid border-2 rounded-xl px-4 text-yellow-900 font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 mb-7';
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = {
      email: inputRef.current[0]?.value,
      password: inputRef.current[1]?.value,
    };
    axios
      .post(
        'https://port-0-village-dpuqy925lbn63gyo.gksl2.cloudtype.app/login',
        JSON.stringify(login),
        {
          headers: { 'Content-Type': `application/json` },
        },
      )
      .then((response) => {
        console.log(response);
        alert('로그인 성공');
      })
      .catch((error) => alert(error));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/3 mt-24 mx-auto animate-fade-in-150ms"
      action="https://port-0-village-dpuqy925lbn63gyo.gksl2.cloudtype.app/login"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <input
          id="email"
          name="email"
          className={inputClassName}
          type="email"
          placeholder="Email"
          ref={(el) => (inputRef.current[0] = el)}
        ></input>
        <input
          id="password"
          name="password"
          className={inputClassName}
          type="password"
          placeholder="Password"
          ref={(el) => (inputRef.current[1] = el)}
        ></input>
      </div>
      <div className="w-full mb-5 flex justify-center">
        <a
          className="w-1/2 underline text-center font-bold text-b-chat-text italic"
          href="#!"
        >
          Forgot password?
        </a>
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  return (
    <div className="w-full mb-5 flex justify-center">
      <button
        className="bg-b-yellow text-b-chat-text w-48 h-12 rounded-3xl text-xl font-bold
      transition-all hover:text-white hover:font-extrabold hover:bg-gradient-to-r from-[#e65c00] to-b-yellow"
      >
        Log in
      </button>
    </div>
  );
}
