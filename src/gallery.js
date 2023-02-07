export default function Gallery(props) {
    return (
        <div>
            <img style={{ 'width': '100%' }} src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}