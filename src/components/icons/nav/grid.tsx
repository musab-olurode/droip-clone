import { SVGAttributes } from 'react';

const GridIcon = (props: SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			fill='none'
			height='20'
			viewBox='0 0 20 20'
			width='20'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect fill='#5641F3' height='11' opacity='0.4' rx='2' width='9' x='11' />
			<rect
				fill='#5641F3'
				height='7'
				opacity='0.6'
				rx='2'
				width='9'
				x='11'
				y='13'
			/>
			<rect
				fill='#5641F3'
				height='11'
				opacity='0.6'
				rx='2'
				transform='rotate(180 9 20)'
				width='9'
				x='9'
				y='20'
			/>
			<rect
				fill='#5641F3'
				height='7'
				opacity='0.8'
				rx='2'
				transform='rotate(180 9 7)'
				width='9'
				x='9'
				y='7'
			/>
		</svg>
	);
};

export default GridIcon;
