import Aside from '../../layout/aside';
import Main from '../../layout/main';

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
