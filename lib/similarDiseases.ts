export interface SimilarDisease {
  name: string;
  similarity: string;
  keyDifferences: string[];
}

export const similarDiseasesMap: Record<string, SimilarDisease[]> = {
  "Tomato___Early_blight": [
    {
      name: "Tomato___Late_blight",
      similarity: "Both cause dark lesions on leaves",
      keyDifferences: [
        "Early blight has concentric rings (target pattern)",
        "Late blight has water-soaked lesions",
        "Early blight starts on lower leaves",
        "Late blight spreads more rapidly"
      ]
    },
    {
      name: "Tomato___Septoria_leaf_spot",
      similarity: "Both cause spotting on leaves",
      keyDifferences: [
        "Early blight has larger spots with rings",
        "Septoria has smaller circular spots",
        "Septoria spots have gray centers with black dots",
        "Early blight causes more yellowing"
      ]
    }
  ],
  "Tomato___Late_blight": [
    {
      name: "Tomato___Early_blight",
      similarity: "Both cause leaf lesions",
      keyDifferences: [
        "Late blight has water-soaked appearance",
        "Early blight has concentric ring pattern",
        "Late blight shows white fuzzy growth",
        "Late blight spreads much faster"
      ]
    }
  ],
  "Potato___Early_blight": [
    {
      name: "Potato___Late_blight",
      similarity: "Both affect potato leaves",
      keyDifferences: [
        "Early blight has target-like spots",
        "Late blight has water-soaked lesions",
        "Early blight progresses slowly",
        "Late blight can destroy crop in days"
      ]
    }
  ],
  "Potato___Late_blight": [
    {
      name: "Potato___Early_blight",
      similarity: "Both cause leaf damage",
      keyDifferences: [
        "Late blight has white fungal growth",
        "Early blight has concentric rings",
        "Late blight affects tubers severely",
        "Late blight thrives in cool, wet weather"
      ]
    }
  ],
  "Apple___Apple_scab": [
    {
      name: "Apple___Black_rot",
      similarity: "Both cause dark spots on leaves",
      keyDifferences: [
        "Apple scab has olive-green velvety lesions",
        "Black rot has purple spots with dark borders",
        "Apple scab affects fruit surface",
        "Black rot causes fruit mummification"
      ]
    }
  ],
  "Corn___Common_rust": [
    {
      name: "Corn___Northern_Leaf_Blight",
      similarity: "Both cause leaf discoloration",
      keyDifferences: [
        "Common rust has circular pustules",
        "Northern blight has elongated lesions",
        "Rust pustules are reddish-brown",
        "Blight lesions are gray-green to tan"
      ]
    }
  ],
  "Grape___Black_rot": [
    {
      name: "Grape___Esca_(Black_Measles)",
      similarity: "Both affect grape leaves and fruit",
      keyDifferences: [
        "Black rot causes mummified berries",
        "Esca shows tiger-stripe leaf pattern",
        "Black rot has tan spots with dark borders",
        "Esca can cause sudden vine death"
      ]
    }
  ],
  "Tomato___Bacterial_spot": [
    {
      name: "Pepper,_bell___Bacterial_spot",
      similarity: "Same bacterial pathogen",
      keyDifferences: [
        "Affects different host plants",
        "Symptoms appear similar",
        "Treatment is the same",
        "Both cause raised spots on fruit"
      ]
    }
  ]
};

export function getSimilarDiseases(diseaseClass: string): SimilarDisease[] {
  return similarDiseasesMap[diseaseClass] || [];
}
