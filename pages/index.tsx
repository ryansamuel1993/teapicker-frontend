import { useCallback, useState } from 'react';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { PlayButton } from '@/components/button/PlayButtons';
import { Team } from '@/service/types/team';
import { useTeams } from '@/service/hooks/useTeam';
import { TeamModal } from '@/components/modals/TeamModal';
import { PlayModal } from '@/components/modals/PlayModal';
import { OrderModal } from '@/components/modals/OrderModal';
import { useOrder } from '@/service/hooks/useOrder';
import { usePlay } from '@/service/hooks/usePlay';
import { RecordingModal } from '@/components/modals/RecordingModal';

const Page = () => {
  const { teams, isLoading } = useTeams();
  const { menuItems, addItem, submitOrder, clearBasket, total, itemCount, removeItem } = useOrder();
  const { loser, isPlaying, playMatch } = usePlay();

  const [team, selectTeam] = useState<Team>();
  const [notes, setNotes] = useState<string | undefined>(undefined);
  const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(true);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);

  const handlePlay = useCallback(() => {
    setIsOrderModalOpen(true);
  }, []);

  const handleRecordNotes = useCallback((reocordedNote: string) => {
    setNotes(reocordedNote);
  }, []);

  const handleOrderSubmit = async () => {
    setIsOrderModalOpen(false);
    setIsTeamModalOpen(true);
  };

  const handleTeamSelect = (selectedTeam: Team) => {
    if (selectedTeam) {
      setIsTeamModalOpen(false);
      setIsPlayModalOpen(true);
      selectTeam(selectedTeam);
    }
  };

  const handleSubmitOrder = useCallback(() => {
    if (team && loser) {
      submitOrder(team.id, loser, notes);
      setIsPlayModalOpen(false);
    }
  }, [team, loser, notes, submitOrder]);

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="-translate-y-[80%]">
          <PlayButton onClick={handlePlay} />
        </div>
        <RecordingModal
          isOpen={isRecordingModalOpen}
          setIsOpen={setIsRecordingModalOpen}
          onRecording={handleRecordNotes}
        />
        <OrderModal
          isOpen={isOrderModalOpen}
          setIsOpen={setIsOrderModalOpen}
          removeItem={removeItem}
          items={menuItems}
          addItem={addItem}
          onSubmit={handleOrderSubmit}
          onRecord={setIsRecordingModalOpen}
          clearBasket={clearBasket}
          total={total}
          itemCount={itemCount}
        />

        <TeamModal
          isOpen={isTeamModalOpen}
          setIsOpen={setIsTeamModalOpen}
          teams={teams}
          onSelect={handleTeamSelect}
          isLoading={isLoading}
        />

        {team && (
          <PlayModal
            isOpen={isPlayModalOpen}
            setIsOpen={setIsPlayModalOpen}
            team={team}
            isPlaying={isPlaying}
            loser={loser}
            playMatch={playMatch}
            onSubmit={handleSubmitOrder}
          />
        )}
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
