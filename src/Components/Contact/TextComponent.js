
function TextComponent(props) {
    return (
        <div className="flex text-sm text-[#8D8D8D] hover:text-black flex-col  sm:w-[40%]">
            <label className="">{props.label}</label>
            <input type="text" className="border-0 border-b border-solid border-grey"></input>
        </div>
    )
}
export default TextComponent;