'use client';
import React, { FormEvent, useState } from 'react';
import styleForm from './form.module.scss';
import { SiConvertio } from 'react-icons/si';
import { useForm } from 'react-hook-form';
import { MdCleaningServices } from 'react-icons/md';

interface ITextArea {
  textarea: string;
}
const FormConvertText = () => {
  const {
    register,
    setValue,
    resetField,
    handleSubmit,
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
  const handleFirstCase = ({ textarea }: ITextArea) => {
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

  return (
    <div className={styleForm.containerForm}>
      <h2>
        <SiConvertio />
        <span>Converta seu Texto</span>
      </h2>
      <form onSubmit={onSubmit}>
        <div className={styleForm.containerMenu}>
          <button onClick={handleResetField}>
            <MdCleaningServices />
            <span>reset</span>
          </button>
        </div>
        <div className={styleForm.areaetextContainer}>
          <button onClick={handleSubmit(handleCopy)}>{copy}</button>
          <textarea
            {...register('textarea', { required: true })}
            placeholder="Digite seu text aqui..."
          ></textarea>
        </div>

        {errors.textarea?.type === 'required' && (
          <p className="errorMessage">Preencha o campo obrigatório</p>
        )}

        <div className={styleForm.buttonsContainer}>
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
            onClick={handleSubmit(handleFirstCase)}
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
