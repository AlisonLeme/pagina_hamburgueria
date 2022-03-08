import Header from '../components/Header'

// children é o conteudo do miolo que ficara no meio de tudo
const Default = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <footer>FOOTER</footer>
        </>
    )
}

export default Default; 