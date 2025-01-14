import "https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js"
import "https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js"
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js"
import "https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js"

import Service from "./service.js"
// nno processo principal e window
// no worker e self

const {tf, faceLandmarksDetection } = self
tf.setBackend('webgl')

const service = new Service({
    faceLandmarksDetection
    
})

onmessage = ({data})=>{
    console.log('workers!', data)
    postMessage({
        'ok': 'ok'
    })
}