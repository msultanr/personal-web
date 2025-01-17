"use client";

import React, { useRef, useState } from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, SmartImage, IconButton, Input, SmartLink } from '@/once-ui/components';
import Link from 'next/link';
import './style.css';

export default function Home() {
	const links = [
		{
			href: "#profile",
			title: "Profile",
			description: "About and social links.",
		},
		{
			href: "#experience",
			title: "Work Experience",
			description: "Professional career history.",
		},
        {
            href : "#skills",
            title: "Skills",
            description: "Skills and expertise.",
        },
		{
			href: "#education",
			title: "Education",
			description: "Certifications and education.",
		},
	];

    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const correctPassword = "PasswordCV";

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
        setIsPasswordCorrect(true);
        window.location.href = "/CV.pdf";
        } else {
        alert("Password salah. Silakan hubungi 0859-5283-5509");
        setPassword('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          handlePasswordSubmit();
        }
      };
    
    const profileRef = useRef(null);
	const experienceRef = useRef(null);
    const skillsRef = useRef(null);
	const educationRef = useRef(null);

	const handleScroll = (ref: { current: { scrollIntoView: (arg0: { behavior: string; }) => void; }; }) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Flex
			fillWidth paddingTop="xl" paddingX="l"
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
                    <InlineCode
                            className="shadow-m"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                alignSelf: 'left',
                                fontSize: 18}}>
                            About <span className="brand-on-background-medium"></span>
                    </InlineCode>
					<Flex
						mobileDirection="column"
						fillWidth>
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<SmartImage src="/images/photo.jpeg" alt="Pas Foto" radius='l' height={20} objectFit='contain'/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column"
                            ref={profileRef} id='profile'>
							<Heading
								wrap="balance"
								variant="display-strong-s">
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
										Seorang Software Engineer yang berfokus pada membangun aplikasi yang efisien dan inovatif
                                        serta selalu ingin belajar berbagai hal untuk meningkatkan keterampilan dan antusias untuk menemukan banyak pengalaman yang menantang.
							</Text>
                            <Flex
                            position="relative"
                            flex={4}
                            gap="24"
                            marginBottom="104"
                            direction="column"
                            >
                            <Button
                                variant="primary"
                                size="l"
                                onClick={() => setShowPasswordInput(true)} // Tampilkan input password saat tombol diklik
                                label="Download CV"
                            >
                            </Button>
                            {showPasswordInput && (
                                <Flex
                                    position="relative"
                                    flex={4} gap="24"
                                    direction="column">
                                    <Input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            label="Password CV"
                                            id={''} />
                                    <Flex
                                        position="relative"
                                        flex={4} gap="24"
                                        direction="row">
                                        <Button
                                            variant="primary"
                                            size="m"
                                            onClick={handlePasswordSubmit}>
                                            Submit
                                        </Button>
                                        {/* add button close */}
                                        <Button
                                            variant="danger"
                                            size="m"
                                            onClick={() => setShowPasswordInput(false)}>
                                            Close
                                        </Button>
                                    </Flex>
                                </Flex>
                            )}
                            <Flex
                                position="relative"
                                flex={4} gap="24"
                                direction="row"
                                justifyContent='space-between'
                                fillWidth>
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="https://github.com/msultanr"
                                    fillWidth>
                                    Github
                                </Button>
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="https://www.linkedin.com/in/msultanrafi/"
                                    fillWidth>
                                    LinkedIn
                                </Button>
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="https://twitter.com/msultanr_"
                                    fillWidth>
                                    Twitter
                                </Button>
                            </Flex>
                            <Flex
                                position="relative"
                                flex={4} gap="24"
                                direction="row"
                                justifyContent='space-between'
                                fillWidth>
                            <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="https://www.instagram.com/msultanr_/"
                                    fillWidth>
                                    Instagram
                                </Button>
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="mailto:msultanrafi@gmail.com"
                                    fillWidth>
                                    Gmail
                                </Button>
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon='openLink'
                                    href="https://wa.me/6285952835509"
                                    fillWidth>
                                    WhatsApp
                                </Button>
                                </Flex>
                            </Flex>
						</Flex>
					</Flex>
                    <Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(4, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								style={{ padding: 'var(--responsive-space-l)', cursor: 'pointer' }}
								key={link.href} href={link.href}>
								<Flex
									fillWidth gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
                    <Flex gap="m" direction="column" ref={experienceRef} id='experience'>
                        <InlineCode
                            className="shadow-m"
                            style={{
                            width: 'fit-content',
                            padding: 'var(--static-space-8) var(--static-space-16)',
                            backdropFilter: 'blur(var(--static-space-1))',
                            alignSelf: 'flex-start',
                            fontSize: 18
                            }}
                        >
                            Experience
                        </InlineCode>
                        
                        <Flex direction="column" gap="s">
                            <Flex justifyContent="space-between" alignItems="center">
                            <Text
                                className="shadow-m"
                                variant='heading-strong-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 20
                                }}
                            >
                                PT Infotech Solutions
                            </Text>
                            <Text
                                className="shadow-m"
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                                }}
                            >
                                Agustus 2024 - September 2024
                            </Text>
                            </Flex>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                            }}
                            >
                            Quality Assurance (Freelance)
                            </Text>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Melakukan pengujian fungsional website menggunakan Selenium untuk memastikan semua fungsi button, link, dan form dapat berjalan dengan benar.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Melakukan API Test menggunakan Postman untuk memastikan API dapat digunakan sesuai dengan kebutuhan.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Melaksanakan pengujian antarmuka pengguna (UI) dan pengalaman pengguna (UX) secara manual untuk memastikan desain yang intuitif, responsif, dan mudah digunakan.
                            </Text>
                        </Flex>

                        <Flex direction="column" gap="s">
                            <Flex justifyContent="space-between" alignItems="center">
                            <Text
                                className="shadow-m"
                                variant='heading-strong-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 20
                                }}
                            >
                                PT Denso Indonesia
                            </Text>
                            <Text
                                className="shadow-m"
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                                }}
                            >
                                Mei 2023 - Mei 2024
                            </Text>
                            </Flex>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                            }}
                            >
                            Software Developer
                            </Text>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang dan membuat aplikasi Lot Collecting System, sebuah aplikasi untuk merekam dan menyimpan data part mekanikal yang akan digunakan.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang dan membuat aplikasi One Point Check System, sebuah aplikasi untuk mencegah kesalahan pergantian part elektronik.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang dan membuat aplikasi Repacking System, sebuah aplikasi untuk mengelola dan mengontrol part di warehouse.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang dan membuat aplikasi Tag Maker System, sebuah aplikasi untuk membuat QR Code untuk traceability.
                            </Text>
                        </Flex>

                        <Flex direction="column" gap="s">
                            <Flex justifyContent="space-between" alignItems="center">
                            <Text
                                className="shadow-m"
                                variant='heading-strong-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 20
                                }}
                            >
                                PT Lumintu Logic
                            </Text>
                            <Text
                                className="shadow-m"
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                                }}
                            >
                                Agustus 2021 - Januari 2022
                            </Text>
                            </Flex>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                            }}
                            >
                            Backend Developer
                            </Text>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang dan membuat website Lumintu Events Ticketing platform untuk menjual tiket event.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Memproduksi API menggunakan Directus untuk pembagian merchandise dalam pengelolaan logistik
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Membuat fitur widget QnA dan real-time chat pada website Lumintu Events.
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                            }}
                            >
                                • Merancang UI/UX Museum Digital untuk Kraton Ngayogyakarta.
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                            position="relative"
                            flex={4} gap="24"
                            direction="column"
                            ref={skillsRef} id='skills'>
                            <InlineCode
                                className="shadow-m"
                                style={{
                                    width: 'fit-content',
                                    padding: 'var(--static-space-8) var(--static-space-16)',
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    alignSelf: 'left',
                                    fontSize: 18}}>
                                Skills <span className="brand-on-background-medium"></span>
                            </InlineCode>

                            <Flex direction="column" gap="s">
                            <Flex justifyContent="space-between">
                            </Flex>

                            {/* add carousel */}
                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                align='center'
                                style={{
                                textDecoration: 'underline',
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16,
                                }}
                            >
                                Front end
                            </Text>
                            {/* carousel contain logo of tech */}

                            <div className='slider'>
                                <div className='slide-track'>
                                    <div className='slide'>
                                        <img src="images/logo/html.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/css.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/javascript.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/react.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/next.webp"  alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/vue.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/html.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/css.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/javascript.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/react.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/next.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/vue.webp" alt="" />
                                    </div><div className='slide'>
                                        <img src="images/logo/html.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/css.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/javascript.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/react.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/next.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/vue.webp" alt="" />
                                    </div>
                                </div>
                            </div>


                            <Text
                            className="shadow-m"
                            variant='heading-default-m'
                            style={{
                            textDecoration: 'underline',
                            width: 'fit-content',
                            padding: 'var(--static-space-8) var(--static-space-16)',
                            backdropFilter: 'blur(var(--static-space-1))',
                            fontSize: 16
                            }}
                            >
                                Back end
                            </Text>

                            <div className='slider'>
                                <div className='slide-track'>
                                    <div className='slide'>
                                        <img src="images/logo/php.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/laravel.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/node.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/java.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/csharp.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/dotnet.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/python.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/php.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/laravel.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/node.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/java.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/csharp.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/dotnet.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/python.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/php.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/laravel.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/node.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/java.webp" alt="" />
                                    </div>
                                    <div className='blackSlide'>
                                        <img src="images/logo/csharp.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/dotnet.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/python.webp" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Text
                            className="shadow-m"
                            variant='heading-default-m'
                            style={{
                            textDecoration: 'underline',
                            width: 'fit-content',
                            padding: 'var(--static-space-8) var(--static-space-16)',
                            backdropFilter: 'blur(var(--static-space-1))',
                            fontSize: 16
                            }}
                            >
                                Database
                            </Text>

                            <div className='slider'>
                                <div className='slide-track'>
                                    <div className='slide'>
                                        <img src="images/logo/mysql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/mariadb.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/postgresql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/oracle.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/sqlserver.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/mysql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/mariadb.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/postgresql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/oracle.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/sqlserver.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/mysql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/mariadb.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/postgresql.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/oracle.webp" alt="" />
                                    </div>
                                    <div className='slide'>
                                        <img src="images/logo/sqlserver.webp" alt="" />
                                    </div>
                                </div>
                            </div>

                            <Text
                            className="shadow-m"
                            variant='heading-default-m'
                            style={{
                            textDecoration: 'underline',
                            width: 'fit-content',
                            padding: 'var(--static-space-8) var(--static-space-16)',
                            backdropFilter: 'blur(var(--static-space-1))',
                            fontSize: 16
                            }}
                            >
                                Tools
                            </Text>

                            <Text
                            className="shadow-m"
                            onSolid='neutral-weak'
                            style={{
                            width: 'fit-content',
                            padding: 'var(--static-space-8) var(--static-space-16)',
                            backdropFilter: 'blur(var(--static-space-1))',
                            fontSize: 16
                            }}
                            >
                                Visual Studio Code, Visual Studio (2008, 2019, 2022), XAMPP, MySql Workbench, DBeaver, SSMS, Github, Postman, Wordpress, Docker, Termius, Jira.
                            </Text>

                            </Flex>
                    </Flex>

                    <Flex
                            position="relative"
                            flex={4} gap="24"
                            direction="column">
                            <InlineCode
                                className="shadow-m"
                                style={{
                                    width: 'fit-content',
                                    padding: 'var(--static-space-8) var(--static-space-16)',
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    alignSelf: 'left',
                                    fontSize: 18}}>
                                Certifications <span className="brand-on-background-medium"></span>
                            </InlineCode>
                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                                }}
                            >
                                Scrum Master - Rakamin Academy (2022)
                            </Text>
                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                                }}
                            >
                                Big Data - Solusi247 (2022)
                            </Text>
                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                                }}
                            >
                                MTCNA - IDNetworks (2022)
                            </Text>

                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                                }}
                            >
                                TOEIC English Test - ESL (2022) : Score 675
                            </Text>
                            <Text
                                className="shadow-m"
                                variant='heading-default-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                                }}
                            >
                                Secure Coding - Widya Security (2021)
                            </Text>
                    </Flex>
                    
                    <Flex
                            position="relative"
                            flex={4} gap="24"
                            direction="column"
                            ref={educationRef} id='education'>
                            <InlineCode
                                className="shadow-m"
                                style={{
                                    width: 'fit-content',
                                    padding: 'var(--static-space-8) var(--static-space-16)',
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    alignSelf: 'left',
                                    fontSize: 18}}>
                                Portofolio <span className="brand-on-background-medium"></span>
                            </InlineCode>
                            <Flex
                                mobileDirection="column"
                                fillWidth>
                                <Flex
                                    position="relative"
                                    flex={2} paddingTop="56" paddingX="xl">
                                    <img className='razan' src="images/logo/razansneakers.png" alt="" />
                                </Flex>
                                <Flex
                                    position="relative"
                                    flex={4} gap="24" marginBottom="104"
                                    direction="column"
                                    ref={profileRef} id='profile'>
                                    <Heading
                                        wrap="balance"
                                        variant="display-strong-s">
                                        <span className="font-code">
                                            <LetterFx
                                                trigger="instant">
                                                    Razan Sneakers Store
                                            </LetterFx>
                                        </span>
                                    </Heading>
                                    <Text
                                        variant="body-default-s"
                                        onBackground="neutral-weak"
                                        align="justify">
                                                Razan Sneakers Store adalah situs e-commerce yang menjual sepatu 100% autentik.
                                                Website ini dibuat menggunakan bahasa pemrograman php dan javascript,
                                                serta sudah terintegrasi dengan midtrans payment gateway untuk pembayaran.
                                    </Text>
                                    <SmartLink
                                        href='https://razansneakers.com'
                                        >
                                        Klik disini untuk lihat website
                                        </SmartLink>
                                </Flex>
                            </Flex>
                        </Flex>


                    <Flex
                            position="relative"
                            flex={4} gap="24"
                            direction="column"
                            ref={educationRef} id='education'>
                            <InlineCode
                                className="shadow-m"
                                style={{
                                    width: 'fit-content',
                                    padding: 'var(--static-space-8) var(--static-space-16)',
                                    backdropFilter: 'blur(var(--static-space-1))',
                                    alignSelf: 'left',
                                    fontSize: 18}}>
                                Education <span className="brand-on-background-medium"></span>
                            </InlineCode>

                            <Flex direction="column" gap="s">
                            <Flex justifyContent="space-between" alignItems="center">
                            <Text
                                className="shadow-m"
                                variant='heading-strong-m'
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 20
                                }}
                            >
                                Politeknik Negeri Semarang
                            </Text>
                            <Text
                                className="shadow-m"
                                style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 14
                                }}
                            >
                                Agustus 2019 - Agustus 2022
                            </Text>
                            </Flex>
                            
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                            }}
                            >
                                GPA : 3.79/4.00
                            </Text>
                            <Text
                            className="shadow-m"
                            onSolid="neutral-weak"
                            style={{
                                width: 'fit-content',
                                padding: 'var(--static-space-8) var(--static-space-16)',
                                backdropFilter: 'blur(var(--static-space-1))',
                                fontSize: 16
                            }}
                            >
                                D3 - Teknik Informatika
                            </Text>
                            </Flex>
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
