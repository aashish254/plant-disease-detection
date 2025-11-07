"use client";

interface ConfidenceMeterProps {
  confidence: number;
  size?: number;
}

export default function ConfidenceMeter({ confidence, size = 120 }: ConfidenceMeterProps) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (confidence / 100) * circumference;

  const getColor = () => {
    if (confidence >= 80) return "#22c55e";
    if (confidence >= 60) return "#eab308";
    return "#ef4444";
  };

  const color = getColor();

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold" style={{ color }}>
          {confidence.toFixed(0)}%
        </span>
        <span className="text-xs text-gray-500 mt-1">Confidence</span>
      </div>
    </div>
  );
}
