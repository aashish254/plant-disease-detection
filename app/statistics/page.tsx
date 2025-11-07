"use client";

import { useEffect, useState } from "react";
import { getStatistics, clearStatistics, Statistics } from "@/lib/statistics";
import { BarChart3, TrendingUp, CheckCircle, XCircle, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { diseaseInfo } from "@/lib/diseaseData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function StatisticsPage() {
  const [stats, setStats] = useState<Statistics | null>(null);

  useEffect(() => {
    setStats(getStatistics());
  }, []);

  const handleClearStats = () => {
    if (confirm("Are you sure you want to clear all statistics? This cannot be undone.")) {
      clearStatistics();
      setStats(getStatistics());
    }
  };

  if (!stats) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const topDiseases = Object.entries(stats.diseaseCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const topPlants = Object.entries(stats.plantTypeCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const accuracyRate = stats.feedbackStats.total > 0
    ? ((stats.feedbackStats.correct / stats.feedbackStats.total) * 100).toFixed(1)
    : "N/A";

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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">📊 Statistics Dashboard</h1>
              <p className="text-gray-600">Track your plant disease detection usage and accuracy</p>
            </div>
            <button
              onClick={handleClearStats}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              <Trash2 className="w-4 h-4" />
              <span className="font-medium">Clear All Data</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Total Scans</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalScans}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Avg Confidence</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {stats.averageConfidence.toFixed(1)}%
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Accuracy Rate</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">{accuracyRate}%</p>
            <p className="text-xs text-gray-500 mt-1">
              Based on {stats.feedbackStats.total} feedback responses
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-700">Incorrect</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {stats.feedbackStats.incorrect}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Top 5 Detected Diseases</h3>
            {topDiseases.length > 0 ? (
              <Bar
                data={{
                  labels: topDiseases.map(([disease]) => 
                    diseaseInfo[disease]?.name.split(' ').slice(0, 3).join(' ') || disease
                  ),
                  datasets: [{
                    label: 'Detections',
                    data: topDiseases.map(([, count]) => count),
                    backgroundColor: [
                      'rgba(34, 197, 94, 0.8)',
                      'rgba(59, 130, 246, 0.8)',
                      'rgba(234, 179, 8, 0.8)',
                      'rgba(249, 115, 22, 0.8)',
                      'rgba(239, 68, 68, 0.8)',
                    ],
                    borderColor: [
                      'rgb(34, 197, 94)',
                      'rgb(59, 130, 246)',
                      'rgb(234, 179, 8)',
                      'rgb(249, 115, 22)',
                      'rgb(239, 68, 68)',
                    ],
                    borderWidth: 2,
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const value = context.parsed.y ?? 0;
                          const percentage = ((value / stats.totalScans) * 100).toFixed(1);
                          return `${value} detections (${percentage}%)`;
                        }
                      }
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        precision: 0
                      }
                    }
                  }
                }}
              />
            ) : (
              <p className="text-gray-500 text-center py-8">No data yet. Start scanning plants!</p>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Plant Type Distribution</h3>
            {topPlants.length > 0 ? (
              <Pie
                data={{
                  labels: topPlants.map(([plant]) => plant.replace('_', ' ')),
                  datasets: [{
                    data: topPlants.map(([, count]) => count),
                    backgroundColor: [
                      'rgba(34, 197, 94, 0.8)',
                      'rgba(59, 130, 246, 0.8)',
                      'rgba(234, 179, 8, 0.8)',
                      'rgba(249, 115, 22, 0.8)',
                      'rgba(239, 68, 68, 0.8)',
                    ],
                    borderColor: [
                      'rgb(34, 197, 94)',
                      'rgb(59, 130, 246)',
                      'rgb(234, 179, 8)',
                      'rgb(249, 115, 22)',
                      'rgb(239, 68, 68)',
                    ],
                    borderWidth: 2,
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const percentage = ((context.parsed / stats.totalScans) * 100).toFixed(1);
                          return `${context.label}: ${context.parsed} (${percentage}%)`;
                        }
                      }
                    }
                  }
                }}
              />
            ) : (
              <p className="text-gray-500 text-center py-8">No data yet. Start scanning plants!</p>
            )}
          </div>
        </div>

        {stats.feedbackStats.total > 0 && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">User Feedback Summary</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm text-green-700 mb-1">Correct Predictions</p>
                <p className="text-2xl font-bold text-green-900">{stats.feedbackStats.correct}</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-red-700 mb-1">Incorrect Predictions</p>
                <p className="text-2xl font-bold text-red-900">{stats.feedbackStats.incorrect}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-700 mb-1">Total Feedback</p>
                <p className="text-2xl font-bold text-blue-900">{stats.feedbackStats.total}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
