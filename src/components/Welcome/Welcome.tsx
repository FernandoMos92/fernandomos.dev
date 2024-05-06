import React, { useEffect } from 'react';
import { Alert, Box, Button, Dialog, IconButton, Tooltip, Typography } from '@mui/material';
import PicturePerfil from 'public/profile-mos.png';
import Image from 'next/image';
import Link from 'next/link';
import { WelcomeContainer } from './Welcome.style';
import { globalStore } from '@/store/globalStore.store';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type ContactModalProps = {
    open: boolean;
    close: (status: boolean) => void;
}

function ContactModal({open = false, close}: ContactModalProps) {
    const {isCopy, setCopyToClipboard} = globalStore();

    useEffect(() => {
        if(isCopy) {
            const timer = setTimeout(() => {
                setCopyToClipboard(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isCopy]);

    return (
        <Dialog 
            open={open}
            sx={{ padding: '20px'}}
        >
            <Box sx={{ 
                display: 'flex', 
                padding: '20px', 
                justifyContent: 'space-between'
            }}>
                <Typography variant="h4">
                    Contact me
                </Typography>
                <IconButton sx={{ width: '30px', height: '30px'}} onClick={() => close(false)}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}>
                <Typography variant="body1">
                    If you need to contact me there are a few options, but the most efficient is via my LinkedIn or email.
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', gap: '5px'}}>
                    <span style={{ fontWeight: 600}}>
                        Email:
                    </span> fernandomosp@gmail.com
                    <IconButton 
                        sx={{ width: '20px', height: '20px'}} 
                        onClick={() => {
                            navigator.clipboard.writeText('fernandomosp@gmail.com')
                            setCopyToClipboard(true);
                        }
                    }>
                        {
                            isCopy ? ( 
                            <Tooltip title="Copied" placement="right">
                                <CheckIcon sx={{color: 'green', width: '20px', height: '20px'}}/> 
                            </Tooltip>
                        ) : (
                               <Tooltip title="Copy to clipboard" placement="right">
                                    <ContentCopyIcon sx={{width: '15px', height: '15   px', color: '#000'}}/>
                                </Tooltip>
                            )
                        }
                    </IconButton>
                </Typography>
                <Typography variant='body1' sx={{display: 'flex', alignItem: 'center'}}>
                    <span style={{ fontWeight: 600, marginRight: '5px'}}>
                        LinkedIn: 
                    </span> 
                    <Link 
                        href="https://www.linkedin.com/in/fernando-mos/" target='_Blank' 
                        rel='noreferrer'
                        style={{display: 'flex', gap: '6px'}}
                    >
                        Fernando Mos 
                        <Tooltip title="Go to LinkedIn" placement="right">
                            <ArrowOutwardIcon sx={{width: '20px', height: '20px'}}/>
                        </Tooltip>
                    </Link>
                </Typography>
            </Box>
        </Dialog>
    )
}

function Welcome() {
    const {contactModal, setContactModal} = globalStore();
  return (
    <WelcomeContainer>
    <ContactModal open={contactModal} close={setContactModal}/>
    <Alert className='warning-alert' severity="warning">
        I&apos;m still working on this site, it may have some bugs or instabilities.
    </Alert>
    <Box className='content-container'>
        <Box className='text-about-me'>
            <Typography variant="h3" sx={{ width: '60px'}}>
                Hi,
            </Typography>
            <Typography variant="h3">
                I&apos;m 
                <span style={{ color: '#f1b00b', fontWeight: 600}}>
                    Fernando
                </span>.
            </Typography>
            <Typography variant="body1">
            <span style={{ fontWeight: 600}}>&lt;</span> Full Stack <span style={{ fontWeight: 600}}>Developer</span> <span style={{ fontWeight: 600}}>&gt;</span>
            </Typography>
        </Box>
        <Box sx={{width: '700px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <Typography variant="body1">
                With a passion for mobile development.
            </Typography>
            <Typography variant="body1" sx={{textAlign: 'justify', textJustify: 'inter-word'}}>
            A developer is interested in more than just code. Software engineering student and currently mid-level developer. Always looking for continuous improvement I&apos;m looking to improve my skills with CI/CD, Cloud and Software Architecture. My mission is to simplify people&apos;s lives through software
            </Typography>
        </Box>
        <Box sx={{display: 'flex', gap: '10px', marginTop: '60px'}}>
            <Button
                    variant="outlined"
                    sx={{
                        color: '#000000',
                        backgroundColor: '#d5d1d1df',
                        border: 'none',
                        fontWeight: 600,
                        ":hover": {
                        border: 'none',
                        backgroundColor: '#FFBD59',
                        cursor: 'pointer'
                    }}}
                    onClick={() => setContactModal(true)}
                >
                    Contact me
                </Button>
                <Link href="/CV_Fernando-mos.pdf" target='_Blank' rel='noreferrer'>
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#000000',
                            backgroundColor: '#d5d1d1df',
                            border: 'none',
                            fontWeight: 600,
                            ":hover": {
                            border: 'none',
                            backgroundColor: '#FFBD59',
                            cursor: 'pointer'
                        }}}
                    >
                        Download CV
                    </Button>
                </Link>
            </Box>
    </Box>
       <Box className="image-container">
        <Image 
            src={PicturePerfil}
            alt="Picture of Fernando"
            width={450}
            height={450}
        />
       </Box>
    </WelcomeContainer>
  )
}

export default Welcome

