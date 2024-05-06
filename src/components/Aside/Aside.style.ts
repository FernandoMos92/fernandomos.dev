import { Box, styled } from "@mui/material";

const AsideContainer = styled(Box)`
    display: flex;
    background-color: #d5d1d1df; 
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 15px;
    width: 8vw;

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .options-container {
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: 10px;
    }
`;

export {
    AsideContainer
}