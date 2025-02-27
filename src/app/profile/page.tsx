"use client";

import React, { useRef, useState } from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, Background, LetterFx, SmartImage, IconButton, Input, SmartLink } from '@/once-ui/components';
import Link from 'next/link';
import './style.css';

// Perbaiki tipe untuk styling
const gradientBackground: React.CSSProperties = {
	background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.95) 100%)',
	backdropFilter: 'blur(10px)',
	border: '1px solid rgba(255,255,255,0.1)',
	borderRadius: 'var(--radius-l)',
};

// Perbaiki tipe untuk card styling
const cardStyle: React.CSSProperties = {
	background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,20,0.95) 100%)',
	backdropFilter: 'blur(10px)',
	border: '1px solid rgba(255,255,255,0.1)',
	borderRadius: 'var(--radius-l)',
	padding: 'var(--space-l)',
	transition: 'all 0.3s ease',
	transform: 'translateY(0)', // Default state
};

export default function Home() {
	const links = [
		{
			href: "#experience",
			title: "Experience",
			description: "Professional career history.",
			icon: 'briefcase'
		},
		{
			href: "#skills",
			title: "Skills",
			description: "Skills and expertise.",
			icon: 'code'
		},
		{
			href: "#portfolio",
			title: "Portfolio",
			description: "Project showcase.",
			icon: 'layout'
		},
		{
			href: "#certifications",
			title: "Certifications",
			description: "Achievements and certificates.",
			icon: 'award'
		},
		{
			href: "#education",
			title: "Education",
			description: "Academic background.",
			icon: 'graduationCap'
		}
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

	const handleSlide = (direction: 'prev' | 'next', trackId: string) => {
		const track = document.getElementById(trackId);
		if (!track) return;

		const scrollAmount = direction === 'next' ? 300 : -300;
		track.scrollTo({
			left: track.scrollLeft + scrollAmount,
			behavior: 'smooth'
		});
	};

	return (
		<div className="root-container">
			<Background dots={false}/>
			
			{/* Hero Section with Sidebar */}
			<div className="layout-container">
				{/* Sidebar */}
				<aside className="sidebar">
					<SmartImage 
						src="/images/photo.jpeg" 
						alt="Pas Foto"
						radius="full"
						objectFit="cover"
						className="profile-image"
					/>

					<Heading
						variant="display-strong-s"
						className="name-heading">
						Muhammad Sultan Rafi
					</Heading>

					<Text
						variant="body-default-s"
						className="bio-text">
						Software Engineer yang berfokus pada membangun aplikasi yang efisien dan inovatif
					</Text>

					<Button
						variant="primary"
						size="l"
						onClick={() => setShowPasswordInput(true)}
						label="Download CV"
						className="download-button"
					/>

					{/* Social Links dengan Font Awesome */}
					<div className="social-links">
						{[
							{
								icon: <i className="fab fa-github"></i>,
								link: 'https://github.com/msultanr',
								label: 'GitHub'
							},
							{
								icon: <i className="fab fa-linkedin"></i>,
								link: 'https://www.linkedin.com/in/msultanrafi/',
								label: 'LinkedIn'
							},
							{
								icon: <i className="fab fa-twitter"></i>,
								link: 'https://twitter.com/msultanr_',
								label: 'Twitter'
							},
							{
								icon: <i className="fab fa-instagram"></i>,
								link: 'https://www.instagram.com/msultanr_/',
								label: 'Instagram'
							},
							{
								icon: <i className="fas fa-envelope"></i>,
								link: 'mailto:msultanrafi@gmail.com',
								label: 'Email'
							}
						].map(social => (
							<Button
								key={social.label}
								variant="tertiary"
								size="m"
								href={social.link}
								className="social-button"
                                prefixIcon='openLink'
							>
								<span className="social-label">{social.label}</span>
							</Button>
						))}
					</div>
				</aside>

				{/* Main Content */}
				<main className="main-content">
					{/* Navbar */}
					<nav className="navbar">
						<div className="navbar-container">
							<div className="navbar-brand">
								<Text variant="heading-strong-m" className="navbar-logo">MSR</Text>
							</div>
							<div className="navbar-links">
								{links.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="nav-link">
										<Icon name={link.icon} size="m" className="nav-icon" />
										<span className="nav-title">{link.title}</span>
									</Link>
								))}
							</div>
						</div>
					</nav>

					{/* Experience Section */}
					<section id="experience" className="content-section">
						<Heading variant="display-strong-s" className="section-heading">Experience</Heading>
						<div className="timeline">
							{[
								{
									company: 'PT Infotech Solutions',
									role: 'Quality Assurance',
									period: 'Agustus 2024 - September 2024',
									description: [
										'Melakukan pengujian fungsional website menggunakan Selenium',
										'Melakukan API Test menggunakan Postman',
										'Melaksanakan pengujian UI/UX'
									]
								},
								{
									company: 'PT Denso Indonesia',
									role: 'Software Developer',
									period: 'Mei 2023 - Mei 2024',
									description: [
										'Merancang dan membuat aplikasi Lot Collecting System',
										'Merancang dan membuat aplikasi One Point Check System',
										'Merancang dan membuat aplikasi Repacking System',
										'Merancang dan membuat aplikasi Tag Maker System'
									]
								}
							].map((exp, index) => (
								<div key={exp.company} className="timeline-item">
									<div className="timeline-content">
										<Text variant="heading-strong-l" className="company-name">{exp.company}</Text>
										<Text variant="heading-default-m" className="role-title">{exp.role}</Text>
										<Text variant="body-default-s" className="period">{exp.period}</Text>
										<ul className="description-list">
											{exp.description.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Skills Section dengan slider yang diperbaiki */}
					<section id="skills" className="content-section">
						<Heading variant="display-strong-s" className="section-heading">Skills</Heading>
						<div className="skills-container">
							{[
								{
									title: "Front end",
									skills: [
										{ src: "images/logo/html.webp", alt: "HTML" },
										{ src: "images/logo/css.webp", alt: "CSS" },
										{ src: "images/logo/javascript.webp", alt: "JavaScript" },
										{ src: "images/logo/react.webp", alt: "React" },
										{ src: "images/logo/next.webp", alt: "Next.js", isBlack: true },
										{ src: "images/logo/vue.webp", alt: "Vue" }
									]
								},
								{
									title: "Back end",
									skills: [
										{ src: "images/logo/php.webp", alt: "PHP" },
										{ src: "images/logo/laravel.webp", alt: "Laravel" },
										{ src: "images/logo/node.webp", alt: "Node.js" },
										{ src: "images/logo/java.webp", alt: "Java" },
										{ src: "images/logo/csharp.webp", alt: "C#", isBlack: true },
										{ src: "images/logo/dotnet.webp", alt: ".NET" },
										{ src: "images/logo/python.webp", alt: "Python" }
									]
								},
								{
									title: "Database",
									skills: [
										{ src: "images/logo/mysql.webp", alt: "MySQL" },
										{ src: "images/logo/mariadb.webp", alt: "MariaDB" },
										{ src: "images/logo/postgresql.webp", alt: "PostgreSQL" },
										{ src: "images/logo/oracle.webp", alt: "Oracle" },
										{ src: "images/logo/sqlserver.webp", alt: "SQL Server" }
									]
								}
							].map((category, index) => (
								<div key={index} className="skill-group">
									<Text variant="heading-default-m" className="skill-heading">{category.title}</Text>
									<div className="slider-container">
										<div className="slider">
											<div className="slide-track">
												{/* Original items */}
												{category.skills.map((skill, j) => (
													<div key={j} className={skill.isBlack ? "blackSlide" : "slide"}>
														<img src={skill.src} alt={skill.alt} loading="lazy" />
													</div>
												))}
												{/* First duplicate for seamless loop */}
												{category.skills.map((skill, j) => (
													<div key={`dup1-${j}`} className={skill.isBlack ? "blackSlide" : "slide"}>
														<img src={skill.src} alt={skill.alt} loading="lazy" />
													</div>
												))}
												{/* Second duplicate for safety */}
												{category.skills.map((skill, j) => (
													<div key={`dup2-${j}`} className={skill.isBlack ? "blackSlide" : "slide"}>
														<img src={skill.src} alt={skill.alt} loading="lazy" />
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Certifications Section */}
					<section id="certifications" className="content-section">
						<Heading variant="display-strong-s" className="section-heading">Certifications</Heading>
						<div className="certifications-container">
							{[
								{
									title: "Scrum Master",
									organization: "Rakamin Academy",
									year: "2022"
								},
								{
									title: "Big Data",
									organization: "Solusi247",
									year: "2022"
								},
								{
									title: "MTCNA",
									organization: "IDNetworks",
									year: "2022"
								},
								{
									title: "TOEIC English Test",
									organization: "ESL",
									year: "2022",
									score: "Score 675"
								},
								{
									title: "Secure Coding",
									organization: "Widya Security",
									year: "2021"
								}
							].map((cert, index) => (
								<div key={index} className="certification-item">
									<Text variant="heading-strong-m" className="cert-title">{cert.title}</Text>
									<Text variant="body-default-m" className="cert-org">{cert.organization}</Text>
                                    {cert.score && <Text variant="body-default-s" className="cert-score">{cert.score}</Text>}
									<Text variant="body-default-s" className="cert-year">{cert.year}</Text>
								</div>
							))}
						</div>
					</section>

					{/* Portfolio Section yang diperbarui */}
					<section id="portfolio" className="content-section">
						<Heading variant="display-strong-s" className="section-heading">Portofolio</Heading>
						<div className="portfolio-container">
							<div className="portfolio-item">
								<div className="portfolio-content">
									<div className="portfolio-image-container">
										<img 
											src="images/logo/razansneakers.png" 
											alt="Razan Sneakers" 
											className="portfolio-image" 
											style={{filter: 'invert(1)'}} 
										/>
									</div>
									<div className="portfolio-details">
										<Text variant="heading-strong-m" className="portfolio-title">
											Razan Sneakers Store
										</Text>
										<Text variant="body-default-s" className="portfolio-description">
											E-commerce sepatu autentik dengan PHP, JavaScript, dan Midtrans payment gateway.
										</Text>
										<Button
											variant="primary"
											size="m"
											href="https://razansneakers.com"
											label="Lihat Website"
											className="portfolio-button"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

                    {/* Education Section */}
					<section id="education" className="content-section">
						<Heading variant="display-strong-s" className="section-heading">Education</Heading>
						<div className="education-container">
							<div className="education-item">
								<Text variant="heading-strong-m" className="institution">Politeknik Negeri Semarang</Text>
								<Text variant="body-default-m" className="period">Agustus 2019 - Agustus 2022</Text>
								<Text variant="body-strong-m" className="degree">D3 - Teknik Informatika</Text>
								<Text variant="body-default-m" className="gpa">GPA : 3.79/4.00</Text>
							</div>
						</div>
					</section>
                    
				</main>
			</div>

			{/* Password Modal */}
			{showPasswordInput && (
				<div className="password-modal">
					<div className="password-container">
						<Input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onKeyDown={handleKeyDown}
							label="Password CV"
							id="cv-password"
						/>
						<Flex gap="m">
							<Button
								variant="primary"
								size="m"
								onClick={handlePasswordSubmit}
								label="Submit"
							/>
							<Button
								variant="danger"
								size="m"
								onClick={() => setShowPasswordInput(false)}
								label="Close"
							/>
						</Flex>
					</div>
				</div>
			)}
		</div>
	);
}
