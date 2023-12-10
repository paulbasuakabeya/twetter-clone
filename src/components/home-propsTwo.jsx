function PropsHome({ imageTwo, incrementTwo, altTwo, convertir }) {
    return (
        <>
            <div className="tweet-action">
                <img src={imageTwo} alt={altTwo} />
                <p>{incrementTwo}{convertir}</p>
            </div>
        </>

    )
}
export default PropsHome;