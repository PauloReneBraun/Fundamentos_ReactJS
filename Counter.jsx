export function Counter() {
    let Counter = 0;

    function increment() {
        Counter += 1;
    }

    return (
        <div>
            <h2>{Counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}