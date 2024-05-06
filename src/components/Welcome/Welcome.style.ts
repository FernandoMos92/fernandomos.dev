import { Box, styled } from "@mui/material";

const WelcomeContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: 80vh;
    padding: 20px;
    gap: 40px;

    .warning-alert {
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 10px;
        z-index: 1000;
    }

    .content-contianer {
        width: 40%;

        .text-about-me {
            display: 'flex'; 
            flex-direction: 'column'; 
            gap: '5px';
        }
    }

    .image-container {
        width: 20%;
        display: flex; 
        justify-content: center;
    }
`;

export {
    WelcomeContainer
}