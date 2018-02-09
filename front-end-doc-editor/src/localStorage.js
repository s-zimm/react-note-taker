let saveLocal = (stateObject) => {
    localStorage.setItem('react-notes', JSON.stringify(stateObject))
}

export default saveLocal;