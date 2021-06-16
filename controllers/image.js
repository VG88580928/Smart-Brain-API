import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: "5abab068bdbc4330a7458e5c830c1049",
  });

const handleApiCall = (req, res) => {
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // THE JPG
        req.body.input
      )
      .then(data => res.json(data))
      .catch(err => res.status(400).json('Clarifai API 接取失敗'))
}


const handleImagePut = (db) => (req, res) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    })
    .catch(err => {
        res.status(400).json('unable to get entries')
    })
}

export { handleApiCall, handleImagePut };