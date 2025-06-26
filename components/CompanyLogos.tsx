import { TrustPilot } from './Icons/TrustpilotIcon';
// import { BbbIcon } from './Icons/BbbIcon';
// import { NortonIcon } from './Icons/NortonIcon';

export const CompanyLogos = () => {
  const logos = [
    { name: 'Trustpilot', label: 'Trustpilot Reviews', icon: <TrustPilot size={30} /> },
    // { name: 'BBB', label: 'BBB Accredited', icon: <BbbIcon size={30} /> },
    // { name: 'Norton', label: 'Norton Secured', icon: <NortonIcon size={30} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-10 bg-white rounded-xl shadow-sm">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center gap-3 px-6 py-3 border rounded-lg shadow hover:shadow-md transition duration-300 bg-gray-50"
        >
          <div className="w-10 h-10 flex items-center justify-center">
            {logo.icon}
          </div>
          <span className="text-gray-700 font-medium">{logo.label}</span>
        </div>
      ))}
    </div>
  );
};
