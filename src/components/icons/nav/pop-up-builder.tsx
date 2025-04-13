import { SVGAttributes } from 'react';

const PopUpBuilderIcon = (props: SVGAttributes<SVGSVGElement>) => {
	return (
		<svg
			className='droip-s4142-dp6yejrs'
			data-droip='dpy7l4ql'
			fill='none'
			height='18'
			viewBox='0 0 20 18'
			width='20'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M18 12C18 13.1046 17.1046 14 16 14H2C0.895432 14 0 13.1046 0 12V2C0 0.895431 0.895432 0 2 0H16C17.1046 0 18 0.895431 18 2L18 12Z'
				fill='#5641F3'
				opacity='0.4'
			/>
			<path
				d='M20 16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6L20 16Z'
				fill='#7867F5'
			/>
			<circle cx='17.5' cy='6.5' fill='#DDD9FD' r='1.5' />
		</svg>
	);
};

export default PopUpBuilderIcon;
