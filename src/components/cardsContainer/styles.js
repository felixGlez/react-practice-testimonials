import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		max-width: 1600px;
		margin: auto;
		flex-wrap: wrap;
		gap: 20px;
		align-items: flex-start;
	}
`;

export { StyledContainer };
