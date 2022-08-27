import Aside from '../aside';
import Main from '../main';

import style from './style.module.scss';

const App = () => {
  return (
    <div className={style.app}>
      <Aside />
      <Main />
    </div>
  );
};

export default App;
