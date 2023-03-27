import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./registrar-tienda.module.css";

const RegistrarTienda = ({ onClose }) => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/perfil");
  }, [router]);

  return (
    <div className={styles.registrarTienda}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon11.svg" />
          <div className={styles.headline}>Registrar tienda</div>
          <div className={styles.supportingText}>
            Ingrese los datos de la tienda
          </div>
          <TextField
            className={styles.textField}
            sx={{ width: 408 }}
            color="success"
            variant="filled"
            defaultValue="Panadería Vesuvio"
            type="text"
            label="Nombre"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <TextField
            className={styles.textField}
            sx={{ width: 408 }}
            color="success"
            variant="filled"
            defaultValue="Dirección temporal"
            type="text"
            label="Dirección"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <div className={styles.horizontalCard}>
            <div className={styles.cardoutlined}>
              <div className={styles.stateLayer} />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.header}>
                <div className={styles.content}>
                  <div className={styles.monogram}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background2.svg"
                    />
                    <div className={styles.initial}>A</div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.header1}>
                      Foto del establecimiento
                    </div>
                    <div className={styles.subhead}>Subir foto</div>
                  </div>
                </div>
                <div className={styles.media}>
                  <img
                    className={styles.mediaIcon}
                    alt=""
                    src="/media3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.horizontalfullWidth}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <div className={styles.button}>
              <div className={styles.stateLayer1}>
                <div className={styles.labelText}>Cancelar</div>
              </div>
            </div>
            <div className={styles.button1} onClick={onButtonContainer1Click}>
              <div className={styles.stateLayer1}>
                <div className={styles.labelText}>Registrar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarTienda;
