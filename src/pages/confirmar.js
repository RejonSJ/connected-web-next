import { Button } from "@mui/material";
import styles from "./confirmar.module.css";

const Confirmar = () => {
  return (
    <div className={styles.confirmar}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon10.svg" />
          <div className={styles.headline}>Advertencia</div>
          <div className={styles.supportingText}>
            <p className={styles.estaAccinEs}>Esta acción es permanente.</p>
            <p className={styles.estaAccinEs}>¿Desea eliminar el Deal?</p>
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
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmar;
