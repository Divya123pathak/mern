
import { Box,Button,styled } from "@mui/material";
import { useState } from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';



const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 13px',
  //  border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem =({product}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
        var information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }

    const [quantity, setQuantity] = useState(1);
    const { id } = product;
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
   


    return(



       
        <LeftContainer>
            <Box style={{ padding: '15px 20px',border: '1px solid #f0f0f0', width: '90%'}}>
            <Image src={product.detailUrl}  alt="not present"/>
            </Box>
            <StyledButton onClick={() => addItemToCart()}style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart /> Add to Cart</StyledButton>
            <StyledButton  onClick={() => buyNow()}  style={{background: '#fb641b'}} variant ="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;