import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20" id="team">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About This Project</h3>
            <p className="text-gray-600 text-sm mb-4">
              This Plant Disease Detection System uses deep learning and the PlantVillage dataset 
              to identify plant diseases with high accuracy. Built as part of a Computer Vision 
              course project at VIT.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Course:</strong> Computer Vision<br />
              <strong>Instructor:</strong> Dr. Dheeba J<br />
              <strong>Institution:</strong> SCOPE, VIT
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Team Members</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">
                  <strong>Aashish Kumar Mahato</strong> - 22BCE3874
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">
                  <strong>Ayush Yadav</strong> - 22BCE3883
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">
                  <strong>Bibek Gami</strong> - 22BCE3860
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Plant Disease Detection System. Fall Semester Project.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-primary transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
