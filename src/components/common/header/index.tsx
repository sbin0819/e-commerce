/* eslint-disable react-hooks/rules-of-hooks */
import Header from './Header';
import SMHeader from './SMHeader';
import useWindowSize from '../../../hooks/useWindowSize';

const index = () => {
  const { width }: { width: any } = useWindowSize();

  return <>{width > 640 ? <Header /> : <SMHeader />}</>;
};

export default index;
