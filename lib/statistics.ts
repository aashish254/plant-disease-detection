export interface ScanRecord {
  id: string;
  disease: string;
  confidence: number;
  timestamp: number;
  plantType: string;
  feedback?: 'correct' | 'incorrect' | null;
}

export interface Statistics {
  totalScans: number;
  diseaseCount: Record<string, number>;
  plantTypeCount: Record<string, number>;
  averageConfidence: number;
  feedbackStats: {
    correct: number;
    incorrect: number;
    total: number;
  };
}

const STORAGE_KEY = 'plant_disease_scans';
const MAX_RECORDS = 100;

export function saveScan(disease: string, confidence: number): string {
  const scans = getScans();
  const plantType = disease.split('___')[0];
  
  const newScan: ScanRecord = {
    id: Date.now().toString(),
    disease,
    confidence,
    timestamp: Date.now(),
    plantType,
    feedback: null
  };

  scans.unshift(newScan);
  
  if (scans.length > MAX_RECORDS) {
    scans.splice(MAX_RECORDS);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(scans));
  return newScan.id;
}

export function getScans(): ScanRecord[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function updateFeedback(scanId: string, feedback: 'correct' | 'incorrect') {
  const scans = getScans();
  const scan = scans.find(s => s.id === scanId);
  
  if (scan) {
    scan.feedback = feedback;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scans));
  }
}

export function getStatistics(): Statistics {
  const scans = getScans();
  
  if (scans.length === 0) {
    return {
      totalScans: 0,
      diseaseCount: {},
      plantTypeCount: {},
      averageConfidence: 0,
      feedbackStats: { correct: 0, incorrect: 0, total: 0 }
    };
  }

  const diseaseCount: Record<string, number> = {};
  const plantTypeCount: Record<string, number> = {};
  let totalConfidence = 0;
  let feedbackCorrect = 0;
  let feedbackIncorrect = 0;
  let feedbackTotal = 0;

  scans.forEach(scan => {
    diseaseCount[scan.disease] = (diseaseCount[scan.disease] || 0) + 1;
    
    plantTypeCount[scan.plantType] = (plantTypeCount[scan.plantType] || 0) + 1;
    
    totalConfidence += scan.confidence;
    
    if (scan.feedback) {
      feedbackTotal++;
      if (scan.feedback === 'correct') feedbackCorrect++;
      if (scan.feedback === 'incorrect') feedbackIncorrect++;
    }
  });

  return {
    totalScans: scans.length,
    diseaseCount,
    plantTypeCount,
    averageConfidence: totalConfidence / scans.length,
    feedbackStats: {
      correct: feedbackCorrect,
      incorrect: feedbackIncorrect,
      total: feedbackTotal
    }
  };
}

export function clearStatistics() {
  localStorage.removeItem(STORAGE_KEY);
}
