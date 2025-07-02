import { useMemo } from 'react';
import * as gql from '../gql/index.gql';
import { User } from '../types/user';

export const useUser = () => {
  const { data, loading, error, refetch } = gql.useGetAllUsersQuery();

  const users = useMemo<User[]>(() => {
    return (data?.getAllUsers ?? []).map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      media: user.media,
    }));
  }, [data]);

  return {
    users,
    loading,
    error,
    refetch,
  };
};
