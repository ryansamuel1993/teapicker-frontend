import { FC, useEffect, useState } from 'react';
import { UserProfileCard } from './users/UserCard';
import { PlayEntryInput } from '@/service/types/play';

type PlayGridProps = {
  play: PlayEntryInput;
  loser?: string;
};

export const PlayGrid: FC<PlayGridProps> = ({ play, loser }) => {
  const [countdown, setCountdown] = useState(3);
  const [showLoser, setShowLoser] = useState(false);

  useEffect(() => {
    if (!loser) {
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      setShowLoser(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loser, play]);

  const loserUser = play.players.find((player) => player.id === loser);

  return (
    <div className="flex flex-col items-center justify-center p-4 my-auto">
      {!showLoser && countdown > 0 && <p className="text-6xl font-bold text-gray-600 animate-pulse">{countdown}</p>}

      {showLoser && loserUser && (
        <>
          <p className="mt-2 mb-5 text-2xl font-bold text-center text-red-500">Get the kettle on {loserUser.name} 😬</p>
          <div className="flex flex-col items-center transition-opacity duration-700 opacity-100">
            <UserProfileCard user={loserUser} />
          </div>
        </>
      )}
    </div>
  );
};
