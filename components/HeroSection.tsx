import { useRouter } from 'next/router';

export const HeroSection = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/prequalification/1');
  };

  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Compare Loans Without Hurting Your Credit</h1>
      <p className="mb-6 text-lg">Get matched with trusted lenders in minutes</p>
      <button
        onClick={handleGetStarted}
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Get Started
      </button>
    </section>
  );
};
