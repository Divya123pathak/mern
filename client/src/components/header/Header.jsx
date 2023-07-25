import { AppBar, Toolbar,Box,Typography,styled, IconButton,Drawer,List,ListItem} from '@mui/material';
import { useState } from 'react';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component= styled(Link)`
margin-left: 12%;
line-height: 0;
color: #FFFFFF;
text-decoration: none;
`;
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic
    `;
    const Plusimage=styled('img')({
        width: 10,
        height: 10,
        marginLeft: 4
       
    }
        
    )
    const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }));

const Header = ()  =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }


    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );




    return(
<StyledHeader>
    <Toolbar>
        <MenuButton   color="inherit"
                    onClick={handleOpen}>
<Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

    <Component to='/'>
<img src={logoURL} alt="logo" style={{ width: 75 }} />
<Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <Plusimage src={subURL}  alt="logo not"/>
</Box>
    </Component>
 <Search />
 <CustomButtonWrapper>
<CustomButtons />
 </CustomButtonWrapper>
    </Toolbar>
</StyledHeader>
    );
}
export default Header;