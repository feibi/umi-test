import styles from './index.css';
import { withRouter } from 'dva/router';
import { Fragment } from 'react';

function BasicLayout(props) {
  return (
    <Fragment>
      <h1 className={styles.title}>Yay! Welcome to umis!</h1>
      {props.children}
    </Fragment>
  );
}

export default withRouter(BasicLayout);
