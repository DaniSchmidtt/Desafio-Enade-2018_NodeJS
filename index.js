function iterativa(m, n) {

    let retorno = (m + (1 / m))

    for (let i = m + 1; i <= n; i++) {

        retorno *= (i + (1 / i))

    }

    return retorno
}

function recursiva(m,n){

    let retorno
    if(m + 1 <= n){

        retorno = recursiva((m+1),(n))
    }
    if(isNaN(retorno)){
        retorno = 1

    }
    return (m + (1 / m)) * retorno

}
console.log(iterativa(1, 8))
console.log(recursiva(1,8))