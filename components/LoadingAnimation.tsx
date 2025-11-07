"use client";

import { Leaf, Loader2 } from "lucide-react";

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full animate-ping opacity-75"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse">
              <Leaf className="w-10 h-10 text-white animate-bounce" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
            Analyzing Your Plant
          </h3>
          <p className="text-sm text-gray-600">
            Our AI is examining the leaf for disease detection...
          </p>
        </div>

        <div className="mt-8 space-y-3 max-w-xs mx-auto">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Processing image...</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <span>Running AI model...</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
            <span>Identifying disease...</span>
          </div>
        </div>

        <div className="mt-6 w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
