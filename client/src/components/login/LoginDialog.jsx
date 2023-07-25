

import {useState,useContext} from 'react';

import {Dialog, TextField,Box, Typography,Button,styled} from '@mui/material';
import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component=styled(Box)`
height:70vh;
width:90vh;
`;



const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
   box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;



const Image=styled(Box)`
background: #2874f0  url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)center 85% no-repeat;
width: 28%;
    height: 83%;
    padding:35px 45px;
    & > p,& >h5{
        color: #FFFFFF;
        font-weight: 600
    }
`;


const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;



const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`




const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`



const accountInitialValues = {
    login: {
        view: 'login',
        heading:'Login',
        subheading:'Get access to our orders,request'
    },
    signup: {
        view: 'signup',
        heading:'Looks like you are new here',
        subheading:'sign up with your mobile number'
        
    }
}



const LoginDialog =({open,setOpen}) =>{
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const {setAccount } =useContext(DataContext);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, setError] = useState(false);

    

    

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }


    const loginUser = async() => {
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status===200)
        {
        handleClose();
        setAccount(response.data.data.firstname);
    }else{

          setError(true);
    }

    }


    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
      setAccount(signup.firstname);
    }
   
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }


    return(
        <Dialog open={open} onClose={handleClose}PaperProps={{ sx: { maxWidth: 'unset' } }}>

<Component>

<Box style={{display: 'flex', height: '100%'}}>
<Image>
<Typography variant="h5">{account.heading}</Typography>
<Typography style={{margintop:20}}>{account.subheading}</Typography>


    </Image>
    {
                        account.view === 'login' ? 
                        <Wrapper>
                            <TextField variant="standard"  onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                       { error&&  <Error>Please enter valid username and password</Error>}
                            <TextField variant="standard"   onChange={(e) => onValueChange(e)} name='password' label='Enter Password'  />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{textAlign:'center'}}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper> : 
                        <Wrapper>
                           
                           <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter firstname' />
                         
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='lastname' />
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='username' />
                         
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='email' />
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='password' />
                         
                         <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='phone' />
                        
                         <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                        </Wrapper>
                    }
    </Box>
</Component>
        </Dialog>
    )
}

export default LoginDialog;