import Head from 'next/head';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { CompanyLogos } from '../components/CompanyLogos';
import { FeatureIcons } from '../components/FeatureIcons';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { OffersDisplay } from '../components/OffersDisplay';
import { ProgressBar } from '../components/ProgressBar';
import { Testimonials } from '../components/Testimonials';


export default function Home() {
  return (
    <>
    <BaseLayout>
    <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-2">
      <Head>
        <title>Compare Loans - Find the Best Offers</title>
        <meta name="description" content="Compare loans without hurting your credit. Fast, online, and secure." />
         <h1 className="text-3xl font-bold underline">
        </h1>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-800">
        {/* Hero Section with some padding and center alignment */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <HeroSection />
        </section>

        {/* Feature Icons in a light background card */}
        <section className="bg-white shadow-md rounded-lg max-w-5xl mx-auto px-6 py-10 mb-16">
          <FeatureIcons />
        </section>

        {/* Offers Display with shadow and padding */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <OffersDisplay />
          </div>
        </section>

        {/* Trust logos on subtle gray background */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-6">
            <CompanyLogos />
          </div>
        </section>

        {/* Testimonials in a white card with shadow */}
        <section className="max-w-4xl mx-auto px-6 py-16 bg-white rounded-lg shadow-md mb-20">
          <Testimonials
            testimonials={[
              { name: 'Jane D.', quote: 'Fast and easy loan process!', title: 'Verified Borrower' },
              { name: 'Mike B.', quote: 'Got the money in one day.', title: 'Happy Customer' },
              { name: 'Sarah L.', quote: 'The comparison tool is brilliant.', title: 'Freelancer' },
            ]}
          />

        </section>

        {/* Footer */}
       
      </main>
    </BaseLayout.MainContent>
      </BaseLayout>
    </>
  );
}
