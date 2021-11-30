import Menu from './Menu';
import { TopBar } from './TopBar';

export const Header = () => {
  return (
    <div className='header'>
      <TopBar />
      <Menu />
    </div>
  );
};
