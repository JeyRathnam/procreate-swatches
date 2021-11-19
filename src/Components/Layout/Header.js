import styled from "styled-components";

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
  width: 50vw;
  margin: 0;
`;

const StyledSvg = styled.svg`
  width: 28px;
  height: 28px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledSvg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
            clip-rule="evenodd"
          ></path>
        </StyledSvg>
      </StyledDiv>
    </StyledHeader>
  );
}
