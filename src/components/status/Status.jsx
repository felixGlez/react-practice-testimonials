import { StyledStatus } from './styles';

const Status = props => {
	return <StyledStatus color={props.color}>{props.status}</StyledStatus>;
};

export default Status;
