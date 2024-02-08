import Quote from '../quote/Quote';
import Status from '../status/Status';
import Text from '../text/Text';
import { StyledAvatar, StyledCard, StyledHeader, StyledName } from './styles';

const Card = props => {
	return (
		<StyledCard background={props.background}>
			<StyledHeader>
				<StyledAvatar src={props.avatar} />
				<div>
					<StyledName color={props.mainColor}>{props.name}</StyledName>
					<Status status={props.status} color={props.secondColor} />
				</div>
			</StyledHeader>

			<Quote quote={props.quote} color={props.mainColor} />
			<Text text={props.text} color={props.secondColor} />
		</StyledCard>
	);
};

export default Card;
