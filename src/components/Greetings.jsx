function Greetings(props){

    return (
        <div className="d-flex justify-content-start w-50 border p-2 mb-2">
            { props.lang === "de" && <> Hallo  </>}
            { props.lang === "en" && <> Hello </>}
            { props.lang === "es" && <> Hola </>}
            { props.lang === "fr" && <> Bonjour </>}
            { props.children }
        </div>
    )

}

export default Greetings