import { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useStore } from "../store";
import Preview from "./PalettePreview/Preview";

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const StyledPalettes = styled.div`
  display: flex;
  width: 60vw;
  gap: 30px;
  flex-wrap: wrap;
`;
export default function MySavedPalettes() {
  const mySavedPalettes = useStore((state) => state.mySavedPalettes);
  const getMyPalettes = useStore((state) => state.getMyPalettes);
  const navigate = useNavigate();

  useEffect(() => {
    getMyPalettes();
  }, [getMyPalettes]);

  return (
    <StyledContainer>
      <StyledPalettes>
        {mySavedPalettes.map((obj) => (
          <Preview
            palettes={obj.palette}
            name={obj.palette_name}
            onClick={() => navigate(`/palette/${obj.id}`)}
          />
        ))}
      </StyledPalettes>
    </StyledContainer>
  );
}
