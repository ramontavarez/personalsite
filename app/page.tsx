import { Avatar, AvatarImage } from "../components/ui/avatar";
import Game from "./game/Game";
import { shuffle } from "./game/utils";
import { cards as cardsData } from './game/data/cards';

export default function Home() {
  const cards = shuffle([...cardsData, ...cardsData])
  return (
    <main>
      <div className="flex container mx-auto p-24 text-gray-800 max-w-screen-lg">
        <aside className="flex flex-col gap-4 items-center min-w-40 mr-16">
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://avatars.githubusercontent.com/u/10215019?v=4" className="h-32 w-32" />
          </Avatar>

          <div className="text-center">
            <h1 className="font-bold text-lg">Ramon Tavares</h1>
            <span className="text-sm">Desenvolvedor Fullstack</span>
          </div>

          <div className="flex gap-2  rounded-sm p-2 ">
            <a target="_blank" href="https://www.linkedin.com/in/ramonmtavares/">
              <img src="/linkedin.png" />
            </a>
            <a target="_blank" href="https://github.com/ramontavarez">
              <img src="/github.png" />
            </a>
            <a target="_blank" href="https://www.psinetwork.com.br/">
              <img src="/psinetwork.png" />
            </a>
          </div>
        </aside>
        <div className="flex flex-col gap-4 text-sm">
          <p>Desenvolvedor fullstack há 9 anos, comecei minha carreira fazendo websites pra bandas e comercios locais, evoluindo pra alguns sistemas simples com PHP, MySQL, HTML, CSS e JS.</p>
          <p>Minha primeira experiência em uma empresa foi na <a href="https://www.linkedin.com/company/piloti/" className="font-bold hover:underline" target="_blank">Piloti Mobile & Internet</a>, onde desenvolvi vários projetos criativos que iam desde sites institucionais até uma rede social de filmes e sistemas EAD. Depois disso, tive uma longa jornada na <a href="https://www.linkedin.com/company/linxretail/" className="font-bold hover:underline" target="_blank">Linx</a>, atuando no setor de ADS onde desenvolvia e mantinha um sistema inovador de vitrine nativa para anunciantes dentro dos
            marketplaces mais famosos do Brasil (ex: Magazine Luiza, Casas Bahia etc).</p>
          <p>Sou do Rio de Janeiro e atualmente moro em São Paulo, sou apaixonado por música e toco alguns instrumentos. Nas horas vagas gosto de me desafiar a criar alguns jogos com as tecnologias que mais uso.</p>
        </div>
      </div>

      <Game cards={cards} />
    </main>
  );
}
