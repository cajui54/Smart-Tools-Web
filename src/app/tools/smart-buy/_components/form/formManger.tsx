import React, { FormEvent } from 'react';
import styles from './styles.module.scss';
import { FaToolbox } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { TiPlusOutline } from 'react-icons/ti';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeForm,
  addItem,
  cartItems,
} from '@/redux/slices/smartBuy/smartBuySlice';
import { initialState } from '@/redux/slices/smartBuy/smartBuySlice';
import { useForm } from 'react-hook-form';
import ErrorMessage from '@/app/_components/messages/errorMessage';
import ListItems from '../listItems';
import { RootState } from '@/redux/store';

interface IFormManager {
  item: string;
  price: number;
  amount: number;
}

const FormManager = () => {
  const { items } = useSelector((state: RootState) => state.smartBuy);
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm<IFormManager>();

  const dispatch = useDispatch();
  const handleCloseForm = () => {
    dispatch(closeForm(initialState));
  };
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(handleClickSubmit)();
  };
  const resetAllFields = () => {
    resetField('item');
    resetField('price');
    setValue('amount', 1);
  };

  const handleClickSubmit = (data: IFormManager) => {
    dispatch(addItem(data));
    dispatch(cartItems(data));
    resetAllFields();
  };
  return (
    <div>
      <form
        className={`${styles.form} ${styles.formManager}`}
        onSubmit={handleOnSubmit}
      >
        <button
          className="btnClose"
          title="fechar formulário"
          onClick={handleCloseForm}
        >
          <IoIosCloseCircleOutline />
        </button>
        <label>
          <span>Produto: </span>
          <FaToolbox />

          <input
            type="text"
            {...register('item')}
            placeholder="nome do produto"
          />
        </label>

        <div className={styles.amountInputs}>
          <label>
            <span>Valor: </span>
            <GiMoneyStack />

            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="R$:9,99"
              step="0.010"
              min={0}
            />
          </label>

          <label>
            <span>Quantidade: </span>
            <TiPlusOutline />

            <input
              type="number"
              {...register('amount', { required: true, value: 1 })}
              placeholder="0"
              min={1}
            />
          </label>
        </div>
        {Object.keys(errors).length > 0 && (
          <ErrorMessage message="Preencha os campos obrigatórios !" />
        )}
        <div className={styles.containerButtonsII}>
          <button type="submit">Adicionar</button>
          <button type="reset">Cancelar</button>
        </div>
      </form>
      {items.length > 0 && <ListItems />}
    </div>
  );
};

export default FormManager;
