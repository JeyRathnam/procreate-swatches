import styled from "styled-components";
import { useAuth } from "../../Contexts/Auth";
import SignIn from "./Header/Auth/SignIn";
import SignOut from "./Header/Auth/Signout";
import Logo from "./Header/Logo";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9c19e0;
  height: 48px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: #f1f5f9;
  width: 60vw;
  margin: 0;
`;

const StyledMenuItemContainer = styled.div`
  flex-grow: 3;
`;

const StyledAuthContainer = styled.div``;

const StyledAuthButton = styled.button`
  decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: white;

  font-weight: 600;
  height: 2.5rem;
  min-width: 2.5rem;
  font-size: 14px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 2px solid transparent;
  border-radius: 0.375rem;

  &:hover {
    background: #000d6b;
  }
`;

export default function Header() {
  const { user } = useAuth();

  return (
    <StyledHeader>
      <StyledDiv>
        <Logo />
        <StyledMenuItemContainer />
        <StyledAuthContainer>
          {user ? (
            <p>
              {user.email} <SignOut />
            </p>
          ) : (
            <>
              <SignIn />
              <StyledAuthButton>Signup</StyledAuthButton>
            </>
          )}
        </StyledAuthContainer>
      </StyledDiv>
    </StyledHeader>
  );
}
