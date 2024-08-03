export default function Main(props){
    const { data, handleToggleModal } = props
    return(
        <div className="imageContainer">
            <img onClick={handleToggleModal} src={data.hdurl} alt={data.title || 'bg-Img'} className="bgimage" />
        </div>
    )
}