"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50">
            <h2 className="text-2xl font-bold text-urs-navy mb-4">عذراً، حدث خطأ غير متوقع!</h2>
            <p className="text-gray-600 mb-8">نعمل على إصلاح المشكلة، يرجى المحاولة مرة أخرى.</p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-urs-green text-white rounded-lg hover:bg-green-600 transition-colors"
            >
                حاول مرة أخرى
            </button>
        </div>
    );
}
