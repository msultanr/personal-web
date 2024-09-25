"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, SmartImage } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "/profile",
			title: "Profile",
			description: "About and social links.",
		},
		{
			href: "/experience",
			title: "Work Experience",
			description: "Professional career history.",
		},
		{
			href: "/education",
			title: "Education",
			description: "Education and certifications.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))',
									alignSelf: 'center'}}>
								Personal Website <span className="brand-on-background-medium"></span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s"
								align='center'>
								<span className="font-code">
									<LetterFx
										trigger="instant">
											Muhammad Sultan Rafi
									</LetterFx>
								</span>
							</Heading>
							<Text
								variant="body-default-m"
								onBackground="neutral-weak"
								align="justify">
								<LetterFx
									trigger="instant">
										Selamat datang di personal website saya! 
								</LetterFx>
							</Text>
							<Text
								variant="body-default-m"
								onBackground="neutral-weak"
								align="justify">
										Saya seorang Software Engineer yang berfokus pada membangun aplikasi yang efisien dan inovatif. 
										Dengan pengalaman dalam berbagai proyek teknologi modern, 
										saya selalu berusaha untuk menciptakan solusi yang tidak hanya bermanfaat tetapi juga berdampak positif bagi perkembangan digital. 
										Saya percaya bahwa teknologi adalah alat yang dapat mengubah dunia, dan saya bersemangat untuk terus berkontribusi dalam membentuk masa depan melalui inovasi.
							</Text>
							<Text
								variant="body-default-m"
								onBackground="neutral-weak"
								align="justify">
								<LetterFx
									trigger="instant">
										Jelajahi karya, pengalaman profesional, dan perjalanan akademis saya di sini. 
								</LetterFx>
							</Text>
						</Flex>
					</Flex>
					<Flex
						justifyContent='center'
						alignItems='center'>
						<Button
							fillWidth
							href="/profile"
							size="l"
							variant="primary"
							prefixIcon="profile"
							label="Profile">
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Build With Once UI Next JS, <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
				</Text>
			</Flex> 
		</Flex>
	);
}
