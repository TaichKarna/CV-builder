export default Wrapper;

function Wrapper({ children }){
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}