import ContentLoader from "react-content-loader";

function Skeleton() {
    return  (
        <div className="pizza-block">
          <ContentLoader 
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="134" cy="99" r="99" /> 
            <rect x="0" y="216" rx="10" ry="10" width="280" height="19" /> 
            <rect x="0" y="246" rx="10" ry="10" width="280" height="88" /> 
            <rect x="0" y="353" rx="10" ry="10" width="65" height="31" /> 
            <rect x="165" y="351" rx="10" ry="10" width="115" height="31" />
        </ContentLoader>
        </div>
    );
}

export default Skeleton;