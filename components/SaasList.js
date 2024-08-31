import React from 'react';
import userData from '@constants/data';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default function Saas() {
	return (
		<section className='bg-gray-100 dark:bg-gray-800 p-4'>
			<div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{userData.saas.map((proj, idx) => (
					<SaasCard
						key={idx}
						{...proj}
					/>
				))}
			</div>
		</section>
	);
}

const SaasCard = ({ title, link, description, revenue, analytics, status }) => {
	const getStatusDisplay = (status) => {
		if (status === 'live') {
			return (
				<span className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
					{revenue}/mo
				</span>
			);
		}
		const statusConfig = {
			'coming soon': { emoji: '🚧', color: 'text-yellow-500' },
			building: { emoji: '🚧', color: 'text-yellow-500' },
			'in development': { emoji: '🛠️', color: 'text-blue-500' },
			discontinued: { emoji: '🚫', color: 'text-red-500' },
			// Add more statuses as needed
		};
		const { emoji, color } = statusConfig[status] || {
			emoji: '❓',
			color: 'bg-gray-100 text-gray-800',
		};
		return (
			<span className={`${color} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
				{emoji} {status}
			</span>
		);
	};

	const formatYAxis = (value) => {
		if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
		if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
		return value;
	};

	const chartColor = '#84CC37';
	const gradientId = `colorVisitors-${title.replace(/\s+/g, '-').toLowerCase()}`;

	return (
		<div className='bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col h-full'>
			<div className='p-4 flex-grow'>
				<a
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					className='block hover:bg-gray-100 p-2 rounded-lg dark:hover:bg-gray-600 transition-colors duration-200'
				>
					<div className='flex justify-between items-center mb-2'>
						<h2 className='text-lg font-semibold'>{title}</h2>
						{getStatusDisplay(status)}
					</div>
					<p className='text-sm text-gray-600 dark:text-gray-300'>{description}</p>
				</a>
			</div>
			<div className='h-40 mt-auto'>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<AreaChart
						data={analytics}
						margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient
								id={gradientId}
								x1='0'
								y1='0'
								x2='0'
								y2='1'
							>
								<stop
									offset='5%'
									stopColor={chartColor}
									stopOpacity={0.8}
								/>
								<stop
									offset='95%'
									stopColor={chartColor}
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<XAxis
							dataKey='date'
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 10, fill: '#888' }}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 10, fill: '#888' }}
							tickFormatter={formatYAxis}
						/>
						<Tooltip
							contentStyle={{
								background: 'white',
								border: 'none',
								borderRadius: '5px',
								boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
							}}
							labelStyle={{ fontWeight: 'bold' }}
						/>
						<Area
							type='monotone'
							dataKey='visitors'
							stroke={chartColor}
							fillOpacity={1}
							fill={`url(#${gradientId})`}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
