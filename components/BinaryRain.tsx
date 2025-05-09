import { memo } from "preact/compat";

function BinaryRain() {
  const binaryDigits = Array.from(
    { length: 75 * globalThis.outerWidth / 1000 },
    () =>
      Array.from(
        { length: Math.floor(Math.random() * 10) + 5 },
        () => (Math.random() > 0.5 ? "1" : "0"),
      ).map((digit) => <div>{digit}</div>),
  );

  return (
    <div className="absolute flex w-full h-full overflow-hidden font-mono text-cyan-400 pointer-events-none">
      {binaryDigits.map((digits, index) => {
        const fontSize = Math.random() * 15 + 5;
        const lineHeight = Math.random() * 1.2 + 0.5;
        const textHeight = fontSize * digits.length * lineHeight;
        return (
          <span
            key={index}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDuration: `${Math.random() * 10 + 1}s`,
              fontSize: `${fontSize}px`,
              opacity: Math.random(),
              lineHeight,
              "--text-height": `${textHeight}px`,
              "--fall-distance": `calc(200vh + ${textHeight * 2}px)`,
            }}
          >
            {digits}
          </span>
        );
      })}

      <style>
        {`
      @keyframes fall {
        0% {
          transform: translateY(calc(var(--text-height) * -1 + -50vh));
        }
        100% {
          transform: translateY(var(--fall-distance));
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
