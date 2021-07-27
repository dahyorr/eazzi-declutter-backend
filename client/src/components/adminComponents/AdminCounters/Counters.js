function formatNumberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function Counters({counters}) {
    const renderedList = counters.map(item => (
        <div className="counter" key={item.title}>
                <p className="title text-secondary">{item.title}</p>
                <p className="count">{formatNumberWithCommas(item.count)}</p>
            </div>
    ))
    return (
        <div className="Counters grid">
            {renderedList}
        </div>
    )
}

export default Counters
