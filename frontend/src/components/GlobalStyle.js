import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 }

  body{
		background-color: #1b1b1b;
		overflow-x: hidden;
		text-decoration: none;
  }

  button{
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		background: transparent;
		color: yellow;
		border: 3px solid #416CD5;
		transition: all 0.5s ease;

		&:hover{
		 background-color:#23d997;
		 color: #ffff;
		}
	}
	
	h2{
		font-weight: lighter;
		font-size: 4rem;
	}

	h3{
		color: #fff;
	}

	h4{
		font-weight:bold;
		font-size: 1.2rem;
		color: lightgrey;
	}

	a{
		font-size: 1.1rem;
	}
	
	span{
		font-weight: lighter;
		color:#416CD5;
	}

	p{
		padding: 3rem 0rem;
		color: #ccc;
		font-size: 1.4rem;
		line-height: 150px;
	}
	label {
		color: #1b1b1b;
		font-weight: bold;
	}
 `;

 export default GlobalStyle;