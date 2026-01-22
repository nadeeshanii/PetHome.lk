function PetCard({ pet }) {
  return (
    <div style={styles.card}>
      <img src={pet.image} alt={pet.name} style={styles.image} />
      <h3>{pet.name}</h3>
      <p>{pet.breed}</p>
      <p>{pet.age}</p>
      <button style={styles.button}>View Details</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff9f7",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "220px"
  },
  image: {
    width: "100%",
    borderRadius: "8px"
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#5d2d3c",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default PetCard;
