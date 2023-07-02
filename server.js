import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// API FETCH
app.get('/api/siren/:siren', async (req, res) => {
  const siren = req.params.siren;
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://data.siren-api.fr/v3/unites_legales/${siren}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Client-Secret': apiKey,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erreur lors de la récupération des données : ' + error);
    res.status(500).send('Erreur lors de la récupération des données');
  }
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
