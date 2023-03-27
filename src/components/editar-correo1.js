import { TextField, Button } from "@mui/material";
import styles from "./editar-correo1.module.css";

const EditarCorreo1 = ({ onClose }) => {
  return (
    <div className={styles.editarCorreo}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
          <div className={styles.headline}>Editar número</div>
          <div className={styles.supportingText}>
            Ingresa el código de vinculación.
          </div>
          <TextField
            className={styles.textField}
            sx={{ width: 264 }}
            color="success"
            variant="filled"
            defaultValue="0000000000"
            type="tel"
            label="Mensaje directo"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
        </div>
        <div className={styles.divider}>
          <div className={styles.horizontalfullWidth}>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <Button variant="text" color="success">
              Cancelar
            </Button>
            <Button variant="text" color="success">
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarCorreo1;
