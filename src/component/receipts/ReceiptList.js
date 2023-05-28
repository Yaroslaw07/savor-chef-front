import ReceiptItem from "./ReceiptItem"

function ReceiptList(props) {
    return (
    <ul>
        {props.receipts.map(
            receipt => <ReceiptItem key = {receipt.id} name={receipt.name}></ReceiptItem>
        )}
    </ul>
    )
}

export default ReceiptList
