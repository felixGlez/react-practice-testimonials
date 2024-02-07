import { v4 } from 'uuid';
import Card from './components/card/Card';
import { CARDS_INFO } from './constants/cards';

const App = () => {
	return (
		<>
			{CARDS_INFO.map(card => (
				<Card
					key={v4()}
					avatar={card.avatar}
					name={card.name}
					status={card.status}
					quote={card.quote}
					text={card.text}
					background={card.background}
				/>
			))}
		</>
	);
};

export default App;
