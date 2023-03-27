import { useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./editar.module.css";

const Editar = ({ onClose }) => {
  const [textFieldDateTimePickerValue, setTextFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.editar}>
        <div className={styles.basicDialog}>
          <div className={styles.titleDescription}>
            <img className={styles.icon} alt="" src="/icon1.svg" />
            <div className={styles.headline}>Editar publicación</div>
            <div className={styles.supportingText}>
              Ingrese los datos de la tienda
            </div>
            <div className={styles.textField}>
              <TextField
                className={styles.textField1}
                color="success"
                variant="filled"
                defaultValue="Pan francés"
                type="text"
                label="Nombre"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <div className={styles.activeIndicator} />
              <div className={styles.supportingText1}>
                <div className={styles.supportingText2}>Supporting text</div>
              </div>
            </div>
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
                      <div className={styles.header1}>Foto del producto</div>
                      <div className={styles.subhead}>Subir foto</div>
                    </div>
                  </div>
                  <div className={styles.media}>
                    <img
                      className={styles.mediaIcon}
                      alt=""
                      src="/media2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <TextField
              className={styles.textField2}
              sx={{ width: 406 }}
              color="success"
              variant="filled"
              defaultValue="10 piezas por 10 pesos"
              type="text"
              label="Descripción"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <div>
              <DatePicker
                label="Vencimiento"
                value={textFieldDateTimePickerValue}
                onChange={(newValue) => {
                  setTextFieldDateTimePickerValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="success"
                    variant="standard"
                    size="medium"
                    renderInput={{ placeholder: "XX/XX/XXXX" }}
                    helperText=""
                  />
                )}
              />
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
                <Button variant="text" color="success">
                  Cancelar
                </Button>
              </div>
              <Button variant="text" color="success">
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Editar;
