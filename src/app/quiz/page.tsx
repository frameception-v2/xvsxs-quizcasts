import { PROJECT_TITLE } from "~/lib/constants";
import WalletIntegration from "~/components/WalletIntegration";

export default function QuizPage() {
  return (
    <main className="min-h-screen w-full p-4 max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-purple-600">{PROJECT_TITLE}</h1>
      </header>
      
      <section className="border rounded-lg p-6 shadow-lg bg-white">
        <div className="h-96 flex items-center justify-center text-gray-500">
          Quiz Container - Coming Soon
        </div>
        
        <WalletIntegration />
      </section>
    </main>
  );
}
