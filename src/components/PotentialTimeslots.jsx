export default function PotentialTimeslots() {
  const timeslots = ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00'];

  return (
    <div>
      <h4>Mulige tidsrum:</h4>
      <ul>
        {timeslots.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
    </div>
  );
}
