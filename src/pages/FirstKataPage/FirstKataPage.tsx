import { KataHeader } from "../../components/KataHeader/KataHeader";
import ExtractPulpos from "../../components/ExtractPulpos/ExtractPulpos";
import { Navigation } from "../../components/Navigation/Navigation";
import { paths } from "../../config/paths";

export const FirstKataPage = () => {
  return (
    <>
      <Navigation backLink={paths.workshopHub} nextLink={paths.changeCode} />
      <KataHeader
        kataNumber={1}
        title="Piensa antes de escribir ningún test. ¿Qué lista de casos de uso voy a testear?"
        instructionsPath="kata-1 → README.md"
      />
      <ExtractPulpos />
    </>
  );
};
