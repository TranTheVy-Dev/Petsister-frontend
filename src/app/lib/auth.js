"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// ✅ Tạo hàm helper bên trong hook cho an toàn
export const checkIsAdmin = () => {
  const router = useRouter();

  useEffect(() => {
    // Tránh lỗi nếu đang SSR
    if (typeof window === "undefined") return;

    const customerStr = localStorage.getItem("customer");
    if (!customerStr) {
      localStorage.setItem("redirectURL", "/admin");
      router.push("/dang-nhap");
      return;
    }

    const customer = JSON.parse(customerStr);
    if (!customer || customer.role === 0) {
      router.push("/not-authorized");
      return;
    }

    // Nếu là admin thì không làm gì
  }, [router]);
};
