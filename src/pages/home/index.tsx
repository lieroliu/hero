import { useCallback } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components";
import { useGetHeros } from "../../hooks";
import { HOME } from "../../paths";
import {
  ContainerStyled,
  ItemWrapperStyled,
  NavigationContainerStyled,
} from "./styles";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const { data: heros } = useGetHeros();
  const handleTabChange = useCallback(
    (id: string) => {
      navigate(`/${HOME}/${id}`);
    },
    [navigate]
  );

  return (
    <ContainerStyled>
      <NavigationContainerStyled elevation={3}>
        {heros &&
          heros.map((item) => (
            <ItemWrapperStyled
              key={item.id}
              $isActive={heroId === item.id || !heroId}
              onClick={() => handleTabChange(item.id)}
            >
              <Card label={item.name} img={item.image} />
            </ItemWrapperStyled>
          ))}
      </NavigationContainerStyled>
      <Outlet />
    </ContainerStyled>
  );
};
