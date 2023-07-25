

import { Typography,Box,styled, TableRow, TableCell ,TableBody,Table} from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border:none;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;

`;



const ProductDetail =({product}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
       <>

<Typography>{product.title.longTitle}</Typography>
    <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} alt="not found" /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography>Available Offers</Typography>
                        <SmallText>
                            <Typography><StyledBadge />Get extra 20% off</Typography>
                            <Typography><StyledBadge />get Extra exclusive discount 30% off</Typography>
                            <Typography><StyledBadge />Sign up for flipkart and pay low amouunt</Typography>
                            <Typography><StyledBadge />Buy 2 imtens for 5% discount</Typography>
                            <Typography><StyledBadge />5% cashback at low amount</Typography>
                            <Typography><StyledBadge />No cost on EMI at 6000 rupeess with low amount</Typography>
                        </SmallText>
                        <Table>
                            <TableBody>
                                <ColumnText>
                                    <TableCell style={{ color: '#878787' }}>Delivery </TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{ color: '#878787' }}>Warranty </TableCell>
                                    <TableCell >No Warranty</TableCell>
                                </ColumnText>
                                <ColumnText>
                                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                                    <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                                </ColumnText>
                                <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="Flipkart Points" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                            </TableBody>
                        </Table>
       </>
    )
}

export default ProductDetail;