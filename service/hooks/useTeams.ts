import { useCallback, useMemo } from 'react';
import * as gql from '../gql/index.gql';
import { Team } from '../types/team';
import { mapUsers } from '../utils/maps';

export const useTeams = () => {
  const { data, loading, error, refetch } = gql.useGetAllTeamsQuery();
  console.log(data);
  const teams = useMemo<Team[]>(() => {
    const mapped = (data?.getAllTeams ?? []).map((team) => ({
      id: team.id,
      name: team.name,
      members: team.members?.forEach((m) => mapUsers(m)) ?? [],
    }));

    return mapped;
  }, [data]);

  const getTeamById = useCallback(
    (id: string) => {
      const team = teams.find((t) => t.id === id);
      console.log(`🔍 Looking for team with ID: ${id}`, team);

      return team;
    },
    [teams],
  );

  return {
    teams,
    getTeamById,
    loading,
    error,
    refetch,
  };
};
