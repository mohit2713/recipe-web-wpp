import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./header";
function Searched() {
  const [seachedRecipes, setseachedRecipes] = React.useState([]);
  let params = useParams();
  console.log(params);

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();

    setseachedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  console.log(seachedRecipes);
  return (
    <Flex>
      <div>
        <div>
          <Header />
        </div>
        <div className="flex flex-wrap">
          {seachedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <img src={item.image} alt="" />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </Flex>
  );
}
const Flex = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  img {
    border-radius: 2rem;
    object-fit: cover;
    margin: 10px;
    width: 312px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    padding: 10px;
    text-align: center;
    width: 248px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 10px;
  }
`;

export default Searched;
