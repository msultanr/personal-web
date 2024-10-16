"use client";

import React from 'react';
import { Heading, Text, Flex, Button, InlineCode, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

// Inisialisasi i18next di sisi klien
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'id'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

const Home = () => {
  const { t } = useTranslation('home');
  const router = useRouter();

  const links = [
    {
      href: "/profile",
      title: t('links.profile.title'),
      description: t('links.profile.description'),
    },
    {
      href: "/experience",
      title: t('links.experience.title'),
      description: t('links.experience.description'),
    },
    {
      href: "/education",
      title: t('links.education.title'),
      description: t('links.education.description'),
    },
  ];

  return (
    <Flex
      fillWidth paddingTop="l" paddingX="l"
      direction="column" alignItems="center" flex={1}>
      <Background dots={false}/>
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
                {t('personal_website')} <span className="brand-on-background-medium"></span>
              </InlineCode>
              <Heading
                wrap="balance"
                variant="display-strong-s"
                align='center'>
                <span className="font-code">
                  <LetterFx trigger="instant">
                    {t('name')}
                  </LetterFx>
                </span>
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                align="justify">
                <LetterFx trigger="instant">
                  {t('welcome_message')}
                </LetterFx>
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                align="justify">
                {t('about_me')}
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                align="justify">
                <LetterFx trigger="instant">
                  {t('explore_invitation')}
                </LetterFx>
              </Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent='center'
            alignItems='center'>
            <Button
              fillWidth
              onClick={() => router.push('/profile')}
              size="l"
              variant="primary"
              prefixIcon="profile">
              {t('profile_button')}
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
          {t('footer_text', { year: new Date().getFullYear() })} <Link href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">MIT License</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Home;