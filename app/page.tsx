import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-10 py-4 gap-10">
      <h1 className="text-center md:w-[40rem]">
        Olá, me chamo Jefferson. Eu sou Software Developer com 4 anos de
        experiência. Eu amo criar sites. Meu foco é React (Next.js) e Node.
      </h1>

      <div className="nes-container with-title is-centered bg-blue-200 md:w-[45rem]">
        <p className="title">Bem vindo!</p>

        <p>
          Após ter me formado em Administração, Eu decidir seguir minha carreira
          em programação. Então fiz um curso de ads, e estudei por diversos
          cursos e me apaixonei por full-stack web development. A minha parte
          favorita de programar é resolver algum tipo de problema eu amo a
          sensação de ter resolvido e ver todo o esforço valendo a pena. Minhas
          stacks favoritas são React, Next.js, Node.js e todos os seus
          ecossistemas. Também tenho familiaridade em utilizar TypeScript,
          Prisma, jest e um pouco de python. Nesse momento eu estou trabalhando
          na Globo como Software Developer Quando não estou codando, eu estou
          sempre com minha namorada, faço musculação, assisto filmes e jogo
          valorant. Eu amo estudar novas tecnologias e aprimorando as que já
          conheço. No momento eu estou criando projetos pessoais. E pretendo um
          dia começar a tocar algum instrumento musical haha.
        </p>
      </div>

      <div className="nes-container is-rounded bg-white">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={100}
            height={100}
            src={"/axe-and-shield.webp"}
            alt="escudo e um machado"
          />
        </div>
        <p className="text-center">Minhas skills</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <p className="nes-badge">
            <span className="is-dark">Next.js</span>
          </p>

          <p className="nes-badge">
            <span className="is-error">Tailwind</span>
          </p>

          <p className="nes-badge">
            <span className="is-primary">Typescript</span>
          </p>

          <p className="nes-badge">
            <span className="is-warning">Javascript</span>
          </p>

          <p className="nes-badge">
            <span className="is-success">Node</span>
          </p>

          <p className="nes-badge">
            <span className="is-warning">Nest.js</span>
          </p>
        </div>
      </div>
    </main>
  );
}
