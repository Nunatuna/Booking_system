import React from 'react'
import { Title, Text } from '@mantine/core';

export default function Lokaler() {
 const styles = {
  container: {
   height: '700px',
   backgroundColor: 'White',
   border: '1px solid lightgrey',
   padding: '30px',
   width: '500px',
   height: '600px',
   borderRadius: '15px',
   boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)', // Subtle drop shadow
 },
 containerLokaler: {
   height: '450px',
   borderRadius: '20px',
   padding: '30px',
   backgroundColor: '#F5F5F5',
   marginTop: '20px',
 }
 } 
  
    return (
    <div style={styles.container}>
        <Title order={2} style={{color:'#4C6EF5'}} >Lokaler</Title>
        <Text style={{color:'#4C6EF5'}} >Valgt dato propszszs</Text>
        <div style={styles.containerLokaler}>
            her skal lokaler være balba
        </div>
    </div>
  )
}
