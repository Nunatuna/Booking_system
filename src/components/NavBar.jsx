import React from 'react';
import { Link } from "@tanstack/react-router";
import { IconHome, IconUser, IconLogout } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export default function NavBar() {
  //stylesheet til navbar
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#EDF2FF',
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
  };
  
  //styling af modal header og buttons. Selveste modalet bliver stylet i modal tagget.
  const modalStyles = {
    header: {
      textAlign: 'center',
      margin: '40px 50px 60px 40px',
      fontWeight: 'bold',
      fontSize: '2.2rem',
      width: '76%',
      margin: '0 auto',
      color: '#364FC7', //hex value for "indigo" i mantine
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      marginTop: '20px',
      marginBottom: '40px',
    },
  };

  //modal lukke funktion fra mantine
  const [opened, { open, close }] = useDisclosure(false);

  return (
    //navbar container
    <div style={styles.container}>

      {/*logo*/}
        <div style={styles.child}>
          <strong>Cphbusiness</strong>
        </div>

      {/*links*/}
        <div style={styles.child}>
          <Link to="index" style={styles.link}>
            <IconHome stroke={2} width="24" height="24" style={{ marginRight: '8px' }} />
            Forside
          </Link>
          <Link to="about" style={styles.link}>
            <IconUser stroke={2} width="24" height="24" style={{ marginRight: '8px' }} />
            Mine bookinger
          </Link>
        </div>

      {/*log af modal button*/}
        <div style={styles.child}>
          <Modal
            opened={opened}
            onClose={close} //on-click close funktion, som er i log af div. Den lukker modal
            centered //sørger for modal er centreret på skærmen
            overlayOpacity={0.5} //sørger for baggrund bliver mørkere når modal åbner op
            size="lg" // modal størrelse
            radius="lg" // sørger for modal har runde hjørner (samme som border radius)
          >
            {/*modal content*/}
              <div>
                <h1 style={modalStyles.header}>Er du sikker på, at du vil logge af?</h1>
                <div style={modalStyles.buttons}>
                  <Button variant="filled" color="#748FFC" size="xl" radius="xl" onClick={close}>Luk</Button>
                  <Button variant="filled" color="indigo" size="xl" radius="xl">Log ud</Button>
                </div>
              </div>
          </Modal>

          {/*det som er synligt i navbaren*/}
            <div style={styles.child} onClick={open}>
              Log af
              <IconLogout stroke={2} width="44" height="44" style={{ marginLeft: '8px' }} />
            </div>
        </div>
    </div>
  );
}