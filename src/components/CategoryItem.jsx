import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: "Amatic SC", cursive;
  font-weight: 900;
  font-size: 60px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 2px 0 #000,
    2px 2px 0 #000;

  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  const history = useHistory();
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>לחצו כאן </Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
