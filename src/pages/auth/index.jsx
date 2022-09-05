import { IonContent, IonPage, IonImg, IonButton } from "@ionic/react";
import assets from "../../assets";

const Auth = () => {
  return (
    <IonPage>
      <IonContent className="container vh100" fullscreen>
        <IonImg src={assets.image1} className="mb-2 mt-2" />
        <IonImg src={assets.logo} className="logo" />
          <p className="text-center ts-1 text-blue mt-2">
            Gestiona fácil y rápido tus presupuestos y <br />
            facturas de autónomo.
          </p>
        <div className="smallBox alignBottom">
          <div className="">
            <IonButton
              fill="clear"
              expand="block"
              strong
              className="whiteBtn mb-2 ts-2"
            >
              Crear Cuenta
            </IonButton>
            <IonButton
              fill="clear"
              expand="block"
              strong
              className="whiteBtn ts-2"
            >
              Iniciar Sesión
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
