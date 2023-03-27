import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./editar-contrasea.module.css";

const EditarContrasea = ({ onClose }) => {
  return (
    <div className={styles.editarContrasea}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon1.svg" />
          <div className={styles.headline}>Cambiar contraseña</div>
          <div className={styles.supportingText}>
            Ingresa el código de vinculación.
          </div>
          <div className={styles.textFieldParent}>
            <TextField
              className={styles.textField}
              sx={{ width: 264 }}
              color="success"
              variant="filled"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <Icon>visibility</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Contraseña actual"
              placeholder="Placeholder"
              helperText="Las contraseñas deben coincidir"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.textField1}
              sx={{ width: 264 }}
              color="success"
              variant="filled"
              type="text"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <Icon>visibility</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Contraseña actual"
              placeholder="Placeholder"
              helperText="Debe ser de al menos 10 caracteres"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.textField2}
              sx={{ width: 264 }}
              color="success"
              variant="filled"
              type="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <Icon>visibility</Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Contraseña actual"
              placeholder="Placeholder"
              size="medium"
              margin="none"
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

export default EditarContrasea;
