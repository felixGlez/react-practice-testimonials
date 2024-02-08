import { StyledText } from './styles';

const Text = props => {
	return <StyledText color={props.color}>{props.text}</StyledText>;
};

export default Text;
