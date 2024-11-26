import React from 'react'

export default function () {
  const styles = {
    container:{
        height: '700px',
        backgroundColor: 'White',
        border: '1px solid lightgrey',
        padding: '30px',
        width: '500px',
        height: '600px',
        borderRadius: '15px',
        boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)', // Subtle drop shadow
    },
    dum:{
        backgroundColor: '#F5F5F5',
        padding: '30px',
        borderRadius: '20px',
        height: '100%',
        textAlign: 'center'
    }
  }
  
    return (
    <div style={styles.container}>
        <div style={styles.dum}>
            Vælg et lokale for at vælge længden på din reservation.
        </div>
    </div>
  )
}
