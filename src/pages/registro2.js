import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./registro2.module.css";

const Registro2 = () => {
  const router = useRouter();

  const onButtonContainer2Click = useCallback(() => {
    router.push("/registro3");
  }, [router]);

  return (
    <div className={styles.registro2}>
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
      <div className={styles.paso2Informacin1}>
        Paso 2: Información de usuario
      </div>
      <div className={styles.button2} onClick={onButtonContainer2Click}>
        <div className={styles.stateLayer6}>
          <img className={styles.icon} alt="" src="/icon16.svg" />
          <div className={styles.labelText2}>Continuar</div>
        </div>
      </div>
      <div className={styles.button3}>
        <div className={styles.stateLayer6}>
          <img className={styles.icon} alt="" src="/icon17.svg" />
          <div className={styles.labelText2}>Regresar</div>
        </div>
      </div>
      <img className={styles.image21Icon} alt="" src="/image2-11@2x.png" />
      <div className={styles.textField2}>
        <div className={styles.textField3}>
          <div className={styles.stateLayer}>
            <div className={styles.content}>
              <div className={styles.labelText}>
                <div className={styles.labelText1}>Nombre</div>
              </div>
              <div className={styles.inputText2}>
                <div className={styles.inputText1}>
                  José Roberto García de la Barrera
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.activeIndicator1} />
        <div className={styles.supportingText}>
          <div className={styles.supportingText1}>Supporting text</div>
        </div>
      </div>
      <div className={styles.stackedCard1}>
        <div className={styles.cardoutlined2}>
          <div className={styles.stateLayer1} />
        </div>
        <div className={styles.contentContainer2}>
          <div className={styles.mediaTextContent}>
            <div className={styles.header}>
              <div className={styles.content1}>
                <div className={styles.monogram}>
                  <img
                    className={styles.backgroundIcon}
                    alt=""
                    src="/background1.svg"
                  />
                  <div className={styles.initial}>A</div>
                </div>
                <div className={styles.text2}>
                  <div className={styles.header1}>Ubicación</div>
                  <div className={styles.subhead}>Seleccionar ubicación</div>
                </div>
              </div>
              <div className={styles.iconButton}>
                <div className={styles.container}>
                  <div className={styles.stateLayer2}>
                    <img
                      className={styles.placeIcon}
                      alt=""
                      src="/place1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.media}>
              <img className={styles.mediaIcon} alt="" src="/media6@2x.png" />
            </div>
            <div className={styles.textContent}>
              <div className={styles.headline}>
                <div className={styles.title}>Title</div>
                <div className={styles.subhead1}>Subhead</div>
              </div>
              <div className={styles.supportingText2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
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
      <div className={styles.horizontalCard1}>
        <div className={styles.cardoutlined2}>
          <div className={styles.stateLayer1} />
        </div>
        <div className={styles.contentContainer2}>
          <div className={styles.header2}>
            <div className={styles.content2}>
              <div className={styles.monogram}>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="/background1.svg"
                />
                <div className={styles.initial}>A</div>
              </div>
              <div className={styles.text2}>
                <div className={styles.header1}>Foto de perfil</div>
                <div className={styles.subhead}>Subir foto</div>
              </div>
            </div>
            <div className={styles.media3}>
              <img className={styles.mediaIcon} alt="" src="/media7@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro2;
