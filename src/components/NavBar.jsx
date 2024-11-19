import React from 'react'

export default function NavBar() {

  //intern styling, som bliver kaldt på i div
    const styles = {
        container: {
         display: 'flex',
         justifyContent: 'space-between',
         paddingLeft: '20px',
         paddingRight: '20px',
        },

        child: {
          display: 'flex',
          padding: '10px',
          gap: '30px'
        },
      };


  return (
    <div style={styles.container}>
        <div style={styles.child}>Cphbuisness</div>
        <div style={styles.child}>
            <div>Forside</div>
            <div>Mine bookiner</div>
        </div>
        <div style={styles.child}>Log af</div>
    </div>
  )
}
