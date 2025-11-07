"use client";

import { useState } from "react";
import { Upload, Leaf, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import ResultsDisplay from "@/components/ResultsDisplay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePrediction = (result: any) => {
    setPrediction(result);
    setError(null);
  };

  const handleError = (errorMsg: string) => {
    setError(errorMsg);
    setPrediction(null);
  };

  const handleReset = () => {
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plant Disease Detection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload an image of a plant leaf to detect diseases using our AI-powered system.
            Get instant results with treatment recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!prediction ? (
            <ImageUploader
              onPrediction={handlePrediction}
              onError={handleError}
              setLoading={setLoading}
            />
          ) : (
            <ResultsDisplay prediction={prediction} onReset={handleReset} />
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Upload</h3>
            <p className="text-gray-600 text-sm">
              Simply upload or drag & drop an image of the plant leaf
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Loader2 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our deep learning model analyzes the image in seconds
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
              <CheckCircle2 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Get Results</h3>
            <p className="text-gray-600 text-sm">
              Receive disease identification and treatment recommendations
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
