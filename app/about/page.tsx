"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 bg-urs-navy text-white text-center rounded-b-[3rem]">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    عن نظام URS
                </motion.h1>
                <p className="opacity-80 text-lg max-w-2xl mx-auto px-4">
                    الشريك التقني الأمثل لإدارة الصيدليات الحديثة في المملكة العربية السعودية.
                </p>
            </section>

            {/* Content */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        className="space-y-6 text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-urs-navy">رؤيتنا ورسالتنا</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            نسعى في URS لتمكين الصيدليات من التحول الرقمي الكامل، عبر توفير نظام شامل يجمع بين الامتثال الحكومي (رصد والزكاة) وبين كفاءة التشغيل وزيادة الأرباح.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            نؤمن بأن التقنية يجب أن تكون سهلة، آمنة، وتعمل لصالحك. لذا صممنا نظامنا ليكون المساعد الذكي الذي يدير المخزون، يتابع التواريخ، ويضمن لك راحة البال من الغرامات والمخالفات.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-urs-navy mb-6">قيمنا الجوهرية</h3>
                        <ul className="space-y-4">
                            {[
                                "الامتثال التام للأنظمة السعودية",
                                "حماية بيانات المرضى والعملاء",
                                "الدقة في التقارير المالية والإدارية",
                                "دعم فني مستمر وشراكة حقيقية"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center text-gray-700">
                                    <CheckCircle2 className="text-urs-green w-6 h-6 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
