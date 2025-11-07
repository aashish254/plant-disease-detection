"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, AlertTriangle, RotateCcw, Leaf, Droplets, Sun, Bug, Download, Share2, Printer, Upload, ThumbsUp, ThumbsDown, Info } from "lucide-react";
import { diseaseInfo } from "@/lib/diseaseData";
import { getSimilarDiseases } from "@/lib/similarDiseases";
import { saveScan, updateFeedback } from "@/lib/statistics";
import ConfidenceMeter from "./ConfidenceMeter";

interface ResultsDisplayProps {
  prediction: {
    class: string;
    confidence: number;
    top_predictions?: Array<{
      class: string;
      confidence: number;
    }>;
  };
  onReset: () => void;
}

export default function ResultsDisplay({ prediction, onReset }: ResultsDisplayProps) {
  const disease = diseaseInfo[prediction.class] || {
    name: prediction.class,
    description: "Information not available for this disease.",
    symptoms: [],
    causes: [],
    treatment: [],
    prevention: [],
    severity: "Unknown"
  };

  const isHealthy = prediction.class.toLowerCase().includes("healthy");
  const confidencePercent = (prediction.confidence * 100).toFixed(2);
  const confidenceNum = prediction.confidence * 100;
  const isLowConfidence = confidenceNum < 70;

  const [scanId, setScanId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showFeedbackThanks, setShowFeedbackThanks] = useState(false);

  const similarDiseases = getSimilarDiseases(prediction.class);

  useEffect(() => {
    const id = saveScan(prediction.class, prediction.confidence);
    setScanId(id);
  }, [prediction.class, prediction.confidence]);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = `🌿 Plant Disease Detection Result\n\n` +
      `Disease: ${disease.name}\n` +
      `Confidence: ${confidencePercent}%\n` +
      `Severity: ${disease.severity}\n\n` +
      `Description: ${disease.description}\n\n` +
      `Check out PlantCare AI for more details!`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFeedback = (isCorrect: boolean) => {
    const feedbackType = isCorrect ? 'correct' : 'incorrect';
    setFeedback(feedbackType);
    if (scanId) {
      updateFeedback(scanId, feedbackType);
    }
    setShowFeedbackThanks(true);
    setTimeout(() => setShowFeedbackThanks(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${
        isHealthy ? "border-green-200" : "border-orange-200"
      }`}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isHealthy ? "bg-green-100" : "bg-orange-100"
            }`}>
              {isHealthy ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {disease.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Confidence:</span>
                <span className="font-semibold text-primary">{confidencePercent}%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={onReset}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              <Upload className="w-4 h-4" />
              <span className="text-sm font-medium">Upload Another</span>
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-8">
          <div className="flex-shrink-0">
            <ConfidenceMeter confidence={confidenceNum} size={140} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Prediction Confidence</span>
              <span className="text-sm font-semibold text-primary">{confidencePercent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  confidenceNum >= 80 ? "bg-green-500" : 
                  confidenceNum >= 60 ? "bg-yellow-500" : "bg-red-500"
                }`}
                style={{ width: `${confidencePercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">ℹ️</span>
            What is this disease?
          </h3>
          <p className="text-gray-700 leading-relaxed">{disease.description}</p>
        </div>

        {disease.severity && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
            <span className="text-xs font-medium text-gray-600">Severity:</span>
            <span className={`text-xs font-bold ${
              disease.severity === "High" ? "text-red-600" :
              disease.severity === "Medium" ? "text-orange-600" :
              "text-green-600"
            }`}>
              {disease.severity}
            </span>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3 print:hidden">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Download PDF</span>
          </button>
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share on WhatsApp</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <Printer className="w-4 h-4" />
            <span className="text-sm font-medium">Print Results</span>
          </button>
        </div>
      </div>

      {isLowConfidence && (
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Low Confidence Detection</h3>
              <p className="text-sm text-yellow-800 mb-3">
                The model's confidence is below 70%. This could mean:
              </p>
              <ul className="text-sm text-yellow-800 space-y-1 ml-4">
                <li>• The image quality might be too low or blurry</li>
                <li>• The lighting conditions are not optimal</li>
                <li>• The disease symptoms are not clearly visible</li>
                <li>• The plant might have multiple diseases</li>
              </ul>
              <p className="text-sm font-medium text-yellow-900 mt-3">
                💡 Tip: Try uploading a clearer, well-lit image of the affected leaf for better accuracy.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 print:hidden">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600" />
          Was this prediction helpful?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Your feedback helps us improve the accuracy of our model.
        </p>
        
        {!feedback ? (
          <div className="flex gap-3">
            <button
              onClick={() => handleFeedback(true)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-50 text-green-700 border-2 border-green-200 rounded-lg hover:bg-green-100 transition"
            >
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">Yes, Correct</span>
            </button>
            <button
              onClick={() => handleFeedback(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-700 border-2 border-red-200 rounded-lg hover:bg-red-100 transition"
            >
              <ThumbsDown className="w-5 h-5" />
              <span className="font-medium">No, Incorrect</span>
            </button>
          </div>
        ) : (
          <div className={`p-4 rounded-lg ${
            feedback === 'correct' ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
          }`}>
            <p className={`text-sm font-medium ${
              feedback === 'correct' ? 'text-green-800' : 'text-red-800'
            }`}>
              {feedback === 'correct' 
                ? '✓ Thank you! Your feedback has been recorded.' 
                : '✗ Thank you for reporting. We\'ll use this to improve our model.'}
            </p>
          </div>
        )}
        
        {showFeedbackThanks && (
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg animate-pulse">
            <p className="text-sm text-blue-800 text-center">
              🙏 Feedback saved! Thank you for helping us improve.
            </p>
          </div>
        )}
      </div>

      {similarDiseases.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            Similar Diseases to Consider
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            These diseases have similar symptoms and might be confused with the detected disease:
          </p>
          
          <div className="space-y-4">
            {similarDiseases.map((similar, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-orange-600">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {diseaseInfo[similar.name]?.name || similar.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Similarity:</strong> {similar.similarity}
                    </p>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Key Differences:</p>
                      <ul className="space-y-1">
                        {similar.keyDifferences.map((diff, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-orange-500 mt-0.5">▸</span>
                            <span>{diff}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {disease.symptoms && disease.symptoms.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">What are the Symptoms?</h3>
            </div>
            <ul className="space-y-2">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {disease.causes && disease.causes.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Bug className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">What Causes It?</h3>
            </div>
            <ul className="space-y-2">
              {disease.causes.map((cause, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {disease.treatment && disease.treatment.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Treatment & Cure</h3>
            </div>
            <ul className="space-y-2">
              {disease.treatment.map((treat, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{treat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {disease.prevention && disease.prevention.length > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">How to Prevent It?</h3>
            </div>
            <ul className="space-y-2">
              {disease.prevention.map((prev, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{prev}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
