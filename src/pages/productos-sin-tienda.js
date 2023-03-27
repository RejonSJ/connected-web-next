import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import RegistrarTienda from "../components/registrar-tienda";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./productos-sin-tienda.module.css";

const ProductosSinTienda = () => {
  const [isRegistrarTiendaOpen, setRegistrarTiendaOpen] = useState(false);
  const router = useRouter();

  const openRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(true);
  }, []);

  const closeRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(false);
  }, []);

  const onSegment3ContainerClick = useCallback(() => {
    router.push("/perfil1");
  }, [router]);

  return (
    <>
      <div className={styles.productosSinTienda}>
        <div className={styles.productosSinTiendaChild} />
        <img
          className={styles.addBusinessIcon}
          alt=""
          src="/add-business.svg"
        />
        <div className={styles.vinculeUnaTiendaContainer}>
          <p className={styles.vinculeUnaTienda}>
            Vincule una tienda para administrar
          </p>
          <p className={styles.vinculeUnaTienda}>productos.</p>
        </div>
        <Button className={styles.button} variant="contained" color="success">
          Vincular una tienda
        </Button>
        <Button
          className={styles.button1}
          variant="outlined"
          color="success"
          onClick={openRegistrarTienda}
        >
          Crear una tienda
        </Button>
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
                  <img className={styles.icon1} alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2}>
              <div className={styles.iconContainer1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon15.svg" />
                </div>
              </div>
              <div className={styles.label}>Hot Deals</div>
            </div>
            <div className={styles.segment3} onClick={onSegment3ContainerClick}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
                  <img className={styles.icon1} alt="" src="/icon5.svg" />
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
      </div>
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

export default ProductosSinTienda;
