"use client";
import { Button } from "@mui/material";

const Betton = () => {
  return (
    <Button
      variant="contained"
      sx={{ borderRadius: "15px" }}
      onClick={() => {
        alert("Za duże obciążenie Brak dostępnych maszyn.");
      }}
    >
      Wybierz plan
    </Button>
  );
};

export default Betton;
