import { SVGAttributes } from 'react';

const DroipBlogsIcon = (props: SVGAttributes<SVGSVGElement>) => {
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
				height='22'
				opacity='0.4'
				rx='2'
				width='19'
				x='2'
				y='1'
			/>
			<rect
				fill='#5641F3'
				height='2'
				opacity='0.8'
				rx='1'
				width='15'
				x='4'
				y='7'
			/>
			<rect
				fill='#5641F3'
				height='2'
				opacity='0.8'
				rx='1'
				width='11'
				x='4'
				y='11'
			/>
			<path
				d='M15 21V19L21.2929 12.7071C21.6834 12.3166 22.3166 12.3166 22.7071 12.7071L23.2929 13.2929C23.6834 13.6834 23.6834 14.3166 23.2929 14.7071L17 21H15Z'
				fill='#7261EF'
			/>
		</svg>
	);
};

export default DroipBlogsIcon;
