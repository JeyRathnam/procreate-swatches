import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const StyledAuthButton = styled.button`
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

export default function SignIn() {
  const navigate = useNavigate();
  const handleLoginClick = useCallback(() => navigate("/login"), [navigate]);

  return (
    <>
      <StyledAuthButton onClick={handleLoginClick}>Login</StyledAuthButton>
    </>
  );
}
