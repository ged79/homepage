"use client";

import { useState } from "react";
import PageIllustration from "@/components/page-illustration";
import { useTheme } from "@/components/theme-provider";

export default function QuotePage() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // EmailJS 직접 호출 (가입 후 키 입력)
    const emailjs = (await import('@emailjs/browser')).default;
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS 서비스 ID
        'YOUR_TEMPLATE_ID', // EmailJS 템플릿 ID
        {
          to_email: 'conexus25@conexus.co.kr',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY' // EmailJS Public Key
      );
      
      alert('요청이 전송되었습니다!');
      setFormData({
        name: "", company: "", email: "", 
        phone: "", budget: "", timeline: "", message: ""
      });
    } catch (error) {
      alert('전송 실패. 직접 연락주세요: 010-7741-4569');
    }
  };

  // ... 나머지 코드
}