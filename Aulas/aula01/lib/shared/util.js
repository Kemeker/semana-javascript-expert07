import factory from "../../pages/video-player/src/factory.js"

function supportsWorkerType(){
    let supports = false
    const tester = {
        get type(){ supports = true}
    }
    try{
        new Worker('blob://', tester).terminate()
    }   finally{
        return supports
    }
    
}

export {
    supportsWorkerType
}