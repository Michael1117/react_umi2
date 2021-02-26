import ErrorBoundary from '../components/ErrorBoundary';
import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

export default BasicLayout;
