export default class View {
    #btnInit = document.querySelector('#init')
    #status = document.querySelector('#status')
    
    enableButton(){
        this.#btnInit.disable = false
    }
    
    configureOnBtnClick(fn){
        this.#btnInit.addEventListener('click', fn)

    }
    log(text){
        this.#status.innerHTML = text
    } 
}