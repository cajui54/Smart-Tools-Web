'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styleForm from './form.module.scss';
import { SiConvertio } from 'react-icons/si';
import { useForm } from 'react-hook-form';
import { MdCleaningServices } from 'react-icons/md';
import { TfiUppercase } from 'react-icons/tfi';
import { RxLetterCaseCapitalize, RxLetterCaseLowercase } from 'react-icons/rx';

interface ITextArea {
  textarea: string;
}
const FormConvertText = () => {
  const {
    register,
    setValue,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ITextArea>({ defaultValues: { textarea: '' } });
  const [copy, setCopy] = useState<string>('copiar');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleCopy = (data: ITextArea) => {
    navigator.clipboard.writeText(data.textarea);
    setCopy('copiado...');
    setTimeout(() => {
      setCopy('copiar');
      console.log('xxx');
    }, 2000);
  };
  const handleUppeCase = ({ textarea }: ITextArea) => {
    const textUppercase = textarea.toUpperCase();
    setValue('textarea', textUppercase);
  };
  const handleLowerCase = ({ textarea }: ITextArea) => {
    const textLowerCase = textarea.toLocaleLowerCase();

    setValue('textarea', textLowerCase);
  };
  const handleCapitalizeCase = ({ textarea }: ITextArea) => {
    const text = textarea
      .split(' ')
      .map(
        (word) =>
          `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
      )
      .join(' ');

    setValue('textarea', text);
  };
  const handleResetField = () => {
    resetField('textarea');
  };
  const decodeWord = (text: string): string => {
    return text
      .split('')
      .map((letter) => {
        switch (letter) {
          case '0':
            return 'a';
          case '/':
            return 'ã';
          case '9':
            return 'A';
          case '8':
            return 'e';
          case '*':
            return 'ê';
          case '♥':
            return 'é';
          case '7':
            return 'E';
          case '6':
            return 'i';
          case '5':
            return 'I';
          case '4':
            return 'o';
          case '3':
            return 'O';
          case '2':
            return 'u';
          case '1':
            return 'U';
          case '+':
            return 'm';
          case '-':
            return 'M';
          default:
            return letter;
        }
      })
      .join('');
  };
  const handleDecode = ({ textarea }: ITextArea) => {
    const textDecoded = decodeWord(textarea);
    setValue('textarea', textDecoded);
  };
  const encodeWord = (text: string): string => {
    return text
      .split('')
      .map((letter) => {
        switch (letter) {
          case 'a':
            return '0';
          case 'ã':
            return '/';
          case 'A':
            return '9';
          case 'e':
            return '8';
          case 'ê':
            return '*';
          case 'é':
            return '♥';
          case 'E':
            return '7';
          case 'i':
            return '6';
          case 'I':
            return '5';
          case 'o':
            return '4';
          case 'O':
            return '3';
          case 'u':
            return '2';
          case 'U':
            return '1';
          case 'm':
            return '+';
          case 'M':
            return '-';
          default:
            return letter;
        }
      })
      .join('');
  };
  const handleEncode = ({ textarea }: ITextArea) => {
    const textEncode = encodeWord(textarea);
    setValue('textarea', textEncode);
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styleForm.containerForm}>
      <form onSubmit={onSubmit}>
        <div className={styleForm.containerMenu}>
          <button onClick={handleResetField}>
            <MdCleaningServices />
            <span>reset</span>
          </button>

          <button onClick={handleSubmit(handleUppeCase)}>
            <TfiUppercase />
            <span>Uppercase</span>
          </button>

          <button onClick={handleSubmit(handleLowerCase)}>
            <RxLetterCaseLowercase />
            <span>Lowecase</span>
          </button>

          <button onClick={handleSubmit(handleCapitalizeCase)}>
            <RxLetterCaseCapitalize />

            <span>Capitalize</span>
          </button>
        </div>
        <div className={styleForm.areaetextContainer}>
          <button onClick={handleSubmit(handleCopy)}>{copy}</button>
          <textarea
            {...register('textarea', { required: true })}
            placeholder="Digite seu text aqui..."
            onChange={handleChange}
          ></textarea>
        </div>

        {errors.textarea?.type === 'required' && (
          <p className="errorMessage">Preencha o campo obrigatório</p>
        )}

        <div className={styleForm.buttonsContainer}>
          <button onClick={handleSubmit(handleEncode)} title="encode text">
            <SiConvertio />
            <div>
              <span>Codificar Texto</span>
              <span>T3XT0</span>
            </div>
          </button>
          <button onClick={handleSubmit(handleDecode)} title="encode text">
            <SiConvertio />
            <div>
              <span>Decodificar Texto</span>
              <span>TEXTO</span>
            </div>
          </button>
          <button
            onClick={handleSubmit(handleUppeCase)}
            title="convert to uppercase text"
          >
            <SiConvertio />
            <div>
              <span>Todas Maiúculas</span>
              <span>TEXTO</span>
            </div>
          </button>

          <button
            onClick={handleSubmit(handleLowerCase)}
            title="convert to lowercase text"
          >
            <SiConvertio />
            <div>
              <span>Todas Minúsculas</span>
              <span>texto</span>
            </div>
          </button>

          <button
            onClick={handleSubmit(handleCapitalizeCase)}
            title="convert to capitalize text"
          >
            <SiConvertio />
            <div>
              <span>Primeira Maiúculas</span>
              <span>Texto</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormConvertText;
