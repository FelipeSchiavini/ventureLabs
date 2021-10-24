import '../Steps/FormStyle/Form.css'

export function ErrorType (props) {
    return(
    <>
    {
        props.error && props.error.type === "required" && (
        <span className ="alert">This is required</span>
    )
    }
    </>
)}
