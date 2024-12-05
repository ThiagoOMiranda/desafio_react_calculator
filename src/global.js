import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	@font-face {
    	font-family: "LCD";
    	src: url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.eot");
    	src: url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.eot?#iefix")format("embedded-opentype"),
    	url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.woff2")format("woff2"),
    	url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.woff")format("woff"),
    	url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.ttf")format("truetype"),
    	url("https://db.onlinewebfonts.com/t/233131eb5b5e4a930cbdfb07008a09e1.svg#LCD")format("svg");
	}

	*, body {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
	font-size: 16px;
	}
`;

export default GlobalStyle;
