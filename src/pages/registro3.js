import { Button } from "@mui/material";
import styles from "./registro3.module.css";

const Registro3 = () => {
  return (
    <div className={styles.registro3}>
      <div className={styles.maskGroup}>
        <img className={styles.big11Icon} alt="" src="/big1-1@2x.png" />
        <div className={styles.textField}>
          <div className={styles.textField1}>
            <div className={styles.stateLayer}>
              <div className={styles.content}>
                <div className={styles.labelText}>
                  <div className={styles.labelText1}>Nombre</div>
                </div>
                <div className={styles.inputText}>
                  <div className={styles.inputText1}>
                    José Roberto García de la Barrera
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.activeIndicator} />
          <div className={styles.supportingText}>
            <div className={styles.supportingText1}>Supporting text</div>
          </div>
        </div>
        <div className={styles.paso2Informacin}>
          Paso 2: Información de usuario
        </div>
        <div className={styles.stackedCard}>
          <div className={styles.cardoutlined}>
            <div className={styles.stateLayer1} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header}>
                <div className={styles.content1}>
                  <div className={styles.monogram}>
                    <img className={styles.backgroundIcon} alt="" />
                    <div className={styles.initial}>A</div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.header1}>Ubicación</div>
                    <div className={styles.subhead}>Seleccionar ubicación</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer2}>
                      <img className={styles.placeIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <img className={styles.mediaIcon} alt="" src="/media4@2x.png" />
              </div>
              <div className={styles.textContent}>
                <div className={styles.headline}>
                  <div className={styles.title}>Title</div>
                  <div className={styles.subhead1}>Subhead</div>
                </div>
                <div className={styles.supportingText2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText2}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText2}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.horizontalCard}>
          <div className={styles.cardoutlined}>
            <div className={styles.stateLayer1} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.header2}>
              <div className={styles.content2}>
                <div className={styles.monogram}>
                  <img className={styles.backgroundIcon} alt="" />
                  <div className={styles.initial}>A</div>
                </div>
                <div className={styles.text}>
                  <div className={styles.header1}>Foto de perfil</div>
                  <div className={styles.subhead}>Subir foto</div>
                </div>
              </div>
              <div className={styles.media1}>
                <img className={styles.mediaIcon} alt="" src="/media5@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image21Icon} alt="" src="/image2-1@2x.png" />
      <div className={styles.registroExitoso}>¡Registro exitoso!</div>
      <Button className={styles.button2} variant="text" color="success">
        Click para continuar
      </Button>
    </div>
  );
};

export default Registro3;
