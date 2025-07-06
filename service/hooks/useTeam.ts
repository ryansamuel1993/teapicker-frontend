import { useCallback, useMemo, useState } from 'react';
import * as gql from '../gql/index.gql';
import { CreateTeamInput, Team } from '../types/team';
import { mapUser } from '../utils/maps/user';
import { mapTeam } from '../utils/maps/team';
import { User } from '../types/user';

export const useTeams = () => {
  const { data, loading, refetch } = gql.useGetAllTeamsQuery();
  const [createTeamMutation, { loading: creating }] = gql.useCreateTeamMutation();
  const [status, setStatus] = useState<string | undefined>();

  const teams = useMemo<Team[]>(() => {
    const mapped =
      data?.getAllTeams?.map((team) => ({
        id: team.id,
        name: team.name,
        members: team.members?.map((m) => mapUser(m)) ?? ([] as User[]),
      })) ?? [];

    return mapped;
  }, [data]);

  const createTeam = async (team: CreateTeamInput) => {
    const response = await createTeamMutation({
      variables: {
        input: {
          name: team.name,
          members: team.members,
        },
      },
    });

    if (response?.data?.createTeam?.status?.errorMessage) {
      setStatus(response.data.createTeam.status.errorMessage);
    }

    if (response?.data?.createTeam?.data) {
      return mapTeam(response?.data?.createTeam?.data);
    }

    return undefined;
  };

  const getTeamById = useCallback(
    (id: string) => {
      if (!teams.length) {
        return undefined;
      }

      return teams.find((t) => t.id === id);
    },
    [teams],
  );

  console.log(teams);

  return {
    teams,
    getTeamById,
    createTeam,
    isLoading: loading || creating,
    error: status,
    refetch,
  };
};
