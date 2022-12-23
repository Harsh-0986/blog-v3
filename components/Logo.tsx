import Image from "next/image";
import logo from "../public/logo.png"

function Logo(props: any) {
    const {renderDefault, title} = props;

    return (<div className="flex items-center space-x-2">
        <Image
            src={logo}
            alt="Logo"
            className="rounded-full object-cover"
            height={90}
            width={125}
        />
        {/*{renderDefault && <>{renderDefault(props)}</>}*/}
    </div>)
}

export default Logo