import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
        <p className="text-gray-600 font-medium">Analyzing your plant...</p>
        <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
      </div>
    </div>
  );
}
