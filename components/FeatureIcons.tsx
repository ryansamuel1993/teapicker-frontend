export const FeatureIcons = () => {
  const features = [
    { icon: '💳', text: 'No Credit Impact' },
    { icon: '⚡', text: '24-Hour Funding' },
    { icon: '🌐', text: '100% Online' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12 text-center">
      {features.map(({ icon, text }, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <div className="text-4xl mb-2">{icon}</div>
          <p className="font-medium text-gray-700">{text}</p>
        </div>
      ))}
    </div>
  );
};