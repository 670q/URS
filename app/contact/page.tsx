"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-12 bg-urs-navy text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white to-transparent" />
                <motion.h1 className="text-4xl font-bold relative z-10">تواصل معنا</motion.h1>
            </section>

            <section className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Contact Info Card */}
                    <motion.div
                        className="bg-urs-green text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-8">معلومات الاتصال</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-lg">
                                    <Mail className="w-6 h-6" />
                                    <a href="mailto:URS.SA66@GMAIL.COM" className="hover:underline">URS.SA66@GMAIL.COM</a>
                                </div>
                                <div className="flex items-center gap-4 text-lg">
                                    <Phone className="w-6 h-6" />
                                    <span>+966 50 000 0000</span>
                                </div>
                                <div className="flex items-center gap-4 text-lg">
                                    <MapPin className="w-6 h-6" />
                                    <span>الرياض، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <p className="opacity-80">فريقنا جاهز للرد على استفساراتكم وبدء رحلة النجاح معكم.</p>
                        </div>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div
                        className="bg-white p-10 rounded-2xl shadow-xl"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-urs-navy mb-6">أرسل لنا رسالة</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                                <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-urs-green outline-none transition-all" placeholder="اسمك الكريم" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                                <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-urs-green outline-none transition-all" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">الرساة</label>
                                <textarea rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-urs-green outline-none transition-all" placeholder="كيف يمكننا مساعدتك؟" />
                            </div>
                            <button className="w-full bg-urs-navy text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors">
                                <Send className="w-5 h-5" />
                                إرسال الطلب
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
