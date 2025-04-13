import { SVGAttributes } from 'react';

const MediaManagerIcon = (props: SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			className='droip-s4142-dp6yejrs'
			data-droip='dpm7j0lb'
			fill='none'
			height='16'
			viewBox='0 0 20 16'
			width='20'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M0 2C0 0.895431 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.895431 16 0 15.1046 0 14V2Z'
				fill='#5641F3'
				opacity='0.4'
			/>
			<path
				d='M1.41263e-05 12L7 5L11 9L13 7L20 14.0002C20 15.1047 19.1046 16.0002 18 16.0002H2C0.895432 16.0002 0 15.1047 0 14.0002L1.41263e-05 12Z'
				fill='#5641F3'
				opacity='0.8'
			/>
			<circle cx='16' cy='4' fill='#5641F3' opacity='0.8' r='2' />
		</svg>
	);
};

export default MediaManagerIcon;
