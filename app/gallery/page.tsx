"use client";

import { useState } from "react";
import { diseaseInfo } from "@/lib/diseaseData";
import { ArrowLeft, Search, Filter, Leaf } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("All");

  const allDiseases = Object.entries(diseaseInfo);

  const plantTypes = ["All", ...new Set(allDiseases.map(([key]) => key.split('___')[0]))];

  const filteredDiseases = allDiseases.filter(([key, disease]) => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlant = selectedPlant === "All" || key.startsWith(selectedPlant);
    return matchesSearch && matchesPlant;
  });

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🌿 Disease Gallery</h1>
          <p className="text-gray-600">Browse all {allDiseases.length} plant diseases in our database</p>
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search diseases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedPlant}
                onChange={(e) => setSelectedPlant(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
              >
                {plantTypes.map((plant) => (
                  <option key={plant} value={plant}>
                    {plant === "All" ? "All Plants" : plant.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Showing {filteredDiseases.length} of {allDiseases.length} diseases</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDiseases.map(([key, disease]) => {
            const isHealthy = key.toLowerCase().includes('healthy');
            const plantType = key.split('___')[0];
            
            return (
              <div
                key={key}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-2 ${
                  isHealthy ? 'border-green-200 hover:border-green-300' : 'border-orange-200 hover:border-orange-300'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isHealthy ? 'bg-green-100' : 'bg-orange-100'
                    }`}>
                      <Leaf className={`w-6 h-6 ${isHealthy ? 'text-green-600' : 'text-orange-600'}`} />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {plantType.replace('_', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{disease.name}</h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{disease.description}</p>

                  {disease.severity && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full mb-4">
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

                  <div className="space-y-2 text-xs text-gray-600">
                    {disease.symptoms && disease.symptoms.length > 0 && (
                      <div>
                        <span className="font-semibold">Symptoms:</span> {disease.symptoms.length} listed
                      </div>
                    )}
                    {disease.treatment && disease.treatment.length > 0 && (
                      <div>
                        <span className="font-semibold">Treatments:</span> {disease.treatment.length} available
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const element = document.getElementById(`disease-${key}`);
                      if (element) {
                        element.classList.toggle('hidden');
                      }
                    }}
                    className="mt-4 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition text-sm font-medium"
                  >
                    View Details
                  </button>

                  <div id={`disease-${key}`} className="hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
                    {disease.symptoms && disease.symptoms.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Symptoms:</h4>
                        <ul className="space-y-1">
                          {disease.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-red-500 mt-0.5">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {disease.treatment && disease.treatment.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Treatment:</h4>
                        <ul className="space-y-1">
                          {disease.treatment.map((treat, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span className="text-green-500 mt-0.5">•</span>
                              <span>{treat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No diseases found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
