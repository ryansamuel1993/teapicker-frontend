import { useCallback, useMemo } from 'react';
import { useCurrentUser } from '../hooks/useCurrentUser';
import * as gql from '../gql/index.gql';
import { CreateRatingInput } from '../types/rating';

export const useRatings = () => {
  const currentUser = useCurrentUser();

  const { data, loading, error, refetch } = gql.useGetRatingsByUserQuery({
    skip: !currentUser?.id,
    variables: { userId: currentUser?.id ?? '' },
  });

  const [createRatingMutation, { error: createError, loading: loadingCreateRating }] = gql.useCreateRatingMutation();

  const ratings = useMemo(() => data?.getRatingsByUser ?? [], [data]);

  const createRating = useCallback(
    async (input: CreateRatingInput) => {
      if (!currentUser?.id) {
        return;
      }

      await createRatingMutation({
        skip: !currentUser?.id,
        variables: {
          input: {
            ...input,
            userId: currentUser?.id ?? '',
          },
        },
      });
    },
    [createRatingMutation, currentUser?.id],
  );

  return {
    ratings,
    loading,
    error,
    refetch,
    createRating,
    loadingCreateRating,
    createError,
  };
};
