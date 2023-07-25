import NavBar from './NavBar';
import Slide from './Slide';
import Banner from './Banner';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';
import {Box,styled} from '@mui/material';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
const Component=styled(Box)`
padding:20px 10px;
background:#F2F2F2;
`;


const Home =() =>{
const {products}=useSelector(state=>state.getProducts);
console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);





    return(
        <>
        
      <NavBar />
      
      <Component>
      <Banner />
      <MidSlide products={products}  title="Deal of the day" timer={true}/>
      <MidSection />
      <Slide products={products}  title="Discount for you" timer={false}/>
      <Slide products={products}  title="Suggesting Items" timer={false}/>
      <Slide products={products}  title="Top items" timer={false}/>
      <Slide products={products}  title="Recoomended Items" timer={false}/>
      <Slide products={products}  title="Trending Offers" timer={false}/>
      <Slide products={products}  title="Season's Top picks" timer={false}/>
      <Slide products={products}  title="Top deals on accessories" timer={false}/>
      </Component>
      </>
    )
}
export default Home;