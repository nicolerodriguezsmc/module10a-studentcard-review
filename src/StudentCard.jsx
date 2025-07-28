import React from 'react'; //Import react so the function can work in the first place
/*
  StudentCard displays a student's profile card.
  It uses props to show data and useState to toggle the bio.
*/
function StudentCard(props) {
    // Props from the parent containing student info
    const { name, major, year, bio, imageUrl } = props;
    // useState tracks whether the bio is visible
    // It starts as false with the bio hidden
  const [showBio, setShowBio] = React.useState(false);
    // Toggle the bio on or off
  const toggleBio = () => {
    setShowBio(!showBio);//true = false and false = true
  };

  return (
      // This is the main card container with styling applied directly using the style prop
      <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

export default StudentCard;
