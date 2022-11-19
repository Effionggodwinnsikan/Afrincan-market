import React,{ReactNode} from 'react'
import Restaurantstab from '../../components/tabs/RestaurantsTab';
import RootLayout from '../../layout/RootLayout';

const Stores = () => {
  return (
    <div>Stores</div>
  )
}

Stores.getLayout = function getLayout(page: ReactNode) {
  return (
    <RootLayout>
      <Restaurantstab>{page}</Restaurantstab>
    </RootLayout>
  );
};

export default Stores