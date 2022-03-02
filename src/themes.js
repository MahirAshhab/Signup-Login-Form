import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#eaf4fc",
    fontColor: "000",
    button: "#60a5fa",
    formBody: "#fff",
    border: "2px solid #fff",
    boxShadow: "0 0 10px #bdbcc4",
    inputBG: "#D7E8FD",
    inputBorder: "2px solid #D7E8FD",
    signUpBG: "#60a5fa",
    signUpBorder: "2px solid #60a5fa",
    signUpHoverBG: "#30527D",
    signUpHoverBorder: "2px solid #30527D",
    inputFocus: "2px solid #B0D2FD !important",
    inputFocusVis: "none",
    hrefColor: "#60a5fa",
    hrefColorHover: "#30527D",
};

export const darkTheme = {
    body: "#1F2937",
    fontColor: "#fff",
    button: "#eaf4fc",
    formBody: "#111827",
    border: "2px solid #374151",
    boxShadow: "0 0 10px #000",
    inputBG: "#334155",
    inputBorder: "2px solid #334155",
    signUpBG: "#334155",
    signUpBorder: "2px solid #334155",
    signUpHoverBG: "#5C6777",
    signUpHoverBorder: "2px solid #5C6777",
    inputFocus: "2px solid #5F6774 !important",
    inputFocusVis: "none",
    hrefColor: "#5C6777",
    hrefColorHover: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}

    .dark-light-toggle{
        background-color: ${(props) => props.theme.button};
    }
    
    .form-container-2{
        background-color: ${(props) => props.theme.formBody};
        border: ${(props) => props.theme.border};
        box-shadow: ${(props) => props.theme.boxShadow};
    }
    
    input{
        border: ${(props) => props.theme.inputBorder};
        background-color: ${(props) => props.theme.inputBG};
        color: ${(props) => props.theme.fontColor};
    }

    .sign-up{
        background-color: ${(props) => props.theme.signUpBG};
        border: ${(props) => props.theme.signUpBorder};
    }

    .sign-up:hover{
        background-color: ${(props) => props.theme.signUpHoverBG};
        border: ${(props) => props.theme.signUpHoverBorder};
    }

    input:focus{
        border: ${(props) => props.theme.inputFocus};
    }
    
    input:focus-visible {
        outline: ${(props) => props.theme.inputFocusVis};
    }

    .sign-up-bottom-text a{
        color: ${(props) => props.theme.hrefColor};
    }

    .sign-up-bottom-text a:hover{
        color: ${(props) => props.theme.hrefColorHover};
    }
`;