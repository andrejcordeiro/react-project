type ButtonProps = {
    text: string
}
export function NormalButton(props: ButtonProps) {
    return (
        <button type="button">{props.text}</button>
    );
}
  