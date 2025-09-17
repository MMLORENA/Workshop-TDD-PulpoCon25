import { KataHeader } from "../../components/KataHeader/KataHeader";
import { Navigation } from "../../components/Navigation/Navigation";
import { PasswordValidator } from "../../components/PasswordValidator/PasswordValidator";
import { paths } from "../../config/paths";

export const FourthKataPage = () => {
  return (
    <>
      <Navigation backLink={paths.workshopHub} nextLink={paths.changeCode} />
      <KataHeader
        kataNumber={4}
        title="Password Validator"
        instructionsPath="kata-4 → README.md"
      />
      <PasswordValidator />
    </>
  );
};
