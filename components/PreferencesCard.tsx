import type { FC } from 'react';
import { useTranslations } from 'next-intl';
import { FaMugHot, FaTint, FaCube, FaGlassWhiskey, FaStickyNote } from 'react-icons/fa';
import { Preferences } from '@/service/types/preferences';
import { formatEnum } from '@/service/utils/format';

type PreferencesCardProps = {
  preferences: Preferences;
};

export const PreferencesCard: FC<PreferencesCardProps> = ({ preferences }) => {
  const t = useTranslations('Preferences');

  const fields = [
    { icon: <FaMugHot className="text-orange-400" />, label: t('drinkType'), value: formatEnum(preferences.drinkType) },
    {
      icon: <FaTint className="text-blue-400" />,
      label: t('sweetenerType'),
      value: formatEnum(preferences.sweetenerType),
    },
    { icon: <FaCube className="text-pink-400" />, label: t('sugarAmount'), value: preferences.sugarAmount },
    {
      icon: <FaGlassWhiskey className="text-yellow-400" />,
      label: t('milkStrength'),
      value: formatEnum(preferences.milkStrength),
    },
  ];

  return (
    <div className="w-full max-w-md text-center">
      <h3 className="pb-2 mb-4 text-xl font-bold text-white">{t('preferences')}</h3>
      <ul className="flex flex-col items-center justify-center space-y-3 text-gray-300 text-2xl-center">
        {fields.map(({ icon, label, value }) => (
          <li key={label} className="flex items-center gap-3">
            {icon}
            <span>
              <span className="font-medium text-white">{label}:</span> {value}
            </span>
          </li>
        ))}
        {preferences.notes && (
          <li className="flex items-start gap-3">
            <FaStickyNote className="mt-1 text-green-400" />
            <span className="italic text-gray-400">"{preferences.notes}"</span>
          </li>
        )}
      </ul>
    </div>
  );
};
