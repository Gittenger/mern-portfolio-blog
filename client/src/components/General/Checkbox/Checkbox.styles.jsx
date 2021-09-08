import styled from 'styled-components'

import { PSmallStyles } from '../../typography/typography.components.js'

export const CheckboxContainer = styled.div`
	${PSmallStyles}
	--scale: .55;

	[type='checkbox']:not(:checked),
	[type='checkbox']:checked {
		position: absolute;
		left: 0;
		opacity: 0.01;
	}

	[type='checkbox']:not(:checked) + label,
	[type='checkbox']:checked + label {
		position: relative;
		padding-left: 2.7rem;
		font-size: 1.05em;
		cursor: pointer;
	}

	[type='checkbox']:not(:checked) + label:before,
	[type='checkbox']:checked + label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.2rem;
		width: 1.4rem;
		height: 1.4rem;
		border: 1px solid #aaa;
		background: var(--grey);
		border-radius: 0.3rem;
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 var(--main);
		-webkit-transition: all 0.275s;
		transition: all 0.275s;
	}

	[type='checkbox']:not(:checked) + label:after,
	[type='checkbox']:checked + label:after {
		content: '■';
		position: absolute;
		top: 9.3px;
		left: 0.8px;
		font-size: 2.6rem;
		font-weight: 600;
		color: var(--blackDark);
		line-height: 0;
		-webkit-transition: all 0.2s;
		transition: all 0.2s;
	}
	[type='checkbox']:not(:checked) + label:after {
		opacity: 0;
		-webkit-transform: scale(0) rotate(10deg);
		transform: scale(0) rotate(10deg);
	}

	[type='checkbox']:checked + label:after {
		opacity: 1;
		-webkit-transform: scale(1) rotate(0);
		transform: scale(1) rotate(0);
	}
`
