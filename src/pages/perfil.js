import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import TiendaContacto from "../components/tienda-contacto";
import PortalPopup from "../components/portal-popup";
import EditarCorreo1 from "../components/editar-correo1";
import EditarCorreo2 from "../components/editar-correo2";
import EditarCorreo3 from "../components/editar-correo3";
import EditarContrasea from "../components/editar-contrasea";
import EditarCorreo4 from "../components/editar-correo4";
import { useRouter } from "next/router";
import styles from "./perfil.module.css";

const Perfil = () => {
  const [isTiendaContactoOpen, setTiendaContactoOpen] = useState(false);
  const [isEditarCorreoOpen, setEditarCorreoOpen] = useState(false);
  const [isEditarCorreo1Open, setEditarCorreo1Open] = useState(false);
  const [isEditarCorreo2Open, setEditarCorreo2Open] = useState(false);
  const [isEditarCorreo3Open, setEditarCorreo3Open] = useState(false);
  const [isEditarContraseaOpen, setEditarContraseaOpen] = useState(false);
  const [isEditarCorreo4Open, setEditarCorreo4Open] = useState(false);
  const router = useRouter();

  const openTiendaContacto = useCallback(() => {
    setTiendaContactoOpen(true);
  }, []);

  const closeTiendaContacto = useCallback(() => {
    setTiendaContactoOpen(false);
  }, []);

  const openEditarCorreo = useCallback(() => {
    setEditarCorreoOpen(true);
  }, []);

  const closeEditarCorreo = useCallback(() => {
    setEditarCorreoOpen(false);
  }, []);

  const openEditarCorreo1 = useCallback(() => {
    setEditarCorreo1Open(true);
  }, []);

  const closeEditarCorreo1 = useCallback(() => {
    setEditarCorreo1Open(false);
  }, []);

  const openEditarCorreo2 = useCallback(() => {
    setEditarCorreo2Open(true);
  }, []);

  const closeEditarCorreo2 = useCallback(() => {
    setEditarCorreo2Open(false);
  }, []);

  const openEditarCorreo3 = useCallback(() => {
    setEditarCorreo3Open(true);
  }, []);

  const closeEditarCorreo3 = useCallback(() => {
    setEditarCorreo3Open(false);
  }, []);

  const openEditarContrasea = useCallback(() => {
    setEditarContraseaOpen(true);
  }, []);

  const closeEditarContrasea = useCallback(() => {
    setEditarContraseaOpen(false);
  }, []);

  const openEditarCorreo4 = useCallback(() => {
    setEditarCorreo4Open(true);
  }, []);

  const closeEditarCorreo4 = useCallback(() => {
    setEditarCorreo4Open(false);
  }, []);

  const onButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSegment2ContainerClick = useCallback(() => {
    router.push("/productos-sin-tienda");
  }, [router]);

  return (
    <>
      <div className={styles.perfil}>
        <div className={styles.perfilChild} />
        <div className={styles.stackedCard} onClick={openTiendaContacto}>
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
                      src="/background.svg"
                    />
                    <div className={styles.initial}>A</div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.header1}>Header</div>
                    <div className={styles.subhead}>Subhead</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img
                        className={styles.iconsmoreVert24px}
                        alt=""
                        src="/iconsmore-vert-24px.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <img className={styles.mediaIcon} alt="" src="/media@2x.png" />
              </div>
              <div className={styles.textContent}>
                <div className={styles.headline}>
                  <div className={styles.title}>Panadería Vesuvio</div>
                  <div className={styles.subhead1}>A 2km de distancia</div>
                </div>
                <div className={styles.iconButton1}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img className={styles.editIcon} alt="" src="/edit.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.supportingText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions}>
                  <div className={styles.button}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button1}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listItemlistItem2DensitParent}>
          <div
            className={styles.listItemlistItem2Densit}
            onClick={openEditarCorreo}
          >
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer5}>
              <div className={styles.leadingElement}>
                <img className={styles.editIcon} alt="" src="/whatsapp1.svg" />
              </div>
              <div className={styles.content1}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline1}>Whatsapp</div>
                <div className={styles.supportingText1}>999999999999</div>
              </div>
              <div className={styles.trailingElement}>
                <div className={styles.metadata}>100+</div>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div
            className={styles.listItemlistItem2Densit1}
            onClick={openEditarCorreo1}
          >
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer5}>
              <div className={styles.leadingElement}>
                <img className={styles.editIcon} alt="" src="/message1.svg" />
              </div>
              <div className={styles.content1}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline1}>Mensaje directo</div>
                <div className={styles.supportingText1}>999999999999</div>
              </div>
              <div className={styles.trailingElement}>
                <div className={styles.metadata}>100+</div>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div
            className={styles.listItemlistItem2Densit2}
            onClick={openEditarCorreo2}
          >
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer5}>
              <div className={styles.leadingElement}>
                <img className={styles.editIcon} alt="" src="/phone1.svg" />
              </div>
              <div className={styles.content1}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline1}>Llamada directa</div>
                <div className={styles.supportingText1}>999999999999</div>
              </div>
              <div className={styles.trailingElement}>
                <div className={styles.metadata}>100+</div>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div
            className={styles.listItemlistItem2Densit3}
            onClick={openEditarCorreo3}
          >
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer5}>
              <div className={styles.leadingElement}>
                <img className={styles.editIcon} alt="" src="/place.svg" />
              </div>
              <div className={styles.content1}>
                <div className={styles.overline}>Overline</div>
                <div className={styles.headline1}>Dirección</div>
                <div className={styles.supportingText1}>Dirección temporal</div>
              </div>
              <div className={styles.trailingElement}>
                <div className={styles.metadata}>100+</div>
                <img className={styles.editIcon} alt="" src="/edit1.svg" />
              </div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
          <div className={styles.listItemlistItem2Densit4}>
            <div className={styles.buildingBlocksstateLayer1} />
            <div className={styles.stateLayer9}>
              <div className={styles.content1}>
                <div className={styles.overline4}>Overline</div>
                <div className={styles.headline5}>Contacto</div>
                <div className={styles.supportingText5}>
                  Supporting line text lorem ipsum
                </div>
              </div>
              <div className={styles.trailingSupportingText}>100+</div>
            </div>
            <div className={styles.divider}>
              <div className={styles.divider1} />
            </div>
          </div>
        </div>
        <div className={styles.stackedCard1} onClick={openEditarContrasea}>
          <div className={styles.cardoutlined1}>
            <div className={styles.stateLayer} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header2}>
                <div className={styles.content}>
                  <div className={styles.monogram1}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background1.svg"
                    />
                    <div className={styles.initial1}>A</div>
                  </div>
                  <div className={styles.text1}>
                    <div className={styles.header3}>Cambiar contraseña</div>
                    <div className={styles.subhead2}>Subhead</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img className={styles.editIcon} alt="" src="/edit.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media1}>
                <img className={styles.mediaIcon} alt="" src="/media1@2x.png" />
              </div>
              <div className={styles.textContent1}>
                <div className={styles.headline6}>
                  <div className={styles.title1}>Title</div>
                  <div className={styles.subhead3}>Subhead</div>
                </div>
                <div className={styles.supportingText6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions1}>
                  <div className={styles.button2}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button3}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stackedCard2} onClick={openEditarCorreo4}>
          <div className={styles.cardoutlined1}>
            <div className={styles.stateLayer} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header2}>
                <div className={styles.content}>
                  <div className={styles.monogram1}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background1.svg"
                    />
                    <div className={styles.initial1}>A</div>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.header1}>
                      Cambiar correo electrónico
                    </div>
                    <div className={styles.subhead4}>example@email.com</div>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img className={styles.editIcon} alt="" src="/edit.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.media1}>
                <img className={styles.mediaIcon} alt="" src="/media1@2x.png" />
              </div>
              <div className={styles.textContent1}>
                <div className={styles.headline6}>
                  <div className={styles.title1}>Title</div>
                  <div className={styles.subhead3}>Subhead</div>
                </div>
                <div className={styles.supportingText6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </div>
                <div className={styles.actions1}>
                  <div className={styles.button2}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.button3}>
                    <div className={styles.stateLayer3}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.button6}
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
                    className={styles.iconsmoreVert24px}
                    alt=""
                    src="/iconsmenu-24px.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fabElevationOverride}>
              <div className={styles.fab}>
                <div className={styles.stateLayer19}>
                  <img
                    className={styles.iconsmoreVert24px}
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
                <div className={styles.stateLayer20}>
                  <img className={styles.editIcon} alt="" src="/icon3.svg" />
                </div>
              </div>
              <div className={styles.label}>Tienda</div>
            </div>
            <div className={styles.segment2} onClick={onSegment2ContainerClick}>
              <div className={styles.iconContainer}>
                <div className={styles.stateLayer20}>
                  <img className={styles.editIcon} alt="" src="/bento.svg" />
                </div>
              </div>
              <div className={styles.label}>Productos</div>
            </div>
            <div className={styles.segment3}>
              <div className={styles.iconContainer2}>
                <div className={styles.stateLayer20}>
                  <img className={styles.editIcon} alt="" src="/icon4.svg" />
                </div>
              </div>
              <div className={styles.label}>Perfil</div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer19}>
                  <img className={styles.editIcon} alt="" src="/icon5.svg" />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer19}>
                  <img
                    className={styles.iconsmoreVert24px}
                    alt=""
                    src="/icon6.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer19}>
                  <img
                    className={styles.iconsmoreVert24px}
                    alt=""
                    src="/icon7.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.segment4}>
              <div className={styles.container}>
                <div className={styles.stateLayer19}>
                  <img
                    className={styles.iconsmoreVert24px}
                    alt=""
                    src="/icon8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isTiendaContactoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTiendaContacto}
        >
          <TiendaContacto onClose={closeTiendaContacto} />
        </PortalPopup>
      )}
      {isEditarCorreoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo}
        >
          <EditarCorreo1 onClose={closeEditarCorreo} />
        </PortalPopup>
      )}
      {isEditarCorreo1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo1}
        >
          <EditarCorreo2 onClose={closeEditarCorreo1} />
        </PortalPopup>
      )}
      {isEditarCorreo2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo2}
        >
          <EditarCorreo2 onClose={closeEditarCorreo2} />
        </PortalPopup>
      )}
      {isEditarCorreo3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo3}
        >
          <EditarCorreo3 onClose={closeEditarCorreo3} />
        </PortalPopup>
      )}
      {isEditarContraseaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarContrasea}
        >
          <EditarContrasea onClose={closeEditarContrasea} />
        </PortalPopup>
      )}
      {isEditarCorreo4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditarCorreo4}
        >
          <EditarCorreo4 onClose={closeEditarCorreo4} />
        </PortalPopup>
      )}
    </>
  );
};

export default Perfil;
