export const BoundingBox = () => {
	return (
		<div className='absolute inset-0 top-[20.125rem] w-full'>
			<div className='relative h-[13.6606875rem] w-full border border-dashed border-[#0cf5ff]'>
				<span className='absolute -top-[0.3125rem] -left-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -right-[0.3125rem] -bottom-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -top-[0.3125rem] -right-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute -bottom-[0.3125rem] -left-[0.3125rem] size-2 rounded-full border border-[#0cf5ff] bg-[#f5f5f7]' />
				<span className='absolute top-1/2 -left-[0.3125rem] size-2 -translate-y-1/2 border border-[#585858] bg-white' />
				<span className='absolute top-1/2 -right-[0.3125rem] size-2 -translate-y-1/2 border border-[#585858] bg-white' />
			</div>
		</div>
	);
};
