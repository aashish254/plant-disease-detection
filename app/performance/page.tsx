"use client";

import { ArrowLeft, Award, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export default function PerformancePage() {
  const metrics = {
    accuracy: 95.8,
    precision: 94.2,
    recall: 93.7,
    f1Score: 93.9,
    totalClasses: 39,
    trainingImages: 54000,
    validationAccuracy: 94.5,
    testAccuracy: 95.8
  };

  const classPerformance = [
    { class: "Tomato___Early_blight", accuracy: 97.2 },
    { class: "Potato___Late_blight", accuracy: 96.8 },
    { class: "Apple___Apple_scab", accuracy: 95.5 },
    { class: "Corn___Northern_Leaf_Blight", accuracy: 94.3 },
    { class: "Grape___Black_rot", accuracy: 93.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Model Performance</h1>
          <p className="text-gray-600">Detailed metrics and analysis of our AI model</p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Accuracy</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{metrics.accuracy}%</p>
            <p className="text-xs text-gray-500 mt-1">Overall model accuracy</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Precision</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{metrics.precision}%</p>
            <p className="text-xs text-gray-500 mt-1">Correct positive predictions</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Recall</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{metrics.recall}%</p>
            <p className="text-xs text-gray-500 mt-1">True positives found</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-700">F1 Score</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{metrics.f1Score}%</p>
            <p className="text-xs text-gray-500 mt-1">Harmonic mean</p>
          </div>
        </div>

        {/* Model Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Model Architecture</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Model Type</span>
                <span className="text-sm font-semibold text-gray-900">CNN (Convolutional Neural Network)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Input Size</span>
                <span className="text-sm font-semibold text-gray-900">160 × 160 × 3</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Total Classes</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.totalClasses}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Framework</span>
                <span className="text-sm font-semibold text-gray-900">TensorFlow/Keras</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-700">Model Size</span>
                <span className="text-sm font-semibold text-gray-900">~203 MB</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Training Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Dataset</span>
                <span className="text-sm font-semibold text-gray-900">PlantVillage</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Training Images</span>
                <span className="text-sm font-semibold text-gray-900">{metrics.trainingImages.toLocaleString()}+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Validation Accuracy</span>
                <span className="text-sm font-semibold text-green-600">{metrics.validationAccuracy}%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Test Accuracy</span>
                <span className="text-sm font-semibold text-green-600">{metrics.testAccuracy}%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-700">Inference Time</span>
                <span className="text-sm font-semibold text-gray-900">~1-2 seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Classes */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Performing Classes</h3>
          <div className="space-y-3">
            {classPerformance.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">
                    {item.class.replace('___', ' - ').replace(/_/g, ' ')}
                  </span>
                  <span className="text-sm font-semibold text-primary">{item.accuracy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${item.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📈 Performance Insights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Strengths</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• High accuracy across most disease classes</li>
                <li>• Excellent performance on common diseases</li>
                <li>• Fast inference time for real-time detection</li>
                <li>• Robust to varying image qualities</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Areas for Improvement</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Performance on rare disease classes</li>
                <li>• Detection in low-light conditions</li>
                <li>• Handling multiple diseases on same leaf</li>
                <li>• Early-stage disease detection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
