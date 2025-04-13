import { SVGAttributes } from 'react';

const EditorIcon = (props: SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			fill='none'
			height='24'
			viewBox='0 0 24 24'
			width='24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect
				fill='#5641F3'
				height='16'
				opacity='0.4'
				rx='2'
				width='20'
				x='2'
				y='4'
			/>
			<path
				d='M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V8H2V6Z'
				fill='#5641F3'
				opacity='0.8'
			/>
		</svg>
	);
};

export default EditorIcon;
