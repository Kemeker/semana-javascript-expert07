export default class Controller {
    #view
    #service
    constructor({view, service}){
        this.#view = view
        this.#service = service

        this.#view.configureOnBtnClick(this.onbtnStart.bind(this))

    }
    static async initialize(deps) {
        const controller = new Controller(deps)
        controller.log('not yet detect eye blink! click in the button start')
        return controller.init()
    }

    async init(){
        console.log('init')
        
    }
    log(){
        this.#view.log(`logger: ${text}`)

    }
    onbtnStart(){
        this.log('initializing detection......')

    }
}