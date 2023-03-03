export default class Service {
    #model = null
    #faceLandmarksDetection
    constructor({ faceLandmarksDetection}){
        this.#faceLandmarksDetection = faceLandmarksDetection
        
    }
    async loadModel(){
        this.#model = await this.faceLandmarksDetection.load(
            this.#faceLandmarksDetection.supportePackages.mediapipeFacemesh,
            {maxFaces: 1}

        )

    }
}