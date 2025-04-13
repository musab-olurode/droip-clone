'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const DesignAndBuild = () => {
	return (
		<section className='container py-32'>
			<h2 className='text-8xl leading-[1.1em] font-medium -tracking-[0.3125rem]'>
				Design and <br />
				build everything
			</h2>
			<div className='flex-start mt-6 mb-24 flex min-h-[5.625rem] gap-x-6'>
				<div className='w-full'>
					<motion.div
						className='h-px w-full [background-image:linear-gradient(90deg,#5641f300_0%,#5641f3_62%,#5641f3_100%)]'
						initial={{
							width: '0%',
						}}
						transition={{
							duration: 1,
							ease: 'easeInOut',
						}}
						viewport={{ once: true }}
						whileInView={{
							width: '100%',
						}}
					/>
					<div className='flex flex-col items-end'>
						<motion.div
							className='bg-primary h-[4.125rem] w-px'
							initial={{
								height: '0',
							}}
							transition={{
								delay: 1,
								duration: 0.7,
								ease: 'easeOut',
							}}
							viewport={{ once: true }}
							whileInView={{
								height: '3rem',
							}}
						/>
						<motion.div
							className='bg-primary relative left-[0.46rem] size-[0.9375rem] rounded-full'
							initial={{
								scale: 0,
								translateY: '-0.3125rem',
							}}
							transition={{
								delay: 1.2,
								duration: 0.5,
								ease: 'linear',
							}}
							viewport={{ once: true }}
							whileInView={{
								scale: 1,
								translateY: '0',
							}}
						/>
					</div>
				</div>
				<p className='max-w-[27.8125rem] min-w-[25rem] text-2xl leading-[1.8rem] -tracking-[0.03rem]'>
					more efficiently with the{' '}
					<span className='font-semibold'>most advanced</span> granular controls
				</p>
			</div>
			<div className='group relative isolate grid grid-cols-4 gap-px'>
				<article className='col-span-4 grid w-full grid-cols-2 items-end justify-end gap-y-[2.6875rem] rounded-lg bg-white p-8'>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem]'>
							Seamless <br />
							migration
						</h3>
						<p>
							Migrate your existing design seamlessly into Droip with just a
							click of a button!
						</p>
					</div>
					<Image
						alt='Seamless Migration'
						className='h-full max-h-[19rem] object-contain'
						height={304}
						src='https://droip.com/wp-content/uploads/2025/03/design1.webp'
						width={620}
					/>
				</article>
				<article className='col-span-2 flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Form builder'
						className='h-full max-h-[11.375rem] object-contain'
						height={182}
						src='https://droip.com/wp-content/uploads/2025/03/design-1.webp'
						width={596}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem]'>
							Form builder
						</h3>
						<p>
							Build forms for any purpose and effortlessly manage form data
							natively.
						</p>
					</div>
				</article>
				<article className='col-span-2 flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='CSS preview'
						className='h-full max-h-[11.375rem] object-contain'
						height={182}
						src='https://droip.com/wp-content/uploads/2025/03/design8.webp'
						width={596}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-[2rem] leading-[2.375rem] font-semibold -tracking-[0.08125rem]'>
							CSS preview
						</h3>
						<p>See real-time CSS changes and fine-tune styles as you need.</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Unlimited breakpoints'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design1-1.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Unlimited breakpoints
						</h3>
						<p>
							Achieve pixel-perfect responsiveness across all devices with
							unlimited breakpoints.
						</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Figma to droip'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design2.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Figma to droip
						</h3>
						<p>
							Seamlessly import Figma designs into Droip and bring your vision
							to life in no time.
						</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Code element'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design4.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Code element
						</h3>
						<p>
							Add custom HTML, CSS, and JavaScript to an element for extended
							functionality.
						</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Pop-up builder'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design5.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Pop-up builder
						</h3>
						<p>
							Design engaging pop-ups that captivate visitors and boost
							conversions.
						</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Autosave'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design7.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Autosave
						</h3>
						<p>
							Never lose progress—your work is automatically saved as you build.
						</p>
					</div>
				</article>
				<article className='flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Global style manager'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/design6.webp'
						width={256}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Global style manager
						</h3>
						<p>Maintain consistent branding with centralized style controls.</p>
					</div>
				</article>
				<article className='col-span-2 flex w-full flex-col gap-y-6 rounded-lg bg-white p-8'>
					<Image
						alt='Droip AI'
						className='h-full max-h-[11.375rem] object-contain'
						height={169}
						src='https://droip.com/wp-content/uploads/2025/03/create-with-ai.webp'
						width={596}
					/>
					<div className='flex max-w-[22.5rem] flex-col gap-y-6'>
						<h3 className='text-2xl leading-[1.8rem] font-semibold -tracking-[0.03rem]'>
							Droip AI
						</h3>
						<p>
							Harness AI to accelerate your <br />
							workflow and creative process.
						</p>
					</div>
				</article>
				<div className='bg-primary absolute -top-2.5 right-1/2 -bottom-[3.9375rem] -z-10 w-[75%] translate-x-1/2 rounded-full opacity-[0.18] blur-[8.9375rem]' />
			</div>
		</section>
	);
};
