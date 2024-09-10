import React, { useState } from "react";
import "./Reservation.css";
import Fermer from "../../Assets/fermer.png";

const Reservation = ({ setOpen, rondoId, userId }) => {
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleReservationSubmit = async () => {
    try {
      const response = await fetch("/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          rando_id: rondoId,
          date: new Date(),
          numberOfPersons: numberOfPersons,
        }),
      });

      if (response.ok) {
        console.log("Réservation enregistrée avec succès !");
        setReservationSuccess(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000); // Fermer la modal après 3 secondes (ajuster selon vos besoins)
      } else {
        // Gérer l'erreur JSON
        const errorData = await response.json();
        console.error("Erreur lors de l'enregistrement de la réservation :", errorData.message);
      }
    } catch (error) {
      console.error("Erreur lors de la requête API :", error);
    }
  };

  return (
    <div className="reserve">
      <div className="rContainer">
        {/* Afficher le message de réservation réussie */}
        {reservationSuccess && <div className="reservationSuccessMessage">Réservation Réussie !</div>}
        
        NB De Place :
        <input
          className="rInput"
          type="number"
          value={numberOfPersons}
          onChange={(e) => setNumberOfPersons(e.target.value)}
        />
        <button className="rButton" onClick={handleReservationSubmit}>
          Réserver
        </button>
      </div>
    </div>
  );
};

export default Reservation;
