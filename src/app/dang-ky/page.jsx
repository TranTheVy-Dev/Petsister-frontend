'use client';
import RegisterFrom from "./register";
import { Suspense } from "react";
export default function Dangky() {
  return (
    <>
      <main className="register-main">
        <div className="content">
          <div className="text">Đăng Ký</div>
            <Suspense fallback = {<div>Loading...</div>}>
            <RegisterFrom/>
            </Suspense>
        </div>
      </main>
    </>
  );
}
