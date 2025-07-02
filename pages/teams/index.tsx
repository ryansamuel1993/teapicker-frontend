import { Alert } from 'flowbite-react';
import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';
import { useTeams } from '@/service/hooks/useTeams';
import { TeamList } from '@/components/teams/TeamList';
import { LoadingSpinner } from '@/components/Spinner';

const Page = () => {
  const { teams, loading, error } = useTeams();

  return (
    <BaseLayout>
      <BaseLayout.MainContent className="flex flex-col items-center justify-start min-h-screen p-4">
        {loading && <LoadingSpinner />}
        {error && <Alert color="failure">Failed to load teams. Please try again later.{error.message}</Alert>}
        {!loading && !error && <TeamList teams={teams} />}
      </BaseLayout.MainContent>
    </BaseLayout>
  );
};

export default Page;
