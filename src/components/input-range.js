import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export const InputRanges = ({ value, setValue }) => {
	return <InputRange step={1000} maxValue={1000000} minValue={10000} value={value} onChange={setValue} />;
};

// class inputRanges extends Component {
// 	state = {
// 		value: { min: 2, max: 10 },
// 	};

// 	render() {
// 		return (
// 			<InputRange
// 				maxValue={20}
// 				minValue={0}
// 				value={this.state.value}
// 				onChange={value => this.setState({ value })}
// 			/>
// 		);
// 	}
// }

// export default inputRanges;
