import { useState } from 'react';
import * as gql from '../gql/index.gql';
import { CreatePreferencesInput, Preferences } from '../types/preferences';
import { useCurrentUser } from '@/service/hooks/useCurrentUser';

export const usePreferences = () => {
  const currentUser = useCurrentUser();

  const [updatePreferencesMutation, { loading }] = gql.useUpdatePreferencesMutation();
  const [userPreferences, setPreferences] = useState<Preferences | undefined>(currentUser?.preferences);
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<boolean>(false);

  const savePreferences = async () => {
    if (
      userPreferences?.drinkType &&
      userPreferences.sweetenerType &&
      userPreferences.sugarAmount !== undefined &&
      userPreferences.milkStrength
    ) {
      const input: CreatePreferencesInput = {
        userId: userPreferences.userId,
        drinkType: userPreferences.drinkType,
        sweetenerType: userPreferences.sweetenerType,
        sugarAmount: userPreferences.sugarAmount,
        milkStrength: userPreferences.milkStrength,
        notes: userPreferences.notes ?? '',
      };

      const response = await updatePreferencesMutation({ variables: { input } });

      if (response?.data?.updatePreferences?.status?.errorMessage) {
        setError(response.data.updatePreferences.status.errorMessage);
        setSuccess(false);

        return;
      }

      setSuccess(true);
    } else {
      setError('Please complete all required fields.');
      setSuccess(false);
    }
  };

  return {
    userPreferences,
    setPreferences,
    savePreferences,
    loading,
    error,
    success,
  };
};
