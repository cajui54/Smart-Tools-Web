import React from 'react';
import styleMain from '../../page.module.scss';
import { SiConvertio } from 'react-icons/si';
import { TfiUppercase } from 'react-icons/tfi';
import { RxLetterCaseLowercase, RxLetterCaseCapitalize } from 'react-icons/rx';
const ArticleConvertText = () => {
  return (
    <article className={styleMain.articleGlobal}>
      <section>
        <div className={styleMain.containerTitle}>
          <SiConvertio />
          <h1>Smart Case Text</h1>
        </div>
        <p>
          <strong>Smart Case Text</strong>é uma ferramenta web para converter
          textos em letras
          <strong>Maiúsculas</strong>, <strong>Minúscula</strong> e todas as
          primeiras letras de cadas palavra <strong>Maiúscula</strong>
          converta seus textos para Mercado Livre, YouTube, entre outros
          serviços
        </p>
      </section>

      <section>
        <div className={styleMain.containerTitle}>
          <TfiUppercase />
          <h1>Upper Case Text</h1>
        </div>
        <p>
          <strong>Upper Case Text</strong>
          converte todas as letras em maiúsculas, dar um destaque maior em
          títulos para redes sociais, e-comerce, youtube, IFood, Mercado Livre
          etc...
        </p>
      </section>

      <section>
        <div className={styleMain.containerTitle}>
          <RxLetterCaseLowercase />
          <h1>Lower Case Text</h1>
        </div>
        <p>
          <strong>Lower Case Text</strong>
          converte todas as letras em minúsculas, conversão ótima para
          paragrafos e descrição de textos
        </p>
      </section>

      <section>
        <div className={styleMain.containerTitle}>
          <RxLetterCaseCapitalize />
          <h1>Capitalizer Case Text</h1>
        </div>
        <p>
          <strong>Capitalizer Case Text</strong>
          converte todas as primeiras letras em maiúsculas de cada palavras...
        </p>
      </section>
    </article>
  );
};

export default ArticleConvertText;
