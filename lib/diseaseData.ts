export interface DiseaseInfo {
  name: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  severity: string;
}

export const diseaseInfo: Record<string, DiseaseInfo> = {
  "Apple___Apple_scab": {
    name: "Apple Scab",
    description: "Apple scab is a common disease caused by the fungus Venturia inaequalis, affecting leaves and fruit with dark, scabby lesions.",
    symptoms: ["Olive-green to dark brown spots on leaves", "Velvety lesions on fruit", "Premature leaf drop", "Cracked and distorted fruit"],
    causes: ["Fungus Venturia inaequalis", "Wet, cool spring weather", "Poor air circulation", "Infected fallen leaves"],
    treatment: ["Apply fungicides (captan, myclobutanil)", "Remove infected leaves and fruit", "Prune for better air circulation", "Use resistant apple varieties"],
    prevention: ["Rake and destroy fallen leaves", "Apply dormant oil sprays", "Choose scab-resistant varieties", "Ensure proper spacing between trees"],
    severity: "Medium"
  },
  "Apple___Black_rot": {
    name: "Apple Black Rot",
    description: "Black rot is a fungal disease that affects apple trees, causing fruit rot and leaf spots with characteristic concentric rings.",
    symptoms: ["Purple spots on leaves", "Concentric rings on fruit", "Mummified fruit on tree", "Cankers on branches"],
    causes: ["Fungus Botryosphaeria obtusa", "Warm, humid weather", "Wounded or stressed trees", "Poor sanitation"],
    treatment: ["Remove mummified fruit", "Prune infected branches", "Apply copper-based fungicides", "Improve tree vigor"],
    prevention: ["Maintain tree health", "Remove dead wood", "Avoid mechanical injuries", "Practice good orchard sanitation"],
    severity: "High"
  },
  "Apple___Cedar_apple_rust": {
    name: "Cedar Apple Rust",
    description: "A fungal disease requiring both apple and cedar trees to complete its lifecycle, causing yellow-orange spots on leaves.",
    symptoms: ["Yellow-orange spots on leaves", "Tube-like projections on leaf undersides", "Premature leaf drop", "Fruit lesions"],
    causes: ["Fungus Gymnosporangium juniperi-virginianae", "Presence of cedar trees nearby", "Wet spring weather", "Airborne spores"],
    treatment: ["Apply fungicides during spring", "Remove nearby cedar trees if possible", "Use myclobutanil or propiconazole", "Improve air circulation"],
    prevention: ["Plant resistant apple varieties", "Remove cedar trees within 2 miles", "Apply preventive fungicides", "Monitor weather conditions"],
    severity: "Medium"
  },
  "Apple___healthy": {
    name: "Healthy Apple Plant",
    description: "Your apple plant appears healthy with no visible signs of disease. Continue with regular care and monitoring.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular watering schedule", "Maintain proper fertilization", "Monitor for any changes"],
    prevention: ["Regular inspection of leaves and fruit", "Proper pruning and sanitation", "Balanced nutrition", "Good air circulation"],
    severity: "None"
  },
  "Background_without_leaves": {
    name: "No Plant Detected",
    description: "The image does not contain a clear plant leaf. Please upload an image showing a plant leaf for disease detection.",
    symptoms: [],
    causes: ["No plant in image", "Background only", "Unclear image"],
    treatment: ["Upload a clear image of a plant leaf"],
    prevention: ["Ensure the image shows a plant leaf clearly", "Avoid background-only images", "Use good lighting"],
    severity: "None"
  },
  "Blueberry___healthy": {
    name: "Healthy Blueberry Plant",
    description: "Your blueberry plant is healthy with no signs of disease.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Proper spacing", "Good air circulation"],
    severity: "None"
  },
  "Cherry___Powdery_mildew": {
    name: "Cherry Powdery Mildew",
    description: "A fungal disease causing white powdery growth on cherry leaves and fruit.",
    symptoms: ["White powdery coating on leaves", "Distorted leaves", "Reduced fruit quality"],
    causes: ["Fungus Podosphaera clandestina", "High humidity", "Poor air circulation"],
    treatment: ["Apply sulfur-based fungicides", "Remove infected leaves", "Improve air circulation"],
    prevention: ["Plant resistant varieties", "Ensure good spacing", "Avoid overhead watering"],
    severity: "Medium"
  },
  "Cherry___healthy": {
    name: "Healthy Cherry Plant",
    description: "Your cherry plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Proper pruning", "Good air circulation"],
    severity: "None"
  },
  "Corn___Cercospora_leaf_spot Gray_leaf_spot": {
    name: "Corn Gray Leaf Spot",
    description: "A fungal disease causing rectangular gray-brown lesions parallel to leaf veins in corn.",
    symptoms: ["Rectangular gray-brown lesions", "Lesions parallel to leaf veins", "Premature leaf death", "Reduced yield"],
    causes: ["Fungus Cercospora zeae-maydis", "Warm, humid weather", "Continuous corn cropping", "Infected crop residue"],
    treatment: ["Apply fungicides (azoxystrobin, propiconazole)", "Remove crop residue", "Improve air circulation", "Use resistant hybrids"],
    prevention: ["Rotate crops", "Till under residue", "Plant resistant varieties", "Monitor weather conditions"],
    severity: "Medium"
  },
  "Corn___Common_rust": {
    name: "Corn Common Rust",
    description: "A fungal disease producing rust-colored pustules on corn leaves.",
    symptoms: ["Circular to elongate rust pustules", "Reddish-brown spores", "Yellowing of leaves", "Reduced photosynthesis"],
    causes: ["Fungus Puccinia sorghi", "Cool, moist weather", "Airborne spores", "Susceptible varieties"],
    treatment: ["Apply fungicides if severe", "Use resistant hybrids", "Monitor disease progression", "Improve plant nutrition"],
    prevention: ["Plant resistant varieties", "Avoid late planting", "Monitor fields regularly", "Maintain plant vigor"],
    severity: "Medium"
  },
  "Corn___Northern_Leaf_Blight": {
    name: "Corn Northern Leaf Blight",
    description: "A fungal disease creating large elliptical lesions on corn leaves.",
    symptoms: ["Long, elliptical gray-green lesions", "Lesions turn tan with age", "Extensive leaf blighting", "Yield reduction"],
    causes: ["Fungus Exserohilum turcicum", "Moderate temperatures", "High humidity", "Infected crop residue"],
    treatment: ["Apply fungicides (azoxystrobin)", "Remove crop residue", "Use resistant hybrids", "Improve air circulation"],
    prevention: ["Plant resistant varieties", "Rotate crops", "Till under residue", "Monitor weather"],
    severity: "Medium"
  },
  "Corn___healthy": {
    name: "Healthy Corn Plant",
    description: "Your corn plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule", "Provide adequate nutrition"],
    prevention: ["Regular monitoring", "Crop rotation", "Balanced fertilization", "Good field drainage"],
    severity: "None"
  },
  "Tomato___Bacterial_spot": {
    name: "Tomato Bacterial Spot",
    description: "A bacterial disease affecting tomato leaves, stems, and fruit, causing dark spots with yellow halos.",
    symptoms: ["Small, dark brown spots on leaves", "Yellow halos around spots", "Raised spots on fruit", "Leaf drop and defoliation"],
    causes: ["Xanthomonas bacteria", "Warm, wet weather", "Contaminated seeds or transplants", "Overhead irrigation"],
    treatment: ["Apply copper-based bactericides", "Remove infected plants", "Avoid overhead watering", "Use disease-free seeds"],
    prevention: ["Use certified disease-free seeds", "Practice crop rotation", "Drip irrigation instead of overhead", "Disinfect tools regularly"],
    severity: "High"
  },
  "Tomato___Early_blight": {
    name: "Tomato Early Blight",
    description: "A fungal disease causing dark brown spots with concentric rings, primarily affecting older leaves.",
    symptoms: ["Dark brown spots with concentric rings", "Target-like lesions on leaves", "Yellowing around spots", "Premature leaf drop"],
    causes: ["Fungus Alternaria solani", "Warm, humid conditions", "Poor air circulation", "Nutrient deficiency"],
    treatment: ["Apply fungicides (chlorothalonil, mancozeb)", "Remove infected lower leaves", "Improve air circulation", "Mulch to prevent soil splash"],
    prevention: ["Rotate crops every 2-3 years", "Space plants properly", "Water at base of plants", "Apply mulch around plants"],
    severity: "Medium"
  },
  "Tomato___Late_blight": {
    name: "Tomato Late Blight",
    description: "A devastating disease that can destroy entire tomato crops rapidly, caused by Phytophthora infestans.",
    symptoms: ["Water-soaked lesions on leaves", "White fuzzy growth on leaf undersides", "Brown, greasy spots on fruit", "Rapid plant death"],
    causes: ["Oomycete Phytophthora infestans", "Cool, wet weather", "High humidity", "Infected plant material"],
    treatment: ["Apply fungicides immediately (chlorothalonil, mancozeb)", "Remove and destroy infected plants", "Improve air circulation", "Avoid overhead watering"],
    prevention: ["Use resistant varieties", "Monitor weather conditions", "Apply preventive fungicides", "Ensure good drainage"],
    severity: "High"
  },
  "Tomato___Leaf_Mold": {
    name: "Tomato Leaf Mold",
    description: "A fungal disease that thrives in humid greenhouse conditions, causing olive-green mold on leaf undersides.",
    symptoms: ["Yellow spots on upper leaf surface", "Olive-green to gray mold on undersides", "Leaf curling and wilting", "Reduced fruit production"],
    causes: ["Fungus Passalora fulva", "High humidity (>85%)", "Poor ventilation", "Warm temperatures"],
    treatment: ["Reduce humidity levels", "Improve ventilation", "Apply fungicides (chlorothalonil)", "Remove infected leaves"],
    prevention: ["Maintain humidity below 85%", "Ensure good air circulation", "Space plants adequately", "Use resistant varieties"],
    severity: "Medium"
  },
  "Tomato___Septoria_leaf_spot": {
    name: "Tomato Septoria Leaf Spot",
    description: "A fungal disease causing small circular spots with gray centers and dark borders on tomato foliage.",
    symptoms: ["Small circular spots with gray centers", "Dark borders around spots", "Tiny black dots in spot centers", "Lower leaves affected first"],
    causes: ["Fungus Septoria lycopersici", "Warm, wet weather", "Splashing water", "Infected plant debris"],
    treatment: ["Apply fungicides (chlorothalonil, copper)", "Remove infected lower leaves", "Mulch to prevent soil splash", "Improve air circulation"],
    prevention: ["Rotate crops", "Remove plant debris", "Water at soil level", "Space plants properly"],
    severity: "Medium"
  },
  "Tomato___Spider_mites Two-spotted_spider_mite": {
    name: "Two-Spotted Spider Mite",
    description: "Tiny arachnids that feed on plant sap, causing yellow stippling and fine webbing on tomato plants.",
    symptoms: ["Yellow stippling on leaves", "Fine webbing on plants", "Bronzed or silvered leaves", "Leaf drop in severe cases"],
    causes: ["Spider mites (Tetranychus urticae)", "Hot, dry conditions", "Dusty environments", "Lack of natural predators"],
    treatment: ["Spray with water to dislodge mites", "Apply insecticidal soap or neem oil", "Use miticides if severe", "Introduce predatory mites"],
    prevention: ["Maintain adequate moisture", "Avoid over-fertilizing", "Encourage beneficial insects", "Regular monitoring"],
    severity: "Medium"
  },
  "Tomato___Target_Spot": {
    name: "Tomato Target Spot",
    description: "A fungal disease creating target-like lesions on tomato leaves, stems, and fruit.",
    symptoms: ["Brown spots with concentric rings", "Target-like appearance", "Spots on leaves, stems, and fruit", "Defoliation in severe cases"],
    causes: ["Fungus Corynespora cassiicola", "Warm, humid weather", "Poor air circulation", "Overhead irrigation"],
    treatment: ["Apply fungicides (azoxystrobin, chlorothalonil)", "Remove infected plant parts", "Improve ventilation", "Reduce leaf wetness"],
    prevention: ["Use resistant varieties", "Practice crop rotation", "Avoid overhead watering", "Maintain plant spacing"],
    severity: "Medium"
  },
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    name: "Tomato Yellow Leaf Curl Virus",
    description: "A viral disease transmitted by whiteflies causing severe stunting and yield loss in tomatoes.",
    symptoms: ["Upward leaf curling", "Yellowing of leaf margins", "Stunted plant growth", "Reduced fruit production"],
    causes: ["Begomovirus", "Whitefly transmission", "Infected transplants", "Warm weather"],
    treatment: ["Remove and destroy infected plants", "Control whitefly populations", "Use reflective mulches", "No cure available"],
    prevention: ["Use virus-free transplants", "Control whiteflies with insecticides", "Use resistant varieties", "Install insect-proof screens"],
    severity: "High"
  },
  "Tomato___Tomato_mosaic_virus": {
    name: "Tomato Mosaic Virus",
    description: "A highly contagious viral disease causing mottling and distortion of tomato leaves.",
    symptoms: ["Mottled light and dark green on leaves", "Leaf distortion and curling", "Stunted growth", "Reduced fruit quality"],
    causes: ["Tobamovirus", "Mechanical transmission", "Contaminated tools", "Infected seeds"],
    treatment: ["Remove infected plants immediately", "Disinfect tools with bleach solution", "No chemical cure available", "Control aphid vectors"],
    prevention: ["Use certified virus-free seeds", "Wash hands before handling plants", "Disinfect tools regularly", "Avoid tobacco use near plants"],
    severity: "High"
  },
  "Tomato___healthy": {
    name: "Healthy Tomato Plant",
    description: "Your tomato plant is healthy with no signs of disease. Maintain good cultural practices.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain consistent watering", "Provide adequate nutrition"],
    prevention: ["Regular monitoring", "Proper spacing", "Good air circulation", "Balanced fertilization"],
    severity: "None"
  },
  "Potato___Early_blight": {
    name: "Potato Early Blight",
    description: "A fungal disease affecting potato foliage and tubers with characteristic target-like lesions.",
    symptoms: ["Dark brown spots with concentric rings", "Target-like lesions", "Yellowing around spots", "Premature defoliation"],
    causes: ["Fungus Alternaria solani", "Warm, humid weather", "Plant stress", "Poor nutrition"],
    treatment: ["Apply fungicides (chlorothalonil, mancozeb)", "Remove infected foliage", "Improve plant nutrition", "Ensure adequate spacing"],
    prevention: ["Rotate crops", "Use certified seed potatoes", "Maintain plant vigor", "Apply mulch"],
    severity: "Medium"
  },
  "Potato___Late_blight": {
    name: "Potato Late Blight",
    description: "A devastating disease that can destroy potato crops rapidly, the same pathogen that caused the Irish Potato Famine.",
    symptoms: ["Water-soaked lesions on leaves", "White fungal growth on undersides", "Brown rot on tubers", "Rapid plant collapse"],
    causes: ["Oomycete Phytophthora infestans", "Cool, wet weather", "High humidity", "Infected seed potatoes"],
    treatment: ["Apply fungicides immediately", "Destroy infected plants", "Harvest early if possible", "Improve drainage"],
    prevention: ["Use resistant varieties", "Plant certified seed", "Monitor weather", "Apply preventive fungicides"],
    severity: "High"
  },
  "Potato___healthy": {
    name: "Healthy Potato Plant",
    description: "Your potato plant is healthy. Continue with proper care and monitoring.",
    symptoms: [],
    causes: [],
    treatment: ["Maintain regular watering", "Continue fertilization schedule", "Monitor for changes"],
    prevention: ["Regular inspection", "Proper hilling", "Good drainage", "Crop rotation"],
    severity: "None"
  },
  "Pepper,_bell___Bacterial_spot": {
    name: "Pepper Bacterial Spot",
    description: "A bacterial disease affecting pepper plants, causing leaf spots and fruit lesions that reduce quality.",
    symptoms: ["Small, dark brown spots on leaves", "Raised spots on fruit", "Yellow halos around spots", "Defoliation"],
    causes: ["Xanthomonas bacteria", "Warm, wet conditions", "Contaminated seeds", "Overhead irrigation"],
    treatment: ["Apply copper bactericides", "Remove infected plants", "Avoid overhead watering", "Use disease-free seeds"],
    prevention: ["Use certified seeds", "Practice crop rotation", "Drip irrigation", "Disinfect tools"],
    severity: "High"
  },
  "Pepper,_bell___healthy": {
    name: "Healthy Pepper Plant",
    description: "Your pepper plant is healthy with no disease symptoms. Maintain current care practices.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule", "Provide adequate nutrition"],
    prevention: ["Regular monitoring", "Proper spacing", "Good air circulation", "Balanced fertilization"],
    severity: "None"
  },
  "Grape___Black_rot": {
    name: "Grape Black Rot",
    description: "A fungal disease affecting grape leaves, shoots, and fruit, causing black mummified berries.",
    symptoms: ["Circular tan spots on leaves", "Black, mummified berries", "Lesions on shoots", "Premature fruit drop"],
    causes: ["Fungus Guignardia bidwellii", "Warm, wet weather", "Poor air circulation", "Infected plant debris"],
    treatment: ["Apply fungicides (mancozeb, myclobutanil)", "Remove mummified fruit", "Prune for air circulation", "Destroy infected material"],
    prevention: ["Remove plant debris", "Prune properly", "Apply preventive fungicides", "Ensure good drainage"],
    severity: "High"
  },
  "Grape___Esca_(Black_Measles)": {
    name: "Grape Esca (Black Measles)",
    description: "A complex fungal disease affecting grapevines, causing leaf discoloration and wood decay.",
    symptoms: ["Tiger-stripe pattern on leaves", "Interveinal chlorosis", "Berry spotting", "Sudden vine death"],
    causes: ["Multiple fungi (Phaeomoniella, Phaeoacremonium)", "Pruning wounds", "Stressed vines", "Old vineyards"],
    treatment: ["Remove infected wood", "Protect pruning wounds", "Improve vine vigor", "No effective chemical control"],
    prevention: ["Proper pruning techniques", "Seal large cuts", "Maintain vine health", "Remove dead wood"],
    severity: "High"
  },
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
    name: "Grape Leaf Blight",
    description: "A fungal disease causing leaf spots and defoliation in grapevines.",
    symptoms: ["Brown spots with yellow halos", "Leaf blight and necrosis", "Premature defoliation", "Reduced vine vigor"],
    causes: ["Fungus Isariopsis", "Humid conditions", "Poor air circulation", "Dense canopy"],
    treatment: ["Apply fungicides", "Remove infected leaves", "Improve air circulation", "Thin canopy"],
    prevention: ["Proper canopy management", "Adequate spacing", "Good air flow", "Regular monitoring"],
    severity: "Medium"
  },
  "Grape___healthy": {
    name: "Healthy Grape Vine",
    description: "Your grapevine is healthy. Continue with proper vineyard management.",
    symptoms: [],
    causes: [],
    treatment: ["Maintain regular care", "Continue pruning schedule", "Monitor for changes"],
    prevention: ["Regular inspection", "Proper pruning", "Good air circulation", "Balanced nutrition"],
    severity: "None"
  },
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
    name: "Corn Gray Leaf Spot",
    description: "A fungal disease causing rectangular gray-brown lesions parallel to leaf veins in corn.",
    symptoms: ["Rectangular gray-brown lesions", "Lesions parallel to leaf veins", "Premature leaf death", "Reduced yield"],
    causes: ["Fungus Cercospora zeae-maydis", "Warm, humid weather", "Continuous corn cropping", "Infected crop residue"],
    treatment: ["Apply fungicides (azoxystrobin, propiconazole)", "Remove crop residue", "Improve air circulation", "Use resistant hybrids"],
    prevention: ["Rotate crops", "Till under residue", "Plant resistant varieties", "Monitor weather conditions"],
    severity: "Medium"
  },
  "Corn_(maize)___Common_rust_": {
    name: "Corn Common Rust",
    description: "A fungal disease producing rust-colored pustules on corn leaves.",
    symptoms: ["Circular to elongate rust pustules", "Reddish-brown spores", "Yellowing of leaves", "Reduced photosynthesis"],
    causes: ["Fungus Puccinia sorghi", "Cool, moist weather", "Airborne spores", "Susceptible varieties"],
    treatment: ["Apply fungicides if severe", "Use resistant hybrids", "Monitor disease progression", "Improve plant nutrition"],
    prevention: ["Plant resistant varieties", "Avoid late planting", "Monitor fields regularly", "Maintain plant vigor"],
    severity: "Medium"
  },
  "Corn_(maize)___Northern_Leaf_Blight": {
    name: "Corn Northern Leaf Blight",
    description: "A fungal disease creating large elliptical lesions on corn leaves.",
    symptoms: ["Long, elliptical gray-green lesions", "Lesions turn tan with age", "Extensive leaf blighting", "Yield reduction"],
    causes: ["Fungus Exserohilum turcicum", "Moderate temperatures", "High humidity", "Infected crop residue"],
    treatment: ["Apply fungicides (azoxystrobin)", "Remove crop residue", "Use resistant hybrids", "Improve air circulation"],
    prevention: ["Plant resistant varieties", "Rotate crops", "Till under residue", "Monitor weather"],
    severity: "Medium"
  },
  "Corn_(maize)___healthy": {
    name: "Healthy Corn Plant",
    description: "Your corn plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule", "Provide adequate nutrition"],
    prevention: ["Regular monitoring", "Crop rotation", "Balanced fertilization", "Good field drainage"],
    severity: "None"
  },
  "Raspberry___healthy": {
    name: "Healthy Raspberry Plant",
    description: "Your raspberry plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Proper pruning", "Good air circulation"],
    severity: "None"
  },
  "Soybean___healthy": {
    name: "Healthy Soybean Plant",
    description: "Your soybean plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Crop rotation", "Balanced fertilization"],
    severity: "None"
  },
  "Squash___Powdery_mildew": {
    name: "Squash Powdery Mildew",
    description: "A fungal disease causing white powdery growth on squash leaves.",
    symptoms: ["White powdery coating on leaves", "Yellowing leaves", "Stunted growth", "Reduced yield"],
    causes: ["Fungus Podosphaera xanthii", "High humidity", "Poor air circulation", "Crowded plants"],
    treatment: ["Apply sulfur or potassium bicarbonate", "Remove infected leaves", "Improve air circulation"],
    prevention: ["Plant resistant varieties", "Ensure good spacing", "Avoid overhead watering", "Remove plant debris"],
    severity: "Medium"
  },
  "Strawberry___Leaf_scorch": {
    name: "Strawberry Leaf Scorch",
    description: "A fungal disease causing purple spots and leaf browning in strawberries.",
    symptoms: ["Purple spots on leaves", "Leaf margins turn brown", "Scorched appearance", "Reduced plant vigor"],
    causes: ["Fungus Diplocarpon earlianum", "Warm, wet weather", "Poor air circulation", "Overhead irrigation"],
    treatment: ["Apply fungicides", "Remove infected leaves", "Improve air circulation", "Avoid overhead watering"],
    prevention: ["Plant resistant varieties", "Ensure good spacing", "Mulch around plants", "Remove old leaves"],
    severity: "Medium"
  },
  "Strawberry___healthy": {
    name: "Healthy Strawberry Plant",
    description: "Your strawberry plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Proper spacing", "Good air circulation"],
    severity: "None"
  },
  "Orange___Haunglongbing_(Citrus_greening)": {
    name: "Citrus Greening (Huanglongbing)",
    description: "A devastating bacterial disease affecting citrus trees, transmitted by psyllid insects.",
    symptoms: ["Yellow shoots", "Blotchy mottled leaves", "Lopsided bitter fruit", "Tree decline and death"],
    causes: ["Bacteria Candidatus Liberibacter", "Asian citrus psyllid transmission", "Infected plant material"],
    treatment: ["Remove infected trees", "Control psyllid populations", "No cure available", "Use antibiotics (limited effectiveness)"],
    prevention: ["Use certified disease-free nursery stock", "Control psyllid insects", "Remove infected trees promptly", "Plant resistant varieties"],
    severity: "High"
  },
  "Peach___Bacterial_spot": {
    name: "Peach Bacterial Spot",
    description: "A bacterial disease affecting peach leaves and fruit.",
    symptoms: ["Small dark spots on leaves", "Spots with yellow halos", "Fruit lesions", "Defoliation"],
    causes: ["Xanthomonas bacteria", "Warm, wet weather", "Overhead irrigation", "Contaminated equipment"],
    treatment: ["Apply copper bactericides", "Remove infected plant parts", "Avoid overhead watering"],
    prevention: ["Use disease-free plants", "Practice crop rotation", "Disinfect tools", "Improve air circulation"],
    severity: "High"
  },
  "Peach___healthy": {
    name: "Healthy Peach Plant",
    description: "Your peach plant is healthy with no disease symptoms.",
    symptoms: [],
    causes: [],
    treatment: ["Continue regular care", "Maintain watering schedule"],
    prevention: ["Regular monitoring", "Proper pruning", "Good air circulation"],
    severity: "None"
  }
};
