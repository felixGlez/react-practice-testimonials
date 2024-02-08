import styled from 'styled-components';

const StyledCard = styled.div`
	width: 95%;
	background-color: ${props => props.background};
	padding: 35px;
	margin-bottom: 20px;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		max-width: 500px;
	}
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const StyledName = styled.h3`
	font-size: 1rem;
	color: ${props => props.color};
	margin: 0px 0px 5px 0px;
`;

const StyledAvatar = styled.img`
	width: 3rem;
	border-radius: 30px;
`;

export { StyledCard, StyledHeader, StyledName, StyledAvatar };
