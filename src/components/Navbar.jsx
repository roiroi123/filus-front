import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
height:60px;

`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left= styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language=styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchConatiner=styled.div`
border:0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input=styled.input`
border: none;
`
const Center= styled.div`
flex:1;
text-align: center;
`
const Logo=styled.h1`
font-weight: bold;
text-align: center;
cursor: pointer;
`
const Right= styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
font-size:14px;
cursor: pointer;
margin-left: 25px;
`
const Navbar = () => {
    const history =useHistory()
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchConatiner>
                        <Input/>
                        <Search style={{color:'gray',fontSize:16}}/>
                    </SearchConatiner>
                </Left>
                <Center>
                <Logo onClick={()=>history.push("/home")}>Filus.</Logo>

                </Center>
                <Right>
                    <MenuItem onClick={()=>history.push("/register")}>REGISTER</MenuItem>
                    <MenuItem onClick={()=>history.push("/login")}>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge onClick={()=>history.push("/cart")} badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
