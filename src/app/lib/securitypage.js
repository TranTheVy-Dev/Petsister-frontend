"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = chưa kiểm tra
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectURL", window.location.href);
      Swal.fire({
        title: "Cảnh báo",
        text: "Bạn phải đăng nhập mới sử dụng được dịch vụ này.",
        icon: "warning",
        confirmButtonText: "Đồng ý",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/dang-nhap");
        }
      });
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
