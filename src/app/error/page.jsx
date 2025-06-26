"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ErrorPage = () => {
  const [error, setError] = useState(null); // ✅ Tạo state cho error
  const router = useRouter();

  useEffect(() => {
    const storedError = localStorage.getItem("error");
    if (storedError) {
      setError(storedError); // ✅ Cập nhật state để hiển thị trong JSX
      Swal.fire({
        icon: "error",
        title: "Lỗi 404",
        text: storedError,
      });
    }

    return () => {
      localStorage.removeItem("error");
    };
  }, []);

  const handleBackToHome = () => {
    localStorage.removeItem("error");
    router.push("/");
  };

  return (
    <div className="container p-5">
      <h1>{error || "Không tìm thấy lỗi gì"}</h1>
      <p>
        <a
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={handleBackToHome}
        >
          Quay lại trang chủ
        </a>
      </p>
    </div>
  );
};

export default ErrorPage;
