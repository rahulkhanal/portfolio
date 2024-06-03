import { Box, Button, Center, Divider, Flex, Group, Modal, Space, Stack, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from 'react-icons/io5';

const App = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleIconClick = () => {
    const email = 'rahul39khanal@gmail.com';
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };
  return (
    <>
      <Stack bg={"#000"} h={"auto"}>
        <Center>
          <div className='myImg'>
            <img src="Rahul-Sir.jpeg" alt="Sunset"></img>
          </div>
        </Center>
        <Box ta="center" >
          <Title c="#fff" size='6rem' lh={1.2}>Rahul</Title>
          <Title c="#fff" size='6rem' fw={300} lh={0.6}>Khanal</Title>
        </Box>
        <Divider size="xl" my="sm" w={200} mx='auto' c="#fff" />
        <Box maw={700} c='#fff' mx='auto' ta='center'>
          I am a dedicated TypeScript developer specializing in Next.js/React.js and Nest.js/Express.js frameworks. With a solid background in both SQL and NoSQL databases, I have a proven track record of developing efficient and robust web applications using TypeORM, Sequelize, and Mongoose. My commitment to excellence and continuous learning ensures that I stay at the forefront of industry advancements, delivering high-quality solutions that meet and exceed client expectations.
        </Box>
        <br />
        <Box ta={'center'}>
          <Button rightSection={<IoCall color='black' size={20} />} bg={'#fff'} c={'black'} style={{ fontWeight: "600" }} onClick={open}>Contact me</Button>
        </Box>
        <br />
        <br />
        <br />
        <br />
      </Stack>
      <Box className='mac'>
        <Group justify='space-around'>
          <FaFacebookSquare color='white' size={50} className='icon' onClick={() => window.location.href = "https://www.facebook.com/mdrahul333/"} />
          <FaInstagram color='white' size={50} className='icon' onClick={() => window.location.href = "https://www.instagram.com/rahul_khanal_333/"} />
          <FaLinkedin color='white' size={50} className='icon' onClick={() => window.location.href = "https://www.linkedin.com/in/rahul-khanal-b0a627210/"} />
          <FaGithub color='white' size={50} className='icon' onClick={() => window.location.href = "https://github.com/rahulkhanal"} />
          <IoIosMail color='white' size={50} className='icon' onClick={handleIconClick} />
        </Group>
        <Divider size="lg" my="10" w={300} mx='auto' c="#fff" />
      </Box>
      <Modal opened={opened} onClose={close} title="please click below to contact me." centered>
        <button onClick={handleIconClick}>Click here</button>
      </Modal>
    </>
  )
}

export default App