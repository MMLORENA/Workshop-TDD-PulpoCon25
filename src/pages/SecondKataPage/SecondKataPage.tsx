import { KataHeader } from "../../components/KataHeader/KataHeader";
import ExtractPulpos from "../../components/ExtractPulpos/ExtractPulpos";
import { Navigation } from "../../components/Navigation/Navigation";
import { paths } from "../../config/paths";

export const SecondKataPage = () => {
  return (
    <>
      <Navigation backLink={paths.workshopHub} nextLink={paths.changeCode} />
      <KataHeader
        kataNumber={2}
        title="Escribe tu primer ciclo  de TDD"
        instructionsPath="kata-2 → README.md"
      />
      <ExtractPulpos />
    </>
  );
};
