import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMarquee from '../Marquee/InfiniteMarquee';
import Logo from '../../assets/logo/logo-code-animated-dark.gif';
import { FaSquareGithub, FaDev, FaSquareEnvelope } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

const Footer: React.FC = () => {
  const AVAILABLE_LABELS = ['AVAILABLE'];

  const socialLinks = [
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com/in/isabelli-mocci/',
      label: 'LinkedIn',
      icon: IoLogoLinkedin,
      isExternal: true,
    },
    {
      id: 'dev',
      href: 'https://dev.to/isabellimocci',
      label: 'Dev.to',
      icon: FaDev,
      isExternal: true,
    },
    {
      id: 'github',
      href: 'https://github.com/isabelli-mocci',
      label: 'GitHub',
      icon: FaSquareGithub,
      isExternal: true,
    },
    {
      id: 'email',
      href: 'mailto:isabellimocci.tech@gmail.com',
      label: 'E-mail',
      icon: FaSquareEnvelope,
      isExternal: false,
    },
  ];

  return (
    <footer className='bg-gradient-to-b from-bg-dark via-bg-dark to-bg-medium text-white pt-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 backdrop-blur-[1px]' />

      <div className='relative z-10'>
        <div className='w-full mb-20'>
          <InfiniteMarquee
            items={AVAILABLE_LABELS}
            configuration={{
              speed: 60,
              direction: 'left',
              rotationAngle: -3,
              duplicateCount: 12,
            }}
            styleConfiguration={{
              containerClassName:
                'relative w-full overflow-hidden bg-bg-dark/80 backdrop-blur-sm py-4 border-t border-b border-white/10 flex items-center',
              itemClassName:
                'text-lg md:text-xl px-8 inline-flex items-center tracking-[0.2em] uppercase font-medium',
              separatorClassName: 'ml-16 text-primary-color/70',
              separatorSymbol: '✦',
            }}
          />
        </div>

        <div className='flex flex-col items-center justify-center pb-12 px-8 max-w-4xl mx-auto'>
          <motion.div
            className='mb-12'
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <img
              src={Logo}
              alt='Isabelli Mocci Logo'
              className='h-32 w-auto mx-auto opacity-95 hover:opacity-100 transition-all duration-500 hover:scale-105 filter drop-shadow-lg'
            />
          </motion.div>

          <motion.div
            className='flex justify-center gap-6 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className='group relative'
                  aria-label={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  {...(link.isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <div className='absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-500' />

                  <div className='relative p-4 flex items-center justify-center'>
                    <IconComponent className='w-6 h-6 text-white/80 group-hover:scale-110 transition-all duration-300' />
                  </div>

                  <div className='absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500' />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className='relative w-full bg-gradient-to-b from-bg-dark/50 to-bg-medium/80 backdrop-blur-sm border-t border-white/5'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary-color/30 to-transparent' />

        <motion.div
          className='py-20 px-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <h2 className='text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-center leading-tight max-w-4xl mx-auto'>
            <span className='bg-gradient-to-r from-primary-color via-primary-color to-green-300 bg-clip-text text-transparent font-medium'>
              Let's work together
            </span>
            <br />
            <span className='text-white/70 text-2xl md:text-3xl lg:text-4xl font-extralight mt-4 block'>
              and create something amazing
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Refined Copyright Section */}
      <div className='relative bg-bg-medium/40 backdrop-blur-md border-t border-white/5'>
        <div className='py-6 px-8 text-center'>
          <motion.p
            className='text-white/50 text-sm font-light tracking-wide'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            © 2025 Isabelli Mocci. All rights reserved.
            <span className='mx-3 text-white/20'>•</span>
            <a
              href='/privacy-policy'
              className='text-white/60 hover:text-primary-color transition-colors duration-300 font-normal'
            >
              Privacy Policy
            </a>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
