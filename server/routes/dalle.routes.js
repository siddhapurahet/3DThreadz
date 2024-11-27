// import express from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from 'openai';

// const openai = new OpenAI();
// dotenv.config();

// const router = express.Router();

// // const config = new Configuration({
// //   apiKey: process.env.OPENAI_KEY,
// // });

// const openaiClient = openai({apiKey: process.env.OPENAI_API_KEY});

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: "Hello from 3DThreadz Routes" })
// })

// router.route('/').post(async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     const response = await openai.images.generate({
//       prompt,
//       n: 1,
//       size: '1024x1024',
//       response_format: 'b64_json'
//     });

//     const image = response.data.data[0].b64_json;
    

//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something went wrong" })
//   }
// })

// export default router;

import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config(); // Load environment variables before using them

// Initialize OpenAI with API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const router = express.Router();

// GET route
router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from 3DThreadz Routes" });
});

// POST route
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    console.log('Reached here...1')
    const image = response.data[0].b64_json;
    console.log('Reached here...1')

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
