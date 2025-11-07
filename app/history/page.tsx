"use client";

import { useEffect, useState } from "react";
import { getScans, ScanRecord } from "@/lib/statistics";
import { diseaseInfo } from "@/lib/diseaseData";
import { ArrowLeft, Clock, TrendingUp, Trash2 } from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
  const [scans, setScans] = useState<ScanRecord[]>([]);

  useEffect(() => {
    setScans(getScans());
  }, []);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600 bg-green-100';
    if (confidence >= 0.6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">🕐 Detection History</h1>
              <p className="text-gray-600">View your recent plant disease scans</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Total Scans</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{scans.length}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Latest Scan</h3>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {scans.length > 0 ? formatDate(scans[0].timestamp) : 'No scans yet'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Storage</h3>
            </div>
            <p className="text-sm font-medium text-gray-900">
              Last {Math.min(scans.length, 100)} scans saved
            </p>
          </div>
        </div>

        {scans.length > 0 ? (
          <div className="space-y-4">
            {scans.map((scan) => {
              const disease = diseaseInfo[scan.disease];
              const isHealthy = scan.disease.toLowerCase().includes('healthy');
              
              return (
                <div
                  key={scan.id}
                  className={`bg-white rounded-xl shadow-md p-6 border-2 transition-all hover:shadow-lg ${
                    isHealthy ? 'border-green-200' : 'border-orange-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {disease?.name || scan.disease}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getConfidenceColor(scan.confidence)}`}>
                          {(scan.confidence * 100).toFixed(1)}% confidence
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatDate(scan.timestamp)}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                          {scan.plantType.replace('_', ' ')}
                        </span>
                      </div>

                      {disease && (
                        <p className="text-sm text-gray-600 mb-3">{disease.description}</p>
                      )}

                      {scan.feedback && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                          scan.feedback === 'correct' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {scan.feedback === 'correct' ? '✓ Marked as Correct' : '✗ Marked as Incorrect'}
                        </div>
                      )}
                    </div>

                    {disease?.severity && (
                      <div className="ml-4">
                        <div className="px-3 py-1 bg-gray-100 rounded-full">
                          <span className="text-xs font-medium text-gray-600">Severity: </span>
                          <span className={`text-xs font-bold ${
                            disease.severity === "High" ? "text-red-600" :
                            disease.severity === "Medium" ? "text-orange-600" :
                            "text-green-600"
                          }`}>
                            {disease.severity}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Scans Yet</h3>
            <p className="text-gray-600 mb-6">
              Start scanning plants to see your detection history here.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
            >
              Start Scanning
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
