import React, {
	forwardRef,
	useState,
	useRef,
	useImperativeHandle,
} from 'react';

import { Container, Icon, Field } from './styles';

const Input = ({ name, defaultValue = '', ...rest }, ref) => {
	const fieldRef = useRef(null);
	const [value, setValue] = useState(defaultValue);

	useImperativeHandle(ref, () => ({
		value,
		focus: () => {
			fieldRef.current.focus();
		},
	}));

	return (
		<Container>
			{name && <Icon name={name} size={20} color="#FFF" />}
			<Field ref={fieldRef} {...rest} value={value} onChangeText={setValue} />
		</Container>
	);
};

export default forwardRef(Input);
