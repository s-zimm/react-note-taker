let saveLocal = (stateObject) => {
    localStorage.setItem('stuff', JSON.stringify(stateObject))
}

export default saveLocal;