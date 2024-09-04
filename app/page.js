'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Activity, Book, Clock, Award, Sparkles, Palmtree, Shell, Brain, Target, TrendingUp, AlertTriangle } from 'lucide-react'

// Örnek veriler (unchanged)
const ilerlemeBilgisi = [
  { hafta: 'H1', matematik: 65, dil: 70, fen: 60, tarih: 55 },
  { hafta: 'H2', matematik: 70, dil: 75, fen: 65, tarih: 60 },
  { hafta: 'H3', matematik: 75, dil: 80, fen: 70, tarih: 65 },
  { hafta: 'H4', matematik: 80, dil: 85, fen: 75, tarih: 70 },
];

const basariVerileri = [
  { ad: 'Tamamlandı', deger: 15 },
  { ad: 'Devam Ediyor', deger: 5 },
];

const beceriVerileri = [
  { ad: 'Problem Çözme', deger: 80 },
  { ad: 'Eleştirel Düşünme', deger: 75 },
  { ad: 'Yaratıcılık', deger: 85 },
  { ad: 'İletişim', deger: 70 },
];

const ogrenmeStiliVerileri = [
  { konu: 'Görsel', A: 120, fullMark: 150 },
  { konu: 'İşitsel', A: 98, fullMark: 150 },
  { konu: 'Kinestetik', A: 86, fullMark: 150 },
  { konu: 'Okuma/Yazma', A: 99, fullMark: 150 },
  { konu: 'Mantıksal', A: 85, fullMark: 150 },
];

const RENKLER = ['#FFD700', '#87CEEB', '#98FB98', '#FFA07A'];

const OgrenmeAdasiEbeveynPaneli = () => {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto bg-gradient-to-br from-blue-100 to-green-100 min-h-screen">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8 bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="h-16 w-16 mr-4 bg-yellow-300 rounded-full flex items-center justify-center">
            <Palmtree className="h-10 w-10 text-green-700" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-800">Learn Isle Macerası</h1>
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
          Çocuk Profili
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <IstatistikKarti ikon={Clock} baslik="Toplam Öğrenme Süresi" deger="30 Saat" ilerleme={75} />
        <IstatistikKarti ikon={Book} baslik="Tamamlanan Dersler" deger="24/30" ilerleme={80} />
        <IstatistikKarti ikon={Shell} baslik="Toplanan Deniz Kabukları" deger="250" ilerleme={60} />
        <IstatistikKarti ikon={Brain} baslik="Bilgi Puanları" deger="1250" ilerleme={70} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <Activity className="mr-2 text-blue-500" />
            Haftalık İlerleme
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ilerlemeBilgisi}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="hafta" tick={{fill: '#333'}} />
              <YAxis tick={{fill: '#333'}} />
              <Tooltip contentStyle={{backgroundColor: 'white', border: 'none'}} />
              <Legend wrapperStyle={{paddingTop: '10px'}} />
              <Line type="monotone" dataKey="matematik" stroke="#FFD700" name="Matematik" strokeWidth={2} />
              <Line type="monotone" dataKey="dil" stroke="#87CEEB" name="Dil" strokeWidth={2} />
              <Line type="monotone" dataKey="fen" stroke="#98FB98" name="Fen" strokeWidth={2} />
              <Line type="monotone" dataKey="tarih" stroke="#FFA07A" name="Tarih" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <Sparkles className="mr-2 text-purple-500" />
            Beceri Gelişimi
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={beceriVerileri}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="ad" tick={{fill: '#333'}} />
              <YAxis tick={{fill: '#333'}} />
              <Tooltip contentStyle={{backgroundColor: 'white', border: 'none'}} />
              <Bar dataKey="deger" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <Award className="mr-2 text-yellow-500" />
            Başarılar
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={basariVerileri}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="deger"
                label={({ ad, percent }) => `${ad} ${(percent * 100).toFixed(0)}%`}
              >
                {basariVerileri.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={RENKLER[index % RENKLER.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{backgroundColor: 'white', border: 'none'}} />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <Target className="mr-2 text-indigo-500" />
            Öğrenme Stili Analizi
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ogrenmeStiliVerileri}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="konu" tick={{fill: '#333', fontSize: 12}} />
              <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{fill: '#666'}} />
              <Radar name="Öğrenme Stili" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip contentStyle={{backgroundColor: 'white', border: 'none'}} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <TrendingUp className="mr-2 text-green-500" />
            Kişiselleştirilmiş Öneriler
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li className="flex items-center">
              <Target className="mr-2 text-green-400 flex-shrink-0" />
              <span>Fen derslerinde daha fazla pratik yapması faydalı olabilir.</span>
            </li>
            <li className="flex items-center">
              <Target className="mr-2 text-green-400 flex-shrink-0" />
              <span>Okuma alışkanlığını geliştirmek için günlük okuma zamanı belirleyin.</span>
            </li>
            <li className="flex items-center">
              <Target className="mr-2 text-green-400 flex-shrink-0" />
              <span>Matematik konularında oyun tabanlı öğrenmeyi teşvik edin.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <AlertTriangle className="mr-2 text-yellow-500" />
            Dikkat Edilmesi Gereken Alanlar
          </h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-800">
              <h3 className="font-semibold">Tarih Konuları</h3>
              <p>Son haftalarda tarih derslerinde biraz zorlanma gözlemlendi. Tarihi hikayeleri ve belgeselleri birlikte izlemek ilgisini artırabilir.</p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-800">
              <h3 className="font-semibold">Düzenli Çalışma Alışkanlığı</h3>
              <p>Günlük çalışma süresi düzensiz. Birlikte bir çalışma programı oluşturmayı deneyin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IstatistikKarti({ ikon: Ikon, baslik, deger, ilerleme }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-800">{baslik}</h3>
        <Ikon className="h-5 w-5 text-blue-500" />
      </div>
      <div className="text-2xl font-bold text-gray-900">{deger}</div>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${ilerleme}%` }}
        ></div>
      </div>
    </div>
  )
}

export default OgrenmeAdasiEbeveynPaneli