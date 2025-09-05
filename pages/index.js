import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Moving background */}
      <motion.div
        className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Trust Card Gallery */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-4">
          <Image src="/sample.png" alt="Trust Card" width={300} height={400} className="rounded-lg" />
          <h2 className="text-white text-center mt-2">Trust Card #1</h2>
        </div>
      </div>
    </div>
  )
}