import React from 'react';
import { Link } from '@tanstack/react-router'; // This is correct import from @tanstack/react-router
import { IconHome, IconUser, IconLogout } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Title, Text } from '@mantine/core';
import CPHLogo from '../components/CPHLogo';


export default function NavBar() {
  //stylesheet til navbar
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#EDF2FF',
      filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))', // Subtle shadow at the bottom
    },
    child: {
      display: 'flex',
      alignItems: 'center',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
      textDecoration: 'none',
      color: 'black',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    linkButton: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'black',
    },
  };
  
  //styling af modal header og buttons. Selveste modalet bliver stylet i modal tagget.
  const modalStyles = {
    header: {
      textAlign: 'center',
      width: '70%',
      margin: '0 auto',
      marginBottom: '40px',
      color: '#364FC7', //hex value for "indigo" i mantine
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      marginTop: '20px',
      marginBottom: '40px',
    },

    //bliver nød til at style button selv, for at få link til at fungere. 
    linkButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      color: 'white',
      backgroundColor: '#364FC7',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '1.3em',
      padding: '10px 30px',
    },
  };

  //modal lukke funktion fra mantine
  const [opened, { open, close }] = useDisclosure(false);

  return (
    //navbar container
    <div style={styles.container}>

      {/*logo*/}
        <div style={styles.child}>
          {/*CPHLogo component er en SVG fil som er kopiret direkte fra figma*/}
          <CPHLogo />
        </div>

      {/*links*/}
        <div style={styles.child}>
          <Link to="/philip" style={styles.link}>
            <IconHome stroke={2} width="24" height="24" style={{ marginRight: '8px' }} />
            <Text size="md" fw={600}>Forside</Text>
          </Link>
          <Link to="/" style={styles.link}>
            <IconUser stroke={2} width="24" height="24" style={{ marginRight: '8px' }} />
            <Text size="md" fw={600}>Mine bookinger</Text>
          </Link>
        </div>

      {/*log af modal button*/}
        <div style={styles.child}>
          <Modal
            opened={opened}
            onClose={close} //on-click close funktion, som er i logaf <div>. Den lukker modal
            centered //sørger for modal er centreret på skærmen
            overlayOpacity={0.5} //sørger for baggrund bliver mørkere når modal åbner op
            size="m" // modal størrelse
            radius="lg" // sørger for modal har runde hjørner (samme som css værdien border-radius)
          >
            {/*modal content*/}
              <div>
               <Title order={1} style={modalStyles.header}>Er du sikker på, at du vil logge af?</Title>
                <div style={modalStyles.buttons}>
                  <Button variant="filled" color="#748FFC" size="xl" radius="xl" onClick={close}>LUK</Button>
                  <Link to="/login" style={modalStyles.linkButton}>LOG UD</Link> 
                </div>
              </div>
          </Modal>

          {/*det som er synligt i navbaren*/}
            <div style={styles.child} onClick={open}>
              <Text size="md" fw={600}>Log af</Text>
              <IconLogout stroke={2} width="44" height="44" style={{ marginLeft: '8px' }} />
            </div>
        </div>
    </div>
  );
}