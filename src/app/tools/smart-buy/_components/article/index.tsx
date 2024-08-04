import React from 'react';
import styles from '../../../../page.module.scss';
import { BsCart4 } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
const ArticleSmartBuy = () => {
  return (
    <article className={styles.articleGlobal}>
      <section>
        <h2>
          <BsCart4 />
          Smart Buy
        </h2>
        <p>
          <span>Smart Buy</span> é uma calculadora para gerenciar seus gastos,
          mantendo os valores estipulados sob controle, gaste apenas o valor que
          foi definido, Smart Buy é uma ótima ferramenta para monitorar seus
          gastos e ajudar você à economizar nas suas compras, calculando cada
          valor de cada item adicionado!
        </p>
      </section>

      <section>
        <h2>
          <VscGraph />
          Mindset
        </h2>

        <p>
          Adotar um mindset voltado para economizar é essencial para alcançar
          suas metas financeiras e ter maior controle sobre suas finanças. Aqui
          estão algumas abordagens e mentalidades que podem ajudar a desenvolver
          esse mindset:
        </p>

        <ol className={styles.listArticle}>
          <li>
            <h3>Defina Objetivos Claros</h3>
            <p>
              <span>Curto, Médio e Longo Prazo: </span>
              Tenha metas financeiras específicas para cada período, como poupar
              para uma viagem, comprar um carro ou garantir uma aposentadoria
              confortável.
            </p>
          </li>

          <li>
            <h3>Eduque-se Financeiramente</h3>
            <p>
              <span>Aprenda sobre Finanças Pessoais: </span>
              Leia livros, assista vídeos e participe de workshops sobre
              educação financeira.
            </p>

            <p>
              <span>Conheça Seus Números:</span>
              Entenda suas receitas, despesas e saiba quanto você precisa
              economizar para atingir seus objetivos.
            </p>
          </li>

          <li>
            <h3>Desenvolva a Disciplina</h3>
            <p>
              <span>Consistência é Chave: </span>
              Faça da economia um hábito regular, não apenas uma atividade
              ocasional.
            </p>

            <p>
              <span>Resista a Impulsos:</span>
              esperando alguns dias antes de decidir se realmente precisa de
              algo.
            </p>
          </li>

          <li>
            <h3>Valorize o Custo-benefício</h3>
            <p>
              <span>Qualidade sobre Quantidade: </span>
              Invista em produtos e serviços que oferecem melhor durabilidade e
              valor, mesmo que o custo inicial seja maior.
            </p>

            <p>
              <span>Avalie Necessidades versus Desejos:</span>
              Pergunte-se se um item é uma necessidade ou apenas um desejo
              momentâneo.
            </p>
          </li>

          <li>
            <h3>Foque em Resultados a Longo Prazo</h3>
            <p>
              <span>Compreenda o Poder dos Juros Compostos: </span>
              Pequenas economias podem crescer significativamente ao longo do
              tempo quando investidas corretamente.
            </p>

            <p>
              <span>Tenha Paciência:</span>
              Lembre-se de que construir riqueza é um processo que leva tempo e
              esforço.
            </p>
          </li>

          <li>
            <h3>Crie um Sistema de Recompensas</h3>
            <p>
              <span>Recompense-se de Forma Inteligente: </span>
              Ao atingir uma meta de economia, celebre com algo que não
              comprometa suas finanças.
            </p>

            <p>
              <span>Reconheça Suas Conquistas:</span>
              Valorize cada passo dado em direção aos seus objetivos
              financeiros.
            </p>
          </li>
        </ol>

        <p>
          Cultivar um mindset de economia não é apenas sobre reduzir despesas,
          mas também sobre construir uma mentalidade de crescimento,
          planejamento e responsabilidade financeira. Com o tempo, essas
          práticas se tornarão parte natural de sua rotina, levando a uma vida
          financeira mais saudável e sustentável.
        </p>
      </section>
    </article>
  );
};

export default ArticleSmartBuy;
