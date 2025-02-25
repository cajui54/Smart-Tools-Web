import React from 'react';
import styles from './styles.module.scss';
import TitlesComponent from '@/app/_components/titles';
import { GiBarbecue } from 'react-icons/gi';
import ScreenManager from './_components/screen-manger';
import FormAddPeople from './_components/forms/form-add-people';

const titleData = {
  svg: GiBarbecue,
  title: 'Churras',
  subtitle: 'Justo',
  description: 'Divida as despesas do churrasco entre amigos!',
};

const DivideForUsPage = () => {
  return (
    <div className={styles.mainPage}>
      <TitlesComponent {...titleData} />
      <ScreenManager />
      <FormAddPeople />
    </div>
  );
};

export default DivideForUsPage;
