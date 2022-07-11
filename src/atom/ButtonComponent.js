const ButtonComponent=({
    onSubmit=()=>{},
    lable="",
    style={},
    className=""
})=>{

    return(
        <div>
            <button onClick={onSubmit} style={style} lable={lable} className={className} >{lable}</button>
        </div>
    )
}

export default ButtonComponent;