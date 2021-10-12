import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.div`
	width: 30px;
	height: 30px;
	background: transparent;
	border: 2px solid white;
	border-right: 3px solid black;
	border-radius: 50%;

	animation: ${rotate360} 1s linear infinite;
`
