

function Loading(props) {
    return (
        <div>
            {
                props.loading
                ?<h2>Loading...</h2>
                :null
            }
        </div>
    )
}

export default Loading;