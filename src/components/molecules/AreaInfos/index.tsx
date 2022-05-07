import { Information } from "../../atoms/Info";
import { SectionInfos } from "./styles";
import { AiFillHeart } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";

export const AreaInfos = () => {
  return (
    <SectionInfos>
      <Information
        title="Cidade: São Paulo"
        Icon={<ImLocation2 color="white" />}
      />
      <Information
        title="Central de Atendimento"
        Icon={<BsTelephoneFill color="white" />}
      />
      <Information
        title="Lista de desejos"
        Icon={<AiFillHeart color="white" />}
      />
    </SectionInfos>
  );
};
