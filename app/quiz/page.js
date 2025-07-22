'use client'
import { useState } from 'react'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const questions = [
    {
      question: "Berapakah hasil dari 15 + 27?",
      options: ["40", "42", "44", "45"],
      correct: "42"
    },
    {
      question: "Manakah yang merupakan bilangan prima?",
      options: ["15", "21", "23", "25"],
      correct: "23"
    },
    {
      question: "Hasil dari 8 × 7 adalah?",
      options: ["54", "56", "58", "60"],
      correct: "56"
    }
  ]

  const handleAnswerSubmit = async () => {
    if (!selectedAnswer) {
      alert('Pilih jawaban terlebih dahulu!')
      return
    }

    // Cek jawaban (sementara tanpa API dulu)
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
      alert("Benar!")
    } else {
      alert("Salah!")
    }
    
    // Lanjut ke soal berikutnya
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer('')
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedAnswer('')
  }

  if (showScore) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎉 Kuis Selesai!</h2>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <p className="text-3xl font-bold text-green-600 mb-2">{score}/{questions.length}</p>
            <p className="text-green-700">
              Skor Anda: {Math.round((score/questions.length) * 100)}%
            </p>
          </div>
          <div className="space-y-3">
            <button 
              onClick={resetQuiz}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ulangi Kuis
            </button>
            <a 
              href="/"
              className="block w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Kembali ke Home
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-2">📚 Kuis Matematika Dasar</h1>
          <div className="flex justify-between items-center">
            <span>Soal {currentQuestion + 1} dari {questions.length}</span>
            <span>Skor: {score}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-blue-500 h-2 transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <label 
                key={index}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedAnswer === option 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    selectedAnswer === option 
                      ? 'border-blue-500 bg-blue-500' 
                      : 'border-gray-400'
                  }`}>
                    {selectedAnswer === option && (
                      <div className="w-2 h-2 rounded-full bg-white m-0.5"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </div>
              </label>
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAnswerSubmit}
            disabled={!selectedAnswer}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
              selectedAnswer
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Selesai' : 'Jawab & Lanjut'}
          </button>
        </div>
      </div>
    </div>
  )
}