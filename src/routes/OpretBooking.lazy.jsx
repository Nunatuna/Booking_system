import { useState, useEffect } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import NyBooking from '../components/NewBooking'
import LedigeLokaler from '../components/LedigeLokaler'
import NavBar from '../components/NavBar'
import Spinner from '../components/Spinner'
import { getSupabaseClient } from '../supabase/getSupabaseClient'
import WelcomeUser from '../components/WelcomeUser'
import CurrentDate from '../components/CurrentDate'

export const Route = createLazyFileRoute('/OpretBooking')({
  component: RouteComponent,
})

function RouteComponent() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMeetingRooms() {
      setLoading(true)
      const supabase = getSupabaseClient()

      // Fetch data from the "MeetingRooms" table in Supabase

      // SPØRG AIDEN OM DET ER DE LEDIGE ? ELLER ?
      const { data, error } = await supabase
        .from('MeetingRooms') // MeetingRooms table
        .select('id, Room_name, Start_time, End_time') // Select id, room name and start/end times coloumns

      if (error) {
        // Error message
        console.error('Error fetching meeting rooms:', error)
      } else {
        setRooms(data) // Set the fetched data to the rooms state
      }
      setLoading(false) // Set loading state to false
    }

    fetchMeetingRooms() // Call the fetchMeetingRooms function
  }, [])

  if (loading) {
    // Loading spinner that appears when the data is loading
    return (
      <div style={loadingStyle}>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <div style={styles.nybookingcontainer}>
        <div style={styles.hejallan}>
          <WelcomeUser />
          <CurrentDate />
        </div>
        <div style={styles.container}>
          <div style={styles.component}>
            <NyBooking />
          </div>
          <div style={styles.component}>
            {/* Her skal det rigtige data være */}
            <LedigeLokaler rooms={rooms} />
          </div>
        </div>
      </div>
    </div>
  )
}

// CSS styles
const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '200px',
}

const styles = {
  nybookingcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  container: {
    display: 'flex', // Aligns components side by side
    // justifyContent: 'center', // Centers the components horizontally
    alignItems: 'flex-start', // Aligns components at the top
    gap: '70px', // Adds spacing between the components
    // padding: '20px',
  },
  component: {
    flex: '1 1 45%', // Ensures both components take up 45% of the width and adjust for smaller screens
    maxWidth: '500px', // Limits how wide each component can grow
  },
  hejallan: {
    alignSelf: 'flex-start', // Ensures the text block aligns to the left of its container
    textAlign: 'left', // Aligns text within the block to the left
    marginBottom: '20px', // Optional: Add spacing below the text block
    marginLeft: '225px',
    paddingTop: '55px',
  },
}

export default RouteComponent
