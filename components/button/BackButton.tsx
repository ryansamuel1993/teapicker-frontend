import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { BackwardIcon } from '@heroicons/react/24/solid';

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => router.back()}
      className={classNames(
        'group relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white shadow-md backdrop-blur transition-all',
        'hover:bg-white/20 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50',
        className,
      )}
    >
      <BackwardIcon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
    </button>
  );
};

export default BackButton;
