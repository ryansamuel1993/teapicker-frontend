import { PiCoffeeFill } from 'react-icons/pi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { GiMilkCarton, GiSugarCane } from 'react-icons/gi';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { Preferences } from '@/service/types/preferences';

type PreferenceItemProps = {
  preference: Preferences;
};

const InfoRow = ({ icon: Icon, text }: { icon: React.ElementType; text?: string | number }) =>
  text ? (
    <div className="flex items-center gap-2 text-sm">
      <Icon />
      <span>{text}</span>
    </div>
  ) : null;

export const PreferenceItems = ({ preference }: PreferenceItemProps) => {
  return (
    <div className="px-4 py-3 space-y-1 text-white transition-all bg-gray-800 border rounded-md hover:bg-gray-700 border-white/10">
      <InfoRow icon={PiCoffeeFill} text={preference.drinkType} />
      <InfoRow icon={GiMilkCarton} text={preference.milkStrength} />
      <InfoRow icon={GiSugarCane} text={preference.sugarAmount ? `${preference.sugarAmount} sugar` : ''} />
      <InfoRow icon={MdOutlineWaterDrop} text={preference.sweetenerType} />
      <InfoRow icon={BiSolidMessageDetail} text={preference.notes} />
    </div>
  );
};
