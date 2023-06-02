'use strict'

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/download', (req, res) => {
  const filePath = './sample.mp4';
  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'attachment; filename=file.mp4');

  // Handle errors on the file stream
  fileStream.on('error', (err) => {
    console.error('Error reading file:', err);
    res.status(500).send('Internal Server Error');
  });

  // Handle flow control
  res.on('drain', () => {
    fileStream.resume();
  });

  // Pipe the file stream to the response stream
  fileStream.pipe(res);

  // Pause the file stream when the response is full
  res.on('drain', () => {
    fileStream.pause();
  });

  // Close the file stream when the response is finished
  res.on('finish', () => {
    fileStream.close();
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
