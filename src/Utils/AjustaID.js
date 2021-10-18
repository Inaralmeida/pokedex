export const ajustaId = (id) =>{
    let idString = id + ''
    const tamanho = idString.length

    
    if(tamanho === 1){
        idString = '00' + idString
    }else if(tamanho === 2){
        idString = '0' + idString
    }

    return idString
}