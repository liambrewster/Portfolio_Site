import React from 'react';
import userData from '@constants/data';

export default function Projects() {
	return (
		<section className='bg-white dark:bg-gray-800'>
			<div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800'>
				<h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
					Projects
				</h1>
			</div>
			<div className='bg-[#F1F1F1] -mt-10 dark:bg-gray-900'>
				<div className='text-container max-w-6xl mx-auto pt-20'>
					<p
						className='leading-loose text-2xl md:text-4xl font-semibold  mx-4'
						style={{ lineHeight: '3rem' }}
					>
						See what I am currently working on!
					</p>
				</div>
			</div>
			<div className='bg-[#F1F1F1] dark:bg-gray-900 px-4'>
				<div className='pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20'>
					{/* Social Buttons */}
					<div className='inline-flex flex-col'>
						<div>
							<h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Contact
							</h1>
							<p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
								For any sort help / enquiry, shoot an{' '}
								<a
									href={`mailto:${userData.email}`}
									className='text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300'
								>
									email
								</a>{' '}
								and I&apos;ll get back. I swear.
							</p>
						</div>
						<div className='mt-8'>
							<h1 className='text-xl font-semibold text-gray-700 dark:text-gray-200'>
								Want Me To Help With Your Project?
							</h1>
							<p className='text-lg text-gray-500 mt-4 dark:text-gray-300'>
								I&apos;m always looking forward to to explore potential ways of engaging
								or collaborating with new people. Reach out and let&apos;s chat about
								what projects you have in mind
							</p>
						</div>
						{/* Social Links */}
						<h1 className='text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200'>
							Social Links
						</h1>
						<div className='mt-4 ml-4'>
							<div className='flex flex-row justify-start items-center'>
								<a
									href={userData.socialLinks.twitter}
									className='flex flex-row items-center space-x-4 group'
								>
									<div className='my-4'>&rarr;</div>
									<div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
										<div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
										Twitter
									</div>
								</a>
							</div>
							<div className='flex flex-row justify-start items-center'>
								<a
									href={userData.socialLinks.linkedin}
									className='flex flex-row items-center space-x-4 group'
								>
									<div className='my-4'>&rarr;</div>
									<div className='text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300'>
										<div className='absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300'></div>
										LinkedIn
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className='col-span-1 md:col-span-2'>
						<p className='text-xl text-gray-700 mb-4 dark:text-gray-300 '>
							Hey folks! below is a list of my current endeavors and upcoming ventures
							. Currently, I&apos;m proudly associated with Veezu, where I drive
							operational excellence.
						</p>
						<p className='text-xl text-gray-700 mb-4 dark:text-gray-300'>
							I am currently developing several small software solutions aimed at
							addressing some of the persistent frustrations within the taxi industry
							and beyond. These innovations are designed to enhance operational
							efficiencies and improve user engagement across various platforms.
						</p>
						<p className='text-xl text-gray-700 mb-4 dark:text-gray-300'>
							My focus is on creating cost effective tools that provide real, practical
							benefits, and I&apos;m excited about the potential to revolutionise
							aspects of the industry. Stay tuned for updates on these ventures and see
							how they might benefit your business in the near future!
						</p>
					</div>
				</div>
			</div>

			{/* Grid starts here */}
			<div className='bg-[#F1F1F1] dark:bg-gray-900'>
				<p className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 text-3xl pt-10'>
					Employment:
				</p>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-40'>
					{userData.projects.map((proj, idx) => (
						<ProjectCard
							title={proj.title}
							link={proj.link}
							imgUrl={proj.imgUrl}
							number={`${idx + 1}`}
							key={idx}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
	return (
		<a
			href={link}
			className='w-full block shadow-2xl'
			target='_blank'
			rel='noreferrer'
		>
			<div className='relative overflow-hidden'>
				<div className='h-72 object-cover'>
					<img
						src={imgUrl}
						alt='portfolio'
						className='transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full'
					/>
				</div>
				<h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-sky-500 rounded-md px-2'>
					{title}
				</h1>
				<h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
					{number.length === 1 ? '0' + number : number}
				</h1>
			</div>
		</a>
	);
};
