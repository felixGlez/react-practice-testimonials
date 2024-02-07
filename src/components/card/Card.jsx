import Avatar from '../avatar/Avatar';
import Name from '../name/Name';
import Quote from '../quote/Quote';
import Status from '../status/Status';
import Text from '../text/Text';
import { StyledCard } from './styles';

const Card = props => {
	return (
		<StyledCard background={props.background}>
			<Avatar img={props.avatar} />
			<Name name={props.name} />
			<Status status={props.status} />

			<Quote quote={props.quote} />
			<Text text={props.text} />
		</StyledCard>
	);
};

export default Card;
