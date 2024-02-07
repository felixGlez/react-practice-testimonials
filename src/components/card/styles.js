import styled from 'styled-components';

const StyledCard = styled.div`
	width: 90%;
	background-color: ${props => props.background};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		max-width: 500px;
	}
`;

export { StyledCard };
