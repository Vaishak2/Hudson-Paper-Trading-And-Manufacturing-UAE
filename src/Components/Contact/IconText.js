
function IconText(props) {
    return(
        <div className="flex gap-5 text-primary-color hover:text-secondary-color">
        <span class="material-symbols-outlined">
            {props.icon}
        </span>
        <p>
            {props.text}
        </p>
    </div>
    )
}
export default IconText