import defaultAvatar from "../../imgs/icones/defaultAvatar.svg"
function AvatarWrapper ( props ) {
    return (
        <div className="AvatarWrapper">
            <img src={props.avatarImg ? props.avatarImg : defaultAvatar} alt="Avatar" />
        </div>
    )
}
export default AvatarWrapper