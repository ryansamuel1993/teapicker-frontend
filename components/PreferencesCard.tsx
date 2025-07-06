import type { FC, JSX } from 'react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaMugHot, FaTint, FaCube, FaGlassWhiskey, FaStickyNote } from 'react-icons/fa';
import { Textarea } from 'flowbite-react';
import { CreatePreferencesInput, Preferences } from '@/service/types/preferences';
import { DrinkType, MilkStrength, SweetenerType } from '@/service/gql/index.gql';

type PreferencesCardProps = {
  preferences: Preferences;
  isEditable?: boolean;
  onChange?: (input: CreatePreferencesInput) => void;
};

export const PreferencesCard: FC<PreferencesCardProps> = ({ preferences, isEditable = false, onChange }) => {
  const t = useTranslations('Preferences');
  const [localPrefs, setLocalPrefs] = useState(preferences);

  const handleChange = <K extends keyof Preferences>(key: K, value: Preferences[K]) => {
    const updated = { ...localPrefs, [key]: value };
    setLocalPrefs(updated);

    if (
      updated.userId &&
      updated.drinkType &&
      updated.sweetenerType &&
      updated.sugarAmount !== undefined &&
      updated.milkStrength
    ) {
      const fullInput: CreatePreferencesInput = {
        userId: updated.userId,
        drinkType: updated.drinkType,
        sweetenerType: updated.sweetenerType,
        sugarAmount: updated.sugarAmount,
        milkStrength: updated.milkStrength,
        notes: updated.notes ?? '',
      };

      onChange?.(fullInput);
    }
  };

  const renderSelect = <K extends keyof Preferences>(
    key: K,
    labelKey: string,
    icon: JSX.Element,
    options: string[],
  ) => (
    <Row
      icon={icon}
      label={t(labelKey)}
      control={
        isEditable ? (
          <select
            className="w-40 px-2 py-1 text-white bg-gray-800 rounded"
            value={localPrefs[key] as string}
            onChange={(e) => handleChange(key, e.target.value as Preferences[K])}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {t(opt)}
              </option>
            ))}
          </select>
        ) : (
          <span>{t(localPrefs[key] as string)}</span>
        )
      }
    />
  );

  const renderNumber = (key: keyof Preferences, labelKey: string, icon: JSX.Element) => (
    <Row
      icon={icon}
      label={t(labelKey)}
      control={
        isEditable ? (
          <input
            type="number"
            className="w-20 px-2 py-1 text-white bg-gray-800 rounded"
            value={localPrefs[key] as number}
            onChange={(e) => handleChange(key, parseInt(e.target.value, 10) as Preferences[typeof key])}
          />
        ) : (
          <span>{localPrefs[key]}</span>
        )
      }
    />
  );

  return (
    <div className="w-full max-w-md text-center">
      <ul className="flex flex-col items-start justify-center space-y-4 text-left text-gray-300">
        {renderSelect('drinkType', 'drinkType', <FaMugHot className="text-orange-400" />, Object.values(DrinkType))}
        {renderSelect(
          'sweetenerType',
          'sweetenerType',
          <FaTint className="text-blue-400" />,
          Object.values(SweetenerType),
        )}
        {renderNumber('sugarAmount', 'sugarAmount', <FaCube className="text-pink-400" />)}
        {renderSelect(
          'milkStrength',
          'milkStrength',
          <FaGlassWhiskey className="text-yellow-400" />,
          Object.values(MilkStrength),
        )}

        <Row
          icon={<FaStickyNote className="mt-1 text-green-400" />}
          label={t('notes')}
          control={
            isEditable ? (
              <Textarea
                className="w-full max-w-xs text-white bg-gray-800 rounded resize-y"
                rows={3}
                value={localPrefs.notes ?? ''}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder={t('notes')}
              />
            ) : preferences.notes ? (
              <span className="italic text-gray-400">"{preferences.notes}"</span>
            ) : (
              <span className="italic text-gray-500">{t('noNotes')}</span>
            )
          }
        />
      </ul>
    </div>
  );
};

type RowProps = {
  icon: JSX.Element;
  label: string;
  control: JSX.Element;
};

const Row: FC<RowProps> = ({ icon, label, control }) => (
  <li className="flex items-center w-full gap-3">
    {icon}
    <span className="w-32 font-medium text-white">{label}:</span>
    <div className="flex justify-end flex-1">{control}</div>
  </li>
);
