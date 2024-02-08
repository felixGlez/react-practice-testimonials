import { StyledQuote } from './styles';

const Quote = props => {
	return <StyledQuote color={props.color}>{props.quote}</StyledQuote>;
};

export default Quote;
