'use client';
import React from 'react';
import styles from './styles.module.scss';
import { FaPeopleGroup } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAmountPeople } from '@/redux/slices/divideForUS/divide-for-us-slice';
interface FormAddPeople {
  amountPeople: number;
}
const FormAddPeople = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormAddPeople>({ defaultValues: { amountPeople: 1 } });

  const handleSubmitForm = (data: FormAddPeople) => {
    dispatch(addAmountPeople(data.amountPeople));
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.mainForm}>
      <div className={styles.containerInput}>
        <label
          className={`${
            errors.amountPeople?.type === 'required' && 'errorInput'
          } ${styles.label}`}
        >
          <span>Quantas pessoas?</span>
          <FaPeopleGroup />
          <input
            {...register('amountPeople', { required: true })}
            type="number"
            className={styles.inputElement}
          />
          <span className={styles.astheristic}>*</span>
          <button disabled={isSubmitting}>+</button>
        </label>
        {errors.amountPeople?.type === 'required' && (
          <p>Este campo é obrigatório!</p>
        )}
      </div>
    </form>
  );
};

export default FormAddPeople;
