import { Link, Outlet } from 'react-router-dom';
import Png from '@/assets/image.png';
import Svg from '@/assets/icon.svg';

import * as classes from './App.module.scss';

export default function App() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <Link to="/about">Go to About Page</Link>
      <Link to="/contact">Go to Contact Page</Link>
      <button className={classes.buttonContainer}>
        Жень, всё будет, главное верь и делай!
      </button>
      <h1>Platform: {__PLATFORM__}</h1>
      <h1>Hello, Webpack with TypeScript and React!</h1>
      <div>
        <img src={Png} alt="Phg" />
      </div>
      <Svg />
      <Outlet />
    </div>
  );
}
