import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import * as gql from '../gql/index.gql';
import { PlayEntryInput } from '../types/play';

export const usePlay = () => {
  const [status, setStatus] = useState<string | undefined>();
  const [loser, setLoser] = useState<string | undefined>();

  const [playMutation, { loading: isPlaying }] = useMutation(gql.GetPlayResultDocument, {
    fetchPolicy: 'network-only',
    onCompleted: (response) => {
      const result = response?.getPlayResult?.data;

      if (result) {
        setLoser(result);
      }

      return undefined;
    },
    onError: (error) => {
      setStatus(error.message);
    },
  });

  const playMatch = useCallback(
    async (playInput: PlayEntryInput): Promise<string | undefined> => {
      const playerIds = playInput.players.map((x) => x.id);

      const { data } = await playMutation({
        variables: {
          play: {
            players: playerIds,
          },
        },
      });

      return data?.getPlayResult?.data;
    },
    [playMutation],
  );

  return {
    playMatch,
    status,
    isPlaying,
    loser,
  };
};
