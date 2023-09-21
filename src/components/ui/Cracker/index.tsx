const colors = [
  'bg-red-500',
  'bg-blue-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-pink-500',
];
const sizes = ['w-2 h-2', 'w-4 h-4', 'w-6 h-6'];

export const Cracker: React.FC = () => {
  const crackers = Array(100)
    .fill(0)
    .map(() => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      top: `${Math.random() * -20 - 5}vh`,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 3}s`,
    }));

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden relative">
      {crackers.map((cracker, idx) => (
        <div
          key={idx}
          className={`cracker animate-cracker ${cracker.color} ${cracker.size} rounded-full absolute`}
          style={{
            top: cracker.top,
            left: cracker.left,
            animationDelay: cracker.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Cracker;
