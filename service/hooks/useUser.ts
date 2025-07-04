import { useCallback, useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import * as gql from '../gql/index.gql';
import { CreateUserInput, UpdateUserInput, User } from '../types/user';
import { mapUser } from '../utils/maps/user';

export const useUser = () => {
  const { data, loading, refetch } = gql.useGetAllUsersQuery();
  const [createUserMutation, { loading: creating }] = gql.useCreateUserMutation();
  const [updateUserMutation, { loading: updating }] = gql.useUpdateUserMutation();

  const [status, setStatus] = useState<string | undefined>();
  const [fetchedUserById, setFetchedUserById] = useState<User | undefined>();

  const [fetchUserByIdQuery] = useLazyQuery(gql.GetUserByIdDocument, {
    fetchPolicy: 'network-only',
    onCompleted: (response) => {
      if (response?.getUserById) {
        setFetchedUserById(mapUser(response.getUserById));
      }
    },
    onError: (error) => {
      setStatus(error.message);
    },
  });

  const users = useMemo<User[]>(() => {
    return (data?.getAllUsers ?? []).map(mapUser);
  }, [data]);

  const createUser = async (user: CreateUserInput) => {
    const response = await createUserMutation({
      variables: { input: user },
    });

    if (response?.data?.createUser?.status?.errorMessage) {
      setStatus(response.data.createUser.status.errorMessage);
    }

    if (response?.data?.createUser.data) {
      return mapUser(response.data.createUser.data);
    }

    return undefined;
  };

  const updateUser = async (user: UpdateUserInput) => {
    const response = await updateUserMutation({
      variables: { input: user },
    });

    if (response?.data?.updateUser?.status?.errorMessage) {
      setStatus(response.data.updateUser.status.errorMessage);
    }

    return response?.data?.updateUser?.data;
  };

  const fetchUserById = useCallback(
    (userId: string) => {
      fetchUserByIdQuery({ variables: { userId } });
    },
    [fetchUserByIdQuery],
  );

  return {
    users,
    isLoading: loading || creating || updating,
    createUser,
    updateUser,
    error: status,
    refetch,
    fetchUserById,
    fetchedUserById,
  };
};
