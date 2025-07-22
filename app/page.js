export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎓 EduSijaXpert
          </h1>
          <p className="text-gray-600">
            Selamat Datang di Platform Kuis Online
          </p>
        </div>
        
        <div className="mb-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">Fitur Platform:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>✅ Kuis Interaktif</li>
              <li>✅ Penilaian Otomatis</li>
              <li>✅ Mudah Diakses</li>
            </ul>
          </div>
        </div>

        <a 
          href="/quiz" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Mulai Kuis Sekarang →
        </a>
      </div>
    </div>
  )
}