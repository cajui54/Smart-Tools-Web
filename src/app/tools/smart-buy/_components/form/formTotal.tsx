'use client';
import React, { FormEvent } from 'react';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { MdAttachMoney, MdClear } from 'react-icons/md';
import { IFormTotal } from '@/interfaces/forms';
import { useDispatch } from 'react-redux';
import { addValueTotal } from '@/redux/slices/smartBuy/smartBuySlice';
const FormTotal = () => {
  const dispatch = useDispatch();
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormTotal>();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const onClickSubmit = ({ valueTotal }: IFormTotal) => {
    const value =
      typeof valueTotal === 'string' ? parseFloat(valueTotal) : valueTotal;

    dispatch(addValueTotal(value));
    resetField('valueTotal');
  };

  return (
    <form className={`${styles.form} ${styles.formTotal}`} onSubmit={onSubmit}>
      <div className={styles.containerInput}>
        <label>
          <span>Valor para gastar:</span>
          <FaMoneyBill1Wave />
          <input
            type="number"
            {...register('valueTotal', { required: true })}
            placeholder="R$:1.000,00"
          />
        </label>

        <div className={styles.containerButton}>
          <button type="submit" onClick={handleSubmit(onClickSubmit)}>
            <MdAttachMoney />
          </button>
          <button type="reset">
            <MdClear />
          </button>
        </div>
      </div>

      {errors.valueTotal?.type === 'required' && (
        <p className={'errorMessageInput'}>Informe o valor que deseja gastar</p>
      )}
    </form>
  );
};

export default FormTotal;
