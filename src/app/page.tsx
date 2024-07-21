import FormConvertText from './components/form';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <FormConvertText />
    </main>
  );
}
