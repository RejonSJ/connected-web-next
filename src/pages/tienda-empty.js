import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import VincularTienda from "../components/vincular-tienda";
import PortalPopup from "../components/portal-popup";
import RegistrarTienda from "../components/registrar-tienda";
import styles from "./tienda-empty.module.css";

const TiendaEmpty = () => {
  const router = useRouter();
  const [isVincularTiendaOpen, setVincularTiendaOpen] = useState(false);
  const [isRegistrarTiendaOpen, setRegistrarTiendaOpen] = useState(false);

  const onSegment2ContainerClick = useCallback(() => {
    router.push("/productos-sin-tienda");
  }, [router]);

  const openVincularTienda = useCallback(() => {
    setVincularTiendaOpen(true);
  }, []);

  const closeVincularTienda = useCallback(() => {
    setVincularTiendaOpen(false);
  }, []);

  const openRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(true);
  }, []);

  const closeRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(false);
  }, []);

  return (
    <>
      <div className={styles.tiendaEmpty}>
        <div className={styles.tiendaEmptyChild} />
        <div className={styles.navigationRail}>
          <div className={styles.menuFab}>
            <div className={styles.menu}>
              <div className={styles.container}>
                <div className={styles.stateLayer}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/iconsmenu-24px.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fabElevationOverride}>
              <div className={styles.fab}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon12.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinations}>
            <div className={styles.segment1}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer2}>
                  <img className={styles.bentoIcon} alt="" src="/icon18.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2} onClick={onSegment2ContainerClick}>
              <div className={styles.iconContainer1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.bentoIcon} alt="" src="/bento.svg" />
                </div>
              </div>
              <div className={styles.label}>Productos</div>
            </div>
            <div className={styles.segment3}>
              <div className={styles.iconContainer1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.bentoIcon} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img className={styles.bentoIcon} alt="" src="/icon5.svg" />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon6.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.addBusinessIcon}
          alt=""
          src="/add-business.svg"
        />
        <div className={styles.noHayNinguna}>
          No hay ninguna tienda vinculada.
        </div>
        <div className={styles.button} onClick={openVincularTienda}>
          <div className={styles.stateLayer9}>
            <div className={styles.labelText}>Vincular una tienda</div>
          </div>
        </div>
        <div className={styles.button1} onClick={openRegistrarTienda}>
          <div className={styles.stateLayer9}>
            <div className={styles.labelText}>Crear una tienda</div>
          </div>
        </div>
      </div>
      {isVincularTiendaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeVincularTienda}
        >
          <VincularTienda onClose={closeVincularTienda} />
        </PortalPopup>
      )}
      {isRegistrarTiendaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRegistrarTienda}
        >
          <RegistrarTienda onClose={closeRegistrarTienda} />
        </PortalPopup>
      )}
    </>
  );
};

export default TiendaEmpty;
