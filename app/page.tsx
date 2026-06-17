import ClaimForm from '@/components/ClaimForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 gap-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-400">NigeriaVerified</h1>
        <p className="text-gray-400 mt-3 text-lg max-w-xl">
          Don't share misinformation. Paste any Nigerian election claim and we'll verify it instantly.
        </p>
      </div>

      <ClaimForm />
    </main>
  )
}