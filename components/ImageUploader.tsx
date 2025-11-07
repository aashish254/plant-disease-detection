"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, Image as ImageIcon, X, Eye } from "lucide-react";
import axios from "axios";
import LoadingAnimation from "./LoadingAnimation";

interface ImageUploaderProps {
  onPrediction: (result: any) => void;
  onError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

export default function ImageUploader({ onPrediction, onError, setLoading }: ImageUploaderProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      onError("Please upload a valid image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    setLoading(true);

    try {
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append("file", blob, "plant_leaf.jpg");

      const result = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onPrediction(result.data);
    } catch (error: any) {
      console.error("Prediction error:", error);
      onError(
        error.response?.data?.error || 
        "Failed to analyze image. Please make sure the backend server is running on port 5000."
      );
    } finally {
      setIsProcessing(false);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (isProcessing) {
    return <LoadingAnimation />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      {showPreview && selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowPreview(false)}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute -top-12 right-0 p-2 bg-white rounded-full hover:bg-gray-100 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {!selectedImage ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
            isDragging
              ? "border-primary bg-primary/5 scale-105"
              : "border-gray-300 hover:border-primary/50"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Upload Plant Leaf Image
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Drag and drop your image here, or click to browse
              </p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Choose File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            <p className="text-xs text-gray-400 mt-2">
              Supported formats: JPG, PNG, JPEG (Max 10MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative group">
            <img
              src={selectedImage}
              alt="Selected plant leaf"
              className="w-full h-96 object-contain rounded-lg bg-gray-50 cursor-pointer"
              onClick={() => setShowPreview(true)}
            />
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg"
            >
              <div className="bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="font-medium">Preview</span>
              </div>
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAnalyze}
              disabled={isProcessing}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ImageIcon className="w-5 h-5" />
              Analyze Image
            </button>
            <button
              onClick={handleReset}
              disabled={isProcessing}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
