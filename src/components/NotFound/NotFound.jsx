

import image from './image-asset.jpeg';
import { Conteiner, Title, Image,BtnBack } from './NotFound.styled';


export const NotFound = () => {
    return(
        <Conteiner>
            <Title>Opsss! This page doesn&apos;t exist!</Title>
            <Image src={image} alt="not found" style={{ width: 200 }} />
            <BtnBack to="">
                Open home page
            </BtnBack>
        </Conteiner>
        
    )
}