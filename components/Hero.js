import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import userData from '@constants/data';

export default function Hero() {
	const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6'];
	return (
		<div className='flex flex-row justify-center items-start overflow-hidden'>
			{/* Text container */}

			<div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
				<RoughNotationGroup show={true}>
					<RainbowHighlight color={colors[0]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Innovator.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[1]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Mentor.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[2]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Leader.
						</h1>
					</RainbowHighlight>
					<RainbowHighlight color={colors[3]}>
						<h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
							Visionary.
						</h1>
					</RainbowHighlight>
				</RoughNotationGroup>
				<p className='text-base text-gray-500 mt-6 dark:text-gray-300'>
					Leveraging my extensive experience with leading UK taxi companies,
					passionate about actively driving industry progression. My approach
					combines a clear, strategic vision with in-depth knowledge, enabling me to
					develop innovative strategies and offer meaningful insights. I thrive on
					getting deeply involved in projects that push the envelope, always seeking
					opportunities to advance and improve. Committed to promoting positive
					change, I aim to lead by example, inspiring innovation and ensure our
					industry moves toward a promising and dynamic future.
				</p>
			</div>
			{/* Image container */}
			{/* TODO: show image on mobile size */}
			<div className='hidden lg:block sm:relative sm:w-full md:w-1/2 sm:-mr-40 sm:mt-20'>
				<div className='w-3/4 '>
					<img
						src={userData.avatarUrl}
						alt='avatar'
						className=' shadow-inner'
					/>
					<div className='flex flex-row justify-between mt-4'>
						<div className='flex flex-row space-x-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								className='bi bi-arrow-90deg-up'
								viewBox='0 0 16 16'
							>
								<path
									fillRule='evenodd'
									d='M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z'
								/>
							</svg>
							<p className='font-mono'>That&apos;s me</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
