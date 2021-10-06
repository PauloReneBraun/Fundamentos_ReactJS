export function Counter() {
    function Increment() {
        console.log('incrementing')
    }

    return (
        <div>
            <h2>0</h2>
            <button type="button">Increment</button>
        </div>
    );
}