import React from 'react';
import { Box, Button, Center, Divider, Group, Modal, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import ParticleBackground from './ParticleBackground';

const App = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleIconClick = () => {
    const email = 'rahul39khanal@gmail.com';
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };

  return (
    <>
      <div style={{ position: 'relative', minHeight: '110vh', overflow: 'hidden' }}>
        <Stack h={"auto"}>
          <Center>
            <div className='myImg'>
              <img src="Rahul-Sir.jpeg" alt="Rahul Khanal" />
            </div>
          </Center>
          <Box ta="center">
            <Title c="#fff" size='6rem' lh={1.2}>Rahul</Title>
            <Title c="#fff" size='6rem' fw={300} lh={0.6}>Khanal</Title>
          </Box>
          <Divider size="xl" my="sm" w={200} mx='auto' c="#fff" />
          <Box maw={700} c='#fff' mx='auto' ta='center'>
            I am a dedicated TypeScript developer specializing in Next.js/React.js and Nest.js/Express.js frameworks. With a solid background in both SQL and NoSQL databases, I have a proven track record of developing efficient and robust web applications using TypeORM, Sequelize, and Mongoose.
          </Box>
          <br />
          <Box ta={'center'}>
            <Button rightSection={<IoCall color='black' size={20} />} bg={'#fff'} c={'black'} style={{ fontWeight: "600" }} onClick={open}>Contact me</Button>
          </Box>
        </Stack>
        <Box className='mac' bg='#000' p='xs'>
          <Group justify='space-around'>
            <FaFacebookSquare color='white' size={35} className='icon' onClick={() => window.location.href = "https://www.facebook.com/mdrahul333/"} />
            <FaInstagram color='white' size={35} className='icon' onClick={() => window.location.href = "https://www.instagram.com/rahul_khanal_333/"} />
            <FaLinkedin color='white' size={35} className='icon' onClick={() => window.location.href = "https://www.linkedin.com/in/rahul-khanal-b0a627210/"} />
            <FaGithub color='white' size={35} className='icon' onClick={() => window.location.href = "https://github.com/rahulkhanal"} />
            <IoIosMail color='white' size={35} className='icon' onClick={handleIconClick} />
          </Group>
          <Divider size="lg" my="10" w={300} mx='auto' c="#fff" />
        </Box>
      </div>
      <Modal opened={opened} onClose={close} title="Please click below to contact me." centered>
        <Button onClick={handleIconClick}>Click here</Button>
      </Modal>
    </>
  );
};

export default App;
