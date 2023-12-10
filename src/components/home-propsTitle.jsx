function PropsHomeTitle({ title, details, times }) {
    return (
        <>
            <div className="tweet-title">
                <h4 className="tweet-title-author">{title} </h4>
                <img src="src\Icons\Icons\Verified.svg" alt="verified" />
                <p className="tweet-title-details">{details}.{times}</p>
            </div>
        </>

    )
}
export default PropsHomeTitle;