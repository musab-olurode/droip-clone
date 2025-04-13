import { SVGAttributes } from 'react';

const GetSupportIcon = (props: SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			fill='none'
			height='24'
			viewBox='0 0 24 24'
			width='24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect fill='#BBB3FA' height='14' rx='2' width='20' x='2' y='5' />
			<path
				d='M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V7.5L12.9638 12.4699C12.3637 12.8 11.6363 12.8 11.0362 12.4699L2 7.5V7Z'
				fill='#7261EF'
			/>
		</svg>
	);
};

export default GetSupportIcon;
