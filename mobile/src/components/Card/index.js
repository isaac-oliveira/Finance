import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
	Container,
	Top,
	Bank,
	IconButton,
	Img,
	Center,
	CardInfoContainer,
	CardNumber,
	CardExpire,
	Chip,
	Bottom,
	CountInfoContainer,
	Column,
	CountText,
	Name,
} from './styles';

import {
	formatCardNumber,
	formatCardExpire,
	formatCountNumber,
} from '../../utils';

import visa from '../../assets/icons/ic-visa.png';

const Card = ({ name, number, expire, agency, account }) => {
	const [show, setShow] = useState(false);

	function handleShowInfo() {
		setShow(!show);
	}

	return (
		<Container>
			<Top>
				<Bank>Banco</Bank>
				<IconButton onPress={handleShowInfo}>
					<Icon name={show ? 'eye-off' : 'eye'} color="#fff" size={32} />
				</IconButton>
			</Top>
			<Center>
				<Column>
					<CardInfoContainer>
						<CardNumber>
							{show
								? formatCardNumber(number)
								: '- - - -  - - - -  - - - -  - - - -'}
						</CardNumber>
						<CardExpire>
							{show ? formatCardExpire(expire) : '- - / - - - -'}
						</CardExpire>
					</CardInfoContainer>
				</Column>
				<Chip />
			</Center>
			<Bottom>
				<Column>
					<CountInfoContainer>
						<Column>
							<CountText>Ag.</CountText>
							<CountText>{show ? agency : '- - - -'}</CountText>
						</Column>
						<Column>
							<CountText>Conta</CountText>
							<CountText>
								{show ? formatCountNumber(account) : '- - - - - - -  -  -'}
							</CountText>
						</Column>
					</CountInfoContainer>
					<Name>{show ? name : '- - - - - - - - - - - - - -'}</Name>
				</Column>
				<Img source={visa} resizeMode="contain" />
			</Bottom>
		</Container>
	);
};

export default Card;
