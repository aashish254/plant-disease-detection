"use client";

import { useState, useEffect } from "react";
import { diseaseInfo } from "@/lib/diseaseData";
import { ArrowLeft, Trophy, CheckCircle, XCircle, RotateCcw, Brain } from "lucide-react";
import Link from "next/link";

interface QuizQuestion {
  disease: string;
  options: string[];
  correctAnswer: string;
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('quiz_high_score');
    if (saved) setHighScore(parseInt(saved));
    
    generateQuestions();
  }, []);

  const generateQuestions = () => {
    const allDiseases = Object.keys(diseaseInfo).filter(key => !key.toLowerCase().includes('healthy'));
    const shuffled = allDiseases.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    const quizQuestions: QuizQuestion[] = selected.map(disease => {
      const wrongAnswers = allDiseases
        .filter(d => d !== disease)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const options = [...wrongAnswers, disease].sort(() => 0.5 - Math.random());

      return {
        disease,
        options,
        correctAnswer: disease
      };
    });

    setQuestions(quizQuestions);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizComplete(true);
        const finalScore = answer === questions[currentQuestion].correctAnswer ? score + 1 : score;
        if (finalScore > highScore) {
          setHighScore(finalScore);
          localStorage.setItem('quiz_high_score', finalScore.toString());
        }
      }
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
    generateQuestions();
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-12 h-12 text-primary animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = (score / questions.length) * 100;
    const isNewHighScore = score > highScore;

    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-primary">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
              
              {isNewHighScore && (
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 font-semibold">🎉 New High Score!</p>
                </div>
              )}

              <div className="mb-6">
                <p className="text-6xl font-bold text-primary mb-2">{score}/{questions.length}</p>
                <p className="text-xl text-gray-600">
                  {percentage >= 80 ? "Excellent! 🌟" : 
                   percentage >= 60 ? "Good Job! 👍" : 
                   percentage >= 40 ? "Not Bad! 💪" : "Keep Learning! 📚"}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-green-700 mb-1">Correct</p>
                  <p className="text-2xl font-bold text-green-900">{score}</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="text-sm text-red-700 mb-1">Incorrect</p>
                  <p className="text-2xl font-bold text-red-900">{questions.length - score}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">High Score</p>
                <p className="text-2xl font-bold text-gray-900">{Math.max(score, highScore)}/{questions.length}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={restartQuiz}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
                >
                  <RotateCcw className="w-5 h-5" />
                  Try Again
                </button>
                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const disease = diseaseInfo[question.disease];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                Score: {score}/{currentQuestion}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What disease is this?
              </h2>
              
              {/* Disease Description */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <p className="text-gray-700 leading-relaxed">{disease.description}</p>
                
                {disease.symptoms && disease.symptoms.length > 0 && (
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 mb-2">Symptoms:</p>
                    <ul className="space-y-1">
                      {disease.symptoms.slice(0, 3).map((symptom, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === question.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswer(option)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left font-medium ${
                      showCorrect
                        ? 'bg-green-50 border-green-500 text-green-900'
                        : showIncorrect
                        ? 'bg-red-50 border-red-500 text-red-900'
                        : isSelected
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-primary hover:bg-primary/5'
                    } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{diseaseInfo[option]?.name || option}</span>
                      {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Result Message */}
            {showResult && (
              <div className={`mt-6 p-4 rounded-lg ${
                selectedAnswer === question.correctAnswer
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-red-50 border-2 border-red-200'
              }`}>
                <p className={`font-semibold ${
                  selectedAnswer === question.correctAnswer ? 'text-green-900' : 'text-red-900'
                }`}>
                  {selectedAnswer === question.correctAnswer
                    ? '✓ Correct! Well done!'
                    : `✗ Incorrect. The correct answer is: ${diseaseInfo[question.correctAnswer]?.name}`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
