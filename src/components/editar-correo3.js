import { TextField, Button } from "@mui/material";
import styles from "./editar-correo3.module.css";

const EditarCorreo3 = ({ onClose }) => {
  return (
    <div className={styles.editarCorreo}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
          <div className={styles.headline}>Editar dirección</div>
          <div className={styles.supportingText}>
            Ingresa el código de vinculación.
          </div>
          <TextField
            className={styles.textField}
            sx={{ width: 264 }}
            color="success"
            variant="filled"
            defaultValue="Dirección temporal"
            type="text"
            label="Dirección"
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

export default EditarCorreo3;
