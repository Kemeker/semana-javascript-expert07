onmessage = ({data})=>{
    console.log('workers!', data)
    postMessage({
        'ok': 'ok'
    })
}