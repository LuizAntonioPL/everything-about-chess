import TopBttn from "./TopBttn/topBttn";

export default function About() {
  return (
    <div className="flex flex-col w-full relative pb-20">
      <TopBttn />
      <article className="flex flex-col w-full min-h-screen">
        <img
          src="https://i.pinimg.com/originals/d6/6c/16/d66c160ddafa7d751b57c8ab90a6329c.jpg"
          className="w-full h-56 object-cover bg-fixed"
          style={{}}
        />
        <div className="flex flex-col mx-auto sm:w-2/3 px-10 py-16 min-h-40 bg-zinc-300 dark:bg-gray-800">
          <div className="mb-10 dark:bg-slate-700 bg-gray-200 p-4">
            <h1 className="text-3xl font-bold">What is chess?</h1>
            <p>
              In this article, we are going to discover what in fact chess
              represents and how it transformed the lives of many people around
              the world
            </p>
            <div className="py-2 border-t-2 border-neutral-600 dark:border-white">
              <p className="text-slate-600 dark:text-neutral-500">
                A post by{" "}
                <span className="dark:text-lime-300 text-lime-800">
                  Luiz Antonio
                </span>
              </p>
              <sup className="dark:text-neutral-500">
                Sunday, october 15th 2023
              </sup>
            </div>
          </div>

          <section className="flex flex-col w-full gap-6 mb-10">
            <h2 className="text-2xl underline">The soul of chess</h2>
            <div>
              <p className="first-letter:ml-3 first-letter:text-5xl dark:first-letter:text-lime-300 first-letter:text-lime-800 first-letter:float-left">
                Chess is a two-player board game that involves strategy,
                tactics, and logic. The game is played on a checkered board with
                64 squares, each player controlling 16 pieces: one king, one
                queen, two rooks, two bishops, two knights, and eight pawns. The
                objective of the game is to checkmate the opponent's king, which
                means to threaten it with capture and leave no way to escape or
                defend. Chess has a long and rich history, dating back to the
                6th century in India. It is widely considered to be one of the
                most intellectual and elegant games in the world.
              </p>
            </div>
            <div>
              <p className="first-letter:ml-10">
                Over the centuries, chess has evolved and adapted to various
                cultures, resulting in different variants of the game. Despite
                these variations, the essence of chess remains the same: a
                battle of wits and strategy. The game’s complexity allows for an
                almost infinite number of possible moves, making each game
                unique. Chess is not only a game but also a reflection of life’s
                challenges and strategies. It teaches patience, planning, and
                the ability to adapt to changing situations. Today, chess is
                played worldwide, both casually and in professional tournaments.
                It has also found its place in education due to its ability to
                enhance cognitive skills and logical thinking.
              </p>
            </div>
          </section>
          <section className="flex flex-col w-full gap-6">
            <h2 className="text-2xl underline">How chess changes lives</h2>
            <div>
              <p className="first-letter:ml-3 first-letter:text-5xl dark:first-letter:text-lime-300 first-letter:text-lime-800 first-letter:float-left">
                The chess game is more than just 64 squares and 32 pieces. It is
                a game that can teach you valuable lessons for life, such as
                strategy, creativity, problem-solving, and decision-making.
                Chess can also change lives for the better, as many examples
                from around the world show.
              </p>
            </div>
            <div className="flex items-center lg:flex-nowrap justify-center flex-wrap gap-3">
              <p className="first-letter:ml-10">
                One example is Phiona Mutesi, a girl from Uganda who grew up in
                a slum and learned chess at a local project. She became a Woman
                Candidate Master and played at the World Chess Olympiad,
                inspiring many others with her story. Her life was portrayed in
                the movie Queen of Katwe, which shows how chess can empower
                someone to develop skills that can make them successful in life.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgeTcm1fAV-nPJnot4IAFgzpYGInsyfoygAOUZqV_y-oAZC6Rw8voAS9FrJ2uwnbijqU&usqp=CAU"
                className="rounded-md"
              />
            </div>
            <div className="flex flex-row-reverse justify-center items-center lg:flex-nowrap flex-wrap gap-3">
              <p className="first-letter:ml-10">
                Another example is Maurice Ashley, the first African American
                International Grandmaster, who has been promoting chess
                education in Africa and other parts of the world. He believes
                that chess can help children improve their academic performance,
                self-esteem, and social skills. He has been leading a program
                that brings three Grandmasters to Africa to provide structured
                chess training to local trainers and children.
              </p>
              <img
                src="https://media.licdn.com/dms/image/C4D03AQGVq0JlRthu2Q/profile-displayphoto-shrink_800_800/0/1601831577766?e=2147483647&v=beta&t=0HfV8qKCigqYqx1ZQ9kmRqE04cectLAFHg_sa0oiK6k"
                className="rounded-md"
                width={250}
              />
            </div>
            <div className="flex items-center lg:flex-nowrap justify-center flex-wrap gap-3">
              <p className="first-letter:ml-10">
                A third example is Garry Kasparov, one of the greatest chess
                players of all time, who has used his fame and influence to
                advocate for human rights, democracy, and freedom. He has been a
                vocal critic of Vladimir Putin and his authoritarian regime, and
                has founded several organizations that support civil society and
                political reform in Russia and other countries. He has also
                created a non-profit foundation that teaches chess to kids of
                all ages, backgrounds, and genders .
              </p>
              <img
                src="data:image/jpeg;base64,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"
                className="rounded-md"
                width={300}
              />
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
