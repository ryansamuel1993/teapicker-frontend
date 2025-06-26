import { QuoteIcon } from 'lucide-react';
import { FC } from 'react';

interface Testimonial {
  name: string;
  quote: string;
  title?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gray-50 rounded-xl shadow-inner">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Users Are Saying</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {testimonials.map(({ name, quote, title }, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <QuoteIcon className="w-6 h-6 text-blue-500 mb-4" />
            <p className="text-gray-700 italic mb-4">&quot;{quote}&quot;</p>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{name}</p>
              {title && <p className="text-xs text-gray-500">{title}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
