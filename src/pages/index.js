import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const PantallaInicial = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/productos-sin-tienda");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/registro");
  }, [router]);

  return (
    <div className={styles.pantallaInicial}>
      <div className={styles.image21Parent}>
        <img className={styles.image21Icon} alt="" src="/image2-12@2x.png" />
        <img className={styles.image22Icon} alt="" src="/image2-2@2x.png" />
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <TextField
        className={styles.textField}
        sx={{ width: 439 }}
        color="success"
        variant="outlined"
        defaultValue="Correo electronico"
        type="email"
        label="example@email.com"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.textField1}
        sx={{ width: 439 }}
        color="success"
        variant="outlined"
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
        label="Contraseña"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <Button
        className={styles.button}
        sx={{ width: 166 }}
        variant="contained"
        color="success"
        onClick={onButtonClick}
      >
        Iniciar sesión
      </Button>
      <Button
        className={styles.button1}
        sx={{ width: 157 }}
        variant="outlined"
        color="success"
        onClick={onButton1Click}
      >
        Registrarme
      </Button>
      <Button
        className={styles.olvidMiContrasea}
        variant="text"
        color="success"
      >
        Olvidé mi contraseña
      </Button>
    </div>
  );
};

export default PantallaInicial;

