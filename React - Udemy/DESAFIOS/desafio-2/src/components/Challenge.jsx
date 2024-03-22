const Challenge = () => {

    const handleMyEvent = () => {
        console.log('Ativou o evento?')
    }

    return(
        <div>
            <div>
                <h1>Contando no console</h1>
            </div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>

            </div>
        </div>
    )

}
export default Challenge