import Loader from "react-js-loader";

const Loading = () => {
    return (
        <div className="w-full h-full" style={{
            paddingTop: '200px'
        }}>
            <Loader type="box-rotate-x" bgColor={"#1f2937"} color={"#1f2937"} title={"Loading..."} size={100} />
        </div>
    );
}

export default Loading;
