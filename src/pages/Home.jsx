import { Typography } from "@mui/material";
import ArticulosPage from "./ArticulosPage";

const Home = () => {
  return (
    <>
      <Typography variant="h3" sx={{
        color: 'primary.main',  // Using a theme color
        textAlign: "center",
        fontSize: '2.5rem',     // Custom font size
        fontWeight: 'bold',     // Custom font weight
        marginBottom: '1rem',   // Custom margin
        textTransform: 'uppercase', // Uppercase text>
      }}>
        PRUEBA TECNICA DE CLOUDLABS
      </Typography>

      <ArticulosPage />

    </>
  );
};

export default Home;
