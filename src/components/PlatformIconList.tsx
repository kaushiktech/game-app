import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {Platform} from "../hooks/useGames";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {HStack, Icon, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({platforms}:Props) => {
    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        xbox:FaXbox,
        playstation:FaPlaystation,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        android:FaAndroid,
        web:BsGlobe
    }
    return (
            <HStack marginY={'15px'}>
            {platforms.map(platform=>(
                <Icon color='gray.500' as={iconMap[platform.slug]} />
            ))}
            </HStack>
    );
};

export default PlatformIconList;
