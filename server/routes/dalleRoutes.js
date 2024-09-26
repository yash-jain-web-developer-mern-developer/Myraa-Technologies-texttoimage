import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();

const router = express.Router();




router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const token = process.env.HUGGINGFACE_API_KEY;

    async function query() {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ "inputs": prompt }),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
      }

      const blob = await response.blob();
      const arrayBuffer = await blob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Convert the buffer to a base64 string
      const base64Image = buffer.toString('base64');
      const dataUrl = `data:image/jpeg;base64,${base64Image}`;

      return dataUrl;
    }

    // Call the query function and handle the data
    query()
      .then((dataUrl) => {
        res.status(200).json({ photo: dataUrl });
      })
      .catch(error => {
        console.error('Error in query execution:', error);
        res.status(500).send(error.message || 'Something went wrong during the API call');
      });

  } catch (error) {
    console.error('Error in POST handler:', error);
    res.status(500).send(error.message || 'An internal server error occurred');
  }
});


export default router;




