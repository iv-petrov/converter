
function MyCurrency(props) {
    return (
    <div>
        <label>{props.label}
            <select value={props.value} onChange={props.change}>
            <option value="0"> </option>
            <option value="89.25">USD</option>
            <option value="98.11">EUR</option>
            <option value="11.16">CNY</option>
            <option value="1.00">RUB</option>
            </select>
        </label> 
    </div>
    )
}

export default MyCurrency