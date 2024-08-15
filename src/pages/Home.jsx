function Home() {
  return (
    <>
      <div className="min-h-screen grid place-items-center bg-slate-100 bg-opacity-50">
        <div className="pokeball w-[192px] h-[192px] bg-[radial-gradient(circle,white_16px,black_17px_18px,white_19px_24px,black_25px_32px,transparent_33px),linear-gradient(to_bottom,red_0_80px,black_81px_96px,white_97px_100%)] rounded-full border-8 border-black shadow-[inset_-16px_-8px_0_0_rgba(0,0,0,0.2)] animate-[fall_0.5s_ease-in-out_1s,shake_1.25s_cubic-bezier(0.36,0.07,0.19,0.97)_1.5s_3,catch_0.5s_ease-out_5.25s_forwards]"></div>
      </div>

      <style>
        {`
          @keyframes shake {
            0% {
              transform: translateX(0) rotate(0);
            }
            20% {
              transform: translateX(-10px) rotate(-20deg);
            }
            30% {
              transform: translateX(10px) rotate(20deg);
            }
            50% {
              transform: translateX(-10px) rotate(-10deg);
            }
            60% {
              transform: translateX(10px) rotate(10deg);
            }
            100% {
              transform: translateX(0) rotate(0);
            }
          }

          @keyframes fall {
            0% {
              transform: translateY(-200%);
            }
            60% {
              transform: translateY(0);
            }
            80% {
              transform: translateY(-10%);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes catch {
            to {
              filter: saturate(0.7) brightness(0.7);
            }
          }
        `}
      </style>
    </>
  );
}

export default Home;
