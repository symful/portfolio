import { memo } from "preact/compat";

function BinaryRain() {
  const binaryDigits = Array.from(
    { length: 50 },
    () =>
      Array.from(
        { length: Math.floor(Math.random() * 10) + 5 },
        () => (Math.random() > 0.5 ? "1" : "0"),
      ).map((digit) => <div>{digit}</div>),
  );

  return (
    <div className="absolute w-full h-screen overflow-hidden font-mono text-cyan-400 pointer-events-none">
      {binaryDigits.map((digit, index) => (
        <span
          key={index}
          className="absolute animate-fall"
          style={{
            top: `-20vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            fontSize: `${Math.random() * 15 + 5}px`,
            opacity: Math.random(),
          }}
        >
          {digit}
        </span>
      ))}

      <style>
        {`
      @keyframes fall {
      0% {
      transform: translateY(-100%);
      }
      100% {
      transform: translateY(100vh);
      }
      }
      .animate-fall {
      animation: fall linear infinite;
      }
      `}
      </style>
    </div>
  );
}

export default memo(BinaryRain);
