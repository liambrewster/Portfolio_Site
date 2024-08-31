import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import Projects from '../components/Projects';
import Saas from '@components/SaasList';

export default function projects() {
	return (
		<ContainerBlock title='Projects - Liam Brewster'>
			<Projects />
			<Saas />
		</ContainerBlock>
	);
}
