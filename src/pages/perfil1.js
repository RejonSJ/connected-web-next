import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import EditarContrasea from "../components/editar-contrasea";
import PortalPopup from "../components/portal-popup";
import EditarCorreo4 from "../components/editar-correo4";
import { useRouter } from "next/router";
import RegistrarTienda from "../components/registrar-tienda";
import styles from "./perfil1.module.css";

const Perfil1 = () => {
  const [isEditarContraseaOpen, setEditarContraseaOpen] = useState(false);
  const [isEditarCorreoOpen, setEditarCorreoOpen] = useState(false);
  const router = useRouter();
  const [isRegistrarTiendaOpen, setRegistrarTiendaOpen] = useState(false);

  const openEditarContrasea = useCallback(() => {
    setEditarContraseaOpen(true);
  }, []);

  const closeEditarContrasea = useCallback(() => {
    setEditarContraseaOpen(false);
  }, []);

  const openEditarCorreo = useCallback(() => {
    setEditarCorreoOpen(true);
  }, []);

  const closeEditarCorreo = useCallback(() => {
    setEditarCorreoOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSegment2ContainerClick = useCallback(() => {
    router.push("/productos-sin-tienda");
  }, [router]);

  const openRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(true);
  }, []);

  const closeRegistrarTienda = useCallback(() => {
    setRegistrarTiendaOpen(false);
  }, []);

  return (
    <>
      <div className={styles.perfil}>
        <div className={styles.perfilChild} />
        <div className={styles.stackedCard} onClick={openEditarContrasea}>
          <div className={styles.cardoutlined}>
            <div className={styles.stateLayer} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header}>
                <div className={styles.content}>
                  <div className={styles.monogram}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background1.svg"
                    />
                    <div className={styles.initial}>A</div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.header1}>Cambiar contraseña</div>
                    <div className={styles.subhead}>Subhead</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.editIcon}
                        alt=""
                        src="/edit2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <img className={styles.mediaIcon} alt="" src="/media1@2x.png" />
              </div>
              <div className={styles.textContent}>
                <div className={styles.headline}>
                  <div className={styles.title}>Title</div>
                  <div className={styles.subhead1}>Subhead</div>
                </div>
                <div className={styles.supportingText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.stateLayer2}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer2}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stackedCard1} onClick={openEditarCorreo}>
          <div className={styles.cardoutlined}>
            <div className={styles.stateLayer} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header}>
                <div className={styles.content}>
                  <div className={styles.monogram}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background1.svg"
                    />
                    <div className={styles.initial}>A</div>
                  </div>
                  <div className={styles.text1}>
                    <div className={styles.header3}>
                      Cambiar correo electrónico
                    </div>
                    <div className={styles.subhead2}>example@email.com</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.editIcon}
                        alt=""
                        src="/edit2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <img className={styles.mediaIcon} alt="" src="/media1@2x.png" />
              </div>
              <div className={styles.textContent}>
                <div className={styles.headline}>
                  <div className={styles.title}>Title</div>
                  <div className={styles.subhead1}>Subhead</div>
                </div>
                <div className={styles.supportingText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.stateLayer2}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer2}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.button4}
          variant="outlined"
          color="success"
          onClick={onButtonClick}
        >
          Cerrar sesión
        </Button>
        <div className={styles.navigationRail}>
          <div className={styles.menuFab}>
            <div className={styles.menu}>
              <div className={styles.container}>
                <div className={styles.stateLayer1}>
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
                <div className={styles.stateLayer9}>
                  <img
                    className={styles.iconsmenu24px}
                    alt=""
                    src="/icon2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.destinations}>
            <div className={styles.segment1}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer10}>
                  <img className={styles.editIcon} alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2} onClick={onSegment2ContainerClick}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer10}>
                  <img className={styles.editIcon} alt="" src="/bento.svg" />
                </div>
              </div>
              <div className={styles.label}>Productos</div>
            </div>
            <div className={styles.segment3}>
              <div className={styles.iconContainer2}>
                <div className={styles.stateLayer10}>
                  <img className={styles.editIcon} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer9}>
                  <img className={styles.editIcon} alt="" src="/icon5.svg" />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer9}>
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
                <div className={styles.stateLayer9}>
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
                <div className={styles.stateLayer9}>
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
        <div className={styles.addBusinessParent}>
          <img
            className={styles.addBusinessIcon}
            alt=""
            src="/add-business.svg"
          />
          <div className={styles.noHayNinguna}>
            No hay ninguna tienda registrada
          </div>
          <Button
            className={styles.button5}
            variant="contained"
            color="success"
            onClick={openRegistrarTienda}
          >
            Vincular una tienda
          </Button>
        </div>
      </div>
      {isEditarContraseaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarContrasea}
        >
          <EditarContrasea onClose={closeEditarContrasea} />
        </PortalPopup>
      )}
      {isEditarCorreoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo}
        >
          <EditarCorreo4 onClose={closeEditarCorreo} />
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

export default Perfil1;
