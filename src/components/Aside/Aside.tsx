'use client';
import React from 'react';
import { Box, Fab, Tooltip } from '@mui/material';
import LogoMos from 'public/logo-menu.svg';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TranslateIcon from '@mui/icons-material/Translate';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { FabOptions } from '../type';
import { AsideContainer } from './Aside.style';

function Aside() {
  const theme = 'light';

  const fabOptions: FabOptions[] = [
    {
      icon: theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />,
      label: theme === 'light' ? 'Light Mode' : 'Dark Mode',
      disabled: true,
      function: () => {}
    },
    {
      icon: <TranslateIcon />,
      label: 'Translate',
      disabled: true,
      function: () => {}
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      disabled: false,
      function: () => {
        if (typeof window !== 'undefined') {
          window.open('https://www.github.com/fernandomospf', '_blank');
        }
      },
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      disabled: false,
      function: () => {
        if (typeof window !== 'undefined') {
          window.open('https://www.linkedin.com/in/fernando-mos/', '_blank');
        }
      },
    }
  ]
  return (
    <AsideContainer>
      <Box className="image-container">
        <Image 
          src={LogoMos}
          alt="Logo Fernando Mos"
          width={100}
          height={100}
        />
      </Box>
      <Box className="options-container">
        {
          fabOptions.map((option, index) => (
            <Fab 
              key={index}
              size="small"
              color="primary"
              aria-label={option.label}
              disabled={option.disabled}
              onClick={() => option?.function()}
            >
              <Tooltip title={option.label} placement="top">
                {option.icon}
              </Tooltip>
            </Fab>
          ))
        }
      </Box>
    </AsideContainer>
  )
}

export default Aside