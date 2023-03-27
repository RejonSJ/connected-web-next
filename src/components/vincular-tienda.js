import styles from "./vincular-tienda.module.css";

const VincularTienda = ({ onClose }) => {
  return (
    <div className={styles.vincularTienda}>
      <div className={styles.basicDialog}>
        <div className={styles.titleDescription}>
          <img className={styles.icon} alt="" src="/icon11.svg" />
          <div className={styles.headline}>Vincular tienda</div>
          <div className={styles.supportingText}>
            Ingresa el código de vinculación.
          </div>
          <div className={styles.textField}>
            <div className={styles.textField1}>
              <div className={styles.stateLayer}>
                <div className={styles.content}>
                  <div className={styles.labelText}>
                    <div className={styles.labelText1}>Código</div>
                  </div>
                  <div className={styles.inputText}>
                    <div className={styles.inputText1}>0000-0000-0000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activeIndicator} />
            <div className={styles.supportingText1}>
              <div className={styles.supportingText2}>Supporting text</div>
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
                <div className={styles.labelText2}>Cancelar</div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.stateLayer1}>
                <div className={styles.labelText2}>Vincular</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VincularTienda;
